(this.webpackJsonpthinkin=this.webpackJsonpthinkin||[]).push([[0],{136:function(e,t,a){e.exports=a.p+"static/media/add.a4f9db10.png"},141:function(e,t){},144:function(e,t,a){e.exports=a(335)},150:function(e,t,a){},151:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){e.exports=a.p+"static/media/AKN2.e5e24bfe.jpeg"},157:function(e,t,a){},158:function(e,t){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){e.exports=a.p+"static/media/writing.b322d13c.gif"},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){e.exports=a.p+"static/media/bin.6d1114ec.png"},166:function(e,t,a){e.exports=a.p+"static/media/checked.da188ccb.png"},167:function(e,t,a){e.exports=a.p+"static/media/no.238fcaf6.png"},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){e.exports=a.p+"static/media/a.782adc2b.png"},171:function(e,t,a){},172:function(e,t){},176:function(e,t){},178:function(e,t){},189:function(e,t){},191:function(e,t){},216:function(e,t){},218:function(e,t){},219:function(e,t){},224:function(e,t){},226:function(e,t){},245:function(e,t){},257:function(e,t){},260:function(e,t){},264:function(e,t,a){},335:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(137),s=a.n(c),r=(a(150),a(7));function o(e){let{isAuthenticated:t}=e;return l.a.createElement("div",{className:"topbar"},l.a.createElement("nav",{role:"navigation",class:"primary-navigation1",style:{fontFamily:"'Verdana', sans-serif"}},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.b,{to:"/",style:{color:"black",textDecoration:"none"}},"Home")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/about",style:{color:"black",textDecoration:"none"}},"About")),t&&l.a.createElement("li",null,l.a.createElement(r.b,{to:"/create",style:{color:"black",textDecoration:"none"}},"New Post")))))}a(151);var i=a(337);const m="https://thinkin-backend-production.up.railway.app";function d(e){let{posts:t,cats:c,isAuthenticated:s}=e;const[o,d]=Object(n.useState)({});return t=t.slice(Math.max(t.length-5,0)),t.reverse(),Object(n.useEffect)(()=>{setTimeout(()=>{const e=c.map(e=>i.a.get("".concat(m,"/api/posts?cat=").concat(e.name)));Promise.all(e).then(e=>{const t={};e.forEach((e,a)=>{t[c[a].name]=e.data.length}),d(t)}).catch(e=>{console.error("Error fetching data for categories: ".concat(e))}),setTimeout(!1)},1e3)},[c]),l.a.createElement("div",{className:"carousel1"},0!==t.length?l.a.createElement("div",{className:"onlyCarousel"},l.a.createElement("div",{className:"recentBlog"},s&&l.a.createElement("h5",null,"MY POSTS")," ",!s&&l.a.createElement("h5",null,"MISSED MY RECENT BLOGS?")),l.a.createElement("div",{id:"Carousel",className:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},t.map((e,t)=>l.a.createElement("li",{key:t,"data-target":"#Carousel","data-slide-to":t,className:0===t?"active":""}))),l.a.createElement("div",{className:"carousel-inner",role:"listbox"},t.map((e,t)=>l.a.createElement("div",{key:t,className:"item ".concat(0===t?"active":"")},l.a.createElement(r.b,{to:"/".concat(e.title),className:"Link"},l.a.createElement("img",{src:e.image,alt:e.title}),l.a.createElement("div",{className:"carousel-caption d-none d-md-block"},l.a.createElement("h5",null,e.title)))))),l.a.createElement("a",{className:"left carousel-control",href:"#Carousel",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"glyphicon glyphicon-chevron-left","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"right carousel-control",href:"#Carousel",role:"button","data-slide":"next"},l.a.createElement("span",{className:"glyphicon glyphicon-chevron-right","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next")))):l.a.createElement("div",{className:"recentBlog"},l.a.createElement("h5",null,"MISSED MY RECENT BLOGS?"),l.a.createElement("div",{className:"noPosts"},l.a.createElement("img",{class:"gif",src:a(34),alt:""}),l.a.createElement("h5",{className:"textNoPage"},"I'm still THINKIN! Come back later!"))),l.a.createElement("div",{className:"cate"},l.a.createElement("h5",null,"CATEGORIES")),l.a.createElement("div",{class:"articles"},c.map((e,t)=>{return l.a.createElement("div",{key:t,class:"card4articles"},l.a.createElement(r.b,{to:"/".concat(e.name),className:"Link"},l.a.createElement("div",{class:"childArticle ".concat(e.name)},l.a.createElement("h2",null,1===(a=e.name).length?a[0].toUpperCase():a.length>1?a[0].toUpperCase()+a.replace(/([A-Z])/g," $1").trim().slice(1):void 0),l.a.createElement("p",null,"".concat(o[e.name]?o[e.name]:0," articles")))));var a})))}a(155);var u=a(138),p=a.n(u),E=a(338),h=a(143);class g extends n.Component{constructor(){super(...arguments),this.state={goToSlide:0,offsetRadius:2,showNavigation:!0,config:h.a.gentle},this.slides=[{key:Object(E.a)(),content:l.a.createElement("img",{style:{width:"100%",height:"100%"},src:a(74),alt:"1"})},{key:Object(E.a)(),content:l.a.createElement("img",{style:{width:"100%",height:"100%"},src:a(75),alt:"3"})},{key:Object(E.a)(),content:l.a.createElement("img",{style:{width:"100%",height:"100%"},src:a(76),alt:"4"})},{key:Object(E.a)(),content:l.a.createElement("img",{style:{width:"100%",height:"100%"},src:a(77),alt:"5"})}]}componentDidMount(){this.interval=setInterval(()=>{this.setState({goToSlide:(this.state.goToSlide+1)%this.slides.length})},3e3)}componentWillUnmount(){clearInterval(this.interval)}render(){return l.a.createElement("div",{style:{width:"80%",height:"40vh",margin:"0 auto",paddingBottom:"7%",textAlign:"center",alignItems:"center",justifyContent:"center"}},l.a.createElement(p.a,{slides:this.slides,goToSlide:this.state.goToSlide,offsetRadius:this.state.offsetRadius,animationConfig:this.state.config}),l.a.createElement("div",{style:{margin:"0 auto",marginTop:"2rem",width:"50%",display:"flex",justifyContent:"space-around"}}))}}function f(){const[e,t]=Object(n.useState)(window.innerWidth);return Object(n.useEffect)(()=>{const e=()=>{t(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),l.a.createElement("div",{className:"sideBar"},l.a.createElement("div",{className:"sidebarItem"},l.a.createElement("div",{className:"author"},l.a.createElement("span",{className:"sidebarTitle"},"AUTHOR"),l.a.createElement("br",null),l.a.createElement(r.b,{to:"/author"},l.a.createElement("img",{className:"photo",src:a(156),alt:""})),l.a.createElement("br",null),l.a.createElement("span",{className:"sidebarTitle name"},"Ayush Kumar Nandi"),l.a.createElement("br",null),l.a.createElement("span",{className:"words"},"Passionate about leadership ideology."),l.a.createElement("br",null),l.a.createElement("span",{className:"words"}," Ignite people to find their passion."),l.a.createElement("br",null),l.a.createElement("span",{className:"words"},"  #BePassionate"),l.a.createElement("br",null))),e>1200?l.a.createElement("div",{className:"sidebarItem"},l.a.createElement("div",{className:"cardTitle"},"MY GALLERY"),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"gallery"},l.a.createElement("div",{className:"shrink"},l.a.createElement("img",{className:"photography",src:a(74),alt:""})),l.a.createElement("div",{className:"shrink"},l.a.createElement("img",{className:"photography",src:a(75),alt:""})),l.a.createElement("div",{className:"shrink"},l.a.createElement("img",{className:"photography",src:a(77),alt:""})),l.a.createElement("div",{className:"shrink"},l.a.createElement("img",{className:"photography",src:a(76),alt:""}))))):l.a.createElement("div",{className:"sidebarItem"},l.a.createElement("div",{className:"author",style:{marginTop:"9%",marginBottom:0,paddingBottom:0}},l.a.createElement("span",{className:"sidebarTitle"},"MY GALLERY")),l.a.createElement(g,null)))}a(157),a(158);var v=a(139),y=a.n(v);function N(){return l.a.createElement("div",{className:"bg"},l.a.createElement(r.b,{to:"/",style:{textDecoration:"none"}},l.a.createElement("div",{className:"logo"},l.a.createElement("h1",null,"THINKIN"))),l.a.createElement("div",{className:"Type-writer"},l.a.createElement(y.a,{strings:["Like a leader","Like an entrepreneur","Like a philosopher"],typeSpeed:75,backSpeed:75,loop:!0})),l.a.createElement("div",{className:"Navigation"},l.a.createElement("nav",{role:"navigation",class:"primary-navigation"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.b,{to:"/technology",className:"Link header",style:{color:"black"}},"Technology")),l.a.createElement("li",{className:"Link header",style:{color:"black"}},"Business ",l.a.createElement("span",null,"\u25bc"),l.a.createElement("ul",{class:"dropdown"},l.a.createElement("li",null,l.a.createElement(r.b,{to:"/marketing",className:"Link header",style:{color:"black"}},"Marketing")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/Human Resource",className:"Link header",style:{color:"black"}},"Human Resource")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/operations",className:"Link header",style:{color:"black"}},"Operations")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/strategy",className:"Link header",style:{color:"black"}},"Strategy")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/finance",className:"Link header",style:{color:"black"}},"Finance")))),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/economy",className:"Link header",style:{color:"black"}},"Economy")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/leadership",className:"Link header",style:{color:"black"}},"Leadership")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/philosophy",className:"Link header",style:{color:"black"}},"Philosophy"))))))}a(159);function b(e){let{posts:t,cats:n,isAuthenticated:c,postsFetched:s}=e;return s?l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement("div",{className:"cont"},l.a.createElement("div",{className:"left"},l.a.createElement(d,{posts:t,cats:n,className:"box2",isAuthenticated:c})),l.a.createElement("div",{className:"right"},l.a.createElement(f,{className:"box2"})))):l.a.createElement("div",null,l.a.createElement(N,null),l.a.createElement("div",{className:"noPosts"},l.a.createElement("img",{class:"gif",src:a(34),alt:""}),l.a.createElement("h5",{className:"textNoPage"},"Loading! Please Wait... ")))}a(160);var k=function(){return l.a.createElement("div",{className:"about"},l.a.createElement(N,null),l.a.createElement("p",{className:"aboutContent postContent"},"Welcome to Thinkin Space, which provides insightful and thought-provoking managerial blogs for those looking to enhance their leadership skills in order to help you to be competitive and enthusiatic in the ever-changing business landscape. The vision of Thinkin space is to kee readers engaged and motivated. I at Thinkin, try to share my expertise proposition on various management topics, including organizational behavior, strategic planning, team building, and more. Whether you are a seasoned manager or just starting, our articles are designed to provide practical insights and actionable advice to help you become a more effective leader.  Not everybody has lost interest in reading. While you are still Thinkin, I believe that continuous learning and development are critical for success in any field, especially in management. That's what keeps me driven to spend time in some quality research to provide readers with high-quality content that not only informs but also inspires and motivates them to continue to look further for the related aspects. Through Thinkin, I am pretty confident that you'll find this space a valuable resource. Jovial learning & keep Thinkin!"),l.a.createElement("img",{className:"writingGif",src:a(161),alt:""}))};a(162);function S(){return l.a.createElement("div",{className:"credits"},l.a.createElement("p",{style:{fontSize:"small",fontFamily:"Tinos"}}," \xa9 2023 Aishika Nandi. All Rights Reserved."),l.a.createElement("p",{className:"notVisible"},"learn react"))}a(163),a(164);var x=function(e){let{date:t,imageUrl:c,category:s,title:o,content:d,id:u,onDelete:p,isAuthenticated:E}=e;const[h,g]=Object(n.useState)(!1),f=async()=>{g(!h)};return l.a.createElement("div",{className:"post",style:{"--post":"1",display:"flex",flexDirection:"column",justifyContent:"space-between"}},l.a.createElement(l.a.Fragment,null,l.a.createElement(r.b,{to:"/".concat(o)},l.a.createElement("img",{className:"postImage",src:c,alt:""})),l.a.createElement("div",{className:"postInfo"},l.a.createElement("div",{className:"postCats"},l.a.createElement("span",{className:"postCat"},s)),l.a.createElement(r.b,{to:"/".concat(o)},l.a.createElement("div",{className:"postTitle"},l.a.createElement("span",null,o))),l.a.createElement(r.b,{to:"/".concat(o)},l.a.createElement("div",{className:"postDesc"},l.a.createElement("span",{dangerouslySetInnerHTML:{__html:d}}))))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Date",style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"Auto"}},l.a.createElement("span",{className:"postDate",style:{color:"rgb(85, 79, 79, 0.8)"}},t),E&&l.a.createElement("img",{style:{height:"20px",marginLeft:"auto",cursor:"pointer"},src:a(165),alt:"",onClick:f}),h&&l.a.createElement("div",{className:"popupNotification",style:{color:"Black"}},l.a.createElement("p",null,"Do you want to delete the post?"),l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement("img",{style:{height:"40px",padding:"2%",cursor:"pointer"},src:a(166),alt:"",onClick:async()=>{try{await i.a.delete("".concat(m,"/api/posts/").concat(u)),p(u)}catch(e){console.error("Error deleting post:",e.message),window.location.reload()}}}),l.a.createElement("img",{style:{height:"40px ",padding:"2%",cursor:"pointer"},src:a(167),alt:"",onClick:f}))))))};var w=function(e){let{posts:t,cate:n,isAuthenticated:c,postsFetched:s}=e;return s?t&&t.some(e=>e.category[0]===n)?l.a.createElement("div",{className:"businessPage",style:{minHeight:"120vh"}},l.a.createElement(N,null),l.a.createElement("h5",{className:"pageTitle"},n),l.a.createElement("div",{className:"pagePosts"},t.map((e,t)=>{if(e.category[0]===n)return l.a.createElement("div",{className:"postLink"},l.a.createElement(x,{date:e.date.slice(0,10),imageUrl:e.image,category:e.category[0][0].toUpperCase()+e.category[0].slice(1),title:e.title,content:e.description,id:e._id,isAuthenticated:c}))}))):l.a.createElement("div",{style:{minHeight:"120vh"}},l.a.createElement(N,null),l.a.createElement("div",{className:"noPosts"},l.a.createElement("h5",{className:"pageTitle"},n.toUpperCase()),l.a.createElement("br",null),l.a.createElement("img",{class:"gif",src:a(34),alt:""}),l.a.createElement("h5",{className:"textNoPage"},"I'm still THINKIN! Come back later!"))):l.a.createElement("div",null,l.a.createElement(N,null),l.a.createElement("div",{className:"noPosts"},l.a.createElement("img",{class:"gif",src:a(34),alt:""}),l.a.createElement("h5",{className:"textNoPage"},"Loading! Please Wait... ")))},T=(a(168),a(140)),C=a.n(T);a(169);var I=e=>{let{comments:t,id:c}=e;const[s,r]=Object(n.useState)(""),[o,d]=Object(n.useState)(""),[u,p]=Object(n.useState)(!1),E=u?t:t.slice(0,3);return l.a.createElement("div",null,l.a.createElement("div",{className:"cate"},l.a.createElement("h5",null,"COMMENTS?")),l.a.createElement("div",{class:"SPForum-Comments "},l.a.createElement("input",{type:"text",class:"SPForum-Comment-Input",placeholder:"Your Name",onChange:e=>{d(e.target.value)},value:o}),l.a.createElement("textarea",{class:"SPForum-Comment-Input",placeholder:"Type your comment here...",value:s,onChange:e=>{r(e.target.value)}}),l.a.createElement("button",{class:"SPForum-Comment-Button",onClick:()=>{const e={userName:o,text:s},t="".concat(m,"/api/posts/").concat(c);i.a.put(t,{comments:e}).then(e=>{window.location.reload()}).catch(e=>{console.error("Error submitting comment:",e)})}},"Submit Comment")),E.map((e,t)=>l.a.createElement("div",{className:"forum-post-card",key:t},l.a.createElement("div",{className:"forum-post-header"},l.a.createElement("div",{className:"forum-user-info"},l.a.createElement("img",{src:a(170),alt:"b",className:"forum-user-image"}),l.a.createElement("div",{className:"forum-user-details"},l.a.createElement("div",{className:"forum-user-name"},e.userName),l.a.createElement("div",{className:"forum-last-seen"},C()(e.createdAt).fromNow())))),l.a.createElement("div",{className:"forum-post-content"},l.a.createElement("div",{className:"forum-answer"},e.text)),l.a.createElement("div",{class:"forum-post-footer"},l.a.createElement("div",{className:"forum-post-actions"},l.a.createElement("div",{className:"forum-actions-icons"},l.a.createElement("div",{className:"forum-action-icon"}," ")))))),t.length>3&&!u&&l.a.createElement("div",{className:"read-more parent-read"},l.a.createElement("h4",{className:"read-more-button read-overlay",onClick:()=>p(!0)},l.a.createElement("p",{style:{zIndex:"100"}},"Read More"))))};var O=function(e){let{title:t,description:a,date:n,imageUrl:c,comments:s,id:r}=e;const o=a.replace(/\r\n/g,"<br>");return l.a.createElement("div",null,l.a.createElement(N,null),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"single"},l.a.createElement("img",{className:"postIm",src:c,alt:""}),l.a.createElement("h1",{className:"Title"},t),l.a.createElement("div",{className:"postDetails"},l.a.createElement("h5",{className:"postAuthor"},"Author : Ayush Kumar Nandi "),l.a.createElement("h5",{className:"postTime"},n," ")),l.a.createElement("p",{className:"postContent",dangerouslySetInnerHTML:{__html:o}})),l.a.createElement("div",{className:"forum-comments"},l.a.createElement(I,{comments:s,id:r}))))},A=a(3),j=(a(171),a(48)),P=a.n(j);P.a.config();var F=function(e){let{updateIsAuthenticated:t}=e;const a=Object(A.o)(),[c,s]=Object(n.useState)(""),[r,o]=Object(n.useState)(""),[i,m]=Object(n.useState)(""),[d,u]=Object(n.useState)(0),[p,E]=Object(n.useState)(null);return Object(n.useEffect)(()=>{const e=localStorage.getItem("loginAttempts");if(e&&u(Number(e)),d>=5){const e=new Date;e.setHours(e.getHours()+24),E(e)}},[d]),Object(n.useEffect)(()=>{localStorage.setItem("loginAttempts",d.toString())},[d]),l.a.createElement("div",{className:"author-page"},l.a.createElement(N,null),l.a.createElement("div",{className:"login-container"},l.a.createElement("div",{className:"login-form"},l.a.createElement("form",null,l.a.createElement("input",{type:"text",placeholder:"Username",value:c,onChange:e=>s(e.target.value)}),l.a.createElement("input",{type:"password",placeholder:"Password",value:r,onChange:e=>o(e.target.value)}),i&&l.a.createElement("p",{style:{color:"red"}},i),l.a.createElement("button",{onClick:async e=>{e.preventDefault(),(()=>{if(p){return new Date>p}return!0})()?"ayushnandi"===c&&"ilovesrk"===r?(t(!0),a("/")):(u(e=>e+1),m("Incorrect username or password")):m("Too many login attempts. Please try again after 24 hours.")}},"Login"),l.a.createElement("p",null)))))},L=a(141),R=a.n(L),D=(a(264),a(265),a(142)),M=a.n(D);var _=function(e){let{isAuthenticated:t}=e;const c=Object(A.o)(),[s,r]=Object(n.useState)(!1),[o,d]=Object(n.useState)({title:"",description:"",image:null,date:"",category:[]}),[u,p]=Object(n.useState)(!1),[E,h]=Object(n.useState)(!1),[g,f]=Object(n.useState)(!1),v=e=>{const{name:t}=e.target,a=e.target.value;d(e=>({...e,[t]:a})),console.log(a),f(!1)},y=e=>{const t=e.target.files[0];d({...o,image:t});const a=document.getElementById("fileInput");a&&a.files.length>0?r(!0):r(!1)};return l.a.createElement(l.a.Fragment,null,t&&l.a.createElement("div",{className:"createMain"},l.a.createElement(N,null),l.a.createElement("div",{className:"createDiv"},l.a.createElement("form",{onSubmit:async e=>{if(e.preventDefault(),""!==o.title&&""!==o.description&&""!==o.date&&0!==o.category.length){try{const e=new FormData;o.image&&(e.append("file",o.image),e.append("upload_preset","ml_default"),e.append("api_key","627167618335273"));const t=await i.a.post("https://api.cloudinary.com/v1_1/".concat("dvtgocjib","/auto/upload"),e,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){}}),a=new FormData;a.append("title",o.title),a.append("description",o.description),a.append("date",o.date),a.append("category",o.category),a.append("image",t.data.secure_url),await i.a.post("".concat(m,"/api/posts"),a),d({title:"",description:"",image:null,date:"",category:[]}),r(!1),p(!0),h(!0),setTimeout(()=>{p(!1),h(!1)},3e3),setTimeout(()=>{c("/"),window.location.reload()},2e3)}catch(a){console.error("Error posting article:",a)}return t?void 0:(c("/author"),null)}f(!0)},className:"writeForm"},l.a.createElement("div",{className:"writeFormGroup flexRow"},l.a.createElement("div",{className:"writeRight flexColumn"},l.a.createElement("input",{type:"text",placeholder:"Title",className:"writeInput writeText",autoFocus:!0,value:o.title,onInput:v,name:"title"}),g&&""===o.title&&l.a.createElement("p",{style:{color:"red"}},"Mandatory field!"),l.a.createElement("div",{className:"flexRow calcat"},s&&l.a.createElement("div",{className:"imageSelect flexColumn"},l.a.createElement("div",{className:"imageSelect flexRow"},l.a.createElement("label",{htmlFor:"fileInput"},"Select an Image:"),l.a.createElement("img",{src:a(136),alt:"",className:"addImg",onClick:()=>document.getElementById("fileInput").click()}),l.a.createElement("input",{type:"file",id:"fileInput",style:{display:"none"},accept:"image/*",onChange:y})),l.a.createElement("p",{style:{color:"green"}},"Image uploaded successfully!")),!s&&l.a.createElement("div",{className:"imageSelect flexRow"},l.a.createElement("label",{htmlFor:"fileInput"},"Select an Image:"),l.a.createElement("img",{src:a(136),alt:"",className:"addImg",onClick:()=>document.getElementById("fileInput").click()}),l.a.createElement("input",{type:"file",id:"fileInput",style:{display:"none"},name:"image",accept:"image/*",onChange:y})),l.a.createElement("div",{className:"mandate-date"},l.a.createElement("div",{className:"calendarDiv flexRow"},l.a.createElement("label",{htmlFor:"postDate"},"Select a date:"),l.a.createElement("input",{type:"date",name:"date",value:o.date,id:"postDate",onChange:v})),g&&""===o.date&&l.a.createElement("p",{style:{color:"red"}},"Mandatory field!")),l.a.createElement("div",{className:"mandate-date"},l.a.createElement("div",{className:"categorySelect flexRow"},l.a.createElement("label",{htmlFor:"cat"}," Category:"),l.a.createElement("select",{id:"cat",name:"category",onChange:v},l.a.createElement("option",{value:""},"Select Category"),l.a.createElement("option",{value:"Technology"},"Technology"),l.a.createElement("option",{value:"Economy"},"Economy"),l.a.createElement("option",{value:"Leadership"},"Leadership"),l.a.createElement("option",{value:"Philosophy"},"Philosophy"),l.a.createElement("option",{value:"Marketing"},"Marketing"),l.a.createElement("option",{value:"Human Resource"},"Human Resource"),l.a.createElement("option",{value:"Operations"},"Operations"),l.a.createElement("option",{value:"Strategy"},"Strategy"),l.a.createElement("option",{value:"Finance"},"Finance"))),g&&0===o.category.length&&l.a.createElement("p",{style:{color:"red"}},"Mandatory field!"))))),l.a.createElement(M.a,{theme:"snow",modules:{toolbar:[[{size:["small",!1,"large","huge"]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"}],["link","image"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"},{align:[]}],[{color:["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466","custom-color"]}]]},formats:["header","height","bold","italic","underline","strike","blockquote","list","color","bullet","indent","link","image","align","size"],placeholder:"write your content ....",onChange:e=>{d(t=>({...t,description:e})),console.log(e),f(!1)},style:{height:"400px"}}),g&&""===o.description&&l.a.createElement("p",{style:{color:"red"}},"Mandatory field!"),l.a.createElement("button",{type:"submit",className:"writeSubmit"},"Publish"),E&&l.a.createElement("div",{className:"overlay"}),u&&l.a.createElement("div",{className:"popupNotification"},l.a.createElement("p",null,"Post submitted successfully!"))))))};var H=function(){const[e,t]=Object(n.useState)(!1),a=e=>{t(e)},[c,s]=Object(n.useState)([]),[d,u]=Object(n.useState)([]),[p,E]=Object(n.useState)([]),[h,g]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{(async()=>{try{const e=await i.a.get("".concat(m,"/api/posts"));s(e.data);const t=await i.a.get("".concat(m,"/api/categories"));u(t.data),g(!0)}catch(e){console.log(e)}})()},[]),Object(n.useEffect)(()=>{const e=d.map(e=>i.a.get("".concat(m,"/api/posts?cat=").concat(e.name)));Promise.all(e).then(e=>{const t={};e.forEach((e,a)=>{t[d[a].name]=e.data.length}),E(t)}).catch(e=>{console.error("Error fetching data for categories: ".concat(e))})},[d]),l.a.createElement("div",{style:{height:"100%"}},l.a.createElement(r.a,null,l.a.createElement(o,{isAuthenticated:e}),l.a.createElement(A.c,null,l.a.createElement(A.a,{exact:!0,path:"",element:l.a.createElement(b,{posts:c,cats:d,isAuthenticated:e,postsFetched:h})}),l.a.createElement(A.a,{exact:!0,path:"about",element:l.a.createElement(k,null)}),l.a.createElement(A.a,{exact:!0,path:"marketing",element:l.a.createElement(w,{posts:c,cate:"Marketing",isAuthenticated:e,postsFetched:h})}),l.a.createElement(A.a,{exact:!0,path:"Human Resource",element:l.a.createElement(w,{posts:c,cate:"Human Resource",isAuthenticated:e,postsFetched:h})}),l.a.createElement(A.a,{exact:!0,path:"economy",element:l.a.createElement(w,{posts:c,cate:"Economy",isAuthenticated:e,postsFetched:h})}),l.a.createElement(A.a,{exact:!0,path:"leadership",element:l.a.createElement(w,{posts:c,cate:"Leadership",isAuthenticated:e,postsFetched:h})}),l.a.createElement(A.a,{exact:!0,path:"philosophy",element:l.a.createElement(w,{posts:c,cate:"Philosophy",isAuthenticated:e,postsFetched:h})}),l.a.createElement(A.a,{exact:!0,path:"technology",element:l.a.createElement(w,{posts:c,cate:"Technology",isAuthenticated:e,postsFetched:h})}),l.a.createElement(A.a,{exact:!0,path:"strategy",element:l.a.createElement(w,{posts:c,cate:"Strategy",isAuthenticated:e,postsFetched:h})}),l.a.createElement(A.a,{exact:!0,path:"operations",element:l.a.createElement(w,{posts:c,cate:"Operations",isAuthenticated:e,postsFetched:h})}),l.a.createElement(A.a,{exact:!0,path:"finance",element:l.a.createElement(w,{posts:c,cate:"Finance",isAuthenticated:e,postsFetched:h})}),c.map((e,t)=>l.a.createElement(A.a,{exact:!0,path:"/".concat(e.title),element:l.a.createElement(O,{title:e.title,description:e.description,date:e.date?e.date.slice(0,10):"",imageUrl:e.image,comments:e.comments,id:e._id}),key:t})),l.a.createElement(A.a,{exact:!0,path:"author",element:l.a.createElement(F,{updateIsAuthenticated:a})}),l.a.createElement(A.a,{exact:!0,path:"reader",element:l.a.createElement(R.a,null)}),l.a.createElement(A.a,{path:"create",element:e?l.a.createElement(_,{isAuthenticated:e}):l.a.createElement(F,{updateIsAuthenticated:a})}))),l.a.createElement(S,null))};P.a.config(),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_PASSWORD:"ilovesrk",REACT_APP_USERNAME:"ayushnandi"}).AUTHOR_PASSWORD);s.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root"))},34:function(e,t,a){e.exports=a.p+"static/media/75WF.9a0499c2.gif"},74:function(e,t,a){e.exports=a.p+"static/media/p3.712a45e6.jpeg"},75:function(e,t,a){e.exports=a.p+"static/media/p4.9a097c90.jpeg"},76:function(e,t,a){e.exports=a.p+"static/media/p2.17b1380c.jpeg"},77:function(e,t,a){e.exports=a.p+"static/media/p1.891a043c.jpeg"}},[[144,1,2]]]);
//# sourceMappingURL=main.37776a43.chunk.js.map