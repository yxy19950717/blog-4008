import React, { Component } from 'react';
import { Link } from 'react-router';
import { showMoveAreaAction } from '../../actions/index.js';
import './index.less';

export default class AboutMe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: this.props.location.slice(0, 7)
		};
	}

	render() {
		return(
			<div className="about-me-box">
				<div className="about-me-top"></div>
				<div className="about-me-content">
					<div className="about-me">
						<div className="about-me-pic">
							<img src="//yxy-site.oss-cn-hangzhou.aliyuncs.com/sharlly.png" />
						</div>
						<hgroup>
							<span>Sharlly</span>
						</hgroup>
						<p className="about-me-message">
							心有余而力不足的减肥Coder
						</p>
						<div className="about-me-menu">
							<nav className="menu-area">
								<ul className="menu-event">
									<li 
										key="home" 
										className={ this.state.location == '/' ? 'menu-be-selected' : ''} 
									>
										<Link to="/" onClick={ this.changeLocation.bind(this, '/') }>主页</Link>
									</li>
									<li 
										key="albums" 
										className={ this.state.location == '/albums' ? 'menu-be-selected' : '' } 
									>
										<Link to="/albums" onClick={ this.changeLocation.bind(this, '/albums') }>相册</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div className="about-me-keys">
							<nav 
								className="key-area" 
								onClick={this.showMoveAreaPC.bind(this)} 
							>
								<span data-key="menu-article">所有文章/</span>
								<span data-key="menu-tag">标签/</span>
								<span data-key="menu-me">关于我</span>
							</nav>
						</div>
						<div className="about-me-shadow-mobile">
							<ul className="about-me-shadow-mobile-list menu-event">
								<li 
									key="home"
									className={ this.state.location == '/' ? 'menu-be-selected' : '' } 
								>
									<Link to="/" onClick={ this.changeLocation.bind(this, '/') }>主页</Link>
								</li>
								<li 
									key="albums" 
									className={ this.state.location == '/albums' ? 'menu-be-selected' : '' } 
								>
									<Link to="/albums" onClick={ this.changeLocation.bind(this, '/albums') }>相册</Link>
								</li>
							</ul>
						</div>
						<div 
							className="about-me-keys-mobile" 
							onClick={this.showMoveAreaM.bind(this)} 
							data-device="mobile"
						>
							<i data-device="mobile"></i>
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
	componentDidMount() {
		$('#app').delegate('.right-area', 'touchmove', function() {
			if (document.body.scrollTop > 280) {
				$('.about-me-shadow-mobile-list').css('display', 'flex');
			} else {
				$('.about-me-shadow-mobile-list').css('display', 'none');
			}
		});
	}
	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.location == nextState.location) {
			return false;
		} else {
			return true;
		}
	}
	changeLocation (location, e) {
		this.setState({
			location 
		});
	}
	showMoveAreaM(e) {
		e.preventDefault();
		// 阻止滑动
		$('body').css({
			'top': -$('body')[0].scrollTop,
			'position': 'fixed',
			'overflow': 'hidden'
		})
		this.props.dispatch(showMoveAreaAction('0px', 'block', 'menu-article', 'm'));
	}
	showMoveAreaPC(e) {
		this.props.dispatch(showMoveAreaAction('300px', 'none', e.target.dataset.key, 'pc'));
	}
}
