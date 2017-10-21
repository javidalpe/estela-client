import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import login from './src/reducers/login'
import Main from "./src/views/Main";

let store = createStore(login);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Main/>
			</Provider>
		);
	}
}
