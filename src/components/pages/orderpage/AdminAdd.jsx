import styled from "styled-components";
import { useInfoContext } from "../../context/InfoContext";
import { useState } from "react";
import Input from "../reusable-ui/Input";
import Button from "../reusable-ui/Button";
import { inputTextConfig } from "./inputTextConfig";
const AdminAdd = () => {
  const { AddNewProduct, newProduct, setNewProduct } = useInfoContext();
  const [isButtonSubmitted, setIsButtonSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const newProductUpdated = { ...newProduct, id: crypto.randomUUID() };
    AddNewProduct(newProductUpdated);
    setIsButtonSubmitted(true);
    setTimeout(() => {
      setIsButtonSubmitted(false);
    }, 2000);
  }
  function handleChange(e) {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  }

  const inputTexts = inputTextConfig(newProduct);
  return (
    <AdminAddStyle onSubmit={(e) => handleSubmit(e)}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt="" />
        ) : (
          <p>Aucune image</p>
        )}
      </div>
      <div className="inputs">
        {inputTexts.map((input) => (
          <Input key={input.id} {...input} onChange={handleChange} />
        ))}
      </div>
      <div className="button">
        <Button
          label={"Ajouter un nouveau produit au menu"}
          className={isButtonSubmitted ? "button-submitted" : ""}
          version="success"
        />
        {isButtonSubmitted ? (
          <p className="button-submitted">Produit ajouté avec succès</p>
        ) : (
          ""
        )}
      </div>
    </AdminAddStyle>
  );
};

export default AdminAdd;

const AdminAddStyle = styled.form`
  height: 90%;
  width: 70%;
  margin-left: 100px;
  padding-top: 10px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat (4, 1fr);
  .image-preview {
    border: 1px solid grey;
    grid-area: 1/1/2/2;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .inputs {
    gap: 10px;
    grid-area: 1/2/2/3;
    display: grid;
    .input {
      border: 2px solid black;
    }
  }
  .button {
    grid-area: 2/2/3/3;
    display: flex;
    text-align: center;
  }
  .button-submitted {
    color: white;
  }
`;
