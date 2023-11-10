import { BsPersonCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbarright = ({ username }) => {
  return (
    <NavbarRightStyle className="navbarright">
      <div className="info">
        <h1>
          Hey, <span className="username">{username}</span>
        </h1>
        <NavLink to="/">
          <button>Se déconnecter</button>
        </NavLink>
      </div>
      <BsPersonCircle className="iconprofile" />
    </NavbarRightStyle>
  );
};

export default Navbarright;

const NavbarRightStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 70px;

  .iconprofile {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    color: grey;
  }
  & > * {
    text-align: center;
    color: #747b91;
    text-align: right;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  }
  .username {
    color: #ffa01b;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
  }
  .info h1 {
    color: #747b91;
    text-align: right;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  }
  button {
    color: #747b91;
    text-align: right;
    font-family: Open Sans;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px; /* 140% */
    border: none;
    background: none;
  }
  button:hover {
    border-bottom: 1px solid grey;
  }
`;
