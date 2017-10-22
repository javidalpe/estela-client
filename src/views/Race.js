import React from 'react';
import {connect} from 'react-redux'
import {Badge, Body, Card, CardItem, Left, Text} from "native-base";
import {Image} from "react-native";
import {api} from "../utils/index";
import {TOKEN} from "./Track";

const Timer = (props) => {
	var seconds = props.time % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var minutes = Math.floor(props.time / 60) % 60;
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	var hours = Math.floor(props.time / 3600) % 60;
	if (hours < 10) {
		hours = "0" + hours;
	}

	return <Text>{hours}:{minutes}:{seconds}</Text>
}

class Race extends React.Component {

	constructor(props) {
		super(props);
		this.state = {ellapsed: 0}
	}

	componentDidMount() {
		this.watchID = navigator.geolocation.watchPosition((p) => this.savePosition(p));
		this.intervalID = setInterval(() => this.setState({ellapsed: this.state.ellapsed + 1}), 1000);
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
		clearInterval(this.intervalID);
	}

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
			<CardItem>
				<Left>
					<Badge danger>
						<Text></Text>
					</Badge>
				</Left>
				<Text><Timer time={this.state.ellapsed}/></Text>
			</CardItem>
		</Card>
	}

	savePosition(p) {
		console.log(p);
		api("positions", {
			"token": TOKEN,
			"battery": 56,
			"charger": false,
			"positions": [
				{
					"lat": p.coords.latitude,
					"lon": p.coords.longitude,
					"sog": p.coords.speed === -1 ? 0 : p.coords.speed,
					"cog": p.coords.heading === -1 ? 0 : p.coords.heading,
					"utc": (new Date()).toISOString()
				}
			]
		});
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