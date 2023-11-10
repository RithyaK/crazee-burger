import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../reusable-ui/Navbar";
import Main from "./Main";

const OrderPage = () => {
  //
  const { username } = useParams();

  //

  //
  return (
    <ContainerStyle>
      <Navbar username={username} />
      <Main />
    </ContainerStyle>
  );
};

export default OrderPage;

const ContainerStyle = styled.div`
  padding: 24px 56px;
`;
