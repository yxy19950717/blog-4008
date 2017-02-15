import React, { Component } from 'react';
import { A } from '../index.js';
import './index.less';

export default class AList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { articles, opacity, zIndex, dispatch } = this.props;
		let len = articles.length;
		let articleList = articles.map((article, index) => {
			return (<A
				key = { index }
				marginBottom = { index + 1 == len ? '130px' : '0px' }
				article = { article }
				isLast = { index + 1 == len ? true : false }
				dispatch = { dispatch }
			/>);
		});
		return (
			<div 
				className="menu-article-content" 
				id="menu-article-content"
				style={{
					opacity,
					zIndex
				}} 
			>
				{ articleList }
			</div>
		);
	}
}
