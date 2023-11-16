import styled from "styled-components";
import AdminTab from "./AdminTab";
import { useInfoContext } from "../../context/InfoContext";
import { tabsConfig } from "./tabsConfig";

const AdminTabs = () => {
  const {
    isCollapsed,
    setIsCollapsed,
    isEditing,
    setIsEditing,
    isAdding,
    setIsAdding,
    currentTabSelected,
    setCurrentTabSelected,
  } = useInfoContext();

  function selectTab(tabSelected) {
    setIsCollapsed(false);
    setCurrentTabSelected(tabSelected);
  }
  const tabs = tabsConfig;
  return (
    <AdminTabsStyled>
      <AdminTab
        title={isCollapsed ? "ONGLET FERMÉ" : "ONGLET OUVERT"}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={!isCollapsed ? "is-active" : ""}
      />
      {/* <AdminTab
        Title={"Ajouter un produit"}
        className={currentTabSelected === "add" ? "is-active" : ""}
        onClick={() => selectTab("add")}
      />
      <AdminTab
        Title={"modifier un produit"}
        className={currentTabSelected === "edit" ? "is-active" : ""}
        onClick={() => selectTab("edit")}
      /> */}
      {tabs.map((tab) => (
        <AdminTab
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
          title={tab.title}
        />
      ))}
    </AdminTabsStyled>
  );
};

export default AdminTabs;

const AdminTabsStyled = styled.div`
  display: flex;
  gap: 20px;
  .is-active {
    background: green;
  }
`;
