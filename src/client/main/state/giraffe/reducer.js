import {GET_GIRAFFES_IN_AVIARY} from "./types";

const initialState = {
    currentAviaryNumber: 1,
    giraffes: [],
    capacityShow: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GIRAFFES_IN_AVIARY: {
            return state;
        }
        default:
            return state;
    }
};


export default reducer;
