(window["webpackJsonpreact-kabzda-1"]=window["webpackJsonpreact-kabzda-1"]||[]).push([[3],{312:function(e,r,t){e.exports={page_pagination:"Users_page_pagination__7oDMp",page_navigation:"Users_page_navigation__2udfm",lastPage:"Users_lastPage__1xo2o",page:"Users_page__14oS-",next_page:"Users_next_page__3IFAU",previos_page:"Users_previos_page__2Qt2Q",active:"Users_active__3tsoj",input:"Users_input__2CREt"}},313:function(e,r,t){e.exports={user_wrapper:"User_user_wrapper__23eJb",left_column:"User_left_column__2Ibuv",btn:"User_btn__3uDYT",img:"User_img__34K-y",right_column:"User_right_column__345ey",row:"User_row__1050E"}},314:function(e,r,t){e.exports={search_wrapper:"Search_search_wrapper__3nXuD"}},315:function(e,r,t){e.exports={page_pagination:"Paginator_page_pagination__2uusd",page_navigation:"Paginator_page_navigation___DufM",lastPage:"Paginator_lastPage__2FPZj",page:"Paginator_page__kb82Q",next_page:"Paginator_next_page__14tiy",previos_page:"Paginator_previos_page__1CTlm",active:"Paginator_active__3RE7-",input:"Paginator_input__M3wLf"}},316:function(e,r,t){"use strict";t.r(r);var a=t(45),n=t(46),s=t(49),o=t(47),l=t(50),u=t(0),i=t.n(u),c=t(26),g=t(9),p=t(312),P=t.n(p),f=t(10),_=t(23),h=t.n(_),m=t(313),v=t.n(m),d=function(e){return i.a.createElement("div",{className:v.a.user_wrapper},i.a.createElement("div",{className:v.a.left_column},i.a.createElement(f.b,{to:e.isAuth?"/profile/"+e.id:"/login"},i.a.createElement("img",{className:v.a.img,src:null!=e.smallPhotoSrc?e.smallPhotoSrc:h.a,alt:"avatar"})),e.followed?i.a.createElement("button",{disabled:e.followInProgress.some((function(r){return r===e.id})),onClick:function(){e.unFollow(e.id)},className:v.a.btn}," \u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f "):i.a.createElement("button",{disabled:e.followInProgress.some((function(r){return r===e.id})),onClick:function(){e.follow(e.id)},className:v.a.btn},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"),e.isFrend?i.a.createElement("button",{onClick:function(){e.fromFriends(e.id)},className:v.a.btn},"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0434\u0440\u0443\u0437\u0435\u0439 "):i.a.createElement("button",{onClick:function(){e.toFriends(e.id)},className:v.a.btn},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0440\u0443\u0437\u044c\u044f ")),i.a.createElement("div",{className:v.a.right_column},i.a.createElement("div",{className:v.a.row},i.a.createElement(f.b,{to:e.isAuth?"/profile/"+e.id:"/login"},i.a.createElement("h4",null,e.fullName)),i.a.createElement("p",null,"\u041a\u0430\u043a\u0430\u044f \u0442\u043e \u0441\u0442\u0440\u0430\u043d\u0430")),i.a.createElement("div",{className:v.a.row},i.a.createElement("p",null,e.status),i.a.createElement("p",null,"\u041a\u0430\u043a\u043e\u0439 \u0442\u043e \u0433\u043e\u0440\u043e\u0434"))))},w=t(314),U=t.n(w),C=function(e){return i.a.createElement("div",null,i.a.createElement("input",{onChange:function(r){var t=r.target.value;e.searchUsers(t)},type:"text",value:e.searchUsersText,placeholder:"\u041f\u043e\u0438\u0441\u043a \u0434\u0440\u0443\u0437\u0435\u0439",className:U.a.search_wrapper}))},E=t(315),F=t.n(E),b=function(e){for(var r=[],t=e.currentPage,a=e.currentPage;a<t+5;a++)r.push(a);return i.a.createElement("div",{className:F.a.page_pagination},i.a.createElement("span",{onClick:e.setFirstPage,className:F.a.page_navigation},"\u041f\u0435\u0440\u0432\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),i.a.createElement("span",{onClick:e.setPreviosPage,className:F.a.previos_page},"\xab"),r.map((function(r){return Math.ceil(e.totalUsersCount/e.usersPerPageCount)-r>-1?i.a.createElement("span",{onClick:function(){e.changeActivePage(r)},className:e.currentPage===r?"".concat(F.a.page," ").concat(F.a.active):"".concat(F.a.page),key:r},r):null})),i.a.createElement("span",{onClick:e.setNextPage,className:F.a.next_page},"\xbb"),i.a.createElement("span",{onClick:e.lastPage,className:"".concat(F.a.page_navigation," ").concat(F.a.lastPage)},"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),i.a.createElement("span",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435:",i.a.createElement("input",{className:F.a.input,type:"number",value:e.usersPerPageCount,onChange:e.changeUserPerPageCount})))},N=function(e){for(var r=[],t=e.currentPage,a=e.currentPage;a<t+5;a++)r.push(a);return i.a.createElement("div",null,i.a.createElement("div",{className:P.a.search_wrapper},i.a.createElement(C,{searchUsers:e.searchUsers})),i.a.createElement(b,{currentPage:e.currentPage,setFirstPage:e.setFirstPage,setPreviosPage:e.setPreviosPage,setNextPage:e.setNextPage,lastPage:e.lastPage,totalUsersCount:e.totalUsersCount,usersPerPageCount:e.usersPerPageCount,changeUserPerPageCount:e.changeUserPerPageCount,changeActivePage:e.changeActivePage}),i.a.createElement("div",{className:P.a.users_wrapper},e.users.map((function(r){return i.a.createElement(d,{key:r.id,id:r.id,fullName:r.name,followed:r.followed,smallPhotoSrc:r.photos.small,status:r.status,isFrend:r.isFrend,isAuth:e.isAuth,follow:e.follow,unFollow:e.unFollow,toFriends:e.toFriends,fromFriends:e.fromFriends,toggleFollowInProgress:e.toggleFollowInProgress,followInProgress:e.followInProgress})}))))},x=t(48),y=t(6),k=t(33);function A(e,r){return e===r}function I(e,r,t){if(null===r||null===t||r.length!==t.length)return!1;for(var a=r.length,n=0;n<a;n++)if(!e(r[n],t[n]))return!1;return!0}function j(e){var r=Array.isArray(e[0])?e[0]:e;if(!r.every((function(e){return"function"===typeof e}))){var t=r.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return r}var O=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];return function(){for(var r=arguments.length,a=Array(r),n=0;n<r;n++)a[n]=arguments[n];var s=0,o=a.pop(),l=j(a),u=e.apply(void 0,[function(){return s++,o.apply(null,arguments)}].concat(t)),i=e((function(){for(var e=[],r=l.length,t=0;t<r;t++)e.push(l[t].apply(null,arguments));return u.apply(null,e)}));return i.resultFunc=o,i.dependencies=l,i.recomputations=function(){return s},i.resetRecomputations=function(){return s=0},i}}((function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A,t=null,a=null;return function(){return I(r,t,arguments)||(a=e.apply(null,arguments)),t=arguments,a}}));var M=function(e){return e.usersPage.searchUsersText},T=O(M,(function(e){return e.usersPage.users}),(function(e,r){return r?r.filter((function(r){return"".concat(r.name).toLowerCase().includes(e.toLowerCase())})):null})),L=function(e){return e.usersPage.currentPage},S=function(e){return e.usersPage.usersPerPageCount},D=function(e){return e.usersPage.totalUsersCount},J=function(e){return e.usersPage.isLoading},Q=function(e){return e.usersPage.followInProgress},R=function(e){function r(){var e,t;Object(a.a)(this,r);for(var n=arguments.length,l=new Array(n),u=0;u<n;u++)l[u]=arguments[u];return(t=Object(s.a)(this,(e=Object(o.a)(r)).call.apply(e,[this].concat(l)))).changeUserPerPageCount=function(e){var r=e.target.value;r>100&&(r=100),t.props.changeUsersPerPage(r),t.props.getUsers(t.props.currentPage,r)},t.lastPage=function(){var e=Math.ceil(t.props.totalUsersCount/t.props.usersPerPageCount);t.props.lastPage(e),t.props.changeCurrentPage(e),t.props.getUsers(e,t.props.usersPerPageCount)},t.setFirstPage=function(){t.props.firstPage(),t.props.getUsers(1,t.props.usersPerPageCount)},t.setPreviosPage=function(){t.props.currentPage>1&&(t.props.previosPage(),t.props.getUsers(t.props.currentPage-1,t.props.usersPerPageCount))},t.setNextPage=function(){var e=Math.ceil(t.props.totalUsersCount/t.props.usersPerPageCount);t.props.currentPage<e&&(t.props.nextPage(),t.props.getUsers(t.props.currentPage+1,t.props.usersPerPageCount))},t.changeActivePage=function(e){t.props.changeCurrentPage(e),t.props.getUsers(e,t.props.usersPerPageCount)},t}return Object(l.a)(r,e),Object(n.a)(r,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.usersPerPageCount)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null," ",this.props.isLoading?i.a.createElement(x.a,null):null,i.a.createElement(N,{isAuth:this.props.isAuth,currentPage:this.props.currentPage,searchUsers:this.props.searchUsers,searchUsersText:this.props.searchUsersText,setFirstPage:this.setFirstPage,setPreviosPage:this.setPreviosPage,setNextPage:this.setNextPage,lastPage:this.lastPage,totalUsersCount:this.props.totalUsersCount,usersPerPageCount:this.props.usersPerPageCount,changeUserPerPageCount:this.changeUserPerPageCount,changeActivePage:this.changeActivePage,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,toFriends:this.props.toFriends,fromFriends:this.props.fromFriends,toggleFollowInProgress:this.props.toggleFollowInProgress,followInProgress:this.props.followInProgress}))}}]),r}(i.a.Component);r.default=Object(y.d)(Object(g.b)((function(e){return{users:T(e),searchUsersText:M(e),currentPage:L(e),usersPerPageCount:S(e),totalUsersCount:D(e),isLoading:J(e),followInProgress:Q(e),isAuth:Object(k.c)(e)}}),{toFriends:c.m,fromFriends:c.f,searchUsers:c.l,changeCurrentPage:c.a,nextPage:c.j,previosPage:c.k,firstPage:c.d,lastPage:c.i,changeUsersPerPage:c.b,toggleFollowInProgress:c.n,getUsers:c.g,unFollow:c.o,follow:c.e}))(R)}}]);
//# sourceMappingURL=3.c7e73a3a.chunk.js.map