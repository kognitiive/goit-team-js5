function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired7c6=a),a.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"1zJhX":"library.358f9705.js","gVmmC":"nopicture.d49ef4fe.jpg","5ZPII":"index.0720f79b.js"}')),a("9B8F0"),a("ddWAF");var l=a("bTcpz");a("2nhTy"),a("gWCdu");var d;d=new URL(a("kyEFX").resolve("gVmmC"),import.meta.url).toString(),a("glGLq");let s=document.querySelector(".film_list");const o=document.querySelector("#watched"),c=document.querySelector("#queue"),u=document.querySelector(".film_library_list"),f=JSON.parse(localStorage.getItem("watchedFilmsArray")),m=JSON.parse(localStorage.getItem("queueFilmsArray")),g=new Date;o.addEventListener("click",_),c.addEventListener("click",p),null!==f&&0!==f.length||null!==m&&0!==m.length?null===f||0===f.length?p():_():u.innerHTML=`<img src="${t(d)}" alt="Frai speaking" />`;function b(e){return e.map((({id:e,poster_path:t,title:n,genres:r,release_date:i})=>`\n     <li class="film_item list" data-action='${e}'>\n        <a class="film-link link js-open-modal" data-modal="1">\n            <img src=https://image.tmdb.org/t/p/w500${t} alt="${n}" class="film_image" data-id="${e}"/>\n         </a>\n         <h1 class="film_title">${n}</h1>\n         <p class="film_desc">${r.map((e=>e.name))} | ${g.getFullYear(i)}</p>\n     </li>\n `)).join("")}function _(){null!==f&&0!==f.length?(u.innerHTML=" ",u.insertAdjacentHTML("beforeend",b(f)),s.addEventListener("click",l.default),o.classList.add("button__header-active"),o.disabled=!0,c.classList.remove("button__header-active"),c.disabled=!1):(u.innerHTML=`<img src="${t(d)}" alt="Frai speaking" />`,o.classList.add("button__header-active"),o.disabled=!0,c.classList.remove("button__header-active"),c.disabled=!1)}function p(){null!==m&&0!==m.length?(u.innerHTML=" ",u.insertAdjacentHTML("beforeend",b(m)),s.addEventListener("click",l.default),c.classList.add("button__header-active"),c.disabled=!0,o.classList.remove("button__header-active"),o.disabled=!1):(u.innerHTML=`<img src="${t(d)}" alt="Frai speaking" />`,c.classList.add("button__header-active"),c.disabled=!0,o.classList.remove("button__header-active"),o.disabled=!1)}
//# sourceMappingURL=library.358f9705.js.map
