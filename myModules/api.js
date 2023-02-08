import axios from 'axios'
import {baseURL as baseURL} from '~/myModules/baseURL'

export const axiosInstance = axios.create({
  baseURL: baseURL
})
