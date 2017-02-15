import React, { Component } from 'react';
import { AlbumContent } from '../index.js';
import { ImgBox } from '../../components/index.js';
import './index.less';

export default class Album extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { boxDisplay, device, url, index, count, desc, dispatch, albumData } = this.props;
		return (
			<div className="right-area-parent">
				<AlbumContent 
					dispatch = {dispatch}
					albums = {albumData} 
				/>
				<ImgBox 
					boxDisplay = {boxDisplay}
					device = {device}
					url = {url}
					index = {index}
					count = {count}
					desc = {desc}
					dispatch = {dispatch}
				/>
			</div>
		);
	}
}