const SHOW_PHOTO = 'SHOW_PHOTO';
const SHOW_THIS_PHOTO = 'SHOW_THIS_PHOTO';
const CLOSE_PHOTO = 'CLOSE_PHOTO';

const showPhotoAction = (device, boxDisplay, url, index, count, desc, imgs, descs) => {
	return {
		type: SHOW_PHOTO,
		boxDisplay,
		device,
		url,
		index,
		count,
		desc,
		imgs,
		descs
	};
};

const closePhotoAction = (device, boxDisplay) => {
	return {
		type: CLOSE_PHOTO,
		boxDisplay,
		device
	};
};

const showThisPhotoAction = (device, boxDisplay, index) => {
	return {
		type: SHOW_THIS_PHOTO,
		boxDisplay,
		device,
		index,
	};
};

export {
	showPhotoAction,
	showThisPhotoAction,
	closePhotoAction
};