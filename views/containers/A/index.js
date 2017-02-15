import React, { Component } from 'react';
import { ArticleTime, ArticleTitle } from '../../components/index.js';
import { Link } from 'react-router';
import { showMoveAreaAction } from '../../actions/index.js';
import './index.less';

export default class A extends Component {
	render() {
		let { isLast, article, marginBottom } = this.props;
		let { title, year, month, day, id } = article;
		return (
			<Link to={`/articles/${id}`} className={ marginBottom == '250px' ? 'list-single-content list-single-content-mobile' : 'list-single-content'} style={{
				marginBottom: marginBottom
			}}  onClick={this.BackMenu.bind(this)}>
				<ArticleTime 
					year = { year }
					month = { month }
					day = { day }  
				/>
				<ArticleTitle 
					title = { title } 
				/>
			</Link>
		);
	}

	BackMenu(e) {
		let isMobile = document.body.clientWidth > 750 ? false : true;
		if (!isMobile) {	
			this.props.dispatch(showMoveAreaAction('-120px', 'none', 'none', 'pc'));
		} else {
			// 取消阻止滑动
			let body = $('body');
			body.css('position', 'relative');
			body[0].scrollTop = -body.offset().top;
			body.css({
				'top': 'auto',
				'overflow': 'auto'
			});
			this.props.dispatch(showMoveAreaAction('-100%', 'none', 'none', 'm'));
		}
	}
}
