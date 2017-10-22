import React from 'react';
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import login from './src/reducers/login'
import track from "./src/reducers/track";
import Main from "./src/views/Main";

let store = createStore(combineReducers({login,track}));

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Main/>
			</Provider>
		);
	}
}
