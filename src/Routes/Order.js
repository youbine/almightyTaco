import styled from "styled-components";
import { useState, useContext } from "react";
import { BodyBg, Wrap, StoreName } from "../Routes/Store";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { translateBeverage, translateMain } from "../helper";
import { Context } from "../Context";
import Food from "../components/Food";
import Cart from "../components/Cart";
import { motion } from "framer-motion";

const CartBtn = styled.button`
  cursor: pointer;
  z-index: 1;
  top: 0.2rem;
  right: 0.2rem;
  position: absolute;
  width: 4rem;
  border: none;
  background-color: transparent;
  svg {
    stroke: #f97805;
  }
  span {
    position: absolute;
    top: 1.5rem;
    right: 1.4rem;
    background-color: red;
    text-align: center;
    font-size: 0.8rem;
    width: 1.2rem;
    line-height: 1.2rem;
    border-radius: 50%;
    color: white;
  }
`;
const BackBtn = styled(motion.div)`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  left: 2rem;
  height: 3rem;
  width: 3rem;
  z-index: 2;
`;
const Tooltip = styled(motion.div)`
  position: absolute;
  opacity: 0;
  top: -1rem;
  left: -0.5rem;
  height: 1rem;
  width: 4.5rem;
  text-transform: uppercase;
  font-size: 0.7rem;
  text-align: center;
  background-color: white;
  &::after {
    content: " ";
    top: 1rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6.5px 0 6.5px;
    border-color: white transparent transparent transparent;
    position: absolute;
    left: 40%;
  }
`;
const NavBtn = styled.div`
  width: 5%;
  height: 100%;
  position: absolute;
  right: 1.5%;
  top: 0;
  writing-mode: vertical-rl;
  span {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1.5rem;
    text-shadow: -1px -1px 0 black, 0 -1px 0 black, 1px -1px 0 black,
      -1px 0 0 black, 1px 0 0 black, -1px 1px 0 black, 0 1px 0 black,
      1px 1px 0 black, -2px -2px 0 black, -1px -2px 0 black, 0 -2px 0 black,
      1px -2px 0 black, 2px -2px 0 black, 2px -1px 0 black, 2px 0 0 black,
      2px 1px 0 black, 2px 2px 0 black, 1px 2px 0 black, 0 2px 0 black,
      -1px 2px 0 black, -2px 2px 0 black, -2px 1px 0 black, -2px 0 0 black,
      -2px -1px 0 black;
    color: white;
    padding: 0.5rem;
    border-radius: 15px;
    position: relative;
    top: -6px;
    border: 0;
    transition: all 40ms linear;
    margin-top: 2rem;
    margin-bottom: 10px;
    margin-left: 2px;
    margin-right: 2px;
    box-shadow: 0 0 0 1px #417fbd inset,
      0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 12px 0 0 #4d5bbe,
      0 10px 10px 1px rgba(0, 0, 0, 0.5);
    background-color: #185adb;
    &:active {
      box-shadow: 0 0 0 1px #417fbd inset,
        0 0 0 1px rgba(255, 255, 255, 0.15) inset,
        0 1px 3px 1px rgba(0, 0, 0, 0.3);
      top: 2px;
    }
  }
`;

const BackBtnVar = {
  hover: { x: -15 },
};
const TooltipVar = {
  hover: { opacity: 1 },
};
const menuBtnVar = {
  clicked: { color: "#f97805" },
  notClicked: { color: "rgb(255, 255, 255)" },
};
function Order() {
  const { order } = useContext(Context);
  const navigate = useNavigate();
  const storeLocation = useLocation().pathname;
  const [searchParams] = useSearchParams();
  const menu = searchParams.get("menu");
  const [hover, setHover] = useState(false);
  const mainData = translateMain(storeLocation);
  const beveragesData = translateBeverage(storeLocation);

  const goToCart = () => {
    navigate(`${storeLocation}?menu=${menu}&Cart`);
  };

  const setMenuURL = (menu) => {
    navigate(`${storeLocation}?menu=${menu}`);
  };

  const goToBack = () => {
    if (window.location.search.includes("Cart")) {
      navigate(navigate(`${storeLocation}?menu=${menu}`));
    } else {
      navigate(`/`);
      window.location.reload();
    }
  };

  return (
    <>
      <BodyBg>
        <BackBtn
          initial={false}
          variants={BackBtnVar}
          whileHover="hover"
          transition={{ type: "spring" }}
          onHoverStart={() => setHover(true)}
          onClick={goToBack}
        >
          <Tooltip
            variants={TooltipVar}
            transition={{ type: "spring" }}
            animate={hover}
          >
            go back
          </Tooltip>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </BackBtn>

        <Wrap>
          <StoreName>almighty Taco</StoreName>

          <CartBtn onClick={goToCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <motion.span
              animate={{ rotateY: [0, 180, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              {order.length}
            </motion.span>
          </CartBtn>
          <Food data={menu === "main" ? mainData : beveragesData} />
          <NavBtn>
            <motion.span
              onClick={() => {
                setMenuURL("main");
              }}
              animate={menu === "main" ? "clicked" : "notClicked"}
              variants={menuBtnVar}
              transition={{ type: "spring" }}
            >
              {storeLocation === "/korea" ? "음식" : "Main foods"}
            </motion.span>
            <motion.span
              onClick={() => {
                setMenuURL("beverages");
              }}
              animate={menu === "beverages" ? "clicked" : "notClicked"}
              variants={menuBtnVar}
              transition={{ type: "spring" }}
            >
              {storeLocation === "/korea" ? "음료" : "beverages"}
            </motion.span>
          </NavBtn>

          <Cart location={storeLocation} />
        </Wrap>
      </BodyBg>
    </>
  );
}

export default Order;
