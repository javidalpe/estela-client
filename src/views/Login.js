import React from 'react';
import {Container, Header, Item, Label, Input, Content, Button, Text, Card, CardItem, Body} from 'native-base';
import {Platform} from 'react-native';
import {connect} from 'react-redux'
import {failedLogin, onLogin, successLogin} from "../actions/index";
import {TOKEN} from "./Track";
import {api} from "../utils/index";

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
				<Card>
					<CardItem header>
						<Text>Si participas en un evento con eStela, introduce tu clave de participante.</Text>
					</CardItem>
					<CardItem>
						<Body>
						<Item floatingLabel last>
							<Label>Clave de acceso</Label>
							<Input onChangeText={(text) => this.setState({text})}/>
						</Item>
						</Body>
					</CardItem>
					<CardItem footer>
						{button}
						{this.props.login === 'failed' &&
						<Text>Clave inválida</Text>
						}
					</CardItem>
				</Card>
			</Content>
		</Container>;
	}

	doLogin() {
		this.props.onLogin();

		api('auth', {
			"key": this.state.text,
			"lang": "es",
			"so": Platform.OS,
			"version": Platform.Version,
			"device": "Expo",
			"token": TOKEN
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
	return {login: state.login}
}

const mapDispatchToProps = {
	failedLogin,
	successLogin,
	onLogin
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login