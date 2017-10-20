import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import Category from './components/Categories';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

ReactDOM.render(
    <Provider store={store}>
	<MuiThemeProvider>
	  <div>
	    <Category/>
	  </div>
	</MuiThemeProvider>
    </Provider>,

	document.getElementById('root')
);

registerServiceWorker();
