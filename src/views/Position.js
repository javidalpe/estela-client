import React from 'react';
import {connect} from 'react-redux'
import {Body, CardItem, Left, Right, Text} from "native-base";

class Position extends React.Component {
	render() {
		if (this.props.position === null) {
			return null;
		}

		return <CardItem>
			<Body>
			<Text note>Velocidad</Text>
			<Text>{this.props.position.coords.speed} nudos</Text>
			</Body>
			<Right>
				<Text note>Dirección</Text>
				<Text>{this.props.position.coords.heading}</Text>
			</Right>
		</CardItem>;
	}
}

function mapStateToProps(state) {
	return {
		position: state.position
	}
}

Position = connect(mapStateToProps)(Position);

export default Position