var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var r=n("ll9qB"),s=n("kgjKk"),i=n("cBXj4"),o=(r=n("ll9qB"),i=n("cBXj4"),n("hbEqn"));s=n("kgjKk");const l=()=>{s.refs.preloader.classList.remove("show-preloader")},c=()=>{s.refs.preloader.classList.add("show-preloader")};function d(e){const t={};return e.genres.forEach((({id:e,name:a})=>{t[e]=a})),t}function u(e){const t=JSON.stringify(e);localStorage.setItem("genres",t)}async function f(){c();const e=await r.movie.fetchTrendingMovies(),t=await r.movie.fetchMovieGenres();(0,o.saveLocalStorageMovies)(e),r.movie.setCurrentPage(e.page),r.movie.setTotalPages(e.total_pages);u(d(t));let a=(0,o.getLocalStorage)();(0,i.default)(a.results),v(),l()}n("ll9qB"),f(),document.addEventListener("click",(e=>{const t=e.target.closest(".item-pagination");if(t&&t.parentElement.classList.contains(s.refs.paginationWrapperNode.classList.value)){if("..."===t.textContent)return;r.movie.fetchTrendingMovies(parseInt(t.textContent)).then((e=>(v(),renderMovies(e.results))))}}));const g=e=>e>=5?["...",e-2,e-1]:e>2&&e<5?["...",e-1]:e<=2?[]:[e-2,e-1],p=e=>[e+1,e+2,"..."],v=()=>{s.refs.paginationWrapperNode.innerHTML="";let e=r.movie.getCurrentPage(),t=r.movie.getTotalPages();s.refs.lastPaginationItemNode.textContent=t;const a=((e,t)=>1==e?[2,3,4,5,6]:e==t?[t-5,t-4,t-3,t-2,t-1]:[g(e),e,p(e)])(e,t);let n;n=a.flat(1).map((t=>`<li class="item-pagination"><button class="btn-pagination ${e===t?"active":""}">${t}</button></li>`)),h(n)},h=e=>{s.refs.paginationWrapperNode.childNodes.length>0&&(s.refs.paginationWrapperNode.innerHTML=null),0!==e.length&&s.refs.paginationWrapperNode.insertAdjacentHTML("afterbegin",e.join("").replace(",","."))};[s.refs.prevPaginationNode,s.refs.nextPaginationNode].map((e=>{e.addEventListener("click",(async()=>{e.classList.value.includes("prev")?r.movie.currentPage-=1:r.movie.currentPage+=1;if(r.movie.firstRequest)f();else{const e=await r.movie.fetchSearchMovies();(0,i.default)(e.results)}}))}));r=n("ll9qB"),i=n("cBXj4"),s=n("kgjKk"),o=n("hbEqn");async function m(){setTimeout((()=>s.refs.searchBadResult.hidden=!0),2e3)}s.refs.searchBadResult.hidden=!0,s.refs.searchButton.addEventListener("submit",(async function(e){if(e.preventDefault(),c(),e.currentTarget.searchQuery.value){s.refs.searchBadResult.hidden=!0,r.movie.setSearchValue(e.currentTarget.searchQuery.value),e.currentTarget.searchQuery.value="",r.movie.resetPage();const t=await r.movie.fetchSearchMovies(),a=t.results;if(r.movie.setCurrentPage(t.page),r.movie.setTotalPages(t.total_pages),a.length>0){(0,o.saveLocalStorageMovies)(t);let e=(0,o.getLocalStorage)();(0,i.default)(e.results),r.movie.firstRequest=!1,v()}else s.refs.searchBadResult.hidden=!1,m()}else s.refs.searchBadResult.hidden=!1,m();l()})),n("2JGbT"),n("hZJKW"),n("hbEqn"),n("hhHpI"),n("hbEqn");
//# sourceMappingURL=index.f8096bac.js.map
