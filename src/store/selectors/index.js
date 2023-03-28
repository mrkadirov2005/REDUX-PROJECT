export const getProductsList = (state) => state.productsReducer.products

export const getBasketProducts = (state) => state.basketReducer.products
console.log(getBasketProducts)
export const getTotalSumm = (state) => state.basketReducer.totalSum

export const getUser = (state) => state.userReducer.user
export const getUserError = (state) => state.userReducer.error
export const getUserLoading = (state) => state.userReducer.loading


export const getIsLoggedIn = (state) => state.userReducer.isLoggedIn
