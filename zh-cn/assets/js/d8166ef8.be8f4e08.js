"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56296],{95788:(e,n,a)=>{a.d(n,{Iu:()=>s,yg:()=>m});var r=a(11504);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=r.createContext({}),g=function(e){var n=r.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=g(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=g(a),d=t,m=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return a?r.createElement(m,l(l({ref:n},s),{},{components:a})):r.createElement(m,l({ref:n},s))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:t,l[1]=p;for(var g=2;g<i;g++)l[g]=a[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98644:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var r=a(45072),t=(a(11504),a(95788));const i={id:"run_nvidia",title:"\u8fd0\u884cNVIDIA GPU\u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528Yunikorn\u8fd0\u884c\u901a\u7528\u7684GPU\u8c03\u5ea6\u793a\u4f8b",keywords:["NVIDIA GPU"]},l=void 0,p={unversionedId:"user_guide/workloads/run_nvidia",id:"user_guide/workloads/run_nvidia",title:"\u8fd0\u884cNVIDIA GPU\u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528Yunikorn\u8fd0\u884c\u901a\u7528\u7684GPU\u8c03\u5ea6\u793a\u4f8b",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/user_guide/workloads/run_nvidia.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_nvidia",permalink:"/zh-cn/docs/next/user_guide/workloads/run_nvidia",draft:!1,tags:[],version:"current",frontMatter:{id:"run_nvidia",title:"\u8fd0\u884cNVIDIA GPU\u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528Yunikorn\u8fd0\u884c\u901a\u7528\u7684GPU\u8c03\u5ea6\u793a\u4f8b",keywords:["NVIDIA GPU"]},sidebar:"docs",previous:{title:"\u6982\u8ff0",permalink:"/zh-cn/docs/next/user_guide/workloads/workload_overview"},next:{title:"\u8fd0\u884cSpark\u4f5c\u4e1a",permalink:"/zh-cn/docs/next/user_guide/workloads/run_spark"}},o={},g=[{value:"Yunikorn \u4e0e NVIDIA GPUs",id:"yunikorn-\u4e0e-nvidia-gpus",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u5b89\u88c5NVIDIA\u8bbe\u5907\u63d2\u4ef6",id:"\u5b89\u88c5nvidia\u8bbe\u5907\u63d2\u4ef6",level:3},{value:"\u6d4b\u8bd5NVIDIA\u8bbe\u5907\u63d2\u4ef6",id:"\u6d4b\u8bd5nvidia\u8bbe\u5907\u63d2\u4ef6",level:3},{value:"\u542f\u7528GPU\u65f6\u95f4\u5207\u7247( \u53ef\u9009 )",id:"\u542f\u7528gpu\u65f6\u95f4\u5207\u7247-\u53ef\u9009-",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u5b89\u88c5NVIDIA GPU Operator",id:"\u5b89\u88c5nvidia-gpu-operator",level:3},{value:"\u5e94\u7528\u65f6\u95f4\u5206\u7247\u914d\u7f6e",id:"\u5e94\u7528\u65f6\u95f4\u5206\u7247\u914d\u7f6e",level:3},{value:"\u6d4b\u8bd5GPU\u65f6\u95f4\u5207\u7247",id:"\u6d4b\u8bd5gpu\u65f6\u95f4\u5207\u7247",level:3}],s={toc:g},u="wrapper";function c(e){let{components:n,...i}=e;return(0,t.yg)(u,(0,r.c)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"yunikorn-\u4e0e-nvidia-gpus"},"Yunikorn \u4e0e NVIDIA GPUs"),(0,t.yg)("p",null,"\u672c\u6307\u5357\u6982\u8ff0\u4e86\u5982\u4f55\u8bbe\u7f6eNVIDIA\u8bbe\u5907\u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u4f7f\u7528\u6237\u53ef\u4ee5\u5728Yunikorn\u4e0a\u8fd0\u884cGPU\u3002\u5982\u9700\u66f4\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",(0,t.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/datacenter/cloud-native/kubernetes/install-k8s.html#option-2-installing-kubernetes-using-kubeadm"},(0,t.yg)("strong",{parentName:"a"},"\u4f7f\u7528GPU\u7684Kubernetes")),"\u3002"),(0,t.yg)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,t.yg)("p",null,"\u5728\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u4e4b\u524d\uff0c\u9700\u8981\u5728 ",(0,t.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/datacenter/cloud-native/kubernetes/install-k8s.html#install-kubernetes"},(0,t.yg)("strong",{parentName:"a"},"\u8bbe\u7f6eGPU\u7684Kubernetes")),"\u4e0a\u90e8\u7f72Yunikorn\u3002"),(0,t.yg)("h3",{id:"\u5b89\u88c5nvidia\u8bbe\u5907\u63d2\u4ef6"},"\u5b89\u88c5NVIDIA\u8bbe\u5907\u63d2\u4ef6"),(0,t.yg)("p",null,"\u6dfb\u52a0nvidia-device-plugin Helm\u5b58\u50a8\u5e93\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"helm repo add nvdp https://nvidia.github.io/k8s-device-plugin\nhelm repo update\nhelm repo list\n")),(0,t.yg)("p",null,"\u9a8c\u8bc1\u63d2\u4ef6\u7684\u6700\u65b0\u53d1\u5e03\u7248\u672c\u662f\u5426\u53ef\u7528\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"helm search repo nvdp --devel\nNAME                          CHART VERSION  APP VERSION       DESCRIPTION\nnvdp/nvidia-device-plugin     0.12.3         0.12.3         A Helm chart for ...\n")),(0,t.yg)("p",null,"\u90e8\u7f72\u8bbe\u5907\u63d2\u4ef6\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kubectl create namespace nvidia\nhelm install --generate-name nvdp/nvidia-device-plugin --namespace nvidia --version 0.12.3\n")),(0,t.yg)("p",null,"\u68c0\u67e5Pod\u7684\u72b6\u6001\u4ee5\u786e\u4fddNVIDIA\u8bbe\u5907\u63d2\u4ef6\u6b63\u5728\u8fd0\u884c\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kubectl get pods -A\n\nNAMESPACE      NAME                                      READY   STATUS    RESTARTS      AGE\nkube-flannel   kube-flannel-ds-j24fx                     1/1     Running   1 (11h ago)   11h\nkube-system    coredns-78fcd69978-2x9l8                  1/1     Running   1 (11h ago)   11h\nkube-system    coredns-78fcd69978-gszrw                  1/1     Running   1 (11h ago)   11h\nkube-system    etcd-katlantyss-nzxt                      1/1     Running   3 (11h ago)   11h\nkube-system    kube-apiserver-katlantyss-nzxt            1/1     Running   4 (11h ago)   11h\nkube-system    kube-controller-manager-katlantyss-nzxt   1/1     Running   3 (11h ago)   11h\nkube-system    kube-proxy-4wz7r                          1/1     Running   1 (11h ago)   11h\nkube-system    kube-scheduler-katlantyss-nzxt            1/1     Running   4 (11h ago)   11h\nkube-system    nvidia-device-plugin-1659451060-c92sb     1/1     Running   1 (11h ago)   11h\n")),(0,t.yg)("h3",{id:"\u6d4b\u8bd5nvidia\u8bbe\u5907\u63d2\u4ef6"},"\u6d4b\u8bd5NVIDIA\u8bbe\u5907\u63d2\u4ef6"),(0,t.yg)("p",null,"\u521b\u5efa\u4e00\u4e2aGPU\u6d4b\u8bd5\u7684YAML\u6587\u4ef6\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'# gpu-pod.yaml\n    apiVersion: v1\n    kind: Pod\n    metadata:\n      name: gpu-operator-test\n    spec:\n      restartPolicy: OnFailure\n      containers:\n      - name: cuda-vector-add\n        image: "nvidia/samples:vectoradd-cuda10.2"\n        resources:\n          limits:\n             nvidia.com/gpu: 1\n')),(0,t.yg)("p",null,"\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kubectl apply -f gpu-pod.yaml\n")),(0,t.yg)("p",null,"\u68c0\u67e5\u65e5\u5fd7\u4ee5\u786e\u4fdd\u5e94\u7528\u7a0b\u5e8f\u6210\u529f\u5b8c\u6210\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kubectl get pods gpu-operator-test\n\nNAME                READY   STATUS      RESTARTS   AGE\ngpu-operator-test   0/1     Completed   0          9d\n")),(0,t.yg)("p",null,"\u68c0\u67e5\u7ed3\u679c\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kubectl logs gpu-operator-test\n    \n[Vector addition of 50000 elements]\nCopy input data from the host memory to the CUDA device\nCUDA kernel launch with 196 blocks of 256 threads\nCopy output data from the CUDA device to the host memory\nTest PASSED\nDone\n")),(0,t.yg)("hr",null),(0,t.yg)("h2",{id:"\u542f\u7528gpu\u65f6\u95f4\u5207\u7247-\u53ef\u9009-"},"\u542f\u7528GPU\u65f6\u95f4\u5207\u7247( \u53ef\u9009 )"),(0,t.yg)("p",null,"GPU\u65f6\u95f4\u5206\u7247\u5141\u8bb8\u591a\u79df\u6237\u5171\u4eab\u5355\u4e2aGPU\u3002\n\u8981\u4e86\u89e3GPU\u65f6\u95f4\u5206\u7247\u7684\u5de5\u4f5c\u539f\u7406\uff0c\u8bf7\u53c2\u9605",(0,t.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/gpu-sharing.html#introduction"},(0,t.yg)("strong",{parentName:"a"},"\u5728Kubernetes\u4e2d\u4f7f\u7528GPU\u7684\u65f6\u95f4\u5207\u7247")),"\u3002\u6b64\u9875\u9762\u4ecb\u7ecd\u4e86\u4f7f\u7528 ",(0,t.yg)("a",{parentName:"p",href:"https://catalog.ngc.nvidia.com/orgs/nvidia/containers/gpu-operator"},(0,t.yg)("strong",{parentName:"a"},"NVIDIA GPU Operator")),"\u542f\u7528Yunikorn\u4e2dGPU\u8c03\u5ea6\u7684\u65b9\u6cd5\u3002"),(0,t.yg)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,t.yg)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u8bf4\u660e\u5728ConfigMap\u4e2d\u6307\u5b9a\u591a\u4e2a\u914d\u7f6e\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"# time-slicing-config.yaml\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: time-slicing-config\n  namespace: nvidia\ndata:\n    a100-40gb: |-\n        version: v1\n        sharing:\n          timeSlicing:\n            resources:\n            - name: nvidia.com/gpu\n              replicas: 8\n            - name: nvidia.com/mig-1g.5gb\n              replicas: 2\n            - name: nvidia.com/mig-2g.10gb\n              replicas: 2\n            - name: nvidia.com/mig-3g.20gb\n              replicas: 3\n            - name: nvidia.com/mig-7g.40gb\n              replicas: 7\n    rtx-3070: |-\n        version: v1\n        sharing:\n          timeSlicing:\n            resources:\n            - name: nvidia.com/gpu\n              replicas: 8\n")),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"\u5982\u679c\u8282\u70b9\u4e0a\u7684GPU\u7c7b\u578b\u4e0d\u5305\u62eca100-40gb\u6216rtx-3070\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u73b0\u6709\u7684GPU\u7c7b\u578b\u4fee\u6539YAML\u6587\u4ef6\u3002\u4f8b\u5982\uff0c\u5728\u672c\u5730Kubernetes\u96c6\u7fa4\u4e2d\u53ea\u6709\u591a\u4e2artx-2080ti\uff0c\u800crtx-2080ti\u4e0d\u652f\u6301MIG\uff0c\u56e0\u6b64\u65e0\u6cd5\u66ff\u4ee3a100-40gb\u3002\u4f46rtx-2080ti\u652f\u6301\u65f6\u95f4\u5207\u7247\uff0c\u56e0\u6b64\u53ef\u4ee5\u66ff\u4ee3rtx-3070\u3002")),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"MIG\u652f\u6301\u4e8e2020\u5e74\u6dfb\u52a0\u5230Kubernetes\u4e2d\u3002\u6709\u5173\u5176\u5de5\u4f5c\u539f\u7406\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,t.yg)("a",{parentName:"p",href:"https://www.google.com/url?q=https://docs.google.com/document/d/1mdgMQ8g7WmaI_XVVRrCvHPFPOMCm5LQD5JefgAh6N8g/edit&sa=D&source=editors&ust=1655578433019961&usg=AOvVaw1F-OezvM-Svwr1lLsdQmu3"},(0,t.yg)("strong",{parentName:"a"},"\u5728Kubernetes\u4e2d\u652f\u63f4MIG"))," \u3002")),(0,t.yg)("p",null,"\u5728operator\u547d\u540d\u7a7a\u95f4nvidia\uff0c\u521b\u5efa\u4e00\u4e2aConfigMap\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace nvidia\nkubectl create -f time-slicing-config.yaml\n")),(0,t.yg)("h3",{id:"\u5b89\u88c5nvidia-gpu-operator"},"\u5b89\u88c5NVIDIA GPU Operator"),(0,t.yg)("p",null,"\u6dfb\u52a0nvidia-gpu-operator Helm\u5b58\u50a8\u5e93\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"helm repo add nvidia https://helm.ngc.nvidia.com/nvidia\nhelm repo update\nhelm repo list\n")),(0,t.yg)("p",null,"\u4f7f\u7528NVIDIA GPU Operator\u542f\u7528\u5171\u4eabGPU\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5728\u542f\u7528\u65f6\u95f4\u5207\u7247\u7684\u60c5\u51b5\u4e0b\u9996\u6b21\u5b89\u88c5NVIDIA GPU Operator\u3002"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"helm install gpu-operator nvidia/gpu-operator \\\n    -n nvidia \\\n    --set devicePlugin.config.name=time-slicing-config\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5bf9\u4e8e\u5df2\u5b89\u88c5GPU Operator\u7684\u60c5\u51b5\u4e0b\uff0c\u52a8\u6001\u542f\u7528\u65f6\u95f4\u5207\u7247\u3002"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},'kubectl patch clusterpolicy/cluster-policy \\\n-n nvidia --type merge \\\n-p \'{"spec": {"devicePlugin": {"config": {"name": "time-slicing-config"}}}}\'\n')))),(0,t.yg)("h3",{id:"\u5e94\u7528\u65f6\u95f4\u5206\u7247\u914d\u7f6e"},"\u5e94\u7528\u65f6\u95f4\u5206\u7247\u914d\u7f6e"),(0,t.yg)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u96c6\u7fa4\u8303\u56f4")),(0,t.yg)("p",null,"\u901a\u8fc7\u4f20\u9012\u65f6\u95f4\u5206\u7247ConfigMap\u540d\u79f0\u548c\u9ed8\u8ba4\u914d\u7f6e\u6765\u5b89\u88c5GPU Operator\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},'kubectl patch clusterpolicy/cluster-policy \\\n  -n nvidia --type merge \\\n  -p \'{"spec": {"devicePlugin": {"config": {"name": "time-slicing-config", "default": "rtx-3070"}}}}\'\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5728\u7279\u5b9a\u8282\u70b9\u4e0a")),(0,t.yg)("p",null,"\u4f7f\u7528ConfigMap\u4e2d\u6240\u9700\u7684\u65f6\u95f4\u5207\u7247\u914d\u7f6e\u5bf9\u8282\u70b9\u8fdb\u884c\u6807\u8bb0\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl label node <node-name> nvidia.com/device-plugin.config=rtx-3070\n")),(0,t.yg)("p",null,"\u4e00\u65e6\u5b89\u88c5\u4e86GPU Operator\u548c\u65f6\u95f4\u5207\u7247GPU\uff0c\u68c0\u67e5Pod\u7684\u72b6\u6001\u4ee5\u786e\u4fdd\u6240\u6709\u5bb9\u5668\u90fd\u5728\u8fd0\u884c\uff0c\u5e76\u4e14\u9a8c\u8bc1\u5df2\u5b8c\u6210\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n nvidia\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                                                          READY   STATUS      RESTARTS   AGE\ngpu-feature-discovery-qbslx                                   2/2     Running     0          20h\ngpu-operator-7bdd8bf555-7clgv                                 1/1     Running     0          20h\ngpu-operator-node-feature-discovery-master-59b4b67f4f-q84zn   1/1     Running     0          20h\ngpu-operator-node-feature-discovery-worker-n58dv              1/1     Running     0          20h\nnvidia-container-toolkit-daemonset-8gv44                      1/1     Running     0          20h\nnvidia-cuda-validator-tstpk                                   0/1     Completed   0          20h\nnvidia-dcgm-exporter-pgk7v                                    1/1     Running     1          20h\nnvidia-device-plugin-daemonset-w8hh4                          2/2     Running     0          20h\nnvidia-device-plugin-validator-qrpxx                          0/1     Completed   0          20h\nnvidia-operator-validator-htp6b                               1/1     Running     0          20h\n")),(0,t.yg)("p",null,"\u9a8c\u8bc1\u65f6\u95f4\u5206\u7247\u914d\u7f6e\u662f\u5426\u6210\u529f\u5e94\u7528\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl describe node <node-name>\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"...\nCapacity:\n  nvidia.com/gpu: 8\n...\nAllocatable:\n  nvidia.com/gpu: 8\n...\n")),(0,t.yg)("h3",{id:"\u6d4b\u8bd5gpu\u65f6\u95f4\u5207\u7247"},"\u6d4b\u8bd5GPU\u65f6\u95f4\u5207\u7247"),(0,t.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u6d4b\u8bd5\u6587\u4ef6 plugin-test.yaml\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'# plugin-test.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nvidia-plugin-test\n  labels:\n    app: nvidia-plugin-test\nspec:\n  replicas: 5\n  selector:\n    matchLabels:\n      app: nvidia-plugin-test\n  template:\n    metadata:\n      labels:\n        app: nvidia-plugin-test\n    spec:\n      tolerations:\n        - key: nvidia.com/gpu\n          operator: Exists\n          effect: NoSchedule\n      containers:\n        - name: dcgmproftester11\n          image: nvidia/samples:dcgmproftester-2.1.7-cuda11.2.2-ubuntu20.04\n          command: ["/bin/sh", "-c"]\n          args:\n            - while true; do /usr/bin/dcgmproftester11 --no-dcgm-validation -t 1004 -d 300; sleep 30; done\n          resources:\n            limits:\n              nvidia.com/gpu: 1\n          securityContext:\n            capabilities:\n              add: ["SYS_ADMIN"]\n')),(0,t.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u591a\u4e2a\u526f\u672c\u7684\u90e8\u7f72\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f plugin-test.yaml\n")),(0,t.yg)("p",null,"\u9a8c\u8bc1\u6240\u6709\u4e94\u4e2a\u526f\u672c\u662f\u5426\u6b63\u5728\u8fd0\u884c\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5728Pod\u7fa4\u4e2d"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\n")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                                  READY   STATUS    RESTARTS   AGE\nnvidia-plugin-test-677775d6c5-bpsvn   1/1     Running   0          8m8s\nnvidia-plugin-test-677775d6c5-m95zm   1/1     Running   0          8m8s\nnvidia-plugin-test-677775d6c5-9kgzg   1/1     Running   0          8m8s\nnvidia-plugin-test-677775d6c5-lrl2c   1/1     Running   0          8m8s\nnvidia-plugin-test-677775d6c5-9r2pz   1/1     Running   0          8m8s\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5728\u8282\u70b9\u4e2d"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl describe node <node-name>\n")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"...\nAllocated resources:\n  (Total limits may be over 100 percent, i.e., overcommitted.)\n  Resource           Requests    Limits\n  --------           --------    ------\n  ...\n  nvidia.com/gpu     5           5\n...\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5728NVIDIA\u7cfb\u7edf\u7ba1\u7406\u754c\u9762\u4e2d"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"nvidia-smi\n")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"+-----------------------------------------------------------------------------+\n| NVIDIA-SMI 520.61.05    Driver Version: 520.61.05    CUDA Version: 11.8     |\n|-------------------------------+----------------------+----------------------+\n| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |\n|                               |                      |               MIG M. |\n|===============================+======================+======================|\n|   0  NVIDIA GeForce ...  On   | 00000000:01:00.0  On |                  N/A |\n| 46%   86C    P2   214W / 220W |   4297MiB /  8192MiB |    100%      Default |\n|                               |                      |                  N/A |\n+-------------------------------+----------------------+----------------------+\n                                                                              \n+-----------------------------------------------------------------------------+\n| Processes:                                                                  |\n|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |\n|        ID   ID                                                   Usage      |\n|=============================================================================|\n|    0   N/A  N/A   1776886      C   /usr/bin/dcgmproftester11         764MiB |\n|    0   N/A  N/A   1776921      C   /usr/bin/dcgmproftester11         764MiB |\n|    0   N/A  N/A   1776937      C   /usr/bin/dcgmproftester11         764MiB |\n|    0   N/A  N/A   1777068      C   /usr/bin/dcgmproftester11         764MiB |\n|    0   N/A  N/A   1777079      C   /usr/bin/dcgmproftester11         764MiB |\n+-----------------------------------------------------------------------------+\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5728Yunikorn\u7528\u6237\u754c\u9762\u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002\n",(0,t.yg)("img",{src:a(77284).c,width:"619",height:"298"})))))}c.isMDXComponent=!0},77284:(e,n,a)=>{a.d(n,{c:()=>r});const r=a.p+"assets/images/yunikorn-gpu-time-slicing-4116c040183147ddf56dd1b8a28d2265.png"}}]);