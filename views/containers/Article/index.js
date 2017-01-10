import React, { Component } from 'react';
import { Link } from 'react-router';
import { ArticleTitle, ArticleTag, ArticleTime, ArticleText } from '../../components/index.js';
import './index.less';

export default class Article extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { year, month, day, title, tags, main, id, showTagToArticle} = this.props;
		return (
			<article className="article" ref="article">
				<div className="article-inner">
					<header className="article-header">
						<ArticleTitle 
							title = { title } 
							id = { id }
						/>
					</header>    
					<ArticleText 
						main = { main } 
						isShow = { true }
						id = { id }
					/>
					<div className="article-info article-info-index">
						<ArticleTime 
							year = { year }
							month = { month }
							day = { day } 
						/>
						<ArticleTag 
							tags = { tags }
							showTagToArticle = {showTagToArticle.bind(this)}
						/>
						<div className="clearfix"></div>
					</div>
				</div>
			</article>
		);
	}
	componentDidMount() {
		setTimeout(function() {
			this.refs['article'].style.opacity = '1';
		}.bind(this), 300);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.id == nextProps.id ? false : true;
	}

}