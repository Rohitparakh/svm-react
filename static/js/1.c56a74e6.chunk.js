(this["webpackJsonpsvm-flone"]=this["webpackJsonpsvm-flone"]||[]).push([[1],{480:function(e,a,t){"use strict";t.d(a,"e",(function(){return c})),t.d(a,"a",(function(){return r})),t.d(a,"g",(function(){return l})),t.d(a,"b",(function(){return s})),t.d(a,"d",(function(){return i})),t.d(a,"c",(function(){return m})),t.d(a,"f",(function(){return u})),t.d(a,"i",(function(){return f})),t.d(a,"h",(function(){return E})),t.d(a,"j",(function(){return d}));var n=t(44),c=function(e,a,t,n){var c=a?e.filter((function(e){return e.category.filter((function(e){return e===a}))[0]})):e;if(t&&"new"===t){var r=c.filter((function(e){return e.new}));return r.slice(0,n||r.length)}if(t&&"bestSeller"===t)return c.sort((function(e,a){return a.saleCount-e.saleCount})).slice(0,n||c.length);if(t&&"saleItems"===t){var l=c.filter((function(e){return e.discount&&e.discount>0}));return l.slice(0,n||l.length)}return c.slice(0,n||c.length)},r=function(e,a){return a&&a>0?e-e*(a/100):null},l=function(e,a,t){if(e&&a&&t){if("category"===a)return e.filter((function(e){return e.category.filter((function(e){return e===t}))[0]}));if("tag"===a)return e.filter((function(e){return e.tag.filter((function(e){return e===t}))[0]}));if("color"===a)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===t}))[0]}));if("size"===a)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size?e.size.filter((function(e){return e.name===t}))[0]:null}))[0]}));if("filterSort"===a){var c=Object(n.a)(e);if("default"===t)return c;if("priceHighToLow"===t)return c.sort((function(e,a){return a.price-e.price}));if("priceLowToHigh"===t)return c.sort((function(e,a){return e.price-a.price}))}}return e},o=function(e){return e.filter((function(e,a,t){return a===t.indexOf(e)}))},s=function(e){var a=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return a.push(e)}))})),o(a)},i=function(e){var a=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return a.push(e)}))})),o(a)},m=function(e){var a=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return a.push(e.color)}))})),o(a)},u=function(e){var a=[];return e&&e.map((function(e){if(e.variation&&e.variation[0].size)return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return a.push(e.name)}))}))})),o(a)},f=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},E=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},d=function(e){var a=document.querySelector("#product-filter-wrapper");a.classList.toggle("active"),a.style.height?a.style.height=null:a.style.height=a.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},482:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(84),l=t(145);a.a=function(){return c.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"breadcrumb-content text-center"},c.a.createElement(l.Breadcrumbs,{separator:c.a.createElement("span",null,"/"),item:r.c,finalItem:"span"}))))}},483:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(479),l=t(486),o=t(487),s=t(491),i=t(489),m=t(64),u=t(63),f=t(148),E=t(488),d=Object(u.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(a){e(Object(f.b)(a))}}}))(Object(m.multilanguage)((function(e){var a=e.currency,t=e.setCurrency,n=e.currentLanguageCode,r=e.dispatch,l=e.borderStyle;return c.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===l?"border-bottom":"")},c.a.createElement(E.a,{currency:a,setCurrency:t,currentLanguageCode:n,dispatch:r}),c.a.createElement("div",{className:"header-offer"},c.a.createElement("p",null,"Free delivery on orders over"," ",c.a.createElement("span",null,(2e4*a.currencyRate).toLocaleString("en-IN",{maximumFractionDigits:2,style:"currency",currency:a.currencyName})))))}))),v=function(e){var a=e.layout,t=e.top,m=e.borderStyle,u=e.headerPaddingClass,f=e.headerBgClass,E=Object(n.useState)(0),v=Object(r.a)(E,2),g=v[0],b=v[1],p=Object(n.useState)(0),h=Object(r.a)(p,2),N=h[0],y=h[1];Object(n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){b(window.scrollY)};return c.a.createElement("header",{className:"header-area clearfix ".concat(f||"")},c.a.createElement("div",{className:"".concat(u||""," ").concat("visible"===t?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===m?"border-none":"")},c.a.createElement("div",{className:"container-fluid"===a?a:"container"},c.a.createElement(d,{borderStyle:m}))),c.a.createElement("div",{className:" ".concat(u||""," sticky-bar header-res-padding clearfix ").concat(g>N?"stick":"")},c.a.createElement("div",{className:"container-fluid"===a?a:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},c.a.createElement(l.a,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})),c.a.createElement("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block"},c.a.createElement(o.a,null)),c.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},c.a.createElement(s.a,null)))),c.a.createElement(i.a,null)))},g=t(490);a.a=function(e){var a=e.children,t=e.headerContainerClass,r=e.headerTop,l=e.headerPaddingClass;return c.a.createElement(n.Fragment,null,c.a.createElement(v,{layout:t,top:r,headerPaddingClass:l}),a,c.a.createElement(g.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},486:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(84);a.a=function(e){var a=e.imageUrl,t=e.logoClass;return c.a.createElement("div",{className:"".concat(t||"")},c.a.createElement(r.b,{to:"/svm-react/"},c.a.createElement("img",{alt:"",src:"/svm-react"+a})))}},487:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(84),l=t(64),o=t(146);a.a=Object(l.multilanguage)((function(e){var a=e.strings,t=e.menuWhiteClass,n=e.sidebarMenu;return c.a.createElement("div",{className:" ".concat(n?"sidebar-menu":"main-menu ".concat(t||"")," ")},c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(r.b,{to:"/svm-react/"},a.home)),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/svm-react/shop"}," ",a.view)),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/svm-react/collections/all"},a.collection,n?c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-angle-right"})):c.a.createElement("i",{className:"fa fa-angle-down"})),c.a.createElement("ul",{className:"submenu"},o.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(r.b,{to:"/svm-react"+"/collections/".concat(e.name.toLowerCase())},e.name))})))),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/svm-react/"},a.pages,n?c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-angle-right"})):c.a.createElement("i",{className:"fa fa-angle-down"})),c.a.createElement("ul",{className:"submenu"},c.a.createElement("li",null,c.a.createElement(r.b,{to:"/svm-react/compare"},a.compare)),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/svm-react/about"},a.about_us)),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/svm-react/contact"},a.contact_us)))),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/svm-react/contact"},a.contact_us)))))}))},488:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(64);a.a=function(e){var a=e.currency,t=e.setCurrency,n=e.currentLanguageCode,l=e.dispatch,o=function(e){var a=e.target.value;l(Object(r.changeLanguage)(a))},s=function(e){var a=e.target.value;t(a)};return c.a.createElement("div",{className:"language-currency-wrap"},c.a.createElement("div",{className:"same-language-currency language-style"},c.a.createElement("span",null,"en"===n?"English":"fn"===n?"French":"de"===n?"Germany":""," ",c.a.createElement("i",{className:"fa fa-angle-down"})),c.a.createElement("div",{className:"lang-car-dropdown"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("button",{value:"en",onClick:function(e){return o(e)}},"English")),c.a.createElement("li",null,c.a.createElement("button",{value:"fn",onClick:function(e){return o(e)}},"French")),c.a.createElement("li",null,c.a.createElement("button",{value:"de",onClick:function(e){return o(e)}},"Germany"))))),c.a.createElement("div",{className:"same-language-currency use-style"},c.a.createElement("span",null,a.currencyName," ",c.a.createElement("i",{className:"fa fa-angle-down"})),c.a.createElement("div",{className:"lang-car-dropdown"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("button",{value:"INR",onClick:function(e){return s(e)}},"INR")),c.a.createElement("li",null,c.a.createElement("button",{value:"USD",onClick:function(e){return s(e)}},"USD")),c.a.createElement("li",null,c.a.createElement("button",{value:"EUR",onClick:function(e){return s(e)}},"EUR")),c.a.createElement("li",null,c.a.createElement("button",{value:"GBP",onClick:function(e){return s(e)}},"GBP"))))),c.a.createElement("div",{className:"same-language-currency"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"tel:7299005580"},c.a.createElement("p",null,"Call Us 7299005580"))))}},489:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(479),l=t(84),o=function(){var e=Object(n.useState)(""),a=Object(r.a)(e,2),t=a[0],o=a[1];return c.a.createElement("div",{className:"offcanvas-mobile-search-area"},c.a.createElement("form",null,c.a.createElement("input",{onChange:function(e){o(e.target.value)},value:t,type:"text",placeholder:"Search ..."}),c.a.createElement(l.b,{onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")},to:"/svm-react/search/"+t},c.a.createElement("button",{type:"submit"},c.a.createElement("i",{className:"fa fa-search"})))))},s=t(64),i=t(146),m=Object(s.multilanguage)((function(e){var a=e.strings;return c.a.createElement("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation"},c.a.createElement("ul",null,c.a.createElement("li",{className:"menu-item-has-childre"},c.a.createElement(l.b,{to:"/svm-react/"},a.home)),c.a.createElement("li",{className:"menu-item-has-childre"},c.a.createElement(l.b,{to:"/svm-react/shop"},a.view)),c.a.createElement("li",{className:"menu-item-has-children"},c.a.createElement(l.b,{to:"/svm-react/collections/all"},a.collection),c.a.createElement("ul",{className:"sub-menu"},i.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(l.b,{to:"/svm-react"+"/collections/".concat(e.name.toLowerCase())},e.name))})))),c.a.createElement("li",{className:"menu-item-has-children"},c.a.createElement("p",null,a.pages),c.a.createElement("ul",{className:"sub-menu"},c.a.createElement("li",null,c.a.createElement(l.b,{to:"/svm-react/compare"},a.compare)),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/svm-react/about"},a.about_us)),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/svm-react/contact"},a.contact_us)))),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/svm-react/contact"},a.contact_us))))})),u=t(63),f=t(148),E=Object(u.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(a){e(Object(f.b)(a))}}}))(Object(s.multilanguage)((function(e){var a=e.currency,t=e.setCurrency,n=e.currentLanguageCode,r=e.dispatch,l=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return c.a.createElement("div",{className:"mobile-menu-middle"},c.a.createElement("div",{className:"lang-curr-style"},c.a.createElement("span",{className:"title mb-2"},"Choose Language "),c.a.createElement("select",{value:n,onChange:function(e){!function(e){var a=e.target.value;r(Object(s.changeLanguage)(a))}(e),l()}},c.a.createElement("option",{value:"en"},"English"),c.a.createElement("option",{value:"fn"},"French"),c.a.createElement("option",{value:"de"},"Germany"))),c.a.createElement("div",{className:"lang-curr-style"},c.a.createElement("span",{className:"title mb-2"},"Choose Currency"),c.a.createElement("select",{value:a.currencyName,onChange:function(e){!function(e){var a=e.target.value;t(a)}(e),l()}},c.a.createElement("option",{value:"INR"},"INR"),c.a.createElement("option",{value:"USD"},"USD"),c.a.createElement("option",{value:"EUR"},"EUR"),c.a.createElement("option",{value:"GBP"},"GBP"))))}))),d=function(){return c.a.createElement("div",{className:"offcanvas-widget-area"},c.a.createElement("div",{className:"off-canvas-contact-widget"},c.a.createElement("div",{className:"header-contact-info"},c.a.createElement("ul",{className:"header-contact-info__list"},c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-phone"})," ",c.a.createElement("a",{href:"tel://7299005580"},"72990 05580 ")),c.a.createElement("br",null),c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-whatsapp"})," ",c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://wa.me/7299005580"},"Whatsapp here!")),c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-envelope"})," ",c.a.createElement("a",{href:"mailto:lg.svmelectronics@gmail.com"},"lg.svmelectronics@gmail.com"))))),c.a.createElement("div",{className:"off-canvas-widget-social"},c.a.createElement("a",{href:"//instagram.com/lgexclusivestore",title:"Instagram"},c.a.createElement("i",{className:"fa fa-instagram"})),c.a.createElement("a",{href:"//facebook.com/lgbestshopalwarpet",title:"Facebook"},c.a.createElement("i",{className:"fa fa-facebook"}))))};a.a=function(){Object(n.useEffect)((function(){for(var t=document.querySelector("#offcanvas-navigation"),n=t.querySelectorAll(".sub-menu"),c=t.querySelectorAll("a"),r=0;r<n.length;r++)n[r].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var l=t.querySelectorAll(".menu-expand"),o=l.length,s=0;s<o;s++)l[s].addEventListener("click",(function(a){e(a)}));for(var i=0;i<c.length;i++)c[i].addEventListener("click",(function(){a()}))}));var e=function(e){e.currentTarget.parentElement.classList.toggle("active")},a=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return c.a.createElement("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu"},c.a.createElement("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return a()}},c.a.createElement("i",{className:"pe-7s-close"})),c.a.createElement("div",{className:"offcanvas-wrapper"},c.a.createElement("div",{className:"offcanvas-inner-content"},c.a.createElement(o,null),c.a.createElement(m,null),c.a.createElement(E,null),c.a.createElement(d,null))))}},490:function(e,a,t){"use strict";var n=t(144),c=t(479),r=t(0),l=t.n(r),o=t(84),s=t(495),i=function(e){var a=e.footerLogo,t=e.spaceBottomClass,n=(new Date).getFullYear();return l.a.createElement("div",{className:"copyright ".concat(t||"")},l.a.createElement("div",{className:"footer-logo"},l.a.createElement(o.b,{to:"/svm-react/"},l.a.createElement("img",{alt:"",src:"/svm-react"+a}))),l.a.createElement("p",null,"\xa9 ","".concat(n," "),l.a.createElement("a",null,"SVM Electronics"),".",l.a.createElement("br",null)," All Rights Reserved"))},m=t(498),u=function(e){var a,t=e.status,n=e.message,c=e.onValidated;return l.a.createElement("div",{className:"subscribe-form"},l.a.createElement("div",{className:"mc-form"},l.a.createElement("div",null,l.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return a=e},type:"email",placeholder:"Enter your email address..."})),l.a.createElement("div",{className:"clear"},l.a.createElement("button",{className:"button",onClick:function(){a&&a.value.indexOf("@")>-1&&c({EMAIL:a.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===t&&l.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===t&&l.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===t&&l.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}))},f=function(e){var a=e.mailchimpUrl;return l.a.createElement("div",null,l.a.createElement(m.a,{url:a,render:function(e){var a=e.subscribe,t=e.status,n=e.message;return l.a.createElement(u,{status:t,message:n,onValidated:function(e){return a(e)}})}}))},E=function(e){var a=e.spaceBottomClass,t=e.spaceLeftClass,n=e.sideMenu;return l.a.createElement("div",{className:"footer-widget ".concat(a||""," ").concat(n?"ml-ntv5":t||"")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"SUBSCRIBE")),l.a.createElement("div",{className:"subscribe-style"},l.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),l.a.createElement(f,{mailchimpUrl:"https://gmail.us7.list-manage.com/subscribe/post?u=c3e0b2063077a65d4f9230ca0&id=d15bbe18a6"})))};a.a=function(e){var a=e.backgroundColorClass,t=e.spaceTopClass,m=e.spaceBottomClass,u=e.containerClass,f=e.extraFooterClass,d=e.sideMenu,v=Object(r.useState)(0),g=Object(c.a)(v,2),b=g[0],p=g[1],h=Object(r.useState)(0),N=Object(c.a)(h,2),y=N[0],C=N[1];Object(r.useEffect)((function(){return C(100),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){p(window.scrollY)};return l.a.createElement("footer",{className:"footer-area ".concat(a||""," ").concat(t||""," ").concat(m||""," ").concat(f||"")},l.a.createElement("div",{className:"".concat(u||"container")},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement(i,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),l.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"footer-widget mb-30 ml-30"},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"ABOUT US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/svm-react/about"},"About us")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/svm-react/map"},"Store location")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/svm-react/contact"},"Contact")))))),l.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"".concat(d?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"USEFUL LINKS")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/svm-react/faq"},"FAQs")))))),l.a.createElement("div",{className:"".concat(d?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},l.a.createElement("div",{className:"".concat(d?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"FOLLOW US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",Object(n.a)({href:"//www.facebook.com/lgbestshopalwarpet",target:"_blank",rel:"noopener noreferrer"},"rel","noopener noreferrer"),"Facebook")),l.a.createElement("li",null,l.a.createElement("a",Object(n.a)({href:"//www.instagram.com/lgexclusivestore",target:"_blank",rel:"noopener noreferrer"},"rel","noopener noreferrer"),"Instagram")))))),l.a.createElement("div",{className:"".concat(d?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},l.a.createElement(E,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:d})))),l.a.createElement("button",{className:"scroll-top ".concat(b>y?"show":""),onClick:function(){s.animateScroll.scrollToTop()}},l.a.createElement("i",{className:"fa fa-angle-double-up"})))}},491:function(e,a,t){"use strict";var n=t(479),c=t(0),r=t.n(c),l=t(84),o=t(63),s=(t(147),t(480),t(65));a.a=Object(o.connect)((function(e){return{currency:e.currencyData,cartData:e.cartData,wishlistData:e.wishlistData,compareData:e.compareData}}),(function(e){return{deleteFromCart:function(a,t){e(Object(s.f)(a,t))}}}))((function(e){e.currency,e.cartData,e.wishlistData;var a=e.compareData,t=(e.deleteFromCart,e.iconWhiteClass),o=Object(c.useState)(""),s=Object(n.a)(o,2),i=s[0],m=s[1];return r.a.createElement("div",{className:"header-right-wrap ".concat(t||"")},r.a.createElement("div",{className:"same-style header-search d-none d-lg-block"},r.a.createElement("button",{className:"search-active",onClick:function(e){return function(e,a){if(e.currentTarget.nextSibling.classList.toggle("active"),"search"==a){var t=document.getElementById("search");setTimeout((function(){return t.focus()}),50)}}(e,"search")}},r.a.createElement("i",{className:"pe-7s-search"})),r.a.createElement("div",{className:"search-content"},r.a.createElement("form",null,r.a.createElement("input",{id:"search",onChange:function(e){m(e.target.value)},value:i,type:"text",placeholder:"Search"}),r.a.createElement(l.b,{to:"/svm-react/search/"+i},r.a.createElement("button",{className:"button-search"},r.a.createElement("i",{className:"pe-7s-search"})))))),r.a.createElement("div",{className:"same-style header-compare"},r.a.createElement(l.b,{to:"/svm-react/compare"},r.a.createElement("i",{className:"pe-7s-shuffle"}),r.a.createElement("span",{className:"count-style"},a&&a.length?a.length:0))),r.a.createElement("div",{className:"same-style mobile-off-canvas d-block d-lg-none"},r.a.createElement("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")}},r.a.createElement("i",{className:"pe-7s-menu"}))))}))}}]);
//# sourceMappingURL=1.c56a74e6.chunk.js.map