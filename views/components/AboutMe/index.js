import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import './index.less';

export default class AboutMe extends Component {
	render() {
		return(
			<div className="about-me-box">
				<div className="about-me-top"></div>
				<div className="about-me-content">
					<div className="about-me">
						<Link to="/" className="about-me-pic">
							<img src={require('./sharlly.png')}/>
						</Link>
						<hgroup>
							<Link to="/">Sharlly</Link>
						</hgroup>
						<p className="about-me-message">
							心有余而力不足的减肥Coder
						</p>
						<div className="about-me-menu">
							<nav className="menu-area">
								<ul>
									<li key="home"><Link to="/">主页</Link></li>
									<li key="albums"><Link to="/tags">相册</Link></li>
								</ul>
							</nav>
						</div>
						<div className="about-me-keys">
							<nav className="key-area" onClick={this.showMoveArea.bind(this)}>
								<span data-key="menu-article">所有文章/</span>
								<span data-key="menu-tag">标签/</span>
								<span data-key="menu-me">关于我</span>
							</nav>
						</div>
						<div className="about-me-connect">
							<nav className="connect-area">
								<span><a href="https://github.com/yxy19950717" target="_blank"><img src={require('./github.png')}/></a></span>
								<span><a href="https://github.com/yxy19950717" target="_blank"><img src={require('./github.png')}/></a></span>
								<span><a href="https://github.com/yxy19950717" target="_blank"><img src={require('./github.png')}/></a></span>
							</nav>
						</div>
					</div>
				</div>
			</div>
		);
	}
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
	showMoveArea(e) {
		this.showTheBox();
		this.showTheFoucs(e);
	}
	showTheBox() {
		let box = document.getElementById('move-area');
		let rightBox = document.getElementById('right-area');
		box.style.left = '300px';
		if (rightBox) {
			rightBox.style.left = '600px';
		}
	}
	showTheFoucs(e) {
		let focus = document.getElementById(`menu-${e.target.dataset.key}`);
		this.props.setKey(e.target.dataset.key);
	}
}
