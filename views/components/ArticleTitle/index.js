import React, {
	Component
} from 'react';

import {
	Link
} from 'react-router';

import './index.less';

export default class ArticleTitle extends Component {
	render() {
		let url = `/articles/${this.props.id}`;
		return (			          
			<h1>
				<Link className="article-title" to={url} >{this.props.title}</Link>
			</h1>		       
		);
	}
}

