/*
 * @Author: zzj
 * @Date: 2020-11-07 18:15:56
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-17 16:49:00
 * @Description:
 */
// 封装axios请求，返回重新封装的数据格式
// 对错误的统一处理
import store from "@/store/index";
import axios from "axios";
import errorHandle from "./errorHandle";
import publicConfig from "@/config";
const CancelToken = axios.CancelToken;

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.pending = {};
  }
  // 获取axios配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: { "Content-Type": "application/json;charset=utf-8" },
      timeout: 10000,
    };
    return config;
  }
  removePending(key, isRequest = false) {
    if (this.pending[key] && isRequest) {
      this.pending[key]("取消重复请求");
    }
    delete this.pending[key];
  }
  // 设定拦截器
  interceptors(instance) {
    // 请求拦截器
    instance.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        let isPublic = false;
        publicConfig.publicPath.map((path) => {
          isPublic = isPublic || path.test(config.url);
        });
        const token = store.state.token;
        if (!isPublic && token) {
          config.headers.Authorization = "Bearer " + token;
        }
        let key = `${config.url}&${config.method}`;
        this.removePending(key, true);
        config.cancelToken = new CancelToken((c) => {
          this.pending[key] = c;
        });
        return config;
      },
      (err) => {
        // Do something with request error
        errorHandle(err);
        return Promise.reject(err);
      }
    );

    // 响应请求的拦截器
    instance.interceptors.response.use(
      (res) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        let key = `${res.url}&${res.method}`;
        this.removePending(key);
        if (res.status === 200) {
          return Promise.resolve(res.data);
        } else {
          return Promise.reject(res);
        }
      },
      (err) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        errorHandle(err);
        return Promise.reject(err);
      }
    );
  }
  // 创建实例
  request(options) {
    const instance = axios.create();
    const newOptions = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(newOptions);
  }
  get(url, config) {
    const options = Object.assign(
      {
        method: "get",
        url,
      },
      config
    );
    return this.request(options);
  }
  post(url, data) {
    return this.request({
      method: "post",
      url,
      data,
    });
  }
}

export default HttpRequest;
