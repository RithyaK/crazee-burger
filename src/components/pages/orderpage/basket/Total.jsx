import { useState } from "react";
import Header from "../../reusable-ui/Header";
import styled from "styled-components";
import { useInfoContext } from "../../../context/InfoContext";
import { formatPrice } from "../../../../utils/maths";

const Total = () => {
  const { basketList } = useInfoContext();
  const totalPrice = basketList.reduce((total, basketProduct) => {
    if (isNaN(basketProduct.price)) return total;
    total += basketProduct.quantity * basketProduct.price;
    return total;
  }, 0);
  return (
    <Header>
      <TotalStyled>
        <p>Total</p>
        <p>{formatPrice(totalPrice)}$</p>
      </TotalStyled>
    </Header>
  );
};

export default Total;

const TotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
  height: 100%;
`;
