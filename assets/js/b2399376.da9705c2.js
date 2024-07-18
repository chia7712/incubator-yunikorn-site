"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55380],{91573:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=r(13274),s=r(1780);const i={id:"use_cases",title:"Use Cases"},o=void 0,d={id:"user_guide/use_cases",title:"Use Cases",description:"\x3c!--",source:"@site/docs/user_guide/use_case.md",sourceDirName:"user_guide",slug:"/user_guide/use_cases",permalink:"/docs/next/user_guide/use_cases",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"use_cases",title:"Use Cases"},sidebar:"docs",previous:{title:"Loki",permalink:"/docs/next/user_guide/loki"},next:{title:"Event System",permalink:"/docs/next/user_guide/event_system"}},l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Partition and Queue Configuration",id:"partition-and-queue-configuration",level:2},{value:"User/Group Resolution &amp; ACL",id:"usergroup-resolution--acl",level:2},{value:"Explanation of Configuration",id:"explanation-of-configuration",level:3},{value:"Testing",id:"testing",level:3},{value:"Placement of different users",id:"placement-of-different-users",level:2},{value:"Explanation of Configuration",id:"explanation-of-configuration-1",level:3},{value:"Testing",id:"testing-1",level:3},{value:"Limit usable resources on a queue level",id:"limit-usable-resources-on-a-queue-level",level:2},{value:"Explanation of Configuration",id:"explanation-of-configuration-2",level:3},{value:"Testing",id:"testing-2",level:3},{value:"Preemption &amp; Priority scheduling with fencing",id:"preemption--priority-scheduling-with-fencing",level:2},{value:"Explanation of Configuration",id:"explanation-of-configuration-3",level:3},{value:"Testing",id:"testing-3",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Yunikorn offers a range of features, including advanced capabilities like hierarchical resource queues, access control lists, resource limits, preemption, priority, and placement rules for managing your cluster. This page presents a real-world scenario to demonstrate the practical application of these features."}),"\n",(0,t.jsx)(n.p,{children:"We will now introduce the various functions and configurations of Yunikorn in sequence."}),"\n",(0,t.jsx)(n.p,{children:"The following will be included in this article\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Access control with ACL"}),"\n",(0,t.jsx)(n.li,{children:"Placement of different users"}),"\n",(0,t.jsx)(n.li,{children:"Limit usable resources on a queue level"}),"\n",(0,t.jsx)(n.li,{children:"Preemption and priority scheduling with fencing"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,t.jsxs)(n.p,{children:["Before configuring yunikorn-config, we need to create users using ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/",children:"Authentication"})," and ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",children:"RBAC"})," from Kubernetes."]}),"\n",(0,t.jsxs)(n.p,{children:["To create the necessary users for the example, you can download the ",(0,t.jsx)(n.code,{children:"create_user.sh"})," script directly from yunikorn-k8shim under ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/examples/authz/k8s-api-access",children:"deployment/examples/authz/k8s-api-access"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Here are the users we need to create:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"user"}),(0,t.jsx)(n.th,{children:"group"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"admin"}),(0,t.jsx)(n.td,{children:"admin"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sue"}),(0,t.jsx)(n.td,{children:"group-a"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bob"}),(0,t.jsx)(n.td,{children:"group-a"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"kim"}),(0,t.jsx)(n.td,{children:"group-b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"yono"}),(0,t.jsx)(n.td,{children:"group-b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"anonymous"}),(0,t.jsx)(n.td,{children:"anonymous"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"After the user is created, the pod can be obtained by the following command to confirm the creation is successful\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"kubectl --context=sue-context get pod\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When you are done testing, you can run ",(0,t.jsx)(n.code,{children:"./remove-user.sh"})," in the folder to delete all users."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"partition-and-queue-configuration",children:"Partition and Queue Configuration"}),"\n",(0,t.jsx)(n.p,{children:"In this use case, we configure the cluster for two purposes - system management and multi-tenancy, with two groups of tenants. Below is the queue configuration:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Root","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"system"}),"\n",(0,t.jsxs)(n.li,{children:["tenants","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"group-a"}),"\n",(0,t.jsx)(n.li,{children:"group-b"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"kind: ConfigMap\nmetadata:\n  name: yunikorn-configs\n  namespace: yunikorn\napiVersion: v1\ndata:\n  queues.yaml: |\n    partitions: \n    - name: default\n      queues:\n        - name: root\n          queues:\n          - name: system\n          - name: tenants\n            queues:\n              - name: group-a\n              - name: group-b\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the documentation on ",(0,t.jsx)(n.a,{href:"queue_config",children:"Partition and Queue Configuration"}),"\xa0for more information."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"usergroup-resolution--acl",children:"User/Group Resolution & ACL"}),"\n",(0,t.jsx)(n.p,{children:"In a multi-tenant environment, we want each user's workload to be independent from one another, with tenants restricted to using specific queues."}),"\n",(0,t.jsx)(n.p,{children:"In Yunikorn, there are two steps to manage users:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The Admission Controller resolves the username and group and adds the user's informantion to the Annotation."}),"\n",(0,t.jsx)(n.li,{children:"Yunikorn compares whether the user is in the ACL of a specific queue to determine whether the user has permission to deploy applications on that queue."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"explanation-of-configuration",children:"Explanation of Configuration"}),"\n",(0,t.jsx)(n.p,{children:"In the following example, we configure the configuration based on the following:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"user"}),(0,t.jsx)(n.th,{children:"group"}),(0,t.jsx)(n.th,{children:"Queue allowed to put"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"admin"}),(0,t.jsx)(n.td,{children:"admin"}),(0,t.jsx)(n.td,{children:"system"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sue"}),(0,t.jsx)(n.td,{children:"group-a"}),(0,t.jsx)(n.td,{children:"root.tenants.group-a"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bob"}),(0,t.jsx)(n.td,{children:"group-a"}),(0,t.jsx)(n.td,{children:"root.tenants.group-a"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"kim"}),(0,t.jsx)(n.td,{children:"group-b"}),(0,t.jsx)(n.td,{children:"root.tenants.group-b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"yono"}),(0,t.jsx)(n.td,{children:"group-b"}),(0,t.jsx)(n.td,{children:"root.tenants.group-b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"anonymous"}),(0,t.jsx)(n.td,{children:"anonymous"}),(0,t.jsx)(n.td,{children:"x"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["In this configuration, we allow users in the admin group to use the system queue by setting ",(0,t.jsx)(n.code,{children:"adminacl: admin"})," for the ",(0,t.jsx)(n.code,{children:"root.system"})," queue. We also allow the group-a and group-b groups to use their respective queues (",(0,t.jsx)(n.code,{children:"root.tenants.group-a"})," and ",(0,t.jsx)(n.code,{children:"root.tenants.group-b"}),") by setting ",(0,t.jsx)(n.code,{children:"adminacl: group-a"})," and ",(0,t.jsx)(n.code,{children:"adminacl: group-b"})," for each queue, respectively."]}),"\n",(0,t.jsx)(n.p,{children:"Configuration for testing :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'kind: ConfigMap\nmetadata:\n  name: yunikorn-configs\n  namespace: yunikorn\napiVersion: v1\ndata:\n  admissionController.accessControl.externalGroups: "admin,group-a,group-b"\n  queues.yaml: |\n    partitions: \n    - name: default\n      queues:\n        - name: root\n          queues:\n          - name: system\n            adminacl: " admin"\n          - name: tenants\n            queues:\n              - name: group-a\n                adminacl: " group-a"\n              - name: group-b\n                adminacl: " group-b"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"testing",children:"Testing"}),"\n",(0,t.jsx)(n.p,{children:"In this test scenario, we utilize three users to create a Pod, but the access control list restricts each user to create Pods only in the allowed queue."}),"\n",(0,t.jsx)(n.p,{children:"Among these users, one is named Sue and belongs to the group-a. Whenever Sue tries to create a Pod, the admission controller will first add the user's name and group to the Pod's annotation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'Annotations:      \n   ...\n   yunikorn.apache.org/user.info: {"user":"sue","groups":["group-a","system:authenticated"]}\n   ...\n'})}),"\n",(0,t.jsx)(n.p,{children:"The scheduler will then determine whether to allow or block the user's pod based on the access control list of the assigned queue."}),"\n",(0,t.jsxs)(n.p,{children:["Here are the results for different users assigned to different queues. You can use the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/examples/authz/acl",children:"YAML file"})," we provide to test :"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"user, group"}),(0,t.jsx)(n.th,{children:"Assign queue"}),(0,t.jsx)(n.th,{children:"result"}),(0,t.jsx)(n.th,{children:"YAML filename"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sue, group-a"}),(0,t.jsx)(n.td,{children:"root.tenants.group-a"}),(0,t.jsx)(n.td,{children:"created"}),(0,t.jsx)(n.td,{children:"nginx-1.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sue, group-a"}),(0,t.jsx)(n.td,{children:"root.tenants.group-b"}),(0,t.jsx)(n.td,{children:"blocked"}),(0,t.jsx)(n.td,{children:"nginx-1.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"kim, group-b"}),(0,t.jsx)(n.td,{children:"root.tenants.group-a"}),(0,t.jsx)(n.td,{children:"blocked"}),(0,t.jsx)(n.td,{children:"nginx-2.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"kim, group-b"}),(0,t.jsx)(n.td,{children:"root.tenants.group-b"}),(0,t.jsx)(n.td,{children:"created"}),(0,t.jsx)(n.td,{children:"nginx-2.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"anonymous, anonymous"}),(0,t.jsx)(n.td,{children:"root.tenants.group-a"}),(0,t.jsx)(n.td,{children:"blocked"}),(0,t.jsx)(n.td,{children:"nginx-3.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"anonymous, anonymous"}),(0,t.jsx)(n.td,{children:"root.tenants.group-b"}),(0,t.jsx)(n.td,{children:"blocked"}),(0,t.jsx)(n.td,{children:"nginx-3.yaml"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["See the documentation on ",(0,t.jsx)(n.a,{href:"usergroup_resolution",children:"User & Group Resolution"})," or ",(0,t.jsx)(n.a,{href:"acls",children:"ACLs"}),"\xa0for more information."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"placement-of-different-users",children:"Placement of different users"}),"\n",(0,t.jsx)(n.p,{children:"To simplify the user's experience, the scheduler can dynamically assign the application to a queue and create a new queue if necessary. By setting up the placement rules properly, the user won't need to specify the queue to run their application on."}),"\n",(0,t.jsx)(n.h3,{id:"explanation-of-configuration-1",children:"Explanation of Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Yunikorn offers extensive support for placement rules, allowing users to assign queues based on the namespace or username of the Pod, or to create queues based on user specifications."}),"\n",(0,t.jsx)(n.p,{children:'Let\'s take the "admin" user as an example to explain the configuration. We want the scheduler to create a new queue based on the queue provided by the "admin":'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"placementrules:\n  - name: provided\n    create: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To further restrict users and provide different placement rules for different users, we need to use ",(0,t.jsx)(n.code,{children:"filter"})," since the previous configuration cannot achieve this."]}),"\n",(0,t.jsxs)(n.p,{children:["Additionally, we want to separate the system and tenant queues, and for queues created by the admin, we want them to be under the system queue. To do so, we use the ",(0,t.jsx)(n.code,{children:"parent"})," attribute."]}),"\n",(0,t.jsxs)(n.p,{children:["To allow the queue to be designated as a parent, we need to set ",(0,t.jsx)(n.code,{children:"parent: true"})," in the parent queue."]}),"\n",(0,t.jsx)(n.p,{children:"Finally, we extend the configuration as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"placementrules:\n  - name: provided\n    create: true\n    parent: # Specify the parent of the created queue as root.system\n      name: fixed\n      value: root.system\n    filter: # Only admin is allowed to use the rule\n      type: allow\n      users:\n        - admin\n      groups:\n        - admin\n"})}),"\n",(0,t.jsx)(n.p,{children:"In the following example, we configure the configuration based on the following:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"group"}),(0,t.jsx)(n.th,{children:"placement rule"}),(0,t.jsx)(n.th,{children:"fixed parent"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"admin"}),(0,t.jsx)(n.td,{children:"provided"}),(0,t.jsx)(n.td,{children:"root.system"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"group-a"}),(0,t.jsx)(n.td,{children:"username"}),(0,t.jsx)(n.td,{children:"root.tenants.group-a"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"group-b"}),(0,t.jsx)(n.td,{children:"namespace"}),(0,t.jsx)(n.td,{children:"root.tenants.group-b"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Configuration for testing :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'kind: ConfigMap\nmetadata:\n  name: yunikorn-configs\n  namespace: yunikorn\napiVersion: v1\ndata:\n  admissionController.accessControl.externalGroups: "admin,group-a,group-b"\n  queues.yaml: |\n    partitions: \n      - name: default\n        placementrules:\n          - name: provided\n            create: true\n            parent:\n              name: fixed\n              value: root.system\n              filter:\n                type: allow\n                users:\n                  - admin\n                groups:\n                  - admin\n          - name: user\n            create: true\n            filter:\n              type: allow\n              groups:\n                - group-a\n            parent:\n              name: fixed\n              value: root.tenants.group-a\n          - name: tag\n            value: namespace\n            create: true\n            filter:\n              type: allow\n              groups:\n                - group-b\n            parent:\n              name: fixed\n              value: root.tenants.group-b\n        queues:\n          - name: root\n            queues:\n            - name: system\n              adminacl: " admin"\n              parent: true  # Let the queue be designated as the parent queue\n            - name: tenants\n              parent: true\n              queues:\n                - name: group-a\n                  adminacl: " group-a"\n                  parent: true\n                - name: group-b\n                  adminacl: " group-b"\n                  parent: true\n'})}),"\n",(0,t.jsx)(n.h3,{id:"testing-1",children:"Testing"}),"\n",(0,t.jsx)(n.p,{children:"In this test example, we use three users to verify all the placement rules."}),"\n",(0,t.jsxs)(n.p,{children:["The following results are generated when creating a Pod according to different rules. You can use the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/examples/authz/placement-rules",children:"YAML file"})," we provide for testing:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"placement rule"}),(0,t.jsx)(n.th,{children:"user, group"}),(0,t.jsx)(n.th,{children:"provide queue"}),(0,t.jsx)(n.th,{children:"namespace"}),(0,t.jsx)(n.th,{children:"Expected to be placed on"}),(0,t.jsx)(n.th,{children:"YAML filename"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"provided"}),(0,t.jsx)(n.td,{children:"admin, admin"}),(0,t.jsx)(n.td,{children:"root.system.high-priority"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"root.system.high-priority"}),(0,t.jsx)(n.td,{children:"nginx-admin.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"provided"}),(0,t.jsx)(n.td,{children:"admin, admin"}),(0,t.jsx)(n.td,{children:"root.system.low-priority"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"root.system.low-priority"}),(0,t.jsx)(n.td,{children:"nginx-admin.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"username"}),(0,t.jsx)(n.td,{children:"sue, group-a"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"root.tenants.group-a.sue"}),(0,t.jsx)(n.td,{children:"nginx-sue.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tag (value: namespace)"}),(0,t.jsx)(n.td,{children:"kim, group-b"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"dev"}),(0,t.jsx)(n.td,{children:"root.tenants.group-b.dev"}),(0,t.jsx)(n.td,{children:"nginx-kim.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tag (value: namespace)"}),(0,t.jsx)(n.td,{children:"kim, group-b"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"test"}),(0,t.jsx)(n.td,{children:"root.tenants.group-b.test"}),(0,t.jsx)(n.td,{children:"nginx-kim.yaml"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["See the documentation on ",(0,t.jsx)(n.a,{href:"placement_rules",children:"App Placement Rules"}),"\xa0for more information."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"limit-usable-resources-on-a-queue-level",children:"Limit usable resources on a queue level"}),"\n",(0,t.jsx)(n.p,{children:"To avoid unfair resource usage, we can limit and reserve the amount of resources per queue."}),"\n",(0,t.jsx)(n.h3,{id:"explanation-of-configuration-2",children:"Explanation of Configuration"}),"\n",(0,t.jsx)(n.p,{children:"In the following example, we configure the configuration based on the following:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"queue"}),(0,t.jsx)(n.th,{children:"guaranteed"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"max"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"memory(G)"}),(0,t.jsx)(n.td,{children:"vcore"}),(0,t.jsx)(n.td,{children:"memory(G)"}),(0,t.jsx)(n.td,{children:"vcore"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root"}),(0,t.jsx)(n.td,{children:"x"}),(0,t.jsx)(n.td,{children:"x"}),(0,t.jsx)(n.td,{children:"15.6"}),(0,t.jsx)(n.td,{children:"16"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.system"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"6"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.tenants"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.tenants.group-a"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.tenants.group-b"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Configuration for testing :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'kind: ConfigMap\nmetadata:\n  name: yunikorn-configs\n  namespace: yunikorn\napiVersion: v1\ndata:\n  admissionController.accessControl.externalGroups: "admin,^group-$"\n  queues.yaml: |\n    partitions: \n    - name: default\n      queues:\n        - name: root\n          queues:\n          - name: system\n            adminacl: " admin"\n            resources:\n              guaranteed:\n                {memory: 2G, vcore: 2}\n              max:\n                {memory: 6G, vcore: 6}\n          - name: tenants\n            resources:\n              guaranteed:\n                {memory: 2G, vcore: 2}\n              max:\n                {memory: 4G, vcore: 8}\n            queues:\n              - name: group-a\n                adminacl: " group-a"\n                resources:\n                  guaranteed:\n                    {memory: 1G, vcore: 1}\n                  max:\n                    {memory: 2G, vcore: 4}\n              - name: group-b\n                adminacl: " group-b"\n                resources:\n                  guaranteed:\n                    {memory: 1G, vcore: 1}\n                  max:\n                    {memory: 2G, vcore: 4}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"testing-2",children:"Testing"}),"\n",(0,t.jsxs)(n.p,{children:["In the following example, we restrict ",(0,t.jsx)(n.code,{children:"root.tenants.group-a"})," to use a maximum of ",(0,t.jsx)(n.code,{children:"{memory: 2G, vcore: 4}"})," resources."]}),"\n",(0,t.jsxs)(n.p,{children:["When group-A is deployed in ",(0,t.jsx)(n.code,{children:"root.tenants.group-a"})," and the required resources exceed the limit, the remaining pods will be blocked."]}),"\n",(0,t.jsxs)(n.p,{children:["The results of deploying Pods in different queues are shown below. You can use the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/examples/authz/resource-limits",children:"YAML file"})," we provide for testing."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"user, group"}),(0,t.jsx)(n.th,{children:"Resource Limits for Destination Queues"}),(0,t.jsx)(n.th,{children:"request resources for each replicas"}),(0,t.jsx)(n.th,{children:"replica"}),(0,t.jsx)(n.th,{children:"result"}),(0,t.jsx)(n.th,{children:"YAML filename"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"admin, admin"}),(0,t.jsx)(n.td,{children:"{memory: 6G, vcore: 6}"}),(0,t.jsx)(n.td,{children:"{memory: 512M, vcore: 250m}"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"run all replica"}),(0,t.jsx)(n.td,{children:"nginx-admin.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sue, group-A"}),(0,t.jsx)(n.td,{children:"{memory: 2G, vcore: 4}"}),(0,t.jsx)(n.td,{children:"{memory: 512M, vcore: 500m}"}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"run 3 replica (4 replica will exceed the resource limit)"}),(0,t.jsx)(n.td,{children:"nginx-sue.yaml"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["See the documentation on ",(0,t.jsx)(n.a,{href:"queue_config#resources",children:"Partition and Queue Configuration #Resources"}),"\xa0for more information."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"preemption--priority-scheduling-with-fencing",children:"Preemption & Priority scheduling with fencing"}),"\n",(0,t.jsx)(n.p,{children:"YuniKorn supports priority scheduling, where priorities can be assigned to each task and also to each queue."}),"\n",(0,t.jsx)(n.p,{children:"This section demonstrates how to configure priority in a queue. If you want to configure the priority of each task, you can learn more about it from document Pod Priority and Preemption on Kubernete ."}),"\n",(0,t.jsx)(n.h3,{id:"explanation-of-configuration-3",children:"Explanation of Configuration"}),"\n",(0,t.jsx)(n.p,{children:"In the following example, we configure the configuration based on the following:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"queue"}),(0,t.jsx)(n.th,{children:"offset"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.system"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.system.high-priority"}),(0,t.jsx)(n.td,{children:"1000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.system.normal-priority"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.system.low-priority"}),(0,t.jsx)(n.td,{children:"-1000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.tenants"}),(0,t.jsx)(n.td,{children:"0 (fenced)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.tenants.group-a"}),(0,t.jsx)(n.td,{children:"20 (fenced)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.tenants.group-b"}),(0,t.jsx)(n.td,{children:"5 (fenced)"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"By default, all priorities are globally scoped, which means that all high-priority queues will be served first. However, we can also limit the priority to certain queues."}),"\n",(0,t.jsxs)(n.p,{children:["The following configuration sets up a fence to ensure that the priorities of the ",(0,t.jsx)(n.code,{children:"root.tenants"})," queues (and their sub-queues) are evaluated internally."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'kind: ConfigMap\nmetadata:\n  name: yunikorn-configs\n  namespace: yunikorn\napiVersion: v1\ndata:\n  queues.yaml: |\n    partitions: \n    - name: default\n      queues:\n        - name: root\n          properties:\n              application.sort.policy: fifo       # default value: fifo\n              application.sort.priority: enabled  # default value: enable\n          queues:\n          - name: system\n            adminacl: " admin"\n            queues:\n              - name: high-priority\n                properties:\n                  priority.offset: "1000"\n              - name: normal-priority\n                properties:\n                  priority.offset: "0"\n              - name: low-priority\n                properties:\n                  priority.offset: "-1000"\n          - name: tenants\n            properties:\n              priority.policy: "fence"\n            queues:\n              - name: group-a\n                adminacl: " group-a"\n                properties:\n                  priority.offset: "20"\n              - name: group-b\n                adminacl: " group-b"\n                properties:\n                  priority.offset: "5"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"testing-3",children:"Testing"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Case 1: priority"})}),"\n",(0,t.jsx)(n.p,{children:"In the first test, we deploy an equal number of Pods with identical resource requests to three queues with different priorities. Without any priorities, we would expect to see an equal number of Pods deployed to each queue."}),"\n",(0,t.jsx)(n.p,{children:"However, with priorities and limited resources, the high-priority queue can deploy all of its Pods, the medium-priority queue can deploy some Pods, and the low-priority queue won't be able to deploy any Pods until resources are released by the high-priority queue."}),"\n",(0,t.jsxs)(n.p,{children:["In the following tests, we run the environment with a node resource limit of ",(0,t.jsx)(n.code,{children:"{memory:16GB, vcore:16}"}),". Note that results will vary based on the environment, and you can modify the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/examples/authz/priority",children:"YAML file"})," we provide to achieve similar results."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"queue"}),(0,t.jsx)(n.th,{children:"offset"}),(0,t.jsx)(n.th,{children:"# of deploy apps"}),(0,t.jsx)(n.th,{children:"# of apps accept by yunikorn"}),(0,t.jsx)(n.th,{children:"YAML filename"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.system.low-priority"}),(0,t.jsx)(n.td,{children:"1000"}),(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"system.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.system.normal-priority"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"system.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.system.high-priority"}),(0,t.jsx)(n.td,{children:"-1000"}),(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"system.yaml"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Case 2: priority-fenced"})}),"\n",(0,t.jsx)(n.p,{children:"In the second test, we deploy the same number of Pods with the same resource requests to three different priority queues. However, this time, two queues are configured with a fence."}),"\n",(0,t.jsxs)(n.p,{children:["While scheduling the task. Even though ",(0,t.jsx)(n.code,{children:"root.tenants.group-a"})," has a higher priority than the other two queues, the scheduler will still execute root.system.normal first, which is in the global scope. Then, the scheduler will compare priorities within the local scope of ",(0,t.jsx)(n.code,{children:"root.tenants"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For the following tests, we run them in an environment with node resources of ",(0,t.jsx)(n.code,{children:"{memory:16GB, vcore:16}"}),". The results will vary in different environments, but you can obtain similar results by modifying the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/examples/authz/priority",children:"YAML file"})," we provide."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"queue"}),(0,t.jsx)(n.th,{children:"offset"}),(0,t.jsx)(n.th,{children:"# of deploy apps"}),(0,t.jsx)(n.th,{children:"# of apps accept by yunikorn"}),(0,t.jsx)(n.th,{children:"YAML filename"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.system.normal-priority"}),(0,t.jsx)(n.td,{children:"0 (global)"}),(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"nginx-admin.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.tenants.group-a"}),(0,t.jsx)(n.td,{children:"20 (fenced)"}),(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"nginx-sue.yaml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"root.tenants.group-b"}),(0,t.jsx)(n.td,{children:"5 (fenced)"}),(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"nginx-kim.yaml"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["See the documentation on ",(0,t.jsx)(n.a,{href:"priorities",children:"App & Queue Priorities"}),"\xa0for more information."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1780:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(79474);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);