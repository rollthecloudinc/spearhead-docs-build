(self.webpackChunkspear=self.webpackChunkspear||[]).push([[306],{9188:(V,R)=>{function L(o){return o.replace(/[-[\]/{}()*+?.\\^$]/g,"\\$&")}function x(o,s){var l=(void 0===s?{}:s).decimalMark,M=void 0===l?".":l;if("number"==typeof o)return o.toString();if("string"!=typeof o)return"NaN";var _=L(M),p=o.trim(),P=p.match(/^\(.*\)$|^-/),C=new RegExp("[^\\d"+_+"]|"+_+"(?=.*"+_+")|^\\D*"+_+"\\D*$","g");return""===(p=p.replace(C,"").replace(M,"."))?p="NaN":P&&(p="-"+p),p}R.He=void 0,R.He=function T(o,s){var l=(void 0===s?{}:s).decimalMark,_=x(o,{decimalMark:void 0===l?".":l});return"NaN"===_?NaN:Number(_)}},6306:(V,R,d)=>{d.r(R),d.d(R,{AsyncApiCallHelperService:()=>O,DynamicContentViewer:()=>D,EMBEDDABLE_COMPONENT:()=>p,ForDirective:()=>k,HOST_NAME:()=>C,ModuleLoaderService:()=>E,MyAsyncTaskProcessor:()=>b,NoopDataService:()=>w,NotAvailablePipe:()=>_,NumeralPipe:()=>M,PROTOCOL:()=>S,SITE_NAME:()=>P,StyleLoaderService:()=>I,UtilsModule:()=>v,ZoneMacroTaskWrapper:()=>h});var L=d(136),x=d(8486),T=d(7762),m=d(5671),y=d(3144),i=d(6718),o=d(4055),s=d(9188),u=d(9751),l=d(9646),M=function(){var e=function(){function n(){(0,m.Z)(this,n)}return(0,y.Z)(n,[{key:"transform",value:function(r,c){if(void 0!==r&&""!==r)return(0,s.He)("".concat(r))}}]),n}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=i.\u0275\u0275definePipe({name:"numeral",type:e,pure:!0}),e}(),_=function(){var e=function(){function n(){(0,m.Z)(this,n)}return(0,y.Z)(n,[{key:"transform",value:function(r,c){return r&&""!==r?r:c}}]),n}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=i.\u0275\u0275definePipe({name:"na",type:e,pure:!0}),e}(),p=new i.InjectionToken("EmbeddableComponent"),P=new i.InjectionToken("Site Name"),C=new i.InjectionToken("Host Name"),S=new i.InjectionToken("Request Protocol"),D=function(){var e=function(){function n(t,r,c,f){var a=this;(0,m.Z)(this,n),this.injector=f,this.embeddedComponentFactories=new Map,this.embeddedComponents=[],this.docRendered=new i.EventEmitter,this.hostElement=r.nativeElement,c.forEach(function(g){var N=t.resolveComponentFactory(g);a.embeddedComponentFactories.set(N.selector,N)})}return(0,y.Z)(n,[{key:"content",set:function(r){this.ngOnDestroy(),r&&(this.build(r),this.docRendered.emit())}},{key:"build",value:function(r){var c=this;this.hostElement.innerHTML=r||"",r&&this.embeddedComponentFactories.forEach(function(f,a){c.hostElement.querySelectorAll(a).forEach(function(N){var F,Z=[Array.prototype.slice.call(N.childNodes)],B=f.create(c.injector,Z,N),j=(0,T.Z)(N.attributes);try{for(j.s();!(F=j.n()).done;){var U=F.value;B.instance[U.nodeName]=U.nodeValue}}catch(W){j.e(W)}finally{j.f()}c.embeddedComponents.push(B)})})}},{key:"ngDoCheck",value:function(){this.embeddedComponents.forEach(function(r){return r.changeDetectorRef.detectChanges()})}},{key:"ngOnDestroy",value:function(){this.embeddedComponents.forEach(function(r){return r.destroy()}),this.embeddedComponents.length=0}}]),n}();return e.\u0275fac=function(t){return new(t||e)(i.\u0275\u0275directiveInject(i.ComponentFactoryResolver),i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(p),i.\u0275\u0275directiveInject(i.Injector))},e.\u0275cmp=i.\u0275\u0275defineComponent({type:e,selectors:[["classifieds-ui-dynamic-content-viewer"]],inputs:{data:"data",content:"content"},outputs:{docRendered:"docRendered"},decls:0,vars:0,template:function(t,r){},encapsulation:2}),e}(),A=function(){function e(n,t){(0,m.Z)(this,e),this.index=n,this.length=t}return(0,y.Z)(e,[{key:"even",get:function(){return this.index%2==0}},{key:"odd",get:function(){return this.index%2==1}},{key:"first",get:function(){return 0===this.index}},{key:"last",get:function(){return this.index===this.length-1}}]),e}(),k=function(){var e=function(){function n(t,r){(0,m.Z)(this,n),this.templateRef=t,this.viewContainer=r}return(0,y.Z)(n,[{key:"loop",set:function(r){this.viewContainer.clear();for(var c=0;c<r;c++)this.viewContainer.createEmbeddedView(this.templateRef,new A(c,r))}}]),n}();return e.\u0275fac=function(t){return new(t||e)(i.\u0275\u0275directiveInject(i.TemplateRef),i.\u0275\u0275directiveInject(i.ViewContainerRef))},e.\u0275dir=i.\u0275\u0275defineDirective({type:e,selectors:[["","for","",5,"label"]],inputs:{loop:["for","loop"]}}),e}(),v=function(){var e=(0,y.Z)(function n(){(0,m.Z)(this,n)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=i.\u0275\u0275defineInjector({imports:[o.CommonModule]}),e}(),E=function(){var e=function(){function n(t,r){(0,m.Z)(this,n),this.compiler=t,this.injector=r,this.loadedModules=[]}return(0,y.Z)(n,[{key:"loadModule",value:function(r){var c=this;return new u.y(function(f){r().then(function(a){if(-1!==c.loadedModules.indexOf(function(g){return g==a.name}))throw"";return c.loadedModules.push(a.name),a}).then(function(a){return c.compiler.compileModuleAndAllComponentsAsync(a)}).then(function(a){a.ngModuleFactory.create(c.injector),f.next(!0),f.complete()}).catch(function(){f.next(!0),f.complete()})})}}]),n}();return e.\u0275fac=function(t){return new(t||e)(i.\u0275\u0275inject(i.Compiler),i.\u0275\u0275inject(i.Injector))},e.\u0275prov=i.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),I=function(){var e=function(){function n(t){(0,m.Z)(this,n),this.document=t}return(0,y.Z)(n,[{key:"loadStyle",value:function(r){var c=this.document.getElementsByTagName("head")[0],f=this.document.getElementById("client-theme");if(f)f.href=r;else{var a=this.document.createElement("link");a.id="client-theme",a.rel="stylesheet",a.href="".concat(r),c.appendChild(a)}}}]),n}();return e.\u0275fac=function(t){return new(t||e)(i.\u0275\u0275inject(o.DOCUMENT))},e.\u0275prov=i.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),w=function(){function e(n){(0,m.Z)(this,e),this.entities=new Map,this.name=n}return(0,y.Z)(e,[{key:"add",value:function(t){return(0,l.of)(t)}},{key:"delete",value:function(t){return this.entities.delete(t),(0,l.of)(t)}},{key:"getAll",value:function(){var t=[];return this.entities.forEach(function(r){t.push(r)}),(0,l.of)(t)}},{key:"getById",value:function(t){return(0,l.of)(this.entities.get(t))}},{key:"getWithQuery",value:function(t){var r=[];return this.entities.forEach(function(c){r.push(c)}),(0,l.of)(r)}},{key:"update",value:function(t){return(0,l.of)(void 0)}},{key:"upsert",value:function(t){return(0,l.of)(t)}}]),e}(),O=function(){var e=function(){function n(){(0,m.Z)(this,n),this.taskProcessor=new b}return(0,y.Z)(n,[{key:"doTask",value:function(r){return this.taskProcessor.doTask(r)}}]),n}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),h=function(){function e(){(0,m.Z)(this,e)}return(0,y.Z)(e,[{key:"wrap",value:function(t){var r=this;return new u.y(function(c){var f,a=!1,g=null,N=null,Z=null;return function(K){f=K,a=!0;var $=r.delegate(t);g=$.subscribe(function(H){return N=H},function(H){if(!a)throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug.");Z=H,a=!1,f.invoke()},function(){if(!a)throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug.");a=!1,f.invoke()})}(Zone.current.scheduleMacroTask("ZoneMacroTaskWrapper.subscribe",function(){null!==Z?c.error(Z):(c.next(N),c.complete())},{},function(){return null},function(K){a&&(a=!1,g&&(g.unsubscribe(),g=null))})),function(){a&&f&&(f.zone.cancelTask(f),a=!1),g&&(g.unsubscribe(),g=null)}})}}]),e}(),b=function(e){(0,L.Z)(t,e);var n=(0,x.Z)(t);function t(){return(0,m.Z)(this,t),n.call(this)}return(0,y.Z)(t,[{key:"doTask",value:function(c){return this.wrap(c)}},{key:"delegate",value:function(c){return new u.y(function(f){c.then(function(a){f.next(a),f.complete()}).catch(function(a){return f.error(a)})})}}]),t}(h)}}]);