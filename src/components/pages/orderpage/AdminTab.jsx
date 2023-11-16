import styled from "styled-components";

const AdminTab = ({ title, onClick, className }) => {
  return (
    <AdminTabStyled onClick={onClick} className={className}>
      {title}
    </AdminTabStyled>
  );
};

export default AdminTab;

const AdminTabStyled = styled.button`
  border: 2px solid grey;
  background: white;
  cursor: pointer;
  &:hover {
    background: red;
  }
`;
