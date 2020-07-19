import React from "react";
import styled from "styled-components";
import AviaryItem from "./AviaryItem";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const aviaries = [
  { num: 1, isSelected: false },
  { num: 2, isSelected: true },
  { num: 3, isSelected: false }
];

export default function AviaryList() {
  return (
    <Wrapper>
      {aviaries.map((aviary, i) => (
        <AviaryItem key={i} num={aviary.num} isSelected={aviary.isSelected} />
      ))}
    </Wrapper>
  );
}
