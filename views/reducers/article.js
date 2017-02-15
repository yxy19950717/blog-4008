const LOADING = 'LOADING';
const LOAD_THIS_PAGE = 'LOAD_THIS_PAGE';
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
			albumData: action.data.albumData,
			memoryData: action.data.memoryData,
			musicData: action.data.musicData,

			articles: action.data.articles.slice(0, 5),
			tags
		};
	case LOAD_THIS_PAGE:
		return {
			allArticles: state.allArticles,
			tagToArticle: state.tagToArticle,
			albumData: state.albumData,
			memoryData: state.memoryData,
			musicData: state.musicData,

			articles: state.allArticles.slice(0, action.pN * 5),
			tags: state.tags
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
			albumData: state.albumData,
			memoryData: state.memoryData,
			musicData: state.musicData,

			articles: state.articles,
			tagToArticleArr: articleArr.reverse()
		};
	default: 
		return state;
	}
};

export {
	articleReducer
};