(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),l=s(7),c=s.n(l),n=(s(13),s(14),s(2)),r=s(3),o=s(5),h=s(4),b=s(8),j=s.n(b),d=s(0),p=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(n.a)(this,s),(e=t.call(this)).state={title:"",year:"",movielist:{},totalpages:1,currentpage:1,moviedetails:{},visible:!1,currenttab:"grid"},e}return Object(r.a)(s,[{key:"handleClick",value:function(e,t){var s=this,i="https://www.omdbapi.com/?s=".concat(this.state.title,"&y=").concat(this.state.year,"&apikey=e67f56be&page=").concat(e);fetch(i).then((function(e){return e.json()})).then((function(t){if(console.log(t),s.setState({movielist:t,currentpage:e}),t.totalResults){var i=Math.ceil(t.totalResults/10);s.setState({totalpages:i})}}))}},{key:"handleChange",value:function(e,t){"title"==e?this.setState({title:t.target.value}):"year"==e&&this.setState({year:t.target.value})}},{key:"clickPage",value:function(e,t){this.handleClick(e),t.preventDefault()}},{key:"viewDetails",value:function(e,t){this.setState({moviedetails:this.state.movielist.Search[e]}),this.setState({visible:!0})}},{key:"openModal",value:function(){this.setState({visible:!0})}},{key:"closeModal",value:function(){this.setState({visible:!1})}},{key:"tabChange",value:function(e,t){this.setState({currenttab:e})}},{key:"render",value:function(){for(var e=[],t=2e3;t<2016;t++)e.push(Object(d.jsx)("option",{value:t,children:t},t));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{children:"MOVIE APPLICATION"}),Object(d.jsxs)("div",{className:"m-lg",children:[Object(d.jsxs)("div",{className:"mb-3 row",children:[Object(d.jsx)("label",{className:"col-sm-2 col-form-label",children:"Enter Movie Title"}),Object(d.jsx)("div",{className:"col-sm-10",children:Object(d.jsx)("input",{type:"text",placeholder:"Select title",className:"form-control",onKeyUp:this.handleChange.bind(this,"title")})})]}),Object(d.jsxs)("div",{className:"mb-3 row",children:[Object(d.jsx)("label",{className:"col-sm-2 col-form-label",children:"Enter Movie Year"}),Object(d.jsx)("div",{className:"col-sm-10",children:Object(d.jsxs)("select",{className:"form-select",onChange:this.handleChange.bind(this,"year"),children:[Object(d.jsx)("option",{value:"",children:"Select Year"}),e]})})]}),Object(d.jsxs)("div",{className:"mb-3 row",children:[Object(d.jsx)("div",{className:"col-sm-2"}),Object(d.jsx)("div",{className:"col-sm-10",children:Object(d.jsx)("button",{className:"btn btn-primary",onClick:this.handleClick.bind(this,1),children:"Submit"})})]})]}),this.state.movielist.Search?Object(d.jsxs)("ul",{className:"nav nav-tabs mb-5",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"#",onClick:this.tabChange.bind(this,"grid"),children:"Grid View"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"#",onClick:this.tabChange.bind(this,"box"),children:"Box View"})})]}):"","box"==this.state.currenttab?Object(d.jsx)(u,{movielist:this.state.movielist,totalpages:this.state.totalpages,clickPage:this.clickPage.bind(this),currentpage:this.state.currentpage,viewDetails:this.viewDetails.bind(this)}):Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{movielist:this.state.movielist,totalpages:this.state.totalpages,clickPage:this.clickPage.bind(this),currentpage:this.state.currentpage,viewDetails:this.viewDetails.bind(this)}),Object(d.jsx)(v,{moviedetails:this.state.moviedetails,visible:this.state.visible,closeModal:this.closeModal.bind(this)})]})]})}}]),s}(a.a.Component),m=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=this,t=[],s=[];if(this.props.movielist.Search){var i=10*(this.props.currentpage-1)+1;if(this.props.movielist.Search.map((function(s,a){t.push(Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:i}),Object(d.jsx)("td",{children:s.Title}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{className:"btn btn-info",onClick:e.props.viewDetails.bind(e,a),children:"View Details"})})]},a)),i++})),this.props.totalpages>1)for(var a=1;a<=this.props.totalpages;a++)s.push(Object(d.jsx)("li",{className:"page-item",onClick:this.props.clickPage.bind(this,a),children:Object(d.jsx)("a",{className:"page-link",href:"#",children:a})},a))}return Object(d.jsxs)("div",{children:["False"==this.props.movielist.Response?Object(d.jsx)("div",{className:"alert alert-danger text-left",children:this.props.movielist.Error}):"","True"==this.props.movielist.Response?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"float-left",children:["Total Records: ",this.props.movielist.totalResults]}),Object(d.jsxs)("div",{className:"float-right",children:["Page ",this.props.currentpage," of ",this.props.totalpages]}),Object(d.jsxs)("table",{className:"table table-hover table-striped",children:[Object(d.jsx)("thead",{className:"table-light",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Sr."}),Object(d.jsx)("td",{className:"col-md-9",children:"Name"}),Object(d.jsx)("td",{className:"col-md-3",children:"Details"})]})}),Object(d.jsx)("tbody",{children:t})]}),Object(d.jsx)("nav",{"aria-label":"Page navigation example",children:Object(d.jsx)("ul",{className:"pagination justify-content-center",children:s})})]}):""]})}}]),s}(a.a.Component),v=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=[];for(var t in this.props.moviedetails){var s=void 0;s=this.props.moviedetails[t],e.push(Object(d.jsxs)("div",{className:"breakall",children:[Object(d.jsxs)("b",{children:[t,":"]})," ",s]},t))}return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(j.a,{visible:this.props.visible,width:"600",effect:"fadeInLeft",scrollable:"true",children:Object(d.jsxs)("div",{className:"modal_cls",children:[Object(d.jsx)("h4",{children:"Details"}),e,Object(d.jsx)("button",{className:"btn btn-primary",onClick:this.props.closeModal,children:"Cancel"})]})})})}}]),s}(a.a.Component),u=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=[];return this.props.movielist.Search&&(this.props.movielist.Search.map((function(t,s){var i;i="N/A"==t.Poster?"https://st4.depositphotos.com/7819052/24490/v/600/depositphotos_244908936-stock-illustration-grunge-black-available-word-rubber.jpg":t.Poster,e.push(Object(d.jsxs)("div",{className:"card bg_grey",children:[Object(d.jsx)("img",{src:i,className:"card-img-top",alt:"test",height:"300"}),Object(d.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(d.jsxs)("li",{className:"list-group-item bg_grey",children:["Title: ",t.Title]}),Object(d.jsxs)("li",{className:"list-group-item bg_grey",children:["Year: ",t.Year]}),Object(d.jsxs)("li",{className:"list-group-item bg_grey",children:["imdbID: ",t.imdbID]}),Object(d.jsxs)("li",{className:"list-group-item bg_grey",children:["Type: ",t.Type]})]})]},s))})),e.push(Object(d.jsx)("div",{className:"clearboth"}))),Object(d.jsxs)("div",{children:["False"==this.props.movielist.Response?Object(d.jsx)("div",{className:"alert alert-danger text-left",children:this.props.movielist.Error}):"","True"==this.props.movielist.Response?Object(d.jsx)("div",{children:e}):""]})}}]),s}(a.a.Component);var O=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(p,{})})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,l=t.getLCP,c=t.getTTFB;s(e),i(e),a(e),l(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),g()}},[[21,1,2]]]);
//# sourceMappingURL=main.cb77e2f1.chunk.js.map