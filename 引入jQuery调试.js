// ==UserScript==
// @name         当前页面引入jQuery
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  null
// @author       zwxbest
// @include         *
// @bug 前端小白,不知道为什么网易新闻一个页面多个html加载好几次
// ==/UserScript==
if(typeof jQuery==="undefined")
{
document.body.appendChild(document.createElement('script')).src='http://code.jquery.com/jquery-3.2.1.min.js';
console.log("当前页面没有jQuery,引入jQuery方便调试");
}

