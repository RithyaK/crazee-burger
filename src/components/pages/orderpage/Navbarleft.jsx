import Logo from "../reusable-ui/Logo";
import styled from "styled-components";
const Navbarleft = () => {
  function loadingLogo() {
    console.log("test");
  }
  return (
    <NavbarLeftStyle className="navbarleft">
      <Logo onClick={loadingLogo} className={"logo-orderpage"} />
    </NavbarLeftStyle>
  );
};

export default Navbarleft;

const NavbarLeftStyle = styled.div`
  padding-left: 20px;

  .logo-orderpage h1 {
    font-size: 36px;
  }
  .logo-orderpage img {
    height: 60px;
    width: 80px; // for Safari and Firefox
  }
`;
