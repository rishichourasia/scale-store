const ProductReducer = (state, action) => {
	switch (action.type) {
		case "API_CALL":
			return { ...state, productsList: action.payload };
		case "HIGH_TO_LOW":
			return { ...state, sortBy: action.type };
		case "LOW_TO_HIGH":
			return { ...state, sortBy: action.type };
	}
};

export { ProductReducer };
