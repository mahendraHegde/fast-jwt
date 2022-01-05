"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[927],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2272:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=n(7462),i=n(3366),l=(n(7294),n(3905)),a=["components"],o={id:"VerifierOptions",title:"Interface: VerifierOptions",sidebar_label:"VerifierOptions",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"api/interfaces/VerifierOptions",id:"api/interfaces/VerifierOptions",title:"Interface: VerifierOptions",description:"Properties",source:"@site/docs/api/interfaces/VerifierOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/VerifierOptions",permalink:"/fast-jwt/docs/api/interfaces/VerifierOptions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"VerifierOptions",title:"Interface: VerifierOptions",sidebar_label:"VerifierOptions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SignerOptions",permalink:"/fast-jwt/docs/api/interfaces/SignerOptions"}},d=[{value:"Properties",id:"properties",children:[{value:"algorithms",id:"algorithms",children:[],level:3},{value:"complete",id:"complete",children:[],level:3},{value:"cache",id:"cache",children:[],level:3},{value:"cacheTTL",id:"cachettl",children:[],level:3},{value:"allowedJti",id:"allowedjti",children:[],level:3},{value:"allowedAud",id:"allowedaud",children:[],level:3},{value:"allowedIss",id:"allowediss",children:[],level:3},{value:"allowedSub",id:"allowedsub",children:[],level:3},{value:"allowedNonce",id:"allowednonce",children:[],level:3},{value:"ignoreExpiration",id:"ignoreexpiration",children:[],level:3},{value:"ignoreNotBefore",id:"ignorenotbefore",children:[],level:3},{value:"maxAge",id:"maxage",children:[],level:3},{value:"clockTimestamp",id:"clocktimestamp",children:[],level:3},{value:"clockTolerance",id:"clocktolerance",children:[],level:3}],level:2}],u={toc:d};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"algorithms"},"algorithms"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"algorithms"),": ",(0,l.kt)("a",{parentName:"p",href:"../#algorithm"},(0,l.kt)("inlineCode",{parentName:"a"},"Algorithm")),"[]"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"complete"},"complete"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"complete"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cache"},"cache"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"cache"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cachettl"},"cacheTTL"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"cacheTTL"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"allowedjti"},"allowedJti"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"allowedJti"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp")," ","|"," (",(0,l.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp"),")[]"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"allowedaud"},"allowedAud"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"allowedAud"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp")," ","|"," (",(0,l.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp"),")[]"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"allowediss"},"allowedIss"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"allowedIss"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp")," ","|"," (",(0,l.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp"),")[]"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"allowedsub"},"allowedSub"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"allowedSub"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp")," ","|"," (",(0,l.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp"),")[]"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"allowednonce"},"allowedNonce"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"allowedNonce"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp")," ","|"," (",(0,l.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp"),")[]"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ignoreexpiration"},"ignoreExpiration"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"ignoreExpiration"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ignorenotbefore"},"ignoreNotBefore"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"ignoreNotBefore"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maxage"},"maxAge"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"maxAge"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"clocktimestamp"},"clockTimestamp"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"clockTimestamp"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"clocktolerance"},"clockTolerance"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"clockTolerance"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")))}s.isMDXComponent=!0}}]);