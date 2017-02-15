import React, {
	Component
} from 'react';

import {
	Link
} from 'react-router';
import { showMoveAreaAction } from '../../actions/index.js';
import './index.less';

export default class ArticleTitle extends Component {
	render() {
		if (!this.props.id) {
			return (
				<h1>
					<span className="article-title">{this.props.title}</span>
				</h1>
			);
		} else {
			let url = `/articles/${this.props.id}`;
			return (			          
				<h1>
					<Link className="article-title" to={url} onClick={this.BackMenu.bind(this)}>{this.props.title}</Link>
				</h1>		       
			);
		}
	}

	BackMenu(e) {
		let isMobile = document.body.clientWidth > 750 ? false : true;
		if (!isMobile) {	
			this.props.dispatch(showMoveAreaAction('-120px', 'none', 'none', 'pc'));
		}
	}
}

