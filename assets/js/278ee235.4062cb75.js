"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56976],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>g});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(g,s(s({ref:n},u),{},{components:t})):r.createElement(g,s({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(45072),a=(t(11504),t(95788));const i={id:"acls",title:"ACLs"},s=void 0,o={unversionedId:"user_guide/acls",id:"version-1.3.0/user_guide/acls",title:"ACLs",description:"\x3c!--",source:"@site/versioned_docs/version-1.3.0/user_guide/acls.md",sourceDirName:"user_guide",slug:"/user_guide/acls",permalink:"/docs/1.3.0/user_guide/acls",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"acls",title:"ACLs"},sidebar:"docs",previous:{title:"App & Queue Priorities",permalink:"/docs/1.3.0/user_guide/priorities"},next:{title:"Resource Quota Management",permalink:"/docs/1.3.0/user_guide/resource_quota_management"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example config",id:"example-config",level:2},{value:"Simple examples",id:"simple-examples",level:3},{value:"Escaping and quotation marks",id:"escaping-and-quotation-marks",level:3},{value:"Access check",id:"access-check",level:2},{value:"User and Group information",id:"user-and-group-information",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"User information is passed to the core scheduler from the kubernetes shim using the methodology defined ",(0,a.yg)("a",{parentName:"p",href:"usergroup_resolution"},"here"))),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("p",null,"Access Control Lists are generic for YuniKorn.\nThey can be used in multiple places in YuniKorn.\nThe current use case is limited to queue ACLs."),(0,a.yg)("p",null,"Access control lists give access to the users and groups that have been specified in the list.\nThey do not provide the possibility to explicitly remove or deny access to the users and groups specified in the list."),(0,a.yg)("p",null,"If there is no access control list is configured access is ",(0,a.yg)("em",{parentName:"p"},"denied")," by default."),(0,a.yg)("h2",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,"The access control list is defined as:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ACL ::= \u201c*\u201d |  userlist [ \u201c \u201c grouplist ]\nuserlist ::= \u201c\u201d | user { \u201c,\u201d user }\ngrouplist ::= \u201c\u201d | group { \u201c,\u201d group }\n")),(0,a.yg)("p",null,"This definition specifies a wildcard of * which results in access for everyone."),(0,a.yg)("p",null,"If the user list is empty and the group list is empty nobody will have access.\nThis deny all ACL has two possible representations:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"an empty access control list. (implicit)"),(0,a.yg)("li",{parentName:"ul"},"a single space. (explicit)")),(0,a.yg)("h2",{id:"example-config"},"Example config"),(0,a.yg)("h3",{id:"simple-examples"},"Simple examples"),(0,a.yg)("p",null,"An ACL that allows access to just the user ",(0,a.yg)("inlineCode",{parentName:"p"},"sue")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue\n")),(0,a.yg)("p",null,"Nobody else will get access, this is just for ",(0,a.yg)("inlineCode",{parentName:"p"},"sue"),".\n",(0,a.yg)("inlineCode",{parentName:"p"},"john")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"bob")," will be denied access."),(0,a.yg)("p",null,"An ACL that allows access to the user ",(0,a.yg)("inlineCode",{parentName:"p"},"sue")," and the members of the group ",(0,a.yg)("inlineCode",{parentName:"p"},"dev"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue dev\n")),(0,a.yg)("p",null,"The user ",(0,a.yg)("inlineCode",{parentName:"p"},"sue")," gets access based on her explicit mention in the user part of the ACL.\nEven though she is not a member of the group ",(0,a.yg)("inlineCode",{parentName:"p"},"dev"),". Her group membership is irrelevant."),(0,a.yg)("p",null,"The user named ",(0,a.yg)("inlineCode",{parentName:"p"},"john")," whom is a member of the group ",(0,a.yg)("inlineCode",{parentName:"p"},"dev")," will be allowed access based on his group membership.\nA third user called ",(0,a.yg)("inlineCode",{parentName:"p"},"bob")," whom is not mentioned explicitly and is not a member of the ",(0,a.yg)("inlineCode",{parentName:"p"},"dev")," group will be denied access."),(0,a.yg)("p",null,"An ACL that allows access to the members of the groups ",(0,a.yg)("inlineCode",{parentName:"p"},"dev")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"test"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'  adminacl: " dev,test"\n')),(0,a.yg)("p",null,"The ACL must start with a space to indicate that there is no user list.\nIf the ACL is not correctly quoted the space is dropped by the yaml parser.\nSince the user list is empty none of the users will get access unless they are a member of either the ",(0,a.yg)("inlineCode",{parentName:"p"},"dev")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"test")," group."),(0,a.yg)("p",null,"Looking at the same three users as before:\nThe user ",(0,a.yg)("inlineCode",{parentName:"p"},"sue")," is not a member of either group and is denied access.\nThe user named ",(0,a.yg)("inlineCode",{parentName:"p"},"john")," whom is a member of the group ",(0,a.yg)("inlineCode",{parentName:"p"},"dev")," will be allowed access based on his group membership.\n",(0,a.yg)("inlineCode",{parentName:"p"},"bob")," is not a member of the ",(0,a.yg)("inlineCode",{parentName:"p"},"dev")," group but is a member of ",(0,a.yg)("inlineCode",{parentName:"p"},"test")," and will be allowed access."),(0,a.yg)("h3",{id:"escaping-and-quotation-marks"},"Escaping and quotation marks"),(0,a.yg)("p",null,"ACLs are currently implemented in the queue configuration which uses a yaml file.\nThis places some limitations on the how to escape the values.\nIncorrectly quoted values will cause a yaml parse error or could lead to the incorrect interpretation of the value."),(0,a.yg)("p",null,"The following points need to be taken into account:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The wildcard entry must be quoted in the yaml config."),(0,a.yg)("li",{parentName:"ol"},"A simple list of users with or without it being followed by a list of groups does not need quoting but may be quoted."),(0,a.yg)("li",{parentName:"ol"},"An ACL without a user list and just one or more groups must be quoted to find the starting space:")),(0,a.yg)("p",null,"Correctly quoted ACL example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'partitions:\n  - name: default\n    queues:\n      - name: test\n        submitacl: "*"\n        adminacl: sue dev,test\n      - name: product\n        submitacl: " product"\n')),(0,a.yg)("h2",{id:"access-check"},"Access check"),(0,a.yg)("p",null,"The access check follows the pattern:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"check if the ACL is the wildcard"),(0,a.yg)("li",{parentName:"ul"},"check if the user is in the user list"),(0,a.yg)("li",{parentName:"ul"},"check if any of the groups the user is a member of is part of the group list")),(0,a.yg)("p",null,"If a check matches the ACL allows access and checking is stopped.\nIf none of the checks match the ACL denies access."),(0,a.yg)("h2",{id:"user-and-group-information"},"User and Group information"),(0,a.yg)("p",null,"For User & Group resolution, please follow instructions defined ",(0,a.yg)("a",{parentName:"p",href:"usergroup_resolution"},"here")))}d.isMDXComponent=!0}}]);