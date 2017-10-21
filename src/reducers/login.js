const login = (state = [], action) => {
	switch (action.type) {
		case 'FAILED_LOGIN':
			return [
				...state,
				{
					login: 'failed'
				}
			];
		case 'SUCCESS_LOGIN':
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