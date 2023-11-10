import { theme } from "../../../../theme";
import logo from "../../../assets/logo.png";
import styled from "styled-components";
const Logo = () => {
  return (
    <LogoStyle>
      <h1>CRAZEE</h1>
      <img src={logo} alt="logoburger" height="150px" width="200px" />
      <h1>BURGER</h1>
    </LogoStyle>
  );
};

export default Logo;

const LogoStyle = styled.div`
display: flex;
align-items: center;
    color: ${theme.colors.primary};
    text-align: center;
    font-family: Amatic SC, cursive;
    font-size: ${theme.fonts.P4};
    font-style: normal;
    font-weight: ${theme.weights.bold};
    line-height: 115px; /* 104.545% */
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  img {
    object-fit: contain;
    object-position:center;
  }
`;
