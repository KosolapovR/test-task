import React, {forwardRef} from "react";
import styled from "styled-components";
import editIcon from "assets/icons/edit.svg";
import deleteIcon from "assets/icons/delete.svg";
import {deleteGiraffe, editGiraffeAC} from "../../state/giraffe";
import {connect} from "react-redux";

const Wrapper = styled.div`
  position: absolute;
  width: min-content;
  min-width: 174px;
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
  width: min-content;
  min-width: 151px;
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

const InfoPopUp = forwardRef(({giraffeId, editGiraffe, deleteGiraffe}, ref) => {
    const handleEditClick = () => {
        editGiraffe(giraffeId);
    };

    const handleDeleteClick = () => {
        deleteGiraffe(giraffeId);
    };

    return (
        <Wrapper ref={ref}>
            <Action onClick={handleEditClick}>
                <ActionIcon icon={editIcon}/>
                Редактировать
            </Action>
            <Action onClick={handleDeleteClick}>
                <ActionIcon icon={deleteIcon}/>
                Удалить
            </Action>
        </Wrapper>
    );
});

const mapDispatchToProps = dispatch => ({
    editGiraffe: (id) => {
        dispatch(editGiraffeAC(id));
    },
    deleteGiraffe: (id) => {
        dispatch(deleteGiraffe(id));
    }
});

export default connect(null, mapDispatchToProps, null, {forwardRef: true})(InfoPopUp);
