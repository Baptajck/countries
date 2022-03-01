var j=Object.defineProperty;var b=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var I=(s,o,r)=>o in s?j(s,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[o]=r,k=(s,o)=>{for(var r in o||(o={}))R.call(o,r)&&I(s,r,o[r]);if(b)for(var r of b(o))D.call(o,r)&&I(s,r,o[r]);return s};import{r as n,j as E,P as f,N as w,u as B,a as T,R as O,b as S,c as A,d as $,B as P}from"./vendor.953bff5f.js";const F=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))e(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&e(p)}).observe(document,{childList:!0,subtree:!0});function r(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(l){if(l.ep)return;l.ep=!0;const i=r(l);fetch(l.href,i)}};F();var W={};function x(s){localStorage.setItem("countries-baptjack-theme",s),document.documentElement.className=s}function q(){localStorage.getItem("countries-baptjack-theme")?localStorage.getItem("countries-baptjack-theme")==="theme-light"?x("theme-light"):x("theme-dark"):x("theme-light")}const L=n.exports.createContext(),G=L.Provider,z="_home_am3xl_27",H="_containerFilter_am3xl_27",K="_search_am3xl_35",J="_searchInput_am3xl_45",Q="_searchIcon_am3xl_53",U="_region_am3xl_61",V="_details_am3xl_66",X="_summary_am3xl_78",Y="_summaryIcon_am3xl_78",Z="_regionList_am3xl_92",ee="_regionItem_am3xl_105",te="_cards_am3xl_111",ne="_navlink_am3xl_118";var d={"theme-light":"_theme-light_am3xl_2","theme-dark":"_theme-dark_am3xl_11",home:z,containerFilter:H,search:K,searchInput:J,searchIcon:Q,region:U,details:V,summary:X,summaryIcon:Y,regionList:Z,regionItem:ee,cards:te,navlink:ne};function se(s){return n.exports.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},s),n.exports.createElement("title",null,"Search"),n.exports.createElement("path",{d:"M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z",fill:"none",stroke:"currentColor",strokeMiterlimit:10,strokeWidth:32}),n.exports.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:32,d:"M338.29 338.29L448 448"}))}function oe(s){return n.exports.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},s),n.exports.createElement("title",null,"Chevron Down"),n.exports.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:48,d:"M112 184l144 144 144-144"}))}const ae="_card_h4sy1_27",re="_image_h4sy1_36",ie="_infos_h4sy1_42",le="_title_h4sy1_45",ce="_info_h4sy1_42",me="_infoDetail_h4sy1_52";var u={"theme-light":"_theme-light_h4sy1_2","theme-dark":"_theme-dark_h4sy1_11",card:ae,image:re,infos:ie,title:le,info:ce,infoDetail:me};const t=E.exports.jsx,a=E.exports.jsxs,y=({name:s="",region:o="",flag:r="",capital:e="",population:l=0})=>a("article",{className:u.card,children:[t("img",{src:r,alt:s,className:u.image}),a("div",{className:u.infos,children:[t("h2",{className:u.title,children:s}),a("p",{className:u.info,children:["Population:"," ",t("span",{className:u.infoDetail,children:new Intl.NumberFormat("en-EN").format(l)})]}),a("p",{className:u.info,children:["Region: ",t("span",{className:u.infoDetail,children:o})]}),e&&a("p",{className:u.info,children:["Capital: ",t("span",{className:u.infoDetail,children:e})]})]})]});y.propTypes={capital:f.string,flag:f.string.isRequired,name:f.string.isRequired,population:f.number.isRequired,region:f.string.isRequired};const he=()=>{const s=n.exports.useContext(L),[o,r]=n.exports.useState(""),[e,l]=n.exports.useState([]),[i,p]=n.exports.useState(""),[N,_]=n.exports.useState(["Africa","Americas","Asia","Europe","Oceania"]),h=n.exports.useRef(null);return n.exports.useEffect(()=>{const m=s.filter(g=>i===""?g.name.toLowerCase().includes(o.toLowerCase()):g.name.toLowerCase().includes(o.toLowerCase())&&g.region.toLowerCase()===i.toLowerCase());l(m)},[o,i,s]),a("div",{className:d.home,onClick:()=>h.current.removeAttribute("open"),children:[a("div",{className:d.containerFilter,children:[a("div",{className:d.search,children:[t("div",{className:d.searchIcon,children:t(se,{})}),t("input",{className:d.searchInput,type:"search",onChange:m=>r(m.target.value),placeholder:"Search for a country..."})]}),t("div",{className:d.region,onClick:()=>h.current.removeAttribute("open"),children:a("details",{ref:h,className:d.details,children:[a("summary",{className:d.summary,children:[i===""?"Filter by region":i,t("span",{className:d.summaryIcon,children:t(oe,{})})]}),t("ul",{className:d.regionList,children:N.map(m=>t("li",{onClick:g=>{p(m),h.current.removeAttribute("open")},className:d.regionItem,children:m},m))})]})})]}),t("section",{className:d.cards,children:e.map((m,g)=>t("div",{children:t(w,{to:`/${m.alpha3Code.toLowerCase()}`,className:d.navlink,children:t(y,{name:m.name,region:m.region,flag:m.flags.png,capital:m.capital,population:m.population})})},g))})]})},de="_link_kpxon_27",ue="_header_kpxon_32",pe="_title_kpxon_40";var C={"theme-light":"_theme-light_kpxon_2","theme-dark":"_theme-dark_kpxon_11",link:de,header:ue,title:pe};const _e="_container_1pss5_27",fe="_icon_1pss5_34";var v={"theme-light":"_theme-light_1pss5_2","theme-dark":"_theme-dark_1pss5_11",container:_e,icon:fe};function ge(s){return n.exports.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},s),n.exports.createElement("title",null,"Sunny"),n.exports.createElement("path",{fill:"#ffffff",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:32,d:"M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"}),n.exports.createElement("circle",{cx:256,cy:256,r:80,fill:"#ffffff",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:32}))}function ke(s){return n.exports.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},s),n.exports.createElement("title",null,"Moon"),n.exports.createElement("path",{fill:"none",d:"M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32}))}function M({changeTheme:s=!1,setChangeTheme:o=()=>{}}){const[r,e]=n.exports.useState("dark");let l=localStorage.getItem("countries-baptjack-theme");const i=()=>{localStorage.getItem("countries-baptjack-theme")==="theme-dark"?(x("theme-light"),e("light")):(x("theme-dark"),e("dark"))};return n.exports.useEffect(()=>{localStorage.getItem("countries-baptjack-theme")==="theme-dark"?(e("dark"),o(!0)):(e("light"),o(!1))},[l]),a("div",{className:v.container,children:[localStorage.getItem("countries-baptjack-theme")==="theme-dark"?t(ge,{className:v.icon,onClick:i}):t(ke,{className:v.icon,onClick:i}),t("span",{onClick:i,className:v.switchTheme,children:localStorage.getItem("countries-baptjack-theme")==="theme-dark"?"Light Mode":"Dark Mode"})]})}M.propTypes={changeTheme:f.bool.isRequired,setChangeTheme:f.func.isRequired};const xe=()=>{const[s,o]=n.exports.useState(!1);return a("header",{className:C.header,children:[t(w,{to:"/",className:C.link,children:t("h1",{className:C.title,children:"Where in the world?"})}),t(M,{changeTheme:s,setChangeTheme:o})]})},Ne="_countryDetails_13y8u_27",ve="_containerButton_13y8u_31",Ce="_button_13y8u_34",we="_buttonIcon_13y8u_47",Le="_containerInfos_13y8u_54",be="_flag_13y8u_61",Ie="_name_13y8u_66",Se="_infoList_13y8u_69",Ee="_info_13y8u_69",ye="_borderCountries_13y8u_78",Me="_title_13y8u_78",je="_list_13y8u_82",Re="_item_13y8u_88",De="_infos_13y8u_116",Be="_infosListGroup_13y8u_123";var c={"theme-light":"_theme-light_13y8u_2","theme-dark":"_theme-dark_13y8u_11",countryDetails:Ne,containerButton:ve,button:Ce,buttonIcon:we,containerInfos:Le,flag:be,name:Ie,infoList:Se,info:Ee,borderCountries:ye,title:Me,list:je,item:Re,infos:De,infosListGroup:Be};function Te(s){return n.exports.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},s),n.exports.createElement("title",null,"Arrow Back"),n.exports.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:48,d:"M244 400L100 256l144-144M120 256h292"}))}const Oe=()=>{var i,p,N;const s=B(),{slug:o}=T(),r=n.exports.useContext(L),[e,l]=n.exports.useState({});return n.exports.useEffect(()=>{const _=r==null?void 0:r.find(h=>h.alpha3Code.toLowerCase()===o);l(_)},[r,o]),t("div",{className:c.countryDetails,children:a("div",{className:c.containerButton,children:[a("button",{className:c.button,onClick:()=>s(-1),children:[t("span",{className:c.buttonIcon,children:t(Te,{})}),"Back"]}),a("div",{className:c.containerInfos,children:[t("img",{src:e==null?void 0:e.flag,alt:e==null?void 0:e.name,className:c.flag}),a("div",{className:c.infos,children:[t("h1",{className:c.name,children:e==null?void 0:e.name}),a("div",{className:c.infosListGroup,children:[a("section",{className:c.infoList,children:[a("p",{className:c.info,children:["Native Name: ",t("span",{children:e==null?void 0:e.nativeName})]}),a("p",{className:c.info,children:["Population:"," ",t("span",{children:new Intl.NumberFormat("en-EN").format(e==null?void 0:e.population)})]}),a("p",{className:c.info,children:["Region: ",t("span",{children:e==null?void 0:e.region})]}),a("p",{className:c.info,children:["Sub Region: ",t("span",{children:e==null?void 0:e.subregion})]}),!!(e==null?void 0:e.capital)&&a("p",{className:c.info,children:["Capital: ",t("span",{children:e==null?void 0:e.capital})]})]}),a("section",{className:c.infoList,children:[a("p",{className:c.info,children:["Top Level Domain: ",t("span",{children:e==null?void 0:e.topLevelDomain})]}),a("p",{className:c.info,children:["Currencies:"," ",t("span",{children:(i=e==null?void 0:e.currencies)==null?void 0:i.map(_=>_.name).join(", ")})]}),a("p",{className:c.info,children:["Languages:"," ",t("span",{children:(p=e==null?void 0:e.languages)==null?void 0:p.map(_=>_.name).join(", ")})]})]})]}),!!(e==null?void 0:e.borders)&&a("div",{className:c.borderCountries,children:[t("h3",{className:c.title,children:"Border Countries:"}),t("div",{className:c.list,children:(N=e==null?void 0:e.borders)==null?void 0:N.map(_=>{let h=r.find(m=>m.alpha3Code===_);return t(w,{to:`/${h==null?void 0:h.alpha3Code.toLowerCase()}`,className:c.item,children:h==null?void 0:h.name})})})]})]})]})]})})},Ae=()=>{const[s,o]=n.exports.useState([]);return n.exports.useState(!1),n.exports.useEffect(()=>{q()},[]),n.exports.useEffect(async()=>{try{const e=await(await fetch("https://restcountries.com/v2/all")).json();o(e)}catch(r){console.log(r)}},[]),t("div",{className:W.app,children:a(G,{value:s,children:[t(xe,{}),t("main",{children:a(O,{children:[t(S,{path:"/",element:t(he,{})}),t(S,{path:"/:slug",element:t(Oe,{})})]})})]})})};A.render(t($.StrictMode,{children:t(P,{basename:"/countries",children:t(Ae,{})})}),document.getElementById("root"));
