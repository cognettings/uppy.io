"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5339],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),y=o,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||p;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const p={title:"Uppy 0.20: React, Retry & Time Travel",image:"https://uppy.io/img/blog/0.20/dnd-gray.jpg",date:new Date("2017-10-05T00:00:00.000Z"),author:"renee",published:!0,slug:"2017/10/0.20"},a=void 0,i={permalink:"/uppy.io/pr-preview/pr-73/blog/2017/10/0.20",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-10-0.20.md",source:"@site/blog/2017-10-0.20.md",title:"Uppy 0.20: React, Retry & Time Travel",description:"We are proud to present Uppy 0.20. This one focuses on React and Redux",date:"2017-10-05T00:00:00.000Z",formattedDate:"October 5, 2017",tags:[],readingTime:5.4,hasTruncateMarker:!0,authors:[{name:"renee"}],frontMatter:{title:"Uppy 0.20: React, Retry & Time Travel",image:"https://uppy.io/img/blog/0.20/dnd-gray.jpg",date:"2017-10-05T00:00:00.000Z",author:"renee",published:!0,slug:"2017/10/0.20"},prevItem:{title:"Uppy 0.21: End to End Tests, Accessibility, Additional Security for Uppy Server",permalink:"/uppy.io/pr-preview/pr-73/blog/2017/10/0.21"},nextItem:{title:"Uppy 0.19: Tests, Informer details and better\xa0APIs",permalink:"/uppy.io/pr-preview/pr-73/blog/2017/09/0.19"}},c={authorsImageUrls:[void 0]},l=[{value:"Uppy React components",id:"uppy-react-components",level:2}],s={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are proud to present Uppy ",(0,o.kt)("inlineCode",{parentName:"p"},"0.20"),". This one focuses on React and Redux\nsupport, adding storage expirations to ",(0,o.kt)("inlineCode",{parentName:"p"},"GoldenRetriever")," and upload retries.\nEnjoy!"),(0,o.kt)("h2",{id:"uppy-react-components"},"Uppy React components"),(0,o.kt)("p",null,"Uppy now ships with React components! We\u2019ve been exploring different approaches\nto React components for several months, so we\u2019re excited to finally have them in\n\u2728 There are components for each of Uppy\u2019s UI elements, like the Dashboard and\nthe StatusBar."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const uppy = Uppy();\nuppy.use(Tus10, { endpoint: '/upload' });\n\nconst Dashboard = require('uppy/lib/react/Dashboard');\n\nconst Uploader = () => (\n    <Dashboard uppy={uppy} note=\"Hey! It's a React component!\" />\n);\n\nReactDOM.render(<Uploader />, document.querySelector('#uploader'));\n")))}d.isMDXComponent=!0}}]);