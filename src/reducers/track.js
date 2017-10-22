import * as Actions from '../actions'

const track = (state = {login: false}, action) => {
	switch (action.type) {
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
	}
	return state;
};

export default track;