import React from 'react';
import {Container, Header, Item, Label, Input, Content, Button, Text} from 'native-base';
import {Platform} from 'react-native';

export default class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {text: ''};
	}

	render() {
		return <Container>
			<Content>
				<Text>Si participas en un evento con eStela, introduce tu clave de participante.</Text>
				<Item floatingLabel>
					<Label>Clave de acceso</Label>
					<Input onChangeText={(text) => this.setState({text})}/>
				</Item>
				<Button onPress={() => this.doLogin()}>
					<Text>Entrar</Text>
				</Button>
			</Content>
		</Container>;
	}

	doLogin() {
		fetch('https://www.estela.co/api/v2/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"jsonrpc": "2.0",
				"method": "auth",
				"params": {
					"key": this.state.text,
					"lang": "es",
					"so": Platform.OS,
					"version": Platform.Version,
					"device": "Expo"
				},
				"id": 1
			})
		})
			.then((response) => response.json())
			.then((responseJson) => {
				if (responseJson.result.meta.code == 403) {
					this.setState()
				}
				console.log(responseJson);
			})
			.catch((error) => {
				console.error(error);
			});
	}
}