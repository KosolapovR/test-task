import React from "react";
import styled from "styled-components";
import AviaryList from "./AviaryList";
import Contacts from "./Contacts";
import AddButton from "../AddButton";
import {connect} from "react-redux";
import {addAviaryAC} from "../../state/giraffe/actions";

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

const HeadLine = ({addAviary, aviaries}) => {

    const handleAddAviary = () => {
        addAviary();
    };
    return (
        <Wrapper>
            <AviaryList/>
            <ButtonWrapper>
                {
                    aviaries && aviaries.length < 5 &&
                    <AddButton size="small" addClick={handleAddAviary}/>
                }
            </ButtonWrapper>
            <Empty/>
            <Contacts/>
        </Wrapper>
    );
};

const mapStateToProps = state => ({
    aviaries: state.giraffesPage.aviaries,
});


const mapDispatchToProps = dispatch => ({
    addAviary: () => {
        dispatch(addAviaryAC());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeadLine);
