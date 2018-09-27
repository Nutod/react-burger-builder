import React, { Component } from "react";
import axios from "axios";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";

export default class extends Component {
	state = {
		orders: [],
		loading: true
	};
	componentDidMount = () => {
		axios
			.get("https://burger-react-d3b90.firebaseio.com/orders.json")
			.then(response => {
				this.setState({ loading: false });
				let fetchedOrders = [];

				for (let key in response.data) {
					fetchedOrders.push({
						...response.data[key],
						id: key
					});
				}

				this.setState({ orders: fetchedOrders });
			})
			.catch(error => {
				this.setState({ loading: false });
			});
	};

	render() {
		let orders = <Spinner />;

		if (this.state.orders) {
			orders = this.state.orders.map(order => (
				<Order key={order.id} ingredients={order.ingredients} price={order.price} />
			));
		}
		return <div>{orders}</div>;
	}
}
