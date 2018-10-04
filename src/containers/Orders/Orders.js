import React, { Component } from "react";
import axios from "axios";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import { fetchOrdersSuccess, fetchOrdersFail } from "./OrderActions";

class Orders extends Component {
	state = {
		loading: false
	};

	componentDidMount = () => {
		axios
			.get("https://burger-react-d3b90.firebaseio.com/orders.json")
			.then(response => {
				this.setState({ loading: true });
				let fetchedOrders = [];

				for (let key in response.data) {
					fetchedOrders.push({
						...response.data[key],
						id: key
					});
				}
				console.log(fetchedOrders);
				this.setState({ loading: false });
				this.props.onFetchOrdersSuccess(fetchedOrders);
			})
			.catch(error => {
				this.setState({ loading: false });
				this.props.onFetchOrdersFail(error);
			});
		console.log(this.props);
	};

	render() {
		let orders = <Spinner />;

		if (this.props.orders) {
			orders = this.props.orders.map(order => (
				<Order
					key={order.id}
					ingredients={order.ingredients}
					price={order.price}
				/>
			));
		}

		return <div>{orders}</div>;
	}
}

const mapStateToProps = state => ({
	orders: state.order.orders
});

const mapDispatchToProps = dispatch => ({
	onFetchOrdersSuccess: fetchOrdersSuccess(dispatch),
	onFetchOrdersFail: fetchOrdersFail(dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Orders);
