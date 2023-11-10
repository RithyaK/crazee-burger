import { theme } from "../../../../theme";
import logo from "../../../assets/logo.png";
import styled from "styled-components";
const Logo = ({ className }) => {
  return (
    <LogoStyle className={className}>
      <h1>CRAZEE</h1>
      <img src={logo} alt="logoburger" />
      <h1>BURGER</h1>
    </LogoStyle>
  );
};

export default Logo;

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  h1 {
    text-align: center;
    color: #ffa01b;
    font-style: normal;
    line-height: 46px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }
  img {
    object-fit: contain;
    object-position: center;
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;
