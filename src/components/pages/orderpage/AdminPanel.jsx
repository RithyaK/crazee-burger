import styled from "styled-components";
import { useInfoContext } from "../../context/InfoContext";
import { tabsConfig } from "./tabsConfig";

const AdminPanel = () => {
  const { currentTabSelected } = useInfoContext();
  const tabs = tabsConfig;
  const tabSelected = tabs.find((tab) => currentTabSelected === tab.index);
  return <AdminPanelStyled>{tabSelected.title}</AdminPanelStyled>;
};

export default AdminPanel;

const AdminPanelStyled = styled.div`
  background: red;
  height: 250px;
  color: white;
  font-size: 50px;
`;
