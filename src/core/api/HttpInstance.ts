import axios from "axios";


const StorageKey = 'vwaza_artist';
const NetworkService = () => {

    const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:8080/" : "https://reconcile-api.herokuapp.com/"



    const axiosInstance = axios.create({
        baseURL: baseURL,

    });


    axiosInstance.interceptors.response.use(
        (response) =>
            new Promise((resolve, reject) => {
                resolve(response);
            }),
        (error) => {
            if (!error.response) {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }

            if (error.response.status === 403) {
                localStorage.removeItem(StorageKey);

                //TODO: handle redirects
            } else {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }
        }
    );

    return axiosInstance;
};

export default NetworkService;
