(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[709],{7351:function(n,i,t){"use strict";t.d(i,{Z:function(){return f}});var e=t(2265),r=t(2999),s=t.n(r),o=t(4704),u=t(5579),c=new WeakMap,h=new WeakMap,f=function(n){var i,t,r,f=(0,u.Z)(),a=(0,e.useRef)(n);return i=function(){return function n(i,t){var e=c.get(i);if(e)return e;if(h.has(i))return i;var r=new Proxy(i,{get:function(i,e,r){var o=Reflect.get(i,e,r),u=Reflect.getOwnPropertyDescriptor(i,e);return((null==u?void 0:u.configurable)||(null==u?void 0:u.writable))&&(s()(o)||Array.isArray(o))?n(o,t):o},set:function(n,i,e){var r=Reflect.set(n,i,e);return t(),r},deleteProperty:function(n,i){var e=Reflect.deleteProperty(n,i);return t(),e}});return c.set(i,r),h.set(r,i),r}(a.current,function(){f()})},t=[],!1!==(r=(0,e.useRef)({deps:t,obj:void 0,initialized:!1}).current).initialized&&(0,o.Z)(r.deps,t)||(r.deps=t,r.obj=i(),r.initialized=!0),r.obj}},8118:function(n,i,t){var e=t(3794)(Object.getPrototypeOf,Object);n.exports=e},3794:function(n){n.exports=function(n,i){return function(t){return n(i(t))}}},2999:function(n,i,t){var e=t(2731),r=t(8118),s=t(561),o=Object.prototype,u=Function.prototype.toString,c=o.hasOwnProperty,h=u.call(Object);n.exports=function(n){if(!s(n)||"[object Object]"!=e(n))return!1;var i=r(n);if(null===i)return!0;var t=c.call(i,"constructor")&&i.constructor;return"function"==typeof t&&t instanceof t&&u.call(t)==h}},7603:function(n,i,t){"use strict";/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var e,r,s="0123456789abcdef",o="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",u="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",c={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-9e15,maxE:9e15,crypto:!1},h=!0,f="[DecimalError] ",a=f+"Invalid argument: ",l=f+"Precision limit exceeded",d=f+"crypto unavailable",p="[object Decimal]",g=Math.floor,w=Math.pow,m=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,v=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,N=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,b=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,E=o.length-1,x=u.length-1,y={toStringTag:p};function M(n){var i,t,e,r=n.length-1,s="",o=n[0];if(r>0){for(s+=o,i=1;i<r;i++)(t=7-(e=n[i]+"").length)&&(s+=k(t)),s+=e;(t=7-(e=(o=n[i])+"").length)&&(s+=k(t))}else if(0===o)return"0";for(;o%10==0;)o/=10;return s+o}function O(n,i,t){if(n!==~~n||n<i||n>t)throw Error(a+n)}function q(n,i,t,e){var r,s,o,u;for(s=n[0];s>=10;s/=10)--i;return--i<0?(i+=7,r=0):(r=Math.ceil((i+1)/7),i%=7),s=w(10,7-i),u=n[r]%s|0,null==e?i<3?(0==i?u=u/100|0:1==i&&(u=u/10|0),o=t<4&&99999==u||t>3&&49999==u||5e4==u||0==u):o=(t<4&&u+1==s||t>3&&u+1==s/2)&&(n[r+1]/s/100|0)==w(10,i-2)-1||(u==s/2||0==u)&&(n[r+1]/s/100|0)==0:i<4?(0==i?u=u/1e3|0:1==i?u=u/100|0:2==i&&(u=u/10|0),o=(e||t<4)&&9999==u||!e&&t>3&&4999==u):o=((e||t<4)&&u+1==s||!e&&t>3&&u+1==s/2)&&(n[r+1]/s/1e3|0)==w(10,i-3)-1,o}function Z(n,i,t){for(var e,r,o=[0],u=0,c=n.length;u<c;){for(r=o.length;r--;)o[r]*=i;for(o[0]+=s.indexOf(n.charAt(u++)),e=0;e<o.length;e++)o[e]>t-1&&(void 0===o[e+1]&&(o[e+1]=0),o[e+1]+=o[e]/t|0,o[e]%=t)}return o.reverse()}y.absoluteValue=y.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),A(n)},y.ceil=function(){return A(new this.constructor(this),this.e+1,2)},y.clampedTo=y.clamp=function(n,i){var t=this.constructor;if(n=new t(n),i=new t(i),!n.s||!i.s)return new t(NaN);if(n.gt(i))throw Error(a+i);return 0>this.cmp(n)?n:this.cmp(i)>0?i:new t(this)},y.comparedTo=y.cmp=function(n){var i,t,e,r,s=this.d,o=(n=new this.constructor(n)).d,u=this.s,c=n.s;if(!s||!o)return u&&c?u!==c?u:s===o?0:!s^u<0?1:-1:NaN;if(!s[0]||!o[0])return s[0]?u:o[0]?-c:0;if(u!==c)return u;if(this.e!==n.e)return this.e>n.e^u<0?1:-1;for(i=0,t=(e=s.length)<(r=o.length)?e:r;i<t;++i)if(s[i]!==o[i])return s[i]>o[i]^u<0?1:-1;return e===r?0:e>r^u<0?1:-1},y.cosine=y.cos=function(){var n,i,t=this,e=t.constructor;return t.d?t.d[0]?(n=e.precision,i=e.rounding,e.precision=n+Math.max(t.e,t.sd())+7,e.rounding=1,t=function(n,i){var t,e,r;if(i.isZero())return i;(e=i.d.length)<32?r=(1/V(4,t=Math.ceil(e/3))).toString():(t=16,r="2.3283064365386962890625e-10"),n.precision+=t,i=B(n,1,i.times(r),new n(1));for(var s=t;s--;){var o=i.times(i);i=o.times(o).minus(o).times(8).plus(1)}return n.precision-=t,i}(e,$(e,t)),e.precision=n,e.rounding=i,A(2==r||3==r?t.neg():t,n,i,!0)):new e(1):new e(NaN)},y.cubeRoot=y.cbrt=function(){var n,i,t,e,r,s,o,u,c,f,a=this.constructor;if(!this.isFinite()||this.isZero())return new a(this);for(h=!1,(s=this.s*w(this.s*this,1/3))&&Math.abs(s)!=1/0?e=new a(s.toString()):(t=M(this.d),(s=((n=this.e)-t.length+1)%3)&&(t+=1==s||-2==s?"0":"00"),s=w(t,1/3),n=g((n+1)/3)-(n%3==(n<0?-1:2)),(e=new a(t=s==1/0?"5e"+n:(t=s.toExponential()).slice(0,t.indexOf("e")+1)+n)).s=this.s),o=(n=a.precision)+3;;)if(e=F((f=(c=(u=e).times(u).times(u)).plus(this)).plus(this).times(u),f.plus(c),o+2,1),M(u.d).slice(0,o)===(t=M(e.d)).slice(0,o)){if("9999"!=(t=t.slice(o-3,o+1))&&(r||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(A(e,n+1,1),i=!e.times(e).times(e).eq(this));break}if(!r&&(A(u,n+1,0),u.times(u).times(u).eq(this))){e=u;break}o+=4,r=1}return h=!0,A(e,n,a.rounding,i)},y.decimalPlaces=y.dp=function(){var n,i=this.d,t=NaN;if(i){if(t=((n=i.length-1)-g(this.e/7))*7,n=i[n])for(;n%10==0;n/=10)t--;t<0&&(t=0)}return t},y.dividedBy=y.div=function(n){return F(this,new this.constructor(n))},y.dividedToIntegerBy=y.divToInt=function(n){var i=this.constructor;return A(F(this,new i(n),0,1,1),i.precision,i.rounding)},y.equals=y.eq=function(n){return 0===this.cmp(n)},y.floor=function(){return A(new this.constructor(this),this.e+1,3)},y.greaterThan=y.gt=function(n){return this.cmp(n)>0},y.greaterThanOrEqualTo=y.gte=function(n){var i=this.cmp(n);return 1==i||0===i},y.hyperbolicCosine=y.cosh=function(){var n,i,t,e,r,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;t=o.precision,e=o.rounding,o.precision=t+Math.max(s.e,s.sd())+4,o.rounding=1,(r=s.d.length)<32?i=(1/V(4,n=Math.ceil(r/3))).toString():(n=16,i="2.3283064365386962890625e-10"),s=B(o,1,s.times(i),new o(1),!0);for(var c,h=n,f=new o(8);h--;)c=s.times(s),s=u.minus(c.times(f.minus(c.times(f))));return A(s,o.precision=t,o.rounding=e,!0)},y.hyperbolicSine=y.sinh=function(){var n,i,t,e,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(i=s.precision,t=s.rounding,s.precision=i+Math.max(r.e,r.sd())+4,s.rounding=1,(e=r.d.length)<3)r=B(s,2,r,r,!0);else{n=(n=1.4*Math.sqrt(e))>16?16:0|n,r=B(s,2,r=r.times(1/V(5,n)),r,!0);for(var o,u=new s(5),c=new s(16),h=new s(20);n--;)o=r.times(r),r=r.times(u.plus(o.times(c.times(o).plus(h))))}return s.precision=i,s.rounding=t,A(r,i,t,!0)},y.hyperbolicTangent=y.tanh=function(){var n,i,t=this.constructor;return this.isFinite()?this.isZero()?new t(this):(n=t.precision,i=t.rounding,t.precision=n+7,t.rounding=1,F(this.sinh(),this.cosh(),t.precision=n,t.rounding=i)):new t(this.s)},y.inverseCosine=y.acos=function(){var n,i=this,t=i.constructor,e=i.abs().cmp(1),r=t.precision,s=t.rounding;return -1!==e?0===e?i.isNeg()?S(t,r,s):new t(0):new t(NaN):i.isZero()?S(t,r+4,s).times(.5):(t.precision=r+6,t.rounding=1,i=i.asin(),n=S(t,r+4,s).times(.5),t.precision=r,t.rounding=s,n.minus(i))},y.inverseHyperbolicCosine=y.acosh=function(){var n,i,t=this,e=t.constructor;return t.lte(1)?new e(t.eq(1)?0:NaN):t.isFinite()?(n=e.precision,i=e.rounding,e.precision=n+Math.max(Math.abs(t.e),t.sd())+4,e.rounding=1,h=!1,t=t.times(t).minus(1).sqrt().plus(t),h=!0,e.precision=n,e.rounding=i,t.ln()):new e(t)},y.inverseHyperbolicSine=y.asinh=function(){var n,i,t=this,e=t.constructor;return!t.isFinite()||t.isZero()?new e(t):(n=e.precision,i=e.rounding,e.precision=n+2*Math.max(Math.abs(t.e),t.sd())+6,e.rounding=1,h=!1,t=t.times(t).plus(1).sqrt().plus(t),h=!0,e.precision=n,e.rounding=i,t.ln())},y.inverseHyperbolicTangent=y.atanh=function(){var n,i,t,e,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(n=s.precision,i=s.rounding,Math.max(e=r.sd(),n)<-(2*r.e)-1)?A(new s(r),n,i,!0):(s.precision=t=e-r.e,r=F(r.plus(1),new s(1).minus(r),t+n,1),s.precision=n+4,s.rounding=1,r=r.ln(),s.precision=n,s.rounding=i,r.times(.5)):new s(NaN)},y.inverseSine=y.asin=function(){var n,i,t,e,r=this,s=r.constructor;return r.isZero()?new s(r):(i=r.abs().cmp(1),t=s.precision,e=s.rounding,-1!==i)?0===i?((n=S(s,t+4,e).times(.5)).s=r.s,n):new s(NaN):(s.precision=t+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=t,s.rounding=e,r.times(2))},y.inverseTangent=y.atan=function(){var n,i,t,e,r,s,o,u,c,f=this,a=f.constructor,l=a.precision,d=a.rounding;if(f.isFinite()){if(f.isZero())return new a(f);if(f.abs().eq(1)&&l+4<=x)return(o=S(a,l+4,d).times(.25)).s=f.s,o}else{if(!f.s)return new a(NaN);if(l+4<=x)return(o=S(a,l+4,d).times(.5)).s=f.s,o}for(a.precision=u=l+10,a.rounding=1,n=t=Math.min(28,u/7+2|0);n;--n)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(h=!1,i=Math.ceil(u/7),e=1,c=f.times(f),o=new a(f),r=f;-1!==n;)if(r=r.times(c),s=o.minus(r.div(e+=2)),r=r.times(c),void 0!==(o=s.plus(r.div(e+=2))).d[i])for(n=i;o.d[n]===s.d[n]&&n--;);return t&&(o=o.times(2<<t-1)),h=!0,A(o,a.precision=l,a.rounding=d,!0)},y.isFinite=function(){return!!this.d},y.isInteger=y.isInt=function(){return!!this.d&&g(this.e/7)>this.d.length-2},y.isNaN=function(){return!this.s},y.isNegative=y.isNeg=function(){return this.s<0},y.isPositive=y.isPos=function(){return this.s>0},y.isZero=function(){return!!this.d&&0===this.d[0]},y.lessThan=y.lt=function(n){return 0>this.cmp(n)},y.lessThanOrEqualTo=y.lte=function(n){return 1>this.cmp(n)},y.logarithm=y.log=function(n){var i,t,e,r,s,o,u,c=this.constructor,f=c.precision,a=c.rounding;if(null==n)n=new c(10),i=!0;else{if(t=(n=new c(n)).d,n.s<0||!t||!t[0]||n.eq(1))return new c(NaN);i=n.eq(10)}if(t=this.d,this.s<0||!t||!t[0]||this.eq(1))return new c(t&&!t[0]?-1/0:1!=this.s?NaN:t?0:1/0);if(i){if(t.length>1)r=!0;else{for(e=t[0];e%10==0;)e/=10;r=1!==e}}if(h=!1,q((u=F(C(this,o=f+5),i?D(c,o+10):C(n,o),o,1)).d,e=f,a))do if(o+=10,u=F(C(this,o),i?D(c,o+10):C(n,o),o,1),!r){+M(u.d).slice(e+1,e+15)+1==1e14&&(u=A(u,f+1,0));break}while(q(u.d,e+=10,a));return h=!0,A(u,f,a)},y.minus=y.sub=function(n){var i,t,e,r,s,o,u,c,f,a,l,d,p=this.constructor;if(n=new p(n),!this.d||!n.d)return this.s&&n.s?this.d?n.s=-n.s:n=new p(n.d||this.s!==n.s?this:NaN):n=new p(NaN),n;if(this.s!=n.s)return n.s=-n.s,this.plus(n);if(f=this.d,d=n.d,u=p.precision,c=p.rounding,!f[0]||!d[0]){if(d[0])n.s=-n.s;else{if(!f[0])return new p(3===c?-0:0);n=new p(this)}return h?A(n,u,c):n}if(t=g(n.e/7),a=g(this.e/7),f=f.slice(),s=a-t){for((l=s<0)?(i=f,s=-s,o=d.length):(i=d,t=a,o=f.length),s>(e=Math.max(Math.ceil(u/7),o)+2)&&(s=e,i.length=1),i.reverse(),e=s;e--;)i.push(0);i.reverse()}else{for((l=(e=f.length)<(o=d.length))&&(o=e),e=0;e<o;e++)if(f[e]!=d[e]){l=f[e]<d[e];break}s=0}for(l&&(i=f,f=d,d=i,n.s=-n.s),o=f.length,e=d.length-o;e>0;--e)f[o++]=0;for(e=d.length;e>s;){if(f[--e]<d[e]){for(r=e;r&&0===f[--r];)f[r]=1e7-1;--f[r],f[e]+=1e7}f[e]-=d[e]}for(;0===f[--o];)f.pop();for(;0===f[0];f.shift())--t;return f[0]?(n.d=f,n.e=R(f,t),h?A(n,u,c):n):new p(3===c?-0:0)},y.modulo=y.mod=function(n){var i,t=this.constructor;return(n=new t(n),this.d&&n.s&&(!n.d||n.d[0]))?n.d&&(!this.d||this.d[0])?(h=!1,9==t.modulo?(i=F(this,n.abs(),0,3,1),i.s*=n.s):i=F(this,n,0,t.modulo,1),i=i.times(n),h=!0,this.minus(i)):A(new t(this),t.precision,t.rounding):new t(NaN)},y.naturalExponential=y.exp=function(){return j(this)},y.naturalLogarithm=y.ln=function(){return C(this)},y.negated=y.neg=function(){var n=new this.constructor(this);return n.s=-n.s,A(n)},y.plus=y.add=function(n){var i,t,e,r,s,o,u,c,f,a,l=this.constructor;if(n=new l(n),!this.d||!n.d)return this.s&&n.s?this.d||(n=new l(n.d||this.s===n.s?this:NaN)):n=new l(NaN),n;if(this.s!=n.s)return n.s=-n.s,this.minus(n);if(f=this.d,a=n.d,u=l.precision,c=l.rounding,!f[0]||!a[0])return a[0]||(n=new l(this)),h?A(n,u,c):n;if(s=g(this.e/7),e=g(n.e/7),f=f.slice(),r=s-e){for(r<0?(t=f,r=-r,o=a.length):(t=a,e=s,o=f.length),r>(o=(s=Math.ceil(u/7))>o?s+1:o+1)&&(r=o,t.length=1),t.reverse();r--;)t.push(0);t.reverse()}for((o=f.length)-(r=a.length)<0&&(r=o,t=a,a=f,f=t),i=0;r;)i=(f[--r]=f[r]+a[r]+i)/1e7|0,f[r]%=1e7;for(i&&(f.unshift(i),++e),o=f.length;0==f[--o];)f.pop();return n.d=f,n.e=R(f,e),h?A(n,u,c):n},y.precision=y.sd=function(n){var i;if(void 0!==n&&!!n!==n&&1!==n&&0!==n)throw Error(a+n);return this.d?(i=_(this.d),n&&this.e+1>i&&(i=this.e+1)):i=NaN,i},y.round=function(){var n=this.constructor;return A(new n(this),this.e+1,n.rounding)},y.sine=y.sin=function(){var n,i,t=this,e=t.constructor;return t.isFinite()?t.isZero()?new e(t):(n=e.precision,i=e.rounding,e.precision=n+Math.max(t.e,t.sd())+7,e.rounding=1,t=function(n,i){var t,e=i.d.length;if(e<3)return i.isZero()?i:B(n,2,i,i);t=(t=1.4*Math.sqrt(e))>16?16:0|t,i=B(n,2,i=i.times(1/V(5,t)),i);for(var r,s=new n(5),o=new n(16),u=new n(20);t--;)r=i.times(i),i=i.times(s.plus(r.times(o.times(r).minus(u))));return i}(e,$(e,t)),e.precision=n,e.rounding=i,A(r>2?t.neg():t,n,i,!0)):new e(NaN)},y.squareRoot=y.sqrt=function(){var n,i,t,e,r,s,o=this.d,u=this.e,c=this.s,f=this.constructor;if(1!==c||!o||!o[0])return new f(!c||c<0&&(!o||o[0])?NaN:o?this:1/0);for(h=!1,0==(c=Math.sqrt(+this))||c==1/0?(((i=M(o)).length+u)%2==0&&(i+="0"),c=Math.sqrt(i),u=g((u+1)/2)-(u<0||u%2),e=new f(i=c==1/0?"5e"+u:(i=c.toExponential()).slice(0,i.indexOf("e")+1)+u)):e=new f(c.toString()),t=(u=f.precision)+3;;)if(e=(s=e).plus(F(this,s,t+2,1)).times(.5),M(s.d).slice(0,t)===(i=M(e.d)).slice(0,t)){if("9999"!=(i=i.slice(t-3,t+1))&&(r||"4999"!=i)){+i&&(+i.slice(1)||"5"!=i.charAt(0))||(A(e,u+1,1),n=!e.times(e).eq(this));break}if(!r&&(A(s,u+1,0),s.times(s).eq(this))){e=s;break}t+=4,r=1}return h=!0,A(e,u,f.rounding,n)},y.tangent=y.tan=function(){var n,i,t=this,e=t.constructor;return t.isFinite()?t.isZero()?new e(t):(n=e.precision,i=e.rounding,e.precision=n+10,e.rounding=1,(t=t.sin()).s=1,t=F(t,new e(1).minus(t.times(t)).sqrt(),n+10,0),e.precision=n,e.rounding=i,A(2==r||4==r?t.neg():t,n,i,!0)):new e(NaN)},y.times=y.mul=function(n){var i,t,e,r,s,o,u,c,f,a=this.constructor,l=this.d,d=(n=new a(n)).d;if(n.s*=this.s,!l||!l[0]||!d||!d[0])return new a(n.s&&(!l||l[0]||d)&&(!d||d[0]||l)?l&&d?0*n.s:n.s/0:NaN);for(t=g(this.e/7)+g(n.e/7),(c=l.length)<(f=d.length)&&(s=l,l=d,d=s,o=c,c=f,f=o),s=[],e=o=c+f;e--;)s.push(0);for(e=f;--e>=0;){for(i=0,r=c+e;r>e;)u=s[r]+d[e]*l[r-e-1]+i,s[r--]=u%1e7|0,i=u/1e7|0;s[r]=(s[r]+i)%1e7|0}for(;!s[--o];)s.pop();return i?++t:s.shift(),n.d=s,n.e=R(s,t),h?A(n,a.precision,a.rounding):n},y.toBinary=function(n,i){return W(this,2,n,i)},y.toDecimalPlaces=y.toDP=function(n,i){var t=this,e=t.constructor;return(t=new e(t),void 0===n)?t:(O(n,0,1e9),void 0===i?i=e.rounding:O(i,0,8),A(t,n+t.e+1,i))},y.toExponential=function(n,i){var t,e=this,r=e.constructor;return void 0===n?t=P(e,!0):(O(n,0,1e9),void 0===i?i=r.rounding:O(i,0,8),t=P(e=A(new r(e),n+1,i),!0,n+1)),e.isNeg()&&!e.isZero()?"-"+t:t},y.toFixed=function(n,i){var t,e,r=this.constructor;return void 0===n?t=P(this):(O(n,0,1e9),void 0===i?i=r.rounding:O(i,0,8),t=P(e=A(new r(this),n+this.e+1,i),!1,n+e.e+1)),this.isNeg()&&!this.isZero()?"-"+t:t},y.toFraction=function(n){var i,t,e,r,s,o,u,c,f,l,d,p,g=this.d,m=this.constructor;if(!g)return new m(this);if(f=t=new m(1),e=c=new m(0),o=(s=(i=new m(e)).e=_(g)-this.e-1)%7,i.d[0]=w(10,o<0?7+o:o),null==n)n=s>0?i:f;else{if(!(u=new m(n)).isInt()||u.lt(f))throw Error(a+u);n=u.gt(i)?s>0?i:f:u}for(h=!1,u=new m(M(g)),l=m.precision,m.precision=s=14*g.length;d=F(u,i,0,1,1),1!=(r=t.plus(d.times(e))).cmp(n);)t=e,e=r,r=f,f=c.plus(d.times(r)),c=r,r=i,i=u.minus(d.times(r)),u=r;return r=F(n.minus(t),e,0,1,1),c=c.plus(r.times(f)),t=t.plus(r.times(e)),c.s=f.s=this.s,p=1>F(f,e,s,1).minus(this).abs().cmp(F(c,t,s,1).minus(this).abs())?[f,e]:[c,t],m.precision=l,h=!0,p},y.toHexadecimal=y.toHex=function(n,i){return W(this,16,n,i)},y.toNearest=function(n,i){var t=this,e=t.constructor;if(t=new e(t),null==n){if(!t.d)return t;n=new e(1),i=e.rounding}else{if(n=new e(n),void 0===i?i=e.rounding:O(i,0,8),!t.d)return n.s?t:n;if(!n.d)return n.s&&(n.s=t.s),n}return n.d[0]?(h=!1,t=F(t,n,0,i,1).times(n),h=!0,A(t)):(n.s=t.s,t=n),t},y.toNumber=function(){return+this},y.toOctal=function(n,i){return W(this,8,n,i)},y.toPower=y.pow=function(n){var i,t,e,r,s,o,u=this,c=u.constructor,f=+(n=new c(n));if(!u.d||!n.d||!u.d[0]||!n.d[0])return new c(w(+u,f));if((u=new c(u)).eq(1))return u;if(e=c.precision,s=c.rounding,n.eq(1))return A(u,e,s);if((i=g(n.e/7))>=n.d.length-1&&(t=f<0?-f:f)<=9007199254740991)return r=T(c,u,t,e),n.s<0?new c(1).div(r):A(r,e,s);if((o=u.s)<0){if(i<n.d.length-1)return new c(NaN);if((1&n.d[i])==0&&(o=1),0==u.e&&1==u.d[0]&&1==u.d.length)return u.s=o,u}return(i=0!=(t=w(+u,f))&&isFinite(t)?new c(t+"").e:g(f*(Math.log("0."+M(u.d))/Math.LN10+u.e+1)))>c.maxE+1||i<c.minE-1?new c(i>0?o/0:0):(h=!1,c.rounding=u.s=1,t=Math.min(12,(i+"").length),(r=j(n.times(C(u,e+t)),e)).d&&q((r=A(r,e+5,1)).d,e,s)&&(i=e+10,+M((r=A(j(n.times(C(u,i+t)),i),i+5,1)).d).slice(e+1,e+15)+1==1e14&&(r=A(r,e+1,0))),r.s=o,h=!0,c.rounding=s,A(r,e,s))},y.toPrecision=function(n,i){var t,e=this,r=e.constructor;return void 0===n?t=P(e,e.e<=r.toExpNeg||e.e>=r.toExpPos):(O(n,1,1e9),void 0===i?i=r.rounding:O(i,0,8),t=P(e=A(new r(e),n,i),n<=e.e||e.e<=r.toExpNeg,n)),e.isNeg()&&!e.isZero()?"-"+t:t},y.toSignificantDigits=y.toSD=function(n,i){var t=this.constructor;return void 0===n?(n=t.precision,i=t.rounding):(O(n,1,1e9),void 0===i?i=t.rounding:O(i,0,8)),A(new t(this),n,i)},y.toString=function(){var n=this.constructor,i=P(this,this.e<=n.toExpNeg||this.e>=n.toExpPos);return this.isNeg()&&!this.isZero()?"-"+i:i},y.truncated=y.trunc=function(){return A(new this.constructor(this),this.e+1,1)},y.valueOf=y.toJSON=function(){var n=this.constructor,i=P(this,this.e<=n.toExpNeg||this.e>=n.toExpPos);return this.isNeg()?"-"+i:i};var F=function(){function n(n,i,t){var e,r=0,s=n.length;for(n=n.slice();s--;)e=n[s]*i+r,n[s]=e%t|0,r=e/t|0;return r&&n.unshift(r),n}function i(n,i,t,e){var r,s;if(t!=e)s=t>e?1:-1;else for(r=s=0;r<t;r++)if(n[r]!=i[r]){s=n[r]>i[r]?1:-1;break}return s}function t(n,i,t,e){for(var r=0;t--;)n[t]-=r,r=n[t]<i[t]?1:0,n[t]=r*e+n[t]-i[t];for(;!n[0]&&n.length>1;)n.shift()}return function(r,s,o,u,c,h){var f,a,l,d,p,w,m,v,N,b,E,x,y,M,O,q,Z,F,P,R,D=r.constructor,S=r.s==s.s?1:-1,_=r.d,k=s.d;if(!_||!_[0]||!k||!k[0])return new D(r.s&&s.s&&(_?!k||_[0]!=k[0]:k)?_&&0==_[0]||!k?0*S:S/0:NaN);for(h?(p=1,a=r.e-s.e):(h=1e7,p=7,a=g(r.e/p)-g(s.e/p)),P=k.length,Z=_.length,b=(N=new D(S)).d=[],l=0;k[l]==(_[l]||0);l++);if(k[l]>(_[l]||0)&&a--,null==o?(M=o=D.precision,u=D.rounding):M=c?o+(r.e-s.e)+1:o,M<0)b.push(1),w=!0;else{if(M=M/p+2|0,l=0,1==P){for(d=0,k=k[0],M++;(l<Z||d)&&M--;l++)O=d*h+(_[l]||0),b[l]=O/k|0,d=O%k|0;w=d||l<Z}else{for((d=h/(k[0]+1)|0)>1&&(k=n(k,d,h),_=n(_,d,h),P=k.length,Z=_.length),q=P,x=(E=_.slice(0,P)).length;x<P;)E[x++]=0;(R=k.slice()).unshift(0),F=k[0],k[1]>=h/2&&++F;do d=0,(f=i(k,E,P,x))<0?(y=E[0],P!=x&&(y=y*h+(E[1]||0)),(d=y/F|0)>1?(d>=h&&(d=h-1),v=(m=n(k,d,h)).length,x=E.length,1==(f=i(m,E,v,x))&&(d--,t(m,P<v?R:k,v,h))):(0==d&&(f=d=1),m=k.slice()),(v=m.length)<x&&m.unshift(0),t(E,m,x,h),-1==f&&(x=E.length,(f=i(k,E,P,x))<1&&(d++,t(E,P<x?R:k,x,h))),x=E.length):0===f&&(d++,E=[0]),b[l++]=d,f&&E[0]?E[x++]=_[q]||0:(E=[_[q]],x=1);while((q++<Z||void 0!==E[0])&&M--);w=void 0!==E[0]}b[0]||b.shift()}if(1==p)N.e=a,e=w;else{for(l=1,d=b[0];d>=10;d/=10)l++;N.e=l+a*p-1,A(N,c?o+N.e+1:o,u,w)}return N}}();function A(n,i,t,e){var r,s,o,u,c,f,a,l,d,p=n.constructor;n:if(null!=i){if(!(l=n.d))return n;for(r=1,u=l[0];u>=10;u/=10)r++;if((s=i-r)<0)s+=7,o=i,c=(a=l[d=0])/w(10,r-o-1)%10|0;else if((d=Math.ceil((s+1)/7))>=(u=l.length)){if(e){for(;u++<=d;)l.push(0);a=c=0,r=1,s%=7,o=s-7+1}else break n}else{for(r=1,a=u=l[d];u>=10;u/=10)r++;s%=7,c=(o=s-7+r)<0?0:a/w(10,r-o-1)%10|0}if(e=e||i<0||void 0!==l[d+1]||(o<0?a:a%w(10,r-o-1)),f=t<4?(c||e)&&(0==t||t==(n.s<0?3:2)):c>5||5==c&&(4==t||e||6==t&&(s>0?o>0?a/w(10,r-o):0:l[d-1])%10&1||t==(n.s<0?8:7)),i<1||!l[0])return l.length=0,f?(i-=n.e+1,l[0]=w(10,(7-i%7)%7),n.e=-i||0):l[0]=n.e=0,n;if(0==s?(l.length=d,u=1,d--):(l.length=d+1,u=w(10,7-s),l[d]=o>0?(a/w(10,r-o)%w(10,o)|0)*u:0),f)for(;;){if(0==d){for(s=1,o=l[0];o>=10;o/=10)s++;for(o=l[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(n.e++,1e7==l[0]&&(l[0]=1));break}if(l[d]+=u,1e7!=l[d])break;l[d--]=0,u=1}for(s=l.length;0===l[--s];)l.pop()}return h&&(n.e>p.maxE?(n.d=null,n.e=NaN):n.e<p.minE&&(n.e=0,n.d=[0])),n}function P(n,i,t){if(!n.isFinite())return I(n);var e,r=n.e,s=M(n.d),o=s.length;return i?(t&&(e=t-o)>0?s=s.charAt(0)+"."+s.slice(1)+k(e):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):r<0?(s="0."+k(-r-1)+s,t&&(e=t-o)>0&&(s+=k(e))):r>=o?(s+=k(r+1-o),t&&(e=t-r-1)>0&&(s=s+"."+k(e))):((e=r+1)<o&&(s=s.slice(0,e)+"."+s.slice(e)),t&&(e=t-o)>0&&(r+1===o&&(s+="."),s+=k(e))),s}function R(n,i){var t=n[0];for(i*=7;t>=10;t/=10)i++;return i}function D(n,i,t){if(i>E)throw h=!0,t&&(n.precision=t),Error(l);return A(new n(o),i,1,!0)}function S(n,i,t){if(i>x)throw Error(l);return A(new n(u),i,t,!0)}function _(n){var i=n.length-1,t=7*i+1;if(i=n[i]){for(;i%10==0;i/=10)t--;for(i=n[0];i>=10;i/=10)t++}return t}function k(n){for(var i="";n--;)i+="0";return i}function T(n,i,t,e){var r,s=new n(1),o=Math.ceil(e/7+4);for(h=!1;;){if(t%2&&z((s=s.times(i)).d,o)&&(r=!0),0===(t=g(t/2))){t=s.d.length-1,r&&0===s.d[t]&&++s.d[t];break}z((i=i.times(i)).d,o)}return h=!0,s}function L(n){return 1&n.d[n.d.length-1]}function U(n,i,t){for(var e,r=new n(i[0]),s=0;++s<i.length;)if((e=new n(i[s])).s)r[t](e)&&(r=e);else{r=e;break}return r}function j(n,i){var t,e,r,s,o,u,c,f=0,a=0,l=0,d=n.constructor,p=d.rounding,g=d.precision;if(!n.d||!n.d[0]||n.e>17)return new d(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:0/0);for(null==i?(h=!1,c=g):c=i,u=new d(.03125);n.e>-2;)n=n.times(u),l+=5;for(c+=e=Math.log(w(2,l))/Math.LN10*2+5|0,t=s=o=new d(1),d.precision=c;;){if(s=A(s.times(n),c,1),t=t.times(++a),M((u=o.plus(F(s,t,c,1))).d).slice(0,c)===M(o.d).slice(0,c)){for(r=l;r--;)o=A(o.times(o),c,1);if(null!=i)return d.precision=g,o;if(!(f<3&&q(o.d,c-e,p,f)))return A(o,d.precision=g,p,h=!0);d.precision=c+=10,t=s=u=new d(1),a=0,f++}o=u}}function C(n,i){var t,e,r,s,o,u,c,f,a,l,d,p=1,g=n,w=g.d,m=g.constructor,v=m.rounding,N=m.precision;if(g.s<0||!w||!w[0]||!g.e&&1==w[0]&&1==w.length)return new m(w&&!w[0]?-1/0:1!=g.s?NaN:w?0:g);if(null==i?(h=!1,a=N):a=i,m.precision=a+=10,e=(t=M(w)).charAt(0),!(15e14>Math.abs(s=g.e)))return f=D(m,a+2,N).times(s+""),g=C(new m(e+"."+t.slice(1)),a-10).plus(f),m.precision=N,null==i?A(g,N,v,h=!0):g;for(;e<7&&1!=e||1==e&&t.charAt(1)>3;)e=(t=M((g=g.times(n)).d)).charAt(0),p++;for(s=g.e,e>1?(g=new m("0."+t),s++):g=new m(e+"."+t.slice(1)),l=g,c=o=g=F(g.minus(1),g.plus(1),a,1),d=A(g.times(g),a,1),r=3;;){if(o=A(o.times(d),a,1),M((f=c.plus(F(o,new m(r),a,1))).d).slice(0,a)===M(c.d).slice(0,a)){if(c=c.times(2),0!==s&&(c=c.plus(D(m,a+2,N).times(s+""))),c=F(c,new m(p),a,1),null!=i)return m.precision=N,c;if(!q(c.d,a-10,v,u))return A(c,m.precision=N,v,h=!0);m.precision=a+=10,f=o=g=F(l.minus(1),l.plus(1),a,1),d=A(g.times(g),a,1),r=u=1}c=f,r+=2}}function I(n){return String(n.s*n.s/0)}function H(n,i){var t,e,r;for((t=i.indexOf("."))>-1&&(i=i.replace(".","")),(e=i.search(/e/i))>0?(t<0&&(t=e),t+=+i.slice(e+1),i=i.substring(0,e)):t<0&&(t=i.length),e=0;48===i.charCodeAt(e);e++);for(r=i.length;48===i.charCodeAt(r-1);--r);if(i=i.slice(e,r)){if(r-=e,n.e=t=t-e-1,n.d=[],e=(t+1)%7,t<0&&(e+=7),e<r){for(e&&n.d.push(+i.slice(0,e)),r-=7;e<r;)n.d.push(+i.slice(e,e+=7));e=7-(i=i.slice(e)).length}else e-=r;for(;e--;)i+="0";n.d.push(+i),h&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function B(n,i,t,e,r){var s,o,u,c,f=n.precision,a=Math.ceil(f/7);for(h=!1,c=t.times(t),u=new n(e);;){if(o=F(u.times(c),new n(i++*i++),f,1),u=r?e.plus(o):e.minus(o),e=F(o.times(c),new n(i++*i++),f,1),void 0!==(o=u.plus(e)).d[a]){for(s=a;o.d[s]===u.d[s]&&s--;);if(-1==s)break}s=u,u=e,e=o,o=s}return h=!0,o.d.length=a+1,o}function V(n,i){for(var t=n;--i;)t*=n;return t}function $(n,i){var t,e=i.s<0,s=S(n,n.precision,1),o=s.times(.5);if((i=i.abs()).lte(o))return r=e?4:1,i;if((t=i.divToInt(s)).isZero())r=e?3:2;else{if((i=i.minus(t.times(s))).lte(o))return r=L(t)?e?2:3:e?4:1,i;r=L(t)?e?1:4:e?3:2}return i.minus(s).abs()}function W(n,i,t,r){var o,u,c,h,f,a,l,d,p,g=n.constructor,w=void 0!==t;if(w?(O(t,1,1e9),void 0===r?r=g.rounding:O(r,0,8)):(t=g.precision,r=g.rounding),n.isFinite()){for(c=(l=P(n)).indexOf("."),w?(o=2,16==i?t=4*t-3:8==i&&(t=3*t-2)):o=i,c>=0&&(l=l.replace(".",""),(p=new g(1)).e=l.length-c,p.d=Z(P(p),10,o),p.e=p.d.length),u=f=(d=Z(l,10,o)).length;0==d[--f];)d.pop();if(d[0]){if(c<0?u--:((n=new g(n)).d=d,n.e=u,d=(n=F(n,p,t,r,0,o)).d,u=n.e,a=e),c=d[t],h=o/2,a=a||void 0!==d[t+1],a=r<4?(void 0!==c||a)&&(0===r||r===(n.s<0?3:2)):c>h||c===h&&(4===r||a||6===r&&1&d[t-1]||r===(n.s<0?8:7)),d.length=t,a)for(;++d[--t]>o-1;)d[t]=0,t||(++u,d.unshift(1));for(f=d.length;!d[f-1];--f);for(c=0,l="";c<f;c++)l+=s.charAt(d[c]);if(w){if(f>1){if(16==i||8==i){for(c=16==i?4:3,--f;f%c;f++)l+="0";for(f=(d=Z(l,o,i)).length;!d[f-1];--f);for(c=1,l="1.";c<f;c++)l+=s.charAt(d[c])}else l=l.charAt(0)+"."+l.slice(1)}l=l+(u<0?"p":"p+")+u}else if(u<0){for(;++u;)l="0"+l;l="0."+l}else if(++u>f)for(u-=f;u--;)l+="0";else u<f&&(l=l.slice(0,u)+"."+l.slice(u))}else l=w?"0p+0":"0";l=(16==i?"0x":2==i?"0b":8==i?"0o":"")+l}else l=I(n);return n.s<0?"-"+l:l}function z(n,i){if(n.length>i)return n.length=i,!0}function J(n){return new this(n).abs()}function G(n){return new this(n).acos()}function K(n){return new this(n).acosh()}function Q(n,i){return new this(n).plus(i)}function X(n){return new this(n).asin()}function Y(n){return new this(n).asinh()}function nn(n){return new this(n).atan()}function ni(n){return new this(n).atanh()}function nt(n,i){n=new this(n),i=new this(i);var t,e=this.precision,r=this.rounding,s=e+4;return n.s&&i.s?n.d||i.d?!i.d||n.isZero()?(t=i.s<0?S(this,e,r):new this(0)).s=n.s:!n.d||i.isZero()?(t=S(this,s,1).times(.5)).s=n.s:i.s<0?(this.precision=s,this.rounding=1,t=this.atan(F(n,i,s,1)),i=S(this,s,1),this.precision=e,this.rounding=r,t=n.s<0?t.minus(i):t.plus(i)):t=this.atan(F(n,i,s,1)):(t=S(this,s,1).times(i.s>0?.25:.75)).s=n.s:t=new this(NaN),t}function ne(n){return new this(n).cbrt()}function nr(n){return A(n=new this(n),n.e+1,2)}function ns(n,i,t){return new this(n).clamp(i,t)}function no(n){if(!n||"object"!=typeof n)throw Error(f+"Object expected");var i,t,e,r=!0===n.defaults,s=["precision",1,1e9,"rounding",0,8,"toExpNeg",-9e15,0,"toExpPos",0,9e15,"maxE",0,9e15,"minE",-9e15,0,"modulo",0,9];for(i=0;i<s.length;i+=3)if(t=s[i],r&&(this[t]=c[t]),void 0!==(e=n[t])){if(g(e)===e&&e>=s[i+1]&&e<=s[i+2])this[t]=e;else throw Error(a+t+": "+e)}if(t="crypto",r&&(this[t]=c[t]),void 0!==(e=n[t])){if(!0===e||!1===e||0===e||1===e){if(e){if("undefined"!=typeof crypto&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(d)}else this[t]=!1}else throw Error(a+t+": "+e)}return this}function nu(n){return new this(n).cos()}function nc(n){return new this(n).cosh()}function nh(n,i){return new this(n).div(i)}function nf(n){return new this(n).exp()}function na(n){return A(n=new this(n),n.e+1,3)}function nl(){var n,i,t=new this(0);for(n=0,h=!1;n<arguments.length;)if(i=new this(arguments[n++]),i.d)t.d&&(t=t.plus(i.times(i)));else{if(i.s)return h=!0,new this(1/0);t=i}return h=!0,t.sqrt()}function nd(n){return n instanceof n_||n&&n.toStringTag===p||!1}function np(n){return new this(n).ln()}function ng(n,i){return new this(n).log(i)}function nw(n){return new this(n).log(2)}function nm(n){return new this(n).log(10)}function nv(){return U(this,arguments,"lt")}function nN(){return U(this,arguments,"gt")}function nb(n,i){return new this(n).mod(i)}function nE(n,i){return new this(n).mul(i)}function nx(n,i){return new this(n).pow(i)}function ny(n){var i,t,e,r,s=0,o=new this(1),u=[];if(void 0===n?n=this.precision:O(n,1,1e9),e=Math.ceil(n/7),this.crypto){if(crypto.getRandomValues)for(i=crypto.getRandomValues(new Uint32Array(e));s<e;)(r=i[s])>=429e7?i[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=r%1e7;else if(crypto.randomBytes){for(i=crypto.randomBytes(e*=4);s<e;)(r=i[s]+(i[s+1]<<8)+(i[s+2]<<16)+((127&i[s+3])<<24))>=214e7?crypto.randomBytes(4).copy(i,s):(u.push(r%1e7),s+=4);s=e/4}else throw Error(d)}else for(;s<e;)u[s++]=1e7*Math.random()|0;for(e=u[--s],n%=7,e&&n&&(r=w(10,7-n),u[s]=(e/r|0)*r);0===u[s];s--)u.pop();if(s<0)t=0,u=[0];else{for(t=-1;0===u[0];t-=7)u.shift();for(e=1,r=u[0];r>=10;r/=10)e++;e<7&&(t-=7-e)}return o.e=t,o.d=u,o}function nM(n){return A(n=new this(n),n.e+1,this.rounding)}function nO(n){return(n=new this(n)).d?n.d[0]?n.s:0*n.s:n.s||NaN}function nq(n){return new this(n).sin()}function nZ(n){return new this(n).sinh()}function nF(n){return new this(n).sqrt()}function nA(n,i){return new this(n).sub(i)}function nP(){var n=0,i=arguments,t=new this(i[0]);for(h=!1;t.s&&++n<i.length;)t=t.plus(i[n]);return h=!0,A(t,this.precision,this.rounding)}function nR(n){return new this(n).tan()}function nD(n){return new this(n).tanh()}function nS(n){return A(n=new this(n),n.e+1,1)}y[Symbol.for("nodejs.util.inspect.custom")]=y.toString,y[Symbol.toStringTag]="Decimal";var n_=y.constructor=function n(i){var t,e,r;function s(n){var i,t,e;if(!(this instanceof s))return new s(n);if(this.constructor=s,nd(n)){this.s=n.s,h?!n.d||n.e>s.maxE?(this.e=NaN,this.d=null):n.e<s.minE?(this.e=0,this.d=[0]):(this.e=n.e,this.d=n.d.slice()):(this.e=n.e,this.d=n.d?n.d.slice():n.d);return}if("number"==(e=typeof n)){if(0===n){this.s=1/n<0?-1:1,this.e=0,this.d=[0];return}if(n<0?(n=-n,this.s=-1):this.s=1,n===~~n&&n<1e7){for(i=0,t=n;t>=10;t/=10)i++;h?i>s.maxE?(this.e=NaN,this.d=null):i<s.minE?(this.e=0,this.d=[0]):(this.e=i,this.d=[n]):(this.e=i,this.d=[n]);return}if(0*n!=0){n||(this.s=NaN),this.e=NaN,this.d=null;return}return H(this,n.toString())}if("string"!==e)throw Error(a+n);return 45===(t=n.charCodeAt(0))?(n=n.slice(1),this.s=-1):(43===t&&(n=n.slice(1)),this.s=1),b.test(n)?H(this,n):function(n,i){var t,e,r,s,o,u,c,f,l;if(i.indexOf("_")>-1){if(i=i.replace(/(\d)_(?=\d)/g,"$1"),b.test(i))return H(n,i)}else if("Infinity"===i||"NaN"===i)return+i||(n.s=NaN),n.e=NaN,n.d=null,n;if(v.test(i))t=16,i=i.toLowerCase();else if(m.test(i))t=2;else if(N.test(i))t=8;else throw Error(a+i);for((s=i.search(/p/i))>0?(c=+i.slice(s+1),i=i.substring(2,s)):i=i.slice(2),o=(s=i.indexOf("."))>=0,e=n.constructor,o&&(s=(u=(i=i.replace(".","")).length)-s,r=T(e,new e(t),s,2*s)),s=l=(f=Z(i,t,1e7)).length-1;0===f[s];--s)f.pop();return s<0?new e(0*n.s):(n.e=R(f,l),n.d=f,h=!1,o&&(n=F(n,r,4*u)),c&&(n=n.times(54>Math.abs(c)?w(2,c):n_.pow(2,c))),h=!0,n)}(this,n)}if(s.prototype=y,s.ROUND_UP=0,s.ROUND_DOWN=1,s.ROUND_CEIL=2,s.ROUND_FLOOR=3,s.ROUND_HALF_UP=4,s.ROUND_HALF_DOWN=5,s.ROUND_HALF_EVEN=6,s.ROUND_HALF_CEIL=7,s.ROUND_HALF_FLOOR=8,s.EUCLID=9,s.config=s.set=no,s.clone=n,s.isDecimal=nd,s.abs=J,s.acos=G,s.acosh=K,s.add=Q,s.asin=X,s.asinh=Y,s.atan=nn,s.atanh=ni,s.atan2=nt,s.cbrt=ne,s.ceil=nr,s.clamp=ns,s.cos=nu,s.cosh=nc,s.div=nh,s.exp=nf,s.floor=na,s.hypot=nl,s.ln=np,s.log=ng,s.log10=nm,s.log2=nw,s.max=nv,s.min=nN,s.mod=nb,s.mul=nE,s.pow=nx,s.random=ny,s.round=nM,s.sign=nO,s.sin=nq,s.sinh=nZ,s.sqrt=nF,s.sub=nA,s.sum=nP,s.tan=nR,s.tanh=nD,s.trunc=nS,void 0===i&&(i={}),i&&!0!==i.defaults)for(t=0,r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"];t<r.length;)i.hasOwnProperty(e=r[t++])||(i[e]=this[e]);return s.config(i),s}(c);o=new n_(o),u=new n_(u),i.Z=n_}}]);