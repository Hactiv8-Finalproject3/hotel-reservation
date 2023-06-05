import axios from "axios";


const http = axios.create({
  baseURL: "https://booking-com.p.rapidapi.com/",
  headers: {
    'X-RapidAPI-Key': '88e8acda90mshfade61ed5ec4a88p178b25jsn1b4ab26a2945',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
});

export default http;
