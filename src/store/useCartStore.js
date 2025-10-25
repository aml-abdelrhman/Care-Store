import { create } from "zustand";

export const useCartStore = create((set) => {

  const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const storedWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];

  const saveToLocalStorage = (cartItems, wishlistItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  };

  return {
    cartItems: storedCart,
    wishlistItems: storedWishlist,

    addToCart: (product) =>
      set((state) => {
        const updatedCart = [
          ...state.cartItems,
          { ...product, uniqueKey: crypto.randomUUID() },
        ];
        saveToLocalStorage(updatedCart, state.wishlistItems);
        return { cartItems: updatedCart };
      }),

    addToWishlist: (product) =>
      set((state) => {
        const updatedWishlist = [
          ...state.wishlistItems,
          { ...product, uniqueKey: crypto.randomUUID() },
        ];
        saveToLocalStorage(state.cartItems, updatedWishlist);
        return { wishlistItems: updatedWishlist };
      }),

    removeFromCart: (product) =>
      set((state) => {
        const updatedCart = state.cartItems.filter(
          (item) => item.uniqueKey !== product.uniqueKey
        );
        saveToLocalStorage(updatedCart, state.wishlistItems);
        return { cartItems: updatedCart };
      }),

    removeFromWishlist: (product) =>
      set((state) => {
        const updatedWishlist = state.wishlistItems.filter(
          (item) => item.uniqueKey !== product.uniqueKey
        );
        saveToLocalStorage(state.cartItems, updatedWishlist);
        return { wishlistItems: updatedWishlist };
      }),

    moveToCart: (product) =>
      set((state) => {
        const updatedWishlist = state.wishlistItems.filter(
          (item) => item.uniqueKey !== product.uniqueKey
        );
        const newCartItem = { ...product, uniqueKey: crypto.randomUUID() };
        const updatedCart = [...state.cartItems, newCartItem];
        saveToLocalStorage(updatedCart, updatedWishlist);
        return {
          wishlistItems: updatedWishlist,
          cartItems: updatedCart,
        };
      }),

    updateQuantity: (product, qty) =>
      set((state) => {
        const updatedCart = state.cartItems.map((item) =>
          item.uniqueKey === product.uniqueKey ? { ...item, quantity: qty } : item
        );
        saveToLocalStorage(updatedCart, state.wishlistItems);
        return { cartItems: updatedCart };
      }),

    clearCart: () =>
      set((state) => {
        saveToLocalStorage([], state.wishlistItems);
        return { cartItems: [] };
      }),

    clearWishlist: () =>
      set((state) => {
        saveToLocalStorage(state.cartItems, []);
        return { wishlistItems: [] };
      }),
  };
});
