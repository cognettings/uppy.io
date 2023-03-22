"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8190],{3068:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(7294),a=r(814),n=r(3612);const i=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check-diff","prepare":"husky install","format:show-diff":"git stash push -q; prettier . -w --loglevel silent && git --no-pager diff && git reset --hard; git stash pop -q","format:check":"prettier -c .","format:check-diff":"yarn format:check || yarn format:show-diff","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.3.1","@docusaurus/plugin-client-redirects":"^2.3.1","@docusaurus/preset-classic":"^2.3.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/locales":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.3.1","@docusaurus/module-type-aliases":"^2.3.1","@tsconfig/docusaurus":"^1.0.7","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:l}=i;function o(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:i="uppy.min.js"}=e,o=[];s.Children.toArray(t).forEach((e=>{o=[...o,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=o.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${l}/${i}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return s.createElement(s.Fragment,null,s.createElement(n.Z,{type:"caution"},s.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),s.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),s.createElement(a.Z,{language:"html"},d))}},7259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var s=r(7462),a=(r(7294),r(3905)),n=r(4866),i=r(5162),l=r(3068);const o={sidebar_position:5,slug:"/progress-bar"},p="Progress bar",u={unversionedId:"user-interfaces/elements/progress-bar",id:"user-interfaces/elements/progress-bar",title:"Progress bar",description:"@uppy/progress-bar is a minimalist plugin that shows the current upload",source:"@site/docs/user-interfaces/elements/progress-bar.mdx",sourceDirName:"user-interfaces/elements",slug:"/progress-bar",permalink:"/uppy.io/docs/progress-bar",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/progress-bar.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/progress-bar"},sidebar:"tutorialSidebar",previous:{title:"Status bar",permalink:"/uppy.io/docs/status-bar"},next:{title:"Webcam",permalink:"/uppy.io/docs/webcam"}},d={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>fixed</code>",id:"fixed",level:4},{value:"<code>hideAfterFinish</code>",id:"hideafterfinish",level:4}],c={toc:m},h="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"progress-bar"},"Progress bar"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/progress-bar")," is a minimalist plugin that shows the current upload\nprogress in a thin bar element, like the ones used by YouTube and GitHub when\nnavigating between pages."),(0,a.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,a.kt)("p",null,"When you need a minimalistec progress indicator and you\u2019re\n",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/building-your-own-ui-with-uppy"},"building your own UI"),". For most\ncases, ",(0,a.kt)("a",{parentName:"p",href:"/docs/dashboard"},"Dashboard")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/drag-drop"},"Drag & Drop")," (with\n",(0,a.kt)("a",{parentName:"p",href:"/docs/status-bar"},"Status Bar"),") is more likely what you need."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)(n.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/progress-bar\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/progress-bar\n"))),(0,a.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, ProgressBar } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(ProgressBar, { target: '#progress-bar' })\n      "))),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core';\nimport ProgressBar from '@uppy/progress-bar';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/progress-bar/dist/style.min.css';\n\nnew Uppy().use(ProgressBar, { target: '#progres-bar' });\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("h4",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")),(0,a.kt)("p",null,"A unique identifier for this Status Bar (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'ProgressBar'"),")."),(0,a.kt)("p",null,"Use this if you need to add several ProgressBar instances."),(0,a.kt)("h4",{id:"target"},(0,a.kt)("inlineCode",{parentName:"h4"},"target")),(0,a.kt)("p",null,"DOM element, CSS selector, or plugin to mount the Status Bar into (",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("h4",{id:"fixed"},(0,a.kt)("inlineCode",{parentName:"h4"},"fixed")),(0,a.kt)("p",null,"Show the progress bar at the top of the page with ",(0,a.kt)("inlineCode",{parentName:"p"},"position: fixed")," (",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),",\ndefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,a.kt)("p",null,"When set to false, show the progress bar inline wherever it\u2019s mounted."),(0,a.kt)("h4",{id:"hideafterfinish"},(0,a.kt)("inlineCode",{parentName:"h4"},"hideAfterFinish")),(0,a.kt)("p",null,"Hides the progress bar after the upload has finished (",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),", default:\n",(0,a.kt)("inlineCode",{parentName:"p"},"true"),")."))}k.isMDXComponent=!0}}]);