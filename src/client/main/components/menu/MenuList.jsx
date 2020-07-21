import React from "react";
import styled from "styled-components";

import homeIcon from "assets/icons/home.svg";
import tasksIcon from "assets/icons/tasks.svg";
import horseIcon from "assets/icons/horse-head.svg";
import userFriendsIcon from "assets/icons/user-friends.svg";
import cogIcon from "assets/icons/cog.svg";
import toolsIcon from "assets/icons/tools.svg";
import homeIconSelected from "assets/icons/home-selected.svg";
import tasksIconSelected from "assets/icons/tasks-selected.svg";
import horseIconSelected from "assets/icons/horse-head-selected.svg";
import userFriendsIconSelected from "assets/icons/user-friends-selected.svg";
import cogIconSelected from "assets/icons/cog-selected.svg";
import toolsIconSelected from "assets/icons/tools-selected.svg";
import MenuItem from "./MenuItem";

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
        {icon: tasksIcon, selectedIcon: tasksIconSelected, title: "Управление"},
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
        {icon: cogIcon, selectedIcon: cogIconSelected, title: "Настройки"},
        {icon: toolsIcon, selectedIcon: toolsIconSelected, title: "Главная"}
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
