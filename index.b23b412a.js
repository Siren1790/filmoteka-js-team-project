var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("ll9qB"),i=o("cBXj4");const d=document.querySelector(".list-films");let l="";const s=document.querySelector(".js-search-form-input"),c=document.querySelector(".js-search-form"),u=document.querySelector(".js-search-badResult");async function a(){setTimeout((()=>u.hidden=!0),2e3)}u.hidden=!0,s.addEventListener("input",(function(){l=s.value})),c.addEventListener("submit",(async function(e){e.preventDefault();const n=new(0,r.Movie)({searchValue:l});if(l){u.hidden=!0;n.fetchSearchMovies().then((e=>{const n=e.results;console.log("Siren",e),n.length>0?d.innerHTML=(0,i.default)(n):(u.hidden=!1,a())}))}else u.hidden=!1,a()}));
//# sourceMappingURL=index.b23b412a.js.map