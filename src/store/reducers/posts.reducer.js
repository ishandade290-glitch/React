import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: [{ id: 1, title: "Huy napishi stoto" }],
  reducers: {
    addPost: (state, { payload: { title } }) => {
      const lastId = state.length > 0 ? state[state.length - 1].id + 1 : 1;
      state.push({ id: lastId, title });
    },
    deletePost: (state, { payload: { id } }) => {
      return state.filter((state)=>state.id !== id ) 
    },
  },
});
export const { addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
