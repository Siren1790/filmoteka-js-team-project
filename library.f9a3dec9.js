!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a),a("6qSli"),a("9xS5m"),a("16XXu"),a("3aQJ8");var n=a("8mwQJ"),d=a("2gsSa"),i=document.querySelectorAll(".header-btn"),s=i[0],l=i[1];function o(e){d.refs.key="","WATCHED"===e.target.textContent?(d.refs.key=d.refsStorage.STORAGE_KEY_WATCHED,s.classList.add("header-btn-active"),l.classList.remove("header-btn-active")):(d.refs.key=d.refsStorage.STORAGE_KEY_QUEUE,s.classList.remove("header-btn-active"),l.classList.add("header-btn-active")),(0,n.default)()}s.addEventListener("click",o),l.addEventListener("click",o),d.refs.flag=!0,s.classList.add("header-btn-active"),(0,n.default)()}();
//# sourceMappingURL=library.f9a3dec9.js.map
