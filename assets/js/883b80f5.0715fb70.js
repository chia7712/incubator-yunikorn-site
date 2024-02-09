"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68960],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),a=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=a(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=a(t),m=o,y=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var a=2;a<i;a++)l[a]=t[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56096:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var r=t(45072),o=(t(11504),t(95788));const i={id:"deployment_modes",title:"Deployment Modes"},l=void 0,s={unversionedId:"user_guide/deployment_modes",id:"version-1.3.0/user_guide/deployment_modes",title:"Deployment Modes",description:"\x3c!--",source:"@site/versioned_docs/version-1.3.0/user_guide/deployment_modes.md",sourceDirName:"user_guide",slug:"/user_guide/deployment_modes",permalink:"/docs/1.3.0/user_guide/deployment_modes",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"deployment_modes",title:"Deployment Modes"},sidebar:"docs",previous:{title:"Features",permalink:"/docs/1.3.0/get_started/core_features"},next:{title:"Service Configuration",permalink:"/docs/1.3.0/user_guide/service_config"}},d={},a=[{value:"YuniKorn deployment modes",id:"yunikorn-deployment-modes",level:2},{value:"Which version should I use?",id:"which-version-should-i-use",level:2},{value:"Standard mode",id:"standard-mode",level:3},{value:"Plugin mode",id:"plugin-mode",level:3}],u={toc:a},c="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"yunikorn-deployment-modes"},"YuniKorn deployment modes"),(0,o.yg)("p",null,"YuniKorn can be deployed in two different modes: standard and plugin. In standard mode, YuniKorn runs as a customized\nKubernetes scheduler. In plugin mode, YuniKorn is implemented as a set of plugins on top of the default Kubernetes\nscheduling framework."),(0,o.yg)("p",null,"In both cases, it is recommended to run the admission controller as well, as this will ensure that only a single\nscheduler is active within your Kubernetes cluster. In this mode, the default Kubernetes scheduler (which is always running)\nwill be bypassed for all pods except YuniKorn itself."),(0,o.yg)("h2",{id:"which-version-should-i-use"},"Which version should I use?"),(0,o.yg)("h3",{id:"standard-mode"},"Standard mode"),(0,o.yg)("p",null,"Standard mode is currently the default. It is stable, efficient, and very performant. It is well-suited for\ndeployments where most if not all pods are leveraging the queueing features of YuniKorn."),(0,o.yg)("h3",{id:"plugin-mode"},"Plugin mode"),(0,o.yg)("p",null,"Plugin mode is a new deployment model where the scheduler is implemented on top of the default Kubernetes scheduling\nlogic, allowing for better compatibility with the default Kubernetes scheduler. It is well-suited for mixed\nworkloads (traditional Kubernetes as well as queued applications)."),(0,o.yg)("p",null,"Plugin mode is currently very new and has therefore not yet reached the maturity level of standard mode."),(0,o.yg)("p",null,"To activate plugin mode when deploying with Helm, set the variable ",(0,o.yg)("inlineCode",{parentName:"p"},"enableSchedulerPlugin")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),"."))}p.isMDXComponent=!0}}]);