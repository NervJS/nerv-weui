webpackJsonp([4],{"119":function(e,t,n){var r=n(120);"string"==typeof r&&(r=[[e.i,r,""]]);var a={"hmr":!0,"transform":void 0,"insertInto":void 0};n(60)(r,a);r.locals&&(e.exports=r.locals)},"120":function(e,t,n){(e.exports=n(59)(!1)).push([e.i,".container{background-color:#f8f8f8}.flex-wrp{margin-top:1.28rem;display:-webkit-flex;display:flex}.flex-item{width:4.26667rem;height:6.4rem;font-size:.55467rem}.flex-item-V{margin:0 auto;width:6.4rem;height:4.26667rem}.button_style{width:10.66667rem;height:1.70667rem;line-height:1.70667rem}.text_content{margin:0 2.13333rem;background:#fff;padding:.85333rem 0;min-height:6.4rem;text-align:center}.text_content Text{display:block}",""])},"75":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();n(119);var a=n(12),o=_interopRequireDefault(n(0)),i=n(11),l=_interopRequireDefault(n(87));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var c=function(e){function PageView(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageView);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageView.__proto__||Object.getPrototypeOf(PageView)).apply(this,arguments));return e.add=function(t){var n=e.state.contents;n.push({"text":"hello world"}),e.setState(function(){return{"contents":n}})},e.remove=function(t){var n=e.state.contents;n.pop(),e.setState(function(){return{"contents":n}})},e.state={"contents":[]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageView,a.Component),r(PageView,[{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"container"},o.default.createElement(l.default,{"title":"Text"}),o.default.createElement(i.View,{"className":"page-body"},o.default.createElement(i.View,{"className":"page-section"},o.default.createElement(i.Text,{"selectable":!0},"可选择的文字")),o.default.createElement(i.View,{"className":"page-section"},o.default.createElement(i.Text,null,"不可选择的文字")),o.default.createElement(i.View,{"className":"wxapp-block"},o.default.createElement(i.View,{"className":"sub-title"},"仅工作在小程序"),o.default.createElement(i.View,{"className":"page-section"},o.default.createElement(i.Text,null,"不支持多          空格文字")),o.default.createElement(i.View,{"className":"page-section"},o.default.createElement(i.Text,{"space":"ensp"},"多          空格文字(ensp)")),o.default.createElement(i.View,{"className":"page-section"},o.default.createElement(i.Text,{"space":"emsp"},"多          空格文字(emsp)")),o.default.createElement(i.View,{"className":"page-section"},o.default.createElement(i.Text,{"space":"nbsp"},"多          空格文字(nbsp)")),o.default.createElement(i.View,{"className":"page-section"},o.default.createElement(i.Text,null,"不解码文字>")),o.default.createElement(i.View,{"className":"page-section"},o.default.createElement(i.Text,{"decode":!0},"解码文字>")))))}}]),PageView}();t.default=c},"87":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(12),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0)),i=n(11);var l=function(e){function Head(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Head),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Head.__proto__||Object.getPrototypeOf(Head)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Head,a.Component),r(Head,[{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"page-head"},o.default.createElement(i.View,{"className":"page-head-title"},this.props.title),o.default.createElement(i.View,{"className":"page-head-line"}),this.props.desc&&o.default.createElement(i.View,{"className":"page-head-desc"},this.props.desc))}}]),Head}();t.default=l}});