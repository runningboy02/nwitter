(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(33),s=c.n(r),i=c(9),l=c(20),j=c(6),o=c(10),u=c.n(o),b=c(18),d=c(12),x=c(23),O=c(24);c(45),c(53),c(52);O.a.initializeApp({apiKey:"AIzaSyDqdFTcX25DoBzmO0c3DqffqhXhqUU3CnY",authDomain:"nwitter-a6440.firebaseapp.com",projectId:"nwitter-a6440",storageBucket:"nwitter-a6440.appspot.com",messagingSenderId:"971228339638",appId:"1:971228339638:web:2381d857f5e6e20f1ef517"});var h=O.a,m=O.a.auth(),p=O.a.firestore(),f=O.a.storage(),g=c(1),v=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),l=s[0],j=s[1],o=Object(n.useState)(!1),d=Object(i.a)(o,2),x=d[0],O=d[1],h=Object(n.useState)(""),p=Object(i.a)(h,2),f=p[0],v=p[1],N=function(e){var t=e.target,c=t.name,n=t.value;"email"===c?a(n):"password"===c&&j(n)},y=function(){var e=Object(b.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!x){e.next=8;break}return e.next=5,m.createUserWithEmailAndPassword(c,l);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,m.signInWithEmailAndPassword(c,l);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:y,className:"container",children:[Object(g.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:c,onChange:N,className:"authInput"}),Object(g.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:l,className:"authInput",onChange:N}),Object(g.jsx)("input",{type:"submit",className:"authInput authSubmit",value:x?"Create Account":"Sign in"}),f&&Object(g.jsx)("span",{className:"authError",children:f})]}),Object(g.jsx)("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch",children:x?"Sign in":"Create Account"})]})},N=c(16),y=function(){var e=function(){var e=Object(b.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(c=t.target.name)?n=new h.auth.GoogleAuthProvider:"github"===c&&(n=new h.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return navigator.userAgent.toLowerCase().includes("https")?"":"true",Object(g.jsxs)("div",{className:"authContainer",children:[Object(g.jsx)(d.a,{icon:x.c,color:"red",size:"3x",style:{marginBottom:30}}),Object(g.jsx)("span",{className:"center title",children:"\ub0b4\ub098\ub77c \uc778\ubbfc \uc18c\ud1b5\ub9dd"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(v,{}),Object(g.jsx)("span",{class:"center buk",children:"\u203b\uc190\uc804\ud654\uae30 \uc571\uc5d0\uc11c\ub294 \uc18c\uc15c\ub85c\uadf8\uc778\uc774 \uc791\ub3d9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"authBtns",children:[Object(g.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Google\ub85c \uacc4\uc18d ",Object(g.jsx)(d.a,{icon:x.b})]}),Object(g.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Github\ub85c \uacc4\uc18d ",Object(g.jsx)(d.a,{icon:x.a})]}),Object(g.jsxs)("button",{onClick:function(){window.location.href="https://runningboy02.github.io/bot/\ub0b4\ub098\ub77c\uc778\ubbfc\uc18c\ud1b5\ub9dd-\uc190\uc804\ud654\uae30\uc5d0%20\ub0b4\ub824\ubc1b\uae30.zip"},className:"authBtn",children:[Object(g.jsx)(d.a,{icon:N.a}),"Android \uc124\uce58\ud30c\uc77c \ub0b4\ub824\ubc1b\uae30"]})]})]})},w=c(35),k=function(e){var t=e.nweetObj,c=e.isOwner,a=Object(n.useState)(!1),r=Object(i.a)(a,2),s=r[0],l=r[1],j=Object(n.useState)(t.text),o=Object(i.a)(j,2),x=o[0],O=o[1],h=function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,p.doc("nweets/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,f.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return l((function(e){return!e}))},v=function(){var e=Object(b.a)(u.a.mark((function e(c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,p.doc("nweets/".concat(t.id)).update({text:x});case 3:l(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"nweet",children:s?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(g.jsx)("input",{type:"text",placeholder:"\uac8c\uc2dc\ubb3c \ubb38\uad6c\ub97c \uc218\uc815\ud558\uc138\uc694.",value:x,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;O(t)},className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"\uac8c\uc2dc\ubb3c \uc218\uc815",className:"formBtn"})]}),Object(g.jsx)("span",{onClick:m,className:"formBtn cancelBtn",children:"\ucde8\uc18c"})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h5",{className:"creatorName",children:[t.creatorName,"\uc5d0\uac8c\uc11c \uc791\uc131\ub428(",t.creatorEmail,")"]}),Object(g.jsx)("br",{}),Object(g.jsx)("h1",{children:t.text}),t.attachmentUrl&&Object(g.jsx)("img",{src:t.attachmentUrl}),c&&Object(g.jsxs)("div",{className:"nweet__actions",children:[Object(g.jsx)("span",{onClick:h,children:Object(g.jsx)(d.a,{icon:N.g})}),Object(g.jsx)("span",{onClick:m,children:Object(g.jsx)(d.a,{icon:N.b})})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("h5",{className:"createdTime",children:[t.createdTime,"\uc5d0 \uac8c\uc2dc\ub428"]})]})})},S=c(55),I=function(e){var t=e.userObj,c=Object(n.useState)(""),a=Object(i.a)(c,2),r=a[0],s=a[1],l=Object(n.useState)(""),j=Object(i.a)(l,2),o=j[0],x=j[1],O=function(){var e=Object(b.a)(u.a.mark((function e(c){var n,a,i,l,j,b,d,O,h,m,g,v;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n="",""===r){e.next=26;break}if(""===o){e.next=11;break}return a=f.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=7,a.putString(o,"data_url");case 7:return i=e.sent,e.next=10,i.ref.getDownloadURL();case 10:n=e.sent;case 11:return l=new Date,j=l.getFullYear(),b=l.getMonth(),d=l.getDate(),O=l.getHours(),h=l.getMinutes(),m=l.getSeconds(),g="".concat(j,"\ub144 ").concat(b+1,"\uc6d4 ").concat(d,"\uc77c ")+"".concat(O<10?"0".concat(O):O,":").concat(h<10?"0".concat(h):h,":").concat(m<10?"0".concat(m):m),v={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n,creatorEmail:t.email,creatorName:t.displayName,createdTime:g},e.next=22,p.collection("nweets").add(v);case 22:s(""),x(""),e.next=27;break;case 26:alert("\ube48 \ubb38\uc7a5\uc740 \uc785\ub825\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4");case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("form",{onSubmit:O,className:"factoryForm",children:[Object(g.jsxs)("div",{className:"factoryInput__container",children:[Object(g.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"\uc5b4\ub5a4\uc0dd\uac01\uc744 \ud558\uace0\uc788\ub098\uc694?",maxLength:120}),Object(g.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(g.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(g.jsx)("span",{children:"\uc0ac\uc9c4 \ucd94\uac00"}),Object(g.jsx)(d.a,{icon:N.c})]}),Object(g.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],c=new FileReader;c.onloadend=function(e){var t=e.currentTarget.result;x(t)},c.readAsDataURL(t)},style:{opacity:0}}),o&&Object(g.jsxs)("div",{className:"factoryForm__attachment",children:[Object(g.jsx)("img",{src:o,style:{backgroundImage:o}}),Object(g.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return x("")},children:[Object(g.jsx)("span",{children:"Remove"}),Object(g.jsx)(d.a,{icon:N.e})]})]})]})},C=function(e){var t=e.userObj,c=Object(n.useState)([]),a=Object(i.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){p.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(I,{userObj:t}),Object(g.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(g.jsx)(k,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},F=function(e){var t=e.refreshUser,c=e.userObj,a=Object(j.f)(),r=Object(n.useState)(c.displayName),s=Object(i.a)(r,2),l=s[0],o=s[1],d=function(){var e=Object(b.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c.displayname===l){e.next=5;break}return e.next=4,c.updateProfile({displayName:l});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",autoFocus:!0,placeholder:"\ud45c\uc0ac\ub420 \uc774\ub984",value:l,className:"formInput"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"submit",value:"\ud504\ub85c\ud544 \uac31\uc2e0",className:"formBtn buk",style:{marginTop:10}}),Object(g.jsx)("br",{}),Object(g.jsxs)("span",{className:"center",children:["Your Email : ",Object(g.jsx)("span",{onClick:function(){alert("\uc624\ub958 \ubc1c\uc0dd\uc2dc 'runningboy02@naver.com'\uc73c\ub85c '"+c.email+"'\uacfc \uc624\ub958\ub098 \uac74\uc758 \ub0b4\uc6a9\uc744 \ud568\uaed8 \ubcf4\ub0b4\uc8fc\uc138\uc694\n(\ubc84\uc804\uc774 \ub9de\uc9c0 \uc54a\uc73c\uba74 \uc624\ub958\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc74c)")},children:c.email})]})]}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"center buk",children:"\uc624\ub958\ub098 \uac74\uc758\uc0ac\ud56d\uc774 \uc788\ub2e4\uba74 \uc804\uc790\uc6b0\ud3b8\uc744 \ud074\ub9ad\ud574 \uc8fc\uc138\uc694"}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"center",children:c.v}),Object(g.jsx)("span",{className:"formBtn cancelBtn logOut buk",onClick:function(){m.signOut(),a.push("/"),t()},children:"\ub85c\uadf8 \uc544\uc6c3"}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"center buk help",children:"\ub3c4\uc640\uc8fc\uc2e0 \ubd84\ub4e4"}),Object(g.jsx)("br",{}),Object(g.jsxs)("p",{className:"buk",children:[Object(g.jsx)("p",{children:"\uc81c\uc791\uc790 : \ub7f0\ub2dd\ubcf4\uc774"}),Object(g.jsx)("p",{children:"\uc774\ub984 \ucc3d\uc870\uc790 : \uc11c\ube0c\ub9c8\ub9b0"}),Object(g.jsx)("p",{children:"\uac15\uc758 : \ub178\ub9c8\ub4dc\ucf54\ub354"})]})]})},D=function(e){var t=e.userObj;return Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(g.jsx)("li",{children:Object(g.jsxs)(l.b,{to:"/",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(d.a,{title:"Home",icon:x.c,color:"red",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:"\uc704\ub300\ud55c \uc778\ubbfc\ub4e4\uc758 \uc18c\ud1b5\ub9dd"})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)(l.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(d.a,{title:"profile",icon:N.h,color:"#04AAFF",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 \ud504\ub85c\ud544"):"\ud504\ub85c\ud544"})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)(l.b,{to:"/note",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(d.a,{title:"release note",icon:N.f,color:"#fff",size:"2x"}),Object(g.jsxs)("span",{style:{marginTop:10},children:[t.v," \uac31\uc2e0 \ubcf4\uace0\uc11c"]})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)(l.b,{to:"/notice",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(d.a,{title:"release note",icon:N.d,color:"#fff",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:"\uacf5\uc9c0\uc0ac\ud56d"})]})})]})})},U=function(e){e.userObj;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("ul",{className:"center buk noteul",children:["v 1.0",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("li",{className:"center",children:"\uc6f9\ubc84\uc804 \uc18c\ud1b5\ub9dd \ubc30\ud3ec."}),Object(g.jsx)("li",{className:"center",children:"\uc548\ub4dc\ub85c\uc774\ub4dc \uc571\ubc84\uc804 \uc18c\ud1b5\ub9dd \ubc30\ud3ec."})]}),Object(g.jsxs)("ul",{className:"center buk noteul",children:["v 1.1",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("li",{className:"center",children:"\uac8c\uc2dc\ubb3c\uc5d0 \uac8c\uc2dc\uc2dc\uac04 \ucd94\uac00."}),Object(g.jsx)("li",{className:"center",children:"\uac31\uc2e0 \ubcf4\uace0\uc11c \ucd94\uac00."}),Object(g.jsx)("li",{className:"center",children:"\uae30\ud0c0 \ubb38\uc81c\uc810 \uc218\uc815."})]}),Object(g.jsxs)("ul",{className:"center buk noteul",children:["v 1.1.1",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("li",{className:"center",children:"\uc804\uccb4 \ubbf8\uc81c\uc5b8\uc5b4\ub97c \uad6d\uc5b4\ub85c \ubcc0\uacbd."}),Object(g.jsx)("li",{className:"center",children:"\uae30\ud0c0 \ubb38\uc81c\uc810 \uc218\uc815."})]}),Object(g.jsxs)("ul",{className:"center buk noteul",children:["v 1.2 (\ucd5c\uc2e0\ubc84\uc804)",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("li",{className:"center",children:"\uacf5\uc9c0\uc0ac\ud56d \ucd94\uac00."}),Object(g.jsx)("li",{className:"center",children:"\uac31\uc2e0 \ubcf4\uace0\uc11c \uc544\uc774\ucf58 \ubcc0\uacbd."}),Object(g.jsx)("li",{className:"center",children:"\uae30\ud0c0 \ubb38\uc81c\uc810 \uc218\uc815."})]})]})},A=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("ul",{className:"center buk not",children:Object(g.jsx)("li",{children:"\uc774\uacf3\uc740 \ucc44\ud305\ubc29\uc774 \uc544\ub2c8\ub77c \uc18c\ud1b5\ub9dd\uc785\ub2c8\ub2e4 \u314e\u3147, \u3147\u3147 \uacfc \uac19\uc740 \uc9e7\uc740 \uac8c\uc2dc\ubb3c, \ub3c4\ubc30\uc131 \uac8c\uc2dc\ubb3c\uc740 \uac8c\uc2dc\ub97c \uae08\uc9c0\ud569\ub2c8\ub2e4."})})})},B=function(e){var t=e.refreshUser,c=e.isLoggedIn,n=e.userObj;return Object(g.jsxs)(l.a,{children:[c&&Object(g.jsx)(D,{userObj:n}),Object(g.jsx)(j.c,{children:c?Object(g.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(g.jsx)(j.a,{exact:!0,path:"/",children:Object(g.jsx)(C,{userObj:n})}),Object(g.jsx)(j.a,{exact:!0,path:"/profile",children:Object(g.jsx)(F,{userObj:n,refreshUser:t})}),Object(g.jsx)(j.a,{exact:!0,path:"/note",children:Object(g.jsx)(U,{})}),Object(g.jsx)(j.a,{exact:!0,path:"/notice",children:Object(g.jsx)(A,{userObj:n})})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(j.a,{exact:!0,path:"/",children:Object(g.jsx)(y,{})})})})]})};var _=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),l=s[0],j=s[1];return Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){j(e?{displayName:e.displayName,uid:e.uid,email:e.email,updateProfile:function(t){return e.updateProfile(t)},v:"v 1.1.1"}:null),a(!0)}))}),[]),Object(g.jsx)(g.Fragment,{children:c?Object(g.jsx)(B,{refreshUser:function(){var e=m.currentUser;j({displayName:e.displayName,uid:e.uid.refreshUser,email:e.email,v:"v 1.2",updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(l),userObj:l}):Object(g.jsx)("span",{children:"\ucd08\uae30\ud654\uc911..."})})};c(50);s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(_,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.63e56432.chunk.js.map