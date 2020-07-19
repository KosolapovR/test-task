import {ADD_AVIARY, EDIT_GIRAFFE, SET_GIRAFFES_INTO_AVIARY, UPDATE_GIRAFFE} from "./types";

const initialState = {
    aviaries: [],
    currentAviary: {number: 1},
    capacityShow: false,
    editingGiraffeId: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GIRAFFES_INTO_AVIARY: {
            const newState = {
                ...state,
                currentAviary: action.payload
            };
            newState.aviaries[action.payload.number - 1] =
                {
                    number: action.payload.number,
                    giraffes: action.payload.giraffes
                };
            return newState;
        }
        case ADD_AVIARY: {
            const lastAviaryNumber = state.aviaries[state.aviaries.length - 1].number;
            return {
                ...state,
                aviaries: [...state.aviaries, {number: lastAviaryNumber + 1, giraffes: []}]
            };
        }
        case UPDATE_GIRAFFE: {
            const newState = {...state, editingGiraffeId: undefined};
            newState.aviaries[action.payload.aviary - 1].giraffes = newState.aviaries[action.payload.aviary - 1].giraffes.map(giraffe => {
                if (giraffe._id === action.payload._id) {
                    return action.payload;
                } else {
                    return giraffe;
                }
            });
            newState.currentAviary.giraffes = newState.currentAviary.giraffes.map(giraffe => {
                if (giraffe._id === action.payload._id) {
                    return action.payload;
                } else {
                    return giraffe;
                }
            });
            return newState;
        }
        case EDIT_GIRAFFE: {
            debugger;
            return {...state, editingGiraffeId: action.payload};
        }
        default:
            return state;
    }
};


export default reducer;
