!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,r){t[e]=r},r.parcelRequired7c6=a);var u=a("bpxeT"),s=a("2TvXO"),i=a("fpMk3"),c=a("j9P1y"),o=a("2gsSa");function f(){return d.apply(this,arguments)}function d(){return(d=e(u)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){return o.refs.searchBadResult.hidden=!0}),2e3);case 1:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function l(){return(l=e(u)(e(s).mark((function r(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),search=n.currentTarget.searchQuery.value,n.currentTarget.searchQuery.value?(o.refs.searchBadResult.hidden=!0,i.movie.setSearchValue(n.currentTarget.searchQuery.value),n.currentTarget.searchQuery.value="",i.movie.fetchSearchMovies().then((function(e){var r=e.results;r.length>0?o.refs.markSearchFilms.innerHTML=(0,c.default)(r):(o.refs.searchBadResult.hidden=!1,f())}))):(o.refs.searchBadResult.hidden=!1,f());case 3:case"end":return e.stop()}}),r)})))).apply(this,arguments)}o.refs.searchBadResult.hidden=!0,o.refs.searchButton.addEventListener("submit",(function(e){return l.apply(this,arguments)}))}();
//# sourceMappingURL=index.a7d4d613.js.map
