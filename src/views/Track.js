import React from 'react';
import { connect } from 'react-redux'
import {Body, Card, CardItem, Container, Content, Header, Right, Switch, Text, Title} from "native-base";

class Track extends React.Component {
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
							<Switch/>
						</Right>
					</CardItem>
				</Card>
			</Content>
		</Container>
	}
}

function mapStateToProps(state) {
	return {
		boat: state.boat
	}
}

Track = connect(mapStateToProps)(Track)

export default Track