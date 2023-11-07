import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    setInputValue("");
    navigate(`orderpage/${inputValue}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !!!</h1>
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  );
};

export default LoginPage;
