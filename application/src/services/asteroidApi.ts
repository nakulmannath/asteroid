import axios from "axios";
import env from '../../.env.json'
const BASE_URL = "https://api.nasa.gov/neo/rest/v1/neo"

const asteroidApi = async (asteroidId : string) => {
  return axios.get(`${BASE_URL}/${asteroidId}`, {params: {
    "api_key": env.ACCESS_KEY,
    'Access-Control-Allow-Origin' : '*',
  }});
}

export default asteroidApi;