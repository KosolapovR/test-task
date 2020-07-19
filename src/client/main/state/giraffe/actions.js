import {ADD_AVIARY, EDIT_GIRAFFE, SET_GIRAFFES_INTO_AVIARY, UPDATE_GIRAFFE} from "./types";

const setGiraffesInAviaryAC = payload => ({
    type: SET_GIRAFFES_INTO_AVIARY,
    payload
});

const updateGiraffeAC = payload => ({
    type: UPDATE_GIRAFFE,
    payload
});

const editGiraffeAC = payload => ({
    type: EDIT_GIRAFFE,
    payload
});

const addAviaryAC = () => ({
    type: ADD_AVIARY,
});

export {
    addAviaryAC,
    updateGiraffeAC,
    setGiraffesInAviaryAC,
    editGiraffeAC
}
