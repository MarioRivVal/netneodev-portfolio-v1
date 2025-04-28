(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const S=()=>`
        <svg
        class="icon search-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="#ABB7C2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 21L16.7 16.7"
          stroke="#ABB7C2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>


`,C=()=>`
        <nav class="nav">
            <a id="homelink">
                <p class="logo"><span>find</span><span>it</span></p>
            </a>
            <div class ="nav__form-box">
                <form class="search-container">
                     <button class="icon-box" id="searchBtn">
                        ${S()}
                    </button>
               
                <input type="text" class="search-input" placeholder="OTHER CATEGORIES...">  
                </form>
                <div class="mode-box">
                    <button class="icon-box" id="themeBtn"></button>
                </div>
            </div>   
        </nav>
`,I=()=>`
        <svg
        class="icon sun-icon"
        viewBox="0 0 55 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="27.5001"
          cy="28"
          r="9.16667"
          stroke="white"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M45.8334 28H48.1251"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M6.875 28H9.16667"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M27.5 46.3333L27.5 48.625"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M27.5 7.375L27.5 9.66667"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M40.4635 40.9636L42.084 42.5841"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M12.916 13.4158L14.5365 15.0363"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M14.5365 40.9636L12.916 42.5841"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M42.084 13.4158L40.4635 15.0363"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
`,M=()=>`
    <svg
         class="icon moon-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.9506 12.9489L21.4478 13.001C21.4699 12.7904 21.3569 12.5887 21.1657 12.4976C20.9745 12.4065 20.7467 12.4457 20.597 12.5954L20.9506 12.9489ZM11.0511 3.04944L11.4046 3.40305C11.5544 3.25332 11.5936 3.02547 11.5024 2.83429C11.4113 2.64311 11.2096 2.53009 10.999 2.55216L11.0511 3.04944ZM20.597 12.5954C19.4201 13.7727 17.7955 14.5 16 14.5V15.5C18.0714 15.5 19.9474 14.6596 21.3042 13.3024L20.597 12.5954ZM16 14.5C12.4102 14.5 9.5 11.5899 9.5 8.00001H8.5C8.5 12.1421 11.8579 15.5 16 15.5V14.5ZM9.5 8.00001C9.5 6.20456 10.2273 4.57993 11.4046 3.40305L10.6976 2.69583C9.34038 4.05258 8.5 5.92863 8.5 8.00001H9.5ZM3.5 12C3.5 7.6086 6.83057 3.99443 11.1032 3.54672L10.999 2.55216C6.22256 3.05267 2.5 7.09129 2.5 12H3.5ZM12 20.5C7.30558 20.5 3.5 16.6944 3.5 12H2.5C2.5 17.2467 6.75329 21.5 12 21.5V20.5ZM20.4533 12.8968C20.0056 17.1694 16.3914 20.5 12 20.5V21.5C16.9087 21.5 20.9473 17.7775 21.4478 13.001L20.4533 12.8968Z"
            fill="#1a1a1a"
          />
        </svg>
   
`,m=()=>{const e=document.querySelector("#themeBtn"),t=document.body.classList.contains("light-theme");e.innerHTML=t?`${M()}`:` ${I()}`},f=()=>{const e=document.querySelector("#themeBtn");e&&(m(),e.addEventListener("click",()=>{document.body.classList.toggle("light-theme"),m();const t=document.body.classList.contains("light-theme");localStorage.setItem("theme",t?"light-theme":"dark-theme")}))},v=(e,t)=>{document.querySelector(e).addEventListener("click",()=>t())},w=e=>{e.innerHTML=""},y=e=>{const t=document.querySelector(".result__container"),o=document.createElement("P");o.classList.add("alert-message"),o.textContent=e,!document.querySelector(".alert-message")&&(w(t),t.append(o),setTimeout(()=>{o.remove()},2e3))},_="https://api.unsplash.com",k="6MN74ttSAtCohblCFL6m-A4TGmkseQ3HqluDYpKUmHM",x="unsplash_images_group_1",B="unsplash_images_group_2",$="unsplash_images_expiration",T=24*60*60*1e3,g=async(e,t)=>{const o=t===1?x:B,n=i(o);if(n)return n;console.log("Making a request to Unsplash...");try{const s=await fetch(`${_}/photos/random?count=${e}&client_id=${k}`);if(!s.ok)throw new Error(`Error al obtener imágenes: ${s.status}`);const c=(await s.json()).map(l=>l.urls.small);return b(o,c),c}catch(s){return console.error("Error en fetchImages:",s),[]}},L=async e=>{const t=i(`${e}Images`);if(t)return t;try{console.log(`Searching for images for the category on Unsplash: ${e}`);const o=await fetch(`${_}/search/photos?query=${e}&per_page=30&client_id=${k}`);if(!o.ok)throw new Error(`Error searching for images for the category: ${o.status}`);const n=await o.json();if(n.results&&n.results.length>0){const s=n.results.map(r=>r.urls.small);return b(`${e}Images`,s),s}else y(`Any image for ${e}`)}catch(o){console.error(`Error en fetchCategoryImage para ${e}:`,o)}},q=()=>{const e=localStorage.getItem($);return!e||Date.now()>parseInt(e,10)},h=e=>e.map(t=>({item:t,sort:Math.random()})).sort((t,o)=>t.sort-o.sort).map(({item:t})=>t),i=e=>{if(!q()&&localStorage.getItem(e))return console.log("Loading images from local storage..."),JSON.parse(localStorage.getItem(e))},b=(e,t)=>{localStorage.setItem(e,JSON.stringify(t)),localStorage.setItem($,Date.now()+T)},A=()=>`
          <svg
          class="icon download-icon"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 22.75H19.5M13 3.25V18.4167M13 18.4167L18.4167 13M13 18.4167L7.58333 13"
            stroke="#f0f0f0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
`,a=(e,t)=>{const o=t.map((n,s)=>`
        <div class ="result__img"  style="--i:${s+1}">
            <img src="${n}" alt="image">
            <button class="icon-box" id="downloadBtn">
                ${A()}
             </button>
        </div>
        `).join("");return`
    <div class="result__box result__box--${e}">
        ${o} 
    </div>
    `},O=()=>{document.querySelectorAll("#downloadBtn").forEach(t=>t.addEventListener("click",()=>{console.log("Download functionality, next time! 😁")}))},H=()=>{let e=[];for(let t=1;t<=7;t++)e=[...e,{container:document.querySelector(`.result__box--${t}`),items:document.querySelectorAll(`.result__box--${t} .result__img`),threshold:.3}];return e},j=function(e){e.forEach(({container:t,items:o,threshold:n})=>{t&&P(t,o,{root:null,threshold:n})})},P=(e,t,o)=>{const n=new IntersectionObserver(s=>{const[r]=s;r.isIntersecting&&(t.forEach(c=>{c.classList.add("show")}),n.disconnect())},o);n.observe(e)},u=(e=[])=>{const t=a(1,e.slice(0,5)),o=a(2,e.slice(5,8)),n=a(3,e.slice(8,12)),s=a(4,e.slice(12,17)),r=a(5,e.slice(17,20)),c=a(6,e.slice(20,24)),l=a(7,e.slice(24,29)),d=document.querySelector(".result__container");d&&w(d),d.innerHTML=`
      ${t}
      ${o}
      ${n}
      ${s}
      ${r}
      ${c}
      ${l}     
`,setTimeout(()=>{j(H()),O()},500)},R=()=>{document.querySelectorAll(".categories_card").forEach(e=>e.addEventListener("click",async t=>{const o=await L(t.currentTarget.dataset.category);u(o)}))},Z=e=>`
    <div class="categories_card" data-category="${e}">
        <picture>
            <source srcset="img/categories/${e}-light.webp" type="image/webp">
            <img src="img/categories/${e}.png" alt="${e} image">
        </picture>
        <div class="categories_card-category">
            <p>${e}</p>
        </div>
    </div>
`,N=()=>`
    <section class="section categories">
        <h3 class="tertiary-title">Explora por categoria</h3>
        <div class="categories_box">
           ${["comida","moda","tecnologia","paisaje","arte","animales","viajes","musica","deporte","negocios","arquitectura","naturaleza"].map(o=>`
       ${Z(o)}
     `).join("")}
        </div>    
    </section>
    `,D=()=>{const e=document.querySelector("#searchBtn"),t=document.querySelector(".search-input");e.addEventListener("click",async o=>{o.preventDefault();const n=t.value.trim();if(n){const s=await L(n);u(s)}else y("Please enter a category")})},G=async()=>{const e=document.querySelector("#main"),t=i("unsplash_images_group_1"),o=i("unsplash_images_group_2"),n=[...t,...o];e.innerHTML=`
        ${C()}
        ${N()}
        <section class="section results">
          <h3 class="tertiary-title">Resultados</h3>
          <div class="result__container">
          </div>
        </section>
    `,v("#homelink",E),f(),u(n),D(),R()},K=(e,t,o)=>`
        <a  id="${e}" class="btn">${t}</a>
`,F=(e,t)=>`
    <div class="slider__item" style="--position: ${t}">
        <img src="${e}" alt="image">
    </div>
`,p=(e,t=!1)=>`
     <div class="slider " reverse="${t}" >
        <div class="slider__list">
          ${e.map((o,n)=>F(o,n-16)).join("")} 
        </div>
      </div>
       
  `,E=async()=>{const e=document.querySelector("#main"),t=await g(18,1),o=await g(18,2),n=h(t),s=h(o);e.innerHTML=`
    <section class="home">
      ${p(n)} 
        <div class="home_banner">
            <div class="home__title">
                <h2 class="secondary-title">imagine</h2>
                <h1 class="primary-title"><span>find</span><span>it</span></h1>
            </div>
            <div class="mode-box">
                ${K("landinglink","enter")}
                <button class="icon-box" id="themeBtn">
                </button>
            </div>
        </div>
         ${p(s,!0)}
        
    </section>
`,v("#landinglink",G),f()},V=()=>{const e=localStorage.getItem("theme");console.log(e),e==="light-theme"?document.body.classList.add("light-theme"):document.body.classList.remove("light-theme")};V();E();
