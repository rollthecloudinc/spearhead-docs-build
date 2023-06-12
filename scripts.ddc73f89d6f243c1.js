#!/usr/bin/env node
import{promises as Y}from"fs";import{marked as L}from"../lib/marked.esm.js";const{readFile:B,writeFile:K}=Y;async function Q(){const{spawn:s}=await import("child_process"),g={cwd:process.cwd(),env:process.env,setsid:!1,stdio:"inherit"},{dirname:d,resolve:f}=await import("path"),{fileURLToPath:i}=await import("url"),m=d(i(import.meta.url)),w=await B(f(m,"../man/marked.1.txt"),"utf8");await new Promise($=>{s("man",[f(m,"../man/marked.1")],g).on("error",()=>{console.log(w)}).on("close",$)})}async function V(){const{createRequire:s}=await import("module"),d=s(import.meta.url)("../package.json");console.log(d.version)}async function ee(s){const g=[],d={};let f,i,m,w,$,x;function S(){let c=s.shift();return 0===c.indexOf("--")?(c=c.split("="),c.length>1&&s.unshift(c.slice(1).join("=")),c=c[0]):"-"===c[0]&&c.length>2&&(s=c.substring(1).split("").map(function(b){return"-"+b}).concat(s),c=s.shift()),c}for(;s.length;)switch(w=S(),w){case"-o":case"--output":i=s.shift();break;case"-i":case"--input":f=s.shift();break;case"-s":case"--string":m=s.shift();break;case"-t":case"--tokens":$=!0;break;case"-h":case"--help":return await Q();case"-v":case"--version":return await V();default:if(0===w.indexOf("--")){if(x=ne(w.replace(/^--(no-)?/,"")),!L.defaults.hasOwnProperty(x))continue;d[x]=0===w.indexOf("--no-")?"boolean"!=typeof L.defaults[x]&&null:"boolean"==typeof L.defaults[x]||s.shift()}else g.push(w)}const T=await async function C(){if(!f){if(g.length<=2)return m||await te();f=g.pop()}return await B(f,"utf8")}(),v=$?JSON.stringify(L.lexer(T,d),null,2):L(T,d);if(i)return await K(i,v);process.stdout.write(v+"\n")}function te(){return new Promise((s,g)=>{const d=process.stdin;let f="";d.setEncoding("utf8"),d.on("data",function(i){f+=i}),d.on("error",function(i){g(i)}),d.on("end",function(){s(f)}),d.resume()})}function ne(s){return s.replace(/(\w)-(\w)/g,function(g,d,f){return d+f.toUpperCase()})}function ae(s){if("ENOENT"===s.code)return console.error("marked: output to "+s.path+": No such directory"),process.exit(1);throw s}process.title="marked",ee(process.argv.slice()).then(s=>{process.exit(s||0)}).catch(s=>{ae(s)});var re=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},u=function(s){var g=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,f={},i={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof m?new m(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++d}),t.__id},clone:function t(e,n){var a,r;switch(n=n||{},i.util.type(e)){case"Object":if(r=i.util.objId(e),n[r])return n[r];for(var o in n[r]=a={},e)e.hasOwnProperty(o)&&(a[o]=t(e[o],n));return a;case"Array":return r=i.util.objId(e),n[r]?n[r]:(n[r]=a=[],e.forEach(function(p,l){a[l]=t(p,n)}),a);default:return e}},getLanguage:function(t){for(;t;){var e=g.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(g,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var a="no-"+e;t;){var r=t.classList;if(r.contains(e))return!0;if(r.contains(a))return!1;t=t.parentElement}return!!n}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(t,e){var n=i.util.clone(i.languages[t]);for(var a in e)n[a]=e[a];return n},insertBefore:function(t,e,n,a){var r=(a=a||i.languages)[t],o={};for(var p in r)if(r.hasOwnProperty(p)){if(p==e)for(var l in n)n.hasOwnProperty(l)&&(o[l]=n[l]);n.hasOwnProperty(p)||(o[p]=r[p])}var h=a[t];return a[t]=o,i.languages.DFS(i.languages,function(y,E){E===h&&y!=t&&(this[y]=o)}),o},DFS:function t(e,n,a,r){r=r||{};var o=i.util.objId;for(var p in e)if(e.hasOwnProperty(p)){n.call(e,p,e[p],a||p);var l=e[p],h=i.util.type(l);"Object"!==h||r[o(l)]?"Array"===h&&!r[o(l)]&&(r[o(l)]=!0,t(l,n,p,r)):(r[o(l)]=!0,t(l,n,null,r))}}},plugins:{},highlightAll:function(t,e){i.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var a={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),i.hooks.run("before-all-elements-highlight",a);for(var o,r=0;o=a.elements[r++];)i.highlightElement(o,!0===e,a.callback)},highlightElement:function(t,e,n){var a=i.util.getLanguage(t),r=i.languages[a];i.util.setLanguage(t,a);var o=t.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&i.util.setLanguage(o,a);var l={element:t,language:a,grammar:r,code:t.textContent};function h(E){l.highlightedCode=E,i.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,i.hooks.run("after-highlight",l),i.hooks.run("complete",l),n&&n.call(l.element)}if(i.hooks.run("before-sanity-check",l),(o=l.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!l.code)return i.hooks.run("complete",l),void(n&&n.call(l.element));if(i.hooks.run("before-highlight",l),l.grammar)if(e&&s.Worker){var y=new Worker(i.filename);y.onmessage=function(E){h(E.data)},y.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else h(i.highlight(l.code,l.grammar,l.language));else h(i.util.encode(l.code))},highlight:function(t,e,n){var a={code:t,grammar:e,language:n};if(i.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=i.tokenize(a.code,a.grammar),i.hooks.run("after-tokenize",a),m.stringify(i.util.encode(a.tokens),a.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var a in n)e[a]=n[a];delete e.rest}var r=new x;return S(r,r.head,t),$(t,r,e,r.head,0),function T(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}(r)},hooks:{all:{},add:function(t,e){var n=i.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=i.hooks.all[t];if(n&&n.length)for(var r,a=0;r=n[a++];)r(e)}},Token:m};function m(t,e,n,a){this.type=t,this.content=e,this.alias=n,this.length=0|(a||"").length}function w(t,e,n,a){t.lastIndex=e;var r=t.exec(n);if(r&&a&&r[1]){var o=r[1].length;r.index+=o,r[0]=r[0].slice(o)}return r}function $(t,e,n,a,r,o){for(var p in n)if(n.hasOwnProperty(p)&&n[p]){var l=n[p];l=Array.isArray(l)?l:[l];for(var h=0;h<l.length;++h){if(o&&o.cause==p+","+h)return;var y=l[h],E=y.inside,Z=!!y.lookbehind,H=!!y.greedy,W=y.alias;if(H&&!y.pattern.global){var N=y.pattern.toString().match(/[imsuy]*$/)[0];y.pattern=RegExp(y.pattern.source,N+"g")}for(var U=y.pattern||y,F=a.next,k=r;F!==e.tail&&!(o&&k>=o.reach);k+=F.value.length,F=F.next){var z=F.value;if(e.length>t.length)return;if(!(z instanceof m)){var A,O=1;if(H){if(!(A=w(U,k,t,Z))||A.index>=t.length)break;var R=A.index,J=A.index+A[0].length,_=k;for(_+=F.value.length;R>=_;)_+=(F=F.next).value.length;if(k=_-=F.value.length,F.value instanceof m)continue;for(var P=F;P!==e.tail&&(_<J||"string"==typeof P.value);P=P.next)O++,_+=P.value.length;O--,z=t.slice(k,_),A.index-=k}else if(!(A=w(U,0,z,Z)))continue;var I=A[0],D=z.slice(0,R=A.index),G=z.slice(R+I.length),M=k+z.length;o&&M>o.reach&&(o.reach=M);var j=F.prev;if(D&&(j=S(e,j,D),k+=D.length),C(e,j,O),F=S(e,j,new m(p,E?i.tokenize(I,E):I,W,I)),G&&S(e,F,G),O>1){var q={cause:p+","+h,reach:M};$(t,e,n,F.prev,k,q),o&&q.reach>o.reach&&(o.reach=q.reach)}}}}}}function x(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function S(t,e,n){var a=e.next,r={value:n,prev:e,next:a};return e.next=r,a.prev=r,t.length++,r}function C(t,e,n){for(var a=e.next,r=0;r<n&&a!==t.tail;r++)a=a.next;e.next=a,a.prev=e,t.length-=r}if(s.Prism=i,m.stringify=function t(e,n){if("string"==typeof e)return e;if(Array.isArray(e)){var a="";return e.forEach(function(h){a+=t(h,n)}),a}var r={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},o=e.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(r.classes,o):r.classes.push(o)),i.hooks.run("wrap",r);var p="";for(var l in r.attributes)p+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+p+">"+r.content+"</"+r.tag+">"},!s.document)return s.addEventListener&&(i.disableWorkerMessageHandler||s.addEventListener("message",function(t){var e=JSON.parse(t.data),n=e.language,r=e.immediateClose;s.postMessage(i.highlight(e.code,i.languages[n],n)),r&&s.close()},!1)),i;var v=i.util.currentScript();function c(){i.manual||i.highlightAll()}if(v&&(i.filename=v.src,v.hasAttribute("data-manual")&&(i.manual=!0)),!i.manual){var b=document.readyState;"loading"===b||"interactive"===b&&v&&v.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return i}(re);typeof module<"u"&&module.exports&&(module.exports=u),typeof global<"u"&&(global.Prism=u),u.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},u.languages.markup.tag.inside["attr-value"].inside.entity=u.languages.markup.entity,u.languages.markup.doctype.inside["internal-subset"].inside=u.languages.markup,u.hooks.add("wrap",function(s){"entity"===s.type&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(u.languages.markup.tag,"addInlined",{value:function(g,d){var f={};f["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:u.languages[d]},f.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:f}};i["language-"+d]={pattern:/[\s\S]+/,inside:u.languages[d]};var m={};m[g]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return g}),"i"),lookbehind:!0,greedy:!0,inside:i},u.languages.insertBefore("markup","cdata",m)}}),Object.defineProperty(u.languages.markup.tag,"addAttribute",{value:function(s,g){u.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[g,"language-"+g],inside:u.languages[g]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),u.languages.html=u.languages.markup,u.languages.mathml=u.languages.markup,u.languages.svg=u.languages.markup,u.languages.xml=u.languages.extend("markup",{}),u.languages.ssml=u.languages.xml,u.languages.atom=u.languages.xml,u.languages.rss=u.languages.xml,function(s){var g=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+g.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+g.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+g.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+g.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:g,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var d=s.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(u),u.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},u.languages.javascript=u.languages.extend("clike",{"class-name":[u.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),u.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,u.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:u.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:u.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:u.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:u.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:u.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),u.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:u.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),u.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),u.languages.markup&&(u.languages.markup.tag.addInlined("script","javascript"),u.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),u.languages.js=u.languages.javascript,function(){if(!(typeof u>"u"||typeof document>"u")){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var f={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",m="loading",w="loaded",x="pre[data-src]:not(["+i+'="'+w+'"]):not(['+i+'="'+m+'"])';u.hooks.add("before-highlightall",function(v){v.selector+=", "+x}),u.hooks.add("before-sanity-check",function(v){var c=v.element;if(c.matches(x)){v.code="",c.setAttribute(i,m);var b=c.appendChild(document.createElement("CODE"));b.textContent="Loading\u2026";var t=c.getAttribute("data-src"),e=v.language;if("none"===e){var n=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=f[n]||n}u.util.setLanguage(b,e),u.util.setLanguage(c,e);var a=u.plugins.autoloader;a&&a.loadLanguages(e),function S(v,c,b){var t=new XMLHttpRequest;t.open("GET",v,!0),t.onreadystatechange=function(){4==t.readyState&&(t.status<400&&t.responseText?c(t.responseText):b(t.status>=400?function(v,c){return"\u2716 Error "+v+" while fetching file: "+c}(t.status,t.statusText):"\u2716 Error: File does not exist or is empty"))},t.send(null)}(t,function(r){c.setAttribute(i,w);var o=function C(v){var c=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(c){var b=Number(c[1]),e=c[3];return c[2]?e?[b,Number(e)]:[b,void 0]:[b,b]}}(c.getAttribute("data-range"));if(o){var p=r.split(/\r\n?|\n/g),l=o[0],h=null==o[1]?p.length:o[1];l<0&&(l+=p.length),l=Math.max(0,Math.min(l-1,p.length)),h<0&&(h+=p.length),h=Math.max(0,Math.min(h,p.length)),r=p.slice(l,h).join("\n"),c.hasAttribute("data-start")||c.setAttribute("data-start",String(l+1))}b.textContent=r,u.highlightElement(b)},function(r){c.setAttribute(i,"failed"),b.textContent=r})}}),u.plugins.fileHighlight={highlight:function(c){for(var e,b=(c||document).querySelectorAll(x),t=0;e=b[t++];)u.highlightElement(e)}};var T=!1;u.fileHighlight=function(){T||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),T=!0),u.plugins.fileHighlight.highlight.apply(this,arguments)}}}(),u.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},u.languages.webmanifest=u.languages.json,function(s){s.languages.typescript=s.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),s.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete s.languages.typescript.parameter,delete s.languages.typescript["literal-property"];var g=s.languages.extend("typescript",{});delete g["class-name"],s.languages.typescript["class-name"].inside=g,s.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:g}}}}),s.languages.ts=s.languages.typescript}(u),function(s){var g=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|"+g.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+g.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+g.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+g.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:g,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var d=s.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(u);
//# sourceMappingURL=scripts.ddc73f89d6f243c1.js.map