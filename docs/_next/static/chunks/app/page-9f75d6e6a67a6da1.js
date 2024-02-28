(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7458:function(e,l,t){Promise.resolve().then(t.bind(t,6910))},6910:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return v}});var s=t(7437),a=t(2265);let r=async e=>{try{if(""===e.trim())return[];{let l=await fetch("https://api.github.com/search/users?q=".concat(e,"&per_page=").concat(5));if(!l.ok)throw Error("HTTP error! Status: ".concat(l.status));return(await l.json()).items}}catch(e){throw e}},i=async e=>{try{let l=await fetch("https://api.github.com/users/".concat(e));if(!l.ok)throw Error("HTTP error! Status: ".concat(l.status));return await l.json()}catch(e){return null}};var n=t(8464),o=t(1689),c=t(2312),d=()=>{let{theme:e,setTheme:l}=(0,c.F)(),[t,r]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{},[e]),(0,a.useEffect)(()=>{r(!0)},[]),t)?(0,s.jsx)("button",{onClick:()=>{l("dark"===e?"light":"dark")},className:"flex text-xs items-center gap-1 font-medium",children:"light"!==e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:"LIGHT"}),(0,s.jsx)(n.Z,{className:"h-[1.2rem] ml-1 w-[1.2rem]"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:"DARK"}),(0,s.jsx)(o.Z,{className:"h-[1.2rem] ml-1 w-[1.2rem] transition-all"})]})}):null},u=e=>{let{inputValue:l,onInputChange:t,onSubmit:a}=e;return(0,s.jsx)("form",{onSubmit:a,children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none",children:(0,s.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{stroke:"#07f",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),(0,s.jsx)("input",{type:"search",id:"search",autoComplete:"off",className:"block w-full p-4 h-16 ps-14 text-sm text-gray-50  rounded-xl bg-secondary focus:border-transparent focus:ring-0 outline-none",placeholder:"Search",value:l,onChange:t,required:!0}),(0,s.jsx)("button",{type:"submit",className:" text-slate-50 absolute end-2.5 bottom-2.5 bg-[#07f] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3",children:"Search"})]})})},h=t(6948),x=e=>{let{suggestionData:l,onSuggestionClick:t}=e;return(0,s.jsx)("ul",{className:"suggestions z-10 absolute w-full bg-accent text-slate-300",children:l&&l.length>0&&l.map((e,l)=>(0,s.jsx)("li",{className:"cursor-pointer hover:bg-blue border-solid py-3 px-4 border-b-secondary hover:text-slate-50 border-b",onClick:()=>t(e),children:(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{children:(0,s.jsx)(h.default,{className:"rounded-full border-2 border-slate-300 w-12 h-12",src:e.avatar_url,width:55,height:55,alt:null==e?void 0:e.login})}),(0,s.jsx)("div",{children:e.login})]})},l))})},m=e=>{let{data:l}=e,t=(null==l?void 0:l.created_at)?new Date(l.created_at).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"}):"--";return(0,s.jsx)("div",{className:"wrap-card mt-4 text-gray-50",children:(0,s.jsxs)("div",{className:"rounded bg-secondary p-6 lg:p-12",children:[(0,s.jsxs)("div",{className:"profile-info flex justify-start gap-12 items-center",children:[(0,s.jsx)("div",{className:"profile-pic border-4 rounded-full border-solid border-[#5f78a2]",children:(0,s.jsx)(h.default,{priority:!0,className:"rounded-full w-24 h-24",src:(null==l?void 0:l.avatar_url)?l.avatar_url:"octocat.jpg",width:150,height:150,alt:(null==l?void 0:l.login)?l.login:""})}),(0,s.jsxs)("div",{className:"user-detail",children:[(0,s.jsxs)("h4",{className:"text-2xl mb-2",children:[(null==l?void 0:l.name)?l.name:"--"," "]}),(0,s.jsxs)("a",{className:"text-blue text-sm mb-1 block",href:(null==l?void 0:l.html_url)?l.html_url:"#",children:[" ",(null==l?void 0:l.login)?"@".concat(l.login):"--"]}),(0,s.jsxs)("p",{className:"text-sm mb-2 text-slate-300",children:["Joined ",t]})]})]}),(0,s.jsx)("div",{className:"description mt-3 text-slate-300",children:(0,s.jsx)("p",{children:(null==l?void 0:l.bio)?l.bio:"--"})}),(0,s.jsx)("div",{className:"repoinfo mt-8 rounded-lg bg-primary py-5 px-6",children:(0,s.jsx)("div",{className:"wrap-profile-info",children:(0,s.jsxs)("div",{className:"grid grid-cols-3",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-xs mb-1",children:"Repos"}),(0,s.jsx)("h5",{className:"text-lg text-white font-bold",children:(null==l?void 0:l.public_repos)?l.public_repos:"--"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-xs mb-1",children:"Followers"}),(0,s.jsx)("h5",{className:"text-lg text-white font-bold",children:(null==l?void 0:l.followers)?l.followers:"--"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-xs mb-1",children:"Following"}),(0,s.jsx)("h5",{className:"text-lg text-white font-bold",children:(null==l?void 0:l.following)?l.following:"--"})]})]})})}),(0,s.jsx)("div",{className:"profile-link mt-6",children:(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{className:(null==l?void 0:l.location)?"flex gap-2":"opacity-40 flex gap-2 cursor-not-allowed",children:[(0,s.jsx)("div",{children:(0,s.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",clipRule:"evenodd"})})}),(0,s.jsx)("div",{className:"text-sm text-slate-300",children:(null==l?void 0:l.location)?l.location:"Not Available"})]}),(0,s.jsxs)("div",{className:(null==l?void 0:l.twitter_username)?"flex gap-2":"opacity-40 flex gap-2 cursor-not-allowed",children:[(0,s.jsx)("div",{children:(0,s.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M22 5.9c-.7.3-1.5.5-2.4.6a4 4 0 0 0 1.8-2.2c-.8.5-1.6.8-2.6 1a4.1 4.1 0 0 0-6.7 1.2 4 4 0 0 0-.2 2.5 11.7 11.7 0 0 1-8.5-4.3 4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5a4 4 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.8c-1.8 1.3-4 2-6.1 1.7a11.7 11.7 0 0 0 10.7 1A11.5 11.5 0 0 0 20 8.5V8a10 10 0 0 0 2-2.1Z",clipRule:"evenodd"})})}),(0,s.jsx)("div",{className:"text-sm text-slate-300",children:(null==l?void 0:l.twitter_username)?l.twitter_username:"Not Available"})]}),(0,s.jsxs)("div",{className:(null==l?void 0:l.blog)?"flex gap-2":"opacity-40 flex gap-2 cursor-not-allowed",children:[(0,s.jsx)("div",{children:(0,s.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"})})}),(0,s.jsx)("div",{className:"text-sm text-slate-300",children:(0,s.jsx)("a",{className:"break-all hover:text-blue cursor-pointer",href:(null==l?void 0:l.blog)?l.blog:"#",children:(null==l?void 0:l.blog)?l.blog:"Not Available"})})]}),(0,s.jsxs)("div",{className:(null==l?void 0:l.company)?"flex gap-2":"opacity-40 flex gap-2 cursor-not-allowed",children:[(0,s.jsx)("div",{children:(0,s.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"})})}),(0,s.jsx)("div",{className:"text-sm text-slate-300",children:(null==l?void 0:l.company)?l.company:"Not Available"})]})]})})]})})},v=()=>{var e;let l;let[t,n]=(0,a.useState)(""),[o,c]=(0,a.useState)([]),[h,v]=(0,a.useState)(null),[p,g]=(0,a.useState)(null),[f,j]=(0,a.useState)(null),w=(0,a.useCallback)((e=async e=>{if(""===e.trim()||f&&e===f)c([]);else try{let l=await r(e);c(l)}catch(e){y(e)}},function(){for(var t=arguments.length,s=Array(t),a=0;a<t;a++)s[a]=arguments[a];let r=this;clearTimeout(l),l=setTimeout(()=>e.apply(r,s),500)}),[f]);(0,a.useEffect)(()=>{w(t)},[t,w]);let b=async e=>{n(e.target.value)},N=async e=>{e.preventDefault(),c([]),g(null),""!==t.trim()&&await i(t).then(e=>v(e)).catch(e=>{console.error("Error fetching user data:",e),y(e)})},y=e=>{e&&g("An error occurred while fetching data. Please try again later.")};return(0,s.jsx)("main",{className:"flex h-fit lg:h-screen  max-w-2xl mx-auto  items-center justify-center",children:(0,s.jsxs)("div",{className:"w-full flex-col justify-between p-2 px-4",children:[(0,s.jsxs)("div",{className:"logo mb-5 flex items-center justify-between",children:[(0,s.jsx)("div",{className:"font-bold text-xl text-white",children:"devfinder"}),(0,s.jsx)("div",{children:(0,s.jsx)(d,{})})]}),(0,s.jsxs)("div",{className:"w-full relative",children:[(0,s.jsx)(u,{inputValue:t,onInputChange:b,onSubmit:N}),p&&(0,s.jsx)("div",{className:"text-md text-red-500 ",children:p}),(0,s.jsx)(x,{suggestionData:o,onSuggestionClick:e=>{n(e.login),c([]),g(null),j(e.login),i(e.login).then(e=>v(e)).catch(e=>{console.error("Error fetching user data:",e),y(e)})}}),(0,s.jsx)(m,{data:h})]})]})})}}},function(e){e.O(0,[284,971,54,744],function(){return e(e.s=7458)}),_N_E=e.O()}]);