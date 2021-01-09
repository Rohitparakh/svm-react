(this["webpackJsonpsvm-flone"]=this["webpackJsonpsvm-flone"]||[]).push([[60],{481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=c(r(18)),o=c(r(36)),l=r(490);function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,b,v,y=function(e){function t(){return u(this,t),m(this,f(t).apply(this,arguments))}var r,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(a=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=n.default.createElement("div",{className:"react-head-temp"},t);o.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var n=Array.prototype.slice.call(r.children),a=document.head,o=a.innerHTML;(n=(n=n.filter((function(e){return-1===o.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,l.getDuplicateTitle)();r&&(0,l.removeChild)(a,r)}else if("meta"===t){var n=(0,l.getDuplicateMeta)(e);n&&(0,l.removeChild)(a,n)}else if("link"===t&&"canonical"===e.rel){var o=(0,l.getDuplicateCanonical)(e);o&&(0,l.removeChild)(a,o)}})),(0,l.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(r.prototype,a),c&&s(r,c),t}(n.Component);d=y,b="contextTypes",v={extract:a.default.func},b in d?Object.defineProperty(d,b,{value:v,enumerable:!0,configurable:!0,writable:!0}):d[b]=v;var h=y;t.default=h,e.exports=t.default},484:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(84);t.a=function(e){var t=e.footerLogo,r=e.spaceBottomClass,n=(new Date).getFullYear();return a.a.createElement("div",{className:"copyright ".concat(r||"")},a.a.createElement("div",{className:"footer-logo"},a.a.createElement(o.b,{to:"/svm-react/"},a.a.createElement("img",{alt:"",src:"/svm-react"+t}))),a.a.createElement("p",null,"\xa9 ","".concat(n," "),a.a.createElement("a",null,"SVM Electronics"),".",a.a.createElement("br",null)," All Rights Reserved"))}},485:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(499),l=function(e){var t,r=e.status,n=e.message,o=e.onValidated;return a.a.createElement("div",{className:"subscribe-form"},a.a.createElement("div",{className:"mc-form"},a.a.createElement("div",null,a.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return t=e},type:"email",placeholder:"Enter your email address..."})),a.a.createElement("div",{className:"clear"},a.a.createElement("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&o({EMAIL:t.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===r&&a.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===r&&a.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===r&&a.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}))},c=function(e){var t=e.mailchimpUrl;return a.a.createElement("div",null,a.a.createElement(o.a,{url:t,render:function(e){var t=e.subscribe,r=e.status,n=e.message;return a.a.createElement(l,{status:r,message:n,onValidated:function(e){return t(e)}})}}))};t.a=function(e){var t=e.spaceBottomClass,r=e.spaceLeftClass,n=e.sideMenu;return a.a.createElement("div",{className:"footer-widget ".concat(t||""," ").concat(n?"ml-ntv5":r||"")},a.a.createElement("div",{className:"footer-title"},a.a.createElement("h3",null,"SUBSCRIBE")),a.a.createElement("div",{className:"subscribe-style"},a.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),a.a.createElement(c,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})))}},486:function(e,t,r){"use strict";var n=r(479),a=r(0),o=r.n(a),l=r(84),c=r(501),i=r(484),u=r(485);t.a=function(e){var t=e.backgroundColorClass,r=e.spaceTopClass,s=e.spaceBottomClass,m=e.containerClass,f=e.extraFooterClass,p=e.sideMenu,d=Object(a.useState)(0),b=Object(n.a)(d,2),v=b[0],y=b[1],h=Object(a.useState)(0),E=Object(n.a)(h,2),g=E[0],O=E[1];Object(a.useEffect)((function(){return O(100),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){y(window.scrollY)};return o.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(r||""," ").concat(s||""," ").concat(f||"")},o.a.createElement("div",{className:"".concat(m||"container")},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"".concat(p?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},o.a.createElement(i.a,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),o.a.createElement("div",{className:"".concat(p?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},o.a.createElement("div",{className:"footer-widget mb-30 ml-30"},o.a.createElement("div",{className:"footer-title"},o.a.createElement("h3",null,"ABOUT US")),o.a.createElement("div",{className:"footer-list"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.b,{to:"/svm-react/about"},"About us")),o.a.createElement("li",null,o.a.createElement(l.b,{to:"/svm-react#/"},"Store location")),o.a.createElement("li",null,o.a.createElement(l.b,{to:"/svm-react/contact"},"Contact")),o.a.createElement("li",null,o.a.createElement(l.b,{to:"/svm-react#/"},"Orders tracking")))))),o.a.createElement("div",{className:"".concat(p?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},o.a.createElement("div",{className:"".concat(p?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},o.a.createElement("div",{className:"footer-title"},o.a.createElement("h3",null,"USEFUL LINKS")),o.a.createElement("div",{className:"footer-list"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.b,{to:"/svm-react#/"},"Returns")),o.a.createElement("li",null,o.a.createElement(l.b,{to:"/svm-react#/"},"Support Policy")),o.a.createElement("li",null,o.a.createElement(l.b,{to:"/svm-react#/"},"Size guide")),o.a.createElement("li",null,o.a.createElement(l.b,{to:"/svm-react#/"},"FAQs")))))),o.a.createElement("div",{className:"".concat(p?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},o.a.createElement("div",{className:"".concat(p?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},o.a.createElement("div",{className:"footer-title"},o.a.createElement("h3",null,"FOLLOW US")),o.a.createElement("div",{className:"footer-list"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),o.a.createElement("li",null,o.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),o.a.createElement("li",null,o.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),o.a.createElement("li",null,o.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),o.a.createElement("div",{className:"".concat(p?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},o.a.createElement(u.a,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:p})))),o.a.createElement("button",{className:"scroll-top ".concat(v>g?"show":""),onClick:function(){c.animateScroll.scrollToTop()}},o.a.createElement("i",{className:"fa fa-angle-double-up"})))}},487:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var n=l(r(489)),a=l(r(481)),o=l(r(491));function l(e){return e&&e.__esModule?e:{default:e}}var c=a.default;t.default=c},488:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(496),l=r(486);t.a=function(e){var t=e.children,r=e.headerContainerClass,c=e.headerTop,i=e.headerPaddingClass;return a.a.createElement(n.Fragment,null,a.a.createElement(o.a,{layout:r,top:c,headerPaddingClass:i}),t,a.a.createElement(l.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},489:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=r(0),o=(n=r(18))&&n.__esModule?n:{default:n};function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return c(this,t),u(this,s(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),r=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return a.Children.only(this.props.children)}}])&&i(r.prototype,n),o&&i(r,o),t}(a.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(f,"childContextTypes",{extract:o.default.func});var p=f;t.default=p,e.exports=t.default},490:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,n=[],l=[];return e.forEach((function(e){var a=e.type,o=e.props;"title"===a?t=e:"link"===a&&"canonical"===o.rel?r=e:"meta"===a?n.push(e):l.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};o.forEach((function(e){t[e]=[]}));for(var r=[],n=function(n){var l=e[n],c=l.props.id;(c?!t.id[c]:0===a.filter((function(e){var r=l.props[e],n=t[e][r];return n&&!n.props.id})).length)&&(r.unshift(l),o.forEach((function(e){var r=l.props[e];r&&(t[e][r]=l)})))},l=e.length-1;l>=0;l--)n(l);return r}(n)),[r],l)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,r=e.id;if(r)return r&&t.querySelector("#".concat(r));return n.reduce((function(r,n){var a,o=e.getAttribute(n);return o?r.concat((a=t.querySelectorAll("[".concat(n,' = "').concat(o,'"]')),(a=Array.prototype.slice.call(a||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,a=t.length;n<a;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],a=n.concat(["itemProp"]),o=a.concat(["id"])},491:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=l(r(18)),o=l(r(481));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,d,b,v=function(e){function t(){return i(this,t),s(this,m(t).apply(this,arguments))}var r,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),r=t,(a=[{key:"render",value:function(){return n.default.createElement(o.default,null,n.default.createElement("title",null,this.props.title))}}])&&u(r.prototype,a),l&&u(r,l),t}(n.Component);p=v,d="propTypes",b={title:a.default.string},d in p?Object.defineProperty(p,d,{value:b,enumerable:!0,configurable:!0,writable:!0}):p[d]=b;var y=v;t.default=y,e.exports=t.default},500:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(84),l=r(146);t.a=function(){return a.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"breadcrumb-content text-center"},a.a.createElement(l.Breadcrumbs,{separator:a.a.createElement("span",null,"/"),item:o.c,finalItem:"span"}))))}},743:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(84),l=r(487),c=r.n(l),i=r(146),u=r(488),s=r(500);t.default=function(e){var t=e.location.pathname;return a.a.createElement(n.Fragment,null,a.a.createElement(c.a,null,a.a.createElement("title",null,"SVM LG | Not Found"),a.a.createElement("meta",{name:"description",content:"404 page of SVM Electronics."})),a.a.createElement(i.BreadcrumbsItem,{to:"/svm-react/"},"Home"),a.a.createElement(i.BreadcrumbsItem,{to:"/svm-react"+t},"404 page"),a.a.createElement(u.a,{headerTop:"visible"},a.a.createElement(s.a,null),a.a.createElement("div",{className:"error-area pt-40 pb-100"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row justify-content-center"},a.a.createElement("div",{className:"col-xl-7 col-lg-8 text-center"},a.a.createElement("div",{className:"error"},a.a.createElement("h1",null,"404"),a.a.createElement("h2",null,"OPPS! PAGE NOT FOUND"),a.a.createElement("p",null,"Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable."),a.a.createElement("form",{className:"searchform mb-50"},a.a.createElement("input",{type:"text",name:"search",id:"error_search",placeholder:"Search...",className:"searchform__input"}),a.a.createElement("button",{type:"submit",className:"searchform__submit"},a.a.createElement("i",{className:"fa fa-search"}))),a.a.createElement(o.b,{to:"/svm-react/",className:"error-btn"},"Back to home page"))))))))}}}]);
//# sourceMappingURL=60.9225caac.chunk.js.map