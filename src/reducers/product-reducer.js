const ProductReducer = (state, action) => {
	switch (action.type) {
		case "API_CALL":
			return { ...state, productsList: action.payload };
		case "HIGH_TO_LOW":
			return { ...state, sortBy: action.type };
		case "LOW_TO_HIGH":
			return { ...state, sortBy: action.type };
		case "4_AND_ABOVE":
			return { ...state, rating: action.payload };
		case "3_AND_ABOVE":
			return { ...state, rating: action.payload };
		case "2_AND_ABOVE":
			return { ...state, rating: action.payload };
		case "1_AND_ABOVE":
			return { ...state, rating: action.payload };
		case "PRICE_SLIDER":
			return { ...state, price: action.payload };
		case "SELF_HELP":
			return {
				...state,
				categories: {
					...state["categories"],
					selfHelp: !state.categories.selfHelp,
				},
			};
		case "PHILOSOPHY":
			return {
				...state,
				categories: {
					...state["categories"],
					philosophy: !state.categories.philosophy,
				},
			};
		case "HUMAN_PSYCHOLOGY":
			return {
				...state,
				categories: {
					...state["categories"],
					humanpsychology: !state.categories.humanpsychology,
				},
			};
		case "SPIRITUALITY":
			return {
				...state,
				categories: {
					...state["categories"],
					spirituality: !state.categories.spirituality,
				},
			};
	}
};

export { ProductReducer };
