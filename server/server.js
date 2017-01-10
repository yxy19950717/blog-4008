import path from 'path';
import axios from 'axios';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../views/routes';
import store from '../views/store';
import { loadAction } from '../views/actions/index';
import { getIndexRendered } from './template/index';
const app = express();

// static route
app.use(express.static(path.join(__dirname + '/public'), {
	dotfiles: 'ignore',
	etag: true,
	extensions: ['htm','html','css','png','gif','jpg','js','tpl'],
	maxAge: '3600000',
	redirect: true,
	setHeaders: function (res, path, stat) {
		res.set('x-timestamp', Date.now());
		res.set('Vary', 'Accept-Encoding');
		res.set('Cache-Control', 'public, max-age=3600');
	}
}));

app.get('/', function(req, res) {
	match({ routes: routes, location: req.url }, (err, redirectLocation, renderProps) => {
		axios.get('http://120.27.120.127:3000/getData').then((data) => {
			store.dispatch(loadAction(data.data));
			const html = renderToString(
				<Provider store={store}>
					<RoutingContext {...renderProps} />
				</Provider>
			);
			res.send(getIndexRendered(html, data.data));
		});	
	});
});


app.listen(5000, function() {
	console.log('success');
});