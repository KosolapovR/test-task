import React, {useEffect} from "react";
import styled from "styled-components";
import GiraffeCard from "./GiraffeCard";
import giraffeImg1 from '../../../../../public/assets/img/giro1.png'
import {connect} from "react-redux";
import {fetchGiraffesInAviary} from "../../state/giraffe";
import EditableGiraffeCard from "./editableCard/EditableGiraffeCard";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(236px, 1fr));
`;

const GiraffesList = ({getGiraffes, currentAviary, editingGiraffeId}) => {

    useEffect(() => {
        getGiraffes(currentAviary.number);
    }, []);


    let cards;
    if (editingGiraffeId) {
        cards = currentAviary.giraffes && currentAviary.giraffes.map((giraffe, i) => {
                if (giraffe._id === editingGiraffeId) {
                    return <EditableGiraffeCard
                        key={giraffe._id}
                        data={giraffe}
                        img={giraffeImg1}
                        aviary={currentAviary.number}
                    />;
                } else {
                    return <GiraffeCard
                        key={giraffe._id}
                        data={giraffe}
                        img={giraffeImg1}
                        aviary={currentAviary.number}
                    />;
                }
            }
        )
    } else {
        cards = currentAviary.giraffes && currentAviary.giraffes.map((giraffe, i) =>
            <GiraffeCard
                key={giraffe._id}
                data={giraffe}
                img={giraffeImg1}
                aviary={currentAviary.number}
            />
        )
    }

    return (
        <Wrapper>
            {cards}
        </Wrapper>
    );
};

const mapStateToProps = state => ({
    currentAviary: state.giraffesPage.currentAviary,
    editingGiraffeId: state.giraffesPage.editingGiraffeId,
});

const mapDispatchToProps = dispatch => ({
    getGiraffes: (aviaryNum) => {
        dispatch(fetchGiraffesInAviary(aviaryNum));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(GiraffesList);
