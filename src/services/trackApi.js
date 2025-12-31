import { apiClient, handleApiError, apiurl } from "./apiConfig";

export default {
    // 创建新单曲

    // 获取所有单曲
    async getAllTracks() {
        try {
            const response = await apiClient.get(apiurl.track_getall);
            return { data: response.data, error: null };
        } catch (error) {
            const errorMessage = handleApiError(error, "获取单曲列表失败");
            return { data: null, error: errorMessage };
        }
    },
}