(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(34),s=c.n(r),i=c(6),l=c.n(i),j=c(13),o=c(7),b=c(18),u=c(9),d=c(8),O=c(23),h=c(24);c(45),c(55),c(54);h.a.initializeApp({apiKey:"AIzaSyDqdFTcX25DoBzmO0c3DqffqhXhqUU3CnY",authDomain:"nwitter-a6440.firebaseapp.com",projectId:"nwitter-a6440",storageBucket:"nwitter-a6440.appspot.com",messagingSenderId:"971228339638",appId:"1:971228339638:web:2381d857f5e6e20f1ef517"});var m=h.a,x=h.a.auth(),p=h.a.firestore(),f=h.a.storage(),g=c(1),v=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],b=s[1],u=Object(n.useState)(!1),d=Object(o.a)(u,2),O=d[0],h=d[1],m=Object(n.useState)(""),p=Object(o.a)(m,2),f=p[0],v=p[1],y=function(e){var t=e.target,c=t.name,n=t.value;"email"===c?a(n):"password"===c&&b(n)},N=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=8;break}return e.next=5,x.createUserWithEmailAndPassword(c,i);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,x.signInWithEmailAndPassword(c,i);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:N,method:"post",className:"container",children:[Object(g.jsx)("input",{name:"email",type:"text",placeholder:"\uc774\uba54\uc77c",required:!0,value:c,onChange:y,className:"authInput"}),Object(g.jsx)("input",{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",required:!0,value:i,className:"authInput",onChange:y}),Object(g.jsx)("input",{type:"submit",className:"authInput authSubmit",value:O?"\uacc4\uc815 \uc0dd\uc131":"\ub85c\uadf8\uc778"}),f&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("span",{className:"authError",children:[f,Object(g.jsx)("br",{})]}),Object(g.jsx)("center",{children:Object(g.jsx)("a",{href:"https://forms.gle/ncsU6vNx1c7qNyFu7",color:"mint",children:"\ube44\ubc00\ubc88\ud638\ub97c \uc78a\uc5c8\ub2e4\uba74 \uc5ec\uae30\ub85c"})})]})]}),Object(g.jsx)("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch",children:O?"\ub85c\uadf8\uc778":"\uacc4\uc815 \uc0dd\uc131"})]})},y=c(11),N=function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.signInAnonymously().then(Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("\uac8c\uc2a4\ud2b8\ub85c \ub85c\uadf8\uc778 \ud588\uc2b5\ub2c8\ub2e4. \ud504\ub85c\ud544\uc5d0\uc11c \uc774\ub984\uc744 \uc124\uc815\ud574 \uc8fc\uc138\uc694.");case 1:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(c=t.target.name)?n=new m.auth.GoogleAuthProvider:"github"===c&&(n=new m.auth.GithubAuthProvider),e.next=4,x.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"authContainer",children:[Object(g.jsx)(d.a,{icon:O.c,color:"red",size:"3x",style:{marginBottom:30}}),Object(g.jsx)("span",{className:"center title",children:"\ub0b4\ub098\ub77c \uc778\ubbfc \uc18c\ud1b5\ub9dd"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(v,{}),Object(g.jsx)("span",{class:"center buk",children:"\u203b\uc190\uc804\ud654\uae30 \uc571\uc5d0\uc11c\ub294 \uc18c\uc15c\ub85c\uadf8\uc778\uc774 \uc791\ub3d9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"authBtns",children:[Object(g.jsxs)("button",{onClick:t,name:"google",className:"authBtn",children:["Google\ub85c \uacc4\uc18d ",Object(g.jsx)(d.a,{icon:O.b})]}),Object(g.jsxs)("button",{onClick:t,name:"github",className:"authBtn",children:["Github\ub85c \uacc4\uc18d ",Object(g.jsx)(d.a,{icon:O.a})]}),Object(g.jsx)("button",{onClick:e,name:"github",className:"authBtn",children:"\uac8c\uc2a4\ud2b8\ub85c \ub85c\uadf8\uc778"}),Object(g.jsxs)("button",{onClick:function(){window.location.href="https://runningboy02.github.io/bot/\ub0b4\ub098\ub77c\uc778\ubbfc\uc18c\ud1b5\ub9dd-\uc190\uc804\ud654\uae30\uc5d0%20\ub0b4\ub824\ubc1b\uae30.zip"},className:"authBtn",children:[Object(g.jsx)(d.a,{icon:y.a}),"Android \uc124\uce58\ud30c\uc77c \ub0b4\ub824\ubc1b\uae30"]})]})]})},w=c(26),k=function(e){var t,c,a,r=e.userObj,s=e.nweetObj,i=e.isOwner,b=Object(u.f)(),O=Object(n.useState)(!1),h=Object(o.a)(O,2),m=h[0],x=h[1],v=Object(n.useState)(!1),N=Object(o.a)(v,2),w=N[0],k=N[1],F=Object(n.useState)(s.text),S=Object(o.a)(F,2),C=S[0],I=S[1],_=Object(n.useState)(!1),U=Object(o.a)(_,2),A=U[0],T=U[1],D=Object(n.useState)(!0),B=Object(o.a)(D,2),E=B[0],z=B[1],P=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,p.doc("nweets/".concat(s.id)).delete();case 4:if(""===s.attachmentUrl){e.next=7;break}return e.next=7,f.refFromURL(s.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){return z((function(e){return!e}))},M=function(){return x((function(e){return!e}))},R=function(){"runningboy02@naver.com"===r.email&&T(!0),k((function(e){return!e}))},q=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p.doc("nweets/".concat(s.id)).update({text:C});case 3:x(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t=null!==s.creatorName,c=null!==s.creatorEmail;var G=s.color;void 0===G?a="#ffffff":!0===E?a=G:!1===E&&(a="#ffffff");var H={backgroundColor:a};return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"nweet",style:H,children:w?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{className:"buk",children:"\uac8c\uc2dc\ubb3c \uc815\ubcf4"}),Object(g.jsx)("br",{}),Object(g.jsxs)("h5",{className:"createdTime",children:[s.createdTime,"\uc5d0 \uac8c\uc2dc\ub428"]}),Object(g.jsx)("br",{}),Object(g.jsxs)("h5",{className:"createdTime",children:[s.isMobile?Object(g.jsx)(g.Fragment,{children:"\ubaa8\ubc14\uc77c"}):Object(g.jsx)(g.Fragment,{children:"Pc"}),"\uc5d0\uc11c \uc791\uc131\ub428"]}),Object(g.jsx)("br",{}),Object(g.jsx)("h5",{className:"createdTime",children:c?Object(g.jsxs)(g.Fragment,{children:["\uc791\uc131\uc790 \uc774\uba54\uc77c :"," ",A?Object(g.jsx)(g.Fragment,{children:s.adminemail}):Object(g.jsx)(g.Fragment,{children:s.creatorEmail})]}):Object(g.jsx)(g.Fragment,{children:"\uac8c\uc2a4\ud2b8\ub85c \ub85c\uadf8\uc778\ud55c \uc0ac\uc6a9\uc790"})}),Object(g.jsx)("br",{}),Object(g.jsxs)("h5",{className:"createdTime",children:["\uac8c\uc2dc\ubb3c \ubc15\uc2a4 \uc0c9 : ",a]}),Object(g.jsx)("br",{}),Object(g.jsx)("h5",{className:"createdTime",children:s.attachmentUrl&&Object(g.jsx)("a",{href:s.attachmentUrl,children:"\uc774\ubbf8\uc9c0 \uc8fc\uc18c\ub85c \ubc14\ub85c \uc774\ub3d9"})}),A?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("br",{}),Object(g.jsx)("h5",{className:"createdTime",children:s.creatorId})]}):Object(g.jsx)(g.Fragment,{}),Object(g.jsx)("br",{}),Object(g.jsx)("h5",{className:"createdTime",children:E?Object(g.jsxs)(g.Fragment,{children:["\uc0c9 \ub044\uae30",Object(g.jsx)(d.a,{icon:y.k,color:"black",onClick:L})]}):Object(g.jsxs)(g.Fragment,{children:["\uc0c9 \ucf1c\uae30",Object(g.jsx)(d.a,{icon:y.j,color:"black",onClick:L})]})}),Object(g.jsx)("br",{}),Object(g.jsxs)("h5",{className:"createdTime report",title:"\uc2e0\uace0",onClick:function(){b.push("/report")},children:["\uc2e0\uace0 ",Object(g.jsx)(d.a,{icon:y.d,color:"red"})]}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{onClick:R,className:"formBtn cancelBtn",children:"\ucde8\uc18c"})]}):Object(g.jsx)(g.Fragment,{children:m?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:q,className:"container nweetEdit",children:[Object(g.jsx)("input",{type:"text",placeholder:"\uac8c\uc2dc\ubb3c \ubb38\uad6c\ub97c \uc218\uc815\ud558\uc138\uc694.",value:C,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;I(t)},className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"\uac8c\uc2dc\ubb3c \uc218\uc815",className:"formBtn"})]}),Object(g.jsx)("span",{onClick:M,className:"formBtn cancelBtn",children:"\ucde8\uc18c"})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h5",{className:"creatorName",children:[t?Object(g.jsxs)(g.Fragment,{children:[s.creatorName,"\uc5d0\uac8c\uc11c \uc791\uc131\ub428"]}):Object(g.jsx)("span",{Style:"color:red",children:"\uc791\uc131\uc790 \uc774\ub984 \uc5c6\uc74c"}),E?Object(g.jsx)(g.Fragment,{}):Object(g.jsx)("span",{Style:"color:red",onClick:L,children:"(\uc0c9 \uaebc\uc9d0)"})]}),Object(g.jsx)("br",{}),Object(g.jsx)("h1",{children:s.text}),Object(g.jsx)("div",{className:"a",children:s.attachmentUrl&&Object(g.jsx)("img",{src:s.attachmentUrl})}),Object(g.jsxs)("div",{className:"nweet__actions",children:[i&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{onClick:P,children:Object(g.jsx)(d.a,{icon:y.l})}),Object(g.jsx)("span",{onClick:M,children:Object(g.jsx)(d.a,{icon:y.e})})]}),A?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{onClick:P,children:Object(g.jsx)(d.a,{icon:y.l,color:"red"})}),Object(g.jsx)("span",{onClick:M,children:Object(g.jsx)(d.a,{icon:y.e,color:"red"})})]}):Object(g.jsx)(g.Fragment,{}),Object(g.jsx)("span",{onClick:R,children:Object(g.jsx)(d.a,{icon:y.g})})]})]})})})})},F=c(57),S=function(e){var t=e.userObj,c=Object(n.useState)(""),a=Object(o.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(""),b=Object(o.a)(i,2),u=b[0],O=b[1],h=Object(n.useState)("#FFFFFF"),m=Object(o.a)(h,2),x=m[0],v=m[1],N=function(){var e=Object(j.a)(l.a.mark((function e(c){var n,a,i,j,o,b,d,h,m,g,v,y,N,w,k,S,C,I;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!1,null==(a=navigator.userAgent).match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i)&&null==a.match(/LG|SAMSUNG|Samsung/)||(n=!0),c.preventDefault(),i="",""===r){e.next=30;break}if(""===u){e.next=14;break}return j=f.ref().child("".concat(t.uid,"/").concat(Object(F.a)())),e.next=10,j.putString(u,"data_url");case 10:return o=e.sent,e.next=13,o.ref.getDownloadURL();case 13:i=e.sent;case 14:return null!==t.email&&(d=t.email.split("@")[0],h="*".repeat(t.email.split("@")[1].split(".")[0].length),m=t.email.split("@")[1].split(".")[1],b=d+"@"+h+"."+m),g=new Date,v=g.getFullYear(),y=g.getMonth(),N=g.getDate(),w=g.getHours(),k=g.getMinutes(),S=g.getSeconds(),C="".concat(v,"\ub144 ").concat(y+1,"\uc6d4 ").concat(N,"\uc77c ")+"".concat(w<10?"0".concat(w):w,":").concat(k<10?"0".concat(k):k,":").concat(S<10?"0".concat(S):S),I={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:i,creatorEmail:b,creatorName:t.displayName,createdTime:C,isMobile:n,color:x,adminemail:t.email},e.next=26,p.collection("nweets").add(I);case 26:s(""),O(""),e.next=31;break;case 30:alert("\ube48 \ubb38\uc7a5\uc740 \uc785\ub825\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4");case 31:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("form",{onSubmit:N,className:"factoryForm",children:[Object(g.jsxs)("div",{className:"factoryInput__container",children:[Object(g.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"\uc5b4\ub5a4\uc0dd\uac01\uc744 \ud558\uace0\uc788\ub098\uc694?",maxLength:120}),Object(g.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(g.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(g.jsx)("span",{children:"\uc0ac\uc9c4 \ucd94\uac00"}),Object(g.jsx)(d.a,{icon:y.f})]}),Object(g.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],c=new FileReader;c.onloadend=function(e){var t=e.currentTarget.result;O(t)},c.readAsDataURL(t)},style:{opacity:0}}),u&&Object(g.jsxs)("div",{className:"factoryForm__attachment",children:[Object(g.jsx)("img",{src:u,style:{backgroundImage:u}}),Object(g.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return O("")},children:[Object(g.jsx)("span",{children:"Remove"}),Object(g.jsx)(d.a,{icon:y.i})]})]}),t.email&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("label",{for:"nweedColor",className:"colorrr buk",children:"\ub85c\uadf8\uc778\uc744 \ud558\uc5ec \uac8c\uc2dc\ubb3c \ubc15\uc2a4\uc5d0 \uc0c9\uc744 \uc124\uc815 \ud560 \uc218 \uc788\uc74c"}),Object(g.jsx)("input",{type:"color",value:"#ffffff",className:"colorr",id:"nweetColor",onChange:function(e){var t=e.target.value;v(t)}})]})]})},C=function(e){var t=e.userObj,c=Object(n.useState)([]),a=Object(o.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){p.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(S,{userObj:t}),Object(g.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(g.jsx)(k,{userObj:t,nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},I=function(e){var t=e.refreshUser,c=e.userObj,a=Object(u.f)(),r=Object(n.useState)(c.displayName),s=Object(o.a)(r,2),i=s[0],b=s[1],d=function(){var e=Object(j.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c.displayname===i){e.next=5;break}return e.next=4,c.updateProfile({displayName:i});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;b(t)},type:"text",autoFocus:!0,placeholder:"\ud45c\uc2dc\ub420 \uc774\ub984",value:i,className:"formInput"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"submit",value:"\ud504\ub85c\ud544 \uac31\uc2e0",className:"formBtn buk",style:{marginTop:10}}),Object(g.jsx)("br",{}),Object(g.jsxs)("span",{className:"center",children:["Your Email : ",Object(g.jsx)("span",{onClick:function(){alert("\uc624\ub958 \ubc1c\uc0dd\uc2dc \uba54\ub274->\uac74\uc758\uc0ac\ud56d \ub9c1\ud06c\uc5d0 \ub4e4\uc5b4\uac00\uc11c \uc624\ub958\ub098 \uac74\uc758 \ub0b4\uc6a9\uc744 \ubcf4\ub0b4\uc8fc\uc138\uc694\n(\ubc84\uc804\uc774 \ub9de\uc9c0 \uc54a\uc73c\uba74 \uc624\ub958\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc74c)")},children:c.email})]})]}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"center buk",children:"\uc624\ub958\ub098 \uac74\uc758\uc0ac\ud56d\uc774 \uc788\ub2e4\uba74 \uc804\uc790\uc6b0\ud3b8\uc744 \ud074\ub9ad\ud574 \uc8fc\uc138\uc694"}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"center",children:c.v}),Object(g.jsx)("span",{className:"formBtn cancelBtn logOut buk",onClick:function(){x.signOut(),a.push("/"),t()},children:"\ub85c\uadf8 \uc544\uc6c3"}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"center buk help",children:"\ub3c4\uc640\uc8fc\uc2e0 \ubd84\ub4e4"}),Object(g.jsx)("br",{}),Object(g.jsxs)("p",{className:"buk",children:[Object(g.jsx)("p",{children:"\uc81c\uc791\uc790 : \ub7f0\ub2dd\ubcf4\uc774"}),Object(g.jsx)("p",{children:"\uc774\ub984 \ucc3d\uc870\uc790 : \uc11c\ube0c\ub9c8\ub9b0"})]})]})},_=(c(50),function(e){var t=e.userObj;return Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(g.jsx)("li",{children:Object(g.jsxs)(b.b,{to:"/",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(d.a,{title:"Home",icon:O.c,color:"red",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:"\uac8c\uc2dc\ud310"})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)(b.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(d.a,{title:"profile",icon:y.m,color:"#04AAFF",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 \ud504\ub85c\ud544"):"\ud504\ub85c\ud544"})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)(b.b,{to:"/chat",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(d.a,{title:"Chat",icon:y.b,color:"#fff",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:"\ub9d0\ub3d9\ubb34 \uc774\uc57c\uae30\ubc29\u03b2"})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)(b.b,{to:"/notice",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(d.a,{title:"Notice",icon:y.h,color:"#fff",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:"\uacf5\uc9c0\uc0ac\ud56d"})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)(b.b,{to:"/menu",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(d.a,{title:"menu",icon:y.c,color:"#fff",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:"\uba54\ub274"})]})})]})})}),U=function(e){var t=e.userObj;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("span",{className:"center buk",Style:"font-size: 30px",children:["v 1.3.3\ubd80\ud130 \ud328\uce58 \ubcf4\uace0\uc11c\uac00 \uc644\uc804\ud788 \ube14\ub85c\uadf8\ub85c \uc774\ub3d9\ud558\uace0 \uacf5\uc9c0\uc0ac\ud56d\uc774 \ube14\ub85c\uadf8\ub85c \uc774\ub3d9\ud588\uc2b5\ub2c8\ub2e4.",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),"\uc9c0\uae08 \ubc84\uc804 : ",t.v,Object(g.jsx)("br",{}),Object(g.jsx)("button",{className:"ver buk",onClick:function(){window.location.href="https://runningboy02.tistory.com/5"},children:"\uc9c0\uae08 \ubc84\uc804 \ucd5c\uc2e0 \ud655\uc778"})]})})},A=function(){return Object(g.jsxs)(g.Fragment,{children:[window.location.reload(),window.location.href="/nwitter"]})},T=function(){var e=Object(u.f)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{className:"center buk menubtn",onClick:function(){window.location.href="https://runningboy02.tistory.com/"},children:"\ube14\ub85c\uadf8 \ubc14\ub85c\uac00\uae30"}),Object(g.jsx)("button",{className:"center buk menubtn",onClick:function(){e.push("/re")},children:"\ud68c\uc6d0 \ud0c8\ud1f4 \ubc0f \ube44\ubc00\ubc88\ud638 \ubcc0\uacbd \ubc14\ub85c\uac00\uae30"}),Object(g.jsx)("button",{className:"center buk menubtn",onClick:function(){e.push("/report")},children:"\uac74\uc758\uc0ac\ud56d \ubc0f \uc2e0\uace0"})]})},D=function(e){var t=e.userObj,c=Object(u.f)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{onClick:function(){x.sendPasswordResetEmail(t.email).then((function(){alert(t.email+"\ub85c \ube44\ubc00\ubc88\ud638 \ubcc0\uacbd \uba54\uc77c\uc744 \ubc1c\uc1a1 \ud588\uc2b5\ub2c8\ub2e4.")}))},children:"\ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815"}),Object(g.jsx)("button",{onClick:function(){var e=x.currentUser;prompt("\uacc4\uc815\uc744 \uc0ad\uc81c\ud558\ub824\uba74 "+t.displayName+"\ub97c \uc785\ub825\ud558\uc138\uc694.")===t.displayName?e.delete().then((function(){alert("\uacc4\uc815\uc774 \uc601\uad6c\uc801\uc73c\ub85c \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),c.push("/")})):alert("\uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uacc4\uc815\uc774 \uadf8\ub300\ub85c \uc720\uc9c0\ub429\ub2c8\ub2e4")},className:"delacc",children:"\uacc4\uc815 \uc601\uad6c \uc0ad\uc81c"})]})};var B=function(e){return e.userObj,Object(g.jsx)("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLScRDhQvNi3WubR5UHVQAlAeOrjGa_n912AUAVdre5PXHUY0Ug/viewform?embedded=true",width:"640",height:"726",frameborder:"0",marginheight:"0",marginwidth:"0",children:"\ub85c\ub4dc \uc911\u2026"})};var E=function(e){var t=e.chatObj,c=e.isOwner;return Object(g.jsx)(g.Fragment,{children:c?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:"chat_area_own",children:Object(g.jsxs)("h5",{children:["\xa0",t.text]})})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("br",{}),Object(g.jsx)("h1",{children:t.creatorName}),Object(g.jsx)("div",{className:"chat_area_y",children:Object(g.jsxs)("h5",{children:["\xa0",t.text]})})]})})};var z=function(e){var t=e.userObj,c=Object(n.useState)(""),a=Object(o.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(!0),b=Object(o.a)(i,2),u=b[0],d=b[1],O=function(){var e=Object(j.a)(l.a.mark((function e(c){var n,a,i,j,o,b,u,d,O,h,m,x,f,g;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),""===r){e.next=18;break}return n=null,null!==t.email&&(a=t.email.split("@")[0],i="*".repeat(t.email.split("@")[1].split(".")[0].length),j=t.email.split("@")[1].split(".")[1],n=a+"@"+i+"."+j),o=new Date,b=o.getFullYear(),u=o.getMonth(),d=o.getDate(),O=o.getHours(),h=o.getMinutes(),m=o.getSeconds(),x="".concat(b,"\ub144 ").concat(u+1,"\uc6d4 ").concat(d,"\uc77c ")+"".concat(O<10?"0".concat(O):O,":").concat(h<10?"0".concat(h):h,":").concat(m<10?"0".concat(m):m),f={text:r,createdAt:Date.now(),creatorId:t.uid,creatorEmail:n,creatorName:t.displayName,createdTime:x,adminEmail:t.email},s(""),e.next=16,p.collection("chats").add(f);case 16:(g=document.getElementById("chat_area")).scrollTop=g.scrollHeight-g.clientHeight;case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=Object(g.jsx)("h5",{children:"\ub85c\uadf8\uc778 \ud558\uc138\uc694."});return Object(g.jsx)(g.Fragment,{children:u?Object(g.jsx)("form",{onSubmit:O,children:Object(g.jsxs)("div",{className:"chat__container",children:[Object(g.jsx)("input",{className:"chat__input",type:"text",placeholder:"\uc5d4\ud130\ud0a4\ub85c \uc804\uc1a1",onChange:function(e){null!==t.email&&null!==t.displayName||d(!1),!1===u&&null!==t.email&&null===t.displayName&&(h=Object(g.jsxs)("div",{className:"center",children:[Object(g.jsx)("br",{}),Object(g.jsx)("h5",{children:"\uc774\ub984\uc744 \uc124\uc815\ud558\uc138\uc694."}),Object(g.jsx)("a",{href:"/#/profile",style:{color:"#c0c0c0"},children:"\uc774\ub984 \uc124\uc815 \ubc14\ub85c\uac00\uae30"})]}));var c=e.target.value;s(c)},value:r}),Object(g.jsx)("input",{type:"submit",value:"\u2192",className:"chat__arrow"})]})}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{className:"center",children:"\ucc44\ud305 \uad8c\ud55c \uc5c6\uc74c"}),h]})})},P=function(e){var t=e.userObj,c=(e.chatObj,Object(n.useState)([])),a=Object(o.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){p.collection("chats").orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{className:"buk center",style:{fontSize:"50px"},children:"\ub9d0\ub3d9\ubb34 \uc774\uc57c\uae30\ubc29"}),Object(g.jsx)("div",{style:{marginTop:30},children:Object(g.jsx)("div",{className:"chat_area",id:"chat_area",children:r.map((function(e){return Object(g.jsx)(E,{userObj:t,isOwner:e.creatorId===t.uid,chatObj:e},e.id)}))})}),Object(g.jsx)("br",{}),Object(g.jsx)(z,{userObj:t})]})},L=function(e){var t=e.refreshUser,c=e.isLoggedIn,n=e.userObj;return Object(g.jsxs)(b.a,{children:[c&&Object(g.jsx)(_,{userObj:n}),Object(g.jsx)(u.c,{children:c?Object(g.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(g.jsx)(u.a,{exact:!0,path:"/",children:Object(g.jsx)(C,{userObj:n})}),Object(g.jsx)(u.a,{exact:!0,path:"/profile",children:Object(g.jsx)(I,{userObj:n,refreshUser:t})}),Object(g.jsx)(u.a,{exact:!0,path:"/notice",children:Object(g.jsx)(U,{userObj:n})}),Object(g.jsx)(u.a,{exact:!0,path:"/rrd",children:Object(g.jsx)(A,{userObj:n,refreshUser:t})}),Object(g.jsx)(u.a,{exact:!0,path:"/menu",children:Object(g.jsx)(T,{userObj:n})}),Object(g.jsx)(u.a,{exact:!0,path:"/re",children:Object(g.jsx)(D,{userObj:n})}),Object(g.jsx)(u.a,{exact:!0,path:"/report",children:Object(g.jsx)(B,{userObj:n})}),Object(g.jsx)(u.a,{exact:!0,path:"/chat",children:Object(g.jsx)(P,{userObj:n})})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(u.a,{exact:!0,path:"/",children:Object(g.jsx)(N,{userObj:n})})})})]})};var M=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(o.a)(r,2),i=s[0],b=s[1];Object(n.useEffect)((function(){x.onAuthStateChanged(function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(t?{displayName:t.displayName,uid:t.uid,email:t.email,updateProfile:function(e){return t.updateProfile(e)},v:"v 1.4.4"}:null),a(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var u=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=x.currentUser,b({displayName:t.displayName,uid:t.uid.refreshUser,email:t.email,v:"v 1.4.4",updateProfile:function(e){return t.updateProfile(e)}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)(g.Fragment,{children:c?Object(g.jsx)(L,{refreshUser:u,isLoggedIn:Boolean(i),userObj:i}):Object(g.jsx)("span",{className:"center",children:"\ucd08\uae30\ud654\uc911..."})})};c(52);s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.75a96b0f.chunk.js.map