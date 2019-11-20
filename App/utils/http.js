"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("../vendor/url");
var http = (function () {
    function http() {
    }
    http.prototype.get = function (url, data) {
        var promise = new Promise(function (resolve, reject) {
            wx.request({
                header: { 'content-type': 'application/x-www-form-urlencoded' },
                url: url_1.default.url + url,
                data: data,
                method: "GET",
                success: resolve,
                fail: reject
            });
        });
        return promise;
    };
    http.prototype.post = function (url, data) {
        var promise = new Promise(function (resolve, reject) {
            wx.request({
                header: { 'content-type': 'application/x-www-form-urlencoded' },
                url: url_1.default.url + url,
                data: data,
                method: "POST",
                success: resolve,
                fail: reject
            });
        });
        return promise;
    };
    return http;
}());
exports.default = new http();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBaUM7QUFHakM7SUFDRTtJQUVBLENBQUM7SUFFRCxrQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLElBQVk7UUFDM0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFZLEVBQUUsTUFBVztZQUMxRCxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULE1BQU0sRUFBRSxFQUFFLGNBQWMsRUFBRSxtQ0FBbUMsRUFBRTtnQkFDL0QsR0FBRyxFQUFFLGFBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRztnQkFDbkIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsbUJBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxJQUFZO1FBQzVCLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBWSxFQUFFLE1BQVc7WUFDMUQsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxNQUFNLEVBQUUsRUFBRSxjQUFjLEVBQUUsbUNBQW1DLEVBQUU7Z0JBQy9ELEdBQUcsRUFBRSxhQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7Z0JBQ25CLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixJQUFJLEVBQUUsTUFBTTthQUNiLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBRUQsa0JBQWUsSUFBSSxJQUFJLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJy4uL3ZlbmRvci91cmwnO1xyXG4vLyBpbXBvcnQgUHJvbWlzZSBmcm9tICcuLi92ZW5kb3IvZXM2LXByb21pc2UnO1xyXG5cclxuY2xhc3MgaHR0cCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBnZXQodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCk6IHZvaWQge1xyXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxvYmplY3Q+KChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KSA9PiB7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIGhlYWRlcjogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcclxuICAgICAgICB1cmw6IHBhdGgudXJsICsgdXJsLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbiAgfVxyXG5cclxuICBwb3N0KHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QpOiB2b2lkIHtcclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8b2JqZWN0PigocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSkgPT4ge1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICBoZWFkZXI6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXHJcbiAgICAgICAgdXJsOiBwYXRoLnVybCArIHVybCxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBodHRwKCkiXX0=