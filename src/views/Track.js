import React from 'react';
import { connect } from 'react-redux'
import {Body, Card, CardItem, Container, Content, Header, Right, Switch, Text, Title} from "native-base";
import {manualSwitchOff, manualSwitchOn} from "../actions/index";

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
							<Switch value={this.props.switch} onValueChange={(v)=>this.onSwitchChange(v)}/>
						</Right>
					</CardItem>
				</Card>
			</Content>
		</Container>
	}

	askForRace() {

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
	manualSwitchOff
};

Track = connect(mapStateToProps, mapDispatchToProps)(Track)

export default Track