(()=>{var e={};e.id=912,e.ids=[912],e.modules={2187:(e,i,t)=>{Promise.resolve().then(t.t.bind(t,16444,23)),Promise.resolve().then(t.t.bind(t,16042,23)),Promise.resolve().then(t.t.bind(t,88170,23)),Promise.resolve().then(t.t.bind(t,49477,23)),Promise.resolve().then(t.t.bind(t,29345,23)),Promise.resolve().then(t.t.bind(t,12089,23)),Promise.resolve().then(t.t.bind(t,46577,23)),Promise.resolve().then(t.t.bind(t,31307,23))},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12412:e=>{"use strict";e.exports=require("assert")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:e=>{"use strict";e.exports=require("os")},22220:(e,i,t)=>{Promise.resolve().then(t.bind(t,61693))},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29066:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>o,generateStaticParams:()=>s});var r=t(37413);t(61120);var a=t(52343),n=t(61693);async function s(){let{data:e}=await a.F.get("/news");return e.map(e=>({id:e.id}))}let o=async({params:e})=>{let{id:i}=e;try{let{data:e}=await a.F.get("/news",{params:{id:`eq.${i}`,select:"*"}});if(!e||0===e.length)return(0,r.jsx)("div",{children:"Mat\xe9ria n\xe3o encontrada."});let t=e[0];return(0,r.jsx)(n.default,{article:t,articleId:i})}catch(e){return console.error("Erro ao carregar a mat\xe9ria:",e),(0,r.jsx)("div",{children:"Erro ao carregar a mat\xe9ria."})}}},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},38484:(e,i,t)=>{"use strict";t.d(i,{G:()=>u});var r=t(60687);t(43210);var a=t(85814),n=t.n(a),s=t(47237);let o=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #efebe0;
  border: 1px solid #888;
  border-radius: 5px;
  padding: 15px;
  margin-top: 40px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  gap: 10px;
  cursor: pointer;

  &:hover {
    background: #f8f9fa;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-family: "Tulasi", sans-serif;
    padding: 10px;
    margin-top: 20px;
  }

  @media (max-width: 425px) {
    padding: 8px;
    margin-top: 65px;
  }

  @media (max-width: 375px) {
    padding: 8px;
    margin-top: 60px;
  }

  @media (max-width: 320px) {
    padding: 8px;
    margin-top: 60px;
  }
`,d=s.Ay.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 425px) {
    height: 120px;
  }
`,p=s.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`,l=s.Ay.button`
  background: #1f1f1e;
  color: #ffffff;
  font-size: 0.75rem;
  padding: 4px 8px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #555555;
  }

  @media (max-width: 425px) {
    font-size: 0.7rem;
    padding: 3px 6px;
  }
`,x=s.Ay.span`
  font-family: "Tulasi", sans-serif;
  font-size: 0.8rem;
  color: #888;

  @media (max-width: 425px) {
    font-size: 0.75rem;
  }
`,m=s.Ay.h3`
  font-family: "Tulasi", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 425px) {
    font-size: 0.85rem;
  }
`,c=s.Ay.span`
  font-family: "Tulasi", sans-serif;
  font-size: 0.8rem;
  color: #888;

  @media (max-width: 425px) {
    font-size: 0.75rem;
  }
`,h=s.Ay.p`
  font-family: "Tulasi", sans-serif;
  font-size: 0.875rem;
  line-height: 1.4;
  color: #555;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 425px) {
    font-size: 0.75rem;
  }
`;var f=t(30474);let u=({id:e,image:i,tags:t,date:a,title:s,readingTime:u,description:g})=>(0,r.jsxs)(o,{children:[(0,r.jsx)(d,{children:(0,r.jsx)(n(),{href:`/materia/${e}`,passHref:!0,children:(0,r.jsx)(f.default,{src:i,alt:"Small card image",width:1769,height:799})})}),(0,r.jsx)(p,{children:t.map((e,i)=>(0,r.jsx)(n(),{href:`/tags/${e.trim()}`,passHref:!0,children:(0,r.jsx)(l,{children:e.trim()})},i))}),(0,r.jsx)(x,{children:a}),(0,r.jsx)(n(),{href:`/materia/${e}`,passHref:!0,children:(0,r.jsx)(m,{children:s})}),(0,r.jsx)(c,{children:u}),(0,r.jsx)(n(),{href:`/materia/${e}`,passHref:!0,children:(0,r.jsx)(h,{children:g})})]})},44468:(e,i,t)=>{"use strict";t.r(i),t.d(i,{GlobalError:()=>s.a,__next_app__:()=>x,pages:()=>l,routeModule:()=>m,tree:()=>p});var r=t(65239),a=t(48088),n=t(88170),s=t.n(n),o=t(30893),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);t.d(i,d);let p={children:["",{children:["materia",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,29066)),"D:\\Cursos DIO\\Curso React\\Projetos\\react-blog\\src\\app\\materia\\[id]\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,94431)),"D:\\Cursos DIO\\Curso React\\Projetos\\react-blog\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,57398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,65284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,l=["D:\\Cursos DIO\\Curso React\\Projetos\\react-blog\\src\\app\\materia\\[id]\\page.jsx"],x={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/materia/[id]/page",pathname:"/materia/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},52343:(e,i,t)=>{"use strict";t.d(i,{F:()=>r});let r=t(94612).A.create({baseURL:"https://wabtsmqwvwtycaudgeeo.supabase.co/rest/v1",headers:{apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhYnRzbXF3dnd0eWNhdWRnZWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MjgwMTksImV4cCI6MjA1NzIwNDAxOX0.0QxDtiZxdjmY2kIGI_a1n8ydWNDecUBf5-PO0scS1-o",authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhYnRzbXF3dnd0eWNhdWRnZWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MjgwMTksImV4cCI6MjA1NzIwNDAxOX0.0QxDtiZxdjmY2kIGI_a1n8ydWNDecUBf5-PO0scS1-o"}})},52911:()=>{},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},61135:()=>{},61159:()=>{},61693:(e,i,t)=>{"use strict";t.d(i,{default:()=>r});let r=(0,t(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Cursos DIO\\\\Curso React\\\\Projetos\\\\react-blog\\\\src\\\\app\\\\materia\\\\[id]\\\\ClientMateria.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Cursos DIO\\Curso React\\Projetos\\react-blog\\src\\app\\materia\\[id]\\ClientMateria.jsx","default")},61859:(e,i,t)=>{Promise.resolve().then(t.t.bind(t,86346,23)),Promise.resolve().then(t.t.bind(t,27924,23)),Promise.resolve().then(t.t.bind(t,35656,23)),Promise.resolve().then(t.t.bind(t,40099,23)),Promise.resolve().then(t.t.bind(t,38243,23)),Promise.resolve().then(t.t.bind(t,28827,23)),Promise.resolve().then(t.t.bind(t,62763,23)),Promise.resolve().then(t.t.bind(t,97173,23))},62185:(e,i,t)=>{"use strict";t.d(i,{F:()=>r});let r=t(51060).A.create({baseURL:"https://wabtsmqwvwtycaudgeeo.supabase.co/rest/v1",headers:{apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhYnRzbXF3dnd0eWNhdWRnZWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MjgwMTksImV4cCI6MjA1NzIwNDAxOX0.0QxDtiZxdjmY2kIGI_a1n8ydWNDecUBf5-PO0scS1-o",authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhYnRzbXF3dnd0eWNhdWRnZWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MjgwMTksImV4cCI6MjA1NzIwNDAxOX0.0QxDtiZxdjmY2kIGI_a1n8ydWNDecUBf5-PO0scS1-o"}})},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},70440:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>a});var r=t(31658);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},74075:e=>{"use strict";e.exports=require("zlib")},75479:(e,i,t)=>{"use strict";t.d(i,{w:()=>o});var r=t(60687);t(43210);var a=t(47237);let n=a.Ay.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  padding: 20px;
  background-color: #1f1f1e;
  color: #ffffff;
  gap: 10px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 50px;
    padding: 15px;
    gap: 8px;
  }

  @media (max-width: 425px) {
    margin-top: 30px;
    padding: 10px;
    gap: 5px;
  }
`,s=a.Ay.p`
  font-size: 0.875rem;
  margin: 0;

  span {
    color: #f25c54;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 425px) {
    font-size: 0.75rem;
  }
`,o=()=>(0,r.jsxs)(n,{children:[(0,r.jsx)(s,{children:"\xa9 2025 My Website. All rights reserved."}),(0,r.jsxs)(s,{children:["Developed with ",(0,r.jsx)("span",{children:"❤"})," By Leonardo Saturnino."]})]})},78829:(e,i,t)=>{"use strict";t.d(i,{default:()=>j});var r=t(60687),a=t(43210),n=t(47237);let s=n.Ay.div`
  display: flex;
  flex-direction: row;
  margin: 50px auto 0 180px; 
  max-width: 1640px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; 
    margin: 20px auto;
    padding: 0 10px;
  }

  @media (max-width: 425px) {
    margin: 10px auto;
    padding: 0 5px; 
  }
`,o=n.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 15px;
  }
`,d=n.Ay.div`
  margin-right: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    margin-right: 0; 
  }
`,p=n.Ay.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: auto;
  margin-top: 95px;
  padding: 40px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%; 
    margin-top: 20px;
    padding: 10px;
  }

  position: sticky; 
  top: 100px;
`,l=n.Ay.h1`
  font-family: 'Tulasi', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem; 
  }

  @media (max-width: 425px) {
    font-size: 1.25rem;
  }
`,x=n.Ay.p`
  font-family: 'Tulasi', sans-serif;
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 15px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem; 
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`,m=n.Ay.span`
  font-family: 'Tulasi', sans-serif;
  display: block;
  font-size: 0.875rem;
  color: #888;
  margin-bottom: 20px;
`,c=n.Ay.div`
  width: 100%;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`,h=n.Ay.p`
  font-family: 'Tulasi', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  text-align: justify;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`,f=n.Ay.p`
  font-family: 'Tulasi', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  text-align: justify;
  margin-top: 150px;

  @media (max-width: 768px) {
    margin-top: 100px;
    font-size: 0.9rem;
  }

  @media (max-width: 425px) {
    margin-top: 80px;
    font-size: 0.8rem;
  }
`;n.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9rem;
  }

  @media (max-width: 425px) {
    padding: 5px;
    font-size: 0.8rem;
  }
`;var u=t(84237),g=t(75479),w=t(38484),b=t(30474),y=t(62185);let j=({article:e,articleId:i})=>{let[t,n]=(0,a.useState)([]),[j,v]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=async()=>{try{let{data:e}=await y.F.get("/news",{params:{id:`neq.${i}`,select:"*",order:"date.desc",limit:3}});e&&n(e)}catch(e){console.error("Erro ao buscar SmallCards relacionados:",e)}};(async()=>{try{let{data:e}=await y.F.get("/news",{params:{is_big_card:"eq.true"}});e&&e.length>0&&v(e[0])}catch(e){console.error("Erro ao buscar o BigCard:",e)}})(),e()},[i]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Y,{}),(0,r.jsx)(o,{children:(0,r.jsxs)(s,{children:[(0,r.jsxs)(d,{children:[(0,r.jsx)(l,{children:e.title}),(0,r.jsx)(x,{children:e.description}),(0,r.jsx)(m,{children:e.date}),(0,r.jsx)(c,{children:(0,r.jsx)(b.default,{src:e.image_url,alt:e.title,width:800,height:400})}),e.content.trim().split("\n").filter(e=>""!==e.trim()).map((e,i)=>(0,r.jsx)(h,{children:e},i)),(0,r.jsx)(f,{children:"Written by Leonardo Saturnino"})]}),(0,r.jsxs)(p,{children:[j&&j.id!==e.id&&(0,r.jsx)(w.G,{id:j.id,image:j.image_url,tags:j.tags.split(","),date:j.date,title:j.title,readingTime:`${j.read_time} min read`,description:j.description},j.id),t.filter(e=>e.id!==j?.id).slice(0,3-(j&&j.id!==e.id?1:0)).map(e=>(0,r.jsx)(w.G,{id:e.id,image:e.image_url,tags:e.tags.split(","),date:e.date,title:e.title,readingTime:`${e.read_time} min read`,description:e.description},e.id))]})]})}),(0,r.jsx)(g.w,{})]})}},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},83997:e=>{"use strict";e.exports=require("tty")},84237:(e,i,t)=>{"use strict";t.d(i,{Y:()=>b});var r=t(60687),a=t(43210),n=t(47237);let s=n.Ay.header`
  width: 100%;
  max-width: 80%;
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: #1f1f1e;

  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 425px) {
    padding: 0 10px;
  }
`,o=n.Ay.img`
  max-width: 32px;
  max-height: 32px;
  cursor: pointer;
`,d=n.Ay.div`
  width: 230px;
  height: 35px;
  background: #2d2d37;
  border-radius: 8px;
  padding: 0 5px;
  margin: 0 50px;
  display: flex;
  align-items: center;

  &:hover {
    background: #888888;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`,p=n.Ay.input`
  font-family: "Core Sans Thin", sans-serif;
  font-weight: bold;
  background: transparent;
  flex: 1;
  border: none;
  color: #faebd7;
  outline: none; 
  padding: 5px;
`,l=n.Ay.button`
  background: #555555;
  color: #ffffff;
  border: none;
  padding: 5.5px 10px;
  position: absolute;
  margin-left: 270px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #888888;
  }

  @media (max-width: 768px) {
    padding: 5.5px;
    margin-left: 190px;
  }
`,x=n.Ay.div`
  background-color: #1f1f1e;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`,m=n.Ay.a`
  font-family: "Core Sans Thin", sans-serif;
  font-size: 14px;
  font-weight: bolder;
  line-height: 25px;
  color: #faebd7;
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    scale: 1.15;
  }

  @media (max-width: 768px) {
    margin-right: 8px;
  }

  @media (max-width: 425px) {
    font-size: 11px;
    margin-right: 10px;
  }
`,c=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }
`,h={src:"/_next/static/media/logo.7677fcdc.png"};var f=t(85814),u=t.n(f),g=t(16189),w=t(62185);let b=()=>{let[e,i]=(0,a.useState)(""),t=(0,g.useRouter)(),n=async()=>{if(""===e.trim()){alert("Please, type a tag name.");return}try{let{data:i}=await w.F.get("/news",{params:{tags:`ilike.%${e.trim()}%`}});i.length>0?t.push(`/tags/${e.trim()}`):alert("Tag not found. Please try another tag.")}catch(e){console.error("Error fetching articles by tag:",e),alert("An error occurred. Please try again.")}};return(0,r.jsx)(x,{children:(0,r.jsxs)(s,{children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",flex:1},children:[(0,r.jsx)(u(),{href:"/",children:(0,r.jsx)(o,{src:h.src,alt:"logo"})}),(0,r.jsx)(d,{children:(0,r.jsx)(p,{placeholder:"Type a tag name...",value:e,onChange:e=>i(e.target.value),onKeyDown:e=>{"Enter"===e.key&&n()}})}),(0,r.jsx)(l,{onClick:n,children:"\uD83D\uDD0D"})]}),(0,r.jsxs)(c,{children:[(0,r.jsx)(m,{href:"https://www.linkedin.com/in/leonardo-saturnino-564502336",target:"_blank",children:"Linkedin"}),(0,r.jsx)(m,{href:"https://www.workana.com/freelancer/bd960c85ca3d39a228f856e83cca2c29",target:"_blank",children:"Workana"}),(0,r.jsx)(m,{href:"https://github.com/LeoSatCode",target:"_blank",children:"Github"}),(0,r.jsx)(m,{href:"https://www.youtube.com/@guildadosladinos",target:"_blank",children:"Youtube"})]})]})})}},92716:(e,i,t)=>{Promise.resolve().then(t.bind(t,78829))},94431:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>p,metadata:()=>d});var r=t(37413),a=t(22376),n=t.n(a),s=t(68726),o=t.n(s);t(61135);let d={title:"Create Next App",description:"Generated by create next app"};function p({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:`${n().variable} ${o().variable} antialiased`,children:e})})}},94735:e=>{"use strict";e.exports=require("events")}};var i=require("../../../webpack-runtime.js");i.C(e);var t=e=>i(i.s=e),r=i.X(0,[447,145,675,612],()=>t(44468));module.exports=r})();