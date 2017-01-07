import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';
import { loadAction } from './actions/index.js';
import routes from './routes.js';
import store from './store.js';

axios.get('http://120.27.120.127:3000/getData').then((res) => {
	store.dispatch(loadAction(res.data));
	render(
		<Provider store={store} key="index">
			<Router history={browserHistory} routes={routes}>
			</Router>
		</Provider>, document.getElementById('app')
	);
});

// if(module.hot) {
// 	module.hot.accept();
// }
