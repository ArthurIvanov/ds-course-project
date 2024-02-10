import{j as a}from"./jsx-runtime-vNq4Oc-g.js";import{q as t,$ as p,L as u}from"./icon-c8lZxGp4.js";import"./placeholder-jxCiraG3.js";import{B as g}from"./button-BSndQT3k.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const b=t.div`
	border-radius: 4px;
	display: inline-flex;
	flex-direction: column;
	overflow: hidden;
	min-width: 360px;
	box-shadow: 0px 4px 10px 0px rgba(14, 19, 27, 0.08);
	min-heigth: 500px;
	// Прибивает футер карточки с кнопкой к нижниму краю карточки
	justify-content: space-between;
`,x=t.div`
	display: flex;
	flex-direction: column;
`,m=t.img`
	width: 100%;
	height: 220px;
	object-fit: cover;
`,h=t.div`
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`,y=t.div`
	display: flex;
	flex-direction: column;
	gap: 4px;

	span {
		color: rgba(13, 41, 70, 1);
		font-size: 16px;
		font-weight: 300;
		line-height: 20px;
		display: inline-block;
	}

	h4 {
		color: rgba(0, 0, 0, 1);
		font-size: 24px;
		font-weight: 600;
		line-height: 36px;
		display: inline-block;
	}
`,f=t.p`
	color: rgba(13, 41, 70, 1);
	font-size: 18px;
	font-weight: 300;
	line-height: 24px;
	display: inline-block;
`,F=t.div`
	padding: 16px;
`,i=({imagePath:n,subTitle:l,title:o="Заголовок по умолчанию",bodyText:s,buttonText:d="Подробнее"})=>a.jsxs(b,{children:[a.jsxs(x,{children:[a.jsx(m,{src:n}),a.jsxs(h,{children:[a.jsxs(y,{subTitle:l,children:[l?a.jsx("span",{children:l}):null,a.jsx("h4",{children:o})]}),a.jsx(f,{children:s})]})]}),a.jsx(F,{children:a.jsx(g,{text:d})})]});try{i.displayName="ExampleCard",i.__docgenInfo={description:"",displayName:"ExampleCard",props:{imagePath:{defaultValue:null,description:"",name:"imagePath",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},title:{defaultValue:{value:"Заголовок по умолчанию"},description:"",name:"title",required:!1,type:{name:"string"}},bodyText:{defaultValue:null,description:"",name:"bodyText",required:!1,type:{name:"string"}},buttonText:{defaultValue:{value:"Подробнее"},description:"",name:"buttonText",required:!1,type:{name:"string"}},buttonAlignBottom:{defaultValue:null,description:"",name:"buttonAlignBottom",required:!1,type:{name:"boolean"}}}}}catch{}const v=""+new URL("FiraSans-Regular-TeoSE7WC.ttf",import.meta.url).href,E=""+new URL("FiraSans-Italic-WzAsim2P.ttf",import.meta.url).href,C=p`

	@font-face {
		font-family: 'Fira Sans';
		font-style: normal;
		font-weight: 400;
		src: url(${v}) format('truetype');
	}

	@font-face {
		font-family: 'Fira Sans Italic';
		font-style: italic;
		font-weight: 400;
		src: url(${E}) format('truetype');
	}
	
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

	body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
            -webkit-overflow-scrolling: touch;

            font-family: 'Fira Sans', sans-serif;
            background: ${n=>n.theme.colors.bg.calm.global}
	}
`,e={grey:{50:"#F7F8F9",100:"#E7EAEC",200:"#C6CCD2",300:"#A1A9B5",400:"#627083",500:"#4E5A69",600:"#3F4854",700:"#313842",800:"#1B1F25",900:"#0F1114"},green:{50:"#F2F9F7",100:"#D9EDE7",200:"#A4D3C5",300:"#67B69E",400:"#01855D",500:"#016A4A",600:"#01553C",700:"#01432F",800:"#00251A",900:"#00140E"},cyan:{50:"#F2F8FB",100:"#D9EBF2",200:"#A3CEE1",300:"#66AECD",400:"#0078AB",500:"#006089",600:"#004D6D",700:"#003C56",800:"#002230",900:"#00121A"},blue:{50:"#F3F7FD",100:"#DAE7F9",200:"#A7C5F0",300:"#6D9EE6",400:"#0B5ED6",500:"#094BAB",600:"#073C89",700:"#062F6B",800:"#031A3C",900:"#020E20"},pink:{50:"#FDF3F7",100:"#F9DAE6",200:"#F1A6C3",300:"#E86A9A",400:"#D90757",500:"#AE0646",600:"#8B0438",700:"#6D042C",800:"#3D0218",900:"#21010D"},red:{50:"#FEF3F4",100:"#FCDBDD",200:"#F7A9AD",300:"#F27076",400:"#EA111A",500:"#BB0E15",600:"#960B11",700:"#75090D",800:"#420507",900:"#230304"},white:"#FFFFFF",black:"#020103",focus:"hsla(227,100%,88%,0.6)"},r={1:"1px",2:"2px",3:"3px",4:"4px",5:"5px",6:"6px",7:"7px",8:"8px",10:"10px",11:"11px",12:"12px",15:"15px",16:"16px",18:"16px",20:"20px",22:"22px",23:"23px",24:"24px",30:"30px",32:"32px",36:"36px",40:"40px",48:"48px",56:"56px",64:"64px",72:"72px"},c={colors:{bg:{calm:{section:e.white,global:e.grey[50],disabled:e.grey[100]}},text:{calm:{main:e.grey[50]},loud:{main:e.grey[800],secondary:e.grey[500],disabled:e.grey[300]}},lead:{calm:{enabled:e.blue[50],hover:e.blue[100],active:e.blue[600]},loud:{enabled:e.blue[400],hover:e.blue[500],active:e.blue[600]},border:{enabled:e.blue[100]}},accent:{green:{calm:{enabled:e.green[50],hover:e.green[100],active:e.green[200]},loud:{enabled:e.green[400],hover:e.green[500],active:e.green[600]},border:{enabled:e.green[100]}},cyan:{calm:{enabled:e.cyan[50],hover:e.cyan[100],active:e.cyan[200]},loud:{enabled:e.cyan[400],hover:e.cyan[500],active:e.cyan[600]},border:{enabled:e.cyan[100]}}}},spacing:{height:{base:r[40],small:r[32]},inner:{},outer:{},paddings:{}},cornerRadius:{micro:r[4],componentBase:r[8]},shadows:{focus:"0px 0px 0px 4px rgba(192, 206, 255, 0.8)"}},A={...c,colors:{bg:{calm:{section:e.black,global:e.grey[900],disabled:e.grey[600]}},text:{calm:{main:e.grey[700]},loud:{main:e.grey[100],secondary:e.grey[300],disabled:e.grey[500]}},lead:{calm:{enabled:e.blue[400],hover:e.blue[500],active:e.blue[600]},loud:{enabled:e.blue[100],hover:e.blue[200],active:e.blue[300]},border:{enabled:e.blue[500]}},accent:{green:{calm:{enabled:e.green[400],hover:e.green[500],active:e.green[600]},loud:{enabled:e.green[100],hover:e.green[200],active:e.green[300]},border:{enabled:e.green[500]}},cyan:{calm:{enabled:e.cyan[100],hover:e.cyan[200],active:e.cyan[300]},loud:{enabled:e.cyan[400],hover:e.cyan[500],active:e.cyan[600]},border:{enabled:e.cyan[500]}}}}},T={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},status:{statuses:{released:{background:"#0000ff",color:"#ffffff",description:"This component is stable and released"}}}},globalTypes:{theme:{description:"Global theme for components",defaultValue:"light",toolbar:{title:"Theme",icon:"circlehollow",items:[{value:"light",title:"Светлая тема",icon:"circlehollow"},{value:"dark",title:"Темная тема",icon:"circle"}],dynamicTitle:!0}}}},q=[(n,l)=>{const o=l.globals.theme==="dark"?A:c;return a.jsxs(u,{theme:o,children:[a.jsx(C,{}),a.jsx(n,{})]})}];export{q as decorators,T as default};
