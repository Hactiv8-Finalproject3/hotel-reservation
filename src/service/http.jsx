import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiHost = process.env.REACT_APP_API_HOST;

const http = axios.create({
    baseUrl : "https://priceline-com-provider.p.rapidapi.com",
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
      }
});

export default http;