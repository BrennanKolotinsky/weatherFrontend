(this.webpackJsonpmynewapp=this.webpackJsonpmynewapp||[]).push([[0],{25:function(t,e,a){},26:function(t,e,a){},45:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(2),r=a.n(s),c=a(18),i=a.n(c),o=(a(25),a(19)),u=(a.p,a(26),a(3)),l=a(4),d=a(5),h=a(7),p=a(6),j=a(9),b=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={location:""},n}return Object(d.a)(a,[{key:"findWeather",value:function(){var t=this;j({method:"POST",url:"http://localhost:8080/weather",crossDomain:!0,data:{location:this.state.location}}).then((function(e){t.setState({displayingData:!0,weather:e.data.data.weather[0].description,lat:e.data.data.coord.lat,lon:e.data.data.coord.lon})}))}},{key:"updateCurrentLocation",value:function(t){this.state.location=t.target.value}},{key:"handleKeyPress",value:function(t){"Enter"===t.key&&this.findWeather()}},{key:"render",value:function(){var t,e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"marginAddedTop",children:"Get a cities current weather!"}),Object(n.jsx)("input",(t={className:"block"},Object(u.a)(t,"className","inputs"),Object(u.a)(t,"type","text"),Object(u.a)(t,"placeholder","Vancouver"),Object(u.a)(t,"onKeyPress",(function(t){return e.handleKeyPress(t)})),Object(u.a)(t,"onChange",(function(t){return e.updateCurrentLocation(t)})),t)),Object(n.jsx)("button",{className:"inputs confirmBtn",onClick:function(){return e.findWeather()},children:"Get Weather!"}),Object(n.jsxs)("div",{className:"block",style:1==this.state.displayingData?{}:{display:"none"},children:[Object(n.jsxs)("h3",{children:["Data loaded for: ",""==this.state.location?"Vancouver":this.state.location,"!"]}),Object(n.jsxs)("h4",{children:["Weather: ",this.state.weather]}),Object(n.jsxs)("h4",{children:["Latitude: ",this.state.lat,", Longitude: ",this.state.lon]})]})]})}}]),a}(r.a.Component),f=a(9),O=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={username:"",password:""},n}return Object(d.a)(a,[{key:"updateUserName",value:function(t){this.state.username=t.target.value}},{key:"updatePassword",value:function(t){this.state.password=t.target.value}},{key:"handleKeyPress",value:function(t){"Enter"===t.key&&this.checkAuth()}},{key:"checkAuth",value:function(){var t=this;""!==this.state.username&&""!==this.state.password||alert("Incomplete login info!"),f({method:"POST",url:"http://localhost:8080/authenticate",crossDomain:!0,data:{username:this.state.username,password:this.state.password}}).then((function(e){1===e.data.auth?(alert("Authenticated!"),t.props.forceUpdate(1)):alert("Invalid username or password!")}))}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"marginAddedTop",children:[Object(n.jsx)("input",{className:"block inputs",type:"text",placeholder:"username",onKeyPress:function(e){return t.handleKeyPress(e)},onChange:function(e){return t.updateUserName(e)}}),Object(n.jsx)("input",{className:"block marginAddedLeft inputs",type:"password",placeholder:"password",onKeyPress:function(e){return t.handleKeyPress(e)},onChange:function(e){return t.updatePassword(e)}}),Object(n.jsx)("button",{className:"inputs confirmBtn",onClick:function(){return t.checkAuth()},children:"Login"})]})}}]),a}(r.a.Component),m=(a(44),a(9),!1),v=0;var y=function(){var t=function(){++v>2&&(m=!0);var t=Object(s.useState)(0),e=Object(o.a)(t,2),a=(e[0],e[1]);return function(){return a((function(t){return++t}))}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{style:0==m?{}:{display:"none"},children:Object(n.jsx)(O,{forceUpdate:t,authenticated:m})}),Object(n.jsx)("div",{style:1==m?{}:{display:"none"},children:Object(n.jsx)(b,{})})]})},k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),r(t),c(t)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),k()}},[[45,1,2]]]);
//# sourceMappingURL=main.d418d226.chunk.js.map