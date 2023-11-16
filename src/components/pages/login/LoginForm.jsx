import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import Input from "../reusable-ui/Input";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import { useInfoContext } from "../../context/InfoContext";

const LoginForm = () => {
  const { username, setUsername } = useInfoContext();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`orderpage/${username}`);
  }
  return (
    <FormStyle action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <div className="containerformbottom">
        <h2>Connectez-vous</h2>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle className="icon" />}
        />
        <PrimaryButton
          Icon={<IoChevronForward />}
          label={"Accéder à mon espace"}
        />
      </div>
    </FormStyle>
  );
};

export default LoginForm;

const FormStyle = styled.form`
  text-align: center;
  padding: 0 32px;
  font-family: Amatic SC, cursive;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  .containerformbottom {
    display: flex;
    flex-direction: column;
    padding: 40px 0;
  }
  hr {
    border: 1.5px solid #f56a2c;
    margin-top: 32px;
  }
  .icon {
    font-size: 15px;
    color: grey;
    margin-right: 8px;
  }
`;
