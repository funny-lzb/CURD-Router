import axios from 'axios'

export const baseApi = axios.create({
  baseURL: 'https://vercel-config-three.vercel.app/',
})
