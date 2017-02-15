import React, { Component } from 'react';
import { MeText } from '../../components/index.js';
import { Tag, AList } from '../index.js';
import { showMoveAreaAction } from '../../actions/index.js';
import './index.less';

export default class MoveArea extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { articles, focusKey, tags, dispatch, tagToArticleArr, moveAreaLeft, menuBackDisplay, device } = this.props;
		return (
			<div className="move-area" id="move-area" style={{
				transform: 'translate(' + moveAreaLeft + ')'
			}} 	onMouseEnter = { this.setHidden.bind(this) }
				onMouseLeave = { this.setAuto.bind(this) }
			>
				<div 
					className="move-area-content" 
				>
					<AList 
						articles = { articles } 
						opacity = { focusKey == 'menu-article' ? 1 : 0 }
						zIndex = { focusKey == 'menu-article' ? 0 : -200 }
						dispatch = { dispatch } 
					/>
					<Tag 
						tags = { tags } 
						dispatch = { dispatch } 
						tagToArticleArr = { tagToArticleArr } 
						opacity = { focusKey == 'menu-tag' ? 1 : 0 }
						zIndex = { focusKey == 'menu-tag' ? 0 : -200 }
						device = { device }
					/>
					<MeText 
						opacity = { focusKey == 'menu-me' ? 1 : 0 }
						zIndex = { focusKey == 'menu-me' ? 0 : -200 }
					/>
				</div>
				<div className="move-area-menu">
					<p 
						className={
							focusKey == 'menu-article' ? 'menu-article menu-be-selected' : 'menu-article'
						}
						id="menu-article" 
						onClick={ this.changeFocus.bind(this, 'menu-article') }
						style={{
							width: focusKey == 'menu-article' ? '60px' : '40px'
						}}
					>
						<span style={{
							opacity: focusKey == 'menu-article' ? 1 : 0
						}}>全部</span>
						<i></i>
					</p>
					<p 
						className={
							focusKey == 'menu-tag' ? 'menu-tag menu-be-selected' : 'menu-tag'
						} 
						id="menu-tag" 
						onClick={ this.changeFocus.bind(this, 'menu-tag') }
						style={{
							width: focusKey == 'menu-tag' ? '60px' : '40px'
						}}
					>
						<span style={{
							opacity: focusKey == 'menu-tag' ? 1 : 0
						}}>标签</span>
						<i></i>
					</p>
					<p 
						className={
							focusKey == 'menu-me' ? 'menu-me menu-be-selected' : 'menu-me'
						} 
						id="menu-me" 
						onClick={ this.changeFocus.bind(this, 'menu-me') }
						style={{
							width: focusKey == 'menu-me' ? '60px' : '40px'
						}}
					>
						<span style={{
							opacity: focusKey == 'menu-me' ? 1 : 0
						}}>我</span>
						<i></i>
					</p>
				</div>
				<p 
					className="menu-back" 
					id="menu-back" 
					onClick={ this.menuBackPC.bind(this) }
					style={{
						width: '60px'
					}}
				>
					<span>收起</span>
					<i></i>
				</p>
				<p 
					className="menu-back-mobile" 
					id="menu-back-mobile" 
					data-device="mobile"
					style={{
						display: menuBackDisplay
					}}
					onClick={ this.menuBackM.bind(this) }
				>
				</p>
			</div>
		);
	}

	menuBackPC() {
		this.props.dispatch(showMoveAreaAction('-62px', 'none', 'none', 'pc'));
	}
	menuBackM(e) {
		e.preventDefault();
		// 取消阻止滑动
		let body = $('body');
		body.css('position', 'relative');
		body[0].scrollTop = -body.offset().top;
		body.css({
			'top': 'auto',
			'overflow': 'auto'
		});

		this.props.dispatch(showMoveAreaAction('-100%', 'none', 'none', 'm'));
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.focusKey == nextProps.focusKey && !nextProps.tagToArticleArr) {
			if (this.props.moveAreaLeft != nextProps.moveAreaLeft) {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	}
	changeFocus(key, e) {
		e.preventDefault();
		if (this.props.moveAreaLeft == '0px') {
			this.props.dispatch(showMoveAreaAction('0px', 'block', key, 'm'));
		} else {
			this.props.dispatch(showMoveAreaAction('300px', 'none', key, 'pc'));
		}
	}

	setAuto() {
		// 取消阻止滑动
		$('body').css('overflow', 'auto');
	}

	setHidden() {
		// 阻止滑动
		$('body').css('overflow', 'hidden');
	}
}