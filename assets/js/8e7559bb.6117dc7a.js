"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93120],{58860:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>f});var t=r(37953);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},488:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=r(72994),o=(r(37953),r(58860));const a={id:"run_flink",title:"Run Flink Jobs",description:"How to run Flink jobs with YuniKorn",image:"https://svn.apache.org/repos/asf/flink/site/img/logo/png/100/flink_squirrel_100_color.png",keywords:["spark"]},i=void 0,l={unversionedId:"user_guide/workloads/run_flink",id:"version-1.2.0/user_guide/workloads/run_flink",title:"Run Flink Jobs",description:"How to run Flink jobs with YuniKorn",source:"@site/versioned_docs/version-1.2.0/user_guide/workloads/run_flink.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_flink",permalink:"/docs/1.2.0/user_guide/workloads/run_flink",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"run_flink",title:"Run Flink Jobs",description:"How to run Flink jobs with YuniKorn",image:"https://svn.apache.org/repos/asf/flink/site/img/logo/png/100/flink_squirrel_100_color.png",keywords:["spark"]},sidebar:"docs",previous:{title:"Run Spark Jobs",permalink:"/docs/1.2.0/user_guide/workloads/run_spark"},next:{title:"Run TensorFlow Jobs",permalink:"/docs/1.2.0/user_guide/workloads/run_tf"}},s={},u=[{value:"Standalone mode",id:"standalone-mode",level:2},{value:"Native mode",id:"native-mode",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...r}=e;return(0,o.yg)(c,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"It's very easy to run ",(0,o.yg)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," on Kubernetes with YuniKorn. Depending on which mode is\nused to run Flink on Kubernetes, the configuration is slight different."),(0,o.yg)("h2",{id:"standalone-mode"},"Standalone mode"),(0,o.yg)("p",null,"Please follow ",(0,o.yg)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/ops/deployment/kubernetes.html"},"Kubernetes Setup")," to get details and examples of standalone deploy mode.\nIn this mode, we can directly add required labels (applicationId and queue) in Deployment/Job spec to run flink application with YuniKorn scheduler, see the ",(0,o.yg)("a",{parentName:"p",href:"/docs/1.2.0/user_guide/workloads/workload_overview"},"overview")," for the label specification."),(0,o.yg)("h2",{id:"native-mode"},"Native mode"),(0,o.yg)("p",null,"Please follow ",(0,o.yg)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/ops/deployment/native_kubernetes.html"},"Native Kubernetes Setup")," to get details and examples of native deploy mode.\nRunning flink application with YuniKorn scheduler in native mode is only supported for flink 1.11 or above, we can leverage two flink configurations ",(0,o.yg)("inlineCode",{parentName:"p"},"kubernetes.jobmanager.labels")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"kubernetes.taskmanager.labels")," to set the required labels.\nExamples:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Start a flink session")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"./bin/kubernetes-session.sh \\\n  -Dkubernetes.cluster-id=<ClusterId> \\\n  -Dtaskmanager.memory.process.size=4096m \\\n  -Dkubernetes.taskmanager.cpu=2 \\\n  -Dtaskmanager.numberOfTaskSlots=4 \\\n  -Dresourcemanager.taskmanager-timeout=3600000 \\\n  -Dkubernetes.jobmanager.labels=applicationId:MyOwnApplicationId,queue:root.sandbox \\\n  -Dkubernetes.taskmanager.labels=applicationId:MyOwnApplicationId,queue:root.sandbox\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Start a flink application")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"./bin/flink run-application -p 8 -t kubernetes-application \\\n  -Dkubernetes.cluster-id=<ClusterId> \\\n  -Dtaskmanager.memory.process.size=4096m \\\n  -Dkubernetes.taskmanager.cpu=2 \\\n  -Dtaskmanager.numberOfTaskSlots=4 \\\n  -Dkubernetes.container.image=<CustomImageName> \\\n  -Dkubernetes.jobmanager.labels=applicationId:MyOwnApplicationId,queue:root.sandbox \\\n  -Dkubernetes.taskmanager.labels=applicationId:MyOwnApplicationId,queue:root.sandbox \\\n  local:///opt/flink/usrlib/my-flink-job.jar\n")))}d.isMDXComponent=!0}}]);