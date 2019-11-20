import path from '../vendor/url';
// import Promise from '../vendor/es6-promise';

class http {
  constructor () {
    
  }

  get(url: string, data: object): void {
    let promise = new Promise<object>((resolve: any, reject: any) => {
      wx.request({
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        url: path.url + url,
        data: data,
        method: "GET",
        success: resolve,
        fail: reject
      })
    })
    return promise;
  }

  post(url: string, data: object): void {
    let promise = new Promise<object>((resolve: any, reject: any) => {
      wx.request({
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        url: path.url + url,
        data: data,
        method: "POST",
        success: resolve,
        fail: reject
      })
    })
    return promise;
  }
}

export default new http()