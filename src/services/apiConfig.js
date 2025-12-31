import axios from 'axios';

// 定义基础URL
export const API_BASE_URL = "https://localhost:7066";

// 集中定义所有API端点路径
export const apiurl = {
    // Concert相关
    concert_getall: '/api/Concert/GetAll',
    
    // Track相关
    track_getall: '/api/Track/GetAll',
    
    // Album相关
    album_getall: '/api/Album/GetAll',
    album_add: '/api/Album/AddAlbum'
};

// 创建并导出通用的axios实例
export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 3000,
    // headers: {
    //     "Content-Type": "application/json"
    // }
});

// 导出用于文件上传的axios实例（不设置Content-Type，允许浏览器自动处理）
export const uploadClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 3000,
});

// 通用错误处理函数
export const handleApiError = (error, defaultMessage = "操作失败") => {
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
