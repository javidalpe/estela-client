export const FAILED_LOGIN = 'FAILED_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'

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