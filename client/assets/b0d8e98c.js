import{r as i,j as e,c as r,F as p}from"./index.f2b2141e.js";import{e as x}from"./650abe93.js";import"./1071856f.js";import"./5fb3ed56.js";import"./646bb2f9.js";import"./e6d90f68.js";import"./84e93da1.js";import"./d170438b.js";import"./7542601b.js";import"./1716977d.js";import"./8af873eb.js";import"./e51f79a2.js";function k(){const[o,l]=i.exports.useState(!1),[a,n]=i.exports.useState(null),[t,m]=i.exports.useState(""),[c,u]=i.exports.useState(null);async function h(s){s.preventDefault(),u(null),n(null);const d=x(s.currentTarget.email);if(d){u(d);return}await f({email:t}),m(""),l(!0)}return e("div",{className:"flex justify-center my-24 px-4",children:r("div",{className:"max-w-md w-full",children:[o?r(p,{children:[e("h1",{className:"text-4xl",children:"Request Sent."}),e("p",{className:"mt-4",children:"If that email address is in our system, you will receive an email with instructions about how to reset your password in a few minutes."})]}):r(p,{children:[e("h1",{className:"text-4xl",children:"Forgot Password."}),e("p",{className:"mt-4",children:"Enter the email address associated with your account to receive a link to reset your password."})]}),r("form",{noValidate:!0,className:"pt-6 pb-8 mt-4 mb-4",onSubmit:h,children:[a&&e("div",{className:"flex items-center justify-center mb-6 bg-zinc-500",children:e("p",{className:"m-4 text-s text-contrast",children:a})}),r("div",{className:"mb-3",children:[e("input",{className:`mb-1 rounded appearance-none border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline ${c?" border-red-500":"border-gray-900"}`,id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Email address","aria-label":"Email address",autoFocus:!0,value:t,onChange:s=>{m(s.target.value)}}),c?r("p",{className:"text-red-500 text-xs",children:[c," \xA0"]}):""]}),e("div",{className:"flex items-center justify-between",children:e("button",{className:"bg-gray-900 text-contrast rounded py-2 px-4 focus:shadow-outline block w-full",type:"submit",children:"Request Reset Link"})})]})]})})}async function f({email:o,password:l,firstName:a,lastName:n}){try{const t=await fetch("/account/recover",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:o,password:l,firstName:a,lastName:n})});return t.status===200?{}:t.json()}catch(t){return{error:t.toString()}}}export{k as AccountRecoverForm,f as callAccountRecoverApi};
//# sourceMappingURL=b0d8e98c.js.map