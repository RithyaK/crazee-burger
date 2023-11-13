import styled from "styled-components";
import Navbarright from "../orderpage/Navbarright";
import Logo from "./Logo";
import { refreshPage } from "../../../utils/window";
const Navbar = () => {
  return (
    <NavbarStyle className="navbar">
      <Logo onClick={refreshPage} className={"logo-orderpage"} />
      <Navbarright />
    </NavbarStyle>
  );
};

export default Navbar;

const NavbarStyle = styled.div`
  border-radius: 15px 15px 0px 0px;
  padding-left: 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;

  .logo-orderpage {
    cursor: pointer;
  }
  .logo-orderpage h1 {
    font-size: 36px;
  }
  .logo-orderpage img {
    height: 60px;
    width: 80px; // for Safari and Firefox
  }
`;
