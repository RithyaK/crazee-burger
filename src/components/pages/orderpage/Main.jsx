import styled from "styled-components";
import Menu from "./Menu";
import Basket from "./../orderpage/basket/Basket";
import { useState } from "react";
import Admin from "./Admin";
import { useInfoContext } from "../../context/InfoContext";
const Main = () => {
  //
  const { isModeAdmin } = useInfoContext();

  //

  //
  return (
    <MainStyle>
      <Basket />
      <div className="panel-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 25% 1fr;
  .panel-and-admin {
    position: relative;
  }
`;
