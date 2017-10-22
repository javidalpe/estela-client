import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './src/reducers/index'
import Main from "./src/views/Main";

let store = createStore(reducers);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Main/>
			</Provider>
		);
	}
}
