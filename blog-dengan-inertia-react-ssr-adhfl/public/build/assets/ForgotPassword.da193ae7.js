import{u as d,j as s,F as u,a as e,H as c}from"./app.68638bcf.js";import{B as p}from"./Button.b6afb9c6.js";import{G as f}from"./Guest.52531c05.js";import{I as w}from"./Input.0d6a16b9.js";import{V as g}from"./ValidationErrors.fdc4ddfe.js";import"./ApplicationLogo.def15032.js";import"./clsx.m.256e9345.js";function h({status:t}){const{data:o,setData:r,post:m,processing:l,errors:i}=d({email:""}),n=a=>{r(a.target.name,a.target.value)};return s(u,{children:[e(c,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-500 leading-normal",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e(g,{errors:i}),s("form",{onSubmit:a=>{a.preventDefault(),m(route("password.email"))},children:[e(w,{type:"text",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,onChange:n}),e("div",{className:"flex items-center justify-end mt-4",children:e(p,{className:"ml-4",processing:l,children:"Email Password Reset Link"})})]})]})}h.layout=t=>e(f,{children:t});export{h as default};
