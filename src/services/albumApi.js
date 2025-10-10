import axios from 'axios';
const Api_Base_Url = "https://localhost:7066";

const apiClient = axios.create({
    baseURL:Api_Base_Url,
    timeout:3000,
    headers:{
        "Content-Type":"application/json"
    }
});

// 通用错误处理函数
const handleApiError = (error, defaultMessage = "操作失败") => {
    if (error.response) {
        // 服务器返回错误
        console.error(`API Error: ${error.response.status} - ${error.response.data?.message || '未知错误'}`);
        return error.response.data?.message || `${defaultMessage} (${error.response.status})`;
    } 
    else if (error.request) {
        // 无响应
        console.error("API Error: 未收到响应");
        return "无法连接到服务器，请检查网络";
    } 
    else {
        // 请求配置错误
        console.error(`API Error: ${error.message}`);
        return defaultMessage;
    }
};

export default {
    // 获取所有专辑
    async getAlbums(){
        try{
            const response = await apiClient.get('/api/Album/GetAllAlbums');
            return response.data;
        }
        catch(error){
            const errorMessage = handleApiError(error, "获取专辑列表失败");
            return { data: null, error: errorMessage };
        }
    },
    // 根据id获取专辑
    async getTracksByAlbumId(id) {
        const response = await apiClient.get(`/api/Track/GetTracksByAlbumId/${id}`);
        return response.data;
    },
    // 新增专辑
    async addAlbum(albumData) {
        try {
            // 创建一个新的axios实例用于文件上传，不设置Content-Type以允许浏览器自动处理
            const UploadClient = axios.create({
                baseURL: Api_Base_Url,
                timeout: 3000
            });
            
            // 构建FormData对象
            const formData = new FormData();
            formData.append('Title', albumData.title);
            formData.append('Artist', albumData.artist);
            formData.append('ReleaseDate', albumData.releaseDate);
            formData.append('Description', albumData.description);
            formData.append('CoverImageUrl', albumData.coverImageUrl);
            
            const response = await UploadClient.post('/api/Album/AddAlbum', formData);
            return { data: response.data, error: null };
        }
        catch (error) {
            const errorMessage = handleApiError(error, "添加专辑失败");
            return { data: null, error: errorMessage };
        }
    }
}