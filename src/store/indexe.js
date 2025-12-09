import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo.reducer"
import postsReducer from "./reducers/posts.reducer"

export const store = configureStore({
    reducer:{
        todos:todoReducer,
        posts:postsReducer,
    },
})