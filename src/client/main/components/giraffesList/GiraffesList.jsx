import React, {useEffect} from "react";
import styled from "styled-components";
import {connect} from "react-redux";

import {fetchGiraffesInAviary} from "../../state/giraffe";
import GiraffeCard from "./GiraffeCard";
import EditableGiraffeCard from "./editableCard/EditableGiraffeCard";
import AddGiraffeCard from "./addCard/AddGiraffeCard";

const Wrapper = styled.div`
  display: flex;
`;

const GiraffesList = ({getGiraffes, currentAviary, editingGiraffeId, addingGiraffe}) => {

    useEffect(() => {
        getGiraffes(currentAviary.number);
    }, [currentAviary.number]);

    let cards;
    if (editingGiraffeId) {
        cards = currentAviary.giraffes && currentAviary.giraffes.map((giraffe, i) => {
                if (giraffe._id === editingGiraffeId) {
                    return <EditableGiraffeCard
                        key={giraffe._id}
                        data={giraffe}
                        aviary={currentAviary.number}
                    />;
                } else {
                    return <GiraffeCard
                        key={giraffe._id}
                        data={giraffe}
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
                aviary={currentAviary.number}
            />
        );
    }

    if (addingGiraffe) {
        cards = [<AddGiraffeCard key={0} aviary={currentAviary.number}/>, ...cards]
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
    addingGiraffe: state.giraffesPage.addingGiraffe,
});

const mapDispatchToProps = dispatch => ({
    getGiraffes: (aviaryNum) => {
        dispatch(fetchGiraffesInAviary(aviaryNum));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(GiraffesList);
