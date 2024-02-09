"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73960],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>m});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),h=o,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(45072),o=(t(11504),t(95788));const a={id:"dependencies",title:"Go module updates"},i=void 0,s={unversionedId:"developer_guide/dependencies",id:"version-1.4.0/developer_guide/dependencies",title:"Go module updates",description:"\x3c!--",source:"@site/versioned_docs/version-1.4.0/developer_guide/dependencies.md",sourceDirName:"developer_guide",slug:"/developer_guide/dependencies",permalink:"/docs/developer_guide/dependencies",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"dependencies",title:"Go module updates"},sidebar:"docs",previous:{title:"Build and Run",permalink:"/docs/developer_guide/build"},next:{title:"Deploy to Kubernetes",permalink:"/docs/developer_guide/deployment"}},l={},d=[{value:"When to update",id:"when-to-update",level:2},{value:"Why a pseudo version",id:"why-a-pseudo-version",level:2},{value:"Enforcement of pseudo version",id:"enforcement-of-pseudo-version",level:2},{value:"Updating the core dependency",id:"updating-the-core-dependency",level:2},{value:"Updating a shim dependency",id:"updating-a-shim-dependency",level:2},{value:"Generating a pseudo version",id:"generating-a-pseudo-version",level:2}],p={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"when-to-update"},"When to update"),(0,o.yg)("p",null,"The references in the ",(0,o.yg)("inlineCode",{parentName:"p"},"master")," branches must be updated if a change is made in the scheduler interface.\nUpdating the dependency of a shim in reference to the core might be needed even if the scheduler interface does not change.\nNew functionality could be added that rely on changed field content of the messages, not the field layout of the message.\nIn that case just the shim dependency needs to be updated."),(0,o.yg)("h2",{id:"why-a-pseudo-version"},"Why a pseudo version"),(0,o.yg)("p",null,"In the ",(0,o.yg)("inlineCode",{parentName:"p"},"master")," branch we ",(0,o.yg)("strong",{parentName:"p"},"must")," use a pseudo version for all the YuniKorn repository references we use.\nAs the branch is in active development and not released we do not have a real version tag to reference.\nHowever, we still need to be able to point to the right commit for the dependencies."),(0,o.yg)("p",null,"Go allows using ",(0,o.yg)("a",{parentName:"p",href:"https://go.dev/ref/mod#pseudo-versions"},"pseudo versions")," for these specific cases.\nAn example of the pseudo versions we use in the Kubernetes shim:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"module github.com/apache/yunikorn-k8shim\n\ngo 1.16\n\nrequire (\n    github.com/apache/yunikorn-core v0.0.0-20220325135453-73d55282f052\n    github.com/apache/yunikorn-scheduler-interface v0.0.0-20220325134135-4a644b388bc4\n    ...\n)\n")),(0,o.yg)("p",null,"Release branches ",(0,o.yg)("strong",{parentName:"p"},"must")," not use pseudo versions.\nDuring the creation of a release, ",(0,o.yg)("a",{parentName:"p",href:"/community/release_procedure#tag-and-update-release-for-version"},"tags")," will be created.\nThese tags will be used as the reference in the go.mod files for the release.    "),(0,o.yg)("h2",{id:"enforcement-of-pseudo-version"},"Enforcement of pseudo version"),(0,o.yg)("p",null,"In the pull request checks for the ",(0,o.yg)("inlineCode",{parentName:"p"},"yunikorn-core")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"yunikorn-k8shim")," repositories enforce the format of the versions.\nA build failure will be triggered if the version reference for the ",(0,o.yg)("inlineCode",{parentName:"p"},"yunikorn-core")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"yunikorn-scheduler-interface"),"\nrepositories in the ",(0,o.yg)("inlineCode",{parentName:"p"},"master")," branch is not a pseudo version."),(0,o.yg)("p",null,"The check enforces that the start of the version reference is ",(0,o.yg)("inlineCode",{parentName:"p"},"v.0.0.0-")),(0,o.yg)("p",null,"Pseudo versions are not enforced in the release branches as per ",(0,o.yg)("a",{parentName:"p",href:"#why-a-pseudo-version"},"why a pseudo version")," explanation above. "),(0,o.yg)("h2",{id:"updating-the-core-dependency"},"Updating the core dependency"),(0,o.yg)("p",null,"Before updating the core dependency must make sure that the scheduler interface changes are finalised."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Make the changes in the scheduler interface."),(0,o.yg)("li",{parentName:"ol"},"Commit the changes into the master branch on GitHub and pull the latest master branch commit."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"#generating-a-pseudo-version"},"Generate a new pseudo version")," for the scheduler-interface.")),(0,o.yg)("p",null,"Updating the core dependency"),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"Update the go.mod file for the dependent repository: core repository",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Open the go.mod file"),(0,o.yg)("li",{parentName:"ul"},"Copy the generated pseudo version reference"),(0,o.yg)("li",{parentName:"ul"},"Replace the scheduler-interface version reference with the one generated in step 3."),(0,o.yg)("li",{parentName:"ul"},"Save the go.mod file"))),(0,o.yg)("li",{parentName:"ol"},"Run a ",(0,o.yg)("inlineCode",{parentName:"li"},"make test")," to be sure that the change works. The build will pull down the new dependency and the change in the scheduler interface will be used."),(0,o.yg)("li",{parentName:"ol"},"Commit the changes into the master branch on GitHub and pull the latest master branch commit")),(0,o.yg)("h2",{id:"updating-a-shim-dependency"},"Updating a shim dependency"),(0,o.yg)("p",null,"Before updating a shim dependency you must make sure that the core dependency has been updated and committed.\nThere are cases that the reference for the scheduler-interface has not changed.\nThis is not an issue, either skip the update steps or execute them as per normal resulting in no changes as part of the commit."),(0,o.yg)("ol",{start:7},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"#generating-a-pseudo-version"},"Generate a new pseudo version")," for the core"),(0,o.yg)("li",{parentName:"ol"},"Update the go.mod file for the dependent repository: k8shim repository",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Open the go.mod file"),(0,o.yg)("li",{parentName:"ul"},"Copy the generated pseudo version reference of the scheduler interface"),(0,o.yg)("li",{parentName:"ul"},"Replace the scheduler-interface version reference with the one generated in step 3."),(0,o.yg)("li",{parentName:"ul"},"Copy the generated pseudo version reference of the core"),(0,o.yg)("li",{parentName:"ul"},"Replace the core version reference with the one generated in step 7."),(0,o.yg)("li",{parentName:"ul"},"Save the go.mod file"))),(0,o.yg)("li",{parentName:"ol"},"Run a ",(0,o.yg)("inlineCode",{parentName:"li"},"make test")," to be sure that the change works. The build will pull down the new dependency and the changes in the core and scheduler interface will be used."),(0,o.yg)("li",{parentName:"ol"},"Commit the changes into the master branch on GitHub")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"If multiple PRs are being worked on in the scheduler interface and or core at the same time a different PR might have already applied the update.\nThis will all depend on the commit order.\nIt is therefor that steps 5 and 8 are performed to make sure there is no regression.")),(0,o.yg)("h2",{id:"generating-a-pseudo-version"},"Generating a pseudo version"),(0,o.yg)("p",null,"A pseudo references for use in a go.mod file is based on the commit hash and timestamp.\nIt is simple to generate one using the following steps: "),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Change to the repository for which the new pseudo version needs to be generated."),(0,o.yg)("li",{parentName:"ol"},"Update the local checked out code for the master branch to get the latest commits")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"git pull; git status\n")),(0,o.yg)("p",null,"The status should show up to date with the ",(0,o.yg)("inlineCode",{parentName:"p"},"origin")," from where it was cloned.\n3. Run the following command to get the pseudo version:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"TZ=UTC git --no-pager show --quiet --abbrev=12 --date='format-local:%Y%m%d%H%M%S' --format='v0.0.0-%cd-%h'\n")),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"This command will print a line like this:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"v0.0.0-20220318052402-b3dfd0d2adaa\n")),(0,o.yg)("p",null,"That is the pseudo version that can be used in the go.mod files."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The pseudo version must be based on a commit that is in the vcs system, i.e. from Github.\nLocal commits or commits that are not yet merged in a PR cannot be used.")))}u.isMDXComponent=!0}}]);