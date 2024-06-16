import{i as n,S as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="https://pixabay.com",m="/api/",g="44411591-028a91b939914bc74d09bbb4e";function f(s,t=1,o=20){const a=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:o}),e=`${d}${m}?${a.toString()}`;return fetch(e).then(r=>r.json())}function h(s){const{largeImageURL:t,webformatURL:o,tags:a,likes:e,views:r,comments:l,downloads:c}=s;return`
      <li class="gallery-item">
        <a href="${t}" class="gallery-link" data-lightbox="gallery">
          <img src="${o}" alt="${a}" class="gallery-img">
        </a>
        <div class="gallery-info">
          <p class="tags">Tags: ${a}</p>
          <ul class="stats">
            <li>Likes: ${e}</li>
            <li>Views: ${r}</li>
            <li>Comments: ${l}</li>
            <li>Downloads: ${c}</li>
          </ul>
        </div>
      </li>
    `}function y(s){return s.map(t=>h(t)).join("")}const i={formEl:document.querySelector(".search-form"),inputEl:document.querySelector("input"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.formEl.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.searchQuery.value;if(!t){n.show({message:'"Sorry, there are no images matching your search query. Please try again!" ',color:"red"});return}p(),f(t).then(o=>{if(o.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}i.galleryEl.innerHTML="";const a=y(o.hits);i.galleryEl.insertAdjacentHTML("beforeend",a),new u(".gallery a").refresh()}).catch(o=>{console.log("Error fetching images:",o)}).finally(()=>{L()})});function p(){i.loader.classList.remove("hidden")}function L(){i.loader.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
