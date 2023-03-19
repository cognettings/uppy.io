"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={title:"Uppy 0.16: Transloadit!",date:new Date("2017-05-24T00:00:00.000Z"),author:"ife",slug:"2017/05/0.16"},r=void 0,l={permalink:"/uppy.io/pr-preview/pr-68/blog/2017/05/0.16",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-05-0.16.md",source:"@site/blog/2017-05-0.16.md",title:"Uppy 0.16: Transloadit!",description:"Hello there! Missed us much? :) We're chomping at the bits, at least, to tell",date:"2017-05-24T00:00:00.000Z",formattedDate:"May 24, 2017",tags:[],readingTime:4.63,hasTruncateMarker:!0,authors:[{name:"ife"}],frontMatter:{title:"Uppy 0.16: Transloadit!",date:"2017-05-24T00:00:00.000Z",author:"ife",slug:"2017/05/0.16"},prevItem:{title:"Uppy 0.17: Restrictions",permalink:"/uppy.io/pr-preview/pr-68/blog/2017/05/0.17"},nextItem:{title:"Uppy 0.15: Spring cleanup",permalink:"/uppy.io/pr-preview/pr-68/blog/2017/03/0.15"}},s={authorsImageUrls:[void 0]},p=[{value:"Transloadit integration beta",id:"transloadit-integration-beta",level:2},{value:"More work on high-level React components",id:"more-work-on-high-level-react-components",level:2},{value:"DOM element in <code>target:</code> option, <code>uppy.close()</code> for tearing down an Uppy instance",id:"dom-element-in-target-option-uppyclose-for-tearing-down-an-uppy-instance",level:2},{value:"Server time!",id:"server-time",level:2},{value:"And",id:"and",level:2},{value:"Release Notes",id:"release-notes",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hello there! Missed us much? :) We're chomping at the bits, at least, to tell\nyou about our latest release. This one has been in the works longer than usual,\nbut then again, it's also way cooler than usual, so let's get right to it."),(0,o.kt)("h2",{id:"transloadit-integration-beta"},"Transloadit integration beta"),(0,o.kt)("p",null,"Yes, you read that right! We now have an easily integrable\n",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com"},"Transloadit")," plugin. It was a big push indeed and we\nowe a big debt of thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/goto-bus-stop"},"Ren\xe9e")," for going\nfully beast mode on this. The plugin is still in beta, but it works - and it's\nawesome. That said, of course it is entirely optional: if you don't use\nTransloadit, you don't have to bundle the plugin."),(0,o.kt)("video",{alt:"Demo video showing the Transloadit upload plugin in action.",muted:!0,autoplay:!0,loop:!0},(0,o.kt)("source",{src:"/img/blog/0.16/transloadit.webm",type:"video/webm"}),(0,o.kt)("source",{src:"/img/blog/0.16/transloadit.mp4",type:"video/mp4"})),(0,o.kt)("p",null,'The Transloadit plugin for Uppy handles creating an "Assembly" (a file\nconversion job) before uploading files, and can optionally wait for file\nconversions to complete before showing the uploads as successful, as shown\nabove. Listen for the ',(0,o.kt)("inlineCode",{parentName:"p"},"core:success")," event to respond to upload completion, just\nlike you would without the Transloadit plugin."),(0,o.kt)("p",null,"We'll be adding decent documentation to the Uppy website soon, but\n",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/kvz/8ae07aa8c063c8e55abbc1580b50c8a4#file-uppy-demo-js-L117-L147"},"here"),"\nis a quick code sample of how a Transloadit plugin integration would look like\nalready."),(0,o.kt)("h2",{id:"more-work-on-high-level-react-components"},"More work on high-level React components"),(0,o.kt)("p",null,"Since the last release, we've been exploring possibilities for an official set\nof React components. Initially, we'll be providing component wrappers for the\nexisting Uppy UI plugins, such as the ",(0,o.kt)("a",{parentName:"p",href:"/examples/dashboard"},"Dashboard")," and\n",(0,o.kt)("a",{parentName:"p",href:"/examples/dragdrop"},"DragDrop")," plugins. They aren't ready yet, but if you'd like\nto follow along with development, check out the work that has been done so far\nin pull request ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/170"},"#170"),"!"),(0,o.kt)("h2",{id:"dom-element-in-target-option-uppyclose-for-tearing-down-an-uppy-instance"},"DOM element in ",(0,o.kt)("inlineCode",{parentName:"h2"},"target:")," option, ",(0,o.kt)("inlineCode",{parentName:"h2"},"uppy.close()")," for tearing down an Uppy instance"),(0,o.kt)("p",null,"While laying the groundwork for the React component integrations, Uppy has also\nbecome a bit friendlier towards being integrated with other frameworks and in\nsingle-page apps. The ",(0,o.kt)("inlineCode",{parentName:"p"},"target:")," option in each plugin used to work only with CSS\nselectors, which was difficult to use if the plugin should be mounted on a\ndynamically generated element. In 0.16, either a query selector or an actual DOM\nelement can be passed in."),(0,o.kt)("p",null,"The new ",(0,o.kt)("inlineCode",{parentName:"p"},".close()")," method on the Uppy instance cleans up all of Uppy's event\nhandlers and DOM elements. Useful when navigating away from a page with an Uppy\nuploader in a single-page app, or when unmounting a React component that\ncontains an Uppy instance!"),(0,o.kt)("h2",{id:"server-time"},"Server time!"),(0,o.kt)("p",null,"We got everything covered - front-to-back-end - so you can be sure we also got\nsome things going on the server side."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"parallelizing downloading/uploading remote files: start uploading chunks right\naway, while still downloading the file on disk. Even though the server may\ndownload files relatively faster, it is good to know that you don't have to\nwait out the download before the upload begins."),(0,o.kt)("li",{parentName:"ul"},"Image thumbnails are now also shown for remote files."),(0,o.kt)("li",{parentName:"ul"},"Automated tests have been added using the test library,\n",(0,o.kt)("a",{parentName:"li",href:"https://facebook.github.io/jest/"},"jest"),"."),(0,o.kt)("li",{parentName:"ul"},"Remote files are now deleted from local disk immediately after a successful\nupload.")),(0,o.kt)("h2",{id:"and"},"And"),(0,o.kt)("p",null,"Multiple necessary chores (the kind you don\u2019t like to talk about at parties),\nsuch as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replacing ",(0,o.kt)("inlineCode",{parentName:"li"},"babel-preset-es2015-loose")," by the standard es2015 preset with\n",(0,o.kt)("inlineCode",{parentName:"li"},"loose")," option"),(0,o.kt)("li",{parentName:"ul"},"Merging the Tus10 plugin options with ",(0,o.kt)("inlineCode",{parentName:"li"},"tus-js-client")," options"),(0,o.kt)("li",{parentName:"ul"},"We reviewed the uppy-server README to be more elaborate when getting started."),(0,o.kt)("li",{parentName:"ul"},"The Service logo is now visible on the corresponding file in the Dashboard.\nFor example if a file is being uploaded from Google Drive you would see a\nGoogle Drive logo easily identifying where the file is from. Take a look!")),(0,o.kt)("img",{src:"/img/blog/0.16/service-logos.png"}),(0,o.kt)("h2",{id:"release-notes"},"Release Notes"),(0,o.kt)("p",null,"Here is the full list of changes for version 0.16:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"uploaders: make sure uploads retry/resume if started when offline or\ndisconnected, retry when back online / failed\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/135"},"https://github.com/transloadit/uppy/pull/135")," (@arturi, @ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"transloadit: add basic (beta) version of Transloadit plugin (@goto-bus-stop,\n@kvz, @tim-kos / #28)"),(0,o.kt)("li",{parentName:"ul"},"transloadit: emit an upload event w/ tl data when a file upload is complete\n(#191 @goto-bus-stop)"),(0,o.kt)("li",{parentName:"ul"},"webcam: implement reading audio+video from webcam (@goto-bus-stop / #175)"),(0,o.kt)("li",{parentName:"ul"},"webcam: Make the webcam video fill the available space as much as possible\n(@goto-bus-stop / #190)"),(0,o.kt)("li",{parentName:"ul"},"tus: Merge tus-js-client options with uppy-tus. Hence, enable custom headers\nsupport (@goto-bus-stop)"),(0,o.kt)("li",{parentName:"ul"},"multipart/tus: Remove Promise.all() calls with unused results (@goto-bus-stop\n/ #121)"),(0,o.kt)("li",{parentName:"ul"},"dashboard: fix Dashboard modal close button position (@goto-bus-stop / #171)"),(0,o.kt)("li",{parentName:"ul"},"core: pass through errors (@goto-bus-stop / #185)"),(0,o.kt)("li",{parentName:"ul"},"core: accept a DOM element in ",(0,o.kt)("inlineCode",{parentName:"li"},"target:")," option (@goto-bus-stop / #169)"),(0,o.kt)("li",{parentName:"ul"},"core: Remove the last few potentially buggy uses of ",(0,o.kt)("inlineCode",{parentName:"li"},"document.querySelector"),"\n(@goto-bus-stop)"),(0,o.kt)("li",{parentName:"ul"},"dashboard: Fix dashboard width when multiple instances exist (@goto-bus-stop /\n#184)"),(0,o.kt)("li",{parentName:"ul"},"dashboard: add service logo / name to the selected file in file list (@arturi)"),(0,o.kt)("li",{parentName:"ul"},"server: begin adding automated tests, maybe try\n",(0,o.kt)("a",{parentName:"li",href:"https://facebook.github.io/jest"},"https://facebook.github.io/jest")," (@ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"server: add image preview / thumbnail for remote files, if its in the API of\nservices (@ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"server: research parallelizing downloading/uploading remote files: start\nuploading chunks right away, while still storing the file on disk\n(@ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"server: delete file from local disk after upload is successful\n(@ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"website: try on a Github ribbon ",(0,o.kt)("a",{parentName:"li",href:"http://tholman.com/github-corners/"},"http://tholman.com/github-corners/")," (@arturi\n/ #150)"),(0,o.kt)("li",{parentName:"ul"},"website: different meta description for pages and post (@arturi)"),(0,o.kt)("li",{parentName:"ul"},"server: well-documented README (@ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"react: ","[","WIP] High-level React Components (@goto-bus-stop / #170)"),(0,o.kt)("li",{parentName:"ul"},"core: add ",(0,o.kt)("inlineCode",{parentName:"li"},"uppy.close()")," for tearing down an Uppy instance (@goto-bus-stop /\n#182)"),(0,o.kt)("li",{parentName:"ul"},"core: replace ",(0,o.kt)("inlineCode",{parentName:"li"},"babel-preset-es2015-loose")," by standard es2015 preset with\n",(0,o.kt)("inlineCode",{parentName:"li"},"loose")," option (@goto-bus-stop / #174)")),(0,o.kt)("p",null,"Enjoy!"),(0,o.kt)("p",null,"The Uppy Team"))}c.isMDXComponent=!0}}]);