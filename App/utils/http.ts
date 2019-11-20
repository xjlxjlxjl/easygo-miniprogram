import path from '../vendor/url';
import Promise from '../vendor/es6-promise';

class http {
  constructor() {

  }

  post(url: string, data: object): void {
    let promise = new Promise<string>((resolve: any, reject: any) => {
      wx.request({
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        url: path + url,
        data: data,
        method: "POST",
        success: resolve,
        fail: reject
      })
    })
    return promise;
  }

  get(url: string, data: object): void {
    let promise = new Promise<string>((resolve: any, reject: any) => {
      wx.request({
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        url: path + url,
        data: data,
        method: "GET",
        success: resolve,
        fail: reject
      })
    })
    return promise;
  }
}

export default {
  http: new http()
}