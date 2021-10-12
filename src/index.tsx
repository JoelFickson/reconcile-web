import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import {Provider} from "react-redux";
import store from "./core/store/store";
import {BrowserRouter} from 'react-router-dom'
import App from "./pages/App";


ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>

        </React.StrictMode>
    </Provider>,

    document.getElementById('root')
);

