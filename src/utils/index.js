export const api = (method, params, callback, errorCallback) => {
	fetch('https://www.estela.co/api/v2/', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			"jsonrpc": "2.0",
			"method": method,
			"params": params,
			"id": 1
		})
	})
		.then((response) => response.json())
		.then((responseJson) => {
			if (callback) {
				callback(responseJson);
			}
		})
		.catch((error) => {
			if (errorCallback) {
				errorCallback(error);
			}
		});
};