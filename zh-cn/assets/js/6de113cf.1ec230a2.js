"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74248],{95788:(e,n,a)=>{a.d(n,{Iu:()=>s,yg:()=>u});var t=a(11504);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=c(a),y=r,u=g["".concat(l,".").concat(y)]||g[y]||m[y]||i;return a?t.createElement(u,p(p({ref:n},s),{},{components:a})):t.createElement(u,p({ref:n},s))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=y;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:r,p[1]=o;for(var c=2;c<i;c++)p[c]=a[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},24132:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=a(45072),r=(a(11504),a(95788));const i={id:"openshift_development",title:"Development in CodeReady Containers"},p=void 0,o={unversionedId:"developer_guide/openshift_development",id:"developer_guide/openshift_development",title:"Development in CodeReady Containers",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/developer_guide/openshift_development.md",sourceDirName:"developer_guide",slug:"/developer_guide/openshift_development",permalink:"/zh-cn/docs/next/developer_guide/openshift_development",draft:!1,tags:[],version:"current",frontMatter:{id:"openshift_development",title:"Development in CodeReady Containers"},sidebar:"docs",previous:{title:"Deploy to Kubernetes",permalink:"/zh-cn/docs/next/developer_guide/deployment"},next:{title:"\u7ffb\u8bd1",permalink:"/zh-cn/docs/next/developer_guide/translation"}},l={},c=[{value:"\u8bbe\u7f6e\u6b63\u5728\u8fd0\u884c\u7684 CRC \u96c6\u7fa4",id:"\u8bbe\u7f6e\u6b63\u5728\u8fd0\u884c\u7684-crc-\u96c6\u7fa4",level:2},{value:"\u6d4b\u8bd5\u8865\u4e01",id:"\u6d4b\u8bd5\u8865\u4e01",level:2},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u955c\u50cf",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u955c\u50cf",level:2},{value:"Podman",id:"podman",level:3},{value:"\u76f4\u63a5\u63a8\u9001 OS \u955c\u50cf\u6ce8\u518c",id:"\u76f4\u63a5\u63a8\u9001-os-\u955c\u50cf\u6ce8\u518c",level:2}],s={toc:c},g="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(g,(0,t.c)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"YuniKorn \u9488\u5bf9 OpenShift \u8fdb\u884c\u4e86\u6d4b\u8bd5\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u8bbe\u7f6e\u672c\u5730\u73af\u5883\u6765\u9488\u5bf9 OpenShift \u6d4b\u8bd5\u8865\u4e01\u3002\n\u6211\u4eec\u63a8\u8350\u672c\u5730\u73af\u5883\u4f7f\u7528 CodeReady \u5bb9\u5668\u3002"),(0,r.yg)("h2",{id:"\u8bbe\u7f6e\u6b63\u5728\u8fd0\u884c\u7684-crc-\u96c6\u7fa4"},"\u8bbe\u7f6e\u6b63\u5728\u8fd0\u884c\u7684 CRC \u96c6\u7fa4"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e0b\u8f7d CodeReady \u5bb9\u5668\u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,r.yg)("p",{parentName:"li"}," \u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u60a8\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u7136\u540e\u5355\u51fb\u201c\u4e0b\u8f7d\u201d\uff08\u5728 Mac \u4e0a\uff0c\u60a8\u5c06\u4e0b\u8f7d crc-macos-amd64.tar.xz\uff1b\u5728 Linux \u4e0a\uff0ccrc-linux-amd64.tar.xz\uff09\u3002\n\u7cfb\u7edf\u4f1a\u8981\u6c42\u60a8\u4f7f\u7528 Red Hat \u767b\u5f55\u540d\u8fdb\u884c\u8fde\u63a5\u3002 \u5982\u679c\u60a8\u6ca1\u6709\uff0c\u53ea\u9700\u5355\u51fb\u201c\u7acb\u5373\u521b\u5efa\u201d\u3002 \u60a8 ",(0,r.yg)("em",{parentName:"p"},"\u4e0d")," \u9700\u8981 Red Hat \u8ba2\u9605\u3002"),(0,r.yg)("p",{parentName:"li"},"\u767b\u5f55\u540e\uff0c\u4e0b\u8f7d CodeReady Containers \u4e8c\u8fdb\u5236\u6587\u4ef6\u548c pull secret\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u89e3\u538b\u7f29 tar \u6587\u4ef6\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"tar -xvzf crc-macos-amd64.tar.xz\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06 crc \u4e8c\u8fdb\u5236\u6587\u4ef6\u79fb\u5230\u60a8\u7684\u8def\u5f84\u4e0b\u3002 \u50cf"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo cp `pwd`/crc-macos-$CRCVERSION-amd64/crc /usr/local/bin\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6839\u636e\u60a8\u7684\u786c\u4ef6\u80fd\u529b\u914d\u7f6e CRC \u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"crc config set memory 16000\ncrc config set cpus 12\ncrc setup\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u542f\u52a8 CRC \u5e76\u6253\u5f00\u63a7\u5236\u53f0\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"crc start --pull-secret-file pull-secret.txt\ncrc console\n")))),(0,r.yg)("h2",{id:"\u6d4b\u8bd5\u8865\u4e01"},"\u6d4b\u8bd5\u8865\u4e01"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u5047\u8bbe\u60a8\u7684\u7b14\u8bb0\u672c\u7535\u8111\u4e2d\u6709\u4e00\u4e2a\u6b63\u5728\u8fd0\u884c\u7684 CRC \u96c6\u7fa4\u3002 "),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u8fd9\u4e9b\u6b65\u9aa4\u672a\u9488\u5bf9\u8fdc\u7a0b CRC \u96c6\u7fa4\u8fdb\u884c\u6d4b\u8bd5\u3002")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"oc")," \u547d\u4ee4\u8bbf\u95ee\u60a8\u7684\u73af\u5883\u3002"),(0,r.yg)("p",{parentName:"li"},"\u5728 shell \u4e2d\u8f93\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"crc oc-env")," \u547d\u4ee4\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'$ crc oc-env\nexport PATH="/Users/<user>/.crc/bin/oc:$PATH"\n# Run this command to configure your shell:\n# eval $(crc oc-env)\n')),(0,r.yg)("p",{parentName:"li"},"\u6240\u4ee5\u4f60\u9700\u8981\u8f93\u5165\u8fd9\u4e2a\u6765\u8bbf\u95ee ",(0,r.yg)("inlineCode",{parentName:"p"},"oc")," \u547d\u4ee4\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"eval $(crc oc-env)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u767b\u5f55\u5230 \u201coc\u201d \u3002 CRC \u542f\u52a8\u540e\uff0c\u5b83\u4f1a\u663e\u793a\u7c7b\u4f3c\u7684\u6d88\u606f\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"To access the cluster, first set up your environment by following 'crc oc-env' instructions.\nThen you can access it by running 'oc login -u developer -p developer https://api.crc.testing:6443'.\nTo login as an admin, run 'oc login -u kubeadmin -p duduw-yPT9Z-hsUpq-f3pre https://api.crc.testing:6443'.\nTo access the cluster, first set up your environment by following 'crc oc-env' instructions.\n")),(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"oc login -u kubeadmin ...")," \u547d\u4ee4\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6\u672c\u5730 OpenShift \u96c6\u7fa4\u7684\u5185\u90e8\u79c1\u6709 Docker \u5b58\u50a8\u5e93\u7684 URL\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ oc get route default-route -n openshift-image-registry --template='{{ .spec.host }}'\ndefault-route-openshift-image-registry.apps-crc.testing\n")),(0,r.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u5e94\u8be5\u662f \u201cdefault-route-openshift-image-registry.apps-crc.testing\u201d \u3002 \u5982\u679c\u663e\u793a\u7684 URL \u4e0d\u540c\uff0c\u8bf7\u66f4\u6539\u4e0a\u8ff0\u6b65\u9aa4\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u51c6\u5907 Docker \u955c\u50cf\u3002"),(0,r.yg)("p",{parentName:"li"},"\u60a8\u53ef\u4ee5\u5728\u5e95\u90e8\u7684 ",(0,r.yg)("em",{parentName:"p"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u955c\u50cf")," \u90e8\u5206\u9605\u8bfb\u66f4\u591a\u76f8\u5173\u4fe1\u606f\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u51c6\u5907 helm chart."),(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u60a8\u60f3\u4f7f\u7528\u81ea\u5b9a\u4e49 Docker \u955c\u50cf\uff0c\u8bf7\u66ff\u6362 helm chart \u7684 \u201cvalues.yaml\u201d \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u955c\u50cf\u3002"),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u76f4\u63a5\u5c06 Docker \u955c\u50cf\u624b\u52a8\u63a8\u9001\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"default-route-openshift-image-registry.apps-crc.testing")," docker registry \uff0c\u60a8\u9700\u8981\u6709\u6709\u6548\u7684\u8bc1\u4e66\u624d\u80fd\u8bbf\u95ee\u5b83\u3002\n\u5728 OpenShift \u4e0a\u6709\u66f4\u5bb9\u6613\u4f7f\u7528\u7684\u670d\u52a1\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"image-registry.openshift-image-registry.svc"),"\u3002")),(0,r.yg)("p",{parentName:"li"},"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u60f3\u8986\u76d6\u6240\u6709 Docker \u955c\u50cf\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"image:\n  repository: image-registry.openshift-image-registry.svc:5000/yunikorn/yunikorn\n  tag: scheduler-latest\n  pullPolicy: Always\n\nadmission_controller_image:\n  repository: image-registry.openshift-image-registry.svc:5000/yunikorn/yunikorn\n  tag: admission-latest\n  pullPolicy: Always\n\nweb_image:\n  repository: image-registry.openshift-image-registry.svc:5000/yunikorn/yunikorn-web\n  tag: latest\n  pullPolicy: Always\n")),(0,r.yg)("p",{parentName:"li"},"\u60a8\u53ef\u4ee5\u5728 yunikorn-release \u5b58\u50a8\u5e93\u7684 helm chart \u76ee\u5f55\u4e2d\u627e\u5230\u5b83\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5b89\u88c5 helm charts."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"helm install yunikorn . -n yunikorn\n")))),(0,r.yg)("h2",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u955c\u50cf"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u955c\u50cf"),(0,r.yg)("h3",{id:"podman"},"Podman"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u767b\u5f55 Podman\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman login --tls-verify=false -u kubeadmin -p $(oc whoami -t) default-route-openshift-image-registry.apps-crc.testing\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728\u5b58\u50a8\u5e93\u4e2d\u6784\u5efa\u955c\u50cf\uff0c\u4f8b\u5982 \u5728 shim \u4e2d\u4f7f\u7528\u901a\u7528\u7684 \u201cmake image\u201d \u547d\u4ee4\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u9a8c\u8bc1\u955c\u50cf\u662f\u5426\u5b58\u5728\u4e8e\u5b58\u50a8\u5e93\u4e2d\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman images\nREPOSITORY                TAG              IMAGE ID     CREATED            SIZE\nlocalhost/apache/yunikorn admission-latest 19eb41241d64 About a minute ago 53.5 MB\nlocalhost/apache/yunikorn scheduler-latest e60e09b424d9 About a minute ago 543 MB\n")))),(0,r.yg)("h2",{id:"\u76f4\u63a5\u63a8\u9001-os-\u955c\u50cf\u6ce8\u518c"},"\u76f4\u63a5\u63a8\u9001 OS \u955c\u50cf\u6ce8\u518c"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u60a8\u8981\u66ff\u6362\u7684\u955c\u50cf\u3002"),(0,r.yg)("p",{parentName:"li"},"\u60a8\u53ef\u4ee5\u5728\u672c\u5730\u6784\u5efa\u65b0\u955c\u50cf\u6216\u4f7f\u7528\u5b98\u65b9\u955c\u50cf\uff08\u4e5f\u53ef\u4ee5\u6df7\u5408\u4f7f\u7528\uff09\u3002"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5bf9\u4e8e -shim \u548c -web \u955c\u50cf\u68c0\u67e5\u5b58\u50a8\u5e93\uff08\u53ef\u9009\u62e9\u8fdb\u884c\u66f4\u6539\uff09\u5e76\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"make clean image REGISTRY=default-route-openshift-image-registry.apps-crc.testing/<project>/<name>:<tag>\n")),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u5728 OpenShift \u4e2d\uff0c\u4e00\u4e2a\u8ba1\u5212\u76f8\u5f53\u4e8e\u4e00\u4e2a Kubernetes \u547d\u540d\u7a7a\u95f4\u3002 \u63a8\u8350\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn")," \u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u3002"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528\u5b98\u65b9\u955c\u50cf\uff0c\u901a\u8fc7 \u201cdocker tag\u201d \u547d\u4ee4\u91cd\u65b0\u6807\u8bb0\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker tag apache/yunikorn:scheduler-latest default-route-openshift-image-registry.apps-crc.testing/yunikorn/yunikorn:scheduler-latest\n"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u767b\u5f55\u5230 Docker \u5b58\u50a8\u5e93\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker login -u kubeadmin -p $(oc whoami -t) default-route-openshift-image-registry.apps-crc.testing\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06 Docker \u955c\u50cf\u63a8\u9001\u5230\u5185\u90e8 Docker \u5b58\u50a8\u5e93"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"docker push default-route-openshift-image-registry.apps-crc.testing/yunikorn/yunikorn:scheduler-latest\n")))))}m.isMDXComponent=!0}}]);