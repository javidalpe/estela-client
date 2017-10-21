import React from 'react';
import Login from './src/views/Login';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import login from './src/reducers/login'

let store = createStore(login);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Login/>
			</Provider>
		);
	}
}
