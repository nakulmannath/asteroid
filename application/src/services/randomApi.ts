import axios from "axios";
const BASE_URL = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY"

const randomApi = async () => {
  return axios.get(BASE_URL);
}

export default randomApi;