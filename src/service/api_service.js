import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "60",
  },
  headers: {
    "x-rapidapi-key": "9816e2544cmshc4028941cabf40ap1ca474jsnc38d683ad36d",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiServise = {
  async fetching(url) {
    const responce = await axios.get(`${BASE_URL}/${url}`, options);
    return responce.data;
  },
};
