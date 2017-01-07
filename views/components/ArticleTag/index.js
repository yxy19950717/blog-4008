import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.less';

export default class ArticleTag extends Component {
	render() {
		let tagList = this.props.tags.map((tag, index) => {
			return (<li className="article-tag-list-item" key={index}>
				<Link className="color3" to="/">{tag}</Link>
			</li>);
		});
		return (			          
			<div className="article-tag tagcloud">
				<ul className="article-tag-list">
					{ tagList }
				</ul>
			</div>			       
		);
	}
}

