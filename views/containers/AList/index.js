import React, { Component } from 'react';
import { A } from '../index.js';
import './index.less';

export default class AList extends Component {
	render() {
		let { articles } = this.props;
		let len = articles.length;
		let articleList = articles.map((article, index) => {
			return (<A
				key = { index }
				isLast = { index + 1 == len ? true : false }
				article = { article }
			/>);
		});
		return (
			<div className="menu-article-content" id="menu-article-content">
				{ articleList }
			</div>
		);
	}
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
}
