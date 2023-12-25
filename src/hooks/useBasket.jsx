import { useInfoContext } from "../components/context/InfoContext";
import { deepClone } from "../utils/array";

const useBasket = () => {
  const { basketList, setBasketList } = useInfoContext();

  const handleAddTobasket = (productClicked) => {
    const basketCopy = deepClone(basketList);

    const isProductAlreadyClicked = (element) =>
      element.title === productClicked.title;

    if (basketCopy.some(isProductAlreadyClicked)) {
      incrementProduct(basketCopy, productClicked);
      return;
    }
    CreateProductInBasket(productClicked, setBasketList);
  };

  const CreateProductInBasket = (productClicked, setBasketList) => {
    const newBasketProduct = { ...productClicked, quantity: 1 };
    setBasketList((prev) => [newBasketProduct, ...prev]);
  };

  const incrementProduct = (basketCopy, productClicked) => {
    const indexProductClicked = basketList.findIndex(
      (basketProduct) => basketProduct.id === productClicked.id
    );
    basketCopy[indexProductClicked].quantity += 1;
    setBasketList(basketCopy);
  };

  return { handleAddTobasket };
};

export default useBasket;
