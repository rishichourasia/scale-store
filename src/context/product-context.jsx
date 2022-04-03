import { createContext, useContext, useReducer } from "react";
import { ProductReducer } from "../reducers/product-reducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [productState, productDispatch] = useReducer(ProductReducer, {
		productsList: [],
		sortBy: "",
		rating: "",
		price: 1000,
	});

	return (
		<ProductContext.Provider value={{ productState, productDispatch }}>
			{children}
		</ProductContext.Provider>
	);
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
