import React from "react";
import styled from "styled-components";
import homeIcon from "../../../../../public/assets/icons/home.svg";
import tasksIcon from "../../../../../public/assets/icons/tasks.svg";
import horseIcon from "../../../../../public/assets/icons/horse-head.svg";
import userFriendsIcon from "../../../../../public/assets/icons/user-friends.svg";
import cogIcon from "../../../../../public/assets/icons/cog.svg";
import toolsIcon from "../../../../../public/assets/icons/tools.svg";
import MenuItem from "./MenuItem";
import homeIconSelected from "../../../../../public/assets/icons/home-selected.svg";
import tasksIconSelected from "../../../../../public/assets/icons/tasks-selected.svg";
import horseIconSelected from "../../../../../public/assets/icons/horse-head-selected.svg";
import userFriendsIconSelected from "../../../../../public/assets/icons/user-friends-selected.svg";
import cogIconSelected from "../../../../../public/assets/icons/cog-selected.svg";
import toolsIconSelected from "../../../../../public/assets/icons/tools-selected.svg";

const Wrapper = styled.div`
  padding: 28px 0;
`;

export default function MenuList() {
  const menuItems = [
    {
      icon: homeIcon,
      selectedIcon: homeIconSelected,
      title: "Главная"
    },
    { icon: tasksIcon, selectedIcon: tasksIconSelected, title: "Управление" },
    {
      icon: horseIcon,
      selectedIcon: horseIconSelected,
      title: "Жирафы",
      isSelected: true
    },
    {
      icon: userFriendsIcon,
      selectedIcon: userFriendsIconSelected,
      title: "Сотрудники"
    },
    { icon: cogIcon, selectedIcon: cogIconSelected, title: "Настройки" },
    { icon: toolsIcon, selectedIcon: toolsIconSelected, title: "Главная" }
  ];

  return (
    <Wrapper>
      {menuItems.map((item, i) =>
        item.isSelected ? (
          <MenuItem
            key={i}
            title={item.title}
            icon={item.selectedIcon}
            isSelected={item.isSelected}
          />
        ) : (
          <MenuItem
            key={i}
            title={item.title}
            icon={item.icon}
            isSelected={item.isSelected}
          />
        )
      )}
    </Wrapper>
  );
}
