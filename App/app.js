"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("./vendor/url");
var http_1 = require("./utils/http");
App({
    onLaunch: function () {
        var _this = this;
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (res) {
                console.log(res.code);
            },
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res);
                            }
                        },
                    });
                }
            },
        });
    },
    globalData: {
        userInfo: null,
        url: url_1.default
    },
    http: http_1.default
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esb0NBQStCO0FBQy9CLHFDQUFnQztBQUVoQyxHQUFHLENBQWE7SUFDZCxRQUFRO1FBQVIsaUJBaUNDO1FBL0JDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDeEIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFHL0IsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFdkIsQ0FBQztTQUNGLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUVyQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBRVYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTs0QkFJdkMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7Z0NBQzlCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQTs2QkFDaEM7d0JBQ0gsQ0FBQztxQkFDRixDQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRSxJQUFJO1FBQ2QsR0FBRyxlQUFBO0tBQ0o7SUFDRCxJQUFJLEVBQUUsY0FBSTtDQUNYLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xuaW1wb3J0IHVybCBmcm9tICcuL3ZlbmRvci91cmwnO1xuaW1wb3J0IGh0dHAgZnJvbSAnLi91dGlscy9odHRwJztcblxuQXBwPElBcHBPcHRpb24+KHtcbiAgb25MYXVuY2goKSB7XG4gICAgLy8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXG4gICAgY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXG5cbiAgICAvLyDnmbvlvZVcbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSlcbiAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcbiAgICAgIH0sXG4gICAgfSlcbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXG4gICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgLy8g5Y+v5Lul5bCGIHJlcyDlj5HpgIHnu5nlkI7lj7Dop6PnoIHlh7ogdW5pb25JZFxuICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cblxuICAgICAgICAgICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pXG4gIH0sXG4gIGdsb2JhbERhdGE6IHtcbiAgICB1c2VySW5mbzogbnVsbCxcbiAgICB1cmxcbiAgfSxcbiAgaHR0cDogaHR0cFxufSkiXX0=