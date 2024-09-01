import { Menu } from "@mui/icons-material";
import { styled } from "@mui/material";
import React from "react";
interface Props {
  handleShowHideMobileDrawer: () => void;
}
const TopHeader: React.FC<Props> = ({ handleShowHideMobileDrawer }) => {
  return (
    <TopHeaderMain>
      <Menu className="menu_icon" onClick={handleShowHideMobileDrawer} />
    </TopHeaderMain>
  );
};

export default TopHeader;
const TopHeaderMain = styled("div")`
  background-color: #fff;
  border-bottom: 1px solid #919eab1f;
  padding: 0 20px;
  position: sticky;
  top: 0;

  height: var(--navbar-height);
  box-sizing: border-box;
  z-index: 100;
  display: flex;

  align-items: center;
  .menu_icon {
    font-size: 40px;
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100vw;
  }
`;
