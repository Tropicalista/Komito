/* @license http://www.apache.org/licenses/LICENSE-2.0 */
(function(){
var f=document,h=window;function k(b,c,a){b.attachEvent?b.attachEvent("on"+c,a):b.addEventListener(c,a,!1)}function m(b,c,a){b.attachEvent?b.detachEvent("on"+c,a):b.removeEventListener(c,a,!1)}function n(b){b=b||h.event;return b.target||b.srcElement}
function p(b,c){var a=f.createElement("SCRIPT"),d=!1,e;a.src=b;a.onload=a.onreadystatechange=function(){e=a.readyState||"complete";d||"loaded"!==e&&"complete"!==e||(d=!0,a.onload=a.onreadystatechange=null,a.parentNode.removeChild(a),c&&c())};q.parentNode.appendChild(a)}var q,r=f&&f.getElementsByTagName("SCRIPT");q=r[r.length-1];var t=Array.prototype.slice;function u(b){return(h.JSON?JSON.parse(b):eval("("+b+")"))||null};var v={trackTwitter:1,trackFacebook:1,trackLinkedIn:1,trackDownloads:1,trackOutbound:1,trackForms:1,trackUsers:1,trackActions:1,trackPrint:1,trackMedia:1,trackScroll:1,debugMode:/[?&]debug=1/.test(location.search)},w=/\.([0-9a-z]+)(?:[\?#]|$)/i,x=h.GoogleAnalyticsObject||"ga";
function y(b){var c,a=c=arguments,d=Array.isArray;c=(d?d(a):"[object Array]"===Object.prototype.toString.call(a))?c:t.call(c);c[0]=c[0]?"social":"event";"function"===typeof h[x]&&(a=h[x].getAll&&h[x].getAll(),d=c[1].indexOf("video")?c:c.concat([{nonInteraction:1}]),a&&z(a,"send",d));var a=c,e=h.TagLoader,d=h.s,g=[],l=1;if(e&&d&&d instanceof e){for(;l<a.length;l++)e="prop"+l,g.push(e),d[e]=a[l];d.linkTrackEvents="None";d.linkTrackVars=g.join(",");z([d],"tl",[d,"download"===a[1]?"d":"o",a[0]])}a=[].concat(c);
"social"==a[0]&&(a[1]="social:"+a.splice(2,1,a[1])[0]);a=a.slice(1);z([h],"ClickTaleEvent",[a.join(":")]);z([h],"__utmTrackEvent",a);h._hmt&&z([h._hmt],"push",[["_trackEvent"].concat(a)]);a=c;if(h._gat||h._gaq)c=h._gat&&h._gat._getTrackers&&h._gat._getTrackers(),a=a[1].indexOf("video")?a:a.concat([1]),a[0]={social:"_trackSocial",event:"_trackEvent"}[a[0]],c?z(c,a[0],a.slice(1)):h._gaq&&z([h._gaq],"push",[a])}
function z(b,c,a){var d=b.length,e;for(A(c,a);d;)e=b[--d],"function"===typeof e[c]&&e[c].apply(e,a)}function A(b){var c=h.console;B.debugMode&&c&&c.log.apply(c,arguments)}var B=h._komito||{},C;for(C in v)C in B||(B[C]=v[C]);if(D&&B.trackForms)for(var E=f.forms,F=E.length;F;)k(E[--F],"submit",G);
if(H)for(var I=f&&f.getElementsByTagName("A"),J=I.length;J;){var K=I[--J],L=/^https?:$/.test(K.protocol),N=(M(K).match(w)||[""]).pop().toLowerCase();B.trackOutbound&&L&&!~K.hostname.indexOf(location.hostname)&&k(K,"mousedown",O);B.trackDownloads&&N&&~",mp3,mp4,wma,mov,avi,wmv,mkv,eot,woff,ttf,txt,csv,tsv,pdf,doc,docx,xls,xlsx,ppt,pptx,zip,tar,tgz,bz2,gz,rar,dmg,pkg,7z,ida,exe,sh,bat,".indexOf(","+N+",")&&k(K,"mousedown",P);B.trackActions&&!L&&k(K,"mousedown",Q)}R&&S();T&&U();
B.trackMedia&&(V&&aa(),ba&&ca(),da&&ea());var W={trackFacebook:fa,trackLinkedIn:ga,trackTwitter:ha,trackUsers:ia},X;for(X in W)B[X]&&new W[X];function G(b){b=n(b);for(var c=b.elements,a=c.length,d=0,e;d<a;)e=c[d++],e.name&&y(0,"form",b.getAttribute("name")||b.getAttribute("id")||"form",e.name+":"+(e.type||e.tagName));m(b,"submit",G)}var D={};var ja={"plus.google.com":"Google+","plus.url.google.com":"Google+","blogspot.com":"Blogger","facebook.com":"Facebook","on.fb.me":"Facebook","fb.me":"Facebook","fb.com":"Facebook","twitter.com":"Twitter","t.co":"Twitter","linkedin.com":"LinkedIn","myspace.com":"MySpace","vk.com":"VKontakte","odnoklassniki.ru":"Odnoklassniki","xing.com":"Xing","youtube.com":"YouTube","youtu.be":"YouTube","twoo.com":"Twoo","reddit.com":"Reddit","pinterest.com":"Pinterest","digg.com":"Digg","4sq.com":"Foursquare","foursquare.com":"Foursquare",
"hi.baidu.com":"Baidu Space"};function O(b){b=Y(b);var c="outbound",a=b.hostname,d=b.pathname.split("/"),e=M(b),g=null;try{g=ja[a.replace(/^www\./,"")]}catch(l){}y(0,c,a,e);g&&("twitter.com"===a.substr(-11)&&"intent"===d[d.length-2]&&(c="intent-"+d.pop()),y(1,g,c,e));m(b,"mousedown",O)}function P(b){b=Y(b);var c=M(b),a=(c.match(w)||[""]).pop().toLowerCase();y(0,"download",a,c);m(b,"mousedown",P)}
function Q(b){b=Y(b);var c=b.protocol.slice(0,-1),a=M(b),d=a.slice(c.length+1).split("?")[0];y(0,"cta:"+c,d,a);m(b,"mousedown",Q)}function Y(b){for(b=n(b);b&&"A"!==b.tagName;)b=b.parentNode;return b}function M(b){return b.href||b.getAttribute("href")}var H={};function S(){if(B.trackPrint){var b=function(){y(0,"print",f.title,location.href);a&&a.removeListener(b);m(h,"afterprint",b);b=null},c=h.matchMedia,a=c&&c("print");a&&a.addListener(b);k(h,"afterprint",b)}}var R={};function U(){if(B.trackScroll){var b={25:0,50:0,75:0,100:0},c=f.documentElement,a;k(h,"scroll",function(){(a=25*~~((c.scrollTop+f.body.scrollTop)/(c.scrollHeight-c.clientHeight)*100/25))&&!b[a]&&(b[a]=1,y(0,"scroll","depth",a+"%"))})}}var T={};function aa(){function b(a){e=n(a);g=a.type;~g.indexOf("fullscreen")&&(g=f.fullScreen||f.mozFullScreen||f.webkitIsFullScreen?"fullscreen":"");g&&y(0,e.tagName.toLowerCase()+":html5",g,e.currentSrc||e.src)}for(var c="ended pause play webkitfullscreenchange mozfullscreenchange fullscreenchange".split(" "),a=ka("AUDIO","VIDEO"),d=a.length,e,g,l;d--;)for(e=a[d],l=0;6>l;)k(e,c[l++],b)}
function ka(b){for(var c=[],a=arguments.length,d,e;a;)for(d=arguments[--a],d=f&&f.getElementsByTagName(d),e=0;e<d.length;)c.push(d[e++]);return c}var V={};var la=/^(https?:)?\/\/player\.vimeo\.com\/video\/\d+/;function ea(){for(var b=f&&f.getElementsByTagName("IFRAME"),c=b.length,a=[],d;c;)d=b[--c],la.test(d.src)&&a.push(d);a.length&&(h.Vimeo&&h.Vimeo.Player?Z(a):p("https://player.vimeo.com/api/player.js",function(){Z(a)}))}function Z(b){var c=h.Vimeo&&h.Vimeo.Player;if(c)for(var a=b.length,d;a;)d=b[--a],ma(new c(d),d.src.split("?")[0])}
function ma(b,c){b.on("ended",function(){y(0,"video:vimeo","ended",c)});b.on("play",function(){y(0,"video:vimeo","play",c)});b.on("pause",function(){y(0,"video:vimeo","pause",c)})}var da={};var na=/^(https?:)?\/\/(www\.)?youtube(\-nocookie)?\.com\/(embed|watch|v)/;function ca(){for(var b=f&&f.getElementsByTagName("IFRAME"),c=b.length,a=0,d=[],e,g;a<c;)e=b[a++],g=e.src,na.test(g)&&(0>g.indexOf("enablejsapi")&&(e.src+=(~g.indexOf("?")?"&":"?")+"enablejsapi=1"),d.push(e));if(c=d.length)h.onYouTubeIframeAPIReady=function(){for(a=0;a<c;)k(new h.YT.Player(d[a++]),"onStateChange",oa)},h.YT||p("https://www.youtube.com/iframe_api")}
function oa(b){var c=["ended","play","pause"][b.data];c&&y(0,"video:youtube",c,b.target.getVideoUrl())}var ba={};function fa(){function b(){if(9>a++){var d=h.FB;if(d=d&&d.Event&&d.Event.subscribe)try{d("edge.create",function(){c("like")}),d("edge.remove",function(){c("unlike")}),d("message.send",function(){c("message")})}catch(e){}else setTimeout(b,5E3)}}function c(a){y(1,"Facebook",a,location.href)}var a=0;b()};function ga(){function b(b,a){var c=["cb_onsuccess",a,+new Date].join("_");b.onsuccess=(b.onsuccess?b.onsuccess+",":"")+c;h[c]=function(){y(1,"LinkedIn",a,location.href)}}(function(){for(var c=f&&f.getElementsByTagName("SCRIPT"),a=c.length,d=0,e,g;d<a;)e=c[d++],g=(e.getAttribute("type")||"").toLowerCase(),g.indexOf("in/")||b(e,g.substr(3))})()};function ha(){function b(){var a={},d,e,g;9>c++&&(h.twttr&&h.twttr.ready?h.__twitterIntentHandler||(k(h,"message",function(b){try{"twitter.com"===b.origin.substr(-11)&&b.data&&(g=(e=u(b.data))&&e.params)&&"trigger"===e.method&&(d=g[0],"click"===d&&g[1]&&(d+="-"+g[1].region),a[d]||(a[d]=1,y(1,"Twitter",d,location.href)))}catch(pa){}}),h.twttr.ready(function(a){a.events.bind("message",function(){})}),h.__twitterIntentHandler=!0):setTimeout(b,5E3))}var c=0;b()};function ia(){var b={Google:"https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;chtml=LoginDoneHtml&amp;checkedDomains=youtube&amp;checkConnection=youtube%3A291%3A1","Google+":"https://plus.google.com/up/?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png",Twitter:"https://twitter.com/login?redirect_after_login=https%3A%2F%2Fplatform.twitter.com%2Fwidgets%2Fimages%2Fbtn.png"};
(function(){function c(a,c){k(a,"load",function(){y(1,c,"pageview",location.href)});a.src=b[c]}function a(a){a(function(a){a&&"unknown"!==a.status&&!e++&&y(1,"Facebook","pageview",location.href)})}function d(){var b=h.FB&&h.FB.getLoginStatus;b?(a(b),k(h,"message",function(c){try{"facebook.com"===c.origin.substr(-12)&&c.data&&~c.data.indexOf("xd_action=proxy_ready")&&a(b)}catch(qa){}})):--g&&setTimeout(d,2E3)}var e=0,g=5,l;for(l in b)c(new Image(1,1),l);d()})()};
})();