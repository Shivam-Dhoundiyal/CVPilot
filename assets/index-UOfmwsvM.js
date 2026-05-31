(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("main-cv-card"),e=document.querySelectorAll(".template-grid-item"),t=document.querySelectorAll(".toolbar-btn"),r=document.getElementById("ats-score-number"),i=document.getElementById("ats-gauge-circle"),o=document.getElementById("ats-match-badge"),a=document.getElementById("hero-cta-build"),l=document.getElementById("hero-cta-example"),u=document.getElementById("pricing-billing-switch"),f=document.getElementById("toggle-monthly"),y=document.getElementById("toggle-yearly"),w=document.getElementById("price-pro"),S=document.getElementById("price-exec"),L=document.getElementById("period-pro"),M=document.getElementById("period-exec"),H=document.querySelectorAll(".faq-trigger"),B=document.getElementById("newsletter-form"),ne=document.getElementById("newsletter-email"),Q={summary:"Results-driven marketing manager with 5+ years of experience in digital marketing, brand strategy, and campaign management. Proven track record of increasing brand awareness and driving growth through data-driven strategies.",skills:["Digital Marketing","SEO","Google Analytics","Social Media","Content Strategy","Email Marketing","Project Management","Data Analysis"],atsScores:{1:95,2:92,3:89,4:97,5:94,6:91,7:100,8:99}},ee={summary:"✦ AI OPTIMIZED: Highly accomplished Marketing Manager with 5+ years driving high-impact campaigns, leading agile teams of 6, and administering $500K+ budgets. Expert in leveraging SEO, content strategy, and Google Analytics to scale organic website traffic by 45% and accelerate high-quality lead generation by 35%.",skills:["Digital Marketing","SEO Optimization","Google Analytics","Social Media ROI","Content Strategy","Email Marketing Campaigns","Project Management","Data Analysis & ROI"]};let he="1",Pe=!1,ae=!1;_(Q.atsScores[1]),E(),e.forEach(d=>{d.addEventListener("click",()=>{const g=d.getAttribute("data-template");g!==he&&(e.forEach(v=>v.classList.remove("active")),d.classList.add("active"),n.style.opacity="0",n.style.transform="translateY(10px) scale(0.98)",setTimeout(()=>{n.className=`cv-card template-${g}`,he=g,b(g);const v=Pe?98:Q.atsScores[g];_(v),n.style.opacity="1",n.style.transform="translateY(0) scale(1)"},300))})});function b(d){const g=n.querySelector(".cv-header"),v=n.querySelector(".cv-header-details"),I=n.querySelector(".cv-photo-container"),R=n.querySelector(".cv-body"),N=n.querySelector(".cv-main-col"),x=n.querySelector(".cv-side-col"),F=document.getElementById("cv-name-text"),z=document.getElementById("cv-title-text"),oe=n.querySelector(".cv-contact-list"),ye=n.querySelector(".cv-skills-grid").parentElement,be=oe.parentElement;if(R.appendChild(N),R.appendChild(x),x.appendChild(be),be.appendChild(oe),x.appendChild(ye),g&&(g.style.display=""),I&&(I.style.display=""),d==="1")v&&F&&z&&(v.appendChild(F),v.appendChild(z)),g&&I&&g.appendChild(I);else if(d==="2"){g&&(g.style.display="none");const O=document.createElement("div");O.className="cv-side-bio-block",O.style.display="flex",O.style.flexDirection="column",O.style.alignItems="center",O.style.marginBottom="16px",O.style.width="100%",I&&O.appendChild(I),F&&O.appendChild(F),z&&O.appendChild(z),x.insertBefore(O,x.firstChild)}else if(d==="3"){g&&(g.style.display="none"),I&&(I.style.display="none");const O=document.createElement("div");O.className="cv-center-header",O.style.width="100%",O.style.display="flex",O.style.flexDirection="column",O.style.alignItems="center",O.style.marginBottom="12px",F&&O.appendChild(F),z&&O.appendChild(z),oe&&O.appendChild(oe),N.insertBefore(O,N.firstChild)}else if(d==="4"){g&&(g.style.display="none");const O=document.createElement("div");O.className="cv-brand-header-block",O.style.marginBottom="12px",F&&O.appendChild(F),z&&O.appendChild(z),N.insertBefore(O,N.firstChild),I&&x.insertBefore(I,x.firstChild)}else if(d==="5")v&&F&&z&&(v.appendChild(F),v.appendChild(z)),g&&I&&g.appendChild(I);else if(d==="6"){g&&(g.style.display="none");const O=document.createElement("div");O.className="cv-side-bio-block",O.style.display="flex",O.style.flexDirection="column",O.style.alignItems="center",O.style.marginBottom="14px",O.style.width="100%",I&&O.appendChild(I),F&&O.appendChild(F),z&&O.appendChild(z),x.insertBefore(O,x.firstChild)}else d==="7"?(g&&(F&&g.appendChild(F),z&&g.appendChild(z)),I&&(I.style.display="none")):d==="8"&&(v&&F&&z&&(v.appendChild(F),v.appendChild(z)),g&&I&&g.appendChild(I));n.querySelectorAll(".cv-side-bio-block").forEach(O=>{d!=="2"&&d!=="6"&&O.remove()}),n.querySelectorAll(".cv-center-header").forEach(O=>{d!=="3"&&O.remove()}),n.querySelectorAll(".cv-brand-header-block").forEach(O=>{d!=="4"&&O.remove()})}function _(d){const v=performance.now(),I=283;d>=90?(i.setAttribute("stroke","var(--emerald-green)"),o.style.color="var(--emerald-green)",o.style.backgroundColor="rgba(16, 185, 129, 0.12)",o.style.borderColor="rgba(16, 185, 129, 0.2)",o.textContent="Excellent Match!"):(i.setAttribute("stroke","#f59e0b"),o.style.color="#f59e0b",o.style.backgroundColor="rgba(245, 158, 11, 0.1)",o.style.borderColor="rgba(245, 158, 11, 0.2)",o.textContent="Good Match!");function R(N){const x=N-v,F=Math.min(x/1200,1),z=F*(2-F),oe=Math.floor(z*d);r.textContent=oe;const ye=I-z*d/100*I;i.style.strokeDashoffset=ye,F<1?requestAnimationFrame(R):r.textContent=d}requestAnimationFrame(R)}function E(){const d=document.querySelector(".brush-underline path");d&&(d.style.strokeDashoffset="200",setTimeout(()=>{d.style.strokeDashoffset="0"},600))}t.forEach(d=>{d.addEventListener("click",()=>{const g=d.getAttribute("data-action");if(t.forEach(v=>v.classList.remove("active")),d.classList.add("active"),g==="template"){const v=document.getElementById("floating-template-picker");v.style.transform="scale(1.08) translateY(-4px)",v.style.borderColor="var(--primary-blue)",v.style.boxShadow="0 20px 40px -5px rgba(37, 99, 235, 0.25)",setTimeout(()=>{v.style.transform="",v.style.borderColor="",v.style.boxShadow=""},1e3)}else if(g==="content"){const v=n.querySelectorAll(".cv-section");v.forEach(I=>{I.style.outline="2px solid rgba(59, 130, 246, 0.4)",I.style.outlineOffset="4px",I.style.borderRadius="4px",I.style.backgroundColor="rgba(59, 130, 246, 0.03)"}),p("✨ Editor fields ready! Double click fields in builder to customize."),setTimeout(()=>{v.forEach(I=>{I.style.outline="",I.style.outlineOffset="",I.style.borderRadius="",I.style.backgroundColor=""})},2e3)}else if(g==="ai"){if(Pe){p("🤖 CV is already AI Optimized! Resetting content..."),T();return}n.classList.add("ai-writing"),p("✦ AI Copilot analyzing job post details and rewriting profile..."),setTimeout(()=>{n.classList.remove("ai-writing"),A()},1500)}else g==="optimize"&&(n.classList.add("optimizing"),p("🚀 Standardizing format & adding high-impact keywords for ATS scanners..."),setTimeout(()=>{n.classList.remove("optimizing"),Pe=!0,_(98),o.textContent="Perfect Match! (98%)",o.style.transform="scale(1.1)",o.style.backgroundColor="rgba(16, 185, 129, 0.2)",setTimeout(()=>{o.style.transform=""},500),p("🎉 Optimization complete! ATS score boosted to 98%. Ready to apply!")},1600))})});function T(){Pe=!1;const d=n.querySelector(".cv-section-p");d.textContent=Q.summary;const g=document.getElementById("cv-skills-badges");g.innerHTML="",Q.skills.forEach(v=>{const I=document.createElement("span");I.className="skill-tag",I.textContent=v,g.appendChild(I)}),_(Q.atsScores[he])}function A(){const d=n.querySelector(".cv-section-p");d.innerHTML="",d.style.borderRight="2px solid var(--purple-sparkle)",d.style.animation="typewriter-cursor 0.7s infinite alternate";const g=ee.summary;let v=0;function I(){if(v<g.length){d.textContent+=g.charAt(v),v++;const R=n.querySelector(".cv-main-col");R.scrollTop=R.scrollHeight,setTimeout(I,8)}else d.style.borderRight="none",d.style.animation="",P(),Pe=!0,_(98),p("🤖 AI write successful! ATS matching keywords injected.")}I()}function P(){const d=document.getElementById("cv-skills-badges");d.style.opacity="0",d.style.transform="translateY(5px)",setTimeout(()=>{d.innerHTML="",ee.skills.forEach(g=>{const v=document.createElement("span");v.className="skill-tag",v.textContent=g,d.appendChild(v)}),d.style.transition="all 0.5s ease",d.style.opacity="1",d.style.transform="translateY(0)"},300)}function p(d){const g=document.querySelector(".toast-notif");g&&g.remove();const v=document.createElement("div");v.className="toast-notif",v.innerHTML=d,Object.assign(v.style,{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%) translateY(40px)",backgroundColor:"var(--slate-900)",color:"var(--white)",padding:"12px 24px",borderRadius:"99px",fontSize:"13px",fontWeight:"600",boxShadow:"var(--widget-shadow)",zIndex:"200",opacity:"0",pointerEvents:"none",transition:"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"}),document.body.appendChild(v),requestAnimationFrame(()=>{v.style.opacity="1",v.style.transform="translateX(-50%) translateY(0)"}),setTimeout(()=>{v.style.opacity="0",v.style.transform="translateX(-50%) translateY(40px)",setTimeout(()=>v.remove(),400)},3500)}n.addEventListener("dblclick",d=>{const g=d.target.closest(".cv-name, .cv-title, .cv-section-p, .cv-item-role, .cv-item-company, .contact-val, .skill-tag");if(!g)return;const v=g.textContent,I=document.createElement("textarea");I.value=v,Object.assign(I.style,{width:"100%",fontFamily:"inherit",fontSize:"inherit",fontWeight:"inherit",color:"inherit",background:"var(--slate-50)",border:"1px solid var(--primary-blue)",outline:"none",padding:"2px",borderRadius:"2px",resize:"none"}),g.replaceWith(I),I.focus();const R=()=>{const N=I.value.trim()||v;g.textContent=N,I.replaceWith(g),p("💾 Changes saved locally in preview builder!");const x=Math.floor(Math.random()*5)-2,F=Pe?98:Q.atsScores[he],z=Math.max(70,Math.min(100,F+x));_(z)};I.addEventListener("blur",R),I.addEventListener("keydown",N=>{N.key==="Enter"&&!N.shiftKey&&(N.preventDefault(),R())})}),a.addEventListener("click",()=>{p("🚀 Initializing CVPilot App builder... Accessing free account sandbox!"),setTimeout(()=>{const d=document.getElementById("cv-floating-toolbar");d.style.transform="scale(1.1) translateX(-5px)",d.style.transition="all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",setTimeout(()=>{d.style.transform=""},600)},500)}),l.addEventListener("click",()=>{p("🎬 Launching standard premium portfolio layout walkthrough...");let d=parseInt(he)%8+1;const g=document.getElementById(`tpl-item-${d}`);g&&g.click()});const Le=document.getElementById("nav-resources"),on=document.getElementById("resources-dropdown-menu");Le&&on&&(Le.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation();const g=Le.parentElement.classList.contains("active");Le.parentElement.classList.toggle("active"),p(g?"📂 Resources dropdown hidden.":"📂 Resources dropdown toggled.")}),document.addEventListener("click",d=>{Le&&!Le.contains(d.target)&&!on.contains(d.target)&&Le.parentElement.classList.remove("active")})),document.getElementById("mobile-menu-btn").addEventListener("click",()=>{p("📱 Mobile responsive header navigation drawer toggled!")});const Ft=()=>{ae?(u.classList.add("yearly"),y.classList.add("active"),f.classList.remove("active"),w.textContent="9.60",S.textContent="23.20",L.textContent="/ month, billed yearly",M.textContent="/ month, billed yearly"):(u.classList.remove("yearly"),f.classList.add("active"),y.classList.remove("active"),w.textContent="12",S.textContent="29",L.textContent="/ month",M.textContent="/ month")};u.addEventListener("click",()=>{ae=!ae,Ft(),p(`📅 Billing changed to ${ae?"Yearly (20% Savings applied!)":"Monthly interval"}`)}),f.addEventListener("click",()=>{ae&&(ae=!1,Ft())}),y.addEventListener("click",()=>{ae||(ae=!0,Ft())}),document.getElementById("btn-select-free").addEventListener("click",()=>{p("💼 Welcome to the Basic Sandbox! Unlimited edits are unlocked locally.")}),document.getElementById("btn-select-pro").addEventListener("click",()=>{p(`💳 Heading to secure check-out: Pilot Pro Plan (${ae?"$115.20 billed annually":"$12/month"})`)}),document.getElementById("btn-select-exec").addEventListener("click",()=>{p(`👑 Heading to secure check-out: Executive Elite Plan (${ae?"$278.40 billed annually":"$29/month"})`)}),H.forEach(d=>{d.addEventListener("click",()=>{const g=d.getAttribute("aria-expanded")==="true",v=d.nextElementSibling;H.forEach(I=>{I!==d&&(I.setAttribute("aria-expanded","false"),I.nextElementSibling.style.maxHeight=null)}),g?(d.setAttribute("aria-expanded","false"),v.style.maxHeight=null):(d.setAttribute("aria-expanded","true"),v.style.maxHeight=v.scrollHeight+"px")})}),B.addEventListener("submit",d=>{d.preventDefault();const g=ne.value.trim();if(g){p(`📧 Success! ${g} is subscribed to CVPilot career updates.`),ne.value="";const v=document.getElementById("btn-subscribe-submit");v.style.transform="scale(1.15)",setTimeout(()=>{v.style.transform=""},300)}});const gt=document.getElementById("studio-modal"),ri=document.getElementById("close-studio-modal"),ss=document.querySelectorAll(".clickable-template-card"),$=document.getElementById("modal-cv-canvas"),ot=document.getElementById("modal-color-picker"),fe=document.getElementById("modal-font-picker"),Ut=document.getElementById("modal-ai-optimize-btn"),Ye=document.getElementById("modal-btn-download"),os=document.getElementById("modal-ats-score-num"),St=document.getElementById("modal-ats-progress"),Bt=document.getElementById("modal-ats-status-badge"),as=document.querySelectorAll(".editor-tab-btn"),de=document.querySelector(".editor-content-panel");document.querySelector(".editor-add-content-btn"),document.querySelector(".profile-edit-btn");const an=document.querySelector(".editor-top-actions");let Ne=null,nt=0,cn=!1,Xe=null,Ze=null;const mr={slate:[{name:"Cobalt Slate (Default)",primary:"#3b82f6",dark:"#0f172a"},{name:"Emerald Luxe",primary:"#10b981",dark:"#064e3b"},{name:"Amber Executive",primary:"#f59e0b",dark:"#78350f"},{name:"Graphite Monolith",primary:"#475569",dark:"#1e293b"}],purple:[{name:"Deep Violet (Default)",primary:"#8b5cf6",dark:"#f5f3ff"},{name:"Crimson Love",primary:"#ec4899",dark:"#fdf2f8"},{name:"Forest Sage",primary:"#10b981",dark:"#f0fdf4"},{name:"Midnight Neon",primary:"#6366f1",dark:"#1e1b4b"}],minimalist:[{name:"Classic Charcoal (Default)",primary:"#1e293b",dark:"#ffffff"},{name:"Burgundy Corporate",primary:"#881337",dark:"#fff1f2"},{name:"Deep Teal",primary:"#0f766e",dark:"#f0fdfa"},{name:"Platinum Noir",primary:"#0f172a",dark:"#f8fafc"}],emerald:[{name:"Emerald Mint (Default)",primary:"#10b981",dark:"#064e3b"},{name:"Forest Sage",primary:"#059669",dark:"#022c22"},{name:"Teal Corporate",primary:"#0d9488",dark:"#111827"},{name:"Cyberpunk Green",primary:"#22c55e",dark:"#090d16"}],amethyst:[{name:"Amethyst Split (Default)",primary:"#7c3aed",dark:"#faf5ff"},{name:"Pink Magenta",primary:"#d946ef",dark:"#fdf4ff"},{name:"Midnight Indigo",primary:"#4f46e5",dark:"#e0e7ff"},{name:"Warm Amber",primary:"#f59e0b",dark:"#fef3c7"}],saffron:[{name:"Saffron Gold (Default)",primary:"#d97706",dark:"#ffffff"},{name:"Crimson Red",primary:"#ef4444",dark:"#fff5f5"},{name:"Burnt Orange",primary:"#ea580c",dark:"#fff7ed"},{name:"Slate Dark",primary:"#334155",dark:"#f8fafc"}],wayne:[{name:"Deep Navy (Default)",primary:"#183746",dark:"#183746"},{name:"Graphite Navy",primary:"#334155",dark:"#111827"},{name:"Executive Teal",primary:"#0f766e",dark:"#134e4a"},{name:"Burgundy Boardroom",primary:"#9f1239",dark:"#4c0519"}],rivera:[{name:"Warm Stone (Default)",primary:"#4b5563",dark:"#e2e2df"},{name:"Sales Blue",primary:"#2563eb",dark:"#dbeafe"},{name:"Olive Ledger",primary:"#4d7c0f",dark:"#ecfccb"},{name:"Soft Charcoal",primary:"#1f2937",dark:"#e5e7eb"}],patel:[{name:"Engineering Blue (Default)",primary:"#0f3446",dark:"#e8ecef"},{name:"Steel Gray",primary:"#475569",dark:"#f1f5f9"},{name:"Industrial Green",primary:"#15803d",dark:"#dcfce7"},{name:"Safety Amber",primary:"#d97706",dark:"#fef3c7"}],"atlantic-blue":[{name:"Atlantic Blue (Default)",primary:"#2563eb",dark:"#dbeafe"},{name:"Deep Ocean",primary:"#0f3b66",dark:"#e0f2fe"},{name:"Emerald Atlantic",primary:"#059669",dark:"#dcfce7"},{name:"Graphite Blue",primary:"#334155",dark:"#e2e8f0"}],"mercury-flow":[{name:"Mercury Gray (Default)",primary:"#4b5563",dark:"#f4f1eb"},{name:"Ink Serif",primary:"#18181b",dark:"#f8fafc"},{name:"Burgundy Serif",primary:"#9f1239",dark:"#fff1f2"},{name:"Executive Teal",primary:"#0f766e",dark:"#f0fdfa"}],"steady-form":[{name:"Steady Slate (Default)",primary:"#475569",dark:"#f1f5f9"},{name:"Blue System",primary:"#2563eb",dark:"#dbeafe"},{name:"Green System",primary:"#16a34a",dark:"#dcfce7"},{name:"Amber System",primary:"#d97706",dark:"#fef3c7"}],"classic-serif-flow":[{name:"Classic Ink (Default)",primary:"#27272a",dark:"#ffffff"},{name:"Warm Paper",primary:"#7c2d12",dark:"#fff7ed"},{name:"Formal Navy",primary:"#1e3a8a",dark:"#eff6ff"},{name:"Academic Green",primary:"#166534",dark:"#f0fdf4"}],"executive-flow":[{name:"Boardroom Black (Default)",primary:"#111827",dark:"#e5e7eb"},{name:"Cobalt Boardroom",primary:"#1d4ed8",dark:"#dbeafe"},{name:"Burgundy Boardroom",primary:"#9f1239",dark:"#ffe4e6"},{name:"Forest Boardroom",primary:"#166534",dark:"#dcfce7"}],"leaves-flow":[{name:"Leaf Green (Default)",primary:"#15803d",dark:"#dcfce7"},{name:"Sage Creative",primary:"#4d7c0f",dark:"#ecfccb"},{name:"Ocean Creative",primary:"#0f766e",dark:"#ccfbf1"},{name:"Rose Creative",primary:"#be185d",dark:"#fce7f3"}],"saffron-line":[{name:"Saffron Line (Default)",primary:"#d97706",dark:"#fff7ed"},{name:"Crimson Line",primary:"#dc2626",dark:"#fee2e2"},{name:"Cobalt Line",primary:"#2563eb",dark:"#dbeafe"},{name:"Teal Line",primary:"#0d9488",dark:"#ccfbf1"}],quicksilver:[{name:"Quicksilver (Default)",primary:"#64748b",dark:"#f1f5f9"},{name:"Graphite Silver",primary:"#334155",dark:"#e2e8f0"},{name:"Blue Silver",primary:"#2563eb",dark:"#e0f2fe"},{name:"Violet Silver",primary:"#7c3aed",dark:"#ede9fe"}],"cobalt-edge":[{name:"Cobalt Edge (Default)",primary:"#1d4ed8",dark:"#dbeafe"},{name:"Indigo Edge",primary:"#4f46e5",dark:"#e0e7ff"},{name:"Teal Edge",primary:"#0d9488",dark:"#ccfbf1"},{name:"Charcoal Edge",primary:"#1f2937",dark:"#e5e7eb"}],"compact-serif-flow":[{name:"Compact Serif (Default)",primary:"#27272a",dark:"#ffffff"},{name:"Navy Compact",primary:"#1e3a8a",dark:"#eff6ff"},{name:"Sepia Compact",primary:"#92400e",dark:"#fffbeb"},{name:"Emerald Compact",primary:"#047857",dark:"#ecfdf5"}]};function Ro(d){const g=$.querySelector('.mini-cv-header div[style*="border-radius: 50%"]');g&&(g.style.backgroundColor=d.primary),$.querySelectorAll(".mini-cv-section-title").forEach(R=>{R.style.color=d.primary,R.style.borderBottomColor=d.primary+"30"});const I=$.querySelector(".mini-cv-divider");I&&(I.style.backgroundColor=d.primary)}function cs(d){const g=$.querySelector(".showcase-cv-sidebar");if(g){g.style.backgroundColor=d.dark,g.style.borderColor=d.primary+"25";const x=d.dark==="#1e1b4b"||d.dark==="#e0e7ff";g.style.color="#475569",g.querySelectorAll(".mini-cv-text").forEach(z=>{z.style.color="#475569"})}const v=$.querySelector('.showcase-cv-sidebar div[style*="border-radius: 50%"]');v&&(v.style.backgroundColor=d.primary),$.querySelectorAll(".showcase-cv-sidebar .mini-cv-section-title").forEach(x=>x.style.color=d.primary);const R=$.querySelector(".mini-cv-name");R&&(R.style.color=d.primary),$.querySelectorAll(".mini-cv-section-title").forEach(x=>{x.style.color=d.primary,x.style.borderBottomColor=d.primary+"25"})}function ii(d){const g=$.querySelector(".mini-cv-name");g&&(g.style.color=d.primary);const v=$.querySelector(".mini-cv-title");v&&(v.style.borderBottomColor=d.primary),$.querySelectorAll(".mini-cv-section-title").forEach(R=>{R.style.color=d.primary,R.style.borderBottomColor=d.primary+"40"}),$.style.backgroundColor=d.dark==="#ffffff"?"#ffffff":d.dark}function ls(d,g){if($.querySelectorAll(".mini-cv-section-title").forEach(R=>{R.style.backgroundColor=g.dark,R.style.color=d==="wayne"?"#ffffff":g.primary}),$.querySelectorAll(".mini-cv-name").forEach(R=>{R.style.color=d==="wayne"?"#ffffff":g.primary}),d==="wayne"){const R=$.querySelector(".reference-sidebar");R&&(R.style.backgroundColor=g.primary)}else{const R=$.querySelector(".reference-topband");R&&(R.style.backgroundColor=g.dark)}}function Po(d){const g=$.querySelector(".flowcv-template");if(!g)return;g.style.backgroundColor="#ffffff",g.querySelectorAll(".mini-cv-section-title, .mini-cv-tag").forEach(F=>{F.style.color=d.primary}),g.querySelectorAll(".flowcv-head, .flowcv-line-head, .flowcv-edge-head, .flowcv-centered-head").forEach(F=>{F.style.borderColor=d.primary});const R=g.querySelector(".flowcv-initial");R&&(R.style.backgroundColor=d.primary);const N=g.querySelector(".flowcv-band-head");N&&(N.style.backgroundColor=d.primary);const x=g.querySelector(".flowcv-leaf-mark");x&&(x.style.backgroundColor=d.dark)}function pr(d,g){d==="slate"||d==="emerald"?Ro(g):d==="purple"||d==="amethyst"?cs(g):d==="minimalist"||d==="saffron"?ii(g):d==="wayne"||d==="rivera"||d==="patel"?ls(d,g):Po(g)}function gr(d){ot.innerHTML="",(mr[d]||mr.slate).forEach((v,I)=>{const R=document.createElement("button");R.className=`palette-swapper-btn ${I===0?"active":""}`,R.style.backgroundColor=v.primary,R.title=v.name,R.innerHTML=`
                <svg class="palette-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            `,R.addEventListener("click",()=>{ot.querySelectorAll(".palette-swapper-btn").forEach(N=>N.classList.remove("active")),R.classList.add("active"),pr(d,v),p(`🎨 Theme color palette switched to "${v.name}"`),qt(Math.min(nt+1,100))}),ot.appendChild(R)})}const us={slate:95,emerald:95,rivera:96,patel:97,wayne:94,"atlantic-blue":96,"mercury-flow":94,"steady-form":95,"classic-serif-flow":93,"executive-flow":96,"leaves-flow":91,"saffron-line":95,quicksilver:95,"cobalt-edge":94,"compact-serif-flow":94,purple:92,amethyst:92,minimalist:89,saffron:89};function Ie(d){return us[d]||92}function xe(){var g,v;if(!Ne)return"No template selected";const d=document.querySelector(`.clickable-template-card[data-showcase-id="${Ne}"]`);return((v=(g=d==null?void 0:d.querySelector(".showcase-title"))==null?void 0:g.textContent)==null?void 0:v.trim())||Ne}function ln(d){de==null||de.querySelectorAll(".editor-section-card, .editor-profile-card").forEach(v=>{v.style.display="none"});const g=de==null?void 0:de.querySelector(".editor-add-content-btn");g&&(g.style.display="none")}function jn(){if(!de)return;de.innerHTML="";const d=$.querySelector("#cv-name-text")||$.querySelector(".cv-name")||$.querySelector(".mini-cv-name"),g=$.querySelector("#cv-title-text")||$.querySelector(".cv-title")||$.querySelector(".mini-cv-title");let v="",I="",R="";$.querySelectorAll('.cv-contact-item, [id*="email"], [id*="phone"], [id*="contact"], .cv-item-bullets li, .reference-contact-list p, .mini-cv-text').forEach(X=>{const Z=X.textContent.trim();Z.includes("@")?v=Z:Z.match(/\+?\d[\d-\s()]{7,15}/)?I=Z:Z.length>3&&Z.length<30&&!Z.includes("linkedin")&&!Z.includes("github")&&!v&&!I&&(Z.includes(",")||Z.match(/[A-Z]{2}/))&&(R=Z)});const x=d?d.textContent.trim():"James Anderson",F=g?g.textContent.trim():"Marketing Manager";v=v||"james.anderson@email.com",I=I||"+1 (555) 123-4567",R=R||"New York, NY";const z=document.createElement("section");z.className="editor-profile-card",z.innerHTML=`
            <div class="profile-details-info">
                <h3>${x}</h3>
                <p>${F}</p>
                <p style="font-size: 14px; margin-top: 8px; color: #6b7280;">${v} &bull; ${I} &bull; ${R}</p>
            </div>
            <button class="profile-edit-btn" type="button" aria-label="Edit Profile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="m16.5 3.5 4 4L7 21H3v-4L16.5 3.5z"></path></svg>
                Edit
            </button>
        `,de.appendChild(z);const oe=new Set,ye=[],be=(X,Z,O)=>{if(!X||!Z||oe.has(X))return;const Ee=Z.textContent.trim();!Ee||Ee.toLowerCase().includes("contact")||(oe.add(X),ye.push({node:X,titleNode:Z,titleText:Ee,itemsQuery:O}))};$.querySelectorAll(".cv-section").forEach(X=>{be(X,X.querySelector(".cv-section-title"),".cv-item, .cv-item-role, .cv-section-p, .skill-tag, li")}),$.querySelectorAll(".reference-sidebar-block").forEach(X=>{be(X,X.querySelector(".mini-cv-section-title"),".mini-cv-text, .mini-cv-tag, li")}),$.querySelectorAll(".reference-main section, .reference-main > div").forEach(X=>{be(X,X.querySelector(".mini-cv-section-title"),".mini-cv-item, .mini-cv-item-title, .mini-cv-tag, li")}),$.querySelectorAll('.flowcv-template section, .flowcv-column section, [class*="-template"] section, [class*="-template"] .cv-section').forEach(X=>{be(X,X.querySelector(".mini-cv-section-title, .cv-section-title, h3, h4"),".cv-item, .mini-cv-text, .mini-cv-tag, li")}),ye.forEach((X,Z)=>{const O=document.createElement("section");O.className="editor-section-card collapsed",O.dataset.sectionIndex=Z;const Ee=X.node.querySelectorAll(X.itemsQuery);let Et="";Ee.forEach((et,Ai)=>{let Zn=et.textContent.trim();Zn.length>45&&(Zn=Zn.substring(0,42)+"...");const Pr=et.style.display==="none";Et+=`
                    <div class="editor-entry-row ${Pr?"muted":""}" data-entry-index="${Ai}" style="display: none;">
                        <span class="drag-dots">::</span>
                        <strong>${Zn||"New Entry"}</strong>
                        <button type="button" aria-label="Toggle entry visibility">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </button>
                    </div>
                `}),O.innerHTML=`
                <div class="editor-section-heading">
                    <div class="editor-section-title">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v16H4z"></path></svg>
                        <h3>${X.titleText}</h3>
                    </div>
                    <button class="edit-heading-btn" type="button">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="m16.5 3.5 4 4L7 21H3v-4L16.5 3.5z"></path></svg>
                        Edit Heading
                    </button>
                    <svg class="section-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m18 15-6-6-6 6"></path></svg>
                </div>
                ${Et}
                <div class="editor-entry-actions" style="display: none;">
                    <button class="editor-add-entry-btn" type="button"><span>+</span>Add Entry</button>
                    <button class="editor-delete-entry-btn" type="button" aria-label="Delete entry">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="m19 6-1 14H6L5 6"></path></svg>
                    </button>
                </div>
            `,de.appendChild(O)});const ve=document.createElement("button");ve.className="editor-add-content-btn",ve.type="button",ve.innerHTML="<span>+</span>Add Content Section",ve.style.marginTop="16px",de.appendChild(ve)}function si(){Xe==null||Xe.remove(),Xe=null}function oi(d,g){si(),Xe=document.createElement("section"),Xe.className="editor-tool-card",Xe.innerHTML=`
            <div class="editor-tool-card-head">
                <h3>${d}</h3>
                <p>${g}</p>
            </div>
            <div class="editor-tool-card-body"></div>
        `;const v=de==null?void 0:de.querySelector(".editor-profile-card");return v?v.insertAdjacentElement("afterend",Xe):de==null||de.prepend(Xe),Xe.querySelector(".editor-tool-card-body")}function un(d){var I;const g=d==="mono"?"monospace":d;$.classList.remove("font-sans","font-serif","font-monospace"),$.classList.add(`font-${g}`),fe.querySelectorAll(".font-picker-btn").forEach(R=>{R.classList.toggle("active",R.getAttribute("data-font")===g)});const v=((I=fe.querySelector(`.font-picker-btn[data-font="${g}"] .font-name-label`))==null?void 0:I.textContent)||g;p(`Typographic profile updated to: ${v}`),qt(Math.min(nt+2,100))}function hs(){ln();const d=oi("Customize","Change color palette and typography for the selected resume template."),g=Ne||"slate",v=mr[g]||mr.slate;d.innerHTML=`
            <div class="editor-tool-group">
                <h4>Design Palettes</h4>
                <div class="editor-visible-palette"></div>
            </div>
            <div class="editor-tool-group">
                <h4>Typography</h4>
                <div class="editor-visible-fonts">
                    <button type="button" data-font="sans">Jakarta Sans</button>
                    <button type="button" data-font="serif">Georgia Serif</button>
                    <button type="button" data-font="monospace">Tech Monospace</button>
                </div>
            </div>
        `;const I=d.querySelector(".editor-visible-palette");v.forEach((R,N)=>{const x=document.createElement("button");x.type="button",x.className=`editor-palette-btn ${N===0?"active":""}`,x.style.backgroundColor=R.primary,x.title=R.name,x.addEventListener("click",()=>{I.querySelectorAll(".editor-palette-btn").forEach(F=>F.classList.remove("active")),x.classList.add("active"),pr(g,R),qt(Math.min(nt+1,100)),p(`Theme color palette switched to "${R.name}"`)}),I.appendChild(x)}),d.querySelectorAll(".editor-visible-fonts button").forEach(R=>{const N=R.getAttribute("data-font");R.classList.toggle("active",$.classList.contains(`font-${N}`)),R.addEventListener("click",()=>{d.querySelectorAll(".editor-visible-fonts button").forEach(x=>x.classList.remove("active")),R.classList.add("active"),un(N)})})}function ds(){ln();const d=oi("AI Tools","Run resume optimization, save the current layout, and monitor ATS readiness.");d.innerHTML=`
            <div class="editor-tool-group">
                <button class="editor-tool-primary" type="button" data-action="ai-optimize">AI Optimize Resume</button>
                <button class="editor-tool-secondary" type="button" data-action="save-cloud">Save Resume to Cloud</button>
            </div>
            <div class="editor-ats-inline">
                <strong>${nt||Ie(Ne)}%</strong>
                <span>${Bt.textContent||"ATS readiness"}</span>
            </div>
        `,d.querySelector('[data-action="ai-optimize"]').addEventListener("click",()=>Ut.click()),d.querySelector('[data-action="save-cloud"]').addEventListener("click",()=>{var g;return(g=document.getElementById("modal-btn-save-cloud"))==null?void 0:g.click()})}function ai(){ln();const d=oi("Overview","Review the current template status and quick actions.");d.innerHTML=`
            <div class="editor-overview-row">
                <span>Selected template</span>
                <strong>${xe()}</strong>
            </div>
            <div class="editor-overview-row">
                <span>ATS score</span>
                <strong>${nt||Ie(Ne)}%</strong>
            </div>
            <div class="editor-tool-group">
                <button class="editor-tool-secondary" type="button" data-action="save-cloud">Save Resume to Cloud</button>
                <button class="editor-tool-primary" type="button" data-action="download">Download PDF</button>
            </div>
        `,d.querySelector('[data-action="save-cloud"]').addEventListener("click",()=>{var g;return(g=document.getElementById("modal-btn-save-cloud"))==null?void 0:g.click()}),d.querySelector('[data-action="download"]').addEventListener("click",()=>Ye.click())}function ko(){si(),jn()}function hn(d){as.forEach(g=>{g.classList.toggle("active",g.textContent.trim().toLowerCase().includes(d))}),d==="overview"?ai():d==="customize"?hs():d==="ai"?ds():ko()}function yr(d){if(!d)return;d.classList.contains("expanded")?(d.classList.remove("expanded"),d.classList.add("collapsed"),d.querySelectorAll(".editor-entry-row, .editor-entry-actions").forEach(v=>{v.style.display="none"})):(d.classList.add("expanded"),d.classList.remove("collapsed"),d.querySelectorAll(".editor-entry-row, .editor-entry-actions").forEach(v=>{v.style.display=""}))}function fs(d){if(!d)return;const g=d.dataset.sectionIndex;if(g===void 0)return;const I=$.querySelectorAll(".cv-section")[g];if(!I)return;const R=I.querySelector(".cv-item-bullets, .cv-body")||I,N=document.createElement("li");N.textContent="New bullet point entry",N.setAttribute("contenteditable","true"),R.appendChild(N),jn();const x=de.querySelector(`[data-section-index="${g}"]`);x&&(x.classList.remove("collapsed"),x.classList.add("expanded"),x.querySelectorAll(".editor-entry-row, .editor-entry-actions").forEach(F=>{F.style.display=""})),N.focus(),p("Added a new bullet entry to the canvas.")}function ms(d){if(!d)return;const g=d.dataset.sectionIndex;if(g===void 0)return;const I=$.querySelectorAll(".cv-section")[g];if(!I)return;const R=I.querySelectorAll(".cv-item, .cv-item-role, .cv-section-p, .skill-tag, li"),N=R[R.length-1];if(N){N.remove(),jn();const x=de.querySelector(`[data-section-index="${g}"]`);x&&(x.classList.remove("collapsed"),x.classList.add("expanded"),x.querySelectorAll(".editor-entry-row, .editor-entry-actions").forEach(F=>{F.style.display=""})),p("Removed the last entry from the canvas.")}}function Hn(d){var R;const g=d.closest(".editor-section-card"),v=g==null?void 0:g.querySelector(".editor-section-title h3");if(!v)return;v.setAttribute("contenteditable","true"),v.focus(),(R=document.execCommand)==null||R.call(document,"selectAll",!1,null);const I=()=>{v.removeAttribute("contenteditable");const N=v.textContent.trim()||"Untitled";p(`Heading updated to "${N}".`);const x=g.dataset.sectionIndex;if(x!==void 0){const z=$.querySelectorAll(".cv-section")[x],oe=z==null?void 0:z.querySelector(".cv-section-title");oe&&(oe.textContent=N.toUpperCase())}v.removeEventListener("blur",I)};v.addEventListener("blur",I),v.addEventListener("keydown",N=>{N.key==="Enter"&&(N.preventDefault(),v.blur())},{once:!0})}function ci(){const d=$.querySelector("#cv-name-text")||$.querySelector(".cv-name");d?(d.setAttribute("contenteditable","true"),d.focus(),p("Profile name is now editable in the preview.")):p("Double-click any profile field directly in the canvas preview to edit.")}function li(){const d=$.querySelector(".cv-body")||$,g=document.createElement("div");g.className="cv-section",g.innerHTML=`
            <h3 class="cv-section-title" contenteditable="true">NEW SECTION</h3>
            <p class="cv-section-p" contenteditable="true">Add your details here.</p>
        `,d.appendChild(g),jn();const v=de.querySelectorAll(".editor-section-card");v.length>0&&yr(v[v.length-1]),p("Added a new custom section to the canvas.")}function at(){Ze==null||Ze.remove(),Ze=null}function ps(){if(Ze){at();return}Ze=document.createElement("div"),Ze.className="editor-more-menu",Ze.innerHTML=`
            <button type="button" data-action="download">Download PDF</button>
            <button type="button" data-action="save">Save Resume</button>
            <button type="button" data-action="close">Close Editor</button>
        `,an==null||an.appendChild(Ze),Ze.addEventListener("click",d=>{var v,I;const g=(v=d.target.closest("button"))==null?void 0:v.getAttribute("data-action");g&&(at(),g==="download"?Ye.click():g==="save"?(I=document.getElementById("modal-btn-save-cloud"))==null||I.click():ui())})}function _r(d,g,v,I){let R=null;const N=x=>{R||(R=x);const F=Math.min((x-R)/I,1);d.innerHTML=Math.floor(F*(v-g)+g),F<1&&window.requestAnimationFrame(N)};window.requestAnimationFrame(N)}function qt(d){d>100&&(d=100),d<0&&(d=0);const g=nt;nt=d,_r(os,g,d,700);const v=264,I=v-v*d/100;St.style.strokeDashoffset=I,d>=95?(St.style.stroke="#10b981",Bt.textContent="Excellent Match!",Bt.style.color="#10b981"):d>=88?(St.style.stroke="#3b82f6",Bt.textContent="Strong Match!",Bt.style.color="#3b82f6"):(St.style.stroke="#f59e0b",Bt.textContent="Good Potential",Bt.style.color="#f59e0b")}function dn(){[".mini-cv-name",".mini-cv-title",".mini-cv-text",".mini-cv-item-title",".mini-cv-item-company",".mini-cv-bullets li",".mini-cv-tag"].forEach(g=>{$.querySelectorAll(g).forEach(I=>{I.setAttribute("contenteditable","true"),I.setAttribute("spellcheck","false"),I.addEventListener("input",()=>{const R=I.textContent.length,N=Math.min(Math.floor(R/22),3),x=Ie(Ne),F=Math.min((cn?98:x)+N,100);nt=F,os.textContent=F;const z=264,oe=z-z*F/100;St.style.strokeDashoffset=oe})})})}ss.forEach(d=>{d.addEventListener("click",g=>{var R;const v=d.getAttribute("data-showcase-id");if(v==="github-contribution"){g.preventDefault(),g.stopPropagation(),p("✨ Forking CVPilot repository on GitHub to add a new community template... 🚀"),setTimeout(()=>{window.open("https://github.com/Shivam-Dhoundiyal/CVPilot","_blank")},1200);return}Ne=v,cn=!1;const I=window.userResumes?window.userResumes.find(N=>N.selectedTemplate===v):null;if(I&&I.canvasHtml)$.innerHTML=I.canvasHtml,$.style.backgroundColor="",$.className="studio-interactive-cv-paper",dn(),fe.querySelectorAll(".font-picker-btn").forEach(N=>N.classList.remove("active")),I.canvasHtml.includes("font-serif")?(fe.querySelector('[data-font="serif"]').classList.add("active"),$.classList.add("font-serif")):I.canvasHtml.includes("font-monospace")||I.canvasHtml.includes("font-mono")?((R=fe.querySelector('[data-font="monospace"]'))==null||R.classList.add("active"),$.classList.add("font-monospace")):(fe.querySelector('[data-font="sans"]').classList.add("active"),$.classList.add("font-sans")),gr(v),gt.classList.add("active"),document.body.style.overflow="hidden",hn("content"),setTimeout(()=>{qt(I.atsScore||92)},350),p(`☁️ Cloud Restore: Loaded your saved custom "${I.resumeTitle}" layout.`);else{const N=d.querySelector(".showcase-inner-cv");if(!N)return;const x=N.cloneNode(!0);x.removeAttribute("style"),$.innerHTML="",$.appendChild(x),$.style.backgroundColor="",$.className="studio-interactive-cv-paper",fe.querySelectorAll(".font-picker-btn").forEach(z=>z.classList.remove("active")),v==="minimalist"||v==="saffron"||v==="wayne"||v==="rivera"||v==="mercury-flow"||v==="classic-serif-flow"||v==="compact-serif-flow"?(fe.querySelector('[data-font="serif"]').classList.add("active"),$.classList.add("font-serif")):(fe.querySelector('[data-font="sans"]').classList.add("active"),$.classList.add("font-sans")),gr(v),dn(),gt.classList.add("active"),document.body.style.overflow="hidden",hn("content");let F=Ie(v);setTimeout(()=>{qt(F)},350),p(`✨ Opened Template Editor Studio: "${d.querySelector(".showcase-title").textContent}" layout loaded.`)}})});const ui=()=>{at(),gt.classList.remove("active"),document.body.style.overflow="",p("💼 Template customizer studio closed. Progress cached.")};ri.addEventListener("click",d=>{d.stopPropagation(),ps()}),gt.addEventListener("click",d=>{d.target===gt&&ui()}),document.addEventListener("click",d=>{Ze&&!d.target.closest(".editor-top-actions")&&at()}),as.forEach(d=>{d.addEventListener("click",()=>{const g=d.textContent.trim().toLowerCase();g.includes("overview")?hn("overview"):g.includes("customize")?hn("customize"):g.includes("ai")?hn("ai"):hn("content")})}),de==null||de.addEventListener("click",d=>{if(d.target.closest(".profile-edit-btn")){d.stopPropagation(),ci();return}if(d.target.closest(".editor-add-content-btn")){d.stopPropagation(),li();return}const I=d.target.closest(".edit-heading-btn");if(I){d.stopPropagation(),Hn(I);return}const R=d.target.closest(".editor-add-entry-btn");if(R){d.stopPropagation(),fs(R.closest(".editor-section-card"));return}const N=d.target.closest(".editor-delete-entry-btn");if(N){d.stopPropagation(),ms(N.closest(".editor-section-card"));return}const x=d.target.closest(".editor-entry-row button");if(x){d.stopPropagation();const z=x.closest(".editor-entry-row");if(!z)return;const oe=z.closest(".editor-section-card"),ye=oe==null?void 0:oe.dataset.sectionIndex,be=z.dataset.entryIndex;if(ye!==void 0&&be!==void 0){const X=$.querySelectorAll(".cv-section")[ye],Z=X==null?void 0:X.querySelectorAll(".cv-item, .cv-item-role, .cv-section-p, .skill-tag, li"),O=Z==null?void 0:Z[be];if(O){const Ee=O.style.display==="none";O.style.display=Ee?"":"none",z.classList.toggle("muted",!Ee),p(Ee?"Entry visible in preview panel.":"Entry hidden from preview panel.")}}return}const F=d.target.closest(".editor-section-heading");F&&yr(F.closest(".editor-section-card"))}),fe.querySelectorAll(".font-picker-btn").forEach(d=>{d.addEventListener("click",()=>{un(d.getAttribute("data-font"))})}),Ut.addEventListener("click",()=>{if(cn){p("✦ AI Copilot: Resume layout vocabulary already fully optimized!");return}Ut.disabled=!0,Ut.innerHTML="✦ AI Keywords Scanning...",$.classList.add("ai-modal-writing"),p("🤖 AI Copilot analyzing text spacing, grammar & passive verbs..."),setTimeout(()=>{Ut.innerHTML="✦ Restructuring Bullets...";const d=$.querySelector(".mini-cv-text"),g=$.querySelectorAll(".mini-cv-bullets li");if(d&&hi(d,"Highly accomplished, growth-oriented Marketing Manager with 5+ years of digital ecosystem leadership. Proven expertise spearheading ROI-driven omni-channel growth campaigns, directing cross-functional squads, and optimizing $500K+ ad budgets. Captured a consistent 45% traffic expansion via keyword models and boosted acquisition metrics by 35%.",18),g.length>0){const v=["Engineered and executed organic SEO strategies that increased web domain traffic by 45% in 8 months.","Pioneered data-driven retargeting campaigns that shaved CPA margins by 35% and increased high-value pipeline generation."];g.forEach((I,R)=>{v[R]&&setTimeout(()=>{hi(I,v[R],18)},R*600)})}setTimeout(()=>{cn=!0,Ut.disabled=!1,Ut.innerHTML="✦ AI Optimize Resume",$.classList.remove("ai-modal-writing"),qt(100),p("🏆 AI Copilot successfully rewrote CV content. Recruiter ATS Index: 100% Perfect Match!")},1500)},1200)});function hi(d,g,v){d.innerHTML="";let I=0;function R(){I<g.length&&(d.innerHTML+=g.charAt(I),I++,setTimeout(R,v))}R()}Ye.addEventListener("click",()=>{Ye.disabled=!0;const d=Ye.innerHTML,g=["Compiling Vector Shapes...","Checking Readability Alignments...","Packaging PDF Layout Structure...","Encrypting Digital Placement PDF..."];let v=0;const I=()=>{if(v<g.length)Ye.innerHTML=`
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 14px; height: 14px; margin-right: 8px; display: inline-block; vertical-align: -1.5px; animation: spin-loader 0.8s infinite linear;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                    ${g[v]}
                `,v++,setTimeout(I,650);else{Ye.disabled=!1,Ye.innerHTML=d;const R=$.querySelector(".mini-cv-name"),x=`${R?R.textContent.trim().replace(/\s+/g,"_"):"James_Anderson"}_CVPilot_Resume.pdf`,F=new Blob(["%PDF-1.5 CVPilot high-fidelity exported customized resume document file."],{type:"application/pdf"}),z=document.createElement("a");z.href=URL.createObjectURL(F),z.download=x,document.body.appendChild(z),z.click(),document.body.removeChild(z),p(`🏆 Premium PDF document "${x}" successfully generated and downloaded!`)}};I()});const Je=document.getElementById("auth-modal"),zn=document.getElementById("close-auth-modal"),gs=document.getElementById("btn-login"),ys=document.getElementById("btn-signup"),yt=document.getElementById("tab-login"),vr=document.getElementById("tab-signup"),_s=document.querySelector(".auth-tab-indicator"),Wn=document.getElementById("login-form-container"),di=document.getElementById("signup-form-container"),Er=document.getElementById("auth-login-form"),Gn=document.getElementById("auth-signup-form"),ct=document.getElementById("signup-password"),fn=document.getElementById("auth-success-overlay"),Kn=document.getElementById("auth-success-message"),wr=document.querySelector(".nav-actions");let $e=!1,Te={name:"",email:""};function fi(d){_s.style.width=`${d.offsetWidth}px`,_s.style.left=`${d.offsetLeft}px`}function Ct(d){d==="tab-login"?(yt.classList.add("active"),vr.classList.remove("active"),Wn.classList.add("active"),di.classList.remove("active"),fi(yt)):(vr.classList.add("active"),yt.classList.remove("active"),di.classList.add("active"),Wn.classList.remove("active"),fi(vr))}gs&&gs.addEventListener("click",()=>{Je.classList.add("active"),Ct("tab-login"),document.body.style.overflow="hidden",p("🔑 Access Dashboard: Log in form opened.")}),ys&&ys.addEventListener("click",()=>{Je.classList.add("active"),Ct("tab-signup"),document.body.style.overflow="hidden",p("✦ Welcome! Sign up form opened.")});const lt=()=>{Je.classList.remove("active"),fn.classList.remove("active"),document.body.style.overflow="",Er.reset(),Gn.reset(),Tr(),Qn()};zn.addEventListener("click",lt),Je.addEventListener("click",d=>{d.target===Je&&lt()}),yt.addEventListener("click",()=>Ct("tab-login")),vr.addEventListener("click",()=>Ct("tab-signup")),document.querySelectorAll(".password-toggle-btn").forEach(d=>{d.addEventListener("click",()=>{const g=d.previousElementSibling;g.type==="password"?(g.type="text",d.style.color="var(--primary-blue)"):(g.type="password",d.style.color="var(--slate-400)")})});function Tr(){const d=[1,2,3,4].map(v=>document.getElementById(`strength-segment-${v}`)),g=document.getElementById("password-strength-text");d.forEach(v=>{v&&(v.style.backgroundColor="rgba(226, 232, 240, 0.6)")}),g&&(g.textContent="Password is empty",g.style.color="var(--slate-500)")}function Qn(){const d=document.getElementById("btn-login-submit"),g=document.getElementById("btn-signup-submit");d&&(d.disabled=!1,d.innerHTML="Sign In to My Dashboard"),g&&(g.disabled=!1,g.innerHTML="Create Free Workspace")}ct&&ct.addEventListener("input",()=>{const d=ct.value,g=[1,2,3,4].map(R=>document.getElementById(`strength-segment-${R}`)),v=document.getElementById("password-strength-text");if(!d){Tr();return}let I=0;d.length>=6&&(I=1),d.length>=8&&/[0-9]/.test(d)&&(I=2),d.length>=10&&/[A-Z]/.test(d)&&/[a-z]/.test(d)&&(I=3),d.length>=12&&/[^A-Za-z0-9]/.test(d)&&(I=4),g.forEach(R=>{R&&(R.style.backgroundColor="rgba(226, 232, 240, 0.6)")}),I===1?(g[0].style.backgroundColor="#ef4444",v.textContent="Weak: Too simple",v.style.color="#ef4444"):I===2?(g[0].style.backgroundColor="#f59e0b",g[1].style.backgroundColor="#f59e0b",v.textContent="Medium: Good length",v.style.color="#f59e0b"):I===3?(g[0].style.backgroundColor="#10b981",g[1].style.backgroundColor="#10b981",g[2].style.backgroundColor="#10b981",v.textContent="Strong: Mix parameters met",v.style.color="#10b981"):I===4&&(g.forEach(R=>{R&&(R.style.backgroundColor="#059669")}),v.textContent="Excellent: Fully Secure Workspace Unlocked!",v.style.color="#059669")});function $t(){const d=document.getElementById("user-profile-badge");if(!d)return;d.addEventListener("click",I=>{d.classList.toggle("active"),I.stopPropagation()}),document.addEventListener("click",()=>{d.classList.remove("active")});const g=document.getElementById("btn-dropdown-logout");g&&g.addEventListener("click",I=>{I.stopPropagation(),mi()});const v=document.getElementById("btn-dropdown-my-resumes");v&&(v.addEventListener("click",I=>{if(I.stopPropagation(),d.classList.remove("active"),!window.userResumes||window.userResumes.length===0)p("💼 Workspace Empty: You haven't saved any resumes to the cloud yet.");else{const R=window.userResumes.map((N,x)=>`${x+1}. ${N.resumeTitle} (${N.selectedTemplate.toUpperCase()} - ATS Score: ${N.atsScore}%)`).join(`
`);alert(`💼 YOUR SAVED CLOUD RESUMES:

${R}

Simply click the corresponding template card in the showcase grid to view or resume editing!`)}}),bi())}function _t(d){Te.name=d,$e=!0;const g=localStorage.getItem("cvpilot_session"),v=g?JSON.parse(g):{};localStorage.setItem("cvpilot_session",JSON.stringify({...v,uid:Te.uid||v.uid||Te.email||v.email||d,name:d,email:Te.email||v.email||""}));const R=d.split(/\s+/).map(N=>N.charAt(0).toUpperCase()).slice(0,2).join("");wr.innerHTML=`
            <div class="user-profile-badge" id="user-profile-badge">
                <div class="user-avatar">${R||"U"}</div>
                <span class="user-name-span">${d}</span>
                <svg class="user-badge-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 10px; height: 10px; margin-left: 2px;"><polyline points="6 9 12 15 18 9"></polyline></svg>
                
                <!-- Dropdown panel menu -->
                <div class="user-dropdown-menu">
                    <div class="dropdown-header-meta">
                        <h6>${d}</h6>
                        <p>Executive Plan Member</p>
                    </div>
                    <button class="dropdown-item-btn" type="button" id="btn-dropdown-my-resumes">
                        💼 My Resumes (0)
                    </button>
                    <button class="dropdown-item-btn" type="button" onclick="showToast('⚙️ Settings panel loaded.')">
                        ⚙️ Account Settings
                    </button>
                    <button class="dropdown-item-btn btn-logout" id="btn-dropdown-logout" type="button">
                        🚪 Log Out
                    </button>
                </div>
            </div>
        `,$t(),typeof In=="function"&&In()}function mi(d=!1,g={}){const v=!g.skipFirebase;$e=!1,Te={name:"",email:""},window.userResumes=[],localStorage.removeItem("cvpilot_session"),v&&window.firebaseAuth&&window.firebaseAuth.signOut().then(()=>{console.log("🔥 Firebase User session signed out successfully.")}).catch(N=>{console.error("Firebase Sign-out error: ",N)}),wr.innerHTML=`
            <button class="btn btn-text" id="btn-login">Log in</button>
            <button class="btn btn-primary" id="btn-signup">Sign Up Free</button>
        `;const I=document.getElementById("btn-login"),R=document.getElementById("btn-signup");I.addEventListener("click",()=>{Je.classList.add("active"),Ct("tab-login"),document.body.style.overflow="hidden",p("🔑 Access Dashboard: Log in form opened.")}),R.addEventListener("click",()=>{Je.classList.add("active"),Ct("tab-signup"),document.body.style.overflow="hidden",p("✦ Welcome! Sign up form opened.")}),d||p("🚪 Successfully logged out of CVPilot workspace.")}Er.addEventListener("submit",d=>{d.preventDefault();const g=document.getElementById("login-email").value.trim(),v=document.getElementById("login-password").value,I=document.getElementById("btn-login-submit");if(I.disabled=!0,I.innerHTML="Validating Credentials...",window.CVPilotFirebaseAuth&&window.CVPilotFirebaseAuth.isConfigured)window.CVPilotFirebaseAuth.signInWithEmail(g,v).then(R=>{const N=R.displayName||g.split("@")[0];Kn.textContent=`Welcome back, ${N}! Provisioning personalized sandbox canvas...`,fn.classList.add("active"),setTimeout(()=>{$e=!0,Te={name:N,email:g},localStorage.setItem("cvpilot_session",JSON.stringify({name:N,email:g,provider:"Firebase"})),_t(N),lt(),p(`✨ Welcome back, ${N}! Account unlocked successfully.`)},1900)}).catch(R=>{console.error("Firebase sign-in error:",R);let N=R.message||"Verification failed.";R.code==="auth/wrong-password"||R.code==="auth/user-not-found"||R.code==="auth/invalid-credential"?N="Incorrect email or password. Please verify your credentials.":R.code==="auth/invalid-email"?N="Please enter a valid email address.":R.code==="auth/too-many-requests"?N="Too many failed attempts. Wait a moment and try again.":R.code==="auth/user-disabled"?N="This account has been disabled.":R.code==="auth/network-request-failed"&&(N="Network error. Check your connection and try again."),p(`⚠️ Sign-in Failed: ${N}`),I.disabled=!1,I.innerHTML="Sign In to My Dashboard"});else{const R=g.split("@")[0],N=R.charAt(0).toUpperCase()+R.slice(1),x=N==="Shivam-dhoundiyal"?"Shivam Dhoundiyal":N==="James"?"James Anderson":N;setTimeout(()=>{I.innerHTML="Unlocking Workspace...",setTimeout(()=>{Kn.textContent=`Welcome back, ${x}! Provisioning personalized sandbox canvas...`,fn.classList.add("active"),setTimeout(()=>{$e=!0,Te={name:x,email:g},localStorage.setItem("cvpilot_session",JSON.stringify({name:x,email:g,provider:"Mock"})),_t(x),lt(),p(`✨ Welcome back, ${x}! Account unlocked successfully.`)},1900)},600)},1e3)}}),Gn.addEventListener("submit",d=>{d.preventDefault();const g=document.getElementById("signup-name").value.trim(),v=document.getElementById("signup-email").value.trim(),I=document.getElementById("signup-password").value,R=document.getElementById("btn-signup-submit");if(!document.getElementById("signup-terms").checked){p("⚠️ You must agree to the Terms of Service.");return}R.disabled=!0,R.innerHTML="Creating Secure Workspace...",window.CVPilotFirebaseAuth&&window.CVPilotFirebaseAuth.isConfigured?window.CVPilotFirebaseAuth.signUpWithEmail(v,I,g).then(x=>{Kn.textContent=`Welcome, ${g}! Your Premium Sandbox Workspace has been successfully activated.`,fn.classList.add("active"),setTimeout(()=>{$e=!0,Te={name:g,email:v},localStorage.setItem("cvpilot_session",JSON.stringify({name:g,email:v,provider:"Firebase"})),_t(g),lt(),p(`🏆 Welcome to CVPilot, ${g}! Premium templates are fully unlocked.`),setTimeout(()=>{p(`✉️ Welcome Dispatch: A welcoming setup guide has been sent to your inbox at ${v}!`)},2800)},1900)}).catch(x=>{console.error("Firebase sign-up error:",x);let F=x.message||"Registration failed.";x.code==="auth/email-already-in-use"?F="This email address is already registered. Please log in instead.":x.code==="auth/weak-password"?F="Password is too weak. It must be at least 6 characters.":x.code==="auth/invalid-email"?F="Please enter a valid email address.":x.code==="auth/operation-not-allowed"?F="Email/password sign-up is not enabled in Firebase Authentication.":x.code==="auth/network-request-failed"&&(F="Network error. Check your connection and try again."),p(`⚠️ Sign-up Failed: ${F}`),R.disabled=!1,R.innerHTML="Create Free Workspace"}):setTimeout(()=>{R.innerHTML="Caching templates...",setTimeout(()=>{Kn.textContent=`Welcome, ${g}! Your Premium Sandbox Workspace has been successfully activated.`,fn.classList.add("active"),setTimeout(()=>{$e=!0,Te={name:g,email:v},localStorage.setItem("cvpilot_session",JSON.stringify({name:g,email:v,provider:"Mock"})),_t(g),lt(),p(`🏆 Welcome to CVPilot, ${g}! Premium templates are fully unlocked.`),setTimeout(()=>{p(`✉️ Welcome Dispatch: A welcoming setup guide has been sent to your inbox at ${v}!`)},2800)},1900)},600)},1e3)});const Oe=document.getElementById("drag-drop-zone"),vt=document.getElementById("file-uploader-input"),pi=document.getElementById("btn-browse-files"),mn=document.getElementById("upload-details-panel"),Ir=document.getElementById("uploaded-filename"),gi=document.getElementById("uploaded-filesize"),yi=document.getElementById("btn-remove-uploaded"),jt=document.getElementById("btn-trigger-reshape"),br=document.getElementById("reshaper-modal"),_i=document.getElementById("close-reshaper-modal"),Rt=document.getElementById("parsed-raw-cv-editor"),pn=document.getElementById("resume-intent-input"),ut=document.getElementById("resume-intent-summary"),rt=document.getElementById("reshaper-processing-loader"),gn=document.getElementById("reshaper-progress-bar-fill"),Jn=document.getElementById("reshaper-loader-steps"),Ar=document.getElementById("reshaper-step-badge"),le=document.getElementById("reshaper-cv-canvas"),Pt=document.getElementById("reshaper-template-selector"),Ht=document.getElementById("btn-reshaper-edit"),yn=document.getElementById("btn-reshaper-back"),_n=document.getElementById("btn-reshaper-download"),vi=`JAMES ANDERSON
james.a@email.com | +1 555 123-4567 | New York, NY

OBJECTIVE
Looking for a challenging position in a growing company where I can use my skills.

EXPERIENCE
Marketing Manager - Growth Corp (2018 - 2021)
* Helped with marketing stuff.
* Made some social media posts on Facebook and Instagram.
* Talked to customers and worked with team members.
* Managed a small budget.

Marketing Assistant - Tech Solutions (2021 - Present)
* Worked on search engine optimization and online keywords.
* Did email campaigns and analytics dashboards.
* Answered emails and did data entry.

EDUCATION
Bachelor of Business Administration - New York University (2014 - 2018)

SKILLS
Microsoft Office, Communication, Teamwork, Social Media, Google Docs`;let Sr=vi,Ei="";function wi(){return((pn==null?void 0:pn.value)||Ei||"").trim()||"Rewrite the resume for a strong ATS-friendly career profile with measurable results and recruiter-focused keywords."}function Vo(d,g){return`You are an expert AI resume writer. The user wants the resume rewritten according to this intent:
"${g}"

Use only the provided resume text. Preserve accuracy and do not invent companies, dates, or education. Rewrite the resume into a plain ATS-friendly format with headings, clean bullet points, strong action verbs, and keywords that match the target role. If information is missing, keep it honest and ask the user to confirm details.

Source resume:
${d}`}function Yn(d){const g=d.toLowerCase(),v=["product manager","marketing manager","engineer","software engineer","data analyst","project manager","sales manager","business analyst","designer","operations manager","customer success","consultant","director","analyst","specialist"];for(const R of v)if(g.includes(R))return R.charAt(0).toUpperCase()+R.slice(1);const I=g.match(/\b(senior|lead|head|principal|associate|junior)\b/);return I?`${I[0].charAt(0).toUpperCase()+I[0].slice(1)} Professional`:"Professional"}function kt(d){const g=d.toLowerCase(),v=["fintech","healthcare","technology","education","ecommerce","saas","finance","manufacturing","energy","consumer","retail"];for(const I of v)if(g.includes(I))return I;return"business"}function vs(d,g,v){d.includes("manager")||`${d}`;const R=[`Led cross-functional teams and delivered measurable outcomes for ${g==="business"?"cross-functional teams":`${g} stakeholders`}, strengthening operational efficiency and audience growth.`,"Optimized process execution across priority initiatives and improved key performance metrics by 20% or more.","Translated complex objectives into clear operational plans and drove progress with data-backed decisions.","Built and sustained stakeholder alignment while delivering high-quality work within tight timelines."],N=["Executed targeted programs that improved customer engagement and revenue reach.","Introduced scalable workflows for higher productivity and better reporting.","Partnered with marketing, product, and analytics teams to increase campaign performance and conversion.","Designed recommendations to reduce friction and accelerate execution."];return v===1?[R.slice(0,3)]:[R.slice(0,3),N.slice(0,3)]}function Ti(d){return d.replace(/^Intent:[\s\S]*?\n\n/,"").trim()}function Es(d,g){const v=Ti(d||""),I=Yn(g),R=kt(g),N=vn(v),x=`✦ AI REFLECTED: ${I} with a strong focus on ${R} results, strategic execution, and ATS-ready leadership. Proven ability to deliver measurable impact through cross-functional collaboration, data-backed planning, and high-impact execution.`,F=[I.includes("marketing")?"Marketing Strategy":"Strategic Planning",R==="fintech"?"Fintech Optimization":"Stakeholder Collaboration","Process Improvement","Performance Metrics","Cross-Functional Leadership","Outcome-Driven Execution"],z=vs(I,R,2);return{name:N.name,title:I.toUpperCase(),email:N.email,phone:N.phone,location:N.location,summary:x,skills:F,experienceBlocks:z}}function vn(d){let g="JAMES ANDERSON",v="MARKETING MANAGER",I="james.a@email.com",R="+1 555 123-4567",N="New York, NY",x=[...ee.skills];const F=d.split(`
`).map(O=>O.trim()).filter(O=>O.length>0);F.length>0&&F[0].length<35&&!F[0].includes("@")&&!F[0].includes("|")&&(g=F[0].toUpperCase()),F.forEach(O=>{if(O.includes("@")){const Ee=O.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);Ee&&(I=Ee[0]);const Et=O.match(/\+?\d[\d-\s()]{7,15}/);Et&&(R=Et[0]);const et=O.split("|").pop();et&&et!==O&&(N=et.trim())}});const z=d.toLowerCase().includes("marketing")||d.toLowerCase().includes("helped"),oe=d.toLowerCase().includes("social")||d.toLowerCase().includes("facebook")||d.toLowerCase().includes("instagram"),ye=d.toLowerCase().includes("budget")||d.toLowerCase().includes("money"),be=d.toLowerCase().includes("seo")||d.toLowerCase().includes("search")||d.toLowerCase().includes("keyword"),ve=d.toLowerCase().includes("email")||d.toLowerCase().includes("campaign");let X="✦ AI RE-ENGINEERED: Highly accomplished professional with a proven track record of driving operational efficiency and strategic growth. Expert in translating complex objectives into streamlined execution pipelines, managing cross-functional initiatives, and delivering measurable ROI.";z&&(X="✦ AI RE-ENGINEERED: Metrics-driven Marketing Professional with 5+ years of success leading high-impact acquisition campaigns, managing $500K+ program budgets, and supervising agile cross-functional teams. Proven ability to translate brand objectives into optimized execution funnels that scale traffic by 45% and drive lead conversion by 35%.");let Z=[];return be&&Z.push("SEO Strategy"),oe&&Z.push("Social Media ROI"),ye&&Z.push("Budget Management"),ve&&Z.push("Email Automation"),Z.length>0&&(x=[...Z,...x.slice(Z.length)]),{name:g,title:v,email:I,phone:R,location:N,summary:X,skills:x}}["dragenter","dragover","dragleave","drop"].forEach(d=>{Oe&&Oe.addEventListener(d,g=>{g.preventDefault(),g.stopPropagation()},!1)}),["dragenter","dragover"].forEach(d=>{Oe&&Oe.addEventListener(d,()=>{Oe.classList.add("dragover")},!1)}),["dragleave","drop"].forEach(d=>{Oe&&Oe.addEventListener(d,()=>{Oe.classList.remove("dragover")},!1)}),Oe&&Oe.addEventListener("drop",d=>{const v=d.dataTransfer.files;v.length>0&&ws(v[0])}),pi&&vt&&pi.addEventListener("click",d=>{d.preventDefault(),vt.click()}),vt&&vt.addEventListener("change",()=>{vt.files.length>0&&ws(vt.files[0])}),pn&&pn.addEventListener("input",()=>{Ei=pn.value.trim(),ut&&(ut.textContent=Ei||"No intent entered yet. The AI will optimize the resume for a general ATS-friendly role.")});function ws(d){const g=["pdf","docx","doc","txt"],v=d.name.split(".").pop().toLowerCase();if(!g.includes(v)){p("⚠️ Invalid format! Please upload a PDF, DOCX, DOC, or TXT resume.");return}const I=Math.round(d.size/1024);if(I>10240){p("⚠️ File is too large! Maximum limit is 10MB.");return}if(v==="txt"){const R=new FileReader;R.onload=function(N){Sr=N.target.result},R.readAsText(d)}else Sr=vi;Ir&&gi&&mn&&Oe&&jt&&(Ir.textContent=d.name,gi.textContent=`${I} KB • Ready for Reshape`,mn.classList.add("active"),Oe.style.display="none",jt.classList.remove("disabled"),p(`📄 Document "${d.name}" ready to analyze.`))}yi&&yi.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),Ts(),p("🗑️ Uploaded document cleared.")});function Ts(){vt&&mn&&Oe&&jt&&(vt.value="",mn.classList.remove("active"),Oe.style.display="block",jt.classList.add("disabled"))}jt&&jt.addEventListener("click",()=>{if(!jt.classList.contains("disabled")){if(!$e){Je.classList.add("active"),Ct("tab-login"),document.body.style.overflow="hidden",p("🔒 Protected Action: Please log in or sign up to run the AI Reshaper pipeline.");return}if(br&&Rt){br.classList.add("active"),document.body.style.overflow="hidden";const d=wi();ut&&(ut.textContent=d),Rt.textContent=`Intent: ${d}

${Sr}`,Lo()}}});function Lo(){if(!rt||!gn||!Jn||!Ar)return;const d=wi(),g=Vo(Sr,d);console.debug("AI generated prompt:",g),rt.style.display="flex",gn.style.width="0%",Ar.textContent="Phase: Reflecting on user intent...",[{time:0,text:"🔍 Dissecting raw plaintext sections & headers...",progress:12},{time:1300,text:`📊 Scanning intent for "${d}" and recruiter signals...`,progress:35},{time:2600,text:"✍️ Generating a strong ATS-friendly professional summary...",progress:58},{time:3900,text:"🎯 Aligning keywords, metrics, and role-specific impact statements...",progress:78},{time:5200,text:"✨ Formatting the resume into a clean, recruiter-ready layout...",progress:92},{time:6500,text:"🎉 Compilation finished! Rendering premium matching preview...",progress:100}].forEach(I=>{setTimeout(()=>{Jn.textContent=I.text,gn.style.width=`${I.progress}%`,I.progress===100&&setTimeout(()=>{rt.style.display="none",Ar.textContent="Phase: AI Rewrite Ready",p("🤖 AI Reshape Engine compiled a recruiter-grade portfolio!"),ht(Pt.value||"1")},600)},I.time)})}function ht(d){if(!le||!Rt)return;const g=document.querySelector(`.template-grid-item[data-template="${d}"]`);g&&g.click(),setTimeout(()=>{const v=document.getElementById("main-cv-card");if(v){le.innerHTML="";const I=v.cloneNode(!0);I.id="cloned-reshaper-cv-card";const R=wi(),N=Ti(Rt.textContent||Rt.innerText),x=Es(N,R),F=I.querySelector("#cv-name-text");F&&(F.textContent=x.name);const z=I.querySelector("#cv-title-text");z&&(z.textContent=x.title);const oe=I.querySelector(".cv-section-p");oe&&(oe.textContent=x.summary);const ye=I.querySelector("#cv-skills-badges");ye&&(ye.innerHTML="",x.skills.forEach(ve=>{const X=document.createElement("span");X.className="skill-tag",X.textContent=ve,ye.appendChild(X)})),I.querySelectorAll(".cv-item-bullets").forEach((ve,X)=>{const Z=x.experienceBlocks[X]||[];ve.innerHTML="",Z.forEach(O=>{const Ee=document.createElement("li");Ee.textContent=O,ve.appendChild(Ee)})}),le.appendChild(I),le.className=`cv-card template-${d}`}},300)}Rt&&Rt.addEventListener("input",()=>{ht(Pt.value||"1")}),Pt&&Pt.addEventListener("change",()=>{ht(Pt.value)});let En=!1;Ht&&Ht.addEventListener("click",d=>{d.preventDefault(),En=!En;const g=document.getElementById("cloned-reshaper-cv-card");g&&(g.querySelectorAll("[contenteditable]").forEach(v=>{v.setAttribute("contenteditable",En?"true":"false"),En?(v.style.outline="1.5px dashed var(--primary-blue)",v.style.background="rgba(37, 99, 235, 0.03)"):(v.style.outline="none",v.style.background="transparent")}),Ht.innerHTML=En?"✨ Lock & Save":"🔧 Toggle Edit mode",p(En?"🔧 Interactive canvas modifications enabled.":"🔒 Changes locked into CVPilot builder."))}),_i&&_i.addEventListener("click",()=>{Ii()}),yn&&yn.addEventListener("click",()=>{Ii()});function Ii(){br&&(br.classList.remove("active"),document.body.style.overflow="",Ts())}_n&&_n.addEventListener("click",()=>{_n.disabled=!0,_n.innerHTML=`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:16px;height:16px;margin-right:8px;animation:spin 1s infinite linear;display:inline-block;"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)"></circle><path d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path></svg>
                Compiling Recruiter Package...
            `,setTimeout(()=>{_n.disabled=!1,_n.innerHTML=`
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:16px;height:16px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Export & Download PDF
                `,p("📥 Success! Your AI-reshaped, ATS-optimized CV package downloaded."),Ii()},2200)});function Cr(){const d=localStorage.getItem("cvpilot_session");if(d)try{const g=JSON.parse(d);$e=!0,Te={uid:g.uid||g.email||"",name:g.name,email:g.email||""},_t(g.name),p(`✨ Welcome back, ${g.name}! Workspace session auto-restored.`),In()}catch{localStorage.removeItem("cvpilot_session")}}window.applyLoggedInHeader=_t,window.showToast=p,window.performLogout=mi,Cr();const zt=document.getElementById("showcase-search-input"),wn=document.getElementById("clear-search-btn"),Tn=document.querySelectorAll("#showcase-filter-tabs .filter-tab"),Xn=document.querySelectorAll("#showcase-templates-grid .showcase-item");let Rr="all",Wt="";const pe=()=>{Xn.forEach(d=>{var ye,be,ve,X;const g=JSON.parse(d.getAttribute("data-categories")||"[]"),v=Rr==="all"||g.includes(Rr),I=(((ye=d.querySelector(".showcase-title"))==null?void 0:ye.textContent)||"").toLowerCase(),R=(((be=d.querySelector(".showcase-tag"))==null?void 0:be.textContent)||"").toLowerCase(),N=(((ve=d.querySelector(".mini-cv-name"))==null?void 0:ve.textContent)||"").toLowerCase(),x=(((X=d.querySelector(".mini-cv-title"))==null?void 0:X.textContent)||"").toLowerCase(),F=Array.from(d.querySelectorAll(".mini-cv-tag")).map(Z=>Z.textContent.toLowerCase()).join(" "),z=`${I} ${R} ${N} ${x} ${F}`,oe=Wt===""||z.includes(Wt);v&&oe?d.classList.remove("hidden-card"):d.classList.add("hidden-card")})};zt&&zt.addEventListener("input",d=>{Wt=d.target.value.toLowerCase().trim(),Wt.length>0?wn.style.display="flex":wn.style.display="none",pe()}),wn&&wn.addEventListener("click",()=>{zt.value="",Wt="",wn.style.display="none",pe(),zt.focus(),p("🔍 Cleared template search filters.")}),Tn.forEach(d=>{d.addEventListener("click",()=>{Tn.forEach(g=>g.classList.remove("active")),d.classList.add("active"),Rr=d.getAttribute("data-filter"),pe(),p(`📂 Showing templates filtered by: "${d.textContent}"`)})}),window.userResumes=[];function In(){if(!$e||!Te)return;const d=Te.uid||Te.email;if(window.CVPilotFirebaseDB&&window.CVPilotFirebaseDB.isConfigured)window.CVPilotFirebaseDB.getUserResumes(d).then(g=>{window.userResumes=g,bi(),console.log("💼 Firebase Firestore Resumes Synced:",g.length)}).catch(g=>{console.error("Firebase Firestore Resume Load Error:",g),p("⚠️ Cloud Sync Error: Unable to fetch your resumes from Firestore.")});else try{const g=localStorage.getItem("cvpilot_cloud_resumes");if(g){const v=JSON.parse(g);window.userResumes=v.filter(I=>I.ownerId===d)}else window.userResumes=[];bi(),console.log("💼 Mock Local Storage Resumes Synced:",window.userResumes.length)}catch(g){console.error("Local storage mock sync error:",g)}}function bi(){const d=document.getElementById("btn-dropdown-my-resumes");d&&(d.innerHTML=`💼 My Resumes (${window.userResumes.length})`)}const dt=document.getElementById("modal-btn-save-cloud");dt&&dt.addEventListener("click",()=>{if(!$e||!Te){Je.classList.add("active"),Ct("tab-login"),document.body.style.overflow="hidden",p("🔒 Protected Action: Please log in or sign up to save your resume to the cloud.");return}dt.disabled=!0;const d=dt.innerHTML;dt.innerHTML=`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 14px; height: 14px; margin-right: 8px; display: inline-block; vertical-align: -1.5px; animation: spin-loader 0.8s infinite linear;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                Syncing to Cloud...
            `;const g=$.querySelector(".mini-cv-name"),v=$.querySelector(".mini-cv-title"),I=$.querySelector(".mini-cv-summary")||$.querySelector("p"),R=g?g.textContent.trim():"James Anderson",N=v?v.textContent.trim():"Marketing Manager",x=I?I.textContent.trim():"",F=Te.uid||Te.email,z=`${F}_${Ne}`,oe=`${R}'s Custom ${Ne.charAt(0).toUpperCase()+Ne.slice(1)} CV`,ye=Array.from($.querySelectorAll(".mini-cv-education, .education-item")).map(O=>O.textContent.trim()),be=Array.from($.querySelectorAll(".mini-cv-experience, .experience-item")).map(O=>O.textContent.trim()),ve=Array.from($.querySelectorAll(".mini-cv-tag")).map(O=>O.textContent.trim()),X=Array.from($.querySelectorAll(".mini-cv-project, .project-item")).map(O=>O.textContent.trim()),Z={ownerId:F,resumeTitle:oe,selectedTemplate:Ne,atsScore:nt||92,canvasHtml:$.innerHTML,personalInfo:{name:R,title:N},summary:x,education:ye,experience:be,skills:ve,projects:X,createdAt:new Date().toISOString()};window.CVPilotFirebaseDB&&window.CVPilotFirebaseDB.isConfigured?window.CVPilotFirebaseDB.saveResume(z,Z).then(()=>{p(`💾 Cloud Success: "${oe}" securely saved to Firestore!`),In()}).catch(O=>{console.error("Firestore Resume Save Error:",O),p("⚠️ Cloud Save Failed: Unable to synchronize with Firestore.")}).finally(()=>{dt.disabled=!1,dt.innerHTML=d}):setTimeout(()=>{try{const O=localStorage.getItem("cvpilot_cloud_resumes"),Ee=O?JSON.parse(O):[],Et=Ee.findIndex(et=>et.id===z||et.ownerId===F&&et.selectedTemplate===Ne);Et>=0?Ee[Et]={id:z,...Z,updatedAt:new Date().toISOString()}:Ee.push({id:z,...Z,updatedAt:new Date().toISOString()}),localStorage.setItem("cvpilot_cloud_resumes",JSON.stringify(Ee)),p(`💾 Local Storage Sync: "${oe}" saved to simulated cloud database!`),In()}catch(O){console.error("Local Storage Save Error:",O),p("⚠️ Save Failed: Local persistence failure.")}finally{dt.disabled=!1,dt.innerHTML=d}},1e3)}),window.CVPilotAuthUI={showToast:d=>{p(d)},renderSignedIn:d=>{$e=!0,Te={uid:d.uid||d.email,name:d.name,email:d.email},d.persistLocal&&localStorage.setItem("cvpilot_session",JSON.stringify({uid:Te.uid,name:d.name,email:d.email,provider:d.provider||"Firebase"})),_t(d.name),lt(),p(`✨ Account Sync: Welcome back, ${d.name}! Dashboard fully active.`),In()},renderSignedOut:(d={})=>{$e=!1,Te={name:"",email:""},window.userResumes=[],localStorage.removeItem("cvpilot_session"),mi(d.silent,{skipFirebase:d.skipFirebase})}},window.dispatchEvent(new CustomEvent("cvpilot:auth-ui-ready"))});const bd=()=>{};var wc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ad=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,f=u?n[i+2]:0,y=o>>2,w=(o&3)<<4|l>>4;let S=(l&15)<<2|f>>6,L=f&63;u||(L=64,a||(S=64)),r.push(t[y],t[w],t[S],t[L])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(eu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ad(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const w=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||l==null||f==null||w==null)throw new Sd;const S=o<<2|l>>4;if(r.push(S),f!==64){const L=l<<4&240|f>>2;if(r.push(L),w!==64){const M=f<<6&192|w;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cd=function(n){const e=eu(n);return tu.encodeByteArray(e,!0)},$s=function(n){return Cd(n).replace(/\./g,"")},nu=function(n){try{return tu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=()=>Rd().__FIREBASE_DEFAULTS__,kd=()=>{if(typeof process>"u"||typeof wc>"u")return;const n=wc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Dd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&nu(n[1]);return e&&JSON.parse(e)},lo=()=>{try{return bd()||Pd()||kd()||Dd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ru=n=>{var e,t;return(t=(e=lo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Vd=n=>{const e=ru(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},iu=()=>{var n;return(n=lo())===null||n===void 0?void 0:n.config},su=n=>{var e;return(e=lo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ou(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[$s(JSON.stringify(t)),$s(JSON.stringify(a)),""].join(".")}const Di={};function xd(){const n={prod:[],emulator:[]};for(const e of Object.keys(Di))Di[e]?n.emulator.push(e):n.prod.push(e);return n}function Od(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Tc=!1;function au(n,e){if(typeof window>"u"||typeof document>"u"||!Qr(window.location.host)||Di[n]===e||Di[n]||Tc)return;Di[n]=e;function t(S){return`__firebase__banner__${S}`}const r="__firebase__banner",o=xd().prod.length>0;function a(){const S=document.getElementById(r);S&&S.remove()}function l(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function u(S,L){S.setAttribute("width","24"),S.setAttribute("id",L),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function f(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Tc=!0,a()},S}function y(S,L){S.setAttribute("id",L),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function w(){const S=Od(r),L=t("text"),M=document.getElementById(L)||document.createElement("span"),H=t("learnmore"),B=document.getElementById(H)||document.createElement("a"),ne=t("preprendIcon"),Q=document.getElementById(ne)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ee=S.element;l(ee),y(B,H);const he=f();u(Q,ne),ee.append(Q,M,B,he),document.body.appendChild(ee)}o?(M.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function Fd(){var n;const e=(n=lo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ud(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $d(){const n=Ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jd(){return!Fd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hd(){try{return typeof indexedDB=="object"}catch{return!1}}function zd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="FirebaseError";class rn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Wd,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Gd(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new rn(i,l,r)}}function Gd(n,e){return n.replace(Kd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Kd=/\{\$([^}]+)}/g;function Qd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ir(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Ic(o)&&Ic(a)){if(!ir(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ic(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Si(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Ci(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Jd(n,e){const t=new Yd(n,e);return t.subscribe.bind(t)}class Yd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Xd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=xo),i.error===void 0&&(i.error=xo),i.complete===void 0&&(i.complete=xo);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n){return n&&n._delegate?n._delegate:n}class sr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ld;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tf(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ef(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ef(n){return n===tr?void 0:n}function tf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));const rf={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},sf=re.INFO,of={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},af=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=of[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class va{constructor(e){this.name=e,this._logLevel=sf,this._logHandler=af,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const cf=(n,e)=>e.some(t=>n instanceof t);let bc,Ac;function lf(){return bc||(bc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uf(){return Ac||(Ac=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cu=new WeakMap,Wo=new WeakMap,lu=new WeakMap,Oo=new WeakMap,Ea=new WeakMap;function hf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Rn(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&cu.set(t,n)}).catch(()=>{}),Ea.set(e,n),e}function df(n){if(Wo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Wo.set(n,e)}let Go={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||lu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ff(n){Go=n(Go)}function mf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Mo(this),e,...t);return lu.set(r,e.sort?e.sort():[e]),Rn(r)}:uf().includes(n)?function(...e){return n.apply(Mo(this),e),Rn(cu.get(this))}:function(...e){return Rn(n.apply(Mo(this),e))}}function pf(n){return typeof n=="function"?mf(n):(n instanceof IDBTransaction&&df(n),cf(n,lf())?new Proxy(n,Go):n)}function Rn(n){if(n instanceof IDBRequest)return hf(n);if(Oo.has(n))return Oo.get(n);const e=pf(n);return e!==n&&(Oo.set(n,e),Ea.set(e,n)),e}const Mo=n=>Ea.get(n);function gf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),l=Rn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Rn(a.result),u.oldVersion,u.newVersion,Rn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const yf=["get","getKey","getAll","getAllKeys","count"],_f=["put","add","delete","clear"],Fo=new Map;function Sc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fo.get(e))return Fo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=_f.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yf.includes(t)))return;const o=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),i&&u.done]))[0]};return Fo.set(e,o),o}ff(n=>({...n,get:(e,t,r)=>Sc(e,t)||n.get(e,t,r),has:(e,t)=>!!Sc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ef(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ef(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ko="@firebase/app",Cc="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new va("@firebase/app"),wf="@firebase/app-compat",Tf="@firebase/analytics-compat",If="@firebase/analytics",bf="@firebase/app-check-compat",Af="@firebase/app-check",Sf="@firebase/auth",Cf="@firebase/auth-compat",Rf="@firebase/database",Pf="@firebase/data-connect",kf="@firebase/database-compat",Df="@firebase/functions",Vf="@firebase/functions-compat",Lf="@firebase/installations",Nf="@firebase/installations-compat",xf="@firebase/messaging",Of="@firebase/messaging-compat",Mf="@firebase/performance",Ff="@firebase/performance-compat",Uf="@firebase/remote-config",Bf="@firebase/remote-config-compat",qf="@firebase/storage",$f="@firebase/storage-compat",jf="@firebase/firestore",Hf="@firebase/ai",zf="@firebase/firestore-compat",Wf="firebase",Gf="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="[DEFAULT]",Kf={[Ko]:"fire-core",[wf]:"fire-core-compat",[If]:"fire-analytics",[Tf]:"fire-analytics-compat",[Af]:"fire-app-check",[bf]:"fire-app-check-compat",[Sf]:"fire-auth",[Cf]:"fire-auth-compat",[Rf]:"fire-rtdb",[Pf]:"fire-data-connect",[kf]:"fire-rtdb-compat",[Df]:"fire-fn",[Vf]:"fire-fn-compat",[Lf]:"fire-iid",[Nf]:"fire-iid-compat",[xf]:"fire-fcm",[Of]:"fire-fcm-compat",[Mf]:"fire-perf",[Ff]:"fire-perf-compat",[Uf]:"fire-rc",[Bf]:"fire-rc-compat",[qf]:"fire-gcs",[$f]:"fire-gcs-compat",[jf]:"fire-fst",[zf]:"fire-fst-compat",[Hf]:"fire-vertex","fire-js":"fire-js",[Wf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Map,Qf=new Map,Jo=new Map;function Rc(n,e){try{n.container.addComponent(e)}catch(t){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $r(n){const e=n.name;if(Jo.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;Jo.set(e,n);for(const t of js.values())Rc(t,n);for(const t of Qf.values())Rc(t,n);return!0}function wa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function st(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new Gi("app","Firebase",Jf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=Gf;function uu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qo,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(t||(t=iu()),!t)throw Pn.create("no-options");const o=js.get(i);if(o){if(ir(t,o.options)&&ir(r,o.config))return o;throw Pn.create("duplicate-app",{appName:i})}const a=new nf(i);for(const u of Jo.values())a.addComponent(u);const l=new Yf(t,r,a);return js.set(i,l),l}function hu(n=Qo){const e=js.get(n);if(!e&&n===Qo&&iu())return uu();if(!e)throw Pn.create("no-app",{appName:n});return e}function kn(n,e,t){var r;let i=(r=Kf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(l.join(" "));return}$r(new sr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="firebase-heartbeat-database",Zf=1,Mi="firebase-heartbeat-store";let Uo=null;function du(){return Uo||(Uo=gf(Xf,Zf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Mi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pn.create("idb-open",{originalErrorMessage:n.message})})),Uo}async function em(n){try{const t=(await du()).transaction(Mi),r=await t.objectStore(Mi).get(fu(n));return await t.done,r}catch(e){if(e instanceof rn)Zt.warn(e.message);else{const t=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(t.message)}}}async function Pc(n,e){try{const r=(await du()).transaction(Mi,"readwrite");await r.objectStore(Mi).put(e,fu(n)),await r.done}catch(t){if(t instanceof rn)Zt.warn(t.message);else{const r=Pn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Zt.warn(r.message)}}}function fu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=1024,nm=30;class rm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=kc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>nm){const a=om(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=kc(),{heartbeatsToSend:r,unsentEntries:i}=im(this._heartbeatsCache.heartbeats),o=$s(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Zt.warn(t),""}}}function kc(){return new Date().toISOString().substring(0,10)}function im(n,e=tm){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Dc(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Dc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class sm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hd()?zd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await em(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dc(n){return $s(JSON.stringify({version:2,heartbeats:n})).length}function om(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(n){$r(new sr("platform-logger",e=>new vf(e),"PRIVATE")),$r(new sr("heartbeat",e=>new rm(e),"PRIVATE")),kn(Ko,Cc,n),kn(Ko,Cc,"esm2017"),kn("fire-js","")}am("");var cm="firebase",lm="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(cm,lm,"app");function Ta(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function mu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const um=mu,pu=new Gi("auth","Firebase",mu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new va("@firebase/auth");function hm(n,...e){Hs.logLevel<=re.WARN&&Hs.warn(`Auth (${Jr}): ${n}`,...e)}function Vs(n,...e){Hs.logLevel<=re.ERROR&&Hs.error(`Auth (${Jr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n,...e){throw ba(n,...e)}function bt(n,...e){return ba(n,...e)}function Ia(n,e,t){const r=Object.assign(Object.assign({},um()),{[e]:t});return new Gi("auth","Firebase",r).create(e,{appName:n.name})}function Yt(n){return Ia(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dm(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&pt(n,"argument-error"),Ia(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ba(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return pu.create(n,...e)}function G(n,e,...t){if(!n)throw ba(e,...t)}function Qt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Vs(e),new Error(e)}function en(n,e){n||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fm(){return Vc()==="http:"||Vc()==="https:"}function Vc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fm()||Bd()||"connection"in navigator)?navigator.onLine:!0}function pm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){this.shortDelay=e,this.longDelay=t,en(t>e,"Short delay should be less than long delay!"),this.isMobile=Md()||qd()}get(){return mm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n,e){en(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_m=new Qi(3e4,6e4);function qn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function sn(n,e,t,r,i={}){return yu(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=Ki(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:u},o);return Ud()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Qr(n.emulatorConfig.host)&&(f.credentials="include"),gu.fetch()(await _u(n,n.config.apiHost,t,l),f)})}async function yu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},gm),e);try{const i=new Em(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw As(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw As(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw As(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw As(n,"user-disabled",a);const y=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ia(n,y,f);pt(n,y)}}catch(i){if(i instanceof rn)throw i;pt(n,"network-request-failed",{message:String(i)})}}async function Ji(n,e,t,r,i={}){const o=await sn(n,e,t,r,i);return"mfaPendingCredential"in o&&pt(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function _u(n,e,t,r){const i=`${e}${t}?${r}`,o=n,a=o.config.emulator?Aa(n.config,i):`${n.config.apiScheme}://${i}`;return ym.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function vm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Em{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(bt(this.auth,"network-request-failed")),_m.get())})}}function As(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=bt(n,e,r);return i.customData._tokenResponse=t,i}function Lc(n){return n!==void 0&&n.enterprise!==void 0}class wm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return vm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Tm(n,e){return sn(n,"GET","/v2/recaptchaConfig",qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(n,e){return sn(n,"POST","/v1/accounts:delete",e)}async function zs(n,e){return sn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bm(n,e=!1){const t=Qe(n),r=await t.getIdToken(e),i=Sa(r);G(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Vi(Bo(i.auth_time)),issuedAtTime:Vi(Bo(i.iat)),expirationTime:Vi(Bo(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Bo(n){return Number(n)*1e3}function Sa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Vs("JWT malformed, contained fewer than 3 sections"),null;try{const i=nu(t);return i?JSON.parse(i):(Vs("Failed to decode base64 JWT payload"),null)}catch(i){return Vs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Nc(n){const e=Sa(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof rn&&Am(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Am({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(n){var e;const t=n.auth,r=await n.getIdToken(),i=await jr(n,zs(t,{idToken:r}));G(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?vu(o.providerUserInfo):[],l=Rm(n.providerData,a),u=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(l!=null&&l.length),y=u?f:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Xo(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,w)}async function Cm(n){const e=Qe(n);await Ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rm(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vu(n){return n.map(e=>{var{providerId:t}=e,r=Ta(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(n,e){const t=await yu(n,{},async()=>{const r=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=await _u(n,i,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Qr(n.emulatorConfig.host)&&(u.credentials="include"),gu.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function km(n,e){return sn(n,"POST","/v2/accounts:revokeToken",qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Nc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await Pm(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new Or;return r&&(G(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(G(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Ta(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Xo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await jr(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bm(this,e)}reload(){return Cm(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ws(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(Yt(this.auth));const e=await this.getIdToken();return await jr(this,Im(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,l,u,f,y;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(i=t.email)!==null&&i!==void 0?i:void 0,L=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,M=(a=t.photoURL)!==null&&a!==void 0?a:void 0,H=(l=t.tenantId)!==null&&l!==void 0?l:void 0,B=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,ne=(f=t.createdAt)!==null&&f!==void 0?f:void 0,Q=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ee,emailVerified:he,isAnonymous:Pe,providerData:ae,stsTokenManager:b}=t;G(ee&&b,e,"internal-error");const _=Or.fromJSON(this.name,b);G(typeof ee=="string",e,"internal-error"),bn(w,e.name),bn(S,e.name),G(typeof he=="boolean",e,"internal-error"),G(typeof Pe=="boolean",e,"internal-error"),bn(L,e.name),bn(M,e.name),bn(H,e.name),bn(B,e.name),bn(ne,e.name),bn(Q,e.name);const E=new Tt({uid:ee,auth:e,email:S,emailVerified:he,displayName:w,isAnonymous:Pe,photoURL:M,phoneNumber:L,tenantId:H,stsTokenManager:_,createdAt:ne,lastLoginAt:Q});return ae&&Array.isArray(ae)&&(E.providerData=ae.map(T=>Object.assign({},T))),B&&(E._redirectEventId=B),E}static async _fromIdTokenResponse(e,t,r=!1){const i=new Or;i.updateFromServerResponse(t);const o=new Tt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ws(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];G(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?vu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new Or;l.updateFromIdToken(r);const u=new Tt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Xo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Map;function Jt(n){en(n instanceof Function,"Expected a class definition");let e=xc.get(n);return e?(en(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Eu.type="NONE";const Oc=Eu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(n,e,t){return`firebase:${n}:${e}:${t}`}class Mr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ls(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ls("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zs(this.auth,{idToken:e}).catch(()=>{});return t?Tt._fromGetAccountInfoResponse(this.auth,t,e):null}return Tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Mr(Jt(Oc),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||Jt(Oc);const a=Ls(r,e.config.apiKey,e.name);let l=null;for(const f of t)try{const y=await f._get(a);if(y){let w;if(typeof y=="string"){const S=await zs(e,{idToken:y}).catch(()=>{});if(!S)break;w=await Tt._fromGetAccountInfoResponse(e,S,y)}else w=Tt._fromJSON(e,y);f!==o&&(l=w),o=f;break}}catch{}const u=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Mr(o,e,r):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new Mr(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Su(e))return"Blackberry";if(Cu(e))return"Webos";if(Tu(e))return"Safari";if((e.includes("chrome/")||Iu(e))&&!e.includes("edge/"))return"Chrome";if(Au(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wu(n=Ke()){return/firefox\//i.test(n)}function Tu(n=Ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Iu(n=Ke()){return/crios\//i.test(n)}function bu(n=Ke()){return/iemobile/i.test(n)}function Au(n=Ke()){return/android/i.test(n)}function Su(n=Ke()){return/blackberry/i.test(n)}function Cu(n=Ke()){return/webos/i.test(n)}function Ca(n=Ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Dm(n=Ke()){var e;return Ca(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vm(){return $d()&&document.documentMode===10}function Ru(n=Ke()){return Ca(n)||Au(n)||Cu(n)||Su(n)||/windows phone/i.test(n)||bu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n,e=[]){let t;switch(n){case"Browser":t=Mc(Ke());break;case"Worker":t=`${Mc(Ke())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Jr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nm(n,e={}){return sn(n,"GET","/v2/passwordPolicy",qn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=6;class Om{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:xm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fc(this),this.idTokenSubscription=new Fc(this),this.beforeStateQueue=new Lm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jt(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await Mr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zs(this,{idToken:e}),r=await Tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(st(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ws(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(st(this.app))return Promise.reject(Yt(this));const t=e?Qe(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(Yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return st(this.app)?Promise.reject(Yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nm(this),t=new Om(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await km(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Jt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[Jt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(st(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&hm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $n(n){return Qe(n)}class Fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jd(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fm(n){uo=n}function ku(n){return uo.loadJS(n)}function Um(){return uo.recaptchaEnterpriseScript}function Bm(){return uo.gapiScript}function qm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class $m{constructor(){this.enterprise=new jm}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class jm{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Hm="recaptcha-enterprise",Du="NO_RECAPTCHA";class zm{constructor(e){this.type=Hm,this.auth=$n(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{Tm(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new wm(u);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,a(f.siteKey)}}).catch(u=>{l(u)})})}function i(o,a,l){const u=window.grecaptcha;Lc(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(f=>{a(f)}).catch(()=>{a(Du)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $m().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(l=>{if(!t&&Lc(window.grecaptcha))i(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Um();u.length!==0&&(u+=l),ku(u).then(()=>{i(l,o,a)}).catch(f=>{a(f)})}}).catch(l=>{a(l)})})}}async function Uc(n,e,t,r=!1,i=!1){const o=new zm(n);let a;if(i)a=Du;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:f,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Zo(n,e,t,r,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Uc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Uc(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n,e){const t=wa(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(ir(o,e??{}))return i;pt(i,"already-initialized")}return t.initialize({options:e})}function Gm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Jt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Km(n,e,t){const r=$n(n);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Vu(e),{host:a,port:l}=Qm(e),u=l===null?"":`:${l}`,f={url:`${o}//${a}${u}/`},y=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(ir(f,r.config.emulator)&&ir(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,Qr(a)?(ou(`${o}//${a}${u}`),au("Auth",!0)):Jm()}function Vu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Qm(n){const e=Vu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Bc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Bc(a)}}}function Bc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,t){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function Ym(n,e){return sn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(n,e){return Ji(n,"POST","/v1/accounts:signInWithPassword",qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(n,e){return Ji(n,"POST","/v1/accounts:signInWithEmailLink",qn(n,e))}async function ep(n,e){return Ji(n,"POST","/v1/accounts:signInWithEmailLink",qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Ra{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Fi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Fi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zo(e,t,"signInWithPassword",Xm);case"emailLink":return Zm(e,{email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zo(e,r,"signUpPassword",Ym);case"emailLink":return ep(e,{idToken:t,email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n,e){return Ji(n,"POST","/v1/accounts:signInWithIdp",qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="http://localhost";class or extends Ra{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Ta(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new or(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Fr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}buildRequest(){const e={requestUri:tp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ki(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rp(n){const e=Si(Ci(n)).link,t=e?Si(Ci(e)).deep_link_id:null,r=Si(Ci(n)).deep_link_id;return(r?Si(Ci(r)).link:null)||r||t||e||n}class Pa{constructor(e){var t,r,i,o,a,l;const u=Si(Ci(e)),f=(t=u.apiKey)!==null&&t!==void 0?t:null,y=(r=u.oobCode)!==null&&r!==void 0?r:null,w=np((i=u.mode)!==null&&i!==void 0?i:null);G(f&&y&&w,"argument-error"),this.apiKey=f,this.operation=w,this.code=y,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=rp(e);try{return new Pa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.providerId=Yr.PROVIDER_ID}static credential(e,t){return Fi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Pa.parseLink(t);return G(r,"argument-error"),Fi._fromEmailAndCode(e,r.code,r.tenantId)}}Yr.PROVIDER_ID="password";Yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends ka{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Yi{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com";An.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return or._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Gt.credential(t,r)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Yi{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Yi{constructor(){super("twitter.com")}static credential(e,t){return or._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Sn.credential(t,r)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ip(n,e){return Ji(n,"POST","/v1/accounts:signUp",qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Tt._fromIdTokenResponse(e,r,i),a=qc(r);return new ar({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=qc(r);return new ar({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function qc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends rn{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gs.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Gs(e,t,r,i)}}function Lu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Gs._fromErrorAndOperation(n,o,e,r):o})}async function sp(n,e,t=!1){const r=await jr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ar._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(n,e,t=!1){const{auth:r}=n;if(st(r.app))return Promise.reject(Yt(r));const i="reauthenticate";try{const o=await jr(n,Lu(r,i,e,n),t);G(o.idToken,r,"internal-error");const a=Sa(o.idToken);G(a,r,"internal-error");const{sub:l}=a;return G(n.uid===l,r,"user-mismatch"),ar._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nu(n,e,t=!1){if(st(n.app))return Promise.reject(Yt(n));const r="signIn",i=await Lu(n,r,e),o=await ar._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function ap(n,e){return Nu($n(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xu(n){const e=$n(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cp(n,e,t){if(st(n.app))return Promise.reject(Yt(n));const r=$n(n),a=await Zo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ip).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&xu(n),u}),l=await ar._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function lp(n,e,t){return st(n.app)?Promise.reject(Yt(n)):ap(Qe(n),Yr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xu(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(n,e){return sn(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hp(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Qe(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await jr(r,up(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function dp(n,e,t,r){return Qe(n).onIdTokenChanged(e,t,r)}function fp(n,e,t){return Qe(n).beforeAuthStateChanged(e,t)}function mp(n,e,t,r){return Qe(n).onAuthStateChanged(e,t,r)}function $c(n){return Qe(n).signOut()}const Ks="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ks,"1"),this.storage.removeItem(Ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=1e3,gp=10;class Mu extends Ou{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ru(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Vm()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},pp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mu.type="LOCAL";const yp=Mu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends Ou{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fu.type="SESSION";const Uu=Fu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ho(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async f=>f(t.origin,o)),u=await _p(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ho.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const f=Da("",20);i.port1.start();const y=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(w){const S=w;if(S.data.eventId===f)switch(S.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(S.data.response);break;default:clearTimeout(y),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function Ep(n){Vt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function wp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ip(){return Bu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="firebaseLocalStorageDb",bp=1,Qs="firebaseLocalStorage",$u="fbase_key";class Xi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fo(n,e){return n.transaction([Qs],e?"readwrite":"readonly").objectStore(Qs)}function Ap(){const n=indexedDB.deleteDatabase(qu);return new Xi(n).toPromise()}function ea(){const n=indexedDB.open(qu,bp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Qs,{keyPath:$u})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Qs)?e(r):(r.close(),await Ap(),e(await ea()))})})}async function jc(n,e,t){const r=fo(n,!0).put({[$u]:e,value:t});return new Xi(r).toPromise()}async function Sp(n,e){const t=fo(n,!1).get(e),r=await new Xi(t).toPromise();return r===void 0?null:r.value}function Hc(n,e){const t=fo(n,!0).delete(e);return new Xi(t).toPromise()}const Cp=800,Rp=3;class ju{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ea(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Rp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ho._getInstance(Ip()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await wp(),!this.activeServiceWorker)return;this.sender=new vp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ea();return await jc(e,Ks,"1"),await Hc(e,Ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>jc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Sp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=fo(i,!1).getAll();return new Xi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ju.type="LOCAL";const Pp=ju;new Qi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(n,e){return e?Jt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Ra{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kp(n){return Nu(n.auth,new Va(n),n.bypassAuthState)}function Dp(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),op(t,new Va(n),n.bypassAuthState)}async function Vp(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),sp(t,new Va(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kp;case"linkViaPopup":case"linkViaRedirect":return Vp;case"reauthViaPopup":case"reauthViaRedirect":return Dp;default:pt(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=new Qi(2e3,1e4);async function Np(n,e,t){if(st(n.app))return Promise.reject(bt(n,"operation-not-supported-in-this-environment"));const r=$n(n);dm(n,e,ka);const i=Hu(r,t);return new nr(r,"signInViaPopup",e,i).executeNotNull()}class nr extends zu{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=Da();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lp.get())};e()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="pendingRedirect",Ns=new Map;class Op extends zu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ns.get(this.auth._key());if(!e){try{const r=await Mp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ns.set(this.auth._key(),e)}return this.bypassAuthState||Ns.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mp(n,e){const t=Bp(e),r=Up(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Fp(n,e){Ns.set(n._key(),e)}function Up(n){return Jt(n._redirectPersistence)}function Bp(n){return Ls(xp,n.config.apiKey,n.name)}async function qp(n,e,t=!1){if(st(n.app))return Promise.reject(Yt(n));const r=$n(n),i=Hu(r,e),a=await new Op(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=600*1e3;class jp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Wu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(bt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$p&&this.cachedEventUids.clear(),this.cachedEventUids.has(zc(e))}saveEventToCache(e){this.cachedEventUids.add(zc(e)),this.lastProcessedEventTime=Date.now()}}function zc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Wu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(n,e={}){return sn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gp=/^https?/;async function Kp(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zp(n);for(const t of e)try{if(Qp(t))return}catch{}pt(n,"unauthorized-domain")}function Qp(n){const e=Yo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Gp.test(t))return!1;if(Wp.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=new Qi(3e4,6e4);function Wc(){const n=Vt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Yp(n){return new Promise((e,t)=>{var r,i,o;function a(){Wc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wc(),t(bt(n,"network-request-failed"))},timeout:Jp.get()})}if(!((i=(r=Vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Vt().gapi)===null||o===void 0)&&o.load)a();else{const l=qm("iframefcb");return Vt()[l]=()=>{gapi.load?a():t(bt(n,"network-request-failed"))},ku(`${Bm()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw xs=null,e})}let xs=null;function Xp(n){return xs=xs||Yp(n),xs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new Qi(5e3,15e3),eg="__/auth/iframe",tg="emulator/auth/iframe",ng={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ig(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Aa(e,tg):`https://${n.config.authDomain}/${eg}`,r={apiKey:e.apiKey,appName:n.name,v:Jr},i=rg.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Ki(r).slice(1)}`}async function sg(n){const e=await Xp(n),t=Vt().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:ig(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ng,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=bt(n,"network-request-failed"),l=Vt().setTimeout(()=>{o(a)},Zp.get());function u(){Vt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ag=500,cg=600,lg="_blank",ug="http://localhost";class Gc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hg(n,e,t,r=ag,i=cg){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},og),{width:r.toString(),height:i.toString(),top:o,left:a}),f=Ke().toLowerCase();t&&(l=Iu(f)?lg:t),wu(f)&&(e=e||ug,u.scrollbars="yes");const y=Object.entries(u).reduce((S,[L,M])=>`${S}${L}=${M},`,"");if(Dm(f)&&l!=="_self")return dg(e||"",l),new Gc(null);const w=window.open(e||"",l,y);G(w,n,"popup-blocked");try{w.focus()}catch{}return new Gc(w)}function dg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="__/auth/handler",mg="emulator/auth/handler",pg=encodeURIComponent("fac");async function Kc(n,e,t,r,i,o){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Jr,eventId:i};if(e instanceof ka){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Qd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries({}))a[y]=w}if(e instanceof Yi){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(a.scopes=y.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const y of Object.keys(l))l[y]===void 0&&delete l[y];const u=await n._getAppCheckToken(),f=u?`#${pg}=${encodeURIComponent(u)}`:"";return`${gg(n)}?${Ki(l).slice(1)}${f}`}function gg({config:n}){return n.emulator?Aa(n,mg):`https://${n.authDomain}/${fg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="webStorageSupport";class yg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uu,this._completeRedirectFn=qp,this._overrideRedirectResult=Fp}async _openPopup(e,t,r,i){var o;en((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Kc(e,t,r,Yo(),i);return hg(e,a,Da())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Kc(e,t,r,Yo(),i);return Ep(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(en(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await sg(e),r=new jp(e);return t.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qo,{type:qo},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[qo];a!==void 0&&t(!!a),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ru()||Tu()||Ca()}}const _g=yg;var Qc="@firebase/auth",Jc="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wg(n){$r(new sr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pu(n)},f=new Mm(r,i,o,u);return Gm(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),$r(new sr("auth-internal",e=>{const t=$n(e.getProvider("auth").getImmediate());return(r=>new vg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(Qc,Jc,Eg(n)),kn(Qc,Jc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=300,Ig=su("authIdTokenMaxAge")||Tg;let Yc=null;const bg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ig)return;const i=t==null?void 0:t.token;Yc!==i&&(Yc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ag(n=hu()){const e=wa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Wm(n,{popupRedirectResolver:_g,persistence:[Pp,yp,Uu]}),r=su("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=bg(o.toString());fp(t,a,()=>a(t.currentUser)),dp(t,l=>a(l))}}const i=ru("auth");return i&&Km(t,`http://${i}`),t}function Sg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Fm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=bt("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Sg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wg("Browser");var Xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dn,Gu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function E(){}E.prototype=_.prototype,b.D=_.prototype,b.prototype=new E,b.prototype.constructor=b,b.C=function(T,A,P){for(var p=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)p[Le-2]=arguments[Le];return _.prototype[A].apply(T,p)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,_,E){E||(E=0);var T=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)T[A]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(A=0;16>A;++A)T[A]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=b.g[0],E=b.g[1],A=b.g[2];var P=b.g[3],p=_+(P^E&(A^P))+T[0]+3614090360&4294967295;_=E+(p<<7&4294967295|p>>>25),p=P+(A^_&(E^A))+T[1]+3905402710&4294967295,P=_+(p<<12&4294967295|p>>>20),p=A+(E^P&(_^E))+T[2]+606105819&4294967295,A=P+(p<<17&4294967295|p>>>15),p=E+(_^A&(P^_))+T[3]+3250441966&4294967295,E=A+(p<<22&4294967295|p>>>10),p=_+(P^E&(A^P))+T[4]+4118548399&4294967295,_=E+(p<<7&4294967295|p>>>25),p=P+(A^_&(E^A))+T[5]+1200080426&4294967295,P=_+(p<<12&4294967295|p>>>20),p=A+(E^P&(_^E))+T[6]+2821735955&4294967295,A=P+(p<<17&4294967295|p>>>15),p=E+(_^A&(P^_))+T[7]+4249261313&4294967295,E=A+(p<<22&4294967295|p>>>10),p=_+(P^E&(A^P))+T[8]+1770035416&4294967295,_=E+(p<<7&4294967295|p>>>25),p=P+(A^_&(E^A))+T[9]+2336552879&4294967295,P=_+(p<<12&4294967295|p>>>20),p=A+(E^P&(_^E))+T[10]+4294925233&4294967295,A=P+(p<<17&4294967295|p>>>15),p=E+(_^A&(P^_))+T[11]+2304563134&4294967295,E=A+(p<<22&4294967295|p>>>10),p=_+(P^E&(A^P))+T[12]+1804603682&4294967295,_=E+(p<<7&4294967295|p>>>25),p=P+(A^_&(E^A))+T[13]+4254626195&4294967295,P=_+(p<<12&4294967295|p>>>20),p=A+(E^P&(_^E))+T[14]+2792965006&4294967295,A=P+(p<<17&4294967295|p>>>15),p=E+(_^A&(P^_))+T[15]+1236535329&4294967295,E=A+(p<<22&4294967295|p>>>10),p=_+(A^P&(E^A))+T[1]+4129170786&4294967295,_=E+(p<<5&4294967295|p>>>27),p=P+(E^A&(_^E))+T[6]+3225465664&4294967295,P=_+(p<<9&4294967295|p>>>23),p=A+(_^E&(P^_))+T[11]+643717713&4294967295,A=P+(p<<14&4294967295|p>>>18),p=E+(P^_&(A^P))+T[0]+3921069994&4294967295,E=A+(p<<20&4294967295|p>>>12),p=_+(A^P&(E^A))+T[5]+3593408605&4294967295,_=E+(p<<5&4294967295|p>>>27),p=P+(E^A&(_^E))+T[10]+38016083&4294967295,P=_+(p<<9&4294967295|p>>>23),p=A+(_^E&(P^_))+T[15]+3634488961&4294967295,A=P+(p<<14&4294967295|p>>>18),p=E+(P^_&(A^P))+T[4]+3889429448&4294967295,E=A+(p<<20&4294967295|p>>>12),p=_+(A^P&(E^A))+T[9]+568446438&4294967295,_=E+(p<<5&4294967295|p>>>27),p=P+(E^A&(_^E))+T[14]+3275163606&4294967295,P=_+(p<<9&4294967295|p>>>23),p=A+(_^E&(P^_))+T[3]+4107603335&4294967295,A=P+(p<<14&4294967295|p>>>18),p=E+(P^_&(A^P))+T[8]+1163531501&4294967295,E=A+(p<<20&4294967295|p>>>12),p=_+(A^P&(E^A))+T[13]+2850285829&4294967295,_=E+(p<<5&4294967295|p>>>27),p=P+(E^A&(_^E))+T[2]+4243563512&4294967295,P=_+(p<<9&4294967295|p>>>23),p=A+(_^E&(P^_))+T[7]+1735328473&4294967295,A=P+(p<<14&4294967295|p>>>18),p=E+(P^_&(A^P))+T[12]+2368359562&4294967295,E=A+(p<<20&4294967295|p>>>12),p=_+(E^A^P)+T[5]+4294588738&4294967295,_=E+(p<<4&4294967295|p>>>28),p=P+(_^E^A)+T[8]+2272392833&4294967295,P=_+(p<<11&4294967295|p>>>21),p=A+(P^_^E)+T[11]+1839030562&4294967295,A=P+(p<<16&4294967295|p>>>16),p=E+(A^P^_)+T[14]+4259657740&4294967295,E=A+(p<<23&4294967295|p>>>9),p=_+(E^A^P)+T[1]+2763975236&4294967295,_=E+(p<<4&4294967295|p>>>28),p=P+(_^E^A)+T[4]+1272893353&4294967295,P=_+(p<<11&4294967295|p>>>21),p=A+(P^_^E)+T[7]+4139469664&4294967295,A=P+(p<<16&4294967295|p>>>16),p=E+(A^P^_)+T[10]+3200236656&4294967295,E=A+(p<<23&4294967295|p>>>9),p=_+(E^A^P)+T[13]+681279174&4294967295,_=E+(p<<4&4294967295|p>>>28),p=P+(_^E^A)+T[0]+3936430074&4294967295,P=_+(p<<11&4294967295|p>>>21),p=A+(P^_^E)+T[3]+3572445317&4294967295,A=P+(p<<16&4294967295|p>>>16),p=E+(A^P^_)+T[6]+76029189&4294967295,E=A+(p<<23&4294967295|p>>>9),p=_+(E^A^P)+T[9]+3654602809&4294967295,_=E+(p<<4&4294967295|p>>>28),p=P+(_^E^A)+T[12]+3873151461&4294967295,P=_+(p<<11&4294967295|p>>>21),p=A+(P^_^E)+T[15]+530742520&4294967295,A=P+(p<<16&4294967295|p>>>16),p=E+(A^P^_)+T[2]+3299628645&4294967295,E=A+(p<<23&4294967295|p>>>9),p=_+(A^(E|~P))+T[0]+4096336452&4294967295,_=E+(p<<6&4294967295|p>>>26),p=P+(E^(_|~A))+T[7]+1126891415&4294967295,P=_+(p<<10&4294967295|p>>>22),p=A+(_^(P|~E))+T[14]+2878612391&4294967295,A=P+(p<<15&4294967295|p>>>17),p=E+(P^(A|~_))+T[5]+4237533241&4294967295,E=A+(p<<21&4294967295|p>>>11),p=_+(A^(E|~P))+T[12]+1700485571&4294967295,_=E+(p<<6&4294967295|p>>>26),p=P+(E^(_|~A))+T[3]+2399980690&4294967295,P=_+(p<<10&4294967295|p>>>22),p=A+(_^(P|~E))+T[10]+4293915773&4294967295,A=P+(p<<15&4294967295|p>>>17),p=E+(P^(A|~_))+T[1]+2240044497&4294967295,E=A+(p<<21&4294967295|p>>>11),p=_+(A^(E|~P))+T[8]+1873313359&4294967295,_=E+(p<<6&4294967295|p>>>26),p=P+(E^(_|~A))+T[15]+4264355552&4294967295,P=_+(p<<10&4294967295|p>>>22),p=A+(_^(P|~E))+T[6]+2734768916&4294967295,A=P+(p<<15&4294967295|p>>>17),p=E+(P^(A|~_))+T[13]+1309151649&4294967295,E=A+(p<<21&4294967295|p>>>11),p=_+(A^(E|~P))+T[4]+4149444226&4294967295,_=E+(p<<6&4294967295|p>>>26),p=P+(E^(_|~A))+T[11]+3174756917&4294967295,P=_+(p<<10&4294967295|p>>>22),p=A+(_^(P|~E))+T[2]+718787259&4294967295,A=P+(p<<15&4294967295|p>>>17),p=E+(P^(A|~_))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(A+(p<<21&4294967295|p>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+P&4294967295}r.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var E=_-this.blockSize,T=this.B,A=this.h,P=0;P<_;){if(A==0)for(;P<=E;)i(this,b,P),P+=this.blockSize;if(typeof b=="string"){for(;P<_;)if(T[A++]=b.charCodeAt(P++),A==this.blockSize){i(this,T),A=0;break}}else for(;P<_;)if(T[A++]=b[P++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var E=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=E&255,E/=256;for(this.u(b),b=Array(16),_=E=0;4>_;++_)for(var T=0;32>T;T+=8)b[E++]=this.g[_]>>>T&255;return b};function o(b,_){var E=l;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=_(b)}function a(b,_){this.h=_;for(var E=[],T=!0,A=b.length-1;0<=A;A--){var P=b[A]|0;T&&P==_||(E[A]=P,T=!1)}this.g=E}var l={};function u(b){return-128<=b&&128>b?o(b,function(_){return new a([_|0],0>_?-1:0)}):new a([b|0],0>b?-1:0)}function f(b){if(isNaN(b)||!isFinite(b))return w;if(0>b)return B(f(-b));for(var _=[],E=1,T=0;b>=E;T++)_[T]=b/E|0,E*=4294967296;return new a(_,0)}function y(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return B(y(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=f(Math.pow(_,8)),T=w,A=0;A<b.length;A+=8){var P=Math.min(8,b.length-A),p=parseInt(b.substring(A,A+P),_);8>P?(P=f(Math.pow(_,P)),T=T.j(P).add(f(p))):(T=T.j(E),T=T.add(f(p)))}return T}var w=u(0),S=u(1),L=u(16777216);n=a.prototype,n.m=function(){if(H(this))return-B(this).m();for(var b=0,_=1,E=0;E<this.g.length;E++){var T=this.i(E);b+=(0<=T?T:4294967296+T)*_,_*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(M(this))return"0";if(H(this))return"-"+B(this).toString(b);for(var _=f(Math.pow(b,6)),E=this,T="";;){var A=he(E,_).g;E=ne(E,A.j(_));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(b);if(E=A,M(E))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function M(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function H(b){return b.h==-1}n.l=function(b){return b=ne(this,b),H(b)?-1:M(b)?0:1};function B(b){for(var _=b.g.length,E=[],T=0;T<_;T++)E[T]=~b.g[T];return new a(E,~b.h).add(S)}n.abs=function(){return H(this)?B(this):this},n.add=function(b){for(var _=Math.max(this.g.length,b.g.length),E=[],T=0,A=0;A<=_;A++){var P=T+(this.i(A)&65535)+(b.i(A)&65535),p=(P>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);T=p>>>16,P&=65535,p&=65535,E[A]=p<<16|P}return new a(E,E[E.length-1]&-2147483648?-1:0)};function ne(b,_){return b.add(B(_))}n.j=function(b){if(M(this)||M(b))return w;if(H(this))return H(b)?B(this).j(B(b)):B(B(this).j(b));if(H(b))return B(this.j(B(b)));if(0>this.l(L)&&0>b.l(L))return f(this.m()*b.m());for(var _=this.g.length+b.g.length,E=[],T=0;T<2*_;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<b.g.length;A++){var P=this.i(T)>>>16,p=this.i(T)&65535,Le=b.i(A)>>>16,on=b.i(A)&65535;E[2*T+2*A]+=p*on,Q(E,2*T+2*A),E[2*T+2*A+1]+=P*on,Q(E,2*T+2*A+1),E[2*T+2*A+1]+=p*Le,Q(E,2*T+2*A+1),E[2*T+2*A+2]+=P*Le,Q(E,2*T+2*A+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new a(E,0)};function Q(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function ee(b,_){this.g=b,this.h=_}function he(b,_){if(M(_))throw Error("division by zero");if(M(b))return new ee(w,w);if(H(b))return _=he(B(b),_),new ee(B(_.g),B(_.h));if(H(_))return _=he(b,B(_)),new ee(B(_.g),_.h);if(30<b.g.length){if(H(b)||H(_))throw Error("slowDivide_ only works with positive integers.");for(var E=S,T=_;0>=T.l(b);)E=Pe(E),T=Pe(T);var A=ae(E,1),P=ae(T,1);for(T=ae(T,2),E=ae(E,2);!M(T);){var p=P.add(T);0>=p.l(b)&&(A=A.add(E),P=p),T=ae(T,1),E=ae(E,1)}return _=ne(b,A.j(_)),new ee(A,_)}for(A=w;0<=b.l(_);){for(E=Math.max(1,Math.floor(b.m()/_.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=f(E),p=P.j(_);H(p)||0<p.l(b);)E-=T,P=f(E),p=P.j(_);M(P)&&(P=S),A=A.add(P),b=ne(b,p)}return new ee(A,b)}n.A=function(b){return he(this,b).h},n.and=function(b){for(var _=Math.max(this.g.length,b.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)&b.i(T);return new a(E,this.h&b.h)},n.or=function(b){for(var _=Math.max(this.g.length,b.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)|b.i(T);return new a(E,this.h|b.h)},n.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)^b.i(T);return new a(E,this.h^b.h)};function Pe(b){for(var _=b.g.length+1,E=[],T=0;T<_;T++)E[T]=b.i(T)<<1|b.i(T-1)>>>31;return new a(E,b.h)}function ae(b,_){var E=_>>5;_%=32;for(var T=b.g.length-E,A=[],P=0;P<T;P++)A[P]=0<_?b.i(P+E)>>>_|b.i(P+E+1)<<32-_:b.i(P+E);return new a(A,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Gu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=y,Dn=a}).apply(typeof Xc<"u"?Xc:typeof self<"u"?self:typeof window<"u"?window:{});var Ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ku,Ri,Qu,Os,ta,Ju,Yu,Xu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,h){return s==Array.prototype||s==Object.prototype||(s[c]=h.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ss=="object"&&Ss];for(var c=0;c<s.length;++c){var h=s[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var h=r;s=s.split(".");for(var m=0;m<s.length-1;m++){var C=s[m];if(!(C in h))break e;h=h[C]}s=s[s.length-1],m=h[s],c=c(m),c!=m&&c!=null&&e(h,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var h=0,m=!1,C={next:function(){if(!m&&h<s.length){var k=h++;return{value:c(k,s[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function f(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function y(s,c,h){return s.call.apply(s.bind,arguments)}function w(s,c,h){if(!s)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),s.apply(c,C)}}return function(){return s.apply(c,arguments)}}function S(s,c,h){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:w,S.apply(null,arguments)}function L(s,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),s.apply(this,m)}}function M(s,c){function h(){}h.prototype=c.prototype,s.aa=c.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(m,C,k){for(var U=Array(arguments.length-2),me=2;me<arguments.length;me++)U[me-2]=arguments[me];return c.prototype[C].apply(m,U)}}function H(s){const c=s.length;if(0<c){const h=Array(c);for(let m=0;m<c;m++)h[m]=s[m];return h}return[]}function B(s,c){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(u(m)){const C=s.length||0,k=m.length||0;s.length=C+k;for(let U=0;U<k;U++)s[C+U]=m[U]}else s.push(m)}}class ne{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function Q(s){return/^[\s\xa0]*$/.test(s)}function ee(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function he(s){return he[" "](s),s}he[" "]=function(){};var Pe=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function ae(s,c,h){for(const m in s)c.call(h,s[m],m,s)}function b(s,c){for(const h in s)c.call(void 0,s[h],h,s)}function _(s){const c={};for(const h in s)c[h]=s[h];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(s,c){let h,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(h in m)s[h]=m[h];for(let k=0;k<E.length;k++)h=E[k],Object.prototype.hasOwnProperty.call(m,h)&&(s[h]=m[h])}}function A(s){var c=1;s=s.split(":");const h=[];for(;0<c&&s.length;)h.push(s.shift()),c--;return s.length&&h.push(s.join(":")),h}function P(s){l.setTimeout(()=>{throw s},0)}function p(){var s=ri;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Le{constructor(){this.h=this.g=null}add(c,h){const m=on.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var on=new ne(()=>new dc,s=>s.reset());class dc{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ft,gt=!1,ri=new Le,ss=()=>{const s=l.Promise.resolve(void 0);Ft=()=>{s.then($)}};var $=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(h){P(h)}var c=on;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}gt=!1};function ot(){this.s=this.s,this.C=this.C}ot.prototype.s=!1,ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ut=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return s})();function Ye(s,c){if(fe.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,m=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(Pe){e:{try{he(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else h=="mouseover"?c=s.fromElement:h=="mouseout"&&(c=s.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:os[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ye.aa.h.call(this)}}M(Ye,fe);var os={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var St="closure_listenable_"+(1e6*Math.random()|0),Bt=0;function as(s,c,h,m,C){this.listener=s,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=C,this.key=++Bt,this.da=this.fa=!1}function de(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function an(s){this.src=s,this.g={},this.h=0}an.prototype.add=function(s,c,h,m,C){var k=s.toString();s=this.g[k],s||(s=this.g[k]=[],this.h++);var U=nt(s,c,m,C);return-1<U?(c=s[U],h||(c.fa=!1)):(c=new as(c,this.src,k,!!m,C),c.fa=h,s.push(c)),c};function Ne(s,c){var h=c.type;if(h in s.g){var m=s.g[h],C=Array.prototype.indexOf.call(m,c,void 0),k;(k=0<=C)&&Array.prototype.splice.call(m,C,1),k&&(de(c),s.g[h].length==0&&(delete s.g[h],s.h--))}}function nt(s,c,h,m){for(var C=0;C<s.length;++C){var k=s[C];if(!k.da&&k.listener==c&&k.capture==!!h&&k.ha==m)return C}return-1}var cn="closure_lm_"+(1e6*Math.random()|0),Xe={};function Ze(s,c,h,m,C){if(Array.isArray(c)){for(var k=0;k<c.length;k++)Ze(s,c[k],h,m,C);return null}return h=us(h),s&&s[St]?s.K(c,h,f(m)?!!m.capture:!1,C):mr(s,c,h,!1,m,C)}function mr(s,c,h,m,C,k){if(!c)throw Error("Invalid event type");var U=f(C)?!!C.capture:!!C,me=pr(s);if(me||(s[cn]=me=new an(s)),h=me.add(c,h,m,U,k),h.proxy)return h;if(m=Ro(),h.proxy=m,m.src=s,m.listener=h,s.addEventListener)Ut||(C=U),C===void 0&&(C=!1),s.addEventListener(c.toString(),m,C);else if(s.attachEvent)s.attachEvent(ls(c.toString()),m);else if(s.addListener&&s.removeListener)s.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Ro(){function s(h){return c.call(s.src,s.listener,h)}const c=Po;return s}function cs(s,c,h,m,C){if(Array.isArray(c))for(var k=0;k<c.length;k++)cs(s,c[k],h,m,C);else m=f(m)?!!m.capture:!!m,h=us(h),s&&s[St]?(s=s.i,c=String(c).toString(),c in s.g&&(k=s.g[c],h=nt(k,h,m,C),-1<h&&(de(k[h]),Array.prototype.splice.call(k,h,1),k.length==0&&(delete s.g[c],s.h--)))):s&&(s=pr(s))&&(c=s.g[c.toString()],s=-1,c&&(s=nt(c,h,m,C)),(h=-1<s?c[s]:null)&&ii(h))}function ii(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[St])Ne(c.i,s);else{var h=s.type,m=s.proxy;c.removeEventListener?c.removeEventListener(h,m,s.capture):c.detachEvent?c.detachEvent(ls(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=pr(c))?(Ne(h,s),h.h==0&&(h.src=null,c[cn]=null)):de(s)}}}function ls(s){return s in Xe?Xe[s]:Xe[s]="on"+s}function Po(s,c){if(s.da)s=!0;else{c=new Ye(c,this);var h=s.listener,m=s.ha||s.src;s.fa&&ii(s),s=h.call(m,c)}return s}function pr(s){return s=s[cn],s instanceof an?s:null}var gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function us(s){return typeof s=="function"?s:(s[gr]||(s[gr]=function(c){return s.handleEvent(c)}),s[gr])}function Ie(){ot.call(this),this.i=new an(this),this.M=this,this.F=null}M(Ie,ot),Ie.prototype[St]=!0,Ie.prototype.removeEventListener=function(s,c,h,m){cs(this,s,c,h,m)};function xe(s,c){var h,m=s.F;if(m)for(h=[];m;m=m.F)h.push(m);if(s=s.M,m=c.type||c,typeof c=="string")c=new fe(c,s);else if(c instanceof fe)c.target=c.target||s;else{var C=c;c=new fe(m,s),T(c,C)}if(C=!0,h)for(var k=h.length-1;0<=k;k--){var U=c.g=h[k];C=ln(U,m,!0,c)&&C}if(U=c.g=s,C=ln(U,m,!0,c)&&C,C=ln(U,m,!1,c)&&C,h)for(k=0;k<h.length;k++)U=c.g=h[k],C=ln(U,m,!1,c)&&C}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var h=s.g[c],m=0;m<h.length;m++)de(h[m]);delete s.g[c],s.h--}}this.F=null},Ie.prototype.K=function(s,c,h,m){return this.i.add(String(s),c,!1,h,m)},Ie.prototype.L=function(s,c,h,m){return this.i.add(String(s),c,!0,h,m)};function ln(s,c,h,m){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,k=0;k<c.length;++k){var U=c[k];if(U&&!U.da&&U.capture==h){var me=U.listener,Me=U.ha||U.src;U.fa&&Ne(s.i,U),C=me.call(Me,m)!==!1&&C}}return C&&!m.defaultPrevented}function jn(s,c,h){if(typeof s=="function")h&&(s=S(s,h));else if(s&&typeof s.handleEvent=="function")s=S(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function si(s){s.g=jn(()=>{s.g=null,s.i&&(s.i=!1,si(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class oi extends ot{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:si(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function un(s){ot.call(this),this.h=s,this.g={}}M(un,ot);var hs=[];function ds(s){ae(s.g,function(c,h){this.g.hasOwnProperty(h)&&ii(c)},s),s.g={}}un.prototype.N=function(){un.aa.N.call(this),ds(this)},un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ai=l.JSON.stringify,ko=l.JSON.parse,hn=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function yr(){}yr.prototype.h=null;function fs(s){return s.h||(s.h=s.i())}function ms(){}var Hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ci(){fe.call(this,"d")}M(ci,fe);function li(){fe.call(this,"c")}M(li,fe);var at={},ps=null;function _r(){return ps=ps||new Ie}at.La="serverreachability";function qt(s){fe.call(this,at.La,s)}M(qt,fe);function dn(s){const c=_r();xe(c,new qt(c))}at.STAT_EVENT="statevent";function ui(s,c){fe.call(this,at.STAT_EVENT,s),this.stat=c}M(ui,fe);function qe(s){const c=_r();xe(c,new ui(c,s))}at.Ma="timingevent";function hi(s,c){fe.call(this,at.Ma,s),this.size=c}M(hi,fe);function Je(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function zn(){this.g=!0}zn.prototype.xa=function(){this.g=!1};function gs(s,c,h,m,C,k){s.info(function(){if(s.g)if(k)for(var U="",me=k.split("&"),Me=0;Me<me.length;Me++){var ce=me[Me].split("=");if(1<ce.length){var je=ce[0];ce=ce[1];var He=je.split("_");U=2<=He.length&&He[1]=="type"?U+(je+"="+ce+"&"):U+(je+"=redacted&")}}else U=null;else U=k;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+c+`
`+h+`
`+U})}function ys(s,c,h,m,C,k,U){s.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+c+`
`+h+`
`+k+" "+U})}function yt(s,c,h,m){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+_s(s,h)+(m?" "+m:"")})}function vr(s,c){s.info(function(){return"TIMEOUT: "+c})}zn.prototype.info=function(){};function _s(s,c){if(!s.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var m=h[s];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var k=C[0];if(k!="noop"&&k!="stop"&&k!="close")for(var U=1;U<C.length;U++)C[U]=""}}}}return ai(h)}catch{return c}}var Wn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},di={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Er;function Gn(){}M(Gn,yr),Gn.prototype.g=function(){return new XMLHttpRequest},Gn.prototype.i=function(){return{}},Er=new Gn;function ct(s,c,h,m){this.j=s,this.i=c,this.l=h,this.R=m||1,this.U=new un(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fn}function fn(){this.i=null,this.g="",this.h=!1}var Kn={},wr={};function $e(s,c,h){s.L=1,s.v=Pt(rt(c)),s.m=h,s.P=!0,Te(s,null)}function Te(s,c){s.F=Date.now(),lt(s),s.A=rt(s.v);var h=s.A,m=s.R;Array.isArray(m)||(m=[String(m)]),Es(h.i,"t",m),s.C=0,h=s.j.J,s.h=new fn,s.g=yc(s.j,h?c:null,!s.m),0<s.O&&(s.M=new oi(S(s.Y,s,s.g),s.O)),c=s.U,h=s.g,m=s.ca;var C="readystatechange";Array.isArray(C)||(C&&(hs[0]=C.toString()),C=hs);for(var k=0;k<C.length;k++){var U=Ze(h,C[k],m||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=s.H?_(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),dn(),gs(s.i,s.u,s.A,s.l,s.R,s.m)}ct.prototype.ca=function(s){s=s.target;const c=this.M;c&&R(s)==3?c.j():this.Y(s)},ct.prototype.Y=function(s){try{if(s==this.g)e:{const He=R(this.g);var c=this.g.Ba();const Dr=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||N(this.g)))){this.J||He!=4||c==7||(c==8||0>=Dr?dn(3):dn(2)),Tr(this);var h=this.g.Z();this.X=h;t:if(fi(this)){var m=N(this.g);s="";var C=m.length,k=R(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),Qn(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,s+=this.h.i.decode(m[c],{stream:!(k&&c==C-1)});m.length=0,this.h.g+=s,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=h==200,ys(this.i,this.u,this.A,this.l,this.R,He,h),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Me=this.g;if((me=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(me)){var ce=me;break t}}ce=null}if(h=ce)yt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_t(this,h);else{this.o=!1,this.s=3,qe(12),$t(this),Qn(this);break e}}if(this.P){h=!0;let wt;for(;!this.J&&this.C<U.length;)if(wt=Ct(this,U),wt==wr){He==4&&(this.s=4,qe(14),h=!1),yt(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==Kn){this.s=4,qe(15),yt(this.i,this.l,U,"[Invalid Chunk]"),h=!1;break}else yt(this.i,this.l,wt,null),_t(this,wt);if(fi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||U.length!=0||this.h.h||(this.s=1,qe(16),h=!1),this.o=this.o&&h,!h)yt(this.i,this.l,U,"[Invalid Chunked Response]"),$t(this),Qn(this);else if(0<U.length&&!this.W){this.W=!0;var je=this.j;je.g==this&&je.ba&&!je.M&&(je.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Ai(je),je.M=!0,qe(11))}}else yt(this.i,this.l,U,null),_t(this,U);He==4&&$t(this),this.o&&!this.J&&(He==4?fc(this.j,this):(this.o=!1,lt(this)))}else x(this.g),h==400&&0<U.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),$t(this),Qn(this)}}}catch{}finally{}};function fi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Ct(s,c){var h=s.C,m=c.indexOf(`
`,h);return m==-1?wr:(h=Number(c.substring(h,m)),isNaN(h)?Kn:(m+=1,m+h>c.length?wr:(c=c.slice(m,m+h),s.C=m+h,c)))}ct.prototype.cancel=function(){this.J=!0,$t(this)};function lt(s){s.S=Date.now()+s.I,Do(s,s.I)}function Do(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Je(S(s.ba,s),c)}function Tr(s){s.B&&(l.clearTimeout(s.B),s.B=null)}ct.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(vr(this.i,this.A),this.L!=2&&(dn(),qe(17)),$t(this),this.s=2,Qn(this)):Do(this,this.S-s)};function Qn(s){s.j.G==0||s.J||fc(s.j,s)}function $t(s){Tr(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,ds(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function _t(s,c){try{var h=s.j;if(h.G!=0&&(h.g==s||mn(h.h,s))){if(!s.K&&mn(h.h,s)&&h.G==3){try{var m=h.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)Pr(h),ye(h);else break e;et(h),qe(18)}}else h.za=C[1],0<h.za-h.T&&37500>C[2]&&h.F&&h.v==0&&!h.C&&(h.C=Je(S(h.Za,h),6e3));if(1>=pi(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else er(h,11)}else if((s.K||h.g==s)&&Pr(h),!Q(c))for(C=h.Da.g.parse(c),c=0;c<C.length;c++){let ce=C[c];if(h.T=ce[0],ce=ce[1],h.G==2)if(ce[0]=="c"){h.K=ce[1],h.ia=ce[2];const je=ce[3];je!=null&&(h.la=je,h.j.info("VER="+h.la));const He=ce[4];He!=null&&(h.Aa=He,h.j.info("SVER="+h.Aa));const Dr=ce[5];Dr!=null&&typeof Dr=="number"&&0<Dr&&(m=1.5*Dr,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const wt=s.g;if(wt){const bs=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var k=m.h;k.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ir(k,k.h),k.h=null))}if(m.D){const No=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;No&&(m.ya=No,le(m.I,m.D,No))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var U=s;if(m.qa=gc(m,m.J?m.ia:null,m.W),U.K){gi(m.h,U);var me=U,Me=m.L;Me&&(me.I=Me),me.B&&(Tr(me),lt(me)),m.g=U}else Et(m);0<h.i.length&&ve(h)}else ce[0]!="stop"&&ce[0]!="close"||er(h,7);else h.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?er(h,7):oe(h):ce[0]!="noop"&&h.l&&h.l.ta(ce),h.v=0)}}dn(4)}catch{}}var mi=class{constructor(s,c){this.g=s,this.map=c}};function Oe(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vt(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function pi(s){return s.h?1:s.g?s.g.size:0}function mn(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Ir(s,c){s.g?s.g.add(c):s.h=c}function gi(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Oe.prototype.cancel=function(){if(this.i=yi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function yi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const h of s.g.values())c=c.concat(h.D);return c}return H(s.i)}function jt(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(u(s)){for(var c=[],h=s.length,m=0;m<h;m++)c.push(s[m]);return c}c=[],h=0;for(m in s)c[h++]=s[m];return c}function br(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(u(s)||typeof s=="string"){var c=[];s=s.length;for(var h=0;h<s;h++)c.push(h);return c}c=[],h=0;for(const m in s)c[h++]=m;return c}}}function _i(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(u(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var h=br(s),m=jt(s),C=m.length,k=0;k<C;k++)c.call(void 0,m[k],h&&h[k],s)}var Rt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pn(s,c){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var m=s[h].indexOf("="),C=null;if(0<=m){var k=s[h].substring(0,m);C=s[h].substring(m+1)}else k=s[h];c(k,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function ut(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ut){this.h=s.h,gn(this,s.j),this.o=s.o,this.g=s.g,Jn(this,s.s),this.l=s.l;var c=s.i,h=new Yn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Ar(this,h),this.m=s.m}else s&&(c=String(s).match(Rt))?(this.h=!1,gn(this,c[1]||"",!0),this.o=Ht(c[2]||""),this.g=Ht(c[3]||"",!0),Jn(this,c[4]),this.l=Ht(c[5]||"",!0),Ar(this,c[6]||"",!0),this.m=Ht(c[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}ut.prototype.toString=function(){var s=[],c=this.j;c&&s.push(yn(c,vi,!0),":");var h=this.g;return(h||c=="file")&&(s.push("//"),(c=this.o)&&s.push(yn(c,vi,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(yn(h,h.charAt(0)=="/"?Ei:Sr,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",yn(h,Vo)),s.join("")};function rt(s){return new ut(s)}function gn(s,c,h){s.j=h?Ht(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Jn(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function Ar(s,c,h){c instanceof Yn?(s.i=c,ws(s.i,s.h)):(h||(c=yn(c,wi)),s.i=new Yn(c,s.h))}function le(s,c,h){s.i.set(c,h)}function Pt(s){return le(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ht(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function yn(s,c,h){return typeof s=="string"?(s=encodeURI(s).replace(c,_n),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function _n(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var vi=/[#\/\?@]/g,Sr=/[#\?:]/g,Ei=/[#\?]/g,wi=/[#\?@]/g,Vo=/#/g;function Yn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function kt(s){s.g||(s.g=new Map,s.h=0,s.i&&pn(s.i,function(c,h){s.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Yn.prototype,n.add=function(s,c){kt(this),this.i=null,s=vn(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(c),this.h+=1,this};function vs(s,c){kt(s),c=vn(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Ti(s,c){return kt(s),c=vn(s,c),s.g.has(c)}n.forEach=function(s,c){kt(this),this.g.forEach(function(h,m){h.forEach(function(C){s.call(c,C,m,this)},this)},this)},n.na=function(){kt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let m=0;m<c.length;m++){const C=s[m];for(let k=0;k<C.length;k++)h.push(c[m])}return h},n.V=function(s){kt(this);let c=[];if(typeof s=="string")Ti(this,s)&&(c=c.concat(this.g.get(vn(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)c=c.concat(s[h])}return c},n.set=function(s,c){return kt(this),this.i=null,s=vn(this,s),Ti(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function Es(s,c,h){vs(s,c),0<h.length&&(s.i=null,s.g.set(vn(s,c),H(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var m=c[h];const k=encodeURIComponent(String(m)),U=this.V(m);for(m=0;m<U.length;m++){var C=k;U[m]!==""&&(C+="="+encodeURIComponent(String(U[m]))),s.push(C)}}return this.i=s.join("&")};function vn(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function ws(s,c){c&&!s.j&&(kt(s),s.i=null,s.g.forEach(function(h,m){var C=m.toLowerCase();m!=C&&(vs(this,m),Es(this,C,h))},s)),s.j=c}function Ts(s,c){const h=new zn;if(l.Image){const m=new Image;m.onload=L(ht,h,"TestLoadImage: loaded",!0,c,m),m.onerror=L(ht,h,"TestLoadImage: error",!1,c,m),m.onabort=L(ht,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=L(ht,h,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=s}else c(!1)}function Lo(s,c){const h=new zn,m=new AbortController,C=setTimeout(()=>{m.abort(),ht(h,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:m.signal}).then(k=>{clearTimeout(C),k.ok?ht(h,"TestPingServer: ok",!0,c):ht(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),ht(h,"TestPingServer: error",!1,c)})}function ht(s,c,h,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(h)}catch{}}function En(){this.g=new hn}function Ii(s,c,h){const m=h||"";try{_i(s,function(C,k){let U=C;f(C)&&(U=ai(C)),c.push(m+k+"="+encodeURIComponent(U))})}catch(C){throw c.push(m+"type="+encodeURIComponent("_badmap")),C}}function Cr(s){this.l=s.Ub||null,this.j=s.eb||!1}M(Cr,yr),Cr.prototype.g=function(){return new zt(this.l,this.j)},Cr.prototype.i=(function(s){return function(){return s}})({});function zt(s,c){Ie.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(zt,Ie),n=zt.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Xn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wn(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function wn(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Tn(this):Xn(this),this.readyState==3&&wn(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Tn(this))},n.Qa=function(s){this.g&&(this.response=s,Tn(this))},n.ga=function(){this.g&&Tn(this)};function Tn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Xn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=c.next();return s.join(`\r
`)};function Xn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(zt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Rr(s){let c="";return ae(s,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function Wt(s,c,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=Rr(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):le(s,c,h))}function pe(s){Ie.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(pe,Ie);var In=/^https?$/i,bi=["POST","PUT"];n=pe.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Er.g(),this.v=this.o?fs(this.o):fs(Er),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(k){dt(this,k);return}if(s=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)h.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())h.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),C=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(bi,c,void 0))||m||C||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,U]of h)this.g.setRequestHeader(k,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{I(this),this.u=!0,this.g.send(s),this.u=!1}catch(k){dt(this,k)}};function dt(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,d(s),v(s)}function d(s){s.A||(s.A=!0,xe(s,"complete"),xe(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,xe(this,"complete"),xe(this,"abort"),v(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),v(this,!0)),pe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?g(this):this.bb())},n.bb=function(){g(this)};function g(s){if(s.h&&typeof a<"u"&&(!s.v[1]||R(s)!=4||s.Z()!=2)){if(s.u&&R(s)==4)jn(s.Ea,0,s);else if(xe(s,"readystatechange"),R(s)==4){s.h=!1;try{const U=s.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var m;if(m=U===0){var C=String(s.D).match(Rt)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!In.test(C?C.toLowerCase():"")}h=m}if(h)xe(s,"complete"),xe(s,"success");else{s.m=6;try{var k=2<R(s)?s.g.statusText:""}catch{k=""}s.l=k+" ["+s.Z()+"]",d(s)}}finally{v(s)}}}}function v(s,c){if(s.g){I(s);const h=s.g,m=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||xe(s,"ready");try{h.onreadystatechange=m}catch{}}}function I(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function R(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<R(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),ko(c)}};function N(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function x(s){const c={};s=(s.g&&2<=R(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<s.length;m++){if(Q(s[m]))continue;var h=A(s[m]);const C=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=c[C]||[];c[C]=k,k.push(h)}b(c,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function F(s,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||c}function z(s){this.Aa=0,this.i=[],this.j=new zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=F("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=F("baseRetryDelayMs",5e3,s),this.cb=F("retryDelaySeedMs",1e4,s),this.Wa=F("forwardChannelMaxRetries",2,s),this.wa=F("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Oe(s&&s.concurrentRequestLimit),this.Da=new En,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=z.prototype,n.la=8,n.G=1,n.connect=function(s,c,h,m){qe(0),this.W=s,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=gc(this,null,this.W),ve(this)};function oe(s){if(be(s),s.G==3){var c=s.U++,h=rt(s.I);if(le(h,"SID",s.K),le(h,"RID",c),le(h,"TYPE","terminate"),O(s,h),c=new ct(s,s.j,c),c.L=2,c.v=Pt(rt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=yc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),lt(c)}pc(s)}function ye(s){s.g&&(Ai(s),s.g.cancel(),s.g=null)}function be(s){ye(s),s.u&&(l.clearTimeout(s.u),s.u=null),Pr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function ve(s){if(!vt(s.h)&&!s.s){s.s=!0;var c=s.Ga;Ft||ss(),gt||(Ft(),gt=!0),ri.add(c,s),s.B=0}}function X(s,c){return pi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Je(S(s.Ga,s,c),mc(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const C=new ct(this,this.j,s);let k=this.o;if(this.S&&(k?(k=_(k),T(k,this.S)):k=this.S),this.m!==null||this.O||(C.H=k,k=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Ee(this,C,c),h=rt(this.I),le(h,"RID",s),le(h,"CVER",22),this.D&&le(h,"X-HTTP-Session-Id",this.D),O(this,h),k&&(this.O?c="headers="+encodeURIComponent(String(Rr(k)))+"&"+c:this.m&&Wt(h,this.m,k)),Ir(this.h,C),this.Ua&&le(h,"TYPE","init"),this.P?(le(h,"$req",c),le(h,"SID","null"),C.T=!0,$e(C,h,null)):$e(C,h,c),this.G=2}}else this.G==3&&(s?Z(this,s):this.i.length==0||vt(this.h)||Z(this))};function Z(s,c){var h;c?h=c.l:h=s.U++;const m=rt(s.I);le(m,"SID",s.K),le(m,"RID",h),le(m,"AID",s.T),O(s,m),s.m&&s.o&&Wt(m,s.m,s.o),h=new ct(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Ee(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ir(s.h,h),$e(h,m,c)}function O(s,c){s.H&&ae(s.H,function(h,m){le(c,m,h)}),s.l&&_i({},function(h,m){le(c,m,h)})}function Ee(s,c,h){h=Math.min(s.i.length,h);var m=s.l?S(s.l.Na,s.l,s):null;e:{var C=s.i;let k=-1;for(;;){const U=["count="+h];k==-1?0<h?(k=C[0].g,U.push("ofs="+k)):k=0:U.push("ofs="+k);let me=!0;for(let Me=0;Me<h;Me++){let ce=C[Me].g;const je=C[Me].map;if(ce-=k,0>ce)k=Math.max(0,C[Me].g-100),me=!1;else try{Ii(je,U,"req"+ce+"_")}catch{m&&m(je)}}if(me){m=U.join("&");break e}}}return s=s.i.splice(0,h),c.D=s,m}function Et(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Ft||ss(),gt||(Ft(),gt=!0),ri.add(c,s),s.v=0}}function et(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Je(S(s.Fa,s),mc(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Zn(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Je(S(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qe(10),ye(this),Zn(this))};function Ai(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Zn(s){s.g=new ct(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=rt(s.qa);le(c,"RID","rpc"),le(c,"SID",s.K),le(c,"AID",s.T),le(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&le(c,"TO",s.ja),le(c,"TYPE","xmlhttp"),O(s,c),s.m&&s.o&&Wt(c,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=Pt(rt(c)),h.m=null,h.P=!0,Te(h,s)}n.Za=function(){this.C!=null&&(this.C=null,ye(this),et(this),qe(19))};function Pr(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function fc(s,c){var h=null;if(s.g==c){Pr(s),Ai(s),s.g=null;var m=2}else if(mn(s.h,c))h=c.D,gi(s.h,c),m=1;else return;if(s.G!=0){if(c.o)if(m==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var C=s.B;m=_r(),xe(m,new hi(m,h)),ve(s)}else Et(s);else if(C=c.s,C==3||C==0&&0<c.X||!(m==1&&X(s,c)||m==2&&et(s)))switch(h&&0<h.length&&(c=s.h,c.i=c.i.concat(h)),C){case 1:er(s,5);break;case 4:er(s,10);break;case 3:er(s,6);break;default:er(s,2)}}}function mc(s,c){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*c}function er(s,c){if(s.j.info("Error code "+c),c==2){var h=S(s.fb,s),m=s.Xa;const C=!m;m=new ut(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||gn(m,"https"),Pt(m),C?Ts(m.toString(),h):Lo(m.toString(),h)}else qe(2);s.G=0,s.l&&s.l.sa(c),pc(s),be(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function pc(s){if(s.G=0,s.ka=[],s.l){const c=yi(s.h);(c.length!=0||s.i.length!=0)&&(B(s.ka,c),B(s.ka,s.i),s.h.i.length=0,H(s.i),s.i.length=0),s.l.ra()}}function gc(s,c,h){var m=h instanceof ut?rt(h):new ut(h);if(m.g!="")c&&(m.g=c+"."+m.g),Jn(m,m.s);else{var C=l.location;m=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var k=new ut(null);m&&gn(k,m),c&&(k.g=c),C&&Jn(k,C),h&&(k.l=h),m=k}return h=s.D,c=s.ya,h&&c&&le(m,h,c),le(m,"VER",s.la),O(s,m),m}function yc(s,c,h){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new pe(new Cr({eb:h})):new pe(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _c(){}n=_c.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Is(){}Is.prototype.g=function(s,c){return new it(s,c)};function it(s,c){Ie.call(this),this.g=new z(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!Q(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!Q(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new kr(this)}M(it,Ie),it.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){oe(this.g)},it.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=ai(s),s=h);c.i.push(new mi(c.Ya++,s)),c.G==3&&ve(c)},it.prototype.N=function(){this.g.l=null,delete this.j,oe(this.g),delete this.g,it.aa.N.call(this)};function vc(s){ci.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const h in c){s=h;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}M(vc,ci);function Ec(){li.call(this),this.status=1}M(Ec,li);function kr(s){this.g=s}M(kr,_c),kr.prototype.ua=function(){xe(this.g,"a")},kr.prototype.ta=function(s){xe(this.g,new vc(s))},kr.prototype.sa=function(s){xe(this.g,new Ec)},kr.prototype.ra=function(){xe(this.g,"b")},Is.prototype.createWebChannel=Is.prototype.g,it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,Xu=function(){return new Is},Yu=function(){return _r()},Ju=at,ta={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wn.NO_ERROR=0,Wn.TIMEOUT=8,Wn.HTTP_ERROR=6,Os=Wn,di.COMPLETE="complete",Qu=di,ms.EventType=Hn,Hn.OPEN="a",Hn.CLOSE="b",Hn.ERROR="c",Hn.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,Ri=ms,pe.prototype.listenOnce=pe.prototype.L,pe.prototype.getLastError=pe.prototype.Ka,pe.prototype.getLastErrorCode=pe.prototype.Ba,pe.prototype.getStatus=pe.prototype.Z,pe.prototype.getResponseJson=pe.prototype.Oa,pe.prototype.getResponseText=pe.prototype.oa,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Ha,Ku=pe}).apply(typeof Ss<"u"?Ss:typeof self<"u"?self:typeof window<"u"?window:{});const Zc="@firebase/firestore",el="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new va("@firebase/firestore");function Vr(){return cr.logLevel}function q(n,...e){if(cr.logLevel<=re.DEBUG){const t=e.map(La);cr.debug(`Firestore (${Xr}): ${n}`,...t)}}function tn(n,...e){if(cr.logLevel<=re.ERROR){const t=e.map(La);cr.error(`Firestore (${Xr}): ${n}`,...t)}}function Nn(n,...e){if(cr.logLevel<=re.WARN){const t=e.map(La);cr.warn(`Firestore (${Xr}): ${n}`,...t)}}function La(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Zu(n,r,t)}function Zu(n,e,t){let r=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw tn(r),new Error(r)}function ue(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Zu(e,i,r)}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Cg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(We.UNAUTHENTICATED)))}shutdown(){}}class Rg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Pg{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ue(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let o=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Vn,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const u=o;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Vn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new eh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new We(e)}}class kg{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Dg{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new kg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(We.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class tl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,st(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ue(this.o===void 0,3512);const r=o=>{o.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>r(o)))};const i=o=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new tl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new tl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Lg(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function te(n,e){return n<e?-1:n>e?1:0}function na(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return te(r,i);{const o=th(),a=Ng(o.encode(nl(n,t)),o.encode(nl(e,t)));return a!==0?a:te(r,i)}}t+=r>65535?2:1}return te(n.length,e.length)}function nl(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Ng(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return te(n[t],e[t]);return te(n.length,e.length)}function Hr(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="__name__";class Dt{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&K(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Dt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Dt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Dt.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return te(e.length,t.length)}static compareSegments(e,t){const r=Dt.isNumericId(e),i=Dt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Dt.extractNumericId(e).compare(Dt.extractNumericId(t)):na(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dn.fromString(e.substring(4,e.length-2))}}class ge extends Dt{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new ge(t)}static emptyPath(){return new ge([])}}const xg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends Dt{construct(e,t,r){return new Ue(e,t,r)}static isValidIdentifier(e){return xg.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rl}static keyField(){return new Ue([rl])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new j(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new j(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new j(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(t)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ge.fromString(e))}static fromName(e){return new W(ge.fromString(e).popFirst(5))}static empty(){return new W(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n,e,t){if(!t)throw new j(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Og(n,e,t,r){if(e===!0&&r===!0)throw new j(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function il(n){if(!W.isDocumentKey(n))throw new j(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sl(n){if(W.isDocumentKey(n))throw new j(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function rh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function mo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function Ui(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mo(n);throw new j(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n,e){const t={typeString:n};return e&&(t.value=e),t}function Zi(n,e){if(!rh(n))throw new j(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new j(D.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=-62135596800,al=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*al);return new _e(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ol)throw new j(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/al}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zi(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ol;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:Re("string",_e._jsonSchemaVersion),seconds:Re("number"),nanoseconds:Re("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new _e(0,0))}static max(){return new J(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=-1;function Mg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new _e(t+1,0):new _e(t,r));return new xn(i,W.empty(),e)}function Fg(n){return new xn(n.readTime,n.key,Bi)}class xn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xn(J.min(),W.empty(),Bi)}static max(){return new xn(J.max(),W.empty(),Bi)}}function Ug(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Bg)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):V.reject(t)}static resolve(e){return new V(((t,r)=>{t(e)}))}static reject(e){return new V(((t,r)=>{r(e)}))}static waitFor(e){return new V(((t,r)=>{let i=0,o=0,a=!1;e.forEach((l=>{++i,l.next((()=>{++o,a&&o===i&&t()}),(u=>r(u)))})),a=!0,o===i&&t()}))}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next((i=>i?V.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,o)=>{r.push(t.call(this,i,o))})),this.waitFor(r)}static mapArray(e,t){return new V(((r,i)=>{const o=e.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const f=u;t(e[f]).next((y=>{a[f]=y,++l,l===o&&r(a)}),(y=>i(y)))}}))}static doWhile(e,t){return new V(((r,i)=>{const o=()=>{e()===!0?t().next((()=>{o()}),i):r()};o()}))}}function $g(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ei(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}po.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=-1;function go(n){return n==null}function Js(n){return n===0&&1/n==-1/0}function jg(n){return typeof n=="number"&&Number.isInteger(n)&&!Js(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="";function Hg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=cl(e)),e=zg(n.get(t),e);return cl(e)}function zg(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case ih:t+="";break;default:t+=o}}return t}function cl(n){return n+ih+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ur(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function sh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t){this.comparator=e,this.root=t||Fe.EMPTY}insert(e,t){return new we(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cs(this.root,e,this.comparator,!0)}}class Cs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??Fe.RED,this.left=i??Fe.EMPTY,this.right=o??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new Fe(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new Fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ul(this.data.getIterator())}getIteratorFrom(e){return new ul(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new De(this.comparator);return t.data=e,t}}class ul{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new It([])}unionWith(e){let t=new De(Ue.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new It(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new oh("Invalid base64 string: "+o):o}})(e);return new Be(t)}static fromUint8Array(e){const t=(function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o})(e);return new Be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const Wg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(n){if(ue(!!n,39018),typeof n=="string"){let e=0;const t=Wg.exec(n);if(ue(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(n.seconds),nanos:Ae(n.nanos)}}function Ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Mn(n){return typeof n=="string"?Be.fromBase64String(n):Be.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="server_timestamp",ch="__type__",lh="__previous_value__",uh="__local_write_time__";function Oa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ch])===null||t===void 0?void 0:t.stringValue)===ah}function yo(n){const e=n.mapValue.fields[lh];return Oa(e)?yo(e):e}function qi(n){const e=On(n.mapValue.fields[uh].timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,t,r,i,o,a,l,u,f,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f,this.isUsingEmulator=y}}const Ys="(default)";class $i{constructor(e,t){this.projectId=e,this.database=t||Ys}static empty(){return new $i("","")}get isDefaultDatabase(){return this.database===Ys}isEqual(e){return e instanceof $i&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="__type__",Kg="__max__",Rs={mapValue:{}},dh="__vector__",Xs="value";function Fn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oa(n)?4:Jg(n)?9007199254740991:Qg(n)?10:11:K(28295,{value:n})}function Mt(n,e){if(n===e)return!0;const t=Fn(n);if(t!==Fn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return qi(n).isEqual(qi(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=On(i.timestampValue),l=On(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,o){return Mn(i.bytesValue).isEqual(Mn(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,o){return Ae(i.geoPointValue.latitude)===Ae(o.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(o.geoPointValue.longitude)})(n,e);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return Ae(i.integerValue)===Ae(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=Ae(i.doubleValue),l=Ae(o.doubleValue);return a===l?Js(a)===Js(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Hr(n.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:case 11:return(function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(ll(a)!==ll(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Mt(a[u],l[u])))return!1;return!0})(n,e);default:return K(52216,{left:n})}}function ji(n,e){return(n.values||[]).find((t=>Mt(t,e)))!==void 0}function zr(n,e){if(n===e)return 0;const t=Fn(n),r=Fn(e);if(t!==r)return te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const l=Ae(o.integerValue||o.doubleValue),u=Ae(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(n,e);case 3:return hl(n.timestampValue,e.timestampValue);case 4:return hl(qi(n),qi(e));case 5:return na(n.stringValue,e.stringValue);case 6:return(function(o,a){const l=Mn(o),u=Mn(a);return l.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const l=o.split("/"),u=a.split("/");for(let f=0;f<l.length&&f<u.length;f++){const y=te(l[f],u[f]);if(y!==0)return y}return te(l.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const l=te(Ae(o.latitude),Ae(a.latitude));return l!==0?l:te(Ae(o.longitude),Ae(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return dl(n.arrayValue,e.arrayValue);case 10:return(function(o,a){var l,u,f,y;const w=o.fields||{},S=a.fields||{},L=(l=w[Xs])===null||l===void 0?void 0:l.arrayValue,M=(u=S[Xs])===null||u===void 0?void 0:u.arrayValue,H=te(((f=L==null?void 0:L.values)===null||f===void 0?void 0:f.length)||0,((y=M==null?void 0:M.values)===null||y===void 0?void 0:y.length)||0);return H!==0?H:dl(L,M)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===Rs.mapValue&&a===Rs.mapValue)return 0;if(o===Rs.mapValue)return 1;if(a===Rs.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),f=a.fields||{},y=Object.keys(f);u.sort(),y.sort();for(let w=0;w<u.length&&w<y.length;++w){const S=na(u[w],y[w]);if(S!==0)return S;const L=zr(l[u[w]],f[y[w]]);if(L!==0)return L}return te(u.length,y.length)})(n.mapValue,e.mapValue);default:throw K(23264,{le:t})}}function hl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=On(n),r=On(e),i=te(t.seconds,r.seconds);return i!==0?i:te(t.nanos,r.nanos)}function dl(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=zr(t[i],r[i]);if(o)return o}return te(t.length,r.length)}function Wr(n){return ra(n)}function ra(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=On(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Mn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return W.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=ra(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ra(t.fields[a])}`;return i+"}"})(n.mapValue):K(61005,{value:n})}function Ms(n){switch(Fn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yo(n);return e?16+Ms(e):16;case 5:return 2*n.stringValue.length;case 6:return Mn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+Ms(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return ur(r.fields,((o,a)=>{i+=o.length+Ms(a)})),i})(n.mapValue);default:throw K(13486,{value:n})}}function fl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ia(n){return!!n&&"integerValue"in n}function Ma(n){return!!n&&"arrayValue"in n}function ml(n){return!!n&&"nullValue"in n}function pl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fs(n){return!!n&&"mapValue"in n}function Qg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[hh])===null||t===void 0?void 0:t.stringValue)===dh}function Li(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ur(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Li(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Li(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Jg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Kg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Fs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Li(t)}setAll(e){let t=Ue.emptyPath(),r={},i=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Li(a):i.push(l.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Fs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Fs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ur(t,((i,o)=>e[i]=o));for(const i of r)delete e[i]}clone(){return new ft(Li(this.value))}}function fh(n){const e=[];return ur(n.fields,((t,r)=>{const i=new Ue([t]);if(Fs(r)){const o=fh(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)})),new It(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,r,i,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ge(e,0,J.min(),J.min(),J.min(),ft.empty(),0)}static newFoundDocument(e,t,r,i){return new Ge(e,1,t,J.min(),r,i,0)}static newNoDocument(e,t){return new Ge(e,2,t,J.min(),J.min(),ft.empty(),0)}static newUnknownDocument(e,t){return new Ge(e,3,t,J.min(),J.min(),ft.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t){this.position=e,this.inclusive=t}}function gl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=W.comparator(W.fromName(a.referenceValue),t.key):r=zr(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function yl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{}class Ce extends mh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Zg(e,t,r):t==="array-contains"?new ny(e,r):t==="in"?new ry(e,r):t==="not-in"?new iy(e,r):t==="array-contains-any"?new sy(e,r):new Ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ey(e,r):new ty(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zr(t,this.value)):t!==null&&Fn(this.value)===Fn(t)&&this.matchesComparison(zr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class At extends mh{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new At(e,t)}matches(e){return ph(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ph(n){return n.op==="and"}function gh(n){return Xg(n)&&ph(n)}function Xg(n){for(const e of n.filters)if(e instanceof At)return!1;return!0}function sa(n){if(n instanceof Ce)return n.field.canonicalString()+n.op.toString()+Wr(n.value);if(gh(n))return n.filters.map((e=>sa(e))).join(",");{const e=n.filters.map((t=>sa(t))).join(",");return`${n.op}(${e})`}}function yh(n,e){return n instanceof Ce?(function(r,i){return i instanceof Ce&&r.op===i.op&&r.field.isEqual(i.field)&&Mt(r.value,i.value)})(n,e):n instanceof At?(function(r,i){return i instanceof At&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,a,l)=>o&&yh(a,i.filters[l])),!0):!1})(n,e):void K(19439)}function _h(n){return n instanceof Ce?(function(t){return`${t.field.canonicalString()} ${t.op} ${Wr(t.value)}`})(n):n instanceof At?(function(t){return t.op.toString()+" {"+t.getFilters().map(_h).join(" ,")+"}"})(n):"Filter"}class Zg extends Ce{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class ey extends Ce{constructor(e,t){super(e,"in",t),this.keys=vh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ty extends Ce{constructor(e,t){super(e,"not-in",t),this.keys=vh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function vh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>W.fromName(r.referenceValue)))}class ny extends Ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ma(t)&&ji(t.arrayValue,this.value)}}class ry extends Ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ji(this.value.arrayValue,t)}}class iy extends Ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ji(this.value.arrayValue,t)}}class sy extends Ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ma(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ji(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t=null,r=[],i=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.Pe=null}}function _l(n,e=null,t=[],r=[],i=null,o=null,a=null){return new oy(n,e,t,r,i,o,a)}function Fa(n){const e=Y(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>sa(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),go(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Wr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Wr(r))).join(",")),e.Pe=t}return e.Pe}function Ua(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Yg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!yh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!yl(n.startAt,e.startAt)&&yl(n.endAt,e.endAt)}function oa(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t=null,r=[],i=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ay(n,e,t,r,i,o,a,l){return new es(n,e,t,r,i,o,a,l)}function Eh(n){return new es(n)}function vl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wh(n){return n.collectionGroup!==null}function Ni(n){const e=Y(n);if(e.Te===null){e.Te=[];const t=new Set;for(const o of e.explicitOrderBy)e.Te.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new De(Ue.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Te.push(new eo(o,r))})),t.has(Ue.keyField().canonicalString())||e.Te.push(new eo(Ue.keyField(),r))}return e.Te}function Lt(n){const e=Y(n);return e.Ie||(e.Ie=cy(e,Ni(n))),e.Ie}function cy(n,e){if(n.limitType==="F")return _l(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new eo(i.field,o)}));const t=n.endAt?new Zs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Zs(n.startAt.position,n.startAt.inclusive):null;return _l(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function aa(n,e){const t=n.filters.concat([e]);return new es(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ca(n,e,t){return new es(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _o(n,e){return Ua(Lt(n),Lt(e))&&n.limitType===e.limitType}function Th(n){return`${Fa(Lt(n))}|lt:${n.limitType}`}function Lr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>_h(i))).join(", ")}]`),go(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>Wr(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>Wr(i))).join(",")),`Target(${r})`})(Lt(n))}; limitType=${n.limitType})`}function vo(n,e){return e.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):W.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,e)&&(function(r,i){for(const o of Ni(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(a,l,u){const f=gl(a,l,u);return a.inclusive?f<=0:f<0})(r.startAt,Ni(r),i)||r.endAt&&!(function(a,l,u){const f=gl(a,l,u);return a.inclusive?f>=0:f>0})(r.endAt,Ni(r),i))})(n,e)}function ly(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ih(n){return(e,t)=>{let r=!1;for(const i of Ni(n)){const o=uy(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function uy(n,e,t){const r=n.field.isKeyField()?W.comparator(e.key,t.key):(function(o,a,l){const u=a.data.field(o),f=l.data.field(o);return u!==null&&f!==null?zr(u,f):K(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ur(this.inner,((t,r)=>{for(const[i,o]of r)e(i,o)}))}isEmpty(){return sh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=new we(W.comparator);function nn(){return hy}const bh=new we(W.comparator);function Pi(...n){let e=bh;for(const t of n)e=e.insert(t.key,t);return e}function Ah(n){let e=bh;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function rr(){return xi()}function Sh(){return xi()}function xi(){return new hr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const dy=new we(W.comparator),fy=new De(W.comparator);function ie(...n){let e=fy;for(const t of n)e=e.add(t);return e}const my=new De(te);function py(){return my}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Js(e)?"-0":e}}function Ch(n){return{integerValue:""+n}}function gy(n,e){return jg(e)?Ch(e):Ba(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this._=void 0}}function yy(n,e,t){return n instanceof Hi?(function(i,o){const a={fields:{[ch]:{stringValue:ah},[uh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Oa(o)&&(o=yo(o)),o&&(a.fields[lh]=o),{mapValue:a}})(t,e):n instanceof zi?Ph(n,e):n instanceof Wi?kh(n,e):(function(i,o){const a=Rh(i,o),l=El(a)+El(i.Ee);return ia(a)&&ia(i.Ee)?Ch(l):Ba(i.serializer,l)})(n,e)}function _y(n,e,t){return n instanceof zi?Ph(n,e):n instanceof Wi?kh(n,e):t}function Rh(n,e){return n instanceof to?(function(r){return ia(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(e)?e:{integerValue:0}:null}class Hi extends Eo{}class zi extends Eo{constructor(e){super(),this.elements=e}}function Ph(n,e){const t=Dh(e);for(const r of n.elements)t.some((i=>Mt(i,r)))||t.push(r);return{arrayValue:{values:t}}}class Wi extends Eo{constructor(e){super(),this.elements=e}}function kh(n,e){let t=Dh(e);for(const r of n.elements)t=t.filter((i=>!Mt(i,r)));return{arrayValue:{values:t}}}class to extends Eo{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function El(n){return Ae(n.integerValue||n.doubleValue)}function Dh(n){return Ma(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t){this.field=e,this.transform=t}}function Ey(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof zi&&i instanceof zi||r instanceof Wi&&i instanceof Wi?Hr(r.elements,i.elements,Mt):r instanceof to&&i instanceof to?Mt(r.Ee,i.Ee):r instanceof Hi&&i instanceof Hi})(n.transform,e.transform)}class wy{constructor(e,t){this.version=e,this.transformResults=t}}class Xt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Us(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wo{}function Vh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Nh(n.key,Xt.none()):new ts(n.key,n.data,Xt.none());{const t=n.data,r=ft.empty();let i=new De(Ue.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new dr(n.key,r,new It(i.toArray()),Xt.none())}}function Ty(n,e,t){n instanceof ts?(function(i,o,a){const l=i.value.clone(),u=Tl(i.fieldTransforms,o,a.transformResults);l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof dr?(function(i,o,a){if(!Us(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Tl(i.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(Lh(i)),u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Oi(n,e,t,r){return n instanceof ts?(function(o,a,l,u){if(!Us(o.precondition,a))return l;const f=o.value.clone(),y=Il(o.fieldTransforms,u,a);return f.setAll(y),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,e,t,r):n instanceof dr?(function(o,a,l,u){if(!Us(o.precondition,a))return l;const f=Il(o.fieldTransforms,u,a),y=a.data;return y.setAll(Lh(o)),y.setAll(f),a.convertToFoundDocument(a.version,y).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(o,a,l){return Us(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function Iy(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=Rh(r.transform,i||null);o!=null&&(t===null&&(t=ft.empty()),t.set(r.field,o))}return t||null}function wl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Hr(r,i,((o,a)=>Ey(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ts extends wo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class dr extends wo{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Lh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Tl(n,e,t){const r=new Map;ue(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,l=e.data.field(o.field);r.set(o.field,_y(a,l,t[i]))}return r}function Il(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,yy(o,a,e))}return r}class Nh extends wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class by extends wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Ty(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Oi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Oi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Sh();return this.mutations.forEach((i=>{const o=e.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(i.key)?null:l;const u=Vh(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(J.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ie())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,((t,r)=>wl(t,r)))&&Hr(this.baseMutations,e.baseMutations,((t,r)=>wl(t,r)))}}class qa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ue(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=(function(){return dy})();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new qa(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,se;function Ry(n){switch(n){case D.OK:return K(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function xh(n){if(n===void 0)return tn("GRPC error has no .code"),D.UNKNOWN;switch(n){case Se.OK:return D.OK;case Se.CANCELLED:return D.CANCELLED;case Se.UNKNOWN:return D.UNKNOWN;case Se.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Se.INTERNAL:return D.INTERNAL;case Se.UNAVAILABLE:return D.UNAVAILABLE;case Se.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Se.NOT_FOUND:return D.NOT_FOUND;case Se.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Se.ABORTED:return D.ABORTED;case Se.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Se.DATA_LOSS:return D.DATA_LOSS;default:return K(39323,{code:n})}}(se=Se||(Se={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=new Dn([4294967295,4294967295],0);function bl(n){const e=th().encode(n),t=new Gu;return t.update(e),new Uint8Array(t.digest())}function Al(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Dn([t,r],0),new Dn([i,o],0)]}class $a{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ki(`Invalid padding: ${t}`);if(r<0)throw new ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ki(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ki(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Dn.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(Dn.fromNumber(r)));return i.compare(Py)===1&&(i=new Dn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=bl(e),[r,i]=Al(t);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,i,o);if(!this.ye(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new $a(o,i,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=bl(e),[r,i]=Al(t);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,i,o);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ns.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new To(J.min(),i,new we(te),nn(),ie())}}class ns{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ns(r,t,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class Oh{constructor(e,t){this.targetId=e,this.De=t}}class Mh{constructor(e,t,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Sl{constructor(){this.ve=0,this.Ce=Cl(),this.Fe=Be.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ie(),t=ie(),r=ie();return this.Ce.forEach(((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:o})}})),new ns(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Cl()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ky{constructor(e){this.We=e,this.Ge=new Map,this.ze=nn(),this.je=Ps(),this.Je=Ps(),this.He=new we(te)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:K(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const o=i.target;if(oa(o))if(r===0){const a=new W(o.path);this.Xe(t,a,Ge.newNoDocument(a,J.min()))}else ue(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),u=l?this.ut(l,e,a):1;if(u!==0){this.rt(t);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,f)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,l;try{a=Mn(r).toUint8Array()}catch(u){if(u instanceof oh)return Nn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new $a(a,i,o)}catch(u){return Nn(u instanceof ki?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach((o=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,o,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((o,a)=>{const l=this.st(a);if(l){if(o.current&&oa(l.target)){const u=new W(l.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Ge.newNoDocument(u,e))}o.Ne&&(t.set(a,o.Le()),o.ke())}}));let r=ie();this.Je.forEach(((o,a)=>{let l=!0;a.forEachWhile((u=>{const f=this.st(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.ze.forEach(((o,a)=>a.setReadTime(e)));const i=new To(e,t,this.He,this.ze,r);return this.ze=nn(),this.je=Ps(),this.Je=Ps(),this.He=new we(te),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Sl,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new De(te),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new De(te),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Sl),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ps(){return new we(W.comparator)}function Cl(){return new we(W.comparator)}const Dy={asc:"ASCENDING",desc:"DESCENDING"},Vy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ly={and:"AND",or:"OR"};class Ny{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function la(n,e){return n.useProto3Json||go(e)?e:{value:e}}function no(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xy(n,e){return no(n,e.toTimestamp())}function Nt(n){return ue(!!n,49232),J.fromTimestamp((function(t){const r=On(t);return new _e(r.seconds,r.nanos)})(n))}function ja(n,e){return ua(n,e).canonicalString()}function ua(n,e){const t=(function(i){return new ge(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Uh(n){const e=ge.fromString(n);return ue(Hh(e),10190,{key:e.toString()}),e}function ha(n,e){return ja(n.databaseId,e.path)}function $o(n,e){const t=Uh(e);if(t.get(1)!==n.databaseId.projectId)throw new j(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W(qh(t))}function Bh(n,e){return ja(n.databaseId,e)}function Oy(n){const e=Uh(n);return e.length===4?ge.emptyPath():qh(e)}function da(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qh(n){return ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Rl(n,e,t){return{name:ha(n,e),fields:t.value.mapValue.fields}}function My(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:K(39313,{state:f})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=(function(f,y){return f.useProto3Json?(ue(y===void 0||typeof y=="string",58123),Be.fromBase64String(y||"")):(ue(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),Be.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(f){const y=f.code===void 0?D.UNKNOWN:xh(f.code);return new j(y,f.message||"")})(a);t=new Mh(r,i,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=$o(n,r.document.name),o=Nt(r.document.updateTime),a=r.document.createTime?Nt(r.document.createTime):J.min(),l=new ft({mapValue:{fields:r.document.fields}}),u=Ge.newFoundDocument(i,o,a,l),f=r.targetIds||[],y=r.removedTargetIds||[];t=new Bs(f,y,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=$o(n,r.document),o=r.readTime?Nt(r.readTime):J.min(),a=Ge.newNoDocument(i,o),l=r.removedTargetIds||[];t=new Bs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=$o(n,r.document),o=r.removedTargetIds||[];t=new Bs([],o,i,null)}else{if(!("filter"in e))return K(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Cy(i,o),l=r.targetId;t=new Oh(l,a)}}return t}function Fy(n,e){let t;if(e instanceof ts)t={update:Rl(n,e.key,e.value)};else if(e instanceof Nh)t={delete:ha(n,e.key)};else if(e instanceof dr)t={update:Rl(n,e.key,e.data),updateMask:Gy(e.fieldMask)};else{if(!(e instanceof by))return K(16599,{Rt:e.type});t={verify:ha(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof Hi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof zi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof to)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw K(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:xy(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:K(27497)})(n,e.precondition)),t}function Uy(n,e){return n&&n.length>0?(ue(e!==void 0,14353),n.map((t=>(function(i,o){let a=i.updateTime?Nt(i.updateTime):Nt(o);return a.isEqual(J.min())&&(a=Nt(o)),new wy(a,i.transformResults||[])})(t,e)))):[]}function By(n,e){return{documents:[Bh(n,e.path)]}}function qy(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Bh(n,i);const o=(function(f){if(f.length!==0)return jh(At.create(f,"and"))})(e.filters);o&&(t.structuredQuery.where=o);const a=(function(f){if(f.length!==0)return f.map((y=>(function(S){return{field:Nr(S.field),direction:Hy(S.dir)}})(y)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=la(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{Vt:t,parent:i}}function $y(n){let e=Oy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ue(r===1,65062);const y=t.from[0];y.allDescendants?i=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=(function(w){const S=$h(w);return S instanceof At&&gh(S)?S.getFilters():[S]})(t.where));let a=[];t.orderBy&&(a=(function(w){return w.map((S=>(function(M){return new eo(xr(M.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(S)))})(t.orderBy));let l=null;t.limit&&(l=(function(w){let S;return S=typeof w=="object"?w.value:w,go(S)?null:S})(t.limit));let u=null;t.startAt&&(u=(function(w){const S=!!w.before,L=w.values||[];return new Zs(L,S)})(t.startAt));let f=null;return t.endAt&&(f=(function(w){const S=!w.before,L=w.values||[];return new Zs(L,S)})(t.endAt)),ay(e,i,a,o,l,"F",u,f)}function jy(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $h(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xr(t.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=xr(t.unaryFilter.field);return Ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=xr(t.unaryFilter.field);return Ce.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xr(t.unaryFilter.field);return Ce.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ce.create(xr(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return At.create(t.compositeFilter.filters.map((r=>$h(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}})(t.compositeFilter.op))})(n):K(30097,{filter:n})}function Hy(n){return Dy[n]}function zy(n){return Vy[n]}function Wy(n){return Ly[n]}function Nr(n){return{fieldPath:n.canonicalString()}}function xr(n){return Ue.fromServerFormat(n.fieldPath)}function jh(n){return n instanceof Ce?(function(t){if(t.op==="=="){if(pl(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NAN"}};if(ml(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pl(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NOT_NAN"}};if(ml(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(t.field),op:zy(t.op),value:t.value}}})(n):n instanceof At?(function(t){const r=t.getFilters().map((i=>jh(i)));return r.length===1?r[0]:{compositeFilter:{op:Wy(t.op),filters:r}}})(n):K(54877,{filter:n})}function Gy(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Hh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t,r,i,o=J.min(),a=J.min(),l=Be.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.gt=e}}function Qy(n){const e=$y({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ca(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.Dn=new Yy}addToCollectionParentIndex(e,t){return this.Dn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(xn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Yy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new De(ge.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zh=41943040;class tt{static withCacheSize(e){return new tt(e,tt.DEFAULT_COLLECTION_PERCENTILE,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt.DEFAULT_COLLECTION_PERCENTILE=10,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tt.DEFAULT=new tt(zh,tt.DEFAULT_COLLECTION_PERCENTILE,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tt.DISABLED=new tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Gr(0)}static ur(){return new Gr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="LruGarbageCollector",Xy=1048576;function Dl([n,e],[t,r]){const i=te(n,t);return i===0?te(e,r):i}class Zy{constructor(e){this.Tr=e,this.buffer=new De(Dl),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Dl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class e_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){q(kl,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ei(t)?q(kl,"Ignoring IndexedDB error during garbage collection: ",t):await Zr(t)}await this.Rr(3e5)}))}}class t_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return V.resolve(po.ue);const r=new Zy(t);return this.Vr.forEachTarget(e,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Pl)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pl):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,o,a,l,u,f;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,a=Date.now(),this.nthSequenceNumber(e,i)))).next((w=>(r=w,l=Date.now(),this.removeTargets(e,r,t)))).next((w=>(o=w,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(f=Date.now(),Vr()<=re.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-y}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(u-l)+`ms
	Removed ${w} documents in `+(f-u)+`ms
Total Duration: ${f-y}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w}))))}}function n_(n,e){return new t_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this.changes=new hr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&Oi(r.mutation,i,It.empty(),_e.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ie()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ie()){const i=rr();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((o=>{let a=Pi();return o.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=rr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ie())))}populateOverlays(e,t,r){const i=[];return r.forEach((o=>{t.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(e,i).next((o=>{o.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,i){let o=nn();const a=xi(),l=(function(){return xi()})();return t.forEach(((u,f)=>{const y=r.get(f.key);i.has(f.key)&&(y===void 0||y.mutation instanceof dr)?o=o.insert(f.key,f):y!==void 0?(a.set(f.key,y.mutation.getFieldMask()),Oi(y.mutation,f,y.mutation.getFieldMask(),_e.now())):a.set(f.key,It.empty())})),this.recalculateAndSaveOverlays(e,o).next((u=>(u.forEach(((f,y)=>a.set(f,y))),t.forEach(((f,y)=>{var w;return l.set(f,new i_(y,(w=a.get(f))!==null&&w!==void 0?w:null))})),l)))}recalculateAndSaveOverlays(e,t){const r=xi();let i=new we(((a,l)=>a-l)),o=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const f=t.get(u);if(f===null)return;let y=r.get(u)||It.empty();y=l.applyToLocalView(f,y),r.set(u,y);const w=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,w)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,y=u.value,w=Sh();y.forEach((S=>{if(!o.has(S)){const L=Vh(t.get(S),r.get(S));L!==null&&w.set(S,L),o=o.add(S)}})),a.push(this.documentOverlayCache.saveOverlays(e,f,w))}return V.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):wh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):V.resolve(rr());let l=Bi,u=o;return a.next((f=>V.forEach(f,((y,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),o.get(y)?V.resolve():this.remoteDocumentCache.getEntry(e,y).next((S=>{u=u.insert(y,S)}))))).next((()=>this.populateOverlays(e,f,o))).next((()=>this.computeViews(e,u,f,ie()))).next((y=>({batchId:l,changes:Ah(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next((r=>{let i=Pi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Pi();return this.indexManager.getCollectionParents(e,o).next((l=>V.forEach(l,(u=>{const f=(function(w,S){return new es(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next((y=>{y.forEach(((w,S)=>{a=a.insert(w,S)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i)))).next((a=>{o.forEach(((u,f)=>{const y=f.getKey();a.get(y)===null&&(a=a.insert(y,Ge.newInvalidDocument(y)))}));let l=Pi();return a.forEach(((u,f)=>{const y=o.get(u);y!==void 0&&Oi(y.mutation,f,It.empty(),_e.now()),vo(t,f)&&(l=l.insert(u,f))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return V.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Nt(i.createTime)}})(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:Qy(i.bundledQuery),readTime:Nt(i.readTime)}})(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.overlays=new we(W.comparator),this.kr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=rr();return V.forEach(t,(i=>this.getOverlay(e,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,o)=>{this.wt(e,t,o)})),V.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const i=rr(),o=t.length+1,a=new W(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new we(((f,y)=>f-y));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let y=o.get(f.largestBatchId);y===null&&(y=rr(),o=o.insert(f.largestBatchId,y)),y.set(f.getKey(),f)}}const l=rr(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((f,y)=>l.set(f,y))),!(l.size()>=i)););return V.resolve(l)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Sy(t,r));let o=this.kr.get(t);o===void 0&&(o=ie(),this.kr.set(t,o)),this.kr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.qr=new De(Ve.Qr),this.$r=new De(Ve.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ve(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ve(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new W(new ge([])),r=new Ve(t,e),i=new Ve(t,e+1),o=[];return this.$r.forEachInRange([r,i],(a=>{this.Wr(a),o.push(a.key)})),o}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new W(new ge([])),r=new Ve(t,e),i=new Ve(t,e+1);let o=ie();return this.$r.forEachInRange([r,i],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new Ve(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return W.comparator(e.key,t.key)||te(e.Hr,t.Hr)}static Ur(e,t){return te(e.Hr,t.Hr)||W.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new De(Ve.Qr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ay(o,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Yr=this.Yr.add(new Ve(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?xa:this.er-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ve(t,0),i=new Ve(t,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,i],(a=>{const l=this.Zr(a.Hr);o.push(l)})),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new De(te);return t.forEach((i=>{const o=new Ve(i,0),a=new Ve(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],(l=>{r=r.add(l.Hr)}))})),V.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;W.isDocumentKey(o)||(o=o.child(""));const a=new Ve(new W(o),0);let l=new De(te);return this.Yr.forEachWhile((u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(u.Hr)),!0)}),a),V.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){ue(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return V.forEach(t.mutations,(i=>{const o=new Ve(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Ve(t,0),i=this.Yr.firstAfterOrEqual(r);return V.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.ni=e,this.docs=(function(){return new we(W.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(t))}getEntries(e,t){let r=nn();return t.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ge.newInvalidDocument(i))})),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=nn();const a=t.path,l=new W(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:y}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Ug(Fg(y),r)<=0||(i.has(y.key)||vo(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(e,t,r,i){K(9500)}ri(e,t){return V.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new h_(this)}getSize(e){return V.resolve(this.size)}}class h_ extends r_{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)})),V.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.persistence=e,this.ii=new hr((t=>Fa(t)),Ua),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.si=0,this.oi=new Ha,this.targetCount=0,this._i=Gr.ar()}forEachTarget(e,t){return this.ii.forEach(((r,i)=>t(i))),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),V.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Gr(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.hr(t),V.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),V.waitFor(o).next((()=>i))}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach((a=>{o.push(i.markPotentiallyOrphaned(e,a))})),V.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t){this.ai={},this.overlays={},this.ui=new po(0),this.ci=!1,this.ci=!0,this.li=new c_,this.referenceDelegate=e(this),this.hi=new d_(this),this.indexManager=new Jy,this.remoteDocumentCache=(function(i){return new u_(i)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Ky(t),this.Ti=new o_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new a_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new l_(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const i=new f_(this.ui.next());return this.referenceDelegate.Ii(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ei(e,t){return V.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class f_ extends qg{constructor(e){super(),this.currentSequenceNumber=e}}class za{constructor(e){this.persistence=e,this.Ai=new Ha,this.Ri=null}static Vi(e){return new za(e)}get mi(){if(this.Ri)return this.Ri;throw K(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((o=>this.mi.add(o.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.mi,(r=>{const i=W.fromPath(r);return this.fi(e,i).next((o=>{o||t.removeEntry(i,J.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return V.or([()=>V.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ro{constructor(e,t){this.persistence=e,this.gi=new hr((r=>Hg(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=n_(this,t)}static Vi(e,t){return new ro(e,t)}Ii(){}di(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return V.forEach(this.gi,((r,i)=>this.Sr(e,r,i).next((o=>o?V.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(r++,o.removeEntry(a,J.min()))})))).next((()=>o.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),V.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ms(e.data.value)),t}Sr(e,t,r){return V.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=ie(),i=ie();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Wa(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return jd()?8:$g(Ke())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.ps(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ys(e,t,i,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new m_;return this.ws(e,t,a).next((l=>{if(o.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>o.result))}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(Vr()<=re.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Lr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Vr()<=re.DEBUG&&q("QueryEngine","Query:",Lr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Vr()<=re.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Lr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Lt(t))):V.resolve())}ps(e,t){if(vl(t))return V.resolve(null);let r=Lt(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=ca(t,null,"F"),r=Lt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=ie(...o);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((u=>{const f=this.bs(t,l);return this.Ds(t,f,a,u.readTime)?this.ps(e,ca(t,null,"F")):this.vs(e,f,t,u)}))))})))))}ys(e,t,r,i){return vl(t)||i.isEqual(J.min())?V.resolve(null):this.gs.getDocuments(e,r).next((o=>{const a=this.bs(t,o);return this.Ds(t,a,r,i)?V.resolve(null):(Vr()<=re.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Lr(t)),this.vs(e,a,t,Mg(i,Bi)).next((l=>l)))}))}bs(e,t){let r=new De(Ih(e));return t.forEach(((i,o)=>{vo(e,o)&&(r=r.add(o))})),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ws(e,t,r){return Vr()<=re.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Lr(t)),this.gs.getDocumentsMatchingQuery(e,t,xn.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="LocalStore",g_=3e8;class y_{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new we(te),this.Ms=new hr((o=>Fa(o)),Ua),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new s_(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function __(n,e,t,r){return new y_(n,e,t,r)}async function Gh(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let u=ie();for(const f of i){a.push(f.batchId);for(const y of f.mutations)u=u.add(y.key)}for(const f of o){l.push(f.batchId);for(const y of f.mutations)u=u.add(y.key)}return t.localDocuments.getDocuments(r,u).next((f=>({Bs:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function v_(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),o=t.Os.newChangeBuffer({trackRemovals:!0});return(function(l,u,f,y){const w=f.batch,S=w.keys();let L=V.resolve();return S.forEach((M=>{L=L.next((()=>y.getEntry(u,M))).next((H=>{const B=f.docVersions.get(M);ue(B!==null,48541),H.version.compareTo(B)<0&&(w.applyToRemoteDocument(H,f),H.isValidDocument()&&(H.setReadTime(f.commitVersion),y.addEntry(H)))}))})),L.next((()=>l.mutationQueue.removeMutationBatch(u,w)))})(t,r,e,o).next((()=>o.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let u=ie();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(u=u.add(l.batch.mutations[f].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function Kh(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function E_(n,e){const t=Y(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const l=[];e.targetChanges.forEach(((y,w)=>{const S=i.get(w);if(!S)return;l.push(t.hi.removeMatchingKeys(o,y.removedDocuments,w).next((()=>t.hi.addMatchingKeys(o,y.addedDocuments,w))));let L=S.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(w)!==null?L=L.withResumeToken(Be.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):y.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(y.resumeToken,r)),i=i.insert(w,L),(function(H,B,ne){return H.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=g_?!0:ne.addedDocuments.size+ne.modifiedDocuments.size+ne.removedDocuments.size>0})(S,L,y)&&l.push(t.hi.updateTargetData(o,L))}));let u=nn(),f=ie();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))})),l.push(w_(o,a,e.documentUpdates).next((y=>{u=y.Ls,f=y.ks}))),!r.isEqual(J.min())){const y=t.hi.getLastRemoteSnapshotVersion(o).next((w=>t.hi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(y)}return V.waitFor(l).next((()=>a.apply(o))).next((()=>t.localDocuments.getLocalViewOfDocuments(o,u,f))).next((()=>u))})).then((o=>(t.Fs=i,o)))}function w_(n,e,t){let r=ie(),i=ie();return t.forEach((o=>r=r.add(o))),e.getEntries(n,r).next((o=>{let a=nn();return t.forEach(((l,u)=>{const f=o.get(l);u.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):q(Ga,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",u.version)})),{Ls:a,ks:i}}))}function T_(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=xa),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function I_(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.hi.getTargetData(r,e).next((o=>o?(i=o,V.resolve(i)):t.hi.allocateTargetId(r).next((a=>(i=new Cn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function fa(n,e,t){const r=Y(n),i=r.Fs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!ei(a))throw a;q(Ga,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Vl(n,e,t){const r=Y(n);let i=J.min(),o=ie();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,f,y){const w=Y(u),S=w.Ms.get(y);return S!==void 0?V.resolve(w.Fs.get(S)):w.hi.getTargetData(f,y)})(r,a,Lt(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{o=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:J.min(),t?o:ie()))).next((l=>(b_(r,ly(e),l),{documents:l,qs:o})))))}function b_(n,e,t){let r=n.xs.get(e)||J.min();t.forEach(((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.xs.set(e,r)}class Ll{constructor(){this.activeTargetIds=py()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class A_{constructor(){this.Fo=new Ll,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ll,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="ConnectivityMonitor";class xl{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){q(Nl,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){q(Nl,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks=null;function ma(){return ks===null?ks=(function(){return 268435456+Math.round(2147483648*Math.random())})():ks++,"0x"+ks.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="RestConnection",C_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class R_{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Ys?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,o){const a=ma(),l=this.Go(e,t.toUriEncodedString());q(jo,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,o);const{host:f}=new URL(l),y=Qr(f);return this.jo(e,l,u,r,y).then((w=>(q(jo,`Received RPC '${e}' ${a}: `,w),w)),(w=>{throw Nn(jo,`RPC '${e}' ${a} failed with error: `,w,"url: ",l,"request:",r),w}))}Jo(e,t,r,i,o,a){return this.Wo(e,t,r,i,o)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Xr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,o)=>e[o]=i)),r&&r.headers.forEach(((i,o)=>e[o]=i))}Go(e,t){const r=C_[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="WebChannelConnection";class k_ extends R_{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,o){const a=ma();return new Promise(((l,u)=>{const f=new Ku;f.setWithCredentials(!0),f.listenOnce(Qu.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Os.NO_ERROR:const w=f.getResponseJson();q(ze,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(w)),l(w);break;case Os.TIMEOUT:q(ze,`RPC '${e}' ${a} timed out`),u(new j(D.DEADLINE_EXCEEDED,"Request time out"));break;case Os.HTTP_ERROR:const S=f.getStatus();if(q(ze,`RPC '${e}' ${a} failed with status:`,S,"response text:",f.getResponseText()),S>0){let L=f.getResponseJson();Array.isArray(L)&&(L=L[0]);const M=L==null?void 0:L.error;if(M&&M.status&&M.message){const H=(function(ne){const Q=ne.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(Q)>=0?Q:D.UNKNOWN})(M.status);u(new j(H,M.message))}else u(new j(D.UNKNOWN,"Server responded with status "+f.getStatus()))}else u(new j(D.UNAVAILABLE,"Connection failed."));break;default:K(9055,{c_:e,streamId:a,l_:f.getLastErrorCode(),h_:f.getLastError()})}}finally{q(ze,`RPC '${e}' ${a} completed.`)}}));const y=JSON.stringify(i);q(ze,`RPC '${e}' ${a} sending request:`,i),f.send(t,"POST",y,r,15)}))}P_(e,t,r){const i=ma(),o=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Xu(),l=Yu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const y=o.join("");q(ze,`Creating RPC '${e}' stream ${i}: ${y}`,u);const w=a.createWebChannel(y,u);this.T_(w);let S=!1,L=!1;const M=new P_({Ho:B=>{L?q(ze,`Not sending because RPC '${e}' stream ${i} is closed:`,B):(S||(q(ze,`Opening RPC '${e}' stream ${i} transport.`),w.open(),S=!0),q(ze,`RPC '${e}' stream ${i} sending:`,B),w.send(B))},Yo:()=>w.close()}),H=(B,ne,Q)=>{B.listen(ne,(ee=>{try{Q(ee)}catch(he){setTimeout((()=>{throw he}),0)}}))};return H(w,Ri.EventType.OPEN,(()=>{L||(q(ze,`RPC '${e}' stream ${i} transport opened.`),M.s_())})),H(w,Ri.EventType.CLOSE,(()=>{L||(L=!0,q(ze,`RPC '${e}' stream ${i} transport closed`),M.__(),this.I_(w))})),H(w,Ri.EventType.ERROR,(B=>{L||(L=!0,Nn(ze,`RPC '${e}' stream ${i} transport errored. Name:`,B.name,"Message:",B.message),M.__(new j(D.UNAVAILABLE,"The operation could not be completed")))})),H(w,Ri.EventType.MESSAGE,(B=>{var ne;if(!L){const Q=B.data[0];ue(!!Q,16349);const ee=Q,he=(ee==null?void 0:ee.error)||((ne=ee[0])===null||ne===void 0?void 0:ne.error);if(he){q(ze,`RPC '${e}' stream ${i} received error:`,he);const Pe=he.status;let ae=(function(E){const T=Se[E];if(T!==void 0)return xh(T)})(Pe),b=he.message;ae===void 0&&(ae=D.INTERNAL,b="Unknown error status: "+Pe+" with message "+he.message),L=!0,M.__(new j(ae,b)),w.close()}else q(ze,`RPC '${e}' stream ${i} received:`,Q),M.a_(Q)}})),H(l,Ju.STAT_EVENT,(B=>{B.stat===ta.PROXY?q(ze,`RPC '${e}' stream ${i} detected buffering proxy`):B.stat===ta.NOPROXY&&q(ze,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{M.o_()}),0),M}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Ho(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n){return new Ny(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="PersistentStream";class Jh{constructor(e,t,r,i,o,a,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Qh(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(tn(t.toString()),tn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.b_===t&&this.W_(r,i)}),(r=>{e((()=>{const i=new j(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{r((()=>this.G_(i)))})),this.stream.onMessage((i=>{r((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return q(Ol,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(q(Ol,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class D_ extends Jh{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=My(this.serializer,e),r=(function(o){if(!("targetChange"in o))return J.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?J.min():a.readTime?Nt(a.readTime):J.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=da(this.serializer),t.addTarget=(function(o,a){let l;const u=a.target;if(l=oa(u)?{documents:By(o,u)}:{query:qy(o,u).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Fh(o,a.resumeToken);const f=la(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(J.min())>0){l.readTime=no(o,a.snapshotVersion.toTimestamp());const f=la(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,e);const r=jy(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=da(this.serializer),t.removeTarget=e,this.k_(t)}}class V_ extends Jh{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Uy(e.writeResults,e.commitTime),r=Nt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=da(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Fy(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{}class N_ extends L_{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new j(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(e,ua(t,r),i,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(D.UNKNOWN,o.toString())}))}Jo(e,t,r,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,ua(t,r),i,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(D.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class x_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(tn(t),this._a=!1):q("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="RemoteStore";class O_{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{fr(this)&&(q(lr,"Restarting streams for network reachability change."),await(async function(u){const f=Y(u);f.Ia.add(4),await rs(f),f.Aa.set("Unknown"),f.Ia.delete(4),await bo(f)})(this))}))})),this.Aa=new x_(r,i)}}async function bo(n){if(fr(n))for(const e of n.da)await e(!0)}async function rs(n){for(const e of n.da)await e(!1)}function Yh(n,e){const t=Y(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ya(t)?Ja(t):ti(t).x_()&&Qa(t,e))}function Ka(n,e){const t=Y(n),r=ti(t);t.Ta.delete(e),r.x_()&&Xh(t,e),t.Ta.size===0&&(r.x_()?r.B_():fr(t)&&t.Aa.set("Unknown"))}function Qa(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ti(n).H_(e)}function Xh(n,e){n.Ra.$e(e),ti(n).Y_(e)}function Ja(n){n.Ra=new ky({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ti(n).start(),n.Aa.aa()}function Ya(n){return fr(n)&&!ti(n).M_()&&n.Ta.size>0}function fr(n){return Y(n).Ia.size===0}function Zh(n){n.Ra=void 0}async function M_(n){n.Aa.set("Online")}async function F_(n){n.Ta.forEach(((e,t)=>{Qa(n,e)}))}async function U_(n,e){Zh(n),Ya(n)?(n.Aa.la(e),Ja(n)):n.Aa.set("Unknown")}async function B_(n,e,t){if(n.Aa.set("Online"),e instanceof Mh&&e.state===2&&e.cause)try{await(async function(i,o){const a=o.cause;for(const l of o.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ta.delete(l),i.Ra.removeTarget(l))})(n,e)}catch(r){q(lr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await io(n,r)}else if(e instanceof Bs?n.Ra.Ye(e):e instanceof Oh?n.Ra.it(e):n.Ra.et(e),!t.isEqual(J.min()))try{const r=await Kh(n.localStore);t.compareTo(r)>=0&&await(function(o,a){const l=o.Ra.Pt(a);return l.targetChanges.forEach(((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const y=o.Ta.get(f);y&&o.Ta.set(f,y.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,f)=>{const y=o.Ta.get(u);if(!y)return;o.Ta.set(u,y.withResumeToken(Be.EMPTY_BYTE_STRING,y.snapshotVersion)),Xh(o,u);const w=new Cn(y.target,u,f,y.sequenceNumber);Qa(o,w)})),o.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){q(lr,"Failed to raise snapshot:",r),await io(n,r)}}async function io(n,e,t){if(!ei(e))throw e;n.Ia.add(1),await rs(n),n.Aa.set("Offline"),t||(t=()=>Kh(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{q(lr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await bo(n)}))}function ed(n,e){return e().catch((t=>io(n,t,e)))}async function Ao(n){const e=Y(n),t=Un(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:xa;for(;q_(e);)try{const i=await T_(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,$_(e,i)}catch(i){await io(e,i)}td(e)&&nd(e)}function q_(n){return fr(n)&&n.Pa.length<10}function $_(n,e){n.Pa.push(e);const t=Un(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function td(n){return fr(n)&&!Un(n).M_()&&n.Pa.length>0}function nd(n){Un(n).start()}async function j_(n){Un(n).na()}async function H_(n){const e=Un(n);for(const t of n.Pa)e.X_(t.mutations)}async function z_(n,e,t){const r=n.Pa.shift(),i=qa.from(r,e,t);await ed(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Ao(n)}async function W_(n,e){e&&Un(n).Z_&&await(async function(r,i){if((function(a){return Ry(a)&&a!==D.ABORTED})(i.code)){const o=r.Pa.shift();Un(r).N_(),await ed(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await Ao(r)}})(n,e),td(n)&&nd(n)}async function Ml(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),q(lr,"RemoteStore received new credentials");const r=fr(t);t.Ia.add(3),await rs(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await bo(t)}async function G_(n,e){const t=Y(n);e?(t.Ia.delete(2),await bo(t)):e||(t.Ia.add(2),await rs(t),t.Aa.set("Unknown"))}function ti(n){return n.Va||(n.Va=(function(t,r,i){const o=Y(t);return o.ia(),new D_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Zo:M_.bind(null,n),e_:F_.bind(null,n),n_:U_.bind(null,n),J_:B_.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Ya(n)?Ja(n):n.Aa.set("Unknown")):(await n.Va.stop(),Zh(n))}))),n.Va}function Un(n){return n.ma||(n.ma=(function(t,r,i){const o=Y(t);return o.ia(),new V_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:j_.bind(null,n),n_:W_.bind(null,n),ea:H_.bind(null,n),ta:z_.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Ao(n)):(await n.ma.stop(),n.Pa.length>0&&(q(lr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,l=new Xa(e,t,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Za(n,e){if(tn("AsyncQueue",`${e}: ${n}`),ei(n))return new j(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{static emptySet(e){return new Ur(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=Pi(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ur)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this.fa=new we(W.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):K(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Kr{constructor(e,t,r,i,o,a,l,u,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Kr(e,t,Ur.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_o(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Q_{constructor(){this.queries=Ul(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=Y(t),o=i.queries;i.queries=Ul(),o.forEach(((a,l)=>{for(const u of l.wa)u.onError(r)}))})(this,new j(D.ABORTED,"Firestore shutting down"))}}function Ul(){return new hr((n=>Th(n)),_o)}async function J_(n,e){const t=Y(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.Sa()&&e.ba()&&(r=2):(o=new K_,r=e.ba()?0:1);try{switch(r){case 0:o.ya=await t.onListen(i,!0);break;case 1:o.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Za(a,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,o),o.wa.push(e),e.va(t.onlineState),o.ya&&e.Ca(o.ya)&&ec(t)}async function Y_(n,e){const t=Y(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.wa.indexOf(e);a>=0&&(o.wa.splice(a,1),o.wa.length===0?i=e.ba()?0:1:!o.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function X_(n,e){const t=Y(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const l of a.wa)l.Ca(i)&&(r=!0);a.ya=i}}r&&ec(t)}function Z_(n,e,t){const r=Y(n),i=r.queries.get(e);if(i)for(const o of i.wa)o.onError(t);r.queries.delete(e)}function ec(n){n.Da.forEach((e=>{e.next()}))}var pa,Bl;(Bl=pa||(pa={})).Fa="default",Bl.Cache="cache";class ev{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Kr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==pa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.key=e}}class id{constructor(e){this.key=e}}class tv{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ie(),this.mutatedKeys=ie(),this.Xa=Ih(e),this.eu=new Ur(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Fl,i=t?t.eu:this.eu;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((y,w)=>{const S=i.get(y),L=vo(this.query,w)?w:null,M=!!S&&this.mutatedKeys.has(S.key),H=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let B=!1;S&&L?S.data.isEqual(L.data)?M!==H&&(r.track({type:3,doc:L}),B=!0):this.iu(S,L)||(r.track({type:2,doc:L}),B=!0,(u&&this.Xa(L,u)>0||f&&this.Xa(L,f)<0)&&(l=!0)):!S&&L?(r.track({type:0,doc:L}),B=!0):S&&!L&&(r.track({type:1,doc:S}),B=!0,(u||f)&&(l=!0)),B&&(L?(a=a.add(L),o=H?o.add(y):o.delete(y)):(a=a.delete(y),o=o.delete(y)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const y=this.query.limitType==="F"?a.last():a.first();a=a.delete(y.key),o=o.delete(y.key),r.track({type:1,doc:y})}return{eu:a,ru:r,Ds:l,mutatedKeys:o}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((y,w)=>(function(L,M){const H=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{At:B})}};return H(L)-H(M)})(y.type,w.type)||this.Xa(y.doc,w.doc))),this.su(r),i=i!=null&&i;const l=t&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,f=u!==this.Ya;return this.Ya=u,a.length!==0||f?{snapshot:new Kr(this.query,e.eu,o,a,e.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Fl,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ie(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new id(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new rd(r))})),t}uu(e){this.Ha=e.qs,this.Za=ie();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Kr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const tc="SyncEngine";class nv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class rv{constructor(e){this.key=e,this.lu=!1}}class iv{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new hr((l=>Th(l)),_o),this.Tu=new Map,this.Iu=new Set,this.du=new we(W.comparator),this.Eu=new Map,this.Au=new Ha,this.Ru={},this.Vu=new Map,this.mu=Gr.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function sv(n,e,t=!0){const r=ud(n);let i;const o=r.Pu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.cu()):i=await sd(r,e,t,!0),i}async function ov(n,e){const t=ud(n);await sd(t,e,!0,!1)}async function sd(n,e,t,r){const i=await I_(n.localStore,Lt(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let l;return r&&(l=await av(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Yh(n.remoteStore,i),l}async function av(n,e,t,r,i){n.gu=(w,S,L)=>(async function(H,B,ne,Q){let ee=B.view.nu(ne);ee.Ds&&(ee=await Vl(H.localStore,B.query,!1).then((({documents:b})=>B.view.nu(b,ee))));const he=Q&&Q.targetChanges.get(B.targetId),Pe=Q&&Q.targetMismatches.get(B.targetId)!=null,ae=B.view.applyChanges(ee,H.isPrimaryClient,he,Pe);return $l(H,B.targetId,ae._u),ae.snapshot})(n,w,S,L);const o=await Vl(n.localStore,e,!0),a=new tv(e,o.qs),l=a.nu(o.documents),u=ns.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),f=a.applyChanges(l,n.isPrimaryClient,u);$l(n,t,f._u);const y=new nv(e,t,a);return n.Pu.set(e,y),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),f.snapshot}async function cv(n,e,t){const r=Y(n),i=r.Pu.get(e),o=r.Tu.get(i.targetId);if(o.length>1)return r.Tu.set(i.targetId,o.filter((a=>!_o(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await fa(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Ka(r.remoteStore,i.targetId),ga(r,i.targetId)})).catch(Zr)):(ga(r,i.targetId),await fa(r.localStore,i.targetId,!0))}async function lv(n,e){const t=Y(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ka(t.remoteStore,r.targetId))}async function uv(n,e,t){const r=yv(n);try{const i=await(function(a,l){const u=Y(a),f=_e.now(),y=l.reduce(((L,M)=>L.add(M.key)),ie());let w,S;return u.persistence.runTransaction("Locally write mutations","readwrite",(L=>{let M=nn(),H=ie();return u.Os.getEntries(L,y).next((B=>{M=B,M.forEach(((ne,Q)=>{Q.isValidDocument()||(H=H.add(ne))}))})).next((()=>u.localDocuments.getOverlayedDocuments(L,M))).next((B=>{w=B;const ne=[];for(const Q of l){const ee=Iy(Q,w.get(Q.key).overlayedDocument);ee!=null&&ne.push(new dr(Q.key,ee,fh(ee.value.mapValue),Xt.exists(!0)))}return u.mutationQueue.addMutationBatch(L,f,ne,l)})).next((B=>{S=B;const ne=B.applyToLocalDocumentSet(w,H);return u.documentOverlayCache.saveOverlays(L,B.batchId,ne)}))})).then((()=>({batchId:S.batchId,changes:Ah(w)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(a,l,u){let f=a.Ru[a.currentUser.toKey()];f||(f=new we(te)),f=f.insert(l,u),a.Ru[a.currentUser.toKey()]=f})(r,i.batchId,t),await is(r,i.changes),await Ao(r.remoteStore)}catch(i){const o=Za(i,"Failed to persist write");t.reject(o)}}async function od(n,e){const t=Y(n);try{const r=await E_(t.localStore,e);e.targetChanges.forEach(((i,o)=>{const a=t.Eu.get(o);a&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?ue(a.lu,14607):i.removedDocuments.size>0&&(ue(a.lu,42227),a.lu=!1))})),await is(t,r,e)}catch(r){await Zr(r)}}function ql(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach(((o,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const u=Y(a);u.onlineState=l;let f=!1;u.queries.forEach(((y,w)=>{for(const S of w.wa)S.va(l)&&(f=!0)})),f&&ec(u)})(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hv(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),o=i&&i.key;if(o){let a=new we(W.comparator);a=a.insert(o,Ge.newNoDocument(o,J.min()));const l=ie().add(o),u=new To(J.min(),new Map,new we(te),a,l);await od(r,u),r.du=r.du.remove(o),r.Eu.delete(e),nc(r)}else await fa(r.localStore,e,!1).then((()=>ga(r,e,t))).catch(Zr)}async function dv(n,e){const t=Y(n),r=e.batch.batchId;try{const i=await v_(t.localStore,e);cd(t,r,null),ad(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await is(t,i)}catch(i){await Zr(i)}}async function fv(n,e,t){const r=Y(n);try{const i=await(function(a,l){const u=Y(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let y;return u.mutationQueue.lookupMutationBatch(f,l).next((w=>(ue(w!==null,37113),y=w.keys(),u.mutationQueue.removeMutationBatch(f,w)))).next((()=>u.mutationQueue.performConsistencyCheck(f))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(f,y,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,y))).next((()=>u.localDocuments.getDocuments(f,y)))}))})(r.localStore,e);cd(r,e,t),ad(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await is(r,i)}catch(i){await Zr(i)}}function ad(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function cd(n,e,t){const r=Y(n);let i=r.Ru[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function ga(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||ld(n,r)}))}function ld(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ka(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),nc(n))}function $l(n,e,t){for(const r of t)r instanceof rd?(n.Au.addReference(r.key,e),mv(n,r)):r instanceof id?(q(tc,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||ld(n,r.key)):K(19791,{yu:r})}function mv(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(q(tc,"New document in limbo: "+t),n.Iu.add(r),nc(n))}function nc(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new W(ge.fromString(e)),r=n.mu.next();n.Eu.set(r,new rv(t)),n.du=n.du.insert(t,r),Yh(n.remoteStore,new Cn(Lt(Eh(t.path)),r,"TargetPurposeLimboResolution",po.ue))}}async function is(n,e,t){const r=Y(n),i=[],o=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,u)=>{a.push(r.gu(u,e,t).then((f=>{var y;if((f||t)&&r.isPrimaryClient){const w=f?!f.fromCache:(y=t==null?void 0:t.targetChanges.get(u.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(u.targetId,w?"current":"not-current")}if(f){i.push(f);const w=Wa.Es(u.targetId,f);o.push(w)}})))})),await Promise.all(a),r.hu.J_(i),await(async function(u,f){const y=Y(u);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>V.forEach(f,(S=>V.forEach(S.Is,(L=>y.persistence.referenceDelegate.addReference(w,S.targetId,L))).next((()=>V.forEach(S.ds,(L=>y.persistence.referenceDelegate.removeReference(w,S.targetId,L)))))))))}catch(w){if(!ei(w))throw w;q(Ga,"Failed to update sequence numbers: "+w)}for(const w of f){const S=w.targetId;if(!w.fromCache){const L=y.Fs.get(S),M=L.snapshotVersion,H=L.withLastLimboFreeSnapshotVersion(M);y.Fs=y.Fs.insert(S,H)}}})(r.localStore,o))}async function pv(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){q(tc,"User change. New user:",e.toKey());const r=await Gh(t.localStore,e);t.currentUser=e,(function(o,a){o.Vu.forEach((l=>{l.forEach((u=>{u.reject(new j(D.CANCELLED,a))}))})),o.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await is(t,r.Bs)}}function gv(n,e){const t=Y(n),r=t.Eu.get(e);if(r&&r.lu)return ie().add(r.key);{let i=ie();const o=t.Tu.get(e);if(!o)return i;for(const a of o){const l=t.Pu.get(a);i=i.unionWith(l.view.tu)}return i}}function ud(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=od.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hv.bind(null,e),e.hu.J_=X_.bind(null,e.eventManager),e.hu.pu=Z_.bind(null,e.eventManager),e}function yv(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fv.bind(null,e),e}class so{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Io(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return __(this.persistence,new p_,e.initialUser,this.serializer)}Du(e){return new Wh(za.Vi,this.serializer)}bu(e){return new A_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}so.provider={build:()=>new so};class _v extends so{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ue(this.persistence.referenceDelegate instanceof ro,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new e_(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?tt.withCacheSize(this.cacheSizeBytes):tt.DEFAULT;return new Wh((r=>ro.Vi(r,t)),this.serializer)}}class ya{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ql(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pv.bind(null,this.syncEngine),await G_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Q_})()}createDatastore(e){const t=Io(e.databaseInfo.databaseId),r=(function(o){return new k_(o)})(e.databaseInfo);return(function(o,a,l,u){return new N_(o,a,l,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,o,a,l){return new O_(r,i,o,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>ql(this.syncEngine,t,0)),(function(){return xl.C()?new xl:new S_})())}createSyncEngine(e,t){return(function(i,o,a,l,u,f,y){const w=new iv(i,o,a,l,u,f);return y&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const o=Y(i);q(lr,"RemoteStore shutting down."),o.Ia.add(5),await rs(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ya.provider={build:()=>new ya};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):tn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="FirestoreClient";class Ev{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=We.UNAUTHENTICATED,this.clientId=Na.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{q(Bn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(q(Bn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Za(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function zo(n,e){n.asyncQueue.verifyOperationInProgress(),q(Bn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Gh(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>{Nn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{q("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Nn("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),n._offlineComponents=e}async function jl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wv(n);q(Bn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Ml(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Ml(e.remoteStore,i))),n._onlineComponents=e}async function wv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(Bn,"Using user provided OfflineComponentProvider");try{await zo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Nn("Error using user provided cache. Falling back to memory cache: "+t),await zo(n,new so)}}else q(Bn,"Using default OfflineComponentProvider"),await zo(n,new _v(void 0));return n._offlineComponents}async function hd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(Bn,"Using user provided OnlineComponentProvider"),await jl(n,n._uninitializedComponentsProvider._online)):(q(Bn,"Using default OnlineComponentProvider"),await jl(n,new ya))),n._onlineComponents}function Tv(n){return hd(n).then((e=>e.syncEngine))}async function Iv(n){const e=await hd(n),t=e.eventManager;return t.onListen=sv.bind(null,e.syncEngine),t.onUnlisten=cv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ov.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lv.bind(null,e.syncEngine),t}function bv(n,e,t={}){const r=new Vn;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,u,f){const y=new vv({next:S=>{y.Ou(),a.enqueueAndForget((()=>Y_(o,w))),S.fromCache&&u.source==="server"?f.reject(new j(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(S)},error:S=>f.reject(S)}),w=new ev(l,y,{includeMetadataChanges:!0,ka:!0});return J_(o,w)})(await Iv(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="firestore.googleapis.com",zl=!0;class Wl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fd,this.ssl=zl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:zl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Xy)throw new j(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Og("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new j(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new j(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new j(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class So{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Cg;switch(r.type){case"firstParty":return new Dg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Hl.get(t);r&&(q("ComponentProvider","Removing Datastore"),Hl.delete(t),r.terminate())})(this),Promise.resolve()}}function Av(n,e,t,r={}){var i;n=Ui(n,So);const o=Qr(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;o&&(ou(`https://${u}`),au("Firestore",!0)),a.host!==fd&&a.host!==u&&Nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:u,ssl:o,emulatorOptions:r});if(!ir(f,l)&&(n._setSettings(f),r.mockUserToken)){let y,w;if(typeof r.mockUserToken=="string")y=r.mockUserToken,w=We.MOCK_USER;else{y=Nd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new j(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new We(S)}n._authCredentials=new Rg(new eh(y,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ni(this.firestore,e,this._query)}}class ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}toJSON(){return{type:ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Zi(t,ke._jsonSchema))return new ke(e,r||null,new W(ge.fromString(t.referencePath)))}}ke._jsonSchemaVersion="firestore/documentReference/1.0",ke._jsonSchema={type:Re("string",ke._jsonSchemaVersion),referencePath:Re("string")};class Ln extends ni{constructor(e,t,r){super(e,t,Eh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new W(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function Sv(n,e,...t){if(n=Qe(n),nh("collection","path",e),n instanceof So){const r=ge.fromString(e,...t);return sl(r),new Ln(n,null,r)}{if(!(n instanceof ke||n instanceof Ln))throw new j(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return sl(r),new Ln(n.firestore,null,r)}}function Cv(n,e,...t){if(n=Qe(n),arguments.length===1&&(e=Na.newId()),nh("doc","path",e),n instanceof So){const r=ge.fromString(e,...t);return il(r),new ke(n,null,new W(r))}{if(!(n instanceof ke||n instanceof Ln))throw new j(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return il(r),new ke(n.firestore,n instanceof Ln?n.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="AsyncQueue";class Kl{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Qh(this,"async_queue_retry"),this.oc=()=>{const r=Ho();r&&q(Gl,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Ho();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ho();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Vn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ei(e))throw e;q(Gl,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,tn("INTERNAL UNHANDLED ERROR: ",Ql(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Xa.createAndSchedule(this,e,t,r,(o=>this.lc(o)));return this.ec.push(i),i}ac(){this.tc&&K(47125,{hc:Ql(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ql(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class rc extends So{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Kl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kl(e),this._firestoreClient=void 0,await e}}}function Rv(n,e){const t=typeof n=="object"?n:hu(),r=typeof n=="string"?n:Ys,i=wa(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Vd("firestore");o&&Av(i,...o)}return i}function md(n){if(n._terminated)throw new j(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Pv(n),n._firestoreClient}function Pv(n){var e,t,r;const i=n._freezeSettings(),o=(function(l,u,f,y){return new Gg(l,u,f,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,dd(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Ev(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mt(Be.fromBase64String(e))}catch(t){throw new j(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mt(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Zi(e,mt._jsonSchema))return mt.fromBase64String(e.bytes)}}mt._jsonSchemaVersion="firestore/bytes/1.0",mt._jsonSchema={type:Re("string",mt._jsonSchemaVersion),bytes:Re("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xt._jsonSchemaVersion}}static fromJSON(e){if(Zi(e,xt._jsonSchema))return new xt(e.latitude,e.longitude)}}xt._jsonSchemaVersion="firestore/geoPoint/1.0",xt._jsonSchema={type:Re("string",xt._jsonSchemaVersion),latitude:Re("number"),longitude:Re("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ot._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zi(e,Ot._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ot(e.vectorValues);throw new j(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ot._jsonSchemaVersion="firestore/vectorValue/1.0",Ot._jsonSchema={type:Re("string",Ot._jsonSchemaVersion),vectorValues:Re("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=/^__.*__$/;class Dv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,t,this.fieldTransforms):new ts(e,this.data,t,this.fieldTransforms)}}function pd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ec:n})}}class oc{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new oc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return oo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(pd(this.Ec)&&kv.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Vv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Io(e)}Dc(e,t,r,i=!1){return new oc({Ec:e,methodName:t,bc:r,path:Ue.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gd(n){const e=n._freezeSettings(),t=Io(n._databaseId);return new Vv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Lv(n,e,t,r,i,o={}){const a=n.Dc(o.merge||o.mergeFields?2:0,e,t,i);vd("Data must be an object, but it was:",a,r);const l=yd(r,a);let u,f;if(o.merge)u=new It(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const y=[];for(const w of o.mergeFields){const S=xv(e,w,t);if(!a.contains(S))throw new j(D.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Mv(y,S)||y.push(S)}u=new It(y),f=a.fieldTransforms.filter((w=>u.covers(w.field)))}else u=null,f=a.fieldTransforms;return new Dv(new ft(l),u,f)}class ac extends sc{_toFieldTransform(e){return new vy(e.path,new Hi)}isEqual(e){return e instanceof ac}}function Nv(n,e,t,r=!1){return cc(t,n.Dc(r?4:3,e))}function cc(n,e){if(_d(n=Qe(n)))return vd("Unsupported field value:",e,n),yd(n,e);if(n instanceof sc)return(function(r,i){if(!pd(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,i){const o=[];let a=0;for(const l of r){let u=cc(l,i.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}})(n,e)}return(function(r,i){if((r=Qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gy(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=_e.fromDate(r);return{timestampValue:no(i.serializer,o)}}if(r instanceof _e){const o=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:no(i.serializer,o)}}if(r instanceof xt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mt)return{bytesValue:Fh(i.serializer,r._byteString)};if(r instanceof ke){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ja(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ot)return(function(a,l){return{mapValue:{fields:{[hh]:{stringValue:dh},[Xs]:{arrayValue:{values:a.toArray().map((f=>{if(typeof f!="number")throw l.wc("VectorValues must only contain numeric values.");return Ba(l.serializer,f)}))}}}}}})(r,i);throw i.wc(`Unsupported field value: ${mo(r)}`)})(n,e)}function yd(n,e){const t={};return sh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ur(n,((r,i)=>{const o=cc(i,e.Vc(r));o!=null&&(t[r]=o)})),{mapValue:{fields:t}}}function _d(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof xt||n instanceof mt||n instanceof ke||n instanceof sc||n instanceof Ot)}function vd(n,e,t){if(!_d(t)||!rh(t)){const r=mo(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function xv(n,e,t){if((e=Qe(e))instanceof ic)return e._internalPath;if(typeof e=="string")return Ed(n,e);throw oo("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ov=new RegExp("[~\\*/\\[\\]]");function Ed(n,e,t){if(e.search(Ov)>=0)throw oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ic(...e.split("."))._internalPath}catch{throw oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function oo(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new j(D.INVALID_ARGUMENT,l+n+u)}function Mv(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(lc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Fv extends wd{data(){return super.data()}}function lc(n,e){return typeof e=="string"?Ed(n,e):e instanceof ic?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uc{}class Bv extends uc{}function qv(n,e,...t){let r=[];e instanceof uc&&r.push(e),r=r.concat(t),(function(o){const a=o.filter((u=>u instanceof hc)).length,l=o.filter((u=>u instanceof Co)).length;if(a>1||a>0&&l>0)throw new j(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class Co extends Bv{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Co(e,t,r)}_apply(e){const t=this._parse(e);return Td(e._query,t),new ni(e.firestore,e.converter,aa(e._query,t))}_parse(e){const t=gd(e.firestore);return(function(o,a,l,u,f,y,w){let S;if(f.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new j(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Yl(w,y);const M=[];for(const H of w)M.push(Jl(u,o,H));S={arrayValue:{values:M}}}else S=Jl(u,o,w)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Yl(w,y),S=Nv(l,a,w,y==="in"||y==="not-in");return Ce.create(f,y,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function $v(n,e,t){const r=e,i=lc("where",n);return Co._create(i,r,t)}class hc extends uc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hc(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:At.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,o){let a=i;const l=o.getFlattenedFilters();for(const u of l)Td(a,u),a=aa(a,u)})(e._query,t),new ni(e.firestore,e.converter,aa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Jl(n,e,t){if(typeof(t=Qe(t))=="string"){if(t==="")throw new j(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wh(e)&&t.indexOf("/")!==-1)throw new j(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ge.fromString(t));if(!W.isDocumentKey(r))throw new j(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fl(n,new W(r))}if(t instanceof ke)return fl(n,t._key);throw new j(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mo(t)}.`)}function Yl(n,e){if(!Array.isArray(n)||n.length===0)throw new j(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Td(n,e){const t=(function(i,o){for(const a of i)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new j(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class jv{convertValue(e,t="none"){switch(Fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ur(e,((i,o)=>{r[i]=this.convertValue(o,t)})),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Xs].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((a=>Ae(a.doubleValue)));return new Ot(o)}convertGeoPoint(e){return new xt(Ae(e.latitude),Ae(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=yo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(qi(e));default:return null}}convertTimestamp(e){const t=On(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ge.fromString(e);ue(Hh(r),9688,{name:e});const i=new $i(r.get(1),r.get(3)),o=new W(r.popFirst(5));return i.isEqual(t)||tn(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ds{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Br extends wd{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(lc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Br._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Br._jsonSchemaVersion="firestore/documentSnapshot/1.0",Br._jsonSchema={type:Re("string",Br._jsonSchemaVersion),bundleSource:Re("string","DocumentSnapshot"),bundleName:Re("string"),bundle:Re("string")};class qs extends Br{data(e={}){return super.data(e)}}class qr{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ds(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new qs(this._firestore,this._userDataWriter,r.key,r,new Ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const u=new qs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ds(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const u=new qs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ds(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,y=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),y=a.indexOf(l.doc.key)),{type:zv(l.type),doc:u,oldIndex:f,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=qr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Na.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}qr._jsonSchemaVersion="firestore/querySnapshot/1.0",qr._jsonSchema={type:Re("string",qr._jsonSchemaVersion),bundleSource:Re("string","QuerySnapshot"),bundleName:Re("string"),bundle:Re("string")};class Wv extends jv{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}function Gv(n){n=Ui(n,ni);const e=Ui(n.firestore,rc),t=md(e),r=new Wv(e);return Uv(n._query),bv(t,n._query).then((i=>new qr(e,r,n,i)))}function Kv(n,e,t){n=Ui(n,ke);const r=Ui(n.firestore,rc),i=Hv(n.converter,e,t);return Qv(r,[Lv(gd(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Xt.none())])}function Qv(n,e){return(function(r,i){const o=new Vn;return r.asyncQueue.enqueueAndForget((async()=>uv(await Tv(r),i,o))),o.promise})(md(n),e)}function Jv(){return new ac("serverTimestamp")}(function(e,t=!0){(function(i){Xr=i})(Jr),$r(new sr("firestore",((r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new rc(new Pg(r.getProvider("auth-internal")),new Vg(a,r.getProvider("app-check-internal")),(function(f,y){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new j(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(f.options.projectId,y)})(a,i),a);return o=Object.assign({useFetchStreams:t},o),l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),kn(Zc,el,e),kn(Zc,el,"esm2017")})();const _a={apiKey:"AIzaSyCpdAluOqarWHgbSC1slDHjruDy3W06BTo",authDomain:"cvpilot-436f4.firebaseapp.com",projectId:"cvpilot-436f4",appId:"1:37088190189:web:68a9516877a79b09b376e4"},Xl=Object.values(_a).every(Boolean)&&!Object.values(_a).some(n=>n.includes("your_firebase")||n.includes("your-project-id")),ao="[data-auth-provider]";function co(n){var e;if((e=window.CVPilotAuthUI)!=null&&e.showToast){window.CVPilotAuthUI.showToast(n);return}console.info(n)}function Yv(){return new Promise(n=>{if(window.CVPilotAuthUI){n(window.CVPilotAuthUI);return}window.addEventListener("cvpilot:auth-ui-ready",()=>n(window.CVPilotAuthUI),{once:!0})})}function Zl(n,e,t="account"){var r;document.querySelectorAll(ao).forEach(i=>{i.disabled=e}),n&&((r=n.dataset).originalLabel??(r.originalLabel=n.innerHTML),n.innerHTML=e?`Connecting to ${t}...`:n.dataset.originalLabel,e||document.querySelectorAll(ao).forEach(i=>{i.disabled=!1}))}function Id(n){if(n==="github"){const t=new Kt;return t.addScope("read:user"),t.addScope("user:email"),{label:"GitHub",provider:t}}const e=new Gt;return e.setCustomParameters({prompt:"select_account"}),{label:"Google",provider:e}}function Xv(n){document.querySelectorAll(ao).forEach(e=>{e.addEventListener("click",async()=>{const t=e.dataset.authProvider||"google",{label:r}=Id(t);try{Zl(e,!0,r),co(`Connecting to ${r} secure sign-in...`),await n(t)}catch(i){co(Zv(i))}finally{Zl(e,!1,r)}})})}function Zv(n){switch(console.error("Firebase Auth Error details:",n),n==null?void 0:n.code){case"auth/email-already-in-use":return"This email address is already registered. Please log in instead.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/weak-password":return"Password is too weak. It must be at least 6 characters.";case"auth/wrong-password":case"auth/user-not-found":case"auth/invalid-credential":return"Incorrect email or password. Please verify your credentials.";case"auth/popup-closed-by-user":return"The secure sign-in window was closed before completing.";case"auth/popup-blocked":return"The browser blocked the secure sign-in popup. Allow popups for this site and try again.";case"auth/unauthorized-domain":return"This domain is not authorized for Firebase Auth. Check your console.";case"auth/operation-not-allowed":return"This Firebase sign-in provider is not enabled yet.";case"auth/account-exists-with-different-credential":return"This email is already linked to another sign-in method. Use the original method first.";default:return(n==null?void 0:n.message)||"Authentication failed. Please try again."}}document.addEventListener("DOMContentLoaded",async()=>{const n=await Yv();if(window.CVPilotFirebaseAuth={isConfigured:Xl,signUpWithEmail:async()=>{throw new Error("Firebase is not configured.")},signInWithEmail:async()=>{throw new Error("Firebase is not configured.")},logout:async()=>{}},window.CVPilotFirebaseDB={isConfigured:!1,saveResume:async()=>{throw new Error("Database is not configured.")},getUserResumes:async()=>{throw new Error("Database is not configured.")}},!Xl){document.querySelectorAll(ao).forEach(e=>{e.addEventListener("click",()=>{co("Firebase is not configured yet. Add Firebase web config values before using login.")})});return}try{const e=uu(_a),t=Ag(e),r=Rv(e),i=async o=>{const{provider:a}=Id(o);return Np(t,a)};window.CVPilotFirebaseAuth={isConfigured:!0,auth:t,signUpWithEmail:async(o,a,l)=>{const u=await cp(t,o,a);return await hp(u.user,{displayName:l}),u.user},signInWithEmail:async(o,a)=>(await lp(t,o,a)).user,signInWithProvider:i,logout:()=>$c(t)},window.CVPilotFirebaseDB={isConfigured:!0,db:r,saveResume:async(o,a)=>{const l=Cv(r,"resumes",o),u={...a,updatedAt:Jv()};return await Kv(l,u,{merge:!0}),o},getUserResumes:async o=>{const a=qv(Sv(r,"resumes"),$v("ownerId","==",o)),l=await Gv(a),u=[];return l.forEach(f=>{u.push({id:f.id,...f.data()})}),u}},window.firebaseAuth={signOut:()=>$c(t)},Xv(i),mp(t,o=>{var a,l,u;if(!o){(a=n.renderSignedOut)==null||a.call(n,{silent:!0,skipFirebase:!0});return}(u=n.renderSignedIn)==null||u.call(n,{uid:o.uid,name:o.displayName||((l=o.email)==null?void 0:l.split("@")[0])||"CVPilot User",email:o.email||"",photoURL:o.photoURL||"",provider:"Google",persistLocal:!0})})}catch(e){console.error("Firebase Initialization Failed:",e),co("⚠️ Failed to initialize Firebase Auth. Check console logs for errors.")}});
