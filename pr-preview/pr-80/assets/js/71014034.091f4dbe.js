"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7634],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4973:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:1},s="Choosing the uploader you need",i={unversionedId:"guides/choosing-uploader",id:"guides/choosing-uploader",title:"Choosing the uploader you need",description:"Versatile, reliable uploading is at the heart of Uppy. It has many configurable",source:"@site/docs/guides/choosing-uploader.md",sourceDirName:"guides",slug:"/guides/choosing-uploader",permalink:"/uppy.io/docs/guides/choosing-uploader",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/guides/choosing-uploader.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/uppy.io/docs/quick-start"},next:{title:"Building plugins",permalink:"/uppy.io/docs/guides/building-plugins"}},l={},p=[{value:"Use cases",id:"use-cases",level:2},{value:"I want worry-free, plug-and-play uploads with Transloadit services",id:"i-want-worry-free-plug-and-play-uploads-with-transloadit-services",level:3},{value:"I want reliable, resumable uploads",id:"i-want-reliable-resumable-uploads",level:3},{value:"I want to upload to AWS S3 (or S3-compatible storage) directly",id:"i-want-to-upload-to-aws-s3-or-s3-compatible-storage-directly",level:3},{value:"Which one should I pick?",id:"which-one-should-i-pick",level:4},{value:"I want to send regular HTTP uploads to my own server",id:"i-want-to-send-regular-http-uploads-to-my-own-server",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"choosing-the-uploader-you-need"},"Choosing the uploader you need"),(0,o.kt)("p",null,"Versatile, reliable uploading is at the heart of Uppy. It has many configurable\nplugins to suit your needs. In this guide we will explain the different plugins,\ntheir strategies, and when to use them based on use cases."),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("h3",{id:"i-want-worry-free-plug-and-play-uploads-with-transloadit-services"},"I want worry-free, plug-and-play uploads with Transloadit services"),(0,o.kt)("p",null,"Transloadit\u2019s strength is versatility. By doing video, audio, images, documents,\nand more, you only need one vendor for ",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/services/"},"all your file processing\nneeds"),". The ",(0,o.kt)("a",{parentName:"p",href:"/docs/transloadit"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/transloadit"))," plugin directly\nuploads to Transloadit so you only have to worry about creating a\n",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/docs/getting-started/concepts/"},"template"),". It uses\n",(0,o.kt)("a",{parentName:"p",href:"#i-want-reliable-resumable-uploads"},"Tus")," under the hood so you don\u2019t have to\nsacrifice reliable, resumable uploads for convenience."),(0,o.kt)("p",null,"You should use ",(0,o.kt)("a",{parentName:"p",href:"/docs/transloadit"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/transloadit"))," if you don\u2019t want to host your own\nserver, (optionally) need file processing, and store it in the service (such as\nS3 or GCS) of your liking. All with minimal effort."),(0,o.kt)("h3",{id:"i-want-reliable-resumable-uploads"},"I want reliable, resumable uploads"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tus.io/"},"Tus")," is a new open protocol for resumable uploads built on HTTP. This\nmeans accidentally closing your tab or losing connection let\u2019s you continue, for\ninstance, your 10GB upload instead of starting all over."),(0,o.kt)("p",null,"Tus supports any language, any platform, and any network. It requires a client\nand server integration to work. You can checkout the client and server\n",(0,o.kt)("a",{parentName:"p",href:"https://tus.io/implementations.html"},"implementations")," to find the server in your preferred\nlanguage. You can store files on the Tus server itself, but you can also use\nservice integrations (such as S3) to store files externally."),(0,o.kt)("p",null,"If you want reliable, resumable uploads: use ",(0,o.kt)("a",{parentName:"p",href:"/docs/tus"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/tus"))," to connect to your\nTus server in a few lines of code."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you plan to let people upload ",(0,o.kt)("em",{parentName:"p"},"a lot")," of files, ",(0,o.kt)("a",{parentName:"p",href:"/docs/tus"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/tus"))," has\nexponential backoff built-in. Meaning if your server (or proxy) returns HTTP 429\nbecause it\u2019s being overloaded, ",(0,o.kt)("a",{parentName:"p",href:"/docs/tus"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/tus"))," will find the ideal sweet spot to\nkeep uploading without overloading.")),(0,o.kt)("h3",{id:"i-want-to-upload-to-aws-s3-or-s3-compatible-storage-directly"},"I want to upload to AWS S3 (or S3-compatible storage) directly"),(0,o.kt)("p",null,"When you prefer a ",(0,o.kt)("em",{parentName:"p"},"client-to-storage")," over a ",(0,o.kt)("em",{parentName:"p"},"client-to-server-to-storage")," (such\nas ",(0,o.kt)("a",{parentName:"p",href:"/docs/transloadit"},"Transloadit")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/tus"},"Tus"),") setup. This may in some\ncases be preferable, for instance, to reduce costs or the complexity of running\na server and load balancer with ",(0,o.kt)("a",{parentName:"p",href:"/docs/tus"},"Tus"),"."),(0,o.kt)("p",null,"Uppy has two plugins to make this happen ",(0,o.kt)("a",{parentName:"p",href:"/docs/aws-s3"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3"))," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/aws-s3-multipart"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3-multipart")),"."),(0,o.kt)("h4",{id:"which-one-should-i-pick"},"Which one should I pick?"),(0,o.kt)("p",null,"If your users are planning to mostly upload small files and/or a lot of files,\nit\u2019s better to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/aws-s3"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3")),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/aws-s3-multipart"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3-multipart"))," is valuable for larger files (100","\xa0","MB+) as it\nuploads a single object as a set of parts. This has certain benefits, such as\nimproved throughput (uploading parts in parallel) and quick recovery from\nnetwork issues (only the failed parts need to be retried). The downside is\nrequest overhead, as it needs to do creation, signing, and completion requests\nbesides the upload requests. For example, if you are uploading files that are\nonly a couple kilobytes with a 100ms roundtrip latency, you are spending 400ms\non overhead and only a few milliseconds on uploading."),(0,o.kt)("p",null,"If you are uploading large files (100","\xa0","MB+), we recommend\n",(0,o.kt)("a",{parentName:"p",href:"/docs/aws-s3-multipart"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3-multipart")),", otherwise ",(0,o.kt)("a",{parentName:"p",href:"/docs/aws-s3"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3")),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can also save files in S3 with the ",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/services/file-exporting/s3-store/"},(0,o.kt)("inlineCode",{parentName:"a"},"/s3/store"))," robot while still\nusing the powers of Transloadit services.")),(0,o.kt)("h3",{id:"i-want-to-send-regular-http-uploads-to-my-own-server"},"I want to send regular HTTP uploads to my own server"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/xhr-upload"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/xhr-upload"))," handles classic HTML multipart form uploads as well as\nuploads using the HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT")," method."))}c.isMDXComponent=!0}}]);