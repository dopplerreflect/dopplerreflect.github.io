import{j as l,R as f,a as g}from"./vendor.cb872ddf.js";const m=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function u(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=u(t);fetch(t.href,s)}};m();var d="/assets/dr-logo.dd9f8d43.svg",v="/assets/close-button.6e704215.svg",h="/assets/title-filter.3c879478.svg",y="/assets/Cardioid.e8136fce.svg",b="/assets/CornerReflector.0588e7d4.svg",w="/assets/Elliptical.0b1475b2.svg",k="/assets/Epicycloid.f2341059.svg",I="/assets/MaurerRose-n5-d143.4425397e.svg",C="/assets/SpiralStar.31587ce1.svg",R="/assets/StarMandala.5dbbc1e2.svg";const S=[{src:d,title:"DR Logo",desc:"Stylized D and R constructed on a pentagram."},{src:R,title:"Star Mandala",desc:"Mandala drawn with quadratic bezier curves using rings spaced according to golden ratio as a guide."},{src:k,title:"Epicycloid",desc:'From Wikipedia: "In geometry, an epicycloid is a plane curve produced by tracing the path of a chosen point on the circumference of a circle\u2014called an epicycle\u2014which rolls without slipping around a fixed circle"'},{src:y,title:"Cardioid",desc:'Colored dots arranged in a <a href="https://en.wikipedia.org/wiki/Cardioid" target="_blank">Cardioid</a> pattern.'},{src:b,title:"Corner Reflector",desc:"Divide the sides of square into golden sections and bounce a line from a corner off of it, and add some translucent colors."},{src:I,title:"Maurer Rose",desc:`I don't really know a way to succinctly explain this. See the Wikipedia article for <a href="https://en.wikipedia.org/wiki/Maurer_rose" target="_blank">Maurer Rose</a>.`},{src:w,title:"Elliptical",desc:"Choose a point within (or outiside of) a circle and draw rays from that point to the edge of the circle. Rotate each ray at its midpoint 90 degrees. The resulting lines create overlap to create an ellipse with the circle's midpoint and the chosen point as its focal points. This is that, five times."},{src:C,title:"SpiralStar",desc:"Lots of stars. And the golden ratio. And spirals. And gradients. This is the basis for a small batch of jerseys I have on order."},{src:h,title:"dopplerreflect Title",desc:"Image for the header of this site. I tried to incorporate a blue and red blur behind the text, because... doppler shift."}],r=l.exports.jsx,a=l.exports.jsxs,p=e=>e.replace(/[^\w]/,"").toLowerCase(),c=()=>document.querySelectorAll(".Detail").forEach(e=>e.classList.remove("visible")),L=e=>{c();const i=document.querySelector(`.Detail#${p(e.title)}`);i==null||i.classList.add("visible")},M=e=>{e.code==="Escape"&&c()};document.addEventListener("keydown",M);function x(){return a("div",{className:"App",children:[a("header",{children:[r("img",{id:"logo",src:d}),r("img",{id:"title",src:h})]}),a("main",{children:[r("div",{id:"Gallery",children:S.map(e=>a("div",{className:"Image",children:[r("img",{src:e.src,onClick:()=>L(e)}),r(D,{image:e})]},e.src))}),r("h1",{children:"About"}),a("p",{children:["Hello, I'm ",r("strong",{children:"doppler"}),", aka David Rose."]}),r("p",{children:"When I'm not teaching people to skydive or filming someone's first tandem skydive, I enjoy creating visual art with code."}),r("p",{children:"This website will serve as a showcase for some of my work. In the future, I hope to share the work via physical media such as on jerseys, canvas, decals, etc."})]})]})}const D=({image:e})=>a("div",{className:"Detail",id:p(e.title),children:[r("h1",{children:e.title}),r("p",{dangerouslySetInnerHTML:{__html:e.desc}}),r("img",{src:e.src}),r("img",{src:v,className:"CloseButton",onClick:()=>c()})]});f.render(r(g.StrictMode,{children:r(x,{})}),document.getElementById("root"));
