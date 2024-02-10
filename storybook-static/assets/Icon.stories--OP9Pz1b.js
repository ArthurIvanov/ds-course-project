import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{I as i,q as o,A as b,i as c}from"./icon-c8lZxGp4.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const y=o.div`
  color: #666;
  font-size: 12px;
`,j=o.h2`
    color: #666;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 24px;
`,k=o.li`
  display: flex;
  border: 1px lightgrey solid;
  border-radius: 12px;
  flex-direction: column;
  width: 96px;
  align-items: center;
  gap: 12px;
  padding: 12px;

  ${n=>n.minimal&&b`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
`,I=o.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  list-style: none;
`,v={title:"DS Architect/Icon",component:i,parameters:{status:{type:"stable"},tags:["autodocs"]}},s={render:n=>e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:["There are ",Object.keys(c).length," icons"]}),e.jsx(I,{children:Object.keys(c).map(t=>e.jsxs(k,{children:[e.jsx(i,{iconName:t,...n}),e.jsx(y,{children:t})]},t))})]}),args:{size:24}},a={render:n=>e.jsxs(e.Fragment,{children:["this is an inline ",e.jsx(i,{...n})," icon (default prop value)"]}),args:{iconName:"user","aria-label":"Happy face",size:24}},r={render:n=>e.jsxs(e.Fragment,{children:["this is a block ",e.jsx(i,{...n})," icon"]}),args:{iconName:"chevronUp","aria-label":"Happy face",block:!0,size:24}};var l,p,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <>
            <Heading>There are {Object.keys(icons).length} icons</Heading>
            <List>
                {Object.keys(icons).map(key => <Item key={key}>
                        <Icon iconName={key} {...args} />
                        <Meta>{key}</Meta>
                    </Item>)}
            </List>
        </>,
  args: {
    size: 24
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,g,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <>
            this is an inline <Icon {...args} /> icon (default prop value)
        </>,
  args: {
    iconName: 'user',
    'aria-label': 'Happy face',
    size: 24
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,u,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <>
            this is a block <Icon {...args} /> icon
        </>,
  args: {
    iconName: 'chevronUp',
    'aria-label': 'Happy face',
    block: true,
    size: 24
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const O=["withNames","InlinePlacement","BlockPlacement"];export{r as BlockPlacement,a as InlinePlacement,O as __namedExportsOrder,v as default,s as withNames};
