import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";

import App from './components';
import './style.css'
import {configureStore} from "./state/store";

const store = configureStore();

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.querySelector('#react-root'));
