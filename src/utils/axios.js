import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://blog-eformaliza-api.onrender.com/'
})

//add a middlware to check the auth token in localstorage with every single http request and put to headers of the request
instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('token')
  return config
})

export default instance