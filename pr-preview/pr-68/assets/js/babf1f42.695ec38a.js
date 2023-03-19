"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[234],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),c=n,h=f["".concat(p,".").concat(c)]||f[c]||m[c]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5023:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={title:"Day 15",date:new Date("2019-04-09T00:00:00.000Z"),author:"samuel",image:"https://uppy.io/img/blog/30daystoliftoff/rockdog.jpg",series:"30 Days to Liftoff",seriesSuffix:"of 30",slug:"2019/04/liftoff/15"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-68/blog/2019/04/liftoff/15",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-04-liftoff-15.md",source:"@site/blog/2019-04-liftoff-15.md",title:"Day 15",description:"Woah, we're halfway there! Take our paw, we'll make it we swear!",date:"2019-04-09T00:00:00.000Z",formattedDate:"April 9, 2019",tags:[],readingTime:1.695,hasTruncateMarker:!0,authors:[{name:"samuel"}],frontMatter:{title:"Day 15",date:"2019-04-09T00:00:00.000Z",author:"samuel",image:"https://uppy.io/img/blog/30daystoliftoff/rockdog.jpg",series:"30 Days to Liftoff",seriesSuffix:"of 30",slug:"2019/04/liftoff/15"},prevItem:{title:"Day 16",permalink:"/uppy.io/pr-preview/pr-68/blog/2019/04/liftoff/16"},nextItem:{title:"Day 14",permalink:"/uppy.io/pr-preview/pr-68/blog/2019/04/liftoff/14"}},p={authorsImageUrls:[void 0]},s=[{value:"Weekly project board update",id:"weekly-project-board-update",level:2},{value:"Done",id:"done",level:2},{value:"In Progress",id:"in-progress",level:2}],u={toc:s},f="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ud83c\udfb5 Woah, we're halfway there! Take our paw, we'll make it we swear!\n\ud83c\udfb6 That's fifteen down and fifteen more to go. Great to have you along for\nthe ride as we move ever closer towards ",(0,n.kt)("strong",{parentName:"p"},"launching Uppy 1.0 on April 25"),"."),(0,n.kt)("p",null,"Let's see what is Uppy today!"),(0,n.kt)("center",null,(0,n.kt)("br",null),(0,n.kt)("img",{width:"400",src:"/img/blog/30daystoliftoff/rockdog.jpg"}),(0,n.kt)("br",null)),(0,n.kt)("h2",{id:"weekly-project-board-update"},"Weekly project board update"),(0,n.kt)("p",null,"We had our weekly call yesterday, during which we re-evaluated the Uppy 1.0\nproject board. We were able to move a few tasks to the ",(0,n.kt)("em",{parentName:"p"},"Done")," lane and got some\nnew tasks ",(0,n.kt)("em",{parentName:"p"},"In Progress"),". One of the features we're ready to start working on -\nwhich I am particularly interested in - is language pack support. Uppy 1.0 might\nbe coming out in your local language! While we only have the capacity within our\nteam to take care of a select few languages (English, French, Russian,\nUkrainian, German, and Dutch) we will support as many as possible and hope that\nthe community will add many more."),(0,n.kt)("p",null,"Here is a view of what our Asana board looks like this week:"),(0,n.kt)("center",null,(0,n.kt)("br",null),(0,n.kt)("img",{src:"/img/blog/30daystoliftoff/2019-04-09-asana-board.png"}),(0,n.kt)("br",null)),(0,n.kt)("h2",{id:"done"},"Done"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/lakesare"},"Evgenia")," investigated an\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1400#issuecomment-481039845"},"issue"),"\nconcerning a bug in Webkit browsers that resulted in the window blinking\nfrequently.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/samuelayo"},"Samuel")," added another\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1389"},"example")," for using Uppy with\nXHR uploads to a PHP backend."))),(0,n.kt)("h2",{id:"in-progress"},"In Progress"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/goto-bus-stop"},"Ren\xe9e")," is working on the Robodog Dashboard,\nso that it can also be depicted right inside the webpage, instead of showing\nas a modal popup window.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Evgenia is focused on improving accessibility together with\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nqst"},"Alex"),", who found many issues that we still need to\nfix in this area.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/arturi"},"Artur")," is currently working on a React Native\nexample UI. We will update you once it is ready!")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Alex is also still actively working on making design improvements for Uppy.\nYou can follow his progress\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nqst/uppy/commits/design-facelift"},"here"),"."))),(0,n.kt)("p",null,"And that's Day 15! Tyler will be here again\n",(0,n.kt)("a",{parentName:"p",href:"/blog/2019/04/liftoff-16/"},"tomorrow")," to give you more updates on our launch\npreparations. Subscribe via ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/uppy_io"},"Twitter")," or\n",(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/atom.xml"},"RSS"),", so you'll never miss out!"))}m.isMDXComponent=!0}}]);