import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import Form from './Form';
import Background from './Background';
import ButtonSubmit from './ButtonSubmit';

export default class LoginScreen extends Component {
	render() {
		return (
			<Background>
				<Logo />
				<Form />
				<ButtonSubmit/>
			</Background>
		);
	}
}
