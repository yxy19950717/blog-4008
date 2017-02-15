import React, { Component } from 'react';
import { AboutMe } from '../../components/index.js';
import { MoveArea, BottomMusic } from '../index.js';
import { loadArticle } from '../../actions/index.js';
import './index.less';

export default class LeftArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focusKey: ''
		};
	}
	render() {
		let { 
			articles, 
			tags, 
			dispatch,
			tagToArticleArr,
			musicData, 
			moveAreaLeft, 
			menuBackDisplay, 
			focusKey,
			device 
		} = this.props;
		if (!articles) {
			return (
				<div className="container">
				</div>
			);
		} else {
			return(
				<div className="container">
					<AboutMe 
						location={ this.props.location.pathname }
						dispatch={ dispatch }
					/>
					<MoveArea 
						focusKey={ focusKey } 
						articles={ articles }
						tags={ tags }
						dispatch={ dispatch }
						tagToArticleArr={ tagToArticleArr }
						moveAreaLeft = { moveAreaLeft }
						menuBackDisplay = { menuBackDisplay }
						device = { device }
					/>
					{this.props.children}
					<BottomMusic music={musicData}/>
				</div>
			);
		}
	}
}