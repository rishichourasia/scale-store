const sortProducts = (state, sortBy) => {
	if (sortBy === "HIGH_TO_LOW") {
		return [...state].sort((a, b) => b.price - a.price);
	} else if (sortBy === "LOW_TO_HIGH") {
		return [...state].sort((a, b) => a.price - b.price);
	}
	return state;
};

const ratingProducts = (state, rating) => {
	if (rating === 4) {
		return [...state].filter((rate) => rate.rating >= rating);
	} else if (rating === 3) {
		return [...state].filter((rate) => rate.rating >= rating);
	} else if (rating === 2) {
		return [...state].filter((rate) => rate.rating >= rating);
	} else if (rating === 1) {
		return [...state].filter((rate) => rate.rating >= rating);
	}
	return state;
};

export { sortProducts, ratingProducts };
