"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[918],{6086:(e,t,s)=>{s.d(t,{Z:()=>v});s(7294);var a=s(6010),n=s(3702),i=s(3734),l=s(9003),o=s(3699),d=s(7325),r=s(9524),c=s(5893);function u(e){return(0,c.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,c.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const h={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function m(){const e=(0,r.Z)("/");return(0,c.jsx)("li",{className:"breadcrumbs__item",children:(0,c.jsx)(o.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,c.jsx)(u,{className:h.breadcrumbHomeIcon})})})}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){let{children:t,href:s,isLast:a}=e;const n="breadcrumbs__link";return a?(0,c.jsx)("span",{className:n,itemProp:"name",children:t}):s?(0,c.jsx)(o.Z,{className:n,href:s,itemProp:"item",children:(0,c.jsx)("span",{itemProp:"name",children:t})}):(0,c.jsx)("span",{className:n,children:t})}function x(e){let{children:t,active:s,index:n,addMicrodata:i}=e;return(0,c.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,c.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function v(){const e=(0,i.s1)(),t=(0,l.Ns)();return e?(0,c.jsx)("nav",{className:(0,a.Z)(n.k.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,c.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,c.jsx)(m,{}),e.map(((t,s)=>{const a=s===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,c.jsx)(x,{active:a,index:s,addMicrodata:!!n,children:(0,c.jsx)(b,{href:n,isLast:a,children:t.label})},s)}))]})}):null}},2828:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Y});var a=s(7294),n=s(5463),i=s(3768),l=s(5893);const o=a.createContext(null);function d(e){let{children:t,content:s}=e;const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,l.jsx)(o.Provider,{value:n,children:t})}function r(){const e=(0,a.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:s}=r();return(0,l.jsx)(n.d,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(6010),h=s(3488),m=s(9473);function p(){const{metadata:e}=r();return(0,l.jsx)(m.Z,{previous:e.previous,next:e.next})}var b=s(5350),x=s(4617),v=s(3702),j=s(7325);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s}=e;return(0,l.jsx)(j.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:s})})},children:" on {date}"})}function f(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(j.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,l.jsxs)("span",{className:v.k.common.lastUpdated,children:[(0,l.jsx)(j.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&s?(0,l.jsx)(g,{lastUpdatedAt:t,formattedLastUpdatedAt:s}):"",byUser:a?(0,l.jsx)(f,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var Z=s(3699);const N={iconEdit:"iconEdit_Z9Sw"};function L(e){let{className:t,...s}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(N.iconEdit,t),"aria-hidden":"true",...s,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function k(e){let{editUrl:t}=e;return(0,l.jsxs)(Z.Z,{to:t,className:v.k.common.editThisPage,children:[(0,l.jsx)(L,{}),(0,l.jsx)(j.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const C={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function T(e){let{permalink:t,label:s,count:a}=e;return(0,l.jsxs)(Z.Z,{href:t,className:(0,u.Z)(C.tag,a?C.tagWithCount:C.tagRegular),children:[s,a&&(0,l.jsx)("span",{children:a})]})}const U={tags:"tags_jXut",tag:"tag_QGVx"};function w(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(j.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.Z)(U.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,l.jsx)("li",{className:U.tag,children:(0,l.jsx)(T,{label:t,permalink:s})},s)}))})]})}const y={lastUpdated:"lastUpdated_vwxv"};function A(e){return(0,l.jsx)("div",{className:(0,u.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(w,{...e})})})}function M(e){let{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a,formattedLastUpdatedAt:n}=e;return(0,l.jsxs)("div",{className:(0,u.Z)(v.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(k,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.Z)("col",y.lastUpdated),children:(s||a)&&(0,l.jsx)(_,{lastUpdatedAt:s,formattedLastUpdatedAt:n,lastUpdatedBy:a})})]})}function B(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:s,formattedLastUpdatedAt:a,lastUpdatedBy:n,tags:i}=e,o=i.length>0,d=!!(t||s||n);return o||d?(0,l.jsxs)("footer",{className:(0,u.Z)(v.k.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(A,{tags:i}),d&&(0,l.jsx)(M,{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,formattedLastUpdatedAt:a})]}):null}var I=s(4639),E=s(2728);const V={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function H(e){let{collapsed:t,...s}=e;return(0,l.jsx)("button",{type:"button",...s,className:(0,u.Z)("clean-btn",V.tocCollapsibleButton,!t&&V.tocCollapsibleButtonExpanded,s.className),children:(0,l.jsx)(j.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const P={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function D(e){let{toc:t,className:s,minHeadingLevel:a,maxHeadingLevel:n}=e;const{collapsed:i,toggleCollapsed:o}=(0,I.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(P.tocCollapsible,!i&&P.tocCollapsibleExpanded,s),children:[(0,l.jsx)(H,{collapsed:i,onClick:o}),(0,l.jsx)(I.z,{lazy:!0,className:P.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(E.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:n})})]})}const S={tocMobile:"tocMobile_ITEo"};function F(){const{toc:e,frontMatter:t}=r();return(0,l.jsx)(D,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(v.k.docs.docTocMobile,S.tocMobile)})}var R=s(7086);function z(){const{toc:e,frontMatter:t}=r();return(0,l.jsx)(R.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var O=s(3899),G=s(1746);function W(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=r();return t.hide_title||void 0!==s?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(v.k.docs.docMarkdown,"markdown"),children:[s&&(0,l.jsx)("header",{children:(0,l.jsx)(O.Z,{as:"h1",children:s})}),(0,l.jsx)(G.Z,{children:t})]})}var q=s(6086),J=s(9501);const Q={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function X(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=r(),s=(0,h.i)(),a=e.hide_table_of_contents,n=!a&&t.length>0;return{hidden:a,mobile:n?(0,l.jsx)(F,{}):void 0,desktop:!n||"desktop"!==s&&"ssr"!==s?void 0:(0,l.jsx)(z,{})}}(),{metadata:{unlisted:a}}=r();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!s.hidden&&Q.docItemCol),children:[a&&(0,l.jsx)(J.Z,{}),(0,l.jsx)(b.Z,{}),(0,l.jsxs)("div",{className:Q.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(q.Z,{}),(0,l.jsx)(x.Z,{}),s.mobile,(0,l.jsx)(W,{children:t}),(0,l.jsx)(B,{})]}),(0,l.jsx)(p,{})]})]}),s.desktop&&(0,l.jsx)("div",{className:"col col--3",children:s.desktop})]})}function Y(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,l.jsx)(d,{content:e.content,children:(0,l.jsxs)(n.FG,{className:t,children:[(0,l.jsx)(c,{}),(0,l.jsx)(X,{children:(0,l.jsx)(s,{})})]})})}},9473:(e,t,s)=>{s.d(t,{Z:()=>d});s(7294);var a=s(7325),n=s(6010),i=s(3699),l=s(5893);function o(e){const{permalink:t,title:s,subLabel:a,isNext:o}=e;return(0,l.jsxs)(i.Z,{className:(0,n.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}function d(e){const{previous:t,next:s}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(o,{...t,subLabel:(0,l.jsx)(a.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,l.jsx)(o,{...s,subLabel:(0,l.jsx)(a.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4617:(e,t,s)=>{s.d(t,{Z:()=>d});s(7294);var a=s(6010),n=s(7325),i=s(3702),l=s(8801),o=s(5893);function d(e){let{className:t}=e;const s=(0,l.E)();return s.badge?(0,o.jsx)("span",{className:(0,a.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(n.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},5350:(e,t,s)=>{s.d(t,{Z:()=>x});s(7294);var a=s(6010),n=s(9962),i=s(3699),l=s(7325),o=s(9871),d=s(3702),r=s(6409),c=s(8801),u=s(5893);const h={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function m(e){const t=h[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:s,onClick:a}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.Z,{to:s,onClick:a,children:(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:i}}=(0,n.Z)(),{pluginId:l}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,r.J)(l),{latestDocSuggestion:h,latestVersionSuggestion:b}=(0,o.Jo)(l),x=h??(v=b).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,a.Z)(t,d.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(m,{siteTitle:i,versionMetadata:s})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(p,{versionLabel:b.label,to:x.path,onClick:()=>c(b.name)})})]})}function x(e){let{className:t}=e;const s=(0,c.E)();return s.banner?(0,u.jsx)(b,{className:t,versionMetadata:s}):null}}}]);