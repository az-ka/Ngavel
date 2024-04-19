import { Fragment as Fragment$1, useRef, useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server.js";
import { createInertiaApp, Link as Link$1, InertiaLink, usePage, useForm, Head } from "@inertiajs/inertia-react";
import require$$0 from "process";
import require$$1 from "http";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers.js";
import { Inertia } from "@inertiajs/inertia";
import hljs from "highlight.js";
import { Menu, Transition, Tab, Listbox } from "@headlessui/react";
import { marked } from "marked";
import clsx from "clsx";
import DOMPurify from "isomorphic-dompurify";
import toast from "react-hot-toast";
import swal from "sweetalert";
import * as jsxRuntime from "react/jsx-runtime.js";
var lib = {};
Object.defineProperty(lib, "__esModule", {
  value: true
});
var default_1 = lib.default = void 0;
var process = _interopRequireWildcard(require$$0);
var _http = require$$1;
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const readableToString = (readable) => new Promise((resolve, reject) => {
  let data = "";
  readable.on("data", (chunk) => data += chunk);
  readable.on("end", () => resolve(data));
  readable.on("error", (err) => reject(err));
});
var _default = (render, port) => {
  const _port = port || 13714;
  const routes = {
    "/health": async () => ({
      status: "OK",
      timestamp: Date.now()
    }),
    "/shutdown": () => process.exit(),
    "/render": async (request) => render(JSON.parse(await readableToString(request))),
    "/404": async () => ({
      status: "NOT_FOUND",
      timestamp: Date.now()
    })
  };
  (0, _http.createServer)(async (request, response) => {
    const dispatchRoute = routes[request.url] || routes["/404"];
    try {
      response.writeHead(200, {
        "Content-Type": "application/json",
        "Server": "Inertia.js SSR"
      });
      response.write(JSON.stringify(await dispatchRoute(request)));
    } catch (e2) {
      console.error(e2);
    }
    response.end();
  }).listen(_port, () => console.log("Inertia SSR server started."));
  console.log(`Starting SSR server on port ${_port}...`);
};
default_1 = lib.default = _default;
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, e2.key, e2);
  }
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign || function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function o(t4, r2) {
  return o = Object.setPrototypeOf || function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, o(t4, r2);
}
function i() {
  if ("undefined" == typeof Reflect || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if ("function" == typeof Proxy)
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (t4) {
    return false;
  }
}
function u(t4, r2, n2) {
  return u = i() ? Reflect.construct : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var i2 = new (Function.bind.apply(t5, e2))();
    return n3 && o(i2, n3.prototype), i2;
  }, u.apply(null, arguments);
}
function f(t4) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return f = function(t5) {
    if (null === t5 || -1 === Function.toString.call(t5).indexOf("[native code]"))
      return t5;
    if ("function" != typeof t5)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return u(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), o(n2, t5);
  }, f(t4);
}
var a = String.prototype.replace, c = /%20/g, l = { default: "RFC3986", formatters: { RFC1738: function(t4) {
  return a.call(t4, c, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    void 0 !== t4[e2] && (n2[e2] = t4[e2]);
  return n2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var o2 = r2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = i2[a2];
      "object" == typeof c2 && null !== c2 && -1 === n2.indexOf(c2) && (r2.push({ obj: i2, prop: a2 }), n2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3)
          void 0 !== n3[o3] && e3.push(n3[o3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2)
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, o2) {
  if (0 === t4.length)
    return t4;
  var i2 = t4;
  if ("symbol" == typeof t4 ? i2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (i2 = String(t4)), "iso-8859-1" === n2)
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === l.RFC1738 && (40 === a2 || 41 === a2) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if ("object" != typeof n2) {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(n2);
  var o2 = r2;
  return v(r2) && !v(n2) && (o2 = y(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, o3) {
    if (s.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && "object" == typeof i2 && n3 && "object" == typeof n3 ? r2[o3] = t2(i2, n3, e2) : r2.push(n3);
    } else
      r2[o3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, o3) {
    var i2 = n2[o3];
    return r3[o3] = s.call(r3, o3) ? t2(r3[o3], i2, e2) : i2, r3;
  }, o2);
} }, b = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, m = Array.isArray, g = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, m(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if ("function" == typeof f2 ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === e2 && m(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === h2) {
    if (o2)
      return u2 && !p2 ? u2(n2, R.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if ("string" == typeof (b2 = h2) || "number" == typeof b2 || "boolean" == typeof b2 || "symbol" == typeof b2 || "bigint" == typeof b2 || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, R.encoder, y2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var O2 = g.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (void 0 === h2)
    return x2;
  if ("comma" === e2 && m(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (m(f2))
    k2 = f2;
  else {
    var C2 = Object.keys(h2);
    k2 = a2 ? C2.sort(a2) : C2;
  }
  for (var N2 = 0; N2 < k2.length; ++N2) {
    var T2 = k2[N2], F2 = "object" == typeof T2 && void 0 !== T2.value ? T2.value : h2[T2];
    if (!i2 || null !== F2) {
      var D2 = m(h2) ? "function" == typeof e2 ? e2(n2, T2) : n2 : n2 + (c2 ? "." + T2 : "[" + T2 + "]");
      w(x2, t3(F2, D2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, C = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, N = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, T = function(t4, r2) {
  return t4 && "string" == typeof t4 && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, F = function(t4, r2, n2, e2) {
  if (t4) {
    var o2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var o3 = e3 ? r3 : T(r3, n3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = t5[i3];
        if ("[]" === f3 && n3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, r2, n2, e2);
  }
}, D = function(t4, r2) {
  var n2 = function(t5) {
    if (!t5)
      return C;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? C.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : C.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : C.arrayLimit, charset: void 0 === t5.charset ? C.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : C.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : C.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : C.decoder, delimiter: "string" == typeof t5.delimiter || d.isRegExp(t5.delimiter) ? t5.delimiter : C.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : C.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : C.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : C.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : C.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : C.strictNullHandling };
  }(r2);
  if ("" === t4 || null == t4)
    return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = "string" == typeof t4 ? function(t5, r3) {
    var n3, e3 = {}, o3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, Infinity === r3.parameterLimit ? void 0 : r3.parameterLimit), i3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (n3 = 0; n3 < o3.length; ++n3)
        0 === o3[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[n3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[n3] && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3)
      if (n3 !== i3) {
        var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === s2 ? (f3 = r3.decoder(c2, C.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), C.decoder, u3, "key"), a3 = d.maybeMap(T(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, C.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = N(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), e3[f3] = k.call(e3, f3) ? d.combine(e3[f3], a3) : a3;
      }
    return e3;
  }(t4, n2) : t4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = F(f2, e2[f2], n2, "string" == typeof t4);
    o2 = d.merge(o2, a2, n2);
  }
  return d.compact(o2);
}, $ = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, o2;
    this.name = t5, this.definition = r2, this.bindings = null != (e2 = r2.bindings) ? e2 : {}, this.wheres = null != (o2 = r2.wheres) ? o2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var n3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, n4, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + ((null == (i3 = r2.wheres[e3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + n4 + u3 + ")?" : "" + n4 + u3;
    }).replace(/^\w+:\/\//, ""), e2 = t5.replace(/^\w+:\/\//, "").split("?"), o2 = e2[0], i2 = e2[1], u2 = new RegExp("^" + n3 + "/?$").exec(o2);
    return !!u2 && { params: u2.groups, query: D(i2) };
  }, n2.compile = function(t5) {
    var r2 = this, n3 = this.parameterSegments;
    return n3.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(e2, o2, i2) {
      var u2, f2, a2;
      if (!i2 && [null, void 0].includes(t5[o2]))
        throw new Error("Ziggy error: '" + o2 + "' parameter is required for route '" + r2.name + "'.");
      if (n3[n3.length - 1].name === o2 && ".*" === r2.wheres[o2])
        return encodeURIComponent(null != (a2 = t5[o2]) ? a2 : "").replace(/%2F/g, "/");
      if (r2.wheres[o2] && !new RegExp("^" + (i2 ? "(" + r2.wheres[o2] + ")?" : r2.wheres[o2]) + "$").test(null != (u2 = t5[o2]) ? u2 : ""))
        throw new Error("Ziggy error: '" + o2 + "' parameter does not match required format '" + r2.wheres[o2] + "' for route '" + r2.name + "'.");
      return encodeURIComponent(null != (f2 = t5[o2]) ? f2 : "");
    }).replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    return ((this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "") + "/" + this.definition.uri).replace(/\/+$/, "");
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return null != (t5 = null == (r2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) ? t5 : [];
  } }]), t4;
}(), A = /* @__PURE__ */ function(t4) {
  var e2, i2;
  function u2(r2, e3, o2, i3) {
    var u3;
    if (void 0 === o2 && (o2 = true), (u3 = t4.call(this) || this).t = null != i3 ? i3 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new $(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  i2 = t4, (e2 = u2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, o(e2, i2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return "_query" !== t6;
    }).reduce(function(r3, e3) {
      var o2;
      return n({}, r3, ((o2 = {})[e3] = t5.u[e3], o2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, o2 = function(t7) {
        if (!t7)
          return R;
        if (null != t7.encoder && "function" != typeof t7.encoder)
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (void 0 !== t7.charset && "utf-8" !== t7.charset && "iso-8859-1" !== t7.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (void 0 !== t7.format) {
          if (!b.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], o3 = R.filter;
        return ("function" == typeof t7.filter || m(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: "boolean" == typeof t7.addQueryPrefix ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: void 0 === t7.allowDots ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: "boolean" == typeof t7.charsetSentinel ? t7.charsetSentinel : R.charsetSentinel, delimiter: void 0 === t7.delimiter ? R.delimiter : t7.delimiter, encode: "boolean" == typeof t7.encode ? t7.encode : R.encode, encoder: "function" == typeof t7.encoder ? t7.encoder : R.encoder, encodeValuesOnly: "boolean" == typeof t7.encodeValuesOnly ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: o3, format: n3, formatter: e4, serializeDate: "function" == typeof t7.serializeDate ? t7.serializeDate : R.serializeDate, skipNulls: "boolean" == typeof t7.skipNulls ? t7.skipNulls : R.skipNulls, sort: "function" == typeof t7.sort ? t7.sort : null, strictNullHandling: "boolean" == typeof t7.strictNullHandling ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      "function" == typeof o2.filter ? e3 = (0, o2.filter)("", e3) : m(o2.filter) && (n2 = o2.filter);
      var i3 = [];
      if ("object" != typeof e3 || null === e3)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o2.sort && n2.sort(o2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o2.skipNulls && null === e3[a2] || w(i3, S(e3[a2], a2, u3, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset));
      }
      var c2 = i3.join(o2.delimiter), s2 = true === o2.addQueryPrefix ? "?" : "";
      return o2.charsetSentinel && (s2 += "iso-8859-1" === o2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return "boolean" == typeof t6 ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var e3 = {}, o2 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new $(n2[0], n2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return n({ name: o2[0] }, e3, { route: o2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, n2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(t5, r2) {
    var e3 = this.v(), o2 = e3.name, i3 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!t5)
      return o2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new $(o2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = n({}, i3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return void 0 !== t6;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, n2, e3, o2, i3, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (t5 = null == (r2 = this.t.location) ? void 0 : r2.host) ? t5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === a2 ? "" : a2, search: null != (o2 = null == (i3 = this.t.location) ? void 0 : i3.search) ? o2 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    void 0 === t5 && (t5 = {}), void 0 === r2 && (r2 = this.i), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var o2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var i4, u3;
        return n({}, t6, o2[e4] ? ((i4 = {})[o2[e4].name] = r3, i4) : "object" == typeof r3 ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (1 === o2.length && !t5[o2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var i3;
      (i3 = {})[o2[0].name] = t5, t5 = i3;
    }
    return n({}, this.m(r2), this.g(t5, r2));
  }, f2.m = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, o2) {
      var i3, u3 = e3.name;
      return n({}, t6, ((i3 = {})[u3] = r2.t.defaults[u3], i3));
    }, {});
  }, f2.g = function(t5, r2) {
    var e3 = r2.bindings, o2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var i3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !o2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((i3 = {})[f3] = a2[e3[f3]], i3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return n({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ f(String));
function P(t4, r2, n2, e2) {
  var o2 = new A(t4, r2, n2, e2);
  return t4 ? o2.toString() : o2;
}
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const appName = "Laravel";
default_1((page) => createInertiaApp({
  page,
  render: ReactDOMServer.renderToString,
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, Object.assign({ "./Pages/Articles/Create.jsx": () => Promise.resolve().then(() => Create$1), "./Pages/Articles/Edit.jsx": () => Promise.resolve().then(() => Edit$1), "./Pages/Articles/Index.jsx": () => Promise.resolve().then(() => Index$1), "./Pages/Articles/Show.jsx": () => Promise.resolve().then(() => Show$7), "./Pages/Articles/Table.jsx": () => Promise.resolve().then(() => Table), "./Pages/Auth/ConfirmPassword.jsx": () => Promise.resolve().then(() => ConfirmPassword$1), "./Pages/Auth/ForgotPassword.jsx": () => Promise.resolve().then(() => ForgotPassword$1), "./Pages/Auth/Login.jsx": () => Promise.resolve().then(() => Login$1), "./Pages/Auth/Register.jsx": () => Promise.resolve().then(() => Register$1), "./Pages/Auth/ResetPassword.jsx": () => Promise.resolve().then(() => ResetPassword$1), "./Pages/Auth/VerifyEmail.jsx": () => Promise.resolve().then(() => VerifyEmail$1), "./Pages/Categories/Show.jsx": () => Promise.resolve().then(() => Show$5), "./Pages/Dashboard.jsx": () => Promise.resolve().then(() => Dashboard$1), "./Pages/Home.jsx": () => Promise.resolve().then(() => Home$1), "./Pages/Tags/Show.jsx": () => Promise.resolve().then(() => Show$3), "./Pages/Users/Show.jsx": () => Promise.resolve().then(() => Show$1) })),
  setup: ({
    App: App2,
    props
  }) => {
    global.route = (name, params, absolute) => P(name, params, absolute, {
      ...page.props.ziggy,
      location: new URL(page.props.ziggy.location)
    });
    return /* @__PURE__ */ jsx(App2, {
      ...props
    });
  }
}));
function ApplicationLogo({
  className
}) {
  return /* @__PURE__ */ jsx("svg", {
    className,
    viewBox: "0 0 316 316",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx("path", {
      d: "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"
    })
  });
}
function Container({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "grid grid-cols-12",
    children: /* @__PURE__ */ jsx("div", {
      className: "col-span-10 col-start-2",
      children
    })
  });
}
function Footer() {
  return /* @__PURE__ */ jsx("div", {
    className: "border-t border-gray-800 bg-gray-900 py-10 mt-8 md:mt-16",
    children: /* @__PURE__ */ jsx(Container, {
      children: /* @__PURE__ */ jsxs("div", {
        className: "max-w-2xl mx-auto text-center",
        children: [/* @__PURE__ */ jsx(ApplicationLogo, {
          className: "fill-white w-16 h-16 mx-auto"
        }), /* @__PURE__ */ jsx("p", {
          className: "mt-5 text-gray-300",
          children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsam. Magni quidem corporis minus rem, doloribus nihil! Reprehenderit quasi omnis dolor dolores nostrum nobis molestias laudantium! Quod fuga ratione non?"
        }), /* @__PURE__ */ jsxs("p", {
          className: "font-mono text-sm text-gray-400 mt-10 max-w-lg mx-auto",
          children: ["Designed and built with all the love in the world by the", " ", /* @__PURE__ */ jsx("strong", {
            className: "font-semibold text-white",
            children: "Karteil"
          }), " ", "team with the help of our author."]
        }), /* @__PURE__ */ jsxs("p", {
          className: "mt-8 text-gray-400 font-mono text-xs",
          children: ["Copyright ", new Date().getFullYear(), " All right reserved."]
        })]
      })
    })
  });
}
function NavLink({
  active = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(Link$1, {
    className: clsx(active && "font-semibold text-white", "inline-block rounded px-4 py-2 text-gray-400"),
    ...props,
    children
  });
}
function DropdownMenu({
  toggleAnimate = true,
  label,
  children
}) {
  return /* @__PURE__ */ jsx(Menu, {
    as: "div",
    className: "relative",
    children: ({
      open
    }) => /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsxs(Menu.Button, {
        className: clsx("flex items-center gap-x-2 text-gray-400", open && "text-white"),
        children: [label, toggleAnimate && /* @__PURE__ */ jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: clsx("h-4 w-4 transition duration-200", open && "rotate-180"),
          viewBox: "0 0 20 20",
          fill: "currentColor",
          children: /* @__PURE__ */ jsx("path", {
            fillRule: "evenodd",
            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
            clipRule: "evenodd"
          })
        })]
      }), /* @__PURE__ */ jsx(Transition, {
        as: Fragment$1,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /* @__PURE__ */ jsx(Menu.Items, {
          className: "absolute z-50 right-0 top-9 w-60 space-y-1 overflow-hidden rounded-lg border border-gray-700 bg-gray-800 px-4 py-5 shadow-sm",
          children
        })
      })]
    })
  });
}
function Link({
  isActive = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(Menu.Item, {
    children: ({
      active
    }) => /* @__PURE__ */ jsx(InertiaLink, {
      className: "block w-full text-left",
      ...props,
      children: /* @__PURE__ */ jsx("div", {
        className: clsx(active || isActive ? "bg-blue-700 text-white" : "text-gray-400", "inline-block rounded-lg px-2 py-1 text-left text-sm font-medium"),
        children
      })
    })
  });
}
function Divider() {
  return /* @__PURE__ */ jsx("div", {
    className: "h-px w-full ml-2 my-2 block bg-gradient-to-r from-gray-700 via-transparent to-transparent"
  });
}
DropdownMenu.Link = Link;
DropdownMenu.Divider = Divider;
function ResponsiveNavigation() {
  const {
    auth
  } = usePage().props;
  return /* @__PURE__ */ jsx("nav", {
    className: "border-b border-gray-800 bg-gray-900 px-4 py-4 lg:hidden",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex items-center justify-between",
      children: [/* @__PURE__ */ jsx(Link$1, {
        className: "text-xl font-semibold text-white",
        href: "/",
        children: "Karteil"
      }), /* @__PURE__ */ jsxs(DropdownMenu, {
        toggleAnimate: false,
        label: /* @__PURE__ */ jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: /* @__PURE__ */ jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 6h16M4 12h16m-7 6h7"
          })
        }),
        children: [/* @__PURE__ */ jsx(DropdownMenu.Link, {
          href: "/",
          children: "Home"
        }), /* @__PURE__ */ jsx(DropdownMenu.Link, {
          href: "/articles",
          children: "Articles"
        }), auth.user ? /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(DropdownMenu.Link, {
            href: route("dashboard"),
            children: "Dashboard"
          }), /* @__PURE__ */ jsx(DropdownMenu.Link, {
            href: "#",
            children: "My profile"
          }), /* @__PURE__ */ jsx(DropdownMenu.Link, {
            href: "#",
            children: "Settings"
          }), /* @__PURE__ */ jsx(DropdownMenu.Divider, {}), /* @__PURE__ */ jsx(DropdownMenu.Link, {
            href: "#",
            children: "My articles"
          }), /* @__PURE__ */ jsx(DropdownMenu.Link, {
            href: "#",
            children: "New article"
          }), /* @__PURE__ */ jsx(DropdownMenu.Divider, {}), /* @__PURE__ */ jsx(DropdownMenu.Link, {
            href: route("logout"),
            method: "POST",
            as: "button",
            children: "Logout"
          })]
        }) : /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(DropdownMenu.Divider, {}), /* @__PURE__ */ jsx(DropdownMenu.Link, {
            href: route("login"),
            children: "Login"
          }), /* @__PURE__ */ jsx(DropdownMenu.Link, {
            href: route("register"),
            children: "Register"
          })]
        })]
      })]
    })
  });
}
function Navbar() {
  const {
    auth,
    categories_global
  } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(ResponsiveNavigation, {}), /* @__PURE__ */ jsx("nav", {
      className: "hidden border-b border-dashed border-gray-800 bg-gray-900 py-4 shadow lg:block",
      children: /* @__PURE__ */ jsx("div", {
        className: "mx-auto max-w-screen-2xl px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between",
          children: [/* @__PURE__ */ jsx(Link$1, {
            href: route("home"),
            className: "mr-3 text-lg font-semibold capitalize text-white",
            children: "Karteil"
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-1 items-center justify-between",
            children: [/* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx(NavLink, {
                href: route("home"),
                active: route().current("home"),
                children: "Home"
              }), categories_global.map((category) => /* @__PURE__ */ jsx(NavLink, {
                active: route().current("categories.show", category.slug),
                href: route("categories.show", category.slug),
                children: category.name
              }, category.slug))]
            }), /* @__PURE__ */ jsx("div", {
              className: "flex items-center",
              children: auth.user ? /* @__PURE__ */ jsx("div", {
                className: "flex items-center",
                children: /* @__PURE__ */ jsxs(DropdownMenu, {
                  label: auth.user.name,
                  children: [/* @__PURE__ */ jsx(DropdownMenu.Link, {
                    href: route("dashboard"),
                    children: "Dashboard"
                  }), /* @__PURE__ */ jsx(DropdownMenu.Link, {
                    href: `/${auth.user.username}`,
                    children: "My profile"
                  }), /* @__PURE__ */ jsx(DropdownMenu.Link, {
                    href: "#",
                    children: "Settings"
                  }), auth.user.hasRole ? /* @__PURE__ */ jsxs(Fragment, {
                    children: [/* @__PURE__ */ jsx(DropdownMenu.Link, {
                      href: route("articles.table"),
                      children: "My articles"
                    }), /* @__PURE__ */ jsx(DropdownMenu.Link, {
                      href: route("articles.create"),
                      children: "New article"
                    })]
                  }) : null, /* @__PURE__ */ jsx(DropdownMenu.Link, {
                    href: route("logout"),
                    method: "POST",
                    as: "button",
                    children: "Logout"
                  })]
                })
              }) : /* @__PURE__ */ jsxs("div", {
                className: "flex items-center",
                children: [/* @__PURE__ */ jsx(NavLink, {
                  href: route("login"),
                  children: "Login"
                }), /* @__PURE__ */ jsx(NavLink, {
                  href: route("register"),
                  children: "Register"
                })]
              })
            })]
          })]
        })
      })
    })]
  });
}
function App({
  children
}) {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx("div", {
      className: "pt-8",
      children
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
}
function Header({
  className = "",
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: clsx(className, "-mt-8 mb-8 md:mb-16 grid grid-cols-12 bg-gray-900 py-5 lg:py-28"),
    children: /* @__PURE__ */ jsx("div", {
      className: "col-span-10 col-start-2",
      children: /* @__PURE__ */ jsx("div", {
        className: "max-w-4xl",
        children
      })
    })
  });
}
function Title({
  children
}) {
  return /* @__PURE__ */ jsx("h1", {
    className: "text-2xl font-bold text-white lg:text-6xl",
    children
  });
}
function Subtitle({
  children
}) {
  return /* @__PURE__ */ jsx("h4", {
    className: "mt-2 lg:mt-6 text-gray-300 leading-relaxed lg:text-2xl",
    children
  });
}
function Content({
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "mt-4 leading-relaxed text-gray-400 lg:text-xl",
    children
  });
}
Header.Title = Title;
Header.Subtitle = Subtitle;
Header.Content = Content;
function Button({
  type = "submit",
  className = "",
  processing,
  children
}) {
  return /* @__PURE__ */ jsx("button", {
    type,
    className: `inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${processing && "opacity-25"} ` + className,
    disabled: processing,
    children
  });
}
function Error$1({
  value,
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "mt-2 text-rose-500 font-medium",
    children: value ? value : children
  });
}
function Input({
  type = "text",
  className,
  isFocused,
  ...props
}) {
  const input = useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx("input", {
    ...props,
    type,
    className: clsx(className, "w-full rounded-lg border border-gray-300 py-2 px-3 transition duration-200 focus:border-blue-300 focus:ring focus:ring-blue-100"),
    ref: input
  });
}
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value
});
function Editor({
  value,
  ...props
}) {
  return /* @__PURE__ */ jsxs(Tab.Group, {
    children: [/* @__PURE__ */ jsxs(Tab.List, {
      className: "flex items-center gap-x-4 pl-2 mb-2",
      children: [/* @__PURE__ */ jsx(Tab, {
        as: Fragment$1,
        children: ({
          selected
        }) => /* @__PURE__ */ jsx("button", {
          className: clsx("rounded-lg text-sm focus:outline-none", selected ? "font-semibold text-semibold" : "text-gray-500"),
          children: "Input"
        })
      }), /* @__PURE__ */ jsx(Tab, {
        as: Fragment$1,
        children: ({
          selected
        }) => /* @__PURE__ */ jsx("button", {
          className: clsx("rounded-lg text-sm focus:outline-none", selected ? "font-semibold text-semibold" : "text-gray-500"),
          children: "Preview"
        })
      })]
    }), /* @__PURE__ */ jsxs(Tab.Panels, {
      className: "max-h-[540px] h-[540px] overflow-y-auto border rounded-lg",
      children: [/* @__PURE__ */ jsx(Tab.Panel, {
        children: /* @__PURE__ */ jsx("textarea", {
          value,
          className: "h-[540px] resize-none p-4 w-full border-0 focus:border-0 focus:ring-0",
          ...props
        })
      }), /* @__PURE__ */ jsx(Tab.Panel, {
        children: /* @__PURE__ */ jsx("div", {
          className: "prose max-w-none p-4 prose-blue prose-img:rounded-lg",
          dangerouslySetInnerHTML: {
            __html: marked(DOMPurify.sanitize(value))
          }
        })
      })]
    })]
  });
}
function InputFile({
  onChange,
  accept = ".jpg, .png, .jpeg"
}) {
  return /* @__PURE__ */ jsx("input", {
    accept,
    onChange,
    type: "file",
    className: "file:bg-gray-200 file:hover:bg-gray-300 file:transition file:duration-200  file:mr-3 file:text-black file:text-sm file:font-medium file:px-2 file:py-2 file:rounded-lg file:border-0"
  });
}
function Label({
  forInput,
  value,
  className,
  children
}) {
  return /* @__PURE__ */ jsx("label", {
    htmlFor: forInput,
    className: `block font-medium mb-1 capitalize text-sm text-gray-700 ` + className,
    children: value ? value : children
  });
}
function MultipleSelect({
  data,
  selectedItem,
  onChange
}) {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Listbox, {
    as: "div",
    className: "relative rounded-xl",
    value: selectedItem,
    onChange,
    multiple: true,
    open: isOpen,
    children: [/* @__PURE__ */ jsxs(Listbox.Button, {
      className: "flex h-11 w-full items-center justify-between gap-x-2 rounded-lg border px-3 focus:outline-none",
      children: ["Selected (", selectedItem.length, ")", /* @__PURE__ */ jsx("div", {
        onClick: () => setIsOpen(!isOpen),
        children: /* @__PURE__ */ jsx("svg", {
          className: "h-5 w-5 text-gray-400",
          viewBox: "0 0 20 20",
          fill: "none",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx("path", {
            d: "M7 7l3-3 3 3m0 6l-3 3-3-3",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      })]
    }), selectedItem.length ? /* @__PURE__ */ jsx("small", {
      className: "mt-2 flex items-center flex-wrap gap-2 text-xs text-blue-600",
      children: selectedItem.map((item) => /* @__PURE__ */ jsxs("div", {
        className: "group flex overflow-hidden select-none rounded bg-gray-100",
        children: [/* @__PURE__ */ jsx("span", {
          className: "px-2 py-1 font-medium text-black",
          children: item.name
        }), /* @__PURE__ */ jsx("button", {
          value: item.id,
          onClick: (e2) => {
            e2.preventDefault();
            onChange(selectedItem.filter((item2) => item2.id != e2.currentTarget.value));
          },
          className: "px-2 py-1 font-bold text-black hover:bg-gray-200 focus:outline-none group-hover:bg-rose-200 group-hover:text-rose-900",
          children: /* @__PURE__ */ jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-3 w-3",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /* @__PURE__ */ jsx("path", {
              fillRule: "evenodd",
              d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
              clipRule: "evenodd"
            })
          })
        })]
      }, item.id))
    }) : null, /* @__PURE__ */ jsx(Transition, {
      as: Fragment$1,
      enter: "transition ease-out duration-100",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(Listbox.Options, {
        className: "absolute right-0 mt-1 max-h-96 w-full overflow-y-auto rounded-lg border bg-white py-1 shadow-sm",
        children: data.map((item) => /* @__PURE__ */ jsx(Listbox.Option, {
          value: item,
          children: ({
            selected,
            active
          }) => /* @__PURE__ */ jsxs("div", {
            className: clsx("flex text-sm cursor-pointer items-center py-1.5 px-4", active && "bg-gray-100"),
            children: [(selected || selectedItem.find((i2) => i2.id == item.id)) && /* @__PURE__ */ jsx("svg", {
              className: clsx((selected || selectedItem.find((i2) => i2.id == item.id)) && "-mr-4", "h-4 w-4 text-green-400"),
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              children: /* @__PURE__ */ jsx("path", {
                fillRule: "evenodd",
                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                clipRule: "evenodd"
              })
            }), /* @__PURE__ */ jsx("span", {
              className: clsx(selected && "ml-9", "ml-6 select-none"),
              children: item.name
            })]
          })
        }, item.id))
      })
    })]
  });
}
function Select({
  data,
  value,
  onChange,
  placeholder = "Select one"
}) {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Listbox, {
    as: "div",
    className: "relative rounded-xl",
    value,
    onChange: (e2) => {
      onChange(e2);
      setIsOpen(true);
    },
    open: isOpen,
    children: [/* @__PURE__ */ jsxs(Listbox.Button, {
      className: "flex h-11 w-full items-center justify-between gap-x-2 rounded-lg border px-3 focus:outline-none",
      children: [/* @__PURE__ */ jsx("span", {
        className: "capitalize line-clamp-1",
        children: value.name || placeholder
      }), /* @__PURE__ */ jsx("div", {
        onClick: () => setIsOpen(!isOpen),
        children: /* @__PURE__ */ jsx("svg", {
          className: "h-5 w-5 text-gray-400",
          viewBox: "0 0 20 20",
          fill: "none",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx("path", {
            d: "M7 7l3-3 3 3m0 6l-3 3-3-3",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      })]
    }), /* @__PURE__ */ jsx(Transition, {
      as: Fragment$1,
      enter: "transition ease-out duration-100",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(Listbox.Options, {
        className: "z-50 absolute right-0 mt-1 max-h-[10rem] w-full overflow-y-auto rounded-lg border bg-white py-1 shadow-sm",
        children: data.map((item) => /* @__PURE__ */ jsx(Listbox.Option, {
          value: item,
          children: ({
            selected,
            active
          }) => /* @__PURE__ */ jsx("div", {
            className: clsx("flex cursor-pointer text-sm items-center py-1.5 px-4", active && "bg-gray-100", selected && "bg-primary-50 font-semibold text-primary-600 hover:bg-primary-100"),
            children: /* @__PURE__ */ jsx("span", {
              className: "capitalize line-clamp-1",
              children: item.name
            })
          })
        }, item.id))
      })
    })]
  });
}
function Textarea({
  ...props
}) {
  return /* @__PURE__ */ jsx("textarea", {
    className: "w-full focus:outline-none rounded-lg border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-400 transition duration-200",
    ...props
  });
}
function ArticleForm({
  data,
  setData
}) {
  const {
    errors,
    tags,
    categories,
    statuses,
    auth
  } = usePage().props;
  const onChange = (e2) => setData(e2.target.name, e2.target.value);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "mb-6",
      children: [/* @__PURE__ */ jsx(Label, {
        forInput: "picture",
        value: "Picture"
      }), /* @__PURE__ */ jsx(InputFile, {
        name: "picture",
        id: "picture",
        onChange: (e2) => setData("picture", e2.target.files[0])
      }), errors.picture ? /* @__PURE__ */ jsx(Error$1, {
        value: errors.picture
      }) : null]
    }), /* @__PURE__ */ jsxs("div", {
      className: "grid grid-cols-12 gap-6 mb-6",
      children: [/* @__PURE__ */ jsx("div", {
        className: "col-span-4",
        children: /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx(Label, {
            forInput: "category_id",
            children: "Category"
          }), /* @__PURE__ */ jsx(Select, {
            value: data.category_id,
            data: categories,
            onChange: (e2) => setData("category_id", e2)
          }), errors.category_id ? /* @__PURE__ */ jsx(Error$1, {
            value: errors.category_id
          }) : null]
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "col-span-8",
        children: /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx(Label, {
            forInput: "tags",
            children: "Tags"
          }), /* @__PURE__ */ jsx(MultipleSelect, {
            selectedItem: data.tags,
            data: tags,
            onChange: (e2) => setData("tags", e2)
          }), errors.tags ? /* @__PURE__ */ jsx(Error$1, {
            value: errors.tags
          }) : null]
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "mb-6",
      children: [/* @__PURE__ */ jsx(Label, {
        forInput: "title",
        value: "Title"
      }), /* @__PURE__ */ jsx(Input, {
        name: "title",
        id: "title",
        onChange,
        value: data.title
      }), errors.title ? /* @__PURE__ */ jsx(Error$1, {
        value: errors.title
      }) : null]
    }), /* @__PURE__ */ jsxs("div", {
      className: "mb-6",
      children: [/* @__PURE__ */ jsx(Label, {
        forInput: "teaser",
        value: "teaser"
      }), /* @__PURE__ */ jsx(Textarea, {
        name: "teaser",
        id: "teaser",
        onChange,
        value: data.teaser
      }), errors.teaser ? /* @__PURE__ */ jsx(Error$1, {
        value: errors.teaser
      }) : null]
    }), /* @__PURE__ */ jsxs("div", {
      className: "mb-6",
      children: [/* @__PURE__ */ jsx(Editor, {
        name: "body",
        id: "body",
        onChange,
        value: data.body
      }), errors.body ? /* @__PURE__ */ jsx(Error$1, {
        value: errors.body
      }) : null]
    }), auth.user.isAdmin ? /* @__PURE__ */ jsx("div", {
      className: "grid grid-cols-12 gap-6 mb-6",
      children: /* @__PURE__ */ jsx("div", {
        className: "col-span-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "mb-6",
          children: [/* @__PURE__ */ jsx(Select, {
            value: data.status,
            data: statuses,
            onChange: (e2) => setData("status", e2)
          }), errors.status ? /* @__PURE__ */ jsx(Error$1, {
            value: errors.status
          }) : null]
        })
      })
    }) : null]
  });
}
function Create({
  statuses,
  tags
}) {
  const {
    data,
    setData
  } = useForm({
    title: "",
    teaser: "",
    category_id: "",
    body: "",
    picture: "",
    tags: [tags[0], tags[1]],
    status: statuses[0]
  });
  const onSubmit = (e2) => {
    e2.preventDefault();
    Inertia.post(route("articles.store"), {
      ...data,
      category_id: data.category_id.id,
      status: data.status.id,
      tags: data.tags.map((t4) => t4.id)
    });
  };
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Create new article"
    }), /* @__PURE__ */ jsxs(Header, {
      children: [/* @__PURE__ */ jsx(Header.Title, {
        children: data.title || "The title..."
      }), /* @__PURE__ */ jsx(Header.Subtitle, {
        children: data.teaser || "The teaser..."
      })]
    }), /* @__PURE__ */ jsx(Container, {
      children: /* @__PURE__ */ jsxs("form", {
        onSubmit,
        children: [/* @__PURE__ */ jsx(ArticleForm, {
          data,
          setData
        }), /* @__PURE__ */ jsx(Button, {
          children: "Create"
        })]
      })
    })]
  });
}
Create.layout = (page) => /* @__PURE__ */ jsx(App, {
  children: page
});
const Create$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
function Edit({
  article,
  statuses
}) {
  const {
    data,
    setData
  } = useForm({
    title: article.title,
    teaser: article.teaser,
    category_id: article.category,
    body: article.body,
    picture: "",
    tags: article.tags,
    status: statuses.find((i2) => i2.id == article.status)
  });
  const onSubmit = (e2) => {
    e2.preventDefault();
    Inertia.post(route("articles.update", article.slug), {
      ...data,
      _method: "PUT",
      category_id: data.category_id.id,
      status: data.status.id,
      tags: data.tags.map((t4) => t4.id)
    });
  };
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Create new article"
    }), /* @__PURE__ */ jsxs(Header, {
      children: [/* @__PURE__ */ jsx(Header.Title, {
        children: data.title || "The title..."
      }), /* @__PURE__ */ jsx(Header.Subtitle, {
        children: data.teaser || "The teaser..."
      })]
    }), /* @__PURE__ */ jsx(Container, {
      children: /* @__PURE__ */ jsxs("form", {
        onSubmit,
        children: [/* @__PURE__ */ jsx(ArticleForm, {
          data,
          setData
        }), /* @__PURE__ */ jsx(Button, {
          children: "Update"
        })]
      })
    })]
  });
}
Edit.layout = (page) => /* @__PURE__ */ jsx(App, {
  children: page
});
const Edit$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
function Grid({
  className = "",
  cols = 3,
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    className: clsx(className, cols == 3 && "lg:grid-cols-3", cols == 2 && "lg:grid-cols-2", cols == 4 && "lg:grid-cols-4", "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8"),
    children
  });
}
function ArticleBlock({
  article
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "border shadow-sm rounded-lg overflow-hidden",
    children: [article.picture ? /* @__PURE__ */ jsx(Link$1, {
      href: route("articles.show", article.slug),
      children: /* @__PURE__ */ jsx("img", {
        src: article.picture,
        alt: ""
      })
    }) : null, /* @__PURE__ */ jsxs("div", {
      className: "px-4 py-4",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "mb-1",
        children: [article.tags.length ? /* @__PURE__ */ jsx("div", {
          className: "text-[10px] font-semibold tracking-tight space-x-1 mb-1.5",
          children: article.tags.map((tag) => /* @__PURE__ */ jsx(Link$1, {
            href: route("tags.show", tag.slug),
            className: "text-white hover:bg-blue-600 bg-blue-500 transition duration-200 px-2 py-1 rounded-md",
            children: tag.name
          }, tag.slug))
        }) : null, /* @__PURE__ */ jsx(Link$1, {
          href: route("articles.show", article.slug),
          children: /* @__PURE__ */ jsx("h1", {
            className: "text-gray-800 text-sm md:line-clamp-1 font-semibold tracking-tight",
            children: article.title
          })
        })]
      }), /* @__PURE__ */ jsxs("small", {
        className: "text-xs text-gray-500 md:mt-4",
        children: [article.created_at, " by", " ", /* @__PURE__ */ jsx(Link$1, {
          className: "underline",
          href: `/${article.author.username}`,
          children: article.author.name
        })]
      })]
    })]
  });
}
function Pagination({
  meta,
  links
}) {
  return /* @__PURE__ */ jsx("div", {
    children: meta.links.length > 2 && /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsxs("ul", {
        className: "flex mt-10 justify-between md:hidden items-center gap-x-0.5",
        children: [links.prev ? /* @__PURE__ */ jsx("li", {
          children: /* @__PURE__ */ jsx(Link$1, {
            className: "rounded border inline-flex p-2",
            href: links.prev,
            preserveScroll: true,
            children: /* @__PURE__ */ jsx(LeftIcon, {})
          })
        }) : /* @__PURE__ */ jsx("li", {
          className: "rounded border inline-flex p-2 cursor-none",
          children: /* @__PURE__ */ jsx(LeftIcon, {})
        }), links.next ? /* @__PURE__ */ jsx("li", {
          children: /* @__PURE__ */ jsx(Link$1, {
            className: "rounded border inline-flex p-2",
            href: links.next,
            preserveScroll: true,
            children: /* @__PURE__ */ jsx(RightIcon, {})
          })
        }) : /* @__PURE__ */ jsx("li", {
          className: "rounded border inline-flex p-2 cursor-none",
          children: /* @__PURE__ */ jsx(RightIcon, {})
        })]
      }), /* @__PURE__ */ jsx("ul", {
        className: "hidden mt-10 justify-center md:flex items-center gap-x-1",
        children: meta.links.map((item, i2) => {
          return item.url != null ? item.label.includes("Previous") ? /* @__PURE__ */ jsx(PaginateLink, {
            active: item.active,
            href: item.url,
            children: /* @__PURE__ */ jsx(LeftIcon, {})
          }, i2) : item.label.includes("Next") ? /* @__PURE__ */ jsx(PaginateLink, {
            active: item.active,
            href: item.url,
            children: /* @__PURE__ */ jsx(RightIcon, {})
          }, i2) : /* @__PURE__ */ jsx(PaginateLink, {
            active: item.active,
            href: item.url,
            children: item.label
          }, i2) : null;
        })
      }), " "]
    })
  });
}
function LeftIcon() {
  return /* @__PURE__ */ jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
      clipRule: "evenodd"
    })
  });
}
function RightIcon() {
  return /* @__PURE__ */ jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
      clipRule: "evenodd"
    })
  });
}
function PaginateLink({
  active,
  href,
  children
}) {
  return /* @__PURE__ */ jsx("li", {
    children: /* @__PURE__ */ jsx(Link$1, {
      className: clsx(active && "text-blue-600 border-blue-300 bg-blue-50", "w-11 h-9 text-sm font-semibold rounded shadow-sm border flex items-center justify-center"),
      href,
      preserveScroll: true,
      children
    })
  });
}
function Index({
  category,
  ...props
}) {
  const {
    data: articles,
    meta,
    links
  } = props.articles;
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "The articles"
    }), /* @__PURE__ */ jsxs(Header, {
      children: [/* @__PURE__ */ jsx(Header.Title, {
        children: "The articles"
      }), /* @__PURE__ */ jsx(Header.Subtitle, {
        children: "Read if you need it!"
      })]
    }), /* @__PURE__ */ jsx(Container, {
      children: articles.length ? /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(Grid, {
          children: articles.map((article) => /* @__PURE__ */ jsx(ArticleBlock, {
            article
          }, article.slug))
        }), /* @__PURE__ */ jsx(Pagination, {
          meta,
          links
        })]
      }) : /* @__PURE__ */ jsx("p", {
        children: "No articles yet."
      })
    })]
  });
}
Index.layout = (page) => /* @__PURE__ */ jsx(App, {
  children: page
});
const Index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
function Markdown({
  children
}) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return /* @__PURE__ */ jsx("div", {
    className: "prose max-w-none prose-blue prose-img:rounded-lg",
    dangerouslySetInnerHTML: {
      __html: DOMPurify.sanitize(children)
    }
  });
}
function Show$6(props) {
  const {
    data: article,
    related: articles
  } = props.article;
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Head, {
      title: article.title
    }), /* @__PURE__ */ jsxs(Header, {
      children: [/* @__PURE__ */ jsxs("div", {
        className: "mb-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-gray-400 text-sm mb-4",
          children: ["Fill in:", " ", /* @__PURE__ */ jsx(Link$1, {
            className: "text-white underline",
            href: route("categories.show", article.category.slug),
            children: article.category.name
          }), " by ", /* @__PURE__ */ jsx(Link$1, {
            className: "text-white underline",
            href: `/${article.author.username}`,
            children: article.author.name
          })]
        }), article.tags.length ? /* @__PURE__ */ jsx("div", {
          className: "flex items-center gap-x-2",
          children: article.tags.map((tag) => /* @__PURE__ */ jsx(Link$1, {
            className: "bg-gray-700 text-white px-2 py-1 text-xs font-medium hover:bg-gray-600 transition duration-200 rounded shadow border-t border-gray-600",
            href: "#",
            children: tag.name
          }, tag.slug))
        }) : null]
      }), /* @__PURE__ */ jsx(Header.Title, {
        children: article.title
      }), /* @__PURE__ */ jsx(Header.Subtitle, {
        children: article.teaser
      })]
    }), /* @__PURE__ */ jsx(Container, {
      children: /* @__PURE__ */ jsxs("div", {
        className: "grid grid-cols-12 gap-16",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "col-span-8",
          children: [article.picture ? /* @__PURE__ */ jsx("img", {
            className: "rounded mb-6 w-full",
            src: article.picture,
            alt: ""
          }) : null, /* @__PURE__ */ jsx(Markdown, {
            children: article.body
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "col-span-4",
          children: [/* @__PURE__ */ jsxs("h4", {
            className: "text-xl font-semibold text-black border-b pb-2 mb-4",
            children: ["More about ", article.category.name]
          }), articles.length ? /* @__PURE__ */ jsx("ul", {
            className: "space-y-2",
            children: articles.map((article2) => /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx(Link$1, {
                className: "line-clamp-2 text-blue-600 underline decoration-blue-500",
                href: route("articles.show", article2.slug),
                children: article2.title
              })
            }, article2.slug))
          }) : null]
        })]
      })
    })]
  });
}
Show$6.layout = (page) => /* @__PURE__ */ jsx(App, {
  children: page
});
const Show$7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$6
}, Symbol.toStringTag, { value: "Module" }));
const Table$1 = ({
  children,
  className = ""
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: clsx(className, "flex flex-col"),
    children: /* @__PURE__ */ jsx("div", {
      className: "overflow-x-auto",
      children: /* @__PURE__ */ jsx("div", {
        className: "inline-block min-w-full align-middle",
        children: /* @__PURE__ */ jsx("table", {
          className: "min-w-full divide-y divide-gray-200",
          children
        })
      })
    })
  });
};
const Thead = ({
  className,
  children
}) => {
  return /* @__PURE__ */ jsx("thead", {
    className,
    children
  });
};
const Tbody = ({
  children
}) => {
  return /* @__PURE__ */ jsx("tbody", {
    className: "divide-y divide-gray-200 bg-white",
    children
  });
};
const Td = ({
  className = "",
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx("td", {
    ...props,
    className: clsx(className, "whitespace-nowrap px-6 py-4"),
    children
  });
};
const Th = ({
  className,
  children
}) => {
  return /* @__PURE__ */ jsx("th", {
    scope: "col",
    className: clsx(className, "whitespace-nowrap px-6 py-3 text-left text-sm font-semibold text-black"),
    children
  });
};
const DropdownItem = ({
  children,
  className = "",
  ...props
}) => {
  return /* @__PURE__ */ jsx(Menu.Item, {
    children: ({
      active
    }) => /* @__PURE__ */ jsx(Link$1, {
      ...props,
      preserveScroll: true,
      className: clsx(className, "block w-full py-2 px-4 text-left text-xs font-medium text-black hover:bg-blue-50 hover:text-blue-600"),
      children
    })
  });
};
const DropdownButton = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(Menu.Item, {
    children: /* @__PURE__ */ jsx("button", {
      ...props,
      className: clsx(className, "block w-full py-2 px-4 text-left text-xs font-medium text-black hover:bg-blue-50 hover:text-blue-600"),
      children: props.children
    })
  });
};
const Dropdown = ({
  className,
  children
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: "relative",
    children: /* @__PURE__ */ jsxs(Menu, {
      children: [/* @__PURE__ */ jsx(Menu.Button, {
        children: /* @__PURE__ */ jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "inline h-5 w-5",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          })
        })
      }), /* @__PURE__ */ jsx(Menu.Items, {
        className: "absolute top-0 right-7 z-10 w-56 divide-y overflow-hidden rounded-md border bg-white py-0.5 text-left shadow-sm",
        children
      })]
    })
  });
};
Table$1.Thead = Thead;
Table$1.Tbody = Tbody;
Table$1.Td = Td;
Table$1.Th = Th;
Table$1.Dropdown = Dropdown;
Table$1.DropdownItem = DropdownItem;
Table$1.DropdownButton = DropdownButton;
const Table$2 = Table$1;
function useSwal() {
  const ask = ({
    url,
    message = "Make sure you make good decisions!",
    method = "post",
    data = []
  }) => {
    swal({
      text: message,
      buttons: ["Nope", "Yap"]
    }).then((value) => {
      if (value == true) {
        Inertia[method](url, data, {
          preserveScroll: true,
          onSuccess: () => toast.success("Done.")
        });
      }
    });
  };
  return {
    ask
  };
}
function ArticleTable(props) {
  const {
    data: articles,
    meta,
    links
  } = props.articles;
  const {
    ask
  } = useSwal();
  return /* @__PURE__ */ jsxs(Container, {
    children: [/* @__PURE__ */ jsxs(Table$2, {
      children: [/* @__PURE__ */ jsx(Table$2.Thead, {
        children: /* @__PURE__ */ jsxs("tr", {
          children: [/* @__PURE__ */ jsx(Table$2.Th, {
            children: "#"
          }), /* @__PURE__ */ jsx(Table$2.Th, {
            children: "Title"
          }), /* @__PURE__ */ jsx(Table$2.Th, {
            children: "Category"
          }), /* @__PURE__ */ jsx(Table$2.Th, {
            children: "Tags"
          }), /* @__PURE__ */ jsx(Table$2.Th, {
            children: "Status"
          }), /* @__PURE__ */ jsx("th", {})]
        })
      }), /* @__PURE__ */ jsx(Table$2.Tbody, {
        children: articles.length ? articles.map((article, i2) => /* @__PURE__ */ jsxs("tr", {
          children: [/* @__PURE__ */ jsx(Table$2.Td, {
            children: meta.from + i2
          }), /* @__PURE__ */ jsx(Table$2.Td, {
            children: /* @__PURE__ */ jsx(Link$1, {
              href: article.url,
              children: article.title
            })
          }), /* @__PURE__ */ jsx(Table$2.Td, {
            children: /* @__PURE__ */ jsx(Link$1, {
              href: article.category.url,
              children: article.category.name
            })
          }), /* @__PURE__ */ jsx(Table$2.Td, {
            children: /* @__PURE__ */ jsx("div", {
              className: "flex gap-x-1",
              children: article.tags.map((tag, i22) => /* @__PURE__ */ jsx(Link$1, {
                className: "bg-gray-100 hover:bg-gray-300 transition font-medium text-xs px-2 py-1 rounded",
                href: tag.url,
                children: tag.name
              }, i22))
            })
          }), /* @__PURE__ */ jsx(Table$2.Td, {
            children: /* @__PURE__ */ jsx("span", {
              className: clsx(article.status == "Published" && "bg-green-100 text-green-800", article.status == "Unpublished" && "bg-orange-100 text-orange-800", article.status == "Preview" && "bg-sky-100 text-sky-800", "px-2 py-1 rounded text-xs font-semibold"),
              children: article.status
            })
          }), /* @__PURE__ */ jsx("td", {
            children: /* @__PURE__ */ jsxs(Table$2.Dropdown, {
              children: [/* @__PURE__ */ jsx(Table$2.DropdownItem, {
                href: route("articles.show", article.slug),
                children: "View"
              }), /* @__PURE__ */ jsx(Table$2.DropdownItem, {
                href: route("articles.edit", article.slug),
                children: "Edit"
              }), /* @__PURE__ */ jsx(Table$2.DropdownButton, {
                onClick: () => {
                  ask({
                    url: route("articles.destroy", article.slug),
                    method: "delete",
                    message: "You sure you want to delete it ?"
                  });
                },
                className: "hover:bg-rose-50 hover:text-rose-500",
                children: "Delete"
              })]
            })
          })]
        }, article.id)) : /* @__PURE__ */ jsx("tr", {
          children: /* @__PURE__ */ jsx(Table$2.Td, {
            children: /* @__PURE__ */ jsx("p", {
              children: "You don't have any articles yet."
            })
          })
        })
      })]
    }), /* @__PURE__ */ jsx(Pagination, {
      meta,
      links
    })]
  });
}
ArticleTable.layout = (page) => /* @__PURE__ */ jsx(App, {
  children: page
});
const Table = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ArticleTable
}, Symbol.toStringTag, { value: "Module" }));
function Guest({
  children
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100",
    children: [/* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx(Link$1, {
        href: "/",
        children: /* @__PURE__ */ jsx(ApplicationLogo, {
          className: "w-20 h-20 fill-current text-gray-500"
        })
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",
      children
    })]
  });
}
function ValidationErrors({
  errors
}) {
  return Object.keys(errors).length > 0 && /* @__PURE__ */ jsxs("div", {
    className: "mb-4",
    children: [/* @__PURE__ */ jsx("div", {
      className: "font-medium text-red-600",
      children: "Whoops! Something went wrong."
    }), /* @__PURE__ */ jsx("ul", {
      className: "mt-3 list-disc list-inside text-sm text-red-600",
      children: Object.keys(errors).map(function(key, index) {
        return /* @__PURE__ */ jsx("li", {
          children: errors[key]
        }, index);
      })
    })]
  });
}
function ConfirmPassword() {
  const {
    data,
    setData,
    post,
    processing,
    errors,
    reset
  } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const onChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e2) => {
    e2.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Confirm Password"
    }), /* @__PURE__ */ jsx("div", {
      className: "mb-4 text-sm text-gray-600",
      children: "This is a secure area of the application. Please confirm your password before continuing."
    }), /* @__PURE__ */ jsx(ValidationErrors, {
      errors
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit: submit,
      children: [/* @__PURE__ */ jsxs("div", {
        className: "mt-4",
        children: [/* @__PURE__ */ jsx(Label, {
          forInput: "password",
          value: "Password"
        }), /* @__PURE__ */ jsx(Input, {
          type: "password",
          name: "password",
          value: data.password,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "flex items-center justify-end mt-4",
        children: /* @__PURE__ */ jsx(Button, {
          className: "ml-4",
          processing,
          children: "Confirm"
        })
      })]
    })]
  });
}
ConfirmPassword.layout = (page) => /* @__PURE__ */ jsx(Guest, {
  children: page
});
const ConfirmPassword$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPassword({
  status
}) {
  const {
    data,
    setData,
    post,
    processing,
    errors
  } = useForm({
    email: ""
  });
  const onChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e2) => {
    e2.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Forgot Password"
    }), /* @__PURE__ */ jsx("div", {
      className: "mb-4 text-sm text-gray-500 leading-normal",
      children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
    }), status && /* @__PURE__ */ jsx("div", {
      className: "mb-4 font-medium text-sm text-green-600",
      children: status
    }), /* @__PURE__ */ jsx(ValidationErrors, {
      errors
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit: submit,
      children: [/* @__PURE__ */ jsx(Input, {
        type: "text",
        name: "email",
        value: data.email,
        className: "mt-1 block w-full",
        isFocused: true,
        onChange
      }), /* @__PURE__ */ jsx("div", {
        className: "flex items-center justify-end mt-4",
        children: /* @__PURE__ */ jsx(Button, {
          className: "ml-4",
          processing,
          children: "Email Password Reset Link"
        })
      })]
    })]
  });
}
ForgotPassword.layout = (page) => /* @__PURE__ */ jsx(Guest, {
  children: page
});
const ForgotPassword$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
function Checkbox({
  className,
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxs("label", {
    className: clsx("flex items-center gap-x-2.5", className),
    children: [/* @__PURE__ */ jsx("input", {
      ...props,
      type: "checkbox",
      className: "rounded border-gray-300 text-blue-600 shadow-sm focus:ring-0 focus:ring-offset-0"
    }), /* @__PURE__ */ jsx("span", {
      className: "select-none text-gray-600",
      children: label
    })]
  });
}
function Login({
  status,
  canResetPassword
}) {
  const {
    data,
    setData,
    post,
    processing,
    errors,
    reset
  } = useForm({
    email: "",
    password: "",
    remember: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const onChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const submit = (e2) => {
    e2.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Log in"
    }), status && /* @__PURE__ */ jsx("div", {
      className: "mb-4 font-medium text-sm text-green-600",
      children: status
    }), /* @__PURE__ */ jsx(ValidationErrors, {
      errors
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit: submit,
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(Label, {
          forInput: "email",
          value: "Email"
        }), /* @__PURE__ */ jsx(Input, {
          type: "text",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          autoComplete: "username",
          isFocused: true,
          onChange
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-6",
        children: [/* @__PURE__ */ jsx(Label, {
          forInput: "password",
          value: "Password"
        }), /* @__PURE__ */ jsx(Input, {
          type: "password",
          name: "password",
          value: data.password,
          className: "mt-1 block w-full",
          autoComplete: "current-password",
          onChange
        })]
      }), /* @__PURE__ */ jsx(Checkbox, {
        className: "mt-6",
        name: "remember",
        label: "Remember me",
        value: data.remember,
        onChange
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex items-center justify-end mt-6",
        children: [canResetPassword && /* @__PURE__ */ jsx(Link$1, {
          href: route("password.request"),
          className: "underline text-sm text-gray-600 hover:text-gray-900",
          children: "Forgot your password?"
        }), /* @__PURE__ */ jsx(Button, {
          className: "ml-4",
          processing,
          children: "Log in"
        })]
      })]
    })]
  });
}
Login.layout = (page) => /* @__PURE__ */ jsx(Guest, {
  children: page
});
const Login$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
function Register() {
  const {
    data,
    setData,
    post,
    processing,
    errors,
    reset
  } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const onChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const submit = (e2) => {
    e2.preventDefault();
    post(route("register"));
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Register"
    }), /* @__PURE__ */ jsx(ValidationErrors, {
      errors
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit: submit,
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(Label, {
          forInput: "name",
          value: "Name"
        }), /* @__PURE__ */ jsx(Input, {
          type: "text",
          name: "name",
          value: data.name,
          className: "mt-1 block w-full",
          autoComplete: "name",
          isFocused: true,
          onChange,
          required: true
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4",
        children: [/* @__PURE__ */ jsx(Label, {
          forInput: "email",
          value: "Email"
        }), /* @__PURE__ */ jsx(Input, {
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          autoComplete: "username",
          onChange,
          required: true
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4",
        children: [/* @__PURE__ */ jsx(Label, {
          forInput: "password",
          value: "Password"
        }), /* @__PURE__ */ jsx(Input, {
          type: "password",
          name: "password",
          value: data.password,
          className: "mt-1 block w-full",
          autoComplete: "new-password",
          onChange,
          required: true
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4",
        children: [/* @__PURE__ */ jsx(Label, {
          forInput: "password_confirmation",
          value: "Confirm Password"
        }), /* @__PURE__ */ jsx(Input, {
          type: "password",
          name: "password_confirmation",
          value: data.password_confirmation,
          className: "mt-1 block w-full",
          onChange,
          required: true
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex items-center justify-end mt-4",
        children: [/* @__PURE__ */ jsx(Link$1, {
          href: route("login"),
          className: "underline text-sm text-gray-600 hover:text-gray-900",
          children: "Already registered?"
        }), /* @__PURE__ */ jsx(Button, {
          className: "ml-4",
          processing,
          children: "Register"
        })]
      })]
    })]
  });
}
Register.layout = (page) => /* @__PURE__ */ jsx(Guest, {
  children: page
});
const Register$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
function ResetPassword({
  token,
  email
}) {
  const {
    data,
    setData,
    post,
    processing,
    errors,
    reset
  } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const onChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e2) => {
    e2.preventDefault();
    post(route("password.update"));
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Reset Password"
    }), /* @__PURE__ */ jsx(ValidationErrors, {
      errors
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit: submit,
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(Label, {
          forInput: "email",
          value: "Email"
        }), /* @__PURE__ */ jsx(Input, {
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          autoComplete: "username",
          onChange
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4",
        children: [/* @__PURE__ */ jsx(Label, {
          forInput: "password",
          value: "Password"
        }), /* @__PURE__ */ jsx(Input, {
          type: "password",
          name: "password",
          value: data.password,
          className: "mt-1 block w-full",
          autoComplete: "new-password",
          isFocused: true,
          onChange
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4",
        children: [/* @__PURE__ */ jsx(Label, {
          forInput: "password_confirmation",
          value: "Confirm Password"
        }), /* @__PURE__ */ jsx(Input, {
          type: "password",
          name: "password_confirmation",
          value: data.password_confirmation,
          className: "mt-1 block w-full",
          autoComplete: "new-password",
          onChange
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "flex items-center justify-end mt-4",
        children: /* @__PURE__ */ jsx(Button, {
          className: "ml-4",
          processing,
          children: "Reset Password"
        })
      })]
    })]
  });
}
ResetPassword.layout = (page) => /* @__PURE__ */ jsx(Guest, {
  children: page
});
const ResetPassword$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
function VerifyEmail({
  status
}) {
  const {
    post,
    processing
  } = useForm();
  const submit = (e2) => {
    e2.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Email Verification"
    }), /* @__PURE__ */ jsx("div", {
      className: "mb-4 text-sm text-gray-600",
      children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
    }), status === "verification-link-sent" && /* @__PURE__ */ jsx("div", {
      className: "mb-4 font-medium text-sm text-green-600",
      children: "A new verification link has been sent to the email address you provided during registration."
    }), /* @__PURE__ */ jsx("form", {
      onSubmit: submit,
      children: /* @__PURE__ */ jsxs("div", {
        className: "mt-4 flex items-center justify-between",
        children: [/* @__PURE__ */ jsx(Button, {
          processing,
          children: "Resend Verification Email"
        }), /* @__PURE__ */ jsx(Link$1, {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 hover:text-gray-900",
          children: "Log Out"
        })]
      })
    })]
  });
}
VerifyEmail.layout = (page) => /* @__PURE__ */ jsx(Guest, {
  children: page
});
const VerifyEmail$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
function Show$4({
  category,
  ...props
}) {
  const {
    data: articles,
    meta,
    links
  } = props.articles;
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Head, {
      title: category.name
    }), /* @__PURE__ */ jsxs(Header, {
      children: [/* @__PURE__ */ jsx(Header.Title, {
        children: category.name
      }), /* @__PURE__ */ jsxs(Header.Subtitle, {
        children: ["This page will show you the articles about ", category.name]
      })]
    }), /* @__PURE__ */ jsx(Container, {
      children: articles.length ? /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(Grid, {
          className: "items-start",
          children: articles.map((article) => /* @__PURE__ */ jsx(ArticleBlock, {
            article
          }, article.slug))
        }), /* @__PURE__ */ jsx(Pagination, {
          meta,
          links
        })]
      }) : /* @__PURE__ */ jsx("p", {
        children: "No articles yet."
      })
    })]
  });
}
Show$4.layout = (page) => /* @__PURE__ */ jsx(App, {
  children: page
});
const Show$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$4
}, Symbol.toStringTag, { value: "Module" }));
function Dashboard() {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Dashboard"
    }), /* @__PURE__ */ jsx(Container, {
      children: "Dashboard"
    })]
  });
}
Dashboard.layout = (page) => /* @__PURE__ */ jsx(App, {
  children: page
});
const Dashboard$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
function Home({
  articles
}) {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "The Blog Ever"
    }), /* @__PURE__ */ jsxs(Header, {
      children: [/* @__PURE__ */ jsx(Header.Title, {
        children: "Consectetur"
      }), /* @__PURE__ */ jsx(Header.Subtitle, {
        children: "Lorem ipsum dolor sit amet consectetur adipisicing."
      }), /* @__PURE__ */ jsx(Header.Content, {
        children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque nisi eligendi accusantium debitis modi voluptatum eveniet repudiandae, alias ab odit dolores cupiditate aspernatur eius ipsam nemo, voluptate dolore voluptatem excepturi."
      })]
    }), /* @__PURE__ */ jsx(Container, {
      children: articles.length ? /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(Grid, {
          className: "items-start",
          children: articles.map((article) => /* @__PURE__ */ jsx(ArticleBlock, {
            article
          }, article.slug))
        }), /* @__PURE__ */ jsx(Link$1, {
          className: "text-blue-600 block mt-10",
          href: route("articles.index"),
          children: "Show more articles."
        })]
      }) : /* @__PURE__ */ jsx("p", {
        children: "No articles yet."
      })
    })]
  });
}
Home.layout = (page) => /* @__PURE__ */ jsx(App, {
  children: page
});
const Home$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
function Show$2({
  tag,
  ...props
}) {
  const {
    data: articles,
    meta,
    links
  } = props.articles;
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Head, {
      title: tag.name
    }), /* @__PURE__ */ jsxs(Header, {
      children: [/* @__PURE__ */ jsx(Header.Title, {
        children: tag.name
      }), /* @__PURE__ */ jsxs(Header.Subtitle, {
        children: ["This page will show you the articles about ", tag.name]
      })]
    }), /* @__PURE__ */ jsx(Container, {
      children: articles.length ? /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(Grid, {
          className: "items-start",
          children: articles.map((article) => /* @__PURE__ */ jsx(ArticleBlock, {
            article
          }, article.slug))
        }), /* @__PURE__ */ jsx(Pagination, {
          meta,
          links
        })]
      }) : /* @__PURE__ */ jsx("p", {
        children: "No articles yet."
      })
    })]
  });
}
Show$2.layout = (page) => /* @__PURE__ */ jsx(App, {
  children: page
});
const Show$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$2
}, Symbol.toStringTag, { value: "Module" }));
function Show({
  user,
  ...props
}) {
  const {
    data: articles,
    meta,
    links
  } = props.articles;
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Head, {
      title: user.name
    }), /* @__PURE__ */ jsxs(Header, {
      children: [/* @__PURE__ */ jsx(Header.Title, {
        children: user.name
      }), /* @__PURE__ */ jsxs(Header.Subtitle, {
        children: ["Joined ", user.joined, "."]
      })]
    }), /* @__PURE__ */ jsx(Container, {
      children: articles.length ? /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(Grid, {
          children: articles.map((article) => /* @__PURE__ */ jsx(ArticleBlock, {
            article
          }, article.slug))
        }), /* @__PURE__ */ jsx(Pagination, {
          meta,
          links
        })]
      }) : /* @__PURE__ */ jsx("p", {
        children: "No articles yet."
      })
    })]
  });
}
Show.layout = (page) => /* @__PURE__ */ jsx(App, {
  children: page
});
const Show$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show
}, Symbol.toStringTag, { value: "Module" }));
