"use strict";(self.webpackChunkGooseTrack=self.webpackChunkGooseTrack||[]).push([[865],{2865:function(t,n,e){e.r(n),e.d(n,{default:function(){return A}});var i,r,d,o,a,s,l,u,p,c=e(1413),h=e(29439),m=e(72791),g=e(57689),y=e(55866),x=e(7072),w=e(71652),f=e(53889),b=e(5127),v=e(82599),k=e(93747),P=e(16386),Z=768,j=1440,D=function(){var t=(0,m.useState)((function(){return window.innerWidth<Z})),n=(0,h.Z)(t,2),e=n[0],i=n[1],r=(0,m.useState)((function(){return window.innerWidth<j&&window.innerWidth>Z})),d=(0,h.Z)(r,2),o=d[0],a=d[1],s=(0,m.useState)((function(){return window.innerWidth>=j})),l=(0,h.Z)(s,2),u=l[0],p=l[1];return(0,m.useEffect)((function(){var t=function(){i(window.innerWidth<Z),a(window.innerWidth<j&&window.innerWidth>Z),p(window.innerWidth>=j)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),{isMobile:e,isTablet:o,isDesktop:u}},M=e(78615),C=e(30168),T=e(50225),W=T.Z.div(i||(i=(0,C.Z)(["\n  padding: 0 20px;\n\n  @media screen and (min-width: 768px) {\n    padding: 0 32px;\n  }\n"]))),$=T.Z.div(r||(r=(0,C.Z)(["\n  border: 1px solid ",";\n  border-radius: 8px;\n\n  overflow: hidden;\n\n  @media screen and (min-width: 768px) {\n    border-color: ",";\n  }\n"])),(function(t){return t.theme.stroke}),(function(t){return t.theme.strokeTransparant})),L=T.Z.div(d||(d=(0,C.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  min-height: 94px;\n\n  background-color: ",";\n\n  &:not(:last-child) {\n    border-bottom-color: ",";\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n  }\n\n  @media screen and (min-width: 768px) {\n    min-height: 144px;\n\n    &:not(:last-child) {\n      border-bottom-color: ",";\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    min-height: 125px;\n  }\n"])),(function(t){return t.theme.bgPrimary}),(function(t){return t.theme.stroke}),(function(t){return t.theme.strokeTransparant})),E=T.Z.div(o||(o=(0,C.Z)(["\n  position: relative;\n\n  padding-left: 2px;\n  padding-right: 2px;\n  padding-top: 48px;\n  padding-bottom: 2px;\n\n  overflow: hidden;\n\n  cursor: ",";\n\n  &:not(:first-of-type) {\n    border-left-color: ",";\n    border-left-width: 1px;\n    border-left-style: solid;\n  }\n\n  &:hover {\n    & .disabled-hover:not(:hover) + .container {\n      background-color: ",";\n\n      & .value {\n        color: ",";\n      }\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    padding-left: 4px;\n    padding-right: 4px;\n    padding-top: 58px;\n    padding-bottom: 4px;\n\n    &:not(:last-child) {\n      border-bottom-color: ",";\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-bottom: 8px;\n  }\n"])),(function(t){return t.$isEmpty?"default":"pointer"}),(function(t){return t.theme.stroke}),(function(t){return t.theme.accentBlueLight}),(function(t){return t.theme.textPrimaryLight}),(function(t){return t.theme.strokeTransparant})),O=T.Z.div(a||(a=(0,C.Z)(["\n  position: absolute;\n  top: 8px;\n  right: 4px;\n\n  padding: 4px 6px;\n\n  background-color: ",";\n  border-radius: 6px;\n\n  cursor: pointer;\n\n  transition: background-color\n    ",";\n\n  @media screen and (min-width: 768px) {\n    top: 14px;\n    right: 14px;\n\n    padding: 4px 8px;\n  }\n"])),(function(t){var n=t.theme;return t.$isCurrentDate?n.accentBlue:"transparent"}),(function(t){var n=t.theme;return"".concat(n.transitions.time," ").concat(n.transitions.cubic)})),S=T.Z.p(s||(s=(0,C.Z)(["\n  margin: 0;\n\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.16;\n  text-transform: uppercase;\n  color: ",";\n\n  user-select: none;\n\n  transition: color\n    ",";\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.125;\n  }\n"])),(function(t){var n=t.theme;return t.$isCurrentDate?n.white:n.textPrimaryLight}),(function(t){var n=t.theme;return"".concat(n.transitions.time," ").concat(n.transitions.cubic)})),z=T.Z.button(l||(l=(0,C.Z)(["\n  padding-top: 2px;\n  padding-right: 2px;\n  padding-bottom: 2px;\n  padding-left: 6px;\n  width: 100%;\n\n  font-size: 10px;\n  font-weight: 700;\n  line-height: 1.4;\n  white-space: nowrap;\n  text-align: start;\n\n  text-overflow: ellipsis;\n  overflow: hidden;\n  cursor: pointer;\n\n  border-radius: 8px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: transparent;\n\n  user-select: none;\n\n  transition: border-color\n    ",";\n\n  @media screen and (min-width: 768px) {\n    padding: 1px 5px;\n\n    font-size: 14px;\n    line-height: 1.28;\n\n    border-width: 3px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding: 1px 7px;\n\n    border-width: 3px;\n  }\n"])),(function(t){var n=t.theme;return"".concat(n.transitions.time," ").concat(n.transitions.cubic)})),Y=(0,T.Z)(z)(u||(u=(0,C.Z)(["\n  color: ",";\n\n  background: ",";\n\n  &:not(:last-child) {\n    margin-bottom: 2px;\n  }\n\n  &:hover,\n  &:focus {\n    border-color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    &:not(:last-child) {\n      margin-bottom: 4px;\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    &:not(:last-child) {\n      margin-bottom: 8px;\n    }\n  }\n"])),(function(t){var n=t.theme;switch(t.$priority){case"low":return n.accentPrimary;case"medium":return n.accentYellow;case"high":return n.accentRed;default:throw new Error("Invalid status")}}),(function(t){var n=t.theme;switch(t.$priority){case"low":return n.accentBlueLight;case"medium":return n.accentYellowLight;case"high":return n.accentRedLight;default:throw new Error("Invalid status")}}),(function(t){var n=t.theme;switch(t.$priority){case"low":return n.accentPrimary;case"medium":return n.accentYellow;case"high":return n.accentRed;default:throw new Error("Invalid status")}})),B=(0,T.Z)(z)(p||(p=(0,C.Z)(["\n  margin-top: 2px;\n\n  color: #333333;\n\n  background: #e5e5e5;\n\n  &:hover,\n  &:focus {\n    border-color: #333333;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: 4px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 8px;\n  }\n"]))),R=[{id:"1",title:"\u0417\u0430\u0434\u0430\u0447\u0430 1",priority:"high",status:"inProgress",date:"2023-10-01",start:"02:09",end:"17:03"},{id:"2",title:"\u0417\u0430\u0434\u0430\u0447\u0430 2",priority:"high",status:"done",date:"2023-10-04",start:"11:59",end:"12:07"},{id:"3",title:"\u0417\u0430\u0434\u0430\u0447\u0430 3",priority:"low",status:"inProgress",date:"2023-10-04",start:"07:28",end:"02:53"},{id:"3.1",title:"\u0417\u0430\u0434\u0430\u0447\u0430 3.1",priority:"high",status:"inProgress",date:"2023-10-04",start:"07:28",end:"02:53"},{id:"3.2",title:"\u0417\u0430\u0434\u0430\u0447\u0430 3.2",priority:"medium",status:"inProgress",date:"2023-10-04",start:"07:28",end:"02:53"},{id:"4",title:"\u0417\u0430\u0434\u0430\u0447\u0430 4",priority:"high",status:"inProgress",date:"2023-10-05",start:"08:24",end:"17:41"},{id:"5",title:"\u0417\u0430\u0434\u0430\u0447\u0430 5",priority:"low",status:"inProgress",date:"2023-10-07",start:"12:48",end:"18:21"},{id:"6",title:"\u0417\u0430\u0434\u0430\u0447\u0430 6",priority:"low",status:"inProgress",date:"2023-10-07",start:"03:24",end:"14:33"},{id:"7",title:"\u0417\u0430\u0434\u0430\u0447\u0430 7",priority:"high",status:"todo",date:"2023-10-08",start:"17:34",end:"10:00"},{id:"8",title:"\u0417\u0430\u0434\u0430\u0447\u0430 8",priority:"low",status:"done",date:"2023-10-08",start:"15:19",end:"16:26"},{id:"9",title:"\u0417\u0430\u0434\u0430\u0447\u0430 9",priority:"medium",status:"done",date:"2023-10-10",start:"08:27",end:"20:44"},{id:"10",title:"\u0417\u0430\u0434\u0430\u0447\u0430 10",priority:"medium",status:"todo",date:"2023-10-10",start:"13:38",end:"16:51"},{id:"11",title:"\u0417\u0430\u0434\u0430\u0447\u0430 11",priority:"low",status:"inProgress",date:"2023-10-11",start:"14:36",end:"23:40"},{id:"12",title:"\u0417\u0430\u0434\u0430\u0447\u0430 12",priority:"low",status:"inProgress",date:"2023-10-11",start:"20:05",end:"17:10"},{id:"13",title:"\u0417\u0430\u0434\u0430\u0447\u0430 13",priority:"high",status:"inProgress",date:"2023-10-13",start:"21:30",end:"15:43"},{id:"14",title:"\u0417\u0430\u0434\u0430\u0447\u0430 14",priority:"high",status:"todo",date:"2023-10-13",start:"10:23",end:"20:18"},{id:"15",title:"\u0417\u0430\u0434\u0430\u0447\u0430 15",priority:"low",status:"inProgress",date:"2023-10-14",start:"14:43",end:"02:31"},{id:"16",title:"\u0417\u0430\u0434\u0430\u0447\u0430 16",priority:"medium",status:"done",date:"2023-10-14",start:"23:46",end:"23:53"},{id:"17",title:"\u0417\u0430\u0434\u0430\u0447\u0430 17",priority:"high",status:"done",date:"2023-10-16",start:"12:43",end:"20:06"},{id:"18",title:"\u0417\u0430\u0434\u0430\u0447\u0430 18",priority:"low",status:"todo",date:"2023-10-16",start:"00:27",end:"23:03"},{id:"19",title:"\u0417\u0430\u0434\u0430\u0447\u0430 19",priority:"medium",status:"done",date:"2023-10-20",start:"19:08",end:"07:28"},{id:"20",title:"\u0417\u0430\u0434\u0430\u0447\u0430 20",priority:"medium",status:"done",date:"2023-10-20",start:"20:16",end:"20:19"},{id:"21",title:"\u0417\u0430\u0434\u0430\u0447\u0430 21",priority:"low",status:"inProgress",date:"2023-10-21",start:"20:40",end:"06:51"},{id:"22",title:"\u0417\u0430\u0434\u0430\u0447\u0430 22",priority:"low",status:"done",date:"2023-10-22",start:"01:57",end:"03:57"},{id:"23",title:"\u0417\u0430\u0434\u0430\u0447\u0430 23",priority:"high",status:"done",date:"2023-10-22",start:"10:08",end:"04:52"},{id:"24",title:"\u0417\u0430\u0434\u0430\u0447\u0430 24",priority:"medium",status:"done",date:"2023-10-23",start:"07:55",end:"18:47"},{id:"25",title:"\u0417\u0430\u0434\u0430\u0447\u0430 25",priority:"high",status:"done",date:"2023-10-23",start:"22:20",end:"14:16"},{id:"26",title:"\u0417\u0430\u0434\u0430\u0447\u0430 26",priority:"medium",status:"todo",date:"2023-10-24",start:"18:41",end:"14:47"},{id:"27",title:"\u0417\u0430\u0434\u0430\u0447\u0430 27",priority:"medium",status:"inProgress",date:"2023-10-25",start:"09:18",end:"11:30"},{id:"28",title:"\u0417\u0430\u0434\u0430\u0447\u0430 28",priority:"high",status:"todo",date:"2023-10-25",start:"11:26",end:"18:24"},{id:"29",title:"\u0417\u0430\u0434\u0430\u0447\u0430 29",priority:"low",status:"done",date:"2023-10-26",start:"20:03",end:"17:58"},{id:"30",title:"\u0417\u0430\u0434\u0430\u0447\u0430 30",priority:"low",status:"todo",date:"2023-10-26",start:"12:17",end:"15:11"},{id:"31",title:"\u0417\u0430\u0434\u0430\u0447\u0430 31",priority:"medium",status:"todo",date:"2023-10-27",start:"07:42",end:"13:56"},{id:"32",title:"\u0417\u0430\u0434\u0430\u0447\u0430 32",priority:"medium",status:"todo",date:"2023-10-27",start:"15:22",end:"23:21"},{id:"33",title:"\u0417\u0430\u0434\u0430\u0447\u0430 33",priority:"high",status:"done",date:"2023-10-28",start:"19:38",end:"05:39"},{id:"34",title:"\u0417\u0430\u0434\u0430\u0447\u0430 34",priority:"low",status:"done",date:"2023-10-28",start:"02:34",end:"12:25"},{id:"35",title:"\u0417\u0430\u0434\u0430\u0447\u0430 35",priority:"high",status:"todo",date:"2023-10-30",start:"04:46",end:"10:27"},{id:"36",title:"\u0417\u0430\u0434\u0430\u0447\u0430 36",priority:"high",status:"done",date:"2023-10-30",start:"13:04",end:"07:50"},{id:"37",title:"\u0417\u0430\u0434\u0430\u0447\u0430 37",priority:"low",status:"todo",date:"2023-10-31",start:"20:39",end:"18:57"},{id:"38",title:"\u0417\u0430\u0434\u0430\u0447\u0430 38",priority:"medium",status:"done",date:"2023-11-01",start:"22:40",end:"21:06"},{id:"39",title:"\u0417\u0430\u0434\u0430\u0447\u0430 39",priority:"medium",status:"inProgress",date:"2023-11-02",start:"20:54",end:"12:27"},{id:"40",title:"\u0417\u0430\u0434\u0430\u0447\u0430 40",priority:"low",status:"todo",date:"2023-11-05",start:"01:55",end:"18:08"},{id:"41",title:"\u0417\u0430\u0434\u0430\u0447\u0430 41",priority:"medium",status:"done",date:"2023-11-05",start:"15:38",end:"02:04"},{id:"42",title:"\u0417\u0430\u0434\u0430\u0447\u0430 42",priority:"low",status:"inProgress",date:"2023-11-06",start:"23:14",end:"03:32"},{id:"43",title:"\u0417\u0430\u0434\u0430\u0447\u0430 43",priority:"medium",status:"done",date:"2023-11-07",start:"16:56",end:"13:39"},{id:"44",title:"\u0417\u0430\u0434\u0430\u0447\u0430 44",priority:"low",status:"done",date:"2023-11-07",start:"14:39",end:"18:32"},{id:"45",title:"\u0417\u0430\u0434\u0430\u0447\u0430 45",priority:"low",status:"inProgress",date:"2023-11-08",start:"07:33",end:"00:41"},{id:"46",title:"\u0417\u0430\u0434\u0430\u0447\u0430 46",priority:"high",status:"done",date:"2023-11-09",start:"21:40",end:"00:20"},{id:"47",title:"\u0417\u0430\u0434\u0430\u0447\u0430 47",priority:"low",status:"done",date:"2023-11-10",start:"19:45",end:"18:25"},{id:"48",title:"\u0417\u0430\u0434\u0430\u0447\u0430 48",priority:"low",status:"todo",date:"2023-11-12",start:"19:21",end:"14:20"},{id:"49",title:"\u0417\u0430\u0434\u0430\u0447\u0430 49",priority:"high",status:"done",date:"2023-11-12",start:"11:56",end:"19:24"},{id:"50",title:"\u0417\u0430\u0434\u0430\u0447\u0430 50",priority:"low",status:"done",date:"2023-11-15",start:"04:53",end:"02:45"},{id:"51",title:"\u0417\u0430\u0434\u0430\u0447\u0430 51",priority:"low",status:"todo",date:"2023-11-16",start:"19:15",end:"21:39"},{id:"52",title:"\u0417\u0430\u0434\u0430\u0447\u0430 52",priority:"high",status:"done",date:"2023-11-17",start:"17:17",end:"16:57"},{id:"53",title:"\u0417\u0430\u0434\u0430\u0447\u0430 53",priority:"high",status:"inProgress",date:"2023-11-18",start:"17:06",end:"05:25"},{id:"54",title:"\u0417\u0430\u0434\u0430\u0447\u0430 54",priority:"low",status:"inProgress",date:"2023-11-21",start:"07:47",end:"04:18"},{id:"55",title:"\u0417\u0430\u0434\u0430\u0447\u0430 55",priority:"high",status:"inProgress",date:"2023-11-21",start:"18:23",end:"14:06"},{id:"56",title:"\u0417\u0430\u0434\u0430\u0447\u0430 56",priority:"low",status:"done",date:"2023-11-22",start:"15:21",end:"06:06"},{id:"57",title:"\u0417\u0430\u0434\u0430\u0447\u0430 57",priority:"low",status:"todo",date:"2023-11-22",start:"15:55",end:"15:05"},{id:"58",title:"\u0417\u0430\u0434\u0430\u0447\u0430 58",priority:"low",status:"done",date:"2023-11-24",start:"03:54",end:"12:51"},{id:"59",title:"\u0417\u0430\u0434\u0430\u0447\u0430 59",priority:"high",status:"inProgress",date:"2023-11-25",start:"01:22",end:"02:55"},{id:"60",title:"\u0417\u0430\u0434\u0430\u0447\u0430 60",priority:"medium",status:"inProgress",date:"2023-11-25",start:"08:06",end:"16:21"},{id:"61",title:"\u0417\u0430\u0434\u0430\u0447\u0430 61",priority:"low",status:"done",date:"2023-11-26",start:"15:05",end:"18:53"},{id:"62",title:"\u0417\u0430\u0434\u0430\u0447\u0430 62",priority:"low",status:"inProgress",date:"2023-11-27",start:"07:49",end:"18:09"},{id:"63",title:"\u0417\u0430\u0434\u0430\u0447\u0430 63",priority:"low",status:"inProgress",date:"2023-11-30",start:"19:16",end:"15:43"},{id:"64",title:"\u0417\u0430\u0434\u0430\u0447\u0430 64",priority:"low",status:"inProgress",date:"2023-11-30",start:"19:28",end:"21:35"}],I=e(80184),N=function(t){var n=t.tasks,e=t.onOpenTaskModal,i=(0,m.useState)(null),r=(0,h.Z)(i,2),d=r[0],o=r[1],a=Boolean(d),s=D(),l=s.isMobile,u=s.isTablet,p=l?{maxWidth:84,paddingX:"2px",paddingY:"4px"}:u?{maxWidth:112,paddingX:"4px",paddingY:"8px"}:{maxWidth:160,paddingX:"4px",paddingY:"8px"};return(0,I.jsxs)("div",{children:[(0,I.jsx)(B,{type:"button",id:"more-button","aria-controls":a?"more-menu":void 0,"aria-haspopup":"true","aria-expanded":a?"true":void 0,onClick:function(t){o(t.currentTarget)},children:"More"}),(0,I.jsx)(b.Z,{id:"more-menu",anchorEl:d,open:a,onClose:function(){o(null)},MenuListProps:{"aria-labelledby":"more-button"},sx:{".MuiPaper-root":(0,c.Z)((0,c.Z)({},p),{},{borderRadius:"8px"}),"& .MuiList-root":{padding:0}},children:n.map((function(t){var n=t.id,i=t.title,r=t.priority;return(0,I.jsx)(Y,{type:"button",$priority:r,onClick:e,children:i},n)}))})]})},X=function(t){var n=t.onChangeDate,e=t.value;return(0,I.jsx)("div",{style:{backgroundColor:"white",marginBottom:20},children:(0,I.jsx)(w._,{dateAdapter:x.H,children:(0,I.jsx)(y.C,{components:["DatePicker"],children:(0,I.jsx)(f.M,{label:'"month" and "year"',views:["month","year"],value:e,onChange:n})})})})},G=function(){var t=(0,m.useState)(new Date),n=(0,h.Z)(t,2),e=n[0],i=n[1],r=(0,m.useState)(!1),d=(0,h.Z)(r,2),o=d[0],a=d[1],s=(0,m.useState)(null),l=(0,h.Z)(s,2),u=l[0],p=l[1],c=(0,g.s0)(),y=D(),x=y.isMobile,w=y.isTablet,f=y.isDesktop,b=(0,m.useMemo)((function(){var t=(0,v.default)(e),n=(0,k.default)(e),i=(0,P.default)(new Date,"yyyy-MM-dd"),r=new Date(t,n+1,0).getDate(),d=new Date(t,n,1).getDay(),o=new Date(t,n,r).getDay();d=0===d?7:d,o=0===o?7:o;for(var a=[],s=1;s<d;s++)a.push({dayOfMonth:null,tasks:[]});for(var l=function(){var e=(0,P.default)(new Date(t,n,u),"yyyy-MM-dd"),r={dayOfMonth:u,fullDate:e,isCurrentDate:i===e,tasks:R.filter((function(t){return t.date===e}))};a.push(r)},u=1;u<=r;u++)l();for(var p=o;p<7;p++)a.push({dayOfMonth:null,tasks:[]});for(var c=[],h=0;h<a.length;h+=7)c.push(a.slice(h,h+7));return c}),[e]),Z=function(t){return function(){c("/calendar/day/".concat(t))}},j=function(t){return function(){p(t),a(!0)}};return(0,I.jsxs)(W,{children:[(0,I.jsx)(X,{onChangeDate:function(t){return i(t)},value:e}),(0,I.jsx)($,{children:b.map((function(t,n){return(0,I.jsx)(L,{children:t.map((function(t,n){var e,i=t.dayOfMonth,r=t.fullDate,d=t.tasks,o=t.isCurrentDate,a=function(t){return x?t.length>2?1:2:w?t.length>3?2:3:t.length>2?1:2}(d),s=null===i;return(0,I.jsxs)(E,{$isEmpty:s,onClick:s?function(){}:(e=r,function(t){t.target===t.currentTarget&&c("/calendar/day/".concat(e))}),children:[(0,I.jsxs)("div",{className:"disabled-hover",children:[(0,I.jsx)("div",{children:d.slice(0,a).map((function(t){return(0,I.jsx)(Y,{type:"button",$priority:t.priority,onClick:j(t),children:t.title},t.id)}))}),(d.length>2&&x||d.length>3&&w||d.length>2&&f)&&(0,I.jsx)(N,{tasks:d,onOpenTaskModal:j})]}),i&&(0,I.jsx)(O,{className:"container",$isCurrentDate:o,onClick:Z(r),children:(0,I.jsx)(S,{className:"value",$isCurrentDate:o,children:i})})]},n)}))},n)}))}),u&&(0,I.jsx)(M.K9,{isOpenModal:o,onCloseModal:function(){a(!1),p(null)},task:u})]})},A=function(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{children:"calendar"}),(0,I.jsx)(G,{})]})}}}]);
//# sourceMappingURL=865.6ae12cd1.chunk.js.map