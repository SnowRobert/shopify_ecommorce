import{Link as H}from"./7c2d04db.js";import{r as n,R as b,j as f,d as v,F as K}from"./index.c153b984.js";import"./df8606c0.js";import"./3f9ce302.js";import"./2a144923.js";import"./9b7a1339.js";import"./c8a661d6.js";import"./aa08741f.js";import"./bcfb1ab5.js";import{a as C,d as O,y as T,E as U,o as g,C as _,u as R,p as E,_ as w,x as j,f as A,i as z,l as S,r as Q,T as V,F as X}from"./3001308e.js";import"./a91cfc6b.js";/* empty css        */import{s as Y}from"./02142cf4.js";import"./2adb707e.js";import"./c5a2d9c6.js";var Z=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Z||{}),q=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(q||{});let G={[0]:e=>({...e,disclosureState:R(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,r){return e.buttonId===r.buttonId?e:{...e,buttonId:r.buttonId}},[3](e,r){return e.panelId===r.panelId?e:{...e,panelId:r.panelId}}},$=n.exports.createContext(null);$.displayName="DisclosureContext";function N(e){let r=n.exports.useContext($);if(r===null){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,N),t}return r}let B=n.exports.createContext(null);B.displayName="DisclosureAPIContext";function F(e){let r=n.exports.useContext(B);if(r===null){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,F),t}return r}let L=n.exports.createContext(null);L.displayName="DisclosurePanelContext";function J(){return n.exports.useContext(L)}function W(e,r){return R(r.type,G,e,r)}let ee=n.exports.Fragment,te=C(function(e,r){let{defaultOpen:t=!1,...s}=e,a=`headlessui-disclosure-button-${O()}`,l=`headlessui-disclosure-panel-${O()}`,u=n.exports.useRef(null),x=T(r,U(m=>{u.current=m},e.as===void 0||e.as===b.Fragment)),P=n.exports.useRef(null),I=n.exports.useRef(null),p=n.exports.useReducer(W,{disclosureState:t?0:1,linkedPanel:!1,buttonRef:I,panelRef:P,buttonId:a,panelId:l}),[{disclosureState:i},c]=p;n.exports.useEffect(()=>c({type:2,buttonId:a}),[a,c]),n.exports.useEffect(()=>c({type:3,panelId:l}),[l,c]);let y=g(m=>{c({type:1});let D=z(u);if(!D)return;let M=(()=>m?m instanceof HTMLElement?m:m.current instanceof HTMLElement?m.current:D.getElementById(a):D.getElementById(a))();M==null||M.focus()}),k=n.exports.useMemo(()=>({close:y}),[y]),o=n.exports.useMemo(()=>({open:i===0,close:y}),[i,y]),d={ref:x};return b.createElement($.Provider,{value:p},b.createElement(B.Provider,{value:k},b.createElement(_,{value:R(i,{[0]:E.Open,[1]:E.Closed})},w({ourProps:d,theirProps:s,slot:o,defaultTag:ee,name:"Disclosure"}))))}),re="button",ne=C(function(e,r){let[t,s]=N("Disclosure.Button"),a=J(),l=a===null?!1:a===t.panelId,u=n.exports.useRef(null),x=T(u,r,l?null:t.buttonRef),P=g(o=>{var d;if(l){if(t.disclosureState===1)return;switch(o.key){case S.Space:case S.Enter:o.preventDefault(),o.stopPropagation(),s({type:0}),(d=t.buttonRef.current)==null||d.focus();break}}else switch(o.key){case S.Space:case S.Enter:o.preventDefault(),o.stopPropagation(),s({type:0});break}}),I=g(o=>{switch(o.key){case S.Space:o.preventDefault();break}}),p=g(o=>{var d;Q(o.currentTarget)||e.disabled||(l?(s({type:0}),(d=t.buttonRef.current)==null||d.focus()):s({type:0}))}),i=n.exports.useMemo(()=>({open:t.disclosureState===0}),[t]),c=Y(e,u),y=e,k=l?{ref:x,type:c,onKeyDown:P,onClick:p}:{ref:x,id:t.buttonId,type:c,"aria-expanded":e.disabled?void 0:t.disclosureState===0,"aria-controls":t.linkedPanel?t.panelId:void 0,onKeyDown:P,onKeyUp:I,onClick:p};return w({ourProps:k,theirProps:y,slot:i,defaultTag:re,name:"Disclosure.Button"})}),se="div",oe=j.RenderStrategy|j.Static,ae=C(function(e,r){let[t,s]=N("Disclosure.Panel"),{close:a}=F("Disclosure.Panel"),l=T(r,t.panelRef,()=>{t.linkedPanel||s({type:4})}),u=A(),x=(()=>u!==null?u===E.Open:t.disclosureState===0)();n.exports.useEffect(()=>()=>s({type:5}),[s]),n.exports.useEffect(()=>{var i;t.disclosureState===1&&((i=e.unmount)!=null?i:!0)&&s({type:5})},[t.disclosureState,e.unmount,s]);let P=n.exports.useMemo(()=>({open:t.disclosureState===0,close:a}),[t,a]),I=e,p={ref:l,id:t.panelId};return b.createElement(L.Provider,{value:t.panelId},w({ourProps:p,theirProps:I,slot:P,defaultTag:se,features:oe,visible:x,name:"Disclosure.Panel"}))}),h=Object.assign(te,{Button:ne,Panel:ae});function ke({title:e,content:r,learnMore:t}){return f(h,{as:"div",className:"grid w-full gap-2",children:({open:s})=>v(K,{children:[f(h.Button,{className:"text-left",children:v("div",{className:"flex justify-between",children:[f(V,{size:"lead",as:"h4",children:e}),f(X,{className:`${s?"":"rotate-[45deg]"} transition-transform transform-gpu duration-200`})]})}),v(h.Panel,{className:"pb-4 pt-2 grid gap-2",children:[f("div",{dangerouslySetInnerHTML:{__html:r}}),t&&f("div",{className:"",children:f(H,{className:"pb-px border-b border-primary/30 text-primary/50",to:t,children:"Learn more"})})]})]})},e)}export{ke as ProductDetail};
//# sourceMappingURL=9ea58d09.js.map