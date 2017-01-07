import React, { Component } from 'react';
import { Link } from 'react-router';
import { loadThisPageAction } from '../../actions/index.js';
import './index.less';

export default class PageNumber extends Component {
	render() {
		return (
			<span>
				{ this.PageNumberList() }
			</span>
		);
	}
	PageNumberList() {
		let list = [];
		console.log(this.props.articleLen);
		let pages = Math.ceil(this.props.articleLen / 5); 
		for (let i = 1; i <= pages; i++) {
			list.push(
				<Link className="page-number" to={`/page/${i}`} onClick={this.changePage.bind(this, i)}>{i}</Link>
			);
		}
		return list;
	}
	changePage(nowPage) {
		this.props.dispatch(loadThisPageAction(nowPage));
	}
}
