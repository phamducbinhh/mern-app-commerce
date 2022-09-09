"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[513],{8255:function(n,e,t){t(2791);var r=t(184);e.Z=function(){return(0,r.jsx)("div",{className:"section secton-center",children:(0,r.jsx)("div",{className:"loading"})})}},1997:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(5572),i=t(184);function a(n){return(0,i.jsx)(r.Z,{variant:n.variant||"info",children:n.children})}},7157:function(n,e,t){var r,i=t(168),a=(t(2791),t(6444)),o=t(184),c=a.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  row-gap: 20px;\n  margin-bottom: 40px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])));e.Z=function(n){var e=n.children;return(0,o.jsx)(c,{children:e})}},4321:function(n,e,t){var r,i=t(1413),a=t(5987),o=t(168),c=(t(2791),t(6444)),s=t(1134),l=t(184),d=["name","type","children","value","control"],u=c.ZP.div(r||(r=(0,o.Z)(["\n  position: relative;\n  width: 100%;\n  input {\n    width: 100%;\n    padding: ",";\n    background-color: ",";\n    border-radius: 8px;\n    font-weight: 500;\n    transition: all 0.2s linear;\n    border: 1px solid transparent;\n    outline: none;\n    text-transform: capitalize;\n  }\n  input:focus {\n    background-color: white;\n    border-color: var(--clr-primary-1);\n  }\n  input::-webkit-input-placeholder {\n    color: #84878b;\n  }\n  input::-moz-input-placeholder {\n    color: #84878b;\n  }\n  .input-icon {\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n  }\n  @media only screen and (max-width: 740px) {\n    input {\n      padding: 12px;\n    }\n    input::-webkit-input-placeholder {\n      font-size: 12px;\n    }\n    input::-moz-input-placeholder {\n      color: #84878b;\n    }\n  }\n"])),(function(n){return n.hasIcon?"10px 60px 10px 20px":"10px"}),(function(n){return n.theme.grayLight}));e.Z=function(n){var e=n.name,t=void 0===e?"":e,r=n.type,o=void 0===r?"text":r,c=n.children,p=(n.value,n.control),m=(0,a.Z)(n,d),h=(0,s.bc)({control:p,name:t,defaultValue:""}).field;return(0,l.jsxs)(u,{hasIcon:!!c,children:[(0,l.jsx)("input",(0,i.Z)((0,i.Z)({id:t,type:o},h),m)),c?(0,l.jsx)("div",{className:"input-icon",children:c}):null]})}},3014:function(n,e,t){var r,i=t(1413),a=t(5987),o=t(168),c=(t(2791),t(6444)),s=t(184),l=["htmlFor","children"],d=c.ZP.label(r||(r=(0,o.Z)(["\n  font-weight: 600;\n  cursor: pointer;\n"])));e.Z=function(n){var e=n.htmlFor,t=void 0===e?"":e,r=n.children,o=(0,a.Z)(n,l);return(0,s.jsx)(d,(0,i.Z)((0,i.Z)({htmlFor:t},o),{},{children:r}))}},3298:function(n,e,t){var r,i=t(168),a=(t(2791),t(6444)),o=t(184),c=a.ZP.h2(r||(r=(0,i.Z)(["\n  text-align: center;\n  font-weight: bold;\n  font-size: 28px;\n  margin-bottom: 55px;\n  color: var(--clr-primary-5);\n  @media only screen and (max-width: 740px) {\n    font-size: 20px;\n    margin-bottom: 30px;\n  }\n"])));e.Z=function(n){var e=n.className,t=void 0===e?"":e,r=n.children;return(0,o.jsx)(c,{className:t,children:r})}},925:function(n,e,t){t.d(e,{s:function(){return r}});var r="https://resful-api.onrender.com"},7513:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r,i=t(8214),a=t(5861),o=t(885),c=t(168),s=t(4569),l=t.n(s),d=t(2791),u=t(3360),p=t(1134),m=t(6871),h=t(9085),x=t(6444),f=t(1830),g=t.n(f),v=t(925),Z=t(1413),b=t(5987),y=t(184),E=["control","text"],j=function(n){var e=n.control,t=n.text,r=(0,b.Z)(n,E),i=(0,p.bc)({control:e,name:r.name,defaultValue:!1}).field;return(0,y.jsxs)("div",{className:"styled-input-single",children:[(0,y.jsx)("input",(0,Z.Z)({type:"checkbox",value:r.value,id:r.name,checked:i.value},i)),(0,y.jsx)("label",{htmlFor:r.name,className:"text-sm cursor-pointer",children:t})]})},w=t(7157),k=t(4321),A=t(3014),C=t(8255),S=t(1997),N=t(1687),T=t(3298),U=function(n,e){switch(e.type){case"FETCH_REQUEST":return(0,Z.Z)((0,Z.Z)({},n),{},{loading:!0});case"FETCH_SUCCESS":return(0,Z.Z)((0,Z.Z)({},n),{},{loading:!1});case"FETCH_FAIL":return(0,Z.Z)((0,Z.Z)({},n),{},{loading:!1,error:e.payload});case"UPDATE_REQUEST":return(0,Z.Z)((0,Z.Z)({},n),{},{loadingUpdate:!0});case"UPDATE_SUCCESS":case"UPDATE_FAIL":return(0,Z.Z)((0,Z.Z)({},n),{},{loadingUpdate:!1});default:return n}},F={loading:!0,error:""},_=t(8419),P=x.ZP.div(r||(r=(0,c.Z)(['\n  min-height: 100vh;\n  padding: 40px;\n  .form {\n    max-width: 600px;\n    margin: 50px auto;\n  }\n  .styled-input-single {\n    position: relative;\n    padding: 20px 0 20px 40px;\n    text-align: left;\n\n    label {\n      cursor: pointer;\n      &:before,\n      &:after {\n        content: "";\n        position: absolute;\n        top: 50%;\n        border-radius: 50%;\n      }\n      &:before {\n        left: 0;\n        width: 30px;\n        height: 30px;\n        margin: -15px 0 0;\n        background: #e7ecf3;\n        box-shadow: 0 0 1px grey;\n      }\n      &:after {\n        left: 5px;\n        width: 20px;\n        height: 20px;\n        margin: -10px 0 0;\n        opacity: 0;\n        background: #37b2b2;\n        transform: translate3d(-40px, 0, 0) scale(0.5);\n        transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;\n      }\n    }\n\n    input[type="radio"],\n    input[type="checkbox"] {\n      position: absolute;\n      top: 0;\n      left: -9999px;\n      visibility: hidden;\n\n      &:checked + label {\n        &:before {\n        }\n        &:after {\n          transform: translate3d(0, 0, 0);\n          opacity: 1;\n        }\n      }\n    }\n  }\n']))),D=function(){var n=(0,m.s0)(),e=(0,p.cI)(),t=e.control,r=e.handleSubmit,c=e.setValue,s=e.formState.isSubmitting,x=(0,N.o)().state.userInfo,f=(0,m.UO)().id,Z=(0,d.useReducer)(U,F),b=(0,o.Z)(Z,2),E=b[0],D=E.loading,z=E.error,H=b[1];(0,d.useEffect)((function(){var n=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e,t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,H({type:"FETCH_REQUEST"}),n.next=4,l().get("".concat(v.s,"/api/users/").concat(f),{headers:{Authorization:"Bearer ".concat(x.token)}});case 4:e=n.sent,t=e.data,H({type:"FETCH_SUCCESS"}),c("name",t.name),c("email",t.email),c("isAdmin",t.isAdmin),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),h.Am.error(n.t0.message,{pauseOnHover:!1,delay:0}),H({type:"FETCH_FAIL",payload:(0,_.by)(n.t0)});case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();n()}),[c,f,x]);var I=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,H({type:"UPDATE_REQUEST"}),e.next=4,l().put("/api/users/".concat(f),{_id:f,name:t.name,email:t.email,isAdmin:t.isAdmin},{headers:{Authorization:"Bearer ".concat(x.token)}});case 4:H({type:"UPDATE_SUCCESS"}),g().fire({position:"center",icon:"success",title:"Update Th\xe0nh C\xf4ng",showConfirmButton:!1,timer:1500}),n("/admin/user"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),h.Am.error(e.t0.message,{pauseOnHover:!1,delay:0}),H({type:"UPDATE_FAIL"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();return(0,y.jsxs)(P,{className:"section",children:[(0,y.jsx)(T.Z,{children:"C\u1eadp Nh\u1eadt Ng\u01b0\u1eddi D\xf9ng"}),D&&(0,y.jsx)(C.Z,{}),z&&(0,y.jsx)(S.Z,{variant:"danger",children:z}),(0,y.jsxs)("form",{className:"form",autoComplete:"off",onSubmit:r(I),children:[(0,y.jsxs)(w.Z,{children:[(0,y.jsx)(A.Z,{htmlFor:"Name",children:"T\xean Ng\u01b0\u1eddi D\xf9ng"}),(0,y.jsx)(k.Z,{name:"name",type:"text",placeholder:"Nh\u1eadp T\xean Ng\u01b0\u1eddi D\xf9ng",required:!0,control:t})]}),(0,y.jsxs)(w.Z,{children:[(0,y.jsx)(A.Z,{htmlFor:"Email",children:"Email"}),(0,y.jsx)(k.Z,{name:"email",type:"text",placeholder:"Nh\u1eadp Email Ng\u01b0\u1eddi D\xf9ng",control:t,required:!0}),(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsx)(j,{control:t,name:"isAdmin",checked:"isAdmin"}),(0,y.jsx)(A.Z,{htmlFor:"isAdmin",children:"isAdmin"})]})]}),(0,y.jsx)(u.Z,{type:"submit",kind:"ghost",isLoading:s,children:"X\xe1c Nh\u1eadn"})]})]})}}}]);
//# sourceMappingURL=513.d055a42c.chunk.js.map