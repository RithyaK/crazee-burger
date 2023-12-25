import styled from "styled-components";
import { formatPrice } from "../../../../utils/maths";
import { BsFillTrashFill } from "react-icons/bs";
// import { useGetTotalPrice } from "../../../../hooks/useGetTotalPrice";
const BasketCard = ({
  imageSource,
  title,
  price,
  quantity,
  id,
  onDelete,
  isModeAdmin,
  onClick,
}) => {
  // const { getTotalPrice } = useGetTotalPrice();

  return (
    <BasketCardStyled $isModeAdmin={isModeAdmin} onClick={onClick}>
      <div>
        <img src={imageSource} alt="" />
      </div>
      <div className="infos">
        <p className="title">{title ? title : <div>&nbsp;</div>}</p>
        <p>{formatPrice(price)}</p>
      </div>
      <div className="quantity">x{quantity}</div>

      <BsFillTrashFill className="trash" onClick={() => onDelete(id)} />
    </BasketCardStyled>
  );
};
export default BasketCard;

const BasketCardStyled = styled.div`
  cursor: ${({ $isModeAdmin }) => ($isModeAdmin ? "pointer" : "auto")};
  background: white;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 20px;
  position: relative;
  &:hover > .trash {
    display: block;
    position: absolute;
    right: 0;
  }
  .trash {
    display: none;
    color: white;
    height: 100%;
    width: 25%;
    background: red;
    cursor: pointer;
  }
  img {
    object-fit: contain;
    height: 50px;
    width: 60px;
  }
  .infos {
    text-align: center;
    width: 150px;
    flex: 1;
  }
  .title {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
