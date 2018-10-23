import React, { Fragment } from "react";

import { ButtonDanger, ButtonSuccess } from "../../Elements/Button";

export default ({ ingredients, continued, cancelled, price }) => {
	const item = Object.keys(ingredients).map(ingredient => (
		<li key={ingredient}>
			{ingredient}: {ingredients[ingredient]}
		</li>
	));

	return (
		<Fragment>
			<h3>Here's your Order</h3>
			<p>With the following items:</p>
			<ul>{item}</ul>
			<p>
				Price: <strong>{price.toFixed(2)}</strong>
			</p>
			<p>Continue to Checkout?</p>
			<ButtonDanger onClick={cancelled}>CANCEL</ButtonDanger>
			<ButtonSuccess onClick={continued}>CONTINUE</ButtonSuccess>
		</Fragment>
	);
};
