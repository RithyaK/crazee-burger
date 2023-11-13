import styled from "styled-components";
import PrimaryButton from "../reusable-ui/PrimaryButton";
const Product = ({ title, imageSource, leftDescription }) => {
  function handleButton() {}

  return (
    <CardStyle>
      <img src={imageSource} alt={title} width="200px" height="145px" />
      <h1>{title}</h1>
      <div className="description">
        <p>{leftDescription}</p>
        <PrimaryButton label={"Ajouter"} onClick={handleButton} />
      </div>
    </CardStyle>
  );
};

export default Product;

const CardStyle = styled.div`
  width: 200px;
  height: 270px;
  background: white;
  border: 1px solid grey;
  border-radius: 15px;
  text-align: center;
  padding: 50px 20px 10px 20px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  font-family: Amatic SC;

  img {
    object-fit: contain;
  }

  .description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: none;
  }
`;
