import React, { Component } from 'react';
import { Link } from 'react-router';
import { PageNumber } from '../../components/index.js';
import './index.less';

export default class PageNav extends Component {
	render() {
		const { articleLen, dispatch } = this.props;
		return (
			<nav id="page-nav">
				<Link className="extend prev" to="/">« Prev</Link>
				<PageNumber 
					articleLen = { articleLen }
					dispatch = { dispatch }
				/>
				<Link className="extend next" to="/">Next »</Link>
			</nav>
		);
	}
}
