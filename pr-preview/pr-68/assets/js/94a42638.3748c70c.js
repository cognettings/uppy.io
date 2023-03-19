"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3969],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,c=d["".concat(s,".").concat(m)]||d[m]||h[m]||o;return a?r.createElement(c,i(i({ref:t},u),{},{components:a})):r.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5631:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Uppy 0.11: StatusBar, research, https and API docs",date:new Date("2016-11-15T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2016/11/0.11"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-68/blog/2016/11/0.11",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2016-11-0.11.md",source:"@site/blog/2016-11-0.11.md",title:"Uppy 0.11: StatusBar, research, https and API docs",description:"Hey everyone! It has been a while since we last shared some news about our",date:"2016-11-15T00:00:00.000Z",formattedDate:"November 15, 2016",tags:[],readingTime:3.41,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 0.11: StatusBar, research, https and API docs",date:"2016-11-15T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2016/11/0.11"},prevItem:{title:"Uppy 0.12: Responsive. Cancel. Feedback. Refreshed\xa0ES6 server",permalink:"/uppy.io/pr-preview/pr-68/blog/2016/12/0.12"},nextItem:{title:"Uppy 0.10: Getting together, the future, Google Drive UI, exposed events",permalink:"/uppy.io/pr-preview/pr-68/blog/2016/09/0.10"}},s={authorsImageUrls:[void 0]},p=[{value:"More research and experiments",id:"more-research-and-experiments",level:2},{value:"Dashboard: example features, StatusBar and updated UI",id:"dashboard-example-features-statusbar-and-updated-ui",level:2},{value:"HTTPS",id:"https",level:2},{value:"And more",id:"and-more",level:2},{value:"Release Notes",id:"release-notes",level:2}],u={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Hey everyone! It has been a while since we last shared some news about our\nprogress and we can't wait to let you know what\u2019s up(py)!"),(0,n.kt)("p",null,"In October, we have been working hard to get Uppy 0.11 ready for release. This\nentailed, among other things, doing a write-up of our general architecture,\nbringing in a friend to look at what we\u2019ve been up to, experimenting with Redux,\nand updating the Dashboard UI and website example."),(0,n.kt)("p",null,"Here's what we have been up to, in some more detail."),(0,n.kt)("h2",{id:"more-research-and-experiments"},"More research and experiments"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We wrote an\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/blob/master/ARCHITECTURE.md"},"ARCHITECTURE.md"),"\ndocument, describing our architecture and APIs."),(0,n.kt)("li",{parentName:"ul"},"Author of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/yoshuawuyts/choo"},"Choo"),", Yoshua Wuyts, was\ninvited to take a look at the state of things in Uppy, and he came up with a\nproposal for some changes, which we\u2019ll be considering in the coming releases."),(0,n.kt)("li",{parentName:"ul"},"We also conducted a few Redux experiments on Uppy, in the process of which, no\nanimals were hurt. \ud83d\udc36")),(0,n.kt)("h2",{id:"dashboard-example-features-statusbar-and-updated-ui"},"Dashboard: example features, StatusBar and updated UI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dashboard example")," ",(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard/"},"on our website")," now\nfeatures several options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"switchting between \u201cinline\u201d and \u201cmodal dialog / popup\u201d mode;"),(0,n.kt)("li",{parentName:"ul"},"toggling the ",(0,n.kt)("inlineCode",{parentName:"li"},"autoProceed")," option that starts uploads automatically, without\nwaiting for a click on the \u201cupload\u201d button;"),(0,n.kt)("li",{parentName:"ul"},"enabling/disabling acquire plugins, like Google Drive and Webcam.")),(0,n.kt)("img",{src:"/img/blog/0.11/dashboard-example-options.png"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"StatusBar")," is a \u2013 you guessed it \u2013 bar that appears on the bottom of the\nDashboard and unifies progress with pause/resume buttons."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dashboard UI")," has undergone minor improvements, such as: a new \u201cdrag files\nhere\u201d icon and tagline. Furthermore, the text before \u201cacquire\u201d icons on the top\n\u2014 Local Disk, Google Drive, Webcam \u2014 has been removed (it used to say \u201cImport\nfiles from:\u201d). We also added new \u201cremove file\u201d icons. You know, small things,\nbig difference. \ud83d\ude0e"),(0,n.kt)("img",{src:"/img/blog/0.11/uppy-dashboard-oct-2016-1.jpg",alt:"Dashboard UI, no files. Text: Drop files here, paste or import from one of the locations above"}),(0,n.kt)("img",{src:"/img/blog/0.11/uppy-dashboard-oct-2016-2.jpg",alt:"Dashboard UI, file upload in progress. StatusBar with pause/resume button and progress"}),(0,n.kt)("h2",{id:"https"},"HTTPS"),(0,n.kt)("p",null,"We have upgraded both ",(0,n.kt)("a",{parentName:"p",href:"http://uppy.io/"},"uppy.io")," and ",(0,n.kt)("a",{parentName:"p",href:"http://tus.io/"},"tus.io")," to\nsupport HTTPS with Let\u2019s Encrypt. This will ensure that webcam example now\nworks, secure uploads work, and \u2013 hopefully \u2013 that all will be well."),(0,n.kt)("h2",{id:"and-more"},"And more"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We have renamed FormTag plugin to FileInput and made it pretty by default,\nwith an added option to just show the default browser \u201cchoose file\u201d."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/issues/126"},"Fixed a bug")," with\n",(0,n.kt)("inlineCode",{parentName:"li"},"autoProceed: true")," duplicating uploads."),(0,n.kt)("li",{parentName:"ul"},"Refactored Dashboard to only keep active acquire panel in DOM."),(0,n.kt)("li",{parentName:"ul"},"Added PersistentState plugin that saves state to localStorage \u2014 which is\nuseful for development."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/131"},"Grand refactor of Uppy Server"),"\nwith dynamic controllers."),(0,n.kt)("li",{parentName:"ul"},"Webcam stream no longer flashes when state is updated.")),(0,n.kt)("h2",{id:"release-notes"},"Release Notes"),(0,n.kt)("p",null,"Here is the full list of changes for version 0.11:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"core: log method should have an option to throw error in addition to just\nlogging (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"experimental: PersistentState plugin that saves state to localStorage \u2014 useful\nfor development (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"dashboard: implement new StatusBar with progress and pause/resume buttons\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/issues/96#issuecomment-249401532"},"https://github.com/transloadit/uppy/issues/96#issuecomment-249401532"),"\n(@arturi)"),(0,n.kt)("li",{parentName:"ul"},"dashboard: attempt to throttle StatusBar, so it doesn\u2019t re-render too often\n(@arturi)"),(0,n.kt)("li",{parentName:"ul"},"dashboard: refactor \u2014 only load one acquire panel at a time (activeAcquirer or\nempty), change focus behavior, utilize onload/onunload"),(0,n.kt)("li",{parentName:"ul"},"experimental: create a Dashboard UI for Redux refactor (@hedgerh)"),(0,n.kt)("li",{parentName:"ul"},"dashboard: make trigger optional \u2014 not needed when rendering inline (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"fileinput: pretty input element #93 (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"meta: document current Uppy architecture and question about the future\n(@arturi, @hedgerh)"),(0,n.kt)("li",{parentName:"ul"},"test: see about adding tests for autoProceed: true (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"website: and ability to toggle options in Dashboard example: inline/modal,\nautoProceed, which plugins are enabled #89 (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"website: finish https upgrade for uppy.io, uppy-server and tus, set up pingdom\nnotifications (@arturi, @kvz, @hedgerh)"),(0,n.kt)("li",{parentName:"ul"},"website: update guide, API docs and main page example to match current actual\nAPI (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"uppy-server: Make uppy server have dynamic controllers (@hedgerh)")),(0,n.kt)("p",null,"We hope you'll enjoy this latest release. We have got a lot more in store for\nUppy and we won't wait too long with throwing you a bone again!"),(0,n.kt)("p",null,"The Uppy Team"))}h.isMDXComponent=!0}}]);