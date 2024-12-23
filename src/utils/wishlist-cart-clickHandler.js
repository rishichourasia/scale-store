const wishlistClickHandler = (
  wishlistState,
  wishlistDispatch,
  product,
  toast
) => {
  if (wishlistState.wishlist.some((item) => item.id === product.id)) {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id });
  } else {
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
    toast.success("Product added to wishlist");
  }
};

const cartClickHandler = (cartState, cartDispatch, product, toast) => {
  if (cartState.cart.some((item) => item.id === product.id)) {
    cartDispatch({ type: "INCREASE_QTY", payload: product });
  } else {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    toast.success("Product added to cart");
  }
};

const wishlistMoveClickHandler = (
  wishlistState,
  wishlistDispatch,
  cartDispatch,
  product
) => {
  if (wishlistState.wishlist.some((item) => item.id === product.id)) {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  } else {
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
    cartDispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  }
};
export { wishlistClickHandler, cartClickHandler, wishlistMoveClickHandler };
