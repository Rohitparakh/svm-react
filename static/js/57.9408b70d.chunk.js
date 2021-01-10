(this["webpackJsonpsvm-flone"]=this["webpackJsonpsvm-flone"]||[]).push([[57],{481:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};l.get||l.set?Object.defineProperty(t,a,l):t[a]=e[a]}return t.default=e,t}(a(0)),n=o(a(18)),r=o(a(36)),c=a(490);function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function u(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,E,p,v=function(e){function t(){return m(this,t),u(this,f(t).apply(this,arguments))}var a,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&r.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=l.default.createElement("div",{className:"react-head-temp"},t);r.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var l=Array.prototype.slice.call(a.children),n=document.head,r=n.innerHTML;(l=(l=l.filter((function(e){return-1===r.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,c.getDuplicateTitle)();a&&(0,c.removeChild)(n,a)}else if("meta"===t){var l=(0,c.getDuplicateMeta)(e);l&&(0,c.removeChild)(n,l)}else if("link"===t&&"canonical"===e.rel){var r=(0,c.getDuplicateCanonical)(e);r&&(0,c.removeChild)(n,r)}})),(0,c.appendChild)(document.head,l)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&i(a.prototype,n),o&&i(a,o),t}(l.Component);b=v,E="contextTypes",p={extract:n.default.func},E in b?Object.defineProperty(b,E,{value:p,enumerable:!0,configurable:!0,writable:!0}):b[E]=p;var g=v;t.default=g,e.exports=t.default},484:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(84);t.a=function(e){var t=e.footerLogo,a=e.spaceBottomClass,l=(new Date).getFullYear();return n.a.createElement("div",{className:"copyright ".concat(a||"")},n.a.createElement("div",{className:"footer-logo"},n.a.createElement(r.b,{to:"/svm-react/"},n.a.createElement("img",{alt:"",src:"/svm-react"+t}))),n.a.createElement("p",null,"\xa9 ","".concat(l," "),n.a.createElement("a",null,"SVM Electronics"),".",n.a.createElement("br",null)," All Rights Reserved"))}},485:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(499),c=function(e){var t,a=e.status,l=e.message,r=e.onValidated;return n.a.createElement("div",{className:"subscribe-form"},n.a.createElement("div",{className:"mc-form"},n.a.createElement("div",null,n.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return t=e},type:"email",placeholder:"Enter your email address..."})),n.a.createElement("div",{className:"clear"},n.a.createElement("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&r({EMAIL:t.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===a&&n.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===a&&n.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}),"success"===a&&n.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}))},o=function(e){var t=e.mailchimpUrl;return n.a.createElement("div",null,n.a.createElement(r.a,{url:t,render:function(e){var t=e.subscribe,a=e.status,l=e.message;return n.a.createElement(c,{status:a,message:l,onValidated:function(e){return t(e)}})}}))};t.a=function(e){var t=e.spaceBottomClass,a=e.spaceLeftClass,l=e.sideMenu;return n.a.createElement("div",{className:"footer-widget ".concat(t||""," ").concat(l?"ml-ntv5":a||"")},n.a.createElement("div",{className:"footer-title"},n.a.createElement("h3",null,"SUBSCRIBE")),n.a.createElement("div",{className:"subscribe-style"},n.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),n.a.createElement(o,{mailchimpUrl:"https://gmail.us7.list-manage.com/subscribe/post?u=c3e0b2063077a65d4f9230ca0&id=d15bbe18a6"})))}},486:function(e,t,a){"use strict";var l=a(479),n=a(0),r=a.n(n),c=a(84),o=a(501),s=a(484),m=a(485);t.a=function(e){var t=e.backgroundColorClass,a=e.spaceTopClass,i=e.spaceBottomClass,u=e.containerClass,f=e.extraFooterClass,d=e.sideMenu,b=Object(n.useState)(0),E=Object(l.a)(b,2),p=E[0],v=E[1],g=Object(n.useState)(0),h=Object(l.a)(g,2),y=h[0],N=h[1];Object(n.useEffect)((function(){return N(100),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){v(window.scrollY)};return r.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(a||""," ").concat(i||""," ").concat(f||"")},r.a.createElement("div",{className:"".concat(u||"container")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},r.a.createElement(s.a,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),r.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},r.a.createElement("div",{className:"footer-widget mb-30 ml-30"},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"ABOUT US")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/svm-react/about"},"About us")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/svm-react/contact"},"Store location")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/svm-react/contact"},"Contact")))))),r.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},r.a.createElement("div",{className:"".concat(d?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"USEFUL LINKS")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/svm-react#/"},"Support Policy")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/svm-react#/"},"FAQs")))))),r.a.createElement("div",{className:"".concat(d?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},r.a.createElement("div",{className:"".concat(d?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"FOLLOW US")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"//www.facebook.com/lgbestshopalwarpet",target:"_blank",rel:"noopener noreferrer"},"Facebook")),r.a.createElement("li",null,r.a.createElement("a",{href:"//www.instagram.com/lgexclusivestore",target:"_blank",rel:"noopener noreferrer"},"Instagram")))))),r.a.createElement("div",{className:"".concat(d?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},r.a.createElement(m.a,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:d})))),r.a.createElement("button",{className:"scroll-top ".concat(p>y?"show":""),onClick:function(){o.animateScroll.scrollToTop()}},r.a.createElement("i",{className:"fa fa-angle-double-up"})))}},487:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return r.default}}),t.default=void 0;var l=c(a(489)),n=c(a(481)),r=c(a(491));function c(e){return e&&e.__esModule?e:{default:e}}var o=n.default;t.default=o},488:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(496),c=a(486);t.a=function(e){var t=e.children,a=e.headerContainerClass,o=e.headerTop,s=void 0===o?"visible":o,m=e.headerPaddingClass;return n.a.createElement(l.Fragment,null,n.a.createElement(r.a,{layout:a,top:s,headerPaddingClass:m}),t,n.a.createElement(c.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},489:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,n=a(0),r=(l=a(18))&&l.__esModule?l:{default:l};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function m(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return o(this,t),m(this,i(t).apply(this,arguments))}var a,l,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),a=t,(l=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return n.Children.only(this.props.children)}}])&&s(a.prototype,l),r&&s(a,r),t}(n.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(f,"childContextTypes",{extract:r.default.func});var d=f;t.default=d,e.exports=t.default},490:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,l=[],c=[];return e.forEach((function(e){var n=e.type,r=e.props;"title"===n?t=e:"link"===n&&"canonical"===r.rel?a=e:"meta"===n?l.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};r.forEach((function(e){t[e]=[]}));for(var a=[],l=function(l){var c=e[l],o=c.props.id;(o?!t.id[o]:0===n.filter((function(e){var a=c.props[e],l=t[e][a];return l&&!l.props.id})).length)&&(a.unshift(c),r.forEach((function(e){var a=c.props[e];a&&(t[e][a]=c)})))},c=e.length-1;c>=0;c--)l(c);return a}(l)),[a],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return l.reduce((function(a,l){var n,r=e.getAttribute(l);return r?a.concat((n=t.querySelectorAll("[".concat(l,' = "').concat(r,'"]')),(n=Array.prototype.slice.call(n||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),l=0,n=t.length;l<n;l++)a.appendChild(t[l]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,l=t.length;a<l;a++)e.removeChild(t[a])};var l=["property","name","itemprop"],n=l.concat(["itemProp"]),r=n.concat(["id"])},491:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};l.get||l.set?Object.defineProperty(t,a,l):t[a]=e[a]}return t.default=e,t}(a(0)),n=c(a(18)),r=c(a(481));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function i(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,b,E,p=function(e){function t(){return s(this,t),i(this,u(t).apply(this,arguments))}var a,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(n=[{key:"render",value:function(){return l.default.createElement(r.default,null,l.default.createElement("title",null,this.props.title))}}])&&m(a.prototype,n),c&&m(a,c),t}(l.Component);d=p,b="propTypes",E={title:n.default.string},b in d?Object.defineProperty(d,b,{value:E,enumerable:!0,configurable:!0,writable:!0}):d[b]=E;var v=p;t.default=v,e.exports=t.default},500:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(84),c=a(146);t.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(c.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:r.c,finalItem:"span"}))))}},569:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(){return n.a.createElement("div",{className:"pro-pagination-style text-center mt-20"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{className:"prev"},n.a.createElement("i",{className:"fa fa-angle-double-left"}))),n.a.createElement("li",null,n.a.createElement("button",{className:"active"},"1")),n.a.createElement("li",null,n.a.createElement("button",null,"2")),n.a.createElement("li",null,n.a.createElement("button",{className:"next"},n.a.createElement("i",{className:"fa fa-angle-double-right"})))))}},773:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(487),c=a.n(r),o=a(146),s=a(488),m=a(500),i=a(569),u=a(84),f=function(){return n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},n.a.createElement("img",{src:"/svm-react/assets/img/blog/blog-9.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"Lorem ipsum blog post")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},n.a.createElement("img",{src:"/svm-react/assets/img/blog/blog-8.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"New collection of our shop")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},n.a.createElement("img",{src:"/svm-react/assets/img/blog/blog-7.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"Ipsum blog post two")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},n.a.createElement("img",{src:"/svm-react/assets/img/blog/blog-6.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"New shop collection")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},n.a.createElement("img",{src:"/svm-react/assets/img/blog/blog-5.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"Lorem blog post four")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))),n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12"},n.a.createElement("div",{className:"blog-wrap-2 mb-30"},n.a.createElement("div",{className:"blog-img-2"},n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},n.a.createElement("img",{src:"/svm-react/assets/img/blog/blog-4.jpg",alt:""}))),n.a.createElement("div",{className:"blog-content-2"},n.a.createElement("div",{className:"blog-meta-2"},n.a.createElement("ul",null,n.a.createElement("li",null,"22 April, 2020"),n.a.createElement("li",null,n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"4 ",n.a.createElement("i",{className:"fa fa-comments-o"}))))),n.a.createElement("h4",null,n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"Ipsum blog post five")),n.a.createElement("p",null,"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus"),n.a.createElement("div",{className:"blog-share-comment"},n.a.createElement("div",{className:"blog-btn-2"},n.a.createElement(u.b,{to:"/svm-react/blog-details-standard"},"read more")),n.a.createElement("div",{className:"blog-share"},n.a.createElement("span",null,"share :"),n.a.createElement("div",{className:"share-social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"//facebook.com"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"//twitter.com"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"instagram",href:"//instagram.com"},n.a.createElement("i",{className:"fa fa-instagram"})))))))))))};t.default=function(e){var t=e.location.pathname;return n.a.createElement(l.Fragment,null,n.a.createElement(c.a,null,n.a.createElement("title",null,"SVM LG | Blog"),n.a.createElement("meta",{name:"description",content:"Blog of SVM LG."})),n.a.createElement(o.BreadcrumbsItem,{to:"/svm-react/"},"Home"),n.a.createElement(o.BreadcrumbsItem,{to:"/svm-react"+t},"Blog"),n.a.createElement(s.a,{headerTop:"visible"},n.a.createElement(m.a,null),n.a.createElement("div",{className:"blog-area pt-100 pb-100 blog-no-sidebar"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"mr-20"},n.a.createElement("div",{className:"row"},n.a.createElement(f,null)),n.a.createElement(i.a,null))))))))}}}]);
//# sourceMappingURL=57.9408b70d.chunk.js.map