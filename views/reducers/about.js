const SHOW_MOVE_AREA = 'SHOW_MOVE_AREA';


const aboutReducer = (state = { 
	moveAreaLeft: 'none',
	menuBackDisplay: 'none',
	focusKey: 'none',
	device: 'none'
}, action) => {
	switch(action.type) {
	case SHOW_MOVE_AREA: 
		return {
			moveAreaLeft: action.left,
			menuBackDisplay: action.display,
			focusKey: action.focusKey,
			device: action.device
		};
	default:
		return state;
	}
};

export {
	aboutReducer
};