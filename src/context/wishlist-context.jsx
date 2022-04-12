import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "../reducers/whishlist-reducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
	const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, {
		wishlist: [],
	});

	return (
		<WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
			{children}
		</WishlistContext.Provider>
	);
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
