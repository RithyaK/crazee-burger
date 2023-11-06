import { useState } from "react";

const LoginPage = () => {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Bonjour " + name);
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
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
