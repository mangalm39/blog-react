(this.webpackJsonpblogstartreact=this.webpackJsonpblogstartreact||[]).push([[0],{18:function(t,e,a){t.exports=a(47)},41:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){},44:function(t,e,a){},46:function(t,e,a){},47:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),l=a(17),r=a.n(l),s=a(7),c=a(2),u=a(3),i=a(6),m=a(5),h=a(4),d=a.n(h),p=(a(41),function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).state={title:"",content:"",author:"Hugo"},t.postArticle=function(){var e={title:t.state.title,body:t.state.content,auteur:t.state.author};d.a.post("https://jsonplaceholder.typicode.com/posts",e).then((function(t){console.log(t)})),t.setState({title:"",content:"",author:"Hugo"})},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"NvPost form-group"},o.a.createElement("h1",null,"Ajouter un Article"),o.a.createElement("label",null,"Titre"),o.a.createElement("input",{className:"form-control",type:"text",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),o.a.createElement("label",null,"Contenu"),o.a.createElement("textarea",{className:"form-control",rows:"4",value:this.state.content,onChange:function(e){return t.setState({content:e.target.value})}}),o.a.createElement("label",null,"Auteur"),o.a.createElement("select",{className:"form-control",value:this.state.author,onChange:function(e){return t.setState({author:e.target.value})}},o.a.createElement("option",{value:"Hugo"},"Hugo"),o.a.createElement("option",{value:"Juliette"},"Juliette"),o.a.createElement("option",{value:"John"},"John")),o.a.createElement("button",{className:"btn btn-success my-3",onClick:this.postArticle},"Ajouter un Article"))}}]),a}(n.Component)),g=(a(42),function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).state={loadedPost:null},t}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){var t=this;this.props.id&&(!this.state.loadedPost||this.state.loadedPost&&this.state.loadedPost.id!==this.props.id)&&d.a.get("https://jsonplaceholder.typicode.com/posts/"+this.props.id).then((function(e){console.log(e),t.setState({loadedPost:e.data})}))}},{key:"render",value:function(){return this.state.loadedPost&&this.props.toggle?o.a.createElement("div",{className:"PostComplet"},o.a.createElement("h1",null,this.state.loadedPost.title),o.a.createElement("p",null,this.state.loadedPost.body),o.a.createElement("button",{className:"btn btn-danger my-3 btnPost",onClick:this.props.cache},"Fermer")):null}}]),a}(n.Component)),f=(a(43),a(44),function(t){return o.a.createElement("article",{className:"Post",onClick:t.clicked},o.a.createElement("h1",null,t.titre),o.a.createElement("div",null,o.a.createElement("div",{className:"Auteur"},t.auteur)))}),v=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).state={posts:[],selectPostId:null,toggle:!1},t.selectId=function(e){console.log(e),t.setState({selectPostId:e}),t.setState({toggle:!0})},t.toggleModal=function(){t.setState({toggle:!1})},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;d.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){var a=e.data.slice(0,4).map((function(t){return Object(s.a)(Object(s.a)({},t),{},{auteur:"Hugo"})}));t.setState({posts:a})}))}},{key:"render",value:function(){var t=this,e=this.state.posts.map((function(e){return o.a.createElement(f,{key:e.id,auteur:e.auteur,titre:e.title,clicked:function(){return t.selectId(e.id)}})}));return o.a.createElement("div",null,o.a.createElement("section",null,o.a.createElement(p,null)),o.a.createElement("h2",{className:"text-center my-5"},"Choisissez un post ..."),o.a.createElement(g,{id:this.state.selectPostId,hide:this.toggleModal,toggle:this.state.toggle}),o.a.createElement("section",{className:"Posts"},e))}}]),a}(n.Component);a(45),a(46);var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null))};r.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.39ca4a1a.chunk.js.map