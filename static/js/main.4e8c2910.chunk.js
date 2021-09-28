(this["webpackJsonpexpense-manager"]=this["webpackJsonpexpense-manager"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(7),i=n.n(a),l=(n(12),n(6)),o=n(2),r=(n(13),n(14),n(0));var d=function(e){var t=Object(s.useState)(e.expense.title),n=Object(o.a)(t,2),c=n[0],a=n[1],i=new Date(e.expense.date),l=Object(s.useState)(e.expense.amount),d=Object(o.a)(l,2),u=d[0],j=d[1],x=i.getDate(),p=i.toLocaleString("default",{month:"long"}),m=i.getFullYear();return Object(s.useEffect)((function(){console.log("effect()")}),[]),Object(r.jsxs)("div",{className:"expenseitem__container",children:[Object(r.jsxs)("div",{className:"expenseitem__date",children:[Object(r.jsx)("div",{className:"expenseitem__date_month",children:p}),Object(r.jsx)("div",{className:"expenseitem__date_day",children:x}),Object(r.jsx)("div",{className:"expenseitem__date_year",children:m})]}),Object(r.jsx)("div",{className:"expenseitem__title",children:c}),Object(r.jsx)("div",{className:"expenseitem__amount",children:"\u20b9 "+u}),Object(r.jsxs)("div",{className:"expenseitem__modify",children:[Object(r.jsxs)("select",{id:"drop-down-edit",className:"expenseitem__edit",onChange:function(t){var n=t.target.value,s=prompt("Enter new "+n);s&&("title"===n?a(s):"amount"===n&&j(s),e.editFun(e.expense.expID,n,s)),document.getElementById("drop-down-edit").selectedIndex=0},children:[Object(r.jsx)("option",{id:"default-drop",value:"",selected:!0,disabled:!0,hidden:!0,children:"Edit"}),Object(r.jsx)("option",{value:"title",children:"Title"}),Object(r.jsx)("option",{value:"amount",children:"Amount"})]}),Object(r.jsx)("div",{className:"expenseitem__delete",onClick:function(t){window.confirm("Are you sure, you want to delete?")?e.deleteFun(e.expense):console.log("Not Deleted")},children:"Delete"})]})]})};n(16);var u=function(e){var t=e.expenses;return null==t?Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"No expense item to see!"})}):Object(r.jsx)("div",{children:t.map((function(t){return Object(r.jsx)(d,{expense:t,editFun:e.editFunc,deleteFun:e.deleteFun},t.expID)}))})};n(17);var j=function(e){var t=Object(s.useState)(""),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(""),l=Object(o.a)(i,2),d=l[0],u=l[1],j=Object(s.useState)(""),x=Object(o.a)(j,2),p=x[0],m=x[1],b=function(e){var t=JSON.parse(localStorage.getItem(e));return t?t.length:0}("000");return Object(r.jsxs)("div",{className:"new_expense__container",children:[Object(r.jsx)("h3",{className:"new_expense__heading",children:"Add Expense"}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log("Form Submitted");var n={expID:b++,title:c,date:new Date(p),amount:Number.isInteger(d)?parseInt(d):parseFloat(d)};e.onAddExpense(n),a(""),u(""),m("")},className:"new_expense__form",children:[Object(r.jsxs)("div",{className:"new_expense__title",children:[Object(r.jsx)("label",{htmlFor:"title",children:"Title : "}),Object(r.jsx)("input",{id:"title",type:"text",value:c,onChange:function(e){a(e.target.value)},placeholder:"Enter title here",required:!0})]}),Object(r.jsxs)("div",{className:"new_expense__amount",children:[Object(r.jsx)("label",{htmlFor:"amount",children:"Amount : "}),Object(r.jsx)("input",{id:"amount",type:"number",value:d,onChange:function(e){u(e.target.value)},min:"0.1",step:"0.001",placeholder:"Enter amount in Rupees ",required:!0})]}),Object(r.jsxs)("div",{className:"new_expense__date",children:[Object(r.jsx)("label",{htmlFor:"date",children:"Date : "}),Object(r.jsx)("input",{type:"date",value:p,onChange:function(e){m(e.target.value)}})]}),Object(r.jsx)("div",{className:"new_expense__submit",children:Object(r.jsx)("button",{id:"new_expense__btn_submit",type:"submit",children:"Add"})})]})]})};var x=function(){var e=function(e,t){localStorage.setItem(e,JSON.stringify(t)),console.log("Item Saved")},t=function(e){return JSON.parse(localStorage.getItem(e))},n=[];n=null==t("000")?[]:t("000");var c=Object(s.useState)(n),a=Object(o.a)(c,2),i=a[0],d=a[1];function x(e,t,n){for(var s=0;s<e.length;s+=1)if(e[s][t]===n)return s;return-1}return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{onAddExpense:function(t){var n=Object(l.a)(i);n.push(t),d(n),e("000",n)}}),Object(r.jsx)(u,{expenses:i,editFunc:function(t,n,s){var c=x(i,"expID",t);i[c][n]=s,d(i),console.log("index = ",c),e("000",i)},deleteFun:function(t){var n=x(i,"expID",t.expID);console.log("deleteExpenseHandler() runs"),console.log("Index to be deleted= ",n);var s=Object(l.a)(i);s.splice(n,1),d(s),e("000",s)}})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.4e8c2910.chunk.js.map