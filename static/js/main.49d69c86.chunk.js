(this["webpackJsonpvivo-blog"]=this["webpackJsonpvivo-blog"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(15),s=c.n(i),r=(c(22),c(23),c(24),c(8)),a=c(2),o=c(7),l=(c(25),c(26),c(0));var j=function(){var e=Object(n.useState)("hamburgerInactive"),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)("display-none"),a=Object(o.a)(s,2),j=a[0],d=a[1];function b(){d("display-none"),i("hamburgerInactive"),document.body.style.overflow="visible"}return Object(l.jsxs)("header",{className:"padding",children:[Object(l.jsxs)("div",{className:"header-content max-width ",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)(r.b,{to:"/",onClick:b,children:"VIVO"})}),Object(l.jsxs)("button",{onClick:function(){"hamburgerInactive"===c?(i("hamburgerActive"),d("menu-center"),document.body.style.overflow="hidden"):(i("hamburgerInactive"),document.body.style.overflow="visible",d("display-none"))},className:[c,"hide-for-desktop hamburger-icon"].join(" "),children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]}),Object(l.jsxs)("ul",{className:"hide-for-mobile header-links",children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/",children:"News"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/liked",children:"Liked"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/add-blog",children:"Add Blog"})})]})]}),Object(l.jsx)("div",{className:[j,"padding hamburger-menu hide-for-desktop"].join(" "),children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/",onClick:b,children:"News"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/liked",onClick:b,children:"Liked"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/add-blog",onClick:b,children:"Add Blog"})})]})})]})};c(36);var d=function(e){return Object(l.jsxs)("div",{className:"title-div padding",children:[Object(l.jsx)("h1",{children:e.title}),Object(l.jsx)("h3",{children:e.subTitle})]})},b=c(17),h=(c(37),c(38),c.p+"static/media/trash-can.91403f73.svg"),u=c.p+"static/media/heart-outline.61038e18.svg",O=c.p+"static/media/heart-fill.4d981fbb.svg";var x=function(e){return Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsx)("h1",{class:"mdl-p",children:"Are you sure?"}),Object(l.jsx)("button",{className:"btn btn--alt",onClick:function(){e.onCancel()},children:"Cancel"}),Object(l.jsx)("button",{className:"btn",onClick:function(){e.onConfirm()},children:"Confirm"})]})};var f=function(e){return Object(l.jsx)("div",{className:"backdrop",onClick:e.onCancel})};var m=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),i=c[0],s=c[1];function r(){s(!1)}var a=Object(n.useState)(u),j=Object(o.a)(a,2),d=j[0],b=j[1],m=Object(n.useState)(0),p=Object(o.a)(m,2),v=p[0],g=p[1];return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image card-padding",children:Object(l.jsx)("img",{src:e.info.image,alt:"Test"})}),Object(l.jsx)("h1",{className:"card-title card-padding",children:e.info.shortTitle}),Object(l.jsx)("p",{className:"card-description card-padding",children:e.info.shortDescription}),Object(l.jsxs)("div",{className:"card-buttons",children:[Object(l.jsx)("button",{className:"card-button-trash",onClick:function(){s(!0)},children:Object(l.jsx)("img",{src:h,alt:"trash can"})}),Object(l.jsx)("button",{className:"card-button",children:"Read More"}),Object(l.jsx)("button",{className:"card-button-heart",onClick:function(){0===v?(b(O),g(1)):(b(u),g(0))},children:Object(l.jsx)("img",{src:d,alt:"heart"})})]}),i&&Object(l.jsx)(x,{onCancel:r,onConfirm:function(){var t;t=e.info.id,fetch("https://vivo-blog-bd6d8-default-rtdb.europe-west1.firebasedatabase.app/blogs/"+t+".json",{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e)})).then((function(t){console.log(t),e.load()}))}}),i&&Object(l.jsx)(f,{onCancel:r})]})};var p=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)([]),r=Object(o.a)(s,2),a=r[0],j=r[1];Object(n.useEffect)((function(){d()}),[]);var d=function(){i(!0),fetch("https://vivo-blog-bd6d8-default-rtdb.europe-west1.firebasedatabase.app/blogs.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var n=Object(b.a)({id:c},e[c]);t.push(n)}j(t),i(!1)}))};return c?Object(l.jsx)("section",{children:Object(l.jsx)("p",{children:"Loading..."})}):Object(l.jsx)("div",{className:"all-cards max-width padding",children:a.map((function(e){return Object(l.jsx)(m,{info:e,load:d},e.id)}))})};c(39);var v=function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("div",{className:"footer-content max-width padding",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.facebook.com",children:"Facebook"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.github.com",children:"Github"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.twitter.com",children:"Twitter"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.instagram.com",children:"Instagram"})})]})})})};var g=function(){return Object(l.jsxs)("div",{className:"news-page",children:[Object(l.jsx)(j,{}),Object(l.jsx)(d,{title:"Vivo Blogs",subTitle:"Get all the news in technology"}),Object(l.jsx)(p,{}),Object(l.jsx)(v,{})]})};var w=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsx)(d,{title:"Liked Blogs",subTitle:"Here are your Liked Blogs"}),Object(l.jsx)(v,{})]})};c(40);var N=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),i=Object(n.useRef)(),s=Object(n.useRef)(),r=Object(n.useRef)(),o=Object(a.f)();return Object(l.jsx)("div",{className:"form-container",children:Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=e.current.value,l={title:a,shortTitle:t.current.value,image:c.current.value,author:i.current.value,shortDescription:s.current.value,description:r.current.value};fetch("https://vivo-blog-bd6d8-default-rtdb.europe-west1.firebasedatabase.app/blogs.json",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}}).then((function(){o.replace("/")})),console.log(a)},className:"form-widths",children:[Object(l.jsx)("label",{htmlFor:"title",children:"Title"}),Object(l.jsx)("input",{ref:e,className:"form-input",required:!0,type:"text",id:"title"}),Object(l.jsx)("label",{htmlFor:"shortTitle",children:"Short Title"}),Object(l.jsx)("input",{ref:t,className:"form-input",required:!0,type:"text",id:"shortTitle"}),Object(l.jsx)("label",{htmlFor:"image",children:"Image"}),Object(l.jsx)("input",{ref:c,className:"form-input",required:!0,type:"text",id:"image"}),Object(l.jsx)("label",{htmlFor:"author",children:"Author"}),Object(l.jsx)("input",{ref:i,className:"form-input",required:!0,type:"text",id:"author"}),Object(l.jsx)("label",{htmlFor:"shortDescription",children:"Short Description"}),Object(l.jsx)("input",{ref:s,className:"form-input",required:!0,type:"text",id:"shortDescription"}),Object(l.jsx)("label",{htmlFor:"description",children:"Description"}),Object(l.jsx)("textarea",{ref:r,rows:"5",required:!0,id:"description"}),Object(l.jsx)("button",{className:"form-button",type:"submit",children:"Submit"})]})})};var k=function(){return console.log(window.location.pathname),Object(l.jsx)("div",{children:Object(l.jsx)(r.a,{basename:window.location.pathname||"",children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"/",exact:!0,children:Object(l.jsx)(g,{})}),Object(l.jsx)(a.a,{path:"/liked",children:Object(l.jsx)(w,{})}),Object(l.jsxs)(a.a,{path:"/add-blog",children:[Object(l.jsx)(j,{}),Object(l.jsx)(d,{title:"Add Blog",subTitle:"Create a new blog"}),Object(l.jsx)(N,{}),Object(l.jsx)(v,{})]})]})})})};s.a.render(Object(l.jsx)(k,{}),document.getElementById("App"))}},[[41,1,2]]]);
//# sourceMappingURL=main.49d69c86.chunk.js.map