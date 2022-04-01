import { createContext, useContext, useReducer } from "react";
import { ProductReducer } from "../reducers/product-reducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [productState, dispatch] = useReducer(ProductReducer, {
		productsList: [],
	});

	return (
		<ProductContext.Provider value={{ productState, dispatch }}>
			{children}
		</ProductContext.Provider>
	);
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
