import{H as e}from"./control-f5b05b5f.js";import{i as n}from"./projectData-986599ef.js";function l(r,o){return new e(r,o)}async function s({params:r}){const o=n.find(t=>t.slug===r.slug);if(!o)throw l(404,`Could not load ${r.slug}`);return{projectData:o}}const u=!0,c=Object.freeze(Object.defineProperty({__proto__:null,load:s,prerender:u},Symbol.toStringTag,{value:"Module"}));export{c as _,s as l,u as p};