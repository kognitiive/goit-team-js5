!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var a=o("bpxeT"),u=o("2TvXO"),l=o("iU1Pc");o("7qhbT"),o("l5QUO");var i=o("26XG5");o("7qhbT"),o("jcFG7");var c=o("5xtVg"),d=document.querySelector("#watched"),f=(document.querySelector("#queue"),document.querySelector(".div")),s=JSON.parse(localStorage.getItem("watchedFilmsArray"));console.log(s);var p=JSON.parse(localStorage.getItem("queueFilmsArray"));function v(){return(v=e(a)(e(u).mark((function t(r){var n,o;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=s){t.next=3;break}return t.abrupt("return",e(l).Notify.info("You don't have any films at WATCHED"));case 3:return t.next=5,(0,i.default)(n);case 5:o=t.sent,f.insertAdjacentHTML("beforeend",o);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log(p),function(e){return v.apply(this,arguments)}(1).then((function(e){document.querySelector(".film_list").addEventListener("click",c.default)})),d.addEventListener("click",(0,i.default)(s))}();
//# sourceMappingURL=library.cbc376de.js.map
