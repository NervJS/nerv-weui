(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"62":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();r(91);var o=r(12),a=_interopRequireDefault(r(0)),i=r(13),u=_interopRequireDefault(r(89));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var l=function(e){function PageView(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageView);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageView.__proto__||Object.getPrototypeOf(PageView)).apply(this,arguments));return e.config={"navigationBarTitleText":"Camera组件"},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageView,o.Component),n(PageView,[{"key":"handleError","value":function handleError(){alert("您的浏览器不允许使用摄像头")}},{"key":"handleStop","value":function handleStop(){alert("摄像头被非正常终止")}},{"key":"render","value":function render(){return a.default.createElement(i.View,null,a.default.createElement(u.default,{"title":"Camera"}),a.default.createElement(i.Camera,{"className":"cammer-content","onStop":this.handleStop,"onError":this.handleError}))}}]),PageView}();t.default=l},"89":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(12),a=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(0)),i=r(13);var u=function(e){function Header(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,o.Component),n(Header,[{"key":"render","value":function render(){return a.default.createElement(i.View,{"className":"page-head"},a.default.createElement(i.View,{"className":"page-head-title"},this.props.title),a.default.createElement(i.View,{"className":"page-head-line"}),this.props.desc&&a.default.createElement(i.View,{"className":"page-head-desc"},this.props.desc))}}]),Header}();t.default=u},"91":function(e,t,r){}}]);