import { apiClient, handleApiError, apiurl } from "./apiConfig";

export default {
    // 创建新演唱会


    // 获取所有演唱会
    async getAllConcerts() {
        try {
            const response = await apiClient.get(apiurl.concert_getall);
            return { data: response.data, error: null };
        } catch (error) {
            const errorMessage = handleApiError(error, "获取演唱会列表失败");
            return { data: null, error: errorMessage };
        }
    },
}