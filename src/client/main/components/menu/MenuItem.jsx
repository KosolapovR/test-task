import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  height: 50px;
  margin-bottom: 20px;
  border-radius: 52px;
  background: ${props => (props.isSelected ? `#FFFFFF` : `#567354`)};
  display: flex;
  align-items: center;
  color: ${props => (props.isSelected ? `#567354` : `#FFFFFF`)};
  transition: background 0.2s ease-out;
  &:hover {
    background: ${props => (props.isSelected ? `#FFFFFF` : `#769374`)};
    cursor: ${props => (props.isSelected ? `auto` : `pointer`)};
  }
`;

const Icon = styled.div`
  background: ${props => `url(${props.icon}) no-repeat center`};
  width: 30px;
  height: 100%;
  align-self: center;
  margin: 0 25px 0 10px;
`;

const Title = styled.span`
  font-size: 17px;
  line-height: 20px;
`;

export default function MenuItem({ icon, title, isSelected }) {
  return (
    <ItemWrapper isSelected={isSelected}>
      <Icon icon={icon} />
      <Title>{title}</Title>
    </ItemWrapper>
  );
}
