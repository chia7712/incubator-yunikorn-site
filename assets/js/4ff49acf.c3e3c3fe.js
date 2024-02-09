"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86288],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>d});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),g=a,d=h["".concat(u,".").concat(g)]||h[g]||p[g]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(45072),a=(n(11504),n(95788));const o={id:"user_group_resource_usage_enforcement",title:"User Based Quota Enforcement"},i=void 0,s={unversionedId:"design/user_group_resource_usage_enforcement",id:"design/user_group_resource_usage_enforcement",title:"User Based Quota Enforcement",description:"\x3c!--",source:"@site/docs/design/user_group_enforcement.md",sourceDirName:"design",slug:"/design/user_group_resource_usage_enforcement",permalink:"/docs/next/design/user_group_resource_usage_enforcement",draft:!1,tags:[],version:"current",frontMatter:{id:"user_group_resource_usage_enforcement",title:"User Based Quota Enforcement"},sidebar:"docs",previous:{title:"User Based Resource Usage Tracking",permalink:"/docs/next/design/user_based_resource_usage_tracking"},next:{title:"Historical Usage Tracking",permalink:"/docs/next/design/historical_usage_tracking"}},u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Goals",id:"goals",level:2},{value:"Non Goals",id:"non-goals",level:2},{value:"Configuration processing",id:"configuration-processing",level:2},{value:"Generic behaviour",id:"generic-behaviour",level:3},{value:"Wildcard interpretation",id:"wildcard-interpretation",level:3},{value:"User",id:"user",level:4},{value:"Group",id:"group",level:4},{value:"Example configuration",id:"example-configuration",level:3},{value:"Syntax checking",id:"syntax-checking",level:3},{value:"Quota checks",id:"quota-checks",level:3},{value:"Configuration updates and storage",id:"configuration-updates-and-storage",level:2},{value:"Processing changes existing objects",id:"processing-changes-existing-objects",level:3},{value:"Queue tracking",id:"queue-tracking",level:3},{value:"User tracking",id:"user-tracking",level:3},{value:"Group tracking",id:"group-tracking",level:3},{value:"New queue to track",id:"new-queue-to-track",level:2},{value:"Enforcement changes",id:"enforcement-changes",level:2},{value:"Tracker interface update",id:"tracker-interface-update",level:3},{value:"User tracking",id:"user-tracking-1",level:3},{value:"Group tracking",id:"group-tracking-1",level:3},{value:"Queue tracking",id:"queue-tracking-1",level:3},{value:"Hierarchy traversal",id:"hierarchy-traversal",level:3},{value:"Exposure of quota details",id:"exposure-of-quota-details",level:2}],c={toc:l},h="wrapper";function p(e){let{components:t,...o}=e;return(0,a.yg)(h,(0,r.c)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Enforcing resource allocation usage is currently limited to a queue.\nAs part of the allocation process for an application, which owns the allocation, triggers an update of the resource usage for users and groups.\nThe tracking for ",(0,a.yg)("a",{parentName:"p",href:"user_based_resource_usage_tracking"},"user resource usage tracking in YuniKorn")," is described and implemented independently of the enforcement."),(0,a.yg)("p",null,"This design builds on top of the tracking design as referenced above. Like a queue a user/group could have a limit set.\nA limit can specify a resource usage quota, and an application usage limit.\nEnforcing the limit which connects the usage to the limit settings is covered in this design."),(0,a.yg)("h2",{id:"goals"},"Goals"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Implementation of the enforcement for user and group limits:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Resource usage quota"),(0,a.yg)("li",{parentName:"ul"},"Running applications"))),(0,a.yg)("li",{parentName:"ul"},"Configuration processing",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Process limit object values from the queue configuration"))),(0,a.yg)("li",{parentName:"ul"},"Updates to the tracking interface to support enforcement as part of increases:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Increase a user/group running applications"),(0,a.yg)("li",{parentName:"ul"},"Increase a user/group resource usage")))),(0,a.yg)("h2",{id:"non-goals"},"Non Goals"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"User and group retrieval is part of the k8shim which is out of scope"),(0,a.yg)("li",{parentName:"ul"},"Exposing usage as a metric into prometheus"),(0,a.yg)("li",{parentName:"ul"},"Enforcement of queue quotas or running applications."),(0,a.yg)("li",{parentName:"ul"},"Tracking of users and or groups, see ",(0,a.yg)("a",{parentName:"li",href:"user_based_resource_usage_tracking"},"User and Group usage tracking design doc"))),(0,a.yg)("h2",{id:"configuration-processing"},"Configuration processing"),(0,a.yg)("p",null,"The queue configuration definition has a limit object defined as ",(0,a.yg)("a",{parentName:"p",href:"../user_guide/queue_config#limits"},"per the documentation"),".\nUser and group limits are based on those objects.\nHowever the current configuration processing only performs a syntax check not a content check."),(0,a.yg)("h3",{id:"generic-behaviour"},"Generic behaviour"),(0,a.yg)("p",null,"Limits can be configured for queues at any level. Limits are applied recursively in the case of a queue limit.\nThis means that a limit on the root queue is an overall limit in the cluster for the user or group.\nA root queue limit is thus also equivalent with the partition limit. While if both the root queue limit and the partition limit exist and are not equal, an error will be returned."),(0,a.yg)("p",null,"A limit is per individual user or group. It is not a combined limit for all users or groups specified in the limit object.\nSee the below limit object as an example.\nIn this example both users sue and bob are allowed to run 2 applications and can each use 10 cpu and 250G of memory.\nUsers and or groups not defined are not affected by this limit object."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'- limit: "example entry"\n  maxapplications: 2\n  maxresources:\n  cpu: 10\n  memory: 250G\n  users:\n    - sue\n    - bob\n')),(0,a.yg)("p",null,"In the case that limits are configured at multiple levels in the hierarchy a fixed order of enforcement is used.\nLike with queue quotas, checks start at the leaf queue and work their way up the hierarchy finishing at the root level.\nFor the limit configuration processing the same needs to be implemented and the config should be rejected if it does not comply.\nAny limit set at any level below the root must always be smaller or equal to the root limit."),(0,a.yg)("p",null,"The checks for the limit configuration must be part of the generic configuration checks currently performed as part of the loading of the configuration.\nWe cannot allow the configuration to be accepted at the queue level and later be denied at the limit level checks. A change is all or nothing, we cannot apply partial changes. Configuration checks must be made without impacting the scheduling cycles. After the change has passed the configuration check the changed configuration must then be applied in a single action."),(0,a.yg)("h3",{id:"wildcard-interpretation"},"Wildcard interpretation"),(0,a.yg)("p",null,"Wildcard can only be used as the only entry in the limit object according to the documentation.\nThere can be multiple limit objects in the overall limits for a queue.\nAs part of this design the interpretation of the wildcard needs to be defined.\nWildcards interpretation is related to the ordering of the limit objects in the overall limits object.\nThe usage and interpretation will be different for users and groups."),(0,a.yg)("p",null,"In general terms: allowing a wildcard in the user or group list only as part of the last entry of the limits list.\nAfter the wildcard has been added for either the user or group list we do not allow a user or group list with a non wildcard entry.\nThis is especially important for the group resolution. It does allow specifying a user and group wildcard with different limits set.\nIn all cases, there will only be a match using the wildcard if none of the earlier limit entries match."),(0,a.yg)("h4",{id:"user"},"User"),(0,a.yg)("p",null,"Users that are specified as part of a limit will be assigned that specific limit.\nIf a limit with a wildcard is specified all users that are not already assigned a limit will be assigned the wildcard limit.\nFor the user entry the wildcard sets a default quota for every user on that queue. Overridden by the named user entries."),(0,a.yg)("p",null,"Specifying a single limit for users using the wildcard is allowed. There is no requirement to have a wildcard entry."),(0,a.yg)("h4",{id:"group"},"Group"),(0,a.yg)("p",null,"For groups the interpretation is slightly more complex.\nAs explained as part of the tracking documentation the group that the usage is tracked against must match the membership of the user.\nA wildcard group matches any group."),(0,a.yg)("p",null,"Specifying a wildcard for the group limit sets a cumulative limit for all users in that queue.\nIf there is no specific group mentioned the wildcard group limit would thus be the same as the queue limit.\nFor that reason we do not allow specifying only one group limit that is using the wildcard.\nThere must be at least one limit with a group name defined."),(0,a.yg)("p",null,"The combination of one or more named group limits with a wildcard group limit is allowed.\nThere is no requirement to have a wildcard entry."),(0,a.yg)("p",null,"The hierarchy is considered bottom up, starting from the leaf up to the root.\nThe first group that is specified in the queue hierarchy for limiting usage that matches a group in the ",(0,a.yg)("em",{parentName:"p"},"UserGroup")," object is selected for that application.\nThat definition has an impact on the wildcard interpretation and the wildcard has an impact on the group selection.\nThe wildcard will indirectly affect group quotas set for a specific group higher up in the hierarchy.\nThis point needs clear documentation as part of the group selection algorithm and its side effects."),(0,a.yg)("h3",{id:"example-configuration"},"Example configuration"),(0,a.yg)("p",null,"An example of a set of limits. A mixture of a user and multiple groups each with a limit.\nFollowed by the catch-all for both users and groups with separate resource limits."),(0,a.yg)("p",null,"In the example below all users, except the user \u201csue\u201d have the same limit set. Members of the group \u201cdevelopment\u201d and the group \u201ctest\u201d both have the same limit set. All other users who are not a member of the group \u201cdevelopment\u201d or \u201ctest\u201d are counted towards the cumulative group limit."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'limits:\n- limit: "specific user"\n  users:\n  - "sue"\n  maxresources: {memory: 25G, vcore: 5}\n- limit: "specific groups"\n  groups:\n  - "development"\n  - "test"\n  maxresources: {memory: 100G, vcore: 10}\n- limit: "user catch all"\n  users:\n  - "*"\n  maxresources: {memory: 10G, vcore: 1}\n- limit: "group catch all"\n  groups:\n  - "*"\n  maxresources: {memory: 50G, vcore: 10}\n')),(0,a.yg)("h3",{id:"syntax-checking"},"Syntax checking"),(0,a.yg)("p",null,"As part of the already existing queue configuration processing the syntax for the configuration is checked.\nThis check is triggered also for a reload of the file, via the config map, or the REST interface.\nRudimentary limit object checking is implemented as part of the config check."),(0,a.yg)("p",null,"The above described changes around the wildcards and what is allowed is not part of the configuration validation and must be added."),(0,a.yg)("h3",{id:"quota-checks"},"Quota checks"),(0,a.yg)("p",null,"No checks are performed for the limits against the queue quotas.\nThis means that as part of the current checks a limit can be set that is higher than the queue would allow.\nThere is also no hierarchical check in place. This means that a child could set higher limits than is possible based on the parent settings."),(0,a.yg)("p",null,"The configuration validation processing must be extended to the limit objects.\nAt each level in the configuration the resource quota assigned in a limit must be smaller than the maximum allowed at that level for the queue.\nThe queue quota processing already has this builtin and the limit should be checked against the quota."),(0,a.yg)("p",null,"The hierarchical check for limits contains a further complexity.\nA limit at one level might not apply to the same users or groups as the limit at the level below it.\nAn implementation decision will need to be made on how far we want to go with the checks.\nMost, if not all, of the configurations that we do not want to allow do not break the system.\nWe will not be able to check user and group interactions as we do not know the group memberships.\nThe only thing we can check is the same user or group at different levels in the hierarchy."),(0,a.yg)("h2",{id:"configuration-updates-and-storage"},"Configuration updates and storage"),(0,a.yg)("p",null,"The configuration is read as part of the queue configuration.\nThe queue configuration when processed creates, deletes or updates queues from the queue structure as appropriate.\nFor limits linked to users or groups we could pre-generate the named entries but we cannot do that for wildcards.\nTo support wildcards we need to at least store the configuration inside the user group manager code."),(0,a.yg)("p",null,"The definition of the configuration store and the methods that need to be defined will be left as an implementation detail.\nIt must be internal to the user group manager and will be based on the existing configuration objects."),(0,a.yg)("p",null,"The configuration for the limits should be maintained as a separate hierarchy from the scheduling queues and the tracked users and groups.\nThis is required to allow parallel processing of changes and scheduling.\nThis becomes more important with an increased number of users, groups and or queues."),(0,a.yg)("p",null,"Proposal is to pass the full configuration after it has been accepted by the system to an independent update routine for updating the affected objects in the user group manager."),(0,a.yg)("h3",{id:"processing-changes-existing-objects"},"Processing changes existing objects"),(0,a.yg)("p",null,"As configuration changes are based on queue changes a single queue change could trigger multiple tracker object changes."),(0,a.yg)("p",null,"Applying the change from the configuration to an existing object in the structure of the user group manager would be initiated from the queue configuration traversal.\nAll entries inside the limit are then processed.\nA comparison between the existing and new values is required to allow the correct removal of a limit via the updated configuration."),(0,a.yg)("p",null,"If the user object does not exist the update will be a NOP, otherwise the user object will be updated by calling the setter method with the corresponding values."),(0,a.yg)("p",null,"Wildcards will trigger an update of all objects of the specific type, user or group, for the queue they are linked to.\nThese kinds of updates could be expensive which also warrants the case for comparison of the existing values."),(0,a.yg)("h3",{id:"queue-tracking"},"Queue tracking"),(0,a.yg)("p",null,"The queueTracker object is the location where the limits are actually stored. The user and group objects do not contain the settings."),(0,a.yg)("p",null,"The setter methods defined need to transparently handle the update.\nThere should be no difference in behaviour to an update of existing values or setting values that do not exist.\nAs an example: a leaf queue might have a value set for the maximum resources for the user.\nThe new configuration does not have a value set. The setter must clear the existing value.\nSecond example: a limit on a queue is not set for a group.\nThe new configuration does set a limit for the group.\nThis should not result in the queue(s) in the hierarchy to be created.\nIf the queue exists in the hierarchy it will be updated."),(0,a.yg)("p",null,"The following change is made to the queueTracker object.\nNew fields are added to store the limit for the applications and the resources.\nNew methods are added to allow updating these new values from a configuration change."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"package user_group_manager\n\ntype queueTracker struct {\n    queueName           string\n    resourceUsage       *Resource\n    runningApplications map[string]boolean\n    maxResourceUsage    *Resource\n    maxRunningApps      unit64\n\n    childQueues   map[string]*queueTracker\n}\n\n(qt *queueTracker) setMaxApplications(count uint64, queuePath string)\n(qt *queueTracker) setMaxResources(resource *Resource, queuePath string)\n")),(0,a.yg)("p",null,"An empty queue path indicates that the change needs to be applied to the current queue object. The queuePath is a fully qualified queue path that starts with \u201croot\u2019."),(0,a.yg)("h3",{id:"user-tracking"},"User tracking"),(0,a.yg)("p",null,"The following change is made to the userTracker object. New methods to allow updating the new limit values stored in the queue objects."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"package user_group_manager\n\n(ut *userTracker) setMaxApplications(count uint64, queuePath string)\n(ut *userTracker) setMaxResources(resource *Resource, queuePath string)\n")),(0,a.yg)("h3",{id:"group-tracking"},"Group tracking"),(0,a.yg)("p",null,"The following change is made to the groupTracker object. New methods to allow updating the new limit values stored in the queue objects."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"package user_group_manager\n\n(ut *groupTracker) setMaxApplications(count uint64, queuePath string)\n(ut *groupTracker) setMaxResources(resource *Resource, queuePath string)\n")),(0,a.yg)("h2",{id:"new-queue-to-track"},"New queue to track"),(0,a.yg)("p",null,"As part of the usage tracking new objects are created for the users and or groups that are tracked.\nFor users there is a change required to make sure the correct limits are set.\nThis happens at two points while processing users.\nFirst is during the creation of a new user tracker object.\nSecond is while increasing the usage of a queue which does not exist yet in the hierarchy."),(0,a.yg)("p",null,"The logic to retrieve the configuration should be built into the creation of the queueTracker objects.\nThe objects are not pre-created. They are only created as part of the ",(0,a.yg)("em",{parentName:"p"},"increaseResource")," call.\nThe current call does not allow passing in the identity that the queue object is tracking for.\nThat detail is stored in the container object: the userTracker or groupTracker object."),(0,a.yg)("p",null,"To allow the automatic creation of the queueTracker objects the identity will need to be passed into the increaseResource call of the queueTracker object.\nThe identity and type are required to find the configuration setting and apply the proper limits during the creation of the queueTracker object."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"package user_group_manager\n\ntype trackingType int\n\nconst (\n    none trackingType = iota\n    user\n    group\n)\n\n(qt *queueTracker) increaseResource(queuePath, applicationID, identity string, type trackingType, usage *Resource)\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("em",{parentName:"p"},"trackingType")," specifies one of the two types we can track. An iota is preferred above the usage of a plain integer or boolean (user true or false) kind of setup."),(0,a.yg)("h2",{id:"enforcement-changes"},"Enforcement changes"),(0,a.yg)("h3",{id:"tracker-interface-update"},"Tracker interface update"),(0,a.yg)("p",null,"The current tracker does not support denying a change. For enforcement of quotas on the usage there has to be a possibility to deny a change.\nThis denial can only occur on an increase of tracked resources. A decrease of the usage, i.e. a removal of an allocation because a pod has finished, can never be denied."),(0,a.yg)("p",null,"This limits the change to support quota enforcement to a single change in the Tracker interface.\nThe ",(0,a.yg)("em",{parentName:"p"},"IncreaseTrackedResource")," call returns the state of the increase requested.\nThe return value can either be true or false. The call must only return true if the increase is allowed for both the user and the group tracked for the request.\nIf either of the userTracker or groupTracker quota would be exceeded no change is made to either object and false is returned."),(0,a.yg)("p",null,"The following change is made to the Tracker interface:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"package user_group_manager\n\ntype Tracker interface {\n    IncreaseTrackedResource(queuePath, applicationID string, usage *Resource, user *security.UserGroup) bool\n    DecreaseTrackedResource(queuePath, applicationID string, usage *Resource, removeApp bool, user *security.UserGroup)\n}\n")),(0,a.yg)("p",null,"The change must be applied to both userTracker and groupTracker.\nUntil the change is applied to both the userTracker and groupTracker, no other updates are allowed of either object.\nThe increase and decrease processing must still follow the same order. Both must update the userTracker and related groupTracker objects in the same order.\nThis was a requirement described in the tracking design and that has not changed."),(0,a.yg)("p",null,"If the call to ",(0,a.yg)("em",{parentName:"p"},"IncreaseTrackedResource")," returns false the allocation that triggered the change needs to be abandoned.\nAny change that was made to objects inside the scheduler, like an application, queue or node, must be reversed.\nThe scheduling cycle proceeds as if no allocation was made."),(0,a.yg)("p",null,"The error return value for both the ",(0,a.yg)("em",{parentName:"p"},"IncreaseTrackedResource")," and the ",(0,a.yg)("em",{parentName:"p"},"DecreaseTrackedResource")," have been removed.\nThe reason is that there is nothing that could be done by the caller to change the outcome or fail any changes if an error was returned.\nBoth functions should still log the error case as it could point to a bug in the code.\nA caller should never have to pass in empty or nil parameters."),(0,a.yg)("h3",{id:"user-tracking-1"},"User tracking"),(0,a.yg)("p",null,"The following change is made to the userTracker method. There is no change to the structure itself for the enforcement checks:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"package user_group_manager\n\n(ut *userTracker) increaseResource(queuePath, applicationID string, alloc *Resource) bool\n")),(0,a.yg)("h3",{id:"group-tracking-1"},"Group tracking"),(0,a.yg)("p",null,"The following change is made to the groupTracker method. There is no change to the structure itself for the enforcement checks:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"package user_group_manager\n\n(gt *groupTracker) increaseResource(queuePath, applicationID string, alloc *Resource) bool\n")),(0,a.yg)("h3",{id:"queue-tracking-1"},"Queue tracking"),(0,a.yg)("p",null,"The following change is made to the queueTracker method. There is no change to the structure itself for the enforcement checks:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"package user_group_manager\n\n(qt *queueTracker) increaseResource(queuePath, applicationID, identity string, type trackingType, usage *Resource) bool\n")),(0,a.yg)("p",null,"Note that the above change includes the change described earlier which was made to support the automatic creation of the queue objects as part of the increaseResource call."),(0,a.yg)("h3",{id:"hierarchy-traversal"},"Hierarchy traversal"),(0,a.yg)("p",null,"The implementation of the hierarchical check should follow the same pattern as we currently do for the queues.\nThere is one major difference between the queue checks and the user and group checks.\nFor the queues we do not attempt to allocate unless there is unused quota available.\nThis starts at the top of the hierarchy and prevents recursing into the depth of the hierarchy towards the leaf queue."),(0,a.yg)("p",null,"For the users and groups we have already ended up as the leaf of the structure.\nChecks will thus start at the leaf and work their way up to the root of the structure.\nA check will be performed while traversing up the hierarchy. The traversal up the tree will stop if the check fails.\nThe change is applied when unwinding the traversal. This will guarantee a change is only committed when the whole hierarchy can be updated."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"queue hierarchy traversal",src:n(2984).c,width:"796",height:"1255"})),(0,a.yg)("p",null,"Diagram of the quota check traversal related to the queue hierarchy."),(0,a.yg)("h2",{id:"exposure-of-quota-details"},"Exposure of quota details"),(0,a.yg)("p",null,"The usage tracking information that is part of the user group manager is exposed for external consumption via REST.\nThe quotas set as part of the queue objects should be exposed in the REST output.\nExposing the quota independent of the usage makes interpretation difficult."),(0,a.yg)("p",null,"The quota set in the queueTracker at the specific entry is the quota that is enforced on that entry.\nFrom a troubleshooting perspective this would be a requirement to allow an administrator to assess state."),(0,a.yg)("p",null,"Based on the current REST api definition the data exposed in the following two endpoints will be updated to expose the limits:",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("em",{parentName:"p"},"/ws/v1/partition/{partitionName}/usage/users"),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("em",{parentName:"p"},"/ws/v1/partition/{partitionName}/usage/groups"),"  "),(0,a.yg)("p",null,"For both endpoints we expose the full queue hierarchy. As an example below the approximate output for the users endpoint for one user:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "userName": "user1",\n    "groups": {\n      "app1": "tester"\n    },\n    "queues": {\n      "queuename": "root",\n      "resourceUsage": {\n        "memory": 12000000000,\n        "vcore": 12000\n      },\n      "runningApplications": ["app1", "app2"],\n      "children": [\n        {\n          "queuename": "root.default",\n          "resourceUsage": {\n            "memory": 6000000000,\n            "vcore": 6000\n          },\n          "runningApplications": ["app1"],\n          "children": [],\n          "maxApplications": 10,\n          "maxResources": {\n            "memory": 50000000000,\n            "vcore": 100000\n          }\n        },\n        {\n          "queuename": "root.test",\n          "resourceUsage": {\n            "memory": 6000000000,\n            "vcore": 6000\n          },\n          "runningApplications": ["app2"],\n          "children": [],\n          "maxApplications": 0,\n          "maxResources": {}\n        }\n      ],\n      "maxApplications": 10,\n      "maxResources": {}\n    }\n  }\n]\n')),(0,a.yg)("p",null,"An example below the approximate output for the groups endpoint for one group:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "groupName" : "tester", \n    "users": ["user1"],\n    "queues":\n    {\n      "queuename": "root",\n      "resourceUsage": {\n        "memory": 6000000000,\n        "vcore": 6000\n      },\n      "runningApplications": ["app2"],\n      "children": [\n        {\n          "queuename": "root.test",\n          "resourceUsage": {\n            "memory": 6000000000,\n            "vcore": 6000\n          },\n          "runningApplications": ["app2"],\n          "children": [],\n          "maxApplications": 2,\n          "maxResources": {\n            "vcore": 10000\n          }\n        }\n      ],\n      "maxApplications": 0,\n      "maxResources": {}\n    }\n  }\n]\n')))}p.isMDXComponent=!0},2984:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/quota_check-87e525ada4251569f25f139c9879bf05.png"}}]);