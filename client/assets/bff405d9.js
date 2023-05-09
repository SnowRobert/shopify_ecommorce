import{j as e,d as a}from"./index.c153b984.js";import{Link as p}from"./7c2d04db.js";import"./df8606c0.js";import"./3f9ce302.js";import"./2a144923.js";import"./9b7a1339.js";import"./c8a661d6.js";import"./aa08741f.js";import"./bcfb1ab5.js";import{B as g}from"./6f39f972.js";import{s as h}from"./a91cfc6b.js";import{T as r,H as f}from"./3001308e.js";import{I as u}from"./83c76b36.js";import{f as N}from"./92add5bc.js";/* empty css        */import"./2adb707e.js";import"./c5a2d9c6.js";function E({orders:t}){return e("div",{className:"mt-6",children:a("div",{className:"grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12",children:[e("h2",{className:"font-bold text-lead",children:"Order History"}),t!=null&&t.length?e(x,{orders:t}):e(y,{})]})})}function y(){return a("div",{children:[e(r,{className:"mb-1",size:"fine",width:"narrow",as:"p",children:"You haven't placed any orders yet."}),e("div",{className:"w-48",children:e(g,{className:"text-sm mt-2 w-full",variant:"secondary",to:"/",children:"Start Shopping"})})]})}function x({orders:t}){return e("ul",{className:"grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false  sm:grid-cols-3",children:t.map(l=>e(v,{order:l},l.id))})}function v({order:t}){var s,n,c,d,m,o;if(!(t!=null&&t.id))return null;const l=t.id.split("/").pop().split("?")[0],i=N(t==null?void 0:t.lineItems);return a("li",{className:"grid text-center border rounded",children:[a(p,{className:"grid items-center gap-4 p-4 md:gap-6 md:p-6 md:grid-cols-2",to:`/account/orders/${l}`,children:[((s=i[0].variant)==null?void 0:s.image)&&e("div",{className:"card-image aspect-square bg-primary/5",children:e(u,{width:168,height:168,widths:[168],className:"w-full fadeIn cover",alt:(d=(c=(n=i[0].variant)==null?void 0:n.image)==null?void 0:c.altText)!=null?d:"Order image",data:(m=i[0].variant)==null?void 0:m.image,loaderOptions:{scale:2,crop:"center"}})}),a("div",{className:`flex-col justify-center text-left ${!((o=i[0].variant)!=null&&o.image)&&"md:col-span-2"}`,children:[e(f,{as:"h3",format:!0,size:"copy",children:i.length>1?`${i[0].title} +${i.length-1} more`:i[0].title}),a("dl",{className:"grid grid-gap-1",children:[e("dt",{className:"sr-only",children:"Order ID"}),e("dd",{children:a(r,{size:"fine",color:"subtle",children:["Order No. ",t.orderNumber]})}),e("dt",{className:"sr-only",children:"Order Date"}),e("dd",{children:e(r,{size:"fine",color:"subtle",children:new Date(t.processedAt).toDateString()})}),e("dt",{className:"sr-only",children:"Fulfillment Status"}),e("dd",{className:"mt-2",children:e("span",{className:`px-3 py-1 text-xs font-medium rounded-full ${t.fulfillmentStatus==="FULFILLED"?"bg-green-100 text-green-800":"bg-primary/5 text-primary/50"}`,children:e(r,{size:"fine",children:h(t.fulfillmentStatus)})})})]})]})]}),e("div",{className:"self-end border-t",children:e(p,{className:"block w-full p-2 text-center",to:`/account/orders/${l}`,children:e(r,{color:"subtle",className:"ml-3",children:"View Details"})})})]})}export{E as AccountOrderHistory};
//# sourceMappingURL=bff405d9.js.map