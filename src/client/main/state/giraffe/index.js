import {fetchGiraffesInAviary, updateGiraffe, createGiraffe, deleteGiraffe} from './operations';
import {
    addAviaryAC,
    hideCapacityAC,
    editGiraffeAC,
    addGiraffeAC,
    closeAddingCardAC,
    closeEditingCardAC
} from './actions';
import {default as giraffes} from './reducer'

export {
    fetchGiraffesInAviary,
    hideCapacityAC,
    updateGiraffe,
    deleteGiraffe,
    createGiraffe,
    editGiraffeAC,
    addGiraffeAC,
    addAviaryAC,
    closeAddingCardAC,
    closeEditingCardAC
};

export default giraffes;
