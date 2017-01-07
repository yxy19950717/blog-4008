const LOADING = 'LOADING';
const LOAD_THIS_PAGE = 'LOAD_THIS_PAGE';
const LOAD_THIS_ARTICLE = 'LOAD_THIS_ARTICLE';

const articleReducer = (state = {}, action) => {
	switch(action.type) {
	case LOADING:
		return {
			allArticles: action.data,
			articles: action.data.slice(0, 5)
		};
	case LOAD_THIS_PAGE:
		return {
			allArticles: state.allArticles,
			articles: state.allArticles.slice(0, action.pN * 5)
		};
	case LOAD_THIS_ARTICLE:
		return {
			allArticles: state.allArticles,
			articleSelected: state.allArticles[state.allArticles.length - action.id]
		};
	default: 
		return state;
	}
};

export {
	articleReducer
};