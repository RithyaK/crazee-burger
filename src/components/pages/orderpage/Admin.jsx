import styled from "styled-components";
import { useInfoContext } from "../../context/InfoContext";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
const PanelAdmin = () => {
  //
  const { isCollapsed } = useInfoContext();
  //

  //
  return (
    <PanelAdminStyle>
      <AdminTabs isCollapsed={isCollapsed} />
      {!isCollapsed && <AdminPanel />}
    </PanelAdminStyle>
  );
};

export default PanelAdmin;

const PanelAdminStyle = styled.div`
  bottom: 0;
  lef: 0;
  position: absolute;
  width: 100%;
  font-family: none;
`;
