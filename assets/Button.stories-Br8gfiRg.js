import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{B as s}from"./Button-BveDy3Xy.js";import{C as f}from"./ConfigProvider-9YQSA_hX.js";import{r as g}from"./index-DRjF_FHU.js";import{I as h}from"./check-BtRw9FP0.js";import"./context-CxwPi4Y4.js";const B={title:"Button",component:s,tags:["autodocs"],argTypes:{loading:{control:!1},disabled:{control:"boolean"},colorType:{control:{type:"radio",options:["primary","blue","green","yellow","red"]}},size:{control:{type:"radio",options:["md","lg"]}}},render:function(m){const[p,n]=g.useState(!1),u=()=>{n(!0),setTimeout(()=>{n(!1)},3e3)};return r.jsx(f,{theme:{mode:"light"},children:r.jsx(s,{...m,loading:p,onClick:u})})}},o={args:{children:"Button"},argTypes:{icon:{control:!1}}},e={args:{icon:r.jsx(h,{}),size:"md",colorType:"yellow",loading:!0,children:"asdfasdfasfasf"}};var t,a,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  argTypes: {
    icon: {
      control: false
    }
  }
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    icon: <IcCheck />,
    size: 'md',
    colorType: 'yellow',
    loading: true,
    children: 'asdfasdfasfasf'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const k=["withoutIcon","withIcon"];export{k as __namedExportsOrder,B as default,e as withIcon,o as withoutIcon};
