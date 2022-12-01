import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../utils/axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get('/posts')
  return data.reverse()
})

const initialState = {
  posts: {
    items: [],
    status: 'loading',
  }
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.posts.status = "loading"
      state.posts.items = []
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.status = "loaded"
      state.posts.items = action.payload
    },
    [fetchPosts.rejected]: (state) => {
      state.posts.status = "error"
      state.posts.items = []
    },

  }

})

export const postsReducer = postsSlice.reducer

// export const getPosts = createAsyncThunk('posts/getPosts', async (_, { rejectWithValue, dispatch }) => {
//   const res = await axios.get('http://localhost:4444/posts')
//   dispatch(setPosts(res.data))
// })

// export const deletePostById = createAsyncThunk('posts/deletePostById', async (id, {rejectWithValue, dispatch}) => {
//   await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
//   dispatch(deletePost(id))
// } )

// export const postSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {
//     setPosts: (state, action) => {
//       state.posts = action.payload
//       console.log(state.posts)
//     },
    // deletePost: (state, action) => {
    //   state.posts = state.posts.filter(post =>post.id !== action.payload)
    // }
  // },
  // extraReducers: {
  //   [getPosts.fulfilled]: () => console.log('fulfilled'),
  //   [getPosts.pending]: () => console.log('pending'),
  //   [getPosts.rejected]: () => console.log('rejected'),

  //   // [deletePostById.fulfilled]: () => console.log('fulfilled'),
  //   // [deletePostById.pending]: () => console.log('pending'),
  //   // [deletePostById.rejected]: () => console.log('rejected'),
  // },
// })

// export const { setPosts, deletePost } = postSlice.actions
// export const { setPosts } = postSlice.actions
// export default postSlice.reducer

// export const postsReducer = postsSlice.reducer

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