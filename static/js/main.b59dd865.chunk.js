(this.webpackJsonpmonx=this.webpackJsonpmonx||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},107:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),i=c(18),r=c.n(i),l=(c(58),c(59),c(60),c(61),c(62),c(36)),o=c.n(l),j=c(5),d={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM:"CLEAR_ITEM"},b=function(e){return{type:d.ADD_ITEM,payload:e}},u=function(e){return{type:d.CLEAR_ITEM,payload:e}},h=c(17),O=(c(38),Object(j.b)(null,(function(e){return{clearItem:function(t){return e(u(t))}}}))((function(e){var t=e.item,c=e.clearItem,a=t.name,s=t.price,i=t.imageUrl,r=t.quantity;return Object(n.jsxs)("div",{className:"cart-item",children:[Object(n.jsx)("div",{className:"cart-image",style:{backgroundImage:"url(".concat("/monx-e-commerce").concat(i,")")}}),Object(n.jsx)("div",{className:"delete-icon",children:Object(n.jsx)(o.a,{onClick:function(){c(t),h.b.dark("Usuni\u0119to z koszyka!")}})}),Object(n.jsxs)("div",{className:"item-details",children:[Object(n.jsx)("span",{children:a}),Object(n.jsxs)("span",{children:[r,"szt. * ",s,"PLN"]})]}),Object(n.jsx)(h.a,{position:"bottom-right",autoClose:2e3})]})}))),m=c(4),p=c(23),x=(c(68),function(e){var t=e.children,c=e.isGoogleSignIn,a=e.goToCheckout,s=e.isMenu,i=e.isFooter,r=e.isCateg,l=Object(p.a)(e,["children","isGoogleSignIn","goToCheckout","isMenu","isFooter","isCateg"]);return Object(n.jsx)("button",Object(m.a)(Object(m.a)({className:"".concat(c?"google-sign-in":""," ").concat(a?"go-to-checkout":""," ").concat(s?"menu-button":""," ").concat(i?"footer-btn":""," ").concat(r?"category-btn":""," custom-button")},l),{},{children:t}))}),g=c(6),f=c(8),N=Object(f.a)([function(e){return e.cart}],(function(e){return e.cartItems})),v=Object(f.a)([N],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),y=Object(f.a)([N],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),k=Object(f.b)({cartItems:N,total:y}),A=Object(g.f)(Object(j.b)(k)((function(e){var t=e.cartItems,c=e.history,a=e.total;return Object(n.jsxs)("div",{className:"cart-dropdown",children:[Object(n.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(n.jsx)(O,{item:e},e.id)})):Object(n.jsx)("span",{className:"empty-message",children:"Tw\xf3j koszyk jest pusty"})}),Object(n.jsxs)("div",{className:"summarize",children:[Object(n.jsx)("p",{className:"total-price",children:"DO ZAP\u0141ATY:"}),Object(n.jsxs)("h4",{children:[a," PLN "]}),Object(n.jsx)(x,{isMenu:!0,onClick:function(){return c.push("/checkout")},children:"ID\u0179 DO KOSZYKA"})]})]})}))),z=(c(70),c(71),c(3)),w=function(){return Object(n.jsx)("div",{className:"navbar",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)(z.b,{to:"/shop/candles",children:Object(n.jsx)("li",{children:Object(n.jsx)("span",{children:"\u015aWIECE SOJOWE"})})}),Object(n.jsx)(z.b,{to:"/shop/bathbombs",children:Object(n.jsx)("li",{children:Object(n.jsx)("span",{children:"KULE DO K\u0104PIELI"})})}),Object(n.jsx)(z.b,{to:"/shop/salts",children:Object(n.jsx)("li",{children:Object(n.jsx)("span",{children:"S\xd3L DO K\u0104PIELI"})})}),Object(n.jsx)(z.b,{to:"/shop/zapachy",children:Object(n.jsx)("li",{children:Object(n.jsx)("span",{children:"TABLICZKI ZAPACHOWE"})})}),Object(n.jsx)("hr",{className:"hor-line"}),Object(n.jsx)(z.b,{to:"/signin",children:Object(n.jsx)("li",{children:Object(n.jsx)("span",{children:"ZALOGUJ"})})}),Object(n.jsx)(z.b,{to:"/checkout",children:Object(n.jsx)("li",{children:Object(n.jsx)("span",{children:"KOSZYK"})})})]})})},I=(c(72),{TOGGLE_NAVBAR_HIDDEN:"TOGGLE_NAVBAR_HIDDEN"}),E=Object(j.b)(null,(function(e){return{toggleNavBarHidden:function(){return e({type:I.TOGGLE_NAVBAR_HIDDEN})}}}))((function(e){var t=e.toggleNavBarHidden,c=e.hiddenMenu;return Object(n.jsxs)("div",{className:c?"hamburger":"hamburger open",onClick:t,children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]})})),U=Object(j.b)((function(e){return{hiddenMenu:e.navbar.hiddenMenu}}))((function(e){var t=e.hiddenMenu;return Object(n.jsxs)("div",{className:"hamburger-menu",children:[Object(n.jsx)(E,{hiddenMenu:t}),t?null:Object(n.jsx)(w,{})]})})),C=Object(j.b)((function(e){return{hidden:e.cart.hidden,itemCount:v(e)}}),(function(e){return{toggleCartHidden:function(){return e({type:d.TOGGLE_CART_HIDDEN})}}}))((function(e){var t=e.hidden,c=e.toggleCartHidden,a=e.itemCount;return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(z.b,{to:"/",children:Object(n.jsx)("h2",{children:"Monx"})}),Object(n.jsx)(U,{}),Object(n.jsxs)("div",{className:"icons",children:[Object(n.jsx)(z.b,{to:"/shop",children:Object(n.jsx)(x,{isMenu:!0,children:"Sklep"})}),Object(n.jsx)(z.b,{to:"/signin",children:Object(n.jsx)(x,{isMenu:!0,children:"Zaloguj"})}),Object(n.jsxs)(x,{isMenu:!0,onClick:c,children:["Koszyk (",a,")"]})]}),t?null:Object(n.jsx)(A,{})]})})),M=(c(73),Object(f.a)([function(e){return e.shop}],(function(e){return e.collections}))),T=Object(f.a)([M],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),L=function(e){return Object(f.a)([M],(function(t){return t[e]}))},D=(c(74),c(75),Object(g.f)((function(e){var t=e.id,c=e.title,a=e.imageUrl,s=e.linkUrl,i=e.description,r=e.history,l=e.match,o=t%2===0;return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"".concat(o?"even":""," category-prev"),children:[Object(n.jsx)("div",{className:"category-image",children:Object(n.jsx)("img",{src:a,alt:"candles"})}),Object(n.jsxs)("div",{className:"category-descr",style:{alignItems:"".concat(o?"flex-end":"flex-start")},children:[Object(n.jsx)("h4",{style:{color:"".concat(o?"#f2f2f2":"#302d2a")},children:c}),Object(n.jsx)("p",{style:{color:"".concat(o?"#f2f2f2":"#302d2a")},children:i}),Object(n.jsx)(x,{isCateg:!0,onClick:function(){return r.push("".concat(l.url).concat(s))},children:"Zobacz produkty"})]})]})})}))),S=Object(j.b)((function(e){return{sections:e.directory.sections}}))((function(e){var t=e.sections;return Object(n.jsx)("div",{className:"category-container",children:t.map((function(e){var t=e.id,c=Object(p.a)(e,["id"]);return Object(n.jsx)(D,Object(m.a)({id:t},c),t)}))})})),R=c(19),P=c(20),K=c(22),Z=c(21),G=(c(76),c(44)),_=c.n(G),Y=function(e){Object(K.a)(c,e);var t=Object(Z.a)(c);function c(){var e;return Object(R.a)(this,c),(e=t.call(this)).state={intervalId:0},e}return Object(P.a)(c,[{key:"scrollStep",value:function(){0===window.pageYOffset&&clearInterval(this.state.intervalId),window.scroll(0,window.pageYOffset-this.props.scrollStepInPx)}},{key:"scrollToTop",value:function(){var e=setInterval(this.scrollStep.bind(this),this.props.delayInMs);this.setState({intervalId:e})}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"btn-up",onClick:function(){e.scrollToTop()},children:Object(n.jsx)(_.a,{style:{fontSize:30},className:"icon-up"})})}}]),c}(a.Component),W=(c(77),c(46)),J=c.n(W),H=c(45),B=c.n(H),q=c(47),F=c.n(q),V=function(){return Object(n.jsxs)("div",{className:"banner",children:[Object(n.jsxs)("div",{className:"extras",children:[Object(n.jsx)("div",{children:Object(n.jsx)(B.a,{style:{fontSize:50}})}),Object(n.jsx)("h4",{children:"szybka dostawa"})]}),Object(n.jsx)("div",{className:"vertical-line"}),Object(n.jsxs)("div",{className:"extras",children:[Object(n.jsx)("div",{children:Object(n.jsx)(J.a,{style:{fontSize:50}})}),Object(n.jsx)("h4",{children:"ekologiczne sk\u0142adniki"})]}),Object(n.jsx)("div",{className:"vertical-line"}),Object(n.jsxs)("div",{className:"extras",children:[Object(n.jsx)("div",{children:Object(n.jsx)(F.a,{style:{fontSize:50}})}),Object(n.jsx)("h4",{children:"produkowane z sercem"})]})]})},Q=(c(78),c(79),c(48)),X=c.n(Q),$=function(e){Object(K.a)(c,e);var t=Object(Z.a)(c);function c(){return Object(R.a)(this,c),t.apply(this,arguments)}return Object(P.a)(c,[{key:"render",value:function(){return Object(n.jsxs)(X.a,Object(m.a)(Object(m.a)({},{dots:!0,infinite:!0,speed:700,slidesToShow:1,slidesToScroll:1,autoplay:!1,arrows:!1}),{},{children:[Object(n.jsx)("div",{className:"main-banner first",children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("p",{className:"text",children:"naturalne \u015bwiece sojowe"}),Object(n.jsx)(z.b,{to:"/shop/candles",children:Object(n.jsx)(x,{isCateg:!0,children:"Zobacz"})})]})}),Object(n.jsx)("div",{className:"main-banner second",children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("p",{className:"text",children:"Nawil\u017caj\u0105ca s\xf3l do k\u0105pieli"}),Object(n.jsx)(z.b,{to:"/shop/salts",children:Object(n.jsx)(x,{isCateg:!0,children:"Zobacz"})})]})}),Object(n.jsx)("div",{className:"main-banner third",children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("p",{className:"text",children:"musuj\u0105ce kule do k\u0105pieli"}),Object(n.jsx)(z.b,{to:"/shop/bathbombs",children:Object(n.jsx)(x,{isCateg:!0,children:"Zobacz"})})]})})]}))}}]),c}(a.Component),ee=Object(f.b)({collection:L}),te=Object(j.b)(ee)((function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)($,{className:"slider"}),Object(n.jsx)(S,{}),Object(n.jsx)(V,{}),Object(n.jsx)(Y,{scrollStepInPx:"20",delayInMs:"16.66"})]})})),ce=(c(95),c(96),function(e){var t=e.handleChange,c=e.label,a=Object(p.a)(e,["handleChange","label"]);return Object(n.jsxs)("div",{className:"group",children:[Object(n.jsx)("input",Object(m.a)({className:"form-input",onChange:t},a)),c?Object(n.jsx)("label",{className:"".concat(a.value.length?"shrink":""," form-input-label"),children:c}):null]})}),ne=function(e){Object(K.a)(c,e);var t=Object(Z.a)(c);function c(e){var n;return Object(R.a)(this,c),(n=t.call(this,e)).state={email:"",password:""},n}return Object(P.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"sign-in-out",children:Object(n.jsxs)("div",{className:"sign-in",children:[Object(n.jsx)("h2",{children:"Mam ju\u017c konto"}),Object(n.jsx)("span",{children:"ZALOGUJ SI\u0118 PODAJ\u0104C NAZW\u0118 U\u017bYTKOWNIKA I HAS\u0141O"}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsx)(ce,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"nazwa u\u017cytkownika",required:!0}),Object(n.jsx)(ce,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"has\u0142o",required:!0}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsxs)(x,{type:"submit",isCateg:!0,children:[" ","ZALOGUJ"," "]}),Object(n.jsx)(x,{isGoogleSignIn:!0,children:"zaloguj z kontem Goggle"})]})]})]})})}}]),c}(a.Component),ae=(c(97),c(122)),se=c(123),ie=c(124),re=c(125),le=c(126),oe=c(127),je=function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsxs)("div",{className:"footer-center",children:[Object(n.jsx)("div",{className:"logo-text",children:Object(n.jsx)(z.b,{to:"/",children:Object(n.jsx)("h2",{children:"Monx"})})}),Object(n.jsxs)("div",{className:"address-container",children:[Object(n.jsxs)("div",{className:"address",children:[Object(n.jsx)(ae.a,{className:"social-icon"}),Object(n.jsx)("span",{children:"ul. Pana Liko 7 , 30-022 Lisiec "})]}),Object(n.jsxs)("div",{className:"address",children:[Object(n.jsx)(se.a,{className:"social-icon"}),Object(n.jsx)("span",{children:"mailkontaktowy@gmail.com"})]}),Object(n.jsxs)("div",{className:"address",children:[Object(n.jsx)(ie.a,{className:"social-icon",style:{fontSize:24}}),Object(n.jsx)("span",{children:"+48 888 888 888"})]})]}),Object(n.jsx)("div",{className:"footer-map-container",children:Object(n.jsxs)("div",{className:"footer-map",children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)(z.b,{to:"/shop/candles",children:Object(n.jsx)("li",{children:"\u015aWIECE SOJOWE"})}),Object(n.jsx)(z.b,{to:"/shop/bathbombs",children:Object(n.jsx)("li",{children:"KULE DO K\u0104PIELI"})}),Object(n.jsx)(z.b,{to:"/shop/salts",children:Object(n.jsx)("li",{children:"S\xd3L DO K\u0104PIELI"})}),Object(n.jsx)(z.b,{to:"/shop/zapachy",children:Object(n.jsx)("li",{children:"TABLICZKI ZAPACHOWE"})})]}),Object(n.jsxs)("ul",{children:[Object(n.jsx)(z.b,{to:"/signin",children:Object(n.jsx)("li",{children:"LOGOWANIE"})}),Object(n.jsx)(z.b,{to:"/checkout",children:Object(n.jsx)("li",{children:"KOSZYK"})})]})]})}),Object(n.jsxs)("div",{className:"social-icons",children:[Object(n.jsx)("a",{href:"#facebook",children:Object(n.jsx)(re.a,{className:"social-icon"})}),Object(n.jsx)("a",{href:"#instagram",children:Object(n.jsx)(le.a,{className:"social-icon"})}),Object(n.jsx)("a",{href:"#pinterest",children:Object(n.jsx)(oe.a,{className:"social-icon"})})]})]}),Object(n.jsx)("div",{className:"copyright",children:Object(n.jsxs)("span",{children:["\xa92021. monx. Wszystkie prawa zastrze\u017cone \u2022 Polityka prywatno\u015bci"," "]})})]})},de=(c(98),c(99),c(100),c(101),Object(g.f)(Object(j.b)(null,(function(e){return{addItem:function(t){return e(b(t))}}}))((function(e){var t=e.item,c=e.addItem,a=t.name,s=t.price,i=t.imageUrl;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-image",style:{backgroundImage:"url(".concat("/monx-e-commerce").concat(i,")")},children:Object(n.jsx)("div",{className:"card-icons",onClick:function(){c(t),h.b.dark("Dodano do koszyka!")},children:Object(n.jsx)(x,{isCateg:!0,children:"DODAJ DO KOSZYKA"})})}),Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("span",{children:a}),Object(n.jsxs)("span",{className:"price",children:[s,"PLN"]})]}),Object(n.jsx)(h.a,{position:"bottom-right",autoClose:2e3})]})})))),be=Object(g.f)((function(e){var t=e.title,c=e.routeName,a=e.items,s=e.history,i=e.match;return Object(n.jsxs)("div",{className:"collection-preview",children:[Object(n.jsx)("div",{className:"collection-title",onClick:function(){return s.push("".concat(i.url,"/").concat(c))},children:t.toUpperCase()}),Object(n.jsx)("div",{className:"preview",children:a.filter((function(e,t){return t<4})).map((function(e){return Object(n.jsx)(de,{item:e},e.id)}))})]})})),ue=Object(f.b)({collections:T}),he=Object(j.b)(ue)((function(e){var t=e.collections;return Object(n.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,c=Object(p.a)(e,["id"]);return Object(n.jsx)(be,Object(m.a)({},c),t)}))})})),Oe=(c(102),Object(j.b)((function(e,t){return{collection:L(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection.items;return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"products-preview",children:t.map((function(e){return Object(n.jsx)(de,{item:e},e.id)}))})})}))),me=function(e){var t=e.match;return Object(n.jsxs)("div",{className:"shop-page",children:[Object(n.jsx)(g.a,{exact:!0,path:"".concat(t.path),component:he}),Object(n.jsx)(g.a,{path:"".concat(t.path,"/:collectionId"),component:Oe})]})},pe=function(e){Object(K.a)(c,e);var t=Object(Z.a)(c);function c(){return Object(R.a)(this,c),t.apply(this,arguments)}return Object(P.a)(c,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),c}(s.a.Component),xe=Object(g.f)(pe),ge=(c(103),c(104),Object(j.b)(null,(function(e){return{addItem:function(t){return e(b(t))},removeItem:function(t){return e(function(e){return{type:d.REMOVE_ITEM,payload:e}}(t))},clearItem:function(t){return e(u(t))}}}))((function(e){var t=e.cartItem,c=e.addItem,a=e.removeItem,s=e.clearItem,i=t.name,r=t.imageUrl,l=t.price,j=t.quantity;return Object(n.jsxs)("div",{className:"checkout-item",children:[Object(n.jsx)("div",{className:"image-container",children:Object(n.jsx)("img",{src:r,alt:"item"})}),Object(n.jsx)("span",{className:"name",children:i}),Object(n.jsx)("div",{className:"quantity",children:Object(n.jsxs)("div",{className:"qty-button",children:[Object(n.jsx)("div",{className:"minus-plus-btn",onClick:function(){return a(t)},children:Object(n.jsx)("span",{children:"-"})}),Object(n.jsx)("span",{className:"value",children:j}),Object(n.jsx)("div",{className:"minus-plus-btn",onClick:function(){return c(t)},children:Object(n.jsx)("span",{children:"+"})})]})}),Object(n.jsxs)("span",{className:"price",children:[l,"PLN"]}),Object(n.jsx)("div",{className:"delete-icon",children:Object(n.jsx)(o.a,{onClick:function(){s(t),h.b.dark("Usuni\u0119to z koszyka!")}})}),Object(n.jsx)(h.a,{position:"bottom-right",autoClose:2e3})]})}))),fe=Object(f.b)({cartItems:N,total:y}),Ne=Object(j.b)(fe)((function(e){var t=e.cartItems,c=e.total;return Object(n.jsx)("div",{className:"checkout-page",children:Object(n.jsxs)("div",{className:"cart-container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"header-row",children:Object(n.jsx)("span",{children:"ZDJ\u0118CIE"})}),Object(n.jsx)("div",{className:"header-row",children:Object(n.jsx)("span",{children:"NAZWA"})}),Object(n.jsx)("div",{className:"header-row",children:Object(n.jsx)("span",{children:"ILO\u015a\u0106"})}),Object(n.jsx)("div",{className:"header-row",children:Object(n.jsx)("span",{children:"CENA"})}),Object(n.jsx)("div",{className:"header-row",children:Object(n.jsx)("span",{children:"USU\u0143"})})]}),t.length?t.map((function(e){return Object(n.jsx)(ge,{cartItem:e},e.id)})):Object(n.jsx)("div",{className:"empty",children:Object(n.jsx)("span",{children:"Tw\xf3j koszyk jest pusty"})}),Object(n.jsx)("div",{className:"total",children:Object(n.jsxs)("span",{children:["SUMA: ",c,"PLN "]})}),Object(n.jsx)(x,{isCateg:!0,children:"ZAP\u0141A\u0106"})]})})})),ve=function(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(z.a,{basename:"/monx-e-commerce",children:[Object(n.jsx)(xe,{}),Object(n.jsx)(C,{}),Object(n.jsxs)(g.c,{children:[Object(n.jsx)(g.a,{exact:!0,path:"/",component:te}),Object(n.jsx)(g.a,{path:"/shop",component:me}),Object(n.jsx)(g.a,{exact:!0,path:"/checkout",component:Ne}),Object(n.jsx)(g.a,{exact:!0,path:"/signin",component:ne})]}),Object(n.jsx)(je,{})]})})},ye=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,128)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))},ke=c(12),Ae=c(33),ze=c(49),we=c.n(ze),Ie=c(50),Ee=c.n(Ie),Ue=c(51),Ce=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Ue.a)(e),[Object(m.a)(Object(m.a)({},t),{},{quantity:1})])},Me=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{quantity:e.quantity-1}):e}))},Te={hidden:!0,cartItems:[]},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.TOGGLE_CART_HIDDEN:return Object(m.a)(Object(m.a)({},e),{},{hidden:!e.hidden});case d.ADD_ITEM:return Object(m.a)(Object(m.a)({},e),{},{cartItems:Ce(e.cartItems,t.payload)});case d.REMOVE_ITEM:return Object(m.a)(Object(m.a)({},e),{},{cartItems:Me(e.cartItems,t.payload)});case d.CLEAR_ITEM:return Object(m.a)(Object(m.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},De=c.p+"static/media/can6.15fd202e.jpg",Se=c.p+"static/media/bomba.f1258a6f.jpg",Re=c.p+"static/media/tab2.c74ffc30.jpg",Pe=c.p+"static/media/salt-sloik.d44f36b7.jpg",Ke={sections:[{id:1,title:"Naturalne \u015bwiece sojowe",imageUrl:"".concat(De),linkUrl:"shop/candles",description:"nasze \u015bwiece s\u0105 odlewane z naturalnego wosku sojowego w po\u0142\u0105czeniu z olejkami eterycznymi. \u015awiece sojowe sa znakomit\u0105 alternatyw\u0105 dla \u015bwiec parafinowych, kt\xf3re s\u0105 wytwarzane z ci\u0119\u017ckich frakcji ropy naftowej i przy spalaniu wydzielaj\u0105 szkodliwe dla zdrowia zwi\u0105zki chemiczne (m.in. benzen i toluen). \u015awiece sojowe nie zawieraj\u0105 tych zwi\u0105zk\xf3w. Poprzez ni\u017csz\u0105 temperatur\u0119 topnienia \u015bwiece sojowe pal\u0105  si\u0119 d\u0142u\u017cej, s\u0105 wydajniejsze, daj\u0105 delikatniejszy p\u0142omie\u0144 i wydzielaj\u0105 subtelny, niedra\u017cni\u0105cy zapach pochodz\u0105cy z naturalnych olejk\xf3w."},{id:2,title:"Musuj\u0105ce kule do k\u0105pieli",imageUrl:"".concat(Se),linkUrl:"shop/bathbombs",description:"nasze musuj\u0105ce kule do k\u0105pieli nie zawieraj\u0105 sztucznych barwnik\xf3w, barw\u0119 uzyskujemy poprzez dodanie naturalnych glinek kosmetycznych czy w\u0119gla akywnego, kt\xf3re maj\u0105 dobroczynne dzia\u0142anie na nasz\u0105 sk\xf3r\u0119.  Dodatek olej\xf3w kokosowego czy makadamia nawil\u017cy sk\xf3r\u0119, a olejki eteryczne zadzia\u0142aj\u0105 aromateraupetycznie."},{id:3,title:"Nawil\u017caj\u0105ca s\xf3l do kapieli",imageUrl:"".concat(Pe),linkUrl:"shop/salts",description:"nasze sole to po\u0142\u0105czenie r\xf3\u017cowej soli himalajskiej z sol\u0105 z Morza Martwego z dodatkami suszonych kwiatowych p\u0142atk\xf3w oraz naturalnych olejk\xf3w eterycznych. W sk\u0142ad soli wchodz\u0105 r\xf3wnie\u017c nawil\u017caj\u0105ce oleje."},{id:4,title:"Pachn\u0105ce tabliczki woskowe",imageUrl:"".concat(Re),linkUrl:"shop/zapachy",description:"tabliczki zapachowe zosta\u0142y stworzone po to, by cieszy\u0107 oko i zniewala\u0107 zapachem. Stworzone z naturalnego wosku sojowego w po\u0142\u0105czeniu z mas\u0142em shea oraz olejkami eterycznymi nadadz\u0105 twojej  szafie lub przestrzeni przyjemny \u015bwie\u017cy kwiatowy zapach a dekoracja  z suszu kwiatowego ozdobi wn\u0119trze."}]},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ge={collections:{candles:{id:1,title:"\u015bwiece sojowe",routeName:"candles",items:[{id:1,name:"POMARA\u0143CZA & GO\u0179DZIKI",imageUrl:"/assets2/swieca22.jpg",price:25},{id:2,name:"LAWENDA",imageUrl:"/assets2/swieca44.jpg",price:32},{id:3,name:"BEZ & PALMAROSA",imageUrl:"/assets2/swieca22.jpg",price:35},{id:4,name:"CYTRYNA & MI\u0118TA",imageUrl:"/assets2/swieca44.jpg",price:28},{id:5,name:"ZESTAW TRZECH \u015aWIECZEK",imageUrl:"/assets2/candle-zestaw.jpg",price:28},{id:6,name:"EUKALIPTUS & MANDARYNKA",imageUrl:"/assets2/swieca22.jpg",price:22},{id:7,name:"GREJPFRUT & ANY\u017b",imageUrl:"/assets2/swieca44.jpg",price:24},{id:8,name:"LAWENDA & NIAOULI",imageUrl:"/assets2/swieca22.jpg",price:23}]},salts:{id:2,title:"Sole do k\u0105pieli",routeName:"salts",items:[{id:9,name:"S\xd3L HIMALAJSKA",imageUrl:"/assets2/salt.jpg",price:25},{id:10,name:"LAWENDA",imageUrl:"/assets2/salt.jpg",price:32},{id:11,name:"BEZ & PALMAROSA",imageUrl:"/assets2/salt.jpg",price:35},{id:12,name:"CYTRYNA & MI\u0118TA",imageUrl:"/assets2/salt.jpg",price:28},{id:13,name:'CYNAMON & JAB\u0141KO"',imageUrl:"/assets2/salt.jpg",price:28},{id:14,name:"EUKALIPTUS & MANDARYNKA",imageUrl:"/assets2/salt.jpg",price:22},{id:15,name:"GREJPFRUT & ANY\u017b",imageUrl:"/assets2/salt.jpg",price:24},{id:16,name:"LAWENDA & NIAOULI",imageUrl:"/assets2/salt.jpg",price:23}]},bathbombs:{id:3,title:"Musuj\u0105ce kule",routeName:"bathbombs",items:[{id:17,name:"PIWONIA & MAGNOLIA",imageUrl:"/assets2/kula2.jpg",price:25},{id:18,name:"MANDARYNKA & GREJPFRUT",imageUrl:"/assets2/kula3.jpg",price:32},{id:19,name:"MANDARYNKA",imageUrl:"/assets2/kula4.jpg",price:35},{id:20,name:"ZESTAW TRZECH KUL",imageUrl:"/assets2/3kule.jpg",price:30},{id:21,name:"CYNAMON & JAB\u0141KO",imageUrl:"/assets2/kula2.jpg",price:28},{id:22,name:"EUKALIPTUS & MANDARYNKA",imageUrl:"/assets2/kula4.jpg",price:22},{id:23,name:"GREJPFRUT & ANY\u017b",imageUrl:"/assets2/kula2.jpg",price:24},{id:24,name:"LAWENDA & NIAOULI",imageUrl:"/assets2/kula3.jpg",price:23}]},zapachy:{id:4,title:"Pachn\u0105ce tabliczki",routeName:"zapachy",items:[{id:25,name:"POMARA\u0143CZA & GO\u0179DZIKI",imageUrl:"/assets2/zapach.jpg",price:25},{id:26,name:"LAWENDA",imageUrl:"/assets2/zapach2.jpg",price:32},{id:27,name:"BEZ & PALMAROSA",imageUrl:"/assets2/zapach3.jpg",price:35},{id:28,name:"CYTRYNA & MI\u0118TA",imageUrl:"/assets2/zapach.jpg",price:28},{id:29,name:"CYNAMON & JAB\u0141KO",imageUrl:"/assets2/zapach2.jpg",price:28},{id:30,name:"EUKALIPTUS & MANDARYNKA",imageUrl:"/assets2/zapach.jpg",price:22},{id:31,name:"GREJPFRUT & ANY\u017b",imageUrl:"/assets2/zapach3.jpg",price:24},{id:32,name:"LAWENDA & NIAOULI",imageUrl:"/assets2/zapach2.jpg",price:23}]}}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ye={hiddenMenu:!0,navbarItems:[]},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.TOGGLE_NAVBAR_HIDDEN:return Object(m.a)(Object(m.a)({},e),{},{hiddenMenu:!e.hiddenMenu});default:return e}},Je={key:"root",storage:Ee.a,whitelist:["cart"]},He=Object(ke.c)({directory:Ze,shop:_e,navbar:We,cart:Le}),Be=Object(Ae.a)(Je,He),qe=[we.a],Fe=Object(ke.d)(Be,ke.a.apply(void 0,qe));Object(Ae.b)(Fe),Ae.b;r.a.render(Object(n.jsx)(j.a,{store:Fe,children:Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(ve,{})})}),document.getElementById("root")),ye()},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.b59dd865.chunk.js.map