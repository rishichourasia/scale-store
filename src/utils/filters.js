const sortProducts = (state, sortBy) => {
	if (sortBy === "HIGH_TO_LOW") {
		return [...state].sort((a, b) => b.price - a.price);
	} else if (sortBy === "LOW_TO_HIGH") {
		return [...state].sort((a, b) => a.price - b.price);
	}
	return state;
};

export { sortProducts };
