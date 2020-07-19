import {GET_GIRAFFES_IN_AVIARY} from "./types";

const getGiraffesInAviaryAC = aviaryNum => ({
    type: GET_GIRAFFES_IN_AVIARY,
    aviaryNum
});

export {
    getGiraffesInAviaryAC
}
