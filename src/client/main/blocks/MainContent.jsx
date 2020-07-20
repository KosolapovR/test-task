import React from "react";
import styled from "styled-components";
import HeadLine from "../components/headLine/HeadLine";
import AddButton from "../components/AddButton";
import GiraffList from "../components/giraffesList/GiraffesList";
import CapacityTab from "../components/capacityTab/CapacityTab";
import Updates from "../components/updates/Updates";
import {addGiraffeAC, editGiraffeAC, hideCapacityAC} from "../state/giraffe";
import {connect} from "react-redux";

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

const MainContent = ({hideCapacity, addGiraffe, capacityShow, aviary}) => {
    const handleAddGiraffe = () => {
        addGiraffe()
    };

    const closeCapacityTab = () => {
        hideCapacity();
    };
    return (
        <Wrapper>
            <HeadLine/>
            <PageTitleWrapper>
                <PageTitle>Жирафы</PageTitle>
                {aviary && aviary.giraffes && aviary.giraffes.length < 4 && <AddButton addClick={handleAddGiraffe}/>}
            </PageTitleWrapper>
            <GiraffList/>
            {capacityShow && aviary && <CapacityTab percent={aviary.giraffes.length * 25} handleClose={closeCapacityTab}/>}
        </Wrapper>
    );
}

const mapStateToProps = state => ({
    capacityShow: state.giraffesPage.capacityShow,
    aviary: state.giraffesPage.currentAviary,
});

const mapDispatchToProps = dispatch => ({
    addGiraffe: () => {
        dispatch(addGiraffeAC());
    },
    hideCapacity: () => {
        dispatch(hideCapacityAC());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
