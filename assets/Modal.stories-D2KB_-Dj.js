import{b as o,c as B,a as n,F as v,j as t,P}from"./context-CxwPi4Y4.js";import{B as g}from"./Button-BveDy3Xy.js";import{C as V}from"./Checkbox-BWyXmJKk.js";import{I as W}from"./Input-ZN4pN3Xb.js";import{C as E}from"./ConfigProvider-9YQSA_hX.js";import{r as F}from"./index-DRjF_FHU.js";import"./jsx-runtime-DR9Q75dM.js";import"./check-BtRw9FP0.js";import"./colors-s21EB8E3.js";const e=`${P}-modal`,h=({className:u,isOpen:c,icon:r,iconSize:a,header:y,children:i,footer:x,...A})=>{const q=B({[`${e}`]:!!c,[`${e}-icon-${a}`]:!!r},u);return c?n(v,{children:n("div",{className:`${e}-backdrop`,css:L,children:t("div",{className:q,css:X,...A,children:[r&&a==="sm"&&t("div",{className:`${e}-container-with-icon`,children:[n("div",{className:`${e}-icon`,children:r}),t("div",{className:`${e}-container`,children:[n("div",{className:`${e}-header`,children:y}),i&&n("div",{className:`${e}-children`,children:i}),n("div",{className:`${e}-footer`,children:x})]})]}),!(r&&a==="sm")&&t("div",{className:`${e}-container`,children:[r&&n("div",{className:`${e}-icon`,children:r}),n("div",{className:`${e}-header`,children:y}),i&&n("div",{className:`${e}-children`,children:i}),n("div",{className:`${e}-footer`,children:x})]})]})})}):n(v,{})},T=o({display:"inline-flex",justifyContent:"center",alignItems:"center",width:"106px",height:"106px",borderRadius:"53px",backgroundColor:"var(--yellow-100)"}),H=o({display:"inline-flex",justifyContent:"center",alignItems:"center",width:"56px",height:"56px",borderRadius:"8px",backgroundColor:"var(--yellow-100)"}),L=o({width:"100%",height:"100%",position:"fixed",top:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.5)"}),X=o({padding:"24px 32px",minWidth:"440px",minHeight:"200px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white",border:"none",borderRadius:"32px",boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.10)",[`.${e}-container`]:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"14px"},[`.${e}-header`]:{color:"var(--primary-900)",fontSize:24,fontWeight:"700",wordWrap:"break-word",textAlign:"center"},[`.${e}-children`]:{marginBottom:10},[`.${e}-footer`]:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},[`.${e}-container-with-icon`]:{display:"flex",flexDirection:"row",gap:26,[`.${e}-container`]:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",gap:"14px",[`.${e}-footer`]:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",alignSelf:"flex-end"}}},[`&.${e}-icon-lg`]:{[`.${e}-icon`]:T},[`&.${e}-icon-sm`]:{[`.${e}-icon`]:H}});try{h.displayName="Modal",h.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!0,type:{name:"ReactNode"}}}}}catch{}const re={title:"Modal",component:h,tags:["autodocs"],args:{},argTypes:{isOpen:{control:!1},icon:{control:!1},iconSize:{control:!1},header:{control:"text"},children:{control:"text"},footer:{control:!1}},render:function(c){const[r,a]=F.useState(!1);return n(E,{theme:{mode:"light"},children:t("div",{children:[n(g,{onClick:()=>a(!0),children:"Open Modal"}),n(h,{...c,isOpen:r,footer:t("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[n(g,{colorType:"red",size:"md",onClick:()=>a(!1),children:"Reject"},"Reject"),n(g,{colorType:"primary",size:"md",onClick:()=>a(!1),children:"Accept"},"Accept")]})})]})})}},f=o({color:"var(--primary-600)",fontSize:16,fontWeight:"400",wordWrap:"break-word",textAlign:"center",marginBottom:10}),s={args:{header:"Do you want to accept?",children:n("div",{css:f,children:"It cannot be reset for 30 days after the change."})}},l={args:{header:"Accept changes?",children:n("div",{css:f,children:"It cannot be reset for 30 days after the change."}),icon:n("span",{role:"img","aria-label":"ok hand",style:{fontSize:"32px"},children:"👌"}),iconSize:"sm"}},d={args:{header:"Completed!",icon:n("span",{role:"img","aria-label":"party popper",style:{fontSize:"48px"},children:"🎉"}),iconSize:"lg"}},p={args:{header:"Do you want to accept?",children:t("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10},children:[n("div",{css:f,children:"It cannot be reset for 30 days after the change."}),n(V,{children:"Check it out."})]})}},m={args:{header:"Do you want to accept?",children:t("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10},children:[n("div",{css:f,children:"It cannot be reset for 30 days after the change."}),n("div",{children:n(W,{placeholder:"Password",type:"password"})})]})}};var b,C,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    header: 'Do you want to accept?',
    children: <div css={contentStyle}>It cannot be reset for 30 days after the change.</div>
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var w,$,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    header: 'Accept changes?',
    children: <div css={contentStyle}>It cannot be reset for 30 days after the change.</div>,
    icon: <span role='img' aria-label='ok hand' style={{
      fontSize: '32px'
    }}>
        👌
      </span>,
    iconSize: 'sm'
  }
}`,...(I=($=l.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var k,N,D;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    header: 'Completed!',
    icon: <span role='img' aria-label='party popper' style={{
      fontSize: '48px'
    }}>
        🎉
      </span>,
    iconSize: 'lg'
  }
}`,...(D=(N=d.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var j,z,_;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    header: 'Do you want to accept?',
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }}>
        <div css={contentStyle}>It cannot be reset for 30 days after the change.</div>
        <Checkbox>Check it out.</Checkbox>
      </div>
  }
}`,...(_=(z=p.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var R,M,O;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    header: 'Do you want to accept?',
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }}>
        <div css={contentStyle}>It cannot be reset for 30 days after the change.</div>
        <div>
          <Input placeholder='Password' type='password' />
        </div>
      </div>
  }
}`,...(O=(M=m.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const te=["primary","icon1","icon2","checkbox","input"];export{te as __namedExportsOrder,p as checkbox,re as default,l as icon1,d as icon2,m as input,s as primary};
