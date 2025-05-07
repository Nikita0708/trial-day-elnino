import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskSlice from "../todo/model/task-slice";

const rootReducer = combineReducers({
  taskSlice: taskSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
