// reusable http rest api service with axios

import axios from "axios";

const Http = axios.create({
    baseURL: `https://by4oi0umz3.execute-api.ap-south-1.amazonaws.com/Prod`,
    headers: {
        "Content-Type": "application/json",
    },
});

Http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

Http.interceptors.response.use(
    (response) => {
        if (response.data.statusCode === 401 && response.data.message === "Invalid Token") {
            window.location.href = "/auth/sign-in";
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const useHttp = () => {

    const get = async (url, options = {}) => {
        try {
            const response = await Http.get(url, options);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const post = async (url, data, options = {}) => {
        try {
            const response = await Http.post(url, data, options);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const put = async (url, data, options = {}) => {
        try {
            const response = await Http.put(url, data, options);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const del = async (url, options = {}) => {
        try {
            const response = await Http.delete(url, options);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    return { get, post, put, del };
};