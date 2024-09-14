import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const RAPID_API_KEY = process.env.REACT_APP_PUBLIC_KEY;

const options = {
  params: {
    maxResults: "60",
  },
  headers: {
    "x-rapidapi-key": RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiServise = {
  async fetching(url) {
    const responce = await axios.get(`${BASE_URL}/${url}`, options);
    return responce.data;
  },
};
