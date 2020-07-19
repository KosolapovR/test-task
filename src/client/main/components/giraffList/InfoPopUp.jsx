import React, { forwardRef } from "react";
import styled from "styled-components";
import editIcon from "../../../../../public/assets/icons/edit.svg";
import deleteIcon from "../../../../../public/assets/icons/delete.svg";

const Wrapper = styled.div`
  position: absolute;
  width: 174px;
  height: 94px;
  right: -10px;
  top: -10px;
  z-index: 100;
  background: #668663;
  border-radius: 20px;
  padding: 15px 12px;
`;

const Action = styled.div`
  border-radius: 20px;
  width: 151px;
  height: 32px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 13px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    background: #567354;
  }
`;

const ActionIcon = styled.div`
  background: ${props => `url(${props.icon}) no-repeat center`};
  width: 18px;
  height: 18px;
  align-self: center;
  margin-right: 10px;
`;

const InfoPopUp = forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <Action>
        <ActionIcon icon={editIcon} />
        Редактировать
      </Action>
      <Action>
        <ActionIcon icon={deleteIcon} />
        Удалить
      </Action>
    </Wrapper>
  );
});

export default InfoPopUp;
