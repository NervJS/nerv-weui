(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"69":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=a(12),o=_interopRequireDefault(a(0)),i=a(13),l=_interopRequireDefault(a(89));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function PageTextarea(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageTextarea);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageTextarea.__proto__||Object.getPrototypeOf(PageTextarea)).apply(this,arguments));return e.config={"navigationBarTitleText":"Textare组件"},e.state={"value":"初始值"},e.handleClick=function(){e.setState({"value":"点击了按钮"})},e.blur=function(){console.log("blur")},e.focus=function(){console.log("focus")},e.input=function(e){console.log(e)},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageTextarea,n.Component),r(PageTextarea,[{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"container"},o.default.createElement(l.default,{"title":"Textarea"}),o.default.createElement(i.Button,{"type":"primary","onClick":this.handleClick},"点击设置值到第一个Textarea"),o.default.createElement(i.View,{"className":"page-body"},o.default.createElement(i.View,{"className":"page-section"},o.default.createElement(i.View,{"className":"page-section-title"},o.default.createElement(i.Text,null,"输入区域高度自适应，不会出现滚动条")),o.default.createElement(i.View,{"className":"textarea-container"},o.default.createElement(i.Textarea,{"onFocus":this.focus,"onBlur":this.blur,"value":this.state.value,"placeholder":"这是一个Textarea","autoHeight":!0,"onInput":this.input}))),o.default.createElement(i.View,{"className":"page-section"},o.default.createElement(i.View,{"className":"page-section-title"},o.default.createElement(i.Text,null,"这是一个可以自动聚焦的textarea")),o.default.createElement(i.View,{"className":"textarea-container"},o.default.createElement(i.Textarea,{"autoFocus":!0,"placeholder":"这是一个Textarea"})))))}}]),PageTextarea}();t.default=u},"89":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=a(12),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(a(0)),i=a(13);var l=function(e){function Header(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,n.Component),r(Header,[{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"page-head"},o.default.createElement(i.View,{"className":"page-head-title"},this.props.title),o.default.createElement(i.View,{"className":"page-head-line"}),this.props.desc&&o.default.createElement(i.View,{"className":"page-head-desc"},this.props.desc))}}]),Header}();t.default=l}}]);