import styled from "styled-components";
import Button from "../reusable-ui/Button";
import { TiDelete } from "react-icons/ti";
const Product = ({
  title,
  imageSource,
  leftDescription,
  hasDeleteButton,
  onDelete,
}) => {
  return (
    <CardStyle>
      {hasDeleteButton && (
        <TiDelete className="deletebutton" onClick={onDelete} />
      )}
      <img src={imageSource} alt={title} width="200px" height="145px" />
      <h1>{title}</h1>
      <div className="description">
        <p>{leftDescription}</p>
        <Button label={"Ajouter"} />
      </div>
    </CardStyle>
  );
};

export default Product;

const CardStyle = styled.div`
  width: 200px;
  height: 270px;
  position: relative;
  background: white;
  border: 1px solid grey;
  border-radius: 15px;
  text-align: center;
  padding: 30px 20px 10px 20px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  font-family: Amatic SC;
  .deletebutton {
    width: 30px;
    height: 30px;
    color: orange;
    cursor: pointer;
    position: absolute;
  }
  .deletebutton:hover {
    color: red;
  }
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
