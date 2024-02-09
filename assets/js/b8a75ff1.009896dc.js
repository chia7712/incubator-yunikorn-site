"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45304],{95788:(e,n,a)=>{a.d(n,{Iu:()=>s,yg:()=>d});var t=a(11504);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=t.createContext({}),p=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),g=i,d=m["".concat(u,".").concat(g)]||m[g]||c[g]||r;return a?t.createElement(d,o(o({ref:n},s),{},{components:a})):t.createElement(d,o({ref:n},s))}));function d(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},87828:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=a(45072),i=(a(11504),a(95788));const r={id:"queue_config",title:"Partition and Queue Configuration"},o=void 0,l={unversionedId:"user_guide/queue_config",id:"version-1.4.0/user_guide/queue_config",title:"Partition and Queue Configuration",description:"\x3c!--",source:"@site/versioned_docs/version-1.4.0/user_guide/queue_config.md",sourceDirName:"user_guide",slug:"/user_guide/queue_config",permalink:"/docs/user_guide/queue_config",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"queue_config",title:"Partition and Queue Configuration"},sidebar:"docs",previous:{title:"Service Configuration",permalink:"/docs/user_guide/service_config"},next:{title:"App Placement Rules",permalink:"/docs/user_guide/placement_rules"}},u={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Partitions",id:"partitions",level:2},{value:"Queues",id:"queues",level:3},{value:"Placement rules",id:"placement-rules",level:3},{value:"Statedump filepath",id:"statedump-filepath",level:3},{value:"Limits",id:"limits",level:3},{value:"Properties",id:"properties",level:3},{value:"<code>application.sort.policy</code>",id:"applicationsortpolicy",level:4},{value:"<code>application.sort.priority</code>",id:"applicationsortpriority",level:4},{value:"<code>priority.policy</code>",id:"prioritypolicy",level:4},{value:"<code>priority.offset</code>",id:"priorityoffset",level:4},{value:"<code>preemption.policy</code>",id:"preemptionpolicy",level:4},{value:"<code>preemption.delay</code>",id:"preemptiondelay",level:4},{value:"Resources",id:"resources",level:3},{value:"Child Template",id:"child-template",level:3}],s={toc:p},m="wrapper";function c(e){let{components:n,...a}=e;return(0,i.yg)(m,(0,t.c)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The basis for the queue configuration is given in the ",(0,i.yg)("a",{parentName:"p",href:"/docs/design/scheduler_configuration"},"configuration design document"),"."),(0,i.yg)("p",null,"This document provides the generic queue configuration.\nIt references both the ",(0,i.yg)("a",{parentName:"p",href:"/docs/user_guide/acls"},"Access Control Lists")," and ",(0,i.yg)("a",{parentName:"p",href:"/docs/user_guide/placement_rules"},"Placement rules")," documentation."),(0,i.yg)("p",null,"This document explains how to create the partition and queue configuration for the scheduler with examples."),(0,i.yg)("p",null,"The scheduler relies on the shim to reliably provide user information as part of the application submission.\nThe current shim identifies the user and the groups the user belongs to using the methodology provided in ",(0,i.yg)("a",{parentName:"p",href:"usergroup_resolution"},"User & Group Resolution"),"."),(0,i.yg)("h2",{id:"configuration"},"Configuration"),(0,i.yg)("p",null,"The configuration file for the scheduler that is described here only provides the configuration for the partitions and queues."),(0,i.yg)("p",null,"By default the scheduler reads the ConfigMap section ",(0,i.yg)("inlineCode",{parentName:"p"},"queues.yaml")," for partition and queue configuration. The section name can\nbe changed by updating the ",(0,i.yg)("inlineCode",{parentName:"p"},"service.policyGroup")," ConfigMap entry to be something other than ",(0,i.yg)("inlineCode",{parentName:"p"},"queues"),"."),(0,i.yg)("p",null,"The example reference for the configuration is located in the scheduler core's ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-core/blob/master/config/queues.yaml"},"queues.yaml")," file."),(0,i.yg)("h2",{id:"partitions"},"Partitions"),(0,i.yg)("p",null,"Partitions are the top level of the scheduler configuration.\nThere can be more than one partition defined in the configuration."),(0,i.yg)("p",null,"Basic structure for the partition definition in the configuration:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: <name of the 1st partition>\n  - name: <name of the 2nd partition>\n")),(0,i.yg)("p",null,"The default name for the partition is ",(0,i.yg)("inlineCode",{parentName:"p"},"default"),".\nThe partition definition contains the full configuration for the scheduler for a particular shim.\nEach shim uses its own unique partition."),(0,i.yg)("p",null,"The partition must have at least the following keys defined:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"name"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#queues"},"queues"))),(0,i.yg)("p",null,"The queues configuration is explained below."),(0,i.yg)("p",null,"Optionally the following keys can be defined for a partition:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#placement-rules"},"placementrules")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#statedump-filepath"},"statedumpfilepath")," (deprecated since v1.2.0)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#limits"},"limits")),(0,i.yg)("li",{parentName:"ul"},"nodesortpolicy"),(0,i.yg)("li",{parentName:"ul"},"preemption")),(0,i.yg)("p",null,"Placement rules and limits are explained in their own chapters"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"nodesortpolicy")," key defines the way the nodes are sorted for the partition.\nDetails on the values that can be used are in the ",(0,i.yg)("a",{parentName:"p",href:"/docs/user_guide/sorting_policies#node-sorting"},"sorting policy")," documentation."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"preemption")," key can have only one sub key: ",(0,i.yg)("em",{parentName:"p"},"enabled"),".\nThis boolean value defines the preemption behavior for the whole partition."),(0,i.yg)("p",null,"The default value for ",(0,i.yg)("em",{parentName:"p"},"enabled")," is ",(0,i.yg)("em",{parentName:"p"},"true"),".\nAllowed values: ",(0,i.yg)("em",{parentName:"p"},"true")," or ",(0,i.yg)("em",{parentName:"p"},"false"),", any other value will cause a parse error."),(0,i.yg)("p",null,"Example ",(0,i.yg)("inlineCode",{parentName:"p"},"partition")," yaml entry with a ",(0,i.yg)("inlineCode",{parentName:"p"},"nodesortpolicy")," of ",(0,i.yg)("em",{parentName:"p"},"fair")," and preemption disabled:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: <name of the partition>\n    nodesortpolicy: fair\n    preemption:\n      enabled: false\n")),(0,i.yg)("p",null,"NOTE:\nCurrently the Kubernetes unique shim does not support any other partition than the ",(0,i.yg)("inlineCode",{parentName:"p"},"default")," partition..\nThis has been logged as an ",(0,i.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-22"},"jira")," for the shim."),(0,i.yg)("h3",{id:"queues"},"Queues"),(0,i.yg)("p",null,"YuniKorn manages resources by leveraging resource queues. The resource queue has the following characters:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"queues can have ",(0,i.yg)("strong",{parentName:"li"},"hierarchical")," structure"),(0,i.yg)("li",{parentName:"ul"},"each queue can be preset with ",(0,i.yg)("strong",{parentName:"li"},"min/max capacity")," where min-capacity defines the guaranteed resource and the max-capacity defines the resource limit (aka resource quota)"),(0,i.yg)("li",{parentName:"ul"},"tasks must be running under a certain leaf queue"),(0,i.yg)("li",{parentName:"ul"},"queues can be ",(0,i.yg)("strong",{parentName:"li"},"static")," (loading from configuration file) or ",(0,i.yg)("strong",{parentName:"li"},"dynamical")," (internally managed by YuniKorn)"),(0,i.yg)("li",{parentName:"ul"},"queue level ",(0,i.yg)("strong",{parentName:"li"},"resource fairness is")," enforced by the scheduler"),(0,i.yg)("li",{parentName:"ul"},"a job can only run under a specific queue")),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"The difference between YuniKorn queue and ",(0,i.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Kubernetes namespace"),":\nKubernetes namespace provides the scope for the Kubernetes resources, including the security context (i.e who can access the objects), and resource\nboundary when ",(0,i.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"resource quota")," is defined (i.e how many resources can be used by the objects).\nOn the other hand, YuniKorn queue is only used how many resources can be used by a group of jobs, and in which order. It provides\na more fine-grained control on resource sharing across multiple tenants with considering of resource fairness, job ordering, etc. In most of the cases,\nYuniKorn queue can be used to replace the namespace resource quota, in order to provide more scheduling features.")),(0,i.yg)("p",null,"The ",(0,i.yg)("em",{parentName:"p"},"queues")," entry is the main configuration element.\nIt defines a hierarchical structure for the queues."),(0,i.yg)("p",null,"It can have a ",(0,i.yg)("inlineCode",{parentName:"p"},"root")," queue defined but it is not a required element.\nIf the ",(0,i.yg)("inlineCode",{parentName:"p"},"root")," queue is not defined the configuration parsing will insert the root queue for consistency.\nThe insertion of the root queue is triggered by:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If the configuration has more than one queue defined at the top level a root queue is inserted."),(0,i.yg)("li",{parentName:"ul"},"If there is only one queue defined at the top level and it is not called ",(0,i.yg)("inlineCode",{parentName:"li"},"root")," a root queue is inserted.  ")),(0,i.yg)("p",null,"The defined queue or queues will become a child queue of the inserted ",(0,i.yg)("inlineCode",{parentName:"p"},"root")," queue."),(0,i.yg)("p",null,"Basic ",(0,i.yg)("inlineCode",{parentName:"p"},"queues")," yaml entry with sub queue:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"queues:\n- name: <name of the queue>\n  queues:\n  - name: <name of the queue>\n")),(0,i.yg)("p",null,"Supported parameters for the queues:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"name"),(0,i.yg)("li",{parentName:"ul"},"parent"),(0,i.yg)("li",{parentName:"ul"},"queues"),(0,i.yg)("li",{parentName:"ul"},"maxapplications"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#properties"},"properties")),(0,i.yg)("li",{parentName:"ul"},"adminacl"),(0,i.yg)("li",{parentName:"ul"},"submitacl"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#resources"},"resources")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#limits"},"limits"))),(0,i.yg)("p",null,"Each queue must have a ",(0,i.yg)("em",{parentName:"p"},"name"),".\nThe name of a queue must be unique at the level that the queue is defined.\nSince the queue structure is fully hierarchical queues at different points in the hierarchy may have the same name.\nAs an example: the queue structure ",(0,i.yg)("inlineCode",{parentName:"p"},"root.testqueue")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"root.parent.testqueue"),' is a valid structure.\nA queue cannot contain a dot "." character as that character is used to separate the queues in the hierarchy.\nIf the name is not unique for the queue in the configuration or contains a dot a parsing error is generated and the configuration is rejected. '),(0,i.yg)("p",null,"Queues in the structure will automatically get a type assigned.\nThe type of the queue is based on the fact that the queue has children or sub queues.\nThe two types of queues are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"parent"),(0,i.yg)("li",{parentName:"ul"},"leaf")),(0,i.yg)("p",null,"Applications can only be assigned to a ",(0,i.yg)("em",{parentName:"p"},"leaf")," queue.\nA queue that has a child or sub queue in the configuration is automatically a ",(0,i.yg)("em",{parentName:"p"},"parent")," queue.\nIf a queue does not have a sub the queue in the configuration it is a ",(0,i.yg)("em",{parentName:"p"},"leaf")," queue, unless the ",(0,i.yg)("inlineCode",{parentName:"p"},"parent")," parameter is set to ",(0,i.yg)("em",{parentName:"p"},"true"),".\nTrying to override a ",(0,i.yg)("em",{parentName:"p"},"parent")," queue type in the configuration will cause a parsing error of the configuration.   "),(0,i.yg)("p",null,"Sub queues for a parent queue are defined under the ",(0,i.yg)("inlineCode",{parentName:"p"},"queues")," entry.\nThe ",(0,i.yg)("inlineCode",{parentName:"p"},"queues")," entry is a recursive entry for a queue level and uses the exact same set of parameters.",(0,i.yg)("br",{parentName:"p"}),"\n","The ",(0,i.yg)("inlineCode",{parentName:"p"},"maxapplications")," property is an integer value, larger than 1, which allows you to limit the number of running applications for the queue. Specifying a zero for ",(0,i.yg)("inlineCode",{parentName:"p"},"maxapplications")," is not allowed as it would block all allocations for applications in the queue. The ",(0,i.yg)("inlineCode",{parentName:"p"},"maxapplications")," value for a ",(0,i.yg)("em",{parentName:"p"},"child")," queue must be smaller or equal to the value for the ",(0,i.yg)("em",{parentName:"p"},"parent")," queue."),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"#properties"},"properties")," section contains simple key/value pairs. This is\nused for further queue customization of features such as\n",(0,i.yg)("a",{parentName:"p",href:"/docs/user_guide/sorting_policies#application-sorting"},"application sorting")," and priority\nscheduling. Future features will use the exisitng ",(0,i.yg)("inlineCode",{parentName:"p"},"properties")," section as well\nto avoid the need to define a new structure for queue configuration."),(0,i.yg)("p",null,"Access to a queue is set via the ",(0,i.yg)("inlineCode",{parentName:"p"},"adminacl")," for administrative actions and for submitting an application via the ",(0,i.yg)("inlineCode",{parentName:"p"},"submitacl")," entry.\nACLs are documented in the ",(0,i.yg)("a",{parentName:"p",href:"/docs/user_guide/acls"},"Access control lists")," document."),(0,i.yg)("p",null,"Queue resource limits are set via the ",(0,i.yg)("inlineCode",{parentName:"p"},"resources")," parameter.\nUser and group limits are set via the ",(0,i.yg)("inlineCode",{parentName:"p"},"limits")," parameter.\nAs both entries are complex configuration entries they are explained in ",(0,i.yg)("a",{parentName:"p",href:"#resources"},"resources")," and ",(0,i.yg)("a",{parentName:"p",href:"#limits"},"limits")," below."),(0,i.yg)("p",null,"An example configuration of a queue ",(0,i.yg)("inlineCode",{parentName:"p"},"root.namespaces")," as a ",(0,i.yg)("em",{parentName:"p"},"parent")," queue with limits:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    queues:\n      - name: namespaces\n        parent: true\n        maxapplications: 12\n        resources:\n          guaranteed:\n            {memory: 1G, vcore: 10}\n          max:\n            {memory: 10G, vcore: 100}\n        queues:\n          - name: level1\n            maxapplications: 8\n            resources:\n              guaranteed:\n                {memory: 500M, vcore: 5}\n              max:\n                {memory: 5G, vcore: 50}\n")),(0,i.yg)("h3",{id:"placement-rules"},"Placement rules"),(0,i.yg)("p",null,"The placement rules are defined and documented in the ",(0,i.yg)("a",{parentName:"p",href:"/docs/user_guide/placement_rules"},"placement rule")," document."),(0,i.yg)("p",null,"Each partition can have only one set of placement rules defined.\nIf no rules are defined the placement manager is not started and each application ",(0,i.yg)("em",{parentName:"p"},"must")," have a queue set on submit."),(0,i.yg)("h3",{id:"statedump-filepath"},"Statedump filepath"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Status")," : Deprecated and ignored since v1.2.0, no replacement."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"statedumpfilepath: <path/to/statedump/file>\n")),(0,i.yg)("h3",{id:"limits"},"Limits"),(0,i.yg)("p",null,"Limits define a set of limit objects for a queue, and can be set on a queue at any level."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"limits:\n  - limit: <description>\n  - limit: <description>\n")),(0,i.yg)("p",null,"A limit object is a complex configuration object.\nIt defines one limit for a set of users and or groups.\nMultiple independent limits can be set as part of one ",(0,i.yg)("inlineCode",{parentName:"p"},"limits")," entry on a queue.\nUsers and or groups that are not part of the limit setting will not be limited."),(0,i.yg)("p",null,"A sample limits entry:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'limits:\n  - limit: <description>\n    users:\n    - <user name or "*">\n    - <user name>\n    groups:\n    - <group name or "*">\n    - <group name>\n    maxapplications: <1..maxint>\n    maxresources:\n      <resource name 1>: <0..maxint>[suffix]\n      <resource name 2>: <0..maxint>[suffix]\n')),(0,i.yg)("p",null,"Limits are applied recursively in the case of a queue limit.\nThis means that a limit on the ",(0,i.yg)("inlineCode",{parentName:"p"},"root")," queue is an overall limit in the cluster for the user or group.\nA ",(0,i.yg)("inlineCode",{parentName:"p"},"root")," queue limit is thus also equivalent with the ",(0,i.yg)("inlineCode",{parentName:"p"},"partition")," limit."),(0,i.yg)("p",null,"The limit object parameters:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"limit"),(0,i.yg)("li",{parentName:"ul"},"users"),(0,i.yg)("li",{parentName:"ul"},"groups"),(0,i.yg)("li",{parentName:"ul"},"maxapplications"),(0,i.yg)("li",{parentName:"ul"},"maxresources")),(0,i.yg)("p",null,"The ",(0,i.yg)("em",{parentName:"p"},"limit")," parameter is an optional description of the limit entry.\nIt is not used for anything but making the configuration understandable and readable. "),(0,i.yg)("p",null,"The ",(0,i.yg)("em",{parentName:"p"},"users")," and ",(0,i.yg)("em",{parentName:"p"},"groups")," that can be configured can be one of two types:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'a star "*" '),(0,i.yg)("li",{parentName:"ul"},"a list of users or groups.")),(0,i.yg)("p",null,'If the entry for users or groups contains more than one (1) entry it is always considered a list of either users or groups.\nThe star "*" is the wildcard character and matches all users or groups.\nDuplicate entries in the lists are ignored and do not cause a parsing error.\nSpecifying a star beside other list elements is not allowed.\nWhen a wildcard group is configured, a limit must be configured with at least one named group.\nParsing will reject the configuration with limits that do not follow this rule.'),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"maxapplications")," is an unsigned integer value, which allows you to limit the number of running applications for the configured user or group.\nSpecifying 0 for ",(0,i.yg)("em",{parentName:"p"},"maxapplications")," is not allowed."),(0,i.yg)("p",null,"The ",(0,i.yg)("em",{parentName:"p"},"maxresources")," parameter can be used to specify a limit for one or more resources.\nThe ",(0,i.yg)("em",{parentName:"p"},"maxresources")," uses the same syntax as the ",(0,i.yg)("a",{parentName:"p",href:"#resources"},"resources")," parameter for the queue.\nResources that are not specified in the list are not limited.\nA resource limit can be set to 0.\nThis prevents the user or group from requesting the specified resource even though the queue or partition has that specific resource available.",(0,i.yg)("br",{parentName:"p"}),"\n","Specifying an overall resource limit of zero is not allowed.\nThis means that at least one of the resources specified in the limit must be greater than zero."),(0,i.yg)("p",null,"If a resource is not available on a queue the maximum resources on a queue definition should be used.\nSpecifying a limit that is effectively zero, ",(0,i.yg)("em",{parentName:"p"},"maxapplications")," is zero and all resource limits are zero, is not allowed and will cause a parsing error."),(0,i.yg)("p",null,"A limit is per user or group.\nIt is ",(0,i.yg)("em",{parentName:"p"},"not")," a combined limit for all the users or groups together."),(0,i.yg)("p",null,"As an example: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'limit: "example entry"\nmaxapplications: 10\nusers:\n- sue\n- bob\n')),(0,i.yg)("p",null,"In this case both the users ",(0,i.yg)("inlineCode",{parentName:"p"},"sue")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"bob")," are allowed to run 10 applications."),(0,i.yg)("h3",{id:"properties"},"Properties"),(0,i.yg)("p",null,"Additional queue configuration can be added via the ",(0,i.yg)("inlineCode",{parentName:"p"},"properties")," section,\nspecified as simple key/value pairs. The following parameters are currently\nsupported:"),(0,i.yg)("h4",{id:"applicationsortpolicy"},(0,i.yg)("inlineCode",{parentName:"h4"},"application.sort.policy")),(0,i.yg)("p",null,"Supported values: ",(0,i.yg)("inlineCode",{parentName:"p"},"fifo"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"fair"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"stateaware")),(0,i.yg)("p",null,"Default value: ",(0,i.yg)("inlineCode",{parentName:"p"},"fifo")),(0,i.yg)("p",null,"Sets the policy to be used when sorting applications within a queue. This\nsetting has no effect on a ",(0,i.yg)("em",{parentName:"p"},"parent")," queue."),(0,i.yg)("p",null,"See the documentation on ",(0,i.yg)("a",{parentName:"p",href:"/docs/user_guide/sorting_policies#application-sorting"},"application sorting"),"\nfor more information."),(0,i.yg)("h4",{id:"applicationsortpriority"},(0,i.yg)("inlineCode",{parentName:"h4"},"application.sort.priority")),(0,i.yg)("p",null,"Supported values: ",(0,i.yg)("inlineCode",{parentName:"p"},"enabled"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"disabled")),(0,i.yg)("p",null,"Default value: ",(0,i.yg)("inlineCode",{parentName:"p"},"enabled")),(0,i.yg)("p",null,"When this property is ",(0,i.yg)("inlineCode",{parentName:"p"},"enabled"),", priority will be considered when sorting\nqueues and applications. Setting this value to ",(0,i.yg)("inlineCode",{parentName:"p"},"disabled")," will ignore\npriorities when sorting. This setting can be specified on a ",(0,i.yg)("em",{parentName:"p"},"parent")," queue and\nwill be inherited by ",(0,i.yg)("em",{parentName:"p"},"child")," queues."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"NOTE:")," YuniKorn releases prior to 1.2.0 did not support priorities when\nsorting. To keep the legacy behavior, set ",(0,i.yg)("inlineCode",{parentName:"p"},"application.sort.priority")," to\n",(0,i.yg)("inlineCode",{parentName:"p"},"disabled"),"."),(0,i.yg)("h4",{id:"prioritypolicy"},(0,i.yg)("inlineCode",{parentName:"h4"},"priority.policy")),(0,i.yg)("p",null,"Supported values: ",(0,i.yg)("inlineCode",{parentName:"p"},"default"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"fence")),(0,i.yg)("p",null,"Default value: ",(0,i.yg)("inlineCode",{parentName:"p"},"default")),(0,i.yg)("p",null,"Sets the inter-queue priority policy to use when scheduling requests."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"NOTE"),": This value is not inherited by child queues."),(0,i.yg)("p",null,"By default, priority applies across queues globally. In other words,\nhigher-priority requests will be satisfied prior to lower-priority requests\nregardless of which queue they exist within."),(0,i.yg)("p",null,"When the ",(0,i.yg)("inlineCode",{parentName:"p"},"fence")," policy is in use on a queue, the priorities of ",(0,i.yg)("em",{parentName:"p"},"child")," queues\n(in the case of a ",(0,i.yg)("em",{parentName:"p"},"parent")," queue) or applications (in the case of a ",(0,i.yg)("em",{parentName:"p"},"leaf"),"\nqueue) will not be exposed outside the fence boundary. "),(0,i.yg)("p",null,"See the documentation on ",(0,i.yg)("a",{parentName:"p",href:"/docs/user_guide/priorities"},"priority support")," for more information."),(0,i.yg)("h4",{id:"priorityoffset"},(0,i.yg)("inlineCode",{parentName:"h4"},"priority.offset")),(0,i.yg)("p",null,"Supported values: any positive or negative 32-bit integer"),(0,i.yg)("p",null,"Default value: ",(0,i.yg)("inlineCode",{parentName:"p"},"0")),(0,i.yg)("p",null,"Adjusts the priority of the queue relative to it's siblings. This can be useful\nto create high or low-priority queues without needing to set every task's\npriority manually."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"NOTE"),": This value is not inherited by child queues."),(0,i.yg)("p",null,"When using the ",(0,i.yg)("inlineCode",{parentName:"p"},"default")," priority policy, the queue's priority is adjusted up\nor down by this amount."),(0,i.yg)("p",null,"When using the ",(0,i.yg)("inlineCode",{parentName:"p"},"fence")," policy, the queue's priority is always set to the offset\nvalue (in other words, the priorities of tasks in the queue are ignored)."),(0,i.yg)("p",null,"See the documentation on ",(0,i.yg)("a",{parentName:"p",href:"/docs/user_guide/priorities"},"priority support")," for more information."),(0,i.yg)("h4",{id:"preemptionpolicy"},(0,i.yg)("inlineCode",{parentName:"h4"},"preemption.policy")),(0,i.yg)("p",null,"Supported values: ",(0,i.yg)("inlineCode",{parentName:"p"},"default"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"fence"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"disabled")),(0,i.yg)("p",null,"Default value: ",(0,i.yg)("inlineCode",{parentName:"p"},"default")),(0,i.yg)("p",null,"When using the ",(0,i.yg)("inlineCode",{parentName:"p"},"default")," preemption policy, preemption is enabled for the queue."),(0,i.yg)("p",null,"When using the ",(0,i.yg)("a",{parentName:"p",href:"/docs/design/preemption#preemption-fence"},(0,i.yg)("inlineCode",{parentName:"a"},"fence")," preemption policy"),", tasks running in or below the queue on which the property is set cannot preempt tasks outside the queue tree."),(0,i.yg)("p",null,"When using the ",(0,i.yg)("inlineCode",{parentName:"p"},"disabled")," preemption policy, tasks running within the queue can't be victims."),(0,i.yg)("h4",{id:"preemptiondelay"},(0,i.yg)("inlineCode",{parentName:"h4"},"preemption.delay")),(0,i.yg)("p",null,"Supported values: any positive ",(0,i.yg)("a",{parentName:"p",href:"https://pkg.go.dev/time#ParseDuration"},"Golang duration string")),(0,i.yg)("p",null,"Default value: ",(0,i.yg)("inlineCode",{parentName:"p"},"30s")),(0,i.yg)("p",null,"The property can only be set on a leaf queue. A queue with pending requests can only trigger preemption after it has been in the queue for at least this duration."),(0,i.yg)("h3",{id:"resources"},"Resources"),(0,i.yg)("p",null,"The resources entry for the queue can set the ",(0,i.yg)("em",{parentName:"p"},"guaranteed")," and or ",(0,i.yg)("em",{parentName:"p"},"maximum")," resources for a queue.\nResource limits are checked recursively.\nThe usage of a leaf queue is the sum of all assigned resources for that queue.\nThe usage of a parent queue is the sum of the usage of all queues, leafs and parents, below the parent queue. "),(0,i.yg)("p",null,"The root queue, when defined, cannot have any resource limit set.\nIf the root queue has any limit set a parsing error will occur.\nThe maximum resource limit for the root queue is automatically equivalent to the cluster size.\nThere is no guaranteed resource setting for the root queue."),(0,i.yg)("p",null,"Maximum resources when configured place a hard limit on the size of all allocations that can be assigned to a queue at any point in time.\nA maximum resource can be set to 0 which makes the resource not available to the queue.\nGuaranteed resources are used in calculating the share of the queue and during allocation.\nIt is used as one of the inputs for deciding which queue to give the allocation to.\nPreemption uses the ",(0,i.yg)("em",{parentName:"p"},"guaranteed")," resource of a queue as a base which a queue cannot go below."),(0,i.yg)("p",null,"Basic ",(0,i.yg)("inlineCode",{parentName:"p"},"resources")," yaml entry:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"resources:\n  guaranteed:\n    <resource name 1>: <0..maxint>[suffix]\n    <resource name 2>: <0..maxint>[suffix]\n  max:\n    <resource name 1>: <0..maxint>[suffix]\n    <resource name 2>: <0..maxint>[suffix]\n")),(0,i.yg)("p",null,"Resources that are not specified in the list are not limited, for max resources, or guaranteed in the case of guaranteed resources."),(0,i.yg)("p",null,"An optional suffix may be specified for resource quantities. Valid suffixes are ",(0,i.yg)("inlineCode",{parentName:"p"},"k"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"M"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"G"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"T"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"P"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"E")," for SI powers of 10,\nand ",(0,i.yg)("inlineCode",{parentName:"p"},"Ki"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Mi"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Gi"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Ti"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Pi"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"Ei")," for SI powers of 2. Additionally, resources of type ",(0,i.yg)("inlineCode",{parentName:"p"},"vcore")," may have a suffix of ",(0,i.yg)("inlineCode",{parentName:"p"},"m")," to indicate millicores. For example, ",(0,i.yg)("inlineCode",{parentName:"p"},"500m")," is 50% of a vcore. Units of type ",(0,i.yg)("inlineCode",{parentName:"p"},"memory")," are interpreted in bytes by default. All other resource types have no designated base unit."),(0,i.yg)("p",null,"Note that this is a behavioral change as of YuniKorn 1.0. Prior versions interpreted ",(0,i.yg)("inlineCode",{parentName:"p"},"memory")," as units of 1000000 (1 million) bytes and ",(0,i.yg)("inlineCode",{parentName:"p"},"vcore")," as millicores."),(0,i.yg)("h3",{id:"child-template"},"Child Template"),(0,i.yg)("p",null,"The parent queue can provide a template to define the behaviour of dynamic leaf queues below it. A parent queue having no child template inherits the child template\nfrom its parent if that parent has one defined. A child template can be defined at any level in the queue hierarchy on a queue that is of the type parent."),(0,i.yg)("p",null,"The supported configuration in template are shown below."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"application sort policy"),(0,i.yg)("li",{parentName:"ol"},"max resources"),(0,i.yg)("li",{parentName:"ol"},"guaranteed resources"),(0,i.yg)("li",{parentName:"ol"},"max applications")),(0,i.yg)("p",null,"As an example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"}," partitions:\n   - name: default\n     placementrules:\n       - name: provided\n         create: true\n     queues:\n       - name: root\n         submitacl: '*'\n         childtemplate:\n           maxapplications: 10\n           properties:\n             application.sort.policy: stateaware\n           resources:\n             guaranteed:\n               vcore: 1\n               memory: 1G\n             max:\n               vcore: 20\n               memory: 600G\n         queues:\n           - name: parent\n             parent: true\n             childtemplate:\n               resources:\n                 max:\n                   vcore: 21\n                   memory: 610G\n           - name: notemplate\n             parent: true\n")),(0,i.yg)("p",null,"In this case, ",(0,i.yg)("inlineCode",{parentName:"p"},"root.parent.sales")," will directly use the child template of parent queue ",(0,i.yg)("inlineCode",{parentName:"p"},"root.parent"),". By contrast,\n",(0,i.yg)("inlineCode",{parentName:"p"},"root.notemplate.sales")," will use the child template set on the queue ",(0,i.yg)("inlineCode",{parentName:"p"},"root")," since its parent queue ",(0,i.yg)("inlineCode",{parentName:"p"},"root.notemplate")," inherits the child template from the queue ",(0,i.yg)("inlineCode",{parentName:"p"},"root"),"."),(0,i.yg)("p",null,"[DEPRECATED]"," Please migrate to template if your cluster is relying on old behavior that dynamic leaf queue can inherit\n",(0,i.yg)("inlineCode",{parentName:"p"},"application.sort.policy")," from parent (introduced by ",(0,i.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-195"},"YUNIKORN-195"),"). The old behavior will get removed in the future release."))}c.isMDXComponent=!0}}]);