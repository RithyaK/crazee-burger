import styled from "styled-components";
import Total from "./Total";
import Footer from "./Footer";
import Body from "./Body";

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
`;
