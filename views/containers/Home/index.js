import React, { Component } from 'react';
import { Article } from '../index.js';
import { Footer } from '../../components/index.js';
import { loadArticle, loadThisPageAction, loadTagToArticleAction } from '../../actions/index.js';
import { Link } from 'react-router';
import './index.less';


export default class Home extends Component {
	constructor(props) {
		super(props);
		this.lastTag = '';
		this.EVENT_LISTEN = true;
		this.NOW_PAGE = 1;
		this.MAX_PAGE = Math.ceil(this.props.articleLen / 5);
	}
	render() {
		let { articles, articleLen, dispatch } = this.props;
		if (articles) {
			return (
				<div className="right-area" id="right-area" ref="loader" onWheel={ this.loadMoreArticles.bind(this) } style={{
					left: document.getElementById('move-area') && document.getElementById('move-area').style.left == '300px' ? '600px' : '300px'
				}}>
					<div className="right-area-wrap">
						{
							articles.map((article, index) => {
								return (<Article 
									key = { index }
									year = { article.year }
									month = {article.month }
									day = { article.day }
									title = { article.title }
									tags = { article.tags }
									main = { article.main }
									id = { article.id }
									showTagToArticle = { this.showTagToArticle.bind(this) }
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
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.articles.length == nextProps.articles.length) {
			return false;
		}
		return true;
	}

	showTagToArticle(tag) {
		if (!this.lastTag || ( this.lastTag && this.lastTag != tag)) {
			this.lastTag = tag;
			this.props.dispatch(loadTagToArticleAction(tag));

			// 左侧滚动逻辑
			let box = document.getElementById('move-area');
			let rightBox = document.getElementById('right-area');
			box.style.left = '300px';
			if (rightBox) {
				rightBox.style.left = '600px';
			}
			let back = document.getElementById('menu-back');
			let focus = document.getElementById('menu-tag');
			let text = focus.getElementsByTagName('span')[0];
			let parent = focus.parentNode;
			let sbiling = parent.getElementsByTagName('p');
			back.style.width = '60px';
			// sbiling 类型数组，不能用forEach
			for (let i = 0; i < sbiling.length; i++) {
				if (focus !== sbiling[i]) {
					sbiling[i].style.width = '40px';
					sbiling[i].style.opacity = '1';
					sbiling[i].getElementsByTagName('span')[0].style.opacity = '0';
				}
			}
			focus.style.width  = '60px';
			focus.style.opacity = '0.85';
			text.style.opacity = '1';
			// 区域
			let showContent = document.getElementById('menu-tag-content');
			let showContentParent = showContent.parentNode;
			let showContentSibiling = showContentParent.childNodes;
			for (let j = 0; j < showContentSibiling.length; j++) {
				if (showContent !== showContentSibiling[j]) {
					showContentSibiling[j].style.opacity = '0';
					showContentSibiling[j].style.zIndex = '-200';
				}
			}
			showContent.style.zIndex = '0';
			showContent.style.opacity = '1';
		}	
	}
}