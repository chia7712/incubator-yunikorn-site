"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11e3],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>d});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(g,".").concat(m)]||p[m]||u[m]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(45072),r=(n(11504),n(95788));const l={id:"metrics",title:"Scheduler Metrics",keywords:["metrics"]},i=void 0,o={unversionedId:"performance/metrics",id:"version-1.0.0/performance/metrics",title:"Scheduler Metrics",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/performance/metrics.md",sourceDirName:"performance",slug:"/performance/metrics",permalink:"/zh-cn/docs/1.0.0/performance/metrics",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"metrics",title:"Scheduler Metrics",keywords:["metrics"]},sidebar:"docs",previous:{title:"Benchmarking Tutorial",permalink:"/zh-cn/docs/1.0.0/performance/performance_tutorial"},next:{title:"Profiling",permalink:"/zh-cn/docs/1.0.0/performance/profiling"}},g={},s=[{value:"Scheduler Metrics",id:"scheduler-metrics",level:3},{value:"Queue Metrics",id:"queue-metrics",level:3},{value:"Event Metrics",id:"event-metrics",level:3},{value:"Access Metrics",id:"access-metrics",level:2},{value:"Aggregate Metrics to Prometheus",id:"aggregate-metrics-to-prometheus",level:2}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"YuniKorn leverages ",(0,r.yg)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," to record metrics. The metrics system keeps tracking of\nscheduler's critical execution paths, to reveal potential performance bottlenecks. Currently, there are three categories\nfor these metrics:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"scheduler: generic metrics of the scheduler, such as allocation latency, num of apps etc."),(0,r.yg)("li",{parentName:"ul"},"queue: each queue has its own metrics sub-system, tracking queue status."),(0,r.yg)("li",{parentName:"ul"},"event: record various changes of events in YuniKorn.")),(0,r.yg)("p",null,"all metrics are declared in ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn")," namespace."),(0,r.yg)("h3",{id:"scheduler-metrics"},"Scheduler Metrics"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metrics Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metrics Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"containerAllocation"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},"Total number of attempts to allocate containers. State of the attempt includes ",(0,r.yg)("inlineCode",{parentName:"td"},"allocated"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"rejected"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"error"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"released"),". Increase only.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"applicationSubmission"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},"Total number of application submissions. State of the attempt includes ",(0,r.yg)("inlineCode",{parentName:"td"},"accepted")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"rejected"),". Increase only.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"applicationStatus"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Total number of application status. State of the application includes ",(0,r.yg)("inlineCode",{parentName:"td"},"running")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"completed"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalNodeActive"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Total number of active nodes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalNodeFailed"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Total number of failed nodes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nodeResourceUsage"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Total resource usage of node, by resource name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schedulingLatency"),(0,r.yg)("td",{parentName:"tr",align:null},"Histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"Latency of the main scheduling routine, in seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nodeSortingLatency"),(0,r.yg)("td",{parentName:"tr",align:null},"Histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"Latency of all nodes sorting, in seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"appSortingLatency"),(0,r.yg)("td",{parentName:"tr",align:null},"Histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"Latency of all applications sorting, in seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queueSortingLatency"),(0,r.yg)("td",{parentName:"tr",align:null},"Histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"Latency of all queues sorting, in seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tryNodeLatency"),(0,r.yg)("td",{parentName:"tr",align:null},"Histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"Latency of node condition checks for container allocations, such as placement constraints, in seconds, in seconds.")))),(0,r.yg)("h3",{id:"queue-metrics"},"Queue Metrics"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metrics Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metrics Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"appMetrics"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},"Application Metrics, record the total number of applications. State of the application includes ",(0,r.yg)("inlineCode",{parentName:"td"},"accepted"),",",(0,r.yg)("inlineCode",{parentName:"td"},"rejected")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"Completed"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"usedResourceMetrics"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Queue used resource.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pendingResourceMetrics"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Queue pending resource.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"availableResourceMetrics"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Used resource metrics related to queues etc.")))),(0,r.yg)("h3",{id:"event-metrics"},"Event Metrics"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metrics Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metrics Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsCreated"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Total events created.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsChanneled"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Total events channeled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsNotChanneled"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Total events not channeled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsProcessed"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Total events processed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsStored"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Total events stored.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsNotStored"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Total events not stored.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalEventsCollected"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"Total events collected.")))),(0,r.yg)("h2",{id:"access-metrics"},"Access Metrics"),(0,r.yg)("p",null,"YuniKorn metrics are collected through Prometheus client library, and exposed via scheduler restful service.\nOnce started, they can be accessed via endpoint http://localhost:9080/ws/v1/metrics."),(0,r.yg)("h2",{id:"aggregate-metrics-to-prometheus"},"Aggregate Metrics to Prometheus"),(0,r.yg)("p",null,"It's simple to setup a Prometheus server to grab YuniKorn metrics periodically. Follow these steps:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Setup Prometheus (read more from ",(0,r.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/installation/"},"Prometheus docs"),")")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Configure Prometheus rules: a sample configuration "))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval:     3s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'yunikorn'\n    scrape_interval: 1s\n    metrics_path: '/ws/v1/metrics'\n    static_configs:\n    - targets: ['docker.for.mac.host.internal:9080']\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"start Prometheus")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker pull prom/prometheus:latest\ndocker run -p 9090:9090 -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus\n")),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"docker.for.mac.host.internal")," instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost")," if you are running Prometheus in a local docker container\non Mac OS. Once started, open Prometheus web UI: http://localhost:9090/graph. You'll see all available metrics from\nYuniKorn scheduler."))}u.isMDXComponent=!0}}]);