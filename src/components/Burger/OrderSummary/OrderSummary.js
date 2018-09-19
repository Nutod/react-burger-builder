import React, { Fragment } from "react";

export default ({ ingredients }) => {
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
			<p>Continue to Checkout?</p>
		</Fragment>
	);
};
