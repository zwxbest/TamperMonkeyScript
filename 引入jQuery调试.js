// ==UserScript==
// @name         ��ǰҳ������jQuery
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  null
// @author       zwxbest
// @include         *
// @bug ǰ��С��,��֪��Ϊʲô��������һ��ҳ����html���غü���
// ==/UserScript==
if(typeof jQuery==="undefined")
{
document.body.appendChild(document.createElement('script')).src='http://code.jquery.com/jquery-3.2.1.min.js';
console.log("��ǰҳ��û��jQuery,����jQuery�������");
}

