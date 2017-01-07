import React, { Component } from 'react';
import { Link } from 'react-router';
import { ArticleTitle, ArticleTag, ArticleTime, ArticleText, Footer} from '../../components/index.js';

export default class ArticleSelected extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { articles, articleLen, params } = this.props;
		let articleSelected = articles[articleLen - parseInt(params.id)];
		return (
			<div className="right-area" id="right-area" ref="loader">
				<div className="right-area-wrap">
					<article className="article" ref="article">
						<div className="article-inner">
							<header className="article-header">
								<ArticleTitle  
									title = { articleSelected.title } 
									id = { articleSelected.id }
								/>
							</header>    
							<ArticleText 
								main = { articleSelected.content } 
								id = { articleSelected.id }
							/>
							<div className="article-info article-info-index">
								<ArticleTime
									year = { articleSelected.year }
									month = { articleSelected.month }
									day = { articleSelected.day }
								/>
								<ArticleTag 
									tags = { articleSelected.tags }
								/>
								<div className="clearfix"></div>
							</div>
						</div>
					</article>
				</div>
				<Footer />
			</div>
		);
	}
	componentDidMount() {
		document.body.scrollTop = 0;
		setTimeout(function() {
			this.refs['article'].style.opacity = '1';
		}.bind(this), 300);
	}
	shouldComponentUpdate(nextPorps, nextState) {
		return this.props.params.id == nextPorps.params.id ? false : true;
	}
	componentWillUpdate() {
		document.body.scrollTop = 0;
	}
}