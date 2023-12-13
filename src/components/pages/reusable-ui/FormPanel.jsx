import styled from "styled-components";
import Input from "./Input";
import { inputTextConfig } from "../orderpage/inputTextConfig";
import ButtonSubmit from "../orderpage/ButtonSubmit";

const FormPanel = ({
  onSubmit,
  onChange,
  product,
  isButtonSubmitted,
  inputTitleRef,
  children,
}) => {
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
          <Input
            key={input.id}
            {...input}
            onChange={onChange}
            inputTitleRef={input.name === "title" ? inputTitleRef : null}
          />
        ))}
        <div>{children}</div>
      </div>
    </FormStyle>
  );
};

export default FormPanel;

const FormStyle = styled.form`
box-sizing:border-box;
padding: 20px;
height:100%;
  width: 70%;
  margin-left: 100px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat (4, 1fr);
  .image-preview {
    border: 1px solid grey;
    grid-area: 1/1/2/2;
    max-height: 200px ;
    max-width: 200px;
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
