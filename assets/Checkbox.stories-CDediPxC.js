import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{C as s}from"./Checkbox-BWyXmJKk.js";import{r as t}from"./index-DRjF_FHU.js";import{C as h}from"./ConfigProvider-9YQSA_hX.js";import"./context-CxwPi4Y4.js";import"./check-BtRw9FP0.js";const C={title:"Checkbox",component:s,tags:["autodocs"],args:{},argTypes:{name:{control:!1}},render:function(l){const[i,d]=t.useState(!1),[m,p]=t.useState("light");return e.jsx(h,{theme:{mode:m},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx("button",{onClick:()=>p(o=>o==="light"?"dark":"light"),style:{width:200,color:"var(--primary-800)",backgroundColor:"var(--primary-200)",border:"none",borderRadius:4},children:"Toggle Mode"}),e.jsx(s,{...l,checked:i,onChange:o=>d(o.target.checked),children:"This is Helper Text"})]})})}},r={args:{name:"checkbox",colorType:"yellow",disabled:!1,children:""}};var a,c,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    name: 'checkbox',
    colorType: 'yellow',
    disabled: false,
    children: ''
  }
}`,...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const j=["checkbox"];export{j as __namedExportsOrder,r as checkbox,C as default};
