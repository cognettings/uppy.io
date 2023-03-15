"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2893],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,d=s["".concat(l,".").concat(m)]||s[m]||y[m]||o;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2727:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Uppy 1.8 and 1.9: security, error handling and better types",date:new Date("2020-03-09T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2020/03/1.9"},p=void 0,i={permalink:"/uppy.io/pr-preview/pr-40/blog/2020/03/1.9",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2020-03-1.9.md",source:"@site/blog/2020-03-1.9.md",title:"Uppy 1.8 and 1.9: security, error handling and better types",description:"Uppy 1.8, 1.9 and a few important security patches are out! Here are the",date:"2020-03-09T00:00:00.000Z",formattedDate:"March 9, 2020",tags:[],readingTime:3.96,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 1.8 and 1.9: security, error handling and better types",date:"2020-03-09T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2020/03/1.9"},prevItem:{title:"Uppy 1.10.1: Facebook and OneDrive",permalink:"/uppy.io/pr-preview/pr-40/blog/2020/04/1.10"},nextItem:{title:"Uppy 1.7: A Small One",permalink:"/uppy.io/pr-preview/pr-40/blog/2019/12/1.7"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Uppy 1.8, 1.9 and a few important security patches are out! Here are the\nhighlights:"))}s.isMDXComponent=!0}}]);