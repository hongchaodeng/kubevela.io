(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3096],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88061:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),s={title:"Status Write Back"},i={unversionedId:"platform-engineers/traits/status",id:"platform-engineers/traits/status",isDocsHomePage:!1,title:"Status Write Back",description:"This documentation will explain how to achieve status write back by using CUE templates in definition objects.",source:"@site/docs/platform-engineers/traits/status.md",sourceDirName:"platform-engineers/traits",slug:"/platform-engineers/traits/status",permalink:"/docs/next/platform-engineers/traits/status",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/traits/status.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1627555412,formattedLastUpdatedAt:"7/29/2021",frontMatter:{title:"Status Write Back"},sidebar:"docs",previous:{title:"Patch Traits",permalink:"/docs/next/platform-engineers/traits/patch-trait"},next:{title:"Advanced Features",permalink:"/docs/next/platform-engineers/traits/advanced"}},l=[{value:"Health Check",id:"health-check",children:[]},{value:"Custom Status",id:"custom-status",children:[]}],p={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documentation will explain how to achieve status write back by using CUE templates in definition objects."),(0,o.kt)("h2",{id:"health-check"},"Health Check"),(0,o.kt)("p",null,"The spec of health check is ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.status.healthPolicy"),", they are the same for both Workload Type and Trait."),(0,o.kt)("p",null,"If not defined, the health result will always be ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"The keyword in CUE is ",(0,o.kt)("inlineCode",{parentName:"p"},"isHealth"),", the result of CUE expression must be ",(0,o.kt)("inlineCode",{parentName:"p"},"bool")," type.\nKubeVela runtime will evaluate the CUE expression periodically until it becomes healthy. Every time the controller will get all the Kubernetes resources and fill them into the context field."),(0,o.kt)("p",null,"So the context will contain following information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cue"},"context:{\n  name: <component name>\n  appName: <app name>\n  output: <K8s workload resource>\n  outputs: {\n    <resource1>: <K8s trait resource1>\n    <resource2>: <K8s trait resource2>\n  }\n}\n")),(0,o.kt)("p",null,"Trait will not have the ",(0,o.kt)("inlineCode",{parentName:"p"},"context.output"),", other fields are the same."),(0,o.kt)("p",null,"The example of health check likes below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nspec:\n  status:\n    healthPolicy: |\n      isHealth: (context.output.status.readyReplicas > 0) && (context.output.status.readyReplicas == context.output.status.replicas)\n   ...\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nspec:\n  status:\n    healthPolicy: |\n      isHealth: len(context.outputs.service.spec.clusterIP) > 0\n   ...\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examples/app-with-status/template.yaml"},"this doc")," for the complete example.")),(0,o.kt)("p",null,"The health check result will be recorded into the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," resource."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nspec:\n  components:\n  - name: myweb\n    type: worker    \n    properties:\n      cmd:\n      - sleep\n      - "1000"\n      enemies: alien\n      image: busybox\n      lives: "3"\n    traits:\n    - type: ingress\n      properties:\n        domain: www.example.com\n        http:\n          /: 80\nstatus:\n  ...\n  services:\n  - healthy: true\n    message: "type: busybox,\\t enemies:alien"\n    name: myweb\n    traits:\n    - healthy: true\n      message: \'Visiting URL: www.example.com, IP: 47.111.233.220\'\n      type: ingress\n  status: running\n')),(0,o.kt)("h2",{id:"custom-status"},"Custom Status"),(0,o.kt)("p",null,"The spec of custom status is ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.status.customStatus"),", they are the same for both Workload Type and Trait."),(0,o.kt)("p",null,"The keyword in CUE is ",(0,o.kt)("inlineCode",{parentName:"p"},"message"),", the result of CUE expression must be ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," type."),(0,o.kt)("p",null,"The custom status has the same mechanism with health check.\nApplication CRD controller will evaluate the CUE expression after the health check succeed."),(0,o.kt)("p",null,"The context will contain following information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cue"},"context:{\n  name: <component name>\n  appName: <app name>\n  output: <K8s workload resource>\n  outputs: {\n    <resource1>: <K8s trait resource1>\n    <resource2>: <K8s trait resource2>\n  }\n}\n")),(0,o.kt)("p",null,"Trait will not have the ",(0,o.kt)("inlineCode",{parentName:"p"},"context.ouput"),", other fields are the same."),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examples/app-with-status/template.yaml"},"this doc")," for the complete example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nspec:\n  status:\n    customStatus: |-\n      message: "type: " + context.output.spec.template.spec.containers[0].image + ",\\t enemies:" + context.outputs.gameconfig.data.enemies\n   ...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nspec:\n  status:\n    customStatus: |-\n      message: "type: "+ context.outputs.service.spec.type +",\\t clusterIP:"+ context.outputs.service.spec.clusterIP+",\\t ports:"+ "\\(context.outputs.service.spec.ports[0].port)"+",\\t domain"+context.outputs.ingress.spec.rules[0].host\n   ...\n')))}c.isMDXComponent=!0}}]);