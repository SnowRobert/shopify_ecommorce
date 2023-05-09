import{R as O,r as K}from"./index.c153b984.js";import{u as ie}from"./c5a2d9c6.js";var ee={exports:{}},ae="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",se=ae,ce=se;function te(){}function re(){}re.resetWarningCache=te;var ue=function(){function t(e,o,i,s,a,c){if(c!==ce){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function r(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:re,resetWarningCache:te};return n.PropTypes=n,n};ee.exports=ue();var f=ee.exports,le=typeof Element!="undefined",fe=typeof Map=="function",pe=typeof Set=="function",de=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function L(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var n,e,o;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(e=n;e--!==0;)if(!L(t[e],r[e]))return!1;return!0}var i;if(fe&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(i=t.entries();!(e=i.next()).done;)if(!r.has(e.value[0]))return!1;for(i=t.entries();!(e=i.next()).done;)if(!L(e.value[1],r.get(e.value[0])))return!1;return!0}if(pe&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(i=t.entries();!(e=i.next()).done;)if(!r.has(e.value[0]))return!1;return!0}if(de&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if(n=t.length,n!=r.length)return!1;for(e=n;e--!==0;)if(t[e]!==r[e])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(r).length)return!1;for(e=n;e--!==0;)if(!Object.prototype.hasOwnProperty.call(r,o[e]))return!1;if(le&&t instanceof Element)return!1;for(e=n;e--!==0;)if(!((o[e]==="_owner"||o[e]==="__v"||o[e]==="__o")&&t.$$typeof)&&!L(t[o[e]],r[o[e]]))return!1;return!0}return t!==t&&r!==r}var he=function(r,n){try{return L(r,n)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}},ye=function(t,r,n,e,o,i,s,a){if(!t){var c;if(r===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,e,o,i,s,a],h=0;c=new Error(r.replace(/%s/g,function(){return l[h++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},V=ye,me=function(r,n,e,o){var i=e?e.call(o,r,n):void 0;if(i!==void 0)return!!i;if(r===n)return!0;if(typeof r!="object"||!r||typeof n!="object"||!n)return!1;var s=Object.keys(r),a=Object.keys(n);if(s.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),l=0;l<s.length;l++){var h=s[l];if(!c(h))return!1;var d=r[h],p=n[h];if(i=e?e.call(o,d,p,h):void 0,i===!1||i===void 0&&d!==p)return!1}return!0};function y(){return y=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},y.apply(this,arguments)}function W(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,B(t,r)}function B(t,r){return B=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},B(t,r)}function G(t,r){if(t==null)return{};var n,e,o={},i=Object.keys(t);for(e=0;e<i.length;e++)r.indexOf(n=i[e])>=0||(o[n]=t[n]);return o}var u={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},Te={rel:["amphtml","canonical","alternate"]},ge={type:["application/ld+json"]},ve={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},$=Object.keys(u).map(function(t){return u[t]}),R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},be=Object.keys(R).reduce(function(t,r){return t[R[r]]=r,t},{}),S=function(t,r){for(var n=t.length-1;n>=0;n-=1){var e=t[n];if(Object.prototype.hasOwnProperty.call(e,r))return e[r]}return null},Oe=function(t){var r=S(t,u.TITLE),n=S(t,"titleTemplate");if(Array.isArray(r)&&(r=r.join("")),n&&r)return n.replace(/%s/g,function(){return r});var e=S(t,"defaultTitle");return r||e||void 0},Ae=function(t){return S(t,"onChangeClientState")||function(){}},q=function(t,r){return r.filter(function(n){return n[t]!==void 0}).map(function(n){return n[t]}).reduce(function(n,e){return y({},n,e)},{})},Ce=function(t,r){return r.filter(function(n){return n[u.BASE]!==void 0}).map(function(n){return n[u.BASE]}).reverse().reduce(function(n,e){if(!n.length)for(var o=Object.keys(e),i=0;i<o.length;i+=1){var s=o[i].toLowerCase();if(t.indexOf(s)!==-1&&e[s])return n.concat(e)}return n},[])},w=function(t,r,n){var e={};return n.filter(function(o){return!!Array.isArray(o[t])||(o[t]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof o[t]+'"'),!1)}).map(function(o){return o[t]}).reverse().reduce(function(o,i){var s={};i.filter(function(d){for(var p,g=Object.keys(d),T=0;T<g.length;T+=1){var m=g[T],b=m.toLowerCase();r.indexOf(b)===-1||p==="rel"&&d[p].toLowerCase()==="canonical"||b==="rel"&&d[b].toLowerCase()==="stylesheet"||(p=b),r.indexOf(m)===-1||m!=="innerHTML"&&m!=="cssText"&&m!=="itemprop"||(p=m)}if(!p||!d[p])return!1;var A=d[p].toLowerCase();return e[p]||(e[p]={}),s[p]||(s[p]={}),!e[p][A]&&(s[p][A]=!0,!0)}).reverse().forEach(function(d){return o.push(d)});for(var a=Object.keys(s),c=0;c<a.length;c+=1){var l=a[c],h=y({},e[l],s[l]);e[l]=h}return o},[]).reverse()},Se=function(t,r){if(Array.isArray(t)&&t.length){for(var n=0;n<t.length;n+=1)if(t[n][r])return!0}return!1},ne=function(t){return Array.isArray(t)?t.join(""):t},U=function(t,r){return Array.isArray(t)?t.reduce(function(n,e){return function(o,i){for(var s=Object.keys(o),a=0;a<s.length;a+=1)if(i[s[a]]&&i[s[a]].includes(o[s[a]]))return!0;return!1}(e,r)?n.priority.push(e):n.default.push(e),n},{priority:[],default:[]}):{default:t}},J=function(t,r){var n;return y({},t,((n={})[r]=void 0,n))},Ee=[u.NOSCRIPT,u.SCRIPT,u.STYLE],Y=function(t,r){return r===void 0&&(r=!0),r===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(t){return Object.keys(t).reduce(function(r,n){var e=t[n]!==void 0?n+'="'+t[n]+'"':""+n;return r?r+" "+e:e},"")},X=function(t,r){return r===void 0&&(r={}),Object.keys(t).reduce(function(n,e){return n[R[e]||e]=t[e],n},r)},j=function(t,r){return r.map(function(n,e){var o,i=((o={key:e})["data-rh"]=!0,o);return Object.keys(n).forEach(function(s){var a=R[s]||s;a==="innerHTML"||a==="cssText"?i.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:i[a]=n[s]}),O.createElement(t,i)})},v=function(t,r,n){switch(t){case u.TITLE:return{toComponent:function(){return o=r.titleAttributes,(i={key:e=r.title})["data-rh"]=!0,s=X(o,i),[O.createElement(u.TITLE,s,e)];var e,o,i,s},toString:function(){return function(e,o,i,s){var a=Q(i),c=ne(o);return a?"<"+e+' data-rh="true" '+a+">"+Y(c,s)+"</"+e+">":"<"+e+' data-rh="true">'+Y(c,s)+"</"+e+">"}(t,r.title,r.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return X(r)},toString:function(){return Q(r)}};default:return{toComponent:function(){return j(t,r)},toString:function(){return function(e,o,i){return o.reduce(function(s,a){var c=Object.keys(a).filter(function(d){return!(d==="innerHTML"||d==="cssText")}).reduce(function(d,p){var g=a[p]===void 0?p:p+'="'+Y(a[p],i)+'"';return d?d+" "+g:g},""),l=a.innerHTML||a.cssText||"",h=Ee.indexOf(e)===-1;return s+"<"+e+' data-rh="true" '+c+(h?"/>":">"+l+"</"+e+">")},"")}(t,r,n)}}}},F=function(t){var r=t.baseTag,n=t.bodyAttributes,e=t.encode,o=t.htmlAttributes,i=t.noscriptTags,s=t.styleTags,a=t.title,c=a===void 0?"":a,l=t.titleAttributes,h=t.linkTags,d=t.metaTags,p=t.scriptTags,g={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var T=function(m){var b=m.linkTags,A=m.scriptTags,E=m.encode,N=U(m.metaTags,ve),D=U(b,Te),_=U(A,ge);return{priorityMethods:{toComponent:function(){return[].concat(j(u.META,N.priority),j(u.LINK,D.priority),j(u.SCRIPT,_.priority))},toString:function(){return v(u.META,N.priority,E)+" "+v(u.LINK,D.priority,E)+" "+v(u.SCRIPT,_.priority,E)}},metaTags:N.default,linkTags:D.default,scriptTags:_.default}}(t);g=T.priorityMethods,h=T.linkTags,d=T.metaTags,p=T.scriptTags}return{priority:g,base:v(u.BASE,r,e),bodyAttributes:v("bodyAttributes",n,e),htmlAttributes:v("htmlAttributes",o,e),link:v(u.LINK,h,e),meta:v(u.META,d,e),noscript:v(u.NOSCRIPT,i,e),script:v(u.SCRIPT,p,e),style:v(u.STYLE,s,e),title:v(u.TITLE,{title:c,titleAttributes:l},e)}},I=[],k=function(t,r){var n=this;r===void 0&&(r=typeof document!="undefined"),this.instances=[],this.value={setHelmet:function(e){n.context.helmet=e},helmetInstances:{get:function(){return n.canUseDOM?I:n.instances},add:function(e){(n.canUseDOM?I:n.instances).push(e)},remove:function(e){var o=(n.canUseDOM?I:n.instances).indexOf(e);(n.canUseDOM?I:n.instances).splice(o,1)}}},this.context=t,this.canUseDOM=r,r||(t.helmet=F({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},oe=O.createContext({}),we=f.shape({setHelmet:f.func,helmetInstances:f.shape({get:f.func,add:f.func,remove:f.func})}),Pe=typeof document!="undefined",x=function(t){function r(n){var e;return(e=t.call(this,n)||this).helmetData=new k(e.props.context,r.canUseDOM),e}return W(r,t),r.prototype.render=function(){return O.createElement(oe.Provider,{value:this.helmetData.value},this.props.children)},r}(K.exports.Component);x.canUseDOM=Pe,x.propTypes={context:f.shape({helmet:f.shape()}),children:f.node.isRequired},x.defaultProps={context:{}},x.displayName="HelmetProvider";var C=function(t,r){var n,e=document.head||document.querySelector(u.HEAD),o=e.querySelectorAll(t+"[data-rh]"),i=[].slice.call(o),s=[];return r&&r.length&&r.forEach(function(a){var c=document.createElement(t);for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(l==="innerHTML"?c.innerHTML=a.innerHTML:l==="cssText"?c.styleSheet?c.styleSheet.cssText=a.cssText:c.appendChild(document.createTextNode(a.cssText)):c.setAttribute(l,a[l]===void 0?"":a[l]));c.setAttribute("data-rh","true"),i.some(function(h,d){return n=d,c.isEqualNode(h)})?i.splice(n,1):s.push(c)}),i.forEach(function(a){return a.parentNode.removeChild(a)}),s.forEach(function(a){return e.appendChild(a)}),{oldTags:i,newTags:s}},z=function(t,r){var n=document.getElementsByTagName(t)[0];if(n){for(var e=n.getAttribute("data-rh"),o=e?e.split(","):[],i=[].concat(o),s=Object.keys(r),a=0;a<s.length;a+=1){var c=s[a],l=r[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var h=i.indexOf(c);h!==-1&&i.splice(h,1)}for(var d=i.length-1;d>=0;d-=1)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==s.join(",")&&n.setAttribute("data-rh",s.join(","))}},Z=function(t,r){var n=t.baseTag,e=t.htmlAttributes,o=t.linkTags,i=t.metaTags,s=t.noscriptTags,a=t.onChangeClientState,c=t.scriptTags,l=t.styleTags,h=t.title,d=t.titleAttributes;z(u.BODY,t.bodyAttributes),z(u.HTML,e),function(m,b){m!==void 0&&document.title!==m&&(document.title=ne(m)),z(u.TITLE,b)}(h,d);var p={baseTag:C(u.BASE,n),linkTags:C(u.LINK,o),metaTags:C(u.META,i),noscriptTags:C(u.NOSCRIPT,s),scriptTags:C(u.SCRIPT,c),styleTags:C(u.STYLE,l)},g={},T={};Object.keys(p).forEach(function(m){var b=p[m],A=b.newTags,E=b.oldTags;A.length&&(g[m]=A),E.length&&(T[m]=p[m].oldTags)}),r&&r(),a(t,g,T)},P=null,H=function(t){function r(){for(var e,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))||this).rendered=!1,e}W(r,t);var n=r.prototype;return n.shouldComponentUpdate=function(e){return!me(e,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var e,o,i=this.props.context,s=i.setHelmet,a=null,c=(e=i.helmetInstances.get().map(function(l){var h=y({},l.props);return delete h.context,h}),{baseTag:Ce(["href"],e),bodyAttributes:q("bodyAttributes",e),defer:S(e,"defer"),encode:S(e,"encodeSpecialCharacters"),htmlAttributes:q("htmlAttributes",e),linkTags:w(u.LINK,["rel","href"],e),metaTags:w(u.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:w(u.NOSCRIPT,["innerHTML"],e),onChangeClientState:Ae(e),scriptTags:w(u.SCRIPT,["src","innerHTML"],e),styleTags:w(u.STYLE,["cssText"],e),title:Oe(e),titleAttributes:q("titleAttributes",e),prioritizeSeoTags:Se(e,"prioritizeSeoTags")});x.canUseDOM?(o=c,P&&cancelAnimationFrame(P),o.defer?P=requestAnimationFrame(function(){Z(o,function(){P=null})}):(Z(o),P=null)):F&&(a=F(c)),s(a)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},r}(K.exports.Component);H.propTypes={context:we.isRequired},H.displayName="HelmetDispatcher";var xe=["children"],Ie=["children"],M=function(t){function r(){return t.apply(this,arguments)||this}W(r,t);var n=r.prototype;return n.shouldComponentUpdate=function(e){return!he(J(this.props,"helmetData"),J(e,"helmetData"))},n.mapNestedChildrenToProps=function(e,o){if(!o)return null;switch(e.type){case u.SCRIPT:case u.NOSCRIPT:return{innerHTML:o};case u.STYLE:return{cssText:o};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(e){var o,i=e.child,s=e.arrayTypeChildren;return y({},s,((o={})[i.type]=[].concat(s[i.type]||[],[y({},e.newChildProps,this.mapNestedChildrenToProps(i,e.nestedChildren))]),o))},n.mapObjectTypeChildren=function(e){var o,i,s=e.child,a=e.newProps,c=e.newChildProps,l=e.nestedChildren;switch(s.type){case u.TITLE:return y({},a,((o={})[s.type]=l,o.titleAttributes=y({},c),o));case u.BODY:return y({},a,{bodyAttributes:y({},c)});case u.HTML:return y({},a,{htmlAttributes:y({},c)});default:return y({},a,((i={})[s.type]=y({},c),i))}},n.mapArrayTypeChildrenToProps=function(e,o){var i=y({},o);return Object.keys(e).forEach(function(s){var a;i=y({},i,((a={})[s]=e[s],a))}),i},n.warnOnInvalidChildren=function(e,o){return V($.some(function(i){return e.type===i}),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+$.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),V(!o||typeof o=="string"||Array.isArray(o)&&!o.some(function(i){return typeof i!="string"}),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(e,o){var i=this,s={};return O.Children.forEach(e,function(a){if(a&&a.props){var c=a.props,l=c.children,h=G(c,xe),d=Object.keys(h).reduce(function(g,T){return g[be[T]||T]=h[T],g},{}),p=a.type;switch(typeof p=="symbol"?p=p.toString():i.warnOnInvalidChildren(a,l),p){case u.FRAGMENT:o=i.mapChildrenToProps(l,o);break;case u.LINK:case u.META:case u.NOSCRIPT:case u.SCRIPT:case u.STYLE:s=i.flattenArrayTypeChildren({child:a,arrayTypeChildren:s,newChildProps:d,nestedChildren:l});break;default:o=i.mapObjectTypeChildren({child:a,newProps:o,newChildProps:d,nestedChildren:l})}}}),this.mapArrayTypeChildrenToProps(s,o)},n.render=function(){var e=this.props,o=e.children,i=G(e,Ie),s=y({},i),a=i.helmetData;return o&&(s=this.mapChildrenToProps(o,s)),!a||a instanceof k||(a=new k(a.context,a.instances)),a?O.createElement(H,y({},s,{context:a.value,helmetData:void 0})):O.createElement(oe.Consumer,null,function(c){return O.createElement(H,y({},s,{context:c}))})},r}(K.exports.Component);M.propTypes={base:f.object,bodyAttributes:f.object,children:f.oneOfType([f.arrayOf(f.node),f.node]),defaultTitle:f.string,defer:f.bool,encodeSpecialCharacters:f.bool,htmlAttributes:f.object,link:f.arrayOf(f.object),meta:f.arrayOf(f.object),noscript:f.arrayOf(f.object),onChangeClientState:f.func,script:f.arrayOf(f.object),style:f.arrayOf(f.object),title:f.string,titleAttributes:f.object,titleTemplate:f.string,prioritizeSeoTags:f.bool,helmetData:f.object},M.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},M.displayName="Helmet";const Le=new k({});function Re({children:t,...r}){const n=ie(e=>e.ctx.head,Le);return O.createElement(M,{...r,helmetData:n},t)}export{Re as H};
//# sourceMappingURL=aa08741f.js.map
