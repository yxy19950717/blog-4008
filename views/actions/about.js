const SHOW_MOVE_AREA = 'SHOW_MOVE_AREA';

const showMoveAreaAction = (left, display, focusKey, device) => {
	return {
		type: SHOW_MOVE_AREA,
		left,
		display,
		focusKey,
		device
	};
};

export {
	showMoveAreaAction
};