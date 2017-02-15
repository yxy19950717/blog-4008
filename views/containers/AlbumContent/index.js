import React, { Component } from 'react';
import { Footer } from '../../components/index.js';
import { showPhotoAction } from '../../actions/index.js';
import { Link } from 'react-router';
import './index.less';

export default class AlbumContent extends Component {
	constructor(props) {
		super(props);
		this.imgs = [];
		this.descs = [];
	}
	render() {
		let n = 0;
		let Albums = this.props.albums.map((album, index) => {
			let year = '';
			let month = '';
			let keyArr = album.name.split('-');
			year = keyArr[0];
			month = keyArr[1];
			return(
				<div className="album-month-box" key={index}>
					<h3 className="album-month">
						<span>{year}</span>
						<span className="month-text">{month}月</span>
					</h3>
					<ul className="album-photo-box">
						{
							album.photos.map((pic, index2) => {
								n++;
								return (
									<li 
										className="album-photo-item" 	 
										key={'li' + index2} 
										onClick={ this.selectPhoto.bind(this, pic, album.description[index2], n)}		
									>
										<img 
											className="lazy"
											alt={album.description[index2]}
											src="//www.yinxiangyu.com/loading.gif"
											data-original={`//yxy-site.oss-cn-hangzhou.aliyuncs.com${pic}?x-oss-process=image/resize,m_fixed,h_500,w_500`}
										/>
									</li>
								);
							})
						}
					</ul>
				</div>
			);
		});
		return (
			<div className="right-area" id="right-area">
				<div className="right-area-wrap" style={{
					height: '100%'
				}}>
					<div className="album" ref="album">
						<div className="album-inner">
							<header className="album-header">
								<h1 className="album-title">相册</h1>
							</header>
							<div className="album-entry">
								{ Albums }
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
	componentDidMount() {
		document.body.scrollTop = 0;
		setTimeout(function() {
			this.refs['album'].style.opacity = '1';
		}.bind(this), 300);
		$('img.lazy').lazyload({  
		    effect : 'fadeIn'  
		});
		// 只计算一次

		this.props.albums.forEach((album, index) => {
			album.photos.forEach((item, index2) => {
				this.imgs.push('//yxy-site.oss-cn-hangzhou.aliyuncs.com' + item + '?x-oss-process=image/resize,m_fixed,h_800,w_800');
				this.descs.push(album.description[index2]);
			});
		});
	}
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
	selectPhoto(url, desc, picIndex, e) {
		e.preventDefault();
		// 阻止滑动
		if (window.innerWidth <= 750) {
			$('body').css({
				'top': -$('body')[0].scrollTop,
				'position': 'fixed',
				'overflow': 'hidden'
			})
		}
		url = '//yxy-site.oss-cn-hangzhou.aliyuncs.com' + url + '?x-oss-process=image/resize,m_fixed,h_800,w_800';
		this.props.dispatch(showPhotoAction('both', 'block', url, picIndex, this.imgs.length, desc, this.imgs, this.descs));
	}
}