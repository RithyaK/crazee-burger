import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import styled from "styled-components";
import { useState } from "react";
import Product from "./Product";
import { formatPrice } from "../../../utils/maths";

const Menu = () => {
  const [products, setProducts] = useState(fakeMenu2);

  return (
    <MenuStyle>
      {products.map((product) => (
        <Product
          key={product.id}
          leftDescription={formatPrice(product.price)}
          imageSource={product.imageSource}
          title={product.title}
        />
      ))}
    </MenuStyle>
  );
};

export default Menu;

const MenuStyle = styled.div`
  padding: 50px 90px;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-row-gap: 60px;
  justify-items: center;
  border-radius: 0px 0px 15px 15px;
  background: #f5f5f7;
  background: blue;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  height: 80vh;
`;
