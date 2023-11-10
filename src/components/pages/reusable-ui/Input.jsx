import styled from "styled-components";

const Input = ({ onChange, value, Icon, ...ExtraProps }) => {
  return (
    <InputStyle className="input-with-icon">
      {Icon && Icon}
      <input onChange={onChange} value={value} type="text" {...ExtraProps} />
    </InputStyle>
  );
};

export default Input;

const InputStyle = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;
  input {
    border: none;
  }
`;
