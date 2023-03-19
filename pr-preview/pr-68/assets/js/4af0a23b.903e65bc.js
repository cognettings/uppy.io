"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2731],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),i=a(6010),o=a(2466),l=a(6550),s=a(1980),u=a(7392),p=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=c(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),k=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var k=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),r=u[a].value;r!==l&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},o,{className:(0,i.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=f(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(b,(0,r.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},3068:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(814),i=a(3612);const o=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check-diff","prepare":"husky install","format:show-diff":"git stash push -q; prettier . -w --loglevel silent && git --no-pager diff && git reset --hard; git stash pop -q","format:check":"prettier -c .","format:check-diff":"yarn format:check || yarn format:show-diff","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:l}=o;function s(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:o="uppy.min.js"}=e,s=[];r.Children.toArray(t).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=s.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${l}/${o}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${a}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return r.createElement(r.Fragment,null,r.createElement(i.Z,{type:"caution"},r.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),r.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),r.createElement(n.Z,{language:"html"},d))}},8665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),i=a(4866),o=a(5162),l=a(3068);const s={sidebar_position:1},u="Image editor",p={unversionedId:"user-interfaces/elements/image-editor",id:"user-interfaces/elements/image-editor",title:"Image editor",description:"Image editor. Designed to be used with the Dashboard UI.",source:"@site/docs/user-interfaces/elements/image-editor.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/image-editor",permalink:"/uppy.io/pr-preview/pr-68/docs/user-interfaces/elements/image-editor",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/image-editor.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Drag & Drop",permalink:"/uppy.io/pr-preview/pr-68/docs/user-interfaces/drag-drop"},next:{title:"Drop target",permalink:"/uppy.io/pr-preview/pr-68/docs/user-interfaces/elements/drop-target"}},d={},c=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>quality</code>",id:"quality",level:4},{value:"<code>cropperOptions</code>",id:"cropperoptions",level:4},{value:"<code>actions</code>",id:"actions",level:4},{value:"<code>locale: {}</code>",id:"locale-",level:4},{value:"Events",id:"events",level:3},{value:"<code>file-editor:start</code>",id:"file-editorstart",level:4},{value:"<code>file-editor:complete</code>",id:"file-editorcomplete",level:4},{value:"<code>file-editor:cancel</code>",id:"file-editorcancel",level:4}],m={toc:c},h="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"image-editor"},"Image editor"),(0,n.kt)("p",null,"Image editor. Designed to be used with the Dashboard UI."),(0,n.kt)("div",{style:{maxWidth:500}},(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1199054/87208710-654db400-c307-11ea-9471-6e3c6582d2a5.png",alt:"Screenshot of the Image Editor plugin UI in Dashboard"}))),(0,n.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,n.kt)("p",null,"When you want to allow users to crop, rotate, zoom and flip images that are\nadded to Uppy."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/core @uppy/dashboard @uppy/image-editor\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/core @uppy/dashboard @uppy/image-editor\n"))),(0,n.kt)(o.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, Dashboard, ImageEditor } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(Dashboard, { target: '#uppy', inline: true })\n        uppy.use(ImageEditor, { target: Uppy.Dashboard })\n      "))),(0,n.kt)("h2",{id:"use"},"Use"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3,7,11} showLineNumbers","{3,7,11}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport ImageEditor from '@uppy/image-editor';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\nimport '@uppy/image-editor/dist/style.min.css';\n\nnew Uppy()\n    .use(Dashboard, { inline: true, target: '#dashboard' })\n    .use(ImageEditor, { target: Dashboard });\n")),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you automatically want to open the image editor when an image is added, see\nthe ",(0,n.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard#autoOpenFileEditor"},(0,n.kt)("inlineCode",{parentName:"a"},"autoOpenFileEditor")),"\nDashboard option.")),(0,n.kt)("h4",{id:"id"},(0,n.kt)("inlineCode",{parentName:"h4"},"id")),(0,n.kt)("p",null,"A unique identifier for this plugin (",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,n.kt)("inlineCode",{parentName:"p"},"'ImageEditor'"),")."),(0,n.kt)("h4",{id:"quality"},(0,n.kt)("inlineCode",{parentName:"h4"},"quality")),(0,n.kt)("p",null,"Quality Of the resulting blob that will be saved in Uppy after editing/cropping\n(",(0,n.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,n.kt)("inlineCode",{parentName:"p"},"0.8"),")."),(0,n.kt)("h4",{id:"cropperoptions"},(0,n.kt)("inlineCode",{parentName:"h4"},"cropperOptions")),(0,n.kt)("p",null,"Image Editor is using the excellent\n",(0,n.kt)("a",{parentName:"p",href:"https://fengyuanchen.github.io/cropperjs/"},"Cropper.js"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"cropperOptions")," will\nbe directly passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"Cropper")," and therefor can expect the same values as\ndocumented in their\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/cropperjs/blob/HEAD/README.md#options"},"README"),",\nwith the addition of ",(0,n.kt)("inlineCode",{parentName:"p"},"croppedCanvasOptions"),", which will be passed to\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/cropperjs/blob/HEAD/README.md#getcroppedcanvasoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"getCroppedCanvas")),"."),(0,n.kt)("h4",{id:"actions"},(0,n.kt)("inlineCode",{parentName:"h4"},"actions")),(0,n.kt)("p",null,"Shown action buttons (",(0,n.kt)("inlineCode",{parentName:"p"},"Object")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),")."),(0,n.kt)("p",null,"If you you\u2019d like to hide all actions, pass ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," to it. By default all the\nactions are visible. Or enable/disable them individually:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"{\n  revert: true,\n  rotate: true,\n  granularRotate: true,\n  flip: true,\n  zoomIn: true,\n  zoomOut: true,\n  cropSquare: true,\n  cropWidescreen: true,\n  cropWidescreenVertical: true,\n}\n")),(0,n.kt)("h4",{id:"locale-"},(0,n.kt)("inlineCode",{parentName:"h4"},"locale: {}")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        revert: 'Revert',\n        rotate: 'Rotate',\n        zoomIn: 'Zoom in',\n        zoomOut: 'Zoom out',\n        flipHorizontal: 'Flip horizontal',\n        aspectRatioSquare: 'Crop square',\n        aspectRatioLandscape: 'Crop landscape (16:9)',\n        aspectRatioPortrait: 'Crop portrait (9:16)',\n    },\n};\n")),(0,n.kt)("h3",{id:"events"},"Events"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can use ",(0,n.kt)("a",{parentName:"p",href:"/docs/uppy-core#onevent-action"},(0,n.kt)("inlineCode",{parentName:"a"},"on"))," and\n",(0,n.kt)("a",{parentName:"p",href:"/docs/uppy-core#onceevent-action"},(0,n.kt)("inlineCode",{parentName:"a"},"once"))," to listen to these events.")),(0,n.kt)("h4",{id:"file-editorstart"},(0,n.kt)("inlineCode",{parentName:"h4"},"file-editor:start")),(0,n.kt)("p",null,"Emitted when ",(0,n.kt)("inlineCode",{parentName:"p"},"selectFile(file)")," is called."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('file-editor:start', (file) => {\n    console.log(file);\n});\n")),(0,n.kt)("h4",{id:"file-editorcomplete"},(0,n.kt)("inlineCode",{parentName:"h4"},"file-editor:complete")),(0,n.kt)("p",null,"Emitted after ",(0,n.kt)("inlineCode",{parentName:"p"},"save(blob)")," is called."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('file-editor:complete', (updatedFile) => {\n    console.log(updatedFile);\n});\n")),(0,n.kt)("h4",{id:"file-editorcancel"},(0,n.kt)("inlineCode",{parentName:"h4"},"file-editor:cancel")),(0,n.kt)("p",null,"Emitted when ",(0,n.kt)("inlineCode",{parentName:"p"},"uninstall")," is called or when the current image editing changes are\ndiscarded."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('file-editor:cancel', (file) => {\n    console.log(file);\n});\n")))}f.isMDXComponent=!0}}]);