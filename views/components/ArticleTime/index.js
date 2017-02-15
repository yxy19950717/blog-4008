import React, {
	Component
} from 'react';

import './index.less';

class ArticleTime extends Component {
	render() {
		let { year, month, day, mobileClass } = this.props; 
		return (			          
			<div className={ mobileClass ? 'article-meta-mobile' : 'article-meta'}>
				<time>{`${year}-${month}-${day}`}</time>
			</div>		       
		);
	}
}

export default ArticleTime;