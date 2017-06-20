import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';
import { Provider } from 'react-redux';
import Store from '../redux/store';

const store = Store();

ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('src')
);