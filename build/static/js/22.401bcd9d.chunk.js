(this.webpackJsonpyeshub=this.webpackJsonpyeshub||[]).push([[22],{421:function(e,t,a){"use strict";var l=a(26),n=a(41),r=a(0),c=a.n(r),m=a(1),u=a.n(m),o=a(17),s=a.n(o),i=a(7),d={tag:i.f,inverse:u.a.bool,color:u.a.string,body:u.a.bool,outline:u.a.bool,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},E=function(e){var t=e.className,a=e.cssModule,r=e.color,m=e.body,u=e.inverse,o=e.outline,d=e.tag,E=e.innerRef,f=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(i.d)(s()(t,"card",!!u&&"text-white",!!m&&"card-body",!!r&&(o?"border":"bg")+"-"+r),a);return c.a.createElement(d,Object(l.a)({},f,{className:b,ref:E}))};E.propTypes=d,E.defaultProps={tag:"div"},t.a=E},422:function(e,t,a){"use strict";var l=a(26),n=a(41),r=a(0),c=a.n(r),m=a(1),u=a.n(m),o=a(17),s=a.n(o),i=a(7),d={tag:i.f,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},E=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,m=e.tag,u=Object(n.a)(e,["className","cssModule","innerRef","tag"]),o=Object(i.d)(s()(t,"card-body"),a);return c.a.createElement(m,Object(l.a)({},u,{className:o,ref:r}))};E.propTypes=d,E.defaultProps={tag:"div"},t.a=E},423:function(e,t,a){"use strict";var l=a(26),n=a(41),r=a(0),c=a.n(r),m=a(1),u=a.n(m),o=a(17),s=a.n(o),i=a(7),d={tag:i.f,className:u.a.string,cssModule:u.a.object},E=function(e){var t=e.className,a=e.cssModule,r=e.tag,m=Object(n.a)(e,["className","cssModule","tag"]),u=Object(i.d)(s()(t,"card-header"),a);return c.a.createElement(r,Object(l.a)({},m,{className:u}))};E.propTypes=d,E.defaultProps={tag:"div"},t.a=E},541:function(e,t,a){"use strict";a.r(t),a.d(t,"Award",(function(){return b})),a.d(t,"TopbarItem",(function(){return p})),a.d(t,"AwardItem",(function(){return g})),a.d(t,"PointSystem",(function(){return h})),a.d(t,"Dashboard",(function(){return v})),a.d(t,"Achievements",(function(){return y}));var l=a(52),n=a(2),r=a(0),c=a.n(r),m=a(421),u=a(423),o=a(422),s=a(114),i=a(12),d=a(3),E={getAllAwards:function(){return d.a.get("award/list")}},f={"background-color":"white",padding:"1em"},b=(t.default=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),a=t[0],l=t[1];Object(r.useEffect)((function(){E.getAllAwards().then((function(e){l(e.data.data)})).catch((function(e){console.log("-- awards api error ---"),console.log(e)}))}),[]);var i=Object(r.useState)(1),d=Object(n.a)(i,2),b=d[0],C=d[1];return c.a.createElement(s.a,null,c.a.createElement(m.a,{style:{boxShadow:"0 2px 10px lightgray"}},c.a.createElement(u.a,{style:f},c.a.createElement("h2",{style:{fontSize:"26px",color:"243C4B, 100%"}},"Award & Point System")),c.a.createElement(o.a,null,c.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-row p-2",style:{marginBottom:"1em"}},c.a.createElement(p,{onItemClick:function(){return C(1)},heading:"Dashboard",isActive:1===b}),c.a.createElement(p,{onItemClick:function(){return C(2)},heading:"Points",isActive:2===b}),c.a.createElement(p,{onItemClick:function(){return C(3)},heading:"Awards",isActive:3===b}),c.a.createElement(p,{onItemClick:function(){return C(4)},heading:"Achievement",isActive:4===b})),3===b&&c.a.createElement("div",{className:"row"},a.map((function(e,t){return c.a.createElement("div",{className:"col-md-3 col-lg-3 col-sm-3",key:t},c.a.createElement(g,{award:e}))}))),1===b&&c.a.createElement(v,null),4===b&&c.a.createElement(y,null),2===b&&c.a.createElement(h,null))))},function(e){Object(l.a)(e)}),p=function(e){var t=e.isActive,a=void 0!==t&&t,l=e.heading,n=e.onItemClick;return c.a.createElement("div",{style:{cursor:"pointer",textAlign:"center"},onClick:n,className:"flex-1 p-2 m-2 ".concat(a?"b-1":"")},c.a.createElement("span",{className:"text-center"},l||"Dashboard"))},g=function(e){var t=e.award;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},c.a.createElement("img",{src:Object(i.a)(t.images[0]),style:{maxWidth:"100%",height:"90px",margin:"auto"}}),c.a.createElement("p",{className:"text-center",style:{marginBottom:"5px",marginTop:"10px"}},t.awardName),c.a.createElement("p",{className:"text-center"},t.cost)))},h=function(){return c.a.createElement("div",{style:{margin:"-1.2em"}},c.a.createElement("h3",{style:{fontSize:"24px",fontWeight:500,margin:".5em",color:"243C4B",fontFamily:"Roboto"}},"Post Milestones"),c.a.createElement("table",{className:"table achievements"},c.a.createElement("thead",null,c.a.createElement("th",null,"Action"),c.a.createElement("th",null,"Points")),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Create Post"),c.a.createElement("td",null,"10")),c.a.createElement("tr",null,c.a.createElement("td",null,"25 likes on post"),c.a.createElement("td",null,"+5")),c.a.createElement("tr",null,c.a.createElement("td",null,"50 likes on post"),c.a.createElement("td",null,"+10")),c.a.createElement("tr",null,c.a.createElement("td",null,"100 likes on post"),c.a.createElement("td",null,"+20")),c.a.createElement("tr",null,c.a.createElement("td",null,"200 likes on post"),c.a.createElement("td",null,"+50")),c.a.createElement("tr",null,c.a.createElement("td",null,"500 likes on post"),c.a.createElement("td",null,"+125")),c.a.createElement("tr",null,c.a.createElement("td",null,"Every 50 likes past 500"),c.a.createElement("td",null,"+10")))),c.a.createElement("h3",{style:{fontSize:"24px",fontWeight:500,margin:".5em",color:"243C4B",fontFamily:"Roboto"}},"Comments Milestones"),c.a.createElement("table",{className:"table achievements"},c.a.createElement("thead",null,c.a.createElement("th",null,"Action"),c.a.createElement("th",null,"Points")),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Create Comment"),c.a.createElement("td",null,"2")),c.a.createElement("tr",null,c.a.createElement("td",null,"5 likes on Comment"),c.a.createElement("td",null,"+1")),c.a.createElement("tr",null,c.a.createElement("td",null,"10 likes on Comment"),c.a.createElement("td",null,"+2")),c.a.createElement("tr",null,c.a.createElement("td",null,"25 likes on Comment"),c.a.createElement("td",null,"+4")),c.a.createElement("tr",null,c.a.createElement("td",null,"50 likes on Comment"),c.a.createElement("td",null,"+10")),c.a.createElement("tr",null,c.a.createElement("td",null,"Every 50 likes past 50"),c.a.createElement("td",null,"+4")))),c.a.createElement("h3",{style:{fontSize:"24px",fontWeight:500,margin:".5em",color:"243C4B",fontFamily:"Roboto"}},"Event Milestones"),c.a.createElement("table",{className:"table achievements"},c.a.createElement("thead",null,c.a.createElement("th",null,"Action"),c.a.createElement("th",null,"Points")),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Simple Event (No Sub event)"),c.a.createElement("td",null,"*10")),c.a.createElement("tr",null,c.a.createElement("td",null,"Big Event (with subevents)"),c.a.createElement("td",null,"**15")),c.a.createElement("tr",null,c.a.createElement("td",null,"Contribution - add edits"),c.a.createElement("td",null,"+1")))))},v=function(){return c.a.createElement("div",{style:{margin:"-1.2em"}},c.a.createElement("table",{className:"table achievements"},c.a.createElement("thead",null,c.a.createElement("th",null,"Action"),c.a.createElement("th",null,"Points")),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Verify your email id"),c.a.createElement("td",null,"20")),c.a.createElement("tr",null,c.a.createElement("td",null,"Update your user profile"),c.a.createElement("td",null,"20")),c.a.createElement("tr",null,c.a.createElement("td",null,"Join 3 communities"),c.a.createElement("td",null,"10")),c.a.createElement("tr",null,c.a.createElement("td",null,"Create your first post"),c.a.createElement("td",null,"20")),c.a.createElement("tr",null,c.a.createElement("td",null,"Gain 10 upvotes"),c.a.createElement("td",null,"20")),c.a.createElement("tr",null,c.a.createElement("td",null,"Create/Bookmark an event"),c.a.createElement("td",null,"10")))))},y=function(){return c.a.createElement("div",{style:{margin:"-1.2em"}},c.a.createElement("table",{className:"table achievements"},c.a.createElement("thead",null,c.a.createElement("th",null,"Action"),c.a.createElement("th",null,"Points")),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Contribute Your First case study"),c.a.createElement("td",null,"50")),c.a.createElement("tr",null,c.a.createElement("td",null,"Contribute 5 case studies"),c.a.createElement("td",null,"250")),c.a.createElement("tr",null,c.a.createElement("td",null,"Contribute 10 case studies"),c.a.createElement("td",null,"500")),c.a.createElement("tr",null,c.a.createElement("td",null,"Create 10 posts"),c.a.createElement("td",null,"50")),c.a.createElement("tr",null,c.a.createElement("td",null,"Create 25 posts"),c.a.createElement("td",null,"100")),c.a.createElement("tr",null,c.a.createElement("td",null,"Create 50 posts"),c.a.createElement("td",null,"150")),c.a.createElement("tr",null,c.a.createElement("td",null,"Create 100 posts"),c.a.createElement("td",null,"250")),c.a.createElement("tr",null,c.a.createElement("td",null,"Create 5 calendar entries"),c.a.createElement("td",null,"20")),c.a.createElement("tr",null,c.a.createElement("td",null,"Create 10 calendar entries"),c.a.createElement("td",null,"50")),c.a.createElement("tr",null,c.a.createElement("td",null,"Create 25 calendar entries"),c.a.createElement("td",null,"125")))))}}}]);
//# sourceMappingURL=22.401bcd9d.chunk.js.map