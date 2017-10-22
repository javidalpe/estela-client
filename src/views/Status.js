import React from 'react';
import {connect} from 'react-redux'
import {Body, Card, CardItem, Text} from "native-base";
import Race from "./Race";

const Fetching = () => <Card>
	<CardItem>
		<Body>
		<Text>
			Consultando regatas...
		</Text>
		</Body>
	</CardItem>
</Card>;

const Waiting = () => <Card>
	<CardItem>
		<Body>
		<Text>
			Esperando regata disponible...
		</Text>
		</Body>
	</CardItem>
</Card>;


class Status extends React.Component {
	render() {
		if (this.props.fetching) {
			return <Fetching/>
		} else if (this.props.waiting) {
			return <Waiting/>
		} else if (this.props.race) {
			return <Race/>
		}

		return null;
	}
}

function mapStateToProps(state) {
	return {
		waiting: state.waiting,
		fetching: state.fetching,
		race: state.race,
	}
}

Status = connect(mapStateToProps)(Status);

export default Status