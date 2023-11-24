import styled from "styled-components";
import { useInfoContext } from "../../context/InfoContext";
import { tabsConfig } from "./tabsConfig";
import AdminAdd from "./AdminAdd";
import AdminEdit from "./AdminEdit";

const AdminPanel = () => {
  const { currentTabSelected } = useInfoContext();
  const tabs = tabsConfig;
  const tabSelected = tabs.find((tab) => currentTabSelected === tab.index);
  return (
    <AdminPanelStyled>
      {tabSelected && tabSelected.Content}
      {/* {tabSelected.index == "edit" && tabSelected.Content} */}
    </AdminPanelStyled>
  );
};

export default AdminPanel;

const AdminPanelStyled = styled.div`
  background: red;
  height: 250px;
`;
