(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2353],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1e4:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),i={title:"Introduction",slug:"/"},l={unversionedId:"getting-started/introduction",id:"getting-started/introduction",isDocsHomePage:!1,title:"Introduction",description:"Motivation",source:"@site/docs/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/",permalink:"/docs/next/",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/getting-started/introduction.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1627555412,formattedLastUpdatedAt:"7/29/2021",frontMatter:{title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Installation",permalink:"/docs/next/getting-started/quick-install"}},s=[{value:"Motivation",id:"motivation",children:[]},{value:"What is KubeVela?",id:"what-is-kubevela",children:[]},{value:"Architecture",id:"architecture",children:[{value:"Control Plane",id:"control-plane",children:[]},{value:"Runtime Infrastructures",id:"runtime-infrastructures",children:[]}]},{value:"Comparisons",id:"comparisons",children:[{value:"KubeVela vs. Platform-as-a-Service (PaaS)",id:"kubevela-vs-platform-as-a-service-paas",children:[]},{value:"KubeVela vs. Serverless",id:"kubevela-vs-serverless",children:[]},{value:"KubeVela vs. Platform agnostic developer tools",id:"kubevela-vs-platform-agnostic-developer-tools",children:[]},{value:"KubeVela vs. Helm",id:"kubevela-vs-helm",children:[]},{value:"KubeVela vs. Kubernetes",id:"kubevela-vs-kubernetes",children:[]}]}],c={toc:s};function p(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"The trend of cloud-native technology is moving towards pursuing consistent application delivery across clouds and on-premises infrastructures using Kubernetes as the common layer. Kubernetes, although excellent in abstracting low-level infrastructure details, does not introduce abstractions to model software deployment on top of today's hybrid and distributed environments. We\u2019ve seen the lack of application level context have impacted user experiences, slowed down productivity, led to unexpected errors or misconfigurations in production."),(0,o.kt)("p",null,"On the other hand, modeling the deployment and operation of microservice application across hybrid environments is a complicated and fragmented process. Many CD or PaaS systems today are either over complex or highly restrictive (which means your needs are almost certain to outgrow the capabilities of such systems today or tomorrow). End Users complain those platforms are  rigid and slow in response to features requests and improvements. platform-engineerss do want to help but the engineering effort to build such a cross-environments, flexible and consistent application delivery system seems daunting."),(0,o.kt)("h2",{id:"what-is-kubevela"},"What is KubeVela?"),(0,o.kt)("p",null,"KubeVela is a modern application platform that makes deploying and managing applications across today's hybrid, multi-cloud environments easier and faster, while at meantime, provides high level of flexibility when your needs grow. This is achieved by doing the following:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Application Centric")," - KubeVela introduces ",(0,o.kt)("a",{parentName:"p",href:"https://oam.dev/"},"Open Application Model (OAM)")," as the consistent yet higher level API to capture a full deployment of microservices on top of hybrid environments. Placement strategy, traffic shifting and rolling update are declared at application level. No infrastructure level concern, simply deploy."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Programmable Workflow")," - KubeVela leverages ",(0,o.kt)("a",{parentName:"p",href:"https://cuelang.org/"},"CUE")," to implement its model layer. This allows you to declare application deployment workflow as a DAG, with all steps and application's needs glued together in programmable approach. No restrictions, natively extensible."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Runtime Agnostic")," - KubeVela works as an application delivery control plane that is fully runtime agnostic. It can deploy and manage any application components including containers, cloud functions, databases, or even EC2 instances across hybrid environments, following the workflow you defined."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The overall architecture of KubeVela is shown as below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:a(16436).Z})),(0,o.kt)("h3",{id:"control-plane"},"Control Plane"),(0,o.kt)("p",null,"Control plane is where KubeVela itself lives in. As the project's name implies, KubeVela by design leverages Kubernetes as control plane. This is the key of how KubeVela guarantees full ",(0,o.kt)("em",{parentName:"p"},"automation")," and strong ",(0,o.kt)("em",{parentName:"p"},"determinism")," to application delivery at scale. Users will interact with KubeVela via the  application centric API to model the application deployment, and KubeVela will distribute the application to target ",(0,o.kt)("em",{parentName:"p"},"runtime infrastructure")," per policies and workflow declared by users."),(0,o.kt)("h3",{id:"runtime-infrastructures"},"Runtime Infrastructures"),(0,o.kt)("p",null,"Runtime infrastructures are where the applications are actually running on. KubeVela allows you to deploy and manage applications on both Kubernetes based infrastructures (local, managed offerings, or IoT/Edge/On-Premise ones) and non-Kubernetes environments such as public/private clouds in a consistent workflow."),(0,o.kt)("h2",{id:"comparisons"},"Comparisons"),(0,o.kt)("h3",{id:"kubevela-vs-platform-as-a-service-paas"},"KubeVela vs. Platform-as-a-Service (PaaS)"),(0,o.kt)("p",null,"The typical examples are Heroku and Cloud Foundry. They provide full application deployment and management capabilities and aim to improve developer experience and efficiency. In this context, KubeVela shares the same goal."),(0,o.kt)("p",null,"Though the biggest difference lies in ",(0,o.kt)("strong",{parentName:"p"},"flexibility"),"."),(0,o.kt)("p",null,"KubeVela is fully programmable. The deployment workflow in KubeVela are composed by LEGO-sytle CUE modules and can be extended at any time when your needs grow. Comparing to this mechanism, traditional PaaS systems are highly restricted, i.e. they have to enforce constraints in the type of supported applications and capabilities, and as application needs grows, you always outgrow the capabilities of the PaaS system - this will never happen in KubeVela platform."),(0,o.kt)("h3",{id:"kubevela-vs-serverless"},"KubeVela vs. Serverless"),(0,o.kt)("p",null,'Serverless platform such as AWS Lambda provides extraordinary user experience and agility to deploy serverless applications. However, those platforms impose even more constraints in extensibility. They are arguably "hard-coded" PaaS.'),(0,o.kt)("p",null,"KubeVela can easily deploy both Kubernetes based serverless workloads such as Knative/OpenFaaS, or cloud based functions such as AWS Lambda."),(0,o.kt)("h3",{id:"kubevela-vs-platform-agnostic-developer-tools"},"KubeVela vs. Platform agnostic developer tools"),(0,o.kt)("p",null,"The typical example is Hashicorp's Waypoint. Waypoint is a developer facing tool which introduces a consistent workflow (i.e., build, deploy, release) to ship applications on top of different platforms."),(0,o.kt)("p",null,"KubeVela can be integrated with such tools seamlessly. In this case, developers would use the Waypoint workflow as the UI to deploy and release applications with KubeVela as the underlying deployment platform."),(0,o.kt)("h3",{id:"kubevela-vs-helm"},"KubeVela vs. Helm"),(0,o.kt)("p",null,"Helm is a package manager for Kubernetes that provides package, install, and upgrade a set of YAML files for Kubernetes as a unit. "),(0,o.kt)("p",null,"KubeVela as a modern deployment system can naturally deploy Helm charts. For example, you could use KubeVela to define an application that is composed by a WordPress chart and a AWS RDS Terraform module, orchestrate the components' topology, and then deploy them to multiple environments following certain strategy."),(0,o.kt)("p",null,"Furthermore, KubeVela also supports other encapsulation formats including Kustomize etc."),(0,o.kt)("h3",{id:"kubevela-vs-kubernetes"},"KubeVela vs. Kubernetes"),(0,o.kt)("p",null,"KubeVela is a modern application deployment system built with cloud native stack. It leverages ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/spec"},"Open Application Model")," and Kubernetes as control plane to resolve a hard problem - making shipping applications enjoyable."),(0,o.kt)("p",null,"Welcome onboard and sail Vela!"))}p.isMDXComponent=!0},16436:function(e,t,a){"use strict";t.Z=a.p+"assets/images/arch-4eb82664ef3aa6ee78c8c9d4a4b18a8a.png"}}]);