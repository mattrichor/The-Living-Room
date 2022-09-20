import Axios from 'axios'

// export const BASE_URL = 'http://localhost:3001/api'

export const BASE_URL = 'https://the-living-room-server.herokuapp.com/api'

const Client = Axios.create({ baseURL: BASE_URL })

export default Client
