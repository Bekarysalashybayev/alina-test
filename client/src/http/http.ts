import axios, {AxiosInstance} from "axios";

export const httpInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

httpInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

httpInstance.interceptors.response.use(
    (response) => {
        // Возвращайте успешные ответы напрямую
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // localStorage.removeItem('token');
        }

        // В случае ошибки 401, вы можете вернуть ошибку или выполнить другие действия
        return Promise.reject(error);
    }
);

export default httpInstance;
