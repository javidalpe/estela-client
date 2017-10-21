import React from 'react';
import Track from "./Track";
import Login from "./Login";
import { connect } from 'react-redux'

class Main extends React.Component {
	render() {
		if (this.props.login === "ok") {
			return <Track/>;
		} else {
			return <Login/>;
		}
	}
}

function mapStateToProps(state) {
	return {login: state.login}
}

Main = connect(mapStateToProps)(Main)

export default Main