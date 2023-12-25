import styled from "styled-components";
import { useInfoContext } from "../../context/InfoContext";
import { tabsConfig } from "./tabsConfig";
import AdminAdd from "./AdminAdd";
import AdminEdit from "./AdminEdit";
import EMPTY_PRODUCT from "./enums";

const AdminPanel = () => {
  const { currentTabSelected, productSelected } = useInfoContext();
  const hasNotBeenClicked = EMPTY_PRODUCT == productSelected;
  const tabs = tabsConfig(hasNotBeenClicked);
  const tabSelected = tabs.find((tab) => currentTabSelected === tab.index);
  return (
    <AdminPanelStyled>
      {tabSelected && tabSelected.Content}
      {/* {tabSelected.index == "edit" && tabSelected.Content} */}
      {/* {tabSelected.index == "add" && tabSelected.Content} */}
    </AdminPanelStyled>
  );
};

export default AdminPanel;

const AdminPanelStyled = styled.div`
  background: red;
  height: 250px;
`;
