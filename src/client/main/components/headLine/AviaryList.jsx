import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";

import {fetchGiraffesInAviary} from "../../state/giraffe";
import AviaryItem from "./AviaryItem";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const AviaryList = ({currentAviary, aviaries, getGiraffes}) => {
    const selectAviary = (num) => {
        if (num !== currentAviary.number)
            getGiraffes(num);
    };

    return (
        <Wrapper>
            {aviaries.map((aviary, i) =>
                <AviaryItem
                    id={aviary.number}
                    key={i}
                    num={aviary.number}
                    isSelected={aviary.number === currentAviary.number}
                    handleClick={selectAviary}
                />
            )}
        </Wrapper>
    );
};

const mapDispatchToProps = dispatch => ({
    getGiraffes: (aviaryNum) => {
        dispatch(fetchGiraffesInAviary(aviaryNum));
    },
});

const mapStateToProps = state => ({
    currentAviary: state.giraffesPage.currentAviary,
    aviaries: state.giraffesPage.aviaries,
});

export default connect(mapStateToProps, mapDispatchToProps)(AviaryList);
