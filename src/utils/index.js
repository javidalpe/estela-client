export const api = (method, params) => {
	return fetch('https://www.estela.co/api/v2/', {
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
	});
};