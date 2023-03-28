import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import persistReducer from "redux-persist/es/persistReducer"
import rootReducer, { persistentBlacklist } from "./reducers/rootReducer"
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/es/persistStore"

const persistConfig = { key: "root", storage, blacklist: persistentBlacklist }
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})
export const persistor = persistStore(store)
export default store
