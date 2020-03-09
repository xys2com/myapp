//定义节点查找
function $(s) {
    let el = document.querySelectorAll(s)
    if (el.length == 1) {
        return el[0]
    } else {
        return el
    }
}
//定义ajax请求
function ajaxReq(url, option, success) {
    arguments.length == 2 && typeof (option) === "function" ? success = option : option = option
    var XHR = new XMLHttpRequest();
    let method = (option.method ? option.method : "GET"),
        type = (option.type ? option.type : "json");
    XHR.abort();
    XHR.open(method, url);
    XHR.responseType = type
    XHR.send()
    XHR.onload = function () {
        typeof (success) === "function" ? success(XHR.response): false
    }
}
//定义范围内的随机数
function random(min, max) {
    if (arguments.length < 2) {
        max = min;
        min = 0;
    }
    if (min > max) {
        var hold = max;
        max = min;
        min = hold;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}