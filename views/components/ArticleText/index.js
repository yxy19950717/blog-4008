import React, { Component } from 'react';
import './index.less';
import { Link } from 'react-router';
import marked from 'marked';

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});

marked.setOptions({
	highlight: function (code) {
		return require('highlight.js').highlightAuto(code).value;
	}
});

export default class ArticleText extends Component {
	render() {
		let url = `/articles/${this.props.id}`;
		return (			          
			<div className="article-entry">
				<p ref="article-content"></p>
				<p className="article-more-link" style={{
					'display': this.props.isShow ? 'block' : 'none' 
				}}>
					<Link to={url}>more >></Link>
				</p>
			</div>
		);
	}
	componentDidMount() {
		this.refs['article-content'].innerHTML = marked(this.props.main);
	}
	componentDidUpdate() {
		this.refs['article-content'].innerHTML = marked(this.props.main);
	}
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.id == nextProps.id ? false : true;
	}
}
