var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("eWCmQ");var a=n("7lzvS");n("cdfnK");var r=n("c9UGP"),l=(a=n("7lzvS"),n("2nhTy"));const i=document.querySelector("#watched"),d=(document.querySelector("#queue"),document.querySelector(".div"));const c=JSON.parse(localStorage.getItem("watchedFilmsArray"));console.log(c);const s=JSON.parse(localStorage.getItem("queueFilmsArray"));console.log(s),async function(e){const t=await(0,a.default)(e);l.paginat.options.totalItems=t.total_results,l.paginat.options.totalPages=t.total_pages;const o=await(0,r.default)(t);d.insertAdjacentHTML("beforeend",o),l.paginat.pagMake(renderFilmsOnLoadMore)}(1).then((e=>{document.querySelector(".film_list").addEventListener("click",openModal)})),i.addEventListener("click",(0,r.default)(c));
//# sourceMappingURL=library.33e64576.js.map
