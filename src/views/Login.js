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
		let input;
		if (this.props.login === 'on') {
			button = <Button disabled>
				<Text>Entrar</Text>
			</Button>;
			input = <Item floatingLabel last>
				<Label>Clave de acceso</Label>
				<Input disbled/>
			</Item>
		} else {
			button = <Button onPress={() => this.doLogin()}>
				<Text>Entrar</Text>
			</Button>;

			if (this.props.login === 'failed') {
				input = <Item floatingLabel last error>
					<Label>Clave de acceso</Label>
					<Input onChangeText={(text) => this.setState({text})}/>
					<Text style={{color: 'red'}}>Clave inválida</Text>
				</Item>
			} else {
				input = <Item floatingLabel last>
					<Label>Clave de acceso</Label>
					<Input onChangeText={(text) => this.setState({text})}/>
				</Item>
			}
		}
		return <Container>
			<Content>
				<Card>
					<CardItem header>
						<Text>Si participas en un evento con eStela, introduce tu clave de participante.</Text>
					</CardItem>
					<CardItem>
						<Body>
						{input}
						</Body>
					</CardItem>
					<CardItem footer>
						{button}
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
		}, (responseJson) => {
			if (responseJson.result.meta.code === 403) {
				this.props.failedLogin();
			} else {
				this.props.successLogin(responseJson.result.data);
			}
		}, (error) => {
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
};

Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login