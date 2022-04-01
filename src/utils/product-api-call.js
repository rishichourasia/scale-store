import axios from "axios";

const apiCall = async (dispatch) => {
	try {
		const response = await axios.get("/api/products");
		dispatch({ type: "API_CALL", payload: response.data.products });
	} catch (err) {
		console.log(err);
	}
};

export { apiCall };
