import React, { Component } from 'react';
import { ArticleTime, ArticleTitle } from '../../components/index.js';
import './index.less';

export default class A extends Component {
	render() {
		let { isLast, article, marginBottom } = this.props;
		let { title, year, month, day, id } = article;
		return (
			<div className="list-single-content" style={{
				marginBottom: marginBottom
			}}>
				<ArticleTime 
					year = { year }
					month = { month }
					day = { day }  
				/>
				<ArticleTitle 
					title = { title } 
					id = { id }
				/>
			</div>
		);
	}
}
