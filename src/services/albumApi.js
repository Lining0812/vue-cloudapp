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
    getAlbums(){
        return apiClient.get('/alubms')
    },
    // 根据id获取专辑
    getAlbumById(id) {
    return apiClient.get(`/alubms/${id}`)
  }
}