import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../utils/axios'

//login request
export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
  const { data } = await axios.post('/auth/login', params)
  return data
})

/////
//if email is bot verified, reminder
export const fetchVerify = createAsyncThunk('auth/fetchVerify', async (params) => {
  const { data } = await axios.post('/auth/verify/reminder', params)
  return data
})
////////

//check if the user is authorized
export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth/me')
  return data
})

//register request
export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
  const { data } = await axios.post('/auth/register', params)
  return data
})

const initialState = {
  data: null,
  status: 'loading',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null
      localStorage.clear()
    }
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.data = null
      state.status = 'loading'
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.data = action.payload
      state.status = 'loaded'
    },
    [fetchAuth.rejected]: (state) => {
      state.data = null
      state.status = 'error'
    },
    [fetchAuthMe.pending]: (state) => {
      state.data = null
      state.status = 'loading'
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.data = action.payload
      state.status = 'loaded'
    },
    [fetchAuthMe.rejected]: (state) => {
      state.data = null
      state.status = 'error'
    },
    [fetchRegister.pending]: (state) => {
      state.data = null
      state.status = 'loading'
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.data = action.payload
      state.status = 'loaded'
    },
    [fetchRegister.rejected]: (state) => {
      state.data = null
      state.status = 'error'
    },
    [fetchVerify.pending]: (state) => {
      state.data = null
      state.status = 'loading'
    },
    [fetchVerify.fulfilled]: (state, action) => {
      state.data = action.payload
      state.status = 'loaded'
    },
    [fetchVerify.rejected]: (state) => {
      state.data = null
      state.status = 'error'
    },
  }
})

// export const selectIsAuth = (state) => Boolean(state.auth.data )
export const selectIsAuth = (state) => Boolean(localStorage.getItem('token'))
export const authReducer = authSlice.reducer
export const { logout } = authSlice.actions

//check is authorized
// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue, dispatch }) => {
//   const res = await axios.get('http://localhost:4444/posts')
//   dispatch(getPosts(res.data))
// })


// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {

//     isAuth: (state, action) => {
//       //check if logged in
//       console.log("isAuth")
//       console.log(localStorage.getItem("token"))
//       return localStorage.getItem("user")
      

//       // if (!localStorage.getItem("token")) {
//       //   return false
//       // } else {
//       //   return true
//       // }
//     },

//     // register: async (state, action) => {
//     //   //register new user
//     // },

//     login: (state, action) => {
//       //to login
//       console.log('logged in')
//       state.auth = action.payload
//       console.log(state.auth)
//     },

//     logout: (state, action) => {
//       //to logout
//       state.auth = null
//       // window.location.reload()
//       console.log(state.auth)
//     }
//   }
// })
// // export const { isAuth, register, login, logout } = authSlice.actions
// export const { isAuth, login, logout } = authSlice.actions

// export default authSlice.reducer