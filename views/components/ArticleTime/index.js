import React, {
	Component
} from 'react';

import './index.less';

class ArticleTime extends Component {
	render() {
		let { year, month, day } = this.props; 
		return (			          
			<div className="article-meta">
				<time>{`${year}-${month}-${day}`}</time>
			</div>		       
		);
	}
}

export default ArticleTime;