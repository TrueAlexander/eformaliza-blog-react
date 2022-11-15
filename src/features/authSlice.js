import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  auth: null,
}

//check is authorized
// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue, dispatch }) => {
//   const res = await axios.get('http://localhost:4444/posts')
//   dispatch(getPosts(res.data))
// })


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    isAuth: async (state, action) => {
      //check if logged in
    },

    // register: async (state, action) => {
    //   //register new user
    // },

    login: (state, action) => {
      //to login
      console.log('logged in')
      state.auth = action.payload
      console.log(state.auth)
    },

    // logout: async (state, action) => {
    //   //to logout
    //   console.log('logout')
    // }
  }
})
// export const { isAuth, register, login, logout } = authSlice.actions
export const { isAuth, login } = authSlice.actions

export default authSlice.reducer