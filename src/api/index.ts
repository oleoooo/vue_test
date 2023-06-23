import axios from "axios"

const useFetch = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com", //fakeApi
  baseURL: "http://localhost:3000",
  timeout: 2000,
})

const getAsync = async (path) => {
  return await useFetch.get(path)
}

export { getAsync }