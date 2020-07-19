import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  cursor: pointer;
  border-bottom: ${props =>
    props.isSelected ? `3px solid #567354` : `3px solid #D9D9D9`};
`;

const AviaryName = styled.div`
  padding: 20px 10px;
  color: ${props => (props.isSelected ? `#484848` : `#D9D9D9`)};
`;

export default function AviaryItem({ num, isSelected, handleClick }) {
  return (
    <Wrapper isSelected={isSelected} onClick={() => {handleClick(num)}}>
      <AviaryName isSelected={isSelected}>Вольер {num}</AviaryName>
    </Wrapper>
  );
}
