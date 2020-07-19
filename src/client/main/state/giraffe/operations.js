import {
    getGiraffesInAviaryAC
} from "./actions";
import axios from "axios";

const fetchGiraffesInAviary = aviaryNum => {

    return dispatch => {
        axios
            .get(`http://localhost:8080/api/giraffe?aviaryNum=${aviaryNum}`)
            .then(response => {
                const data = response.data;

                console.log(data);
            })
    }
};

export {fetchGiraffesInAviary}
