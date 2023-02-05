import axios from 'axios'

// dev
export let baseURL = 'http://localhost:8889'

// prod
// export let baseURL = 'https://monaledge.com:8889'

export const axiosInstance = axios.create({
  baseURL: baseURL
})
