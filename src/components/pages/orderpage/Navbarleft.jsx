import Logo from "../reusable-ui/Logo";
import styled from "styled-components";
const Navbarleft = () => {
  function loadingLogo() {
    console.log("test");
  }
  return (
    <NavbarLeftStyle className="navbarleft">
      <Logo onClick={loadingLogo} />
    </NavbarLeftStyle>
  );
};

export default Navbarleft;

const NavbarLeftStyle = styled.div`
  padding-left: 20px;

  &:hover {
    cursor: pointer;
  }
`;
