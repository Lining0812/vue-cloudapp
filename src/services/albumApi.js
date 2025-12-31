import { apiClient, uploadClient, handleApiError,apiurl } from "./apiConfig";

export default {
    // 创建新专辑
    async addAlbum(album) {
        try {
            const formData = new FormData();
            formData.append('Title', album.title);
            formData.append('Artist', album.artist);
            formData.append('ReleaseDate', albumData.releaseDate);
            formData.append('Description', albumData.description);
            formData.append('CoverImage', albumData.coverImage);
            const response = await uploadClient.post(apiurl.album_add, formData);
            return { data: response.data, error: null };
        }
        catch (error) {
            const errorMessage = handleApiError(error, "添加专辑失败");
            return { data: null, error: errorMessage };
        }
    },

    // 获取所有专辑
    async getAlbums(){
        try {
            const response = await apiClient.get(apiurl.album_getall);
            return { data: response.data, error: null };
        }
        catch (error) {
            const errorMessage = handleApiError(error, "获取专辑列表失败");
            return { data: null, error: errorMessage };
        }
    },
}