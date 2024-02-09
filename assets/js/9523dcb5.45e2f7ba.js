"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39712],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>y});var o=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,y=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return n?o.createElement(y,r(r({ref:t},c),{},{components:n})):o.createElement(y,r({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(45072),i=(n(11504),n(95788));const a={id:"how_to_contribute",title:"How To Contribute"},r=void 0,s={unversionedId:"community/how_to_contribute",id:"version-0.8.0/community/how_to_contribute",title:"How To Contribute",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/community/how_to_contribute.md",sourceDirName:"community",slug:"/community/how_to_contribute",permalink:"/docs/0.8.0/community/how_to_contribute",draft:!1,tags:[],version:"0.8.0",frontMatter:{id:"how_to_contribute",title:"How To Contribute"},sidebar:"version-0.8.0/community",next:{title:"Coding Guidelines",permalink:"/docs/0.8.0/community/coding_guidelines"}},l={},u=[{value:"Find an issue",id:"find-an-issue",level:2},{value:"Fix an issue",id:"fix-an-issue",level:2},{value:"Create a pull request",id:"create-a-pull-request",level:2},{value:"Committing a change",id:"committing-a-change",level:2},{value:"Still got questions?",id:"still-got-questions",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,o.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Yunikorn uses:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"JIRA for issue tracking."),(0,i.yg)("li",{parentName:"ul"},"GitHub Pull Requests to manage code review and the change itself."),(0,i.yg)("li",{parentName:"ul"},"MarkDown in the source tree for the documentation.")),(0,i.yg)("h2",{id:"find-an-issue"},"Find an issue"),(0,i.yg)("p",null,"We use JIRA issues to track bugs for this project.\nFind an issue that you would like to work on, or file a new one if you have discovered a new issue.\nFor help with reporting issues look at the ",(0,i.yg)("a",{parentName:"p",href:"/docs/0.8.0/community/reporting_issues"},"how to report an issue"),"."),(0,i.yg)("p",null,"The easiest way to get started working with the code base is to pick up a really easy\nJIRA and work on that. This will help you get familiar with the code base, build system,\nreview process, etc. We flag these starter bugs ",(0,i.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/issues/?jql=project%3DYUNIKORN%20AND%20status%3DOpen%20AND%20labels%3Dnewbie"},"here"),"."),(0,i.yg)("p",null,"If nobody is working on an existing issue, assign it to yourself only if you intend to work on it shortly.\nIf you pick up an existing JIRA look for pull requests that are linked to the JIRA ticket.\nSomeone might be already working on it and not assigned the ticket.\nJIRAs that have a pull requests linked will have the label ",(0,i.yg)("inlineCode",{parentName:"p"},"pull-request-available")," and a link to the pull request can be found under issue links. "),(0,i.yg)("p",null,"For anything that is more than a trivial change, like a typo or one line code change, it\u2019s a good idea to discuss your intended approach on the issue.\nYou are much more likely to have your patch reviewed and committed if you\u2019ve already got buy-in from the YuniKorn community before you start writing the fix."),(0,i.yg)("p",null,"If you cannot assign the JIRA to yourself ask the community to help assign it and add you to the contributors list in JIRA.   "),(0,i.yg)("h2",{id:"fix-an-issue"},"Fix an issue"),(0,i.yg)("p",null,"Fixes or improvement must be created on the ",(0,i.yg)("inlineCode",{parentName:"p"},"master")," branch.\nFork the relevant YuniKorn project into your own project and checkout the ",(0,i.yg)("inlineCode",{parentName:"p"},"master")," branch.\nMake sure that you have an up to date code revision checked out before you start.\nCreate a branch to work on, a good name to use is the JIRA ID you are working on. "),(0,i.yg)("p",null,"Now start coding! As you are writing your patch, please keep the following things in mind:"),(0,i.yg)("p",null,"Include tests with your patch.\nIf your patch adds a feature or fixes a bug and does not include tests, it will generally not be accepted.\nIf you are unsure how to write tests for a particular component, please ask on the JIRA for guidance."),(0,i.yg)("p",null,"Please keep your patch narrowly targeted to the problem described by the JIRA.\nIt\u2019s better for everyone if we maintain discipline about the scope of each patch.\nIn general, if you find a bug while working on a specific feature, file a JIRA for the bug, check if you can assign it to yourself and fix it independently of the feature.\nThis helps us to differentiate between bug fixes and features and allows us to build stable maintenance releases."),(0,i.yg)("p",null,"Make sure you have observed the recommendations in the ",(0,i.yg)("a",{parentName:"p",href:"/docs/0.8.0/community/coding_guidelines"},"coding guidelines"),".\nBefore you commit you should also run the full test suite using ",(0,i.yg)("inlineCode",{parentName:"p"},"make test"),".\nMake sure that all the tests pass."),(0,i.yg)("p",null,"Finally, please write a good, clear commit message, with a short, descriptive title.\nThe descriptive title must start with the JIRA ID you are working on.\nAn example is: ",(0,i.yg)("inlineCode",{parentName:"p"},"[YUNIKORN-2] Support Gang Scheduling"),"\nThe commit message will be used to pre-fill the pull request information.\nThe JIRA ID in the message will automatically link the pull request and the JIRA.\nThe message that follows can be used to explain what the problem was, and how it was fixed."),(0,i.yg)("h2",{id:"create-a-pull-request"},"Create a pull request"),(0,i.yg)("p",null,"Please create a pull request on github with your patch.\nSee ",(0,i.yg)("a",{parentName:"p",href:"https://help.github.com/articles/using-pull-requests/"},"opening a pull request")," for all the details."),(0,i.yg)("p",null,"For committers: You can create a new branch, push your change and create a PR using the GitHub UI.\nFor contributors: you have already forked the repository and committed your changes to your fork.\nUse the GitHub UI to create a PR using the ",(0,i.yg)("inlineCode",{parentName:"p"},"compare across forks")," option."),(0,i.yg)("p",null,"The pull request description must include the JIRA reference that you are working on.\nIf you set the commit message as described above the pull request will automatically pick it up.\nIf you did not do that you can amend the description of the pull request to add the JIRA ID.\nFor example a pull request linked to ",(0,i.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-2"},"YUNIKORN-2")," should have a description like:\n",(0,i.yg)("inlineCode",{parentName:"p"},"[YUNIKORN-2] Support Gang Scheduling")),(0,i.yg)("h2",{id:"committing-a-change"},"Committing a change"),(0,i.yg)("p",null,"When a change is approved it will be committed to the ",(0,i.yg)("inlineCode",{parentName:"p"},"master")," branch of the repository.\nThe commit message must include the JIRA in the first line and should include a ",(0,i.yg)("inlineCode",{parentName:"p"},"Closes #1")," as a\nA commit will automatically close the PR.\nThe JIRA will not be closed automatically."),(0,i.yg)("h2",{id:"still-got-questions"},"Still got questions?"),(0,i.yg)("p",null,"If you\u2019re not sure about something, try to follow the style of the existing codebase.\nLook at whether there are other examples in the code that do a similar thing.\nFeel free to ask questions on the ",(0,i.yg)("a",{parentName:"p",href:"mailto:dev@yunikorn.apache.org"},"dev@yunikorn.apache.org")," list as well."))}h.isMDXComponent=!0}}]);