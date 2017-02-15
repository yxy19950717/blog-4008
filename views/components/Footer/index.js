import React, { Component } from 'react';
import './index.less';

export default class Footer extends Component {
	render() {
		return(
			<footer id="footer">
				<div className="outer">
					<div id="footer-info">
						<div className="footer-left">
							© 2016-2017 Sharlly
						</div>
						<div className="footer-right">
							Reconsitution Theme <a href="https://github.com/yxy19950717" target="_blank">React Yilia</a> by Sharlly
						</div>
					</div>
				</div>
			</footer>
		);
	}
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
}

