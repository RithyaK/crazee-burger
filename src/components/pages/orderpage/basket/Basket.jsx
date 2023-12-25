import styled from "styled-components";
import Total from "./Total";
import Footer from "./Footer";
import Body from "./Body";
import { useInfoContext } from "../../../context/InfoContext";
const Basket = () => {
  return (
    <BasketStyle>
      <Total />
      <Body />
      <Footer />
    </BasketStyle>
  );
};
export default Basket;

const BasketStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
`;
