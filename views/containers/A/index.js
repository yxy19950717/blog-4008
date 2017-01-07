import React, { Component } from 'react';
import { ArticleTime, ArticleTitle } from '../../components/index.js';
import './index.less';

export default class A extends Component {
	render() {
		let { isLast, article } = this.props;
		let { title, year, month, day, id } = article;
		return (
			<div className="list-single-content" style={{
				marginBottom: this.props.isLast ? '80px' : '0px'
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
