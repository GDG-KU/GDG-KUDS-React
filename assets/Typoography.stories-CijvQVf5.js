import{j as p}from"./jsx-runtime-DR9Q75dM.js";import{c as T,b as v,j as _,P as $,e as H}from"./context-C8IlOjeA.js";import{C as S}from"./ConfigProvider-B76vDKOI.js";import"./index-DRjF_FHU.js";const n=`${$}-typography`,d=({weight:e,size:a,className:s,...t})=>{const l=v({[`${n}-${e}`]:!!e,[`${n}-${a}`]:!!a},s);return _("p",{className:l,css:C,...t})},C=T({fontSize:14,fontWeight:400,lineHeight:"22px",[`&.${n}-md`]:{fontSize:16,lineHeight:"24px"},[`&.${n}-medium`]:{fontWeight:500},[`&.${n}-semiBold`]:{fontWeight:600},[`&.${n}-bold`]:{fontWeight:700}});try{d.displayName="Typography",d.__docgenInfo={description:"",displayName:"Typography",props:{weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"regular"'},{value:'"semiBold"'},{value:'"bold"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}}}}}catch{}const r=`${$}-heading`,g=({level:e,className:a,...s})=>{const t=v(`${r}-h${e}`,a),l=`h${e}`;return H(l,{...s,className:t,css:z})},z=T({[`&.${r}-h1`]:{fontSize:56,lineHeight:"64px"},[`&.${r}-h2`]:{fontSize:40,lineHeight:"52px"},[`&.${r}-h3`]:{fontSize:32,lineHeight:"44px"},[`&.${r}-h4`]:{fontSize:24,lineHeight:"34px"},[`&.${r}-h5`]:{fontSize:20,lineHeight:"28px"}});try{g.displayName="Heading",g.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"enum",value:[{value:"2"},{value:"1"},{value:"3"},{value:"4"},{value:"5"}]}}}}}catch{}const x=Object.assign(d,{Title:g}),B={title:"Typography"},o={args:{level:1},argTypes:{level:{control:"radio",options:[1,2,3,4,5]}},render:e=>p.jsx(S,{children:p.jsx(x.Title,{...e,children:"This is Heading component"})})},i={argTypes:{size:{control:"radio",options:["sm","md"]},weight:{control:"radio",options:["regular","medium","semiBold","bold"]}},render:e=>p.jsx(x,{...e,children:"This is Paragraph Component"})};var c,m,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    level: 1
  },
  argTypes: {
    level: {
      control: 'radio',
      options: [1, 2, 3, 4, 5]
    }
  },
  render: args => {
    return <ConfigProvider>
        <Typography.Title {...args}>This is Heading component</Typography.Title>
      </ConfigProvider>;
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,y,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md']
    },
    weight: {
      control: 'radio',
      options: ['regular', 'medium', 'semiBold', 'bold']
    }
  },
  render: args => {
    return <Typography {...args}>This is Paragraph Component</Typography>;
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const W=["Heading","Paragraph"];export{o as Heading,i as Paragraph,W as __namedExportsOrder,B as default};
