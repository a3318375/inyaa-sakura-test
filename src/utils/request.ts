/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from "axios";

// 创建axios实例
const request = axios.create({
    // baseURL:"",
    // timeout: 10 * 1000,
    // withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

// 请求拦截器
request.interceptors.request.use(
    config => {
        config.baseURL = import.meta.env.VITE_API_URL
        // 全局添加token
        // config.headers["Authorization"] = token;
        console.log('request-admin', config.baseURL, ', request-url', config.url)
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
request.interceptors.response.use(
    response => {
        const {code, message, data} = response.data;
        // code 是后端返回的业务状态码 {code:0,data:{},message:"成功"}
        if (code !== 200) {
            console.log(message)
            return null;
        } else {
            return data;
        }
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    console.log('error1-错误请求')
                    break;
                case 401:
                    console.log('error2-未授权，请重新登录')
                    break;
                case 403:
                    console.log('error3-拒绝访问')
                    break;
                case 404:
                    console.log('error4-请求错误,未找到该资源')
                    break;
                case 405:
                    console.log('error5-请求方法未允许')
                    break;
                case 408:
                    console.log('error6-请求超时')
                    break;
                case 500:
                    console.log('error7-服务器端出错')
                    break;
                case 501:
                    console.log('error8-网络未实现')
                    break;
                case 502:
                    console.log('error9-网络错误')
                    break;
                case 503:
                    console.log('error10-服务不可用')
                    break;
                case 504:
                    console.log('error11-网络超时')
                    break;
                case 505:
                    console.log('error12-http版本不支持该请求')
                    break;
                default:
                    console.log('error13-', `连接错误${err.response.status}`)
            }
        } else {
            console.log('error14-', '连接到服务器失败')
        }
        return null
    }
);

export default request;
