import styled from "styled-components";
import Menu from "./Menu";
import Basket from "./Basket";
const Main = () => {
  //

  //

  //

  return (
    <MainStyle>
      <Basket />
      <Menu />
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr;
`;
