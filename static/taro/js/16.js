webpackJsonp([16],{"118":function(e,t,a){var n=a(119);"string"==typeof n&&(n=[[e.i,n,""]]);var r={"hmr":!0,"transform":void 0,"insertInto":void 0};a(62)(n,r);n.locals&&(e.exports=n.locals)},"119":function(e,t,a){(e.exports=a(61)(!1)).push([e.i,".btn-max-w{width:9.81333rem}.btn-center{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;margin:0 auto}",""])},"76":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}();a(118);var r=a(12),i=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(a(5)),l=a(11);var o=function(e){function PageButton(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageButton);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageButton.__proto__||Object.getPrototypeOf(PageButton)).apply(this,arguments));return e.state={"btn":[{"text":"页面主操作 Normal","size":"default","type":"primary"},{"text":"页面主操作 Loading","size":"default","type":"primary","loading":!0},{"text":"页面主操作 Disabled","size":"default","type":"primary","disabled":!0},{"text":"页面次要操作 Normal","size":"default","type":"default"},{"text":"页面次要操作 Disabled","size":"default","type":"default","disabled":!0},{"text":"警告类操作 Normal","size":"default","type":"warn"},{"text":"警告类操作 Disabled","size":"default","type":"warn","disabled":!0}]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageButton,r.Component),n(PageButton,[{"key":"render","value":function render(){return i.default.createElement(l.View,{"className":"container"},i.default.createElement(l.View,{"className":"page-body"},i.default.createElement(l.View,{"className":"page-section"},i.default.createElement(l.View,{"className":"page-section-spacing-reset"},this.state.btn.map(function(e){return i.default.createElement(l.Button,{"size":e.size?e.size:"","type":e.type?e.type:"","loading":!!e.loading&&e.loading,"disabled":!!e.disabled&&e.disabled},e.text)}),i.default.createElement(l.Button,{"className":"btn-max-w","plain":!0,"type":"primary"},"按钮"),i.default.createElement(l.Button,{"className":"btn-max-w","plain":!0,"type":"primary","disabled":!0},"不可点击的按钮"),i.default.createElement(l.Button,{"className":"btn-max-w","plain":!0},"按钮"),i.default.createElement(l.Button,{"className":"btn-max-w","plain":!0,"disabled":!0},"按钮"),i.default.createElement(l.View,{"className":"btn-center btn-max-w"},i.default.createElement(l.Button,{"size":"mini","type":"primary"},"按钮"),i.default.createElement(l.Button,{"size":"mini"},"按钮"),i.default.createElement(l.Button,{"size":"mini","type":"warn"},"按钮"))))))}}]),PageButton}();t.default=o}});