/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var G_ = Object.create;
  var Zr = Object.defineProperty;
  var V_ = Object.getOwnPropertyDescriptor;
  var U_ = Object.getOwnPropertyNames;
  var B_ = Object.getPrototypeOf,
    X_ = Object.prototype.hasOwnProperty;
  var ce = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Ce = (e, t) => {
      for (var r in t) Zr(e, r, { get: t[r], enumerable: !0 });
    },
    Ss = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of U_(t))
          !X_.call(e, i) &&
            i !== r &&
            Zr(e, i, {
              get: () => t[i],
              enumerable: !(n = V_(t, i)) || n.enumerable,
            });
      return e;
    };
  var ie = (e, t, r) => (
      (r = e != null ? G_(B_(e)) : {}),
      Ss(
        t || !e || !e.__esModule
          ? Zr(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    ze = (e) => Ss(Zr({}, "__esModule", { value: !0 }), e);
  var Si = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, h) {
        var _ = new F.Bare();
        return _.init(l, h);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (h) {
          return "-" + h.toLowerCase();
        });
      }
      function n(l) {
        var h = parseInt(l.slice(1), 16),
          _ = (h >> 16) & 255,
          I = (h >> 8) & 255,
          y = 255 & h;
        return [_, I, y];
      }
      function i(l, h, _) {
        return (
          "#" + ((1 << 24) | (l << 16) | (h << 8) | _).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, h) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof h + "] " + h);
      }
      function s(l, h, _) {
        f("Units do not match [" + l + "]: " + h + ", " + _);
      }
      function u(l, h, _) {
        if ((h !== void 0 && (_ = h), l === void 0)) return _;
        var I = _;
        return (
          Ai.test(l) || !Yr.test(l)
            ? (I = parseInt(l, 10))
            : Yr.test(l) && (I = 1e3 * parseFloat(l)),
          0 > I && (I = 0),
          I === I ? I : _
        );
      }
      function f(l) {
        ge.debug && window && window.console.warn(l);
      }
      function g(l) {
        for (var h = -1, _ = l ? l.length : 0, I = []; ++h < _; ) {
          var y = l[h];
          y && I.push(y);
        }
        return I;
      }
      var p = (function (l, h, _) {
          function I($) {
            return typeof $ == "object";
          }
          function y($) {
            return typeof $ == "function";
          }
          function O() {}
          function k($, se) {
            function M() {
              var Ie = new J();
              return y(Ie.init) && Ie.init.apply(Ie, arguments), Ie;
            }
            function J() {}
            se === _ && ((se = $), ($ = Object)), (M.Bare = J);
            var te,
              he = (O[l] = $[l]),
              je = (J[l] = M[l] = new O());
            return (
              (je.constructor = M),
              (M.mixin = function (Ie) {
                return (J[l] = M[l] = k(M, Ie)[l]), M;
              }),
              (M.open = function (Ie) {
                if (
                  ((te = {}),
                  y(Ie) ? (te = Ie.call(M, je, he, M, $)) : I(Ie) && (te = Ie),
                  I(te))
                )
                  for (var dr in te) h.call(te, dr) && (je[dr] = te[dr]);
                return y(je.init) || (je.init = $), M;
              }),
              M.open(se)
            );
          }
          return k;
        })("prototype", {}.hasOwnProperty),
        d = {
          ease: [
            "ease",
            function (l, h, _, I) {
              var y = (l /= I) * l,
                O = y * l;
              return (
                h +
                _ * (-2.75 * O * y + 11 * y * y + -15.5 * O + 8 * y + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, h, _, I) {
              var y = (l /= I) * l,
                O = y * l;
              return h + _ * (-1 * O * y + 3 * y * y + -3 * O + 2 * y);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, h, _, I) {
              var y = (l /= I) * l,
                O = y * l;
              return (
                h +
                _ * (0.3 * O * y + -1.6 * y * y + 2.2 * O + -1.8 * y + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, h, _, I) {
              var y = (l /= I) * l,
                O = y * l;
              return h + _ * (2 * O * y + -5 * y * y + 2 * O + 2 * y);
            },
          ],
          linear: [
            "linear",
            function (l, h, _, I) {
              return (_ * l) / I + h;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, h, _, I) {
              return _ * (l /= I) * l + h;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, h, _, I) {
              return -_ * (l /= I) * (l - 2) + h;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, h, _, I) {
              return (l /= I / 2) < 1
                ? (_ / 2) * l * l + h
                : (-_ / 2) * (--l * (l - 2) - 1) + h;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, h, _, I) {
              return _ * (l /= I) * l * l + h;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, h, _, I) {
              return _ * ((l = l / I - 1) * l * l + 1) + h;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, h, _, I) {
              return (l /= I / 2) < 1
                ? (_ / 2) * l * l * l + h
                : (_ / 2) * ((l -= 2) * l * l + 2) + h;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, h, _, I) {
              return _ * (l /= I) * l * l * l + h;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, h, _, I) {
              return -_ * ((l = l / I - 1) * l * l * l - 1) + h;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, h, _, I) {
              return (l /= I / 2) < 1
                ? (_ / 2) * l * l * l * l + h
                : (-_ / 2) * ((l -= 2) * l * l * l - 2) + h;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, h, _, I) {
              return _ * (l /= I) * l * l * l * l + h;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, h, _, I) {
              return _ * ((l = l / I - 1) * l * l * l * l + 1) + h;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, h, _, I) {
              return (l /= I / 2) < 1
                ? (_ / 2) * l * l * l * l * l + h
                : (_ / 2) * ((l -= 2) * l * l * l * l + 2) + h;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, h, _, I) {
              return -_ * Math.cos((l / I) * (Math.PI / 2)) + _ + h;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, h, _, I) {
              return _ * Math.sin((l / I) * (Math.PI / 2)) + h;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, h, _, I) {
              return (-_ / 2) * (Math.cos((Math.PI * l) / I) - 1) + h;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, h, _, I) {
              return l === 0 ? h : _ * Math.pow(2, 10 * (l / I - 1)) + h;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, h, _, I) {
              return l === I
                ? h + _
                : _ * (-Math.pow(2, (-10 * l) / I) + 1) + h;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, h, _, I) {
              return l === 0
                ? h
                : l === I
                ? h + _
                : (l /= I / 2) < 1
                ? (_ / 2) * Math.pow(2, 10 * (l - 1)) + h
                : (_ / 2) * (-Math.pow(2, -10 * --l) + 2) + h;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, h, _, I) {
              return -_ * (Math.sqrt(1 - (l /= I) * l) - 1) + h;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, h, _, I) {
              return _ * Math.sqrt(1 - (l = l / I - 1) * l) + h;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, h, _, I) {
              return (l /= I / 2) < 1
                ? (-_ / 2) * (Math.sqrt(1 - l * l) - 1) + h
                : (_ / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + h;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, h, _, I, y) {
              return (
                y === void 0 && (y = 1.70158),
                _ * (l /= I) * l * ((y + 1) * l - y) + h
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, h, _, I, y) {
              return (
                y === void 0 && (y = 1.70158),
                _ * ((l = l / I - 1) * l * ((y + 1) * l + y) + 1) + h
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, h, _, I, y) {
              return (
                y === void 0 && (y = 1.70158),
                (l /= I / 2) < 1
                  ? (_ / 2) * l * l * (((y *= 1.525) + 1) * l - y) + h
                  : (_ / 2) *
                      ((l -= 2) * l * (((y *= 1.525) + 1) * l + y) + 2) +
                    h
              );
            },
          ],
        },
        v = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        b = document,
        m = window,
        A = "bkwld-tram",
        E = /[\-\.0-9]/g,
        w = /[A-Z]/,
        S = "number",
        C = /^(rgb|#)/,
        R = /(em|cm|mm|in|pt|pc|px)$/,
        x = /(em|cm|mm|in|pt|pc|px|%)$/,
        G = /(deg|rad|turn)$/,
        B = "unitless",
        X = /(all|none) 0s ease 0s/,
        W = /^(width|height)$/,
        Q = " ",
        P = b.createElement("a"),
        T = ["Webkit", "Moz", "O", "ms"],
        N = ["-webkit-", "-moz-", "-o-", "-ms-"],
        U = function (l) {
          if (l in P.style) return { dom: l, css: l };
          var h,
            _,
            I = "",
            y = l.split("-");
          for (h = 0; h < y.length; h++)
            I += y[h].charAt(0).toUpperCase() + y[h].slice(1);
          for (h = 0; h < T.length; h++)
            if (((_ = T[h] + I), _ in P.style))
              return { dom: _, css: N[h] + l };
        },
        D = (t.support = {
          bind: Function.prototype.bind,
          transform: U("transform"),
          transition: U("transition"),
          backface: U("backface-visibility"),
          timing: U("transition-timing-function"),
        });
      if (D.transition) {
        var Z = D.timing.dom;
        if (((P.style[Z] = d["ease-in-back"][0]), !P.style[Z]))
          for (var Y in v) d[Y][0] = v[Y];
      }
      var L = (t.frame = (function () {
          var l =
            m.requestAnimationFrame ||
            m.webkitRequestAnimationFrame ||
            m.mozRequestAnimationFrame ||
            m.oRequestAnimationFrame ||
            m.msRequestAnimationFrame;
          return l && D.bind
            ? l.bind(m)
            : function (h) {
                m.setTimeout(h, 16);
              };
        })()),
        V = (t.now = (function () {
          var l = m.performance,
            h = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return h && D.bind
            ? h.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        H = p(function (l) {
          function h(j, ne) {
            var de = g(("" + j).split(Q)),
              oe = de[0];
            ne = ne || {};
            var Oe = fr[oe];
            if (!Oe) return f("Unsupported property: " + oe);
            if (!ne.weak || !this.props[oe]) {
              var Me = Oe[0],
                xe = this.props[oe];
              return (
                xe || (xe = this.props[oe] = new Me.Bare()),
                xe.init(this.$el, de, Oe, ne),
                xe
              );
            }
          }
          function _(j, ne, de) {
            if (j) {
              var oe = typeof j;
              if (
                (ne ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                oe == "number" && ne)
              )
                return (
                  (this.timer = new le({
                    duration: j,
                    context: this,
                    complete: O,
                  })),
                  void (this.active = !0)
                );
              if (oe == "string" && ne) {
                switch (j) {
                  case "hide":
                    M.call(this);
                    break;
                  case "stop":
                    k.call(this);
                    break;
                  case "redraw":
                    J.call(this);
                    break;
                  default:
                    h.call(this, j, de && de[1]);
                }
                return O.call(this);
              }
              if (oe == "function") return void j.call(this, this);
              if (oe == "object") {
                var Oe = 0;
                je.call(
                  this,
                  j,
                  function (ve, D_) {
                    ve.span > Oe && (Oe = ve.span), ve.stop(), ve.animate(D_);
                  },
                  function (ve) {
                    "wait" in ve && (Oe = u(ve.wait, 0));
                  }
                ),
                  he.call(this),
                  Oe > 0 &&
                    ((this.timer = new le({ duration: Oe, context: this })),
                    (this.active = !0),
                    ne && (this.timer.complete = O));
                var Me = this,
                  xe = !1,
                  Qr = {};
                L(function () {
                  je.call(Me, j, function (ve) {
                    ve.active && ((xe = !0), (Qr[ve.name] = ve.nextStyle));
                  }),
                    xe && Me.$el.css(Qr);
                });
              }
            }
          }
          function I(j) {
            (j = u(j, 0)),
              this.active
                ? this.queue.push({ options: j })
                : ((this.timer = new le({
                    duration: j,
                    context: this,
                    complete: O,
                  })),
                  (this.active = !0));
          }
          function y(j) {
            return this.active
              ? (this.queue.push({ options: j, args: arguments }),
                void (this.timer.complete = O))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function O() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var j = this.queue.shift();
              _.call(this, j.options, !0, j.args);
            }
          }
          function k(j) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ne;
            typeof j == "string"
              ? ((ne = {}), (ne[j] = 1))
              : (ne = typeof j == "object" && j != null ? j : this.props),
              je.call(this, ne, Ie),
              he.call(this);
          }
          function $(j) {
            k.call(this, j), je.call(this, j, dr, F_);
          }
          function se(j) {
            typeof j != "string" && (j = "block"), (this.el.style.display = j);
          }
          function M() {
            k.call(this), (this.el.style.display = "none");
          }
          function J() {
            this.el.offsetHeight;
          }
          function te() {
            k.call(this), e.removeData(this.el, A), (this.$el = this.el = null);
          }
          function he() {
            var j,
              ne,
              de = [];
            this.upstream && de.push(this.upstream);
            for (j in this.props)
              (ne = this.props[j]), ne.active && de.push(ne.string);
            (de = de.join(",")),
              this.style !== de &&
                ((this.style = de), (this.el.style[D.transition.dom] = de));
          }
          function je(j, ne, de) {
            var oe,
              Oe,
              Me,
              xe,
              Qr = ne !== Ie,
              ve = {};
            for (oe in j)
              (Me = j[oe]),
                oe in We
                  ? (ve.transform || (ve.transform = {}),
                    (ve.transform[oe] = Me))
                  : (w.test(oe) && (oe = r(oe)),
                    oe in fr
                      ? (ve[oe] = Me)
                      : (xe || (xe = {}), (xe[oe] = Me)));
            for (oe in ve) {
              if (((Me = ve[oe]), (Oe = this.props[oe]), !Oe)) {
                if (!Qr) continue;
                Oe = h.call(this, oe);
              }
              ne.call(this, Oe, Me);
            }
            de && xe && de.call(this, xe);
          }
          function Ie(j) {
            j.stop();
          }
          function dr(j, ne) {
            j.set(ne);
          }
          function F_(j) {
            this.$el.css(j);
          }
          function Fe(j, ne) {
            l[j] = function () {
              return this.children
                ? M_.call(this, ne, arguments)
                : (this.el && ne.apply(this, arguments), this);
            };
          }
          function M_(j, ne) {
            var de,
              oe = this.children.length;
            for (de = 0; oe > de; de++) j.apply(this.children[de], ne);
            return this;
          }
          (l.init = function (j) {
            if (
              ((this.$el = e(j)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ge.keepInherited && !ge.fallback)
            ) {
              var ne = cr(this.el, "transition");
              ne && !X.test(ne) && (this.upstream = ne);
            }
            D.backface &&
              ge.hideBackface &&
              lt(this.el, D.backface.css, "hidden");
          }),
            Fe("add", h),
            Fe("start", _),
            Fe("wait", I),
            Fe("then", y),
            Fe("next", O),
            Fe("stop", k),
            Fe("set", $),
            Fe("show", se),
            Fe("hide", M),
            Fe("redraw", J),
            Fe("destroy", te);
        }),
        F = p(H, function (l) {
          function h(_, I) {
            var y = e.data(_, A) || e.data(_, A, new H.Bare());
            return y.el || y.init(_), I ? y.start(I) : y;
          }
          l.init = function (_, I) {
            var y = e(_);
            if (!y.length) return this;
            if (y.length === 1) return h(y[0], I);
            var O = [];
            return (
              y.each(function (k, $) {
                O.push(h($, I));
              }),
              (this.children = O),
              this
            );
          };
        }),
        q = p(function (l) {
          function h() {
            var O = this.get();
            this.update("auto");
            var k = this.get();
            return this.update(O), k;
          }
          function _(O, k, $) {
            return k !== void 0 && ($ = k), O in d ? O : $;
          }
          function I(O) {
            var k = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(O);
            return (k ? i(k[1], k[2], k[3]) : O).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var y = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (O, k, $, se) {
            (this.$el = O), (this.el = O[0]);
            var M = k[0];
            $[2] && (M = $[2]),
              lr[M] && (M = lr[M]),
              (this.name = M),
              (this.type = $[1]),
              (this.duration = u(k[1], this.duration, y.duration)),
              (this.ease = _(k[2], this.ease, y.ease)),
              (this.delay = u(k[3], this.delay, y.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = W.test(this.name)),
              (this.unit = se.unit || this.unit || ge.defaultUnit),
              (this.angle = se.angle || this.angle || ge.defaultAngle),
              ge.fallback || se.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    Q +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? Q + d[this.ease][0] : "") +
                    (this.delay ? Q + this.delay + "ms" : "")));
          }),
            (l.set = function (O) {
              (O = this.convert(O, this.type)), this.update(O), this.redraw();
            }),
            (l.transition = function (O) {
              (this.active = !0),
                (O = this.convert(O, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  O == "auto" && (O = h.call(this))),
                (this.nextStyle = O);
            }),
            (l.fallback = function (O) {
              var k =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (O = this.convert(O, this.type)),
                this.auto &&
                  (k == "auto" && (k = this.convert(this.get(), this.type)),
                  O == "auto" && (O = h.call(this))),
                (this.tween = new z({
                  from: k,
                  to: O,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return cr(this.el, this.name);
            }),
            (l.update = function (O) {
              lt(this.el, this.name, O);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                lt(this.el, this.name, this.get()));
              var O = this.tween;
              O && O.context && O.destroy();
            }),
            (l.convert = function (O, k) {
              if (O == "auto" && this.auto) return O;
              var $,
                se = typeof O == "number",
                M = typeof O == "string";
              switch (k) {
                case S:
                  if (se) return O;
                  if (M && O.replace(E, "") === "") return +O;
                  $ = "number(unitless)";
                  break;
                case C:
                  if (M) {
                    if (O === "" && this.original) return this.original;
                    if (k.test(O))
                      return O.charAt(0) == "#" && O.length == 7 ? O : I(O);
                  }
                  $ = "hex or rgb string";
                  break;
                case R:
                  if (se) return O + this.unit;
                  if (M && k.test(O)) return O;
                  $ = "number(px) or string(unit)";
                  break;
                case x:
                  if (se) return O + this.unit;
                  if (M && k.test(O)) return O;
                  $ = "number(px) or string(unit or %)";
                  break;
                case G:
                  if (se) return O + this.angle;
                  if (M && k.test(O)) return O;
                  $ = "number(deg) or string(angle)";
                  break;
                case B:
                  if (se || (M && x.test(O))) return O;
                  $ = "number(unitless) or string(unit or %)";
              }
              return a($, O), O;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        K = p(q, function (l, h) {
          l.init = function () {
            h.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), C));
          };
        }),
        re = p(q, function (l, h) {
          (l.init = function () {
            h.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (_) {
              this.$el[this.name](_);
            });
        }),
        ee = p(q, function (l, h) {
          function _(I, y) {
            var O, k, $, se, M;
            for (O in I)
              (se = We[O]),
                ($ = se[0]),
                (k = se[1] || O),
                (M = this.convert(I[O], $)),
                y.call(this, k, M, $);
          }
          (l.init = function () {
            h.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                We.perspective &&
                  ge.perspective &&
                  ((this.current.perspective = ge.perspective),
                  lt(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (I) {
              _.call(this, I, function (y, O) {
                this.current[y] = O;
              }),
                lt(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (I) {
              var y = this.values(I);
              this.tween = new Rt({
                current: this.current,
                values: y,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var O,
                k = {};
              for (O in this.current) k[O] = O in y ? y[O] : this.current[O];
              (this.active = !0), (this.nextStyle = this.style(k));
            }),
            (l.fallback = function (I) {
              var y = this.values(I);
              this.tween = new Rt({
                current: this.current,
                values: y,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              lt(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (I) {
              var y,
                O = "";
              for (y in I) O += y + "(" + I[y] + ") ";
              return O;
            }),
            (l.values = function (I) {
              var y,
                O = {};
              return (
                _.call(this, I, function (k, $, se) {
                  (O[k] = $),
                    this.current[k] === void 0 &&
                      ((y = 0),
                      ~k.indexOf("scale") && (y = 1),
                      (this.current[k] = this.convert(y, se)));
                }),
                O
              );
            });
        }),
        z = p(function (l) {
          function h(M) {
            $.push(M) === 1 && L(_);
          }
          function _() {
            var M,
              J,
              te,
              he = $.length;
            if (he)
              for (L(_), J = V(), M = he; M--; )
                (te = $[M]), te && te.render(J);
          }
          function I(M) {
            var J,
              te = e.inArray(M, $);
            te >= 0 &&
              ((J = $.slice(te + 1)),
              ($.length = te),
              J.length && ($ = $.concat(J)));
          }
          function y(M) {
            return Math.round(M * se) / se;
          }
          function O(M, J, te) {
            return i(
              M[0] + te * (J[0] - M[0]),
              M[1] + te * (J[1] - M[1]),
              M[2] + te * (J[2] - M[2])
            );
          }
          var k = { ease: d.ease[1], from: 0, to: 1 };
          (l.init = function (M) {
            (this.duration = M.duration || 0), (this.delay = M.delay || 0);
            var J = M.ease || k.ease;
            d[J] && (J = d[J][1]),
              typeof J != "function" && (J = k.ease),
              (this.ease = J),
              (this.update = M.update || o),
              (this.complete = M.complete || o),
              (this.context = M.context || this),
              (this.name = M.name);
            var te = M.from,
              he = M.to;
            te === void 0 && (te = k.from),
              he === void 0 && (he = k.to),
              (this.unit = M.unit || ""),
              typeof te == "number" && typeof he == "number"
                ? ((this.begin = te), (this.change = he - te))
                : this.format(he, te),
              (this.value = this.begin + this.unit),
              (this.start = V()),
              M.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = V()), (this.active = !0), h(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), I(this));
            }),
            (l.render = function (M) {
              var J,
                te = M - this.start;
              if (this.delay) {
                if (te <= this.delay) return;
                te -= this.delay;
              }
              if (te < this.duration) {
                var he = this.ease(te, 0, 1, this.duration);
                return (
                  (J = this.startRGB
                    ? O(this.startRGB, this.endRGB, he)
                    : y(this.begin + he * this.change)),
                  (this.value = J + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (J = this.endHex || this.begin + this.change),
                (this.value = J + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (M, J) {
              if (((J += ""), (M += ""), M.charAt(0) == "#"))
                return (
                  (this.startRGB = n(J)),
                  (this.endRGB = n(M)),
                  (this.endHex = M),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var te = J.replace(E, ""),
                  he = M.replace(E, "");
                te !== he && s("tween", J, M), (this.unit = te);
              }
              (J = parseFloat(J)),
                (M = parseFloat(M)),
                (this.begin = this.value = J),
                (this.change = M - J);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var $ = [],
            se = 1e3;
        }),
        le = p(z, function (l) {
          (l.init = function (h) {
            (this.duration = h.duration || 0),
              (this.complete = h.complete || o),
              (this.context = h.context),
              this.play();
          }),
            (l.render = function (h) {
              var _ = h - this.start;
              _ < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Rt = p(z, function (l, h) {
          (l.init = function (_) {
            (this.context = _.context),
              (this.update = _.update),
              (this.tweens = []),
              (this.current = _.current);
            var I, y;
            for (I in _.values)
              (y = _.values[I]),
                this.current[I] !== y &&
                  this.tweens.push(
                    new z({
                      name: I,
                      from: this.current[I],
                      to: y,
                      duration: _.duration,
                      delay: _.delay,
                      ease: _.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (_) {
              var I,
                y,
                O = this.tweens.length,
                k = !1;
              for (I = O; I--; )
                (y = this.tweens[I]),
                  y.context &&
                    (y.render(_), (this.current[y.name] = y.value), (k = !0));
              return k
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((h.destroy.call(this), this.tweens)) {
                var _,
                  I = this.tweens.length;
                for (_ = I; _--; ) this.tweens[_].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ge = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !D.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!D.transition) return (ge.fallback = !0);
        ge.agentTests.push("(" + l + ")");
        var h = new RegExp(ge.agentTests.join("|"), "i");
        ge.fallback = h.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new z(l);
        }),
        (t.delay = function (l, h, _) {
          return new le({ complete: h, duration: l, context: _ });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var lt = e.style,
        cr = e.css,
        lr = { transform: D.transform && D.transform.css },
        fr = {
          color: [K, C],
          background: [K, C, "background-color"],
          "outline-color": [K, C],
          "border-color": [K, C],
          "border-top-color": [K, C],
          "border-right-color": [K, C],
          "border-bottom-color": [K, C],
          "border-left-color": [K, C],
          "border-width": [q, R],
          "border-top-width": [q, R],
          "border-right-width": [q, R],
          "border-bottom-width": [q, R],
          "border-left-width": [q, R],
          "border-spacing": [q, R],
          "letter-spacing": [q, R],
          margin: [q, R],
          "margin-top": [q, R],
          "margin-right": [q, R],
          "margin-bottom": [q, R],
          "margin-left": [q, R],
          padding: [q, R],
          "padding-top": [q, R],
          "padding-right": [q, R],
          "padding-bottom": [q, R],
          "padding-left": [q, R],
          "outline-width": [q, R],
          opacity: [q, S],
          top: [q, x],
          right: [q, x],
          bottom: [q, x],
          left: [q, x],
          "font-size": [q, x],
          "text-indent": [q, x],
          "word-spacing": [q, x],
          width: [q, x],
          "min-width": [q, x],
          "max-width": [q, x],
          height: [q, x],
          "min-height": [q, x],
          "max-height": [q, x],
          "line-height": [q, B],
          "scroll-top": [re, S, "scrollTop"],
          "scroll-left": [re, S, "scrollLeft"],
        },
        We = {};
      D.transform &&
        ((fr.transform = [ee]),
        (We = {
          x: [x, "translateX"],
          y: [x, "translateY"],
          rotate: [G],
          rotateX: [G],
          rotateY: [G],
          scale: [S],
          scaleX: [S],
          scaleY: [S],
          skew: [G],
          skewX: [G],
          skewY: [G],
        })),
        D.transform &&
          D.backface &&
          ((We.z = [x, "translateZ"]),
          (We.rotateZ = [G]),
          (We.scaleZ = [S]),
          (We.perspective = [R]));
      var Ai = /ms/,
        Yr = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var xs = c((wB, ws) => {
    "use strict";
    var k_ = window.$,
      H_ = Si() && k_.tram;
    ws.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        f = n.hasOwnProperty,
        g = r.forEach,
        p = r.map,
        d = r.reduce,
        v = r.reduceRight,
        b = r.filter,
        m = r.every,
        A = r.some,
        E = r.indexOf,
        w = r.lastIndexOf,
        S = Array.isArray,
        C = Object.keys,
        R = i.bind,
        x =
          (e.each =
          e.forEach =
            function (T, N, U) {
              if (T == null) return T;
              if (g && T.forEach === g) T.forEach(N, U);
              else if (T.length === +T.length) {
                for (var D = 0, Z = T.length; D < Z; D++)
                  if (N.call(U, T[D], D, T) === t) return;
              } else
                for (var Y = e.keys(T), D = 0, Z = Y.length; D < Z; D++)
                  if (N.call(U, T[Y[D]], Y[D], T) === t) return;
              return T;
            });
      (e.map = e.collect =
        function (T, N, U) {
          var D = [];
          return T == null
            ? D
            : p && T.map === p
            ? T.map(N, U)
            : (x(T, function (Z, Y, L) {
                D.push(N.call(U, Z, Y, L));
              }),
              D);
        }),
        (e.find = e.detect =
          function (T, N, U) {
            var D;
            return (
              G(T, function (Z, Y, L) {
                if (N.call(U, Z, Y, L)) return (D = Z), !0;
              }),
              D
            );
          }),
        (e.filter = e.select =
          function (T, N, U) {
            var D = [];
            return T == null
              ? D
              : b && T.filter === b
              ? T.filter(N, U)
              : (x(T, function (Z, Y, L) {
                  N.call(U, Z, Y, L) && D.push(Z);
                }),
                D);
          });
      var G =
        (e.some =
        e.any =
          function (T, N, U) {
            N || (N = e.identity);
            var D = !1;
            return T == null
              ? D
              : A && T.some === A
              ? T.some(N, U)
              : (x(T, function (Z, Y, L) {
                  if (D || (D = N.call(U, Z, Y, L))) return t;
                }),
                !!D);
          });
      (e.contains = e.include =
        function (T, N) {
          return T == null
            ? !1
            : E && T.indexOf === E
            ? T.indexOf(N) != -1
            : G(T, function (U) {
                return U === N;
              });
        }),
        (e.delay = function (T, N) {
          var U = a.call(arguments, 2);
          return setTimeout(function () {
            return T.apply(null, U);
          }, N);
        }),
        (e.defer = function (T) {
          return e.delay.apply(e, [T, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (T) {
          var N, U, D;
          return function () {
            N ||
              ((N = !0),
              (U = arguments),
              (D = this),
              H_.frame(function () {
                (N = !1), T.apply(D, U);
              }));
          };
        }),
        (e.debounce = function (T, N, U) {
          var D,
            Z,
            Y,
            L,
            V,
            H = function () {
              var F = e.now() - L;
              F < N
                ? (D = setTimeout(H, N - F))
                : ((D = null), U || ((V = T.apply(Y, Z)), (Y = Z = null)));
            };
          return function () {
            (Y = this), (Z = arguments), (L = e.now());
            var F = U && !D;
            return (
              D || (D = setTimeout(H, N)),
              F && ((V = T.apply(Y, Z)), (Y = Z = null)),
              V
            );
          };
        }),
        (e.defaults = function (T) {
          if (!e.isObject(T)) return T;
          for (var N = 1, U = arguments.length; N < U; N++) {
            var D = arguments[N];
            for (var Z in D) T[Z] === void 0 && (T[Z] = D[Z]);
          }
          return T;
        }),
        (e.keys = function (T) {
          if (!e.isObject(T)) return [];
          if (C) return C(T);
          var N = [];
          for (var U in T) e.has(T, U) && N.push(U);
          return N;
        }),
        (e.has = function (T, N) {
          return f.call(T, N);
        }),
        (e.isObject = function (T) {
          return T === Object(T);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var B = /(.)^/,
        X = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        W = /\\|'|\r|\n|\u2028|\u2029/g,
        Q = function (T) {
          return "\\" + X[T];
        },
        P = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (T, N, U) {
          !N && U && (N = U), (N = e.defaults({}, N, e.templateSettings));
          var D = RegExp(
              [
                (N.escape || B).source,
                (N.interpolate || B).source,
                (N.evaluate || B).source,
              ].join("|") + "|$",
              "g"
            ),
            Z = 0,
            Y = "__p+='";
          T.replace(D, function (F, q, K, re, ee) {
            return (
              (Y += T.slice(Z, ee).replace(W, Q)),
              (Z = ee + F.length),
              q
                ? (Y +=
                    `'+
((__t=(` +
                    q +
                    `))==null?'':_.escape(__t))+
'`)
                : K
                ? (Y +=
                    `'+
((__t=(` +
                    K +
                    `))==null?'':__t)+
'`)
                : re &&
                  (Y +=
                    `';
` +
                    re +
                    `
__p+='`),
              F
            );
          }),
            (Y += `';
`);
          var L = N.variable;
          if (L) {
            if (!P.test(L))
              throw new Error("variable is not a bare identifier: " + L);
          } else
            (Y =
              `with(obj||{}){
` +
              Y +
              `}
`),
              (L = "obj");
          Y =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            Y +
            `return __p;
`;
          var V;
          try {
            V = new Function(N.variable || "obj", "_", Y);
          } catch (F) {
            throw ((F.source = Y), F);
          }
          var H = function (F) {
            return V.call(this, F, e);
          };
          return (
            (H.source =
              "function(" +
              L +
              `){
` +
              Y +
              "}"),
            H
          );
        }),
        e
      );
    })();
  });
  var $e = c((xB, Ms) => {
    "use strict";
    var ae = {},
      Nt = {},
      Lt = [],
      xi = window.Webflow || [],
      ft = window.jQuery,
      Ge = ft(window),
      W_ = ft(document),
      Ke = ft.isFunction,
      De = (ae._ = xs()),
      Rs = (ae.tram = Si() && ft.tram),
      en = !1,
      Ci = !1;
    Rs.config.hideBackface = !1;
    Rs.config.keepInherited = !0;
    ae.define = function (e, t, r) {
      Nt[e] && Ls(Nt[e]);
      var n = (Nt[e] = t(ft, De, r) || {});
      return Ns(n), n;
    };
    ae.require = function (e) {
      return Nt[e];
    };
    function Ns(e) {
      ae.env() &&
        (Ke(e.design) && Ge.on("__wf_design", e.design),
        Ke(e.preview) && Ge.on("__wf_preview", e.preview)),
        Ke(e.destroy) && Ge.on("__wf_destroy", e.destroy),
        e.ready && Ke(e.ready) && j_(e);
    }
    function j_(e) {
      if (en) {
        e.ready();
        return;
      }
      De.contains(Lt, e.ready) || Lt.push(e.ready);
    }
    function Ls(e) {
      Ke(e.design) && Ge.off("__wf_design", e.design),
        Ke(e.preview) && Ge.off("__wf_preview", e.preview),
        Ke(e.destroy) && Ge.off("__wf_destroy", e.destroy),
        e.ready && Ke(e.ready) && z_(e);
    }
    function z_(e) {
      Lt = De.filter(Lt, function (t) {
        return t !== e.ready;
      });
    }
    ae.push = function (e) {
      if (en) {
        Ke(e) && e();
        return;
      }
      xi.push(e);
    };
    ae.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Jr = navigator.userAgent.toLowerCase(),
      Ps = (ae.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      K_ = (ae.env.chrome =
        /chrome/.test(Jr) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Jr.match(/chrome\/(\d+)\./)[1], 10)),
      $_ = (ae.env.ios = /(ipod|iphone|ipad)/.test(Jr));
    ae.env.safari = /safari/.test(Jr) && !K_ && !$_;
    var wi;
    Ps &&
      W_.on("touchstart mousedown", function (e) {
        wi = e.target;
      });
    ae.validClick = Ps
      ? function (e) {
          return e === wi || ft.contains(e, wi);
        }
      : function () {
          return !0;
        };
    var qs = "resize.webflow orientationchange.webflow load.webflow",
      Y_ = "scroll.webflow " + qs;
    ae.resize = Ri(Ge, qs);
    ae.scroll = Ri(Ge, Y_);
    ae.redraw = Ri();
    function Ri(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = De.throttle(function (i) {
          De.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (De.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = De.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ae.location = function (e) {
      window.location = e;
    };
    ae.env() && (ae.location = function () {});
    ae.ready = function () {
      (en = !0), Ci ? Q_() : De.each(Lt, Cs), De.each(xi, Cs), ae.resize.up();
    };
    function Cs(e) {
      Ke(e) && e();
    }
    function Q_() {
      (Ci = !1), De.each(Nt, Ns);
    }
    var mt;
    ae.load = function (e) {
      mt.then(e);
    };
    function Fs() {
      mt && (mt.reject(), Ge.off("load", mt.resolve)),
        (mt = new ft.Deferred()),
        Ge.on("load", mt.resolve);
    }
    ae.destroy = function (e) {
      (e = e || {}),
        (Ci = !0),
        Ge.triggerHandler("__wf_destroy"),
        e.domready != null && (en = e.domready),
        De.each(Nt, Ls),
        ae.resize.off(),
        ae.scroll.off(),
        ae.redraw.off(),
        (Lt = []),
        (xi = []),
        mt.state() === "pending" && Fs();
    };
    ft(ae.ready);
    Fs();
    Ms.exports = window.Webflow = ae;
  });
  var Vs = c((CB, Gs) => {
    "use strict";
    var Ds = $e();
    Ds.define(
      "brand",
      (Gs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var v = n.attr("data-wf-status"),
            b = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(b) && a.hostname !== b && (v = !0),
            v &&
              !s &&
              ((f = f || p()),
              d(),
              setTimeout(d, 500),
              e(r).off(u, g).on(u, g));
        };
        function g() {
          var v =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", v ? "display: none !important;" : "");
        }
        function p() {
          var v = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            b = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            m = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return v.append(b, m), v[0];
        }
        function d() {
          var v = i.children(o),
            b = v.length && v.get(0) === f,
            m = Ds.env("editor");
          if (b) {
            m && v.remove();
            return;
          }
          v.length && v.remove(), m || i.append(f);
        }
        return t;
      })
    );
  });
  var Bs = c((RB, Us) => {
    "use strict";
    var Ni = $e();
    Ni.define(
      "edit",
      (Us.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Ni.env("test") || Ni.env("frame")) && !r.fixture && !Z_())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          f = r.load || d,
          g = !1;
        try {
          g =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        g
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, p).triggerHandler(s);
        function p() {
          u || (/\?edit/.test(a.hash) && f());
        }
        function d() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, p),
            w(function (C) {
              e.ajax({
                url: E("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: v(C),
              });
            });
        }
        function v(C) {
          return function (R) {
            if (!R) {
              console.error("Could not load editor data");
              return;
            }
            (R.thirdPartyCookiesSupported = C),
              b(A(R.scriptPath), function () {
                window.WebflowEditor(R);
              });
          };
        }
        function b(C, R) {
          e.ajax({ type: "GET", url: C, dataType: "script", cache: !0 }).then(
            R,
            m
          );
        }
        function m(C, R, x) {
          throw (console.error("Could not load editor script: " + R), x);
        }
        function A(C) {
          return C.indexOf("//") >= 0
            ? C
            : E("https://editor-api.webflow.com" + C);
        }
        function E(C) {
          return C.replace(/([^:])\/\//g, "$1/");
        }
        function w(C) {
          var R = window.document.createElement("iframe");
          (R.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (R.style.display = "none"),
            (R.sandbox = "allow-scripts allow-same-origin");
          var x = function (G) {
            G.data === "WF_third_party_cookies_unsupported"
              ? (S(R, x), C(!1))
              : G.data === "WF_third_party_cookies_supported" &&
                (S(R, x), C(!0));
          };
          (R.onerror = function () {
            S(R, x), C(!1);
          }),
            window.addEventListener("message", x, !1),
            window.document.body.appendChild(R);
        }
        function S(C, R) {
          window.removeEventListener("message", R, !1), C.remove();
        }
        return n;
      })
    );
    function Z_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var ks = c((NB, Xs) => {
    "use strict";
    var J_ = $e();
    J_.define(
      "focus-visible",
      (Xs.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(S) {
            return !!(
              S &&
              S !== document &&
              S.nodeName !== "HTML" &&
              S.nodeName !== "BODY" &&
              "classList" in S &&
              "contains" in S.classList
            );
          }
          function u(S) {
            var C = S.type,
              R = S.tagName;
            return !!(
              (R === "INPUT" && a[C] && !S.readOnly) ||
              (R === "TEXTAREA" && !S.readOnly) ||
              S.isContentEditable
            );
          }
          function f(S) {
            S.getAttribute("data-wf-focus-visible") ||
              S.setAttribute("data-wf-focus-visible", "true");
          }
          function g(S) {
            S.getAttribute("data-wf-focus-visible") &&
              S.removeAttribute("data-wf-focus-visible");
          }
          function p(S) {
            S.metaKey ||
              S.altKey ||
              S.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function d() {
            n = !1;
          }
          function v(S) {
            s(S.target) && (n || u(S.target)) && f(S.target);
          }
          function b(S) {
            s(S.target) &&
              S.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              g(S.target));
          }
          function m() {
            document.visibilityState === "hidden" && (i && (n = !0), A());
          }
          function A() {
            document.addEventListener("mousemove", w),
              document.addEventListener("mousedown", w),
              document.addEventListener("mouseup", w),
              document.addEventListener("pointermove", w),
              document.addEventListener("pointerdown", w),
              document.addEventListener("pointerup", w),
              document.addEventListener("touchmove", w),
              document.addEventListener("touchstart", w),
              document.addEventListener("touchend", w);
          }
          function E() {
            document.removeEventListener("mousemove", w),
              document.removeEventListener("mousedown", w),
              document.removeEventListener("mouseup", w),
              document.removeEventListener("pointermove", w),
              document.removeEventListener("pointerdown", w),
              document.removeEventListener("pointerup", w),
              document.removeEventListener("touchmove", w),
              document.removeEventListener("touchstart", w),
              document.removeEventListener("touchend", w);
          }
          function w(S) {
            (S.target.nodeName && S.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), E());
          }
          document.addEventListener("keydown", p, !0),
            document.addEventListener("mousedown", d, !0),
            document.addEventListener("pointerdown", d, !0),
            document.addEventListener("touchstart", d, !0),
            document.addEventListener("visibilitychange", m, !0),
            A(),
            r.addEventListener("focus", v, !0),
            r.addEventListener("blur", b, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var js = c((LB, Ws) => {
    "use strict";
    var Hs = $e();
    Hs.define(
      "focus",
      (Ws.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Hs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var $s = c((PB, Ks) => {
    "use strict";
    var Li = window.jQuery,
      Ye = {},
      tn = [],
      zs = ".w-ix",
      rn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Li(t).triggerHandler(Ye.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Li(t).triggerHandler(Ye.types.OUTRO));
        },
      };
    Ye.triggers = {};
    Ye.types = { INTRO: "w-ix-intro" + zs, OUTRO: "w-ix-outro" + zs };
    Ye.init = function () {
      for (var e = tn.length, t = 0; t < e; t++) {
        var r = tn[t];
        r[0](0, r[1]);
      }
      (tn = []), Li.extend(Ye.triggers, rn);
    };
    Ye.async = function () {
      for (var e in rn) {
        var t = rn[e];
        rn.hasOwnProperty(e) &&
          (Ye.triggers[e] = function (r, n) {
            tn.push([t, n]);
          });
      }
    };
    Ye.async();
    Ks.exports = Ye;
  });
  var Js = c((qB, Zs) => {
    "use strict";
    var Pi = $s();
    function Ys(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var eb = window.jQuery,
      nn = {},
      Qs = ".w-ix",
      tb = {
        reset: function (e, t) {
          Pi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Pi.triggers.intro(e, t), Ys(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Pi.triggers.outro(e, t), Ys(t, "COMPONENT_INACTIVE");
        },
      };
    nn.triggers = {};
    nn.types = { INTRO: "w-ix-intro" + Qs, OUTRO: "w-ix-outro" + Qs };
    eb.extend(nn.triggers, tb);
    Zs.exports = nn;
  });
  var eu = c((FB, nt) => {
    function qi(e) {
      return (
        (nt.exports = qi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (nt.exports.__esModule = !0),
        (nt.exports.default = nt.exports),
        qi(e)
      );
    }
    (nt.exports = qi),
      (nt.exports.__esModule = !0),
      (nt.exports.default = nt.exports);
  });
  var on = c((MB, pr) => {
    var rb = eu().default;
    function tu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (tu = function (i) {
        return i ? r : t;
      })(e);
    }
    function nb(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (rb(e) != "object" && typeof e != "function"))
        return { default: e };
      var r = tu(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (pr.exports = nb),
      (pr.exports.__esModule = !0),
      (pr.exports.default = pr.exports);
  });
  var ru = c((DB, gr) => {
    function ib(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (gr.exports = ib),
      (gr.exports.__esModule = !0),
      (gr.exports.default = gr.exports);
  });
  var fe = c((GB, nu) => {
    var an = function (e) {
      return e && e.Math == Math && e;
    };
    nu.exports =
      an(typeof globalThis == "object" && globalThis) ||
      an(typeof window == "object" && window) ||
      an(typeof self == "object" && self) ||
      an(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Pt = c((VB, iu) => {
    iu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var _t = c((UB, ou) => {
    var ob = Pt();
    ou.exports = !ob(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var sn = c((BB, au) => {
    var hr = Function.prototype.call;
    au.exports = hr.bind
      ? hr.bind(hr)
      : function () {
          return hr.apply(hr, arguments);
        };
  });
  var lu = c((cu) => {
    "use strict";
    var su = {}.propertyIsEnumerable,
      uu = Object.getOwnPropertyDescriptor,
      ab = uu && !su.call({ 1: 2 }, 1);
    cu.f = ab
      ? function (t) {
          var r = uu(this, t);
          return !!r && r.enumerable;
        }
      : su;
  });
  var Fi = c((kB, fu) => {
    fu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ve = c((HB, pu) => {
    var du = Function.prototype,
      Mi = du.bind,
      Di = du.call,
      sb = Mi && Mi.bind(Di);
    pu.exports = Mi
      ? function (e) {
          return e && sb(Di, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Di.apply(e, arguments);
            }
          );
        };
  });
  var vu = c((WB, hu) => {
    var gu = Ve(),
      ub = gu({}.toString),
      cb = gu("".slice);
    hu.exports = function (e) {
      return cb(ub(e), 8, -1);
    };
  });
  var yu = c((jB, Eu) => {
    var lb = fe(),
      fb = Ve(),
      db = Pt(),
      pb = vu(),
      Gi = lb.Object,
      gb = fb("".split);
    Eu.exports = db(function () {
      return !Gi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return pb(e) == "String" ? gb(e, "") : Gi(e);
        }
      : Gi;
  });
  var Vi = c((zB, mu) => {
    var hb = fe(),
      vb = hb.TypeError;
    mu.exports = function (e) {
      if (e == null) throw vb("Can't call method on " + e);
      return e;
    };
  });
  var vr = c((KB, _u) => {
    var Eb = yu(),
      yb = Vi();
    _u.exports = function (e) {
      return Eb(yb(e));
    };
  });
  var Qe = c(($B, bu) => {
    bu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var qt = c((YB, Tu) => {
    var mb = Qe();
    Tu.exports = function (e) {
      return typeof e == "object" ? e !== null : mb(e);
    };
  });
  var Er = c((QB, Iu) => {
    var Ui = fe(),
      _b = Qe(),
      bb = function (e) {
        return _b(e) ? e : void 0;
      };
    Iu.exports = function (e, t) {
      return arguments.length < 2 ? bb(Ui[e]) : Ui[e] && Ui[e][t];
    };
  });
  var Au = c((ZB, Ou) => {
    var Tb = Ve();
    Ou.exports = Tb({}.isPrototypeOf);
  });
  var wu = c((JB, Su) => {
    var Ib = Er();
    Su.exports = Ib("navigator", "userAgent") || "";
  });
  var qu = c((e5, Pu) => {
    var Lu = fe(),
      Bi = wu(),
      xu = Lu.process,
      Cu = Lu.Deno,
      Ru = (xu && xu.versions) || (Cu && Cu.version),
      Nu = Ru && Ru.v8,
      Ue,
      un;
    Nu &&
      ((Ue = Nu.split(".")),
      (un = Ue[0] > 0 && Ue[0] < 4 ? 1 : +(Ue[0] + Ue[1])));
    !un &&
      Bi &&
      ((Ue = Bi.match(/Edge\/(\d+)/)),
      (!Ue || Ue[1] >= 74) &&
        ((Ue = Bi.match(/Chrome\/(\d+)/)), Ue && (un = +Ue[1])));
    Pu.exports = un;
  });
  var Xi = c((t5, Mu) => {
    var Fu = qu(),
      Ob = Pt();
    Mu.exports =
      !!Object.getOwnPropertySymbols &&
      !Ob(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Fu && Fu < 41)
        );
      });
  });
  var ki = c((r5, Du) => {
    var Ab = Xi();
    Du.exports = Ab && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Hi = c((n5, Gu) => {
    var Sb = fe(),
      wb = Er(),
      xb = Qe(),
      Cb = Au(),
      Rb = ki(),
      Nb = Sb.Object;
    Gu.exports = Rb
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = wb("Symbol");
          return xb(t) && Cb(t.prototype, Nb(e));
        };
  });
  var Uu = c((i5, Vu) => {
    var Lb = fe(),
      Pb = Lb.String;
    Vu.exports = function (e) {
      try {
        return Pb(e);
      } catch {
        return "Object";
      }
    };
  });
  var Xu = c((o5, Bu) => {
    var qb = fe(),
      Fb = Qe(),
      Mb = Uu(),
      Db = qb.TypeError;
    Bu.exports = function (e) {
      if (Fb(e)) return e;
      throw Db(Mb(e) + " is not a function");
    };
  });
  var Hu = c((a5, ku) => {
    var Gb = Xu();
    ku.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : Gb(r);
    };
  });
  var ju = c((s5, Wu) => {
    var Vb = fe(),
      Wi = sn(),
      ji = Qe(),
      zi = qt(),
      Ub = Vb.TypeError;
    Wu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && ji((r = e.toString)) && !zi((n = Wi(r, e)))) ||
        (ji((r = e.valueOf)) && !zi((n = Wi(r, e)))) ||
        (t !== "string" && ji((r = e.toString)) && !zi((n = Wi(r, e))))
      )
        return n;
      throw Ub("Can't convert object to primitive value");
    };
  });
  var Ku = c((u5, zu) => {
    zu.exports = !1;
  });
  var cn = c((c5, Yu) => {
    var $u = fe(),
      Bb = Object.defineProperty;
    Yu.exports = function (e, t) {
      try {
        Bb($u, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        $u[e] = t;
      }
      return t;
    };
  });
  var ln = c((l5, Zu) => {
    var Xb = fe(),
      kb = cn(),
      Qu = "__core-js_shared__",
      Hb = Xb[Qu] || kb(Qu, {});
    Zu.exports = Hb;
  });
  var Ki = c((f5, ec) => {
    var Wb = Ku(),
      Ju = ln();
    (ec.exports = function (e, t) {
      return Ju[e] || (Ju[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: Wb ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var rc = c((d5, tc) => {
    var jb = fe(),
      zb = Vi(),
      Kb = jb.Object;
    tc.exports = function (e) {
      return Kb(zb(e));
    };
  });
  var dt = c((p5, nc) => {
    var $b = Ve(),
      Yb = rc(),
      Qb = $b({}.hasOwnProperty);
    nc.exports =
      Object.hasOwn ||
      function (t, r) {
        return Qb(Yb(t), r);
      };
  });
  var $i = c((g5, ic) => {
    var Zb = Ve(),
      Jb = 0,
      eT = Math.random(),
      tT = Zb((1).toString);
    ic.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + tT(++Jb + eT, 36);
    };
  });
  var Yi = c((h5, cc) => {
    var rT = fe(),
      nT = Ki(),
      oc = dt(),
      iT = $i(),
      ac = Xi(),
      uc = ki(),
      Ft = nT("wks"),
      bt = rT.Symbol,
      sc = bt && bt.for,
      oT = uc ? bt : (bt && bt.withoutSetter) || iT;
    cc.exports = function (e) {
      if (!oc(Ft, e) || !(ac || typeof Ft[e] == "string")) {
        var t = "Symbol." + e;
        ac && oc(bt, e)
          ? (Ft[e] = bt[e])
          : uc && sc
          ? (Ft[e] = sc(t))
          : (Ft[e] = oT(t));
      }
      return Ft[e];
    };
  });
  var pc = c((v5, dc) => {
    var aT = fe(),
      sT = sn(),
      lc = qt(),
      fc = Hi(),
      uT = Hu(),
      cT = ju(),
      lT = Yi(),
      fT = aT.TypeError,
      dT = lT("toPrimitive");
    dc.exports = function (e, t) {
      if (!lc(e) || fc(e)) return e;
      var r = uT(e, dT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = sT(r, e, t)), !lc(n) || fc(n))
        )
          return n;
        throw fT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), cT(e, t);
    };
  });
  var Qi = c((E5, gc) => {
    var pT = pc(),
      gT = Hi();
    gc.exports = function (e) {
      var t = pT(e, "string");
      return gT(t) ? t : t + "";
    };
  });
  var Ji = c((y5, vc) => {
    var hT = fe(),
      hc = qt(),
      Zi = hT.document,
      vT = hc(Zi) && hc(Zi.createElement);
    vc.exports = function (e) {
      return vT ? Zi.createElement(e) : {};
    };
  });
  var eo = c((m5, Ec) => {
    var ET = _t(),
      yT = Pt(),
      mT = Ji();
    Ec.exports =
      !ET &&
      !yT(function () {
        return (
          Object.defineProperty(mT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var to = c((mc) => {
    var _T = _t(),
      bT = sn(),
      TT = lu(),
      IT = Fi(),
      OT = vr(),
      AT = Qi(),
      ST = dt(),
      wT = eo(),
      yc = Object.getOwnPropertyDescriptor;
    mc.f = _T
      ? yc
      : function (t, r) {
          if (((t = OT(t)), (r = AT(r)), wT))
            try {
              return yc(t, r);
            } catch {}
          if (ST(t, r)) return IT(!bT(TT.f, t, r), t[r]);
        };
  });
  var yr = c((b5, bc) => {
    var _c = fe(),
      xT = qt(),
      CT = _c.String,
      RT = _c.TypeError;
    bc.exports = function (e) {
      if (xT(e)) return e;
      throw RT(CT(e) + " is not an object");
    };
  });
  var mr = c((Oc) => {
    var NT = fe(),
      LT = _t(),
      PT = eo(),
      Tc = yr(),
      qT = Qi(),
      FT = NT.TypeError,
      Ic = Object.defineProperty;
    Oc.f = LT
      ? Ic
      : function (t, r, n) {
          if ((Tc(t), (r = qT(r)), Tc(n), PT))
            try {
              return Ic(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw FT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var fn = c((I5, Ac) => {
    var MT = _t(),
      DT = mr(),
      GT = Fi();
    Ac.exports = MT
      ? function (e, t, r) {
          return DT.f(e, t, GT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var no = c((O5, Sc) => {
    var VT = Ve(),
      UT = Qe(),
      ro = ln(),
      BT = VT(Function.toString);
    UT(ro.inspectSource) ||
      (ro.inspectSource = function (e) {
        return BT(e);
      });
    Sc.exports = ro.inspectSource;
  });
  var Cc = c((A5, xc) => {
    var XT = fe(),
      kT = Qe(),
      HT = no(),
      wc = XT.WeakMap;
    xc.exports = kT(wc) && /native code/.test(HT(wc));
  });
  var io = c((S5, Nc) => {
    var WT = Ki(),
      jT = $i(),
      Rc = WT("keys");
    Nc.exports = function (e) {
      return Rc[e] || (Rc[e] = jT(e));
    };
  });
  var dn = c((w5, Lc) => {
    Lc.exports = {};
  });
  var Gc = c((x5, Dc) => {
    var zT = Cc(),
      Mc = fe(),
      oo = Ve(),
      KT = qt(),
      $T = fn(),
      ao = dt(),
      so = ln(),
      YT = io(),
      QT = dn(),
      Pc = "Object already initialized",
      co = Mc.TypeError,
      ZT = Mc.WeakMap,
      pn,
      _r,
      gn,
      JT = function (e) {
        return gn(e) ? _r(e) : pn(e, {});
      },
      eI = function (e) {
        return function (t) {
          var r;
          if (!KT(t) || (r = _r(t)).type !== e)
            throw co("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    zT || so.state
      ? ((pt = so.state || (so.state = new ZT())),
        (qc = oo(pt.get)),
        (uo = oo(pt.has)),
        (Fc = oo(pt.set)),
        (pn = function (e, t) {
          if (uo(pt, e)) throw new co(Pc);
          return (t.facade = e), Fc(pt, e, t), t;
        }),
        (_r = function (e) {
          return qc(pt, e) || {};
        }),
        (gn = function (e) {
          return uo(pt, e);
        }))
      : ((Tt = YT("state")),
        (QT[Tt] = !0),
        (pn = function (e, t) {
          if (ao(e, Tt)) throw new co(Pc);
          return (t.facade = e), $T(e, Tt, t), t;
        }),
        (_r = function (e) {
          return ao(e, Tt) ? e[Tt] : {};
        }),
        (gn = function (e) {
          return ao(e, Tt);
        }));
    var pt, qc, uo, Fc, Tt;
    Dc.exports = { set: pn, get: _r, has: gn, enforce: JT, getterFor: eI };
  });
  var Bc = c((C5, Uc) => {
    var lo = _t(),
      tI = dt(),
      Vc = Function.prototype,
      rI = lo && Object.getOwnPropertyDescriptor,
      fo = tI(Vc, "name"),
      nI = fo && function () {}.name === "something",
      iI = fo && (!lo || (lo && rI(Vc, "name").configurable));
    Uc.exports = { EXISTS: fo, PROPER: nI, CONFIGURABLE: iI };
  });
  var jc = c((R5, Wc) => {
    var oI = fe(),
      Xc = Qe(),
      aI = dt(),
      kc = fn(),
      sI = cn(),
      uI = no(),
      Hc = Gc(),
      cI = Bc().CONFIGURABLE,
      lI = Hc.get,
      fI = Hc.enforce,
      dI = String(String).split("String");
    (Wc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (Xc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!aI(r, "name") || (cI && r.name !== s)) && kc(r, "name", s),
          (u = fI(r)),
          u.source || (u.source = dI.join(typeof s == "string" ? s : ""))),
        e === oI)
      ) {
        o ? (e[t] = r) : sI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : kc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Xc(this) && lI(this).source) || uI(this);
    });
  });
  var po = c((N5, zc) => {
    var pI = Math.ceil,
      gI = Math.floor;
    zc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? gI : pI)(t);
    };
  });
  var $c = c((L5, Kc) => {
    var hI = po(),
      vI = Math.max,
      EI = Math.min;
    Kc.exports = function (e, t) {
      var r = hI(e);
      return r < 0 ? vI(r + t, 0) : EI(r, t);
    };
  });
  var Qc = c((P5, Yc) => {
    var yI = po(),
      mI = Math.min;
    Yc.exports = function (e) {
      return e > 0 ? mI(yI(e), 9007199254740991) : 0;
    };
  });
  var Jc = c((q5, Zc) => {
    var _I = Qc();
    Zc.exports = function (e) {
      return _I(e.length);
    };
  });
  var go = c((F5, tl) => {
    var bI = vr(),
      TI = $c(),
      II = Jc(),
      el = function (e) {
        return function (t, r, n) {
          var i = bI(t),
            o = II(i),
            a = TI(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    tl.exports = { includes: el(!0), indexOf: el(!1) };
  });
  var vo = c((M5, nl) => {
    var OI = Ve(),
      ho = dt(),
      AI = vr(),
      SI = go().indexOf,
      wI = dn(),
      rl = OI([].push);
    nl.exports = function (e, t) {
      var r = AI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !ho(wI, o) && ho(r, o) && rl(i, o);
      for (; t.length > n; ) ho(r, (o = t[n++])) && (~SI(i, o) || rl(i, o));
      return i;
    };
  });
  var hn = c((D5, il) => {
    il.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var al = c((ol) => {
    var xI = vo(),
      CI = hn(),
      RI = CI.concat("length", "prototype");
    ol.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return xI(t, RI);
      };
  });
  var ul = c((sl) => {
    sl.f = Object.getOwnPropertySymbols;
  });
  var ll = c((U5, cl) => {
    var NI = Er(),
      LI = Ve(),
      PI = al(),
      qI = ul(),
      FI = yr(),
      MI = LI([].concat);
    cl.exports =
      NI("Reflect", "ownKeys") ||
      function (t) {
        var r = PI.f(FI(t)),
          n = qI.f;
        return n ? MI(r, n(t)) : r;
      };
  });
  var dl = c((B5, fl) => {
    var DI = dt(),
      GI = ll(),
      VI = to(),
      UI = mr();
    fl.exports = function (e, t) {
      for (var r = GI(t), n = UI.f, i = VI.f, o = 0; o < r.length; o++) {
        var a = r[o];
        DI(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var gl = c((X5, pl) => {
    var BI = Pt(),
      XI = Qe(),
      kI = /#|\.prototype\./,
      br = function (e, t) {
        var r = WI[HI(e)];
        return r == zI ? !0 : r == jI ? !1 : XI(t) ? BI(t) : !!t;
      },
      HI = (br.normalize = function (e) {
        return String(e).replace(kI, ".").toLowerCase();
      }),
      WI = (br.data = {}),
      jI = (br.NATIVE = "N"),
      zI = (br.POLYFILL = "P");
    pl.exports = br;
  });
  var vl = c((k5, hl) => {
    var Eo = fe(),
      KI = to().f,
      $I = fn(),
      YI = jc(),
      QI = cn(),
      ZI = dl(),
      JI = gl();
    hl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        f,
        g;
      if (
        (n
          ? (a = Eo)
          : i
          ? (a = Eo[r] || QI(r, {}))
          : (a = (Eo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((g = KI(a, s)), (u = g && g.value)) : (u = a[s]),
            (o = JI(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof f == typeof u) continue;
            ZI(f, u);
          }
          (e.sham || (u && u.sham)) && $I(f, "sham", !0), YI(a, s, f, e);
        }
    };
  });
  var yl = c((H5, El) => {
    var e0 = vo(),
      t0 = hn();
    El.exports =
      Object.keys ||
      function (t) {
        return e0(t, t0);
      };
  });
  var _l = c((W5, ml) => {
    var r0 = _t(),
      n0 = mr(),
      i0 = yr(),
      o0 = vr(),
      a0 = yl();
    ml.exports = r0
      ? Object.defineProperties
      : function (t, r) {
          i0(t);
          for (var n = o0(r), i = a0(r), o = i.length, a = 0, s; o > a; )
            n0.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var Tl = c((j5, bl) => {
    var s0 = Er();
    bl.exports = s0("document", "documentElement");
  });
  var Rl = c((z5, Cl) => {
    var u0 = yr(),
      c0 = _l(),
      Il = hn(),
      l0 = dn(),
      f0 = Tl(),
      d0 = Ji(),
      p0 = io(),
      Ol = ">",
      Al = "<",
      mo = "prototype",
      _o = "script",
      wl = p0("IE_PROTO"),
      yo = function () {},
      xl = function (e) {
        return Al + _o + Ol + e + Al + "/" + _o + Ol;
      },
      Sl = function (e) {
        e.write(xl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      g0 = function () {
        var e = d0("iframe"),
          t = "java" + _o + ":",
          r;
        return (
          (e.style.display = "none"),
          f0.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(xl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      vn,
      En = function () {
        try {
          vn = new ActiveXObject("htmlfile");
        } catch {}
        En =
          typeof document < "u"
            ? document.domain && vn
              ? Sl(vn)
              : g0()
            : Sl(vn);
        for (var e = Il.length; e--; ) delete En[mo][Il[e]];
        return En();
      };
    l0[wl] = !0;
    Cl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((yo[mo] = u0(t)), (n = new yo()), (yo[mo] = null), (n[wl] = t))
            : (n = En()),
          r === void 0 ? n : c0(n, r)
        );
      };
  });
  var Ll = c((K5, Nl) => {
    var h0 = Yi(),
      v0 = Rl(),
      E0 = mr(),
      bo = h0("unscopables"),
      To = Array.prototype;
    To[bo] == null && E0.f(To, bo, { configurable: !0, value: v0(null) });
    Nl.exports = function (e) {
      To[bo][e] = !0;
    };
  });
  var Pl = c(() => {
    "use strict";
    var y0 = vl(),
      m0 = go().includes,
      _0 = Ll();
    y0(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return m0(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    _0("includes");
  });
  var Fl = c((Q5, ql) => {
    var b0 = fe(),
      T0 = Ve();
    ql.exports = function (e, t) {
      return T0(b0[e].prototype[t]);
    };
  });
  var Dl = c((Z5, Ml) => {
    Pl();
    var I0 = Fl();
    Ml.exports = I0("Array", "includes");
  });
  var Vl = c((J5, Gl) => {
    var O0 = Dl();
    Gl.exports = O0;
  });
  var Bl = c((eX, Ul) => {
    var A0 = Vl();
    Ul.exports = A0;
  });
  var Io = c((tX, Xl) => {
    var S0 =
      typeof global == "object" && global && global.Object === Object && global;
    Xl.exports = S0;
  });
  var Be = c((rX, kl) => {
    var w0 = Io(),
      x0 = typeof self == "object" && self && self.Object === Object && self,
      C0 = w0 || x0 || Function("return this")();
    kl.exports = C0;
  });
  var Mt = c((nX, Hl) => {
    var R0 = Be(),
      N0 = R0.Symbol;
    Hl.exports = N0;
  });
  var Kl = c((iX, zl) => {
    var Wl = Mt(),
      jl = Object.prototype,
      L0 = jl.hasOwnProperty,
      P0 = jl.toString,
      Tr = Wl ? Wl.toStringTag : void 0;
    function q0(e) {
      var t = L0.call(e, Tr),
        r = e[Tr];
      try {
        e[Tr] = void 0;
        var n = !0;
      } catch {}
      var i = P0.call(e);
      return n && (t ? (e[Tr] = r) : delete e[Tr]), i;
    }
    zl.exports = q0;
  });
  var Yl = c((oX, $l) => {
    var F0 = Object.prototype,
      M0 = F0.toString;
    function D0(e) {
      return M0.call(e);
    }
    $l.exports = D0;
  });
  var gt = c((aX, Jl) => {
    var Ql = Mt(),
      G0 = Kl(),
      V0 = Yl(),
      U0 = "[object Null]",
      B0 = "[object Undefined]",
      Zl = Ql ? Ql.toStringTag : void 0;
    function X0(e) {
      return e == null
        ? e === void 0
          ? B0
          : U0
        : Zl && Zl in Object(e)
        ? G0(e)
        : V0(e);
    }
    Jl.exports = X0;
  });
  var Oo = c((sX, ef) => {
    function k0(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    ef.exports = k0;
  });
  var Ao = c((uX, tf) => {
    var H0 = Oo(),
      W0 = H0(Object.getPrototypeOf, Object);
    tf.exports = W0;
  });
  var it = c((cX, rf) => {
    function j0(e) {
      return e != null && typeof e == "object";
    }
    rf.exports = j0;
  });
  var So = c((lX, of) => {
    var z0 = gt(),
      K0 = Ao(),
      $0 = it(),
      Y0 = "[object Object]",
      Q0 = Function.prototype,
      Z0 = Object.prototype,
      nf = Q0.toString,
      J0 = Z0.hasOwnProperty,
      eO = nf.call(Object);
    function tO(e) {
      if (!$0(e) || z0(e) != Y0) return !1;
      var t = K0(e);
      if (t === null) return !0;
      var r = J0.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && nf.call(r) == eO;
    }
    of.exports = tO;
  });
  var af = c((wo) => {
    "use strict";
    Object.defineProperty(wo, "__esModule", { value: !0 });
    wo.default = rO;
    function rO(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var sf = c((Co, xo) => {
    "use strict";
    Object.defineProperty(Co, "__esModule", { value: !0 });
    var nO = af(),
      iO = oO(nO);
    function oO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Dt;
    typeof self < "u"
      ? (Dt = self)
      : typeof window < "u"
      ? (Dt = window)
      : typeof global < "u"
      ? (Dt = global)
      : typeof xo < "u"
      ? (Dt = xo)
      : (Dt = Function("return this")());
    var aO = (0, iO.default)(Dt);
    Co.default = aO;
  });
  var Ro = c((Ir) => {
    "use strict";
    Ir.__esModule = !0;
    Ir.ActionTypes = void 0;
    Ir.default = ff;
    var sO = So(),
      uO = lf(sO),
      cO = sf(),
      uf = lf(cO);
    function lf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var cf = (Ir.ActionTypes = { INIT: "@@redux/INIT" });
    function ff(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(ff)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function g() {
        return o;
      }
      function p(m) {
        if (typeof m != "function")
          throw new Error("Expected listener to be a function.");
        var A = !0;
        return (
          f(),
          s.push(m),
          function () {
            if (A) {
              (A = !1), f();
              var w = s.indexOf(m);
              s.splice(w, 1);
            }
          }
        );
      }
      function d(m) {
        if (!(0, uO.default)(m))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof m.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, m));
        } finally {
          u = !1;
        }
        for (var A = (a = s), E = 0; E < A.length; E++) A[E]();
        return m;
      }
      function v(m) {
        if (typeof m != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = m), d({ type: cf.INIT });
      }
      function b() {
        var m,
          A = p;
        return (
          (m = {
            subscribe: function (w) {
              if (typeof w != "object")
                throw new TypeError("Expected the observer to be an object.");
              function S() {
                w.next && w.next(g());
              }
              S();
              var C = A(S);
              return { unsubscribe: C };
            },
          }),
          (m[uf.default] = function () {
            return this;
          }),
          m
        );
      }
      return (
        d({ type: cf.INIT }),
        (n = { dispatch: d, subscribe: p, getState: g, replaceReducer: v }),
        (n[uf.default] = b),
        n
      );
    }
  });
  var Lo = c((No) => {
    "use strict";
    No.__esModule = !0;
    No.default = lO;
    function lO(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var gf = c((Po) => {
    "use strict";
    Po.__esModule = !0;
    Po.default = hO;
    var df = Ro(),
      fO = So(),
      gX = pf(fO),
      dO = Lo(),
      hX = pf(dO);
    function pf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function pO(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function gO(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: df.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                df.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function hO(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        gO(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          g = arguments[1];
        if (s) throw s;
        if (!1) var p;
        for (var d = !1, v = {}, b = 0; b < o.length; b++) {
          var m = o[b],
            A = r[m],
            E = f[m],
            w = A(E, g);
          if (typeof w > "u") {
            var S = pO(m, g);
            throw new Error(S);
          }
          (v[m] = w), (d = d || w !== E);
        }
        return d ? v : f;
      };
    }
  });
  var vf = c((qo) => {
    "use strict";
    qo.__esModule = !0;
    qo.default = vO;
    function hf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function vO(e, t) {
      if (typeof e == "function") return hf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = hf(a, t));
      }
      return n;
    }
  });
  var Mo = c((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    Fo.default = EO;
    function EO() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var Ef = c((Do) => {
    "use strict";
    Do.__esModule = !0;
    var yO =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Do.default = TO;
    var mO = Mo(),
      _O = bO(mO);
    function bO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function TO() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            f = [],
            g = {
              getState: s.getState,
              dispatch: function (d) {
                return u(d);
              },
            };
          return (
            (f = t.map(function (p) {
              return p(g);
            })),
            (u = _O.default.apply(void 0, f)(s.dispatch)),
            yO({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Go = c((qe) => {
    "use strict";
    qe.__esModule = !0;
    qe.compose =
      qe.applyMiddleware =
      qe.bindActionCreators =
      qe.combineReducers =
      qe.createStore =
        void 0;
    var IO = Ro(),
      OO = Gt(IO),
      AO = gf(),
      SO = Gt(AO),
      wO = vf(),
      xO = Gt(wO),
      CO = Ef(),
      RO = Gt(CO),
      NO = Mo(),
      LO = Gt(NO),
      PO = Lo(),
      _X = Gt(PO);
    function Gt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    qe.createStore = OO.default;
    qe.combineReducers = SO.default;
    qe.bindActionCreators = xO.default;
    qe.applyMiddleware = RO.default;
    qe.compose = LO.default;
  });
  var Xe,
    Vo,
    Ze,
    qO,
    FO,
    yn,
    MO,
    Uo = ce(() => {
      "use strict";
      (Xe = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Vo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (Ze = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (qO = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (FO = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (yn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (MO = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Re,
    DO,
    mn = ce(() => {
      "use strict";
      (Re = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (DO = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var GO,
    yf = ce(() => {
      "use strict";
      GO = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var VO,
    UO,
    BO,
    XO,
    kO,
    HO,
    WO,
    Bo,
    mf = ce(() => {
      "use strict";
      mn();
      ({
        TRANSFORM_MOVE: VO,
        TRANSFORM_SCALE: UO,
        TRANSFORM_ROTATE: BO,
        TRANSFORM_SKEW: XO,
        STYLE_SIZE: kO,
        STYLE_FILTER: HO,
        STYLE_FONT_VARIATION: WO,
      } = Re),
        (Bo = {
          [VO]: !0,
          [UO]: !0,
          [BO]: !0,
          [XO]: !0,
          [kO]: !0,
          [HO]: !0,
          [WO]: !0,
        });
    });
  var Ee = {};
  Ce(Ee, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => uA,
    IX2_ANIMATION_FRAME_CHANGED: () => rA,
    IX2_CLEAR_REQUESTED: () => JO,
    IX2_ELEMENT_STATE_CHANGED: () => sA,
    IX2_EVENT_LISTENER_ADDED: () => eA,
    IX2_EVENT_STATE_CHANGED: () => tA,
    IX2_INSTANCE_ADDED: () => iA,
    IX2_INSTANCE_REMOVED: () => aA,
    IX2_INSTANCE_STARTED: () => oA,
    IX2_MEDIA_QUERIES_DEFINED: () => lA,
    IX2_PARAMETER_CHANGED: () => nA,
    IX2_PLAYBACK_REQUESTED: () => QO,
    IX2_PREVIEW_REQUESTED: () => YO,
    IX2_RAW_DATA_IMPORTED: () => jO,
    IX2_SESSION_INITIALIZED: () => zO,
    IX2_SESSION_STARTED: () => KO,
    IX2_SESSION_STOPPED: () => $O,
    IX2_STOP_REQUESTED: () => ZO,
    IX2_TEST_FRAME_RENDERED: () => fA,
    IX2_VIEWPORT_WIDTH_CHANGED: () => cA,
  });
  var jO,
    zO,
    KO,
    $O,
    YO,
    QO,
    ZO,
    JO,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    _f = ce(() => {
      "use strict";
      (jO = "IX2_RAW_DATA_IMPORTED"),
        (zO = "IX2_SESSION_INITIALIZED"),
        (KO = "IX2_SESSION_STARTED"),
        ($O = "IX2_SESSION_STOPPED"),
        (YO = "IX2_PREVIEW_REQUESTED"),
        (QO = "IX2_PLAYBACK_REQUESTED"),
        (ZO = "IX2_STOP_REQUESTED"),
        (JO = "IX2_CLEAR_REQUESTED"),
        (eA = "IX2_EVENT_LISTENER_ADDED"),
        (tA = "IX2_EVENT_STATE_CHANGED"),
        (rA = "IX2_ANIMATION_FRAME_CHANGED"),
        (nA = "IX2_PARAMETER_CHANGED"),
        (iA = "IX2_INSTANCE_ADDED"),
        (oA = "IX2_INSTANCE_STARTED"),
        (aA = "IX2_INSTANCE_REMOVED"),
        (sA = "IX2_ELEMENT_STATE_CHANGED"),
        (uA = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (cA = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (lA = "IX2_MEDIA_QUERIES_DEFINED"),
        (fA = "IX2_TEST_FRAME_RENDERED");
    });
  var Te = {};
  Ce(Te, {
    ABSTRACT_NODE: () => cS,
    AUTO: () => ZA,
    BACKGROUND: () => jA,
    BACKGROUND_COLOR: () => WA,
    BAR_DELIMITER: () => tS,
    BORDER_COLOR: () => zA,
    BOUNDARY_SELECTOR: () => vA,
    CHILDREN: () => rS,
    COLON_DELIMITER: () => eS,
    COLOR: () => KA,
    COMMA_DELIMITER: () => JA,
    CONFIG_UNIT: () => OA,
    CONFIG_VALUE: () => _A,
    CONFIG_X_UNIT: () => bA,
    CONFIG_X_VALUE: () => EA,
    CONFIG_Y_UNIT: () => TA,
    CONFIG_Y_VALUE: () => yA,
    CONFIG_Z_UNIT: () => IA,
    CONFIG_Z_VALUE: () => mA,
    DISPLAY: () => $A,
    FILTER: () => BA,
    FLEX: () => YA,
    FONT_VARIATION_SETTINGS: () => XA,
    HEIGHT: () => HA,
    HTML_ELEMENT: () => sS,
    IMMEDIATE_CHILDREN: () => nS,
    IX2_ID_DELIMITER: () => dA,
    OPACITY: () => UA,
    PARENT: () => oS,
    PLAIN_OBJECT: () => uS,
    PRESERVE_3D: () => aS,
    RENDER_GENERAL: () => fS,
    RENDER_PLUGIN: () => pS,
    RENDER_STYLE: () => dS,
    RENDER_TRANSFORM: () => lS,
    ROTATE_X: () => qA,
    ROTATE_Y: () => FA,
    ROTATE_Z: () => MA,
    SCALE_3D: () => PA,
    SCALE_X: () => RA,
    SCALE_Y: () => NA,
    SCALE_Z: () => LA,
    SIBLINGS: () => iS,
    SKEW: () => DA,
    SKEW_X: () => GA,
    SKEW_Y: () => VA,
    TRANSFORM: () => AA,
    TRANSLATE_3D: () => CA,
    TRANSLATE_X: () => SA,
    TRANSLATE_Y: () => wA,
    TRANSLATE_Z: () => xA,
    WF_PAGE: () => pA,
    WIDTH: () => kA,
    WILL_CHANGE: () => QA,
    W_MOD_IX: () => hA,
    W_MOD_JS: () => gA,
  });
  var dA,
    pA,
    gA,
    hA,
    vA,
    EA,
    yA,
    mA,
    _A,
    bA,
    TA,
    IA,
    OA,
    AA,
    SA,
    wA,
    xA,
    CA,
    RA,
    NA,
    LA,
    PA,
    qA,
    FA,
    MA,
    DA,
    GA,
    VA,
    UA,
    BA,
    XA,
    kA,
    HA,
    WA,
    jA,
    zA,
    KA,
    $A,
    YA,
    QA,
    ZA,
    JA,
    eS,
    tS,
    rS,
    nS,
    iS,
    oS,
    aS,
    sS,
    uS,
    cS,
    lS,
    fS,
    dS,
    pS,
    bf = ce(() => {
      "use strict";
      (dA = "|"),
        (pA = "data-wf-page"),
        (gA = "w-mod-js"),
        (hA = "w-mod-ix"),
        (vA = ".w-dyn-item"),
        (EA = "xValue"),
        (yA = "yValue"),
        (mA = "zValue"),
        (_A = "value"),
        (bA = "xUnit"),
        (TA = "yUnit"),
        (IA = "zUnit"),
        (OA = "unit"),
        (AA = "transform"),
        (SA = "translateX"),
        (wA = "translateY"),
        (xA = "translateZ"),
        (CA = "translate3d"),
        (RA = "scaleX"),
        (NA = "scaleY"),
        (LA = "scaleZ"),
        (PA = "scale3d"),
        (qA = "rotateX"),
        (FA = "rotateY"),
        (MA = "rotateZ"),
        (DA = "skew"),
        (GA = "skewX"),
        (VA = "skewY"),
        (UA = "opacity"),
        (BA = "filter"),
        (XA = "font-variation-settings"),
        (kA = "width"),
        (HA = "height"),
        (WA = "backgroundColor"),
        (jA = "background"),
        (zA = "borderColor"),
        (KA = "color"),
        ($A = "display"),
        (YA = "flex"),
        (QA = "willChange"),
        (ZA = "AUTO"),
        (JA = ","),
        (eS = ":"),
        (tS = "|"),
        (rS = "CHILDREN"),
        (nS = "IMMEDIATE_CHILDREN"),
        (iS = "SIBLINGS"),
        (oS = "PARENT"),
        (aS = "preserve-3d"),
        (sS = "HTML_ELEMENT"),
        (uS = "PLAIN_OBJECT"),
        (cS = "ABSTRACT_NODE"),
        (lS = "RENDER_TRANSFORM"),
        (fS = "RENDER_GENERAL"),
        (dS = "RENDER_STYLE"),
        (pS = "RENDER_PLUGIN");
    });
  var Tf = {};
  Ce(Tf, {
    ActionAppliesTo: () => DO,
    ActionTypeConsts: () => Re,
    EventAppliesTo: () => Vo,
    EventBasedOn: () => Ze,
    EventContinuousMouseAxes: () => qO,
    EventLimitAffectedElements: () => FO,
    EventTypeConsts: () => Xe,
    IX2EngineActionTypes: () => Ee,
    IX2EngineConstants: () => Te,
    InteractionTypeConsts: () => GO,
    QuickEffectDirectionConsts: () => MO,
    QuickEffectIds: () => yn,
    ReducedMotionTypes: () => Bo,
  });
  var Ne = ce(() => {
    "use strict";
    Uo();
    mn();
    yf();
    mf();
    _f();
    bf();
    mn();
    Uo();
  });
  var gS,
    If,
    Of = ce(() => {
      "use strict";
      Ne();
      ({ IX2_RAW_DATA_IMPORTED: gS } = Ee),
        (If = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case gS:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Vt = c((pe) => {
    "use strict";
    Object.defineProperty(pe, "__esModule", { value: !0 });
    var hS =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    pe.clone = bn;
    pe.addLast = wf;
    pe.addFirst = xf;
    pe.removeLast = Cf;
    pe.removeFirst = Rf;
    pe.insert = Nf;
    pe.removeAt = Lf;
    pe.replaceAt = Pf;
    pe.getIn = Tn;
    pe.set = In;
    pe.setIn = On;
    pe.update = Ff;
    pe.updateIn = Mf;
    pe.merge = Df;
    pe.mergeDeep = Gf;
    pe.mergeIn = Vf;
    pe.omit = Uf;
    pe.addDefaults = Bf;
    var Af = "INVALID_ARGS";
    function Sf(e) {
      throw new Error(e);
    }
    function Xo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var vS = {}.hasOwnProperty;
    function bn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Xo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Le(e, t, r) {
      var n = r;
      n == null && Sf(Af);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (f != null) {
          var g = Xo(f);
          if (g.length)
            for (var p = 0; p <= g.length; p++) {
              var d = g[p];
              if (!(e && n[d] !== void 0)) {
                var v = f[d];
                t && _n(n[d]) && _n(v) && (v = Le(e, t, n[d], v)),
                  !(v === void 0 || v === n[d]) &&
                    (i || ((i = !0), (n = bn(n))), (n[d] = v));
              }
            }
        }
      }
      return n;
    }
    function _n(e) {
      var t = typeof e > "u" ? "undefined" : hS(e);
      return e != null && (t === "object" || t === "function");
    }
    function wf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function xf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Cf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Rf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Nf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Lf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Pf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Tn(e, t) {
      if ((!Array.isArray(t) && Sf(Af), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function In(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = bn(i);
      return (o[t] = r), o;
    }
    function qf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          _n(e) && _n(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = qf(a, t, r, n + 1);
      }
      return In(e, o, i);
    }
    function On(e, t, r) {
      return t.length ? qf(e, t, r, 0) : r;
    }
    function Ff(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return In(e, t, i);
    }
    function Mf(e, t, r) {
      var n = Tn(e, t),
        i = r(n);
      return On(e, t, i);
    }
    function Df(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Le.call.apply(Le, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Le(!1, !1, e, t, r, n, i, o);
    }
    function Gf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Le.call.apply(Le, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Le(!1, !0, e, t, r, n, i, o);
    }
    function Vf(e, t, r, n, i, o, a) {
      var s = Tn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          f = arguments.length,
          g = Array(f > 7 ? f - 7 : 0),
          p = 7;
        p < f;
        p++
      )
        g[p - 7] = arguments[p];
      return (
        g.length
          ? (u = Le.call.apply(Le, [null, !1, !1, s, r, n, i, o, a].concat(g)))
          : (u = Le(!1, !1, s, r, n, i, o, a)),
        On(e, t, u)
      );
    }
    function Uf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (vS.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Xo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Bf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Le.call.apply(Le, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Le(!0, !1, e, t, r, n, i, o);
    }
    var ES = {
      clone: bn,
      addLast: wf,
      addFirst: xf,
      removeLast: Cf,
      removeFirst: Rf,
      insert: Nf,
      removeAt: Lf,
      replaceAt: Pf,
      getIn: Tn,
      set: In,
      setIn: On,
      update: Ff,
      updateIn: Mf,
      merge: Df,
      mergeDeep: Gf,
      mergeIn: Vf,
      omit: Uf,
      addDefaults: Bf,
    };
    pe.default = ES;
  });
  var kf,
    yS,
    mS,
    _S,
    bS,
    TS,
    Xf,
    Hf,
    Wf = ce(() => {
      "use strict";
      Ne();
      (kf = ie(Vt())),
        ({
          IX2_PREVIEW_REQUESTED: yS,
          IX2_PLAYBACK_REQUESTED: mS,
          IX2_STOP_REQUESTED: _S,
          IX2_CLEAR_REQUESTED: bS,
        } = Ee),
        (TS = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Xf = Object.create(null, {
          [yS]: { value: "preview" },
          [mS]: { value: "playback" },
          [_S]: { value: "stop" },
          [bS]: { value: "clear" },
        })),
        (Hf = (e = TS, t) => {
          if (t.type in Xf) {
            let r = [Xf[t.type]];
            return (0, kf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Ae,
    IS,
    OS,
    AS,
    SS,
    wS,
    xS,
    CS,
    RS,
    NS,
    LS,
    jf,
    PS,
    zf,
    Kf = ce(() => {
      "use strict";
      Ne();
      (Ae = ie(Vt())),
        ({
          IX2_SESSION_INITIALIZED: IS,
          IX2_SESSION_STARTED: OS,
          IX2_TEST_FRAME_RENDERED: AS,
          IX2_SESSION_STOPPED: SS,
          IX2_EVENT_LISTENER_ADDED: wS,
          IX2_EVENT_STATE_CHANGED: xS,
          IX2_ANIMATION_FRAME_CHANGED: CS,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: RS,
          IX2_VIEWPORT_WIDTH_CHANGED: NS,
          IX2_MEDIA_QUERIES_DEFINED: LS,
        } = Ee),
        (jf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (PS = 20),
        (zf = (e = jf, t) => {
          switch (t.type) {
            case IS: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Ae.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case OS:
              return (0, Ae.set)(e, "active", !0);
            case AS: {
              let {
                payload: { step: r = PS },
              } = t;
              return (0, Ae.set)(e, "tick", e.tick + r);
            }
            case SS:
              return jf;
            case CS: {
              let {
                payload: { now: r },
              } = t;
              return (0, Ae.set)(e, "tick", r);
            }
            case wS: {
              let r = (0, Ae.addLast)(e.eventListeners, t.payload);
              return (0, Ae.set)(e, "eventListeners", r);
            }
            case xS: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Ae.setIn)(e, ["eventState", r], n);
            }
            case RS: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Ae.setIn)(e, ["playbackState", r], n);
            }
            case NS: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: f } = n[a];
                if (r >= u && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, Ae.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case LS:
              return (0, Ae.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Yf = c((UX, $f) => {
    function qS() {
      (this.__data__ = []), (this.size = 0);
    }
    $f.exports = qS;
  });
  var An = c((BX, Qf) => {
    function FS(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Qf.exports = FS;
  });
  var Or = c((XX, Zf) => {
    var MS = An();
    function DS(e, t) {
      for (var r = e.length; r--; ) if (MS(e[r][0], t)) return r;
      return -1;
    }
    Zf.exports = DS;
  });
  var ed = c((kX, Jf) => {
    var GS = Or(),
      VS = Array.prototype,
      US = VS.splice;
    function BS(e) {
      var t = this.__data__,
        r = GS(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : US.call(t, r, 1), --this.size, !0;
    }
    Jf.exports = BS;
  });
  var rd = c((HX, td) => {
    var XS = Or();
    function kS(e) {
      var t = this.__data__,
        r = XS(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    td.exports = kS;
  });
  var id = c((WX, nd) => {
    var HS = Or();
    function WS(e) {
      return HS(this.__data__, e) > -1;
    }
    nd.exports = WS;
  });
  var ad = c((jX, od) => {
    var jS = Or();
    function zS(e, t) {
      var r = this.__data__,
        n = jS(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    od.exports = zS;
  });
  var Ar = c((zX, sd) => {
    var KS = Yf(),
      $S = ed(),
      YS = rd(),
      QS = id(),
      ZS = ad();
    function Ut(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ut.prototype.clear = KS;
    Ut.prototype.delete = $S;
    Ut.prototype.get = YS;
    Ut.prototype.has = QS;
    Ut.prototype.set = ZS;
    sd.exports = Ut;
  });
  var cd = c((KX, ud) => {
    var JS = Ar();
    function ew() {
      (this.__data__ = new JS()), (this.size = 0);
    }
    ud.exports = ew;
  });
  var fd = c(($X, ld) => {
    function tw(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    ld.exports = tw;
  });
  var pd = c((YX, dd) => {
    function rw(e) {
      return this.__data__.get(e);
    }
    dd.exports = rw;
  });
  var hd = c((QX, gd) => {
    function nw(e) {
      return this.__data__.has(e);
    }
    gd.exports = nw;
  });
  var Je = c((ZX, vd) => {
    function iw(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    vd.exports = iw;
  });
  var ko = c((JX, Ed) => {
    var ow = gt(),
      aw = Je(),
      sw = "[object AsyncFunction]",
      uw = "[object Function]",
      cw = "[object GeneratorFunction]",
      lw = "[object Proxy]";
    function fw(e) {
      if (!aw(e)) return !1;
      var t = ow(e);
      return t == uw || t == cw || t == sw || t == lw;
    }
    Ed.exports = fw;
  });
  var md = c((ek, yd) => {
    var dw = Be(),
      pw = dw["__core-js_shared__"];
    yd.exports = pw;
  });
  var Td = c((tk, bd) => {
    var Ho = md(),
      _d = (function () {
        var e = /[^.]+$/.exec((Ho && Ho.keys && Ho.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function gw(e) {
      return !!_d && _d in e;
    }
    bd.exports = gw;
  });
  var Wo = c((rk, Id) => {
    var hw = Function.prototype,
      vw = hw.toString;
    function Ew(e) {
      if (e != null) {
        try {
          return vw.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Id.exports = Ew;
  });
  var Ad = c((nk, Od) => {
    var yw = ko(),
      mw = Td(),
      _w = Je(),
      bw = Wo(),
      Tw = /[\\^$.*+?()[\]{}|]/g,
      Iw = /^\[object .+?Constructor\]$/,
      Ow = Function.prototype,
      Aw = Object.prototype,
      Sw = Ow.toString,
      ww = Aw.hasOwnProperty,
      xw = RegExp(
        "^" +
          Sw.call(ww)
            .replace(Tw, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function Cw(e) {
      if (!_w(e) || mw(e)) return !1;
      var t = yw(e) ? xw : Iw;
      return t.test(bw(e));
    }
    Od.exports = Cw;
  });
  var wd = c((ik, Sd) => {
    function Rw(e, t) {
      return e?.[t];
    }
    Sd.exports = Rw;
  });
  var ht = c((ok, xd) => {
    var Nw = Ad(),
      Lw = wd();
    function Pw(e, t) {
      var r = Lw(e, t);
      return Nw(r) ? r : void 0;
    }
    xd.exports = Pw;
  });
  var Sn = c((ak, Cd) => {
    var qw = ht(),
      Fw = Be(),
      Mw = qw(Fw, "Map");
    Cd.exports = Mw;
  });
  var Sr = c((sk, Rd) => {
    var Dw = ht(),
      Gw = Dw(Object, "create");
    Rd.exports = Gw;
  });
  var Pd = c((uk, Ld) => {
    var Nd = Sr();
    function Vw() {
      (this.__data__ = Nd ? Nd(null) : {}), (this.size = 0);
    }
    Ld.exports = Vw;
  });
  var Fd = c((ck, qd) => {
    function Uw(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    qd.exports = Uw;
  });
  var Dd = c((lk, Md) => {
    var Bw = Sr(),
      Xw = "__lodash_hash_undefined__",
      kw = Object.prototype,
      Hw = kw.hasOwnProperty;
    function Ww(e) {
      var t = this.__data__;
      if (Bw) {
        var r = t[e];
        return r === Xw ? void 0 : r;
      }
      return Hw.call(t, e) ? t[e] : void 0;
    }
    Md.exports = Ww;
  });
  var Vd = c((fk, Gd) => {
    var jw = Sr(),
      zw = Object.prototype,
      Kw = zw.hasOwnProperty;
    function $w(e) {
      var t = this.__data__;
      return jw ? t[e] !== void 0 : Kw.call(t, e);
    }
    Gd.exports = $w;
  });
  var Bd = c((dk, Ud) => {
    var Yw = Sr(),
      Qw = "__lodash_hash_undefined__";
    function Zw(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = Yw && t === void 0 ? Qw : t),
        this
      );
    }
    Ud.exports = Zw;
  });
  var kd = c((pk, Xd) => {
    var Jw = Pd(),
      ex = Fd(),
      tx = Dd(),
      rx = Vd(),
      nx = Bd();
    function Bt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Bt.prototype.clear = Jw;
    Bt.prototype.delete = ex;
    Bt.prototype.get = tx;
    Bt.prototype.has = rx;
    Bt.prototype.set = nx;
    Xd.exports = Bt;
  });
  var jd = c((gk, Wd) => {
    var Hd = kd(),
      ix = Ar(),
      ox = Sn();
    function ax() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Hd(),
          map: new (ox || ix)(),
          string: new Hd(),
        });
    }
    Wd.exports = ax;
  });
  var Kd = c((hk, zd) => {
    function sx(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    zd.exports = sx;
  });
  var wr = c((vk, $d) => {
    var ux = Kd();
    function cx(e, t) {
      var r = e.__data__;
      return ux(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    $d.exports = cx;
  });
  var Qd = c((Ek, Yd) => {
    var lx = wr();
    function fx(e) {
      var t = lx(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Yd.exports = fx;
  });
  var Jd = c((yk, Zd) => {
    var dx = wr();
    function px(e) {
      return dx(this, e).get(e);
    }
    Zd.exports = px;
  });
  var tp = c((mk, ep) => {
    var gx = wr();
    function hx(e) {
      return gx(this, e).has(e);
    }
    ep.exports = hx;
  });
  var np = c((_k, rp) => {
    var vx = wr();
    function Ex(e, t) {
      var r = vx(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    rp.exports = Ex;
  });
  var wn = c((bk, ip) => {
    var yx = jd(),
      mx = Qd(),
      _x = Jd(),
      bx = tp(),
      Tx = np();
    function Xt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Xt.prototype.clear = yx;
    Xt.prototype.delete = mx;
    Xt.prototype.get = _x;
    Xt.prototype.has = bx;
    Xt.prototype.set = Tx;
    ip.exports = Xt;
  });
  var ap = c((Tk, op) => {
    var Ix = Ar(),
      Ox = Sn(),
      Ax = wn(),
      Sx = 200;
    function wx(e, t) {
      var r = this.__data__;
      if (r instanceof Ix) {
        var n = r.__data__;
        if (!Ox || n.length < Sx - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new Ax(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    op.exports = wx;
  });
  var jo = c((Ik, sp) => {
    var xx = Ar(),
      Cx = cd(),
      Rx = fd(),
      Nx = pd(),
      Lx = hd(),
      Px = ap();
    function kt(e) {
      var t = (this.__data__ = new xx(e));
      this.size = t.size;
    }
    kt.prototype.clear = Cx;
    kt.prototype.delete = Rx;
    kt.prototype.get = Nx;
    kt.prototype.has = Lx;
    kt.prototype.set = Px;
    sp.exports = kt;
  });
  var cp = c((Ok, up) => {
    var qx = "__lodash_hash_undefined__";
    function Fx(e) {
      return this.__data__.set(e, qx), this;
    }
    up.exports = Fx;
  });
  var fp = c((Ak, lp) => {
    function Mx(e) {
      return this.__data__.has(e);
    }
    lp.exports = Mx;
  });
  var pp = c((Sk, dp) => {
    var Dx = wn(),
      Gx = cp(),
      Vx = fp();
    function xn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new Dx(); ++t < r; ) this.add(e[t]);
    }
    xn.prototype.add = xn.prototype.push = Gx;
    xn.prototype.has = Vx;
    dp.exports = xn;
  });
  var hp = c((wk, gp) => {
    function Ux(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    gp.exports = Ux;
  });
  var Ep = c((xk, vp) => {
    function Bx(e, t) {
      return e.has(t);
    }
    vp.exports = Bx;
  });
  var zo = c((Ck, yp) => {
    var Xx = pp(),
      kx = hp(),
      Hx = Ep(),
      Wx = 1,
      jx = 2;
    function zx(e, t, r, n, i, o) {
      var a = r & Wx,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var f = o.get(e),
        g = o.get(t);
      if (f && g) return f == t && g == e;
      var p = -1,
        d = !0,
        v = r & jx ? new Xx() : void 0;
      for (o.set(e, t), o.set(t, e); ++p < s; ) {
        var b = e[p],
          m = t[p];
        if (n) var A = a ? n(m, b, p, t, e, o) : n(b, m, p, e, t, o);
        if (A !== void 0) {
          if (A) continue;
          d = !1;
          break;
        }
        if (v) {
          if (
            !kx(t, function (E, w) {
              if (!Hx(v, w) && (b === E || i(b, E, r, n, o))) return v.push(w);
            })
          ) {
            d = !1;
            break;
          }
        } else if (!(b === m || i(b, m, r, n, o))) {
          d = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), d;
    }
    yp.exports = zx;
  });
  var _p = c((Rk, mp) => {
    var Kx = Be(),
      $x = Kx.Uint8Array;
    mp.exports = $x;
  });
  var Tp = c((Nk, bp) => {
    function Yx(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    bp.exports = Yx;
  });
  var Op = c((Lk, Ip) => {
    function Qx(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ip.exports = Qx;
  });
  var Cp = c((Pk, xp) => {
    var Ap = Mt(),
      Sp = _p(),
      Zx = An(),
      Jx = zo(),
      eC = Tp(),
      tC = Op(),
      rC = 1,
      nC = 2,
      iC = "[object Boolean]",
      oC = "[object Date]",
      aC = "[object Error]",
      sC = "[object Map]",
      uC = "[object Number]",
      cC = "[object RegExp]",
      lC = "[object Set]",
      fC = "[object String]",
      dC = "[object Symbol]",
      pC = "[object ArrayBuffer]",
      gC = "[object DataView]",
      wp = Ap ? Ap.prototype : void 0,
      Ko = wp ? wp.valueOf : void 0;
    function hC(e, t, r, n, i, o, a) {
      switch (r) {
        case gC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case pC:
          return !(e.byteLength != t.byteLength || !o(new Sp(e), new Sp(t)));
        case iC:
        case oC:
        case uC:
          return Zx(+e, +t);
        case aC:
          return e.name == t.name && e.message == t.message;
        case cC:
        case fC:
          return e == t + "";
        case sC:
          var s = eC;
        case lC:
          var u = n & rC;
          if ((s || (s = tC), e.size != t.size && !u)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= nC), a.set(e, t);
          var g = Jx(s(e), s(t), n, i, o, a);
          return a.delete(e), g;
        case dC:
          if (Ko) return Ko.call(e) == Ko.call(t);
      }
      return !1;
    }
    xp.exports = hC;
  });
  var Cn = c((qk, Rp) => {
    function vC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Rp.exports = vC;
  });
  var ye = c((Fk, Np) => {
    var EC = Array.isArray;
    Np.exports = EC;
  });
  var $o = c((Mk, Lp) => {
    var yC = Cn(),
      mC = ye();
    function _C(e, t, r) {
      var n = t(e);
      return mC(e) ? n : yC(n, r(e));
    }
    Lp.exports = _C;
  });
  var qp = c((Dk, Pp) => {
    function bC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Pp.exports = bC;
  });
  var Yo = c((Gk, Fp) => {
    function TC() {
      return [];
    }
    Fp.exports = TC;
  });
  var Qo = c((Vk, Dp) => {
    var IC = qp(),
      OC = Yo(),
      AC = Object.prototype,
      SC = AC.propertyIsEnumerable,
      Mp = Object.getOwnPropertySymbols,
      wC = Mp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                IC(Mp(e), function (t) {
                  return SC.call(e, t);
                }));
          }
        : OC;
    Dp.exports = wC;
  });
  var Vp = c((Uk, Gp) => {
    function xC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Gp.exports = xC;
  });
  var Bp = c((Bk, Up) => {
    var CC = gt(),
      RC = it(),
      NC = "[object Arguments]";
    function LC(e) {
      return RC(e) && CC(e) == NC;
    }
    Up.exports = LC;
  });
  var xr = c((Xk, Hp) => {
    var Xp = Bp(),
      PC = it(),
      kp = Object.prototype,
      qC = kp.hasOwnProperty,
      FC = kp.propertyIsEnumerable,
      MC = Xp(
        (function () {
          return arguments;
        })()
      )
        ? Xp
        : function (e) {
            return PC(e) && qC.call(e, "callee") && !FC.call(e, "callee");
          };
    Hp.exports = MC;
  });
  var jp = c((kk, Wp) => {
    function DC() {
      return !1;
    }
    Wp.exports = DC;
  });
  var Rn = c((Cr, Ht) => {
    var GC = Be(),
      VC = jp(),
      $p = typeof Cr == "object" && Cr && !Cr.nodeType && Cr,
      zp = $p && typeof Ht == "object" && Ht && !Ht.nodeType && Ht,
      UC = zp && zp.exports === $p,
      Kp = UC ? GC.Buffer : void 0,
      BC = Kp ? Kp.isBuffer : void 0,
      XC = BC || VC;
    Ht.exports = XC;
  });
  var Nn = c((Hk, Yp) => {
    var kC = 9007199254740991,
      HC = /^(?:0|[1-9]\d*)$/;
    function WC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? kC),
        !!t &&
          (r == "number" || (r != "symbol" && HC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Yp.exports = WC;
  });
  var Ln = c((Wk, Qp) => {
    var jC = 9007199254740991;
    function zC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= jC;
    }
    Qp.exports = zC;
  });
  var Jp = c((jk, Zp) => {
    var KC = gt(),
      $C = Ln(),
      YC = it(),
      QC = "[object Arguments]",
      ZC = "[object Array]",
      JC = "[object Boolean]",
      eR = "[object Date]",
      tR = "[object Error]",
      rR = "[object Function]",
      nR = "[object Map]",
      iR = "[object Number]",
      oR = "[object Object]",
      aR = "[object RegExp]",
      sR = "[object Set]",
      uR = "[object String]",
      cR = "[object WeakMap]",
      lR = "[object ArrayBuffer]",
      fR = "[object DataView]",
      dR = "[object Float32Array]",
      pR = "[object Float64Array]",
      gR = "[object Int8Array]",
      hR = "[object Int16Array]",
      vR = "[object Int32Array]",
      ER = "[object Uint8Array]",
      yR = "[object Uint8ClampedArray]",
      mR = "[object Uint16Array]",
      _R = "[object Uint32Array]",
      ue = {};
    ue[dR] =
      ue[pR] =
      ue[gR] =
      ue[hR] =
      ue[vR] =
      ue[ER] =
      ue[yR] =
      ue[mR] =
      ue[_R] =
        !0;
    ue[QC] =
      ue[ZC] =
      ue[lR] =
      ue[JC] =
      ue[fR] =
      ue[eR] =
      ue[tR] =
      ue[rR] =
      ue[nR] =
      ue[iR] =
      ue[oR] =
      ue[aR] =
      ue[sR] =
      ue[uR] =
      ue[cR] =
        !1;
    function bR(e) {
      return YC(e) && $C(e.length) && !!ue[KC(e)];
    }
    Zp.exports = bR;
  });
  var tg = c((zk, eg) => {
    function TR(e) {
      return function (t) {
        return e(t);
      };
    }
    eg.exports = TR;
  });
  var ng = c((Rr, Wt) => {
    var IR = Io(),
      rg = typeof Rr == "object" && Rr && !Rr.nodeType && Rr,
      Nr = rg && typeof Wt == "object" && Wt && !Wt.nodeType && Wt,
      OR = Nr && Nr.exports === rg,
      Zo = OR && IR.process,
      AR = (function () {
        try {
          var e = Nr && Nr.require && Nr.require("util").types;
          return e || (Zo && Zo.binding && Zo.binding("util"));
        } catch {}
      })();
    Wt.exports = AR;
  });
  var Pn = c((Kk, ag) => {
    var SR = Jp(),
      wR = tg(),
      ig = ng(),
      og = ig && ig.isTypedArray,
      xR = og ? wR(og) : SR;
    ag.exports = xR;
  });
  var Jo = c(($k, sg) => {
    var CR = Vp(),
      RR = xr(),
      NR = ye(),
      LR = Rn(),
      PR = Nn(),
      qR = Pn(),
      FR = Object.prototype,
      MR = FR.hasOwnProperty;
    function DR(e, t) {
      var r = NR(e),
        n = !r && RR(e),
        i = !r && !n && LR(e),
        o = !r && !n && !i && qR(e),
        a = r || n || i || o,
        s = a ? CR(e.length, String) : [],
        u = s.length;
      for (var f in e)
        (t || MR.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              PR(f, u))
          ) &&
          s.push(f);
      return s;
    }
    sg.exports = DR;
  });
  var qn = c((Yk, ug) => {
    var GR = Object.prototype;
    function VR(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || GR;
      return e === r;
    }
    ug.exports = VR;
  });
  var lg = c((Qk, cg) => {
    var UR = Oo(),
      BR = UR(Object.keys, Object);
    cg.exports = BR;
  });
  var Fn = c((Zk, fg) => {
    var XR = qn(),
      kR = lg(),
      HR = Object.prototype,
      WR = HR.hasOwnProperty;
    function jR(e) {
      if (!XR(e)) return kR(e);
      var t = [];
      for (var r in Object(e)) WR.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    fg.exports = jR;
  });
  var It = c((Jk, dg) => {
    var zR = ko(),
      KR = Ln();
    function $R(e) {
      return e != null && KR(e.length) && !zR(e);
    }
    dg.exports = $R;
  });
  var Lr = c((eH, pg) => {
    var YR = Jo(),
      QR = Fn(),
      ZR = It();
    function JR(e) {
      return ZR(e) ? YR(e) : QR(e);
    }
    pg.exports = JR;
  });
  var hg = c((tH, gg) => {
    var eN = $o(),
      tN = Qo(),
      rN = Lr();
    function nN(e) {
      return eN(e, rN, tN);
    }
    gg.exports = nN;
  });
  var yg = c((rH, Eg) => {
    var vg = hg(),
      iN = 1,
      oN = Object.prototype,
      aN = oN.hasOwnProperty;
    function sN(e, t, r, n, i, o) {
      var a = r & iN,
        s = vg(e),
        u = s.length,
        f = vg(t),
        g = f.length;
      if (u != g && !a) return !1;
      for (var p = u; p--; ) {
        var d = s[p];
        if (!(a ? d in t : aN.call(t, d))) return !1;
      }
      var v = o.get(e),
        b = o.get(t);
      if (v && b) return v == t && b == e;
      var m = !0;
      o.set(e, t), o.set(t, e);
      for (var A = a; ++p < u; ) {
        d = s[p];
        var E = e[d],
          w = t[d];
        if (n) var S = a ? n(w, E, d, t, e, o) : n(E, w, d, e, t, o);
        if (!(S === void 0 ? E === w || i(E, w, r, n, o) : S)) {
          m = !1;
          break;
        }
        A || (A = d == "constructor");
      }
      if (m && !A) {
        var C = e.constructor,
          R = t.constructor;
        C != R &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof C == "function" &&
            C instanceof C &&
            typeof R == "function" &&
            R instanceof R
          ) &&
          (m = !1);
      }
      return o.delete(e), o.delete(t), m;
    }
    Eg.exports = sN;
  });
  var _g = c((nH, mg) => {
    var uN = ht(),
      cN = Be(),
      lN = uN(cN, "DataView");
    mg.exports = lN;
  });
  var Tg = c((iH, bg) => {
    var fN = ht(),
      dN = Be(),
      pN = fN(dN, "Promise");
    bg.exports = pN;
  });
  var Og = c((oH, Ig) => {
    var gN = ht(),
      hN = Be(),
      vN = gN(hN, "Set");
    Ig.exports = vN;
  });
  var ea = c((aH, Ag) => {
    var EN = ht(),
      yN = Be(),
      mN = EN(yN, "WeakMap");
    Ag.exports = mN;
  });
  var Mn = c((sH, Lg) => {
    var ta = _g(),
      ra = Sn(),
      na = Tg(),
      ia = Og(),
      oa = ea(),
      Ng = gt(),
      jt = Wo(),
      Sg = "[object Map]",
      _N = "[object Object]",
      wg = "[object Promise]",
      xg = "[object Set]",
      Cg = "[object WeakMap]",
      Rg = "[object DataView]",
      bN = jt(ta),
      TN = jt(ra),
      IN = jt(na),
      ON = jt(ia),
      AN = jt(oa),
      Ot = Ng;
    ((ta && Ot(new ta(new ArrayBuffer(1))) != Rg) ||
      (ra && Ot(new ra()) != Sg) ||
      (na && Ot(na.resolve()) != wg) ||
      (ia && Ot(new ia()) != xg) ||
      (oa && Ot(new oa()) != Cg)) &&
      (Ot = function (e) {
        var t = Ng(e),
          r = t == _N ? e.constructor : void 0,
          n = r ? jt(r) : "";
        if (n)
          switch (n) {
            case bN:
              return Rg;
            case TN:
              return Sg;
            case IN:
              return wg;
            case ON:
              return xg;
            case AN:
              return Cg;
          }
        return t;
      });
    Lg.exports = Ot;
  });
  var Ug = c((uH, Vg) => {
    var aa = jo(),
      SN = zo(),
      wN = Cp(),
      xN = yg(),
      Pg = Mn(),
      qg = ye(),
      Fg = Rn(),
      CN = Pn(),
      RN = 1,
      Mg = "[object Arguments]",
      Dg = "[object Array]",
      Dn = "[object Object]",
      NN = Object.prototype,
      Gg = NN.hasOwnProperty;
    function LN(e, t, r, n, i, o) {
      var a = qg(e),
        s = qg(t),
        u = a ? Dg : Pg(e),
        f = s ? Dg : Pg(t);
      (u = u == Mg ? Dn : u), (f = f == Mg ? Dn : f);
      var g = u == Dn,
        p = f == Dn,
        d = u == f;
      if (d && Fg(e)) {
        if (!Fg(t)) return !1;
        (a = !0), (g = !1);
      }
      if (d && !g)
        return (
          o || (o = new aa()),
          a || CN(e) ? SN(e, t, r, n, i, o) : wN(e, t, u, r, n, i, o)
        );
      if (!(r & RN)) {
        var v = g && Gg.call(e, "__wrapped__"),
          b = p && Gg.call(t, "__wrapped__");
        if (v || b) {
          var m = v ? e.value() : e,
            A = b ? t.value() : t;
          return o || (o = new aa()), i(m, A, r, n, o);
        }
      }
      return d ? (o || (o = new aa()), xN(e, t, r, n, i, o)) : !1;
    }
    Vg.exports = LN;
  });
  var sa = c((cH, kg) => {
    var PN = Ug(),
      Bg = it();
    function Xg(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Bg(e) && !Bg(t))
        ? e !== e && t !== t
        : PN(e, t, r, n, Xg, i);
    }
    kg.exports = Xg;
  });
  var Wg = c((lH, Hg) => {
    var qN = jo(),
      FN = sa(),
      MN = 1,
      DN = 2;
    function GN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          f = e[u],
          g = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(u in e)) return !1;
        } else {
          var p = new qN();
          if (n) var d = n(f, g, u, e, t, p);
          if (!(d === void 0 ? FN(g, f, MN | DN, n, p) : d)) return !1;
        }
      }
      return !0;
    }
    Hg.exports = GN;
  });
  var ua = c((fH, jg) => {
    var VN = Je();
    function UN(e) {
      return e === e && !VN(e);
    }
    jg.exports = UN;
  });
  var Kg = c((dH, zg) => {
    var BN = ua(),
      XN = Lr();
    function kN(e) {
      for (var t = XN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, BN(i)];
      }
      return t;
    }
    zg.exports = kN;
  });
  var ca = c((pH, $g) => {
    function HN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    $g.exports = HN;
  });
  var Qg = c((gH, Yg) => {
    var WN = Wg(),
      jN = Kg(),
      zN = ca();
    function KN(e) {
      var t = jN(e);
      return t.length == 1 && t[0][2]
        ? zN(t[0][0], t[0][1])
        : function (r) {
            return r === e || WN(r, e, t);
          };
    }
    Yg.exports = KN;
  });
  var Pr = c((hH, Zg) => {
    var $N = gt(),
      YN = it(),
      QN = "[object Symbol]";
    function ZN(e) {
      return typeof e == "symbol" || (YN(e) && $N(e) == QN);
    }
    Zg.exports = ZN;
  });
  var Gn = c((vH, Jg) => {
    var JN = ye(),
      eL = Pr(),
      tL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      rL = /^\w*$/;
    function nL(e, t) {
      if (JN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        eL(e)
        ? !0
        : rL.test(e) || !tL.test(e) || (t != null && e in Object(t));
    }
    Jg.exports = nL;
  });
  var rh = c((EH, th) => {
    var eh = wn(),
      iL = "Expected a function";
    function la(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(iL);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (la.Cache || eh)()), r;
    }
    la.Cache = eh;
    th.exports = la;
  });
  var ih = c((yH, nh) => {
    var oL = rh(),
      aL = 500;
    function sL(e) {
      var t = oL(e, function (n) {
          return r.size === aL && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    nh.exports = sL;
  });
  var ah = c((mH, oh) => {
    var uL = ih(),
      cL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      lL = /\\(\\)?/g,
      fL = uL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(cL, function (r, n, i, o) {
            t.push(i ? o.replace(lL, "$1") : n || r);
          }),
          t
        );
      });
    oh.exports = fL;
  });
  var fa = c((_H, sh) => {
    function dL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    sh.exports = dL;
  });
  var ph = c((bH, dh) => {
    var uh = Mt(),
      pL = fa(),
      gL = ye(),
      hL = Pr(),
      vL = 1 / 0,
      ch = uh ? uh.prototype : void 0,
      lh = ch ? ch.toString : void 0;
    function fh(e) {
      if (typeof e == "string") return e;
      if (gL(e)) return pL(e, fh) + "";
      if (hL(e)) return lh ? lh.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -vL ? "-0" : t;
    }
    dh.exports = fh;
  });
  var hh = c((TH, gh) => {
    var EL = ph();
    function yL(e) {
      return e == null ? "" : EL(e);
    }
    gh.exports = yL;
  });
  var qr = c((IH, vh) => {
    var mL = ye(),
      _L = Gn(),
      bL = ah(),
      TL = hh();
    function IL(e, t) {
      return mL(e) ? e : _L(e, t) ? [e] : bL(TL(e));
    }
    vh.exports = IL;
  });
  var zt = c((OH, Eh) => {
    var OL = Pr(),
      AL = 1 / 0;
    function SL(e) {
      if (typeof e == "string" || OL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -AL ? "-0" : t;
    }
    Eh.exports = SL;
  });
  var Vn = c((AH, yh) => {
    var wL = qr(),
      xL = zt();
    function CL(e, t) {
      t = wL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[xL(t[r++])];
      return r && r == n ? e : void 0;
    }
    yh.exports = CL;
  });
  var Un = c((SH, mh) => {
    var RL = Vn();
    function NL(e, t, r) {
      var n = e == null ? void 0 : RL(e, t);
      return n === void 0 ? r : n;
    }
    mh.exports = NL;
  });
  var bh = c((wH, _h) => {
    function LL(e, t) {
      return e != null && t in Object(e);
    }
    _h.exports = LL;
  });
  var Ih = c((xH, Th) => {
    var PL = qr(),
      qL = xr(),
      FL = ye(),
      ML = Nn(),
      DL = Ln(),
      GL = zt();
    function VL(e, t, r) {
      t = PL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = GL(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && DL(i) && ML(a, i) && (FL(e) || qL(e)));
    }
    Th.exports = VL;
  });
  var Ah = c((CH, Oh) => {
    var UL = bh(),
      BL = Ih();
    function XL(e, t) {
      return e != null && BL(e, t, UL);
    }
    Oh.exports = XL;
  });
  var wh = c((RH, Sh) => {
    var kL = sa(),
      HL = Un(),
      WL = Ah(),
      jL = Gn(),
      zL = ua(),
      KL = ca(),
      $L = zt(),
      YL = 1,
      QL = 2;
    function ZL(e, t) {
      return jL(e) && zL(t)
        ? KL($L(e), t)
        : function (r) {
            var n = HL(r, e);
            return n === void 0 && n === t ? WL(r, e) : kL(t, n, YL | QL);
          };
    }
    Sh.exports = ZL;
  });
  var Bn = c((NH, xh) => {
    function JL(e) {
      return e;
    }
    xh.exports = JL;
  });
  var da = c((LH, Ch) => {
    function eP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Ch.exports = eP;
  });
  var Nh = c((PH, Rh) => {
    var tP = Vn();
    function rP(e) {
      return function (t) {
        return tP(t, e);
      };
    }
    Rh.exports = rP;
  });
  var Ph = c((qH, Lh) => {
    var nP = da(),
      iP = Nh(),
      oP = Gn(),
      aP = zt();
    function sP(e) {
      return oP(e) ? nP(aP(e)) : iP(e);
    }
    Lh.exports = sP;
  });
  var vt = c((FH, qh) => {
    var uP = Qg(),
      cP = wh(),
      lP = Bn(),
      fP = ye(),
      dP = Ph();
    function pP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? lP
        : typeof e == "object"
        ? fP(e)
          ? cP(e[0], e[1])
          : uP(e)
        : dP(e);
    }
    qh.exports = pP;
  });
  var pa = c((MH, Fh) => {
    var gP = vt(),
      hP = It(),
      vP = Lr();
    function EP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!hP(t)) {
          var o = gP(r, 3);
          (t = vP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Fh.exports = EP;
  });
  var ga = c((DH, Mh) => {
    function yP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Mh.exports = yP;
  });
  var Gh = c((GH, Dh) => {
    var mP = /\s/;
    function _P(e) {
      for (var t = e.length; t-- && mP.test(e.charAt(t)); );
      return t;
    }
    Dh.exports = _P;
  });
  var Uh = c((VH, Vh) => {
    var bP = Gh(),
      TP = /^\s+/;
    function IP(e) {
      return e && e.slice(0, bP(e) + 1).replace(TP, "");
    }
    Vh.exports = IP;
  });
  var Xn = c((UH, kh) => {
    var OP = Uh(),
      Bh = Je(),
      AP = Pr(),
      Xh = 0 / 0,
      SP = /^[-+]0x[0-9a-f]+$/i,
      wP = /^0b[01]+$/i,
      xP = /^0o[0-7]+$/i,
      CP = parseInt;
    function RP(e) {
      if (typeof e == "number") return e;
      if (AP(e)) return Xh;
      if (Bh(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Bh(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = OP(e);
      var r = wP.test(e);
      return r || xP.test(e) ? CP(e.slice(2), r ? 2 : 8) : SP.test(e) ? Xh : +e;
    }
    kh.exports = RP;
  });
  var jh = c((BH, Wh) => {
    var NP = Xn(),
      Hh = 1 / 0,
      LP = 17976931348623157e292;
    function PP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = NP(e)), e === Hh || e === -Hh)) {
        var t = e < 0 ? -1 : 1;
        return t * LP;
      }
      return e === e ? e : 0;
    }
    Wh.exports = PP;
  });
  var ha = c((XH, zh) => {
    var qP = jh();
    function FP(e) {
      var t = qP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    zh.exports = FP;
  });
  var $h = c((kH, Kh) => {
    var MP = ga(),
      DP = vt(),
      GP = ha(),
      VP = Math.max;
    function UP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : GP(r);
      return i < 0 && (i = VP(n + i, 0)), MP(e, DP(t, 3), i);
    }
    Kh.exports = UP;
  });
  var va = c((HH, Yh) => {
    var BP = pa(),
      XP = $h(),
      kP = BP(XP);
    Yh.exports = kP;
  });
  var Jh = {};
  Ce(Jh, {
    ELEMENT_MATCHES: () => HP,
    FLEX_PREFIXED: () => Ea,
    IS_BROWSER_ENV: () => ke,
    TRANSFORM_PREFIXED: () => Et,
    TRANSFORM_STYLE_PREFIXED: () => Hn,
    withBrowser: () => kn,
  });
  var Zh,
    ke,
    kn,
    HP,
    Ea,
    Et,
    Qh,
    Hn,
    Wn = ce(() => {
      "use strict";
      (Zh = ie(va())),
        (ke = typeof window < "u"),
        (kn = (e, t) => (ke ? e() : t)),
        (HP = kn(() =>
          (0, Zh.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Ea = kn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (Et = kn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Qh = Et.split("transform")[0]),
        (Hn = Qh ? Qh + "TransformStyle" : "transformStyle");
    });
  var ya = c((WH, iv) => {
    var WP = 4,
      jP = 0.001,
      zP = 1e-7,
      KP = 10,
      Fr = 11,
      jn = 1 / (Fr - 1),
      $P = typeof Float32Array == "function";
    function ev(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function tv(e, t) {
      return 3 * t - 6 * e;
    }
    function rv(e) {
      return 3 * e;
    }
    function zn(e, t, r) {
      return ((ev(t, r) * e + tv(t, r)) * e + rv(t)) * e;
    }
    function nv(e, t, r) {
      return 3 * ev(t, r) * e * e + 2 * tv(t, r) * e + rv(t);
    }
    function YP(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = zn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > zP && ++s < KP);
      return a;
    }
    function QP(e, t, r, n) {
      for (var i = 0; i < WP; ++i) {
        var o = nv(t, r, n);
        if (o === 0) return t;
        var a = zn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    iv.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = $P ? new Float32Array(Fr) : new Array(Fr);
      if (t !== r || n !== i)
        for (var a = 0; a < Fr; ++a) o[a] = zn(a * jn, t, n);
      function s(u) {
        for (var f = 0, g = 1, p = Fr - 1; g !== p && o[g] <= u; ++g) f += jn;
        --g;
        var d = (u - o[g]) / (o[g + 1] - o[g]),
          v = f + d * jn,
          b = nv(v, t, n);
        return b >= jP ? QP(u, v, t, n) : b === 0 ? v : YP(u, f, f + jn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : zn(s(f), r, i);
      };
    };
  });
  var Dr = {};
  Ce(Dr, {
    bounce: () => Pq,
    bouncePast: () => qq,
    ease: () => ZP,
    easeIn: () => JP,
    easeInOut: () => tq,
    easeOut: () => eq,
    inBack: () => Oq,
    inCirc: () => _q,
    inCubic: () => oq,
    inElastic: () => wq,
    inExpo: () => Eq,
    inOutBack: () => Sq,
    inOutCirc: () => Tq,
    inOutCubic: () => sq,
    inOutElastic: () => Cq,
    inOutExpo: () => mq,
    inOutQuad: () => iq,
    inOutQuart: () => lq,
    inOutQuint: () => pq,
    inOutSine: () => vq,
    inQuad: () => rq,
    inQuart: () => uq,
    inQuint: () => fq,
    inSine: () => gq,
    outBack: () => Aq,
    outBounce: () => Iq,
    outCirc: () => bq,
    outCubic: () => aq,
    outElastic: () => xq,
    outExpo: () => yq,
    outQuad: () => nq,
    outQuart: () => cq,
    outQuint: () => dq,
    outSine: () => hq,
    swingFrom: () => Nq,
    swingFromTo: () => Rq,
    swingTo: () => Lq,
  });
  function rq(e) {
    return Math.pow(e, 2);
  }
  function nq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function iq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function oq(e) {
    return Math.pow(e, 3);
  }
  function aq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function sq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function uq(e) {
    return Math.pow(e, 4);
  }
  function cq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function lq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function fq(e) {
    return Math.pow(e, 5);
  }
  function dq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function pq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function gq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function hq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function vq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function Eq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function yq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function mq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function _q(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function bq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Tq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Iq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Oq(e) {
    let t = ot;
    return e * e * ((t + 1) * e - t);
  }
  function Aq(e) {
    let t = ot;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Sq(e) {
    let t = ot;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function wq(e) {
    let t = ot,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function xq(e) {
    let t = ot,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Cq(e) {
    let t = ot,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Rq(e) {
    let t = ot;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Nq(e) {
    let t = ot;
    return e * e * ((t + 1) * e - t);
  }
  function Lq(e) {
    let t = ot;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Pq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function qq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Mr,
    ot,
    ZP,
    JP,
    eq,
    tq,
    ma = ce(() => {
      "use strict";
      (Mr = ie(ya())),
        (ot = 1.70158),
        (ZP = (0, Mr.default)(0.25, 0.1, 0.25, 1)),
        (JP = (0, Mr.default)(0.42, 0, 1, 1)),
        (eq = (0, Mr.default)(0, 0, 0.58, 1)),
        (tq = (0, Mr.default)(0.42, 0, 0.58, 1));
    });
  var av = {};
  Ce(av, {
    applyEasing: () => Mq,
    createBezierEasing: () => Fq,
    optimizeFloat: () => Gr,
  });
  function Gr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Fq(e) {
    return (0, ov.default)(...e);
  }
  function Mq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Gr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Dr[e] ? Dr[e](t) : t);
  }
  var ov,
    _a = ce(() => {
      "use strict";
      ma();
      ov = ie(ya());
    });
  var cv = {};
  Ce(cv, {
    createElementState: () => uv,
    ixElements: () => Yq,
    mergeActionState: () => ba,
  });
  function uv(e, t, r, n, i) {
    let o =
      r === Dq ? (0, Kt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Kt.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function ba(e, t, r, n, i) {
    let o = Zq(i);
    return (0, Kt.mergeIn)(e, [t, $q, r], n, o);
  }
  function Zq(e) {
    let { config: t } = e;
    return Qq.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var Kt,
    zH,
    Dq,
    KH,
    Gq,
    Vq,
    Uq,
    Bq,
    Xq,
    kq,
    Hq,
    Wq,
    jq,
    zq,
    Kq,
    sv,
    $q,
    Yq,
    Qq,
    lv = ce(() => {
      "use strict";
      Kt = ie(Vt());
      Ne();
      ({
        HTML_ELEMENT: zH,
        PLAIN_OBJECT: Dq,
        ABSTRACT_NODE: KH,
        CONFIG_X_VALUE: Gq,
        CONFIG_Y_VALUE: Vq,
        CONFIG_Z_VALUE: Uq,
        CONFIG_VALUE: Bq,
        CONFIG_X_UNIT: Xq,
        CONFIG_Y_UNIT: kq,
        CONFIG_Z_UNIT: Hq,
        CONFIG_UNIT: Wq,
      } = Te),
        ({
          IX2_SESSION_STOPPED: jq,
          IX2_INSTANCE_ADDED: zq,
          IX2_ELEMENT_STATE_CHANGED: Kq,
        } = Ee),
        (sv = {}),
        ($q = "refState"),
        (Yq = (e = sv, t = {}) => {
          switch (t.type) {
            case jq:
              return sv;
            case zq: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, Kt.getIn)(u, [r, n]) !== n && (u = uv(u, n, a, r, o)),
                ba(u, r, s, i, o)
              );
            }
            case Kq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return ba(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      Qq = [
        [Gq, Xq],
        [Vq, kq],
        [Uq, Hq],
        [Bq, Wq],
      ];
    });
  var fv = c((me) => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: !0 });
    me.renderPlugin =
      me.getPluginOrigin =
      me.getPluginDuration =
      me.getPluginDestination =
      me.getPluginConfig =
      me.createPluginInstance =
      me.clearPlugin =
        void 0;
    var Jq = (e) => e.value;
    me.getPluginConfig = Jq;
    var eF = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    me.getPluginDuration = eF;
    var tF = (e) => e || { value: 0 };
    me.getPluginOrigin = tF;
    var rF = (e) => ({ value: e.value });
    me.getPluginDestination = rF;
    var nF = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    me.createPluginInstance = nF;
    var iF = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    me.renderPlugin = iF;
    var oF = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    me.clearPlugin = oF;
  });
  var pv = c((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    _e.renderPlugin =
      _e.getPluginOrigin =
      _e.getPluginDuration =
      _e.getPluginDestination =
      _e.getPluginConfig =
      _e.createPluginInstance =
      _e.clearPlugin =
        void 0;
    var aF = (e) => document.querySelector(`[data-w-id="${e}"]`),
      sF = () => window.Webflow.require("spline"),
      uF = (e, t) => e.filter((r) => !t.includes(r)),
      cF = (e, t) => e.value[t];
    _e.getPluginConfig = cF;
    var lF = () => null;
    _e.getPluginDuration = lF;
    var dv = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      fF = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = uF(n, o);
          return a.length ? a.reduce((u, f) => ((u[f] = dv[f]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = dv[a]), o), {});
      };
    _e.getPluginOrigin = fF;
    var dF = (e) => e.value;
    _e.getPluginDestination = dF;
    var pF = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? aF(n) : null;
    };
    _e.createPluginInstance = pF;
    var gF = (e, t, r) => {
      let n = sF(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (u.position.x = f.positionX),
            f.positionY != null && (u.position.y = f.positionY),
            f.positionZ != null && (u.position.z = f.positionZ),
            f.rotationX != null && (u.rotation.x = f.rotationX),
            f.rotationY != null && (u.rotation.y = f.rotationY),
            f.rotationZ != null && (u.rotation.z = f.rotationZ),
            f.scaleX != null && (u.scale.x = f.scaleX),
            f.scaleY != null && (u.scale.y = f.scaleY),
            f.scaleZ != null && (u.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    _e.renderPlugin = gF;
    var hF = () => null;
    _e.clearPlugin = hF;
  });
  var Ia = c((Ta) => {
    "use strict";
    Object.defineProperty(Ta, "__esModule", { value: !0 });
    Ta.normalizeColor = vF;
    var gv = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function vF(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof gv[o] == "string" ? gv[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)))
          : u.length === 6 &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          g = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let d = (1 - Math.abs(2 * p - 1)) * g,
          v = d * (1 - Math.abs(((f / 60) % 2) - 1)),
          b = p - d / 2,
          m,
          A,
          E;
        f >= 0 && f < 60
          ? ((m = d), (A = v), (E = 0))
          : f >= 60 && f < 120
          ? ((m = v), (A = d), (E = 0))
          : f >= 120 && f < 180
          ? ((m = 0), (A = d), (E = v))
          : f >= 180 && f < 240
          ? ((m = 0), (A = v), (E = d))
          : f >= 240 && f < 300
          ? ((m = v), (A = 0), (E = d))
          : ((m = d), (A = 0), (E = v)),
          (t = Math.round((m + b) * 255)),
          (r = Math.round((A + b) * 255)),
          (n = Math.round((E + b) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          g = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100,
          d = (1 - Math.abs(2 * p - 1)) * g,
          v = d * (1 - Math.abs(((f / 60) % 2) - 1)),
          b = p - d / 2,
          m,
          A,
          E;
        f >= 0 && f < 60
          ? ((m = d), (A = v), (E = 0))
          : f >= 60 && f < 120
          ? ((m = v), (A = d), (E = 0))
          : f >= 120 && f < 180
          ? ((m = 0), (A = d), (E = v))
          : f >= 180 && f < 240
          ? ((m = 0), (A = v), (E = d))
          : f >= 240 && f < 300
          ? ((m = v), (A = 0), (E = d))
          : ((m = d), (A = 0), (E = v)),
          (t = Math.round((m + b) * 255)),
          (r = Math.round((A + b) * 255)),
          (n = Math.round((E + b) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var hv = c((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    be.renderPlugin =
      be.getPluginOrigin =
      be.getPluginDuration =
      be.getPluginDestination =
      be.getPluginConfig =
      be.createPluginInstance =
      be.clearPlugin =
        void 0;
    var EF = Ia(),
      yF = (e, t) => e.value[t];
    be.getPluginConfig = yF;
    var mF = () => null;
    be.getPluginDuration = mF;
    var _F = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, EF.normalizeColor)(i);
    };
    be.getPluginOrigin = _F;
    var bF = (e) => e.value;
    be.getPluginDestination = bF;
    var TF = () => null;
    be.createPluginInstance = TF;
    var IF = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: f, alpha: g } = o,
        p;
      a != null && (p = a + i),
        s != null &&
          f != null &&
          u != null &&
          g != null &&
          (p = `rgba(${s}, ${u}, ${f}, ${g})`),
        p != null && document.documentElement.style.setProperty(n, p);
    };
    be.renderPlugin = IF;
    var OF = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    be.clearPlugin = OF;
  });
  var vv = c((Kn) => {
    "use strict";
    var Aa = on().default;
    Object.defineProperty(Kn, "__esModule", { value: !0 });
    Kn.pluginMethodMap = void 0;
    var Oa = (Ne(), ze(Tf)),
      AF = Aa(fv()),
      SF = Aa(pv()),
      wF = Aa(hv()),
      JH = (Kn.pluginMethodMap = new Map([
        [Oa.ActionTypeConsts.PLUGIN_LOTTIE, { ...AF }],
        [Oa.ActionTypeConsts.PLUGIN_SPLINE, { ...SF }],
        [Oa.ActionTypeConsts.PLUGIN_VARIABLE, { ...wF }],
      ]));
  });
  var Ev = {};
  Ce(Ev, {
    clearPlugin: () => Na,
    createPluginInstance: () => CF,
    getPluginConfig: () => wa,
    getPluginDestination: () => Ca,
    getPluginDuration: () => xF,
    getPluginOrigin: () => xa,
    isPluginType: () => At,
    renderPlugin: () => Ra,
  });
  function At(e) {
    return Sa.pluginMethodMap.has(e);
  }
  var Sa,
    St,
    wa,
    xa,
    xF,
    Ca,
    CF,
    Ra,
    Na,
    La = ce(() => {
      "use strict";
      Wn();
      Sa = ie(vv());
      (St = (e) => (t) => {
        if (!ke) return () => null;
        let r = Sa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (wa = St("getPluginConfig")),
        (xa = St("getPluginOrigin")),
        (xF = St("getPluginDuration")),
        (Ca = St("getPluginDestination")),
        (CF = St("createPluginInstance")),
        (Ra = St("renderPlugin")),
        (Na = St("clearPlugin"));
    });
  var mv = c((rW, yv) => {
    function RF(e, t) {
      return e == null || e !== e ? t : e;
    }
    yv.exports = RF;
  });
  var bv = c((nW, _v) => {
    function NF(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    _v.exports = NF;
  });
  var Iv = c((iW, Tv) => {
    function LF(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Tv.exports = LF;
  });
  var Av = c((oW, Ov) => {
    var PF = Iv(),
      qF = PF();
    Ov.exports = qF;
  });
  var Pa = c((aW, Sv) => {
    var FF = Av(),
      MF = Lr();
    function DF(e, t) {
      return e && FF(e, t, MF);
    }
    Sv.exports = DF;
  });
  var xv = c((sW, wv) => {
    var GF = It();
    function VF(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!GF(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    wv.exports = VF;
  });
  var qa = c((uW, Cv) => {
    var UF = Pa(),
      BF = xv(),
      XF = BF(UF);
    Cv.exports = XF;
  });
  var Nv = c((cW, Rv) => {
    function kF(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Rv.exports = kF;
  });
  var Pv = c((lW, Lv) => {
    var HF = bv(),
      WF = qa(),
      jF = vt(),
      zF = Nv(),
      KF = ye();
    function $F(e, t, r) {
      var n = KF(e) ? HF : zF,
        i = arguments.length < 3;
      return n(e, jF(t, 4), r, i, WF);
    }
    Lv.exports = $F;
  });
  var Fv = c((fW, qv) => {
    var YF = ga(),
      QF = vt(),
      ZF = ha(),
      JF = Math.max,
      eM = Math.min;
    function tM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = ZF(r)), (i = r < 0 ? JF(n + i, 0) : eM(i, n - 1))),
        YF(e, QF(t, 3), i, !0)
      );
    }
    qv.exports = tM;
  });
  var Dv = c((dW, Mv) => {
    var rM = pa(),
      nM = Fv(),
      iM = rM(nM);
    Mv.exports = iM;
  });
  function Gv(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function oM(e, t) {
    if (Gv(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Gv(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var Fa,
    Vv = ce(() => {
      "use strict";
      Fa = oM;
    });
  var nE = {};
  Ce(nE, {
    cleanupHTMLElement: () => rD,
    clearAllStyles: () => tD,
    clearObjectCache: () => TM,
    getActionListProgress: () => iD,
    getAffectedElements: () => Ua,
    getComputedStyle: () => RM,
    getDestinationValues: () => DM,
    getElementId: () => SM,
    getInstanceId: () => OM,
    getInstanceOrigin: () => PM,
    getItemConfigByKey: () => MM,
    getMaxDurationItemIndex: () => rE,
    getNamespacedParameterId: () => sD,
    getRenderType: () => Jv,
    getStyleProp: () => GM,
    mediaQueriesEqual: () => cD,
    observeStore: () => CM,
    reduceListToGroup: () => oD,
    reifyState: () => wM,
    renderHTMLElement: () => VM,
    shallowEqual: () => Fa,
    shouldAllowMediaQuery: () => uD,
    shouldNamespaceEventParameter: () => aD,
    stringifyTarget: () => lD,
  });
  function TM() {
    $n.clear();
  }
  function OM() {
    return "i" + IM++;
  }
  function SM(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + AM++;
  }
  function wM({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, Jn.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function CM({ store: e, select: t, onChange: r, comparator: n = xM }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function Xv(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Ua({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (P, T) =>
          P.concat(
            Ua({
              config: { target: T },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: f,
        getSiblingElements: g,
        matchSelector: p,
        elementContains: d,
        isSiblingNode: v,
      } = i,
      { target: b } = e;
    if (!b) return [];
    let {
      id: m,
      objectId: A,
      selector: E,
      selectorGuids: w,
      appliesTo: S,
      useEventTarget: C,
    } = Xv(b);
    if (A) return [$n.has(A) ? $n.get(A) : $n.set(A, {}).get(A)];
    if (S === Vo.PAGE) {
      let P = a(m);
      return P ? [P] : [];
    }
    let x = (t?.action?.config?.affectedElements ?? {})[m || E] || {},
      G = !!(x.id || x.selector),
      B,
      X,
      W,
      Q = t && s(Xv(t.target));
    if (
      (G
        ? ((B = x.limitAffectedElements), (X = Q), (W = s(x)))
        : (X = W = s({ id: m, selector: E, selectorGuids: w })),
      t && C)
    ) {
      let P = r && (W || C === !0) ? [r] : u(Q);
      if (W) {
        if (C === mM) return u(W).filter((T) => P.some((N) => d(T, N)));
        if (C === Uv) return u(W).filter((T) => P.some((N) => d(N, T)));
        if (C === Bv) return u(W).filter((T) => P.some((N) => v(N, T)));
      }
      return P;
    }
    return X == null || W == null
      ? []
      : ke && n
      ? u(W).filter((P) => n.contains(P))
      : B === Uv
      ? u(X, W)
      : B === yM
      ? f(u(X)).filter(p(W))
      : B === Bv
      ? g(u(X)).filter(p(W))
      : u(W);
  }
  function RM({ element: e, actionItem: t }) {
    if (!ke) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case Jt:
      case er:
      case tr:
      case rr:
      case ti:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function PM(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (At(a)) return xa(a)(t[a], n);
    switch (n.actionTypeId) {
      case Yt:
      case Qt:
      case Zt:
      case Xr:
        return t[n.actionTypeId] || Ba[n.actionTypeId];
      case kr:
        return NM(t[n.actionTypeId], n.config.filters);
      case Hr:
        return LM(t[n.actionTypeId], n.config.fontVariations);
      case Yv:
        return { value: (0, at.default)(parseFloat(o(e, Qn)), 1) };
      case Jt: {
        let s = o(e, et),
          u = o(e, tt),
          f,
          g;
        return (
          n.config.widthUnit === yt
            ? (f = kv.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, at.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === yt
            ? (g = kv.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (g = (0, at.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: f, heightValue: g }
        );
      }
      case er:
      case tr:
      case rr:
        return ZM({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ti:
        return { value: (0, at.default)(o(e, Zn), r.display) };
      case bM:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function DM({ element: e, actionItem: t, elementApi: r }) {
    if (At(t.actionTypeId)) return Ca(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case Yt:
      case Qt:
      case Zt:
      case Xr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case Jt: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: f } = t.config;
        if (!ke) return { widthValue: u, heightValue: f };
        if (a === yt) {
          let g = n(e, et);
          i(e, et, ""), (u = o(e, "offsetWidth")), i(e, et, g);
        }
        if (s === yt) {
          let g = n(e, tt);
          i(e, tt, ""), (f = o(e, "offsetHeight")), i(e, tt, g);
        }
        return { widthValue: u, heightValue: f };
      }
      case er:
      case tr:
      case rr: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = r,
            f = u(e, s),
            g = (0, jv.normalizeColor)(f);
          return {
            rValue: g.red,
            gValue: g.green,
            bValue: g.blue,
            aValue: g.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case kr:
        return t.config.filters.reduce(qM, {});
      case Hr:
        return t.config.fontVariations.reduce(FM, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function Jv(e) {
    if (/^TRANSFORM_/.test(e)) return Kv;
    if (/^STYLE_/.test(e)) return Ga;
    if (/^GENERAL_/.test(e)) return Da;
    if (/^PLUGIN_/.test(e)) return $v;
  }
  function GM(e, t) {
    return e === Ga ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function VM(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case Kv:
        return HM(e, t, r, i, a);
      case Ga:
        return JM(e, t, r, i, o, a);
      case Da:
        return eD(e, i, a);
      case $v: {
        let { actionTypeId: f } = i;
        if (At(f)) return Ra(f)(u, t, i);
      }
    }
  }
  function HM(e, t, r, n, i) {
    let o = kM
        .map((s) => {
          let u = Ba[s],
            {
              xValue: f = u.xValue,
              yValue: g = u.yValue,
              zValue: p = u.zValue,
              xUnit: d = "",
              yUnit: v = "",
              zUnit: b = "",
            } = t[s] || {};
          switch (s) {
            case Yt:
              return `${uM}(${f}${d}, ${g}${v}, ${p}${b})`;
            case Qt:
              return `${cM}(${f}${d}, ${g}${v}, ${p}${b})`;
            case Zt:
              return `${lM}(${f}${d}) ${fM}(${g}${v}) ${dM}(${p}${b})`;
            case Xr:
              return `${pM}(${f}${d}, ${g}${v})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    wt(e, Et, i), a(e, Et, o), zM(n, r) && a(e, Hn, gM);
  }
  function WM(e, t, r, n) {
    let i = (0, Jn.default)(t, (a, s, u) => `${a} ${u}(${s}${XM(u, r)})`, ""),
      { setStyle: o } = n;
    wt(e, Vr, n), o(e, Vr, i);
  }
  function jM(e, t, r, n) {
    let i = (0, Jn.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    wt(e, Ur, n), o(e, Ur, i);
  }
  function zM({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === Yt && n !== void 0) ||
      (e === Qt && n !== void 0) ||
      (e === Zt && (t !== void 0 || r !== void 0))
    );
  }
  function QM(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function ZM({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Va[t],
      o = n(e, i),
      a = $M.test(o) ? o : r[i],
      s = QM(YM, a).split(Br);
    return {
      rValue: (0, at.default)(parseInt(s[0], 10), 255),
      gValue: (0, at.default)(parseInt(s[1], 10), 255),
      bValue: (0, at.default)(parseInt(s[2], 10), 255),
      aValue: (0, at.default)(parseFloat(s[3]), 1),
    };
  }
  function JM(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case Jt: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: f, heightValue: g } = r;
        f !== void 0 && (s === yt && (s = "px"), wt(e, et, o), a(e, et, f + s)),
          g !== void 0 &&
            (u === yt && (u = "px"), wt(e, tt, o), a(e, tt, g + u));
        break;
      }
      case kr: {
        WM(e, r, n.config, o);
        break;
      }
      case Hr: {
        jM(e, r, n.config, o);
        break;
      }
      case er:
      case tr:
      case rr: {
        let s = Va[n.actionTypeId],
          u = Math.round(r.rValue),
          f = Math.round(r.gValue),
          g = Math.round(r.bValue),
          p = r.aValue;
        wt(e, s, o),
          a(e, s, p >= 1 ? `rgb(${u},${f},${g})` : `rgba(${u},${f},${g},${p})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        wt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function eD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ti: {
        let { value: i } = t.config;
        i === hM && ke ? n(e, Zn, Ea) : n(e, Zn, i);
        return;
      }
    }
  }
  function wt(e, t, r) {
    if (!ke) return;
    let n = Zv[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, $t);
    if (!a) {
      o(e, $t, n);
      return;
    }
    let s = a.split(Br).map(Qv);
    s.indexOf(n) === -1 && o(e, $t, s.concat(n).join(Br));
  }
  function eE(e, t, r) {
    if (!ke) return;
    let n = Zv[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, $t);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        $t,
        a
          .split(Br)
          .map(Qv)
          .filter((s) => s !== n)
          .join(Br)
      );
  }
  function tD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        f = i[u];
      f && Hv({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Hv({ actionList: i[o], elementApi: t });
      });
  }
  function Hv({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Wv({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Wv({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Wv({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      At(o)
        ? (s = (u) => Na(o)(u, i))
        : (s = tE({ effect: nD, actionTypeId: o, elementApi: r })),
        Ua({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function rD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === Jt) {
      let { config: a } = t;
      a.widthUnit === yt && n(e, et, ""), a.heightUnit === yt && n(e, tt, "");
    }
    i(e, $t) && tE({ effect: eE, actionTypeId: o, elementApi: r })(e);
  }
  function nD(e, t, r) {
    let { setStyle: n } = r;
    eE(e, t, r), n(e, t, ""), t === Et && n(e, Hn, "");
  }
  function rE(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function iD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, f) => {
        if (n && f === 0) return;
        let { actionItems: g } = u,
          p = g[rE(g)],
          { config: d, actionTypeId: v } = p;
        i.id === p.id && (s = a + o);
        let b = Jv(v) === Da ? 0 : d.duration;
        a += d.delay + b;
      }),
      a > 0 ? Gr(s / a) : 0
    );
  }
  function oD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, ei.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: f }) => f.some(a));
        }),
      (0, ei.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function aD(e, { basedOn: t }) {
    return (
      (e === Xe.SCROLLING_IN_VIEW && (t === Ze.ELEMENT || t == null)) ||
      (e === Xe.MOUSE_MOVE && t === Ze.ELEMENT)
    );
  }
  function sD(e, t) {
    return e + _M + t;
  }
  function uD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function cD(e, t) {
    return Fa(e && e.sort(), t && t.sort());
  }
  function lD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ma + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ma + r + Ma + n;
  }
  var at,
    Jn,
    Yn,
    ei,
    jv,
    aM,
    sM,
    uM,
    cM,
    lM,
    fM,
    dM,
    pM,
    gM,
    hM,
    Qn,
    Vr,
    Ur,
    et,
    tt,
    zv,
    vM,
    EM,
    Uv,
    yM,
    Bv,
    mM,
    Zn,
    $t,
    yt,
    Br,
    _M,
    Ma,
    Kv,
    Da,
    Ga,
    $v,
    Yt,
    Qt,
    Zt,
    Xr,
    Yv,
    kr,
    Hr,
    Jt,
    er,
    tr,
    rr,
    ti,
    bM,
    Qv,
    Va,
    Zv,
    $n,
    IM,
    AM,
    xM,
    kv,
    NM,
    LM,
    qM,
    FM,
    MM,
    Ba,
    UM,
    BM,
    XM,
    kM,
    KM,
    $M,
    YM,
    tE,
    iE = ce(() => {
      "use strict";
      (at = ie(mv())), (Jn = ie(Pv())), (Yn = ie(Dv())), (ei = ie(Vt()));
      Ne();
      Vv();
      _a();
      jv = ie(Ia());
      La();
      Wn();
      ({
        BACKGROUND: aM,
        TRANSFORM: sM,
        TRANSLATE_3D: uM,
        SCALE_3D: cM,
        ROTATE_X: lM,
        ROTATE_Y: fM,
        ROTATE_Z: dM,
        SKEW: pM,
        PRESERVE_3D: gM,
        FLEX: hM,
        OPACITY: Qn,
        FILTER: Vr,
        FONT_VARIATION_SETTINGS: Ur,
        WIDTH: et,
        HEIGHT: tt,
        BACKGROUND_COLOR: zv,
        BORDER_COLOR: vM,
        COLOR: EM,
        CHILDREN: Uv,
        IMMEDIATE_CHILDREN: yM,
        SIBLINGS: Bv,
        PARENT: mM,
        DISPLAY: Zn,
        WILL_CHANGE: $t,
        AUTO: yt,
        COMMA_DELIMITER: Br,
        COLON_DELIMITER: _M,
        BAR_DELIMITER: Ma,
        RENDER_TRANSFORM: Kv,
        RENDER_GENERAL: Da,
        RENDER_STYLE: Ga,
        RENDER_PLUGIN: $v,
      } = Te),
        ({
          TRANSFORM_MOVE: Yt,
          TRANSFORM_SCALE: Qt,
          TRANSFORM_ROTATE: Zt,
          TRANSFORM_SKEW: Xr,
          STYLE_OPACITY: Yv,
          STYLE_FILTER: kr,
          STYLE_FONT_VARIATION: Hr,
          STYLE_SIZE: Jt,
          STYLE_BACKGROUND_COLOR: er,
          STYLE_BORDER: tr,
          STYLE_TEXT_COLOR: rr,
          GENERAL_DISPLAY: ti,
          OBJECT_VALUE: bM,
        } = Re),
        (Qv = (e) => e.trim()),
        (Va = Object.freeze({ [er]: zv, [tr]: vM, [rr]: EM })),
        (Zv = Object.freeze({
          [Et]: sM,
          [zv]: aM,
          [Qn]: Qn,
          [Vr]: Vr,
          [et]: et,
          [tt]: tt,
          [Ur]: Ur,
        })),
        ($n = new Map());
      IM = 1;
      AM = 1;
      xM = (e, t) => e === t;
      (kv = /px/),
        (NM = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = UM[n.type]), r),
            e || {}
          )),
        (LM = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = BM[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (qM = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (FM = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (MM = (e, t, r) => {
          if (At(e)) return wa(e)(r, t);
          switch (e) {
            case kr: {
              let n = (0, Yn.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Hr: {
              let n = (0, Yn.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Ba = {
        [Yt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Qt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Zt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Xr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (UM = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (BM = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (XM = (e, t) => {
          let r = (0, Yn.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (kM = Object.keys(Ba));
      (KM = "\\(([^)]+)\\)"), ($M = /^rgb/), (YM = RegExp(`rgba?${KM}`));
      tE =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case Yt:
            case Qt:
            case Zt:
            case Xr:
              e(n, Et, r);
              break;
            case kr:
              e(n, Vr, r);
              break;
            case Hr:
              e(n, Ur, r);
              break;
            case Yv:
              e(n, Qn, r);
              break;
            case Jt:
              e(n, et, r), e(n, tt, r);
              break;
            case er:
            case tr:
            case rr:
              e(n, Va[t], r);
              break;
            case ti:
              e(n, Zn, r);
              break;
          }
        };
    });
  var xt = c((Se) => {
    "use strict";
    var nr = on().default;
    Object.defineProperty(Se, "__esModule", { value: !0 });
    Se.IX2VanillaUtils =
      Se.IX2VanillaPlugins =
      Se.IX2ElementsReducer =
      Se.IX2Easings =
      Se.IX2EasingUtils =
      Se.IX2BrowserSupport =
        void 0;
    var fD = nr((Wn(), ze(Jh)));
    Se.IX2BrowserSupport = fD;
    var dD = nr((ma(), ze(Dr)));
    Se.IX2Easings = dD;
    var pD = nr((_a(), ze(av)));
    Se.IX2EasingUtils = pD;
    var gD = nr((lv(), ze(cv)));
    Se.IX2ElementsReducer = gD;
    var hD = nr((La(), ze(Ev)));
    Se.IX2VanillaPlugins = hD;
    var vD = nr((iE(), ze(nE)));
    Se.IX2VanillaUtils = vD;
  });
  var ni,
    st,
    ED,
    yD,
    mD,
    _D,
    bD,
    TD,
    ri,
    oE,
    ID,
    OD,
    Xa,
    AD,
    SD,
    wD,
    xD,
    aE,
    sE = ce(() => {
      "use strict";
      Ne();
      (ni = ie(xt())),
        (st = ie(Vt())),
        ({
          IX2_RAW_DATA_IMPORTED: ED,
          IX2_SESSION_STOPPED: yD,
          IX2_INSTANCE_ADDED: mD,
          IX2_INSTANCE_STARTED: _D,
          IX2_INSTANCE_REMOVED: bD,
          IX2_ANIMATION_FRAME_CHANGED: TD,
        } = Ee),
        ({
          optimizeFloat: ri,
          applyEasing: oE,
          createBezierEasing: ID,
        } = ni.IX2EasingUtils),
        ({ RENDER_GENERAL: OD } = Te),
        ({
          getItemConfigByKey: Xa,
          getRenderType: AD,
          getStyleProp: SD,
        } = ni.IX2VanillaUtils),
        (wD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: f,
              skipMotion: g,
              skipToValue: p,
            } = e,
            { parameters: d } = t.payload,
            v = Math.max(1 - a, 0.01),
            b = d[n];
          b == null && ((v = 1), (b = s));
          let m = Math.max(b, 0) || 0,
            A = ri(m - r),
            E = g ? p : ri(r + A * v),
            w = E * 100;
          if (E === r && e.current) return e;
          let S, C, R, x;
          for (let B = 0, { length: X } = i; B < X; B++) {
            let { keyframe: W, actionItems: Q } = i[B];
            if ((B === 0 && (S = Q[0]), w >= W)) {
              S = Q[0];
              let P = i[B + 1],
                T = P && w !== W;
              (C = T ? P.actionItems[0] : null),
                T && ((R = W / 100), (x = (P.keyframe - W) / 100));
            }
          }
          let G = {};
          if (S && !C)
            for (let B = 0, { length: X } = o; B < X; B++) {
              let W = o[B];
              G[W] = Xa(u, W, S.config);
            }
          else if (S && C && R !== void 0 && x !== void 0) {
            let B = (E - R) / x,
              X = S.config.easing,
              W = oE(X, B, f);
            for (let Q = 0, { length: P } = o; Q < P; Q++) {
              let T = o[Q],
                N = Xa(u, T, S.config),
                Z = (Xa(u, T, C.config) - N) * W + N;
              G[T] = Z;
            }
          }
          return (0, st.merge)(e, { position: E, current: G });
        }),
        (xD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: f,
              destinationKeys: g,
              pluginDuration: p,
              instanceDelay: d,
              customEasingFn: v,
              skipMotion: b,
            } = e,
            m = u.config.easing,
            { duration: A, delay: E } = u.config;
          p != null && (A = p),
            (E = d ?? E),
            a === OD ? (A = 0) : (o || b) && (A = E = 0);
          let { now: w } = t.payload;
          if (r && n) {
            let S = w - (i + E);
            if (s) {
              let B = w - i,
                X = A + E,
                W = ri(Math.min(Math.max(0, B / X), 1));
              e = (0, st.set)(e, "verboseTimeElapsed", X * W);
            }
            if (S < 0) return e;
            let C = ri(Math.min(Math.max(0, S / A), 1)),
              R = oE(m, C, v),
              x = {},
              G = null;
            return (
              g.length &&
                (G = g.reduce((B, X) => {
                  let W = f[X],
                    Q = parseFloat(n[X]) || 0,
                    T = (parseFloat(W) - Q) * R + Q;
                  return (B[X] = T), B;
                }, {})),
              (x.current = G),
              (x.position = C),
              C === 1 && ((x.active = !1), (x.complete = !0)),
              (0, st.merge)(e, x)
            );
          }
          return e;
        }),
        (aE = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case ED:
              return t.payload.ixInstances || Object.freeze({});
            case yD:
              return Object.freeze({});
            case mD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: f,
                  isCarrier: g,
                  origin: p,
                  destination: d,
                  immediate: v,
                  verbose: b,
                  continuous: m,
                  parameterId: A,
                  actionGroups: E,
                  smoothing: w,
                  restingValue: S,
                  pluginInstance: C,
                  pluginDuration: R,
                  instanceDelay: x,
                  skipMotion: G,
                  skipToValue: B,
                } = t.payload,
                { actionTypeId: X } = i,
                W = AD(X),
                Q = SD(W, X),
                P = Object.keys(d).filter(
                  (N) => d[N] != null && typeof d[N] != "string"
                ),
                { easing: T } = i.config;
              return (0, st.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: p,
                destination: d,
                destinationKeys: P,
                immediate: v,
                verbose: b,
                current: null,
                actionItem: i,
                actionTypeId: X,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                renderType: W,
                isCarrier: g,
                styleProp: Q,
                continuous: m,
                parameterId: A,
                actionGroups: E,
                smoothing: w,
                restingValue: S,
                pluginInstance: C,
                pluginDuration: R,
                instanceDelay: x,
                skipMotion: G,
                skipToValue: B,
                customEasingFn:
                  Array.isArray(T) && T.length === 4 ? ID(T) : void 0,
              });
            }
            case _D: {
              let { instanceId: r, time: n } = t.payload;
              return (0, st.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case bD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case TD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? wD : xD;
                r = (0, st.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var CD,
    RD,
    ND,
    uE,
    cE = ce(() => {
      "use strict";
      Ne();
      ({
        IX2_RAW_DATA_IMPORTED: CD,
        IX2_SESSION_STOPPED: RD,
        IX2_PARAMETER_CHANGED: ND,
      } = Ee),
        (uE = (e = {}, t) => {
          switch (t.type) {
            case CD:
              return t.payload.ixParameters || {};
            case RD:
              return {};
            case ND: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var dE = {};
  Ce(dE, { default: () => PD });
  var lE,
    fE,
    LD,
    PD,
    pE = ce(() => {
      "use strict";
      lE = ie(Go());
      Of();
      Wf();
      Kf();
      fE = ie(xt());
      sE();
      cE();
      ({ ixElements: LD } = fE.IX2ElementsReducer),
        (PD = (0, lE.combineReducers)({
          ixData: If,
          ixRequest: Hf,
          ixSession: zf,
          ixElements: LD,
          ixInstances: aE,
          ixParameters: uE,
        }));
    });
  var hE = c((CW, gE) => {
    var qD = gt(),
      FD = ye(),
      MD = it(),
      DD = "[object String]";
    function GD(e) {
      return typeof e == "string" || (!FD(e) && MD(e) && qD(e) == DD);
    }
    gE.exports = GD;
  });
  var EE = c((RW, vE) => {
    var VD = da(),
      UD = VD("length");
    vE.exports = UD;
  });
  var mE = c((NW, yE) => {
    var BD = "\\ud800-\\udfff",
      XD = "\\u0300-\\u036f",
      kD = "\\ufe20-\\ufe2f",
      HD = "\\u20d0-\\u20ff",
      WD = XD + kD + HD,
      jD = "\\ufe0e\\ufe0f",
      zD = "\\u200d",
      KD = RegExp("[" + zD + BD + WD + jD + "]");
    function $D(e) {
      return KD.test(e);
    }
    yE.exports = $D;
  });
  var xE = c((LW, wE) => {
    var bE = "\\ud800-\\udfff",
      YD = "\\u0300-\\u036f",
      QD = "\\ufe20-\\ufe2f",
      ZD = "\\u20d0-\\u20ff",
      JD = YD + QD + ZD,
      e1 = "\\ufe0e\\ufe0f",
      t1 = "[" + bE + "]",
      ka = "[" + JD + "]",
      Ha = "\\ud83c[\\udffb-\\udfff]",
      r1 = "(?:" + ka + "|" + Ha + ")",
      TE = "[^" + bE + "]",
      IE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      OE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      n1 = "\\u200d",
      AE = r1 + "?",
      SE = "[" + e1 + "]?",
      i1 = "(?:" + n1 + "(?:" + [TE, IE, OE].join("|") + ")" + SE + AE + ")*",
      o1 = SE + AE + i1,
      a1 = "(?:" + [TE + ka + "?", ka, IE, OE, t1].join("|") + ")",
      _E = RegExp(Ha + "(?=" + Ha + ")|" + a1 + o1, "g");
    function s1(e) {
      for (var t = (_E.lastIndex = 0); _E.test(e); ) ++t;
      return t;
    }
    wE.exports = s1;
  });
  var RE = c((PW, CE) => {
    var u1 = EE(),
      c1 = mE(),
      l1 = xE();
    function f1(e) {
      return c1(e) ? l1(e) : u1(e);
    }
    CE.exports = f1;
  });
  var LE = c((qW, NE) => {
    var d1 = Fn(),
      p1 = Mn(),
      g1 = It(),
      h1 = hE(),
      v1 = RE(),
      E1 = "[object Map]",
      y1 = "[object Set]";
    function m1(e) {
      if (e == null) return 0;
      if (g1(e)) return h1(e) ? v1(e) : e.length;
      var t = p1(e);
      return t == E1 || t == y1 ? e.size : d1(e).length;
    }
    NE.exports = m1;
  });
  var qE = c((FW, PE) => {
    var _1 = "Expected a function";
    function b1(e) {
      if (typeof e != "function") throw new TypeError(_1);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    PE.exports = b1;
  });
  var Wa = c((MW, FE) => {
    var T1 = ht(),
      I1 = (function () {
        try {
          var e = T1(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    FE.exports = I1;
  });
  var ja = c((DW, DE) => {
    var ME = Wa();
    function O1(e, t, r) {
      t == "__proto__" && ME
        ? ME(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    DE.exports = O1;
  });
  var VE = c((GW, GE) => {
    var A1 = ja(),
      S1 = An(),
      w1 = Object.prototype,
      x1 = w1.hasOwnProperty;
    function C1(e, t, r) {
      var n = e[t];
      (!(x1.call(e, t) && S1(n, r)) || (r === void 0 && !(t in e))) &&
        A1(e, t, r);
    }
    GE.exports = C1;
  });
  var XE = c((VW, BE) => {
    var R1 = VE(),
      N1 = qr(),
      L1 = Nn(),
      UE = Je(),
      P1 = zt();
    function q1(e, t, r, n) {
      if (!UE(e)) return e;
      t = N1(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = P1(t[i]),
          f = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var g = s[u];
          (f = n ? n(g, u, s) : void 0),
            f === void 0 && (f = UE(g) ? g : L1(t[i + 1]) ? [] : {});
        }
        R1(s, u, f), (s = s[u]);
      }
      return e;
    }
    BE.exports = q1;
  });
  var HE = c((UW, kE) => {
    var F1 = Vn(),
      M1 = XE(),
      D1 = qr();
    function G1(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = F1(e, a);
        r(s, a) && M1(o, D1(a, e), s);
      }
      return o;
    }
    kE.exports = G1;
  });
  var jE = c((BW, WE) => {
    var V1 = Cn(),
      U1 = Ao(),
      B1 = Qo(),
      X1 = Yo(),
      k1 = Object.getOwnPropertySymbols,
      H1 = k1
        ? function (e) {
            for (var t = []; e; ) V1(t, B1(e)), (e = U1(e));
            return t;
          }
        : X1;
    WE.exports = H1;
  });
  var KE = c((XW, zE) => {
    function W1(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    zE.exports = W1;
  });
  var YE = c((kW, $E) => {
    var j1 = Je(),
      z1 = qn(),
      K1 = KE(),
      $1 = Object.prototype,
      Y1 = $1.hasOwnProperty;
    function Q1(e) {
      if (!j1(e)) return K1(e);
      var t = z1(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !Y1.call(e, n))) || r.push(n);
      return r;
    }
    $E.exports = Q1;
  });
  var ZE = c((HW, QE) => {
    var Z1 = Jo(),
      J1 = YE(),
      e2 = It();
    function t2(e) {
      return e2(e) ? Z1(e, !0) : J1(e);
    }
    QE.exports = t2;
  });
  var ey = c((WW, JE) => {
    var r2 = $o(),
      n2 = jE(),
      i2 = ZE();
    function o2(e) {
      return r2(e, i2, n2);
    }
    JE.exports = o2;
  });
  var ry = c((jW, ty) => {
    var a2 = fa(),
      s2 = vt(),
      u2 = HE(),
      c2 = ey();
    function l2(e, t) {
      if (e == null) return {};
      var r = a2(c2(e), function (n) {
        return [n];
      });
      return (
        (t = s2(t)),
        u2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    ty.exports = l2;
  });
  var iy = c((zW, ny) => {
    var f2 = vt(),
      d2 = qE(),
      p2 = ry();
    function g2(e, t) {
      return p2(e, d2(f2(t)));
    }
    ny.exports = g2;
  });
  var ay = c((KW, oy) => {
    var h2 = Fn(),
      v2 = Mn(),
      E2 = xr(),
      y2 = ye(),
      m2 = It(),
      _2 = Rn(),
      b2 = qn(),
      T2 = Pn(),
      I2 = "[object Map]",
      O2 = "[object Set]",
      A2 = Object.prototype,
      S2 = A2.hasOwnProperty;
    function w2(e) {
      if (e == null) return !0;
      if (
        m2(e) &&
        (y2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          _2(e) ||
          T2(e) ||
          E2(e))
      )
        return !e.length;
      var t = v2(e);
      if (t == I2 || t == O2) return !e.size;
      if (b2(e)) return !h2(e).length;
      for (var r in e) if (S2.call(e, r)) return !1;
      return !0;
    }
    oy.exports = w2;
  });
  var uy = c(($W, sy) => {
    var x2 = ja(),
      C2 = Pa(),
      R2 = vt();
    function N2(e, t) {
      var r = {};
      return (
        (t = R2(t, 3)),
        C2(e, function (n, i, o) {
          x2(r, i, t(n, i, o));
        }),
        r
      );
    }
    sy.exports = N2;
  });
  var ly = c((YW, cy) => {
    function L2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    cy.exports = L2;
  });
  var dy = c((QW, fy) => {
    var P2 = Bn();
    function q2(e) {
      return typeof e == "function" ? e : P2;
    }
    fy.exports = q2;
  });
  var gy = c((ZW, py) => {
    var F2 = ly(),
      M2 = qa(),
      D2 = dy(),
      G2 = ye();
    function V2(e, t) {
      var r = G2(e) ? F2 : M2;
      return r(e, D2(t));
    }
    py.exports = V2;
  });
  var vy = c((JW, hy) => {
    var U2 = Be(),
      B2 = function () {
        return U2.Date.now();
      };
    hy.exports = B2;
  });
  var my = c((ej, yy) => {
    var X2 = Je(),
      za = vy(),
      Ey = Xn(),
      k2 = "Expected a function",
      H2 = Math.max,
      W2 = Math.min;
    function j2(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        f = 0,
        g = !1,
        p = !1,
        d = !0;
      if (typeof e != "function") throw new TypeError(k2);
      (t = Ey(t) || 0),
        X2(r) &&
          ((g = !!r.leading),
          (p = "maxWait" in r),
          (o = p ? H2(Ey(r.maxWait) || 0, t) : o),
          (d = "trailing" in r ? !!r.trailing : d));
      function v(x) {
        var G = n,
          B = i;
        return (n = i = void 0), (f = x), (a = e.apply(B, G)), a;
      }
      function b(x) {
        return (f = x), (s = setTimeout(E, t)), g ? v(x) : a;
      }
      function m(x) {
        var G = x - u,
          B = x - f,
          X = t - G;
        return p ? W2(X, o - B) : X;
      }
      function A(x) {
        var G = x - u,
          B = x - f;
        return u === void 0 || G >= t || G < 0 || (p && B >= o);
      }
      function E() {
        var x = za();
        if (A(x)) return w(x);
        s = setTimeout(E, m(x));
      }
      function w(x) {
        return (s = void 0), d && n ? v(x) : ((n = i = void 0), a);
      }
      function S() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = u = i = s = void 0);
      }
      function C() {
        return s === void 0 ? a : w(za());
      }
      function R() {
        var x = za(),
          G = A(x);
        if (((n = arguments), (i = this), (u = x), G)) {
          if (s === void 0) return b(u);
          if (p) return clearTimeout(s), (s = setTimeout(E, t)), v(u);
        }
        return s === void 0 && (s = setTimeout(E, t)), a;
      }
      return (R.cancel = S), (R.flush = C), R;
    }
    yy.exports = j2;
  });
  var by = c((tj, _y) => {
    var z2 = my(),
      K2 = Je(),
      $2 = "Expected a function";
    function Y2(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError($2);
      return (
        K2(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        z2(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    _y.exports = Y2;
  });
  var Iy = {};
  Ce(Iy, {
    actionListPlaybackChanged: () => or,
    animationFrameChanged: () => oi,
    clearRequested: () => bG,
    elementStateChanged: () => ts,
    eventListenerAdded: () => ii,
    eventStateChanged: () => Za,
    instanceAdded: () => Ja,
    instanceRemoved: () => es,
    instanceStarted: () => ai,
    mediaQueriesDefined: () => ns,
    parameterChanged: () => ir,
    playbackRequested: () => mG,
    previewRequested: () => yG,
    rawDataImported: () => Ka,
    sessionInitialized: () => $a,
    sessionStarted: () => Ya,
    sessionStopped: () => Qa,
    stopRequested: () => _G,
    testFrameRendered: () => TG,
    viewportWidthChanged: () => rs,
  });
  var Ty,
    Q2,
    Z2,
    J2,
    eG,
    tG,
    rG,
    nG,
    iG,
    oG,
    aG,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    gG,
    hG,
    vG,
    EG,
    Ka,
    $a,
    Ya,
    Qa,
    yG,
    mG,
    _G,
    bG,
    ii,
    TG,
    Za,
    oi,
    ir,
    Ja,
    ai,
    es,
    ts,
    or,
    rs,
    ns,
    si = ce(() => {
      "use strict";
      Ne();
      (Ty = ie(xt())),
        ({
          IX2_RAW_DATA_IMPORTED: Q2,
          IX2_SESSION_INITIALIZED: Z2,
          IX2_SESSION_STARTED: J2,
          IX2_SESSION_STOPPED: eG,
          IX2_PREVIEW_REQUESTED: tG,
          IX2_PLAYBACK_REQUESTED: rG,
          IX2_STOP_REQUESTED: nG,
          IX2_CLEAR_REQUESTED: iG,
          IX2_EVENT_LISTENER_ADDED: oG,
          IX2_TEST_FRAME_RENDERED: aG,
          IX2_EVENT_STATE_CHANGED: sG,
          IX2_ANIMATION_FRAME_CHANGED: uG,
          IX2_PARAMETER_CHANGED: cG,
          IX2_INSTANCE_ADDED: lG,
          IX2_INSTANCE_STARTED: fG,
          IX2_INSTANCE_REMOVED: dG,
          IX2_ELEMENT_STATE_CHANGED: pG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: gG,
          IX2_VIEWPORT_WIDTH_CHANGED: hG,
          IX2_MEDIA_QUERIES_DEFINED: vG,
        } = Ee),
        ({ reifyState: EG } = Ty.IX2VanillaUtils),
        (Ka = (e) => ({ type: Q2, payload: { ...EG(e) } })),
        ($a = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: Z2,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Ya = () => ({ type: J2 })),
        (Qa = () => ({ type: eG })),
        (yG = ({ rawData: e, defer: t }) => ({
          type: tG,
          payload: { defer: t, rawData: e },
        })),
        (mG = ({
          actionTypeId: e = Re.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: rG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (_G = (e) => ({ type: nG, payload: { actionListId: e } })),
        (bG = () => ({ type: iG })),
        (ii = (e, t) => ({
          type: oG,
          payload: { target: e, listenerParams: t },
        })),
        (TG = (e = 1) => ({ type: aG, payload: { step: e } })),
        (Za = (e, t) => ({ type: sG, payload: { stateKey: e, newState: t } })),
        (oi = (e, t) => ({ type: uG, payload: { now: e, parameters: t } })),
        (ir = (e, t) => ({ type: cG, payload: { key: e, value: t } })),
        (Ja = (e) => ({ type: lG, payload: { ...e } })),
        (ai = (e, t) => ({ type: fG, payload: { instanceId: e, time: t } })),
        (es = (e) => ({ type: dG, payload: { instanceId: e } })),
        (ts = (e, t, r, n) => ({
          type: pG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (or = ({ actionListId: e, isPlaying: t }) => ({
          type: gG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (rs = ({ width: e, mediaQueries: t }) => ({
          type: hG,
          payload: { width: e, mediaQueries: t },
        })),
        (ns = () => ({ type: vG }));
    });
  var we = {};
  Ce(we, {
    elementContains: () => as,
    getChildElements: () => LG,
    getClosestElement: () => Wr,
    getProperty: () => wG,
    getQuerySelector: () => os,
    getRefType: () => ss,
    getSiblingElements: () => PG,
    getStyle: () => SG,
    getValidDocument: () => CG,
    isSiblingNode: () => NG,
    matchSelector: () => xG,
    queryDocument: () => RG,
    setStyle: () => AG,
  });
  function AG(e, t, r) {
    e.style[t] = r;
  }
  function SG(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function wG(e, t) {
    return e[t];
  }
  function xG(e) {
    return (t) => t[is](e);
  }
  function os({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Oy) !== -1) {
        let n = e.split(Oy),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Sy)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function CG(e) {
    return e == null || e === document.documentElement.getAttribute(Sy)
      ? document
      : null;
  }
  function RG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function as(e, t) {
    return e.contains(t);
  }
  function NG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function LG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function PG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function ss(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? IG
        : OG
      : null;
  }
  var Ay,
    is,
    Oy,
    IG,
    OG,
    Sy,
    Wr,
    wy = ce(() => {
      "use strict";
      Ay = ie(xt());
      Ne();
      ({ ELEMENT_MATCHES: is } = Ay.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Oy,
          HTML_ELEMENT: IG,
          PLAIN_OBJECT: OG,
          WF_PAGE: Sy,
        } = Te);
      Wr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[is] && r[is](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var us = c((ij, Cy) => {
    var qG = Je(),
      xy = Object.create,
      FG = (function () {
        function e() {}
        return function (t) {
          if (!qG(t)) return {};
          if (xy) return xy(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Cy.exports = FG;
  });
  var ui = c((oj, Ry) => {
    function MG() {}
    Ry.exports = MG;
  });
  var li = c((aj, Ny) => {
    var DG = us(),
      GG = ui();
    function ci(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    ci.prototype = DG(GG.prototype);
    ci.prototype.constructor = ci;
    Ny.exports = ci;
  });
  var Fy = c((sj, qy) => {
    var Ly = Mt(),
      VG = xr(),
      UG = ye(),
      Py = Ly ? Ly.isConcatSpreadable : void 0;
    function BG(e) {
      return UG(e) || VG(e) || !!(Py && e && e[Py]);
    }
    qy.exports = BG;
  });
  var Gy = c((uj, Dy) => {
    var XG = Cn(),
      kG = Fy();
    function My(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = kG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? My(s, t - 1, r, n, i)
            : XG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Dy.exports = My;
  });
  var Uy = c((cj, Vy) => {
    var HG = Gy();
    function WG(e) {
      var t = e == null ? 0 : e.length;
      return t ? HG(e, 1) : [];
    }
    Vy.exports = WG;
  });
  var Xy = c((lj, By) => {
    function jG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    By.exports = jG;
  });
  var Wy = c((fj, Hy) => {
    var zG = Xy(),
      ky = Math.max;
    function KG(e, t, r) {
      return (
        (t = ky(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = ky(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), zG(e, this, s);
        }
      );
    }
    Hy.exports = KG;
  });
  var zy = c((dj, jy) => {
    function $G(e) {
      return function () {
        return e;
      };
    }
    jy.exports = $G;
  });
  var Yy = c((pj, $y) => {
    var YG = zy(),
      Ky = Wa(),
      QG = Bn(),
      ZG = Ky
        ? function (e, t) {
            return Ky(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: YG(t),
              writable: !0,
            });
          }
        : QG;
    $y.exports = ZG;
  });
  var Zy = c((gj, Qy) => {
    var JG = 800,
      eV = 16,
      tV = Date.now;
    function rV(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = tV(),
          i = eV - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= JG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Qy.exports = rV;
  });
  var em = c((hj, Jy) => {
    var nV = Yy(),
      iV = Zy(),
      oV = iV(nV);
    Jy.exports = oV;
  });
  var rm = c((vj, tm) => {
    var aV = Uy(),
      sV = Wy(),
      uV = em();
    function cV(e) {
      return uV(sV(e, void 0, aV), e + "");
    }
    tm.exports = cV;
  });
  var om = c((Ej, im) => {
    var nm = ea(),
      lV = nm && new nm();
    im.exports = lV;
  });
  var sm = c((yj, am) => {
    function fV() {}
    am.exports = fV;
  });
  var cs = c((mj, cm) => {
    var um = om(),
      dV = sm(),
      pV = um
        ? function (e) {
            return um.get(e);
          }
        : dV;
    cm.exports = pV;
  });
  var fm = c((_j, lm) => {
    var gV = {};
    lm.exports = gV;
  });
  var ls = c((bj, pm) => {
    var dm = fm(),
      hV = Object.prototype,
      vV = hV.hasOwnProperty;
    function EV(e) {
      for (
        var t = e.name + "", r = dm[t], n = vV.call(dm, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    pm.exports = EV;
  });
  var di = c((Tj, gm) => {
    var yV = us(),
      mV = ui(),
      _V = 4294967295;
    function fi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = _V),
        (this.__views__ = []);
    }
    fi.prototype = yV(mV.prototype);
    fi.prototype.constructor = fi;
    gm.exports = fi;
  });
  var vm = c((Ij, hm) => {
    function bV(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    hm.exports = bV;
  });
  var ym = c((Oj, Em) => {
    var TV = di(),
      IV = li(),
      OV = vm();
    function AV(e) {
      if (e instanceof TV) return e.clone();
      var t = new IV(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = OV(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Em.exports = AV;
  });
  var bm = c((Aj, _m) => {
    var SV = di(),
      mm = li(),
      wV = ui(),
      xV = ye(),
      CV = it(),
      RV = ym(),
      NV = Object.prototype,
      LV = NV.hasOwnProperty;
    function pi(e) {
      if (CV(e) && !xV(e) && !(e instanceof SV)) {
        if (e instanceof mm) return e;
        if (LV.call(e, "__wrapped__")) return RV(e);
      }
      return new mm(e);
    }
    pi.prototype = wV.prototype;
    pi.prototype.constructor = pi;
    _m.exports = pi;
  });
  var Im = c((Sj, Tm) => {
    var PV = di(),
      qV = cs(),
      FV = ls(),
      MV = bm();
    function DV(e) {
      var t = FV(e),
        r = MV[t];
      if (typeof r != "function" || !(t in PV.prototype)) return !1;
      if (e === r) return !0;
      var n = qV(r);
      return !!n && e === n[0];
    }
    Tm.exports = DV;
  });
  var wm = c((wj, Sm) => {
    var Om = li(),
      GV = rm(),
      VV = cs(),
      fs = ls(),
      UV = ye(),
      Am = Im(),
      BV = "Expected a function",
      XV = 8,
      kV = 32,
      HV = 128,
      WV = 256;
    function jV(e) {
      return GV(function (t) {
        var r = t.length,
          n = r,
          i = Om.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(BV);
          if (i && !a && fs(o) == "wrapper") var a = new Om([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = fs(o),
            u = s == "wrapper" ? VV(o) : void 0;
          u &&
          Am(u[0]) &&
          u[1] == (HV | XV | kV | WV) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[fs(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && Am(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            g = f[0];
          if (a && f.length == 1 && UV(g)) return a.plant(g).value();
          for (var p = 0, d = r ? t[p].apply(this, f) : g; ++p < r; )
            d = t[p].call(this, d);
          return d;
        };
      });
    }
    Sm.exports = jV;
  });
  var Cm = c((xj, xm) => {
    var zV = wm(),
      KV = zV();
    xm.exports = KV;
  });
  var Nm = c((Cj, Rm) => {
    function $V(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Rm.exports = $V;
  });
  var Pm = c((Rj, Lm) => {
    var YV = Nm(),
      ds = Xn();
    function QV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ds(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ds(t)), (t = t === t ? t : 0)),
        YV(ds(e), t, r)
      );
    }
    Lm.exports = QV;
  });
  var Xm,
    km,
    Hm,
    Wm,
    ZV,
    JV,
    eU,
    tU,
    rU,
    nU,
    iU,
    oU,
    aU,
    sU,
    uU,
    cU,
    lU,
    fU,
    dU,
    jm,
    zm,
    pU,
    gU,
    hU,
    Km,
    vU,
    EU,
    $m,
    yU,
    ps,
    Ym,
    qm,
    Fm,
    Qm,
    zr,
    mU,
    rt,
    Zm,
    _U,
    Pe,
    He,
    Kr,
    Jm,
    gs,
    Mm,
    hs,
    bU,
    jr,
    TU,
    IU,
    OU,
    e_,
    Dm,
    AU,
    Gm,
    SU,
    wU,
    xU,
    Vm,
    gi,
    hi,
    Um,
    Bm,
    t_,
    r_ = ce(() => {
      "use strict";
      (Xm = ie(Cm())), (km = ie(Un())), (Hm = ie(Pm()));
      Ne();
      vs();
      si();
      (Wm = ie(xt())),
        ({
          MOUSE_CLICK: ZV,
          MOUSE_SECOND_CLICK: JV,
          MOUSE_DOWN: eU,
          MOUSE_UP: tU,
          MOUSE_OVER: rU,
          MOUSE_OUT: nU,
          DROPDOWN_CLOSE: iU,
          DROPDOWN_OPEN: oU,
          SLIDER_ACTIVE: aU,
          SLIDER_INACTIVE: sU,
          TAB_ACTIVE: uU,
          TAB_INACTIVE: cU,
          NAVBAR_CLOSE: lU,
          NAVBAR_OPEN: fU,
          MOUSE_MOVE: dU,
          PAGE_SCROLL_DOWN: jm,
          SCROLL_INTO_VIEW: zm,
          SCROLL_OUT_OF_VIEW: pU,
          PAGE_SCROLL_UP: gU,
          SCROLLING_IN_VIEW: hU,
          PAGE_FINISH: Km,
          ECOMMERCE_CART_CLOSE: vU,
          ECOMMERCE_CART_OPEN: EU,
          PAGE_START: $m,
          PAGE_SCROLL: yU,
        } = Xe),
        (ps = "COMPONENT_ACTIVE"),
        (Ym = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: qm } = Te),
        ({ getNamespacedParameterId: Fm } = Wm.IX2VanillaUtils),
        (Qm = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (zr = Qm(({ element: e, nativeEvent: t }) => e === t.target)),
        (mU = Qm(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (rt = (0, Xm.default)([zr, mU])),
        (Zm = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !bU[i.eventTypeId]) return i;
          }
          return null;
        }),
        (_U = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!Zm(e, n);
        }),
        (Pe = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            f = Zm(e, u);
          return (
            f &&
              ar({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + qm + n.split(qm)[1],
                actionListId: (0, km.default)(f, "action.config.actionListId"),
              }),
            ar({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            $r({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (He = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Kr = { handler: He(rt, Pe) }),
        (Jm = { ...Kr, types: [ps, Ym].join(" ") }),
        (gs = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Mm = "mouseover mouseout"),
        (hs = { types: gs }),
        (bU = { PAGE_START: $m, PAGE_FINISH: Km }),
        (jr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Hm.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (TU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (IU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (OU = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = jr(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return TU(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (e_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [ps, Ym].indexOf(n) !== -1 ? n === ps : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Dm = (e) => (t, r) => {
          let n = { elementHovered: IU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (AU = (e) => (t, r) => {
          let n = { ...r, elementVisible: OU(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Gm =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = jr(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: f } = a,
              g = f === "PX",
              p = i - o,
              d = Number((n / p).toFixed(2));
            if (r && r.percentTop === d) return r;
            let v = (g ? u : (o * (u || 0)) / 100) / p,
              b,
              m,
              A = 0;
            r &&
              ((b = d > r.percentTop),
              (m = r.scrollingDown !== b),
              (A = m ? d : r.anchorTop));
            let E = s === jm ? d >= A + v : d <= A - v,
              w = {
                ...r,
                percentTop: d,
                inBounds: E,
                anchorTop: A,
                scrollingDown: b,
              };
            return (r && E && (m || w.inBounds !== r.inBounds) && e(t, w)) || w;
          }),
        (SU = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (wU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (xU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Vm =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (gi = (e = !0) => ({
          ...Jm,
          handler: He(
            e ? rt : zr,
            e_((t, r) => (r.isActive ? Kr.handler(t, r) : r))
          ),
        })),
        (hi = (e = !0) => ({
          ...Jm,
          handler: He(
            e ? rt : zr,
            e_((t, r) => (r.isActive ? r : Kr.handler(t, r)))
          ),
        })),
        (Um = {
          ...hs,
          handler: AU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === zm) === r
              ? (Pe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Bm = 0.05),
        (t_ = {
          [aU]: gi(),
          [sU]: hi(),
          [oU]: gi(),
          [iU]: hi(),
          [fU]: gi(!1),
          [lU]: hi(!1),
          [uU]: gi(),
          [cU]: hi(),
          [EU]: { types: "ecommerce-cart-open", handler: He(rt, Pe) },
          [vU]: { types: "ecommerce-cart-close", handler: He(rt, Pe) },
          [ZV]: {
            types: "click",
            handler: He(
              rt,
              Vm((e, { clickCount: t }) => {
                _U(e) ? t === 1 && Pe(e) : Pe(e);
              })
            ),
          },
          [JV]: {
            types: "click",
            handler: He(
              rt,
              Vm((e, { clickCount: t }) => {
                t === 2 && Pe(e);
              })
            ),
          },
          [eU]: { ...Kr, types: "mousedown" },
          [tU]: { ...Kr, types: "mouseup" },
          [rU]: {
            types: Mm,
            handler: He(
              rt,
              Dm((e, t) => {
                t.elementHovered && Pe(e);
              })
            ),
          },
          [nU]: {
            types: Mm,
            handler: He(
              rt,
              Dm((e, t) => {
                t.elementHovered || Pe(e);
              })
            ),
          },
          [dU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: f,
                  restingState: g = 0,
                } = r,
                {
                  clientX: p = o.clientX,
                  clientY: d = o.clientY,
                  pageX: v = o.pageX,
                  pageY: b = o.pageY,
                } = n,
                m = s === "X_AXIS",
                A = n.type === "mouseout",
                E = g / 100,
                w = u,
                S = !1;
              switch (a) {
                case Ze.VIEWPORT: {
                  E = m
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(d, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Ze.PAGE: {
                  let {
                    scrollLeft: C,
                    scrollTop: R,
                    scrollWidth: x,
                    scrollHeight: G,
                  } = jr();
                  E = m ? Math.min(C + v, x) / x : Math.min(R + b, G) / G;
                  break;
                }
                case Ze.ELEMENT:
                default: {
                  w = Fm(i, u);
                  let C = n.type.indexOf("mouse") === 0;
                  if (C && rt({ element: t, nativeEvent: n }) !== !0) break;
                  let R = t.getBoundingClientRect(),
                    { left: x, top: G, width: B, height: X } = R;
                  if (!C && !SU({ left: p, top: d }, R)) break;
                  (S = !0), (E = m ? (p - x) / B : (d - G) / X);
                  break;
                }
              }
              return (
                A && (E > 1 - Bm || E < Bm) && (E = Math.round(E)),
                (a !== Ze.ELEMENT || S || S !== o.elementHovered) &&
                  ((E = f ? 1 - E : E), e.dispatch(ir(w, E))),
                {
                  elementHovered: S,
                  clientX: p,
                  clientY: d,
                  pageX: v,
                  pageY: b,
                }
              );
            },
          },
          [yU]: {
            types: gs,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = jr(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(ir(r, s));
            },
          },
          [hU]: {
            types: gs,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: f,
                } = jr(),
                {
                  basedOn: g,
                  selectedAxis: p,
                  continuousParameterGroupId: d,
                  startsEntering: v,
                  startsExiting: b,
                  addEndOffset: m,
                  addStartOffset: A,
                  addOffsetValue: E = 0,
                  endOffsetValue: w = 0,
                } = r,
                S = p === "X_AXIS";
              if (g === Ze.VIEWPORT) {
                let C = S ? o / s : a / u;
                return (
                  C !== i.scrollPercent && t.dispatch(ir(d, C)),
                  { scrollPercent: C }
                );
              } else {
                let C = Fm(n, d),
                  R = e.getBoundingClientRect(),
                  x = (A ? E : 0) / 100,
                  G = (m ? w : 0) / 100;
                (x = v ? x : 1 - x), (G = b ? G : 1 - G);
                let B = R.top + Math.min(R.height * x, f),
                  W = R.top + R.height * G - B,
                  Q = Math.min(f + W, u),
                  T = Math.min(Math.max(0, f - B), Q) / Q;
                return (
                  T !== i.scrollPercent && t.dispatch(ir(C, T)),
                  { scrollPercent: T }
                );
              }
            },
          },
          [zm]: Um,
          [pU]: Um,
          [jm]: {
            ...hs,
            handler: Gm((e, t) => {
              t.scrollingDown && Pe(e);
            }),
          },
          [gU]: {
            ...hs,
            handler: Gm((e, t) => {
              t.scrollingDown || Pe(e);
            }),
          },
          [Km]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: He(zr, wU(Pe)),
          },
          [$m]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: He(zr, xU(Pe)),
          },
        });
    });
  var m_ = {};
  Ce(m_, {
    observeRequests: () => KU,
    startActionGroup: () => $r,
    startEngine: () => bi,
    stopActionGroup: () => ar,
    stopAllActionGroups: () => v_,
    stopEngine: () => Ti,
  });
  function KU(e) {
    Ct({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: QU }),
      Ct({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: ZU }),
      Ct({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: JU }),
      Ct({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: eB });
  }
  function $U(e) {
    Ct({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Ti(e),
          d_({ store: e, elementApi: we }),
          bi({ store: e, allowEvents: !0 }),
          p_();
      },
    });
  }
  function YU(e, t) {
    let r = Ct({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function QU({ rawData: e, defer: t }, r) {
    let n = () => {
      bi({ store: r, rawData: e, allowEvents: !0 }), p_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function p_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function ZU(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: f = !0,
      } = e,
      { rawData: g } = e;
    if (n && i && g && s) {
      let p = g.actionLists[n];
      p && (g = DU({ actionList: p, actionItemId: i, rawData: g }));
    }
    if (
      (bi({ store: t, rawData: g, allowEvents: a, testManual: u }),
      (n && r === Re.GENERAL_START_ACTION) || Es(r))
    ) {
      ar({ store: t, actionListId: n }),
        h_({ store: t, actionListId: n, eventId: o });
      let p = $r({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && p && t.dispatch(or({ actionListId: n, isPlaying: !s }));
    }
  }
  function JU({ actionListId: e }, t) {
    e ? ar({ store: t, actionListId: e }) : v_({ store: t }), Ti(t);
  }
  function eB(e, t) {
    Ti(t), d_({ store: t, elementApi: we });
  }
  function bi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Ka(t)),
      i.active ||
        (e.dispatch(
          $a({
            hasBoundaryNodes: !!document.querySelector(Ei),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (aB(e), tB(), e.getState().ixSession.hasDefinedMediaQueries && $U(e)),
        e.dispatch(Ya()),
        rB(e, n));
  }
  function tB() {
    let { documentElement: e } = document;
    e.className.indexOf(n_) === -1 && (e.className += ` ${n_}`);
  }
  function rB(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(oi(n, o)), t ? YU(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Ti(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(nB), BU(), e.dispatch(Qa());
    }
  }
  function nB({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function iB({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: f, ixSession: g } = e.getState(),
      { events: p } = f,
      d = p[n],
      { eventTypeId: v } = d,
      b = {},
      m = {},
      A = [],
      { continuousActionGroups: E } = a,
      { id: w } = a;
    GU(v, i) && (w = VU(t, w));
    let S = g.hasBoundaryNodes && r ? Wr(r, Ei) : null;
    E.forEach((C) => {
      let { keyframe: R, actionItems: x } = C;
      x.forEach((G) => {
        let { actionTypeId: B } = G,
          { target: X } = G.config;
        if (!X) return;
        let W = X.boundaryMode ? S : null,
          Q = XU(X) + ys + B;
        if (((m[Q] = oB(m[Q], R, G)), !b[Q])) {
          b[Q] = !0;
          let { config: P } = G;
          yi({
            config: P,
            event: d,
            eventTarget: r,
            elementRoot: W,
            elementApi: we,
          }).forEach((T) => {
            A.push({ element: T, key: Q });
          });
        }
      });
    }),
      A.forEach(({ element: C, key: R }) => {
        let x = m[R],
          G = (0, ut.default)(x, "[0].actionItems[0]", {}),
          { actionTypeId: B } = G,
          X = _i(B) ? _s(B)(C, G) : null,
          W = ms({ element: C, actionItem: G, elementApi: we }, X);
        bs({
          store: e,
          element: C,
          eventId: n,
          actionListId: o,
          actionItem: G,
          destination: W,
          continuous: !0,
          parameterId: w,
          actionGroups: x,
          smoothing: s,
          restingValue: u,
          pluginInstance: X,
        });
      });
  }
  function oB(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function aB(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    g_(e),
      (0, sr.default)(r, (i, o) => {
        let a = t_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        dB({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && uB(e);
  }
  function uB(e) {
    let t = () => {
      g_(e);
    };
    sB.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(ii(window, [r, t]));
    }),
      t();
  }
  function g_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(rs({ width: n, mediaQueries: i }));
    }
  }
  function dB({ logic: e, store: t, events: r }) {
    pB(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = cB(r, fB);
    if (!(0, a_.default)(s)) return;
    (0, sr.default)(s, (p, d) => {
      let v = r[d],
        { action: b, id: m, mediaQueries: A = o.mediaQueryKeys } = v,
        { actionListId: E } = b.config;
      kU(A, o.mediaQueryKeys) || t.dispatch(ns()),
        b.actionTypeId === Re.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(v.config) ? v.config : [v.config]).forEach((S) => {
            let { continuousParameterGroupId: C } = S,
              R = (0, ut.default)(a, `${E}.continuousParameterGroups`, []),
              x = (0, o_.default)(R, ({ id: X }) => X === C),
              G = (S.smoothing || 0) / 100,
              B = (S.restingState || 0) / 100;
            x &&
              p.forEach((X, W) => {
                let Q = m + ys + W;
                iB({
                  store: t,
                  eventStateKey: Q,
                  eventTarget: X,
                  eventId: m,
                  eventConfig: S,
                  actionListId: E,
                  parameterGroup: x,
                  smoothing: G,
                  restingValue: B,
                });
              });
          }),
        (b.actionTypeId === Re.GENERAL_START_ACTION || Es(b.actionTypeId)) &&
          h_({ store: t, actionListId: E, eventId: m });
    });
    let u = (p) => {
        let { ixSession: d } = t.getState();
        lB(s, (v, b, m) => {
          let A = r[b],
            E = d.eventState[m],
            { action: w, mediaQueries: S = o.mediaQueryKeys } = A;
          if (!mi(S, d.mediaQueryKey)) return;
          let C = (R = {}) => {
            let x = i(
              {
                store: t,
                element: v,
                event: A,
                eventConfig: R,
                nativeEvent: p,
                eventStateKey: m,
              },
              E
            );
            HU(x, E) || t.dispatch(Za(m, x));
          };
          w.actionTypeId === Re.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(C)
            : C();
        });
      },
      f = (0, l_.default)(u, zU),
      g = ({ target: p = document, types: d, throttle: v }) => {
        d.split(" ")
          .filter(Boolean)
          .forEach((b) => {
            let m = v ? f : u;
            p.addEventListener(b, m), t.dispatch(ii(p, [b, m]));
          });
      };
    Array.isArray(n) ? n.forEach(g) : typeof n == "string" && g(e);
  }
  function pB(e) {
    if (!jU) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = os(o);
      t[a] ||
        ((i === Xe.MOUSE_CLICK || i === Xe.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function h_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let f = (0, ut.default)(u, "actionItemGroups[0].actionItems", []),
        g = (0, ut.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!mi(g, i.mediaQueryKey)) return;
      f.forEach((p) => {
        let { config: d, actionTypeId: v } = p,
          b =
            d?.target?.useEventTarget === !0 && d?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : d,
          m = yi({ config: b, event: s, elementApi: we }),
          A = _i(v);
        m.forEach((E) => {
          let w = A ? _s(v)(E, p) : null;
          bs({
            destination: ms({ element: E, actionItem: p, elementApi: we }, w),
            immediate: !0,
            store: e,
            element: E,
            eventId: r,
            actionItem: p,
            actionListId: t,
            pluginInstance: w,
          });
        });
      });
    }
  }
  function v_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, sr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Ts(r, e), i && e.dispatch(or({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function ar({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Wr(r, Ei) : null;
    (0, sr.default)(o, (u) => {
      let f = (0, ut.default)(u, "actionItem.config.target.boundaryMode"),
        g = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && g) {
        if (s && f && !as(s, u.element)) return;
        Ts(u, e),
          u.verbose && e.dispatch(or({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function $r({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: f } = e.getState(),
      { events: g } = u,
      p = g[t] || {},
      { mediaQueries: d = u.mediaQueryKeys } = p,
      v = (0, ut.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: b, useFirstGroupAsInitialState: m } = v;
    if (!b || !b.length) return !1;
    o >= b.length && (0, ut.default)(p, "config.loop") && (o = 0),
      o === 0 && m && o++;
    let E =
        (o === 0 || (o === 1 && m)) && Es(p.action?.actionTypeId)
          ? p.config.delay
          : void 0,
      w = (0, ut.default)(b, [o, "actionItems"], []);
    if (!w.length || !mi(d, f.mediaQueryKey)) return !1;
    let S = f.hasBoundaryNodes && r ? Wr(r, Ei) : null,
      C = qU(w),
      R = !1;
    return (
      w.forEach((x, G) => {
        let { config: B, actionTypeId: X } = x,
          W = _i(X),
          { target: Q } = B;
        if (!Q) return;
        let P = Q.boundaryMode ? S : null;
        yi({
          config: B,
          event: p,
          eventTarget: r,
          elementRoot: P,
          elementApi: we,
        }).forEach((N, U) => {
          let D = W ? _s(X)(N, x) : null,
            Z = W ? WU(X)(N, x) : null;
          R = !0;
          let Y = C === G && U === 0,
            L = FU({ element: N, actionItem: x }),
            V = ms({ element: N, actionItem: x, elementApi: we }, D);
          bs({
            store: e,
            element: N,
            actionItem: x,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: Y,
            computedStyle: L,
            destination: V,
            immediate: a,
            verbose: s,
            pluginInstance: D,
            pluginDuration: Z,
            instanceDelay: E,
          });
        });
      }),
      R
    );
  }
  function bs(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: f,
        eventId: g,
      } = n,
      p = !u,
      d = LU(),
      { ixElements: v, ixSession: b, ixData: m } = t.getState(),
      A = NU(v, i),
      { refState: E } = v[A] || {},
      w = ss(i),
      S = b.reducedMotion && Bo[o.actionTypeId],
      C;
    if (S && u)
      switch (m.events[g]?.eventTypeId) {
        case Xe.MOUSE_MOVE:
        case Xe.MOUSE_MOVE_IN_VIEWPORT:
          C = f;
          break;
        default:
          C = 0.5;
          break;
      }
    let R = MU(i, E, r, o, we, s);
    if (
      (t.dispatch(
        Ja({
          instanceId: d,
          elementId: A,
          origin: R,
          refType: w,
          skipMotion: S,
          skipToValue: C,
          ...n,
        })
      ),
      E_(document.body, "ix2-animation-started", d),
      a)
    ) {
      gB(t, d);
      return;
    }
    Ct({ store: t, select: ({ ixInstances: x }) => x[d], onChange: y_ }),
      p && t.dispatch(ai(d, b.tick));
  }
  function Ts(e, t) {
    E_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === f_ && UU(o, n, we), t.dispatch(es(e.id));
  }
  function E_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function gB(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(ai(t, 0)), e.dispatch(oi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    y_(n[t], e);
  }
  function y_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: f,
        groupIndex: g,
        eventId: p,
        eventTarget: d,
        eventStateKey: v,
        actionListId: b,
        isCarrier: m,
        styleProp: A,
        verbose: E,
        pluginInstance: w,
      } = e,
      { ixData: S, ixSession: C } = t.getState(),
      { events: R } = S,
      x = R[p] || {},
      { mediaQueries: G = S.mediaQueryKeys } = x;
    if (mi(G, C.mediaQueryKey) && (n || r || i)) {
      if (f || (u === RU && i)) {
        t.dispatch(ts(o, s, f, a));
        let { ixElements: B } = t.getState(),
          { ref: X, refType: W, refState: Q } = B[o] || {},
          P = Q && Q[s];
        (W === f_ || _i(s)) && PU(X, Q, P, p, a, A, we, u, w);
      }
      if (i) {
        if (m) {
          let B = $r({
            store: t,
            eventId: p,
            eventTarget: d,
            eventStateKey: v,
            actionListId: b,
            groupIndex: g + 1,
            verbose: E,
          });
          E && !B && t.dispatch(or({ actionListId: b, isPlaying: !1 }));
        }
        Ts(e, t);
      }
    }
  }
  var o_,
    ut,
    a_,
    s_,
    u_,
    c_,
    sr,
    l_,
    vi,
    CU,
    Es,
    ys,
    Ei,
    f_,
    RU,
    n_,
    yi,
    NU,
    ms,
    Ct,
    LU,
    PU,
    d_,
    qU,
    FU,
    MU,
    DU,
    GU,
    VU,
    mi,
    UU,
    BU,
    XU,
    kU,
    HU,
    _i,
    _s,
    WU,
    i_,
    jU,
    zU,
    sB,
    cB,
    lB,
    fB,
    vs = ce(() => {
      "use strict";
      (o_ = ie(va())),
        (ut = ie(Un())),
        (a_ = ie(LE())),
        (s_ = ie(iy())),
        (u_ = ie(ay())),
        (c_ = ie(uy())),
        (sr = ie(gy())),
        (l_ = ie(by()));
      Ne();
      vi = ie(xt());
      si();
      wy();
      r_();
      (CU = Object.keys(yn)),
        (Es = (e) => CU.includes(e)),
        ({
          COLON_DELIMITER: ys,
          BOUNDARY_SELECTOR: Ei,
          HTML_ELEMENT: f_,
          RENDER_GENERAL: RU,
          W_MOD_IX: n_,
        } = Te),
        ({
          getAffectedElements: yi,
          getElementId: NU,
          getDestinationValues: ms,
          observeStore: Ct,
          getInstanceId: LU,
          renderHTMLElement: PU,
          clearAllStyles: d_,
          getMaxDurationItemIndex: qU,
          getComputedStyle: FU,
          getInstanceOrigin: MU,
          reduceListToGroup: DU,
          shouldNamespaceEventParameter: GU,
          getNamespacedParameterId: VU,
          shouldAllowMediaQuery: mi,
          cleanupHTMLElement: UU,
          clearObjectCache: BU,
          stringifyTarget: XU,
          mediaQueriesEqual: kU,
          shallowEqual: HU,
        } = vi.IX2VanillaUtils),
        ({
          isPluginType: _i,
          createPluginInstance: _s,
          getPluginDuration: WU,
        } = vi.IX2VanillaPlugins),
        (i_ = navigator.userAgent),
        (jU = i_.match(/iPad/i) || i_.match(/iPhone/)),
        (zU = 12);
      sB = ["resize", "orientationchange"];
      (cB = (e, t) => (0, s_.default)((0, c_.default)(e, t), u_.default)),
        (lB = (e, t) => {
          (0, sr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + ys + o;
              t(i, n, a);
            });
          });
        }),
        (fB = (e) => {
          let t = { target: e.target, targets: e.targets };
          return yi({ config: t, elementApi: we });
        });
    });
  var b_ = c((ct) => {
    "use strict";
    var hB = on().default,
      vB = ru().default;
    Object.defineProperty(ct, "__esModule", { value: !0 });
    ct.actions = void 0;
    ct.destroy = __;
    ct.init = bB;
    ct.setEnv = _B;
    ct.store = void 0;
    Bl();
    var EB = Go(),
      yB = vB((pE(), ze(dE))),
      Is = (vs(), ze(m_)),
      mB = hB((si(), ze(Iy)));
    ct.actions = mB;
    var Os = (ct.store = (0, EB.createStore)(yB.default));
    function _B(e) {
      e() && (0, Is.observeRequests)(Os);
    }
    function bB(e) {
      __(), (0, Is.startEngine)({ store: Os, rawData: e, allowEvents: !0 });
    }
    function __() {
      (0, Is.stopEngine)(Os);
    }
  });
  var A_ = c((Vj, O_) => {
    "use strict";
    var T_ = $e(),
      I_ = b_();
    I_.setEnv(T_.env);
    T_.define(
      "ix2",
      (O_.exports = function () {
        return I_;
      })
    );
  });
  var w_ = c((Uj, S_) => {
    "use strict";
    var ur = $e();
    ur.define(
      "links",
      (S_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = ur.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          g = /\/$/,
          p,
          d;
        r.ready = r.design = r.preview = v;
        function v() {
          (i = o && ur.env("design")),
            (d = ur.env("slug") || a.pathname || ""),
            ur.scroll.off(m),
            (p = []);
          for (var E = document.links, w = 0; w < E.length; ++w) b(E[w]);
          p.length && (ur.scroll.on(m), m());
        }
        function b(E) {
          if (!E.getAttribute("hreflang")) {
            var w =
              (i && E.getAttribute("href-disabled")) || E.getAttribute("href");
            if (((s.href = w), !(w.indexOf(":") >= 0))) {
              var S = e(E);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var C = e(s.hash);
                C.length && p.push({ link: S, sec: C, active: !1 });
                return;
              }
              if (!(w === "#" || w === "")) {
                var R =
                  s.href === a.href || w === d || (f.test(w) && g.test(d));
                A(S, u, R);
              }
            }
          }
        }
        function m() {
          var E = n.scrollTop(),
            w = n.height();
          t.each(p, function (S) {
            if (!S.link.attr("hreflang")) {
              var C = S.link,
                R = S.sec,
                x = R.offset().top,
                G = R.outerHeight(),
                B = w * 0.5,
                X = R.is(":visible") && x + G - B >= E && x + B <= E + w;
              S.active !== X && ((S.active = X), A(C, u, X));
            }
          });
        }
        function A(E, w, S) {
          var C = E.hasClass(w);
          (S && C) || (!S && !C) || (S ? E.addClass(w) : E.removeClass(w));
        }
        return r;
      })
    );
  });
  var C_ = c((Bj, x_) => {
    "use strict";
    var Ii = $e();
    Ii.define(
      "scroll",
      (x_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = b() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (P) {
              window.setTimeout(P, 15);
            },
          u = Ii.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          g = 'a[href="#"]',
          p = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
          d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          v = document.createElement("style");
        v.appendChild(document.createTextNode(d));
        function b() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var m = /^#[a-zA-Z0-9][\w:.-]*$/;
        function A(P) {
          return m.test(P.hash) && P.host + P.pathname === r.host + r.pathname;
        }
        let E =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function w() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            E.matches
          );
        }
        function S(P, T) {
          var N;
          switch (T) {
            case "add":
              (N = P.attr("tabindex")),
                N
                  ? P.attr("data-wf-tabindex-swap", N)
                  : P.attr("tabindex", "-1");
              break;
            case "remove":
              (N = P.attr("data-wf-tabindex-swap")),
                N
                  ? (P.attr("tabindex", N),
                    P.removeAttr("data-wf-tabindex-swap"))
                  : P.removeAttr("tabindex");
              break;
          }
          P.toggleClass("wf-force-outline-none", T === "add");
        }
        function C(P) {
          var T = P.currentTarget;
          if (
            !(
              Ii.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className))
            )
          ) {
            var N = A(T) ? T.hash : "";
            if (N !== "") {
              var U = e(N);
              U.length &&
                (P && (P.preventDefault(), P.stopPropagation()),
                R(N, P),
                window.setTimeout(
                  function () {
                    x(U, function () {
                      S(U, "add"),
                        U.get(0).focus({ preventScroll: !0 }),
                        S(U, "remove");
                    });
                  },
                  P ? 0 : 300
                ));
            }
          }
        }
        function R(P) {
          if (
            r.hash !== P &&
            n &&
            n.pushState &&
            !(Ii.env.chrome && r.protocol === "file:")
          ) {
            var T = n.state && n.state.hash;
            T !== P && n.pushState({ hash: P }, "", P);
          }
        }
        function x(P, T) {
          var N = i.scrollTop(),
            U = G(P);
          if (N !== U) {
            var D = B(P, N, U),
              Z = Date.now(),
              Y = function () {
                var L = Date.now() - Z;
                window.scroll(0, X(N, U, L, D)),
                  L <= D ? s(Y) : typeof T == "function" && T();
              };
            s(Y);
          }
        }
        function G(P) {
          var T = e(f),
            N = T.css("position") === "fixed" ? T.outerHeight() : 0,
            U = P.offset().top - N;
          if (P.data("scroll") === "mid") {
            var D = i.height() - N,
              Z = P.outerHeight();
            Z < D && (U -= Math.round((D - Z) / 2));
          }
          return U;
        }
        function B(P, T, N) {
          if (w()) return 0;
          var U = 1;
          return (
            a.add(P).each(function (D, Z) {
              var Y = parseFloat(Z.getAttribute("data-scroll-time"));
              !isNaN(Y) && Y >= 0 && (U = Y);
            }),
            (472.143 * Math.log(Math.abs(T - N) + 125) - 2e3) * U
          );
        }
        function X(P, T, N, U) {
          return N > U ? T : P + (T - P) * W(N / U);
        }
        function W(P) {
          return P < 0.5
            ? 4 * P * P * P
            : (P - 1) * (2 * P - 2) * (2 * P - 2) + 1;
        }
        function Q() {
          var { WF_CLICK_EMPTY: P, WF_CLICK_SCROLL: T } = t;
          o.on(T, p, C),
            o.on(P, g, function (N) {
              N.preventDefault();
            }),
            document.head.insertBefore(v, document.head.firstChild);
        }
        return { ready: Q };
      })
    );
  });
  var N_ = c((Xj, R_) => {
    "use strict";
    var TB = $e();
    TB.define(
      "touch",
      (R_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            g;
          o.addEventListener("touchstart", p, !1),
            o.addEventListener("touchmove", d, !1),
            o.addEventListener("touchend", v, !1),
            o.addEventListener("touchcancel", b, !1),
            o.addEventListener("mousedown", p, !1),
            o.addEventListener("mousemove", d, !1),
            o.addEventListener("mouseup", v, !1),
            o.addEventListener("mouseout", b, !1);
          function p(A) {
            var E = A.touches;
            (E && E.length > 1) ||
              ((a = !0),
              E ? ((s = !0), (f = E[0].clientX)) : (f = A.clientX),
              (g = f));
          }
          function d(A) {
            if (a) {
              if (s && A.type === "mousemove") {
                A.preventDefault(), A.stopPropagation();
                return;
              }
              var E = A.touches,
                w = E ? E[0].clientX : A.clientX,
                S = w - g;
              (g = w),
                Math.abs(S) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", A, { direction: S > 0 ? "right" : "left" }), b());
            }
          }
          function v(A) {
            if (a && ((a = !1), s && A.type === "mouseup")) {
              A.preventDefault(), A.stopPropagation(), (s = !1);
              return;
            }
          }
          function b() {
            a = !1;
          }
          function m() {
            o.removeEventListener("touchstart", p, !1),
              o.removeEventListener("touchmove", d, !1),
              o.removeEventListener("touchend", v, !1),
              o.removeEventListener("touchcancel", b, !1),
              o.removeEventListener("mousedown", p, !1),
              o.removeEventListener("mousemove", d, !1),
              o.removeEventListener("mouseup", v, !1),
              o.removeEventListener("mouseout", b, !1),
              (o = null);
          }
          this.destroy = m;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var L_ = c((As) => {
    "use strict";
    Object.defineProperty(As, "__esModule", { value: !0 });
    As.default = IB;
    function IB(e, t, r, n, i, o, a, s, u, f, g, p, d) {
      return function (v) {
        e(v);
        var b = v.form,
          m = {
            name: b.attr("data-name") || b.attr("name") || "Untitled Form",
            pageId: b.attr("data-wf-page-id") || "",
            elementId: b.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              b.html()
            ),
            trackingCookies: n(),
          };
        let A = b.attr("data-wf-flow");
        A && (m.wfFlow = A), i(v);
        var E = o(b, m.fields);
        if (E) return a(E);
        if (((m.fileUploads = s(b)), u(v), !f)) {
          g(v);
          return;
        }
        p.ajax({
          url: d,
          type: "POST",
          data: m,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (w) {
            w && w.code === 200 && (v.success = !0), g(v);
          })
          .fail(function () {
            g(v);
          });
      };
    }
  });
  var q_ = c((Hj, P_) => {
    "use strict";
    var Oi = $e();
    Oi.define(
      "forms",
      (P_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          f = /e(-)?mail/i,
          g = /^\S+@\S+$/,
          p = window.alert,
          d = Oi.env(),
          v,
          b,
          m,
          A = /list-manage[1-9]?.com/i,
          E = t.debounce(function () {
            p(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              w(), !d && !v && C();
            };
        function w() {
          (u = e("html").attr("data-wf-site")),
            (b = "https://webflow.com/api/v1/form/" + u),
            a &&
              b.indexOf("https://webflow.com") >= 0 &&
              (b = b.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (m = `${b}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(S);
        }
        function S(L, V) {
          var H = e(V),
            F = e.data(V, s);
          F || (F = e.data(V, s, { form: H })), R(F);
          var q = H.closest("div.w-form");
          (F.done = q.find("> .w-form-done")),
            (F.fail = q.find("> .w-form-fail")),
            (F.fileUploads = q.find(".w-file-upload")),
            F.fileUploads.each(function (ee) {
              D(ee, F);
            });
          var K =
            F.form.attr("aria-label") || F.form.attr("data-name") || "Form";
          F.done.attr("aria-label") || F.form.attr("aria-label", K),
            F.done.attr("tabindex", "-1"),
            F.done.attr("role", "region"),
            F.done.attr("aria-label") ||
              F.done.attr("aria-label", K + " success"),
            F.fail.attr("tabindex", "-1"),
            F.fail.attr("role", "region"),
            F.fail.attr("aria-label") ||
              F.fail.attr("aria-label", K + " failure");
          var re = (F.action = H.attr("action"));
          if (
            ((F.handler = null),
            (F.redirect = H.attr("data-redirect")),
            A.test(re))
          ) {
            F.handler = T;
            return;
          }
          if (!re) {
            if (u) {
              F.handler = (() => {
                let ee = L_().default;
                return ee(R, o, Oi, W, U, G, p, B, x, u, N, e, b);
              })();
              return;
            }
            E();
          }
        }
        function C() {
          (v = !0),
            n.on("submit", s + " form", function (ee) {
              var z = e.data(this, s);
              z.handler && ((z.evt = ee), z.handler(z));
            });
          let L = ".w-checkbox-input",
            V = ".w-radio-input",
            H = "w--redirected-checked",
            F = "w--redirected-focus",
            q = "w--redirected-focus-visible",
            K = ":focus-visible, [data-wf-focus-visible]",
            re = [
              ["checkbox", L],
              ["radio", V],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + L + ")",
            (ee) => {
              e(ee.target).siblings(L).toggleClass(H);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (ee) => {
              e(`input[name="${ee.target.name}"]:not(${L})`).map((le, Rt) =>
                e(Rt).siblings(V).removeClass(H)
              );
              let z = e(ee.target);
              z.hasClass("w-radio-input") || z.siblings(V).addClass(H);
            }),
            re.forEach(([ee, z]) => {
              n.on(
                "focus",
                s + ` form input[type="${ee}"]:not(` + z + ")",
                (le) => {
                  e(le.target).siblings(z).addClass(F),
                    e(le.target).filter(K).siblings(z).addClass(q);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${ee}"]:not(` + z + ")",
                  (le) => {
                    e(le.target).siblings(z).removeClass(`${F} ${q}`);
                  }
                );
            });
        }
        function R(L) {
          var V = (L.btn = L.form.find(':input[type="submit"]'));
          (L.wait = L.btn.attr("data-wait") || null),
            (L.success = !1),
            V.prop("disabled", !1),
            L.label && V.val(L.label);
        }
        function x(L) {
          var V = L.btn,
            H = L.wait;
          V.prop("disabled", !0), H && ((L.label = V.val()), V.val(H));
        }
        function G(L, V) {
          var H = null;
          return (
            (V = V || {}),
            L.find(':input:not([type="submit"]):not([type="file"])').each(
              function (F, q) {
                var K = e(q),
                  re = K.attr("type"),
                  ee =
                    K.attr("data-name") || K.attr("name") || "Field " + (F + 1);
                ee = encodeURIComponent(ee);
                var z = K.val();
                if (re === "checkbox") z = K.is(":checked");
                else if (re === "radio") {
                  if (V[ee] === null || typeof V[ee] == "string") return;
                  z =
                    L.find(
                      'input[name="' + K.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof z == "string" && (z = e.trim(z)),
                  (V[ee] = z),
                  (H = H || Q(K, re, ee, z));
              }
            ),
            H
          );
        }
        function B(L) {
          var V = {};
          return (
            L.find(':input[type="file"]').each(function (H, F) {
              var q = e(F),
                K = q.attr("data-name") || q.attr("name") || "File " + (H + 1),
                re = q.attr("data-value");
              typeof re == "string" && (re = e.trim(re)), (V[K] = re);
            }),
            V
          );
        }
        let X = { _mkto_trk: "marketo" };
        function W() {
          return document.cookie.split("; ").reduce(function (V, H) {
            let F = H.split("="),
              q = F[0];
            if (q in X) {
              let K = X[q],
                re = F.slice(1).join("=");
              V[K] = re;
            }
            return V;
          }, {});
        }
        function Q(L, V, H, F) {
          var q = null;
          return (
            V === "password"
              ? (q = "Passwords cannot be submitted.")
              : L.attr("required")
              ? F
                ? f.test(L.attr("type")) &&
                  (g.test(F) ||
                    (q = "Please enter a valid email address for: " + H))
                : (q = "Please fill out the required field: " + H)
              : H === "g-recaptcha-response" &&
                !F &&
                (q = "Please confirm you\u2019re not a robot."),
            q
          );
        }
        function P(L) {
          U(L), N(L);
        }
        function T(L) {
          R(L);
          var V = L.form,
            H = {};
          if (/^https/.test(o.href) && !/^https/.test(L.action)) {
            V.attr("method", "post");
            return;
          }
          U(L);
          var F = G(V, H);
          if (F) return p(F);
          x(L);
          var q;
          t.each(H, function (z, le) {
            f.test(le) && (H.EMAIL = z),
              /^((full[ _-]?)?name)$/i.test(le) && (q = z),
              /^(first[ _-]?name)$/i.test(le) && (H.FNAME = z),
              /^(last[ _-]?name)$/i.test(le) && (H.LNAME = z);
          }),
            q &&
              !H.FNAME &&
              ((q = q.split(" ")),
              (H.FNAME = q[0]),
              (H.LNAME = H.LNAME || q[1]));
          var K = L.action.replace("/post?", "/post-json?") + "&c=?",
            re = K.indexOf("u=") + 2;
          re = K.substring(re, K.indexOf("&", re));
          var ee = K.indexOf("id=") + 3;
          (ee = K.substring(ee, K.indexOf("&", ee))),
            (H["b_" + re + "_" + ee] = ""),
            e
              .ajax({ url: K, data: H, dataType: "jsonp" })
              .done(function (z) {
                (L.success = z.result === "success" || /already/.test(z.msg)),
                  L.success || console.info("MailChimp error: " + z.msg),
                  N(L);
              })
              .fail(function () {
                N(L);
              });
        }
        function N(L) {
          var V = L.form,
            H = L.redirect,
            F = L.success;
          if (F && H) {
            Oi.location(H);
            return;
          }
          L.done.toggle(F),
            L.fail.toggle(!F),
            F ? L.done.focus() : L.fail.focus(),
            V.toggle(!F),
            R(L);
        }
        function U(L) {
          L.evt && L.evt.preventDefault(), (L.evt = null);
        }
        function D(L, V) {
          if (!V.fileUploads || !V.fileUploads[L]) return;
          var H,
            F = e(V.fileUploads[L]),
            q = F.find("> .w-file-upload-default"),
            K = F.find("> .w-file-upload-uploading"),
            re = F.find("> .w-file-upload-success"),
            ee = F.find("> .w-file-upload-error"),
            z = q.find(".w-file-upload-input"),
            le = q.find(".w-file-upload-label"),
            Rt = le.children(),
            ge = ee.find(".w-file-upload-error-msg"),
            lt = re.find(".w-file-upload-file"),
            cr = re.find(".w-file-remove-link"),
            lr = lt.find(".w-file-upload-file-name"),
            fr = ge.attr("data-w-size-error"),
            We = ge.attr("data-w-type-error"),
            Ai = ge.attr("data-w-generic-error");
          if (
            (d ||
              le.on("click keydown", function (y) {
                (y.type === "keydown" && y.which !== 13 && y.which !== 32) ||
                  (y.preventDefault(), z.click());
              }),
            le.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            cr.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            d)
          )
            z.on("click", function (y) {
              y.preventDefault();
            }),
              le.on("click", function (y) {
                y.preventDefault();
              }),
              Rt.on("click", function (y) {
                y.preventDefault();
              });
          else {
            cr.on("click keydown", function (y) {
              if (y.type === "keydown") {
                if (y.which !== 13 && y.which !== 32) return;
                y.preventDefault();
              }
              z.removeAttr("data-value"),
                z.val(""),
                lr.html(""),
                q.toggle(!0),
                re.toggle(!1),
                le.focus();
            }),
              z.on("change", function (y) {
                (H = y.target && y.target.files && y.target.files[0]),
                  H &&
                    (q.toggle(!1),
                    ee.toggle(!1),
                    K.toggle(!0),
                    K.focus(),
                    lr.text(H.name),
                    I() || x(V),
                    (V.fileUploads[L].uploading = !0),
                    Z(H, h));
              });
            var Yr = le.outerHeight();
            z.height(Yr), z.width(1);
          }
          function l(y) {
            var O = y.responseJSON && y.responseJSON.msg,
              k = Ai;
            typeof O == "string" && O.indexOf("InvalidFileTypeError") === 0
              ? (k = We)
              : typeof O == "string" &&
                O.indexOf("MaxFileSizeError") === 0 &&
                (k = fr),
              ge.text(k),
              z.removeAttr("data-value"),
              z.val(""),
              K.toggle(!1),
              q.toggle(!0),
              ee.toggle(!0),
              ee.focus(),
              (V.fileUploads[L].uploading = !1),
              I() || R(V);
          }
          function h(y, O) {
            if (y) return l(y);
            var k = O.fileName,
              $ = O.postData,
              se = O.fileId,
              M = O.s3Url;
            z.attr("data-value", se), Y(M, $, H, k, _);
          }
          function _(y) {
            if (y) return l(y);
            K.toggle(!1),
              re.css("display", "inline-block"),
              re.focus(),
              (V.fileUploads[L].uploading = !1),
              I() || R(V);
          }
          function I() {
            var y = (V.fileUploads && V.fileUploads.toArray()) || [];
            return y.some(function (O) {
              return O.uploading;
            });
          }
        }
        function Z(L, V) {
          var H = new URLSearchParams({ name: L.name, size: L.size });
          e.ajax({ type: "GET", url: `${m}?${H}`, crossDomain: !0 })
            .done(function (F) {
              V(null, F);
            })
            .fail(function (F) {
              V(F);
            });
        }
        function Y(L, V, H, F, q) {
          var K = new FormData();
          for (var re in V) K.append(re, V[re]);
          K.append("file", H, F),
            e
              .ajax({
                type: "POST",
                url: L,
                data: K,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                q(null);
              })
              .fail(function (ee) {
                q(ee);
              });
        }
        return r;
      })
    );
  });
  Vs();
  Bs();
  ks();
  js();
  Js();
  A_();
  w_();
  C_();
  N_();
  q_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-194",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a9560f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a9560f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1634398689592,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-75",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".link",
        originalId:
          "65abd257222adee179a9561f|0788c26b-2b18-91df-f25f-2e3df068afcd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".link",
          originalId:
            "65abd257222adee179a9561f|0788c26b-2b18-91df-f25f-2e3df068afcd",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1651331913888,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".link",
        originalId:
          "65abd257222adee179a9561f|0788c26b-2b18-91df-f25f-2e3df068afcd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".link",
          originalId:
            "65abd257222adee179a9561f|0788c26b-2b18-91df-f25f-2e3df068afcd",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1651331913888,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-60",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".tile-img-wrapper",
        originalId:
          "65abd257222adee179a95608|8964077d-29d6-4229-92bd-f52a89d95f10",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tile-img-wrapper",
          originalId:
            "65abd257222adee179a95608|8964077d-29d6-4229-92bd-f52a89d95f10",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1651937334975,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-61",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".tile-img-wrapper",
        originalId:
          "65abd257222adee179a95608|8964077d-29d6-4229-92bd-f52a89d95f10",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tile-img-wrapper",
          originalId:
            "65abd257222adee179a95608|8964077d-29d6-4229-92bd-f52a89d95f10",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1651937334976,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        selector: ".nav-link-wrapper",
        originalId: "26b96e13-b141-fe0a-2f2c-bb83c4653622",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".nav-link-wrapper",
          originalId: "26b96e13-b141-fe0a-2f2c-bb83c4653622",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1652260821644,
    },
    "e-98": {
      id: "e-98",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-97",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        selector: ".nav-link-wrapper",
        originalId: "26b96e13-b141-fe0a-2f2c-bb83c4653622",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".nav-link-wrapper",
          originalId: "26b96e13-b141-fe0a-2f2c-bb83c4653622",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1652260821645,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-64",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-106",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".tile-img-wrapper",
        originalId:
          "65abd257222adee179a95608|8964077d-29d6-4229-92bd-f52a89d95f10",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tile-img-wrapper",
          originalId:
            "65abd257222adee179a95608|8964077d-29d6-4229-92bd-f52a89d95f10",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1652799534525,
    },
    "e-106": {
      id: "e-106",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-65",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-105",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".tile-img-wrapper",
        originalId:
          "65abd257222adee179a95608|8964077d-29d6-4229-92bd-f52a89d95f10",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tile-img-wrapper",
          originalId:
            "65abd257222adee179a95608|8964077d-29d6-4229-92bd-f52a89d95f10",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1652799534526,
    },
    "e-112": {
      id: "e-112",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-65",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-111",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".footer-small-link",
        originalId: "5f825ed3-bdab-7432-8713-7364b8e98fa7",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".footer-small-link",
          originalId: "5f825ed3-bdab-7432-8713-7364b8e98fa7",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1652800416065,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-66",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65abd257222adee179a95608",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a95608",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1652802359178,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-66",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-116",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65abd257222adee179a9561e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a9561e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1652802560391,
    },
    "e-143": {
      id: "e-143",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-66",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-144",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65abd257222adee179a95620",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a95620",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1652804175094,
    },
    "e-147": {
      id: "e-147",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-66",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-148",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "64063dd6d2fb85344cf07ff8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64063dd6d2fb85344cf07ff8",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1652804281176,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-62", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "64063dd6d2fb85344cf07ff8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64063dd6d2fb85344cf07ff8",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-62-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 80,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-62-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 80,
          restingState: 50,
        },
      ],
      createdOn: 1652804290543,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-66",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-152",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "64063dd6d2fb85577af07ff7",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64063dd6d2fb85577af07ff7",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1652804415392,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-62", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "64063dd6d2fb85577af07ff7",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64063dd6d2fb85577af07ff7",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-62-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 80,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-62-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 80,
          restingState: 50,
        },
      ],
      createdOn: 1652804431224,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-66",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-156",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65abd257222adee179a95619",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a95619",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1652804515373,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-66",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-160",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65abd257222adee179a9561a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a9561a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1652804615671,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-164",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button.stroke.footer",
        originalId: "ca587270-932f-62da-99d3-2cceb2d3cdd2",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button",
          originalId: "ca587270-932f-62da-99d3-2cceb2d3cdd2",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676651920283,
    },
    "e-164": {
      id: "e-164",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-163",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button.stroke.footer",
        originalId: "ca587270-932f-62da-99d3-2cceb2d3cdd2",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button",
          originalId: "ca587270-932f-62da-99d3-2cceb2d3cdd2",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676651920285,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-69",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-168",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".social-icon-link",
        originalId: "ab5b7e43-6d1e-9b84-93f8-8d6cb2dec67d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".social-icon-link",
          originalId: "ab5b7e43-6d1e-9b84-93f8-8d6cb2dec67d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677157303684,
    },
    "e-168": {
      id: "e-168",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-70",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-167",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".social-icon-link",
        originalId: "ab5b7e43-6d1e-9b84-93f8-8d6cb2dec67d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".social-icon-link",
          originalId: "ab5b7e43-6d1e-9b84-93f8-8d6cb2dec67d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677157303686,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-71",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-170",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".all-button",
        originalId:
          "65abd257222adee179a95608|58568b7a-16ea-9682-ac8c-7813cc0d156e",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".all-button",
          originalId:
            "65abd257222adee179a95608|58568b7a-16ea-9682-ac8c-7813cc0d156e",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677166682169,
    },
    "e-170": {
      id: "e-170",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-72",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-169",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".all-button",
        originalId:
          "65abd257222adee179a95608|58568b7a-16ea-9682-ac8c-7813cc0d156e",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".all-button",
          originalId:
            "65abd257222adee179a95608|58568b7a-16ea-9682-ac8c-7813cc0d156e",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677166682171,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-64",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-174",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".full-bleed-case-link",
        originalId:
          "65abd257222adee179a95608|271db5be-7f56-f660-d101-821eed549874",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".full-bleed-case-link",
          originalId:
            "65abd257222adee179a95608|271db5be-7f56-f660-d101-821eed549874",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677182947222,
    },
    "e-174": {
      id: "e-174",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-65",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-173",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".full-bleed-case-link",
        originalId:
          "65abd257222adee179a95608|271db5be-7f56-f660-d101-821eed549874",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".full-bleed-case-link",
          originalId:
            "65abd257222adee179a95608|271db5be-7f56-f660-d101-821eed549874",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677182947223,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-64",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-176",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".grid-case-link",
        originalId:
          "65abd257222adee179a95608|22d637a1-964d-6b2c-66e3-4f4d253e662d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".grid-case-link",
          originalId:
            "65abd257222adee179a95608|22d637a1-964d-6b2c-66e3-4f4d253e662d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677182993288,
    },
    "e-176": {
      id: "e-176",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-65",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-175",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".grid-case-link",
        originalId:
          "65abd257222adee179a95608|22d637a1-964d-6b2c-66e3-4f4d253e662d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".grid-case-link",
          originalId:
            "65abd257222adee179a95608|22d637a1-964d-6b2c-66e3-4f4d253e662d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677182993344,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-64",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-180",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".instagram-link-wrapper",
        originalId: "a1cdcd15-8bd3-0aff-0223-f2f91ab98212",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".instagram-link-wrapper",
          originalId: "a1cdcd15-8bd3-0aff-0223-f2f91ab98212",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677183233470,
    },
    "e-180": {
      id: "e-180",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-65",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-179",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".instagram-link-wrapper",
        originalId: "a1cdcd15-8bd3-0aff-0223-f2f91ab98212",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".instagram-link-wrapper",
          originalId: "a1cdcd15-8bd3-0aff-0223-f2f91ab98212",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677183233471,
    },
    "e-187": {
      id: "e-187",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-75",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-188",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".grid-case-link",
        originalId:
          "65abd257222adee179a95608|22d637a1-964d-6b2c-66e3-4f4d253e662d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".grid-case-link",
          originalId:
            "65abd257222adee179a95608|22d637a1-964d-6b2c-66e3-4f4d253e662d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677183928489,
    },
    "e-188": {
      id: "e-188",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-76",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-187",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".grid-case-link",
        originalId:
          "65abd257222adee179a95608|22d637a1-964d-6b2c-66e3-4f4d253e662d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".grid-case-link",
          originalId:
            "65abd257222adee179a95608|22d637a1-964d-6b2c-66e3-4f4d253e662d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677183928490,
    },
    "e-193": {
      id: "e-193",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-80",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-194",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bc4c7d6d-d93d-298c-8a61-fe72ebd6c945",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bc4c7d6d-d93d-298c-8a61-fe72ebd6c945",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1572717862474,
    },
    "e-199": {
      id: "e-199",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-80",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-200",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".contact-us-close-link",
        originalId: "bc4c7d6d-d93d-298c-8a61-fe72ebd6c94c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          id: "bc4c7d6d-d93d-298c-8a61-fe72ebd6c94c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1572714786982,
    },
    "e-201": {
      id: "e-201",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-202",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".contact-us-trigger",
        originalId: "df79d01f-48b4-3573-c518-a40ec5bde2df",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".contact-us-trigger",
          originalId: "df79d01f-48b4-3573-c518-a40ec5bde2df",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677415750651,
    },
    "e-205": {
      id: "e-205",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-206",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a95608",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a95608",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677417844345,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-208",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a9561a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a9561a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677418419516,
    },
    "e-208": {
      id: "e-208",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-106",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-207",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a9561a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a9561a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677418419517,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-210",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a95619",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a95619",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677418445700,
    },
    "e-211": {
      id: "e-211",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-212",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64063dd6d2fb85577af07ff7",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64063dd6d2fb85577af07ff7",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677418458065,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-214",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64063dd6d2fb85344cf07ff8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64063dd6d2fb85344cf07ff8",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677418469312,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-216",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a9561e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a9561e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677418482646,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-220",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a95620",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a95620",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677418502381,
    },
    "e-225": {
      id: "e-225",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-64",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-226",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".case-img-item",
        originalId:
          "65abd257222adee179a95619|43ae2e8d-28c5-9a93-7512-a71d040d854d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".case-img-item",
          originalId:
            "65abd257222adee179a95619|43ae2e8d-28c5-9a93-7512-a71d040d854d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677428493618,
    },
    "e-226": {
      id: "e-226",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-65",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-225",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".case-img-item",
        originalId:
          "65abd257222adee179a95619|43ae2e8d-28c5-9a93-7512-a71d040d854d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".case-img-item",
          originalId:
            "65abd257222adee179a95619|43ae2e8d-28c5-9a93-7512-a71d040d854d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677428493619,
    },
    "e-233": {
      id: "e-233",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-234",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".contact-email-link",
        originalId: "88f4e714-7516-ee10-4d9b-f3f3cbb3a371",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".contact-email-link",
          originalId: "88f4e714-7516-ee10-4d9b-f3f3cbb3a371",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678745594953,
    },
    "e-234": {
      id: "e-234",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-233",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".contact-email-link",
        originalId: "88f4e714-7516-ee10-4d9b-f3f3cbb3a371",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".contact-email-link",
          originalId: "88f4e714-7516-ee10-4d9b-f3f3cbb3a371",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678745594955,
    },
    "e-235": {
      id: "e-235",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-60",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-236",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".project-item",
        originalId:
          "65abd257222adee179a95608|56bf62da-9644-41a1-366f-1ffad0847c22",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".project-item",
          originalId:
            "65abd257222adee179a95608|56bf62da-9644-41a1-366f-1ffad0847c22",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678837528690,
    },
    "e-236": {
      id: "e-236",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-61",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-235",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".project-item",
        originalId:
          "65abd257222adee179a95608|56bf62da-9644-41a1-366f-1ffad0847c22",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".project-item",
          originalId:
            "65abd257222adee179a95608|56bf62da-9644-41a1-366f-1ffad0847c22",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678837528691,
    },
    "e-237": {
      id: "e-237",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-82", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".full-width-img",
        originalId:
          "65abd257222adee179a95608|39897022-507e-a8b7-4126-5a2e1951a23a",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".full-width-img",
          originalId:
            "65abd257222adee179a95608|39897022-507e-a8b7-4126-5a2e1951a23a",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-82-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1679001711124,
    },
    "e-240": {
      id: "e-240",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-241",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".tag.category",
        originalId:
          "65abd257222adee179a9561e|f758f521-8b42-6b19-6c4b-f19bb4e97378",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tag.category",
          originalId:
            "65abd257222adee179a9561e|f758f521-8b42-6b19-6c4b-f19bb4e97378",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679080105413,
    },
    "e-241": {
      id: "e-241",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-240",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".tag.category",
        originalId:
          "65abd257222adee179a9561e|f758f521-8b42-6b19-6c4b-f19bb4e97378",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tag.category",
          originalId:
            "65abd257222adee179a9561e|f758f521-8b42-6b19-6c4b-f19bb4e97378",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679080105415,
    },
    "e-248": {
      id: "e-248",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-64",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-249",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".project-link",
        originalId:
          "65abd257222adee179a95608|8a308b91-f238-1bc7-f975-232ed5f238c2",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".project-link",
          originalId:
            "65abd257222adee179a95608|8a308b91-f238-1bc7-f975-232ed5f238c2",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679329482818,
    },
    "e-249": {
      id: "e-249",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-65",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-248",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".project-link",
        originalId:
          "65abd257222adee179a95608|8a308b91-f238-1bc7-f975-232ed5f238c2",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".project-link",
          originalId:
            "65abd257222adee179a95608|8a308b91-f238-1bc7-f975-232ed5f238c2",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679329482820,
    },
    "e-252": {
      id: "e-252",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-253",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".contact-email-link",
        originalId: "88f4e714-7516-ee10-4d9b-f3f3cbb3a371",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".contact-email-link",
          originalId: "88f4e714-7516-ee10-4d9b-f3f3cbb3a371",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679404077788,
    },
    "e-254": {
      id: "e-254",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-84",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-255",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".get-template-link-wrapper",
        originalId: "61c83e82-f23e-e193-dbc7-903fc35d2ec8",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".get-template-link-wrapper",
          originalId: "61c83e82-f23e-e193-dbc7-903fc35d2ec8",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681918846214,
    },
    "e-255": {
      id: "e-255",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-85",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-254",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".get-template-link-wrapper",
        originalId: "61c83e82-f23e-e193-dbc7-903fc35d2ec8",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".get-template-link-wrapper",
          originalId: "61c83e82-f23e-e193-dbc7-903fc35d2ec8",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681918846214,
    },
    "e-256": {
      id: "e-256",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-64",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-257",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".next-project-link",
        originalId:
          "65abd257222adee179a95619|40d3d3ba-a640-35ec-313c-c1d4076f5896",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".next-project-link",
          originalId:
            "65abd257222adee179a95619|40d3d3ba-a640-35ec-313c-c1d4076f5896",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1683977686394,
    },
    "e-257": {
      id: "e-257",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-65",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-256",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".next-project-link",
        originalId:
          "65abd257222adee179a95619|40d3d3ba-a640-35ec-313c-c1d4076f5896",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".next-project-link",
          originalId:
            "65abd257222adee179a95619|40d3d3ba-a640-35ec-313c-c1d4076f5896",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1683977686396,
    },
    "e-266": {
      id: "e-266",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-64",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-267",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".showreel-lightbox",
        originalId:
          "65abd257222adee179a95608|bc2a6ace-4b19-4136-3911-d3aaf087c893",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".showreel-lightbox",
          originalId:
            "65abd257222adee179a95608|bc2a6ace-4b19-4136-3911-d3aaf087c893",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1684933497849,
    },
    "e-267": {
      id: "e-267",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-65",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-266",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".showreel-lightbox",
        originalId:
          "65abd257222adee179a95608|bc2a6ace-4b19-4136-3911-d3aaf087c893",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".showreel-lightbox",
          originalId:
            "65abd257222adee179a95608|bc2a6ace-4b19-4136-3911-d3aaf087c893",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1684933497850,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-64",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-272",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".work-item",
        originalId:
          "65abd257222adee179a95608|715deb26-1f42-1828-0c41-fa9739b72822",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".work-item",
          originalId:
            "65abd257222adee179a95608|715deb26-1f42-1828-0c41-fa9739b72822",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685035861322,
    },
    "e-272": {
      id: "e-272",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-65",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-271",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".work-item",
        originalId:
          "65abd257222adee179a95608|715deb26-1f42-1828-0c41-fa9739b72822",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".work-item",
          originalId:
            "65abd257222adee179a95608|715deb26-1f42-1828-0c41-fa9739b72822",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685035861324,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-75",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-274",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".work-item",
        originalId:
          "65abd257222adee179a95608|715deb26-1f42-1828-0c41-fa9739b72822",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".work-item",
          originalId:
            "65abd257222adee179a95608|715deb26-1f42-1828-0c41-fa9739b72822",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685036121681,
    },
    "e-274": {
      id: "e-274",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-76",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-273",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".work-item",
        originalId:
          "65abd257222adee179a95608|715deb26-1f42-1828-0c41-fa9739b72822",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".work-item",
          originalId:
            "65abd257222adee179a95608|715deb26-1f42-1828-0c41-fa9739b72822",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685036121682,
    },
    "e-280": {
      id: "e-280",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-281",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".button.primary",
        originalId:
          "65abd257222adee179a95608|25f39e27-47ad-eeee-b5fa-a544f1f28cb3",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button.primary",
          originalId:
            "65abd257222adee179a95608|25f39e27-47ad-eeee-b5fa-a544f1f28cb3",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685396337129,
    },
    "e-281": {
      id: "e-281",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-101",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-280",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".button.primary",
        originalId:
          "65abd257222adee179a95608|25f39e27-47ad-eeee-b5fa-a544f1f28cb3",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button.primary",
          originalId:
            "65abd257222adee179a95608|25f39e27-47ad-eeee-b5fa-a544f1f28cb3",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685396337130,
    },
    "e-282": {
      id: "e-282",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-283",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".button.stroke",
        originalId:
          "65abd257222adee179a95608|d6600832-e163-3ae5-1b69-ad5361bd1c1a",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button.stroke",
          originalId:
            "65abd257222adee179a95608|d6600832-e163-3ae5-1b69-ad5361bd1c1a",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685396566517,
    },
    "e-283": {
      id: "e-283",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-101",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-282",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".button.stroke",
        originalId:
          "65abd257222adee179a95608|d6600832-e163-3ae5-1b69-ad5361bd1c1a",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button.stroke",
          originalId:
            "65abd257222adee179a95608|d6600832-e163-3ae5-1b69-ad5361bd1c1a",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685396566518,
    },
    "e-284": {
      id: "e-284",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-285",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".button.footer",
        originalId: "9819423e-34b1-7189-05e0-2554add9522b",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button.footer",
          originalId: "9819423e-34b1-7189-05e0-2554add9522b",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685396731381,
    },
    "e-285": {
      id: "e-285",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-284",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".button.footer",
        originalId: "9819423e-34b1-7189-05e0-2554add9522b",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button.footer",
          originalId: "9819423e-34b1-7189-05e0-2554add9522b",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685396731382,
    },
    "e-290": {
      id: "e-290",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-82", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".page-wrapper",
        originalId:
          "65abd257222adee179a95608|f6f6a0d8-12ea-e906-0174-5bc8bee2a6fd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".page-wrapper",
          originalId:
            "65abd257222adee179a95608|f6f6a0d8-12ea-e906-0174-5bc8bee2a6fd",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-82-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1685614871411,
    },
    "e-302": {
      id: "e-302",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-303",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".link.medium.enquiries",
        originalId: "a937a8c0-dda9-99a6-23ed-87eda5da53ea",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".link.medium.enquiries",
          originalId: "a937a8c0-dda9-99a6-23ed-87eda5da53ea",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686181273609,
    },
    "e-304": {
      id: "e-304",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-305",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button.footer.enquiries",
        originalId: "743c7309-bdb9-79bc-5ef7-89d7346328f0",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button.footer.enquiries",
          originalId: "743c7309-bdb9-79bc-5ef7-89d7346328f0",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686181347778,
    },
    "e-306": {
      id: "e-306",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-307",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".menu-item-wrapper.slide-panel.enquiries",
        originalId: "a937a8c0-dda9-99a6-23ed-87eda5da5422",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu-item-wrapper.slide-panel.enquiries",
          originalId: "a937a8c0-dda9-99a6-23ed-87eda5da5422",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686181401277,
    },
    "e-308": {
      id: "e-308",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-309",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button.stroke.enquiries",
        originalId:
          "65abd257222adee179a95619|9769b4bb-133e-756d-e27e-3014fd35312a",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button.stroke.enquiries",
          originalId:
            "65abd257222adee179a95619|9769b4bb-133e-756d-e27e-3014fd35312a",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686181971363,
    },
    "e-312": {
      id: "e-312",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-62", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".cursor",
        originalId:
          "65abd257222adee179a95608|1a5faabe-6d97-4c7b-74db-bdfbbad3f6e5",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cursor",
          originalId:
            "65abd257222adee179a95608|1a5faabe-6d97-4c7b-74db-bdfbbad3f6e5",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-62-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 90,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-62-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 90,
          restingState: 50,
        },
      ],
      createdOn: 1687292316221,
    },
    "e-313": {
      id: "e-313",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-66",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-314",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65abd257222adee179a9561c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a9561c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688577897381,
    },
    "e-315": {
      id: "e-315",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-316",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a9561c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a9561c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688577897381,
    },
    "e-317": {
      id: "e-317",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-318",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a95618",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a95618",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688578547136,
    },
    "e-318": {
      id: "e-318",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-106",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-317",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a95618",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a95618",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688578547137,
    },
    "e-319": {
      id: "e-319",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-320",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button",
        originalId: "ca587270-932f-62da-99d3-2cceb2d3cdd2",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button",
          originalId: "ca587270-932f-62da-99d3-2cceb2d3cdd2",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706974138540,
    },
    "e-320": {
      id: "e-320",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-319",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button",
        originalId: "ca587270-932f-62da-99d3-2cceb2d3cdd2",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button",
          originalId: "ca587270-932f-62da-99d3-2cceb2d3cdd2",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706974138541,
    },
    "e-321": {
      id: "e-321",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-322",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".menu-link",
        originalId: "a937a8c0-dda9-99a6-23ed-87eda5da53f6",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu-link",
          originalId: "a937a8c0-dda9-99a6-23ed-87eda5da53f6",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1708976125056,
    },
    "e-322": {
      id: "e-322",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-321",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".menu-link",
        originalId: "a937a8c0-dda9-99a6-23ed-87eda5da53f6",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu-link",
          originalId: "a937a8c0-dda9-99a6-23ed-87eda5da53f6",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1708976125057,
    },
    "e-324": {
      id: "e-324",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-106",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-323",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a95608",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a95608",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709223189575,
    },
    "e-325": {
      id: "e-325",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-107", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".work-item",
        originalId:
          "65abd257222adee179a95608|21f8c0f7-3182-b3c3-9ab8-038576a1bcc8",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".work-item",
          originalId:
            "65abd257222adee179a95608|21f8c0f7-3182-b3c3-9ab8-038576a1bcc8",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-107-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 90,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-107-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 90,
          restingState: 50,
        },
      ],
      createdOn: 1709224107132,
    },
    "e-326": {
      id: "e-326",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-108", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".section.is-footer",
        originalId: "bde878f8-4cef-f3d9-dbd5-20e160966ad5",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".section.is-footer",
          originalId: "bde878f8-4cef-f3d9-dbd5-20e160966ad5",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-108-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 78,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-108-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 78,
          restingState: 50,
        },
      ],
      createdOn: 1709316764262,
    },
    "e-327": {
      id: "e-327",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-109",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-328",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".heading-style-h2.footer-contact-reaction",
        originalId: "bde878f8-4cef-f3d9-dbd5-20e160966ae7",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".heading-style-h2.footer-contact-reaction",
          originalId: "bde878f8-4cef-f3d9-dbd5-20e160966ae7",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709386443412,
    },
    "e-328": {
      id: "e-328",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-110",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-327",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".heading-style-h2.footer-contact-reaction",
        originalId: "bde878f8-4cef-f3d9-dbd5-20e160966ae7",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".heading-style-h2.footer-contact-reaction",
          originalId: "bde878f8-4cef-f3d9-dbd5-20e160966ae7",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709386443413,
    },
    "e-329": {
      id: "e-329",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-109",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-330",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".footer-contact-reaction",
        originalId: "bde878f8-4cef-f3d9-dbd5-20e160966ae7",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".footer-contact-reaction",
          originalId: "bde878f8-4cef-f3d9-dbd5-20e160966ae7",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709386665798,
    },
    "e-330": {
      id: "e-330",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-110",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-329",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".footer-contact-reaction",
        originalId: "bde878f8-4cef-f3d9-dbd5-20e160966ae7",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".footer-contact-reaction",
          originalId: "bde878f8-4cef-f3d9-dbd5-20e160966ae7",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709386665799,
    },
    "e-331": {
      id: "e-331",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-332",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bde878f8-4cef-f3d9-dbd5-20e160966b0e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bde878f8-4cef-f3d9-dbd5-20e160966b0e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709390200644,
    },
    "e-333": {
      id: "e-333",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-334",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a95608|b6e9352f-c796-b8e3-dae7-9bb22273238a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a95608|b6e9352f-c796-b8e3-dae7-9bb22273238a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709392586382,
    },
    "e-335": {
      id: "e-335",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-336",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "42e10013-9d84-b70c-1cf6-c8991c1824d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "42e10013-9d84-b70c-1cf6-c8991c1824d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709392614496,
    },
    "e-337": {
      id: "e-337",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-111",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-338",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".grid-cell",
        originalId:
          "65abd257222adee179a95608|4de8cfa3-c0a4-e45d-90d1-0e986216f59d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".grid-cell",
          originalId:
            "65abd257222adee179a95608|4de8cfa3-c0a4-e45d-90d1-0e986216f59d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709392889120,
    },
    "e-338": {
      id: "e-338",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-112",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-337",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".grid-cell",
        originalId:
          "65abd257222adee179a95608|4de8cfa3-c0a4-e45d-90d1-0e986216f59d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".grid-cell",
          originalId:
            "65abd257222adee179a95608|4de8cfa3-c0a4-e45d-90d1-0e986216f59d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709392889122,
    },
    "e-339": {
      id: "e-339",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-82", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".section",
        originalId:
          "65abd257222adee179a95608|46c3b865-b7a0-5d05-e10b-2b4f0912639f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".section",
          originalId:
            "65abd257222adee179a95608|46c3b865-b7a0-5d05-e10b-2b4f0912639f",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-82-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1709394851008,
    },
    "e-340": {
      id: "e-340",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-341",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "a4a64c85-e772-d254-2d0e-c5daa62c00c5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a4a64c85-e772-d254-2d0e-c5daa62c00c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709413840994,
    },
    "e-342": {
      id: "e-342",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-343",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "a937a8c0-dda9-99a6-23ed-87eda5da53fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a937a8c0-dda9-99a6-23ed-87eda5da53fa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709414449118,
    },
    "e-344": {
      id: "e-344",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-102",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-345",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "a937a8c0-dda9-99a6-23ed-87eda5da53f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a937a8c0-dda9-99a6-23ed-87eda5da53f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709415043778,
    },
    "e-346": {
      id: "e-346",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-75",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-347",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".journal-item",
        originalId:
          "65abd257222adee179a95608|cf2dbcc3-f54b-1299-819f-03ab1a8d8f7f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".journal-item",
          originalId:
            "65abd257222adee179a95608|cf2dbcc3-f54b-1299-819f-03ab1a8d8f7f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709566852274,
    },
    "e-347": {
      id: "e-347",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-76",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-346",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".journal-item",
        originalId:
          "65abd257222adee179a95608|cf2dbcc3-f54b-1299-819f-03ab1a8d8f7f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".journal-item",
          originalId:
            "65abd257222adee179a95608|cf2dbcc3-f54b-1299-819f-03ab1a8d8f7f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709566852276,
    },
    "e-348": {
      id: "e-348",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-107", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".journal-item",
        originalId:
          "65abd257222adee179a95608|cf2dbcc3-f54b-1299-819f-03ab1a8d8f7f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".journal-item",
          originalId:
            "65abd257222adee179a95608|cf2dbcc3-f54b-1299-819f-03ab1a8d8f7f",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-107-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 80,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-107-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 80,
          restingState: 50,
        },
      ],
      createdOn: 1709566953973,
    },
    "e-349": {
      id: "e-349",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-66",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-350",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65e5edec2b8bb36451c7744f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65e5edec2b8bb36451c7744f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709567469379,
    },
    "e-351": {
      id: "e-351",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-352",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65e5edec2b8bb36451c7744f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65e5edec2b8bb36451c7744f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709567469379,
    },
    "e-354": {
      id: "e-354",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-106",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-353",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65e5edec2b8bb36451c7744f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65e5edec2b8bb36451c7744f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709567469379,
    },
    "e-355": {
      id: "e-355",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-114", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".about-photo-sliding-wrapper",
        originalId:
          "65e5edec2b8bb36451c7744f|3c80192d-9147-e51c-f70f-c71eb57d63ef",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".about-photo-sliding-wrapper",
          originalId:
            "65e5edec2b8bb36451c7744f|3c80192d-9147-e51c-f70f-c71eb57d63ef",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-114-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1709570274721,
    },
    "e-357": {
      id: "e-357",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-115",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-356",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a95619",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a95619",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716474170908,
    },
    "e-359": {
      id: "e-359",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-106",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-358",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a9561e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a9561e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718223655710,
    },
    "e-361": {
      id: "e-361",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-106",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-360",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a9561c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a9561c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718223710646,
    },
    "e-363": {
      id: "e-363",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-106",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-362",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65abd257222adee179a95619",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65abd257222adee179a95619",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718223832006,
    },
    "e-364": {
      id: "e-364",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-116",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-365",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".work-item-link",
        originalId: "f5eb518e-f5a8-5d9b-412a-d6716e710c27",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".work-item-link",
          originalId: "f5eb518e-f5a8-5d9b-412a-d6716e710c27",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718709188848,
    },
    "e-365": {
      id: "e-365",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-117",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-364",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".work-item-link",
        originalId: "f5eb518e-f5a8-5d9b-412a-d6716e710c27",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".work-item-link",
          originalId: "f5eb518e-f5a8-5d9b-412a-d6716e710c27",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718709188849,
    },
  },
  actionLists: {
    "a-19": {
      id: "a-19",
      title: "⏱ Page Load Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n-39",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".page-overlay",
                  selectorGuids: ["f36af420-32c9-f137-e677-17bdc3837fd2"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-19-n-43",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".page-overlay",
                  selectorGuids: ["f36af420-32c9-f137-e677-17bdc3837fd2"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-41",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".page-overlay",
                  selectorGuids: ["f36af420-32c9-f137-e677-17bdc3837fd2"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-40",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "easeIn",
                duration: 600,
                target: {
                  selector: ".page-overlay",
                  selectorGuids: ["f36af420-32c9-f137-e677-17bdc3837fd2"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-42",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".page-overlay",
                  selectorGuids: ["f36af420-32c9-f137-e677-17bdc3837fd2"],
                },
                value: "none",
              },
            },
            {
              id: "a-19-n-44",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".page-overlay",
                  selectorGuids: ["f36af420-32c9-f137-e677-17bdc3837fd2"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1634397143556,
    },
    "a-37": {
      id: "a-37",
      title: "👆 Hover In On Link",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-floating-text",
                  selectorGuids: ["9f9e0f24-5f45-c31e-2dd5-f47055c61100"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["c61adcee-0192-1922-a938-0a32c3f8a03c"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-floating-text",
                  selectorGuids: ["9f9e0f24-5f45-c31e-2dd5-f47055c61100"],
                },
                yValue: -112,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["c61adcee-0192-1922-a938-0a32c3f8a03c"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["c61adcee-0192-1922-a938-0a32c3f8a03c"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["c61adcee-0192-1922-a938-0a32c3f8a03c"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1651331945885,
    },
    "a-38": {
      id: "a-38",
      title: "👇 Hover Out On Link",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-floating-text",
                  selectorGuids: ["9f9e0f24-5f45-c31e-2dd5-f47055c61100"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-38-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {},
                yValue: 101,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-38-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["c61adcee-0192-1922-a938-0a32c3f8a03c"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1651331945885,
    },
    "a-60": {
      id: "a-60",
      title: "👆 Hover In on Project Grid Item",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-60-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                yValue: -200,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-60-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".project-item",
                  selectorGuids: ["9cbe4cad-afc3-2203-e03b-9432f6f3475b"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-60-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                yValue: 200,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-60-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 400,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-60-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".project-item",
                  selectorGuids: ["9cbe4cad-afc3-2203-e03b-9432f6f3475b"],
                },
                xValue: 0.95,
                yValue: 0.95,
                locked: true,
              },
            },
            {
              id: "a-60-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 400,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1652275309510,
    },
    "a-61": {
      id: "a-61",
      title: "👇 Hover Out on Project Grid Item",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-61-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 400,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".project-item",
                  selectorGuids: ["9cbe4cad-afc3-2203-e03b-9432f6f3475b"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-61-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 400,
                target: {},
                yValue: 200,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-61-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 400,
                target: {},
                yValue: -200,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1652275309510,
    },
    a: {
      id: "a",
      title: "👆Hover In on Nav Link",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-link-text",
                  selectorGuids: ["083636f4-c059-7f84-48bd-705109d9e530"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-link-wrapper",
                  selectorGuids: ["8d01bcfe-e825-440a-70d5-36b7834acb51"],
                },
                value: 0.6,
                unit: "",
              },
            },
            {
              id: "a-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-link-text",
                  selectorGuids: ["083636f4-c059-7f84-48bd-705109d9e530"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1633850113891,
    },
    "a-2": {
      id: "a-2",
      title: "👇Hover Out on Nav Link",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-link-wrapper",
                  selectorGuids: ["8d01bcfe-e825-440a-70d5-36b7834acb51"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-link-text",
                  selectorGuids: ["083636f4-c059-7f84-48bd-705109d9e530"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1633850113891,
    },
    "a-64": {
      id: "a-64",
      title: "👆 Cursor Reaction on Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-64-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-64-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {},
                xValue: 1.5,
                yValue: 1.5,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1652799539742,
    },
    "a-65": {
      id: "a-65",
      title: "👇 Cursor Reaction on Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-65-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {},
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1652799539742,
    },
    "a-66": {
      id: "a-66",
      title: "🖱 Cursor Is Show",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-66-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".cursor",
                  selectorGuids: ["15641034-4a30-298b-3bab-1d856fdd0148"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-66-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".cursor",
                  selectorGuids: ["15641034-4a30-298b-3bab-1d856fdd0148"],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1652802364575,
    },
    "a-62": {
      id: "a-62",
      title: "Cursor Dot 1",
      continuousParameterGroups: [
        {
          id: "a-62-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-62-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    xValue: -10,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-62-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    xValue: 10,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-62-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-62-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    yValue: -10,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-62-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    yValue: 10,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1652792706217,
    },
    "a-69": {
      id: "a-69",
      title: "👆 Social Icon Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-69-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 0,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-69-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {},
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-69-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 0,
                target: {},
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-69-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677157308714,
    },
    "a-70": {
      id: "a-70",
      title: "👇 Social Icon Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-70-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 0,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677157308714,
    },
    "a-71": {
      id: "a-71",
      title: "👆 All Button Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-71-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                yValue: -200,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-71-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {},
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {},
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-71-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-71-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 200,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677162354259,
    },
    "a-72": {
      id: "a-72",
      title: "👇 All Button Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-72-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {},
                yValue: -200,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {},
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677162354259,
    },
    "a-75": {
      id: "a-75",
      title: "👆 Hover In on Case",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-75-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tile-cursor",
                  selectorGuids: ["71feb215-bed6-3200-d051-708eed8fa969"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-75-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".work-item-info",
                  selectorGuids: ["3ac6e364-65b8-3740-ad4b-0d7481f79430"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-75-n-10",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".work-item-img",
                  selectorGuids: ["90a34bb9-baa4-aa3a-192e-b1bfb75b6a3e"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-75-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tile-cursor",
                  selectorGuids: ["71feb215-bed6-3200-d051-708eed8fa969"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-75-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".work-item-info",
                  selectorGuids: ["3ac6e364-65b8-3740-ad4b-0d7481f79430"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-75-n-11",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".work-item-img",
                  selectorGuids: ["90a34bb9-baa4-aa3a-192e-b1bfb75b6a3e"],
                },
                xValue: 0.95,
                yValue: 0.95,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677183937773,
    },
    "a-76": {
      id: "a-76",
      title: "👇 Hover Out on Case",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-76-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tile-cursor",
                  selectorGuids: ["71feb215-bed6-3200-d051-708eed8fa969"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-76-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".work-item-info",
                  selectorGuids: ["3ac6e364-65b8-3740-ad4b-0d7481f79430"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-76-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".work-item-img",
                  selectorGuids: ["90a34bb9-baa4-aa3a-192e-b1bfb75b6a3e"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677183937773,
    },
    "a-80": {
      id: "a-80",
      title: "Contact Us Form Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-80-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 500,
                target: {
                  selector: ".contact-us-overlay",
                  selectorGuids: ["613f22f5-03c2-71a8-c5d4-32bb0abcabd4"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-80-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 500,
                target: {
                  selector: ".contact-us-container",
                  selectorGuids: ["613f22f5-03c2-71a8-c5d4-32bb0abcabd9"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-80-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 0,
                target: {
                  selector: ".contact-us-wrapper",
                  selectorGuids: ["613f22f5-03c2-71a8-c5d4-32bb0abcabda"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1572714307336,
    },
    "a-79": {
      id: "a-79",
      title: "Contact Us Form Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-79-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 500,
                target: {
                  selector: ".contact-us-overlay",
                  selectorGuids: ["613f22f5-03c2-71a8-c5d4-32bb0abcabd4"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-79-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 500,
                target: {
                  selector: ".contact-us-container",
                  selectorGuids: ["613f22f5-03c2-71a8-c5d4-32bb0abcabd9"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-79-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 0,
                target: {
                  selector: ".contact-us-wrapper",
                  selectorGuids: ["613f22f5-03c2-71a8-c5d4-32bb0abcabda"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-79-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".contact-us-wrapper",
                  selectorGuids: ["613f22f5-03c2-71a8-c5d4-32bb0abcabda"],
                },
                value: "flex",
              },
            },
            {
              id: "a-79-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 500,
                target: {
                  selector: ".contact-us-overlay",
                  selectorGuids: ["613f22f5-03c2-71a8-c5d4-32bb0abcabd4"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-79-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 500,
                target: {
                  selector: ".contact-us-container",
                  selectorGuids: ["613f22f5-03c2-71a8-c5d4-32bb0abcabd9"],
                },
                xValue: 0,
                yValue: null,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1572714307336,
    },
    "a-106": {
      id: "a-106",
      title: "⏱️ Open Project Marquee",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-106-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".tile-cursor-marquee",
                  selectorGuids: ["2102396d-c61c-294c-0271-71eef81332ab"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-106-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 4000,
                target: {
                  selector: ".tile-cursor-marquee",
                  selectorGuids: ["2102396d-c61c-294c-0271-71eef81332ab"],
                },
                xValue: -50,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1709223193696,
    },
    "a-82": {
      id: "a-82",
      title: "Image Scale on Scroll",
      continuousParameterGroups: [
        {
          id: "a-82-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-82-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img",
                      selectorGuids: ["0d956c1e-048d-a2e3-155f-51f3a81946ae"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-82-n-3",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img",
                      selectorGuids: ["0d956c1e-048d-a2e3-155f-51f3a81946ae"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-82-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img",
                      selectorGuids: ["0d956c1e-048d-a2e3-155f-51f3a81946ae"],
                    },
                    yValue: -10,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-82-n-4",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img",
                      selectorGuids: ["0d956c1e-048d-a2e3-155f-51f3a81946ae"],
                    },
                    xValue: 1.2,
                    yValue: 1.2,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1679001717524,
    },
    "a-84": {
      id: "a-84",
      title: "Get Template Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-84-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".get-template-link.more-templates",
                  selectorGuids: [
                    "2c1f7ef4-1c74-dd07-14de-876ce791fce5",
                    "2c1f7ef4-1c74-dd07-14de-876ce791fce6",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-84-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".get-template-link.more-templates",
                  selectorGuids: [
                    "2c1f7ef4-1c74-dd07-14de-876ce791fce5",
                    "2c1f7ef4-1c74-dd07-14de-876ce791fce6",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1681918868705,
    },
    "a-85": {
      id: "a-85",
      title: "Get Template Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-85-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".get-template-link.more-templates",
                  selectorGuids: [
                    "2c1f7ef4-1c74-dd07-14de-876ce791fce5",
                    "2c1f7ef4-1c74-dd07-14de-876ce791fce6",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1681918868705,
    },
    "a-101": {
      id: "a-101",
      title: "👇 Hover Out On Link With Stroke",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-101-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  id: "65abd257222adee179a9561f|e3e7a5fe-6359-5d01-77c3-02b461834024",
                },
                yValue: -10,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-101-n-2",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.stroke",
                  selectorGuids: [
                    "56b07317-f0df-e8c5-7c87-e2a368b7b164",
                    "87a9285c-103b-636a-8cac-6f16f53820ca",
                  ],
                },
                globalSwatchId: "42427855",
                rValue: 14,
                bValue: 13,
                gValue: 13,
                aValue: 1,
              },
            },
            {
              id: "a-101-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {},
                yValue: 101,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-101-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  id: "65abd257222adee179a9561f|e3e7a5fe-6359-5d01-77c3-02b461834027",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1651331945885,
    },
    "a-100": {
      id: "a-100",
      title: "👆 Hover In On Link With Stroke",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-100-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65abd257222adee179a9561f|e3e7a5fe-6359-5d01-77c3-02b461834024",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-100-n-2",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.stroke",
                  selectorGuids: [
                    "56b07317-f0df-e8c5-7c87-e2a368b7b164",
                    "87a9285c-103b-636a-8cac-6f16f53820ca",
                  ],
                },
                globalSwatchId: "42427855",
                rValue: 14,
                bValue: 13,
                gValue: 13,
                aValue: 1,
              },
            },
            {
              id: "a-100-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                yValue: 101,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-100-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65abd257222adee179a9561f|e3e7a5fe-6359-5d01-77c3-02b461834027",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-100-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  id: "65abd257222adee179a9561f|e3e7a5fe-6359-5d01-77c3-02b461834024",
                },
                yValue: -128,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-100-n-6",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button.stroke",
                  selectorGuids: [
                    "56b07317-f0df-e8c5-7c87-e2a368b7b164",
                    "87a9285c-103b-636a-8cac-6f16f53820ca",
                  ],
                },
                globalSwatchId: "",
                rValue: 14,
                bValue: 13,
                gValue: 13,
                aValue: 0,
              },
            },
            {
              id: "a-100-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-100-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  id: "65abd257222adee179a9561f|e3e7a5fe-6359-5d01-77c3-02b461834027",
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-100-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "65abd257222adee179a9561f|e3e7a5fe-6359-5d01-77c3-02b461834027",
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-100-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  id: "65abd257222adee179a9561f|e3e7a5fe-6359-5d01-77c3-02b461834027",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1651331945885,
    },
    "a-107": {
      id: "a-107",
      title: "Case Cursor Moving",
      continuousParameterGroups: [
        {
          id: "a-107-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-107-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "easeOut",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".tile-cursor",
                      selectorGuids: ["71feb215-bed6-3200-d051-708eed8fa969"],
                    },
                    xValue: -100,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-107-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "easeOut",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".tile-cursor",
                      selectorGuids: ["71feb215-bed6-3200-d051-708eed8fa969"],
                    },
                    xValue: 100,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-107-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-107-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "easeOut",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".tile-cursor",
                      selectorGuids: ["71feb215-bed6-3200-d051-708eed8fa969"],
                    },
                    yValue: -100,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-107-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "easeOut",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".tile-cursor",
                      selectorGuids: ["71feb215-bed6-3200-d051-708eed8fa969"],
                    },
                    yValue: 100,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1709224117995,
    },
    "a-108": {
      id: "a-108",
      title: "Footer Face Moving",
      continuousParameterGroups: [
        {
          id: "a-108-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-108-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".face-eyes-wrapper",
                      selectorGuids: ["e7642c76-3519-699d-096e-f18ff034a3a5"],
                    },
                    xValue: -10,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-108-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".face-mouth-wrapper",
                      selectorGuids: ["7eecd01d-c660-3d37-05cd-d372bcacb461"],
                    },
                    xValue: -2,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-108-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".face-eyes-wrapper",
                      selectorGuids: ["e7642c76-3519-699d-096e-f18ff034a3a5"],
                    },
                    xValue: 40,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-108-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".face-mouth-wrapper",
                      selectorGuids: ["7eecd01d-c660-3d37-05cd-d372bcacb461"],
                    },
                    xValue: 10,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-108-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-108-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".face-eyes-wrapper",
                      selectorGuids: ["e7642c76-3519-699d-096e-f18ff034a3a5"],
                    },
                    yValue: -80,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-108-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".face-mouth-wrapper",
                      selectorGuids: ["7eecd01d-c660-3d37-05cd-d372bcacb461"],
                    },
                    yValue: -5,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-108-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".face-eyes-wrapper",
                      selectorGuids: ["e7642c76-3519-699d-096e-f18ff034a3a5"],
                    },
                    yValue: 100,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-108-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".face-mouth-wrapper",
                      selectorGuids: ["7eecd01d-c660-3d37-05cd-d372bcacb461"],
                    },
                    yValue: 10,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1709316772598,
    },
    "a-109": {
      id: "a-109",
      title: "👆 Footer Contact Reaction -- Is Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-109-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                locked: false,
                target: {
                  selector: ".heart-eye",
                  selectorGuids: ["3b213375-3ccd-c6f6-2571-f1f7e6d40ad1"],
                },
                widthValue: 0,
                heightValue: 0,
                widthUnit: "px",
                heightUnit: "px",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-109-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outBounce",
                duration: 600,
                locked: false,
                target: {
                  selector: ".heart-eye",
                  selectorGuids: ["3b213375-3ccd-c6f6-2571-f1f7e6d40ad1"],
                },
                widthValue: 12,
                heightValue: 12,
                widthUnit: "px",
                heightUnit: "px",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1709386461783,
    },
    "a-110": {
      id: "a-110",
      title: "👇 Footer Contact Reaction -- Is Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-110-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                locked: false,
                target: {
                  selector: ".heart-eye",
                  selectorGuids: ["3b213375-3ccd-c6f6-2571-f1f7e6d40ad1"],
                },
                widthValue: 0,
                heightValue: 0,
                widthUnit: "px",
                heightUnit: "px",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1709386461783,
    },
    "a-111": {
      id: "a-111",
      title: "Element In View",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-111-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".grid-cell",
                  selectorGuids: ["30830123-3990-acb1-f9bb-63201f58f774"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-111-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".grid-cell",
                  selectorGuids: ["30830123-3990-acb1-f9bb-63201f58f774"],
                },
                yValue: 15,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-111-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "easeIn",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".grid-cell",
                  selectorGuids: ["30830123-3990-acb1-f9bb-63201f58f774"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-111-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outQuint",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".grid-cell",
                  selectorGuids: ["30830123-3990-acb1-f9bb-63201f58f774"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1709392899491,
    },
    "a-112": {
      id: "a-112",
      title: "Element Out Of View",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-112-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".grid-cell",
                  selectorGuids: ["30830123-3990-acb1-f9bb-63201f58f774"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1709392899491,
    },
    "a-113": {
      id: "a-113",
      title: "Nav Menu Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-113-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".nav-items-wrapper",
                  selectorGuids: ["4272b8ae-2d55-7879-a38d-df02f62fb04d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-113-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  selector: ".link.is-nav.is-brand",
                  selectorGuids: [
                    "81875b73-5601-01e2-4815-428841afa700",
                    "27811f50-b17e-4c7e-1650-21fb75804ce8",
                    "f71cb339-f901-bc1f-1886-6974601353b4",
                  ],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-113-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  selector: ".nav-menu-inner-wrapper",
                  selectorGuids: ["ebae8b2f-1570-b411-ddb0-22c7b6c3b725"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-113-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inQuint",
                duration: 800,
                target: {
                  selector: ".navbar-menu",
                  selectorGuids: ["ec3aff8c-2fa9-943e-2ecc-79b5b73f13da"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-113-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".navbar-menu",
                  selectorGuids: ["ec3aff8c-2fa9-943e-2ecc-79b5b73f13da"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1685400669793,
    },
    "a-102": {
      id: "a-102",
      title: "Nav Menu Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-102-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-menu-inner-wrapper",
                  selectorGuids: ["ebae8b2f-1570-b411-ddb0-22c7b6c3b725"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-102-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-items-wrapper",
                  selectorGuids: ["4272b8ae-2d55-7879-a38d-df02f62fb04d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-102-n-11",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".link.is-nav.is-brand",
                  selectorGuids: [
                    "81875b73-5601-01e2-4815-428841afa700",
                    "27811f50-b17e-4c7e-1650-21fb75804ce8",
                    "f71cb339-f901-bc1f-1886-6974601353b4",
                  ],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-102-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".navbar-menu",
                  selectorGuids: ["ec3aff8c-2fa9-943e-2ecc-79b5b73f13da"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-102-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".navbar-menu",
                  selectorGuids: ["ec3aff8c-2fa9-943e-2ecc-79b5b73f13da"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-102-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 500,
                target: {
                  selector: ".nav-menu-inner-wrapper",
                  selectorGuids: ["ebae8b2f-1570-b411-ddb0-22c7b6c3b725"],
                },
                yValue: -50,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-102-n-12",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".link.is-nav.is-brand",
                  selectorGuids: [
                    "81875b73-5601-01e2-4815-428841afa700",
                    "27811f50-b17e-4c7e-1650-21fb75804ce8",
                    "f71cb339-f901-bc1f-1886-6974601353b4",
                  ],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-102-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 800,
                target: {
                  selector: ".navbar-menu",
                  selectorGuids: ["ec3aff8c-2fa9-943e-2ecc-79b5b73f13da"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-102-n-9",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".navbar-menu",
                  selectorGuids: ["ec3aff8c-2fa9-943e-2ecc-79b5b73f13da"],
                },
                value: "flex",
              },
            },
            {
              id: "a-102-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "easeIn",
                duration: 600,
                target: {
                  selector: ".nav-items-wrapper",
                  selectorGuids: ["4272b8ae-2d55-7879-a38d-df02f62fb04d"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1685400669793,
    },
    "a-114": {
      id: "a-114",
      title: "About Photo Slides",
      continuousParameterGroups: [
        {
          id: "a-114-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-114-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".about-photo-sliding",
                      selectorGuids: ["f3817262-e294-4315-aa66-7a17aa61b138"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-114-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".about-photo-sliding",
                      selectorGuids: ["f3817262-e294-4315-aa66-7a17aa61b138"],
                    },
                    yValue: -200,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1709570285636,
    },
    "a-115": {
      id: "a-115",
      title: "Hearbeat",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-115-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 500,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon-large.heart-icon",
                  selectorGuids: [
                    "9abae23c-0598-13ff-b6c4-ec8265e92e47",
                    "97fd9df6-4487-4f0d-79ff-060d04891511",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-115-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 300,
                target: {
                  selector: ".icon-large.heart-icon",
                  selectorGuids: [
                    "9abae23c-0598-13ff-b6c4-ec8265e92e47",
                    "97fd9df6-4487-4f0d-79ff-060d04891511",
                  ],
                },
                xValue: 0.7,
                yValue: 0.7,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-115-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outBounce",
                duration: 500,
                target: {
                  selector: ".icon-large.heart-icon",
                  selectorGuids: [
                    "9abae23c-0598-13ff-b6c4-ec8265e92e47",
                    "97fd9df6-4487-4f0d-79ff-060d04891511",
                  ],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716474176928,
    },
    "a-116": {
      id: "a-116",
      title: "Journal Tile -- Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-116-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".work-item-link",
                  selectorGuids: ["f076bce4-e27d-04bf-6f5c-33729073d1e6"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-116-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".work-item-link",
                  selectorGuids: ["f076bce4-e27d-04bf-6f5c-33729073d1e6"],
                },
                xValue: 0.95,
                yValue: 0.95,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1718709254563,
    },
    "a-117": {
      id: "a-117",
      title: "Journal Tile -- Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-117-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".work-item-link",
                  selectorGuids: ["f076bce4-e27d-04bf-6f5c-33729073d1e6"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1718709254563,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});