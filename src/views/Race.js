import React from 'react';
import { connect } from 'react-redux'
import {Body, Card, CardItem, Left, Text} from "native-base";
import {Image} from "react-native";

class Race extends React.Component {
	render() {
		return <Card>
			<CardItem>
				<Left>
					<Body>
					<Text>{this.props.race.name}</Text>
					<Text note>{this.props.race.club.name}</Text>
					</Body>
				</Left>
			</CardItem>
			<CardItem cardBody>
				<Image source={{uri: this.props.race.picture}} style={{height: 200, width: null, flex: 1}}/>
			</CardItem>
		</Card>
	}
}

function mapStateToProps(state) {
	return {
		position: state.position,
		race: state.race,
	}
}

Race = connect(mapStateToProps)(Race);

export default Race