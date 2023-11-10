import styled from "styled-components";
import Navbarleft from "../orderpage/Navbarleft";
import Navbarright from "../orderpage/Navbarright";
const Navbar = () => {
  return (
    <NavbarStyle className="navbar">
      <Navbarleft />
      <Navbarright />
    </NavbarStyle>
  );
};

export default Navbar;

const NavbarStyle = styled.div`
  border-radius: 15px 15px 0px 0px;
  background: #fff;
  display: flex;
  justify-content: space-between;
`;
