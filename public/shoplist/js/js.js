/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(4);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
module.exports = __webpack_require__(20);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(jQuery), +function (a) {
  "use strict";
  function b() {
    var a = document.createElement("bootstrap"),
        b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
      if (void 0 !== a.style[c]) return { end: b[c] };
    }return !1;
  }a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;a(this).one("bsTransitionEnd", function () {
      c = !0;
    });var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
      } });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }var c = '[data-dismiss="alert"]',
      d = function d(b) {
    a(b).on("click", c, this.close);
  };d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }var e = a(this),
        f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a(f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }var c = function c(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };c.VERSION = "3.3.6", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
      var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target);d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault();
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b),
          g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }var c = function c(b, _c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {case 37:
          this.prev();break;case 39:
          this.next();break;default:
          return;}a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;return this.$items.eq(f);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next");
  }, c.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
        k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
      }var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
    }
  };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };var e = function e(c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
  }function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }var d = function d(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : e.data();c.call(f, h);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
  }function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = b(d),
          f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
    }));
  }function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function g(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
    var e = a(this);if (!e.is(".disabled, :disabled")) {
      var f = b(e),
          g = f.hasClass("open");if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
      }return !1;
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
            g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
            i = e.find(".dropdown-menu" + h);if (i.length) {
          var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";
  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }var c = function c(b, _c2) {
    this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");var g = function g() {
        d.removeBackdrop(), b && b();
      };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({ paddingLeft: "", paddingRight: "" });
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;if (!a) {
      var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
    }this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
  };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function c(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
  };c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState) {
      if (this.inState[a]) return !0;
    }return !1;
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide());
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
          f = this.tip(),
          g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;if (j) {
        var n = h,
            o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
      }var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function q() {
        var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
        d.css({ top: Math.round(a.top), left: Math.round(a.left) });
      } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
        j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }var e = this,
        f = a(this.$tip),
        g = a.Event("hide.bs." + this.type);return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this);
  }, c.prototype.fixTitle = function () {
    var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = d ? { top: 0, left: 0 } : b.offset(),
        g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
        h = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, g, h, f);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
    }return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do {
      a += ~~(1e6 * Math.random());
    } while (document.getElementById(a));return a;
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null;
    });
  };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function c(a, b) {
    this.init("popover", a, b);
  };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
  }function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }b.VERSION = "3.3.6", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = this,
        c = "offset",
        d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
          e = b.data("target") || b.attr("href"),
          f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) {
      g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
    }
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }var c = function c(b) {
    this.element = a(b);
  };c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
          g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };var e = function e(c) {
    c.preventDefault(), b.call(a(this), "show");
  };a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }var c = function c(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();if (null != c && "top" == this.affixed) return c > e ? "top" : !1;if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
        b = this.$element.offset();return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = Math.max(a(document).height(), a(document.body).height());"object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }"bottom" == h && this.$element.offset({ top: g - b - f });
    }
  };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * ImageZoom Plugin
 * http://0401morita.github.io/imagezoom-plugin
 * MIT licensed
 *
 * Copyright (C) 2014 http://0401morita.github.io/imagezoom-plugin A project by Yosuke Morita
 */
(function ($) {
  var defaults = {
    cursorcolor: '255,255,255',
    opacity: 0.5,
    cursor: 'crosshair',
    zindex: 2147483647,
    zoomviewsize: [480, 395],
    zoomviewposition: 'right',
    zoomviewmargin: 10,
    zoomviewborder: 'none',
    magnification: 1.925
  };

  var imagezoomCursor, imagezoomView, settings, imageWidth, imageHeight, offset;
  var methods = {
    init: function init(options) {
      $this = $(this), imagezoomCursor = $('.imagezoom-cursor'), imagezoomView = $('.imagezoom-view'), $(document).on('mouseenter', $this.selector, function (e) {
        var data = $(this).data();
        settings = $.extend({}, defaults, options, data), offset = $(this).offset(), imageWidth = $(this).width(), imageHeight = $(this).height(), cursorSize = [settings.zoomviewsize[0] / settings.magnification, settings.zoomviewsize[1] / settings.magnification];
        if (data.imagezoom == true) {
          imageSrc = $(this).attr('src');
        } else {
          imageSrc = $(this).get(0).getAttribute('data-imagezoom');
        }

        var posX = e.pageX,
            posY = e.pageY,
            zoomViewPositionX;
        $('body').prepend('<div class="imagezoom-cursor">&nbsp;</div><div class="imagezoom-view"><img src="' + imageSrc + '"></div>');

        if (settings.zoomviewposition == 'right') {
          zoomViewPositionX = offset.left + imageWidth + settings.zoomviewmargin;
        } else {
          zoomViewPositionX = offset.left - imageWidth - settings.zoomviewmargin;
        }

        $(imagezoomView.selector).css({
          'position': 'absolute',
          'left': zoomViewPositionX,
          'top': offset.top,
          'width': cursorSize[0] * settings.magnification,
          'height': cursorSize[1] * settings.magnification,
          'background': '#000',
          'z-index': 2147483647,
          'overflow': 'hidden',
          'border': settings.zoomviewborder
        });

        $(imagezoomView.selector).children('img').css({
          'position': 'absolute',
          'width': imageWidth * settings.magnification,
          'height': imageHeight * settings.magnification
        });

        $(imagezoomCursor.selector).css({
          'position': 'absolute',
          'width': cursorSize[0],
          'height': cursorSize[1],
          'background-color': 'rgb(' + settings.cursorcolor + ')',
          'z-index': settings.zindex,
          'opacity': settings.opacity,
          'cursor': settings.cursor
        });
        $(imagezoomCursor.selector).css({ 'top': posY - cursorSize[1] / 2, 'left': posX });
        $(document).on('mousemove', document.body, methods.cursorPos);
      });
    },
    cursorPos: function cursorPos(e) {
      var posX = e.pageX,
          posY = e.pageY;
      if (posY < offset.top || posX < offset.left || posY > offset.top + imageHeight || posX > offset.left + imageWidth) {
        $(imagezoomCursor.selector).remove();
        $(imagezoomView.selector).remove();
        return;
      }

      if (posX - cursorSize[0] / 2 < offset.left) {
        posX = offset.left + cursorSize[0] / 2;
      } else if (posX + cursorSize[0] / 2 > offset.left + imageWidth) {
        posX = offset.left + imageWidth - cursorSize[0] / 2;
      }

      if (posY - cursorSize[1] / 2 < offset.top) {
        posY = offset.top + cursorSize[1] / 2;
      } else if (posY + cursorSize[1] / 2 > offset.top + imageHeight) {
        posY = offset.top + imageHeight - cursorSize[1] / 2;
      }

      $(imagezoomCursor.selector).css({ 'top': posY - cursorSize[1] / 2, 'left': posX - cursorSize[0] / 2 });
      $(imagezoomView.selector).children('img').css({ 'top': (offset.top - posY + cursorSize[1] / 2) * settings.magnification, 'left': (offset.left - posX + cursorSize[0] / 2) * settings.magnification });

      $(imagezoomCursor.selector).mouseleave(function () {
        $(this).remove();
      });
    }
  };

  $.fn.imageZoom = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error(method);
    }
  };

  $(document).ready(function () {
    $('[data-imagezoom]').imageZoom();
  });
})(jQuery);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * jQuery FlexSlider v2.5.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function (el, options) {
    var slider = $(el);

    // making variables public
    slider.vars = $.extend({}, $.flexslider.defaults, options);

    var namespace = slider.vars.namespace,
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touch = ("ontouchstart" in window || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,

    // depricating this idea, as devices are being released with both of these events
    //eventType = (touch) ? "touchend" : "click",
    eventType = "click touchend MSPointerUp keyup",
        watchedEvent = "",
        watchedEventClearTimer,
        vertical = slider.vars.direction === "vertical",
        reverse = slider.vars.reverse,
        carousel = slider.vars.itemWidth > 0,
        fade = slider.vars.animation === "fade",
        asNav = slider.vars.asNavFor !== "",
        methods = {},
        focused = true;

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Private slider methods
    methods = {
      init: function init() {
        slider.animating = false;
        // Get current slide and make sure it is a number
        slider.currentSlide = parseInt(slider.vars.startAt ? slider.vars.startAt : 0, 10);
        if (isNaN(slider.currentSlide)) {
          slider.currentSlide = 0;
        }
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = slider.currentSlide === 0 || slider.currentSlide === slider.last;
        slider.containerSelector = slider.vars.selector.substr(0, slider.vars.selector.search(' '));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(slider.vars.sync).length > 0;
        // SLIDE:
        if (slider.vars.animation === "slide") {
          slider.vars.animation = "swing";
        }
        slider.prop = vertical ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        slider.stopped = false;
        //PAUSE WHEN INVISIBLE
        slider.started = false;
        slider.startTimeout = null;
        // TOUCH/USECSS:
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && function () {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if (obj.style[props[i]] !== undefined) {
              slider.pfx = props[i].replace('Perspective', '').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }();
        slider.ensureAnimationEnd = '';
        // CONTROLSCONTAINER:
        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        // MANUAL:
        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

        // CUSTOM DIRECTION NAV:
        if (slider.vars.customDirectionNav !== "") slider.customDirectionNav = $(slider.vars.customDirectionNav).length === 2 && $(slider.vars.customDirectionNav);

        // RANDOMIZE:
        if (slider.vars.randomize) {
          slider.slides.sort(function () {
            return Math.round(Math.random()) - 0.5;
          });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (slider.vars.controlNav) {
          methods.controlNav.setup();
        }

        // DIRECTIONNAV:
        if (slider.vars.directionNav) {
          methods.directionNav.setup();
        }

        // KEYBOARD:
        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
          $(document).bind('keyup', function (event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = keycode === 39 ? slider.getTarget('next') : keycode === 37 ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (slider.vars.mousewheel) {
          slider.bind('mousewheel', function (event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = delta < 0 ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (slider.vars.pausePlay) {
          methods.pausePlay.setup();
        }

        //PAUSE WHEN INVISIBLE
        if (slider.vars.slideshow && slider.vars.pauseInvisible) {
          methods.pauseInvisible.init();
        }

        // SLIDSESHOW
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function () {
              if (!slider.manualPlay && !slider.manualPause) {
                slider.pause();
              }
            }, function () {
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {
                slider.play();
              }
            });
          }
          // initialize animation
          //If we're visible, or we don't use PageVisibility API
          if (!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
            slider.vars.initDelay > 0 ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
          }
        }

        // ASNAV:
        if (asNav) {
          methods.asNav.setup();
        }

        // TOUCH
        if (touch && slider.vars.touch) {
          methods.touch();
        }

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || fade && slider.vars.smoothHeight) {
          $(window).bind("resize orientationchange focus", methods.resize);
        }

        slider.find("img").attr("draggable", "false");

        // API: start() Callback
        setTimeout(function () {
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function setup() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if (!msGesture) {
            slider.slides.on(eventType, function (e) {
              e.preventDefault();
              var $slide = $(this),
                  target = $slide.index();
              var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
              if (posFromLeft <= 0 && $slide.hasClass(namespace + 'active-slide')) {
                slider.flexAnimate(slider.getTarget("prev"), true);
              } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                slider.direction = slider.currentItem < target ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
              }
            });
          } else {
            el._slider = slider;
            slider.slides.each(function () {
              var that = this;
              that._gesture = new MSGesture();
              that._gesture.target = that;
              that.addEventListener("MSPointerDown", function (e) {
                e.preventDefault();
                if (e.currentTarget._gesture) {
                  e.currentTarget._gesture.addPointer(e.pointerId);
                }
              }, false);
              that.addEventListener("MSGestureTap", function (e) {
                e.preventDefault();
                var $slide = $(this),
                    target = $slide.index();
                if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                  slider.direction = slider.currentItem < target ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              });
            });
          }
        }
      },
      controlNav: {
        setup: function setup() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else {
            // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function setupPaging() {
          var type = slider.vars.controlNav === "thumbnails" ? 'control-thumbs' : 'control-paging',
              j = 1,
              item,
              slide;

          slider.controlNavScaffold = $('<ol class="' + namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              item = slider.vars.controlNav === "thumbnails" ? '<img src="' + slide.attr('data-thumb') + '"/>' : '<a>' + j + '</a>';
              if ('thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions) {
                var captn = slide.attr('data-thumbcaption');
                if ('' !== captn && undefined !== captn) {
                  item += '<span class="' + namespace + 'caption">' + captn + '</span>';
                }
              }
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }

          // CONTROLSCONTAINER:
          slider.controlsContainer ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function (event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                slider.direction = target > slider.currentSlide ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        setupManual: function setupManual() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function (event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                target > slider.currentSlide ? slider.direction = "next" : slider.direction = "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function set() {
          var selector = slider.vars.controlNav === "thumbnails" ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, slider.controlsContainer ? slider.controlsContainer : slider);
        },
        active: function active() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function update(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function setup() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

          // CUSTOM DIRECTION NAV:
          if (slider.customDirectionNav) {
            slider.directionNav = slider.customDirectionNav;
            // CONTROLSCONTAINER:
          } else if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function (event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = $(this).hasClass(namespace + 'next') ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function update() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
            } else {
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
          } else {
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
          }
        }
      },
      pausePlay: {
        setup: function setup() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update(slider.vars.slideshow ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function (event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + 'pause')) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function update(state) {
          state === "play" ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }
      },
      touch: function touch() {
        var startX,
            startY,
            offset,
            cwidth,
            dx,
            startT,
            onTouchStart,
            onTouchMove,
            _onTouchEnd,
            scrolling = false,
            localX = 0,
            localY = 0,
            accDx = 0;

        if (!msGesture) {
          onTouchStart = function onTouchStart(e) {
            if (slider.animating) {
              e.preventDefault();
            } else if (window.navigator.msPointerEnabled || e.touches.length === 1) {
              slider.pause();
              // CAROUSEL:
              cwidth = vertical ? slider.h : slider.w;
              startT = Number(new Date());
              // CAROUSEL:

              // Local vars for X and Y points.
              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;

              offset = carousel && reverse && slider.animatingTo === slider.last ? 0 : carousel && reverse ? slider.limit - (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo : carousel && slider.currentSlide === slider.last ? slider.limit : carousel ? (slider.itemW + slider.vars.itemMargin) * slider.move * slider.currentSlide : reverse ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
              startX = vertical ? localY : localX;
              startY = vertical ? localX : localY;

              el.addEventListener('touchmove', onTouchMove, false);
              el.addEventListener('touchend', _onTouchEnd, false);
            }
          };

          onTouchMove = function onTouchMove(e) {
            // Local vars for X and Y points.

            localX = e.touches[0].pageX;
            localY = e.touches[0].pageY;

            dx = vertical ? startX - localY : startX - localX;
            scrolling = vertical ? Math.abs(dx) < Math.abs(localX - startY) : Math.abs(dx) < Math.abs(localY - startY);

            var fxms = 500;

            if (!scrolling || Number(new Date()) - startT > fxms) {
              e.preventDefault();
              if (!fade && slider.transitions) {
                if (!slider.vars.animationLoop) {
                  dx = dx / (slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0 ? Math.abs(dx) / cwidth + 2 : 1);
                }
                slider.setProps(offset + dx, "setTouch");
              }
            }
          };

          _onTouchEnd = function onTouchEnd(e) {
            // finish the touch by undoing the touch session
            el.removeEventListener('touchmove', onTouchMove, false);

            if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
              var updateDx = reverse ? -dx : dx,
                  target = updateDx > 0 ? slider.getTarget('next') : slider.getTarget('prev');

              if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              } else {
                if (!fade) {
                  slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                }
              }
            }
            el.removeEventListener('touchend', _onTouchEnd, false);

            startX = null;
            startY = null;
            dx = null;
            offset = null;
          };

          el.addEventListener('touchstart', onTouchStart, false);
        } else {
          var onMSPointerDown = function onMSPointerDown(e) {
            e.stopPropagation();
            if (slider.animating) {
              e.preventDefault();
            } else {
              slider.pause();
              el._gesture.addPointer(e.pointerId);
              accDx = 0;
              cwidth = vertical ? slider.h : slider.w;
              startT = Number(new Date());
              // CAROUSEL:

              offset = carousel && reverse && slider.animatingTo === slider.last ? 0 : carousel && reverse ? slider.limit - (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo : carousel && slider.currentSlide === slider.last ? slider.limit : carousel ? (slider.itemW + slider.vars.itemMargin) * slider.move * slider.currentSlide : reverse ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
            }
          };

          var onMSGestureChange = function onMSGestureChange(e) {
            e.stopPropagation();
            var slider = e.target._slider;
            if (!slider) {
              return;
            }
            var transX = -e.translationX,
                transY = -e.translationY;

            //Accumulate translations.
            accDx = accDx + (vertical ? transY : transX);
            dx = accDx;
            scrolling = vertical ? Math.abs(accDx) < Math.abs(-transX) : Math.abs(accDx) < Math.abs(-transY);

            if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
              setImmediate(function () {
                el._gesture.stop();
              });

              return;
            }

            if (!scrolling || Number(new Date()) - startT > 500) {
              e.preventDefault();
              if (!fade && slider.transitions) {
                if (!slider.vars.animationLoop) {
                  dx = accDx / (slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0 ? Math.abs(accDx) / cwidth + 2 : 1);
                }
                slider.setProps(offset + dx, "setTouch");
              }
            }
          };

          var onMSGestureEnd = function onMSGestureEnd(e) {
            e.stopPropagation();
            var slider = e.target._slider;
            if (!slider) {
              return;
            }
            if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
              var updateDx = reverse ? -dx : dx,
                  target = updateDx > 0 ? slider.getTarget('next') : slider.getTarget('prev');

              if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              } else {
                if (!fade) {
                  slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                }
              }
            }

            startX = null;
            startY = null;
            dx = null;
            offset = null;
            accDx = 0;
          };

          el.style.msTouchAction = "none";
          el._gesture = new MSGesture();
          el._gesture.target = el;
          el.addEventListener("MSPointerDown", onMSPointerDown, false);
          el._slider = slider;
          el.addEventListener("MSGestureChange", onMSGestureChange, false);
          el.addEventListener("MSGestureEnd", onMSGestureEnd, false);
        }
      },
      resize: function resize() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) {
            slider.doMath();
          }

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) {
            //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          } else if (vertical) {
            //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) {
              methods.smoothHeight();
            }
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function smoothHeight(dur) {
        if (!vertical || fade) {
          var $obj = fade ? slider : slider.viewport;
          dur ? $obj.animate({ "height": slider.slides.eq(slider.animatingTo).height() }, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function sync(action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate":
            $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true);break;
          case "play":
            if (!$obj.playing && !$obj.asNav) {
              $obj.play();
            }break;
          case "pause":
            $obj.pause();break;
        }
      },
      uniqueID: function uniqueID($clone) {
        // Append _clone to current level and children elements with id attributes
        $clone.filter('[id]').add($clone.find('[id]')).each(function () {
          var $this = $(this);
          $this.attr('id', $this.attr('id') + '_clone');
        });
        return $clone;
      },
      pauseInvisible: {
        visProp: null,
        init: function init() {
          var visProp = methods.pauseInvisible.getHiddenProp();
          if (visProp) {
            var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
            document.addEventListener(evtname, function () {
              if (methods.pauseInvisible.isHidden()) {
                if (slider.startTimeout) {
                  clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                } else {
                  slider.pause(); //Or just pause
                }
              } else {
                if (slider.started) {
                  slider.play(); //Initiated before, just play
                } else {
                  if (slider.vars.initDelay > 0) {
                    setTimeout(slider.play, slider.vars.initDelay);
                  } else {
                    slider.play(); //Didn't init before: simply init or wait for it
                  }
                }
              }
            });
          }
        },
        isHidden: function isHidden() {
          var prop = methods.pauseInvisible.getHiddenProp();
          if (!prop) {
            return false;
          }
          return document[prop];
        },
        getHiddenProp: function getHiddenProp() {
          var prefixes = ['webkit', 'moz', 'ms', 'o'];
          // if 'hidden' is natively supported just return it
          if ('hidden' in document) {
            return 'hidden';
          }
          // otherwise loop over all the known prefixes until we find one
          for (var i = 0; i < prefixes.length; i++) {
            if (prefixes[i] + 'Hidden' in document) {
              return prefixes[i] + 'Hidden';
            }
          }
          // otherwise it's not supported
          return null;
        }
      },
      setToClearWatchedEvent: function setToClearWatchedEvent() {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function () {
          watchedEvent = "";
        }, 3000);
      }
    };

    // public methods
    slider.flexAnimate = function (target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = target > slider.currentSlide ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1) slider.direction = slider.currentItem < target ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = slider.currentItem < target ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target / slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;

        // SLIDESHOW:
        if (pause) {
          slider.pause();
        }

        // API: before() animation Callback
        slider.vars.before(slider);

        // SYNC:
        if (slider.syncExists && !fromNav) {
          methods.sync("animate");
        }

        // CONTROLNAV
        if (slider.vars.controlNav) {
          methods.controlNav.active();
        }

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) {
          slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');
        }

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (slider.vars.directionNav) {
          methods.directionNav.update();
        }

        if (target === slider.last) {
          // API: end() of cycle Callback
          slider.vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!slider.vars.animationLoop) {
            slider.pause();
          }
        }

        // SLIDE:
        if (!fade) {
          var dimension = vertical ? slider.slides.filter(':first').height() : slider.computedW,
              margin,
              slideString,
              calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            //margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;
            margin = slider.vars.itemMargin;
            calcNext = (slider.itemW + margin) * slider.move * slider.animatingTo;
            slideString = calcNext > slider.limit && slider.visible !== 1 ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = reverse ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = reverse ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = reverse ? (slider.count - 1 - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }

            // Unbind previous transitionEnd events and re-bind new transitionEnd event
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function () {
              clearTimeout(slider.ensureAnimationEnd);
              slider.wrapup(dimension);
            });

            // Insurance for the ever-so-fickle transitionEnd event
            clearTimeout(slider.ensureAnimationEnd);
            slider.ensureAnimationEnd = setTimeout(function () {
              slider.wrapup(dimension);
            }, slider.vars.animationSpeed + 100);
          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function () {
              slider.wrapup(dimension);
            });
          }
        } else {
          // FADE:
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
            //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

            slider.slides.eq(slider.currentSlide).css({ "zIndex": 1 }).animate({ "opacity": 0 }, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({ "zIndex": 2 }).animate({ "opacity": 1 }, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            slider.wrapup(dimension);
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) {
          methods.smoothHeight(slider.vars.animationSpeed);
        }
      }
    };
    slider.wrapup = function (dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      slider.vars.after(slider);
    };

    // SLIDESHOW:
    slider.animateSlides = function () {
      if (!slider.animating && focused) {
        slider.flexAnimate(slider.getTarget("next"));
      }
    };
    // SLIDESHOW:
    slider.pause = function () {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) {
        methods.pausePlay.update("play");
      }
      // SYNC:
      if (slider.syncExists) {
        methods.sync("pause");
      }
    };
    // SLIDESHOW:
    slider.play = function () {
      if (slider.playing) {
        clearInterval(slider.animatedSlides);
      }
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) {
        methods.pausePlay.update("pause");
      }
      // SYNC:
      if (slider.syncExists) {
        methods.sync("play");
      }
    };
    // STOP:
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    };
    slider.canAdvance = function (target, fromNav) {
      // ASNAV:
      var last = asNav ? slider.pagingCount - 1 : slider.last;
      return fromNav ? true : asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev" ? true : asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next" ? false : target === slider.currentSlide && !asNav ? false : slider.vars.animationLoop ? true : slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next" ? false : slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next" ? false : true;
    };
    slider.getTarget = function (dir) {
      slider.direction = dir;
      if (dir === "next") {
        return slider.currentSlide === slider.last ? 0 : slider.currentSlide + 1;
      } else {
        return slider.currentSlide === 0 ? slider.last : slider.currentSlide - 1;
      }
    };

    // SLIDE:
    slider.setProps = function (pos, special, dur) {
      var target = function () {
        var posCheck = pos ? pos : (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo,
            posCalc = function () {
          if (carousel) {
            return special === "setTouch" ? pos : reverse && slider.animatingTo === slider.last ? 0 : reverse ? slider.limit - (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo : slider.animatingTo === slider.last ? slider.limit : posCheck;
          } else {
            switch (special) {
              case "setTotal":
                return reverse ? (slider.count - 1 - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
              case "setTouch":
                return reverse ? pos : pos;
              case "jumpEnd":
                return reverse ? pos : slider.count * pos;
              case "jumpStart":
                return reverse ? slider.count * pos : pos;
              default:
                return pos;
            }
          }
        }();

        return posCalc * -1 + "px";
      }();

      if (slider.transitions) {
        target = vertical ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = dur !== undefined ? dur / 1000 + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
        slider.container.css("transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) {
        slider.container.css(slider.args);
      }

      slider.container.css('transform', target);
    };

    slider.setup = function (type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({ "overflow": "hidden", "position": "relative" }).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") {
            slider.container.find('.clone').remove();
          }
          slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true')).prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = reverse ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function () {
            slider.newSlides.css({ "display": "block" });
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, type === "init" ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function () {
            slider.doMath();
            slider.newSlides.css({ "width": slider.computedW, "float": "left", "display": "block" });
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) {
              methods.smoothHeight();
            }
          }, type === "init" ? 100 : 0);
        }
      } else {
        // FADE:
        slider.slides.css({ "width": "100%", "float": "left", "marginRight": "-100%", "position": "relative" });
        if (type === "init") {
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
            if (slider.vars.fadeFirstSlide == false) {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({ "zIndex": 2 }).css({ "opacity": 1 });
            } else {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({ "zIndex": 2 }).animate({ "opacity": 1 }, slider.vars.animationSpeed, slider.vars.easing);
            }
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2 });
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) {
          methods.smoothHeight();
        }
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) {
        slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
      }

      //FlexSlider: init() Callback
      slider.vars.init(slider);
    };

    slider.doMath = function () {
      var slide = slider.slides.first(),
          slideMargin = slider.vars.itemMargin,
          minItems = slider.vars.minItems,
          maxItems = slider.vars.maxItems;

      slider.w = slider.viewport === undefined ? slider.width() : slider.viewport.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.minW = minItems ? minItems * slider.itemT : slider.w;
        slider.maxW = maxItems ? maxItems * slider.itemT - slideMargin : slider.w;
        slider.itemW = slider.minW > slider.w ? (slider.w - slideMargin * (minItems - 1)) / minItems : slider.maxW < slider.w ? (slider.w - slideMargin * (maxItems - 1)) / maxItems : slider.vars.itemWidth > slider.w ? slider.w : slider.vars.itemWidth;

        slider.visible = Math.floor(slider.w / slider.itemW);
        slider.move = slider.vars.move > 0 && slider.vars.move < slider.visible ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil((slider.count - slider.visible) / slider.move + 1);
        slider.last = slider.pagingCount - 1;
        slider.limit = slider.pagingCount === 1 ? 0 : slider.vars.itemWidth > slider.w ? slider.itemW * (slider.count - 1) + slideMargin * (slider.count - 1) : (slider.itemW + slideMargin) * slider.count - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    };

    slider.update = function (pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (slider.vars.controlNav && !slider.manualControls) {
        if (action === "add" && !carousel || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if (action === "remove" && !carousel || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (slider.vars.directionNav) {
        methods.directionNav.update();
      }
    };

    slider.addSlide = function (obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        pos !== undefined ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        pos !== undefined ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      slider.vars.added(slider);
    };
    slider.removeSlide = function (obj) {
      var pos = isNaN(obj) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        vertical && reverse ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      slider.vars.removed(slider);
    };

    //FlexSlider: Initialize
    methods.init();
  };

  // Ensure the slider isn't focussed if the window loses focus.
  $(window).blur(function (e) {
    focused = false;
  }).focus(function (e) {
    focused = true;
  });

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-", //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li", //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade", //String: Select your animation type, "fade" or "slide"
    easing: "swing", //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal", //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false, //{NEW} Boolean: Reverse the animation direction
    animationLoop: true, //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false, //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0, //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true, //Boolean: Animate slider automatically
    slideshowSpeed: 7000, //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600, //Integer: Set the speed of animations, in milliseconds
    initDelay: 0, //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false, //Boolean: Randomize slide order
    fadeFirstSlide: true, //Boolean: Fade in the first slide when animation type is "fade"
    thumbCaptions: false, //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

    // Usability features
    pauseOnAction: true, //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false, //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    pauseInvisible: true, //{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
    useCSS: true, //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true, //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false, //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true, //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
    directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous", //String: Set the text for the "previous" directionNav item
    nextText: "Next", //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true, //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false, //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false, //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false, //Boolean: Create pause/play dynamic element
    pauseText: "Pause", //String: Set the text for the "pause" pausePlay item
    playText: "Play", //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "", //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "", //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    customDirectionNav: "", //{NEW} jQuery Object/Selector: Custom prev / next button. Must be two jQuery elements. In order to make the events work they have to have the classes "prev" and "next" (plus namespace)
    sync: "", //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "", //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0, //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0, //{NEW} Integer: Margin between carousel items.
    minItems: 1, //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0, //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0, //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    allowOneSlide: true, //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

    // Callback API
    start: function start() {}, //Callback: function(slider) - Fires when the slider loads the first slide
    before: function before() {}, //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function after() {}, //Callback: function(slider) - Fires after each slider animation completes
    end: function end() {}, //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function added() {}, //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function removed() {}, //{NEW} Callback: function(slider) - Fires after a slide is removed
    init: function init() {} //{NEW} Callback: function(slider) - Fires after the slider is initially setup
  };

  //FlexSlider: Plugin Function
  $.fn.flexslider = function (options) {
    if (options === undefined) {
      options = {};
    }

    if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
      return this.each(function () {
        var $this = $(this),
            selector = options.selector ? options.selector : ".slides > li",
            $slides = $this.find(selector);

        if ($slides.length === 1 && options.allowOneSlide === true || $slides.length === 0) {
          $slides.fadeIn(400);
          if (options.start) {
            options.start($this);
          }
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play":
          $slider.play();break;
        case "pause":
          $slider.pause();break;
        case "stop":
          $slider.stop();break;
        case "next":
          $slider.flexAnimate($slider.getTarget("next"), true);break;
        case "prev":
        case "previous":
          $slider.flexAnimate($slider.getTarget("prev"), true);break;
        default:
          if (typeof options === "number") {
            $slider.flexAnimate(options, true);
          }
      }
    }
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).setImmediate))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/*!
 * jScrollPane - v2.0.19 - 2013-11-16
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2013 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
!function (a, b, c) {
  a.fn.jScrollPane = function (d) {
    function e(d, e) {
      function f(b) {
        var e,
            h,
            j,
            l,
            m,
            n,
            q = !1,
            r = !1;if (P = b, Q === c) m = d.scrollTop(), n = d.scrollLeft(), d.css({ overflow: "hidden", padding: 0 }), R = d.innerWidth() + tb, S = d.innerHeight(), d.width(R), Q = a('<div class="jspPane" />').css("padding", sb).append(d.children()), T = a('<div class="jspContainer" />').css({ width: R + "px", height: S + "px" }).append(Q).appendTo(d);else {
          if (d.css("width", ""), q = P.stickToBottom && C(), r = P.stickToRight && D(), l = d.innerWidth() + tb != R || d.outerHeight() != S, l && (R = d.innerWidth() + tb, S = d.innerHeight(), T.css({ width: R + "px", height: S + "px" })), !l && ub == U && Q.outerHeight() == V) return d.width(R), void 0;ub = U, Q.css("width", ""), d.width(R), T.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end();
        }Q.css("overflow", "auto"), U = b.contentWidth ? b.contentWidth : Q[0].scrollWidth, V = Q[0].scrollHeight, Q.css("overflow", ""), W = U / R, X = V / S, Y = X > 1, Z = W > 1, Z || Y ? (d.addClass("jspScrollable"), e = P.maintainPosition && (ab || db), e && (h = A(), j = B()), g(), i(), k(), e && (y(r ? U - R : h, !1), x(q ? V - S : j, !1)), H(), E(), N(), P.enableKeyboardNavigation && J(), P.clickOnTrack && o(), L(), P.hijackInternalLinks && M()) : (d.removeClass("jspScrollable"), Q.css({ top: 0, left: 0, width: T.width() - tb }), F(), I(), K(), p()), P.autoReinitialise && !rb ? rb = setInterval(function () {
          f(P);
        }, P.autoReinitialiseDelay) : !P.autoReinitialise && rb && clearInterval(rb), m && d.scrollTop(0) && x(m, !1), n && d.scrollLeft(0) && y(n, !1), d.trigger("jsp-initialised", [Z || Y]);
      }function g() {
        Y && (T.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), eb = T.find(">.jspVerticalBar"), fb = eb.find(">.jspTrack"), $ = fb.find(">.jspDrag"), P.showArrows && (jb = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", m(0, -1)).bind("click.jsp", G), kb = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", m(0, 1)).bind("click.jsp", G), P.arrowScrollOnHover && (jb.bind("mouseover.jsp", m(0, -1, jb)), kb.bind("mouseover.jsp", m(0, 1, kb))), l(fb, P.verticalArrowPositions, jb, kb)), hb = S, T.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
          hb -= a(this).outerHeight();
        }), $.hover(function () {
          $.addClass("jspHover");
        }, function () {
          $.removeClass("jspHover");
        }).bind("mousedown.jsp", function (b) {
          a("html").bind("dragstart.jsp selectstart.jsp", G), $.addClass("jspActive");var c = b.pageY - $.position().top;return a("html").bind("mousemove.jsp", function (a) {
            r(a.pageY - c, !1);
          }).bind("mouseup.jsp mouseleave.jsp", q), !1;
        }), h());
      }function h() {
        fb.height(hb + "px"), ab = 0, gb = P.verticalGutter + fb.outerWidth(), Q.width(R - gb - tb);try {
          0 === eb.position().left && Q.css("margin-left", gb + "px");
        } catch (a) {}
      }function i() {
        Z && (T.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))), lb = T.find(">.jspHorizontalBar"), mb = lb.find(">.jspTrack"), bb = mb.find(">.jspDrag"), P.showArrows && (pb = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", m(-1, 0)).bind("click.jsp", G), qb = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", m(1, 0)).bind("click.jsp", G), P.arrowScrollOnHover && (pb.bind("mouseover.jsp", m(-1, 0, pb)), qb.bind("mouseover.jsp", m(1, 0, qb))), l(mb, P.horizontalArrowPositions, pb, qb)), bb.hover(function () {
          bb.addClass("jspHover");
        }, function () {
          bb.removeClass("jspHover");
        }).bind("mousedown.jsp", function (b) {
          a("html").bind("dragstart.jsp selectstart.jsp", G), bb.addClass("jspActive");var c = b.pageX - bb.position().left;return a("html").bind("mousemove.jsp", function (a) {
            t(a.pageX - c, !1);
          }).bind("mouseup.jsp mouseleave.jsp", q), !1;
        }), nb = T.innerWidth(), j());
      }function j() {
        T.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
          nb -= a(this).outerWidth();
        }), mb.width(nb + "px"), db = 0;
      }function k() {
        if (Z && Y) {
          var b = mb.outerHeight(),
              c = fb.outerWidth();hb -= b, a(lb).find(">.jspCap:visible,>.jspArrow").each(function () {
            nb += a(this).outerWidth();
          }), nb -= c, S -= c, R -= b, mb.parent().append(a('<div class="jspCorner" />').css("width", b + "px")), h(), j();
        }Z && Q.width(T.outerWidth() - tb + "px"), V = Q.outerHeight(), X = V / S, Z && (ob = Math.ceil(1 / W * nb), ob > P.horizontalDragMaxWidth ? ob = P.horizontalDragMaxWidth : ob < P.horizontalDragMinWidth && (ob = P.horizontalDragMinWidth), bb.width(ob + "px"), cb = nb - ob, u(db)), Y && (ib = Math.ceil(1 / X * hb), ib > P.verticalDragMaxHeight ? ib = P.verticalDragMaxHeight : ib < P.verticalDragMinHeight && (ib = P.verticalDragMinHeight), $.height(ib + "px"), _ = hb - ib, s(ab));
      }function l(a, b, c, d) {
        var e,
            f = "before",
            g = "after";"os" == b && (b = /Mac/.test(navigator.platform) ? "after" : "split"), b == f ? g = b : b == g && (f = b, e = c, c = d, d = e), a[f](c)[g](d);
      }function m(a, b, c) {
        return function () {
          return n(a, b, this, c), this.blur(), !1;
        };
      }function n(b, c, d, e) {
        d = a(d).addClass("jspActive");var f,
            g,
            h = !0,
            i = function i() {
          0 !== b && vb.scrollByX(b * P.arrowButtonSpeed), 0 !== c && vb.scrollByY(c * P.arrowButtonSpeed), g = setTimeout(i, h ? P.initialDelay : P.arrowRepeatFreq), h = !1;
        };i(), f = e ? "mouseout.jsp" : "mouseup.jsp", e = e || a("html"), e.bind(f, function () {
          d.removeClass("jspActive"), g && clearTimeout(g), g = null, e.unbind(f);
        });
      }function o() {
        p(), Y && fb.bind("mousedown.jsp", function (b) {
          if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
            var d,
                e = a(this),
                f = e.offset(),
                g = b.pageY - f.top - ab,
                h = !0,
                i = function i() {
              var a = e.offset(),
                  c = b.pageY - a.top - ib / 2,
                  f = S * P.scrollPagePercent,
                  k = _ * f / (V - S);if (0 > g) ab - k > c ? vb.scrollByY(-f) : r(c);else {
                if (!(g > 0)) return j(), void 0;c > ab + k ? vb.scrollByY(f) : r(c);
              }d = setTimeout(i, h ? P.initialDelay : P.trackClickRepeatFreq), h = !1;
            },
                j = function j() {
              d && clearTimeout(d), d = null, a(document).unbind("mouseup.jsp", j);
            };return i(), a(document).bind("mouseup.jsp", j), !1;
          }
        }), Z && mb.bind("mousedown.jsp", function (b) {
          if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
            var d,
                e = a(this),
                f = e.offset(),
                g = b.pageX - f.left - db,
                h = !0,
                i = function i() {
              var a = e.offset(),
                  c = b.pageX - a.left - ob / 2,
                  f = R * P.scrollPagePercent,
                  k = cb * f / (U - R);if (0 > g) db - k > c ? vb.scrollByX(-f) : t(c);else {
                if (!(g > 0)) return j(), void 0;c > db + k ? vb.scrollByX(f) : t(c);
              }d = setTimeout(i, h ? P.initialDelay : P.trackClickRepeatFreq), h = !1;
            },
                j = function j() {
              d && clearTimeout(d), d = null, a(document).unbind("mouseup.jsp", j);
            };return i(), a(document).bind("mouseup.jsp", j), !1;
          }
        });
      }function p() {
        mb && mb.unbind("mousedown.jsp"), fb && fb.unbind("mousedown.jsp");
      }function q() {
        a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), $ && $.removeClass("jspActive"), bb && bb.removeClass("jspActive");
      }function r(a, b) {
        Y && (0 > a ? a = 0 : a > _ && (a = _), b === c && (b = P.animateScroll), b ? vb.animate($, "top", a, s) : ($.css("top", a), s(a)));
      }function s(a) {
        a === c && (a = $.position().top), T.scrollTop(0), ab = a;var b = 0 === ab,
            e = ab == _,
            f = a / _,
            g = -f * (V - S);(wb != b || yb != e) && (wb = b, yb = e, d.trigger("jsp-arrow-change", [wb, yb, xb, zb])), v(b, e), Q.css("top", g), d.trigger("jsp-scroll-y", [-g, b, e]).trigger("scroll");
      }function t(a, b) {
        Z && (0 > a ? a = 0 : a > cb && (a = cb), b === c && (b = P.animateScroll), b ? vb.animate(bb, "left", a, u) : (bb.css("left", a), u(a)));
      }function u(a) {
        a === c && (a = bb.position().left), T.scrollTop(0), db = a;var b = 0 === db,
            e = db == cb,
            f = a / cb,
            g = -f * (U - R);(xb != b || zb != e) && (xb = b, zb = e, d.trigger("jsp-arrow-change", [wb, yb, xb, zb])), w(b, e), Q.css("left", g), d.trigger("jsp-scroll-x", [-g, b, e]).trigger("scroll");
      }function v(a, b) {
        P.showArrows && (jb[a ? "addClass" : "removeClass"]("jspDisabled"), kb[b ? "addClass" : "removeClass"]("jspDisabled"));
      }function w(a, b) {
        P.showArrows && (pb[a ? "addClass" : "removeClass"]("jspDisabled"), qb[b ? "addClass" : "removeClass"]("jspDisabled"));
      }function x(a, b) {
        var c = a / (V - S);r(c * _, b);
      }function y(a, b) {
        var c = a / (U - R);t(c * cb, b);
      }function z(b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n = 0,
            o = 0;try {
          e = a(b);
        } catch (p) {
          return;
        }for (f = e.outerHeight(), g = e.outerWidth(), T.scrollTop(0), T.scrollLeft(0); !e.is(".jspPane");) {
          if (n += e.position().top, o += e.position().left, e = e.offsetParent(), /^body|html$/i.test(e[0].nodeName)) return;
        }h = B(), j = h + S, h > n || c ? l = n - P.horizontalGutter : n + f > j && (l = n - S + f + P.horizontalGutter), isNaN(l) || x(l, d), i = A(), k = i + R, i > o || c ? m = o - P.horizontalGutter : o + g > k && (m = o - R + g + P.horizontalGutter), isNaN(m) || y(m, d);
      }function A() {
        return -Q.position().left;
      }function B() {
        return -Q.position().top;
      }function C() {
        var a = V - S;return a > 20 && a - B() < 10;
      }function D() {
        var a = U - R;return a > 20 && a - A() < 10;
      }function E() {
        T.unbind(Bb).bind(Bb, function (a, b, c, d) {
          var e = db,
              f = ab,
              g = a.deltaFactor || P.mouseWheelSpeed;return vb.scrollBy(c * g, -d * g, !1), e == db && f == ab;
        });
      }function F() {
        T.unbind(Bb);
      }function G() {
        return !1;
      }function H() {
        Q.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (a) {
          z(a.target, !1);
        });
      }function I() {
        Q.find(":input,a").unbind("focus.jsp");
      }function J() {
        function b() {
          var a = db,
              b = ab;switch (c) {case 40:
              vb.scrollByY(P.keyboardSpeed, !1);break;case 38:
              vb.scrollByY(-P.keyboardSpeed, !1);break;case 34:case 32:
              vb.scrollByY(S * P.scrollPagePercent, !1);break;case 33:
              vb.scrollByY(-S * P.scrollPagePercent, !1);break;case 39:
              vb.scrollByX(P.keyboardSpeed, !1);break;case 37:
              vb.scrollByX(-P.keyboardSpeed, !1);}return e = a != db || b != ab;
        }var c,
            e,
            f = [];Z && f.push(lb[0]), Y && f.push(eb[0]), Q.focus(function () {
          d.focus();
        }), d.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (d) {
          if (d.target === this || f.length && a(d.target).closest(f).length) {
            var g = db,
                h = ab;switch (d.keyCode) {case 40:case 38:case 34:case 32:case 33:case 39:case 37:
                c = d.keyCode, b();break;case 35:
                x(V - S), c = null;break;case 36:
                x(0), c = null;}return e = d.keyCode == c && g != db || h != ab, !e;
          }
        }).bind("keypress.jsp", function (a) {
          return a.keyCode == c && b(), !e;
        }), P.hideFocus ? (d.css("outline", "none"), "hideFocus" in T[0] && d.attr("hideFocus", !0)) : (d.css("outline", ""), "hideFocus" in T[0] && d.attr("hideFocus", !1));
      }function K() {
        d.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp");
      }function L() {
        if (location.hash && location.hash.length > 1) {
          var b,
              c,
              d = escape(location.hash.substr(1));try {
            b = a("#" + d + ', a[name="' + d + '"]');
          } catch (e) {
            return;
          }b.length && Q.find(d) && (0 === T.scrollTop() ? c = setInterval(function () {
            T.scrollTop() > 0 && (z(b, !0), a(document).scrollTop(T.position().top), clearInterval(c));
          }, 50) : (z(b, !0), a(document).scrollTop(T.position().top)));
        }
      }function M() {
        a(document.body).data("jspHijack") || (a(document.body).data("jspHijack", !0), a(document.body).delegate("a[href*=#]", "click", function (c) {
          var d,
              e,
              f,
              g,
              h,
              i,
              j = this.href.substr(0, this.href.indexOf("#")),
              k = location.href;if (-1 !== location.href.indexOf("#") && (k = location.href.substr(0, location.href.indexOf("#"))), j === k) {
            d = escape(this.href.substr(this.href.indexOf("#") + 1));try {
              e = a("#" + d + ', a[name="' + d + '"]');
            } catch (l) {
              return;
            }e.length && (f = e.closest(".jspScrollable"), g = f.data("jsp"), g.scrollToElement(e, !0), f[0].scrollIntoView && (h = a(b).scrollTop(), i = e.offset().top, (h > i || i > h + a(b).height()) && f[0].scrollIntoView()), c.preventDefault());
          }
        }));
      }function N() {
        var a,
            b,
            c,
            d,
            e,
            f = !1;T.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function (g) {
          var h = g.originalEvent.touches[0];a = A(), b = B(), c = h.pageX, d = h.pageY, e = !1, f = !0;
        }).bind("touchmove.jsp", function (g) {
          if (f) {
            var h = g.originalEvent.touches[0],
                i = db,
                j = ab;return vb.scrollTo(a + c - h.pageX, b + d - h.pageY), e = e || Math.abs(c - h.pageX) > 5 || Math.abs(d - h.pageY) > 5, i == db && j == ab;
          }
        }).bind("touchend.jsp", function () {
          f = !1;
        }).bind("click.jsp-touchclick", function () {
          return e ? (e = !1, !1) : void 0;
        });
      }function O() {
        var a = B(),
            b = A();d.removeClass("jspScrollable").unbind(".jsp"), d.replaceWith(Ab.append(Q.children())), Ab.scrollTop(a), Ab.scrollLeft(b), rb && clearInterval(rb);
      }var P,
          Q,
          R,
          S,
          T,
          U,
          V,
          W,
          X,
          Y,
          Z,
          $,
          _,
          ab,
          bb,
          cb,
          db,
          eb,
          fb,
          gb,
          hb,
          ib,
          jb,
          kb,
          lb,
          mb,
          nb,
          ob,
          pb,
          qb,
          rb,
          sb,
          tb,
          ub,
          vb = this,
          wb = !0,
          xb = !0,
          yb = !1,
          zb = !1,
          Ab = d.clone(!1, !1).empty(),
          Bb = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";"border-box" === d.css("box-sizing") ? (sb = 0, tb = 0) : (sb = d.css("paddingTop") + " " + d.css("paddingRight") + " " + d.css("paddingBottom") + " " + d.css("paddingLeft"), tb = (parseInt(d.css("paddingLeft"), 10) || 0) + (parseInt(d.css("paddingRight"), 10) || 0)), a.extend(vb, { reinitialise: function reinitialise(b) {
          b = a.extend({}, P, b), f(b);
        }, scrollToElement: function scrollToElement(a, b, c) {
          z(a, b, c);
        }, scrollTo: function scrollTo(a, b, c) {
          y(a, c), x(b, c);
        }, scrollToX: function scrollToX(a, b) {
          y(a, b);
        }, scrollToY: function scrollToY(a, b) {
          x(a, b);
        }, scrollToPercentX: function scrollToPercentX(a, b) {
          y(a * (U - R), b);
        }, scrollToPercentY: function scrollToPercentY(a, b) {
          x(a * (V - S), b);
        }, scrollBy: function scrollBy(a, b, c) {
          vb.scrollByX(a, c), vb.scrollByY(b, c);
        }, scrollByX: function scrollByX(a, b) {
          var c = A() + Math[0 > a ? "floor" : "ceil"](a),
              d = c / (U - R);t(d * cb, b);
        }, scrollByY: function scrollByY(a, b) {
          var c = B() + Math[0 > a ? "floor" : "ceil"](a),
              d = c / (V - S);r(d * _, b);
        }, positionDragX: function positionDragX(a, b) {
          t(a, b);
        }, positionDragY: function positionDragY(a, b) {
          r(a, b);
        }, animate: function animate(a, b, c, d) {
          var e = {};e[b] = c, a.animate(e, { duration: P.animateDuration, easing: P.animateEase, queue: !1, step: d });
        }, getContentPositionX: function getContentPositionX() {
          return A();
        }, getContentPositionY: function getContentPositionY() {
          return B();
        }, getContentWidth: function getContentWidth() {
          return U;
        }, getContentHeight: function getContentHeight() {
          return V;
        }, getPercentScrolledX: function getPercentScrolledX() {
          return A() / (U - R);
        }, getPercentScrolledY: function getPercentScrolledY() {
          return B() / (V - S);
        }, getIsScrollableH: function getIsScrollableH() {
          return Z;
        }, getIsScrollableV: function getIsScrollableV() {
          return Y;
        }, getContentPane: function getContentPane() {
          return Q;
        }, scrollToBottom: function scrollToBottom(a) {
          r(_, a);
        }, hijackInternalLinks: a.noop, destroy: function destroy() {
          O();
        } }), f(e);
    }return d = a.extend({}, a.fn.jScrollPane.defaults, d), a.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
      d[this] = d[this] || d.speed;
    }), this.each(function () {
      var b = a(this),
          c = b.data("jsp");c ? c.reinitialise(d) : (a("script", b).filter('[type="text/javascript"],:not([type])').remove(), c = new e(b, d), b.data("jsp", c));
    });
  }, a.fn.jScrollPane.defaults = { showArrows: !1, maintainPosition: !0, stickToBottom: !1, stickToRight: !1, clickOnTrack: !0, autoReinitialise: !1, autoReinitialiseDelay: 500, verticalDragMinHeight: 0, verticalDragMaxHeight: 99999, horizontalDragMinWidth: 0, horizontalDragMaxWidth: 99999, contentWidth: c, animateScroll: !1, animateDuration: 300, animateEase: "linear", hijackInternalLinks: !1, verticalGutter: 4, horizontalGutter: 4, mouseWheelSpeed: 3, arrowButtonSpeed: 0, arrowRepeatFreq: 50, arrowScrollOnHover: !1, trackClickSpeed: 0, trackClickRepeatFreq: 70, verticalArrowPositions: "split", horizontalArrowPositions: "split", enableKeyboardNavigation: !0, hideFocus: !1, keyboardSpeed: 0, initialDelay: 300, speed: 30, scrollPagePercent: .8 };
}(jQuery, this);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (p, f) {
  var s = "string",
      k = function k(e, f) {
    return (typeof e === "undefined" ? "undefined" : _typeof(e)) === f;
  },
      e = function e(_e) {
    return k(_e, "undefined");
  },
      h = function h(e) {
    return k(e, "function");
  },
      y = function y(e) {
    return "object" === (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) ? e instanceof HTMLElement : "object" === (typeof e === "undefined" ? "undefined" : _typeof(e)) && 1 === e.nodeType && "string" === typeof e.nodeName;
  },
      C = function C(q) {
    function E(a) {
      return b.extend({ attr: "", label: "", view: "attr", text: "", className: "", hide: !1 }, a || {});
    }function F() {
      if (!b.isReady) {
        try {
          f.documentElement.doScroll("left");
        } catch (a) {
          setTimeout(F, 1);return;
        }b.init();
      }
    }
    var t = { MooTools: "$$", Prototype: "$$", jQuery: "*" },
        n = 0,
        r = {},
        x = q || "simpleCart",
        z = {};q = {};q = {};var v = p.localStorage,
        l = p.console || { msgs: [], log: function log(a) {
        l.msgs.push(a);
      } },
        D = { USD: { code: "USD", symbol: "&#36;", name: "US Dollar" }, AUD: { code: "AUD", symbol: "&#36;", name: "Australian Dollar" }, BRL: { code: "BRL", symbol: "R&#36;", name: "Brazilian Real" }, CAD: { code: "CAD", symbol: "&#36;", name: "Canadian Dollar" }, CZK: { code: "CZK", symbol: "&nbsp;&#75;&#269;", name: "Czech Koruna", after: !0 }, DKK: { code: "DKK", symbol: "DKK&nbsp;", name: "Danish Krone" },
      EUR: { code: "EUR", symbol: "&euro;", name: "Euro" }, HKD: { code: "HKD", symbol: "&#36;", name: "Hong Kong Dollar" }, HUF: { code: "HUF", symbol: "&#70;&#116;", name: "Hungarian Forint" }, ILS: { code: "ILS", symbol: "&#8362;", name: "Israeli New Sheqel" }, JPY: { code: "JPY", symbol: "&yen;", name: "Japanese Yen", accuracy: 0 }, MXN: { code: "MXN", symbol: "&#36;", name: "Mexican Peso" }, NOK: { code: "NOK", symbol: "NOK&nbsp;", name: "Norwegian Krone" }, NZD: { code: "NZD", symbol: "&#36;", name: "New Zealand Dollar" }, PLN: { code: "PLN", symbol: "PLN&nbsp;", name: "Polish Zloty" },
      GBP: { code: "GBP", symbol: "&pound;", name: "Pound Sterling" }, SGD: { code: "SGD", symbol: "&#36;", name: "Singapore Dollar" }, SEK: { code: "SEK", symbol: "SEK&nbsp;", name: "Swedish Krona" }, CHF: { code: "CHF", symbol: "CHF&nbsp;", name: "Swiss Franc" }, THB: { code: "THB", symbol: "&#3647;", name: "Thai Baht" }, BTC: { code: "BTC", symbol: " BTC", name: "Bitcoin", accuracy: 4, after: !0 } },
        m = { checkout: { type: "PayPal", email: "you@yours.com" }, currency: "USD", language: "english-us", cartStyle: "div", cartColumns: [{ attr: "name", label: "Name" }, { attr: "price", label: "Price",
        view: "currency" }, { view: "decrement", label: !1 }, { attr: "quantity", label: "Qty" }, { view: "increment", label: !1 }, { attr: "total", label: "SubTotal", view: "currency" }, { view: "remove", text: "Remove", label: !1 }], excludeFromCheckout: ["thumb"], shippingFlatRate: 0, shippingQuantityRate: 0, shippingTotalRate: 0, shippingCustom: null, taxRate: 0, taxShipping: !1, data: {} },
        b = function b(a) {
      if (h(a)) return b.ready(a);if (k(a, "object")) return b.extend(m, a);
    },
        A,
        B;b.extend = function (a, d) {
      var c;e(d) && (d = a, a = b);for (c in d) {
        Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }return a;
    };b.extend({ copy: function copy(a) {
        a = C(a);a.init();return a;
      } });b.extend({ isReady: !1, add: function add(a, d) {
        var c = new b.Item(a || {}),
            g = !0,
            u = !0 === d ? d : !1;if (!u && (g = b.trigger("beforeAdd", [c]), !1 === g)) return !1;(g = b.has(c)) ? (g.increment(c.quantity()), c = g) : r[c.id()] = c;b.update();u || b.trigger("afterAdd", [c, e(g)]);return c;
      }, each: function each(a, d) {
        var c,
            g = 0,
            u,
            e,
            w;if (h(a)) e = a, w = r;else if (h(d)) e = d, w = a;else return;for (c in w) {
          if (Object.prototype.hasOwnProperty.call(w, c)) {
            u = e.call(b, w[c], g, c);if (!1 === u) break;
            g += 1;
          }
        }
      }, find: function find(a) {
        var d = [];if (k(r[a], "object")) return r[a];if (k(a, "object")) return b.each(function (c) {
          var g = !0;b.each(a, function (a, b, d) {
            k(a, s) ? a.match(/<=.*/) ? (a = parseFloat(a.replace("<=", "")), c.get(d) && parseFloat(c.get(d)) <= a || (g = !1)) : a.match(/</) ? (a = parseFloat(a.replace("<", "")), c.get(d) && parseFloat(c.get(d)) < a || (g = !1)) : a.match(/>=/) ? (a = parseFloat(a.replace(">=", "")), c.get(d) && parseFloat(c.get(d)) >= a || (g = !1)) : a.match(/>/) ? (a = parseFloat(a.replace(">", "")), c.get(d) && parseFloat(c.get(d)) > a || (g = !1)) : c.get(d) && c.get(d) === a || (g = !1) : c.get(d) && c.get(d) === a || (g = !1);return g;
          });g && d.push(c);
        }), d;e(a) && b.each(function (a) {
          d.push(a);
        });return d;
      }, items: function items() {
        return this.find();
      }, has: function has(a) {
        var d = !1;b.each(function (b) {
          b.equals(a) && (d = b);
        });return d;
      }, empty: function empty() {
        var a = {};b.each(function (b) {
          !1 === b.remove(!0) && (a[b.id()] = b);
        });r = a;b.update();
      }, quantity: function quantity() {
        var a = 0;b.each(function (b) {
          a += b.quantity();
        });return a;
      }, total: function total() {
        var a = 0;b.each(function (b) {
          a += b.total();
        });return a;
      }, grandTotal: function grandTotal() {
        return b.total() + b.tax() + b.shipping();
      }, update: function update() {
        b.save();b.trigger("update");
      }, init: function init() {
        b.load();b.update();b.ready();
      }, $: function $(a) {
        return new b.ELEMENT(a);
      }, $create: function $create(a) {
        return b.$(f.createElement(a));
      }, setupViewTool: function setupViewTool() {
        var a,
            d = p,
            c;for (c in t) {
          if (Object.prototype.hasOwnProperty.call(t, c) && p[c] && (a = t[c].replace("*", c).split("."), (a = a.shift()) && (d = d[a]), "function" === typeof d)) {
            A = d;b.extend(b.ELEMENT._, z[c]);break;
          }
        }
      }, ids: function ids() {
        var a = [];b.each(function (b) {
          a.push(b.id());
        });return a;
      }, save: function save() {
        b.trigger("beforeSave");
        var a = {};b.each(function (d) {
          a[d.id()] = b.extend(d.fields(), d.options());
        });v.setItem(x + "_items", JSON.stringify(a));b.trigger("afterSave");
      }, load: function load() {
        r = {};var a = v.getItem(x + "_items");if (a) {
          try {
            b.each(JSON.parse(a), function (a) {
              b.add(a, !0);
            });
          } catch (d) {
            b.error("Error Loading data: " + d);
          }b.trigger("load");
        }
      }, ready: function ready(a) {
        h(a) ? b.isReady ? a.call(b) : b.bind("ready", a) : e(a) && !b.isReady && (b.trigger("ready"), b.isReady = !0);
      }, error: function error(a) {
        var d = "";k(a, s) ? d = a : k(a, "object") && k(a.message, s) && (d = a.message);
        try {
          l.log("simpleCart(js) Error: " + d);
        } catch (c) {}b.trigger("error", a);
      } });b.extend({ tax: function tax() {
        var a = m.taxShipping ? b.total() + b.shipping() : b.total(),
            d = b.taxRate() * a;b.each(function (a) {
          a.get("tax") ? d += a.get("tax") : a.get("taxRate") && (d += a.get("taxRate") * a.total());
        });return parseFloat(d);
      }, taxRate: function taxRate() {
        return m.taxRate || 0;
      }, shipping: function shipping(a) {
        if (h(a)) b({ shippingCustom: a });else {
          var d = m.shippingQuantityRate * b.quantity() + m.shippingTotalRate * b.total() + m.shippingFlatRate;h(m.shippingCustom) && (d += m.shippingCustom.call(b));
          b.each(function (a) {
            d += parseFloat(a.get("shipping") || 0);
          });return parseFloat(d);
        }
      } });B = { attr: function attr(a, b) {
        return a.get(b.attr) || "";
      }, currency: function currency(a, d) {
        return b.toCurrency(a.get(d.attr) || 0);
      }, link: function link(a, b) {
        return "<a href='" + a.get(b.attr) + "'>" + b.text + "</a>";
      }, decrement: function decrement(a, b) {
        return "<a href='javascript:;' class='" + x + "_decrement'>" + (b.text || "-") + "</a>";
      }, increment: function increment(a, b) {
        return "<a href='javascript:;' class='" + x + "_increment'>" + (b.text || "+") + "</a>";
      }, image: function image(a, b) {
        return "<img src='" + a.get(b.attr) + "'/>";
      }, input: function input(a, b) {
        return "<input type='text' value='" + a.get(b.attr) + "' class='" + x + "_input'/>";
      }, remove: function remove(a, b) {
        return "<a href='javascript:;' class='" + x + "_remove'>" + (b.text || "X") + "</a>";
      } };b.extend({ writeCart: function writeCart(a) {
        var d = m.cartStyle.toLowerCase(),
            c = "table" === d,
            g = c ? "tr" : "div",
            u = c ? "th" : "div",
            e = c ? "td" : "div",
            w = b.$create(d),
            d = b.$create(g).addClass("headerRow"),
            f,
            h;b.$(a).html(" ").append(w);w.append(d);c = 0;for (h = m.cartColumns.length; c < h; c += 1) {
          f = E(m.cartColumns[c]), a = "item-" + (f.attr || f.view || f.label || f.text || "cell") + " " + f.className, f = f.label || "", d.append(b.$create(u).addClass(a).html(f));
        }b.each(function (a, d) {
          b.createCartRow(a, d, g, e, w);
        });return w;
      }, createCartRow: function createCartRow(a, d, c, g, u) {
        d = b.$create(c).addClass("itemRow row-" + d + " " + (d % 2 ? "even" : "odd")).attr("id", "cartItem_" + a.id());var e, f, l;u.append(d);u = 0;for (c = m.cartColumns.length; u < c; u += 1) {
          e = E(m.cartColumns[u]), f = "item-" + (e.attr || (k(e.view, s) ? e.view : e.label || e.text || "cell")) + " " + e.className, l = a, l = (h(e.view) ? e.view : k(e.view, s) && h(B[e.view]) ? B[e.view] : B.attr).call(b, l, e), f = b.$create(g).addClass(f).html(l), d.append(f);
        }return d;
      } });b.Item = function (a) {
      function d() {
        k(c.price, s) && (c.price = parseFloat(c.price.replace(b.currency().decimal, ".").replace(/[^0-9\.]+/ig, "")));isNaN(c.price) && (c.price = 0);0 > c.price && (c.price = 0);k(c.quantity, s) && (c.quantity = parseInt(c.quantity.replace(b.currency().delimiter, ""), 10));isNaN(c.quantity) && (c.quantity = 1);0 >= c.quantity && g.remove();
      }var c = {},
          g = this;k(a, "object") && b.extend(c, a);n += 1;for (c.id = c.id || "SCI-" + n; !e(r[c.id]);) {
        n += 1, c.id = "SCI-" + n;
      }g.get = function (a, b) {
        var d = !b;return e(a) ? a : h(c[a]) ? c[a].call(g) : e(c[a]) ? h(g[a]) && d ? g[a].call(g) : !e(g[a]) && d ? g[a] : c[a] : c[a];
      };g.set = function (a, b) {
        e(a) || (c[a.toLowerCase()] = b, "price" !== a.toLowerCase() && "quantity" !== a.toLowerCase() || d());return g;
      };g.equals = function (a) {
        for (var b in c) {
          if (Object.prototype.hasOwnProperty.call(c, b) && "quantity" !== b && "id" !== b && a.get(b) !== c[b]) return !1;
        }return !0;
      };g.options = function () {
        var a = {};b.each(c, function (d, c, e) {
          var f = !0;b.each(g.reservedFields(), function (a) {
            a === e && (f = !1);return f;
          });f && (a[e] = g.get(e));
        });return a;
      };d();
    };b.Item._ = b.Item.prototype = { increment: function increment(a) {
        a = parseInt(a || 1, 10);this.quantity(this.quantity() + a);return 1 > this.quantity() ? (this.remove(), null) : this;
      }, decrement: function decrement(a) {
        return this.increment(-parseInt(a || 1, 10));
      }, remove: function remove(a) {
        if (!1 === b.trigger("beforeRemove", [r[this.id()]])) return !1;delete r[this.id()];a || b.update();return null;
      }, reservedFields: function reservedFields() {
        return "quantity id item_number price name shipping tax taxRate".split(" ");
      },
      fields: function fields() {
        var a = {},
            d = this;b.each(d.reservedFields(), function (b) {
          d.get(b) && (a[b] = d.get(b));
        });return a;
      }, quantity: function quantity(a) {
        return e(a) ? parseInt(this.get("quantity", !0) || 1, 10) : this.set("quantity", a);
      }, price: function price(a) {
        return e(a) ? parseFloat(this.get("price", !0).toString().replace(b.currency().symbol, "").replace(b.currency().delimiter, "") || 1) : this.set("price", parseFloat(a.toString().replace(b.currency().symbol, "").replace(b.currency().delimiter, "")));
      }, id: function id() {
        return this.get("id", !1);
      },
      total: function total() {
        return this.quantity() * this.price();
      } };b.extend({ checkout: function checkout() {
        if ("custom" === m.checkout.type.toLowerCase() && h(m.checkout.fn)) m.checkout.fn.call(b, m.checkout);else if (h(b.checkout[m.checkout.type])) {
          var a = b.checkout[m.checkout.type].call(b, m.checkout);a.data && a.action && a.method && !1 !== b.trigger("beforeCheckout", [a.data]) && b.generateAndSendForm(a);
        } else b.error("No Valid Checkout Method Specified");
      }, extendCheckout: function extendCheckout(a) {
        return b.extend(b.checkout, a);
      }, generateAndSendForm: function generateAndSendForm(a) {
        var d = b.$create("form");d.attr("style", "display:none;");d.attr("action", a.action);d.attr("method", a.method);b.each(a.data, function (a, g, e) {
          d.append(b.$create("input").attr("type", "hidden").attr("name", e).val(a));
        });b.$("body").append(d);d.el.submit();d.remove();
      } });b.extendCheckout({ PayPal: function PayPal(a) {
        if (!a.email) return b.error("No email provided for PayPal checkout");var d = { cmd: "_cart", upload: "1", currency_code: b.currency().code, business: a.email, rm: "GET" === a.method ? "0" : "2", tax_cart: (1 * b.tax()).toFixed(2),
          handling_cart: (1 * b.shipping()).toFixed(2), charset: "utf-8" },
            c = a.sandbox ? "https://www.sandbox.paypal.com/cgi-bin/webscr" : "https://www.paypal.com/cgi-bin/webscr",
            g = "GET" === a.method ? "GET" : "POST";a.success && (d["return"] = a.success);a.cancel && (d.cancel_return = a.cancel);a.notify && (d.notify_url = a.notify);b.each(function (a, c) {
          var g = c + 1,
              e = a.options(),
              f = 0,
              h;d["item_name_" + g] = a.get("name");d["quantity_" + g] = a.quantity();d["amount_" + g] = (1 * a.price()).toFixed(2);d["item_number_" + g] = a.get("item_number") || g;b.each(e, function (a, c, e) {
            10 > c && (h = !0, b.each(m.excludeFromCheckout, function (a) {
              a === e && (h = !1);
            }), h && (f += 1, d["on" + c + "_" + g] = e, d["os" + c + "_" + g] = a));
          });d["option_index_" + c] = Math.min(10, f);
        });return { action: c, method: g, data: d };
      }, GoogleCheckout: function GoogleCheckout(a) {
        if (!a.merchantID) return b.error("No merchant id provided for GoogleCheckout");if ("USD" !== b.currency().code && "GBP" !== b.currency().code) return b.error("Google Checkout only accepts USD and GBP");var d = { ship_method_name_1: "Shipping", ship_method_price_1: b.shipping(), ship_method_currency_1: b.currency().code,
          _charset_: "" },
            c = "https://checkout.google.com/api/checkout/v2/checkoutForm/Merchant/" + a.merchantID;a = "GET" === a.method ? "GET" : "POST";b.each(function (a, c) {
          var e = c + 1,
              f = [],
              h;d["item_name_" + e] = a.get("name");d["item_quantity_" + e] = a.quantity();d["item_price_" + e] = a.price();d["item_currency_ " + e] = b.currency().code;d["item_tax_rate" + e] = a.get("taxRate") || b.taxRate();b.each(a.options(), function (a, d, c) {
            h = !0;b.each(m.excludeFromCheckout, function (a) {
              a === c && (h = !1);
            });h && f.push(c + ": " + a);
          });d["item_description_" + e] = f.join(", ");
        });
        return { action: c, method: a, data: d };
      }, AmazonPayments: function AmazonPayments(a) {
        if (!a.merchant_signature) return b.error("No merchant signature provided for Amazon Payments");if (!a.merchant_id) return b.error("No merchant id provided for Amazon Payments");if (!a.aws_access_key_id) return b.error("No AWS access key id provided for Amazon Payments");var d = { aws_access_key_id: a.aws_access_key_id, merchant_signature: a.merchant_signature, currency_code: b.currency().code, tax_rate: b.taxRate(), weight_unit: a.weight_unit || "lb" },
            c = "https://payments" + (a.sandbox ? "-sandbox" : "") + ".amazon.com/checkout/" + a.merchant_id,
            g = "GET" === a.method ? "GET" : "POST";b.each(function (c, g) {
          var e = g + 1,
              f = [];d["item_title_" + e] = c.get("name");d["item_quantity_" + e] = c.quantity();d["item_price_" + e] = c.price();d["item_sku_ " + e] = c.get("sku") || c.id();d["item_merchant_id_" + e] = a.merchant_id;c.get("weight") && (d["item_weight_" + e] = c.get("weight"));m.shippingQuantityRate && (d["shipping_method_price_per_unit_rate_" + e] = m.shippingQuantityRate);b.each(c.options(), function (a, d, c) {
            var g = !0;b.each(m.excludeFromCheckout, function (a) {
              a === c && (g = !1);
            });g && "weight" !== c && "tax" !== c && f.push(c + ": " + a);
          });d["item_description_" + e] = f.join(", ");
        });return { action: c, method: g, data: d };
      }, SendForm: function SendForm(a) {
        if (!a.url) return b.error("URL required for SendForm Checkout");var d = { currency: b.currency().code, shipping: b.shipping(), tax: b.tax(), taxRate: b.taxRate(), itemCount: b.find({}).length },
            c = a.url,
            g = "GET" === a.method ? "GET" : "POST";b.each(function (a, c) {
          var g = c + 1,
              e = [],
              f;d["item_name_" + g] = a.get("name");d["item_quantity_" + g] = a.quantity();d["item_price_" + g] = a.price();b.each(a.options(), function (a, d, c) {
            f = !0;b.each(m.excludeFromCheckout, function (a) {
              a === c && (f = !1);
            });f && e.push(c + ": " + a);
          });d["item_options_" + g] = e.join(", ");
        });a.success && (d["return"] = a.success);a.cancel && (d.cancel_return = a.cancel);a.extra_data && (d = b.extend(d, a.extra_data));return { action: c, method: g, data: d };
      } });q = { bind: function bind(a, d) {
        if (!h(d)) return this;this._events || (this._events = {});var c = a.split(/ +/);b.each(c, function (a) {
          !0 === this._events[a] ? d.apply(this) : e(this._events[a]) ? this._events[a] = [d] : this._events[a].push(d);
        });return this;
      }, trigger: function trigger(a, b) {
        var c = !0,
            g,
            f;this._events || (this._events = {});if (!e(this._events[a]) && h(this._events[a][0])) for (g = 0, f = this._events[a].length; g < f; g += 1) {
          c = this._events[a][g].apply(this, b || []);
        }return !1 === c ? !1 : !0;
      } };q.on = q.bind;b.extend(q);b.extend(b.Item._, q);q = { beforeAdd: null, afterAdd: null, load: null, beforeSave: null, afterSave: null, update: null, ready: null, checkoutSuccess: null, checkoutFail: null, beforeCheckout: null, beforeRemove: null };b(q);b.each(q, function (a, d, c) {
      b.bind(c, function () {
        h(m[c]) && m[c].apply(this, arguments);
      });
    });b.extend({ toCurrency: function toCurrency(a, d) {
        var c = parseFloat(a),
            g = d || {},
            g = b.extend(b.extend({ symbol: "$", decimal: ".", delimiter: ",", accuracy: 2, after: !1 }, b.currency()), g),
            e = c.toFixed(g.accuracy).split("."),
            c = e[1],
            e = e[0],
            e = b.chunk(e.reverse(), 3).join(g.delimiter.reverse()).reverse();return (g.after ? "" : g.symbol) + e + (c ? g.decimal + c : "") + (g.after ? g.symbol : "");
      }, chunk: function chunk(a, b) {
        "undefined" === typeof b && (b = 2);return a.match(RegExp(".{1," + b + "}", "g")) || [];
      } });
    String.prototype.reverse = function () {
      return this.split("").reverse().join("");
    };b.extend({ currency: function currency(a) {
        if (k(a, s) && !e(D[a])) m.currency = a;else if (k(a, "object")) D[a.code] = a, m.currency = a.code;else return D[m.currency];
      } });b.extend({ bindOutlets: function bindOutlets(a) {
        b.each(a, function (a, c, e) {
          b.bind("update", function () {
            b.setOutlet("." + x + "_" + e, a);
          });
        });
      }, setOutlet: function setOutlet(a, d) {
        var c = d.call(b, a);k(c, "object") && c.el ? b.$(a).html(" ").append(c) : e(c) || b.$(a).html(c);
      }, bindInputs: function bindInputs(a) {
        b.each(a, function (a) {
          b.setInput("." + x + "_" + a.selector, a.event, a.callback);
        });
      }, setInput: function setInput(a, d, c) {
        b.$(a).live(d, c);
      } });b.ELEMENT = function (a) {
      this.create(a);this.selector = a || null;
    };b.extend(z, { MooTools: { text: function text(a) {
          return this.attr("text", a);
        }, html: function html(a) {
          return this.attr("html", a);
        }, val: function val(a) {
          return this.attr("value", a);
        }, attr: function attr(a, b) {
          if (e(b)) return this.el[0] && this.el[0].get(a);this.el.set(a, b);return this;
        }, remove: function remove() {
          this.el.dispose();return null;
        }, addClass: function addClass(a) {
          this.el.addClass(a);return this;
        }, removeClass: function removeClass(a) {
          this.el.removeClass(a);
          return this;
        }, append: function append(a) {
          this.el.adopt(a.el);return this;
        }, each: function each(a) {
          h(a) && b.each(this.el, function (b, c, e) {
            a.call(c, c, b, e);
          });return this;
        }, click: function click(a) {
          h(a) ? this.each(function (b) {
            b.addEvent("click", function (c) {
              a.call(b, c);
            });
          }) : e(a) && this.el.fireEvent("click");return this;
        }, live: function live(a, d) {
          var c = this.selector;h(d) && b.$("body").el.addEvent(a + ":relay(" + c + ")", function (a, b) {
            d.call(b, a);
          });
        }, match: function match(a) {
          return this.el.match(a);
        }, parent: function parent() {
          return b.$(this.el.getParent());
        }, find: function find(a) {
          return b.$(this.el.getElements(a));
        },
        closest: function closest(a) {
          return b.$(this.el.getParent(a));
        }, descendants: function descendants() {
          return this.find("*");
        }, tag: function tag() {
          return this.el[0].tagName;
        }, submit: function submit() {
          this.el[0].submit();return this;
        }, create: function create(a) {
          this.el = A(a);
        } }, Prototype: { text: function text(a) {
          if (e(a)) return this.el[0].innerHTML;this.each(function (b, c) {
            $(c).update(a);
          });return this;
        }, html: function html(a) {
          return this.text(a);
        }, val: function val(a) {
          return this.attr("value", a);
        }, attr: function attr(a, b) {
          if (e(b)) return this.el[0].readAttribute(a);this.each(function (c, e) {
            $(e).writeAttribute(a, b);
          });return this;
        }, append: function append(a) {
          this.each(function (b, c) {
            a.el ? a.each(function (a, b) {
              $(c).appendChild(b);
            }) : y(a) && $(c).appendChild(a);
          });return this;
        }, remove: function remove() {
          this.each(function (a, b) {
            $(b).remove();
          });return this;
        }, addClass: function addClass(a) {
          this.each(function (b, c) {
            $(c).addClassName(a);
          });return this;
        }, removeClass: function removeClass(a) {
          this.each(function (b, c) {
            $(c).removeClassName(a);
          });return this;
        }, each: function each(a) {
          h(a) && b.each(this.el, function (b, c, e) {
            a.call(c, c, b, e);
          });return this;
        }, click: function click(a) {
          h(a) ? this.each(function (b, c) {
            $(c).observe("click", function (b) {
              a.call(c, b);
            });
          }) : e(a) && this.each(function (a, b) {
            $(b).fire("click");
          });return this;
        }, live: function live(a, b) {
          if (h(b)) {
            var c = this.selector;f.observe(a, function (a, e) {
              e === A(a).findElement(c) && b.call(e, a);
            });
          }
        }, parent: function parent() {
          return b.$(this.el.up());
        }, find: function find(a) {
          return b.$(this.el.getElementsBySelector(a));
        }, closest: function closest(a) {
          return b.$(this.el.up(a));
        }, descendants: function descendants() {
          return b.$(this.el.descendants());
        }, tag: function tag() {
          return this.el.tagName;
        },
        submit: function submit() {
          this.el[0].submit();
        }, create: function create(a) {
          k(a, s) ? this.el = A(a) : y(a) && (this.el = [a]);
        } }, jQuery: { passthrough: function passthrough(a, b) {
          if (e(b)) return this.el[a]();this.el[a](b);return this;
        }, text: function text(a) {
          return this.passthrough("text", a);
        }, html: function html(a) {
          return this.passthrough("html", a);
        }, val: function val(a) {
          return this.passthrough("val", a);
        }, append: function append(a) {
          this.el.append(a.el || a);return this;
        }, attr: function attr(a, b) {
          if (e(b)) return this.el.attr(a);this.el.attr(a, b);return this;
        }, remove: function remove() {
          this.el.remove();
          return this;
        }, addClass: function addClass(a) {
          this.el.addClass(a);return this;
        }, removeClass: function removeClass(a) {
          this.el.removeClass(a);return this;
        }, each: function each(a) {
          return this.passthrough("each", a);
        }, click: function click(a) {
          return this.passthrough("click", a);
        }, live: function live(a, b) {
          A(f).delegate(this.selector, a, b);return this;
        }, parent: function parent() {
          return b.$(this.el.parent());
        }, find: function find(a) {
          return b.$(this.el.find(a));
        }, closest: function closest(a) {
          return b.$(this.el.closest(a));
        }, tag: function tag() {
          return this.el[0].tagName;
        }, descendants: function descendants() {
          return b.$(this.el.find("*"));
        },
        submit: function submit() {
          return this.el.submit();
        }, create: function create(a) {
          this.el = A(a);
        } } });b.ELEMENT._ = b.ELEMENT.prototype;b.ready(b.setupViewTool);b.ready(function () {
      b.bindOutlets({ total: function total() {
          return b.toCurrency(b.total());
        }, quantity: function quantity() {
          return b.quantity();
        }, items: function items(a) {
          b.writeCart(a);
        }, tax: function tax() {
          return b.toCurrency(b.tax());
        }, taxRate: function taxRate() {
          return b.taxRate().toFixed();
        }, shipping: function shipping() {
          return b.toCurrency(b.shipping());
        }, grandTotal: function grandTotal() {
          return b.toCurrency(b.grandTotal());
        } });
      b.bindInputs([{ selector: "checkout", event: "click", callback: function callback() {
          b.checkout();
        } }, { selector: "empty", event: "click", callback: function callback() {
          b.empty();
        } }, { selector: "increment", event: "click", callback: function callback() {
          b.find(b.$(this).closest(".itemRow").attr("id").split("_")[1]).increment();b.update();
        } }, { selector: "decrement", event: "click", callback: function callback() {
          b.find(b.$(this).closest(".itemRow").attr("id").split("_")[1]).decrement();b.update();
        } }, { selector: "remove", event: "click", callback: function callback() {
          b.find(b.$(this).closest(".itemRow").attr("id").split("_")[1]).remove();
        } }, { selector: "input", event: "change", callback: function callback() {
          var a = b.$(this),
              d = a.parent(),
              c = d.attr("class").split(" ");b.each(c, function (c) {
            c.match(/item-.+/i) && (c = c.split("-")[1], b.find(d.closest(".itemRow").attr("id").split("_")[1]).set(c, a.val()), b.update());
          });
        } }, { selector: "shelfItem .item_add", event: "click", callback: function callback() {
          var a = {};b.$(this).closest("." + x + "_shelfItem").descendants().each(function (d, c) {
            var e = b.$(c);e.attr("class") && e.attr("class").match(/item_.+/) && !e.attr("class").match(/item_add/) && b.each(e.attr("class").split(" "), function (b) {
              var c, d;if (b.match(/item_.+/)) {
                b = b.split("_")[1];c = "";switch (e.tag().toLowerCase()) {case "input":case "textarea":case "select":
                    d = e.attr("type");if (!d || ("checkbox" === d.toLowerCase() || "radio" === d.toLowerCase()) && e.attr("checked") || "text" === d.toLowerCase() || "number" === d.toLowerCase()) c = e.val();break;case "img":
                    c = e.attr("src");break;default:
                    c = e.text();}null !== c && "" !== c && (a[b.toLowerCase()] = a[b.toLowerCase()] ? a[b.toLowerCase()] + ", " + c : c);
              }
            });
          });b.add(a);
        } }]);
    });
    f.addEventListener ? p.DOMContentLoaded = function () {
      f.removeEventListener("DOMContentLoaded", DOMContentLoaded, !1);b.init();
    } : f.attachEvent && (p.DOMContentLoaded = function () {
      "complete" === f.readyState && (f.detachEvent("onreadystatechange", DOMContentLoaded), b.init());
    });(function () {
      if ("complete" === f.readyState) return setTimeout(b.init, 1);if (f.addEventListener) f.addEventListener("DOMContentLoaded", DOMContentLoaded, !1), p.addEventListener("load", b.init, !1);else if (f.attachEvent) {
        f.attachEvent("onreadystatechange", DOMContentLoaded);p.attachEvent("onload", b.init);var a = !1;try {
          a = null === p.frameElement;
        } catch (d) {}f.documentElement.doScroll && a && F();
      }
    })();return b;
  };p.simpleCart = C();
})(window, document);var JSON;JSON || (JSON = {});
(function () {
  function p(e) {
    return 10 > e ? "0" + e : e;
  }function f(f) {
    e.lastIndex = 0;return e.test(f) ? '"' + f.replace(e, function (e) {
      var f = C[e];return "string" === typeof f ? f : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + f + '"';
  }function s(e, k) {
    var t,
        n,
        r,
        p,
        z = h,
        v,
        l = k[e];l && "object" === (typeof l === "undefined" ? "undefined" : _typeof(l)) && "function" === typeof l.toJSON && (l = l.toJSON(e));"function" === typeof q && (l = q.call(k, e, l));switch (typeof l === "undefined" ? "undefined" : _typeof(l)) {case "string":
        return f(l);case "number":
        return isFinite(l) ? String(l) : "null";case "boolean":case "null":
        return String(l);
      case "object":
        if (!l) return "null";h += y;v = [];if ("[object Array]" === Object.prototype.toString.apply(l)) {
          p = l.length;for (t = 0; t < p; t += 1) {
            v[t] = s(t, l) || "null";
          }r = 0 === v.length ? "[]" : h ? "[\n" + h + v.join(",\n" + h) + "\n" + z + "]" : "[" + v.join(",") + "]";h = z;return r;
        }if (q && "object" === (typeof q === "undefined" ? "undefined" : _typeof(q))) for (p = q.length, t = 0; t < p; t += 1) {
          "string" === typeof q[t] && (n = q[t], (r = s(n, l)) && v.push(f(n) + (h ? ": " : ":") + r));
        } else for (n in l) {
          Object.prototype.hasOwnProperty.call(l, n) && (r = s(n, l)) && v.push(f(n) + (h ? ": " : ":") + r);
        }r = 0 === v.length ? "{}" : h ? "{\n" + h + v.join(",\n" + h) + "\n" + z + "}" : "{" + v.join(",") + "}";h = z;return r;}
  }"function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + p(this.getUTCMonth() + 1) + "-" + p(this.getUTCDate()) + "T" + p(this.getUTCHours()) + ":" + p(this.getUTCMinutes()) + ":" + p(this.getUTCSeconds()) + "Z" : null;
  }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
    return this.valueOf();
  });var k = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      h,
      y,
      C = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
      q;"function" !== typeof JSON.stringify && (JSON.stringify = function (e, f, k) {
    var n;y = h = "";if ("number" === typeof k) for (n = 0; n < k; n += 1) {
      y += " ";
    } else "string" === typeof k && (y = k);if ((q = f) && "function" !== typeof f && ("object" !== (typeof f === "undefined" ? "undefined" : _typeof(f)) || "number" !== typeof f.length)) throw Error("JSON.stringify");return s("", { "": e });
  });
  "function" !== typeof JSON.parse && (JSON.parse = function (e, f) {
    function h(e, k) {
      var n,
          p,
          l = e[k];if (l && "object" === (typeof l === "undefined" ? "undefined" : _typeof(l))) for (n in l) {
        Object.prototype.hasOwnProperty.call(l, n) && (p = h(l, n), void 0 !== p ? l[n] = p : delete l[n]);
      }return f.call(e, k, l);
    }var n;e = String(e);k.lastIndex = 0;k.test(e) && (e = e.replace(k, function (e) {
      return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
    }));if (/^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return n = eval("(" + e + ")"), "function" === typeof f ? h({ "": n }, "") : n;throw new SyntaxError("JSON.parse");
  });
})();
(function () {
  if (!this.localStorage) if (this.globalStorage) try {
    this.localStorage = this.globalStorage;
  } catch (p) {} else {
    var f = document.createElement("div");f.style.display = "none";document.getElementsByTagName("head")[0].appendChild(f);if (f.addBehavior) {
      f.addBehavior("#default#userdata");var s = this.localStorage = { length: 0, setItem: function setItem(e, h) {
          f.load("localStorage");e = k(e);f.getAttribute(e) || this.length++;f.setAttribute(e, h);f.save("localStorage");
        }, getItem: function getItem(e) {
          f.load("localStorage");e = k(e);return f.getAttribute(e);
        },
        removeItem: function removeItem(e) {
          f.load("localStorage");e = k(e);f.removeAttribute(e);f.save("localStorage");this.length = 0;
        }, clear: function clear() {
          f.load("localStorage");for (var e = 0; attr = f.XMLDocument.documentElement.attributes[e++];) {
            f.removeAttribute(attr.name);
          }f.save("localStorage");this.length = 0;
        }, key: function key(e) {
          f.load("localStorage");return f.XMLDocument.documentElement.attributes[e];
        } },
          k = function k(e) {
        return e.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-");
      };f.load("localStorage");s.length = f.XMLDocument.documentElement.attributes.length;
    }
  }
})();

/***/ }),
/* 19 */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);