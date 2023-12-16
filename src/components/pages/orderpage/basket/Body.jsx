import styled from "styled-components";

const Body = () => {
  return <BodyStyled>Votre commande est vide</BodyStyled>;
};

export default Body;

const BodyStyled = styled.div`
  flex: 1;
  background: white;
  font-size: 25px;
`;
