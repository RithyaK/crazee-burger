import styled, { css } from "styled-components";

const Button = ({ Icon, label, className, onClick, version = "normal" }) => {
  return (
    <ButtonStyle version={version} className={className} onClick={onClick}>
      <span>{label}</span>
      {Icon && Icon}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  ${({ version }) => extraStyle[version]}
`;

const extraStyleSuccess = css`
  &:hover {
    background: #fff;
    color: green;
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  padding: 18px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  background: green;
  color: #fff;
`;
const extraStylePrimary = css`
  &:hover {
    background: #fff;
    color: #ff9f1b;
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  padding: 18px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  background: #ff9f1b;
  color: #fff;
`;

const extraStyle = {
  normal: extraStylePrimary,
  success: extraStyleSuccess,
};
