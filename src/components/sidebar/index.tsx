import { Box, Drawer, Stack, Typography, styled } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ICON_LIST, SIDEBAR_MENU_LIST } from "../../utils/sidebar";
import { SidebarMenuListProps } from "../../types/common";
interface Props {
  showDrawer: boolean;
  handleShowHideMobileDrawer: () => void;
}
const SidebarCompo = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Wrapper>
        {/* logo secction */}
        <Typography className="logo_text">MLC</Typography>
        {SIDEBAR_MENU_LIST.map((item: SidebarMenuListProps, index: number) => {
          const Icon = ICON_LIST[item.icon];
          return (
            <Link
              to={item.link}
              key={index}
              className={`link ${
                pathname === item.link ? "active" : "inactive"
              }`}
            >
              <Stack direction={"row"} gap={1.5}>
                <Icon className="icon" />
                <Typography>{item.name}</Typography>
              </Stack>
            </Link>
          );
        })}
      </Wrapper>
    </>
  );
};
const SiderBar: React.FC<Props> = ({
  showDrawer,
  handleShowHideMobileDrawer,
}) => {
  return (
    <>
      <Drawer
        open={showDrawer}
        onClose={handleShowHideMobileDrawer}
        anchor="left"
        PaperProps={{
          sx: {
            width: "var(--sidebar-width)",
          },
        }}
      >
        <SidebarCompo />
      </Drawer>
      <SidebarCompo />
    </>
  );
};

export default SiderBar;
const Wrapper = styled(Box)`
  padding: 5px 10px;
  overflow-y: auto;
  .link {
    display: inline-block;
    text-decoration: none !important;
    padding: 5px 8px;
    width: 100%;
    border-radius: 4px;
    transition: all 0.2s;
  }
  .active {
    color: var(--primary-main);
    background-color: var(--nav-item-hover-active-color);
  }
  .inactive {
    color: var(--nav-item-color);
    :hover {
      background-color: var(--nav-item-hover-color);
    }
  }

  .logo_text {
    font-size: 3rem;
    font-weight: 600;
  }
  .icon {
    font-size: 24px;
  }
`;
