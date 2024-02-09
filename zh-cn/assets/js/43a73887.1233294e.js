"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46436],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>y});var o=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(y,a(a({ref:n},c),{},{components:t})):o.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:r,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=t(45072),r=(t(11504),t(95788));const i={id:"cross_queue_preemption",title:"Cross Queue Preemption"},a=void 0,p={unversionedId:"design/cross_queue_preemption",id:"version-0.12.2/design/cross_queue_preemption",title:"Cross Queue Preemption",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/design/cross_queue_preemption.md",sourceDirName:"design",slug:"/design/cross_queue_preemption",permalink:"/zh-cn/docs/0.12.2/design/cross_queue_preemption",draft:!1,tags:[],version:"0.12.2",frontMatter:{id:"cross_queue_preemption",title:"Cross Queue Preemption"},sidebar:"version-0.12.2/docs",previous:{title:"Kubernetes Shim Design",permalink:"/zh-cn/docs/0.12.2/design/k8shim"},next:{title:"Namespace Resource Quota",permalink:"/zh-cn/docs/0.12.2/design/namespace_resource_quota"}},l={},s=[{value:"Problems:",id:"problems",level:2},{value:"Answer some questions for design/implementation choices",id:"answer-some-questions-for-designimplementation-choices",level:2},{value:"Pseudo code",id:"pseudo-code",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"problems"},"Problems:"),(0,r.yg)("p",null,"According to lessons we learned from YARN Scheduler preemption. "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Here're top bad things:")," "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Preemption is a shotgun instead of a sniper, when a preemption decision is made, nobody knows if preempted resources will go to demanding queue/app/user or not."),(0,r.yg)("li",{parentName:"ul"},"Preemption logic and allocation is different, we have to implement (and mimic) what we have done in scheduler allocation logic. ")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Here're top good things:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Preemption is fast (thanks to the shotgun), reclaiming thousands of containers only takes ~ 1 sec. "),(0,r.yg)("li",{parentName:"ul"},"We have understand how painful it is to handle DRF, multiple preemption policies (inter/intra-queue, shotgun/surgical preemption, etc.) And we have developed some good logic\nto make sure better modularization and plug-ability  ")),(0,r.yg)("h2",{id:"answer-some-questions-for-designimplementation-choices"},"Answer some questions for design/implementation choices"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1","."," Do we really want preemption-delay? (Or we just want to control pace)")),(0,r.yg)("p",null,"In CS, we have preemption-delay, which select victims in preemption candidates, wait for a certain time before killing it. "),(0,r.yg)("p",null,"The purposes of preemption delay are: a. give heads-up time to apps so\nthey can prepare bad things happen (unfortunately no app do anything for these heads up, at least from what I knew). b. control preemption pace.   "),(0,r.yg)("p",null,"And in practice, I found it causes a lot of issues, for example when a\ncluster state keep changing, it is very hard to ensure accurate preemption. "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Proposal:")),(0,r.yg)("p",null,"Remove the preemption-delay, keep the logics of controlling preemption pace. (such as ",(0,r.yg)("inlineCode",{parentName:"p"},"yarn.resourcemanager.monitor.capacity.preemption\n.total_preemption_per_round"),"). And we can do allocation together with preemption.\nThis don't mean containers will be stopped immediately after preemption issued. Instead, RM can control delays between signal a container and kill a container. Such as grace\ntermination of POD in K8s: ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod/#termination-of-pods"},"https://kubernetes.io/docs/concepts/workloads/pods/pod/#termination-of-pods"),"   "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2","."," Do we want to do preemption for every scheduling logic, or we can do periodically?")),(0,r.yg)("p",null,"In CS, we have preemption logic runs periodically, like every 1 sec or 3 sec. "),(0,r.yg)("p",null,"Since preemption logic involves some heavy logics, like calculating shares of queues/apps. And when doing accurate preemption, we may need to scan nodes for preemption candidate.\nConsidering this, I propose to have preemption runs periodically. But it is important to note that, we need to try to use as much code as possible for\nallocation-inside-preemption, otherwise there will be too much duplicated logic and very hard to be maintained in the future."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3","."," Preemption cost and function")),(0,r.yg)("p",null,"We found it is helpful to add cost for preemption, such as container live time, priority, type of container. It could be a cost function (Which returns a numeric value) or it\ncould be a comparator (which compare two allocations for preemption ask)."),(0,r.yg)("h2",{id:"pseudo-code"},"Pseudo code"),(0,r.yg)("p",null,"Logic of allocation (invoked every allocation cycle)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"input:\n  - nAlloc, allocate N allocations for this allocation cycle.\n\nfor partition: \n  askCandidates := findAskCandidates(nAlloc, preemption=false)\n  \n  allocated, failed_to_allocated := tryAllocate(askCandidates);\n  \n  send-allocated-to-cache-to-commit;\n  \n  update-missed-opportunity (allocated, failed_to_allocated);\n  \n  nAlloc -= len(allocated)   \n")),(0,r.yg)("p",null,"Logic of preemption (invoked every preemption cycle)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"// It has to be done for every preemption-policy because calculation is different.\nfor preemption-policy: \n  preempt_results := policy.preempt()\n  for preempt_results: \n     send-preempt-result-to-cache-to-commit;\n     updated-missed-opportunity (allocated)\n")),(0,r.yg)("p",null,"Inside preemption policy"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"inter-queue-preempt-policy:\n  calculate-preemption-quotas;\n  \n  for partitions:\n    total_preempted := resource(0);\n    \n    while total_preempted < partition-limited:\n      // queues will be sorted by allocating - preempting\n      // And ignore any key in preemption_mask\n      askCandidates := findAskCandidates(N, preemption=true)\n      \n      preempt_results := tryAllocate(askCandidates, preemption=true);\n      \n      total_preempted += sigma(preempt_result.allocResource)\n      \n      send-allocated-to-cache-to-commit;\n      \n      update-missed-opportunity (allocated, failed_to_allocated);\n      \n      update-preemption-mask(askCandidates.allocKeys - preempt_results.allocKeys)\n")))}d.isMDXComponent=!0}}]);