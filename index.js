import{i as p,S as u}from"./assets/vendor-DEu1ZBVp.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="47506069-50a24acca197abc732faaa7f2";function m(a){const r=new URLSearchParams({key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return n.innerHTML='<div div class="loader" ></div>',fetch(`https://pixabay.com/api/?${r}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return n.innerHTML="",s.json()})}function f(a){return a.map(({largeImageURL:r,webformatURL:s,likes:o,views:e,comments:t,downloads:i,id:c,tags:l})=>`<li class="gallery-card" data-id="${c}">
      <a class="gallery-link" href="${r}">
  <img class="pixabay-img" src="${s}" alt="${l}" width="360" height="160"/>
  </a>
  <div class="wrapper-card-text">
  <p class="card-text">Likes <span>${o}</span></p>
   <p class="card-text">Views <span>${e}</span></p>
    <p class="card-text">Comments <span>${t}</span></p>
     <p class="card-text">Downloads <span>${i}</span></p>
  </div>
  </li>`).join("")}function g(){return p.show({theme:"dark",iconUrl:"../img/icons/alert.svg",imageWidth:"24px",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#EF4040"})}const h=document.querySelector(".form-search-img"),n=document.querySelector(".gallery");h.addEventListener("submit",y);function y(a){a.preventDefault(),a.target.elements.titleImage.value.trim()&&(console.log("Everything will be normal"),m(a.target.elements.titleImage.value).then(r=>{r.hits.length===0?g():(n.insertAdjacentHTML("beforeend",f(r.hits)),new u(".gallery a",{captionsData:"alt",captionDelay:"250",className:"wrapper"}))}).catch(r=>{console.log(r)}).finally(()=>{console.log("Success")}))}
//# sourceMappingURL=index.js.map
