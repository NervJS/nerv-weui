(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"105":function(e,t,a){},"70":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}();a(105);var r=a(6),l=_interopRequireDefault(a(0)),o=a(12),i=_interopRequireDefault(a(85));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var c=function(e){function PageView(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageView);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageView.__proto__||Object.getPrototypeOf(PageView)).apply(this,arguments));return e.config={"navigationBarTitleText":"Text组件"},e.state={"contents":[]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageView,r.Component),n(PageView,[{"key":"render","value":function render(){return l.default.createElement(o.View,{"className":"components-page"},l.default.createElement(o.View,{"className":"components-page__header"},l.default.createElement(i.default,{"title":"Text"})),l.default.createElement(o.View,{"className":"components-page__body"},l.default.createElement(o.View,{"className":"components-page__body-example example"},l.default.createElement(o.View,{"className":"example-header"},l.default.createElement(o.Text,null,"H5、小程序通用")),l.default.createElement(o.View,{"className":"example-body"},l.default.createElement(o.View,{"className":"example-body__text"},l.default.createElement(o.Text,{"selectable":!0},"可选择的文字")),l.default.createElement(o.View,{"className":"example-body__text"},l.default.createElement(o.Text,null,"不可选择的文字")))),l.default.createElement(o.View,{"className":"components-page__body-example example"},l.default.createElement(o.View,{"className":"example-header"},l.default.createElement(o.Text,null,"仅工作在小程序")),l.default.createElement(o.View,{"className":"example-body"},l.default.createElement(o.View,{"className":"example-body__text"},l.default.createElement(o.Text,null,"不支持多          空格文字")),l.default.createElement(o.View,{"className":"example-body__text"},l.default.createElement(o.Text,{"space":"ensp"},"多          空格文字(ensp)")),l.default.createElement(o.View,{"className":"example-body__text"},l.default.createElement(o.Text,{"space":"nbsp"},"多          空格文字(nbsp)")),l.default.createElement(o.View,{"className":"example-body__text"},l.default.createElement(o.Text,null,"不解码文字>")),l.default.createElement(o.View,{"className":"example-body__text"},l.default.createElement(o.Text,{"decode":!0},"解码文字>"))))))}}]),PageView}();t.default=c},"85":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=a(6),l=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(a(0)),o=a(12);var i=function(e){function Header(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,r.Component),n(Header,[{"key":"render","value":function render(){return l.default.createElement(o.View,{"className":"page-head"},l.default.createElement(o.View,{"className":"page-head-title"},this.props.title),l.default.createElement(o.View,{"className":"page-head-line"}),this.props.desc&&l.default.createElement(o.View,{"className":"page-head-desc"},this.props.desc))}}]),Header}();t.default=i}}]);