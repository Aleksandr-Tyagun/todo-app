(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(8),i=n.n(l),r=(n(15),n(16),n(9)),c=n(5),s=n(1),d=n(2),u=n(4),h=n(3),m=n(19),p="All",f="Completed",g="Active",E=n(6),v=n.n(E),T=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={activeFilter:p},e.handleFilterChange=function(t){var n=e.props.filterTodoList;e.setState({activeFilter:t},(function(){return n(t)}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.todoList,a=t.handleClearCompleted,l=this.state.activeFilter,i=(n.filter((function(e){return!e.completed}))||[]).length;return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},i," ","items left"),o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement("a",{href:"#/",className:v()({selected:l===p}),onClick:function(){return e.handleFilterChange(p)}},"All")),o.a.createElement("li",null,o.a.createElement("a",{href:"#/active",className:v()({selected:l===g}),onClick:function(){return e.handleFilterChange(g)}},"Active")),o.a.createElement("li",null,o.a.createElement("a",{href:"#/completed",className:v()({selected:l===f}),onClick:function(){return e.handleFilterChange(f)}},"Completed"))),n.length-i>0&&o.a.createElement("button",{type:"button",className:"clear-completed",onClick:a},"Clear completed"))}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={isEditing:!1,newTitle:""},e.handleEditing=function(t){e.setState({newTitle:t.target.value})},e.handleEditingBlur=function(t){var n=e.props,a=n.id;(0,n.setNewTitle)(a,t.target.value),e.setState({isEditing:!1})},e.handleEditingKeyDown=function(t){var n=e.props,a=n.id,o=n.setNewTitle,l=t.target.value;if("Enter"===t.key){if(0===l.trim().length)return void e.setState({isEditing:!1});o(a,l),e.setState({isEditing:!1})}"Escape"===t.key&&e.setState({isEditing:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.title,l=t.completed,i=t.handleCompleteToggle,r=t.handleDeleteTodo,c=this.state,s=c.isEditing,d=c.newTitle;return o.a.createElement("li",{className:v()({completed:l,editing:s})},o.a.createElement("div",{className:"view"},o.a.createElement("input",{type:"checkbox",className:"toggle",onChange:function(){return i(n)},checked:l}),o.a.createElement("label",{htmlFor:"todo-".concat(n),onDoubleClick:function(){return e.setState({isEditing:!0,newTitle:a})}},a),o.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return r(n)}})),s&&o.a.createElement("input",{type:"text",className:"edit",value:d,onBlur:this.handleEditingBlur,onChange:this.handleEditing,onKeyDown:this.handleEditingKeyDown,autoFocus:!0}))}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todoList,n=e.handleCompleteToggle,a=e.handleDeleteTodo,l=e.setNewTitle;return o.a.createElement("ul",{className:"todo-list"},t.map((function(e){var t=e.id,i=e.title,r=e.completed;return o.a.createElement(C,{key:t,id:t,title:i,completed:r,handleCompleteToggle:n,handleDeleteTodo:a,setNewTitle:l})})))}}]),n}(a.PureComponent),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={newTodo:"",activeFilter:p,toggleAll:!1,todoList:[]},e.handleCompleteToggle=function(t){e.setState((function(e){return{todoList:e.todoList.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{completed:!e.completed}):e}))}}))},e.handleDeleteTodo=function(t){e.setState((function(e){return{todoList:e.todoList.filter((function(e){return e.id!==t}))}}))},e.handleNewTodoChange=function(t){e.setState({newTodo:t.target.value})},e.handleClearCompleted=function(){e.setState((function(e){return{todoList:e.todoList.filter((function(e){return!e.completed}))}}))},e.handleNewTodoEnter=function(t){"Enter"===t.key&&e.addNewTodo()},e.setNewTitle=function(t,n){e.setState((function(e){return{todoList:e.todoList.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{title:n}):e}))}}))},e.addNewTodo=function(){0!==e.state.newTodo.trim().length?e.setState((function(e){return{todoList:[].concat(Object(r.a)(e.todoList),[{id:Object(m.a)(),title:e.newTodo,completed:!1}]),newTodo:""}})):e.setState({newTodo:""})},e.filterTodoList=function(t){t===f&&e.setState({activeFilter:f}),t===g&&e.setState({activeFilter:g}),t===p&&e.setState({activeFilter:p})},e.setAll=function(t){e.setState((function(e){return{todoList:e.todoList.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{completed:t})})),toggleAll:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todoList"));e&&this.setState({todoList:e})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("todoList",JSON.stringify(this.state.todoList))}},{key:"render",value:function(){var e=this,t=this.state,n=t.todoList,a=t.newTodo,l=t.activeFilter,i=t.toggleAll,r=n.filter((function(e){return l===g?!e.completed:l===f?e.completed:e}));return o.a.createElement("section",{className:"todoapp"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement("input",{value:a,onChange:this.handleNewTodoChange,onBlur:this.addNewTodo,onKeyUp:this.handleNewTodoEnter,className:"new-todo",placeholder:"What needs to be done?"})),o.a.createElement("section",{className:"main"},o.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(){return e.setAll(!i)},checked:i}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),o.a.createElement(b,{todoList:r,handleCompleteToggle:this.handleCompleteToggle,handleDeleteTodo:this.handleDeleteTodo,setNewTitle:this.setNewTitle})),n.length>0&&o.a.createElement(T,{todoList:n,filterTodoList:this.filterTodoList,handleClearCompleted:this.handleClearCompleted}))}}]),n}(a.Component);i.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.adc7cee0.chunk.js.map