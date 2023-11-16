import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../reusable-ui/Navbar";
import Main from "./Main";
import { useEffect } from "react";
import { useInfoContext } from "../../context/InfoContext";

const OrderPage = () => {
  //
  const { usernameparams } = useParams();
  const { username, setUsername } = useInfoContext();
  //
  useEffect(() => {
    setUsername(usernameparams);
  }, []);
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
  margin: 10px 56px;
`;
