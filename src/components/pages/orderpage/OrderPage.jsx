import { NavLink, useParams } from "react-router-dom";

const OrderPage = () => {
  const { username } = useParams();
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <NavLink to="/">
        <button>Déconnexion</button>
      </NavLink>
    </div>
  );
};

export default OrderPage;
