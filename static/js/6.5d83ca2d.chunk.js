(this["webpackJsonpsvm-flone"]=this["webpackJsonpsvm-flone"]||[]).push([[6],{481:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};r.get||r.set?Object.defineProperty(t,a,r):t[a]=e[a]}return t.default=e,t}(a(0)),n=o(a(18)),l=o(a(36)),c=a(490);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,b,v,E=function(e){function t(){return s(this,t),m(this,d(t).apply(this,arguments))}var a,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&l.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=r.default.createElement("div",{className:"react-head-temp"},t);l.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var r=Array.prototype.slice.call(a.children),n=document.head,l=n.innerHTML;(r=(r=r.filter((function(e){return-1===l.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,c.getDuplicateTitle)();a&&(0,c.removeChild)(n,a)}else if("meta"===t){var r=(0,c.getDuplicateMeta)(e);r&&(0,c.removeChild)(n,r)}else if("link"===t&&"canonical"===e.rel){var l=(0,c.getDuplicateCanonical)(e);l&&(0,c.removeChild)(n,l)}})),(0,c.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(a.prototype,n),o&&u(a,o),t}(r.Component);p=E,b="contextTypes",v={extract:n.default.func},b in p?Object.defineProperty(p,b,{value:v,enumerable:!0,configurable:!0,writable:!0}):p[b]=v;var g=E;t.default=g,e.exports=t.default},484:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(84);t.a=function(e){var t=e.footerLogo,a=e.spaceBottomClass,r=(new Date).getFullYear();return n.a.createElement("div",{className:"copyright ".concat(a||"")},n.a.createElement("div",{className:"footer-logo"},n.a.createElement(l.b,{to:"/svm-react/"},n.a.createElement("img",{alt:"",src:"/svm-react"+t}))),n.a.createElement("p",null,"\xa9 ","".concat(r," "),n.a.createElement("a",null,"SVM Electronics"),".",n.a.createElement("br",null)," All Rights Reserved"))}},485:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(499),c=function(e){var t,a=e.status,r=e.message,l=e.onValidated;return n.a.createElement("div",{className:"subscribe-form"},n.a.createElement("div",{className:"mc-form"},n.a.createElement("div",null,n.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return t=e},type:"email",placeholder:"Enter your email address..."})),n.a.createElement("div",{className:"clear"},n.a.createElement("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&l({EMAIL:t.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===a&&n.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===a&&n.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),"success"===a&&n.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}))},o=function(e){var t=e.mailchimpUrl;return n.a.createElement("div",null,n.a.createElement(l.a,{url:t,render:function(e){var t=e.subscribe,a=e.status,r=e.message;return n.a.createElement(c,{status:a,message:r,onValidated:function(e){return t(e)}})}}))};t.a=function(e){var t=e.spaceBottomClass,a=e.spaceLeftClass,r=e.sideMenu;return n.a.createElement("div",{className:"footer-widget ".concat(t||""," ").concat(r?"ml-ntv5":a||"")},n.a.createElement("div",{className:"footer-title"},n.a.createElement("h3",null,"SUBSCRIBE")),n.a.createElement("div",{className:"subscribe-style"},n.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),n.a.createElement(o,{mailchimpUrl:"https://gmail.us7.list-manage.com/subscribe/post?u=c3e0b2063077a65d4f9230ca0&id=d15bbe18a6"})))}},486:function(e,t,a){"use strict";var r=a(479),n=a(0),l=a.n(n),c=a(84),o=a(501),i=a(484),s=a(485);t.a=function(e){var t=e.backgroundColorClass,a=e.spaceTopClass,u=e.spaceBottomClass,m=e.containerClass,d=e.extraFooterClass,f=e.sideMenu,p=Object(n.useState)(0),b=Object(r.a)(p,2),v=b[0],E=b[1],g=Object(n.useState)(0),y=Object(r.a)(g,2),h=y[0],w=y[1];Object(n.useEffect)((function(){return w(100),window.addEventListener("scroll",N),function(){window.removeEventListener("scroll",N)}}),[]);var N=function(){E(window.scrollY)};return l.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(a||""," ").concat(u||""," ").concat(d||"")},l.a.createElement("div",{className:"".concat(m||"container")},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"".concat(f?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement(i.a,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),l.a.createElement("div",{className:"".concat(f?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"footer-widget mb-30 ml-30"},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"ABOUT US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/svm-react/about"},"About us")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/svm-react/contact"},"Store location")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/svm-react/contact"},"Contact")))))),l.a.createElement("div",{className:"".concat(f?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"".concat(f?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"USEFUL LINKS")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/svm-react#/"},"Support Policy")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/svm-react#/"},"FAQs")))))),l.a.createElement("div",{className:"".concat(f?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},l.a.createElement("div",{className:"".concat(f?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"FOLLOW US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"//www.facebook.com/lgbestshopalwarpet",target:"_blank",rel:"noopener noreferrer"},"Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.instagram.com/lgexclusivestore",target:"_blank",rel:"noopener noreferrer"},"Instagram")))))),l.a.createElement("div",{className:"".concat(f?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},l.a.createElement(s.a,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:f})))),l.a.createElement("button",{className:"scroll-top ".concat(v>h?"show":""),onClick:function(){o.animateScroll.scrollToTop()}},l.a.createElement("i",{className:"fa fa-angle-double-up"})))}},487:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=c(a(489)),n=c(a(481)),l=c(a(491));function c(e){return e&&e.__esModule?e:{default:e}}var o=n.default;t.default=o},488:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(496),c=a(486);t.a=function(e){var t=e.children,a=e.headerContainerClass,o=e.headerTop,i=e.headerPaddingClass;return n.a.createElement(r.Fragment,null,n.a.createElement(l.a,{layout:a,top:o,headerPaddingClass:i}),t,n.a.createElement(c.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},489:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=a(0),l=(r=a(18))&&r.__esModule?r:{default:r};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return o(this,t),s(this,u(t).apply(this,arguments))}var a,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return n.Children.only(this.props.children)}}])&&i(a.prototype,r),l&&i(a,l),t}(n.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(d,"childContextTypes",{extract:l.default.func});var f=d;t.default=f,e.exports=t.default},490:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,r=[],c=[];return e.forEach((function(e){var n=e.type,l=e.props;"title"===n?t=e:"link"===n&&"canonical"===l.rel?a=e:"meta"===n?r.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};l.forEach((function(e){t[e]=[]}));for(var a=[],r=function(r){var c=e[r],o=c.props.id;(o?!t.id[o]:0===n.filter((function(e){var a=c.props[e],r=t[e][a];return r&&!r.props.id})).length)&&(a.unshift(c),l.forEach((function(e){var a=c.props[e];a&&(t[e][a]=c)})))},c=e.length-1;c>=0;c--)r(c);return a}(r)),[a],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return r.reduce((function(a,r){var n,l=e.getAttribute(r);return l?a.concat((n=t.querySelectorAll("[".concat(r,' = "').concat(l,'"]')),(n=Array.prototype.slice.call(n||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),r=0,n=t.length;r<n;r++)a.appendChild(t[r]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,r=t.length;a<r;a++)e.removeChild(t[a])};var r=["property","name","itemprop"],n=r.concat(["itemProp"]),l=n.concat(["id"])},491:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};r.get||r.set?Object.defineProperty(t,a,r):t[a]=e[a]}return t.default=e,t}(a(0)),n=c(a(18)),l=c(a(481));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,p,b,v=function(e){function t(){return i(this,t),u(this,m(t).apply(this,arguments))}var a,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(n=[{key:"render",value:function(){return r.default.createElement(l.default,null,r.default.createElement("title",null,this.props.title))}}])&&s(a.prototype,n),c&&s(a,c),t}(r.Component);f=v,p="propTypes",b={title:n.default.string},p in f?Object.defineProperty(f,p,{value:b,enumerable:!0,configurable:!0,writable:!0}):f[p]=b;var E=v;t.default=E,e.exports=t.default},500:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(84),c=a(146);t.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(c.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:l.c,finalItem:"span"}))))}},596:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(84);t.a=function(){return n.a.createElement("div",{className:"sidebar-style"},n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Search "),n.a.createElement("div",{className:"pro-sidebar-search mb-55 mt-25"},n.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},n.a.createElement("input",{type:"text",placeholder:"Search here..."}),n.a.createElement("button",null,n.a.createElement("i",{className:"pe-7s-search"}))))),n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Recent Projects "),n.a.createElement("div",{className:"sidebar-project-wrap mt-30"},n.a.createElement("div",{className:"single-sidebar-blog"},n.a.createElement("div",{className:"sidebar-blog-img"},n.a.createElement(l.b,{to:"/svm-react/blog-details-standard"},n.a.createElement("img",{src:"/svm-react/assets/img/blog/sidebar-1.jpg",alt:""}))),n.a.createElement("div",{className:"sidebar-blog-content"},n.a.createElement("span",null,"Photography"),n.a.createElement("h4",null,n.a.createElement(l.b,{to:"/svm-react/blog-details-standard"},"T- Shart And Jeans")))),n.a.createElement("div",{className:"single-sidebar-blog"},n.a.createElement("div",{className:"sidebar-blog-img"},n.a.createElement(l.b,{to:"/svm-react/blog-details-standard"},n.a.createElement("img",{src:"/svm-react/assets/img/blog/sidebar-2.jpg",alt:""}))),n.a.createElement("div",{className:"sidebar-blog-content"},n.a.createElement("span",null,"Branding"),n.a.createElement("h4",null,n.a.createElement(l.b,{to:"/svm-react/blog-details-standard"},"T- Shart And Jeans")))),n.a.createElement("div",{className:"single-sidebar-blog"},n.a.createElement("div",{className:"sidebar-blog-img"},n.a.createElement(l.b,{to:"/svm-react/blog-details-standard"},n.a.createElement("img",{src:"/svm-react/assets/img/blog/sidebar-3.jpg",alt:""}))),n.a.createElement("div",{className:"sidebar-blog-content"},n.a.createElement("span",null,"Design"),n.a.createElement("h4",null,n.a.createElement(l.b,{to:"/svm-react/blog-details-standard"},"T- Shart And Jeans")))),n.a.createElement("div",{className:"single-sidebar-blog"},n.a.createElement("div",{className:"sidebar-blog-img"},n.a.createElement(l.b,{to:"/svm-react/blog-details-standard"},n.a.createElement("img",{src:"/svm-react/assets/img/blog/sidebar-2.jpg",alt:""}))),n.a.createElement("div",{className:"sidebar-blog-content"},n.a.createElement("span",null,"Photography"),n.a.createElement("h4",null,n.a.createElement(l.b,{to:"/svm-react/blog-details-standard"},"T- Shart And Jeans")))))),n.a.createElement("div",{className:"sidebar-widget mt-35"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Categories"),n.a.createElement("div",{className:"sidebar-widget-list sidebar-widget-list--blog mt-20"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",n.a.createElement(l.b,{to:"/svm-react/blog-standard"},"Women ",n.a.createElement("span",null,"4")," "),n.a.createElement("span",{className:"checkmark"}))),n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",n.a.createElement(l.b,{to:"/svm-react/blog-standard"},"Men ",n.a.createElement("span",null,"4")," "),n.a.createElement("span",{className:"checkmark"}))),n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",n.a.createElement(l.b,{to:"/svm-react/blog-standard"},"Bags ",n.a.createElement("span",null,"4")," "),n.a.createElement("span",{className:"checkmark"}))),n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",n.a.createElement(l.b,{to:"/svm-react/blog-standard"},"Accessories ",n.a.createElement("span",null,"4")," "),n.a.createElement("span",{className:"checkmark"})))))),n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Tag "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(l.b,{to:"/svm-react/blog-standard"},"Clothing")),n.a.createElement("li",null,n.a.createElement(l.b,{to:"/svm-react/blog-standard"},"Accessories")),n.a.createElement("li",null,n.a.createElement(l.b,{to:"/svm-react/blog-standard"},"For Men")),n.a.createElement("li",null,n.a.createElement(l.b,{to:"/svm-react/blog-standard"},"Women")),n.a.createElement("li",null,n.a.createElement(l.b,{to:"/svm-react/blog-standard"},"Fashion"))))))}}}]);
//# sourceMappingURL=6.5d83ca2d.chunk.js.map