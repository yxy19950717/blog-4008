import React, { Component } from 'react';
import './index.less';

export default class BottomMusic extends Component {
	constructor(props) {
		super(props);
		let { music } = this.props;
		this.musics = music[0].musics;
		this.times = music[0].times;
		this.singers = music[0].singers;
		this.names = music[0].names;
	}
	render() {
		return (
			<div className="bottom-music">
				<audio className="bm-now-music" src=""></audio>
				<div data-mid="0" className="bm-bg"></div>	
				<div className="bm-wrap">
					<div className="bm-btns">
						<span className="bm-btns-prev" data-action="prev">上一首</span>
						<span id="bm-btns-play-stop" className="bm-btns-play" data-action="pause">播放/暂停</span>
						<span className="bm-btns-next" data-action="next">下一首</span>
					</div>
					<div className="bm-logo">
						<img src="//yxy-site.oss-cn-hangzhou.aliyuncs.com/sharlly.png" />
						<span></span>
					</div>
					<div className="bm-play">
						<div className="bm-words">
							<span className="bm-words-name">
							{this.names[0]}
							</span>
							<span className="bm-words-singer">
							{this.singers[0]}
							</span>
						</div>
						<div className="bm-pbar" data-action="noop">
							<div className="bm-pbar-bg">
								<div className="bm-ready">
								</div>
								<div className="bm-listen">
									<span className="bm-listen-btn">
										<i></i>
									</span>
								</div>
							</div>
							<span className="bm-time">
								<em className="bm-now-time"></em>
								<i style={{
									fontStyle: 'normal'
								}} className="bm-guding-time"> / {this.times[0]}</i>
							</span>
						</div>
					</div>
					<div className="bm-ctrl">
						<div className="bm-ctrl-vol">
							<div className="bm-ctrl-vol-barbg"></div>
							<div className="bm-ctrl-vol-vbg">
								<div className="bm-ctrl-vol-curr"></div>
								<div className="bm-ctrl-vol-change"></div>
							</div>
						</div>
						<span className="bm-ctrl-vol-btn"></span>
						<span className="bm-ctrl-loop-btn" id="bm-ctrl-loop-btn"></span>
						<span className="bm-ctrl-all-btn">{this.names.length}</span>
					</div>
				</div>

				<div className="bm-box">
					<div className="bm-box-all">
						<div className="bm-box-all-head">
							<p>播放列表 ( <b>{this.names.length}</b> ) </p>
						</div>
						<ul className="bm-box-all-content">
							{
								this.names.map((name, index) => {
									return (
										<li className={index == 0 ? 'bm-box-play-now' : ''} data-pid={index}>
											<div className="bm-box-play">
												<div className={index == 0 ? 'bm-box-play-icon' : ''}></div>
											</div>
											<p className="bm-box-play-name">{name}</p>
											<p className="bm-box-play-singer">{this.singers[index]}</p>
											<p className="bm-box-play-time">{this.times[index]}</p>
										</li>
									);
								})
							}	
						</ul>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		// 声量弹出与收缩 调节声音
		if (document.body.clientWidth >= 750) {
			// 自动播放
			var music = $('.bm-now-music');
			music.attr('src', '//yxy-site.oss-cn-hangzhou.aliyuncs.com/music/' + this.musics[0]);
			music.attr('autoplay', true);
			var volBtn = $('.bm-ctrl-vol-btn');
			var volBox = $('.bm-ctrl-vol');
			var volChangeBtn = $('.bm-ctrl-vol-change');
			var volVbgBtn = $('.bm-ctrl-vol-vbg');
			var volCurrBtn = $('.bm-ctrl-vol-curr');
			var listenV = false;

			volBtn.on('click', function() {
				volBox.toggle();
			});
			// 拖拽
			volChangeBtn.on('mousedown', function(e) {
				listenV = true;
			});
			$('body').on('mousemove', function(e) {
				if (listenV) {
					var vbg = volVbgBtn.offset();
					var willTop = e.pageY - vbg.top - 10;
					if (willTop <= 85 && willTop >= 0) {
						volChangeBtn.css('top', willTop);
						volCurrBtn.height(93 - willTop);
						music[0].volume = (85 - willTop) / 85;
					}		
				}
			});
			$('body').on('mouseup', function(e) {
				listenV = false;
			});

			// 歌单弹出与收缩
			var allBtn = $('.bm-ctrl-all-btn');
			var allBox = $('.bm-box');
			allBtn.on('click', function() {
				allBox.toggle();
			});

			// 上下切换
			var prevBtn = $('.bm-btns-prev');
			var nextBtn = $('.bm-btns-next');
			prevBtn.on('click', function() {
				// 删除原本焦点
				var preIndex = parseInt($('.bm-bg').attr('data-mid'));
				$('.bm-box-all-content').children().eq(preIndex)
					.removeClass('bm-box-play-now')
					.find('.bm-box-play .bm-box-play-icon').removeClass('bm-box-play-icon');
				// 变音乐
				var index = preIndex == 0 ? this.names.length - 1 : preIndex - 1;
				music.attr('src', '//yxy-site.oss-cn-hangzhou.aliyuncs.com/music/' + this.musics[index]);
				// 变序号
				$('.bm-bg').attr('data-mid', index);
				// 变歌名，人名，时间
				$('.bm-words-name').text(this.names[index]);
				$('.bm-words-singer').text(this.singers[index]);
				$('.bm-guding-time').text(' / ' + this.times[index]);
				// 变滚轮状态
				$('.bm-listen').width(0);
				// 变右侧聚焦
				$('.bm-box-all-content').children().eq(index)
					.addClass('bm-box-play-now')
					.find('.bm-box-play div').addClass('bm-box-play-icon');
				// 
				stopBtn.attr('class', 'bm-btns-play');

			}.bind(this));
			nextBtn.on('click', function() {
				var preIndex = parseInt($('.bm-bg').attr('data-mid'));
				$('.bm-box-all-content').children().eq(preIndex)
					.removeClass('bm-box-play-now')
					.find('.bm-box-play .bm-box-play-icon').removeClass('bm-box-play-icon');
				// 变音乐
				var index = preIndex == this.names.length - 1 ? 0 : preIndex + 1;
				music.attr('src', '//yxy-site.oss-cn-hangzhou.aliyuncs.com/music/' + this.musics[index]);
				// 变序号
				$('.bm-bg').attr('data-mid', index);
				// 变歌名，人名，时间
				$('.bm-words-name').text(this.names[index]);
				$('.bm-words-singer').text(this.singers[index]);
				$('.bm-guding-time').text(' / ' + this.times[index]);
				// 变滚轮状态
				$('.bm-listen').width(0);
				// 变右侧聚焦
				$('.bm-box-all-content').children().eq(index)
					.addClass('bm-box-play-now')
					.find('.bm-box-play div').addClass('bm-box-play-icon');
				// 
				stopBtn.attr('class', 'bm-btns-play');
			}.bind(this));

			// 暂停 - 会切换图标
			var stopBtn = $('#bm-btns-play-stop');
			stopBtn.on('click', function() {
				if (music[0].paused) {
					music[0].play();
					$(this).attr('class', 'bm-btns-play');
				} else {
					music[0].pause();
					$(this).attr('class', 'bm-btns-stop');
				}
			});

			// 单曲循环 - 会切换图标
			var loopBtn = $('#bm-ctrl-loop-btn');
			loopBtn.on('click', function() {
				if (music[0].loop) {
					music[0].loop = false;
					$(this).attr('class', 'bm-ctrl-loop-btn');
				} else {
					music[0].loop = true;
					$(this).attr('class', 'bm-ctrl-loop-btn-2');
				}
			});

			// 进度条显示  调进度
			var duration;
			var playPercent;
			var bufferPercent;
			var listenM;
			var readyBtn = $('.bm-ready');
			var listenBtn = $('.bm-listen');
			var changeBtn = $('.bm-listen-btn');
			var pbar = $('.bm-pbar');
			var nowTime = $('.bm-now-time');

			music.on('timeupdate', function() {
				var cT = music[0].currentTime;
				var seconds = parseInt(cT % 60) <= 9 ? '0' + parseInt(cT % 60) : parseInt(cT % 60);
				playPercent = cT / duration;
				bufferPercent = music[0].buffered.end(music[0].buffered.length - 1) / duration
				listenBtn.width(490 * playPercent);
				readyBtn.width(500 * bufferPercent);
				nowTime.text('0' + parseInt(cT / 60) + ':' + seconds);
				if (playPercent >= 1) {
					var preIndex = parseInt($('.bm-bg').attr('data-mid'));
					$('.bm-box-all-content').children().eq(preIndex)
						.removeClass('bm-box-play-now')
						.find('.bm-box-play .bm-box-play-icon').removeClass('bm-box-play-icon');
					// 变音乐
					var index = preIndex == this.names.length - 1 ? 0 : preIndex + 1;
					music.attr('src', '//yxy-site.oss-cn-hangzhou.aliyuncs.com/music/' + this.musics[index]);
					// 变序号
					$('.bm-bg').attr('data-mid', index);
					// 变歌名，人名，时间
					$('.bm-words-name').text(this.names[index]);
					$('.bm-words-singer').text(this.singers[index]);
					$('.bm-guding-time').text(' / ' + this.times[index]);
					// 变滚轮状态
					$('.bm-listen').width(0);
					// 变右侧聚焦
					$('.bm-box-all-content').children().eq(index)
						.addClass('bm-box-play-now')
						.find('.bm-box-play div').addClass('bm-box-play-icon');
				}
			}.bind(this));
			music.on('loadeddata', function() {
				duration = music[0].duration;
			});

			pbar.on('click', function(e) {
				var pb = pbar.offset();
				var willLeft = e.pageX - pb.left;
				if (willLeft <= 490 && willLeft >= 0) {
					listenBtn.width(willLeft);
					music[0].currentTime = duration * ( listenBtn.width() / 490);
				}	
			});

			changeBtn.on('mousedown', function(e) {
				listenM = true;
			});
			$('body').on('mousemove', function(e) {
				if (listenM) {
					var pb = pbar.offset();
					var willLeft = e.pageX - pb.left;
					if (willLeft <= 490 && willLeft >= 0) {
						listenBtn.width(willLeft);
					}		
				}
			});
			$('body').on('mouseup', function(e) {
				if (listenM) {
					music[0].currentTime = duration * ( listenBtn.width() / 490);
					listenM = false;
				}
			});


			// 点击列表换歌
			$('.bm-box-all-content li').on('click', function(e) {
				var preIndex = parseInt($('.bm-bg').attr('data-mid'));
				var thisIndex = parseInt(e.currentTarget.getAttribute('data-pid'));
				if (preIndex != thisIndex) {
					$('.bm-box-all-content').children().eq(preIndex)
						.removeClass('bm-box-play-now')
						.find('.bm-box-play .bm-box-play-icon').removeClass('bm-box-play-icon');
					// 变音乐
					music.attr('src', '//yxy-site.oss-cn-hangzhou.aliyuncs.com/music/' + this.musics[thisIndex]);
					// 变序号
					$('.bm-bg').attr('data-mid', thisIndex);
					// 变歌名，人名，时间
					$('.bm-words-name').text(this.names[thisIndex]);
					$('.bm-words-singer').text(this.singers[thisIndex]);
					$('.bm-guding-time').text(' / ' + this.times[thisIndex]);
					// 变滚轮状态
					$('.bm-listen').width(0);
					// 变右侧聚焦
					$('.bm-box-all-content').children().eq(thisIndex)
						.addClass('bm-box-play-now')
						.find('.bm-box-play div').addClass('bm-box-play-icon');
				}
			}.bind(this));
		}
	}
}