const CartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, { ...action.payload, quantity: 1 }],
			};
		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};
		case "INCREASE_QTY":
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				),
			};
		case "DECREASE_QTY":
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id
						? {
								...item,
								quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
						  }
						: item
				),
			};
	}
};

export { CartReducer };
