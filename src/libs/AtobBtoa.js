import { globalObject } from "./globalObject.js";
const base64 = require('base-64')
var atob, btoa;

(function() {
  // @if MODULE_FORMAT!='cjs'
  atob = base64.decode;
  btoa = base64.encode;
  return;
  // @endif

  // @if MODULE_FORMAT='cjs'
  atob = require("atob");
  btoa = require("btoa");
  // @endif
})();

export { atob, btoa };
