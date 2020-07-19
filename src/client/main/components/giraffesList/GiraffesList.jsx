import React, {useEffect} from "react";
import styled from "styled-components";
import GiraffCard from "./GiraffCard";
import giraffImg1 from '../../../../../public/assets/img/giro1.png'
import giraffImg2 from '../../../../../public/assets/img/giro2.png'
import giraffImg3 from '../../../../../public/assets/img/giro3.png'
import {connect} from "react-redux";
import {fetchGiraffesInAviary} from "../../state/giraffe";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(236px, 1fr));
`;

const GiraffesList = ({getGiraffes, giraffes, currentAviaryNumber}) => {

    useEffect(() => {
        getGiraffes(currentAviaryNumber)
    }, []);

    if (giraffes) {
        debugger;
    }

    return (
        <Wrapper>
            <GiraffCard img={giraffImg1}/>
            <GiraffCard img={giraffImg2}/>
            <GiraffCard img={giraffImg3}/>
        </Wrapper>
    );
};

const mapStateToProps = state => ({
    giraffes: state.giraffesPage.giraffes,
    currentAviaryNumber: state.giraffesPage.currentAviaryNumber,
});

const mapDispatchToProps = dispatch => ({
    getGiraffes: (aviaryNum) => {
        dispatch(fetchGiraffesInAviary(aviaryNum));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(GiraffesList);
