(this.webpackJsonpyeshub=this.webpackJsonpyeshub||[]).push([[24],{357:function(e,t,a){"use strict";var n=a(2),r=a(0),c=a.n(r),i=a(117);t.a=function(e){var t=e.event,a=e.link,s=Object(r.useState)(t),l=Object(n.a)(s,2),o=(l[0],l[1],Object(r.useState)(t.going)),d=Object(n.a)(o,2),u=d[0],v=d[1];return c.a.createElement("div",{className:"event-card-container pt-3"},c.a.createElement("div",{className:"event-card-wrap"},t&&c.a.createElement(i.a,{event:t,going:u,onMarkGoing:function(e){return v(e)},link:a})))}},363:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(357);t.a=function(e){var t=e.events,a=void 0===t?[]:t;return r.a.createElement("div",{className:"profile_events__container"},a.map((function(e){return r.a.createElement(c.a,{key:e._id,event:e})})))}},538:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a(2),c=a(0),i=a.n(c),s=a(114),l=a(83),o=a(234),d=a(73),u=a(76),v=function(e){var t=e.feeds,a=void 0===t?[]:t,n=e.topMargin,r=void 0===n||n,s=e.isUser,l=void 0!==s&&s,v=e.loading,m=void 0!==v&&v,f=e.awards,E=void 0===f?[]:f,p=e.hideAward;return i.a.createElement(i.a.Fragment,null,m?i.a.createElement(o.a,null):a.map((function(e,t){return i.a.createElement(c.Fragment,{key:e._id},e.type&&2===e.type?i.a.createElement(u.a,{event:e}):i.a.createElement(d.b,{post:e,topMargin:r,isUser:l,idx:t,awards:E,hideAward:p}))})))},m=a(42),f=a(8),E=a(4),p=a(11),b=a(363);t.default=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],d=Object(c.useState)([]),u=Object(r.a)(d,2),j=u[0],N=u[1];Object(c.useEffect)((function(){m.a.saved().then((function(e){o(Object(n.a)(e.data.data.docs))})),m.a.savedEvents().then((function(e){N(e.data.data)}))}),[]);var O=function(e){var t=a.filter((function(t){return t._id!==e.detail.id}));o(Object(n.a)(t))},h=function(e){var t=j.filter((function(t){return t._id!==e.detail.id}));N(Object(n.a)(t))};return Object(c.useEffect)((function(){return document.addEventListener(f.l,O),function(){return document.removeEventListener(f.l,O)}}),[a]),Object(c.useEffect)((function(){return document.addEventListener(f.k,h),function(){return document.removeEventListener(f.k,h)}}),[j]),i.a.createElement(s.a,null,i.a.createElement("div",{className:"profile-wrap"},i.a.createElement(l.a,{title:"Saved",showDrafts:!1}),i.a.createElement("div",{className:"mc-border py-2 mt-2"},i.a.createElement("div",{className:"profile-tabs"},i.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},i.a.createElement("ul",{className:"nav profile-tabs-nav flex-nowrap",role:"tablist"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(E.c,{className:"nav-link",exact:!0,activeClassName:"active",to:"/profile/saved"},"Posts")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(E.c,{className:"nav-link",activeClassName:"active",to:"/profile/saved/events"},"Events")))))),i.a.createElement(p.d,null,i.a.createElement(p.b,{path:"/profile/saved/events",render:function(){return i.a.createElement(b.a,{events:j})}}),i.a.createElement(p.b,{path:"/profile/saved",render:function(){return i.a.createElement(v,{feeds:a,awards:[],hideAward:!0})}}))))}}}]);
//# sourceMappingURL=24.c4eb1d6f.chunk.js.map