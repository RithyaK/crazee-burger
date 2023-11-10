import styled from "styled-components";
import background from "../../../assets/background.jpg";
import LoginForm from "./LoginForm";
import Logo from "../reusable-ui/Logo";
const LoginPage = () => {
  return (
    <Container>
      <Logo />
      <LoginForm />
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  ::before {
    content: "";
    background: url(${background});
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
