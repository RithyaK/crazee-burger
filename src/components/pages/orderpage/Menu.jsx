import { fakeMenu } from "../../../../fakeData/fakeMenu";
import styled from "styled-components";
import { useInfoContext } from "../../context/InfoContext";
import Card from "./Card";
import { formatPrice } from "../../../utils/maths";
import IMGCOMINGSOON from "../../../assets/coming-soon.png";
import Button from "../reusable-ui/Button";

const Menu = () => {
  const {
    isModeAdmin,
    products,
    setProducts,
    setIsCollapsed,
    setCurrentTabSelected,
    productSelected,
    setproductSelected,
    inputTitleRef,
  } = useInfoContext();
  function deleteButton(event, productIdDeleted) {
    const productsCopy = [...products];
    const productsCopyUpdated = productsCopy.filter(
      (product) => product.id !== productIdDeleted
    );
    setProducts(productsCopyUpdated);
    console.log("child");
    event.stopPropagation();
  }
  console.log(productSelected);
  function GenerateProducts() {
    setProducts(fakeMenu.MEDIUM);
  }
  async function handleClick(id) {
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productSelectedFound = products.find((product) => product.id === id);
    await setproductSelected(productSelectedFound);
    console.log("parent");
    inputTitleRef.current.focus();
  }
  function checkIfSelected(idProductMenu, idProductSelected) {
    if (isModeAdmin) {
      return idProductMenu === idProductSelected;
    }
  }
  return (
    <MenuStyle>
      {products.map((product) => (
        <Card
          key={product.id}
          leftDescription={formatPrice(product.price)}
          imageSource={
            product.imageSource ? product.imageSource : IMGCOMINGSOON
          }
          title={product.title}
          hasDeleteButton={isModeAdmin}
          onDelete={(event) => deleteButton(event, product.id)}
          onClick={() => (isModeAdmin ? handleClick(product.id) : null)}
          isHoverable={isModeAdmin}
          isSelected={checkIfSelected(product.id, productSelected.id)}
        />
      ))}
      {products.length == 0 && isModeAdmin && (
        <div className="alertmessage">
          <p>VIDE MODE ADMIN</p>
          <Button
            label={"Générer de nouveaux produits"}
            onClick={GenerateProducts}
          />
        </div>
      )}
      {products.length == 0 && !isModeAdmin && (
        <div className="alertmessage">VIDE MODE NON ADMIN</div>
      )}
    </MenuStyle>
  );
};

export default Menu;

const MenuStyle = styled.div`
  padding: 50px 90px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  justify-items: center;
  border-radius: 0px 0px 15px 15px;
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  height: 80vh;
  .alertmessage {
    font-size: 40px;
  }
`;
