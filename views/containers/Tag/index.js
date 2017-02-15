import React, { Component } from 'react';
import { ArticleTag } from '../../components/index.js';
import { A } from '../index.js';
import { loadTagToArticleAction } from '../../actions/index.js';
import './index.less';

export default class Tag extends Component {
	constructor(props) {
		super(props);
		this.lastTag = '';
	}

	render() {
		if (this.props.tagToArticleArr) {
			let len = this.props.tagToArticleArr.length;
			let articleList = this.props.tagToArticleArr.map((article, index) => {
				return (<A
					key = { index }
					marginBottom = { index + 1 == len ? '250px' : '0px' }
					article = { article }
					isLast = { index + 1 == len ? true : false }
					dispatch = { this.props.dispatch } 
				/>);
			});
			return (
				<div className="menu-tag-content" id="menu-tag-content" style={{
					opacity: this.props.opacity,
					zIndex: this.props.zIndex
				}}>
					<ArticleTag 
						tags = {this.props.tags}
						showTagToArticle = {this.showTagToArticle.bind(this)}
						device = {this.props.device}
					/>
					<div className="menu-article-content" id="menu-article-content" style={{
						marginTop: '150px'
					}}>
						{ articleList }
					</div>
				</div>
			);
		} else {
			return (
				<div className="menu-tag-content" id="menu-tag-content" style={{
					opacity: this.props.opacity,
					zIndex: this.props.zIndex
				}}>
					<ArticleTag 
						device = {this.props.device}
						tags = {this.props.tags}
						showTagToArticle = {this.showTagToArticle.bind(this)}
					/>
				</div>
			);
		}
		
	}

	showTagToArticle(tag) {
		if (!this.lastTag || ( this.lastTag && this.lastTag != tag)) {
			this.lastTag = tag;
			this.props.dispatch(loadTagToArticleAction(tag));
		}	
	}
}