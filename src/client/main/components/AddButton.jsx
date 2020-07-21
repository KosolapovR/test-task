import React from "react";
import styled from "styled-components";

import plusIcon from "assets/icons/plus.svg";

const Wrapper = styled.div`
  height: ${props => (props.size === "small" ? `25px` : `37px`)};
  width: ${props => (props.size === "small" ? `25px` : `37px`)};
  border-radius: 20px;
  background: ${props => (props.size === "small" ? `#d9d9d9` : `#567354`)};
  display: flex;
  justify-content: center;
  transition: background 0.2s ease;
  cursor: pointer;
  &:hover {
    background: #567354;
  }
`;

const Icon = styled.div`
  background: ${props => `url(${props.icon}) no-repeat center`};
  width: 50%;
  height: 50%;
  align-self: center;
`;

export default function AddButton({size, addClick}) {
    if (!size) {
        size = "normal";
    }
    return (
        <Wrapper size={size} onClick={addClick}>
            <Icon icon={plusIcon}/>
        </Wrapper>
    );
}
