import axios from 'axios'

const Api_Base_Url = "https://localhost:7066";

const apiClient = axios.create({
    baseURL:Api_Base_Url,
    timeout:3000,
    headers:{
        "Content-Type":"application/json"
    }
});

export default {
    // 获取所有专辑
    async getAlbums(){
        const response = await apiClient.get('/api/Album/GetAllAlbums');
        return response.data;
    },
    // 根据id获取专辑
    async getTracksByAlbumId(id) {
        const response = await apiClient.get(`/api/Track/GetTracksByAlbumId/${id}`)
        return response.data
    }
}