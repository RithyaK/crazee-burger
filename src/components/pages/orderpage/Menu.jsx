import PrimaryButton from "../reusable-ui/PrimaryButton";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import styled from "styled-components";

const Menu = () => {
  function handleButton() {}
  return (
    <MenuStyle>
      {fakeMenu2.map((burger) => (
        <div className="card" key={burger.id}>
          <img
            src={burger.imageSource}
            alt={burger.title}
            width="200px"
            height="145px"
          />
          <h1>{burger.title}</h1>
          <div className="container-price-button">
            <p>{burger.price.toFixed(2)}$</p>
            <PrimaryButton label={"Ajouter"} onClick={handleButton} />
          </div>
        </div>
      ))}
    </MenuStyle>
  );
};

export default Menu;

const MenuStyle = styled.div`
  padding: 50px 90px;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  border-radius: 0px 0px 15px 15px;
  background: #f5f5f7;
  height: 1300px;
  background: blue;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  .card {
    width: 200px;
    height: 270px;
    background: white;
    border: 1px solid grey;
    border-radius: 15px;
    text-align: center;
    padding: 50px 20px 10px 20px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    font-family: Amatic SC;
  }
  .container-price-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: none;
  }
`;
