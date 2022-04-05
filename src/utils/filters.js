const sortProducts = (state, sortBy) => {
	if (sortBy === "HIGH_TO_LOW") {
		return state.sort((a, b) => b.price - a.price);
	} else if (sortBy === "LOW_TO_HIGH") {
		return state.sort((a, b) => a.price - b.price);
	}
	return state;
};

const ratingProducts = (state, rating) => {
	return state.filter((rate) => rate.rating >= rating);
};

const priceRange = (state, price) => {
	return state.filter((item) => item.price <= price);
};

const sortCategory = (state, categories) => {
	const { selfHelp, philosophy, humanpsychology, spirituality } = categories;
	const filterdCategory = [];

	if (
		selfHelp === false &&
		philosophy === false &&
		humanpsychology === false &&
		spirituality === false
	) {
		return state;
	}

	if (selfHelp) {
		const selectCategory = state.filter(
			(item) => item.categoryName === "Self-Help"
		);
		filterdCategory.push(...selectCategory);
	}
	if (humanpsychology) {
		const selectCategory = state.filter(
			(item) => item.categoryName === "Human Psychology"
		);
		filterdCategory.push(...selectCategory);
	}

	if (philosophy) {
		const selectCategory = state.filter(
			(item) => item.categoryName === "Philosophy"
		);
		filterdCategory.push(...selectCategory);
	}

	if (spirituality) {
		const selectCategory = state.filter(
			(item) => item.categoryName === "Spirituality"
		);
		filterdCategory.push(...selectCategory);
	}
	return filterdCategory;
};

export { sortProducts, ratingProducts, priceRange, sortCategory };
