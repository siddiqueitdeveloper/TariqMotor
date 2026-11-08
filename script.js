// Tariq Motors multi-page prototype settings.
// Tariq Motors contact settings.
const WHATSAPP_NUMBERS = [
 {num:"923008005053",display:"+92 300 800 5053"},
 {num:"923004542833",display:"+92 300 454 2833"}
];
const WHATSAPP_NUMBER = WHATSAPP_NUMBERS[0].num; // default / fallback
const OFFICE = {lat:31.031391,lng:73.854309};
const bikeData = [
 {brand:"RoadKing",name:"RoadKing E-Bike",tag:"FEATURED BRAND",specs:["Electric bike","Ask for range"],color:"#c92732",id:"roadking-model"},
 {brand:"Volt",name:"Volt Electric Bike",tag:"VOLT BY ROAD PRINCE",specs:["Electric bike","Ask for battery details"],color:"#236a50",id:"volt-model"},
 {brand:"Superstar",name:"Superstar E-Bike",tag:"FEATURED BRAND",specs:["Electric bike","Ask for specifications"],color:"#295d9b",id:"superstar-model"}
];
const slides=[
 {brand:"ROADKING",title:"Ride into<br><em>the future.</em>",description:"Explore electric bikes from brands you know, with support you can trust.",bg:"radial-gradient(ellipse at 76% 43%,#565a61 0,#2a2d34 28%,#16181e 64%,#101216 100%)"},
 {brand:"VOLT BY ROAD PRINCE",title:"Power your<br><em>everyday.</em>",description:"Meet the Volt range and find an electric bike for your everyday journey.",bg:"radial-gradient(ellipse at 76% 43%,#52615f 0,#263039 28%,#15191e 64%,#101216 100%)"},
 {brand:"SUPERSTAR",title:"Your next ride<br>starts <em>here.</em>",description:"Discover more choice with electric bikes from Superstar and other brands.",bg:"radial-gradient(ellipse at 76% 43%,#62514e 0,#342528 28%,#191519 64%,#101216 100%)"}
];
function waUrl(text,num=WHATSAPP_NUMBER){return `https://wa.me/${num}?text=${encodeURIComponent(text)}`}
function bikeMessage(b){return `Assalam-o-Alaikum Tariq Motors! I am interested in this e-bike.\n\nBrand: ${b.brand==="Volt"?"Volt by Road Prince":b.brand}\nModel: ${b.name}\nPlease share the latest price, availability, specifications, and warranty details.`}
function generalMessage(){return "Assalam-o-Alaikum Tariq Motors! I would like information about your available electric bikes and brands."}
function bikeSvg(color){return `<svg viewBox="0 0 360 150" aria-label="Electric bike illustration" role="img"><g fill="none" stroke="#202329" stroke-width="5"><circle cx="80" cy="112" r="33"/><circle cx="280" cy="112" r="33"/><circle cx="80" cy="112" r="25" stroke="#777c84" stroke-width="1.5"/><circle cx="280" cy="112" r="25" stroke="#777c84" stroke-width="1.5"/><path d="M80 112 L143 112 L116 61 L80 112 M143 112 L190 61 L280 112 M116 61 L190 61 L213 112 L143 112" stroke="${color}" stroke-width="8" stroke-linejoin="round"/><path d="M185 60 L207 35 L234 35 M204 35 L195 24 M109 60 L96 44 L76 44" stroke="#202329" stroke-width="5" stroke-linecap="round"/><path d="M143 112 L132 68" stroke="#555a62" stroke-width="5"/></g><path d="M115 51 Q145 37 185 49 L207 63 L192 82 L139 81 L121 67Z" fill="${color}" stroke="#17191e" stroke-width="2"/><path d="M129 46 L169 42 L188 52 L150 58Z" fill="#2c3038"/><path d="M199 59 L218 61 L231 76 L208 80Z" fill="${color}"/><path d="M232 76 L245 77" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`}
function cardMarkup(b){return `<article class="card"><div class="art"><span class="badge">${b.tag}</span>${bikeSvg(b.color)}</div><div class="card-body"><p class="brand-name">${b.brand==="Volt"?"Volt by Road Prince":b.brand}</p><h3>${b.name}</h3><div class="specs">${b.specs.map(x=>`<span>${x}</span>`).join("")}</div><div class="card-actions"><a class="detail-link" href="bike-details.html?id=${encodeURIComponent(b.id)}">View Details ↗</a><a class="wa-link" target="_blank" rel="noopener" href="${waUrl(bikeMessage(b))}">WhatsApp Enquiry ↗</a></div></div></article>`}
function renderInto(el,filter="all"){if(!el)return;let arr=bikeData.filter(b=>filter==="all"||b.brand===filter);el.innerHTML=arr.length?arr.map(cardMarkup).join(""):'<div class="empty">No models are listed for this brand yet. Contact us to ask about availability.</div>'}
function setupCarousel(){let index=0;const hero=document.getElementById("hero");if(!hero)return;function show(i){index=(i+slides.length)%slides.length;let s=slides[index];hero.style.background=s.bg;document.getElementById("heroTitle").innerHTML=s.title;document.getElementById("heroDescription").textContent=s.description;document.getElementById("slideCount").textContent=`0${index+1} / 03   ${s.brand}`;document.querySelectorAll(".dot").forEach((d,n)=>d.classList.toggle("active",n===index));}document.querySelectorAll(".dot").forEach(d=>d.addEventListener("click",()=>{show(+d.dataset.slide);restart()}));document.getElementById("prev").addEventListener("click",()=>{show(index-1);restart()});document.getElementById("next").addEventListener("click",()=>{show(index+1);restart()});let timer=setInterval(()=>show(index+1),5500);function restart(){clearInterval(timer);timer=setInterval(()=>show(index+1),5500)}}
document.querySelectorAll("[data-general-wa]").forEach(a=>{a.href=waUrl(generalMessage());a.target="_blank";a.rel="noopener"});
document.querySelectorAll("[data-brand-wa]").forEach(a=>{let brand=a.dataset.brandWa;a.href=waUrl(`Assalam-o-Alaikum Tariq Motors! I am interested in ${brand==="Volt"?"Volt by Road Prince":brand} electric bikes. Please share available models, latest prices, specifications, and warranty details.`);a.target="_blank";a.rel="noopener"});
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
const menu=document.getElementById("menuBtn");if(menu)menu.addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
const page=(location.pathname.split("/").pop()||"index.html").replace(".html","");
document.querySelectorAll("[data-nav]").forEach(a=>{const key=a.dataset.nav;if((page==="index"&&key==="home")||(page.startsWith("brand-")&&key==="brands")||(page==="bike-details"&&key==="bikes")||page===key)a.classList.add("active")});
renderInto(document.getElementById("homeBikes"));
const allGrid=document.getElementById("allBikes");if(allGrid){const sel=document.getElementById("bikeFilter");const params=new URLSearchParams(location.search);const initial=params.get("brand")||"all";if(["RoadKing","Volt","Superstar"].includes(initial))sel.value=initial;renderInto(allGrid,sel.value);sel.addEventListener("change",()=>renderInto(allGrid,sel.value))}
document.querySelectorAll("[data-brand-grid]").forEach(el=>renderInto(el,el.dataset.brandGrid));
function setupDetail(){const art=document.getElementById("detailArt");if(!art)return;const params=new URLSearchParams(location.search);const id=params.get("id");const bike=bikeData.find(b=>b.id===id)||bikeData[0];document.getElementById("detailTitle").innerHTML=`${bike.name.split(" ").slice(0,2).join(" ")} <em>details.</em>`;document.getElementById("detailBrand").textContent=bike.brand==="Volt"?"VOLT BY ROAD PRINCE":bike.brand.toUpperCase();document.getElementById("detailName").textContent=bike.name;document.getElementById("detailBrandValue").textContent=bike.brand==="Volt"?"Volt by Road Prince":bike.brand;document.getElementById("detailModelValue").textContent=bike.name;document.getElementById("detailDescription").textContent="Contact Tariq Motors for verified specifications, colours, availability, and applicable warranty information.";art.innerHTML=bikeSvg(bike.color);document.getElementById("detailWhatsapp").href=waUrl(bikeMessage(bike));document.getElementById("detailWhatsapp").target="_blank";renderInto(document.getElementById("relatedBikes"),"all")}
setupDetail();
const form=document.getElementById("contactForm");if(form)form.addEventListener("submit",e=>{e.preventDefault();const name=document.getElementById("customerName").value.trim();const phone=document.getElementById("customerPhone").value.trim();const brand=document.getElementById("customerBrand").value;const model=document.getElementById("customerModel").value.trim();const message=document.getElementById("customerMessage").value.trim();const body=`Assalam-o-Alaikum Tariq Motors! I would like to enquire.\n\nName: ${name}\nPhone: ${phone||"Not provided"}\nBrand: ${brand}\nModel: ${model||"Not specified"}\nMessage: ${message||"Please share more information."}`;openWaChooser(body)});

// ---- WhatsApp number chooser (two dealership numbers) ----
function openWaChooser(text){
 let old=document.getElementById("waChooser");if(old)old.remove();
 const m=document.createElement("div");m.id="waChooser";m.className="wa-modal";m.setAttribute("role","dialog");m.setAttribute("aria-modal","true");m.setAttribute("aria-label","Choose a WhatsApp number");
 m.innerHTML=`<div class="wa-box"><button class="wa-close" aria-label="Close">×</button><p class="eyebrow red">CHAT WITH TARIQ MOTORS</p><h3>Choose a WhatsApp number</h3>${WHATSAPP_NUMBERS.map((n,i)=>`<a class="wa-option" target="_blank" rel="noopener" href="${waUrl(text,n.num)}"><span>◔</span><div><strong>${n.display}</strong><small>Number ${i+1}</small></div><b>↗</b></a>`).join("")}</div>`;
 document.body.appendChild(m);
 const close=()=>m.remove();
 m.addEventListener("click",e=>{if(e.target===m||e.target.closest(".wa-close")||e.target.closest(".wa-option"))close()});
 document.addEventListener("keydown",function esc(e){if(e.key==="Escape"){close();document.removeEventListener("keydown",esc)}});
}
document.addEventListener("click",e=>{
 const a=e.target.closest('a[href^="https://wa.me/"]');
 if(!a||a.classList.contains("wa-option")||a.hasAttribute("data-direct"))return;
 e.preventDefault();
 const t=new URL(a.href).searchParams.get("text")||generalMessage();
 openWaChooser(t);
});
