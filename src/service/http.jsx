import axios from "axios";


const http = axios.create({
  baseURL: "https://booking-com.p.rapidapi.com/",
  headers: {
    'X-RapidAPI-Key': '85dec56875mshf9629df0fd9e4f3p197f1bjsn6914e9cb55bf',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
});

export default http;
