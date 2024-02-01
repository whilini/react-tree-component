import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import treeReducer from "./treeSlice";

export const store = configureStore({
  reducer: {
    tree: treeReducer,
  },
});

setupListeners(store.dispatch);
