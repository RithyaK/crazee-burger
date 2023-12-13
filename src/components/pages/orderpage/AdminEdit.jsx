import styled from "styled-components";
import { useInfoContext } from "../../context/InfoContext";
import Input from "../reusable-ui/Input";
import { inputTextConfig } from "./inputTextConfig";
import FormPanel from "../reusable-ui/FormPanel";
import HintMessage from "./HintMessage";

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
  // const inputTexts = inputTextConfig(productSelected);

  return (
    <FormPanel
      onChange={handleChange}
      product={productSelected}
      inputTitleRef={inputTitleRef}
    >
      <HintMessage />
    </FormPanel>
  );
};

export default AdminEdit;
