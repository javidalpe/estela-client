import React from 'react';
import {connect} from 'react-redux'
import {
	Body, Card, CardItem, Container, Content, Footer, FooterTab, Header, Right, Switch, Text,
	Title
} from "native-base";
import {askingForRace, enterRace, manualSwitchOff, manualSwitchOn, waitingAvailableRace} from "../actions/index";
import Status from "./Status";


export const TOKEN = "kdsfbgdksfgbsk";

class Track extends React.Component {

	onSwitchChange(v) {
		if (v) {
			this.props.manualSwitchOn();
			this.askForRace();
		} else {
			this.props.manualSwitchOff();
		}
	}

	render() {
		return <Container>
			<Header>
				<Body>
				<Title>{this.props.boat.name}</Title>
				</Body>
			</Header>
			<Content>
				<Card>
					<CardItem>
						<Body>
						<Text>
							Transmitir posición
						</Text>
						</Body>
						<Right>
							<Switch value={this.props.switch} onValueChange={(v) => this.onSwitchChange(v)}/>
						</Right>
					</CardItem>
				</Card>
				<Status/>
			</Content>
		</Container>
	}

	askForRace() {
		this.props.askingForRace();

		fetch('https://www.estela.co/api/v2/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"jsonrpc": "2.0",
				"method": "status",
				"params": {
					"key": this.props.boat.id,
					"token": TOKEN
				},
				"id": 1
			})
		})
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				if (responseJson.result.meta.code === 600) {
					this.props.waitingAvailableRace();
				} else {
					this.props.enterRace(responseJson.result.data.race);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

function mapStateToProps(state) {
	return {
		boat: state.boat,
		switch: state.switch
	}
}

const mapDispatchToProps = {
	manualSwitchOn,
	manualSwitchOff,
	askingForRace,
	waitingAvailableRace,
	enterRace,
};

Track = connect(mapStateToProps, mapDispatchToProps)(Track)

export default Track