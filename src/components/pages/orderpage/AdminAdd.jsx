import { useInfoContext } from "../../context/InfoContext";
import { useState } from "react";
import Input from "../reusable-ui/Input";
import Button from "../reusable-ui/Button";
import { inputTextConfig } from "./inputTextConfig";
import FormPanel from "../reusable-ui/FormPanel";
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

  return (
    <FormPanel
      onSubmit={handleSubmit}
      onChange={handleChange}
      isButtonSubmitted={isButtonSubmitted}
      product={newProduct}
    />
  );
};

export default AdminAdd;
