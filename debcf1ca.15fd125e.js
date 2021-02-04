(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(165)),i={id:"acls",title:"Acls"},s={unversionedId:"configuration/acls",id:"version-0.8.0/configuration/acls",isDocsHomePage:!1,title:"Acls",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/configuration/acls.md",slug:"/configuration/acls",permalink:"/docs/0.8.0/configuration/acls",version:"0.8.0",sidebar:"version-0.8.0/docs",previous:{title:"Placement Rules",permalink:"/docs/0.8.0/configuration/placement_rules"},next:{title:"Perf With Kubemark",permalink:"/docs/0.8.0/performance/evaluate_perf_function_with_kubemark"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Example config",id:"example-config",children:[{value:"Simple examples",id:"simple-examples",children:[]},{value:"Escaping and quotation marks",id:"escaping-and-quotation-marks",children:[]}]},{value:"Access check",id:"access-check",children:[]},{value:"User and Group information",id:"user-and-group-information",children:[{value:"Resolution",id:"resolution",children:[]}]}],c={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"yunikorn-scheduler-acls"},"YuniKorn Scheduler ACLs"),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Access Control Lists are generic for YuniKorn.\nThey can be used in multiple places in YuniKorn.\nThe current use case is limited to queue ACLs."),Object(o.b)("p",null,"Access control lists give access to the users and groups that have been specified in the list.\nThey do not provide the possibility to explicitly remove or deny access to the users and groups specified in the list."),Object(o.b)("p",null,"If there is no access control list is configured access is ",Object(o.b)("em",{parentName:"p"},"denied")," by default."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"The access control list is defined as:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ACL ::= \u201c*\u201d |  userlist [ \u201c \u201c grouplist ]\nuserlist ::= \u201c\u201d | user { \u201c,\u201d user }\ngrouplist ::= \u201c\u201d | group { \u201c,\u201d group }\n")),Object(o.b)("p",null,"This definition specifies a wildcard of * which results in access for everyone."),Object(o.b)("p",null,"If the user list is empty and the group list is empty nobody will have access.\nThis deny all ACL has two possible representations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"an empty access control list. (implicit)"),Object(o.b)("li",{parentName:"ul"},"a single space. (explicit)")),Object(o.b)("h2",{id:"example-config"},"Example config"),Object(o.b)("h3",{id:"simple-examples"},"Simple examples"),Object(o.b)("p",null,"An ACL that allows access to just the user ",Object(o.b)("inlineCode",{parentName:"p"},"sue")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue\n")),Object(o.b)("p",null,"Nobody else will get access, this is just for ",Object(o.b)("inlineCode",{parentName:"p"},"sue"),".\n",Object(o.b)("inlineCode",{parentName:"p"},"john")," and ",Object(o.b)("inlineCode",{parentName:"p"},"bob")," will be denied access."),Object(o.b)("p",null,"An ACL that allows access to the user ",Object(o.b)("inlineCode",{parentName:"p"},"sue")," and the members of the group ",Object(o.b)("inlineCode",{parentName:"p"},"dev"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue dev\n")),Object(o.b)("p",null,"The user ",Object(o.b)("inlineCode",{parentName:"p"},"sue")," gets access based on her explicit mention in the user part of the ACL.\nEven though she is not a member of the group ",Object(o.b)("inlineCode",{parentName:"p"},"dev"),". Her group membership is irrelevant."),Object(o.b)("p",null,"The user named ",Object(o.b)("inlineCode",{parentName:"p"},"john")," whom is a member of the group ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," will be allowed access based on his group membership.\nA third user called ",Object(o.b)("inlineCode",{parentName:"p"},"bob")," whom is not mentioned explicitly and is not a member of the ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," group will be denied access."),Object(o.b)("p",null,"An ACL that allows access to the members of the groups ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," and ",Object(o.b)("inlineCode",{parentName:"p"},"test"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'  adminacl: " dev,test"\n')),Object(o.b)("p",null,"The ACL must start with a space to indicate that there is no user list.\nIf the ACL is not correctly quoted the space is dropped by the yaml parser.\nSince the user list is empty none of the users will get access unless they are a member of either the ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," or ",Object(o.b)("inlineCode",{parentName:"p"},"test")," group."),Object(o.b)("p",null,"Looking at the same three users as before:\nThe user ",Object(o.b)("inlineCode",{parentName:"p"},"sue")," is not a member of either group and is denied access.\nThe user named ",Object(o.b)("inlineCode",{parentName:"p"},"john")," whom is a member of the group ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," will be allowed access based on his group membership.\n",Object(o.b)("inlineCode",{parentName:"p"},"bob")," is not a member of the ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," group but is a member of ",Object(o.b)("inlineCode",{parentName:"p"},"test")," and will be allowed access."),Object(o.b)("h3",{id:"escaping-and-quotation-marks"},"Escaping and quotation marks"),Object(o.b)("p",null,"ACLs are currently implemented in the queue configuration which uses a yaml file.\nThis places some limitations on the how to escape the values.\nIncorrectly quoted values will cause a yaml parse error or could lead to the incorrect interpretation of the value."),Object(o.b)("p",null,"The following points need to be taken into account:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The wildcard entry must be quoted in the yaml config."),Object(o.b)("li",{parentName:"ol"},"A simple list of users with or without it being followed by a list of groups does not need quoting but may be quoted."),Object(o.b)("li",{parentName:"ol"},"An ACL without a user list and just one or more groups must be quoted to find the starting space:")),Object(o.b)("p",null,"Correctly quoted ACL example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'partitions:\n  - name: default\n    queues:\n      - name: test\n        submitacl: "*"\n        adminacl: sue dev,test\n      - name: product\n        submitacl: " product"\n')),Object(o.b)("h2",{id:"access-check"},"Access check"),Object(o.b)("p",null,"The access check follows the pattern:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"check if the ACL is the wildcard"),Object(o.b)("li",{parentName:"ul"},"check if the user is in the user list"),Object(o.b)("li",{parentName:"ul"},"check if any of the groups the user is a member of is part of the group list")),Object(o.b)("p",null,"If a check matches the ACL allows access and checking is stopped.\nIf none of the checks match the ACL denies access."),Object(o.b)("h2",{id:"user-and-group-information"},"User and Group information"),Object(o.b)("p",null,"ACLs require the user's name and group membership.\nUser information must be provided by the shims to the core scheduler.\nThe current expectation is that the shims only provide the user information and leave the group information empty."),Object(o.b)("p",null,"User information is passed around in the scheduler as a combined user and groups object.\nThese objects are cached to allow fast lookup and minimise resolution of the groups."),Object(o.b)("p",null,"Based on the fact that the shims do not have to provide group information the core has the possibility to resolve the group memberships.\nGroup membership resolution is pluggable, see ",Object(o.b)("a",{parentName:"p",href:"#resolution"},"resolution")," below.\nIf the resolution of the groups of a user fails the result is still cached with a shortened lifetime.\nUsers resolution is cached, negatively and positively, per partition.\nUsers resolution like many other configs can differ between partition."),Object(o.b)("h3",{id:"resolution"},"Resolution"),Object(o.b)("p",null,"Groups do not have to be part of provided user and group object.\nWhen the object is added to the cache the groups are automatically resolved based on the resolution that is configured.\nThe resolver which is linked to the cache can be set per partition."),Object(o.b)("p",null,'The default group resolver is "no resolver".\nThis resolver just echos the user name and a primary group with the same name as the user.'),Object(o.b)("p",null,"Other resolvers are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"OS resolver"),Object(o.b)("li",{parentName:"ul"},"test resolver")))}u.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);