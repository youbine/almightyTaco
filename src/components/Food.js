import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
import { useHorizontalScroll } from "./Scroll";
import { motion } from "framer-motion";
import Quantity from "./Quantity";

const MenuWrap = styled.div`
  user-select: none;
  overflow-x: scroll;
  white-space: pre;
  width: 95%;
  height: 93%;
  position: relative;
  right: 0;
  top: -2rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const MenuInner = styled(motion.div)`
  display: flex;
  align-items: center;
  cursor: grab;
  position: absolute;
  padding-right: 40%;
  width: max-content;
  height: 100%;
`;

//media query
export const List = styled(motion.div)`
  cursor: pointer;
  background-color: white;
  border: 2px solid black;
  padding: 1rem;
  position: relative;
  min-width: 10rem;
  width: 17rem;
  height: 70%;
  margin: 2rem;
  box-shadow: 0.7rem 0.7rem rgb(100 100 550 / 30%);
  transition: 0.2s ease;
  &:hover {
    box-shadow: 0.2rem 0.2rem rgb(100 100 550 / 30%);
  }
`;
export const Name = styled(motion.h1)`
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: skewX(-10deg) rotate(-2deg) translateX(-50%);
  background-color: black;
  width: fit-content;
  padding: 0.8rem;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: bold;
  color: white;
`;
const Img = styled.img`
  margin: 15% 0;
  object-fit: contain;
  height: 37%;
  width: 100%;
`;
const Price = styled.p`
  position: absolute;
  right: 0;
  top: 7%;
  padding: 0.3rem;
  width: 6rem;
  background: rgba(107, 203, 16, 0.7);
  color: white;
  font-size: 1.2rem;
  span {
    opacity: 1;
  }
  &::before {
    content: "";
    display: block;
    top: 0;
    left: -2rem;
    position: absolute;
    border-bottom: 0.8rem solid transparent;
    border-top: 1rem solid transparent;
    border-left: 1rem solid transparent;
    border-right: 1rem solid rgba(107, 203, 16, 0.7);
  }
`;

function Food({ data }) {
  const scrollRef = useHorizontalScroll();
  const storeLocation = useLocation().pathname;
  const [searchParams] = useSearchParams();
  const menu = searchParams.get("menu");

  return (
    <MenuWrap ref={scrollRef}>
      <MenuInner
        drag="x"
        dragConstraints={{ left: -window.innerWidth * 1.6, right: 0 }}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
        animate={{ x: [window.innerWidth, 0] }}
        transition={{ type: "spring", duration: 1 }}
      >
        {data.map((food, index) => (
          <List
            whileHover={{ scale: 1.1, transition: "0.2s" }}
            whileTap={{ scale: 1.1, transition: "0.2s" }}
            key={index}
          >
            <Name>{food.name}</Name>
            <Img src={food.image} />
            <Price>
              {storeLocation.includes("korea") ? (
                <span>{food.price} 원</span>
              ) : (
                <span>$ {food.price}</span>
              )}
            </Price>
            <Quantity
              index={index}
              food={food}
              location={storeLocation}
              menu={menu}
            />
          </List>
        ))}
      </MenuInner>
    </MenuWrap>
  );
}
export default Food;
