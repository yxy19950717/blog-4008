import React, { Component } from 'react';
import { Link } from 'react-router';
import { ArticleTitle, ArticleTag, ArticleTime, ArticleText, Footer} from '../../components/index.js';
import './index.less';


export default class ArticleSelected extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { articles, articleLen, params } = this.props;
		let articleSelected = articles[articleLen - parseInt(params.id)];
		return (
			<div className="right-area" id="right-area" ref="loader">
				<div className="right-area-wrap" id="right-area-wrap">
					<article className="article" ref="article">
						<div className="article-inner">
							<header className="article-header">
								<ArticleTitle  
									title = { articleSelected.title } 
								/>
								<ArticleTime
									mobileClass = { true }
									year = { articleSelected.year }
									month = { articleSelected.month }
									day = { articleSelected.day }
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
		let { articles, articleLen, params } = this.props;
		let articleSelected = articles[articleLen - parseInt(params.id)];

		document.getElementById('right-area').style.left = document.getElementById('move-area') && document.getElementById('move-area').style.left == '300px' ? '600px' : '300px';
		document.body.scrollTop = 0;
		setTimeout(function() {
			this.refs['article'].style.opacity = '1';
		}.bind(this), 300);

		// 二次加载
		if (document.getElementById('scriptAdd')) {
			// 再加载
			var raw = document.getElementById('right-area-wrap');
			var duoshuoDiv2 = document.createElement('div');
			duoshuoDiv2.setAttribute('class', 'ds-thread');
			duoshuoDiv2.setAttribute('id', 'ds-thread');
			duoshuoDiv2.setAttribute('data-thread-key', articleSelected.id);
			duoshuoDiv2.setAttribute('data-title', articleSelected.title);
			duoshuoDiv2.setAttribute('data-url', '//www.yinxiangyu.com/articles/' + articleSelected.id);
			DUOSHUO.EmbedThread(duoshuoDiv2);
			raw.appendChild(duoshuoDiv2);
		} else {
			var scriptAdd = document.createElement('script');
			scriptAdd.setAttribute('type', 'text/javascript');
			scriptAdd.setAttribute('src', '//www.yinxiangyu.com/duoshuo.js');
			scriptAdd.setAttribute('id', 'scriptAdd');
			document.body.appendChild(scriptAdd);

			var raw = document.getElementById('right-area-wrap');
			var duoshuoDiv = document.createElement('div');
			duoshuoDiv.setAttribute('class', 'ds-thread');
			duoshuoDiv.setAttribute('id', 'ds-thread');
			duoshuoDiv.setAttribute('data-thread-key', articleSelected.id);
			duoshuoDiv.setAttribute('data-title', articleSelected.title);
			duoshuoDiv.setAttribute('data-url', '//www.yinxiangyu.com/articles/' + articleSelected.id);
			raw.appendChild(duoshuoDiv);

			(function() {
				var ds = document.createElement('script');
				ds.type = 'text/javascript';ds.async = true;
				ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
				ds.charset = 'UTF-8';
				(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
			})();
		}
	}
	componentDidUpdate() {
		let { articles, articleLen, params } = this.props;
		let articleSelected = articles[articleLen - parseInt(params.id)];

		var dsThread = document.getElementById('ds-thread');
		dsThread.parentNode.removeChild(dsThread);

		var raw = document.getElementById('right-area-wrap');
		var duoshuoDiv = document.createElement('div');
		duoshuoDiv.setAttribute('class', 'ds-thread');
		duoshuoDiv.setAttribute('id', 'ds-thread');
		duoshuoDiv.setAttribute('data-thread-key', articleSelected.id);
		duoshuoDiv.setAttribute('data-title', articleSelected.title);
		duoshuoDiv.setAttribute('data-url', '//www.yinxiangyu.com/articles/' + articleSelected.id);
		DUOSHUO.EmbedThread(duoshuoDiv);
		raw.appendChild(duoshuoDiv);
	}
	shouldComponentUpdate(nextPorps, nextState) {
		return this.props.params.id == nextPorps.params.id ? false : true;
	}
	componentWillUpdate() {
		document.body.scrollTop = 0;
	}
}