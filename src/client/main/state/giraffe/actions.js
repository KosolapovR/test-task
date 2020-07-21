import {
    ADD_AVIARY,
    ADD_GIRAFFE, CLOSE_ADDING_CARD, CLOSE_EDITING_CARD, CREATE_GIRAFFE, DELETE_GIRAFFE,
    EDIT_GIRAFFE, HIDE_CAPACITY,
    SET_CURRENT_IMG,
    SET_GIRAFFES_INTO_AVIARY,
    UPDATE_GIRAFFE
} from "./types";

const setGiraffesInAviaryAC = payload => ({
    type: SET_GIRAFFES_INTO_AVIARY,
    payload
});

const createGiraffeAC = payload => ({
    type: CREATE_GIRAFFE,
    payload
});

const updateGiraffeAC = payload => ({
    type: UPDATE_GIRAFFE,
    payload
});

const deleteGiraffeAC = payload => ({
    type: DELETE_GIRAFFE,
    payload
});

const editGiraffeAC = payload => ({
    type: EDIT_GIRAFFE,
    payload
});

const addGiraffeAC = payload => ({
    type: ADD_GIRAFFE,
    payload
});

const addAviaryAC = () => ({
    type: ADD_AVIARY,
});

const setImgAC = (payload) => ({
    type: SET_CURRENT_IMG,
    payload
});

const hideCapacityAC = () => ({
    type: HIDE_CAPACITY,
});

const closeAddingCardAC = () => ({
    type: CLOSE_ADDING_CARD
});

const closeEditingCardAC = (payload) => ({
    type: CLOSE_EDITING_CARD,
    payload
});

export {
    addAviaryAC,
    createGiraffeAC,
    deleteGiraffeAC,
    updateGiraffeAC,
    setGiraffesInAviaryAC,
    editGiraffeAC,
    addGiraffeAC,
    setImgAC,
    hideCapacityAC,
    closeAddingCardAC,
    closeEditingCardAC
}
