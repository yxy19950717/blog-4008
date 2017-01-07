import React, { Component } from 'react';
import { MeText } from '../../components/index.js';
import { Tag, AList } from '../index.js';
import './index.less';

export default class MoveArea extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { articles, focusKey } = this.props;
		return (
			<div className="move-area" id="move-area">
				<div className="move-area-content">
					<AList articles = { articles } />
					<Tag />
					<MeText />
				</div>
				<div className="move-area-menu">
					<p className="menu-article" id="menu-article" onClick={ this.changeFocus.bind(this, 'menu-article') }>
						<span>全部</span>
						<i></i>
					</p>
					<p className="menu-tag" id="menu-tag" onClick={ this.changeFocus.bind(this, 'menu-tag') }>
						<span>标签</span>
						<i></i>
					</p>
					<p className="menu-me" id="menu-me" onClick={ this.changeFocus.bind(this, 'menu-me') }>
						<span>我</span>
						<i></i>
					</p>
				</div>
				<p className="menu-back" id="menu-back" onClick={ this.menuBack.bind(this) }>
					<span>收起</span>
					<i></i>
				</p>
			</div>
		);
	}
	shouldComponentUpdate(nextPorps, nextState) {
		if (this.props.focusKey == nextPorps.focusKey) {
			return false;
		} else {
			return true;
		}
	}
	componentDidUpdate() {
		let { focusKey } = this.props;
		if (focusKey) {
			let back = document.getElementById('menu-back');
			let focus = document.getElementById(focusKey);
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
			let showContent = document.getElementById(focusKey + '-content');
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
	changeFocus(key) {
		this.props.setKey(key);
	}
	menuBack() {
		let box = document.getElementById('move-area');
		let rightBox = document.getElementById('right-area');
		box.style.left = '-60px';
		if (rightBox) {
			rightBox.style.left = '300px';
		}
	}
}