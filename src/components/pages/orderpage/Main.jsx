import styled from "styled-components";
import Menu from "./Menu";
import Basket from "./Basket";
import { useState } from "react";
import Admin from "./Admin";
import { useInfoContext } from "../../context/InfoContext";
const Main = () => {
  //
  const { isModeAdmin, setIsModeAdmin } = useInfoContext();

  //

  //
  return (
    <MainStyle>
      {/* <div className="basket">basket</div> */}
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
  grid-template-columns: 1fr;
  .panel-and-admin {
    position: relative;
  }
  .basket {
    background: red;
  }
`;
