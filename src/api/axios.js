import axios from 'axios'
import qs from 'qs'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 10000
axios.defaults.baseURL = "http://localhost:3000"

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default{
  post(url, data){
    return new Promise((resolve, reject)=>{
      axios({
        method: 'post',
        url,
        data: qs.stringify(data)  //是作为请求主体被发送的数据,只适用于这些请求方法 'PUT', 'POST', 和 'PATCH',在没有设置 `transformRequest` 时，必须是以下类型之一：string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
                                  // - 浏览器专属：FormData, File, Blob
                                  // - Node 专属： Stream
      }).then(res=>{
        console.log(res)
        resolve(res.data)
      }).catch(err =>{
        reject(err)
      })
    })
  },
  get(url, data){
    return new Promise((resolve, reject)=>{
      axios({
        method: 'get',
        url,
        params: data  // `params` 是即将与请求一起发送的 URL 参数,必须是一个无格式对象(plain object)或 URLSearchParams 对象
      }).then(res=>{
        resolve(res)
      }).catch(err =>{
        reject(err)
      })
    })
  }
}