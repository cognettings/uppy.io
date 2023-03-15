"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(r),c=n,m=h["".concat(l,".").concat(c)]||h[c]||d[c]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={title:"The Golden Retriever: Making uploads survive browser crashes",date:new Date("2017-07-31T00:00:00.000Z"),authors:["arturi"],image:"http://uppy.io/img/blog/golden-retriever/uppy-team-kong.jpg",published:!0,slug:"2017/07/golden/retriever"},i=void 0,s={permalink:"/uppy.io/pr-preview/pr-40/blog/2017/07/golden/retriever",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-07-golden-retriever.md",source:"@site/blog/2017-07-golden-retriever.md",title:"The Golden Retriever: Making uploads survive browser crashes",description:"TL;DR: We're on a mission to improve file uploading on the web. We released",date:"2017-07-31T00:00:00.000Z",formattedDate:"July 31, 2017",tags:[],readingTime:6.98,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"The Golden Retriever: Making uploads survive browser crashes",date:"2017-07-31T00:00:00.000Z",authors:["arturi"],image:"http://uppy.io/img/blog/golden-retriever/uppy-team-kong.jpg",published:!0,slug:"2017/07/golden/retriever"},prevItem:{title:"Uppy 0.18: Dogumentation and The GoldenRetriever",permalink:"/uppy.io/pr-preview/pr-40/blog/2017/08/0.18"},nextItem:{title:"Uppy 0.17: Restrictions",permalink:"/uppy.io/pr-preview/pr-40/blog/2017/05/0.17"}},l={authorsImageUrls:[void 0]},p=[{value:"Demo",id:"demo",level:2},{value:"Uppy?",id:"uppy",level:2},{value:"Hacking trip",id:"hacking-trip",level:2},{value:"The Golden Retriever",id:"the-golden-retriever",level:2},{value:"\ud83d\udc7b How it works",id:"-how-it-works",level:2},{value:"\ud83d\udea6 Give it a try in alpha",id:"-give-it-a-try-in-alpha",level:2}],u={toc:p};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TL;DR:")," We're on a mission to improve file uploading on the web. We released\n",(0,n.kt)("a",{parentName:"p",href:"https://tus.io"},"tus"),": the open protocol for resumable file uploads, as well as\nUppy: the next open source file uploader for web browsers. Uppy uses tus, which\nmakes it resilient to poor network conditions and crashing servers. Today we\u2019re\nlaunching an Uppy feature that also makes it resilient to browser crashes, which\nwe believe is an industry first. We\u2019re sharing a quick\n",(0,n.kt)("a",{parentName:"p",href:"/blog/2017/07/golden-retriever/#demo"},"demo")," video, a bit of\n",(0,n.kt)("a",{parentName:"p",href:"/blog/2017/07/golden-retriever/#uppy"},"background"),",\n",(0,n.kt)("a",{parentName:"p",href:"/blog/2017/07/golden-retriever/#how"},"how")," exactly we achieved this, and how you\ncan ",(0,n.kt)("a",{parentName:"p",href:"/blog/2017/07/golden-retriever/#try"},"try")," it yourself."),(0,n.kt)("p",null,"*","*","*"),(0,n.kt)("p",null,"Don\u2019t you just hate it when you\u2019re about to share the perfect photos from your\ntrip to Iceland, and halfway through, your cat jumps on the keyboard and trashes\nyour browser? Or the battery in your laptop dies? Or you accidentally close the\ntab or navigate away? We hate that too!"),(0,n.kt)("p",null,"If action games have had checkpoints since 1687 \u2014 why can\u2019t file uploaders?\nWell, as it turns out, they can! We found a way to get those Iceland pics into\nthe hands of your loved ones with near-zero levels of frustration, even after a\ndreaded Blue Screen of Death! (if that is still a thing ;)"),(0,n.kt)("a",{name:"demo"}),(0,n.kt)("h2",{id:"demo"},"Demo"),(0,n.kt)("p",null,"First off, let\u2019s show you a demo \ud83d\udcf9 of Uppy surviving a browser crash and\npicking up right where we left it:"),(0,n.kt)("figure",{class:"wide"},(0,n.kt)("video",{alt:"Demo video showing the Golden Retriever file restoring plugin in action",controls:!0},(0,n.kt)("source",{src:"/img/blog/golden-retriever/uppy-golden-retriever-crash-demo-2.mp4",type:"video/mp4"}),"Your browser does not support the video tag, you can ",(0,n.kt)("a",{href:"/img/blog/golden-retriever/uppy-golden-retriever-crash-demo-2.mp4"},"download the video")," to watch it.")),(0,n.kt)("a",{name:"uppy"}),(0,n.kt)("h2",{id:"uppy"},"Uppy?"),(0,n.kt)("p",null,"For those of you who are new here, Uppy is the next-gen open source file\nuploader for the web. It is made by Transloadit and thus it works great with\ntheir uploading & encoding platform \u2014 but it also works great without! Simply\nadd Uppy JavaScript to your website, deploy your own tusd/Node.js/Apache/Nginx\nserver, and be on your way. Add\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy-server"},"uppy-server"),", and your users will\nbe able to pick files from remote sources like Dropbox and Instagram. Uppy\u2019s\nfocus is on the modern web, and we go through extreme lengths to achieve the\nsmoothest of user experiences, and the most durable of reliabilities. \ud83d\ude43"),(0,n.kt)("h2",{id:"hacking-trip"},"Hacking trip"),(0,n.kt)("p",null,"Our core team is spread across three continents and five cities, and most of us\nhave never met in person, with the majority of communication happening in GitHub\nand Slack. Just last week, we got together in Berlin for a crazy week of pink\nlimo rides, Indian food and Mario Kart 64. More on that on the\n",(0,n.kt)("a",{parentName:"p",href:"https://transloadit.com/blog/2017/08/team-meetup-2017/"},"Transloadit blog"),"."),(0,n.kt)("figure",{class:"wide"},(0,n.kt)("img",{src:"/img/blog/golden-retriever/uppy-team-kong.jpg"})),(0,n.kt)("p",null,"While enjoying some world-famous-in-Germany \u201cFlammkuchen\u201d, we were thinking\nabout even more ways to make file uploading better (yes, we really can\u2019t stop\nthinking about that). We then sat together in one room for a few days of hacking\nand came up with something neat."),(0,n.kt)("h2",{id:"the-golden-retriever"},"The Golden Retriever"),(0,n.kt)("p",null,"Uppy has a new friend to play with. Meet the Golden Retriever, our file recovery\nplugin:"),(0,n.kt)("center",null,(0,n.kt)("img",{src:"/img/blog/golden-retriever/catch-fail-2.gif",alt:"Golden Retriever failing to catch something",title:"Good try, girl!"})),(0,n.kt)("p",null,"As you can see, we\u2019re not yet fully done with training her, but we\u2019re getting\nthere! \ud83d\ude04"),(0,n.kt)("p",null,"But wait, we can hear you think, didn't ",(0,n.kt)("a",{parentName:"p",href:"https://tus.io"},"tus.io")," already make\nresumable uploads possible? Yes indeed, and it does an awesome job at recovering\nfrom poor network conditions. However, if your browser suddenly decided to\ncrash, Uppy would have no idea about what it was doing before, and you would\nhave to re-select and edit your files all over."),(0,n.kt)("center",null,(0,n.kt)("img",{src:"/img/blog/golden-retriever/no-idea-dog-3.gif",alt:"Dog has no idea what he is doing",title:"Keep trying, buddy!"})),(0,n.kt)("p",null,"For those cases, our Golden Retriever now comes to the rescue! It saves Uppy\u2019s\nmemory (state) in browser cache with every move you make. This means that when\nUppy suddenly crashes for whatever reason, our plugin will be able to retrieve\nthis memory upon restart, and offer to resume where you left off. Sounds simple\nenough right? So why hasn't anybody attempted this before?"),(0,n.kt)("p",null,"As it turns out, it\u2019s tricky. For one thing, no other competing file uploader\nuses tus, and resuming uploads without standardized and scrutinized components\nis really leaving you with more problems than you\u2019re trying to solve in the\nfirst place. But with tus, we are standing on the shoulders of a giant and need\nnot worry about the resumability aspect of the transmission."),(0,n.kt)("p",null,"So then it becomes all about remembering what was going on with file selection\nand uploading right before the crash. One of the big issues here is that because\nof security reasons, Uppy is no longer allowed to access the selected files on\nyour disk after a crash. Reasonable of course, but this meant that we had to\ndeploy a number of workarounds that \u2014 while it may cause our inner purist some\nupset - combined, now amount to a pretty sweet user experience for the majority\nof cases. And in the end, that is what Uppy is all about: pleasing and\ndelighting its users."),(0,n.kt)("a",{name:"how"}),(0,n.kt)("h2",{id:"-how-it-works"},"\ud83d\udc7b How it works"),(0,n.kt)("p",null,"If you really want to know..."),(0,n.kt)("p",null,"Because we cannot access the files that we were uploading from disk, we cache\nthem inside the browser."),(0,n.kt)("p",null,"It all started with\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/issues/237"},"a prototype")," by\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/richardwillars"},"Richard Willars"),", which used a Service\nWorker to store files and states. Service Workers are great for when you close a\ntab, but when the browser dies, so does the Service Worker (in most cases).\nAlso: iOS does not support it yet. So, we looked at Local Storage, which is\nalmost universally available and ",(0,n.kt)("em",{parentName:"p"},"can")," survive a browser crash, but can't be\nused to store blobs. We also considered IndexedDB, which ",(0,n.kt)("em",{parentName:"p"},"can")," store blobs, but\nis less available and has severe limits on how much you can or should store in\nit."),(0,n.kt)("p",null,"Since all of these technologies came with specific drawbacks, which one should\nwe pick?"),(0,n.kt)("p",null,"Why, all of them, of course! By combining the three, they cover each other\u2019s\ndisadvantages with their own advantages. Here's what goes where:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Local Storage stores all files state, without blobs (the actual data of the\nfile), and restores this meta information on boot."),(0,n.kt)("li",{parentName:"ul"},"Service Worker stores references to all file blobs in memory. This should\npersist when navigating away from a page or closing the browser tab, but will\nlikely get destroyed after a browser crash / quit."),(0,n.kt)("li",{parentName:"ul"},"IndexedDB stores all files that can reasonably be stored there, up to 10 MB\nper file and 300 MB in total (we are still debating reasonable limits). This\npersists until either the browser or Uppy decides to do a cleanup.")),(0,n.kt)("p",null,"Now when Uppy starts, we restore all meta information from Local Storage to get\nan idea of what was going on. For the blobs, we try to recover data from both\nthe Service Worker and IndexedDB. This goes a long way into supporting many\ndisastrous scenarios out there."),(0,n.kt)("p",null,"In some cases (very large files or a complete browser crash), we won\u2019t be able\nto recover the file, but we do have valuable information about it, such as the\nname and a preview."),(0,n.kt)("p",null,"Our current idea is that we could present the user with \u201cghost files\u201d for these\nedge cases, and ask them to re-add such files. Here\u2019s an early mockup, but we\nwould love more feedback on this:"),(0,n.kt)("img",{src:"/img/blog/golden-retriever/desktop-ghost.png",alt:"Design mockup with ghosts",title:"Design mockup with ghosts"}),(0,n.kt)("p",null,"For the remaining cases, if an upload was already in progress before the\ncrash/refresh, and especially if it was resumable (via ",(0,n.kt)("a",{parentName:"p",href:"https://tus.io"},"tus"),",\nfor example), Golden Retriever just picks up from where it all went south. Our\nGolden Retriever will also clean up after herself: when files are successfully\nuploaded, or you decide to delete them, they will be removed from all\n\u201cpermanent\u201d storages."),(0,n.kt)("a",{name:"try"}),(0,n.kt)("h2",{id:"-give-it-a-try-in-alpha"},"\ud83d\udea6 Give it a try in alpha"),(0,n.kt)("p",null,"Golden Retriever already works \u2014 tail awagging \u2014 and feels like magic\n\u2728, but it is also unstable, and hasn\u2019t been tested on all the different\ndevices yet. We encourage you to try it out though:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/transloadit/uppy.git\ngit checkout feature/restore-files\nnpm install\nnpm run dev\n")),(0,n.kt)("p",null,"A new browser tab with Uppy + Golden Retriever should open in a moment after the\nlast command from above. The app entry point is in\n",(0,n.kt)("inlineCode",{parentName:"p"},"examples/bundled-example/main.js"),", it rebuilds on change. Enjoy! And please\ngive your feedback in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/268"},"#268"),"\nPR \ud83c\udf89"),(0,n.kt)("p",null,"The Uppy Team"))}h.isMDXComponent=!0}}]);