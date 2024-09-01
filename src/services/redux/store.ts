import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import persistReducer from "redux-persist/es/persistReducer";
import authSlice from "./slices/authSlice";

const persistConfig = {
  key: "mlc_ekalsutra",
  storage: storage,
};
const rootReducer = combineReducers({
  authStore: authSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
