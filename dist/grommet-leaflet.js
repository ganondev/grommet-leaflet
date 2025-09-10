import { jsxDEV as st } from "react/jsx-dev-runtime";
import St, { useRef as xe, useEffect as Ft, createContext as ql, use as Xl, forwardRef as ae, useImperativeHandle as Yi, useState as Un, useCallback as $l, useContext as De } from "react";
import di, { ThemeContext as Nt, css as ts } from "styled-components";
import { Box as ye, Text as Kl, Button as kn } from "grommet";
import { createPortal as Jl, render as Ql } from "react-dom";
import Vn from "react-dom/server";
function es(r, i) {
  const n = xe(i);
  Ft(function() {
    i !== n.current && r.attributionControl != null && (n.current != null && r.attributionControl.removeAttribution(n.current), i != null && r.attributionControl.addAttribution(i)), n.current = i;
  }, [
    r,
    i
  ]);
}
const th = 1;
function eh(r) {
  return Object.freeze({
    __version: th,
    map: r
  });
}
function is(r, i) {
  return Object.freeze({
    ...r,
    ...i
  });
}
const ir = ql(null);
function Gi() {
  const r = Xl(ir);
  if (r == null)
    throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return r;
}
function ih(r) {
  function i(n, a) {
    const { instance: l, context: o } = r(n).current;
    Yi(a, () => l);
    const { children: h } = n;
    return h == null ? null : /* @__PURE__ */ St.createElement(ir, {
      value: o
    }, h);
  }
  return /* @__PURE__ */ ae(i);
}
function nh(r) {
  function i(n, a) {
    const [l, o] = Un(!1), { instance: h } = r(n, o).current;
    Yi(a, () => h), Ft(function() {
      l && h.update();
    }, [
      h,
      l,
      n.children
    ]);
    const c = h._contentNode;
    return c ? /* @__PURE__ */ Jl(n.children, c) : null;
  }
  return /* @__PURE__ */ ae(i);
}
function ns(r) {
  function i(n, a) {
    const { instance: l } = r(n).current;
    return Yi(a, () => l), null;
  }
  return /* @__PURE__ */ ae(i);
}
function rh(r) {
  return function(n) {
    const a = Gi(), l = r(n, a), { instance: o } = l.current, h = xe(n.position), { position: c } = n;
    return Ft(function() {
      return o.addTo(a.map), function() {
        o.remove();
      };
    }, [
      a.map,
      o
    ]), Ft(function() {
      c != null && c !== h.current && (o.setPosition(c), h.current = c);
    }, [
      o,
      c
    ]), l;
  };
}
function rs(r, i) {
  const n = xe(void 0);
  Ft(function() {
    return i != null && r.instance.on(i), n.current = i, function() {
      n.current != null && r.instance.off(n.current), n.current = null;
    };
  }, [
    r,
    i
  ]);
}
function nr(r, i) {
  const n = r.pane ?? i.pane;
  return n ? {
    ...r,
    pane: n
  } : r;
}
function oh(r, i) {
  return function(a, l) {
    const o = Gi(), h = r(nr(a, o), o);
    return es(o.map, a.attribution), rs(h.current, a.eventHandlers), i(h.current, o, a, l), h;
  };
}
var os = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ss(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Hn = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(r, i) {
  (function(n, a) {
    a(i);
  })(os, function(n) {
    var a = "1.9.4";
    function l(t) {
      var e, s, u, d;
      for (s = 1, u = arguments.length; s < u; s++) {
        d = arguments[s];
        for (e in d)
          t[e] = d[e];
      }
      return t;
    }
    var o = Object.create || /* @__PURE__ */ function() {
      function t() {
      }
      return function(e) {
        return t.prototype = e, new t();
      };
    }();
    function h(t, e) {
      var s = Array.prototype.slice;
      if (t.bind)
        return t.bind.apply(t, s.call(arguments, 1));
      var u = s.call(arguments, 2);
      return function() {
        return t.apply(e, u.length ? u.concat(s.call(arguments)) : arguments);
      };
    }
    var c = 0;
    function f(t) {
      return "_leaflet_id" in t || (t._leaflet_id = ++c), t._leaflet_id;
    }
    function _(t, e, s) {
      var u, d, g, x;
      return x = function() {
        u = !1, d && (g.apply(s, d), d = !1);
      }, g = function() {
        u ? d = arguments : (t.apply(s, arguments), setTimeout(x, e), u = !0);
      }, g;
    }
    function m(t, e, s) {
      var u = e[1], d = e[0], g = u - d;
      return t === u && s ? t : ((t - d) % g + g) % g + d;
    }
    function p() {
      return !1;
    }
    function v(t, e) {
      if (e === !1)
        return t;
      var s = Math.pow(10, e === void 0 ? 6 : e);
      return Math.round(t * s) / s;
    }
    function y(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }
    function P(t) {
      return y(t).split(/\s+/);
    }
    function w(t, e) {
      Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? o(t.options) : {});
      for (var s in e)
        t.options[s] = e[s];
      return t.options;
    }
    function z(t, e, s) {
      var u = [];
      for (var d in t)
        u.push(encodeURIComponent(s ? d.toUpperCase() : d) + "=" + encodeURIComponent(t[d]));
      return (!e || e.indexOf("?") === -1 ? "?" : "&") + u.join("&");
    }
    var k = /\{ *([\w_ -]+) *\}/g;
    function I(t, e) {
      return t.replace(k, function(s, u) {
        var d = e[u];
        if (d === void 0)
          throw new Error("No value provided for variable " + s);
        return typeof d == "function" && (d = d(e)), d;
      });
    }
    var A = Array.isArray || function(t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    };
    function O(t, e) {
      for (var s = 0; s < t.length; s++)
        if (t[s] === e)
          return s;
      return -1;
    }
    var S = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function rt(t) {
      return window["webkit" + t] || window["moz" + t] || window["ms" + t];
    }
    var G = 0;
    function tt(t) {
      var e = +/* @__PURE__ */ new Date(), s = Math.max(0, 16 - (e - G));
      return G = e + s, window.setTimeout(t, s);
    }
    var vt = window.requestAnimationFrame || rt("RequestAnimationFrame") || tt, ft = window.cancelAnimationFrame || rt("CancelAnimationFrame") || rt("CancelRequestAnimationFrame") || function(t) {
      window.clearTimeout(t);
    };
    function _t(t, e, s) {
      if (s && vt === tt)
        t.call(e);
      else
        return vt.call(window, h(t, e));
    }
    function Lt(t) {
      t && ft.call(window, t);
    }
    var fe = {
      __proto__: null,
      extend: l,
      create: o,
      bind: h,
      get lastId() {
        return c;
      },
      stamp: f,
      throttle: _,
      wrapNum: m,
      falseFn: p,
      formatNum: v,
      trim: y,
      splitWords: P,
      setOptions: w,
      getParamString: z,
      template: I,
      isArray: A,
      indexOf: O,
      emptyImageUrl: S,
      requestFn: vt,
      cancelFn: ft,
      requestAnimFrame: _t,
      cancelAnimFrame: Lt
    };
    function wt() {
    }
    wt.extend = function(t) {
      var e = function() {
        w(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, s = e.__super__ = this.prototype, u = o(s);
      u.constructor = e, e.prototype = u;
      for (var d in this)
        Object.prototype.hasOwnProperty.call(this, d) && d !== "prototype" && d !== "__super__" && (e[d] = this[d]);
      return t.statics && l(e, t.statics), t.includes && (jt(t.includes), l.apply(null, [u].concat(t.includes))), l(u, t), delete u.statics, delete u.includes, u.options && (u.options = s.options ? o(s.options) : {}, l(u.options, t.options)), u._initHooks = [], u.callInitHooks = function() {
        if (!this._initHooksCalled) {
          s.callInitHooks && s.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var g = 0, x = u._initHooks.length; g < x; g++)
            u._initHooks[g].call(this);
        }
      }, e;
    }, wt.include = function(t) {
      var e = this.prototype.options;
      return l(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
    }, wt.mergeOptions = function(t) {
      return l(this.prototype.options, t), this;
    }, wt.addInitHook = function(t) {
      var e = Array.prototype.slice.call(arguments, 1), s = typeof t == "function" ? t : function() {
        this[t].apply(this, e);
      };
      return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(s), this;
    };
    function jt(t) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        t = A(t) ? t : [t];
        for (var e = 0; e < t.length; e++)
          t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }
    var ut = {
      /* @method on(type: String, fn: Function, context?: Object): this
       * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
       *
       * @alternative
       * @method on(eventMap: Object): this
       * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
       */
      on: function(t, e, s) {
        if (typeof t == "object")
          for (var u in t)
            this._on(u, t[u], e);
        else {
          t = P(t);
          for (var d = 0, g = t.length; d < g; d++)
            this._on(t[d], e, s);
        }
        return this;
      },
      /* @method off(type: String, fn?: Function, context?: Object): this
       * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
       *
       * @alternative
       * @method off(eventMap: Object): this
       * Removes a set of type/listener pairs.
       *
       * @alternative
       * @method off: this
       * Removes all listeners to all events on the object. This includes implicitly attached events.
       */
      off: function(t, e, s) {
        if (!arguments.length)
          delete this._events;
        else if (typeof t == "object")
          for (var u in t)
            this._off(u, t[u], e);
        else {
          t = P(t);
          for (var d = arguments.length === 1, g = 0, x = t.length; g < x; g++)
            d ? this._off(t[g]) : this._off(t[g], e, s);
        }
        return this;
      },
      // attach listener (without syntactic sugar now)
      _on: function(t, e, s, u) {
        if (typeof e != "function") {
          console.warn("wrong listener type: " + typeof e);
          return;
        }
        if (this._listens(t, e, s) === !1) {
          s === this && (s = void 0);
          var d = { fn: e, ctx: s };
          u && (d.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(d);
        }
      },
      _off: function(t, e, s) {
        var u, d, g;
        if (this._events && (u = this._events[t], !!u)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (d = 0, g = u.length; d < g; d++)
                u[d].fn = p;
            delete this._events[t];
            return;
          }
          if (typeof e != "function") {
            console.warn("wrong listener type: " + typeof e);
            return;
          }
          var x = this._listens(t, e, s);
          if (x !== !1) {
            var b = u[x];
            this._firingCount && (b.fn = p, this._events[t] = u = u.slice()), u.splice(x, 1);
          }
        }
      },
      // @method fire(type: String, data?: Object, propagate?: Boolean): this
      // Fires an event of the specified type. You can optionally provide a data
      // object — the first argument of the listener function will contain its
      // properties. The event can optionally be propagated to event parents.
      fire: function(t, e, s) {
        if (!this.listens(t, s))
          return this;
        var u = l({}, e, {
          type: t,
          target: this,
          sourceTarget: e && e.sourceTarget || this
        });
        if (this._events) {
          var d = this._events[t];
          if (d) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var g = 0, x = d.length; g < x; g++) {
              var b = d[g], T = b.fn;
              b.once && this.off(t, T, b.ctx), T.call(b.ctx || this, u);
            }
            this._firingCount--;
          }
        }
        return s && this._propagateEvent(u), this;
      },
      // @method listens(type: String, propagate?: Boolean): Boolean
      // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
      // Returns `true` if a particular event type has any listeners attached to it.
      // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
      listens: function(t, e, s, u) {
        typeof t != "string" && console.warn('"string" type argument expected');
        var d = e;
        typeof e != "function" && (u = !!e, d = void 0, s = void 0);
        var g = this._events && this._events[t];
        if (g && g.length && this._listens(t, d, s) !== !1)
          return !0;
        if (u) {
          for (var x in this._eventParents)
            if (this._eventParents[x].listens(t, e, s, u))
              return !0;
        }
        return !1;
      },
      // returns the index (number) or false
      _listens: function(t, e, s) {
        if (!this._events)
          return !1;
        var u = this._events[t] || [];
        if (!e)
          return !!u.length;
        s === this && (s = void 0);
        for (var d = 0, g = u.length; d < g; d++)
          if (u[d].fn === e && u[d].ctx === s)
            return d;
        return !1;
      },
      // @method once(…): this
      // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
      once: function(t, e, s) {
        if (typeof t == "object")
          for (var u in t)
            this._on(u, t[u], e, !0);
        else {
          t = P(t);
          for (var d = 0, g = t.length; d < g; d++)
            this._on(t[d], e, s, !0);
        }
        return this;
      },
      // @method addEventParent(obj: Evented): this
      // Adds an event parent - an `Evented` that will receive propagated events
      addEventParent: function(t) {
        return this._eventParents = this._eventParents || {}, this._eventParents[f(t)] = t, this;
      },
      // @method removeEventParent(obj: Evented): this
      // Removes an event parent, so it will stop receiving propagated events
      removeEventParent: function(t) {
        return this._eventParents && delete this._eventParents[f(t)], this;
      },
      _propagateEvent: function(t) {
        for (var e in this._eventParents)
          this._eventParents[e].fire(t.type, l({
            layer: t.target,
            propagatedFrom: t.target
          }, t), !0);
      }
    };
    ut.addEventListener = ut.on, ut.removeEventListener = ut.clearAllEventListeners = ut.off, ut.addOneTimeEventListener = ut.once, ut.fireEvent = ut.fire, ut.hasEventListeners = ut.listens;
    var Mt = wt.extend(ut);
    function j(t, e, s) {
      this.x = s ? Math.round(t) : t, this.y = s ? Math.round(e) : e;
    }
    var le = Math.trunc || function(t) {
      return t > 0 ? Math.floor(t) : Math.ceil(t);
    };
    j.prototype = {
      // @method clone(): Point
      // Returns a copy of the current point.
      clone: function() {
        return new j(this.x, this.y);
      },
      // @method add(otherPoint: Point): Point
      // Returns the result of addition of the current and the given points.
      add: function(t) {
        return this.clone()._add(M(t));
      },
      _add: function(t) {
        return this.x += t.x, this.y += t.y, this;
      },
      // @method subtract(otherPoint: Point): Point
      // Returns the result of subtraction of the given point from the current.
      subtract: function(t) {
        return this.clone()._subtract(M(t));
      },
      _subtract: function(t) {
        return this.x -= t.x, this.y -= t.y, this;
      },
      // @method divideBy(num: Number): Point
      // Returns the result of division of the current point by the given number.
      divideBy: function(t) {
        return this.clone()._divideBy(t);
      },
      _divideBy: function(t) {
        return this.x /= t, this.y /= t, this;
      },
      // @method multiplyBy(num: Number): Point
      // Returns the result of multiplication of the current point by the given number.
      multiplyBy: function(t) {
        return this.clone()._multiplyBy(t);
      },
      _multiplyBy: function(t) {
        return this.x *= t, this.y *= t, this;
      },
      // @method scaleBy(scale: Point): Point
      // Multiply each coordinate of the current point by each coordinate of
      // `scale`. In linear algebra terms, multiply the point by the
      // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
      // defined by `scale`.
      scaleBy: function(t) {
        return new j(this.x * t.x, this.y * t.y);
      },
      // @method unscaleBy(scale: Point): Point
      // Inverse of `scaleBy`. Divide each coordinate of the current point by
      // each coordinate of `scale`.
      unscaleBy: function(t) {
        return new j(this.x / t.x, this.y / t.y);
      },
      // @method round(): Point
      // Returns a copy of the current point with rounded coordinates.
      round: function() {
        return this.clone()._round();
      },
      _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      },
      // @method floor(): Point
      // Returns a copy of the current point with floored coordinates (rounded down).
      floor: function() {
        return this.clone()._floor();
      },
      _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      },
      // @method ceil(): Point
      // Returns a copy of the current point with ceiled coordinates (rounded up).
      ceil: function() {
        return this.clone()._ceil();
      },
      _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      },
      // @method trunc(): Point
      // Returns a copy of the current point with truncated coordinates (rounded towards zero).
      trunc: function() {
        return this.clone()._trunc();
      },
      _trunc: function() {
        return this.x = le(this.x), this.y = le(this.y), this;
      },
      // @method distanceTo(otherPoint: Point): Number
      // Returns the cartesian distance between the current and the given points.
      distanceTo: function(t) {
        t = M(t);
        var e = t.x - this.x, s = t.y - this.y;
        return Math.sqrt(e * e + s * s);
      },
      // @method equals(otherPoint: Point): Boolean
      // Returns `true` if the given point has the same coordinates.
      equals: function(t) {
        return t = M(t), t.x === this.x && t.y === this.y;
      },
      // @method contains(otherPoint: Point): Boolean
      // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
      contains: function(t) {
        return t = M(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      },
      // @method toString(): String
      // Returns a string representation of the point for debugging purposes.
      toString: function() {
        return "Point(" + v(this.x) + ", " + v(this.y) + ")";
      }
    };
    function M(t, e, s) {
      return t instanceof j ? t : A(t) ? new j(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new j(t.x, t.y) : new j(t, e, s);
    }
    function B(t, e) {
      if (t)
        for (var s = e ? [t, e] : t, u = 0, d = s.length; u < d; u++)
          this.extend(s[u]);
    }
    B.prototype = {
      // @method extend(point: Point): this
      // Extends the bounds to contain the given point.
      // @alternative
      // @method extend(otherBounds: Bounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e, s;
        if (!t)
          return this;
        if (t instanceof j || typeof t[0] == "number" || "x" in t)
          e = s = M(t);
        else if (t = U(t), e = t.min, s = t.max, !e || !s)
          return this;
        return !this.min && !this.max ? (this.min = e.clone(), this.max = s.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(s.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(s.y, this.max.y)), this;
      },
      // @method getCenter(round?: Boolean): Point
      // Returns the center point of the bounds.
      getCenter: function(t) {
        return M(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      // @method getBottomLeft(): Point
      // Returns the bottom-left point of the bounds.
      getBottomLeft: function() {
        return M(this.min.x, this.max.y);
      },
      // @method getTopRight(): Point
      // Returns the top-right point of the bounds.
      getTopRight: function() {
        return M(this.max.x, this.min.y);
      },
      // @method getTopLeft(): Point
      // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
      getTopLeft: function() {
        return this.min;
      },
      // @method getBottomRight(): Point
      // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
      getBottomRight: function() {
        return this.max;
      },
      // @method getSize(): Point
      // Returns the size of the given bounds
      getSize: function() {
        return this.max.subtract(this.min);
      },
      // @method contains(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains(point: Point): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        var e, s;
        return typeof t[0] == "number" || t instanceof j ? t = M(t) : t = U(t), t instanceof B ? (e = t.min, s = t.max) : e = s = t, e.x >= this.min.x && s.x <= this.max.x && e.y >= this.min.y && s.y <= this.max.y;
      },
      // @method intersects(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds
      // intersect if they have at least one point in common.
      intersects: function(t) {
        t = U(t);
        var e = this.min, s = this.max, u = t.min, d = t.max, g = d.x >= e.x && u.x <= s.x, x = d.y >= e.y && u.y <= s.y;
        return g && x;
      },
      // @method overlaps(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds
      // overlap if their intersection is an area.
      overlaps: function(t) {
        t = U(t);
        var e = this.min, s = this.max, u = t.min, d = t.max, g = d.x > e.x && u.x < s.x, x = d.y > e.y && u.y < s.y;
        return g && x;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this.min && this.max);
      },
      // @method pad(bufferRatio: Number): Bounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this.min, s = this.max, u = Math.abs(e.x - s.x) * t, d = Math.abs(e.y - s.y) * t;
        return U(
          M(e.x - u, e.y - d),
          M(s.x + u, s.y + d)
        );
      },
      // @method equals(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle is equivalent to the given bounds.
      equals: function(t) {
        return t ? (t = U(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
      }
    };
    function U(t, e) {
      return !t || t instanceof B ? t : new B(t, e);
    }
    function H(t, e) {
      if (t)
        for (var s = e ? [t, e] : t, u = 0, d = s.length; u < d; u++)
          this.extend(s[u]);
    }
    H.prototype = {
      // @method extend(latlng: LatLng): this
      // Extend the bounds to contain the given point
      // @alternative
      // @method extend(otherBounds: LatLngBounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e = this._southWest, s = this._northEast, u, d;
        if (t instanceof F)
          u = t, d = t;
        else if (t instanceof H) {
          if (u = t._southWest, d = t._northEast, !u || !d)
            return this;
        } else
          return t ? this.extend(D(t) || N(t)) : this;
        return !e && !s ? (this._southWest = new F(u.lat, u.lng), this._northEast = new F(d.lat, d.lng)) : (e.lat = Math.min(u.lat, e.lat), e.lng = Math.min(u.lng, e.lng), s.lat = Math.max(d.lat, s.lat), s.lng = Math.max(d.lng, s.lng)), this;
      },
      // @method pad(bufferRatio: Number): LatLngBounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this._southWest, s = this._northEast, u = Math.abs(e.lat - s.lat) * t, d = Math.abs(e.lng - s.lng) * t;
        return new H(
          new F(e.lat - u, e.lng - d),
          new F(s.lat + u, s.lng + d)
        );
      },
      // @method getCenter(): LatLng
      // Returns the center point of the bounds.
      getCenter: function() {
        return new F(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      // @method getSouthWest(): LatLng
      // Returns the south-west point of the bounds.
      getSouthWest: function() {
        return this._southWest;
      },
      // @method getNorthEast(): LatLng
      // Returns the north-east point of the bounds.
      getNorthEast: function() {
        return this._northEast;
      },
      // @method getNorthWest(): LatLng
      // Returns the north-west point of the bounds.
      getNorthWest: function() {
        return new F(this.getNorth(), this.getWest());
      },
      // @method getSouthEast(): LatLng
      // Returns the south-east point of the bounds.
      getSouthEast: function() {
        return new F(this.getSouth(), this.getEast());
      },
      // @method getWest(): Number
      // Returns the west longitude of the bounds
      getWest: function() {
        return this._southWest.lng;
      },
      // @method getSouth(): Number
      // Returns the south latitude of the bounds
      getSouth: function() {
        return this._southWest.lat;
      },
      // @method getEast(): Number
      // Returns the east longitude of the bounds
      getEast: function() {
        return this._northEast.lng;
      },
      // @method getNorth(): Number
      // Returns the north latitude of the bounds
      getNorth: function() {
        return this._northEast.lat;
      },
      // @method contains(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains (latlng: LatLng): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        typeof t[0] == "number" || t instanceof F || "lat" in t ? t = D(t) : t = N(t);
        var e = this._southWest, s = this._northEast, u, d;
        return t instanceof H ? (u = t.getSouthWest(), d = t.getNorthEast()) : u = d = t, u.lat >= e.lat && d.lat <= s.lat && u.lng >= e.lng && d.lng <= s.lng;
      },
      // @method intersects(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
      intersects: function(t) {
        t = N(t);
        var e = this._southWest, s = this._northEast, u = t.getSouthWest(), d = t.getNorthEast(), g = d.lat >= e.lat && u.lat <= s.lat, x = d.lng >= e.lng && u.lng <= s.lng;
        return g && x;
      },
      // @method overlaps(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
      overlaps: function(t) {
        t = N(t);
        var e = this._southWest, s = this._northEast, u = t.getSouthWest(), d = t.getNorthEast(), g = d.lat > e.lat && u.lat < s.lat, x = d.lng > e.lng && u.lng < s.lng;
        return g && x;
      },
      // @method toBBoxString(): String
      // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
      // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        return t ? (t = N(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function N(t, e) {
      return t instanceof H ? t : new H(t, e);
    }
    function F(t, e, s) {
      if (isNaN(t) || isNaN(e))
        throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
      this.lat = +t, this.lng = +e, s !== void 0 && (this.alt = +s);
    }
    F.prototype = {
      // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
      // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        if (!t)
          return !1;
        t = D(t);
        var s = Math.max(
          Math.abs(this.lat - t.lat),
          Math.abs(this.lng - t.lng)
        );
        return s <= (e === void 0 ? 1e-9 : e);
      },
      // @method toString(): String
      // Returns a string representation of the point (for debugging purposes).
      toString: function(t) {
        return "LatLng(" + v(this.lat, t) + ", " + v(this.lng, t) + ")";
      },
      // @method distanceTo(otherLatLng: LatLng): Number
      // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
      distanceTo: function(t) {
        return q.distance(this, D(t));
      },
      // @method wrap(): LatLng
      // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
      wrap: function() {
        return q.wrapLatLng(this);
      },
      // @method toBounds(sizeInMeters: Number): LatLngBounds
      // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
      toBounds: function(t) {
        var e = 180 * t / 40075017, s = e / Math.cos(Math.PI / 180 * this.lat);
        return N(
          [this.lat - e, this.lng - s],
          [this.lat + e, this.lng + s]
        );
      },
      clone: function() {
        return new F(this.lat, this.lng, this.alt);
      }
    };
    function D(t, e, s) {
      return t instanceof F ? t : A(t) && typeof t[0] != "object" ? t.length === 3 ? new F(t[0], t[1], t[2]) : t.length === 2 ? new F(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new F(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new F(t, e, s);
    }
    var W = {
      // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
      // Projects geographical coordinates into pixel coordinates for a given zoom.
      latLngToPoint: function(t, e) {
        var s = this.projection.project(t), u = this.scale(e);
        return this.transformation._transform(s, u);
      },
      // @method pointToLatLng(point: Point, zoom: Number): LatLng
      // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
      // zoom into geographical coordinates.
      pointToLatLng: function(t, e) {
        var s = this.scale(e), u = this.transformation.untransform(t, s);
        return this.projection.unproject(u);
      },
      // @method project(latlng: LatLng): Point
      // Projects geographical coordinates into coordinates in units accepted for
      // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
      project: function(t) {
        return this.projection.project(t);
      },
      // @method unproject(point: Point): LatLng
      // Given a projected coordinate returns the corresponding LatLng.
      // The inverse of `project`.
      unproject: function(t) {
        return this.projection.unproject(t);
      },
      // @method scale(zoom: Number): Number
      // Returns the scale used when transforming projected coordinates into
      // pixel coordinates for a particular zoom. For example, it returns
      // `256 * 2^zoom` for Mercator-based CRS.
      scale: function(t) {
        return 256 * Math.pow(2, t);
      },
      // @method zoom(scale: Number): Number
      // Inverse of `scale()`, returns the zoom level corresponding to a scale
      // factor of `scale`.
      zoom: function(t) {
        return Math.log(t / 256) / Math.LN2;
      },
      // @method getProjectedBounds(zoom: Number): Bounds
      // Returns the projection's bounds scaled and transformed for the provided `zoom`.
      getProjectedBounds: function(t) {
        if (this.infinite)
          return null;
        var e = this.projection.bounds, s = this.scale(t), u = this.transformation.transform(e.min, s), d = this.transformation.transform(e.max, s);
        return new B(u, d);
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates.
      // @property code: String
      // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
      //
      // @property wrapLng: Number[]
      // An array of two numbers defining whether the longitude (horizontal) coordinate
      // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
      // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
      //
      // @property wrapLat: Number[]
      // Like `wrapLng`, but for the latitude (vertical) axis.
      // wrapLng: [min, max],
      // wrapLat: [min, max],
      // @property infinite: Boolean
      // If true, the coordinate space will be unbounded (infinite in both axes)
      infinite: !1,
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where lat and lng has been wrapped according to the
      // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
      wrapLatLng: function(t) {
        var e = this.wrapLng ? m(t.lng, this.wrapLng, !0) : t.lng, s = this.wrapLat ? m(t.lat, this.wrapLat, !0) : t.lat, u = t.alt;
        return new F(s, e, u);
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring
      // that its center is within the CRS's bounds.
      // Only accepts actual `L.LatLngBounds` instances, not arrays.
      wrapLatLngBounds: function(t) {
        var e = t.getCenter(), s = this.wrapLatLng(e), u = e.lat - s.lat, d = e.lng - s.lng;
        if (u === 0 && d === 0)
          return t;
        var g = t.getSouthWest(), x = t.getNorthEast(), b = new F(g.lat - u, g.lng - d), T = new F(x.lat - u, x.lng - d);
        return new H(b, T);
      }
    }, q = l({}, W, {
      wrapLng: [-180, 180],
      // Mean Earth Radius, as recommended for use by
      // the International Union of Geodesy and Geophysics,
      // see https://rosettacode.org/wiki/Haversine_formula
      R: 6371e3,
      // distance between two geographical points using spherical law of cosines approximation
      distance: function(t, e) {
        var s = Math.PI / 180, u = t.lat * s, d = e.lat * s, g = Math.sin((e.lat - t.lat) * s / 2), x = Math.sin((e.lng - t.lng) * s / 2), b = g * g + Math.cos(u) * Math.cos(d) * x * x, T = 2 * Math.atan2(Math.sqrt(b), Math.sqrt(1 - b));
        return this.R * T;
      }
    }), et = 6378137, J = {
      R: et,
      MAX_LATITUDE: 85.0511287798,
      project: function(t) {
        var e = Math.PI / 180, s = this.MAX_LATITUDE, u = Math.max(Math.min(s, t.lat), -s), d = Math.sin(u * e);
        return new j(
          this.R * t.lng * e,
          this.R * Math.log((1 + d) / (1 - d)) / 2
        );
      },
      unproject: function(t) {
        var e = 180 / Math.PI;
        return new F(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
          t.x * e / this.R
        );
      },
      bounds: function() {
        var t = et * Math.PI;
        return new B([-t, -t], [t, t]);
      }()
    };
    function pt(t, e, s, u) {
      if (A(t)) {
        this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
        return;
      }
      this._a = t, this._b = e, this._c = s, this._d = u;
    }
    pt.prototype = {
      // @method transform(point: Point, scale?: Number): Point
      // Returns a transformed point, optionally multiplied by the given scale.
      // Only accepts actual `L.Point` instances, not arrays.
      transform: function(t, e) {
        return this._transform(t.clone(), e);
      },
      // destructive transform (faster)
      _transform: function(t, e) {
        return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
      },
      // @method untransform(point: Point, scale?: Number): Point
      // Returns the reverse transformation of the given point, optionally divided
      // by the given scale. Only accepts actual `L.Point` instances, not arrays.
      untransform: function(t, e) {
        return e = e || 1, new j(
          (t.x / e - this._b) / this._a,
          (t.y / e - this._d) / this._c
        );
      }
    };
    function Z(t, e, s, u) {
      return new pt(t, e, s, u);
    }
    var Ot = l({}, q, {
      code: "EPSG:3857",
      projection: J,
      transformation: function() {
        var t = 0.5 / (Math.PI * J.R);
        return Z(t, 0.5, -t, 0.5);
      }()
    }), we = l({}, Ot, {
      code: "EPSG:900913"
    });
    function Ne(t) {
      return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function _r(t, e) {
      var s = "", u, d, g, x, b, T;
      for (u = 0, g = t.length; u < g; u++) {
        for (b = t[u], d = 0, x = b.length; d < x; d++)
          T = b[d], s += (d ? "L" : "M") + T.x + " " + T.y;
        s += e ? V.svg ? "z" : "x" : "";
      }
      return s || "M0 0";
    }
    var $i = document.documentElement.style, gi = "ActiveXObject" in window, Ca = gi && !document.addEventListener, mr = "msLaunchUri" in navigator && !("documentMode" in document), Ki = Jt("webkit"), pr = Jt("android"), gr = Jt("android 2") || Jt("android 3"), Ta = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Ma = pr && Jt("Google") && Ta < 537 && !("AudioNode" in window), Ji = !!window.opera, vr = !mr && Jt("chrome"), yr = Jt("gecko") && !Ki && !Ji && !gi, ka = !vr && Jt("safari"), xr = Jt("phantom"), wr = "OTransition" in $i, Sa = navigator.platform.indexOf("Win") === 0, br = gi && "transition" in $i, Qi = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !gr, Lr = "MozPerspective" in $i, za = !window.L_DISABLE_3D && (br || Qi || Lr) && !wr && !xr, Fe = typeof orientation < "u" || Jt("mobile"), Ea = Fe && Ki, Oa = Fe && Qi, Pr = !window.PointerEvent && window.MSPointerEvent, Cr = !!(window.PointerEvent || Pr), Tr = "ontouchstart" in window || !!window.TouchEvent, Ia = !window.L_NO_TOUCH && (Tr || Cr), Ba = Fe && Ji, Aa = Fe && yr, Za = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Da = function() {
      var t = !1;
      try {
        var e = Object.defineProperty({}, "passive", {
          get: function() {
            t = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", p, e), window.removeEventListener("testPassiveEventSupport", p, e);
      } catch {
      }
      return t;
    }(), Ra = function() {
      return !!document.createElement("canvas").getContext;
    }(), tn = !!(document.createElementNS && Ne("svg").createSVGRect), Na = !!tn && function() {
      var t = document.createElement("div");
      return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }(), Fa = !tn && function() {
      try {
        var t = document.createElement("div");
        t.innerHTML = '<v:shape adj="1"/>';
        var e = t.firstChild;
        return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
      } catch {
        return !1;
      }
    }(), ja = navigator.platform.indexOf("Mac") === 0, Ua = navigator.platform.indexOf("Linux") === 0;
    function Jt(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var V = {
      ie: gi,
      ielt9: Ca,
      edge: mr,
      webkit: Ki,
      android: pr,
      android23: gr,
      androidStock: Ma,
      opera: Ji,
      chrome: vr,
      gecko: yr,
      safari: ka,
      phantom: xr,
      opera12: wr,
      win: Sa,
      ie3d: br,
      webkit3d: Qi,
      gecko3d: Lr,
      any3d: za,
      mobile: Fe,
      mobileWebkit: Ea,
      mobileWebkit3d: Oa,
      msPointer: Pr,
      pointer: Cr,
      touch: Ia,
      touchNative: Tr,
      mobileOpera: Ba,
      mobileGecko: Aa,
      retina: Za,
      passiveEvents: Da,
      canvas: Ra,
      svg: tn,
      vml: Fa,
      inlineSvg: Na,
      mac: ja,
      linux: Ua
    }, Mr = V.msPointer ? "MSPointerDown" : "pointerdown", kr = V.msPointer ? "MSPointerMove" : "pointermove", Sr = V.msPointer ? "MSPointerUp" : "pointerup", zr = V.msPointer ? "MSPointerCancel" : "pointercancel", en = {
      touchstart: Mr,
      touchmove: kr,
      touchend: Sr,
      touchcancel: zr
    }, Er = {
      touchstart: qa,
      touchmove: vi,
      touchend: vi,
      touchcancel: vi
    }, be = {}, Or = !1;
    function Va(t, e, s) {
      return e === "touchstart" && Ga(), Er[e] ? (s = Er[e].bind(this, s), t.addEventListener(en[e], s, !1), s) : (console.warn("wrong event specified:", e), p);
    }
    function Ha(t, e, s) {
      if (!en[e]) {
        console.warn("wrong event specified:", e);
        return;
      }
      t.removeEventListener(en[e], s, !1);
    }
    function Wa(t) {
      be[t.pointerId] = t;
    }
    function Ya(t) {
      be[t.pointerId] && (be[t.pointerId] = t);
    }
    function Ir(t) {
      delete be[t.pointerId];
    }
    function Ga() {
      Or || (document.addEventListener(Mr, Wa, !0), document.addEventListener(kr, Ya, !0), document.addEventListener(Sr, Ir, !0), document.addEventListener(zr, Ir, !0), Or = !0);
    }
    function vi(t, e) {
      if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
        e.touches = [];
        for (var s in be)
          e.touches.push(be[s]);
        e.changedTouches = [e], t(e);
      }
    }
    function qa(t, e) {
      e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && Ct(e), vi(t, e);
    }
    function Xa(t) {
      var e = {}, s, u;
      for (u in t)
        s = t[u], e[u] = s && s.bind ? s.bind(t) : s;
      return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
    }
    var $a = 200;
    function Ka(t, e) {
      t.addEventListener("dblclick", e);
      var s = 0, u;
      function d(g) {
        if (g.detail !== 1) {
          u = g.detail;
          return;
        }
        if (!(g.pointerType === "mouse" || g.sourceCapabilities && !g.sourceCapabilities.firesTouchEvents)) {
          var x = Rr(g);
          if (!(x.some(function(T) {
            return T instanceof HTMLLabelElement && T.attributes.for;
          }) && !x.some(function(T) {
            return T instanceof HTMLInputElement || T instanceof HTMLSelectElement;
          }))) {
            var b = Date.now();
            b - s <= $a ? (u++, u === 2 && e(Xa(g))) : u = 1, s = b;
          }
        }
      }
      return t.addEventListener("click", d), {
        dblclick: e,
        simDblclick: d
      };
    }
    function Ja(t, e) {
      t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
    }
    var nn = wi(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), je = wi(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), Br = je === "webkitTransition" || je === "OTransition" ? je + "End" : "transitionend";
    function Ar(t) {
      return typeof t == "string" ? document.getElementById(t) : t;
    }
    function Ue(t, e) {
      var s = t.style[e] || t.currentStyle && t.currentStyle[e];
      if ((!s || s === "auto") && document.defaultView) {
        var u = document.defaultView.getComputedStyle(t, null);
        s = u ? u[e] : null;
      }
      return s === "auto" ? null : s;
    }
    function ot(t, e, s) {
      var u = document.createElement(t);
      return u.className = e || "", s && s.appendChild(u), u;
    }
    function dt(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function yi(t) {
      for (; t.firstChild; )
        t.removeChild(t.firstChild);
    }
    function Le(t) {
      var e = t.parentNode;
      e && e.lastChild !== t && e.appendChild(t);
    }
    function Pe(t) {
      var e = t.parentNode;
      e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
    }
    function rn(t, e) {
      if (t.classList !== void 0)
        return t.classList.contains(e);
      var s = xi(t);
      return s.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(s);
    }
    function K(t, e) {
      if (t.classList !== void 0)
        for (var s = P(e), u = 0, d = s.length; u < d; u++)
          t.classList.add(s[u]);
      else if (!rn(t, e)) {
        var g = xi(t);
        on(t, (g ? g + " " : "") + e);
      }
    }
    function gt(t, e) {
      t.classList !== void 0 ? t.classList.remove(e) : on(t, y((" " + xi(t) + " ").replace(" " + e + " ", " ")));
    }
    function on(t, e) {
      t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
    }
    function xi(t) {
      return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
    }
    function Ut(t, e) {
      "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && Qa(t, e);
    }
    function Qa(t, e) {
      var s = !1, u = "DXImageTransform.Microsoft.Alpha";
      try {
        s = t.filters.item(u);
      } catch {
        if (e === 1)
          return;
      }
      e = Math.round(e * 100), s ? (s.Enabled = e !== 100, s.Opacity = e) : t.style.filter += " progid:" + u + "(opacity=" + e + ")";
    }
    function wi(t) {
      for (var e = document.documentElement.style, s = 0; s < t.length; s++)
        if (t[s] in e)
          return t[s];
      return !1;
    }
    function de(t, e, s) {
      var u = e || new j(0, 0);
      t.style[nn] = (V.ie3d ? "translate(" + u.x + "px," + u.y + "px)" : "translate3d(" + u.x + "px," + u.y + "px,0)") + (s ? " scale(" + s + ")" : "");
    }
    function yt(t, e) {
      t._leaflet_pos = e, V.any3d ? de(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
    }
    function _e(t) {
      return t._leaflet_pos || new j(0, 0);
    }
    var Ve, He, sn;
    if ("onselectstart" in document)
      Ve = function() {
        X(window, "selectstart", Ct);
      }, He = function() {
        ct(window, "selectstart", Ct);
      };
    else {
      var We = wi(
        ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
      );
      Ve = function() {
        if (We) {
          var t = document.documentElement.style;
          sn = t[We], t[We] = "none";
        }
      }, He = function() {
        We && (document.documentElement.style[We] = sn, sn = void 0);
      };
    }
    function an() {
      X(window, "dragstart", Ct);
    }
    function ln() {
      ct(window, "dragstart", Ct);
    }
    var bi, hn;
    function un(t) {
      for (; t.tabIndex === -1; )
        t = t.parentNode;
      t.style && (Li(), bi = t, hn = t.style.outlineStyle, t.style.outlineStyle = "none", X(window, "keydown", Li));
    }
    function Li() {
      bi && (bi.style.outlineStyle = hn, bi = void 0, hn = void 0, ct(window, "keydown", Li));
    }
    function Zr(t) {
      do
        t = t.parentNode;
      while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
      return t;
    }
    function cn(t) {
      var e = t.getBoundingClientRect();
      return {
        x: e.width / t.offsetWidth || 1,
        y: e.height / t.offsetHeight || 1,
        boundingClientRect: e
      };
    }
    var tl = {
      __proto__: null,
      TRANSFORM: nn,
      TRANSITION: je,
      TRANSITION_END: Br,
      get: Ar,
      getStyle: Ue,
      create: ot,
      remove: dt,
      empty: yi,
      toFront: Le,
      toBack: Pe,
      hasClass: rn,
      addClass: K,
      removeClass: gt,
      setClass: on,
      getClass: xi,
      setOpacity: Ut,
      testProp: wi,
      setTransform: de,
      setPosition: yt,
      getPosition: _e,
      get disableTextSelection() {
        return Ve;
      },
      get enableTextSelection() {
        return He;
      },
      disableImageDrag: an,
      enableImageDrag: ln,
      preventOutline: un,
      restoreOutline: Li,
      getSizedParentNode: Zr,
      getScale: cn
    };
    function X(t, e, s, u) {
      if (e && typeof e == "object")
        for (var d in e)
          dn(t, d, e[d], s);
      else {
        e = P(e);
        for (var g = 0, x = e.length; g < x; g++)
          dn(t, e[g], s, u);
      }
      return this;
    }
    var Qt = "_leaflet_events";
    function ct(t, e, s, u) {
      if (arguments.length === 1)
        Dr(t), delete t[Qt];
      else if (e && typeof e == "object")
        for (var d in e)
          _n(t, d, e[d], s);
      else if (e = P(e), arguments.length === 2)
        Dr(t, function(b) {
          return O(e, b) !== -1;
        });
      else
        for (var g = 0, x = e.length; g < x; g++)
          _n(t, e[g], s, u);
      return this;
    }
    function Dr(t, e) {
      for (var s in t[Qt]) {
        var u = s.split(/\d/)[0];
        (!e || e(u)) && _n(t, u, null, null, s);
      }
    }
    var fn = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function dn(t, e, s, u) {
      var d = e + f(s) + (u ? "_" + f(u) : "");
      if (t[Qt] && t[Qt][d])
        return this;
      var g = function(b) {
        return s.call(u || t, b || window.event);
      }, x = g;
      !V.touchNative && V.pointer && e.indexOf("touch") === 0 ? g = Va(t, e, g) : V.touch && e === "dblclick" ? g = Ka(t, g) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(fn[e] || e, g, V.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (g = function(b) {
        b = b || window.event, pn(t, b) && x(b);
      }, t.addEventListener(fn[e], g, !1)) : t.addEventListener(e, x, !1) : t.attachEvent("on" + e, g), t[Qt] = t[Qt] || {}, t[Qt][d] = g;
    }
    function _n(t, e, s, u, d) {
      d = d || e + f(s) + (u ? "_" + f(u) : "");
      var g = t[Qt] && t[Qt][d];
      if (!g)
        return this;
      !V.touchNative && V.pointer && e.indexOf("touch") === 0 ? Ha(t, e, g) : V.touch && e === "dblclick" ? Ja(t, g) : "removeEventListener" in t ? t.removeEventListener(fn[e] || e, g, !1) : t.detachEvent("on" + e, g), t[Qt][d] = null;
    }
    function me(t) {
      return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
    }
    function mn(t) {
      return dn(t, "wheel", me), this;
    }
    function Ye(t) {
      return X(t, "mousedown touchstart dblclick contextmenu", me), t._leaflet_disable_click = !0, this;
    }
    function Ct(t) {
      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
    }
    function pe(t) {
      return Ct(t), me(t), this;
    }
    function Rr(t) {
      if (t.composedPath)
        return t.composedPath();
      for (var e = [], s = t.target; s; )
        e.push(s), s = s.parentNode;
      return e;
    }
    function Nr(t, e) {
      if (!e)
        return new j(t.clientX, t.clientY);
      var s = cn(e), u = s.boundingClientRect;
      return new j(
        // offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (t.clientX - u.left) / s.x - e.clientLeft,
        (t.clientY - u.top) / s.y - e.clientTop
      );
    }
    var el = V.linux && V.chrome ? window.devicePixelRatio : V.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function Fr(t) {
      return V.edge ? t.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        t.deltaY && t.deltaMode === 0 ? -t.deltaY / el : (
          // Pixels
          t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : (
            // Lines
            t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : (
              // Pages
              t.deltaX || t.deltaZ ? 0 : (
                // Skip horizontal/depth wheel events
                t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : (
                  // Legacy IE pixels
                  t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : (
                    // Legacy Moz lines
                    t.detail ? t.detail / -32765 * 60 : (
                      // Legacy Moz pages
                      0
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    function pn(t, e) {
      var s = e.relatedTarget;
      if (!s)
        return !0;
      try {
        for (; s && s !== t; )
          s = s.parentNode;
      } catch {
        return !1;
      }
      return s !== t;
    }
    var il = {
      __proto__: null,
      on: X,
      off: ct,
      stopPropagation: me,
      disableScrollPropagation: mn,
      disableClickPropagation: Ye,
      preventDefault: Ct,
      stop: pe,
      getPropagationPath: Rr,
      getMousePosition: Nr,
      getWheelDelta: Fr,
      isExternalTarget: pn,
      addListener: X,
      removeListener: ct
    }, jr = Mt.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(t, e, s, u) {
        this.stop(), this._el = t, this._inProgress = !0, this._duration = s || 0.25, this._easeOutPower = 1 / Math.max(u || 0.5, 0.2), this._startPos = _e(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      },
      // @method stop()
      // Stops the animation (if currently running).
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = _t(this._animate, this), this._step();
      },
      _step: function(t) {
        var e = +/* @__PURE__ */ new Date() - this._startTime, s = this._duration * 1e3;
        e < s ? this._runFrame(this._easeOut(e / s), t) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(t, e) {
        var s = this._startPos.add(this._offset.multiplyBy(t));
        e && s._round(), yt(this._el, s), this.fire("step");
      },
      _complete: function() {
        Lt(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    }), it = Mt.extend({
      options: {
        // @section Map State Options
        // @option crs: CRS = L.CRS.EPSG3857
        // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
        // sure what it means.
        crs: Ot,
        // @option center: LatLng = undefined
        // Initial geographic center of the map
        center: void 0,
        // @option zoom: Number = undefined
        // Initial map zoom level
        zoom: void 0,
        // @option minZoom: Number = *
        // Minimum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the lowest of their `minZoom` options will be used instead.
        minZoom: void 0,
        // @option maxZoom: Number = *
        // Maximum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the highest of their `maxZoom` options will be used instead.
        maxZoom: void 0,
        // @option layers: Layer[] = []
        // Array of layers that will be added to the map initially
        layers: [],
        // @option maxBounds: LatLngBounds = null
        // When this option is set, the map restricts the view to the given
        // geographical bounds, bouncing the user back if the user tries to pan
        // outside the view. To set the restriction dynamically, use
        // [`setMaxBounds`](#map-setmaxbounds) method.
        maxBounds: void 0,
        // @option renderer: Renderer = *
        // The default method for drawing vector layers on the map. `L.SVG`
        // or `L.Canvas` by default depending on browser support.
        renderer: void 0,
        // @section Animation Options
        // @option zoomAnimation: Boolean = true
        // Whether the map zoom animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        zoomAnimation: !0,
        // @option zoomAnimationThreshold: Number = 4
        // Won't animate zoom if the zoom difference exceeds this value.
        zoomAnimationThreshold: 4,
        // @option fadeAnimation: Boolean = true
        // Whether the tile fade animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        fadeAnimation: !0,
        // @option markerZoomAnimation: Boolean = true
        // Whether markers animate their zoom with the zoom animation, if disabled
        // they will disappear for the length of the animation. By default it's
        // enabled in all browsers that support CSS3 Transitions except Android.
        markerZoomAnimation: !0,
        // @option transform3DLimit: Number = 2^23
        // Defines the maximum size of a CSS translation transform. The default
        // value should not be changed unless a web browser positions layers in
        // the wrong place after doing a large `panBy`.
        transform3DLimit: 8388608,
        // Precision limit of a 32-bit float
        // @section Interaction Options
        // @option zoomSnap: Number = 1
        // Forces the map's zoom level to always be a multiple of this, particularly
        // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
        // By default, the zoom level snaps to the nearest integer; lower values
        // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
        // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
        zoomSnap: 1,
        // @option zoomDelta: Number = 1
        // Controls how much the map's zoom level will change after a
        // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
        // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
        // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
        zoomDelta: 1,
        // @option trackResize: Boolean = true
        // Whether the map automatically handles browser window resize to update itself.
        trackResize: !0
      },
      initialize: function(t, e) {
        e = w(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = h(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(D(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = je && V.any3d && !V.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), X(this._proxy, Br, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      // @section Methods for modifying map state
      // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) with the given
      // animation options.
      setView: function(t, e, s) {
        if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(D(t), e, this.options.maxBounds), s = s || {}, this._stop(), this._loaded && !s.reset && s !== !0) {
          s.animate !== void 0 && (s.zoom = l({ animate: s.animate }, s.zoom), s.pan = l({ animate: s.animate, duration: s.duration }, s.pan));
          var u = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, s.zoom) : this._tryAnimatedPan(t, s.pan);
          if (u)
            return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(t, e, s.pan && s.pan.noMoveStart), this;
      },
      // @method setZoom(zoom: Number, options?: Zoom/pan options): this
      // Sets the zoom of the map.
      setZoom: function(t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
      },
      // @method zoomIn(delta?: Number, options?: Zoom options): this
      // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomIn: function(t, e) {
        return t = t || (V.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
      },
      // @method zoomOut(delta?: Number, options?: Zoom options): this
      // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomOut: function(t, e) {
        return t = t || (V.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
      },
      // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified geographical point on the map
      // stationary (e.g. used internally for scroll zoom and double-click zoom).
      // @alternative
      // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
      setZoomAround: function(t, e, s) {
        var u = this.getZoomScale(e), d = this.getSize().divideBy(2), g = t instanceof j ? t : this.latLngToContainerPoint(t), x = g.subtract(d).multiplyBy(1 - 1 / u), b = this.containerPointToLatLng(d.add(x));
        return this.setView(b, e, { zoom: s });
      },
      _getBoundsCenterZoom: function(t, e) {
        e = e || {}, t = t.getBounds ? t.getBounds() : N(t);
        var s = M(e.paddingTopLeft || e.padding || [0, 0]), u = M(e.paddingBottomRight || e.padding || [0, 0]), d = this.getBoundsZoom(t, !1, s.add(u));
        if (d = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, d) : d, d === 1 / 0)
          return {
            center: t.getCenter(),
            zoom: d
          };
        var g = u.subtract(s).divideBy(2), x = this.project(t.getSouthWest(), d), b = this.project(t.getNorthEast(), d), T = this.unproject(x.add(b).divideBy(2).add(g), d);
        return {
          center: T,
          zoom: d
        };
      },
      // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets a map view that contains the given geographical bounds with the
      // maximum zoom level possible.
      fitBounds: function(t, e) {
        if (t = N(t), !t.isValid())
          throw new Error("Bounds are not valid.");
        var s = this._getBoundsCenterZoom(t, e);
        return this.setView(s.center, s.zoom, e);
      },
      // @method fitWorld(options?: fitBounds options): this
      // Sets a map view that mostly contains the whole world with the maximum
      // zoom level possible.
      fitWorld: function(t) {
        return this.fitBounds([[-90, -180], [90, 180]], t);
      },
      // @method panTo(latlng: LatLng, options?: Pan options): this
      // Pans the map to a given center.
      panTo: function(t, e) {
        return this.setView(t, this._zoom, { pan: e });
      },
      // @method panBy(offset: Point, options?: Pan options): this
      // Pans the map by a given number of pixels (animated).
      panBy: function(t, e) {
        if (t = M(t).round(), e = e || {}, !t.x && !t.y)
          return this.fire("moveend");
        if (e.animate !== !0 && !this.getSize().contains(t))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new jr(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
          K(this._mapPane, "leaflet-pan-anim");
          var s = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(this._mapPane, s, e.duration || 0.25, e.easeLinearity);
        } else
          this._rawPanBy(t), this.fire("move").fire("moveend");
        return this;
      },
      // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) performing a smooth
      // pan-zoom animation.
      flyTo: function(t, e, s) {
        if (s = s || {}, s.animate === !1 || !V.any3d)
          return this.setView(t, e, s);
        this._stop();
        var u = this.project(this.getCenter()), d = this.project(t), g = this.getSize(), x = this._zoom;
        t = D(t), e = e === void 0 ? x : e;
        var b = Math.max(g.x, g.y), T = b * this.getZoomScale(x, e), E = d.distanceTo(u) || 1, R = 1.42, Y = R * R;
        function Q(xt) {
          var Ai = xt ? -1 : 1, Hl = xt ? T : b, Wl = T * T - b * b + Ai * Y * Y * E * E, Yl = 2 * Hl * Y * E, Mn = Wl / Yl, bo = Math.sqrt(Mn * Mn + 1) - Mn, Gl = bo < 1e-9 ? -18 : Math.log(bo);
          return Gl;
        }
        function zt(xt) {
          return (Math.exp(xt) - Math.exp(-xt)) / 2;
        }
        function Pt(xt) {
          return (Math.exp(xt) + Math.exp(-xt)) / 2;
        }
        function Ht(xt) {
          return zt(xt) / Pt(xt);
        }
        var It = Q(0);
        function ze(xt) {
          return b * (Pt(It) / Pt(It + R * xt));
        }
        function Fl(xt) {
          return b * (Pt(It) * Ht(It + R * xt) - zt(It)) / Y;
        }
        function jl(xt) {
          return 1 - Math.pow(1 - xt, 1.5);
        }
        var Ul = Date.now(), xo = (Q(1) - It) / R, Vl = s.duration ? 1e3 * s.duration : 1e3 * xo * 0.8;
        function wo() {
          var xt = (Date.now() - Ul) / Vl, Ai = jl(xt) * xo;
          xt <= 1 ? (this._flyToFrame = _t(wo, this), this._move(
            this.unproject(u.add(d.subtract(u).multiplyBy(Fl(Ai) / E)), x),
            this.getScaleZoom(b / ze(Ai), x),
            { flyTo: !0 }
          )) : this._move(t, e)._moveEnd(!0);
        }
        return this._moveStart(!0, s.noMoveStart), wo.call(this), this;
      },
      // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
      // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
      flyToBounds: function(t, e) {
        var s = this._getBoundsCenterZoom(t, e);
        return this.flyTo(s.center, s.zoom, e);
      },
      // @method setMaxBounds(bounds: LatLngBounds): this
      // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
      setMaxBounds: function(t) {
        return t = N(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      // @method setMinZoom(zoom: Number): this
      // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
      setMinZoom: function(t) {
        var e = this.options.minZoom;
        return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
      },
      // @method setMaxZoom(zoom: Number): this
      // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
      setMaxZoom: function(t) {
        var e = this.options.maxZoom;
        return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
      },
      // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
      // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
      panInsideBounds: function(t, e) {
        this._enforcingBounds = !0;
        var s = this.getCenter(), u = this._limitCenter(s, this._zoom, N(t));
        return s.equals(u) || this.panTo(u, e), this._enforcingBounds = !1, this;
      },
      // @method panInside(latlng: LatLng, options?: padding options): this
      // Pans the map the minimum amount to make the `latlng` visible. Use
      // padding options to fit the display to more restricted bounds.
      // If `latlng` is already within the (optionally padded) display bounds,
      // the map will not be panned.
      panInside: function(t, e) {
        e = e || {};
        var s = M(e.paddingTopLeft || e.padding || [0, 0]), u = M(e.paddingBottomRight || e.padding || [0, 0]), d = this.project(this.getCenter()), g = this.project(t), x = this.getPixelBounds(), b = U([x.min.add(s), x.max.subtract(u)]), T = b.getSize();
        if (!b.contains(g)) {
          this._enforcingBounds = !0;
          var E = g.subtract(b.getCenter()), R = b.extend(g).getSize().subtract(T);
          d.x += E.x < 0 ? -R.x : R.x, d.y += E.y < 0 ? -R.y : R.y, this.panTo(this.unproject(d), e), this._enforcingBounds = !1;
        }
        return this;
      },
      // @method invalidateSize(options: Zoom/pan options): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default. If `options.pan` is `false`, panning will not occur.
      // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
      // that it doesn't happen often even if the method is called many
      // times in a row.
      // @alternative
      // @method invalidateSize(animate: Boolean): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default.
      invalidateSize: function(t) {
        if (!this._loaded)
          return this;
        t = l({
          animate: !1,
          pan: !0
        }, t === !0 ? { animate: !0 } : t);
        var e = this.getSize();
        this._sizeChanged = !0, this._lastCenter = null;
        var s = this.getSize(), u = e.divideBy(2).round(), d = s.divideBy(2).round(), g = u.subtract(d);
        return !g.x && !g.y ? this : (t.animate && t.pan ? this.panBy(g) : (t.pan && this._rawPanBy(g), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(h(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: e,
          newSize: s
        }));
      },
      // @section Methods for modifying map state
      // @method stop(): this
      // Stops the currently running `panTo` or `flyTo` animation, if any.
      stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      },
      // @section Geolocation methods
      // @method locate(options?: Locate options): this
      // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
      // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
      // and optionally sets the map view to the user's location with respect to
      // detection accuracy (or to the world view if geolocation failed).
      // Note that, if your page doesn't use HTTPS, this method will fail in
      // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
      // See `Locate options` for more details.
      locate: function(t) {
        if (t = this._locateOptions = l({
          timeout: 1e4,
          watch: !1
          // setView: false
          // maxZoom: <Number>
          // maximumAge: 0
          // enableHighAccuracy: false
        }, t), !("geolocation" in navigator))
          return this._handleGeolocationError({
            code: 0,
            message: "Geolocation not supported."
          }), this;
        var e = h(this._handleGeolocationResponse, this), s = h(this._handleGeolocationError, this);
        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, s, t) : navigator.geolocation.getCurrentPosition(e, s, t), this;
      },
      // @method stopLocate(): this
      // Stops watching location previously initiated by `map.locate({watch: true})`
      // and aborts resetting the map view if map.locate was called with
      // `{setView: true}`.
      stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      },
      _handleGeolocationError: function(t) {
        if (this._container._leaflet_id) {
          var e = t.code, s = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: e,
            message: "Geolocation error: " + s + "."
          });
        }
      },
      _handleGeolocationResponse: function(t) {
        if (this._container._leaflet_id) {
          var e = t.coords.latitude, s = t.coords.longitude, u = new F(e, s), d = u.toBounds(t.coords.accuracy * 2), g = this._locateOptions;
          if (g.setView) {
            var x = this.getBoundsZoom(d);
            this.setView(u, g.maxZoom ? Math.min(x, g.maxZoom) : x);
          }
          var b = {
            latlng: u,
            bounds: d,
            timestamp: t.timestamp
          };
          for (var T in t.coords)
            typeof t.coords[T] == "number" && (b[T] = t.coords[T]);
          this.fire("locationfound", b);
        }
      },
      // TODO Appropriate docs section?
      // @section Other Methods
      // @method addHandler(name: String, HandlerClass: Function): this
      // Adds a new `Handler` to the map, given its name and constructor function.
      addHandler: function(t, e) {
        if (!e)
          return this;
        var s = this[t] = new e(this);
        return this._handlers.push(s), this.options[t] && s.enable(), this;
      },
      // @method remove(): this
      // Destroys the map and clears all related event listeners.
      remove: function() {
        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), dt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (Lt(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var t;
        for (t in this._layers)
          this._layers[t].remove();
        for (t in this._panes)
          dt(this._panes[t]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      // @section Other Methods
      // @method createPane(name: String, container?: HTMLElement): HTMLElement
      // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
      // then returns it. The pane is created as a child of `container`, or
      // as a child of the main map pane if not set.
      createPane: function(t, e) {
        var s = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), u = ot("div", s, e || this._mapPane);
        return t && (this._panes[t] = u), u;
      },
      // @section Methods for Getting Map State
      // @method getCenter(): LatLng
      // Returns the geographical center of the map view
      getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      // @method getZoom(): Number
      // Returns the current zoom level of the map view
      getZoom: function() {
        return this._zoom;
      },
      // @method getBounds(): LatLngBounds
      // Returns the geographical bounds visible in the current map view
      getBounds: function() {
        var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), s = this.unproject(t.getTopRight());
        return new H(e, s);
      },
      // @method getMinZoom(): Number
      // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
      getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      },
      // @method getMaxZoom(): Number
      // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
      getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      },
      // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
      // Returns the maximum zoom level on which the given bounds fit to the map
      // view in its entirety. If `inside` (optional) is set to `true`, the method
      // instead returns the minimum zoom level on which the map view fits into
      // the given bounds in its entirety.
      getBoundsZoom: function(t, e, s) {
        t = N(t), s = M(s || [0, 0]);
        var u = this.getZoom() || 0, d = this.getMinZoom(), g = this.getMaxZoom(), x = t.getNorthWest(), b = t.getSouthEast(), T = this.getSize().subtract(s), E = U(this.project(b, u), this.project(x, u)).getSize(), R = V.any3d ? this.options.zoomSnap : 1, Y = T.x / E.x, Q = T.y / E.y, zt = e ? Math.max(Y, Q) : Math.min(Y, Q);
        return u = this.getScaleZoom(zt, u), R && (u = Math.round(u / (R / 100)) * (R / 100), u = e ? Math.ceil(u / R) * R : Math.floor(u / R) * R), Math.max(d, Math.min(g, u));
      },
      // @method getSize(): Point
      // Returns the current size of the map container (in pixels).
      getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new j(
          this._container.clientWidth || 0,
          this._container.clientHeight || 0
        ), this._sizeChanged = !1), this._size.clone();
      },
      // @method getPixelBounds(): Bounds
      // Returns the bounds of the current map view in projected pixel
      // coordinates (sometimes useful in layer and overlay implementations).
      getPixelBounds: function(t, e) {
        var s = this._getTopLeftPoint(t, e);
        return new B(s, s.add(this.getSize()));
      },
      // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
      // the map pane? "left point of the map layer" can be confusing, specially
      // since there can be negative offsets.
      // @method getPixelOrigin(): Point
      // Returns the projected pixel coordinates of the top left point of
      // the map layer (useful in custom layer and overlay implementations).
      getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      // @method getPixelWorldBounds(zoom?: Number): Bounds
      // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
      // If `zoom` is omitted, the map's current zoom level is used.
      getPixelWorldBounds: function(t) {
        return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
      },
      // @section Other Methods
      // @method getPane(pane: String|HTMLElement): HTMLElement
      // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
      getPane: function(t) {
        return typeof t == "string" ? this._panes[t] : t;
      },
      // @method getPanes(): Object
      // Returns a plain object containing the names of all [panes](#map-pane) as keys and
      // the panes as values.
      getPanes: function() {
        return this._panes;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the map.
      getContainer: function() {
        return this._container;
      },
      // @section Conversion Methods
      // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
      // Returns the scale factor to be applied to a map transition from zoom level
      // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
      getZoomScale: function(t, e) {
        var s = this.options.crs;
        return e = e === void 0 ? this._zoom : e, s.scale(t) / s.scale(e);
      },
      // @method getScaleZoom(scale: Number, fromZoom: Number): Number
      // Returns the zoom level that the map would end up at, if it is at `fromZoom`
      // level and everything is scaled by a factor of `scale`. Inverse of
      // [`getZoomScale`](#map-getZoomScale).
      getScaleZoom: function(t, e) {
        var s = this.options.crs;
        e = e === void 0 ? this._zoom : e;
        var u = s.zoom(t * s.scale(e));
        return isNaN(u) ? 1 / 0 : u;
      },
      // @method project(latlng: LatLng, zoom: Number): Point
      // Projects a geographical coordinate `LatLng` according to the projection
      // of the map's CRS, then scales it according to `zoom` and the CRS's
      // `Transformation`. The result is pixel coordinate relative to
      // the CRS origin.
      project: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(D(t), e);
      },
      // @method unproject(point: Point, zoom: Number): LatLng
      // Inverse of [`project`](#map-project).
      unproject: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(M(t), e);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(t) {
        var e = M(t).add(this.getPixelOrigin());
        return this.unproject(e);
      },
      // @method latLngToLayerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the [origin pixel](#map-getpixelorigin).
      latLngToLayerPoint: function(t) {
        var e = this.project(D(t))._round();
        return e._subtract(this.getPixelOrigin());
      },
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
      // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
      // CRS's bounds.
      // By default this means longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees.
      wrapLatLng: function(t) {
        return this.options.crs.wrapLatLng(D(t));
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring that
      // its center is within the CRS's bounds.
      // By default this means the center longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees, and the majority of the bounds
      // overlaps the CRS's bounds.
      wrapLatLngBounds: function(t) {
        return this.options.crs.wrapLatLngBounds(N(t));
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates according to
      // the map's CRS. By default this measures distance in meters.
      distance: function(t, e) {
        return this.options.crs.distance(D(t), D(e));
      },
      // @method containerPointToLayerPoint(point: Point): Point
      // Given a pixel coordinate relative to the map container, returns the corresponding
      // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
      containerPointToLayerPoint: function(t) {
        return M(t).subtract(this._getMapPanePos());
      },
      // @method layerPointToContainerPoint(point: Point): Point
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding pixel coordinate relative to the map container.
      layerPointToContainerPoint: function(t) {
        return M(t).add(this._getMapPanePos());
      },
      // @method containerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the map container, returns
      // the corresponding geographical coordinate (for the current zoom level).
      containerPointToLatLng: function(t) {
        var e = this.containerPointToLayerPoint(M(t));
        return this.layerPointToLatLng(e);
      },
      // @method latLngToContainerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the map container.
      latLngToContainerPoint: function(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(D(t)));
      },
      // @method mouseEventToContainerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to the
      // map container where the event took place.
      mouseEventToContainerPoint: function(t) {
        return Nr(t, this._container);
      },
      // @method mouseEventToLayerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to
      // the [origin pixel](#map-getpixelorigin) where the event took place.
      mouseEventToLayerPoint: function(t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
      },
      // @method mouseEventToLatLng(ev: MouseEvent): LatLng
      // Given a MouseEvent object, returns geographical coordinate where the
      // event took place.
      mouseEventToLatLng: function(t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      // map initialization methods
      _initContainer: function(t) {
        var e = this._container = Ar(t);
        if (e) {
          if (e._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        X(e, "scroll", this._onScroll, this), this._containerId = f(e);
      },
      _initLayout: function() {
        var t = this._container;
        this._fadeAnimated = this.options.fadeAnimation && V.any3d, K(t, "leaflet-container" + (V.touch ? " leaflet-touch" : "") + (V.retina ? " leaflet-retina" : "") + (V.ielt9 ? " leaflet-oldie" : "") + (V.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var e = Ue(t, "position");
        e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var t = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), yt(this._mapPane, new j(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (K(t.markerPane, "leaflet-zoom-hide"), K(t.shadowPane, "leaflet-zoom-hide"));
      },
      // private methods that modify map state
      // @section Map state change events
      _resetView: function(t, e, s) {
        yt(this._mapPane, new j(0, 0));
        var u = !this._loaded;
        this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
        var d = this._zoom !== e;
        this._moveStart(d, s)._move(t, e)._moveEnd(d), this.fire("viewreset"), u && this.fire("load");
      },
      _moveStart: function(t, e) {
        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
      },
      _move: function(t, e, s, u) {
        e === void 0 && (e = this._zoom);
        var d = this._zoom !== e;
        return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), u ? s && s.pinch && this.fire("zoom", s) : ((d || s && s.pinch) && this.fire("zoom", s), this.fire("move", s)), this;
      },
      _moveEnd: function(t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return Lt(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(t) {
        yt(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function() {
        if (!this._loaded)
          throw new Error("Set map center and zoom first.");
      },
      // DOM event handling
      // @section Interaction events
      _initEvents: function(t) {
        this._targets = {}, this._targets[f(this._container)] = this;
        var e = t ? ct : X;
        e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), V.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        Lt(this._resizeRequest), this._resizeRequest = _t(
          function() {
            this.invalidateSize({ debounceMoveend: !0 });
          },
          this
        );
      },
      _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      },
      _onMoveEnd: function() {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function(t, e) {
        for (var s = [], u, d = e === "mouseout" || e === "mouseover", g = t.target || t.srcElement, x = !1; g; ) {
          if (u = this._targets[f(g)], u && (e === "click" || e === "preclick") && this._draggableMoved(u)) {
            x = !0;
            break;
          }
          if (u && u.listens(e, !0) && (d && !pn(g, t) || (s.push(u), d)) || g === this._container)
            break;
          g = g.parentNode;
        }
        return !s.length && !x && !d && this.listens(e, !0) && (s = [this]), s;
      },
      _isClickDisabled: function(t) {
        for (; t && t !== this._container; ) {
          if (t._leaflet_disable_click)
            return !0;
          t = t.parentNode;
        }
      },
      _handleDOMEvent: function(t) {
        var e = t.target || t.srcElement;
        if (!(!this._loaded || e._leaflet_disable_events || t.type === "click" && this._isClickDisabled(e))) {
          var s = t.type;
          s === "mousedown" && un(e), this._fireDOMEvent(t, s);
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function(t, e, s) {
        if (t.type === "click") {
          var u = l({}, t);
          u.type = "preclick", this._fireDOMEvent(u, u.type, s);
        }
        var d = this._findEventTargets(t, e);
        if (s) {
          for (var g = [], x = 0; x < s.length; x++)
            s[x].listens(e, !0) && g.push(s[x]);
          d = g.concat(d);
        }
        if (d.length) {
          e === "contextmenu" && Ct(t);
          var b = d[0], T = {
            originalEvent: t
          };
          if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
            var E = b.getLatLng && (!b._radius || b._radius <= 10);
            T.containerPoint = E ? this.latLngToContainerPoint(b.getLatLng()) : this.mouseEventToContainerPoint(t), T.layerPoint = this.containerPointToLayerPoint(T.containerPoint), T.latlng = E ? b.getLatLng() : this.layerPointToLatLng(T.layerPoint);
          }
          for (x = 0; x < d.length; x++)
            if (d[x].fire(e, T, !0), T.originalEvent._stopped || d[x].options.bubblingMouseEvents === !1 && O(this._mouseEvents, e) !== -1)
              return;
        }
      },
      _draggableMoved: function(t) {
        return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function() {
        for (var t = 0, e = this._handlers.length; t < e; t++)
          this._handlers[t].disable();
      },
      // @section Other Methods
      // @method whenReady(fn: Function, context?: Object): this
      // Runs the given function `fn` when the map gets initialized with
      // a view (center and zoom) and at least one layer, or immediately
      // if it's already initialized, optionally passing a function context.
      whenReady: function(t, e) {
        return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
      },
      // private methods for getting map state
      _getMapPanePos: function() {
        return _e(this._mapPane) || new j(0, 0);
      },
      _moved: function() {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function(t, e) {
        var s = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
        return s.subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function(t, e) {
        var s = this.getSize()._divideBy(2);
        return this.project(t, e)._subtract(s)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function(t, e, s) {
        var u = this._getNewPixelOrigin(s, e);
        return this.project(t, e)._subtract(u);
      },
      _latLngBoundsToNewLayerBounds: function(t, e, s) {
        var u = this._getNewPixelOrigin(s, e);
        return U([
          this.project(t.getSouthWest(), e)._subtract(u),
          this.project(t.getNorthWest(), e)._subtract(u),
          this.project(t.getSouthEast(), e)._subtract(u),
          this.project(t.getNorthEast(), e)._subtract(u)
        ]);
      },
      // layer point of the current center
      _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      // offset of the specified place to the current center in pixels
      _getCenterOffset: function(t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      // adjust center for view to get inside bounds
      _limitCenter: function(t, e, s) {
        if (!s)
          return t;
        var u = this.project(t, e), d = this.getSize().divideBy(2), g = new B(u.subtract(d), u.add(d)), x = this._getBoundsOffset(g, s, e);
        return Math.abs(x.x) <= 1 && Math.abs(x.y) <= 1 ? t : this.unproject(u.add(x), e);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(t, e) {
        if (!e)
          return t;
        var s = this.getPixelBounds(), u = new B(s.min.add(t), s.max.add(t));
        return t.add(this._getBoundsOffset(u, e));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function(t, e, s) {
        var u = U(
          this.project(e.getNorthEast(), s),
          this.project(e.getSouthWest(), s)
        ), d = u.min.subtract(t.min), g = u.max.subtract(t.max), x = this._rebound(d.x, -g.x), b = this._rebound(d.y, -g.y);
        return new j(x, b);
      },
      _rebound: function(t, e) {
        return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      },
      _limitZoom: function(t) {
        var e = this.getMinZoom(), s = this.getMaxZoom(), u = V.any3d ? this.options.zoomSnap : 1;
        return u && (t = Math.round(t / u) * u), Math.max(e, Math.min(s, t));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        gt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(t, e) {
        var s = this._getCenterOffset(t)._trunc();
        return (e && e.animate) !== !0 && !this.getSize().contains(s) ? !1 : (this.panBy(s, e), !0);
      },
      _createAnimProxy: function() {
        var t = this._proxy = ot("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
          var s = nn, u = this._proxy.style[s];
          de(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), u === this._proxy.style[s] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        dt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var t = this.getCenter(), e = this.getZoom();
        de(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
      },
      _catchTransitionEnd: function(t) {
        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function(t, e, s) {
        if (this._animatingZoom)
          return !0;
        if (s = s || {}, !this._zoomAnimated || s.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
          return !1;
        var u = this.getZoomScale(e), d = this._getCenterOffset(t)._divideBy(1 - 1 / u);
        return s.animate !== !0 && !this.getSize().contains(d) ? !1 : (_t(function() {
          this._moveStart(!0, s.noMoveStart || !1)._animateZoom(t, e, !0);
        }, this), !0);
      },
      _animateZoom: function(t, e, s, u) {
        this._mapPane && (s && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, K(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: t,
          zoom: e,
          noUpdate: u
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(h(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && gt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function nl(t, e) {
      return new it(t, e);
    }
    var qt = wt.extend({
      // @section
      // @aka Control Options
      options: {
        // @option position: String = 'topright'
        // The position of the control (one of the map corners). Possible values are `'topleft'`,
        // `'topright'`, `'bottomleft'` or `'bottomright'`
        position: "topright"
      },
      initialize: function(t) {
        w(this, t);
      },
      /* @section
       * Classes extending L.Control will inherit the following methods:
       *
       * @method getPosition: string
       * Returns the position of the control.
       */
      getPosition: function() {
        return this.options.position;
      },
      // @method setPosition(position: string): this
      // Sets the position of the control.
      setPosition: function(t) {
        var e = this._map;
        return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTMLElement that contains the control.
      getContainer: function() {
        return this._container;
      },
      // @method addTo(map: Map): this
      // Adds the control to the given map.
      addTo: function(t) {
        this.remove(), this._map = t;
        var e = this._container = this.onAdd(t), s = this.getPosition(), u = t._controlCorners[s];
        return K(e, "leaflet-control"), s.indexOf("bottom") !== -1 ? u.insertBefore(e, u.firstChild) : u.appendChild(e), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (dt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(t) {
        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
      }
    }), Ge = function(t) {
      return new qt(t);
    };
    it.include({
      // @method addControl(control: Control): this
      // Adds the given control to the map
      addControl: function(t) {
        return t.addTo(this), this;
      },
      // @method removeControl(control: Control): this
      // Removes the given control from the map
      removeControl: function(t) {
        return t.remove(), this;
      },
      _initControlPos: function() {
        var t = this._controlCorners = {}, e = "leaflet-", s = this._controlContainer = ot("div", e + "control-container", this._container);
        function u(d, g) {
          var x = e + d + " " + e + g;
          t[d + g] = ot("div", x, s);
        }
        u("top", "left"), u("top", "right"), u("bottom", "left"), u("bottom", "right");
      },
      _clearControlPos: function() {
        for (var t in this._controlCorners)
          dt(this._controlCorners[t]);
        dt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var Ur = qt.extend({
      // @section
      // @aka Control.Layers options
      options: {
        // @option collapsed: Boolean = true
        // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
        collapsed: !0,
        position: "topright",
        // @option autoZIndex: Boolean = true
        // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
        autoZIndex: !0,
        // @option hideSingleBase: Boolean = false
        // If `true`, the base layers in the control will be hidden when there is only one.
        hideSingleBase: !1,
        // @option sortLayers: Boolean = false
        // Whether to sort the layers. When `false`, layers will keep the order
        // in which they were added to the control.
        sortLayers: !1,
        // @option sortFunction: Function = *
        // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
        // that will be used for sorting the layers, when `sortLayers` is `true`.
        // The function receives both the `L.Layer` instances and their names, as in
        // `sortFunction(layerA, layerB, nameA, nameB)`.
        // By default, it sorts layers alphabetically by their name.
        sortFunction: function(t, e, s, u) {
          return s < u ? -1 : u < s ? 1 : 0;
        }
      },
      initialize: function(t, e, s) {
        w(this, s), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
        for (var u in t)
          this._addLayer(t[u], u);
        for (u in e)
          this._addLayer(e[u], u, !0);
      },
      onAdd: function(t) {
        this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++)
          this._layers[e].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function(t) {
        return qt.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      // @method addBaseLayer(layer: Layer, name: String): this
      // Adds a base layer (radio button entry) with the given name to the control.
      addBaseLayer: function(t, e) {
        return this._addLayer(t, e), this._map ? this._update() : this;
      },
      // @method addOverlay(layer: Layer, name: String): this
      // Adds an overlay (checkbox entry) with the given name to the control.
      addOverlay: function(t, e) {
        return this._addLayer(t, e, !0), this._map ? this._update() : this;
      },
      // @method removeLayer(layer: Layer): this
      // Remove the given layer from the control.
      removeLayer: function(t) {
        t.off("add remove", this._onLayerChange, this);
        var e = this._getLayer(f(t));
        return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
      },
      // @method expand(): this
      // Expand the control container if collapsed.
      expand: function() {
        K(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return t < this._section.clientHeight ? (K(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : gt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      // @method collapse(): this
      // Collapse the control container if expanded.
      collapse: function() {
        return gt(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var t = "leaflet-control-layers", e = this._container = ot("div", t), s = this.options.collapsed;
        e.setAttribute("aria-haspopup", !0), Ye(e), mn(e);
        var u = this._section = ot("section", t + "-list");
        s && (this._map.on("click", this.collapse, this), X(e, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var d = this._layersLink = ot("a", t + "-toggle", e);
        d.href = "#", d.title = "Layers", d.setAttribute("role", "button"), X(d, {
          keydown: function(g) {
            g.keyCode === 13 && this._expandSafely();
          },
          // Certain screen readers intercept the key event and instead send a click event
          click: function(g) {
            Ct(g), this._expandSafely();
          }
        }, this), s || this.expand(), this._baseLayersList = ot("div", t + "-base", u), this._separator = ot("div", t + "-separator", u), this._overlaysList = ot("div", t + "-overlays", u), e.appendChild(u);
      },
      _getLayer: function(t) {
        for (var e = 0; e < this._layers.length; e++)
          if (this._layers[e] && f(this._layers[e].layer) === t)
            return this._layers[e];
      },
      _addLayer: function(t, e, s) {
        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: t,
          name: e,
          overlay: s
        }), this.options.sortLayers && this._layers.sort(h(function(u, d) {
          return this.options.sortFunction(u.layer, d.layer, u.name, d.name);
        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container)
          return this;
        yi(this._baseLayersList), yi(this._overlaysList), this._layerControlInputs = [];
        var t, e, s, u, d = 0;
        for (s = 0; s < this._layers.length; s++)
          u = this._layers[s], this._addItem(u), e = e || u.overlay, t = t || !u.overlay, d += u.overlay ? 0 : 1;
        return this.options.hideSingleBase && (t = t && d > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
      },
      _onLayerChange: function(t) {
        this._handlingClick || this._update();
        var e = this._getLayer(f(t.target)), s = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
        s && this._map.fire(s, e);
      },
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
      _createRadioElement: function(t, e) {
        var s = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", u = document.createElement("div");
        return u.innerHTML = s, u.firstChild;
      },
      _addItem: function(t) {
        var e = document.createElement("label"), s = this._map.hasLayer(t.layer), u;
        t.overlay ? (u = document.createElement("input"), u.type = "checkbox", u.className = "leaflet-control-layers-selector", u.defaultChecked = s) : u = this._createRadioElement("leaflet-base-layers_" + f(this), s), this._layerControlInputs.push(u), u.layerId = f(t.layer), X(u, "click", this._onInputClick, this);
        var d = document.createElement("span");
        d.innerHTML = " " + t.name;
        var g = document.createElement("span");
        e.appendChild(g), g.appendChild(u), g.appendChild(d);
        var x = t.overlay ? this._overlaysList : this._baseLayersList;
        return x.appendChild(e), this._checkDisabledLayers(), e;
      },
      _onInputClick: function() {
        if (!this._preventClick) {
          var t = this._layerControlInputs, e, s, u = [], d = [];
          this._handlingClick = !0;
          for (var g = t.length - 1; g >= 0; g--)
            e = t[g], s = this._getLayer(e.layerId).layer, e.checked ? u.push(s) : e.checked || d.push(s);
          for (g = 0; g < d.length; g++)
            this._map.hasLayer(d[g]) && this._map.removeLayer(d[g]);
          for (g = 0; g < u.length; g++)
            this._map.hasLayer(u[g]) || this._map.addLayer(u[g]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function() {
        for (var t = this._layerControlInputs, e, s, u = this._map.getZoom(), d = t.length - 1; d >= 0; d--)
          e = t[d], s = this._getLayer(e.layerId).layer, e.disabled = s.options.minZoom !== void 0 && u < s.options.minZoom || s.options.maxZoom !== void 0 && u > s.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function() {
        var t = this._section;
        this._preventClick = !0, X(t, "click", Ct), this.expand();
        var e = this;
        setTimeout(function() {
          ct(t, "click", Ct), e._preventClick = !1;
        });
      }
    }), rl = function(t, e, s) {
      return new Ur(t, e, s);
    }, gn = qt.extend({
      // @section
      // @aka Control.Zoom options
      options: {
        position: "topleft",
        // @option zoomInText: String = '<span aria-hidden="true">+</span>'
        // The text set on the 'zoom in' button.
        zoomInText: '<span aria-hidden="true">+</span>',
        // @option zoomInTitle: String = 'Zoom in'
        // The title set on the 'zoom in' button.
        zoomInTitle: "Zoom in",
        // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
        // The text set on the 'zoom out' button.
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        // @option zoomOutTitle: String = 'Zoom out'
        // The title set on the 'zoom out' button.
        zoomOutTitle: "Zoom out"
      },
      onAdd: function(t) {
        var e = "leaflet-control-zoom", s = ot("div", e + " leaflet-bar"), u = this.options;
        return this._zoomInButton = this._createButton(
          u.zoomInText,
          u.zoomInTitle,
          e + "-in",
          s,
          this._zoomIn
        ), this._zoomOutButton = this._createButton(
          u.zoomOutText,
          u.zoomOutTitle,
          e + "-out",
          s,
          this._zoomOut
        ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), s;
      },
      onRemove: function(t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function() {
        return this._disabled = !0, this._updateDisabled(), this;
      },
      enable: function() {
        return this._disabled = !1, this._updateDisabled(), this;
      },
      _zoomIn: function(t) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function(t) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function(t, e, s, u, d) {
        var g = ot("a", s, u);
        return g.innerHTML = t, g.href = "#", g.title = e, g.setAttribute("role", "button"), g.setAttribute("aria-label", e), Ye(g), X(g, "click", pe), X(g, "click", d, this), X(g, "click", this._refocusOnMap, this), g;
      },
      _updateDisabled: function() {
        var t = this._map, e = "leaflet-disabled";
        gt(this._zoomInButton, e), gt(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (K(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (K(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    it.mergeOptions({
      zoomControl: !0
    }), it.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new gn(), this.addControl(this.zoomControl));
    });
    var ol = function(t) {
      return new gn(t);
    }, Vr = qt.extend({
      // @section
      // @aka Control.Scale options
      options: {
        position: "bottomleft",
        // @option maxWidth: Number = 100
        // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
        maxWidth: 100,
        // @option metric: Boolean = True
        // Whether to show the metric scale line (m/km).
        metric: !0,
        // @option imperial: Boolean = True
        // Whether to show the imperial scale line (mi/ft).
        imperial: !0
        // @option updateWhenIdle: Boolean = false
        // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
      },
      onAdd: function(t) {
        var e = "leaflet-control-scale", s = ot("div", e), u = this.options;
        return this._addScales(u, e + "-line", s), t.on(u.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), s;
      },
      onRemove: function(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(t, e, s) {
        t.metric && (this._mScale = ot("div", e, s)), t.imperial && (this._iScale = ot("div", e, s));
      },
      _update: function() {
        var t = this._map, e = t.getSize().y / 2, s = t.distance(
          t.containerPointToLatLng([0, e]),
          t.containerPointToLatLng([this.options.maxWidth, e])
        );
        this._updateScales(s);
      },
      _updateScales: function(t) {
        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function(t) {
        var e = this._getRoundNum(t), s = e < 1e3 ? e + " m" : e / 1e3 + " km";
        this._updateScale(this._mScale, s, e / t);
      },
      _updateImperial: function(t) {
        var e = t * 3.2808399, s, u, d;
        e > 5280 ? (s = e / 5280, u = this._getRoundNum(s), this._updateScale(this._iScale, u + " mi", u / s)) : (d = this._getRoundNum(e), this._updateScale(this._iScale, d + " ft", d / e));
      },
      _updateScale: function(t, e, s) {
        t.style.width = Math.round(this.options.maxWidth * s) + "px", t.innerHTML = e;
      },
      _getRoundNum: function(t) {
        var e = Math.pow(10, (Math.floor(t) + "").length - 1), s = t / e;
        return s = s >= 10 ? 10 : s >= 5 ? 5 : s >= 3 ? 3 : s >= 2 ? 2 : 1, e * s;
      }
    }), sl = function(t) {
      return new Vr(t);
    }, al = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', vn = qt.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String|false = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (V.inlineSvg ? al + " " : "") + "Leaflet</a>"
      },
      initialize: function(t) {
        w(this, t), this._attributions = {};
      },
      onAdd: function(t) {
        t.attributionControl = this, this._container = ot("div", "leaflet-control-attribution"), Ye(this._container);
        for (var e in t._layers)
          t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
      },
      onRemove: function(t) {
        t.off("layeradd", this._addAttribution, this);
      },
      _addAttribution: function(t) {
        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
          this.removeAttribution(t.layer.getAttribution());
        }, this));
      },
      // @method setPrefix(prefix: String|false): this
      // The HTML text shown before the attributions. Pass `false` to disable.
      setPrefix: function(t) {
        return this.options.prefix = t, this._update(), this;
      },
      // @method addAttribution(text: String): this
      // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
      addAttribution: function(t) {
        return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
      },
      // @method removeAttribution(text: String): this
      // Removes an attribution text.
      removeAttribution: function(t) {
        return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
      },
      _update: function() {
        if (this._map) {
          var t = [];
          for (var e in this._attributions)
            this._attributions[e] && t.push(e);
          var s = [];
          this.options.prefix && s.push(this.options.prefix), t.length && s.push(t.join(", ")), this._container.innerHTML = s.join(' <span aria-hidden="true">|</span> ');
        }
      }
    });
    it.mergeOptions({
      attributionControl: !0
    }), it.addInitHook(function() {
      this.options.attributionControl && new vn().addTo(this);
    });
    var ll = function(t) {
      return new vn(t);
    };
    qt.Layers = Ur, qt.Zoom = gn, qt.Scale = Vr, qt.Attribution = vn, Ge.layers = rl, Ge.zoom = ol, Ge.scale = sl, Ge.attribution = ll;
    var te = wt.extend({
      initialize: function(t) {
        this._map = t;
      },
      // @method enable(): this
      // Enables the handler
      enable: function() {
        return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
      },
      // @method disable(): this
      // Disables the handler
      disable: function() {
        return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
      },
      // @method enabled(): Boolean
      // Returns `true` if the handler is enabled
      enabled: function() {
        return !!this._enabled;
      }
      // @section Extension methods
      // Classes inheriting from `Handler` must implement the two following methods:
      // @method addHooks()
      // Called when the handler is enabled, should add event hooks.
      // @method removeHooks()
      // Called when the handler is disabled, should remove the event hooks added previously.
    });
    te.addTo = function(t, e) {
      return t.addHandler(e, this), this;
    };
    var hl = { Events: ut }, Hr = V.touch ? "touchstart mousedown" : "mousedown", he = Mt.extend({
      options: {
        // @section
        // @aka Draggable options
        // @option clickTolerance: Number = 3
        // The max number of pixels a user can shift the mouse pointer during a click
        // for it to be considered a valid click (as opposed to a mouse drag).
        clickTolerance: 3
      },
      // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
      // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
      initialize: function(t, e, s, u) {
        w(this, u), this._element = t, this._dragStartTarget = e || t, this._preventOutline = s;
      },
      // @method enable()
      // Enables the dragging ability
      enable: function() {
        this._enabled || (X(this._dragStartTarget, Hr, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (he._dragging === this && this.finishDrag(!0), ct(this._dragStartTarget, Hr, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(t) {
        if (this._enabled && (this._moved = !1, !rn(this._element, "leaflet-zoom-anim"))) {
          if (t.touches && t.touches.length !== 1) {
            he._dragging === this && this.finishDrag();
            return;
          }
          if (!(he._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (he._dragging = this, this._preventOutline && un(this._element), an(), Ve(), !this._moving)) {
            this.fire("down");
            var e = t.touches ? t.touches[0] : t, s = Zr(this._element);
            this._startPoint = new j(e.clientX, e.clientY), this._startPos = _e(this._element), this._parentScale = cn(s);
            var u = t.type === "mousedown";
            X(document, u ? "mousemove" : "touchmove", this._onMove, this), X(document, u ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      },
      _onMove: function(t) {
        if (this._enabled) {
          if (t.touches && t.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, s = new j(e.clientX, e.clientY)._subtract(this._startPoint);
          !s.x && !s.y || Math.abs(s.x) + Math.abs(s.y) < this.options.clickTolerance || (s.x /= this._parentScale.x, s.y /= this._parentScale.y, Ct(t), this._moved || (this.fire("dragstart"), this._moved = !0, K(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), K(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(s), this._moving = !0, this._lastEvent = t, this._updatePosition());
        }
      },
      _updatePosition: function() {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t), yt(this._element, this._newPos), this.fire("drag", t);
      },
      _onUp: function() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function(t) {
        gt(document.body, "leaflet-dragging"), this._lastTarget && (gt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ct(document, "mousemove touchmove", this._onMove, this), ct(document, "mouseup touchend touchcancel", this._onUp, this), ln(), He();
        var e = this._moved && this._moving;
        this._moving = !1, he._dragging = !1, e && this.fire("dragend", {
          noInertia: t,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
    function Wr(t, e, s) {
      var u, d = [1, 4, 2, 8], g, x, b, T, E, R, Y, Q;
      for (g = 0, R = t.length; g < R; g++)
        t[g]._code = ge(t[g], e);
      for (b = 0; b < 4; b++) {
        for (Y = d[b], u = [], g = 0, R = t.length, x = R - 1; g < R; x = g++)
          T = t[g], E = t[x], T._code & Y ? E._code & Y || (Q = Pi(E, T, Y, e, s), Q._code = ge(Q, e), u.push(Q)) : (E._code & Y && (Q = Pi(E, T, Y, e, s), Q._code = ge(Q, e), u.push(Q)), u.push(T));
        t = u;
      }
      return t;
    }
    function Yr(t, e) {
      var s, u, d, g, x, b, T, E, R;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      Vt(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var Y = D([0, 0]), Q = N(t), zt = Q.getNorthWest().distanceTo(Q.getSouthWest()) * Q.getNorthEast().distanceTo(Q.getNorthWest());
      zt < 1700 && (Y = yn(t));
      var Pt = t.length, Ht = [];
      for (s = 0; s < Pt; s++) {
        var It = D(t[s]);
        Ht.push(e.project(D([It.lat - Y.lat, It.lng - Y.lng])));
      }
      for (b = T = E = 0, s = 0, u = Pt - 1; s < Pt; u = s++)
        d = Ht[s], g = Ht[u], x = d.y * g.x - g.y * d.x, T += (d.x + g.x) * x, E += (d.y + g.y) * x, b += x * 3;
      b === 0 ? R = Ht[0] : R = [T / b, E / b];
      var ze = e.unproject(M(R));
      return D([ze.lat + Y.lat, ze.lng + Y.lng]);
    }
    function yn(t) {
      for (var e = 0, s = 0, u = 0, d = 0; d < t.length; d++) {
        var g = D(t[d]);
        e += g.lat, s += g.lng, u++;
      }
      return D([e / u, s / u]);
    }
    var ul = {
      __proto__: null,
      clipPolygon: Wr,
      polygonCenter: Yr,
      centroid: yn
    };
    function Gr(t, e) {
      if (!e || !t.length)
        return t.slice();
      var s = e * e;
      return t = dl(t, s), t = fl(t, s), t;
    }
    function qr(t, e, s) {
      return Math.sqrt(qe(t, e, s, !0));
    }
    function cl(t, e, s) {
      return qe(t, e, s);
    }
    function fl(t, e) {
      var s = t.length, u = typeof Uint8Array < "u" ? Uint8Array : Array, d = new u(s);
      d[0] = d[s - 1] = 1, xn(t, d, e, 0, s - 1);
      var g, x = [];
      for (g = 0; g < s; g++)
        d[g] && x.push(t[g]);
      return x;
    }
    function xn(t, e, s, u, d) {
      var g = 0, x, b, T;
      for (b = u + 1; b <= d - 1; b++)
        T = qe(t[b], t[u], t[d], !0), T > g && (x = b, g = T);
      g > s && (e[x] = 1, xn(t, e, s, u, x), xn(t, e, s, x, d));
    }
    function dl(t, e) {
      for (var s = [t[0]], u = 1, d = 0, g = t.length; u < g; u++)
        _l(t[u], t[d]) > e && (s.push(t[u]), d = u);
      return d < g - 1 && s.push(t[g - 1]), s;
    }
    var Xr;
    function $r(t, e, s, u, d) {
      var g = u ? Xr : ge(t, s), x = ge(e, s), b, T, E;
      for (Xr = x; ; ) {
        if (!(g | x))
          return [t, e];
        if (g & x)
          return !1;
        b = g || x, T = Pi(t, e, b, s, d), E = ge(T, s), b === g ? (t = T, g = E) : (e = T, x = E);
      }
    }
    function Pi(t, e, s, u, d) {
      var g = e.x - t.x, x = e.y - t.y, b = u.min, T = u.max, E, R;
      return s & 8 ? (E = t.x + g * (T.y - t.y) / x, R = T.y) : s & 4 ? (E = t.x + g * (b.y - t.y) / x, R = b.y) : s & 2 ? (E = T.x, R = t.y + x * (T.x - t.x) / g) : s & 1 && (E = b.x, R = t.y + x * (b.x - t.x) / g), new j(E, R, d);
    }
    function ge(t, e) {
      var s = 0;
      return t.x < e.min.x ? s |= 1 : t.x > e.max.x && (s |= 2), t.y < e.min.y ? s |= 4 : t.y > e.max.y && (s |= 8), s;
    }
    function _l(t, e) {
      var s = e.x - t.x, u = e.y - t.y;
      return s * s + u * u;
    }
    function qe(t, e, s, u) {
      var d = e.x, g = e.y, x = s.x - d, b = s.y - g, T = x * x + b * b, E;
      return T > 0 && (E = ((t.x - d) * x + (t.y - g) * b) / T, E > 1 ? (d = s.x, g = s.y) : E > 0 && (d += x * E, g += b * E)), x = t.x - d, b = t.y - g, u ? x * x + b * b : new j(d, g);
    }
    function Vt(t) {
      return !A(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
    }
    function Kr(t) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Vt(t);
    }
    function Jr(t, e) {
      var s, u, d, g, x, b, T, E;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      Vt(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var R = D([0, 0]), Y = N(t), Q = Y.getNorthWest().distanceTo(Y.getSouthWest()) * Y.getNorthEast().distanceTo(Y.getNorthWest());
      Q < 1700 && (R = yn(t));
      var zt = t.length, Pt = [];
      for (s = 0; s < zt; s++) {
        var Ht = D(t[s]);
        Pt.push(e.project(D([Ht.lat - R.lat, Ht.lng - R.lng])));
      }
      for (s = 0, u = 0; s < zt - 1; s++)
        u += Pt[s].distanceTo(Pt[s + 1]) / 2;
      if (u === 0)
        E = Pt[0];
      else
        for (s = 0, g = 0; s < zt - 1; s++)
          if (x = Pt[s], b = Pt[s + 1], d = x.distanceTo(b), g += d, g > u) {
            T = (g - u) / d, E = [
              b.x - T * (b.x - x.x),
              b.y - T * (b.y - x.y)
            ];
            break;
          }
      var It = e.unproject(M(E));
      return D([It.lat + R.lat, It.lng + R.lng]);
    }
    var ml = {
      __proto__: null,
      simplify: Gr,
      pointToSegmentDistance: qr,
      closestPointOnSegment: cl,
      clipSegment: $r,
      _getEdgeIntersection: Pi,
      _getBitCode: ge,
      _sqClosestPointOnSegment: qe,
      isFlat: Vt,
      _flat: Kr,
      polylineCenter: Jr
    }, wn = {
      project: function(t) {
        return new j(t.lng, t.lat);
      },
      unproject: function(t) {
        return new F(t.y, t.x);
      },
      bounds: new B([-180, -90], [180, 90])
    }, bn = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new B([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(t) {
        var e = Math.PI / 180, s = this.R, u = t.lat * e, d = this.R_MINOR / s, g = Math.sqrt(1 - d * d), x = g * Math.sin(u), b = Math.tan(Math.PI / 4 - u / 2) / Math.pow((1 - x) / (1 + x), g / 2);
        return u = -s * Math.log(Math.max(b, 1e-10)), new j(t.lng * e * s, u);
      },
      unproject: function(t) {
        for (var e = 180 / Math.PI, s = this.R, u = this.R_MINOR / s, d = Math.sqrt(1 - u * u), g = Math.exp(-t.y / s), x = Math.PI / 2 - 2 * Math.atan(g), b = 0, T = 0.1, E; b < 15 && Math.abs(T) > 1e-7; b++)
          E = d * Math.sin(x), E = Math.pow((1 - E) / (1 + E), d / 2), T = Math.PI / 2 - 2 * Math.atan(g * E) - x, x += T;
        return new F(x * e, t.x * e / s);
      }
    }, pl = {
      __proto__: null,
      LonLat: wn,
      Mercator: bn,
      SphericalMercator: J
    }, gl = l({}, q, {
      code: "EPSG:3395",
      projection: bn,
      transformation: function() {
        var t = 0.5 / (Math.PI * bn.R);
        return Z(t, 0.5, -t, 0.5);
      }()
    }), Qr = l({}, q, {
      code: "EPSG:4326",
      projection: wn,
      transformation: Z(1 / 180, 1, -1 / 180, 0.5)
    }), vl = l({}, W, {
      projection: wn,
      transformation: Z(1, 0, -1, 0),
      scale: function(t) {
        return Math.pow(2, t);
      },
      zoom: function(t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function(t, e) {
        var s = e.lng - t.lng, u = e.lat - t.lat;
        return Math.sqrt(s * s + u * u);
      },
      infinite: !0
    });
    W.Earth = q, W.EPSG3395 = gl, W.EPSG3857 = Ot, W.EPSG900913 = we, W.EPSG4326 = Qr, W.Simple = vl;
    var Xt = Mt.extend({
      // Classes extending `L.Layer` will inherit the following options:
      options: {
        // @option pane: String = 'overlayPane'
        // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
        pane: "overlayPane",
        // @option attribution: String = null
        // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
        attribution: null,
        bubblingMouseEvents: !0
      },
      /* @section
       * Classes extending `L.Layer` will inherit the following methods:
       *
       * @method addTo(map: Map|LayerGroup): this
       * Adds the layer to the given map or layer group.
       */
      addTo: function(t) {
        return t.addLayer(this), this;
      },
      // @method remove: this
      // Removes the layer from the map it is currently active on.
      remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      // @method removeFrom(map: Map): this
      // Removes the layer from the given map
      //
      // @alternative
      // @method removeFrom(group: LayerGroup): this
      // Removes the layer from the given `LayerGroup`
      removeFrom: function(t) {
        return t && t.removeLayer(this), this;
      },
      // @method getPane(name? : String): HTMLElement
      // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
      getPane: function(t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function(t) {
        return this._map._targets[f(t)] = this, this;
      },
      removeInteractiveTarget: function(t) {
        return delete this._map._targets[f(t)], this;
      },
      // @method getAttribution: String
      // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
      getAttribution: function() {
        return this.options.attribution;
      },
      _layerAdd: function(t) {
        var e = t.target;
        if (e.hasLayer(this)) {
          if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
            var s = this.getEvents();
            e.on(s, this), this.once("remove", function() {
              e.off(s, this);
            }, this);
          }
          this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
        }
      }
    });
    it.include({
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the map
      addLayer: function(t) {
        if (!t._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var e = f(t);
        return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the map.
      removeLayer: function(t) {
        var e = f(t);
        return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the map
      hasLayer: function(t) {
        return f(t) in this._layers;
      },
      /* @method eachLayer(fn: Function, context?: Object): this
       * Iterates over the layers of the map, optionally specifying context of the iterator function.
       * ```
       * map.eachLayer(function(layer){
       *     layer.bindPopup('Hello');
       * });
       * ```
       */
      eachLayer: function(t, e) {
        for (var s in this._layers)
          t.call(e, this._layers[s]);
        return this;
      },
      _addLayers: function(t) {
        t = t ? A(t) ? t : [t] : [];
        for (var e = 0, s = t.length; e < s; e++)
          this.addLayer(t[e]);
      },
      _addZoomLimit: function(t) {
        (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[f(t)] = t, this._updateZoomLevels());
      },
      _removeZoomLimit: function(t) {
        var e = f(t);
        this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
      },
      _updateZoomLevels: function() {
        var t = 1 / 0, e = -1 / 0, s = this._getZoomSpan();
        for (var u in this._zoomBoundLayers) {
          var d = this._zoomBoundLayers[u].options;
          t = d.minZoom === void 0 ? t : Math.min(t, d.minZoom), e = d.maxZoom === void 0 ? e : Math.max(e, d.maxZoom);
        }
        this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, s !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    });
    var Ce = Xt.extend({
      initialize: function(t, e) {
        w(this, e), this._layers = {};
        var s, u;
        if (t)
          for (s = 0, u = t.length; s < u; s++)
            this.addLayer(t[s]);
      },
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the group.
      addLayer: function(t) {
        var e = this.getLayerId(t);
        return this._layers[e] = t, this._map && this._map.addLayer(t), this;
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the group.
      // @alternative
      // @method removeLayer(id: Number): this
      // Removes the layer with the given internal ID from the group.
      removeLayer: function(t) {
        var e = t in this._layers ? t : this.getLayerId(t);
        return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the group.
      // @alternative
      // @method hasLayer(id: Number): Boolean
      // Returns `true` if the given internal ID is currently added to the group.
      hasLayer: function(t) {
        var e = typeof t == "number" ? t : this.getLayerId(t);
        return e in this._layers;
      },
      // @method clearLayers(): this
      // Removes all the layers from the group.
      clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      },
      // @method invoke(methodName: String, …): this
      // Calls `methodName` on every layer contained in this group, passing any
      // additional parameters. Has no effect if the layers contained do not
      // implement `methodName`.
      invoke: function(t) {
        var e = Array.prototype.slice.call(arguments, 1), s, u;
        for (s in this._layers)
          u = this._layers[s], u[t] && u[t].apply(u, e);
        return this;
      },
      onAdd: function(t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function(t) {
        this.eachLayer(t.removeLayer, t);
      },
      // @method eachLayer(fn: Function, context?: Object): this
      // Iterates over the layers of the group, optionally specifying context of the iterator function.
      // ```js
      // group.eachLayer(function (layer) {
      // 	layer.bindPopup('Hello');
      // });
      // ```
      eachLayer: function(t, e) {
        for (var s in this._layers)
          t.call(e, this._layers[s]);
        return this;
      },
      // @method getLayer(id: Number): Layer
      // Returns the layer with the given internal ID.
      getLayer: function(t) {
        return this._layers[t];
      },
      // @method getLayers(): Layer[]
      // Returns an array of all the layers added to the group.
      getLayers: function() {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      // @method setZIndex(zIndex: Number): this
      // Calls `setZIndex` on every layer contained in this group, passing the z-index.
      setZIndex: function(t) {
        return this.invoke("setZIndex", t);
      },
      // @method getLayerId(layer: Layer): Number
      // Returns the internal ID for a layer
      getLayerId: function(t) {
        return f(t);
      }
    }), yl = function(t, e) {
      return new Ce(t, e);
    }, ie = Ce.extend({
      addLayer: function(t) {
        return this.hasLayer(t) ? this : (t.addEventParent(this), Ce.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
      },
      removeLayer: function(t) {
        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ce.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
      },
      // @method setStyle(style: Path options): this
      // Sets the given path options to each layer of the group that has a `setStyle` method.
      setStyle: function(t) {
        return this.invoke("setStyle", t);
      },
      // @method bringToFront(): this
      // Brings the layer group to the top of all other layers
      bringToFront: function() {
        return this.invoke("bringToFront");
      },
      // @method bringToBack(): this
      // Brings the layer group to the back of all other layers
      bringToBack: function() {
        return this.invoke("bringToBack");
      },
      // @method getBounds(): LatLngBounds
      // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
      getBounds: function() {
        var t = new H();
        for (var e in this._layers) {
          var s = this._layers[e];
          t.extend(s.getBounds ? s.getBounds() : s.getLatLng());
        }
        return t;
      }
    }), xl = function(t, e) {
      return new ie(t, e);
    }, Te = wt.extend({
      /* @section
       * @aka Icon options
       *
       * @option iconUrl: String = null
       * **(required)** The URL to the icon image (absolute or relative to your script path).
       *
       * @option iconRetinaUrl: String = null
       * The URL to a retina sized version of the icon image (absolute or relative to your
       * script path). Used for Retina screen devices.
       *
       * @option iconSize: Point = null
       * Size of the icon image in pixels.
       *
       * @option iconAnchor: Point = null
       * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
       * will be aligned so that this point is at the marker's geographical location. Centered
       * by default if size is specified, also can be set in CSS with negative margins.
       *
       * @option popupAnchor: Point = [0, 0]
       * The coordinates of the point from which popups will "open", relative to the icon anchor.
       *
       * @option tooltipAnchor: Point = [0, 0]
       * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
       *
       * @option shadowUrl: String = null
       * The URL to the icon shadow image. If not specified, no shadow image will be created.
       *
       * @option shadowRetinaUrl: String = null
       *
       * @option shadowSize: Point = null
       * Size of the shadow image in pixels.
       *
       * @option shadowAnchor: Point = null
       * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
       * as iconAnchor if not specified).
       *
       * @option className: String = ''
       * A custom class name to assign to both icon and shadow images. Empty by default.
       */
      options: {
        popupAnchor: [0, 0],
        tooltipAnchor: [0, 0],
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1
      },
      initialize: function(t) {
        w(this, t);
      },
      // @method createIcon(oldIcon?: HTMLElement): HTMLElement
      // Called internally when the icon has to be shown, returns a `<img>` HTML element
      // styled according to the options.
      createIcon: function(t) {
        return this._createIcon("icon", t);
      },
      // @method createShadow(oldIcon?: HTMLElement): HTMLElement
      // As `createIcon`, but for the shadow beneath it.
      createShadow: function(t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function(t, e) {
        var s = this._getIconUrl(t);
        if (!s) {
          if (t === "icon")
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var u = this._createImg(s, e && e.tagName === "IMG" ? e : null);
        return this._setIconStyles(u, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (u.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), u;
      },
      _setIconStyles: function(t, e) {
        var s = this.options, u = s[e + "Size"];
        typeof u == "number" && (u = [u, u]);
        var d = M(u), g = M(e === "shadow" && s.shadowAnchor || s.iconAnchor || d && d.divideBy(2, !0));
        t.className = "leaflet-marker-" + e + " " + (s.className || ""), g && (t.style.marginLeft = -g.x + "px", t.style.marginTop = -g.y + "px"), d && (t.style.width = d.x + "px", t.style.height = d.y + "px");
      },
      _createImg: function(t, e) {
        return e = e || document.createElement("img"), e.src = t, e;
      },
      _getIconUrl: function(t) {
        return V.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
      }
    });
    function wl(t) {
      return new Te(t);
    }
    var Xe = Te.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      },
      _getIconUrl: function(t) {
        return typeof Xe.imagePath != "string" && (Xe.imagePath = this._detectIconPath()), (this.options.imagePath || Xe.imagePath) + Te.prototype._getIconUrl.call(this, t);
      },
      _stripUrl: function(t) {
        var e = function(s, u, d) {
          var g = u.exec(s);
          return g && g[d];
        };
        return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function() {
        var t = ot("div", "leaflet-default-icon-path", document.body), e = Ue(t, "background-image") || Ue(t, "backgroundImage");
        if (document.body.removeChild(t), e = this._stripUrl(e), e)
          return e;
        var s = document.querySelector('link[href$="leaflet.css"]');
        return s ? s.href.substring(0, s.href.length - 11 - 1) : "";
      }
    }), to = te.extend({
      initialize: function(t) {
        this._marker = t;
      },
      addHooks: function() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new he(t, t, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), K(t, "leaflet-marker-draggable");
      },
      removeHooks: function() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && gt(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(t) {
        var e = this._marker, s = e._map, u = this._marker.options.autoPanSpeed, d = this._marker.options.autoPanPadding, g = _e(e._icon), x = s.getPixelBounds(), b = s.getPixelOrigin(), T = U(
          x.min._subtract(b).add(d),
          x.max._subtract(b).subtract(d)
        );
        if (!T.contains(g)) {
          var E = M(
            (Math.max(T.max.x, g.x) - T.max.x) / (x.max.x - T.max.x) - (Math.min(T.min.x, g.x) - T.min.x) / (x.min.x - T.min.x),
            (Math.max(T.max.y, g.y) - T.max.y) / (x.max.y - T.max.y) - (Math.min(T.min.y, g.y) - T.min.y) / (x.min.y - T.min.y)
          ).multiplyBy(u);
          s.panBy(E, { animate: !1 }), this._draggable._newPos._add(E), this._draggable._startPos._add(E), yt(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = _t(this._adjustPan.bind(this, t));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(t) {
        this._marker.options.autoPan && (Lt(this._panRequest), this._panRequest = _t(this._adjustPan.bind(this, t)));
      },
      _onDrag: function(t) {
        var e = this._marker, s = e._shadow, u = _e(e._icon), d = e._map.layerPointToLatLng(u);
        s && yt(s, u), e._latlng = d, t.latlng = d, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function(t) {
        Lt(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      }
    }), Ci = Xt.extend({
      // @section
      // @aka Marker options
      options: {
        // @option icon: Icon = *
        // Icon instance to use for rendering the marker.
        // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
        // If not specified, a common instance of `L.Icon.Default` is used.
        icon: new Xe(),
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option keyboard: Boolean = true
        // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
        keyboard: !0,
        // @option title: String = ''
        // Text for the browser tooltip that appear on marker hover (no tooltip by default).
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        title: "",
        // @option alt: String = 'Marker'
        // Text for the `alt` attribute of the icon image.
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        alt: "Marker",
        // @option zIndexOffset: Number = 0
        // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
        zIndexOffset: 0,
        // @option opacity: Number = 1.0
        // The opacity of the marker.
        opacity: 1,
        // @option riseOnHover: Boolean = false
        // If `true`, the marker will get on top of others when you hover the mouse over it.
        riseOnHover: !1,
        // @option riseOffset: Number = 250
        // The z-index offset used for the `riseOnHover` feature.
        riseOffset: 250,
        // @option pane: String = 'markerPane'
        // `Map pane` where the markers icon will be added.
        pane: "markerPane",
        // @option shadowPane: String = 'shadowPane'
        // `Map pane` where the markers shadow will be added.
        shadowPane: "shadowPane",
        // @option bubblingMouseEvents: Boolean = false
        // When `true`, a mouse event on this marker will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !1,
        // @option autoPanOnFocus: Boolean = true
        // When `true`, the map will pan whenever the marker is focused (via
        // e.g. pressing `tab` on the keyboard) to ensure the marker is
        // visible within the map's bounds
        autoPanOnFocus: !0,
        // @section Draggable marker options
        // @option draggable: Boolean = false
        // Whether the marker is draggable with mouse/touch or not.
        draggable: !1,
        // @option autoPan: Boolean = false
        // Whether to pan the map when dragging this marker near its edge or not.
        autoPan: !1,
        // @option autoPanPadding: Point = Point(50, 50)
        // Distance (in pixels to the left/right and to the top/bottom) of the
        // map edge to start panning the map.
        autoPanPadding: [50, 50],
        // @option autoPanSpeed: Number = 10
        // Number of pixels the map should pan by.
        autoPanSpeed: 10
      },
      /* @section
       *
       * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
       */
      initialize: function(t, e) {
        w(this, e), this._latlng = D(t);
      },
      onAdd: function(t) {
        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      },
      onRemove: function(t) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      },
      getEvents: function() {
        return {
          zoom: this.update,
          viewreset: this.update
        };
      },
      // @method getLatLng: LatLng
      // Returns the current geographical position of the marker.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Changes the marker position to the given point.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = D(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      },
      // @method setZIndexOffset(offset: Number): this
      // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
      setZIndexOffset: function(t) {
        return this.options.zIndexOffset = t, this.update();
      },
      // @method getIcon: Icon
      // Returns the current icon used by the marker
      getIcon: function() {
        return this.options.icon;
      },
      // @method setIcon(icon: Icon): this
      // Changes the marker icon.
      setIcon: function(t) {
        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      },
      getElement: function() {
        return this._icon;
      },
      update: function() {
        if (this._icon && this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t);
        }
        return this;
      },
      _initIcon: function() {
        var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), s = t.icon.createIcon(this._icon), u = !1;
        s !== this._icon && (this._icon && this._removeIcon(), u = !0, t.title && (s.title = t.title), s.tagName === "IMG" && (s.alt = t.alt || "")), K(s, e), t.keyboard && (s.tabIndex = "0", s.setAttribute("role", "button")), this._icon = s, t.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && X(s, "focus", this._panOnFocus, this);
        var d = t.icon.createShadow(this._shadow), g = !1;
        d !== this._shadow && (this._removeShadow(), g = !0), d && (K(d, e), d.alt = ""), this._shadow = d, t.opacity < 1 && this._updateOpacity(), u && this.getPane().appendChild(this._icon), this._initInteraction(), d && g && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && ct(this._icon, "focus", this._panOnFocus, this), dt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && dt(this._shadow), this._shadow = null;
      },
      _setPos: function(t) {
        this._icon && yt(this._icon, t), this._shadow && yt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(e);
      },
      _initInteraction: function() {
        if (this.options.interactive && (K(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), to)) {
          var t = this.options.draggable;
          this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new to(this), t && this.dragging.enable();
        }
      },
      // @method setOpacity(opacity: Number): this
      // Changes the opacity of the marker.
      setOpacity: function(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var t = this.options.opacity;
        this._icon && Ut(this._icon, t), this._shadow && Ut(this._shadow, t);
      },
      _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function() {
        this._updateZIndex(0);
      },
      _panOnFocus: function() {
        var t = this._map;
        if (t) {
          var e = this.options.icon.options, s = e.iconSize ? M(e.iconSize) : M(0, 0), u = e.iconAnchor ? M(e.iconAnchor) : M(0, 0);
          t.panInside(this._latlng, {
            paddingTopLeft: u,
            paddingBottomRight: s.subtract(u)
          });
        }
      },
      _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      }
    });
    function bl(t, e) {
      return new Ci(t, e);
    }
    var ue = Xt.extend({
      // @section
      // @aka Path options
      options: {
        // @option stroke: Boolean = true
        // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
        stroke: !0,
        // @option color: String = '#3388ff'
        // Stroke color
        color: "#3388ff",
        // @option weight: Number = 3
        // Stroke width in pixels
        weight: 3,
        // @option opacity: Number = 1.0
        // Stroke opacity
        opacity: 1,
        // @option lineCap: String= 'round'
        // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
        lineCap: "round",
        // @option lineJoin: String = 'round'
        // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
        lineJoin: "round",
        // @option dashArray: String = null
        // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashArray: null,
        // @option dashOffset: String = null
        // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashOffset: null,
        // @option fill: Boolean = depends
        // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
        fill: !1,
        // @option fillColor: String = *
        // Fill color. Defaults to the value of the [`color`](#path-color) option
        fillColor: null,
        // @option fillOpacity: Number = 0.2
        // Fill opacity.
        fillOpacity: 0.2,
        // @option fillRule: String = 'evenodd'
        // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
        fillRule: "evenodd",
        // className: '',
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option bubblingMouseEvents: Boolean = true
        // When `true`, a mouse event on this path will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !0
      },
      beforeAdd: function(t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      },
      onRemove: function() {
        this._renderer._removePath(this);
      },
      // @method redraw(): this
      // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
      redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      },
      // @method setStyle(style: Path options): this
      // Changes the appearance of a Path based on the options in the `Path options` object.
      setStyle: function(t) {
        return w(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all path layers.
      bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all path layers.
      bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function() {
        return this._path;
      },
      _reset: function() {
        this._project(), this._update();
      },
      _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      }
    }), Ti = ue.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(t, e) {
        w(this, e), this._latlng = D(t), this._radius = this.options.radius;
      },
      // @method setLatLng(latLng: LatLng): this
      // Sets the position of a circle marker to a new location.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = D(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      },
      // @method getLatLng(): LatLng
      // Returns the current geographical position of the circle marker
      getLatLng: function() {
        return this._latlng;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle marker. Units are in pixels.
      setRadius: function(t) {
        return this.options.radius = this._radius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of the circle
      getRadius: function() {
        return this._radius;
      },
      setStyle: function(t) {
        var e = t && t.radius || this._radius;
        return ue.prototype.setStyle.call(this, t), this.setRadius(e), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var t = this._radius, e = this._radiusY || t, s = this._clickTolerance(), u = [t + s, e + s];
        this._pxBounds = new B(this._point.subtract(u), this._point.add(u));
      },
      _update: function() {
        this._map && this._updatePath();
      },
      _updatePath: function() {
        this._renderer._updateCircle(this);
      },
      _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
      }
    });
    function Ll(t, e) {
      return new Ti(t, e);
    }
    var Ln = Ti.extend({
      initialize: function(t, e, s) {
        if (typeof e == "number" && (e = l({}, s, { radius: e })), w(this, e), this._latlng = D(t), isNaN(this.options.radius))
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle. Units are in meters.
      setRadius: function(t) {
        return this._mRadius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of a circle. Units are in meters.
      getRadius: function() {
        return this._mRadius;
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        var t = [this._radius, this._radiusY || this._radius];
        return new H(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: ue.prototype.setStyle,
      _project: function() {
        var t = this._latlng.lng, e = this._latlng.lat, s = this._map, u = s.options.crs;
        if (u.distance === q.distance) {
          var d = Math.PI / 180, g = this._mRadius / q.R / d, x = s.project([e + g, t]), b = s.project([e - g, t]), T = x.add(b).divideBy(2), E = s.unproject(T).lat, R = Math.acos((Math.cos(g * d) - Math.sin(e * d) * Math.sin(E * d)) / (Math.cos(e * d) * Math.cos(E * d))) / d;
          (isNaN(R) || R === 0) && (R = g / Math.cos(Math.PI / 180 * e)), this._point = T.subtract(s.getPixelOrigin()), this._radius = isNaN(R) ? 0 : T.x - s.project([E, t - R]).x, this._radiusY = T.y - x.y;
        } else {
          var Y = u.unproject(u.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = s.latLngToLayerPoint(this._latlng), this._radius = this._point.x - s.latLngToLayerPoint(Y).x;
        }
        this._updateBounds();
      }
    });
    function Pl(t, e, s) {
      return new Ln(t, e, s);
    }
    var ne = ue.extend({
      // @section
      // @aka Polyline options
      options: {
        // @option smoothFactor: Number = 1.0
        // How much to simplify the polyline on each zoom level. More means
        // better performance and smoother look, and less means more accurate representation.
        smoothFactor: 1,
        // @option noClip: Boolean = false
        // Disable polyline clipping.
        noClip: !1
      },
      initialize: function(t, e) {
        w(this, e), this._setLatLngs(t);
      },
      // @method getLatLngs(): LatLng[]
      // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
      getLatLngs: function() {
        return this._latlngs;
      },
      // @method setLatLngs(latlngs: LatLng[]): this
      // Replaces all the points in the polyline with the given array of geographical points.
      setLatLngs: function(t) {
        return this._setLatLngs(t), this.redraw();
      },
      // @method isEmpty(): Boolean
      // Returns `true` if the Polyline has no LatLngs.
      isEmpty: function() {
        return !this._latlngs.length;
      },
      // @method closestLayerPoint(p: Point): Point
      // Returns the point closest to `p` on the Polyline.
      closestLayerPoint: function(t) {
        for (var e = 1 / 0, s = null, u = qe, d, g, x = 0, b = this._parts.length; x < b; x++)
          for (var T = this._parts[x], E = 1, R = T.length; E < R; E++) {
            d = T[E - 1], g = T[E];
            var Y = u(t, d, g, !0);
            Y < e && (e = Y, s = u(t, d, g));
          }
        return s && (s.distance = Math.sqrt(e)), s;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Jr(this._defaultShape(), this._map.options.crs);
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        return this._bounds;
      },
      // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
      // Adds a given point to the polyline. By default, adds to the first ring of
      // the polyline in case of a multi-polyline, but can be overridden by passing
      // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
      addLatLng: function(t, e) {
        return e = e || this._defaultShape(), t = D(t), e.push(t), this._bounds.extend(t), this.redraw();
      },
      _setLatLngs: function(t) {
        this._bounds = new H(), this._latlngs = this._convertLatLngs(t);
      },
      _defaultShape: function() {
        return Vt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
      _convertLatLngs: function(t) {
        for (var e = [], s = Vt(t), u = 0, d = t.length; u < d; u++)
          s ? (e[u] = D(t[u]), this._bounds.extend(e[u])) : e[u] = this._convertLatLngs(t[u]);
        return e;
      },
      _project: function() {
        var t = new B();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
      },
      _updateBounds: function() {
        var t = this._clickTolerance(), e = new j(t, t);
        this._rawPxBounds && (this._pxBounds = new B([
          this._rawPxBounds.min.subtract(e),
          this._rawPxBounds.max.add(e)
        ]));
      },
      // recursively turns latlngs into a set of rings with projected coordinates
      _projectLatlngs: function(t, e, s) {
        var u = t[0] instanceof F, d = t.length, g, x;
        if (u) {
          for (x = [], g = 0; g < d; g++)
            x[g] = this._map.latLngToLayerPoint(t[g]), s.extend(x[g]);
          e.push(x);
        } else
          for (g = 0; g < d; g++)
            this._projectLatlngs(t[g], e, s);
      },
      // clip polyline by renderer bounds so that we have less to render for performance
      _clipPoints: function() {
        var t = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var e = this._parts, s, u, d, g, x, b, T;
          for (s = 0, d = 0, g = this._rings.length; s < g; s++)
            for (T = this._rings[s], u = 0, x = T.length; u < x - 1; u++)
              b = $r(T[u], T[u + 1], t, u, !0), b && (e[d] = e[d] || [], e[d].push(b[0]), (b[1] !== T[u + 1] || u === x - 2) && (e[d].push(b[1]), d++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var t = this._parts, e = this.options.smoothFactor, s = 0, u = t.length; s < u; s++)
          t[s] = Gr(t[s], e);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t, e) {
        var s, u, d, g, x, b, T = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (s = 0, g = this._parts.length; s < g; s++)
          for (b = this._parts[s], u = 0, x = b.length, d = x - 1; u < x; d = u++)
            if (!(!e && u === 0) && qr(t, b[d], b[u]) <= T)
              return !0;
        return !1;
      }
    });
    function Cl(t, e) {
      return new ne(t, e);
    }
    ne._flat = Kr;
    var Me = ne.extend({
      options: {
        fill: !0
      },
      isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Yr(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function(t) {
        var e = ne.prototype._convertLatLngs.call(this, t), s = e.length;
        return s >= 2 && e[0] instanceof F && e[0].equals(e[s - 1]) && e.pop(), e;
      },
      _setLatLngs: function(t) {
        ne.prototype._setLatLngs.call(this, t), Vt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return Vt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var t = this._renderer._bounds, e = this.options.weight, s = new j(e, e);
        if (t = new B(t.min.subtract(s), t.max.add(s)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var u = 0, d = this._rings.length, g; u < d; u++)
            g = Wr(this._rings[u], t, !0), g.length && this._parts.push(g);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        var e = !1, s, u, d, g, x, b, T, E;
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (g = 0, T = this._parts.length; g < T; g++)
          for (s = this._parts[g], x = 0, E = s.length, b = E - 1; x < E; b = x++)
            u = s[x], d = s[b], u.y > t.y != d.y > t.y && t.x < (d.x - u.x) * (t.y - u.y) / (d.y - u.y) + u.x && (e = !e);
        return e || ne.prototype._containsPoint.call(this, t, !0);
      }
    });
    function Tl(t, e) {
      return new Me(t, e);
    }
    var re = ie.extend({
      /* @section
       * @aka GeoJSON options
       *
       * @option pointToLayer: Function = *
       * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
       * called when data is added, passing the GeoJSON point feature and its `LatLng`.
       * The default is to spawn a default `Marker`:
       * ```js
       * function(geoJsonPoint, latlng) {
       * 	return L.marker(latlng);
       * }
       * ```
       *
       * @option style: Function = *
       * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
       * called internally when data is added.
       * The default value is to not override any defaults:
       * ```js
       * function (geoJsonFeature) {
       * 	return {}
       * }
       * ```
       *
       * @option onEachFeature: Function = *
       * A `Function` that will be called once for each created `Feature`, after it has
       * been created and styled. Useful for attaching events and popups to features.
       * The default is to do nothing with the newly created layers:
       * ```js
       * function (feature, layer) {}
       * ```
       *
       * @option filter: Function = *
       * A `Function` that will be used to decide whether to include a feature or not.
       * The default is to include all features:
       * ```js
       * function (geoJsonFeature) {
       * 	return true;
       * }
       * ```
       * Note: dynamically changing the `filter` option will have effect only on newly
       * added data. It will _not_ re-evaluate already included features.
       *
       * @option coordsToLatLng: Function = *
       * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
       * The default is the `coordsToLatLng` static method.
       *
       * @option markersInheritOptions: Boolean = false
       * Whether default Markers for "Point" type Features inherit from group options.
       */
      initialize: function(t, e) {
        w(this, e), this._layers = {}, t && this.addData(t);
      },
      // @method addData( <GeoJSON> data ): this
      // Adds a GeoJSON object to the layer.
      addData: function(t) {
        var e = A(t) ? t : t.features, s, u, d;
        if (e) {
          for (s = 0, u = e.length; s < u; s++)
            d = e[s], (d.geometries || d.geometry || d.features || d.coordinates) && this.addData(d);
          return this;
        }
        var g = this.options;
        if (g.filter && !g.filter(t))
          return this;
        var x = Mi(t, g);
        return x ? (x.feature = zi(t), x.defaultOptions = x.options, this.resetStyle(x), g.onEachFeature && g.onEachFeature(t, x), this.addLayer(x)) : this;
      },
      // @method resetStyle( <Path> layer? ): this
      // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
      // If `layer` is omitted, the style of all features in the current layer is reset.
      resetStyle: function(t) {
        return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = l({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
      },
      // @method setStyle( <Function> style ): this
      // Changes styles of GeoJSON vector layers with the given style function.
      setStyle: function(t) {
        return this.eachLayer(function(e) {
          this._setLayerStyle(e, t);
        }, this);
      },
      _setLayerStyle: function(t, e) {
        t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
      }
    });
    function Mi(t, e) {
      var s = t.type === "Feature" ? t.geometry : t, u = s ? s.coordinates : null, d = [], g = e && e.pointToLayer, x = e && e.coordsToLatLng || Pn, b, T, E, R;
      if (!u && !s)
        return null;
      switch (s.type) {
        case "Point":
          return b = x(u), eo(g, t, b, e);
        case "MultiPoint":
          for (E = 0, R = u.length; E < R; E++)
            b = x(u[E]), d.push(eo(g, t, b, e));
          return new ie(d);
        case "LineString":
        case "MultiLineString":
          return T = ki(u, s.type === "LineString" ? 0 : 1, x), new ne(T, e);
        case "Polygon":
        case "MultiPolygon":
          return T = ki(u, s.type === "Polygon" ? 1 : 2, x), new Me(T, e);
        case "GeometryCollection":
          for (E = 0, R = s.geometries.length; E < R; E++) {
            var Y = Mi({
              geometry: s.geometries[E],
              type: "Feature",
              properties: t.properties
            }, e);
            Y && d.push(Y);
          }
          return new ie(d);
        case "FeatureCollection":
          for (E = 0, R = s.features.length; E < R; E++) {
            var Q = Mi(s.features[E], e);
            Q && d.push(Q);
          }
          return new ie(d);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function eo(t, e, s, u) {
      return t ? t(e, s) : new Ci(s, u && u.markersInheritOptions && u);
    }
    function Pn(t) {
      return new F(t[1], t[0], t[2]);
    }
    function ki(t, e, s) {
      for (var u = [], d = 0, g = t.length, x; d < g; d++)
        x = e ? ki(t[d], e - 1, s) : (s || Pn)(t[d]), u.push(x);
      return u;
    }
    function Cn(t, e) {
      return t = D(t), t.alt !== void 0 ? [v(t.lng, e), v(t.lat, e), v(t.alt, e)] : [v(t.lng, e), v(t.lat, e)];
    }
    function Si(t, e, s, u) {
      for (var d = [], g = 0, x = t.length; g < x; g++)
        d.push(e ? Si(t[g], Vt(t[g]) ? 0 : e - 1, s, u) : Cn(t[g], u));
      return !e && s && d.length > 0 && d.push(d[0].slice()), d;
    }
    function ke(t, e) {
      return t.feature ? l({}, t.feature, { geometry: e }) : zi(e);
    }
    function zi(t) {
      return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
        type: "Feature",
        properties: {},
        geometry: t
      };
    }
    var Tn = {
      toGeoJSON: function(t) {
        return ke(this, {
          type: "Point",
          coordinates: Cn(this.getLatLng(), t)
        });
      }
    };
    Ci.include(Tn), Ln.include(Tn), Ti.include(Tn), ne.include({
      toGeoJSON: function(t) {
        var e = !Vt(this._latlngs), s = Si(this._latlngs, e ? 1 : 0, !1, t);
        return ke(this, {
          type: (e ? "Multi" : "") + "LineString",
          coordinates: s
        });
      }
    }), Me.include({
      toGeoJSON: function(t) {
        var e = !Vt(this._latlngs), s = e && !Vt(this._latlngs[0]), u = Si(this._latlngs, s ? 2 : e ? 1 : 0, !0, t);
        return e || (u = [u]), ke(this, {
          type: (s ? "Multi" : "") + "Polygon",
          coordinates: u
        });
      }
    }), Ce.include({
      toMultiPoint: function(t) {
        var e = [];
        return this.eachLayer(function(s) {
          e.push(s.toGeoJSON(t).geometry.coordinates);
        }), ke(this, {
          type: "MultiPoint",
          coordinates: e
        });
      },
      // @method toGeoJSON(precision?: Number|false): Object
      // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
      // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
      toGeoJSON: function(t) {
        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (e === "MultiPoint")
          return this.toMultiPoint(t);
        var s = e === "GeometryCollection", u = [];
        return this.eachLayer(function(d) {
          if (d.toGeoJSON) {
            var g = d.toGeoJSON(t);
            if (s)
              u.push(g.geometry);
            else {
              var x = zi(g);
              x.type === "FeatureCollection" ? u.push.apply(u, x.features) : u.push(x);
            }
          }
        }), s ? ke(this, {
          geometries: u,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: u
        };
      }
    });
    function io(t, e) {
      return new re(t, e);
    }
    var Ml = io, Ei = Xt.extend({
      // @section
      // @aka ImageOverlay options
      options: {
        // @option opacity: Number = 1.0
        // The opacity of the image overlay.
        opacity: 1,
        // @option alt: String = ''
        // Text for the `alt` attribute of the image (useful for accessibility).
        alt: "",
        // @option interactive: Boolean = false
        // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
        interactive: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the image.
        // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option errorOverlayUrl: String = ''
        // URL to the overlay image to show in place of the overlay that failed to load.
        errorOverlayUrl: "",
        // @option zIndex: Number = 1
        // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
        zIndex: 1,
        // @option className: String = ''
        // A custom class name to assign to the image. Empty by default.
        className: ""
      },
      initialize: function(t, e, s) {
        this._url = t, this._bounds = N(e), w(this, s);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (K(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        dt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      // @method setOpacity(opacity: Number): this
      // Sets the opacity of the overlay.
      setOpacity: function(t) {
        return this.options.opacity = t, this._image && this._updateOpacity(), this;
      },
      setStyle: function(t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all overlays.
      bringToFront: function() {
        return this._map && Le(this._image), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all overlays.
      bringToBack: function() {
        return this._map && Pe(this._image), this;
      },
      // @method setUrl(url: String): this
      // Changes the URL of the image.
      setUrl: function(t) {
        return this._url = t, this._image && (this._image.src = t), this;
      },
      // @method setBounds(bounds: LatLngBounds): this
      // Update the bounds that this ImageOverlay covers
      setBounds: function(t) {
        return this._bounds = N(t), this._map && this._reset(), this;
      },
      getEvents: function() {
        var t = {
          zoom: this._reset,
          viewreset: this._reset
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method setZIndex(value: Number): this
      // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method getBounds(): LatLngBounds
      // Get the bounds that this ImageOverlay covers
      getBounds: function() {
        return this._bounds;
      },
      // @method getElement(): HTMLElement
      // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
      // used by this overlay.
      getElement: function() {
        return this._image;
      },
      _initImage: function() {
        var t = this._url.tagName === "IMG", e = this._image = t ? this._url : ot("img");
        if (K(e, "leaflet-image-layer"), this._zoomAnimated && K(e, "leaflet-zoom-animated"), this.options.className && K(e, this.options.className), e.onselectstart = p, e.onmousemove = p, e.onload = h(this.fire, this, "load"), e.onerror = h(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
          this._url = e.src;
          return;
        }
        e.src = this._url, e.alt = this.options.alt;
      },
      _animateZoom: function(t) {
        var e = this._map.getZoomScale(t.zoom), s = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        de(this._image, s, e);
      },
      _reset: function() {
        var t = this._image, e = new B(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), s = e.getSize();
        yt(t, e.min), t.style.width = s.x + "px", t.style.height = s.y + "px";
      },
      _updateOpacity: function() {
        Ut(this._image, this.options.opacity);
      },
      _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function() {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && (this._url = t, this._image.src = t);
      },
      // @method getCenter(): LatLng
      // Returns the center of the ImageOverlay.
      getCenter: function() {
        return this._bounds.getCenter();
      }
    }), kl = function(t, e, s) {
      return new Ei(t, e, s);
    }, no = Ei.extend({
      // @section
      // @aka VideoOverlay options
      options: {
        // @option autoplay: Boolean = true
        // Whether the video starts playing automatically when loaded.
        // On some browsers autoplay will only work with `muted: true`
        autoplay: !0,
        // @option loop: Boolean = true
        // Whether the video will loop back to the beginning when played.
        loop: !0,
        // @option keepAspectRatio: Boolean = true
        // Whether the video will save aspect ratio after the projection.
        // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
        keepAspectRatio: !0,
        // @option muted: Boolean = false
        // Whether the video starts on mute when loaded.
        muted: !1,
        // @option playsInline: Boolean = true
        // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
        playsInline: !0
      },
      _initImage: function() {
        var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : ot("video");
        if (K(e, "leaflet-image-layer"), this._zoomAnimated && K(e, "leaflet-zoom-animated"), this.options.className && K(e, this.options.className), e.onselectstart = p, e.onmousemove = p, e.onloadeddata = h(this.fire, this, "load"), t) {
          for (var s = e.getElementsByTagName("source"), u = [], d = 0; d < s.length; d++)
            u.push(s[d].src);
          this._url = s.length > 0 ? u : [e.src];
          return;
        }
        A(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
        for (var g = 0; g < this._url.length; g++) {
          var x = ot("source");
          x.src = this._url[g], e.appendChild(x);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function Sl(t, e, s) {
      return new no(t, e, s);
    }
    var ro = Ei.extend({
      _initImage: function() {
        var t = this._image = this._url;
        K(t, "leaflet-image-layer"), this._zoomAnimated && K(t, "leaflet-zoom-animated"), this.options.className && K(t, this.options.className), t.onselectstart = p, t.onmousemove = p;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function zl(t, e, s) {
      return new ro(t, e, s);
    }
    var ee = Xt.extend({
      // @section
      // @aka DivOverlay options
      options: {
        // @option interactive: Boolean = false
        // If true, the popup/tooltip will listen to the mouse events.
        interactive: !1,
        // @option offset: Point = Point(0, 0)
        // The offset of the overlay position.
        offset: [0, 0],
        // @option className: String = ''
        // A custom CSS class name to assign to the overlay.
        className: "",
        // @option pane: String = undefined
        // `Map pane` where the overlay will be added.
        pane: void 0,
        // @option content: String|HTMLElement|Function = ''
        // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
        // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
        content: ""
      },
      initialize: function(t, e) {
        t && (t instanceof F || A(t)) ? (this._latlng = D(t), w(this, e)) : (w(this, t), this._source = e), this.options.content && (this._content = this.options.content);
      },
      // @method openOn(map: Map): this
      // Adds the overlay to the map.
      // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
      },
      // @method close(): this
      // Closes the overlay.
      // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
      // and `layer.closePopup()`/`.closeTooltip()`.
      close: function() {
        return this._map && this._map.removeLayer(this), this;
      },
      // @method toggle(layer?: Layer): this
      // Opens or closes the overlay bound to layer depending on its current state.
      // Argument may be omitted only for overlay bound to layer.
      // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
      toggle: function(t) {
        return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
      },
      onAdd: function(t) {
        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && Ut(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && Ut(this._container, 1), this.bringToFront(), this.options.interactive && (K(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function(t) {
        t._fadeAnimated ? (Ut(this._container, 0), this._removeTimeout = setTimeout(h(dt, void 0, this._container), 200)) : dt(this._container), this.options.interactive && (gt(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      },
      // @namespace DivOverlay
      // @method getLatLng: LatLng
      // Returns the geographical point of the overlay.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Sets the geographical point where the overlay will open.
      setLatLng: function(t) {
        return this._latlng = D(t), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      // @method getContent: String|HTMLElement
      // Returns the content of the overlay.
      getContent: function() {
        return this._content;
      },
      // @method setContent(htmlContent: String|HTMLElement|Function): this
      // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
      // The function should return a `String` or `HTMLElement` to be used in the overlay.
      setContent: function(t) {
        return this._content = t, this.update(), this;
      },
      // @method getElement: String|HTMLElement
      // Returns the HTML container of the overlay.
      getElement: function() {
        return this._container;
      },
      // @method update: null
      // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
      update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      },
      getEvents: function() {
        var t = {
          zoom: this._updatePosition,
          viewreset: this._updatePosition
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method isOpen: Boolean
      // Returns `true` when the overlay is visible on the map.
      isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      },
      // @method bringToFront: this
      // Brings this overlay in front of other overlays (in the same map pane).
      bringToFront: function() {
        return this._map && Le(this._container), this;
      },
      // @method bringToBack: this
      // Brings this overlay to the back of other overlays (in the same map pane).
      bringToBack: function() {
        return this._map && Pe(this._container), this;
      },
      // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
      _prepareOpen: function(t) {
        var e = this._source;
        if (!e._map)
          return !1;
        if (e instanceof ie) {
          e = null;
          var s = this._source._layers;
          for (var u in s)
            if (s[u]._map) {
              e = s[u];
              break;
            }
          if (!e)
            return !1;
          this._source = e;
        }
        if (!t)
          if (e.getCenter)
            t = e.getCenter();
          else if (e.getLatLng)
            t = e.getLatLng();
          else if (e.getBounds)
            t = e.getBounds().getCenter();
          else
            throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function() {
        if (this._content) {
          var t = this._contentNode, e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof e == "string")
            t.innerHTML = e;
          else {
            for (; t.hasChildNodes(); )
              t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function() {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng), e = M(this.options.offset), s = this._getAnchor();
          this._zoomAnimated ? yt(this._container, t.add(s)) : e = e.add(t).add(s);
          var u = this._containerBottom = -e.y, d = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
          this._container.style.bottom = u + "px", this._container.style.left = d + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    });
    it.include({
      _initOverlay: function(t, e, s, u) {
        var d = e;
        return d instanceof t || (d = new t(u).setContent(e)), s && d.setLatLng(s), d;
      }
    }), Xt.include({
      _initOverlay: function(t, e, s, u) {
        var d = s;
        return d instanceof t ? (w(d, u), d._source = this) : (d = e && !u ? e : new t(u, this), d.setContent(s)), d;
      }
    });
    var Oi = ee.extend({
      // @section
      // @aka Popup options
      options: {
        // @option pane: String = 'popupPane'
        // `Map pane` where the popup will be added.
        pane: "popupPane",
        // @option offset: Point = Point(0, 7)
        // The offset of the popup position.
        offset: [0, 7],
        // @option maxWidth: Number = 300
        // Max width of the popup, in pixels.
        maxWidth: 300,
        // @option minWidth: Number = 50
        // Min width of the popup, in pixels.
        minWidth: 50,
        // @option maxHeight: Number = null
        // If set, creates a scrollable container of the given height
        // inside a popup if its content exceeds it.
        // The scrollable container can be styled using the
        // `leaflet-popup-scrolled` CSS class selector.
        maxHeight: null,
        // @option autoPan: Boolean = true
        // Set it to `false` if you don't want the map to do panning animation
        // to fit the opened popup.
        autoPan: !0,
        // @option autoPanPaddingTopLeft: Point = null
        // The margin between the popup and the top left corner of the map
        // view after autopanning was performed.
        autoPanPaddingTopLeft: null,
        // @option autoPanPaddingBottomRight: Point = null
        // The margin between the popup and the bottom right corner of the map
        // view after autopanning was performed.
        autoPanPaddingBottomRight: null,
        // @option autoPanPadding: Point = Point(5, 5)
        // Equivalent of setting both top left and bottom right autopan padding to the same value.
        autoPanPadding: [5, 5],
        // @option keepInView: Boolean = false
        // Set it to `true` if you want to prevent users from panning the popup
        // off of the screen while it is open.
        keepInView: !1,
        // @option closeButton: Boolean = true
        // Controls the presence of a close button in the popup.
        closeButton: !0,
        // @option autoClose: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the popup closing when another popup is opened.
        autoClose: !0,
        // @option closeOnEscapeKey: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the ESC key for closing of the popup.
        closeOnEscapeKey: !0,
        // @option closeOnClick: Boolean = *
        // Set it if you want to override the default behavior of the popup closing when user clicks
        // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
        // @option className: String = ''
        // A custom CSS class name to assign to the popup.
        className: ""
      },
      // @namespace Popup
      // @method openOn(map: Map): this
      // Alternative to `map.openPopup(popup)`.
      // Adds the popup to the map and closes the previous one.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, ee.prototype.openOn.call(this, t);
      },
      onAdd: function(t) {
        ee.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof ue || this._source.on("preclick", me));
      },
      onRemove: function(t) {
        ee.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof ue || this._source.off("preclick", me));
      },
      getEvents: function() {
        var t = ee.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      },
      _initLayout: function() {
        var t = "leaflet-popup", e = this._container = ot(
          "div",
          t + " " + (this.options.className || "") + " leaflet-zoom-animated"
        ), s = this._wrapper = ot("div", t + "-content-wrapper", e);
        if (this._contentNode = ot("div", t + "-content", s), Ye(e), mn(this._contentNode), X(e, "contextmenu", me), this._tipContainer = ot("div", t + "-tip-container", e), this._tip = ot("div", t + "-tip", this._tipContainer), this.options.closeButton) {
          var u = this._closeButton = ot("a", t + "-close-button", e);
          u.setAttribute("role", "button"), u.setAttribute("aria-label", "Close popup"), u.href = "#close", u.innerHTML = '<span aria-hidden="true">&#215;</span>', X(u, "click", function(d) {
            Ct(d), this.close();
          }, this);
        }
      },
      _updateLayout: function() {
        var t = this._contentNode, e = t.style;
        e.width = "", e.whiteSpace = "nowrap";
        var s = t.offsetWidth;
        s = Math.min(s, this.options.maxWidth), s = Math.max(s, this.options.minWidth), e.width = s + 1 + "px", e.whiteSpace = "", e.height = "";
        var u = t.offsetHeight, d = this.options.maxHeight, g = "leaflet-popup-scrolled";
        d && u > d ? (e.height = d + "px", K(t, g)) : gt(t, g), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), s = this._getAnchor();
        yt(this._container, e.add(s));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = !1;
            return;
          }
          var t = this._map, e = parseInt(Ue(this._container, "marginBottom"), 10) || 0, s = this._container.offsetHeight + e, u = this._containerWidth, d = new j(this._containerLeft, -s - this._containerBottom);
          d._add(_e(this._container));
          var g = t.layerPointToContainerPoint(d), x = M(this.options.autoPanPadding), b = M(this.options.autoPanPaddingTopLeft || x), T = M(this.options.autoPanPaddingBottomRight || x), E = t.getSize(), R = 0, Y = 0;
          g.x + u + T.x > E.x && (R = g.x + u - E.x + T.x), g.x - R - b.x < 0 && (R = g.x - b.x), g.y + s + T.y > E.y && (Y = g.y + s - E.y + T.y), g.y - Y - b.y < 0 && (Y = g.y - b.y), (R || Y) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([R, Y]));
        }
      },
      _getAnchor: function() {
        return M(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), El = function(t, e) {
      return new Oi(t, e);
    };
    it.mergeOptions({
      closePopupOnClick: !0
    }), it.include({
      // @method openPopup(popup: Popup): this
      // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
      // @alternative
      // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
      // Creates a popup with the specified content and options and opens it in the given point on a map.
      openPopup: function(t, e, s) {
        return this._initOverlay(Oi, t, e, s).openOn(this), this;
      },
      // @method closePopup(popup?: Popup): this
      // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
      closePopup: function(t) {
        return t = arguments.length ? t : this._popup, t && t.close(), this;
      }
    }), Xt.include({
      // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
      // Binds a popup to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindPopup: function(t, e) {
        return this._popup = this._initOverlay(Oi, this._popup, t, e), this._popupHandlersAdded || (this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !0), this;
      },
      // @method unbindPopup(): this
      // Removes the popup previously bound with `bindPopup`.
      unbindPopup: function() {
        return this._popup && (this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !1, this._popup = null), this;
      },
      // @method openPopup(latlng?: LatLng): this
      // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
      openPopup: function(t) {
        return this._popup && (this instanceof ie || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
      },
      // @method closePopup(): this
      // Closes the popup bound to this layer if it is open.
      closePopup: function() {
        return this._popup && this._popup.close(), this;
      },
      // @method togglePopup(): this
      // Opens or closes the popup bound to this layer depending on its current state.
      togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      },
      // @method isPopupOpen(): boolean
      // Returns `true` if the popup bound to this layer is currently open.
      isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : !1;
      },
      // @method setPopupContent(content: String|HTMLElement|Popup): this
      // Sets the content of the popup bound to this layer.
      setPopupContent: function(t) {
        return this._popup && this._popup.setContent(t), this;
      },
      // @method getPopup(): Popup
      // Returns the popup bound to this layer.
      getPopup: function() {
        return this._popup;
      },
      _openPopup: function(t) {
        if (!(!this._popup || !this._map)) {
          pe(t);
          var e = t.layer || t.target;
          if (this._popup._source === e && !(e instanceof ue)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
            return;
          }
          this._popup._source = e, this.openPopup(t.latlng);
        }
      },
      _movePopup: function(t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function(t) {
        t.originalEvent.keyCode === 13 && this._openPopup(t);
      }
    });
    var Ii = ee.extend({
      // @section
      // @aka Tooltip options
      options: {
        // @option pane: String = 'tooltipPane'
        // `Map pane` where the tooltip will be added.
        pane: "tooltipPane",
        // @option offset: Point = Point(0, 0)
        // Optional offset of the tooltip position.
        offset: [0, 0],
        // @option direction: String = 'auto'
        // Direction where to open the tooltip. Possible values are: `right`, `left`,
        // `top`, `bottom`, `center`, `auto`.
        // `auto` will dynamically switch between `right` and `left` according to the tooltip
        // position on the map.
        direction: "auto",
        // @option permanent: Boolean = false
        // Whether to open the tooltip permanently or only on mouseover.
        permanent: !1,
        // @option sticky: Boolean = false
        // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
        sticky: !1,
        // @option opacity: Number = 0.9
        // Tooltip container opacity.
        opacity: 0.9
      },
      onAdd: function(t) {
        ee.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      },
      onRemove: function(t) {
        ee.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      },
      getEvents: function() {
        var t = ee.prototype.getEvents.call(this);
        return this.options.permanent || (t.preclick = this.close), t;
      },
      _initLayout: function() {
        var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = ot("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + f(this));
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(t) {
        var e, s, u = this._map, d = this._container, g = u.latLngToContainerPoint(u.getCenter()), x = u.layerPointToContainerPoint(t), b = this.options.direction, T = d.offsetWidth, E = d.offsetHeight, R = M(this.options.offset), Y = this._getAnchor();
        b === "top" ? (e = T / 2, s = E) : b === "bottom" ? (e = T / 2, s = 0) : b === "center" ? (e = T / 2, s = E / 2) : b === "right" ? (e = 0, s = E / 2) : b === "left" ? (e = T, s = E / 2) : x.x < g.x ? (b = "right", e = 0, s = E / 2) : (b = "left", e = T + (R.x + Y.x) * 2, s = E / 2), t = t.subtract(M(e, s, !0)).add(R).add(Y), gt(d, "leaflet-tooltip-right"), gt(d, "leaflet-tooltip-left"), gt(d, "leaflet-tooltip-top"), gt(d, "leaflet-tooltip-bottom"), K(d, "leaflet-tooltip-" + b), yt(d, t);
      },
      _updatePosition: function() {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      },
      setOpacity: function(t) {
        this.options.opacity = t, this._container && Ut(this._container, t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
        this._setPosition(e);
      },
      _getAnchor: function() {
        return M(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), Ol = function(t, e) {
      return new Ii(t, e);
    };
    it.include({
      // @method openTooltip(tooltip: Tooltip): this
      // Opens the specified tooltip.
      // @alternative
      // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
      // Creates a tooltip with the specified content and options and open it.
      openTooltip: function(t, e, s) {
        return this._initOverlay(Ii, t, e, s).openOn(this), this;
      },
      // @method closeTooltip(tooltip: Tooltip): this
      // Closes the tooltip given as parameter.
      closeTooltip: function(t) {
        return t.close(), this;
      }
    }), Xt.include({
      // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
      // Binds a tooltip to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindTooltip: function(t, e) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ii, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      // @method unbindTooltip(): this
      // Removes the tooltip previously bound with `bindTooltip`.
      unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function(t) {
        if (!(!t && this._tooltipHandlersAdded)) {
          var e = t ? "off" : "on", s = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
          this._tooltip.options.permanent ? s.add = this._openTooltip : (s.mouseover = this._openTooltip, s.mouseout = this.closeTooltip, s.click = this._openTooltip, this._map ? this._addFocusListeners() : s.add = this._addFocusListeners), this._tooltip.options.sticky && (s.mousemove = this._moveTooltip), this[e](s), this._tooltipHandlersAdded = !t;
        }
      },
      // @method openTooltip(latlng?: LatLng): this
      // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
      openTooltip: function(t) {
        return this._tooltip && (this instanceof ie || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      },
      // @method closeTooltip(): this
      // Closes the tooltip bound to this layer if it is open.
      closeTooltip: function() {
        if (this._tooltip)
          return this._tooltip.close();
      },
      // @method toggleTooltip(): this
      // Opens or closes the tooltip bound to this layer depending on its current state.
      toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      // @method isTooltipOpen(): boolean
      // Returns `true` if the tooltip bound to this layer is currently open.
      isTooltipOpen: function() {
        return this._tooltip.isOpen();
      },
      // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
      // Sets the content of the tooltip bound to this layer.
      setTooltipContent: function(t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      // @method getTooltip(): Tooltip
      // Returns the tooltip bound to this layer.
      getTooltip: function() {
        return this._tooltip;
      },
      _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && (X(e, "focus", function() {
          this._tooltip._source = t, this.openTooltip();
        }, this), X(e, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && e.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function(t) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = !0;
            var e = this;
            this._map.once("moveend", function() {
              e._openOnceFlag = !1, e._openTooltip(t);
            });
            return;
          }
          this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
        }
      },
      _moveTooltip: function(t) {
        var e = t.latlng, s, u;
        this._tooltip.options.sticky && t.originalEvent && (s = this._map.mouseEventToContainerPoint(t.originalEvent), u = this._map.containerPointToLayerPoint(s), e = this._map.layerPointToLatLng(u)), this._tooltip.setLatLng(e);
      }
    });
    var oo = Te.extend({
      options: {
        // @section
        // @aka DivIcon options
        iconSize: [12, 12],
        // also can be set through CSS
        // iconAnchor: (Point),
        // popupAnchor: (Point),
        // @option html: String|HTMLElement = ''
        // Custom HTML code to put inside the div element, empty by default. Alternatively,
        // an instance of `HTMLElement`.
        html: !1,
        // @option bgPos: Point = [0, 0]
        // Optional relative position of the background, in pixels
        bgPos: null,
        className: "leaflet-div-icon"
      },
      createIcon: function(t) {
        var e = t && t.tagName === "DIV" ? t : document.createElement("div"), s = this.options;
        if (s.html instanceof Element ? (yi(e), e.appendChild(s.html)) : e.innerHTML = s.html !== !1 ? s.html : "", s.bgPos) {
          var u = M(s.bgPos);
          e.style.backgroundPosition = -u.x + "px " + -u.y + "px";
        }
        return this._setIconStyles(e, "icon"), e;
      },
      createShadow: function() {
        return null;
      }
    });
    function Il(t) {
      return new oo(t);
    }
    Te.Default = Xe;
    var $e = Xt.extend({
      // @section
      // @aka GridLayer options
      options: {
        // @option tileSize: Number|Point = 256
        // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
        tileSize: 256,
        // @option opacity: Number = 1.0
        // Opacity of the tiles. Can be used in the `createTile()` function.
        opacity: 1,
        // @option updateWhenIdle: Boolean = (depends)
        // Load new tiles only when panning ends.
        // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
        // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
        // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
        updateWhenIdle: V.mobile,
        // @option updateWhenZooming: Boolean = true
        // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
        updateWhenZooming: !0,
        // @option updateInterval: Number = 200
        // Tiles will not update more than once every `updateInterval` milliseconds when panning.
        updateInterval: 200,
        // @option zIndex: Number = 1
        // The explicit zIndex of the tile layer.
        zIndex: 1,
        // @option bounds: LatLngBounds = undefined
        // If set, tiles will only be loaded inside the set `LatLngBounds`.
        bounds: null,
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = undefined
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: void 0,
        // @option maxNativeZoom: Number = undefined
        // Maximum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
        // from `maxNativeZoom` level and auto-scaled.
        maxNativeZoom: void 0,
        // @option minNativeZoom: Number = undefined
        // Minimum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
        // from `minNativeZoom` level and auto-scaled.
        minNativeZoom: void 0,
        // @option noWrap: Boolean = false
        // Whether the layer is wrapped around the antimeridian. If `true`, the
        // GridLayer will only be displayed once at low zoom levels. Has no
        // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
        // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
        // tiles outside the CRS limits.
        noWrap: !1,
        // @option pane: String = 'tilePane'
        // `Map pane` where the grid layer will be added.
        pane: "tilePane",
        // @option className: String = ''
        // A custom class name to assign to the tile layer. Empty by default.
        className: "",
        // @option keepBuffer: Number = 2
        // When panning the map, keep this many rows and columns of tiles before unloading them.
        keepBuffer: 2
      },
      initialize: function(t) {
        w(this, t);
      },
      onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      },
      beforeAdd: function(t) {
        t._addZoomLimit(this);
      },
      onRemove: function(t) {
        this._removeAllTiles(), dt(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      // @method bringToFront: this
      // Brings the tile layer to the top of all tile layers.
      bringToFront: function() {
        return this._map && (Le(this._container), this._setAutoZIndex(Math.max)), this;
      },
      // @method bringToBack: this
      // Brings the tile layer to the bottom of all tile layers.
      bringToBack: function() {
        return this._map && (Pe(this._container), this._setAutoZIndex(Math.min)), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the tiles for this layer.
      getContainer: function() {
        return this._container;
      },
      // @method setOpacity(opacity: Number): this
      // Changes the [opacity](#gridlayer-opacity) of the grid layer.
      setOpacity: function(t) {
        return this.options.opacity = t, this._updateOpacity(), this;
      },
      // @method setZIndex(zIndex: Number): this
      // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method isLoading: Boolean
      // Returns `true` if any tile in the grid layer has not finished loading.
      isLoading: function() {
        return this._loading;
      },
      // @method redraw: this
      // Causes the layer to clear all the tiles and request them again.
      redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var t = this._clampZoom(this._map.getZoom());
          t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
        }
        return this;
      },
      getEvents: function() {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd
        };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = _(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @section Extension methods
      // Layers extending `GridLayer` shall reimplement the following method.
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, must be overridden by classes extending `GridLayer`.
      // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
      // is specified, it must be called when the tile has finished loading and drawing.
      createTile: function() {
        return document.createElement("div");
      },
      // @section
      // @method getTileSize: Point
      // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
      getTileSize: function() {
        var t = this.options.tileSize;
        return t instanceof j ? t : new j(t, t);
      },
      _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(t) {
        for (var e = this.getPane().children, s = -t(-1 / 0, 1 / 0), u = 0, d = e.length, g; u < d; u++)
          g = e[u].style.zIndex, e[u] !== this._container && g && (s = t(s, +g));
        isFinite(s) && (this.options.zIndex = s + t(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !V.ielt9) {
          Ut(this._container, this.options.opacity);
          var t = +/* @__PURE__ */ new Date(), e = !1, s = !1;
          for (var u in this._tiles) {
            var d = this._tiles[u];
            if (!(!d.current || !d.loaded)) {
              var g = Math.min(1, (t - d.loaded) / 200);
              Ut(d.el, g), g < 1 ? e = !0 : (d.active ? s = !0 : this._onOpaqueTile(d), d.active = !0);
            }
          }
          s && !this._noPrune && this._pruneTiles(), e && (Lt(this._fadeFrame), this._fadeFrame = _t(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: p,
      _initContainer: function() {
        this._container || (this._container = ot("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var t = this._tileZoom, e = this.options.maxZoom;
        if (t !== void 0) {
          for (var s in this._levels)
            s = Number(s), this._levels[s].el.children.length || s === t ? (this._levels[s].el.style.zIndex = e - Math.abs(t - s), this._onUpdateLevel(s)) : (dt(this._levels[s].el), this._removeTilesAtZoom(s), this._onRemoveLevel(s), delete this._levels[s]);
          var u = this._levels[t], d = this._map;
          return u || (u = this._levels[t] = {}, u.el = ot("div", "leaflet-tile-container leaflet-zoom-animated", this._container), u.el.style.zIndex = e, u.origin = d.project(d.unproject(d.getPixelOrigin()), t).round(), u.zoom = t, this._setZoomTransform(u, d.getCenter(), d.getZoom()), p(u.el.offsetWidth), this._onCreateLevel(u)), this._level = u, u;
        }
      },
      _onUpdateLevel: p,
      _onRemoveLevel: p,
      _onCreateLevel: p,
      _pruneTiles: function() {
        if (this._map) {
          var t, e, s = this._map.getZoom();
          if (s > this.options.maxZoom || s < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (t in this._tiles)
            e = this._tiles[t], e.retain = e.current;
          for (t in this._tiles)
            if (e = this._tiles[t], e.current && !e.active) {
              var u = e.coords;
              this._retainParent(u.x, u.y, u.z, u.z - 5) || this._retainChildren(u.x, u.y, u.z, u.z + 2);
            }
          for (t in this._tiles)
            this._tiles[t].retain || this._removeTile(t);
        }
      },
      _removeTilesAtZoom: function(t) {
        for (var e in this._tiles)
          this._tiles[e].coords.z === t && this._removeTile(e);
      },
      _removeAllTiles: function() {
        for (var t in this._tiles)
          this._removeTile(t);
      },
      _invalidateAll: function() {
        for (var t in this._levels)
          dt(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
        this._removeAllTiles(), this._tileZoom = void 0;
      },
      _retainParent: function(t, e, s, u) {
        var d = Math.floor(t / 2), g = Math.floor(e / 2), x = s - 1, b = new j(+d, +g);
        b.z = +x;
        var T = this._tileCoordsToKey(b), E = this._tiles[T];
        return E && E.active ? (E.retain = !0, !0) : (E && E.loaded && (E.retain = !0), x > u ? this._retainParent(d, g, x, u) : !1);
      },
      _retainChildren: function(t, e, s, u) {
        for (var d = 2 * t; d < 2 * t + 2; d++)
          for (var g = 2 * e; g < 2 * e + 2; g++) {
            var x = new j(d, g);
            x.z = s + 1;
            var b = this._tileCoordsToKey(x), T = this._tiles[b];
            if (T && T.active) {
              T.retain = !0;
              continue;
            } else T && T.loaded && (T.retain = !0);
            s + 1 < u && this._retainChildren(d, g, s + 1, u);
          }
      },
      _resetView: function(t) {
        var e = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
      },
      _animateZoom: function(t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function(t) {
        var e = this.options;
        return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t;
      },
      _setView: function(t, e, s, u) {
        var d = Math.round(e);
        this.options.maxZoom !== void 0 && d > this.options.maxZoom || this.options.minZoom !== void 0 && d < this.options.minZoom ? d = void 0 : d = this._clampZoom(d);
        var g = this.options.updateWhenZooming && d !== this._tileZoom;
        (!u || g) && (this._tileZoom = d, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), d !== void 0 && this._update(t), s || this._pruneTiles(), this._noPrune = !!s), this._setZoomTransforms(t, e);
      },
      _setZoomTransforms: function(t, e) {
        for (var s in this._levels)
          this._setZoomTransform(this._levels[s], t, e);
      },
      _setZoomTransform: function(t, e, s) {
        var u = this._map.getZoomScale(s, t.zoom), d = t.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(e, s)).round();
        V.any3d ? de(t.el, d, u) : yt(t.el, d);
      },
      _resetGrid: function() {
        var t = this._map, e = t.options.crs, s = this._tileSize = this.getTileSize(), u = this._tileZoom, d = this._map.getPixelWorldBounds(this._tileZoom);
        d && (this._globalTileRange = this._pxBoundsToTileRange(d)), this._wrapX = e.wrapLng && !this.options.noWrap && [
          Math.floor(t.project([0, e.wrapLng[0]], u).x / s.x),
          Math.ceil(t.project([0, e.wrapLng[1]], u).x / s.y)
        ], this._wrapY = e.wrapLat && !this.options.noWrap && [
          Math.floor(t.project([e.wrapLat[0], 0], u).y / s.x),
          Math.ceil(t.project([e.wrapLat[1], 0], u).y / s.y)
        ];
      },
      _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function(t) {
        var e = this._map, s = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), u = e.getZoomScale(s, this._tileZoom), d = e.project(t, this._tileZoom).floor(), g = e.getSize().divideBy(u * 2);
        return new B(d.subtract(g), d.add(g));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(t) {
        var e = this._map;
        if (e) {
          var s = this._clampZoom(e.getZoom());
          if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
            var u = this._getTiledPixelBounds(t), d = this._pxBoundsToTileRange(u), g = d.getCenter(), x = [], b = this.options.keepBuffer, T = new B(
              d.getBottomLeft().subtract([b, -b]),
              d.getTopRight().add([b, -b])
            );
            if (!(isFinite(d.min.x) && isFinite(d.min.y) && isFinite(d.max.x) && isFinite(d.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var E in this._tiles) {
              var R = this._tiles[E].coords;
              (R.z !== this._tileZoom || !T.contains(new j(R.x, R.y))) && (this._tiles[E].current = !1);
            }
            if (Math.abs(s - this._tileZoom) > 1) {
              this._setView(t, s);
              return;
            }
            for (var Y = d.min.y; Y <= d.max.y; Y++)
              for (var Q = d.min.x; Q <= d.max.x; Q++) {
                var zt = new j(Q, Y);
                if (zt.z = this._tileZoom, !!this._isValidTile(zt)) {
                  var Pt = this._tiles[this._tileCoordsToKey(zt)];
                  Pt ? Pt.current = !0 : x.push(zt);
                }
              }
            if (x.sort(function(It, ze) {
              return It.distanceTo(g) - ze.distanceTo(g);
            }), x.length !== 0) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var Ht = document.createDocumentFragment();
              for (Q = 0; Q < x.length; Q++)
                this._addTile(x[Q], Ht);
              this._level.el.appendChild(Ht);
            }
          }
        }
      },
      _isValidTile: function(t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var s = this._globalTileRange;
          if (!e.wrapLng && (t.x < s.min.x || t.x > s.max.x) || !e.wrapLat && (t.y < s.min.y || t.y > s.max.y))
            return !1;
        }
        if (!this.options.bounds)
          return !0;
        var u = this._tileCoordsToBounds(t);
        return N(this.options.bounds).overlaps(u);
      },
      _keyToBounds: function(t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function(t) {
        var e = this._map, s = this.getTileSize(), u = t.scaleBy(s), d = u.add(s), g = e.unproject(u, t.z), x = e.unproject(d, t.z);
        return [g, x];
      },
      // converts tile coordinates to its geographical bounds
      _tileCoordsToBounds: function(t) {
        var e = this._tileCoordsToNwSe(t), s = new H(e[0], e[1]);
        return this.options.noWrap || (s = this._map.wrapLatLngBounds(s)), s;
      },
      // converts tile coordinates to key for the tile cache
      _tileCoordsToKey: function(t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      // converts tile cache key to coordinates
      _keyToTileCoords: function(t) {
        var e = t.split(":"), s = new j(+e[0], +e[1]);
        return s.z = +e[2], s;
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        e && (dt(e.el), delete this._tiles[t], this.fire("tileunload", {
          tile: e.el,
          coords: this._keyToTileCoords(t)
        }));
      },
      _initTile: function(t) {
        K(t, "leaflet-tile");
        var e = this.getTileSize();
        t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = p, t.onmousemove = p, V.ielt9 && this.options.opacity < 1 && Ut(t, this.options.opacity);
      },
      _addTile: function(t, e) {
        var s = this._getTilePos(t), u = this._tileCoordsToKey(t), d = this.createTile(this._wrapCoords(t), h(this._tileReady, this, t));
        this._initTile(d), this.createTile.length < 2 && _t(h(this._tileReady, this, t, null, d)), yt(d, s), this._tiles[u] = {
          el: d,
          coords: t,
          current: !0
        }, e.appendChild(d), this.fire("tileloadstart", {
          tile: d,
          coords: t
        });
      },
      _tileReady: function(t, e, s) {
        e && this.fire("tileerror", {
          error: e,
          tile: s,
          coords: t
        });
        var u = this._tileCoordsToKey(t);
        s = this._tiles[u], s && (s.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Ut(s.el, 0), Lt(this._fadeFrame), this._fadeFrame = _t(this._updateOpacity, this)) : (s.active = !0, this._pruneTiles()), e || (K(s.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: s.el,
          coords: t
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), V.ielt9 || !this._map._fadeAnimated ? _t(this._pruneTiles, this) : setTimeout(h(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(t) {
        var e = new j(
          this._wrapX ? m(t.x, this._wrapX) : t.x,
          this._wrapY ? m(t.y, this._wrapY) : t.y
        );
        return e.z = t.z, e;
      },
      _pxBoundsToTileRange: function(t) {
        var e = this.getTileSize();
        return new B(
          t.min.unscaleBy(e).floor(),
          t.max.unscaleBy(e).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function() {
        for (var t in this._tiles)
          if (!this._tiles[t].loaded)
            return !1;
        return !0;
      }
    });
    function Bl(t) {
      return new $e(t);
    }
    var Se = $e.extend({
      // @section
      // @aka TileLayer options
      options: {
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = 18
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: 18,
        // @option subdomains: String|String[] = 'abc'
        // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
        subdomains: "abc",
        // @option errorTileUrl: String = ''
        // URL to the tile image to show in place of the tile that failed to load.
        errorTileUrl: "",
        // @option zoomOffset: Number = 0
        // The zoom number used in tile URLs will be offset with this value.
        zoomOffset: 0,
        // @option tms: Boolean = false
        // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
        tms: !1,
        // @option zoomReverse: Boolean = false
        // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
        zoomReverse: !1,
        // @option detectRetina: Boolean = false
        // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
        detectRetina: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option referrerPolicy: Boolean|String = false
        // Whether the referrerPolicy attribute will be added to the tiles.
        // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
        // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
        // (e.g. to validate an API token).
        // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
        referrerPolicy: !1
      },
      initialize: function(t, e) {
        this._url = t, e = w(this, e), e.detectRetina && V.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      },
      // @method setUrl(url: String, noRedraw?: Boolean): this
      // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
      // If the URL does not change, the layer will not be redrawn unless
      // the noRedraw parameter is set to false.
      setUrl: function(t, e) {
        return this._url === t && e === void 0 && (e = !0), this._url = t, e || this.redraw(), this;
      },
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
      // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
      // callback is called when the tile has been loaded.
      createTile: function(t, e) {
        var s = document.createElement("img");
        return X(s, "load", h(this._tileOnLoad, this, e, s)), X(s, "error", h(this._tileOnError, this, e, s)), (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (s.referrerPolicy = this.options.referrerPolicy), s.alt = "", s.src = this.getTileUrl(t), s;
      },
      // @section Extension methods
      // @uninheritable
      // Layers extending `TileLayer` might reimplement the following method.
      // @method getTileUrl(coords: Object): String
      // Called only internally, returns the URL for a tile given its coordinates.
      // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
      getTileUrl: function(t) {
        var e = {
          r: V.retina ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var s = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = s), e["-y"] = s;
        }
        return I(this._url, l(e, this.options));
      },
      _tileOnLoad: function(t, e) {
        V.ielt9 ? setTimeout(h(t, this, null, e), 0) : t(null, e);
      },
      _tileOnError: function(t, e, s) {
        var u = this.options.errorTileUrl;
        u && e.getAttribute("src") !== u && (e.src = u), t(s, e);
      },
      _onTileRemove: function(t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var t = this._tileZoom, e = this.options.maxZoom, s = this.options.zoomReverse, u = this.options.zoomOffset;
        return s && (t = e - t), t + u;
      },
      _getSubdomain: function(t) {
        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[e];
      },
      // stops loading all tiles in the background layer
      _abortLoading: function() {
        var t, e;
        for (t in this._tiles)
          if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = p, e.onerror = p, !e.complete)) {
            e.src = S;
            var s = this._tiles[t].coords;
            dt(e), delete this._tiles[t], this.fire("tileabort", {
              tile: e,
              coords: s
            });
          }
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        if (e)
          return e.el.setAttribute("src", S), $e.prototype._removeTile.call(this, t);
      },
      _tileReady: function(t, e, s) {
        if (!(!this._map || s && s.getAttribute("src") === S))
          return $e.prototype._tileReady.call(this, t, e, s);
      }
    });
    function so(t, e) {
      return new Se(t, e);
    }
    var ao = Se.extend({
      // @section
      // @aka TileLayer.WMS options
      // If any custom options not documented here are used, they will be sent to the
      // WMS server as extra parameters in each request URL. This can be useful for
      // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        // @option layers: String = ''
        // **(required)** Comma-separated list of WMS layers to show.
        layers: "",
        // @option styles: String = ''
        // Comma-separated list of WMS styles.
        styles: "",
        // @option format: String = 'image/jpeg'
        // WMS image format (use `'image/png'` for layers with transparency).
        format: "image/jpeg",
        // @option transparent: Boolean = false
        // If `true`, the WMS service will return images with transparency.
        transparent: !1,
        // @option version: String = '1.1.1'
        // Version of the WMS service to use
        version: "1.1.1"
      },
      options: {
        // @option crs: CRS = null
        // Coordinate Reference System to use for the WMS requests, defaults to
        // map CRS. Don't change this if you're not sure what it means.
        crs: null,
        // @option uppercase: Boolean = false
        // If `true`, WMS request parameter keys will be uppercase.
        uppercase: !1
      },
      initialize: function(t, e) {
        this._url = t;
        var s = l({}, this.defaultWmsParams);
        for (var u in e)
          u in this.options || (s[u] = e[u]);
        e = w(this, e);
        var d = e.detectRetina && V.retina ? 2 : 1, g = this.getTileSize();
        s.width = g.x * d, s.height = g.y * d, this.wmsParams = s;
      },
      onAdd: function(t) {
        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[e] = this._crs.code, Se.prototype.onAdd.call(this, t);
      },
      getTileUrl: function(t) {
        var e = this._tileCoordsToNwSe(t), s = this._crs, u = U(s.project(e[0]), s.project(e[1])), d = u.min, g = u.max, x = (this._wmsVersion >= 1.3 && this._crs === Qr ? [d.y, d.x, g.y, g.x] : [d.x, d.y, g.x, g.y]).join(","), b = Se.prototype.getTileUrl.call(this, t);
        return b + z(this.wmsParams, b, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + x;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(t, e) {
        return l(this.wmsParams, t), e || this.redraw(), this;
      }
    });
    function Al(t, e) {
      return new ao(t, e);
    }
    Se.WMS = ao, so.wms = Al;
    var oe = Xt.extend({
      // @section
      // @aka Renderer options
      options: {
        // @option padding: Number = 0.1
        // How much to extend the clip area around the map view (relative to its size)
        // e.g. 0.1 would be 10% of map view in each direction
        padding: 0.1
      },
      initialize: function(t) {
        w(this, t), f(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), K(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      },
      onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function() {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function(t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function(t, e) {
        var s = this._map.getZoomScale(e, this._zoom), u = this._map.getSize().multiplyBy(0.5 + this.options.padding), d = this._map.project(this._center, e), g = u.multiplyBy(-s).add(d).subtract(this._map._getNewPixelOrigin(t, e));
        V.any3d ? de(this._container, g, s) : yt(this._container, g);
      },
      _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var t in this._layers)
          this._layers[t]._reset();
      },
      _onZoomEnd: function() {
        for (var t in this._layers)
          this._layers[t]._project();
      },
      _updatePaths: function() {
        for (var t in this._layers)
          this._layers[t]._update();
      },
      _update: function() {
        var t = this.options.padding, e = this._map.getSize(), s = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
        this._bounds = new B(s, s.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), lo = oe.extend({
      // @section
      // @aka Canvas options
      options: {
        // @option tolerance: Number = 0
        // How much to extend the click tolerance around a path/object on the map.
        tolerance: 0
      },
      getEvents: function() {
        var t = oe.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset, t;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        oe.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var t = this._container = document.createElement("canvas");
        X(t, "mousemove", this._onMouseMove, this), X(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), X(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
      },
      _destroyContainer: function() {
        Lt(this._redrawRequest), delete this._ctx, dt(this._container), ct(this._container), delete this._container;
      },
      _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var t;
          this._redrawBounds = null;
          for (var e in this._layers)
            t = this._layers[e], t._update();
          this._redraw();
        }
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          oe.prototype._update.call(this);
          var t = this._bounds, e = this._container, s = t.getSize(), u = V.retina ? 2 : 1;
          yt(e, t.min), e.width = u * s.x, e.height = u * s.y, e.style.width = s.x + "px", e.style.height = s.y + "px", V.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
        }
      },
      _reset: function() {
        oe.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function(t) {
        this._updateDashArray(t), this._layers[f(t)] = t;
        var e = t._order = {
          layer: t,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function(t) {
        this._requestRedraw(t);
      },
      _removePath: function(t) {
        var e = t._order, s = e.next, u = e.prev;
        s ? s.prev = u : this._drawLast = u, u ? u.next = s : this._drawFirst = s, delete t._order, delete this._layers[f(t)], this._requestRedraw(t);
      },
      _updatePath: function(t) {
        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
      },
      _updateStyle: function(t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function(t) {
        if (typeof t.options.dashArray == "string") {
          var e = t.options.dashArray.split(/[, ]+/), s = [], u, d;
          for (d = 0; d < e.length; d++) {
            if (u = Number(e[d]), isNaN(u))
              return;
            s.push(u);
          }
          t.options._dashArray = s;
        } else
          t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function(t) {
        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || _t(this._redraw, this));
      },
      _extendRedrawBounds: function(t) {
        if (t._pxBounds) {
          var e = (t.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new B(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
        }
      },
      _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function() {
        var t = this._redrawBounds;
        if (t) {
          var e = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
        } else
          this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      },
      _draw: function() {
        var t, e = this._redrawBounds;
        if (this._ctx.save(), e) {
          var s = e.getSize();
          this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, s.x, s.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var u = this._drawFirst; u; u = u.next)
          t = u.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function(t, e) {
        if (this._drawing) {
          var s, u, d, g, x = t._parts, b = x.length, T = this._ctx;
          if (b) {
            for (T.beginPath(), s = 0; s < b; s++) {
              for (u = 0, d = x[s].length; u < d; u++)
                g = x[s][u], T[u ? "lineTo" : "moveTo"](g.x, g.y);
              e && T.closePath();
            }
            this._fillStroke(T, t);
          }
        }
      },
      _updateCircle: function(t) {
        if (!(!this._drawing || t._empty())) {
          var e = t._point, s = this._ctx, u = Math.max(Math.round(t._radius), 1), d = (Math.max(Math.round(t._radiusY), 1) || u) / u;
          d !== 1 && (s.save(), s.scale(1, d)), s.beginPath(), s.arc(e.x, e.y / d, u, 0, Math.PI * 2, !1), d !== 1 && s.restore(), this._fillStroke(s, t);
        }
      },
      _fillStroke: function(t, e) {
        var s = e.options;
        s.fill && (t.globalAlpha = s.fillOpacity, t.fillStyle = s.fillColor || s.color, t.fill(s.fillRule || "evenodd")), s.stroke && s.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = s.opacity, t.lineWidth = s.weight, t.strokeStyle = s.color, t.lineCap = s.lineCap, t.lineJoin = s.lineJoin, t.stroke());
      },
      // Canvas obviously doesn't have mouse events for individual drawn objects,
      // so we emulate that by calculating what's under the mouse on mousemove/click manually
      _onClick: function(t) {
        for (var e = this._map.mouseEventToLayerPoint(t), s, u, d = this._drawFirst; d; d = d.next)
          s = d.layer, s.options.interactive && s._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(s)) && (u = s);
        this._fireEvent(u ? [u] : !1, t);
      },
      _onMouseMove: function(t) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var e = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, e);
        }
      },
      _handleMouseOut: function(t) {
        var e = this._hoveredLayer;
        e && (gt(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(t, e) {
        if (!this._mouseHoverThrottled) {
          for (var s, u, d = this._drawFirst; d; d = d.next)
            s = d.layer, s.options.interactive && s._containsPoint(e) && (u = s);
          u !== this._hoveredLayer && (this._handleMouseOut(t), u && (K(this._container, "leaflet-interactive"), this._fireEvent([u], t, "mouseover"), this._hoveredLayer = u)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(h(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function(t, e, s) {
        this._map._fireDOMEvent(e, s || e.type, t);
      },
      _bringToFront: function(t) {
        var e = t._order;
        if (e) {
          var s = e.next, u = e.prev;
          if (s)
            s.prev = u;
          else
            return;
          u ? u.next = s : s && (this._drawFirst = s), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t);
        }
      },
      _bringToBack: function(t) {
        var e = t._order;
        if (e) {
          var s = e.next, u = e.prev;
          if (u)
            u.next = s;
          else
            return;
          s ? s.prev = u : u && (this._drawLast = u), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t);
        }
      }
    });
    function ho(t) {
      return V.canvas ? new lo(t) : null;
    }
    var Ke = function() {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
          return document.createElement("<lvml:" + t + ' class="lvml">');
        };
      } catch {
      }
      return function(t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }(), Zl = {
      _initContainer: function() {
        this._container = ot("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (oe.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(t) {
        var e = t._container = Ke("shape");
        K(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = Ke("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[f(t)] = t;
      },
      _addPath: function(t) {
        var e = t._container;
        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
      },
      _removePath: function(t) {
        var e = t._container;
        dt(e), t.removeInteractiveTarget(e), delete this._layers[f(t)];
      },
      _updateStyle: function(t) {
        var e = t._stroke, s = t._fill, u = t.options, d = t._container;
        d.stroked = !!u.stroke, d.filled = !!u.fill, u.stroke ? (e || (e = t._stroke = Ke("stroke")), d.appendChild(e), e.weight = u.weight + "px", e.color = u.color, e.opacity = u.opacity, u.dashArray ? e.dashStyle = A(u.dashArray) ? u.dashArray.join(" ") : u.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = u.lineCap.replace("butt", "flat"), e.joinstyle = u.lineJoin) : e && (d.removeChild(e), t._stroke = null), u.fill ? (s || (s = t._fill = Ke("fill")), d.appendChild(s), s.color = u.fillColor || u.color, s.opacity = u.fillOpacity) : s && (d.removeChild(s), t._fill = null);
      },
      _updateCircle: function(t) {
        var e = t._point.round(), s = Math.round(t._radius), u = Math.round(t._radiusY || s);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + s + "," + u + " 0," + 65535 * 360);
      },
      _setPath: function(t, e) {
        t._path.v = e;
      },
      _bringToFront: function(t) {
        Le(t._container);
      },
      _bringToBack: function(t) {
        Pe(t._container);
      }
    }, Bi = V.vml ? Ke : Ne, Je = oe.extend({
      _initContainer: function() {
        this._container = Bi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Bi("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        dt(this._container), ct(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          oe.prototype._update.call(this);
          var t = this._bounds, e = t.getSize(), s = this._container;
          (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, s.setAttribute("width", e.x), s.setAttribute("height", e.y)), yt(s, t.min), s.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
        }
      },
      // methods below are called by vector layers implementations
      _initPath: function(t) {
        var e = t._path = Bi("path");
        t.options.className && K(e, t.options.className), t.options.interactive && K(e, "leaflet-interactive"), this._updateStyle(t), this._layers[f(t)] = t;
      },
      _addPath: function(t) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
      },
      _removePath: function(t) {
        dt(t._path), t.removeInteractiveTarget(t._path), delete this._layers[f(t)];
      },
      _updatePath: function(t) {
        t._project(), t._update();
      },
      _updateStyle: function(t) {
        var e = t._path, s = t.options;
        e && (s.stroke ? (e.setAttribute("stroke", s.color), e.setAttribute("stroke-opacity", s.opacity), e.setAttribute("stroke-width", s.weight), e.setAttribute("stroke-linecap", s.lineCap), e.setAttribute("stroke-linejoin", s.lineJoin), s.dashArray ? e.setAttribute("stroke-dasharray", s.dashArray) : e.removeAttribute("stroke-dasharray"), s.dashOffset ? e.setAttribute("stroke-dashoffset", s.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), s.fill ? (e.setAttribute("fill", s.fillColor || s.color), e.setAttribute("fill-opacity", s.fillOpacity), e.setAttribute("fill-rule", s.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
      },
      _updatePoly: function(t, e) {
        this._setPath(t, _r(t._parts, e));
      },
      _updateCircle: function(t) {
        var e = t._point, s = Math.max(Math.round(t._radius), 1), u = Math.max(Math.round(t._radiusY), 1) || s, d = "a" + s + "," + u + " 0 1,0 ", g = t._empty() ? "M0 0" : "M" + (e.x - s) + "," + e.y + d + s * 2 + ",0 " + d + -s * 2 + ",0 ";
        this._setPath(t, g);
      },
      _setPath: function(t, e) {
        t._path.setAttribute("d", e);
      },
      // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
      _bringToFront: function(t) {
        Le(t._path);
      },
      _bringToBack: function(t) {
        Pe(t._path);
      }
    });
    V.vml && Je.include(Zl);
    function uo(t) {
      return V.svg || V.vml ? new Je(t) : null;
    }
    it.include({
      // @namespace Map; @method getRenderer(layer: Path): Renderer
      // Returns the instance of `Renderer` that should be used to render the given
      // `Path`. It will ensure that the `renderer` options of the map and paths
      // are respected, and that the renderers do exist on the map.
      getRenderer: function(t) {
        var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
        return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
      },
      _getPaneRenderer: function(t) {
        if (t === "overlayPane" || t === void 0)
          return !1;
        var e = this._paneRenderers[t];
        return e === void 0 && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e;
      },
      _createRenderer: function(t) {
        return this.options.preferCanvas && ho(t) || uo(t);
      }
    });
    var co = Me.extend({
      initialize: function(t, e) {
        Me.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      },
      // @method setBounds(latLngBounds: LatLngBounds): this
      // Redraws the rectangle with the passed bounds.
      setBounds: function(t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function(t) {
        return t = N(t), [
          t.getSouthWest(),
          t.getNorthWest(),
          t.getNorthEast(),
          t.getSouthEast()
        ];
      }
    });
    function Dl(t, e) {
      return new co(t, e);
    }
    Je.create = Bi, Je.pointsToPath = _r, re.geometryToLayer = Mi, re.coordsToLatLng = Pn, re.coordsToLatLngs = ki, re.latLngToCoords = Cn, re.latLngsToCoords = Si, re.getFeature = ke, re.asFeature = zi, it.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var fo = te.extend({
      initialize: function(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
      },
      addHooks: function() {
        X(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        ct(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        dt(this._pane), delete this._pane;
      },
      _resetState: function() {
        this._resetStateTimeout = 0, this._moved = !1;
      },
      _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      },
      _onMouseDown: function(t) {
        if (!t.shiftKey || t.which !== 1 && t.button !== 1)
          return !1;
        this._clearDeferredResetState(), this._resetState(), Ve(), an(), this._startPoint = this._map.mouseEventToContainerPoint(t), X(document, {
          contextmenu: pe,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(t) {
        this._moved || (this._moved = !0, this._box = ot("div", "leaflet-zoom-box", this._container), K(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
        var e = new B(this._point, this._startPoint), s = e.getSize();
        yt(this._box, e.min), this._box.style.width = s.x + "px", this._box.style.height = s.y + "px";
      },
      _finish: function() {
        this._moved && (dt(this._box), gt(this._container, "leaflet-crosshair")), He(), ln(), ct(document, {
          contextmenu: pe,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(t) {
        if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(h(this._resetState, this), 0);
          var e = new H(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
        }
      },
      _onKeyDown: function(t) {
        t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    });
    it.addInitHook("addHandler", "boxZoom", fo), it.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var _o = te.extend({
      addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function(t) {
        var e = this._map, s = e.getZoom(), u = e.options.zoomDelta, d = t.originalEvent.shiftKey ? s - u : s + u;
        e.options.doubleClickZoom === "center" ? e.setZoom(d) : e.setZoomAround(t.containerPoint, d);
      }
    });
    it.addInitHook("addHandler", "doubleClickZoom", _o), it.mergeOptions({
      // @option dragging: Boolean = true
      // Whether the map is draggable with mouse/touch or not.
      dragging: !0,
      // @section Panning Inertia Options
      // @option inertia: Boolean = *
      // If enabled, panning of the map will have an inertia effect where
      // the map builds momentum while dragging and continues moving in
      // the same direction for some time. Feels especially nice on touch
      // devices. Enabled by default.
      inertia: !0,
      // @option inertiaDeceleration: Number = 3000
      // The rate with which the inertial movement slows down, in pixels/second².
      inertiaDeceleration: 3400,
      // px/s^2
      // @option inertiaMaxSpeed: Number = Infinity
      // Max speed of the inertial movement, in pixels/second.
      inertiaMaxSpeed: 1 / 0,
      // px/s
      // @option easeLinearity: Number = 0.2
      easeLinearity: 0.2,
      // TODO refactor, move to CRS
      // @option worldCopyJump: Boolean = false
      // With this option enabled, the map tracks when you pan to another "copy"
      // of the world and seamlessly jumps to the original one so that all overlays
      // like markers and vector layers are still visible.
      worldCopyJump: !1,
      // @option maxBoundsViscosity: Number = 0.0
      // If `maxBounds` is set, this option will control how solid the bounds
      // are when dragging the map around. The default value of `0.0` allows the
      // user to drag outside the bounds at normal speed, higher values will
      // slow down map dragging outside bounds, and `1.0` makes the bounds fully
      // solid, preventing the user from dragging outside the bounds.
      maxBoundsViscosity: 0
    });
    var mo = te.extend({
      addHooks: function() {
        if (!this._draggable) {
          var t = this._map;
          this._draggable = new he(t._mapPane, t._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
        }
        K(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        gt(this._map._container, "leaflet-grab"), gt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      moving: function() {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function() {
        var t = this._map;
        if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var e = N(this._map.options.maxBounds);
          this._offsetLimit = U(
            this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
            this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
          ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else
          this._offsetLimit = null;
        t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function(t) {
        if (this._map.options.inertia) {
          var e = this._lastTime = +/* @__PURE__ */ new Date(), s = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(s), this._times.push(e), this._prunePositions(e);
        }
        this._map.fire("move", t).fire("drag", t);
      },
      _prunePositions: function(t) {
        for (; this._positions.length > 1 && t - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function() {
        var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function(t, e) {
        return t - (t - e) * this._viscosity;
      },
      _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit;
          t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
        }
      },
      _onPreDragWrap: function() {
        var t = this._worldWidth, e = Math.round(t / 2), s = this._initialWorldOffset, u = this._draggable._newPos.x, d = (u - e + s) % t + e - s, g = (u + e + s) % t - e - s, x = Math.abs(d + s) < Math.abs(g + s) ? d : g;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = x;
      },
      _onDragEnd: function(t) {
        var e = this._map, s = e.options, u = !s.inertia || t.noInertia || this._times.length < 2;
        if (e.fire("dragend", t), u)
          e.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var d = this._lastPos.subtract(this._positions[0]), g = (this._lastTime - this._times[0]) / 1e3, x = s.easeLinearity, b = d.multiplyBy(x / g), T = b.distanceTo([0, 0]), E = Math.min(s.inertiaMaxSpeed, T), R = b.multiplyBy(E / T), Y = E / (s.inertiaDeceleration * x), Q = R.multiplyBy(-Y / 2).round();
          !Q.x && !Q.y ? e.fire("moveend") : (Q = e._limitOffset(Q, e.options.maxBounds), _t(function() {
            e.panBy(Q, {
              duration: Y,
              easeLinearity: x,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    it.addInitHook("addHandler", "dragging", mo), it.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var po = te.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function(t) {
        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function() {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = "0"), X(t, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      removeHooks: function() {
        this._removeHooks(), ct(this._map._container, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.off({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      _onMouseDown: function() {
        if (!this._focused) {
          var t = document.body, e = document.documentElement, s = t.scrollTop || e.scrollTop, u = t.scrollLeft || e.scrollLeft;
          this._map._container.focus(), window.scrollTo(u, s);
        }
      },
      _onFocus: function() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function(t) {
        var e = this._panKeys = {}, s = this.keyCodes, u, d;
        for (u = 0, d = s.left.length; u < d; u++)
          e[s.left[u]] = [-1 * t, 0];
        for (u = 0, d = s.right.length; u < d; u++)
          e[s.right[u]] = [t, 0];
        for (u = 0, d = s.down.length; u < d; u++)
          e[s.down[u]] = [0, t];
        for (u = 0, d = s.up.length; u < d; u++)
          e[s.up[u]] = [0, -1 * t];
      },
      _setZoomDelta: function(t) {
        var e = this._zoomKeys = {}, s = this.keyCodes, u, d;
        for (u = 0, d = s.zoomIn.length; u < d; u++)
          e[s.zoomIn[u]] = t;
        for (u = 0, d = s.zoomOut.length; u < d; u++)
          e[s.zoomOut[u]] = -t;
      },
      _addHooks: function() {
        X(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        ct(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e = t.keyCode, s = this._map, u;
          if (e in this._panKeys) {
            if (!s._panAnim || !s._panAnim._inProgress)
              if (u = this._panKeys[e], t.shiftKey && (u = M(u).multiplyBy(3)), s.options.maxBounds && (u = s._limitOffset(M(u), s.options.maxBounds)), s.options.worldCopyJump) {
                var d = s.wrapLatLng(s.unproject(s.project(s.getCenter()).add(u)));
                s.panTo(d);
              } else
                s.panBy(u);
          } else if (e in this._zoomKeys)
            s.setZoom(s.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
          else if (e === 27 && s._popup && s._popup.options.closeOnEscapeKey)
            s.closePopup();
          else
            return;
          pe(t);
        }
      }
    });
    it.addInitHook("addHandler", "keyboard", po), it.mergeOptions({
      // @section Mouse wheel options
      // @option scrollWheelZoom: Boolean|String = true
      // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
      // it will zoom to the center of the view regardless of where the mouse was.
      scrollWheelZoom: !0,
      // @option wheelDebounceTime: Number = 40
      // Limits the rate at which a wheel can fire (in milliseconds). By default
      // user can't zoom via wheel more often than once per 40 ms.
      wheelDebounceTime: 40,
      // @option wheelPxPerZoomLevel: Number = 60
      // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
      // mean a change of one full zoom level. Smaller values will make wheel-zooming
      // faster (and vice versa).
      wheelPxPerZoomLevel: 60
    });
    var go = te.extend({
      addHooks: function() {
        X(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        ct(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(t) {
        var e = Fr(t), s = this._map.options.wheelDebounceTime;
        this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var u = Math.max(s - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(h(this._performZoom, this), u), pe(t);
      },
      _performZoom: function() {
        var t = this._map, e = t.getZoom(), s = this._map.options.zoomSnap || 0;
        t._stop();
        var u = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(u)))) / Math.LN2, g = s ? Math.ceil(d / s) * s : d, x = t._limitZoom(e + (this._delta > 0 ? g : -g)) - e;
        this._delta = 0, this._startTime = null, x && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + x) : t.setZoomAround(this._lastMousePos, e + x));
      }
    });
    it.addInitHook("addHandler", "scrollWheelZoom", go);
    var Rl = 600;
    it.mergeOptions({
      // @section Touch interaction options
      // @option tapHold: Boolean
      // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
      tapHold: V.touchNative && V.safari && V.mobile,
      // @option tapTolerance: Number = 15
      // The max number of pixels a user can shift his finger during touch
      // for it to be considered a valid tap.
      tapTolerance: 15
    });
    var vo = te.extend({
      addHooks: function() {
        X(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        ct(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(t) {
        if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
          var e = t.touches[0];
          this._startPos = this._newPos = new j(e.clientX, e.clientY), this._holdTimeout = setTimeout(h(function() {
            this._cancel(), this._isTapValid() && (X(document, "touchend", Ct), X(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
          }, this), Rl), X(document, "touchend touchcancel contextmenu", this._cancel, this), X(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function t() {
        ct(document, "touchend", Ct), ct(document, "touchend touchcancel", t);
      },
      _cancel: function() {
        clearTimeout(this._holdTimeout), ct(document, "touchend touchcancel contextmenu", this._cancel, this), ct(document, "touchmove", this._onMove, this);
      },
      _onMove: function(t) {
        var e = t.touches[0];
        this._newPos = new j(e.clientX, e.clientY);
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function(t, e) {
        var s = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          // detail: 1,
          screenX: e.screenX,
          screenY: e.screenY,
          clientX: e.clientX,
          clientY: e.clientY
          // button: 2,
          // buttons: 2
        });
        s._simulated = !0, e.target.dispatchEvent(s);
      }
    });
    it.addInitHook("addHandler", "tapHold", vo), it.mergeOptions({
      // @section Touch interaction options
      // @option touchZoom: Boolean|String = *
      // Whether the map can be zoomed by touch-dragging with two fingers. If
      // passed `'center'`, it will zoom to the center of the view regardless of
      // where the touch events (fingers) were. Enabled for touch-capable web
      // browsers.
      touchZoom: V.touch,
      // @option bounceAtZoomLimits: Boolean = true
      // Set it to false if you don't want the map to zoom beyond min/max zoom
      // and then bounce back when pinch-zooming.
      bounceAtZoomLimits: !0
    });
    var yo = te.extend({
      addHooks: function() {
        K(this._map._container, "leaflet-touch-zoom"), X(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        gt(this._map._container, "leaflet-touch-zoom"), ct(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(t) {
        var e = this._map;
        if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
          var s = e.mouseEventToContainerPoint(t.touches[0]), u = e.mouseEventToContainerPoint(t.touches[1]);
          this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(s.add(u)._divideBy(2))), this._startDist = s.distanceTo(u), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), X(document, "touchmove", this._onTouchMove, this), X(document, "touchend touchcancel", this._onTouchEnd, this), Ct(t);
        }
      },
      _onTouchMove: function(t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var e = this._map, s = e.mouseEventToContainerPoint(t.touches[0]), u = e.mouseEventToContainerPoint(t.touches[1]), d = s.distanceTo(u) / this._startDist;
          if (this._zoom = e.getScaleZoom(d, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && d < 1 || this._zoom > e.getMaxZoom() && d > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
            if (this._center = this._startLatLng, d === 1)
              return;
          } else {
            var g = s._add(u)._divideBy(2)._subtract(this._centerPoint);
            if (d === 1 && g.x === 0 && g.y === 0)
              return;
            this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(g), this._zoom);
          }
          this._moved || (e._moveStart(!0, !1), this._moved = !0), Lt(this._animRequest);
          var x = h(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
          this._animRequest = _t(x, this, !0), Ct(t);
        }
      },
      _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        this._zooming = !1, Lt(this._animRequest), ct(document, "touchmove", this._onTouchMove, this), ct(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    it.addInitHook("addHandler", "touchZoom", yo), it.BoxZoom = fo, it.DoubleClickZoom = _o, it.Drag = mo, it.Keyboard = po, it.ScrollWheelZoom = go, it.TapHold = vo, it.TouchZoom = yo, n.Bounds = B, n.Browser = V, n.CRS = W, n.Canvas = lo, n.Circle = Ln, n.CircleMarker = Ti, n.Class = wt, n.Control = qt, n.DivIcon = oo, n.DivOverlay = ee, n.DomEvent = il, n.DomUtil = tl, n.Draggable = he, n.Evented = Mt, n.FeatureGroup = ie, n.GeoJSON = re, n.GridLayer = $e, n.Handler = te, n.Icon = Te, n.ImageOverlay = Ei, n.LatLng = F, n.LatLngBounds = H, n.Layer = Xt, n.LayerGroup = Ce, n.LineUtil = ml, n.Map = it, n.Marker = Ci, n.Mixin = hl, n.Path = ue, n.Point = j, n.PolyUtil = ul, n.Polygon = Me, n.Polyline = ne, n.Popup = Oi, n.PosAnimation = jr, n.Projection = pl, n.Rectangle = co, n.Renderer = oe, n.SVG = Je, n.SVGOverlay = ro, n.TileLayer = Se, n.Tooltip = Ii, n.Transformation = pt, n.Util = fe, n.VideoOverlay = no, n.bind = h, n.bounds = U, n.canvas = ho, n.circle = Pl, n.circleMarker = Ll, n.control = Ge, n.divIcon = Il, n.extend = l, n.featureGroup = xl, n.geoJSON = io, n.geoJson = Ml, n.gridLayer = Bl, n.icon = wl, n.imageOverlay = kl, n.latLng = D, n.latLngBounds = N, n.layerGroup = yl, n.map = nl, n.marker = bl, n.point = M, n.polygon = Tl, n.polyline = Cl, n.popup = El, n.rectangle = Dl, n.setOptions = w, n.stamp = f, n.svg = uo, n.svgOverlay = zl, n.tileLayer = so, n.tooltip = Ol, n.transformation = Z, n.version = a, n.videoOverlay = Sl;
    var Nl = window.L;
    n.noConflict = function() {
      return window.L = Nl, this;
    }, window.L = n;
  });
})(Hn, Hn.exports);
var Re = Hn.exports;
const qi = /* @__PURE__ */ ss(Re);
function _i(r, i, n) {
  return Object.freeze({
    instance: r,
    context: i,
    container: n
  });
}
function Xi(r, i) {
  return i == null ? function(a, l) {
    const o = xe(void 0);
    return o.current || (o.current = r(a, l)), o;
  } : function(a, l) {
    const o = xe(void 0);
    o.current || (o.current = r(a, l));
    const h = xe(a), { instance: c } = o.current;
    return Ft(function() {
      h.current !== a && (i(c, a, h.current), h.current = a);
    }, [
      c,
      a,
      i
    ]), o;
  };
}
function sh(r, i) {
  Ft(function() {
    return (i.layerContainer ?? i.map).addLayer(r.instance), function() {
      var o;
      (o = i.layerContainer) == null || o.removeLayer(r.instance), i.map.removeLayer(r.instance);
    };
  }, [
    i,
    r
  ]);
}
function as(r) {
  return function(n) {
    const a = Gi(), l = r(nr(n, a), a);
    return es(a.map, n.attribution), rs(l.current, n.eventHandlers), sh(l.current, a), l;
  };
}
function ah(r) {
  function i(l, o) {
    return _i(r(l), o);
  }
  const n = Xi(i), a = rh(n);
  return ns(a);
}
function ls(r, i) {
  const n = Xi(r, i), a = as(n);
  return ih(a);
}
function lh(r, i) {
  const n = Xi(r), a = oh(n, i);
  return nh(a);
}
function hs(r, i) {
  const n = Xi(r, i), a = as(n);
  return ns(a);
}
function us(r, i, n) {
  const { opacity: a, zIndex: l } = i;
  a != null && a !== n.opacity && r.setOpacity(a), l != null && l !== n.zIndex && r.setZIndex(l);
}
function rr() {
  return Gi().map;
}
function Mf(r, i) {
  const n = rr();
  return Ft(function() {
    return n.on(r, i), function() {
      n.off(r, i);
    };
  }, [
    n,
    r,
    i
  ]), n;
}
function kf(r) {
  const i = rr();
  return Ft(function() {
    return i.on(r), function() {
      i.off(r);
    };
  }, [
    i,
    r
  ]), i;
}
const hh = ah(function(i) {
  return new Re.Control.Attribution(i);
});
function uh({ bounds: r, boundsOptions: i, center: n, children: a, className: l, id: o, placeholder: h, style: c, whenReady: f, zoom: _, ...m }, p) {
  const [v] = Un({
    className: l,
    id: o,
    style: c
  }), [y, P] = Un(null), w = xe(void 0);
  Yi(p, () => (y == null ? void 0 : y.map) ?? null, [
    y
  ]);
  const z = $l((I) => {
    if (I !== null && !w.current) {
      const A = new Re.Map(I, m);
      w.current = A, n != null && _ != null ? A.setView(n, _) : r != null && A.fitBounds(r, i), f != null && A.whenReady(f), P(eh(A));
    }
  }, []);
  Ft(() => () => {
    y == null || y.map.remove();
  }, [
    y
  ]);
  const k = y ? /* @__PURE__ */ St.createElement(ir, {
    value: y
  }, a) : h ?? null;
  return /* @__PURE__ */ St.createElement("div", {
    ...v,
    ref: z
  }, k);
}
const ch = /* @__PURE__ */ ae(uh), fh = ls(function({ position: i, ...n }, a) {
  const l = new Re.Marker(i, n);
  return _i(l, is(a, {
    overlayContainer: l
  }));
}, function(i, n, a) {
  n.position !== a.position && i.setLatLng(n.position), n.icon != null && n.icon !== a.icon && i.setIcon(n.icon), n.zIndexOffset != null && n.zIndexOffset !== a.zIndexOffset && i.setZIndexOffset(n.zIndexOffset), n.opacity != null && n.opacity !== a.opacity && i.setOpacity(n.opacity), i.dragging != null && n.draggable !== a.draggable && (n.draggable === !0 ? i.dragging.enable() : i.dragging.disable());
}), dh = lh(function(i, n) {
  const a = new Re.Popup(i, n.overlayContainer);
  return _i(a, n);
}, function(i, n, { position: a }, l) {
  Ft(function() {
    const { instance: h } = i;
    function c(_) {
      _.popup === h && (h.update(), l(!0));
    }
    function f(_) {
      _.popup === h && l(!1);
    }
    return n.map.on({
      popupopen: c,
      popupclose: f
    }), n.overlayContainer == null ? (a != null && h.setLatLng(a), h.openOn(n.map)) : n.overlayContainer.bindPopup(h), function() {
      var m;
      n.map.off({
        popupopen: c,
        popupclose: f
      }), (m = n.overlayContainer) == null || m.unbindPopup(), n.map.removeLayer(h);
    };
  }, [
    i,
    n,
    l,
    a
  ]);
}), _h = hs(function({ url: i, ...n }, a) {
  const l = new Re.TileLayer(i, nr(n, a));
  return _i(l, a);
}, function(i, n, a) {
  us(i, n, a);
  const { url: l } = n;
  l != null && l !== a.url && i.setUrl(l);
});
var Wn = { exports: {} }, Zi = { exports: {} }, lt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function mh() {
  if (Lo) return lt;
  Lo = 1;
  var r = typeof Symbol == "function" && Symbol.for, i = r ? Symbol.for("react.element") : 60103, n = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107, l = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, h = r ? Symbol.for("react.provider") : 60109, c = r ? Symbol.for("react.context") : 60110, f = r ? Symbol.for("react.async_mode") : 60111, _ = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, p = r ? Symbol.for("react.suspense") : 60113, v = r ? Symbol.for("react.suspense_list") : 60120, y = r ? Symbol.for("react.memo") : 60115, P = r ? Symbol.for("react.lazy") : 60116, w = r ? Symbol.for("react.block") : 60121, z = r ? Symbol.for("react.fundamental") : 60117, k = r ? Symbol.for("react.responder") : 60118, I = r ? Symbol.for("react.scope") : 60119;
  function A(S) {
    if (typeof S == "object" && S !== null) {
      var rt = S.$$typeof;
      switch (rt) {
        case i:
          switch (S = S.type, S) {
            case f:
            case _:
            case a:
            case o:
            case l:
            case p:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case c:
                case m:
                case P:
                case y:
                case h:
                  return S;
                default:
                  return rt;
              }
          }
        case n:
          return rt;
      }
    }
  }
  function O(S) {
    return A(S) === _;
  }
  return lt.AsyncMode = f, lt.ConcurrentMode = _, lt.ContextConsumer = c, lt.ContextProvider = h, lt.Element = i, lt.ForwardRef = m, lt.Fragment = a, lt.Lazy = P, lt.Memo = y, lt.Portal = n, lt.Profiler = o, lt.StrictMode = l, lt.Suspense = p, lt.isAsyncMode = function(S) {
    return O(S) || A(S) === f;
  }, lt.isConcurrentMode = O, lt.isContextConsumer = function(S) {
    return A(S) === c;
  }, lt.isContextProvider = function(S) {
    return A(S) === h;
  }, lt.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === i;
  }, lt.isForwardRef = function(S) {
    return A(S) === m;
  }, lt.isFragment = function(S) {
    return A(S) === a;
  }, lt.isLazy = function(S) {
    return A(S) === P;
  }, lt.isMemo = function(S) {
    return A(S) === y;
  }, lt.isPortal = function(S) {
    return A(S) === n;
  }, lt.isProfiler = function(S) {
    return A(S) === o;
  }, lt.isStrictMode = function(S) {
    return A(S) === l;
  }, lt.isSuspense = function(S) {
    return A(S) === p;
  }, lt.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === a || S === _ || S === o || S === l || S === p || S === v || typeof S == "object" && S !== null && (S.$$typeof === P || S.$$typeof === y || S.$$typeof === h || S.$$typeof === c || S.$$typeof === m || S.$$typeof === z || S.$$typeof === k || S.$$typeof === I || S.$$typeof === w);
  }, lt.typeOf = A, lt;
}
var ht = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Po;
function ph() {
  return Po || (Po = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, i = r ? Symbol.for("react.element") : 60103, n = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107, l = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, h = r ? Symbol.for("react.provider") : 60109, c = r ? Symbol.for("react.context") : 60110, f = r ? Symbol.for("react.async_mode") : 60111, _ = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, p = r ? Symbol.for("react.suspense") : 60113, v = r ? Symbol.for("react.suspense_list") : 60120, y = r ? Symbol.for("react.memo") : 60115, P = r ? Symbol.for("react.lazy") : 60116, w = r ? Symbol.for("react.block") : 60121, z = r ? Symbol.for("react.fundamental") : 60117, k = r ? Symbol.for("react.responder") : 60118, I = r ? Symbol.for("react.scope") : 60119;
    function A(Z) {
      return typeof Z == "string" || typeof Z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Z === a || Z === _ || Z === o || Z === l || Z === p || Z === v || typeof Z == "object" && Z !== null && (Z.$$typeof === P || Z.$$typeof === y || Z.$$typeof === h || Z.$$typeof === c || Z.$$typeof === m || Z.$$typeof === z || Z.$$typeof === k || Z.$$typeof === I || Z.$$typeof === w);
    }
    function O(Z) {
      if (typeof Z == "object" && Z !== null) {
        var Ot = Z.$$typeof;
        switch (Ot) {
          case i:
            var we = Z.type;
            switch (we) {
              case f:
              case _:
              case a:
              case o:
              case l:
              case p:
                return we;
              default:
                var Ne = we && we.$$typeof;
                switch (Ne) {
                  case c:
                  case m:
                  case P:
                  case y:
                  case h:
                    return Ne;
                  default:
                    return Ot;
                }
            }
          case n:
            return Ot;
        }
      }
    }
    var S = f, rt = _, G = c, tt = h, vt = i, ft = m, _t = a, Lt = P, fe = y, wt = n, jt = o, ut = l, Mt = p, j = !1;
    function le(Z) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(Z) || O(Z) === f;
    }
    function M(Z) {
      return O(Z) === _;
    }
    function B(Z) {
      return O(Z) === c;
    }
    function U(Z) {
      return O(Z) === h;
    }
    function H(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === i;
    }
    function N(Z) {
      return O(Z) === m;
    }
    function F(Z) {
      return O(Z) === a;
    }
    function D(Z) {
      return O(Z) === P;
    }
    function W(Z) {
      return O(Z) === y;
    }
    function q(Z) {
      return O(Z) === n;
    }
    function et(Z) {
      return O(Z) === o;
    }
    function J(Z) {
      return O(Z) === l;
    }
    function pt(Z) {
      return O(Z) === p;
    }
    ht.AsyncMode = S, ht.ConcurrentMode = rt, ht.ContextConsumer = G, ht.ContextProvider = tt, ht.Element = vt, ht.ForwardRef = ft, ht.Fragment = _t, ht.Lazy = Lt, ht.Memo = fe, ht.Portal = wt, ht.Profiler = jt, ht.StrictMode = ut, ht.Suspense = Mt, ht.isAsyncMode = le, ht.isConcurrentMode = M, ht.isContextConsumer = B, ht.isContextProvider = U, ht.isElement = H, ht.isForwardRef = N, ht.isFragment = F, ht.isLazy = D, ht.isMemo = W, ht.isPortal = q, ht.isProfiler = et, ht.isStrictMode = J, ht.isSuspense = pt, ht.isValidElementType = A, ht.typeOf = O;
  }()), ht;
}
var Co;
function cs() {
  return Co || (Co = 1, process.env.NODE_ENV === "production" ? Zi.exports = mh() : Zi.exports = ph()), Zi.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Sn, To;
function gh() {
  if (To) return Sn;
  To = 1;
  var r = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function a(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function l() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var h = {}, c = 0; c < 10; c++)
        h["_" + String.fromCharCode(c)] = c;
      var f = Object.getOwnPropertyNames(h).map(function(m) {
        return h[m];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var _ = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        _[m] = m;
      }), Object.keys(Object.assign({}, _)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Sn = l() ? Object.assign : function(o, h) {
    for (var c, f = a(o), _, m = 1; m < arguments.length; m++) {
      c = Object(arguments[m]);
      for (var p in c)
        i.call(c, p) && (f[p] = c[p]);
      if (r) {
        _ = r(c);
        for (var v = 0; v < _.length; v++)
          n.call(c, _[v]) && (f[_[v]] = c[_[v]]);
      }
    }
    return f;
  }, Sn;
}
var zn, Mo;
function or() {
  if (Mo) return zn;
  Mo = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return zn = r, zn;
}
var En, ko;
function fs() {
  return ko || (ko = 1, En = Function.call.bind(Object.prototype.hasOwnProperty)), En;
}
var On, So;
function vh() {
  if (So) return On;
  So = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var i = or(), n = {}, a = fs();
    r = function(o) {
      var h = "Warning: " + o;
      typeof console < "u" && console.error(h);
      try {
        throw new Error(h);
      } catch {
      }
    };
  }
  function l(o, h, c, f, _) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in o)
        if (a(o, m)) {
          var p;
          try {
            if (typeof o[m] != "function") {
              var v = Error(
                (f || "React class") + ": " + c + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            p = o[m](h, m, f, c, null, i);
          } catch (P) {
            p = P;
          }
          if (p && !(p instanceof Error) && r(
            (f || "React class") + ": type specification of " + c + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var y = _ ? _() : "";
            r(
              "Failed " + c + " type: " + p.message + (y ?? "")
            );
          }
        }
    }
  }
  return l.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, On = l, On;
}
var In, zo;
function yh() {
  if (zo) return In;
  zo = 1;
  var r = cs(), i = gh(), n = or(), a = fs(), l = vh(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(c) {
    var f = "Warning: " + c;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function h() {
    return null;
  }
  return In = function(c, f) {
    var _ = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(M) {
      var B = M && (_ && M[_] || M[m]);
      if (typeof B == "function")
        return B;
    }
    var v = "<<anonymous>>", y = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: I(),
      arrayOf: A,
      element: O(),
      elementType: S(),
      instanceOf: rt,
      node: ft(),
      objectOf: tt,
      oneOf: G,
      oneOfType: vt,
      shape: Lt,
      exact: fe
    };
    function P(M, B) {
      return M === B ? M !== 0 || 1 / M === 1 / B : M !== M && B !== B;
    }
    function w(M, B) {
      this.message = M, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function z(M) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, U = 0;
      function H(F, D, W, q, et, J, pt) {
        if (q = q || v, J = J || W, pt !== n) {
          if (f) {
            var Z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Z.name = "Invariant Violation", Z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ot = q + ":" + W;
            !B[Ot] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[Ot] = !0, U++);
          }
        }
        return D[W] == null ? F ? D[W] === null ? new w("The " + et + " `" + J + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new w("The " + et + " `" + J + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : M(D, W, q, et, J);
      }
      var N = H.bind(null, !1);
      return N.isRequired = H.bind(null, !0), N;
    }
    function k(M) {
      function B(U, H, N, F, D, W) {
        var q = U[H], et = ut(q);
        if (et !== M) {
          var J = Mt(q);
          return new w(
            "Invalid " + F + " `" + D + "` of type " + ("`" + J + "` supplied to `" + N + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return z(B);
    }
    function I() {
      return z(h);
    }
    function A(M) {
      function B(U, H, N, F, D) {
        if (typeof M != "function")
          return new w("Property `" + D + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var W = U[H];
        if (!Array.isArray(W)) {
          var q = ut(W);
          return new w("Invalid " + F + " `" + D + "` of type " + ("`" + q + "` supplied to `" + N + "`, expected an array."));
        }
        for (var et = 0; et < W.length; et++) {
          var J = M(W, et, N, F, D + "[" + et + "]", n);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return z(B);
    }
    function O() {
      function M(B, U, H, N, F) {
        var D = B[U];
        if (!c(D)) {
          var W = ut(D);
          return new w("Invalid " + N + " `" + F + "` of type " + ("`" + W + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return z(M);
    }
    function S() {
      function M(B, U, H, N, F) {
        var D = B[U];
        if (!r.isValidElementType(D)) {
          var W = ut(D);
          return new w("Invalid " + N + " `" + F + "` of type " + ("`" + W + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return z(M);
    }
    function rt(M) {
      function B(U, H, N, F, D) {
        if (!(U[H] instanceof M)) {
          var W = M.name || v, q = le(U[H]);
          return new w("Invalid " + F + " `" + D + "` of type " + ("`" + q + "` supplied to `" + N + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return z(B);
    }
    function G(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), h;
      function B(U, H, N, F, D) {
        for (var W = U[H], q = 0; q < M.length; q++)
          if (P(W, M[q]))
            return null;
        var et = JSON.stringify(M, function(pt, Z) {
          var Ot = Mt(Z);
          return Ot === "symbol" ? String(Z) : Z;
        });
        return new w("Invalid " + F + " `" + D + "` of value `" + String(W) + "` " + ("supplied to `" + N + "`, expected one of " + et + "."));
      }
      return z(B);
    }
    function tt(M) {
      function B(U, H, N, F, D) {
        if (typeof M != "function")
          return new w("Property `" + D + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var W = U[H], q = ut(W);
        if (q !== "object")
          return new w("Invalid " + F + " `" + D + "` of type " + ("`" + q + "` supplied to `" + N + "`, expected an object."));
        for (var et in W)
          if (a(W, et)) {
            var J = M(W, et, N, F, D + "." + et, n);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return z(B);
    }
    function vt(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), h;
      for (var B = 0; B < M.length; B++) {
        var U = M[B];
        if (typeof U != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + j(U) + " at index " + B + "."
          ), h;
      }
      function H(N, F, D, W, q) {
        for (var et = [], J = 0; J < M.length; J++) {
          var pt = M[J], Z = pt(N, F, D, W, q, n);
          if (Z == null)
            return null;
          Z.data && a(Z.data, "expectedType") && et.push(Z.data.expectedType);
        }
        var Ot = et.length > 0 ? ", expected one of type [" + et.join(", ") + "]" : "";
        return new w("Invalid " + W + " `" + q + "` supplied to " + ("`" + D + "`" + Ot + "."));
      }
      return z(H);
    }
    function ft() {
      function M(B, U, H, N, F) {
        return wt(B[U]) ? null : new w("Invalid " + N + " `" + F + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return z(M);
    }
    function _t(M, B, U, H, N) {
      return new w(
        (M || "React class") + ": " + B + " type `" + U + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function Lt(M) {
      function B(U, H, N, F, D) {
        var W = U[H], q = ut(W);
        if (q !== "object")
          return new w("Invalid " + F + " `" + D + "` of type `" + q + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var et in M) {
          var J = M[et];
          if (typeof J != "function")
            return _t(N, F, D, et, Mt(J));
          var pt = J(W, et, N, F, D + "." + et, n);
          if (pt)
            return pt;
        }
        return null;
      }
      return z(B);
    }
    function fe(M) {
      function B(U, H, N, F, D) {
        var W = U[H], q = ut(W);
        if (q !== "object")
          return new w("Invalid " + F + " `" + D + "` of type `" + q + "` " + ("supplied to `" + N + "`, expected `object`."));
        var et = i({}, U[H], M);
        for (var J in et) {
          var pt = M[J];
          if (a(M, J) && typeof pt != "function")
            return _t(N, F, D, J, Mt(pt));
          if (!pt)
            return new w(
              "Invalid " + F + " `" + D + "` key `" + J + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(U[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var Z = pt(W, J, N, F, D + "." + J, n);
          if (Z)
            return Z;
        }
        return null;
      }
      return z(B);
    }
    function wt(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(wt);
          if (M === null || c(M))
            return !0;
          var B = p(M);
          if (B) {
            var U = B.call(M), H;
            if (B !== M.entries) {
              for (; !(H = U.next()).done; )
                if (!wt(H.value))
                  return !1;
            } else
              for (; !(H = U.next()).done; ) {
                var N = H.value;
                if (N && !wt(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function jt(M, B) {
      return M === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function ut(M) {
      var B = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : jt(B, M) ? "symbol" : B;
    }
    function Mt(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var B = ut(M);
      if (B === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function j(M) {
      var B = Mt(M);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function le(M) {
      return !M.constructor || !M.constructor.name ? v : M.constructor.name;
    }
    return y.checkPropTypes = l, y.resetWarningCache = l.resetWarningCache, y.PropTypes = y, y;
  }, In;
}
var Bn, Eo;
function xh() {
  if (Eo) return Bn;
  Eo = 1;
  var r = or();
  function i() {
  }
  function n() {
  }
  return n.resetWarningCache = i, Bn = function() {
    function a(h, c, f, _, m, p) {
      if (p !== r) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    a.isRequired = a;
    function l() {
      return a;
    }
    var o = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: l,
      element: a,
      elementType: a,
      instanceOf: l,
      node: a,
      objectOf: l,
      oneOf: l,
      oneOfType: l,
      shape: l,
      exact: l,
      checkPropTypes: n,
      resetWarningCache: i
    };
    return o.PropTypes = o, o;
  }, Bn;
}
if (process.env.NODE_ENV !== "production") {
  var wh = cs(), bh = !0;
  Wn.exports = yh()(wh.isElement, bh);
} else
  Wn.exports = xh()();
var Lh = Wn.exports;
const nt = /* @__PURE__ */ ss(Lh), Oo = (r) => r && typeof r == "object" && !Array.isArray(r), ui = (r, ...i) => {
  if (!i.length)
    return r;
  const n = { ...r };
  return i.forEach((a) => {
    Oo(a) && Object.keys(a).forEach((l) => {
      Oo(a[l]) ? n[l] ? n[l] = ui(n[l], a[l]) : n[l] = { ...a[l] } : n[l] = a[l];
    });
  }), n;
}, ds = (r) => {
  let i = {};
  return r.forEach((n) => {
    i = ui(i, n);
  }), i;
}, Ph = di(ye)`
  // translate to re-align with leaflet div
  transform: translateX(-35%);
  &:hover {
    transform: translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`, Ch = di(Kl)`
  // multiplier of font-size, for tighter alignment
  line-height: 1rem;
`, _s = ({ cluster: r, kind: i = "default", size: n = "medium", ...a }) => {
  var _, m, p, v, y, P, w, z, k, I, A, O, S;
  const l = St.useContext(Nt), o = ds([
    (p = (m = (_ = l == null ? void 0 : l.map) == null ? void 0 : _.cluster) == null ? void 0 : m.size) == null ? void 0 : p.medium,
    (P = (y = (v = l == null ? void 0 : l.map) == null ? void 0 : v.cluster) == null ? void 0 : y.size) == null ? void 0 : P[n],
    (z = (w = l == null ? void 0 : l.map) == null ? void 0 : w.cluster) == null ? void 0 : z.default,
    (I = (k = l == null ? void 0 : l.map) == null ? void 0 : k.cluster) == null ? void 0 : I[i]
  ]), h = r.getChildCount(), c = (S = (O = (A = l == null ? void 0 : l.map) == null ? void 0 : A.cluster) == null ? void 0 : O[i]) == null ? void 0 : S.icon, f = h;
  return /* @__PURE__ */ st(Ph, { ...o == null ? void 0 : o.container, ...a, children: [
    c,
    /* @__PURE__ */ st(Ch, { ...o == null ? void 0 : o.label, children: f }, void 0, !1, {
      fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Cluster/Cluster.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Cluster/Cluster.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, void 0);
};
_s.propTypes = {
  cluster: nt.object,
  kind: nt.string,
  size: nt.string
};
var ve = function(i) {
  return i === void 0 && (i = ""), parseFloat(i.match(/\d+(\.\d+)?/), 10);
};
function Th(r) {
  var i, n = De(Nt), a = r.size, l = {};
  if (n != null && (i = n.icon) != null && i.disableScaleDown) {
    var o = ve(n.icon.size[a] || a);
    o < 24 && (l.vectorEffect = "non-scaling-stroke");
  }
  return l;
}
var Io = function(i, n) {
  return (i - n) / 2 + "px";
};
function Mh(r) {
  var i, n, a, l = r.height, o = r.size, h = o === void 0 ? "medium" : o, c = r.width, f = De(Nt), _ = ve((f == null || (i = f.icon) == null || (i = i.size) == null ? void 0 : i[h]) || h), m = "", p = "16px", v = ve(p);
  if (typeof window < "u") {
    var y;
    v = ve(((y = window) == null ? void 0 : y.getComputedStyle(document.body).getPropertyValue("font-size")) || p);
  }
  if (l && f != null && (n = f.text) != null && (n = n[l]) != null && n.height) {
    var P = f.text[l].height.match(/(px|rem)/), w = P[0], z = ve(f.text[l].height);
    if (w === "rem" && (z *= v), z > _) {
      var k = Io(z, _);
      m += "padding-top: " + k + "; padding-bottom: " + k + ";";
    }
  }
  if (c && f != null && (a = f.text) != null && (a = a[c]) != null && a.height) {
    var I = f.text[c].height.match(/(px|rem)/), A = I[0], O = ve(f.text[c].height);
    if (A === "rem" && (O *= v), O > _) {
      var S = Io(O, _);
      m += "padding-left: " + S + "; padding-right: " + S + ";";
    }
  }
  return m;
}
var kh = {
  global: {
    colors: {
      icon: "#666666"
    }
  },
  icon: {
    size: {
      small: "12px",
      medium: "24px",
      large: "48px",
      xlarge: "96px"
    }
  }
}, Sh = {
  theme: kh
}, zh = ["a11yTitle", "color", "size", "theme"];
function Yn() {
  return Yn = Object.assign ? Object.assign.bind() : function(r) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var a in n) ({}).hasOwnProperty.call(n, a) && (r[a] = n[a]);
    }
    return r;
  }, Yn.apply(null, arguments);
}
function Eh(r, i) {
  if (r == null) return {};
  var n = {};
  for (var a in r) if ({}.hasOwnProperty.call(r, a)) {
    if (i.indexOf(a) >= 0) continue;
    n[a] = r[a];
  }
  return n;
}
var Oh = function r(i, n, a) {
  var l = n.global && n.global.colors[i] !== void 0 ? n.global.colors[i] : i, o = l;
  return l && (n.dark && l.dark !== void 0 ? o = l.dark : !n.dark && l.light !== void 0 && (o = l.light)), o && n.global && n.global.colors[o] !== void 0 && (o = r(o, n)), o;
}, Bo = function(i, n, a, l) {
  return ts(["", ":", ";"], i, Oh(n, a));
}, Ih = ts(["", " ", " g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill='none']{stroke-width:0;}}*[stroke*='#'],*[STROKE*='#']{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*='#'],*[FILL*='#']{fill:inherit;stroke:none;}"], function(r) {
  return Bo("fill", r.color || r.theme.global.colors.icon, r.theme);
}, function(r) {
  return Bo("stroke", r.color || r.theme.global.colors.icon, r.theme);
}), ms = /* @__PURE__ */ ae(function(r, i) {
  var n = r.a11yTitle;
  r.color, r.size, r.theme;
  var a = Eh(r, zh);
  return /* @__PURE__ */ St.createElement("svg", Yn({
    ref: i,
    "aria-label": n
  }, a));
});
ms.displayName = "Icon";
var mi = di(ms).withConfig({
  // don't let height attribute leak to DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function(i) {
    return !["height", "width"].includes(i);
  }
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-ofa7kd-0"
})(["display:inline-block;flex:0 0 auto;", " ", " ", " ", ""], function(r) {
  var i, n = r.size, a = n === void 0 ? "medium" : n, l = r.theme, o = r.viewBox, h = (o || "0 0 24 24").split(" "), c = h[2], f = h[3], _ = c / f, m = l.icon.size[a] || a, p = ve(m), v = ((i = m.match(/[a-z]+$/)) == null ? void 0 : i[0]) || "px";
  return c < f ? `
      width: ` + p + v + `;
      height: ` + p / _ + v + `;
    ` : f < c ? `
      width: ` + p * _ + v + `;
      height: ` + p + v + `;
    ` : `
      width: ` + p + v + `;
      height: ` + p + v + `;
    `;
}, function(r) {
  var i = r.color;
  return i !== "plain" && Ih;
}, function(r) {
  return (r.height || r.width) && Mh(r);
}, function(r) {
  var i = r.theme;
  return i && i.icon.extend;
});
mi.defaultProps = {};
Object.setPrototypeOf(mi.defaultProps, Sh);
function Hi() {
  return Hi = Object.assign ? Object.assign.bind() : function(r) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var a in n) ({}).hasOwnProperty.call(n, a) && (r[a] = n[a]);
    }
    return r;
  }, Hi.apply(null, arguments);
}
var ps = /* @__PURE__ */ ae(function(r, i) {
  var n = Th(r);
  return /* @__PURE__ */ St.createElement(mi, Hi({
    ref: i,
    viewBox: "0 0 24 24",
    a11yTitle: "Add"
  }, r), /* @__PURE__ */ St.createElement("path", Hi({
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22V2M2 12h20"
  }, n)));
});
ps.displayName = "Add";
function Gn() {
  return Gn = Object.assign ? Object.assign.bind() : function(r) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var a in n) ({}).hasOwnProperty.call(n, a) && (r[a] = n[a]);
    }
    return r;
  }, Gn.apply(null, arguments);
}
var gs = /* @__PURE__ */ ae(function(r, i) {
  return /* @__PURE__ */ St.createElement(mi, Gn({
    ref: i,
    viewBox: "0 0 24 24",
    a11yTitle: "Globe"
  }, r), /* @__PURE__ */ St.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 8s3.5 1 5 2 .564 2.42 1 3c.436.58 2-1 2 2s3 1 3 4 2.5 2.5 3 1 2.233-3.134 2-5c-.233-1.866-1-3-3-3s-3.5-.5-4-2 3-2 2-5 0-4 0-4m10 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z"
  }));
});
gs.displayName = "Globe";
function qn() {
  return qn = Object.assign ? Object.assign.bind() : function(r) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var a in n) ({}).hasOwnProperty.call(n, a) && (r[a] = n[a]);
    }
    return r;
  }, qn.apply(null, arguments);
}
var vs = /* @__PURE__ */ ae(function(r, i) {
  return /* @__PURE__ */ St.createElement(mi, qn({
    ref: i,
    viewBox: "0 0 24 24",
    a11yTitle: "Subtract"
  }, r), /* @__PURE__ */ St.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 12h20"
  }));
});
vs.displayName = "Subtract";
const Bh = ({ locations: r }) => {
  const i = qi.latLngBounds();
  return r.features ? r.features.forEach((n) => {
    var a, l;
    i.extend([
      (a = n.geometry) == null ? void 0 : a.coordinates[0],
      (l = n.geometry) == null ? void 0 : l.coordinates[1]
    ]);
  }) : Array.isArray(r[0]) ? r.forEach((n) => {
    i.extend([n == null ? void 0 : n[0], n == null ? void 0 : n[1]]);
  }) : r.forEach((n) => {
    i.extend([n == null ? void 0 : n.lat, n == null ? void 0 : n.lng]);
  }), i;
}, Ah = 1.5, Zh = ({ locations: r }) => {
  const i = rr(), n = r && Bh({ locations: r }), [a, l] = St.useState(!1);
  return Ft(() => {
    n && !a && // eslint-disable-next-line no-underscore-dangle
    (JSON.stringify(n._northEast) === JSON.stringify(n._southWest) || i.flyToBounds(n, { duration: Ah }));
  }, [n, i, a]), Ft(() => {
    l(!0);
  }, []), // css classes are coming from https://github.com/Leaflet/Leaflet/blob/main/dist/leaflet.css
  /* @__PURE__ */ st(ye, { className: "leaflet-bottom leaflet-right", children: /* @__PURE__ */ st(ye, { className: "leaflet-control", children: /* @__PURE__ */ st(ye, { elevation: "large", round: "medium", background: "background", children: [
    /* @__PURE__ */ st(
      kn,
      {
        a11yTitle: "Zoom in",
        icon: /* @__PURE__ */ st(ps, {}, void 0, !1, {
          fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Controls/Controls.jsx",
          lineNumber: 64,
          columnNumber: 19
        }, void 0),
        onClick: (o) => {
          o.preventDefault(), i.zoomIn();
        }
      },
      void 0,
      !1,
      {
        fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Controls/Controls.jsx",
        lineNumber: 62,
        columnNumber: 11
      },
      void 0
    ),
    /* @__PURE__ */ st(
      kn,
      {
        a11yTitle: "Zoom out",
        icon: /* @__PURE__ */ st(vs, {}, void 0, !1, {
          fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Controls/Controls.jsx",
          lineNumber: 72,
          columnNumber: 19
        }, void 0),
        onClick: (o) => {
          o.preventDefault(), i.zoomOut();
        }
      },
      void 0,
      !1,
      {
        fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Controls/Controls.jsx",
        lineNumber: 70,
        columnNumber: 11
      },
      void 0
    ),
    /* @__PURE__ */ st(
      ye,
      {
        border: {
          color: "border-weak",
          side: "top"
        },
        children: n && /* @__PURE__ */ st(
          kn,
          {
            a11yTitle: "Zoom to data",
            icon: /* @__PURE__ */ st(gs, {}, void 0, !1, {
              fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Controls/Controls.jsx",
              lineNumber: 87,
              columnNumber: 23
            }, void 0),
            onClick: (o) => {
              o.preventDefault(), i.flyToBounds(n, { duration: 1.5 });
            }
          },
          void 0,
          !1,
          {
            fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Controls/Controls.jsx",
            lineNumber: 85,
            columnNumber: 15
          },
          void 0
        )
      },
      void 0,
      !1,
      {
        fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Controls/Controls.jsx",
        lineNumber: 78,
        columnNumber: 11
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Controls/Controls.jsx",
    lineNumber: 61,
    columnNumber: 9
  }, void 0) }, void 0, !1, {
    fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Controls/Controls.jsx",
    lineNumber: 60,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Controls/Controls.jsx",
    lineNumber: 59,
    columnNumber: 5
  }, void 0);
};
Zh.propTypes = {
  locations: nt.oneOfType([
    nt.arrayOf(
      nt.oneOfType([
        nt.arrayOf(nt.number),
        nt.shape({
          lat: nt.number,
          lng: nt.number
        })
      ])
    ),
    nt.object
  ])
};
const ys = {
  default: {
    container: {
      // any box props
      align: "center",
      justify: "center",
      background: "background-front",
      border: {
        color: "border",
        size: "small"
      },
      elevation: "medium",
      flex: !1,
      round: "full"
    }
    // icon: undefined,
  }
}, Dh = ui(ys, {
  default: {
    container: {
      height: { min: "25px", max: "25px" },
      width: { min: "25px", max: "25px" }
    }
  }
}), Rh = {
  pin: {
    ...Dh
  },
  cluster: {
    ...ys,
    size: {
      small: {
        container: {
          height: { min: "36px", max: "36px" },
          width: { min: "36px", max: "36px" }
        },
        label: {
          // any text props
          size: "small"
        }
      },
      medium: {
        container: {
          direction: "row-reverse",
          gap: "xxsmall",
          height: { min: "48px", max: "48px" },
          width: { min: "48px", max: "48px" }
        },
        label: {
          color: "text-strong",
          size: "medium",
          weight: 500
        }
      },
      large: {
        container: {
          direction: "row-reverse",
          gap: "xxsmall",
          height: { min: "54px", max: "54px" },
          width: { min: "54px", max: "54px" }
        },
        label: {
          size: "medium"
        }
      }
    }
  },
  popup: {
    background: "background-front",
    border: { color: "border-weak", size: "xsmall" },
    gap: "xsmall",
    margin: "none",
    pad: "small",
    round: "xsmall"
  },
  tiles: {
    // water: 'purple',
    // majorRoad: 'transparent',
    // buildings: 'darkgray',
    // park: 'gray',
    // mediumRoad: '#FFF2C8',
    // minorRoad: '#ffffff',
    // boundaries: '#9e9e9e',
  }
  // TODO: define tile API, considering dark/light with flexible theming
  // tiles: {
  // Colors and feature mapping from Protomaps [basemap layers]
  // (https://docs.protomaps.com/basemaps/layers#basemap-layers) derived from OpenStreetMap.
  // earth: '#FFFBF6',
  // glacier: '#ffffff',
  // residential: '#F4F4F8',
  // hospital: '#FFF6F6',
  // cemetery: '#EFF2EE',
  // school: '#F7F6FF',
  // industrial: '#FFF9EF',
  // wood: '#F4F9EF',
  // grass: '#EBF9E3',
  // park: '#E5F9D5',
  // water: '#B7DFF2',
  // sand: '#ebebeb',
  // buildings: '#F2EDE8',
  // highwayCasing: '#FFC3C3',
  // majorRoadCasing: '#FFB9B9',
  // mediumRoadCasing: '#FFCE8E',
  // minorRoadCasing: '#cccccc',
  // highway: '#FFCEBB',
  // majorRoad: '#FFE4B3',
  // mediumRoad: '#FFF2C8',
  // minorRoad: '#ffffff',
  // boundaries: '#9e9e9e',
  // mask: '#dddddd',
  // countryLabel: '#aaaaaa',
  // cityLabel: '#6C6C6C',
  // stateLabel: '#999999',
  // neighbourhoodLabel: '#888888',
  // landuseLabel: '#898989',
  // waterLabel: '#41ABDC',
  // naturalLabel: '#4B8F14',
  // roadsLabel: '#888888',
  // poisLabel: '#606060',
  // },
};
function $(r, i) {
  this.x = r, this.y = i;
}
$.prototype = {
  /**
   * Clone this point, returning a new point that can be modified
   * without affecting the old one.
   * @return {Point} the clone
   */
  clone() {
    return new $(this.x, this.y);
  },
  /**
   * Add this point's x & y coordinates to another point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  add(r) {
    return this.clone()._add(r);
  },
  /**
   * Subtract this point's x & y coordinates to from point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  sub(r) {
    return this.clone()._sub(r);
  },
  /**
   * Multiply this point's x & y coordinates by point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  multByPoint(r) {
    return this.clone()._multByPoint(r);
  },
  /**
   * Divide this point's x & y coordinates by point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  divByPoint(r) {
    return this.clone()._divByPoint(r);
  },
  /**
   * Multiply this point's x & y coordinates by a factor,
   * yielding a new point.
   * @param {number} k factor
   * @return {Point} output point
   */
  mult(r) {
    return this.clone()._mult(r);
  },
  /**
   * Divide this point's x & y coordinates by a factor,
   * yielding a new point.
   * @param {number} k factor
   * @return {Point} output point
   */
  div(r) {
    return this.clone()._div(r);
  },
  /**
   * Rotate this point around the 0, 0 origin by an angle a,
   * given in radians
   * @param {number} a angle to rotate around, in radians
   * @return {Point} output point
   */
  rotate(r) {
    return this.clone()._rotate(r);
  },
  /**
   * Rotate this point around p point by an angle a,
   * given in radians
   * @param {number} a angle to rotate around, in radians
   * @param {Point} p Point to rotate around
   * @return {Point} output point
   */
  rotateAround(r, i) {
    return this.clone()._rotateAround(r, i);
  },
  /**
   * Multiply this point by a 4x1 transformation matrix
   * @param {[number, number, number, number]} m transformation matrix
   * @return {Point} output point
   */
  matMult(r) {
    return this.clone()._matMult(r);
  },
  /**
   * Calculate this point but as a unit vector from 0, 0, meaning
   * that the distance from the resulting point to the 0, 0
   * coordinate will be equal to 1 and the angle from the resulting
   * point to the 0, 0 coordinate will be the same as before.
   * @return {Point} unit vector point
   */
  unit() {
    return this.clone()._unit();
  },
  /**
   * Compute a perpendicular point, where the new y coordinate
   * is the old x coordinate and the new x coordinate is the old y
   * coordinate multiplied by -1
   * @return {Point} perpendicular point
   */
  perp() {
    return this.clone()._perp();
  },
  /**
   * Return a version of this point with the x & y coordinates
   * rounded to integers.
   * @return {Point} rounded point
   */
  round() {
    return this.clone()._round();
  },
  /**
   * Return the magnitude of this point: this is the Euclidean
   * distance from the 0, 0 coordinate to this point's x and y
   * coordinates.
   * @return {number} magnitude
   */
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  /**
   * Judge whether this point is equal to another point, returning
   * true or false.
   * @param {Point} other the other point
   * @return {boolean} whether the points are equal
   */
  equals(r) {
    return this.x === r.x && this.y === r.y;
  },
  /**
   * Calculate the distance from this point to another point
   * @param {Point} p the other point
   * @return {number} distance
   */
  dist(r) {
    return Math.sqrt(this.distSqr(r));
  },
  /**
   * Calculate the distance from this point to another point,
   * without the square root step. Useful if you're comparing
   * relative distances.
   * @param {Point} p the other point
   * @return {number} distance
   */
  distSqr(r) {
    const i = r.x - this.x, n = r.y - this.y;
    return i * i + n * n;
  },
  /**
   * Get the angle from the 0, 0 coordinate to this point, in radians
   * coordinates.
   * @return {number} angle
   */
  angle() {
    return Math.atan2(this.y, this.x);
  },
  /**
   * Get the angle from this point to another point, in radians
   * @param {Point} b the other point
   * @return {number} angle
   */
  angleTo(r) {
    return Math.atan2(this.y - r.y, this.x - r.x);
  },
  /**
   * Get the angle between this point and another point, in radians
   * @param {Point} b the other point
   * @return {number} angle
   */
  angleWith(r) {
    return this.angleWithSep(r.x, r.y);
  },
  /**
   * Find the angle of the two vectors, solving the formula for
   * the cross product a x b = |a||b|sin(θ) for θ.
   * @param {number} x the x-coordinate
   * @param {number} y the y-coordinate
   * @return {number} the angle in radians
   */
  angleWithSep(r, i) {
    return Math.atan2(
      this.x * i - this.y * r,
      this.x * r + this.y * i
    );
  },
  /** @param {[number, number, number, number]} m */
  _matMult(r) {
    const i = r[0] * this.x + r[1] * this.y, n = r[2] * this.x + r[3] * this.y;
    return this.x = i, this.y = n, this;
  },
  /** @param {Point} p */
  _add(r) {
    return this.x += r.x, this.y += r.y, this;
  },
  /** @param {Point} p */
  _sub(r) {
    return this.x -= r.x, this.y -= r.y, this;
  },
  /** @param {number} k */
  _mult(r) {
    return this.x *= r, this.y *= r, this;
  },
  /** @param {number} k */
  _div(r) {
    return this.x /= r, this.y /= r, this;
  },
  /** @param {Point} p */
  _multByPoint(r) {
    return this.x *= r.x, this.y *= r.y, this;
  },
  /** @param {Point} p */
  _divByPoint(r) {
    return this.x /= r.x, this.y /= r.y, this;
  },
  _unit() {
    return this._div(this.mag()), this;
  },
  _perp() {
    const r = this.y;
    return this.y = this.x, this.x = -r, this;
  },
  /** @param {number} angle */
  _rotate(r) {
    const i = Math.cos(r), n = Math.sin(r), a = i * this.x - n * this.y, l = n * this.x + i * this.y;
    return this.x = a, this.y = l, this;
  },
  /**
   * @param {number} angle
   * @param {Point} p
   */
  _rotateAround(r, i) {
    const n = Math.cos(r), a = Math.sin(r), l = i.x + n * (this.x - i.x) - a * (this.y - i.y), o = i.y + a * (this.x - i.x) + n * (this.y - i.y);
    return this.x = l, this.y = o, this;
  },
  _round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  },
  constructor: $
};
$.convert = function(r) {
  if (r instanceof $)
    return (
      /** @type {Point} */
      r
    );
  if (Array.isArray(r))
    return new $(+r[0], +r[1]);
  if (r.x !== void 0 && r.y !== void 0)
    return new $(+r.x, +r.y);
  throw new Error("Expected [x, y] or {x, y} point format");
};
function Ae(r, i, n) {
  return Math.min(Math.max(r, n), i);
}
class Nh extends Error {
  constructor(i) {
    super(`Failed to parse color: "${i}"`);
  }
}
var ri = Nh;
function Ao(r) {
  if (typeof r != "string") throw new ri(r);
  if (r.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let i = r.trim();
  i = Gh.test(r) ? Uh(r) : r;
  const n = Vh.exec(i);
  if (n) {
    const h = Array.from(n).slice(1);
    return [...h.slice(0, 3).map((c) => parseInt(ci(c, 2), 16)), parseInt(ci(h[3] || "f", 2), 16) / 255];
  }
  const a = Hh.exec(i);
  if (a) {
    const h = Array.from(a).slice(1);
    return [...h.slice(0, 3).map((c) => parseInt(c, 16)), parseInt(h[3] || "ff", 16) / 255];
  }
  const l = Wh.exec(i);
  if (l) {
    const h = Array.from(l).slice(1);
    return [...h.slice(0, 3).map((c) => parseInt(c, 10)), parseFloat(h[3] || "1")];
  }
  const o = Yh.exec(i);
  if (o) {
    const [h, c, f, _] = Array.from(o).slice(1).map(parseFloat);
    if (Ae(0, 100, c) !== c) throw new ri(r);
    if (Ae(0, 100, f) !== f) throw new ri(r);
    return [...qh(h, c, f), Number.isNaN(_) ? 1 : _];
  }
  throw new ri(r);
}
function Fh(r) {
  let i = 5381, n = r.length;
  for (; n; )
    i = i * 33 ^ r.charCodeAt(--n);
  return (i >>> 0) % 2341;
}
const Zo = (r) => parseInt(r.replace(/_/g, ""), 36), jh = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((r, i) => {
  const n = Zo(i.substring(0, 3)), a = Zo(i.substring(3)).toString(16);
  let l = "";
  for (let o = 0; o < 6 - a.length; o++)
    l += "0";
  return r[n] = `${l}${a}`, r;
}, {});
function Uh(r) {
  const i = r.toLowerCase().trim(), n = jh[Fh(i)];
  if (!n) throw new ri(r);
  return `#${n}`;
}
const ci = (r, i) => Array.from(Array(i)).map(() => r).join(""), Vh = new RegExp(`^#${ci("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), Hh = new RegExp(`^#${ci("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), Wh = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${ci(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), Yh = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, Gh = /^[a-z]+$/i, Do = (r) => Math.round(r * 255), qh = (r, i, n) => {
  let a = n / 100;
  if (i === 0)
    return [a, a, a].map(Do);
  const l = (r % 360 + 360) % 360 / 60, o = (1 - Math.abs(2 * a - 1)) * (i / 100), h = o * (1 - Math.abs(l % 2 - 1));
  let c = 0, f = 0, _ = 0;
  l >= 0 && l < 1 ? (c = o, f = h) : l >= 1 && l < 2 ? (c = h, f = o) : l >= 2 && l < 3 ? (f = o, _ = h) : l >= 3 && l < 4 ? (f = h, _ = o) : l >= 4 && l < 5 ? (c = h, _ = o) : l >= 5 && l < 6 && (c = o, _ = h);
  const m = a - o / 2, p = c + m, v = f + m, y = _ + m;
  return [p, v, y].map(Do);
};
function Xh(r, i, n, a) {
  return `rgba(${Ae(0, 255, r).toFixed()}, ${Ae(0, 255, i).toFixed()}, ${Ae(0, 255, n).toFixed()}, ${parseFloat(Ae(0, 1, a).toFixed(3))})`;
}
function An(r, i, n) {
  const a = (S, rt) => (
    // 3rd index is alpha channel which is already normalized
    rt === 3 ? S : S / 255
  ), [l, o, h, c] = Ao(r).map(a), [f, _, m, p] = Ao(i).map(a), v = p - c, y = n * 2 - 1, w = ((y * v === -1 ? y : y + v / (1 + y * v)) + 1) / 2, z = 1 - w, k = (l * z + f * w) * 255, I = (o * z + _ * w) * 255, A = (h * z + m * w) * 255, O = p * n + c * (1 - n);
  return Xh(k, I, A, O);
}
class xs {
  /**
   * @param {Pbf} pbf
   * @param {number} end
   * @param {number} extent
   * @param {string[]} keys
   * @param {(number | string | boolean)[]} values
   */
  constructor(i, n, a, l, o) {
    this.properties = {}, this.extent = a, this.type = 0, this.id = void 0, this._pbf = i, this._geometry = -1, this._keys = l, this._values = o, i.readFields($h, this, n);
  }
  loadGeometry() {
    const i = this._pbf;
    i.pos = this._geometry;
    const n = i.readVarint() + i.pos, a = [];
    let l, o = 1, h = 0, c = 0, f = 0;
    for (; i.pos < n; ) {
      if (h <= 0) {
        const _ = i.readVarint();
        o = _ & 7, h = _ >> 3;
      }
      if (h--, o === 1 || o === 2)
        c += i.readSVarint(), f += i.readSVarint(), o === 1 && (l && a.push(l), l = []), l && l.push(new $(c, f));
      else if (o === 7)
        l && l.push(l[0].clone());
      else
        throw new Error(`unknown command ${o}`);
    }
    return l && a.push(l), a;
  }
  bbox() {
    const i = this._pbf;
    i.pos = this._geometry;
    const n = i.readVarint() + i.pos;
    let a = 1, l = 0, o = 0, h = 0, c = 1 / 0, f = -1 / 0, _ = 1 / 0, m = -1 / 0;
    for (; i.pos < n; ) {
      if (l <= 0) {
        const p = i.readVarint();
        a = p & 7, l = p >> 3;
      }
      if (l--, a === 1 || a === 2)
        o += i.readSVarint(), h += i.readSVarint(), o < c && (c = o), o > f && (f = o), h < _ && (_ = h), h > m && (m = h);
      else if (a !== 7)
        throw new Error(`unknown command ${a}`);
    }
    return [c, _, f, m];
  }
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @return {Feature}
   */
  toGeoJSON(i, n, a) {
    const l = this.extent * Math.pow(2, a), o = this.extent * i, h = this.extent * n, c = this.loadGeometry();
    function f(v) {
      return [
        (v.x + o) * 360 / l - 180,
        360 / Math.PI * Math.atan(Math.exp((1 - (v.y + h) * 2 / l) * Math.PI)) - 90
      ];
    }
    function _(v) {
      return v.map(f);
    }
    let m;
    if (this.type === 1) {
      const v = [];
      for (const P of c)
        v.push(P[0]);
      const y = _(v);
      m = v.length === 1 ? { type: "Point", coordinates: y[0] } : { type: "MultiPoint", coordinates: y };
    } else if (this.type === 2) {
      const v = c.map(_);
      m = v.length === 1 ? { type: "LineString", coordinates: v[0] } : { type: "MultiLineString", coordinates: v };
    } else if (this.type === 3) {
      const v = Jh(c), y = [];
      for (const P of v)
        y.push(P.map(_));
      m = y.length === 1 ? { type: "Polygon", coordinates: y[0] } : { type: "MultiPolygon", coordinates: y };
    } else
      throw new Error("unknown feature type");
    const p = {
      type: "Feature",
      geometry: m,
      properties: this.properties
    };
    return this.id != null && (p.id = this.id), p;
  }
}
xs.types = ["Unknown", "Point", "LineString", "Polygon"];
function $h(r, i, n) {
  r === 1 ? i.id = n.readVarint() : r === 2 ? Kh(n, i) : r === 3 ? i.type = /** @type {0 | 1 | 2 | 3} */
  n.readVarint() : r === 4 && (i._geometry = n.pos);
}
function Kh(r, i) {
  const n = r.readVarint() + r.pos;
  for (; r.pos < n; ) {
    const a = i._keys[r.readVarint()], l = i._values[r.readVarint()];
    i.properties[a] = l;
  }
}
function Jh(r) {
  const i = r.length;
  if (i <= 1) return [r];
  const n = [];
  let a, l;
  for (let o = 0; o < i; o++) {
    const h = Qh(r[o]);
    h !== 0 && (l === void 0 && (l = h < 0), l === h < 0 ? (a && n.push(a), a = [r[o]]) : a && a.push(r[o]));
  }
  return a && n.push(a), n;
}
function Qh(r) {
  let i = 0;
  for (let n = 0, a = r.length, l = a - 1, o, h; n < a; l = n++)
    o = r[n], h = r[l], i += (h.x - o.x) * (o.y + h.y);
  return i;
}
class tu {
  /**
   * @param {Pbf} pbf
   * @param {number} [end]
   */
  constructor(i, n) {
    this.version = 1, this.name = "", this.extent = 4096, this.length = 0, this._pbf = i, this._keys = [], this._values = [], this._features = [], i.readFields(eu, this, n), this.length = this._features.length;
  }
  /** return feature `i` from this layer as a `VectorTileFeature`
   * @param {number} i
   */
  feature(i) {
    if (i < 0 || i >= this._features.length) throw new Error("feature index out of bounds");
    this._pbf.pos = this._features[i];
    const n = this._pbf.readVarint() + this._pbf.pos;
    return new xs(this._pbf, n, this.extent, this._keys, this._values);
  }
}
function eu(r, i, n) {
  r === 15 ? i.version = n.readVarint() : r === 1 ? i.name = n.readString() : r === 5 ? i.extent = n.readVarint() : r === 2 ? i._features.push(n.pos) : r === 3 ? i._keys.push(n.readString()) : r === 4 && i._values.push(iu(n));
}
function iu(r) {
  let i = null;
  const n = r.readVarint() + r.pos;
  for (; r.pos < n; ) {
    const a = r.readVarint() >> 3;
    i = a === 1 ? r.readString() : a === 2 ? r.readFloat() : a === 3 ? r.readDouble() : a === 4 ? r.readVarint64() : a === 5 ? r.readVarint() : a === 6 ? r.readSVarint() : a === 7 ? r.readBoolean() : null;
  }
  if (i == null)
    throw new Error("unknown feature value");
  return i;
}
class nu {
  /**
   * @param {Pbf} pbf
   * @param {number} [end]
   */
  constructor(i, n) {
    this.layers = i.readFields(ru, {}, n);
  }
}
function ru(r, i, n) {
  if (r === 3) {
    const a = new tu(n, n.readVarint() + n.pos);
    a.length && (i[a.name] = a);
  }
}
const Xn = 65536 * 65536, Ro = 1 / Xn, ou = 12, No = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8"), Zn = 0, Di = 1, Qe = 2, Ri = 5;
class su {
  /**
   * @param {Uint8Array | ArrayBuffer} [buf]
   */
  constructor(i = new Uint8Array(16)) {
    this.buf = ArrayBuffer.isView(i) ? i : new Uint8Array(i), this.dataView = new DataView(this.buf.buffer), this.pos = 0, this.type = 0, this.length = this.buf.length;
  }
  // === READING =================================================================
  /**
   * @template T
   * @param {(tag: number, result: T, pbf: Pbf) => void} readField
   * @param {T} result
   * @param {number} [end]
   */
  readFields(i, n, a = this.length) {
    for (; this.pos < a; ) {
      const l = this.readVarint(), o = l >> 3, h = this.pos;
      this.type = l & 7, i(o, n, this), this.pos === h && this.skip(l);
    }
    return n;
  }
  /**
   * @template T
   * @param {(tag: number, result: T, pbf: Pbf) => void} readField
   * @param {T} result
   */
  readMessage(i, n) {
    return this.readFields(i, n, this.readVarint() + this.pos);
  }
  readFixed32() {
    const i = this.dataView.getUint32(this.pos, !0);
    return this.pos += 4, i;
  }
  readSFixed32() {
    const i = this.dataView.getInt32(this.pos, !0);
    return this.pos += 4, i;
  }
  // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)
  readFixed64() {
    const i = this.dataView.getUint32(this.pos, !0) + this.dataView.getUint32(this.pos + 4, !0) * Xn;
    return this.pos += 8, i;
  }
  readSFixed64() {
    const i = this.dataView.getUint32(this.pos, !0) + this.dataView.getInt32(this.pos + 4, !0) * Xn;
    return this.pos += 8, i;
  }
  readFloat() {
    const i = this.dataView.getFloat32(this.pos, !0);
    return this.pos += 4, i;
  }
  readDouble() {
    const i = this.dataView.getFloat64(this.pos, !0);
    return this.pos += 8, i;
  }
  /**
   * @param {boolean} [isSigned]
   */
  readVarint(i) {
    const n = this.buf;
    let a, l;
    return l = n[this.pos++], a = l & 127, l < 128 || (l = n[this.pos++], a |= (l & 127) << 7, l < 128) || (l = n[this.pos++], a |= (l & 127) << 14, l < 128) || (l = n[this.pos++], a |= (l & 127) << 21, l < 128) ? a : (l = n[this.pos], a |= (l & 15) << 28, au(a, i, this));
  }
  readVarint64() {
    return this.readVarint(!0);
  }
  readSVarint() {
    const i = this.readVarint();
    return i % 2 === 1 ? (i + 1) / -2 : i / 2;
  }
  readBoolean() {
    return !!this.readVarint();
  }
  readString() {
    const i = this.readVarint() + this.pos, n = this.pos;
    return this.pos = i, i - n >= ou && No ? No.decode(this.buf.subarray(n, i)) : xu(this.buf, n, i);
  }
  readBytes() {
    const i = this.readVarint() + this.pos, n = this.buf.subarray(this.pos, i);
    return this.pos = i, n;
  }
  // verbose for performance reasons; doesn't affect gzipped size
  /**
   * @param {number[]} [arr]
   * @param {boolean} [isSigned]
   */
  readPackedVarint(i = [], n) {
    const a = this.readPackedEnd();
    for (; this.pos < a; ) i.push(this.readVarint(n));
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedSVarint(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readSVarint());
    return i;
  }
  /** @param {boolean[]} [arr] */
  readPackedBoolean(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readBoolean());
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedFloat(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readFloat());
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedDouble(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readDouble());
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedFixed32(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readFixed32());
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedSFixed32(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readSFixed32());
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedFixed64(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readFixed64());
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedSFixed64(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readSFixed64());
    return i;
  }
  readPackedEnd() {
    return this.type === Qe ? this.readVarint() + this.pos : this.pos + 1;
  }
  /** @param {number} val */
  skip(i) {
    const n = i & 7;
    if (n === Zn) for (; this.buf[this.pos++] > 127; )
      ;
    else if (n === Qe) this.pos = this.readVarint() + this.pos;
    else if (n === Ri) this.pos += 4;
    else if (n === Di) this.pos += 8;
    else throw new Error(`Unimplemented type: ${n}`);
  }
  // === WRITING =================================================================
  /**
   * @param {number} tag
   * @param {number} type
   */
  writeTag(i, n) {
    this.writeVarint(i << 3 | n);
  }
  /** @param {number} min */
  realloc(i) {
    let n = this.length || 16;
    for (; n < this.pos + i; ) n *= 2;
    if (n !== this.length) {
      const a = new Uint8Array(n);
      a.set(this.buf), this.buf = a, this.dataView = new DataView(a.buffer), this.length = n;
    }
  }
  finish() {
    return this.length = this.pos, this.pos = 0, this.buf.subarray(0, this.length);
  }
  /** @param {number} val */
  writeFixed32(i) {
    this.realloc(4), this.dataView.setInt32(this.pos, i, !0), this.pos += 4;
  }
  /** @param {number} val */
  writeSFixed32(i) {
    this.realloc(4), this.dataView.setInt32(this.pos, i, !0), this.pos += 4;
  }
  /** @param {number} val */
  writeFixed64(i) {
    this.realloc(8), this.dataView.setInt32(this.pos, i & -1, !0), this.dataView.setInt32(this.pos + 4, Math.floor(i * Ro), !0), this.pos += 8;
  }
  /** @param {number} val */
  writeSFixed64(i) {
    this.realloc(8), this.dataView.setInt32(this.pos, i & -1, !0), this.dataView.setInt32(this.pos + 4, Math.floor(i * Ro), !0), this.pos += 8;
  }
  /** @param {number} val */
  writeVarint(i) {
    if (i = +i || 0, i > 268435455 || i < 0) {
      lu(i, this);
      return;
    }
    this.realloc(4), this.buf[this.pos++] = i & 127 | (i > 127 ? 128 : 0), !(i <= 127) && (this.buf[this.pos++] = (i >>>= 7) & 127 | (i > 127 ? 128 : 0), !(i <= 127) && (this.buf[this.pos++] = (i >>>= 7) & 127 | (i > 127 ? 128 : 0), !(i <= 127) && (this.buf[this.pos++] = i >>> 7 & 127)));
  }
  /** @param {number} val */
  writeSVarint(i) {
    this.writeVarint(i < 0 ? -i * 2 - 1 : i * 2);
  }
  /** @param {boolean} val */
  writeBoolean(i) {
    this.writeVarint(+i);
  }
  /** @param {string} str */
  writeString(i) {
    i = String(i), this.realloc(i.length * 4), this.pos++;
    const n = this.pos;
    this.pos = wu(this.buf, i, this.pos);
    const a = this.pos - n;
    a >= 128 && Fo(n, a, this), this.pos = n - 1, this.writeVarint(a), this.pos += a;
  }
  /** @param {number} val */
  writeFloat(i) {
    this.realloc(4), this.dataView.setFloat32(this.pos, i, !0), this.pos += 4;
  }
  /** @param {number} val */
  writeDouble(i) {
    this.realloc(8), this.dataView.setFloat64(this.pos, i, !0), this.pos += 8;
  }
  /** @param {Uint8Array} buffer */
  writeBytes(i) {
    const n = i.length;
    this.writeVarint(n), this.realloc(n);
    for (let a = 0; a < n; a++) this.buf[this.pos++] = i[a];
  }
  /**
   * @template T
   * @param {(obj: T, pbf: Pbf) => void} fn
   * @param {T} obj
   */
  writeRawMessage(i, n) {
    this.pos++;
    const a = this.pos;
    i(n, this);
    const l = this.pos - a;
    l >= 128 && Fo(a, l, this), this.pos = a - 1, this.writeVarint(l), this.pos += l;
  }
  /**
   * @template T
   * @param {number} tag
   * @param {(obj: T, pbf: Pbf) => void} fn
   * @param {T} obj
   */
  writeMessage(i, n, a) {
    this.writeTag(i, Qe), this.writeRawMessage(n, a);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedVarint(i, n) {
    n.length && this.writeMessage(i, cu, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedSVarint(i, n) {
    n.length && this.writeMessage(i, fu, n);
  }
  /**
   * @param {number} tag
   * @param {boolean[]} arr
   */
  writePackedBoolean(i, n) {
    n.length && this.writeMessage(i, mu, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedFloat(i, n) {
    n.length && this.writeMessage(i, du, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedDouble(i, n) {
    n.length && this.writeMessage(i, _u, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedFixed32(i, n) {
    n.length && this.writeMessage(i, pu, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedSFixed32(i, n) {
    n.length && this.writeMessage(i, gu, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedFixed64(i, n) {
    n.length && this.writeMessage(i, vu, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedSFixed64(i, n) {
    n.length && this.writeMessage(i, yu, n);
  }
  /**
   * @param {number} tag
   * @param {Uint8Array} buffer
   */
  writeBytesField(i, n) {
    this.writeTag(i, Qe), this.writeBytes(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeFixed32Field(i, n) {
    this.writeTag(i, Ri), this.writeFixed32(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeSFixed32Field(i, n) {
    this.writeTag(i, Ri), this.writeSFixed32(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeFixed64Field(i, n) {
    this.writeTag(i, Di), this.writeFixed64(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeSFixed64Field(i, n) {
    this.writeTag(i, Di), this.writeSFixed64(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeVarintField(i, n) {
    this.writeTag(i, Zn), this.writeVarint(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeSVarintField(i, n) {
    this.writeTag(i, Zn), this.writeSVarint(n);
  }
  /**
   * @param {number} tag
   * @param {string} str
   */
  writeStringField(i, n) {
    this.writeTag(i, Qe), this.writeString(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeFloatField(i, n) {
    this.writeTag(i, Ri), this.writeFloat(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeDoubleField(i, n) {
    this.writeTag(i, Di), this.writeDouble(n);
  }
  /**
   * @param {number} tag
   * @param {boolean} val
   */
  writeBooleanField(i, n) {
    this.writeVarintField(i, +n);
  }
}
function au(r, i, n) {
  const a = n.buf;
  let l, o;
  if (o = a[n.pos++], l = (o & 112) >> 4, o < 128 || (o = a[n.pos++], l |= (o & 127) << 3, o < 128) || (o = a[n.pos++], l |= (o & 127) << 10, o < 128) || (o = a[n.pos++], l |= (o & 127) << 17, o < 128) || (o = a[n.pos++], l |= (o & 127) << 24, o < 128) || (o = a[n.pos++], l |= (o & 1) << 31, o < 128)) return Ee(r, l, i);
  throw new Error("Expected varint not more than 10 bytes");
}
function Ee(r, i, n) {
  return n ? i * 4294967296 + (r >>> 0) : (i >>> 0) * 4294967296 + (r >>> 0);
}
function lu(r, i) {
  let n, a;
  if (r >= 0 ? (n = r % 4294967296 | 0, a = r / 4294967296 | 0) : (n = ~(-r % 4294967296), a = ~(-r / 4294967296), n ^ 4294967295 ? n = n + 1 | 0 : (n = 0, a = a + 1 | 0)), r >= 18446744073709552e3 || r < -18446744073709552e3)
    throw new Error("Given varint doesn't fit into 10 bytes");
  i.realloc(10), hu(n, a, i), uu(a, i);
}
function hu(r, i, n) {
  n.buf[n.pos++] = r & 127 | 128, r >>>= 7, n.buf[n.pos++] = r & 127 | 128, r >>>= 7, n.buf[n.pos++] = r & 127 | 128, r >>>= 7, n.buf[n.pos++] = r & 127 | 128, r >>>= 7, n.buf[n.pos] = r & 127;
}
function uu(r, i) {
  const n = (r & 7) << 4;
  i.buf[i.pos++] |= n | ((r >>>= 3) ? 128 : 0), r && (i.buf[i.pos++] = r & 127 | ((r >>>= 7) ? 128 : 0), r && (i.buf[i.pos++] = r & 127 | ((r >>>= 7) ? 128 : 0), r && (i.buf[i.pos++] = r & 127 | ((r >>>= 7) ? 128 : 0), r && (i.buf[i.pos++] = r & 127 | ((r >>>= 7) ? 128 : 0), r && (i.buf[i.pos++] = r & 127)))));
}
function Fo(r, i, n) {
  const a = i <= 16383 ? 1 : i <= 2097151 ? 2 : i <= 268435455 ? 3 : Math.floor(Math.log(i) / (Math.LN2 * 7));
  n.realloc(a);
  for (let l = n.pos - 1; l >= r; l--) n.buf[l + a] = n.buf[l];
}
function cu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeVarint(r[n]);
}
function fu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeSVarint(r[n]);
}
function du(r, i) {
  for (let n = 0; n < r.length; n++) i.writeFloat(r[n]);
}
function _u(r, i) {
  for (let n = 0; n < r.length; n++) i.writeDouble(r[n]);
}
function mu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeBoolean(r[n]);
}
function pu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeFixed32(r[n]);
}
function gu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeSFixed32(r[n]);
}
function vu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeFixed64(r[n]);
}
function yu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeSFixed64(r[n]);
}
function xu(r, i, n) {
  let a = "", l = i;
  for (; l < n; ) {
    const o = r[l];
    let h = null, c = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
    if (l + c > n) break;
    let f, _, m;
    c === 1 ? o < 128 && (h = o) : c === 2 ? (f = r[l + 1], (f & 192) === 128 && (h = (o & 31) << 6 | f & 63, h <= 127 && (h = null))) : c === 3 ? (f = r[l + 1], _ = r[l + 2], (f & 192) === 128 && (_ & 192) === 128 && (h = (o & 15) << 12 | (f & 63) << 6 | _ & 63, (h <= 2047 || h >= 55296 && h <= 57343) && (h = null))) : c === 4 && (f = r[l + 1], _ = r[l + 2], m = r[l + 3], (f & 192) === 128 && (_ & 192) === 128 && (m & 192) === 128 && (h = (o & 15) << 18 | (f & 63) << 12 | (_ & 63) << 6 | m & 63, (h <= 65535 || h >= 1114112) && (h = null))), h === null ? (h = 65533, c = 1) : h > 65535 && (h -= 65536, a += String.fromCharCode(h >>> 10 & 1023 | 55296), h = 56320 | h & 1023), a += String.fromCharCode(h), l += c;
  }
  return a;
}
function wu(r, i, n) {
  for (let a = 0, l, o; a < i.length; a++) {
    if (l = i.charCodeAt(a), l > 55295 && l < 57344)
      if (o)
        if (l < 56320) {
          r[n++] = 239, r[n++] = 191, r[n++] = 189, o = l;
          continue;
        } else
          l = o - 55296 << 10 | l - 56320 | 65536, o = null;
      else {
        l > 56319 || a + 1 === i.length ? (r[n++] = 239, r[n++] = 191, r[n++] = 189) : o = l;
        continue;
      }
    else o && (r[n++] = 239, r[n++] = 191, r[n++] = 189, o = null);
    l < 128 ? r[n++] = l : (l < 2048 ? r[n++] = l >> 6 | 192 : (l < 65536 ? r[n++] = l >> 12 | 224 : (r[n++] = l >> 18 | 240, r[n++] = l >> 12 & 63 | 128), r[n++] = l >> 6 & 63 | 128), r[n++] = l & 63 | 128);
  }
  return n;
}
var Ze = Math.pow, kt = (r, i, n) => new Promise((a, l) => {
  var o = (f) => {
    try {
      c(n.next(f));
    } catch (_) {
      l(_);
    }
  }, h = (f) => {
    try {
      c(n.throw(f));
    } catch (_) {
      l(_);
    }
  }, c = (f) => f.done ? a(f.value) : Promise.resolve(f.value).then(o, h);
  c((n = n.apply(r, i)).next());
}), Rt = Uint8Array, ai = Uint16Array, bu = Int32Array, ws = new Rt([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), bs = new Rt([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Lu = new Rt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Ls = function(r, i) {
  for (var n = new ai(31), a = 0; a < 31; ++a)
    n[a] = i += 1 << r[a - 1];
  for (var l = new bu(n[30]), a = 1; a < 30; ++a)
    for (var o = n[a]; o < n[a + 1]; ++o)
      l[o] = o - n[a] << 5 | a;
  return { b: n, r: l };
}, Ps = Ls(ws, 2), Cs = Ps.b, Pu = Ps.r;
Cs[28] = 258, Pu[258] = 28;
var Cu = Ls(bs, 0), Tu = Cu.b, Ts = new ai(32768);
for (at = 0; at < 32768; ++at)
  se = (at & 43690) >> 1 | (at & 21845) << 1, se = (se & 52428) >> 2 | (se & 13107) << 2, se = (se & 61680) >> 4 | (se & 3855) << 4, Ts[at] = ((se & 65280) >> 8 | (se & 255) << 8) >> 1;
var se, at, li = function(r, i, n) {
  for (var a = r.length, l = 0, o = new ai(i); l < a; ++l)
    r[l] && ++o[r[l] - 1];
  var h = new ai(i);
  for (l = 1; l < i; ++l)
    h[l] = h[l - 1] + o[l - 1] << 1;
  var c;
  {
    c = new ai(1 << i);
    var f = 15 - i;
    for (l = 0; l < a; ++l)
      if (r[l])
        for (var _ = l << 4 | r[l], m = i - r[l], p = h[r[l] - 1]++ << m, v = p | (1 << m) - 1; p <= v; ++p)
          c[Ts[p] >> f] = _;
  }
  return c;
}, pi = new Rt(288);
for (at = 0; at < 144; ++at)
  pi[at] = 8;
var at;
for (at = 144; at < 256; ++at)
  pi[at] = 9;
var at;
for (at = 256; at < 280; ++at)
  pi[at] = 7;
var at;
for (at = 280; at < 288; ++at)
  pi[at] = 8;
var at, Ms = new Rt(32);
for (at = 0; at < 32; ++at)
  Ms[at] = 5;
var at, Mu = /* @__PURE__ */ li(pi, 9), ku = /* @__PURE__ */ li(Ms, 5), Dn = function(r) {
  for (var i = r[0], n = 1; n < r.length; ++n)
    r[n] > i && (i = r[n]);
  return i;
}, $t = function(r, i, n) {
  var a = i / 8 | 0;
  return (r[a] | r[a + 1] << 8) >> (i & 7) & n;
}, Rn = function(r, i) {
  var n = i / 8 | 0;
  return (r[n] | r[n + 1] << 8 | r[n + 2] << 16) >> (i & 7);
}, Su = function(r) {
  return (r + 7) / 8 | 0;
}, zu = function(r, i, n) {
  (n == null || n > r.length) && (n = r.length);
  var a = new Rt(n - i);
  return a.set(r.subarray(i, n)), a;
}, Eu = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], Zt = function(r, i, n) {
  var a = new Error(i || Eu[r]);
  if (a.code = r, Error.captureStackTrace && Error.captureStackTrace(a, Zt), !n)
    throw a;
  return a;
}, sr = function(r, i, n, a) {
  var l = r.length, o = 0;
  if (!l || i.f && !i.l)
    return n || new Rt(0);
  var h = !n || i.i != 2, c = i.i;
  n || (n = new Rt(l * 3));
  var f = function(J) {
    var pt = n.length;
    if (J > pt) {
      var Z = new Rt(Math.max(pt * 2, J));
      Z.set(n), n = Z;
    }
  }, _ = i.f || 0, m = i.p || 0, p = i.b || 0, v = i.l, y = i.d, P = i.m, w = i.n, z = l * 8;
  do {
    if (!v) {
      _ = $t(r, m, 1);
      var k = $t(r, m + 1, 3);
      if (m += 3, k)
        if (k == 1)
          v = Mu, y = ku, P = 9, w = 5;
        else if (k == 2) {
          var S = $t(r, m, 31) + 257, rt = $t(r, m + 10, 15) + 4, G = S + $t(r, m + 5, 31) + 1;
          m += 14;
          for (var tt = new Rt(G), vt = new Rt(19), ft = 0; ft < rt; ++ft)
            vt[Lu[ft]] = $t(r, m + ft * 3, 7);
          m += rt * 3;
          for (var _t = Dn(vt), Lt = (1 << _t) - 1, fe = li(vt, _t), ft = 0; ft < G; ) {
            var wt = fe[$t(r, m, Lt)];
            m += wt & 15;
            var I = wt >> 4;
            if (I < 16)
              tt[ft++] = I;
            else {
              var jt = 0, ut = 0;
              for (I == 16 ? (ut = 3 + $t(r, m, 3), m += 2, jt = tt[ft - 1]) : I == 17 ? (ut = 3 + $t(r, m, 7), m += 3) : I == 18 && (ut = 11 + $t(r, m, 127), m += 7); ut--; )
                tt[ft++] = jt;
            }
          }
          var Mt = tt.subarray(0, S), j = tt.subarray(S);
          P = Dn(Mt), w = Dn(j), v = li(Mt, P), y = li(j, w);
        } else
          Zt(1);
      else {
        var I = Su(m) + 4, A = r[I - 4] | r[I - 3] << 8, O = I + A;
        if (O > l) {
          c && Zt(0);
          break;
        }
        h && f(p + A), n.set(r.subarray(I, O), p), i.b = p += A, i.p = m = O * 8, i.f = _;
        continue;
      }
      if (m > z) {
        c && Zt(0);
        break;
      }
    }
    h && f(p + 131072);
    for (var le = (1 << P) - 1, M = (1 << w) - 1, B = m; ; B = m) {
      var jt = v[Rn(r, m) & le], U = jt >> 4;
      if (m += jt & 15, m > z) {
        c && Zt(0);
        break;
      }
      if (jt || Zt(2), U < 256)
        n[p++] = U;
      else if (U == 256) {
        B = m, v = null;
        break;
      } else {
        var H = U - 254;
        if (U > 264) {
          var ft = U - 257, N = ws[ft];
          H = $t(r, m, (1 << N) - 1) + Cs[ft], m += N;
        }
        var F = y[Rn(r, m) & M], D = F >> 4;
        F || Zt(3), m += F & 15;
        var j = Tu[D];
        if (D > 3) {
          var N = bs[D];
          j += Rn(r, m) & (1 << N) - 1, m += N;
        }
        if (m > z) {
          c && Zt(0);
          break;
        }
        h && f(p + 131072);
        var W = p + H;
        if (p < j) {
          var q = o - j, et = Math.min(j, W);
          for (q + p < 0 && Zt(3); p < et; ++p)
            n[p] = a[q + p];
        }
        for (; p < W; p += 4)
          n[p] = n[p - j], n[p + 1] = n[p + 1 - j], n[p + 2] = n[p + 2 - j], n[p + 3] = n[p + 3 - j];
        p = W;
      }
    }
    i.l = v, i.p = B, i.b = p, i.f = _, v && (_ = 1, i.m = P, i.d = y, i.n = w);
  } while (!_);
  return p == n.length ? n : zu(n, 0, p);
}, Ou = /* @__PURE__ */ new Rt(0), Iu = function(r) {
  (r[0] != 31 || r[1] != 139 || r[2] != 8) && Zt(6, "invalid gzip data");
  var i = r[3], n = 10;
  i & 4 && (n += (r[10] | r[11] << 8) + 2);
  for (var a = (i >> 3 & 1) + (i >> 4 & 1); a > 0; a -= !r[n++])
    ;
  return n + (i & 2);
}, Bu = function(r) {
  var i = r.length;
  return (r[i - 4] | r[i - 3] << 8 | r[i - 2] << 16 | r[i - 1] << 24) >>> 0;
}, Au = function(r, i) {
  return ((r[0] & 15) != 8 || r[0] >> 4 > 7 || (r[0] << 8 | r[1]) % 31) && Zt(6, "invalid zlib data"), (r[1] >> 5 & 1) == 1 && Zt(6, "invalid zlib data: " + (r[1] & 32 ? "need" : "unexpected") + " dictionary"), (r[1] >> 3 & 4) + 2;
};
function Zu(r, i) {
  return sr(r, { i: 2 }, i, i);
}
function Du(r, i) {
  var n = Iu(r);
  return n + 8 > r.length && Zt(6, "invalid gzip data"), sr(r.subarray(n, -8), { i: 2 }, new Rt(Bu(r)), i);
}
function Ru(r, i) {
  return sr(r.subarray(Au(r), -4), { i: 2 }, i, i);
}
function $n(r, i) {
  return r[0] == 31 && r[1] == 139 && r[2] == 8 ? Du(r, i) : (r[0] & 15) != 8 || r[0] >> 4 > 7 || (r[0] << 8 | r[1]) % 31 ? Zu(r, i) : Ru(r, i);
}
var Nu = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Fu = 0;
try {
  Nu.decode(Ou, { stream: !0 }), Fu = 1;
} catch {
}
var ks = (r, i) => r * Ze(2, i), ti = (r, i) => Math.floor(r / Ze(2, i)), Wi = (r, i) => ks(r.getUint16(i + 1, !0), 8) + r.getUint8(i), Ss = (r, i) => ks(r.getUint32(i + 2, !0), 16) + r.getUint16(i, !0), ju = (r, i, n, a, l) => {
  if (r !== a.getUint8(l))
    return r - a.getUint8(l);
  const o = Wi(a, l + 1);
  if (i !== o)
    return i - o;
  const h = Wi(a, l + 4);
  return n !== h ? n - h : 0;
}, Uu = (r, i, n, a) => {
  const l = zs(r, i | 128, n, a);
  return l ? {
    z: i,
    x: n,
    y: a,
    offset: l[0],
    length: l[1],
    isDir: !0
  } : null;
}, jo = (r, i, n, a) => {
  const l = zs(r, i, n, a);
  return l ? {
    z: i,
    x: n,
    y: a,
    offset: l[0],
    length: l[1],
    isDir: !1
  } : null;
}, zs = (r, i, n, a) => {
  let l = 0, o = r.byteLength / 17 - 1;
  for (; l <= o; ) {
    const h = o + l >> 1, c = ju(i, n, a, r, h * 17);
    if (c > 0)
      l = h + 1;
    else if (c < 0)
      o = h - 1;
    else
      return [Ss(r, h * 17 + 7), r.getUint32(h * 17 + 13, !0)];
  }
  return null;
}, Vu = (r, i) => r.isDir && !i.isDir ? 1 : !r.isDir && i.isDir ? -1 : r.z !== i.z ? r.z - i.z : r.x !== i.x ? r.x - i.x : r.y - i.y, Es = (r, i) => {
  const n = r.getUint8(i * 17);
  return {
    z: n & 127,
    x: Wi(r, i * 17 + 1),
    y: Wi(r, i * 17 + 4),
    offset: Ss(r, i * 17 + 7),
    length: r.getUint32(i * 17 + 13, !0),
    isDir: n >> 7 === 1
  };
}, Uo = (r) => {
  const i = [], n = new DataView(r);
  for (let a = 0; a < n.byteLength / 17; a++)
    i.push(Es(n, a));
  return Hu(i);
}, Hu = (r) => {
  r.sort(Vu);
  const i = new ArrayBuffer(17 * r.length), n = new Uint8Array(i);
  for (let a = 0; a < r.length; a++) {
    const l = r[a];
    let o = l.z;
    l.isDir && (o = o | 128), n[a * 17] = o, n[a * 17 + 1] = l.x & 255, n[a * 17 + 2] = l.x >> 8 & 255, n[a * 17 + 3] = l.x >> 16 & 255, n[a * 17 + 4] = l.y & 255, n[a * 17 + 5] = l.y >> 8 & 255, n[a * 17 + 6] = l.y >> 16 & 255, n[a * 17 + 7] = l.offset & 255, n[a * 17 + 8] = ti(l.offset, 8) & 255, n[a * 17 + 9] = ti(l.offset, 16) & 255, n[a * 17 + 10] = ti(l.offset, 24) & 255, n[a * 17 + 11] = ti(l.offset, 32) & 255, n[a * 17 + 12] = ti(l.offset, 48) & 255, n[a * 17 + 13] = l.length & 255, n[a * 17 + 14] = l.length >> 8 & 255, n[a * 17 + 15] = l.length >> 16 & 255, n[a * 17 + 16] = l.length >> 24 & 255;
  }
  return i;
}, Wu = (r, i) => {
  if (r.byteLength < 17)
    return null;
  const n = r.byteLength / 17, a = Es(r, n - 1);
  if (a.isDir) {
    const l = a.z, o = i.z - l, h = Math.trunc(i.x / (1 << o)), c = Math.trunc(i.y / (1 << o));
    return { z: l, x: h, y: c };
  }
  return null;
};
function Yu(r) {
  return kt(this, null, function* () {
    const i = yield r.getBytes(0, 512e3), n = new DataView(i.data), a = n.getUint32(4, !0), l = n.getUint16(8, !0), o = new TextDecoder("utf-8"), h = JSON.parse(
      o.decode(new DataView(i.data, 10, a))
    );
    let c = 0;
    h.compression === "gzip" && (c = 2);
    let f = 0;
    "minzoom" in h && (f = +h.minzoom);
    let _ = 0;
    "maxzoom" in h && (_ = +h.maxzoom);
    let m = 0, p = 0, v = 0, y = -180, P = -85, w = 180, z = 85;
    if (h.bounds) {
      const I = h.bounds.split(",");
      y = +I[0], P = +I[1], w = +I[2], z = +I[3];
    }
    if (h.center) {
      const I = h.center.split(",");
      m = +I[0], p = +I[1], v = +I[2];
    }
    return {
      specVersion: n.getUint16(2, !0),
      rootDirectoryOffset: 10 + a,
      rootDirectoryLength: l * 17,
      jsonMetadataOffset: 10,
      jsonMetadataLength: a,
      leafDirectoryOffset: 0,
      leafDirectoryLength: void 0,
      tileDataOffset: 0,
      tileDataLength: void 0,
      numAddressedTiles: 0,
      numTileEntries: 0,
      numTileContents: 0,
      clustered: !1,
      internalCompression: 1,
      tileCompression: c,
      tileType: 1,
      minZoom: f,
      maxZoom: _,
      minLon: y,
      minLat: P,
      maxLon: w,
      maxLat: z,
      centerZoom: v,
      centerLon: m,
      centerLat: p,
      etag: i.etag
    };
  });
}
function Gu(r, i, n, a, l, o, h) {
  return kt(this, null, function* () {
    let c = yield n.getArrayBuffer(
      i,
      r.rootDirectoryOffset,
      r.rootDirectoryLength,
      r
    );
    r.specVersion === 1 && (c = Uo(c));
    const f = jo(new DataView(c), a, l, o);
    if (f) {
      let p = (yield i.getBytes(f.offset, f.length, h)).data;
      const v = new DataView(p);
      return v.getUint8(0) === 31 && v.getUint8(1) === 139 && (p = $n(new Uint8Array(p))), {
        data: p
      };
    }
    const _ = Wu(new DataView(c), { z: a, x: l, y: o });
    if (_) {
      const m = Uu(
        new DataView(c),
        _.z,
        _.x,
        _.y
      );
      if (m) {
        let p = yield n.getArrayBuffer(
          i,
          m.offset,
          m.length,
          r
        );
        r.specVersion === 1 && (p = Uo(p));
        const v = jo(new DataView(p), a, l, o);
        if (v) {
          let P = (yield i.getBytes(
            v.offset,
            v.length,
            h
          )).data;
          const w = new DataView(P);
          return w.getUint8(0) === 31 && w.getUint8(1) === 139 && (P = $n(new Uint8Array(P))), {
            data: P
          };
        }
      }
    }
  });
}
var Os = {
  getHeader: Yu,
  getZxy: Gu
};
function Oe(r, i) {
  return (i >>> 0) * 4294967296 + (r >>> 0);
}
function qu(r, i) {
  const n = i.buf;
  let a = n[i.pos++], l = (a & 112) >> 4;
  if (a < 128 || (a = n[i.pos++], l |= (a & 127) << 3, a < 128) || (a = n[i.pos++], l |= (a & 127) << 10, a < 128) || (a = n[i.pos++], l |= (a & 127) << 17, a < 128) || (a = n[i.pos++], l |= (a & 127) << 24, a < 128) || (a = n[i.pos++], l |= (a & 1) << 31, a < 128))
    return Oe(r, l);
  throw new Error("Expected varint not more than 10 bytes");
}
function ei(r) {
  const i = r.buf;
  let n = i[r.pos++], a = n & 127;
  return n < 128 || (n = i[r.pos++], a |= (n & 127) << 7, n < 128) || (n = i[r.pos++], a |= (n & 127) << 14, n < 128) || (n = i[r.pos++], a |= (n & 127) << 21, n < 128) ? a : (n = i[r.pos], a |= (n & 15) << 28, qu(a, r));
}
function Xu(r, i, n, a) {
  if (a === 0) {
    n === 1 && (i[0] = r - 1 - i[0], i[1] = r - 1 - i[1]);
    const l = i[0];
    i[0] = i[1], i[1] = l;
  }
}
var $u = [
  0,
  1,
  5,
  21,
  85,
  341,
  1365,
  5461,
  21845,
  87381,
  349525,
  1398101,
  5592405,
  22369621,
  89478485,
  357913941,
  1431655765,
  5726623061,
  22906492245,
  91625968981,
  366503875925,
  1466015503701,
  5864062014805,
  23456248059221,
  93824992236885,
  375299968947541,
  1501199875790165
];
function Ku(r, i, n) {
  if (r > 26)
    throw Error("Tile zoom level exceeds max safe number limit (26)");
  if (i > Ze(2, r) - 1 || n > Ze(2, r) - 1)
    throw Error("tile x/y outside zoom level bounds");
  const a = $u[r], l = Ze(2, r);
  let o = 0, h = 0, c = 0;
  const f = [i, n];
  let _ = l / 2;
  for (; _ > 0; )
    o = (f[0] & _) > 0 ? 1 : 0, h = (f[1] & _) > 0 ? 1 : 0, c += _ * _ * (3 * o ^ h), Xu(_, f, o, h), _ = _ / 2;
  return a + c;
}
function Is(r, i) {
  return kt(this, null, function* () {
    if (i === 1 || i === 0)
      return r;
    if (i === 2) {
      if (typeof globalThis.DecompressionStream > "u")
        return $n(new Uint8Array(r));
      const n = new Response(r).body;
      if (!n)
        throw Error("Failed to read response stream");
      const a = n.pipeThrough(
        // biome-ignore lint: needed to detect DecompressionStream in browser+node+cloudflare workers
        new globalThis.DecompressionStream("gzip")
      );
      return new Response(a).arrayBuffer();
    }
    throw Error("Compression method not supported");
  });
}
function Ju(r) {
  return r === 1 ? ".mvt" : r === 2 ? ".png" : r === 3 ? ".jpg" : r === 4 ? ".webp" : r === 5 ? ".avif" : "";
}
var Qu = 127;
function tc(r, i) {
  let n = 0, a = r.length - 1;
  for (; n <= a; ) {
    const l = a + n >> 1, o = i - r[l].tileId;
    if (o > 0)
      n = l + 1;
    else if (o < 0)
      a = l - 1;
    else
      return r[l];
  }
  return a >= 0 && (r[a].runLength === 0 || i - r[a].tileId < r[a].runLength) ? r[a] : null;
}
var ec = class {
  constructor(r, i = new Headers()) {
    this.url = r, this.customHeaders = i, this.mustReload = !1;
    let n = "";
    "navigator" in globalThis && (n = globalThis.navigator.userAgent || "");
    const a = n.indexOf("Windows") > -1, l = /Chrome|Chromium|Edg|OPR|Brave/.test(n);
    this.chromeWindowsNoCache = !1, a && l && (this.chromeWindowsNoCache = !0);
  }
  getKey() {
    return this.url;
  }
  /**
   * Mutate the custom [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) set for all requests to the remote archive.
   */
  setHeaders(r) {
    this.customHeaders = r;
  }
  getBytes(r, i, n, a) {
    return kt(this, null, function* () {
      let l, o;
      n ? o = n : (l = new AbortController(), o = l.signal);
      const h = new Headers(this.customHeaders);
      h.set("range", `bytes=${r}-${r + i - 1}`);
      let c;
      this.mustReload ? c = "reload" : this.chromeWindowsNoCache && (c = "no-store");
      let f = yield fetch(this.url, {
        signal: o,
        cache: c,
        headers: h
        //biome-ignore lint: "cache" is incompatible between cloudflare workers and browser
      });
      if (r === 0 && f.status === 416) {
        const v = f.headers.get("Content-Range");
        if (!v || !v.startsWith("bytes */"))
          throw Error("Missing content-length on 416 response");
        const y = +v.substr(8);
        f = yield fetch(this.url, {
          signal: o,
          cache: "reload",
          headers: { range: `bytes=0-${y - 1}` }
          //biome-ignore lint: "cache" is incompatible between cloudflare workers and browser
        });
      }
      let _ = f.headers.get("Etag");
      if (_ != null && _.startsWith("W/") && (_ = null), f.status === 416 || a && _ && _ !== a)
        throw this.mustReload = !0, new Kn(
          `Server returned non-matching ETag ${a} after one retry. Check browser extensions and servers for issues that may affect correct ETag headers.`
        );
      if (f.status >= 300)
        throw Error(`Bad response code: ${f.status}`);
      const m = f.headers.get("Content-Length");
      if (f.status === 200 && (!m || +m > i))
        throw l && l.abort(), Error(
          "Server returned no content-length header or content-length exceeding request. Check that your storage backend supports HTTP Byte Serving."
        );
      return {
        data: yield f.arrayBuffer(),
        etag: _ || void 0,
        cacheControl: f.headers.get("Cache-Control") || void 0,
        expires: f.headers.get("Expires") || void 0
      };
    });
  }
};
function Kt(r, i) {
  const n = r.getUint32(i + 4, !0), a = r.getUint32(i + 0, !0);
  return n * Ze(2, 32) + a;
}
function ic(r, i) {
  const n = new DataView(r), a = n.getUint8(7);
  if (a > 3)
    throw Error(
      `Archive is spec version ${a} but this library supports up to spec version 3`
    );
  return {
    specVersion: a,
    rootDirectoryOffset: Kt(n, 8),
    rootDirectoryLength: Kt(n, 16),
    jsonMetadataOffset: Kt(n, 24),
    jsonMetadataLength: Kt(n, 32),
    leafDirectoryOffset: Kt(n, 40),
    leafDirectoryLength: Kt(n, 48),
    tileDataOffset: Kt(n, 56),
    tileDataLength: Kt(n, 64),
    numAddressedTiles: Kt(n, 72),
    numTileEntries: Kt(n, 80),
    numTileContents: Kt(n, 88),
    clustered: n.getUint8(96) === 1,
    internalCompression: n.getUint8(97),
    tileCompression: n.getUint8(98),
    tileType: n.getUint8(99),
    minZoom: n.getUint8(100),
    maxZoom: n.getUint8(101),
    minLon: n.getInt32(102, !0) / 1e7,
    minLat: n.getInt32(106, !0) / 1e7,
    maxLon: n.getInt32(110, !0) / 1e7,
    maxLat: n.getInt32(114, !0) / 1e7,
    centerZoom: n.getUint8(118),
    centerLon: n.getInt32(119, !0) / 1e7,
    centerLat: n.getInt32(123, !0) / 1e7,
    etag: i
  };
}
function Bs(r) {
  const i = { buf: new Uint8Array(r), pos: 0 }, n = ei(i), a = [];
  let l = 0;
  for (let o = 0; o < n; o++) {
    const h = ei(i);
    a.push({ tileId: l + h, offset: 0, length: 0, runLength: 1 }), l += h;
  }
  for (let o = 0; o < n; o++)
    a[o].runLength = ei(i);
  for (let o = 0; o < n; o++)
    a[o].length = ei(i);
  for (let o = 0; o < n; o++) {
    const h = ei(i);
    h === 0 && o > 0 ? a[o].offset = a[o - 1].offset + a[o - 1].length : a[o].offset = h - 1;
  }
  return a;
}
function nc(r) {
  const i = new DataView(r);
  return i.getUint16(2, !0) === 2 ? (console.warn(
    "PMTiles spec version 2 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
  ), 2) : i.getUint16(2, !0) === 1 ? (console.warn(
    "PMTiles spec version 1 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
  ), 1) : 3;
}
var Kn = class extends Error {
};
function rc(r, i) {
  return kt(this, null, function* () {
    const n = yield r.getBytes(0, 16384);
    if (new DataView(n.data).getUint16(0, !0) !== 19792)
      throw new Error("Wrong magic number for PMTiles archive");
    if (nc(n.data) < 3)
      return [yield Os.getHeader(r)];
    const l = n.data.slice(0, Qu), o = ic(l, n.etag), h = n.data.slice(
      o.rootDirectoryOffset,
      o.rootDirectoryOffset + o.rootDirectoryLength
    ), c = `${r.getKey()}|${o.etag || ""}|${o.rootDirectoryOffset}|${o.rootDirectoryLength}`, f = Bs(
      yield i(h, o.internalCompression)
    );
    return [o, [c, f.length, f]];
  });
}
function oc(r, i, n, a, l) {
  return kt(this, null, function* () {
    const o = yield r.getBytes(n, a, void 0, l.etag), h = yield i(o.data, l.internalCompression), c = Bs(h);
    if (c.length === 0)
      throw new Error("Empty directory is invalid");
    return c;
  });
}
var sc = class {
  constructor(r = 100, i = !0, n = Is) {
    this.cache = /* @__PURE__ */ new Map(), this.invalidations = /* @__PURE__ */ new Map(), this.maxCacheEntries = r, this.counter = 1, this.decompress = n;
  }
  getHeader(r) {
    return kt(this, null, function* () {
      const i = r.getKey(), n = this.cache.get(i);
      if (n)
        return n.lastUsed = this.counter++, yield n.data;
      const a = new Promise((l, o) => {
        rc(r, this.decompress).then((h) => {
          h[1] && this.cache.set(h[1][0], {
            lastUsed: this.counter++,
            data: Promise.resolve(h[1][2])
          }), l(h[0]), this.prune();
        }).catch((h) => {
          o(h);
        });
      });
      return this.cache.set(i, { lastUsed: this.counter++, data: a }), a;
    });
  }
  getDirectory(r, i, n, a) {
    return kt(this, null, function* () {
      const l = `${r.getKey()}|${a.etag || ""}|${i}|${n}`, o = this.cache.get(l);
      if (o)
        return o.lastUsed = this.counter++, yield o.data;
      const h = new Promise((c, f) => {
        oc(r, this.decompress, i, n, a).then((_) => {
          c(_), this.prune();
        }).catch((_) => {
          f(_);
        });
      });
      return this.cache.set(l, { lastUsed: this.counter++, data: h }), h;
    });
  }
  // for v2 backwards compatibility
  getArrayBuffer(r, i, n, a) {
    return kt(this, null, function* () {
      const l = `${r.getKey()}|${a.etag || ""}|${i}|${n}`, o = this.cache.get(l);
      if (o)
        return o.lastUsed = this.counter++, yield o.data;
      const h = new Promise((c, f) => {
        r.getBytes(i, n, void 0, a.etag).then((_) => {
          c(_.data), this.cache.has(l), this.prune();
        }).catch((_) => {
          f(_);
        });
      });
      return this.cache.set(l, { lastUsed: this.counter++, data: h }), h;
    });
  }
  prune() {
    if (this.cache.size >= this.maxCacheEntries) {
      let r = 1 / 0, i;
      this.cache.forEach((n, a) => {
        n.lastUsed < r && (r = n.lastUsed, i = a);
      }), i && this.cache.delete(i);
    }
  }
  invalidate(r) {
    return kt(this, null, function* () {
      const i = r.getKey();
      if (this.invalidations.get(i))
        return yield this.invalidations.get(i);
      this.cache.delete(r.getKey());
      const n = new Promise((a, l) => {
        this.getHeader(r).then((o) => {
          a(), this.invalidations.delete(i);
        }).catch((o) => {
          l(o);
        });
      });
      this.invalidations.set(i, n);
    });
  }
}, ac = class {
  constructor(r, i, n) {
    typeof r == "string" ? this.source = new ec(r) : this.source = r, n ? this.decompress = n : this.decompress = Is, i ? this.cache = i : this.cache = new sc();
  }
  /**
   * Return the header of the archive,
   * including information such as tile type, min/max zoom, bounds, and summary statistics.
   */
  getHeader() {
    return kt(this, null, function* () {
      return yield this.cache.getHeader(this.source);
    });
  }
  /** @hidden */
  getZxyAttempt(r, i, n, a) {
    return kt(this, null, function* () {
      const l = Ku(r, i, n), o = yield this.cache.getHeader(this.source);
      if (o.specVersion < 3)
        return Os.getZxy(o, this.source, this.cache, r, i, n, a);
      if (r < o.minZoom || r > o.maxZoom)
        return;
      let h = o.rootDirectoryOffset, c = o.rootDirectoryLength;
      for (let f = 0; f <= 3; f++) {
        const _ = yield this.cache.getDirectory(
          this.source,
          h,
          c,
          o
        ), m = tc(_, l);
        if (m) {
          if (m.runLength > 0) {
            const p = yield this.source.getBytes(
              o.tileDataOffset + m.offset,
              m.length,
              a,
              o.etag
            );
            return {
              data: yield this.decompress(p.data, o.tileCompression),
              cacheControl: p.cacheControl,
              expires: p.expires
            };
          }
          h = o.leafDirectoryOffset + m.offset, c = m.length;
        } else
          return;
      }
      throw Error("Maximum directory depth exceeded");
    });
  }
  /**
   * Primary method to get a single tile's bytes from an archive.
   *
   * Returns undefined if the tile does not exist in the archive.
   */
  getZxy(r, i, n, a) {
    return kt(this, null, function* () {
      try {
        return yield this.getZxyAttempt(r, i, n, a);
      } catch (l) {
        if (l instanceof Kn)
          return this.cache.invalidate(this.source), yield this.getZxyAttempt(r, i, n, a);
        throw l;
      }
    });
  }
  /** @hidden */
  getMetadataAttempt() {
    return kt(this, null, function* () {
      const r = yield this.cache.getHeader(this.source), i = yield this.source.getBytes(
        r.jsonMetadataOffset,
        r.jsonMetadataLength,
        void 0,
        r.etag
      ), n = yield this.decompress(
        i.data,
        r.internalCompression
      ), a = new TextDecoder("utf-8");
      return JSON.parse(a.decode(n));
    });
  }
  /**
   * Return the arbitrary JSON metadata of the archive.
   */
  getMetadata() {
    return kt(this, null, function* () {
      try {
        return yield this.getMetadataAttempt();
      } catch (r) {
        if (r instanceof Kn)
          return this.cache.invalidate(this.source), yield this.getMetadataAttempt();
        throw r;
      }
    });
  }
  /**
   * Construct a [TileJSON](https://github.com/mapbox/tilejson-spec) object.
   *
   * baseTilesUrl is the desired tiles URL, excluding the suffix `/{z}/{x}/{y}.{ext}`.
   * For example, if the desired URL is `http://example.com/tileset/{z}/{x}/{y}.mvt`,
   * the baseTilesUrl should be `https://example.com/tileset`.
   */
  getTileJson(r) {
    return kt(this, null, function* () {
      const i = yield this.getHeader(), n = yield this.getMetadata(), a = Ju(i.tileType);
      return {
        tilejson: "3.0.0",
        scheme: "xyz",
        tiles: [`${r}/{z}/{x}/{y}${a}`],
        // biome-ignore lint: TileJSON spec
        vector_layers: n.vector_layers,
        attribution: n.attribution,
        description: n.description,
        name: n.name,
        version: n.version,
        bounds: [i.minLon, i.minLat, i.maxLon, i.maxLat],
        center: [i.centerLon, i.centerLat, i.centerZoom],
        minzoom: i.minZoom,
        maxzoom: i.maxZoom
      };
    });
  }
};
function lc(r, i, n, a, l) {
  As(r, i, n || 0, a || r.length - 1, l || hc);
}
function As(r, i, n, a, l) {
  for (; a > n; ) {
    if (a - n > 600) {
      var o = a - n + 1, h = i - n + 1, c = Math.log(o), f = 0.5 * Math.exp(2 * c / 3), _ = 0.5 * Math.sqrt(c * f * (o - f) / o) * (h - o / 2 < 0 ? -1 : 1), m = Math.max(n, Math.floor(i - h * f / o + _)), p = Math.min(a, Math.floor(i + (o - h) * f / o + _));
      As(r, i, m, p, l);
    }
    var v = r[i], y = n, P = a;
    for (ii(r, n, i), l(r[a], v) > 0 && ii(r, n, a); y < P; ) {
      for (ii(r, y, P), y++, P--; l(r[y], v) < 0; ) y++;
      for (; l(r[P], v) > 0; ) P--;
    }
    l(r[n], v) === 0 ? ii(r, n, P) : (P++, ii(r, P, a)), P <= i && (n = P + 1), i <= P && (a = P - 1);
  }
}
function ii(r, i, n) {
  var a = r[i];
  r[i] = r[n], r[n] = a;
}
function hc(r, i) {
  return r < i ? -1 : r > i ? 1 : 0;
}
class uc {
  constructor(i = 9) {
    this._maxEntries = Math.max(4, i), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(i) {
    let n = this.data;
    const a = [];
    if (!Fi(i, n)) return a;
    const l = this.toBBox, o = [];
    for (; n; ) {
      for (let h = 0; h < n.children.length; h++) {
        const c = n.children[h], f = n.leaf ? l(c) : c;
        Fi(i, f) && (n.leaf ? a.push(c) : Fn(i, f) ? this._all(c, a) : o.push(c));
      }
      n = o.pop();
    }
    return a;
  }
  collides(i) {
    let n = this.data;
    if (!Fi(i, n)) return !1;
    const a = [];
    for (; n; ) {
      for (let l = 0; l < n.children.length; l++) {
        const o = n.children[l], h = n.leaf ? this.toBBox(o) : o;
        if (Fi(i, h)) {
          if (n.leaf || Fn(i, h)) return !0;
          a.push(o);
        }
      }
      n = a.pop();
    }
    return !1;
  }
  load(i) {
    if (!(i && i.length)) return this;
    if (i.length < this._minEntries) {
      for (let a = 0; a < i.length; a++)
        this.insert(i[a]);
      return this;
    }
    let n = this._build(i.slice(), 0, i.length - 1, 0);
    if (!this.data.children.length)
      this.data = n;
    else if (this.data.height === n.height)
      this._splitRoot(this.data, n);
    else {
      if (this.data.height < n.height) {
        const a = this.data;
        this.data = n, n = a;
      }
      this._insert(n, this.data.height - n.height - 1, !0);
    }
    return this;
  }
  insert(i) {
    return i && this._insert(i, this.data.height - 1), this;
  }
  clear() {
    return this.data = Be([]), this;
  }
  remove(i, n) {
    if (!i) return this;
    let a = this.data;
    const l = this.toBBox(i), o = [], h = [];
    let c, f, _;
    for (; a || o.length; ) {
      if (a || (a = o.pop(), f = o[o.length - 1], c = h.pop(), _ = !0), a.leaf) {
        const m = cc(i, a.children, n);
        if (m !== -1)
          return a.children.splice(m, 1), o.push(a), this._condense(o), this;
      }
      !_ && !a.leaf && Fn(a, l) ? (o.push(a), h.push(c), c = 0, f = a, a = a.children[0]) : f ? (c++, a = f.children[c], _ = !1) : a = null;
    }
    return this;
  }
  toBBox(i) {
    return i;
  }
  compareMinX(i, n) {
    return i.minX - n.minX;
  }
  compareMinY(i, n) {
    return i.minY - n.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(i) {
    return this.data = i, this;
  }
  _all(i, n) {
    const a = [];
    for (; i; )
      i.leaf ? n.push(...i.children) : a.push(...i.children), i = a.pop();
    return n;
  }
  _build(i, n, a, l) {
    const o = a - n + 1;
    let h = this._maxEntries, c;
    if (o <= h)
      return c = Be(i.slice(n, a + 1)), Ie(c, this.toBBox), c;
    l || (l = Math.ceil(Math.log(o) / Math.log(h)), h = Math.ceil(o / Math.pow(h, l - 1))), c = Be([]), c.leaf = !1, c.height = l;
    const f = Math.ceil(o / h), _ = f * Math.ceil(Math.sqrt(h));
    Vo(i, n, a, _, this.compareMinX);
    for (let m = n; m <= a; m += _) {
      const p = Math.min(m + _ - 1, a);
      Vo(i, m, p, f, this.compareMinY);
      for (let v = m; v <= p; v += f) {
        const y = Math.min(v + f - 1, p);
        c.children.push(this._build(i, v, y, l - 1));
      }
    }
    return Ie(c, this.toBBox), c;
  }
  _chooseSubtree(i, n, a, l) {
    for (; l.push(n), !(n.leaf || l.length - 1 === a); ) {
      let o = 1 / 0, h = 1 / 0, c;
      for (let f = 0; f < n.children.length; f++) {
        const _ = n.children[f], m = Nn(_), p = _c(i, _) - m;
        p < h ? (h = p, o = m < o ? m : o, c = _) : p === h && m < o && (o = m, c = _);
      }
      n = c || n.children[0];
    }
    return n;
  }
  _insert(i, n, a) {
    const l = a ? i : this.toBBox(i), o = [], h = this._chooseSubtree(l, this.data, n, o);
    for (h.children.push(i), si(h, l); n >= 0 && o[n].children.length > this._maxEntries; )
      this._split(o, n), n--;
    this._adjustParentBBoxes(l, o, n);
  }
  // split overflowed node into two
  _split(i, n) {
    const a = i[n], l = a.children.length, o = this._minEntries;
    this._chooseSplitAxis(a, o, l);
    const h = this._chooseSplitIndex(a, o, l), c = Be(a.children.splice(h, a.children.length - h));
    c.height = a.height, c.leaf = a.leaf, Ie(a, this.toBBox), Ie(c, this.toBBox), n ? i[n - 1].children.push(c) : this._splitRoot(a, c);
  }
  _splitRoot(i, n) {
    this.data = Be([i, n]), this.data.height = i.height + 1, this.data.leaf = !1, Ie(this.data, this.toBBox);
  }
  _chooseSplitIndex(i, n, a) {
    let l, o = 1 / 0, h = 1 / 0;
    for (let c = n; c <= a - n; c++) {
      const f = oi(i, 0, c, this.toBBox), _ = oi(i, c, a, this.toBBox), m = mc(f, _), p = Nn(f) + Nn(_);
      m < o ? (o = m, l = c, h = p < h ? p : h) : m === o && p < h && (h = p, l = c);
    }
    return l || a - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(i, n, a) {
    const l = i.leaf ? this.compareMinX : fc, o = i.leaf ? this.compareMinY : dc, h = this._allDistMargin(i, n, a, l), c = this._allDistMargin(i, n, a, o);
    h < c && i.children.sort(l);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(i, n, a, l) {
    i.children.sort(l);
    const o = this.toBBox, h = oi(i, 0, n, o), c = oi(i, a - n, a, o);
    let f = Ni(h) + Ni(c);
    for (let _ = n; _ < a - n; _++) {
      const m = i.children[_];
      si(h, i.leaf ? o(m) : m), f += Ni(h);
    }
    for (let _ = a - n - 1; _ >= n; _--) {
      const m = i.children[_];
      si(c, i.leaf ? o(m) : m), f += Ni(c);
    }
    return f;
  }
  _adjustParentBBoxes(i, n, a) {
    for (let l = a; l >= 0; l--)
      si(n[l], i);
  }
  _condense(i) {
    for (let n = i.length - 1, a; n >= 0; n--)
      i[n].children.length === 0 ? n > 0 ? (a = i[n - 1].children, a.splice(a.indexOf(i[n]), 1)) : this.clear() : Ie(i[n], this.toBBox);
  }
}
function cc(r, i, n) {
  if (!n) return i.indexOf(r);
  for (let a = 0; a < i.length; a++)
    if (n(r, i[a])) return a;
  return -1;
}
function Ie(r, i) {
  oi(r, 0, r.children.length, i, r);
}
function oi(r, i, n, a, l) {
  l || (l = Be(null)), l.minX = 1 / 0, l.minY = 1 / 0, l.maxX = -1 / 0, l.maxY = -1 / 0;
  for (let o = i; o < n; o++) {
    const h = r.children[o];
    si(l, r.leaf ? a(h) : h);
  }
  return l;
}
function si(r, i) {
  return r.minX = Math.min(r.minX, i.minX), r.minY = Math.min(r.minY, i.minY), r.maxX = Math.max(r.maxX, i.maxX), r.maxY = Math.max(r.maxY, i.maxY), r;
}
function fc(r, i) {
  return r.minX - i.minX;
}
function dc(r, i) {
  return r.minY - i.minY;
}
function Nn(r) {
  return (r.maxX - r.minX) * (r.maxY - r.minY);
}
function Ni(r) {
  return r.maxX - r.minX + (r.maxY - r.minY);
}
function _c(r, i) {
  return (Math.max(i.maxX, r.maxX) - Math.min(i.minX, r.minX)) * (Math.max(i.maxY, r.maxY) - Math.min(i.minY, r.minY));
}
function mc(r, i) {
  const n = Math.max(r.minX, i.minX), a = Math.max(r.minY, i.minY), l = Math.min(r.maxX, i.maxX), o = Math.min(r.maxY, i.maxY);
  return Math.max(0, l - n) * Math.max(0, o - a);
}
function Fn(r, i) {
  return r.minX <= i.minX && r.minY <= i.minY && i.maxX <= r.maxX && i.maxY <= r.maxY;
}
function Fi(r, i) {
  return i.minX <= r.maxX && i.minY <= r.maxY && i.maxX >= r.minX && i.maxY >= r.minY;
}
function Be(r) {
  return {
    children: r,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0
  };
}
function Vo(r, i, n, a, l) {
  const o = [i, n];
  for (; o.length; ) {
    if (n = o.pop(), i = o.pop(), n - i <= a) continue;
    const h = i + Math.ceil((n - i) / a / 2) * a;
    lc(r, h, i, n, l), o.push(i, h, h, n);
  }
}
function pc(r) {
  let i = 0, n = 0;
  for (const c of r)
    i += c.w * c.h, n = Math.max(n, c.w);
  r.sort((c, f) => f.h - c.h);
  const l = [{ x: 0, y: 0, w: Math.max(Math.ceil(Math.sqrt(i / 0.95)), n), h: 1 / 0 }];
  let o = 0, h = 0;
  for (const c of r)
    for (let f = l.length - 1; f >= 0; f--) {
      const _ = l[f];
      if (!(c.w > _.w || c.h > _.h)) {
        if (c.x = _.x, c.y = _.y, h = Math.max(h, c.y + c.h), o = Math.max(o, c.x + c.w), c.w === _.w && c.h === _.h) {
          const m = l.pop();
          f < l.length && (l[f] = m);
        } else c.h === _.h ? (_.x += c.w, _.w -= c.w) : c.w === _.w ? (_.y += c.h, _.h -= c.h) : (l.push({
          x: _.x + c.w,
          y: _.y,
          w: _.w - c.w,
          h: c.h
        }), _.y += c.h, _.h -= c.h);
        break;
      }
    }
  return {
    w: o,
    // container width
    h,
    // container height
    fill: i / (o * h) || 0
    // space utilization
  };
}
var gc = Object.defineProperty, Et = Math.pow, C = (r, i) => gc(r, "name", { value: i, configurable: !0 }), Yt = (r, i, n) => new Promise((a, l) => {
  var o = (f) => {
    try {
      c(n.next(f));
    } catch (_) {
      l(_);
    }
  }, h = (f) => {
    try {
      c(n.throw(f));
    } catch (_) {
      l(_);
    }
  }, c = (f) => f.done ? a(f.value) : Promise.resolve(f.value).then(o, h);
  c((n = n.apply(r, i)).next());
}), Zs = class {
  constructor(i, n) {
    this.str = i ?? n, this.perFeature = typeof this.str == "function" && this.str.length === 2;
  }
  get(i, n) {
    return typeof this.str == "function" ? this.str(i, n) : this.str;
  }
};
C(Zs, "StringAttr");
var Bt = Zs, Ds = class {
  constructor(i, n = 1) {
    this.value = i ?? n, this.perFeature = typeof this.value == "function" && this.value.length === 2;
  }
  get(i, n) {
    return typeof this.value == "function" ? this.value(i, n) : this.value;
  }
};
C(Ds, "NumberAttr");
var mt = Ds, Rs = class {
  constructor(i) {
    var n;
    this.labelProps = (n = i == null ? void 0 : i.labelProps) != null ? n : ["name"], this.textTransform = i == null ? void 0 : i.textTransform;
  }
  get(i, n) {
    let a, l;
    typeof this.labelProps == "function" ? l = this.labelProps(i, n) : l = this.labelProps;
    for (let h of l) if (Object.prototype.hasOwnProperty.call(n.props, h) && typeof n.props[h] == "string") {
      a = n.props[h];
      break;
    }
    let o;
    return typeof this.textTransform == "function" ? o = this.textTransform(i, n) : o = this.textTransform, a && o === "uppercase" ? a = a.toUpperCase() : a && o === "lowercase" ? a = a.toLowerCase() : a && o === "capitalize" && (a = a.toLowerCase().split(" ").map((h) => h[0].toUpperCase() + h.slice(1)).join(" ")), a;
  }
};
C(Rs, "TextAttr");
var ar = Rs, Ns = class {
  constructor(i) {
    var n, a;
    i != null && i.font ? this.font = i.font : (this.family = (n = i == null ? void 0 : i.fontFamily) != null ? n : "sans-serif", this.size = (a = i == null ? void 0 : i.fontSize) != null ? a : 12, this.weight = i == null ? void 0 : i.fontWeight, this.style = i == null ? void 0 : i.fontStyle);
  }
  get(i, n) {
    if (this.font) return typeof this.font == "function" ? this.font(i, n) : this.font;
    let a = "";
    this.style && (typeof this.style == "function" ? a = `${this.style(i, n)} ` : a = `${this.style} `);
    let l = "";
    this.weight && (typeof this.weight == "function" ? l = `${this.weight(i, n)} ` : l = `${this.weight} `);
    let o;
    typeof this.size == "function" ? o = this.size(i, n) : o = this.size;
    let h;
    return typeof this.family == "function" ? h = this.family(i, n) : h = this.family, `${a}${l}${o}px ${h}`;
  }
};
C(Ns, "FontAttr");
var lr = Ns, Fs = class {
  constructor(i, n = []) {
    this.value = i ?? n, this.perFeature = typeof this.value == "function" && this.value.length === 2;
  }
  get(i, n) {
    return typeof this.value == "function" ? this.value(i, n) : this.value;
  }
};
C(Fs, "ArrayAttr");
var vc = Fs, yc = C((r, i, n) => {
  let a = [], l, o, h, c = 0, f = 0, _ = 0, m = 0, p = 0, v = 0, y = 0, P = 0, w = 0, z = 0, k = 0, I = 0;
  if (r.length < 2) return [];
  if (r.length === 2) return _ = Math.sqrt(Et(r[1].x - r[0].x, 2) + Et(r[1].y - r[0].y, 2)), [{ length: _, beginIndex: 0, beginDistance: 0, endIndex: 2, endDistance: _ }];
  for (m = Math.sqrt(Et(r[1].x - r[0].x, 2) + Et(r[1].y - r[0].y, 2)), c = 1, f = r.length - 1; c < f; c++) l = r[c - 1], o = r[c], h = r[c + 1], v = o.x - l.x, y = o.y - l.y, P = h.x - o.x, w = h.y - o.y, p = Math.sqrt(P * P + w * w), _ += m, z = Math.acos((v * P + y * w) / (m * p)), (z > i || _ - I > n) && (a.push({ length: _ - I, beginDistance: I, beginIndex: k, endIndex: c + 1, endDistance: _ }), k = c, I = _), m = p;
  return c - k > 0 && a.push({ length: _ - I + p, beginIndex: k, beginDistance: I, endIndex: c + 1, endDistance: _ + p }), a;
}, "linelabel");
function js(r, i, n, a) {
  let l = [];
  for (let o of r) {
    let h = yc(o, Math.PI / 45, i);
    for (let c of h) if (c.length >= i + a) {
      let f = new $(o[c.beginIndex].x, o[c.beginIndex].y), _ = o[c.endIndex - 1], m = new $((_.x - f.x) / c.length, (_.y - f.y) / c.length);
      for (let p = a; p < c.length - i; p += n) l.push({ start: f.add(m.mult(p)), end: f.add(m.mult(p + i)) });
    }
  }
  return l;
}
C(js, "simpleLabel");
function Us(r, i, n, a) {
  let l = i.x - r.x, o = i.y - r.y, h = Math.sqrt(Et(i.x - r.x, 2) + Et(i.y - r.y, 2)), c = [];
  for (let f = 0; f < n + a; f += 2 * a) {
    let _ = f * 1 / h;
    c.push({ x: r.x + _ * l, y: r.y + _ * o });
  }
  return c;
}
C(Us, "lineCells");
function hr(r, i) {
  if (r.length <= i) return [r];
  let n = i - 1, a = r.lastIndexOf(" ", n), l = r.indexOf(" ", n);
  if (a === -1 && l === -1) return [r];
  let o, h;
  return l === -1 || a >= 0 && n - a < l - n ? (o = r.substring(0, a), h = r.substring(a + 1, r.length)) : (o = r.substring(0, l), h = r.substring(l + 1, r.length)), [o, ...hr(h, i)];
}
C(hr, "linebreak");
var xc = ((r) => (r[r.Point = 1] = "Point", r[r.Line = 2] = "Line", r[r.Polygon = 3] = "Polygon", r))(xc || {});
function ce(r) {
  return `${r.x}:${r.y}:${r.z}`;
}
C(ce, "toIndex");
var wc = C((r, i, n) => {
  r.pos = i;
  let a = r.readVarint() + r.pos, l = 1, o = 0, h = 0, c = 0, f = 1 / 0, _ = -1 / 0, m = 1 / 0, p = -1 / 0, v = [], y = [];
  for (; r.pos < a; ) {
    if (o <= 0) {
      let P = r.readVarint();
      l = P & 7, o = P >> 3;
    }
    if (o--, l === 1 || l === 2) h += r.readSVarint() * n, c += r.readSVarint() * n, h < f && (f = h), h > _ && (_ = h), c < m && (m = c), c > p && (p = c), l === 1 && (y.length > 0 && v.push(y), y = []), y.push(new $(h, c));
    else if (l === 7) y && y.push(y[0].clone());
    else throw new Error(`unknown command ${l}`);
  }
  return y && v.push(y), { geom: v, bbox: { minX: f, minY: m, maxX: _, maxY: p } };
}, "loadGeomAndBbox");
function ur(r, i) {
  let n = new nu(new su(r)), a = /* @__PURE__ */ new Map();
  for (let [l, o] of Object.entries(n.layers)) {
    let h = [], c = o;
    for (let f = 0; f < c.length; f++) {
      let _ = wc(c.feature(f)._pbf, c.feature(f)._geometry, i / c.extent), m = 0;
      for (let p of _.geom) m += p.length;
      h.push({ id: c.feature(f).id, geomType: c.feature(f).type, geom: _.geom, numVertices: m, bbox: _.bbox, props: c.feature(f).properties });
    }
    a.set(l, h);
  }
  return a;
}
C(ur, "parseTile");
var Vs = class {
  constructor(i, n) {
    typeof i == "string" ? this.p = new ac(i) : this.p = i, this.zoomaborts = [], this.shouldCancelZooms = n;
  }
  get(i, n) {
    return Yt(this, null, function* () {
      this.shouldCancelZooms && (this.zoomaborts = this.zoomaborts.filter((h) => h.z !== i.z ? (h.controller.abort(), !1) : !0));
      let a = new AbortController();
      this.zoomaborts.push({ z: i.z, controller: a });
      let l = a.signal, o = yield this.p.getZxy(i.z, i.x, i.y, l);
      return o ? ur(o.data, n) : /* @__PURE__ */ new Map();
    });
  }
};
C(Vs, "PmtilesSource");
var Ho = Vs, Hs = class {
  constructor(i, n) {
    this.url = i, this.zoomaborts = [], this.shouldCancelZooms = n;
  }
  get(i, n) {
    return Yt(this, null, function* () {
      this.shouldCancelZooms && (this.zoomaborts = this.zoomaborts.filter((h) => h.z !== i.z ? (h.controller.abort(), !1) : !0));
      let a = this.url.replace("{z}", i.z.toString()).replace("{x}", i.x.toString()).replace("{y}", i.y.toString()), l = new AbortController();
      this.zoomaborts.push({ z: i.z, controller: l });
      let o = l.signal;
      return new Promise((h, c) => {
        fetch(a, { signal: o }).then((f) => f.arrayBuffer()).then((f) => {
          let _ = ur(f, n);
          h(_);
        }).catch((f) => {
          c(f);
        });
      });
    });
  }
};
C(Hs, "ZxySource");
var bc = Hs, Jn = 6378137, Wo = 85.0511287798, ji = Jn * Math.PI, Lc = C((r) => {
  let i = Math.PI / 180, n = Math.max(Math.min(Wo, r[0]), -Wo), a = Math.sin(n * i);
  return new $(Jn * r[1] * i, Jn * Math.log((1 + a) / (1 - a)) / 2);
}, "project");
function Qn(r) {
  return r * r;
}
C(Qn, "sqr");
function hi(r, i) {
  return Qn(r.x - i.x) + Qn(r.y - i.y);
}
C(hi, "dist2");
function Ws(r, i, n) {
  let a = hi(i, n);
  if (a === 0) return hi(r, i);
  let l = ((r.x - i.x) * (n.x - i.x) + (r.y - i.y) * (n.y - i.y)) / a;
  return l = Math.max(0, Math.min(1, l)), hi(r, new $(i.x + l * (n.x - i.x), i.y + l * (n.y - i.y)));
}
C(Ws, "distToSegmentSquared");
function tr(r, i) {
  let n = !1;
  for (let a = 0, l = i.length - 1; a < i.length; l = a++) {
    let o = i[a].x, h = i[a].y, c = i[l].x, f = i[l].y;
    h > r.y != f > r.y && r.x < (c - o) * (r.y - h) / (f - h) + o && (n = !n);
  }
  return n;
}
C(tr, "isInRing");
function Ys(r) {
  let i = 0;
  for (let n = 0; n < r.length; n++) {
    let a = (n + 1) % r.length;
    i += r[n].x * r[a].y, i -= r[a].x * r[n].y;
  }
  return i < 0;
}
C(Ys, "isCcw");
function Gs(r, i) {
  let n = !1;
  for (let a of i) if (Ys(a)) tr(r, a) && (n = !1);
  else {
    if (n) return !0;
    tr(r, a) && (n = !0);
  }
  return n;
}
C(Gs, "pointInPolygon");
function qs(r, i) {
  let n = 1 / 0;
  for (let a of i) {
    let l = Math.sqrt(hi(r, a[0]));
    l < n && (n = l);
  }
  return n;
}
C(qs, "pointMinDistToPoints");
function Xs(r, i) {
  let n = 1 / 0;
  for (let a of i) for (let l = 0; l < a.length - 1; l++) {
    let o = Math.sqrt(Ws(r, a[l], a[l + 1]));
    o < n && (n = o);
  }
  return n;
}
C(Xs, "pointMinDistToLines");
var $s = class {
  constructor(i, n) {
    this.source = i, this.cache = /* @__PURE__ */ new Map(), this.inflight = /* @__PURE__ */ new Map(), this.tileSize = n;
  }
  get(i) {
    return Yt(this, null, function* () {
      let n = ce(i);
      return new Promise((a, l) => {
        let o = this.cache.get(n);
        if (o) o.used = performance.now(), a(o.data);
        else {
          let h = this.inflight.get(n);
          h ? h.push({ resolve: a, reject: l }) : (this.inflight.set(n, []), this.source.get(i, this.tileSize).then((c) => {
            this.cache.set(n, { used: performance.now(), data: c });
            let f = this.inflight.get(n);
            if (f) for (let _ of f) _.resolve(c);
            if (this.inflight.delete(n), a(c), this.cache.size >= 64) {
              let _ = 1 / 0, m;
              this.cache.forEach((p, v) => {
                p.used < _ && (_ = p.used, m = v);
              }), m && this.cache.delete(m);
            }
          }).catch((c) => {
            let f = this.inflight.get(n);
            if (f) for (let _ of f) _.reject(c);
            this.inflight.delete(n), l(c);
          }));
        }
      });
    });
  }
  queryFeatures(i, n, a, l) {
    let o = Lc([n, i]), h = new $((o.x + ji) / (ji * 2), 1 - (o.y + ji) / (ji * 2));
    h.x > 1 && (h.x = h.x - Math.floor(h.x));
    let c = h.mult(1 << a), f = Math.floor(c.x), _ = Math.floor(c.y), m = ce({ z: a, x: f, y: _ }), p = [], v = this.cache.get(m);
    if (v) {
      let y = new $((c.x - f) * this.tileSize, (c.y - _) * this.tileSize);
      for (let [P, w] of v.data.entries()) for (let z of w) z.geomType === 1 ? qs(y, z.geom) < l && p.push({ feature: z, layerName: P }) : z.geomType === 2 ? Xs(y, z.geom) < l && p.push({ feature: z, layerName: P }) : Gs(y, z.geom) && p.push({ feature: z, layerName: P });
    }
    return p;
  }
};
C($s, "TileCache");
var Pc = $s, Cc = ((r) => (r[r.Left = 1] = "Left", r[r.Center = 2] = "Center", r[r.Right = 3] = "Right", r))(Cc || {}), Tc = ((r) => (r[r.N = 1] = "N", r[r.Ne = 2] = "Ne", r[r.E = 3] = "E", r[r.Se = 4] = "Se", r[r.S = 5] = "S", r[r.Sw = 6] = "Sw", r[r.W = 7] = "W", r[r.Nw = 8] = "Nw", r))(Tc || {});
C((r, i, n) => {
  let a = document.createElement("canvas"), l = a.getContext("2d");
  return a.width = r, a.height = i, l !== null && n(a, l), a;
}, "createPattern");
var Ks = class {
  constructor(i) {
    var n;
    this.pattern = i.pattern, this.fill = new Bt(i.fill, "black"), this.opacity = new mt(i.opacity, 1), this.stroke = new Bt(i.stroke, "black"), this.width = new mt(i.width, 0), this.perFeature = (n = this.fill.perFeature || this.opacity.perFeature || this.stroke.perFeature || this.width.perFeature || i.perFeature) != null ? n : !1, this.doStroke = !1;
  }
  before(i, n) {
    if (!this.perFeature) {
      i.globalAlpha = this.opacity.get(n), i.fillStyle = this.fill.get(n), i.strokeStyle = this.stroke.get(n);
      let a = this.width.get(n);
      a > 0 && (this.doStroke = !0), i.lineWidth = a;
    }
    if (this.pattern) {
      let a = i.createPattern(this.pattern, "repeat");
      a && (i.fillStyle = a);
    }
  }
  draw(i, n, a, l) {
    let o = !1;
    if (this.perFeature) {
      i.globalAlpha = this.opacity.get(a, l), i.fillStyle = this.fill.get(a, l);
      let c = this.width.get(a, l);
      c && (o = !0, i.strokeStyle = this.stroke.get(a, l), i.lineWidth = c);
    }
    let h = C(() => {
      i.fill(), (o || this.doStroke) && i.stroke();
    }, "drawPath");
    i.beginPath();
    for (let c of n) for (let f = 0; f < c.length; f++) {
      let _ = c[f];
      f === 0 ? i.moveTo(_.x, _.y) : i.lineTo(_.x, _.y);
    }
    h();
  }
};
C(Ks, "PolygonSymbolizer");
var bt = Ks;
function Mc(r, i) {
  return (n) => {
    let a = n - r;
    return a >= 0 && a < i.length ? i[a] : 0;
  };
}
C(Mc, "arr");
function Js(r, i) {
  let n = 0;
  for (; i[n + 1][0] < r; ) n++;
  return n;
}
C(Js, "getStopIndex");
function Qs(r, i, n) {
  return r * (n - i) + i;
}
C(Qs, "interpolate");
function ta(r, i, n, a) {
  let l = a[i + 1][0] - a[i][0], o = r - a[i][0];
  return l === 0 ? 0 : n === 1 ? o / l : (Et(n, o) - 1) / (Et(n, l) - 1);
}
C(ta, "computeInterpolationFactor");
function Wt(r, i) {
  return (n) => {
    if (i.length < 1) return 0;
    if (n <= i[0][0]) return i[0][1];
    if (n >= i[i.length - 1][0]) return i[i.length - 1][1];
    let a = Js(n, i), l = ta(n, a, r, i);
    return Qs(l, i[a][1], i[a + 1][1]);
  };
}
C(Wt, "exp");
function kc(r, i) {
  return (n) => {
    if (i.length < 1) return 0;
    let a = r;
    for (let l = 0; l < i.length; l++) n >= i[l][0] && (a = i[l][1]);
    return a;
  };
}
C(kc, "step");
function er(r) {
  return Wt(1, r);
}
C(er, "linear");
var ea = class {
  constructor(i) {
    var n;
    this.color = new Bt(i.color, "black"), this.width = new mt(i.width), this.opacity = new mt(i.opacity), this.dash = i.dash ? new vc(i.dash) : null, this.dashColor = new Bt(i.dashColor, "black"), this.dashWidth = new mt(i.dashWidth, 1), this.lineCap = new Bt(i.lineCap, "butt"), this.lineJoin = new Bt(i.lineJoin, "miter"), this.skip = !1, this.perFeature = !!((n = this.dash) != null && n.perFeature || this.color.perFeature || this.opacity.perFeature || this.width.perFeature || this.lineCap.perFeature || this.lineJoin.perFeature || i.perFeature);
  }
  before(i, n) {
    this.perFeature || (i.strokeStyle = this.color.get(n), i.lineWidth = this.width.get(n), i.globalAlpha = this.opacity.get(n), i.lineCap = this.lineCap.get(n), i.lineJoin = this.lineJoin.get(n));
  }
  draw(i, n, a, l) {
    if (this.skip) return;
    let o = C(() => {
      this.perFeature && (i.globalAlpha = this.opacity.get(a, l), i.lineCap = this.lineCap.get(a, l), i.lineJoin = this.lineJoin.get(a, l)), this.dash ? (i.save(), this.perFeature ? (i.lineWidth = this.dashWidth.get(a, l), i.strokeStyle = this.dashColor.get(a, l), i.setLineDash(this.dash.get(a, l))) : i.setLineDash(this.dash.get(a)), i.stroke(), i.restore()) : (i.save(), this.perFeature && (i.lineWidth = this.width.get(a, l), i.strokeStyle = this.color.get(a, l)), i.stroke(), i.restore());
    }, "strokePath");
    i.beginPath();
    for (let h of n) for (let c = 0; c < h.length; c++) {
      let f = h[c];
      c === 0 ? i.moveTo(f.x, f.y) : i.lineTo(f.x, f.y);
    }
    o();
  }
};
C(ea, "LineSymbolizer");
var At = ea, Sc = class {
  constructor(i) {
    this.name = i.name, this.sheet = i.sheet, this.dpr = window.devicePixelRatio;
  }
  place(i, n, a) {
    n[0];
    let l = new $(n[0][0].x, n[0][0].y), o = this.sheet.get(this.name), h = o.w / this.dpr, c = o.h / this.dpr, f = { minX: l.x - h / 2, minY: l.y - c / 2, maxX: l.x + h / 2, maxY: l.y + c / 2 };
    return [{ anchor: l, bboxes: [f], draw: C((_) => {
      _.globalAlpha = 1, _.drawImage(this.sheet.canvas, o.x, o.y, o.w, o.h, -o.w / 2 / this.dpr, -o.h / 2 / this.dpr, o.w / 2, o.h / 2);
    }, "draw") }];
  }
};
C(Sc, "IconSymbolizer");
var ia = class {
  constructor(i) {
    this.radius = new mt(i.radius, 3), this.fill = new Bt(i.fill, "black"), this.stroke = new Bt(i.stroke, "white"), this.width = new mt(i.width, 0), this.opacity = new mt(i.opacity);
  }
  draw(i, n, a, l) {
    i.globalAlpha = this.opacity.get(a, l);
    let o = this.radius.get(a, l), h = this.width.get(a, l);
    h > 0 && (i.strokeStyle = this.stroke.get(a, l), i.lineWidth = h, i.beginPath(), i.arc(n[0][0].x, n[0][0].y, o + h / 2, 0, 2 * Math.PI), i.stroke()), i.fillStyle = this.fill.get(a, l), i.beginPath(), i.arc(n[0][0].x, n[0][0].y, o, 0, 2 * Math.PI), i.fill();
  }
  place(i, n, a) {
    n[0];
    let l = new $(n[0][0].x, n[0][0].y), o = this.radius.get(i.zoom, a), h = { minX: l.x - o, minY: l.y - o, maxX: l.x + o, maxY: l.y + o };
    return [{ anchor: l, bboxes: [h], draw: C((c) => {
      this.draw(c, [[new $(0, 0)]], i.zoom, a);
    }, "draw") }];
  }
};
C(ia, "CircleSymbolizer");
var zc = ia, Ec = class {
  constructor(i) {
    this.font = new lr(i), this.text = new ar(i), this.fill = new Bt(i.fill, "black"), this.background = new Bt(i.background, "white"), this.padding = new mt(i.padding, 0);
  }
  place(i, n, a) {
    let l = this.text.get(i.zoom, a);
    if (!l) return;
    let o = this.font.get(i.zoom, a);
    i.scratch.font = o;
    let h = i.scratch.measureText(l), c = h.width, f = h.actualBoundingBoxAscent, _ = h.actualBoundingBoxDescent;
    n[0];
    let m = new $(n[0][0].x, n[0][0].y), p = this.padding.get(i.zoom, a), v = { minX: m.x - c / 2 - p, minY: m.y - f - p, maxX: m.x + c / 2 + p, maxY: m.y + _ + p };
    return [{ anchor: m, bboxes: [v], draw: C((y) => {
      y.globalAlpha = 1, y.fillStyle = this.background.get(i.zoom, a), y.fillRect(-c / 2 - p, -f - p, c + 2 * p, f + _ + 2 * p), y.fillStyle = this.fill.get(i.zoom, a), y.font = o, y.fillText(l, -c / 2, 0);
    }, "draw") }];
  }
};
C(Ec, "ShieldSymbolizer");
var Oc = class {
  constructor(i) {
    this.list = i;
  }
  place(i, n, a) {
    let l = this.list[0].place(i, n, a);
    if (!l) return;
    let o = l[0], h = o.anchor, c = o.bboxes[0], f = c.maxY - c.minY, _ = [{ draw: o.draw, translate: { x: 0, y: 0 } }], m = [[new $(n[0][0].x, n[0][0].y + f)]];
    for (let p = 1; p < this.list.length; p++) l = this.list[p].place(i, m, a), l && (o = l[0], c = na(c, o.bboxes[0]), _.push({ draw: o.draw, translate: { x: 0, y: f } }));
    return [{ anchor: h, bboxes: [c], draw: C((p) => {
      for (let v of _) p.save(), p.translate(v.translate.x, v.translate.y), v.draw(p), p.restore();
    }, "draw") }];
  }
};
C(Oc, "FlexSymbolizer");
var na = C((r, i) => ({ minX: Math.min(r.minX, i.minX), minY: Math.min(r.minY, i.minY), maxX: Math.max(r.maxX, i.maxX), maxY: Math.max(r.maxY, i.maxY) }), "mergeBbox"), ra = class {
  constructor(i) {
    this.list = i;
  }
  place(i, n, a) {
    let l = this.list[0];
    if (!l) return;
    let o = l.place(i, n, a);
    if (!o) return;
    let h = o[0], c = h.anchor, f = h.bboxes[0], _ = [h.draw];
    for (let m = 1; m < this.list.length; m++) {
      if (o = this.list[m].place(i, n, a), !o) return;
      h = o[0], f = na(f, h.bboxes[0]), _.push(h.draw);
    }
    return [{ anchor: c, bboxes: [f], draw: C((m) => {
      for (let p of _) p(m);
    }, "draw") }];
  }
};
C(ra, "GroupSymbolizer");
var Ic = ra, oa = class {
  constructor(i) {
    this.symbolizer = i;
  }
  place(i, n, a) {
    let l = n[0][0], o = this.symbolizer.place(i, [[new $(0, 0)]], a);
    if (!o || o.length === 0) return;
    let h = o[0], c = h.bboxes[0], f = c.maxX - c.minX, _ = c.maxY - c.minY, m = { minX: l.x - f / 2, maxX: l.x + f / 2, minY: l.y - _ / 2, maxY: l.y + _ / 2 };
    return [{ anchor: l, bboxes: [m], draw: C((p) => {
      p.translate(-f / 2, _ / 2 - c.maxY), h.draw(p, { justify: 2 });
    }, "draw") }];
  }
};
C(oa, "CenteredSymbolizer");
var Bc = oa, Ac = class {
  constructor(i, n) {
    this.padding = new mt(i, 0), this.symbolizer = n;
  }
  place(i, n, a) {
    let l = this.symbolizer.place(i, n, a);
    if (!l || l.length === 0) return;
    let o = this.padding.get(i.zoom, a);
    for (let h of l) for (let c of h.bboxes) c.minX -= o, c.minY -= o, c.maxX += o, c.maxY += o;
    return l;
  }
};
C(Ac, "Padding");
var sa = class {
  constructor(i) {
    this.font = new lr(i), this.text = new ar(i), this.fill = new Bt(i.fill, "black"), this.stroke = new Bt(i.stroke, "black"), this.width = new mt(i.width, 0), this.lineHeight = new mt(i.lineHeight, 1), this.letterSpacing = new mt(i.letterSpacing, 0), this.maxLineCodeUnits = new mt(i.maxLineChars, 15), this.justify = i.justify;
  }
  place(i, n, a) {
    let l = this.text.get(i.zoom, a);
    if (!l) return;
    let o = this.font.get(i.zoom, a);
    i.scratch.font = o;
    let h = this.letterSpacing.get(i.zoom, a), c = hr(l, this.maxLineCodeUnits.get(i.zoom, a)), f = "", _ = 0;
    for (let k of c) k.length > _ && (_ = k.length, f = k);
    let m = i.scratch.measureText(f), p = m.width + h * (_ - 1), v = m.actualBoundingBoxAscent, y = m.actualBoundingBoxDescent, P = (v + y) * this.lineHeight.get(i.zoom, a), w = new $(n[0][0].x, n[0][0].y), z = { minX: w.x, minY: w.y - v, maxX: w.x + p, maxY: w.y + y + (c.length - 1) * P };
    return [{ anchor: w, bboxes: [z], draw: C((k, I) => {
      k.globalAlpha = 1, k.font = o, k.fillStyle = this.fill.get(i.zoom, a);
      let A = this.width.get(i.zoom, a), O = 0;
      for (let S of c) {
        let rt = 0;
        if (this.justify === 2 || I && I.justify === 2 ? rt = (p - k.measureText(S).width) / 2 : (this.justify === 3 || I && I.justify === 3) && (rt = p - k.measureText(S).width), A) if (k.lineWidth = A * 2, k.strokeStyle = this.stroke.get(i.zoom, a), h > 0) {
          let G = rt;
          for (let tt of S) k.strokeText(tt, G, O), G += k.measureText(tt).width + h;
        } else k.strokeText(S, rt, O);
        if (h > 0) {
          let G = rt;
          for (let tt of S) k.fillText(tt, G, O), G += k.measureText(tt).width + h;
        } else k.fillText(S, rt, O);
        O += P;
      }
    }, "draw") }];
  }
};
C(sa, "TextSymbolizer");
var aa = sa, la = class {
  constructor(i) {
    this.centered = new Bc(new aa(i));
  }
  place(i, n, a) {
    return this.centered.place(i, n, a);
  }
};
C(la, "CenteredTextSymbolizer");
var ni = la, ha = class {
  constructor(i, n) {
    var a, l, o;
    this.symbolizer = i, this.offsetX = new mt(n.offsetX, 0), this.offsetY = new mt(n.offsetY, 0), this.justify = (a = n.justify) != null ? a : void 0, this.placements = (l = n.placements) != null ? l : [2, 6, 8, 4, 1, 3, 5, 7], this.ddValues = (o = n.ddValues) != null ? o : () => ({});
  }
  place(i, n, a) {
    if (a.geomType !== 1) return;
    let l = n[0][0], o = this.symbolizer.place(i, [[new $(0, 0)]], a);
    if (!o || o.length === 0) return;
    let h = o[0], c = h.bboxes[0], f = this.offsetX, _ = this.offsetY, m = this.justify, p = this.placements, { offsetX: v, offsetY: y, justify: P, placements: w } = this.ddValues(i.zoom, a) || {};
    v && (f = new mt(v, 0)), y && (_ = new mt(y, 0)), P && (m = P), w && (p = w);
    let z = f.get(i.zoom, a), k = _.get(i.zoom, a), I = C((G, tt) => ({ minX: G.x + tt.x + c.minX, minY: G.y + tt.y + c.minY, maxX: G.x + tt.x + c.maxX, maxY: G.y + tt.y + c.maxY }), "getBbox"), A = new $(z, k), O, S = C((G) => {
      G.translate(A.x, A.y), h.draw(G, { justify: O });
    }, "draw"), rt = C((G, tt) => {
      let vt = I(G, tt);
      if (!i.index.bboxCollides(vt, i.order)) return [{ anchor: l, bboxes: [vt], draw: S }];
    }, "placeLabelInPoint");
    for (let G of p) {
      let tt = this.computeXaxisOffset(z, c, G), vt = this.computeYaxisOffset(k, c, G);
      return O = this.computeJustify(m, G), A = new $(tt, vt), rt(l, A);
    }
  }
  computeXaxisOffset(i, n, a) {
    let l = n.maxX, o = l / 2;
    return [1, 5].includes(a) ? i - o : [8, 7, 6].includes(a) ? i - l : i;
  }
  computeYaxisOffset(i, n, a) {
    let l = Math.abs(n.minY), o = n.maxY, h = (n.minY + n.maxY) / 2;
    return [3, 7].includes(a) ? i - h : [8, 2, 1].includes(a) ? i - o : [6, 4, 5].includes(a) ? i + l : i;
  }
  computeJustify(i, n) {
    return i || ([1, 5].includes(n) ? 2 : [2, 3, 4].includes(n) ? 1 : 3);
  }
};
C(ha, "OffsetSymbolizer");
var Zc = ha, ua = class {
  constructor(i) {
    this.symbolizer = new Zc(new aa(i), i);
  }
  place(i, n, a) {
    return this.symbolizer.place(i, n, a);
  }
};
C(ua, "OffsetTextSymbolizer");
var Dc = ua, Rc = ((r) => (r[r.Above = 1] = "Above", r[r.Center = 2] = "Center", r[r.Below = 3] = "Below", r))(Rc || {}), ca = class {
  constructor(i) {
    var n;
    this.font = new lr(i), this.text = new ar(i), this.fill = new Bt(i.fill, "black"), this.stroke = new Bt(i.stroke, "black"), this.width = new mt(i.width, 0), this.offset = new mt(i.offset, 0), this.position = (n = i.position) != null ? n : 1, this.maxLabelCodeUnits = new mt(i.maxLabelChars, 40), this.repeatDistance = new mt(i.repeatDistance, 250);
  }
  place(i, n, a) {
    let l = this.text.get(i.zoom, a);
    if (!l || l.length > this.maxLabelCodeUnits.get(i.zoom, a)) return;
    let o = 20, h = a.bbox;
    if (h.maxY - h.minY < o && h.maxX - h.minX < o) return;
    let c = this.font.get(i.zoom, a);
    i.scratch.font = c;
    let f = i.scratch.measureText(l), _ = f.width, m = f.actualBoundingBoxAscent + f.actualBoundingBoxDescent, p = this.repeatDistance.get(i.zoom, a);
    i.overzoom > 4 && (p *= 1 << i.overzoom - 4);
    let v = m * 2, y = js(n, _, p, v);
    if (y.length === 0) return;
    let P = [];
    for (let w of y) {
      let z = w.end.x - w.start.x, k = w.end.y - w.start.y, I = Us(w.start, w.end, _, v / 2).map((O) => ({ minX: O.x - v / 2, minY: O.y - v / 2, maxX: O.x + v / 2, maxY: O.y + v / 2 })), A = C((O) => {
        O.globalAlpha = 1, O.rotate(Math.atan2(k, z)), z < 0 && (O.scale(-1, -1), O.translate(-_, 0));
        let S = 0;
        this.position === 3 ? S += m : this.position === 2 && (S += m / 2), O.translate(0, S - this.offset.get(i.zoom, a)), O.font = c;
        let rt = this.width.get(i.zoom, a);
        rt && (O.lineWidth = rt, O.strokeStyle = this.stroke.get(i.zoom, a), O.strokeText(l, 0, 0)), O.fillStyle = this.fill.get(i.zoom, a), O.fillText(l, 0, 0);
      }, "draw");
      P.push({ anchor: w.start, bboxes: I, draw: A, deduplicationKey: l, deduplicationDistance: p });
    }
    return P;
  }
};
C(ca, "LineLabelSymbolizer");
var jn = ca, Dt = C((r, i) => {
  let n = r[i];
  return typeof n == "string" ? n : "";
}, "getString"), Yo = C((r, i) => {
  let n = r[i];
  return typeof n == "number" ? n : 0;
}, "getNumber"), cr = C((r) => [{ dataLayer: "earth", symbolizer: new bt({ fill: r.earth }) }, { dataLayer: "landuse", symbolizer: new bt({ fill: C((i, n) => An(r.park_a, r.park_b, Math.min(Math.max(i / 12, 12), 0)), "fill") }), filter: C((i, n) => {
  let a = Dt(n.props, "pmap:kind");
  return ["allotments", "village_green", "playground"].includes(a);
}, "filter") }, { dataLayer: "landuse", symbolizer: new bt({ fill: r.park_b, opacity: 0.7 }), filter: C((i, n) => {
  let a = Dt(n.props, "pmap:kind");
  return ["national_park", "park", "cemetery", "protected_area", "nature_reserve", "forest", "golf_course"].includes(a);
}, "filter") }, { dataLayer: "landuse", symbolizer: new bt({ fill: r.hospital }), filter: C((i, n) => n.props["pmap:kind"] === "hospital", "filter") }, { dataLayer: "landuse", symbolizer: new bt({ fill: r.industrial }), filter: C((i, n) => n.props["pmap:kind"] === "industrial", "filter") }, { dataLayer: "landuse", symbolizer: new bt({ fill: r.school }), filter: C((i, n) => {
  let a = Dt(n.props, "pmap:kind");
  return ["school", "university", "college"].includes(a);
}, "filter") }, { dataLayer: "landuse", symbolizer: new bt({ fill: r.beach }), filter: C((i, n) => n.props["pmap:kind"] === "beach", "filter") }, { dataLayer: "landuse", symbolizer: new bt({ fill: r.zoo }), filter: C((i, n) => n.props["pmap:kind"] === "zoo", "filter") }, { dataLayer: "landuse", symbolizer: new bt({ fill: r.zoo }), filter: C((i, n) => {
  let a = Dt(n.props, "pmap:kind");
  return ["military", "naval_base", "airfield"].includes(a);
}, "filter") }, { dataLayer: "natural", symbolizer: new bt({ fill: C((i, n) => An(r.wood_a, r.wood_b, Math.min(Math.max(i / 12, 12), 0)), "fill") }), filter: C((i, n) => {
  let a = Dt(n.props, "pmap:kind");
  return ["wood", "nature_reserve", "forest"].includes(a);
}, "filter") }, { dataLayer: "natural", symbolizer: new bt({ fill: C((i, n) => An(r.scrub_a, r.scrub_b, Math.min(Math.max(i / 12, 12), 0)), "fill") }), filter: C((i, n) => {
  let a = Dt(n.props, "pmap:kind");
  return ["scrub", "grassland", "grass"].includes(a);
}, "filter") }, { dataLayer: "natural", symbolizer: new bt({ fill: r.scrub_b }), filter: C((i, n) => {
  let a = Dt(n.props, "pmap:kind");
  return ["scrub", "grassland", "grass"].includes(a);
}, "filter") }, { dataLayer: "natural", symbolizer: new bt({ fill: r.glacier }), filter: C((i, n) => n.props["pmap:kind"] === "glacier", "filter") }, { dataLayer: "natural", symbolizer: new bt({ fill: r.sand }), filter: C((i, n) => n.props["pmap:kind"] === "sand", "filter") }, { dataLayer: "landuse", symbolizer: new bt({ fill: r.aerodrome }), filter: C((i, n) => n.props["pmap:kind"] === "aerodrome", "filter") }, { dataLayer: "water", symbolizer: new bt({ fill: r.water }) }, { dataLayer: "transit", symbolizer: new At({ color: r.runway, width: C((i, n) => Wt(1.6, [[11, 0], [13, 4], [19, 30]])(i), "width") }), filter: C((i, n) => n.props["pmap:kind_detail"] === "runway", "filter") }, { dataLayer: "transit", symbolizer: new At({ color: r.runway, width: C((i, n) => Wt(1.6, [[14, 0], [14.5, 1], [16, 6]])(i), "width") }), filter: C((i, n) => n.props["pmap:kind_detail"] === "taxiway", "filter") }, { dataLayer: "transit", symbolizer: new At({ color: r.pier, width: C((i, n) => Wt(1.6, [[13, 0], [13.5, 0, 5], [21, 16]])(i), "width") }), filter: C((i, n) => n.props["pmap:kind"] === "pier", "filter") }, { dataLayer: "physical_line", minzoom: 14, symbolizer: new At({ color: r.water, width: C((i, n) => Wt(1.6, [[9, 0], [9.5, 1], [18, 12]])(i), "width") }), filter: C((i, n) => n.props["pmap:kind"] === "river", "filter") }, { dataLayer: "physical_line", minzoom: 14, symbolizer: new At({ color: r.water, width: 0.5 }), filter: C((i, n) => n.props["pmap:kind"] === "stream", "filter") }, { dataLayer: "landuse", symbolizer: new bt({ fill: r.pedestrian }), filter: C((i, n) => n.props["pmap:kind"] === "pedestrian", "filter") }, { dataLayer: "landuse", symbolizer: new bt({ fill: r.pier }), filter: C((i, n) => n.props["pmap:kind"] === "pier", "filter") }, { dataLayer: "buildings", symbolizer: new bt({ fill: r.buildings, opacity: 0.5 }) }, { dataLayer: "roads", symbolizer: new At({ color: r.major, width: C((i, n) => Wt(1.6, [[14, 0], [20, 7]])(i), "width") }), filter: C((i, n) => {
  let a = Dt(n.props, "pmap:kind");
  return ["other", "path"].includes(a);
}, "filter") }, { dataLayer: "roads", symbolizer: new At({ color: r.major, width: C((i, n) => Wt(1.6, [[13, 0], [18, 8]])(i), "width") }), filter: C((i, n) => n.props["pmap:kind"] === "minor_road", "filter") }, { dataLayer: "roads", symbolizer: new At({ color: r.major, width: C((i, n) => Wt(1.6, [[7, 0], [12, 1.2], [15, 3], [18, 13]])(i), "width") }), filter: C((i, n) => n.props["pmap:kind"] === "medium_road", "filter") }, { dataLayer: "roads", symbolizer: new At({ color: r.major, width: C((i, n) => Wt(1.6, [[6, 0], [12, 1.6], [15, 3], [18, 13]])(i), "width") }), filter: C((i, n) => n.props["pmap:kind"] === "major_road", "filter") }, { dataLayer: "roads", symbolizer: new At({ color: r.major, width: C((i, n) => Wt(1.6, [[3, 0], [6, 1.1], [12, 1.6], [15, 5], [18, 15]])(i), "width") }), filter: C((i, n) => n.props["pmap:kind"] === "highway", "filter") }, { dataLayer: "boundaries", symbolizer: new At({ dash: [3, 2], color: r.boundaries, width: 1 }), filter: C((i, n) => {
  let a = n.props["pmap:min_admin_level"];
  return typeof a == "number" && a <= 2;
}, "filter") }, { dataLayer: "transit", symbolizer: new At({ dash: [0.3, 0.75], color: r.railway, dashWidth: C((i, n) => Wt(1.6, [[4, 0], [7, 0.15], [19, 9]])(i), "dashWidth"), opacity: 0.5 }), filter: C((i, n) => n.props["pmap:kind"] === "rail", "filter") }, { dataLayer: "boundaries", symbolizer: new At({ dash: [3, 2], color: r.boundaries, width: 0.5 }), filter: C((i, n) => {
  let a = n.props["pmap:min_admin_level"];
  return typeof a == "number" && a > 2;
}, "filter") }], "paintRules"), fr = C((r) => {
  let i = ["name"];
  return [{ dataLayer: "roads", symbolizer: new jn({ labelProps: i, fill: r.roads_label_minor, font: "400 12px sans-serif", width: 2, stroke: r.roads_label_minor_halo }), minzoom: 16, filter: C((n, a) => {
    let l = Dt(a.props, "pmap:kind");
    return ["minor_road", "other", "path"].includes(l);
  }, "filter") }, { dataLayer: "roads", symbolizer: new jn({ labelProps: i, fill: r.roads_label_major, font: "400 12px sans-serif", width: 2, stroke: r.roads_label_major_halo }), minzoom: 12, filter: C((n, a) => {
    let l = Dt(a.props, "pmap:kind");
    return ["highway", "major_road", "medium_road"].includes(l);
  }, "filter") }, { dataLayer: "roads", symbolizer: new jn({ labelProps: i, fill: r.roads_label_major, font: "400 12px sans-serif", width: 2, stroke: r.roads_label_major_halo }), minzoom: 12, filter: C((n, a) => {
    let l = Dt(a.props, "pmap:kind");
    return ["highway", "major_road", "medium_road"].includes(l);
  }, "filter") }, { dataLayer: "physical_point", symbolizer: new ni({ labelProps: i, fill: r.ocean_label, lineHeight: 1.5, letterSpacing: 1, font: C((n, a) => `400 ${er([[3, 10], [10, 12]])(n)}px sans-serif`, "font"), textTransform: "uppercase" }), filter: C((n, a) => {
    let l = Dt(a.props, "pmap:kind");
    return ["ocean", "bay", "strait", "fjord"].includes(l);
  }, "filter") }, { dataLayer: "physical_point", symbolizer: new ni({ labelProps: i, fill: r.ocean_label, lineHeight: 1.5, letterSpacing: 1, font: C((n, a) => `400 ${er([[3, 0], [6, 12], [10, 12]])(n)}px sans-serif`, "font") }), filter: C((n, a) => {
    let l = Dt(a.props, "pmap:kind");
    return ["sea", "lake", "water"].includes(l);
  }, "filter") }, { dataLayer: "places", symbolizer: new ni({ labelProps: C((n, a) => n < 6 ? ["name:short"] : i, "labelProps"), fill: r.state_label, stroke: r.state_label_halo, width: 1, lineHeight: 1.5, font: C((n, a) => n < 6 ? "400 16px sans-serif" : "400 12px sans-serif", "font"), textTransform: "uppercase" }), filter: C((n, a) => a.props["pmap:kind"] === "region", "filter") }, { dataLayer: "places", symbolizer: new ni({ labelProps: i, fill: r.country_label, lineHeight: 1.5, font: C((n, a) => "600 12px sans-serif", "font"), textTransform: "uppercase" }), filter: C((n, a) => a.props["pmap:kind"] === "country", "filter") }, { dataLayer: "places", minzoom: 9, symbolizer: new ni({ labelProps: i, fill: r.city_label, lineHeight: 1.5, font: C((n, a) => {
    if (!a) return "400 12px sans-serif";
    let l = a.props["pmap:min_zoom"], o = 400;
    l && l <= 5 && (o = 600);
    let h = 12, c = a.props["pmap:population_rank"];
    return c && c > 9 && (h = 16), `${o} ${h}px sans-serif`;
  }, "font") }), sort: C((n, a) => {
    let l = Yo(n, "pmap:population_rank"), o = Yo(a, "pmap:population_rank");
    return l - o;
  }, "sort"), filter: C((n, a) => a.props["pmap:kind"] === "locality", "filter") }, { dataLayer: "places", maxzoom: 8, symbolizer: new Ic([new zc({ radius: 2, fill: r.city_circle, stroke: r.city_circle_stroke, width: 1.5 }), new Dc({ labelProps: i, fill: r.city_label, stroke: r.city_label_halo, width: 1, offsetX: 6, offsetY: 4.5, font: C((n, a) => "400 12px sans-serif", "font") })]), filter: C((n, a) => a.props["pmap:kind"] === "locality", "filter") }];
}, "labelRules"), Nc = { background: "#cccccc", earth: "#e0e0e0", park_a: "#cfddd5", park_b: "#9cd3b4", hospital: "#e4dad9", industrial: "#d1dde1", school: "#e4ded7", wood_a: "#d0ded0", wood_b: "#a0d9a0", pedestrian: "#e3e0d4", scrub_a: "#cedcd7", scrub_b: "#99d2bb", glacier: "#e7e7e7", sand: "#e2e0d7", beach: "#e8e4d0", aerodrome: "#dadbdf", runway: "#e9e9ed", water: "#80deea", pier: "#e0e0e0", zoo: "#c6dcdc", military: "#dcdcdc", tunnel_other_casing: "#e0e0e0", tunnel_minor_casing: "#e0e0e0", tunnel_link_casing: "#e0e0e0", tunnel_medium_casing: "#e0e0e0", tunnel_major_casing: "#e0e0e0", tunnel_highway_casing: "#e0e0e0", tunnel_other: "#d5d5d5", tunnel_minor: "#d5d5d5", tunnel_link: "#d5d5d5", tunnel_medium: "#d5d5d5", tunnel_major: "#d5d5d5", tunnel_highway: "#d5d5d5", transit_pier: "#e0e0e0", buildings: "#cccccc", minor_service_casing: "#e0e0e0", minor_casing: "#e0e0e0", link_casing: "#e0e0e0", medium_casing: "#e0e0e0", major_casing_late: "#e0e0e0", highway_casing_late: "#e0e0e0", other: "#ebebeb", minor_service: "#ebebeb", minor_a: "#ebebeb", minor_b: "#ffffff", link: "#ffffff", medium: "#f5f5f5", major_casing_early: "#e0e0e0", major: "#ffffff", highway_casing_early: "#e0e0e0", highway: "#ffffff", railway: "#a7b1b3", boundaries: "#adadad", waterway_label: "#ffffff", bridges_other_casing: "#e0e0e0", bridges_minor_casing: "#e0e0e0", bridges_link_casing: "#e0e0e0", bridges_medium_casing: "#e0e0e0", bridges_major_casing: "#e0e0e0", bridges_highway_casing: "#e0e0e0", bridges_other: "#ebebeb", bridges_minor: "#ffffff", bridges_link: "#ffffff", bridges_medium: "#f0eded", bridges_major: "#f5f5f5", bridges_highway: "#ffffff", roads_label_minor: "#91888b", roads_label_minor_halo: "#ffffff", roads_label_major: "#938a8d", roads_label_major_halo: "#ffffff", ocean_label: "#ffffff", peak_label: "#7e9aa0", subplace_label: "#8f8f8f", subplace_label_halo: "#e0e0e0", city_circle: "#ffffff", city_circle_stroke: "#a3a3a3", city_label: "#5c5c5c", city_label_halo: "#e0e0e0", state_label: "#b3b3b3", state_label_halo: "#e0e0e0", country_label: "#a3a3a3" }, Fc = { background: "#34373d", earth: "#1f1f1f", park_a: "#232325", park_b: "#232325", hospital: "#252424", industrial: "#222222", school: "#262323", wood_a: "#202121", wood_b: "#202121", pedestrian: "#1e1e1e", scrub_a: "#222323", scrub_b: "#222323", glacier: "#1c1c1c", sand: "#212123", beach: "#28282a", aerodrome: "#1e1e1e", runway: "#333333", water: "#34373d", pier: "#222222", zoo: "#222323", military: "#242323", tunnel_other_casing: "#141414", tunnel_minor_casing: "#141414", tunnel_link_casing: "#141414", tunnel_medium_casing: "#141414", tunnel_major_casing: "#141414", tunnel_highway_casing: "#141414", tunnel_other: "#292929", tunnel_minor: "#292929", tunnel_link: "#292929", tunnel_medium: "#292929", tunnel_major: "#292929", tunnel_highway: "#292929", transit_pier: "#333333", buildings: "#111111", minor_service_casing: "#1f1f1f", minor_casing: "#1f1f1f", link_casing: "#1f1f1f", medium_casing: "#1f1f1f", major_casing_late: "#1f1f1f", highway_casing_late: "#1f1f1f", other: "#333333", minor_service: "#333333", minor_a: "#3d3d3d", minor_b: "#333333", link: "#3d3d3d", medium: "#3d3d3d", major_casing_early: "#1f1f1f", major: "#3d3d3d", highway_casing_early: "#1f1f1f", highway: "#474747", railway: "#000000", boundaries: "#5b6374", waterway_label: "#717784", bridges_other_casing: "#2b2b2b", bridges_minor_casing: "#1f1f1f", bridges_link_casing: "#1f1f1f", bridges_medium_casing: "#1f1f1f", bridges_major_casing: "#1f1f1f", bridges_highway_casing: "#1f1f1f", bridges_other: "#333333", bridges_minor: "#333333", bridges_link: "#3d3d3d", bridges_medium: "#3d3d3d", bridges_major: "#3d3d3d", bridges_highway: "#474747", roads_label_minor: "#525252", roads_label_minor_halo: "#1f1f1f", roads_label_major: "#666666", roads_label_major_halo: "#1f1f1f", ocean_label: "#717784", peak_label: "#898080", subplace_label: "#525252", subplace_label_halo: "#1f1f1f", city_circle: "#000000", city_circle_stroke: "#7a7a7a", city_label: "#7a7a7a", city_label_halo: "#212121", state_label: "#3d3d3d", state_label_halo: "#1f1f1f", country_label: "#5c5c5c" }, jc = { background: "#ffffff", earth: "#ffffff", park_a: "#fcfcfc", park_b: "#fcfcfc", hospital: "#f8f8f8", industrial: "#fcfcfc", school: "#f8f8f8", wood_a: "#fafafa", wood_b: "#fafafa", pedestrian: "#fdfdfd", scrub_a: "#fafafa", scrub_b: "#fafafa", glacier: "#fcfcfc", sand: "#fafafa", beach: "#f6f6f6", aerodrome: "#fdfdfd", runway: "#efefef", water: "#dcdcdc", pier: "#f5f5f5", zoo: "#f7f7f7", military: "#fcfcfc", tunnel_other_casing: "#d6d6d6", tunnel_minor_casing: "#fcfcfc", tunnel_link_casing: "#fcfcfc", tunnel_medium_casing: "#fcfcfc", tunnel_major_casing: "#fcfcfc", tunnel_highway_casing: "#fcfcfc", tunnel_other: "#d6d6d6", tunnel_minor: "#d6d6d6", tunnel_link: "#d6d6d6", tunnel_medium: "#d6d6d6", tunnel_major: "#d6d6d6", tunnel_highway: "#d6d6d6", transit_pier: "#efefef", buildings: "#efefef", minor_service_casing: "#ffffff", minor_casing: "#ffffff", link_casing: "#ffffff", medium_casing: "#ffffff", major_casing_late: "#ffffff", highway_casing_late: "#ffffff", other: "#f5f5f5", minor_service: "#f5f5f5", minor_a: "#ebebeb", minor_b: "#f5f5f5", link: "#ebebeb", medium: "#ebebeb", major_casing_early: "#ffffff", major: "#ebebeb", highway_casing_early: "#ffffff", highway: "#ebebeb", railway: "#d6d6d6", boundaries: "#adadad", waterway_label: "#adadad", bridges_other_casing: "#ffffff", bridges_minor_casing: "#ffffff", bridges_link_casing: "#ffffff", bridges_medium_casing: "#ffffff", bridges_major_casing: "#ffffff", bridges_highway_casing: "#ffffff", bridges_other: "#f5f5f5", bridges_minor: "#f5f5f5", bridges_link: "#ebebeb", bridges_medium: "#ebebeb", bridges_major: "#ebebeb", bridges_highway: "#ebebeb", roads_label_minor: "#adadad", roads_label_minor_halo: "#ffffff", roads_label_major: "#999999", roads_label_major_halo: "#ffffff", ocean_label: "#adadad", peak_label: "#adadad", subplace_label: "#8f8f8f", subplace_label_halo: "#ffffff", city_circle: "#ffffff", city_circle_stroke: "#adadad", city_label: "#5c5c5c", city_label_halo: "#ffffff", state_label: "#b3b3b3", state_label_halo: "#ffffff", country_label: "#b8b8b8" }, Uc = { background: "#a3a3a3", earth: "#cccccc", park_a: "#c2c2c2", park_b: "#c2c2c2", hospital: "#d0d0d0", industrial: "#c6c6c6", school: "#d0d0d0", wood_a: "#c2c2c2", wood_b: "#c2c2c2", pedestrian: "#c4c4c4", scrub_a: "#c2c2c2", scrub_b: "#c2c2c2", glacier: "#d2d2d2", sand: "#d2d2d2", beach: "#d2d2d2", aerodrome: "#c9c9c9", runway: "#f5f5f5", water: "#a3a3a3", pier: "#b8b8b8", zoo: "#c7c7c7", military: "#bfbfbf", tunnel_other_casing: "#b8b8b8", tunnel_minor_casing: "#b8b8b8", tunnel_link_casing: "#b8b8b8", tunnel_medium_casing: "#b8b8b8", tunnel_major_casing: "#b8b8b8", tunnel_highway_casing: "#b8b8b8", tunnel_other: "#d6d6d6", tunnel_minor: "#d6d6d6", tunnel_link: "#d6d6d6", tunnel_medium: "#d6d6d6", tunnel_major: "#d6d6d6", tunnel_highway: "#d6d6d6", transit_pier: "#b8b8b8", buildings: "#e0e0e0", minor_service_casing: "#cccccc", minor_casing: "#cccccc", link_casing: "#cccccc", medium_casing: "#cccccc", major_casing_late: "#cccccc", highway_casing_late: "#cccccc", other: "#e0e0e0", minor_service: "#e0e0e0", minor_a: "#ebebeb", minor_b: "#e0e0e0", link: "#ebebeb", medium: "#ebebeb", major_casing_early: "#cccccc", major: "#ebebeb", highway_casing_early: "#cccccc", highway: "#ebebeb", railway: "#f5f5f5", boundaries: "#5c5c5c", waterway_label: "#7a7a7a", bridges_other_casing: "#cccccc", bridges_minor_casing: "#cccccc", bridges_link_casing: "#cccccc", bridges_medium_casing: "#cccccc", bridges_major_casing: "#cccccc", bridges_highway_casing: "#cccccc", bridges_other: "#e0e0e0", bridges_minor: "#e0e0e0", bridges_link: "#ebebeb", bridges_medium: "#ebebeb", bridges_major: "#ebebeb", bridges_highway: "#ebebeb", roads_label_minor: "#999999", roads_label_minor_halo: "#e0e0e0", roads_label_major: "#8f8f8f", roads_label_major_halo: "#ebebeb", ocean_label: "#7a7a7a", peak_label: "#5c5c5c", subplace_label: "#7a7a7a", subplace_label_halo: "#cccccc", city_circle: "#c2c2c2", city_circle_stroke: "#7a7a7a", city_label: "#474747", city_label_halo: "#cccccc", state_label: "#999999", state_label_halo: "#cccccc", country_label: "#858585" }, Vc = { background: "#2b2b2b", earth: "#141414", park_a: "#181818", park_b: "#181818", hospital: "#1d1d1d", industrial: "#101010", school: "#111111", wood_a: "#1a1a1a", wood_b: "#1a1a1a", pedestrian: "#191919", scrub_a: "#1c1c1c", scrub_b: "#1c1c1c", glacier: "#191919", sand: "#161616", beach: "#1f1f1f", aerodrome: "#191919", runway: "#323232", water: "#333333", pier: "#0a0a0a", zoo: "#191919", military: "#121212", tunnel_other_casing: "#101010", tunnel_minor_casing: "#101010", tunnel_link_casing: "#101010", tunnel_medium_casing: "#101010", tunnel_major_casing: "#101010", tunnel_highway_casing: "#101010", tunnel_other: "#292929", tunnel_minor: "#292929", tunnel_link: "#292929", tunnel_medium: "#292929", tunnel_major: "#292929", tunnel_highway: "#292929", transit_pier: "#0a0a0a", buildings: "#0a0a0a", minor_service_casing: "#141414", minor_casing: "#141414", link_casing: "#141414", medium_casing: "#141414", major_casing_late: "#141414", highway_casing_late: "#141414", other: "#1f1f1f", minor_service: "#1f1f1f", minor_a: "#292929", minor_b: "#1f1f1f", link: "#1f1f1f", medium: "#292929", major_casing_early: "#141414", major: "#292929", highway_casing_early: "#141414", highway: "#292929", railway: "#292929", boundaries: "#707070", waterway_label: "#707070", bridges_other_casing: "#141414", bridges_minor_casing: "#141414", bridges_link_casing: "#141414", bridges_medium_casing: "#141414", bridges_major_casing: "#141414", bridges_highway_casing: "#141414", bridges_other: "#1f1f1f", bridges_minor: "#1f1f1f", bridges_link: "#292929", bridges_medium: "#292929", bridges_major: "#292929", bridges_highway: "#292929", roads_label_minor: "#525252", roads_label_minor_halo: "#141414", roads_label_major: "#5c5c5c", roads_label_major_halo: "#141414", ocean_label: "#707070", peak_label: "#707070", subplace_label: "#5c5c5c", subplace_label_halo: "#141414", city_circle: "#000000", city_circle_stroke: "#666666", city_label: "#999999", city_label_halo: "#141414", state_label: "#3d3d3d", state_label_halo: "#141414", country_label: "#707070" }, fa = { light: Nc, dark: Fc, white: jc, grayscale: Uc, black: Vc }, da = C((r, i, n) => {
  let a = [];
  for (let l of r) {
    let o = [];
    for (let h of l) o.push(h.clone().mult(i).add(n));
    a.push(o);
  }
  return a;
}, "transformGeom"), Ui = C((r, i) => {
  let n = 1 << i;
  return r < 0 ? n + r : r >= n ? r % n : r;
}, "wrap"), _a = class {
  constructor(i, n, a) {
    this.tileCache = i, this.maxDataLevel = n, this.levelDiff = a;
  }
  dataTilesForBounds(i, n) {
    let a = Et(2, i) / Et(2, Math.ceil(i)), l = [], o = 1, h = this.tileCache.tileSize;
    if (i < this.levelDiff) o = 1 / (1 << this.levelDiff - i) * a, l.push({ dataTile: { z: 0, x: 0, y: 0 }, origin: new $(0, 0), scale: o, dim: h * o });
    else if (i <= this.levelDiff + this.maxDataLevel) {
      let c = 1 << this.levelDiff, f = 256 * a, _ = Math.ceil(i) - this.levelDiff, m = Math.floor(n.minX / c / f), p = Math.floor(n.minY / c / f), v = Math.floor(n.maxX / c / f), y = Math.floor(n.maxY / c / f);
      for (let P = m; P <= v; P++) for (let w = p; w <= y; w++) {
        let z = new $(P * c * f, w * c * f);
        l.push({ dataTile: { z: _, x: Ui(P, _), y: Ui(w, _) }, origin: z, scale: a, dim: h * a });
      }
    } else {
      let c = 1 << this.levelDiff;
      o = (1 << Math.ceil(i) - this.maxDataLevel - this.levelDiff) * a;
      let f = Math.floor(n.minX / c / 256 / o), _ = Math.floor(n.minY / c / 256 / o), m = Math.floor(n.maxX / c / 256 / o), p = Math.floor(n.maxY / c / 256 / o);
      for (let v = f; v <= m; v++) for (let y = _; y <= p; y++) {
        let P = new $(v * c * 256 * o, y * c * 256 * o);
        l.push({ dataTile: { z: this.maxDataLevel, x: Ui(v, this.maxDataLevel), y: Ui(y, this.maxDataLevel) }, origin: P, scale: o, dim: h * o });
      }
    }
    return l;
  }
  dataTileForDisplayTile(i) {
    let n, a = 1, l = this.tileCache.tileSize, o;
    if (i.z < this.levelDiff) n = { z: 0, x: 0, y: 0 }, a = 1 / (1 << this.levelDiff - i.z), o = new $(0, 0), l = l * a;
    else if (i.z <= this.levelDiff + this.maxDataLevel) {
      let h = 1 << this.levelDiff;
      n = { z: i.z - this.levelDiff, x: Math.floor(i.x / h), y: Math.floor(i.y / h) }, o = new $(n.x * h * 256, n.y * h * 256);
    } else {
      a = 1 << i.z - this.maxDataLevel - this.levelDiff;
      let h = 1 << this.levelDiff;
      n = { z: this.maxDataLevel, x: Math.floor(i.x / h / a), y: Math.floor(i.y / h / a) }, o = new $(n.x * h * a * 256, n.y * h * a * 256), l = l * a;
    }
    return { dataTile: n, scale: a, origin: o, dim: l };
  }
  getBbox(i, n) {
    return Yt(this, null, function* () {
      let a = this.dataTilesForBounds(i, n);
      return (yield Promise.all(a.map((l) => this.tileCache.get(l.dataTile)))).map((l, o) => {
        let h = a[o];
        return { data: l, z: i, dataTile: h.dataTile, scale: h.scale, dim: h.dim, origin: h.origin };
      });
    });
  }
  getDisplayTile(i) {
    return Yt(this, null, function* () {
      let n = this.dataTileForDisplayTile(i);
      return { data: yield this.tileCache.get(n.dataTile), z: i.z, dataTile: n.dataTile, scale: n.scale, origin: n.origin, dim: n.dim };
    });
  }
  queryFeatures(i, n, a, l) {
    let o = Math.round(a), h = Math.min(o - this.levelDiff, this.maxDataLevel), c = l / (1 << o - h);
    return this.tileCache.queryFeatures(i, n, h, c);
  }
};
C(_a, "View");
var Hc = _a, ma = C((r) => {
  let i = C((a) => {
    let l = a.levelDiff === void 0 ? 1 : a.levelDiff, o = a.maxDataZoom || 15, h;
    if (typeof a.url == "string") new URL(a.url, "http://example.com").pathname.endsWith(".pmtiles") ? h = new Ho(a.url, !0) : h = new bc(a.url, !0);
    else if (a.url) h = new Ho(a.url, !0);
    else throw new Error(`Invalid source ${a.url}`);
    let c = new Pc(h, 256 * 1 << l);
    return new Hc(c, o, l);
  }, "sourceToViews"), n = /* @__PURE__ */ new Map();
  if (r.sources) for (let a in r.sources) n.set(a, i(r.sources[a]));
  else n.set("", i(r));
  return n;
}, "sourcesToViews"), Wc = C((r, i, n) => {
  let a = i / 256, l = Math.floor(n.minX / 256), o = Math.floor(n.minY / 256), h = Math.floor(n.maxX / 256), c = Math.floor(n.maxY / 256), f = Math.log2(a), _ = [];
  for (let m = l; m <= h; m++) {
    let p = m % (1 << r);
    for (let v = o; v <= c; v++) _.push({ display: ce({ z: r, x: p, y: v }), key: ce({ z: r - f, x: Math.floor(p / a), y: Math.floor(v / a) }) });
  }
  return _;
}, "covering"), pa = class {
  constructor(i, n) {
    this.tree = new uc(), this.current = /* @__PURE__ */ new Map(), this.dim = i, this.maxLabeledTiles = n;
  }
  hasPrefix(i) {
    for (let n of this.current.keys()) if (n.startsWith(i)) return !0;
    return !1;
  }
  has(i) {
    return this.current.has(i);
  }
  size() {
    return this.current.size;
  }
  keys() {
    return this.current.keys();
  }
  searchBbox(i, n) {
    let a = /* @__PURE__ */ new Set();
    for (let l of this.tree.search(i)) l.indexedLabel.order <= n && a.add(l.indexedLabel);
    return a;
  }
  searchLabel(i, n) {
    let a = /* @__PURE__ */ new Set();
    for (let l of i.bboxes) for (let o of this.tree.search(l)) o.indexedLabel.order <= n && a.add(o.indexedLabel);
    return a;
  }
  bboxCollides(i, n) {
    for (let a of this.tree.search(i)) if (a.indexedLabel.order <= n) return !0;
    return !1;
  }
  labelCollides(i, n) {
    for (let a of i.bboxes) for (let l of this.tree.search(a)) if (l.indexedLabel.order <= n) return !0;
    return !1;
  }
  deduplicationCollides(i) {
    if (!i.deduplicationKey || !i.deduplicationDistance) return !1;
    let n = i.deduplicationDistance, a = { minX: i.anchor.x - n, minY: i.anchor.y - n, maxX: i.anchor.x + n, maxY: i.anchor.y + n };
    for (let l of this.tree.search(a)) if (l.indexedLabel.deduplicationKey === i.deduplicationKey && l.indexedLabel.anchor.dist(i.anchor) < n) return !0;
    return !1;
  }
  makeEntry(i) {
    this.current.get(i) && console.log("consistency error 1");
    let n = /* @__PURE__ */ new Set();
    this.current.set(i, n);
  }
  insert(i, n, a) {
    let l = { anchor: i.anchor, bboxes: i.bboxes, draw: i.draw, order: n, tileKey: a, deduplicationKey: i.deduplicationKey, deduplicationDistance: i.deduplicationDistance }, o = this.current.get(a);
    if (!o) {
      let f = /* @__PURE__ */ new Set();
      this.current.set(a, f), o = f;
    }
    o.add(l);
    let h = !1, c = !1;
    for (let f of i.bboxes) this.tree.insert({ minX: f.minX, minY: f.minY, maxX: f.maxX, maxY: f.maxY, indexedLabel: l }), f.minX < 0 && (h = !0), f.maxX > this.dim && (c = !0);
    if (h || c) {
      let f = h ? this.dim : -this.dim, _ = [];
      for (let v of i.bboxes) _.push({ minX: v.minX + f, minY: v.minY, maxX: v.maxX + f, maxY: v.maxY });
      let m = { anchor: new $(i.anchor.x + f, i.anchor.y), bboxes: _, draw: i.draw, order: n, tileKey: a }, p = this.current.get(a);
      p && p.add(m);
      for (let v of _) this.tree.insert({ minX: v.minX, minY: v.minY, maxX: v.maxX, maxY: v.maxY, indexedLabel: m });
    }
  }
  pruneOrNoop(i) {
    let n = i.split(":"), a, l = 0, o = 0;
    for (let h of this.current.keys()) {
      let c = h.split(":");
      if (c[3] === n[3]) {
        o++;
        let f = Math.sqrt(Et(+c[0] - +n[0], 2) + Et(+c[1] - +n[1], 2));
        f > l && (l = f, a = h);
      }
      a && o > this.maxLabeledTiles && this.pruneKey(a);
    }
  }
  pruneKey(i) {
    let n = this.current.get(i);
    if (!n) return;
    let a = [];
    for (let l of this.tree.all()) n.has(l.indexedLabel) && a.push(l);
    for (let l of a) this.tree.remove(l);
    this.current.delete(i);
  }
  removeLabel(i) {
    let n = [];
    for (let l of this.tree.all()) i === l.indexedLabel && n.push(l);
    for (let l of n) this.tree.remove(l);
    let a = this.current.get(i.tileKey);
    a && a.delete(i);
  }
};
C(pa, "Index");
var Yc = pa, ga = class {
  constructor(i, n, a, l, o) {
    this.index = new Yc(256 * 1 << i, l), this.z = i, this.scratch = n, this.labelRules = a, this.callback = o;
  }
  layout(i) {
    let n = performance.now(), a = /* @__PURE__ */ new Set();
    for (let [o, h] of i) for (let c of h) {
      let f = `${ce(c.dataTile)}:${o}`;
      this.index.has(f) || (this.index.makeEntry(f), a.add(f));
    }
    let l = /* @__PURE__ */ new Set();
    for (let [o, h] of this.labelRules.entries()) {
      if (h.visible === !1 || h.minzoom && this.z < h.minzoom || h.maxzoom && this.z > h.maxzoom) continue;
      let c = h.dataSource || "", f = i.get(c);
      if (f) for (let _ of f) {
        let m = `${ce(_.dataTile)}:${c}`;
        if (!a.has(m)) continue;
        let p = _.data.get(h.dataLayer);
        if (p === void 0) continue;
        let v = p;
        h.sort && v.sort((P, w) => h.sort ? h.sort(P.props, w.props) : 0);
        let y = { index: this.index, zoom: this.z, scratch: this.scratch, order: o, overzoom: this.z - _.dataTile.z };
        for (let P of v) {
          if (h.filter && !h.filter(this.z, P)) continue;
          let w = da(P.geom, _.scale, _.origin), z = h.symbolizer.place(y, w, P);
          if (z) for (let k of z) {
            let I = !1;
            if (!(k.deduplicationKey && this.index.deduplicationCollides(k))) {
              if (this.index.labelCollides(k, 1 / 0)) {
                if (!this.index.labelCollides(k, o)) {
                  let A = this.index.searchLabel(k, 1 / 0);
                  for (let O of A) {
                    this.index.removeLabel(O);
                    for (let S of O.bboxes) this.findInvalidatedTiles(l, _.dim, S, m);
                  }
                  this.index.insert(k, o, m), I = !0;
                }
              } else this.index.insert(k, o, m), I = !0;
              if (I) for (let A of k.bboxes) (A.maxX > _.origin.x + _.dim || A.minX < _.origin.x || A.minY < _.origin.y || A.maxY > _.origin.y + _.dim) && this.findInvalidatedTiles(l, _.dim, A, m);
            }
          }
        }
      }
    }
    for (let o of a) this.index.pruneOrNoop(o);
    return l.size > 0 && this.callback && this.callback(l), performance.now() - n;
  }
  findInvalidatedTiles(i, n, a, l) {
    let o = Wc(this.z, n, a);
    for (let h of o) h.key !== l && this.index.hasPrefix(h.key) && i.add(h.display);
  }
  add(i) {
    let n = !0;
    for (let [a, l] of i) for (let o of l) this.index.has(`${ce(o.dataTile)}:${a}`) || (n = !1);
    return n ? 0 : this.layout(i);
  }
};
C(ga, "Labeler");
var va = ga, ya = class {
  constructor(i, n, a, l) {
    this.labelers = /* @__PURE__ */ new Map(), this.scratch = i, this.labelRules = n, this.maxLabeledTiles = a, this.callback = l;
  }
  add(i, n) {
    let a = this.labelers.get(i);
    return a || (a = new va(i, this.scratch, this.labelRules, this.maxLabeledTiles, this.callback), this.labelers.set(i, a)), a.add(n);
  }
  getIndex(i) {
    let n = this.labelers.get(i);
    if (n) return n.index;
  }
};
C(ya, "Labelers");
var Go = ya;
function dr(r, i, n, a, l, o, h, c, f) {
  let _ = performance.now();
  r.save(), r.miterLimit = 2;
  for (let m of l) {
    if (m.minzoom && i < m.minzoom || m.maxzoom && i > m.maxzoom) continue;
    let p = n.get(m.dataSource || "");
    if (p) for (let v of p) {
      let y = v.data.get(m.dataLayer);
      if (y === void 0) continue;
      m.symbolizer.before && m.symbolizer.before(r, v.z);
      let P = v.origin, w = v.dim, z = v.scale;
      if (r.save(), c) {
        r.beginPath();
        let k = Math.max(P.x - h.x, o.minX - h.x), I = Math.max(P.y - h.y, o.minY - h.y), A = Math.min(P.x - h.x + w, o.maxX - h.x), O = Math.min(P.y - h.y + w, o.maxY - h.y);
        r.rect(k, I, A - k, O - I), r.clip();
      }
      r.translate(P.x - h.x, P.y - h.y);
      for (let k of y) {
        let I = k.geom, A = k.bbox;
        A.maxX * z + P.x < o.minX || A.minX * z + P.x > o.maxX || A.minY * z + P.y > o.maxY || A.maxY * z + P.y < o.minY || m.filter && !m.filter(v.z, k) || (z !== 1 && (I = da(I, z, new $(0, 0))), m.symbolizer.draw(r, I, v.z, k));
      }
      r.restore();
    }
  }
  if (c && (r.beginPath(), r.rect(o.minX - h.x, o.minY - h.y, o.maxX - o.minX, o.maxY - o.minY), r.clip()), a) {
    let m = a.searchBbox(o, 1 / 0);
    for (let p of m) if (r.save(), r.translate(p.anchor.x - h.x, p.anchor.y - h.y), p.draw(r), r.restore(), f) {
      r.lineWidth = 0.5, r.strokeStyle = f, r.fillStyle = f, r.globalAlpha = 1, r.fillRect(p.anchor.x - h.x - 2, p.anchor.y - h.y - 2, 4, 4);
      for (let v of p.bboxes) r.strokeRect(v.minX - h.x, v.minY - h.y, v.maxX - v.minX, v.maxY - v.minY);
    }
  }
  return r.restore(), performance.now() - _;
}
C(dr, "paint");
var fi = 6378137, qo = 85.0511287798, Gt = fi * Math.PI, xa = C((r) => {
  let i = Math.PI / 180, n = Math.max(Math.min(qo, r.y), -qo), a = Math.sin(n * i);
  return new $(fi * r.x * i, fi * Math.log((1 + a) / (1 - a)) / 2);
}, "project"), Gc = C((r) => {
  let i = 180 / Math.PI;
  return { lat: (2 * Math.atan(Math.exp(r.y / fi)) - Math.PI / 2) * i, lng: r.x * i / fi };
}, "unproject"), qc = C((r, i) => (n) => {
  let a = xa(n);
  return new $((a.x + Gt) / (Gt * 2), 1 - (a.y + Gt) / (Gt * 2)).mult(Et(2, i) * 256).sub(r);
}, "instancedProject"), Xc = C((r, i) => (n) => {
  let a = new $(n.x, n.y).add(r).div(Et(2, i) * 256), l = new $(a.x * (Gt * 2) - Gt, (1 - a.y) * (Gt * 2) - Gt);
  return Gc(l);
}, "instancedUnproject"), Xo = C((r, i) => {
  let n = i * (360 / r);
  return Math.log2(n / 256);
}, "getZoom"), $c = class {
  constructor(i) {
    if (i.theme) {
      let n = fa[i.theme];
      this.paintRules = cr(n), this.labelRules = fr(n), this.backgroundColor = n.background;
    } else this.paintRules = i.paintRules || [], this.labelRules = i.labelRules || [], this.backgroundColor = i.backgroundColor;
    this.views = ma(i), this.debug = i.debug || "";
  }
  drawContext(i, n, a, l, o) {
    return Yt(this, null, function* () {
      let h = xa(l), c = new $((h.x + Gt) / (Gt * 2), 1 - (h.y + Gt) / (Gt * 2)).clone().mult(Et(2, o) * 256).sub(new $(n / 2, a / 2)), f = { minX: c.x, minY: c.y, maxX: c.x + n, maxY: c.y + a }, _ = [];
      for (let [w, z] of this.views) {
        let k = z.getBbox(o, f);
        _.push({ key: w, promise: k });
      }
      let m = yield Promise.all(_.map((w) => w.promise.then((z) => ({ status: "fulfilled", value: z, key: w.key }), (z) => ({ status: "rejected", value: [], reason: z, key: w.key })))), p = /* @__PURE__ */ new Map();
      for (let w of m) w.status === "fulfilled" && p.set(w.key, w.value);
      let v = performance.now(), y = new va(o, i, this.labelRules, 16, void 0);
      y.add(p), this.backgroundColor && (i.save(), i.fillStyle = this.backgroundColor, i.fillRect(0, 0, n, a), i.restore());
      let P = this.paintRules;
      if (dr(i, o, p, y.index, P, f, c, !0, this.debug), this.debug) {
        i.save(), i.translate(-c.x, -c.y), i.strokeStyle = this.debug, i.fillStyle = this.debug, i.font = "12px sans-serif";
        let w = 0;
        for (let [z, k] of p) {
          for (let I of k) {
            i.strokeRect(I.origin.x, I.origin.y, I.dim, I.dim);
            let A = I.dataTile;
            i.fillText(`${z + (z ? " " : "") + A.z} ${A.x} ${A.y}`, I.origin.x + 4, I.origin.y + 14 * (1 + w));
          }
          w++;
        }
        i.restore();
      }
      return { elapsed: performance.now() - v, project: qc(c, o), unproject: Xc(c, o) };
    });
  }
  drawCanvas(i, n, a) {
    return Yt(this, arguments, function* (l, o, h, c = {}) {
      let f = window.devicePixelRatio, _ = l.clientWidth, m = l.clientHeight;
      l.width === _ * f && l.height === m * f || (l.width = _ * f, l.height = m * f), c.lang && (l.lang = c.lang);
      let p = l.getContext("2d");
      if (!p) {
        console.error("Failed to initialize canvas2d context.");
        return;
      }
      return p.setTransform(f, 0, 0, f, 0, 0), this.drawContext(p, _, m, o, h);
    });
  }
  drawContextBounds(i, n, a, l, o) {
    return Yt(this, null, function* () {
      let h = a.x - n.x, c = new $((n.x + a.x) / 2, (n.y + a.y) / 2);
      return this.drawContext(i, l, o, c, Xo(h, l));
    });
  }
  drawCanvasBounds(i, n, a, l) {
    return Yt(this, arguments, function* (o, h, c, f, _ = {}) {
      let m = c.x - h.x, p = new $((h.x + c.x) / 2, (h.y + c.y) / 2);
      return this.drawCanvas(o, p, Xo(m, f), _);
    });
  }
};
C($c, "Static");
var Kc = C((r) => new Promise((i) => {
  setTimeout(() => {
    i();
  }, r);
}), "timer"), Jc = C((r) => r.then((i) => ({ status: "fulfilled", value: i }), (i) => ({ status: "rejected", reason: i })), "reflect"), Qc = C((r = {}) => {
  let i = class extends L.GridLayer {
    constructor(l = {}) {
      if (l.noWrap && !l.bounds && (l.bounds = [[-90, -180], [90, 180]]), l.attribution == null && (l.attribution = '<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'), super(l), l.theme) {
        let h = fa[l.theme];
        this.paintRules = cr(h), this.labelRules = fr(h), this.backgroundColor = h.background;
      } else this.paintRules = l.paintRules || [], this.labelRules = l.labelRules || [], this.backgroundColor = l.backgroundColor;
      this.lastRequestedZ = void 0, this.tasks = l.tasks || [], this.views = ma(l), this.debug = l.debug;
      let o = document.createElement("canvas").getContext("2d");
      this.scratch = o, this.onTilesInvalidated = (h) => {
        for (let c of h) this.rerenderTile(c);
      }, this.labelers = new Go(this.scratch, this.labelRules, 16, this.onTilesInvalidated), this.tileSize = 256 * window.devicePixelRatio, this.tileDelay = l.tileDelay || 3, this.lang = l.lang;
    }
    renderTile(l, o, h, c = () => {
    }) {
      return Yt(this, null, function* () {
        this.lastRequestedZ = l.z;
        let f = [];
        for (let [G, tt] of this.views) {
          let vt = tt.getDisplayTile(l);
          f.push({ key: G, promise: vt });
        }
        let _ = yield Promise.all(f.map((G) => G.promise.then((tt) => ({ status: "fulfilled", value: tt, key: G.key }), (tt) => ({ status: "rejected", reason: tt, key: G.key })))), m = /* @__PURE__ */ new Map();
        for (let G of _) G.status === "fulfilled" ? m.set(G.key, [G.value]) : G.reason.name === "AbortError" || console.error(G.reason);
        if (o.key !== h || this.lastRequestedZ !== l.z || (yield Promise.all(this.tasks.map(Jc)), o.key !== h) || this.lastRequestedZ !== l.z) return;
        let p = this.labelers.add(l.z, m);
        if (o.key !== h || this.lastRequestedZ !== l.z) return;
        let v = this.labelers.getIndex(l.z);
        if (!this._map) return;
        let y = this._map.getCenter().wrap(), P = this._getTiledPixelBounds(y), w = this._pxBoundsToTileRange(P).getCenter(), z = l.distanceTo(w) * this.tileDelay;
        if (yield Kc(z), o.key !== h || this.lastRequestedZ !== l.z) return;
        let k = 16, I = { minX: 256 * l.x - k, minY: 256 * l.y - k, maxX: 256 * (l.x + 1) + k, maxY: 256 * (l.y + 1) + k }, A = new $(256 * l.x, 256 * l.y);
        o.width = this.tileSize, o.height = this.tileSize;
        let O = o.getContext("2d");
        if (!O) {
          console.error("Failed to get Canvas context");
          return;
        }
        O.setTransform(this.tileSize / 256, 0, 0, this.tileSize / 256, 0, 0), O.clearRect(0, 0, 256, 256), this.backgroundColor && (O.save(), O.fillStyle = this.backgroundColor, O.fillRect(0, 0, 256, 256), O.restore());
        let S = 0, rt = this.paintRules;
        if (S = dr(O, l.z, m, this.xray ? null : v, rt, I, A, !1, this.debug), this.debug) {
          O.save(), O.fillStyle = this.debug, O.font = "600 12px sans-serif", O.fillText(`${l.z} ${l.x} ${l.y}`, 4, 14), O.font = "12px sans-serif";
          let G = 28;
          for (let [tt, vt] of m) {
            let ft = vt[0].dataTile;
            O.fillText(`${tt + (tt ? " " : "") + ft.z} ${ft.x} ${ft.y}`, 4, G), G += 14;
          }
          O.font = "600 10px sans-serif", S > 8 && (O.fillText(`${S.toFixed()} ms paint`, 4, G), G += 14), p > 8 && O.fillText(`${p.toFixed()} ms layout`, 4, G), O.strokeStyle = this.debug, O.lineWidth = 0.5, O.beginPath(), O.moveTo(0, 0), O.lineTo(0, 256), O.stroke(), O.lineWidth = 0.5, O.beginPath(), O.moveTo(0, 0), O.lineTo(256, 0), O.stroke(), O.restore();
        }
        c();
      });
    }
    rerenderTile(l) {
      for (let o in this._tiles) {
        let h = this._wrapCoords(this._keyToTileCoords(o));
        l === this._tileCoordsToKey(h) && this.renderTile(h, this._tiles[o].el, l);
      }
    }
    queryTileFeaturesDebug(l, o, h = 16) {
      let c = /* @__PURE__ */ new Map();
      for (let [f, _] of this.views) c.set(f, _.queryFeatures(l, o, this._map.getZoom(), h));
      return c;
    }
    clearLayout() {
      this.labelers = new Go(this.scratch, this.labelRules, 16, this.onTilesInvalidated);
    }
    rerenderTiles() {
      for (let l in this._tiles) {
        let o = this._wrapCoords(this._keyToTileCoords(l)), h = this._tileCoordsToKey(o);
        this.renderTile(o, this._tiles[l].el, h);
      }
    }
    createTile(l, o) {
      let h = L.DomUtil.create("canvas", "leaflet-tile");
      h.lang = this.lang;
      let c = this._tileCoordsToKey(l);
      return h.key = c, this.renderTile(l, h, c, () => {
        o(void 0, h);
      }), h;
    }
    _removeTile(l) {
      let o = this._tiles[l];
      o && (o.el.removed = !0, o.el.key = void 0, L.DomUtil.removeClass(o.el, "leaflet-tile-loaded"), o.el.width = o.el.height = 0, L.DomUtil.remove(o.el), delete this._tiles[l], this.fire("tileunload", { tile: o.el, coords: this._keyToTileCoords(l) }));
    }
  };
  C(i, "LeafletLayer");
  let n = i;
  return new n(r);
}, "leafletLayer");
C((r, i, n) => {
  let a = new FontFace(r, `url(${i})`, { weight: n });
  return document.fonts.add(a), a.load();
}, "Font");
var $o = C((r) => Yt(void 0, null, function* () {
  return new Promise((i, n) => {
    let a = new Image();
    a.onload = () => i(a), a.onerror = () => n("Invalid SVG"), a.src = r;
  });
}), "mkimg"), tf = `
<svg width="20px" height="20px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" fill="#cccccc"/>
    <g transform="translate(5,5)">
        <path fill="none" stroke="#666666" stroke-width="7" d="m11,12a8.5,8 0 1,1 17,0q0,4-4,6t-4.5,4.5-.4,4v.2m0,3v7"/>
    </g>
</svg>
`, ef = class {
  constructor(i) {
    this.src = i, this.canvas = document.createElement("canvas"), this.mapping = /* @__PURE__ */ new Map(), this.missingBox = { x: 0, y: 0, w: 0, h: 0 };
  }
  load() {
    return Yt(this, null, function* () {
      let i = this.src, n = window.devicePixelRatio;
      i.endsWith(".html") && (i = yield (yield fetch(i)).text());
      let a = new window.DOMParser().parseFromString(i, "text/html"), l = Array.from(a.body.children), o = yield $o(`data:image/svg+xml;base64,${btoa(tf)}`), h = [{ w: o.width * n, h: o.height * n, img: o, id: "" }], c = new XMLSerializer();
      for (let m of l) {
        let p = `data:image/svg+xml;base64,${btoa(c.serializeToString(m))}`, v = yield $o(p);
        h.push({ w: v.width * n, h: v.height * n, img: v, id: m.id });
      }
      let f = pc(h);
      this.canvas.width = f.w, this.canvas.height = f.h;
      let _ = this.canvas.getContext("2d");
      if (_) for (let m of h) m.x !== void 0 && m.y !== void 0 && (_.drawImage(m.img, m.x, m.y, m.w, m.h), m.id ? this.mapping.set(m.id, { x: m.x, y: m.y, w: m.w, h: m.h }) : this.missingBox = { x: m.x, y: m.y, w: m.w, h: m.h });
      return this;
    });
  }
  get(i) {
    let n = this.mapping.get(i);
    return n || (n = this.missingBox), n;
  }
};
C(ef, "Sheet");
const nf = {
  background: "#cccccc",
  earth: "#e0e0e0",
  park_a: "#cfddd5",
  park_b: "#9cd3b4",
  hospital: "#e4dad9",
  industrial: "#d1dde1",
  school: "#e4ded7",
  wood_a: "#d0ded0",
  wood_b: "#a0d9a0",
  pedestrian: "#e3e0d4",
  scrub_a: "#cedcd7",
  scrub_b: "#99d2bb",
  glacier: "#e7e7e7",
  sand: "#e2e0d7",
  beach: "#e8e4d0",
  aerodrome: "#dadbdf",
  runway: "#e9e9ed",
  water: "#80deea",
  pier: "#e0e0e0",
  zoo: "#c6dcdc",
  military: "#dcdcdc",
  tunnel_other_casing: "#e0e0e0",
  tunnel_minor_casing: "#e0e0e0",
  tunnel_link_casing: "#e0e0e0",
  tunnel_medium_casing: "#e0e0e0",
  tunnel_major_casing: "#e0e0e0",
  tunnel_highway_casing: "#e0e0e0",
  tunnel_other: "#d5d5d5",
  tunnel_minor: "#d5d5d5",
  tunnel_link: "#d5d5d5",
  tunnel_medium: "#d5d5d5",
  tunnel_major: "#d5d5d5",
  tunnel_highway: "#d5d5d5",
  transit_pier: "#e0e0e0",
  buildings: "#cccccc",
  minor_service_casing: "#e0e0e0",
  minor_casing: "#e0e0e0",
  link_casing: "#e0e0e0",
  medium_casing: "#e0e0e0",
  major_casing_late: "#e0e0e0",
  highway_casing_late: "#e0e0e0",
  other: "#ebebeb",
  minor_service: "#ebebeb",
  minor_a: "#ebebeb",
  minor_b: "#ffffff",
  link: "#ffffff",
  medium: "#f5f5f5",
  major_casing_early: "#e0e0e0",
  major: "#ffffff",
  highway_casing_early: "#e0e0e0",
  highway: "#ffffff",
  railway: "#a7b1b3",
  boundaries: "#adadad",
  waterway_label: "#ffffff",
  bridges_other_casing: "#e0e0e0",
  bridges_minor_casing: "#e0e0e0",
  bridges_link_casing: "#e0e0e0",
  bridges_medium_casing: "#e0e0e0",
  bridges_major_casing: "#e0e0e0",
  bridges_highway_casing: "#e0e0e0",
  bridges_other: "#ebebeb",
  bridges_minor: "#ffffff",
  bridges_link: "#ffffff",
  bridges_medium: "#f0eded",
  bridges_major: "#f5f5f5",
  bridges_highway: "#ffffff",
  roads_label_minor: "#91888b",
  roads_label_minor_halo: "#ffffff",
  roads_label_major: "#938a8d",
  roads_label_major_halo: "#ffffff",
  ocean_label: "#ffffff",
  peak_label: "#7e9aa0",
  subplace_label: "#8f8f8f",
  subplace_label_halo: "#e0e0e0",
  city_circle: "#ffffff",
  city_circle_stroke: "#a3a3a3",
  city_label: "#5c5c5c",
  city_label_halo: "#e0e0e0",
  state_label: "#b3b3b3",
  state_label_halo: "#e0e0e0",
  country_label: "#a3a3a3"
}, rf = {
  light: nf
}, Ko = { ...rf.light }, of = (r, i, n) => Object.freeze({ instance: r, context: i, container: n }), sf = ({ ...r }, i) => {
  const n = Qc({
    paint_rules: r.paintRules,
    label_rules: r.labelRules,
    ...r
  });
  return of(n, i);
}, af = hs(
  sf,
  us
), wa = ({ attribution: r, url: i, format: n, ...a }) => {
  var h, c;
  const l = De(Nt);
  let o = /* @__PURE__ */ st(_h, { attribution: r, url: i, ...a }, void 0, !1, {
    fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/TileLayer/TileLayer.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, void 0);
  return n === "pmtiles" && (o = /* @__PURE__ */ st(
    af,
    {
      attribution: r,
      url: i,
      paintRules: ((h = l.map) == null ? void 0 : h.tiles) && cr({ ...Ko, ...l.map.tiles }),
      labelRules: ((c = l.map) == null ? void 0 : c.tiles) && fr({ ...Ko, ...l.map.tiles }),
      ...a
    },
    void 0,
    !1,
    {
      fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/TileLayer/TileLayer.jsx",
      lineNumber: 41,
      columnNumber: 7
    },
    void 0
  )), o;
};
wa.propTypes = {
  attribution: nt.string,
  url: nt.string.isRequired,
  format: nt.oneOf(["pmtiles"])
};
const lf = di(ch)`
  ${({ theme: r }) => {
  var i, n;
  return `
      ${(n = (i = r == null ? void 0 : r.global) == null ? void 0 : i.font) != null && n.family ? `font-family: ${r.global.font.family};` : ""}
      height: 100%;
    `;
}}
`, hf = ae(
  ({
    center: r = [0, 0],
    children: i,
    // level 20 is the highest zoom level per OpenStreetMap docs
    // (https://wiki.openstreetmap.org/wiki/Zoom_levels)
    maxZoom: n = 20,
    minZoom: a = 3,
    scrollWheelZoom: l = !0,
    tileLayer: o,
    theme: h,
    zoom: c = 1,
    zoomControl: f = !1,
    ..._
  }, m) => {
    const p = De(Nt), v = ui(p, { map: ui(Rh, h) });
    return /* @__PURE__ */ st(Nt.Provider, { value: v, children: /* @__PURE__ */ st(
      lf,
      {
        attributionControl: !1,
        center: r,
        ref: m,
        scrollWheelZoom: l,
        maxZoom: n,
        minZoom: a,
        zoom: c,
        zoomControl: f,
        ..._,
        children: [
          /* @__PURE__ */ st(hh, { position: "bottomright", prefix: !1 }, void 0, !1, {
            fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Map/Map.jsx",
            lineNumber: 58,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ st(
            wa,
            {
              attribution: o.attribution,
              url: o.url,
              format: o.format,
              ...o
            },
            void 0,
            !1,
            {
              fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Map/Map.jsx",
              lineNumber: 59,
              columnNumber: 11
            },
            void 0
          ),
          i
        ]
      },
      void 0,
      !0,
      {
        fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Map/Map.jsx",
        lineNumber: 47,
        columnNumber: 9
      },
      void 0
    ) }, void 0, !1, {
      fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Map/Map.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, void 0);
  }
);
hf.propTypes = {
  center: nt.array,
  children: nt.any,
  scrollWheelZoom: nt.string || nt.bool,
  maxZoom: nt.number,
  minZoom: nt.number,
  tileLayer: nt.shape({
    attribution: nt.string,
    url: nt.string.isRequired,
    format: nt.oneOf(["pmtiles"])
  }).isRequired,
  theme: nt.object,
  zoom: nt.number,
  zoomControl: nt.bool
};
let Vi;
const uf = new Uint8Array(16);
function cf() {
  if (!Vi && (Vi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Vi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Vi(uf);
}
const Tt = [];
for (let r = 0; r < 256; ++r)
  Tt.push((r + 256).toString(16).slice(1));
function ff(r, i = 0) {
  return Tt[r[i + 0]] + Tt[r[i + 1]] + Tt[r[i + 2]] + Tt[r[i + 3]] + "-" + Tt[r[i + 4]] + Tt[r[i + 5]] + "-" + Tt[r[i + 6]] + Tt[r[i + 7]] + "-" + Tt[r[i + 8]] + Tt[r[i + 9]] + "-" + Tt[r[i + 10]] + Tt[r[i + 11]] + Tt[r[i + 12]] + Tt[r[i + 13]] + Tt[r[i + 14]] + Tt[r[i + 15]];
}
const df = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Jo = {
  randomUUID: df
};
function ba(r, i, n) {
  if (Jo.randomUUID && !r)
    return Jo.randomUUID();
  r = r || {};
  const a = r.random || (r.rng || cf)();
  return a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, ff(a);
}
const _f = ({ icon: r, popup: i, ...n }) => {
  var h;
  const a = De(Nt), l = (h = r == null ? void 0 : r.props) == null ? void 0 : h.kind, o = i ? /* @__PURE__ */ st(dh, { children: /* @__PURE__ */ st(Pa, { children: i }, void 0, !1, {
    fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Marker/Marker.jsx",
    lineNumber: 16,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Marker/Marker.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, void 0) : void 0;
  return /* @__PURE__ */ st(
    fh,
    {
      icon: qi.divIcon({
        // 'grommet-marker' class prevents leaflet default divIcon styles
        className: "grommet-marker",
        html: Vn.renderToString(
          /* @__PURE__ */ st(Nt.Provider, { value: a, children: r || /* @__PURE__ */ st(La, {}, void 0, !1, {
            fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Marker/Marker.jsx",
            lineNumber: 34,
            columnNumber: 22
          }, void 0) }, void 0, !1, {
            fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Marker/Marker.jsx",
            lineNumber: 33,
            columnNumber: 11
          }, void 0)
        )
      }),
      kind: l,
      ...n,
      children: o
    },
    ba(),
    !1,
    {
      fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Marker/Marker.jsx",
      lineNumber: 21,
      columnNumber: 5
    },
    void 0
  );
};
_f.propTypes = {
  icon: nt.node,
  popup: nt.node
};
var Qo = { exports: {} };
(function(r, i) {
  (function(n, a) {
    a(i);
  })(os, function(n) {
    var a = L.MarkerClusterGroup = L.FeatureGroup.extend({
      options: {
        maxClusterRadius: 80,
        //A cluster will cover at most this many pixels from its center
        iconCreateFunction: null,
        clusterPane: L.Marker.prototype.options.pane,
        spiderfyOnEveryZoom: !1,
        spiderfyOnMaxZoom: !0,
        showCoverageOnHover: !0,
        zoomToBoundsOnClick: !0,
        singleMarkerMode: !1,
        disableClusteringAtZoom: null,
        // Setting this to false prevents the removal of any clusters outside of the viewpoint, which
        // is the default behaviour for performance reasons.
        removeOutsideVisibleBounds: !0,
        // Set to false to disable all animations (zoom and spiderfy).
        // If false, option animateAddingMarkers below has no effect.
        // If L.DomUtil.TRANSITION is falsy, this option has no effect.
        animate: !0,
        //Whether to animate adding markers after adding the MarkerClusterGroup to the map
        // If you are adding individual markers set to true, if adding bulk markers leave false for massive performance gains.
        animateAddingMarkers: !1,
        // Make it possible to provide custom function to calculate spiderfy shape positions
        spiderfyShapePositions: null,
        //Increase to increase the distance away that spiderfied markers appear from the center
        spiderfyDistanceMultiplier: 1,
        // Make it possible to specify a polyline options on a spider leg
        spiderLegPolylineOptions: { weight: 1.5, color: "#222", opacity: 0.5 },
        // When bulk adding layers, adds markers in chunks. Means addLayers may not add all the layers in the call, others will be loaded during setTimeouts
        chunkedLoading: !1,
        chunkInterval: 200,
        // process markers for a maximum of ~ n milliseconds (then trigger the chunkProgress callback)
        chunkDelay: 50,
        // at the end of each interval, give n milliseconds back to system/browser
        chunkProgress: null,
        // progress callback: function(processed, total, elapsed) (e.g. for a progress indicator)
        //Options to pass to the L.Polygon constructor
        polygonOptions: {}
      },
      initialize: function(o) {
        L.Util.setOptions(this, o), this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction), this._featureGroup = L.featureGroup(), this._featureGroup.addEventParent(this), this._nonPointGroup = L.featureGroup(), this._nonPointGroup.addEventParent(this), this._inZoomAnimation = 0, this._needsClustering = [], this._needsRemoving = [], this._currentShownBounds = null, this._queue = [], this._childMarkerEventHandlers = {
          dragstart: this._childMarkerDragStart,
          move: this._childMarkerMoved,
          dragend: this._childMarkerDragEnd
        };
        var h = L.DomUtil.TRANSITION && this.options.animate;
        L.extend(this, h ? this._withAnimation : this._noAnimation), this._markerCluster = h ? L.MarkerCluster : L.MarkerClusterNonAnimated;
      },
      addLayer: function(o) {
        if (o instanceof L.LayerGroup)
          return this.addLayers([o]);
        if (!o.getLatLng)
          return this._nonPointGroup.addLayer(o), this.fire("layeradd", { layer: o }), this;
        if (!this._map)
          return this._needsClustering.push(o), this.fire("layeradd", { layer: o }), this;
        if (this.hasLayer(o))
          return this;
        this._unspiderfy && this._unspiderfy(), this._addLayer(o, this._maxZoom), this.fire("layeradd", { layer: o }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons();
        var h = o, c = this._zoom;
        if (o.__parent)
          for (; h.__parent._zoom >= c; )
            h = h.__parent;
        return this._currentShownBounds.contains(h.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(o, h) : this._animationAddLayerNonAnimated(o, h)), this;
      },
      removeLayer: function(o) {
        return o instanceof L.LayerGroup ? this.removeLayers([o]) : o.getLatLng ? this._map ? o.__parent ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(o)), this._removeLayer(o, !0), this.fire("layerremove", { layer: o }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), o.off(this._childMarkerEventHandlers, this), this._featureGroup.hasLayer(o) && (this._featureGroup.removeLayer(o), o.clusterShow && o.clusterShow()), this) : this : (!this._arraySplice(this._needsClustering, o) && this.hasLayer(o) && this._needsRemoving.push({ layer: o, latlng: o._latlng }), this.fire("layerremove", { layer: o }), this) : (this._nonPointGroup.removeLayer(o), this.fire("layerremove", { layer: o }), this);
      },
      //Takes an array of markers and adds them in bulk
      addLayers: function(o, h) {
        if (!L.Util.isArray(o))
          return this.addLayer(o);
        var c = this._featureGroup, f = this._nonPointGroup, _ = this.options.chunkedLoading, m = this.options.chunkInterval, p = this.options.chunkProgress, v = o.length, y = 0, P = !0, w;
        if (this._map) {
          var z = (/* @__PURE__ */ new Date()).getTime(), k = L.bind(function() {
            var A = (/* @__PURE__ */ new Date()).getTime();
            for (this._map && this._unspiderfy && this._unspiderfy(); y < v; y++) {
              if (_ && y % 200 === 0) {
                var O = (/* @__PURE__ */ new Date()).getTime() - A;
                if (O > m)
                  break;
              }
              if (w = o[y], w instanceof L.LayerGroup) {
                P && (o = o.slice(), P = !1), this._extractNonGroupLayers(w, o), v = o.length;
                continue;
              }
              if (!w.getLatLng) {
                f.addLayer(w), h || this.fire("layeradd", { layer: w });
                continue;
              }
              if (!this.hasLayer(w) && (this._addLayer(w, this._maxZoom), h || this.fire("layeradd", { layer: w }), w.__parent && w.__parent.getChildCount() === 2)) {
                var S = w.__parent.getAllChildMarkers(), rt = S[0] === w ? S[1] : S[0];
                c.removeLayer(rt);
              }
            }
            p && p(y, v, (/* @__PURE__ */ new Date()).getTime() - z), y === v ? (this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(k, this.options.chunkDelay);
          }, this);
          k();
        } else
          for (var I = this._needsClustering; y < v; y++) {
            if (w = o[y], w instanceof L.LayerGroup) {
              P && (o = o.slice(), P = !1), this._extractNonGroupLayers(w, o), v = o.length;
              continue;
            }
            if (!w.getLatLng) {
              f.addLayer(w);
              continue;
            }
            this.hasLayer(w) || I.push(w);
          }
        return this;
      },
      //Takes an array of markers and removes them in bulk
      removeLayers: function(o) {
        var h, c, f = o.length, _ = this._featureGroup, m = this._nonPointGroup, p = !0;
        if (!this._map) {
          for (h = 0; h < f; h++) {
            if (c = o[h], c instanceof L.LayerGroup) {
              p && (o = o.slice(), p = !1), this._extractNonGroupLayers(c, o), f = o.length;
              continue;
            }
            this._arraySplice(this._needsClustering, c), m.removeLayer(c), this.hasLayer(c) && this._needsRemoving.push({ layer: c, latlng: c._latlng }), this.fire("layerremove", { layer: c });
          }
          return this;
        }
        if (this._unspiderfy) {
          this._unspiderfy();
          var v = o.slice(), y = f;
          for (h = 0; h < y; h++) {
            if (c = v[h], c instanceof L.LayerGroup) {
              this._extractNonGroupLayers(c, v), y = v.length;
              continue;
            }
            this._unspiderfyLayer(c);
          }
        }
        for (h = 0; h < f; h++) {
          if (c = o[h], c instanceof L.LayerGroup) {
            p && (o = o.slice(), p = !1), this._extractNonGroupLayers(c, o), f = o.length;
            continue;
          }
          if (!c.__parent) {
            m.removeLayer(c), this.fire("layerremove", { layer: c });
            continue;
          }
          this._removeLayer(c, !0, !0), this.fire("layerremove", { layer: c }), _.hasLayer(c) && (_.removeLayer(c), c.clusterShow && c.clusterShow());
        }
        return this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), this;
      },
      //Removes all layers from the MarkerClusterGroup
      clearLayers: function() {
        return this._map || (this._needsClustering = [], this._needsRemoving = [], delete this._gridClusters, delete this._gridUnclustered), this._noanimationUnspiderfy && this._noanimationUnspiderfy(), this._featureGroup.clearLayers(), this._nonPointGroup.clearLayers(), this.eachLayer(function(o) {
          o.off(this._childMarkerEventHandlers, this), delete o.__parent;
        }, this), this._map && this._generateInitialClusters(), this;
      },
      //Override FeatureGroup.getBounds as it doesn't work
      getBounds: function() {
        var o = new L.LatLngBounds();
        this._topClusterLevel && o.extend(this._topClusterLevel._bounds);
        for (var h = this._needsClustering.length - 1; h >= 0; h--)
          o.extend(this._needsClustering[h].getLatLng());
        return o.extend(this._nonPointGroup.getBounds()), o;
      },
      //Overrides LayerGroup.eachLayer
      eachLayer: function(o, h) {
        var c = this._needsClustering.slice(), f = this._needsRemoving, _, m, p;
        for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(c), m = c.length - 1; m >= 0; m--) {
          for (_ = !0, p = f.length - 1; p >= 0; p--)
            if (f[p].layer === c[m]) {
              _ = !1;
              break;
            }
          _ && o.call(h, c[m]);
        }
        this._nonPointGroup.eachLayer(o, h);
      },
      //Overrides LayerGroup.getLayers
      getLayers: function() {
        var o = [];
        return this.eachLayer(function(h) {
          o.push(h);
        }), o;
      },
      //Overrides LayerGroup.getLayer, WARNING: Really bad performance
      getLayer: function(o) {
        var h = null;
        return o = parseInt(o, 10), this.eachLayer(function(c) {
          L.stamp(c) === o && (h = c);
        }), h;
      },
      //Returns true if the given layer is in this MarkerClusterGroup
      hasLayer: function(o) {
        if (!o)
          return !1;
        var h, c = this._needsClustering;
        for (h = c.length - 1; h >= 0; h--)
          if (c[h] === o)
            return !0;
        for (c = this._needsRemoving, h = c.length - 1; h >= 0; h--)
          if (c[h].layer === o)
            return !1;
        return !!(o.__parent && o.__parent._group === this) || this._nonPointGroup.hasLayer(o);
      },
      //Zoom down to show the given layer (spiderfying if necessary) then calls the callback
      zoomToShowLayer: function(o, h) {
        var c = this._map;
        typeof h != "function" && (h = function() {
        });
        var f = function() {
          (c.hasLayer(o) || c.hasLayer(o.__parent)) && !this._inZoomAnimation && (this._map.off("moveend", f, this), this.off("animationend", f, this), c.hasLayer(o) ? h() : o.__parent._icon && (this.once("spiderfied", h, this), o.__parent.spiderfy()));
        };
        o._icon && this._map.getBounds().contains(o.getLatLng()) ? h() : o.__parent._zoom < Math.round(this._map._zoom) ? (this._map.on("moveend", f, this), this._map.panTo(o.getLatLng())) : (this._map.on("moveend", f, this), this.on("animationend", f, this), o.__parent.zoomToBounds());
      },
      //Overrides FeatureGroup.onAdd
      onAdd: function(o) {
        this._map = o;
        var h, c, f;
        if (!isFinite(this._map.getMaxZoom()))
          throw "Map has no maxZoom specified";
        for (this._featureGroup.addTo(o), this._nonPointGroup.addTo(o), this._gridClusters || this._generateInitialClusters(), this._maxLat = o.options.crs.projection.MAX_LATITUDE, h = 0, c = this._needsRemoving.length; h < c; h++)
          f = this._needsRemoving[h], f.newlatlng = f.layer._latlng, f.layer._latlng = f.latlng;
        for (h = 0, c = this._needsRemoving.length; h < c; h++)
          f = this._needsRemoving[h], this._removeLayer(f.layer, !0), f.layer._latlng = f.newlatlng;
        this._needsRemoving = [], this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds(), this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), c = this._needsClustering, this._needsClustering = [], this.addLayers(c, !0);
      },
      //Overrides FeatureGroup.onRemove
      onRemove: function(o) {
        o.off("zoomend", this._zoomEnd, this), o.off("moveend", this._moveEnd, this), this._unbindEvents(), this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""), this._spiderfierOnRemove && this._spiderfierOnRemove(), delete this._maxLat, this._hideCoverage(), this._featureGroup.remove(), this._nonPointGroup.remove(), this._featureGroup.clearLayers(), this._map = null;
      },
      getVisibleParent: function(o) {
        for (var h = o; h && !h._icon; )
          h = h.__parent;
        return h || null;
      },
      //Remove the given object from the given array
      _arraySplice: function(o, h) {
        for (var c = o.length - 1; c >= 0; c--)
          if (o[c] === h)
            return o.splice(c, 1), !0;
      },
      /**
       * Removes a marker from all _gridUnclustered zoom levels, starting at the supplied zoom.
       * @param marker to be removed from _gridUnclustered.
       * @param z integer bottom start zoom level (included)
       * @private
       */
      _removeFromGridUnclustered: function(o, h) {
        for (var c = this._map, f = this._gridUnclustered, _ = Math.floor(this._map.getMinZoom()); h >= _ && f[h].removeObject(o, c.project(o.getLatLng(), h)); h--)
          ;
      },
      _childMarkerDragStart: function(o) {
        o.target.__dragStart = o.target._latlng;
      },
      _childMarkerMoved: function(o) {
        if (!this._ignoreMove && !o.target.__dragStart) {
          var h = o.target._popup && o.target._popup.isOpen();
          this._moveChild(o.target, o.oldLatLng, o.latlng), h && o.target.openPopup();
        }
      },
      _moveChild: function(o, h, c) {
        o._latlng = h, this.removeLayer(o), o._latlng = c, this.addLayer(o);
      },
      _childMarkerDragEnd: function(o) {
        var h = o.target.__dragStart;
        delete o.target.__dragStart, h && this._moveChild(o.target, h, o.target._latlng);
      },
      //Internal function for removing a marker from everything.
      //dontUpdateMap: set to true if you will handle updating the map manually (for bulk functions)
      _removeLayer: function(o, h, c) {
        var f = this._gridClusters, _ = this._gridUnclustered, m = this._featureGroup, p = this._map, v = Math.floor(this._map.getMinZoom());
        h && this._removeFromGridUnclustered(o, this._maxZoom);
        var y = o.__parent, P = y._markers, w;
        for (this._arraySplice(P, o); y && (y._childCount--, y._boundsNeedUpdate = !0, !(y._zoom < v)); )
          h && y._childCount <= 1 ? (w = y._markers[0] === o ? y._markers[1] : y._markers[0], f[y._zoom].removeObject(y, p.project(y._cLatLng, y._zoom)), _[y._zoom].addObject(w, p.project(w.getLatLng(), y._zoom)), this._arraySplice(y.__parent._childClusters, y), y.__parent._markers.push(w), w.__parent = y.__parent, y._icon && (m.removeLayer(y), c || m.addLayer(w))) : y._iconNeedsUpdate = !0, y = y.__parent;
        delete o.__parent;
      },
      _isOrIsParent: function(o, h) {
        for (; h; ) {
          if (o === h)
            return !0;
          h = h.parentNode;
        }
        return !1;
      },
      //Override L.Evented.fire
      fire: function(o, h, c) {
        if (h && h.layer instanceof L.MarkerCluster) {
          if (h.originalEvent && this._isOrIsParent(h.layer._icon, h.originalEvent.relatedTarget))
            return;
          o = "cluster" + o;
        }
        L.FeatureGroup.prototype.fire.call(this, o, h, c);
      },
      //Override L.Evented.listens
      listens: function(o, h) {
        return L.FeatureGroup.prototype.listens.call(this, o, h) || L.FeatureGroup.prototype.listens.call(this, "cluster" + o, h);
      },
      //Default functionality
      _defaultIconCreateFunction: function(o) {
        var h = o.getChildCount(), c = " marker-cluster-";
        return h < 10 ? c += "small" : h < 100 ? c += "medium" : c += "large", new L.DivIcon({ html: "<div><span>" + h + "</span></div>", className: "marker-cluster" + c, iconSize: new L.Point(40, 40) });
      },
      _bindEvents: function() {
        var o = this._map, h = this.options.spiderfyOnMaxZoom, c = this.options.showCoverageOnHover, f = this.options.zoomToBoundsOnClick, _ = this.options.spiderfyOnEveryZoom;
        (h || f || _) && this.on("clusterclick clusterkeypress", this._zoomOrSpiderfy, this), c && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), o.on("zoomend", this._hideCoverage, this));
      },
      _zoomOrSpiderfy: function(o) {
        var h = o.layer, c = h;
        if (!(o.type === "clusterkeypress" && o.originalEvent && o.originalEvent.keyCode !== 13)) {
          for (; c._childClusters.length === 1; )
            c = c._childClusters[0];
          c._zoom === this._maxZoom && c._childCount === h._childCount && this.options.spiderfyOnMaxZoom ? h.spiderfy() : this.options.zoomToBoundsOnClick && h.zoomToBounds(), this.options.spiderfyOnEveryZoom && h.spiderfy(), o.originalEvent && o.originalEvent.keyCode === 13 && this._map._container.focus();
        }
      },
      _showCoverage: function(o) {
        var h = this._map;
        this._inZoomAnimation || (this._shownPolygon && h.removeLayer(this._shownPolygon), o.layer.getChildCount() > 2 && o.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(o.layer.getConvexHull(), this.options.polygonOptions), h.addLayer(this._shownPolygon)));
      },
      _hideCoverage: function() {
        this._shownPolygon && (this._map.removeLayer(this._shownPolygon), this._shownPolygon = null);
      },
      _unbindEvents: function() {
        var o = this.options.spiderfyOnMaxZoom, h = this.options.showCoverageOnHover, c = this.options.zoomToBoundsOnClick, f = this.options.spiderfyOnEveryZoom, _ = this._map;
        (o || c || f) && this.off("clusterclick clusterkeypress", this._zoomOrSpiderfy, this), h && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), _.off("zoomend", this._hideCoverage, this));
      },
      _zoomEnd: function() {
        this._map && (this._mergeSplitClusters(), this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds());
      },
      _moveEnd: function() {
        if (!this._inZoomAnimation) {
          var o = this._getExpandedVisibleBounds();
          this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, o), this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), o), this._currentShownBounds = o;
        }
      },
      _generateInitialClusters: function() {
        var o = Math.ceil(this._map.getMaxZoom()), h = Math.floor(this._map.getMinZoom()), c = this.options.maxClusterRadius, f = c;
        typeof c != "function" && (f = function() {
          return c;
        }), this.options.disableClusteringAtZoom !== null && (o = this.options.disableClusteringAtZoom - 1), this._maxZoom = o, this._gridClusters = {}, this._gridUnclustered = {};
        for (var _ = o; _ >= h; _--)
          this._gridClusters[_] = new L.DistanceGrid(f(_)), this._gridUnclustered[_] = new L.DistanceGrid(f(_));
        this._topClusterLevel = new this._markerCluster(this, h - 1);
      },
      //Zoom: Zoom to start adding at (Pass this._maxZoom to start at the bottom)
      _addLayer: function(o, h) {
        var c = this._gridClusters, f = this._gridUnclustered, _ = Math.floor(this._map.getMinZoom()), m, p;
        for (this.options.singleMarkerMode && this._overrideMarkerIcon(o), o.on(this._childMarkerEventHandlers, this); h >= _; h--) {
          m = this._map.project(o.getLatLng(), h);
          var v = c[h].getNearObject(m);
          if (v) {
            v._addChild(o), o.__parent = v;
            return;
          }
          if (v = f[h].getNearObject(m), v) {
            var y = v.__parent;
            y && this._removeLayer(v, !1);
            var P = new this._markerCluster(this, h, v, o);
            c[h].addObject(P, this._map.project(P._cLatLng, h)), v.__parent = P, o.__parent = P;
            var w = P;
            for (p = h - 1; p > y._zoom; p--)
              w = new this._markerCluster(this, p, w), c[p].addObject(w, this._map.project(v.getLatLng(), p));
            y._addChild(w), this._removeFromGridUnclustered(v, h);
            return;
          }
          f[h].addObject(o, m);
        }
        this._topClusterLevel._addChild(o), o.__parent = this._topClusterLevel;
      },
      /**
       * Refreshes the icon of all "dirty" visible clusters.
       * Non-visible "dirty" clusters will be updated when they are added to the map.
       * @private
       */
      _refreshClustersIcons: function() {
        this._featureGroup.eachLayer(function(o) {
          o instanceof L.MarkerCluster && o._iconNeedsUpdate && o._updateIcon();
        });
      },
      //Enqueue code to fire after the marker expand/contract has happened
      _enqueue: function(o) {
        this._queue.push(o), this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300));
      },
      _processQueue: function() {
        for (var o = 0; o < this._queue.length; o++)
          this._queue[o].call(this);
        this._queue.length = 0, clearTimeout(this._queueTimeout), this._queueTimeout = null;
      },
      //Merge and split any existing clusters that are too big or small
      _mergeSplitClusters: function() {
        var o = Math.round(this._map._zoom);
        this._processQueue(), this._zoom < o && this._currentShownBounds.intersects(this._getExpandedVisibleBounds()) ? (this._animationStart(), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds()), this._animationZoomIn(this._zoom, o)) : this._zoom > o ? (this._animationStart(), this._animationZoomOut(this._zoom, o)) : this._moveEnd();
      },
      //Gets the maps visible bounds expanded in each direction by the size of the screen (so the user cannot see an area we do not cover in one pan)
      _getExpandedVisibleBounds: function() {
        if (this.options.removeOutsideVisibleBounds) {
          if (L.Browser.mobile)
            return this._checkBoundsMaxLat(this._map.getBounds());
        } else return this._mapBoundsInfinite;
        return this._checkBoundsMaxLat(this._map.getBounds().pad(1));
      },
      /**
       * Expands the latitude to Infinity (or -Infinity) if the input bounds reach the map projection maximum defined latitude
       * (in the case of Web/Spherical Mercator, it is 85.0511287798 / see https://en.wikipedia.org/wiki/Web_Mercator#Formulas).
       * Otherwise, the removeOutsideVisibleBounds option will remove markers beyond that limit, whereas the same markers without
       * this option (or outside MCG) will have their position floored (ceiled) by the projection and rendered at that limit,
       * making the user think that MCG "eats" them and never displays them again.
       * @param bounds L.LatLngBounds
       * @returns {L.LatLngBounds}
       * @private
       */
      _checkBoundsMaxLat: function(o) {
        var h = this._maxLat;
        return h !== void 0 && (o.getNorth() >= h && (o._northEast.lat = 1 / 0), o.getSouth() <= -h && (o._southWest.lat = -1 / 0)), o;
      },
      //Shared animation code
      _animationAddLayerNonAnimated: function(o, h) {
        if (h === o)
          this._featureGroup.addLayer(o);
        else if (h._childCount === 2) {
          h._addToMap();
          var c = h.getAllChildMarkers();
          this._featureGroup.removeLayer(c[0]), this._featureGroup.removeLayer(c[1]);
        } else
          h._updateIcon();
      },
      /**
       * Extracts individual (i.e. non-group) layers from a Layer Group.
       * @param group to extract layers from.
       * @param output {Array} in which to store the extracted layers.
       * @returns {*|Array}
       * @private
       */
      _extractNonGroupLayers: function(o, h) {
        var c = o.getLayers(), f = 0, _;
        for (h = h || []; f < c.length; f++) {
          if (_ = c[f], _ instanceof L.LayerGroup) {
            this._extractNonGroupLayers(_, h);
            continue;
          }
          h.push(_);
        }
        return h;
      },
      /**
       * Implements the singleMarkerMode option.
       * @param layer Marker to re-style using the Clusters iconCreateFunction.
       * @returns {L.Icon} The newly created icon.
       * @private
       */
      _overrideMarkerIcon: function(o) {
        var h = o.options.icon = this.options.iconCreateFunction({
          getChildCount: function() {
            return 1;
          },
          getAllChildMarkers: function() {
            return [o];
          }
        });
        return h;
      }
    });
    L.MarkerClusterGroup.include({
      _mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-1 / 0, -1 / 0), new L.LatLng(1 / 0, 1 / 0))
    }), L.MarkerClusterGroup.include({
      _noAnimation: {
        //Non Animated versions of everything
        _animationStart: function() {
        },
        _animationZoomIn: function(o, h) {
          this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), o), this._topClusterLevel._recursivelyAddChildrenToMap(null, h, this._getExpandedVisibleBounds()), this.fire("animationend");
        },
        _animationZoomOut: function(o, h) {
          this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), o), this._topClusterLevel._recursivelyAddChildrenToMap(null, h, this._getExpandedVisibleBounds()), this.fire("animationend");
        },
        _animationAddLayer: function(o, h) {
          this._animationAddLayerNonAnimated(o, h);
        }
      },
      _withAnimation: {
        //Animated versions here
        _animationStart: function() {
          this._map._mapPane.className += " leaflet-cluster-anim", this._inZoomAnimation++;
        },
        _animationZoomIn: function(o, h) {
          var c = this._getExpandedVisibleBounds(), f = this._featureGroup, _ = Math.floor(this._map.getMinZoom()), m;
          this._ignoreMove = !0, this._topClusterLevel._recursively(c, o, _, function(p) {
            var v = p._latlng, y = p._markers, P;
            for (c.contains(v) || (v = null), p._isSingleParent() && o + 1 === h ? (f.removeLayer(p), p._recursivelyAddChildrenToMap(null, h, c)) : (p.clusterHide(), p._recursivelyAddChildrenToMap(v, h, c)), m = y.length - 1; m >= 0; m--)
              P = y[m], c.contains(P._latlng) || f.removeLayer(P);
          }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(c, h), f.eachLayer(function(p) {
            !(p instanceof L.MarkerCluster) && p._icon && p.clusterShow();
          }), this._topClusterLevel._recursively(c, o, h, function(p) {
            p._recursivelyRestoreChildPositions(h);
          }), this._ignoreMove = !1, this._enqueue(function() {
            this._topClusterLevel._recursively(c, o, _, function(p) {
              f.removeLayer(p), p.clusterShow();
            }), this._animationEnd();
          });
        },
        _animationZoomOut: function(o, h) {
          this._animationZoomOutSingle(this._topClusterLevel, o - 1, h), this._topClusterLevel._recursivelyAddChildrenToMap(null, h, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), o, this._getExpandedVisibleBounds());
        },
        _animationAddLayer: function(o, h) {
          var c = this, f = this._featureGroup;
          f.addLayer(o), h !== o && (h._childCount > 2 ? (h._updateIcon(), this._forceLayout(), this._animationStart(), o._setPos(this._map.latLngToLayerPoint(h.getLatLng())), o.clusterHide(), this._enqueue(function() {
            f.removeLayer(o), o.clusterShow(), c._animationEnd();
          })) : (this._forceLayout(), c._animationStart(), c._animationZoomOutSingle(h, this._map.getMaxZoom(), this._zoom)));
        }
      },
      // Private methods for animated versions.
      _animationZoomOutSingle: function(o, h, c) {
        var f = this._getExpandedVisibleBounds(), _ = Math.floor(this._map.getMinZoom());
        o._recursivelyAnimateChildrenInAndAddSelfToMap(f, _, h + 1, c);
        var m = this;
        this._forceLayout(), o._recursivelyBecomeVisible(f, c), this._enqueue(function() {
          if (o._childCount === 1) {
            var p = o._markers[0];
            this._ignoreMove = !0, p.setLatLng(p.getLatLng()), this._ignoreMove = !1, p.clusterShow && p.clusterShow();
          } else
            o._recursively(f, c, _, function(v) {
              v._recursivelyRemoveChildrenFromMap(f, _, h + 1);
            });
          m._animationEnd();
        });
      },
      _animationEnd: function() {
        this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend");
      },
      //Force a browser layout of stuff in the map
      // Should apply the current opacity and location to all elements so we can update them again for an animation
      _forceLayout: function() {
        L.Util.falseFn(document.body.offsetWidth);
      }
    }), L.markerClusterGroup = function(o) {
      return new L.MarkerClusterGroup(o);
    };
    var l = L.MarkerCluster = L.Marker.extend({
      options: L.Icon.prototype.options,
      initialize: function(o, h, c, f) {
        L.Marker.prototype.initialize.call(
          this,
          c ? c._cLatLng || c.getLatLng() : new L.LatLng(0, 0),
          { icon: this, pane: o.options.clusterPane }
        ), this._group = o, this._zoom = h, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._bounds = new L.LatLngBounds(), c && this._addChild(c), f && this._addChild(f);
      },
      //Recursively retrieve all child markers of this cluster
      getAllChildMarkers: function(o, h) {
        o = o || [];
        for (var c = this._childClusters.length - 1; c >= 0; c--)
          this._childClusters[c].getAllChildMarkers(o, h);
        for (var f = this._markers.length - 1; f >= 0; f--)
          h && this._markers[f].__dragStart || o.push(this._markers[f]);
        return o;
      },
      //Returns the count of how many child markers we have
      getChildCount: function() {
        return this._childCount;
      },
      //Zoom to the minimum of showing all of the child markers, or the extents of this cluster
      zoomToBounds: function(o) {
        for (var h = this._childClusters.slice(), c = this._group._map, f = c.getBoundsZoom(this._bounds), _ = this._zoom + 1, m = c.getZoom(), p; h.length > 0 && f > _; ) {
          _++;
          var v = [];
          for (p = 0; p < h.length; p++)
            v = v.concat(h[p]._childClusters);
          h = v;
        }
        f > _ ? this._group._map.setView(this._latlng, _) : f <= m ? this._group._map.setView(this._latlng, m + 1) : this._group._map.fitBounds(this._bounds, o);
      },
      getBounds: function() {
        var o = new L.LatLngBounds();
        return o.extend(this._bounds), o;
      },
      _updateIcon: function() {
        this._iconNeedsUpdate = !0, this._icon && this.setIcon(this);
      },
      //Cludge for Icon, we pretend to be an icon for performance
      createIcon: function() {
        return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this), this._iconNeedsUpdate = !1), this._iconObj.createIcon();
      },
      createShadow: function() {
        return this._iconObj.createShadow();
      },
      _addChild: function(o, h) {
        this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._setClusterCenter(o), o instanceof L.MarkerCluster ? (h || (this._childClusters.push(o), o.__parent = this), this._childCount += o._childCount) : (h || this._markers.push(o), this._childCount++), this.__parent && this.__parent._addChild(o, !0);
      },
      /**
       * Makes sure the cluster center is set. If not, uses the child center if it is a cluster, or the marker position.
       * @param child L.MarkerCluster|L.Marker that will be used as cluster center if not defined yet.
       * @private
       */
      _setClusterCenter: function(o) {
        this._cLatLng || (this._cLatLng = o._cLatLng || o._latlng);
      },
      /**
       * Assigns impossible bounding values so that the next extend entirely determines the new bounds.
       * This method avoids having to trash the previous L.LatLngBounds object and to create a new one, which is much slower for this class.
       * As long as the bounds are not extended, most other methods would probably fail, as they would with bounds initialized but not extended.
       * @private
       */
      _resetBounds: function() {
        var o = this._bounds;
        o._southWest && (o._southWest.lat = 1 / 0, o._southWest.lng = 1 / 0), o._northEast && (o._northEast.lat = -1 / 0, o._northEast.lng = -1 / 0);
      },
      _recalculateBounds: function() {
        var o = this._markers, h = this._childClusters, c = 0, f = 0, _ = this._childCount, m, p, v, y;
        if (_ !== 0) {
          for (this._resetBounds(), m = 0; m < o.length; m++)
            v = o[m]._latlng, this._bounds.extend(v), c += v.lat, f += v.lng;
          for (m = 0; m < h.length; m++)
            p = h[m], p._boundsNeedUpdate && p._recalculateBounds(), this._bounds.extend(p._bounds), v = p._wLatLng, y = p._childCount, c += v.lat * y, f += v.lng * y;
          this._latlng = this._wLatLng = new L.LatLng(c / _, f / _), this._boundsNeedUpdate = !1;
        }
      },
      //Set our markers position as given and add it to the map
      _addToMap: function(o) {
        o && (this._backupLatlng = this._latlng, this.setLatLng(o)), this._group._featureGroup.addLayer(this);
      },
      _recursivelyAnimateChildrenIn: function(o, h, c) {
        this._recursively(
          o,
          this._group._map.getMinZoom(),
          c - 1,
          function(f) {
            var _ = f._markers, m, p;
            for (m = _.length - 1; m >= 0; m--)
              p = _[m], p._icon && (p._setPos(h), p.clusterHide());
          },
          function(f) {
            var _ = f._childClusters, m, p;
            for (m = _.length - 1; m >= 0; m--)
              p = _[m], p._icon && (p._setPos(h), p.clusterHide());
          }
        );
      },
      _recursivelyAnimateChildrenInAndAddSelfToMap: function(o, h, c, f) {
        this._recursively(
          o,
          f,
          h,
          function(_) {
            _._recursivelyAnimateChildrenIn(o, _._group._map.latLngToLayerPoint(_.getLatLng()).round(), c), _._isSingleParent() && c - 1 === f ? (_.clusterShow(), _._recursivelyRemoveChildrenFromMap(o, h, c)) : _.clusterHide(), _._addToMap();
          }
        );
      },
      _recursivelyBecomeVisible: function(o, h) {
        this._recursively(o, this._group._map.getMinZoom(), h, null, function(c) {
          c.clusterShow();
        });
      },
      _recursivelyAddChildrenToMap: function(o, h, c) {
        this._recursively(
          c,
          this._group._map.getMinZoom() - 1,
          h,
          function(f) {
            if (h !== f._zoom)
              for (var _ = f._markers.length - 1; _ >= 0; _--) {
                var m = f._markers[_];
                c.contains(m._latlng) && (o && (m._backupLatlng = m.getLatLng(), m.setLatLng(o), m.clusterHide && m.clusterHide()), f._group._featureGroup.addLayer(m));
              }
          },
          function(f) {
            f._addToMap(o);
          }
        );
      },
      _recursivelyRestoreChildPositions: function(o) {
        for (var h = this._markers.length - 1; h >= 0; h--) {
          var c = this._markers[h];
          c._backupLatlng && (c.setLatLng(c._backupLatlng), delete c._backupLatlng);
        }
        if (o - 1 === this._zoom)
          for (var f = this._childClusters.length - 1; f >= 0; f--)
            this._childClusters[f]._restorePosition();
        else
          for (var _ = this._childClusters.length - 1; _ >= 0; _--)
            this._childClusters[_]._recursivelyRestoreChildPositions(o);
      },
      _restorePosition: function() {
        this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng);
      },
      //exceptBounds: If set, don't remove any markers/clusters in it
      _recursivelyRemoveChildrenFromMap: function(o, h, c, f) {
        var _, m;
        this._recursively(
          o,
          h - 1,
          c - 1,
          function(p) {
            for (m = p._markers.length - 1; m >= 0; m--)
              _ = p._markers[m], (!f || !f.contains(_._latlng)) && (p._group._featureGroup.removeLayer(_), _.clusterShow && _.clusterShow());
          },
          function(p) {
            for (m = p._childClusters.length - 1; m >= 0; m--)
              _ = p._childClusters[m], (!f || !f.contains(_._latlng)) && (p._group._featureGroup.removeLayer(_), _.clusterShow && _.clusterShow());
          }
        );
      },
      //Run the given functions recursively to this and child clusters
      // boundsToApplyTo: a L.LatLngBounds representing the bounds of what clusters to recurse in to
      // zoomLevelToStart: zoom level to start running functions (inclusive)
      // zoomLevelToStop: zoom level to stop running functions (inclusive)
      // runAtEveryLevel: function that takes an L.MarkerCluster as an argument that should be applied on every level
      // runAtBottomLevel: function that takes an L.MarkerCluster as an argument that should be applied at only the bottom level
      _recursively: function(o, h, c, f, _) {
        var m = this._childClusters, p = this._zoom, v, y;
        if (h <= p && (f && f(this), _ && p === c && _(this)), p < h || p < c)
          for (v = m.length - 1; v >= 0; v--)
            y = m[v], y._boundsNeedUpdate && y._recalculateBounds(), o.intersects(y._bounds) && y._recursively(o, h, c, f, _);
      },
      //Returns true if we are the parent of only one cluster and that cluster is the same as us
      _isSingleParent: function() {
        return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
      }
    });
    L.Marker.include({
      clusterHide: function() {
        var o = this.options.opacity;
        return this.setOpacity(0), this.options.opacity = o, this;
      },
      clusterShow: function() {
        return this.setOpacity(this.options.opacity);
      }
    }), L.DistanceGrid = function(o) {
      this._cellSize = o, this._sqCellSize = o * o, this._grid = {}, this._objectPoint = {};
    }, L.DistanceGrid.prototype = {
      addObject: function(o, h) {
        var c = this._getCoord(h.x), f = this._getCoord(h.y), _ = this._grid, m = _[f] = _[f] || {}, p = m[c] = m[c] || [], v = L.Util.stamp(o);
        this._objectPoint[v] = h, p.push(o);
      },
      updateObject: function(o, h) {
        this.removeObject(o), this.addObject(o, h);
      },
      //Returns true if the object was found
      removeObject: function(o, h) {
        var c = this._getCoord(h.x), f = this._getCoord(h.y), _ = this._grid, m = _[f] = _[f] || {}, p = m[c] = m[c] || [], v, y;
        for (delete this._objectPoint[L.Util.stamp(o)], v = 0, y = p.length; v < y; v++)
          if (p[v] === o)
            return p.splice(v, 1), y === 1 && delete m[c], !0;
      },
      eachObject: function(o, h) {
        var c, f, _, m, p, v, y, P = this._grid;
        for (c in P) {
          p = P[c];
          for (f in p)
            for (v = p[f], _ = 0, m = v.length; _ < m; _++)
              y = o.call(h, v[_]), y && (_--, m--);
        }
      },
      getNearObject: function(o) {
        var h = this._getCoord(o.x), c = this._getCoord(o.y), f, _, m, p, v, y, P, w, z = this._objectPoint, k = this._sqCellSize, I = null;
        for (f = c - 1; f <= c + 1; f++)
          if (p = this._grid[f], p) {
            for (_ = h - 1; _ <= h + 1; _++)
              if (v = p[_], v)
                for (m = 0, y = v.length; m < y; m++)
                  P = v[m], w = this._sqDist(z[L.Util.stamp(P)], o), (w < k || w <= k && I === null) && (k = w, I = P);
          }
        return I;
      },
      _getCoord: function(o) {
        var h = Math.floor(o / this._cellSize);
        return isFinite(h) ? h : o;
      },
      _sqDist: function(o, h) {
        var c = h.x - o.x, f = h.y - o.y;
        return c * c + f * f;
      }
    }, function() {
      L.QuickHull = {
        /*
         * @param {Object} cpt a point to be measured from the baseline
         * @param {Array} bl the baseline, as represented by a two-element
         *   array of latlng objects.
         * @returns {Number} an approximate distance measure
         */
        getDistant: function(o, h) {
          var c = h[1].lat - h[0].lat, f = h[0].lng - h[1].lng;
          return f * (o.lat - h[0].lat) + c * (o.lng - h[0].lng);
        },
        /*
         * @param {Array} baseLine a two-element array of latlng objects
         *   representing the baseline to project from
         * @param {Array} latLngs an array of latlng objects
         * @returns {Object} the maximum point and all new points to stay
         *   in consideration for the hull.
         */
        findMostDistantPointFromBaseLine: function(o, h) {
          var c = 0, f = null, _ = [], m, p, v;
          for (m = h.length - 1; m >= 0; m--) {
            if (p = h[m], v = this.getDistant(p, o), v > 0)
              _.push(p);
            else
              continue;
            v > c && (c = v, f = p);
          }
          return { maxPoint: f, newPoints: _ };
        },
        /*
         * Given a baseline, compute the convex hull of latLngs as an array
         * of latLngs.
         *
         * @param {Array} latLngs
         * @returns {Array}
         */
        buildConvexHull: function(o, h) {
          var c = [], f = this.findMostDistantPointFromBaseLine(o, h);
          return f.maxPoint ? (c = c.concat(
            this.buildConvexHull([o[0], f.maxPoint], f.newPoints)
          ), c = c.concat(
            this.buildConvexHull([f.maxPoint, o[1]], f.newPoints)
          ), c) : [o[0]];
        },
        /*
         * Given an array of latlngs, compute a convex hull as an array
         * of latlngs
         *
         * @param {Array} latLngs
         * @returns {Array}
         */
        getConvexHull: function(o) {
          var h = !1, c = !1, f = !1, _ = !1, m = null, p = null, v = null, y = null, P = null, w = null, z;
          for (z = o.length - 1; z >= 0; z--) {
            var k = o[z];
            (h === !1 || k.lat > h) && (m = k, h = k.lat), (c === !1 || k.lat < c) && (p = k, c = k.lat), (f === !1 || k.lng > f) && (v = k, f = k.lng), (_ === !1 || k.lng < _) && (y = k, _ = k.lng);
          }
          c !== h ? (w = p, P = m) : (w = y, P = v);
          var I = [].concat(
            this.buildConvexHull([w, P], o),
            this.buildConvexHull([P, w], o)
          );
          return I;
        }
      };
    }(), L.MarkerCluster.include({
      getConvexHull: function() {
        var o = this.getAllChildMarkers(), h = [], c, f;
        for (f = o.length - 1; f >= 0; f--)
          c = o[f].getLatLng(), h.push(c);
        return L.QuickHull.getConvexHull(h);
      }
    }), L.MarkerCluster.include({
      _2PI: Math.PI * 2,
      _circleFootSeparation: 25,
      //related to circumference of circle
      _circleStartAngle: 0,
      _spiralFootSeparation: 28,
      //related to size of spiral (experiment!)
      _spiralLengthStart: 11,
      _spiralLengthFactor: 5,
      _circleSpiralSwitchover: 9,
      //show spiral instead of circle from this marker count upwards.
      // 0 -> always spiral; Infinity -> always circle
      spiderfy: function() {
        if (!(this._group._spiderfied === this || this._group._inZoomAnimation)) {
          var o = this.getAllChildMarkers(null, !0), h = this._group, c = h._map, f = c.latLngToLayerPoint(this._latlng), _;
          this._group._unspiderfy(), this._group._spiderfied = this, this._group.options.spiderfyShapePositions ? _ = this._group.options.spiderfyShapePositions(o.length, f) : o.length >= this._circleSpiralSwitchover ? _ = this._generatePointsSpiral(o.length, f) : (f.y += 10, _ = this._generatePointsCircle(o.length, f)), this._animationSpiderfy(o, _);
        }
      },
      unspiderfy: function(o) {
        this._group._inZoomAnimation || (this._animationUnspiderfy(o), this._group._spiderfied = null);
      },
      _generatePointsCircle: function(o, h) {
        var c = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + o), f = c / this._2PI, _ = this._2PI / o, m = [], p, v;
        for (f = Math.max(f, 35), m.length = o, p = 0; p < o; p++)
          v = this._circleStartAngle + p * _, m[p] = new L.Point(h.x + f * Math.cos(v), h.y + f * Math.sin(v))._round();
        return m;
      },
      _generatePointsSpiral: function(o, h) {
        var c = this._group.options.spiderfyDistanceMultiplier, f = c * this._spiralLengthStart, _ = c * this._spiralFootSeparation, m = c * this._spiralLengthFactor * this._2PI, p = 0, v = [], y;
        for (v.length = o, y = o; y >= 0; y--)
          y < o && (v[y] = new L.Point(h.x + f * Math.cos(p), h.y + f * Math.sin(p))._round()), p += _ / f + y * 5e-4, f += m / p;
        return v;
      },
      _noanimationUnspiderfy: function() {
        var o = this._group, h = o._map, c = o._featureGroup, f = this.getAllChildMarkers(null, !0), _, m;
        for (o._ignoreMove = !0, this.setOpacity(1), m = f.length - 1; m >= 0; m--)
          _ = f[m], c.removeLayer(_), _._preSpiderfyLatlng && (_.setLatLng(_._preSpiderfyLatlng), delete _._preSpiderfyLatlng), _.setZIndexOffset && _.setZIndexOffset(0), _._spiderLeg && (h.removeLayer(_._spiderLeg), delete _._spiderLeg);
        o.fire("unspiderfied", {
          cluster: this,
          markers: f
        }), o._ignoreMove = !1, o._spiderfied = null;
      }
    }), L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
      _animationSpiderfy: function(o, h) {
        var c = this._group, f = c._map, _ = c._featureGroup, m = this._group.options.spiderLegPolylineOptions, p, v, y, P;
        for (c._ignoreMove = !0, p = 0; p < o.length; p++)
          P = f.layerPointToLatLng(h[p]), v = o[p], y = new L.Polyline([this._latlng, P], m), f.addLayer(y), v._spiderLeg = y, v._preSpiderfyLatlng = v._latlng, v.setLatLng(P), v.setZIndexOffset && v.setZIndexOffset(1e6), _.addLayer(v);
        this.setOpacity(0.3), c._ignoreMove = !1, c.fire("spiderfied", {
          cluster: this,
          markers: o
        });
      },
      _animationUnspiderfy: function() {
        this._noanimationUnspiderfy();
      }
    }), L.MarkerCluster.include({
      _animationSpiderfy: function(o, h) {
        var c = this, f = this._group, _ = f._map, m = f._featureGroup, p = this._latlng, v = _.latLngToLayerPoint(p), y = L.Path.SVG, P = L.extend({}, this._group.options.spiderLegPolylineOptions), w = P.opacity, z, k, I, A, O, S;
        for (w === void 0 && (w = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity), y ? (P.opacity = 0, P.className = (P.className || "") + " leaflet-cluster-spider-leg") : P.opacity = w, f._ignoreMove = !0, z = 0; z < o.length; z++)
          k = o[z], S = _.layerPointToLatLng(h[z]), I = new L.Polyline([p, S], P), _.addLayer(I), k._spiderLeg = I, y && (A = I._path, O = A.getTotalLength() + 0.1, A.style.strokeDasharray = O, A.style.strokeDashoffset = O), k.setZIndexOffset && k.setZIndexOffset(1e6), k.clusterHide && k.clusterHide(), m.addLayer(k), k._setPos && k._setPos(v);
        for (f._forceLayout(), f._animationStart(), z = o.length - 1; z >= 0; z--)
          S = _.layerPointToLatLng(h[z]), k = o[z], k._preSpiderfyLatlng = k._latlng, k.setLatLng(S), k.clusterShow && k.clusterShow(), y && (I = k._spiderLeg, A = I._path, A.style.strokeDashoffset = 0, I.setStyle({ opacity: w }));
        this.setOpacity(0.3), f._ignoreMove = !1, setTimeout(function() {
          f._animationEnd(), f.fire("spiderfied", {
            cluster: c,
            markers: o
          });
        }, 200);
      },
      _animationUnspiderfy: function(o) {
        var h = this, c = this._group, f = c._map, _ = c._featureGroup, m = o ? f._latLngToNewLayerPoint(this._latlng, o.zoom, o.center) : f.latLngToLayerPoint(this._latlng), p = this.getAllChildMarkers(null, !0), v = L.Path.SVG, y, P, w, z, k, I;
        for (c._ignoreMove = !0, c._animationStart(), this.setOpacity(1), P = p.length - 1; P >= 0; P--)
          y = p[P], y._preSpiderfyLatlng && (y.closePopup(), y.setLatLng(y._preSpiderfyLatlng), delete y._preSpiderfyLatlng, I = !0, y._setPos && (y._setPos(m), I = !1), y.clusterHide && (y.clusterHide(), I = !1), I && _.removeLayer(y), v && (w = y._spiderLeg, z = w._path, k = z.getTotalLength() + 0.1, z.style.strokeDashoffset = k, w.setStyle({ opacity: 0 })));
        c._ignoreMove = !1, setTimeout(function() {
          var A = 0;
          for (P = p.length - 1; P >= 0; P--)
            y = p[P], y._spiderLeg && A++;
          for (P = p.length - 1; P >= 0; P--)
            y = p[P], y._spiderLeg && (y.clusterShow && y.clusterShow(), y.setZIndexOffset && y.setZIndexOffset(0), A > 1 && _.removeLayer(y), f.removeLayer(y._spiderLeg), delete y._spiderLeg);
          c._animationEnd(), c.fire("unspiderfied", {
            cluster: h,
            markers: p
          });
        }, 200);
      }
    }), L.MarkerClusterGroup.include({
      //The MarkerCluster currently spiderfied (if any)
      _spiderfied: null,
      unspiderfy: function() {
        this._unspiderfy.apply(this, arguments);
      },
      _spiderfierOnAdd: function() {
        this._map.on("click", this._unspiderfyWrapper, this), this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this), this._map.on("zoomend", this._noanimationUnspiderfy, this), L.Browser.touch || this._map.getRenderer(this);
      },
      _spiderfierOnRemove: function() {
        this._map.off("click", this._unspiderfyWrapper, this), this._map.off("zoomstart", this._unspiderfyZoomStart, this), this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._map.off("zoomend", this._noanimationUnspiderfy, this), this._noanimationUnspiderfy();
      },
      //On zoom start we add a zoomanim handler so that we are guaranteed to be last (after markers are animated)
      //This means we can define the animation they do rather than Markers doing an animation to their actual location
      _unspiderfyZoomStart: function() {
        this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this);
      },
      _unspiderfyZoomAnim: function(o) {
        L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(o));
      },
      _unspiderfyWrapper: function() {
        this._unspiderfy();
      },
      _unspiderfy: function(o) {
        this._spiderfied && this._spiderfied.unspiderfy(o);
      },
      _noanimationUnspiderfy: function() {
        this._spiderfied && this._spiderfied._noanimationUnspiderfy();
      },
      //If the given layer is currently being spiderfied then we unspiderfy it so it isn't on the map anymore etc
      _unspiderfyLayer: function(o) {
        o._spiderLeg && (this._featureGroup.removeLayer(o), o.clusterShow && o.clusterShow(), o.setZIndexOffset && o.setZIndexOffset(0), this._map.removeLayer(o._spiderLeg), delete o._spiderLeg);
      }
    }), L.MarkerClusterGroup.include({
      /**
       * Updates the icon of all clusters which are parents of the given marker(s).
       * In singleMarkerMode, also updates the given marker(s) icon.
       * @param layers L.MarkerClusterGroup|L.LayerGroup|Array(L.Marker)|Map(L.Marker)|
       * L.MarkerCluster|L.Marker (optional) list of markers (or single marker) whose parent
       * clusters need to be updated. If not provided, retrieves all child markers of this.
       * @returns {L.MarkerClusterGroup}
       */
      refreshClusters: function(o) {
        return o ? o instanceof L.MarkerClusterGroup ? o = o._topClusterLevel.getAllChildMarkers() : o instanceof L.LayerGroup ? o = o._layers : o instanceof L.MarkerCluster ? o = o.getAllChildMarkers() : o instanceof L.Marker && (o = [o]) : o = this._topClusterLevel.getAllChildMarkers(), this._flagParentsIconsNeedUpdate(o), this._refreshClustersIcons(), this.options.singleMarkerMode && this._refreshSingleMarkerModeMarkers(o), this;
      },
      /**
       * Simply flags all parent clusters of the given markers as having a "dirty" icon.
       * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
       * @private
       */
      _flagParentsIconsNeedUpdate: function(o) {
        var h, c;
        for (h in o)
          for (c = o[h].__parent; c; )
            c._iconNeedsUpdate = !0, c = c.__parent;
      },
      /**
       * Re-draws the icon of the supplied markers.
       * To be used in singleMarkerMode only.
       * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
       * @private
       */
      _refreshSingleMarkerModeMarkers: function(o) {
        var h, c;
        for (h in o)
          c = o[h], this.hasLayer(c) && c.setIcon(this._overrideMarkerIcon(c));
      }
    }), L.Marker.include({
      /**
       * Updates the given options in the marker's icon and refreshes the marker.
       * @param options map object of icon options.
       * @param directlyRefreshClusters boolean (optional) true to trigger
       * MCG.refreshClustersOf() right away with this single marker.
       * @returns {L.Marker}
       */
      refreshIconOptions: function(o, h) {
        var c = this.options.icon;
        return L.setOptions(c, o), this.setIcon(c), h && this.__parent && this.__parent._group.refreshClusters(this), this;
      }
    }), n.MarkerClusterGroup = a, n.MarkerCluster = l, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(Qo, Qo.exports);
function mf(r, i) {
  const n = {}, a = {};
  Object.entries(r).forEach(([o, h]) => {
    o.startsWith("on") ? a[o] = h : n[o] = h;
  });
  const l = new qi.MarkerClusterGroup({
    showCoverageOnHover: !1,
    zoomToBoundsOnClick: !1,
    ...n
  });
  return Object.entries(a).forEach(([o, h]) => {
    const c = `cluster${o.substring(2).toLowerCase()}`;
    l.on(c, h);
  }), _i(
    l,
    is(i, {
      layerContainer: l
    })
  );
}
const pf = ls(mf), gf = (r) => {
  const { children: i, icon: n, popup: a, ...l } = r, o = St.useContext(Nt);
  return /* @__PURE__ */ st(pf, { iconCreateFunction: (c) => {
    if (a && a({ cluster: c })) {
      const f = `grommet-leaflet-popup-${ba()}`, _ = /* @__PURE__ */ st(Nt.Provider, { value: o, children: /* @__PURE__ */ st(Pa, { children: a({ cluster: c }) }, void 0, !1, {
        fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/MarkerCluster/MarkerCluster.jsx",
        lineNumber: 60,
        columnNumber: 11
      }, void 0) }, void 0, !1, {
        fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/MarkerCluster/MarkerCluster.jsx",
        lineNumber: 59,
        columnNumber: 9
      }, void 0), m = c.bindPopup(
        Vn.renderToString(/* @__PURE__ */ st("div", { id: f, children: _ }, void 0, !1, {
          fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/MarkerCluster/MarkerCluster.jsx",
          lineNumber: 69,
          columnNumber: 39
        }, void 0))
      );
      c.on("click keypress", () => {
        m.openPopup();
        const p = document.getElementById(f);
        p && Ql(_, p);
      });
    }
    return qi.divIcon({
      // 'grommet-cluster-group' class prevents
      // leaflet default divIcon styles
      className: "grommet-cluster-group",
      html: Vn.renderToString(
        /* @__PURE__ */ st(Nt.Provider, { value: o, children: n ? St.cloneElement(n({ cluster: c }), {
          cluster: c
        }) : /* @__PURE__ */ st(_s, { cluster: c }, void 0, !1, {
          fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/MarkerCluster/MarkerCluster.jsx",
          lineNumber: 97,
          columnNumber: 13
        }, void 0) }, void 0, !1, {
          fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/MarkerCluster/MarkerCluster.jsx",
          lineNumber: 91,
          columnNumber: 9
        }, void 0)
      )
    });
  }, ...l, children: i }, void 0, !1, {
    fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/MarkerCluster/MarkerCluster.jsx",
    lineNumber: 105,
    columnNumber: 5
  }, void 0);
};
gf.propTypes = {
  children: nt.node,
  icon: nt.func,
  popup: nt.func
};
const vf = di(ye)`
  // to create the pin shape
  border-bottom-right-radius: 0;
  // translate to re-align with leaflet div
  transform: rotate(45deg) translateX(-35%);
  &:hover {
    transform: rotate(45deg) translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`, La = ({ kind: r = "default" }) => {
  var l, o, h, c, f, _, m, p, v;
  const i = St.useContext(Nt), n = ds([
    (h = (o = (l = i == null ? void 0 : i.map) == null ? void 0 : l.pin) == null ? void 0 : o.default) == null ? void 0 : h.container,
    (_ = (f = (c = i == null ? void 0 : i.map) == null ? void 0 : c.pin) == null ? void 0 : f[r]) == null ? void 0 : _.container
  ]);
  let a = (v = (p = (m = i == null ? void 0 : i.map) == null ? void 0 : m.pin) == null ? void 0 : p[r]) == null ? void 0 : v.icon;
  return a && (a = St.cloneElement(a, {
    // style needed to offset for rotation of location pin so
    // icon is vertical
    style: { transform: "rotate(-45deg)" }
  })), /* @__PURE__ */ st(vf, { ...n, children: a }, void 0, !1, {
    fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Pin/Pin.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, void 0);
};
La.propTypes = {
  kind: nt.string
};
const Pa = ({ ...r }) => {
  var n;
  const i = De(Nt);
  return /* @__PURE__ */ st(ye, { ...(n = i == null ? void 0 : i.map) == null ? void 0 : n.popup, ...r }, void 0, !1, {
    fileName: "C:/Users/auttonbe/repos/grommet-leaflet/grommet-leaflet/src/layers/Popup/Popup.jsx",
    lineNumber: 8,
    columnNumber: 10
  }, void 0);
};
window.console = console;
const yf = console.error, xf = [
  "useLayoutEffect does nothing on the server, because its effect cannot"
];
console.error = function(i, ...n) {
  const a = JSON.stringify(i);
  xf.some((l) => a.includes(l)) || yf(i, ...n);
};
export {
  _s as Cluster,
  Zh as Controls,
  Bh as LocationBounds,
  hf as Map,
  _f as Marker,
  gf as MarkerCluster,
  La as Pin,
  Pa as Popup,
  wa as TileLayer,
  Rh as base,
  ui as deepMerge,
  Oo as isObject,
  ds as normalizeTheme,
  rr as useMap,
  Mf as useMapEvent,
  kf as useMapEvents
};
//# sourceMappingURL=grommet-leaflet.js.map
