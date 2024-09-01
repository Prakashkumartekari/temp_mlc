import {
  Dashboard,
  Diversity3,
  Domain,
  Groups2,
  SvgIconComponent,
} from "@mui/icons-material";
import { SidebarMenuListProps } from "../types/common";
import { routesConstants } from "./constants";

export const SIDEBAR_MENU_LIST: SidebarMenuListProps[] = [
  {
    name: "Dashboard",
    icon: "dashboard",
    link: routesConstants.dashboard,
  },
  {
    name: "Staff's",
    icon: "staffs",
    link: routesConstants.staff,
  },
  {
    name: "Voter's",
    icon: "voter",
    link: routesConstants.voter,
  },
  {
    name: "Institute",
    icon: "institute",
    link: routesConstants.institute,
  },
];
export const ICON_LIST: Record<string, SvgIconComponent> = {
  dashboard: Dashboard,
  staffs: Groups2,
  voter: Diversity3,
  institute: Domain,
};
