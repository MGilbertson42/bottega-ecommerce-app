import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import history from "../../history";

import { FormInput, FormButton } from "../formFields";
import Details from "../details";

class SignUpForm extends Component {
	render() {
		const { className, handleSubmit } = this.props;
		const links = [
			{
				_id: 0,
				title: "Not registered? Create account here",
				onClick: () => history.push("/signup"),
			},
			{
				_id: 1,
				title: "Forgot account email?",
				onClick: () => console.log("forgot email"),
			},
			{
				_id: 2,
				title: "Forgot password?",
				onClick: () => console.log("forgot password"),
			},
		];

		return (
			<form className={`${className} sign-up-form`} onSubmit={handleSubmit}>
				<Field
					className="sign-up-form__name"
					type="text"
					title="Name"
					placeholder="Name"
					name="name"
					component={FormInput}
				/>

				<Field
					className="sign-up-form__email"
					type="email"
					title="Email"
					placeholder="Email"
					name="email"
					component={FormInput}
				/>

				<Field
					className="sign-up-form__password"
					type="password"
					title="Password"
					placeholder="Password"
					name="password"
					component={FormInput}
				/>
				<Field
					className="sign-up-form__confirm"
					type="confirm"
					title="Confirm Password"
					placeholder="Confirm Password"
					name="confirm"
					component={FormInput}
				/>
				<div className="sign-up-form__line"></div>

				<Field
					className="sign-up-form__login"
					onClick={() => console.log("tryna submit")}
					type="submit"
					title="Login"
					name="login"
					component={FormButton}
				/>

				<Field
					className="sign-up-form__back"
					onClick={() => console.log("tryna go back")}
					type="button"
					title="Back"
					name="back"
					short={true}
					component={FormButton}
				/>

				<Details className="sign-up-form__details" title="Quick Links" links={links} />
			</form>
		);
	}
}

SignUpForm = reduxForm({
	form: "SignUpForm",
})(SignUpForm);

export default SignUpForm;
