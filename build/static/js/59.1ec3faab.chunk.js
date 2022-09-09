"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[59],{6471:function(e,a,s){var i,n=s(168),r=(s(2791),s(9743)),t=s(2677),l=s(6444),o=s(3504),c=s(184),d=l.ZP.section(i||(i=(0,n.Z)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  .checkout-steps {\n    max-width: 700px;\n    margin: auto;\n  }\n  .checkout-steps > div {\n    border-bottom: 0.3rem solid #a0a0a0;\n    color: #a0a0a0;\n  }\n  .checkout-steps > div.active {\n    border-bottom: 0.3rem solid #f08000;\n    color: #f08000;\n  }\n"])));a.Z=function(e){var a=e.step1,s=e.step2,i=e.step3,n=e.step4;return(0,c.jsx)(d,{children:(0,c.jsxs)(r.Z,{className:"checkout-steps",children:[(0,c.jsx)(t.Z,{className:a?"active":"",children:(0,c.jsx)(o.Link,{to:"/signin",children:"\u0110\u0103ng Nh\u1eadp"})}),(0,c.jsx)(t.Z,{className:s?"active":"",children:(0,c.jsx)(o.Link,{to:"/shipping",children:"\u0110\u1ecba Ch\u1ec9"})}),(0,c.jsx)(t.Z,{className:i?"active":"",children:(0,c.jsx)(o.Link,{to:"/payment",children:"Thanh To\xe1n"})}),(0,c.jsx)(t.Z,{className:n?"active":"",children:(0,c.jsx)(o.Link,{to:"/placeorder",children:"\u0110\u1eb7t H\xe0ng"})})]})})}},2997:function(e,a,s){var i,n=s(168),r=(s(2791),s(6444)),t=s(3504),l=s(184),o=r.ZP.section(i||(i=(0,n.Z)(["\n  background: var(--clr-primary-10);\n  width: 100%;\n  min-height: 20vh;\n  display: flex;\n  align-items: center;\n  color: var(--clr-primary-1);\n  a {\n    color: var(--clr-primary-3);\n    padding: 0.5rem;\n    transition: var(--transition);\n  }\n  a:hover {\n    color: var(--clr-primary-1);\n  }\n"])));a.Z=function(e){var a=e.title,s=e.product;return(0,l.jsx)(o,{children:(0,l.jsx)("div",{className:"section-center",children:(0,l.jsxs)("h3",{children:[(0,l.jsx)(t.Link,{to:"/",children:"Trang Ch\u1ee7 "}),s&&(0,l.jsx)(t.Link,{to:"/product",children:"/ S\u1ea3n Ph\u1ea9m"}),"/ ",a]})})})}},2059:function(e,a,s){s.r(a),s.d(a,{default:function(){return me}});var i=s(885),n=s(168),r=s(2791),t=s(6444),l=s(2997),o=s(1413),c=s(5987),d=s(1694),f=s.n(d),m=s(2007),v=s.n(m),p=s(184),u=["as","className","type","tooltip"],h={type:v().string,tooltip:v().bool,as:v().elementType},x=r.forwardRef((function(e,a){var s=e.as,i=void 0===s?"div":s,n=e.className,r=e.type,t=void 0===r?"valid":r,l=e.tooltip,d=void 0!==l&&l,m=(0,c.Z)(e,u);return(0,p.jsx)(i,(0,o.Z)((0,o.Z)({},m),{},{ref:a,className:f()(n,"".concat(t,"-").concat(d?"tooltip":"feedback"))}))}));x.displayName="Feedback",x.propTypes=h;var b=x,y=r.createContext({}),Z=s(162),N=["id","bsPrefix","className","type","isValid","isInvalid","as"],j=r.forwardRef((function(e,a){var s=e.id,i=e.bsPrefix,n=e.className,t=e.type,l=void 0===t?"checkbox":t,d=e.isValid,m=void 0!==d&&d,v=e.isInvalid,u=void 0!==v&&v,h=e.as,x=void 0===h?"input":h,b=(0,c.Z)(e,N),j=(0,r.useContext)(y).controlId;return i=(0,Z.vE)(i,"form-check-input"),(0,p.jsx)(x,(0,o.Z)((0,o.Z)({},b),{},{ref:a,type:l,id:s||j,className:f()(n,i,m&&"is-valid",u&&"is-invalid")}))}));j.displayName="FormCheckInput";var P=j,g=["bsPrefix","className","htmlFor"],k=r.forwardRef((function(e,a){var s=e.bsPrefix,i=e.className,n=e.htmlFor,t=(0,c.Z)(e,g),l=(0,r.useContext)(y).controlId;return s=(0,Z.vE)(s,"form-check-label"),(0,p.jsx)("label",(0,o.Z)((0,o.Z)({},t),{},{ref:a,htmlFor:n||l,className:f()(i,s)}))}));k.displayName="FormCheckLabel";var w=k;var I=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],C=r.forwardRef((function(e,a){var s=e.id,i=e.bsPrefix,n=e.bsSwitchPrefix,t=e.inline,l=void 0!==t&&t,d=e.reverse,m=void 0!==d&&d,v=e.disabled,u=void 0!==v&&v,h=e.isValid,x=void 0!==h&&h,N=e.isInvalid,j=void 0!==N&&N,g=e.feedbackTooltip,k=void 0!==g&&g,C=e.feedback,F=e.feedbackType,T=e.className,E=e.style,R=e.title,S=void 0===R?"":R,L=e.type,z=void 0===L?"checkbox":L,V=e.label,O=e.children,H=e.as,M=void 0===H?"input":H,A=(0,c.Z)(e,I);i=(0,Z.vE)(i,"form-check"),n=(0,Z.vE)(n,"form-switch");var G=(0,r.useContext)(y).controlId,_=(0,r.useMemo)((function(){return{controlId:s||G}}),[G,s]),D=!O&&null!=V&&!1!==V||function(e,a){return r.Children.toArray(e).some((function(e){return r.isValidElement(e)&&e.type===a}))}(O,w),Y=(0,p.jsx)(P,(0,o.Z)((0,o.Z)({},A),{},{type:"switch"===z?"checkbox":z,ref:a,isValid:x,isInvalid:j,disabled:u,as:M}));return(0,p.jsx)(y.Provider,{value:_,children:(0,p.jsx)("div",{style:E,className:f()(T,D&&i,l&&"".concat(i,"-inline"),m&&"".concat(i,"-reverse"),"switch"===z&&n),children:O||(0,p.jsxs)(p.Fragment,{children:[Y,D&&(0,p.jsx)(w,{title:S,children:V}),C&&(0,p.jsx)(b,{type:F,tooltip:k,children:C})]})})})}));C.displayName="FormCheck";var F=Object.assign(C,{Input:P,Label:w}),T=s(4942),E=(s(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),R=r.forwardRef((function(e,a){var s,i,n=e.bsPrefix,t=e.type,l=e.size,d=e.htmlSize,m=e.id,v=e.className,u=e.isValid,h=void 0!==u&&u,x=e.isInvalid,b=void 0!==x&&x,N=e.plaintext,j=e.readOnly,P=e.as,g=void 0===P?"input":P,k=(0,c.Z)(e,E),w=(0,r.useContext)(y).controlId;(n=(0,Z.vE)(n,"form-control"),N)?s=(0,T.Z)({},"".concat(n,"-plaintext"),!0):(i={},(0,T.Z)(i,n,!0),(0,T.Z)(i,"".concat(n,"-").concat(l),l),s=i);return(0,p.jsx)(g,(0,o.Z)((0,o.Z)({},k),{},{type:t,size:d,ref:a,readOnly:j,id:m||w,className:f()(v,s,h&&"is-valid",b&&"is-invalid","color"===t&&"".concat(n,"-color"))}))}));R.displayName="FormControl";var S=Object.assign(R,{Feedback:b}),L=(0,s(6543).Z)("form-floating"),z=["controlId","as"],V=r.forwardRef((function(e,a){var s=e.controlId,i=e.as,n=void 0===i?"div":i,t=(0,c.Z)(e,z),l=(0,r.useMemo)((function(){return{controlId:s}}),[s]);return(0,p.jsx)(y.Provider,{value:l,children:(0,p.jsx)(n,(0,o.Z)((0,o.Z)({},t),{},{ref:a}))})}));V.displayName="FormGroup";var O=V,H=s(2677),M=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],A=r.forwardRef((function(e,a){var s=e.as,i=void 0===s?"label":s,n=e.bsPrefix,t=e.column,l=e.visuallyHidden,d=e.className,m=e.htmlFor,v=(0,c.Z)(e,M),u=(0,r.useContext)(y).controlId;n=(0,Z.vE)(n,"form-label");var h="col-form-label";"string"===typeof t&&(h="".concat(h," ").concat(h,"-").concat(t));var x=f()(d,n,l&&"visually-hidden",t&&h);return m=m||u,t?(0,p.jsx)(H.Z,(0,o.Z)({ref:a,as:"label",className:x,htmlFor:m},v)):(0,p.jsx)(i,(0,o.Z)({ref:a,className:x,htmlFor:m},v))}));A.displayName="FormLabel",A.defaultProps={column:!1,visuallyHidden:!1};var G=A,_=["bsPrefix","className","id"],D=r.forwardRef((function(e,a){var s=e.bsPrefix,i=e.className,n=e.id,t=(0,c.Z)(e,_),l=(0,r.useContext)(y).controlId;return s=(0,Z.vE)(s,"form-range"),(0,p.jsx)("input",(0,o.Z)((0,o.Z)({},t),{},{type:"range",ref:a,className:f()(i,s),id:n||l}))}));D.displayName="FormRange";var Y=D,q=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],B=r.forwardRef((function(e,a){var s=e.bsPrefix,i=e.size,n=e.htmlSize,t=e.className,l=e.isValid,d=void 0!==l&&l,m=e.isInvalid,v=void 0!==m&&m,u=e.id,h=(0,c.Z)(e,q),x=(0,r.useContext)(y).controlId;return s=(0,Z.vE)(s,"form-select"),(0,p.jsx)("select",(0,o.Z)((0,o.Z)({},h),{},{size:n,ref:a,className:f()(t,s,i&&"".concat(s,"-").concat(i),d&&"is-valid",v&&"is-invalid"),id:u||x}))}));B.displayName="FormSelect";var J=B,K=["bsPrefix","className","as","muted"],Q=r.forwardRef((function(e,a){var s=e.bsPrefix,i=e.className,n=e.as,r=void 0===n?"small":n,t=e.muted,l=(0,c.Z)(e,K);return s=(0,Z.vE)(s,"form-text"),(0,p.jsx)(r,(0,o.Z)((0,o.Z)({},l),{},{ref:a,className:f()(i,s,t&&"text-muted")}))}));Q.displayName="FormText";var U=Q,W=r.forwardRef((function(e,a){return(0,p.jsx)(F,(0,o.Z)((0,o.Z)({},e),{},{ref:a,type:"switch"}))}));W.displayName="Switch";var X=Object.assign(W,{Input:F.Input,Label:F.Label}),$=["bsPrefix","className","children","controlId","label"],ee=r.forwardRef((function(e,a){var s=e.bsPrefix,i=e.className,n=e.children,r=e.controlId,t=e.label,l=(0,c.Z)(e,$);return s=(0,Z.vE)(s,"form-floating"),(0,p.jsxs)(O,(0,o.Z)((0,o.Z)({ref:a,className:f()(i,s),controlId:r},l),{},{children:[n,(0,p.jsx)("label",{htmlFor:r,children:t})]}))}));ee.displayName="FloatingLabel";var ae=ee,se=["className","validated","as"],ie={_ref:v().any,validated:v().bool,as:v().elementType},ne=r.forwardRef((function(e,a){var s=e.className,i=e.validated,n=e.as,r=void 0===n?"form":n,t=(0,c.Z)(e,se);return(0,p.jsx)(r,(0,o.Z)((0,o.Z)({},t),{},{ref:a,className:f()(s,i&&"was-validated")}))}));ne.displayName="Form",ne.propTypes=ie;var re,te=Object.assign(ne,{Group:O,Control:S,Floating:L,Check:F,Switch:X,Label:G,Text:U,Range:Y,Select:J,FloatingLabel:ae}),le=s(3360),oe=s(1687),ce=s(6871),de=s(6471),fe=t.ZP.div(re||(re=(0,n.Z)(["\n  min-height: 100vh;\n  padding: 40px;\n  .payment {\n    max-width: 500px;\n    margin: 50px auto;\n  }\n"]))),me=function(){var e=(0,ce.s0)(),a=(0,oe.o)(),s=a.state,n=a.dispatch,t=s.cart,o=t.shippingAddress,c=t.paymentMethod,d=(0,r.useState)(c||"PayPal"),f=(0,i.Z)(d,2),m=f[0],v=f[1];(0,r.useEffect)((function(){o.address||e("/shipping")}),[o,e]);return(0,p.jsxs)(fe,{children:[(0,p.jsx)(l.Z,{title:"Payment"}),(0,p.jsx)(de.Z,{step1:!0,step2:!0,step3:!0}),(0,p.jsxs)("div",{className:"payment",children:[(0,p.jsx)("h1",{className:"mb-4 text-4xl font-semibold",children:"Ph\u01b0\u01a1ng Th\u1ee9c Thanh To\xe1n"}),(0,p.jsxs)(te,{onSubmit:function(a){a.preventDefault(),n({type:"SAVE_PAYMENT_METHOD",payload:m}),e("/placeorder")},children:[(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)(te.Check,{type:"radio",id:"PayPal",label:"PayPal",value:"PayPal",checked:"PayPal"===m,onChange:function(e){return v(e.target.value)}})}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)(te.Check,{type:"radio",id:"Stripe",label:"Stripe",value:"Stripe",checked:"Stripe"===m,onChange:function(e){return v(e.target.value)}})}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)(le.Z,{type:"submit",children:"Ti\u1ebfp T\u1ee5c"})})]})]})]})}},2677:function(e,a,s){var i=s(885),n=s(1413),r=s(5987),t=s(1694),l=s.n(t),o=s(2791),c=s(162),d=s(184),f=["as","bsPrefix","className"],m=["className"];var v=o.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,i=e.className,t=(0,r.Z)(e,f);s=(0,c.vE)(s,"col");var o=(0,c.pi)(),d=(0,c.zG)(),m=[],v=[];return o.forEach((function(e){var a,i,n,r=t[e];delete t[e],"object"===typeof r&&null!=r?(a=r.span,i=r.offset,n=r.order):a=r;var l=e!==d?"-".concat(e):"";a&&m.push(!0===a?"".concat(s).concat(l):"".concat(s).concat(l,"-").concat(a)),null!=n&&v.push("order".concat(l,"-").concat(n)),null!=i&&v.push("offset".concat(l,"-").concat(i))})),[(0,n.Z)((0,n.Z)({},t),{},{className:l().apply(void 0,[i].concat(m,v))}),{as:a,bsPrefix:s,spans:m}]}(e),t=(0,i.Z)(s,2),o=t[0],v=o.className,p=(0,r.Z)(o,m),u=t[1],h=u.as,x=void 0===h?"div":h,b=u.bsPrefix,y=u.spans;return(0,d.jsx)(x,(0,n.Z)((0,n.Z)({},p),{},{ref:a,className:l()(v,!y.length&&b)}))}));v.displayName="Col",a.Z=v},9743:function(e,a,s){var i=s(1413),n=s(5987),r=s(1694),t=s.n(r),l=s(2791),o=s(162),c=s(184),d=["bsPrefix","className","as"],f=l.forwardRef((function(e,a){var s=e.bsPrefix,r=e.className,l=e.as,f=void 0===l?"div":l,m=(0,n.Z)(e,d),v=(0,o.vE)(s,"row"),p=(0,o.pi)(),u=(0,o.zG)(),h="".concat(v,"-cols"),x=[];return p.forEach((function(e){var a,s=m[e];delete m[e],a=null!=s&&"object"===typeof s?s.cols:s;var i=e!==u?"-".concat(e):"";null!=a&&x.push("".concat(h).concat(i,"-").concat(a))})),(0,c.jsx)(f,(0,i.Z)((0,i.Z)({ref:a},m),{},{className:t().apply(void 0,[r,v].concat(x))}))}));f.displayName="Row",a.Z=f}}]);
//# sourceMappingURL=59.1ec3faab.chunk.js.map