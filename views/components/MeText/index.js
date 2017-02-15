import React, { Component } from 'react';
import './index.less';

export default class MeText extends Component {
	render() {
		return (			          
			<div className="menu-me-content" id="menu-me-content" style={{
				opacity: this.props.opacity,
				zIndex: this.props.zIndex
			}}>
				<div>
					<p>Sharlly，</p>
					<p>湖大树莓老腊肉</p>
				</div>
				<div>
					<p>迷途尘世的小青年，</p>
					<p>热爱跑步</p>
					<p>目前是一枚前端</p>
				</div>
			</div>	       
		);
	}
}

