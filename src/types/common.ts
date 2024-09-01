export interface SidebarSubmenuListProps {
  name: string;
  link: string;
  icon: string;
}
export interface SidebarMenuListProps {
  name: string;
  link: string;
  icon: string;
  menuList?: SidebarMenuListProps[];
}
