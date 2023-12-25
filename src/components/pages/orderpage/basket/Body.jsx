import styled from "styled-components";
import { useInfoContext } from "../../../context/InfoContext";
import BasketCard from "./BasketCard";
import IMGCOMINGSOON from "../../../../assets/coming-soon.png";

const Body = () => {
  const {
    basketList,
    setBasketList,
    isModeAdmin,
    setIsCollapsed,
    productSelected,
    setProductSelected,
    inputTitleRef,
    setCurrentTabSelected,
  } = useInfoContext();
  function handleDelete(id) {
    // const basketListCopy = [...basketList];
    const basketListUpdated = basketList.filter((product) => product.id !== id);
    setBasketList(basketListUpdated);
    // getTotalPrice();
  }
  function handleClick(productSelectedId) {
    setCurrentTabSelected("edit");
    const productSelectedFound = basketList.find(
      (product) => product.id === productSelectedId
    );
    setIsCollapsed(false);
    console.log(productSelectedFound);
    setProductSelected(productSelectedFound);

    // console.log(inputTitleRef);
  }
  return (
    <BodyStyled>
      {basketList.map((product, index) => (
        <BasketCard
          key={index}
          {...product}
          onDelete={() => handleDelete(product.id)}
          imageSource={
            product.imageSource ? product.imageSource : IMGCOMINGSOON
          }
          isModeAdmin={isModeAdmin}
          onClick={isModeAdmin ? () => handleClick(product.id) : null}
        />
      ))}
    </BodyStyled>
  );
};

export default Body;

const BodyStyled = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  gap: 10px;
  background: grey;
  font-size: 25px;
  padding: 7px;
`;
