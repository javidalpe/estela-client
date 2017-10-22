import * as Actions from '../actions'

const reducers = (state = {login: false}, action) => {
	console.log(action);
	switch (action.type) {
		case Actions.FAILED_LOGIN:
			return {
				login: "failed"
			};
		case Actions.SUCCESS_LOGIN:
			return {
				login: 'ok',
				boat: action.data.boat,
				clubs: action.data.clubs,
			};
		case Actions.ON_LOGIN:
			return {
				login: 'on'
			};
		case Actions.LOGOUT:
			return {
				login: false,
			};
		case Actions.MANUAL_SWITCH_TRACK_OFF:
			return Object.assign({}, state, {
				switch: false,
				fetching: false,
				waiting: false,
				race: null,
				position: null
			});
		case Actions.MANUAL_SWITCH_TRACK_ON:
			return Object.assign({}, state, {
				switch: true,
			});
		case Actions.ASKING_FOR_RACE:
			return Object.assign({}, state, {
				fetching: true,
				waiting: false,
				race: null,
				position: null
			});
		case Actions.WAITING_AVAILABLE_RACE:
			return Object.assign({}, state, {
				fetching: false,
				waiting: true,
				race: null,
				position: null
			});
		case Actions.ENTER_RACE:
			return Object.assign({}, state, {
				fetching: false,
				waiting: false,
				race: action.race,
				position: null
			});
		case Actions.NEW_POSITION:
			return Object.assign({}, state, {
				position: action.position
			});
		default:
			return state
	}
};

export default reducers