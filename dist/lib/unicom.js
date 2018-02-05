"use strict";function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){function t(t,e,n){e!=n&&(n&&delete c[n],e&&(c[e]=t))}function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("[object array]"==a.call(t).toLowerCase())for(var o=0;o<t.length;o+=1)e(t[o],n,r);else if(t){var i=String(t);n&&(l[i]||(l[i]=[]),l[i].push(n)),r.push(i)}return r}function n(t,e){return function(){var n=Array.prototype.slice.call(arguments),r=n.shift(),o=n.shift(),i=o?null:u.get(e).group;r&&(o&&e[p]!=r||i&&i.indexOf(r)<0)||t.apply(e,n)}}function r(t){var e="",n=!1,r=t.replace(/([@#])([^@#]*)$/,function(t,r,o){return e=o,n="#"==r,""});if(r){for(var o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return i.unshift(r,e,n,this),f.emit.apply(f,i)}return n?c[e]:l[e]}function o(i){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},h=c.name,y=void 0===h?"unicom":h,v=c.idName,d=c.groupName;if(!o.installed){o.installed=!0,i.prototype["$"+y]=r,p=v||y+"Id",s=d||y+"Name",i.mixin({props:_defineProperty({},p,{type:String,default:""}),beforeCreate:function(){var r=this.$options,o=r[y],i={},l=!1;if(o){var c=i.uni={};for(var p in o){l=!0,c[p]=[],"[object array]"!=a.call(o[p]).toLowerCase()&&(o[p]=[o[p]]);for(var h=0;h<o[p].length;h+=1)if(o[p][h]){var v=n(o[p][h],this);c[p].push(v),f.on(p,v)}}}i.group=e(r[s],this),i.group.length>0&&(l=!0);var d=(this.$options.propsData||{}).unicomId;d&&t(this,d),l&&u.set(this,i)},watch:{unicomId:function(e,n){t(this,e,n)}},destroyed:function(){var e=this,n=this.unicomId;n&&t(this,void 0,n);var r=u.get(this);if(r){var o=r.uni;for(var i in o)!function(t){o[t].forEach(function(e){f.off(t,e)})}(i);r.group.forEach(function(t){var n=l[t];if(n){var r=n.indexOf(e);r>-1&&n.splice(r,1),0==n.length&&delete l[t]}})}}});var m=i.config.optionMergeStrategies;m[y]=m.watch,m[s]=function(t,e){var n=[];return t&&n.push(t),e&&n.push(e),n}}}var i=(Array.prototype.slice,function(){function t(){_classCallCheck(this,t),this._monitor_=Object.assign({},this._monitor_||{})}return _createClass(t,[{key:"on",value:function(t,e){var n=this._monitor_||(this._monitor_={});return n[t]||(n[t]=[]),n[t].push(e),this}},{key:"off",value:function(t,e){var n=this._monitor_;if(n)if(e){var r=n[t];if(r){var o=r.indexOf(e);o>-1&&r.splice(o,1)}}else t?delete n[t]:delete this._monitor_;return this}},{key:"emit",value:function(t){var e=this._monitor_&&this._monitor_[t]||[],n=[];if(e.length){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];for(var a=0;a<e.length;a+=1)n.push(e[a].apply(this,o))}return this}}]),t}()),a=Object.prototype.toString,f=new i,u=new Map,s="",l={},c={},p="";return window.Vue&&o(window.Vue),{EventEmitter:i,install:o}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi91bmljb20uanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJfdHlwZW9mIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwidW5kZWZpbmVkIiwidXBkYXRlSWQiLCJ0aGF0IiwibnYiLCJvdiIsImlkRm9yVm0iLCJ0b09uZUFycmF5IiwidG9TdHJpbmciLCJjYWxsIiwia2V5IiwiU3RyaW5nIiwiZGF0YSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwiaSIsImdyb3VwRm9yVm0iLCJhcnIiLCJwdXNoIiwiYXJnIiwic2VuZFN3aXRjaCIsImZuIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsInRvIiwic2hpZnQiLCJhcHBseSIsImdyb3VwIiwiaXNJZCIsInZtTWFwIiwiZ2V0IiwidW5pY29tSWROYW1lIiwiaW5kZXhPZiIsInVuaWNvbVF1ZXJ5IiwicXVlcnkiLCJhcmdzIiwidW5zaGlmdCIsInMwIiwiczEiLCJzMiIsIl9sZW4yIiwiX2tleTIiLCJ0aGlzIiwiaW5zdGFsbCIsInZ1ZSIsInVuaWNvbSIsImlkTmFtZSIsIm5hbWUiLCJncm91cE5hbWUiLCJpbnN0YWxsZWQiLCJ1bmljb21Hcm91cE5hbWUiLCJ0eXBlIiwibWl4aW4iLCJwcm9wcyIsInZtRGF0YSIsImRlZmF1bHQiLCJ2bURhdGFGbGFnIiwidW5pIiwidXMiLCJvcHQiLCJuIiwieGZuIiwiJG9wdGlvbnMiLCJwcm9wc0RhdGEiLCJ3YXRjaCIsInVuaWNvbUlkIiwiZGVzdHJveWVkIiwiaWQiLCJzZXQiLCJvZmYiLCJmb3JFYWNoIiwiZ3MiLCJpbmRleCIsIl90aGlzIiwic3BsaWNlIiwibWVyZ2UiLCJjb25maWciLCJvcHRpb25NZXJnZVN0cmF0ZWdpZXMiLCJwYXJlbnRWYWwiLCJjaGlsZFZhbCIsIngiLCJ3aW5kb3ciLCJFdmVudEVtaXR0ZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJPYmplY3QiLCJhc3NpZ24iLCJfbW9uaXRvcl8iLCJfY3JlYXRlQ2xhc3MiLCJ2YWx1ZSIsImZ1biIsIm1vbml0b3IiLCJlcyIsInJ2IiwiYWciLCJNYXAiLCJWdWUiXSwibWFwcGluZ3MiOiJzdEJBQUMsU0FBVUEsRUFBUUMsR0FDQyxZQUFuQixtQkFBT0MsU0FBUCxZQUFBQyxRQUFPRCxXQUEwQyxtQkFBWEUsUUFBeUJBLE9BQU9GLFFBQVVELElBQzlELGtCQUFYSSxTQUF5QkEsT0FBT0MsSUFBTUQsT0FBT0osR0FBV0EsS0FGL0RNLEVBR1EsV0FpR0wsUUFBQUMsR0FBTUMsRUFBQUMsRUFBQUMsR0FDRkMsR0FBQUEsSUFKREQsU0FTRUUsR0FBVEYsR0FOT0QsSUFPSEUsRUFBR0UsR0FBU0MsSUFNUixRQUFBRixHQUFJRyxFQUFNQyxHQUFWLEdBQWlCQyxHQUFqQkMsVUFBQUMsT0FBQSxPQUFBYixLQUFBWSxVQUFBLEdBQUFBLFVBQUEsS0FDQSxJQUFRLGtCQUFSTCxFQUFHTCxLQUFIUyxHQUFRRyxjQUNKLElBQUEsR0FBQUMsR0FBRyxFQUFDQyxFQUFBQSxFQUFBQSxPQUFnQkQsR0FBQSxFQUNoQkMsRUFBQUEsRUFBQUEsR0FBV1AsRUFBT1EsT0FHekIsSUFBQU4sRUFBQSxDQUNETSxHQUFBQSxHQUFJQyxPQUFKUCxFQUNIVCxLQUNNZSxFQUFQUixLQUNITyxFQUFBUCxPQUdETyxFQUFBUCxHQUF3QlAsS0FBeEJBLElBRVFlLEVBQUFDLEtBQUlDLEdBRUosTUFBQUYsR0FLQSxRQUFBRyxHQUFHQyxFQUFBbkIsR0FFQyxNQUFBLFlBQ0gsR0FBQWlCLEdBQUFHLE1BQUFDLFVBQUFDLE1BQUFoQixLQUFBSSxXQVRHYSxFQUFLTixFQUFJTyxRQVdiTCxFQUFHTSxFQUFNekIsUUFFaEIwQixFQUFBQyxFQUFBLEtBQUFDLEVBQUFDLElBQUE3QixHQUFBMEIsS0FJT0gsS0FBSkksR0FBQTNCLEVBQUE4QixJQUFBUCxHQUFBRyxHQUFBQSxFQUFBSyxRQUFBUixHQUFBLElBSUlKLEVBQUFNLE1BQUF6QixFQUFBaUIsSUFFRyxRQUFBZSxHQUFBQyxHQU5QLEdB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RlVBLEVBQUFBLEdBQUFBLFVBQUFBLEVBR0ssS0FBQSxHQUFBL0UsR0FBQSxFQUFBQSxFQUFBNkUsRUFBQS9FLE9BQUFFLEdBQUEsRUFFUDhFLEVBQUczRSxLQUFLMEUsRUFBRzdFLEdBQUdZLE1BQU1nQixLQUFNbUQsSUFDN0IsTUFBQW5ELFVBNURRd0MsTUF3RWpCNUUsRUFBVzhFLE9BQU85RCxVQUFVaEIsU0FNaEN1QyxFQUFJaEIsR0FBUXFELEdBQVJyRCxFQUFRLEdBQUlpRSxLQVdoQjVDLEVBQUluQixHQUdJaEIsS0FHQVgsS0FDSDJCLEVBQUEsRUErTEwsT0FKR2tELFFBQU9jLEtBQ05wRCxFQUFRc0MsT0FBT2MsTUFHWGIsYUFBQUEsRUFBY3ZDLFFBQUFBIiwiZmlsZSI6ImxpYi91bmljb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6IGZhY3RvcnkoKVxufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cblxuY29uc3Qgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4vLyDoh6rlrprkuYnkuovku7Yg57G75Ly8IG5vZGVqc+S4reeahCBFdmVudEVtaXR0ZXJcbmNsYXNzIEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8g5YWL6ZqG5LiA5Lu9IOS6i+S7tlxuICAgICAgICB0aGlzLl9tb25pdG9yXyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX21vbml0b3JfIHx8IHt9KVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDnu5Hlrprkuovku7ZcbiAgICAgKiBAcGFyYW0gdHlwZSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0gZnVuIOS6i+S7tuaWueazlVxuICAgICAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9XG4gICAgICovXG4gICAgb24odHlwZSwgZnVuKSB7XG4gICAgICAgIGxldCBtb25pdG9yID0gdGhpcy5fbW9uaXRvcl8gfHwgKHRoaXMuX21vbml0b3JfID0ge30pXG4gICAgICAgIG1vbml0b3JbdHlwZV0gfHwgKG1vbml0b3JbdHlwZV0gPSBbXSlcbiAgICAgICAgbW9uaXRvclt0eXBlXS5wdXNoKGZ1bilcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnp7vpmaTkuovku7ZcbiAgICAgKiBAcGFyYW0gdHlwZSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0gZnVuIOS6i+S7tuaWueazlVxuICAgICAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9XG4gICAgICovXG4gICAgb2ZmKHR5cGUsIGZ1bikge1xuICAgICAgICBsZXQgbW9uaXRvciA9IHRoaXMuX21vbml0b3JfXG4gICAgICAgIGlmIChtb25pdG9yKSB7XG4gICAgICAgICAgICBpZiAoZnVuKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVzID0gbW9uaXRvclt0eXBlXVxuICAgICAgICAgICAgICAgIGlmIChlcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlcy5pbmRleE9mKGZ1bilcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtb25pdG9yW3R5cGVdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9tb25pdG9yX1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Kem5Y+R5LqL5Lu2XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg5LqL5Lu25ZCN56ewXG4gICAgICogQHBhcmFtIHsqfSBhZyDkvKDpgJLnmoTlj4LmlbBcbiAgICAgKi9cbiAgICBlbWl0KHR5cGUsIC4uLmFnKSB7XG4gICAgICAgIGxldCBlcyA9IHRoaXMuX21vbml0b3JfICYmIHRoaXMuX21vbml0b3JfW3R5cGVdIHx8IFtdO1xuICAgICAgICBsZXQgcnYgPSBbXVxuICAgICAgICBpZiAoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgcnYucHVzaChlc1tpXS5hcHBseSh0aGlzLCBhZykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59XG5cbi8qKlxuICogdW5pY29tIOiBlOmAmiDmg7PliLDkuK3lm73ogZTpgJrlsLHmg7PliLDkuobov5nkuKrlkI3lrZcgLV8tXG4gKiDnm67nmoTvvIzmj5Dkvpt2dWUg5YWo5bGA55qE6L2s5Y+R5py65Yi2XG4gKiBbMjAxOC0wMS0xOF0g5aKe5Yqg5YiG57uE77yMIOWPr+S7peebtOaOpeiOt+WPluWIhue7hOeahCB2bVxuICovXG5cbmxldCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuLy8g5LqL5Lu2XG5sZXQgdW5pY29tID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbi8vIHZt5a655ZmoXG5sZXQgdm1NYXAgPSBuZXcgTWFwKClcbi8vbGV0IHZtSG9va3MgPSBbXSwgZXZIb29rcyA9IFtdXG5cbi8vIGdyb3VwIE5hbWVcbmxldCB1bmljb21Hcm91cE5hbWUgPSAnJ1xuXG4vLyDliIbnu4RcbmxldCBncm91cEZvclZtID0ge31cblxuLy8g5ZG95ZCNIOWUr+S4gFxubGV0IGlkRm9yVm0gPSB7fVxubGV0IHVuaWNvbUlkTmFtZSA9ICcnXG5mdW5jdGlvbiB1cGRhdGVJZCh0aGF0LCBudiwgb3Ype1xuICAgIGlmKG52ID09IG92KXtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmKG92KXtcbiAgICAgICAgZGVsZXRlIGlkRm9yVm1bb3ZdXG4gICAgfVxuICAgIGlmKG52KXtcbiAgICAgICAgaWRGb3JWbVtudl0gPSB0aGF0XG4gICAgfVxufVxuXG4vLyDovazljJbkuLrkuIDnu7TmlbDnu4RcbmZ1bmN0aW9uIHRvT25lQXJyYXkoZGF0YSwgdGhhdCwgYXJyID0gW10pe1xuICAgIGlmKHRvU3RyaW5nLmNhbGwoZGF0YSkudG9Mb3dlckNhc2UoKSA9PSAnW29iamVjdCBhcnJheV0nKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTwgZGF0YS5sZW5ndGg7IGkrPTEpe1xuICAgICAgICAgICAgdG9PbmVBcnJheShkYXRhW2ldLCB0aGF0LCBhcnIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihkYXRhKXtcbiAgICAgICAgbGV0IGtleSA9IFN0cmluZyhkYXRhKVxuICAgICAgICBpZih0aGF0KXtcbiAgICAgICAgICAgIGlmKCFncm91cEZvclZtW2tleV0pe1xuICAgICAgICAgICAgICAgIGdyb3VwRm9yVm1ba2V5XSA9IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncm91cEZvclZtW2tleV0ucHVzaCh0aGF0KVxuICAgICAgICB9XG4gICAgICAgIGFyci5wdXNoKGtleSlcbiAgICB9XG4gICAgcmV0dXJuIGFyclxufVxuXG4vLyDkuqTmjaIgdGhpcyDnlKhcbmZ1bmN0aW9uIHNlbmRTd2l0Y2goZm4sIHRoYXQpe1xuICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgYXJnID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgICBsZXQgdG8gPSBhcmcuc2hpZnQoKVxuICAgICAgICBsZXQgaXNJZCA9IGFyZy5zaGlmdCgpXG5cbiAgICAgICAgbGV0IGdyb3VwID0gaXNJZCA/IG51bGwgOiB2bU1hcC5nZXQodGhhdCkuZ3JvdXBcblxuICAgICAgICAvLyAj55uu5qCH5LiN5a2Y5ZyoICBA5YiG57uE5LiN5a2Y5ZyoXG4gICAgICAgIGlmKCEhdG8gJiYgKChpc0lkICYmIHRoYXRbdW5pY29tSWROYW1lXSAhPSB0bykgfHwgKGdyb3VwICYmIGdyb3VwLmluZGV4T2YodG8pIDwgMCkpKXtcbiAgICAgICAgICAgIC8vIOebruagh+S4jeWtmOWcqFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8g5omn6KGMZm5cbiAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJnKVxuICAgIH1cbn1cblxuLy8g5Y+R6YCB5a655ZmoIOaIluiAhSDojrflvpcg55uu5qCH5a655ZmoXG5mdW5jdGlvbiB1bmljb21RdWVyeShxdWVyeSwgLi4uYXJncyl7XG4gICAgbGV0IHRvID0gJycsIGlzSWQgPSBmYWxzZVxuICAgIGxldCBrZXkgPSBxdWVyeS5yZXBsYWNlKC8oW0AjXSkoW15AI10qKSQvLCBmdW5jdGlvbihzMCwgczEsIHMyKXtcbiAgICAgICAgdG8gPSBzMlxuICAgICAgICBpc0lkID0gczEgPT0gJyMnXG4gICAgICAgIHJldHVybiAnJ1xuICAgIH0pXG4gICAgaWYoa2V5KXtcbiAgICAgICAgYXJncy51bnNoaWZ0KGtleSwgdG8sIGlzSWQsIHRoaXMpXG4gICAgICAgIHJldHVybiB1bmljb20uZW1pdC5hcHBseSh1bmljb20sIGFyZ3MpXG4gICAgfVxuXG4gICAgLy8g6I635Y+W55uu5qCHIHZtXG4gICAgcmV0dXJuIGlzSWQgPyBpZEZvclZtW3RvXSA6IGdyb3VwRm9yVm1bdG9dXG59XG5cbi8vIOWuieijhemFjee9riDlkI3np7BcbmZ1bmN0aW9uIGluc3RhbGwodnVlLCB7XG4gICAgbmFtZSA9ICd1bmljb20nLFxuICAgIGlkTmFtZSxcbiAgICBncm91cE5hbWVcbn0gPSB7fSkge1xuICAgIGlmKGluc3RhbGwuaW5zdGFsbGVkKXtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGluc3RhbGwuaW5zdGFsbGVkID0gdHJ1ZVxuXG4gICAgdnVlLnByb3RvdHlwZVsnJCcgKyBuYW1lXSA9IHVuaWNvbVF1ZXJ5XG5cbiAgICB1bmljb21JZE5hbWUgPSBpZE5hbWUgfHwgKG5hbWUgKyAnSWQnKVxuXG4gICAgdW5pY29tR3JvdXBOYW1lID0gZ3JvdXBOYW1lIHx8IChuYW1lICsgJ05hbWUnKVxuXG4gICAgdnVlLm1peGluKHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIC8vIOWRveWQjVxuICAgICAgICAgICAgW3VuaWNvbUlkTmFtZV06e1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyDliJvlu7rnmoTml7blgJnvvIzliqDlhaXkuovku7bmnLrliLZcbiAgICAgICAgYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAgICAgICAgIGxldCBvcHQgPSB0aGlzLiRvcHRpb25zXG4gICAgICAgICAgICBsZXQgdXMgPSBvcHRbbmFtZV1cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codXMpXG5cbiAgICAgICAgICAgIGxldCB2bURhdGEgPSB7fVxuICAgICAgICAgICAgbGV0IHZtRGF0YUZsYWcgPSBmYWxzZVxuICAgICAgICAgICAgaWYodXMpe1xuICAgICAgICAgICAgICAgIGxldCB1bmkgPSB2bURhdGEudW5pID0ge31cbiAgICAgICAgICAgICAgICBmb3IobGV0IG4gaW4gdXMpe1xuICAgICAgICAgICAgICAgICAgICB2bURhdGFGbGFnID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB1bmlbbl0gPSBbXVxuICAgICAgICAgICAgICAgICAgICBpZih0b1N0cmluZy5jYWxsKHVzW25dKS50b0xvd2VyQ2FzZSgpICE9ICdbb2JqZWN0IGFycmF5XScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNbbl0gPSBbdXNbbl1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTx1c1tuXS5sZW5ndGg7IGkrPTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndXNbbl1baV0nLCB1c1tuXVtpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzW25dW2ldKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeGZuID0gc2VuZFN3aXRjaCh1c1tuXVtpXSwgdGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlbbl0ucHVzaCh4Zm4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pY29tLm9uKG4sIHhmbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5ZG95ZCN5YiG57uEXG4gICAgICAgICAgICB2bURhdGEuZ3JvdXAgPSB0b09uZUFycmF5KG9wdFt1bmljb21Hcm91cE5hbWVdLCB0aGlzKVxuICAgICAgICAgICAgaWYodm1EYXRhLmdyb3VwLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHZtRGF0YUZsYWcgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWunuS+i+WRveWQjSDllK/kuIBcbiAgICAgICAgICAgIGxldCBpZCA9ICh0aGlzLiRvcHRpb25zLnByb3BzRGF0YSB8fCB7fSkudW5pY29tSWRcbiAgICAgICAgICAgIGlmKGlkKXtcbiAgICAgICAgICAgICAgICB1cGRhdGVJZCh0aGlzLCBpZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdm1EYXRhRmxhZyAmJiB2bU1hcC5zZXQodGhpcywgdm1EYXRhKVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdW5pY29tSWQgKG52LCBvdikge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUlkKHRoaXMsIG52LCBvdilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8g5YWo5bGA5re35ZCI77yMIOmUgOavgeWunuS+i+eahOaXtuWAme+8jOmUgOavgeS6i+S7tlxuICAgICAgICBkZXN0cm95ZWQgKCkge1xuICAgICAgICAgICAgLy8g56e76Zmk5ZSv5LiASURcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMudW5pY29tSWRcbiAgICAgICAgICAgIGlmKGlkKXtcbiAgICAgICAgICAgICAgICB1cGRhdGVJZCh0aGlzLCB1bmRlZmluZWQsIGlkKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdm1EYXRhID0gdm1NYXAuZ2V0KHRoaXMpXG4gICAgICAgICAgICBpZighdm1EYXRhKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHVuaSA9IHZtRGF0YS51bmlcbiAgICAgICAgICAgIC8vIOenu+mZpOS6i+S7tlxuICAgICAgICAgICAgZm9yKGxldCBuIGluIHVuaSl7XG4gICAgICAgICAgICAgICAgdW5pW25dLmZvckVhY2goZnVuY3Rpb24oZm4pe1xuICAgICAgICAgICAgICAgICAgICB1bmljb20ub2ZmKG4sIGZuKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWIhue7hO+8jOS4gOWvueWkmu+8jCDljZXkuKp2beWPr+S7peWkmuS4quWIhue7hOWQjeensFxuICAgICAgICAgICAgdm1EYXRhLmdyb3VwLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZ3MgPSBncm91cEZvclZtW25hbWVdXG4gICAgICAgICAgICAgICAgaWYoZ3Mpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBncy5pbmRleE9mKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID4gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3Muc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGdzLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBncm91cEZvclZtW25hbWVdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIOS9v+eUqCDlkowgd2F0Y2gg5LiA5qC355qE5re35ZCI5py65Yi2XG4gICAgbGV0IG1lcmdlID0gdnVlLmNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXNcbiAgICBtZXJnZVtuYW1lXSA9IG1lcmdlLndhdGNoXG4gICAgLy8gbWVyZ2VbdW5pY29tR3JvdXBOYW1lXSA9IG1lcmdlLm1ldGhvZHNcbiAgICBtZXJnZVt1bmljb21Hcm91cE5hbWVdID0gZnVuY3Rpb24ocGFyZW50VmFsLCBjaGlsZFZhbCl7XG4gICAgICAgIGxldCB4ID0gW11cbiAgICAgICAgaWYocGFyZW50VmFsKXtcbiAgICAgICAgICAgIHgucHVzaChwYXJlbnRWYWwpXG4gICAgICAgIH1cbiAgICAgICAgaWYoY2hpbGRWYWwpe1xuICAgICAgICAgICAgeC5wdXNoKGNoaWxkVmFsKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4XG4gICAgfVxufVxuXG5cbmlmKHdpbmRvdy5WdWUpe1xuICAgIGluc3RhbGwod2luZG93LlZ1ZSlcbn1cblxucmV0dXJuIHtFdmVudEVtaXR0ZXIsIGluc3RhbGx9XG5cbn0pKSkiXX0=
