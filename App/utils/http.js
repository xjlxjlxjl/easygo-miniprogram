"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("../vendor/url");
console.log(url_1.default);
var http = (function () {
    function http() {
    }
    http.prototype.post = function (url, data) {
        var promise = new Promise(function (resolve, reject) {
            wx.request({
                header: { 'content-type': 'application/x-www-form-urlencoded' },
                url: url_1.default + url,
                data: data,
                method: "POST",
                success: resolve,
                fail: reject
            });
        });
        return promise;
    };
    http.prototype.get = function (url, data) {
        var promise = new Promise(function (resolve, reject) {
            wx.request({
                header: { 'content-type': 'application/x-www-form-urlencoded' },
                url: url_1.default + url,
                data: data,
                method: "GET",
                success: resolve,
                fail: reject
            });
        });
        return promise;
    };
    return http;
}());
exports.default = {
    http: new http()
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBaUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFJLENBQUMsQ0FBQztBQUVsQjtJQUNFO0lBRUEsQ0FBQztJQUVELG1CQUFJLEdBQUosVUFBSyxHQUFXLEVBQUUsSUFBWTtRQUM1QixJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQVksRUFBRSxNQUFXO1lBQzNELEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLEVBQUUsY0FBYyxFQUFFLG1DQUFtQyxFQUFFO2dCQUMvRCxHQUFHLEVBQUUsYUFBSSxHQUFHLEdBQUc7Z0JBQ2YsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsa0JBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxJQUFZO1FBQzNCLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBWSxFQUFFLE1BQVc7WUFDM0QsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxNQUFNLEVBQUUsRUFBRSxjQUFjLEVBQUUsbUNBQW1DLEVBQUU7Z0JBQy9ELEdBQUcsRUFBRSxhQUFJLEdBQUcsR0FBRztnQkFDZixJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsT0FBTztnQkFDaEIsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQUVELGtCQUFlO0lBQ2IsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO0NBQ2pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICcuLi92ZW5kb3IvdXJsJztcclxuY29uc29sZS5sb2cocGF0aCk7XHJcblxyXG5jbGFzcyBodHRwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwb3N0KHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QpOiB2b2lkIHtcclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgaGVhZGVyOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICAgIHVybDogcGF0aCArIHVybCxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxuICB9XHJcblxyXG4gIGdldCh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0KTogdm9pZCB7XHJcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KTogdm9pZCB7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIGhlYWRlcjogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcclxuICAgICAgICB1cmw6IHBhdGggKyB1cmwsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBodHRwOiBuZXcgaHR0cCgpXHJcbn0iXX0=