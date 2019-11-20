"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("../vendor/url");
var es6_promise_1 = require("../vendor/es6-promise");
var http = (function () {
    function http() {
    }
    http.prototype.post = function (url, data) {
        var promise = new es6_promise_1.default(function (resolve, reject) {
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
        var promise = new es6_promise_1.default(function (resolve, reject) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBaUM7QUFDakMscURBQTRDO0FBRTVDO0lBQ0U7SUFFQSxDQUFDO0lBRUQsbUJBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxJQUFZO1FBQzVCLElBQUksT0FBTyxHQUFHLElBQUkscUJBQU8sQ0FBUyxVQUFDLE9BQVksRUFBRSxNQUFXO1lBQzFELEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLEVBQUUsY0FBYyxFQUFFLG1DQUFtQyxFQUFFO2dCQUMvRCxHQUFHLEVBQUUsYUFBSSxHQUFHLEdBQUc7Z0JBQ2YsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsa0JBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxJQUFZO1FBQzNCLElBQUksT0FBTyxHQUFHLElBQUkscUJBQU8sQ0FBUyxVQUFDLE9BQVksRUFBRSxNQUFXO1lBQzFELEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLEVBQUUsY0FBYyxFQUFFLG1DQUFtQyxFQUFFO2dCQUMvRCxHQUFHLEVBQUUsYUFBSSxHQUFHLEdBQUc7Z0JBQ2YsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFFRCxrQkFBZTtJQUNiLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtDQUNqQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAnLi4vdmVuZG9yL3VybCc7XHJcbmltcG9ydCBQcm9taXNlIGZyb20gJy4uL3ZlbmRvci9lczYtcHJvbWlzZSc7XHJcblxyXG5jbGFzcyBodHRwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwb3N0KHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QpOiB2b2lkIHtcclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSkgPT4ge1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICBoZWFkZXI6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXHJcbiAgICAgICAgdXJsOiBwYXRoICsgdXJsLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBwcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0KHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QpOiB2b2lkIHtcclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSkgPT4ge1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICBoZWFkZXI6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXHJcbiAgICAgICAgdXJsOiBwYXRoICsgdXJsLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaHR0cDogbmV3IGh0dHAoKVxyXG59Il19