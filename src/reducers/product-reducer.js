const ProductReducer = (state, action) => {
	switch (action.type) {
		case "API_CALL":
			return { ...state, productsList: action.payload };
	}
};

export { ProductReducer };
