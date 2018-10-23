import styled from "styled-components";

export const BurgerWrapper = styled.div`
	width: 50vh;
	margin: auto;
	height: 300px;
	overflow: scroll;
	text-align: center;
	font-weight: bold;
	font-size: 1.2rem;
	@media (min-width: 500px) and (min-height: 400px) {
		.Burger {
			width: 350px;
			height: 400px;
		}
	}

	@media (min-width: 1000px) and (min-height: 700px) {
		.Burger {
			width: 700px;
			height: 600px;
		}
	}

	@media (min-width: 700px) and (min-height: 401px) {
		.Burger {
			width: 450px;
			height: 400px;
		}
	}
`;

export const CheckoutSummaryWrapper = styled.div`
	text-align: center;
	width: 100%;
	margin: auto;

	@media (min-width: 600px) {
		width: 500px;
	}
`;