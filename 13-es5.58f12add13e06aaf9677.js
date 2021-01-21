function _inherits(l,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(n&&n.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),n&&_setPrototypeOf(l,n)}function _setPrototypeOf(l,n){return(_setPrototypeOf=Object.setPrototypeOf||function(l,n){return l.__proto__=n,l})(l,n)}function _createSuper(l){var n=_isNativeReflectConstruct();return function(){var u,t=_getPrototypeOf(l);if(n){var e=_getPrototypeOf(this).constructor;u=Reflect.construct(t,arguments,e)}else u=t.apply(this,arguments);return _possibleConstructorReturn(this,u)}}function _possibleConstructorReturn(l,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(l):n}function _assertThisInitialized(l){if(void 0===l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(l){return!1}}function _getPrototypeOf(l){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)})(l)}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var t=n[u];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{GHar:function(l,n,u){"use strict";u.r(n),u.d(n,"AuthRoutingModuleNgFactory",(function(){return ll}));var t=u("8Y7J"),e=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"ngOnInit",value:function(){}}]),l}(),r=u("s7LF"),s=u("ArFd"),i=u("GFLt"),a=u("LHgG"),o=u("cRQm"),c=function(l){_inherits(u,l);var n=_createSuper(u);function u(l,t,e,r,s,i,a){var o;return _classCallCheck(this,u),(o=n.call(this,l,t,e,r,a)).builder=s,o.cookieService=i,o.formErrors={useridentifier:"",password:""},o.validationMessages={useridentifier:{required:"Email is required",email:"Enter a valid email address"},password:{required:"Password is required",minLength:"Password must be at least eight characters long"}},o}return _createClass(u,[{key:"ngOnInit",value:function(){this.logInForm=this.builder.group({useridentifier:[null,[r.w.required,r.w.email]],password:[null,[r.w.required,r.w.minLength(8)]],model:["admin",[]]})}},{key:"processLogin",value:function(){var l=this;this.errorMessage="",this.logInForm.markAllAsTouched(),this.logInForm.updateValueAndValidity(),this.logInForm.invalid?this.validateLogInFrom():this.sendRequestToServer("auth/login","post",JSON.stringify(this.logInForm.value),!0,(function(n){var u=l.handleResponse(n);l.user.loggedIn=u.success,l.user.userData=u.user,l.user.token=u.token,l.user.permissions=u.permissions,l.commonService.setLoginStatus(!0)}),(function(n){l.errorMessage=n.error.message,l.logDev(n)}))}},{key:"handleResponse",value:function(l){return l}},{key:"validateLogInFrom",value:function(){this.validateForm(this.logInForm,this.validationMessages,this.formErrors)}},{key:"field",get:function(){return this.logInForm.controls}}]),u}(s.a),b=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"ngOnInit",value:function(){}}]),l}(),d={title:"Akua E-Sales"},f={title:"Akua E-Sales"},g={title:"Pages Forgot Password - SB Admin Angular"},p=function l(){_classCallCheck(this,l)},m=u("pMnS"),C=u("fNgX"),h=u("9AJC"),v=u("dCp6"),y=u("KTHn"),R=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"ngOnInit",value:function(){}}]),l}(),P=t.Ab({encapsulation:0,styles:[[""]],data:{}});function k(l){return t.ec(2,[(l()(),t.Cb(0,0,null,null,6,"div",[["class","bg-primary"],["id","layoutAuthentication"]],null,null,null,null,null)),(l()(),t.Cb(1,0,null,null,2,"div",[["id","layoutAuthentication_content"]],null,null,null,null,null)),(l()(),t.Cb(2,0,null,null,1,"main",[],null,null,null,null,null)),t.Qb(null,0),(l()(),t.Cb(4,0,null,null,2,"div",[["id","layoutAuthentication_footer"]],null,null,null,null,null)),(l()(),t.Cb(5,0,null,null,1,"sb-footer",[],null,null,null,v.b,v.a)),t.Bb(6,114688,null,0,y.a,[],null,null)],(function(l,n){l(n,6,0)}),null)}var w=u("SVse"),_=u("iInd"),B=u("z4EA"),I=u("G0yt"),L=t.Ab({encapsulation:0,styles:[[""]],data:{}});function A(l){return t.ec(0,[(l()(),t.Cb(0,0,null,null,1,"div",[["class","alert alert-danger alert-dismissible"],["role","alert"]],null,null,null,null,null)),(l()(),t.bc(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.errorMessage)}))}function E(l){return t.ec(0,[(l()(),t.Cb(0,0,null,null,1,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),t.bc(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.formErrors.useridentifier)}))}function S(l){return t.ec(0,[(l()(),t.Cb(0,0,null,null,1,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),t.bc(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.formErrors.password)}))}function O(l){return t.ec(2,[(l()(),t.Cb(0,0,null,null,45,"sb-layout-auth",[],null,null,null,k,P)),t.Bb(1,114688,null,0,R,[],null,null),(l()(),t.Cb(2,0,null,0,43,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.Cb(3,0,null,null,42,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.Cb(4,0,null,null,41,"div",[["class","col-lg-5"]],null,null,null,null,null)),(l()(),t.Cb(5,0,null,null,40,"div",[["class","card shadow-lg border-0 rounded-lg mt-5"]],null,null,null,null,null)),(l()(),t.Cb(6,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Cb(7,0,null,null,1,"h3",[["class","text-center font-weight-light my-4"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Login"])),(l()(),t.Cb(9,0,null,null,36,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.lb(16777216,null,null,1,null,A)),t.Bb(11,16384,null,0,w.n,[t.T,t.Q],{ngIf:[0,"ngIf"]},null),(l()(),t.Cb(12,0,null,null,33,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,r=l.component;return"submit"===n&&(e=!1!==t.Rb(l,14).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Rb(l,14).onReset()&&e),"ngSubmit"===n&&(e=!1!==r.processLogin()&&e),e}),null,null)),t.Bb(13,16384,null,0,r.B,[],null,null),t.Bb(14,540672,null,0,r.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Wb(2048,null,r.c,null,[r.i]),t.Bb(16,16384,null,0,r.o,[[4,r.c]],null,null),(l()(),t.Cb(17,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Cb(18,0,null,null,1,"label",[["class","small mb-1"],["for","useridentifier"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Email"])),(l()(),t.Cb(20,0,null,null,7,"input",[["class","form-control py-4"],["formControlName","useridentifier"],["id","useridentifier"],["placeholder","Enter email address"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==t.Rb(l,21)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Rb(l,21).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Rb(l,21)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Rb(l,21)._compositionEnd(u.target.value)&&e),"blur"===n&&(e=!1!==r.validateLogInFrom()&&e),e}),null,null)),t.Bb(21,16384,null,0,r.d,[t.I,t.n,[2,r.a]],null,null),t.Bb(22,16384,null,0,r.u,[],{required:[0,"required"]},null),t.Wb(1024,null,r.k,(function(l){return[l]}),[r.u]),t.Wb(1024,null,r.l,(function(l){return[l]}),[r.d]),t.Bb(25,671744,null,0,r.g,[[3,r.c],[6,r.k],[8,null],[6,r.l],[2,r.z]],{name:[0,"name"]},null),t.Wb(2048,null,r.m,null,[r.g]),t.Bb(27,16384,null,0,r.n,[[4,r.m]],null,null),(l()(),t.lb(16777216,null,null,1,null,E)),t.Bb(29,16384,null,0,w.n,[t.T,t.Q],{ngIf:[0,"ngIf"]},null),(l()(),t.Cb(30,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Cb(31,0,null,null,1,"label",[["class","small mb-1"],["for","password"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Password"])),(l()(),t.Cb(33,0,null,null,7,"input",[["class","form-control py-4"],["formControlName","password"],["id","password"],["placeholder","Enter password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==t.Rb(l,34)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Rb(l,34).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Rb(l,34)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Rb(l,34)._compositionEnd(u.target.value)&&e),"blur"===n&&(e=!1!==r.validateLogInFrom()&&e),e}),null,null)),t.Bb(34,16384,null,0,r.d,[t.I,t.n,[2,r.a]],null,null),t.Bb(35,16384,null,0,r.u,[],{required:[0,"required"]},null),t.Wb(1024,null,r.k,(function(l){return[l]}),[r.u]),t.Wb(1024,null,r.l,(function(l){return[l]}),[r.d]),t.Bb(38,671744,null,0,r.g,[[3,r.c],[6,r.k],[8,null],[6,r.l],[2,r.z]],{name:[0,"name"]},null),t.Wb(2048,null,r.m,null,[r.g]),t.Bb(40,16384,null,0,r.n,[[4,r.m]],null,null),(l()(),t.lb(16777216,null,null,1,null,S)),t.Bb(42,16384,null,0,w.n,[t.T,t.Q],{ngIf:[0,"ngIf"]},null),(l()(),t.Cb(43,0,null,null,2,"div",[["class","form-group text-center"]],null,null,null,null,null)),(l()(),t.Cb(44,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Login"]))],(function(l,n){var u=n.component;l(n,1,0),l(n,11,0,u.errorMessage),l(n,14,0,u.logInForm),l(n,22,0,""),l(n,25,0,"useridentifier"),l(n,29,0,u.formErrors.useridentifier),l(n,35,0,""),l(n,38,0,"password"),l(n,42,0,u.formErrors.password)}),(function(l,n){l(n,12,0,t.Rb(n,16).ngClassUntouched,t.Rb(n,16).ngClassTouched,t.Rb(n,16).ngClassPristine,t.Rb(n,16).ngClassDirty,t.Rb(n,16).ngClassValid,t.Rb(n,16).ngClassInvalid,t.Rb(n,16).ngClassPending),l(n,20,0,t.Rb(n,22).required?"":null,t.Rb(n,27).ngClassUntouched,t.Rb(n,27).ngClassTouched,t.Rb(n,27).ngClassPristine,t.Rb(n,27).ngClassDirty,t.Rb(n,27).ngClassValid,t.Rb(n,27).ngClassInvalid,t.Rb(n,27).ngClassPending),l(n,33,0,t.Rb(n,35).required?"":null,t.Rb(n,40).ngClassUntouched,t.Rb(n,40).ngClassTouched,t.Rb(n,40).ngClassPristine,t.Rb(n,40).ngClassDirty,t.Rb(n,40).ngClassValid,t.Rb(n,40).ngClassInvalid,t.Rb(n,40).ngClassPending)}))}var x=t.yb("sb-login",c,(function(l){return t.ec(0,[(l()(),t.Cb(0,0,null,null,1,"sb-login",[],null,null,null,O,L)),t.Bb(1,114688,null,0,c,[i.a,o.a,a.a,_.l,r.f,B.a,I.A],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),F=t.Ab({encapsulation:0,styles:[[""]],data:{}});function T(l){return t.ec(2,[(l()(),t.Cb(0,0,null,null,49,"sb-layout-auth",[],null,null,null,k,P)),t.Bb(1,114688,null,0,R,[],null,null),(l()(),t.Cb(2,0,null,0,47,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.Cb(3,0,null,null,46,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.Cb(4,0,null,null,45,"div",[["class","col-lg-7"]],null,null,null,null,null)),(l()(),t.Cb(5,0,null,null,44,"div",[["class","card shadow-lg border-0 rounded-lg mt-5"]],null,null,null,null,null)),(l()(),t.Cb(6,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Cb(7,0,null,null,1,"h3",[["class","text-center font-weight-light my-4"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Create Account"])),(l()(),t.Cb(9,0,null,null,35,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.Cb(10,0,null,null,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Rb(l,12).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Rb(l,12).onReset()&&e),e}),null,null)),t.Bb(11,16384,null,0,r.B,[],null,null),t.Bb(12,4210688,null,0,r.p,[[8,null],[8,null]],null,null),t.Wb(2048,null,r.c,null,[r.p]),t.Bb(14,16384,null,0,r.o,[[4,r.c]],null,null),(l()(),t.Cb(15,0,null,null,10,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),t.Cb(16,0,null,null,4,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.Cb(17,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Cb(18,0,null,null,1,"label",[["class","small mb-1"],["for","inputFirstName"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["First Name"])),(l()(),t.Cb(20,0,null,null,0,"input",[["class","form-control py-4"],["id","inputFirstName"],["placeholder","Enter first name"],["type","text"]],null,null,null,null,null)),(l()(),t.Cb(21,0,null,null,4,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.Cb(22,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Cb(23,0,null,null,1,"label",[["class","small mb-1"],["for","inputLastName"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Last Name"])),(l()(),t.Cb(25,0,null,null,0,"input",[["class","form-control py-4"],["id","inputLastName"],["placeholder","Enter last name"],["type","text"]],null,null,null,null,null)),(l()(),t.Cb(26,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Cb(27,0,null,null,1,"label",[["class","small mb-1"],["for","inputEmailAddress"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Email"])),(l()(),t.Cb(29,0,null,null,0,"input",[["aria-describedby","emailHelp"],["class","form-control py-4"],["id","inputEmailAddress"],["placeholder","Enter email address"],["type","email"]],null,null,null,null,null)),(l()(),t.Cb(30,0,null,null,10,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),t.Cb(31,0,null,null,4,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.Cb(32,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Cb(33,0,null,null,1,"label",[["class","small mb-1"],["for","inputPassword"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Password"])),(l()(),t.Cb(35,0,null,null,0,"input",[["class","form-control py-4"],["id","inputPassword"],["placeholder","Enter password"],["type","password"]],null,null,null,null,null)),(l()(),t.Cb(36,0,null,null,4,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.Cb(37,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Cb(38,0,null,null,1,"label",[["class","small mb-1"],["for","inputConfirmPassword"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Confirm Password"])),(l()(),t.Cb(40,0,null,null,0,"input",[["class","form-control py-4"],["id","inputConfirmPassword"],["placeholder","Confirm password"],["type","password"]],null,null,null,null,null)),(l()(),t.Cb(41,0,null,null,3,"div",[["class","form-group mt-4 mb-0"]],null,null,null,null,null)),(l()(),t.Cb(42,0,null,null,2,"a",[["class","btn btn-primary btn-block"],["routerLink","/dashboard"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Rb(l,43).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.Bb(43,671744,null,0,_.n,[_.l,_.a,w.k],{routerLink:[0,"routerLink"]},null),(l()(),t.bc(-1,null,["Create Account"])),(l()(),t.Cb(45,0,null,null,4,"div",[["class","card-footer text-center"]],null,null,null,null,null)),(l()(),t.Cb(46,0,null,null,3,"div",[["class","small"]],null,null,null,null,null)),(l()(),t.Cb(47,0,null,null,2,"a",[["routerLink","/auth/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Rb(l,48).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.Bb(48,671744,null,0,_.n,[_.l,_.a,w.k],{routerLink:[0,"routerLink"]},null),(l()(),t.bc(-1,null,["Have an account? Go to login"]))],(function(l,n){l(n,1,0),l(n,43,0,"/dashboard"),l(n,48,0,"/auth/login")}),(function(l,n){l(n,10,0,t.Rb(n,14).ngClassUntouched,t.Rb(n,14).ngClassTouched,t.Rb(n,14).ngClassPristine,t.Rb(n,14).ngClassDirty,t.Rb(n,14).ngClassValid,t.Rb(n,14).ngClassInvalid,t.Rb(n,14).ngClassPending),l(n,42,0,t.Rb(n,43).target,t.Rb(n,43).href),l(n,47,0,t.Rb(n,48).target,t.Rb(n,48).href)}))}var j=t.yb("sb-register",b,(function(l){return t.ec(0,[(l()(),t.Cb(0,0,null,null,1,"sb-register",[],null,null,null,T,F)),t.Bb(1,114688,null,0,b,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),K=t.Ab({encapsulation:0,styles:[[""]],data:{}});function q(l){return t.ec(2,[(l()(),t.Cb(0,0,null,null,32,"sb-layout-auth",[],null,null,null,k,P)),t.Bb(1,114688,null,0,R,[],null,null),(l()(),t.Cb(2,0,null,0,30,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.Cb(3,0,null,null,29,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.Cb(4,0,null,null,28,"div",[["class","col-lg-5"]],null,null,null,null,null)),(l()(),t.Cb(5,0,null,null,27,"div",[["class","card shadow-lg border-0 rounded-lg mt-5"]],null,null,null,null,null)),(l()(),t.Cb(6,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Cb(7,0,null,null,1,"h3",[["class","text-center font-weight-light my-4"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Password Recovery"])),(l()(),t.Cb(9,0,null,null,18,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.Cb(10,0,null,null,1,"div",[["class","small mb-3 text-muted"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Enter your email address and we will send you a link to reset your password. "])),(l()(),t.Cb(12,0,null,null,15,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Rb(l,14).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Rb(l,14).onReset()&&e),e}),null,null)),t.Bb(13,16384,null,0,r.B,[],null,null),t.Bb(14,4210688,null,0,r.p,[[8,null],[8,null]],null,null),t.Wb(2048,null,r.c,null,[r.p]),t.Bb(16,16384,null,0,r.o,[[4,r.c]],null,null),(l()(),t.Cb(17,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Cb(18,0,null,null,1,"label",[["class","small mb-1"],["for","inputEmailAddress"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Email"])),(l()(),t.Cb(20,0,null,null,0,"input",[["aria-describedby","emailHelp"],["class","form-control py-4"],["id","inputEmailAddress"],["placeholder","Enter email address"],["type","email"]],null,null,null,null,null)),(l()(),t.Cb(21,0,null,null,6,"div",[["class","form-group d-flex align-items-center justify-content-between mt-4 mb-0"]],null,null,null,null,null)),(l()(),t.Cb(22,0,null,null,2,"a",[["class","small"],["routerLink","/auth/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Rb(l,23).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.Bb(23,671744,null,0,_.n,[_.l,_.a,w.k],{routerLink:[0,"routerLink"]},null),(l()(),t.bc(-1,null,["Return to login"])),(l()(),t.Cb(25,0,null,null,2,"a",[["class","btn btn-primary"],["routerLink","/auth/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Rb(l,26).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.Bb(26,671744,null,0,_.n,[_.l,_.a,w.k],{routerLink:[0,"routerLink"]},null),(l()(),t.bc(-1,null,["Reset Password"])),(l()(),t.Cb(28,0,null,null,4,"div",[["class","card-footer text-center"]],null,null,null,null,null)),(l()(),t.Cb(29,0,null,null,3,"div",[["class","small"]],null,null,null,null,null)),(l()(),t.Cb(30,0,null,null,2,"a",[["routerLink","/auth/register"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Rb(l,31).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.Bb(31,671744,null,0,_.n,[_.l,_.a,w.k],{routerLink:[0,"routerLink"]},null),(l()(),t.bc(-1,null,["Need an account? Sign up!"]))],(function(l,n){l(n,1,0),l(n,23,0,"/auth/login"),l(n,26,0,"/auth/login"),l(n,31,0,"/auth/register")}),(function(l,n){l(n,12,0,t.Rb(n,16).ngClassUntouched,t.Rb(n,16).ngClassTouched,t.Rb(n,16).ngClassPristine,t.Rb(n,16).ngClassDirty,t.Rb(n,16).ngClassValid,t.Rb(n,16).ngClassInvalid,t.Rb(n,16).ngClassPending),l(n,22,0,t.Rb(n,23).target,t.Rb(n,23).href),l(n,25,0,t.Rb(n,26).target,t.Rb(n,26).href),l(n,30,0,t.Rb(n,31).target,t.Rb(n,31).href)}))}var N=t.yb("sb-forgot-password",e,(function(l){return t.ec(0,[(l()(),t.Cb(0,0,null,null,1,"sb-forgot-password",[],null,null,null,q,K)),t.Bb(1,114688,null,0,e,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),M=u("u8hC"),D=u("LonY"),V=u("sQkU"),J=u("62Ze"),W=u("jvcL"),H=u("uYEL"),z=u("68rg"),G=u("LRne"),Q=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"canActivate",value:function(){return Object(G.a)(!0)}}]),l}(),U=u("Nv++"),Y=u("NYJi"),X=u("NMtB"),Z=u("hex+"),$=function l(){_classCallCheck(this,l)},ll=t.zb(p,[],(function(l){return t.Ob([t.Pb(512,t.k,t.db,[[8,[m.a,C.b,C.a,h.a,h.b,h.j,h.k,h.g,h.h,h.i,x,j,N]],[3,t.k],t.C]),t.Pb(4608,w.p,w.o,[t.y]),t.Pb(4608,r.f,r.f,[]),t.Pb(4608,r.y,r.y,[]),t.Pb(4608,I.A,I.A,[t.k,t.u,I.pb,I.B]),t.Pb(4608,M.a,M.a,[]),t.Pb(4608,D.a,D.a,[]),t.Pb(4608,V.a,V.a,[]),t.Pb(4608,J.a,J.a,[i.a,o.a,a.a,_.l,r.f,I.A]),t.Pb(4608,W.a,W.a,[_.a,_.l]),t.Pb(4608,H.a,H.a,[]),t.Pb(4608,z.a,z.a,[]),t.Pb(4608,Q,Q,[]),t.Pb(1073742336,w.c,w.c,[]),t.Pb(1073742336,_.o,_.o,[[2,_.t],[2,_.l]]),t.Pb(1073742336,r.x,r.x,[]),t.Pb(1073742336,r.t,r.t,[]),t.Pb(1073742336,r.j,r.j,[]),t.Pb(1073742336,U.j,U.j,[]),t.Pb(1073742336,Y.a,Y.a,[U.d]),t.Pb(1073742336,I.c,I.c,[]),t.Pb(1073742336,I.f,I.f,[]),t.Pb(1073742336,I.g,I.g,[]),t.Pb(1073742336,I.k,I.k,[]),t.Pb(1073742336,I.l,I.l,[]),t.Pb(1073742336,I.r,I.r,[]),t.Pb(1073742336,I.x,I.x,[]),t.Pb(1073742336,I.C,I.C,[]),t.Pb(1073742336,I.E,I.E,[]),t.Pb(1073742336,I.J,I.J,[]),t.Pb(1073742336,I.M,I.M,[]),t.Pb(1073742336,I.P,I.P,[]),t.Pb(1073742336,I.S,I.S,[]),t.Pb(1073742336,I.ab,I.ab,[]),t.Pb(1073742336,I.db,I.db,[]),t.Pb(1073742336,I.eb,I.eb,[]),t.Pb(1073742336,I.fb,I.fb,[]),t.Pb(1073742336,I.V,I.V,[]),t.Pb(1073742336,I.D,I.D,[]),t.Pb(1073742336,X.a,X.a,[]),t.Pb(1073742336,Z.a,Z.a,[]),t.Pb(1073742336,$,$,[]),t.Pb(1073742336,p,p,[]),t.Pb(1024,_.j,(function(){return[[{path:"",pathMatch:"full",redirectTo:"login"},{path:"login",canActivate:[],component:c,data:d},{path:"register",canActivate:[],component:b,data:f},{path:"forgot-password",canActivate:[],component:e,data:g}]]}),[])])}))},KTHn:function(l,n,u){"use strict";u.d(n,"a",(function(){return t}));var t=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"ngOnInit",value:function(){}}]),l}()},dCp6:function(l,n,u){"use strict";u.d(n,"a",(function(){return e})),u.d(n,"b",(function(){return r}));var t=u("8Y7J"),e=(u("KTHn"),t.Ab({encapsulation:0,styles:[[""]],data:{}}));function r(l){return t.ec(2,[(l()(),t.Cb(0,0,null,null,9,"footer",[["class","py-4 bg-light mt-auto"]],null,null,null,null,null)),(l()(),t.Cb(1,0,null,null,8,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.Cb(2,0,null,null,7,"div",[["class","d-flex align-items-center justify-content-between small"]],null,null,null,null,null)),(l()(),t.Cb(3,0,null,null,1,"div",[["class","text-muted"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Copyright \xa9 Akua Group 2020"])),(l()(),t.Cb(5,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.Cb(6,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Privacy Policy \xb7"])),(l()(),t.Cb(8,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),t.bc(-1,null,["Terms & Conditions"]))],null,null)}}}]);