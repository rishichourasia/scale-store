const ProductReducer = (state, action) => {
	switch (action.type) {
		case "API_CALL":
			return { ...state, productsList: action.payload };
		case "HIGH_TO_LOW":
			return { ...state, sortBy: action.type };
		case "LOW_TO_HIGH":
			return { ...state, sortBy: action.type };
		case 4:
			return { ...state, rating: action.type };
		case 3:
			return { ...state, rating: action.type };
		case 2:
			return { ...state, rating: action.type };
		case 1:
			return { ...state, rating: action.type };
	}
};

export { ProductReducer };
