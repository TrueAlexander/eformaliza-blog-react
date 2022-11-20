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

    isAuth: (state, action) => {
      //check if logged in
      console.log("isAuth")
      console.log(localStorage.getItem("token"))
      

      // if (!localStorage.getItem("token")) {
      //   return false
      // } else {
      //   return true
      // }
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

    logout: (state, action) => {
      //to logout
      state.auth = null
      // window.location.reload()
      console.log(state.auth)
    }
  }
})
// export const { isAuth, register, login, logout } = authSlice.actions
export const { isAuth, login, logout } = authSlice.actions

export default authSlice.reducer