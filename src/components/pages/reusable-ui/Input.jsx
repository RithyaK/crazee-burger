import styled from "styled-components";

const Input = ({ onChange, value, Icon, className, ...ExtraProps }) => {
  return (
    <InputStyle className={className}>
      <div className="icon">{Icon && Icon}</div>
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
  input {
    border: none;
  }
  .icon {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: grey;
    margin-right: 8px;
  }
`;
