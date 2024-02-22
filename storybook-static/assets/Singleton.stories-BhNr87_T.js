import{r as c,R as x}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";var he={exports:{}},G={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=c,Re=Symbol.for("react.element"),Te=Symbol.for("react.fragment"),_e=Object.prototype.hasOwnProperty,Ce=Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xe={key:!0,ref:!0,__self:!0,__source:!0};function ve(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)_e.call(t,r)&&!xe.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Re,type:e,key:i,ref:s,props:o,_owner:Ce.current}}G.Fragment=Te;G.jsx=ve;G.jsxs=ve;he.exports=G;var me=he.exports;function Le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ae(Object(n),!0).forEach(function(r){Le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $e(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ae(e,t){if(e==null)return{};var n=$e(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function De(e,t){return Ve(e)||Ne(e,t)||qe(e,t)||ke()}function Ve(e){if(Array.isArray(e))return e}function Ne(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,o=!1,i=void 0;try{for(var s=e[Symbol.iterator](),p;!(r=(p=s.next()).done)&&(n.push(p.value),!(t&&n.length===t));r=!0);}catch(h){o=!0,i=h}finally{try{!r&&s.return!=null&&s.return()}finally{if(o)throw i}}return n}}function qe(e,t){if(e){if(typeof e=="string")return ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ue(e,t)}}function ue(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ke(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?se(Object(n),!0).forEach(function(r){Ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(o,i){return i(o)},r)}}function N(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var s=arguments.length,p=new Array(s),h=0;h<s;h++)p[h]=arguments[h];return t.apply(n,[].concat(o,p))}}}function Y(e){return{}.toString.call(e).includes("Object")}function ze(e){return!Object.keys(e).length}function k(e){return typeof e=="function"}function He(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function We(e,t){return Y(t)||E("changeType"),Object.keys(t).some(function(n){return!He(e,n)})&&E("changeField"),t}function Be(e){k(e)||E("selectorType")}function Ye(e){k(e)||Y(e)||E("handlerType"),Y(e)&&Object.values(e).some(function(t){return!k(t)})&&E("handlersType")}function Ge(e){e||E("initialIsRequired"),Y(e)||E("initialType"),ze(e)&&E("initialContent")}function Je(e,t){throw new Error(e[t]||e.default)}var Ke={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},E=N(Je)(Ke),H={changes:We,selector:Be,handler:Ye,initial:Ge};function Qe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};H.initial(e),H.handler(t);var n={current:e},r=N(et)(n,t),o=N(Ze)(n),i=N(H.changes)(e),s=N(Xe)(n);function p(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(I){return I};return H.selector(y),y(n.current)}function h(y){Fe(r,o,i,s)(y)}return[p,h]}function Xe(e,t){return k(t)?t(e.current):t}function Ze(e,t){return e.current=le(le({},e.current),t),t}function et(e,t,n){return k(t)?t(e.current):Object.keys(n).forEach(function(r){var o;return(o=t[r])===null||o===void 0?void 0:o.call(t,e.current[r])}),n}var tt={create:Qe},nt={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function rt(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var s=arguments.length,p=new Array(s),h=0;h<s;h++)p[h]=arguments[h];return t.apply(n,[].concat(o,p))}}}function ot(e){return{}.toString.call(e).includes("Object")}function it(e){return e||fe("configIsRequired"),ot(e)||fe("configType"),e.urls?(at(),{paths:{vs:e.urls.monacoBase}}):e}function at(){console.warn(be.deprecation)}function ct(e,t){throw new Error(e[t]||e.default)}var be={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},fe=rt(ct)(be),ut={config:it},st=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(o){return n.reduceRight(function(i,s){return s(i)},o)}};function ye(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],ye(e[n],t[n]))}),ce(ce({},e),t)}var lt={type:"cancelation",msg:"operation is manually canceled"};function ne(e){var t=!1,n=new Promise(function(r,o){e.then(function(i){return t?o(lt):r(i)}),e.catch(o)});return n.cancel=function(){return t=!0},n}var ft=tt.create({config:nt,isInitialized:!1,resolve:null,reject:null,monaco:null}),we=De(ft,2),U=we[0],J=we[1];function dt(e){var t=ut.config(e),n=t.monaco,r=Ae(t,["monaco"]);J(function(o){return{config:ye(o.config,r),monaco:n}})}function pt(){var e=U(function(t){var n=t.monaco,r=t.isInitialized,o=t.resolve;return{monaco:n,isInitialized:r,resolve:o}});if(!e.isInitialized){if(J({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),ne(re);if(window.monaco&&window.monaco.editor)return Oe(window.monaco),e.resolve(window.monaco),ne(re);st(gt,vt)(mt)}return ne(re)}function gt(e){return document.body.appendChild(e)}function ht(e){var t=document.createElement("script");return e&&(t.src=e),t}function vt(e){var t=U(function(r){var o=r.config,i=r.reject;return{config:o,reject:i}}),n=ht("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function mt(){var e=U(function(n){var r=n.config,o=n.resolve,i=n.reject;return{config:r,resolve:o,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){Oe(n),e.resolve(n)},function(n){e.reject(n)})}function Oe(e){U().monaco||J({monaco:e})}function bt(){return U(function(e){var t=e.monaco;return t})}var re=new Promise(function(e,t){return J({resolve:e,reject:t})}),Se={config:dt,init:pt,__getMonacoInstance:bt},yt={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},oe=yt,wt={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Ot=wt;function St({children:e}){return x.createElement("div",{style:Ot.container},e)}var jt=St,Mt=jt;function Et({width:e,height:t,isEditorReady:n,loading:r,_ref:o,className:i,wrapperProps:s}){return x.createElement("section",{style:{...oe.wrapper,width:e,height:t},...s},!n&&x.createElement(Mt,null,r),x.createElement("div",{ref:o,style:{...oe.fullWidth,...!n&&oe.hide},className:i}))}var Pt=Et,je=c.memo(Pt);function It(e){c.useEffect(e,[])}var Me=It;function Rt(e,t,n=!0){let r=c.useRef(!0);c.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var S=Rt;function q(){}function C(e,t,n,r){return Tt(e,r)||_t(e,t,n,r)}function Tt(e,t){return e.editor.getModel(Ee(e,t))}function _t(e,t,n,r){return e.editor.createModel(t,n,r?Ee(e,r):void 0)}function Ee(e,t){return e.Uri.parse(t)}function Ct({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:s,keepCurrentOriginalModel:p=!1,keepCurrentModifiedModel:h=!1,theme:y="light",loading:I="Loading...",options:j={},height:K="100%",width:Q="100%",className:X,wrapperProps:Z={},beforeMount:ee=q,onMount:te=q}){let[w,L]=c.useState(!1),[P,v]=c.useState(!0),m=c.useRef(null),g=c.useRef(null),$=c.useRef(null),b=c.useRef(te),l=c.useRef(ee),R=c.useRef(!1);Me(()=>{let a=Se.init();return a.then(f=>(g.current=f)&&v(!1)).catch(f=>(f==null?void 0:f.type)!=="cancelation"&&console.error("Monaco initialization: error:",f)),()=>m.current?A():a.cancel()}),S(()=>{if(m.current&&g.current){let a=m.current.getOriginalEditor(),f=C(g.current,e||"",r||n||"text",i||"");f!==a.getModel()&&a.setModel(f)}},[i],w),S(()=>{if(m.current&&g.current){let a=m.current.getModifiedEditor(),f=C(g.current,t||"",o||n||"text",s||"");f!==a.getModel()&&a.setModel(f)}},[s],w),S(()=>{let a=m.current.getModifiedEditor();a.getOption(g.current.editor.EditorOption.readOnly)?a.setValue(t||""):t!==a.getValue()&&(a.executeEdits("",[{range:a.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),a.pushUndoStop())},[t],w),S(()=>{var a,f;(f=(a=m.current)==null?void 0:a.getModel())==null||f.original.setValue(e||"")},[e],w),S(()=>{let{original:a,modified:f}=m.current.getModel();g.current.editor.setModelLanguage(a,r||n||"text"),g.current.editor.setModelLanguage(f,o||n||"text")},[n,r,o],w),S(()=>{var a;(a=g.current)==null||a.editor.setTheme(y)},[y],w),S(()=>{var a;(a=m.current)==null||a.updateOptions(j)},[j],w);let F=c.useCallback(()=>{var M;if(!g.current)return;l.current(g.current);let a=C(g.current,e||"",r||n||"text",i||""),f=C(g.current,t||"",o||n||"text",s||"");(M=m.current)==null||M.setModel({original:a,modified:f})},[n,t,o,e,r,i,s]),z=c.useCallback(()=>{var a;!R.current&&$.current&&(m.current=g.current.editor.createDiffEditor($.current,{automaticLayout:!0,...j}),F(),(a=g.current)==null||a.editor.setTheme(y),L(!0),R.current=!0)},[j,y,F]);c.useEffect(()=>{w&&b.current(m.current,g.current)},[w]),c.useEffect(()=>{!P&&!w&&z()},[P,w,z]);function A(){var f,M,T,D;let a=(f=m.current)==null?void 0:f.getModel();p||((M=a==null?void 0:a.original)==null||M.dispose()),h||((T=a==null?void 0:a.modified)==null||T.dispose()),(D=m.current)==null||D.dispose()}return x.createElement(je,{width:Q,height:K,isEditorReady:w,loading:I,_ref:$,className:X,wrapperProps:Z})}var xt=Ct;c.memo(xt);function Lt(e){let t=c.useRef();return c.useEffect(()=>{t.current=e},[e]),t.current}var $t=Lt,W=new Map;function At({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:o,path:i,theme:s="light",line:p,loading:h="Loading...",options:y={},overrideServices:I={},saveViewState:j=!0,keepCurrentModel:K=!1,width:Q="100%",height:X="100%",className:Z,wrapperProps:ee={},beforeMount:te=q,onMount:w=q,onChange:L,onValidate:P=q}){let[v,m]=c.useState(!1),[g,$]=c.useState(!0),b=c.useRef(null),l=c.useRef(null),R=c.useRef(null),F=c.useRef(w),z=c.useRef(te),A=c.useRef(),a=c.useRef(r),f=$t(i),M=c.useRef(!1),T=c.useRef(!1);Me(()=>{let u=Se.init();return u.then(d=>(b.current=d)&&$(!1)).catch(d=>(d==null?void 0:d.type)!=="cancelation"&&console.error("Monaco initialization: error:",d)),()=>l.current?Pe():u.cancel()}),S(()=>{var d,O,V,_;let u=C(b.current,e||r||"",t||o||"",i||n||"");u!==((d=l.current)==null?void 0:d.getModel())&&(j&&W.set(f,(O=l.current)==null?void 0:O.saveViewState()),(V=l.current)==null||V.setModel(u),j&&((_=l.current)==null||_.restoreViewState(W.get(i))))},[i],v),S(()=>{var u;(u=l.current)==null||u.updateOptions(y)},[y],v),S(()=>{!l.current||r===void 0||(l.current.getOption(b.current.editor.EditorOption.readOnly)?l.current.setValue(r):r!==l.current.getValue()&&(T.current=!0,l.current.executeEdits("",[{range:l.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),l.current.pushUndoStop(),T.current=!1))},[r],v),S(()=>{var d,O;let u=(d=l.current)==null?void 0:d.getModel();u&&o&&((O=b.current)==null||O.editor.setModelLanguage(u,o))},[o],v),S(()=>{var u;p!==void 0&&((u=l.current)==null||u.revealLine(p))},[p],v),S(()=>{var u;(u=b.current)==null||u.editor.setTheme(s)},[s],v);let D=c.useCallback(()=>{var u;if(!(!R.current||!b.current)&&!M.current){z.current(b.current);let d=i||n,O=C(b.current,r||e||"",t||o||"",d||"");l.current=(u=b.current)==null?void 0:u.editor.create(R.current,{model:O,automaticLayout:!0,...y},I),j&&l.current.restoreViewState(W.get(d)),b.current.editor.setTheme(s),p!==void 0&&l.current.revealLine(p),m(!0),M.current=!0}},[e,t,n,r,o,i,y,I,j,s,p]);c.useEffect(()=>{v&&F.current(l.current,b.current)},[v]),c.useEffect(()=>{!g&&!v&&D()},[g,v,D]),a.current=r,c.useEffect(()=>{var u,d;v&&L&&((u=A.current)==null||u.dispose(),A.current=(d=l.current)==null?void 0:d.onDidChangeModelContent(O=>{T.current||L(l.current.getValue(),O)}))},[v,L]),c.useEffect(()=>{if(v){let u=b.current.editor.onDidChangeMarkers(d=>{var V;let O=(V=l.current.getModel())==null?void 0:V.uri;if(O&&d.find(_=>_.path===O.path)){let _=b.current.editor.getModelMarkers({resource:O});P==null||P(_)}});return()=>{u==null||u.dispose()}}return()=>{}},[v,P]);function Pe(){var u,d;(u=A.current)==null||u.dispose(),K?j&&W.set(i,l.current.saveViewState()):(d=l.current.getModel())==null||d.dispose(),l.current.dispose()}return x.createElement(je,{width:Q,height:X,isEditorReady:v,loading:h,_ref:R,className:Z,wrapperProps:ee})}var Dt=At,Vt=c.memo(Dt),Nt=Vt;const ie=({code:e})=>me.jsx(Nt,{options:{readOnly:!0},height:"100vh",width:"100vw",defaultLanguage:"typescript",defaultValue:e});try{ie.displayName="Editor",ie.__docgenInfo={description:"",displayName:"Editor",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}}}}}catch{}const Ut={title:"Singleton"},B={render(){return me.jsx(ie,{code:`/**
  * The Singleton class defines the \`getInstance\` method that lets clients access
  * the unique singleton instance.
  */
class Singleton {
  private static instance: Singleton;

  /**
  * The Singleton's constructor should always be private to prevent direct
  * construction calls with the \`new\` operator.
  */
  private constructor() { }

  /**
  * The static method that controls the access to the singleton instance.
  *
  * This implementation let you subclass the Singleton class while keeping
  * just one instance of each subclass around.
  */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

// ==================================== Test ====================================

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
  
if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
} else {
    console.log('Singleton failed, variables contain different instances.');
}
`})}};var de,pe,ge;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render() {
    const code = \`/**
  * The Singleton class defines the \\\`getInstance\\\` method that lets clients access
  * the unique singleton instance.
  */
class Singleton {
  private static instance: Singleton;

  /**
  * The Singleton's constructor should always be private to prevent direct
  * construction calls with the \\\`new\\\` operator.
  */
  private constructor() { }

  /**
  * The static method that controls the access to the singleton instance.
  *
  * This implementation let you subclass the Singleton class while keeping
  * just one instance of each subclass around.
  */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

// ==================================== Test ====================================

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
  
if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
} else {
    console.log('Singleton failed, variables contain different instances.');
}
\`;
    return <Editor code={code} />;
  }
}`,...(ge=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const Ft=["Instance"];export{B as Instance,Ft as __namedExportsOrder,Ut as default};
