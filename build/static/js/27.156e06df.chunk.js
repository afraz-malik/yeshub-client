(this.webpackJsonpyeshub=this.webpackJsonpyeshub||[]).push([[27],{356:function(e,a,t){"use strict";var r=t(0),n=t.n(r);a.a=function(e){var a=e.name,t=e.className,r=void 0===t?"form-control form-input2":t,l=e.onBlur,c=e.onChange,s=e.props,m=e.id,o=e.label,i=e.labelClass,u=void 0===i?"form-label":i,p=e.inputWrapperClass,d=void 0===p?"form-group":p,b=e.defaultValue,f=e.isRequired,E=void 0!==f&&f;return n.a.createElement("div",{className:"".concat(d," form__textarea-input")},o?n.a.createElement("label",{htmlFor:a,className:u},o):"",n.a.createElement("textarea",Object.assign({name:a,onBlur:l,id:m||a,onChange:c,className:r,required:E,defaultValue:b},s)))}},540:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(48),c=t(6),s=t(83),m=t(21),o=t(22),i=t(5),u=t(2),p=t(63),d=t(356),b=t(45),f=t(11),E=function(e){var a=e.state,t=Object(f.g)().goBack,l=Object(r.useState)(a.rules),c=Object(u.a)(l,2),s=c[0],E=c[1],g=Object(r.useState)({ID:a._id,name:a.name,description:a.description,rules:s}),v=Object(u.a)(g,2),N=v[0],O=v[1];Object(r.useEffect)((function(){O(Object(i.a)(Object(i.a)({},N),{},{rules:s}))}),[s]);return n.a.createElement("div",{className:"mc-border"},n.a.createElement(p.a,{submitUrl:"/knowledgeGroup/update",className:"",validate:!0,data:N,method:"PUT",buttonText:"POST",props:{extraSubmitButtons:n.a.createElement("button",{type:"button",className:"btn btn-draft",onClick:t},"CANCEL")},submitBtnWrapperClass:"form-group text-right mb-0 pt-1"},n.a.createElement("label",{className:"form-label text-uppercase"},"Description"),n.a.createElement(d.a,{name:"description",onChange:function(e){var a=e.target,t=a.name,r=a.value;O(Object(i.a)(Object(i.a)({},N),{},Object(o.a)({},t,r)))},props:{rows:3,placeholder:"Intro of the Community"},className:"form-control form-input2",defaultValue:N.description}),n.a.createElement("label",{className:"form-label"},"RULES OF COMMUNITY"),s.map((function(e,a){return n.a.createElement(b.a,{key:a,name:"rule",onChange:function(e){return function(e,a){var t=s;t[a]=e.target.value,E(Object(m.a)(t))}(e,a)},props:{placeholder:"DESCRIPTION (OPTIONAL)",value:e},className:"form-control form-input2 mb-3"})})),n.a.createElement("div",{className:"add-sub-events"},n.a.createElement("span",{onClick:function(){E(s.concat(""))}},n.a.createElement("span",{style:{fontSize:18}},"+ Add More")))))},g=t(12);a.default=function(){var e=Object(f.h)().state,a=Object(f.g)().goBack;return e||a(),n.a.createElement(l.a,null,n.a.createElement("div",{className:"cp-wrap"},n.a.createElement(s.a,{title:"Edit Community",showDrafts:!1}),n.a.createElement("div",{className:"mc-border mt-5 mt-lg-0 mb-3"},n.a.createElement("div",{className:"group-wrap"},n.a.createElement("div",{className:"grp-header d-flex justify-content-between"},n.a.createElement("div",{className:"d-flex flex-row align-items-center "},n.a.createElement("div",{className:"image mr-2 profile-image"},n.a.createElement("img",{src:e.logo?Object(g.a)(e.logo):c.p,alt:"group",className:"profile-image"})),n.a.createElement("div",{className:"d-flex flex-column"},n.a.createElement("div",{className:"grp-name"},e.name),n.a.createElement("div",{className:"grp-members"},n.a.createElement("span",null,"Members"),n.a.createElement("span",{className:"ml-1"},e.totalMembers||0))))))),n.a.createElement(E,{state:e})))}}}]);
//# sourceMappingURL=27.156e06df.chunk.js.map