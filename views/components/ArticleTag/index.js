import React, { Component } from 'react';
import './index.less';

export default class ArticleTag extends Component {
	render() {
		let tagList = this.props.tags.map((tag, index) => {
			let colorStyle = `color${tag.length % 5}`;
			return (<li className="article-tag-list-item" key={index}>
				<span className={colorStyle} onClick={this.showTagToArticle.bind(this, tag)}>{tag}</span>
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

	showTagToArticle(tag) {
		this.props.showTagToArticle(tag);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
}

