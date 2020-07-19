import React, { Suspense, useState } from 'react';
import { render } from 'react-dom';
import App from './components';
import './style.css'

render(

        <App/>
    
    , document.querySelector('#react-root'));
