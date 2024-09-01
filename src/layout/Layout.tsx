import { Box, styled } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import SiderBar from "../components/sidebar";
import TopHeader from "../components/TopHeader";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, setState] = useState({
    showMobileDrawer: false,
  });

  const handleShowHideMobileDrawer = () => {
    setState((prev) => ({ ...prev, showMobileDrawer: !prev.showMobileDrawer }));
  };
  return (
    <MainBox>
      {/* sidebar section */}

      <SidebarNav>
        <SiderBar
          showDrawer={state.showMobileDrawer}
          handleShowHideMobileDrawer={handleShowHideMobileDrawer}
        />
      </SidebarNav>

      {/* main section */}
      <RightMainSection>
        <TopHeader handleShowHideMobileDrawer={handleShowHideMobileDrawer} />
        <div className="children_div">{children}</div>
      </RightMainSection>
    </MainBox>
  );
};

export default Layout;
const MainBox = styled(Box)`
  background-color: #f7f7f7;
  height: 100vh;
  overflow: hidden;
  display: flex;
`;
const SidebarNav = styled("nav")`
  background-color: #fff;
  width: var(--sidebar-width);
  position: fixed;
  left: 0;
  height: 100%;
  border-right: 1px solid #919eab1f;
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
const RightMainSection = styled("main")`
  .children_div {
    padding-top: 15px;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 100%;
    width: calc(100vw - var(--sidebar-width));
    margin-left: var(--sidebar-width);
  }
`;
