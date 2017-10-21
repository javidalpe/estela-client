export const failedLogin = () => {
	return {
		type: 'FAILED_LOGIN'
	}
};

export const successLogin = (data) => {
	return {
		type: 'SUCCESS_LOGIN',
		data
	}
};