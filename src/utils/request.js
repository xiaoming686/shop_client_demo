import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vc4ora8cy4.execute-api.ap-northeast-1.amazonaws.com/dev_v2',
    timeout: 3000,
});

//请求拦截处理
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers.authorization = 'Bearer' + ' ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoxMDE1LCJ1c2VyX3R5cGUiOiJzaG9wIn0sInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MjQ1MjQ5NzMsImV4cCI6MTYyNDYxMTM3M30.nwps0txu9FaiN1zypVM4jcXCOc1fFAfSvhAFtVA3E6A'
    console.log(config);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//返回拦截处理
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export const NetPost = (api, params) => {
    return new Promise((resolve, reject) => {
        instance.post(api, params)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                console.log(error);
                reject(error)
            })
    })
}

export const NetGet = (api, params) => {
    return new Promise((resolve, reject) => {
        instance.get(api, params)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                console.log(error);
                reject(error)
            })
    })
}
// post
// '/set_business_time'
// get
// '/set_preparation_time'
// '/set_business_category'