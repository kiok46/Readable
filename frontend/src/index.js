import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import App from './App';


ReactDOM.render(
    <Provider store={store}>
	    <MuiThemeProvider>
            <App/>
	    </MuiThemeProvider>
    </Provider>,
	document.getElementById('root')
);

registerServiceWorker();
