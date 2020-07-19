import React, { Suspense, useState } from 'react';
import { render } from 'react-dom';
import App from './components';
import './style.css'
import {configureStore} from "./state/store";
import {Provider} from "react-redux";

const store = configureStore();

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.querySelector('#react-root'));
