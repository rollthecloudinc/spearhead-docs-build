(self.webpackChunkspear=self.webpackChunkspear||[]).push([[469],{464:(G,k)=>{function n(s){return s.replace(/[-[\]/{}()*+?.\\^$]/g,"\\$&")}function P(s,l){var b=(void 0===l?{}:l).decimalMark,y=void 0===b?".":b;if("number"==typeof s)return s.toString();if("string"!=typeof s)return"NaN";var _=n(y),h=s.trim(),A=h.match(/^\(.*\)$|^-/),M=new RegExp("[^\\d"+_+"]|"+_+"(?=.*"+_+")|^\\D*"+_+"\\D*$","g");return""===(h=h.replace(M,"").replace(y,"."))?h="NaN":A&&(h="-"+h),h}k.He=void 0,k.He=function F(s,l){var b=(void 0===l?{}:l).decimalMark,_=P(s,{decimalMark:void 0===b?".":b});return"NaN"===_?NaN:Number(_)}},5469:(G,k,f)=>{f.r(k),f.d(k,{ATTRIBUTE_WIDGET:()=>M,Attribute:()=>v,AttributeMatcherService:()=>E,AttributePipe:()=>V,AttributeSerializerService:()=>U,AttributeTypes:()=>u,AttributeValue:()=>g,AttributeWidget:()=>N,AttributeWidgetComponent:()=>C,AttributesBuilderComponent:()=>p,AttributesModule:()=>L,ValueComputerService:()=>j,WidgetPluginManager:()=>w,WidgetsService:()=>D});var n=f(2207),P=f(702),F=f(658),a=f(2508),O=f(1310),B=f(745),s=f(9507),l=f(139),c=f(5074),b=f(8562),y=f(464);function _(t,r){}function h(t,r){if(1&t&&(n.\u0275\u0275elementStart(0,"div",4),n.\u0275\u0275element(1,"classifieds-ui-attribute-widget",5),n.\u0275\u0275elementEnd()),2&t){const e=r.index,i=n.\u0275\u0275nextContext();n.\u0275\u0275propertyInterpolate("formGroupName",e),n.\u0275\u0275advance(1),n.\u0275\u0275property("attribute",i.attributes[e])("widget",i.discoverWidget(i.attributes[e].widget))("appearance",i.appearance)}}function A(t,r){1&t&&(n.\u0275\u0275elementStart(0,"div"),n.\u0275\u0275elementStart(1,"p"),n.\u0275\u0275text(2,"No attributes available for ad type. Click next to continue."),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementEnd())}const M=new n.InjectionToken("AttributeWidget");let D=(()=>{class t{constructor(e){this.widgets=e}get(e){return this.widgets.find(i=>i.name===e)}}return t.\u0275fac=function(e){return new(e||t)(n.\u0275\u0275inject(M))},t.\u0275prov=n.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})(),w=(()=>{class t extends s.BasePluginManager{constructor(e,i){super(e,i)}pluginDef(){return(0,B.of)(new s.PluginDef({name:"widget"}))}}return t.\u0275fac=function(e){return new(e||t)(n.\u0275\u0275inject(s.PluginConfigurationManager),n.\u0275\u0275inject(l.ModuleLoaderService))},t.\u0275prov=n.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),S=(()=>{class t{constructor(e){this.viewContainerRef=e}}return t.\u0275fac=function(e){return new(e||t)(n.\u0275\u0275directiveInject(n.ViewContainerRef))},t.\u0275dir=n.\u0275\u0275defineDirective({type:t,selectors:[["","classifiedsUiWidgetHost",""]]}),t})(),C=(()=>{class t{constructor(e,i){this.componentFactoryResolver=e,this.controlContainer=i,this.appearance="legacy"}ngOnInit(){this.widget.subscribe(e=>{const i=this.componentFactoryResolver.resolveComponentFactory(e.component),o=this.widgetHost.viewContainerRef;o.clear();const d=o.createComponent(i);d.instance.attribute=this.attribute,d.instance.appearance=this.appearance})}}return t.\u0275fac=function(e){return new(e||t)(n.\u0275\u0275directiveInject(n.ComponentFactoryResolver),n.\u0275\u0275directiveInject(a.gN))},t.\u0275cmp=n.\u0275\u0275defineComponent({type:t,selectors:[["classifieds-ui-attribute-widget"]],viewQuery:function(e,i){if(1&e&&n.\u0275\u0275viewQuery(S,7),2&e){let o;n.\u0275\u0275queryRefresh(o=n.\u0275\u0275loadQuery())&&(i.widgetHost=o.first)}},inputs:{widget:"widget",attribute:"attribute",appearance:"appearance"},decls:2,vars:1,consts:[[3,"formGroup"],["classifiedsUiWidgetHost",""]],template:function(e,i){1&e&&(n.\u0275\u0275elementContainerStart(0,0),n.\u0275\u0275template(1,_,0,0,"ng-template",1),n.\u0275\u0275elementContainerEnd()),2&e&&n.\u0275\u0275property("formGroup",i.controlContainer.control)},directives:[a.JL,a.sg,S],styles:[""]}),t})(),p=(()=>{class t{constructor(e,i){this.widgetsService=e,this.wpm=i,this.attributes=[],this.appearance="legacy",this.attributesForm=new a.cw({attributes:new a.Oe([])}),this._attributeValues=[],this.onTouched=()=>{}}set attributeValues(e){this._attributeValues=e,this.applyValues()}get attributeValues(){return this._attributeValues}get attributesArray(){return this.attributesForm.get("attributes")}ngOnChanges(e){if(e.attributes&&(!e.attributes.previousValue||e.attributes.previousValue!==e.attributes.currentValue)){for(;0!==this.attributesArray.length;)this.attributesArray.removeAt(0);this.attributes.forEach(i=>{this.attributesArray.push(new a.cw({name:new a.NI(i.name,a.kI.required),type:new a.NI(i.type,a.kI.required),displayName:new a.NI(i.label,a.kI.required),value:new a.NI("",i.required?a.kI.required:[]),attributes:new a.Oe(i.attributes?i.attributes.map(o=>new a.cw({name:new a.NI(o.name,a.kI.required),type:new a.NI(o.type,a.kI.required),displayName:new a.NI(o.label,a.kI.required),value:new a.NI("",o.required?a.kI.required:[])})):[])}))}),this.applyValues()}}writeValue(e){e&&(console.log(`write value: ${e}`),this.attributesArray.setValue(e,{emitEvent:!1}))}registerOnChange(e){this.attributesArray.valueChanges.subscribe(e)}registerOnTouched(e){this.onTouched=e}setDisabledState(e){e?this.attributesArray.disable():this.attributesArray.enable()}validate(e){return this.attributesForm.valid?null:{invalidForm:{valid:!1,message:"attributes are invalid"}}}discoverWidget(e){return this.wpm.getPlugin(e)}applyValues(){this.attributesArray.controls.forEach((e,i)=>{const o=this.attributeValues?this.attributeValues.find(d=>d.name===e.get("name").value):void 0;void 0!==o&&(e.get("value").setValue(o.value),e.updateValueAndValidity()),e.get("attributes").controls.forEach(d=>{const m=this.attributeValues&&void 0!==this.attributeValues[i]?this.attributeValues[i].attributes.find(x=>x.name===d.get("name").value):void 0;void 0!==m&&(d.get("value").setValue(m.value),d.updateValueAndValidity())})})}}return t.\u0275fac=function(e){return new(e||t)(n.\u0275\u0275directiveInject(D),n.\u0275\u0275directiveInject(w))},t.\u0275cmp=n.\u0275\u0275defineComponent({type:t,selectors:[["classifieds-ui-attributes-builder"]],inputs:{attributes:"attributes",appearance:"appearance",attributeValues:"attributeValues"},features:[n.\u0275\u0275ProvidersFeature([D,{provide:a.JU,useExisting:(0,n.forwardRef)(()=>t),multi:!0},{provide:a.Cf,useExisting:(0,n.forwardRef)(()=>t),multi:!0}]),n.\u0275\u0275NgOnChangesFeature],decls:4,vars:3,consts:[[3,"formGroup"],["formArrayName","attributes",1,"attribute-fields"],["class","attribute-field-container",3,"formGroupName",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"attribute-field-container",3,"formGroupName"],[3,"attribute","widget","appearance"]],template:function(e,i){1&e&&(n.\u0275\u0275elementContainerStart(0,0),n.\u0275\u0275elementStart(1,"div",1),n.\u0275\u0275template(2,h,2,4,"div",2),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementContainerEnd(),n.\u0275\u0275template(3,A,3,0,"div",3)),2&e&&(n.\u0275\u0275property("formGroup",i.attributesForm),n.\u0275\u0275advance(2),n.\u0275\u0275property("ngForOf",i.attributesArray.controls),n.\u0275\u0275advance(1),n.\u0275\u0275property("ngIf",0==i.attributes.length))},directives:[C,a.JL,a.sg,a.CE,P.NgForOf,a.x0,P.NgIf],styles:[""]}),t})(),I=(()=>{class t{constructor(e){this.controlContainer=e,this.appearance="legacy"}}return t.\u0275fac=function(e){return new(e||t)(n.\u0275\u0275directiveInject(a.gN))},t.\u0275cmp=n.\u0275\u0275defineComponent({type:t,selectors:[["classifieds-ui-text-widget"]],inputs:{attribute:"attribute",appearance:"appearance"},decls:3,vars:3,consts:[[3,"formGroup"],[3,"appearance"],["matInput","","formControlName","value",3,"placeholder"]],template:function(e,i){1&e&&(n.\u0275\u0275elementContainerStart(0,0),n.\u0275\u0275elementStart(1,"mat-form-field",1),n.\u0275\u0275element(2,"input",2),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementContainerEnd()),2&e&&(n.\u0275\u0275property("formGroup",i.controlContainer.control),n.\u0275\u0275advance(1),n.\u0275\u0275property("appearance",i.appearance),n.\u0275\u0275advance(1),n.\u0275\u0275property("placeholder",i.attribute.label))},directives:[c.KE,a.JL,a.sg,b.Nt,a.Fj,a.JJ,a.u],styles:[""]}),t})(),W=(()=>{class t{constructor(e){this.controlContainer=e}}return t.\u0275fac=function(e){return new(e||t)(n.\u0275\u0275directiveInject(a.gN))},t.\u0275cmp=n.\u0275\u0275defineComponent({type:t,selectors:[["classifieds-ui-min-max-widget"]],inputs:{attribute:"attribute"},decls:8,vars:4,consts:[[3,"formGroup"],["formArrayName","attributes"],["formGroupName","0"],["matInput","","type","number","formControlName","value",3,"placeholder"],["formGroupName","1"]],template:function(e,i){1&e&&(n.\u0275\u0275elementContainerStart(0,0),n.\u0275\u0275elementStart(1,"label"),n.\u0275\u0275text(2),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(3,"div",1),n.\u0275\u0275elementStart(4,"mat-form-field",2),n.\u0275\u0275element(5,"input",3),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(6,"mat-form-field",4),n.\u0275\u0275element(7,"input",3),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementContainerEnd()),2&e&&(n.\u0275\u0275property("formGroup",i.controlContainer.control),n.\u0275\u0275advance(2),n.\u0275\u0275textInterpolate(i.attribute.label),n.\u0275\u0275advance(3),n.\u0275\u0275property("placeholder",i.attribute.attributes[0].label),n.\u0275\u0275advance(2),n.\u0275\u0275property("placeholder",i.attribute.attributes[1].label))},directives:[c.KE,a.JL,a.sg,a.CE,a.x0,b.Nt,a.wV,a.Fj,a.JJ,a.u],styles:[""]}),t})(),E=(()=>{class t{getComputedValue(e,i){const o=i&&i.length>0&&this.matchAttribute(e,i);if(o)return o.computedValue}getValue(e,i){const o=i&&i.length>0&&this.matchAttribute(e,i);if(o)return o.value}matchAttribute(e,i){const o=i.length;for(let d=0;d<o;d++)if(i[d].attributes&&i[d].attributes.length>0){if(this.matchAttribute(e,i[d].attributes))return i[d]}else if(e===i[d].name)return i[d]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),V=(()=>{class t{constructor(e){this.attributeMatcher=e}transform(e,i){return this.attributeMatcher.getComputedValue(i,e)||""}}return t.\u0275fac=function(e){return new(e||t)(n.\u0275\u0275directiveInject(E,16))},t.\u0275pipe=n.\u0275\u0275definePipe({name:"attribute",type:t,pure:!0}),t})();var u=(()=>{return(t=u||(u={}))[t.Number=0]="Number",t[t.Text=1]="Text",t[t.Complex=2]="Complex",t[t.Float=3]="Float",t[t.Array=4]="Array",t[t.Bool=5]="Bool",t[t.Date=6]="Date",u;var t})();class N extends s.Plugin{constructor(r){super(r),r&&(this.name=this.id,this.schema=r.schema?new v(r.schema):void 0,this.component=r.component)}}class v{constructor(r){this.attributes=[],r&&(this.name=r.name,this.widget=void 0!==r.widget?r.widget:"text",this.type=r.type,this.label=r.label,this.required=r.required,this.options=r.options,r.attributes&&(this.attributes=r.attributes.map(e=>new v(e))))}}class g{constructor(r){this.attributes=[],r&&(this.name=r.name,this.displayName=r.displayName,this.type=r.type,this.value=r.value,this.intValue=r.intValue,this.computedValue=r.computedValue,r.attributes&&(Array.isArray(r.attributes)?this.attributes=r.attributes.reduce((e,i)=>void 0===i._store||i._store?[...e,new g(i)]:e,[]):(void 0===r.attributes._store||r.attributes._store)&&(this.attributes=[r.attributes])),r.value&&"object"==typeof r.value?(this.value=void 0,this.type=u.Complex,r.value.attributes.reduce((e,i)=>void 0===i._store||i._store?[...e,new g(i)]:e,[])):this.value=r.value)}}const R=()=>{const t=new v({name:"",type:u.Text,label:"",required:!1,widget:"text",options:{},attributes:[]});return new N({id:"text",name:"text",title:"Text",component:I,schema:t})},T=()=>new N({id:"minmax",name:"minmax",title:"MinMax",component:W,schema:void 0});let L=(()=>{class t{constructor(e,i){e.forEach(o=>i.register(o))}}return t.\u0275fac=function(e){return new(e||t)(n.\u0275\u0275inject(M),n.\u0275\u0275inject(w))},t.\u0275mod=n.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=n.\u0275\u0275defineInjector({providers:[{provide:M,useFactory:R,multi:!0},{provide:M,useFactory:T,multi:!0}],imports:[[P.CommonModule,a.UX,O.MaterialModule,F.HttpClientJsonpModule]]}),t})(),j=(()=>{class t{constructor(){}compute(e){const i=[];return e.forEach(o=>i.push(this.computeAttribute(o))),i}computeAttribute(e){const i=this.resolveComputedValue(e.value,e.type);return new g(e.attributes&&e.attributes.length>0?{...e,computedValue:i,attributes:this.compute(e.attributes)}:{...e,computedValue:i})}resolveComputedValue(e,i){let o;return i===u.Number?(o=(0,y.He)(e.trim()),o&&isNaN(o)&&(o=void 0)):o=e.trim(),void 0===o?o:`${o}`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),U=(()=>{class t{constructor(e){this.valueComputer=e}serialize(e,i){const o=typeof e;if("object"!==o)return new g({name:i,type:"string"!==o?"boolean"!==o?u.Number:u.Bool:u.Text,displayName:i,value:`${e}`,intValue:void 0,computedValue:this.valueComputer.resolveComputedValue(`${e}`,"string"!==o?"boolean"!==o?u.Number:u.Bool:u.Text),attributes:[]});if(Array.isArray(e)&&("attributes"===i||"settings"===i))return new g({name:i,type:u.Complex,displayName:i,value:void 0,intValue:void 0,computedValue:void 0,attributes:e});if(Array.isArray(e)){const d=e.length,m=[];for(let x=0;x<d;x++)m.push(this.serialize(e[x],`${x}`));return new g({name:i,type:u.Array,displayName:i,value:void 0,intValue:void 0,computedValue:void 0,attributes:m})}if(e instanceof Date)return new g({name:i,type:u.Date,displayName:i,value:e.toJSON(),intValue:void 0,computedValue:e.toJSON(),attributes:[]});{const d=[];for(const m in e)d.push(this.serialize(e[m],m));return new g({name:i,type:u.Complex,displayName:i,value:void 0,intValue:void 0,computedValue:void 0,attributes:d})}}deserializeAsObject(e,i=!1){return this.deserialize(new g({name:"root",type:u.Complex,displayName:"root",value:void 0,computedValue:void 0,intValue:0,attributes:e}),i)}deserialize(e,i=!1){let o,d;switch(e.type){case u.Complex:if(i||"attributes"!==e.name&&"settings"!==e.name){d=e.attributes.length;for(let m=0;m<d;m++)o={...o,[e.attributes[m].name]:this.deserialize(e.attributes[m])}}else o=e.attributes.map(m=>new g(m));break;case u.Bool:o=void 0!==e.value?["1","true","on"].findIndex(m=>m===e.value)>-1:void 0;break;case u.Number:case u.Float:o=void 0!==e.value&&""!==e.value&&"undefined"!==e.value?"0"!==e.value?(0,y.He)(e.value.trim()):0:void 0;break;case u.Text:o=e.value;break;case u.Array:if(i||"attributes"!==e.name&&"settings"!==e.name){d=e.attributes.length,o=[];for(let m=0;m<d;m++)o=[...o,this.deserialize(e.attributes[m])]}else o=e.attributes.map(m=>new g(m));break;case u.Date:o=void 0!==e.value&&""!==e.value?new Date(e.value):void 0}return o}convertToGroup(e){const i=new a.cw({name:new a.NI(e.name,a.kI.required),type:new a.NI(e.type,a.kI.required),displayName:new a.NI(e.displayName,a.kI.required),value:new a.NI(e.value,a.kI.required),computedValue:new a.NI(e.value,a.kI.required),attributes:new a.Oe([])});return e.attributes&&e.attributes.length>0&&e.attributes.forEach(o=>{i.get("attributes").push(this.convertToGroup(o))}),i}}return t.\u0275fac=function(e){return new(e||t)(n.\u0275\u0275inject(j))},t.\u0275prov=n.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
//# sourceMappingURL=469.a43e0ca9cc510867.js.map