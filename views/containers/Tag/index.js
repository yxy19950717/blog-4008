import React, { Component } from 'react';
import { ArticleTag } from '../../components/index.js';
import './index.less';

export default class Tag extends Component {
	render() {
		return (
			<div className="menu-tag-content" id="menu-tag-content">
				<ArticleTag tags={ [1,2] }/>
			</div>
		);
	}
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
}