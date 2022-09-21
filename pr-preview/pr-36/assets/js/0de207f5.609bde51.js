"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8421],{1694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=a(7462),s=(a(7294),a(3905));const n={sidebar_position:1},r="Choosing the upload strategy you need",i={unversionedId:"guides/choosing-upload-strategy",id:"guides/choosing-upload-strategy",title:"Choosing the upload strategy you need",description:"Versatile, reliable uploading is at the heart of Uppy. It has many configurable plugins to suit your needs.",source:"@site/docs/guides/choosing-upload-strategy.md",sourceDirName:"guides",slug:"/guides/choosing-upload-strategy",permalink:"/uppy.io/pr-preview/pr-36/docs/guides/choosing-upload-strategy",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/guides/choosing-upload-strategy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/uppy.io/pr-preview/pr-36/docs/quick-start"},next:{title:"Using locales",permalink:"/uppy.io/pr-preview/pr-36/docs/guides/using-locales"}},l={},p=[{value:"Use cases",id:"use-cases",level:2},{value:"I want worry-free, plug-and-play uploads with Transloadit services",id:"i-want-worry-free-plug-and-play-uploads-with-transloadit-services",level:3},{value:"I want reliable, resumable uploads",id:"i-want-reliable-resumable-uploads",level:3},{value:"I want to upload to AWS S3 (or S3-compatible storage) directly",id:"i-want-to-upload-to-aws-s3-or-s3-compatible-storage-directly",level:3},{value:"Which one should I pick?",id:"which-one-should-i-pick",level:4},{value:"I want to send HTML multipart uploads to my own server",id:"i-want-to-send-html-multipart-uploads-to-my-own-server",level:3}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"choosing-the-upload-strategy-you-need"},"Choosing the upload strategy you need"),(0,s.kt)("p",null,"Versatile, reliable uploading is at the heart of Uppy. It has many configurable plugins to suit your needs.\nIn this guide we will explain the different plugins, their strategies, and when to use them based on use cases."),(0,s.kt)("h2",{id:"use-cases"},"Use cases"),(0,s.kt)("p",null,"Below are some of the common use cases. They are not necessarily at odds with each other.\nThe uploading plugins are flexible enough to create new use cases, or have similar benefits."),(0,s.kt)("h3",{id:"i-want-worry-free-plug-and-play-uploads-with-transloadit-services"},"I want worry-free, plug-and-play uploads with Transloadit services"),(0,s.kt)("p",null,"Transloadit\u2019s strength is versatility.\nBy doing video, audio, images, documents, and more,\nyou only need one vendor for ",(0,s.kt)("a",{parentName:"p",href:"https://transloadit.com/services/"},"all your file processing needs"),".\nThe ",(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/transloadit"},(0,s.kt)("inlineCode",{parentName:"a"},"@uppy/transloadit"))," plugin directly uploads to Transloadit\nso you only have to worry about creating a ",(0,s.kt)("a",{parentName:"p",href:"https://transloadit.com/docs/getting-started/concepts/"},"template"),".\nIt uses ",(0,s.kt)("a",{parentName:"p",href:"#i-want-reliable-resumable-uploads"},"Tus")," under the hood so you don\u2019t have to\nsacrifice reliable, resumable uploads for convenience."),(0,s.kt)("p",null,"You should use ",(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/transloadit"},(0,s.kt)("inlineCode",{parentName:"a"},"@uppy/transloadit"))," if you don\u2019t want to host your own server,\n(optionally) need file processing, and store it in the service (such as S3 or GCS) of your liking.\nAll with minimal effort."),(0,s.kt)("h3",{id:"i-want-reliable-resumable-uploads"},"I want reliable, resumable uploads"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://tus.io/"},"Tus")," is a new open protocol for resumable uploads built on HTTP.\nThis means accidentally closing your tab or losing connection let\u2019s you continue, for instance, your 10GB upload\ninstead of starting all over."),(0,s.kt)("p",null,"Tus supports any language, any platform, and any network.\nIt requires a client and server integration to work.\nYou can checkout the client and server ",(0,s.kt)("a",{parentName:"p",href:"https://tus.io/implementations.html"},"implementations")," to find the server in your preferred language.\nYou can store files on the Tus server itself, but you can also use service integrations (such as S3) to store files externally."),(0,s.kt)("p",null,"If you want reliable, resumable uploads: use ",(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/tus"},(0,s.kt)("inlineCode",{parentName:"a"},"@uppy/tus"))," to connect to your Tus server in a few lines of code."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"If you plan to let people upload ",(0,s.kt)("em",{parentName:"p"},"a lot")," of files, ",(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/tus"},(0,s.kt)("inlineCode",{parentName:"a"},"@uppy/tus"))," has exponential backoff built-in.\nMeaning if your server (or proxy) returns HTTP 429 because it\u2019s being overloaded, ",(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/tus"},(0,s.kt)("inlineCode",{parentName:"a"},"@uppy/tus"))," will\nfind the ideal sweet spot to keep uploading without overloading.")),(0,s.kt)("h3",{id:"i-want-to-upload-to-aws-s3-or-s3-compatible-storage-directly"},"I want to upload to AWS S3 (or S3-compatible storage) directly"),(0,s.kt)("p",null,"When you prefer a ",(0,s.kt)("em",{parentName:"p"},"client-to-storage")," over a ",(0,s.kt)("em",{parentName:"p"},"client-to-server-to-storage")," (such as ",(0,s.kt)("a",{parentName:"p",href:"/docs/upload-strategies/transloadit"},"Transloadit")," or ",(0,s.kt)("a",{parentName:"p",href:"/docs/upload-strategies/tus"},"Tus"),") setup.\nThis may in some cases be preferable, for instance, to reduce costs or the complexity of running a server and load balancer with ",(0,s.kt)("a",{parentName:"p",href:"/docs/upload-strategies/tus"},"Tus"),"."),(0,s.kt)("p",null,"Uppy has two plugins to make this happen ",(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/aws-s3"},(0,s.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3"))," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/aws-s3-multipart"},(0,s.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3-multipart")),"."),(0,s.kt)("h4",{id:"which-one-should-i-pick"},"Which one should I pick?"),(0,s.kt)("p",null,"If your users are planning to mostly upload small files and/or a lot of files, it\u2019s better to use ",(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/aws-s3"},(0,s.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3")),"."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/aws-s3-multipart"},(0,s.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3-multipart"))," starts to become valuable for bigger files (100MB+) as it uploads a single object as a set of parts.\nThis has some benefits, such as improved throughput (uploading parts in parallel) and quick recovery from network issues (only the failed parts need to be retried).\nThe downside is request overhead, as it needs to do setup, signing, and completion besides the upload requests.\nFor example, if you are uploading files that are only a couple KB with a 100ms roundtrip latency,\nyou are spending 400ms on overhead and only a couple milliseconds on uploading. "),(0,s.kt)("p",null,"If you are uploading big files (100MB+), we recommend ",(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/aws-s3-multipart"},(0,s.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3-multipart")),", otherwise ",(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/aws-s3"},(0,s.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3")),"."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"You can also save files in S3 with the ",(0,s.kt)("a",{parentName:"p",href:"https://transloadit.com/services/file-exporting/s3-store/"},(0,s.kt)("inlineCode",{parentName:"a"},"/s3/store"))," robot while still\nusing the powers of Transloadit services.")),(0,s.kt)("h3",{id:"i-want-to-send-html-multipart-uploads-to-my-own-server"},"I want to send HTML multipart uploads to my own server"),(0,s.kt)("p",null,"If you want to send regular file uploads to your own server you can use ",(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/xhr"},(0,s.kt)("inlineCode",{parentName:"a"},"@uppy/xhr")),"."))}d.isMDXComponent=!0}}]);