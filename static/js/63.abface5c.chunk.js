(this["webpackJsonpsvm-flone"]=this["webpackJsonpsvm-flone"]||[]).push([[63],{484:function(e,a,t){"use strict";var l=t(0),c=t.n(l),n=t(84);a.a=function(e){var a=e.footerLogo,t=e.spaceBottomClass,l=(new Date).getFullYear();return c.a.createElement("div",{className:"copyright ".concat(t||"")},c.a.createElement("div",{className:"footer-logo"},c.a.createElement(n.b,{to:"/svm-react/"},c.a.createElement("img",{alt:"",src:"/svm-react"+a}))),c.a.createElement("p",null,"\xa9 ","".concat(l," "),c.a.createElement("a",null,"SVM Electronics"),".",c.a.createElement("br",null)," All Rights Reserved"))}},485:function(e,a,t){"use strict";var l=t(0),c=t.n(l),n=t(499),r=function(e){var a,t=e.status,l=e.message,n=e.onValidated;return c.a.createElement("div",{className:"subscribe-form"},c.a.createElement("div",{className:"mc-form"},c.a.createElement("div",null,c.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return a=e},type:"email",placeholder:"Enter your email address..."})),c.a.createElement("div",{className:"clear"},c.a.createElement("button",{className:"button",onClick:function(){a&&a.value.indexOf("@")>-1&&n({EMAIL:a.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===t&&c.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===t&&c.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}),"success"===t&&c.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}))},m=function(e){var a=e.mailchimpUrl;return c.a.createElement("div",null,c.a.createElement(n.a,{url:a,render:function(e){var a=e.subscribe,t=e.status,l=e.message;return c.a.createElement(r,{status:t,message:l,onValidated:function(e){return a(e)}})}}))};a.a=function(e){var a=e.spaceBottomClass,t=e.spaceLeftClass,l=e.sideMenu;return c.a.createElement("div",{className:"footer-widget ".concat(a||""," ").concat(l?"ml-ntv5":t||"")},c.a.createElement("div",{className:"footer-title"},c.a.createElement("h3",null,"SUBSCRIBE")),c.a.createElement("div",{className:"subscribe-style"},c.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),c.a.createElement(m,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})))}},486:function(e,a,t){"use strict";var l=t(480),c=t(0),n=t.n(c),r=t(84),m=t(501),o=t(484),s=t(485);a.a=function(e){var a=e.backgroundColorClass,t=e.spaceTopClass,i=e.spaceBottomClass,u=e.containerClass,E=e.extraFooterClass,d=e.sideMenu,f=Object(c.useState)(0),v=Object(l.a)(f,2),p=v[0],b=v[1],g=Object(c.useState)(0),N=Object(l.a)(g,2),h=N[0],w=N[1];Object(c.useEffect)((function(){return w(100),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){b(window.scrollY)};return n.a.createElement("footer",{className:"footer-area ".concat(a||""," ").concat(t||""," ").concat(i||""," ").concat(E||"")},n.a.createElement("div",{className:"".concat(u||"container")},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},n.a.createElement(o.a,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),n.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},n.a.createElement("div",{className:"footer-widget mb-30 ml-30"},n.a.createElement("div",{className:"footer-title"},n.a.createElement("h3",null,"ABOUT US")),n.a.createElement("div",{className:"footer-list"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(r.b,{to:"/svm-react/about"},"About us")),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/svm-react#/"},"Store location")),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/svm-react/contact"},"Contact")),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/svm-react#/"},"Orders tracking")))))),n.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},n.a.createElement("div",{className:"".concat(d?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},n.a.createElement("div",{className:"footer-title"},n.a.createElement("h3",null,"USEFUL LINKS")),n.a.createElement("div",{className:"footer-list"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(r.b,{to:"/svm-react#/"},"Returns")),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/svm-react#/"},"Support Policy")),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/svm-react#/"},"Size guide")),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/svm-react#/"},"FAQs")))))),n.a.createElement("div",{className:"".concat(d?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},n.a.createElement("div",{className:"".concat(d?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},n.a.createElement("div",{className:"footer-title"},n.a.createElement("h3",null,"FOLLOW US")),n.a.createElement("div",{className:"footer-list"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),n.a.createElement("li",null,n.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),n.a.createElement("li",null,n.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),n.a.createElement("li",null,n.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),n.a.createElement("div",{className:"".concat(d?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},n.a.createElement(s.a,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:d})))),n.a.createElement("button",{className:"scroll-top ".concat(p>h?"show":""),onClick:function(){m.animateScroll.scrollToTop()}},n.a.createElement("i",{className:"fa fa-angle-double-up"})))}},488:function(e,a,t){"use strict";var l=t(0),c=t.n(l),n=t(496),r=t(486);a.a=function(e){var a=e.children,t=e.headerContainerClass,m=e.headerTop,o=e.headerPaddingClass;return c.a.createElement(l.Fragment,null,c.a.createElement(n.a,{layout:t,top:m,headerPaddingClass:o}),a,c.a.createElement(r.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},500:function(e,a,t){"use strict";var l=t(0),c=t.n(l),n=t(84),r=t(146);a.a=function(){return c.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"breadcrumb-content text-center"},c.a.createElement(r.Breadcrumbs,{separator:c.a.createElement("span",null,"/"),item:n.c,finalItem:"span"}))))}},773:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(487),r=t.n(n),m=t(146),o=t(488),s=t(500),i=t(699),u=Object(i.GoogleApiWrapper)({apiKey:"AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws"})((function(e){return c.a.createElement(i.Map,{google:e.google,zoom:10,style:{width:"100%",height:"100%"},initialCenter:{lat:e.latitude,lng:e.longitude}},c.a.createElement(i.Marker,{position:{lat:e.latitude,lng:e.longitude},icon:{url:"".concat("/svm-react/assets/img/icon-img/2.png")},animation:e.google.maps.Animation.BOUNCE}))}));a.default=function(e){var a=e.location.pathname;return c.a.createElement(l.Fragment,null,c.a.createElement(r.a,null,c.a.createElement("title",null,"SVM LG | Contact"),c.a.createElement("meta",{name:"description",content:"Contact of SVM Electronics."})),c.a.createElement(m.BreadcrumbsItem,{to:"/svm-react/"},"Home"),c.a.createElement(m.BreadcrumbsItem,{to:"/svm-react"+a},"Contact"),c.a.createElement(o.a,{headerTop:"visible"},c.a.createElement(s.a,null),c.a.createElement("div",{className:"contact-area pt-100 pb-100"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"contact-map mb-10"},c.a.createElement(u,{latitude:"47.444",longitude:"-122.176"})),c.a.createElement("div",{className:"custom-row-2"},c.a.createElement("div",{className:"col-lg-4 col-md-5"},c.a.createElement("div",{className:"contact-info-wrap"},c.a.createElement("div",{className:"single-contact-info"},c.a.createElement("div",{className:"contact-icon"},c.a.createElement("i",{className:"fa fa-phone"})),c.a.createElement("div",{className:"contact-info-dec"},c.a.createElement("p",null,"+012 345 678 102"),c.a.createElement("p",null,"+012 345 678 102"))),c.a.createElement("div",{className:"single-contact-info"},c.a.createElement("div",{className:"contact-icon"},c.a.createElement("i",{className:"fa fa-globe"})),c.a.createElement("div",{className:"contact-info-dec"},c.a.createElement("p",null,c.a.createElement("a",{href:"mailto:urname@email.com"},"urname@email.com")),c.a.createElement("p",null,c.a.createElement("a",{href:"//urwebsitenaem.com"},"urwebsitenaem.com")))),c.a.createElement("div",{className:"single-contact-info"},c.a.createElement("div",{className:"contact-icon"},c.a.createElement("i",{className:"fa fa-map-marker"})),c.a.createElement("div",{className:"contact-info-dec"},c.a.createElement("p",null,"Address goes here, "),c.a.createElement("p",null,"street, Crossroad 123."))),c.a.createElement("div",{className:"contact-social text-center"},c.a.createElement("h3",null,"Follow Us"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"//facebook.com"},c.a.createElement("i",{className:"fa fa-facebook"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"//pinterest.com"},c.a.createElement("i",{className:"fa fa-pinterest-p"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"//thumblr.com"},c.a.createElement("i",{className:"fa fa-tumblr"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"//vimeo.com"},c.a.createElement("i",{className:"fa fa-vimeo"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"//twitter.com"},c.a.createElement("i",{className:"fa fa-twitter"}))))))),c.a.createElement("div",{className:"col-lg-8 col-md-7"},c.a.createElement("div",{className:"contact-form"},c.a.createElement("div",{className:"contact-title mb-30"},c.a.createElement("h2",null,"Get In Touch")),c.a.createElement("form",{className:"contact-form-style"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("input",{name:"name",placeholder:"Name*",type:"text"})),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("input",{name:"email",placeholder:"Email*",type:"email"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("input",{name:"subject",placeholder:"Subject*",type:"text"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("textarea",{name:"message",placeholder:"Your Massege*",defaultValue:""}),c.a.createElement("button",{className:"submit",type:"submit"},"SEND")))),c.a.createElement("p",{className:"form-messege"}))))))))}}}]);
//# sourceMappingURL=63.abface5c.chunk.js.map