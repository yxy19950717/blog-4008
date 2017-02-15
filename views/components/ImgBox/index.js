import React, { Component } from 'react';
import { closePhotoAction, showThisPhotoAction } from '../../actions/index.js';
import './index.less';

export default class ImgBox extends Component {
	constructor(props) {
		super(props);
		this.listen = true;
		this.moveY = 0;
		this.moveX = 'auto';
		this.moveStartX = 0;
	} 

	render() {
		let { boxDisplay, device, url, index, count, desc } = this.props;
		return(
			<div className="show-photo" id="show-photo" ref="show-photo" style={{
				opacity: boxDisplay == 'block' ? 1 : 0,
				zIndex: boxDisplay == 'block' ? 1000 : -1000
			}}>
				<div className="show-photo-head">
					<p className="show-photo-count" id="show-photo-count">{`${index} / ${count}`}</p>
					<button className="show-photo-btn show-photo-close" onClick={this.closeBox.bind(this)}></button>
					<button id="show-photo-zoom" className="show-photo-btn show-photo-zoom" onClick={this.zoomBox.bind(this)}></button>
				</div>
				<button className="show-photo-turn-left" onClick={this.turnLeft.bind(this)}></button>
				<button className="show-photo-turn-right" onClick={this.turnRight.bind(this)}></button>
				<div className="realImg" id="realImg" style={{
				}}>
					<img 
						id="imgContent" 
						src={url} 
						onMouseDown={this.movePictrue.bind(this)} 
						onMouseMove={this.movePictrue.bind(this)} 
						onMouseUp={this.movePictrue.bind(this)} 
					/>
				</div>
				<div className="show-photo-desc" id="show-photo-desc">
					<span id="show-photo-desc">{desc}</span>
				</div>
			</div>
		);	
	}

	componentDidMount() {
		$(window).on('resize', function(e) {
			if (this.props.boxDisplay == 'block') {
				let preHeight = window.innerHeight - $('#show-photo-desc').height() - 44;
				let preWidth = window.innerWidth;
				let imgWidth = preWidth > preHeight ? preHeight : preWidth;
				this.listen = true;
				$('#show-photo-zoom').css({
					'background': 'url("//www.yinxiangyu.com/icon-btn.png") -88px 0 no-repeat'
				});
				$('#realImg').css({
					'width': imgWidth,
					'height': imgWidth,
					'top': '44px',
					'transform': 'scale(1, 1)'
				}).attr('data-width', imgWidth);
				$('#imgContent').attr('data-width', imgWidth);
			}
		}.bind(this));
		// 拖拽
		$(window).on('mouseup', function(e) {
			if (this.moveY) {
				this.moveY = 0;
				this.moveX = 'auto';
				$('#realImg').css({
					'top': 44,
					'left': 'auto',
					'transition': 'all 0.3s ease-out'
				});
			}
		}.bind(this));
	}

	componentDidUpdate() {
		let preHeight = window.innerHeight - $('#show-photo-desc').height() - 44;
		let preWidth = window.innerWidth;
		let imgWidth = preWidth > preHeight ? preHeight : preWidth
		$('#show-photo-zoom').css({
			'background': 'url("//www.yinxiangyu.com/icon-btn.png") -88px 0 no-repeat'
		});
		$('#realImg').css({
			'width': imgWidth,
			'height': imgWidth,
			'top': '44px'
		}).attr('data-width', imgWidth);
		$('#imgContent').attr('data-width', imgWidth);
	}

	// 切换过渡
	changeConfig() {
		$('#realImg').css({
			'transform': 'scale(1, 1)'
		});
		this.listen = true;
	}

	closeBox(e) {
		e.preventDefault();
		// 取消阻止滑动
		$('#realImg').css({
			'transform': 'scale(1, 1)'
		});
		this.listen = true;
		if (window.innerWidth <= 750) {
			let body = $('body');
			body.css('position', 'relative');
			body[0].scrollTop = -body.offset().top;
			body.css({
				'top': 'auto',
				'overflow': 'auto'
			});
		}
 		this.props.dispatch(closePhotoAction('all', 'none'));
	}

	turnLeft(e) {
		e.preventDefault();
		this.changeConfig();
		let index = this.props.index == 1 ? this.props.count : this.props.index - 1;
		this.props.dispatch(showThisPhotoAction('all', 'block', index));
	}

	turnRight(e) {
		e.preventDefault();
		this.changeConfig();
		let index = this.props.index == this.props.count ? 1 : this.props.index + 1;	
		this.props.dispatch(showThisPhotoAction('all', 'block', index));
	}

	zoomBox(e) {
		e.preventDefault();
		if (this.listen) {
			$('#show-photo-zoom').css({
				'background': 'url("//www.yinxiangyu.com/icon-btn.png") -132px 0 no-repeat'
			});
			$('#realImg').css({
				'transform': 'scale(1.5, 1.5)'
			});
			this.listen = false;
		} else {
			$('#show-photo-zoom').css({
				'background': 'url("//www.yinxiangyu.com/icon-btn.png") -88px 0 no-repeat'
			});
			$('#realImg').css({
				'transform': 'scale(1, 1)'
			});
			this.listen = true;
		}
	}

	movePictrue(e) {
		e.preventDefault();
		switch(e.type) {
			case 'mousedown':
				$('#realImg').css('transition', 'all 0s');
				this.moveY = e.clientY;
				this.moveX = e.clientX;
				if (this.listen) {
					this.moveStartX = $(e.currentTarget).offset().left;
				} else {
					this.moveStartX = $(e.currentTarget).offset().left + $(e.currentTarget).attr('data-width') / 4;
				}
				break;
			case 'mousemove':
				if (this.moveY) {
					$('#realImg').css({
						'top': e.clientY - this.moveY + 44,
						'left': e.clientX - this.moveX + this.moveStartX
					});
				}
				break;
			case 'mouseup':
				if (this.moveY) {
					this.moveY = 0;
					this.moveX = 'auto';
					$('#realImg').css({
						'top': 44,
						'left': 'auto',
						'transition': 'all 0.3s ease-out'
					});
				}
				break;
		}
	}
}
