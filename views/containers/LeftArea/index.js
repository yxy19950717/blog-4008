import React, { Component } from 'react';
import { AboutMe } from '../../components/index.js';
import { MoveArea } from '../index.js';
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
		let { articles, tags, dispatch, tagToArticleArr } = this.props;
		if (!articles) {
			return (
				<div className="container">
				</div>
			);
		} else {
			return(
				<div className="container">
					<AboutMe setKey={ this.setKey.bind(this) } />
					<MoveArea 
						setKey={ this.setKey.bind(this) } 
						focusKey={ this.state.focusKey } 
						articles={ articles } 
						tags={ tags }
						dispatch = { dispatch }
						tagToArticleArr = { tagToArticleArr }
					/>
					{ this.props.children }
				</div>
			);
		}
	}
	setKey(key) {
		this.setState({
			focusKey: key
		});
	}
}