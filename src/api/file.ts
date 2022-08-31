import axios from "axios"

const instance = axios.create({
  baseURL: "https://klinikme-api-panas.herokuapp.com"
})

export default instance
