import React from 'react';
import { connect } from 'react-redux'
import {Body, Card, CardItem, Container, Content, Header, Text, Title} from "native-base";

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
							//Your text here
						</Text>
						</Body>
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