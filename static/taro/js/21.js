(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"118":function(e,t,n){e.exports=n.p+"static/images/nerv_logo.png"},"120":function(e,t,n){},"83":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();n(120);var a=n(12),o=_interopRequireDefault(n(0)),i=n(13),l=_interopRequireDefault(n(118)),c=_interopRequireDefault(n(89));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function PageView(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageView);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageView.__proto__||Object.getPrototypeOf(PageView)).apply(this,arguments));return e.config={"navigationBarTitleText":"Image组件"},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageView,a.Component),r(PageView,[{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"container"},o.default.createElement(c.default,{"title":"Image"}),o.default.createElement(i.View,{"className":"page-body"},o.default.createElement(i.View,{"className":"page-section"},o.default.createElement(i.View,{"className":"page-section-title"},o.default.createElement(i.Text,null,"Local Image")),o.default.createElement(i.View,{"className":"page-section-spacing"},o.default.createElement(i.Image,{"style":"width: 300px;height: 300px;background: #fff;","src":l.default}))),o.default.createElement(i.View,{"className":"page-section"},o.default.createElement(i.View,{"className":"page-section-title"},o.default.createElement(i.Text,null,"Internet Image")),o.default.createElement(i.View,{"className":"page-section-spacing"},o.default.createElement(i.Image,{"style":"width: 300px;height: 300px;background: #fff;","src":"https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"})))))}}]),PageView}();t.default=u},"89":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(12),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0)),i=n(13);var l=function(e){function Header(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,a.Component),r(Header,[{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"page-head"},o.default.createElement(i.View,{"className":"page-head-title"},this.props.title),o.default.createElement(i.View,{"className":"page-head-line"}),this.props.desc&&o.default.createElement(i.View,{"className":"page-head-desc"},this.props.desc))}}]),Header}();t.default=l}}]);