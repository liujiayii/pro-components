"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[1528],{11528:function(B,O,e){e.d(O,{default:function(){return k}});var W=e(57213),o=e.n(W),Z=e(54306),A=e.n(Z),L=e(12342),U=e.n(L),V=e(89075),x=e(10909),m=e(73354),D=e(4911),I=e(49429),q=e(27535),K=e(85275),N=e(45996),Y=e(44764),c=e(50959),_=e(12782),rr=e(93002),nr=e(82163),er=e(54587),or=e(31078),z=e(68137),R=e(11527),lr=["steps","columns","forceUpdate","grid"],ur=function(r){var l=r.steps,d=r.columns,u=r.forceUpdate,a=r.grid,s=U()(r,lr),i=(0,m.d)(s),C=(0,c.useCallback)(function(v){var f,p;(f=(p=i.current).onCurrentChange)===null||f===void 0||f.call(p,v),u([])},[u,i]),F=(0,c.useMemo)(function(){return l==null?void 0:l.map(function(v,f){return(0,c.createElement)(k,o()(o()({grid:a},v),{},{key:f,layoutType:"StepForm",columns:d[f]}))})},[d,a,l]);return(0,R.jsx)(z.L0,o()(o()({},s),{},{onCurrentChange:C,children:F}))},ar=ur,dr=function(r){var l=r.children;return(0,R.jsx)(R.Fragment,{children:l})},tr=dr,Q=e(99504),G=e(81760),sr=function(r,l){if(r.valueType==="dependency"){var d,u,a,s=(d=r.getFieldProps)===null||d===void 0?void 0:d.call(r);return(0,Q.noteOnce)(Array.isArray((u=r.name)!==null&&u!==void 0?u:s==null?void 0:s.name),'SchemaForm: fieldProps.name should be NamePath[] when valueType is "dependency"'),(0,Q.noteOnce)(typeof r.columns=="function",'SchemaForm: columns should be a function when valueType is "dependency"'),Array.isArray((a=r.name)!==null&&a!==void 0?a:s==null?void 0:s.name)?(0,c.createElement)(G.Z,o()(o()({name:r.name},s),{},{key:r.key}),function(i){return!r.columns||typeof r.columns!="function"?null:l.genItems(r.columns(i))}):null}return!0},vr=e(42262),cr=function(r){if(r.valueType==="divider"){var l;return(0,c.createElement)(vr.Z,o()(o()({},(l=r.getFieldProps)===null||l===void 0?void 0:l.call(r)),{},{key:r.key}))}return!0},fr=e(71770),H=e(91154),yr=function(r,l){var d=l.action,u=l.formRef,a=l.type,s=l.originItem,i=o()(o()({},(0,fr.Z)(r,["dataIndex","width","render","renderFormItem","renderText","title"])),{},{name:r.name||r.key||r.dataIndex,width:r.width,render:r!=null&&r.render?function(f,p,E){var h,P,S,j;return r==null||(h=r.render)===null||h===void 0?void 0:h.call(r,f,p,E,d==null?void 0:d.current,o()(o()({type:a},r),{},{key:(P=r.key)===null||P===void 0?void 0:P.toString(),formItemProps:(S=r.getFormItemProps)===null||S===void 0?void 0:S.call(r),fieldProps:(j=r.getFieldProps)===null||j===void 0?void 0:j.call(r)}))}:void 0}),C=function(){return(0,R.jsx)(H.Z,o()(o()({},i),{},{ignoreFormItem:!0}))},F=r!=null&&r.renderFormItem?function(f,p){var E,h,P,S,j=(0,K.Y)(o()(o()({},p),{},{onChange:void 0}));return r==null||(E=r.renderFormItem)===null||E===void 0?void 0:E.call(r,o()(o()({type:a},r),{},{key:(h=r.key)===null||h===void 0?void 0:h.toString(),formItemProps:(P=r.getFormItemProps)===null||P===void 0?void 0:P.call(r),fieldProps:(S=r.getFieldProps)===null||S===void 0?void 0:S.call(r),originProps:s}),o()(o()({},j),{},{defaultRender:C,type:a}),u.current)}:void 0,v=function(){if(r!=null&&r.renderFormItem){var p=F==null?void 0:F(null,{});if(!p||r.ignoreFormItem)return p}return(0,c.createElement)(H.Z,o()(o()({},i),{},{key:[r.key,r.index||0].join("-"),renderFormItem:F}))};return r.dependencies?(0,R.jsx)(G.Z,{name:r.dependencies||[],children:v},r.key):v()},pr=e(96400),ir=function(r,l){var d=l.genItems;if(r.valueType==="formList"&&r.dataIndex){var u,a;return!r.columns||!Array.isArray(r.columns)?null:(0,c.createElement)(pr.u,o()(o()({},(u=r.getFormItemProps)===null||u===void 0?void 0:u.call(r)),{},{key:r.key,name:r.dataIndex,label:r.label,initialValue:r.initialValue,colProps:r.colProps,rowProps:r.rowProps},(a=r.getFieldProps)===null||a===void 0?void 0:a.call(r)),d(r.columns))}return!0},Fr=e(65091),hr=function(r,l){var d=l.genItems;if(r.valueType==="formSet"&&r.dataIndex){var u,a;return!r.columns||!Array.isArray(r.columns)?null:(0,c.createElement)(Fr.Z,o()(o()({},(u=r.getFormItemProps)===null||u===void 0?void 0:u.call(r)),{},{key:r.key,initialValue:r.initialValue,name:r.dataIndex,label:r.label,colProps:r.colProps,rowProps:r.rowProps},(a=r.getFieldProps)===null||a===void 0?void 0:a.call(r)),d(r.columns))}return!0},mr=e(73326),Pr=function(r,l){var d=l.genItems;if(r.valueType==="group"){var u;return!r.columns||!Array.isArray(r.columns)?null:(0,R.jsx)(mr.UW,o()(o()({label:r.label,colProps:r.colProps,rowProps:r.rowProps},(u=r.getFieldProps)===null||u===void 0?void 0:u.call(r)),{},{children:d(r.columns)}),r.key)}return!0},Sr=function(r){return r.valueType&&typeof r.valueType=="string"&&["index","indexBorder","option"].includes(r==null?void 0:r.valueType)?null:!0},J=[Sr,Pr,ir,hr,cr,sr],Tr=function(r,l){for(var d=0;d<J.length;d++){var u=J[d],a=u(r,l);if(a!==!0)return a}return yr(r,l)},xr=["columns","layoutType","type","action","shouldUpdate","formRef"],Rr={DrawerForm:_.a,QueryFilter:or.t,LightFilter:rr.M,StepForm:z.L0.StepForm,StepsForm:ar,ModalForm:nr.Y,Embed:tr};function Cr(t){var r=t.columns,l=t.layoutType,d=l===void 0?"Form":l,u=t.type,a=u===void 0?"form":u,s=t.action,i=t.shouldUpdate,C=i===void 0?function(g,n){return(0,V.ZP)(g)!==(0,V.ZP)(n)}:i,F=t.formRef,v=U()(t,xr),f=Rr[d]||er.A,p=Y.Z.useForm(),E=A()(p,1),h=E[0],P=Y.Z.useFormInstance(),S=(0,c.useState)([]),j=A()(S,2),Ar=j[1],Vr=(0,c.useState)(function(){return[]}),X=A()(Vr,2),Er=X[0],jr=X[1],T=(0,x.y)(t.form||P||h),$=(0,c.useRef)(),b=(0,m.d)(t),w=(0,D.J)(function(g){return g.filter(function(n){return!(n.hideInForm&&a==="form")}).sort(function(n,y){return y.order||n.order?(y.order||0)-(n.order||0):(y.index||0)-(n.index||0)}).map(function(n,y){var M=(0,I.h)(n.title,n,"form",(0,R.jsx)(q.G,{label:n.title,tooltip:n.tooltip||n.tip})),Dr=(0,K.Y)({title:M,label:M,name:n.name,valueType:(0,I.h)(n.valueType,{}),key:n.key||n.dataIndex||y,columns:n.columns,valueEnum:n.valueEnum,dataIndex:n.dataIndex||n.key,initialValue:n.initialValue,width:n.width,index:n.index,readonly:n.readonly,colSize:n.colSize,colProps:n.colProps,rowProps:n.rowProps,className:n.className,tooltip:n.tooltip||n.tip,dependencies:n.dependencies,proFieldProps:n.proFieldProps,ignoreFormItem:n.ignoreFormItem,getFieldProps:n.fieldProps?function(){return(0,I.h)(n.fieldProps,T.current,n)}:void 0,getFormItemProps:n.formItemProps?function(){return(0,I.h)(n.formItemProps,T.current,n)}:void 0,render:n.render,renderFormItem:n.renderFormItem,renderText:n.renderText,request:n.request,params:n.params,transform:n.transform,convertValue:n.convertValue,debounceTime:n.debounceTime,defaultKeyWords:n.defaultKeyWords});return Tr(Dr,{action:s,type:a,originItem:n,formRef:T,genItems:w})}).filter(function(n){return!!n})}),Zr=(0,c.useCallback)(function(g,n){var y=b.current.onValuesChange;(C===!0||typeof C=="function"&&C(n,$.current))&&jr([]),$.current=n,y==null||y(g,n)},[b,C]),Lr=(0,N.Z)(function(){if(T.current&&!(r.length&&Array.isArray(r[0])))return w(r)},[r,v==null?void 0:v.open,s,a,Er,!!T.current]),Ur=(0,N.Z)(function(){return d==="StepsForm"?{forceUpdate:Ar,columns:r}:{}},[r,d]);return(0,c.useImperativeHandle)(F,function(){return T.current},[T.current]),(0,R.jsx)(f,o()(o()(o()({},Ur),v),{},{onInit:function(n,y){var M;F&&(F.current=y),v==null||(M=v.onInit)===null||M===void 0||M.call(v,n,y),T.current=y},form:t.form||h,formRef:T,onValuesChange:Zr,children:Lr}))}var k=Cr},10909:function(B,O,e){e.d(O,{y:function(){return U}});var W=e(54306),o=e.n(W),Z=e(50959);function A(){var V=(0,Z.useState)(!0),x=o()(V,2),m=x[1],D=(0,Z.useCallback)(function(){return m(function(I){return!I})},[]);return D}var L=e(95406);function U(V){var x=A(),m=(0,L.C)(x,V);return m}},95406:function(B,O,e){e.d(O,{C:function(){return o}});var W=e(50959);function o(Z,A){var L=(0,W.useMemo)(function(){var U={current:A};return new Proxy(U,{set:function(x,m,D){return Object.is(x[m],D)||(x[m]=D,Z(L)),!0}})},[]);return L}}}]);
