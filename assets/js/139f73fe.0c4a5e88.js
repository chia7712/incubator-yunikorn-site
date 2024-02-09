"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1448],{95788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>f});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),g=a,f=p["".concat(i,".").concat(g)]||p[g]||m[g]||o;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=g;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},84800:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(45072),a=(t(11504),t(95788));const o={id:"metrics",title:"Scheduler Metrics",keywords:["metrics"]},s=void 0,c={unversionedId:"performance/metrics",id:"version-0.9.0/performance/metrics",title:"Scheduler Metrics",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/performance/metrics.md",sourceDirName:"performance",slug:"/performance/metrics",permalink:"/docs/0.9.0/performance/metrics",draft:!1,tags:[],version:"0.9.0",frontMatter:{id:"metrics",title:"Scheduler Metrics",keywords:["metrics"]},sidebar:"version-0.9.0/docs",previous:{title:"Evaluate YuniKorn function & performance with Kubemark",permalink:"/docs/0.9.0/performance/evaluate_perf_function_with_kubemark"},next:{title:"Profiling",permalink:"/docs/0.9.0/performance/profiling"}},i={},l=[{value:"Access Metrics",id:"access-metrics",level:2},{value:"Aggregate Metrics to Prometheus",id:"aggregate-metrics-to-prometheus",level:2}],u={toc:l},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"YuniKorn leverages ",(0,a.yg)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," to record metrics. The metrics system keeps tracking of\nscheduler's critical execution paths, to reveal potential performance bottlenecks. Currently, there are two categories\nfor these metrics:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"scheduler: generic metrics of the scheduler, such as allocation latency, num of apps etc."),(0,a.yg)("li",{parentName:"ul"},"queue: each queue has its own metrics sub-system, tracking queue status.")),(0,a.yg)("p",null,"all metrics are declared in ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn")," namespace."),(0,a.yg)("h2",{id:"access-metrics"},"Access Metrics"),(0,a.yg)("p",null,"YuniKorn metrics are collected through Prometheus client library, and exposed via scheduler restful service.\nOnce started, they can be accessed via endpoint http://localhost:9080/ws/v1/metrics."),(0,a.yg)("h2",{id:"aggregate-metrics-to-prometheus"},"Aggregate Metrics to Prometheus"),(0,a.yg)("p",null,"It's simple to setup a Prometheus server to grab YuniKorn metrics periodically. Follow these steps:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Setup Prometheus (read more from ",(0,a.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/installation/"},"Prometheus docs"),")")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Configure Prometheus rules: a sample configuration "))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval:     3s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'yunikorn'\n    scrape_interval: 1s\n    metrics_path: '/ws/v1/metrics'\n    static_configs:\n    - targets: ['docker.for.mac.host.internal:9080']\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"start Prometheus")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker pull prom/prometheus:latest\ndocker run -p 9090:9090 -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus\n")),(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"docker.for.mac.host.internal")," instead of ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost")," if you are running Prometheus in a local docker container\non Mac OS. Once started, open Prometheus web UI: http://localhost:9090/graph. You'll see all available metrics from\nYuniKorn scheduler."))}m.isMDXComponent=!0}}]);