import React, { Component } from "react";

// Component for lazy loading Components loaded with Routing
export default importComponent => {
	return class extends Component {
		state = {
			component: null
		};

		componentDidMount() {
			importComponent().then(cmp => {
				this.setState({ component: cmp.default });
			});
		}

		render() {
			const C = this.state.component;

			return C ? <C {...this.props} /> : null;
		}
	};
};
