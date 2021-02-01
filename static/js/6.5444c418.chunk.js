(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{154:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",s="week",a="month",o="quarter",c="year",u="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},$={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,a),s=n-r<0,o=e.clone().add(i+(s?-1:1),a);return+(-(i+(n-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:c,w:s,d:r,D:u,h:i,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",m={};m[p]=d;var g=function(t){return t instanceof M},b=function(t,e,n){var i;if(!t)return p;if("string"==typeof t)m[t]&&(i=t),e&&(m[t]=e,i=t);else{var r=t.name;m[r]=t,i=r}return!n&&i&&(p=i),i||!n&&p},j=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},v=$;v.l=b,v.i=g,v.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function d(t){this.$L=b(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return v},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return j(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<j(t)},f.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var h=this,l=!!v.u(o)||o,d=v.p(t),f=function(t,e){var n=v.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return l?n:n.endOf(r)},$=function(t,e){return v.w(h.toDate()[t].apply(h.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},p=this.$W,m=this.$M,g=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case c:return l?f(1,0):f(31,11);case a:return l?f(1,m):f(0,m+1);case s:var j=this.$locale().weekStart||0,M=(p<j?p+7:p)-j;return f(l?g-M:g+(6-M),m);case r:case u:return $(b+"Hours",0);case i:return $(b+"Minutes",1);case n:return $(b+"Seconds",2);case e:return $(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var h,l=v.p(s),d="set"+(this.$u?"UTC":""),f=(h={},h[r]=d+"Date",h[u]=d+"Date",h[a]=d+"Month",h[c]=d+"FullYear",h[i]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[l],$=l===r?this.$D+(o-this.$W):o;if(l===a||l===c){var p=this.clone().set(u,1);p.$d[f]($),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[v.p(t)]()},f.add=function(t,o){var u,h=this;t=Number(t);var l=v.p(o),d=function(e){var n=j(h);return v.w(n.date(n.date()+Math.round(e*t)),h)};if(l===a)return this.set(a,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===r)return d(1);if(l===s)return d(7);var f=(u={},u[n]=6e4,u[i]=36e5,u[e]=1e3,u)[l]||1,$=this.$d.getTime()+t*f;return v.w($,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=v.z(this),r=this.$locale(),s=this.$H,a=this.$m,o=this.$M,c=r.weekdays,u=r.months,h=function(t,i,r,s){return t&&(t[i]||t(e,n))||r[i].substr(0,s)},d=function(t){return v.s(s%12||12,t,"0")},f=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:v.s(o+1,2,"0"),MMM:h(r.monthsShort,o,u,3),MMMM:h(u,o),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:h(r.weekdaysMin,this.$W,c,2),ddd:h(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:v.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:i};return n.replace(l,(function(t,e){return e||$[t]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,h){var l,d=v.p(u),f=j(t),$=6e4*(f.utcOffset()-this.utcOffset()),p=this-f,m=v.m(this,f);return m=(l={},l[c]=m/12,l[a]=m,l[o]=m/3,l[s]=(p-$)/6048e5,l[r]=(p-$)/864e5,l[i]=p/36e5,l[n]=p/6e4,l[e]=p/1e3,l)[d]||p,h?m:v.a(m)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return v.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}(),y=M.prototype;return j.prototype=y,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",r],["$M",a],["$y",c],["$D",u]].forEach((function(t){y[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,M,j),t.$i=!0),j},j.locale=b,j.isDayjs=g,j.unix=function(t){return j(1e3*t)},j.en=m[p],j.Ls=m,j.p={},j}()},166:function(t,e,n){"use strict";n.r(e);var i=n(0),r=(n(1),n(5)),s=n(19),a=n(154),o=n.n(a),c=function(t){var e=t.data;return Object(i.jsx)("div",{className:"cell-container",children:Object(i.jsxs)("article",{className:"mini-post",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("a",{href:e.link,children:e.title})}),Object(i.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(i.jsx)("a",{href:e.link,className:"image",children:Object(i.jsx)("img",{src:"".concat("/Dinesh-Pandikona").concat(e.image),alt:e.title})}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("p",{children:e.desc})})]})})},u=[{title:"Socio",subtitle:"2019 December",link:"https://github.com/Tesla-Atoz/Social_Post_website",image:"/images/projects/Social_Post_website.png",date:"2019-9-1",desc:"A web application where a user can create a account, login, create, delete posts. It also enhances user to create groups and join other groups. It is basically authentication of user and performing CRUD operations over data."},{title:"News Aggregator with voice assistant",subtitle:"Alan-Ai and ReactJs",link:"https://react-alan-ai.netlify.app",image:"/images/projects/Alan-Ai.png",date:"2019-12-1",desc:"A web application where it collects and displays top news articles from various resources by categories (ex: Business, Entertainment), Terms (ex : Bitcoin, Smartphones) and also by sources (ex: CNN, BBC News). Navigation is enabled through a incredible voice assistant "},{title:"Customize Burger",subtitle:"Are you hungry? Just make a burger and place a order",link:"https://github.com/Tesla-Atoz/Burger_project",image:"/images/projects/burger.png",date:"2020-4-2",desc:"A web application where one can customize a burger themselves, place a order and check-out.(ex: A burger with 2cheese slices, bacon, 2 veg nuggets) "}];e.default=function(){return Object(i.jsx)(s.a,{title:"Projects",description:"Learn about Dinesh's projects.",children:Object(i.jsxs)("article",{className:"post",id:"projects",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(r.b,{to:"/projects",children:"Projects"})}),Object(i.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((function(t){return Object(i.jsx)(c,{data:t},t.title)}))]})})}}}]);
//# sourceMappingURL=6.5444c418.chunk.js.map