module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";var r=n(3);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,c){if(c!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=o.a.createContext({}),c=n(1),u=n.n(c);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=p(t).call(this,e),n=!o||"object"!==a(o)&&"function"!=typeof o?y(r):o,b(y(n),"requestAnimation",(function(){n.state.animationScheduled||n.setState({animationScheduled:!0},(function(){return requestAnimationFrame(n.updateScrollInfo)}))})),b(y(n),"updateScrollInfo",(function(e){var t=n.state,r=t.x,o=t.y,i=t.xDirection,c=t.yDirection,u=t.eventsFired,a=t.hasScrolled||Boolean(e),f=a?window.pageXOffset:0,l=a?window.pageYOffset:0,s=a?u+1:u,p=f-r,y=l-o,d=f/(document.body.scrollWidth-window.innerWidth)*100,b=l/(document.body.scrollHeight-window.innerHeight)*100,O=(d+b)/2,m=p>0?"right":p<0?"left":i,h=y>0?"down":y<0?"up":c;n.setState({x:f,y:l,xDifference:p,yDifference:y,xDirection:m,yDirection:h,xPercentage:d,yPercentage:b,totalPercentage:O,eventsFired:s,hasScrolled:a,animationScheduled:!1})})),n.state={x:0,y:0,xDifference:0,yDifference:0,xDirection:"",yDirection:"",xPercentage:0,yPercentage:0,totalPercentage:0,eventsFired:0,hasScrolled:!1,animationScheduled:!1},n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.requestAnimation),this.updateScrollInfo()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.requestAnimation)}},{key:"render",value:function(){var e=this.props.children,t=l({},this.state);return delete t.hasScrolled,delete t.animationScheduled,o.a.createElement(i.Provider,{value:l({},t)},e&&e)}}])&&s(n.prototype,r),c&&s(n,c),t}(r.Component);O.defaultProps={children:void 0},O.propTypes={children:u.a.node};var m=O,h=function(){return Object(r.useContext)(i)};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){return function(t){return o.a.createElement(i.Consumer,null,(function(n){return o.a.createElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{scrollInfo:n}))}))}};n.d(t,"ScrollInfoContext",(function(){return i})),n.d(t,"ScrollInfoProvider",(function(){return m})),n.d(t,"useScrollInfo",(function(){return h})),n.d(t,"withScrollInfo",(function(){return P}))}]);
//# sourceMappingURL=build.bundle.js.map