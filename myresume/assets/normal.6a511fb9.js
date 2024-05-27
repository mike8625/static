var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,n=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,o=(e,o)=>{for(var i in o||(o={}))a.call(o,i)&&n(e,i,o[i]);if(l)for(var i of l(o))t.call(o,i)&&n(e,i,o[i]);return e};import{u as i,a as r,L as s,z as u}from"./index.1917a777.js";import{h as m}from"./http.00eab765.js";import{d as c,k as d,h as p,r as v,M as f,m as h,a as y,o as j,c as g,b,f as C,e as D,v as k,N as w,F as $,O as P,G as x}from"./vendor.bdbfe8c2.js";var S={name:"Name",tel:"Phone",save:"Save",confirm:"Confirm",cancel:"Cancel",delete:"Delete",complete:"Complete",loading:"Loading...",telEmpty:"Please fill in the tel",nameEmpty:"Please fill in the name",nameInvalid:"Malformed name",confirmDelete:"Are you sure you want to delete?",telInvalid:"Malformed phone number",vanCalendar:{end:"End",start:"Start",title:"Calendar",startEnd:"Start/End",weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthTitle:(e,a)=>e+"/"+a,rangePrompt:e=>"Choose no more than "+e+" days"},vanCascader:{select:"Select"},vanContactCard:{addText:"Add contact info"},vanContactList:{addText:"Add new contact"},vanPagination:{prev:"Previous",next:"Next"},vanPullRefresh:{pulling:"Pull to refresh...",loosing:"Loose to refresh..."},vanSubmitBar:{label:"Total："},vanCoupon:{unlimited:"Unlimited",discount:e=>10*e+"% off",condition:e=>"At least "+e},vanCouponCell:{title:"Coupon",tips:"No coupons",count:e=>"You have "+e+" coupons"},vanCouponList:{empty:"No coupons",exchange:"Exchange",close:"Close",enable:"Available",disabled:"Unavailable",placeholder:"Coupon code"},vanAddressEdit:{area:"Area",postal:"Postal",areaEmpty:"Please select a receiving area",addressEmpty:"Address can not be empty",postalEmpty:"Wrong postal code",defaultAddress:"Set as the default address",telPlaceholder:"Phone",namePlaceholder:"Name",areaPlaceholder:"Area"},vanAddressEditDetail:{label:"Address",placeholder:"Address"},vanAddressList:{add:"Add new address"}},E=c({setup(){let e=d(""),a=d(!1),l=p((()=>"data/"+e.value+"/")),t=d(!1),n={jumpBase:d(null),jumpIntro:d(null),jumpPurpose:d(null),jumpSalary:d(null),jumpWork:d(null),jumpProject:d(null),jumpEdu:d(null),jumpCert:d(null),jumpFav:d(null)};const c=i(),y=r();let j=d("cn"),{proxy:g}=h(),b=e=>{C.myData={},g.$i18n.locale=e,"en"==e?s.use("en-US",S):s.use("zh-CN",u),w()},C=v({myData:{}}),D=d(!1),k=d(!1),w=()=>{let a="data/"+e.value+"/txt/resume_"+j.value+".json";m.get(a).then((e=>{C.myData=e.data,console.log(C)}))};(()=>{console.log(y);let a=y.query.defName;e.value=a||"default",m.get("data/"+e.value+"/config.json").then((e=>{let a=e.data;D.value=a.enShow,k.value=a.cnShow,a.currentLanguage&&b(a.currentLanguage),w()}))})();return o(o(o({lan:j,leftMenuShow:t},n),f(C)),{qrShow:a,imgPath:l,enShow:D,cnShow:k,changeLang:b,onClickRight:()=>{t.value=!0},onClickLeft:()=>{let a={name:"Home"};"default"!=e.value&&(a.query={defName:e.value}),c.replace(a)},jumpTo:e=>{n[e].value.scrollIntoView()}})}});const _={class:"c-panel c-n-panel"},A={class:"c-n-title",ref:"jumpBase"},T={class:"c-n-title",ref:"jumpPurpose"},L={class:"c-n-title",ref:"jumpSalary"},I={class:"c-n-title",ref:"jumpIntro"},q={class:"c-n-title",ref:"jumpWork"},N={class:"c-n-row fb"},M={class:"c-n-row"},O={class:"c-n-title",ref:"jumpProject"},U={class:"c-n-row fb"},W={class:"c-n-row"},F={class:"c-n-title",ref:"jumpEdu"},R={class:"c-n-row fb"},z={class:"c-n-title",ref:"jumpCert"},B={class:"c-n-row fb"},V={class:"c-n-title",ref:"jumpFav"},H=b("br",null,null,-1),G=b("br",null,null,-1),Y={class:"c-n-title"},J=x("中文"),K=x("EN");E.render=function(e,a,l,t,n,o){const i=y("van-icon"),r=y("van-nav-bar"),s=y("van-cell"),u=y("van-cell-group"),m=y("van-dialog"),c=y("van-radio"),d=y("van-radio-group"),p=y("van-list"),v=y("van-popup");return j(),g("div",_,[b(r,{title:e.$t("normal.title"),"left-text":"  ","left-arrow":"",onClickLeft:e.onClickLeft,onClickRight:e.onClickRight,fixed:!0},{right:C((()=>[b(i,{name:"ellipsis",size:"18"})])),_:1},8,["title","onClickLeft","onClickRight"]),b("div",null,[b("div",null,[D(b("img",{class:"c-n-avatar",src:e.imgPath+e.myData.avatar},null,8,["src"]),[[k,e.myData.avatar]])]),b("div",A,[b(i,{name:"manager-o"}),b("span",null,w(e.$t("normal.basicInfo")),1)],512),b(u,null,{default:C((()=>[b(s,{title:e.$t("normal.name"),value:e.myData.name},null,8,["title","value"]),b(s,{title:e.$t("normal.gender"),value:e.myData.gender},null,8,["title","value"]),b(s,{title:e.$t("normal.birth"),value:e.myData.birth},null,8,["title","value"]),D(b(s,{title:e.$t("normal.nativePlace"),value:e.myData.nativePlace},null,8,["title","value"]),[[k,e.myData.nativePlace]]),b(s,{title:e.$t("normal.currentCity"),value:e.myData.currentCity},null,8,["title","value"]),D(b(s,{title:e.$t("normal.major"),value:e.myData.major},null,8,["title","value"]),[[k,e.myData.major]]),b(s,{title:e.$t("normal.education"),value:e.myData.education},null,8,["title","value"]),b(s,{title:e.$t("normal.phone")},{"right-icon":C((()=>[b("a",{class:"c-n-phone",href:"tel:"+e.myData.phone},w(e.myData.phone),9,["href"])])),_:1},8,["title"]),b(s,{title:e.$t("normal.email")},{"right-icon":C((()=>[b("a",{class:"c-n-phone",href:"mailto:"+e.myData.email},w(e.myData.email),9,["href"])])),_:1},8,["title"]),D(b(s,{title:e.$t("normal.wechat"),onClick:a[1]||(a[1]=a=>e.qrShow=!0)},{"right-icon":C((()=>[b(i,{name:"qr",class:"c-n-qricon"})])),_:1},8,["title"]),[[k,e.myData.wechat]]),D(b(s,{title:e.$t("normal.page")},{"right-icon":C((()=>[b("a",{class:"c-n-page",target:"_blank",href:e.myData.page},w(e.myData.page),9,["href"])])),_:1},8,["title"]),[[k,e.myData.page]])])),_:1}),b("div",T,[b(i,{name:"aim"}),b("span",null,w(e.$t("normal.jobIntension")),1)],512),b(u,null,{default:C((()=>[b(s,{title:e.myData.jobIntension},null,8,["title"])])),_:1}),D(b("div",L,[b(i,{name:"after-sale"}),b("span",null,w(e.$t("normal.salaryExpection")),1)],512),[[k,e.myData.salaryExpection]]),D(b(u,null,{default:C((()=>[b(s,{title:e.myData.salaryExpection},null,8,["title"])])),_:1},512),[[k,e.myData.salaryExpection]]),b("div",I,[b(i,{name:"user-circle-o"}),b("span",null,w(e.$t("normal.selfAssessment")),1)],512),b("div",{class:"c-n-content",innerHTML:e.myData.selfAssessment},null,8,["innerHTML"]),b("div",q,[b(i,{name:"newspaper-o"}),b("span",null,w(e.$t("normal.experience")),1)],512),(j(!0),g($,null,P(e.myData.experience,((e,a)=>(j(),g(u,{key:a},{default:C((()=>[b("div",N,w(e.name),1),b(s,{value:e.time,title:e.number},null,8,["value","title"]),b("div",M,w(e.desc),1)])),_:2},1024)))),128)),b("div",O,[b(i,{name:"records"}),b("span",null,w(e.$t("normal.project")),1)],512),(j(!0),g($,null,P(e.myData.project,((e,a)=>(j(),g(u,{key:a},{default:C((()=>[b("div",U,w(e.name),1),b(s,{title:e.tecnology,value:e.time},null,8,["title","value"]),b("div",W,w(e.desc),1)])),_:2},1024)))),128)),b("div",F,[b(i,{name:"label-o"}),b("span",null,w(e.$t("normal.eduExp")),1)],512),(j(!0),g($,null,P(e.myData.eduExp,((e,a)=>(j(),g(u,{key:a},{default:C((()=>[b("div",R,w(e.school),1),b(s,{title:e.name,value:e.time},null,8,["title","value"])])),_:2},1024)))),128)),D(b("div",z,[b(i,{name:"medal-o"}),b("span",null,w(e.$t("normal.certificate")),1)],512),[[k,e.myData.certificate]]),(j(!0),g($,null,P(e.myData.certificate,((a,l)=>D((j(),g(u,{key:l},{default:C((()=>[b("div",B,w(a.name),1),b(s,{title:a.desc,value:a.time},null,8,["title","value"])])),_:2},1536)),[[k,e.myData.certificate]]))),128)),D(b("div",V,[b(i,{name:"like-o"}),b("span",null,w(e.$t("normal.hobbies")),1)],512),[[k,e.myData.hobbies]]),D(b(u,null,{default:C((()=>[b(s,{title:e.myData.hobbies},null,8,["title"])])),_:1},512),[[k,e.myData.hobbies]])]),H,G,b(m,{show:e.qrShow,"onUpdate:show":a[2]||(a[2]=a=>e.qrShow=a),title:" ",onConfirm:a[3]||(a[3]=a=>e.qrShow=!1)},{default:C((()=>[b("img",{class:"c-n-qrWx",src:e.imgPath+e.myData.wechat},null,8,["src"])])),_:1},8,["show"]),b(v,{class:"c-n-menu",show:e.leftMenuShow,"onUpdate:show":a[14]||(a[14]=a=>e.leftMenuShow=a),position:"left"},{default:C((()=>[b("div",Y,w(e.$t("normal.lang")),1),D(b(d,{modelValue:e.lan,"onUpdate:modelValue":a[4]||(a[4]=a=>e.lan=a),direction:"horizontal",onChange:e.changeLang},{default:C((()=>[b(c,{name:"cn"},{default:C((()=>[J])),_:1}),b(c,{name:"en"},{default:C((()=>[K])),_:1})])),_:1},8,["modelValue","onChange"]),[[k,e.enShow]]),b(p,{class:"c-n-menubox"},{default:C((()=>[b(s,{title:e.$t("normal.basicInfo"),"is-link":"",onClick:a[5]||(a[5]=a=>e.jumpTo("jumpBase"))},null,8,["title"]),b(s,{title:e.$t("normal.jobIntension"),"is-link":"",onClick:a[6]||(a[6]=a=>e.jumpTo("jumpPurpose"))},null,8,["title"]),D(b(s,{title:e.$t("normal.salaryExpection"),"is-link":"",onClick:a[7]||(a[7]=a=>e.jumpTo("jumpSalary"))},null,8,["title"]),[[k,e.myData.salaryExpection]]),b(s,{title:e.$t("normal.selfAssessment"),"is-link":"",onClick:a[8]||(a[8]=a=>e.jumpTo("jumpIntro"))},null,8,["title"]),b(s,{title:e.$t("normal.experience"),"is-link":"",onClick:a[9]||(a[9]=a=>e.jumpTo("jumpWork"))},null,8,["title"]),b(s,{title:e.$t("normal.project"),"is-link":"",onClick:a[10]||(a[10]=a=>e.jumpTo("jumpProject"))},null,8,["title"]),b(s,{title:e.$t("normal.eduExp"),"is-link":"",onClick:a[11]||(a[11]=a=>e.jumpTo("jumpEdu"))},null,8,["title"]),D(b(s,{title:e.$t("normal.certificate"),"is-link":"",onClick:a[12]||(a[12]=a=>e.jumpTo("jumpCert"))},null,8,["title"]),[[k,e.myData.certificate]]),D(b(s,{title:e.$t("normal.hobbies"),"is-link":"",onClick:a[13]||(a[13]=a=>e.jumpTo("jumpFav"))},null,8,["title"]),[[k,e.myData.hobbies]])])),_:1})])),_:1},8,["show"])])};export default E;
