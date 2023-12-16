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
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28px;
    height: 100%;
  }
  .body {
    flex: 1;
    background: white;
    font-size: 25px;
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
  }
`;
