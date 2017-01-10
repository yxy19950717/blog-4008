const LOADING = 'LOADING';
const LOAD_THIS_PAGE = 'LOAD_THIS_PAGE';
const LOAD_THIS_ARTICLE = 'LOAD_THIS_ARTICLE';
const LOAD_TAG_TO_ARTICLE = 'LOAD_TAG_TO_ARTICLE';

const loadAction = (data) => {
	return {
		type: LOADING,
		data
	};
};

const loadThisPageAction = (pN) => {
	return {
		type: LOAD_THIS_PAGE,
		pN
	};
};

const loadThisArticleAction = (id) => {
	return {
		type: LOAD_THIS_ARTICLE,
		id
	};
};

const loadTagToArticleAction = (tag) => {
	return {
		type: LOAD_TAG_TO_ARTICLE,
		tag
	};
};

export {
	loadAction,
	loadThisPageAction,
	loadThisArticleAction,
	loadTagToArticleAction
};