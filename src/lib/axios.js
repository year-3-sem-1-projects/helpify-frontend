import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://helpify.azurewebsites.net/api/',
})

export default instance
