import React, { Component } from 'react';
import { Article } from '../index.js';
import { Footer } from '../../components/index.js';
import { loadArticle, loadThisPageAction } from '../../actions/index.js';
import { Link } from 'react-router';
import './index.less';


export default class Home extends Component {
	constructor(props) {
		super(props);
		this.EVENT_LISTEN = true;
		this.NOW_PAGE = 1;
		this.MAX_PAGE = Math.ceil(this.props.articleLen / 5);
	}
	render() {
		let { articles, articleLen, dispatch } = this.props;
		if (articles) {
			return (
				<div className="right-area" id="right-area" ref="loader" onWheel={ this.loadMoreArticles.bind(this) }>
					<div className="right-area-wrap">
						{
							articles.map((article, index) => {
								return (<Article 
									key = { index }
									year = { article.year }
									month = {article.month }
									day = { article.day }
									title = { article.title }
									eTitle = { article.eTitle }
									time = { article.time }
									tags = { article.tags }
									main = { article.main }
									id = { article.id }
								/>);
							})
						}
					</div>
					<Footer />
				</div>
			);
		} else {
			return (
				<div></div>
			);
		}
	}
	loadMoreArticles(event) {
		if (this.EVENT_LISTEN && this.NOW_PAGE) {
			let loader = this.refs['loader'];
			let body = document.body;
			let { dispatch } = this.props;
			if (loader.scrollHeight - body.scrollTop <= window.innerHeight + 200) {
				this.EVENT_LISTEN = false;
				dispatch(loadThisPageAction(++ this.NOW_PAGE));
				this.EVENT_LISTEN = true;
			}
		}
	}
	componentDidMount() {
		document.body.scrollTop = 0;
	}
}