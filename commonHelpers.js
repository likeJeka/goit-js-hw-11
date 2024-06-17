import{S as u,i as a}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="https://pixabay.com",m="/api/",g="44411591-028a91b939914bc74d09bbb4e";function f(s,t=1,o=20){const l=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:o}),e=`${d}${m}?${l.toString()}`;return fetch(e).then(r=>r.json())}function h(s){const{largeImageURL:t,webformatURL:o,tags:l,likes:e,views:r,comments:i,downloads:c}=s;return`
      <li class="gallery-item">
        <a href="${t}" class="gallery-link" data-lightbox="gallery">
          <img src="${o}" alt="${l}" class="gallery-img">
        </a>
        <div class="gallery-info">
          <p class="tags">Tags: ${l}</p>
          <ul class="stats">
            <li>Likes: ${e}</li>
            <li>Views: ${r}</li>
            <li>Comments: ${i}</li>
            <li>Downloads: ${c}</li>
          </ul>
        </div>
      </li>
    `}function y(s){return s.map(t=>h(t)).join("")}const n={formEl:document.querySelector(".search-form"),inputEl:document.querySelector("input"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")},p=new u(".gallery a");n.formEl.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){a.show({message:"Enter the value",color:"red"}),n.galleryEl.innerHTML="";return}L(),f(t).then(o=>{if(o.hits.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red"}),n.galleryEl.innerHTML="";return}n.galleryEl.innerHTML="";const l=y(o.hits);n.galleryEl.insertAdjacentHTML("beforeend",l),p.refresh()}).catch(o=>{console.log("Error fetching images:",o)}).finally(()=>{b()})});function L(){n.loader.classList.remove("hidden")}function b(){n.loader.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
