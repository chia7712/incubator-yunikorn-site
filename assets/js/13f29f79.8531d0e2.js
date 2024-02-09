"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41020],{95788:(e,a,r)=>{r.d(a,{Iu:()=>u,yg:()=>g});var n=r(11504);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=n.createContext({}),s=function(e){var a=n.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},u=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=t,g=p["".concat(c,".").concat(d)]||p[d]||h[d]||l;return r?n.createElement(g,i(i({ref:a},u),{},{components:r})):n.createElement(g,i({ref:a},u))}));function g(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[p]="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45344:(e,a,r)=>{r.r(a),r.d(a,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(45072),t=(r(11504),r(95788));const l={id:"download",title:"Apache YuniKorn"},i=void 0,o={type:"mdx",permalink:"/community/download",source:"@site/src/pages/community/download.md",title:"Apache YuniKorn",description:"\x3c!--",frontMatter:{id:"download",title:"Apache YuniKorn"}},c=[{value:"Verifying the signature",id:"verifying-the-signature",level:2},{value:"Verifying the checksum",id:"verifying-the-checksum",level:2},{value:"Verifying the release",id:"verifying-the-release",level:2},{value:"Older releases",id:"older-releases",level:2},{value:"License",id:"license",level:2}],s={toc:c},u="wrapper";function p(e){let{components:a,...r}=e;return(0,t.yg)(u,(0,n.c)({},s,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"apache-yunikorn"},"Apache YuniKorn"),(0,t.yg)("p",null,"Apache YuniKorn is released as source code tarballs.\nThe downloads for the latest release are distributed via mirror sites.\nOlder releases can be downloaded from the Apache archive site.\nAll release artifacts should be checked for tampering using GPG or SHA-512."),(0,t.yg)("p",null,"We publish prebuilt docker images for everyone's convenience."),(0,t.yg)("p",null,"The latest release of Apache YuniKorn is v1.4.0."),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Version"),(0,t.yg)("th",{parentName:"tr",align:null},"Release date"),(0,t.yg)("th",{parentName:"tr",align:null},"Source download"),(0,t.yg)("th",{parentName:"tr",align:null},"Docker images"),(0,t.yg)("th",{parentName:"tr",align:null},"Release notes"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"v1.4.0"),(0,t.yg)("td",{parentName:"tr",align:null},"2023-11-20"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"https://downloads.apache.org/yunikorn/1.4.0/apache-yunikorn-1.4.0-src.tar.gz"},"Download"),(0,t.yg)("br",null),(0,t.yg)("a",{parentName:"td",href:"https://downloads.apache.org/yunikorn/1.4.0/apache-yunikorn-1.4.0-src.tar.gz.sha512"},"Checksum")," & ",(0,t.yg)("a",{parentName:"td",href:"https://downloads.apache.org/yunikorn/1.4.0/apache-yunikorn-1.4.0-src.tar.gz.asc"},"Signature")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/scheduler-1.4.0/images/sha256-d013be8e3ad7eb8e51ce23951e6899a4b74088e52c3767f3fcc7efcdcc0904f5?context=explore"},"scheduler"),(0,t.yg)("br",null),(0,t.yg)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/admission-1.4.0/images/sha256-d93cd7cb480d8bd0ae829d88484b5c8b8f89c843dd0ea48694a636cc0bb00e07?context=explore"},"admission-controller"),(0,t.yg)("br",null),(0,t.yg)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/web-1.4.0/images/sha256-60a732eb04a9690214d2d2f852058a501585091901fb9c0faf66a378e710d452?context=explore"},"web"),(0,t.yg)("br",null),(0,t.yg)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/scheduler-plugin-1.4.0/images/sha256-7a82c87f4f6caf950529478851f0aaa5da2b225668325ee50b7422c477804e02?context=explore"},"scheduler plugin")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"/release-announce/1.4.0"},"Announcement"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"v1.3.0"),(0,t.yg)("td",{parentName:"tr",align:null},"2023-06-12"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"https://archive.apache.org/dist/yunikorn/1.3.0/apache-yunikorn-1.3.0-src.tar.gz"},"Download"),(0,t.yg)("br",null),(0,t.yg)("a",{parentName:"td",href:"https://archive.apache.org/dist/yunikorn/1.3.0/apache-yunikorn-1.3.0-src.tar.gz.sha512"},"Checksum")," & ",(0,t.yg)("a",{parentName:"td",href:"https://archive.apache.org/dist/yunikorn/1.3.0/apache-yunikorn-1.3.0-src.tar.gz.asc"},"Signature")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/scheduler-1.3.0/images/sha256-99a1973728c6684b1da7631dbf015daa1dbf519dbab1ffc8b23fccdfa7ffd0c5?context=explore"},"scheduler"),(0,t.yg)("br",null),(0,t.yg)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/admission-1.3.0/images/sha256-3fb41eafcb16ec709879301f0f1cf5ffd18d95e6bb266b20e2971c39c6f6fc94?context=explore"},"admission-controller"),(0,t.yg)("br",null),(0,t.yg)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/web-1.3.0/images/sha256-47c1ff0b58c2c0833bf8662065f7517b8e235dbc2197a9511549ec2ee4b31969?context=explore"},"web"),(0,t.yg)("br",null),(0,t.yg)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/scheduler-plugin-1.3.0/images/sha256-c3c564033dd8ea07d2f7c5fe272be43b8eba7e7b115ac9b5bee4cf8cae681cd9?context=explore"},"scheduler plugin")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"/release-announce/1.3.0"},"Announcement"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"v1.2.0"),(0,t.yg)("td",{parentName:"tr",align:null},"2023-02-02"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"https://archive.apache.org/dist/yunikorn/1.2.0/apache-yunikorn-1.2.0-src.tar.gz"},"Download"),(0,t.yg)("br",null),(0,t.yg)("a",{parentName:"td",href:"https://archive.apache.org/dist/yunikorn/1.2.0/apache-yunikorn-1.2.0-src.tar.gz.sha512"},"Checksum")," & ",(0,t.yg)("a",{parentName:"td",href:"https://archive.apache.org/dist/yunikorn/1.2.0/apache-yunikorn-1.2.0-src.tar.gz.asc"},"Signature")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/scheduler-1.2.0/images/sha256-c3b1a7b2cfec3f3560415519278cc4d94748f0f60ee80dfaf23fcc22dbb8b8e5"},"scheduler"),(0,t.yg)("br",null),(0,t.yg)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/admission-1.2.0/images/sha256-7f18fcd080640974ae586d30eda009daf0ad93fa22ada66b0a337ac3fb46b7ac"},"admission-controller"),(0,t.yg)("br",null),(0,t.yg)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/web-1.2.0/images/sha256-706a2895461623f20d4102f0132d66dade9c15edf5cad40065506a4d70c32576"},"web"),(0,t.yg)("br",null),(0,t.yg)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/scheduler-plugin-1.2.0/images/sha256-d946495946b89d03f7a8f786702d4b350a93f74d52e50bebb6b2bbdcb8e911a4?context=explore"},"scheduler plugin")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"/release-announce/1.2.0"},"Announcement"))))),(0,t.yg)("h2",{id:"verifying-the-signature"},"Verifying the signature"),(0,t.yg)("p",null,"To verify the Apache YuniKorn release using GPG:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Download the release apache-yunikorn-X.Y.Z-src.tar.gz from a mirror site."),(0,t.yg)("li",{parentName:"ul"},"Download the signature file apache-yunikorn-X.Y.Z-src.tar.gz.asc from Apache."),(0,t.yg)("li",{parentName:"ul"},"Download the Apache YuniKorn ",(0,t.yg)("a",{parentName:"li",href:"https://downloads.apache.org/yunikorn/KEYS"},"KEYS")," file."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"gpg --import KEYS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"gpg --verify apache-yunikorn-X.Y.Z-src.tar.gz.asc"))),(0,t.yg)("p",null,"Note: On MacOS-X the GNU gpg utility does not read from a file when importing.\nThe import command should be ",(0,t.yg)("inlineCode",{parentName:"p"},"gpg --import < KEYS"),"   "),(0,t.yg)("h2",{id:"verifying-the-checksum"},"Verifying the checksum"),(0,t.yg)("p",null,"To verify the integrity of Apache YuniKorn release using the SHA-512 checksum:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Download the release apache-yunikorn-X.Y.Z-src.tar.gz from a mirror site."),(0,t.yg)("li",{parentName:"ul"},"Download the checksum apache-yunikorn-X.Y.Z-src.tar.gz.sha512 from Apache."),(0,t.yg)("li",{parentName:"ul"},"Verify the checksum",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"on MacOS-X: ",(0,t.yg)("inlineCode",{parentName:"li"},"shasum -c apache-yunikorn-X.Y.Z-src.tar.gz.sha512")),(0,t.yg)("li",{parentName:"ul"},"on Linux: ",(0,t.yg)("inlineCode",{parentName:"li"},"sha512sum -c apache-yunikorn-X.Y.Z-src.tar.gz.sha512"))))),(0,t.yg)("h2",{id:"verifying-the-release"},"Verifying the release"),(0,t.yg)("p",null,"The release is a source code release and must be built before it can be used.\nUnpack the archive and follow the instructions in the ",(0,t.yg)("inlineCode",{parentName:"p"},"README.md")," file to build the images.\nA script and configuration to create a small cluster, using the locally built images, is provided in the release archive."),(0,t.yg)("p",null,"Run the script for more instructions and to list the tools required for validating the release:  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"./validate_cluster.sh\n")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"kind")," cluster created is a small, but fully functional, Kubernetes cluster with Apache YuniKorn deployed. "),(0,t.yg)("h2",{id:"older-releases"},"Older releases"),(0,t.yg)("p",null,"Release announcement for all releases are available on the website ",(0,t.yg)("a",{parentName:"p",href:"/release-announce/"},"release announcements"),"."),(0,t.yg)("p",null,"You can find all previous releases in the ",(0,t.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/yunikorn/"},"archive repository"),".\nIf you are looking for older releases made during incubation check the ",(0,t.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/yunikorn/"},"incubator archive repository"),"."),(0,t.yg)("p",null,"The archives include all releases made not mentioned in the table above."),(0,t.yg)("h2",{id:"license"},"License"),(0,t.yg)("p",null,"The software is licensed under ",(0,t.yg)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache License 2.0")))}p.isMDXComponent=!0}}]);