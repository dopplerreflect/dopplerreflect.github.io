import{j as c,R as p,a as u}from"./vendor.cb872ddf.js";const m=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function f(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=f(e);fetch(e.href,r)}};m();var n="/assets/dr-logo.dd9f8d43.svg",v="/assets/title-filter.3c879478.svg",g="/assets/Cardioid.530a6ea2.svg",h="/assets/CornerReflector.0588e7d4.svg",y="/assets/Elliptical.0b1475b2.svg",b="/assets/Epicycloid.f2341059.svg",R="/assets/MaurerRose-n5-d143.4425397e.svg",j="/assets/SpiralStar.31587ce1.svg",w="/assets/StarMandala.5dbbc1e2.svg";const d=[n,w,b,g,h,R,y,j],s=c.exports.jsx,t=c.exports.jsxs;function x(){return console.log(n),console.log(d),t("div",{className:"App",children:[t("header",{children:[s("img",{id:"logo",src:n}),s("img",{id:"title",src:v})]}),t("main",{children:[d.map(o=>s("img",{src:o,width:"25%"},o)),s("h1",{children:"About"}),t("p",{children:["Hello, I'm ",s("strong",{children:"doppler"}),", aka David Rose."]}),s("p",{children:"When I'm not teaching people to skydive or filming someone's first tandem skydive, I enjoy creating visual art with code."}),s("p",{children:"This website will serve as a showcase for some of my work. In the future, I hope to share the work via physical media such as on jerseys, canvas, decals, etc."})]})]})}p.render(s(u.StrictMode,{children:s(x,{})}),document.getElementById("root"));
