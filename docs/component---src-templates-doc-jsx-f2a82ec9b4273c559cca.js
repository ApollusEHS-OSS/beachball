(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{171:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a),i=n(0),o=n.n(i),l=n(175),c=n.n(l),s=n(173),p=n(174),m=n.n(p),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,i=r.postNode,l=r.postPath,s=r.postSEO;if(s){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,n=p.cover,a=m.a.siteUrl+m.a.pathPrefix+l}else e=m.a.siteTitle,t=m.a.siteDescription,n=m.a.siteLogo;var d="/"===m.a.pathPrefix?"":m.a.pathPrefix;n=m.a.siteUrl+d+n;var u=m.a.siteUrl+m.a.pathPrefix,h=[{"@context":"http://schema.org","@type":"WebSite",url:u,name:e,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:""}];return s&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:u,name:e,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:s?a:u}),s?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:m.a.siteFBAppID?m.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:m.a.userTwitter?m.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component),u=n(177),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(f,null,o.a.createElement(u.a,null))},t}(o.a.Component),f=s.b.div.withConfig({displayName:"Header__SiteContainer",componentId:"sc-12paipw-0"})(["display:flex;align-items:center;justify-content:space-between;background:",";padding:25px;"],function(e){return e.theme.brand}),g=h,y=(n(32),n(100),n(67),n(43),n(7)),b=n.n(y),E=function(e){var t=e.entries;return o.a.createElement(k,null,t.map(function(e,t){var n=e.entry;return o.a.createElement(I,{key:t},o.a.createElement(b.a,{to:n.childMarkdownRemark.fields.slug},o.a.createElement(_,null,n.childMarkdownRemark.frontmatter.title)))}))},w=function e(t){var n=t.chapters,a=t.entries,r=t.title,i=t.level,l=void 0===i?0:i;return o.a.createElement(v,null,r&&o.a.createElement(T,{key:""+r+l},o.a.createElement(N,{level:l},r)),o.a.createElement(T,null,a&&o.a.createElement(E,{entries:a})),o.a.createElement(T,null,n&&n.map(function(t,n){return o.a.createElement(e,Object.assign({},t,{level:l+1,key:""+n}))})))},x=function(e){var t=e.chapters;return o.a.createElement(C,null,t.map(function(e,t){return o.a.createElement(w,Object.assign({},e,{key:t}))}))},C=s.b.div.withConfig({displayName:"TableOfContents__TOCWrapper",componentId:"yx8s11-0"})(["padding:",";margin:0;"],function(e){return e.theme.sitePadding}),v=s.b.ol.withConfig({displayName:"TableOfContents__StyledChapterList",componentId:"yx8s11-1"})(["list-style:none;margin:0;"]),k=s.b.ol.withConfig({displayName:"TableOfContents__StyledLinkList",componentId:"yx8s11-2"})(["list-style:none;"]),_=s.b.h6.withConfig({displayName:"TableOfContents__EntryTitle",componentId:"yx8s11-3"})(["display:inline-block;font-weight:200;color:black;margin:0;line-height:1.5;border-bottom:1px solid transparent;text-decoration:none;"]),T=s.b.li.withConfig({displayName:"TableOfContents__ChapterListItem",componentId:"yx8s11-4"})(["margin:0;"]),I=s.b.li.withConfig({displayName:"TableOfContents__EntryListItem",componentId:"yx8s11-5"})(["margin:0;a:hover{border-bottom:1px solid black;}"]),N=s.b.h5.withConfig({displayName:"TableOfContents__ChapterTitle",componentId:"yx8s11-6"})(["font-weight:",";font-size:",";color:",";"],function(e){switch(e.level%3){case 1:return"600";case 2:return"400";default:return"200"}},function(e){switch(e.level%3){case 1:return"2.2rem";case 2:return"1.8rem";default:return"2.8rem"}},function(e){var t=e.level,n=e.theme;switch(t%3){case 1:return"black";case 2:return n.accentDark;default:return n.accent}}),L=n(178);n.d(t,"default",function(){return O}),n.d(t,"pageQuery",function(){return A});var O=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pathContext.slug,t=this.props.data.postBySlug,n=t.frontmatter;return n.id||(n.id=e),n.id||(n.category_id=m.a.postDefaultCategoryID),o.a.createElement(L.a,{location:this.props.location},o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement("title",null,n.title+" | "+m.a.siteTitle)),o.a.createElement(d,{postPath:e,postNode:t,postSEO:!0}),o.a.createElement(D,null,o.a.createElement(S,null,o.a.createElement(g,{location:this.props.location})),o.a.createElement(B,null,o.a.createElement(x,{chapters:this.props.data.tableOfContents.chapters})),o.a.createElement(P,null,o.a.createElement("div",null,o.a.createElement("h1",null,n.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))))))},t}(o.a.Component),D=s.b.div.withConfig({displayName:"doc__BodyGrid",componentId:"sc-1ant3rg-0"})(["height:100vh;display:grid;grid-template-rows:75px 1fr;grid-template-columns:300px 1fr;@media screen and (max-width:600px){display:flex;flex-direction:column;height:inherit;}"]),P=s.b.div.withConfig({displayName:"doc__BodyContainer",componentId:"sc-1ant3rg-1"})(["grid-column:2 / 3;grid-row:2 / 3;overflow:scroll;justify-self:center;width:100%;padding:",";@media screen and (max-width:600px){order:2;}& > div{max-width:",";margin:auto;}& > h1{color:",";}"],function(e){return e.theme.sitePadding},function(e){return e.theme.contentWidthLaptop},function(e){return e.theme.accentDark}),S=s.b.div.withConfig({displayName:"doc__HeaderContainer",componentId:"sc-1ant3rg-2"})(["grid-column:1 / 3;grid-row:1 / 2;z-index:2;@media screen and (max-width:600px){order:1;}"]),B=s.b.div.withConfig({displayName:"doc__ToCContainer",componentId:"sc-1ant3rg-3"})(["grid-column:1 / 2;grid-row:2 / 3;background:",";overflow:scroll;@media screen and (max-width:600px){order:3;overflow:inherit;}"],function(e){return e.theme.lightGrey}),A="664834741"},174:function(e,t){e.exports={blogPostDir:"posts",docDir:"docs",siteTitle:"Beachball",siteTitleAlt:"The Sunniest Version Bumper",siteLogo:"/logos/logo-1024.png",siteUrl:"https://kenotron.github.io",pathPrefix:"/beachball",siteDescription:"The Sunniest Semantic Version Bumper",siteRss:"/rss.xml",postDefaultCategoryID:"Tech",repoLink:"https://github.com/kenotron/beachball",copyright:"Copyright © "+(new Date).getFullYear()+" Ken Chau",themeColor:"#c62828",backgroundColor:"#e0e0e0",toCChapters:["","Chapter 1","Chapter 2"]}},177:function(e,t,n){"use strict";var a=n(10),r=n.n(a),i=n(0),o=n.n(i),l=n(7),c=n.n(l),s=n(173),p=n(176),m=n(174),d=n.n(m),u=s.b.div.withConfig({displayName:"UserLinks__Container",componentId:"sc-1cfrp8c-0"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;max-width:100%;"]),h=s.b.a.withConfig({displayName:"UserLinks__UserIcon",componentId:"sc-1cfrp8c-1"})(["margin-left:25px;color:",";&:hover{color:rgba(0,0,0,0.2);border-bottom:none;}"],function(e){return e.theme.ink}),f={width:"20px",height:"20px"},g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(u,{className:"user-links"},o.a.createElement(h,{href:d.a.repoLink},o.a.createElement(p.b,{style:f})))},t}(i.Component),y=s.b.div.withConfig({displayName:"Navigation__NavContainer",componentId:"sc-1v7bid7-0"})(["display:flex;justify-content:space-between;width:100%;background:",";.nav-link{font-size:1.6rem;margin-right:10px;font-weight:200;color:black;}@media screen and (max-width:600px){display:flex;flex-direction:column;align-items:center;section{margin-bottom:20px;}span{display:none;}}"],function(e){return e.theme.brand}),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(y,null,o.a.createElement("section",null,o.a.createElement(c.a,{className:"nav-link",to:"/"}," ","HOME"," "),o.a.createElement(c.a,{className:"nav-link",to:"/getting-started"}," ","DOCS"," ")),o.a.createElement("span",null,o.a.createElement(g,null)))},t}(o.a.Component);t.a=b},178:function(e,t,n){"use strict";n(98),n(99),n(65);var a=n(10),r=n.n(a),i=n(0),o=n.n(i),l=n(175),c=n.n(l),s=n(173),p=n(174),m=n.n(p),d=(n(180),n(181),{brand:"#f9e659",accent:"#0a5eb7",accentDark:"#35495E",lightGrey:"#F6F6F6",darkGrey:"#91a2a3",ink:"black",errorRed:"#FF6666",codeEditBlue:"#2973b7",codeEditGreen:"#42b983",contentWidthLaptop:"850px",sitePadding:"25px"});n.d(t,"a",function(){return u});var u=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=m.a.pathPrefix?m.a.pathPrefix:"/",n=this.props.location.pathname.replace(t,"").replace("/",""),a="";if(""===n)a="Home";else if("tags/"===n)a="Tags";else if(n.includes("posts"))a="Article";else if(n.includes("tags/")){a="Tagged in "+e(n.replace("tags/","").replace("/","").replace("-"," "))}else if(n.includes("categories/")){a=""+e(n.replace("categories/","").replace("/","").replace("-"," "))}return a},n.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement("title",null,m.a.siteTitle+" |  "+this.getLocalTitle()),o.a.createElement("meta",{name:"description",content:m.a.siteDescription})),o.a.createElement(s.a,{theme:d},e))},t}(o.a.Component)}}]);
//# sourceMappingURL=component---src-templates-doc-jsx-f2a82ec9b4273c559cca.js.map