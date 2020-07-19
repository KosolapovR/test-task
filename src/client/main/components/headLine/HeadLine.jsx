import React from "react";
import styled from "styled-components";
import AviaryList from "./AviaryList";
import Contacts from "./Contacts";
import AddButton from "../AddButton";

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const Empty = styled.div`
  height: 100%;
  flex-grow: 1;
  border-bottom: 3px solid #d9d9d9;
`;

const ButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid #d9d9d9;
  padding: 0 10px;
`;

export default function HeadLine() {
  return (
    <Wrapper>
      <AviaryList />
      <ButtonWrapper>
        <AddButton size="small" />
      </ButtonWrapper>
      <Empty />
      <Contacts />
    </Wrapper>
  );
}
