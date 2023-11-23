import React, { useContext, useRef, useState } from "react";
import { fakeMenu } from "../../../fakeData/fakeMenu";
const Context = React.createContext();

export const InfoContext = (props) => {
  //
  const [username, setUsername] = useState("");
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [products, setProducts] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState({
    imageSource: "",
    title: "",
    price: 0,
  });
  const [productSelected, setproductSelected] = useState({});
  const inputTitleRef = useRef();

  function AddNewProduct(newProduct) {
    const productsCopy = [...products];
    const productsCopyUpdated = [newProduct, ...productsCopy];
    setProducts(productsCopyUpdated);
  }
  const contextValue = {
    username,
    setUsername,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isEditing,
    setIsEditing,
    isAdding,
    setIsAdding,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    setProducts,
    AddNewProduct,
    newProduct,
    setNewProduct,
    productSelected,
    setproductSelected,
    inputTitleRef,
  };
  //
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export const useInfoContext = () => useContext(Context);
