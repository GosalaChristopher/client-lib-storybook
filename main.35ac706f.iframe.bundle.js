(self.webpackChunkf5_web_front_end_system=self.webpackChunkf5_web_front_end_system||[]).push([[179],{"./generated-stories-entry.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)},"./src/Introduction.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:function(){return __page}});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Getting Started",mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{id:"component-library"},"Component Library"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"subheading"},"Configure"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"link-list"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("span",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("span",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",null,"Build configuration"),"How to customize webpack and Babel")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("span",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",null,"Styling"),"How to load and configure CSS libraries")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("span",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",null,"Data"),"Providers and mocking for data libraries"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"subheading"},"Learn"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"link-list"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("span",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("span",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",null,"In-depth guides"),"Best practices from leading teams")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("span",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",null,"GitHub project"),"View the source and add issues")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("span",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"tip-wrapper"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Getting Started",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))},__webpack_exports__.default=componentMeta},"./src/components/ContactCard/ContactCard.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Business:function(){return Business},Default:function(){return Default},Fuzzy:function(){return Fuzzy},default:function(){return ContactCard_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),Picture=__webpack_require__("./src/elements/Picture/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ContactCard=function ContactCard(_ref){var avatar=_ref.avatar,_ref$description=_ref.description,description=void 0===_ref$description?"":_ref$description,_ref$name=_ref.name,name=void 0===_ref$name?"":_ref$name,_ref$title=_ref.title,title=void 0===_ref$title?"":_ref$title,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,_useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),containerClass=_useState2[0],setContainerClass=_useState2[1],_useState3=(0,react.useState)(""),_useState4=(0,slicedToArray.Z)(_useState3,2),avatarClass=_useState4[0],setAvatarClass=_useState4[1],_useState5=(0,react.useState)(""),_useState6=(0,slicedToArray.Z)(_useState5,2),contentClass=_useState6[0],setContentClass=_useState6[1],_useState7=(0,react.useState)(""),_useState8=(0,slicedToArray.Z)(_useState7,2),descriptionClass=_useState8[0],setDescriptionClass=_useState8[1],_useState9=(0,react.useState)(""),_useState10=(0,slicedToArray.Z)(_useState9,2),nameClass=_useState10[0],setNameClass=_useState10[1],_useState11=(0,react.useState)(""),_useState12=(0,slicedToArray.Z)(_useState11,2),titleClass=_useState12[0],setTitleClass=_useState12[1];return(0,react.useEffect)((function(){switch(variant){case"default":setContainerClass("bg-gray-100 rounded-xl p-8"),setAvatarClass("w-32 h-32 rounded-full mx-auto"),setContentClass("pt-6 space-y-4"),setDescriptionClass("text-lg font-semibold"),setNameClass("text-blue-600"),setTitleClass("text-blue-300");break;case"business":setContainerClass("md:flex bg-gray-100 rounded-xl p-8 md:p-0"),setAvatarClass("w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"),setContentClass("pt-6 md:p-8 text-center md:text-left space-y-4"),setDescriptionClass("text-lg font-semibold"),setNameClass("text-blue-600"),setTitleClass("text-blue-300");break;default:setContainerClass("md:flex bg-gray-100 rounded-xl p-4"),setAvatarClass("w-32 h-30 rounded-full mx item-center"),setContentClass("pt-1 space-y-4 pl-4"),setDescriptionClass(""),setNameClass("text-lg"),setTitleClass("text-gray-400")}}),[variant]),(0,jsx_runtime.jsxs)("div",{className:containerClass,children:[(0,jsx_runtime.jsx)(Picture.Z,(0,objectSpread2.Z)({customClass:avatarClass},avatar)),(0,jsx_runtime.jsxs)("div",{className:contentClass,children:[(0,jsx_runtime.jsx)("blockquote",{children:(0,jsx_runtime.jsx)("p",{className:descriptionClass,children:description})}),(0,jsx_runtime.jsxs)("figcaption",{className:"font-medium",children:[(0,jsx_runtime.jsx)("div",{className:nameClass,children:name}),(0,jsx_runtime.jsx)("div",{className:titleClass,children:title})]})]})]})};ContactCard.__docgenInfo={description:"",methods:[],displayName:"ContactCard",props:{description:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Description of contact."},name:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Name of contact."},title:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Title/Designation of contact."},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'business'",computed:!1},{value:"'fuzzy'",computed:!1}]},required:!1,description:"Variations to decide how should the contact card be displayed"},avatar:{type:{name:"shape",value:"import Picture, { PictureProps } from '../../elements/Picture';",computed:!0},required:!1,description:"Profile picture of contact. Requires properties related to Picture"}}};var components_ContactCard=ContactCard;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContactCard/index.js"]={name:"ContactCard",docgenInfo:ContactCard.__docgenInfo,path:"src/components/ContactCard/index.js"});var ContactCard_stories={title:"Components/Contact Card",component:components_ContactCard,subcomponents:{Picture:Picture.Z}},Template=function Template(args){return(0,jsx_runtime.jsx)(components_ContactCard,(0,objectSpread2.Z)({},args))},config={name:"John Doe",title:"Staff Engineer, Algolia",description:"Reprehenderit reprehenderit cillum non et nostrud veniam aliquip fugiat officia sit adipisicing laboris duis.",avatar:{altText:"this is test",src:"https://wallpapercave.com/wp/wp2758177.jpg",sources:[]}},Default=Template.bind({});Default.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},config),{},{variant:"default"});var Business=Template.bind({});Business.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},config),{},{variant:"business"});var Fuzzy=Template.bind({});Fuzzy.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},config),{},{variant:"fuzzy"}),Default.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <ContactCard {...args} />"}},Default.parameters),Business.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <ContactCard {...args} />"}},Business.parameters),Fuzzy.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <ContactCard {...args} />"}},Fuzzy.parameters)},"./src/elements/Picture/Picture.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic}});var _Users_c_gosala_Projects_f5_web_front_end_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/elements/Picture/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Elements/Picture",component:___WEBPACK_IMPORTED_MODULE_0__.Z};var Basic=function Template(arg){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_0__.Z,(0,_Users_c_gosala_Projects_f5_web_front_end_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},arg))}.bind({});Basic.args={altText:"this is test",src:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/41/41f1097e2fd6b198490f0d112bb402164cf7f497_full.jpg",sources:[{minWidth:1200,src:"https://wallpapercave.com/wp/wp2758177.jpg"},{minWidth:786,src:"https://c4.wallpaperflare.com/wallpaper/653/531/791/picture-the-louvre-museum-mona-lisa-wallpaper-preview.jpg"},{minWidth:400,src:"https://i.pinimg.com/736x/48/54/0e/48540ef570f89e858570e70d37dbb737--mona-lisa-drawings-of.jpg"},{minWidth:350,src:"https://s3.amazonaws.com/gallerist-live/products/39125/small/monalisa-recreation.jpg?1606491991"}]},Basic.parameters=(0,_Users_c_gosala_Projects_f5_web_front_end_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({storySource:{source:"(arg) => <Picture {...arg} />"}},Basic.parameters)},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/elements/Picture/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Picture=function Picture(_ref){var _ref$sources=_ref.sources,sources=void 0===_ref$sources?[]:_ref$sources,_ref$src=_ref.src,src=void 0===_ref$src?"":_ref$src,_ref$altText=_ref.altText,altText=void 0===_ref$altText?"":_ref$altText,_ref$customClass=_ref.customClass,customClass=void 0===_ref$customClass?"":_ref$customClass,_ref$wrapperClass=_ref.wrapperClass,wrapperClass=void 0===_ref$wrapperClass?"":_ref$wrapperClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("picture",{className:wrapperClass,children:[sources.map((function(options,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("source",{media:"(min-width: ".concat(null==options?void 0:options.minWidth,"px)"),srcSet:null==options?void 0:options.src},index.toString())})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:src,alt:altText,className:customClass,loading:"lazy"})]})};prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired,prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired,prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({minWidth:prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired,src:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired}));Picture.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{sources:{defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"shape",value:{minWidth:{name:"number",required:!0},src:{name:"string",required:!0}}}},required:!1,description:"To make sure the image is responsive please add source of images for their corresponding minimum width."},src:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Default image path, this is required."},altText:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"The alternate text to be displayed incase image is broken, this is required."},customClass:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Additional stylings for the image."},wrapperClass:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Additional stylings for wrapper of image."}}},__webpack_exports__.Z=Picture,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/elements/Picture/index.js"]={name:"Picture",docgenInfo:Picture.__docgenInfo,path:"src/elements/Picture/index.js"})},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./components/ContactCard/ContactCard.stories.js":"./src/components/ContactCard/ContactCard.stories.js","./elements/Picture/Picture.stories.js":"./src/elements/Picture/Picture.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./Introduction.stories.mdx":"./src/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[644],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js")}));__webpack_require__.O()}]);