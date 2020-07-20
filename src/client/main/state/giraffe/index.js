import {fetchGiraffesInAviary, updateGiraffe, createGiraffe} from './operations';
import {addAviaryAC, hideCapacityAC, editGiraffeAC, addGiraffeAC} from './actions';
import {default as giraffes} from './reducer'

export {fetchGiraffesInAviary, hideCapacityAC, updateGiraffe, createGiraffe, editGiraffeAC, addGiraffeAC, addAviaryAC};

export default giraffes;
