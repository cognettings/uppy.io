"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5903],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,y=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Uppy 3.0: Future-proof, conveniently easy, stable as ever",date:new Date("2022-09-13T00:00:00.000Z"),authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/3.0/uppy-3-0.jpg",published:!0,slug:"2022/09/3.0"},i=void 0,p={permalink:"/uppy.io/blog/2022/09/3.0",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2022-09-3.0.md",source:"@site/blog/2022-09-3.0.md",title:"Uppy 3.0: Future-proof, conveniently easy, stable as ever",description:"Screenshot of Uppy 3.0.0 UI",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[],readingTime:6.68,hasTruncateMarker:!0,authors:[{email:"antoine@transloadit.com",name:"Antoine du Hamel",id:"aduh95",tagline:"Developer",imageURL:"https://github.com/aduh95.png",key:"aduh95"},{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"},{email:"mikael@transloadit.com",name:"Mikael Finstad",id:"mikael",tagline:"Developer",imageURL:"https://github.com/mifi.png",key:"mifi"},{email:"merlijn@transloadit.com",name:"Merlijn Vos",id:"merlijn",tagline:"Developer",imageURL:"https://github.com/murderlon.png",key:"murderlon"}],frontMatter:{title:"Uppy 3.0: Future-proof, conveniently easy, stable as ever",date:"2022-09-13T00:00:00.000Z",authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/3.0/uppy-3-0.jpg",published:!0,slug:"2022/09/3.0"},prevItem:{title:"\ud83c\udf84 Uppy 3.1-3.3: Improved AWS S3 Multipart, Single File Mode",permalink:"/uppy.io/blog/2022/12/3.3"},nextItem:{title:"Uppy 2.4-2.7: Image Compressor, Transloadit Rate Limiting, ESM",permalink:"/uppy.io/blog/2022/03/2.4/2.7"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0]},s=[],u={toc:s},c="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of Uppy 3.0.0 UI",src:r(6397).Z,width:"1200",height:"630"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For those new to Uppy, coming from Reddit, Hacker News and Product Hunt today:\nUppy is a popular open source file uploader for the browser. Pick files from\nlocal disk or camera, remote sources like Instagram, Unsplash, Dropbox etc,\nrecord audio and screencasts. Crop and tweak images with the image editor\nplugin. Supports resumable uploads to a tus.io server, AWS S3 (and many others\nwith similar API like DigitalOcean), multipart.\n",(0,a.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard"},"Try it"),"!")),(0,a.kt)("p",null,"Uppy is turning three! When you\u2019re counting in\n",(0,a.kt)("a",{parentName:"p",href:"https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/"},"dog years"),"\n\u2013 which we most certainly are \u2013 that\u2019s 29 already. An age like that signifies\nproper adulthood. For Uppy, this means it\u2019s ready to stay loyal, but without the\nsilly mistakes (read: bugs). Uppy also underwent (ESM) surgery to keep it\nstrolling by your side in the current ecosystem, and received other behavioral\nimprovements \ud83d\udc36"))}m.isMDXComponent=!0},6397:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/uppy-3-0-71a46f198071d75565646ce69236acec.jpg"}}]);