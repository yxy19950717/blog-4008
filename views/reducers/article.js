const LOADING = 'LOADING';
const LOAD_THIS_PAGE = 'LOAD_THIS_PAGE';
const LOAD_THIS_ARTICLE = 'LOAD_THIS_ARTICLE';
const LOAD_TAG_TO_ARTICLE = 'LOAD_TAG_TO_ARTICLE';

const articleReducer = (state = {}, action) => {
	switch(action.type) {
	case LOADING:
		var tags = [];
		for (var key in action.data.tagToArticle) {
			tags.push(key);
		}
		return {
			allArticles: action.data.articles,
			tagToArticle: action.data.tagToArticle,
			articles: action.data.articles.slice(0, 5),
			tags
		};
	case LOAD_THIS_PAGE:
		return {
			allArticles: state.allArticles,
			tagToArticle: state.tagToArticle,
			articles: state.allArticles.slice(0, action.pN * 5)
		};
	case LOAD_THIS_ARTICLE:
		return {
			allArticles: state.allArticles,
			tagToArticle: state.tagToArticle,
			articleSelected: state.allArticles[state.allArticles.length - action.id]
		};
	case LOAD_TAG_TO_ARTICLE: 
		var articleNumArr = state.tagToArticle[action.tag];
		var articleArr = [];
		for (var i = 0; i < articleNumArr.length; i++) {
			articleArr.push(state.allArticles[state.allArticles.length - articleNumArr[i]]);
		}
		return {
			allArticles: state.allArticles,
			tagToArticle: state.tagToArticle,
			articles: state.allArticles.slice(0, 5),
			tagToArticleArr: articleArr.reverse()
		};
	default: 
		return state;
	}
};

export {
	articleReducer
};