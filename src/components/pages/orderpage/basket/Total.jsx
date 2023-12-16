import Header from "../../reusable-ui/Header";
import styled from "styled-components";

const Total = () => {
  return (
    <Header>
      <TotalStyled>
        <p>Total</p>
        <p>0,00$</p>
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
