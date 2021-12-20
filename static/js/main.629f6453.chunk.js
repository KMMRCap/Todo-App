(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{34:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),n=s(18),o=s.n(n),l=s(2),i=(s(33),s(34),s(22)),r=(s(35),s(9)),d=s(6),j=s(1),b=function(e){return Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{className:"form-label text-black",htmlFor:e.for,children:e.label}),Object(j.jsx)(r.b,{className:"form-control",id:e.id,name:e.name,placeholder:e.placeholder,type:e.type}),Object(j.jsx)("span",{className:"text-danger",children:Object(j.jsx)(r.a,{name:e.name})})]})},m=function(e){return Object(j.jsxs)("div",{className:"row justify-content-center",children:[Object(j.jsx)("div",{className:"col-xl-6 col-md-8 col-10 login-container",children:Object(j.jsx)(r.d,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<6&&(t.password="Must be at least 6 characters"):t.password="Required",t},onSubmit:function(e,t){var s=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),s(!1)}),400)},children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(b,{label:"Email Address",for:"email",id:"email",name:"email",placeholder:"Ali@gmail.com",type:"email"}),Object(j.jsx)(b,{label:"Password",for:"password",id:"password",name:"password",placeholder:"******",type:"password"}),Object(j.jsxs)("div",{className:"d-flex justify-content-center flex-column align-items-center",children:[Object(j.jsx)("button",{type:"submit",className:"btn btn-primary text-center w-75",children:"Log In"}),Object(j.jsx)("p",{className:"text-black text-center py-2 m-0",children:"Are you new ?"}),Object(j.jsx)(d.b,{to:"/signup",children:Object(j.jsx)("h6",{className:"text-center sign-button",children:"Sign Up"})})]})]})})}),Object(j.jsx)(d.b,{to:"/",children:Object(j.jsx)("button",{className:" btn btn-secondary backtohome",children:"Landing Page"})}),Object(j.jsx)(d.b,{to:"/todo",children:Object(j.jsx)("button",{className:" btn btn-secondary todoapp",children:"Todo App"})})]})},u=function(){return Object(j.jsxs)("div",{className:"row justify-content-center",children:[Object(j.jsx)("div",{className:"col-xl-6 col-md-8 col-10 login-container",children:Object(j.jsx)(r.d,{initialValues:{firstName:"",lastName:"",email:"",password:"",passwordRepeat:""},validate:function(e){var t={};return e.firstName?e.firstName.match(/\d+/g)&&(t.firstName="It should be a text"):t.firstName="Required",e.lastName?e.firstName.match(/\d+/g)&&(t.lastName="It should be a text"):t.lastName="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<6&&(t.password="Must be at least 6 characters"):t.password="Required",e.passwordRepeat?e.passwordRepeat!==e.password&&(t.passwordRepeat="Passwords are not the same"):t.passwordRepeat="Required",t},onSubmit:function(e,t){var s=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),s(!1)}),400)},children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(b,{label:"First Name",for:"firstName",id:"firstName",name:"firstName",placeholder:"Ali",type:"text"}),Object(j.jsx)(b,{label:"Last Name",for:"lastName",id:"lastName",name:"lastName",placeholder:"Khalilian",type:"text"}),Object(j.jsx)(b,{label:"Email",for:"email",id:"email",name:"email",placeholder:"Ali@gmail.com",type:"email"}),Object(j.jsx)(b,{label:"Password",for:"password",id:"password",name:"password",placeholder:"******",type:"password"}),Object(j.jsx)(b,{label:"Repeat Password",for:"passwordRepeat",id:"passwordRepeat",name:"passwordRepeat",placeholder:"******",type:"password"}),Object(j.jsxs)("div",{className:"d-flex justify-content-center flex-column align-items-center",children:[Object(j.jsx)("button",{type:"submit",className:"btn btn-primary text-center w-75",children:"Sign Up"}),Object(j.jsx)("p",{className:"text-black text-center py-2 m-0",children:"Already signed up ?"}),Object(j.jsx)(d.b,{to:"/login",children:Object(j.jsx)("h6",{className:"text-center sign-button",children:"Log In"})})]})]})})}),Object(j.jsx)(d.b,{to:"/",children:Object(j.jsx)("button",{className:" btn btn-secondary backtohome",children:"Landing Page"})}),Object(j.jsx)(d.b,{to:"/todo",children:Object(j.jsx)("button",{className:" btn btn-secondary todoapp",children:"Todo App"})})]})},x=s(5),O=s(21),p=s(45),h=function(e){var t=e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate(),s=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();return"".concat(t," - ").concat(s)},f=function(e){var t=Object(c.useState)(""),s=Object(x.a)(t,2),a=s[0],n=s[1],o=Object(c.useState)(""),l=Object(x.a)(o,2),r=l[0],d=l[1];return Object(j.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),a&&r){var s={title:a,text:r,id:Object(p.a)(),isChecked:!1,createdTime:h(new Date),date:Date.now()};e.setTodos([].concat(Object(O.a)(e.todos),[s])),n(""),d("")}else i.b.error("Inputs are Empty",{position:"top-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},className:"todo-form d-flex flex-column justify-content-center",children:[Object(j.jsx)("h1",{children:"Todo Form"}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{className:"form-label",children:"TITLE"}),Object(j.jsx)("input",{value:a,onChange:function(e){return n(e.target.value)},type:"text",className:"form-control"})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{className:"form-label",children:"info"}),Object(j.jsx)("input",{value:r,onChange:function(e){return d(e.target.value)},type:"text",className:"form-control"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})},g=s(12),N=s(14),y=s(16),v=function(e){var t=Object(c.useState)(!1),s=Object(x.a)(t,2),a=s[0],n=s[1],o=Object(c.useState)(e.title),l=Object(x.a)(o,2),i=l[0],r=l[1],d=Object(c.useRef)();return Object(j.jsx)("div",{className:"card my-3",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h5",{className:"card-title d-flex align-items-center  justify-content-between px-2 px-sm-4",style:{background:e.isChecked?"green":"red"},children:[Object(j.jsx)("input",{type:"text",ref:d,value:i,onChange:function(e){return r(e.target.value)},style:{pointerEvents:a?"unset":"none"}}),Object(j.jsx)("button",{className:"btn",onClick:function(){return function(t){var s=e.todos.filter((function(e){return e.id!==t}));e.setTodos(s)}(e.id)},children:Object(j.jsx)(N.a,{icon:y.d})}),a?Object(j.jsx)("button",{className:"btn",onClick:function(){return function(t){n(!a);var s=e.todos.filter((function(e){return e.id===t})),c=Object(g.a)(Object(g.a)({},s[0]),{},{title:i,id:Object(p.a)(),isChecked:!1}),o=e.todos.filter((function(e){return e.id!==t})),l=[].concat(Object(O.a)(o),[c]);e.setTodos(l.sort((function(e,t){return e.time-t.time})))}(e.id)},children:Object(j.jsx)(N.a,{icon:y.c})}):Object(j.jsx)("button",{className:"btn",onClick:function(){return e.id,n(!a),void d.current.focus()},children:Object(j.jsx)(N.a,{icon:y.b})}),Object(j.jsx)("button",{className:"btn",onClick:function(){return function(t){var s=e.todos.map((function(e){return e.id===t?Object(g.a)(Object(g.a)({},e),{},{isChecked:!0}):Object(g.a)({},e)}));e.setTodos(s)}(e.id)},children:Object(j.jsx)(N.a,{icon:y.a})})]}),Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between align-content-center",children:[Object(j.jsx)("span",{className:"card-text px-2 px-sm-4 py-3",children:e.text}),Object(j.jsx)("span",{className:"card-text px-2 px-sm-4 py-3",children:e.createdTime})]})]})})},w=function(e){var t=Object(c.useState)([]),s=Object(x.a)(t,2),a=s[0],n=s[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("todos"),t=JSON.parse(e);e&&n(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]),Object(j.jsxs)("div",{className:"row justify-content-lg-between align-items-lg-start align-items-center flex-lg-row flex-column",children:[Object(j.jsxs)("div",{className:"col-xxl-5 col-lg-6 col-md-8 col-sm-10 col-12 pt-lg-0 pt-5 mt-lg-0 mt-5 pb-lg-0 pb-3",children:[Object(j.jsx)(d.b,{to:"/login",children:Object(j.jsx)("button",{className:"btn btn-secondary logout",children:"Log Out"})}),Object(j.jsx)(d.b,{to:"/",children:Object(j.jsx)("button",{className:" btn btn-secondary backtohome",children:"Landing Page"})}),Object(j.jsx)(f,{todos:a,setTodos:n})]}),Object(j.jsx)("div",{className:"col-xxl-5 col-lg-6 col-md-8 col-sm-10 col-12",children:a&&0!==(null===a||void 0===a?void 0:a.length)?a.map((function(e){return Object(j.jsx)(v,{id:e.id,title:e.title,text:e.text,active:e.active,isChecked:e.isChecked,createdTime:e.createdTime,date:e.date,todos:a,setTodos:n},e.id)})):Object(j.jsx)("h1",{children:"Add New Todos"})})]})},T=function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row text-center justify-content-center mt-5",children:[Object(j.jsx)("h1",{className:"my-3",children:"Todo App"}),Object(j.jsx)("h2",{className:"my-3",children:"To use this app, you need to have an account."}),Object(j.jsx)("h3",{className:"my-3",children:"Create your account here:"}),Object(j.jsx)(d.b,{to:"/signup",className:"w-auto",children:Object(j.jsx)("button",{className:"btn btn-primary my-3",children:"SignUp"})}),Object(j.jsxs)("h3",{className:"my-3",children:["Already have an account?",Object(j.jsx)("br",{}),"Log in to your account here:"]}),Object(j.jsx)(d.b,{to:"/login",className:"w-auto",children:Object(j.jsx)("button",{className:"btn btn-primary my-3",children:"LogIn"})})]})})},S=function(){return Object(j.jsxs)("div",{className:"container-lg container-fluid",children:[Object(j.jsx)(i.a,{position:"top-left",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(T,{})}),Object(j.jsx)(l.a,{path:"/todo",element:Object(j.jsx)(w,{})}),Object(j.jsx)(l.a,{path:"/signup",element:Object(j.jsx)(u,{})}),Object(j.jsx)(l.a,{path:"/login",element:Object(j.jsx)(m,{})})]})]})},k=Object(c.createContext)({todos:[],setTodos:function(){},title:"",setTitle:function(){},text:"",setText:function(){},timer:[],setTimer:function(){}}),C=function(e){var t=e.children,s=Object(c.useState)([]),a=Object(x.a)(s,2),n=a[0],o=a[1],l=Object(c.useState)(""),i=Object(x.a)(l,2),r=i[0],d=i[1],b=Object(c.useState)(""),m=Object(x.a)(b,2),u=m[0],O=m[1],p=Object(c.useState)([]),h=Object(x.a)(p,2),f=h[0],g=h[1];return Object(j.jsx)(k.Provider,{value:{todos:n,setTodos:o,title:r,setTitle:d,text:u,setText:O,timer:f,setTimer:g},children:t})};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d.a,{basename:"/Todo-App",children:Object(j.jsx)(C,{children:Object(j.jsx)(S,{})})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.629f6453.chunk.js.map