import * as Actions from '../actions'

const login = (state = [], action) => {
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
		default:
			return state
	}
}

export default login