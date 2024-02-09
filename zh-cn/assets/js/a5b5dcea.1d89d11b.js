"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36392],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>g});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,g=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const a={id:"configure_scheduler",title:"Configure Scheduler"},i=void 0,l={unversionedId:"setup/configure_scheduler",id:"version-0.8.0/setup/configure_scheduler",title:"Configure Scheduler",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/setup/configure_scheduler.md",sourceDirName:"setup",slug:"/setup/configure_scheduler",permalink:"/zh-cn/docs/0.8.0/setup/configure_scheduler",draft:!1,tags:[],version:"0.8.0",frontMatter:{id:"configure_scheduler",title:"Configure Scheduler"},sidebar:"version-0.8.0/docs",previous:{title:"Build Local",permalink:"/zh-cn/docs/0.8.0/setup/build_local"},next:{title:"Deployment Guide",permalink:"/zh-cn/docs/0.8.0/setup/deployment"}},u={},c=[{value:"Build docker image",id:"build-docker-image",level:2},{value:"Create the ConfigMap",id:"create-the-configmap",level:2},{value:"Attach ConfigMap Volume to the Scheduler Pod",id:"attach-configmap-volume-to-the-scheduler-pod",level:2},{value:"Deploy the Scheduler",id:"deploy-the-scheduler",level:2},{value:"Configuration Hot Refresh",id:"configuration-hot-refresh",level:2}],p={toc:c},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(s,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"deployment-of-yunikorn-using-a-configmap"},"Deployment of YuniKorn using a ConfigMap"),(0,o.yg)("h2",{id:"build-docker-image"},"Build docker image"),(0,o.yg)("p",null,"Under project root of the ",(0,o.yg)("inlineCode",{parentName:"p"},"yunikorn-k8shim"),", run the command to build an image using the map for the configuration:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"make image\n")),(0,o.yg)("p",null,"This command will build an image. The image will be tagged with a default version and image tag."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note")," the default build uses a hardcoded user and tag. You ",(0,o.yg)("em",{parentName:"p"},"must")," update the ",(0,o.yg)("inlineCode",{parentName:"p"},"IMAGE_TAG")," variable in the ",(0,o.yg)("inlineCode",{parentName:"p"},"Makefile")," to push to an appropriate repository. "),(0,o.yg)("h2",{id:"create-the-configmap"},"Create the ConfigMap"),(0,o.yg)("p",null,"This must be done before deploying the scheduler. It requires a correctly setup kubernetes environment.\nThis kubernetes environment can be either local or remote. "),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"download configuration file if not available on the node to add to kubernetes:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"curl -o queues.yaml https://raw.githubusercontent.com/apache/incubator-yunikorn-k8shim/master/conf/queues.yaml\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"create ConfigMap in kubernetes:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"kubectl create configmap yunikorn-configs --from-file=queues.yaml\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"check if the ConfigMap was created correctly:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"kubectl describe configmaps yunikorn-configs\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note")," if name of the ConfigMap is changed the volume in the scheduler yaml file must be updated to reference the new name otherwise the changes to the configuration will not be picked up. "),(0,o.yg)("h2",{id:"attach-configmap-volume-to-the-scheduler-pod"},"Attach ConfigMap Volume to the Scheduler Pod"),(0,o.yg)("p",null,"The ConfigMap is attached to the scheduler as a special volume. First step is to specify where to mount it in the pod:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"  volumeMounts:\n    - name: config-volume\n      mountPath: /etc/yunikorn/\n")),(0,o.yg)("p",null,"Second step is to link the mount point back to the configuration map created in kubernetes:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"  volumes:\n    - name: config-volume\n      configMap:\n        name: yunikorn-configs\n")),(0,o.yg)("p",null,"Both steps are part of the scheduler yaml file, an example can be seen at ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/scheduler/scheduler.yaml"},"scheduler.yaml"),"\nfor reference."),(0,o.yg)("h2",{id:"deploy-the-scheduler"},"Deploy the Scheduler"),(0,o.yg)("p",null,"The scheduler can be deployed with following command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"kubectl create -f deployments/scheduler/scheduler.yaml\n")),(0,o.yg)("h2",{id:"configuration-hot-refresh"},"Configuration Hot Refresh"),(0,o.yg)("p",null,"YuniKorn supports to load configuration changes automatically from attached configmap. Simply update the content in the configmap,\nthat can be done either via Kubernetes dashboard UI or commandline. ",(0,o.yg)("em",{parentName:"p"},"Note"),", changes made to the configmap might have some\ndelay to be picked up by the scheduler."))}d.isMDXComponent=!0}}]);