import React from 'react';
import {Container, Header, Item, Label, Input, Content, Button, Text} from 'native-base';
import { Platform } from 'react-native';
import { connect } from 'react-redux'
import {failedLogin, onLogin, successLogin} from "../actions/index";

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {text: ''};
	}

	render() {
		let button;
		if (this.props.login === 'on') {
			button = <Button disabled>
				<Text>Entrar</Text>
			</Button>;
		} else {
			button = <Button onPress={() => this.doLogin()}>
				<Text>Entrar</Text>
			</Button>;
		}
		return <Container>
			<Content>
				<Text>Si participas en un evento con eStela, introduce tu clave de participante.</Text>
				<Item floatingLabel>
					<Label>Clave de acceso</Label>
					<Input onChangeText={(text) => this.setState({text})}/>
				</Item>
				{ button }
				{ this.props.login === 'failed' &&
					<Text>Clave inválida</Text>
				}
			</Content>
		</Container>;
	}

	doLogin() {
		this.props.onLogin();

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
			console.log(responseJson);
				if (responseJson.result.meta.code === 403) {
					this.props.failedLogin();
				} else {
					this.props.successLogin(responseJson.result.data);
				}
			})
			.catch((error) => {
				this.props.failedLogin();
			});
	}
}

function mapStateToProps(state) {
	return { login: state.login }
}

const mapDispatchToProps = {
	failedLogin,
	successLogin,
	onLogin
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login