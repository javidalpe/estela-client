export const FAILED_LOGIN = 'FAILED_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const ON_LOGIN = 'ON_LOGIN';
export const LOGOUT = 'LOGOUT';

export const MANUAL_SWITCH_TRACK_ON = 'MANUAL_SWITCH_TRACK_ON';
export const MANUAL_SWITCH_TRACK_OFF = 'MANUAL_SWITCH_TRACK_OFF';

export const ASKING_FOR_RACE = 'ASKING_FOR_RACE';
export const WAITING_AVAILABLE_RACE = 'WAITING_AVAILABLE_RACE';
export const ENTER_RACE = 'ENTER_RACE';
export const NEW_POSITION = 'NEW_POSITION';

export const failedLogin = () => {
	return {
		type: FAILED_LOGIN
	}
};

export const successLogin = (data) => {
	return {
		type: SUCCESS_LOGIN,
		data
	}
};

export const onLogin = () => {
	return {
		type: ON_LOGIN
	}
};

export const manualSwitchOn = () => {
	return {
		type: MANUAL_SWITCH_TRACK_ON
	}
};

export const manualSwitchOff = () => {
	return {
		type: MANUAL_SWITCH_TRACK_OFF
	}
};

export const askingForRace = () => {
	return {
		type: ASKING_FOR_RACE
	}
};

export const waitingAvailableRace = () => {
	return {
		type: WAITING_AVAILABLE_RACE
	}
};

export const enterRace = (race) => {
	return {
		type: ENTER_RACE,
		race
	}
};

export const newPosition = (position) => {
	return {
		type: NEW_POSITION,
		position
	}
};