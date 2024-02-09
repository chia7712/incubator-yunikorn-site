"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38428],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>m});var i=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(45072),r=(n(11504),n(95788));const a={id:"k8shim",title:"Kubernetes Shim Design"},o=void 0,s={unversionedId:"design/k8shim",id:"version-1.2.0/design/k8shim",title:"Kubernetes Shim Design",description:"\x3c!--",source:"@site/versioned_docs/version-1.2.0/design/k8shim.md",sourceDirName:"design",slug:"/design/k8shim",permalink:"/docs/1.2.0/design/k8shim",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"k8shim",title:"Kubernetes Shim Design"}},l={},c=[{value:"The Kubernetes shim",id:"the-kubernetes-shim",level:2},{value:"The admission controller",id:"the-admission-controller",level:2},{value:"Admission controller deployment",id:"admission-controller-deployment",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,i.c)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Github repo: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim"},"https://github.com/apache/yunikorn-k8shim")),(0,r.yg)("p",null,"Please read the ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.2.0/design/architecture"},"architecture")," doc before reading this one, you will need to understand\nthe 3 layer design of YuniKorn before getting to understand what is the Kubernetes shim."),(0,r.yg)("h2",{id:"the-kubernetes-shim"},"The Kubernetes shim"),(0,r.yg)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the scheduler-interface."),(0,r.yg)("h2",{id:"the-admission-controller"},"The admission controller"),(0,r.yg)("p",null,"The admission controller runs in a separate pod, it runs a\n",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook"},"mutation webhook"),"\nand a ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"},"validation webhook"),", where:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"mutation webhook")," mutates pod spec by:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Adding ",(0,r.yg)("inlineCode",{parentName:"li"},"schedulerName: yunikorn"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"By explicitly specifying the scheduler name, the pod will be scheduled by YuniKorn scheduler."))),(0,r.yg)("li",{parentName:"ul"},"Adding ",(0,r.yg)("inlineCode",{parentName:"li"},"applicationId")," label",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"When a label ",(0,r.yg)("inlineCode",{parentName:"li"},"applicationId")," exists, reuse the given applicationId."),(0,r.yg)("li",{parentName:"ul"},"When a label ",(0,r.yg)("inlineCode",{parentName:"li"},"spark-app-selector")," exists, reuse the given spark app ID."),(0,r.yg)("li",{parentName:"ul"},"Otherwise, assign a generated application ID for this pod, using convention: ",(0,r.yg)("inlineCode",{parentName:"li"},"yunikorn-<namespace>-autogen"),". This is unique per namespace."))),(0,r.yg)("li",{parentName:"ul"},"Adding ",(0,r.yg)("inlineCode",{parentName:"li"},"queue")," label",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"When a label ",(0,r.yg)("inlineCode",{parentName:"li"},"queue")," exists, reuse the given queue name. Note, if placement rule is enabled, values set in the label is ignored."),(0,r.yg)("li",{parentName:"ul"},"Otherwise, adds ",(0,r.yg)("inlineCode",{parentName:"li"},"queue: root.default")))),(0,r.yg)("li",{parentName:"ul"},"Adding ",(0,r.yg)("inlineCode",{parentName:"li"},"disableStateAware")," label",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"If pod was assigned a generated applicationId by the admission controller, also set ",(0,r.yg)("inlineCode",{parentName:"li"},"disableStateAware: true"),". This causes the generated application\nto immediately transition from the ",(0,r.yg)("inlineCode",{parentName:"li"},"Starting")," to ",(0,r.yg)("inlineCode",{parentName:"li"},"Running")," state so that it will not block other applications."))))),(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"validation webhook")," validates the configuration set in the configmap",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This is used to prevent writing malformed configuration into the configmap."),(0,r.yg)("li",{parentName:"ul"},"The validation webhook calls scheduler ",(0,r.yg)("a",{parentName:"li",href:"/docs/1.2.0/api/scheduler#configuration-validation"},"validation REST API")," to validate configmap updates.")))),(0,r.yg)("h3",{id:"admission-controller-deployment"},"Admission controller deployment"),(0,r.yg)("p",null,"By default, the admission controller is deployed as part of the YuniKorn Helm chart installation. This can be disabled if necessary (though not recommended) by setting the Helm parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"embedAdmissionController")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,r.yg)("p",null,"On startup, the admission controller performs a series of tasks to ensure that it is properly registered with Kubernetes:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Loads a Kubernetes secret called ",(0,r.yg)("inlineCode",{parentName:"li"},"admission-controller-secrets"),". This secret stores a pair of CA certificates which are used to sign the TLS server certificate used by the admission controller."),(0,r.yg)("li",{parentName:"ol"},"If the secret cannot be found or either CA certificate is within 90 days of expiration, generates new certificate(s). If a certificate is expiring, a new one is generated with an expiration of 12 months in the future. If both certificates are missing or expiring, the second certificate is generated with an expiration of 6 months in the future. This ensures that both certificates do not expire at the same time, and that there is an overlap of trusted certificates."),(0,r.yg)("li",{parentName:"ol"},"If the CA certificates were created or updated, writes the secrets back to Kubernetes."),(0,r.yg)("li",{parentName:"ol"},"Generates an ephemeral TLS server certificate signed by the CA certificate with the latest expiration date."),(0,r.yg)("li",{parentName:"ol"},"Validates, and if necessary, creates or updates the Kubernetes webhook configurations named ",(0,r.yg)("inlineCode",{parentName:"li"},"yunikorn-admission-controller-validations")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"yunikorn-admission-controller-mutations"),". If the CA certificates have changed, the webhooks will also be updated. These webhooks allow the Kubernetes API server to connect to the admission controller service to perform configmap validations and pod mutations. "),(0,r.yg)("li",{parentName:"ol"},"Starts up the admission controller HTTPS server.")),(0,r.yg)("p",null,"Additionally, the admission controller also starts a background task to wait for CA certificates to expire. Once either certificate is expiring within the next 30 days, new CA and server certificates are generated, the webhook configurations are updated, and the HTTPS server is quickly restarted. This ensures that certificates rotate properly without downtime."),(0,r.yg)("p",null,"In production clusters, it is recommended to deploy the admission controller with two replicas by setting the Helm parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"admissionController.replicaCount")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"2"),". This will ensure that at least one admission controller webhook is reachable by the Kubernetes API server at all times. In this configuration, the CA certificates and webhook configurations are shared between the instances."))}u.isMDXComponent=!0}}]);