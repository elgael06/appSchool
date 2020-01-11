
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store';
import App from './App';
import firebase from './manager/firebase.services';
import * as serviceWorker from './serviceWorker';

console.log('AppName =>',firebase);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

//serviceWorker.unregister();

serviceWorker.register();