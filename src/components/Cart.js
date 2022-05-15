import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";
import { BodyBg } from "../Routes/Store";
import { Name } from "./Food";
import { totalPrice } from "../helper";

const Modal = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 88%;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  margin: auto;
  border: 5px solid black;
  z-index: 10;
  padding: 2rem 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CartTitle = styled(Name)`
  z-index: 11;
  top: -3rem;
  left: 50%;
  width: 25rem;
  font-size: 3rem;
`;
const Recipt = styled.div`
  position: relative;
  text-transform: uppercase;
  top: 1rem;
  height: auto;
  width: 80%;
  margin: auto;
  text-align: center;
  background: #f5f5e6;
  .total {
    line-height: 4rem;
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.3);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-style: solid;
    border-width: 0 50px 50px 0;
    border-color: #c6c6b9 white;
    transition: all 0.5s;
  }
  &:hover::before {
    border-width: 0 80px 80px 0;
    border-color: #dbdbce white;
  }
`;
const ReciptWrap = styled(motion.div)`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
const MyFood = styled(motion.div)`
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 2rem;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  .index {
    color: red;
    font-weight: bold;
  }
  div {
    width: 50%;
    text-align: left;
  }
  .qty,
  .price {
    text-align: right;
    width: auto;
    line-height: 1.5rem;
  }
  .topping {
    font-size: 0.7rem;
  }
  .delete {
    cursor: pointer;
    transition: 0.5s ease;
    width: 5%;
    height: auto;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
const ReciptBtn = styled.div`
  cursor: pointer;
  margin: 0 auto;
  padding: 0.5rem;
  width: 50%;
  text-transform: uppercase;
  font-size: 1.2rem;
`;

const ReciptVariants = {
  open: {
    height: "auto",
  },
  closed: {
    height: 0,
  },
};
const FoodsVariants = {
  open: {
    display: "flex",
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 2000, velocity: -100 },
      duration: 0.8,
    },
  },
  closed: {
    display: "none",
    y: 10,
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
  click: {
    x: -10,
  },
};

export default function Cart({ location }) {
  const navigate = useNavigate();
  const match = window.location.search.includes("&Cart");
  const { order, deleteItem } = useContext(Context);
  const [Rtoggle, setRtoggle] = useState(false);

  // console.log(index);

  // const map = order && order.map((item) => console.log(item));

  const goBack = () => {
    navigate(-1);
  };
  return (
    <AnimatePresence>
      {match ? (
        <>
          <BodyBg
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              opacity: 0.2,
              width: "100",
              height: "100%",
            }}
            onClick={goBack}
          ></BodyBg>
          <CartTitle
            exit={{
              translateY: "-200%",
            }}
            animate={{
              opacity: 1,
              translateY: ["-200%", "0%"],
            }}
            transition={{ duration: 0.5 }}
            style={{ translateX: "-50%", skewX: "-10deg", rotate: "-2deg" }}
          >
            My order
          </CartTitle>
          <Modal
            exit={{ translateY: "200%" }}
            animate={{
              opacity: 1,
              translateY: ["100%", "0%"],
            }}
            transition={{ duration: 0.5 }}
          >
            <Recipt>
              <p className="total">
                {location.includes("korea") ? "합계 : " : "TOTAL : $"}
                {order &&
                  0 + totalPrice(Array.from(order, ({ price }) => price))}
                {location.includes("korea") ? "원" : ""}
              </p>
              <ReciptWrap
                animate={Rtoggle ? "open" : "closed"}
                variants={ReciptVariants}
              >
                {order &&
                  order.map((item, index) => (
                    <MyFood
                      key={index}
                      animate={Rtoggle ? "open" : "closed"}
                      variants={FoodsVariants}
                    >
                      <span className="index">{index + 1}</span>
                      <div>
                        <h2>{item.food.name}</h2>
                        <p className="topping">
                          toppings :
                          {item.topping === undefined ||
                          item.topping.length === 0 ? (
                            <span> none</span>
                          ) : (
                            item.topping.map((t, index) => (
                              <span key={index}> {t.value},</span>
                            ))
                          )}
                        </p>
                      </div>
                      <span className="qty">{item.qty}</span>
                      <span className="price">
                        {location.includes("korea")
                          ? item.price + "원"
                          : "$" + item.price}
                      </span>
                      <span
                        className="delete"
                        onClick={() => {
                          deleteItem(index);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="red"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </MyFood>
                  ))}
              </ReciptWrap>
              <ReciptBtn
                onClick={() => {
                  setRtoggle((prev) => !prev);
                }}
              >
                {Rtoggle ? "close" : "see your order"}
              </ReciptBtn>
            </Recipt>
          </Modal>
        </>
      ) : (
        0
      )}
    </AnimatePresence>
  );
}
