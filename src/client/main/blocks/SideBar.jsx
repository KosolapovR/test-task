import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import MenuList from "../components/menu/MenuList";

const Wrapper = styled.div`
  padding: 28px 34px;
`;

export default function Sidebar() {
  return (
    <Wrapper>
      <Logo />
      <MenuList />
    </Wrapper>
  );
}
