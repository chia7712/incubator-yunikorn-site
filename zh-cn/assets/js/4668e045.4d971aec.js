"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24265],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>s});var a=t(11504);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=g(e,["components","mdxType","originalType","parentName"]),y=p(t),m=l,s=y["".concat(o,".").concat(m)]||y[m]||u[m]||r;return t?a.createElement(s,i(i({ref:n},c),{},{components:t})):a.createElement(s,i({ref:n},c))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var g={};for(var o in n)hasOwnProperty.call(n,o)&&(g[o]=n[o]);g.originalType=e,g[y]="string"==typeof e?e:l,i[1]=g;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67696:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>g,toc:()=>o});var a=t(45072),l=(t(11504),t(95788));const r={id:"coding_guidelines",title:"\u7f16\u7801\u6307\u5357"},i=void 0,g={type:"mdx",permalink:"/zh-cn/community/coding_guidelines",source:"@site/i18n/zh-cn/docusaurus-plugin-content-pages/community/coding_guidelines.md",title:"\u7f16\u7801\u6307\u5357",description:"\x3c!--",frontMatter:{id:"coding_guidelines",title:"\u7f16\u7801\u6307\u5357"}},o=[{value:"\u57fa\u7840\u6307\u5357",id:"\u57fa\u7840\u6307\u5357",level:2},{value:"\u81ea\u52a8\u68c0\u67e5",id:"\u81ea\u52a8\u68c0\u67e5",level:2},{value:"\u672c\u5730\u5b89\u88c5\u548c\u8fd0\u884c",id:"\u672c\u5730\u5b89\u88c5\u548c\u8fd0\u884c",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u62c9\u53d6\u8bf7\u6c42\u4e2d\u7684\u96c6\u6210",id:"\u62c9\u53d6\u8bf7\u6c42\u4e2d\u7684\u96c6\u6210",level:3},{value:"\u8bef\u62a5",id:"\u8bef\u62a5",level:2},{value:"GoLand IDE \u8bbe\u7f6e",id:"goland-ide-\u8bbe\u7f6e",level:2},{value:"preferences \u504f\u597d",id:"preferences-\u504f\u597d",level:3},{value:"\u68c0\u67e5",id:"\u68c0\u67e5",level:3}],p={toc:o},c="wrapper";function y(e){let{components:n,...r}=e;return(0,l.yg)(c,(0,a.c)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u7f16\u7801\u6307\u5357"},"\u7f16\u7801\u6307\u5357"),(0,l.yg)("h2",{id:"\u57fa\u7840\u6307\u5357"},"\u57fa\u7840\u6307\u5357"),(0,l.yg)("p",null,"GO \u4f5c\u4e3a\u4e00\u79cd\u8bed\u8a00\u4e3a\u4ee3\u7801\u63d0\u4f9b\u4e86\u5185\u7f6e\u7684\u683c\u5f0f\u5316\u7a0b\u5e8f\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"gofmt"),"\u3002\n\u8be5\u9879\u76ee\u4f7f\u7528\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"gofmt")," \u4e2d\u5b9e\u73b0\u7684\u9884\u5b9a\u4e49\u683c\u5f0f\u3002\n\u8fd9\u610f\u5473\u7740\u4f8b\u5982\uff1atabs\u800c\u4e0d\u662f\u7a7a\u683c\u7b49\u3002\n\u9605\u8bfb ",(0,l.yg)("a",{parentName:"p",href:"https://golang.org/doc/effective_go.html"},"Effective GO")," \u9875\u9762\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\u3002\n\u5728\u521b\u5efa\u62c9\u53d6\u8bf7\u6c42\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u81f3\u5c11\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"gofmt")," \u683c\u5f0f\u5316\u4ee3\u7801\u3002"),(0,l.yg)("p",null,"\u9664\u4e86 Effective GO \u6307\u5357\u4e4b\u5916\uff0c\u8bf7\u9075\u5faa ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/CodeReviewComments"},"CodeReviewComments")," wiki \u9875\u9762\u4e2d\u7684\u5efa\u8bae\u3002\nwiki \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f88\u597d\u7684\u4ee3\u7801\u5ba1\u67e5\u6ce8\u91ca\u5e93\u3002\n\u5927\u591a\u6570\u6ce8\u91ca\u5c06\u5728\u4e0b\u9762\u63cf\u8ff0\u7684\u81ea\u52a8\u68c0\u67e5\u4e2d\u8fdb\u884c\u68c0\u67e5\u3002"),(0,l.yg)("p",null,"\u4f7f\u7528 IDE\uff08\u5982 GoLand \u6216 Visual Studio Code\uff09\u65f6\uff0c\u8bf7\u4f7f\u7528\u5185\u7f6e\u7684\u9009\u9879\u3002\n\u5927\u591a\u6570 IDE \u5c06\u63d0\u4f9b\u5927\u91cf\u68c0\u67e5\u6216\u683c\u5f0f\u5316\u9009\u9879\u5217\u8868\uff0c\u4ee5\u5e2e\u52a9\u683c\u5f0f\u5316\u548c\u6307\u51fa\u4ee3\u7801\u7684\u95ee\u9898\u3002\n\u6709\u5173 GoLand IDE \u7684\u57fa\u672c\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u9605 ",(0,l.yg)("a",{parentName:"p",href:"#goland-ide-setup"},"IDE \u8bbe\u7f6e"),"\u3002"),(0,l.yg)("h2",{id:"\u81ea\u52a8\u68c0\u67e5"},"\u81ea\u52a8\u68c0\u67e5"),(0,l.yg)("p",null,"\u5e76\u975e\u6240\u6709\u4ee3\u7801\u90fd\u4f1a\u4f7f\u7528 IDE \u8fdb\u884c\u7f16\u5199\u3002\n\u5373\u4f7f\u5728\u8d21\u732e\u8005\u4e4b\u95f4\uff0c\u6240\u6709\u5b89\u88c5\u7684\u8bbe\u7f6e\u4e5f\u53ef\u80fd\u4e0d\u540c\u3002\n\u4e3a\u4e86\u5e2e\u52a9\u4fdd\u6301\u4ee3\u7801\u683c\u5f0f\u4e00\u81f4\uff0c",(0,l.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lint_(software)"},"lint")," \u5de5\u5177\u662f\u4ee3\u7801\u6279\u51c6\u7684\u4e00\u90e8\u5206\u3002"),(0,l.yg)("p",null,"Go \u6709\u5927\u91cf\u53ef\u7528\u7684 lint \u5de5\u5177\u3002\n\u5927\u591a\u6570 lint \u5de5\u5177\u53ea\u68c0\u67e5\u4e00\u4ef6\u7279\u5b9a\u7684\u4e8b\u60c5\u3002\n\u4e00\u4e9b\u5de5\u5177\u5c06\u805a\u5408\u4e00\u4e9b linter\uff0c\u5e76\u63d0\u4f9b\u6240\u6709\u53d1\u73b0\u7684\u95ee\u9898\u7684\u6982\u8ff0\u3002\n\u5bf9\u4e8e\u8be5\u9879\u76ee\uff0c\u6211\u4eec\u9009\u62e9\u4e86 ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/golangci/golangci-lint"},"golangci-lint")," \u5de5\u5177\u3002\n\u8be5\u5de5\u5177\u53ef\u4ee5\u5728\u672c\u5730\u8fd0\u884c\uff0c\u5e76\u5c06\u96c6\u6210\u5230 GitHub PR \u6d41\u7a0b\u4e2d\u3002"),(0,l.yg)("h3",{id:"\u672c\u5730\u5b89\u88c5\u548c\u8fd0\u884c"},"\u672c\u5730\u5b89\u88c5\u548c\u8fd0\u884c"),(0,l.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6309\u7167\u9879\u76ee\u63d0\u4f9b\u7684 ",(0,l.yg)("a",{parentName:"p",href:"https://golangci-lint.run/usage/install/#local-installation"},"\u5b89\u88c5\u8bf4\u660e")," \u8fdb\u884c\u8fd0\u884c\u3002\n\u4e0d\u8fc7\u6839\u636e\u60a8\u7684\u5f00\u53d1\u7cfb\u7edf\uff0c\u8bf4\u660e\u53ef\u80fd\u4f1a\u7565\u6709\u4e0d\u540c\u3002"),(0,l.yg)("p",null,"\u5b89\u88c5\u5de5\u5177\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6807\u51c6\u547d\u4ee4\u884c\u8fd0\u884c\u5b83\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"golangci-lint run\n")),(0,l.yg)("p",null,"\u8fd9\u4e9b\u9879\u76ee\u4ecd\u7136\u4f1a\u4ea7\u751f\u8bb8\u591a\u8b66\u544a\u3002\n\u9ad8\u5f71\u54cd\u8b66\u544a\u5df2\u901a\u8fc7\u8bc4\u8bba\u4fee\u590d\u6216\u5ffd\u7565\uff0c\u8bf7\u53c2\u9605 ",(0,l.yg)("a",{parentName:"p",href:"#false-positives"},"\u8bef\u62a5"),"\u3002"),(0,l.yg)("p",null,"\u5982\u679c\u60a8\u4e00\u76f4\u5728\u7814\u7a76\u65b0\u529f\u80fd\u6216\u4fee\u590d\u9519\u8bef\uff0c\u60a8\u53ea\u60f3\u68c0\u67e5\u5df2\u66f4\u6539\u7684\u6587\u4ef6\u3002\n\u60a8\u53ef\u4ee5\u4f7f\u7528\u9009\u9879 ",(0,l.yg)("inlineCode",{parentName:"p"},"--new")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"p"},"--new-from-rev")," \u9009\u9879\u8fd0\u884c\u8be5\u5de5\u5177\u3002\n",(0,l.yg)("inlineCode",{parentName:"p"},"--new")," \u9009\u9879\u53ea\u4f1a\u68c0\u67e5\u672a\u63d0\u4ea4\u7684\u6587\u4ef6\u3002\n",(0,l.yg)("inlineCode",{parentName:"p"},"--new-from-rev")," \u9009\u9879\u5c06\u6839\u636e\u7279\u5b9a\u63d0\u4ea4\u7684\u4fee\u8ba2\u68c0\u67e5\u66f4\u6539\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# \u5bf9\u4e8e\u672a\u63d0\u4ea4\u7684\u66f4\u6539\ngolangci-lint run --new\n# \u9488\u5bf9\u4fee\u8ba2\u63d0\u4ea4\u7684\u66f4\u6539\ngolangci-lint run --new-from-rev=origin/master\n")),(0,l.yg)("p",null,"make\u547d\u4ee4\u8ffd\u52a0 ",(0,l.yg)("inlineCode",{parentName:"p"},"lint"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"make lint\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"make")," \u4f7f\u7528 linter \u96c6\u6210\u68c0\u67e5\u53ef\u6267\u884c\u6587\u4ef6\u7684\u4e24\u4e2a\u4f4d\u7f6e\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"$(go env GOPATH)/bin/")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"./bin/"))),(0,l.yg)("p",null,"\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458\u548c CI \u5b89\u88c5\uff0c\u6807\u51c6\u7684\u5b89\u88c5\u4f4d\u7f6e\u7565\u6709\u4e0d\u540c\u3002\n\u901a\u8fc7\u68c0\u67e5\u8fd9\u4e24\u4e2a\u4f4d\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u672c\u5730\u548c\u81ea\u52a8\u6784\u5efa\u671f\u95f4\u8fd0\u884c\u3002"),(0,l.yg)("p",null,"make \u96c6\u6210\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"--new-from-rev")," \u547d\u4ee4\u884c\u9009\u9879\u3002\n\u8981\u68c0\u67e5\u7684\u4fee\u6539\u88ab\u786e\u5b9a\u4e3a\u8fd0\u884c\u7684\u4e00\u90e8\u5206\uff0c\u4ee5\u5141\u8bb8\u5b83\u5728\u6211\u4eec\u7684 CI \u6784\u5efa\u671f\u95f4\u5728\u4e0d\u540c\u7684\u5206\u652f\u548c\u62c9\u53d6\u8bf7\u6c42\u4e0a\u8fd0\u884c\u3002\nlint \u68c0\u67e5\u662f\u9879\u76ee\u7684\u6807\u51c6 CI \u6784\u5efa\u8fd0\u884c\u7684\u4e00\u90e8\u5206\u3002"),(0,l.yg)("p",null,"\u6709\u5173\u5982\u4f55\u8fd0\u884c\u8be5\u5de5\u5177\u7684\u66f4\u591a\u9009\u9879\u548c\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 golangci-lint \u4ea7\u54c1\u6587\u6863\u3002"),(0,l.yg)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.yg)("p",null,"\u4e3a\u4f7f\u7528\u5b83\u4eec\u7684\u4e24\u4e2a\u9879\u76ee\u63d0\u4f9b\u4e86\u9884\u5b9a\u4e49\u7684\u914d\u7f6e\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-k8shim"},"YuniKorn k8shim"),", \u914d\u7f6e\u6587\u4ef6 ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-k8shim/blob/master/.golangci.yml"},"golangci.yml"),"."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-core"},"YuniKorn core"),", \u914d\u7f6e\u6587\u4ef6 ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-core/blob/master/.golangci.yml"},"golangci.yml"),". ")),(0,l.yg)("p",null,"Web \u754c\u9762\u662f\u4e00\u4e2a javascript \u9879\u76ee\uff0c\u8c03\u5ea6\u63a5\u53e3\u53ea\u751f\u6210\u4e86 Go \u4ee3\u7801\uff0c\u56e0\u6b64\u4e0d\u4f7f\u7528\u5b83\u3002"),(0,l.yg)("h3",{id:"\u62c9\u53d6\u8bf7\u6c42\u4e2d\u7684\u96c6\u6210"},"\u62c9\u53d6\u8bf7\u6c42\u4e2d\u7684\u96c6\u6210"),(0,l.yg)("p",null,"\u8ba1\u5212\u662f\u5c06 ",(0,l.yg)("inlineCode",{parentName:"p"},"golangci-lint")," \u68c0\u67e5\u96c6\u6210\u5230 GitHub PR \u6d41\u7a0b\u4e2d\u3002"),(0,l.yg)("h2",{id:"\u8bef\u62a5"},"\u8bef\u62a5"),(0,l.yg)("p",null,"\u5de5\u5177\u4ece\u6765\u90fd\u4e0d\u662f 100% \u6b63\u786e\u7684\uff0c\u8fd9\u4e2a\u4e5f\u4e0d\u662f\u3002\n\u67d0\u4e9b\u95ee\u9898\u56e0\u592a\u96be\u7ea0\u6b63\u6216\u4e0d\u591f\u91cd\u8981\u800c\u65e0\u6cd5\u4fee\u590d\u3002"),(0,l.yg)("p",null,"\u8be5\u5de5\u5177\u5141\u8bb8\u5411\u4ee3\u7801\u6dfb\u52a0\u6ce8\u91ca\u4ee5\u5ffd\u7565\u8be5\u95ee\u9898\u3002\n\u8fd9\u4e9b\u6ce8\u91ca\u5e94\u8be5\u8c28\u614e\u4f7f\u7528\uff0c\u56e0\u4e3a\u5b83\u4eec\u53ef\u80fd\u4f1a\u9690\u85cf\u95ee\u9898\u3002\n\u5982\u679c\u4f7f\u7528\u5b83\u4eec\uff0c\u5219\u5e94\u9644\u6709\u6ce8\u660e\u4ee5\u89e3\u91ca\u4f7f\u7528\u5b83\u4eec\u7684\u539f\u56e0\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"},'    var s1 = "ignored by all linters" //nolint\n    var s2 = "ignored by the linter unused" //nolint:unused\n')),(0,l.yg)("p",null,"\u6211\u4eec\u4e0d\u9f13\u52b1\u4f7f\u7528\u6ca1\u6709\u7279\u5b9a linter \u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"nolint")," \u6ce8\u91ca\u3002"),(0,l.yg)("h2",{id:"goland-ide-\u8bbe\u7f6e"},"GoLand IDE \u8bbe\u7f6e"),(0,l.yg)("p",null,"GoLand \u9ed8\u8ba4\u5f00\u542f\u4e86\u8bb8\u591a\u68c0\u67e5\u3002\n\u8fd9\u4e9b\u9ed8\u8ba4\u503c\u5df2\u7ecf\u63d0\u4f9b\u4e86\u5f88\u597d\u7684\u8986\u76d6\u7387\uff0c\u5e76\u5c06 linter \u53d1\u73b0\u7684\u8bb8\u591a\u95ee\u9898\u6807\u8bb0\u4e3a\u95ee\u9898\u3002\n\u8981\u8fdb\u4e00\u6b65\u6269\u5927\u8986\u76d6\u8303\u56f4\u5e76\u5e2e\u52a9\u6807\u8bb0\u95ee\u9898\uff0c\u8bf7\u4e3b\u52a8\u68c0\u67e5\u4ee5\u4e0b\u8bbe\u7f6e\u5e76\u5c06\u5176\u66f4\u6539\u4e3a\u6839\u636e\u5c4f\u5e55\u622a\u56fe\u7684\u8bbe\u7f6e\u3002"),(0,l.yg)("h3",{id:"preferences-\u504f\u597d"},"preferences \u504f\u597d"),(0,l.yg)("p",null,"\u6253\u5f00 preferences \u7a97\u683c\u5e76\u8f6c\u5230\uff1aEditor -> Code Style -> Go\n\u9700\u8981\u914d\u7f6e\u4e09\u4e2a\u9009\u9879\u5361\uff0c\u524d\u4e24\u4e2a\u5bf9\u4e8e\u9075\u5b88 ",(0,l.yg)("inlineCode",{parentName:"p"},"gofmt")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"goimports")," \u7684\u57fa\u672c\u89c4\u5219\u81f3\u5173\u91cd\u8981\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null}),(0,l.yg)("th",{parentName:"tr",align:null}))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Tabs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{alt:"tabs",src:t(52636).c,width:"605",height:"328"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Imports"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{alt:"imports",src:t(29876).c,width:"601",height:"438"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Other"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{alt:"other",src:t(33540).c,width:"684",height:"387"}))))),(0,l.yg)("p",null,"\u4e0a\u9762\u914d\u7f6e\u7684\u5bfc\u5165\u5728\u4f7f\u7528\u65f6\u5e94\u8be5\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u521b\u5efa 3 \u7ec4\u5bfc\u5165\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u6807\u51c6\u5e93\u5bfc\u5165"),(0,l.yg)("li",{parentName:"ol"},"\u7b2c\u4e09\u65b9\u5bfc\u5165"),(0,l.yg)("li",{parentName:"ol"},"YuniKorn \u5185\u90e8\u5bfc\u5165")),(0,l.yg)("p",null,"\u5728\u6587\u4ef6\u4e2d\uff0c\u5b83\u5c06\u4e3a\u60a8\u63d0\u4f9b\u5982\u4e0b\u6240\u793a\u7684\u5bfc\u5165\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"},"import (\n  // \u6807\u51c6\u5e93\u5bfc\u5165\n\n  // \u7b2c\u4e09\u65b9\n\n  // YuniKorn \u9879\u76ee\u5bfc\u5165\n)\n")),(0,l.yg)("h3",{id:"\u68c0\u67e5"},"\u68c0\u67e5"),(0,l.yg)("p",null,"\u9664\u5f00\u6709\u52a9\u4e8e\u7a81\u51fa\u663e\u793a\u9634\u5f71\u53d8\u91cf\u7684\u68c0\u67e5\uff0c\u6211\u4eec\u624d\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u68c0\u67e5\u3002\n\u9634\u5f71\u53d8\u91cf\u53ef\u80fd\u5bfc\u81f4\u96be\u4ee5\u8ddf\u8e2a\u548c\u63a9\u76d6\u4ee3\u7801\u4e2d\u7684\u9519\u8bef\uff0c\u5e94\u5c3d\u53ef\u80fd\u9632\u6b62\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"\u68c0\u67e5",src:t(80736).c,width:"930",height:"552"})))}y.isMDXComponent=!0},29876:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/goland_ide_pref_imports-853b75298463f39a6cdffb70a1228a5e.png"},80736:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/goland_ide_pref_inspections-808d7022dc77eb23848adcea32557746.png"},33540:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/goland_ide_pref_other-f4969d5ecf1ad8a61e727cf4b93164e1.png"},52636:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/goland_ide_pref_tabs-35f887a9c67980c3a703b2463d869dba.png"}}]);