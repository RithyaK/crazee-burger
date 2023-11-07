import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <NavLink to="/">
        <button>Retourner vers la page daccueil</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
