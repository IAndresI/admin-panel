import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authAPI } from "../services/authService";
import { authReducers } from "./reducers/authSlice";

const rootReducer = combineReducers({
  user: authReducers,
  [authAPI.reducerPath]: authAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authAPI.middleware)
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];