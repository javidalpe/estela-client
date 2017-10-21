import React from 'react';
import { Container, Header, Item, Label, Input, Content, Button, Text } from 'native-base';

export default class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: '' };
	}

	render() {
		return <Container>
			<Content>
				<Text>Si participas en un evento con eStela, introduce tu clave de participante.</Text>
				<Item floatingLabel>
					<Label>Clave de acceso</Label>
					<Input onChangeText={(text) => this.setState({text})} />
				</Item>
				<Button onClick={()=>this.doLogin()}>
					<Text>Entrar</Text>
				</Button>
			</Content>
		</Container>;
	}

	doLogin() {
		console.log(this.state.text);
	}
}