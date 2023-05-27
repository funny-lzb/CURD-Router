// import { baseApi } from "./base"
import axios from 'axios'

const baseApi = axios.create({ baseURL: import.meta.env.VITE_API_URL })

export function getPosts(options) {
  return baseApi.get('posts', options).then(res => res.data)
}

export function getPost(postId, options) {
  return baseApi.get(`posts/${postId}`, options).then(res => res.data)
}

export function createPost(data, options) {
  return baseApi.post('posts', data, options).then(res => res.data)
}

export function updatePost(postId, data, options) {
  return baseApi.put(`posts/${postId}`, data, options).then(res => res.data)
}
