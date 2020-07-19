import React from "react";
import styled from "styled-components";
import HeadLine from "../components/headLine/HeadLine";
import AddButton from "../components/AddButton";
import GiraffList from "../components/giraffList/GiraffList";
import CapacityTab from "../components/capacityTab/CapacityTab";
import Updates from "../components/updates/Updates";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 25px;
  padding: 20px 40px;
  position: relative;
`;

const PageTitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  line-height: 37px;
  color: #567354;
  margin-top: 35px;
  margin-right: 13px;
  float: left;
`;

export default function MainContent() {
    return (
        <Wrapper>
            <HeadLine/>
            <PageTitleWrapper>
                <PageTitle>Жирафы</PageTitle>
                <AddButton/>
            </PageTitleWrapper>
            <GiraffList/>
            <CapacityTab percent={100}/>
        </Wrapper>
    );
}
