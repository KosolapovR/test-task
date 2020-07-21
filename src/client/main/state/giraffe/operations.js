import {
    createGiraffeAC, deleteGiraffeAC,
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

const deleteGiraffe = (id) => {
    return dispatch => {
        axios
            .delete(`http://localhost:8080/api/giraffe/${id}`)
            .then(response => {
                if (response.status === 200)
                    dispatch(deleteGiraffeAC(id));
            })
    }
};

export {fetchGiraffesInAviary, updateGiraffe, createGiraffe, deleteGiraffe}
