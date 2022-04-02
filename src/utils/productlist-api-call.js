import axios from "axios";

const apiCall = async (productDispatch) => {
	try {
		const response = await axios.get("/api/products");
		productDispatch({ type: "API_CALL", payload: response.data.products });
	} catch (err) {
		console.log(err);
	}
};

export { apiCall };
