"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94760],{95788:(e,n,i)=>{i.d(n,{Iu:()=>g,yg:()=>m});var a=i(11504);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var s=a.createContext({}),p=function(e){var n=a.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},g=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(i),d=t,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return i?a.createElement(m,l(l({ref:n},g),{},{components:i})):a.createElement(m,l({ref:n},g))}));function m(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:t,l[1]=o;for(var p=2;p<r;p++)l[p]=i[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},63600:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=i(45072),t=(i(11504),i(95788));const r={id:"run_nvidia",title:"Run NVIDIA GPU Jobs",description:"How to run generic example of GPU scheduling with Yunikorn.",keywords:["NVIDIA GPU"]},l=void 0,o={unversionedId:"user_guide/workloads/run_nvidia",id:"version-1.2.0/user_guide/workloads/run_nvidia",title:"Run NVIDIA GPU Jobs",description:"How to run generic example of GPU scheduling with Yunikorn.",source:"@site/versioned_docs/version-1.2.0/user_guide/workloads/run_nvidia.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_nvidia",permalink:"/docs/1.2.0/user_guide/workloads/run_nvidia",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"run_nvidia",title:"Run NVIDIA GPU Jobs",description:"How to run generic example of GPU scheduling with Yunikorn.",keywords:["NVIDIA GPU"]},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/1.2.0/user_guide/workloads/workload_overview"},next:{title:"Run Spark Jobs",permalink:"/docs/1.2.0/user_guide/workloads/run_spark"}},s={},p=[{value:"Yunikorn with NVIDIA GPUs",id:"yunikorn-with-nvidia-gpus",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Install NVIDIA Device Plugin",id:"install-nvidia-device-plugin",level:3},{value:"Testing NVIDIA Device Plugin",id:"testing-nvidia-device-plugin",level:3},{value:"Enable GPU Time-Slicing (Optional)",id:"enable-gpu-time-slicing-optional",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Install NVIDIA GPU Operator",id:"install-nvidia-gpu-operator",level:3},{value:"Applying the Time-Slicing Configuration",id:"applying-the-time-slicing-configuration",level:3},{value:"Testing GPU Time-Slicing",id:"testing-gpu-time-slicing",level:3}],g={toc:p},u="wrapper";function c(e){let{components:n,...r}=e;return(0,t.yg)(u,(0,a.c)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"yunikorn-with-nvidia-gpus"},"Yunikorn with NVIDIA GPUs"),(0,t.yg)("p",null,"This guide gives an overview of how to set up NVIDIA Device Plugin which enable user to run GPUs with Yunikorn, for more details please check ",(0,t.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/datacenter/cloud-native/kubernetes/install-k8s.html#option-2-installing-kubernetes-using-kubeadm"},(0,t.yg)("strong",{parentName:"a"},"Kubernetes with GPUs")),"."),(0,t.yg)("h3",{id:"prerequisite"},"Prerequisite"),(0,t.yg)("p",null,"Before following the steps below, Yunikorn need to deploy on the ",(0,t.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/datacenter/cloud-native/kubernetes/install-k8s.html#install-kubernetes"},(0,t.yg)("strong",{parentName:"a"},"Kubernetes with GPUs")),"."),(0,t.yg)("h3",{id:"install-nvidia-device-plugin"},"Install NVIDIA Device Plugin"),(0,t.yg)("p",null,"Add the nvidia-device-plugin helm repository."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"helm repo add nvdp https://nvidia.github.io/k8s-device-plugin\nhelm repo update\nhelm repo list\n")),(0,t.yg)("p",null,"Verify the latest release version of the plugin is available."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"helm search repo nvdp --devel\nNAME                          CHART VERSION  APP VERSION       DESCRIPTION\nnvdp/nvidia-device-plugin     0.12.3         0.12.3         A Helm chart for ...\n")),(0,t.yg)("p",null,"Deploy the device plugin"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kubectl create namespace nvidia\nhelm install --generate-name nvdp/nvidia-device-plugin --namespace nvidia --version 0.12.3\n")),(0,t.yg)("p",null,"Check the status of the pods to ensure NVIDIA device plugin is running"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kubectl get pods -A\n\nNAMESPACE      NAME                                      READY   STATUS    RESTARTS      AGE\nkube-flannel   kube-flannel-ds-j24fx                     1/1     Running   1 (11h ago)   11h\nkube-system    coredns-78fcd69978-2x9l8                  1/1     Running   1 (11h ago)   11h\nkube-system    coredns-78fcd69978-gszrw                  1/1     Running   1 (11h ago)   11h\nkube-system    etcd-katlantyss-nzxt                      1/1     Running   3 (11h ago)   11h\nkube-system    kube-apiserver-katlantyss-nzxt            1/1     Running   4 (11h ago)   11h\nkube-system    kube-controller-manager-katlantyss-nzxt   1/1     Running   3 (11h ago)   11h\nkube-system    kube-proxy-4wz7r                          1/1     Running   1 (11h ago)   11h\nkube-system    kube-scheduler-katlantyss-nzxt            1/1     Running   4 (11h ago)   11h\nkube-system    nvidia-device-plugin-1659451060-c92sb     1/1     Running   1 (11h ago)   11h\n")),(0,t.yg)("h3",{id:"testing-nvidia-device-plugin"},"Testing NVIDIA Device Plugin"),(0,t.yg)("p",null,"Create a gpu test yaml file."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'# gpu-pod.yaml\n    apiVersion: v1\n    kind: Pod\n    metadata:\n      name: gpu-operator-test\n    spec:\n      restartPolicy: OnFailure\n      containers:\n      - name: cuda-vector-add\n        image: "nvidia/samples:vectoradd-cuda10.2"\n        resources:\n          limits:\n             nvidia.com/gpu: 1\n')),(0,t.yg)("p",null,"Deploy the application."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kubectl apply -f gpu-pod.yaml\n")),(0,t.yg)("p",null,"Check the logs to ensure the app completed successfully."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kubectl get pods gpu-operator-test\n\nNAME                READY   STATUS      RESTARTS   AGE\ngpu-operator-test   0/1     Completed   0          9d\n")),(0,t.yg)("p",null,"Check the result."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kubectl logs gpu-operator-test\n    \n[Vector addition of 50000 elements]\nCopy input data from the host memory to the CUDA device\nCUDA kernel launch with 196 blocks of 256 threads\nCopy output data from the CUDA device to the host memory\nTest PASSED\nDone\n")),(0,t.yg)("hr",null),(0,t.yg)("h2",{id:"enable-gpu-time-slicing-optional"},"Enable GPU Time-Slicing (Optional)"),(0,t.yg)("p",null,"GPU time-slicing allow multi-tenant to share single GPU.\nTo know how the GPU time-slicing works, please refer to ",(0,t.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/gpu-sharing.html#introduction"},(0,t.yg)("strong",{parentName:"a"},"Time-Slicing GPUs in Kubernetes")),". This page covers ways to enable GPU scheduling in Yunikorn using ",(0,t.yg)("a",{parentName:"p",href:"https://catalog.ngc.nvidia.com/orgs/nvidia/containers/gpu-operator"},(0,t.yg)("strong",{parentName:"a"},"NVIDIA GPU Operator")),"."),(0,t.yg)("h3",{id:"configuration"},"Configuration"),(0,t.yg)("p",null,"Specify multiple configurations in a ",(0,t.yg)("inlineCode",{parentName:"p"},"ConfigMap")," as in the following example."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"# time-slicing-config.yaml\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: time-slicing-config\n  namespace: nvidia\ndata:\n    a100-40gb: |-\n        version: v1\n        sharing:\n          timeSlicing:\n            resources:\n            - name: nvidia.com/gpu\n              replicas: 8\n            - name: nvidia.com/mig-1g.5gb\n              replicas: 2\n            - name: nvidia.com/mig-2g.10gb\n              replicas: 2\n            - name: nvidia.com/mig-3g.20gb\n              replicas: 3\n            - name: nvidia.com/mig-7g.40gb\n              replicas: 7\n    rtx-3070: |-\n        version: v1\n        sharing:\n          timeSlicing:\n            resources:\n            - name: nvidia.com/gpu\n              replicas: 8\n")),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"If the GPU type in nodes do not include the a100-40gb or rtx-3070, you could modify the yaml file based on existing GPU types.\nFor example, there are only multiple rtx-2080ti in the local kubernetes cluster.\nMIG is not supported by rtx-2080ti, so it could not replace the a100-40gb.\nTime slicing is supported by rtx-2080ti, so it could replace rtx-3070.")),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"MIG support was added to Kubernetes in 2020. Refer to ",(0,t.yg)("a",{parentName:"p",href:"https://www.google.com/url?q=https://docs.google.com/document/d/1mdgMQ8g7WmaI_XVVRrCvHPFPOMCm5LQD5JefgAh6N8g/edit&sa=D&source=editors&ust=1655578433019961&usg=AOvVaw1F-OezvM-Svwr1lLsdQmu3"},(0,t.yg)("strong",{parentName:"a"},"Supporting MIG in Kubernetes"))," for details on how this works.")),(0,t.yg)("p",null,"Create a ",(0,t.yg)("inlineCode",{parentName:"p"},"ConfigMap")," in the operator namespace. "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace nvidia\nkubectl create -f time-slicing-config.yaml\n")),(0,t.yg)("h3",{id:"install-nvidia-gpu-operator"},"Install NVIDIA GPU Operator"),(0,t.yg)("p",null,"Add the nvidia-gpu-operator helm repository."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"helm repo add nvidia https://helm.ngc.nvidia.com/nvidia\nhelm repo update\nhelm repo list\n")),(0,t.yg)("p",null,"Enabling shared access to GPUs with the NVIDIA GPU Operator."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"During fresh install of the NVIDIA GPU Operator with time-slicing enabled."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"helm install gpu-operator nvidia/gpu-operator \\\n    -n nvidia \\\n    --set devicePlugin.config.name=time-slicing-config\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"For dynamically enabling time-slicing with GPU Operator already installed."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},'kubectl patch clusterpolicy/cluster-policy \\\n-n nvidia --type merge \\\n-p \'{"spec": {"devicePlugin": {"config": {"name": "time-slicing-config"}}}}\'\n')))),(0,t.yg)("h3",{id:"applying-the-time-slicing-configuration"},"Applying the Time-Slicing Configuration"),(0,t.yg)("p",null,"There are two methods:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Across the cluster"),(0,t.yg)("p",{parentName:"li"},"Install the GPU Operator by passing the time-slicing ",(0,t.yg)("inlineCode",{parentName:"p"},"ConfigMap")," name and the default configuration."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},'kubectl patch clusterpolicy/cluster-policy \\\n  -n nvidia --type merge \\\n  -p \'{"spec": {"devicePlugin": {"config": {"name": "time-slicing-config", "default": "rtx-3070"}}}}\'\n'))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"On certain nodes"),(0,t.yg)("p",{parentName:"li"},"Label the node with the required time-slicing configuration in the ",(0,t.yg)("inlineCode",{parentName:"p"},"ConfigMap"),"."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl label node <node-name> nvidia.com/device-plugin.config=rtx-3070\n")))),(0,t.yg)("p",null,"Once the GPU Operator and Time-Slicing GPUs is installed, check the status of the pods to ensure all the containers are running and the validation is complete."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n nvidia\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                                                          READY   STATUS      RESTARTS   AGE\ngpu-feature-discovery-qbslx                                   2/2     Running     0          20h\ngpu-operator-7bdd8bf555-7clgv                                 1/1     Running     0          20h\ngpu-operator-node-feature-discovery-master-59b4b67f4f-q84zn   1/1     Running     0          20h\ngpu-operator-node-feature-discovery-worker-n58dv              1/1     Running     0          20h\nnvidia-container-toolkit-daemonset-8gv44                      1/1     Running     0          20h\nnvidia-cuda-validator-tstpk                                   0/1     Completed   0          20h\nnvidia-dcgm-exporter-pgk7v                                    1/1     Running     1          20h\nnvidia-device-plugin-daemonset-w8hh4                          2/2     Running     0          20h\nnvidia-device-plugin-validator-qrpxx                          0/1     Completed   0          20h\nnvidia-operator-validator-htp6b                               1/1     Running     0          20h\n")),(0,t.yg)("p",null,"Verify that the time-slicing configuration is applied successfully."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl describe node <node-name>\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"...\nCapacity:\n  nvidia.com/gpu: 8\n...\nAllocatable:\n  nvidia.com/gpu: 8\n...\n")),(0,t.yg)("h3",{id:"testing-gpu-time-slicing"},"Testing GPU Time-Slicing"),(0,t.yg)("p",null,"Create a wordload test file ",(0,t.yg)("inlineCode",{parentName:"p"},"plugin-test.yaml"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'# plugin-test.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nvidia-plugin-test\n  labels:\n    app: nvidia-plugin-test\nspec:\n  replicas: 5\n  selector:\n    matchLabels:\n      app: nvidia-plugin-test\n  template:\n    metadata:\n      labels:\n        app: nvidia-plugin-test\n    spec:\n      tolerations:\n        - key: nvidia.com/gpu\n          operator: Exists\n          effect: NoSchedule\n      containers:\n        - name: dcgmproftester11\n          image: nvidia/samples:dcgmproftester-2.1.7-cuda11.2.2-ubuntu20.04\n          command: ["/bin/sh", "-c"]\n          args:\n            - while true; do /usr/bin/dcgmproftester11 --no-dcgm-validation -t 1004 -d 300; sleep 30; done\n          resources:\n            limits:\n              nvidia.com/gpu: 1\n          securityContext:\n            capabilities:\n              add: ["SYS_ADMIN"]\n')),(0,t.yg)("p",null,"Create a deployment with multiple replicas."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f plugin-test.yaml\n")),(0,t.yg)("p",null,"Verify that all five replicas are running."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"In pods"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\n")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                                  READY   STATUS    RESTARTS   AGE\nnvidia-plugin-test-677775d6c5-bpsvn   1/1     Running   0          8m8s\nnvidia-plugin-test-677775d6c5-m95zm   1/1     Running   0          8m8s\nnvidia-plugin-test-677775d6c5-9kgzg   1/1     Running   0          8m8s\nnvidia-plugin-test-677775d6c5-lrl2c   1/1     Running   0          8m8s\nnvidia-plugin-test-677775d6c5-9r2pz   1/1     Running   0          8m8s\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"In node"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl describe node <node-name>\n")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"...\nAllocated resources:\n  (Total limits may be over 100 percent, i.e., overcommitted.)\n  Resource           Requests    Limits\n  --------           --------    ------\n  ...\n  nvidia.com/gpu     5           5\n...\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"In NVIDIA system management Interface"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"nvidia-smi\n")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"+-----------------------------------------------------------------------------+\n| NVIDIA-SMI 520.61.05    Driver Version: 520.61.05    CUDA Version: 11.8     |\n|-------------------------------+----------------------+----------------------+\n| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |\n|                               |                      |               MIG M. |\n|===============================+======================+======================|\n|   0  NVIDIA GeForce ...  On   | 00000000:01:00.0  On |                  N/A |\n| 46%   86C    P2   214W / 220W |   4297MiB /  8192MiB |    100%      Default |\n|                               |                      |                  N/A |\n+-------------------------------+----------------------+----------------------+\n                                                                              \n+-----------------------------------------------------------------------------+\n| Processes:                                                                  |\n|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |\n|        ID   ID                                                   Usage      |\n|=============================================================================|\n|    0   N/A  N/A   1776886      C   /usr/bin/dcgmproftester11         764MiB |\n|    0   N/A  N/A   1776921      C   /usr/bin/dcgmproftester11         764MiB |\n|    0   N/A  N/A   1776937      C   /usr/bin/dcgmproftester11         764MiB |\n|    0   N/A  N/A   1777068      C   /usr/bin/dcgmproftester11         764MiB |\n|    0   N/A  N/A   1777079      C   /usr/bin/dcgmproftester11         764MiB |\n+-----------------------------------------------------------------------------+\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"In Yunikorn UI applications\n",(0,t.yg)("img",{src:i(26480).c,width:"619",height:"298"})))))}c.isMDXComponent=!0},26480:(e,n,i)=>{i.d(n,{c:()=>a});const a=i.p+"assets/images/yunikorn-gpu-time-slicing-4116c040183147ddf56dd1b8a28d2265.png"}}]);