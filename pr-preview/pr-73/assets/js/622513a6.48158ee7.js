"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={title:"Uppy version 0.8 released: The Webcam Edition and Meta Data",date:new Date("2016-08-17T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2016/08/0.8.0"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-73/blog/2016/08/0.8.0",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2016-08-0.8.0.md",source:"@site/blog/2016-08-0.8.0.md",title:"Uppy version 0.8 released: The Webcam Edition and Meta Data",description:"We have just released Uppy 0.8.0 and we can't wait to tell you more about it.",date:"2016-08-17T00:00:00.000Z",formattedDate:"August 17, 2016",tags:[],readingTime:4.285,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy version 0.8 released: The Webcam Edition and Meta Data",date:"2016-08-17T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2016/08/0.8.0"},prevItem:{title:"Uppy 0.9: Making Progress, then pause & resume. Remote file uploads, Informer.",permalink:"/uppy.io/pr-preview/pr-73/blog/2016/08/0.9.0"},nextItem:{title:"Uppy: let\u2019s teach an old dog some new\xa0tricks",permalink:"/uppy.io/pr-preview/pr-73/blog/2016/06/uppy/begins"}},p={authorsImageUrls:[void 0]},u=[{value:"Including Meta Data",id:"including-meta-data",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We have just released Uppy 0.8.0 and we can't wait to tell you more about it.\nAlong with various under-the-hood improvements, this release also contains some\nvery visible upgrades. You can read below for further details."),(0,n.kt)("h2",{id:"including-meta-data"},"Including Meta Data"),(0,n.kt)("p",null,"While fetching your files, Uppy is now also able to supply some custom metadata\nto go along with them. So far, there are three components in place for that:\nCore API (",(0,n.kt)("inlineCode",{parentName:"p"},"core:update-meta")," event), ",(0,n.kt)("inlineCode",{parentName:"p"},"MetaData")," plugin, and a new panel in\nDashboard UI called File Card, which looks like this:"),(0,n.kt)("img",{alt:"metadata dashboard UI, editing file name, future size and adding description",src:"/img/blog/0.8/metadata-dashboard.jpg",className:"border"}))}d.isMDXComponent=!0}}]);