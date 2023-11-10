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
  .maincontent {
    border-radius: 0px 0px 15px 15px;
    background: #f5f5f7;
    height: 85vh;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  }
`;
