import { configureStore } from "@reduxjs/toolkit";
import addPostReducer from "./addPostReducer";


export const store = configureStore({
    reducer: {
        post: addPostReducer
    }
})