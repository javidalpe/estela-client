import * as Actions from '../actions'

const login = (state = [], action) => {
	switch (action.type) {
		case Actions.SUCCESS_LOGIN:
			return [
				...state,
				{
					login: 'failed'
				}
			];
		case Actions.FAILED_LOGIN:
			return [
				...state,
				{
					login: 'ok',
					boat: action.data.boat,
					clubs: action.data.clubs,
				}
			];
		default:
			return state
	}
}

export default login