import{j as b}from"./jsx-runtime-DR9Q75dM.js";import{I as $}from"./Input-ZN4pN3Xb.js";import{f as A}from"./index-Dj6nxAlZ.js";import{c,j as I,a as p,b as s,P as j}from"./context-CxwPi4Y4.js";import{r as N}from"./index-DRjF_FHU.js";import{C as r}from"./colors-s21EB8E3.js";const e=`${j}-textarea`,n=N.forwardRef((a,g)=>{const{size:T="large",label:l,className:h,...i}=a,{disabled:z}=i,C=c(`${e}-container`,h),_=c(`${e}-inner`,`${e}-${T}`,{[`${e}-disabled`]:z});return I("div",{css:R,className:C,children:[l&&p("label",{className:`${e}-label`,children:l}),p("textarea",{ref:g,className:_,...i})]})}),S=s({fontSize:12,fontWeight:700,color:r.primary[800]}),w=s({padding:"10px 20px",fontsize:14,display:"inline-flex",alignItems:"center",border:"1.2px solid",borderRadius:8,borderColor:r.primary[500],backgroundColor:r.primary[100],cursor:"text","&:focus":{outline:"none",color:r.primary[800],borderColor:r.primary[800]},[`&.${e}-large`]:{width:660,height:280},[`&.${e}-disabled`]:{backgroundColor:r.primary[200],borderColor:r.primary[300],cursor:"not-allowed"}}),R=s({display:"flex",flexDirection:"column",gap:16,width:"100%",[`> label.${e}-label`]:S,[`> textarea.${e}-inner`]:w});try{n.displayName="TextArea",n.__docgenInfo={description:"",displayName:"TextArea",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const B={title:"Input",args:{onChange:A(),placeholder:"Input"}},o={render:a=>b.jsx($,{...a}),args:{colorType:"primary",type:"text",size:"small",status:"default",label:"label",helpText:"",disabled:!1},argTypes:{colorType:{control:"radio",options:["primary"]},type:{control:"radio",options:["text","password"]},size:{control:"radio",options:["small","medium"]},status:{control:"radio",options:["default","success","error"]},label:{control:"text"},helpText:{control:"text"}}},t={render:a=>b.jsx(n,{...a}),args:{size:"large",label:"",placeholder:"TextArea",disabled:!1},argTypes:{size:{control:"radio",options:["large"]},label:{control:"text"}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return <Input {...args} />;
  },
  args: {
    colorType: 'primary',
    type: 'text',
    size: 'small',
    status: 'default',
    label: 'label',
    helpText: '',
    disabled: false
  },
  argTypes: {
    colorType: {
      control: 'radio',
      options: ['primary']
    },
    type: {
      control: 'radio',
      options: ['text', 'password']
    },
    size: {
      control: 'radio',
      options: ['small', 'medium']
    },
    status: {
      control: 'radio',
      options: ['default', 'success', 'error']
    },
    label: {
      control: 'text'
    },
    helpText: {
      control: 'text'
    }
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,f,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return <TextArea {...args} />;
  },
  args: {
    size: 'large',
    label: '',
    placeholder: 'TextArea',
    disabled: false
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['large']
    },
    label: {
      control: 'text'
    }
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const D=["Basic","Textarea"];export{o as Basic,t as Textarea,D as __namedExportsOrder,B as default};
