"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86712],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>m});var i=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),g=r,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return t?i.createElement(m,a(a({ref:n},d),{},{components:t})):i.createElement(m,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},36400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(45072),r=(t(11504),t(95788));const o={id:"resilience",title:"Resilience"},a=void 0,s={unversionedId:"design/resilience",id:"design/resilience",title:"Resilience",description:"\x3c!--",source:"@site/docs/design/resilience.md",sourceDirName:"design",slug:"/design/resilience",permalink:"/docs/next/design/resilience",draft:!1,tags:[],version:"current",frontMatter:{id:"resilience",title:"Resilience"},sidebar:"docs",previous:{title:"Priority Scheduling",permalink:"/docs/next/design/priority_scheduling"},next:{title:"Batch Workloads Ordering with StateAware Policy",permalink:"/docs/next/design/state_aware_scheduling"}},l={},c=[{value:"The problem",id:"the-problem",level:2},{value:"Design",id:"design",level:2},{value:"Workflow",id:"workflow",level:3},{value:"How to determine recovery is complete?",id:"how-to-determine-recovery-is-complete",level:3},{value:"Node recovery",id:"node-recovery",level:3},{value:"Requests for recovery",id:"requests-for-recovery",level:3},{value:"Applications",id:"applications",level:4},{value:"Nodes and allocations",id:"nodes-and-allocations",level:4}],d={toc:c},p="wrapper";function u(e){let{components:n,...o}=e;return(0,r.yg)(p,(0,i.c)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This is not a HA (High-availability) design, HA implies that a service can\nsurvive from a fatal software/hardware failure. That requires one or more\nstandby instances providing same services to take over active instance on failures.\nResilience here means for YuniKorn, we can restart it without losing its state."),(0,r.yg)("h2",{id:"the-problem"},"The problem"),(0,r.yg)("p",null,"YuniKorn is designed as a stateless service, it doesn't persist its state, e.g\napplications/queues/allocations etc, to any persistent storage. All states are\nin memory only. This design ensures YuniKorn to be able to response requests with\nlow latency, and deployment mode is simple. However, a restart (or recovery) will\nhave the problem to lose state data. We need a decent way to reconstruct all\nprevious states on a restart."),(0,r.yg)("h2",{id:"design"},"Design"),(0,r.yg)("h3",{id:"workflow"},"Workflow"),(0,r.yg)("p",null,'Scheduler core has no notion of "state", which means it does not know if it is under recovering.\nIt is too complex to maintain a series of ',(0,r.yg)("inlineCode",{parentName:"p"},"scheduler states")," in both core and shim, because we must\nkeep them in-sync. However, if we live under a simple assumption: ",(0,r.yg)("strong",{parentName:"p"},"scheduler core only responses\nrequests, the correction of requests is ensured by shim according its current state"),".\nThe design becomes much simpler. This way, the shim maintains a state machine like below. When\nit is under ",(0,r.yg)("inlineCode",{parentName:"p"},"running")," state, it sends new requests to the scheduler core as long as a new one is found;\nwhen under ",(0,r.yg)("inlineCode",{parentName:"p"},"recovering")," state, it collects previous allocations and send recovery messages to\nthe scheduler core, and waiting for recovery to be accomplished."),(0,r.yg)("p",null,"Shim scheduler state machine"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"      Register                 Recover                Success\nNew -----------\x3e Registered -----------\x3e Recovering ----------\x3e Running\n                                             |   Fail\n                                              --------\x3e Failed\n")),(0,r.yg)("p",null,"Following chart illustrate how yunikorn-core and shim works together on recovery."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Workflow",src:t(59255).c,width:"7198",height:"2222"})),(0,r.yg)("p",null,"Restart (with recovery) process"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"yunikorn-shim registers itself with yunikorn-core"),(0,r.yg)("li",{parentName:"ul"},'shim enters "recovering" state. Under "recovering" state, the shim only scans existing nodes and allocations, no new scheduling requests will be sent.',(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"shim scans existing nodes from api-server and added them to cache"),(0,r.yg)("li",{parentName:"ul"},"shim scans existing pods from api-server, filter out the pods that already assigned (scheduled to a node), and added that to cache (allocation in that node)"),(0,r.yg)("li",{parentName:"ul"},"shim sends update request to yunikorn-core with the info found in previous steps"))),(0,r.yg)("li",{parentName:"ul"},"yunikorn-core handles update requests, the steps should look like a replay of allocation process, including",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"adding node"),(0,r.yg)("li",{parentName:"ul"},"adding applications"),(0,r.yg)("li",{parentName:"ul"},"adding allocations"),(0,r.yg)("li",{parentName:"ul"},"modifying queue resources"),(0,r.yg)("li",{parentName:"ul"},"update partition info"))),(0,r.yg)("li",{parentName:"ul"},'when all nodes are fully recovered, shim transits the state to "running"'),(0,r.yg)("li",{parentName:"ul"},'shim notifies yunikorn-core that recovery is done, then yunikorn-core transits to "running" state.')),(0,r.yg)("h3",{id:"how-to-determine-recovery-is-complete"},"How to determine recovery is complete?"),(0,r.yg)("p",null,"Shim queries K8s api-server to get how many nodes were available in this cluster. It tracks the recovering status of each node.\nOnce all nodes are recovered, it can claim the recovery is completed. This approach requires us to add ",(0,r.yg)("inlineCode",{parentName:"p"},"recovering")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"recovered"),"\nstates to nodes' state machine in the shim."),(0,r.yg)("h3",{id:"node-recovery"},"Node recovery"),(0,r.yg)("p",null,"In the shim layer, it maintains states for each node and pods running on this node. When start to recover nodes,\nall nodes initially are considered as under ",(0,r.yg)("inlineCode",{parentName:"p"},"recovering"),". Only when all pods running on this node are fully recovered,\nthe node can be considered as ",(0,r.yg)("inlineCode",{parentName:"p"},"recovered"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"node-recovery",src:t(66243).c,width:"6426",height:"2489"})),(0,r.yg)("p",null,"Like demonstrated on upon diagram,"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Node0 is still recovering because pod0 is recovering."),(0,r.yg)("li",{parentName:"ul"},"Node1 is recovered (become schedulable) because all pods on this node have been recovered."),(0,r.yg)("li",{parentName:"ul"},"Node2 is lost, shim lost contact with this node. If after sometime this node comes back, shim should still try to recover this node.")),(0,r.yg)("h3",{id:"requests-for-recovery"},"Requests for recovery"),(0,r.yg)("p",null,"During recovery process, shim needs to collect all known information of applications, nodes and allocations from the underneath\nResource Manager and use them for recovery."),(0,r.yg)("h4",{id:"applications"},"Applications"),(0,r.yg)("p",null,"Existing applications must be recovered first before allocations. Shim needs to scan all existing applications\nfrom nodes, and add applications info as a list of ",(0,r.yg)("inlineCode",{parentName:"p"},"AddApplicationRequest")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"UpdateRequest"),". This is same\nas the fresh application submission."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"message AddApplicationRequest {\n  string applicationID = 1;\n  string queueName = 2;\n  string partitionName = 3;\n}\n")),(0,r.yg)("h4",{id:"nodes-and-allocations"},"Nodes and allocations"),(0,r.yg)("p",null,"Once a shim is registered to the scheduler-core, subsequent requests are sent via ",(0,r.yg)("inlineCode",{parentName:"p"},"UpdateRequest#NewNodeInfo"),"\n(see more from ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-scheduler-interface/blob/master/si.proto"},"si.proto"),").\nThe structure of the messages looks like,"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"message NewNodeInfo {\n  // nodeID\n  string nodeID = 1;\n  // optional node attributes\n  map<string, string> attributes = 2;\n  // total node resource\n  Resource schedulableResource = 3;\n  // existing allocations on this node\n  repeated Allocation existingAllocations = 4;\n}\n")),(0,r.yg)("p",null,"Shim needs to scan all existing allocations on a node and wrap these info up as a ",(0,r.yg)("inlineCode",{parentName:"p"},"NewNodeInfo"),", add that to a\n",(0,r.yg)("inlineCode",{parentName:"p"},"UpdateRequest")," and then send to scheduler-core."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note"),": the recovery of existing allocations depend on the existence of applications, which means applications must\nbe recovered first. Since scheduler-core handles ",(0,r.yg)("inlineCode",{parentName:"p"},"UpdateRequest")," one by one, it is required that all existing allocations\nin a ",(0,r.yg)("inlineCode",{parentName:"p"},"UpdateRequest")," must from known applications or new applications embedded within the same ",(0,r.yg)("inlineCode",{parentName:"p"},"UpdateRequest"),", which can be\nspecified in ",(0,r.yg)("inlineCode",{parentName:"p"},"NewApplications")," field. Scheduler-core ensures ",(0,r.yg)("inlineCode",{parentName:"p"},"NewApplications")," are always processed first."))}u.isMDXComponent=!0},66243:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/resilience-node-recovery-6abe663c243bdfdbff691e14a70166e5.jpg"},59255:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/resilience-workflow-191f147a7501740ec6632f216f2bb25f.jpg"}}]);