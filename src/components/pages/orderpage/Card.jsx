import styled, { css } from "styled-components";
import Button from "../reusable-ui/Button";
import { TiDelete } from "react-icons/ti";
const Card = ({
  title,
  imageSource,
  leftDescription,
  hasDeleteButton,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
  // inputRef,
}) => {
  return (
    <CardStyle
      onClick={onClick}
      isHoverable={isHoverable}
      isSelected={isSelected && isHoverable}
    >
      {hasDeleteButton && (
        <TiDelete className="deletebutton" onClick={onDelete} />
      )}
      <img src={imageSource} alt={title} width="200px" height="145px" />
      <h1>{title}</h1>
      <div className="description">
        <p>{leftDescription}</p>
        <Button
          label={"Ajouter"}
          onClick={(e) => e.stopPropagation()}
          className={isSelected ? "is-selected" : ""}
        />
      </div>
    </CardStyle>
  );
};

export default Card;

const CardStyle = styled.div`
  ${(props) => props.isHoverable && hoverableStyle}
  ${(props) => props.isSelected && ActiveStyle}
  width: 200px;
  height: 270px;
  position: relative;
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
  .deletebutton:active {
    color: white;
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
  .is-selected {
    background: white;
    color: orange;
  }
  .is-selected:active {
    background: orange;
    color: white;
    border: 1px solid white;
  }
`;
const hoverableStyle = css`
  &:hover {
    border: 1px solid orange;
    transform: scale(1.03);
    cursor: pointer;
  }
`;

const ActiveStyle = css`
  background: orange;
`;
