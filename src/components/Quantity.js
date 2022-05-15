import { useState, useContext, useRef, useEffect } from "react";
import { Context } from "../Context";
import styled from "styled-components";
import { Button } from "../Routes/Store";
import { Selection } from "../Routes/Store";
import { translateAlert, translateToppings } from "../helper";
import { motion, AnimatePresence } from "framer-motion";

export const QtyWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 8rem;
  height: 2rem;
  margin: -1rem auto 1rem auto;
`;
export const Plus = styled.span`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: black;
  font-size: 2rem;
  svg {
    color: ${(props) => props.theme.yellow};
  }
`;
export const Minus = styled(Plus)``;

const Alert = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: -2rem;
  color: red;
  width: 100%;
  font-family: "Sigmar One", cursive;
  height: 5rem;
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
  text {
    font-size: 2.5rem;
    fill: red;
    stroke: black;
    stroke-width: 3;
  }
`;

const alertVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  start: {
    opacity: 1,
    scale: 1,
  },
  end: {
    opacity: 0,
    scale: 0,
  },
};

function Quantity({ index, food, location, menu }) {
  const [qty, setQty] = useState(0);
  const [topping, setTopping] = useState();
  const [orderAlert, setOrderAlert] = useState(false);
  const { updateItem } = useContext(Context);
  const toppings = translateToppings(location);
  const reset = useRef();
  const removeSelect = () => {
    reset.current.clearValue(true);
  };
  useEffect(() => {
    if (menu === "beverages") {
      reset.current.clearValue(true);
    }

    if (orderAlert === true) {
      setTimeout(() => {
        setOrderAlert(false);
      }, 4000);
    }
  }, [menu, orderAlert]);

  const Order = () => {
    if (qty > 0) {
      updateItem(food, qty, topping);
      setQty(0);
      removeSelect();
      setOrderAlert(true);
    } else {
      translateAlert(location);
    }
  };

  const customStyles = {
    valueContainer: (provided, state) => ({
      ...provided,
      height: "100%",
      flexWrap: "none",
      overflow: "hidden",
    }),
  };

  return (
    <div>
      <QtyWrap>
        <Plus
          onClick={() => {
            setQty(qty + 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -5 36 36"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </Plus>
        <span>{qty}</span>
        <Minus
          onClick={() => {
            qty <= 0 ? setQty(0) : setQty(qty - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -5 36 36"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
        </Minus>
      </QtyWrap>
      <Selection
        key={index}
        options={toppings}
        isMulti
        onChange={(value) => {
          setTopping(value, index);
        }}
        ref={reset}
        maxMenuHeight={130}
        menuPlacement="auto"
        placeholder={location === "/korea" ? "토핑 추가" : "add toppings"}
        isClearable
        isDisabled={menu === "beverages" && true}
        isSearchable={false}
        styles={customStyles}
      />
      <Button onClick={Order} style={{ fontSize: "1rem", marginTop: "2rem" }}>
        {location === "/korea" ? "주문" : "ADD TO ORDER"}
      </Button>
      <AnimatePresence>
        {orderAlert ? (
          <Alert
            variants={alertVariants}
            initial="initial"
            animate="start"
            exit="end"
            transition={{ type: "spring", duration: 1.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 60">
              <text>Thank you for your order</text>
            </svg>
          </Alert>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
export default Quantity;
