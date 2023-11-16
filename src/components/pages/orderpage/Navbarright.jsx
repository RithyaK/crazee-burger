import { BsPersonCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useInfoContext } from "../../context/InfoContext";
import ToggleButton from "./ToggleButton";
import { toast } from "react-toastify";
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";

const Navbarright = () => {
  const { username } = useInfoContext();
  const { isModeAdmin, setIsModeAdmin } = useInfoContext();
  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavbarRightStyle className="navbarright">
      <ToggleButton
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        couleurduBackground={"red"}
        onToggle={displayToastNotification}
      />
      <div className="info">
        <h1>
          Hey, <span className="username">{username}</span>
        </h1>
        <NavLink to="/">
          <button className="disconnect">Se déconnecter</button>
        </NavLink>
      </div>
      <BsPersonCircle className="iconprofile" />
      <ToastAdmin />
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
  .username {
    color: #ffa01b;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
  }
  .info {
    padding-left: 50px;
    margin-left: 10px;
  }
  .info h1 {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
    color: #747b91;
    font-family: Open Sans;
    font-style: normal;
  }
  .disconnect {
    color: #747b91;
    text-align: right;
    font-family: Open Sans;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px; /* 140% */
    border: none;
    background: none;
  }
  .disconnect:hover {
    border-bottom: 1px solid grey;
  }
`;
