import axios from 'axios';
import Store from  './store';
const {getAccountInfo, setAccountInfo} = Store;

const baseUrl='https://vc4ora8cy4.execute-api.ap-northeast-1.amazonaws.com/dev_v2'

//请求拦截处理
axios.interceptors.request.use(async config=>{
    console.log('本次请求的地址为：'+config.url);
    if(config.url != baseUrl+'/get_oauth2_token'){
        let data =await getAccountInfo();
            console.log(data);
            config.headers.authorization =`${data.token_type} ${data.access_token}`;
            return config;
    }else{
        return config
    }
});

//返回拦截处理
axios.interceptors.response.use(res => {
    console.log('本次响应路径为'+res.config.url);
    // 在这里的时候我们需要做一个判断，要是用户信息过期了，我们需要将其跳转到首页，让它再次进行登录
    // if(res.data.code !== 200){
    //     // 在这里再次进行判断，要是出现403的话，则就跳转到登录页面，重新登录，要不是的话，则直接弹出错误提示
    //    if(res.data.code==403){
    //        router.push('/login')
    //    }
    //       errorAlert(res.data.msg);
    //       return;
    // }
    return res;
});
// 登录用户请求
export const _reqLogin = (data) => {
    return axios({
        method:"POST",
        url:baseUrl+"/get_oauth2_token",
        data
    })
}
// 设置营业时间
export const _SetBusinessTime = (data) => {
    return axios({
        method:"POST",
        url:baseUrl+"/set_business_time",
        data
    })
}

// 设置出餐时间
export const _setPreparationTime = (params) =>{
    return axios({
        method:'GET',
        url:baseUrl+'/set_preparation_time',
        params
    })
}

// 设置商品的营业类型
export  const  _setBusinessCategory = (params) =>{
    return axios({
        method:'GET',
        url:baseUrl+'/set_business_category',
        params
    })
}