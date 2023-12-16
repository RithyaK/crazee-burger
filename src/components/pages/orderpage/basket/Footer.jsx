import Header from "../../reusable-ui/Header";
import styled from "styled-components";

const Footer = () => {
  return (
    <Header>
      <FooterStyled>footer</FooterStyled>;
    </Header>
  );
};

export default Footer;

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
`;
