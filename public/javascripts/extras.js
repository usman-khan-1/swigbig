﻿(function (aO, I) { function a0() { if (!ah.isReady) { try { M.documentElement.doScroll("left") } catch (c) { setTimeout(a0, 1); return } ah.ready() } } function E(s, c) { c.src ? ah.ajax({ url: c.src, async: false, dataType: "script" }) : ah.globalEval(c.text || c.textContent || c.innerHTML || ""); c.parentNode && c.parentNode.removeChild(c) } function ap(s, c, K, F, G, w) { var A = s.length; if (typeof c === "object") { for (var J in c) { ap(s, J, c[J], F, G, K) } return s } if (K !== I) { F = !w && F && ah.isFunction(K); for (J = 0; J < A; J++) { G(s[J], c, F ? K.call(s[J], J, G(s[J], c)) : K, w) } return s } return A ? G(s[0], c) : I } function aF() { return (new Date).getTime() } function ao() { return false } function am() { return true } function aK(s, c, w) { w[0].type = s; return ah.event.handle.apply(c, w) } function ag(O) { var N, L = [], J = [], K = arguments, F, G, s, A, w, c; G = ah.data(this, "events"); if (!(O.liveFired === this || !G || !G.live || O.button && O.type === "click")) { O.liveFired = this; var P = G.live.slice(0); for (A = 0; A < P.length; A++) { G = P[A]; G.origType.replace(az, "") === O.type ? J.push(G.selector) : P.splice(A--, 1) } F = ah(O.target).closest(J, O.currentTarget); w = 0; for (c = F.length; w < c; w++) { for (A = 0; A < P.length; A++) { G = P[A]; if (F[w].selector === G.selector) { s = F[w].elem; J = null; if (G.preType === "mouseenter" || G.preType === "mouseleave") { J = ah(O.relatedTarget).closest(G.selector)[0] } if (!J || J !== s) { L.push({ elem: s, handleObj: G }) } } } } w = 0; for (c = L.length; w < c; w++) { F = L[w]; O.currentTarget = F.elem; O.data = F.handleObj.data; O.handleObj = F.handleObj; if (F.handleObj.origHandler.apply(F.elem, K) === false) { N = false; break } } return N } } function z(s, c) { return "live." + (s && s !== "*" ? s + "." : "") + c.replace(/\./g, "`").replace(/ /g, "&") } function l(c) { return !c || !c.parentNode || c.parentNode.nodeType === 11 } function bj(s, c) { var w = 0; c.each(function () { if (this.nodeName === (s[w] && s[w].nodeName)) { var G = ah.data(s[w++]), J = ah.data(this, G); if (G = G && G.events) { delete J.handle; J.events = {}; for (var A in G) { for (var F in G[A]) { ah.event.add(this, A, G[A][F], G[A][F].data) } } } } }) } function a3(s, c, G) { var A, F, w; c = c && c[0] ? c[0].ownerDocument || c[0] : M; if (s.length === 1 && typeof s[0] === "string" && s[0].length < 512 && c === M && !aP.test(s[0]) && (ah.support.checkClone || !ak.test(s[0]))) { F = true; if (w = ah.fragments[s[0]]) { if (w !== 1) { A = w } } } if (!A) { A = c.createDocumentFragment(); ah.clean(s, c, A, G) } if (F) { ah.fragments[s[0]] = w ? A : 1 } return { fragment: A, cacheable: F} } function aC(s, c) { var w = {}; ah.each(D.concat.apply([], D.slice(0, c)), function () { w[this] = s }); return w } function o(c) { return "scrollTo" in c && c.document ? c : c.nodeType === 9 ? c.defaultView || c.parentWindow : false } var ah = function (s, c) { return new ah.fn.init(s, c) }, p = aO.jQuery, d = aO.$, M = aO.document, at, a7 = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/, aT = /^.[^:#\[\.,]*$/, an = /\S/, H = /^(\s|\u00A0)+|(\s|\u00A0)+$/g, q = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ax = navigator.userAgent, b = false, av = [], aB, a1 = Object.prototype.toString, aV = Object.prototype.hasOwnProperty, ay = Array.prototype.push, au = Array.prototype.slice, a6 = Array.prototype.indexOf; ah.fn = ah.prototype = { init: function (s, c) { var A, w; if (!s) { return this } if (s.nodeType) { this.context = this[0] = s; this.length = 1; return this } if (s === "body" && !c) { this.context = M; this[0] = M.body; this.selector = "body"; this.length = 1; return this } if (typeof s === "string") { if ((A = a7.exec(s)) && (A[1] || !c)) { if (A[1]) { w = c ? c.ownerDocument || c : M; if (s = q.exec(s)) { if (ah.isPlainObject(c)) { s = [M.createElement(s[1])]; ah.fn.attr.call(s, c, true) } else { s = [w.createElement(s[1])] } } else { s = a3([A[1]], [w]); s = (s.cacheable ? s.fragment.cloneNode(true) : s.fragment).childNodes } return ah.merge(this, s) } else { if (c = M.getElementById(A[2])) { if (c.id !== A[2]) { return at.find(s) } this.length = 1; this[0] = c } this.context = M; this.selector = s; return this } } else { if (!c && /^\w+$/.test(s)) { this.selector = s; this.context = M; s = M.getElementsByTagName(s); return ah.merge(this, s) } else { return !c || c.jquery ? (c || at).find(s) : ah(c).find(s) } } } else { if (ah.isFunction(s)) { return at.ready(s) } } if (s.selector !== I) { this.selector = s.selector; this.context = s.context } return ah.makeArray(s, this) }, selector: "", jquery: "1.4.2", length: 0, size: function () { return this.length }, toArray: function () { return au.call(this, 0) }, get: function (c) { return c == null ? this.toArray() : c < 0 ? this.slice(c)[0] : this[c] }, pushStack: function (s, c, A) { var w = ah(); ah.isArray(s) ? ay.apply(w, s) : ah.merge(w, s); w.prevObject = this; w.context = this.context; if (c === "find") { w.selector = this.selector + (this.selector ? " " : "") + A } else { if (c) { w.selector = this.selector + "." + c + "(" + A + ")" } } return w }, each: function (s, c) { return ah.each(this, s, c) }, ready: function (c) { ah.bindReady(); if (ah.isReady) { c.call(M, ah) } else { av && av.push(c) } return this }, eq: function (c) { return c === -1 ? this.slice(c) : this.slice(c, +c + 1) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, slice: function () { return this.pushStack(au.apply(this, arguments), "slice", au.call(arguments).join(",")) }, map: function (c) { return this.pushStack(ah.map(this, function (s, w) { return c.call(s, w, s) })) }, end: function () { return this.prevObject || ah(null) }, push: ay, sort: [].sort, splice: [].splice }; ah.fn.init.prototype = ah.fn; ah.extend = ah.fn.extend = function () { var s = arguments[0] || {}, c = 1, K = arguments.length, F = false, G, w, A, J; if (typeof s === "boolean") { F = s; s = arguments[1] || {}; c = 2 } if (typeof s !== "object" && !ah.isFunction(s)) { s = {} } if (K === c) { s = this; --c } for (; c < K; c++) { if ((G = arguments[c]) != null) { for (w in G) { A = s[w]; J = G[w]; if (s !== J) { if (F && J && (ah.isPlainObject(J) || ah.isArray(J))) { A = A && (ah.isPlainObject(A) || ah.isArray(A)) ? A : ah.isArray(J) ? [] : {}; s[w] = ah.extend(F, A, J) } else { if (J !== I) { s[w] = J } } } } } } return s }; ah.extend({ noConflict: function (c) { aO.$ = d; if (c) { aO.jQuery = p } return ah }, isReady: false, ready: function () { if (!ah.isReady) { if (!M.body) { return setTimeout(ah.ready, 13) } ah.isReady = true; if (av) { for (var s, c = 0; s = av[c++]; ) { s.call(M, ah) } av = null } ah.fn.triggerHandler && ah(M).triggerHandler("ready") } }, bindReady: function () { if (!b) { b = true; if (M.readyState === "complete") { return ah.ready() } if (M.addEventListener) { M.addEventListener("DOMContentLoaded", aB, false); aO.addEventListener("load", ah.ready, false) } else { if (M.attachEvent) { M.attachEvent("onreadystatechange", aB); aO.attachEvent("onload", ah.ready); var s = false; try { s = aO.frameElement == null } catch (c) { } M.documentElement.doScroll && s && a0() } } } }, isFunction: function (c) { return a1.call(c) === "[object Function]" }, isArray: function (c) { return a1.call(c) === "[object Array]" }, isPlainObject: function (s) { if (!s || a1.call(s) !== "[object Object]" || s.nodeType || s.setInterval) { return false } if (s.constructor && !aV.call(s, "constructor") && !aV.call(s.constructor.prototype, "isPrototypeOf")) { return false } var c; for (c in s) { } return c === I || aV.call(s, c) }, isEmptyObject: function (s) { for (var c in s) { return false } return true }, error: function (c) { throw c }, parseJSON: function (c) { if (typeof c !== "string" || !c) { return null } c = ah.trim(c); if (/^[\],:{}\s]*$/.test(c.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) { return aO.JSON && aO.JSON.parse ? aO.JSON.parse(c) : (new Function("return " + c))() } else { ah.error("Invalid JSON: " + c) } }, noop: function () { }, globalEval: function (s) { if (s && an.test(s)) { var c = M.getElementsByTagName("head")[0] || M.documentElement, w = M.createElement("script"); w.type = "text/javascript"; if (ah.support.scriptEval) { w.appendChild(M.createTextNode(s)) } else { w.text = s } c.insertBefore(w, c.firstChild); c.removeChild(w) } }, nodeName: function (s, c) { return s.nodeName && s.nodeName.toUpperCase() === c.toUpperCase() }, each: function (s, c, J) { var F, G = 0, w = s.length, A = w === I || ah.isFunction(s); if (J) { if (A) { for (F in s) { if (c.apply(s[F], J) === false) { break } } } else { for (; G < w; ) { if (c.apply(s[G++], J) === false) { break } } } } else { if (A) { for (F in s) { if (c.call(s[F], F, s[F]) === false) { break } } } else { for (J = s[0]; G < w && c.call(J, G, J) !== false; J = s[++G]) { } } } return s }, trim: function (c) { return (c || "").replace(H, "") }, makeArray: function (s, c) { c = c || []; if (s != null) { s.length == null || typeof s === "string" || ah.isFunction(s) || typeof s !== "function" && s.setInterval ? ay.call(c, s) : ah.merge(c, s) } return c }, inArray: function (s, c) { if (c.indexOf) { return c.indexOf(s) } for (var A = 0, w = c.length; A < w; A++) { if (c[A] === s) { return A } } return -1 }, merge: function (s, c) { var F = s.length, w = 0; if (typeof c.length === "number") { for (var A = c.length; w < A; w++) { s[F++] = c[w] } } else { for (; c[w] !== I; ) { s[F++] = c[w++] } } s.length = F; return s }, grep: function (s, c, G) { for (var A = [], F = 0, w = s.length; F < w; F++) { !G !== !c(s[F], F) && A.push(s[F]) } return A }, map: function (s, c, J) { for (var F = [], G, w = 0, A = s.length; w < A; w++) { G = c(s[w], w, J); if (G != null) { F[F.length] = G } } return F.concat.apply([], F) }, guid: 1, proxy: function (s, c, w) { if (arguments.length === 2) { if (typeof c === "string") { w = s; s = w[c]; c = I } else { if (c && !ah.isFunction(c)) { w = c; c = I } } } if (!c && s) { c = function () { return s.apply(w || this, arguments) } } if (s) { c.guid = s.guid = s.guid || c.guid || ah.guid++ } return c }, uaMatch: function (c) { c = c.toLowerCase(); c = /(webkit)[ \/]([\w.]+)/.exec(c) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(c) || /(msie) ([\w.]+)/.exec(c) || !/compatible/.test(c) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(c) || []; return { browser: c[1] || "", version: c[2] || "0"} }, browser: {} }); ax = ah.uaMatch(ax); if (ax.browser) { ah.browser[ax.browser] = true; ah.browser.version = ax.version } if (ah.browser.webkit) { ah.browser.safari = true } if (a6) { ah.inArray = function (s, c) { return a6.call(c, s) } } at = ah(M); if (M.addEventListener) { aB = function () { M.removeEventListener("DOMContentLoaded", aB, false); ah.ready() } } else { if (M.attachEvent) { aB = function () { if (M.readyState === "complete") { M.detachEvent("onreadystatechange", aB); ah.ready() } } } } (function () { ah.support = {}; var L = M.documentElement, K = M.createElement("script"), J = M.createElement("div"), F = "script" + aF(); J.style.display = "none"; J.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>"; var G = J.getElementsByTagName("*"), w = J.getElementsByTagName("a")[0]; if (!(!G || !G.length || !w)) { ah.support = { leadingWhitespace: J.firstChild.nodeType === 3, tbody: !J.getElementsByTagName("tbody").length, htmlSerialize: !!J.getElementsByTagName("link").length, style: /red/.test(w.getAttribute("style")), hrefNormalized: w.getAttribute("href") === "/a", opacity: /^0.55$/.test(w.style.opacity), cssFloat: !!w.style.cssFloat, checkOn: J.getElementsByTagName("input")[0].value === "on", optSelected: M.createElement("select").appendChild(M.createElement("option")).selected, parentNode: J.removeChild(J.appendChild(M.createElement("div"))).parentNode === null, deleteExpando: true, checkClone: false, scriptEval: false, noCloneEvent: true, boxModel: null }; K.type = "text/javascript"; try { K.appendChild(M.createTextNode("window." + F + "=1;")) } catch (A) { } L.insertBefore(K, L.firstChild); if (aO[F]) { ah.support.scriptEval = true; delete aO[F] } try { delete K.test } catch (c) { ah.support.deleteExpando = false } L.removeChild(K); if (J.attachEvent && J.fireEvent) { J.attachEvent("onclick", function s() { ah.support.noCloneEvent = false; J.detachEvent("onclick", s) }); J.cloneNode(true).fireEvent("onclick") } J = M.createElement("div"); J.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>"; L = M.createDocumentFragment(); L.appendChild(J.firstChild); ah.support.checkClone = L.cloneNode(true).cloneNode(true).lastChild.checked; ah(function () { var N = M.createElement("div"); N.style.width = N.style.paddingLeft = "1px"; M.body.appendChild(N); ah.boxModel = ah.support.boxModel = N.offsetWidth === 2; M.body.removeChild(N).style.display = "none" }); L = function (N) { var P = M.createElement("div"); N = "on" + N; var O = N in P; if (!O) { P.setAttribute(N, "return;"); O = typeof P[N] === "function" } return O }; ah.support.submitBubbles = L("submit"); ah.support.changeBubbles = L("change"); L = K = J = G = w = null } })(); ah.props = { "for": "htmlFor", "class": "className", readonly: "readOnly", maxlength: "maxLength", cellspacing: "cellSpacing", rowspan: "rowSpan", colspan: "colSpan", tabindex: "tabIndex", usemap: "useMap", frameborder: "frameBorder" }; var aH = "jQuery" + aF(), e = 0, aS = {}; ah.extend({ cache: {}, expando: aH, noData: { embed: true, object: true, applet: true }, data: function (s, c, F) { if (!(s.nodeName && ah.noData[s.nodeName.toLowerCase()])) { s = s == aO ? aS : s; var w = s[aH], A = ah.cache; if (!w && typeof c === "string" && F === I) { return null } w || (w = ++e); if (typeof c === "object") { s[aH] = w; A[w] = ah.extend(true, {}, c) } else { if (!A[w]) { s[aH] = w; A[w] = {} } } s = A[w]; if (F !== I) { s[c] = F } return typeof c === "string" ? s[c] : s } }, removeData: function (s, c) { if (!(s.nodeName && ah.noData[s.nodeName.toLowerCase()])) { s = s == aO ? aS : s; var F = s[aH], w = ah.cache, A = w[F]; if (c) { if (A) { delete A[c]; ah.isEmptyObject(A) && ah.removeData(s) } } else { if (ah.support.deleteExpando) { delete s[ah.expando] } else { s.removeAttribute && s.removeAttribute(ah.expando) } delete w[F] } } } }); ah.fn.extend({ data: function (s, c) { if (typeof s === "undefined" && this.length) { return ah.data(this[0]) } else { if (typeof s === "object") { return this.each(function () { ah.data(this, s) }) } } var A = s.split("."); A[1] = A[1] ? "." + A[1] : ""; if (c === I) { var w = this.triggerHandler("getData" + A[1] + "!", [A[0]]); if (w === I && this.length) { w = ah.data(this[0], s) } return w === I && A[1] ? this.data(A[0]) : w } else { return this.trigger("setData" + A[1] + "!", [A[0], c]).each(function () { ah.data(this, s, c) }) } }, removeData: function (c) { return this.each(function () { ah.removeData(this, c) }) } }); ah.extend({ queue: function (s, c, A) { if (s) { c = (c || "fx") + "queue"; var w = ah.data(s, c); if (!A) { return w || [] } if (!w || ah.isArray(A)) { w = ah.data(s, c, ah.makeArray(A)) } else { w.push(A) } return w } }, dequeue: function (s, c) { c = c || "fx"; var A = ah.queue(s, c), w = A.shift(); if (w === "inprogress") { w = A.shift() } if (w) { c === "fx" && A.unshift("inprogress"); w.call(s, function () { ah.dequeue(s, c) }) } } }); ah.fn.extend({ queue: function (s, c) { if (typeof s !== "string") { c = s; s = "fx" } if (c === I) { return ah.queue(this[0], s) } return this.each(function () { var w = ah.queue(this, s, c); s === "fx" && w[0] !== "inprogress" && ah.dequeue(this, s) }) }, dequeue: function (c) { return this.each(function () { ah.dequeue(this, c) }) }, delay: function (s, c) { s = ah.fx ? ah.fx.speeds[s] || s : s; c = c || "fx"; return this.queue(c, function () { var w = this; setTimeout(function () { ah.dequeue(w, c) }, s) }) }, clearQueue: function (c) { return this.queue(c || "fx", []) } }); var be = /[\n\t]/g, U = /\s+/, a8 = /\r/g, aM = /href|src|style/, aU = /(button|input)/i, aw = /(button|input|object|select|textarea)/i, S = /^(a|area)$/i, aY = /radio|checkbox/; ah.fn.extend({ attr: function (s, c) { return ap(this, s, c, true, ah.attr) }, removeAttr: function (c) { return this.each(function () { ah.attr(this, c, ""); this.nodeType === 1 && this.removeAttribute(c) }) }, addClass: function (L) { if (ah.isFunction(L)) { return this.each(function (O) { var N = ah(this); N.addClass(L.call(this, O, N.attr("class"))) }) } if (L && typeof L === "string") { for (var K = (L || "").split(U), J = 0, F = this.length; J < F; J++) { var G = this[J]; if (G.nodeType === 1) { if (G.className) { for (var w = " " + G.className + " ", A = G.className, c = 0, s = K.length; c < s; c++) { if (w.indexOf(" " + K[c] + " ") < 0) { A += " " + K[c] } } G.className = ah.trim(A) } else { G.className = L } } } } return this }, removeClass: function (s) { if (ah.isFunction(s)) { return this.each(function (L) { var N = ah(this); N.removeClass(s.call(this, L, N.attr("class"))) }) } if (s && typeof s === "string" || s === I) { for (var c = (s || "").split(U), K = 0, F = this.length; K < F; K++) { var G = this[K]; if (G.nodeType === 1 && G.className) { if (s) { for (var w = (" " + G.className + " ").replace(be, " "), A = 0, J = c.length; A < J; A++) { w = w.replace(" " + c[A] + " ", " ") } G.className = ah.trim(w) } else { G.className = "" } } } } return this }, toggleClass: function (s, c) { var A = typeof s, w = typeof c === "boolean"; if (ah.isFunction(s)) { return this.each(function (G) { var F = ah(this); F.toggleClass(s.call(this, G, F.attr("class"), c), c) }) } return this.each(function () { if (A === "string") { for (var K, G = 0, J = ah(this), L = c, F = s.split(U); K = F[G++]; ) { L = w ? L : !J.hasClass(K); J[L ? "addClass" : "removeClass"](K) } } else { if (A === "undefined" || A === "boolean") { this.className && ah.data(this, "__className__", this.className); this.className = this.className || s === false ? "" : ah.data(this, "__className__") || "" } } }) }, hasClass: function (s) { s = " " + s + " "; for (var c = 0, w = this.length; c < w; c++) { if ((" " + this[c].className + " ").replace(be, " ").indexOf(s) > -1) { return true } } return false }, val: function (s) { if (s === I) { var c = this[0]; if (c) { if (ah.nodeName(c, "option")) { return (c.attributes.value || {}).specified ? c.value : c.text } if (ah.nodeName(c, "select")) { var K = c.selectedIndex, F = [], G = c.options; c = c.type === "select-one"; if (K < 0) { return null } var w = c ? K : 0; for (K = c ? K + 1 : G.length; w < K; w++) { var A = G[w]; if (A.selected) { s = ah(A).val(); if (c) { return s } F.push(s) } } return F } if (aY.test(c.type) && !ah.support.checkOn) { return c.getAttribute("value") === null ? "on" : c.value } return (c.value || "").replace(a8, "") } return I } var J = ah.isFunction(s); return this.each(function (L) { var P = ah(this), O = s; if (this.nodeType === 1) { if (J) { O = s.call(this, L, P.val()) } if (typeof O === "number") { O += "" } if (ah.isArray(O) && aY.test(this.type)) { this.checked = ah.inArray(P.val(), O) >= 0 } else { if (ah.nodeName(this, "select")) { var N = ah.makeArray(O); ah("option", this).each(function () { this.selected = ah.inArray(ah(this).val(), N) >= 0 }); if (!N.length) { this.selectedIndex = -1 } } else { this.value = O } } } }) } }); ah.extend({ attrFn: { val: true, css: true, html: true, text: true, data: true, width: true, height: true, offset: true }, attr: function (s, c, G, A) { if (!s || s.nodeType === 3 || s.nodeType === 8) { return I } if (A && c in ah.attrFn) { return ah(s)[c](G) } A = s.nodeType !== 1 || !ah.isXMLDoc(s); var F = G !== I; c = A && ah.props[c] || c; if (s.nodeType === 1) { var w = aM.test(c); if (c in s && A && !w) { if (F) { c === "type" && aU.test(s.nodeName) && s.parentNode && ah.error("type property can't be changed"); s[c] = G } if (ah.nodeName(s, "form") && s.getAttributeNode(c)) { return s.getAttributeNode(c).nodeValue } if (c === "tabIndex") { return (c = s.getAttributeNode("tabIndex")) && c.specified ? c.value : aw.test(s.nodeName) || S.test(s.nodeName) && s.href ? 0 : I } return s[c] } if (!ah.support.style && A && c === "style") { if (F) { s.style.cssText = "" + G } return s.style.cssText } F && s.setAttribute(c, "" + G); s = !ah.support.hrefNormalized && A && w ? s.getAttribute(c, 2) : s.getAttribute(c); return s === null ? I : s } return ah.style(s, c, G) } }); var az = /\.(.*)$/, r = function (c) { return c.replace(/[^\w\s\.\|`]/g, function (s) { return "\\" + s }) }; ah.event = { add: function (P, O, L, J) { if (!(P.nodeType === 3 || P.nodeType === 8)) { if (P.setInterval && P !== aO && !P.frameElement) { P = aO } var K, F; if (L.handler) { K = L; L = K.handler } if (!L.guid) { L.guid = ah.guid++ } if (F = ah.data(P)) { var G = F.events = F.events || {}, s = F.handle; if (!s) { F.handle = s = function () { return typeof ah !== "undefined" && !ah.event.triggered ? ah.event.handle.apply(s.elem, arguments) : I } } s.elem = P; O = O.split(" "); for (var A, w = 0, c; A = O[w++]; ) { F = K ? ah.extend({}, K) : { handler: L, data: J }; if (A.indexOf(".") > -1) { c = A.split("."); A = c.shift(); F.namespace = c.slice(0).sort().join(".") } else { c = []; F.namespace = "" } F.type = A; F.guid = L.guid; var Q = G[A], N = ah.event.special[A] || {}; if (!Q) { Q = G[A] = []; if (!N.setup || N.setup.call(P, J, c, s) === false) { if (P.addEventListener) { P.addEventListener(A, s, false) } else { P.attachEvent && P.attachEvent("on" + A, s) } } } if (N.add) { N.add.call(P, F); if (!F.handler.guid) { F.handler.guid = L.guid } } Q.push(F); ah.event.global[A] = true } P = null } } }, global: {}, remove: function (R, Q, O, L) { if (!(R.nodeType === 3 || R.nodeType === 8)) { var N, J = 0, K, A, G, F, c, T, P = ah.data(R), s = P && P.events; if (P && s) { if (Q && Q.type) { O = Q.handler; Q = Q.type } if (!Q || typeof Q === "string" && Q.charAt(0) === ".") { Q = Q || ""; for (N in s) { ah.event.remove(R, N + Q) } } else { for (Q = Q.split(" "); N = Q[J++]; ) { F = N; K = N.indexOf(".") < 0; A = []; if (!K) { A = N.split("."); N = A.shift(); G = new RegExp("(^|\\.)" + ah.map(A.slice(0).sort(), r).join("\\.(?:.*\\.)?") + "(\\.|$)") } if (c = s[N]) { if (O) { F = ah.event.special[N] || {}; for (w = L || 0; w < c.length; w++) { T = c[w]; if (O.guid === T.guid) { if (K || G.test(T.namespace)) { L == null && c.splice(w--, 1); F.remove && F.remove.call(R, T) } if (L != null) { break } } } if (c.length === 0 || L != null && c.length === 1) { if (!F.teardown || F.teardown.call(R, A) === false) { aG(R, N, P.handle) } delete s[N] } } else { for (var w = 0; w < c.length; w++) { T = c[w]; if (K || G.test(T.namespace)) { ah.event.remove(R, F, T.handler, w); c.splice(w--, 1) } } } } } if (ah.isEmptyObject(s)) { if (Q = P.handle) { Q.elem = null } delete P.events; delete P.handle; ah.isEmptyObject(P) && ah.removeData(R) } } } } }, trigger: function (N, L, K, G) { var J = N.type || N; if (!G) { N = typeof N === "object" ? N[aH] ? N : ah.extend(ah.Event(J), N) : ah.Event(J); if (J.indexOf("!") >= 0) { N.type = J = J.slice(0, -1); N.exclusive = true } if (!K) { N.stopPropagation(); ah.event.global[J] && ah.each(ah.cache, function () { this.events && this.events[J] && ah.event.trigger(N, L, this.handle.elem) }) } if (!K || K.nodeType === 3 || K.nodeType === 8) { return I } N.result = I; N.target = K; L = ah.makeArray(L); L.unshift(N) } N.currentTarget = K; (G = ah.data(K, "handle")) && G.apply(K, L); G = K.parentNode || K.ownerDocument; try { if (!(K && K.nodeName && ah.noData[K.nodeName.toLowerCase()])) { if (K["on" + J] && K["on" + J].apply(K, L) === false) { N.result = false } } } catch (A) { } if (!N.isPropagationStopped() && G) { ah.event.trigger(N, L, G, true) } else { if (!N.isDefaultPrevented()) { G = N.target; var F, c = ah.nodeName(G, "a") && J === "click", w = ah.event.special[J] || {}; if ((!w._default || w._default.call(K, N) === false) && !c && !(G && G.nodeName && ah.noData[G.nodeName.toLowerCase()])) { try { if (G[J]) { if (F = G["on" + J]) { G["on" + J] = null } ah.event.triggered = true; G[J]() } } catch (s) { } if (F) { G["on" + J] = F } ah.event.triggered = false } } } }, handle: function (s) { var c, J, F, G; s = arguments[0] = ah.event.fix(s || aO.event); s.currentTarget = this; c = s.type.indexOf(".") < 0 && !s.exclusive; if (!c) { J = s.type.split("."); s.type = J.shift(); F = new RegExp("(^|\\.)" + J.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)") } G = ah.data(this, "events"); J = G[s.type]; if (G && J) { J = J.slice(0); G = 0; for (var w = J.length; G < w; G++) { var A = J[G]; if (c || F.test(A.namespace)) { s.handler = A.handler; s.data = A.data; s.handleObj = A; A = A.handler.apply(this, arguments); if (A !== I) { s.result = A; if (A === false) { s.preventDefault(); s.stopPropagation() } } if (s.isImmediatePropagationStopped()) { break } } } } return s.result }, props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "), fix: function (s) { if (s[aH]) { return s } var c = s; s = ah.Event(c); for (var A = this.props.length, w; A; ) { w = this.props[--A]; s[w] = c[w] } if (!s.target) { s.target = s.srcElement || M } if (s.target.nodeType === 3) { s.target = s.target.parentNode } if (!s.relatedTarget && s.fromElement) { s.relatedTarget = s.fromElement === s.target ? s.toElement : s.fromElement } if (s.pageX == null && s.clientX != null) { c = M.documentElement; A = M.body; s.pageX = s.clientX + (c && c.scrollLeft || A && A.scrollLeft || 0) - (c && c.clientLeft || A && A.clientLeft || 0); s.pageY = s.clientY + (c && c.scrollTop || A && A.scrollTop || 0) - (c && c.clientTop || A && A.clientTop || 0) } if (!s.which && (s.charCode || s.charCode === 0 ? s.charCode : s.keyCode)) { s.which = s.charCode || s.keyCode } if (!s.metaKey && s.ctrlKey) { s.metaKey = s.ctrlKey } if (!s.which && s.button !== I) { s.which = s.button & 1 ? 1 : s.button & 2 ? 3 : s.button & 4 ? 2 : 0 } return s }, guid: 100000000, proxy: ah.proxy, special: { ready: { setup: ah.bindReady, teardown: ah.noop }, live: { add: function (c) { ah.event.add(this, c.origType, ah.extend({}, c, { handler: ag })) }, remove: function (s) { var c = true, w = s.origType.replace(az, ""); ah.each(ah.data(this, "events").live || [], function () { if (w === this.origType.replace(az, "")) { return c = false } }); c && ah.event.remove(this, s.origType, ag) } }, beforeunload: { setup: function (s, c, w) { if (this.setInterval) { this.onbeforeunload = w } return false }, teardown: function (s, c) { if (this.onbeforeunload === c) { this.onbeforeunload = null } } }} }; var aG = M.removeEventListener ? function (s, c, w) { s.removeEventListener(c, w, false) } : function (s, c, w) { s.detachEvent("on" + c, w) }; ah.Event = function (c) { if (!this.preventDefault) { return new ah.Event(c) } if (c && c.type) { this.originalEvent = c; this.type = c.type } else { this.type = c } this.timeStamp = aF(); this[aH] = true }; ah.Event.prototype = { preventDefault: function () { this.isDefaultPrevented = am; var c = this.originalEvent; if (c) { c.preventDefault && c.preventDefault(); c.returnValue = false } }, stopPropagation: function () { this.isPropagationStopped = am; var c = this.originalEvent; if (c) { c.stopPropagation && c.stopPropagation(); c.cancelBubble = true } }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = am; this.stopPropagation() }, isDefaultPrevented: ao, isPropagationStopped: ao, isImmediatePropagationStopped: ao }; var ae = function (s) { var c = s.relatedTarget; try { for (; c && c !== this; ) { c = c.parentNode } if (c !== this) { s.type = s.data; ah.event.handle.apply(this, arguments) } } catch (w) { } }, x = function (c) { c.type = c.data; ah.event.handle.apply(this, arguments) }; ah.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (s, c) { ah.event.special[s] = { setup: function (w) { ah.event.add(this, c, w && w.selector ? x : ae, s) }, teardown: function (w) { ah.event.remove(this, c, w && w.selector ? x : ae) } } }); if (!ah.support.submitBubbles) { ah.event.special.submit = { setup: function () { if (this.nodeName.toLowerCase() !== "form") { ah.event.add(this, "click.specialSubmit", function (s) { var c = s.target, w = c.type; if ((w === "submit" || w === "image") && ah(c).closest("form").length) { return aK("submit", this, arguments) } }); ah.event.add(this, "keypress.specialSubmit", function (s) { var c = s.target, w = c.type; if ((w === "text" || w === "password") && ah(c).closest("form").length && s.keyCode === 13) { return aK("submit", this, arguments) } }) } else { return false } }, teardown: function () { ah.event.remove(this, ".specialSubmit") } } } if (!ah.support.changeBubbles) { var t = /textarea|input|select/i, g, j = function (s) { var c = s.type, w = s.value; if (c === "radio" || c === "checkbox") { w = s.checked } else { if (c === "select-multiple") { w = s.selectedIndex > -1 ? ah.map(s.options, function (A) { return A.selected }).join("-") : "" } else { if (s.nodeName.toLowerCase() === "select") { w = s.selectedIndex } } } return w }, bd = function (s, c) { var F = s.target, w, A; if (!(!t.test(F.nodeName) || F.readOnly)) { w = ah.data(F, "_change_data"); A = j(F); if (s.type !== "focusout" || F.type !== "radio") { ah.data(F, "_change_data", A) } if (!(w === I || A === w)) { if (w != null || A) { s.type = "change"; return ah.event.trigger(s, c, F) } } } }; ah.event.special.change = { filters: { focusout: bd, click: function (s) { var c = s.target, w = c.type; if (w === "radio" || w === "checkbox" || c.nodeName.toLowerCase() === "select") { return bd.call(this, s) } }, keydown: function (s) { var c = s.target, w = c.type; if (s.keyCode === 13 && c.nodeName.toLowerCase() !== "textarea" || s.keyCode === 32 && (w === "checkbox" || w === "radio") || w === "select-multiple") { return bd.call(this, s) } }, beforeactivate: function (c) { c = c.target; ah.data(c, "_change_data", j(c)) } }, setup: function () { if (this.type === "file") { return false } for (var c in g) { ah.event.add(this, c + ".specialChange", g[c]) } return t.test(this.nodeName) }, teardown: function () { ah.event.remove(this, ".specialChange"); return t.test(this.nodeName) } }; g = ah.event.special.change.filters } M.addEventListener && ah.each({ focus: "focusin", blur: "focusout" }, function (s, c) { function w(A) { A = ah.event.fix(A); A.type = c; return ah.event.handle.call(this, A) } ah.event.special[c] = { setup: function () { this.addEventListener(s, w, true) }, teardown: function () { this.removeEventListener(s, w, true) } } }); ah.each(["bind", "one"], function (s, c) { ah.fn[c] = function (K, F, G) { if (typeof K === "object") { for (var w in K) { this[c](w, F, K[w], G) } return this } if (ah.isFunction(F)) { G = F; F = I } var A = c === "one" ? ah.proxy(G, function (L) { ah(this).unbind(L, A); return G.apply(this, arguments) }) : G; if (K === "unload" && c !== "one") { this.one(K, F, G) } else { w = 0; for (var J = this.length; w < J; w++) { ah.event.add(this[w], K, A, F) } } return this } }); ah.fn.extend({ unbind: function (s, c) { if (typeof s === "object" && !s.preventDefault) { for (var A in s) { this.unbind(A, s[A]) } } else { A = 0; for (var w = this.length; A < w; A++) { ah.event.remove(this[A], s, c) } } return this }, delegate: function (s, c, A, w) { return this.live(c, A, w, s) }, undelegate: function (s, c, w) { return arguments.length === 0 ? this.unbind("live") : this.die(c, null, w, s) }, trigger: function (s, c) { return this.each(function () { ah.event.trigger(s, c, this) }) }, triggerHandler: function (s, c) { if (this[0]) { s = ah.Event(s); s.preventDefault(); s.stopPropagation(); ah.event.trigger(s, c, this[0]); return s.result } }, toggle: function (s) { for (var c = arguments, w = 1; w < c.length; ) { ah.proxy(s, c[w++]) } return this.click(ah.proxy(s, function (A) { var F = (ah.data(this, "lastToggle" + s.guid) || 0) % w; ah.data(this, "lastToggle" + s.guid, F + 1); A.preventDefault(); return c[F].apply(this, arguments) || false })) }, hover: function (s, c) { return this.mouseenter(s).mouseleave(c || s) } }); var bh = { focus: "focusin", blur: "focusout", mouseenter: "mouseover", mouseleave: "mouseout" }; ah.each(["live", "die"], function (s, c) { ah.fn[c] = function (O, L, N, J) { var K, A = 0, G, F, w = J || this.selector, P = J ? this : ah(this.context); if (ah.isFunction(L)) { N = L; L = I } for (O = (O || "").split(" "); (K = O[A++]) != null; ) { J = az.exec(K); G = ""; if (J) { G = J[0]; K = K.replace(az, "") } if (K === "hover") { O.push("mouseenter" + G, "mouseleave" + G) } else { F = K; if (K === "focus" || K === "blur") { O.push(bh[K] + G); K += G } else { K = (bh[K] || K) + G } c === "live" ? P.each(function () { ah.event.add(this, z(K, w), { data: L, selector: w, handler: N, origType: K, origHandler: N, preType: F }) }) : P.unbind(z(K, w), N) } } return this } }); ah.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (s, c) { ah.fn[c] = function (w) { return w ? this.bind(c, w) : this.trigger(c) }; if (ah.attrFn) { ah.attrFn[c] = true } }); aO.attachEvent && !aO.addEventListener && aO.attachEvent("onunload", function () { for (var s in ah.cache) { if (ah.cache[s].handle) { try { ah.event.remove(ah.cache[s].handle.elem) } catch (c) { } } } }); (function () { function W(ab) { for (var aa = "", Z, Y = 0; ab[Y]; Y++) { Z = ab[Y]; if (Z.nodeType === 3 || Z.nodeType === 4) { aa += Z.nodeValue } else { if (Z.nodeType !== 8) { aa += W(Z.childNodes) } } } return aa } function V(bb, ba, ab, aa, Y, Z) { Y = 0; for (var bm = aa.length; Y < bm; Y++) { var bn = aa[Y]; if (bn) { bn = bn[bb]; for (var bl = false; bn; ) { if (bn.sizcache === ab) { bl = aa[bn.sizset]; break } if (bn.nodeType === 1 && !Z) { bn.sizcache = ab; bn.sizset = Y } if (bn.nodeName.toLowerCase() === ba) { bl = bn; break } bn = bn[bb] } aa[Y] = bl } } } function T(bb, ba, ab, aa, Y, Z) { Y = 0; for (var bm = aa.length; Y < bm; Y++) { var bn = aa[Y]; if (bn) { bn = bn[bb]; for (var bl = false; bn; ) { if (bn.sizcache === ab) { bl = aa[bn.sizset]; break } if (bn.nodeType === 1) { if (!Z) { bn.sizcache = ab; bn.sizset = Y } if (typeof ba !== "string") { if (bn === ba) { bl = true; break } } else { if (N.filter(ba, [bn]).length > 0) { bl = bn; break } } } bn = bn[bb] } aa[Y] = bl } } } var Q = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, R = 0, O = Object.prototype.toString, P = false, K = true; [0, 0].sort(function () { K = false; return 0 }); var N = function (bm, bl, ba, ab) { ba = ba || []; var Z = bl = bl || M; if (bl.nodeType !== 1 && bl.nodeType !== 9) { return [] } if (!bm || typeof bm !== "string") { return ba } for (var aa = [], br, bs, bo, bb, bq = true, bn = s(bl), bp = bm; (Q.exec(""), br = Q.exec(bp)) !== null; ) { bp = br[3]; aa.push(br[1]); if (br[2]) { bb = br[3]; break } } if (aa.length > 1 && G.exec(bm)) { if (aa.length === 2 && L.relative[aa[0]]) { bs = X(aa[0] + aa[1], bl) } else { for (bs = L.relative[aa[0]] ? [bl] : N(aa.shift(), bl); aa.length; ) { bm = aa.shift(); if (L.relative[bm]) { bm += aa.shift() } bs = X(bm, bs) } } } else { if (!ab && aa.length > 1 && bl.nodeType === 9 && !bn && L.match.ID.test(aa[0]) && !L.match.ID.test(aa[aa.length - 1])) { br = N.find(aa.shift(), bl, bn); bl = br.expr ? N.filter(br.expr, br.set)[0] : br.set[0] } if (bl) { br = ab ? { expr: aa.pop(), set: c(ab)} : N.find(aa.pop(), aa.length === 1 && (aa[0] === "~" || aa[0] === "+") && bl.parentNode ? bl.parentNode : bl, bn); bs = br.expr ? N.filter(br.expr, br.set) : br.set; if (aa.length > 0) { bo = c(bs) } else { bq = false } for (; aa.length; ) { var Y = aa.pop(); br = Y; if (L.relative[Y]) { br = aa.pop() } else { Y = "" } if (br == null) { br = bl } L.relative[Y](bo, br, bn) } } else { bo = [] } } bo || (bo = bs); bo || N.error(Y || bm); if (O.call(bo) === "[object Array]") { if (bq) { if (bl && bl.nodeType === 1) { for (bm = 0; bo[bm] != null; bm++) { if (bo[bm] && (bo[bm] === true || bo[bm].nodeType === 1 && A(bl, bo[bm]))) { ba.push(bs[bm]) } } } else { for (bm = 0; bo[bm] != null; bm++) { bo[bm] && bo[bm].nodeType === 1 && ba.push(bs[bm]) } } } else { ba.push.apply(ba, bo) } } else { c(bo, ba) } if (bb) { N(bb, Z, ba, ab); N.uniqueSort(ba) } return ba }; N.uniqueSort = function (Z) { if (J) { P = K; Z.sort(J); if (P) { for (var Y = 1; Y < Z.length; Y++) { Z[Y] === Z[Y - 1] && Z.splice(Y--, 1) } } } return Z }; N.matches = function (Z, Y) { return N(Z, null, null, Y) }; N.find = function (bb, ba, ab) { var aa, Y; if (!bb) { return [] } for (var Z = 0, bm = L.order.length; Z < bm; Z++) { var bn = L.order[Z]; if (Y = L.leftMatch[bn].exec(bb)) { var bl = Y[1]; Y.splice(1, 1); if (bl.substr(bl.length - 1) !== "\\") { Y[1] = (Y[1] || "").replace(/\\/g, ""); aa = L.find[bn](Y, ba, ab); if (aa != null) { bb = bb.replace(L.match[bn], ""); break } } } } aa || (aa = ba.getElementsByTagName("*")); return { set: aa, expr: bb} }; N.filter = function (bn, bm, bb, ab) { for (var Z = bn, aa = [], bt = bm, bu, bq, bl = bm && bm[0] && s(bm[0]); bn && bm.length; ) { for (var bs in L.filter) { if ((bu = L.leftMatch[bs].exec(bn)) != null && bu[2]) { var bo = L.filter[bs], br, Y; Y = bu[1]; bq = false; bu.splice(1, 1); if (Y.substr(Y.length - 1) !== "\\") { if (bt === aa) { aa = [] } if (L.preFilter[bs]) { if (bu = L.preFilter[bs](bu, bt, bb, aa, ab, bl)) { if (bu === true) { continue } } else { bq = br = true } } if (bu) { for (var ba = 0; (Y = bt[ba]) != null; ba++) { if (Y) { br = bo(Y, bu, ba, bt); var bp = ab ^ !!br; if (bb && br != null) { if (bp) { bq = true } else { bt[ba] = false } } else { if (bp) { aa.push(Y); bq = true } } } } } if (br !== I) { bb || (bt = aa); bn = bn.replace(L.match[bs], ""); if (!bq) { return [] } break } } } } if (bn === Z) { if (bq == null) { N.error(bn) } else { break } } Z = bn } return bt }; N.error = function (Y) { throw "Syntax error, unrecognized expression: " + Y }; var L = N.selectors = { order: ["ID", "NAME", "TAG"], match: { ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/ }, leftMatch: {}, attrMap: { "class": "className", "for": "htmlFor" }, attrHandle: { href: function (Y) { return Y.getAttribute("href") } }, relative: { "+": function (ab, aa) { var Z = typeof aa === "string", Y = Z && !/\W/.test(aa); Z = Z && !Y; if (Y) { aa = aa.toLowerCase() } Y = 0; for (var ba = ab.length, bb; Y < ba; Y++) { if (bb = ab[Y]) { for (; (bb = bb.previousSibling) && bb.nodeType !== 1; ) { } ab[Y] = Z || bb && bb.nodeName.toLowerCase() === aa ? bb || false : bb === aa } } Z && N.filter(aa, ab, true) }, ">": function (ab, aa) { var Z = typeof aa === "string"; if (Z && !/\W/.test(aa)) { aa = aa.toLowerCase(); for (var Y = 0, ba = ab.length; Y < ba; Y++) { var bb = ab[Y]; if (bb) { Z = bb.parentNode; ab[Y] = Z.nodeName.toLowerCase() === aa ? Z : false } } } else { Y = 0; for (ba = ab.length; Y < ba; Y++) { if (bb = ab[Y]) { ab[Y] = Z ? bb.parentNode : bb.parentNode === aa } } Z && N.filter(aa, ab, true) } }, "": function (ab, aa, Z) { var Y = R++, ba = T; if (typeof aa === "string" && !/\W/.test(aa)) { var bb = aa = aa.toLowerCase(); ba = V } ba("parentNode", aa, Y, ab, bb, Z) }, "~": function (ab, aa, Z) { var Y = R++, ba = T; if (typeof aa === "string" && !/\W/.test(aa)) { var bb = aa = aa.toLowerCase(); ba = V } ba("previousSibling", aa, Y, ab, bb, Z) } }, find: { ID: function (aa, Z, Y) { if (typeof Z.getElementById !== "undefined" && !Y) { return (aa = Z.getElementById(aa[1])) ? [aa] : [] } }, NAME: function (ab, aa) { if (typeof aa.getElementsByName !== "undefined") { var Z = []; aa = aa.getElementsByName(ab[1]); for (var Y = 0, ba = aa.length; Y < ba; Y++) { aa[Y].getAttribute("name") === ab[1] && Z.push(aa[Y]) } return Z.length === 0 ? null : Z } }, TAG: function (Z, Y) { return Y.getElementsByTagName(Z[1]) } }, preFilter: { CLASS: function (ba, ab, Z, Y, bb, bl) { ba = " " + ba[1].replace(/\\/g, "") + " "; if (bl) { return ba } bl = 0; for (var aa; (aa = ab[bl]) != null; bl++) { if (aa) { if (bb ^ (aa.className && (" " + aa.className + " ").replace(/[\t\n]/g, " ").indexOf(ba) >= 0)) { Z || Y.push(aa) } else { if (Z) { ab[bl] = false } } } } return false }, ID: function (Y) { return Y[1].replace(/\\/g, "") }, TAG: function (Y) { return Y[1].toLowerCase() }, CHILD: function (Z) { if (Z[1] === "nth") { var Y = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(Z[2] === "even" && "2n" || Z[2] === "odd" && "2n+1" || !/\D/.test(Z[2]) && "0n+" + Z[2] || Z[2]); Z[2] = Y[1] + (Y[2] || 1) - 0; Z[3] = Y[3] - 0 } Z[0] = R++; return Z }, ATTR: function (ab, aa, Z, Y, ba, bb) { aa = ab[1].replace(/\\/g, ""); if (!bb && L.attrMap[aa]) { ab[1] = L.attrMap[aa] } if (ab[2] === "~=") { ab[4] = " " + ab[4] + " " } return ab }, PSEUDO: function (ab, aa, Z, Y, ba) { if (ab[1] === "not") { if ((Q.exec(ab[3]) || "").length > 1 || /^\w/.test(ab[3])) { ab[3] = N(ab[3], null, null, aa) } else { ab = N.filter(ab[3], aa, Z, true ^ ba); Z || Y.push.apply(Y, ab); return false } } else { if (L.match.POS.test(ab[0]) || L.match.CHILD.test(ab[0])) { return true } } return ab }, POS: function (Y) { Y.unshift(true); return Y } }, filters: { enabled: function (Y) { return Y.disabled === false && Y.type !== "hidden" }, disabled: function (Y) { return Y.disabled === true }, checked: function (Y) { return Y.checked === true }, selected: function (Y) { return Y.selected === true }, parent: function (Y) { return !!Y.firstChild }, empty: function (Y) { return !Y.firstChild }, has: function (aa, Z, Y) { return !!N(Y[3], aa).length }, header: function (Y) { return /h\d/i.test(Y.nodeName) }, text: function (Y) { return "text" === Y.type }, radio: function (Y) { return "radio" === Y.type }, checkbox: function (Y) { return "checkbox" === Y.type }, file: function (Y) { return "file" === Y.type }, password: function (Y) { return "password" === Y.type }, submit: function (Y) { return "submit" === Y.type }, image: function (Y) { return "image" === Y.type }, reset: function (Y) { return "reset" === Y.type }, button: function (Y) { return "button" === Y.type || Y.nodeName.toLowerCase() === "button" }, input: function (Y) { return /input|select|textarea|button/i.test(Y.nodeName) } }, setFilters: { first: function (Z, Y) { return Y === 0 }, last: function (ab, aa, Z, Y) { return aa === Y.length - 1 }, even: function (Z, Y) { return Y % 2 === 0 }, odd: function (Z, Y) { return Y % 2 === 1 }, lt: function (aa, Z, Y) { return Z < Y[3] - 0 }, gt: function (aa, Z, Y) { return Z > Y[3] - 0 }, nth: function (aa, Z, Y) { return Y[3] - 0 === Z }, eq: function (aa, Z, Y) { return Y[3] - 0 === Z } }, filter: { PSEUDO: function (ab, aa, Z, Y) { var ba = aa[1], bb = L.filters[ba]; if (bb) { return bb(ab, Z, aa, Y) } else { if (ba === "contains") { return (ab.textContent || ab.innerText || W([ab]) || "").indexOf(aa[3]) >= 0 } else { if (ba === "not") { aa = aa[3]; Z = 0; for (Y = aa.length; Z < Y; Z++) { if (aa[Z] === ab) { return false } } return true } else { N.error("Syntax error, unrecognized expression: " + ba) } } } }, CHILD: function (ba, ab) { var Z = ab[1], Y = ba; switch (Z) { case "only": case "first": for (; Y = Y.previousSibling; ) { if (Y.nodeType === 1) { return false } } if (Z === "first") { return true } Y = ba; case "last": for (; Y = Y.nextSibling; ) { if (Y.nodeType === 1) { return false } } return true; case "nth": Z = ab[2]; var bb = ab[3]; if (Z === 1 && bb === 0) { return true } ab = ab[0]; var bl = ba.parentNode; if (bl && (bl.sizcache !== ab || !ba.nodeIndex)) { var aa = 0; for (Y = bl.firstChild; Y; Y = Y.nextSibling) { if (Y.nodeType === 1) { Y.nodeIndex = ++aa } } bl.sizcache = ab } ba = ba.nodeIndex - bb; return Z === 0 ? ba === 0 : ba % Z === 0 && ba / Z >= 0 } }, ID: function (Z, Y) { return Z.nodeType === 1 && Z.getAttribute("id") === Y }, TAG: function (Z, Y) { return Y === "*" && Z.nodeType === 1 || Z.nodeName.toLowerCase() === Y }, CLASS: function (Z, Y) { return (" " + (Z.className || Z.getAttribute("class")) + " ").indexOf(Y) > -1 }, ATTR: function (ab, aa) { var Z = aa[1]; ab = L.attrHandle[Z] ? L.attrHandle[Z](ab) : ab[Z] != null ? ab[Z] : ab.getAttribute(Z); Z = ab + ""; var Y = aa[2]; aa = aa[4]; return ab == null ? Y === "!=" : Y === "=" ? Z === aa : Y === "*=" ? Z.indexOf(aa) >= 0 : Y === "~=" ? (" " + Z + " ").indexOf(aa) >= 0 : !aa ? Z && ab !== false : Y === "!=" ? Z !== aa : Y === "^=" ? Z.indexOf(aa) === 0 : Y === "$=" ? Z.substr(Z.length - aa.length) === aa : Y === "|=" ? Z === aa || Z.substr(0, aa.length + 1) === aa + "-" : false }, POS: function (ab, aa, Z, Y) { var ba = L.setFilters[aa[2]]; if (ba) { return ba(ab, Z, aa, Y) } } } }, G = L.match.POS; for (var w in L.match) { L.match[w] = new RegExp(L.match[w].source + /(?![^\[]*\])(?![^\(]*\))/.source); L.leftMatch[w] = new RegExp(/(^(?:.|\r|\n)*?)/.source + L.match[w].source.replace(/\\(\d+)/g, function (Z, Y) { return "\\" + (Y - 0 + 1) })) } var c = function (Z, Y) { Z = Array.prototype.slice.call(Z, 0); if (Y) { Y.push.apply(Y, Z); return Y } return Z }; try { Array.prototype.slice.call(M.documentElement.childNodes, 0) } catch (F) { c = function (ab, aa) { aa = aa || []; if (O.call(ab) === "[object Array]") { Array.prototype.push.apply(aa, ab) } else { if (typeof ab.length === "number") { for (var Z = 0, Y = ab.length; Z < Y; Z++) { aa.push(ab[Z]) } } else { for (Z = 0; ab[Z]; Z++) { aa.push(ab[Z]) } } } return aa } } var J; if (M.documentElement.compareDocumentPosition) { J = function (Z, Y) { if (!Z.compareDocumentPosition || !Y.compareDocumentPosition) { if (Z == Y) { P = true } return Z.compareDocumentPosition ? -1 : 1 } Z = Z.compareDocumentPosition(Y) & 4 ? -1 : Z === Y ? 0 : 1; if (Z === 0) { P = true } return Z } } else { if ("sourceIndex" in M.documentElement) { J = function (Z, Y) { if (!Z.sourceIndex || !Y.sourceIndex) { if (Z == Y) { P = true } return Z.sourceIndex ? -1 : 1 } Z = Z.sourceIndex - Y.sourceIndex; if (Z === 0) { P = true } return Z } } else { if (M.createRange) { J = function (ab, aa) { if (!ab.ownerDocument || !aa.ownerDocument) { if (ab == aa) { P = true } return ab.ownerDocument ? -1 : 1 } var Z = ab.ownerDocument.createRange(), Y = aa.ownerDocument.createRange(); Z.setStart(ab, 0); Z.setEnd(ab, 0); Y.setStart(aa, 0); Y.setEnd(aa, 0); ab = Z.compareBoundaryPoints(Range.START_TO_END, Y); if (ab === 0) { P = true } return ab } } } } (function () { var aa = M.createElement("div"), Z = "script" + (new Date).getTime(); aa.innerHTML = "<a name='" + Z + "'/>"; var Y = M.documentElement; Y.insertBefore(aa, Y.firstChild); if (M.getElementById(Z)) { L.find.ID = function (ab, ba, bb) { if (typeof ba.getElementById !== "undefined" && !bb) { return (ba = ba.getElementById(ab[1])) ? ba.id === ab[1] || typeof ba.getAttributeNode !== "undefined" && ba.getAttributeNode("id").nodeValue === ab[1] ? [ba] : I : [] } }; L.filter.ID = function (ab, ba) { var bb = typeof ab.getAttributeNode !== "undefined" && ab.getAttributeNode("id"); return ab.nodeType === 1 && bb && bb.nodeValue === ba } } Y.removeChild(aa); Y = aa = null })(); (function () { var Y = M.createElement("div"); Y.appendChild(M.createComment("")); if (Y.getElementsByTagName("*").length > 0) { L.find.TAG = function (ab, aa) { aa = aa.getElementsByTagName(ab[1]); if (ab[1] === "*") { ab = []; for (var Z = 0; aa[Z]; Z++) { aa[Z].nodeType === 1 && ab.push(aa[Z]) } aa = ab } return aa } } Y.innerHTML = "<a href='#'></a>"; if (Y.firstChild && typeof Y.firstChild.getAttribute !== "undefined" && Y.firstChild.getAttribute("href") !== "#") { L.attrHandle.href = function (Z) { return Z.getAttribute("href", 2) } } Y = null })(); M.querySelectorAll && function () { var aa = N, Z = M.createElement("div"); Z.innerHTML = "<p class='TEST'></p>"; if (!(Z.querySelectorAll && Z.querySelectorAll(".TEST").length === 0)) { N = function (ab, bl, bm, ba) { bl = bl || M; if (!ba && bl.nodeType === 9 && !s(bl)) { try { return c(bl.querySelectorAll(ab), bm) } catch (bb) { } } return aa(ab, bl, bm, ba) }; for (var Y in aa) { N[Y] = aa[Y] } Z = null } } (); (function () { var Y = M.createElement("div"); Y.innerHTML = "<div class='test e'></div><div class='test'></div>"; if (!(!Y.getElementsByClassName || Y.getElementsByClassName("e").length === 0)) { Y.lastChild.className = "e"; if (Y.getElementsByClassName("e").length !== 1) { L.order.splice(1, 0, "CLASS"); L.find.CLASS = function (ab, aa, Z) { if (typeof aa.getElementsByClassName !== "undefined" && !Z) { return aa.getElementsByClassName(ab[1]) } }; Y = null } } })(); var A = M.compareDocumentPosition ? function (Z, Y) { return !!(Z.compareDocumentPosition(Y) & 16) } : function (Z, Y) { return Z !== Y && (Z.contains ? Z.contains(Y) : true) }, s = function (Y) { return (Y = (Y ? Y.ownerDocument || Y : 0).documentElement) ? Y.nodeName !== "HTML" : false }, X = function (ab, aa) { var Z = [], Y = "", ba; for (aa = aa.nodeType ? [aa] : aa; ba = L.match.PSEUDO.exec(ab); ) { Y += ba[0]; ab = ab.replace(L.match.PSEUDO, "") } ab = L.relative[ab] ? ab + "*" : ab; ba = 0; for (var bb = aa.length; ba < bb; ba++) { N(ab, aa[ba], Z) } return N.filter(Y, Z) }; ah.find = N; ah.expr = N.selectors; ah.expr[":"] = ah.expr.filters; ah.unique = N.uniqueSort; ah.text = W; ah.isXMLDoc = s; ah.contains = A })(); var f = /Until$/, a9 = /^(?:parents|prevUntil|prevAll)/, aW = /,/; au = Array.prototype.slice; var aL = function (s, c, A) { if (ah.isFunction(c)) { return ah.grep(s, function (G, F) { return !!c.call(G, F, G) === A }) } else { if (c.nodeType) { return ah.grep(s, function (F) { return F === c === A }) } else { if (typeof c === "string") { var w = ah.grep(s, function (F) { return F.nodeType === 1 }); if (aT.test(c)) { return ah.filter(c, w, !A) } else { c = ah.filter(c, w) } } } } return ah.grep(s, function (F) { return ah.inArray(F, c) >= 0 === A }) }; ah.fn.extend({ find: function (s) { for (var c = this.pushStack("", "find", s), J = 0, F = 0, G = this.length; F < G; F++) { J = c.length; ah.find(s, this[F], c); if (F > 0) { for (var w = J; w < c.length; w++) { for (var A = 0; A < J; A++) { if (c[A] === c[w]) { c.splice(w--, 1); break } } } } } return c }, has: function (s) { var c = ah(s); return this.filter(function () { for (var A = 0, w = c.length; A < w; A++) { if (ah.contains(this, c[A])) { return true } } }) }, not: function (c) { return this.pushStack(aL(this, c, false), "not", c) }, filter: function (c) { return this.pushStack(aL(this, c, true), "filter", c) }, is: function (c) { return !!c && ah.filter(c, this).length > 0 }, closest: function (L, K) { if (ah.isArray(L)) { var J = [], F = this[0], G, w = {}, A; if (F && L.length) { G = 0; for (var c = L.length; G < c; G++) { A = L[G]; w[A] || (w[A] = ah.expr.match.POS.test(A) ? ah(A, K || this.context) : A) } for (; F && F.ownerDocument && F !== K; ) { for (A in w) { G = w[A]; if (G.jquery ? G.index(F) > -1 : ah(F).is(G)) { J.push({ selector: A, elem: F }); delete w[A] } } F = F.parentNode } } return J } var s = ah.expr.match.POS.test(L) ? ah(L, K || this.context) : null; return this.map(function (O, N) { for (; N && N.ownerDocument && N !== K; ) { if (s ? s.index(N) > -1 : ah(N).is(L)) { return N } N = N.parentNode } return null }) }, index: function (c) { if (!c || typeof c === "string") { return ah.inArray(this[0], c ? ah(c) : this.parent().children()) } return ah.inArray(c.jquery ? c[0] : c, this) }, add: function (s, c) { s = typeof s === "string" ? ah(s, c || this.context) : ah.makeArray(s); c = ah.merge(this.get(), s); return this.pushStack(l(s[0]) || l(c[0]) ? c : ah.unique(c)) }, andSelf: function () { return this.add(this.prevObject) } }); ah.each({ parent: function (c) { return (c = c.parentNode) && c.nodeType !== 11 ? c : null }, parents: function (c) { return ah.dir(c, "parentNode") }, parentsUntil: function (s, c, w) { return ah.dir(s, "parentNode", w) }, next: function (c) { return ah.nth(c, 2, "nextSibling") }, prev: function (c) { return ah.nth(c, 2, "previousSibling") }, nextAll: function (c) { return ah.dir(c, "nextSibling") }, prevAll: function (c) { return ah.dir(c, "previousSibling") }, nextUntil: function (s, c, w) { return ah.dir(s, "nextSibling", w) }, prevUntil: function (s, c, w) { return ah.dir(s, "previousSibling", w) }, siblings: function (c) { return ah.sibling(c.parentNode.firstChild, c) }, children: function (c) { return ah.sibling(c.firstChild) }, contents: function (c) { return ah.nodeName(c, "iframe") ? c.contentDocument || c.contentWindow.document : ah.makeArray(c.childNodes) } }, function (s, c) { ah.fn[s] = function (F, w) { var A = ah.map(this, c, F); f.test(s) || (w = F); if (w && typeof w === "string") { A = ah.filter(w, A) } A = this.length > 1 ? ah.unique(A) : A; if ((this.length > 1 || aW.test(w)) && a9.test(s)) { A = A.reverse() } return this.pushStack(A, s, au.call(arguments).join(",")) } }); ah.extend({ filter: function (s, c, w) { if (w) { s = ":not(" + s + ")" } return ah.find.matches(s, c) }, dir: function (s, c, A) { var w = []; for (s = s[c]; s && s.nodeType !== 9 && (A === I || s.nodeType !== 1 || !ah(s).is(A)); ) { s.nodeType === 1 && w.push(s); s = s[c] } return w }, nth: function (s, c, A) { c = c || 1; for (var w = 0; s; s = s[A]) { if (s.nodeType === 1 && ++w === c) { break } } return s }, sibling: function (s, c) { for (var w = []; s; s = s.nextSibling) { s.nodeType === 1 && s !== c && w.push(s) } return w } }); var ai = / jQuery\d+="(?:\d+|null)"/g, ar = /^\s+/, B = /(<([\w:]+)[^>]*?)\/>/g, aD = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i, m = /<([\w:]+)/, ac = /<tbody/i, u = /<|&#?\w+;/, aP = /<script|<object|<embed|<option|<style/i, ak = /checked\s*(?:[^=]|=\s*.checked.)/i, bk = function (s, c, w) { return aD.test(w) ? s : c + "></" + w + ">" }, aJ = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] }; aJ.optgroup = aJ.option; aJ.tbody = aJ.tfoot = aJ.colgroup = aJ.caption = aJ.thead; aJ.th = aJ.td; if (!ah.support.htmlSerialize) { aJ._default = [1, "div<div>", "</div>"] } ah.fn.extend({ text: function (c) { if (ah.isFunction(c)) { return this.each(function (s) { var w = ah(this); w.text(c.call(this, s, w.text())) }) } if (typeof c !== "object" && c !== I) { return this.empty().append((this[0] && this[0].ownerDocument || M).createTextNode(c)) } return ah.text(this) }, wrapAll: function (s) { if (ah.isFunction(s)) { return this.each(function (w) { ah(this).wrapAll(s.call(this, w)) }) } if (this[0]) { var c = ah(s, this[0].ownerDocument).eq(0).clone(true); this[0].parentNode && c.insertBefore(this[0]); c.map(function () { for (var w = this; w.firstChild && w.firstChild.nodeType === 1; ) { w = w.firstChild } return w }).append(this) } return this }, wrapInner: function (c) { if (ah.isFunction(c)) { return this.each(function (s) { ah(this).wrapInner(c.call(this, s)) }) } return this.each(function () { var s = ah(this), w = s.contents(); w.length ? w.wrapAll(c) : s.append(c) }) }, wrap: function (c) { return this.each(function () { ah(this).wrapAll(c) }) }, unwrap: function () { return this.parent().each(function () { ah.nodeName(this, "body") || ah(this).replaceWith(this.childNodes) }).end() }, append: function () { return this.domManip(arguments, true, function (c) { this.nodeType === 1 && this.appendChild(c) }) }, prepend: function () { return this.domManip(arguments, true, function (c) { this.nodeType === 1 && this.insertBefore(c, this.firstChild) }) }, before: function () { if (this[0] && this[0].parentNode) { return this.domManip(arguments, false, function (s) { this.parentNode.insertBefore(s, this) }) } else { if (arguments.length) { var c = ah(arguments[0]); c.push.apply(c, this.toArray()); return this.pushStack(c, "before", arguments) } } }, after: function () { if (this[0] && this[0].parentNode) { return this.domManip(arguments, false, function (s) { this.parentNode.insertBefore(s, this.nextSibling) }) } else { if (arguments.length) { var c = this.pushStack(this, "after", arguments); c.push.apply(c, ah(arguments[0]).toArray()); return c } } }, remove: function (s, c) { for (var A = 0, w; (w = this[A]) != null; A++) { if (!s || ah.filter(s, [w]).length) { if (!c && w.nodeType === 1) { ah.cleanData(w.getElementsByTagName("*")); ah.cleanData([w]) } w.parentNode && w.parentNode.removeChild(w) } } return this }, empty: function () { for (var s = 0, c; (c = this[s]) != null; s++) { for (c.nodeType === 1 && ah.cleanData(c.getElementsByTagName("*")); c.firstChild; ) { c.removeChild(c.firstChild) } } return this }, clone: function (s) { var c = this.map(function () { if (!ah.support.noCloneEvent && !ah.isXMLDoc(this)) { var A = this.outerHTML, w = this.ownerDocument; if (!A) { A = w.createElement("div"); A.appendChild(this.cloneNode(true)); A = A.innerHTML } return ah.clean([A.replace(ai, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(ar, "")], w)[0] } else { return this.cloneNode(true) } }); if (s === true) { bj(this, c); bj(this.find("*"), c.find("*")) } return c }, html: function (s) { if (s === I) { return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ai, "") : null } else { if (typeof s === "string" && !aP.test(s) && (ah.support.leadingWhitespace || !ar.test(s)) && !aJ[(m.exec(s) || ["", ""])[1].toLowerCase()]) { s = s.replace(B, bk); try { for (var c = 0, A = this.length; c < A; c++) { if (this[c].nodeType === 1) { ah.cleanData(this[c].getElementsByTagName("*")); this[c].innerHTML = s } } } catch (w) { this.empty().append(s) } } else { ah.isFunction(s) ? this.each(function (J) { var F = ah(this), G = F.html(); F.empty().append(function () { return s.call(this, J, G) }) }) : this.empty().append(s) } } return this }, replaceWith: function (c) { if (this[0] && this[0].parentNode) { if (ah.isFunction(c)) { return this.each(function (s) { var A = ah(this), w = A.html(); A.replaceWith(c.call(this, s, w)) }) } if (typeof c !== "string") { c = ah(c).detach() } return this.each(function () { var s = this.nextSibling, w = this.parentNode; ah(this).remove(); s ? ah(s).before(c) : ah(w).append(c) }) } else { return this.pushStack(ah(ah.isFunction(c) ? c() : c), "replaceWith", c) } }, detach: function (c) { return this.remove(c, true) }, domManip: function (O, N, L) { function J(P) { return ah.nodeName(P, "table") ? P.getElementsByTagName("tbody")[0] || P.appendChild(P.ownerDocument.createElement("tbody")) : P } var K, F, G = O[0], s = [], A; if (!ah.support.checkClone && arguments.length === 3 && typeof G === "string" && ak.test(G)) { return this.each(function () { ah(this).domManip(O, N, L, true) }) } if (ah.isFunction(G)) { return this.each(function (P) { var Q = ah(this); O[0] = G.call(this, P, N ? Q.html() : I); Q.domManip(O, N, L) }) } if (this[0]) { K = G && G.parentNode; K = ah.support.parentNode && K && K.nodeType === 11 && K.childNodes.length === this.length ? { fragment: K} : a3(O, this, s); A = K.fragment; if (F = A.childNodes.length === 1 ? (A = A.firstChild) : A.firstChild) { N = N && ah.nodeName(F, "tr"); for (var w = 0, c = this.length; w < c; w++) { L.call(N ? J(this[w], F) : this[w], w > 0 || K.cacheable || this.length > 1 ? A.cloneNode(true) : A) } } s.length && ah.each(s, E) } return this } }); ah.fragments = {}; ah.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (s, c) { ah.fn[s] = function (J) { var F = []; J = ah(J); var G = this.length === 1 && this[0].parentNode; if (G && G.nodeType === 11 && G.childNodes.length === 1 && J.length === 1) { J[c](this[0]); return this } else { G = 0; for (var w = J.length; G < w; G++) { var A = (G > 0 ? this.clone(true) : this).get(); ah.fn[c].apply(ah(J[G]), A); F = F.concat(A) } return this.pushStack(F, s, J.selector) } } }); ah.extend({ clean: function (O, N, L, J) { N = N || M; if (typeof N.createElement === "undefined") { N = N.ownerDocument || N[0] && N[0].ownerDocument || M } for (var K = [], F = 0, G; (G = O[F]) != null; F++) { if (typeof G === "number") { G += "" } if (G) { if (typeof G === "string" && !u.test(G)) { G = N.createTextNode(G) } else { if (typeof G === "string") { G = G.replace(B, bk); var s = (m.exec(G) || ["", ""])[1].toLowerCase(), A = aJ[s] || aJ._default, w = A[0], c = N.createElement("div"); for (c.innerHTML = A[1] + G + A[2]; w--; ) { c = c.lastChild } if (!ah.support.tbody) { w = ac.test(G); s = s === "table" && !w ? c.firstChild && c.firstChild.childNodes : A[1] === "<table>" && !w ? c.childNodes : []; for (A = s.length - 1; A >= 0; --A) { ah.nodeName(s[A], "tbody") && !s[A].childNodes.length && s[A].parentNode.removeChild(s[A]) } } !ah.support.leadingWhitespace && ar.test(G) && c.insertBefore(N.createTextNode(ar.exec(G)[0]), c.firstChild); G = c.childNodes } } if (G.nodeType) { K.push(G) } else { K = ah.merge(K, G) } } } if (L) { for (F = 0; K[F]; F++) { if (J && ah.nodeName(K[F], "script") && (!K[F].type || K[F].type.toLowerCase() === "text/javascript")) { J.push(K[F].parentNode ? K[F].parentNode.removeChild(K[F]) : K[F]) } else { K[F].nodeType === 1 && K.splice.apply(K, [F + 1, 0].concat(ah.makeArray(K[F].getElementsByTagName("script")))); L.appendChild(K[F]) } } } return K }, cleanData: function (L) { for (var K, J, F = ah.cache, G = ah.event.special, w = ah.support.deleteExpando, A = 0, c; (c = L[A]) != null; A++) { if (J = c[ah.expando]) { K = F[J]; if (K.events) { for (var s in K.events) { G[s] ? ah.event.remove(c, s) : aG(c, s, K.handle) } } if (w) { delete c[ah.expando] } else { c.removeAttribute && c.removeAttribute(ah.expando) } delete F[J] } } } }); var h = /z-?index|font-?weight|opacity|zoom|line-?height/i, a4 = /alpha\([^)]*\)/, aQ = /opacity=([^)]*)/, aE = /float/i, ad = /-([a-z])/ig, bf = /([A-Z])/g, aZ = /^-?\d+(?:px)?$/i, aI = /^-?\d/, af = { position: "absolute", visibility: "hidden", display: "block" }, y = ["Left", "Right"], k = ["Top", "Bottom"], bi = M.defaultView && M.defaultView.getComputedStyle, al = ah.support.cssFloat ? "cssFloat" : "styleFloat", v = function (s, c) { return c.toUpperCase() }; ah.fn.css = function (s, c) { return ap(this, s, c, true, function (F, w, A) { if (A === I) { return ah.curCSS(F, w) } if (typeof A === "number" && !h.test(w)) { A += "px" } ah.style(F, w, A) }) }; ah.extend({ style: function (s, c, F) { if (!s || s.nodeType === 3 || s.nodeType === 8) { return I } if ((c === "width" || c === "height") && parseFloat(F) < 0) { F = I } var w = s.style || s, A = F !== I; if (!ah.support.opacity && c === "opacity") { if (A) { w.zoom = 1; c = parseInt(F, 10) + "" === "NaN" ? "" : "alpha(opacity=" + F * 100 + ")"; s = w.filter || ah.curCSS(s, "filter") || ""; w.filter = a4.test(s) ? s.replace(a4, c) : c } return w.filter && w.filter.indexOf("opacity=") >= 0 ? parseFloat(aQ.exec(w.filter)[1]) / 100 + "" : "" } if (aE.test(c)) { c = al } c = c.replace(ad, v); if (A) { w[c] = F } return w[c] }, css: function (s, c, J, F) { if (c === "width" || c === "height") { var G, w = c === "width" ? y : k; function A() { G = c === "width" ? s.offsetWidth : s.offsetHeight; F !== "border" && ah.each(w, function () { F || (G -= parseFloat(ah.curCSS(s, "padding" + this, true)) || 0); if (F === "margin") { G += parseFloat(ah.curCSS(s, "margin" + this, true)) || 0 } else { G -= parseFloat(ah.curCSS(s, "border" + this + "Width", true)) || 0 } }) } s.offsetWidth !== 0 ? A() : ah.swap(s, af, A); return Math.max(0, Math.round(G)) } return ah.curCSS(s, c, J) }, curCSS: function (s, c, G) { var A, F = s.style; if (!ah.support.opacity && c === "opacity" && s.currentStyle) { A = aQ.test(s.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "" : ""; return A === "" ? "1" : A } if (aE.test(c)) { c = al } if (!G && F && F[c]) { A = F[c] } else { if (bi) { if (aE.test(c)) { c = "float" } c = c.replace(bf, "-$1").toLowerCase(); F = s.ownerDocument.defaultView; if (!F) { return null } if (s = F.getComputedStyle(s, null)) { A = s.getPropertyValue(c) } if (c === "opacity" && A === "") { A = "1" } } else { if (s.currentStyle) { G = c.replace(ad, v); A = s.currentStyle[c] || s.currentStyle[G]; if (!aZ.test(A) && aI.test(A)) { c = F.left; var w = s.runtimeStyle.left; s.runtimeStyle.left = s.currentStyle.left; F.left = G === "fontSize" ? "1em" : A || 0; A = F.pixelLeft + "px"; F.left = c; s.runtimeStyle.left = w } } } } return A }, swap: function (s, c, F) { var w = {}; for (var A in c) { w[A] = s.style[A]; s.style[A] = c[A] } F.call(s); for (A in c) { s.style[A] = w[A] } } }); if (ah.expr && ah.expr.filters) { ah.expr.filters.hidden = function (s) { var c = s.offsetWidth, A = s.offsetHeight, w = s.nodeName.toLowerCase() === "tr"; return c === 0 && A === 0 && !w ? true : c > 0 && A > 0 && !w ? false : ah.curCSS(s, "display") === "none" }; ah.expr.filters.visible = function (c) { return !ah.expr.filters.hidden(c) } } var a2 = aF(), aN = /<script(.|\s)*?\/script>/gi, aj = /select|textarea/i, C = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i, aA = /=\?(&|$)/, i = /\?/, n = /(\?|&)_=.*?(&|$)/, a = /^(\w+:)?\/\/([^\/?#]+)/, a5 = /%20/g, aR = ah.fn.load; ah.fn.extend({ load: function (s, c, G) { if (typeof s !== "string") { return aR.call(this, s) } else { if (!this.length) { return this } } var A = s.indexOf(" "); if (A >= 0) { var F = s.slice(A, s.length); s = s.slice(0, A) } A = "GET"; if (c) { if (ah.isFunction(c)) { G = c; c = null } else { if (typeof c === "object") { c = ah.param(c, ah.ajaxSettings.traditional); A = "POST" } } } var w = this; ah.ajax({ url: s, type: A, dataType: "html", data: c, complete: function (J, K) { if (K === "success" || K === "notmodified") { w.html(F ? ah("<div />").append(J.responseText.replace(aN, "")).find(F) : J.responseText) } G && w.each(G, [J.responseText, K, J]) } }); return this }, serialize: function () { return ah.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { return this.elements ? ah.makeArray(this.elements) : this }).filter(function () { return this.name && !this.disabled && (this.checked || aj.test(this.nodeName) || C.test(this.type)) }).map(function (s, c) { s = ah(this).val(); return s == null ? null : ah.isArray(s) ? ah.map(s, function (w) { return { name: c.name, value: w} }) : { name: c.name, value: s} }).get() } }); ah.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (s, c) { ah.fn[c] = function (w) { return this.bind(c, w) } }); ah.extend({ get: function (s, c, A, w) { if (ah.isFunction(c)) { w = w || A; A = c; c = null } return ah.ajax({ type: "GET", url: s, data: c, success: A, dataType: w }) }, getScript: function (s, c) { return ah.get(s, null, c, "script") }, getJSON: function (s, c, w) { return ah.get(s, c, w, "json") }, post: function (s, c, A, w) { if (ah.isFunction(c)) { w = w || A; A = c; c = {} } return ah.ajax({ type: "POST", url: s, data: c, success: A, dataType: w }) }, ajaxSetup: function (c) { ah.extend(ah.ajaxSettings, c) }, ajaxSettings: { url: location.href, global: true, type: "GET", contentType: "application/x-www-form-urlencoded", processData: true, async: true, xhr: aO.XMLHttpRequest && (aO.location.protocol !== "file:" || !aO.ActiveXObject) ? function () { return new aO.XMLHttpRequest } : function () { try { return new aO.ActiveXObject("Microsoft.XMLHTTP") } catch (c) { } }, accepts: { xml: "application/xml, text/xml", html: "text/html", script: "text/javascript, application/javascript", json: "application/json, text/javascript", text: "text/plain", _default: "*/*"} }, lastModified: {}, etag: {}, ajax: function (aa) { function Z() { X.success && X.success.call(P, K, R, s); X.global && W("ajaxSuccess", [s, X]) } function Y() { X.complete && X.complete.call(P, s, R); X.global && W("ajaxComplete", [s, X]); X.global && ! --ah.active && ah.event.trigger("ajaxStop") } function W(ba, bb) { (X.context ? ah(X.context) : ah.event).trigger(ba, bb) } var X = ah.extend(true, {}, ah.ajaxSettings, aa), Q, R, K, P = aa && aa.context || X, L = X.type.toUpperCase(); if (X.data && X.processData && typeof X.data !== "string") { X.data = ah.param(X.data, X.traditional) } if (X.dataType === "jsonp") { if (L === "GET") { aA.test(X.url) || (X.url += (i.test(X.url) ? "&" : "?") + (X.jsonp || "callback") + "=?") } else { if (!X.data || !aA.test(X.data)) { X.data = (X.data ? X.data + "&" : "") + (X.jsonp || "callback") + "=?" } } X.dataType = "json" } if (X.dataType === "json" && (X.data && aA.test(X.data) || aA.test(X.url))) { Q = X.jsonpCallback || "jsonp" + a2++; if (X.data) { X.data = (X.data + "").replace(aA, "=" + Q + "$1") } X.url = X.url.replace(aA, "=" + Q + "$1"); X.dataType = "script"; aO[Q] = aO[Q] || function (ba) { K = ba; Z(); Y(); aO[Q] = I; try { delete aO[Q] } catch (bb) { } c && c.removeChild(F) } } if (X.dataType === "script" && X.cache === null) { X.cache = false } if (X.cache === false && L === "GET") { var G = aF(), w = X.url.replace(n, "$1_=" + G + "$2"); X.url = w + (w === X.url ? (i.test(X.url) ? "&" : "?") + "_=" + G : "") } if (X.data && L === "GET") { X.url += (i.test(X.url) ? "&" : "?") + X.data } X.global && !ah.active++ && ah.event.trigger("ajaxStart"); G = (G = a.exec(X.url)) && (G[1] && G[1] !== location.protocol || G[2] !== location.host); if (X.dataType === "script" && L === "GET" && G) { var c = M.getElementsByTagName("head")[0] || M.documentElement, F = M.createElement("script"); F.src = X.url; if (X.scriptCharset) { F.charset = X.scriptCharset } if (!Q) { var J = false; F.onload = F.onreadystatechange = function () { if (!J && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) { J = true; Z(); Y(); F.onload = F.onreadystatechange = null; c && F.parentNode && c.removeChild(F) } } } c.insertBefore(F, c.firstChild); return I } var A = false, s = X.xhr(); if (s) { X.username ? s.open(L, X.url, X.async, X.username, X.password) : s.open(L, X.url, X.async); try { if (X.data || aa && aa.contentType) { s.setRequestHeader("Content-Type", X.contentType) } if (X.ifModified) { ah.lastModified[X.url] && s.setRequestHeader("If-Modified-Since", ah.lastModified[X.url]); ah.etag[X.url] && s.setRequestHeader("If-None-Match", ah.etag[X.url]) } G || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"); s.setRequestHeader("Accept", X.dataType && X.accepts[X.dataType] ? X.accepts[X.dataType] + ", */*" : X.accepts._default) } catch (ab) { } if (X.beforeSend && X.beforeSend.call(P, s, X) === false) { X.global && ! --ah.active && ah.event.trigger("ajaxStop"); s.abort(); return false } X.global && W("ajaxSend", [s, X]); var V = s.onreadystatechange = function (bb) { if (!s || s.readyState === 0 || bb === "abort") { A || Y(); A = true; if (s) { s.onreadystatechange = ah.noop } } else { if (!A && s && (s.readyState === 4 || bb === "timeout")) { A = true; s.onreadystatechange = ah.noop; R = bb === "timeout" ? "timeout" : !ah.httpSuccess(s) ? "error" : X.ifModified && ah.httpNotModified(s, X.url) ? "notmodified" : "success"; var bl; if (R === "success") { try { K = ah.httpData(s, X.dataType, X) } catch (ba) { R = "parsererror"; bl = ba } } if (R === "success" || R === "notmodified") { Q || Z() } else { ah.handleError(X, s, R, bl) } Y(); bb === "timeout" && s.abort(); if (X.async) { s = null } } } }; try { var T = s.abort; s.abort = function () { s && T.call(s); V("abort") } } catch (O) { } X.async && X.timeout > 0 && setTimeout(function () { s && !A && V("timeout") }, X.timeout); try { s.send(L === "POST" || L === "PUT" || L === "DELETE" ? X.data : null) } catch (N) { ah.handleError(X, s, null, N); Y() } X.async || V(); return s } }, handleError: function (s, c, A, w) { if (s.error) { s.error.call(s.context || s, c, A, w) } if (s.global) { (s.context ? ah(s.context) : ah.event).trigger("ajaxError", [c, s, w]) } }, active: 0, httpSuccess: function (s) { try { return !s.status && location.protocol === "file:" || s.status >= 200 && s.status < 300 || s.status === 304 || s.status === 1223 || s.status === 0 } catch (c) { } return false }, httpNotModified: function (s, c) { var A = s.getResponseHeader("Last-Modified"), w = s.getResponseHeader("Etag"); if (A) { ah.lastModified[c] = A } if (w) { ah.etag[c] = w } return s.status === 304 || s.status === 0 }, httpData: function (s, c, F) { var w = s.getResponseHeader("content-type") || "", A = c === "xml" || !c && w.indexOf("xml") >= 0; s = A ? s.responseXML : s.responseText; A && s.documentElement.nodeName === "parsererror" && ah.error("parsererror"); if (F && F.dataFilter) { s = F.dataFilter(s, c) } if (typeof s === "string") { if (c === "json" || !c && w.indexOf("json") >= 0) { s = ah.parseJSON(s) } else { if (c === "script" || !c && w.indexOf("javascript") >= 0) { ah.globalEval(s) } } } return s }, param: function (s, c) { function G(J, K) { if (ah.isArray(K)) { ah.each(K, function (L, N) { c || /\[\]$/.test(J) ? A(J, N) : G(J + "[" + (typeof N === "object" || ah.isArray(N) ? L : "") + "]", N) }) } else { !c && K != null && typeof K === "object" ? ah.each(K, function (L, N) { G(J + "[" + L + "]", N) }) : A(J, K) } } function A(J, K) { K = ah.isFunction(K) ? K() : K; F[F.length] = encodeURIComponent(J) + "=" + encodeURIComponent(K) } var F = []; if (c === I) { c = ah.ajaxSettings.traditional } if (ah.isArray(s) || s.jquery) { ah.each(s, function () { A(this.name, this.value) }) } else { for (var w in s) { G(w, s[w]) } } return F.join("&").replace(a5, "+") } }); var bg = {}, bc = /toggle|show|hide/, aX = /^([+-]=)?([\d+-.]+)(.*)$/, aq, D = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]]; ah.fn.extend({ show: function (s, c) { if (s || s === 0) { return this.animate(aC("show", 3), s, c) } else { s = 0; for (c = this.length; s < c; s++) { var F = ah.data(this[s], "olddisplay"); this[s].style.display = F || ""; if (ah.css(this[s], "display") === "none") { F = this[s].nodeName; var w; if (bg[F]) { w = bg[F] } else { var A = ah("<" + F + " />").appendTo("body"); w = A.css("display"); if (w === "none") { w = "block" } A.remove(); bg[F] = w } ah.data(this[s], "olddisplay", w) } } s = 0; for (c = this.length; s < c; s++) { this[s].style.display = ah.data(this[s], "olddisplay") || "" } return this } }, hide: function (s, c) { if (s || s === 0) { return this.animate(aC("hide", 3), s, c) } else { s = 0; for (c = this.length; s < c; s++) { var w = ah.data(this[s], "olddisplay"); !w && w !== "none" && ah.data(this[s], "olddisplay", ah.css(this[s], "display")) } s = 0; for (c = this.length; s < c; s++) { this[s].style.display = "none" } return this } }, _toggle: ah.fn.toggle, toggle: function (s, c) { var w = typeof s === "boolean"; if (ah.isFunction(s) && ah.isFunction(c)) { this._toggle.apply(this, arguments) } else { s == null || w ? this.each(function () { var A = w ? s : ah(this).is(":hidden"); ah(this)[A ? "show" : "hide"]() }) : this.animate(aC("toggle", 3), s, c) } return this }, fadeTo: function (s, c, w) { return this.filter(":hidden").css("opacity", 0).show().end().animate({ opacity: c }, s, w) }, animate: function (s, c, F, w) { var A = ah.speed(c, F, w); if (ah.isEmptyObject(s)) { return this.each(A.complete) } return this[A.queue === false ? "each" : "queue"](function () { var J = ah.extend({}, A), K, L = this.nodeType === 1 && ah(this).is(":hidden"), G = this; for (K in s) { var N = K.replace(ad, v); if (K !== N) { s[N] = s[K]; delete s[K]; K = N } if (s[K] === "hide" && L || s[K] === "show" && !L) { return J.complete.call(this) } if ((K === "height" || K === "width") && this.style) { J.display = ah.css(this, "display"); J.overflow = this.style.overflow } if (ah.isArray(s[K])) { (J.specialEasing = J.specialEasing || {})[K] = s[K][1]; s[K] = s[K][0] } } if (J.overflow != null) { this.style.overflow = "hidden" } J.curAnim = ah.extend({}, s); ah.each(s, function (P, O) { var T = new ah.fx(G, J, P); if (bc.test(O)) { T[O === "toggle" ? L ? "show" : "hide" : O](s) } else { var R = aX.exec(O), V = T.cur(true) || 0; if (R) { O = parseFloat(R[2]); var Q = R[3] || "px"; if (Q !== "px") { G.style[P] = (O || 1) + Q; V = (O || 1) / T.cur(true) * V; G.style[P] = V + Q } if (R[1]) { O = (R[1] === "-=" ? -1 : 1) * O + V } T.custom(V, O, Q) } else { T.custom(V, O, "") } } }); return true }) }, stop: function (s, c) { var w = ah.timers; s && this.queue([]); this.each(function () { for (var A = w.length - 1; A >= 0; A--) { if (w[A].elem === this) { c && w[A](true); w.splice(A, 1) } } }); c || this.dequeue(); return this } }); ah.each({ slideDown: aC("show", 1), slideUp: aC("hide", 1), slideToggle: aC("toggle", 1), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide"} }, function (s, c) { ah.fn[s] = function (A, w) { return this.animate(c, A, w) } }); ah.extend({ speed: function (s, c, A) { var w = s && typeof s === "object" ? s : { complete: A || !A && c || ah.isFunction(s) && s, duration: s, easing: A && c || c && !ah.isFunction(c) && c }; w.duration = ah.fx.off ? 0 : typeof w.duration === "number" ? w.duration : ah.fx.speeds[w.duration] || ah.fx.speeds._default; w.old = w.complete; w.complete = function () { w.queue !== false && ah(this).dequeue(); ah.isFunction(w.old) && w.old.call(this) }; return w }, easing: { linear: function (s, c, A, w) { return A + w * s }, swing: function (s, c, A, w) { return (-Math.cos(s * Math.PI) / 2 + 0.5) * w + A } }, timers: [], fx: function (s, c, w) { this.options = c; this.elem = s; this.prop = w; if (!c.orig) { c.orig = {} } } }); ah.fx.prototype = { update: function () { this.options.step && this.options.step.call(this.elem, this.now, this); (ah.fx.step[this.prop] || ah.fx.step._default)(this); if ((this.prop === "height" || this.prop === "width") && this.elem.style) { this.elem.style.display = "block" } }, cur: function (c) { if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) { return this.elem[this.prop] } return (c = parseFloat(ah.css(this.elem, this.prop, c))) && c > -10000 ? c : parseFloat(ah.curCSS(this.elem, this.prop)) || 0 }, custom: function (s, c, F) { function w(G) { return A.step(G) } this.startTime = aF(); this.start = s; this.end = c; this.unit = F || this.unit || "px"; this.now = this.start; this.pos = this.state = 0; var A = this; w.elem = this.elem; if (w() && ah.timers.push(w) && !aq) { aq = setInterval(ah.fx.tick, 13) } }, show: function () { this.options.orig[this.prop] = ah.style(this.elem, this.prop); this.options.show = true; this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()); ah(this.elem).show() }, hide: function () { this.options.orig[this.prop] = ah.style(this.elem, this.prop); this.options.hide = true; this.custom(this.cur(), 0) }, step: function (s) { var c = aF(), F = true; if (s || c >= this.options.duration + this.startTime) { this.now = this.end; this.pos = this.state = 1; this.update(); this.options.curAnim[this.prop] = true; for (var w in this.options.curAnim) { if (this.options.curAnim[w] !== true) { F = false } } if (F) { if (this.options.display != null) { this.elem.style.overflow = this.options.overflow; s = ah.data(this.elem, "olddisplay"); this.elem.style.display = s ? s : this.options.display; if (ah.css(this.elem, "display") === "none") { this.elem.style.display = "block" } } this.options.hide && ah(this.elem).hide(); if (this.options.hide || this.options.show) { for (var A in this.options.curAnim) { ah.style(this.elem, A, this.options.orig[A]) } } this.options.complete.call(this.elem) } return false } else { A = c - this.startTime; this.state = A / this.options.duration; s = this.options.easing || (ah.easing.swing ? "swing" : "linear"); this.pos = ah.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || s](this.state, A, 0, 1, this.options.duration); this.now = this.start + (this.end - this.start) * this.pos; this.update() } return true } }; ah.extend(ah.fx, { tick: function () { for (var s = ah.timers, c = 0; c < s.length; c++) { s[c]() || s.splice(c--, 1) } s.length || ah.fx.stop() }, stop: function () { clearInterval(aq); aq = null }, speeds: { slow: 600, fast: 200, _default: 400 }, step: { opacity: function (c) { ah.style(c.elem, "opacity", c.now) }, _default: function (c) { if (c.elem.style && c.elem.style[c.prop] != null) { c.elem.style[c.prop] = (c.prop === "width" || c.prop === "height" ? Math.max(0, c.now) : c.now) + c.unit } else { c.elem[c.prop] = c.now } } } }); if (ah.expr && ah.expr.filters) { ah.expr.filters.animated = function (c) { return ah.grep(ah.timers, function (s) { return c === s.elem }).length } } ah.fn.offset = "getBoundingClientRect" in M.documentElement ? function (s) { var c = this[0]; if (s) { return this.each(function (F) { ah.offset.setOffset(this, s, F) }) } if (!c || !c.ownerDocument) { return null } if (c === c.ownerDocument.body) { return ah.offset.bodyOffset(c) } var A = c.getBoundingClientRect(), w = c.ownerDocument; c = w.body; w = w.documentElement; return { top: A.top + (self.pageYOffset || ah.support.boxModel && w.scrollTop || c.scrollTop) - (w.clientTop || c.clientTop || 0), left: A.left + (self.pageXOffset || ah.support.boxModel && w.scrollLeft || c.scrollLeft) - (w.clientLeft || c.clientLeft || 0)} } : function (N) { var L = this[0]; if (N) { return this.each(function (O) { ah.offset.setOffset(this, N, O) }) } if (!L || !L.ownerDocument) { return null } if (L === L.ownerDocument.body) { return ah.offset.bodyOffset(L) } ah.offset.initialize(); var K = L.offsetParent, G = L, J = L.ownerDocument, A, F = J.documentElement, c = J.body; G = (J = J.defaultView) ? J.getComputedStyle(L, null) : L.currentStyle; for (var w = L.offsetTop, s = L.offsetLeft; (L = L.parentNode) && L !== c && L !== F; ) { if (ah.offset.supportsFixedPosition && G.position === "fixed") { break } A = J ? J.getComputedStyle(L, null) : L.currentStyle; w -= L.scrollTop; s -= L.scrollLeft; if (L === K) { w += L.offsetTop; s += L.offsetLeft; if (ah.offset.doesNotAddBorder && !(ah.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(L.nodeName))) { w += parseFloat(A.borderTopWidth) || 0; s += parseFloat(A.borderLeftWidth) || 0 } G = K; K = L.offsetParent } if (ah.offset.subtractsBorderForOverflowNotVisible && A.overflow !== "visible") { w += parseFloat(A.borderTopWidth) || 0; s += parseFloat(A.borderLeftWidth) || 0 } G = A } if (G.position === "relative" || G.position === "static") { w += c.offsetTop; s += c.offsetLeft } if (ah.offset.supportsFixedPosition && G.position === "fixed") { w += Math.max(F.scrollTop, c.scrollTop); s += Math.max(F.scrollLeft, c.scrollLeft) } return { top: w, left: s} }; ah.offset = { initialize: function () { var s = M.body, c = M.createElement("div"), G, A, F, w = parseFloat(ah.curCSS(s, "marginTop", true)) || 0; ah.extend(c.style, { position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden" }); c.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>"; s.insertBefore(c, s.firstChild); G = c.firstChild; A = G.firstChild; F = G.nextSibling.firstChild.firstChild; this.doesNotAddBorder = A.offsetTop !== 5; this.doesAddBorderForTableAndCells = F.offsetTop === 5; A.style.position = "fixed"; A.style.top = "20px"; this.supportsFixedPosition = A.offsetTop === 20 || A.offsetTop === 15; A.style.position = A.style.top = ""; G.style.overflow = "hidden"; G.style.position = "relative"; this.subtractsBorderForOverflowNotVisible = A.offsetTop === -5; this.doesNotIncludeMarginInBodyOffset = s.offsetTop !== w; s.removeChild(c); ah.offset.initialize = ah.noop }, bodyOffset: function (s) { var c = s.offsetTop, w = s.offsetLeft; ah.offset.initialize(); if (ah.offset.doesNotIncludeMarginInBodyOffset) { c += parseFloat(ah.curCSS(s, "marginTop", true)) || 0; w += parseFloat(ah.curCSS(s, "marginLeft", true)) || 0 } return { top: c, left: w} }, setOffset: function (s, c, J) { if (/static/.test(ah.curCSS(s, "position"))) { s.style.position = "relative" } var F = ah(s), G = F.offset(), w = parseInt(ah.curCSS(s, "top", true), 10) || 0, A = parseInt(ah.curCSS(s, "left", true), 10) || 0; if (ah.isFunction(c)) { c = c.call(s, J, G) } J = { top: c.top - G.top + w, left: c.left - G.left + A }; "using" in c ? c.using.call(s, J) : F.css(J) } }; ah.fn.extend({ position: function () { if (!this[0]) { return null } var s = this[0], c = this.offsetParent(), A = this.offset(), w = /^body|html$/i.test(c[0].nodeName) ? { top: 0, left: 0} : c.offset(); A.top -= parseFloat(ah.curCSS(s, "marginTop", true)) || 0; A.left -= parseFloat(ah.curCSS(s, "marginLeft", true)) || 0; w.top += parseFloat(ah.curCSS(c[0], "borderTopWidth", true)) || 0; w.left += parseFloat(ah.curCSS(c[0], "borderLeftWidth", true)) || 0; return { top: A.top - w.top, left: A.left - w.left} }, offsetParent: function () { return this.map(function () { for (var c = this.offsetParent || M.body; c && !/^body|html$/i.test(c.nodeName) && ah.css(c, "position") === "static"; ) { c = c.offsetParent } return c }) } }); ah.each(["Left", "Top"], function (s, c) { var w = "scroll" + c; ah.fn[w] = function (F) { var G = this[0], A; if (!G) { return null } if (F !== I) { return this.each(function () { if (A = o(this)) { A.scrollTo(!s ? F : ah(A).scrollLeft(), s ? F : ah(A).scrollTop()) } else { this[w] = F } }) } else { return (A = o(G)) ? "pageXOffset" in A ? A[s ? "pageYOffset" : "pageXOffset"] : ah.support.boxModel && A.document.documentElement[w] || A.document.body[w] : G[w] } } }); ah.each(["Height", "Width"], function (s, c) { var w = c.toLowerCase(); ah.fn["inner" + c] = function () { return this[0] ? ah.css(this[0], w, false, "padding") : null }; ah.fn["outer" + c] = function (A) { return this[0] ? ah.css(this[0], w, false, A ? "margin" : "border") : null }; ah.fn[w] = function (A) { var F = this[0]; if (!F) { return A == null ? null : this } if (ah.isFunction(A)) { return this.each(function (G) { var J = ah(this); J[w](A.call(this, G, J[w]())) }) } return "scrollTo" in F && F.document ? F.document.compatMode === "CSS1Compat" && F.document.documentElement["client" + c] || F.document.body["client" + c] : F.nodeType === 9 ? Math.max(F.documentElement["client" + c], F.body["scroll" + c], F.documentElement["scroll" + c], F.body["offset" + c], F.documentElement["offset" + c]) : A === I ? ah.css(F, w) : this.css(w, typeof A === "string" ? A : A + "px") } }); aO.jQuery = aO.$ = ah })(window);
/*!
* jQuery Log
*/
(function ($) { $.extend({ "log": function () { if (arguments.length > 0) { var args = (arguments.length > 1) ? Array.prototype.join.call(arguments, " ") : arguments[0]; try { console.log(args); return true; } catch (e) { try { opera.postError(args); return true; } catch (e) { } } return false; } } }); })(jQuery);

var options = {
    list_limit: 6,
    default_zoom: 14,
    min_zoom: 12,
    max_before_tabs: 0,
    get_deals: true,
    dayOfWeek: "",
    map: { width: 655, height: 330, disableUI: false, onLoad: function () { }, flash_key: "ABQIAAAABnszJWzYWWp14_ykA0CZehRb3TL-xcwItOh9AeM_mLZ5a88RSxS9Smsdsg7LJ3sfbRyBrV3Kr6ocng", sigleLocationId: null },
    flashId: "flash_map"
};

// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license
(function ($) {

    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    }

    Tipsy.prototype = {
        show: function () {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();

                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({ top: 0, left: 0, visibility: 'hidden', display: 'block' }).appendTo(document.body);

                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });

                var actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight;
                var gravity = (typeof this.options.gravity == 'function')
                                ? this.options.gravity.call(this.$element[0])
                                : this.options.gravity;

                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = { top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2 };
                        break;
                    case 's':
                        tp = { top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2 };
                        break;
                    case 'e':
                        tp = { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset };
                        break;
                    case 'w':
                        tp = { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset };
                        break;
                }

                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }

                $tip.css(tp).addClass('tipsy-' + gravity);

                if (this.options.fade) {
                    $tip.stop().css({ opacity: 0, display: 'block', visibility: 'visible' }).animate({ opacity: this.options.opacity });
                } else {
                    $tip.css({ visibility: 'visible', opacity: this.options.opacity });
                }
            }
        },

        hide: function () {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function () { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },

        fixTitle: function () {
            var $e = this.$element;
            if ($e.attr('title') || typeof ($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },

        getTitle: function () {
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },

        tip: function () {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
            }
            return this.$tip;
        },

        validate: function () {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },

        enable: function () { this.enabled = true; },
        disable: function () { this.enabled = false; },
        toggleEnabled: function () { this.enabled = !this.enabled; }
    };

    $.fn.tipsy = function (options) {

        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            var tipsy = this.data('tipsy');
            if (tipsy) tipsy[options]();
            return this;
        }

        options = $.extend({}, $.fn.tipsy.defaults, options);

        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }

        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function () { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };

        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function () { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };

        if (!options.live) this.each(function () { get(this); });

        if (options.trigger != 'manual') {
            var binder = options.live ? 'live' : 'bind',
                eventIn = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }

        return this;

    };

    $.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };

    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function (ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };

    $.fn.tipsy.autoNS = function () {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };

    $.fn.tipsy.autoWE = function () {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };

})(jQuery);

(function ($) {
    $.fn.extend({
        placeholders: function (options) {

            var defaults = {
                simplifiedClass: "simplified",
                idleClass: "idle",
                defaultClass: "default",
                focusClass: "focus"
            }

            var options = $.extend(defaults, options);

            return this.each(function () {
                var obj = $(this);

                /* return the one true label */
                function getLabelForId(input_id) {
                    if (input_id !== null && input_id !== "") {
                        var label = $("label[for=" + input_id + "]:last");
                        if (!label.parent().is("legend")) {
                            if (label.length === 1) {
                                return label;
                            }
                        }
                    }
                    return null;
                }

                function getLabelText(inputId) {
                    try {
                        return getLabelForId(inputId).text();
                    } catch (e) {
                        return "";
                    }
                }

                $('input[type=text]', obj).each(function () {
                    var label = getLabelForId($(this).attr('id'));

                    if (label === null) return;

                    label.addClass(options.simplifiedClass);

                    var labelText = label.text();

                    if ($(this).val() == "" || $(this).val() === labelText) {
                        $(this).val(labelText).addClass(options.defaultClass);
                    } else {
                        $(this).removeClass(options.defaultClass);
                    }
                }).focus(function () {
                    $(this).removeClass(options.defaultClass).removeClass(options.idleClass).addClass(options.focusClass);

                    var labelText = getLabelText($(this).attr('id'));
                    if ($(this).val() == labelText) {
                        this.value = '';
                    } else {
                        this.select();
                    }
                }).blur(function () {
                    var labelText = getLabelText($(this).attr('id'));
                    $(this).removeClass(options.defaultClass).removeClass(options.focusClass).addClass(options.idleClass);
                    if ($(this).val() == '' || $(this).val() == labelText) {
                        $(this).addClass(options.defaultClass).val(labelText);
                    }
                }).addClass(options.idleClass);

                $("input[type=password]", obj).each(function () {
                    try {
                        this.type = "text";
                    } catch (err) { }
                    if ($(this).val() == "") {
                        var label = getLabelForId($(this).attr('id'));

                        if (label === null) return;

                        label.addClass(options.simplifiedClass);

                        var labelText = label.text();

                        $(this).addClass(options.defaultClass).val(labelText);
                    }
                })
				.focus(function () {
				    $(this).removeClass(options.idleClass).addClass(options.focusClass);
				    var labelText = getLabelText($(this).attr('id'));
				    if ($(this).val() == labelText) {
				        $(this).val('');
				    }
				    if (this.value != getLabelText($(this).attr('id'))) {
				        this.select();
				    }
				    try {
				        this.type = "password";
				    } catch (err) { }
				})
				.blur(function () {
				    $(this).removeClass(options.focusClass).addClass(options.idleClass);
				    if ($(this).val() == '') {
				        $(this).val(getLabelText($(this).attr('id')));
				        try {
				            this.type = "text";
				        } catch (err) { }
				    }
				}).addClass(options.idleClass);
            });
        }
    });
})(jQuery);


var days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var days_of_week_short = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];

var short_weekday = {
    "Sunday": "Sun",
    "Monday": "Mon",
    "Tuesday": "Tue",
    "Wednesday": "Wed",
    "Thursday": "Thu",
    "Friday": "Fri",
    "Saturday": "Sat"
}

var shadow;
var latitude = longitude = 0;
var only_open = false;
var geocoder;
var retail_locations_map;
var shadow;

var store_type_proper = {
    "BEERSTORE": "Beer Stores",
    "OTHER": "Others",
    "WINE": "Wine Stores",
    "LCBO": "LCBOs"
}

function getFlashMap() {
    var id = options.flashId;
    var movie = null;
    if ($.browser.msie) {
        movie = document.getElementById(id);
    } else {
        movie = document[id];
    }

    movie = document[id];
    return movie;
}

/**
* A Retail Location
* @constructor
*/
function Location(name, id, lat, lng, closingIn, icon, url) {
    this.name = name;
    this.storeId = id;
    this.lat = lat;
    this.lng = lng;
    this.closingIn = closingIn;
    this.icon = icon;
    this.drinkowlUrl = url

    this.type = icon.replace("-close", "").replace(".png", "");
    this.createdAt = new Date();

    this.isOpen = function () {
        if (this.closingIn > 0) return true;
        return false;
    }
}

function handleFocus(element) {
    if (element.value == element.defaultValue) {
        element.value = '';
    }
}

function handleBlur(element) {
    if (element.value == '') {
        element.value = element.defaultValue;
    }
}

function AnyInput_KeyDown(e, target) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
        $("#search_link").click();
        return false;
    }
    return true;
}

function removeMarkers(markerArray) {
    for (var i = 0; i < markerArray.length; i++) {
        //google.maps.event.clearInstanceListeners(markerArray[i]);
        markerArray[i].setMap(null);
        delete markerArray[i];
    }
}

function formatHour(hour) {
    suffix = "";
    var hour_number = Number(hour)
    var minutes = (hour_number) * 60 % 60
    hour_number = Math.floor(hour_number)
    suffix = (hour_number <= 12) ? "am" : "pm";
    return (hour_number % 12 == 0 ? "12" : hour_number % 12) + ((minutes > 0) ? ":" + minutes : "") + suffix
}

$(document).ready(function () {
    $(".toggle-filters").click(function () {
        $(this).toggleClass("selected");
        $(".filter-list").toggle();
        return false;
    });

    $('#big-deal').click(function () {
        window.location = $(this).find('a').attr('href');
        return false;
    })

    $(".tabs_days li").tipsy({ gravity: 's' });
    $(".just_specials a.remove").tipsy({ gravity: 'sw' });

    $("#province_selector li a").click(function () {
        $("#change_location ul.province_list").removeClass("active");
        $(".all_international").removeClass("active");

        $.log($("." + $(this).parent().attr("id")))

        $("." + $(this).parent().attr("id")).addClass("active");

        $("#province_selector li").removeClass("active");
        $(this).parent().addClass("active");

        $(".US_cities").removeClass("active");
        return false;
    });

    $(".tabs_days li.active").prev('li').addClass('beside_active');

    $("#find_US_by_state li a").live('click', function () {
        $(".province_list").removeClass("active");
        $("ul.US_cities, #find_US_by_state li").removeClass('active');
        $("ul." + $(this).parent().attr('id').replace('-tab', '')).addClass('active');
        $(this).parent().addClass('active');
        return false;
    });

    $("#search_US").click(function () {
        $("#province_selector").hide();
        $("#find_US_by_state").show().find("a:first").trigger("click");
        $(this).hide();
        $("#search_CA").show();
        return false;
    });

    $("#search_CA").click(function () {
        $("#province_selector").show().find("a:first").trigger("click");
        $("#find_US_by_state").hide();
        $(this).hide();
        $("#search_US").show();
        return false;
    });

    $("#share_icons_twitter a").click(function () {
        var width = 600;
        var height = 300;
        newwindow = window.open($(this).attr("href"), 'drinkowl-sharing', 'height=' + height + ',width=' + width + ',screenY=' + (window.outerHeight - height) / 2 + ',screenX=' + (window.outerWidth - width) / 2);
        if (window.focus) { newwindow.focus() }

        return false;
    });

    $("#share_icons_facebook a").click(function () {
        var width = 600;
        var height = 300;
        newwindow = window.open($(this).attr("href"), 'drinkowl-sharing', 'height=' + height + ',width=' + width + ',screenY=' + (window.outerHeight - height) / 2 + ',screenX=' + (window.outerWidth - width) / 2);
        if (window.focus) { newwindow.focus() }

        return false;
    });
});

function isOverSwf(mEvent) {
    var elem;
    if (mEvent.srcElement) {
        elem = mEvent.srcElement;
    } else if (mEvent.target) {
        elem = mEvent.target;
    }
    if (elem.nodeName.toLowerCase() == "object" || elem.nodeName.toLowerCase() == "embed") {
        if (elem.getAttribute("classid") == "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000") {
            return true;
        }
        if (elem.getAttribute("type") == "application/x-shockwave-flash") {
            return true;
        }
    }
    return false;
}

function onMouseWheel(event) {
    if (!event)
        event = window.event;

    if (isOverSwf(event)) {
        return cancelEvent(event);
    }

    return true;
}

function cancelEvent(e) {
    e = e ? e : window.event;
    if (e.stopPropagation)
        e.stopPropagation();
    if (e.preventDefault)
        e.preventDefault();
    e.cancelBubble = true;
    e.cancel = true;
    e.returnValue = false;
    return false;
}
if (window.addEventListener) window.addEventListener('DOMMouseScroll', onMouseWheel, false);
window.onmousewheel = document.onmousewheel = onMouseWheel;

/*!
* jQuery UI 1.8.10
*
* Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI
*/
(function (c, j) {
    function k(a) { return !c(a).parents().andSelf().filter(function () { return c.curCSS(this, "visibility") === "hidden" || c.expr.filters.hidden(this) }).length } c.ui = c.ui || {}; if (!c.ui.version) {
        c.extend(c.ui, { version: "1.8.10", keyCode: { ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91
        }
        }); c.fn.extend({ _focus: c.fn.focus, focus: function (a, b) { return typeof a === "number" ? this.each(function () { var d = this; setTimeout(function () { c(d).focus(); b && b.call(d) }, a) }) : this._focus.apply(this, arguments) }, scrollParent: function () {
            var a; a = c.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(c.curCSS(this,
"position", 1)) && /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function () { return /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1)) }).eq(0); return /fixed/.test(this.css("position")) || !a.length ? c(document) : a
        }, zIndex: function (a) {
            if (a !== j) return this.css("zIndex", a); if (this.length) {
                a = c(this[0]); for (var b; a.length && a[0] !== document; ) {
                    b = a.css("position");
                    if (b === "absolute" || b === "relative" || b === "fixed") { b = parseInt(a.css("zIndex"), 10); if (!isNaN(b) && b !== 0) return b } a = a.parent()
                } 
            } return 0
        }, disableSelection: function () { return this.bind((c.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) { a.preventDefault() }) }, enableSelection: function () { return this.unbind(".ui-disableSelection") } 
        }); c.each(["Width", "Height"], function (a, b) {
            function d(f, g, l, m) {
                c.each(e, function () {
                    g -= parseFloat(c.curCSS(f, "padding" + this, true)) || 0; if (l) g -= parseFloat(c.curCSS(f,
"border" + this + "Width", true)) || 0; if (m) g -= parseFloat(c.curCSS(f, "margin" + this, true)) || 0
                }); return g
            } var e = b === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], h = b.toLowerCase(), i = { innerWidth: c.fn.innerWidth, innerHeight: c.fn.innerHeight, outerWidth: c.fn.outerWidth, outerHeight: c.fn.outerHeight }; c.fn["inner" + b] = function (f) { if (f === j) return i["inner" + b].call(this); return this.each(function () { c(this).css(h, d(this, f) + "px") }) }; c.fn["outer" + b] = function (f, g) {
                if (typeof f !== "number") return i["outer" + b].call(this, f); return this.each(function () {
                    c(this).css(h,
d(this, f, true, g) + "px")
                })
            } 
        }); c.extend(c.expr[":"], { data: function (a, b, d) { return !!c.data(a, d[3]) }, focusable: function (a) { var b = a.nodeName.toLowerCase(), d = c.attr(a, "tabindex"); if ("area" === b) { b = a.parentNode; d = b.name; if (!a.href || !d || b.nodeName.toLowerCase() !== "map") return false; a = c("img[usemap=#" + d + "]")[0]; return !!a && k(a) } return (/input|select|textarea|button|object/.test(b) ? !a.disabled : "a" == b ? a.href || !isNaN(d) : !isNaN(d)) && k(a) }, tabbable: function (a) { var b = c.attr(a, "tabindex"); return (isNaN(b) || b >= 0) && c(a).is(":focusable") } });
        c(function () { var a = document.body, b = a.appendChild(b = document.createElement("div")); c.extend(b.style, { minHeight: "100px", height: "auto", padding: 0, borderWidth: 0 }); c.support.minHeight = b.offsetHeight === 100; c.support.selectstart = "onselectstart" in b; a.removeChild(b).style.display = "none" }); c.extend(c.ui, { plugin: { add: function (a, b, d) { a = c.ui[a].prototype; for (var e in d) { a.plugins[e] = a.plugins[e] || []; a.plugins[e].push([b, d[e]]) } }, call: function (a, b, d) {
            if ((b = a.plugins[b]) && a.element[0].parentNode) for (var e = 0; e < b.length; e++) a.options[b[e][0]] &&
b[e][1].apply(a.element, d)
        } 
        }, contains: function (a, b) { return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b) }, hasScroll: function (a, b) { if (c(a).css("overflow") === "hidden") return false; b = b && b === "left" ? "scrollLeft" : "scrollTop"; var d = false; if (a[b] > 0) return true; a[b] = 1; d = a[b] > 0; a[b] = 0; return d }, isOverAxis: function (a, b, d) { return a > b && a < b + d }, isOver: function (a, b, d, e, h, i) { return c.ui.isOverAxis(a, d, h) && c.ui.isOverAxis(b, e, i) } 
        })
    } 
})(jQuery);
; /*!
 * jQuery UI Widget 1.8.10
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function (b, j) {
    if (b.cleanData) { var k = b.cleanData; b.cleanData = function (a) { for (var c = 0, d; (d = a[c]) != null; c++) b(d).triggerHandler("remove"); k(a) } } else { var l = b.fn.remove; b.fn.remove = function (a, c) { return this.each(function () { if (!c) if (!a || b.filter(a, [this]).length) b("*", this).add([this]).each(function () { b(this).triggerHandler("remove") }); return l.call(b(this), a, c) }) } } b.widget = function (a, c, d) {
        var e = a.split(".")[0], f; a = a.split(".")[1]; f = e + "-" + a; if (!d) { d = c; c = b.Widget } b.expr[":"][f] = function (h) {
            return !!b.data(h,
a)
        }; b[e] = b[e] || {}; b[e][a] = function (h, g) { arguments.length && this._createWidget(h, g) }; c = new c; c.options = b.extend(true, {}, c.options); b[e][a].prototype = b.extend(true, c, { namespace: e, widgetName: a, widgetEventPrefix: b[e][a].prototype.widgetEventPrefix || a, widgetBaseClass: f }, d); b.widget.bridge(a, b[e][a])
    }; b.widget.bridge = function (a, c) {
        b.fn[a] = function (d) {
            var e = typeof d === "string", f = Array.prototype.slice.call(arguments, 1), h = this; d = !e && f.length ? b.extend.apply(null, [true, d].concat(f)) : d; if (e && d.charAt(0) === "_") return h;
            e ? this.each(function () { var g = b.data(this, a), i = g && b.isFunction(g[d]) ? g[d].apply(g, f) : g; if (i !== g && i !== j) { h = i; return false } }) : this.each(function () { var g = b.data(this, a); g ? g.option(d || {})._init() : b.data(this, a, new c(d, this)) }); return h
        } 
    }; b.Widget = function (a, c) { arguments.length && this._createWidget(a, c) }; b.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", options: { disabled: false }, _createWidget: function (a, c) {
        b.data(c, this.widgetName, this); this.element = b(c); this.options = b.extend(true, {}, this.options,
this._getCreateOptions(), a); var d = this; this.element.bind("remove." + this.widgetName, function () { d.destroy() }); this._create(); this._trigger("create"); this._init()
    }, _getCreateOptions: function () { return b.metadata && b.metadata.get(this.element[0])[this.widgetName] }, _create: function () { }, _init: function () { }, destroy: function () { this.element.unbind("." + this.widgetName).removeData(this.widgetName); this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled") },
        widget: function () { return this.element }, option: function (a, c) { var d = a; if (arguments.length === 0) return b.extend({}, this.options); if (typeof a === "string") { if (c === j) return this.options[a]; d = {}; d[a] = c } this._setOptions(d); return this }, _setOptions: function (a) { var c = this; b.each(a, function (d, e) { c._setOption(d, e) }); return this }, _setOption: function (a, c) { this.options[a] = c; if (a === "disabled") this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c); return this },
        enable: function () { return this._setOption("disabled", false) }, disable: function () { return this._setOption("disabled", true) }, _trigger: function (a, c, d) { var e = this.options[a]; c = b.Event(c); c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase(); d = d || {}; if (c.originalEvent) { a = b.event.props.length; for (var f; a; ) { f = b.event.props[--a]; c[f] = c.originalEvent[f] } } this.element.trigger(c, d); return !(b.isFunction(e) && e.call(this.element[0], c, d) === false || c.isDefaultPrevented()) } 
    }
})(jQuery);
; /*
 * jQuery UI Position 1.8.10
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function (c) {
    c.ui = c.ui || {}; var n = /left|center|right/, o = /top|center|bottom/, t = c.fn.position, u = c.fn.offset; c.fn.position = function (b) {
        if (!b || !b.of) return t.apply(this, arguments); b = c.extend({}, b); var a = c(b.of), d = a[0], g = (b.collision || "flip").split(" "), e = b.offset ? b.offset.split(" ") : [0, 0], h, k, j; if (d.nodeType === 9) { h = a.width(); k = a.height(); j = { top: 0, left: 0} } else if (d.setTimeout) { h = a.width(); k = a.height(); j = { top: a.scrollTop(), left: a.scrollLeft()} } else if (d.preventDefault) {
            b.at = "left top"; h = k = 0; j = { top: b.of.pageY,
                left: b.of.pageX
            }
        } else { h = a.outerWidth(); k = a.outerHeight(); j = a.offset() } c.each(["my", "at"], function () { var f = (b[this] || "").split(" "); if (f.length === 1) f = n.test(f[0]) ? f.concat(["center"]) : o.test(f[0]) ? ["center"].concat(f) : ["center", "center"]; f[0] = n.test(f[0]) ? f[0] : "center"; f[1] = o.test(f[1]) ? f[1] : "center"; b[this] = f }); if (g.length === 1) g[1] = g[0]; e[0] = parseInt(e[0], 10) || 0; if (e.length === 1) e[1] = e[0]; e[1] = parseInt(e[1], 10) || 0; if (b.at[0] === "right") j.left += h; else if (b.at[0] === "center") j.left += h / 2; if (b.at[1] === "bottom") j.top +=
k; else if (b.at[1] === "center") j.top += k / 2; j.left += e[0]; j.top += e[1]; return this.each(function () {
    var f = c(this), l = f.outerWidth(), m = f.outerHeight(), p = parseInt(c.curCSS(this, "marginLeft", true)) || 0, q = parseInt(c.curCSS(this, "marginTop", true)) || 0, v = l + p + (parseInt(c.curCSS(this, "marginRight", true)) || 0), w = m + q + (parseInt(c.curCSS(this, "marginBottom", true)) || 0), i = c.extend({}, j), r; if (b.my[0] === "right") i.left -= l; else if (b.my[0] === "center") i.left -= l / 2; if (b.my[1] === "bottom") i.top -= m; else if (b.my[1] === "center") i.top -=
m / 2; i.left = Math.round(i.left); i.top = Math.round(i.top); r = { left: i.left - p, top: i.top - q }; c.each(["left", "top"], function (s, x) { c.ui.position[g[s]] && c.ui.position[g[s]][x](i, { targetWidth: h, targetHeight: k, elemWidth: l, elemHeight: m, collisionPosition: r, collisionWidth: v, collisionHeight: w, offset: e, my: b.my, at: b.at }) }); c.fn.bgiframe && f.bgiframe(); f.offset(c.extend(i, { using: b.using }))
})
    }; c.ui.position = { fit: { left: function (b, a) {
        var d = c(window); d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft(); b.left =
d > 0 ? b.left - d : Math.max(b.left - a.collisionPosition.left, b.left)
    }, top: function (b, a) { var d = c(window); d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop(); b.top = d > 0 ? b.top - d : Math.max(b.top - a.collisionPosition.top, b.top) } 
    }, flip: { left: function (b, a) {
        if (a.at[0] !== "center") {
            var d = c(window); d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft(); var g = a.my[0] === "left" ? -a.elemWidth : a.my[0] === "right" ? a.elemWidth : 0, e = a.at[0] === "left" ? a.targetWidth : -a.targetWidth, h = -2 * a.offset[0]; b.left +=
a.collisionPosition.left < 0 ? g + e + h : d > 0 ? g + e + h : 0
        } 
    }, top: function (b, a) { if (a.at[1] !== "center") { var d = c(window); d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop(); var g = a.my[1] === "top" ? -a.elemHeight : a.my[1] === "bottom" ? a.elemHeight : 0, e = a.at[1] === "top" ? a.targetHeight : -a.targetHeight, h = -2 * a.offset[1]; b.top += a.collisionPosition.top < 0 ? g + e + h : d > 0 ? g + e + h : 0 } } 
    }
    }; if (!c.offset.setOffset) {
        c.offset.setOffset = function (b, a) {
            if (/static/.test(c.curCSS(b, "position"))) b.style.position = "relative"; var d = c(b),
g = d.offset(), e = parseInt(c.curCSS(b, "top", true), 10) || 0, h = parseInt(c.curCSS(b, "left", true), 10) || 0; g = { top: a.top - g.top + e, left: a.left - g.left + h }; "using" in a ? a.using.call(b, g) : d.css(g)
        }; c.fn.offset = function (b) { var a = this[0]; if (!a || !a.ownerDocument) return null; if (b) return this.each(function () { c.offset.setOffset(this, b) }); return u.call(this) } 
    } 
})(jQuery);
; /*
 * jQuery UI Autocomplete 1.8.10
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function (d) {
    var e = 0; d.widget("ui.autocomplete", { options: { appendTo: "body", delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null }, pending: 0, _create: function () {
        var a = this, b = this.element[0].ownerDocument, g; this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({ role: "textbox", "aria-autocomplete": "list", "aria-haspopup": "true" }).bind("keydown.autocomplete", function (c) {
            if (!(a.options.disabled || a.element.attr("readonly"))) {
                g = false; var f = d.ui.keyCode;
                switch (c.keyCode) {
                    case f.PAGE_UP: a._move("previousPage", c); break; case f.PAGE_DOWN: a._move("nextPage", c); break; case f.UP: a._move("previous", c); c.preventDefault(); break; case f.DOWN: a._move("next", c); c.preventDefault(); break; case f.ENTER: case f.NUMPAD_ENTER: if (a.menu.active) { g = true; c.preventDefault() } case f.TAB: if (!a.menu.active) return; a.menu.select(c); break; case f.ESCAPE: a.element.val(a.term); a.close(c); break; default: clearTimeout(a.searching); a.searching = setTimeout(function () {
                        if (a.term != a.element.val()) {
                            a.selectedItem =
null; a.search(null, c)
                        } 
                    }, a.options.delay); break
                } 
            } 
        }).bind("keypress.autocomplete", function (c) { if (g) { g = false; c.preventDefault() } }).bind("focus.autocomplete", function () { if (!a.options.disabled) { a.selectedItem = null; a.previous = a.element.val() } }).bind("blur.autocomplete", function (c) { if (!a.options.disabled) { clearTimeout(a.searching); a.closing = setTimeout(function () { a.close(c); a._change(c) }, 150) } }); this._initSource(); this.response = function () { return a._response.apply(a, arguments) }; this.menu = d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo ||
"body", b)[0]).mousedown(function (c) { var f = a.menu.element[0]; d(c.target).closest(".ui-menu-item").length || setTimeout(function () { d(document).one("mousedown", function (h) { h.target !== a.element[0] && h.target !== f && !d.ui.contains(f, h.target) && a.close() }) }, 1); setTimeout(function () { clearTimeout(a.closing) }, 13) }).menu({ focus: function (c, f) { f = f.item.data("item.autocomplete"); false !== a._trigger("focus", c, { item: f }) && /^key/.test(c.originalEvent.type) && a.element.val(f.value) }, selected: function (c, f) {
    var h = f.item.data("item.autocomplete"),
i = a.previous; if (a.element[0] !== b.activeElement) { a.element.focus(); a.previous = i; setTimeout(function () { a.previous = i; a.selectedItem = h }, 1) } false !== a._trigger("select", c, { item: h }) && a.element.val(h.value); a.term = a.element.val(); a.close(c); a.selectedItem = h
}, blur: function () { a.menu.element.is(":visible") && a.element.val() !== a.term && a.element.val(a.term) } 
}).zIndex(this.element.zIndex() + 1).css({ top: 0, left: 0 }).hide().data("menu"); d.fn.bgiframe && this.menu.element.bgiframe()
    }, destroy: function () {
        this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
        this.menu.element.remove(); d.Widget.prototype.destroy.call(this)
    }, _setOption: function (a, b) { d.Widget.prototype._setOption.apply(this, arguments); a === "source" && this._initSource(); if (a === "appendTo") this.menu.element.appendTo(d(b || "body", this.element[0].ownerDocument)[0]); a === "disabled" && b && this.xhr && this.xhr.abort() }, _initSource: function () {
        var a = this, b, g; if (d.isArray(this.options.source)) { b = this.options.source; this.source = function (c, f) { f(d.ui.autocomplete.filter(b, c.term)) } } else if (typeof this.options.source ===
"string") { g = this.options.source; this.source = function (c, f) { a.xhr && a.xhr.abort(); a.xhr = d.ajax({ url: g, data: c, dataType: "json", autocompleteRequest: ++e, success: function (h) { this.autocompleteRequest === e && f(h) }, error: function () { this.autocompleteRequest === e && f([]) } }) } } else this.source = this.options.source
    }, search: function (a, b) { a = a != null ? a : this.element.val(); this.term = this.element.val(); if (a.length < this.options.minLength) return this.close(b); clearTimeout(this.closing); if (this._trigger("search", b) !== false) return this._search(a) },
        _search: function (a) { this.pending++; this.element.addClass("ui-autocomplete-loading"); this.source({ term: a }, this.response) }, _response: function (a) { if (!this.options.disabled && a && a.length) { a = this._normalize(a); this._suggest(a); this._trigger("open") } else this.close(); this.pending--; this.pending || this.element.removeClass("ui-autocomplete-loading") }, close: function (a) { clearTimeout(this.closing); if (this.menu.element.is(":visible")) { this.menu.element.hide(); this.menu.deactivate(); this._trigger("close", a) } }, _change: function (a) {
            this.previous !==
this.element.val() && this._trigger("change", a, { item: this.selectedItem })
        }, _normalize: function (a) { if (a.length && a[0].label && a[0].value) return a; return d.map(a, function (b) { if (typeof b === "string") return { label: b, value: b }; return d.extend({ label: b.label || b.value, value: b.value || b.label }, b) }) }, _suggest: function (a) { var b = this.menu.element.empty().zIndex(this.element.zIndex() + 1); this._renderMenu(b, a); this.menu.deactivate(); this.menu.refresh(); b.show(); this._resizeMenu(); b.position(d.extend({ of: this.element }, this.options.position)) },
        _resizeMenu: function () { var a = this.menu.element; a.outerWidth(Math.max(a.width("").outerWidth(), this.element.outerWidth())) }, _renderMenu: function (a, b) { var g = this; d.each(b, function (c, f) { g._renderItem(a, f) }) }, _renderItem: function (a, b) { return d("<li></li>").data("item.autocomplete", b).append(d("<a></a>").text(b.label)).appendTo(a) }, _move: function (a, b) {
            if (this.menu.element.is(":visible")) if (this.menu.first() && /^previous/.test(a) || this.menu.last() && /^next/.test(a)) { this.element.val(this.term); this.menu.deactivate() } else this.menu[a](b);
            else this.search(null, b)
        }, widget: function () { return this.menu.element } 
    }); d.extend(d.ui.autocomplete, { escapeRegex: function (a) { return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") }, filter: function (a, b) { var g = new RegExp(d.ui.autocomplete.escapeRegex(b), "i"); return d.grep(a, function (c) { return g.test(c.label || c.value || c) }) } })
})(jQuery);
(function (d) {
    d.widget("ui.menu", { _create: function () { var e = this; this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({ role: "listbox", "aria-activedescendant": "ui-active-menuitem" }).click(function (a) { if (d(a.target).closest(".ui-menu-item a").length) { a.preventDefault(); e.select(a) } }); this.refresh() }, refresh: function () {
        var e = this; this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function (a) { e.activate(a, d(this).parent()) }).mouseleave(function () { e.deactivate() })
    }, activate: function (e, a) { this.deactivate(); if (this.hasScroll()) { var b = a.offset().top - this.element.offset().top, g = this.element.attr("scrollTop"), c = this.element.height(); if (b < 0) this.element.attr("scrollTop", g + b); else b >= c && this.element.attr("scrollTop", g + b - c + a.height()) } this.active = a.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(); this._trigger("focus", e, { item: a }) },
        deactivate: function () { if (this.active) { this.active.children("a").removeClass("ui-state-hover").removeAttr("id"); this._trigger("blur"); this.active = null } }, next: function (e) { this.move("next", ".ui-menu-item:first", e) }, previous: function (e) { this.move("prev", ".ui-menu-item:last", e) }, first: function () { return this.active && !this.active.prevAll(".ui-menu-item").length }, last: function () { return this.active && !this.active.nextAll(".ui-menu-item").length }, move: function (e, a, b) {
            if (this.active) {
                e = this.active[e + "All"](".ui-menu-item").eq(0);
                e.length ? this.activate(b, e) : this.activate(b, this.element.children(a))
            } else this.activate(b, this.element.children(a))
        }, nextPage: function (e) {
            if (this.hasScroll()) if (!this.active || this.last()) this.activate(e, this.element.children(".ui-menu-item:first")); else {
                var a = this.active.offset().top, b = this.element.height(), g = this.element.children(".ui-menu-item").filter(function () { var c = d(this).offset().top - a - b + d(this).height(); return c < 10 && c > -10 }); g.length || (g = this.element.children(".ui-menu-item:last")); this.activate(e,
g)
            } else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        }, previousPage: function (e) {
            if (this.hasScroll()) if (!this.active || this.first()) this.activate(e, this.element.children(".ui-menu-item:last")); else {
                var a = this.active.offset().top, b = this.element.height(); result = this.element.children(".ui-menu-item").filter(function () { var g = d(this).offset().top - a + b - d(this).height(); return g < 10 && g > -10 }); result.length || (result = this.element.children(".ui-menu-item:first"));
                this.activate(e, result)
            } else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        }, hasScroll: function () { return this.element.height() < this.element.attr("scrollHeight") }, select: function (e) { this._trigger("selected", e, { item: this.active }) } 
    })
})(jQuery);
;