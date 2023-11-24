import styled from "styled-components";
import { useInfoContext } from "../../context/InfoContext";
import Input from "../reusable-ui/Input";
import { inputTextConfig } from "./inputTextConfig";
import { useRef } from "react";
const AdminEdit = () => {
  const {
    productSelected,
    setproductSelected,
    products,
    setProducts,
    inputTitleRef,
  } = useInfoContext();
  function handleEdit(productBeingEdited) {
    const productsCopy = [...products];
    const indexOfProductBeingUpdated = products.findIndex(
      (product) => product.id === productBeingEdited.id
    );
    productsCopy[indexOfProductBeingUpdated] = productBeingEdited;
    setProducts(productsCopy);
  }

  function handleChange(e) {
    const productBeingUpdated = {
      ...productSelected,
      [e.target.name]: e.target.value,
    };
    setproductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
  }
  const inputTexts = inputTextConfig(productSelected);

  return (
    <AdminEditStyle>
      {JSON.stringify(productSelected) === "{}" ? (
        <div>Cliquer pour modifier un produit</div>
      ) : (
        <div className="form">
          <div className="image-preview">
            {productSelected.imageSource ? (
              <img src={productSelected.imageSource} alt="" />
            ) : (
              <p>Aucune image</p>
            )}
          </div>
          <div className="inputs">
            {inputTexts.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                inputTitleRef={input.name === "title" ? inputTitleRef : null}
              />
            ))}
            <p>Cliquer sur un produit du menu pour le modifier</p>
          </div>
        </div>
      )}
    </AdminEditStyle>
  );
};

export default AdminEdit;

const AdminEditStyle = styled.form`
  .form {
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
        width: 150px;
        height: 150px;
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
  }
`;
