import axios from 'axios'
import {baseURL as baseURL} from '~/myModules/baseURL'

export const imageUploader = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'multipart/form-data'
  },
})
