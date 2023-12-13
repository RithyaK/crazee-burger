import React from "react";
import Button from "../reusable-ui/Button";

const ButtonSubmit = ({ isButtonSubmitted }) => {
  return (
    <div className="button">
      <Button
        label={"Ajouter un nouveau produit au menu"}
        className={isButtonSubmitted ? "button-submitted" : ""}
        version="success"
      />
      {isButtonSubmitted && (
        <p className="button-submitted">Produit ajouté avec succès</p>
      )}
    </div>
  );
};

export default ButtonSubmit;
