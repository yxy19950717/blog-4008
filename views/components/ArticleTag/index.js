import React, { Component } from 'react';
import './index.less';

export default class ArticleTag extends Component {
	render() {
		let tagList = this.props.tags.map((tag, index) => {
			let colorStyle = `color${tag.length % 5}`;
			if (this.props.device == 'm' || this.props.device == 'pc') {
				return (<li className="article-tag-list-item" key={index}>
					<span 
						className={colorStyle} 
						onClick={this.showTagToArticle.bind(this, tag)}
					>{tag}</span>
				</li>);
			} else if (!this.props.device) {
				return (<li className="article-tag-list-item" key={index}>
					<span 
						className={colorStyle} 
					>{tag}</span>
				</li>);
			}	
		});
		return (			          
			<div className="article-tag tagcloud">
				<ul className="article-tag-list">
					{ tagList }
				</ul>
			</div>			       
		);
	}

	showTagToArticle(tag, e) {
		e.preventDefault();
		this.props.showTagToArticle(tag);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.device == 'none') {
			return true;
		} else {
			return false;
		}
	}
}

