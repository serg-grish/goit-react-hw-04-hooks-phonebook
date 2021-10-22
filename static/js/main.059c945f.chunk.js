(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"FormContact_form__1jCo9",label:"FormContact_label__2G6P3",input:"FormContact_input__2P_BQ",button:"FormContact_button__2umha"}},,,function(t,e,n){t.exports={listItem:"ContactListItem_listItem__2_-VZ",listItemText:"ContactListItem_listItemText__2Kspw",button:"ContactListItem_button__3gFCo"}},,,function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__1TeQb",filterInput:"Filter_filterInput__u16Kg"}},,function(t,e,n){t.exports={list:"ContactsList_list__2RiYd"}},,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(9),s=n.n(o),r=(n(16),n(11)),i=n(3),l=n(21),u=n(2),b=n.n(u),m=n(0);function j(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],s=c[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),u=l[0],j=l[1],d=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":j(a);break;default:return}},f=function(){s(""),j("")};return Object(m.jsxs)("form",{className:b.a.form,onSubmit:function(t){t.preventDefault(),e(o,u),f()},children:[Object(m.jsxs)("label",{className:b.a.label,children:["Name",Object(m.jsx)("input",{className:b.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:o,onChange:d,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{className:b.a.label,children:["Number",Object(m.jsx)("input",{className:b.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:u,onChange:d,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{className:b.a.button,type:"submit",children:Object(m.jsx)("span",{className:b.a.btnText,children:"Add contact"})})]})}var d=n(8),f=n.n(d),h=function(t){var e=t.value,n=t.onChange;return Object(m.jsxs)("label",{className:f.a.filterLabel,children:[Object(m.jsx)("h3",{children:"Find contacts by name"}),Object(m.jsx)("input",{className:f.a.filterInput,type:"text",value:e,onChange:n})]})},O=n(10),p=n.n(O),x=n(5),_=n.n(x),C=function(t){var e=t.contactName,n=t.contactNumber,a=t.onClickDeleteContact;return Object(m.jsxs)("li",{className:_.a.listItem,children:[Object(m.jsxs)("span",{className:_.a.listItemText,children:[e,":"]}),Object(m.jsx)("span",{className:_.a.listItemText,children:n}),Object(m.jsx)("button",{className:_.a.button,type:"button",onClick:a,children:"Delete"})]})},N=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(m.jsx)("ul",{className:p.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(m.jsx)(C,{contactName:a,contactNumber:c,onClickDeleteContact:function(){return n(e)}},e)}))})};n(18);function v(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[]})),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),u=s[0],b=s[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(j,{onSubmit:function(t,e){if(n.find((function(e){return e.name===t})))alert("".concat(t," is already in contacts."));else{var a={id:Object(l.a)(),name:t,number:e};c((function(t){return[a].concat(Object(r.a)(t))}))}}}),Object(m.jsx)("h2",{children:"Contants"}),Object(m.jsx)(h,{value:u,onChange:function(t){var e=t.target;b(e.value)}}),Object(m.jsx)(N,{contacts:n.filter((function(t){return t.name.toLowerCase().includes(u.toLowerCase())})),onDeleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})}s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.059c945f.chunk.js.map