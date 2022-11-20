import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// const initialState = {
//   posts: [],
// }

// //get all posts from server
// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue, dispatch }) => {
//   const res = await axios.get('http://localhost:4444/posts')
//   dispatch(getPosts(res.data))
// })

// //remove post by Id 
// export const deletePostById = createAsyncThunk('posts/deleteById', async (id, { rejectWithValue, dispatch }) => {
//   const res = await axios.delete(`http://localhost:4444/posts/${id}`)
//   dispatch(removePost(id))
// })

// export const postsSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {
//     getPosts: (state, action) => {
//       state.posts = action.payload
//       console.log(state.posts)
//       return state.posts
//     },
//     removePost: (state, action) => {
//       console.log(action.payload)
//       state.posts = state.posts.filter(post => post._id !== action.payload)
//     },
//   },
//   extraReducers: {
//     [fetchPosts.fulfilled]: () => console.log('fulfilled'),
//     [fetchPosts.pending]: () => console.log('pending'),
//     [fetchPosts.rejected]: () => console.log('rejected'),

//     [deletePostById.fulfilled]: () => console.log('fulfilled'),
//     [deletePostById.pending]: () => console.log('pending'),
//     [deletePostById.rejected]: () => console.log('rejected'),
//   },
// })

// export const { getPosts, removePost } = postsSlice.actions

// export default postsSlice.reducer


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get('http://localhost:4444/posts')
  return data
})

// export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
//   const { data } = await axios.get('/tags')
//   return data
// })

// export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', async (id) => await axios.delete(`/posts/${id}`))

const initialState = {
  posts: {
    items: [],
    status: 'loading',
  },
  // tags: {
  //   items: [],
  //   status: 'loading',
  // },
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    ///getting posts
    [fetchPosts.pending]: (state) => {
      state.posts.items = []
      state.posts.status = 'loading'
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload.reverse()
      state.posts.status = 'fulfilled'
    },
    [fetchPosts.rejected]: (state) => {
      state.posts.items = []
      state.posts.status = 'rejected'
    },
    // ///getting tags
    // [fetchTags.pending]: (state) => {
    //   state.tags.items = []
    //   state.tags.status = 'loading'
    // },
    // [fetchTags.fulfilled]: (state, action) => {
    //   state.tags.items = action.payload
    //   state.tags.status = 'loaded'
    // },
    // [fetchTags.rejected]: (state) => {
    //   state.tags.items = []
    //   state.tags.status = 'error'
    // },
    // ///deleting posts
    // [fetchRemovePost.pending]: (state, action) => {
    //   state.posts.items = state.posts.items.filter(obj => obj._id !== action.meta.arg)
    // },

  }
})

export default postsSlice.reducer

// export const postsReducer = postsSlice.reducer