import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { LeftArea, Home, ArticleSelected, Album } from './containers/index.js';
import { connect } from 'react-redux';

const HomeApp = connect(
	(state) => {
		return {
			articles: state.articleReducer.articles,
			articleLen: state.articleReducer.allArticles.length,
		};
	}
)(Home);

const LeftAreaApp = connect(
	(state) => {
		return {
			articles: state.articleReducer.allArticles,
			tags: state.articleReducer.tags,
			tagToArticleArr: state.articleReducer.tagToArticleArr,
			musicData: state.articleReducer.musicData,
			moveAreaLeft: state.aboutReducer.moveAreaLeft,
			menuBackDisplay: state.aboutReducer.menuBackDisplay,
			focusKey: state.aboutReducer.focusKey,
			device: state.aboutReducer.device
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

const AlbumApp = connect(
	(state) => {
		return {
			albumData: state.articleReducer.albumData,
			boxDisplay: state.photoReducer.boxDisplay,
			device: state.photoReducer.device,
			url: state.photoReducer.url,
			index: state.photoReducer.index,
			count: state.photoReducer.count,
			desc: state.photoReducer.desc
		};
	}
)(Album);

/*
	相册 2-14 注销
*/
// const MemoryApp = connect(
// 	(state) => {
// 		return {
// 			memoryData: state.articleReducer.memoryData,
// 			boxDisplay: state.memoryReducer.boxDisplay,
// 			device: state.memoryReducer.device,
// 			url: state.memoryReducer.url,
// 			index: state.memoryReducer.index,
// 			count: state.memoryReducer.count,
// 			desc: state.memoryReducer.desc,
// 			name: state.memoryReducer.name
// 		};
// 	}
// )(Memory);


const routes = (
	<Route path="/" component={ LeftAreaApp }>
		<IndexRoute component={ HomeApp } />
		<Route path="/albums" component={ AlbumApp } />
		<Route path="/articles/:id" component={ ArticleSelectedApp }></Route>
	</Route>
);

export default routes;