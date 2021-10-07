import React, { Component } from "react";

import "./sign-in.styles.scss";

import FormInput from "../../components/FormInput/form-input.component";
import CustomButton from "../../components/CustomButton/custom-button.component";

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	render() {
		return (
			<div className="sign-in-out">
				<div className="sign-in">
					<h2>Mam już konto</h2>
					<span>ZALOGUJ SIĘ PODAJĄC NAZWĘ UŻYTKOWNIKA I HASŁO</span>

					<form onSubmit={this.handleSubmit}>
						<FormInput
							name="email"
							type="email"
							value={this.state.email}
							handleChange={this.handleChange}
							label="nazwa użytkownika"
							required
						/>
						<FormInput
							name="password"
							type="password"
							value={this.state.password}
							handleChange={this.handleChange}
							label="hasło"
							required
						/>
						<div className="buttons">
							<CustomButton type="submit" isCateg>
								{" "}
								ZALOGUJ{" "}
							</CustomButton>
							<CustomButton isGoogleSignIn>
								zaloguj z kontem Goggle
							</CustomButton>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SignIn;
