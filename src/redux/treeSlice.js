import { createSlice } from "@reduxjs/toolkit";

const initialState = { expandedKeys: [] };

const treeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    onClickFolder(state, { payload: id }) {
      if (state.expandedKeys.includes(id)) {
        state.expandedKeys = state.expandedKeys.filter((item) => item !== id);
      } else {
        state.expandedKeys.push(id);
      }
    },
    expandParentKeys(state, { payload: list }) {
      state.expandedKeys = list;
    },
  },
});

export const { onClickFolder, expandParentKeys } = treeSlice.actions;
export default treeSlice.reducer;
