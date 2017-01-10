import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { LeftArea, Home, YearList, ArticleSelected } from './containers/index.js';
import { connect } from 'react-redux';

const HomeApp = connect(
	(state) => {
		return {
			articles: state.articleReducer.articles,
			articleLen: state.articleReducer.allArticles.length
		};
	}
)(Home);

const LeftAreaApp = connect(
	(state) => {
		return {
			articles: state.articleReducer.allArticles,
			tags: state.articleReducer.tags,
			tagToArticleArr: state.articleReducer.tagToArticleArr
		};
	}
)(LeftArea);

const ArticleSelectedApp = connect(
	(state) => {
		return {
			articles: state.articleReducer.allArticles,
			articleLen: state.articleReducer.allArticles.length
		};
	}
)(ArticleSelected);

const routes = (
	<Route path="/" component={ LeftAreaApp }>
		<IndexRoute component={ HomeApp } />
		// <Route path="tag" component={ YearList } />
		<Route path="/articles/:id" component={ ArticleSelectedApp }></Route>
	</Route>
);

export default routes;