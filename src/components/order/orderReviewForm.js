import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import history from "../../history";

import { FormButton } from "../formFields";

class OrderReviewForm extends Component {
	render() {
		const { className, handleSubmit } = this.props;

		return (
			<form
				className={`${className} order-review-form`}
				onSubmit={handleSubmit}
			>
				<Field
					className="order-review-form__proceed"
					onClick={() => history.push("/account")}
					type="submit"
					title="Proceed To Checkout"
					name="proceed"
					component={FormButton}
				/>

				<Field
					className="order-review-form__back"
					onClick={() => history.push("/shop")}
					type="button"
					title="Back"
					name="back"
					short={true}
					component={FormButton}
				/>
			</form>
		);
	}
}

OrderReviewForm = reduxForm({
	form: "OrderReviewForm",
})(OrderReviewForm);

export default OrderReviewForm;
