import Axios from 'axios'

export const BASE_URL = 'http://localhost:3001/api'

// export const BASE_URL = 'https://coachs-corner-backend.herokuapp.com/'

const Client = Axios.create({ baseURL: BASE_URL })

export default Client
