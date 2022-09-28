"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8929],{5162:(e,r,t)=>{t.d(r,{Z:()=>l});var s=t(7294),a=t(6010);const n="tabItem_Ymn6";function l(e){let{children:r,hidden:t,className:l}=e;return s.createElement("div",{role:"tabpanel",className:(0,a.Z)(n,l),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>m});var s=t(7462),a=t(7294),n=t(6010),l=t(2389),o=t(7392),i=t(7094),u=t(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var r;const{lazy:t,block:l,defaultValue:c,values:m,groupId:f,className:y}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??h.map((e=>{let{props:{value:r,label:t,attributes:s}}=e;return{value:r,label:t,attributes:s}})),g=(0,o.l)(b,((e,r)=>e.value===r.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(r=h.find((e=>e.props.default)))?void 0:r.props.value)??h[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,i.U)(),[x,E]=(0,a.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==x&&b.some((r=>r.value===e))&&E(e)}const j=e=>{const r=e.currentTarget,t=N.indexOf(r),s=b[t].value;s!==x&&(T(r),E(s),null!=f&&w(f,String(s)))},C=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{const r=N.indexOf(e.currentTarget)+1;t=N[r]??N[0];break}case"ArrowLeft":{const r=N.indexOf(e.currentTarget)-1;t=N[r]??N[N.length-1];break}}null==(r=t)||r.focus()};return a.createElement("div",{className:(0,n.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},y)},b.map((e=>{let{value:r,label:t,attributes:l}=e;return a.createElement("li",(0,s.Z)({role:"tab",tabIndex:x===r?0:-1,"aria-selected":x===r,key:r,ref:e=>N.push(e),onKeyDown:C,onFocus:j,onClick:j},l,{className:(0,n.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":x===r})}),t??r)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==x})))))}function m(e){const r=(0,l.Z)();return a.createElement(c,(0,s.Z)({key:String(r)},e))}},3068:(e,r,t)=>{t.d(r,{Z:()=>i});var s=t(7294),a=t(814),n=t(3612);const l=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","docusaurus":"docusaurus","lint:js":"eslint . --cache ","lint":"run-s --continue-on-error lint:js lint:md","prepare":"husky install","lint:md":"run-s --continue-on-error remark:md remark:mdx","remark:md":"remark docs -qf","remark:mdx":"remark docs -e mdx -u mdx -qf","serve":"docusaurus serve","dev":"docusaurus start","swizzle":"docusaurus swizzle","typecheck":"tsc","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.js":"eslint --fix --cache","*.{css,html,json,js,jsx,ts,tsx,yml}":["prettier --write"],"docs/*.md":["remark -qf --"],"docs/*.mdx":["remark -u mdx -qf --"]},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.7.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-lint-recommended":"^6.1.2","remark-preset-prettier":"^1.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.2.3+sha224.953c8233f7a92884eee2de69a1b92d1f2ec1655e66d08071ba9a02fa"}'),{version:o}=l;function i(e){let{children:r,uppyCssName:t="uppy.min.css",uppyJsName:l="uppy.min.js"}=e,i=[];s.Children.toArray(r).forEach((e=>{i=[...i,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=i.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${o}/${l}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${t}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return s.createElement(s.Fragment,null,s.createElement(n.Z,{type:"caution"},s.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),s.createElement(a.Z,{language:"html"},d))}},6069:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var s=t(7462),a=(t(7294),t(3905)),n=t(5488),l=t(5162),o=t(3068);const i={sidebar_position:7},u="Supporting IE11",p={unversionedId:"guides/browser-support",id:"guides/browser-support",title:"Supporting IE11",description:"We officially support recent versions of Chrome, Firefox, Safari and Edge.",source:"@site/docs/guides/browser-support.mdx",sourceDirName:"guides",slug:"/guides/browser-support",permalink:"/uppy.io/pr-preview/pr-5/docs/guides/browser-support",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/guides/browser-support.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Migrate to 2.0",permalink:"/uppy.io/pr-preview/pr-5/docs/guides/migrate-2.0"},next:{title:"Uppy core",permalink:"/uppy.io/pr-preview/pr-5/docs/uppy-core"}},d={},c=[{value:"Polyfills",id:"polyfills",level:2},{value:"Legacy CDN bundle",id:"legacy-cdn-bundle",level:2}],m={toc:c};function f(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"supporting-ie11"},"Supporting IE11"),(0,a.kt)("p",null,"We officially support recent versions of Chrome, Firefox, Safari and Edge."),(0,a.kt)("p",null,"Internet Explorer is not officially supported, as in we don\u2019t run tests for it,\nbut you can be mostly confident it works with the right polyfills.\nBut it does come with a risk of unexpected results in styling or functionality."),(0,a.kt)("h2",{id:"polyfills"},"Polyfills"),(0,a.kt)(n.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install core-js whatwg-fetch abortcontroller-polyfill md-gum-polyfill resize-observer-polyfill\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add core-js whatwg-fetch abortcontroller-polyfill md-gum-polyfill resize-observer-polyfill\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import "core-js";\nimport "whatwg-fetch";\nimport "abortcontroller-polyfill/dist/polyfill-patch-fetch";\n// Order matters: AbortController needs fetch which needs Promise (provided by core-js).\n\nimport "md-gum-polyfill";\nimport ResizeObserver from "resize-observer-polyfill";\n\nwindow.ResizeObserver ??= ResizeObserver;\n\nexport { default } from "@uppy/core";\nexport * from "@uppy/core";\n')),(0,a.kt)("h2",{id:"legacy-cdn-bundle"},"Legacy CDN bundle"),(0,a.kt)(o.Z,{uppyJsName:"uppy.legacy.min.js",mdxType:"UppyCdnExample"},"\n    import { Uppy, DragDrop, Tus } from \"{{UPPY_JS_URL}}\"\n    const uppy = new Uppy()\n    uppy.use(DragDrop, { target: '#uppy' })\n    uppy.use(Tus, { endpoint: '//tusd.tusdemo.net/files/' })\n  "))}f.isMDXComponent=!0}}]);