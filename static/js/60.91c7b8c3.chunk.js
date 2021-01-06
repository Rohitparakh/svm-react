(this["webpackJsonpsvm-flone"]=this["webpackJsonpsvm-flone"]||[]).push([[60],{481:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=o(a(18)),c=o(a(36)),l=a(496);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,E,v,b=function(e){function t(){return s(this,t),m(this,d(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&c.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=n.default.createElement("div",{className:"react-head-temp"},t);c.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var n=Array.prototype.slice.call(a.children),r=document.head,c=r.innerHTML;(n=(n=n.filter((function(e){return-1===c.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,l.getDuplicateTitle)();a&&(0,l.removeChild)(r,a)}else if("meta"===t){var n=(0,l.getDuplicateMeta)(e);n&&(0,l.removeChild)(r,n)}else if("link"===t&&"canonical"===e.rel){var c=(0,l.getDuplicateCanonical)(e);c&&(0,l.removeChild)(r,c)}})),(0,l.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(a.prototype,r),o&&u(a,o),t}(n.Component);f=b,E="contextTypes",v={extract:r.default.func},E in f?Object.defineProperty(f,E,{value:v,enumerable:!0,configurable:!0,writable:!0}):f[E]=v;var h=b;t.default=h,e.exports=t.default},483:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(84);t.a=function(e){var t=e.imageUrl,a=e.logoClass;return r.a.createElement("div",{className:"".concat(a||"")},r.a.createElement(c.b,{to:"/svm-react/"},r.a.createElement("img",{alt:"",src:"/svm-react"+t})))}},484:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(64);t.a=function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,l=e.dispatch,o=function(e){var t=e.target.value;l(Object(c.changeLanguage)(t))},i=function(e){var t=e.target.value;a(t)};return r.a.createElement("div",{className:"language-currency-wrap"},r.a.createElement("div",{className:"same-language-currency language-style"},r.a.createElement("span",null,"en"===n?"English":"fn"===n?"French":"de"===n?"Germany":""," ",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("div",{className:"lang-car-dropdown"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{value:"en",onClick:function(e){return o(e)}},"English")),r.a.createElement("li",null,r.a.createElement("button",{value:"fn",onClick:function(e){return o(e)}},"French")),r.a.createElement("li",null,r.a.createElement("button",{value:"de",onClick:function(e){return o(e)}},"Germany"))))),r.a.createElement("div",{className:"same-language-currency use-style"},r.a.createElement("span",null,t.currencyName," ",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("div",{className:"lang-car-dropdown"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{value:"INR",onClick:function(e){return i(e)}},"INR")),r.a.createElement("li",null,r.a.createElement("button",{value:"USD",onClick:function(e){return i(e)}},"USD")),r.a.createElement("li",null,r.a.createElement("button",{value:"EUR",onClick:function(e){return i(e)}},"EUR")),r.a.createElement("li",null,r.a.createElement("button",{value:"GBP",onClick:function(e){return i(e)}},"GBP"))))),r.a.createElement("div",{className:"same-language-currency"},r.a.createElement("a",{href:"tel:7299005580"},r.a.createElement("p",null,"Call Us 7299005580"))))}},489:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var n=l(a(495)),r=l(a(481)),c=l(a(497));function l(e){return e&&e.__esModule?e:{default:e}}var o=r.default;t.default=o},492:function(e,t,a){"use strict";var n=a(480),r=a(0),c=a.n(r),l=a(483),o=a(490),i=a(493),s=a(491),u=a(64),m=a(63),d=a(144),p=a(484),f=Object(m.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(d.b)(t))}}}))(Object(u.multilanguage)((function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,r=e.dispatch,l=e.borderStyle;return c.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===l?"border-bottom":"")},c.a.createElement(p.a,{currency:t,setCurrency:a,currentLanguageCode:n,dispatch:r}),c.a.createElement("div",{className:"header-offer"},c.a.createElement("p",null,"Free delivery on order over"," ",c.a.createElement("span",null,(2e4*t.currencyRate).toLocaleString("en-IN",{maximumFractionDigits:2,style:"currency",currency:t.currencyName})))))})));t.a=function(e){var t=e.layout,a=e.top,u=e.borderStyle,m=e.headerPaddingClass,d=e.headerBgClass,p=Object(r.useState)(0),E=Object(n.a)(p,2),v=E[0],b=(E[1],Object(r.useState)(0)),h=Object(n.a)(b,2),g=h[0],y=h[1];Object(r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),function(){}}),[]);return c.a.createElement("header",{className:"header-area clearfix ".concat(d||"")},c.a.createElement("div",{className:"".concat(m||""," ").concat("visible"===a?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===u?"border-none":"")},c.a.createElement("div",{className:"container-fluid"===t?t:"container"},c.a.createElement(f,{borderStyle:u}))),c.a.createElement("div",{className:" ".concat(m||""," sticky-bar header-res-padding clearfix ").concat(v>g?"stick":"")},c.a.createElement("div",{className:"container-fluid"===t?t:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},c.a.createElement(l.a,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})),c.a.createElement("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block"},c.a.createElement(o.a,null)),c.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},c.a.createElement(i.a,null)))),c.a.createElement(s.a,null)))}},495:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(0),c=(n=a(18))&&n.__esModule?n:{default:n};function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return o(this,t),s(this,u(t).apply(this,arguments))}var a,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}])&&i(a.prototype,n),c&&i(a,c),t}(r.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(d,"childContextTypes",{extract:c.default.func});var p=d;t.default=p,e.exports=t.default},496:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,n=[],l=[];return e.forEach((function(e){var r=e.type,c=e.props;"title"===r?t=e:"link"===r&&"canonical"===c.rel?a=e:"meta"===r?n.push(e):l.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};c.forEach((function(e){t[e]=[]}));for(var a=[],n=function(n){var l=e[n],o=l.props.id;(o?!t.id[o]:0===r.filter((function(e){var a=l.props[e],n=t[e][a];return n&&!n.props.id})).length)&&(a.unshift(l),c.forEach((function(e){var a=l.props[e];a&&(t[e][a]=l)})))},l=e.length-1;l>=0;l--)n(l);return a}(n)),[a],l)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return n.reduce((function(a,n){var r,c=e.getAttribute(n);return c?a.concat((r=t.querySelectorAll("[".concat(n,' = "').concat(c,'"]')),(r=Array.prototype.slice.call(r||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),n=0,r=t.length;n<r;n++)a.appendChild(t[n]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,n=t.length;a<n;a++)e.removeChild(t[a])};var n=["property","name","itemprop"],r=n.concat(["itemProp"]),c=r.concat(["id"])},497:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=l(a(18)),c=l(a(481));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,f,E,v=function(e){function t(){return i(this,t),u(this,m(t).apply(this,arguments))}var a,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(r=[{key:"render",value:function(){return n.default.createElement(c.default,null,n.default.createElement("title",null,this.props.title))}}])&&s(a.prototype,r),l&&s(a,l),t}(n.Component);p=v,f="propTypes",E={title:r.default.string},f in p?Object.defineProperty(p,f,{value:E,enumerable:!0,configurable:!0,writable:!0}):p[f]=E;var b=v;t.default=b,e.exports=t.default},509:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(499),l=function(e){var t,a=e.status,n=e.message,c=e.onValidated,l=e.spaceTopClass,o=e.subscribeBtnClass;return r.a.createElement("div",{className:"subscribe-form-3 ".concat(l||"")},r.a.createElement("div",{className:"mc-form"},r.a.createElement("div",null,r.a.createElement("input",{className:"email",ref:function(e){return t=e},type:"email",placeholder:"Youe Email Addres",required:!0})),"sending"===a&&r.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===a&&r.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===a&&r.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("div",{className:"clear-3 ".concat(o||"")},r.a.createElement("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&c({EMAIL:t.value}),t.value=""}},"SUBSCRIBE"))))};t.a=function(e){var t=e.mailchimpUrl,a=e.spaceTopClass,n=e.subscribeBtnClass;return r.a.createElement("div",null,r.a.createElement(c.a,{url:t,render:function(e){var t=e.subscribe,c=e.status,o=e.message;return r.a.createElement(l,{status:c,message:o,onValidated:function(e){return t(e)},spaceTopClass:a,subscribeBtnClass:n})}}))}},524:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(509);t.a=function(e){var t=e.spaceTopClass,a=e.spaceBottomClass,n=e.subscribeBtnClass;return r.a.createElement("div",{className:"subscribe-area-3 ".concat(t||""," ").concat(a||""," ")},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-5 col-lg-7 col-md-10 ml-auto mr-auto"},r.a.createElement("div",{className:"subscribe-style-3 text-center"},r.a.createElement("h2",null,"Subscribe "),r.a.createElement("p",null,"Subscribe to our newsletter to receive news on update"),r.a.createElement(c.a,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:n}))))))}},564:function(e,t,a){"use strict";var n=a(480),r=a(0),c=a.n(r),l=a(84),o=a(501);t.a=function(e){var t=e.backgroundColorClass,a=e.copyrightColorClass,i=e.spaceLeftClass,s=e.spaceRightClass,u=e.footerTopBackgroundColorClass,m=e.footerTopSpaceTopClass,d=e.footerTopSpaceBottomClass,p=e.footerLogo,f=Object(r.useState)(0),E=Object(n.a)(f,2),v=E[0],b=E[1],h=Object(r.useState)(0),g=Object(n.a)(h,2),y=g[0],N=g[1];Object(r.useEffect)((function(){return N(100),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){b(window.scrollY)};return c.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(i||""," ").concat(s||"")},c.a.createElement("div",{className:"footer-top text-center ".concat(u||""," ").concat(m||"","  ").concat(d||"")},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"footer-logo"},c.a.createElement(l.b,{to:"/svm-react"},c.a.createElement("img",{alt:"",src:"/svm-react"+"".concat(p||"/assets/img/logo/logo.png")}))),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"),c.a.createElement("div",{className:"footer-social"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"//www.facebook.com"},c.a.createElement("i",{className:"fa fa-facebook"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.dribbble.com"},c.a.createElement("i",{className:"fa fa-dribbble"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.pinterest.com"},c.a.createElement("i",{className:"fa fa-pinterest-p"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.twitter.com"},c.a.createElement("i",{className:"fa fa-twitter"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"//www.linkedin.com"},c.a.createElement("i",{className:"fa fa-linkedin"}))))))),c.a.createElement("div",{className:"footer-bottom text-center"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"copyright-2 ".concat(a||"")},c.a.createElement("p",null,"\xa9 2020"," ",c.a.createElement("a",{href:"//www.hasthemes.com",rel:"noopener noreferrer",target:"_blank"},"SVM Electronics | LG"),". All Rights Reserved.")))),c.a.createElement("button",{className:"scroll-top ".concat(v>y?"show":""),onClick:function(){o.animateScroll.scrollToTop()}},c.a.createElement("i",{className:"fa fa-angle-double-up"})))}},594:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(492),l=a(564);t.a=function(e){var t=e.children,a=e.headerContainerClass,o=e.headerTop,i=e.headerBorderStyle,s=e.headerPaddingClass;return r.a.createElement(n.Fragment,null,r.a.createElement(c.a,{layout:a,top:o,borderStyle:i,headerPaddingClass:s}),t,r.a.createElement(l.a,{backgroundColorClass:"footer-white",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",footerTopBackgroundColorClass:"bg-gray-2",footerTopSpaceTopClass:"pt-80",footerTopSpaceBottomClass:"pb-60",copyrightColorClass:"copyright-gray",footerLogo:"/assets/img/logo/logo.png"}))}},719:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(489),l=a.n(c),o=a(84),i=a(594),s=a(524);t.default=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("title",null,"Flone | Grid Banner Home"),r.a.createElement("meta",{name:"description",content:"Grid banner home of flone react minimalist eCommerce template."})),r.a.createElement(i.a,{headerTop:"visible",headerContainerClass:"container-fluid",headerBorderStyle:"fluid-border",headerPaddingClass:"header-padding-2"},r.a.createElement("div",{className:"product-area hm6-section-padding pb-80"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"product-wrap-4 mb-20"},r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},r.a.createElement("img",{src:"/svm-react/assets/img/product/hm6-pro-1.jpg",alt:""})),r.a.createElement("div",{className:"product-content-4 text-center position-1"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},"T- Shirt And ",r.a.createElement("br",null),"Jeans")),r.a.createElement("div",{className:"price-4 price-4-center"},r.a.createElement("span",null,"$ 60.00"),r.a.createElement("span",{className:"old"},"$ 80.00"))))),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("div",{className:"product-wrap-4 mb-20"},r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},r.a.createElement("img",{src:"/svm-react/assets/img/product/hm6-pro-3.jpg",alt:""})),r.a.createElement("div",{className:"product-content-4 text-center position-1"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},"T- Shirt And ",r.a.createElement("br",null),"Jeans")),r.a.createElement("div",{className:"price-4"},r.a.createElement("span",null,"$ 60.00"),r.a.createElement("span",{className:"old"},"$ 80.00"))))),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("div",{className:"product-wrap-4 mb-20"},r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},r.a.createElement("img",{src:"/svm-react/assets/img/product/hm6-pro-4.jpg",alt:""})),r.a.createElement("div",{className:"product-content-4 text-center position-3"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},"T- Shirt And ",r.a.createElement("br",null),"Jeans")),r.a.createElement("div",{className:"price-4"},r.a.createElement("span",null,"$ 60.00"),r.a.createElement("span",{className:"old"},"$ 80.00"))))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"product-wrap-4 mb-20"},r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},r.a.createElement("img",{src:"/svm-react/assets/img/product/hm6-pro-2.jpg",alt:""})),r.a.createElement("div",{className:"product-content-4 product-content-center position-2"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},"T- Shirt And ",r.a.createElement("br",null),"Jeans")),r.a.createElement("div",{className:"price-4"},r.a.createElement("span",null,"$ 60.00"),r.a.createElement("span",{className:"old"},"$ 80.00"))))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"product-wrap-4 mb-20"},r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},r.a.createElement("img",{src:"/svm-react/assets/img/product/hm6-pro-5.jpg",alt:""})),r.a.createElement("div",{className:"product-content-4 product-content-center position-2"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},"T- Shirt And ",r.a.createElement("br",null),"Jeans")),r.a.createElement("div",{className:"price-4"},r.a.createElement("span",null,"$ 60.00"),r.a.createElement("span",{className:"old"},"$ 80.00"))))),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("div",{className:"product-wrap-4 mb-20"},r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},r.a.createElement("img",{src:"/svm-react/assets/img/product/hm6-pro-6.jpg",alt:""})),r.a.createElement("div",{className:"product-content-4 product-content-center position-2"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},"T- Shirt And ",r.a.createElement("br",null),"Jeans")),r.a.createElement("div",{className:"price-4"},r.a.createElement("span",null,"$ 60.00"),r.a.createElement("span",{className:"old"},"$ 80.00"))))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"product-wrap-4 mb-20"},r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},r.a.createElement("img",{src:"/svm-react/assets/img/product/hm6-pro-7.jpg",alt:""})),r.a.createElement("div",{className:"product-content-4 product-content-center position-2"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},"T- Shirt And ",r.a.createElement("br",null),"Jeans")),r.a.createElement("div",{className:"price-4"},r.a.createElement("span",null,"$ 60.00"),r.a.createElement("span",{className:"old"},"$ 80.00"))))),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("div",{className:"product-wrap-4 mb-20"},r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},r.a.createElement("img",{src:"/svm-react/assets/img/product/hm6-pro-8.jpg",alt:""})),r.a.createElement("div",{className:"product-content-4 product-content-center position-2"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/svm-react/shop-grid-standard"},"T- Shirt And ",r.a.createElement("br",null),"Jeans")),r.a.createElement("div",{className:"price-4"},r.a.createElement("span",null,"$ 60.00"),r.a.createElement("span",{className:"old"},"$ 80.00")))))))),r.a.createElement(s.a,{spaceBottomClass:"pb-100"})))}}}]);
//# sourceMappingURL=60.91c7b8c3.chunk.js.map