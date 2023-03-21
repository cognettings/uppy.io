"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Uppy 0.26: Lerna",date:new Date("2018-07-12T00:00:00.000Z"),author:"renee",image:"https://uppy.io/img/blog/0.26/uppy-multiple-packages.png",published:!0,slug:"2018/07/0.26"},i=void 0,p={permalink:"/uppy.io/pr-preview/pr-73/blog/2018/07/0.26",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2018-07-0.26.md",source:"@site/blog/2018-07-0.26.md",title:"Uppy 0.26: Lerna",description:"Uppy 0.26 replaces the monolithic Uppy package with a separate npm package for",date:"2018-07-12T00:00:00.000Z",formattedDate:"July 12, 2018",tags:[],readingTime:2.56,hasTruncateMarker:!0,authors:[{name:"renee"}],frontMatter:{title:"Uppy 0.26: Lerna",date:"2018-07-12T00:00:00.000Z",author:"renee",image:"https://uppy.io/img/blog/0.26/uppy-multiple-packages.png",published:!0,slug:"2018/07/0.26"},prevItem:{title:"Uppy 0.27: First Swing at React Native Support",permalink:"/uppy.io/pr-preview/pr-73/blog/2018/08/0.27"},nextItem:{title:"Uppy 0.25: Drag & Drop Links Urls & Images, Improved File Selecting in Providers, Interactive Components In i18n",permalink:"/uppy.io/pr-preview/pr-73/blog/2018/06/0.25"}},l={authorsImageUrls:[void 0]},s=[{value:"Lerna",id:"lerna",level:2},{value:"Typings",id:"typings",level:2},{value:"Documentation Updates",id:"documentation-updates",level:2},{value:"Renaming the <code>host</code> Option in Remote Providers",id:"renaming-the-host-option-in-remote-providers",level:2},{value:"Other Cool Changes",id:"other-cool-changes",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Uppy 0.26 replaces the monolithic Uppy package with a separate npm package for\nevery plugin."),(0,r.kt)("img",{width:"448",src:"/img/blog/0.26/uppy-multiple-packages.png"}),(0,r.kt)("h2",{id:"lerna"},"Lerna"),(0,r.kt)("p",null,"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"breaking")),(0,r.kt)("p",null,"All Uppy plugins have moved into their own npm packages. This means you need to\ninstall the plugins you use separately in the future, and you have to update all\nyour Uppy ",(0,r.kt)("inlineCode",{parentName:"p"},"require()")," calls or ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," paths."),(0,r.kt)("p",null,"The packages are published under the ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy")," scope on npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @uppy/core @uppy/dashboard @uppy/tus\n")),(0,r.kt)("p",null,"This has some benefits, like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No need to know the file path of a plugin\u2014use ",(0,r.kt)("inlineCode",{parentName:"li"},"@uppy/dashboard")," instead of\n",(0,r.kt)("inlineCode",{parentName:"li"},"uppy/lib/plugins/Dashboard"),". This also allows us to move our file structure\naround internally without breaking everyone."),(0,r.kt)("li",{parentName:"ul"},"Only have the code you actually use in ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"),"\u2014large plugin\ndependencies are not installed if you don't use the plugin."),(0,r.kt)("li",{parentName:"ul"},"Separate versioning allows making breaking changes in plugins, without\nrequiring users of other unrelated plugins to upgrade.")),(0,r.kt)("p",null,"You can still use the ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy")," package for now to simplify upgrading, although it\nmay be deprecated in the future. It installs all the ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/")," packages and\nre-exports them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Core, Dashboard, Tus } = require('uppy');\n")),(0,r.kt)("p",null,"It's very important to set up tree shaking when using Uppy in this way;\notherwise you may include dozens of KBs of unused plugins. Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/"),"\npackages instead is strongly recommended, as those do not include unused code in\nthe first place."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const Uppy = require('@uppy/core');\nconst Dashboard = require('@uppy/dashboard');\nconst Tus = require('@uppy/tus');\n")),(0,r.kt)("p",null,"The CSS required for plugins is included in each package at ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/style.css"),".\nEach plugin contains ",(0,r.kt)("em",{parentName:"p"},"all")," the CSS it needs, eg. the Dashboard includes Status\nBar CSS. If you use both plugins, only include the Dashboard CSS file. Even\nbetter is to use a CSS minifier so any duplicate styles are removed for you :)\nCaveats like this are documented on the plugin pages, and hopefully we can\nsmooth it out over time!"),(0,r.kt)("h2",{id:"typings"},"Typings"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/taoqf"},"@taoqf")," contributed TypeScript typings to 0.25\u20140.26\nmoves those into each package and adds a few missing ones."),(0,r.kt)("p",null,"We're not TypeScript experts ourselves, so feedback, bug reports & PRs are very\nmuch appreciated \u2728"),(0,r.kt)("h2",{id:"documentation-updates"},"Documentation Updates"),(0,r.kt)("p",null,"The documentation sidebar now lists plugins in several sections. This should\nmake it easier to navigate. Of course, each plugin page now lists the\n",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," instruction needed to install it, too!"),(0,r.kt)("h2",{id:"renaming-the-host-option-in-remote-providers"},"Renaming the ",(0,r.kt)("inlineCode",{parentName:"h2"},"host")," Option in Remote Providers"),(0,r.kt)("p",null,"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"breaking")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," name in remote provider plugins was not great\u2014for one, it could be a\nURL to an Uppy Server running in a subdirectory, not a hostname. As of 0.26,\n",(0,r.kt)("inlineCode",{parentName:"p"},"serverUrl")," should be used instead."),(0,r.kt)("h2",{id:"other-cool-changes"},"Other Cool Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"providers: Add ",(0,r.kt)("inlineCode",{parentName:"li"},"serverPattern")," option for third party authentication\nvalidation on dynamic Uppy Server hostnames (@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"thumbnailgenerator: Polyfill Math.log2 since IE11 doesn't support this method\n(#892 / @DJWassink)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: added browser back button listening (#575 / @zcallan)"),(0,r.kt)("li",{parentName:"ul"},"providers: Better provider errors (#895 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"xhr-upload: Add withCredentials option (#874 / @tuoxiansp)")),(0,r.kt)("p",null,"See\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md#0260"},"full changelog (0.26 and 0.25.x patches) for more")),(0,r.kt)("p",null,"See you in the next release!"),(0,r.kt)("p",null,"The Uppy Team"))}c.isMDXComponent=!0}}]);