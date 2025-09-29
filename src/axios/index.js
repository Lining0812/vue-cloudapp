import axios from 'axios'

const instance = axios.create({
    baseURL:"https://localhost:7066",
    timeout:3000,
    headers:{
        "Content-Type":"application/json"
    }
});

export default instance;