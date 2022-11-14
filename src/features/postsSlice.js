import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  posts: [],
}

//get all posts from server
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue, dispatch }) => {
  const res = await axios.get('http://localhost:4444/posts')
  dispatch(getPosts(res.data))
})

//remove post by Id 
export const deletePostById = createAsyncThunk('posts/deleteById', async (id, { rejectWithValue, dispatch }) => {
  const res = await axios.delete(`http://localhost:4444/posts/${id}`)
  dispatch(removePost(id))
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload
      console.log(action.payload)
    },
    removePost: (state, action) => {
      console.log(action.payload)
      state.posts = state.posts.filter(post => post._id !== action.payload)
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled]: () => console.log('fulfilled'),
    [fetchPosts.pending]: () => console.log('pending'),
    [fetchPosts.rejected]: () => console.log('rejected'),

    [deletePostById.fulfilled]: () => console.log('fulfilled'),
    [deletePostById.pending]: () => console.log('pending'),
    [deletePostById.rejected]: () => console.log('rejected'),
  },
})

export const { getPosts, removePost } = postsSlice.actions

export default postsSlice.reducer