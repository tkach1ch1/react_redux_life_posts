import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const addPostReducer = createSlice({
    name: "post",
    initialState: {
        posts: [],
        statusAlert: false,
        status: "idle",
        error: null
        
    },
    reducers: {
        addNewPost: (state, action) => {
            state.posts.push(action.payload)
        },
        toggleStatusTrue: (state) => {
            state.statusAlert = true
        },
        toggleStatusFalse: (state) => {
            state.statusAlert = false
        }
    },
    extraReducers (builder) {
        builder
            .addCase(fetchPosts.pending, (state,action) => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

const url = "https://jsonplaceholder.typicode.com/posts?_limit=5"



export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
    const response = await fetch(url)
    return response.json()
})



export const {addNewPost,toggleStatusTrue, toggleStatusFalse} = addPostReducer.actions

export default addPostReducer.reducer