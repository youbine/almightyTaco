import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Select from "react-select";

export const BodyBg = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: repeating-linear-gradient(
    45deg,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.yellow} 30px,
    #ffbb37 0,
    #ffbb37 60px
  );
  overflow: hidden;
`;
export const Wrap = styled.div`
  width: 95%;
  height: 85%;
  margin-bottom: 2rem;
  border: 5px solid black;
  background-color: #f8f3eb;
  text-align: center;
  position: relative;
`;
export const StoreName = styled.h2`
  position: relative;
  color: red;
  top: -3rem;
  font-family: "Sigmar One", cursive;
  font-size: 5rem;
  text-shadow: -1px -1px 0 black, 0 -1px 0 black, 1px -1px 0 black,
    -1px 0 0 black, 1px 0 0 black, -1px 1px 0 black, 0 1px 0 black,
    1px 1px 0 black, -2px -2px 0 black, -1px -2px 0 black, 0 -2px 0 black,
    1px -2px 0 black, 2px -2px 0 black, 2px -1px 0 black, 2px 0 0 black,
    2px 1px 0 black, 2px 2px 0 black, 1px 2px 0 black, 0 2px 0 black,
    -1px 2px 0 black, -2px 2px 0 black, -2px 1px 0 black, -2px 0 0 black,
    -2px -1px 0 black, -3px -3px 0 black, -2px -3px 0 black, 0 -3px 0 black,
    2px -3px 0 black, 3px -3px 0 black, 3px -2px 0 black, 3px 0 0 black,
    3px 2px 0 black, 3px 3px 0 black, 2px 3px 0 black, 0 3px 0 black,
    -2px 3px 0 black, -3px 3px 0 black, -3px 2px 0 black, -3px 0 0 black,
    -3px -2px 0 black, -3px -3px 0 black, -1px -3px 0 black, 0 -3px 0 black,
    1px -3px 0 black, 3px -3px 0 black, 3px -1px 0 black, 3px 0 0 black,
    3px 1px 0 black, 3px 3px 0 black, 1px 3px 0 black, 0 3px 0 black,
    -1px 3px 0 black, -3px 3px 0 black, -3px 1px 0 black, -3px 0 0 black,
    -3px -1px 0 black, -3px 4px 0 black, 0px 4px 0 black, 3px 4px 0 black,
    -3px 5px 0 black, 0px 5px 0 black, 3px 5px 0 black, -3px 6px 0 black,
    0px 6px 0 black, 3px 6px 0 black, -3px 7px 0 black, 0px 7px 0 black,
    3px 7px 0 black, -3px 8px 0 black, 0px 8px 0 black, 3px 8px 0 black,
    -3px 9px 0 black, 0px 9px 0 black, 3px 9px 0 black, -3px 10px 0 black,
    0px 10px 0 black, 3px 10px 0 black, -3px 11px 0 black, 0px 11px 0 black,
    3px 11px 0 black, -3px 12px 0 black, 0px 12px 0 black, 3px 12px 0 black,
    -3px 13px 0 black, 0px 13px 0 black, 3px 13px 0 black, -3px 14px 0 black,
    0px 14px 0 black, 3px 14px 0 black, -3px 15px 0 black, 0px 15px 0 black,
    3px 15px 0 black, -3px 16px 0 black, 0px 16px 0 black, 3px 16px 0 black,
    -3px 17px 0 black, 0px 17px 0 black, 3px 17px 0 black, -3px 18px 0 black,
    0px 18px 0 black, 3px 18px 0 black;
`;
export const Selection = styled(Select)`
  text-transform: uppercase;
  width: auto;
`;
export const Button = styled.button`
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
  padding: 0.5rem 2rem;
  border-radius: 15px;
  position: relative;
  top: -6px;
  border: 0;
  transition: all 40ms linear;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 2px;
  margin-right: 2px;
  box-shadow: 0 0 0 1px #417fbd inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 12px 0 0 #4d5bbe, 0 10px 10px 1px rgba(0, 0, 0, 0.5);
  background-color: #185adb;
  &:active {
    box-shadow: 0 0 0 1px #417fbd inset,
      0 0 0 1px rgba(255, 255, 255, 0.15) inset,
      0 1px 3px 1px rgba(0, 0, 0, 0.3);
    top: 2px;
  }
`;
function Store() {
  const [store, setStore] = useState("");
  const focus = useRef();
  const navigate = useNavigate();
  const goToStore = (event) => {
    event.preventDefault();
    store === "" && focus.current.focus();
    navigate(`${store}?menu=main`);
  };

  const stores = [
    { value: "korea", label: "Korea" },
    { value: "mexico", label: "Mexico" },
    { value: "usa", label: "Usa" },
  ];
  const handleChange = (event) => {
    setStore(event.value);
  };

  return (
    <BodyBg>
      <Wrap>
        <StoreName>almighty Taco</StoreName>
        <form
          style={{
            height: "25vh",
            marginTop: "10%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onSubmit={goToStore}
        >
          <Selection
            placeholder="Please pick store to Order"
            onChange={handleChange}
            options={stores}
            ref={focus}
          />
          <Button type="submit">Go grab taco</Button>
        </form>
      </Wrap>
    </BodyBg>
  );
}
export default Store;
