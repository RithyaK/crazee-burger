import { useState } from "react";
import styled from "styled-components";

const ButtonAdmin = () => {
  //
  const [buttonAdmin, setButtonAdmin] = useState(false);
  //
  function handleButtonAdmin() {
    setButtonAdmin(!buttonAdmin);
    if (buttonAdmin === false) {
      console.log("test");
    }
  }
  //
  return (
    <ButtonStyle onClick={handleButtonAdmin}>
      {buttonAdmin ? "DÉSACTIVER LE MODE ADMIN" : "ACTIVER LE MODE ADMIN"}
    </ButtonStyle>
  );
};

export default ButtonAdmin;

const ButtonStyle = styled.div`
  position: relative;
  padding: 10px;
  padding-left: 40px;
  border-radius: 30px;
  background-color: #292729;
  color: #ffa01b;
  text-align: center;
  font-family: Open Sans;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  &:before {
    content: "";
    height: 30px;
    width: 30px;
    background-color: #ffa01b;
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50px;
  }
`;
