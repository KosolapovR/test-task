import React from "react";
import styled from "styled-components";
import bellIcon from "../../../../../public/assets/icons/bell.svg";
import giraffeIcon from "../../../../../public/assets/icons/logo.png";

const Wrapper = styled.div`
  border-bottom: 3px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.div`
  background: ${props => `url(${props.icon}) no-repeat center`};
  background-size: ${props => (props.logo ? `cover` : `auto`)};
  width: 30px;
  height: 30px;
  align-self: center;
  margin-right: 13px;
  cursor: pointer;
`;

const Email = styled.div`
  color: #484848;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
`;

export default function HeadLine() {
  return (
    <Wrapper>
      <Icon icon={bellIcon} />
      <Icon icon={giraffeIcon} logo={true} />
      <Email>hello@giraffe.com</Email>
    </Wrapper>
  );
}
