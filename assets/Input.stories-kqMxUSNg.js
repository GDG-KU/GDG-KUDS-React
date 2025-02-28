import{j as I}from"./jsx-runtime-DR9Q75dM.js";import{b as d,d as b,j as n,c as l,P as S}from"./context-C8IlOjeA.js";import{r as q}from"./index-DRjF_FHU.js";import{C as r}from"./colors-s21EB8E3.js";import{f as A}from"./index-Dj6nxAlZ.js";const e=`${S}-checkbox`,g=q.forwardRef((a,u)=>{const{colorType:m,type:s,size:f="small",label:t,helpText:i,status:y="default",className:x,icon:h,...T}=a,R=d(`${e}-container`,`${e}-${y}`,x),V=d(`${e}-inner`,`${e}-${m}`,`${e}-${f}`,{[`${e}-disabled`]:T.disabled});return b("div",{css:P,className:R,children:[t&&n("label",{className:`${e}-label`,children:t}),b("div",{className:`${e}-wrapper`,children:[n("input",{ref:u,type:s,className:V,...T}),h&&n("span",{className:`${e}-icon`,children:h})]}),i&&n("p",{className:`${e}-helptext`,children:i})]})}),j=l({fontSize:12,fontWeight:500,color:r.primary[800],marginBottom:2}),k=l({fontSize:10,fontWeight:300,marginTop:5}),E=l({padding:"10px 20px",fontsize:14,display:"inline-flex",alignItems:"center",border:"1.2px solid",borderRadius:8,backgroundColor:r.primary[100],cursor:"text",[`&.${e}-small`]:{width:200,height:14},[`&.${e}-medium`]:{width:260,height:24},[`&.${e}-disabled`]:{backgroundColor:r.primary[200],borderColor:r.primary[300],cursor:"not-allowed"}}),D=l({position:"relative",[`> input.${e}-inner`]:E,[`> span.${e}-icon`]:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}}),P=l({display:"flex",flexDirection:"column",gap:2,width:"100%",[`> label.${e}-label`]:j,[`> div.${e}-wrapper`]:D,[`> p.${e}-helptext`]:k,[`&.${e}-default`]:{color:r.primary[700],[`> div.${e}-wrapper > input.${e}-inner`]:{borderColor:r.primary[500],"&:focus":{transition:"border-color 0.2s, color 0.2s",outline:"none",borderColor:r.primary[800]}}},[`&.${e}-success`]:{color:r.green[500],[`> div.${e}-wrapper > input.${e}-inner`]:{borderColor:r.green[500],"&:focus":{transition:"border-color 0.2s, color 0.2s",outline:"none",borderColor:r.primary[800]}}},[`&.${e}-error`]:{color:r.red[500],[`> div.${e}-wrapper > input.${e}-inner`]:{borderColor:r.red[500],"&:focus":{transition:"border-color 0.2s, color 0.2s",outline:"none",borderColor:r.primary[800]}}}});try{g.displayName="Input",g.__docgenInfo={description:"",displayName:"Input",props:{colorType:{defaultValue:null,description:"",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},helpText:{defaultValue:null,description:"",name:"helpText",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"error"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}}}catch{}const o=`${S}-textarea`,$=q.forwardRef((a,u)=>{const{size:m="large",label:s,className:f,...t}=a,{disabled:i}=t,y=d(`${o}-container`,f),x=d(`${o}-inner`,`${o}-${m}`,{[`${o}-disabled`]:i});return b("div",{css:L,className:y,children:[s&&n("label",{className:`${o}-label`,children:s}),n("textarea",{ref:u,className:x,...t})]})}),W=l({fontSize:12,fontWeight:700,color:r.primary[800]}),B=l({padding:"10px 20px",fontsize:14,display:"inline-flex",alignItems:"center",border:"1.2px solid",borderRadius:8,borderColor:r.primary[500],backgroundColor:r.primary[100],cursor:"text","&:focus":{outline:"none",color:r.primary[800],borderColor:r.primary[800]},[`&.${o}-large`]:{width:660,height:280},[`&.${o}-disabled`]:{backgroundColor:r.primary[200],borderColor:r.primary[300],cursor:"not-allowed"}}),L=l({display:"flex",flexDirection:"column",gap:16,width:"100%",[`> label.${o}-label`]:W,[`> textarea.${o}-inner`]:B});try{$.displayName="TextArea",$.__docgenInfo={description:"",displayName:"TextArea",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const Y={title:"Input",args:{onChange:A(),placeholder:"Input"}},p={render:a=>I.jsx(g,{...a}),args:{colorType:"primary",type:"text",size:"small",status:"default",label:"label",helpText:"",disabled:!1},argTypes:{colorType:{control:"radio",options:["primary"]},type:{control:"radio",options:["text","password"]},size:{control:"radio",options:["small","medium"]},status:{control:"radio",options:["default","success","error"]},label:{control:"text"},helpText:{control:"text"}}},c={render:a=>I.jsx($,{...a}),args:{size:"large",label:"",placeholder:"TextArea",disabled:!1},argTypes:{size:{control:"radio",options:["large"]},label:{control:"text"}}};var C,v,z;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(z=(v=p.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var N,_,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(_=c.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const G=["Basic","Textarea"];export{p as Basic,c as Textarea,G as __namedExportsOrder,Y as default};
