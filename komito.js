(function(c,p,q){function L(d,a){var b=d.protocol[r](0,-1),e=d[t],f=d.hostname,c=/^https?$/.test(b),E=M[f.replace("www.","")],y=(e.match(N)||[""]).pop()[F](),O=y?~",mp3,mp4,wma,mov,avi,wmv,mkv,eot,woff,ttf,txt,csv,tsv,pdf,doc,docx,xls,xlsx,ppt,pptx,zip,tar,tgz,bz2,gz,rar,dmg,pkg,7z,ida,exe,sh,bat,"[z](","+y+","):0;h.trackOutbound&&c&&!~f[z](q.hostname)&&g(d,A,function(){k(0,"outbound",f,e,a);E&&k(1,E,"outbound",e)});h.trackDownloads&&O&&g(d,A,function(){k(0,"download",y,e)});h.trackActions&&!c&&g(d,
A,function(){k(0,b,e[r](b[m]+1).split("?")[0],q[t])})}function P(d,a){g(d,"submit",function(){for(var b=d.elements,e=0,c;e<b[m];)c=b[e++],c.name&&k(0,"form",d[B]("name")||d[B]("id")||"form "+a,c.name+":"+(c.type||c.tagName))})}function u(){u.a=u.a||0;var d={click:0,message:0},a,b;9>u.a++&&(c.twttr&&c.twttr.ready?c.__twitterIntentHandler||(g(c,C,function(e){try{"twitter.com"===e.origin[G](-11)&&e.data&&(b=c.JSON&&c.JSON.parse(e.data))&&"trigger"===b.method&&b.params&&(a=b.params[0],a in d||k(1,"Twitter",
a,q[t]))}catch(f){}}),c.twttr.ready(function(b){for(a in d)b.events.bind(a,function(){})}),c.__twitterIntentHandler=!0):setTimeout(u,5E3))}function v(){function d(a){k(1,"Facebook",a,q[t])}v.a=v.a||0;if(9>v.a++){var a=c.FB;if(a=a&&a.Event&&a.Event.subscribe)try{a("edge.create",function(){d("like")}),a("edge.remove",function(){d("unlike")}),a(C+".send",function(){d(C)})}catch(b){}else setTimeout(v,5E3)}}function Q(){function d(a,b){var d=["cb_onsuccess",b,+new Date].join("_");a.onsuccess=(a.onsuccess?
a.onsuccess+",":"")+d;c[d]=function(){k(1,"LinkedIn",b,q[t])}}for(var a=w("SCRIPT"),b=a[m],e=0,f,l;e<b;)f=a[e++],l=(f[B]("type")||"")[F](),!l[z]("in/")&&d(f,l[G](3))}function R(){function d(a,b){g(a,"load",function(){k(1,b,"status","logged in")});a.src=H[b]}function a(){c.FB&&c.FB.getLoginStatus?c.FB.getLoginStatus(function(a){a&&"connected"===a.status&&k(1,"Facebook","status","logged in");I("FB:",a)}):--b&&setTimeout(a,2E3)}var b=5,e;for(e in H)d(new Image(1,1),e);a()}function S(){function d(){k(0,
"print",p.title,q[t])}var a=c.matchMedia;(a=a&&a("print"))&&a.addListener(d);g(c,"afterprint",d)}function T(){function d(a){f=a.target||a.srcElement;l=f.currentSrc||f.src;k(0,f.tagName+":html5",a.type,l)}for(var a=U("AUDIO","VIDEO"),b=a[m]>>>0,c=0,f,l;c<b;)f=a[c++],g(f,"ended",d),g(f,"pause",d),g(f,"play",d);V()}function V(){function d(a){g=a.target||a.srcElement;k(0,"video:youtube",h[a.data],g.getVideoUrl())}for(var a=w("IFRAME"),b=a[m],e=0,f=/(https?:)?(www\.)?youtube\.com\/embed/,l=[],h=["finish",
"play","pause"],g;e<b;)g=a[e++],f.test(g.src)&&l.push(g);if(b=l[m])c.onYouTubePlayerAPIReady=function(){for(e=0;e<b;)new c.YT.Player(l[e++],{events:{onStateChange:d},playerVars:{enablejsapi:1}})},c.YT||(w("HEAD")[0].appendChild(p.createElement("SCRIPT")).src="//www.youtube.com/iframe_api")}function W(){var d={25:0,50:0,75:0,100:0},a=p.documentElement,b;g(c,"scroll",function(){(b=25*~~((a.scrollTop+p.body.scrollTop)/(a.scrollHeight-a.clientHeight)*100/25))&&!d[b]&&(d[b]=1,k(0,"scroll","depth",b+"%"))})}
function g(d,a,b){d[J]?d[J](a,b,!1):d.attachEvent("on"+a,b)}function k(d){var a=Array.prototype[r].call(arguments,0),b;a[0]=a[0]?D:"event";c[x]&&"function"===typeof c[x]&&(b=c[x].getAll&&c[x].getAll())&&n(b,"send",a);b=a;var e=c.TagLoader,f=c.s,l=[],g=1;if(e&&f&&f instanceof e){for(;g<b[m];g++)e="prop"+g,l.push(e),f[e]=b[g];f.linkTrackEvents="None";f.linkTrackVars=l.join(",");n([f],"tl",[f,"download"===b[1]?"d":"o",b[0]])}b=[].concat(a);D==b[0]&&(b[1]=D+":"+b.splice(2,1,b[1])[0]);b=b[r](1);n([c],
"ClickTaleEvent",[b.join(":")]);n([c],"__utmTrackEvent",b);c._hmt&&n([c._hmt],"push",[["_trackEvent"].concat(b)]);if(c._gat||c._gaq)b=c._gat&&c._gat._getTrackers&&c._gat._getTrackers(),a[0]={social:"_trackSocial",event:"_trackEvent"}[a[0]],b?n(b,a[0],a[r](1)):c._gaq&&n([c._gaq],"push",[a])}function n(d,a,b){var c=d[m]>>>0,f=0,g;for(I(a,b);f<c;)g=d[f++],g[a]&&"function"===typeof g[a]&&g[a].apply(g,b)}function I(d){var a=c.console;h.debugMode&&a&&a.log.apply(a,arguments)}function U(d){for(var a=[],
b=Array.prototype[r].call(arguments,0),c=0,c=0;c<b[m];)a.push.apply(a,w(b[c++]));return a}function w(c){return p.getElementsByTagName(c)}var K={trackTwitter:1,trackFacebook:1,trackLinkedIn:1,trackDownloads:1,trackOutbound:1,trackForms:1,trackUsers:1,trackActions:1,trackPrint:1,trackMedia:1,trackScroll:1,debugMode:0},M={"plus.google.com":"Google+","plus.url.google.com":"Google+","blogspot.com":"Blogger","facebook.com":"Facebook","on.fb.me":"Facebook","fb.me":"Facebook","fb.com":"Facebook","twitter.com":"Twitter",
"t.co":"Twitter","linkedin.com":"LinkedIn","myspace.com":"MySpace","vk.com":"VKontakte","odnoklassniki.ru":"Odnoklassniki","xing.com":"Xing","youtube.com":"YouTube","youtu.be":"YouTube","twoo.com":"Twoo","reddit.com":"Reddit","pinterest.com":"Pinterest","digg.com":"Digg","4sq.com":"Foursquare","foursquare.com":"Foursquare","hi.baidu.com":"Baidu Space"},H={Google:"https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;chtml=LoginDoneHtml&amp;checkedDomains=youtube&amp;checkConnection=youtube%3A291%3A1",
"Google+":"//plus.google.com/up/?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png",Twitter:"//twitter.com/login?redirect_after_login=https%3A%2F%2Fplatform.twitter.com%2Fwidgets%2Fimages%2Fbtn.png"},N=/\.([0-9a-z]+)(?:[\?#]|$)/i,x=c.GoogleAnalyticsObject||"ga",h=c._ega||c._komito||{},m="length",r="slice",t="href",B="getAttribute",z="indexOf",G="substr",F="toLowerCase",J="addEventListener",C="message",A="mousedown",D="social";(function(){var c=0,a=w("A"),b=a[m],
e;for(e in K)e in h||(h[e]=K[e]);for(;c<b;)L(a[c++],c);if(h.trackForms)for(a=p.forms,b=a[m],c=0;c<b;)P(a[c++],c);h.trackTwitter&&u();h.trackFacebook&&v();h.trackLinkedIn&&Q();h.trackUsers&&R();h.trackPrint&&S();h.trackMedia&&T();h.trackScroll&&W()})()})(window,document,location);
