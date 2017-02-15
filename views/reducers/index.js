import { combineReducers } from 'redux';
import { articleReducer } from './article.js';
import { aboutReducer } from './about.js';
import { photoReducer } from './photo.js';
// import { memoryReducer } from './memory.js';

const reducers = combineReducers({
	articleReducer,
	aboutReducer,
	photoReducer
	// memoryReducer
});

export default reducers;