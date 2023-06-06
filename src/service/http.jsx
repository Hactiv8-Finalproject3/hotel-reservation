import axios from "axios";


const http = axios.create({
  baseURL: "https://booking-com.p.rapidapi.com/",
  headers: {
    'X-RapidAPI-Key': '6acbe75472msh8a106e6a193d811p1346a8jsn54d607fd8dbe',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
});

export default http;
