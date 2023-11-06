import { useState } from "react";

const LoginPage = () => {
  const [name, setName] = useState("");

  function handleButton() {
    alert("Bonjour " + name);
  }

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button onClick={handleButton}>Accédez à votre espace</button>
      </form>
    </div>
  );
};

export default LoginPage;
