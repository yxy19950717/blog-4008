const SHOW_PHOTO = 'SHOW_PHOTO';
const SHOW_THIS_PHOTO = 'SHOW_THIS_PHOTO';
const CLOSE_PHOTO = 'CLOSE_PHOTO';

const photoReducer = (state = {
	boxDisplay: 'none',
	device: 'none',
	url: '',
	index: '',
	count: '',
	desc: '',
	imgs: [],
	descs: [],
}, action) => {
	switch(action.type) {
		case SHOW_PHOTO: 
			return {
				boxDisplay: action.boxDisplay,
				device: action.device,
				url: action.url,
				index: action.index,
				count: action.count,
				desc: action.desc,
				imgs: action.imgs,
				descs: action.descs
			};
		case CLOSE_PHOTO: 
			return {
				boxDisplay: action.boxDisplay,
				device: action.device,
				url: state.url,  // 当前值
				index: state.index,  // 当前值
				count: state.count, // 恒定
				desc: state.desc, // 当前值
				imgs: state.imgs, // 恒定
				descs: state.descs // 恒定
			}
		case SHOW_THIS_PHOTO: 
			return {
				boxDisplay: action.boxDisplay,
				device: action.device,
				url: state.imgs[action.index - 1], // 获取
				index: action.index,
				count: state.count,  // 恒定
				desc: state.descs[action.index - 1],  // 获取
				imgs: state.imgs,
				descs: state.descs
			}
		default: 
			return state;
	}
}

export {
	photoReducer
};