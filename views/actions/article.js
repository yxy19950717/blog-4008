const LOADING = 'LOADING';
const LOAD_THIS_PAGE = 'LOAD_THIS_PAGE';
const LOAD_TAG_TO_ARTICLE = 'LOAD_TAG_TO_ARTICLE';
const LOAD_ALBUM = 'LOAD_ALBUM';

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

const loadTagToArticleAction = (tag) => {
	return {
		type: LOAD_TAG_TO_ARTICLE,
		tag
	};
};

const loadAlbumAction = () => {
	return {
		type: LOAD_ALBUM,
	};
};

export {
	loadAction,
	loadThisPageAction,
	loadTagToArticleAction,
	loadAlbumAction
};