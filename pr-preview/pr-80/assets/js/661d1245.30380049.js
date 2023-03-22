"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(y,s(s({ref:t},u),{},{components:n})):a.createElement(y,s({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),s=n(2466),i=n(6550),p=n(1980),l=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[p,l]=y({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=p??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),f(e)}),[l,f,o]),tabValues:o}}var h=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:p,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==i&&(c(t),p(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},1355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),s=n(5162);const i={slug:"/react"},p="React",l={unversionedId:"framework-integrations/react",id:"framework-integrations/react",title:"React",description:"React components for the Uppy UI plugins.",source:"@site/docs/framework-integrations/react.mdx",sourceDirName:"framework-integrations",slug:"/react",permalink:"/uppy.io/docs/react",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/framework-integrations/react.mdx",tags:[],version:"current",frontMatter:{slug:"/react"},sidebar:"tutorialSidebar",previous:{title:"Angular",permalink:"/uppy.io/docs/angular"},next:{title:"Svelte",permalink:"/uppy.io/docs/svelte"}},u={},c=[{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"Frequently asked questions",id:"frequently-asked-questions",level:2},{value:"How do I update @uppy/core and plugins options dynamically?",id:"how-do-i-update-uppycore-and-plugins-options-dynamically",level:3},{value:"How do I render X amount of Uppy UI components?",id:"how-do-i-render-x-amount-of-uppy-ui-components",level:3}],d={toc:c},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react"},"React")," components for the Uppy UI plugins."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/react\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/react\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You also need to install the UI plugin you want to use. For instance,\n",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard"),".")),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/react")," exposes component wrappers for ",(0,r.kt)("inlineCode",{parentName:"p"},"Dashboard"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DragDrop"),", and all\nother UI elements. The components can be used with either ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react"},"React")," or\nAPI-compatible alternatives such as ",(0,r.kt)("a",{parentName:"p",href:"https://preactjs.com/"},"Preact"),"."),(0,r.kt)("p",null,"The following plugins are available as React component wrappers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<Dashboard />")," renders ",(0,r.kt)("a",{parentName:"li",href:"/docs/dashboard"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/dashboard"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<DragDrop />")," renders ",(0,r.kt)("a",{parentName:"li",href:"/docs/drag-drop"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<ProgressBar />")," renders ",(0,r.kt)("a",{parentName:"li",href:"/docs/progress-bar"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/progress-bar"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<StatusBar />")," renders ",(0,r.kt)("a",{parentName:"li",href:"/docs/status-bar"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/status-bar")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"A couple things to keep in mind when using Uppy with React:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Instead of adding a UI plugin to an Uppy instance with ",(0,r.kt)("inlineCode",{parentName:"li"},".use()"),", the Uppy\ninstance can be passed into components as an ",(0,r.kt)("inlineCode",{parentName:"li"},"uppy")," prop."),(0,r.kt)("li",{parentName:"ul"},"All other props are passed as options to the plugin."),(0,r.kt)("li",{parentName:"ul"},"The Uppy instance ",(0,r.kt)("strong",{parentName:"li"},"should not live inside the component")," but outside of it\n(for class components, it should not be instantiated inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"render()"),"\nmethod)."),(0,r.kt)("li",{parentName:"ul"},"You have to pass the IDs of your ",(0,r.kt)("inlineCode",{parentName:"li"},"use"),"d plugins to the ",(0,r.kt)("inlineCode",{parentName:"li"},"plugins")," array prop so\nDashboard knows it needs to render them."),(0,r.kt)("li",{parentName:"ul"},"An Uppy instance can\u2019t be used by more than one component. Make sure you are\nusing a unique Uppy instance per component."))),(0,r.kt)("p",null,"Here is a basic example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect } from 'react';\nimport Uppy from '@uppy/core';\nimport Webcam from '@uppy/webcam';\nimport { Dashboard } from '@uppy/react';\n\n// Don't forget the CSS: core and the UI components + plugins you are using.\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\nimport '@uppy/webcam/dist/style.min.css';\n\n// Don\u2019t forget to keep the Uppy instance outside of your component.\nconst uppy = new Uppy().use(Webcam);\n\nfunction Component() {\n    return <Dashboard uppy={uppy} plugins={['Webcam']} />;\n}\n")),(0,r.kt)("h2",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,r.kt)("h3",{id:"how-do-i-update-uppycore-and-plugins-options-dynamically"},"How do I update @uppy/core and plugins options dynamically?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// ...\n\n// Don\u2019t forget to keep the Uppy instance outside of your component.\nconst uppy = new Uppy().use(Webcam);\n\nfunction Component(props) {\n    useEffect(() => {\n        uppy.setOptions({ restrictions: props.restrictions });\n    }, [props.restrictions]);\n\n    useEffect(() => {\n        uppy.getPlugin('Webcam').setOptions({ modes: props.webcamModes });\n    }, [props.webcamModes]);\n\n    return <Dashboard uppy={uppy} plugins={['Webcam']} />;\n}\n")),(0,r.kt)("h3",{id:"how-do-i-render-x-amount-of-uppy-ui-components"},"How do I render X amount of Uppy UI components?"),(0,r.kt)("p",null,"You can dynamically render many Uppy UI\u2019s, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/drag-drop"),", and let\nevery UI upload under different conditions."),(0,r.kt)("p",null,"For example, a platform where you can upload pictures for a house per room, but\nthe number of rooms is dynamic and you want to handle every room differently in\nyour ",(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com"},"Transloadit")," template"),(0,r.kt)("p",null,"Here is what that could look like."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is the only exception for having Uppy inside the component.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useState, useEffect } from 'react';\nimport { Uppy } from '@uppy/core';\nimport { DragDrop, StatusBar } from '@uppy/react';\nimport Transloadit from '@uppy/transloadit';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/drag-drop/dist/style.min.css';\nimport '@uppy/status-bar/dist/style.min.css';\n\nfunction createUppy(houseId, roomId) {\n    // Adding to global `meta` will add it to every file.\n    // Every Uppy instance needs a unique ID.\n    return new Uppy({ id: roomId, meta: { houseId, roomId } }).use(Transloadit, {\n        assemblyOptions(file) {\n            return {\n                params: {\n                    auth: { key: 'TRANSLOADIT_AUTH_KEY_HERE' },\n                    template_id: 'xyz',\n                    // Send the results of the assembly to your backend.\n                    notify_url: 'https://your-domain.com/assembly-status',\n                },\n                // You can use these inside your template\n                // https://transloadit.com/docs/topics/assembly-instructions/#form-fields-in-instructions\n                fields: { roomId: file.meta.roomId, houseId: file.meta.houseId },\n            };\n        },\n    });\n}\n\nexport default function Room(props) {\n    const { houseId, roomId } = props;\n    // important: passing a initializer function to prevent the state from recreating.\n    const [uppy] = useState(() => createUppy(houseId, roomId));\n\n    useEffect(() => {\n        if (houseId && roomId) {\n            uppy.setOptions({ meta: { houseId, roomId } });\n        }\n    }, [uppy, houseId, roomId]);\n\n    return (\n        <>\n            <DragDrop uppy={uppy} />\n            <StatusBar uppy={uppy} />\n        </>\n    );\n}\n")))}y.isMDXComponent=!0}}]);