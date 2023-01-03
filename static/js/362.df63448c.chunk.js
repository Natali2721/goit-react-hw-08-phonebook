"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[362],{7362:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(6711),a=t(9434),i=t(1634),s=t(184),o=function(){var e=(0,a.v9)(i.zK),n=(0,a.I0)();return(0,s.jsxs)("div",{children:[(0,s.jsx)(r.P,{children:"Find contacts by name"}),(0,s.jsx)(r.II,{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(e){n((0,i.Tv)(e.currentTarget.value))},value:e,placeholder:"Enter name"})]})},c=function(e){var n=e.title;return(0,s.jsx)(r.Dx,{children:n})},d=function(e){var n=e.title;return(0,s.jsx)(r.Mo,{children:n})},l=t(2791),u=t(1771),h=t(3634),m=t(9135),x=function(){var e=(0,a.I0)(),n=(0,a.v9)(u.K),t=n.items,o=n.isLoading,c=n.error,d=(0,a.v9)(i.zK);(0,l.useEffect)((function(){e((0,h.yF)())}),[e]);var x=function(n){var t=n.currentTarget.id;e((0,h.GK)(t))},p=function(){var e=d.toLocaleLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(e)}))}();return(0,s.jsxs)(r.zB,{children:[o&&(0,s.jsx)(r.P,{children:"Loading contacts..."}),c&&(0,s.jsx)(r.P,{children:c}),p.map((function(e){return(0,s.jsxs)(r.lh,{children:[(0,s.jsx)(m.q1E,{}),(0,s.jsxs)(r.nu,{children:[e.name," : ",e.number]}),(0,s.jsx)(r.zx,{id:e.id,type:"button",onClick:x,children:"Delete"})]},e.id)}))]})},p=t(9439),f=function(){var e=(0,l.useState)(""),n=(0,p.Z)(e,2),t=n[0],i=n[1],o=(0,l.useState)(""),c=(0,p.Z)(o,2),d=c[0],m=c[1],x=(0,a.I0)(),f=(0,a.v9)(u.K).items,v=function(e){var n=e.target;"text"===n.type&&i(n.value),"tel"===n.type&&m(n.value)};return(0,s.jsxs)(r.l0,{onSubmit:function(e){e.preventDefault();var n=f.find((function(e){return e.name===t})),r=f.find((function(e){return e.number===d}));return n?(x((0,h.Tk)({id:n.id,name:t,number:d})),m(""),void i("")):r?(x((0,h.Tk)({id:r.id,name:t,number:d})),m(""),void i("")):(x((0,h.uK)({name:t,number:d})),m(""),void i(""))},children:[(0,s.jsxs)("label",{children:[(0,s.jsx)(r.P,{children:"Name"}),(0,s.jsx)(r.II,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",onChange:v,value:t})]}),(0,s.jsxs)("label",{children:[(0,s.jsx)(r.P,{children:"Number"}),(0,s.jsx)(r.II,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"123-45-67",onChange:v,value:d})]}),(0,s.jsx)(r.zx,{type:"submit",children:"Add contact"})]})},v=function(){return(0,s.jsxs)(r.lM,{children:[(0,s.jsx)(c,{title:"Phonebook"}),(0,s.jsx)(f,{}),(0,s.jsx)(d,{title:"Contacts"}),(0,s.jsx)(o,{title:"Find contact by name"}),(0,s.jsx)(x,{})]})}}}]);
//# sourceMappingURL=362.df63448c.chunk.js.map