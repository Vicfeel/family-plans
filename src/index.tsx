import React from 'react';
import ReactDOM from 'react-dom';

import {configure} from 'mobx';

import * as serviceWorker from './serviceWorker';
import {ContextProvider} from './common';
import App from './App';

import './index.css';

// Mobx config, forbidden modifing store without action
configure({enforceActions: 'never'});

ReactDOM.render(<ContextProvider><App /></ContextProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
