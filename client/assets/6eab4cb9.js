import{r as l,j as e,d as a,F as y}from"./index.c153b984.js";import{Link as g}from"./7c2d04db.js";import"./df8606c0.js";import"./3f9ce302.js";import"./2a144923.js";import"./9b7a1339.js";import"./c8a661d6.js";import"./aa08741f.js";import"./bcfb1ab5.js";import{u as E}from"./2adb707e.js";import"./c5a2d9c6.js";function M({shopName:r}){const s=E(),[t,o]=l.exports.useState(!1),[n,m]=l.exports.useState(!0),[c,p]=l.exports.useState(""),[w,d]=l.exports.useState(null),[h,f]=l.exports.useState(""),[N,u]=l.exports.useState(null);function v(i){i.preventDefault(),d(null),o(!1),u(null),n?S(i):j(i)}function S(i){i.currentTarget.email.validity.valid?m(!1):d("Please enter a valid email")}async function j(i){const b=i.currentTarget.password.validity;b.valid?(await F({email:c,password:h})).error?(o(!0),x()):s("/account"):u(b.valueMissing?"Please enter a password":"Passwords must be at least 6 characters")}function x(){m(!0),p(""),d(null),f(""),u(null)}return e("div",{className:"flex justify-center my-24 px-4",children:a("div",{className:"max-w-md w-full",children:[e("h1",{className:"font-thin text-4xl",children:"Sign in to your account"}),a("form",{noValidate:!0,className:"pt-6 pb-8 mt-4 mb-4",onSubmit:v,children:[t&&e("div",{className:"flex items-center justify-center mb-6 bg-zinc-500",children:e("p",{className:"m-4 text-s text-contrast",children:"Sorry we did not recognize either your email or password. Please try to sign in again or create a new account."})}),n&&e(P,{shopName:r,email:c,setEmail:p,emailError:w}),!n&&e(k,{email:c,resetForm:x}),!n&&e(C,{password:h,setPassword:f,passwordError:N})]})]})})}async function F({email:r,password:s}){try{const t=await fetch("/account/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:r,password:s})});return t.ok?{}:t.json()}catch(t){return{error:t.toString()}}}function P({email:r,setEmail:s,emailError:t,shopName:o}){return a(y,{children:[a("div",{className:"mb-3",children:[e("input",{className:`mb-1 appearance-none rounded border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline ${t?" border-red-500":"border-gray-900"}`,id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Email address","aria-label":"Email address",autoFocus:!0,value:r,onChange:n=>{s(n.target.value)}}),t?a("p",{className:"text-[#14394f] text-xs",children:[t," \xA0"]}):""]}),e("div",{className:"flex items-center justify-between",children:e("button",{className:"bg-[#14394f] rounded text-contrast py-2 px-4 focus:shadow-outline block w-full",type:"submit",children:"Sign in"})}),e("div",{className:"flex items-center mt-8 border-t  border-gray-300",children:a("p",{className:"align-baseline text-sm mt-6",children:["New to The Ivy? \xA0",e(g,{className:"inline underline text-[#14394f]",to:"/account/register",children:"Create an account"})]})})]})}function k({email:r,resetForm:s}){return a("div",{className:"mb-3 flex items-center justify-between",children:[a("div",{children:[e("p",{children:r}),e("input",{className:"hidden",type:"text",autoComplete:"username",value:r,readOnly:!0})]}),e("div",{children:e("button",{className:"inline-block align-baseline text-sm underline",type:"button",onClick:s,children:"Change email"})})]})}function C({password:r,setPassword:s,passwordError:t}){return a(y,{children:[a("div",{className:"mb-3",children:[e("input",{className:`mb-1 appearance-none rounded border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline ${t?" border-[#14394f]":"border-gray-900"}`,id:"password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password","aria-label":"Password",value:r,minLength:8,required:!0,autoFocus:!0,onChange:o=>{s(o.target.value)}}),t?a("p",{className:"text-[#14394f] text-xs",children:[" ",t," \xA0"]}):""]}),e("div",{className:"flex items-center justify-between",children:e("button",{className:"bg-gray-900 text-contrast rounded py-2 px-4 focus:shadow-outline block w-full",type:"submit",children:"Sign in"})}),a("div",{className:"flex items-center justify-between mt-4",children:[e("div",{className:"flex-1"}),e(g,{className:"inline-block align-baseline text-sm text-primary/50",to:"/account/recover",children:"Forgot password"})]})]})}export{M as AccountLoginForm,F as callLoginApi};
//# sourceMappingURL=6eab4cb9.js.map
