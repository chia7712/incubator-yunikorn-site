"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93180],{95788:(e,t,n)=>{n.d(t,{Iu:()=>m,yg:()=>c});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),y=o(n),d=r,c=y["".concat(p,".").concat(d)]||y[d]||u[d]||l;return n?a.createElement(c,g(g({ref:t},m),{},{components:n})):a.createElement(c,g({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,g=new Array(l);g[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[y]="string"==typeof e?e:r,g[1]=i;for(var o=2;o<l;o++)g[o]=n[o];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(45072),r=(n(11504),n(95788));const l={id:"metrics",title:"\u8c03\u5ea6\u7a0b\u5e8f\u6307\u6807",keywords:["\u6307\u6807"]},g=void 0,i={unversionedId:"performance/metrics",id:"version-1.3.0/performance/metrics",title:"\u8c03\u5ea6\u7a0b\u5e8f\u6307\u6807",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.3.0/performance/metrics.md",sourceDirName:"performance",slug:"/performance/metrics",permalink:"/zh-cn/docs/1.3.0/performance/metrics",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"metrics",title:"\u8c03\u5ea6\u7a0b\u5e8f\u6307\u6807",keywords:["\u6307\u6807"]},sidebar:"docs",previous:{title:"\u57fa\u51c6\u6d4b\u8bd5\u6559\u7a0b",permalink:"/zh-cn/docs/1.3.0/performance/performance_tutorial"},next:{title:"\u5206\u6790",permalink:"/zh-cn/docs/1.3.0/performance/profiling"}},p={},o=[{value:"\u8c03\u5ea6\u7a0b\u5e8f\u6307\u6807",id:"\u8c03\u5ea6\u7a0b\u5e8f\u6307\u6807",level:3},{value:"\u961f\u5217\u6307\u6807",id:"\u961f\u5217\u6307\u6807",level:3},{value:"\u4e8b\u4ef6\u6307\u6807",id:"\u4e8b\u4ef6\u6307\u6807",level:3},{value:"\u8bbf\u95ee\u6307\u6807",id:"\u8bbf\u95ee\u6307\u6807",level:2},{value:"Prometheus \u7684\u805a\u5408\u6307\u6807",id:"prometheus-\u7684\u805a\u5408\u6307\u6807",level:2}],m={toc:o},y="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.c)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"YuniKorn\u5229\u7528",(0,r.yg)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," \u8bb0\u5f55\u6307\u6807\u3002 \u5ea6\u91cf\u7cfb\u7edf\u4e0d\u65ad\u8ddf\u8e2a\u8c03\u5ea6\u7a0b\u5e8f\u7684\u5173\u952e\u6267\u884c\u8def\u5f84\uff0c\u4ee5\u63ed\u793a\u6f5c\u5728\u7684\u6027\u80fd\u74f6\u9888\u3002 \u76ee\u524d\uff0c\u8fd9\u4e9b\u6307\u6807\u5206\u4e3a\u4e09\u7c7b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8c03\u5ea6\u5668\uff1a\u8c03\u5ea6\u5668\u7684\u901a\u7528\u6307\u6807\uff0c\u4f8b\u5982\u5206\u914d\u5ef6\u8fdf\u3001\u5e94\u7528\u7a0b\u5e8f\u6570\u91cf\u7b49\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u961f\u5217\uff1a\u6bcf\u4e2a\u961f\u5217\u90fd\u6709\u81ea\u5df1\u7684\u6307\u6807\u5b50\u7cfb\u7edf\uff0c\u8ddf\u8e2a\u961f\u5217\u72b6\u6001\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u4e8b\u4ef6\uff1a\u8bb0\u5f55YuniKorn\u4e2d\u4e8b\u4ef6\u7684\u5404\u79cd\u53d8\u5316\u3002")),(0,r.yg)("p",null,"\u6240\u6709\u6307\u6807\u90fd\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn"),"\u547d\u540d\u7a7a\u95f4\u4e2d\u58f0\u660e\u3002"),(0,r.yg)("h3",{id:"\u8c03\u5ea6\u7a0b\u5e8f\u6307\u6807"},"\u8c03\u5ea6\u7a0b\u5e8f\u6307\u6807"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"containerAllocation"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5c1d\u8bd5\u5206\u914d\u5bb9\u5668\u7684\u603b\u6b21\u6570\u3002 \u5c1d\u8bd5\u72b6\u6001\u5305\u62ec",(0,r.yg)("inlineCode",{parentName:"td"},"allocated"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"rejected"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"error"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"released"),"\u3002 \u8be5\u6307\u6807\u53ea\u4f1a\u589e\u52a0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"applicationSubmission"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u7533\u8bf7\u7684\u603b\u6570\u3002 \u5c1d\u8bd5\u7684\u72b6\u6001\u5305\u62ec ",(0,r.yg)("inlineCode",{parentName:"td"},"accepted"),"\u548c",(0,r.yg)("inlineCode",{parentName:"td"},"rejected"),"\u3002 \u8be5\u6307\u6807\u53ea\u4f1a\u589e\u52a0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"applicationStatus"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u72b6\u6001\u603b\u6570\u3002 \u5e94\u7528\u7a0b\u5e8f\u7684\u72b6\u6001\u5305\u62ec",(0,r.yg)("inlineCode",{parentName:"td"},"running"),"\u548c",(0,r.yg)("inlineCode",{parentName:"td"},"completed"),"\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalNodeActive"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d3b\u52a8\u8282\u70b9\u603b\u6570\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalNodeFailed"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5931\u8d25\u8282\u70b9\u7684\u603b\u6570\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nodeResourceUsage"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8282\u70b9\u7684\u603b\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff0c\u6309\u8d44\u6e90\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schedulingLatency"),(0,r.yg)("td",{parentName:"tr",align:null},"Histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e3b\u8c03\u5ea6\u4f8b\u7a0b\u7684\u5ef6\u8fdf\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nodeSortingLatency"),(0,r.yg)("td",{parentName:"tr",align:null},"Histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6240\u6709\u8282\u70b9\u6392\u5e8f\u7684\u5ef6\u8fdf\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"appSortingLatency"),(0,r.yg)("td",{parentName:"tr",align:null},"Histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\u6392\u5e8f\u7684\u5ef6\u8fdf\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queueSortingLatency"),(0,r.yg)("td",{parentName:"tr",align:null},"Histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6240\u6709\u961f\u5217\u6392\u5e8f\u7684\u5ef6\u8fdf\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tryNodeLatency"),(0,r.yg)("td",{parentName:"tr",align:null},"Histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8282\u70b9\u6761\u4ef6\u68c0\u67e5\u5bb9\u5668\u5206\u914d\u7684\u5ef6\u8fdf\uff0c\u4f8b\u5982\u653e\u7f6e\u7ea6\u675f\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002")))),(0,r.yg)("h3",{id:"\u961f\u5217\u6307\u6807"},"\u961f\u5217\u6307\u6807"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"appMetrics"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7a0b\u5e8f\u6307\u6807\uff0c\u8bb0\u5f55\u7533\u8bf7\u603b\u6570\u3002 \u5e94\u7528\u7a0b\u5e8f\u7684\u72b6\u6001\u5305\u62ec",(0,r.yg)("inlineCode",{parentName:"td"},"accepted"),"\u3001",(0,r.yg)("inlineCode",{parentName:"td"},"rejected"),"\u548c",(0,r.yg)("inlineCode",{parentName:"td"},"Completed"),"\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"usedResourceMetrics"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6392\u961f\u4f7f\u7528\u7684\u8d44\u6e90\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pendingResourceMetrics"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6392\u961f\u7b49\u5f85\u7684\u8d44\u6e90\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"availableResourceMetrics"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0e\u961f\u5217\u7b49\u76f8\u5173\u7684\u5df2\u7528\u8d44\u6e90\u6307\u6807\u3002")))),(0,r.yg)("h3",{id:"\u4e8b\u4ef6\u6307\u6807"},"\u4e8b\u4ef6\u6307\u6807"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsCreated"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7684\u4e8b\u4ef6\u603b\u6570\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsChanneled"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f15\u5bfc\u7684\u4e8b\u4ef6\u603b\u6570\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsNotChanneled"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f15\u5bfc\u7684\u4e8b\u4ef6\u603b\u6570\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsProcessed"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5904\u7406\u7684\u4e8b\u4ef6\u603b\u6570\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsStored"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u7684\u4e8b\u4ef6\u603b\u6570\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsNotStored"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u672a\u5b58\u50a8\u7684\u4e8b\u4ef6\u603b\u6570\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsCollected"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6536\u96c6\u7684\u4e8b\u4ef6\u603b\u6570\u3002")))),(0,r.yg)("h2",{id:"\u8bbf\u95ee\u6307\u6807"},"\u8bbf\u95ee\u6307\u6807"),(0,r.yg)("p",null,"YuniKorn\u6307\u6807\u901a\u8fc7Prometheus\u5ba2\u6237\u7aef\u5e93\u6536\u96c6\uff0c\u5e76\u901a\u8fc7\u8c03\u5ea6\u7a0b\u5e8fRESTful\u670d\u52a1\u516c\u5f00\u3002\n\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u7aef\u70b9http://localhost:9080/ws/v1/metrics\u8bbf\u95ee\u5b83\u4eec\u3002"),(0,r.yg)("h2",{id:"prometheus-\u7684\u805a\u5408\u6307\u6807"},"Prometheus \u7684\u805a\u5408\u6307\u6807"),(0,r.yg)("p",null,"\u8bbe\u7f6e Prometheus \u670d\u52a1\u5668\u4ee5\u5b9a\u671f\u83b7\u53d6 YuniKorn \u6307\u6807\u5f88\u7b80\u5355\u3002 \u6309\u7740\u8fd9\u4e9b\u6b21\u5e8f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8bbe\u7f6ePrometheus\uff08\u4ece",(0,r.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/installation/"},"Prometheus \u6587\u6863"),"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff09")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u914d\u7f6ePrometheus\u89c4\u5219\uff1a\u793a\u4f8b\u914d\u7f6e"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval:     3s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'yunikorn'\n    scrape_interval: 1s\n    metrics_path: '/ws/v1/metrics'\n    static_configs:\n    - targets: ['docker.for.mac.host.internal:9080']\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u542f\u52a8 Prometheus")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker pull prom/prometheus:latest\ndocker run -p 9090:9090 -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus\n")),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u5728Mac OS\u4e0a\u7684\u672c\u5730docker\u5bb9\u5668\u4e2d\u8fd0\u884cPrometheus\uff0c\u8bf7\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"docker.for.mac.host.internal"),"\u800c\u4e0d\u662f",(0,r.yg)("inlineCode",{parentName:"p"},"localhost"),"\u3002 \u542f\u52a8\u540e\uff0c\u6253\u5f00Prometheus\u7f51\u9875\u754c\u9762\uff1ahttp://localhost:9090/graph\u3002 \u60a8\u5c06\u770b\u5230\u6765\u81eaYuniKorn\u8c03\u5ea6\u7a0b\u5e8f\u7684\u6240\u6709\u53ef\u7528\u6307\u6807\u3002"))}u.isMDXComponent=!0}}]);