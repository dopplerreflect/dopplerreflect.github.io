import{j as i,R as l,a as d}from"./vendor.cb872ddf.js";const a=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};a();var f="/assets/dr-logo.52ef72b0.svg";const t=i.exports.jsx,u=i.exports.jsxs;function p(){return t("div",{className:"App",children:u("div",{className:"Header",children:[t("img",{src:f}),"dopplerreflect.art"]})})}l.render(t(d.StrictMode,{children:t(p,{})}),document.getElementById("root"));
