"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[434],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),i=a(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),i=a(7294),r=a(6010),l=a(2389),o=a(7392),s=a(7094),u=a(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:l,defaultValue:m,values:h,groupId:c,className:b}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=h??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,o.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,i.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=c){const e=y[c];null!=e&&e!==N&&f.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,a=x.indexOf(t),n=f[a].value;n!==N&&(C(t),T(n),null!=c&&w(c,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},b)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:I,onClick:I},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,i.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,l.Z)();return i.createElement(m,(0,n.Z)({key:String(t)},e))}},3068:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),i=a(814),r=a(3612);const l=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","docusaurus":"docusaurus","lint:js":"eslint . --cache ","lint":"run-s --continue-on-error lint:js lint:md","prepare":"husky install","lint:md":"run-s --continue-on-error remark:md remark:mdx","remark:md":"remark docs -qf","remark:mdx":"remark docs -e mdx -u mdx -qf","serve":"docusaurus serve","dev":"docusaurus start","swizzle":"docusaurus swizzle","typecheck":"tsc","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.js":"eslint --fix --cache","*.{css,html,json,js,jsx,ts,tsx,yml}":["prettier --write"],"docs/*.md":["remark -qf --"],"docs/*.mdx":["remark -u mdx -qf --"]},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.7.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-lint-recommended":"^6.1.2","remark-preset-prettier":"^1.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.2.3+sha224.953c8233f7a92884eee2de69a1b92d1f2ec1655e66d08071ba9a02fa"}'),{version:o}=l;function s(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:l="uppy.min.js"}=e,s=[];n.Children.toArray(t).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=s.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${o}/${l}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${a}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(r.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),n.createElement(i.Z,{language:"html"},d))}},5810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(7462),i=(a(7294),a(3905)),r=a(5488),l=a(5162),o=a(3068);const s={sidebar_position:2},u="Thumbnail generator",p={unversionedId:"user-interfaces/elements/thumbnail-generator",id:"user-interfaces/elements/thumbnail-generator",title:"Thumbnail generator",description:"@uppy/thumbnail-generator generates proportional thumbnails (file previews) for images that are added to Uppy.",source:"@site/docs/user-interfaces/elements/thumbnail-generator.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/thumbnail-generator",permalink:"/uppy.io/pr-preview/pr-34/docs/user-interfaces/elements/thumbnail-generator",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/thumbnail-generator.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Image editor",permalink:"/uppy.io/pr-preview/pr-34/docs/user-interfaces/elements/image-editor"},next:{title:"Informer",permalink:"/uppy.io/pr-preview/pr-34/docs/user-interfaces/elements/informer"}},d={},m=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>locale</code>",id:"locale",level:4},{value:"<code>thumbnailWidth</code>",id:"thumbnailwidth",level:4},{value:"<code>thumbnailHeight</code>",id:"thumbnailheight",level:4},{value:"<code>thumbnailType</code>",id:"thumbnailtype",level:4},{value:"<code>waitForThumbnailsBeforeUpload</code>",id:"waitforthumbnailsbeforeupload",level:4},{value:"Events",id:"events",level:3},{value:"<code>thumbnail:generated</code>",id:"thumbnailgenerated",level:4}],h={toc:m};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"thumbnail-generator"},"Thumbnail generator"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/thumbnail-generator")," generates proportional thumbnails (file previews) for images that are added to Uppy."),(0,i.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,i.kt)("p",null,"This plugin is included by default with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," plugin, and can also be useful to display image previews in a custom UI."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Thumbnails are only generated for ",(0,i.kt)("em",{parentName:"p"},"local")," files.\nRemote files through ",(0,i.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," generally won\u2019t have thumbnails because they are downloaded on the server.\nSome providers, such as Google Drive, have baked in thumbnails into their API responses.")),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/thumbnail-generator\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/thumbnail-generator\n"))),(0,i.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, ThumbnailGenerator } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(ThumbnailGenerator)\n      '))),(0,i.kt)("h2",{id:"use"},"Use"),(0,i.kt)("p",null,"If you use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," then it\u2019s already installed.\nIf you want to use it programatically for your own UI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core'\nimport ThumbnailGenerator from '@uppy/thumbnail-generator'\n\nconst uppy = new Uppy()\n\n// Example of setting all the options to their defaults.\n// Not passing anything to `ThumbnailGenerator` is therefor the same as the example below.\nuppy.use(ThumbnailGenerator, {\n  id: 'ThumbnailGenerator',\n  thumbnailWidth: 200,\n  thumbnailHeight: 200,\n  thumbnailType: 'image/jpeg',\n  waitForThumbnailsBeforeUpload: false,\n})\n\nuppy.on(\"thumbnail:generated\", (file, preview) => doSomething(file, preview));\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("h4",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")),(0,i.kt)("p",null,"A unique identifier for this plugin (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'ThumbnailGenerator'"),")."),(0,i.kt)("h4",{id:"locale"},(0,i.kt)("inlineCode",{parentName:"h4"},"locale")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  strings: {\n    generatingThumbnails: 'Generating thumbnails...',\n  },\n}\n")),(0,i.kt)("h4",{id:"thumbnailwidth"},(0,i.kt)("inlineCode",{parentName:"h4"},"thumbnailWidth")),(0,i.kt)("p",null,"Width of the resulting thumbnail (",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"200"),"). "),(0,i.kt)("p",null,"Thumbnails are always proportional and not cropped.\nIf width is provided, height is calculated automatically to match ratio.\nIf both width and height are given, only width is taken into account."),(0,i.kt)("h4",{id:"thumbnailheight"},(0,i.kt)("inlineCode",{parentName:"h4"},"thumbnailHeight")),(0,i.kt)("p",null,"Height of the resulting thumbnail (",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"200"),"). "),(0,i.kt)("p",null,"Thumbnails are always proportional and not cropped.\nIf height is provided, width is calculated automatically to match ratio.\nIf both width and height are given, only width is taken into account."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Produce a 300px height thumbnail with calculated width to match ratio:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(ThumbnailGenerator, { thumbnailHeight: 300 })\n")),(0,i.kt)("p",{parentName:"admonition"},"Produce a 300px width thumbnail with calculated height to match ratio (and ignore the given height):"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(ThumbnailGenerator, { thumbnailWidth: 300, thumbnailHeight: 300 }) \n")),(0,i.kt)("p",{parentName:"admonition"},"See issue ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/issues/979"},"#979")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1096"},"#1096")," for details on this feature.")),(0,i.kt)("h4",{id:"thumbnailtype"},(0,i.kt)("inlineCode",{parentName:"h4"},"thumbnailType")),(0,i.kt)("p",null,"MIME type of the resulting thumbnail (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'image/jpeg'"),")."),(0,i.kt)("p",null,"This is useful if you want to support transparency in your thumbnails by switching to ",(0,i.kt)("inlineCode",{parentName:"p"},"image/png"),"."),(0,i.kt)("h4",{id:"waitforthumbnailsbeforeupload"},(0,i.kt)("inlineCode",{parentName:"h4"},"waitForThumbnailsBeforeUpload")),(0,i.kt)("p",null,"Whether to wait for all thumbnails to be ready before starting the upload (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,i.kt)("p",null,"If set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", Thumbnail Generator will invoke Uppy\u2019s internal processing stage and wait for ",(0,i.kt)("inlineCode",{parentName:"p"},"thumbnail:all-generated")," event, before proceeding to the uploading stage.\nThis is useful because Thumbnail Generator also adds EXIF data to images, and if we wait until it\u2019s done processing, this data will be available on the server after the upload."),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy-core#onevent-action"},(0,i.kt)("inlineCode",{parentName:"a"},"on"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy-core#onceevent-action"},(0,i.kt)("inlineCode",{parentName:"a"},"once"))," to listen to these events.")),(0,i.kt)("h4",{id:"thumbnailgenerated"},(0,i.kt)("inlineCode",{parentName:"h4"},"thumbnail:generated")),(0,i.kt)("p",null,"Emitted with ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"preview")," local url as arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('thumbnail:generated', (file, preview) => {\n  const img = document.createElement('img')\n  img.src = preview\n  img.width = 100\n  document.body.appendChild(img)\n})\n")))}c.isMDXComponent=!0}}]);