import { BsPersonCircle } from "react-icons/bs";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../reusable-ui/Logo";

const OrderPage = () => {
  //
  const { username } = useParams();

  //
  function loadingLogo() {}

  //
  return (
    <ContainerStyle>
      <div className="navbar">
        <div className="navbarleft">
          <Logo onClick={loadingLogo} />
        </div>
        <div className="navbarright">
          <div className="info">
            <h1>
              Hey, <span className="username">{username}</span>
            </h1>
            <NavLink to="/">
              <button>Se déconnecter</button>
            </NavLink>
          </div>
          <BsPersonCircle className="iconprofile" />
        </div>
      </div>
      <div className="maincontent"></div>
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
  .navbar {
    border-radius: 15px 15px 0px 0px;
    background: #fff;
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
  }
  .navbarleft {
    padding-left: 20px;
  }
  .navbarleft:hover {
    cursor: pointer;
  }
  .navbarright {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: 70px;
  }
  .iconprofile {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    color: grey;
  }
  .navbarright > * {
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
