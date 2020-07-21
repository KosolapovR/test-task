import {
    ADD_AVIARY,
    ADD_GIRAFFE, CLOSE_ADDING_CARD, CLOSE_EDITING_CARD, CREATE_GIRAFFE, DELETE_GIRAFFE,
    EDIT_GIRAFFE, HIDE_CAPACITY, NOT_CONFIRMED,
    SET_CURRENT_IMG,
    SET_GIRAFFES_INTO_AVIARY, SUCCESS,
    UPDATE_GIRAFFE
} from "./types";

const initialState = {
    aviaries: [],
    currentAviary: {number: 1},
    capacityShow: false,
    editingGiraffeId: null,
    addingGiraffeId: null,
    currentImg: null,
    updatesHistory: [],
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
            const newState = {
                ...state,
                currentImg: null,
                editingGiraffeId: undefined,
                updatesHistory: [{
                    date: new Date(),
                    type: 'Редактировать',
                    giraffeName: action.payload.name,
                    status: SUCCESS
                }, ...state.updatesHistory]
            };

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
        case CREATE_GIRAFFE: {
            const newState = {
                ...state,
                updatesHistory: [{
                    date: new Date(),
                    type: 'Новый жираф',
                    giraffeName: action.payload.name,
                    status: SUCCESS
                }, ...state.updatesHistory],
                addingGiraffe: false,
                currentImg: null,
                capacityShow: true,
                currentAviary: {
                    ...state.currentAviary,
                    giraffes: [...state.currentAviary.giraffes, action.payload]
                }
            };
            newState.aviaries[action.payload.aviary - 1].giraffes.push(action.payload);
            return newState;
        }
        case DELETE_GIRAFFE: {
            const giraffes = state.currentAviary.giraffes.filter(g => g._id !== action.payload);
            const deletedGiraffe = state.currentAviary.giraffes.find(g => g._id === action.payload);

            const newState = {
                ...state,
                updatesHistory: [{
                    date: new Date(),
                    type: 'Удалить',
                    giraffeName: deletedGiraffe.name,
                    status: SUCCESS
                }, ...state.updatesHistory],
                currentAviary: {number: state.currentAviary.number, giraffes: giraffes}
            };

            newState.aviaries[newState.currentAviary.number - 1] = newState.currentAviary;

            return newState;
        }
        case EDIT_GIRAFFE: {
            return {...state, addingGiraffe: false, editingGiraffeId: action.payload};
        }
        case ADD_GIRAFFE: {
            return {...state, addingGiraffe: true, editingGiraffeId: false};
        }
        case SET_CURRENT_IMG: {
            return {...state, currentImg: action.payload};
        }
        case HIDE_CAPACITY: {
            return {...state, capacityShow: false};
        }
        case CLOSE_EDITING_CARD: {
            return {
                ...state, editingGiraffeId: false, currentImg: null, updatesHistory: [{
                    date: new Date(),
                    type: 'Редактировать',
                    giraffeName: action.payload,
                    status: NOT_CONFIRMED
                }, ...state.updatesHistory],
            };
        }
        case CLOSE_ADDING_CARD: {
            return {
                ...state, addingGiraffe: false, currentImg: null, updatesHistory: [{
                    date: new Date(),
                    type: 'Новый жираф',
                    status: NOT_CONFIRMED
                }, ...state.updatesHistory],
            };
        }
        default:
            return state;
    }
};

export default reducer;
