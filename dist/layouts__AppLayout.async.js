(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"+cBb":function(e,t,a){"use strict";a.r(t);a("IzEo");var n,r,l,i=a("bx4M"),o=a("p0pE"),c=a.n(o),s=a("2Taf"),u=a.n(s),p=a("vZ4D"),m=a.n(p),d=a("l4Ni"),h=a.n(d),f=a("ujKo"),g=a.n(f),E=a("MhPg"),y=a.n(E),v=a("q1tI"),b=a.n(v),D=(a("wd/R"),a("MuoO")),k=(a("+kNj"),a("zHco")),x=(a("yMpP"),a("1pet"),a("usdK")),C=a("6ESD"),w=(n=Object(D["connect"])(function(e){var t=e.app,a=e.loading;return{app:t,loading:a}}),n((l=function(e){function t(){var e,a;u()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=h()(this,(e=g()(t)).call.apply(e,[this].concat(r))),a.state={detail:{}},a.handleUpdate=function(e){var t=a.props,n=t.dispatch,r=t.match.params.id;n({type:"data/updateData",payload:c()({},e,{id:r}),callback:function(e){e.success&&x["a"].push("/app/dashboard")}})},a}return y()(t,e),m()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.dispatch,n=t.match.params.id;a({type:"data/fetchDataDetail",payload:{id:n},callback:function(t){e.setState({detail:t})}})}},{key:"render",value:function(){var e=this.state.detail;return b.a.createElement(k["a"],{title:"\u7f16\u8f91\u6570\u636e"},b.a.createElement(i["a"],null,b.a.createElement(C["a"],{detail:e,onSubmit:this.handleUpdate})))}}]),t}(v["PureComponent"]),r=l))||r);t["default"]=w},"+gO1":function(e,t,a){"use strict";a.r(t);a("14J3");var n,r,l,i=a("BMrR"),o=(a("jCWc"),a("kPKH")),c=(a("IzEo"),a("bx4M")),s=(a("g9YV"),a("wCAj")),u=(a("/zsF"),a("PArb")),p=(a("BoS7"),a("Sdc0")),m=(a("2qtc"),a("kLXV")),d=a("d6i3"),h=a.n(d),f=a("1l/V"),g=a.n(f),E=a("2Taf"),y=a.n(E),v=a("vZ4D"),b=a.n(v),D=a("l4Ni"),k=a.n(D),x=a("ujKo"),C=a.n(x),w=a("MhPg"),M=a.n(w),N=(a("+L6B"),a("2/Rp")),O=a("q1tI"),S=a.n(O),I=a("wd/R"),P=a.n(I),j=a("MuoO"),A=a("+kNj"),T=a("zHco"),V=a("usdK"),q=a("KgoZ"),B=a.n(q),Y=a("1pet"),_=A["a"].Description,F=N["a"].Group,L=(n=Object(j["connect"])(function(e){var t=e.app,a=e.loading;return{app:t,loading:a.effects["app/getAppDetailI"]}}),n((l=function(e){function t(){var e,a;y()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=k()(this,(e=C()(t)).call.apply(e,[this].concat(r))),a.handleToggleStatus=g()(h.a.mark(function e(){var t,n,r,l,i;return h.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=a.props,n=t.app.curApp,r=n.id,l=n.status,i=t.dispatch,!r||3===r){e.next=4;break}return e.next=4,i({type:"app/toggleStatus",payload:{id:r,status:1===l?2:1}});case 4:case"end":return e.stop()}},e)})),a.showDel=function(){m["a"].confirm({title:"\u5220\u9664",content:S.a.createElement("p",{style:{color:"red"}},"\u5220\u9664\u540e\u6570\u636e\u65e0\u6cd5\u6062\u590d\uff0c\u786e\u5b9a\u5220\u9664\u5e94\u7528\u5417\uff1f"),onOk:a.handleDel})},a.handleDel=function(){var e=a.props,t=e.app.curApp.id,n=e.dispatch;n({type:"app/deleteApp",payload:{id:t},callback:function(e){e.success&&V["a"].push("/app/dashboard")}})},a}return M()(t,e),b()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.match.params.id;t({type:"app/fetchAppDetail",payload:{id:a}})}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.app.curApp,n=e.match.params,r=S.a.createElement(O["Fragment"],null,S.a.createElement("b",{style:{color:"#1890FF"}},"\u72b6\u6001:"),S.a.createElement(p["a"],{onChange:this.handleToggleStatus,style:{margin:"0 20px 0 10px"},checkedChildren:"\u5728\u7ebf",unCheckedChildren:"\u4e0b\u7ebf",checked:1===a.status,disabled:3===a.status,loading:t}),S.a.createElement(F,null,S.a.createElement(N["a"],{onClick:function(){return V["a"].push("/app/application/edit/".concat(n.id))}},"\u7f16\u8f91"),S.a.createElement(N["a"],{onClick:this.showDel,type:"danger"},"\u5220\u9664")),S.a.createElement(N["a"],{type:"primary",onClick:function(){return V["a"].push("/app/design/".concat(n.id))}},"\u8fdb\u5165\u8bbe\u8ba1\u9762\u677f"));return S.a.createElement(T["a"],{title:"\u5e94\u7528\u8be6\u60c5",action:r},S.a.createElement(i["a"],{gutter:24},S.a.createElement(o["a"],{xl:24,lg:24,md:24,sm:24,xs:24},S.a.createElement(c["a"],{bordered:!1,title:a.name},S.a.createElement(A["a"],{size:"large",title:"\u57fa\u672c\u4fe1\u606f",style:{marginBottom:32}},S.a.createElement(_,{term:"\u540d\u79f0"},a.name),S.a.createElement(_,{term:"\u4ecb\u7ecd"},a.describe),S.a.createElement(_,{term:"logo"},a.logo),S.a.createElement(_,{term:"\u521b\u5efa\u65f6\u95f4"},P()(a.create_time).format("YY-MM-DD hh:mm"))),S.a.createElement(u["a"],{style:{marginBottom:32}}),S.a.createElement(A["a"],{size:"large",title:"\u8bbf\u95ee\u63a7\u5236",style:{marginBottom:32}},S.a.createElement(_,{term:"\u8bbf\u95ee\u7c7b\u578b"},Y["b"][a.access]),S.a.createElement(_,{term:"\u4e0a\u7ebf\u65f6\u95f4"},a.start_time?P.a.unix(a.start_time).format("YY-MM-DD hh:mm:ss"):"\u7acb\u5373\u4e0a\u7ebf"),S.a.createElement(_,{term:"\u4e0b\u7ebf\u65f6\u95f4"},a.end_time?P.a.unix(a.end_time).format("YY-MM-DD hh:mm:ss"):"\u4e0d\u4e0b\u7ebf")),S.a.createElement(A["a"],{size:"large",title:"\u4e3b\u9898\u914d\u7f6e",style:{marginBottom:32}},S.a.createElement(_,{term:"\u9875\u9762\u4e3b\u9898"},a.page_theme_id),S.a.createElement(_,{term:"\u7ec4\u4ef6\u4e3b\u9898"},a.com_theme_id)),S.a.createElement(u["a"],{style:{marginBottom:32}}),S.a.createElement("div",{className:B.a.title},"PV\u7edf\u8ba1"),S.a.createElement(s["a"],{style:{marginBottom:24},pagination:!1,loading:t,dataSource:[],columns:[],rowKey:"id"}),S.a.createElement("div",{className:B.a.title},"UV\u7edf\u8ba1"),S.a.createElement(s["a"],{style:{marginBottom:16},pagination:!1,loading:t,dataSource:[],columns:[]})))))}}]),t}(O["PureComponent"]),r=l))||r);t["default"]=L},"+kNj":function(e,t,a){"use strict";var n=a("jehZ"),r=a.n(n),l=(a("14J3"),a("BMrR")),i=a("eHn4"),o=a.n(i),c=a("Y/ft"),s=a.n(c),u=a("q1tI"),p=a.n(u),m=a("TSYQ"),d=a.n(m),h=a("fUsW"),f=a.n(h),g=function(e){var t,a=e.className,n=e.title,i=e.col,c=void 0===i?3:i,u=e.layout,m=void 0===u?"horizontal":u,h=e.gutter,g=void 0===h?32:h,E=e.children,y=e.size,v=s()(e,["className","title","col","layout","gutter","children","size"]),b=d()(f.a.descriptionList,f.a[m],a,(t={},o()(t,f.a.small,"small"===y),o()(t,f.a.large,"large"===y),t)),D=c>4?4:c;return p.a.createElement("div",r()({className:b},v),n?p.a.createElement("div",{className:f.a.title},n):null,p.a.createElement(l["a"],{gutter:g},p.a.Children.map(E,function(e){return e?p.a.cloneElement(e,{column:D}):e})))},E=g,y=(a("jCWc"),a("kPKH")),v=(a("17x9"),{1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{xs:24,sm:12,md:6}}),b=function(e){var t=e.term,a=e.column,n=e.children,l=s()(e,["term","column","children"]);return p.a.createElement(y["a"],r()({},v[a],l),t&&p.a.createElement("div",{className:f.a.term},t),null!==n&&void 0!==n&&p.a.createElement("div",{className:f.a.detail},n))};b.defaultProps={term:""};var D=b;E.Description=D;t["a"]=E},"0BkQ":function(e,t,a){"use strict";a("iQDF");var n,r,l,i,o=a("+eQT"),c=(a("DZo9"),a("8z0m")),s=(a("+L6B"),a("2/Rp")),u=(a("Pwec"),a("CtXQ")),p=a("jehZ"),m=a.n(p),d=a("p0pE"),h=a.n(d),f=a("2Taf"),g=a.n(f),E=a("vZ4D"),y=a.n(E),v=a("l4Ni"),b=a.n(v),D=a("ujKo"),k=a.n(D),x=a("MhPg"),C=a.n(x),w=(a("y8nQ"),a("Vl3Y")),M=(a("OaEy"),a("2fM7")),N=(a("5NDa"),a("5rEg")),O=a("q1tI"),S=a.n(O),I=a("MuoO"),P=a("wd/R"),j=a.n(P),A=a("1pet"),T=N["a"].TextArea,V=M["a"].Option,q=(n=Object(I["connect"])(function(e){var t=e.app,a=e.loading;return{app:t,loading:a}}),r=w["a"].create(),n(l=r((i=function(e){function t(){var e,a;g()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=b()(this,(e=k()(t)).call.apply(e,[this].concat(r))),a.normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.form.validateFields,r=t.onSubmit;n(function(e,t){e||(A["f"].page.pageThemes=t.page_theme,A["f"].page.component.defaultTheme=t.page_theme,r(h()({},t,{start_time:t.start_time?t.start_time.valueOf():"",end_time:t.end_time?t.end_time.valueOf():"",design_json:JSON.stringify(A["f"])})))})},a}return C()(t,e),y()(t,[{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.detail,n=void 0===a?{}:a,r={labelCol:{span:6},wrapperCol:{span:10}};return S.a.createElement(w["a"],{onSubmit:this.handleSubmit},S.a.createElement(w["a"].Item,m()({label:"\u540d\u79f0"},r),t("name",{initialValue:n.name||"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u540d\u79f0"}]})(S.a.createElement(N["a"],null))),S.a.createElement(w["a"].Item,m()({label:"\u4ecb\u7ecd"},r),t("describe",{initialValue:n.describe||""})(S.a.createElement(T,null))),S.a.createElement(w["a"].Item,m()({label:"\u9875\u9762\u4e3b\u9898"},r),t("page_theme",{initialValue:n.page_theme||"walden",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u9875\u9762\u4e3b\u9898"}]})(S.a.createElement(M["a"],null,A["i"].map(function(e){return S.a.createElement(V,{key:e,value:e},e)})))),S.a.createElement(w["a"].Item,m()({label:"\u7ec4\u4ef6\u9ed8\u8ba4\u4e3b\u9898",help:"\u7ec4\u4ef6\u9ed8\u8ba4\u4e3b\u9898\u53ef\u4ee5\u88ab\u81ea\u5b9a\u4e49\u6837\u5f0f\u8986\u76d6"},r),t("com_theme",{initialValue:n.com_theme||"",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ec4\u4ef6\u9ed8\u8ba4\u4e3b\u9898"}]})(S.a.createElement(M["a"],null,A["g"].map(function(e){return S.a.createElement(V,{key:e,value:e},e)})))),S.a.createElement(w["a"].Item,m()({label:"\u8bbf\u95ee\u63a7\u5236"},r),t("access",{initialValue:n.access||1,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7528\u6237\u8bbf\u95ee\u6a21\u5f0f"}]})(S.a.createElement(M["a"],null,S.a.createElement(V,{key:1,value:1},"\u6240\u6709\u4eba\u53ef\u4ee5\u8bbf\u95ee"),S.a.createElement(V,{key:2,value:2,disabled:!0},"\u5bc6\u7801"),S.a.createElement(V,{key:3,value:3,disabled:!0},"\u767b\u5f55\u8bbf\u95ee")))),S.a.createElement(w["a"].Item,m()({label:"Logo"},r),t("logo",{valuePropName:"fileList",getValueFromEvent:this.normFile})(S.a.createElement(c["a"],{name:"logo",action:"/upload.do",listType:"picture"},S.a.createElement(s["a"],null,S.a.createElement(u["a"],{type:"upload"})," \u70b9\u51fb\u4e0a\u4f20")))),S.a.createElement(w["a"].Item,m()({label:"\u81ea\u52a8\u4e0a\u7ebf\u65f6\u95f4",help:"\u82e5\u4e0d\u8bbe\u7f6e\u5219\u3010\u7acb\u5373\u4e0a\u7ebf\u3011"},r),t("start_time",{initialValue:n.start_time?j.a.unix(n.start_time):null})(S.a.createElement(o["a"],{showTime:!0,format:"YYYY-MM-DD HH:mm:ss"}))),S.a.createElement(w["a"].Item,m()({label:"\u81ea\u52a8\u4e0b\u7ebf\u65f6\u95f4",help:"\u82e5\u4e0d\u8bbe\u7f6e\u5219\u3010\u4e00\u76f4\u4fdd\u6301\u5728\u7ebf\u72b6\u6001\u3011"},r),t("end_time",{initialValue:n.end_time?j.a.unix(n.end_time):null})(S.a.createElement(o["a"],{showTime:!0,format:"YYYY-MM-DD HH:mm:ss"}))),S.a.createElement(w["a"].Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:r.wrapperCol.span,offset:r.labelCol.span}},label:""},S.a.createElement(s["a"],{type:"primary",htmlType:"submit"},"\u63d0\u4ea4")))}}]),t}(O["Component"]),l=i))||l)||l);t["a"]=q},"6ESD":function(e,t,a){"use strict";a("+L6B");var n,r,l,i,o=a("2/Rp"),c=(a("giR+"),a("fyUT")),s=a("jehZ"),u=a.n(s),p=a("d6i3"),m=a.n(p),d=(a("miYZ"),a("tsqr")),h=a("1l/V"),f=a.n(h),g=a("2Taf"),E=a.n(g),y=a("vZ4D"),v=a.n(y),b=a("l4Ni"),D=a.n(b),k=a("ujKo"),x=a.n(k),C=a("MhPg"),w=a.n(C),M=(a("y8nQ"),a("Vl3Y")),N=(a("OaEy"),a("2fM7")),O=(a("5NDa"),a("5rEg")),S=a("q1tI"),I=a.n(S),P=a("MuoO"),j=(a("lc5D"),a("Bhyg"),a("1pet")),A=a("nlba"),T=a("FNLA"),V=a("7Y5E"),q=O["a"].TextArea,B=N["a"].Option,Y={labelCol:{span:6},wrapperCol:{span:10}},_=(n=Object(P["connect"])(function(e){var t=e.loading;return{loading:t}}),r=M["a"].create(),n(l=r((i=function(e){function t(){var e,a;E()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=D()(this,(e=x()(t)).call.apply(e,[this].concat(r))),a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.form.validateFields,r=t.onSubmit;n(function(e,t){e||r(t)})},a.renderContentForm=function(e){switch(e){case 1:return I.a.createElement(A["a"],null);case 2:return I.a.createElement(T["a"],null);case 3:return I.a.createElement(A["a"],null);case 4:return I.a.createElement(A["a"],null);default:return I.a.createElement(S["Fragment"],null)}},a.handleQueryData=f()(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=a.props.data.curData,2!==t.type){e.next=12;break}return e.prev=2,e.next=5,Object(V["e"])(JSON.parse(t.content));case 5:n=e.sent,n.success&&a.setState({testData:n.data}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),d["a"].error(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[2,9]])})),a}return w()(t,e),v()(t,[{key:"render",value:function(){var e=this.props,t=e.form,a=t.getFieldDecorator,n=t.getFieldValue,r=e.detail,l=void 0===r?{}:r;return I.a.createElement(M["a"],{onSubmit:this.handleSubmit},I.a.createElement(M["a"].Item,u()({label:"\u540d\u79f0"},Y),a("name",{initialValue:l.name||"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u540d\u79f0"}]})(I.a.createElement(O["a"],null))),I.a.createElement(M["a"].Item,u()({label:"\u4ecb\u7ecd"},Y),a("describe",{initialValue:l.describe||""})(I.a.createElement(q,null))),I.a.createElement(M["a"].Item,u()({label:"\u6570\u636e\u7c7b\u578b"},Y),a("type",{initialValue:l.type||1,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6570\u636e\u7c7b\u578b"}]})(I.a.createElement(N["a"],null,Object.keys(j["e"]).map(function(e){return I.a.createElement(B,{key:e,value:Number(e)},j["e"][e])})))),I.a.createElement(M["a"].Item,u()({label:"\u5237\u65b0\u65f6\u95f4"},Y,{help:"\u518d\u6b21\u8bf7\u6c42\u6570\u636e\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u82e5\u4e3a 0 \u5219\u4e0d\u5237\u65b0\uff08\u5355\u4f4d\u3010\u6beb\u79d2\u3011\uff09\u3002"}),a("refresh",{initialValue:l.refresh||0,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u540d\u79f0"}]})(I.a.createElement(c["a"],{min:0}))),a("content",{initialValue:l.content||"{}",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u540d\u79f0"}]})(this.renderContentForm(n("type"))),I.a.createElement(M["a"].Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:Y.wrapperCol.span,offset:Y.labelCol.span}},label:""},I.a.createElement(o["a"],{type:"primary",htmlType:"submit"},"\u63d0\u4ea4")))}}]),t}(S["Component"]),l=i))||l)||l);t["a"]=_},BCFu:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,r,l,i=a("bx4M"),o=(a("2qtc"),a("kLXV")),c=a("2Taf"),s=a.n(c),u=a("vZ4D"),p=a.n(u),m=a("l4Ni"),d=a.n(m),h=a("ujKo"),f=a.n(h),g=a("MhPg"),E=a.n(g),y=a("q1tI"),v=a.n(y),b=(a("wd/R"),a("MuoO")),D=(a("+kNj"),a("zHco")),k=(a("CqI5"),a("1pet"),a("usdK")),x=a("0BkQ"),C=(n=Object(b["connect"])(function(e){var t=e.app,a=e.loading;return{app:t,loading:a}}),n((l=function(e){function t(){var e,a;s()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=d()(this,(e=f()(t)).call.apply(e,[this].concat(r))),a.handleCreate=function(e){var t=a.props.dispatch;t({type:"app/createApp",payload:e,callback:function(e){e.success&&o["a"].confirm({title:"\u521b\u5efa\u6210\u529f\uff01",content:"\u662f\u5426\u8fdb\u5165\u8bbe\u8ba1\u9762\u677f",okText:"\u8fdb\u5165\u8bbe\u8ba1\u9762\u677f",cancelText:"\u8fd4\u56de",onOk:function(){k["a"].push("/app/design/".concat(e.data))},onCancel:function(){k["a"].goBack()}})}})},a}return E()(t,e),p()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return v.a.createElement(D["a"],{title:"\u521b\u5efa\u5e94\u7528"},v.a.createElement(i["a"],null,v.a.createElement(x["a"],{onSubmit:this.handleCreate})))}}]),t}(y["PureComponent"]),r=l))||r);t["default"]=C},CqI5:function(e,t,a){},FNLA:function(e,t,a){"use strict";a("+L6B");var n,r,l,i=a("2/Rp"),o=a("jehZ"),c=a.n(o),s=a("d6i3"),u=a.n(s),p=a("1l/V"),m=a.n(p),d=a("2Taf"),h=a.n(d),f=a("vZ4D"),g=a.n(f),E=a("l4Ni"),y=a.n(E),v=a("ujKo"),b=a.n(v),D=a("MhPg"),k=a.n(D),x=(a("y8nQ"),a("Vl3Y")),C=(a("5NDa"),a("5rEg")),w=a("q1tI"),M=a.n(w),N=(a("lc5D"),a("Bhyg"),a("tag3"),a("gYtI"),a("7Y5E")),O=C["a"].TextArea,S={labelCol:{span:6},wrapperCol:{span:10}},I=(n=x["a"].create({onValuesChange:function(e,t,a){e.onChange(JSON.stringify(a))}}),n((l=function(e){function t(){var e,a;h()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=y()(this,(e=b()(t)).call.apply(e,[this].concat(r))),a.state={testData:""},a.handleQueryData=m()(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.props.form.getFieldsValue,e.next=3,Object(N["e"])(t());case 3:n=e.sent,n.success&&a.setState({testData:n.data});case 5:case"end":return e.stop()}},e)})),a}return k()(t,e),g()(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=void 0===t?"{}":t,n=e.modify,r=void 0===n||n,l=e.layout,o=void 0===l?S:l,s=e.form.getFieldDecorator,u=this.state.testData,p=JSON.parse(a);return M.a.createElement(w["Fragment"],null,M.a.createElement(x["a"].Item,c()({label:"\u4e3b\u673a"},o),s("host",{initialValue:p.host||"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e94\u7528\u540d\u79f0"}]})(M.a.createElement(C["a"],{disabled:!r}))),M.a.createElement(x["a"].Item,c()({label:"\u7aef\u53e3\u53f7"},o),s("port",{initialValue:p.port||""})(M.a.createElement(C["a"],{disabled:!r}))),M.a.createElement(x["a"].Item,c()({label:"\u7528\u6237\u540d"},o),s("user",{initialValue:p.user||"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}]})(M.a.createElement(C["a"],{disabled:!r}))),M.a.createElement(x["a"].Item,c()({label:"\u5bc6\u7801"},o),s("password",{initialValue:p.password||""})(M.a.createElement(C["a"],{type:"password",disabled:!r}))),M.a.createElement(x["a"].Item,c()({label:"\u6570\u636e\u5e93"},o),s("database",{initialValue:p.database||"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6570\u636e\u5e93"}]})(M.a.createElement(C["a"],{disabled:!r}))),M.a.createElement(x["a"].Item,c()({label:"SQL"},o),s("sql",{initialValue:p.sql||"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165 SQL"}]})(M.a.createElement(O,{disabled:!r}))),M.a.createElement(x["a"].Item,c()({label:"\u6d4b\u8bd5"},o),M.a.createElement(i["a"],{onClick:this.handleQueryData},"\u6d4b\u8bd5"),M.a.createElement(O,{disabled:!0,value:JSON.stringify(u,null,2),autosize:{minRows:2,maxRows:20}})))}}]),t}(w["Component"]),r=l))||r);t["a"]=I},J8hi:function(e,t,a){},KgoZ:function(e,t,a){e.exports={title:"antd-pro-pages-app-detail-index-title"}},fUsW:function(e,t,a){e.exports={descriptionList:"antd-pro-components-description-list-index-descriptionList",title:"antd-pro-components-description-list-index-title",term:"antd-pro-components-description-list-index-term",detail:"antd-pro-components-description-list-index-detail",small:"antd-pro-components-description-list-index-small",large:"antd-pro-components-description-list-index-large",vertical:"antd-pro-components-description-list-index-vertical"}},ixmw:function(e,t,a){"use strict";a.r(t);var n=a("jehZ"),r=a.n(n),l=a("p0pE"),i=a.n(l),o=a("2Taf"),c=a.n(o),s=a("vZ4D"),u=a.n(s),p=a("l4Ni"),m=a.n(p),d=a("ujKo"),h=a.n(d),f=a("MhPg"),g=a.n(f),E=(a("B9cy"),a("Ol7k")),y=a("q1tI"),v=a.n(y),b=a("ZFw/"),D=a.n(b),k=a("Y+p1"),x=a.n(k),C=a("Wwog"),w=a("MuoO"),M=a("E6Dt"),N=a("TSYQ"),O=a.n(N),S=a("bALw"),I=a.n(S),P=a("lU33"),j=a("LLXN"),A=a("HZnN"),T=a("mxmt"),V=a.n(T),q=a("gJ0l"),B=a("ctiy"),Y=a("R1Dz"),_=a("wOmh"),F=a("xqX8"),L=a("T+dw"),z=a("W660"),K=a.n(z),Z=(v.a.lazy(function(){return a.e(0).then(a.bind(null,"PceP"))}),E["a"].Content),R={"screen-xs":{maxWidth:575},"screen-sm":{minWidth:576,maxWidth:767},"screen-md":{minWidth:768,maxWidth:991},"screen-lg":{minWidth:992,maxWidth:1199},"screen-xl":{minWidth:1200,maxWidth:1599},"screen-xxl":{minWidth:1600}},Q=function(e){function t(e){var a;return c()(this,t),a=m()(this,h()(t).call(this,e)),a.matchParamsPath=function(e,t){var a=Object.keys(t).find(function(t){return I()(t).test(e)});return t[a]},a.getRouterAuthority=function(e,t){var a=["noAuthority"],n=function e(t,n){return n.forEach(function(n){return n.path&&I()(n.path).test(t)?a=n.authority:n.routes&&(a=e(t,n.routes)),n}),a};return n(e,t)},a.getPageTitle=function(e,t){var n=a.matchParamsPath(e,t);if(!n)return L["title"];var r=Object(j["formatMessage"])({id:n.locale||n.name,defaultMessage:n.name});return"".concat(r," - ").concat(L["title"])},a.getLayoutStyle=function(){var e=a.props,t=e.fixSiderbar,n=e.isMobile,r=e.collapsed,l=e.layout;return t&&"topmenu"!==l&&!n?{paddingLeft:r?"80px":"256px"}:null},a.handleMenuCollapse=function(e){var t=a.props.dispatch;t({type:"global/changeLayoutCollapsed",payload:e})},a.renderSettingDrawer=function(){return null},a.getPageTitle=Object(C["a"])(a.getPageTitle),a.matchParamsPath=Object(C["a"])(a.matchParamsPath,x.a),a}return g()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.route,n=a.routes,r=a.authority;t({type:"global/getGlobalUserInfo"}),t({type:"menu/getMenuData",payload:{routes:n,authority:r}})}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.collapsed,n=t.isMobile;!n||e.isMobile||a||this.handleMenuCollapse(!1)}},{key:"getContext",value:function(){var e=this.props,t=e.location,a=e.breadcrumbNameMap;return{location:t,breadcrumbNameMap:a}}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.location.pathname,l=t.isMobile,o=t.menuData,c=t.breadcrumbNameMap,s=t.route.routes,u=t.fixedHeader,p=this.getRouterAuthority(n,s),m=u?{}:{paddingTop:0},d=v.a.createElement(E["a"],null,v.a.createElement(E["a"],{style:i()({},this.getLayoutStyle(),{minHeight:"100vh"})},v.a.createElement(B["a"],r()({menuData:o,handleMenuCollapse:this.handleMenuCollapse,logo:V.a,isMobile:l},this.props)),v.a.createElement(Z,{className:K.a.content,style:m},v.a.createElement(A["a"],{authority:p,noMatch:v.a.createElement(_["a"],null)},a)),v.a.createElement(q["a"],null)));return v.a.createElement(v.a.Fragment,null,v.a.createElement(D.a,{title:this.getPageTitle(n,c)},v.a.createElement(M["ContainerQuery"],{query:R},function(t){return v.a.createElement(Y["a"].Provider,{value:e.getContext()},v.a.createElement("div",{className:O()(t)},d))})),v.a.createElement(y["Suspense"],{fallback:v.a.createElement(F["default"],null)},this.renderSettingDrawer()))}}]),t}(v.a.PureComponent);t["default"]=Object(w["connect"])(function(e){var t=e.global,a=e.setting,n=e.menu;return i()({collapsed:t.collapsed,layout:a.layout,menuData:n.menuData,breadcrumbNameMap:n.breadcrumbNameMap},a)})(function(e){return v.a.createElement(P["a"],{query:"(max-width: 599px)"},function(t){return v.a.createElement(Q,r()({},e,{isMobile:t}))})})},nlba:function(e,t,a){"use strict";a("y8nQ");var n=a("Vl3Y"),r=a("jehZ"),l=a.n(r),i=a("2Taf"),o=a.n(i),c=a("vZ4D"),s=a.n(c),u=a("l4Ni"),p=a.n(u),m=a("ujKo"),d=a.n(m),h=a("MhPg"),f=a.n(h),g=a("q1tI"),E=a.n(g),y=a("lc5D"),v=a.n(y),b=(a("Bhyg"),a("tag3"),a("gYtI"),{labelCol:{span:6},wrapperCol:{span:10}}),D=function(e){function t(){var e,a;o()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=p()(this,(e=d()(t)).call.apply(e,[this].concat(r))),a.state={},a.handleAceChange=function(e){a.props.onChange(e)},a}return f()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.modify,r=void 0===a||a,i=e.layout,o=void 0===i?b:i;return E.a.createElement(g["Fragment"],null,E.a.createElement(n["a"].Item,l()({label:"JOSN \u6587\u672c"},o),E.a.createElement(v.a,{mode:"json",theme:"xcode",onChange:this.handleAceChange,name:"JOSN_FORM",value:t,tabSize:2,readOnly:!r,style:{height:600,width:"100%",border:"#dedede solid 1px"},editorProps:{$blockScrolling:1/0}})))}}]),t}(g["Component"]);t["a"]=D},npD3:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,r,l,i=a("bx4M"),o=(a("+L6B"),a("2/Rp")),c=(a("2qtc"),a("kLXV")),s=a("p0pE"),u=a.n(s),p=a("2Taf"),m=a.n(p),d=a("vZ4D"),h=a.n(d),f=a("l4Ni"),g=a.n(f),E=a("ujKo"),y=a.n(E),v=a("MhPg"),b=a.n(v),D=a("q1tI"),k=a.n(D),x=(a("wd/R"),a("MuoO")),C=(a("+kNj"),a("zHco")),w=(a("J8hi"),a("1pet"),a("usdK")),M=a("0BkQ"),N=(n=Object(x["connect"])(function(e){var t=e.app,a=e.loading;return{app:t,loading:a}}),n((l=function(e){function t(){var e,a;m()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=g()(this,(e=y()(t)).call.apply(e,[this].concat(r))),a.state={detail:{}},a.handleUpdate=function(e){var t=a.props,n=t.dispatch,r=t.match.params.id;console.log(e),n({type:"app/updateApp",payload:u()({},e,{id:r}),callback:function(e){e.success&&c["a"].confirm({title:"\u66f4\u65b0\u6210\u529f\uff01",content:"\u662f\u5426\u8fdb\u5165\u8bbe\u8ba1\u9762\u677f",okText:"\u8fdb\u5165\u8bbe\u8ba1\u9762\u677f",cancelText:"\u8fd4\u56de",onOk:function(){w["a"].push("/app/design/".concat(e.data))},onCancel:function(){w["a"].goBack()}})}})},a}return b()(t,e),h()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.dispatch,n=t.match.params.id;a({type:"app/fetchAppDetail",payload:{id:n},callback:function(t){e.setState({detail:t})}})}},{key:"render",value:function(){var e=this.state.detail;return k.a.createElement(C["a"],{title:"\u7f16\u8f91\u5e94\u7528"},k.a.createElement(i["a"],{title:"\u7f16\u8f91\uff1a".concat(e.name),extra:k.a.createElement(o["a"],{onClick:function(){return w["a"].push("/app/design/".concat(e.id))},type:"primary"},"\u8fdb\u5165\u8bbe\u8ba1\u9762\u677f")},k.a.createElement(M["a"],{onSubmit:this.handleUpdate,detail:e})))}}]),t}(D["PureComponent"]),r=l))||r);t["default"]=N},nwCE:function(e,t,a){"use strict";a.r(t);a("14J3");var n,r,l,i=a("BMrR"),o=(a("jCWc"),a("kPKH")),c=(a("IzEo"),a("bx4M")),s=(a("/zsF"),a("PArb")),u=(a("2qtc"),a("kLXV")),p=a("d6i3"),m=a.n(p),d=a("1l/V"),h=a.n(d),f=a("2Taf"),g=a.n(f),E=a("vZ4D"),y=a.n(E),v=a("l4Ni"),b=a.n(v),D=a("ujKo"),k=a.n(D),x=a("MhPg"),C=a.n(x),w=(a("+L6B"),a("2/Rp")),M=a("q1tI"),N=a.n(M),O=a("wd/R"),S=a.n(O),I=a("MuoO"),P=a("+kNj"),j=a("zHco"),A=a("usdK"),T=a("yMpP"),V=a.n(T),q=a("1pet"),B=a("nlba"),Y=a("FNLA"),_=P["a"].Description,F=w["a"].Group,L=(n=Object(I["connect"])(function(e){var t=e.data,a=e.loading;return{data:t,loading:a.effects["data/fetchDataDetail"]}}),n((l=function(e){function t(){var e,a;g()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=b()(this,(e=k()(t)).call.apply(e,[this].concat(r))),a.state={testData:""},a.handleToggleStatus=h()(m.a.mark(function e(){var t,n,r,l,i;return m.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=a.props,n=t.data.curData,r=n.id,l=n.status,i=t.dispatch,!r||3===r){e.next=4;break}return e.next=4,i({type:"app/toggleStatus",payload:{id:r,status:1===l?2:1}});case 4:case"end":return e.stop()}},e)})),a.showDel=function(){u["a"].confirm({title:"\u5220\u9664",content:N.a.createElement("p",{style:{color:"red"}},"\u5220\u9664\u540e\u6570\u636e\u65e0\u6cd5\u6062\u590d\uff0c\u786e\u5b9a\u5220\u9664\u5e94\u7528\u5417\uff1f"),onOk:a.handleDel})},a.handleDel=function(){var e=a.props,t=e.app.curApp.id,n=e.dispatch;n({type:"app/deleteApp",payload:{id:t},callback:function(e){e.success&&A["a"].push("/app/dashboard")}})},a}return C()(t,e),y()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.match.params.id;t({type:"data/fetchDataDetail",payload:{id:a}})}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.data.curData,n=e.match.params,r=N.a.createElement(M["Fragment"],null,N.a.createElement(F,null,N.a.createElement(w["a"],{onClick:function(){return A["a"].push("/app/data/edit/".concat(n.id))}},"\u7f16\u8f91"),N.a.createElement(w["a"],{onClick:this.showDel,type:"danger"},"\u5220\u9664")));return N.a.createElement(j["a"],{loading:t,title:"\u6570\u636e\u8be6\u60c5",action:r},a&&N.a.createElement(i["a"],{gutter:24},N.a.createElement(o["a"],{xl:24,lg:24,md:24,sm:24,xs:24},N.a.createElement(c["a"],{bordered:!1,title:a.name},N.a.createElement(P["a"],{size:"large",title:"\u57fa\u672c\u4fe1\u606f",style:{marginBottom:32}},N.a.createElement(_,{term:"\u540d\u79f0"},a.name),N.a.createElement(_,{term:"\u4ecb\u7ecd"},a.describe),N.a.createElement(_,{term:"\u5237\u65b0\u65f6\u95f4"},a.refresh," \u6beb\u79d2"),N.a.createElement(_,{term:"\u521b\u5efa\u65f6\u95f4"},S()(a.create_time).format("YY-MM-DD hh:mm"))),N.a.createElement(s["a"],{style:{marginBottom:32}}),N.a.createElement(P["a"],{size:"large",title:"\u6570\u636e\u7c7b\u578b",style:{marginBottom:32}},N.a.createElement(_,{term:"\u7c7b\u578b"},q["e"][a.type])),N.a.createElement(s["a"],{style:{marginBottom:32}}),N.a.createElement("div",{className:V.a.title},"\u6570\u636e\u5185\u5bb9"),1==a.type&&N.a.createElement(B["a"],{value:a.content,modify:!1,layout:{labelCol:{span:2},wrapperCol:{span:20}}}),2==a.type&&N.a.createElement(Y["a"],{value:a.content,modify:!1,layout:{labelCol:{span:2},wrapperCol:{span:20}}})))))}}]),t}(M["PureComponent"]),r=l))||r);t["default"]=L},wvLg:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,r,l,i=a("bx4M"),o=a("2Taf"),c=a.n(o),s=a("vZ4D"),u=a.n(s),p=a("l4Ni"),m=a.n(p),d=a("ujKo"),h=a.n(d),f=a("MhPg"),g=a.n(f),E=a("q1tI"),y=a.n(E),v=a("MuoO"),b=a("usdK"),D=a("zHco"),k=(a("1pet"),a("6ESD")),x=(n=Object(v["connect"])(function(e){var t=e.app,a=e.loading;return{app:t,loading:a}}),n((l=function(e){function t(){var e,a;c()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=m()(this,(e=h()(t)).call.apply(e,[this].concat(r))),a.handleCreate=function(e){var t=a.props.dispatch;t({type:"data/createData",payload:e,callback:function(e){e.success&&b["a"].push("/app/dashboard")}})},a}return g()(t,e),u()(t,[{key:"render",value:function(){return y.a.createElement(D["a"],{title:"\u521b\u5efa\u6570\u636e"},y.a.createElement(i["a"],null,y.a.createElement(k["a"],{onSubmit:this.handleCreate})))}}]),t}(E["PureComponent"]),r=l))||r);t["default"]=x},yMpP:function(e,t,a){e.exports={title:"antd-pro-pages-data-index-title"}}}]);