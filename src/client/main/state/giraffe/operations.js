import {
    createGiraffeAC,
    setGiraffesInAviaryAC, updateGiraffeAC
} from "./actions";
import axios from "axios";

const fetchGiraffesInAviary = aviaryNum => {
    return dispatch => {
        axios
            .get(`http://localhost:8080/api/giraffe?aviary=${aviaryNum}`)
            .then(response => {
                const giraffes = response.data;
                dispatch(setGiraffesInAviaryAC({giraffes, number: aviaryNum}));
            })
    }
};

const updateGiraffe = (giraffe) => {
    return dispatch => {
        axios
            .put(`http://localhost:8080/api/giraffe/${giraffe.id}`, giraffe)
            .then(response => {
                const giraffe = response.data;
                dispatch(updateGiraffeAC(giraffe));
            })
    }
};

const createGiraffe = (giraffe) => {
    return dispatch => {
        axios
            .post('http://localhost:8080/api/giraffe', giraffe)
            .then(response => {
                const giraffe = response.data;
                dispatch(createGiraffeAC(giraffe));
            })
    }
};

export {fetchGiraffesInAviary, updateGiraffe, createGiraffe}
