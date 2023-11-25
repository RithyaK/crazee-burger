import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { inputTextConfig } from "../orderpage/inputTextConfig";

const FormPanel = ({ onSubmit, onChange, product, isButtonSubmitted }) => {
  const inputTexts = inputTextConfig(product);

  return (
    <FormStyle onSubmit={onSubmit}>
      <div className="image-preview">
        {product.imageSource ? (
          <img src={product.imageSource} alt="" />
        ) : (
          <p>Aucune image</p>
        )}
      </div>
      <div className="inputs">
        {inputTexts.map((input) => (
          <Input key={input.id} {...input} onChange={onChange} />
        ))}
      </div>
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
    </FormStyle>
  );
};

export default FormPanel;

const FormStyle = styled.form`
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
}`;
