import styled from "styled-components";

const PrimaryButton = ({ Icon, label }) => {
  return (
    <ButtonStyle className="button-with-icon">
      <span>{label}</span>
      {Icon && Icon}
    </ButtonStyle>
  );
};

export default PrimaryButton;

const ButtonStyle = styled.button`
  &:hover {
    background: #fff;
    color: #ff9f1b;
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  padding: 18px 24px;
  justify-content: center;
  padding: 16px 0;
  align-items: center;
  border-radius: 5px;
  border: none;
  background: #ff9f1b;
  color: #fff;
`;
