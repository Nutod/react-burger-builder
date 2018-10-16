export const checkExpirationTime = expirationTime => {
	setTimeout(() => {
		this.props.onLogout();
	}, expirationTime * 1000);
};
