(function(c,p,q){function L(d,a){var b=d.protocol[r](0,-1),e=d[t],c=d.hostname,g=/^https?$/.test(b),G=M[c.replace("www.","")],B=(e.match(N)||[""]).pop()[A](),O=B?~",mp3,mp4,wma,mov,avi,wmv,mkv,eot,woff,ttf,txt,csv,tsv,pdf,doc,docx,xls,xlsx,ppt,pptx,zip,tar,tgz,bz2,gz,rar,dmg,pkg,7z,ida,exe,sh,bat,"[x](","+B+","):0;h.trackOutbound&&g&&!~c[x](q.hostname)&&k(d,C,function(){l(0,"outbound",c,e,a);G&&l(1,G,"outbound",e)});h.trackDownloads&&O&&k(d,C,function(){l(0,"download",B,e)});h.trackActions&&!g&&k(d,
C,function(){l(0,b,e[r](b[m]+1).split("?")[0],q[t])})}function P(d,a){k(d,"submit",function(){for(var b=d.elements,e=0,c;e<b[m];)c=b[e++],c.name&&l(0,"form",d[D]("name")||d[D]("id")||"form "+a,c.name+":"+(c.type||c.tagName))})}function u(){u.a=u.a||0;var d={click:0,message:0},a,b;9>u.a++&&(c.twttr&&c.twttr.ready?c.__twitterIntentHandler||(k(c,y,function(e){try{"twitter.com"===e.origin[E](-11)&&e.data&&(b=c.JSON&&c.JSON.parse(e.data))&&"trigger"===b.method&&b.params&&(a=b.params[0],a in d||l(1,"Twitter",
a,q[t]))}catch(f){}}),c.twttr.ready(function(b){for(a in d)b.events.bind(a,function(){})}),c.__twitterIntentHandler=!0):setTimeout(u,5E3))}function v(){function d(a){l(1,"Facebook",a,q[t])}v.a=v.a||0;if(9>v.a++){var a=c.FB;if(a=a&&a.Event&&a.Event.subscribe)try{a("edge.create",function(){d("like")}),a("edge.remove",function(){d("unlike")}),a(y+".send",function(){d(y)})}catch(b){}else setTimeout(v,5E3)}}function Q(){function d(a,b){var d=["cb_onsuccess",b,+new Date].join("_");a.onsuccess=(a.onsuccess?
a.onsuccess+",":"")+d;c[d]=function(){l(1,"LinkedIn",b,q[t])}}for(var a=w("SCRIPT"),b=a[m],e=0,f,g;e<b;)f=a[e++],g=(f[D]("type")||"")[A](),!g[x]("in/")&&d(f,g[E](3))}function R(){function d(a,b){k(a,"load",function(){l(1,b,"status","logged in")});a.src=H[b]}function a(a){a(function(a){a&&"unknown"!==a.status&&!e++&&l(1,"Facebook","status","logged in");I("FB:",a)})}function b(){var d=c.FB&&c.FB.getLoginStatus;d?(a(d),k(c,y,function(b){try{"facebook.com"==b.origin[E](-12)&&b.data&&~b.data[x]("xd_action=proxy_ready")&&
a(d)}catch(c){}})):--f&&setTimeout(b,2E3)}var e=0,f=5,g;for(g in H)d(new Image(1,1),g);b()}function S(){function d(){l(0,"print",p.title,q[t])}var a=c.matchMedia;(a=a&&a("print"))&&a.addListener(d);k(c,"afterprint",d)}function T(){function d(a){f=a.target||a.srcElement;g=f.currentSrc||f.src;h=f.tagName[A]();l(0,+h+":html5",a.type,g)}for(var a=U("AUDIO","VIDEO"),b=a[m]>>>0,c=0,f,g,h;c<b;)f=a[c++],k(f,"ended",d),k(f,"pause",d),k(f,"play",d);V()}function V(){function d(a){k=a.target||a.srcElement;l(0,
"video:youtube",h[a.data],k.getVideoUrl())}for(var a=w("IFRAME"),b=a[m],e=0,f=/(https?:)?(www\.)?youtube\.com\/embed/,g=[],h=["finish","play","pause"],k;e<b;)k=a[e++],f.test(k.src)&&g.push(k);if(b=g[m])c.onYouTubePlayerAPIReady=function(){for(e=0;e<b;)new c.YT.Player(g[e++],{events:{onStateChange:d},playerVars:{enablejsapi:1}})},c.YT||(w("HEAD")[0].appendChild(p.createElement("SCRIPT")).src="//www.youtube.com/iframe_api")}function W(){var d={25:0,50:0,75:0,100:0},a=p.documentElement,b;k(c,"scroll",
function(){(b=25*~~((a.scrollTop+p.body.scrollTop)/(a.scrollHeight-a.clientHeight)*100/25))&&!d[b]&&(d[b]=1,l(0,"scroll","depth",b+"%"))})}function k(d,a,b){d[J]?d[J](a,b,!1):d.attachEvent("on"+a,b)}function l(d){var a=Array.prototype[r].call(arguments,0),b;a[0]=a[0]?F:"event";c[z]&&"function"===typeof c[z]&&(b=c[z].getAll&&c[z].getAll())&&n(b,"send",a);b=a;var e=c.TagLoader,f=c.s,g=[],h=1;if(e&&f&&f instanceof e){for(;h<b[m];h++)e="prop"+h,g.push(e),f[e]=b[h];f.linkTrackEvents="None";f.linkTrackVars=
g.join(",");n([f],"tl",[f,"download"===b[1]?"d":"o",b[0]])}b=[].concat(a);F==b[0]&&(b[1]=F+":"+b.splice(2,1,b[1])[0]);b=b[r](1);n([c],"ClickTaleEvent",[b.join(":")]);n([c],"__utmTrackEvent",b);c._hmt&&n([c._hmt],"push",[["_trackEvent"].concat(b)]);if(c._gat||c._gaq)b=c._gat&&c._gat._getTrackers&&c._gat._getTrackers(),a[0]={social:"_trackSocial",event:"_trackEvent"}[a[0]],b?n(b,a[0],a[r](1)):c._gaq&&n([c._gaq],"push",[a])}function n(d,a,b){var c=d[m]>>>0,f=0,g;for(I(a,b);f<c;)g=d[f++],g[a]&&"function"===
typeof g[a]&&g[a].apply(g,b)}function I(d){var a=c.console;h.debugMode&&a&&a.log.apply(a,arguments)}function U(d){for(var a=[],b=Array.prototype[r].call(arguments,0),c=0,c=0;c<b[m];)a.push.apply(a,w(b[c++]));return a}function w(d){return p.getElementsByTagName(d)}var K={trackTwitter:1,trackFacebook:1,trackLinkedIn:1,trackDownloads:1,trackOutbound:1,trackForms:1,trackUsers:1,trackActions:1,trackPrint:1,trackMedia:1,trackScroll:1,debugMode:0},M={"plus.google.com":"Google+","plus.url.google.com":"Google+",
"blogspot.com":"Blogger","facebook.com":"Facebook","on.fb.me":"Facebook","fb.me":"Facebook","fb.com":"Facebook","twitter.com":"Twitter","t.co":"Twitter","linkedin.com":"LinkedIn","myspace.com":"MySpace","vk.com":"VKontakte","odnoklassniki.ru":"Odnoklassniki","xing.com":"Xing","youtube.com":"YouTube","youtu.be":"YouTube","twoo.com":"Twoo","reddit.com":"Reddit","pinterest.com":"Pinterest","digg.com":"Digg","4sq.com":"Foursquare","foursquare.com":"Foursquare","hi.baidu.com":"Baidu Space"},H={Google:"https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;chtml=LoginDoneHtml&amp;checkedDomains=youtube&amp;checkConnection=youtube%3A291%3A1",
"Google+":"//plus.google.com/up/?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png",Twitter:"//twitter.com/login?redirect_after_login=https%3A%2F%2Fplatform.twitter.com%2Fwidgets%2Fimages%2Fbtn.png"},N=/\.([0-9a-z]+)(?:[\?#]|$)/i,z=c.GoogleAnalyticsObject||"ga",h=c._ega||c._komito||{},m="length",r="slice",t="href",D="getAttribute",x="indexOf",E="substr",A="toLowerCase",J="addEventListener",y="message",C="mousedown",F="social";(function(){var d=0,a=w("A"),b=a[m],
c;for(c in K)c in h||(h[c]=K[c]);for(;d<b;)L(a[d++],d);if(h.trackForms)for(a=p.forms,b=a[m],d=0;d<b;)P(a[d++],d);h.trackTwitter&&u();h.trackFacebook&&v();h.trackLinkedIn&&Q();h.trackUsers&&R();h.trackPrint&&S();h.trackMedia&&T();h.trackScroll&&W()})()})(window,document,location);
