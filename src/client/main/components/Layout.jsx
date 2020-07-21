import React from 'react';
import styled from "styled-components";

import Sidebar from "../blocks/SideBar";
import MainContent from "../blocks/MainContent";


const Wrapper = styled.div`
  width: calc(100% - 16px);
  max-width: 1440px;
  min-width: 1090px;
  margin: 8px auto;
  padding: 12px;
  background: #668663;
  border-radius: 35px;
  min-height: calc(100vh - 16px);
  display: grid;
  grid-template-columns: max-content 1fr;
`;

function Layout() {
    return (
        <Wrapper>
            <Sidebar/>
            <MainContent/>
        </Wrapper>
    )
}

export default Layout;
