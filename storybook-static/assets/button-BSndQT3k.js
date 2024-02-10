import{j as d}from"./jsx-runtime-vNq4Oc-g.js";import{q as c}from"./icon-c8lZxGp4.js";const l=c.button`
	border: 1px solid;
	border-radius: ${e=>e.theme.cornerRadius.componentBase};
	font-size: 16px;
	line-height: 24px;
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 8px;
	box-shadow: none;
	cursor: pointer;

	&:focus {
		box-shadow: ${e=>{var a;return(a=e.theme.shadows)==null?void 0:a.focus}};
	}

	${e=>e.size==="base"&&`
        padding: 0 12px;
        border-radius: ${e.theme.cornerRadius.micro};
        line-height: 30px;
        height: ${e.theme.spacing.height.small};
    `}

	${e=>e.size==="small"&&`
        padding: 0 16px;
        border-radius: ${e.theme.cornerRadius.micro};
        line-height: 30px;
        height: ${e.theme.spacing.height.base};
    `}

	${e=>e.appearance==="primary"&&`
        &:enabled {
                background-color: ${e.theme.colors.lead.loud.enabled};
                border-color: ${e.theme.colors.lead.loud.enabled};
                color: ${e.theme.colors.text.calm.main};
            }

        &:hover {
                background-color: ${e.theme.colors.lead.loud.hover};
                border-color: ${e.theme.colors.lead.loud.hover};
                color: ${e.theme.colors.text.calm.main};
            }

            &:focus {
                background-color: ${e.theme.colors.lead.loud.enabled};
                border-color: ${e.theme.colors.lead.loud.enabled};
                color: ${e.theme.colors.text.calm.main};
        }

            &:active {
                background-color: ${e.theme.colors.lead.loud.active};
                border-color: ${e.theme.colors.lead.loud.active};
                color: ${e.theme.colors.text.calm.main};
            }     
    
    `}

    ${e=>e.disabled&&`
            &:disabled {
            color: ${e.theme.colors.text.loud.disabled}; 
            background-color: ${e.theme.colors.bg.calm.disabled};  
            border-color: ${e.theme.colors.bg.calm.disabled}; 
            cursor: not-allowed;    
        }
        `}
`,t=({appearance:e="primary",text:a,size:o="base",disabled:r,iconAfter:n,iconBefore:i})=>d.jsxs(l,{text:a,appearance:e,size:o,disabled:r,children:[i,a,n]});try{l.displayName="StyledButton",l.__docgenInfo={description:"",displayName:"StyledButton",props:{size:{defaultValue:{value:"base"},description:`Small - used for comapct use cases
Base used for main call to action`,name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"small"'}]}},text:{defaultValue:null,description:"Text is explanation of button meaning",name:"text",required:!0,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},appearance:{defaultValue:{value:"primary"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"inverted"'}]}},iconBefore:{defaultValue:null,description:"Places icon before text",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:null,description:"Places icon after text",name:"iconAfter",required:!1,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{t.displayName="Button",t.__docgenInfo={description:`
Button is a primary call to action in user interface`,displayName:"Button",props:{appearance:{defaultValue:{value:"primary"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"inverted"'}]}},disabled:{defaultValue:null,description:"Make button disabled",name:"disabled",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Text is explanation of button meaning",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"base"},description:`Small - used for comapct use cases
Base used for main call to action`,name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"small"'}]}},iconBefore:{defaultValue:null,description:"Places icon before text",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:null,description:"Places icon after text",name:"iconAfter",required:!1,type:{name:"ReactNode"}}}}}catch{}export{t as B};
