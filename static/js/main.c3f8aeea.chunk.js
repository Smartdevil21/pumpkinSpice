(this.webpackJsonpe_commerce_clone=this.webpackJsonpe_commerce_clone||[]).push([[0],{101:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(16),s=c.n(n),a=(c(89),c(25)),r=(c(90),c(65)),l=r.a.initializeApp({apiKey:"AIzaSyAEvRoJtnnb5_JXiFzHq3aQodtvyUa_Ves",authDomain:"e-commerce-1f578.firebaseapp.com",projectId:"e-commerce-1f578",storageBucket:"e-commerce-1f578.appspot.com",messagingSenderId:"209387118071",appId:"1:209387118071:web:6a0a143fb7de59e135e2f2",measurementId:"G-09TTSLWFHN"});r.a.analytics();var d=l,o=(c(96),c(145)),j=c(146),u=c(4);var b=function(e){var t=e.email,c=e.setEmail,i=e.emailErrMsg,n=e.password,s=e.setPassword,a=e.passwordErrMsg,r=e.handleSignIn,l=e.handleSignUp,d=e.hasAccount,b=e.setHasAccount,h=e.clearErrMsgs,O=e.clearInputs,m=e.userName,x=e.setUserName;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"signIn",children:[d?Object(u.jsxs)("h1",{children:["Welcome Back!  ",m," "]}):Object(u.jsxs)("h1",{children:["Hello, ",m]}),Object(u.jsxs)("div",{id:"inputs",children:[Object(u.jsx)(o.a,{variant:"standard",label:"Username",required:!0,value:m,style:{background:"transparent",padding:"10px",color:"grey",width:"400px"},onChange:function(e){x(e.target.value)}}),Object(u.jsx)(o.a,{variant:"standard",label:"Enter your email",autoFill:"false",autoComplete:"false",required:!0,type:"email",value:t,style:{background:"transparent",padding:"10px",color:"grey",width:"400px"},onChange:function(e){c(e.target.value)}}),Object(u.jsx)("p",{id:"errors",children:i}),Object(u.jsx)(o.a,{variant:"standard",label:"Password",required:!0,type:"password",value:n,style:{background:"transparent",padding:"10px",color:"grey",width:"400px"},onChange:function(e){s(e.target.value)}}),Object(u.jsx)("p",{id:"errors",children:a})]}),d?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j.a,{id:"button",onClick:r,children:"Sign In"}),Object(u.jsxs)("p",{id:"bottomLine",children:["Don't have an Account?  ",Object(u.jsx)("span",{style:{marginLeft:"5px",color:"red",fontWeight:"bold",textDecoration:"underline",cursor:"pointer"},onClick:function(){b(!d),h(),O()},children:"Sign Up"})]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j.a,{id:"button",onClick:l,children:"Sign Up"}),Object(u.jsxs)("p",{id:"bottomLine",children:["Already have an Account?  ",Object(u.jsx)("span",{style:{marginLeft:"5px",color:"red",fontWeight:"bold",textDecoration:"underline",cursor:"pointer"},onClick:function(){b(!d),h(),O()},children:"Sign In"})]})]})]})})},h=c(42),O=c(73),m=c.n(O);c(101);var x=function(e){var t=Object(i.useContext)(_),c=Object(i.useContext)(H);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"navbar",children:[Object(u.jsx)(j.a,{style:{textTransform:"none"},children:Object(u.jsx)("p",{children:"Categories"})}),Object(u.jsx)("h2",{id:"heading",children:"Pumpkin Spice"}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{id:"userinfo",children:[Object(u.jsx)("li",{id:"name",children:Object(u.jsxs)(j.a,{style:{textTransform:"none"},children:[t.name,Object(u.jsx)(m.a,{})]})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.a,{style:{textTransform:"none"},children:Object(u.jsxs)(h.b,{exact:!0,style:{textDecoration:"none",color:"#304b0e"},to:"cart",children:["Cart(",c.item,")"]})})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.a,{onClick:t.handleLogOut,children:"Log Out"})})]})})]})})},p=(c(104),["IfXtq-nZOs4","IQnoVca9WsM","PWWg1G-Nt7M","PJfU1WQMibg","MbNpJgKMNlc"]),f=[{num:1,id:"LWIQp-0_b98",title:"Ritual Facewash",price:149},{num:2,id:"LxVxPA1LOVM",title:"Nike Shoes",price:499},{num:3,id:"6LBBOwkPzyQ",title:"Body Oil from COCOOIL",price:3349},{num:4,id:"vGo1odpniYM",title:"Panasonic Lumix",price:1149},{num:5,id:"fFJqJ_GWxxk",title:"Apple Watch",price:649},{num:6,id:"xuioQR0qrHY",title:"Sony Wh-1000XM4",price:549},{num:7,id:"Rc9M89QoS0s",title:"Tulsi Tea from Darjeeling",price:99},{num:8,id:"YLNMXzXk8zs",title:"IApple iPhone 11 pro",price:849},{num:9,id:"OTsZfxaFZQU",title:"CBD Oils from www.naturkreis.de",price:279},{num:10,id:"V-0zwxxlOYE",title:"Kodak 35mm Professional Film",price:129},{num:11,id:"tIQ2t64FKy8",title:"Dove Moisturising Creame",price:35},{num:12,id:"1hhp2m7Pt9s",title:"Armaani Shoes",price:249}];var g=function(){return Object(u.jsx)("div",{id:"slider",children:Object(u.jsx)("div",{id:"slider-img",children:p.map((function(e){return Object(u.jsx)("img",{src:"https://source.unsplash.com/"+e,alt:"",id:"slider-img-current"})}))})})},v=(c(105),c.p+"static/media/popUp-vertcal.ba390acd.png"),y=c.p+"static/media/propUp-horizontal.430104a5.png",k=c.p+"static/media/headphones.577cd246.png",w=c.p+"static/media/stationary.b96f98df.png";var I=function(){return Object(u.jsxs)("div",{id:"popups",children:[Object(u.jsx)("h1",{style:{marginLeft:"2%"},children:"Explore!"}),Object(u.jsx)("div",{id:"posters",children:Object(u.jsxs)("div",{id:"box-1",children:[Object(u.jsx)("img",{id:"vertical",src:v,alt:"vertical img"}),Object(u.jsxs)("div",{id:"box-2",children:[Object(u.jsx)("img",{src:y,id:"horizontal",alt:""}),Object(u.jsxs)("div",{id:"box-3",children:[Object(u.jsx)("img",{src:k,id:"headphones",alt:""}),Object(u.jsx)("img",{src:w,id:"stationary",alt:""})]})]})]})})]})},C=(c(106),c(107),c(74)),N=c.n(C),S=[];var A=function(e){var t=Object(i.useContext)(H);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{className:"card-img",src:"https://source.unsplash.com/"+e.id,alt:""}),Object(u.jsxs)("div",{className:"card-info",children:[Object(u.jsxs)("div",{className:"card-desc",children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsxs)("p",{children:["$ ",e.price]})]}),Object(u.jsx)(j.a,{onClick:function(){S.push({src:e.id,title:e.title,price:e.price});var c=t.item;t.setItems(c+1);for(var i=document.querySelectorAll(".favorite-icon"),n=0;n<i.length;n++)n===e.cardNo&&(i[n].style.fill="grey")&&(i[n].style.fill="orange")},children:Object(u.jsx)(N.a,{className:"favorite-icon"})})]})]})})};var E=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"product-section",children:[Object(u.jsx)("h3",{children:"Best Deals of the Day!!!"}),Object(u.jsx)("div",{id:"products",children:f.map((function(e,t){return Object(u.jsx)(A,{id:e.id,title:e.title,price:Number(e.price),cardNo:t},t)}))})]})})},L=c(75),F=c.n(L),M=c(76),P=c.n(M),W=c(77),U=c.n(W);c(108);var T=function(){return Object(u.jsxs)("footer",{children:[Object(u.jsxs)("ul",{id:"links",children:[Object(u.jsx)("li",{children:"About"}),Object(u.jsx)("li",{children:"Contact"}),Object(u.jsx)("li",{children:"Blog"}),Object(u.jsx)("li",{children:"FAQ's"})]}),Object(u.jsx)("div",{id:"line"}),Object(u.jsxs)("div",{id:"social-links",children:[Object(u.jsx)(F.a,{}),Object(u.jsx)(P.a,{}),Object(u.jsx)(U.a,{})]})]})};var B=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{}),Object(u.jsx)(I,{}),Object(u.jsx)(E,{}),Object(u.jsx)(T,{})]})},D=c(18),Q=c(79),z=(c(109),c(78)),q=c.n(z);var J=function(){var e=Object(i.useContext)(_),t=Object(i.useContext)(H),c=t.item,n=Object(Q.a)(S),s=Object(i.useState)(n),r=Object(a.a)(s,2),l=r[0],d=r[1],o=0;return l.map((function(e){o+=e.price})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x,{cartItems:l.length}),Object(u.jsxs)("div",{className:"cartItems",children:[Object(u.jsxs)("div",{id:"info",children:[Object(u.jsxs)("h1",{children:["Name :  ",e.name," "]}),Object(u.jsxs)("p",{children:["Total amount : $",o]})]}),l.map((function(e,i){return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("img",{src:"https://source.unsplash.com/"+e.src,alt:"",className:"cartItemImage"}),Object(u.jsx)("h3",{className:"itemTitle",children:e.title}),Object(u.jsxs)("div",{className:"deleteBtn",children:[Object(u.jsxs)("p",{children:["$",e.price]}),Object(u.jsx)(j.a,{onClick:function(e){d((function(e){return e.filter((function(e,t){return t!==i}))})),S.splice(i,1),t.setItems(c-1)},children:Object(u.jsx)(q.a,{})})]})]})}))]}),Object(u.jsx)("div",{id:"checkout",children:Object(u.jsx)(j.a,{children:"Checkout"})})]})},_=Object(i.createContext)(),H=Object(i.createContext)();var V=function(e){var t=e.userName,c=e.email,n=e.handleLogOut;Object(i.useEffect)((function(){alert("This site is still in development!")}),[]);var s={name:t,email:c,handleLogOut:n},r=Object(i.useState)(0),l=Object(a.a)(r,2),d=l[0],o=l[1];return Object(u.jsx)(h.a,{children:Object(u.jsx)(H.Provider,{value:{item:d,setItems:o},children:Object(u.jsxs)(_.Provider,{value:s,children:[Object(u.jsx)(x,{}),Object(u.jsxs)(D.a,{exact:!0,path:"/",children:[" ",Object(u.jsx)(B,{})]}),Object(u.jsx)(D.a,{exact:!0,path:"/cart",children:Object(u.jsx)(J,{})})]})})})};var X=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(null),r=Object(a.a)(s,2),l=r[0],o=r[1],j=Object(i.useState)(""),h=Object(a.a)(j,2),O=h[0],m=h[1],x=Object(i.useState)(""),p=Object(a.a)(x,2),f=p[0],g=p[1],v=Object(i.useState)(""),y=Object(a.a)(v,2),k=y[0],w=y[1],I=Object(i.useState)(""),C=Object(a.a)(I,2),N=C[0],S=C[1],A=Object(i.useState)(!1),E=Object(a.a)(A,2),L=E[0],F=E[1];function M(){m(""),g("")}function P(){w(""),S("")}return Object(i.useEffect)((function(){M(),P(),d.auth().onAuthStateChanged((function(e){n(e||"")}))}),[]),Object(u.jsx)("div",{className:"App",children:c?Object(u.jsx)(V,{userName:l,email:O,handleLogOut:function(){d.auth().signOut()}}):Object(u.jsx)(b,{email:O,setEmail:m,emailErrMsg:k,password:f,setPassword:g,passwordErrMsg:N,handleSignIn:function(){M(),P(),d.auth().signInWithEmailAndPassword(O,f).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-no-found":w(e.message);break;case"auth/wrong-password":S(e.message);break;default:S("Incorrect Email or password")}}))},handleSignUp:function(){M(),P(),d.auth().createUserWithEmailAndPassword(O,f).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":w(e.message);break;case"auth/weak-password":S(e.message)}}))},hasAccount:L,setHasAccount:F,clearErrMsgs:P,clearInputs:M,userName:l,setUserName:o})})};s.a.render(Object(u.jsx)(h.a,{children:Object(u.jsx)(X,{})}),document.getElementById("root"))},89:function(e,t,c){},90:function(e,t,c){},96:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.c3f8aeea.chunk.js.map