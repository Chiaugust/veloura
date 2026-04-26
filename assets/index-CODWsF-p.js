function x0(a, i) {
  for (var r = 0; r < i.length; r++) {
    const c = i[r];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const f in c)
        if (f !== "default" && !(f in a)) {
          const d = Object.getOwnPropertyDescriptor(c, f);
          d &&
            Object.defineProperty(
              a,
              f,
              d.get
                ? d
                : {
                    enumerable: !0,
                    get: () => c[f],
                  },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, {
      value: "Module",
    }),
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) c(f);
  new MutationObserver((f) => {
    for (const d of f)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });

  function r(f) {
    const d = {};
    return (
      f.integrity && (d.integrity = f.integrity),
      f.referrerPolicy && (d.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }

  function c(f) {
    if (f.ep) return;
    f.ep = !0;
    const d = r(f);
    fetch(f.href, d);
  }
})();

function mg(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var lu = {
    exports: {},
  },
  Si = {};
var cp;

function v0() {
  if (cp) return Si;
  cp = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");

  function r(c, f, d) {
    var h = null;
    if (
      (d !== void 0 && (h = "" + d),
      f.key !== void 0 && (h = "" + f.key),
      "key" in f)
    ) {
      d = {};
      for (var g in f) g !== "key" && (d[g] = f[g]);
    } else d = f;
    return (
      (f = d.ref),
      {
        $$typeof: a,
        type: c,
        key: h,
        ref: f !== void 0 ? f : null,
        props: d,
      }
    );
  }
  return ((Si.Fragment = i), (Si.jsx = r), (Si.jsxs = r), Si);
}
var up;

function b0() {
  return (up || ((up = 1), (lu.exports = v0())), lu.exports);
}
var u = b0(),
  iu = {
    exports: {},
  },
  Ni = {},
  su = {
    exports: {},
  },
  ru = {};
var fp;

function w0() {
  return (
    fp ||
      ((fp = 1),
      (function (a) {
        function i(R, Q) {
          var L = R.length;
          R.push(Q);
          e: for (; 0 < L; ) {
            var ie = (L - 1) >>> 1,
              ue = R[ie];
            if (0 < f(ue, Q)) ((R[ie] = Q), (R[L] = ue), (L = ie));
            else break e;
          }
        }

        function r(R) {
          return R.length === 0 ? null : R[0];
        }

        function c(R) {
          if (R.length === 0) return null;
          var Q = R[0],
            L = R.pop();
          if (L !== Q) {
            R[0] = L;
            e: for (var ie = 0, ue = R.length, N = ue >>> 1; ie < N; ) {
              var q = 2 * (ie + 1) - 1,
                K = R[q],
                P = q + 1,
                re = R[P];
              if (0 > f(K, L))
                P < ue && 0 > f(re, K)
                  ? ((R[ie] = re), (R[P] = L), (ie = P))
                  : ((R[ie] = K), (R[q] = L), (ie = q));
              else if (P < ue && 0 > f(re, L))
                ((R[ie] = re), (R[P] = L), (ie = P));
              else break e;
            }
          }
          return Q;
        }

        function f(R, Q) {
          var L = R.sortIndex - Q.sortIndex;
          return L !== 0 ? L : R.id - Q.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            g = h.now();
          a.unstable_now = function () {
            return h.now() - g;
          };
        }
        var y = [],
          p = [],
          w = 1,
          v = null,
          E = 3,
          A = !1,
          D = !1,
          T = !1,
          O = !1,
          U = typeof setTimeout == "function" ? setTimeout : null,
          H = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;

        function Z(R) {
          for (var Q = r(p); Q !== null; ) {
            if (Q.callback === null) c(p);
            else if (Q.startTime <= R)
              (c(p), (Q.sortIndex = Q.expirationTime), i(y, Q));
            else break;
            Q = r(p);
          }
        }

        function J(R) {
          if (((T = !1), Z(R), !D))
            if (r(y) !== null) ((D = !0), F || ((F = !0), pe()));
            else {
              var Q = r(p);
              Q !== null && fe(J, Q.startTime - R);
            }
        }
        var F = !1,
          X = -1,
          $ = 5,
          oe = -1;

        function ye() {
          return O ? !0 : !(a.unstable_now() - oe < $);
        }

        function xe() {
          if (((O = !1), F)) {
            var R = a.unstable_now();
            oe = R;
            var Q = !0;
            try {
              e: {
                ((D = !1), T && ((T = !1), H(X), (X = -1)), (A = !0));
                var L = E;
                try {
                  t: {
                    for (
                      Z(R), v = r(y);
                      v !== null && !(v.expirationTime > R && ye());
                    ) {
                      var ie = v.callback;
                      if (typeof ie == "function") {
                        ((v.callback = null), (E = v.priorityLevel));
                        var ue = ie(v.expirationTime <= R);
                        if (((R = a.unstable_now()), typeof ue == "function")) {
                          ((v.callback = ue), Z(R), (Q = !0));
                          break t;
                        }
                        (v === r(y) && c(y), Z(R));
                      } else c(y);
                      v = r(y);
                    }
                    if (v !== null) Q = !0;
                    else {
                      var N = r(p);
                      (N !== null && fe(J, N.startTime - R), (Q = !1));
                    }
                  }
                  break e;
                } finally {
                  ((v = null), (E = L), (A = !1));
                }
                Q = void 0;
              }
            } finally {
              Q ? pe() : (F = !1);
            }
          }
        }
        var pe;
        if (typeof V == "function")
          pe = function () {
            V(xe);
          };
        else if (typeof MessageChannel < "u") {
          var Ee = new MessageChannel(),
            W = Ee.port2;
          ((Ee.port1.onmessage = xe),
            (pe = function () {
              W.postMessage(null);
            }));
        } else
          pe = function () {
            U(xe, 0);
          };

        function fe(R, Q) {
          X = U(function () {
            R(a.unstable_now());
          }, Q);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (a.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : ($ = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (a.unstable_next = function (R) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = E;
            }
            var L = E;
            E = Q;
            try {
              return R();
            } finally {
              E = L;
            }
          }),
          (a.unstable_requestPaint = function () {
            O = !0;
          }),
          (a.unstable_runWithPriority = function (R, Q) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var L = E;
            E = R;
            try {
              return Q();
            } finally {
              E = L;
            }
          }),
          (a.unstable_scheduleCallback = function (R, Q, L) {
            var ie = a.unstable_now();
            switch (
              (typeof L == "object" && L !== null
                ? ((L = L.delay),
                  (L = typeof L == "number" && 0 < L ? ie + L : ie))
                : (L = ie),
              R)
            ) {
              case 1:
                var ue = -1;
                break;
              case 2:
                ue = 250;
                break;
              case 5:
                ue = 1073741823;
                break;
              case 4:
                ue = 1e4;
                break;
              default:
                ue = 5e3;
            }
            return (
              (ue = L + ue),
              (R = {
                id: w++,
                callback: Q,
                priorityLevel: R,
                startTime: L,
                expirationTime: ue,
                sortIndex: -1,
              }),
              L > ie
                ? ((R.sortIndex = L),
                  i(p, R),
                  r(y) === null &&
                    R === r(p) &&
                    (T ? (H(X), (X = -1)) : (T = !0), fe(J, L - ie)))
                : ((R.sortIndex = ue),
                  i(y, R),
                  D || A || ((D = !0), F || ((F = !0), pe()))),
              R
            );
          }),
          (a.unstable_shouldYield = ye),
          (a.unstable_wrapCallback = function (R) {
            var Q = E;
            return function () {
              var L = E;
              E = Q;
              try {
                return R.apply(this, arguments);
              } finally {
                E = L;
              }
            };
          }));
      })(ru)),
    ru
  );
}
var dp;

function S0() {
  return (dp || ((dp = 1), (su.exports = w0())), su.exports);
}
var ou = {
    exports: {},
  },
  ce = {};
var mp;

function N0() {
  if (mp) return ce;
  mp = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    g = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    v = Symbol.for("react.activity"),
    E = Symbol.iterator;

  function A(N) {
    return N === null || typeof N != "object"
      ? null
      : ((N = (E && N[E]) || N["@@iterator"]),
        typeof N == "function" ? N : null);
  }
  var D = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    O = {};

  function U(N, q, K) {
    ((this.props = N),
      (this.context = q),
      (this.refs = O),
      (this.updater = K || D));
  }
  ((U.prototype.isReactComponent = {}),
    (U.prototype.setState = function (N, q) {
      if (typeof N != "object" && typeof N != "function" && N != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, N, q, "setState");
    }),
    (U.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    }));

  function H() {}
  H.prototype = U.prototype;

  function V(N, q, K) {
    ((this.props = N),
      (this.context = q),
      (this.refs = O),
      (this.updater = K || D));
  }
  var Z = (V.prototype = new H());
  ((Z.constructor = V), T(Z, U.prototype), (Z.isPureReactComponent = !0));
  var J = Array.isArray;

  function F() {}
  var X = {
      H: null,
      A: null,
      T: null,
      S: null,
    },
    $ = Object.prototype.hasOwnProperty;

  function oe(N, q, K) {
    var P = K.ref;
    return {
      $$typeof: a,
      type: N,
      key: q,
      ref: P !== void 0 ? P : null,
      props: K,
    };
  }

  function ye(N, q) {
    return oe(N.type, q, N.props);
  }

  function xe(N) {
    return typeof N == "object" && N !== null && N.$$typeof === a;
  }

  function pe(N) {
    var q = {
      "=": "=0",
      ":": "=2",
    };
    return (
      "$" +
      N.replace(/[=:]/g, function (K) {
        return q[K];
      })
    );
  }
  var Ee = /\/+/g;

  function W(N, q) {
    return typeof N == "object" && N !== null && N.key != null
      ? pe("" + N.key)
      : q.toString(36);
  }

  function fe(N) {
    switch (N.status) {
      case "fulfilled":
        return N.value;
      case "rejected":
        throw N.reason;
      default:
        switch (
          (typeof N.status == "string"
            ? N.then(F, F)
            : ((N.status = "pending"),
              N.then(
                function (q) {
                  N.status === "pending" &&
                    ((N.status = "fulfilled"), (N.value = q));
                },
                function (q) {
                  N.status === "pending" &&
                    ((N.status = "rejected"), (N.reason = q));
                },
              )),
          N.status)
        ) {
          case "fulfilled":
            return N.value;
          case "rejected":
            throw N.reason;
        }
    }
    throw N;
  }

  function R(N, q, K, P, re) {
    var de = typeof N;
    (de === "undefined" || de === "boolean") && (N = null);
    var ae = !1;
    if (N === null) ae = !0;
    else
      switch (de) {
        case "bigint":
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case a:
            case i:
              ae = !0;
              break;
            case w:
              return ((ae = N._init), R(ae(N._payload), q, K, P, re));
          }
      }
    if (ae)
      return (
        (re = re(N)),
        (ae = P === "" ? "." + W(N, 0) : P),
        J(re)
          ? ((K = ""),
            ae != null && (K = ae.replace(Ee, "$&/") + "/"),
            R(re, q, K, "", function (Mt) {
              return Mt;
            }))
          : re != null &&
            (xe(re) &&
              (re = ye(
                re,
                K +
                  (re.key == null || (N && N.key === re.key)
                    ? ""
                    : ("" + re.key).replace(Ee, "$&/") + "/") +
                  ae,
              )),
            q.push(re)),
        1
      );
    ae = 0;
    var Qe = P === "" ? "." : P + ":";
    if (J(N))
      for (var _e = 0; _e < N.length; _e++)
        ((P = N[_e]), (de = Qe + W(P, _e)), (ae += R(P, q, K, de, re)));
    else if (((_e = A(N)), typeof _e == "function"))
      for (N = _e.call(N), _e = 0; !(P = N.next()).done; )
        ((P = P.value), (de = Qe + W(P, _e++)), (ae += R(P, q, K, de, re)));
    else if (de === "object") {
      if (typeof N.then == "function") return R(fe(N), q, K, P, re);
      throw (
        (q = String(N)),
        Error(
          "Objects are not valid as a React child (found: " +
            (q === "[object Object]"
              ? "object with keys {" + Object.keys(N).join(", ") + "}"
              : q) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ae;
  }

  function Q(N, q, K) {
    if (N == null) return N;
    var P = [],
      re = 0;
    return (
      R(N, P, "", "", function (de) {
        return q.call(K, de, re++);
      }),
      P
    );
  }

  function L(N) {
    if (N._status === -1) {
      var q = N._result;
      ((q = q()),
        q.then(
          function (K) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 1), (N._result = K));
          },
          function (K) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 2), (N._result = K));
          },
        ),
        N._status === -1 && ((N._status = 0), (N._result = q)));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var ie =
      typeof reportError == "function"
        ? reportError
        : function (N) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var q = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof N == "object" &&
                  N !== null &&
                  typeof N.message == "string"
                    ? String(N.message)
                    : String(N),
                error: N,
              });
              if (!window.dispatchEvent(q)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", N);
              return;
            }
            console.error(N);
          },
    ue = {
      map: Q,
      forEach: function (N, q, K) {
        Q(
          N,
          function () {
            q.apply(this, arguments);
          },
          K,
        );
      },
      count: function (N) {
        var q = 0;
        return (
          Q(N, function () {
            q++;
          }),
          q
        );
      },
      toArray: function (N) {
        return (
          Q(N, function (q) {
            return q;
          }) || []
        );
      },
      only: function (N) {
        if (!xe(N))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return N;
      },
    };
  return (
    (ce.Activity = v),
    (ce.Children = ue),
    (ce.Component = U),
    (ce.Fragment = r),
    (ce.Profiler = f),
    (ce.PureComponent = V),
    (ce.StrictMode = c),
    (ce.Suspense = y),
    (ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X),
    (ce.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (N) {
        return X.H.useMemoCache(N);
      },
    }),
    (ce.cache = function (N) {
      return function () {
        return N.apply(null, arguments);
      };
    }),
    (ce.cacheSignal = function () {
      return null;
    }),
    (ce.cloneElement = function (N, q, K) {
      if (N == null)
        throw Error(
          "The argument must be a React element, but you passed " + N + ".",
        );
      var P = T({}, N.props),
        re = N.key;
      if (q != null)
        for (de in (q.key !== void 0 && (re = "" + q.key), q))
          !$.call(q, de) ||
            de === "key" ||
            de === "__self" ||
            de === "__source" ||
            (de === "ref" && q.ref === void 0) ||
            (P[de] = q[de]);
      var de = arguments.length - 2;
      if (de === 1) P.children = K;
      else if (1 < de) {
        for (var ae = Array(de), Qe = 0; Qe < de; Qe++)
          ae[Qe] = arguments[Qe + 2];
        P.children = ae;
      }
      return oe(N.type, re, P);
    }),
    (ce.createContext = function (N) {
      return (
        (N = {
          $$typeof: h,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (N.Provider = N),
        (N.Consumer = {
          $$typeof: d,
          _context: N,
        }),
        N
      );
    }),
    (ce.createElement = function (N, q, K) {
      var P,
        re = {},
        de = null;
      if (q != null)
        for (P in (q.key !== void 0 && (de = "" + q.key), q))
          $.call(q, P) &&
            P !== "key" &&
            P !== "__self" &&
            P !== "__source" &&
            (re[P] = q[P]);
      var ae = arguments.length - 2;
      if (ae === 1) re.children = K;
      else if (1 < ae) {
        for (var Qe = Array(ae), _e = 0; _e < ae; _e++)
          Qe[_e] = arguments[_e + 2];
        re.children = Qe;
      }
      if (N && N.defaultProps)
        for (P in ((ae = N.defaultProps), ae))
          re[P] === void 0 && (re[P] = ae[P]);
      return oe(N, de, re);
    }),
    (ce.createRef = function () {
      return {
        current: null,
      };
    }),
    (ce.forwardRef = function (N) {
      return {
        $$typeof: g,
        render: N,
      };
    }),
    (ce.isValidElement = xe),
    (ce.lazy = function (N) {
      return {
        $$typeof: w,
        _payload: {
          _status: -1,
          _result: N,
        },
        _init: L,
      };
    }),
    (ce.memo = function (N, q) {
      return {
        $$typeof: p,
        type: N,
        compare: q === void 0 ? null : q,
      };
    }),
    (ce.startTransition = function (N) {
      var q = X.T,
        K = {};
      X.T = K;
      try {
        var P = N(),
          re = X.S;
        (re !== null && re(K, P),
          typeof P == "object" &&
            P !== null &&
            typeof P.then == "function" &&
            P.then(F, ie));
      } catch (de) {
        ie(de);
      } finally {
        (q !== null && K.types !== null && (q.types = K.types), (X.T = q));
      }
    }),
    (ce.unstable_useCacheRefresh = function () {
      return X.H.useCacheRefresh();
    }),
    (ce.use = function (N) {
      return X.H.use(N);
    }),
    (ce.useActionState = function (N, q, K) {
      return X.H.useActionState(N, q, K);
    }),
    (ce.useCallback = function (N, q) {
      return X.H.useCallback(N, q);
    }),
    (ce.useContext = function (N) {
      return X.H.useContext(N);
    }),
    (ce.useDebugValue = function () {}),
    (ce.useDeferredValue = function (N, q) {
      return X.H.useDeferredValue(N, q);
    }),
    (ce.useEffect = function (N, q) {
      return X.H.useEffect(N, q);
    }),
    (ce.useEffectEvent = function (N) {
      return X.H.useEffectEvent(N);
    }),
    (ce.useId = function () {
      return X.H.useId();
    }),
    (ce.useImperativeHandle = function (N, q, K) {
      return X.H.useImperativeHandle(N, q, K);
    }),
    (ce.useInsertionEffect = function (N, q) {
      return X.H.useInsertionEffect(N, q);
    }),
    (ce.useLayoutEffect = function (N, q) {
      return X.H.useLayoutEffect(N, q);
    }),
    (ce.useMemo = function (N, q) {
      return X.H.useMemo(N, q);
    }),
    (ce.useOptimistic = function (N, q) {
      return X.H.useOptimistic(N, q);
    }),
    (ce.useReducer = function (N, q, K) {
      return X.H.useReducer(N, q, K);
    }),
    (ce.useRef = function (N) {
      return X.H.useRef(N);
    }),
    (ce.useState = function (N) {
      return X.H.useState(N);
    }),
    (ce.useSyncExternalStore = function (N, q, K) {
      return X.H.useSyncExternalStore(N, q, K);
    }),
    (ce.useTransition = function () {
      return X.H.useTransition();
    }),
    (ce.version = "19.2.3"),
    ce
  );
}
var hp;

function wr() {
  return (hp || ((hp = 1), (ou.exports = N0())), ou.exports);
}
var cu = {
    exports: {},
  },
  ot = {};
var pp;

function j0() {
  if (pp) return ot;
  pp = 1;
  var a = wr();

  function i(y) {
    var p = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++)
        p += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }

  function r() {}
  var c = {
      d: {
        f: r,
        r: function () {
          throw Error(i(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for("react.portal");

  function d(y, p, w) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: v == null ? null : "" + v,
      children: y,
      containerInfo: p,
      implementation: w,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

  function g(y, p) {
    if (y === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (ot.createPortal = function (y, p) {
      var w =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(i(299));
      return d(y, p, null, w);
    }),
    (ot.flushSync = function (y) {
      var p = h.T,
        w = c.p;
      try {
        if (((h.T = null), (c.p = 2), y)) return y();
      } finally {
        ((h.T = p), (c.p = w), c.d.f());
      }
    }),
    (ot.preconnect = function (y, p) {
      typeof y == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        c.d.C(y, p));
    }),
    (ot.prefetchDNS = function (y) {
      typeof y == "string" && c.d.D(y);
    }),
    (ot.preinit = function (y, p) {
      if (typeof y == "string" && p && typeof p.as == "string") {
        var w = p.as,
          v = g(w, p.crossOrigin),
          E = typeof p.integrity == "string" ? p.integrity : void 0,
          A = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        w === "style"
          ? c.d.S(y, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: v,
              integrity: E,
              fetchPriority: A,
            })
          : w === "script" &&
            c.d.X(y, {
              crossOrigin: v,
              integrity: E,
              fetchPriority: A,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (ot.preinitModule = function (y, p) {
      if (typeof y == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var w = g(p.as, p.crossOrigin);
            c.d.M(y, {
              crossOrigin: w,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && c.d.M(y);
    }),
    (ot.preload = function (y, p) {
      if (
        typeof y == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var w = p.as,
          v = g(w, p.crossOrigin);
        c.d.L(y, w, {
          crossOrigin: v,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (ot.preloadModule = function (y, p) {
      if (typeof y == "string")
        if (p) {
          var w = g(p.as, p.crossOrigin);
          c.d.m(y, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: w,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else c.d.m(y);
    }),
    (ot.requestFormReset = function (y) {
      c.d.r(y);
    }),
    (ot.unstable_batchedUpdates = function (y, p) {
      return y(p);
    }),
    (ot.useFormState = function (y, p, w) {
      return h.H.useFormState(y, p, w);
    }),
    (ot.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (ot.version = "19.2.3"),
    ot
  );
}
var gp;

function hg() {
  if (gp) return cu.exports;
  gp = 1;

  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (cu.exports = j0()), cu.exports);
}
var yp;

function E0() {
  if (yp) return Ni;
  yp = 1;
  var a = S0(),
    i = wr(),
    r = hg();

  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }

  function f(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }

  function d(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }

  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }

  function g(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }

  function y(e) {
    if (d(e) !== e) throw Error(c(188));
  }

  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = d(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (((l = s.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === n) return (y(s), e);
          if (o === l) return (y(s), t);
          o = o.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== l.return) ((n = s), (l = o));
      else {
        for (var m = !1, x = s.child; x; ) {
          if (x === n) {
            ((m = !0), (n = s), (l = o));
            break;
          }
          if (x === l) {
            ((m = !0), (l = s), (n = o));
            break;
          }
          x = x.sibling;
        }
        if (!m) {
          for (x = o.child; x; ) {
            if (x === n) {
              ((m = !0), (n = o), (l = s));
              break;
            }
            if (x === l) {
              ((m = !0), (l = o), (n = s));
              break;
            }
            x = x.sibling;
          }
          if (!m) throw Error(c(189));
        }
      }
      if (n.alternate !== l) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }

  function w(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = w(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    E = Symbol.for("react.element"),
    A = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.portal"),
    T = Symbol.for("react.fragment"),
    O = Symbol.for("react.strict_mode"),
    U = Symbol.for("react.profiler"),
    H = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    J = Symbol.for("react.suspense"),
    F = Symbol.for("react.suspense_list"),
    X = Symbol.for("react.memo"),
    $ = Symbol.for("react.lazy"),
    oe = Symbol.for("react.activity"),
    ye = Symbol.for("react.memo_cache_sentinel"),
    xe = Symbol.iterator;

  function pe(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (xe && e[xe]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Ee = Symbol.for("react.client.reference");

  function W(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ee ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case T:
        return "Fragment";
      case U:
        return "Profiler";
      case O:
        return "StrictMode";
      case J:
        return "Suspense";
      case F:
        return "SuspenseList";
      case oe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case D:
          return "Portal";
        case V:
          return e.displayName || "Context";
        case H:
          return (e._context.displayName || "Context") + ".Consumer";
        case Z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case X:
          return (
            (t = e.displayName || null),
            t !== null ? t : W(e.type) || "Memo"
          );
        case $:
          ((t = e._payload), (e = e._init));
          try {
            return W(e(t));
          } catch {}
      }
    return null;
  }
  var fe = Array.isArray,
    R = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    L = {
      pending: !1,
      data: null,
      method: null,
      action: null,
    },
    ie = [],
    ue = -1;

  function N(e) {
    return {
      current: e,
    };
  }

  function q(e) {
    0 > ue || ((e.current = ie[ue]), (ie[ue] = null), ue--);
  }

  function K(e, t) {
    (ue++, (ie[ue] = e.current), (e.current = t));
  }
  var P = N(null),
    re = N(null),
    de = N(null),
    ae = N(null);

  function Qe(e, t) {
    switch ((K(de, t), K(re, e), K(P, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Mh(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Mh(t)), (e = Dh(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (q(P), K(P, e));
  }

  function _e() {
    (q(P), q(re), q(de));
  }

  function Mt(e) {
    e.memoizedState !== null && K(ae, e);
    var t = P.current,
      n = Dh(t, e.type);
    t !== n && (K(re, e), K(P, n));
  }

  function Pt(e) {
    (re.current === e && (q(P), q(re)),
      ae.current === e && (q(ae), (xi._currentValue = L)));
  }
  var Ft, ra;

  function oa(e) {
    if (Ft === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Ft = (t && t[1]) || ""),
          (ra =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Ft +
      e +
      ra
    );
  }
  var qr = !1;

  function Gr(e, t) {
    if (!e || qr) return "";
    qr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Y = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Y.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Y, []);
                } catch (k) {
                  var z = k;
                }
                Reflect.construct(e, [], Y);
              } else {
                try {
                  Y.call();
                } catch (k) {
                  z = k;
                }
                e.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (k) {
                z = k;
              }
              (Y = e()) &&
                typeof Y.catch == "function" &&
                Y.catch(function () {});
            }
          } catch (k) {
            if (k && z && typeof k.stack == "string") return [k.stack, z.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      s &&
        s.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = l.DetermineComponentFrameRoot(),
        m = o[0],
        x = o[1];
      if (m && x) {
        var S = m.split(`
`),
          M = x.split(`
`);
        for (
          s = l = 0;
          l < S.length && !S[l].includes("DetermineComponentFrameRoot");
        )
          l++;
        for (; s < M.length && !M[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (l === S.length || s === M.length)
          for (
            l = S.length - 1, s = M.length - 1;
            1 <= l && 0 <= s && S[l] !== M[s];
          )
            s--;
        for (; 1 <= l && 0 <= s; l--, s--)
          if (S[l] !== M[s]) {
            if (l !== 1 || s !== 1)
              do
                if ((l--, s--, 0 > s || S[l] !== M[s])) {
                  var B =
                    `
` + S[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      B.includes("<anonymous>") &&
                      (B = B.replace("<anonymous>", e.displayName)),
                    B
                  );
                }
              while (1 <= l && 0 <= s);
            break;
          }
      }
    } finally {
      ((qr = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? oa(n) : "";
  }

  function Jx(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return oa(e.type);
      case 16:
        return oa("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? oa("Suspense Fallback")
          : oa("Suspense");
      case 19:
        return oa("SuspenseList");
      case 0:
      case 15:
        return Gr(e.type, !1);
      case 11:
        return Gr(e.type.render, !1);
      case 1:
        return Gr(e.type, !0);
      case 31:
        return oa("Activity");
      default:
        return "";
    }
  }

  function cf(e) {
    try {
      var t = "",
        n = null;
      do ((t += Jx(e, n)), (n = e), (e = e.return));
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var Yr = Object.prototype.hasOwnProperty,
    Vr = a.unstable_scheduleCallback,
    Qr = a.unstable_cancelCallback,
    Px = a.unstable_shouldYield,
    Fx = a.unstable_requestPaint,
    bt = a.unstable_now,
    Wx = a.unstable_getCurrentPriorityLevel,
    uf = a.unstable_ImmediatePriority,
    ff = a.unstable_UserBlockingPriority,
    Ui = a.unstable_NormalPriority,
    Ix = a.unstable_LowPriority,
    df = a.unstable_IdlePriority,
    ev = a.log,
    tv = a.unstable_setDisableYieldValue,
    Rl = null,
    wt = null;

  function Rn(e) {
    if (
      (typeof ev == "function" && tv(e),
      wt && typeof wt.setStrictMode == "function")
    )
      try {
        wt.setStrictMode(Rl, e);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : lv,
    nv = Math.log,
    av = Math.LN2;

  function lv(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((nv(e) / av) | 0)) | 0);
  }
  var Hi = 256,
    Bi = 262144,
    qi = 4194304;

  function ca(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }

  function Gi(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var s = 0,
      o = e.suspendedLanes,
      m = e.pingedLanes;
    e = e.warmLanes;
    var x = l & 134217727;
    return (
      x !== 0
        ? ((l = x & ~o),
          l !== 0
            ? (s = ca(l))
            : ((m &= x),
              m !== 0
                ? (s = ca(m))
                : n || ((n = x & ~e), n !== 0 && (s = ca(n)))))
        : ((x = l & ~o),
          x !== 0
            ? (s = ca(x))
            : m !== 0
              ? (s = ca(m))
              : n || ((n = l & ~e), n !== 0 && (s = ca(n)))),
      s === 0
        ? 0
        : t !== 0 &&
            t !== s &&
            (t & o) === 0 &&
            ((o = s & -s),
            (n = t & -t),
            o >= n || (o === 32 && (n & 4194048) !== 0))
          ? t
          : s
    );
  }

  function _l(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }

  function iv(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }

  function mf() {
    var e = qi;
    return ((qi <<= 1), (qi & 62914560) === 0 && (qi = 4194304), e);
  }

  function Xr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }

  function Ml(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }

  function sv(e, t, n, l, s, o) {
    var m = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var x = e.entanglements,
      S = e.expirationTimes,
      M = e.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var B = 31 - St(n),
        Y = 1 << B;
      ((x[B] = 0), (S[B] = -1));
      var z = M[B];
      if (z !== null)
        for (M[B] = null, B = 0; B < z.length; B++) {
          var k = z[B];
          k !== null && (k.lane &= -536870913);
        }
      n &= ~Y;
    }
    (l !== 0 && hf(e, l, 0),
      o !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(m & ~t)));
  }

  function hf(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - St(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930)));
  }

  function pf(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - St(n),
        s = 1 << l;
      ((s & t) | (e[l] & t) && (e[l] |= t), (n &= ~s));
    }
  }

  function gf(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : Zr(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }

  function Zr(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }

  function Kr(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }

  function yf() {
    var e = Q.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : np(e.type));
  }

  function xf(e, t) {
    var n = Q.p;
    try {
      return ((Q.p = e), t());
    } finally {
      Q.p = n;
    }
  }
  var _n = Math.random().toString(36).slice(2),
    at = "__reactFiber$" + _n,
    mt = "__reactProps$" + _n,
    _a = "__reactContainer$" + _n,
    $r = "__reactEvents$" + _n,
    rv = "__reactListeners$" + _n,
    ov = "__reactHandles$" + _n,
    vf = "__reactResources$" + _n,
    Dl = "__reactMarker$" + _n;

  function Jr(e) {
    (delete e[at], delete e[mt], delete e[$r], delete e[rv], delete e[ov]);
  }

  function Ma(e) {
    var t = e[at];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[_a] || n[at])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = qh(e); e !== null; ) {
            if ((n = e[at])) return n;
            e = qh(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }

  function Da(e) {
    if ((e = e[at] || e[_a])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }

  function zl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }

  function za(e) {
    var t = e[vf];
    return (
      t ||
        (t = e[vf] =
          {
            hoistableStyles: new Map(),
            hoistableScripts: new Map(),
          }),
      t
    );
  }

  function tt(e) {
    e[Dl] = !0;
  }
  var bf = new Set(),
    wf = {};

  function ua(e, t) {
    (ka(e, t), ka(e + "Capture", t));
  }

  function ka(e, t) {
    for (wf[e] = t, e = 0; e < t.length; e++) bf.add(t[e]);
  }
  var cv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Sf = {},
    Nf = {};

  function uv(e) {
    return Yr.call(Nf, e)
      ? !0
      : Yr.call(Sf, e)
        ? !1
        : cv.test(e)
          ? (Nf[e] = !0)
          : ((Sf[e] = !0), !1);
  }

  function Yi(e, t, n) {
    if (uv(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }

  function Vi(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }

  function on(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }

  function Dt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }

  function jf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }

  function fv(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var s = l.get,
        o = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (m) {
            ((n = "" + m), o.call(this, m));
          },
        }),
        Object.defineProperty(e, t, {
          enumerable: l.enumerable,
        }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (m) {
            n = "" + m;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }

  function Pr(e) {
    if (!e._valueTracker) {
      var t = jf(e) ? "checked" : "value";
      e._valueTracker = fv(e, t, "" + e[t]);
    }
  }

  function Ef(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = jf(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }

  function Qi(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var dv = /[\n"\\]/g;

  function zt(e) {
    return e.replace(dv, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }

  function Fr(e, t, n, l, s, o, m, x) {
    ((e.name = ""),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (e.type = m)
        : e.removeAttribute("type"),
      t != null
        ? m === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Dt(t))
          : e.value !== "" + Dt(t) && (e.value = "" + Dt(t))
        : (m !== "submit" && m !== "reset") || e.removeAttribute("value"),
      t != null
        ? Wr(e, m, Dt(t))
        : n != null
          ? Wr(e, m, Dt(n))
          : l != null && e.removeAttribute("value"),
      s == null && o != null && (e.defaultChecked = !!o),
      s != null &&
        (e.checked = s && typeof s != "function" && typeof s != "symbol"),
      x != null &&
      typeof x != "function" &&
      typeof x != "symbol" &&
      typeof x != "boolean"
        ? (e.name = "" + Dt(x))
        : e.removeAttribute("name"));
  }

  function Tf(e, t, n, l, s, o, m, x) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (e.type = o),
      t != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || t != null)) {
        Pr(e);
        return;
      }
      ((n = n != null ? "" + Dt(n) : ""),
        (t = t != null ? "" + Dt(t) : n),
        x || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? s),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = x ? e.checked : !!l),
      (e.defaultChecked = !!l),
      m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (e.name = m),
      Pr(e));
  }

  function Wr(e, t, n) {
    (t === "number" && Qi(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }

  function La(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        ((s = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== s && (e[n].selected = s),
          s && l && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Dt(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          ((e[s].selected = !0), l && (e[s].defaultSelected = !0));
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }

  function Cf(e, t, n) {
    if (
      t != null &&
      ((t = "" + Dt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Dt(n) : "";
  }

  function Af(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(c(92));
        if (fe(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = Dt(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== "" && l !== null && (e.value = l),
      Pr(e));
  }

  function Ua(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var mv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );

  function Of(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || mv.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }

  function Rf(e, t, n) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
              ? (e.cssFloat = "")
              : (e[l] = ""));
      for (var s in t)
        ((l = t[s]), t.hasOwnProperty(s) && n[s] !== l && Of(e, s, l));
    } else for (var o in t) t.hasOwnProperty(o) && Of(e, o, t[o]);
  }

  function Ir(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var hv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    pv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

  function Xi(e) {
    return pv.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }

  function cn() {}
  var eo = null;

  function to(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ha = null,
    Ba = null;

  function _f(e) {
    var t = Da(e);
    if (t && (e = t.stateNode)) {
      var n = e[mt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Fr(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + zt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var s = l[mt] || null;
                if (!s) throw Error(c(90));
                Fr(
                  l,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((l = n[t]), l.form === e.form && Ef(l));
          }
          break e;
        case "textarea":
          Cf(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && La(e, !!n.multiple, t, !1));
      }
    }
  }
  var no = !1;

  function Mf(e, t, n) {
    if (no) return e(t, n);
    no = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((no = !1),
        (Ha !== null || Ba !== null) &&
          (Ms(), Ha && ((t = Ha), (e = Ba), (Ba = Ha = null), _f(t), e)))
      )
        for (t = 0; t < e.length; t++) _f(e[t]);
    }
  }

  function kl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[mt] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var un = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ao = !1;
  if (un)
    try {
      var Ll = {};
      (Object.defineProperty(Ll, "passive", {
        get: function () {
          ao = !0;
        },
      }),
        window.addEventListener("test", Ll, Ll),
        window.removeEventListener("test", Ll, Ll));
    } catch {
      ao = !1;
    }
  var Mn = null,
    lo = null,
    Zi = null;

  function Df() {
    if (Zi) return Zi;
    var e,
      t = lo,
      n = t.length,
      l,
      s = "value" in Mn ? Mn.value : Mn.textContent,
      o = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var m = n - e;
    for (l = 1; l <= m && t[n - l] === s[o - l]; l++);
    return (Zi = s.slice(e, 1 < l ? 1 - l : void 0));
  }

  function Ki(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }

  function $i() {
    return !0;
  }

  function zf() {
    return !1;
  }

  function ht(e) {
    function t(n, l, s, o, m) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = l),
        (this.nativeEvent = o),
        (this.target = m),
        (this.currentTarget = null));
      for (var x in e)
        e.hasOwnProperty(x) && ((n = e[x]), (this[x] = n ? n(o) : o[x]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? $i
          : zf),
        (this.isPropagationStopped = zf),
        this
      );
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = $i));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = $i));
        },
        persist: function () {},
        isPersistent: $i,
      }),
      t
    );
  }
  var fa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ji = ht(fa),
    Ul = v({}, fa, {
      view: 0,
      detail: 0,
    }),
    gv = ht(Ul),
    io,
    so,
    Hl,
    Pi = v({}, Ul, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: oo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Hl &&
              (Hl && e.type === "mousemove"
                ? ((io = e.screenX - Hl.screenX), (so = e.screenY - Hl.screenY))
                : (so = io = 0),
              (Hl = e)),
            io);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : so;
      },
    }),
    kf = ht(Pi),
    yv = v({}, Pi, {
      dataTransfer: 0,
    }),
    xv = ht(yv),
    vv = v({}, Ul, {
      relatedTarget: 0,
    }),
    ro = ht(vv),
    bv = v({}, fa, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0,
    }),
    wv = ht(bv),
    Sv = v({}, fa, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Nv = ht(Sv),
    jv = v({}, fa, {
      data: 0,
    }),
    Lf = ht(jv),
    Ev = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Tv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Cv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };

  function Av(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Cv[e])
        ? !!t[e]
        : !1;
  }

  function oo() {
    return Av;
  }
  var Ov = v({}, Ul, {
      key: function (e) {
        if (e.key) {
          var t = Ev[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ki(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Tv[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: oo,
      charCode: function (e) {
        return e.type === "keypress" ? Ki(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ki(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Rv = ht(Ov),
    _v = v({}, Pi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Uf = ht(_v),
    Mv = v({}, Ul, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: oo,
    }),
    Dv = ht(Mv),
    zv = v({}, fa, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0,
    }),
    kv = ht(zv),
    Lv = v({}, Pi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Uv = ht(Lv),
    Hv = v({}, fa, {
      newState: 0,
      oldState: 0,
    }),
    Bv = ht(Hv),
    qv = [9, 13, 27, 32],
    co = un && "CompositionEvent" in window,
    Bl = null;
  un && "documentMode" in document && (Bl = document.documentMode);
  var Gv = un && "TextEvent" in window && !Bl,
    Hf = un && (!co || (Bl && 8 < Bl && 11 >= Bl)),
    Bf = " ",
    qf = !1;

  function Gf(e, t) {
    switch (e) {
      case "keyup":
        return qv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }

  function Yf(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var qa = !1;

  function Yv(e, t) {
    switch (e) {
      case "compositionend":
        return Yf(t);
      case "keypress":
        return t.which !== 32 ? null : ((qf = !0), Bf);
      case "textInput":
        return ((e = t.data), e === Bf && qf ? null : e);
      default:
        return null;
    }
  }

  function Vv(e, t) {
    if (qa)
      return e === "compositionend" || (!co && Gf(e, t))
        ? ((e = Df()), (Zi = lo = Mn = null), (qa = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Hf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Qv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };

  function Vf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Qv[e.type] : t === "textarea";
  }

  function Qf(e, t, n, l) {
    (Ha ? (Ba ? Ba.push(l) : (Ba = [l])) : (Ha = l),
      (t = Bs(t, "onChange")),
      0 < t.length &&
        ((n = new Ji("onChange", "change", null, n, l)),
        e.push({
          event: n,
          listeners: t,
        })));
  }
  var ql = null,
    Gl = null;

  function Xv(e) {
    Th(e, 0);
  }

  function Fi(e) {
    var t = zl(e);
    if (Ef(t)) return e;
  }

  function Xf(e, t) {
    if (e === "change") return t;
  }
  var Zf = !1;
  if (un) {
    var uo;
    if (un) {
      var fo = "oninput" in document;
      if (!fo) {
        var Kf = document.createElement("div");
        (Kf.setAttribute("oninput", "return;"),
          (fo = typeof Kf.oninput == "function"));
      }
      uo = fo;
    } else uo = !1;
    Zf = uo && (!document.documentMode || 9 < document.documentMode);
  }

  function $f() {
    ql && (ql.detachEvent("onpropertychange", Jf), (Gl = ql = null));
  }

  function Jf(e) {
    if (e.propertyName === "value" && Fi(Gl)) {
      var t = [];
      (Qf(t, Gl, e, to(e)), Mf(Xv, t));
    }
  }

  function Zv(e, t, n) {
    e === "focusin"
      ? ($f(), (ql = t), (Gl = n), ql.attachEvent("onpropertychange", Jf))
      : e === "focusout" && $f();
  }

  function Kv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fi(Gl);
  }

  function $v(e, t) {
    if (e === "click") return Fi(t);
  }

  function Jv(e, t) {
    if (e === "input" || e === "change") return Fi(t);
  }

  function Pv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Nt = typeof Object.is == "function" ? Object.is : Pv;

  function Yl(e, t) {
    if (Nt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var s = n[l];
      if (!Yr.call(t, s) || !Nt(e[s], t[s])) return !1;
    }
    return !0;
  }

  function Pf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }

  function Ff(e, t) {
    var n = Pf(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return {
            node: n,
            offset: t - e,
          };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Pf(n);
    }
  }

  function Wf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Wf(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }

  function If(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Qi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Qi(e.document);
    }
    return t;
  }

  function mo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Fv = un && "documentMode" in document && 11 >= document.documentMode,
    Ga = null,
    ho = null,
    Vl = null,
    po = !1;

  function ed(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    po ||
      Ga == null ||
      Ga !== Qi(l) ||
      ((l = Ga),
      "selectionStart" in l && mo(l)
        ? (l = {
            start: l.selectionStart,
            end: l.selectionEnd,
          })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Vl && Yl(Vl, l)) ||
        ((Vl = l),
        (l = Bs(ho, "onSelect")),
        0 < l.length &&
          ((t = new Ji("onSelect", "select", null, t, n)),
          e.push({
            event: t,
            listeners: l,
          }),
          (t.target = Ga))));
  }

  function da(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Ya = {
      animationend: da("Animation", "AnimationEnd"),
      animationiteration: da("Animation", "AnimationIteration"),
      animationstart: da("Animation", "AnimationStart"),
      transitionrun: da("Transition", "TransitionRun"),
      transitionstart: da("Transition", "TransitionStart"),
      transitioncancel: da("Transition", "TransitionCancel"),
      transitionend: da("Transition", "TransitionEnd"),
    },
    go = {},
    td = {};
  un &&
    ((td = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ya.animationend.animation,
      delete Ya.animationiteration.animation,
      delete Ya.animationstart.animation),
    "TransitionEvent" in window || delete Ya.transitionend.transition);

  function ma(e) {
    if (go[e]) return go[e];
    if (!Ya[e]) return e;
    var t = Ya[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in td) return (go[e] = t[n]);
    return e;
  }
  var nd = ma("animationend"),
    ad = ma("animationiteration"),
    ld = ma("animationstart"),
    Wv = ma("transitionrun"),
    Iv = ma("transitionstart"),
    eb = ma("transitioncancel"),
    id = ma("transitionend"),
    sd = new Map(),
    yo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  yo.push("scrollEnd");

  function Vt(e, t) {
    (sd.set(e, t), ua(t, [e]));
  }
  var Wi =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    kt = [],
    Va = 0,
    xo = 0;

  function Ii() {
    for (var e = Va, t = (xo = Va = 0); t < e; ) {
      var n = kt[t];
      kt[t++] = null;
      var l = kt[t];
      kt[t++] = null;
      var s = kt[t];
      kt[t++] = null;
      var o = kt[t];
      if (((kt[t++] = null), l !== null && s !== null)) {
        var m = l.pending;
        (m === null ? (s.next = s) : ((s.next = m.next), (m.next = s)),
          (l.pending = s));
      }
      o !== 0 && rd(n, s, o);
    }
  }

  function es(e, t, n, l) {
    ((kt[Va++] = e),
      (kt[Va++] = t),
      (kt[Va++] = n),
      (kt[Va++] = l),
      (xo |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }

  function vo(e, t, n, l) {
    return (es(e, t, n, l), ts(e));
  }

  function ha(e, t) {
    return (es(e, null, null, t), ts(e));
  }

  function rd(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var s = !1, o = e.return; o !== null; )
      ((o.childLanes |= n),
        (l = o.alternate),
        l !== null && (l.childLanes |= n),
        o.tag === 22 &&
          ((e = o.stateNode), e === null || e._visibility & 1 || (s = !0)),
        (e = o),
        (o = o.return));
    return e.tag === 3
      ? ((o = e.stateNode),
        s &&
          t !== null &&
          ((s = 31 - St(n)),
          (e = o.hiddenUpdates),
          (l = e[s]),
          l === null ? (e[s] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        o)
      : null;
  }

  function ts(e) {
    if (50 < fi) throw ((fi = 0), (Ac = null), Error(c(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Qa = {};

  function tb(e, t, n, l) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }

  function jt(e, t, n, l) {
    return new tb(e, t, n, l);
  }

  function bo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }

  function fn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = jt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null
          ? null
          : {
              lanes: t.lanes,
              firstContext: t.firstContext,
            }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }

  function od(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : {
                  lanes: t.lanes,
                  firstContext: t.firstContext,
                })),
      e
    );
  }

  function ns(e, t, n, l, s, o) {
    var m = 0;
    if (((l = e), typeof e == "function")) bo(e) && (m = 1);
    else if (typeof e == "string")
      m = s0(e, n, P.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case oe:
          return (
            (e = jt(31, n, t, s)),
            (e.elementType = oe),
            (e.lanes = o),
            e
          );
        case T:
          return pa(n.children, s, o, t);
        case O:
          ((m = 8), (s |= 24));
          break;
        case U:
          return (
            (e = jt(12, n, t, s | 2)),
            (e.elementType = U),
            (e.lanes = o),
            e
          );
        case J:
          return ((e = jt(13, n, t, s)), (e.elementType = J), (e.lanes = o), e);
        case F:
          return ((e = jt(19, n, t, s)), (e.elementType = F), (e.lanes = o), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case V:
                m = 10;
                break e;
              case H:
                m = 9;
                break e;
              case Z:
                m = 11;
                break e;
              case X:
                m = 14;
                break e;
              case $:
                ((m = 16), (l = null));
                break e;
            }
          ((m = 29),
            (n = Error(c(130, e === null ? "null" : typeof e, ""))),
            (l = null));
      }
    return (
      (t = jt(m, n, t, s)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = o),
      t
    );
  }

  function pa(e, t, n, l) {
    return ((e = jt(7, e, l, t)), (e.lanes = n), e);
  }

  function wo(e, t, n) {
    return ((e = jt(6, e, null, t)), (e.lanes = n), e);
  }

  function cd(e) {
    var t = jt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }

  function So(e, t, n) {
    return (
      (t = jt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var ud = new WeakMap();

  function Lt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = ud.get(e);
      return n !== void 0
        ? n
        : ((t = {
            value: e,
            source: t,
            stack: cf(t),
          }),
          ud.set(e, t),
          t);
    }
    return {
      value: e,
      source: t,
      stack: cf(t),
    };
  }
  var Xa = [],
    Za = 0,
    as = null,
    Ql = 0,
    Ut = [],
    Ht = 0,
    Dn = null,
    Wt = 1,
    It = "";

  function dn(e, t) {
    ((Xa[Za++] = Ql), (Xa[Za++] = as), (as = e), (Ql = t));
  }

  function fd(e, t, n) {
    ((Ut[Ht++] = Wt), (Ut[Ht++] = It), (Ut[Ht++] = Dn), (Dn = e));
    var l = Wt;
    e = It;
    var s = 32 - St(l) - 1;
    ((l &= ~(1 << s)), (n += 1));
    var o = 32 - St(t) + s;
    if (30 < o) {
      var m = s - (s % 5);
      ((o = (l & ((1 << m) - 1)).toString(32)),
        (l >>= m),
        (s -= m),
        (Wt = (1 << (32 - St(t) + s)) | (n << s) | l),
        (It = o + e));
    } else ((Wt = (1 << o) | (n << s) | l), (It = e));
  }

  function No(e) {
    e.return !== null && (dn(e, 1), fd(e, 1, 0));
  }

  function jo(e) {
    for (; e === as; )
      ((as = Xa[--Za]), (Xa[Za] = null), (Ql = Xa[--Za]), (Xa[Za] = null));
    for (; e === Dn; )
      ((Dn = Ut[--Ht]),
        (Ut[Ht] = null),
        (It = Ut[--Ht]),
        (Ut[Ht] = null),
        (Wt = Ut[--Ht]),
        (Ut[Ht] = null));
  }

  function dd(e, t) {
    ((Ut[Ht++] = Wt),
      (Ut[Ht++] = It),
      (Ut[Ht++] = Dn),
      (Wt = t.id),
      (It = t.overflow),
      (Dn = e));
  }
  var lt = null,
    Le = null,
    je = !1,
    zn = null,
    Bt = !1,
    Eo = Error(c(519));

  function kn(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Xl(Lt(t, e)), Eo);
  }

  function md(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[at] = e), (t[mt] = l), n)) {
      case "dialog":
        (be("cancel", t), be("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        be("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < mi.length; n++) be(mi[n], t);
        break;
      case "source":
        be("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (be("error", t), be("load", t));
        break;
      case "details":
        be("toggle", t);
        break;
      case "input":
        (be("invalid", t),
          Tf(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ));
        break;
      case "select":
        be("invalid", t);
        break;
      case "textarea":
        (be("invalid", t), Af(t, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      Rh(t.textContent, n)
        ? (l.popover != null && (be("beforetoggle", t), be("toggle", t)),
          l.onScroll != null && be("scroll", t),
          l.onScrollEnd != null && be("scrollend", t),
          l.onClick != null && (t.onclick = cn),
          (t = !0))
        : (t = !1),
      t || kn(e, !0));
  }

  function hd(e) {
    for (lt = e.return; lt; )
      switch (lt.tag) {
        case 5:
        case 31:
        case 13:
          Bt = !1;
          return;
        case 27:
        case 3:
          Bt = !0;
          return;
        default:
          lt = lt.return;
      }
  }

  function Ka(e) {
    if (e !== lt) return !1;
    if (!je) return (hd(e), (je = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Vc(e.type, e.memoizedProps))),
        (n = !n)),
      n && Le && kn(e),
      hd(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      Le = Bh(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      Le = Bh(e);
    } else
      t === 27
        ? ((t = Le), Jn(e.type) ? ((e = $c), ($c = null), (Le = e)) : (Le = t))
        : (Le = lt ? Gt(e.stateNode.nextSibling) : null);
    return !0;
  }

  function ga() {
    ((Le = lt = null), (je = !1));
  }

  function To() {
    var e = zn;
    return (
      e !== null &&
        (xt === null ? (xt = e) : xt.push.apply(xt, e), (zn = null)),
      e
    );
  }

  function Xl(e) {
    zn === null ? (zn = [e]) : zn.push(e);
  }
  var Co = N(null),
    ya = null,
    mn = null;

  function Ln(e, t, n) {
    (K(Co, t._currentValue), (t._currentValue = n));
  }

  function hn(e) {
    ((e._currentValue = Co.current), q(Co));
  }

  function Ao(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }

  function Oo(e, t, n, l) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var o = s.dependencies;
      if (o !== null) {
        var m = s.child;
        o = o.firstContext;
        e: for (; o !== null; ) {
          var x = o;
          o = s;
          for (var S = 0; S < t.length; S++)
            if (x.context === t[S]) {
              ((o.lanes |= n),
                (x = o.alternate),
                x !== null && (x.lanes |= n),
                Ao(o.return, n, e),
                l || (m = null));
              break e;
            }
          o = x.next;
        }
      } else if (s.tag === 18) {
        if (((m = s.return), m === null)) throw Error(c(341));
        ((m.lanes |= n),
          (o = m.alternate),
          o !== null && (o.lanes |= n),
          Ao(m, n, e),
          (m = null));
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (((s = m.sibling), s !== null)) {
            ((s.return = m.return), (m = s));
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }

  function $a(e, t, n, l) {
    e = null;
    for (var s = t, o = !1; s !== null; ) {
      if (!o) {
        if ((s.flags & 524288) !== 0) o = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(c(387));
        if (((m = m.memoizedProps), m !== null)) {
          var x = s.type;
          Nt(s.pendingProps.value, m.value) ||
            (e !== null ? e.push(x) : (e = [x]));
        }
      } else if (s === ae.current) {
        if (((m = s.alternate), m === null)) throw Error(c(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (e !== null ? e.push(xi) : (e = [xi]));
      }
      s = s.return;
    }
    (e !== null && Oo(t, e, n, l), (t.flags |= 262144));
  }

  function ls(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Nt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }

  function xa(e) {
    ((ya = e),
      (mn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }

  function it(e) {
    return pd(ya, e);
  }

  function is(e, t) {
    return (ya === null && xa(e), pd(e, t));
  }

  function pd(e, t) {
    var n = t._currentValue;
    if (
      ((t = {
        context: t,
        memoizedValue: n,
        next: null,
      }),
      mn === null)
    ) {
      if (e === null) throw Error(c(308));
      ((mn = t),
        (e.dependencies = {
          lanes: 0,
          firstContext: t,
        }),
        (e.flags |= 524288));
    } else mn = mn.next = t;
    return n;
  }
  var nb =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    ab = a.unstable_scheduleCallback,
    lb = a.unstable_NormalPriority,
    $e = {
      $$typeof: V,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };

  function Ro() {
    return {
      controller: new nb(),
      data: new Map(),
      refCount: 0,
    };
  }

  function Zl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        ab(lb, function () {
          e.controller.abort();
        }));
  }
  var Kl = null,
    _o = 0,
    Ja = 0,
    Pa = null;

  function ib(e, t) {
    if (Kl === null) {
      var n = (Kl = []);
      ((_o = 0),
        (Ja = zc()),
        (Pa = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (_o++, t.then(gd, gd), t);
  }

  function gd() {
    if (--_o === 0 && Kl !== null) {
      Pa !== null && (Pa.status = "fulfilled");
      var e = Kl;
      ((Kl = null), (Ja = 0), (Pa = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }

  function sb(e, t) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = "fulfilled"), (l.value = t));
          for (var s = 0; s < n.length; s++) (0, n[s])(t);
        },
        function (s) {
          for (l.status = "rejected", l.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        },
      ),
      l
    );
  }
  var yd = R.S;
  R.S = function (e, t) {
    ((eh = bt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        ib(e, t),
      yd !== null && yd(e, t));
  };
  var va = N(null);

  function Mo() {
    var e = va.current;
    return e !== null ? e : ke.pooledCache;
  }

  function ss(e, t) {
    t === null ? K(va, va.current) : K(va, t.pool);
  }

  function xd() {
    var e = Mo();
    return e === null
      ? null
      : {
          parent: $e._currentValue,
          pool: e,
        };
  }
  var Fa = Error(c(460)),
    Do = Error(c(474)),
    rs = Error(c(542)),
    os = {
      then: function () {},
    };

  function vd(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }

  function bd(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(cn, cn), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Sd(e), e);
      default:
        if (typeof t.status == "string") t.then(cn, cn);
        else {
          if (((e = ke), e !== null && 100 < e.shellSuspendCounter))
            throw Error(c(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var s = t;
                  ((s.status = "fulfilled"), (s.value = l));
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var s = t;
                  ((s.status = "rejected"), (s.reason = l));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Sd(e), e);
        }
        throw ((wa = t), Fa);
    }
  }

  function ba(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((wa = n), Fa)
        : n;
    }
  }
  var wa = null;

  function wd() {
    if (wa === null) throw Error(c(459));
    var e = wa;
    return ((wa = null), e);
  }

  function Sd(e) {
    if (e === Fa || e === rs) throw Error(c(483));
  }
  var Wa = null,
    $l = 0;

  function cs(e) {
    var t = $l;
    return (($l += 1), Wa === null && (Wa = []), bd(Wa, e, t));
  }

  function Jl(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }

  function us(e, t) {
    throw t.$$typeof === E
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }

  function Nd(e) {
    function t(C, j) {
      if (e) {
        var _ = C.deletions;
        _ === null ? ((C.deletions = [j]), (C.flags |= 16)) : _.push(j);
      }
    }

    function n(C, j) {
      if (!e) return null;
      for (; j !== null; ) (t(C, j), (j = j.sibling));
      return null;
    }

    function l(C) {
      for (var j = new Map(); C !== null; )
        (C.key !== null ? j.set(C.key, C) : j.set(C.index, C), (C = C.sibling));
      return j;
    }

    function s(C, j) {
      return ((C = fn(C, j)), (C.index = 0), (C.sibling = null), C);
    }

    function o(C, j, _) {
      return (
        (C.index = _),
        e
          ? ((_ = C.alternate),
            _ !== null
              ? ((_ = _.index), _ < j ? ((C.flags |= 67108866), j) : _)
              : ((C.flags |= 67108866), j))
          : ((C.flags |= 1048576), j)
      );
    }

    function m(C) {
      return (e && C.alternate === null && (C.flags |= 67108866), C);
    }

    function x(C, j, _, G) {
      return j === null || j.tag !== 6
        ? ((j = wo(_, C.mode, G)), (j.return = C), j)
        : ((j = s(j, _)), (j.return = C), j);
    }

    function S(C, j, _, G) {
      var le = _.type;
      return le === T
        ? B(C, j, _.props.children, G, _.key)
        : j !== null &&
            (j.elementType === le ||
              (typeof le == "object" &&
                le !== null &&
                le.$$typeof === $ &&
                ba(le) === j.type))
          ? ((j = s(j, _.props)), Jl(j, _), (j.return = C), j)
          : ((j = ns(_.type, _.key, _.props, null, C.mode, G)),
            Jl(j, _),
            (j.return = C),
            j);
    }

    function M(C, j, _, G) {
      return j === null ||
        j.tag !== 4 ||
        j.stateNode.containerInfo !== _.containerInfo ||
        j.stateNode.implementation !== _.implementation
        ? ((j = So(_, C.mode, G)), (j.return = C), j)
        : ((j = s(j, _.children || [])), (j.return = C), j);
    }

    function B(C, j, _, G, le) {
      return j === null || j.tag !== 7
        ? ((j = pa(_, C.mode, G, le)), (j.return = C), j)
        : ((j = s(j, _)), (j.return = C), j);
    }

    function Y(C, j, _) {
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return ((j = wo("" + j, C.mode, _)), (j.return = C), j);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case A:
            return (
              (_ = ns(j.type, j.key, j.props, null, C.mode, _)),
              Jl(_, j),
              (_.return = C),
              _
            );
          case D:
            return ((j = So(j, C.mode, _)), (j.return = C), j);
          case $:
            return ((j = ba(j)), Y(C, j, _));
        }
        if (fe(j) || pe(j))
          return ((j = pa(j, C.mode, _, null)), (j.return = C), j);
        if (typeof j.then == "function") return Y(C, cs(j), _);
        if (j.$$typeof === V) return Y(C, is(C, j), _);
        us(C, j);
      }
      return null;
    }

    function z(C, j, _, G) {
      var le = j !== null ? j.key : null;
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return le !== null ? null : x(C, j, "" + _, G);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case A:
            return _.key === le ? S(C, j, _, G) : null;
          case D:
            return _.key === le ? M(C, j, _, G) : null;
          case $:
            return ((_ = ba(_)), z(C, j, _, G));
        }
        if (fe(_) || pe(_)) return le !== null ? null : B(C, j, _, G, null);
        if (typeof _.then == "function") return z(C, j, cs(_), G);
        if (_.$$typeof === V) return z(C, j, is(C, _), G);
        us(C, _);
      }
      return null;
    }

    function k(C, j, _, G, le) {
      if (
        (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
      )
        return ((C = C.get(_) || null), x(j, C, "" + G, le));
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case A:
            return (
              (C = C.get(G.key === null ? _ : G.key) || null),
              S(j, C, G, le)
            );
          case D:
            return (
              (C = C.get(G.key === null ? _ : G.key) || null),
              M(j, C, G, le)
            );
          case $:
            return ((G = ba(G)), k(C, j, _, G, le));
        }
        if (fe(G) || pe(G))
          return ((C = C.get(_) || null), B(j, C, G, le, null));
        if (typeof G.then == "function") return k(C, j, _, cs(G), le);
        if (G.$$typeof === V) return k(C, j, _, is(j, G), le);
        us(j, G);
      }
      return null;
    }

    function I(C, j, _, G) {
      for (
        var le = null, Te = null, ne = j, he = (j = 0), Se = null;
        ne !== null && he < _.length;
        he++
      ) {
        ne.index > he ? ((Se = ne), (ne = null)) : (Se = ne.sibling);
        var Ce = z(C, ne, _[he], G);
        if (Ce === null) {
          ne === null && (ne = Se);
          break;
        }
        (e && ne && Ce.alternate === null && t(C, ne),
          (j = o(Ce, j, he)),
          Te === null ? (le = Ce) : (Te.sibling = Ce),
          (Te = Ce),
          (ne = Se));
      }
      if (he === _.length) return (n(C, ne), je && dn(C, he), le);
      if (ne === null) {
        for (; he < _.length; he++)
          ((ne = Y(C, _[he], G)),
            ne !== null &&
              ((j = o(ne, j, he)),
              Te === null ? (le = ne) : (Te.sibling = ne),
              (Te = ne)));
        return (je && dn(C, he), le);
      }
      for (ne = l(ne); he < _.length; he++)
        ((Se = k(ne, C, he, _[he], G)),
          Se !== null &&
            (e &&
              Se.alternate !== null &&
              ne.delete(Se.key === null ? he : Se.key),
            (j = o(Se, j, he)),
            Te === null ? (le = Se) : (Te.sibling = Se),
            (Te = Se)));
      return (
        e &&
          ne.forEach(function (ea) {
            return t(C, ea);
          }),
        je && dn(C, he),
        le
      );
    }

    function se(C, j, _, G) {
      if (_ == null) throw Error(c(151));
      for (
        var le = null,
          Te = null,
          ne = j,
          he = (j = 0),
          Se = null,
          Ce = _.next();
        ne !== null && !Ce.done;
        he++, Ce = _.next()
      ) {
        ne.index > he ? ((Se = ne), (ne = null)) : (Se = ne.sibling);
        var ea = z(C, ne, Ce.value, G);
        if (ea === null) {
          ne === null && (ne = Se);
          break;
        }
        (e && ne && ea.alternate === null && t(C, ne),
          (j = o(ea, j, he)),
          Te === null ? (le = ea) : (Te.sibling = ea),
          (Te = ea),
          (ne = Se));
      }
      if (Ce.done) return (n(C, ne), je && dn(C, he), le);
      if (ne === null) {
        for (; !Ce.done; he++, Ce = _.next())
          ((Ce = Y(C, Ce.value, G)),
            Ce !== null &&
              ((j = o(Ce, j, he)),
              Te === null ? (le = Ce) : (Te.sibling = Ce),
              (Te = Ce)));
        return (je && dn(C, he), le);
      }
      for (ne = l(ne); !Ce.done; he++, Ce = _.next())
        ((Ce = k(ne, C, he, Ce.value, G)),
          Ce !== null &&
            (e &&
              Ce.alternate !== null &&
              ne.delete(Ce.key === null ? he : Ce.key),
            (j = o(Ce, j, he)),
            Te === null ? (le = Ce) : (Te.sibling = Ce),
            (Te = Ce)));
      return (
        e &&
          ne.forEach(function (y0) {
            return t(C, y0);
          }),
        je && dn(C, he),
        le
      );
    }

    function ze(C, j, _, G) {
      if (
        (typeof _ == "object" &&
          _ !== null &&
          _.type === T &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == "object" && _ !== null)
      ) {
        switch (_.$$typeof) {
          case A:
            e: {
              for (var le = _.key; j !== null; ) {
                if (j.key === le) {
                  if (((le = _.type), le === T)) {
                    if (j.tag === 7) {
                      (n(C, j.sibling),
                        (G = s(j, _.props.children)),
                        (G.return = C),
                        (C = G));
                      break e;
                    }
                  } else if (
                    j.elementType === le ||
                    (typeof le == "object" &&
                      le !== null &&
                      le.$$typeof === $ &&
                      ba(le) === j.type)
                  ) {
                    (n(C, j.sibling),
                      (G = s(j, _.props)),
                      Jl(G, _),
                      (G.return = C),
                      (C = G));
                    break e;
                  }
                  n(C, j);
                  break;
                } else t(C, j);
                j = j.sibling;
              }
              _.type === T
                ? ((G = pa(_.props.children, C.mode, G, _.key)),
                  (G.return = C),
                  (C = G))
                : ((G = ns(_.type, _.key, _.props, null, C.mode, G)),
                  Jl(G, _),
                  (G.return = C),
                  (C = G));
            }
            return m(C);
          case D:
            e: {
              for (le = _.key; j !== null; ) {
                if (j.key === le)
                  if (
                    j.tag === 4 &&
                    j.stateNode.containerInfo === _.containerInfo &&
                    j.stateNode.implementation === _.implementation
                  ) {
                    (n(C, j.sibling),
                      (G = s(j, _.children || [])),
                      (G.return = C),
                      (C = G));
                    break e;
                  } else {
                    n(C, j);
                    break;
                  }
                else t(C, j);
                j = j.sibling;
              }
              ((G = So(_, C.mode, G)), (G.return = C), (C = G));
            }
            return m(C);
          case $:
            return ((_ = ba(_)), ze(C, j, _, G));
        }
        if (fe(_)) return I(C, j, _, G);
        if (pe(_)) {
          if (((le = pe(_)), typeof le != "function")) throw Error(c(150));
          return ((_ = le.call(_)), se(C, j, _, G));
        }
        if (typeof _.then == "function") return ze(C, j, cs(_), G);
        if (_.$$typeof === V) return ze(C, j, is(C, _), G);
        us(C, _);
      }
      return (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
        ? ((_ = "" + _),
          j !== null && j.tag === 6
            ? (n(C, j.sibling), (G = s(j, _)), (G.return = C), (C = G))
            : (n(C, j), (G = wo(_, C.mode, G)), (G.return = C), (C = G)),
          m(C))
        : n(C, j);
    }
    return function (C, j, _, G) {
      try {
        $l = 0;
        var le = ze(C, j, _, G);
        return ((Wa = null), le);
      } catch (ne) {
        if (ne === Fa || ne === rs) throw ne;
        var Te = jt(29, ne, null, C.mode);
        return ((Te.lanes = G), (Te.return = C), Te);
      }
    };
  }
  var Sa = Nd(!0),
    jd = Nd(!1),
    Un = !1;

  function zo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null,
      },
      callbacks: null,
    };
  }

  function ko(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }

  function Hn(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }

  function Bn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ae & 2) !== 0)) {
      var s = l.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (l.pending = t),
        (t = ts(e)),
        rd(e, null, n),
        t
      );
    }
    return (es(e, l, t, n), ts(e));
  }

  function Pl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), pf(e, n));
    }
  }

  function Lo(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var s = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (o === null ? (s = o = m) : (o = o.next = m), (n = n.next));
        } while (n !== null);
        o === null ? (s = o = t) : (o = o.next = t);
      } else s = o = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: o,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var Uo = !1;

  function Fl() {
    if (Uo) {
      var e = Pa;
      if (e !== null) throw e;
    }
  }

  function Wl(e, t, n, l) {
    Uo = !1;
    var s = e.updateQueue;
    Un = !1;
    var o = s.firstBaseUpdate,
      m = s.lastBaseUpdate,
      x = s.shared.pending;
    if (x !== null) {
      s.shared.pending = null;
      var S = x,
        M = S.next;
      ((S.next = null), m === null ? (o = M) : (m.next = M), (m = S));
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (x = B.lastBaseUpdate),
        x !== m &&
          (x === null ? (B.firstBaseUpdate = M) : (x.next = M),
          (B.lastBaseUpdate = S)));
    }
    if (o !== null) {
      var Y = s.baseState;
      ((m = 0), (B = M = S = null), (x = o));
      do {
        var z = x.lane & -536870913,
          k = z !== x.lane;
        if (k ? (we & z) === z : (l & z) === z) {
          (z !== 0 && z === Ja && (Uo = !0),
            B !== null &&
              (B = B.next =
                {
                  lane: 0,
                  tag: x.tag,
                  payload: x.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var I = e,
              se = x;
            z = t;
            var ze = n;
            switch (se.tag) {
              case 1:
                if (((I = se.payload), typeof I == "function")) {
                  Y = I.call(ze, Y, z);
                  break e;
                }
                Y = I;
                break e;
              case 3:
                I.flags = (I.flags & -65537) | 128;
              case 0:
                if (
                  ((I = se.payload),
                  (z = typeof I == "function" ? I.call(ze, Y, z) : I),
                  z == null)
                )
                  break e;
                Y = v({}, Y, z);
                break e;
              case 2:
                Un = !0;
            }
          }
          ((z = x.callback),
            z !== null &&
              ((e.flags |= 64),
              k && (e.flags |= 8192),
              (k = s.callbacks),
              k === null ? (s.callbacks = [z]) : k.push(z)));
        } else
          ((k = {
            lane: z,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            B === null ? ((M = B = k), (S = Y)) : (B = B.next = k),
            (m |= z));
        if (((x = x.next), x === null)) {
          if (((x = s.shared.pending), x === null)) break;
          ((k = x),
            (x = k.next),
            (k.next = null),
            (s.lastBaseUpdate = k),
            (s.shared.pending = null));
        }
      } while (!0);
      (B === null && (S = Y),
        (s.baseState = S),
        (s.firstBaseUpdate = M),
        (s.lastBaseUpdate = B),
        o === null && (s.shared.lanes = 0),
        (Qn |= m),
        (e.lanes = m),
        (e.memoizedState = Y));
    }
  }

  function Ed(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }

  function Td(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) Ed(n[e], t);
  }
  var Ia = N(null),
    fs = N(0);

  function Cd(e, t) {
    ((e = Nn), K(fs, e), K(Ia, t), (Nn = e | t.baseLanes));
  }

  function Ho() {
    (K(fs, Nn), K(Ia, Ia.current));
  }

  function Bo() {
    ((Nn = fs.current), q(Ia), q(fs));
  }
  var Et = N(null),
    qt = null;

  function qn(e) {
    var t = e.alternate;
    (K(Xe, Xe.current & 1),
      K(Et, e),
      qt === null &&
        (t === null || Ia.current !== null || t.memoizedState !== null) &&
        (qt = e));
  }

  function qo(e) {
    (K(Xe, Xe.current), K(Et, e), qt === null && (qt = e));
  }

  function Ad(e) {
    e.tag === 22
      ? (K(Xe, Xe.current), K(Et, e), qt === null && (qt = e))
      : Gn();
  }

  function Gn() {
    (K(Xe, Xe.current), K(Et, Et.current));
  }

  function Tt(e) {
    (q(Et), qt === e && (qt = null), q(Xe));
  }
  var Xe = N(0);

  function ds(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Zc(n) || Kc(n)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var pn = 0,
    me = null,
    Me = null,
    Je = null,
    ms = !1,
    el = !1,
    Na = !1,
    hs = 0,
    Il = 0,
    tl = null,
    rb = 0;

  function qe() {
    throw Error(c(321));
  }

  function Go(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Nt(e[n], t[n])) return !1;
    return !0;
  }

  function Yo(e, t, n, l, s, o) {
    return (
      (pn = o),
      (me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (R.H = e === null || e.memoizedState === null ? fm : ac),
      (Na = !1),
      (o = n(l, s)),
      (Na = !1),
      el && (o = Rd(t, n, l, s)),
      Od(e),
      o
    );
  }

  function Od(e) {
    R.H = ni;
    var t = Me !== null && Me.next !== null;
    if (((pn = 0), (Je = Me = me = null), (ms = !1), (Il = 0), (tl = null), t))
      throw Error(c(300));
    e === null ||
      Pe ||
      ((e = e.dependencies), e !== null && ls(e) && (Pe = !0));
  }

  function Rd(e, t, n, l) {
    me = e;
    var s = 0;
    do {
      if ((el && (tl = null), (Il = 0), (el = !1), 25 <= s))
        throw Error(c(301));
      if (((s += 1), (Je = Me = null), e.updateQueue != null)) {
        var o = e.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0));
      }
      ((R.H = dm), (o = t(n, l)));
    } while (el);
    return o;
  }

  function ob() {
    var e = R.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? ei(t) : t),
      (e = e.useState()[0]),
      (Me !== null ? Me.memoizedState : null) !== e && (me.flags |= 1024),
      t
    );
  }

  function Vo() {
    var e = hs !== 0;
    return ((hs = 0), e);
  }

  function Qo(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }

  function Xo(e) {
    if (ms) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      ms = !1;
    }
    ((pn = 0), (Je = Me = me = null), (el = !1), (Il = hs = 0), (tl = null));
  }

  function ct() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Je === null ? (me.memoizedState = Je = e) : (Je = Je.next = e), Je);
  }

  function Ze() {
    if (Me === null) {
      var e = me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = Je === null ? me.memoizedState : Je.next;
    if (t !== null) ((Je = t), (Me = e));
    else {
      if (e === null)
        throw me.alternate === null ? Error(c(467)) : Error(c(310));
      ((Me = e),
        (e = {
          memoizedState: Me.memoizedState,
          baseState: Me.baseState,
          baseQueue: Me.baseQueue,
          queue: Me.queue,
          next: null,
        }),
        Je === null ? (me.memoizedState = Je = e) : (Je = Je.next = e));
    }
    return Je;
  }

  function ps() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null,
    };
  }

  function ei(e) {
    var t = Il;
    return (
      (Il += 1),
      tl === null && (tl = []),
      (e = bd(tl, e, t)),
      (t = me),
      (Je === null ? t.memoizedState : Je.next) === null &&
        ((t = t.alternate),
        (R.H = t === null || t.memoizedState === null ? fm : ac)),
      e
    );
  }

  function gs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ei(e);
      if (e.$$typeof === V) return it(e);
    }
    throw Error(c(438, String(e)));
  }

  function Zo(e) {
    var t = null,
      n = me.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = me.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null &&
        (t = {
          data: [],
          index: 0,
        }),
      n === null && ((n = ps()), (me.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = ye;
    return (t.index++, n);
  }

  function gn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }

  function ys(e) {
    var t = Ze();
    return Ko(t, Me, e);
  }

  function Ko(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var s = e.baseQueue,
      o = l.pending;
    if (o !== null) {
      if (s !== null) {
        var m = s.next;
        ((s.next = o.next), (o.next = m));
      }
      ((t.baseQueue = s = o), (l.pending = null));
    }
    if (((o = e.baseState), s === null)) e.memoizedState = o;
    else {
      t = s.next;
      var x = (m = null),
        S = null,
        M = t,
        B = !1;
      do {
        var Y = M.lane & -536870913;
        if (Y !== M.lane ? (we & Y) === Y : (pn & Y) === Y) {
          var z = M.revertLane;
          if (z === 0)
            (S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: M.action,
                  hasEagerState: M.hasEagerState,
                  eagerState: M.eagerState,
                  next: null,
                }),
              Y === Ja && (B = !0));
          else if ((pn & z) === z) {
            ((M = M.next), z === Ja && (B = !0));
            continue;
          } else
            ((Y = {
              lane: 0,
              revertLane: M.revertLane,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null,
            }),
              S === null ? ((x = S = Y), (m = o)) : (S = S.next = Y),
              (me.lanes |= z),
              (Qn |= z));
          ((Y = M.action),
            Na && n(o, Y),
            (o = M.hasEagerState ? M.eagerState : n(o, Y)));
        } else
          ((z = {
            lane: Y,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          }),
            S === null ? ((x = S = z), (m = o)) : (S = S.next = z),
            (me.lanes |= Y),
            (Qn |= Y));
        M = M.next;
      } while (M !== null && M !== t);
      if (
        (S === null ? (m = o) : (S.next = x),
        !Nt(o, e.memoizedState) && ((Pe = !0), B && ((n = Pa), n !== null)))
      )
        throw n;
      ((e.memoizedState = o),
        (e.baseState = m),
        (e.baseQueue = S),
        (l.lastRenderedState = o));
    }
    return (s === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }

  function $o(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      s = n.pending,
      o = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var m = (s = s.next);
      do ((o = e(o, m.action)), (m = m.next));
      while (m !== s);
      (Nt(o, t.memoizedState) || (Pe = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, l];
  }

  function _d(e, t, n) {
    var l = me,
      s = Ze(),
      o = je;
    if (o) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var m = !Nt((Me || s).memoizedState, n);
    if (
      (m && ((s.memoizedState = n), (Pe = !0)),
      (s = s.queue),
      Fo(zd.bind(null, l, s, e), [e]),
      s.getSnapshot !== t || m || (Je !== null && Je.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        nl(
          9,
          {
            destroy: void 0,
          },
          Dd.bind(null, l, s, n, t),
          null,
        ),
        ke === null)
      )
        throw Error(c(349));
      o || (pn & 127) !== 0 || Md(l, t, n);
    }
    return n;
  }

  function Md(e, t, n) {
    ((e.flags |= 16384),
      (e = {
        getSnapshot: t,
        value: n,
      }),
      (t = me.updateQueue),
      t === null
        ? ((t = ps()), (me.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }

  function Dd(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), kd(t) && Ld(e));
  }

  function zd(e, t, n) {
    return n(function () {
      kd(t) && Ld(e);
    });
  }

  function kd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Nt(e, n);
    } catch {
      return !0;
    }
  }

  function Ld(e) {
    var t = ha(e, 2);
    t !== null && vt(t, e, 2);
  }

  function Jo(e) {
    var t = ct();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Na)) {
        Rn(!0);
        try {
          n();
        } finally {
          Rn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gn,
        lastRenderedState: e,
      }),
      t
    );
  }

  function Ud(e, t, n, l) {
    return ((e.baseState = n), Ko(e, Me, typeof l == "function" ? l : gn));
  }

  function cb(e, t, n, l, s) {
    if (bs(e)) throw Error(c(485));
    if (((e = t.action), e !== null)) {
      var o = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          o.listeners.push(m);
        },
      };
      (R.T !== null ? n(!0) : (o.isTransition = !1),
        l(o),
        (n = t.pending),
        n === null
          ? ((o.next = t.pending = o), Hd(t, o))
          : ((o.next = n.next), (t.pending = n.next = o)));
    }
  }

  function Hd(e, t) {
    var n = t.action,
      l = t.payload,
      s = e.state;
    if (t.isTransition) {
      var o = R.T,
        m = {};
      R.T = m;
      try {
        var x = n(s, l),
          S = R.S;
        (S !== null && S(m, x), Bd(e, t, x));
      } catch (M) {
        Po(e, t, M);
      } finally {
        (o !== null && m.types !== null && (o.types = m.types), (R.T = o));
      }
    } else
      try {
        ((o = n(s, l)), Bd(e, t, o));
      } catch (M) {
        Po(e, t, M);
      }
  }

  function Bd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            qd(e, t, l);
          },
          function (l) {
            return Po(e, t, l);
          },
        )
      : qd(e, t, n);
  }

  function qd(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      Gd(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Hd(e, n))));
  }

  function Po(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = "rejected"), (t.reason = n), Gd(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }

  function Gd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }

  function Yd(e, t) {
    return t;
  }

  function Vd(e, t) {
    if (je) {
      var n = ke.formState;
      if (n !== null) {
        e: {
          var l = me;
          if (je) {
            if (Le) {
              t: {
                for (var s = Le, o = Bt; s.nodeType !== 8; ) {
                  if (!o) {
                    s = null;
                    break t;
                  }
                  if (((s = Gt(s.nextSibling)), s === null)) {
                    s = null;
                    break t;
                  }
                }
                ((o = s.data), (s = o === "F!" || o === "F" ? s : null));
              }
              if (s) {
                ((Le = Gt(s.nextSibling)), (l = s.data === "F!"));
                break e;
              }
            }
            kn(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = ct()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yd,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = om.bind(null, me, l)),
      (l.dispatch = n),
      (l = Jo(!1)),
      (o = nc.bind(null, me, !1, l.queue)),
      (l = ct()),
      (s = {
        state: t,
        dispatch: null,
        action: e,
        pending: null,
      }),
      (l.queue = s),
      (n = cb.bind(null, me, s, o, n)),
      (s.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }

  function Qd(e) {
    var t = Ze();
    return Xd(t, Me, e);
  }

  function Xd(e, t, n) {
    if (
      ((t = Ko(e, t, Yd)[0]),
      (e = ys(gn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = ei(t);
      } catch (m) {
        throw m === Fa ? rs : m;
      }
    else l = t;
    t = Ze();
    var s = t.queue,
      o = s.dispatch;
    return (
      n !== t.memoizedState &&
        ((me.flags |= 2048),
        nl(
          9,
          {
            destroy: void 0,
          },
          ub.bind(null, s, n),
          null,
        )),
      [l, o, e]
    );
  }

  function ub(e, t) {
    e.action = t;
  }

  function Zd(e) {
    var t = Ze(),
      n = Me;
    if (n !== null) return Xd(t, n, e);
    (Ze(), (t = t.memoizedState), (n = Ze()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }

  function nl(e, t, n, l) {
    return (
      (e = {
        tag: e,
        create: n,
        deps: l,
        inst: t,
        next: null,
      }),
      (t = me.updateQueue),
      t === null && ((t = ps()), (me.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }

  function Kd() {
    return Ze().memoizedState;
  }

  function xs(e, t, n, l) {
    var s = ct();
    ((me.flags |= e),
      (s.memoizedState = nl(
        1 | t,
        {
          destroy: void 0,
        },
        n,
        l === void 0 ? null : l,
      )));
  }

  function vs(e, t, n, l) {
    var s = Ze();
    l = l === void 0 ? null : l;
    var o = s.memoizedState.inst;
    Me !== null && l !== null && Go(l, Me.memoizedState.deps)
      ? (s.memoizedState = nl(t, o, n, l))
      : ((me.flags |= e), (s.memoizedState = nl(1 | t, o, n, l)));
  }

  function $d(e, t) {
    xs(8390656, 8, e, t);
  }

  function Fo(e, t) {
    vs(2048, 8, e, t);
  }

  function fb(e) {
    me.flags |= 4;
    var t = me.updateQueue;
    if (t === null) ((t = ps()), (me.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }

  function Jd(e) {
    var t = Ze().memoizedState;
    return (
      fb({
        ref: t,
        nextImpl: e,
      }),
      function () {
        if ((Ae & 2) !== 0) throw Error(c(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }

  function Pd(e, t) {
    return vs(4, 2, e, t);
  }

  function Fd(e, t) {
    return vs(4, 4, e, t);
  }

  function Wd(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }

  function Id(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), vs(4, 4, Wd.bind(null, t, e), n));
  }

  function Wo() {}

  function em(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Go(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }

  function tm(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Go(t, l[1])) return l[0];
    if (((l = e()), Na)) {
      Rn(!0);
      try {
        e();
      } finally {
        Rn(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }

  function Io(e, t, n) {
    return n === void 0 || ((pn & 1073741824) !== 0 && (we & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = nh()), (me.lanes |= e), (Qn |= e), n);
  }

  function nm(e, t, n, l) {
    return Nt(n, t)
      ? n
      : Ia.current !== null
        ? ((e = Io(e, n, l)), Nt(e, t) || (Pe = !0), e)
        : (pn & 42) === 0 || ((pn & 1073741824) !== 0 && (we & 261930) === 0)
          ? ((Pe = !0), (e.memoizedState = n))
          : ((e = nh()), (me.lanes |= e), (Qn |= e), t);
  }

  function am(e, t, n, l, s) {
    var o = Q.p;
    Q.p = o !== 0 && 8 > o ? o : 8;
    var m = R.T,
      x = {};
    ((R.T = x), nc(e, !1, t, n));
    try {
      var S = s(),
        M = R.S;
      if (
        (M !== null && M(x, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var B = sb(S, l);
        ti(e, t, B, Ot(e));
      } else ti(e, t, l, Ot(e));
    } catch (Y) {
      ti(
        e,
        t,
        {
          then: function () {},
          status: "rejected",
          reason: Y,
        },
        Ot(),
      );
    } finally {
      ((Q.p = o),
        m !== null && x.types !== null && (m.types = x.types),
        (R.T = m));
    }
  }

  function db() {}

  function ec(e, t, n, l) {
    if (e.tag !== 5) throw Error(c(476));
    var s = lm(e).queue;
    am(
      e,
      s,
      t,
      L,
      n === null
        ? db
        : function () {
            return (im(e), n(l));
          },
    );
  }

  function lm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: L,
      baseState: L,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gn,
        lastRenderedState: L,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: gn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }

  function im(e) {
    var t = lm(e);
    (t.next === null && (t = e.alternate.memoizedState),
      ti(e, t.next.queue, {}, Ot()));
  }

  function tc() {
    return it(xi);
  }

  function sm() {
    return Ze().memoizedState;
  }

  function rm() {
    return Ze().memoizedState;
  }

  function mb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Ot();
          e = Hn(n);
          var l = Bn(t, e, n);
          (l !== null && (vt(l, t, n), Pl(l, t, n)),
            (t = {
              cache: Ro(),
            }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }

  function hb(e, t, n) {
    var l = Ot();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      bs(e)
        ? cm(t, n)
        : ((n = vo(e, t, n, l)), n !== null && (vt(n, e, l), um(n, t, l))));
  }

  function om(e, t, n) {
    var l = Ot();
    ti(e, t, n, l);
  }

  function ti(e, t, n, l) {
    var s = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (bs(e)) cm(t, s);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var m = t.lastRenderedState,
            x = o(m, n);
          if (((s.hasEagerState = !0), (s.eagerState = x), Nt(x, m)))
            return (es(e, t, s, 0), ke === null && Ii(), !1);
        } catch {}
      if (((n = vo(e, t, s, l)), n !== null))
        return (vt(n, e, l), um(n, t, l), !0);
    }
    return !1;
  }

  function nc(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: zc(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      bs(e))
    ) {
      if (t) throw Error(c(479));
    } else ((t = vo(e, n, l, 2)), t !== null && vt(t, e, 2));
  }

  function bs(e) {
    var t = e.alternate;
    return e === me || (t !== null && t === me);
  }

  function cm(e, t) {
    el = ms = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }

  function um(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), pf(e, n));
    }
  }
  var ni = {
    readContext: it,
    use: gs,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useLayoutEffect: qe,
    useInsertionEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useSyncExternalStore: qe,
    useId: qe,
    useHostTransitionStatus: qe,
    useFormState: qe,
    useActionState: qe,
    useOptimistic: qe,
    useMemoCache: qe,
    useCacheRefresh: qe,
  };
  ni.useEffectEvent = qe;
  var fm = {
      readContext: it,
      use: gs,
      useCallback: function (e, t) {
        return ((ct().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: it,
      useEffect: $d,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          xs(4194308, 4, Wd.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return xs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        xs(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = ct();
        t = t === void 0 ? null : t;
        var l = e();
        if (Na) {
          Rn(!0);
          try {
            e();
          } finally {
            Rn(!1);
          }
        }
        return ((n.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, n) {
        var l = ct();
        if (n !== void 0) {
          var s = n(t);
          if (Na) {
            Rn(!0);
            try {
              n(t);
            } finally {
              Rn(!1);
            }
          }
        } else s = t;
        return (
          (l.memoizedState = l.baseState = s),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: s,
          }),
          (l.queue = e),
          (e = e.dispatch = hb.bind(null, me, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ct();
        return (
          (e = {
            current: e,
          }),
          (t.memoizedState = e)
        );
      },
      useState: function (e) {
        e = Jo(e);
        var t = e.queue,
          n = om.bind(null, me, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Wo,
      useDeferredValue: function (e, t) {
        var n = ct();
        return Io(n, e, t);
      },
      useTransition: function () {
        var e = Jo(!1);
        return (
          (e = am.bind(null, me, e.queue, !0, !1)),
          (ct().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var l = me,
          s = ct();
        if (je) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = t()), ke === null)) throw Error(c(349));
          (we & 127) !== 0 || Md(l, t, n);
        }
        s.memoizedState = n;
        var o = {
          value: n,
          getSnapshot: t,
        };
        return (
          (s.queue = o),
          $d(zd.bind(null, l, o, e), [e]),
          (l.flags |= 2048),
          nl(
            9,
            {
              destroy: void 0,
            },
            Dd.bind(null, l, o, n, t),
            null,
          ),
          n
        );
      },
      useId: function () {
        var e = ct(),
          t = ke.identifierPrefix;
        if (je) {
          var n = It,
            l = Wt;
          ((n = (l & ~(1 << (32 - St(l) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = hs++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_"));
        } else ((n = rb++), (t = "_" + t + "r_" + n.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: tc,
      useFormState: Vd,
      useActionState: Vd,
      useOptimistic: function (e) {
        var t = ct();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = nc.bind(null, me, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Zo,
      useCacheRefresh: function () {
        return (ct().memoizedState = mb.bind(null, me));
      },
      useEffectEvent: function (e) {
        var t = ct(),
          n = {
            impl: e,
          };
        return (
          (t.memoizedState = n),
          function () {
            if ((Ae & 2) !== 0) throw Error(c(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ac = {
      readContext: it,
      use: gs,
      useCallback: em,
      useContext: it,
      useEffect: Fo,
      useImperativeHandle: Id,
      useInsertionEffect: Pd,
      useLayoutEffect: Fd,
      useMemo: tm,
      useReducer: ys,
      useRef: Kd,
      useState: function () {
        return ys(gn);
      },
      useDebugValue: Wo,
      useDeferredValue: function (e, t) {
        var n = Ze();
        return nm(n, Me.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ys(gn)[0],
          t = Ze().memoizedState;
        return [typeof e == "boolean" ? e : ei(e), t];
      },
      useSyncExternalStore: _d,
      useId: sm,
      useHostTransitionStatus: tc,
      useFormState: Qd,
      useActionState: Qd,
      useOptimistic: function (e, t) {
        var n = Ze();
        return Ud(n, Me, e, t);
      },
      useMemoCache: Zo,
      useCacheRefresh: rm,
    };
  ac.useEffectEvent = Jd;
  var dm = {
    readContext: it,
    use: gs,
    useCallback: em,
    useContext: it,
    useEffect: Fo,
    useImperativeHandle: Id,
    useInsertionEffect: Pd,
    useLayoutEffect: Fd,
    useMemo: tm,
    useReducer: $o,
    useRef: Kd,
    useState: function () {
      return $o(gn);
    },
    useDebugValue: Wo,
    useDeferredValue: function (e, t) {
      var n = Ze();
      return Me === null ? Io(n, e, t) : nm(n, Me.memoizedState, e, t);
    },
    useTransition: function () {
      var e = $o(gn)[0],
        t = Ze().memoizedState;
      return [typeof e == "boolean" ? e : ei(e), t];
    },
    useSyncExternalStore: _d,
    useId: sm,
    useHostTransitionStatus: tc,
    useFormState: Zd,
    useActionState: Zd,
    useOptimistic: function (e, t) {
      var n = Ze();
      return Me !== null
        ? Ud(n, Me, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: Zo,
    useCacheRefresh: rm,
  };
  dm.useEffectEvent = Jd;

  function lc(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : v({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var ic = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Ot(),
        s = Hn(l);
      ((s.payload = t),
        n != null && (s.callback = n),
        (t = Bn(e, s, l)),
        t !== null && (vt(t, e, l), Pl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Ot(),
        s = Hn(l);
      ((s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = Bn(e, s, l)),
        t !== null && (vt(t, e, l), Pl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ot(),
        l = Hn(n);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Bn(e, l, n)),
        t !== null && (vt(t, e, n), Pl(t, e, n)));
    },
  };

  function mm(e, t, n, l, s, o, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, o, m)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Yl(n, l) || !Yl(s, o)
          : !0
    );
  }

  function hm(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && ic.enqueueReplaceState(t, t.state, null));
  }

  function ja(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t) l !== "ref" && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = v({}, n));
      for (var s in e) n[s] === void 0 && (n[s] = e[s]);
    }
    return n;
  }

  function pm(e) {
    Wi(e);
  }

  function gm(e) {
    console.error(e);
  }

  function ym(e) {
    Wi(e);
  }

  function ws(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, {
        componentStack: t.stack,
      });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }

  function xm(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }

  function sc(e, t, n) {
    return (
      (n = Hn(n)),
      (n.tag = 3),
      (n.payload = {
        element: null,
      }),
      (n.callback = function () {
        ws(e, t);
      }),
      n
    );
  }

  function vm(e) {
    return ((e = Hn(e)), (e.tag = 3), e);
  }

  function bm(e, t, n, l) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = l.value;
      ((e.payload = function () {
        return s(o);
      }),
        (e.callback = function () {
          xm(t, n, l);
        }));
    }
    var m = n.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (e.callback = function () {
        (xm(t, n, l),
          typeof s != "function" &&
            (Xn === null ? (Xn = new Set([this])) : Xn.add(this)));
        var x = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: x !== null ? x : "",
        });
      });
  }

  function pb(e, t, n, l, s) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && $a(t, n, s, !0),
        (n = Et.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              qt === null ? Ds() : n.alternate === null && Ge === 0 && (Ge = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              l === os
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  _c(e, l, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === os
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  _c(e, l, s)),
              !1
            );
        }
        throw Error(c(435, n.tag));
      }
      return (_c(e, l, s), Ds(), !1);
    }
    if (je)
      return (
        (t = Et.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = s),
            l !== Eo &&
              ((e = Error(c(422), {
                cause: l,
              })),
              Xl(Lt(e, n))))
          : (l !== Eo &&
              ((t = Error(c(423), {
                cause: l,
              })),
              Xl(Lt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (s &= -s),
            (e.lanes |= s),
            (l = Lt(l, n)),
            (s = sc(e.stateNode, l, s)),
            Lo(e, s),
            Ge !== 4 && (Ge = 2)),
        !1
      );
    var o = Error(c(520), {
      cause: l,
    });
    if (
      ((o = Lt(o, n)),
      ui === null ? (ui = [o]) : ui.push(o),
      Ge !== 4 && (Ge = 2),
      t === null)
    )
      return !0;
    ((l = Lt(l, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = s & -s),
            (n.lanes |= e),
            (e = sc(n.stateNode, l, e)),
            Lo(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (Xn === null || !Xn.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = vm(s)),
              bm(s, e, n, l),
              Lo(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var rc = Error(c(461)),
    Pe = !1;

  function st(e, t, n, l) {
    t.child = e === null ? jd(t, null, n, l) : Sa(t, e.child, n, l);
  }

  function wm(e, t, n, l, s) {
    n = n.render;
    var o = t.ref;
    if ("ref" in l) {
      var m = {};
      for (var x in l) x !== "ref" && (m[x] = l[x]);
    } else m = l;
    return (
      xa(t),
      (l = Yo(e, t, n, m, o, s)),
      (x = Vo()),
      e !== null && !Pe
        ? (Qo(e, t, s), yn(e, t, s))
        : (je && x && No(t), (t.flags |= 1), st(e, t, l, s), t.child)
    );
  }

  function Sm(e, t, n, l, s) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !bo(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = o), Nm(e, t, o, l, s))
        : ((e = ns(n.type, null, l, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !pc(e, s))) {
      var m = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Yl), n(m, l) && e.ref === t.ref)
      )
        return yn(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = fn(o, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }

  function Nm(e, t, n, l, s) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Yl(o, l) && e.ref === t.ref)
        if (((Pe = !1), (t.pendingProps = l = o), pc(e, s)))
          (e.flags & 131072) !== 0 && (Pe = !0);
        else return ((t.lanes = e.lanes), yn(e, t, s));
    }
    return oc(e, t, n, l, s);
  }

  function jm(e, t, n, l) {
    var s = l.children,
      o = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | n : n), e !== null)) {
          for (l = t.child = e.child, s = 0; l !== null; )
            ((s = s | l.lanes | l.childLanes), (l = l.sibling));
          l = s & ~o;
        } else ((l = 0), (t.child = null));
        return Em(e, t, o, n, l);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
        }),
          e !== null && ss(t, o !== null ? o.cachePool : null),
          o !== null ? Cd(t, o) : Ho(),
          Ad(t));
      else
        return (
          (l = t.lanes = 536870912),
          Em(e, t, o !== null ? o.baseLanes | n : n, n, l)
        );
    } else
      o !== null
        ? (ss(t, o.cachePool), Cd(t, o), Gn(), (t.memoizedState = null))
        : (e !== null && ss(t, null), Ho(), Gn());
    return (st(e, t, s, n), t.child);
  }

  function ai(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }

  function Em(e, t, n, l, s) {
    var o = Mo();
    return (
      (o =
        o === null
          ? null
          : {
              parent: $e._currentValue,
              pool: o,
            }),
      (t.memoizedState = {
        baseLanes: n,
        cachePool: o,
      }),
      e !== null && ss(t, null),
      Ho(),
      Ad(t),
      e !== null && $a(e, t, l, !0),
      (t.childLanes = s),
      null
    );
  }

  function Ss(e, t) {
    return (
      (t = js(
        {
          mode: t.mode,
          children: t.children,
        },
        e.mode,
      )),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }

  function Tm(e, t, n) {
    return (
      Sa(t, e.child, null, n),
      (e = Ss(t, t.pendingProps)),
      (e.flags |= 2),
      Tt(t),
      (t.memoizedState = null),
      e
    );
  }

  function gb(e, t, n) {
    var l = t.pendingProps,
      s = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (je) {
        if (l.mode === "hidden")
          return ((e = Ss(t, l)), (t.lanes = 536870912), ai(null, e));
        if (
          (qo(t),
          (e = Le)
            ? ((e = Hh(e, Bt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext:
                    Dn !== null
                      ? {
                          id: Wt,
                          overflow: It,
                        }
                      : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = cd(e)),
                (n.return = t),
                (t.child = n),
                (lt = t),
                (Le = null)))
            : (e = null),
          e === null)
        )
          throw kn(t);
        return ((t.lanes = 536870912), null);
      }
      return Ss(t, l);
    }
    var o = e.memoizedState;
    if (o !== null) {
      var m = o.dehydrated;
      if ((qo(t), s))
        if (t.flags & 256) ((t.flags &= -257), (t = Tm(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(c(558));
      else if (
        (Pe || $a(e, t, n, !1), (s = (n & e.childLanes) !== 0), Pe || s)
      ) {
        if (
          ((l = ke),
          l !== null && ((m = gf(l, n)), m !== 0 && m !== o.retryLane))
        )
          throw ((o.retryLane = m), ha(e, m), vt(l, e, m), rc);
        (Ds(), (t = Tm(e, t, n)));
      } else
        ((e = o.treeContext),
          (Le = Gt(m.nextSibling)),
          (lt = t),
          (je = !0),
          (zn = null),
          (Bt = !1),
          e !== null && dd(t, e),
          (t = Ss(t, l)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = fn(e.child, {
        mode: l.mode,
        children: l.children,
      })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }

  function Ns(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }

  function oc(e, t, n, l, s) {
    return (
      xa(t),
      (n = Yo(e, t, n, l, void 0, s)),
      (l = Vo()),
      e !== null && !Pe
        ? (Qo(e, t, s), yn(e, t, s))
        : (je && l && No(t), (t.flags |= 1), st(e, t, n, s), t.child)
    );
  }

  function Cm(e, t, n, l, s, o) {
    return (
      xa(t),
      (t.updateQueue = null),
      (n = Rd(t, l, n, s)),
      Od(e),
      (l = Vo()),
      e !== null && !Pe
        ? (Qo(e, t, o), yn(e, t, o))
        : (je && l && No(t), (t.flags |= 1), st(e, t, n, o), t.child)
    );
  }

  function Am(e, t, n, l, s) {
    if ((xa(t), t.stateNode === null)) {
      var o = Qa,
        m = n.contextType;
      (typeof m == "object" && m !== null && (o = it(m)),
        (o = new n(l, o)),
        (t.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = ic),
        (t.stateNode = o),
        (o._reactInternals = t),
        (o = t.stateNode),
        (o.props = l),
        (o.state = t.memoizedState),
        (o.refs = {}),
        zo(t),
        (m = n.contextType),
        (o.context = typeof m == "object" && m !== null ? it(m) : Qa),
        (o.state = t.memoizedState),
        (m = n.getDerivedStateFromProps),
        typeof m == "function" && (lc(t, n, m, l), (o.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((m = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          m !== o.state && ic.enqueueReplaceState(o, o.state, null),
          Wl(t, l, o, s),
          Fl(),
          (o.state = t.memoizedState)),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      o = t.stateNode;
      var x = t.memoizedProps,
        S = ja(n, x);
      o.props = S;
      var M = o.context,
        B = n.contextType;
      ((m = Qa), typeof B == "object" && B !== null && (m = it(B)));
      var Y = n.getDerivedStateFromProps;
      ((B =
        typeof Y == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (x = t.pendingProps !== x),
        B ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((x || M !== m) && hm(t, o, l, m)),
        (Un = !1));
      var z = t.memoizedState;
      ((o.state = z),
        Wl(t, l, o, s),
        Fl(),
        (M = t.memoizedState),
        x || z !== M || Un
          ? (typeof Y == "function" && (lc(t, n, Y, l), (M = t.memoizedState)),
            (S = Un || mm(t, n, S, l, z, M, m))
              ? (B ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = M)),
            (o.props = l),
            (o.state = M),
            (o.context = m),
            (l = S))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((o = t.stateNode),
        ko(e, t),
        (m = t.memoizedProps),
        (B = ja(n, m)),
        (o.props = B),
        (Y = t.pendingProps),
        (z = o.context),
        (M = n.contextType),
        (S = Qa),
        typeof M == "object" && M !== null && (S = it(M)),
        (x = n.getDerivedStateFromProps),
        (M =
          typeof x == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((m !== Y || z !== S) && hm(t, o, l, S)),
        (Un = !1),
        (z = t.memoizedState),
        (o.state = z),
        Wl(t, l, o, s),
        Fl());
      var k = t.memoizedState;
      m !== Y ||
      z !== k ||
      Un ||
      (e !== null && e.dependencies !== null && ls(e.dependencies))
        ? (typeof x == "function" && (lc(t, n, x, l), (k = t.memoizedState)),
          (B =
            Un ||
            mm(t, n, B, l, z, k, S) ||
            (e !== null && e.dependencies !== null && ls(e.dependencies)))
            ? (M ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(l, k, S),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(l, k, S)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (m === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = k)),
          (o.props = l),
          (o.state = k),
          (o.context = S),
          (l = B))
        : (typeof o.componentDidUpdate != "function" ||
            (m === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (o = l),
      Ns(e, t),
      (l = (t.flags & 128) !== 0),
      o || l
        ? ((o = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = Sa(t, e.child, null, s)),
              (t.child = Sa(t, null, n, s)))
            : st(e, t, n, s),
          (t.memoizedState = o.state),
          (e = t.child))
        : (e = yn(e, t, s)),
      e
    );
  }

  function Om(e, t, n, l) {
    return (ga(), (t.flags |= 256), st(e, t, n, l), t.child);
  }
  var cc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };

  function uc(e) {
    return {
      baseLanes: e,
      cachePool: xd(),
    };
  }

  function fc(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= At), e);
  }

  function Rm(e, t, n) {
    var l = t.pendingProps,
      s = !1,
      o = (t.flags & 128) !== 0,
      m;
    if (
      ((m = o) ||
        (m =
          e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0),
      m && ((s = !0), (t.flags &= -129)),
      (m = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (je) {
        if (
          (s ? qn(t) : Gn(),
          (e = Le)
            ? ((e = Hh(e, Bt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext:
                    Dn !== null
                      ? {
                          id: Wt,
                          overflow: It,
                        }
                      : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = cd(e)),
                (n.return = t),
                (t.child = n),
                (lt = t),
                (Le = null)))
            : (e = null),
          e === null)
        )
          throw kn(t);
        return (Kc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var x = l.children;
      return (
        (l = l.fallback),
        s
          ? (Gn(),
            (s = t.mode),
            (x = js(
              {
                mode: "hidden",
                children: x,
              },
              s,
            )),
            (l = pa(l, s, n, null)),
            (x.return = t),
            (l.return = t),
            (x.sibling = l),
            (t.child = x),
            (l = t.child),
            (l.memoizedState = uc(n)),
            (l.childLanes = fc(e, m, n)),
            (t.memoizedState = cc),
            ai(null, l))
          : (qn(t), dc(t, x))
      );
    }
    var S = e.memoizedState;
    if (S !== null && ((x = S.dehydrated), x !== null)) {
      if (o)
        t.flags & 256
          ? (qn(t), (t.flags &= -257), (t = mc(e, t, n)))
          : t.memoizedState !== null
            ? (Gn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Gn(),
              (x = l.fallback),
              (s = t.mode),
              (l = js(
                {
                  mode: "visible",
                  children: l.children,
                },
                s,
              )),
              (x = pa(x, s, n, null)),
              (x.flags |= 2),
              (l.return = t),
              (x.return = t),
              (l.sibling = x),
              (t.child = l),
              Sa(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = uc(n)),
              (l.childLanes = fc(e, m, n)),
              (t.memoizedState = cc),
              (t = ai(null, l)));
      else if ((qn(t), Kc(x))) {
        if (((m = x.nextSibling && x.nextSibling.dataset), m)) var M = m.dgst;
        ((m = M),
          (l = Error(c(419))),
          (l.stack = ""),
          (l.digest = m),
          Xl({
            value: l,
            source: null,
            stack: null,
          }),
          (t = mc(e, t, n)));
      } else if (
        (Pe || $a(e, t, n, !1), (m = (n & e.childLanes) !== 0), Pe || m)
      ) {
        if (
          ((m = ke),
          m !== null && ((l = gf(m, n)), l !== 0 && l !== S.retryLane))
        )
          throw ((S.retryLane = l), ha(e, l), vt(m, e, l), rc);
        (Zc(x) || Ds(), (t = mc(e, t, n)));
      } else
        Zc(x)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = S.treeContext),
            (Le = Gt(x.nextSibling)),
            (lt = t),
            (je = !0),
            (zn = null),
            (Bt = !1),
            e !== null && dd(t, e),
            (t = dc(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return s
      ? (Gn(),
        (x = l.fallback),
        (s = t.mode),
        (S = e.child),
        (M = S.sibling),
        (l = fn(S, {
          mode: "hidden",
          children: l.children,
        })),
        (l.subtreeFlags = S.subtreeFlags & 65011712),
        M !== null ? (x = fn(M, x)) : ((x = pa(x, s, n, null)), (x.flags |= 2)),
        (x.return = t),
        (l.return = t),
        (l.sibling = x),
        (t.child = l),
        ai(null, l),
        (l = t.child),
        (x = e.child.memoizedState),
        x === null
          ? (x = uc(n))
          : ((s = x.cachePool),
            s !== null
              ? ((S = $e._currentValue),
                (s =
                  s.parent !== S
                    ? {
                        parent: S,
                        pool: S,
                      }
                    : s))
              : (s = xd()),
            (x = {
              baseLanes: x.baseLanes | n,
              cachePool: s,
            })),
        (l.memoizedState = x),
        (l.childLanes = fc(e, m, n)),
        (t.memoizedState = cc),
        ai(e.child, l))
      : (qn(t),
        (n = e.child),
        (e = n.sibling),
        (n = fn(n, {
          mode: "visible",
          children: l.children,
        })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((m = t.deletions),
          m === null ? ((t.deletions = [e]), (t.flags |= 16)) : m.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }

  function dc(e, t) {
    return (
      (t = js(
        {
          mode: "visible",
          children: t,
        },
        e.mode,
      )),
      (t.return = e),
      (e.child = t)
    );
  }

  function js(e, t) {
    return ((e = jt(22, e, null, t)), (e.lanes = 0), e);
  }

  function mc(e, t, n) {
    return (
      Sa(t, e.child, null, n),
      (e = dc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }

  function _m(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Ao(e.return, t, n));
  }

  function hc(e, t, n, l, s, o) {
    var m = e.memoizedState;
    m === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: s,
          treeForkCount: o,
        })
      : ((m.isBackwards = t),
        (m.rendering = null),
        (m.renderingStartTime = 0),
        (m.last = l),
        (m.tail = n),
        (m.tailMode = s),
        (m.treeForkCount = o));
  }

  function Mm(e, t, n) {
    var l = t.pendingProps,
      s = l.revealOrder,
      o = l.tail;
    l = l.children;
    var m = Xe.current,
      x = (m & 2) !== 0;
    if (
      (x ? ((m = (m & 1) | 2), (t.flags |= 128)) : (m &= 1),
      K(Xe, m),
      st(e, t, l, n),
      (l = je ? Ql : 0),
      !x && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _m(e, n, t);
        else if (e.tag === 19) _m(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && ds(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          hc(t, !1, s, n, o, l));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && ds(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        hc(t, !0, n, null, o, l);
        break;
      case "together":
        hc(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }

  function yn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Qn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if (($a(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = fn(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }

  function pc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ls(e)));
  }

  function yb(e, t, n) {
    switch (t.tag) {
      case 3:
        (Qe(t, t.stateNode.containerInfo),
          Ln(t, $e, e.memoizedState.cache),
          ga());
        break;
      case 27:
      case 5:
        Mt(t);
        break;
      case 4:
        Qe(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ln(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), qo(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (qn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Rm(e, t, n)
              : (qn(t), (e = yn(e, t, n)), e !== null ? e.sibling : null);
        qn(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || ($a(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          s)
        ) {
          if (l) return Mm(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          K(Xe, Xe.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), jm(e, t, n, t.pendingProps));
      case 24:
        Ln(t, $e, e.memoizedState.cache);
    }
    return yn(e, t, n);
  }

  function Dm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Pe = !0;
      else {
        if (!pc(e, n) && (t.flags & 128) === 0) return ((Pe = !1), yb(e, t, n));
        Pe = (e.flags & 131072) !== 0;
      }
    else ((Pe = !1), je && (t.flags & 1048576) !== 0 && fd(t, Ql, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = ba(t.elementType)), (t.type = e), typeof e == "function"))
            bo(e)
              ? ((l = ja(e, l)), (t.tag = 1), (t = Am(null, t, e, l, n)))
              : ((t.tag = 0), (t = oc(null, t, e, l, n)));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === Z) {
                ((t.tag = 11), (t = wm(null, t, e, l, n)));
                break e;
              } else if (s === X) {
                ((t.tag = 14), (t = Sm(null, t, e, l, n)));
                break e;
              }
            }
            throw ((t = W(e) || e), Error(c(306, t, "")));
          }
        }
        return t;
      case 0:
        return oc(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (s = ja(l, t.pendingProps)), Am(e, t, l, s, n));
      case 3:
        e: {
          if ((Qe(t, t.stateNode.containerInfo), e === null))
            throw Error(c(387));
          l = t.pendingProps;
          var o = t.memoizedState;
          ((s = o.element), ko(e, t), Wl(t, l, null, n));
          var m = t.memoizedState;
          if (
            ((l = m.cache),
            Ln(t, $e, l),
            l !== o.cache && Oo(t, [$e], n, !0),
            Fl(),
            (l = m.element),
            o.isDehydrated)
          )
            if (
              ((o = {
                element: l,
                isDehydrated: !1,
                cache: m.cache,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              t = Om(e, t, l, n);
              break e;
            } else if (l !== s) {
              ((s = Lt(Error(c(424)), t)), Xl(s), (t = Om(e, t, l, n)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  Le = Gt(e.firstChild),
                  lt = t,
                  je = !0,
                  zn = null,
                  Bt = !0,
                  n = jd(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((ga(), l === s)) {
              t = yn(e, t, n);
              break e;
            }
            st(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Ns(e, t),
          e === null
            ? (n = Qh(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : je ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = qs(de.current).createElement(n)),
                (l[at] = t),
                (l[mt] = e),
                rt(l, n, e),
                tt(l),
                (t.stateNode = l))
            : (t.memoizedState = Qh(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Mt(t),
          e === null &&
            je &&
            ((l = t.stateNode = Gh(t.type, t.pendingProps, de.current)),
            (lt = t),
            (Bt = !0),
            (s = Le),
            Jn(t.type) ? (($c = s), (Le = Gt(l.firstChild))) : (Le = s)),
          st(e, t, t.pendingProps.children, n),
          Ns(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            je &&
            ((s = l = Le) &&
              ((l = Kb(l, t.type, t.pendingProps, Bt)),
              l !== null
                ? ((t.stateNode = l),
                  (lt = t),
                  (Le = Gt(l.firstChild)),
                  (Bt = !1),
                  (s = !0))
                : (s = !1)),
            s || kn(t)),
          Mt(t),
          (s = t.type),
          (o = t.pendingProps),
          (m = e !== null ? e.memoizedProps : null),
          (l = o.children),
          Vc(s, o) ? (l = null) : m !== null && Vc(s, m) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((s = Yo(e, t, ob, null, null, n)), (xi._currentValue = s)),
          Ns(e, t),
          st(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            je &&
            ((e = n = Le) &&
              ((n = $b(n, t.pendingProps, Bt)),
              n !== null
                ? ((t.stateNode = n), (lt = t), (Le = null), (e = !0))
                : (e = !1)),
            e || kn(t)),
          null
        );
      case 13:
        return Rm(e, t, n);
      case 4:
        return (
          Qe(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Sa(t, null, l, n)) : st(e, t, l, n),
          t.child
        );
      case 11:
        return wm(e, t, t.type, t.pendingProps, n);
      case 7:
        return (st(e, t, t.pendingProps, n), t.child);
      case 8:
        return (st(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (st(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (l = t.pendingProps),
          Ln(t, t.type, l.value),
          st(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (s = t.type._context),
          (l = t.pendingProps.children),
          xa(t),
          (s = it(s)),
          (l = l(s)),
          (t.flags |= 1),
          st(e, t, l, n),
          t.child
        );
      case 14:
        return Sm(e, t, t.type, t.pendingProps, n);
      case 15:
        return Nm(e, t, t.type, t.pendingProps, n);
      case 19:
        return Mm(e, t, n);
      case 31:
        return gb(e, t, n);
      case 22:
        return jm(e, t, n, t.pendingProps);
      case 24:
        return (
          xa(t),
          (l = it($e)),
          e === null
            ? ((s = Mo()),
              s === null &&
                ((s = ke),
                (o = Ro()),
                (s.pooledCache = o),
                o.refCount++,
                o !== null && (s.pooledCacheLanes |= n),
                (s = o)),
              (t.memoizedState = {
                parent: l,
                cache: s,
              }),
              zo(t),
              Ln(t, $e, s))
            : ((e.lanes & n) !== 0 && (ko(e, t), Wl(t, null, null, n), Fl()),
              (s = e.memoizedState),
              (o = t.memoizedState),
              s.parent !== l
                ? ((s = {
                    parent: l,
                    cache: l,
                  }),
                  (t.memoizedState = s),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = s),
                  Ln(t, $e, l))
                : ((l = o.cache),
                  Ln(t, $e, l),
                  l !== s.cache && Oo(t, [$e], n, !0))),
          st(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }

  function xn(e) {
    e.flags |= 4;
  }

  function gc(e, t, n, l, s) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (s & 335544128) === s))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (sh()) e.flags |= 8192;
        else throw ((wa = os), Do);
    } else e.flags &= -16777217;
  }

  function zm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Jh(t)))
      if (sh()) e.flags |= 8192;
      else throw ((wa = os), Do);
  }

  function Es(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? mf() : 536870912), (e.lanes |= t), (sl |= t)));
  }

  function li(e, t) {
    if (!je)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }

  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var s = e.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags & 65011712),
          (l |= s.flags & 65011712),
          (s.return = e),
          (s = s.sibling));
    else
      for (s = e.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags),
          (l |= s.flags),
          (s.return = e),
          (s = s.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = n), t);
  }

  function xb(e, t, n) {
    var l = t.pendingProps;
    switch ((jo(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ue(t), null);
      case 1:
        return (Ue(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          hn($e),
          _e(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ka(t)
              ? xn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), To())),
          Ue(t),
          null
        );
      case 26:
        var s = t.type,
          o = t.memoizedState;
        return (
          e === null
            ? (xn(t),
              o !== null ? (Ue(t), zm(t, o)) : (Ue(t), gc(t, s, null, l, n)))
            : o
              ? o !== e.memoizedState
                ? (xn(t), Ue(t), zm(t, o))
                : (Ue(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== l && xn(t),
                Ue(t),
                gc(t, s, e, l, n)),
          null
        );
      case 27:
        if (
          (Pt(t),
          (n = de.current),
          (s = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && xn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return (Ue(t), null);
          }
          ((e = P.current),
            Ka(t) ? md(t) : ((e = Gh(s, l, n)), (t.stateNode = e), xn(t)));
        }
        return (Ue(t), null);
      case 5:
        if ((Pt(t), (s = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && xn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return (Ue(t), null);
          }
          if (((o = P.current), Ka(t))) md(t);
          else {
            var m = qs(de.current);
            switch (o) {
              case 1:
                o = m.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                o = m.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    o = m.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    o = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    ((o = m.createElement("div")),
                      (o.innerHTML = "<script><\/script>"),
                      (o = o.removeChild(o.firstChild)));
                    break;
                  case "select":
                    ((o =
                      typeof l.is == "string"
                        ? m.createElement("select", {
                            is: l.is,
                          })
                        : m.createElement("select")),
                      l.multiple
                        ? (o.multiple = !0)
                        : l.size && (o.size = l.size));
                    break;
                  default:
                    o =
                      typeof l.is == "string"
                        ? m.createElement(s, {
                            is: l.is,
                          })
                        : m.createElement(s);
                }
            }
            ((o[at] = t), (o[mt] = l));
            e: for (m = t.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6) o.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                ((m.child.return = m), (m = m.child));
                continue;
              }
              if (m === t) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === t) break e;
                m = m.return;
              }
              ((m.sibling.return = m.return), (m = m.sibling));
            }
            t.stateNode = o;
            e: switch ((rt(o, s, l), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && xn(t);
          }
        }
        return (
          Ue(t),
          gc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && xn(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(c(166));
          if (((e = de.current), Ka(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (s = lt),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  l = s.memoizedProps;
              }
            ((e[at] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Rh(e.nodeValue, n)
              )),
              e || kn(t, !0));
          } else
            ((e = qs(e).createTextNode(l)), (e[at] = t), (t.stateNode = e));
        }
        return (Ue(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = Ka(t)), n !== null)) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(c(557));
              e[at] = t;
            } else
              (ga(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ue(t), (e = !1));
          } else
            ((n = To()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
          if ((t.flags & 128) !== 0) throw Error(c(558));
        }
        return (Ue(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((s = Ka(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(c(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(c(317));
              s[at] = t;
            } else
              (ga(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ue(t), (s = !1));
          } else
            ((s = To()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
        }
        return (
          Tt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = l !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((l = t.child),
                (s = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (s = l.alternate.memoizedState.cachePool.pool),
                (o = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (o = l.memoizedState.cachePool.pool),
                o !== s && (l.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              Es(t, t.updateQueue),
              Ue(t),
              null)
        );
      case 4:
        return (_e(), e === null && Hc(t.stateNode.containerInfo), Ue(t), null);
      case 10:
        return (hn(t.type), Ue(t), null);
      case 19:
        if ((q(Xe), (l = t.memoizedState), l === null)) return (Ue(t), null);
        if (((s = (t.flags & 128) !== 0), (o = l.rendering), o === null))
          if (s) li(l, !1);
          else {
            if (Ge !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = ds(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      li(l, !1),
                      e = o.updateQueue,
                      t.updateQueue = e,
                      Es(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (od(n, e), (n = n.sibling));
                  return (
                    K(Xe, (Xe.current & 1) | 2),
                    je && dn(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              bt() > Rs &&
              ((t.flags |= 128), (s = !0), li(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = ds(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Es(t, e),
                li(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !o.alternate &&
                  !je)
              )
                return (Ue(t), null);
            } else
              2 * bt() - l.renderingStartTime > Rs &&
                n !== 536870912 &&
                ((t.flags |= 128), (s = !0), li(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((e = l.last),
              e !== null ? (e.sibling = o) : (t.child = o),
              (l.last = o));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = bt()),
            (e.sibling = null),
            (n = Xe.current),
            K(Xe, s ? (n & 1) | 2 : n & 1),
            je && dn(t, l.treeForkCount),
            e)
          : (Ue(t), null);
      case 22:
      case 23:
        return (
          Tt(t),
          Bo(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ue(t),
          (n = t.updateQueue),
          n !== null && Es(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && q(va),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          hn($e),
          Ue(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }

  function vb(e, t) {
    switch ((jo(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          hn($e),
          _e(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Pt(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Tt(t), t.alternate === null)) throw Error(c(340));
          ga();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Tt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          ga();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (q(Xe), null);
      case 4:
        return (_e(), null);
      case 10:
        return (hn(t.type), null);
      case 22:
      case 23:
        return (
          Tt(t),
          Bo(),
          e !== null && q(va),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (hn($e), null);
      case 25:
        return null;
      default:
        return null;
    }
  }

  function km(e, t) {
    switch ((jo(t), t.tag)) {
      case 3:
        (hn($e), _e());
        break;
      case 26:
      case 27:
      case 5:
        Pt(t);
        break;
      case 4:
        _e();
        break;
      case 31:
        t.memoizedState !== null && Tt(t);
        break;
      case 13:
        Tt(t);
        break;
      case 19:
        q(Xe);
        break;
      case 10:
        hn(t.type);
        break;
      case 22:
      case 23:
        (Tt(t), Bo(), e !== null && q(va));
        break;
      case 24:
        hn($e);
    }
  }

  function ii(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var s = l.next;
        n = s;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var o = n.create,
              m = n.inst;
            ((l = o()), (m.destroy = l));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (x) {
      Re(t, t.return, x);
    }
  }

  function Yn(e, t, n) {
    try {
      var l = t.updateQueue,
        s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var o = s.next;
        l = o;
        do {
          if ((l.tag & e) === e) {
            var m = l.inst,
              x = m.destroy;
            if (x !== void 0) {
              ((m.destroy = void 0), (s = t));
              var S = n,
                M = x;
              try {
                M();
              } catch (B) {
                Re(s, S, B);
              }
            }
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (B) {
      Re(t, t.return, B);
    }
  }

  function Lm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Td(t, n);
      } catch (l) {
        Re(e, e.return, l);
      }
    }
  }

  function Um(e, t, n) {
    ((n.props = ja(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      Re(e, t, l);
    }
  }

  function si(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (s) {
      Re(e, t, s);
    }
  }

  function en(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (s) {
          Re(e, t, s);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Re(e, t, s);
        }
      else n.current = null;
  }

  function Hm(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (s) {
      Re(e, e.return, s);
    }
  }

  function yc(e, t, n) {
    try {
      var l = e.stateNode;
      (Gb(l, e.type, n, t), (l[mt] = t));
    } catch (s) {
      Re(e, e.return, s);
    }
  }

  function Bm(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Jn(e.type)) ||
      e.tag === 4
    );
  }

  function xc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Jn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }

  function vc(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = cn)));
    else if (
      l !== 4 &&
      (l === 27 && Jn(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (vc(e, t, n), e = e.sibling; e !== null; )
        (vc(e, t, n), (e = e.sibling));
  }

  function Ts(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && Jn(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (Ts(e, t, n), e = e.sibling; e !== null; )
        (Ts(e, t, n), (e = e.sibling));
  }

  function qm(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      (rt(t, l, n), (t[at] = e), (t[mt] = n));
    } catch (o) {
      Re(e, e.return, o);
    }
  }
  var vn = !1,
    Fe = !1,
    bc = !1,
    Gm = typeof WeakSet == "function" ? WeakSet : Set,
    nt = null;

  function bb(e, t) {
    if (((e = e.containerInfo), (Gc = Ks), (e = If(e)), mo(e))) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd,
        };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var s = l.anchorOffset,
              o = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break e;
            }
            var m = 0,
              x = -1,
              S = -1,
              M = 0,
              B = 0,
              Y = e,
              z = null;
            t: for (;;) {
              for (
                var k;
                Y !== n || (s !== 0 && Y.nodeType !== 3) || (x = m + s),
                  Y !== o || (l !== 0 && Y.nodeType !== 3) || (S = m + l),
                  Y.nodeType === 3 && (m += Y.nodeValue.length),
                  (k = Y.firstChild) !== null;
              )
                ((z = Y), (Y = k));
              for (;;) {
                if (Y === e) break t;
                if (
                  (z === n && ++M === s && (x = m),
                  z === o && ++B === l && (S = m),
                  (k = Y.nextSibling) !== null)
                )
                  break;
                ((Y = z), (z = Y.parentNode));
              }
              Y = k;
            }
            n =
              x === -1 || S === -1
                ? null
                : {
                    start: x,
                    end: S,
                  };
          } else n = null;
        }
      n = n || {
        start: 0,
        end: 0,
      };
    } else n = null;
    for (
      Yc = {
        focusedElem: e,
        selectionRange: n,
      },
        Ks = !1,
        nt = t;
      nt !== null;
    )
      if (
        ((t = nt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (nt = e));
      else
        for (; nt !== null; ) {
          switch (((t = nt), (o = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  ((s = e[n]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && o !== null) {
                ((e = void 0),
                  (n = t),
                  (s = o.memoizedProps),
                  (o = o.memoizedState),
                  (l = n.stateNode));
                try {
                  var I = ja(n.type, s);
                  ((e = l.getSnapshotBeforeUpdate(I, o)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (se) {
                  Re(n, n.return, se);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  Xc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (nt = e));
            break;
          }
          nt = t.return;
        }
  }

  function Ym(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (wn(e, n), l & 4 && ii(5, n));
        break;
      case 1:
        if ((wn(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (m) {
              Re(n, n.return, m);
            }
          else {
            var s = ja(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              Re(n, n.return, m);
            }
          }
        (l & 64 && Lm(n), l & 512 && si(n, n.return));
        break;
      case 3:
        if ((wn(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Td(e, t);
          } catch (m) {
            Re(n, n.return, m);
          }
        }
        break;
      case 27:
        t === null && l & 4 && qm(n);
      case 26:
      case 5:
        (wn(e, n), t === null && l & 4 && Hm(n), l & 512 && si(n, n.return));
        break;
      case 12:
        wn(e, n);
        break;
      case 31:
        (wn(e, n), l & 4 && Xm(e, n));
        break;
      case 13:
        (wn(e, n),
          l & 4 && Zm(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = Ob.bind(null, n)), Jb(e, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || vn), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || Fe), (s = vn));
          var o = Fe;
          ((vn = l),
            (Fe = t) && !o ? Sn(e, n, (n.subtreeFlags & 8772) !== 0) : wn(e, n),
            (vn = s),
            (Fe = o));
        }
        break;
      case 30:
        break;
      default:
        wn(e, n);
    }
  }

  function Vm(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Vm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Jr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var He = null,
    pt = !1;

  function bn(e, t, n) {
    for (n = n.child; n !== null; ) (Qm(e, t, n), (n = n.sibling));
  }

  function Qm(e, t, n) {
    if (wt && typeof wt.onCommitFiberUnmount == "function")
      try {
        wt.onCommitFiberUnmount(Rl, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Fe || en(n, t),
          bn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Fe || en(n, t);
        var l = He,
          s = pt;
        (Jn(n.type) && ((He = n.stateNode), (pt = !1)),
          bn(e, t, n),
          pi(n.stateNode),
          (He = l),
          (pt = s));
        break;
      case 5:
        Fe || en(n, t);
      case 6:
        if (
          ((l = He),
          (s = pt),
          (He = null),
          bn(e, t, n),
          (He = l),
          (pt = s),
          He !== null)
        )
          if (pt)
            try {
              (He.nodeType === 9
                ? He.body
                : He.nodeName === "HTML"
                  ? He.ownerDocument.body
                  : He
              ).removeChild(n.stateNode);
            } catch (o) {
              Re(n, t, o);
            }
          else
            try {
              He.removeChild(n.stateNode);
            } catch (o) {
              Re(n, t, o);
            }
        break;
      case 18:
        He !== null &&
          (pt
            ? ((e = He),
              Lh(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode,
              ),
              hl(e))
            : Lh(He, n.stateNode));
        break;
      case 4:
        ((l = He),
          (s = pt),
          (He = n.stateNode.containerInfo),
          (pt = !0),
          bn(e, t, n),
          (He = l),
          (pt = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Yn(2, n, t), Fe || Yn(4, n, t), bn(e, t, n));
        break;
      case 1:
        (Fe ||
          (en(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && Um(n, t, l)),
          bn(e, t, n));
        break;
      case 21:
        bn(e, t, n);
        break;
      case 22:
        ((Fe = (l = Fe) || n.memoizedState !== null), bn(e, t, n), (Fe = l));
        break;
      default:
        bn(e, t, n);
    }
  }

  function Xm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        hl(e);
      } catch (n) {
        Re(t, t.return, n);
      }
    }
  }

  function Zm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        hl(e);
      } catch (n) {
        Re(t, t.return, n);
      }
  }

  function wb(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Gm()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Gm()),
          t
        );
      default:
        throw Error(c(435, e.tag));
    }
  }

  function Cs(e, t) {
    var n = wb(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var s = Rb.bind(null, e, l);
        l.then(s, s);
      }
    });
  }

  function gt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var s = n[l],
          o = e,
          m = t,
          x = m;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (Jn(x.type)) {
                ((He = x.stateNode), (pt = !1));
                break e;
              }
              break;
            case 5:
              ((He = x.stateNode), (pt = !1));
              break e;
            case 3:
            case 4:
              ((He = x.stateNode.containerInfo), (pt = !0));
              break e;
          }
          x = x.return;
        }
        if (He === null) throw Error(c(160));
        (Qm(o, m, s),
          (He = null),
          (pt = !1),
          (o = s.alternate),
          o !== null && (o.return = null),
          (s.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Km(t, e), (t = t.sibling));
  }
  var Qt = null;

  function Km(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (gt(t, e),
          yt(e),
          l & 4 && (Yn(3, e, e.return), ii(3, e), Yn(5, e, e.return)));
        break;
      case 1:
        (gt(t, e),
          yt(e),
          l & 512 && (Fe || n === null || en(n, n.return)),
          l & 64 &&
            vn &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var s = Qt;
        if (
          (gt(t, e),
          yt(e),
          l & 512 && (Fe || n === null || en(n, n.return)),
          l & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type),
                    (n = e.memoizedProps),
                    (s = s.ownerDocument || s));
                  t: switch (l) {
                    case "title":
                      ((o = s.getElementsByTagName("title")[0]),
                        (!o ||
                          o[Dl] ||
                          o[at] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = s.createElement(l)),
                          s.head.insertBefore(
                            o,
                            s.querySelector("head > title"),
                          )),
                        rt(o, l, n),
                        (o[at] = e),
                        tt(o),
                        (l = o));
                      break e;
                    case "link":
                      var m = Kh("link", "href", s).get(l + (n.href || ""));
                      if (m) {
                        for (var x = 0; x < m.length; x++)
                          if (
                            ((o = m[x]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            m.splice(x, 1);
                            break t;
                          }
                      }
                      ((o = s.createElement(l)),
                        rt(o, l, n),
                        s.head.appendChild(o));
                      break;
                    case "meta":
                      if (
                        (m = Kh("meta", "content", s).get(
                          l + (n.content || ""),
                        ))
                      ) {
                        for (x = 0; x < m.length; x++)
                          if (
                            ((o = m[x]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            m.splice(x, 1);
                            break t;
                          }
                      }
                      ((o = s.createElement(l)),
                        rt(o, l, n),
                        s.head.appendChild(o));
                      break;
                    default:
                      throw Error(c(468, l));
                  }
                  ((o[at] = e), tt(o), (l = o));
                }
                e.stateNode = l;
              } else $h(s, e.type, e.stateNode);
            else e.stateNode = Zh(s, l, e.memoizedProps);
          else
            o !== l
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                l === null
                  ? $h(s, e.type, e.stateNode)
                  : Zh(s, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                yc(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (gt(t, e),
          yt(e),
          l & 512 && (Fe || n === null || en(n, n.return)),
          n !== null && l & 4 && yc(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (gt(t, e),
          yt(e),
          l & 512 && (Fe || n === null || en(n, n.return)),
          e.flags & 32)
        ) {
          s = e.stateNode;
          try {
            Ua(s, "");
          } catch (I) {
            Re(e, e.return, I);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((s = e.memoizedProps), yc(e, s, n !== null ? n.memoizedProps : s)),
          l & 1024 && (bc = !0));
        break;
      case 6:
        if ((gt(t, e), yt(e), l & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          ((l = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = l;
          } catch (I) {
            Re(e, e.return, I);
          }
        }
        break;
      case 3:
        if (
          ((Vs = null),
          (s = Qt),
          (Qt = Gs(t.containerInfo)),
          gt(t, e),
          (Qt = s),
          yt(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            hl(t.containerInfo);
          } catch (I) {
            Re(e, e.return, I);
          }
        bc && ((bc = !1), $m(e));
        break;
      case 4:
        ((l = Qt),
          (Qt = Gs(e.stateNode.containerInfo)),
          gt(t, e),
          yt(e),
          (Qt = l));
        break;
      case 12:
        (gt(t, e), yt(e));
        break;
      case 31:
        (gt(t, e),
          yt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Cs(e, l))));
        break;
      case 13:
        (gt(t, e),
          yt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Os = bt()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Cs(e, l))));
        break;
      case 22:
        s = e.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          M = vn,
          B = Fe;
        if (
          ((vn = M || s),
          (Fe = B || S),
          gt(t, e),
          (Fe = B),
          (vn = M),
          yt(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = s ? t._visibility & -2 : t._visibility | 1,
              s && (n === null || S || vn || Fe || Ea(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                S = n = t;
                try {
                  if (((o = S.stateNode), s))
                    ((m = o.style),
                      typeof m.setProperty == "function"
                        ? m.setProperty("display", "none", "important")
                        : (m.display = "none"));
                  else {
                    x = S.stateNode;
                    var Y = S.memoizedProps.style,
                      z =
                        Y != null && Y.hasOwnProperty("display")
                          ? Y.display
                          : null;
                    x.style.display =
                      z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (I) {
                  Re(S, S.return, I);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (I) {
                  Re(S, S.return, I);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                S = t;
                try {
                  var k = S.stateNode;
                  s ? Uh(k, !0) : Uh(S.stateNode, !1);
                } catch (I) {
                  Re(S, S.return, I);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), Cs(e, n))));
        break;
      case 19:
        (gt(t, e),
          yt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Cs(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (gt(t, e), yt(e));
    }
  }

  function yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Bm(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              o = xc(e);
            Ts(e, o, s);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (Ua(m, ""), (n.flags &= -33));
            var x = xc(e);
            Ts(e, x, m);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              M = xc(e);
            vc(e, M, S);
            break;
          default:
            throw Error(c(161));
        }
      } catch (B) {
        Re(e, e.return, B);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }

  function $m(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ($m(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }

  function wn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Ym(e, t.alternate, t), (t = t.sibling));
  }

  function Ea(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Yn(4, t, t.return), Ea(t));
          break;
        case 1:
          en(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == "function" && Um(t, t.return, n),
            Ea(t));
          break;
        case 27:
          pi(t.stateNode);
        case 26:
        case 5:
          (en(t, t.return), Ea(t));
          break;
        case 22:
          t.memoizedState === null && Ea(t);
          break;
        case 30:
          Ea(t);
          break;
        default:
          Ea(t);
      }
      e = e.sibling;
    }
  }

  function Sn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        s = e,
        o = t,
        m = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (Sn(s, o, n), ii(4, o));
          break;
        case 1:
          if (
            (Sn(s, o, n),
            (l = o),
            (s = l.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (M) {
              Re(l, l.return, M);
            }
          if (((l = o), (s = l.updateQueue), s !== null)) {
            var x = l.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  Ed(S[s], x);
            } catch (M) {
              Re(l, l.return, M);
            }
          }
          (n && m & 64 && Lm(o), si(o, o.return));
          break;
        case 27:
          qm(o);
        case 26:
        case 5:
          (Sn(s, o, n), n && l === null && m & 4 && Hm(o), si(o, o.return));
          break;
        case 12:
          Sn(s, o, n);
          break;
        case 31:
          (Sn(s, o, n), n && m & 4 && Xm(s, o));
          break;
        case 13:
          (Sn(s, o, n), n && m & 4 && Zm(s, o));
          break;
        case 22:
          (o.memoizedState === null && Sn(s, o, n), si(o, o.return));
          break;
        case 30:
          break;
        default:
          Sn(s, o, n);
      }
      t = t.sibling;
    }
  }

  function wc(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Zl(n)));
  }

  function Sc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Zl(e)));
  }

  function Xt(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Jm(e, t, n, l), (t = t.sibling));
  }

  function Jm(e, t, n, l) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Xt(e, t, n, l), s & 2048 && ii(9, t));
        break;
      case 1:
        Xt(e, t, n, l);
        break;
      case 3:
        (Xt(e, t, n, l),
          s & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Zl(e))));
        break;
      case 12:
        if (s & 2048) {
          (Xt(e, t, n, l), (e = t.stateNode));
          try {
            var o = t.memoizedProps,
              m = o.id,
              x = o.onPostCommit;
            typeof x == "function" &&
              x(
                m,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (S) {
            Re(t, t.return, S);
          }
        } else Xt(e, t, n, l);
        break;
      case 31:
        Xt(e, t, n, l);
        break;
      case 13:
        Xt(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        ((o = t.stateNode),
          (m = t.alternate),
          t.memoizedState !== null
            ? o._visibility & 2
              ? Xt(e, t, n, l)
              : ri(e, t)
            : o._visibility & 2
              ? Xt(e, t, n, l)
              : ((o._visibility |= 2),
                al(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && wc(m, t));
        break;
      case 24:
        (Xt(e, t, n, l), s & 2048 && Sc(t.alternate, t));
        break;
      default:
        Xt(e, t, n, l);
    }
  }

  function al(e, t, n, l, s) {
    for (
      s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var o = e,
        m = t,
        x = n,
        S = l,
        M = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (al(o, m, x, S, s), ii(8, m));
          break;
        case 23:
          break;
        case 22:
          var B = m.stateNode;
          (m.memoizedState !== null
            ? B._visibility & 2
              ? al(o, m, x, S, s)
              : ri(o, m)
            : ((B._visibility |= 2), al(o, m, x, S, s)),
            s && M & 2048 && wc(m.alternate, m));
          break;
        case 24:
          (al(o, m, x, S, s), s && M & 2048 && Sc(m.alternate, m));
          break;
        default:
          al(o, m, x, S, s);
      }
      t = t.sibling;
    }
  }

  function ri(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          s = l.flags;
        switch (l.tag) {
          case 22:
            (ri(n, l), s & 2048 && wc(l.alternate, l));
            break;
          case 24:
            (ri(n, l), s & 2048 && Sc(l.alternate, l));
            break;
          default:
            ri(n, l);
        }
        t = t.sibling;
      }
  }
  var oi = 8192;

  function ll(e, t, n) {
    if (e.subtreeFlags & oi)
      for (e = e.child; e !== null; ) (Pm(e, t, n), (e = e.sibling));
  }

  function Pm(e, t, n) {
    switch (e.tag) {
      case 26:
        (ll(e, t, n),
          e.flags & oi &&
            e.memoizedState !== null &&
            r0(n, Qt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        ll(e, t, n);
        break;
      case 3:
      case 4:
        var l = Qt;
        ((Qt = Gs(e.stateNode.containerInfo)), ll(e, t, n), (Qt = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = oi), (oi = 16777216), ll(e, t, n), (oi = l))
            : ll(e, t, n));
        break;
      default:
        ll(e, t, n);
    }
  }

  function Fm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }

  function ci(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((nt = l), Im(l, e));
        }
      Fm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Wm(e), (e = e.sibling));
  }

  function Wm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ci(e), e.flags & 2048 && Yn(9, e, e.return));
        break;
      case 3:
        ci(e);
        break;
      case 12:
        ci(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), As(e))
          : ci(e);
        break;
      default:
        ci(e);
    }
  }

  function As(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((nt = l), Im(l, e));
        }
      Fm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Yn(8, t, t.return), As(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), As(t)));
          break;
        default:
          As(t);
      }
      e = e.sibling;
    }
  }

  function Im(e, t) {
    for (; nt !== null; ) {
      var n = nt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Zl(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (nt = l));
      else
        e: for (n = e; nt !== null; ) {
          l = nt;
          var s = l.sibling,
            o = l.return;
          if ((Vm(l), l === n)) {
            nt = null;
            break e;
          }
          if (s !== null) {
            ((s.return = o), (nt = s));
            break e;
          }
          nt = o;
        }
    }
  }
  var Sb = {
      getCacheForType: function (e) {
        var t = it($e),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return it($e).controller.signal;
      },
    },
    Nb = typeof WeakMap == "function" ? WeakMap : Map,
    Ae = 0,
    ke = null,
    ve = null,
    we = 0,
    Oe = 0,
    Ct = null,
    Vn = !1,
    il = !1,
    Nc = !1,
    Nn = 0,
    Ge = 0,
    Qn = 0,
    Ta = 0,
    jc = 0,
    At = 0,
    sl = 0,
    ui = null,
    xt = null,
    Ec = !1,
    Os = 0,
    eh = 0,
    Rs = 1 / 0,
    _s = null,
    Xn = null,
    Ie = 0,
    Zn = null,
    rl = null,
    jn = 0,
    Tc = 0,
    Cc = null,
    th = null,
    fi = 0,
    Ac = null;

  function Ot() {
    return (Ae & 2) !== 0 && we !== 0 ? we & -we : R.T !== null ? zc() : yf();
  }

  function nh() {
    if (At === 0)
      if ((we & 536870912) === 0 || je) {
        var e = Bi;
        ((Bi <<= 1), (Bi & 3932160) === 0 && (Bi = 262144), (At = e));
      } else At = 536870912;
    return ((e = Et.current), e !== null && (e.flags |= 32), At);
  }

  function vt(e, t, n) {
    (((e === ke && (Oe === 2 || Oe === 9)) || e.cancelPendingCommit !== null) &&
      (ol(e, 0), Kn(e, we, At, !1)),
      Ml(e, n),
      ((Ae & 2) === 0 || e !== ke) &&
        (e === ke &&
          ((Ae & 2) === 0 && (Ta |= n), Ge === 4 && Kn(e, we, At, !1)),
        tn(e)));
  }

  function ah(e, t, n) {
    if ((Ae & 6) !== 0) throw Error(c(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || _l(e, t),
      s = l ? Tb(e, t) : Rc(e, t, !0),
      o = l;
    do {
      if (s === 0) {
        il && !l && Kn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), o && !jb(n))) {
          ((s = Rc(e, t, !1)), (o = !1));
          continue;
        }
        if (s === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var m = 0;
          else
            ((m = e.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0));
          if (m !== 0) {
            t = m;
            e: {
              var x = e;
              s = ui;
              var S = x.current.memoizedState.isDehydrated;
              if ((S && (ol(x, m).flags |= 256), (m = Rc(x, m, !1)), m !== 2)) {
                if (Nc && !S) {
                  ((x.errorRecoveryDisabledLanes |= o), (Ta |= o), (s = 4));
                  break e;
                }
                ((o = xt),
                  (xt = s),
                  o !== null &&
                    (xt === null ? (xt = o) : xt.push.apply(xt, o)));
              }
              s = m;
            }
            if (((o = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (ol(e, 0), Kn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (o = s), o)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Kn(l, t, At, !Vn);
              break e;
            case 2:
              xt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && ((s = Os + 300 - bt()), 10 < s)) {
            if ((Kn(l, t, At, !Vn), Gi(l, 0, !0) !== 0)) break e;
            ((jn = t),
              (l.timeoutHandle = zh(
                lh.bind(
                  null,
                  l,
                  n,
                  xt,
                  _s,
                  Ec,
                  t,
                  At,
                  Ta,
                  sl,
                  Vn,
                  o,
                  "Throttled",
                  -0,
                  0,
                ),
                s,
              )));
            break e;
          }
          lh(l, n, xt, _s, Ec, t, At, Ta, sl, Vn, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    tn(e);
  }

  function lh(e, t, n, l, s, o, m, x, S, M, B, Y, z, k) {
    if (
      ((e.timeoutHandle = -1),
      (Y = t.subtreeFlags),
      Y & 8192 || (Y & 16785408) === 16785408)
    ) {
      ((Y = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: cn,
      }),
        Pm(t, o, Y));
      var I =
        (o & 62914560) === o ? Os - bt() : (o & 4194048) === o ? eh - bt() : 0;
      if (((I = o0(Y, I)), I !== null)) {
        ((jn = o),
          (e.cancelPendingCommit = I(
            dh.bind(null, e, t, o, n, l, s, m, x, S, B, Y, null, z, k),
          )),
          Kn(e, o, m, !M));
        return;
      }
    }
    dh(e, t, o, n, l, s, m, x, S);
  }

  function jb(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var s = n[l],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!Nt(o(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }

  function Kn(e, t, n, l) {
    ((t &= ~jc),
      (t &= ~Ta),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var s = t; 0 < s; ) {
      var o = 31 - St(s),
        m = 1 << o;
      ((l[o] = -1), (s &= ~m));
    }
    n !== 0 && hf(e, n, t);
  }

  function Ms() {
    return (Ae & 6) === 0 ? (di(0), !1) : !0;
  }

  function Oc() {
    if (ve !== null) {
      if (Oe === 0) var e = ve.return;
      else ((e = ve), (mn = ya = null), Xo(e), (Wa = null), ($l = 0), (e = ve));
      for (; e !== null; ) (km(e.alternate, e), (e = e.return));
      ve = null;
    }
  }

  function ol(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), Qb(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (jn = 0),
      Oc(),
      (ke = e),
      (ve = n = fn(e.current, null)),
      (we = t),
      (Oe = 0),
      (Ct = null),
      (Vn = !1),
      (il = _l(e, t)),
      (Nc = !1),
      (sl = At = jc = Ta = Qn = Ge = 0),
      (xt = ui = null),
      (Ec = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var s = 31 - St(l),
          o = 1 << s;
        ((t |= e[s]), (l &= ~o));
      }
    return ((Nn = t), Ii(), n);
  }

  function ih(e, t) {
    ((me = null),
      (R.H = ni),
      t === Fa || t === rs
        ? ((t = wd()), (Oe = 3))
        : t === Do
          ? ((t = wd()), (Oe = 4))
          : (Oe =
              t === rc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Ct = t),
      ve === null && ((Ge = 1), ws(e, Lt(t, e.current))));
  }

  function sh() {
    var e = Et.current;
    return e === null
      ? !0
      : (we & 4194048) === we
        ? qt === null
        : (we & 62914560) === we || (we & 536870912) !== 0
          ? e === qt
          : !1;
  }

  function rh() {
    var e = R.H;
    return ((R.H = ni), e === null ? ni : e);
  }

  function oh() {
    var e = R.A;
    return ((R.A = Sb), e);
  }

  function Ds() {
    ((Ge = 4),
      Vn || ((we & 4194048) !== we && Et.current !== null) || (il = !0),
      ((Qn & 134217727) === 0 && (Ta & 134217727) === 0) ||
        ke === null ||
        Kn(ke, we, At, !1));
  }

  function Rc(e, t, n) {
    var l = Ae;
    Ae |= 2;
    var s = rh(),
      o = oh();
    ((ke !== e || we !== t) && ((_s = null), ol(e, t)), (t = !1));
    var m = Ge;
    e: do
      try {
        if (Oe !== 0 && ve !== null) {
          var x = ve,
            S = Ct;
          switch (Oe) {
            case 8:
              (Oc(), (m = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Et.current === null && (t = !0);
              var M = Oe;
              if (((Oe = 0), (Ct = null), cl(e, x, S, M), n && il)) {
                m = 0;
                break e;
              }
              break;
            default:
              ((M = Oe), (Oe = 0), (Ct = null), cl(e, x, S, M));
          }
        }
        (Eb(), (m = Ge));
        break;
      } catch (B) {
        ih(e, B);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (mn = ya = null),
      (Ae = l),
      (R.H = s),
      (R.A = o),
      ve === null && ((ke = null), (we = 0), Ii()),
      m
    );
  }

  function Eb() {
    for (; ve !== null; ) ch(ve);
  }

  function Tb(e, t) {
    var n = Ae;
    Ae |= 2;
    var l = rh(),
      s = oh();
    ke !== e || we !== t
      ? ((_s = null), (Rs = bt() + 500), ol(e, t))
      : (il = _l(e, t));
    e: do
      try {
        if (Oe !== 0 && ve !== null) {
          t = ve;
          var o = Ct;
          t: switch (Oe) {
            case 1:
              ((Oe = 0), (Ct = null), cl(e, t, o, 1));
              break;
            case 2:
            case 9:
              if (vd(o)) {
                ((Oe = 0), (Ct = null), uh(t));
                break;
              }
              ((t = function () {
                ((Oe !== 2 && Oe !== 9) || ke !== e || (Oe = 7), tn(e));
              }),
                o.then(t, t));
              break e;
            case 3:
              Oe = 7;
              break e;
            case 4:
              Oe = 5;
              break e;
            case 7:
              vd(o)
                ? ((Oe = 0), (Ct = null), uh(t))
                : ((Oe = 0), (Ct = null), cl(e, t, o, 7));
              break;
            case 5:
              var m = null;
              switch (ve.tag) {
                case 26:
                  m = ve.memoizedState;
                case 5:
                case 27:
                  var x = ve;
                  if (m ? Jh(m) : x.stateNode.complete) {
                    ((Oe = 0), (Ct = null));
                    var S = x.sibling;
                    if (S !== null) ve = S;
                    else {
                      var M = x.return;
                      M !== null ? ((ve = M), zs(M)) : (ve = null);
                    }
                    break t;
                  }
              }
              ((Oe = 0), (Ct = null), cl(e, t, o, 5));
              break;
            case 6:
              ((Oe = 0), (Ct = null), cl(e, t, o, 6));
              break;
            case 8:
              (Oc(), (Ge = 6));
              break e;
            default:
              throw Error(c(462));
          }
        }
        Cb();
        break;
      } catch (B) {
        ih(e, B);
      }
    while (!0);
    return (
      (mn = ya = null),
      (R.H = l),
      (R.A = s),
      (Ae = n),
      ve !== null ? 0 : ((ke = null), (we = 0), Ii(), Ge)
    );
  }

  function Cb() {
    for (; ve !== null && !Px(); ) ch(ve);
  }

  function ch(e) {
    var t = Dm(e.alternate, e, Nn);
    ((e.memoizedProps = e.pendingProps), t === null ? zs(e) : (ve = t));
  }

  function uh(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Cm(n, t, t.pendingProps, t.type, void 0, we);
        break;
      case 11:
        t = Cm(n, t, t.pendingProps, t.type.render, t.ref, we);
        break;
      case 5:
        Xo(t);
      default:
        (km(n, t), (t = ve = od(t, Nn)), (t = Dm(n, t, Nn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? zs(e) : (ve = t));
  }

  function cl(e, t, n, l) {
    ((mn = ya = null), Xo(t), (Wa = null), ($l = 0));
    var s = t.return;
    try {
      if (pb(e, s, t, n, we)) {
        ((Ge = 1), ws(e, Lt(n, e.current)), (ve = null));
        return;
      }
    } catch (o) {
      if (s !== null) throw ((ve = s), o);
      ((Ge = 1), ws(e, Lt(n, e.current)), (ve = null));
      return;
    }
    t.flags & 32768
      ? (je || l === 1
          ? (e = !0)
          : il || (we & 536870912) !== 0
            ? (e = !1)
            : ((Vn = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Et.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        fh(t, e))
      : zs(t);
  }

  function zs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        fh(t, Vn);
        return;
      }
      e = t.return;
      var n = xb(t.alternate, t, Nn);
      if (n !== null) {
        ve = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ve = t;
        return;
      }
      ve = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
  }

  function fh(e, t) {
    do {
      var n = vb(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (ve = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ve = e;
        return;
      }
      ve = e = n;
    } while (e !== null);
    ((Ge = 6), (ve = null));
  }

  function dh(e, t, n, l, s, o, m, x, S) {
    e.cancelPendingCommit = null;
    do ks();
    while (Ie !== 0);
    if ((Ae & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (
        ((o = t.lanes | t.childLanes),
        (o |= xo),
        sv(e, n, o, m, x, S),
        e === ke && ((ve = ke = null), (we = 0)),
        (rl = t),
        (Zn = e),
        (jn = n),
        (Tc = o),
        (Cc = s),
        (th = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            _b(Ui, function () {
              return (yh(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = R.T), (R.T = null), (s = Q.p), (Q.p = 2), (m = Ae), (Ae |= 4));
        try {
          bb(e, t, n);
        } finally {
          ((Ae = m), (Q.p = s), (R.T = l));
        }
      }
      ((Ie = 1), mh(), hh(), ph());
    }
  }

  function mh() {
    if (Ie === 1) {
      Ie = 0;
      var e = Zn,
        t = rl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = R.T), (R.T = null));
        var l = Q.p;
        Q.p = 2;
        var s = Ae;
        Ae |= 4;
        try {
          Km(t, e);
          var o = Yc,
            m = If(e.containerInfo),
            x = o.focusedElem,
            S = o.selectionRange;
          if (
            m !== x &&
            x &&
            x.ownerDocument &&
            Wf(x.ownerDocument.documentElement, x)
          ) {
            if (S !== null && mo(x)) {
              var M = S.start,
                B = S.end;
              if ((B === void 0 && (B = M), "selectionStart" in x))
                ((x.selectionStart = M),
                  (x.selectionEnd = Math.min(B, x.value.length)));
              else {
                var Y = x.ownerDocument || document,
                  z = (Y && Y.defaultView) || window;
                if (z.getSelection) {
                  var k = z.getSelection(),
                    I = x.textContent.length,
                    se = Math.min(S.start, I),
                    ze = S.end === void 0 ? se : Math.min(S.end, I);
                  !k.extend && se > ze && ((m = ze), (ze = se), (se = m));
                  var C = Ff(x, se),
                    j = Ff(x, ze);
                  if (
                    C &&
                    j &&
                    (k.rangeCount !== 1 ||
                      k.anchorNode !== C.node ||
                      k.anchorOffset !== C.offset ||
                      k.focusNode !== j.node ||
                      k.focusOffset !== j.offset)
                  ) {
                    var _ = Y.createRange();
                    (_.setStart(C.node, C.offset),
                      k.removeAllRanges(),
                      se > ze
                        ? (k.addRange(_), k.extend(j.node, j.offset))
                        : (_.setEnd(j.node, j.offset), k.addRange(_)));
                  }
                }
              }
            }
            for (Y = [], k = x; (k = k.parentNode); )
              k.nodeType === 1 &&
                Y.push({
                  element: k,
                  left: k.scrollLeft,
                  top: k.scrollTop,
                });
            for (
              typeof x.focus == "function" && x.focus(), x = 0;
              x < Y.length;
              x++
            ) {
              var G = Y[x];
              ((G.element.scrollLeft = G.left), (G.element.scrollTop = G.top));
            }
          }
          ((Ks = !!Gc), (Yc = Gc = null));
        } finally {
          ((Ae = s), (Q.p = l), (R.T = n));
        }
      }
      ((e.current = t), (Ie = 2));
    }
  }

  function hh() {
    if (Ie === 2) {
      Ie = 0;
      var e = Zn,
        t = rl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = R.T), (R.T = null));
        var l = Q.p;
        Q.p = 2;
        var s = Ae;
        Ae |= 4;
        try {
          Ym(e, t.alternate, t);
        } finally {
          ((Ae = s), (Q.p = l), (R.T = n));
        }
      }
      Ie = 3;
    }
  }

  function ph() {
    if (Ie === 4 || Ie === 3) {
      ((Ie = 0), Fx());
      var e = Zn,
        t = rl,
        n = jn,
        l = th;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ie = 5)
        : ((Ie = 0), (rl = Zn = null), gh(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (
        (s === 0 && (Xn = null),
        Kr(n),
        (t = t.stateNode),
        wt && typeof wt.onCommitFiberRoot == "function")
      )
        try {
          wt.onCommitFiberRoot(Rl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = R.T), (s = Q.p), (Q.p = 2), (R.T = null));
        try {
          for (var o = e.onRecoverableError, m = 0; m < l.length; m++) {
            var x = l[m];
            o(x.value, {
              componentStack: x.stack,
            });
          }
        } finally {
          ((R.T = t), (Q.p = s));
        }
      }
      ((jn & 3) !== 0 && ks(),
        tn(e),
        (s = e.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0
          ? e === Ac
            ? fi++
            : ((fi = 0), (Ac = e))
          : (fi = 0),
        di(0));
    }
  }

  function gh(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Zl(t)));
  }

  function ks() {
    return (mh(), hh(), ph(), yh());
  }

  function yh() {
    if (Ie !== 5) return !1;
    var e = Zn,
      t = Tc;
    Tc = 0;
    var n = Kr(jn),
      l = R.T,
      s = Q.p;
    try {
      ((Q.p = 32 > n ? 32 : n), (R.T = null), (n = Cc), (Cc = null));
      var o = Zn,
        m = jn;
      if (((Ie = 0), (rl = Zn = null), (jn = 0), (Ae & 6) !== 0))
        throw Error(c(331));
      var x = Ae;
      if (
        ((Ae |= 4),
        Wm(o.current),
        Jm(o, o.current, m, n),
        (Ae = x),
        di(0, !1),
        wt && typeof wt.onPostCommitFiberRoot == "function")
      )
        try {
          wt.onPostCommitFiberRoot(Rl, o);
        } catch {}
      return !0;
    } finally {
      ((Q.p = s), (R.T = l), gh(e, t));
    }
  }

  function xh(e, t, n) {
    ((t = Lt(n, t)),
      (t = sc(e.stateNode, t, 2)),
      (e = Bn(e, t, 2)),
      e !== null && (Ml(e, 2), tn(e)));
  }

  function Re(e, t, n) {
    if (e.tag === 3) xh(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          xh(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Xn === null || !Xn.has(l)))
          ) {
            ((e = Lt(n, e)),
              (n = vm(2)),
              (l = Bn(t, n, 2)),
              l !== null && (bm(n, l, t, e), Ml(l, 2), tn(l)));
            break;
          }
        }
        t = t.return;
      }
  }

  function _c(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Nb();
      var s = new Set();
      l.set(t, s);
    } else ((s = l.get(t)), s === void 0 && ((s = new Set()), l.set(t, s)));
    s.has(n) ||
      ((Nc = !0), s.add(n), (e = Ab.bind(null, e, t, n)), t.then(e, e));
  }

  function Ab(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      ke === e &&
        (we & n) === n &&
        (Ge === 4 || (Ge === 3 && (we & 62914560) === we && 300 > bt() - Os)
          ? (Ae & 2) === 0 && ol(e, 0)
          : (jc |= n),
        sl === we && (sl = 0)),
      tn(e));
  }

  function vh(e, t) {
    (t === 0 && (t = mf()), (e = ha(e, t)), e !== null && (Ml(e, t), tn(e)));
  }

  function Ob(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), vh(e, n));
  }

  function Rb(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    (l !== null && l.delete(t), vh(e, n));
  }

  function _b(e, t) {
    return Vr(e, t);
  }
  var Ls = null,
    ul = null,
    Mc = !1,
    Us = !1,
    Dc = !1,
    $n = 0;

  function tn(e) {
    (e !== ul &&
      e.next === null &&
      (ul === null ? (Ls = ul = e) : (ul = ul.next = e)),
      (Us = !0),
      Mc || ((Mc = !0), Db()));
  }

  function di(e, t) {
    if (!Dc && Us) {
      Dc = !0;
      do
        for (var n = !1, l = Ls; l !== null; ) {
          if (e !== 0) {
            var s = l.pendingLanes;
            if (s === 0) var o = 0;
            else {
              var m = l.suspendedLanes,
                x = l.pingedLanes;
              ((o = (1 << (31 - St(42 | e) + 1)) - 1),
                (o &= s & ~(m & ~x)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((n = !0), Nh(l, o));
          } else
            ((o = we),
              (o = Gi(
                l,
                l === ke ? o : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (o & 3) === 0 || _l(l, o) || ((n = !0), Nh(l, o)));
          l = l.next;
        }
      while (n);
      Dc = !1;
    }
  }

  function Mb() {
    bh();
  }

  function bh() {
    Us = Mc = !1;
    var e = 0;
    $n !== 0 && Vb() && (e = $n);
    for (var t = bt(), n = null, l = Ls; l !== null; ) {
      var s = l.next,
        o = wh(l, t);
      (o === 0
        ? ((l.next = null),
          n === null ? (Ls = s) : (n.next = s),
          s === null && (ul = n))
        : ((n = l), (e !== 0 || (o & 3) !== 0) && (Us = !0)),
        (l = s));
    }
    ((Ie !== 0 && Ie !== 5) || di(e), $n !== 0 && ($n = 0));
  }

  function wh(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        s = e.expirationTimes,
        o = e.pendingLanes & -62914561;
      0 < o;
    ) {
      var m = 31 - St(o),
        x = 1 << m,
        S = s[m];
      (S === -1
        ? ((x & n) === 0 || (x & l) !== 0) && (s[m] = iv(x, t))
        : S <= t && (e.expiredLanes |= x),
        (o &= ~x));
    }
    if (
      ((t = ke),
      (n = we),
      (n = Gi(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (l = e.callbackNode),
      n === 0 ||
        (e === t && (Oe === 2 || Oe === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Qr(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || _l(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && Qr(l), Kr(n))) {
        case 2:
        case 8:
          n = ff;
          break;
        case 32:
          n = Ui;
          break;
        case 268435456:
          n = df;
          break;
        default:
          n = Ui;
      }
      return (
        (l = Sh.bind(null, e)),
        (n = Vr(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && Qr(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }

  function Sh(e, t) {
    if (Ie !== 0 && Ie !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (ks() && e.callbackNode !== n) return null;
    var l = we;
    return (
      (l = Gi(
        e,
        e === ke ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (ah(e, l, t),
          wh(e, bt()),
          e.callbackNode != null && e.callbackNode === n
            ? Sh.bind(null, e)
            : null)
    );
  }

  function Nh(e, t) {
    if (ks()) return null;
    ah(e, t, !0);
  }

  function Db() {
    Xb(function () {
      (Ae & 6) !== 0 ? Vr(uf, Mb) : bh();
    });
  }

  function zc() {
    if ($n === 0) {
      var e = Ja;
      (e === 0 && ((e = Hi), (Hi <<= 1), (Hi & 261888) === 0 && (Hi = 256)),
        ($n = e));
    }
    return $n;
  }

  function jh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Xi("" + e);
  }

  function Eh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }

  function zb(e, t, n, l, s) {
    if (t === "submit" && n && n.stateNode === s) {
      var o = jh((s[mt] || null).action),
        m = l.submitter;
      m &&
        ((t = (t = m[mt] || null)
          ? jh(t.formAction)
          : m.getAttribute("formAction")),
        t !== null && ((o = t), (m = null)));
      var x = new Ji("action", "action", null, l, s);
      e.push({
        event: x,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if ($n !== 0) {
                  var S = m ? Eh(s, m) : new FormData(s);
                  ec(
                    n,
                    {
                      pending: !0,
                      data: S,
                      method: s.method,
                      action: o,
                    },
                    null,
                    S,
                  );
                }
              } else
                typeof o == "function" &&
                  (x.preventDefault(),
                  (S = m ? Eh(s, m) : new FormData(s)),
                  ec(
                    n,
                    {
                      pending: !0,
                      data: S,
                      method: s.method,
                      action: o,
                    },
                    o,
                    S,
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var kc = 0; kc < yo.length; kc++) {
    var Lc = yo[kc],
      kb = Lc.toLowerCase(),
      Lb = Lc[0].toUpperCase() + Lc.slice(1);
    Vt(kb, "on" + Lb);
  }
  (Vt(nd, "onAnimationEnd"),
    Vt(ad, "onAnimationIteration"),
    Vt(ld, "onAnimationStart"),
    Vt("dblclick", "onDoubleClick"),
    Vt("focusin", "onFocus"),
    Vt("focusout", "onBlur"),
    Vt(Wv, "onTransitionRun"),
    Vt(Iv, "onTransitionStart"),
    Vt(eb, "onTransitionCancel"),
    Vt(id, "onTransitionEnd"),
    ka("onMouseEnter", ["mouseout", "mouseover"]),
    ka("onMouseLeave", ["mouseout", "mouseover"]),
    ka("onPointerEnter", ["pointerout", "pointerover"]),
    ka("onPointerLeave", ["pointerout", "pointerover"]),
    ua(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    ua(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    ua("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ua(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    ua(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    ua(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var mi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Ub = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(mi),
    );

  function Th(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        s = l.event;
      l = l.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var m = l.length - 1; 0 <= m; m--) {
            var x = l[m],
              S = x.instance,
              M = x.currentTarget;
            if (((x = x.listener), S !== o && s.isPropagationStopped()))
              break e;
            ((o = x), (s.currentTarget = M));
            try {
              o(s);
            } catch (B) {
              Wi(B);
            }
            ((s.currentTarget = null), (o = S));
          }
        else
          for (m = 0; m < l.length; m++) {
            if (
              ((x = l[m]),
              (S = x.instance),
              (M = x.currentTarget),
              (x = x.listener),
              S !== o && s.isPropagationStopped())
            )
              break e;
            ((o = x), (s.currentTarget = M));
            try {
              o(s);
            } catch (B) {
              Wi(B);
            }
            ((s.currentTarget = null), (o = S));
          }
      }
    }
  }

  function be(e, t) {
    var n = t[$r];
    n === void 0 && (n = t[$r] = new Set());
    var l = e + "__bubble";
    n.has(l) || (Ch(t, e, 2, !1), n.add(l));
  }

  function Uc(e, t, n) {
    var l = 0;
    (t && (l |= 4), Ch(n, e, l, t));
  }
  var Hs = "_reactListening" + Math.random().toString(36).slice(2);

  function Hc(e) {
    if (!e[Hs]) {
      ((e[Hs] = !0),
        bf.forEach(function (n) {
          n !== "selectionchange" && (Ub.has(n) || Uc(n, !1, e), Uc(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hs] || ((t[Hs] = !0), Uc("selectionchange", !1, t));
    }
  }

  function Ch(e, t, n, l) {
    switch (np(t)) {
      case 2:
        var s = f0;
        break;
      case 8:
        s = d0;
        break;
      default:
        s = Ic;
    }
    ((n = s.bind(null, t, n, e)),
      (s = void 0),
      !ao ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      l
        ? s !== void 0
          ? e.addEventListener(t, n, {
              capture: !0,
              passive: s,
            })
          : e.addEventListener(t, n, !0)
        : s !== void 0
          ? e.addEventListener(t, n, {
              passive: s,
            })
          : e.addEventListener(t, n, !1));
  }

  function Bc(e, t, n, l, s) {
    var o = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var x = l.stateNode.containerInfo;
          if (x === s) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var S = m.tag;
              if ((S === 3 || S === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; x !== null; ) {
            if (((m = Ma(x)), m === null)) return;
            if (((S = m.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              l = o = m;
              continue e;
            }
            x = x.parentNode;
          }
        }
        l = l.return;
      }
    Mf(function () {
      var M = o,
        B = to(n),
        Y = [];
      e: {
        var z = sd.get(e);
        if (z !== void 0) {
          var k = Ji,
            I = e;
          switch (e) {
            case "keypress":
              if (Ki(n) === 0) break e;
            case "keydown":
            case "keyup":
              k = Rv;
              break;
            case "focusin":
              ((I = "focus"), (k = ro));
              break;
            case "focusout":
              ((I = "blur"), (k = ro));
              break;
            case "beforeblur":
            case "afterblur":
              k = ro;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = kf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = xv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = Dv;
              break;
            case nd:
            case ad:
            case ld:
              k = wv;
              break;
            case id:
              k = kv;
              break;
            case "scroll":
            case "scrollend":
              k = gv;
              break;
            case "wheel":
              k = Uv;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = Nv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = Uf;
              break;
            case "toggle":
            case "beforetoggle":
              k = Bv;
          }
          var se = (t & 4) !== 0,
            ze = !se && (e === "scroll" || e === "scrollend"),
            C = se ? (z !== null ? z + "Capture" : null) : z;
          se = [];
          for (var j = M, _; j !== null; ) {
            var G = j;
            if (
              ((_ = G.stateNode),
              (G = G.tag),
              (G !== 5 && G !== 26 && G !== 27) ||
                _ === null ||
                C === null ||
                ((G = kl(j, C)), G != null && se.push(hi(j, G, _))),
              ze)
            )
              break;
            j = j.return;
          }
          0 < se.length &&
            ((z = new k(z, I, null, n, B)),
            Y.push({
              event: z,
              listeners: se,
            }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((z = e === "mouseover" || e === "pointerover"),
            (k = e === "mouseout" || e === "pointerout"),
            z &&
              n !== eo &&
              (I = n.relatedTarget || n.fromElement) &&
              (Ma(I) || I[_a]))
          )
            break e;
          if (
            (k || z) &&
            ((z =
              B.window === B
                ? B
                : (z = B.ownerDocument)
                  ? z.defaultView || z.parentWindow
                  : window),
            k
              ? ((I = n.relatedTarget || n.toElement),
                (k = M),
                (I = I ? Ma(I) : null),
                I !== null &&
                  ((ze = d(I)),
                  (se = I.tag),
                  I !== ze || (se !== 5 && se !== 27 && se !== 6)) &&
                  (I = null))
              : ((k = null), (I = M)),
            k !== I)
          ) {
            if (
              ((se = kf),
              (G = "onMouseLeave"),
              (C = "onMouseEnter"),
              (j = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((se = Uf),
                (G = "onPointerLeave"),
                (C = "onPointerEnter"),
                (j = "pointer")),
              (ze = k == null ? z : zl(k)),
              (_ = I == null ? z : zl(I)),
              (z = new se(G, j + "leave", k, n, B)),
              (z.target = ze),
              (z.relatedTarget = _),
              (G = null),
              Ma(B) === M &&
                ((se = new se(C, j + "enter", I, n, B)),
                (se.target = _),
                (se.relatedTarget = ze),
                (G = se)),
              (ze = G),
              k && I)
            )
              t: {
                for (se = Hb, C = k, j = I, _ = 0, G = C; G; G = se(G)) _++;
                G = 0;
                for (var le = j; le; le = se(le)) G++;
                for (; 0 < _ - G; ) ((C = se(C)), _--);
                for (; 0 < G - _; ) ((j = se(j)), G--);
                for (; _--; ) {
                  if (C === j || (j !== null && C === j.alternate)) {
                    se = C;
                    break t;
                  }
                  ((C = se(C)), (j = se(j)));
                }
                se = null;
              }
            else se = null;
            (k !== null && Ah(Y, z, k, se, !1),
              I !== null && ze !== null && Ah(Y, ze, I, se, !0));
          }
        }
        e: {
          if (
            ((z = M ? zl(M) : window),
            (k = z.nodeName && z.nodeName.toLowerCase()),
            k === "select" || (k === "input" && z.type === "file"))
          )
            var Te = Xf;
          else if (Vf(z))
            if (Zf) Te = Jv;
            else {
              Te = Kv;
              var ne = Zv;
            }
          else
            ((k = z.nodeName),
              !k ||
              k.toLowerCase() !== "input" ||
              (z.type !== "checkbox" && z.type !== "radio")
                ? M && Ir(M.elementType) && (Te = Xf)
                : (Te = $v));
          if (Te && (Te = Te(e, M))) {
            Qf(Y, Te, n, B);
            break e;
          }
          (ne && ne(e, z, M),
            e === "focusout" &&
              M &&
              z.type === "number" &&
              M.memoizedProps.value != null &&
              Wr(z, "number", z.value));
        }
        switch (((ne = M ? zl(M) : window), e)) {
          case "focusin":
            (Vf(ne) || ne.contentEditable === "true") &&
              ((Ga = ne), (ho = M), (Vl = null));
            break;
          case "focusout":
            Vl = ho = Ga = null;
            break;
          case "mousedown":
            po = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((po = !1), ed(Y, n, B));
            break;
          case "selectionchange":
            if (Fv) break;
          case "keydown":
          case "keyup":
            ed(Y, n, B);
        }
        var he;
        if (co)
          e: {
            switch (e) {
              case "compositionstart":
                var Se = "onCompositionStart";
                break e;
              case "compositionend":
                Se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Se = "onCompositionUpdate";
                break e;
            }
            Se = void 0;
          }
        else
          qa
            ? Gf(e, n) && (Se = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Se = "onCompositionStart");
        (Se &&
          (Hf &&
            n.locale !== "ko" &&
            (qa || Se !== "onCompositionStart"
              ? Se === "onCompositionEnd" && qa && (he = Df())
              : ((Mn = B),
                (lo = "value" in Mn ? Mn.value : Mn.textContent),
                (qa = !0))),
          (ne = Bs(M, Se)),
          0 < ne.length &&
            ((Se = new Lf(Se, e, null, n, B)),
            Y.push({
              event: Se,
              listeners: ne,
            }),
            he
              ? (Se.data = he)
              : ((he = Yf(n)), he !== null && (Se.data = he)))),
          (he = Gv ? Yv(e, n) : Vv(e, n)) &&
            ((Se = Bs(M, "onBeforeInput")),
            0 < Se.length &&
              ((ne = new Lf("onBeforeInput", "beforeinput", null, n, B)),
              Y.push({
                event: ne,
                listeners: Se,
              }),
              (ne.data = he))),
          zb(Y, e, M, n, B));
      }
      Th(Y, t);
    });
  }

  function hi(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n,
    };
  }

  function Bs(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var s = e,
        o = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          o === null ||
          ((s = kl(e, n)),
          s != null && l.unshift(hi(e, s, o)),
          (s = kl(e, t)),
          s != null && l.push(hi(e, s, o))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }

  function Hb(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }

  function Ah(e, t, n, l, s) {
    for (var o = t._reactName, m = []; n !== null && n !== l; ) {
      var x = n,
        S = x.alternate,
        M = x.stateNode;
      if (((x = x.tag), S !== null && S === l)) break;
      ((x !== 5 && x !== 26 && x !== 27) ||
        M === null ||
        ((S = M),
        s
          ? ((M = kl(n, o)), M != null && m.unshift(hi(n, M, S)))
          : s || ((M = kl(n, o)), M != null && m.push(hi(n, M, S)))),
        (n = n.return));
    }
    m.length !== 0 &&
      e.push({
        event: t,
        listeners: m,
      });
  }
  var Bb = /\r\n?/g,
    qb = /\u0000|\uFFFD/g;

  function Oh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Bb,
        `
`,
      )
      .replace(qb, "");
  }

  function Rh(e, t) {
    return ((t = Oh(t)), Oh(e) === t);
  }

  function De(e, t, n, l, s, o) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || Ua(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            Ua(e, "" + l);
        break;
      case "className":
        Vi(e, "class", l);
        break;
      case "tabIndex":
        Vi(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Vi(e, n, l);
        break;
      case "style":
        Rf(e, l, o);
        break;
      case "data":
        if (t !== "object") {
          Vi(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        ((l = Xi("" + l)), e.setAttribute(n, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (t !== "input" && De(e, t, "name", s.name, s, null),
                De(e, t, "formEncType", s.formEncType, s, null),
                De(e, t, "formMethod", s.formMethod, s, null),
                De(e, t, "formTarget", s.formTarget, s, null))
              : (De(e, t, "encType", s.encType, s, null),
                De(e, t, "method", s.method, s, null),
                De(e, t, "target", s.target, s, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        ((l = Xi("" + l)), e.setAttribute(n, l));
        break;
      case "onClick":
        l != null && (e.onclick = cn);
        break;
      case "onScroll":
        l != null && be("scroll", e);
        break;
      case "onScrollEnd":
        l != null && be("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
          if (((n = l.__html), n != null)) {
            if (s.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((n = Xi("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "" + l)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(n, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? e.setAttribute(n, l)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case "popover":
        (be("beforetoggle", e), be("toggle", e), Yi(e, "popover", l));
        break;
      case "xlinkActuate":
        on(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        on(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        on(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        on(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        on(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        on(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        on(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        on(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        on(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Yi(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = hv.get(n) || n), Yi(e, n, l));
    }
  }

  function qc(e, t, n, l, s, o) {
    switch (n) {
      case "style":
        Rf(e, l, o);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
          if (((n = l.__html), n != null)) {
            if (s.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Ua(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Ua(e, "" + l);
        break;
      case "onScroll":
        l != null && be("scroll", e);
        break;
      case "onScrollEnd":
        l != null && be("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = cn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!wf.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (t = n.slice(2, s ? n.length - 7 : void 0)),
              (o = e[mt] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && e.removeEventListener(t, o, s),
              typeof l == "function")
            ) {
              (typeof o != "function" &&
                o !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, s));
              break e;
            }
            n in e
              ? (e[n] = l)
              : l === !0
                ? e.setAttribute(n, "")
                : Yi(e, n, l);
          }
    }
  }

  function rt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (be("error", e), be("load", e));
        var l = !1,
          s = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var m = n[o];
            if (m != null)
              switch (o) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  De(e, t, o, m, n, null);
              }
          }
        (s && De(e, t, "srcSet", n.srcSet, n, null),
          l && De(e, t, "src", n.src, n, null));
        return;
      case "input":
        be("invalid", e);
        var x = (o = m = s = null),
          S = null,
          M = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var B = n[l];
            if (B != null)
              switch (l) {
                case "name":
                  s = B;
                  break;
                case "type":
                  m = B;
                  break;
                case "checked":
                  S = B;
                  break;
                case "defaultChecked":
                  M = B;
                  break;
                case "value":
                  o = B;
                  break;
                case "defaultValue":
                  x = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null) throw Error(c(137, t));
                  break;
                default:
                  De(e, t, l, B, n, null);
              }
          }
        Tf(e, o, x, S, M, m, s, !1);
        return;
      case "select":
        (be("invalid", e), (l = m = o = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((x = n[s]), x != null))
            switch (s) {
              case "value":
                o = x;
                break;
              case "defaultValue":
                m = x;
                break;
              case "multiple":
                l = x;
              default:
                De(e, t, s, x, n, null);
            }
        ((t = o),
          (n = m),
          (e.multiple = !!l),
          t != null ? La(e, !!l, t, !1) : n != null && La(e, !!l, n, !0));
        return;
      case "textarea":
        (be("invalid", e), (o = s = l = null));
        for (m in n)
          if (n.hasOwnProperty(m) && ((x = n[m]), x != null))
            switch (m) {
              case "value":
                l = x;
                break;
              case "defaultValue":
                s = x;
                break;
              case "children":
                o = x;
                break;
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(c(91));
                break;
              default:
                De(e, t, m, x, n, null);
            }
        Af(e, l, s, o);
        return;
      case "option":
        for (S in n)
          n.hasOwnProperty(S) &&
            ((l = n[S]), l != null) &&
            (S === "selected"
              ? (e.selected =
                  l && typeof l != "function" && typeof l != "symbol")
              : De(e, t, S, l, n, null));
        return;
      case "dialog":
        (be("beforetoggle", e),
          be("toggle", e),
          be("cancel", e),
          be("close", e));
        break;
      case "iframe":
      case "object":
        be("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < mi.length; l++) be(mi[l], e);
        break;
      case "image":
        (be("error", e), be("load", e));
        break;
      case "details":
        be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (be("error", e), be("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in n)
          if (n.hasOwnProperty(M) && ((l = n[M]), l != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                De(e, t, M, l, n, null);
            }
        return;
      default:
        if (Ir(t)) {
          for (B in n)
            n.hasOwnProperty(B) &&
              ((l = n[B]), l !== void 0 && qc(e, t, B, l, n, void 0));
          return;
        }
    }
    for (x in n)
      n.hasOwnProperty(x) && ((l = n[x]), l != null && De(e, t, x, l, n, null));
  }

  function Gb(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          o = null,
          m = null,
          x = null,
          S = null,
          M = null,
          B = null;
        for (k in n) {
          var Y = n[k];
          if (n.hasOwnProperty(k) && Y != null)
            switch (k) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = Y;
              default:
                l.hasOwnProperty(k) || De(e, t, k, null, l, Y);
            }
        }
        for (var z in l) {
          var k = l[z];
          if (((Y = n[z]), l.hasOwnProperty(z) && (k != null || Y != null)))
            switch (z) {
              case "type":
                o = k;
                break;
              case "name":
                s = k;
                break;
              case "checked":
                M = k;
                break;
              case "defaultChecked":
                B = k;
                break;
              case "value":
                m = k;
                break;
              case "defaultValue":
                x = k;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(c(137, t));
                break;
              default:
                k !== Y && De(e, t, z, k, l, Y);
            }
        }
        Fr(e, m, x, S, M, B, o, s);
        return;
      case "select":
        k = m = x = z = null;
        for (o in n)
          if (((S = n[o]), n.hasOwnProperty(o) && S != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                k = S;
              default:
                l.hasOwnProperty(o) || De(e, t, o, null, l, S);
            }
        for (s in l)
          if (
            ((o = l[s]),
            (S = n[s]),
            l.hasOwnProperty(s) && (o != null || S != null))
          )
            switch (s) {
              case "value":
                z = o;
                break;
              case "defaultValue":
                x = o;
                break;
              case "multiple":
                m = o;
              default:
                o !== S && De(e, t, s, o, l, S);
            }
        ((t = x),
          (n = m),
          (l = k),
          z != null
            ? La(e, !!n, z, !1)
            : !!l != !!n &&
              (t != null ? La(e, !!n, t, !0) : La(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        k = z = null;
        for (x in n)
          if (
            ((s = n[x]),
            n.hasOwnProperty(x) && s != null && !l.hasOwnProperty(x))
          )
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                De(e, t, x, null, l, s);
            }
        for (m in l)
          if (
            ((s = l[m]),
            (o = n[m]),
            l.hasOwnProperty(m) && (s != null || o != null))
          )
            switch (m) {
              case "value":
                z = s;
                break;
              case "defaultValue":
                k = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(c(91));
                break;
              default:
                s !== o && De(e, t, m, s, l, o);
            }
        Cf(e, z, k);
        return;
      case "option":
        for (var I in n)
          ((z = n[I]),
            n.hasOwnProperty(I) &&
              z != null &&
              !l.hasOwnProperty(I) &&
              (I === "selected" ? (e.selected = !1) : De(e, t, I, null, l, z)));
        for (S in l)
          ((z = l[S]),
            (k = n[S]),
            l.hasOwnProperty(S) &&
              z !== k &&
              (z != null || k != null) &&
              (S === "selected"
                ? (e.selected =
                    z && typeof z != "function" && typeof z != "symbol")
                : De(e, t, S, z, l, k)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var se in n)
          ((z = n[se]),
            n.hasOwnProperty(se) &&
              z != null &&
              !l.hasOwnProperty(se) &&
              De(e, t, se, null, l, z));
        for (M in l)
          if (
            ((z = l[M]),
            (k = n[M]),
            l.hasOwnProperty(M) && z !== k && (z != null || k != null))
          )
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(c(137, t));
                break;
              default:
                De(e, t, M, z, l, k);
            }
        return;
      default:
        if (Ir(t)) {
          for (var ze in n)
            ((z = n[ze]),
              n.hasOwnProperty(ze) &&
                z !== void 0 &&
                !l.hasOwnProperty(ze) &&
                qc(e, t, ze, void 0, l, z));
          for (B in l)
            ((z = l[B]),
              (k = n[B]),
              !l.hasOwnProperty(B) ||
                z === k ||
                (z === void 0 && k === void 0) ||
                qc(e, t, B, z, l, k));
          return;
        }
    }
    for (var C in n)
      ((z = n[C]),
        n.hasOwnProperty(C) &&
          z != null &&
          !l.hasOwnProperty(C) &&
          De(e, t, C, null, l, z));
    for (Y in l)
      ((z = l[Y]),
        (k = n[Y]),
        !l.hasOwnProperty(Y) ||
          z === k ||
          (z == null && k == null) ||
          De(e, t, Y, z, l, k));
  }

  function _h(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }

  function Yb() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0;
        l < n.length;
        l++
      ) {
        var s = n[l],
          o = s.transferSize,
          m = s.initiatorType,
          x = s.duration;
        if (o && x && _h(m)) {
          for (m = 0, x = s.responseEnd, l += 1; l < n.length; l++) {
            var S = n[l],
              M = S.startTime;
            if (M > x) break;
            var B = S.transferSize,
              Y = S.initiatorType;
            B &&
              _h(Y) &&
              ((S = S.responseEnd), (m += B * (S < x ? 1 : (x - M) / (S - M))));
          }
          if ((--l, (t += (8 * (o + m)) / (s.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Gc = null,
    Yc = null;

  function qs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }

  function Mh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }

  function Dh(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }

  function Vc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Qc = null;

  function Vb() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Qc
        ? !1
        : ((Qc = e), !0)
      : ((Qc = null), !1);
  }
  var zh = typeof setTimeout == "function" ? setTimeout : void 0,
    Qb = typeof clearTimeout == "function" ? clearTimeout : void 0,
    kh = typeof Promise == "function" ? Promise : void 0,
    Xb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof kh < "u"
          ? function (e) {
              return kh.resolve(null).then(e).catch(Zb);
            }
          : zh;

  function Zb(e) {
    setTimeout(function () {
      throw e;
    });
  }

  function Jn(e) {
    return e === "head";
  }

  function Lh(e, t) {
    var n = t,
      l = 0;
    do {
      var s = n.nextSibling;
      if ((e.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (l === 0) {
            (e.removeChild(s), hl(t));
            return;
          }
          l--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          l++;
        else if (n === "html") pi(e.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = e.ownerDocument.head), pi(n));
          for (var o = n.firstChild; o; ) {
            var m = o.nextSibling,
              x = o.nodeName;
            (o[Dl] ||
              x === "SCRIPT" ||
              x === "STYLE" ||
              (x === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(o),
              (o = m));
          }
        } else n === "body" && pi(e.ownerDocument.body);
      n = s;
    } while (n);
    hl(t);
  }

  function Uh(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = l;
    } while (n);
  }

  function Xc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Xc(n), Jr(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }

  function Kb(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var s = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Dl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((o = e.getAttribute("rel")),
                o === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== s.rel ||
                e.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                e.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                e.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((o = e.getAttribute("src")),
                (o !== (s.src == null ? null : s.src) ||
                  e.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  e.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  o &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var o = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === o) return e;
      } else return e;
      if (((e = Gt(e.nextSibling)), e === null)) break;
    }
    return null;
  }

  function $b(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = Gt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }

  function Hh(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Gt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }

  function Zc(e) {
    return e.data === "$?" || e.data === "$~";
  }

  function Kc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }

  function Jb(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var l = function () {
        (t(), n.removeEventListener("DOMContentLoaded", l));
      };
      (n.addEventListener("DOMContentLoaded", l), (e._reactRetry = l));
    }
  }

  function Gt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var $c = null;

  function Bh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return Gt(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }

  function qh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else (n !== "/$" && n !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }

  function Gh(e, t, n) {
    switch (((t = qs(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }

  function pi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Jr(e);
  }
  var Yt = new Map(),
    Yh = new Set();

  function Gs(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var En = Q.d;
  Q.d = {
    f: Pb,
    r: Fb,
    D: Wb,
    C: Ib,
    L: e0,
    m: t0,
    X: a0,
    S: n0,
    M: l0,
  };

  function Pb() {
    var e = En.f(),
      t = Ms();
    return e || t;
  }

  function Fb(e) {
    var t = Da(e);
    t !== null && t.tag === 5 && t.type === "form" ? im(t) : En.r(e);
  }
  var fl = typeof document > "u" ? null : document;

  function Vh(e, t, n) {
    var l = fl;
    if (l && typeof t == "string" && t) {
      var s = zt(t);
      ((s = 'link[rel="' + e + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        Yh.has(s) ||
          (Yh.add(s),
          (e = {
            rel: e,
            crossOrigin: n,
            href: t,
          }),
          l.querySelector(s) === null &&
            ((t = l.createElement("link")),
            rt(t, "link", e),
            tt(t),
            l.head.appendChild(t))));
    }
  }

  function Wb(e) {
    (En.D(e), Vh("dns-prefetch", e, null));
  }

  function Ib(e, t) {
    (En.C(e, t), Vh("preconnect", e, t));
  }

  function e0(e, t, n) {
    En.L(e, t, n);
    var l = fl;
    if (l && e && t) {
      var s = 'link[rel="preload"][as="' + zt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + zt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + zt(n.imageSizes) + '"]'))
        : (s += '[href="' + zt(e) + '"]');
      var o = s;
      switch (t) {
        case "style":
          o = dl(e);
          break;
        case "script":
          o = ml(e);
      }
      Yt.has(o) ||
        ((e = v(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        Yt.set(o, e),
        l.querySelector(s) !== null ||
          (t === "style" && l.querySelector(gi(o))) ||
          (t === "script" && l.querySelector(yi(o))) ||
          ((t = l.createElement("link")),
          rt(t, "link", e),
          tt(t),
          l.head.appendChild(t)));
    }
  }

  function t0(e, t) {
    En.m(e, t);
    var n = fl;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        s =
          'link[rel="modulepreload"][as="' + zt(l) + '"][href="' + zt(e) + '"]',
        o = s;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = ml(e);
      }
      if (
        !Yt.has(o) &&
        ((e = v(
          {
            rel: "modulepreload",
            href: e,
          },
          t,
        )),
        Yt.set(o, e),
        n.querySelector(s) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(yi(o))) return;
        }
        ((l = n.createElement("link")),
          rt(l, "link", e),
          tt(l),
          n.head.appendChild(l));
      }
    }
  }

  function n0(e, t, n) {
    En.S(e, t, n);
    var l = fl;
    if (l && e) {
      var s = za(l).hoistableStyles,
        o = dl(e);
      t = t || "default";
      var m = s.get(o);
      if (!m) {
        var x = {
          loading: 0,
          preload: null,
        };
        if ((m = l.querySelector(gi(o)))) x.loading = 5;
        else {
          ((e = v(
            {
              rel: "stylesheet",
              href: e,
              "data-precedence": t,
            },
            n,
          )),
            (n = Yt.get(o)) && Jc(e, n));
          var S = (m = l.createElement("link"));
          (tt(S),
            rt(S, "link", e),
            (S._p = new Promise(function (M, B) {
              ((S.onload = M), (S.onerror = B));
            })),
            S.addEventListener("load", function () {
              x.loading |= 1;
            }),
            S.addEventListener("error", function () {
              x.loading |= 2;
            }),
            (x.loading |= 4),
            Ys(m, t, l));
        }
        ((m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: x,
        }),
          s.set(o, m));
      }
    }
  }

  function a0(e, t) {
    En.X(e, t);
    var n = fl;
    if (n && e) {
      var l = za(n).hoistableScripts,
        s = ml(e),
        o = l.get(s);
      o ||
        ((o = n.querySelector(yi(s))),
        o ||
          ((e = v(
            {
              src: e,
              async: !0,
            },
            t,
          )),
          (t = Yt.get(s)) && Pc(e, t),
          (o = n.createElement("script")),
          tt(o),
          rt(o, "link", e),
          n.head.appendChild(o)),
        (o = {
          type: "script",
          instance: o,
          count: 1,
          state: null,
        }),
        l.set(s, o));
    }
  }

  function l0(e, t) {
    En.M(e, t);
    var n = fl;
    if (n && e) {
      var l = za(n).hoistableScripts,
        s = ml(e),
        o = l.get(s);
      o ||
        ((o = n.querySelector(yi(s))),
        o ||
          ((e = v(
            {
              src: e,
              async: !0,
              type: "module",
            },
            t,
          )),
          (t = Yt.get(s)) && Pc(e, t),
          (o = n.createElement("script")),
          tt(o),
          rt(o, "link", e),
          n.head.appendChild(o)),
        (o = {
          type: "script",
          instance: o,
          count: 1,
          state: null,
        }),
        l.set(s, o));
    }
  }

  function Qh(e, t, n, l) {
    var s = (s = de.current) ? Gs(s) : null;
    if (!s) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = dl(n.href)),
            (n = za(s).hoistableStyles),
            (l = n.get(t)),
            l ||
              ((l = {
                type: "style",
                instance: null,
                count: 0,
                state: null,
              }),
              n.set(t, l)),
            l)
          : {
              type: "void",
              instance: null,
              count: 0,
              state: null,
            };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = dl(n.href);
          var o = za(s).hoistableStyles,
            m = o.get(e);
          if (
            (m ||
              ((s = s.ownerDocument || s),
              (m = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: {
                  loading: 0,
                  preload: null,
                },
              }),
              o.set(e, m),
              (o = s.querySelector(gi(e))) &&
                !o._p &&
                ((m.instance = o), (m.state.loading = 5)),
              Yt.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Yt.set(e, n),
                o || i0(s, e, n, m.state))),
            t && l === null)
          )
            throw Error(c(528, ""));
          return m;
        }
        if (t && l !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = ml(n)),
              (n = za(s).hoistableScripts),
              (l = n.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, l)),
              l)
            : {
                type: "void",
                instance: null,
                count: 0,
                state: null,
              }
        );
      default:
        throw Error(c(444, e));
    }
  }

  function dl(e) {
    return 'href="' + zt(e) + '"';
  }

  function gi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }

  function Xh(e) {
    return v({}, e, {
      "data-precedence": e.precedence,
      precedence: null,
    });
  }

  function i0(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        rt(t, "link", n),
        tt(t),
        e.head.appendChild(t));
  }

  function ml(e) {
    return '[src="' + zt(e) + '"]';
  }

  function yi(e) {
    return "script[async]" + e;
  }

  function Zh(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + zt(n.href) + '"]');
          if (l) return ((t.instance = l), tt(l), l);
          var s = v({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            tt(l),
            rt(l, "style", s),
            Ys(l, n.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          s = dl(n.href);
          var o = e.querySelector(gi(s));
          if (o) return ((t.state.loading |= 4), (t.instance = o), tt(o), o);
          ((l = Xh(n)),
            (s = Yt.get(s)) && Jc(l, s),
            (o = (e.ownerDocument || e).createElement("link")),
            tt(o));
          var m = o;
          return (
            (m._p = new Promise(function (x, S) {
              ((m.onload = x), (m.onerror = S));
            })),
            rt(o, "link", l),
            (t.state.loading |= 4),
            Ys(o, n.precedence, e),
            (t.instance = o)
          );
        case "script":
          return (
            (o = ml(n.src)),
            (s = e.querySelector(yi(o)))
              ? ((t.instance = s), tt(s), s)
              : ((l = n),
                (s = Yt.get(o)) && ((l = v({}, n)), Pc(l, s)),
                (e = e.ownerDocument || e),
                (s = e.createElement("script")),
                tt(s),
                rt(s, "link", l),
                e.head.appendChild(s),
                (t.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Ys(l, n.precedence, e));
    return t.instance;
  }

  function Ys(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        s = l.length ? l[l.length - 1] : null,
        o = s,
        m = 0;
      m < l.length;
      m++
    ) {
      var x = l[m];
      if (x.dataset.precedence === t) o = x;
      else if (o !== s) break;
    }
    o
      ? o.parentNode.insertBefore(e, o.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }

  function Jc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }

  function Pc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Vs = null;

  function Kh(e, t, n) {
    if (Vs === null) {
      var l = new Map(),
        s = (Vs = new Map());
      s.set(n, l);
    } else ((s = Vs), (l = s.get(n)), l || ((l = new Map()), s.set(n, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), s = 0;
      s < n.length;
      s++
    ) {
      var o = n[s];
      if (
        !(
          o[Dl] ||
          o[at] ||
          (e === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var m = o.getAttribute(t) || "";
        m = e + m;
        var x = l.get(m);
        x ? x.push(o) : l.set(m, [o]);
      }
    }
    return l;
  }

  function $h(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }

  function s0(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }

  function Jh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }

  function r0(e, t, n, l) {
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = dl(l.href),
          o = t.querySelector(gi(s));
        if (o) {
          ((t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Qs.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = o),
            tt(o));
          return;
        }
        ((o = t.ownerDocument || t),
          (l = Xh(l)),
          (s = Yt.get(s)) && Jc(l, s),
          (o = o.createElement("link")),
          tt(o));
        var m = o;
        ((m._p = new Promise(function (x, S) {
          ((m.onload = x), (m.onerror = S));
        })),
          rt(o, "link", l),
          (n.instance = o));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Qs.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n)));
    }
  }
  var Fc = 0;

  function o0(e, t) {
    return (
      e.stylesheets && e.count === 0 && Zs(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Zs(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                ((e.unsuspend = null), o());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Fc === 0 && (Fc = 62500 * Yb());
            var s = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Zs(e, e.stylesheets), e.unsuspend))
                ) {
                  var o = e.unsuspend;
                  ((e.unsuspend = null), o());
                }
              },
              (e.imgBytes > Fc ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(l), clearTimeout(s));
              }
            );
          }
        : null
    );
  }

  function Qs() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Zs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Xs = null;

  function Zs(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Xs = new Map()),
        t.forEach(c0, e),
        (Xs = null),
        Qs.call(e)));
  }

  function c0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Xs.get(e);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), Xs.set(e, n));
        for (
          var s = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            o = 0;
          o < s.length;
          o++
        ) {
          var m = s[o];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") &&
            (n.set(m.dataset.precedence, m), (l = m));
        }
        l && n.set(null, l);
      }
      ((s = t.instance),
        (m = s.getAttribute("data-precedence")),
        (o = n.get(m) || l),
        o === l && n.set(null, s),
        n.set(m, s),
        this.count++,
        (l = Qs.bind(this)),
        s.addEventListener("load", l),
        s.addEventListener("error", l),
        o
          ? o.parentNode.insertBefore(s, o.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(s, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var xi = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: L,
    _currentValue2: L,
    _threadCount: 0,
  };

  function u0(e, t, n, l, s, o, m, x, S) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Xr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Xr(0)),
      (this.hiddenUpdates = Xr(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = s),
      (this.onCaughtError = o),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map()));
  }

  function Ph(e, t, n, l, s, o, m, x, S, M, B, Y) {
    return (
      (e = new u0(e, t, n, m, S, M, B, Y, x)),
      (t = 1),
      o === !0 && (t |= 24),
      (o = jt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (t = Ro()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (o.memoizedState = {
        element: l,
        isDehydrated: n,
        cache: t,
      }),
      zo(o),
      e
    );
  }

  function Fh(e) {
    return e ? ((e = Qa), e) : Qa;
  }

  function Wh(e, t, n, l, s, o) {
    ((s = Fh(s)),
      l.context === null ? (l.context = s) : (l.pendingContext = s),
      (l = Hn(t)),
      (l.payload = {
        element: n,
      }),
      (o = o === void 0 ? null : o),
      o !== null && (l.callback = o),
      (n = Bn(e, l, t)),
      n !== null && (vt(n, e, t), Pl(n, e, t)));
  }

  function Ih(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }

  function Wc(e, t) {
    (Ih(e, t), (e = e.alternate) && Ih(e, t));
  }

  function ep(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ha(e, 67108864);
      (t !== null && vt(t, e, 67108864), Wc(e, 67108864));
    }
  }

  function tp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ot();
      t = Zr(t);
      var n = ha(e, t);
      (n !== null && vt(n, e, t), Wc(e, t));
    }
  }
  var Ks = !0;

  function f0(e, t, n, l) {
    var s = R.T;
    R.T = null;
    var o = Q.p;
    try {
      ((Q.p = 2), Ic(e, t, n, l));
    } finally {
      ((Q.p = o), (R.T = s));
    }
  }

  function d0(e, t, n, l) {
    var s = R.T;
    R.T = null;
    var o = Q.p;
    try {
      ((Q.p = 8), Ic(e, t, n, l));
    } finally {
      ((Q.p = o), (R.T = s));
    }
  }

  function Ic(e, t, n, l) {
    if (Ks) {
      var s = eu(l);
      if (s === null) (Bc(e, t, l, $s, n), ap(e, l));
      else if (h0(s, e, t, n, l)) l.stopPropagation();
      else if ((ap(e, l), t & 4 && -1 < m0.indexOf(e))) {
        for (; s !== null; ) {
          var o = Da(s);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var m = ca(o.pendingLanes);
                  if (m !== 0) {
                    var x = o;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; m; ) {
                      var S = 1 << (31 - St(m));
                      ((x.entanglements[1] |= S), (m &= ~S));
                    }
                    (tn(o), (Ae & 6) === 0 && ((Rs = bt() + 500), di(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((x = ha(o, 2)), x !== null && vt(x, o, 2), Ms(), Wc(o, 2));
            }
          if (((o = eu(l)), o === null && Bc(e, t, l, $s, n), o === s)) break;
          s = o;
        }
        s !== null && l.stopPropagation();
      } else Bc(e, t, l, null, n);
    }
  }

  function eu(e) {
    return ((e = to(e)), tu(e));
  }
  var $s = null;

  function tu(e) {
    if ((($s = null), (e = Ma(e)), e !== null)) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = g(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (($s = e), null);
  }

  function np(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Wx()) {
          case uf:
            return 2;
          case ff:
            return 8;
          case Ui:
          case Ix:
            return 32;
          case df:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var nu = !1,
    Pn = null,
    Fn = null,
    Wn = null,
    vi = new Map(),
    bi = new Map(),
    In = [],
    m0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );

  function ap(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pn = null;
        break;
      case "dragenter":
      case "dragleave":
        Fn = null;
        break;
      case "mouseover":
      case "mouseout":
        Wn = null;
        break;
      case "pointerover":
      case "pointerout":
        vi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bi.delete(t.pointerId);
    }
  }

  function wi(e, t, n, l, s, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: o,
          targetContainers: [s],
        }),
        t !== null && ((t = Da(t)), t !== null && ep(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }

  function h0(e, t, n, l, s) {
    switch (t) {
      case "focusin":
        return ((Pn = wi(Pn, e, t, n, l, s)), !0);
      case "dragenter":
        return ((Fn = wi(Fn, e, t, n, l, s)), !0);
      case "mouseover":
        return ((Wn = wi(Wn, e, t, n, l, s)), !0);
      case "pointerover":
        var o = s.pointerId;
        return (vi.set(o, wi(vi.get(o) || null, e, t, n, l, s)), !0);
      case "gotpointercapture":
        return (
          (o = s.pointerId),
          bi.set(o, wi(bi.get(o) || null, e, t, n, l, s)),
          !0
        );
    }
    return !1;
  }

  function lp(e) {
    var t = Ma(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = h(n)), t !== null)) {
            ((e.blockedOn = t),
              xf(e.priority, function () {
                tp(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = g(n)), t !== null)) {
            ((e.blockedOn = t),
              xf(e.priority, function () {
                tp(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }

  function Js(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = eu(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((eo = l), n.target.dispatchEvent(l), (eo = null));
      } else return ((t = Da(n)), t !== null && ep(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }

  function ip(e, t, n) {
    Js(e) && n.delete(t);
  }

  function p0() {
    ((nu = !1),
      Pn !== null && Js(Pn) && (Pn = null),
      Fn !== null && Js(Fn) && (Fn = null),
      Wn !== null && Js(Wn) && (Wn = null),
      vi.forEach(ip),
      bi.forEach(ip));
  }

  function Ps(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      nu ||
        ((nu = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, p0)));
  }
  var Fs = null;

  function sp(e) {
    Fs !== e &&
      ((Fs = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Fs === e && (Fs = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            s = e[t + 2];
          if (typeof l != "function") {
            if (tu(l || n) === null) continue;
            break;
          }
          var o = Da(n);
          o !== null &&
            (e.splice(t, 3),
            (t -= 3),
            ec(
              o,
              {
                pending: !0,
                data: s,
                method: n.method,
                action: l,
              },
              l,
              s,
            ));
        }
      }));
  }

  function hl(e) {
    function t(S) {
      return Ps(S, e);
    }
    (Pn !== null && Ps(Pn, e),
      Fn !== null && Ps(Fn, e),
      Wn !== null && Ps(Wn, e),
      vi.forEach(t),
      bi.forEach(t));
    for (var n = 0; n < In.length; n++) {
      var l = In[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < In.length && ((n = In[0]), n.blockedOn === null); )
      (lp(n), n.blockedOn === null && In.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var s = n[l],
          o = n[l + 1],
          m = s[mt] || null;
        if (typeof o == "function") m || sp(n);
        else if (m) {
          var x = null;
          if (o && o.hasAttribute("formAction")) {
            if (((s = o), (m = o[mt] || null))) x = m.formAction;
            else if (tu(s) !== null) continue;
          } else x = m.action;
          (typeof x == "function" ? (n[l + 1] = x) : (n.splice(l, 3), (l -= 3)),
            sp(n));
        }
      }
  }

  function rp() {
    function e(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (m) {
              return (s = m);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }

    function t() {
      (s !== null && (s(), (s = null)), l || setTimeout(n, 20));
    }

    function n() {
      if (!l && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }

  function au(e) {
    this._internalRoot = e;
  }
  ((Ws.prototype.render = au.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var n = t.current,
        l = Ot();
      Wh(n, l, e, t, null, null);
    }),
    (Ws.prototype.unmount = au.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Wh(e.current, 2, null, e, null, null), Ms(), (t[_a] = null));
        }
      }));

  function Ws(e) {
    this._internalRoot = e;
  }
  Ws.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = yf();
      e = {
        blockedOn: null,
        target: e,
        priority: t,
      };
      for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++);
      (In.splice(n, 0, e), n === 0 && lp(e));
    }
  };
  var op = i.version;
  if (op !== "19.2.3") throw Error(c(527, op, "19.2.3"));
  Q.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(c(188))
        : ((e = Object.keys(e).join(",")), Error(c(268, e)));
    return (
      (e = p(t)),
      (e = e !== null ? w(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var g0 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Is.isDisabled && Is.supportsFiber)
      try {
        ((Rl = Is.inject(g0)), (wt = Is));
      } catch {}
  }
  return (
    (Ni.createRoot = function (e, t) {
      if (!f(e)) throw Error(c(299));
      var n = !1,
        l = "",
        s = pm,
        o = gm,
        m = ym;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
          t.onCaughtError !== void 0 && (o = t.onCaughtError),
          t.onRecoverableError !== void 0 && (m = t.onRecoverableError)),
        (t = Ph(e, 1, !1, null, null, n, l, null, s, o, m, rp)),
        (e[_a] = t.current),
        Hc(e),
        new au(t)
      );
    }),
    (Ni.hydrateRoot = function (e, t, n) {
      if (!f(e)) throw Error(c(299));
      var l = !1,
        s = "",
        o = pm,
        m = gm,
        x = ym,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (m = n.onCaughtError),
          n.onRecoverableError !== void 0 && (x = n.onRecoverableError),
          n.formState !== void 0 && (S = n.formState)),
        (t = Ph(e, 1, !0, t, n ?? null, l, s, S, o, m, x, rp)),
        (t.context = Fh(null)),
        (n = t.current),
        (l = Ot()),
        (l = Zr(l)),
        (s = Hn(l)),
        (s.callback = null),
        Bn(n, s, l),
        (n = l),
        (t.current.lanes = n),
        Ml(t, n),
        tn(t),
        (e[_a] = t.current),
        Hc(e),
        new Ws(t)
      );
    }),
    (Ni.version = "19.2.3"),
    Ni
  );
}
var xp;

function T0() {
  if (xp) return iu.exports;
  xp = 1;

  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (iu.exports = E0()), iu.exports);
}
var C0 = T0();

function A0(a, i) {
  if (a instanceof RegExp)
    return {
      keys: !1,
      pattern: a,
    };
  var r,
    c,
    f,
    d,
    h = [],
    g = "",
    y = a.split("/");
  for (y[0] || y.shift(); (f = y.shift()); )
    ((r = f[0]),
      r === "*"
        ? (h.push(r), (g += f[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : r === ":"
          ? ((c = f.indexOf("?", 1)),
            (d = f.indexOf(".", 1)),
            h.push(f.substring(1, ~c ? c : ~d ? d : f.length)),
            (g += ~c && !~d ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~d && (g += (~c ? "?" : "") + "\\" + f.substring(d)))
          : (g += "/" + f));
  return {
    keys: h,
    pattern: new RegExp("^" + g + (i ? "(?=$|/)" : "/?$"), "i"),
  };
}
var b = wr();
const Ke = mg(b),
  Sr = x0(
    {
      __proto__: null,
      default: Ke,
    },
    [b],
  );
var uu = {
    exports: {},
  },
  fu = {};
var vp;

function O0() {
  if (vp) return fu;
  vp = 1;
  var a = wr();

  function i(v, E) {
    return (v === E && (v !== 0 || 1 / v === 1 / E)) || (v !== v && E !== E);
  }
  var r = typeof Object.is == "function" ? Object.is : i,
    c = a.useState,
    f = a.useEffect,
    d = a.useLayoutEffect,
    h = a.useDebugValue;

  function g(v, E) {
    var A = E(),
      D = c({
        inst: {
          value: A,
          getSnapshot: E,
        },
      }),
      T = D[0].inst,
      O = D[1];
    return (
      d(
        function () {
          ((T.value = A),
            (T.getSnapshot = E),
            y(T) &&
              O({
                inst: T,
              }));
        },
        [v, A, E],
      ),
      f(
        function () {
          return (
            y(T) &&
              O({
                inst: T,
              }),
            v(function () {
              y(T) &&
                O({
                  inst: T,
                });
            })
          );
        },
        [v],
      ),
      h(A),
      A
    );
  }

  function y(v) {
    var E = v.getSnapshot;
    v = v.value;
    try {
      var A = E();
      return !r(v, A);
    } catch {
      return !0;
    }
  }

  function p(v, E) {
    return E();
  }
  var w =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? p
      : g;
  return (
    (fu.useSyncExternalStore =
      a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : w),
    fu
  );
}
var bp;

function R0() {
  return (bp || ((bp = 1), (uu.exports = O0())), uu.exports);
}
var _0 = R0();
const M0 = Sr.useInsertionEffect,
  D0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  z0 = D0 ? b.useLayoutEffect : b.useEffect,
  k0 = M0 || z0,
  pg = (a) => {
    const i = b.useRef([a, (...r) => i[0](...r)]).current;
    return (
      k0(() => {
        i[0] = a;
      }),
      i[1]
    );
  },
  L0 = "popstate",
  ku = "pushState",
  Lu = "replaceState",
  U0 = "hashchange",
  wp = [L0, ku, Lu, U0],
  H0 = (a) => {
    for (const i of wp) addEventListener(i, a);
    return () => {
      for (const i of wp) removeEventListener(i, a);
    };
  },
  gg = (a, i) => _0.useSyncExternalStore(H0, a, i),
  Sp = () => location.search,
  B0 = ({ ssrSearch: a } = {}) => gg(Sp, a != null ? () => a : Sp),
  Np = () => location.pathname,
  q0 = ({ ssrPath: a } = {}) => gg(Np, a != null ? () => a : Np),
  G0 = (a, { replace: i = !1, state: r = null } = {}) =>
    history[i ? Lu : ku](r, "", a),
  Y0 = (a = {}) => [q0(a), G0],
  jp = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[jp] > "u") {
  for (const a of [ku, Lu]) {
    const i = history[a];
    history[a] = function () {
      const r = i.apply(this, arguments),
        c = new Event(a);
      return ((c.arguments = arguments), dispatchEvent(c), r);
    };
  }
  Object.defineProperty(window, jp, {
    value: !0,
  });
}
const V0 = (a, i) =>
    i.toLowerCase().indexOf(a.toLowerCase())
      ? "~" + i
      : i.slice(a.length) || "/",
  yg = (a = "") => (a === "/" ? "" : a),
  Q0 = (a, i) => (a[0] === "~" ? a.slice(1) : yg(i) + a),
  X0 = (a = "", i) => V0(Ep(yg(a)), Ep(i)),
  Ep = (a) => {
    try {
      return decodeURI(a);
    } catch {
      return a;
    }
  },
  xg = {
    hook: Y0,
    searchHook: B0,
    parser: A0,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (a) => a,
    aroundNav: (a, i, r) => a(i, r),
  },
  vg = b.createContext(xg),
  Mi = () => b.useContext(vg),
  bg = {},
  wg = b.createContext(bg),
  Z0 = () => b.useContext(wg),
  Nr = (a) => {
    const [i, r] = a.hook(a);
    return [X0(a.base, i), pg((c, f) => a.aroundNav(r, Q0(c, a.base), f))];
  },
  Sg = () => Nr(Mi()),
  Ng = (a, i, r, c) => {
    const { pattern: f, keys: d } =
        i instanceof RegExp
          ? {
              keys: !1,
              pattern: i,
            }
          : a(i || "*", c),
      h = f.exec(r) || [],
      [g, ...y] = h;
    return g !== void 0
      ? [
          !0,
          (() => {
            const p =
              d !== !1
                ? Object.fromEntries(d.map((v, E) => [v, y[E]]))
                : h.groups;
            let w = {
              ...y,
            };
            return (p && Object.assign(w, p), w);
          })(),
          ...(c ? [g] : []),
        ]
      : [!1, null];
  },
  K0 = ({ children: a, ...i }) => {
    const r = Mi(),
      c = i.hook ? xg : r;
    let f = c;
    const [d, h = i.ssrSearch ?? ""] = i.ssrPath?.split("?") ?? [];
    (d && ((i.ssrSearch = h), (i.ssrPath = d)),
      (i.hrefs = i.hrefs ?? i.hook?.hrefs),
      (i.searchHook = i.searchHook ?? i.hook?.searchHook));
    let g = b.useRef({}),
      y = g.current,
      p = y;
    for (let w in c) {
      const v = w === "base" ? c[w] + (i[w] ?? "") : (i[w] ?? c[w]);
      (y === p &&
        v !== p[w] &&
        (g.current = p =
          {
            ...p,
          }),
        (p[w] = v),
        (v !== c[w] || v !== f[w]) && (f = p));
    }
    return b.createElement(vg.Provider, {
      value: f,
      children: a,
    });
  },
  Tp = ({ children: a, component: i }, r) =>
    i
      ? b.createElement(i, {
          params: r,
        })
      : typeof a == "function"
        ? a(r)
        : a,
  $0 = (a) => {
    let i = b.useRef(bg);
    const r = i.current;
    return (i.current =
      Object.keys(a).length !== Object.keys(r).length ||
      Object.entries(a).some(([c, f]) => f !== r[c])
        ? a
        : r);
  },
  pl = ({ path: a, nest: i, match: r, ...c }) => {
    const f = Mi(),
      [d] = Nr(f),
      [h, g, y] = r ?? Ng(f.parser, a, d, i),
      p = $0({
        ...Z0(),
        ...g,
      });
    if (!h) return null;
    const w = y
      ? b.createElement(
          K0,
          {
            base: y,
          },
          Tp(c, p),
        )
      : Tp(c, p);
    return b.createElement(wg.Provider, {
      value: p,
      children: w,
    });
  },
  Ne = b.forwardRef((a, i) => {
    const r = Mi(),
      [c, f] = Nr(r),
      {
        to: d = "",
        href: h = d,
        onClick: g,
        asChild: y,
        children: p,
        className: w,
        replace: v,
        state: E,
        transition: A,
        ...D
      } = a,
      T = pg((U) => {
        U.ctrlKey ||
          U.metaKey ||
          U.altKey ||
          U.shiftKey ||
          U.button !== 0 ||
          (g?.(U), U.defaultPrevented || (U.preventDefault(), f(h, a)));
      }),
      O = r.hrefs(h[0] === "~" ? h.slice(1) : r.base + h, r);
    return y && b.isValidElement(p)
      ? b.cloneElement(p, {
          onClick: T,
          href: O,
        })
      : b.createElement("a", {
          ...D,
          onClick: T,
          href: O,
          className: w?.call ? w(c === h) : w,
          children: p,
          ref: i,
        });
  }),
  jg = (a) =>
    Array.isArray(a)
      ? a.flatMap((i) => jg(i && i.type === b.Fragment ? i.props.children : i))
      : [a],
  J0 = ({ children: a, location: i }) => {
    const r = Mi(),
      [c] = Nr(r);
    for (const f of jg(a)) {
      let d = 0;
      if (
        b.isValidElement(f) &&
        (d = Ng(r.parser, f.props.path, i || c, f.props.nest))[0]
      )
        return b.cloneElement(f, {
          match: d,
        });
    }
    return null;
  };
var jr = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(a) {
      return (
        this.listeners.add(a),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(a), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  P0 = {
    setTimeout: (a, i) => setTimeout(a, i),
    clearTimeout: (a) => clearTimeout(a),
    setInterval: (a, i) => setInterval(a, i),
    clearInterval: (a) => clearInterval(a),
  },
  F0 = class {
    #e = P0;
    #t = !1;
    setTimeoutProvider(a) {
      this.#e = a;
    }
    setTimeout(a, i) {
      return this.#e.setTimeout(a, i);
    }
    clearTimeout(a) {
      this.#e.clearTimeout(a);
    }
    setInterval(a, i) {
      return this.#e.setInterval(a, i);
    }
    clearInterval(a) {
      this.#e.clearInterval(a);
    }
  },
  vu = new F0();

function W0(a) {
  setTimeout(a, 0);
}
var Er = typeof window > "u" || "Deno" in globalThis;

function Zt() {}

function I0(a, i) {
  return typeof a == "function" ? a(i) : a;
}

function e1(a) {
  return typeof a == "number" && a >= 0 && a !== 1 / 0;
}

function t1(a, i) {
  return Math.max(a + (i || 0) - Date.now(), 0);
}

function bu(a, i) {
  return typeof a == "function" ? a(i) : a;
}

function n1(a, i) {
  return typeof a == "function" ? a(i) : a;
}

function Cp(a, i) {
  const {
    type: r = "all",
    exact: c,
    fetchStatus: f,
    predicate: d,
    queryKey: h,
    stale: g,
  } = a;
  if (h) {
    if (c) {
      if (i.queryHash !== Uu(h, i.options)) return !1;
    } else if (!Oi(i.queryKey, h)) return !1;
  }
  if (r !== "all") {
    const y = i.isActive();
    if ((r === "active" && !y) || (r === "inactive" && y)) return !1;
  }
  return !(
    (typeof g == "boolean" && i.isStale() !== g) ||
    (f && f !== i.state.fetchStatus) ||
    (d && !d(i))
  );
}

function Ap(a, i) {
  const { exact: r, status: c, predicate: f, mutationKey: d } = a;
  if (d) {
    if (!i.options.mutationKey) return !1;
    if (r) {
      if (Ai(i.options.mutationKey) !== Ai(d)) return !1;
    } else if (!Oi(i.options.mutationKey, d)) return !1;
  }
  return !((c && i.state.status !== c) || (f && !f(i)));
}

function Uu(a, i) {
  return (i?.queryKeyHashFn || Ai)(a);
}

function Ai(a) {
  return JSON.stringify(a, (i, r) =>
    wu(r)
      ? Object.keys(r)
          .sort()
          .reduce((c, f) => ((c[f] = r[f]), c), {})
      : r,
  );
}

function Oi(a, i) {
  return a === i
    ? !0
    : typeof a != typeof i
      ? !1
      : a && i && typeof a == "object" && typeof i == "object"
        ? Object.keys(i).every((r) => Oi(a[r], i[r]))
        : !1;
}
var a1 = Object.prototype.hasOwnProperty;

function Eg(a, i, r = 0) {
  if (a === i) return a;
  if (r > 500) return i;
  const c = Op(a) && Op(i);
  if (!c && !(wu(a) && wu(i))) return i;
  const d = (c ? a : Object.keys(a)).length,
    h = c ? i : Object.keys(i),
    g = h.length,
    y = c ? new Array(g) : {};
  let p = 0;
  for (let w = 0; w < g; w++) {
    const v = c ? w : h[w],
      E = a[v],
      A = i[v];
    if (E === A) {
      ((y[v] = E), (c ? w < d : a1.call(a, v)) && p++);
      continue;
    }
    if (
      E === null ||
      A === null ||
      typeof E != "object" ||
      typeof A != "object"
    ) {
      y[v] = A;
      continue;
    }
    const D = Eg(E, A, r + 1);
    ((y[v] = D), D === E && p++);
  }
  return d === g && p === d ? a : y;
}

function Op(a) {
  return Array.isArray(a) && a.length === Object.keys(a).length;
}

function wu(a) {
  if (!Rp(a)) return !1;
  const i = a.constructor;
  if (i === void 0) return !0;
  const r = i.prototype;
  return !(
    !Rp(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(a) !== Object.prototype
  );
}

function Rp(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}

function l1(a) {
  return new Promise((i) => {
    vu.setTimeout(i, a);
  });
}

function i1(a, i, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(a, i)
    : r.structuralSharing !== !1
      ? Eg(a, i)
      : i;
}

function s1(a, i, r = 0) {
  const c = [...a, i];
  return r && c.length > r ? c.slice(1) : c;
}

function r1(a, i, r = 0) {
  const c = [i, ...a];
  return r && c.length > r ? c.slice(0, -1) : c;
}
var Hu = Symbol();

function Tg(a, i) {
  return !a.queryFn && i?.initialPromise
    ? () => i.initialPromise
    : !a.queryFn || a.queryFn === Hu
      ? () => Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`))
      : a.queryFn;
}

function o1(a, i, r) {
  let c = !1,
    f;
  return (
    Object.defineProperty(a, "signal", {
      enumerable: !0,
      get: () => (
        (f ??= i()),
        c ||
          ((c = !0),
          f.aborted
            ? r()
            : f.addEventListener("abort", r, {
                once: !0,
              })),
        f
      ),
    }),
    a
  );
}
var c1 = class extends jr {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (a) => {
          if (!Er && window.addEventListener) {
            const i = () => a();
            return (
              window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(a) {
      ((this.#n = a),
        this.#t?.(),
        (this.#t = a((i) => {
          typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
        })));
    }
    setFocused(a) {
      this.#e !== a && ((this.#e = a), this.onFocus());
    }
    onFocus() {
      const a = this.isFocused();
      this.listeners.forEach((i) => {
        i(a);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  Cg = new c1();

function u1() {
  let a, i;
  const r = new Promise((f, d) => {
    ((a = f), (i = d));
  });
  ((r.status = "pending"), r.catch(() => {}));

  function c(f) {
    (Object.assign(r, f), delete r.resolve, delete r.reject);
  }
  return (
    (r.resolve = (f) => {
      (c({
        status: "fulfilled",
        value: f,
      }),
        a(f));
    }),
    (r.reject = (f) => {
      (c({
        status: "rejected",
        reason: f,
      }),
        i(f));
    }),
    r
  );
}
var f1 = W0;

function d1() {
  let a = [],
    i = 0,
    r = (g) => {
      g();
    },
    c = (g) => {
      g();
    },
    f = f1;
  const d = (g) => {
      i
        ? a.push(g)
        : f(() => {
            r(g);
          });
    },
    h = () => {
      const g = a;
      ((a = []),
        g.length &&
          f(() => {
            c(() => {
              g.forEach((y) => {
                r(y);
              });
            });
          }));
    };
  return {
    batch: (g) => {
      let y;
      i++;
      try {
        y = g();
      } finally {
        (i--, i || h());
      }
      return y;
    },
    batchCalls:
      (g) =>
      (...y) => {
        d(() => {
          g(...y);
        });
      },
    schedule: d,
    setNotifyFunction: (g) => {
      r = g;
    },
    setBatchNotifyFunction: (g) => {
      c = g;
    },
    setScheduler: (g) => {
      f = g;
    },
  };
}
var ft = d1(),
  m1 = class extends jr {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (a) => {
          if (!Er && window.addEventListener) {
            const i = () => a(!0),
              r = () => a(!1);
            return (
              window.addEventListener("online", i, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", i),
                  window.removeEventListener("offline", r));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(a) {
      ((this.#n = a), this.#t?.(), (this.#t = a(this.setOnline.bind(this))));
    }
    setOnline(a) {
      this.#e !== a &&
        ((this.#e = a),
        this.listeners.forEach((r) => {
          r(a);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  dr = new m1();

function h1(a) {
  return Math.min(1e3 * 2 ** a, 3e4);
}

function Ag(a) {
  return (a ?? "online") === "online" ? dr.isOnline() : !0;
}
var Su = class extends Error {
  constructor(a) {
    (super("CancelledError"),
      (this.revert = a?.revert),
      (this.silent = a?.silent));
  }
};

function Og(a) {
  let i = !1,
    r = 0,
    c;
  const f = u1(),
    d = () => f.status !== "pending",
    h = (T) => {
      if (!d()) {
        const O = new Su(T);
        (E(O), a.onCancel?.(O));
      }
    },
    g = () => {
      i = !0;
    },
    y = () => {
      i = !1;
    },
    p = () =>
      Cg.isFocused() &&
      (a.networkMode === "always" || dr.isOnline()) &&
      a.canRun(),
    w = () => Ag(a.networkMode) && a.canRun(),
    v = (T) => {
      d() || (c?.(), f.resolve(T));
    },
    E = (T) => {
      d() || (c?.(), f.reject(T));
    },
    A = () =>
      new Promise((T) => {
        ((c = (O) => {
          (d() || p()) && T(O);
        }),
          a.onPause?.());
      }).then(() => {
        ((c = void 0), d() || a.onContinue?.());
      }),
    D = () => {
      if (d()) return;
      let T;
      const O = r === 0 ? a.initialPromise : void 0;
      try {
        T = O ?? a.fn();
      } catch (U) {
        T = Promise.reject(U);
      }
      Promise.resolve(T)
        .then(v)
        .catch((U) => {
          if (d()) return;
          const H = a.retry ?? (Er ? 0 : 3),
            V = a.retryDelay ?? h1,
            Z = typeof V == "function" ? V(r, U) : V,
            J =
              H === !0 ||
              (typeof H == "number" && r < H) ||
              (typeof H == "function" && H(r, U));
          if (i || !J) {
            E(U);
            return;
          }
          (r++,
            a.onFail?.(r, U),
            l1(Z)
              .then(() => (p() ? void 0 : A()))
              .then(() => {
                i ? E(U) : D();
              }));
        });
    };
  return {
    promise: f,
    status: () => f.status,
    cancel: h,
    continue: () => (c?.(), f),
    cancelRetry: g,
    continueRetry: y,
    canStart: w,
    start: () => (w() ? D() : A().then(D), f),
  };
}
var Rg = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        e1(this.gcTime) &&
          (this.#e = vu.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(a) {
      this.gcTime = Math.max(this.gcTime || 0, a ?? (Er ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e && (vu.clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  p1 = class extends Rg {
    #e;
    #t;
    #n;
    #l;
    #a;
    #s;
    #r;
    constructor(a) {
      (super(),
        (this.#r = !1),
        (this.#s = a.defaultOptions),
        this.setOptions(a.options),
        (this.observers = []),
        (this.#l = a.client),
        (this.#n = this.#l.getQueryCache()),
        (this.queryKey = a.queryKey),
        (this.queryHash = a.queryHash),
        (this.#e = Mp(this.options)),
        (this.state = a.state ?? this.#e),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#a?.promise;
    }
    setOptions(a) {
      if (
        ((this.options = {
          ...this.#s,
          ...a,
        }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const i = Mp(this.options);
        i.data !== void 0 &&
          (this.setState(_p(i.data, i.dataUpdatedAt)), (this.#e = i));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#n.remove(this);
    }
    setData(a, i) {
      const r = i1(this.state.data, a, this.options);
      return (
        this.#i({
          data: r,
          type: "success",
          dataUpdatedAt: i?.updatedAt,
          manual: i?.manual,
        }),
        r
      );
    }
    setState(a, i) {
      this.#i({
        type: "setState",
        state: a,
        setStateOptions: i,
      });
    }
    cancel(a) {
      const i = this.#a?.promise;
      return (this.#a?.cancel(a), i ? i.then(Zt).catch(Zt) : Promise.resolve());
    }
    destroy() {
      (super.destroy(),
        this.cancel({
          silent: !0,
        }));
    }
    reset() {
      (this.destroy(), this.setState(this.#e));
    }
    isActive() {
      return this.observers.some((a) => n1(a.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === Hu ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((a) => bu(a.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((a) => a.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(a = 0) {
      return this.state.data === void 0
        ? !0
        : a === "static"
          ? !1
          : this.state.isInvalidated
            ? !0
            : !t1(this.state.dataUpdatedAt, a);
    }
    onFocus() {
      (this.observers
        .find((i) => i.shouldFetchOnWindowFocus())
        ?.refetch({
          cancelRefetch: !1,
        }),
        this.#a?.continue());
    }
    onOnline() {
      (this.observers
        .find((i) => i.shouldFetchOnReconnect())
        ?.refetch({
          cancelRefetch: !1,
        }),
        this.#a?.continue());
    }
    addObserver(a) {
      this.observers.includes(a) ||
        (this.observers.push(a),
        this.clearGcTimeout(),
        this.#n.notify({
          type: "observerAdded",
          query: this,
          observer: a,
        }));
    }
    removeObserver(a) {
      this.observers.includes(a) &&
        ((this.observers = this.observers.filter((i) => i !== a)),
        this.observers.length ||
          (this.#a &&
            (this.#r
              ? this.#a.cancel({
                  revert: !0,
                })
              : this.#a.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({
          type: "observerRemoved",
          query: this,
          observer: a,
        }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated ||
        this.#i({
          type: "invalidate",
        });
    }
    async fetch(a, i) {
      if (
        this.state.fetchStatus !== "idle" &&
        this.#a?.status() !== "rejected"
      ) {
        if (this.state.data !== void 0 && i?.cancelRefetch)
          this.cancel({
            silent: !0,
          });
        else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
      }
      if ((a && this.setOptions(a), !this.options.queryFn)) {
        const g = this.observers.find((y) => y.options.queryFn);
        g && this.setOptions(g.options);
      }
      const r = new AbortController(),
        c = (g) => {
          Object.defineProperty(g, "signal", {
            enumerable: !0,
            get: () => ((this.#r = !0), r.signal),
          });
        },
        f = () => {
          const g = Tg(this.options, i),
            p = (() => {
              const w = {
                client: this.#l,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return (c(w), w);
            })();
          return (
            (this.#r = !1),
            this.options.persister ? this.options.persister(g, p, this) : g(p)
          );
        },
        h = (() => {
          const g = {
            fetchOptions: i,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#l,
            state: this.state,
            fetchFn: f,
          };
          return (c(g), g);
        })();
      (this.options.behavior?.onFetch(h, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== h.fetchOptions?.meta) &&
          this.#i({
            type: "fetch",
            meta: h.fetchOptions?.meta,
          }),
        (this.#a = Og({
          initialPromise: i?.initialPromise,
          fn: h.fetchFn,
          onCancel: (g) => {
            (g instanceof Su &&
              g.revert &&
              this.setState({
                ...this.#t,
                fetchStatus: "idle",
              }),
              r.abort());
          },
          onFail: (g, y) => {
            this.#i({
              type: "failed",
              failureCount: g,
              error: y,
            });
          },
          onPause: () => {
            this.#i({
              type: "pause",
            });
          },
          onContinue: () => {
            this.#i({
              type: "continue",
            });
          },
          retry: h.options.retry,
          retryDelay: h.options.retryDelay,
          networkMode: h.options.networkMode,
          canRun: () => !0,
        })));
      try {
        const g = await this.#a.start();
        if (g === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(g),
          this.#n.config.onSuccess?.(g, this),
          this.#n.config.onSettled?.(g, this.state.error, this),
          g
        );
      } catch (g) {
        if (g instanceof Su) {
          if (g.silent) return this.#a.promise;
          if (g.revert) {
            if (this.state.data === void 0) throw g;
            return this.state.data;
          }
        }
        throw (
          this.#i({
            type: "error",
            error: g,
          }),
          this.#n.config.onError?.(g, this),
          this.#n.config.onSettled?.(this.state.data, g, this),
          g
        );
      } finally {
        this.scheduleGc();
      }
    }
    #i(a) {
      const i = (r) => {
        switch (a.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: a.failureCount,
              fetchFailureReason: a.error,
            };
          case "pause":
            return {
              ...r,
              fetchStatus: "paused",
            };
          case "continue":
            return {
              ...r,
              fetchStatus: "fetching",
            };
          case "fetch":
            return {
              ...r,
              ...g1(r.data, this.options),
              fetchMeta: a.meta ?? null,
            };
          case "success":
            const c = {
              ...r,
              ..._p(a.data, a.dataUpdatedAt),
              dataUpdateCount: r.dataUpdateCount + 1,
              ...(!a.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return ((this.#t = a.manual ? c : void 0), c);
          case "error":
            const f = a.error;
            return {
              ...r,
              error: f,
              errorUpdateCount: r.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: r.fetchFailureCount + 1,
              fetchFailureReason: f,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return {
              ...r,
              isInvalidated: !0,
            };
          case "setState":
            return {
              ...r,
              ...a.state,
            };
        }
      };
      ((this.state = i(this.state)),
        ft.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            this.#n.notify({
              query: this,
              type: "updated",
              action: a,
            }));
        }));
    }
  };

function g1(a, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ag(i.networkMode) ? "fetching" : "paused",
    ...(a === void 0 && {
      error: null,
      status: "pending",
    }),
  };
}

function _p(a, i) {
  return {
    data: a,
    dataUpdatedAt: i ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}

function Mp(a) {
  const i =
      typeof a.initialData == "function" ? a.initialData() : a.initialData,
    r = i !== void 0,
    c = r
      ? typeof a.initialDataUpdatedAt == "function"
        ? a.initialDataUpdatedAt()
        : a.initialDataUpdatedAt
      : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (c ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}

function Dp(a) {
  return {
    onFetch: (i, r) => {
      const c = i.options,
        f = i.fetchOptions?.meta?.fetchMore?.direction,
        d = i.state.data?.pages || [],
        h = i.state.data?.pageParams || [];
      let g = {
          pages: [],
          pageParams: [],
        },
        y = 0;
      const p = async () => {
        let w = !1;
        const v = (D) => {
            o1(
              D,
              () => i.signal,
              () => (w = !0),
            );
          },
          E = Tg(i.options, i.fetchOptions),
          A = async (D, T, O) => {
            if (w) return Promise.reject();
            if (T == null && D.pages.length) return Promise.resolve(D);
            const H = (() => {
                const F = {
                  client: i.client,
                  queryKey: i.queryKey,
                  pageParam: T,
                  direction: O ? "backward" : "forward",
                  meta: i.options.meta,
                };
                return (v(F), F);
              })(),
              V = await E(H),
              { maxPages: Z } = i.options,
              J = O ? r1 : s1;
            return {
              pages: J(D.pages, V, Z),
              pageParams: J(D.pageParams, T, Z),
            };
          };
        if (f && d.length) {
          const D = f === "backward",
            T = D ? y1 : zp,
            O = {
              pages: d,
              pageParams: h,
            },
            U = T(c, O);
          g = await A(O, U, D);
        } else {
          const D = a ?? d.length;
          do {
            const T = y === 0 ? (h[0] ?? c.initialPageParam) : zp(c, g);
            if (y > 0 && T == null) break;
            ((g = await A(g, T)), y++);
          } while (y < D);
        }
        return g;
      };
      i.options.persister
        ? (i.fetchFn = () =>
            i.options.persister?.(
              p,
              {
                client: i.client,
                queryKey: i.queryKey,
                meta: i.options.meta,
                signal: i.signal,
              },
              r,
            ))
        : (i.fetchFn = p);
    },
  };
}

function zp(a, { pages: i, pageParams: r }) {
  const c = i.length - 1;
  return i.length > 0 ? a.getNextPageParam(i[c], i, r[c], r) : void 0;
}

function y1(a, { pages: i, pageParams: r }) {
  return i.length > 0 ? a.getPreviousPageParam?.(i[0], i, r[0], r) : void 0;
}
var x1 = class extends Rg {
  #e;
  #t;
  #n;
  #l;
  constructor(a) {
    (super(),
      (this.#e = a.client),
      (this.mutationId = a.mutationId),
      (this.#n = a.mutationCache),
      (this.#t = []),
      (this.state = a.state || v1()),
      this.setOptions(a.options),
      this.scheduleGc());
  }
  setOptions(a) {
    ((this.options = a), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(a) {
    this.#t.includes(a) ||
      (this.#t.push(a),
      this.clearGcTimeout(),
      this.#n.notify({
        type: "observerAdded",
        mutation: this,
        observer: a,
      }));
  }
  removeObserver(a) {
    ((this.#t = this.#t.filter((i) => i !== a)),
      this.scheduleGc(),
      this.#n.notify({
        type: "observerRemoved",
        mutation: this,
        observer: a,
      }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#l?.continue() ?? this.execute(this.state.variables);
  }
  async execute(a) {
    const i = () => {
        this.#a({
          type: "continue",
        });
      },
      r = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#l = Og({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(a, r)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (d, h) => {
        this.#a({
          type: "failed",
          failureCount: d,
          error: h,
        });
      },
      onPause: () => {
        this.#a({
          type: "pause",
        });
      },
      onContinue: i,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const c = this.state.status === "pending",
      f = !this.#l.canStart();
    try {
      if (c) i();
      else {
        (this.#a({
          type: "pending",
          variables: a,
          isPaused: f,
        }),
          await this.#n.config.onMutate?.(a, this, r));
        const h = await this.options.onMutate?.(a, r);
        h !== this.state.context &&
          this.#a({
            type: "pending",
            context: h,
            variables: a,
            isPaused: f,
          });
      }
      const d = await this.#l.start();
      return (
        await this.#n.config.onSuccess?.(d, a, this.state.context, this, r),
        await this.options.onSuccess?.(d, a, this.state.context, r),
        await this.#n.config.onSettled?.(
          d,
          null,
          this.state.variables,
          this.state.context,
          this,
          r,
        ),
        await this.options.onSettled?.(d, null, a, this.state.context, r),
        this.#a({
          type: "success",
          data: d,
        }),
        d
      );
    } catch (d) {
      try {
        await this.#n.config.onError?.(d, a, this.state.context, this, r);
      } catch (h) {
        Promise.reject(h);
      }
      try {
        await this.options.onError?.(d, a, this.state.context, r);
      } catch (h) {
        Promise.reject(h);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          d,
          this.state.variables,
          this.state.context,
          this,
          r,
        );
      } catch (h) {
        Promise.reject(h);
      }
      try {
        await this.options.onSettled?.(void 0, d, a, this.state.context, r);
      } catch (h) {
        Promise.reject(h);
      }
      throw (
        this.#a({
          type: "error",
          error: d,
        }),
        d
      );
    } finally {
      this.#n.runNext(this);
    }
  }
  #a(a) {
    const i = (r) => {
      switch (a.type) {
        case "failed":
          return {
            ...r,
            failureCount: a.failureCount,
            failureReason: a.error,
          };
        case "pause":
          return {
            ...r,
            isPaused: !0,
          };
        case "continue":
          return {
            ...r,
            isPaused: !1,
          };
        case "pending":
          return {
            ...r,
            context: a.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: a.isPaused,
            status: "pending",
            variables: a.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...r,
            data: a.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: a.error,
            failureCount: r.failureCount + 1,
            failureReason: a.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = i(this.state)),
      ft.batch(() => {
        (this.#t.forEach((r) => {
          r.onMutationUpdate(a);
        }),
          this.#n.notify({
            mutation: this,
            type: "updated",
            action: a,
          }));
      }));
  }
};

function v1() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var b1 = class extends jr {
  constructor(a = {}) {
    (super(),
      (this.config = a),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(a, i, r) {
    const c = new x1({
      client: a,
      mutationCache: this,
      mutationId: ++this.#n,
      options: a.defaultMutationOptions(i),
      state: r,
    });
    return (this.add(c), c);
  }
  add(a) {
    this.#e.add(a);
    const i = er(a);
    if (typeof i == "string") {
      const r = this.#t.get(i);
      r ? r.push(a) : this.#t.set(i, [a]);
    }
    this.notify({
      type: "added",
      mutation: a,
    });
  }
  remove(a) {
    if (this.#e.delete(a)) {
      const i = er(a);
      if (typeof i == "string") {
        const r = this.#t.get(i);
        if (r)
          if (r.length > 1) {
            const c = r.indexOf(a);
            c !== -1 && r.splice(c, 1);
          } else r[0] === a && this.#t.delete(i);
      }
    }
    this.notify({
      type: "removed",
      mutation: a,
    });
  }
  canRun(a) {
    const i = er(a);
    if (typeof i == "string") {
      const c = this.#t.get(i)?.find((f) => f.state.status === "pending");
      return !c || c === a;
    } else return !0;
  }
  runNext(a) {
    const i = er(a);
    return typeof i == "string"
      ? (this.#t
          .get(i)
          ?.find((c) => c !== a && c.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    ft.batch(() => {
      (this.#e.forEach((a) => {
        this.notify({
          type: "removed",
          mutation: a,
        });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(a) {
    const i = {
      exact: !0,
      ...a,
    };
    return this.getAll().find((r) => Ap(i, r));
  }
  findAll(a = {}) {
    return this.getAll().filter((i) => Ap(a, i));
  }
  notify(a) {
    ft.batch(() => {
      this.listeners.forEach((i) => {
        i(a);
      });
    });
  }
  resumePausedMutations() {
    const a = this.getAll().filter((i) => i.state.isPaused);
    return ft.batch(() => Promise.all(a.map((i) => i.continue().catch(Zt))));
  }
};

function er(a) {
  return a.options.scope?.id;
}
var w1 = class extends jr {
    constructor(a = {}) {
      (super(), (this.config = a), (this.#e = new Map()));
    }
    #e;
    build(a, i, r) {
      const c = i.queryKey,
        f = i.queryHash ?? Uu(c, i);
      let d = this.get(f);
      return (
        d ||
          ((d = new p1({
            client: a,
            queryKey: c,
            queryHash: f,
            options: a.defaultQueryOptions(i),
            state: r,
            defaultOptions: a.getQueryDefaults(c),
          })),
          this.add(d)),
        d
      );
    }
    add(a) {
      this.#e.has(a.queryHash) ||
        (this.#e.set(a.queryHash, a),
        this.notify({
          type: "added",
          query: a,
        }));
    }
    remove(a) {
      const i = this.#e.get(a.queryHash);
      i &&
        (a.destroy(),
        i === a && this.#e.delete(a.queryHash),
        this.notify({
          type: "removed",
          query: a,
        }));
    }
    clear() {
      ft.batch(() => {
        this.getAll().forEach((a) => {
          this.remove(a);
        });
      });
    }
    get(a) {
      return this.#e.get(a);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(a) {
      const i = {
        exact: !0,
        ...a,
      };
      return this.getAll().find((r) => Cp(i, r));
    }
    findAll(a = {}) {
      const i = this.getAll();
      return Object.keys(a).length > 0 ? i.filter((r) => Cp(a, r)) : i;
    }
    notify(a) {
      ft.batch(() => {
        this.listeners.forEach((i) => {
          i(a);
        });
      });
    }
    onFocus() {
      ft.batch(() => {
        this.getAll().forEach((a) => {
          a.onFocus();
        });
      });
    }
    onOnline() {
      ft.batch(() => {
        this.getAll().forEach((a) => {
          a.onOnline();
        });
      });
    }
  },
  S1 = class {
    #e;
    #t;
    #n;
    #l;
    #a;
    #s;
    #r;
    #i;
    constructor(a = {}) {
      ((this.#e = a.queryCache || new w1()),
        (this.#t = a.mutationCache || new b1()),
        (this.#n = a.defaultOptions || {}),
        (this.#l = new Map()),
        (this.#a = new Map()),
        (this.#s = 0));
    }
    mount() {
      (this.#s++,
        this.#s === 1 &&
          ((this.#r = Cg.subscribe(async (a) => {
            a && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#i = dr.subscribe(async (a) => {
            a && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#s--,
        this.#s === 0 &&
          (this.#r?.(), (this.#r = void 0), this.#i?.(), (this.#i = void 0)));
    }
    isFetching(a) {
      return this.#e.findAll({
        ...a,
        fetchStatus: "fetching",
      }).length;
    }
    isMutating(a) {
      return this.#t.findAll({
        ...a,
        status: "pending",
      }).length;
    }
    getQueryData(a) {
      const i = this.defaultQueryOptions({
        queryKey: a,
      });
      return this.#e.get(i.queryHash)?.state.data;
    }
    ensureQueryData(a) {
      const i = this.defaultQueryOptions(a),
        r = this.#e.build(this, i),
        c = r.state.data;
      return c === void 0
        ? this.fetchQuery(a)
        : (a.revalidateIfStale &&
            r.isStaleByTime(bu(i.staleTime, r)) &&
            this.prefetchQuery(i),
          Promise.resolve(c));
    }
    getQueriesData(a) {
      return this.#e.findAll(a).map(({ queryKey: i, state: r }) => {
        const c = r.data;
        return [i, c];
      });
    }
    setQueryData(a, i, r) {
      const c = this.defaultQueryOptions({
          queryKey: a,
        }),
        d = this.#e.get(c.queryHash)?.state.data,
        h = I0(i, d);
      if (h !== void 0)
        return this.#e.build(this, c).setData(h, {
          ...r,
          manual: !0,
        });
    }
    setQueriesData(a, i, r) {
      return ft.batch(() =>
        this.#e
          .findAll(a)
          .map(({ queryKey: c }) => [c, this.setQueryData(c, i, r)]),
      );
    }
    getQueryState(a) {
      const i = this.defaultQueryOptions({
        queryKey: a,
      });
      return this.#e.get(i.queryHash)?.state;
    }
    removeQueries(a) {
      const i = this.#e;
      ft.batch(() => {
        i.findAll(a).forEach((r) => {
          i.remove(r);
        });
      });
    }
    resetQueries(a, i) {
      const r = this.#e;
      return ft.batch(
        () => (
          r.findAll(a).forEach((c) => {
            c.reset();
          }),
          this.refetchQueries(
            {
              type: "active",
              ...a,
            },
            i,
          )
        ),
      );
    }
    cancelQueries(a, i = {}) {
      const r = {
          revert: !0,
          ...i,
        },
        c = ft.batch(() => this.#e.findAll(a).map((f) => f.cancel(r)));
      return Promise.all(c).then(Zt).catch(Zt);
    }
    invalidateQueries(a, i = {}) {
      return ft.batch(
        () => (
          this.#e.findAll(a).forEach((r) => {
            r.invalidate();
          }),
          a?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                {
                  ...a,
                  type: a?.refetchType ?? a?.type ?? "active",
                },
                i,
              )
        ),
      );
    }
    refetchQueries(a, i = {}) {
      const r = {
          ...i,
          cancelRefetch: i.cancelRefetch ?? !0,
        },
        c = ft.batch(() =>
          this.#e
            .findAll(a)
            .filter((f) => !f.isDisabled() && !f.isStatic())
            .map((f) => {
              let d = f.fetch(void 0, r);
              return (
                r.throwOnError || (d = d.catch(Zt)),
                f.state.fetchStatus === "paused" ? Promise.resolve() : d
              );
            }),
        );
      return Promise.all(c).then(Zt);
    }
    fetchQuery(a) {
      const i = this.defaultQueryOptions(a);
      i.retry === void 0 && (i.retry = !1);
      const r = this.#e.build(this, i);
      return r.isStaleByTime(bu(i.staleTime, r))
        ? r.fetch(i)
        : Promise.resolve(r.state.data);
    }
    prefetchQuery(a) {
      return this.fetchQuery(a).then(Zt).catch(Zt);
    }
    fetchInfiniteQuery(a) {
      return ((a.behavior = Dp(a.pages)), this.fetchQuery(a));
    }
    prefetchInfiniteQuery(a) {
      return this.fetchInfiniteQuery(a).then(Zt).catch(Zt);
    }
    ensureInfiniteQueryData(a) {
      return ((a.behavior = Dp(a.pages)), this.ensureQueryData(a));
    }
    resumePausedMutations() {
      return dr.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(a) {
      this.#n = a;
    }
    setQueryDefaults(a, i) {
      this.#l.set(Ai(a), {
        queryKey: a,
        defaultOptions: i,
      });
    }
    getQueryDefaults(a) {
      const i = [...this.#l.values()],
        r = {};
      return (
        i.forEach((c) => {
          Oi(a, c.queryKey) && Object.assign(r, c.defaultOptions);
        }),
        r
      );
    }
    setMutationDefaults(a, i) {
      this.#a.set(Ai(a), {
        mutationKey: a,
        defaultOptions: i,
      });
    }
    getMutationDefaults(a) {
      const i = [...this.#a.values()],
        r = {};
      return (
        i.forEach((c) => {
          Oi(a, c.mutationKey) && Object.assign(r, c.defaultOptions);
        }),
        r
      );
    }
    defaultQueryOptions(a) {
      if (a._defaulted) return a;
      const i = {
        ...this.#n.queries,
        ...this.getQueryDefaults(a.queryKey),
        ...a,
        _defaulted: !0,
      };
      return (
        i.queryHash || (i.queryHash = Uu(i.queryKey, i)),
        i.refetchOnReconnect === void 0 &&
          (i.refetchOnReconnect = i.networkMode !== "always"),
        i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
        !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
        i.queryFn === Hu && (i.enabled = !1),
        i
      );
    }
    defaultMutationOptions(a) {
      return a?._defaulted
        ? a
        : {
            ...this.#n.mutations,
            ...(a?.mutationKey && this.getMutationDefaults(a.mutationKey)),
            ...a,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  N1 = b.createContext(void 0),
  j1 = ({ client: a, children: i }) => (
    b.useEffect(
      () => (
        a.mount(),
        () => {
          a.unmount();
        }
      ),
      [a],
    ),
    u.jsx(N1.Provider, {
      value: a,
      children: i,
    })
  );
async function E1(a) {
  if (!a.ok) {
    const i = (await a.text()) || a.statusText;
    throw new Error(`${a.status}: ${i}`);
  }
}
const T1 =
    ({ on401: a }) =>
    async ({ queryKey: i }) => {
      const r = await fetch(i.join("/"), {
        credentials: "include",
      });
      return (await E1(r), await r.json());
    },
  C1 = new S1({
    defaultOptions: {
      queries: {
        queryFn: T1({
          on401: "throw",
        }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        staleTime: 1 / 0,
        retry: !1,
      },
      mutations: {
        retry: !1,
      },
    },
  }),
  A1 = 1,
  O1 = 1e6;
let du = 0;

function R1() {
  return ((du = (du + 1) % Number.MAX_SAFE_INTEGER), du.toString());
}
const mu = new Map(),
  kp = (a) => {
    if (mu.has(a)) return;
    const i = setTimeout(() => {
      (mu.delete(a),
        Ti({
          type: "REMOVE_TOAST",
          toastId: a,
        }));
    }, O1);
    mu.set(a, i);
  },
  _1 = (a, i) => {
    switch (i.type) {
      case "ADD_TOAST":
        return {
          ...a,
          toasts: [i.toast, ...a.toasts].slice(0, A1),
        };
      case "UPDATE_TOAST":
        return {
          ...a,
          toasts: a.toasts.map((r) =>
            r.id === i.toast.id
              ? {
                  ...r,
                  ...i.toast,
                }
              : r,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: r } = i;
        return (
          r
            ? kp(r)
            : a.toasts.forEach((c) => {
                kp(c.id);
              }),
          {
            ...a,
            toasts: a.toasts.map((c) =>
              c.id === r || r === void 0
                ? {
                    ...c,
                    open: !1,
                  }
                : c,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return i.toastId === void 0
          ? {
              ...a,
              toasts: [],
            }
          : {
              ...a,
              toasts: a.toasts.filter((r) => r.id !== i.toastId),
            };
    }
  },
  cr = [];
let ur = {
  toasts: [],
};

function Ti(a) {
  ((ur = _1(ur, a)),
    cr.forEach((i) => {
      i(ur);
    }));
}

function M1({ ...a }) {
  const i = R1(),
    r = (f) =>
      Ti({
        type: "UPDATE_TOAST",
        toast: {
          ...f,
          id: i,
        },
      }),
    c = () =>
      Ti({
        type: "DISMISS_TOAST",
        toastId: i,
      });
  return (
    Ti({
      type: "ADD_TOAST",
      toast: {
        ...a,
        id: i,
        open: !0,
        onOpenChange: (f) => {
          f || c();
        },
      },
    }),
    {
      id: i,
      dismiss: c,
      update: r,
    }
  );
}

function D1() {
  const [a, i] = b.useState(ur);
  return (
    b.useEffect(
      () => (
        cr.push(i),
        () => {
          const r = cr.indexOf(i);
          r > -1 && cr.splice(r, 1);
        }
      ),
      [a],
    ),
    {
      ...a,
      toast: M1,
      dismiss: (r) =>
        Ti({
          type: "DISMISS_TOAST",
          toastId: r,
        }),
    }
  );
}
var Tr = hg();
const z1 = mg(Tr);

function Be(a, i, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (f) {
    if ((a?.(f), r === !1 || !f.defaultPrevented)) return i?.(f);
  };
}

function Lp(a, i) {
  if (typeof a == "function") return a(i);
  a != null && (a.current = i);
}

function Cr(...a) {
  return (i) => {
    let r = !1;
    const c = a.map((f) => {
      const d = Lp(f, i);
      return (!r && typeof d == "function" && (r = !0), d);
    });
    if (r)
      return () => {
        for (let f = 0; f < c.length; f++) {
          const d = c[f];
          typeof d == "function" ? d() : Lp(a[f], null);
        }
      };
  };
}

function dt(...a) {
  return b.useCallback(Cr(...a), a);
}

function Ra(a, i = []) {
  let r = [];

  function c(d, h) {
    const g = b.createContext(h),
      y = r.length;
    r = [...r, h];
    const p = (v) => {
      const { scope: E, children: A, ...D } = v,
        T = E?.[a]?.[y] || g,
        O = b.useMemo(() => D, Object.values(D));
      return u.jsx(T.Provider, {
        value: O,
        children: A,
      });
    };
    p.displayName = d + "Provider";

    function w(v, E) {
      const A = E?.[a]?.[y] || g,
        D = b.useContext(A);
      if (D) return D;
      if (h !== void 0) return h;
      throw new Error(`\`${v}\` must be used within \`${d}\``);
    }
    return [p, w];
  }
  const f = () => {
    const d = r.map((h) => b.createContext(h));
    return function (g) {
      const y = g?.[a] || d;
      return b.useMemo(
        () => ({
          [`__scope${a}`]: {
            ...g,
            [a]: y,
          },
        }),
        [g, y],
      );
    };
  };
  return ((f.scopeName = a), [c, k1(f, ...i)]);
}

function k1(...a) {
  const i = a[0];
  if (a.length === 1) return i;
  const r = () => {
    const c = a.map((f) => ({
      useScope: f(),
      scopeName: f.scopeName,
    }));
    return function (d) {
      const h = c.reduce((g, { useScope: y, scopeName: p }) => {
        const v = y(d)[`__scope${p}`];
        return {
          ...g,
          ...v,
        };
      }, {});
      return b.useMemo(
        () => ({
          [`__scope${i.scopeName}`]: h,
        }),
        [h],
      );
    };
  };
  return ((r.scopeName = i.scopeName), r);
}

function Up(a) {
  const i = L1(a),
    r = b.forwardRef((c, f) => {
      const { children: d, ...h } = c,
        g = b.Children.toArray(d),
        y = g.find(H1);
      if (y) {
        const p = y.props.children,
          w = g.map((v) =>
            v === y
              ? b.Children.count(p) > 1
                ? b.Children.only(null)
                : b.isValidElement(p)
                  ? p.props.children
                  : null
              : v,
          );
        return u.jsx(i, {
          ...h,
          ref: f,
          children: b.isValidElement(p) ? b.cloneElement(p, void 0, w) : null,
        });
      }
      return u.jsx(i, {
        ...h,
        ref: f,
        children: d,
      });
    });
  return ((r.displayName = `${a}.Slot`), r);
}

function L1(a) {
  const i = b.forwardRef((r, c) => {
    const { children: f, ...d } = r;
    if (b.isValidElement(f)) {
      const h = q1(f),
        g = B1(d, f.props);
      return (
        f.type !== b.Fragment && (g.ref = c ? Cr(c, h) : h),
        b.cloneElement(f, g)
      );
    }
    return b.Children.count(f) > 1 ? b.Children.only(null) : null;
  });
  return ((i.displayName = `${a}.SlotClone`), i);
}
var U1 = Symbol("radix.slottable");

function H1(a) {
  return (
    b.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === U1
  );
}

function B1(a, i) {
  const r = {
    ...i,
  };
  for (const c in i) {
    const f = a[c],
      d = i[c];
    /^on[A-Z]/.test(c)
      ? f && d
        ? (r[c] = (...g) => {
            const y = d(...g);
            return (f(...g), y);
          })
        : f && (r[c] = f)
      : c === "style"
        ? (r[c] = {
            ...f,
            ...d,
          })
        : c === "className" && (r[c] = [f, d].filter(Boolean).join(" "));
  }
  return {
    ...a,
    ...r,
  };
}

function q1(a) {
  let i = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    r = i && "isReactWarning" in i && i.isReactWarning;
  return r
    ? a.ref
    : ((i = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (r = i && "isReactWarning" in i && i.isReactWarning),
      r ? a.props.ref : a.props.ref || a.ref);
}

function _g(a) {
  const i = a + "CollectionProvider",
    [r, c] = Ra(i),
    [f, d] = r(i, {
      collectionRef: {
        current: null,
      },
      itemMap: new Map(),
    }),
    h = (T) => {
      const { scope: O, children: U } = T,
        H = Ke.useRef(null),
        V = Ke.useRef(new Map()).current;
      return u.jsx(f, {
        scope: O,
        itemMap: V,
        collectionRef: H,
        children: U,
      });
    };
  h.displayName = i;
  const g = a + "CollectionSlot",
    y = Up(g),
    p = Ke.forwardRef((T, O) => {
      const { scope: U, children: H } = T,
        V = d(g, U),
        Z = dt(O, V.collectionRef);
      return u.jsx(y, {
        ref: Z,
        children: H,
      });
    });
  p.displayName = g;
  const w = a + "CollectionItemSlot",
    v = "data-radix-collection-item",
    E = Up(w),
    A = Ke.forwardRef((T, O) => {
      const { scope: U, children: H, ...V } = T,
        Z = Ke.useRef(null),
        J = dt(O, Z),
        F = d(w, U);
      return (
        Ke.useEffect(
          () => (
            F.itemMap.set(Z, {
              ref: Z,
              ...V,
            }),
            () => {
              F.itemMap.delete(Z);
            }
          ),
        ),
        u.jsx(E, {
          [v]: "",
          ref: J,
          children: H,
        })
      );
    });
  A.displayName = w;

  function D(T) {
    const O = d(a + "CollectionConsumer", T);
    return Ke.useCallback(() => {
      const H = O.collectionRef.current;
      if (!H) return [];
      const V = Array.from(H.querySelectorAll(`[${v}]`));
      return Array.from(O.itemMap.values()).sort(
        (F, X) => V.indexOf(F.ref.current) - V.indexOf(X.ref.current),
      );
    }, [O.collectionRef, O.itemMap]);
  }
  return [
    {
      Provider: h,
      Slot: p,
      ItemSlot: A,
    },
    D,
    c,
  ];
}

function G1(a) {
  const i = Y1(a),
    r = b.forwardRef((c, f) => {
      const { children: d, ...h } = c,
        g = b.Children.toArray(d),
        y = g.find(Q1);
      if (y) {
        const p = y.props.children,
          w = g.map((v) =>
            v === y
              ? b.Children.count(p) > 1
                ? b.Children.only(null)
                : b.isValidElement(p)
                  ? p.props.children
                  : null
              : v,
          );
        return u.jsx(i, {
          ...h,
          ref: f,
          children: b.isValidElement(p) ? b.cloneElement(p, void 0, w) : null,
        });
      }
      return u.jsx(i, {
        ...h,
        ref: f,
        children: d,
      });
    });
  return ((r.displayName = `${a}.Slot`), r);
}

function Y1(a) {
  const i = b.forwardRef((r, c) => {
    const { children: f, ...d } = r;
    if (b.isValidElement(f)) {
      const h = Z1(f),
        g = X1(d, f.props);
      return (
        f.type !== b.Fragment && (g.ref = c ? Cr(c, h) : h),
        b.cloneElement(f, g)
      );
    }
    return b.Children.count(f) > 1 ? b.Children.only(null) : null;
  });
  return ((i.displayName = `${a}.SlotClone`), i);
}
var V1 = Symbol("radix.slottable");

function Q1(a) {
  return (
    b.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === V1
  );
}

function X1(a, i) {
  const r = {
    ...i,
  };
  for (const c in i) {
    const f = a[c],
      d = i[c];
    /^on[A-Z]/.test(c)
      ? f && d
        ? (r[c] = (...g) => {
            const y = d(...g);
            return (f(...g), y);
          })
        : f && (r[c] = f)
      : c === "style"
        ? (r[c] = {
            ...f,
            ...d,
          })
        : c === "className" && (r[c] = [f, d].filter(Boolean).join(" "));
  }
  return {
    ...a,
    ...r,
  };
}

function Z1(a) {
  let i = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    r = i && "isReactWarning" in i && i.isReactWarning;
  return r
    ? a.ref
    : ((i = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (r = i && "isReactWarning" in i && i.isReactWarning),
      r ? a.props.ref : a.props.ref || a.ref);
}
var K1 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ye = K1.reduce((a, i) => {
    const r = G1(`Primitive.${i}`),
      c = b.forwardRef((f, d) => {
        const { asChild: h, ...g } = f,
          y = h ? r : i;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          u.jsx(y, {
            ...g,
            ref: d,
          })
        );
      });
    return (
      (c.displayName = `Primitive.${i}`),
      {
        ...a,
        [i]: c,
      }
    );
  }, {});

function Mg(a, i) {
  a && Tr.flushSync(() => a.dispatchEvent(i));
}

function aa(a) {
  const i = b.useRef(a);
  return (
    b.useEffect(() => {
      i.current = a;
    }),
    b.useMemo(
      () =>
        (...r) =>
          i.current?.(...r),
      [],
    )
  );
}

function $1(a, i = globalThis?.document) {
  const r = aa(a);
  b.useEffect(() => {
    const c = (f) => {
      f.key === "Escape" && r(f);
    };
    return (
      i.addEventListener("keydown", c, {
        capture: !0,
      }),
      () =>
        i.removeEventListener("keydown", c, {
          capture: !0,
        })
    );
  }, [r, i]);
}
var J1 = "DismissableLayer",
  Nu = "dismissableLayer.update",
  P1 = "dismissableLayer.pointerDownOutside",
  F1 = "dismissableLayer.focusOutside",
  Hp,
  Dg = b.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Bu = b.forwardRef((a, i) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        onFocusOutside: d,
        onInteractOutside: h,
        onDismiss: g,
        ...y
      } = a,
      p = b.useContext(Dg),
      [w, v] = b.useState(null),
      E = w?.ownerDocument ?? globalThis?.document,
      [, A] = b.useState({}),
      D = dt(i, (X) => v(X)),
      T = Array.from(p.layers),
      [O] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
      U = T.indexOf(O),
      H = w ? T.indexOf(w) : -1,
      V = p.layersWithOutsidePointerEventsDisabled.size > 0,
      Z = H >= U,
      J = I1((X) => {
        const $ = X.target,
          oe = [...p.branches].some((ye) => ye.contains($));
        !Z || oe || (f?.(X), h?.(X), X.defaultPrevented || g?.());
      }, E),
      F = e2((X) => {
        const $ = X.target;
        [...p.branches].some((ye) => ye.contains($)) ||
          (d?.(X), h?.(X), X.defaultPrevented || g?.());
      }, E);
    return (
      $1((X) => {
        H === p.layers.size - 1 &&
          (c?.(X), !X.defaultPrevented && g && (X.preventDefault(), g()));
      }, E),
      b.useEffect(() => {
        if (w)
          return (
            r &&
              (p.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Hp = E.body.style.pointerEvents),
                (E.body.style.pointerEvents = "none")),
              p.layersWithOutsidePointerEventsDisabled.add(w)),
            p.layers.add(w),
            Bp(),
            () => {
              r &&
                p.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (E.body.style.pointerEvents = Hp);
            }
          );
      }, [w, E, r, p]),
      b.useEffect(
        () => () => {
          w &&
            (p.layers.delete(w),
            p.layersWithOutsidePointerEventsDisabled.delete(w),
            Bp());
        },
        [w, p],
      ),
      b.useEffect(() => {
        const X = () => A({});
        return (
          document.addEventListener(Nu, X),
          () => document.removeEventListener(Nu, X)
        );
      }, []),
      u.jsx(Ye.div, {
        ...y,
        ref: D,
        style: {
          pointerEvents: V ? (Z ? "auto" : "none") : void 0,
          ...a.style,
        },
        onFocusCapture: Be(a.onFocusCapture, F.onFocusCapture),
        onBlurCapture: Be(a.onBlurCapture, F.onBlurCapture),
        onPointerDownCapture: Be(
          a.onPointerDownCapture,
          J.onPointerDownCapture,
        ),
      })
    );
  });
Bu.displayName = J1;
var W1 = "DismissableLayerBranch",
  zg = b.forwardRef((a, i) => {
    const r = b.useContext(Dg),
      c = b.useRef(null),
      f = dt(i, c);
    return (
      b.useEffect(() => {
        const d = c.current;
        if (d)
          return (
            r.branches.add(d),
            () => {
              r.branches.delete(d);
            }
          );
      }, [r.branches]),
      u.jsx(Ye.div, {
        ...a,
        ref: f,
      })
    );
  });
zg.displayName = W1;

function I1(a, i = globalThis?.document) {
  const r = aa(a),
    c = b.useRef(!1),
    f = b.useRef(() => {});
  return (
    b.useEffect(() => {
      const d = (g) => {
          if (g.target && !c.current) {
            let y = function () {
              kg(P1, r, p, {
                discrete: !0,
              });
            };
            const p = {
              originalEvent: g,
            };
            g.pointerType === "touch"
              ? (i.removeEventListener("click", f.current),
                (f.current = y),
                i.addEventListener("click", f.current, {
                  once: !0,
                }))
              : y();
          } else i.removeEventListener("click", f.current);
          c.current = !1;
        },
        h = window.setTimeout(() => {
          i.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        (window.clearTimeout(h),
          i.removeEventListener("pointerdown", d),
          i.removeEventListener("click", f.current));
      };
    }, [i, r]),
    {
      onPointerDownCapture: () => (c.current = !0),
    }
  );
}

function e2(a, i = globalThis?.document) {
  const r = aa(a),
    c = b.useRef(!1);
  return (
    b.useEffect(() => {
      const f = (d) => {
        d.target &&
          !c.current &&
          kg(
            F1,
            r,
            {
              originalEvent: d,
            },
            {
              discrete: !1,
            },
          );
      };
      return (
        i.addEventListener("focusin", f),
        () => i.removeEventListener("focusin", f)
      );
    }, [i, r]),
    {
      onFocusCapture: () => (c.current = !0),
      onBlurCapture: () => (c.current = !1),
    }
  );
}

function Bp() {
  const a = new CustomEvent(Nu);
  document.dispatchEvent(a);
}

function kg(a, i, r, { discrete: c }) {
  const f = r.originalEvent.target,
    d = new CustomEvent(a, {
      bubbles: !1,
      cancelable: !0,
      detail: r,
    });
  (i &&
    f.addEventListener(a, i, {
      once: !0,
    }),
    c ? Mg(f, d) : f.dispatchEvent(d));
}
var t2 = Bu,
  n2 = zg,
  ln = globalThis?.document ? b.useLayoutEffect : () => {},
  a2 = "Portal",
  qu = b.forwardRef((a, i) => {
    const { container: r, ...c } = a,
      [f, d] = b.useState(!1);
    ln(() => d(!0), []);
    const h = r || (f && globalThis?.document?.body);
    return h
      ? z1.createPortal(
          u.jsx(Ye.div, {
            ...c,
            ref: i,
          }),
          h,
        )
      : null;
  });
qu.displayName = a2;

function l2(a, i) {
  return b.useReducer((r, c) => i[r][c] ?? r, a);
}
var El = (a) => {
  const { present: i, children: r } = a,
    c = i2(i),
    f =
      typeof r == "function"
        ? r({
            present: c.isPresent,
          })
        : b.Children.only(r),
    d = dt(c.ref, s2(f));
  return typeof r == "function" || c.isPresent
    ? b.cloneElement(f, {
        ref: d,
      })
    : null;
};
El.displayName = "Presence";

function i2(a) {
  const [i, r] = b.useState(),
    c = b.useRef(null),
    f = b.useRef(a),
    d = b.useRef("none"),
    h = a ? "mounted" : "unmounted",
    [g, y] = l2(h, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended",
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted",
      },
      unmounted: {
        MOUNT: "mounted",
      },
    });
  return (
    b.useEffect(() => {
      const p = tr(c.current);
      d.current = g === "mounted" ? p : "none";
    }, [g]),
    ln(() => {
      const p = c.current,
        w = f.current;
      if (w !== a) {
        const E = d.current,
          A = tr(p);
        (a
          ? y("MOUNT")
          : A === "none" || p?.display === "none"
            ? y("UNMOUNT")
            : y(w && E !== A ? "ANIMATION_OUT" : "UNMOUNT"),
          (f.current = a));
      }
    }, [a, y]),
    ln(() => {
      if (i) {
        let p;
        const w = i.ownerDocument.defaultView ?? window,
          v = (A) => {
            const T = tr(c.current).includes(CSS.escape(A.animationName));
            if (A.target === i && T && (y("ANIMATION_END"), !f.current)) {
              const O = i.style.animationFillMode;
              ((i.style.animationFillMode = "forwards"),
                (p = w.setTimeout(() => {
                  i.style.animationFillMode === "forwards" &&
                    (i.style.animationFillMode = O);
                })));
            }
          },
          E = (A) => {
            A.target === i && (d.current = tr(c.current));
          };
        return (
          i.addEventListener("animationstart", E),
          i.addEventListener("animationcancel", v),
          i.addEventListener("animationend", v),
          () => {
            (w.clearTimeout(p),
              i.removeEventListener("animationstart", E),
              i.removeEventListener("animationcancel", v),
              i.removeEventListener("animationend", v));
          }
        );
      } else y("ANIMATION_END");
    }, [i, y]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(g),
      ref: b.useCallback((p) => {
        ((c.current = p ? getComputedStyle(p) : null), r(p));
      }, []),
    }
  );
}

function tr(a) {
  return a?.animationName || "none";
}

function s2(a) {
  let i = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    r = i && "isReactWarning" in i && i.isReactWarning;
  return r
    ? a.ref
    : ((i = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (r = i && "isReactWarning" in i && i.isReactWarning),
      r ? a.props.ref : a.props.ref || a.ref);
}
var r2 = Sr[" useInsertionEffect ".trim().toString()] || ln;

function Di({ prop: a, defaultProp: i, onChange: r = () => {}, caller: c }) {
  const [f, d, h] = o2({
      defaultProp: i,
      onChange: r,
    }),
    g = a !== void 0,
    y = g ? a : f;
  {
    const w = b.useRef(a !== void 0);
    b.useEffect(() => {
      const v = w.current;
      (v !== g &&
        console.warn(
          `${c} is changing from ${v ? "controlled" : "uncontrolled"} to ${g ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (w.current = g));
    }, [g, c]);
  }
  const p = b.useCallback(
    (w) => {
      if (g) {
        const v = c2(w) ? w(a) : w;
        v !== a && h.current?.(v);
      } else d(w);
    },
    [g, a, d, h],
  );
  return [y, p];
}

function o2({ defaultProp: a, onChange: i }) {
  const [r, c] = b.useState(a),
    f = b.useRef(r),
    d = b.useRef(i);
  return (
    r2(() => {
      d.current = i;
    }, [i]),
    b.useEffect(() => {
      f.current !== r && (d.current?.(r), (f.current = r));
    }, [r, f]),
    [r, c, d]
  );
}

function c2(a) {
  return typeof a == "function";
}
var u2 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  f2 = "VisuallyHidden",
  Ar = b.forwardRef((a, i) =>
    u.jsx(Ye.span, {
      ...a,
      ref: i,
      style: {
        ...u2,
        ...a.style,
      },
    }),
  );
Ar.displayName = f2;
var d2 = Ar,
  Gu = "ToastProvider",
  [Yu, m2, h2] = _g("Toast"),
  [Lg] = Ra("Toast", [h2]),
  [p2, Or] = Lg(Gu),
  Ug = (a) => {
    const {
        __scopeToast: i,
        label: r = "Notification",
        duration: c = 5e3,
        swipeDirection: f = "right",
        swipeThreshold: d = 50,
        children: h,
      } = a,
      [g, y] = b.useState(null),
      [p, w] = b.useState(0),
      v = b.useRef(!1),
      E = b.useRef(!1);
    return (
      r.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Gu}\`. Expected non-empty \`string\`.`,
        ),
      u.jsx(Yu.Provider, {
        scope: i,
        children: u.jsx(p2, {
          scope: i,
          label: r,
          duration: c,
          swipeDirection: f,
          swipeThreshold: d,
          toastCount: p,
          viewport: g,
          onViewportChange: y,
          onToastAdd: b.useCallback(() => w((A) => A + 1), []),
          onToastRemove: b.useCallback(() => w((A) => A - 1), []),
          isFocusedToastEscapeKeyDownRef: v,
          isClosePausedRef: E,
          children: h,
        }),
      })
    );
  };
Ug.displayName = Gu;
var Hg = "ToastViewport",
  g2 = ["F8"],
  ju = "toast.viewportPause",
  Eu = "toast.viewportResume",
  Bg = b.forwardRef((a, i) => {
    const {
        __scopeToast: r,
        hotkey: c = g2,
        label: f = "Notifications ({hotkey})",
        ...d
      } = a,
      h = Or(Hg, r),
      g = m2(r),
      y = b.useRef(null),
      p = b.useRef(null),
      w = b.useRef(null),
      v = b.useRef(null),
      E = dt(i, v, h.onViewportChange),
      A = c.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      D = h.toastCount > 0;
    (b.useEffect(() => {
      const O = (U) => {
        c.length !== 0 &&
          c.every((V) => U[V] || U.code === V) &&
          v.current?.focus();
      };
      return (
        document.addEventListener("keydown", O),
        () => document.removeEventListener("keydown", O)
      );
    }, [c]),
      b.useEffect(() => {
        const O = y.current,
          U = v.current;
        if (D && O && U) {
          const H = () => {
              if (!h.isClosePausedRef.current) {
                const F = new CustomEvent(ju);
                (U.dispatchEvent(F), (h.isClosePausedRef.current = !0));
              }
            },
            V = () => {
              if (h.isClosePausedRef.current) {
                const F = new CustomEvent(Eu);
                (U.dispatchEvent(F), (h.isClosePausedRef.current = !1));
              }
            },
            Z = (F) => {
              !O.contains(F.relatedTarget) && V();
            },
            J = () => {
              O.contains(document.activeElement) || V();
            };
          return (
            O.addEventListener("focusin", H),
            O.addEventListener("focusout", Z),
            O.addEventListener("pointermove", H),
            O.addEventListener("pointerleave", J),
            window.addEventListener("blur", H),
            window.addEventListener("focus", V),
            () => {
              (O.removeEventListener("focusin", H),
                O.removeEventListener("focusout", Z),
                O.removeEventListener("pointermove", H),
                O.removeEventListener("pointerleave", J),
                window.removeEventListener("blur", H),
                window.removeEventListener("focus", V));
            }
          );
        }
      }, [D, h.isClosePausedRef]));
    const T = b.useCallback(
      ({ tabbingDirection: O }) => {
        const H = g().map((V) => {
          const Z = V.ref.current,
            J = [Z, ...O2(Z)];
          return O === "forwards" ? J : J.reverse();
        });
        return (O === "forwards" ? H.reverse() : H).flat();
      },
      [g],
    );
    return (
      b.useEffect(() => {
        const O = v.current;
        if (O) {
          const U = (H) => {
            const V = H.altKey || H.ctrlKey || H.metaKey;
            if (H.key === "Tab" && !V) {
              const J = document.activeElement,
                F = H.shiftKey;
              if (H.target === O && F) {
                p.current?.focus();
                return;
              }
              const oe = T({
                  tabbingDirection: F ? "backwards" : "forwards",
                }),
                ye = oe.findIndex((xe) => xe === J);
              hu(oe.slice(ye + 1))
                ? H.preventDefault()
                : F
                  ? p.current?.focus()
                  : w.current?.focus();
            }
          };
          return (
            O.addEventListener("keydown", U),
            () => O.removeEventListener("keydown", U)
          );
        }
      }, [g, T]),
      u.jsxs(n2, {
        ref: y,
        role: "region",
        "aria-label": f.replace("{hotkey}", A),
        tabIndex: -1,
        style: {
          pointerEvents: D ? void 0 : "none",
        },
        children: [
          D &&
            u.jsx(Tu, {
              ref: p,
              onFocusFromOutsideViewport: () => {
                const O = T({
                  tabbingDirection: "forwards",
                });
                hu(O);
              },
            }),
          u.jsx(Yu.Slot, {
            scope: r,
            children: u.jsx(Ye.ol, {
              tabIndex: -1,
              ...d,
              ref: E,
            }),
          }),
          D &&
            u.jsx(Tu, {
              ref: w,
              onFocusFromOutsideViewport: () => {
                const O = T({
                  tabbingDirection: "backwards",
                });
                hu(O);
              },
            }),
        ],
      })
    );
  });
Bg.displayName = Hg;
var qg = "ToastFocusProxy",
  Tu = b.forwardRef((a, i) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: c, ...f } = a,
      d = Or(qg, r);
    return u.jsx(Ar, {
      tabIndex: 0,
      ...f,
      ref: i,
      style: {
        position: "fixed",
      },
      onFocus: (h) => {
        const g = h.relatedTarget;
        !d.viewport?.contains(g) && c();
      },
    });
  });
Tu.displayName = qg;
var zi = "Toast",
  y2 = "toast.swipeStart",
  x2 = "toast.swipeMove",
  v2 = "toast.swipeCancel",
  b2 = "toast.swipeEnd",
  Gg = b.forwardRef((a, i) => {
    const { forceMount: r, open: c, defaultOpen: f, onOpenChange: d, ...h } = a,
      [g, y] = Di({
        prop: c,
        defaultProp: f ?? !0,
        onChange: d,
        caller: zi,
      });
    return u.jsx(El, {
      present: r || g,
      children: u.jsx(N2, {
        open: g,
        ...h,
        ref: i,
        onClose: () => y(!1),
        onPause: aa(a.onPause),
        onResume: aa(a.onResume),
        onSwipeStart: Be(a.onSwipeStart, (p) => {
          p.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Be(a.onSwipeMove, (p) => {
          const { x: w, y: v } = p.detail.delta;
          (p.currentTarget.setAttribute("data-swipe", "move"),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${w}px`,
            ),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${v}px`,
            ));
        }),
        onSwipeCancel: Be(a.onSwipeCancel, (p) => {
          (p.currentTarget.setAttribute("data-swipe", "cancel"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: Be(a.onSwipeEnd, (p) => {
          const { x: w, y: v } = p.detail.delta;
          (p.currentTarget.setAttribute("data-swipe", "end"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${w}px`,
            ),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${v}px`,
            ),
            y(!1));
        }),
      }),
    });
  });
Gg.displayName = zi;
var [w2, S2] = Lg(zi, {
    onClose() {},
  }),
  N2 = b.forwardRef((a, i) => {
    const {
        __scopeToast: r,
        type: c = "foreground",
        duration: f,
        open: d,
        onClose: h,
        onEscapeKeyDown: g,
        onPause: y,
        onResume: p,
        onSwipeStart: w,
        onSwipeMove: v,
        onSwipeCancel: E,
        onSwipeEnd: A,
        ...D
      } = a,
      T = Or(zi, r),
      [O, U] = b.useState(null),
      H = dt(i, (W) => U(W)),
      V = b.useRef(null),
      Z = b.useRef(null),
      J = f || T.duration,
      F = b.useRef(0),
      X = b.useRef(J),
      $ = b.useRef(0),
      { onToastAdd: oe, onToastRemove: ye } = T,
      xe = aa(() => {
        (O?.contains(document.activeElement) && T.viewport?.focus(), h());
      }),
      pe = b.useCallback(
        (W) => {
          !W ||
            W === 1 / 0 ||
            (window.clearTimeout($.current),
            (F.current = new Date().getTime()),
            ($.current = window.setTimeout(xe, W)));
        },
        [xe],
      );
    (b.useEffect(() => {
      const W = T.viewport;
      if (W) {
        const fe = () => {
            (pe(X.current), p?.());
          },
          R = () => {
            const Q = new Date().getTime() - F.current;
            ((X.current = X.current - Q),
              window.clearTimeout($.current),
              y?.());
          };
        return (
          W.addEventListener(ju, R),
          W.addEventListener(Eu, fe),
          () => {
            (W.removeEventListener(ju, R), W.removeEventListener(Eu, fe));
          }
        );
      }
    }, [T.viewport, J, y, p, pe]),
      b.useEffect(() => {
        d && !T.isClosePausedRef.current && pe(J);
      }, [d, J, T.isClosePausedRef, pe]),
      b.useEffect(() => (oe(), () => ye()), [oe, ye]));
    const Ee = b.useMemo(() => (O ? $g(O) : null), [O]);
    return T.viewport
      ? u.jsxs(u.Fragment, {
          children: [
            Ee &&
              u.jsx(j2, {
                __scopeToast: r,
                role: "status",
                "aria-live": c === "foreground" ? "assertive" : "polite",
                children: Ee,
              }),
            u.jsx(w2, {
              scope: r,
              onClose: xe,
              children: Tr.createPortal(
                u.jsx(Yu.ItemSlot, {
                  scope: r,
                  children: u.jsx(t2, {
                    asChild: !0,
                    onEscapeKeyDown: Be(g, () => {
                      (T.isFocusedToastEscapeKeyDownRef.current || xe(),
                        (T.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: u.jsx(Ye.li, {
                      tabIndex: 0,
                      "data-state": d ? "open" : "closed",
                      "data-swipe-direction": T.swipeDirection,
                      ...D,
                      ref: H,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...a.style,
                      },
                      onKeyDown: Be(a.onKeyDown, (W) => {
                        W.key === "Escape" &&
                          (g?.(W.nativeEvent),
                          W.nativeEvent.defaultPrevented ||
                            ((T.isFocusedToastEscapeKeyDownRef.current = !0),
                            xe()));
                      }),
                      onPointerDown: Be(a.onPointerDown, (W) => {
                        W.button === 0 &&
                          (V.current = {
                            x: W.clientX,
                            y: W.clientY,
                          });
                      }),
                      onPointerMove: Be(a.onPointerMove, (W) => {
                        if (!V.current) return;
                        const fe = W.clientX - V.current.x,
                          R = W.clientY - V.current.y,
                          Q = !!Z.current,
                          L = ["left", "right"].includes(T.swipeDirection),
                          ie = ["left", "up"].includes(T.swipeDirection)
                            ? Math.min
                            : Math.max,
                          ue = L ? ie(0, fe) : 0,
                          N = L ? 0 : ie(0, R),
                          q = W.pointerType === "touch" ? 10 : 2,
                          K = {
                            x: ue,
                            y: N,
                          },
                          P = {
                            originalEvent: W,
                            delta: K,
                          };
                        Q
                          ? ((Z.current = K),
                            nr(x2, v, P, {
                              discrete: !1,
                            }))
                          : qp(K, T.swipeDirection, q)
                            ? ((Z.current = K),
                              nr(y2, w, P, {
                                discrete: !1,
                              }),
                              W.target.setPointerCapture(W.pointerId))
                            : (Math.abs(fe) > q || Math.abs(R) > q) &&
                              (V.current = null);
                      }),
                      onPointerUp: Be(a.onPointerUp, (W) => {
                        const fe = Z.current,
                          R = W.target;
                        if (
                          (R.hasPointerCapture(W.pointerId) &&
                            R.releasePointerCapture(W.pointerId),
                          (Z.current = null),
                          (V.current = null),
                          fe)
                        ) {
                          const Q = W.currentTarget,
                            L = {
                              originalEvent: W,
                              delta: fe,
                            };
                          (qp(fe, T.swipeDirection, T.swipeThreshold)
                            ? nr(b2, A, L, {
                                discrete: !0,
                              })
                            : nr(v2, E, L, {
                                discrete: !0,
                              }),
                            Q.addEventListener(
                              "click",
                              (ie) => ie.preventDefault(),
                              {
                                once: !0,
                              },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                T.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  j2 = (a) => {
    const { __scopeToast: i, children: r, ...c } = a,
      f = Or(zi, i),
      [d, h] = b.useState(!1),
      [g, y] = b.useState(!1);
    return (
      C2(() => h(!0)),
      b.useEffect(() => {
        const p = window.setTimeout(() => y(!0), 1e3);
        return () => window.clearTimeout(p);
      }, []),
      g
        ? null
        : u.jsx(qu, {
            asChild: !0,
            children: u.jsx(Ar, {
              ...c,
              children:
                d &&
                u.jsxs(u.Fragment, {
                  children: [f.label, " ", r],
                }),
            }),
          })
    );
  },
  E2 = "ToastTitle",
  Yg = b.forwardRef((a, i) => {
    const { __scopeToast: r, ...c } = a;
    return u.jsx(Ye.div, {
      ...c,
      ref: i,
    });
  });
Yg.displayName = E2;
var T2 = "ToastDescription",
  Vg = b.forwardRef((a, i) => {
    const { __scopeToast: r, ...c } = a;
    return u.jsx(Ye.div, {
      ...c,
      ref: i,
    });
  });
Vg.displayName = T2;
var Qg = "ToastAction",
  Xg = b.forwardRef((a, i) => {
    const { altText: r, ...c } = a;
    return r.trim()
      ? u.jsx(Kg, {
          altText: r,
          asChild: !0,
          children: u.jsx(Vu, {
            ...c,
            ref: i,
          }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Qg}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Xg.displayName = Qg;
var Zg = "ToastClose",
  Vu = b.forwardRef((a, i) => {
    const { __scopeToast: r, ...c } = a,
      f = S2(Zg, r);
    return u.jsx(Kg, {
      asChild: !0,
      children: u.jsx(Ye.button, {
        type: "button",
        ...c,
        ref: i,
        onClick: Be(a.onClick, f.onClose),
      }),
    });
  });
Vu.displayName = Zg;
var Kg = b.forwardRef((a, i) => {
  const { __scopeToast: r, altText: c, ...f } = a;
  return u.jsx(Ye.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": c || void 0,
    ...f,
    ref: i,
  });
});

function $g(a) {
  const i = [];
  return (
    Array.from(a.childNodes).forEach((c) => {
      if (
        (c.nodeType === c.TEXT_NODE && c.textContent && i.push(c.textContent),
        A2(c))
      ) {
        const f = c.ariaHidden || c.hidden || c.style.display === "none",
          d = c.dataset.radixToastAnnounceExclude === "";
        if (!f)
          if (d) {
            const h = c.dataset.radixToastAnnounceAlt;
            h && i.push(h);
          } else i.push(...$g(c));
      }
    }),
    i
  );
}

function nr(a, i, r, { discrete: c }) {
  const f = r.originalEvent.currentTarget,
    d = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0,
      detail: r,
    });
  (i &&
    f.addEventListener(a, i, {
      once: !0,
    }),
    c ? Mg(f, d) : f.dispatchEvent(d));
}
var qp = (a, i, r = 0) => {
  const c = Math.abs(a.x),
    f = Math.abs(a.y),
    d = c > f;
  return i === "left" || i === "right" ? d && c > r : !d && f > r;
};

function C2(a = () => {}) {
  const i = aa(a);
  ln(() => {
    let r = 0,
      c = 0;
    return (
      (r = window.requestAnimationFrame(
        () => (c = window.requestAnimationFrame(i)),
      )),
      () => {
        (window.cancelAnimationFrame(r), window.cancelAnimationFrame(c));
      }
    );
  }, [i]);
}

function A2(a) {
  return a.nodeType === a.ELEMENT_NODE;
}

function O2(a) {
  const i = [],
    r = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (c) => {
        const f = c.tagName === "INPUT" && c.type === "hidden";
        return c.disabled || c.hidden || f
          ? NodeFilter.FILTER_SKIP
          : c.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) i.push(r.currentNode);
  return i;
}

function hu(a) {
  const i = document.activeElement;
  return a.some((r) =>
    r === i ? !0 : (r.focus(), document.activeElement !== i),
  );
}
var R2 = Ug,
  Jg = Bg,
  Pg = Gg,
  Fg = Yg,
  Wg = Vg,
  Ig = Xg,
  ey = Vu;

function ty(a) {
  var i,
    r,
    c = "";
  if (typeof a == "string" || typeof a == "number") c += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var f = a.length;
      for (i = 0; i < f; i++)
        a[i] && (r = ty(a[i])) && (c && (c += " "), (c += r));
    } else for (r in a) a[r] && (c && (c += " "), (c += r));
  return c;
}

function ny() {
  for (var a, i, r = 0, c = "", f = arguments.length; r < f; r++)
    (a = arguments[r]) && (i = ty(a)) && (c && (c += " "), (c += i));
  return c;
}
const Gp = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  Yp = ny,
  _2 = (a, i) => (r) => {
    var c;
    if (i?.variants == null) return Yp(a, r?.class, r?.className);
    const { variants: f, defaultVariants: d } = i,
      h = Object.keys(f).map((p) => {
        const w = r?.[p],
          v = d?.[p];
        if (w === null) return null;
        const E = Gp(w) || Gp(v);
        return f[p][E];
      }),
      g =
        r &&
        Object.entries(r).reduce((p, w) => {
          let [v, E] = w;
          return (E === void 0 || (p[v] = E), p);
        }, {}),
      y =
        i == null || (c = i.compoundVariants) === null || c === void 0
          ? void 0
          : c.reduce((p, w) => {
              let { class: v, className: E, ...A } = w;
              return Object.entries(A).every((D) => {
                let [T, O] = D;
                return Array.isArray(O)
                  ? O.includes(
                      {
                        ...d,
                        ...g,
                      }[T],
                    )
                  : {
                      ...d,
                      ...g,
                    }[T] === O;
              })
                ? [...p, v, E]
                : p;
            }, []);
    return Yp(a, h, y, r?.class, r?.className);
  };
const M2 = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  D2 = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, r, c) =>
      c ? c.toUpperCase() : r.toLowerCase(),
    ),
  Vp = (a) => {
    const i = D2(a);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  ay = (...a) =>
    a
      .filter((i, r, c) => !!i && i.trim() !== "" && c.indexOf(i) === r)
      .join(" ")
      .trim(),
  z2 = (a) => {
    for (const i in a)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  };
var k2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const L2 = b.forwardRef(
  (
    {
      color: a = "currentColor",
      size: i = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: c,
      className: f = "",
      children: d,
      iconNode: h,
      ...g
    },
    y,
  ) =>
    b.createElement(
      "svg",
      {
        ref: y,
        ...k2,
        width: i,
        height: i,
        stroke: a,
        strokeWidth: c ? (Number(r) * 24) / Number(i) : r,
        className: ay("lucide", f),
        ...(!d &&
          !z2(g) && {
            "aria-hidden": "true",
          }),
        ...g,
      },
      [
        ...h.map(([p, w]) => b.createElement(p, w)),
        ...(Array.isArray(d) ? d : [d]),
      ],
    ),
);
const Ve = (a, i) => {
  const r = b.forwardRef(({ className: c, ...f }, d) =>
    b.createElement(L2, {
      ref: d,
      iconNode: i,
      className: ay(`lucide-${M2(Vp(a))}`, `lucide-${a}`, c),
      ...f,
    }),
  );
  return ((r.displayName = Vp(a)), r);
};
const U2 = [
    [
      "path",
      {
        d: "M5 12h14",
        key: "1ays0h",
      },
    ],
    [
      "path",
      {
        d: "m12 5 7 7-7 7",
        key: "xquz4c",
      },
    ],
  ],
  yl = Ve("arrow-right", U2);
const H2 = [
    [
      "path",
      {
        d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
        key: "18u6gg",
      },
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "13",
        r: "3",
        key: "1vg3eu",
      },
    ],
  ],
  B2 = Ve("camera", H2);
const q2 = [
    [
      "path",
      {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c",
      },
    ],
  ],
  G2 = Ve("check", q2);
const Y2 = [
    [
      "path",
      {
        d: "m6 9 6 6 6-6",
        key: "qrunsl",
      },
    ],
  ],
  ly = Ve("chevron-down", Y2);
const V2 = [
    [
      "path",
      {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3",
      },
    ],
  ],
  Q2 = Ve("chevron-left", V2);
const X2 = [
    [
      "path",
      {
        d: "m9 18 6-6-6-6",
        key: "mthhwq",
      },
    ],
  ],
  iy = Ve("chevron-right", X2);
const Z2 = [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay",
      },
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh",
      },
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90",
      },
    ],
  ],
  K2 = Ve("circle-alert", Z2);
const $2 = [
    [
      "path",
      {
        d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
        key: "kmsa83",
      },
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay",
      },
    ],
  ],
  Cu = Ve("circle-play", $2);
const J2 = [
    [
      "path",
      {
        d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
        key: "sc7q7i",
      },
    ],
  ],
  P2 = Ve("funnel", J2);
const F2 = [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay",
      },
    ],
    [
      "path",
      {
        d: "M12 16v-4",
        key: "1dtifu",
      },
    ],
    [
      "path",
      {
        d: "M12 8h.01",
        key: "e9boi3",
      },
    ],
  ],
  Qp = Ve("info", F2);
const W2 = [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    [
      "path",
      {
        d: "M7 11V7a5 5 0 0 1 10 0v4",
        key: "fwvmzm",
      },
    ],
  ],
  Xp = Ve("lock", W2);
const I2 = [
    [
      "path",
      {
        d: "M4 5h16",
        key: "1tepv9",
      },
    ],
    [
      "path",
      {
        d: "M4 12h16",
        key: "1lakjw",
      },
    ],
    [
      "path",
      {
        d: "M4 19h16",
        key: "1djgab",
      },
    ],
  ],
  ew = Ve("menu", I2);
const tw = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  nw = Ve("message-circle", tw);
const aw = [
    [
      "path",
      {
        d: "M5 12h14",
        key: "1ays0h",
      },
    ],
  ],
  sy = Ve("minus", aw);
const lw = [
    [
      "path",
      {
        d: "M5 12h14",
        key: "1ays0h",
      },
    ],
    [
      "path",
      {
        d: "M12 5v14",
        key: "s699le",
      },
    ],
  ],
  ry = Ve("plus", lw);
const iw = [
    [
      "path",
      {
        d: "m13.5 8.5-5 5",
        key: "1cs55j",
      },
    ],
    [
      "path",
      {
        d: "m8.5 8.5 5 5",
        key: "a8mexj",
      },
    ],
    [
      "circle",
      {
        cx: "11",
        cy: "11",
        r: "8",
        key: "4ej97u",
      },
    ],
    [
      "path",
      {
        d: "m21 21-4.3-4.3",
        key: "1qie3q",
      },
    ],
  ],
  sw = Ve("search-x", iw);
const rw = [
    [
      "path",
      {
        d: "m21 21-4.34-4.34",
        key: "14j7rj",
      },
    ],
    [
      "circle",
      {
        cx: "11",
        cy: "11",
        r: "8",
        key: "4ej97u",
      },
    ],
  ],
  Zp = Ve("search", rw);
const ow = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    [
      "path",
      {
        d: "m9 12 2 2 4-4",
        key: "dzmm74",
      },
    ],
  ],
  Ci = Ve("shield-check", ow);
const cw = [
    [
      "circle",
      {
        cx: "8",
        cy: "21",
        r: "1",
        key: "jimo8o",
      },
    ],
    [
      "circle",
      {
        cx: "19",
        cy: "21",
        r: "1",
        key: "13723u",
      },
    ],
    [
      "path",
      {
        d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
        key: "9zh506",
      },
    ],
  ],
  oy = Ve("shopping-cart", cw);
const uw = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  Cn = Ve("star", uw);
const fw = [
    [
      "path",
      {
        d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
        key: "wrbu53",
      },
    ],
    [
      "path",
      {
        d: "M15 18H9",
        key: "1lyqi6",
      },
    ],
    [
      "path",
      {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
        key: "lysw3i",
      },
    ],
    [
      "circle",
      {
        cx: "17",
        cy: "18",
        r: "2",
        key: "332jqn",
      },
    ],
    [
      "circle",
      {
        cx: "7",
        cy: "18",
        r: "2",
        key: "19iecd",
      },
    ],
  ],
  dw = Ve("truck", fw);
const mw = [
    [
      "path",
      {
        d: "M18 6 6 18",
        key: "1bl5f8",
      },
    ],
    [
      "path",
      {
        d: "m6 6 12 12",
        key: "d8bk6v",
      },
    ],
  ],
  la = Ve("x", mw),
  hw = (a, i) => {
    const r = new Array(a.length + i.length);
    for (let c = 0; c < a.length; c++) r[c] = a[c];
    for (let c = 0; c < i.length; c++) r[a.length + c] = i[c];
    return r;
  },
  pw = (a, i) => ({
    classGroupId: a,
    validator: i,
  }),
  cy = (a = new Map(), i = null, r) => ({
    nextPart: a,
    validators: i,
    classGroupId: r,
  }),
  mr = "-",
  Kp = [],
  gw = "arbitrary..",
  yw = (a) => {
    const i = vw(a),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: c } = a;
    return {
      getClassGroupId: (h) => {
        if (h.startsWith("[") && h.endsWith("]")) return xw(h);
        const g = h.split(mr),
          y = g[0] === "" && g.length > 1 ? 1 : 0;
        return uy(g, y, i);
      },
      getConflictingClassGroupIds: (h, g) => {
        if (g) {
          const y = c[h],
            p = r[h];
          return y ? (p ? hw(p, y) : y) : p || Kp;
        }
        return r[h] || Kp;
      },
    };
  },
  uy = (a, i, r) => {
    if (a.length - i === 0) return r.classGroupId;
    const f = a[i],
      d = r.nextPart.get(f);
    if (d) {
      const p = uy(a, i + 1, d);
      if (p) return p;
    }
    const h = r.validators;
    if (h === null) return;
    const g = i === 0 ? a.join(mr) : a.slice(i).join(mr),
      y = h.length;
    for (let p = 0; p < y; p++) {
      const w = h[p];
      if (w.validator(g)) return w.classGroupId;
    }
  },
  xw = (a) =>
    a.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const i = a.slice(1, -1),
            r = i.indexOf(":"),
            c = i.slice(0, r);
          return c ? gw + c : void 0;
        })(),
  vw = (a) => {
    const { theme: i, classGroups: r } = a;
    return bw(r, i);
  },
  bw = (a, i) => {
    const r = cy();
    for (const c in a) {
      const f = a[c];
      Qu(f, r, c, i);
    }
    return r;
  },
  Qu = (a, i, r, c) => {
    const f = a.length;
    for (let d = 0; d < f; d++) {
      const h = a[d];
      ww(h, i, r, c);
    }
  },
  ww = (a, i, r, c) => {
    if (typeof a == "string") {
      Sw(a, i, r);
      return;
    }
    if (typeof a == "function") {
      Nw(a, i, r, c);
      return;
    }
    jw(a, i, r, c);
  },
  Sw = (a, i, r) => {
    const c = a === "" ? i : fy(i, a);
    c.classGroupId = r;
  },
  Nw = (a, i, r, c) => {
    if (Ew(a)) {
      Qu(a(c), i, r, c);
      return;
    }
    (i.validators === null && (i.validators = []), i.validators.push(pw(r, a)));
  },
  jw = (a, i, r, c) => {
    const f = Object.entries(a),
      d = f.length;
    for (let h = 0; h < d; h++) {
      const [g, y] = f[h];
      Qu(y, fy(i, g), r, c);
    }
  },
  fy = (a, i) => {
    let r = a;
    const c = i.split(mr),
      f = c.length;
    for (let d = 0; d < f; d++) {
      const h = c[d];
      let g = r.nextPart.get(h);
      (g || ((g = cy()), r.nextPart.set(h, g)), (r = g));
    }
    return r;
  },
  Ew = (a) => "isThemeGetter" in a && a.isThemeGetter === !0,
  Tw = (a) => {
    if (a < 1)
      return {
        get: () => {},
        set: () => {},
      };
    let i = 0,
      r = Object.create(null),
      c = Object.create(null);
    const f = (d, h) => {
      ((r[d] = h), i++, i > a && ((i = 0), (c = r), (r = Object.create(null))));
    };
    return {
      get(d) {
        let h = r[d];
        if (h !== void 0) return h;
        if ((h = c[d]) !== void 0) return (f(d, h), h);
      },
      set(d, h) {
        d in r ? (r[d] = h) : f(d, h);
      },
    };
  },
  Au = "!",
  $p = ":",
  Cw = [],
  Jp = (a, i, r, c, f) => ({
    modifiers: a,
    hasImportantModifier: i,
    baseClassName: r,
    maybePostfixModifierPosition: c,
    isExternal: f,
  }),
  Aw = (a) => {
    const { prefix: i, experimentalParseClassName: r } = a;
    let c = (f) => {
      const d = [];
      let h = 0,
        g = 0,
        y = 0,
        p;
      const w = f.length;
      for (let T = 0; T < w; T++) {
        const O = f[T];
        if (h === 0 && g === 0) {
          if (O === $p) {
            (d.push(f.slice(y, T)), (y = T + 1));
            continue;
          }
          if (O === "/") {
            p = T;
            continue;
          }
        }
        O === "[" ? h++ : O === "]" ? h-- : O === "(" ? g++ : O === ")" && g--;
      }
      const v = d.length === 0 ? f : f.slice(y);
      let E = v,
        A = !1;
      v.endsWith(Au)
        ? ((E = v.slice(0, -1)), (A = !0))
        : v.startsWith(Au) && ((E = v.slice(1)), (A = !0));
      const D = p && p > y ? p - y : void 0;
      return Jp(d, A, E, D);
    };
    if (i) {
      const f = i + $p,
        d = c;
      c = (h) =>
        h.startsWith(f) ? d(h.slice(f.length)) : Jp(Cw, !1, h, void 0, !0);
    }
    if (r) {
      const f = c;
      c = (d) =>
        r({
          className: d,
          parseClassName: f,
        });
    }
    return c;
  },
  Ow = (a) => {
    const i = new Map();
    return (
      a.orderSensitiveModifiers.forEach((r, c) => {
        i.set(r, 1e6 + c);
      }),
      (r) => {
        const c = [];
        let f = [];
        for (let d = 0; d < r.length; d++) {
          const h = r[d],
            g = h[0] === "[",
            y = i.has(h);
          g || y
            ? (f.length > 0 && (f.sort(), c.push(...f), (f = [])), c.push(h))
            : f.push(h);
        }
        return (f.length > 0 && (f.sort(), c.push(...f)), c);
      }
    );
  },
  Rw = (a) => ({
    cache: Tw(a.cacheSize),
    parseClassName: Aw(a),
    sortModifiers: Ow(a),
    ...yw(a),
  }),
  _w = /\s+/,
  Mw = (a, i) => {
    const {
        parseClassName: r,
        getClassGroupId: c,
        getConflictingClassGroupIds: f,
        sortModifiers: d,
      } = i,
      h = [],
      g = a.trim().split(_w);
    let y = "";
    for (let p = g.length - 1; p >= 0; p -= 1) {
      const w = g[p],
        {
          isExternal: v,
          modifiers: E,
          hasImportantModifier: A,
          baseClassName: D,
          maybePostfixModifierPosition: T,
        } = r(w);
      if (v) {
        y = w + (y.length > 0 ? " " + y : y);
        continue;
      }
      let O = !!T,
        U = c(O ? D.substring(0, T) : D);
      if (!U) {
        if (!O) {
          y = w + (y.length > 0 ? " " + y : y);
          continue;
        }
        if (((U = c(D)), !U)) {
          y = w + (y.length > 0 ? " " + y : y);
          continue;
        }
        O = !1;
      }
      const H = E.length === 0 ? "" : E.length === 1 ? E[0] : d(E).join(":"),
        V = A ? H + Au : H,
        Z = V + U;
      if (h.indexOf(Z) > -1) continue;
      h.push(Z);
      const J = f(U, O);
      for (let F = 0; F < J.length; ++F) {
        const X = J[F];
        h.push(V + X);
      }
      y = w + (y.length > 0 ? " " + y : y);
    }
    return y;
  },
  Dw = (...a) => {
    let i = 0,
      r,
      c,
      f = "";
    for (; i < a.length; )
      (r = a[i++]) && (c = dy(r)) && (f && (f += " "), (f += c));
    return f;
  },
  dy = (a) => {
    if (typeof a == "string") return a;
    let i,
      r = "";
    for (let c = 0; c < a.length; c++)
      a[c] && (i = dy(a[c])) && (r && (r += " "), (r += i));
    return r;
  },
  zw = (a, ...i) => {
    let r, c, f, d;
    const h = (y) => {
        const p = i.reduce((w, v) => v(w), a());
        return (
          (r = Rw(p)),
          (c = r.cache.get),
          (f = r.cache.set),
          (d = g),
          g(y)
        );
      },
      g = (y) => {
        const p = c(y);
        if (p) return p;
        const w = Mw(y, r);
        return (f(y, w), w);
      };
    return ((d = h), (...y) => d(Dw(...y)));
  },
  kw = [],
  et = (a) => {
    const i = (r) => r[a] || kw;
    return ((i.isThemeGetter = !0), i);
  },
  my = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  hy = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Lw = /^\d+\/\d+$/,
  Uw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Hw =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Bw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  qw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Gw =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  gl = (a) => Lw.test(a),
  ge = (a) => !!a && !Number.isNaN(Number(a)),
  ta = (a) => !!a && Number.isInteger(Number(a)),
  pu = (a) => a.endsWith("%") && ge(a.slice(0, -1)),
  Tn = (a) => Uw.test(a),
  Yw = () => !0,
  Vw = (a) => Hw.test(a) && !Bw.test(a),
  py = () => !1,
  Qw = (a) => qw.test(a),
  Xw = (a) => Gw.test(a),
  Zw = (a) => !ee(a) && !te(a),
  Kw = (a) => Tl(a, xy, py),
  ee = (a) => my.test(a),
  Ca = (a) => Tl(a, vy, Vw),
  gu = (a) => Tl(a, Ww, ge),
  Pp = (a) => Tl(a, gy, py),
  $w = (a) => Tl(a, yy, Xw),
  ar = (a) => Tl(a, by, Qw),
  te = (a) => hy.test(a),
  ji = (a) => Cl(a, vy),
  Jw = (a) => Cl(a, Iw),
  Fp = (a) => Cl(a, gy),
  Pw = (a) => Cl(a, xy),
  Fw = (a) => Cl(a, yy),
  lr = (a) => Cl(a, by, !0),
  Tl = (a, i, r) => {
    const c = my.exec(a);
    return c ? (c[1] ? i(c[1]) : r(c[2])) : !1;
  },
  Cl = (a, i, r = !1) => {
    const c = hy.exec(a);
    return c ? (c[1] ? i(c[1]) : r) : !1;
  },
  gy = (a) => a === "position" || a === "percentage",
  yy = (a) => a === "image" || a === "url",
  xy = (a) => a === "length" || a === "size" || a === "bg-size",
  vy = (a) => a === "length",
  Ww = (a) => a === "number",
  Iw = (a) => a === "family-name",
  by = (a) => a === "shadow",
  eS = () => {
    const a = et("color"),
      i = et("font"),
      r = et("text"),
      c = et("font-weight"),
      f = et("tracking"),
      d = et("leading"),
      h = et("breakpoint"),
      g = et("container"),
      y = et("spacing"),
      p = et("radius"),
      w = et("shadow"),
      v = et("inset-shadow"),
      E = et("text-shadow"),
      A = et("drop-shadow"),
      D = et("blur"),
      T = et("perspective"),
      O = et("aspect"),
      U = et("ease"),
      H = et("animate"),
      V = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      Z = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      J = () => [...Z(), te, ee],
      F = () => ["auto", "hidden", "clip", "visible", "scroll"],
      X = () => ["auto", "contain", "none"],
      $ = () => [te, ee, y],
      oe = () => [gl, "full", "auto", ...$()],
      ye = () => [ta, "none", "subgrid", te, ee],
      xe = () => [
        "auto",
        {
          span: ["full", ta, te, ee],
        },
        ta,
        te,
        ee,
      ],
      pe = () => [ta, "auto", te, ee],
      Ee = () => ["auto", "min", "max", "fr", te, ee],
      W = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      fe = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      R = () => ["auto", ...$()],
      Q = () => [
        gl,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...$(),
      ],
      L = () => [a, te, ee],
      ie = () => [
        ...Z(),
        Fp,
        Pp,
        {
          position: [te, ee],
        },
      ],
      ue = () => [
        "no-repeat",
        {
          repeat: ["", "x", "y", "space", "round"],
        },
      ],
      N = () => [
        "auto",
        "cover",
        "contain",
        Pw,
        Kw,
        {
          size: [te, ee],
        },
      ],
      q = () => [pu, ji, Ca],
      K = () => ["", "none", "full", p, te, ee],
      P = () => ["", ge, ji, Ca],
      re = () => ["solid", "dashed", "dotted", "double"],
      de = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      ae = () => [ge, pu, Fp, Pp],
      Qe = () => ["", "none", D, te, ee],
      _e = () => ["none", ge, te, ee],
      Mt = () => ["none", ge, te, ee],
      Pt = () => [ge, te, ee],
      Ft = () => [gl, "full", ...$()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Tn],
        breakpoint: [Tn],
        color: [Yw],
        container: [Tn],
        "drop-shadow": [Tn],
        ease: ["in", "out", "in-out"],
        font: [Zw],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Tn],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Tn],
        shadow: [Tn],
        spacing: ["px", ge],
        text: [Tn],
        "text-shadow": [Tn],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [
          {
            aspect: ["auto", "square", gl, ee, te, O],
          },
        ],
        container: ["container"],
        columns: [
          {
            columns: [ge, ee, te, g],
          },
        ],
        "break-after": [
          {
            "break-after": V(),
          },
        ],
        "break-before": [
          {
            "break-before": V(),
          },
        ],
        "break-inside": [
          {
            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
          },
        ],
        "box-decoration": [
          {
            "box-decoration": ["slice", "clone"],
          },
        ],
        box: [
          {
            box: ["border", "content"],
          },
        ],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [
          {
            float: ["right", "left", "none", "start", "end"],
          },
        ],
        clear: [
          {
            clear: ["left", "right", "both", "none", "start", "end"],
          },
        ],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          {
            object: ["contain", "cover", "fill", "none", "scale-down"],
          },
        ],
        "object-position": [
          {
            object: J(),
          },
        ],
        overflow: [
          {
            overflow: F(),
          },
        ],
        "overflow-x": [
          {
            "overflow-x": F(),
          },
        ],
        "overflow-y": [
          {
            "overflow-y": F(),
          },
        ],
        overscroll: [
          {
            overscroll: X(),
          },
        ],
        "overscroll-x": [
          {
            "overscroll-x": X(),
          },
        ],
        "overscroll-y": [
          {
            "overscroll-y": X(),
          },
        ],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [
          {
            inset: oe(),
          },
        ],
        "inset-x": [
          {
            "inset-x": oe(),
          },
        ],
        "inset-y": [
          {
            "inset-y": oe(),
          },
        ],
        start: [
          {
            start: oe(),
          },
        ],
        end: [
          {
            end: oe(),
          },
        ],
        top: [
          {
            top: oe(),
          },
        ],
        right: [
          {
            right: oe(),
          },
        ],
        bottom: [
          {
            bottom: oe(),
          },
        ],
        left: [
          {
            left: oe(),
          },
        ],
        visibility: ["visible", "invisible", "collapse"],
        z: [
          {
            z: [ta, "auto", te, ee],
          },
        ],
        basis: [
          {
            basis: [gl, "full", "auto", g, ...$()],
          },
        ],
        "flex-direction": [
          {
            flex: ["row", "row-reverse", "col", "col-reverse"],
          },
        ],
        "flex-wrap": [
          {
            flex: ["nowrap", "wrap", "wrap-reverse"],
          },
        ],
        flex: [
          {
            flex: [ge, gl, "auto", "initial", "none", ee],
          },
        ],
        grow: [
          {
            grow: ["", ge, te, ee],
          },
        ],
        shrink: [
          {
            shrink: ["", ge, te, ee],
          },
        ],
        order: [
          {
            order: [ta, "first", "last", "none", te, ee],
          },
        ],
        "grid-cols": [
          {
            "grid-cols": ye(),
          },
        ],
        "col-start-end": [
          {
            col: xe(),
          },
        ],
        "col-start": [
          {
            "col-start": pe(),
          },
        ],
        "col-end": [
          {
            "col-end": pe(),
          },
        ],
        "grid-rows": [
          {
            "grid-rows": ye(),
          },
        ],
        "row-start-end": [
          {
            row: xe(),
          },
        ],
        "row-start": [
          {
            "row-start": pe(),
          },
        ],
        "row-end": [
          {
            "row-end": pe(),
          },
        ],
        "grid-flow": [
          {
            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
          },
        ],
        "auto-cols": [
          {
            "auto-cols": Ee(),
          },
        ],
        "auto-rows": [
          {
            "auto-rows": Ee(),
          },
        ],
        gap: [
          {
            gap: $(),
          },
        ],
        "gap-x": [
          {
            "gap-x": $(),
          },
        ],
        "gap-y": [
          {
            "gap-y": $(),
          },
        ],
        "justify-content": [
          {
            justify: [...W(), "normal"],
          },
        ],
        "justify-items": [
          {
            "justify-items": [...fe(), "normal"],
          },
        ],
        "justify-self": [
          {
            "justify-self": ["auto", ...fe()],
          },
        ],
        "align-content": [
          {
            content: ["normal", ...W()],
          },
        ],
        "align-items": [
          {
            items: [
              ...fe(),
              {
                baseline: ["", "last"],
              },
            ],
          },
        ],
        "align-self": [
          {
            self: [
              "auto",
              ...fe(),
              {
                baseline: ["", "last"],
              },
            ],
          },
        ],
        "place-content": [
          {
            "place-content": W(),
          },
        ],
        "place-items": [
          {
            "place-items": [...fe(), "baseline"],
          },
        ],
        "place-self": [
          {
            "place-self": ["auto", ...fe()],
          },
        ],
        p: [
          {
            p: $(),
          },
        ],
        px: [
          {
            px: $(),
          },
        ],
        py: [
          {
            py: $(),
          },
        ],
        ps: [
          {
            ps: $(),
          },
        ],
        pe: [
          {
            pe: $(),
          },
        ],
        pt: [
          {
            pt: $(),
          },
        ],
        pr: [
          {
            pr: $(),
          },
        ],
        pb: [
          {
            pb: $(),
          },
        ],
        pl: [
          {
            pl: $(),
          },
        ],
        m: [
          {
            m: R(),
          },
        ],
        mx: [
          {
            mx: R(),
          },
        ],
        my: [
          {
            my: R(),
          },
        ],
        ms: [
          {
            ms: R(),
          },
        ],
        me: [
          {
            me: R(),
          },
        ],
        mt: [
          {
            mt: R(),
          },
        ],
        mr: [
          {
            mr: R(),
          },
        ],
        mb: [
          {
            mb: R(),
          },
        ],
        ml: [
          {
            ml: R(),
          },
        ],
        "space-x": [
          {
            "space-x": $(),
          },
        ],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [
          {
            "space-y": $(),
          },
        ],
        "space-y-reverse": ["space-y-reverse"],
        size: [
          {
            size: Q(),
          },
        ],
        w: [
          {
            w: [g, "screen", ...Q()],
          },
        ],
        "min-w": [
          {
            "min-w": [g, "screen", "none", ...Q()],
          },
        ],
        "max-w": [
          {
            "max-w": [
              g,
              "screen",
              "none",
              "prose",
              {
                screen: [h],
              },
              ...Q(),
            ],
          },
        ],
        h: [
          {
            h: ["screen", "lh", ...Q()],
          },
        ],
        "min-h": [
          {
            "min-h": ["screen", "lh", "none", ...Q()],
          },
        ],
        "max-h": [
          {
            "max-h": ["screen", "lh", ...Q()],
          },
        ],
        "font-size": [
          {
            text: ["base", r, ji, Ca],
          },
        ],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [c, te, gu],
          },
        ],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              pu,
              ee,
            ],
          },
        ],
        "font-family": [
          {
            font: [Jw, ee, i],
          },
        ],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [f, te, ee],
          },
        ],
        "line-clamp": [
          {
            "line-clamp": [ge, "none", te, gu],
          },
        ],
        leading: [
          {
            leading: [d, ...$()],
          },
        ],
        "list-image": [
          {
            "list-image": ["none", te, ee],
          },
        ],
        "list-style-position": [
          {
            list: ["inside", "outside"],
          },
        ],
        "list-style-type": [
          {
            list: ["disc", "decimal", "none", te, ee],
          },
        ],
        "text-alignment": [
          {
            text: ["left", "center", "right", "justify", "start", "end"],
          },
        ],
        "placeholder-color": [
          {
            placeholder: L(),
          },
        ],
        "text-color": [
          {
            text: L(),
          },
        ],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [
          {
            decoration: [...re(), "wavy"],
          },
        ],
        "text-decoration-thickness": [
          {
            decoration: [ge, "from-font", "auto", te, Ca],
          },
        ],
        "text-decoration-color": [
          {
            decoration: L(),
          },
        ],
        "underline-offset": [
          {
            "underline-offset": [ge, "auto", te, ee],
          },
        ],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [
          {
            text: ["wrap", "nowrap", "balance", "pretty"],
          },
        ],
        indent: [
          {
            indent: $(),
          },
        ],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              te,
              ee,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [
          {
            break: ["normal", "words", "all", "keep"],
          },
        ],
        wrap: [
          {
            wrap: ["break-word", "anywhere", "normal"],
          },
        ],
        hyphens: [
          {
            hyphens: ["none", "manual", "auto"],
          },
        ],
        content: [
          {
            content: ["none", te, ee],
          },
        ],
        "bg-attachment": [
          {
            bg: ["fixed", "local", "scroll"],
          },
        ],
        "bg-clip": [
          {
            "bg-clip": ["border", "padding", "content", "text"],
          },
        ],
        "bg-origin": [
          {
            "bg-origin": ["border", "padding", "content"],
          },
        ],
        "bg-position": [
          {
            bg: ie(),
          },
        ],
        "bg-repeat": [
          {
            bg: ue(),
          },
        ],
        "bg-size": [
          {
            bg: N(),
          },
        ],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  {
                    to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  ta,
                  te,
                  ee,
                ],
                radial: ["", te, ee],
                conic: [ta, te, ee],
              },
              Fw,
              $w,
            ],
          },
        ],
        "bg-color": [
          {
            bg: L(),
          },
        ],
        "gradient-from-pos": [
          {
            from: q(),
          },
        ],
        "gradient-via-pos": [
          {
            via: q(),
          },
        ],
        "gradient-to-pos": [
          {
            to: q(),
          },
        ],
        "gradient-from": [
          {
            from: L(),
          },
        ],
        "gradient-via": [
          {
            via: L(),
          },
        ],
        "gradient-to": [
          {
            to: L(),
          },
        ],
        rounded: [
          {
            rounded: K(),
          },
        ],
        "rounded-s": [
          {
            "rounded-s": K(),
          },
        ],
        "rounded-e": [
          {
            "rounded-e": K(),
          },
        ],
        "rounded-t": [
          {
            "rounded-t": K(),
          },
        ],
        "rounded-r": [
          {
            "rounded-r": K(),
          },
        ],
        "rounded-b": [
          {
            "rounded-b": K(),
          },
        ],
        "rounded-l": [
          {
            "rounded-l": K(),
          },
        ],
        "rounded-ss": [
          {
            "rounded-ss": K(),
          },
        ],
        "rounded-se": [
          {
            "rounded-se": K(),
          },
        ],
        "rounded-ee": [
          {
            "rounded-ee": K(),
          },
        ],
        "rounded-es": [
          {
            "rounded-es": K(),
          },
        ],
        "rounded-tl": [
          {
            "rounded-tl": K(),
          },
        ],
        "rounded-tr": [
          {
            "rounded-tr": K(),
          },
        ],
        "rounded-br": [
          {
            "rounded-br": K(),
          },
        ],
        "rounded-bl": [
          {
            "rounded-bl": K(),
          },
        ],
        "border-w": [
          {
            border: P(),
          },
        ],
        "border-w-x": [
          {
            "border-x": P(),
          },
        ],
        "border-w-y": [
          {
            "border-y": P(),
          },
        ],
        "border-w-s": [
          {
            "border-s": P(),
          },
        ],
        "border-w-e": [
          {
            "border-e": P(),
          },
        ],
        "border-w-t": [
          {
            "border-t": P(),
          },
        ],
        "border-w-r": [
          {
            "border-r": P(),
          },
        ],
        "border-w-b": [
          {
            "border-b": P(),
          },
        ],
        "border-w-l": [
          {
            "border-l": P(),
          },
        ],
        "divide-x": [
          {
            "divide-x": P(),
          },
        ],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [
          {
            "divide-y": P(),
          },
        ],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [
          {
            border: [...re(), "hidden", "none"],
          },
        ],
        "divide-style": [
          {
            divide: [...re(), "hidden", "none"],
          },
        ],
        "border-color": [
          {
            border: L(),
          },
        ],
        "border-color-x": [
          {
            "border-x": L(),
          },
        ],
        "border-color-y": [
          {
            "border-y": L(),
          },
        ],
        "border-color-s": [
          {
            "border-s": L(),
          },
        ],
        "border-color-e": [
          {
            "border-e": L(),
          },
        ],
        "border-color-t": [
          {
            "border-t": L(),
          },
        ],
        "border-color-r": [
          {
            "border-r": L(),
          },
        ],
        "border-color-b": [
          {
            "border-b": L(),
          },
        ],
        "border-color-l": [
          {
            "border-l": L(),
          },
        ],
        "divide-color": [
          {
            divide: L(),
          },
        ],
        "outline-style": [
          {
            outline: [...re(), "none", "hidden"],
          },
        ],
        "outline-offset": [
          {
            "outline-offset": [ge, te, ee],
          },
        ],
        "outline-w": [
          {
            outline: ["", ge, ji, Ca],
          },
        ],
        "outline-color": [
          {
            outline: L(),
          },
        ],
        shadow: [
          {
            shadow: ["", "none", w, lr, ar],
          },
        ],
        "shadow-color": [
          {
            shadow: L(),
          },
        ],
        "inset-shadow": [
          {
            "inset-shadow": ["none", v, lr, ar],
          },
        ],
        "inset-shadow-color": [
          {
            "inset-shadow": L(),
          },
        ],
        "ring-w": [
          {
            ring: P(),
          },
        ],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [
          {
            ring: L(),
          },
        ],
        "ring-offset-w": [
          {
            "ring-offset": [ge, Ca],
          },
        ],
        "ring-offset-color": [
          {
            "ring-offset": L(),
          },
        ],
        "inset-ring-w": [
          {
            "inset-ring": P(),
          },
        ],
        "inset-ring-color": [
          {
            "inset-ring": L(),
          },
        ],
        "text-shadow": [
          {
            "text-shadow": ["none", E, lr, ar],
          },
        ],
        "text-shadow-color": [
          {
            "text-shadow": L(),
          },
        ],
        opacity: [
          {
            opacity: [ge, te, ee],
          },
        ],
        "mix-blend": [
          {
            "mix-blend": [...de(), "plus-darker", "plus-lighter"],
          },
        ],
        "bg-blend": [
          {
            "bg-blend": de(),
          },
        ],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          {
            mask: ["add", "subtract", "intersect", "exclude"],
          },
        ],
        "mask-image-linear-pos": [
          {
            "mask-linear": [ge],
          },
        ],
        "mask-image-linear-from-pos": [
          {
            "mask-linear-from": ae(),
          },
        ],
        "mask-image-linear-to-pos": [
          {
            "mask-linear-to": ae(),
          },
        ],
        "mask-image-linear-from-color": [
          {
            "mask-linear-from": L(),
          },
        ],
        "mask-image-linear-to-color": [
          {
            "mask-linear-to": L(),
          },
        ],
        "mask-image-t-from-pos": [
          {
            "mask-t-from": ae(),
          },
        ],
        "mask-image-t-to-pos": [
          {
            "mask-t-to": ae(),
          },
        ],
        "mask-image-t-from-color": [
          {
            "mask-t-from": L(),
          },
        ],
        "mask-image-t-to-color": [
          {
            "mask-t-to": L(),
          },
        ],
        "mask-image-r-from-pos": [
          {
            "mask-r-from": ae(),
          },
        ],
        "mask-image-r-to-pos": [
          {
            "mask-r-to": ae(),
          },
        ],
        "mask-image-r-from-color": [
          {
            "mask-r-from": L(),
          },
        ],
        "mask-image-r-to-color": [
          {
            "mask-r-to": L(),
          },
        ],
        "mask-image-b-from-pos": [
          {
            "mask-b-from": ae(),
          },
        ],
        "mask-image-b-to-pos": [
          {
            "mask-b-to": ae(),
          },
        ],
        "mask-image-b-from-color": [
          {
            "mask-b-from": L(),
          },
        ],
        "mask-image-b-to-color": [
          {
            "mask-b-to": L(),
          },
        ],
        "mask-image-l-from-pos": [
          {
            "mask-l-from": ae(),
          },
        ],
        "mask-image-l-to-pos": [
          {
            "mask-l-to": ae(),
          },
        ],
        "mask-image-l-from-color": [
          {
            "mask-l-from": L(),
          },
        ],
        "mask-image-l-to-color": [
          {
            "mask-l-to": L(),
          },
        ],
        "mask-image-x-from-pos": [
          {
            "mask-x-from": ae(),
          },
        ],
        "mask-image-x-to-pos": [
          {
            "mask-x-to": ae(),
          },
        ],
        "mask-image-x-from-color": [
          {
            "mask-x-from": L(),
          },
        ],
        "mask-image-x-to-color": [
          {
            "mask-x-to": L(),
          },
        ],
        "mask-image-y-from-pos": [
          {
            "mask-y-from": ae(),
          },
        ],
        "mask-image-y-to-pos": [
          {
            "mask-y-to": ae(),
          },
        ],
        "mask-image-y-from-color": [
          {
            "mask-y-from": L(),
          },
        ],
        "mask-image-y-to-color": [
          {
            "mask-y-to": L(),
          },
        ],
        "mask-image-radial": [
          {
            "mask-radial": [te, ee],
          },
        ],
        "mask-image-radial-from-pos": [
          {
            "mask-radial-from": ae(),
          },
        ],
        "mask-image-radial-to-pos": [
          {
            "mask-radial-to": ae(),
          },
        ],
        "mask-image-radial-from-color": [
          {
            "mask-radial-from": L(),
          },
        ],
        "mask-image-radial-to-color": [
          {
            "mask-radial-to": L(),
          },
        ],
        "mask-image-radial-shape": [
          {
            "mask-radial": ["circle", "ellipse"],
          },
        ],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              {
                closest: ["side", "corner"],
                farthest: ["side", "corner"],
              },
            ],
          },
        ],
        "mask-image-radial-pos": [
          {
            "mask-radial-at": Z(),
          },
        ],
        "mask-image-conic-pos": [
          {
            "mask-conic": [ge],
          },
        ],
        "mask-image-conic-from-pos": [
          {
            "mask-conic-from": ae(),
          },
        ],
        "mask-image-conic-to-pos": [
          {
            "mask-conic-to": ae(),
          },
        ],
        "mask-image-conic-from-color": [
          {
            "mask-conic-from": L(),
          },
        ],
        "mask-image-conic-to-color": [
          {
            "mask-conic-to": L(),
          },
        ],
        "mask-mode": [
          {
            mask: ["alpha", "luminance", "match"],
          },
        ],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [
          {
            mask: ie(),
          },
        ],
        "mask-repeat": [
          {
            mask: ue(),
          },
        ],
        "mask-size": [
          {
            mask: N(),
          },
        ],
        "mask-type": [
          {
            "mask-type": ["alpha", "luminance"],
          },
        ],
        "mask-image": [
          {
            mask: ["none", te, ee],
          },
        ],
        filter: [
          {
            filter: ["", "none", te, ee],
          },
        ],
        blur: [
          {
            blur: Qe(),
          },
        ],
        brightness: [
          {
            brightness: [ge, te, ee],
          },
        ],
        contrast: [
          {
            contrast: [ge, te, ee],
          },
        ],
        "drop-shadow": [
          {
            "drop-shadow": ["", "none", A, lr, ar],
          },
        ],
        "drop-shadow-color": [
          {
            "drop-shadow": L(),
          },
        ],
        grayscale: [
          {
            grayscale: ["", ge, te, ee],
          },
        ],
        "hue-rotate": [
          {
            "hue-rotate": [ge, te, ee],
          },
        ],
        invert: [
          {
            invert: ["", ge, te, ee],
          },
        ],
        saturate: [
          {
            saturate: [ge, te, ee],
          },
        ],
        sepia: [
          {
            sepia: ["", ge, te, ee],
          },
        ],
        "backdrop-filter": [
          {
            "backdrop-filter": ["", "none", te, ee],
          },
        ],
        "backdrop-blur": [
          {
            "backdrop-blur": Qe(),
          },
        ],
        "backdrop-brightness": [
          {
            "backdrop-brightness": [ge, te, ee],
          },
        ],
        "backdrop-contrast": [
          {
            "backdrop-contrast": [ge, te, ee],
          },
        ],
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": ["", ge, te, ee],
          },
        ],
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [ge, te, ee],
          },
        ],
        "backdrop-invert": [
          {
            "backdrop-invert": ["", ge, te, ee],
          },
        ],
        "backdrop-opacity": [
          {
            "backdrop-opacity": [ge, te, ee],
          },
        ],
        "backdrop-saturate": [
          {
            "backdrop-saturate": [ge, te, ee],
          },
        ],
        "backdrop-sepia": [
          {
            "backdrop-sepia": ["", ge, te, ee],
          },
        ],
        "border-collapse": [
          {
            border: ["collapse", "separate"],
          },
        ],
        "border-spacing": [
          {
            "border-spacing": $(),
          },
        ],
        "border-spacing-x": [
          {
            "border-spacing-x": $(),
          },
        ],
        "border-spacing-y": [
          {
            "border-spacing-y": $(),
          },
        ],
        "table-layout": [
          {
            table: ["auto", "fixed"],
          },
        ],
        caption: [
          {
            caption: ["top", "bottom"],
          },
        ],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              te,
              ee,
            ],
          },
        ],
        "transition-behavior": [
          {
            transition: ["normal", "discrete"],
          },
        ],
        duration: [
          {
            duration: [ge, "initial", te, ee],
          },
        ],
        ease: [
          {
            ease: ["linear", "initial", U, te, ee],
          },
        ],
        delay: [
          {
            delay: [ge, te, ee],
          },
        ],
        animate: [
          {
            animate: ["none", H, te, ee],
          },
        ],
        backface: [
          {
            backface: ["hidden", "visible"],
          },
        ],
        perspective: [
          {
            perspective: [T, te, ee],
          },
        ],
        "perspective-origin": [
          {
            "perspective-origin": J(),
          },
        ],
        rotate: [
          {
            rotate: _e(),
          },
        ],
        "rotate-x": [
          {
            "rotate-x": _e(),
          },
        ],
        "rotate-y": [
          {
            "rotate-y": _e(),
          },
        ],
        "rotate-z": [
          {
            "rotate-z": _e(),
          },
        ],
        scale: [
          {
            scale: Mt(),
          },
        ],
        "scale-x": [
          {
            "scale-x": Mt(),
          },
        ],
        "scale-y": [
          {
            "scale-y": Mt(),
          },
        ],
        "scale-z": [
          {
            "scale-z": Mt(),
          },
        ],
        "scale-3d": ["scale-3d"],
        skew: [
          {
            skew: Pt(),
          },
        ],
        "skew-x": [
          {
            "skew-x": Pt(),
          },
        ],
        "skew-y": [
          {
            "skew-y": Pt(),
          },
        ],
        transform: [
          {
            transform: [te, ee, "", "none", "gpu", "cpu"],
          },
        ],
        "transform-origin": [
          {
            origin: J(),
          },
        ],
        "transform-style": [
          {
            transform: ["3d", "flat"],
          },
        ],
        translate: [
          {
            translate: Ft(),
          },
        ],
        "translate-x": [
          {
            "translate-x": Ft(),
          },
        ],
        "translate-y": [
          {
            "translate-y": Ft(),
          },
        ],
        "translate-z": [
          {
            "translate-z": Ft(),
          },
        ],
        "translate-none": ["translate-none"],
        accent: [
          {
            accent: L(),
          },
        ],
        appearance: [
          {
            appearance: ["none", "auto"],
          },
        ],
        "caret-color": [
          {
            caret: L(),
          },
        ],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              te,
              ee,
            ],
          },
        ],
        "field-sizing": [
          {
            "field-sizing": ["fixed", "content"],
          },
        ],
        "pointer-events": [
          {
            "pointer-events": ["auto", "none"],
          },
        ],
        resize: [
          {
            resize: ["none", "", "y", "x"],
          },
        ],
        "scroll-behavior": [
          {
            scroll: ["auto", "smooth"],
          },
        ],
        "scroll-m": [
          {
            "scroll-m": $(),
          },
        ],
        "scroll-mx": [
          {
            "scroll-mx": $(),
          },
        ],
        "scroll-my": [
          {
            "scroll-my": $(),
          },
        ],
        "scroll-ms": [
          {
            "scroll-ms": $(),
          },
        ],
        "scroll-me": [
          {
            "scroll-me": $(),
          },
        ],
        "scroll-mt": [
          {
            "scroll-mt": $(),
          },
        ],
        "scroll-mr": [
          {
            "scroll-mr": $(),
          },
        ],
        "scroll-mb": [
          {
            "scroll-mb": $(),
          },
        ],
        "scroll-ml": [
          {
            "scroll-ml": $(),
          },
        ],
        "scroll-p": [
          {
            "scroll-p": $(),
          },
        ],
        "scroll-px": [
          {
            "scroll-px": $(),
          },
        ],
        "scroll-py": [
          {
            "scroll-py": $(),
          },
        ],
        "scroll-ps": [
          {
            "scroll-ps": $(),
          },
        ],
        "scroll-pe": [
          {
            "scroll-pe": $(),
          },
        ],
        "scroll-pt": [
          {
            "scroll-pt": $(),
          },
        ],
        "scroll-pr": [
          {
            "scroll-pr": $(),
          },
        ],
        "scroll-pb": [
          {
            "scroll-pb": $(),
          },
        ],
        "scroll-pl": [
          {
            "scroll-pl": $(),
          },
        ],
        "snap-align": [
          {
            snap: ["start", "end", "center", "align-none"],
          },
        ],
        "snap-stop": [
          {
            snap: ["normal", "always"],
          },
        ],
        "snap-type": [
          {
            snap: ["none", "x", "y", "both"],
          },
        ],
        "snap-strictness": [
          {
            snap: ["mandatory", "proximity"],
          },
        ],
        touch: [
          {
            touch: ["auto", "none", "manipulation"],
          },
        ],
        "touch-x": [
          {
            "touch-pan": ["x", "left", "right"],
          },
        ],
        "touch-y": [
          {
            "touch-pan": ["y", "up", "down"],
          },
        ],
        "touch-pz": ["touch-pinch-zoom"],
        select: [
          {
            select: ["none", "text", "all", "auto"],
          },
        ],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", te, ee],
          },
        ],
        fill: [
          {
            fill: ["none", ...L()],
          },
        ],
        "stroke-w": [
          {
            stroke: [ge, ji, Ca, gu],
          },
        ],
        stroke: [
          {
            stroke: ["none", ...L()],
          },
        ],
        "forced-color-adjust": [
          {
            "forced-color-adjust": ["auto", "none"],
          },
        ],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"],
      },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  tS = zw(eS);

function We(...a) {
  return tS(ny(a));
}
const nS = R2,
  wy = b.forwardRef(({ className: a, ...i }, r) =>
    u.jsx(Jg, {
      ref: r,
      className: We(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        a,
      ),
      ...i,
    }),
  );
wy.displayName = Jg.displayName;
const aS = _2(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    },
  ),
  Sy = b.forwardRef(({ className: a, variant: i, ...r }, c) =>
    u.jsx(Pg, {
      ref: c,
      className: We(
        aS({
          variant: i,
        }),
        a,
      ),
      ...r,
    }),
  );
Sy.displayName = Pg.displayName;
const lS = b.forwardRef(({ className: a, ...i }, r) =>
  u.jsx(Ig, {
    ref: r,
    className: We(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      a,
    ),
    ...i,
  }),
);
lS.displayName = Ig.displayName;
const Ny = b.forwardRef(({ className: a, ...i }, r) =>
  u.jsx(ey, {
    ref: r,
    className: We(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      a,
    ),
    "toast-close": "",
    ...i,
    children: u.jsx(la, {
      className: "h-4 w-4",
    }),
  }),
);
Ny.displayName = ey.displayName;
const jy = b.forwardRef(({ className: a, ...i }, r) =>
  u.jsx(Fg, {
    ref: r,
    className: We("text-sm font-semibold", a),
    ...i,
  }),
);
jy.displayName = Fg.displayName;
const Ey = b.forwardRef(({ className: a, ...i }, r) =>
  u.jsx(Wg, {
    ref: r,
    className: We("text-sm opacity-90", a),
    ...i,
  }),
);
Ey.displayName = Wg.displayName;

function iS() {
  const { toasts: a } = D1();
  return u.jsxs(nS, {
    children: [
      a.map(function ({ id: i, title: r, description: c, action: f, ...d }) {
        return u.jsxs(
          Sy,
          {
            ...d,
            children: [
              u.jsxs("div", {
                className: "grid gap-1",
                children: [
                  r &&
                    u.jsx(jy, {
                      children: r,
                    }),
                  c &&
                    u.jsx(Ey, {
                      children: c,
                    }),
                ],
              }),
              f,
              u.jsx(Ny, {}),
            ],
          },
          i,
        );
      }),
      u.jsx(wy, {}),
    ],
  });
}
var sS = Sr[" useId ".trim().toString()] || (() => {}),
  rS = 0;

function Ty(a) {
  const [i, r] = b.useState(sS());
  return (
    ln(() => {
      r((c) => c ?? String(rS++));
    }, [a]),
    i ? `radix-${i}` : ""
  );
}
const oS = ["top", "right", "bottom", "left"],
  ia = Math.min,
  Rt = Math.max,
  hr = Math.round,
  ir = Math.floor,
  an = (a) => ({
    x: a,
    y: a,
  }),
  cS = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom",
  },
  uS = {
    start: "end",
    end: "start",
  };

function Ou(a, i, r) {
  return Rt(a, ia(i, r));
}

function An(a, i) {
  return typeof a == "function" ? a(i) : a;
}

function On(a) {
  return a.split("-")[0];
}

function Al(a) {
  return a.split("-")[1];
}

function Xu(a) {
  return a === "x" ? "y" : "x";
}

function Zu(a) {
  return a === "y" ? "height" : "width";
}
const fS = new Set(["top", "bottom"]);

function nn(a) {
  return fS.has(On(a)) ? "y" : "x";
}

function Ku(a) {
  return Xu(nn(a));
}

function dS(a, i, r) {
  r === void 0 && (r = !1);
  const c = Al(a),
    f = Ku(a),
    d = Zu(f);
  let h =
    f === "x"
      ? c === (r ? "end" : "start")
        ? "right"
        : "left"
      : c === "start"
        ? "bottom"
        : "top";
  return (i.reference[d] > i.floating[d] && (h = pr(h)), [h, pr(h)]);
}

function mS(a) {
  const i = pr(a);
  return [Ru(a), i, Ru(i)];
}

function Ru(a) {
  return a.replace(/start|end/g, (i) => uS[i]);
}
const Wp = ["left", "right"],
  Ip = ["right", "left"],
  hS = ["top", "bottom"],
  pS = ["bottom", "top"];

function gS(a, i, r) {
  switch (a) {
    case "top":
    case "bottom":
      return r ? (i ? Ip : Wp) : i ? Wp : Ip;
    case "left":
    case "right":
      return i ? hS : pS;
    default:
      return [];
  }
}

function yS(a, i, r, c) {
  const f = Al(a);
  let d = gS(On(a), r === "start", c);
  return (
    f && ((d = d.map((h) => h + "-" + f)), i && (d = d.concat(d.map(Ru)))),
    d
  );
}

function pr(a) {
  return a.replace(/left|right|bottom|top/g, (i) => cS[i]);
}

function xS(a) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...a,
  };
}

function Cy(a) {
  return typeof a != "number"
    ? xS(a)
    : {
        top: a,
        right: a,
        bottom: a,
        left: a,
      };
}

function gr(a) {
  const { x: i, y: r, width: c, height: f } = a;
  return {
    width: c,
    height: f,
    top: r,
    left: i,
    right: i + c,
    bottom: r + f,
    x: i,
    y: r,
  };
}

function eg(a, i, r) {
  let { reference: c, floating: f } = a;
  const d = nn(i),
    h = Ku(i),
    g = Zu(h),
    y = On(i),
    p = d === "y",
    w = c.x + c.width / 2 - f.width / 2,
    v = c.y + c.height / 2 - f.height / 2,
    E = c[g] / 2 - f[g] / 2;
  let A;
  switch (y) {
    case "top":
      A = {
        x: w,
        y: c.y - f.height,
      };
      break;
    case "bottom":
      A = {
        x: w,
        y: c.y + c.height,
      };
      break;
    case "right":
      A = {
        x: c.x + c.width,
        y: v,
      };
      break;
    case "left":
      A = {
        x: c.x - f.width,
        y: v,
      };
      break;
    default:
      A = {
        x: c.x,
        y: c.y,
      };
  }
  switch (Al(i)) {
    case "start":
      A[h] -= E * (r && p ? -1 : 1);
      break;
    case "end":
      A[h] += E * (r && p ? -1 : 1);
      break;
  }
  return A;
}
const vS = async (a, i, r) => {
  const {
      placement: c = "bottom",
      strategy: f = "absolute",
      middleware: d = [],
      platform: h,
    } = r,
    g = d.filter(Boolean),
    y = await (h.isRTL == null ? void 0 : h.isRTL(i));
  let p = await h.getElementRects({
      reference: a,
      floating: i,
      strategy: f,
    }),
    { x: w, y: v } = eg(p, c, y),
    E = c,
    A = {},
    D = 0;
  for (let T = 0; T < g.length; T++) {
    const { name: O, fn: U } = g[T],
      {
        x: H,
        y: V,
        data: Z,
        reset: J,
      } = await U({
        x: w,
        y: v,
        initialPlacement: c,
        placement: E,
        strategy: f,
        middlewareData: A,
        rects: p,
        platform: h,
        elements: {
          reference: a,
          floating: i,
        },
      });
    ((w = H ?? w),
      (v = V ?? v),
      (A = {
        ...A,
        [O]: {
          ...A[O],
          ...Z,
        },
      }),
      J &&
        D <= 50 &&
        (D++,
        typeof J == "object" &&
          (J.placement && (E = J.placement),
          J.rects &&
            (p =
              J.rects === !0
                ? await h.getElementRects({
                    reference: a,
                    floating: i,
                    strategy: f,
                  })
                : J.rects),
          ({ x: w, y: v } = eg(p, E, y))),
        (T = -1)));
  }
  return {
    x: w,
    y: v,
    placement: E,
    strategy: f,
    middlewareData: A,
  };
};
async function Ri(a, i) {
  var r;
  i === void 0 && (i = {});
  const { x: c, y: f, platform: d, rects: h, elements: g, strategy: y } = a,
    {
      boundary: p = "clippingAncestors",
      rootBoundary: w = "viewport",
      elementContext: v = "floating",
      altBoundary: E = !1,
      padding: A = 0,
    } = An(i, a),
    D = Cy(A),
    O = g[E ? (v === "floating" ? "reference" : "floating") : v],
    U = gr(
      await d.getClippingRect({
        element:
          (r = await (d.isElement == null ? void 0 : d.isElement(O))) == null ||
          r
            ? O
            : O.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(g.floating))),
        boundary: p,
        rootBoundary: w,
        strategy: y,
      }),
    ),
    H =
      v === "floating"
        ? {
            x: c,
            y: f,
            width: h.floating.width,
            height: h.floating.height,
          }
        : h.reference,
    V = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(g.floating)),
    Z = (await (d.isElement == null ? void 0 : d.isElement(V)))
      ? (await (d.getScale == null ? void 0 : d.getScale(V))) || {
          x: 1,
          y: 1,
        }
      : {
          x: 1,
          y: 1,
        },
    J = gr(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: g,
            rect: H,
            offsetParent: V,
            strategy: y,
          })
        : H,
    );
  return {
    top: (U.top - J.top + D.top) / Z.y,
    bottom: (J.bottom - U.bottom + D.bottom) / Z.y,
    left: (U.left - J.left + D.left) / Z.x,
    right: (J.right - U.right + D.right) / Z.x,
  };
}
const bS = (a) => ({
    name: "arrow",
    options: a,
    async fn(i) {
      const {
          x: r,
          y: c,
          placement: f,
          rects: d,
          platform: h,
          elements: g,
          middlewareData: y,
        } = i,
        { element: p, padding: w = 0 } = An(a, i) || {};
      if (p == null) return {};
      const v = Cy(w),
        E = {
          x: r,
          y: c,
        },
        A = Ku(f),
        D = Zu(A),
        T = await h.getDimensions(p),
        O = A === "y",
        U = O ? "top" : "left",
        H = O ? "bottom" : "right",
        V = O ? "clientHeight" : "clientWidth",
        Z = d.reference[D] + d.reference[A] - E[A] - d.floating[D],
        J = E[A] - d.reference[A],
        F = await (h.getOffsetParent == null ? void 0 : h.getOffsetParent(p));
      let X = F ? F[V] : 0;
      (!X || !(await (h.isElement == null ? void 0 : h.isElement(F)))) &&
        (X = g.floating[V] || d.floating[D]);
      const $ = Z / 2 - J / 2,
        oe = X / 2 - T[D] / 2 - 1,
        ye = ia(v[U], oe),
        xe = ia(v[H], oe),
        pe = ye,
        Ee = X - T[D] - xe,
        W = X / 2 - T[D] / 2 + $,
        fe = Ou(pe, W, Ee),
        R =
          !y.arrow &&
          Al(f) != null &&
          W !== fe &&
          d.reference[D] / 2 - (W < pe ? ye : xe) - T[D] / 2 < 0,
        Q = R ? (W < pe ? W - pe : W - Ee) : 0;
      return {
        [A]: E[A] + Q,
        data: {
          [A]: fe,
          centerOffset: W - fe - Q,
          ...(R && {
            alignmentOffset: Q,
          }),
        },
        reset: R,
      };
    },
  }),
  wS = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "flip",
        options: a,
        async fn(i) {
          var r, c;
          const {
              placement: f,
              middlewareData: d,
              rects: h,
              initialPlacement: g,
              platform: y,
              elements: p,
            } = i,
            {
              mainAxis: w = !0,
              crossAxis: v = !0,
              fallbackPlacements: E,
              fallbackStrategy: A = "bestFit",
              fallbackAxisSideDirection: D = "none",
              flipAlignment: T = !0,
              ...O
            } = An(a, i);
          if ((r = d.arrow) != null && r.alignmentOffset) return {};
          const U = On(f),
            H = nn(g),
            V = On(g) === g,
            Z = await (y.isRTL == null ? void 0 : y.isRTL(p.floating)),
            J = E || (V || !T ? [pr(g)] : mS(g)),
            F = D !== "none";
          !E && F && J.push(...yS(g, T, D, Z));
          const X = [g, ...J],
            $ = await Ri(i, O),
            oe = [];
          let ye = ((c = d.flip) == null ? void 0 : c.overflows) || [];
          if ((w && oe.push($[U]), v)) {
            const W = dS(f, h, Z);
            oe.push($[W[0]], $[W[1]]);
          }
          if (
            ((ye = [
              ...ye,
              {
                placement: f,
                overflows: oe,
              },
            ]),
            !oe.every((W) => W <= 0))
          ) {
            var xe, pe;
            const W = (((xe = d.flip) == null ? void 0 : xe.index) || 0) + 1,
              fe = X[W];
            if (
              fe &&
              (!(v === "alignment" ? H !== nn(fe) : !1) ||
                ye.every((L) =>
                  nn(L.placement) === H ? L.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: {
                  index: W,
                  overflows: ye,
                },
                reset: {
                  placement: fe,
                },
              };
            let R =
              (pe = ye
                .filter((Q) => Q.overflows[0] <= 0)
                .sort((Q, L) => Q.overflows[1] - L.overflows[1])[0]) == null
                ? void 0
                : pe.placement;
            if (!R)
              switch (A) {
                case "bestFit": {
                  var Ee;
                  const Q =
                    (Ee = ye
                      .filter((L) => {
                        if (F) {
                          const ie = nn(L.placement);
                          return ie === H || ie === "y";
                        }
                        return !0;
                      })
                      .map((L) => [
                        L.placement,
                        L.overflows
                          .filter((ie) => ie > 0)
                          .reduce((ie, ue) => ie + ue, 0),
                      ])
                      .sort((L, ie) => L[1] - ie[1])[0]) == null
                      ? void 0
                      : Ee[0];
                  Q && (R = Q);
                  break;
                }
                case "initialPlacement":
                  R = g;
                  break;
              }
            if (f !== R)
              return {
                reset: {
                  placement: R,
                },
              };
          }
          return {};
        },
      }
    );
  };

function tg(a, i) {
  return {
    top: a.top - i.height,
    right: a.right - i.width,
    bottom: a.bottom - i.height,
    left: a.left - i.width,
  };
}

function ng(a) {
  return oS.some((i) => a[i] >= 0);
}
const SS = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "hide",
        options: a,
        async fn(i) {
          const { rects: r } = i,
            { strategy: c = "referenceHidden", ...f } = An(a, i);
          switch (c) {
            case "referenceHidden": {
              const d = await Ri(i, {
                  ...f,
                  elementContext: "reference",
                }),
                h = tg(d, r.reference);
              return {
                data: {
                  referenceHiddenOffsets: h,
                  referenceHidden: ng(h),
                },
              };
            }
            case "escaped": {
              const d = await Ri(i, {
                  ...f,
                  altBoundary: !0,
                }),
                h = tg(d, r.floating);
              return {
                data: {
                  escapedOffsets: h,
                  escaped: ng(h),
                },
              };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Ay = new Set(["left", "top"]);
async function NS(a, i) {
  const { placement: r, platform: c, elements: f } = a,
    d = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)),
    h = On(r),
    g = Al(r),
    y = nn(r) === "y",
    p = Ay.has(h) ? -1 : 1,
    w = d && y ? -1 : 1,
    v = An(i, a);
  let {
    mainAxis: E,
    crossAxis: A,
    alignmentAxis: D,
  } = typeof v == "number"
    ? {
        mainAxis: v,
        crossAxis: 0,
        alignmentAxis: null,
      }
    : {
        mainAxis: v.mainAxis || 0,
        crossAxis: v.crossAxis || 0,
        alignmentAxis: v.alignmentAxis,
      };
  return (
    g && typeof D == "number" && (A = g === "end" ? D * -1 : D),
    y
      ? {
          x: A * w,
          y: E * p,
        }
      : {
          x: E * p,
          y: A * w,
        }
  );
}
const jS = function (a) {
    return (
      a === void 0 && (a = 0),
      {
        name: "offset",
        options: a,
        async fn(i) {
          var r, c;
          const { x: f, y: d, placement: h, middlewareData: g } = i,
            y = await NS(i, a);
          return h === ((r = g.offset) == null ? void 0 : r.placement) &&
            (c = g.arrow) != null &&
            c.alignmentOffset
            ? {}
            : {
                x: f + y.x,
                y: d + y.y,
                data: {
                  ...y,
                  placement: h,
                },
              };
        },
      }
    );
  },
  ES = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "shift",
        options: a,
        async fn(i) {
          const { x: r, y: c, placement: f } = i,
            {
              mainAxis: d = !0,
              crossAxis: h = !1,
              limiter: g = {
                fn: (O) => {
                  let { x: U, y: H } = O;
                  return {
                    x: U,
                    y: H,
                  };
                },
              },
              ...y
            } = An(a, i),
            p = {
              x: r,
              y: c,
            },
            w = await Ri(i, y),
            v = nn(On(f)),
            E = Xu(v);
          let A = p[E],
            D = p[v];
          if (d) {
            const O = E === "y" ? "top" : "left",
              U = E === "y" ? "bottom" : "right",
              H = A + w[O],
              V = A - w[U];
            A = Ou(H, A, V);
          }
          if (h) {
            const O = v === "y" ? "top" : "left",
              U = v === "y" ? "bottom" : "right",
              H = D + w[O],
              V = D - w[U];
            D = Ou(H, D, V);
          }
          const T = g.fn({
            ...i,
            [E]: A,
            [v]: D,
          });
          return {
            ...T,
            data: {
              x: T.x - r,
              y: T.y - c,
              enabled: {
                [E]: d,
                [v]: h,
              },
            },
          };
        },
      }
    );
  },
  TS = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        options: a,
        fn(i) {
          const { x: r, y: c, placement: f, rects: d, middlewareData: h } = i,
            { offset: g = 0, mainAxis: y = !0, crossAxis: p = !0 } = An(a, i),
            w = {
              x: r,
              y: c,
            },
            v = nn(f),
            E = Xu(v);
          let A = w[E],
            D = w[v];
          const T = An(g, i),
            O =
              typeof T == "number"
                ? {
                    mainAxis: T,
                    crossAxis: 0,
                  }
                : {
                    mainAxis: 0,
                    crossAxis: 0,
                    ...T,
                  };
          if (y) {
            const V = E === "y" ? "height" : "width",
              Z = d.reference[E] - d.floating[V] + O.mainAxis,
              J = d.reference[E] + d.reference[V] - O.mainAxis;
            A < Z ? (A = Z) : A > J && (A = J);
          }
          if (p) {
            var U, H;
            const V = E === "y" ? "width" : "height",
              Z = Ay.has(On(f)),
              J =
                d.reference[v] -
                d.floating[V] +
                ((Z && ((U = h.offset) == null ? void 0 : U[v])) || 0) +
                (Z ? 0 : O.crossAxis),
              F =
                d.reference[v] +
                d.reference[V] +
                (Z ? 0 : ((H = h.offset) == null ? void 0 : H[v]) || 0) -
                (Z ? O.crossAxis : 0);
            D < J ? (D = J) : D > F && (D = F);
          }
          return {
            [E]: A,
            [v]: D,
          };
        },
      }
    );
  },
  CS = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "size",
        options: a,
        async fn(i) {
          var r, c;
          const { placement: f, rects: d, platform: h, elements: g } = i,
            { apply: y = () => {}, ...p } = An(a, i),
            w = await Ri(i, p),
            v = On(f),
            E = Al(f),
            A = nn(f) === "y",
            { width: D, height: T } = d.floating;
          let O, U;
          v === "top" || v === "bottom"
            ? ((O = v),
              (U =
                E ===
                ((await (h.isRTL == null ? void 0 : h.isRTL(g.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((U = v), (O = E === "end" ? "top" : "bottom"));
          const H = T - w.top - w.bottom,
            V = D - w.left - w.right,
            Z = ia(T - w[O], H),
            J = ia(D - w[U], V),
            F = !i.middlewareData.shift;
          let X = Z,
            $ = J;
          if (
            ((r = i.middlewareData.shift) != null && r.enabled.x && ($ = V),
            (c = i.middlewareData.shift) != null && c.enabled.y && (X = H),
            F && !E)
          ) {
            const ye = Rt(w.left, 0),
              xe = Rt(w.right, 0),
              pe = Rt(w.top, 0),
              Ee = Rt(w.bottom, 0);
            A
              ? ($ =
                  D -
                  2 * (ye !== 0 || xe !== 0 ? ye + xe : Rt(w.left, w.right)))
              : (X =
                  T -
                  2 * (pe !== 0 || Ee !== 0 ? pe + Ee : Rt(w.top, w.bottom)));
          }
          await y({
            ...i,
            availableWidth: $,
            availableHeight: X,
          });
          const oe = await h.getDimensions(g.floating);
          return D !== oe.width || T !== oe.height
            ? {
                reset: {
                  rects: !0,
                },
              }
            : {};
        },
      }
    );
  };

function Rr() {
  return typeof window < "u";
}

function Ol(a) {
  return Oy(a) ? (a.nodeName || "").toLowerCase() : "#document";
}

function _t(a) {
  var i;
  return (
    (a == null || (i = a.ownerDocument) == null ? void 0 : i.defaultView) ||
    window
  );
}

function rn(a) {
  var i;
  return (i = (Oy(a) ? a.ownerDocument : a.document) || window.document) == null
    ? void 0
    : i.documentElement;
}

function Oy(a) {
  return Rr() ? a instanceof Node || a instanceof _t(a).Node : !1;
}

function Kt(a) {
  return Rr() ? a instanceof Element || a instanceof _t(a).Element : !1;
}

function sn(a) {
  return Rr() ? a instanceof HTMLElement || a instanceof _t(a).HTMLElement : !1;
}

function ag(a) {
  return !Rr() || typeof ShadowRoot > "u"
    ? !1
    : a instanceof ShadowRoot || a instanceof _t(a).ShadowRoot;
}
const AS = new Set(["inline", "contents"]);

function ki(a) {
  const { overflow: i, overflowX: r, overflowY: c, display: f } = $t(a);
  return /auto|scroll|overlay|hidden|clip/.test(i + c + r) && !AS.has(f);
}
const OS = new Set(["table", "td", "th"]);

function RS(a) {
  return OS.has(Ol(a));
}
const _S = [":popover-open", ":modal"];

function _r(a) {
  return _S.some((i) => {
    try {
      return a.matches(i);
    } catch {
      return !1;
    }
  });
}
const MS = ["transform", "translate", "scale", "rotate", "perspective"],
  DS = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  zS = ["paint", "layout", "strict", "content"];

function $u(a) {
  const i = Ju(),
    r = Kt(a) ? $t(a) : a;
  return (
    MS.some((c) => (r[c] ? r[c] !== "none" : !1)) ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!i && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!i && (r.filter ? r.filter !== "none" : !1)) ||
    DS.some((c) => (r.willChange || "").includes(c)) ||
    zS.some((c) => (r.contain || "").includes(c))
  );
}

function kS(a) {
  let i = sa(a);
  for (; sn(i) && !Nl(i); ) {
    if ($u(i)) return i;
    if (_r(i)) return null;
    i = sa(i);
  }
  return null;
}

function Ju() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const LS = new Set(["html", "body", "#document"]);

function Nl(a) {
  return LS.has(Ol(a));
}

function $t(a) {
  return _t(a).getComputedStyle(a);
}

function Mr(a) {
  return Kt(a)
    ? {
        scrollLeft: a.scrollLeft,
        scrollTop: a.scrollTop,
      }
    : {
        scrollLeft: a.scrollX,
        scrollTop: a.scrollY,
      };
}

function sa(a) {
  if (Ol(a) === "html") return a;
  const i = a.assignedSlot || a.parentNode || (ag(a) && a.host) || rn(a);
  return ag(i) ? i.host : i;
}

function Ry(a) {
  const i = sa(a);
  return Nl(i)
    ? a.ownerDocument
      ? a.ownerDocument.body
      : a.body
    : sn(i) && ki(i)
      ? i
      : Ry(i);
}

function _i(a, i, r) {
  var c;
  (i === void 0 && (i = []), r === void 0 && (r = !0));
  const f = Ry(a),
    d = f === ((c = a.ownerDocument) == null ? void 0 : c.body),
    h = _t(f);
  if (d) {
    const g = _u(h);
    return i.concat(
      h,
      h.visualViewport || [],
      ki(f) ? f : [],
      g && r ? _i(g) : [],
    );
  }
  return i.concat(f, _i(f, [], r));
}

function _u(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}

function _y(a) {
  const i = $t(a);
  let r = parseFloat(i.width) || 0,
    c = parseFloat(i.height) || 0;
  const f = sn(a),
    d = f ? a.offsetWidth : r,
    h = f ? a.offsetHeight : c,
    g = hr(r) !== d || hr(c) !== h;
  return (
    g && ((r = d), (c = h)),
    {
      width: r,
      height: c,
      $: g,
    }
  );
}

function Pu(a) {
  return Kt(a) ? a : a.contextElement;
}

function xl(a) {
  const i = Pu(a);
  if (!sn(i)) return an(1);
  const r = i.getBoundingClientRect(),
    { width: c, height: f, $: d } = _y(i);
  let h = (d ? hr(r.width) : r.width) / c,
    g = (d ? hr(r.height) : r.height) / f;
  return (
    (!h || !Number.isFinite(h)) && (h = 1),
    (!g || !Number.isFinite(g)) && (g = 1),
    {
      x: h,
      y: g,
    }
  );
}
const US = an(0);

function My(a) {
  const i = _t(a);
  return !Ju() || !i.visualViewport
    ? US
    : {
        x: i.visualViewport.offsetLeft,
        y: i.visualViewport.offsetTop,
      };
}

function HS(a, i, r) {
  return (i === void 0 && (i = !1), !r || (i && r !== _t(a)) ? !1 : i);
}

function Aa(a, i, r, c) {
  (i === void 0 && (i = !1), r === void 0 && (r = !1));
  const f = a.getBoundingClientRect(),
    d = Pu(a);
  let h = an(1);
  i && (c ? Kt(c) && (h = xl(c)) : (h = xl(a)));
  const g = HS(d, r, c) ? My(d) : an(0);
  let y = (f.left + g.x) / h.x,
    p = (f.top + g.y) / h.y,
    w = f.width / h.x,
    v = f.height / h.y;
  if (d) {
    const E = _t(d),
      A = c && Kt(c) ? _t(c) : c;
    let D = E,
      T = _u(D);
    for (; T && c && A !== D; ) {
      const O = xl(T),
        U = T.getBoundingClientRect(),
        H = $t(T),
        V = U.left + (T.clientLeft + parseFloat(H.paddingLeft)) * O.x,
        Z = U.top + (T.clientTop + parseFloat(H.paddingTop)) * O.y;
      ((y *= O.x),
        (p *= O.y),
        (w *= O.x),
        (v *= O.y),
        (y += V),
        (p += Z),
        (D = _t(T)),
        (T = _u(D)));
    }
  }
  return gr({
    width: w,
    height: v,
    x: y,
    y: p,
  });
}

function Dr(a, i) {
  const r = Mr(a).scrollLeft;
  return i ? i.left + r : Aa(rn(a)).left + r;
}

function Dy(a, i) {
  const r = a.getBoundingClientRect(),
    c = r.left + i.scrollLeft - Dr(a, r),
    f = r.top + i.scrollTop;
  return {
    x: c,
    y: f,
  };
}

function BS(a) {
  let { elements: i, rect: r, offsetParent: c, strategy: f } = a;
  const d = f === "fixed",
    h = rn(c),
    g = i ? _r(i.floating) : !1;
  if (c === h || (g && d)) return r;
  let y = {
      scrollLeft: 0,
      scrollTop: 0,
    },
    p = an(1);
  const w = an(0),
    v = sn(c);
  if (
    (v || (!v && !d)) &&
    ((Ol(c) !== "body" || ki(h)) && (y = Mr(c)), sn(c))
  ) {
    const A = Aa(c);
    ((p = xl(c)), (w.x = A.x + c.clientLeft), (w.y = A.y + c.clientTop));
  }
  const E = h && !v && !d ? Dy(h, y) : an(0);
  return {
    width: r.width * p.x,
    height: r.height * p.y,
    x: r.x * p.x - y.scrollLeft * p.x + w.x + E.x,
    y: r.y * p.y - y.scrollTop * p.y + w.y + E.y,
  };
}

function qS(a) {
  return Array.from(a.getClientRects());
}

function GS(a) {
  const i = rn(a),
    r = Mr(a),
    c = a.ownerDocument.body,
    f = Rt(i.scrollWidth, i.clientWidth, c.scrollWidth, c.clientWidth),
    d = Rt(i.scrollHeight, i.clientHeight, c.scrollHeight, c.clientHeight);
  let h = -r.scrollLeft + Dr(a);
  const g = -r.scrollTop;
  return (
    $t(c).direction === "rtl" && (h += Rt(i.clientWidth, c.clientWidth) - f),
    {
      width: f,
      height: d,
      x: h,
      y: g,
    }
  );
}
const lg = 25;

function YS(a, i) {
  const r = _t(a),
    c = rn(a),
    f = r.visualViewport;
  let d = c.clientWidth,
    h = c.clientHeight,
    g = 0,
    y = 0;
  if (f) {
    ((d = f.width), (h = f.height));
    const w = Ju();
    (!w || (w && i === "fixed")) && ((g = f.offsetLeft), (y = f.offsetTop));
  }
  const p = Dr(c);
  if (p <= 0) {
    const w = c.ownerDocument,
      v = w.body,
      E = getComputedStyle(v),
      A =
        (w.compatMode === "CSS1Compat" &&
          parseFloat(E.marginLeft) + parseFloat(E.marginRight)) ||
        0,
      D = Math.abs(c.clientWidth - v.clientWidth - A);
    D <= lg && (d -= D);
  } else p <= lg && (d += p);
  return {
    width: d,
    height: h,
    x: g,
    y,
  };
}
const VS = new Set(["absolute", "fixed"]);

function QS(a, i) {
  const r = Aa(a, !0, i === "fixed"),
    c = r.top + a.clientTop,
    f = r.left + a.clientLeft,
    d = sn(a) ? xl(a) : an(1),
    h = a.clientWidth * d.x,
    g = a.clientHeight * d.y,
    y = f * d.x,
    p = c * d.y;
  return {
    width: h,
    height: g,
    x: y,
    y: p,
  };
}

function ig(a, i, r) {
  let c;
  if (i === "viewport") c = YS(a, r);
  else if (i === "document") c = GS(rn(a));
  else if (Kt(i)) c = QS(i, r);
  else {
    const f = My(a);
    c = {
      x: i.x - f.x,
      y: i.y - f.y,
      width: i.width,
      height: i.height,
    };
  }
  return gr(c);
}

function zy(a, i) {
  const r = sa(a);
  return r === i || !Kt(r) || Nl(r)
    ? !1
    : $t(r).position === "fixed" || zy(r, i);
}

function XS(a, i) {
  const r = i.get(a);
  if (r) return r;
  let c = _i(a, [], !1).filter((g) => Kt(g) && Ol(g) !== "body"),
    f = null;
  const d = $t(a).position === "fixed";
  let h = d ? sa(a) : a;
  for (; Kt(h) && !Nl(h); ) {
    const g = $t(h),
      y = $u(h);
    (!y && g.position === "fixed" && (f = null),
      (
        d
          ? !y && !f
          : (!y && g.position === "static" && !!f && VS.has(f.position)) ||
            (ki(h) && !y && zy(a, h))
      )
        ? (c = c.filter((w) => w !== h))
        : (f = g),
      (h = sa(h)));
  }
  return (i.set(a, c), c);
}

function ZS(a) {
  let { element: i, boundary: r, rootBoundary: c, strategy: f } = a;
  const h = [
      ...(r === "clippingAncestors"
        ? _r(i)
          ? []
          : XS(i, this._c)
        : [].concat(r)),
      c,
    ],
    g = h[0],
    y = h.reduce(
      (p, w) => {
        const v = ig(i, w, f);
        return (
          (p.top = Rt(v.top, p.top)),
          (p.right = ia(v.right, p.right)),
          (p.bottom = ia(v.bottom, p.bottom)),
          (p.left = Rt(v.left, p.left)),
          p
        );
      },
      ig(i, g, f),
    );
  return {
    width: y.right - y.left,
    height: y.bottom - y.top,
    x: y.left,
    y: y.top,
  };
}

function KS(a) {
  const { width: i, height: r } = _y(a);
  return {
    width: i,
    height: r,
  };
}

function $S(a, i, r) {
  const c = sn(i),
    f = rn(i),
    d = r === "fixed",
    h = Aa(a, !0, d, i);
  let g = {
    scrollLeft: 0,
    scrollTop: 0,
  };
  const y = an(0);

  function p() {
    y.x = Dr(f);
  }
  if (c || (!c && !d))
    if (((Ol(i) !== "body" || ki(f)) && (g = Mr(i)), c)) {
      const A = Aa(i, !0, d, i);
      ((y.x = A.x + i.clientLeft), (y.y = A.y + i.clientTop));
    } else f && p();
  d && !c && f && p();
  const w = f && !c && !d ? Dy(f, g) : an(0),
    v = h.left + g.scrollLeft - y.x - w.x,
    E = h.top + g.scrollTop - y.y - w.y;
  return {
    x: v,
    y: E,
    width: h.width,
    height: h.height,
  };
}

function yu(a) {
  return $t(a).position === "static";
}

function sg(a, i) {
  if (!sn(a) || $t(a).position === "fixed") return null;
  if (i) return i(a);
  let r = a.offsetParent;
  return (rn(a) === r && (r = r.ownerDocument.body), r);
}

function ky(a, i) {
  const r = _t(a);
  if (_r(a)) return r;
  if (!sn(a)) {
    let f = sa(a);
    for (; f && !Nl(f); ) {
      if (Kt(f) && !yu(f)) return f;
      f = sa(f);
    }
    return r;
  }
  let c = sg(a, i);
  for (; c && RS(c) && yu(c); ) c = sg(c, i);
  return c && Nl(c) && yu(c) && !$u(c) ? r : c || kS(a) || r;
}
const JS = async function (a) {
  const i = this.getOffsetParent || ky,
    r = this.getDimensions,
    c = await r(a.floating);
  return {
    reference: $S(a.reference, await i(a.floating), a.strategy),
    floating: {
      x: 0,
      y: 0,
      width: c.width,
      height: c.height,
    },
  };
};

function PS(a) {
  return $t(a).direction === "rtl";
}
const FS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: BS,
  getDocumentElement: rn,
  getClippingRect: ZS,
  getOffsetParent: ky,
  getElementRects: JS,
  getClientRects: qS,
  getDimensions: KS,
  getScale: xl,
  isElement: Kt,
  isRTL: PS,
};

function Ly(a, i) {
  return (
    a.x === i.x && a.y === i.y && a.width === i.width && a.height === i.height
  );
}

function WS(a, i) {
  let r = null,
    c;
  const f = rn(a);

  function d() {
    var g;
    (clearTimeout(c), (g = r) == null || g.disconnect(), (r = null));
  }

  function h(g, y) {
    (g === void 0 && (g = !1), y === void 0 && (y = 1), d());
    const p = a.getBoundingClientRect(),
      { left: w, top: v, width: E, height: A } = p;
    if ((g || i(), !E || !A)) return;
    const D = ir(v),
      T = ir(f.clientWidth - (w + E)),
      O = ir(f.clientHeight - (v + A)),
      U = ir(w),
      V = {
        rootMargin: -D + "px " + -T + "px " + -O + "px " + -U + "px",
        threshold: Rt(0, ia(1, y)) || 1,
      };
    let Z = !0;

    function J(F) {
      const X = F[0].intersectionRatio;
      if (X !== y) {
        if (!Z) return h();
        X
          ? h(!1, X)
          : (c = setTimeout(() => {
              h(!1, 1e-7);
            }, 1e3));
      }
      (X === 1 && !Ly(p, a.getBoundingClientRect()) && h(), (Z = !1));
    }
    try {
      r = new IntersectionObserver(J, {
        ...V,
        root: f.ownerDocument,
      });
    } catch {
      r = new IntersectionObserver(J, V);
    }
    r.observe(a);
  }
  return (h(!0), d);
}

function IS(a, i, r, c) {
  c === void 0 && (c = {});
  const {
      ancestorScroll: f = !0,
      ancestorResize: d = !0,
      elementResize: h = typeof ResizeObserver == "function",
      layoutShift: g = typeof IntersectionObserver == "function",
      animationFrame: y = !1,
    } = c,
    p = Pu(a),
    w = f || d ? [...(p ? _i(p) : []), ..._i(i)] : [];
  w.forEach((U) => {
    (f &&
      U.addEventListener("scroll", r, {
        passive: !0,
      }),
      d && U.addEventListener("resize", r));
  });
  const v = p && g ? WS(p, r) : null;
  let E = -1,
    A = null;
  h &&
    ((A = new ResizeObserver((U) => {
      let [H] = U;
      (H &&
        H.target === p &&
        A &&
        (A.unobserve(i),
        cancelAnimationFrame(E),
        (E = requestAnimationFrame(() => {
          var V;
          (V = A) == null || V.observe(i);
        }))),
        r());
    })),
    p && !y && A.observe(p),
    A.observe(i));
  let D,
    T = y ? Aa(a) : null;
  y && O();

  function O() {
    const U = Aa(a);
    (T && !Ly(T, U) && r(), (T = U), (D = requestAnimationFrame(O)));
  }
  return (
    r(),
    () => {
      var U;
      (w.forEach((H) => {
        (f && H.removeEventListener("scroll", r),
          d && H.removeEventListener("resize", r));
      }),
        v?.(),
        (U = A) == null || U.disconnect(),
        (A = null),
        y && cancelAnimationFrame(D));
    }
  );
}
const eN = jS,
  tN = ES,
  nN = wS,
  aN = CS,
  lN = SS,
  rg = bS,
  iN = TS,
  sN = (a, i, r) => {
    const c = new Map(),
      f = {
        platform: FS,
        ...r,
      },
      d = {
        ...f.platform,
        _c: c,
      };
    return vS(a, i, {
      ...f,
      platform: d,
    });
  };
var rN = typeof document < "u",
  oN = function () {},
  fr = rN ? b.useLayoutEffect : oN;

function yr(a, i) {
  if (a === i) return !0;
  if (typeof a != typeof i) return !1;
  if (typeof a == "function" && a.toString() === i.toString()) return !0;
  let r, c, f;
  if (a && i && typeof a == "object") {
    if (Array.isArray(a)) {
      if (((r = a.length), r !== i.length)) return !1;
      for (c = r; c-- !== 0; ) if (!yr(a[c], i[c])) return !1;
      return !0;
    }
    if (((f = Object.keys(a)), (r = f.length), r !== Object.keys(i).length))
      return !1;
    for (c = r; c-- !== 0; ) if (!{}.hasOwnProperty.call(i, f[c])) return !1;
    for (c = r; c-- !== 0; ) {
      const d = f[c];
      if (!(d === "_owner" && a.$$typeof) && !yr(a[d], i[d])) return !1;
    }
    return !0;
  }
  return a !== a && i !== i;
}

function Uy(a) {
  return typeof window > "u"
    ? 1
    : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}

function og(a, i) {
  const r = Uy(a);
  return Math.round(i * r) / r;
}

function xu(a) {
  const i = b.useRef(a);
  return (
    fr(() => {
      i.current = a;
    }),
    i
  );
}

function cN(a) {
  a === void 0 && (a = {});
  const {
      placement: i = "bottom",
      strategy: r = "absolute",
      middleware: c = [],
      platform: f,
      elements: { reference: d, floating: h } = {},
      transform: g = !0,
      whileElementsMounted: y,
      open: p,
    } = a,
    [w, v] = b.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: i,
      middlewareData: {},
      isPositioned: !1,
    }),
    [E, A] = b.useState(c);
  yr(E, c) || A(c);
  const [D, T] = b.useState(null),
    [O, U] = b.useState(null),
    H = b.useCallback((L) => {
      L !== F.current && ((F.current = L), T(L));
    }, []),
    V = b.useCallback((L) => {
      L !== X.current && ((X.current = L), U(L));
    }, []),
    Z = d || D,
    J = h || O,
    F = b.useRef(null),
    X = b.useRef(null),
    $ = b.useRef(w),
    oe = y != null,
    ye = xu(y),
    xe = xu(f),
    pe = xu(p),
    Ee = b.useCallback(() => {
      if (!F.current || !X.current) return;
      const L = {
        placement: i,
        strategy: r,
        middleware: E,
      };
      (xe.current && (L.platform = xe.current),
        sN(F.current, X.current, L).then((ie) => {
          const ue = {
            ...ie,
            isPositioned: pe.current !== !1,
          };
          W.current &&
            !yr($.current, ue) &&
            (($.current = ue),
            Tr.flushSync(() => {
              v(ue);
            }));
        }));
    }, [E, i, r, xe, pe]);
  fr(() => {
    p === !1 &&
      $.current.isPositioned &&
      (($.current.isPositioned = !1),
      v((L) => ({
        ...L,
        isPositioned: !1,
      })));
  }, [p]);
  const W = b.useRef(!1);
  (fr(
    () => (
      (W.current = !0),
      () => {
        W.current = !1;
      }
    ),
    [],
  ),
    fr(() => {
      if ((Z && (F.current = Z), J && (X.current = J), Z && J)) {
        if (ye.current) return ye.current(Z, J, Ee);
        Ee();
      }
    }, [Z, J, Ee, ye, oe]));
  const fe = b.useMemo(
      () => ({
        reference: F,
        floating: X,
        setReference: H,
        setFloating: V,
      }),
      [H, V],
    ),
    R = b.useMemo(
      () => ({
        reference: Z,
        floating: J,
      }),
      [Z, J],
    ),
    Q = b.useMemo(() => {
      const L = {
        position: r,
        left: 0,
        top: 0,
      };
      if (!R.floating) return L;
      const ie = og(R.floating, w.x),
        ue = og(R.floating, w.y);
      return g
        ? {
            ...L,
            transform: "translate(" + ie + "px, " + ue + "px)",
            ...(Uy(R.floating) >= 1.5 && {
              willChange: "transform",
            }),
          }
        : {
            position: r,
            left: ie,
            top: ue,
          };
    }, [r, g, R.floating, w.x, w.y]);
  return b.useMemo(
    () => ({
      ...w,
      update: Ee,
      refs: fe,
      elements: R,
      floatingStyles: Q,
    }),
    [w, Ee, fe, R, Q],
  );
}
const uN = (a) => {
    function i(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: a,
      fn(r) {
        const { element: c, padding: f } = typeof a == "function" ? a(r) : a;
        return c && i(c)
          ? c.current != null
            ? rg({
                element: c.current,
                padding: f,
              }).fn(r)
            : {}
          : c
            ? rg({
                element: c,
                padding: f,
              }).fn(r)
            : {};
      },
    };
  },
  fN = (a, i) => ({
    ...eN(a),
    options: [a, i],
  }),
  dN = (a, i) => ({
    ...tN(a),
    options: [a, i],
  }),
  mN = (a, i) => ({
    ...iN(a),
    options: [a, i],
  }),
  hN = (a, i) => ({
    ...nN(a),
    options: [a, i],
  }),
  pN = (a, i) => ({
    ...aN(a),
    options: [a, i],
  }),
  gN = (a, i) => ({
    ...lN(a),
    options: [a, i],
  }),
  yN = (a, i) => ({
    ...uN(a),
    options: [a, i],
  });
var xN = "Arrow",
  Hy = b.forwardRef((a, i) => {
    const { children: r, width: c = 10, height: f = 5, ...d } = a;
    return u.jsx(Ye.svg, {
      ...d,
      ref: i,
      width: c,
      height: f,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: a.asChild
        ? r
        : u.jsx("polygon", {
            points: "0,0 30,0 15,10",
          }),
    });
  });
Hy.displayName = xN;
var vN = Hy;

function By(a) {
  const [i, r] = b.useState(void 0);
  return (
    ln(() => {
      if (a) {
        r({
          width: a.offsetWidth,
          height: a.offsetHeight,
        });
        const c = new ResizeObserver((f) => {
          if (!Array.isArray(f) || !f.length) return;
          const d = f[0];
          let h, g;
          if ("borderBoxSize" in d) {
            const y = d.borderBoxSize,
              p = Array.isArray(y) ? y[0] : y;
            ((h = p.inlineSize), (g = p.blockSize));
          } else ((h = a.offsetWidth), (g = a.offsetHeight));
          r({
            width: h,
            height: g,
          });
        });
        return (
          c.observe(a, {
            box: "border-box",
          }),
          () => c.unobserve(a)
        );
      } else r(void 0);
    }, [a]),
    i
  );
}
var qy = "Popper",
  [Gy, Yy] = Ra(qy),
  [oE, Vy] = Gy(qy),
  Qy = "PopperAnchor",
  Xy = b.forwardRef((a, i) => {
    const { __scopePopper: r, virtualRef: c, ...f } = a,
      d = Vy(Qy, r),
      h = b.useRef(null),
      g = dt(i, h),
      y = b.useRef(null);
    return (
      b.useEffect(() => {
        const p = y.current;
        ((y.current = c?.current || h.current),
          p !== y.current && d.onAnchorChange(y.current));
      }),
      c
        ? null
        : u.jsx(Ye.div, {
            ...f,
            ref: g,
          })
    );
  });
Xy.displayName = Qy;
var Fu = "PopperContent",
  [bN, wN] = Gy(Fu),
  Zy = b.forwardRef((a, i) => {
    const {
        __scopePopper: r,
        side: c = "bottom",
        sideOffset: f = 0,
        align: d = "center",
        alignOffset: h = 0,
        arrowPadding: g = 0,
        avoidCollisions: y = !0,
        collisionBoundary: p = [],
        collisionPadding: w = 0,
        sticky: v = "partial",
        hideWhenDetached: E = !1,
        updatePositionStrategy: A = "optimized",
        onPlaced: D,
        ...T
      } = a,
      O = Vy(Fu, r),
      [U, H] = b.useState(null),
      V = dt(i, (ae) => H(ae)),
      [Z, J] = b.useState(null),
      F = By(Z),
      X = F?.width ?? 0,
      $ = F?.height ?? 0,
      oe = c + (d !== "center" ? "-" + d : ""),
      ye =
        typeof w == "number"
          ? w
          : {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              ...w,
            },
      xe = Array.isArray(p) ? p : [p],
      pe = xe.length > 0,
      Ee = {
        padding: ye,
        boundary: xe.filter(NN),
        altBoundary: pe,
      },
      {
        refs: W,
        floatingStyles: fe,
        placement: R,
        isPositioned: Q,
        middlewareData: L,
      } = cN({
        strategy: "fixed",
        placement: oe,
        whileElementsMounted: (...ae) =>
          IS(...ae, {
            animationFrame: A === "always",
          }),
        elements: {
          reference: O.anchor,
        },
        middleware: [
          fN({
            mainAxis: f + $,
            alignmentAxis: h,
          }),
          y &&
            dN({
              mainAxis: !0,
              crossAxis: !1,
              limiter: v === "partial" ? mN() : void 0,
              ...Ee,
            }),
          y &&
            hN({
              ...Ee,
            }),
          pN({
            ...Ee,
            apply: ({
              elements: ae,
              rects: Qe,
              availableWidth: _e,
              availableHeight: Mt,
            }) => {
              const { width: Pt, height: Ft } = Qe.reference,
                ra = ae.floating.style;
              (ra.setProperty("--radix-popper-available-width", `${_e}px`),
                ra.setProperty("--radix-popper-available-height", `${Mt}px`),
                ra.setProperty("--radix-popper-anchor-width", `${Pt}px`),
                ra.setProperty("--radix-popper-anchor-height", `${Ft}px`));
            },
          }),
          Z &&
            yN({
              element: Z,
              padding: g,
            }),
          jN({
            arrowWidth: X,
            arrowHeight: $,
          }),
          E &&
            gN({
              strategy: "referenceHidden",
              ...Ee,
            }),
        ],
      }),
      [ie, ue] = Jy(R),
      N = aa(D);
    ln(() => {
      Q && N?.();
    }, [Q, N]);
    const q = L.arrow?.x,
      K = L.arrow?.y,
      P = L.arrow?.centerOffset !== 0,
      [re, de] = b.useState();
    return (
      ln(() => {
        U && de(window.getComputedStyle(U).zIndex);
      }, [U]),
      u.jsx("div", {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...fe,
          transform: Q ? fe.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: re,
          "--radix-popper-transform-origin": [
            L.transformOrigin?.x,
            L.transformOrigin?.y,
          ].join(" "),
          ...(L.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: a.dir,
        children: u.jsx(bN, {
          scope: r,
          placedSide: ie,
          onArrowChange: J,
          arrowX: q,
          arrowY: K,
          shouldHideArrow: P,
          children: u.jsx(Ye.div, {
            "data-side": ie,
            "data-align": ue,
            ...T,
            ref: V,
            style: {
              ...T.style,
              animation: Q ? void 0 : "none",
            },
          }),
        }),
      })
    );
  });
Zy.displayName = Fu;
var Ky = "PopperArrow",
  SN = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  },
  $y = b.forwardRef(function (i, r) {
    const { __scopePopper: c, ...f } = i,
      d = wN(Ky, c),
      h = SN[d.placedSide];
    return u.jsx("span", {
      ref: d.onArrowChange,
      style: {
        position: "absolute",
        left: d.arrowX,
        top: d.arrowY,
        [h]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[d.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[d.placedSide],
        visibility: d.shouldHideArrow ? "hidden" : void 0,
      },
      children: u.jsx(vN, {
        ...f,
        ref: r,
        style: {
          ...f.style,
          display: "block",
        },
      }),
    });
  });
$y.displayName = Ky;

function NN(a) {
  return a !== null;
}
var jN = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(i) {
    const { placement: r, rects: c, middlewareData: f } = i,
      h = f.arrow?.centerOffset !== 0,
      g = h ? 0 : a.arrowWidth,
      y = h ? 0 : a.arrowHeight,
      [p, w] = Jy(r),
      v = {
        start: "0%",
        center: "50%",
        end: "100%",
      }[w],
      E = (f.arrow?.x ?? 0) + g / 2,
      A = (f.arrow?.y ?? 0) + y / 2;
    let D = "",
      T = "";
    return (
      p === "bottom"
        ? ((D = h ? v : `${E}px`), (T = `${-y}px`))
        : p === "top"
          ? ((D = h ? v : `${E}px`), (T = `${c.floating.height + y}px`))
          : p === "right"
            ? ((D = `${-y}px`), (T = h ? v : `${A}px`))
            : p === "left" &&
              ((D = `${c.floating.width + y}px`), (T = h ? v : `${A}px`)),
      {
        data: {
          x: D,
          y: T,
        },
      }
    );
  },
});

function Jy(a) {
  const [i, r = "center"] = a.split("-");
  return [i, r];
}
var EN = Xy,
  TN = Zy,
  CN = $y,
  AN = Symbol("radix.slottable");

function ON(a) {
  const i = ({ children: r }) =>
    u.jsx(u.Fragment, {
      children: r,
    });
  return ((i.displayName = `${a}.Slottable`), (i.__radixId = AN), i);
}
var [zr] = Ra("Tooltip", [Yy]),
  Wu = Yy(),
  Py = "TooltipProvider",
  RN = 700,
  cg = "tooltip.open",
  [_N, Fy] = zr(Py),
  Wy = (a) => {
    const {
        __scopeTooltip: i,
        delayDuration: r = RN,
        skipDelayDuration: c = 300,
        disableHoverableContent: f = !1,
        children: d,
      } = a,
      h = b.useRef(!0),
      g = b.useRef(!1),
      y = b.useRef(0);
    return (
      b.useEffect(() => {
        const p = y.current;
        return () => window.clearTimeout(p);
      }, []),
      u.jsx(_N, {
        scope: i,
        isOpenDelayedRef: h,
        delayDuration: r,
        onOpen: b.useCallback(() => {
          (window.clearTimeout(y.current), (h.current = !1));
        }, []),
        onClose: b.useCallback(() => {
          (window.clearTimeout(y.current),
            (y.current = window.setTimeout(() => (h.current = !0), c)));
        }, [c]),
        isPointerInTransitRef: g,
        onPointerInTransitChange: b.useCallback((p) => {
          g.current = p;
        }, []),
        disableHoverableContent: f,
        children: d,
      })
    );
  };
Wy.displayName = Py;
var Iy = "Tooltip",
  [cE, Li] = zr(Iy),
  Mu = "TooltipTrigger",
  MN = b.forwardRef((a, i) => {
    const { __scopeTooltip: r, ...c } = a,
      f = Li(Mu, r),
      d = Fy(Mu, r),
      h = Wu(r),
      g = b.useRef(null),
      y = dt(i, g, f.onTriggerChange),
      p = b.useRef(!1),
      w = b.useRef(!1),
      v = b.useCallback(() => (p.current = !1), []);
    return (
      b.useEffect(
        () => () => document.removeEventListener("pointerup", v),
        [v],
      ),
      u.jsx(EN, {
        asChild: !0,
        ...h,
        children: u.jsx(Ye.button, {
          "aria-describedby": f.open ? f.contentId : void 0,
          "data-state": f.stateAttribute,
          ...c,
          ref: y,
          onPointerMove: Be(a.onPointerMove, (E) => {
            E.pointerType !== "touch" &&
              !w.current &&
              !d.isPointerInTransitRef.current &&
              (f.onTriggerEnter(), (w.current = !0));
          }),
          onPointerLeave: Be(a.onPointerLeave, () => {
            (f.onTriggerLeave(), (w.current = !1));
          }),
          onPointerDown: Be(a.onPointerDown, () => {
            (f.open && f.onClose(),
              (p.current = !0),
              document.addEventListener("pointerup", v, {
                once: !0,
              }));
          }),
          onFocus: Be(a.onFocus, () => {
            p.current || f.onOpen();
          }),
          onBlur: Be(a.onBlur, f.onClose),
          onClick: Be(a.onClick, f.onClose),
        }),
      })
    );
  });
MN.displayName = Mu;
var Iu = "TooltipPortal",
  [DN, zN] = zr(Iu, {
    forceMount: void 0,
  }),
  ex = (a) => {
    const { __scopeTooltip: i, forceMount: r, children: c, container: f } = a,
      d = Li(Iu, i);
    return u.jsx(DN, {
      scope: i,
      forceMount: r,
      children: u.jsx(El, {
        present: r || d.open,
        children: u.jsx(qu, {
          asChild: !0,
          container: f,
          children: c,
        }),
      }),
    });
  };
ex.displayName = Iu;
var jl = "TooltipContent",
  tx = b.forwardRef((a, i) => {
    const r = zN(jl, a.__scopeTooltip),
      { forceMount: c = r.forceMount, side: f = "top", ...d } = a,
      h = Li(jl, a.__scopeTooltip);
    return u.jsx(El, {
      present: c || h.open,
      children: h.disableHoverableContent
        ? u.jsx(nx, {
            side: f,
            ...d,
            ref: i,
          })
        : u.jsx(kN, {
            side: f,
            ...d,
            ref: i,
          }),
    });
  }),
  kN = b.forwardRef((a, i) => {
    const r = Li(jl, a.__scopeTooltip),
      c = Fy(jl, a.__scopeTooltip),
      f = b.useRef(null),
      d = dt(i, f),
      [h, g] = b.useState(null),
      { trigger: y, onClose: p } = r,
      w = f.current,
      { onPointerInTransitChange: v } = c,
      E = b.useCallback(() => {
        (g(null), v(!1));
      }, [v]),
      A = b.useCallback(
        (D, T) => {
          const O = D.currentTarget,
            U = {
              x: D.clientX,
              y: D.clientY,
            },
            H = qN(U, O.getBoundingClientRect()),
            V = GN(U, H),
            Z = YN(T.getBoundingClientRect()),
            J = QN([...V, ...Z]);
          (g(J), v(!0));
        },
        [v],
      );
    return (
      b.useEffect(() => () => E(), [E]),
      b.useEffect(() => {
        if (y && w) {
          const D = (O) => A(O, w),
            T = (O) => A(O, y);
          return (
            y.addEventListener("pointerleave", D),
            w.addEventListener("pointerleave", T),
            () => {
              (y.removeEventListener("pointerleave", D),
                w.removeEventListener("pointerleave", T));
            }
          );
        }
      }, [y, w, A, E]),
      b.useEffect(() => {
        if (h) {
          const D = (T) => {
            const O = T.target,
              U = {
                x: T.clientX,
                y: T.clientY,
              },
              H = y?.contains(O) || w?.contains(O),
              V = !VN(U, h);
            H ? E() : V && (E(), p());
          };
          return (
            document.addEventListener("pointermove", D),
            () => document.removeEventListener("pointermove", D)
          );
        }
      }, [y, w, h, p, E]),
      u.jsx(nx, {
        ...a,
        ref: d,
      })
    );
  }),
  [LN, UN] = zr(Iy, {
    isInside: !1,
  }),
  HN = ON("TooltipContent"),
  nx = b.forwardRef((a, i) => {
    const {
        __scopeTooltip: r,
        children: c,
        "aria-label": f,
        onEscapeKeyDown: d,
        onPointerDownOutside: h,
        ...g
      } = a,
      y = Li(jl, r),
      p = Wu(r),
      { onClose: w } = y;
    return (
      b.useEffect(
        () => (
          document.addEventListener(cg, w),
          () => document.removeEventListener(cg, w)
        ),
        [w],
      ),
      b.useEffect(() => {
        if (y.trigger) {
          const v = (E) => {
            E.target?.contains(y.trigger) && w();
          };
          return (
            window.addEventListener("scroll", v, {
              capture: !0,
            }),
            () =>
              window.removeEventListener("scroll", v, {
                capture: !0,
              })
          );
        }
      }, [y.trigger, w]),
      u.jsx(Bu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: d,
        onPointerDownOutside: h,
        onFocusOutside: (v) => v.preventDefault(),
        onDismiss: w,
        children: u.jsxs(TN, {
          "data-state": y.stateAttribute,
          ...p,
          ...g,
          ref: i,
          style: {
            ...g.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            u.jsx(HN, {
              children: c,
            }),
            u.jsx(LN, {
              scope: r,
              isInside: !0,
              children: u.jsx(d2, {
                id: y.contentId,
                role: "tooltip",
                children: f || c,
              }),
            }),
          ],
        }),
      })
    );
  });
tx.displayName = jl;
var ax = "TooltipArrow",
  BN = b.forwardRef((a, i) => {
    const { __scopeTooltip: r, ...c } = a,
      f = Wu(r);
    return UN(ax, r).isInside
      ? null
      : u.jsx(CN, {
          ...f,
          ...c,
          ref: i,
        });
  });
BN.displayName = ax;

function qN(a, i) {
  const r = Math.abs(i.top - a.y),
    c = Math.abs(i.bottom - a.y),
    f = Math.abs(i.right - a.x),
    d = Math.abs(i.left - a.x);
  switch (Math.min(r, c, f, d)) {
    case d:
      return "left";
    case f:
      return "right";
    case r:
      return "top";
    case c:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}

function GN(a, i, r = 5) {
  const c = [];
  switch (i) {
    case "top":
      c.push(
        {
          x: a.x - r,
          y: a.y + r,
        },
        {
          x: a.x + r,
          y: a.y + r,
        },
      );
      break;
    case "bottom":
      c.push(
        {
          x: a.x - r,
          y: a.y - r,
        },
        {
          x: a.x + r,
          y: a.y - r,
        },
      );
      break;
    case "left":
      c.push(
        {
          x: a.x + r,
          y: a.y - r,
        },
        {
          x: a.x + r,
          y: a.y + r,
        },
      );
      break;
    case "right":
      c.push(
        {
          x: a.x - r,
          y: a.y - r,
        },
        {
          x: a.x - r,
          y: a.y + r,
        },
      );
      break;
  }
  return c;
}

function YN(a) {
  const { top: i, right: r, bottom: c, left: f } = a;
  return [
    {
      x: f,
      y: i,
    },
    {
      x: r,
      y: i,
    },
    {
      x: r,
      y: c,
    },
    {
      x: f,
      y: c,
    },
  ];
}

function VN(a, i) {
  const { x: r, y: c } = a;
  let f = !1;
  for (let d = 0, h = i.length - 1; d < i.length; h = d++) {
    const g = i[d],
      y = i[h],
      p = g.x,
      w = g.y,
      v = y.x,
      E = y.y;
    w > c != E > c && r < ((v - p) * (c - w)) / (E - w) + p && (f = !f);
  }
  return f;
}

function QN(a) {
  const i = a.slice();
  return (
    i.sort((r, c) =>
      r.x < c.x ? -1 : r.x > c.x ? 1 : r.y < c.y ? -1 : r.y > c.y ? 1 : 0,
    ),
    XN(i)
  );
}

function XN(a) {
  if (a.length <= 1) return a.slice();
  const i = [];
  for (let c = 0; c < a.length; c++) {
    const f = a[c];
    for (; i.length >= 2; ) {
      const d = i[i.length - 1],
        h = i[i.length - 2];
      if ((d.x - h.x) * (f.y - h.y) >= (d.y - h.y) * (f.x - h.x)) i.pop();
      else break;
    }
    i.push(f);
  }
  i.pop();
  const r = [];
  for (let c = a.length - 1; c >= 0; c--) {
    const f = a[c];
    for (; r.length >= 2; ) {
      const d = r[r.length - 1],
        h = r[r.length - 2];
      if ((d.x - h.x) * (f.y - h.y) >= (d.y - h.y) * (f.x - h.x)) r.pop();
      else break;
    }
    r.push(f);
  }
  return (
    r.pop(),
    i.length === 1 && r.length === 1 && i[0].x === r[0].x && i[0].y === r[0].y
      ? i
      : i.concat(r)
  );
}
var ZN = Wy,
  KN = ex,
  lx = tx;
const $N = ZN,
  JN = b.forwardRef(({ className: a, sideOffset: i = 4, ...r }, c) =>
    u.jsx(KN, {
      children: u.jsx(lx, {
        ref: c,
        sideOffset: i,
        className: We(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
          a,
        ),
        ...r,
      }),
    }),
  );
JN.displayName = lx.displayName;
const ix = b.forwardRef(({ className: a, ...i }, r) =>
  u.jsx("div", {
    ref: r,
    className: We("rounded-xl border bg-card text-card-foreground shadow", a),
    ...i,
  }),
);
ix.displayName = "Card";
const PN = b.forwardRef(({ className: a, ...i }, r) =>
  u.jsx("div", {
    ref: r,
    className: We("flex flex-col space-y-1.5 p-6", a),
    ...i,
  }),
);
PN.displayName = "CardHeader";
const FN = b.forwardRef(({ className: a, ...i }, r) =>
  u.jsx("div", {
    ref: r,
    className: We("font-semibold leading-none tracking-tight", a),
    ...i,
  }),
);
FN.displayName = "CardTitle";
const WN = b.forwardRef(({ className: a, ...i }, r) =>
  u.jsx("div", {
    ref: r,
    className: We("text-sm text-muted-foreground", a),
    ...i,
  }),
);
WN.displayName = "CardDescription";
const sx = b.forwardRef(({ className: a, ...i }, r) =>
  u.jsx("div", {
    ref: r,
    className: We("p-6 pt-0", a),
    ...i,
  }),
);
sx.displayName = "CardContent";
const IN = b.forwardRef(({ className: a, ...i }, r) =>
  u.jsx("div", {
    ref: r,
    className: We("flex items-center p-6 pt-0", a),
    ...i,
  }),
);
IN.displayName = "CardFooter";

function ej() {
  return u.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: u.jsx(ix, {
      className: "w-full max-w-md mx-4",
      children: u.jsxs(sx, {
        className: "pt-6",
        children: [
          u.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              u.jsx(K2, {
                className: "h-8 w-8 text-red-500",
              }),
              u.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          u.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
const ug = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242451/hero-model-DKxVqNF__b6hvf5.png",
  kr = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242453/wig-1-CxyKTQgK_n6gatn.png",
  Oa = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242605/wig-2-FZLzVEXm_ouvqjv.png",
  rx = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242604/wig-3-B-y1SFQO_cyqc9v.png",
  ox = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242463/wig-4-DS7OrOF2_rfcfaz.png",
  cx = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242462/wig-5-B9UmFPa3_cncllr.png",
  ux = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242463/wig-6-BH6Bt1p2_huhogb.png",
  fx = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242606/wig-7-CywidD7E_li4efw.png",
  dx = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242609/wig-8-DNqzk095_llcpxs.png",
  mx = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242609/wig-9-CRYmUFCr_jz5aji.png",
  hx = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242610/wig-10-8zXRGqC8_prxdtb.png",
  px = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242436/wig-11-CcfZPZrE_fqvdip.png",
  gx = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242453/wig-12-9VvZar8g_ag6ivv.png",
  xr = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242465/lace-macro-CydiouNw_bdcttv.png",
  Du = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242588/customer-1-CSwfnLLO_wzzlbo.png",
  yx = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242438/customer-2-DiO6CYPM_ldtfev.png",
  xx = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242451/customer-3-7Pbg6YTt_uxnrlj.png",
  tj = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242451/video-melt-CG3g96EO_n5ekvi.png",
  nj = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242595/video-movement-BvqXjSH__se1rs0.png",
  aj = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242454/video-transform-BsOAAIkP_w0ah6c.png",
  lj = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242440/coll-glueless-DhcHBh_O_rkgypz.png",
  ij = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242594/coll-hd-msf1M5Dt_mkzei7.png",
  sj = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242588/coll-beginner-0yfT6ee5_wdow9b.png",
  rj = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242585/coll-volume-DG55ZbDA_ll6blx.png";
var Lr = "Collapsible",
  [oj, vx] = Ra(Lr),
  [cj, ef] = oj(Lr),
  bx = b.forwardRef((a, i) => {
    const {
        __scopeCollapsible: r,
        open: c,
        defaultOpen: f,
        disabled: d,
        onOpenChange: h,
        ...g
      } = a,
      [y, p] = Di({
        prop: c,
        defaultProp: f ?? !1,
        onChange: h,
        caller: Lr,
      });
    return u.jsx(cj, {
      scope: r,
      disabled: d,
      contentId: Ty(),
      open: y,
      onOpenToggle: b.useCallback(() => p((w) => !w), [p]),
      children: u.jsx(Ye.div, {
        "data-state": nf(y),
        "data-disabled": d ? "" : void 0,
        ...g,
        ref: i,
      }),
    });
  });
bx.displayName = Lr;
var wx = "CollapsibleTrigger",
  Sx = b.forwardRef((a, i) => {
    const { __scopeCollapsible: r, ...c } = a,
      f = ef(wx, r);
    return u.jsx(Ye.button, {
      type: "button",
      "aria-controls": f.contentId,
      "aria-expanded": f.open || !1,
      "data-state": nf(f.open),
      "data-disabled": f.disabled ? "" : void 0,
      disabled: f.disabled,
      ...c,
      ref: i,
      onClick: Be(a.onClick, f.onOpenToggle),
    });
  });
Sx.displayName = wx;
var tf = "CollapsibleContent",
  Nx = b.forwardRef((a, i) => {
    const { forceMount: r, ...c } = a,
      f = ef(tf, a.__scopeCollapsible);
    return u.jsx(El, {
      present: r || f.open,
      children: ({ present: d }) =>
        u.jsx(uj, {
          ...c,
          ref: i,
          present: d,
        }),
    });
  });
Nx.displayName = tf;
var uj = b.forwardRef((a, i) => {
  const { __scopeCollapsible: r, present: c, children: f, ...d } = a,
    h = ef(tf, r),
    [g, y] = b.useState(c),
    p = b.useRef(null),
    w = dt(i, p),
    v = b.useRef(0),
    E = v.current,
    A = b.useRef(0),
    D = A.current,
    T = h.open || g,
    O = b.useRef(T),
    U = b.useRef(void 0);
  return (
    b.useEffect(() => {
      const H = requestAnimationFrame(() => (O.current = !1));
      return () => cancelAnimationFrame(H);
    }, []),
    ln(() => {
      const H = p.current;
      if (H) {
        ((U.current = U.current || {
          transitionDuration: H.style.transitionDuration,
          animationName: H.style.animationName,
        }),
          (H.style.transitionDuration = "0s"),
          (H.style.animationName = "none"));
        const V = H.getBoundingClientRect();
        ((v.current = V.height),
          (A.current = V.width),
          O.current ||
            ((H.style.transitionDuration = U.current.transitionDuration),
            (H.style.animationName = U.current.animationName)),
          y(c));
      }
    }, [h.open, c]),
    u.jsx(Ye.div, {
      "data-state": nf(h.open),
      "data-disabled": h.disabled ? "" : void 0,
      id: h.contentId,
      hidden: !T,
      ...d,
      ref: w,
      style: {
        "--radix-collapsible-content-height": E ? `${E}px` : void 0,
        "--radix-collapsible-content-width": D ? `${D}px` : void 0,
        ...a.style,
      },
      children: T && f,
    })
  );
});

function nf(a) {
  return a ? "open" : "closed";
}
var fj = bx,
  dj = Sx,
  mj = Nx,
  hj = b.createContext(void 0);

function pj(a) {
  const i = b.useContext(hj);
  return a || i || "ltr";
}
var Jt = "Accordion",
  gj = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [af, yj, xj] = _g(Jt),
  [Ur] = Ra(Jt, [xj, vx]),
  lf = vx(),
  jx = Ke.forwardRef((a, i) => {
    const { type: r, ...c } = a,
      f = c,
      d = c;
    return u.jsx(af.Provider, {
      scope: a.__scopeAccordion,
      children:
        r === "multiple"
          ? u.jsx(Sj, {
              ...d,
              ref: i,
            })
          : u.jsx(wj, {
              ...f,
              ref: i,
            }),
    });
  });
jx.displayName = Jt;
var [Ex, vj] = Ur(Jt),
  [Tx, bj] = Ur(Jt, {
    collapsible: !1,
  }),
  wj = Ke.forwardRef((a, i) => {
    const {
        value: r,
        defaultValue: c,
        onValueChange: f = () => {},
        collapsible: d = !1,
        ...h
      } = a,
      [g, y] = Di({
        prop: r,
        defaultProp: c ?? "",
        onChange: f,
        caller: Jt,
      });
    return u.jsx(Ex, {
      scope: a.__scopeAccordion,
      value: Ke.useMemo(() => (g ? [g] : []), [g]),
      onItemOpen: y,
      onItemClose: Ke.useCallback(() => d && y(""), [d, y]),
      children: u.jsx(Tx, {
        scope: a.__scopeAccordion,
        collapsible: d,
        children: u.jsx(Cx, {
          ...h,
          ref: i,
        }),
      }),
    });
  }),
  Sj = Ke.forwardRef((a, i) => {
    const { value: r, defaultValue: c, onValueChange: f = () => {}, ...d } = a,
      [h, g] = Di({
        prop: r,
        defaultProp: c ?? [],
        onChange: f,
        caller: Jt,
      }),
      y = Ke.useCallback((w) => g((v = []) => [...v, w]), [g]),
      p = Ke.useCallback((w) => g((v = []) => v.filter((E) => E !== w)), [g]);
    return u.jsx(Ex, {
      scope: a.__scopeAccordion,
      value: h,
      onItemOpen: y,
      onItemClose: p,
      children: u.jsx(Tx, {
        scope: a.__scopeAccordion,
        collapsible: !0,
        children: u.jsx(Cx, {
          ...d,
          ref: i,
        }),
      }),
    });
  }),
  [Nj, Hr] = Ur(Jt),
  Cx = Ke.forwardRef((a, i) => {
    const {
        __scopeAccordion: r,
        disabled: c,
        dir: f,
        orientation: d = "vertical",
        ...h
      } = a,
      g = Ke.useRef(null),
      y = dt(g, i),
      p = yj(r),
      v = pj(f) === "ltr",
      E = Be(a.onKeyDown, (A) => {
        if (!gj.includes(A.key)) return;
        const D = A.target,
          T = p().filter(($) => !$.ref.current?.disabled),
          O = T.findIndex(($) => $.ref.current === D),
          U = T.length;
        if (O === -1) return;
        A.preventDefault();
        let H = O;
        const V = 0,
          Z = U - 1,
          J = () => {
            ((H = O + 1), H > Z && (H = V));
          },
          F = () => {
            ((H = O - 1), H < V && (H = Z));
          };
        switch (A.key) {
          case "Home":
            H = V;
            break;
          case "End":
            H = Z;
            break;
          case "ArrowRight":
            d === "horizontal" && (v ? J() : F());
            break;
          case "ArrowDown":
            d === "vertical" && J();
            break;
          case "ArrowLeft":
            d === "horizontal" && (v ? F() : J());
            break;
          case "ArrowUp":
            d === "vertical" && F();
            break;
        }
        const X = H % U;
        T[X].ref.current?.focus();
      });
    return u.jsx(Nj, {
      scope: r,
      disabled: c,
      direction: f,
      orientation: d,
      children: u.jsx(af.Slot, {
        scope: r,
        children: u.jsx(Ye.div, {
          ...h,
          "data-orientation": d,
          ref: y,
          onKeyDown: c ? void 0 : E,
        }),
      }),
    });
  }),
  vr = "AccordionItem",
  [jj, sf] = Ur(vr),
  Ax = Ke.forwardRef((a, i) => {
    const { __scopeAccordion: r, value: c, ...f } = a,
      d = Hr(vr, r),
      h = vj(vr, r),
      g = lf(r),
      y = Ty(),
      p = (c && h.value.includes(c)) || !1,
      w = d.disabled || a.disabled;
    return u.jsx(jj, {
      scope: r,
      open: p,
      disabled: w,
      triggerId: y,
      children: u.jsx(fj, {
        "data-orientation": d.orientation,
        "data-state": zx(p),
        ...g,
        ...f,
        ref: i,
        disabled: w,
        open: p,
        onOpenChange: (v) => {
          v ? h.onItemOpen(c) : h.onItemClose(c);
        },
      }),
    });
  });
Ax.displayName = vr;
var Ox = "AccordionHeader",
  Rx = Ke.forwardRef((a, i) => {
    const { __scopeAccordion: r, ...c } = a,
      f = Hr(Jt, r),
      d = sf(Ox, r);
    return u.jsx(Ye.h3, {
      "data-orientation": f.orientation,
      "data-state": zx(d.open),
      "data-disabled": d.disabled ? "" : void 0,
      ...c,
      ref: i,
    });
  });
Rx.displayName = Ox;
var zu = "AccordionTrigger",
  _x = Ke.forwardRef((a, i) => {
    const { __scopeAccordion: r, ...c } = a,
      f = Hr(Jt, r),
      d = sf(zu, r),
      h = bj(zu, r),
      g = lf(r);
    return u.jsx(af.ItemSlot, {
      scope: r,
      children: u.jsx(dj, {
        "aria-disabled": (d.open && !h.collapsible) || void 0,
        "data-orientation": f.orientation,
        id: d.triggerId,
        ...g,
        ...c,
        ref: i,
      }),
    });
  });
_x.displayName = zu;
var Mx = "AccordionContent",
  Dx = Ke.forwardRef((a, i) => {
    const { __scopeAccordion: r, ...c } = a,
      f = Hr(Jt, r),
      d = sf(Mx, r),
      h = lf(r);
    return u.jsx(mj, {
      role: "region",
      "aria-labelledby": d.triggerId,
      "data-orientation": f.orientation,
      ...h,
      ...c,
      ref: i,
      style: {
        "--radix-accordion-content-height":
          "var(--radix-collapsible-content-height)",
        "--radix-accordion-content-width":
          "var(--radix-collapsible-content-width)",
        ...a.style,
      },
    });
  });
Dx.displayName = Mx;

function zx(a) {
  return a ? "open" : "closed";
}
var Ej = jx,
  Tj = Ax,
  Cj = Rx,
  kx = _x,
  Lx = Dx;
const Ux = Ej,
  vl = b.forwardRef(({ className: a, ...i }, r) =>
    u.jsx(Tj, {
      ref: r,
      className: We("border-b", a),
      ...i,
    }),
  );
vl.displayName = "AccordionItem";
const bl = b.forwardRef(({ className: a, children: i, ...r }, c) =>
  u.jsx(Cj, {
    className: "flex",
    children: u.jsxs(kx, {
      ref: c,
      className: We(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        a,
      ),
      ...r,
      children: [
        i,
        u.jsx(ly, {
          className:
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
        }),
      ],
    }),
  }),
);
bl.displayName = kx.displayName;
const wl = b.forwardRef(({ className: a, children: i, ...r }, c) =>
  u.jsx(Lx, {
    ref: c,
    className:
      "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: u.jsx("div", {
      className: We("pb-4 pt-0", a),
      children: i,
    }),
  }),
);
wl.displayName = Lx.displayName;
const Aj = [
    {
      id: "1",
      name: "The 'Aura' Body Wave",
      benefit: "Beginner Friendly Melted Lace",
      price: "$450",
      oldPrice: "$580",
      image: Oa,
      badge: "Most Loved",
      rating: "4.9",
      stock: 8,
    },
    {
      id: "2",
      name: "The 'Silk' Straight",
      benefit: "Ultra HD Undetectable Lace",
      price: "$420",
      oldPrice: "$550",
      image: kr,
      badge: "Best Seller",
      rating: "4.8",
      stock: 5,
    },
    {
      id: "3",
      name: "The 'Golden Hour' Wavy",
      benefit: "Glueless Luxury Volume",
      price: "$480",
      oldPrice: "$620",
      image: rx,
      badge: "Limited Edition",
      rating: "5.0",
      stock: 3,
    },
  ],
  Oj = [
    {
      id: "4",
      name: "The 'Midnight' Volume",
      benefit: "Big Curly Black Hair",
      price: "$490",
      oldPrice: "$610",
      image: ox,
      badge: "New Drop",
      rating: "4.9",
      stock: 12,
    },
    {
      id: "5",
      name: "The 'Chic' Bob",
      benefit: "Short Blunt Cut Straight",
      price: "$380",
      oldPrice: "$490",
      image: cx,
      badge: "Trending",
      rating: "4.8",
      stock: 6,
    },
    {
      id: "6",
      name: "The 'Cabernet' Wave",
      benefit: "Dark Burgundy Red Body Wave",
      price: "$510",
      oldPrice: "$650",
      image: ux,
      badge: "Just In",
      rating: "5.0",
      stock: 4,
    },
  ],
  Rj = [
    {
      id: "7",
      name: "The 'Ocean' Water Wave",
      benefit: "Dark Brown Wet Look",
      price: "$460",
      oldPrice: "$590",
      image: fx,
      badge: "Summer Ready",
      rating: "4.9",
      stock: 9,
    },
    {
      id: "8",
      name: "The 'Honey' Straight",
      benefit: "Blonde Custom Color",
      price: "$520",
      oldPrice: "$680",
      image: dx,
      badge: "Custom Color",
      rating: "4.7",
      stock: 5,
    },
    {
      id: "9",
      name: "The 'Ebony' Deep Wave",
      benefit: "Loose Deep Wave Texture",
      price: "$470",
      oldPrice: "$600",
      image: mx,
      badge: "Low Maintenance",
      rating: "4.8",
      stock: 7,
    },
  ],
  _j = [
    {
      id: "10",
      name: "The 'Natural' Kinky",
      benefit: "Kinky Straight Blowout Look",
      price: "$440",
      oldPrice: "$570",
      image: hx,
      badge: "Most Natural",
      rating: "5.0",
      stock: 11,
    },
    {
      id: "11",
      name: "The 'Copper' Curl",
      benefit: "Ginger Copper Tight Curls",
      price: "$530",
      oldPrice: "$690",
      image: px,
      badge: "Statement Look",
      rating: "4.9",
      stock: 4,
    },
    {
      id: "12",
      name: "The 'Ash' Wave",
      benefit: "Ash Blonde Wavy Dimension",
      price: "$540",
      oldPrice: "$710",
      image: gx,
      badge: "Premium Color",
      rating: "4.8",
      stock: 2,
    },
  ],
  Mj = [
    {
      name: "Glueless Collection",
      image: lj,
    },
    {
      name: "HD Lace Collection",
      image: ij,
    },
    {
      name: "Beginner Friendly",
      image: sj,
    },
    {
      name: "Luxury Volume",
      image: rj,
    },
  ],
  Dj = [
    {
      name: "Jasmine",
      city: "Atlanta",
      text: "The melt is insane! I didn't even have to use glue. Best investment ever.",
      rating: 5,
      image: Du,
    },
    {
      name: "Sarah",
      city: "New York",
      text: "Luxury quality. The hair is so soft and the lace disappears.",
      rating: 5,
      image: yx,
    },
    {
      name: "Maya",
      city: "London",
      text: "Effortless glam indeed. I get compliments everywhere I go.",
      rating: 5,
      image: xx,
    },
  ],
  sr = ({ product: a }) =>
    u.jsxs("div", {
      className: "group block",
      children: [
        u.jsxs(Ne, {
          href: `/product/${a.id}`,
          className:
            "block relative aspect-[3/4] bg-secondary/30 mb-6 overflow-hidden cursor-pointer",
          children: [
            u.jsx("img", {
              src: a.image,
              alt: a.name,
              className:
                "w-full h-full object-cover object-center group-hover:opacity-0 transition-opacity duration-500 ease-in-out",
            }),
            u.jsx("img", {
              src: xr,
              alt: "Lace close up",
              className:
                "absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out scale-110",
            }),
            u.jsxs("div", {
              className: "absolute top-4 left-4 flex flex-col gap-2 z-10",
              children: [
                a.badge &&
                  u.jsx("div", {
                    className:
                      "bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-primary border border-border/50 shadow-sm",
                    children: a.badge,
                  }),
                u.jsxs("div", {
                  className:
                    "bg-destructive text-white px-3 py-1 text-[10px] uppercase tracking-widest font-semibold shadow-sm",
                  children: ["Only ", a.stock, " Left"],
                }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "space-y-4",
          children: [
            u.jsxs(Ne, {
              href: `/product/${a.id}`,
              className: "block",
              children: [
                u.jsxs("div", {
                  className: "flex justify-between items-start",
                  children: [
                    u.jsx("h3", {
                      className: "font-serif text-xl text-primary",
                      children: a.name,
                    }),
                    u.jsxs("div", {
                      className: "flex flex-col items-end",
                      children: [
                        u.jsx("p", {
                          className: "font-medium text-lg",
                          children: a.price,
                        }),
                        u.jsx("p", {
                          className:
                            "text-xs text-muted-foreground line-through decoration-primary/30",
                          children: a.oldPrice,
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx("p", {
                  className:
                    "text-muted-foreground text-sm font-light italic mt-1",
                  children: a.benefit,
                }),
                u.jsxs("div", {
                  className: "flex items-center gap-2 mt-2",
                  children: [
                    u.jsx("div", {
                      className: "flex gap-0.5 text-accent",
                      children: [1, 2, 3, 4, 5].map((i) =>
                        u.jsx(
                          Cn,
                          {
                            className: "w-3.5 h-3.5 fill-current",
                          },
                          i,
                        ),
                      ),
                    }),
                    u.jsx("span", {
                      className: "text-xs text-muted-foreground font-medium",
                      children: a.rating,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });

function zj() {
  return u.jsxs("div", {
    className: "pb-10 relative",
    children: [
      u.jsx("div", {
        className:
          "bg-primary text-primary-foreground text-[10px] md:text-xs text-center py-2.5 font-medium tracking-widest uppercase",
        children: "Free Express Shipping on Orders Over $300",
      }),
      u.jsxs("section", {
        className:
          "relative h-[85vh] w-full flex items-center justify-center overflow-hidden",
        children: [
          u.jsx("img", {
            src: ug,
            alt: "Beautiful model wearing Veloura luxury wig",
            className:
              "absolute inset-0 w-full h-full object-cover object-center scale-105",
          }),
          u.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent",
          }),
          u.jsx("div", {
            className: "absolute inset-0 bg-noise",
          }),
          u.jsxs("div", {
            className:
              "relative z-10 text-center px-4 w-full max-w-3xl mt-auto pb-24 md:pb-32",
            children: [
              u.jsxs("h1", {
                className:
                  "text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 drop-shadow-md text-balance",
                children: [
                  "Melted Hairlines. ",
                  u.jsx("br", {}),
                  u.jsx("span", {
                    className: "italic font-light",
                    children: "Effortless Glam.",
                  }),
                ],
              }),
              u.jsx("p", {
                className:
                  "text-white/90 text-sm md:text-base font-light tracking-wide mb-8 max-w-md mx-auto",
                children:
                  "Luxury wigs designed to look like it’s growing from your scalp.",
              }),
              u.jsx(Ne, {
                href: "/shop",
                children: u.jsx("button", {
                  className:
                    "bg-white text-primary px-8 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-white/90 transition-colors",
                  "data-testid": "button-shop-hero",
                  children: "Shop Best Sellers",
                }),
              }),
            ],
          }),
        ],
      }),
      u.jsx("section", {
        className: "bg-secondary/30 py-10 px-4 border-b border-border",
        children: u.jsxs("div", {
          className: "max-w-6xl mx-auto text-center space-y-6",
          children: [
            u.jsxs("div", {
              className: "space-y-2",
              children: [
                u.jsx("div", {
                  className:
                    "flex items-center justify-center gap-1.5 text-accent",
                  children: [1, 2, 3, 4, 5].map((a) =>
                    u.jsx(
                      Cn,
                      {
                        className: "w-4 h-4 fill-current",
                      },
                      a,
                    ),
                  ),
                }),
                u.jsx("p", {
                  className: "text-lg font-serif text-primary",
                  children: "4.9/5 Average Rating",
                }),
              ],
            }),
            u.jsx("div", {
              className: "flex justify-center -space-x-3 mb-2",
              children: [Du, yx, xx, Du].map((a, i) =>
                u.jsx(
                  "div",
                  {
                    className:
                      "w-10 h-10 rounded-full border-2 border-background overflow-hidden",
                    children: u.jsx("img", {
                      src: a,
                      className: "w-full h-full object-cover",
                    }),
                  },
                  i,
                ),
              ),
            }),
            u.jsxs("div", {
              className:
                "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 max-w-4xl mx-auto",
              children: [
                u.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    u.jsx("p", {
                      className: "font-serif text-xl text-primary",
                      children: "3,247+",
                    }),
                    u.jsx("p", {
                      className:
                        "text-[10px] uppercase tracking-widest text-muted-foreground",
                      children: "Confident Women Served",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    u.jsx("p", {
                      className: "font-serif text-xl text-primary",
                      children: "120+",
                    }),
                    u.jsx("p", {
                      className:
                        "text-[10px] uppercase tracking-widest text-muted-foreground",
                      children: "Glam Transformations",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    u.jsx("p", {
                      className: "font-serif text-xl text-primary",
                      children: "Secure",
                    }),
                    u.jsx("p", {
                      className:
                        "text-[10px] uppercase tracking-widest text-muted-foreground",
                      children: "Payments & Fast Shipping",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      u.jsxs("section", {
        className: "bg-[#2a1b15] py-12 px-4 relative overflow-hidden",
        children: [
          u.jsx("div", {
            className:
              "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent",
          }),
          u.jsx("div", {
            className:
              "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent",
          }),
          u.jsxs("div", {
            className: "max-w-4xl mx-auto text-center space-y-6",
            children: [
              u.jsxs("div", {
                className: "space-y-2",
                children: [
                  u.jsx("h2", {
                    className: "text-accent text-3xl md:text-4xl font-serif",
                    children: "Luxury You Can’t Miss",
                  }),
                  u.jsx("p", {
                    className:
                      "text-secondary/70 text-sm font-light tracking-wide italic",
                    children:
                      "Enjoy Free Express Shipping + Complimentary Wig Cap On All Orders This Week.",
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                  u.jsx("p", {
                    className:
                      "text-white/60 text-[10px] uppercase tracking-[0.2em]",
                    children: "Offer Ends In:",
                  }),
                  u.jsxs("div", {
                    className: "flex gap-6 text-white font-serif",
                    children: [
                      u.jsxs("div", {
                        className: "text-center",
                        children: [
                          u.jsx("span", {
                            className: "text-2xl",
                            children: "12",
                          }),
                          u.jsx("p", {
                            className:
                              "text-[8px] uppercase tracking-widest opacity-50",
                            children: "Hrs",
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "text-center",
                        children: [
                          u.jsx("span", {
                            className: "text-2xl",
                            children: "45",
                          }),
                          u.jsx("p", {
                            className:
                              "text-[8px] uppercase tracking-widest opacity-50",
                            children: "Min",
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "text-center",
                        children: [
                          u.jsx("span", {
                            className: "text-2xl",
                            children: "00",
                          }),
                          u.jsx("p", {
                            className:
                              "text-[8px] uppercase tracking-widest opacity-50",
                            children: "Sec",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsx(Ne, {
                    href: "/shop",
                    children: u.jsx("button", {
                      className:
                        "bg-accent text-primary px-10 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-accent/90 transition-colors mt-2",
                      children: "Claim This Offer",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u.jsxs("section", {
        id: "bestsellers",
        className: "py-24 px-4 md:px-8 max-w-7xl mx-auto",
        children: [
          u.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-between items-end mb-16 gap-4",
            children: [
              u.jsxs("div", {
                className: "space-y-3",
                children: [
                  u.jsx("h2", {
                    className: "text-3xl md:text-4xl font-serif text-primary",
                    children: "Most Loved By Our Glam Girls",
                  }),
                  u.jsx("p", {
                    className:
                      "text-muted-foreground text-sm uppercase tracking-widest",
                    children: "Our signature best-selling collection.",
                  }),
                ],
              }),
              u.jsxs(Ne, {
                href: "/shop",
                className:
                  "text-primary text-sm uppercase tracking-widest font-medium hover:opacity-70 flex items-center gap-2 border-b border-primary/30 pb-1",
                children: [
                  "Shop All Bestsellers ",
                  u.jsx(yl, {
                    className: "w-4 h-4",
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8",
            children: Aj.map((a) =>
              u.jsx(
                sr,
                {
                  product: a,
                },
                a.id,
              ),
            ),
          }),
        ],
      }),
      u.jsxs("section", {
        className:
          "py-24 px-4 md:px-8 max-w-7xl mx-auto bg-secondary/5 border-y border-border/50",
        children: [
          u.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-between items-end mb-16 gap-4",
            children: [
              u.jsxs("div", {
                className: "space-y-3",
                children: [
                  u.jsx("h2", {
                    className: "text-3xl md:text-4xl font-serif text-primary",
                    children: "Just Landed: The New Edit",
                  }),
                  u.jsx("p", {
                    className:
                      "text-muted-foreground text-sm uppercase tracking-widest",
                    children: "Fresh drops for the new season.",
                  }),
                ],
              }),
              u.jsxs(Ne, {
                href: "/shop",
                className:
                  "text-primary text-sm uppercase tracking-widest font-medium hover:opacity-70 flex items-center gap-2 border-b border-primary/30 pb-1",
                children: [
                  "View All New Arrivals ",
                  u.jsx(yl, {
                    className: "w-4 h-4",
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8",
            children: Oj.map((a) =>
              u.jsx(
                sr,
                {
                  product: a,
                },
                a.id,
              ),
            ),
          }),
        ],
      }),
      u.jsx("section", {
        className: "py-24 px-4 bg-background",
        children: u.jsxs("div", {
          className: "max-w-7xl mx-auto space-y-16",
          children: [
            u.jsxs("div", {
              className: "text-center space-y-4",
              children: [
                u.jsx("h2", {
                  className: "text-3xl md:text-4xl font-serif text-primary",
                  children: "See Why Our Lace Disappears",
                }),
                u.jsx("p", {
                  className:
                    "text-muted-foreground text-sm uppercase tracking-widest",
                  children: "No filters. No heavy edits. Just real melt.",
                }),
              ],
            }),
            u.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-6",
              children: [
                {
                  title: "The Perfect Melt",
                  sub: "Lace melting close-up",
                  img: tj,
                },
                {
                  title: "Flow & Movement",
                  sub: "360 hair movement",
                  img: nj,
                },
                {
                  title: "The Glow Up",
                  sub: "Before & after install",
                  img: aj,
                },
              ].map((a, i) =>
                u.jsxs(
                  "div",
                  {
                    className:
                      "group relative isolate z-0 aspect-[9/16] overflow-hidden bg-secondary/20 cursor-pointer",
                    children: [
                      u.jsx("img", {
                        src: a.img,
                        className:
                          "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                      }),
                      u.jsx("div", {
                        className:
                          "absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors",
                      }),
                      u.jsx("div", {
                        className:
                          "absolute inset-0 z-10 flex items-center justify-center",
                        children: u.jsx("div", {
                          className:
                            "w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500",
                          children: u.jsx(Cu, {
                            className: "w-10 h-10 text-white stroke-1",
                          }),
                        }),
                      }),
                      u.jsxs("div", {
                        className:
                          "absolute bottom-6 left-6 text-white space-y-1",
                        children: [
                          u.jsx("p", {
                            className: "font-serif text-xl",
                            children: a.title,
                          }),
                          u.jsx("p", {
                            className:
                              "text-[10px] uppercase tracking-widest opacity-70",
                            children: a.sub,
                          }),
                        ],
                      }),
                    ],
                  },
                  i,
                ),
              ),
            }),
          ],
        }),
      }),
      u.jsxs("section", {
        className: "py-24 px-4 md:px-8 max-w-7xl mx-auto",
        children: [
          u.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-between items-end mb-16 gap-4",
            children: [
              u.jsxs("div", {
                className: "space-y-3",
                children: [
                  u.jsx("h2", {
                    className: "text-3xl md:text-4xl font-serif text-primary",
                    children: "The Glueless Revolution",
                  }),
                  u.jsx("p", {
                    className:
                      "text-muted-foreground text-sm uppercase tracking-widest",
                    children: "Zero adhesive required. 100% secure.",
                  }),
                ],
              }),
              u.jsxs(Ne, {
                href: "/shop",
                className:
                  "text-primary text-sm uppercase tracking-widest font-medium hover:opacity-70 flex items-center gap-2 border-b border-primary/30 pb-1",
                children: [
                  "Shop Glueless Wigs ",
                  u.jsx(yl, {
                    className: "w-4 h-4",
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8",
            children: Rj.map((a) =>
              u.jsx(
                sr,
                {
                  product: a,
                },
                a.id,
              ),
            ),
          }),
        ],
      }),
      u.jsxs("section", {
        className:
          "relative min-h-[70vh] flex items-center px-4 md:px-20 py-24 overflow-hidden my-12",
        children: [
          u.jsx("img", {
            src: ug,
            className:
              "absolute inset-0 w-full h-full object-cover brightness-[0.4]",
          }),
          u.jsxs("div", {
            className: "relative z-10 max-w-2xl space-y-8",
            children: [
              u.jsxs("h2", {
                className:
                  "text-4xl md:text-6xl font-serif text-white leading-tight",
                children: [
                  "Walk In. Turn Heads. ",
                  u.jsx("br", {}),
                  "Leave ",
                  u.jsx("span", {
                    className: "italic font-light",
                    children: "Unforgettable.",
                  }),
                ],
              }),
              u.jsx("p", {
                className:
                  "text-white/80 text-lg font-light leading-relaxed max-w-xl",
                children:
                  "Veloura wigs are designed for women who refuse to blend in. Every strand is crafted for effortless confidence, melted hairlines, and that soft-life glow.",
              }),
              u.jsx(Ne, {
                href: "/shop",
                children: u.jsx("button", {
                  className:
                    "bg-accent text-primary px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-accent/90 transition-all hover:translate-x-1",
                  children: "Find Your Signature Look",
                }),
              }),
            ],
          }),
        ],
      }),
      u.jsxs("section", {
        className: "py-24 px-4 md:px-8 max-w-7xl mx-auto",
        children: [
          u.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-between items-end mb-16 gap-4",
            children: [
              u.jsxs("div", {
                className: "space-y-3",
                children: [
                  u.jsx("h2", {
                    className: "text-3xl md:text-4xl font-serif text-primary",
                    children: "Big Hair, Soft Life",
                  }),
                  u.jsx("p", {
                    className:
                      "text-muted-foreground text-sm uppercase tracking-widest",
                    children: "Maximum density and volume.",
                  }),
                ],
              }),
              u.jsxs(Ne, {
                href: "/shop",
                className:
                  "text-primary text-sm uppercase tracking-widest font-medium hover:opacity-70 flex items-center gap-2 border-b border-primary/30 pb-1",
                children: [
                  "Shop Luxury Volume ",
                  u.jsx(yl, {
                    className: "w-4 h-4",
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8",
            children: _j.map((a) =>
              u.jsx(
                sr,
                {
                  product: a,
                },
                a.id,
              ),
            ),
          }),
        ],
      }),
      u.jsx("section", {
        className: "py-24 px-4 bg-secondary/10",
        children: u.jsxs("div", {
          className: "max-w-7xl mx-auto space-y-16",
          children: [
            u.jsx("div", {
              className: "text-center",
              children: u.jsx("h2", {
                className: "text-3xl font-serif text-primary",
                children: "Find Your Perfect Match",
              }),
            }),
            u.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6",
              children: Mj.map((a, i) =>
                u.jsxs(
                  Ne,
                  {
                    href: "/shop",
                    className:
                      "group relative aspect-[4/5] overflow-hidden cursor-pointer block",
                    children: [
                      u.jsx("img", {
                        src: a.image,
                        className:
                          "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110",
                      }),
                      u.jsx("div", {
                        className:
                          "absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors",
                      }),
                      u.jsxs("div", {
                        className:
                          "absolute inset-0 flex flex-col items-center justify-center p-4 text-center",
                        children: [
                          u.jsx("h3", {
                            className:
                              "text-white font-serif text-lg md:text-2xl mb-4 group-hover:-translate-y-2 transition-transform duration-500",
                            children: a.name,
                          }),
                          u.jsx("span", {
                            className:
                              "text-accent text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500",
                            children: "Shop Now",
                          }),
                        ],
                      }),
                    ],
                  },
                  i,
                ),
              ),
            }),
          ],
        }),
      }),
      u.jsx("section", {
        className: "py-24 overflow-hidden bg-background border-t border-border",
        children: u.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 space-y-16",
          children: [
            u.jsx("div", {
              className: "text-center",
              children: u.jsx("h2", {
                className: "text-3xl font-serif text-primary",
                children: "Real Results From Real Women",
              }),
            }),
            u.jsx("div", {
              className:
                "flex gap-6 overflow-x-auto hide-scrollbar snap-x pb-10",
              children: Dj.map((a, i) =>
                u.jsxs(
                  "div",
                  {
                    className:
                      "min-w-[85vw] md:min-w-[400px] bg-secondary/20 p-8 md:p-10 snap-center space-y-6 flex flex-col border border-border/30",
                    children: [
                      u.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          u.jsx("img", {
                            src: a.image,
                            className: "w-16 h-16 rounded-full object-cover",
                          }),
                          u.jsxs("div", {
                            children: [
                              u.jsx("p", {
                                className: "font-serif text-lg text-primary",
                                children: a.name,
                              }),
                              u.jsx("p", {
                                className:
                                  "text-[10px] uppercase tracking-widest text-muted-foreground",
                                children: a.city,
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "flex gap-0.5 text-accent",
                        children: [1, 2, 3, 4, 5].map((r) =>
                          u.jsx(
                            Cn,
                            {
                              className: "w-4 h-4 fill-current",
                            },
                            r,
                          ),
                        ),
                      }),
                      u.jsxs("p", {
                        className:
                          "text-foreground/80 font-light leading-relaxed italic",
                        children: ['"', a.text, '"'],
                      }),
                    ],
                  },
                  i,
                ),
              ),
            }),
          ],
        }),
      }),
      u.jsxs("section", {
        className: "py-20 px-4 md:px-8 max-w-3xl mx-auto",
        children: [
          u.jsx("div", {
            className: "text-center mb-12",
            children: u.jsx("h2", {
              className: "text-3xl font-serif mb-4 text-primary",
              children: "Frequently Asked Questions",
            }),
          }),
          u.jsxs(Ux, {
            type: "single",
            collapsible: !0,
            className: "w-full",
            children: [
              u.jsxs(vl, {
                value: "item-1",
                children: [
                  u.jsx(bl, {
                    className:
                      "text-left font-medium hover:no-underline hover:text-primary py-5",
                    children: "How long is shipping?",
                  }),
                  u.jsx(wl, {
                    className:
                      "text-muted-foreground font-light leading-relaxed",
                    children:
                      "We offer Free Express Shipping on orders over $300. Processing takes 1-2 business days, and shipping typically takes 2-4 business days for domestic orders.",
                  }),
                ],
              }),
              u.jsxs(vl, {
                value: "item-2",
                children: [
                  u.jsx(bl, {
                    className:
                      "text-left font-medium hover:no-underline hover:text-primary py-5",
                    children: "What is your return policy?",
                  }),
                  u.jsx(wl, {
                    className:
                      "text-muted-foreground font-light leading-relaxed",
                    children:
                      "We offer a 7-Day Confidence Guarantee. If you are not completely satisfied, you can return your wig within 7 days of delivery, provided the lace is uncut and unworn.",
                  }),
                ],
              }),
              u.jsxs(vl, {
                value: "item-3",
                children: [
                  u.jsx(bl, {
                    className:
                      "text-left font-medium hover:no-underline hover:text-primary py-5",
                    children: "Do I need to glue the wig down?",
                  }),
                  u.jsx(wl, {
                    className:
                      "text-muted-foreground font-light leading-relaxed",
                    children:
                      "No! All our wigs come with adjustable elastic bands and combs, making them 100% glueless friendly.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const rr = "https://res.cloudinary.com/dooiyy0w6/image/upload/q_auto/f_auto/v1777242594/ugc-1-DOYcDn0b_sxhx41.png";
var kj = Symbol.for("react.lazy"),
  br = Sr[" use ".trim().toString()];

function Lj(a) {
  return typeof a == "object" && a !== null && "then" in a;
}

function Hx(a) {
  return (
    a != null &&
    typeof a == "object" &&
    "$$typeof" in a &&
    a.$$typeof === kj &&
    "_payload" in a &&
    Lj(a._payload)
  );
}

function Uj(a) {
  const i = Hj(a),
    r = b.forwardRef((c, f) => {
      let { children: d, ...h } = c;
      Hx(d) && typeof br == "function" && (d = br(d._payload));
      const g = b.Children.toArray(d),
        y = g.find(qj);
      if (y) {
        const p = y.props.children,
          w = g.map((v) =>
            v === y
              ? b.Children.count(p) > 1
                ? b.Children.only(null)
                : b.isValidElement(p)
                  ? p.props.children
                  : null
              : v,
          );
        return u.jsx(i, {
          ...h,
          ref: f,
          children: b.isValidElement(p) ? b.cloneElement(p, void 0, w) : null,
        });
      }
      return u.jsx(i, {
        ...h,
        ref: f,
        children: d,
      });
    });
  return ((r.displayName = `${a}.Slot`), r);
}

function Hj(a) {
  const i = b.forwardRef((r, c) => {
    let { children: f, ...d } = r;
    if (
      (Hx(f) && typeof br == "function" && (f = br(f._payload)),
      b.isValidElement(f))
    ) {
      const h = Yj(f),
        g = Gj(d, f.props);
      return (
        f.type !== b.Fragment && (g.ref = c ? Cr(c, h) : h),
        b.cloneElement(f, g)
      );
    }
    return b.Children.count(f) > 1 ? b.Children.only(null) : null;
  });
  return ((i.displayName = `${a}.SlotClone`), i);
}
var Bj = Symbol("radix.slottable");

function qj(a) {
  return (
    b.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === Bj
  );
}

function Gj(a, i) {
  const r = {
    ...i,
  };
  for (const c in i) {
    const f = a[c],
      d = i[c];
    /^on[A-Z]/.test(c)
      ? f && d
        ? (r[c] = (...g) => {
            const y = d(...g);
            return (f(...g), y);
          })
        : f && (r[c] = f)
      : c === "style"
        ? (r[c] = {
            ...f,
            ...d,
          })
        : c === "className" && (r[c] = [f, d].filter(Boolean).join(" "));
  }
  return {
    ...a,
    ...r,
  };
}

function Yj(a) {
  let i = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    r = i && "isReactWarning" in i && i.isReactWarning;
  return r
    ? a.ref
    : ((i = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (r = i && "isReactWarning" in i && i.isReactWarning),
      r ? a.props.ref : a.props.ref || a.ref);
}
var Vj = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Qj = Vj.reduce((a, i) => {
    const r = Uj(`Primitive.${i}`),
      c = b.forwardRef((f, d) => {
        const { asChild: h, ...g } = f,
          y = h ? r : i;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          u.jsx(y, {
            ...g,
            ref: d,
          })
        );
      });
    return (
      (c.displayName = `Primitive.${i}`),
      {
        ...a,
        [i]: c,
      }
    );
  }, {}),
  Xj = "Separator",
  fg = "horizontal",
  Zj = ["horizontal", "vertical"],
  Bx = b.forwardRef((a, i) => {
    const { decorative: r, orientation: c = fg, ...f } = a,
      d = Kj(c) ? c : fg,
      g = r
        ? {
            role: "none",
          }
        : {
            "aria-orientation": d === "vertical" ? d : void 0,
            role: "separator",
          };
    return u.jsx(Qj.div, {
      "data-orientation": d,
      ...g,
      ...f,
      ref: i,
    });
  });
Bx.displayName = Xj;

function Kj(a) {
  return Zj.includes(a);
}
var qx = Bx;
const Sl = b.forwardRef(
  (
    { className: a, orientation: i = "horizontal", decorative: r = !0, ...c },
    f,
  ) =>
    u.jsx(qx, {
      ref: f,
      decorative: r,
      orientation: i,
      className: We(
        "shrink-0 bg-border",
        i === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        a,
      ),
      ...c,
    }),
);
Sl.displayName = qx.displayName;

function $j() {
  const [, a] = Sg(),
    [i, r] = b.useState("20"),
    [c, f] = b.useState("180"),
    [d, h] = b.useState(1),
    [g, y] = b.useState(Oa),
    p = [
      {
        id: 1,
        src: Oa,
        alt: "Front view",
      },
      {
        id: 2,
        src: xr,
        alt: "Lace close up",
      },
      {
        id: 3,
        src: rr,
        alt: "Model wearing wig",
      },
    ],
    w = () => {
      a("/checkout");
    };
  return u.jsxs("div", {
    className: "bg-background pb-32",
    children: [
      u.jsxs("div", {
        className:
          "max-w-7xl mx-auto flex flex-col lg:flex-row border-b border-border/50",
        children: [
          u.jsxs("div", {
            className: "lg:hidden p-4 pb-0",
            children: [
              u.jsxs("div", {
                className: "flex gap-1 text-primary mb-2",
                children: [
                  [1, 2, 3, 4, 5].map((v) =>
                    u.jsx(
                      Cn,
                      {
                        className: "w-3.5 h-3.5 fill-current",
                      },
                      v,
                    ),
                  ),
                  u.jsx("span", {
                    className: "text-xs ml-1 text-muted-foreground",
                    children: "(128 Reviews)",
                  }),
                ],
              }),
              u.jsx("h1", {
                className: "text-3xl font-serif text-primary",
                children: "The 'Aura' Body Wave",
              }),
              u.jsxs("div", {
                className: "flex items-center gap-3 mt-1",
                children: [
                  u.jsx("p", {
                    className: "text-2xl",
                    children: "$450",
                  }),
                  u.jsx("p", {
                    className:
                      "text-sm text-muted-foreground line-through decoration-primary/30",
                    children: "$580",
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className:
              "w-full lg:w-1/2 flex flex-col p-4 lg:p-8 lg:border-r border-border/50",
            children: [
              u.jsxs("div", {
                className:
                  "relative aspect-[4/5] bg-secondary/20 overflow-hidden mb-4 rounded-sm",
                children: [
                  u.jsx("div", {
                    className:
                      "absolute top-4 left-4 bg-primary text-white text-[10px] uppercase tracking-widest px-2 py-1 font-medium z-10",
                    children: "Most Loved",
                  }),
                  u.jsx("img", {
                    src: g,
                    alt: "The Aura Body Wave",
                    className:
                      "w-full h-full object-cover cursor-crosshair transition-all duration-500 hover:scale-110",
                  }),
                  g === xr &&
                    u.jsxs("div", {
                      className:
                        "absolute bottom-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 flex items-center gap-2 text-xs font-medium rounded-full text-primary shadow-sm",
                      children: [
                        u.jsx(sw, {
                          className: "w-3 h-3",
                        }),
                        "HD Lace Zoom",
                      ],
                    }),
                  g === rr &&
                    u.jsxs("div", {
                      className:
                        "absolute bottom-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 flex items-center gap-2 text-xs font-medium rounded-full text-primary shadow-sm",
                      children: [
                        u.jsx(Cu, {
                          className: "w-3 h-3",
                        }),
                        "Model View",
                      ],
                    }),
                ],
              }),
              u.jsx("div", {
                className:
                  "flex gap-3 overflow-x-auto hide-scrollbar pb-2 snap-x",
                children: p.map((v) =>
                  u.jsxs(
                    "button",
                    {
                      onClick: () => y(v.src),
                      className: `flex-shrink-0 w-20 h-24 snap-center relative ${g === v.src ? "ring-1 ring-primary ring-offset-2 ring-offset-background" : "opacity-70 hover:opacity-100"} transition-all`,
                      children: [
                        u.jsx("img", {
                          src: v.src,
                          alt: v.alt,
                          className: "w-full h-full object-cover",
                        }),
                        v.src === rr &&
                          u.jsx("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center bg-black/20",
                            children: u.jsx(Cu, {
                              className: "w-6 h-6 text-white stroke-1",
                            }),
                          }),
                      ],
                    },
                    v.id,
                  ),
                ),
              }),
            ],
          }),
          u.jsxs("div", {
            className: "w-full lg:w-1/2 p-4 lg:p-12 lg:py-16",
            children: [
              u.jsxs("div", {
                className: "hidden lg:block mb-8",
                children: [
                  u.jsxs("div", {
                    className: "flex gap-1 text-primary mb-3",
                    children: [
                      [1, 2, 3, 4, 5].map((v) =>
                        u.jsx(
                          Cn,
                          {
                            className: "w-4 h-4 fill-current",
                          },
                          v,
                        ),
                      ),
                      u.jsx("span", {
                        className:
                          "text-sm ml-2 text-muted-foreground hover:text-primary cursor-pointer transition-colors",
                        children: "Read 128 Reviews",
                      }),
                    ],
                  }),
                  u.jsx("h1", {
                    className: "text-4xl font-serif text-primary text-balance",
                    children: "The 'Aura' Body Wave",
                  }),
                  u.jsxs("div", {
                    className: "flex items-center gap-4 mt-4",
                    children: [
                      u.jsx("p", {
                        className: "text-2xl font-light",
                        children: "$450",
                      }),
                      u.jsx("p", {
                        className:
                          "text-base text-muted-foreground line-through decoration-primary/30",
                        children: "$580",
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className:
                  "bg-secondary/30 text-xs py-2 px-3 rounded-sm flex items-center gap-2 mb-6 border border-accent/20",
                children: [
                  u.jsxs("span", {
                    className: "relative flex h-2 w-2",
                    children: [
                      u.jsx("span", {
                        className:
                          "animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75",
                      }),
                      u.jsx("span", {
                        className:
                          "relative inline-flex rounded-full h-2 w-2 bg-destructive",
                      }),
                    ],
                  }),
                  u.jsx("span", {
                    className: "text-foreground/80 font-medium",
                    children: "Only 8 left in stock",
                  }),
                ],
              }),
              u.jsx("p", {
                className:
                  "text-muted-foreground text-sm font-light leading-relaxed mb-8",
                children:
                  "Experience effortless luxury with our premium raw body wave hair. The 'Aura' features our signature ultra-thin HD lace, pre-plucked to perfection for a melt so flawless it looks like scalp.",
              }),
              u.jsxs("div", {
                className: "space-y-6",
                children: [
                  u.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      u.jsxs("div", {
                        className: "flex justify-between items-center",
                        children: [
                          u.jsx("label", {
                            className:
                              "text-sm font-medium uppercase tracking-wider",
                            children: "Length",
                          }),
                          u.jsxs("span", {
                            className:
                              "text-xs text-muted-foreground flex items-center gap-1 cursor-pointer hover:text-primary",
                            children: [
                              u.jsx(Qp, {
                                className: "w-3 h-3",
                              }),
                              " Length Guide",
                            ],
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "grid grid-cols-4 gap-2",
                        children: ["16", "18", "20", "22", "24", "26"].map(
                          (v) =>
                            u.jsxs(
                              "button",
                              {
                                onClick: () => r(v),
                                className: `py-2 text-sm border transition-all ${i === v ? "border-primary bg-primary text-white" : "border-border bg-transparent text-foreground hover:border-primary/50"}`,
                                children: [v, '"'],
                              },
                              v,
                            ),
                        ),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      u.jsxs("div", {
                        className: "flex justify-between items-center",
                        children: [
                          u.jsx("label", {
                            className:
                              "text-sm font-medium uppercase tracking-wider",
                            children: "Density",
                          }),
                          u.jsxs("span", {
                            className:
                              "text-xs text-muted-foreground flex items-center gap-1 cursor-pointer hover:text-primary",
                            children: [
                              u.jsx(Qp, {
                                className: "w-3 h-3",
                              }),
                              " Density Guide",
                            ],
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "grid grid-cols-3 gap-2",
                        children: [
                          {
                            val: "150",
                            label: "150% (Natural)",
                          },
                          {
                            val: "180",
                            label: "180% (Voluminous)",
                          },
                          {
                            val: "200",
                            label: "200% (Extra Full)",
                          },
                        ].map((v) =>
                          u.jsxs(
                            "button",
                            {
                              onClick: () => f(v.val),
                              className: `py-2 text-xs flex flex-col items-center justify-center border transition-all ${c === v.val ? "border-primary bg-primary text-white" : "border-border bg-transparent text-foreground hover:border-primary/50"}`,
                              children: [
                                u.jsxs("span", {
                                  className: "font-medium text-sm",
                                  children: [v.val, "%"],
                                }),
                                u.jsx("span", {
                                  className: "opacity-70 mt-0.5",
                                  children: v.label.split(" ")[1],
                                }),
                              ],
                            },
                            v.val,
                          ),
                        ),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      u.jsx("label", {
                        className:
                          "text-sm font-medium uppercase tracking-wider",
                        children: "Quantity",
                      }),
                      u.jsxs("div", {
                        className:
                          "flex items-center border border-border w-32",
                        children: [
                          u.jsx("button", {
                            onClick: () => h(Math.max(1, d - 1)),
                            className:
                              "p-3 text-muted-foreground hover:text-primary transition-colors",
                            children: u.jsx(sy, {
                              className: "w-4 h-4",
                            }),
                          }),
                          u.jsx("span", {
                            className: "flex-1 text-center text-sm font-medium",
                            children: d,
                          }),
                          u.jsx("button", {
                            onClick: () => h(d + 1),
                            className:
                              "p-3 text-muted-foreground hover:text-primary transition-colors",
                            children: u.jsx(ry, {
                              className: "w-4 h-4",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "mt-8 space-y-4",
                children: [
                  u.jsxs("button", {
                    onClick: w,
                    className:
                      "w-full bg-primary text-white py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-sm",
                    "data-testid": "button-add-to-cart",
                    children: ["Add to Cart - $", (450 * d).toLocaleString()],
                  }),
                  u.jsxs("div", {
                    className:
                      "text-center text-xs text-muted-foreground bg-secondary/20 py-2 border border-border/50",
                    children: [
                      "Pay in 4 interest-free installments of $",
                      (450 / 4).toFixed(2),
                      " with ",
                      u.jsx("span", {
                        className: "font-bold text-foreground",
                        children: "Klarna",
                      }),
                      " or ",
                      u.jsx("span", {
                        className: "font-bold text-[#0070ba]",
                        children: "PayPal",
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "mt-8 grid grid-cols-2 gap-4 text-xs",
                children: [
                  u.jsxs("div", {
                    className: "flex items-center gap-2 text-muted-foreground",
                    children: [
                      u.jsx(dw, {
                        className: "w-4 h-4 text-primary",
                      }),
                      u.jsx("span", {
                        children: "Ships by Tomorrow",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "flex items-center gap-2 text-muted-foreground",
                    children: [
                      u.jsx(Ci, {
                        className: "w-4 h-4 text-primary",
                      }),
                      u.jsx("span", {
                        children: "7-Day Guarantee",
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx(Sl, {
                className: "my-8",
              }),
              u.jsxs(Ux, {
                type: "single",
                collapsible: !0,
                className: "w-full",
                children: [
                  u.jsxs(vl, {
                    value: "item-1",
                    className: "border-border",
                    children: [
                      u.jsx(bl, {
                        className:
                          "text-sm uppercase tracking-wider font-medium hover:no-underline",
                        children: "Description",
                      }),
                      u.jsxs(wl, {
                        className:
                          "text-muted-foreground font-light text-sm space-y-2 leading-relaxed",
                        children: [
                          u.jsx("p", {
                            children:
                              "The 'Aura' features luxurious raw human hair sourced from single donors, ensuring cuticles are aligned and intact. This results in minimal shedding, no tangling, and hair that lasts for years with proper care.",
                          }),
                          u.jsxs("ul", {
                            className: "list-disc pl-4 space-y-1 mt-2",
                            children: [
                              u.jsx("li", {
                                children: "Lace: Ultra-thin HD Transparent",
                              }),
                              u.jsx("li", {
                                children: "Texture: Body Wave",
                              }),
                              u.jsx("li", {
                                children: "Color: Natural Dark Brown/Black",
                              }),
                              u.jsx("li", {
                                children:
                                  'Cap Size: Medium (22-22.5" circumference)',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs(vl, {
                    value: "item-2",
                    className: "border-border",
                    children: [
                      u.jsx(bl, {
                        className:
                          "text-sm uppercase tracking-wider font-medium hover:no-underline",
                        children: "Shipping & Returns",
                      }),
                      u.jsx(wl, {
                        className:
                          "text-muted-foreground font-light text-sm leading-relaxed",
                        children:
                          "Free Express Shipping on this item. Orders placed before 2PM EST ship same day. Return within 7 days in original, unworn condition with lace uncut for a full refund.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u.jsxs("div", {
        className: "max-w-5xl mx-auto px-4 py-16",
        children: [
          u.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-between items-center mb-10 gap-6",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsx("h2", {
                    className: "text-2xl font-serif text-primary",
                    children: "Customer Reviews",
                  }),
                  u.jsxs("div", {
                    className: "flex items-center gap-2 mt-2",
                    children: [
                      u.jsx("div", {
                        className: "flex gap-1 text-primary",
                        children: [1, 2, 3, 4, 5].map((v) =>
                          u.jsx(
                            Cn,
                            {
                              className: "w-4 h-4 fill-current",
                            },
                            v,
                          ),
                        ),
                      }),
                      u.jsx("span", {
                        className: "text-lg font-medium",
                        children: "4.9",
                      }),
                      u.jsx("span", {
                        className: "text-sm text-muted-foreground",
                        children: "Based on 128 reviews",
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("button", {
                className:
                  "border border-primary text-primary px-6 py-2.5 text-sm uppercase tracking-widest font-medium hover:bg-primary hover:text-white transition-colors flex items-center gap-2",
                children: [
                  u.jsx(B2, {
                    className: "w-4 h-4",
                  }),
                  " Write a Review",
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "space-y-8",
            children: [
              u.jsxs("div", {
                className: "border-b border-border/50 pb-8",
                children: [
                  u.jsxs("div", {
                    className: "flex justify-between items-start mb-4",
                    children: [
                      u.jsxs("div", {
                        children: [
                          u.jsxs("div", {
                            className: "flex items-center gap-2 mb-1",
                            children: [
                              u.jsx("span", {
                                className: "font-medium text-sm",
                                children: "Jasmine T.",
                              }),
                              u.jsxs("span", {
                                className:
                                  "text-[10px] bg-secondary/50 text-muted-foreground px-2 py-0.5 rounded-sm flex items-center gap-1",
                                children: [
                                  u.jsx(Ci, {
                                    className: "w-3 h-3",
                                  }),
                                  " Verified Buyer",
                                ],
                              }),
                            ],
                          }),
                          u.jsx("div", {
                            className: "flex gap-0.5 text-primary",
                            children: [1, 2, 3, 4, 5].map((v) =>
                              u.jsx(
                                Cn,
                                {
                                  className: "w-3 h-3 fill-current",
                                },
                                v,
                              ),
                            ),
                          }),
                        ],
                      }),
                      u.jsx("span", {
                        className: "text-xs text-muted-foreground",
                        children: "2 days ago",
                      }),
                    ],
                  }),
                  u.jsx("h4", {
                    className: "font-medium mb-2 text-sm",
                    children: "The melt is insane!!",
                  }),
                  u.jsx("p", {
                    className:
                      "text-sm text-muted-foreground font-light leading-relaxed mb-4",
                    children: `I rarely leave reviews but I had to for this. The HD lace completely disappeared into my skin. The hair is super soft and holds a curl perfectly. I got the 22" 180% density and it's the perfect amount of fullness without looking bulky. Definitely buying another one soon!`,
                  }),
                  u.jsx("div", {
                    className:
                      "w-24 h-24 bg-secondary overflow-hidden rounded-sm cursor-pointer hover:opacity-90 transition-opacity",
                    children: u.jsx("img", {
                      src: rr,
                      alt: "Customer review photo",
                      className: "w-full h-full object-cover",
                    }),
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "border-b border-border/50 pb-8",
                children: [
                  u.jsxs("div", {
                    className: "flex justify-between items-start mb-4",
                    children: [
                      u.jsxs("div", {
                        children: [
                          u.jsxs("div", {
                            className: "flex items-center gap-2 mb-1",
                            children: [
                              u.jsx("span", {
                                className: "font-medium text-sm",
                                children: "Sarah M.",
                              }),
                              u.jsxs("span", {
                                className:
                                  "text-[10px] bg-secondary/50 text-muted-foreground px-2 py-0.5 rounded-sm flex items-center gap-1",
                                children: [
                                  u.jsx(Ci, {
                                    className: "w-3 h-3",
                                  }),
                                  " Verified Buyer",
                                ],
                              }),
                            ],
                          }),
                          u.jsx("div", {
                            className: "flex gap-0.5 text-primary",
                            children: [1, 2, 3, 4, 5].map((v) =>
                              u.jsx(
                                Cn,
                                {
                                  className: "w-3 h-3 fill-current",
                                },
                                v,
                              ),
                            ),
                          }),
                        ],
                      }),
                      u.jsx("span", {
                        className: "text-xs text-muted-foreground",
                        children: "1 week ago",
                      }),
                    ],
                  }),
                  u.jsx("h4", {
                    className: "font-medium mb-2 text-sm",
                    children: "Worth every penny",
                  }),
                  u.jsx("p", {
                    className:
                      "text-sm text-muted-foreground font-light leading-relaxed",
                    children:
                      "You get what you pay for. The quality of this hair is unmatched. It truly is beginner friendly, the pre-plucking saved me so much time. It's completely glueless and feels secure all day.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u.jsx("div", {
        className:
          "lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border z-40",
        children: u.jsxs("button", {
          onClick: w,
          className:
            "w-full bg-primary text-white py-3.5 text-sm font-medium uppercase tracking-widest flex items-center justify-between px-6 shadow-lg",
          children: [
            u.jsx("span", {
              children: "Add to Cart",
            }),
            u.jsxs("div", {
              className: "flex flex-col items-end",
              children: [
                u.jsxs("span", {
                  children: ["$", (450 * d).toLocaleString()],
                }),
                u.jsxs("span", {
                  className: "text-[10px] line-through opacity-60",
                  children: ["$", (580 * d).toLocaleString()],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const ut = b.forwardRef(({ className: a, type: i, ...r }, c) =>
  u.jsx("input", {
    type: i,
    className: We(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      a,
    ),
    ref: c,
    ...r,
  }),
);
ut.displayName = "Input";

function Jj(a) {
  const i = b.useRef({
    value: a,
    previous: a,
  });
  return b.useMemo(
    () => (
      i.current.value !== a &&
        ((i.current.previous = i.current.value), (i.current.value = a)),
      i.current.previous
    ),
    [a],
  );
}
var Br = "Checkbox",
  [Pj] = Ra(Br),
  [Fj, rf] = Pj(Br);

function Wj(a) {
  const {
      __scopeCheckbox: i,
      checked: r,
      children: c,
      defaultChecked: f,
      disabled: d,
      form: h,
      name: g,
      onCheckedChange: y,
      required: p,
      value: w = "on",
      internal_do_not_use_render: v,
    } = a,
    [E, A] = Di({
      prop: r,
      defaultProp: f ?? !1,
      onChange: y,
      caller: Br,
    }),
    [D, T] = b.useState(null),
    [O, U] = b.useState(null),
    H = b.useRef(!1),
    V = D ? !!h || !!D.closest("form") : !0,
    Z = {
      checked: E,
      disabled: d,
      setChecked: A,
      control: D,
      setControl: T,
      name: g,
      form: h,
      value: w,
      hasConsumerStoppedPropagationRef: H,
      required: p,
      defaultChecked: na(f) ? !1 : f,
      isFormControl: V,
      bubbleInput: O,
      setBubbleInput: U,
    };
  return u.jsx(Fj, {
    scope: i,
    ...Z,
    children: Ij(v) ? v(Z) : c,
  });
}
var Gx = "CheckboxTrigger",
  Yx = b.forwardRef(
    ({ __scopeCheckbox: a, onKeyDown: i, onClick: r, ...c }, f) => {
      const {
          control: d,
          value: h,
          disabled: g,
          checked: y,
          required: p,
          setControl: w,
          setChecked: v,
          hasConsumerStoppedPropagationRef: E,
          isFormControl: A,
          bubbleInput: D,
        } = rf(Gx, a),
        T = dt(f, w),
        O = b.useRef(y);
      return (
        b.useEffect(() => {
          const U = d?.form;
          if (U) {
            const H = () => v(O.current);
            return (
              U.addEventListener("reset", H),
              () => U.removeEventListener("reset", H)
            );
          }
        }, [d, v]),
        u.jsx(Ye.button, {
          type: "button",
          role: "checkbox",
          "aria-checked": na(y) ? "mixed" : y,
          "aria-required": p,
          "data-state": Kx(y),
          "data-disabled": g ? "" : void 0,
          disabled: g,
          value: h,
          ...c,
          ref: T,
          onKeyDown: Be(i, (U) => {
            U.key === "Enter" && U.preventDefault();
          }),
          onClick: Be(r, (U) => {
            (v((H) => (na(H) ? !0 : !H)),
              D &&
                A &&
                ((E.current = U.isPropagationStopped()),
                E.current || U.stopPropagation()));
          }),
        })
      );
    },
  );
Yx.displayName = Gx;
var of = b.forwardRef((a, i) => {
  const {
    __scopeCheckbox: r,
    name: c,
    checked: f,
    defaultChecked: d,
    required: h,
    disabled: g,
    value: y,
    onCheckedChange: p,
    form: w,
    ...v
  } = a;
  return u.jsx(Wj, {
    __scopeCheckbox: r,
    checked: f,
    defaultChecked: d,
    disabled: g,
    required: h,
    onCheckedChange: p,
    name: c,
    form: w,
    value: y,
    internal_do_not_use_render: ({ isFormControl: E }) =>
      u.jsxs(u.Fragment, {
        children: [
          u.jsx(Yx, {
            ...v,
            ref: i,
            __scopeCheckbox: r,
          }),
          E &&
            u.jsx(Zx, {
              __scopeCheckbox: r,
            }),
        ],
      }),
  });
});
of.displayName = Br;
var Vx = "CheckboxIndicator",
  Qx = b.forwardRef((a, i) => {
    const { __scopeCheckbox: r, forceMount: c, ...f } = a,
      d = rf(Vx, r);
    return u.jsx(El, {
      present: c || na(d.checked) || d.checked === !0,
      children: u.jsx(Ye.span, {
        "data-state": Kx(d.checked),
        "data-disabled": d.disabled ? "" : void 0,
        ...f,
        ref: i,
        style: {
          pointerEvents: "none",
          ...a.style,
        },
      }),
    });
  });
Qx.displayName = Vx;
var Xx = "CheckboxBubbleInput",
  Zx = b.forwardRef(({ __scopeCheckbox: a, ...i }, r) => {
    const {
        control: c,
        hasConsumerStoppedPropagationRef: f,
        checked: d,
        defaultChecked: h,
        required: g,
        disabled: y,
        name: p,
        value: w,
        form: v,
        bubbleInput: E,
        setBubbleInput: A,
      } = rf(Xx, a),
      D = dt(r, A),
      T = Jj(d),
      O = By(c);
    b.useEffect(() => {
      const H = E;
      if (!H) return;
      const V = window.HTMLInputElement.prototype,
        J = Object.getOwnPropertyDescriptor(V, "checked").set,
        F = !f.current;
      if (T !== d && J) {
        const X = new Event("click", {
          bubbles: F,
        });
        ((H.indeterminate = na(d)),
          J.call(H, na(d) ? !1 : d),
          H.dispatchEvent(X));
      }
    }, [E, T, d, f]);
    const U = b.useRef(na(d) ? !1 : d);
    return u.jsx(Ye.input, {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: h ?? U.current,
      required: g,
      disabled: y,
      name: p,
      value: w,
      form: v,
      ...i,
      tabIndex: -1,
      ref: D,
      style: {
        ...i.style,
        ...O,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
        transform: "translateX(-100%)",
      },
    });
  });
Zx.displayName = Xx;

function Ij(a) {
  return typeof a == "function";
}

function na(a) {
  return a === "indeterminate";
}

function Kx(a) {
  return na(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
const $x = b.forwardRef(({ className: a, ...i }, r) =>
  u.jsx(of, {
    ref: r,
    className: We(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      a,
    ),
    ...i,
    children: u.jsx(Qx, {
      className: We("grid place-content-center text-current"),
      children: u.jsx(G2, {
        className: "h-4 w-4",
      }),
    }),
  }),
);
$x.displayName = of.displayName;

function eE() {
  const [a, i] = b.useState("card"),
    [r, c] = b.useState([
      {
        id: 1,
        name: "The 'Aura' Body Wave",
        details: '20" / 180% Density',
        price: 450,
        qty: 1,
        image: Oa,
      },
    ]),
    f = (h) => {
      c(r.filter((g) => g.id !== h));
    },
    d = r.reduce((h, g) => h + g.price * g.qty, 0);
  return u.jsx("div", {
    className: "bg-background min-h-screen",
    children: u.jsxs("div", {
      className: "max-w-6xl mx-auto flex flex-col-reverse lg:flex-row",
      children: [
        u.jsxs("div", {
          className:
            "w-full lg:w-3/5 p-4 lg:p-12 lg:pr-16 lg:border-r border-border/50 bg-white",
          children: [
            u.jsxs("div", {
              className:
                "flex items-center gap-2 text-xs text-muted-foreground mb-8",
              children: [
                u.jsx(Ne, {
                  href: "/cart",
                  className: "hover:text-primary transition-colors",
                  children: "Cart",
                }),
                u.jsx(iy, {
                  className: "w-3 h-3",
                }),
                u.jsx("span", {
                  className: "font-medium text-foreground",
                  children: "Checkout",
                }),
              ],
            }),
            u.jsxs("div", {
              className: "mb-10 text-center",
              children: [
                u.jsx("p", {
                  className:
                    "text-xs text-muted-foreground uppercase tracking-widest mb-4",
                  children: "Express Checkout",
                }),
                u.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    u.jsx("button", {
                      className:
                        "flex-1 bg-black text-white py-3 rounded-md flex justify-center items-center h-12 hover:bg-black/80 transition-colors",
                      children: u.jsxs("span", {
                        className: "font-semibold text-lg flex items-center",
                        children: [
                          u.jsx("svg", {
                            className: "w-4 h-4 mr-1 fill-current",
                            viewBox: "0 0 384 512",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: u.jsx("path", {
                              d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.3zM34.4 46.1c25.4 0 54.3 11.4 69.8 28.7-22.1 23.4-68.6 30.5-91.8 7.4 15.6-21.6 42.7-36.1 22-36.1z",
                            }),
                          }),
                          "Pay",
                        ],
                      }),
                    }),
                    u.jsx("button", {
                      className:
                        "flex-1 bg-[#ffc439] text-[#003087] py-3 rounded-md flex justify-center items-center h-12 hover:bg-[#ffc439]/90 transition-colors",
                      children: u.jsx("span", {
                        className: "font-bold text-lg italic tracking-tighter",
                        children: "PayPal",
                      }),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "relative flex items-center py-6",
                  children: [
                    u.jsx("div", {
                      className: "flex-grow border-t border-border/50",
                    }),
                    u.jsx("span", {
                      className:
                        "flex-shrink-0 mx-4 text-xs text-muted-foreground uppercase tracking-widest",
                      children: "Or pay with card",
                    }),
                    u.jsx("div", {
                      className: "flex-grow border-t border-border/50",
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("form", {
              className: "space-y-8 pb-10",
              onSubmit: (h) => h.preventDefault(),
              children: [
                u.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    u.jsxs("div", {
                      className: "flex justify-between items-center",
                      children: [
                        u.jsx("h2", {
                          className: "text-xl font-serif text-primary",
                          children: "Contact",
                        }),
                        u.jsxs("span", {
                          className: "text-sm text-muted-foreground",
                          children: [
                            "Have an account? ",
                            u.jsx(Ne, {
                              href: "/login",
                              className: "text-primary hover:underline",
                              children: "Log in",
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsx(ut, {
                      type: "email",
                      placeholder: "Email",
                      className:
                        "h-12 bg-transparent border-border focus-visible:ring-primary rounded-sm",
                    }),
                    u.jsxs("div", {
                      className: "flex items-center space-x-2 mt-2",
                      children: [
                        u.jsx($x, {
                          id: "marketing",
                          className:
                            "border-border/80 data-[state=checked]:bg-primary data-[state=checked]:border-primary",
                        }),
                        u.jsx("label", {
                          htmlFor: "marketing",
                          className:
                            "text-sm text-muted-foreground font-light cursor-pointer",
                          children: "Email me with news and offers",
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    u.jsx("h2", {
                      className: "text-xl font-serif text-primary",
                      children: "Delivery",
                    }),
                    u.jsxs("div", {
                      className: "grid grid-cols-2 gap-3",
                      children: [
                        u.jsx(ut, {
                          placeholder: "First name",
                          className:
                            "h-12 bg-transparent border-border focus-visible:ring-primary rounded-sm",
                        }),
                        u.jsx(ut, {
                          placeholder: "Last name",
                          className:
                            "h-12 bg-transparent border-border focus-visible:ring-primary rounded-sm",
                        }),
                      ],
                    }),
                    u.jsx(ut, {
                      placeholder: "Address",
                      className:
                        "h-12 bg-transparent border-border focus-visible:ring-primary rounded-sm",
                    }),
                    u.jsx(ut, {
                      placeholder: "Apartment, suite, etc. (optional)",
                      className:
                        "h-12 bg-transparent border-border focus-visible:ring-primary rounded-sm",
                    }),
                    u.jsxs("div", {
                      className: "grid grid-cols-3 gap-3",
                      children: [
                        u.jsx(ut, {
                          placeholder: "City",
                          className:
                            "h-12 col-span-1 bg-transparent border-border focus-visible:ring-primary rounded-sm",
                        }),
                        u.jsx(ut, {
                          placeholder: "State",
                          className:
                            "h-12 col-span-1 bg-transparent border-border focus-visible:ring-primary rounded-sm",
                        }),
                        u.jsx(ut, {
                          placeholder: "ZIP code",
                          className:
                            "h-12 col-span-1 bg-transparent border-border focus-visible:ring-primary rounded-sm",
                        }),
                      ],
                    }),
                    u.jsx(ut, {
                      placeholder: "Phone",
                      type: "tel",
                      className:
                        "h-12 bg-transparent border-border focus-visible:ring-primary rounded-sm",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    u.jsx("h2", {
                      className: "text-xl font-serif text-primary",
                      children: "Payment",
                    }),
                    u.jsx("p", {
                      className: "text-sm text-muted-foreground font-light",
                      children: "All transactions are secure and encrypted.",
                    }),
                    u.jsxs("div", {
                      className:
                        "border border-border/80 rounded-sm overflow-hidden bg-background",
                      children: [
                        u.jsx("div", {
                          className: `p-4 border-b border-border/50 cursor-pointer ${a === "card" ? "bg-secondary/10" : ""}`,
                          onClick: () => i("card"),
                          children: u.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              u.jsx("div", {
                                className: `w-4 h-4 rounded-full border flex items-center justify-center ${a === "card" ? "border-primary" : "border-muted-foreground"}`,
                                children:
                                  a === "card" &&
                                  u.jsx("div", {
                                    className:
                                      "w-2 h-2 rounded-full bg-primary",
                                  }),
                              }),
                              u.jsx("span", {
                                className: "font-medium text-sm",
                                children: "Credit card",
                              }),
                            ],
                          }),
                        }),
                        a === "card" &&
                          u.jsxs("div", {
                            className:
                              "p-4 bg-secondary/10 space-y-3 border-b border-border/50",
                            children: [
                              u.jsxs("div", {
                                className: "relative",
                                children: [
                                  u.jsx(ut, {
                                    placeholder: "Card number",
                                    className:
                                      "h-12 bg-white border-border/80 focus-visible:ring-primary rounded-sm",
                                  }),
                                  u.jsx(Xp, {
                                    className:
                                      "w-4 h-4 absolute right-3 top-4 text-muted-foreground",
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                  u.jsx(ut, {
                                    placeholder: "Expiration date (MM / YY)",
                                    className:
                                      "h-12 bg-white border-border/80 focus-visible:ring-primary rounded-sm",
                                  }),
                                  u.jsx(ut, {
                                    placeholder: "Security code",
                                    className:
                                      "h-12 bg-white border-border/80 focus-visible:ring-primary rounded-sm",
                                  }),
                                ],
                              }),
                              u.jsx(ut, {
                                placeholder: "Name on card",
                                className:
                                  "h-12 bg-white border-border/80 focus-visible:ring-primary rounded-sm",
                              }),
                            ],
                          }),
                        u.jsx("div", {
                          className: `p-4 border-b border-border/50 cursor-pointer ${a === "paypal" ? "bg-secondary/10" : ""}`,
                          onClick: () => i("paypal"),
                          children: u.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              u.jsx("div", {
                                className: `w-4 h-4 rounded-full border flex items-center justify-center ${a === "paypal" ? "border-primary" : "border-muted-foreground"}`,
                                children:
                                  a === "paypal" &&
                                  u.jsx("div", {
                                    className:
                                      "w-2 h-2 rounded-full bg-primary",
                                  }),
                              }),
                              u.jsx("span", {
                                className: "font-bold italic text-[#003087]",
                                children: "PayPal",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("button", {
                  type: "button",
                  className:
                    "w-full bg-primary text-white py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-sm flex justify-center items-center gap-2",
                  "data-testid": "button-pay-now",
                  children: [
                    u.jsx(Xp, {
                      className: "w-4 h-4",
                    }),
                    " Pay Now",
                  ],
                }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "w-full lg:w-2/5 p-4 py-8 lg:p-12 bg-secondary/20",
          children: [
            u.jsx("h2", {
              className: "text-xl font-serif text-primary mb-6 hidden lg:block",
              children: "Order Summary",
            }),
            u.jsx("div", {
              className: "space-y-6",
              children:
                r.length === 0
                  ? u.jsx("div", {
                      className: "text-center text-muted-foreground py-4",
                      children: "Your cart is empty.",
                    })
                  : r.map((h) =>
                      u.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-4 relative pr-6",
                          children: [
                            u.jsxs("div", {
                              className:
                                "relative w-16 h-20 bg-white rounded-sm border border-border overflow-hidden flex-shrink-0",
                              children: [
                                u.jsx("img", {
                                  src: h.image,
                                  alt: h.name,
                                  className: "w-full h-full object-cover",
                                }),
                                u.jsx("div", {
                                  className:
                                    "absolute -top-2 -right-2 bg-primary/80 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] z-10",
                                  children: h.qty,
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className: "flex-1",
                              children: [
                                u.jsx("h3", {
                                  className:
                                    "font-serif text-sm text-primary leading-tight",
                                  children: h.name,
                                }),
                                u.jsx("p", {
                                  className:
                                    "text-xs text-muted-foreground mt-1",
                                  children: h.details,
                                }),
                              ],
                            }),
                            u.jsxs("span", {
                              className: "font-medium text-sm",
                              children: ["$", h.price.toLocaleString()],
                            }),
                            u.jsx("button", {
                              onClick: () => f(h.id),
                              className:
                                "absolute right-0 top-1 p-1 text-muted-foreground hover:text-destructive transition-colors",
                              title: "Remove Item",
                              children: u.jsx(la, {
                                className: "w-4 h-4",
                              }),
                            }),
                          ],
                        },
                        h.id,
                      ),
                    ),
            }),
            u.jsx(Sl, {
              className: "my-6",
            }),
            u.jsxs("div", {
              className: "flex gap-2 mb-6",
              children: [
                u.jsx(ut, {
                  placeholder: "Gift card or discount code",
                  className:
                    "h-12 bg-white border-border focus-visible:ring-primary rounded-sm",
                }),
                u.jsx("button", {
                  className:
                    "bg-muted text-muted-foreground px-4 py-2 rounded-sm text-sm font-medium hover:bg-border transition-colors",
                  children: "Apply",
                }),
              ],
            }),
            u.jsx(Sl, {
              className: "my-6",
            }),
            u.jsxs("div", {
              className: "space-y-3 text-sm text-foreground/80",
              children: [
                u.jsxs("div", {
                  className: "flex justify-between",
                  children: [
                    u.jsx("span", {
                      children: "Subtotal",
                    }),
                    u.jsxs("span", {
                      className: "font-medium text-foreground",
                      children: ["$", d.toLocaleString()],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "flex justify-between",
                  children: [
                    u.jsx("span", {
                      children: "Shipping",
                    }),
                    u.jsx("span", {
                      className:
                        "text-xs uppercase tracking-wider text-muted-foreground",
                      children: "Calculated at next step",
                    }),
                  ],
                }),
              ],
            }),
            u.jsx(Sl, {
              className: "my-6",
            }),
            u.jsxs("div", {
              className: "flex justify-between items-center text-lg",
              children: [
                u.jsx("span", {
                  className: "font-medium",
                  children: "Total",
                }),
                u.jsxs("div", {
                  className: "flex items-end gap-2",
                  children: [
                    u.jsx("span", {
                      className: "text-xs text-muted-foreground mb-1",
                      children: "USD",
                    }),
                    u.jsxs("span", {
                      className: "font-serif text-2xl text-primary",
                      children: ["$", d.toLocaleString()],
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className:
                "mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground",
              children: [
                u.jsx(Ci, {
                  className: "w-4 h-4 text-green-600",
                }),
                u.jsx("span", {
                  children: "Secure SSL Encrypted Checkout",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}

function tE() {
  const [a, i] = b.useState([
      {
        id: 1,
        name: "The 'Aura' Body Wave",
        details: '20" / 180% Density',
        price: 450,
        qty: 1,
        image: Oa,
      },
      {
        id: 2,
        name: "The 'Silk' Straight",
        details: '22" / 150% Density',
        price: 420,
        qty: 1,
        image: kr,
      },
    ]),
    r = (d, h) => {
      i(
        a.map((g) => {
          if (g.id === d) {
            const y = Math.max(1, g.qty + h);
            return {
              ...g,
              qty: y,
            };
          }
          return g;
        }),
      );
    },
    c = (d) => {
      i(a.filter((h) => h.id !== d));
    },
    f = a.reduce((d, h) => d + h.price * h.qty, 0);
  return a.length === 0
    ? u.jsxs("div", {
        className:
          "min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center",
        children: [
          u.jsx("h1", {
            className: "text-4xl font-serif text-primary mb-6",
            children: "Your Cart is Empty",
          }),
          u.jsx("p", {
            className: "text-muted-foreground font-light mb-8 max-w-md",
            children:
              "Looks like you haven't added any of our luxury wigs to your cart yet. Discover your perfect match today.",
          }),
          u.jsx(Ne, {
            href: "/shop",
            children: u.jsx("button", {
              className:
                "bg-primary text-white px-10 py-4 text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors",
              children: "Shop The Collection",
            }),
          }),
        ],
      })
    : u.jsxs("div", {
        className: "bg-background pb-20",
        children: [
          u.jsx("div", {
            className:
              "bg-secondary/20 py-10 px-4 mb-10 border-b border-border/50",
            children: u.jsx("div", {
              className: "max-w-6xl mx-auto",
              children: u.jsx("h1", {
                className: "text-4xl font-serif text-primary text-center",
                children: "Your Cart",
              }),
            }),
          }),
          u.jsxs("div", {
            className:
              "max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-12",
            children: [
              u.jsxs("div", {
                className: "w-full lg:w-2/3",
                children: [
                  u.jsxs("div", {
                    className:
                      "hidden lg:grid grid-cols-12 gap-4 pb-4 border-b border-border text-xs uppercase tracking-widest text-muted-foreground",
                    children: [
                      u.jsx("div", {
                        className: "col-span-6",
                        children: "Product",
                      }),
                      u.jsx("div", {
                        className: "col-span-3 text-center",
                        children: "Quantity",
                      }),
                      u.jsx("div", {
                        className: "col-span-3 text-right",
                        children: "Total",
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    className: "divide-y border-border",
                    children: a.map((d) =>
                      u.jsxs(
                        "div",
                        {
                          className:
                            "py-6 flex flex-col lg:grid lg:grid-cols-12 gap-6 items-center",
                          children: [
                            u.jsxs("div", {
                              className:
                                "col-span-6 flex items-center gap-6 w-full",
                              children: [
                                u.jsx(Ne, {
                                  href: `/product/${d.id}`,
                                  className:
                                    "block w-24 h-32 flex-shrink-0 bg-secondary/30",
                                  children: u.jsx("img", {
                                    src: d.image,
                                    alt: d.name,
                                    className: "w-full h-full object-cover",
                                  }),
                                }),
                                u.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    u.jsxs("div", {
                                      className:
                                        "flex justify-between items-start",
                                      children: [
                                        u.jsx(Ne, {
                                          href: `/product/${d.id}`,
                                          className:
                                            "font-serif text-lg text-primary hover:opacity-80",
                                          children: d.name,
                                        }),
                                        u.jsx("button", {
                                          onClick: () => c(d.id),
                                          className:
                                            "lg:hidden text-muted-foreground hover:text-destructive",
                                          children: u.jsx(la, {
                                            className: "w-5 h-5",
                                          }),
                                        }),
                                      ],
                                    }),
                                    u.jsx("p", {
                                      className:
                                        "text-xs text-muted-foreground mt-1 mb-3",
                                      children: d.details,
                                    }),
                                    u.jsxs("p", {
                                      className:
                                        "lg:hidden font-medium text-primary",
                                      children: ["$", d.price.toLocaleString()],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className:
                                "col-span-3 flex justify-between lg:justify-center items-center w-full lg:w-auto",
                              children: [
                                u.jsx("span", {
                                  className:
                                    "lg:hidden text-xs uppercase tracking-widest text-muted-foreground",
                                  children: "Qty:",
                                }),
                                u.jsxs("div", {
                                  className:
                                    "flex items-center border border-border w-28",
                                  children: [
                                    u.jsx("button", {
                                      onClick: () => r(d.id, -1),
                                      className:
                                        "p-2 text-muted-foreground hover:text-primary transition-colors",
                                      children: u.jsx(sy, {
                                        className: "w-4 h-4",
                                      }),
                                    }),
                                    u.jsx("span", {
                                      className:
                                        "flex-1 text-center text-sm font-medium",
                                      children: d.qty,
                                    }),
                                    u.jsx("button", {
                                      onClick: () => r(d.id, 1),
                                      className:
                                        "p-2 text-muted-foreground hover:text-primary transition-colors",
                                      children: u.jsx(ry, {
                                        className: "w-4 h-4",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className:
                                "col-span-3 hidden lg:flex justify-end items-center gap-6",
                              children: [
                                u.jsxs("span", {
                                  className: "font-medium text-lg text-primary",
                                  children: [
                                    "$",
                                    (d.price * d.qty).toLocaleString(),
                                  ],
                                }),
                                u.jsx("button", {
                                  onClick: () => c(d.id),
                                  className:
                                    "text-muted-foreground hover:text-destructive transition-colors",
                                  children: u.jsx(la, {
                                    className: "w-5 h-5",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        d.id,
                      ),
                    ),
                  }),
                ],
              }),
              u.jsx("div", {
                className: "w-full lg:w-1/3",
                children: u.jsxs("div", {
                  className:
                    "bg-secondary/10 p-8 border border-border/50 sticky top-24",
                  children: [
                    u.jsx("h2", {
                      className: "text-2xl font-serif text-primary mb-6",
                      children: "Order Summary",
                    }),
                    u.jsxs("div", {
                      className: "space-y-4 text-sm text-foreground/80 mb-6",
                      children: [
                        u.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            u.jsx("span", {
                              children: "Subtotal",
                            }),
                            u.jsxs("span", {
                              className: "font-medium text-foreground",
                              children: ["$", f.toLocaleString()],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            u.jsx("span", {
                              children: "Shipping",
                            }),
                            u.jsx("span", {
                              className:
                                "text-xs uppercase tracking-wider text-muted-foreground",
                              children: "Calculated at checkout",
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsx(Sl, {
                      className: "my-6",
                    }),
                    u.jsxs("div", {
                      className:
                        "flex justify-between items-center text-lg mb-8",
                      children: [
                        u.jsx("span", {
                          className: "font-medium",
                          children: "Total",
                        }),
                        u.jsxs("div", {
                          className: "flex items-end gap-2",
                          children: [
                            u.jsx("span", {
                              className: "text-xs text-muted-foreground mb-1",
                              children: "USD",
                            }),
                            u.jsxs("span", {
                              className: "font-serif text-3xl text-primary",
                              children: ["$", f.toLocaleString()],
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsx(Ne, {
                      href: "/checkout",
                      children: u.jsxs("button", {
                        className:
                          "w-full bg-primary text-white py-4 text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors shadow-sm flex justify-center items-center gap-2",
                        children: [
                          "Proceed to Checkout ",
                          u.jsx(yl, {
                            className: "w-4 h-4",
                          }),
                        ],
                      }),
                    }),
                    u.jsxs("div", {
                      className:
                        "mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground",
                      children: [
                        u.jsx(Ci, {
                          className: "w-4 h-4 text-green-600",
                        }),
                        u.jsx("span", {
                          children: "Secure SSL Encrypted Checkout",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className:
                        "mt-6 text-center text-xs text-muted-foreground bg-white p-3 border border-border/50",
                      children: [
                        "Pay in 4 interest-free installments of $",
                        (f / 4).toFixed(2),
                        " with ",
                        u.jsx("span", {
                          className: "font-bold text-foreground",
                          children: "Klarna",
                        }),
                        " or ",
                        u.jsx("span", {
                          className: "font-bold text-[#0070ba]",
                          children: "PayPal",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      });
}
const dg = [
    {
      id: "1",
      name: "The 'Aura' Body Wave",
      benefit: "Beginner Friendly Melted Lace",
      price: "$450",
      oldPrice: "$580",
      image: Oa,
      badge: "Most Loved",
      rating: "4.9",
      stock: 8,
    },
    {
      id: "2",
      name: "The 'Silk' Straight",
      benefit: "Ultra HD Undetectable Lace",
      price: "$420",
      oldPrice: "$550",
      image: kr,
      badge: "Best Seller",
      rating: "4.8",
      stock: 5,
    },
    {
      id: "3",
      name: "The 'Golden Hour' Wavy",
      benefit: "Glueless Luxury Volume",
      price: "$480",
      oldPrice: "$620",
      image: rx,
      badge: "Limited Edition",
      rating: "5.0",
      stock: 3,
    },
    {
      id: "4",
      name: "The 'Midnight' Volume",
      benefit: "Big Curly Black Hair",
      price: "$490",
      oldPrice: "$610",
      image: ox,
      badge: "New Drop",
      rating: "4.9",
      stock: 12,
    },
    {
      id: "5",
      name: "The 'Chic' Bob",
      benefit: "Short Blunt Cut Straight",
      price: "$380",
      oldPrice: "$490",
      image: cx,
      badge: "Trending",
      rating: "4.8",
      stock: 6,
    },
    {
      id: "6",
      name: "The 'Cabernet' Wave",
      benefit: "Dark Burgundy Red Body Wave",
      price: "$510",
      oldPrice: "$650",
      image: ux,
      badge: "Just In",
      rating: "5.0",
      stock: 4,
    },
    {
      id: "7",
      name: "The 'Ocean' Water Wave",
      benefit: "Dark Brown Wet Look",
      price: "$460",
      oldPrice: "$590",
      image: fx,
      badge: "Summer Ready",
      rating: "4.9",
      stock: 9,
    },
    {
      id: "8",
      name: "The 'Honey' Straight",
      benefit: "Blonde Custom Color",
      price: "$520",
      oldPrice: "$680",
      image: dx,
      badge: "Custom Color",
      rating: "4.7",
      stock: 5,
    },
    {
      id: "9",
      name: "The 'Ebony' Deep Wave",
      benefit: "Loose Deep Wave Texture",
      price: "$470",
      oldPrice: "$600",
      image: mx,
      badge: "Low Maintenance",
      rating: "4.8",
      stock: 7,
    },
    {
      id: "10",
      name: "The 'Natural' Kinky",
      benefit: "Kinky Straight Blowout Look",
      price: "$440",
      oldPrice: "$570",
      image: hx,
      badge: "Most Natural",
      rating: "5.0",
      stock: 11,
    },
    {
      id: "11",
      name: "The 'Copper' Curl",
      benefit: "Ginger Copper Tight Curls",
      price: "$530",
      oldPrice: "$690",
      image: px,
      badge: "Statement Look",
      rating: "4.9",
      stock: 4,
    },
    {
      id: "12",
      name: "The 'Ash' Wave",
      benefit: "Ash Blonde Wavy Dimension",
      price: "$540",
      oldPrice: "$710",
      image: gx,
      badge: "Premium Color",
      rating: "4.8",
      stock: 2,
    },
  ],
  or = [
    ...dg,
    ...dg.map((a) => ({
      ...a,
      id: String(parseInt(a.id) + 12),
    })),
  ],
  Ei = 12;

function nE() {
  const [a, i] = b.useState(1),
    r = Math.ceil(or.length / Ei),
    c = or.slice((a - 1) * Ei, a * Ei);
  return u.jsxs("div", {
    className: "bg-background pb-24",
    children: [
      u.jsx("div", {
        className:
          "bg-secondary/20 py-16 px-4 border-b border-border/50 text-center",
        children: u.jsxs("div", {
          className: "max-w-3xl mx-auto space-y-4",
          children: [
            u.jsx("h1", {
              className: "text-4xl md:text-5xl font-serif text-primary",
              children: "The Luxury Collection",
            }),
            u.jsx("p", {
              className:
                "text-muted-foreground font-light leading-relaxed text-sm md:text-base",
              children:
                "Discover our curated selection of 100% raw human hair wigs. Each piece features our signature ultra-thin HD lace for an undetectable melt.",
            }),
          ],
        }),
      }),
      u.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 mt-8",
        children: [
          u.jsxs("div", {
            className:
              "flex flex-col sm:flex-row justify-between items-center py-4 border-b border-border/50 mb-10 gap-4",
            children: [
              u.jsxs("button", {
                className:
                  "flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-widest text-primary hover:opacity-80",
                children: [
                  u.jsx(P2, {
                    className: "w-4 h-4",
                  }),
                  " Filter",
                ],
              }),
              u.jsxs("div", {
                className:
                  "text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest",
                children: [
                  "Showing ",
                  (a - 1) * Ei + 1,
                  "-",
                  Math.min(a * Ei, or.length),
                  " of ",
                  or.length,
                  " Results",
                ],
              }),
              u.jsxs("div", {
                className:
                  "flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-widest text-primary cursor-pointer hover:opacity-80",
                children: [
                  "Sort By ",
                  u.jsx(ly, {
                    className: "w-4 h-4",
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className:
              "grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-16",
            children: c.map((f) =>
              u.jsxs(
                "div",
                {
                  className: "group block",
                  children: [
                    u.jsxs(Ne, {
                      href: `/product/${f.id}`,
                      className:
                        "block relative aspect-[3/4] bg-secondary/30 mb-3 md:mb-5 overflow-hidden cursor-pointer",
                      children: [
                        u.jsx("img", {
                          src: f.image,
                          alt: f.name,
                          className:
                            "w-full h-full object-cover object-center group-hover:opacity-0 transition-opacity duration-500 ease-in-out",
                        }),
                        u.jsx("img", {
                          src: xr,
                          alt: "Lace close up",
                          className:
                            "absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out scale-110",
                        }),
                        u.jsxs("div", {
                          className:
                            "absolute top-2 left-2 md:top-4 md:left-4 flex flex-col gap-1 md:gap-2 z-10",
                          children: [
                            f.badge &&
                              u.jsx("div", {
                                className:
                                  "bg-white/90 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] uppercase tracking-widest font-semibold text-primary border border-border/50 shadow-sm",
                                children: f.badge,
                              }),
                            f.stock <= 8 &&
                              u.jsxs("div", {
                                className:
                                  "bg-destructive text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] uppercase tracking-widest font-semibold shadow-sm",
                                children: ["Only ", f.stock, " Left"],
                              }),
                          ],
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "space-y-3 md:space-y-4",
                      children: [
                        u.jsxs(Ne, {
                          href: `/product/${f.id}`,
                          className: "block",
                          children: [
                            u.jsxs("div", {
                              className:
                                "flex flex-col sm:flex-row sm:justify-between items-start",
                              children: [
                                u.jsx("h3", {
                                  className:
                                    "font-serif text-sm md:text-xl text-primary leading-tight mb-1 sm:mb-0",
                                  children: f.name,
                                }),
                                u.jsxs("div", {
                                  className:
                                    "flex sm:flex-col items-center sm:items-end text-right gap-2 sm:gap-0",
                                  children: [
                                    u.jsx("p", {
                                      className:
                                        "font-medium text-sm md:text-lg",
                                      children: f.price,
                                    }),
                                    u.jsx("p", {
                                      className:
                                        "text-[10px] md:text-xs text-muted-foreground line-through decoration-primary/30",
                                      children: f.oldPrice,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsx("p", {
                              className:
                                "hidden md:block text-muted-foreground text-sm font-light italic mt-1",
                              children: f.benefit,
                            }),
                            u.jsxs("div", {
                              className:
                                "flex items-center gap-1 md:gap-2 mt-1 md:mt-2",
                              children: [
                                u.jsx("div", {
                                  className: "flex gap-0.5 text-accent",
                                  children: [1, 2, 3, 4, 5].map((d) =>
                                    u.jsx(
                                      Cn,
                                      {
                                        className:
                                          "w-2.5 h-2.5 md:w-3.5 md:h-3.5 fill-current",
                                      },
                                      d,
                                    ),
                                  ),
                                }),
                                u.jsx("span", {
                                  className:
                                    "text-[10px] md:text-xs text-muted-foreground font-medium",
                                  children: f.rating,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                f.id,
              ),
            ),
          }),
          u.jsxs("div", {
            className:
              "mt-20 flex flex-col items-center space-y-6 border-t border-border/50 pt-10",
            children: [
              u.jsxs("div", {
                className: "flex items-center gap-2 md:gap-4",
                children: [
                  u.jsx("button", {
                    onClick: () => i((f) => Math.max(1, f - 1)),
                    disabled: a === 1,
                    className:
                      "p-2 border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary/20 transition-colors",
                    children: u.jsx(Q2, {
                      className: "w-5 h-5 text-primary",
                    }),
                  }),
                  u.jsx("div", {
                    className: "flex gap-2",
                    children: Array.from({
                      length: r,
                    }).map((f, d) =>
                      u.jsx(
                        "button",
                        {
                          onClick: () => i(d + 1),
                          className: `w-10 h-10 border transition-colors flex items-center justify-center font-medium ${a === d + 1 ? "bg-primary text-white border-primary" : "bg-transparent text-primary border-transparent hover:border-border"}`,
                          children: d + 1,
                        },
                        d,
                      ),
                    ),
                  }),
                  u.jsx("button", {
                    onClick: () => i((f) => Math.min(r, f + 1)),
                    disabled: a === r,
                    className:
                      "p-2 border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary/20 transition-colors",
                    children: u.jsx(iy, {
                      className: "w-5 h-5 text-primary",
                    }),
                  }),
                ],
              }),
              u.jsxs("p", {
                className:
                  "text-xs text-muted-foreground uppercase tracking-widest",
                children: ["Page ", a, " of ", r],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function aE() {
  const [a, i] = b.useState(!1),
    [r, c] = b.useState(!1),
    [l, d] = b.useState(!1),
    [s, f] = b.useState("login"),
    [m, p] = b.useState(!1),
    [g, v] = b.useState(!1),
    [h, y] = b.useState(!1),
    [w, x] = b.useState(!1);
  b.useEffect(() => {
    if (typeof document > "u") return;
    const T = a || r || l;
    ((window.__velouraScrollLocks = window.__velouraScrollLocks || 0),
      T &&
        ((window.__velouraScrollLocks += 1),
        (document.body.style.overflow = "hidden")));
    return () => {
      T &&
        ((window.__velouraScrollLocks = Math.max(
          0,
          (window.__velouraScrollLocks || 1) - 1,
        )),
        window.__velouraScrollLocks === 0 &&
          (document.body.style.overflow = ""));
    };
  }, [a, r, l]);
  b.useEffect(() => {
    if (typeof window > "u") return;
    const T = () => {
      window.innerWidth >= 768 ? y(!1) : y(window.scrollY > 8);
    };
    return (
      T(),
      window.addEventListener("scroll", T, {
        passive: !0,
      }),
      window.addEventListener("resize", T),
      () => {
        (window.removeEventListener("scroll", T),
          window.removeEventListener("resize", T));
      }
    );
  }, []);
  b.useEffect(() => {
    x(!1);
  }, [l, s]);
  const T =
      s === "login"
        ? {
            panelLabel: "Member access",
            panelTitle: "Welcome back to Veloura.",
            panelText:
              "Track orders, reopen your saved shortlist, and move through checkout faster without starting over.",
            formTitle: "Login",
            formText:
              "Use your account details to continue where you left off.",
            submit: "Sign In Securely",
            supportLine: "Need help with an order? Our support team is one message away.",
          }
        : {
            panelLabel: "Create your account",
            panelTitle: "Make your Veloura experience smoother.",
            panelText:
              "Create an account to save favorites, follow orders, and shop new drops faster the next time you visit.",
            formTitle: "Register",
            formText:
              "Set up your details once so checkout and order tracking feel easier every time.",
            submit: "Create My Account",
            supportLine:
              "You can still browse freely now and finish setting up your account when you are ready.",
          };
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx("header", {
        className:
          "top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 transition-transform duration-300 " +
          (h ? "fixed left-0 right-0 translate-y-0 shadow-md" : "sticky"),
        style: {
          zIndex: 220,
        },
        children: u.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 md:px-8",
          children: [
            u.jsxs("div", {
              className: "relative h-20",
              children: [
                u.jsxs("div", {
                  className:
                    "flex items-center justify-between h-full md:hidden",
                  children: [
                    u.jsxs("div", {
                      className: "flex items-center gap-1",
                      children: [
                        u.jsx("button", {
                          className:
                            "p-2 -ml-2 text-foreground/80 hover:text-foreground transition-colors",
                          "aria-label": "Menu",
                          "data-testid": "button-menu",
                          onClick: () => i(!0),
                          children: u.jsx(ew, {
                            className: "w-6 h-6",
                            strokeWidth: 1.5,
                          }),
                        }),
                        u.jsx("button", {
                          className:
                            "p-2 text-foreground/80 hover:text-foreground transition-colors",
                          "aria-label": "Search",
                          "data-testid": "button-search-mobile",
                          onClick: () => c(!0),
                          children: u.jsx(Zp, {
                            className: "w-5 h-5",
                            strokeWidth: 1.5,
                          }),
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      className: "absolute left-1/2 -translate-x-1/2",
                      children: u.jsx(Ne, {
                        href: "/",
                        className:
                          "text-2xl font-serif tracking-[0.2em] font-medium text-primary hover:opacity-80 transition-opacity",
                        children: "VELOURA",
                      }),
                    }),
                    u.jsxs("div", {
                      className: "flex items-center justify-end gap-2",
                      children: [
                        u.jsx("button", {
                          className:
                            "p-2 text-foreground/80 hover:text-foreground transition-colors",
                          "aria-label": "Account",
                          "data-testid": "button-account-mobile",
                          onClick: () => d(!0),
                          children: u.jsxs("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.8",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "w-5 h-5",
                            children: [
                              u.jsx("circle", {
                                cx: "12",
                                cy: "8",
                                r: "4",
                              }),
                              u.jsx("path", {
                                d: "M6 20c0-3.2 2.7-5.5 6-5.5s6 2.3 6 5.5",
                              }),
                            ],
                          }),
                        }),
                        u.jsxs("button", {
                          type: "button",
                          className:
                            "p-2 -mr-2 text-foreground/80 hover:text-foreground relative transition-colors",
                          "aria-label": "Cart",
                          "data-testid": "button-cart-mobile",
                          onClick: () => {
                            typeof window < "u" &&
                              window.dispatchEvent(
                                new Event("open-cart-sidebar"),
                              );
                          },
                          children: [
                            u.jsx(oy, {
                              className: "w-5 h-5",
                              strokeWidth: 1.5,
                            }),
                            u.jsx("span", {
                              className:
                                "absolute top-1 right-1 w-2 h-2 bg-primary rounded-full border border-background",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "hidden md:flex items-center h-full",
                  children: [
                    u.jsx("div", {
                      className: "flex-1",
                    }),
                    u.jsx("div", {
                      className: "flex items-center justify-center",
                      children: u.jsx(Ne, {
                        href: "/",
                        className:
                          "text-3xl font-serif tracking-[0.22em] font-medium text-primary hover:opacity-80 transition-opacity",
                        children: "VELOURA",
                      }),
                    }),
                    u.jsxs("div", {
                      className: "flex-1 flex items-center justify-end gap-3",
                      children: [
                        u.jsx("button", {
                          className:
                            "p-2.5 text-foreground/80 hover:text-foreground hover:bg-secondary/30 transition-colors",
                          "aria-label": "Search",
                          "data-testid": "button-search",
                          onClick: () => c(!0),
                          children: u.jsx(Zp, {
                            className: "w-6 h-6",
                            strokeWidth: 1.5,
                          }),
                        }),
                        u.jsx("button", {
                          className:
                            "p-2.5 text-foreground/80 hover:text-foreground hover:bg-secondary/30 transition-colors",
                          "aria-label": "Account",
                          "data-testid": "button-account",
                          onClick: () => d(!0),
                          children: u.jsxs("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.8",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "w-6 h-6",
                            children: [
                              u.jsx("circle", {
                                cx: "12",
                                cy: "8",
                                r: "4",
                              }),
                              u.jsx("path", {
                                d: "M6 20c0-3.2 2.7-5.5 6-5.5s6 2.3 6 5.5",
                              }),
                            ],
                          }),
                        }),
                        u.jsxs("button", {
                          type: "button",
                          className:
                            "p-2.5 text-foreground/80 hover:text-foreground hover:bg-secondary/30 relative transition-colors",
                          "aria-label": "Cart",
                          "data-testid": "button-cart",
                          onClick: () => {
                            typeof window < "u" &&
                              window.dispatchEvent(
                                new Event("open-cart-sidebar"),
                              );
                          },
                          children: [
                            u.jsx(oy, {
                              className: "w-6 h-6",
                              strokeWidth: 1.5,
                            }),
                            u.jsx("span", {
                              className:
                                "absolute w-2 h-2 bg-primary rounded-full border border-background",
                              style: {
                                top: "-4px",
                                right: "-1px",
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("nav", {
              className:
                "hidden md:flex items-center justify-center gap-10 pb-5 border-t border-border/40",
              children: [
                u.jsx(Ne, {
                  href: "/shop",
                  className:
                    "pt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-primary hover:opacity-70 transition-opacity",
                  children: "Shop",
                }),
                u.jsxs("div", {
                  className: "relative",
                  onMouseEnter: () => v(!0),
                  onMouseLeave: () => v(!1),
                  children: [
                    u.jsxs("button", {
                      className:
                        "pt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-primary hover:opacity-70 transition-opacity inline-flex items-center gap-1",
                      type: "button",
                      onClick: () => v((h) => !h),
                      children: [
                        "Collections",
                        u.jsx(yl, {
                          className:
                            "w-3.5 h-3.5 mt-[-1px] transition-transform " +
                            (g ? "rotate-180" : ""),
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className:
                        "absolute top-[calc(100%-2px)] left-1/2 -translate-x-1/2 mt-0 min-w-[220px] rounded-2xl bg-background border border-border/50 shadow-xl shadow-black/10 p-2 space-y-0.5 transition-all duration-200 ease-out " +
                        (g
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"),
                      children: [
                        u.jsx(Ne, {
                          href: "/shop",
                          className:
                            "flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-[11px] font-medium uppercase tracking-widest text-foreground/70 hover:text-foreground hover:bg-muted/60 active:scale-[0.98] transition-all duration-150",
                          children: "Glueless",
                        }),
                        u.jsx(Ne, {
                          href: "/shop",
                          className:
                            "flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-[11px] font-medium uppercase tracking-widest text-foreground/70 hover:text-foreground hover:bg-muted/60 active:scale-[0.98] transition-all duration-150",
                          children: "Lace Front",
                        }),
                        u.jsx(Ne, {
                          href: "/shop",
                          className:
                            "flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-[11px] font-medium uppercase tracking-widest text-foreground/70 hover:text-foreground hover:bg-muted/60 active:scale-[0.98] transition-all duration-150",
                          children: "Beginner Friendly",
                        }),
                        u.jsx(Ne, {
                          href: "/shop",
                          className:
                            "flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-[11px] font-medium uppercase tracking-widest text-foreground/70 hover:text-foreground hover:bg-muted/60 active:scale-[0.98] transition-all duration-150",
                          children: "Luxury Volume",
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx(Ne, {
                  href: "/hair-quiz",
                  className:
                    "pt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-primary hover:opacity-70 transition-opacity",
                  children: "Hair Quiz",
                }),
                u.jsx(Ne, {
                  href: "/reviews",
                  className:
                    "pt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-primary hover:opacity-70 transition-opacity",
                  children: "Reviews",
                }),
                u.jsx(Ne, {
                  href: "/install-care",
                  className:
                    "pt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-primary hover:opacity-70 transition-opacity",
                  children: "Install & Care",
                }),
                u.jsx(Ne, {
                  href: "/about",
                  className:
                    "pt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-primary hover:opacity-70 transition-opacity",
                  children: "About",
                }),
              ],
            }),
          ],
        }),
      }),
      h &&
        u.jsx("div", {
          className: "h-20 md:hidden",
        }),
      a &&
        u.jsxs("div", {
          className:
            "fixed inset-0 z-[100] bg-background animate-in slide-in-from-left duration-300 md:hidden",
          children: [
            u.jsxs("div", {
              className:
                "p-4 flex justify-between items-center border-b border-border/50",
              children: [
                u.jsx("span", {
                  className:
                    "font-serif tracking-widest font-medium text-primary text-xl",
                  children: "VELOURA",
                }),
                u.jsx("button", {
                  onClick: () => i(!1),
                  className: "p-2",
                  children: u.jsx(la, {
                    className: "w-6 h-6",
                  }),
                }),
              ],
            }),
            u.jsxs("nav", {
              className: "p-8 space-y-6",
              children: [
                u.jsx(Ne, {
                  href: "/shop",
                  className: "block text-2xl font-serif text-primary",
                  onClick: () => i(!1),
                  children: "Shop",
                }),
                u.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    u.jsx("button", {
                      type: "button",
                      className:
                        "text-2xl font-serif text-primary inline-flex items-center gap-2",
                      onClick: () => p((n) => !n),
                      children: u.jsxs(u.Fragment, {
                        children: [
                          "Collections",
                          u.jsx(yl, {
                            className:
                              "w-5 h-5 transition-transform " +
                              (m ? "rotate-180" : ""),
                          }),
                        ],
                      }),
                    }),
                    m &&
                      u.jsxs("div", {
                        className: "pl-3 space-y-3",
                        children: [
                          u.jsx(Ne, {
                            href: "/shop",
                            className:
                              "block text-lg font-serif text-primary/90",
                            onClick: () => i(!1),
                            children: "Glueless",
                          }),
                          u.jsx(Ne, {
                            href: "/shop",
                            className:
                              "block text-lg font-serif text-primary/90",
                            onClick: () => i(!1),
                            children: "Lace Front",
                          }),
                          u.jsx(Ne, {
                            href: "/shop",
                            className:
                              "block text-lg font-serif text-primary/90",
                            onClick: () => i(!1),
                            children: "Beginner Friendly",
                          }),
                          u.jsx(Ne, {
                            href: "/shop",
                            className:
                              "block text-lg font-serif text-primary/90",
                            onClick: () => i(!1),
                            children: "Luxury Volume",
                          }),
                        ],
                      }),
                  ],
                }),
                u.jsx(Ne, {
                  href: "/hair-quiz",
                  className: "block text-2xl font-serif text-primary",
                  onClick: () => i(!1),
                  children: "Hair Quiz",
                }),
                u.jsx(Ne, {
                  href: "/reviews",
                  className: "block text-2xl font-serif text-primary",
                  onClick: () => i(!1),
                  children: "Reviews",
                }),
                u.jsx(Ne, {
                  href: "/install-care",
                  className: "block text-2xl font-serif text-primary",
                  onClick: () => i(!1),
                  children: "Install & Care",
                }),
                u.jsx(Ne, {
                  href: "/about",
                  className: "block text-2xl font-serif text-primary",
                  onClick: () => i(!1),
                  children: "About",
                }),
              ],
            }),
          ],
        }),
      r &&
        u.jsxs("div", {
          className:
            "fixed inset-0 z-[100] bg-background/95 backdrop-blur-md animate-in fade-in duration-300 flex flex-col",
          children: [
            u.jsx("div", {
              className: "p-4 md:p-8 flex justify-end",
              children: u.jsx("button", {
                onClick: () => c(!1),
                className:
                  "p-2 hover:rotate-90 transition-transform duration-300",
                children: u.jsx(la, {
                  className: "w-8 h-8 md:w-10 md:h-10 text-primary",
                  strokeWidth: 1,
                }),
              }),
            }),
            u.jsxs("div", {
              className:
                "flex-1 flex flex-col items-center justify-center p-8 max-w-4xl mx-auto w-full",
              children: [
                u.jsx("h3", {
                  className:
                    "text-2xl md:text-4xl font-serif text-primary mb-8 md:mb-12",
                  children: "What are you looking for?",
                }),
                u.jsxs("div", {
                  className: "w-full relative",
                  children: [
                    u.jsx("input", {
                      autoFocus: !0,
                      type: "text",
                      placeholder: "Search luxury wigs...",
                      className:
                        "w-full bg-transparent border-b-2 border-primary/50 focus:border-primary py-4 md:py-6 text-2xl md:text-4xl font-light focus:outline-none placeholder:text-muted-foreground/30 transition-colors",
                    }),
                    u.jsx(Zp, {
                      className:
                        "absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 text-primary/50",
                      strokeWidth: 1,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      l &&
        u.jsx("div", {
          className:
            "fixed inset-0 z-[120] bg-black/45 backdrop-blur-sm flex items-center justify-center px-4 py-4",
          children: u.jsxs("div", {
            style: {
              width: "min(100%, 520px)",
              maxHeight: "min(92vh, 860px)",
              overflow: "auto",
              borderRadius: "30px",
              border: "1px solid rgba(226, 213, 201, 0.96)",
              background: "#fffaf5",
              boxShadow: "0 35px 90px rgba(34, 21, 23, 0.24)",
              padding: "clamp(1.4rem, 5vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            },
            children: [
              u.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                },
                children: [
                  u.jsxs("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.45rem",
                    },
                    children: [
                      u.jsx("div", {
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minHeight: "2rem",
                          width: "fit-content",
                          padding: "0 0.8rem",
                          borderRadius: "999px",
                          background: "rgba(176, 138, 79, 0.08)",
                          border: "1px solid rgba(226, 213, 201, 0.96)",
                          fontSize: "11px",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "#7c6861",
                        },
                        children: T.panelLabel,
                      }),
                      u.jsx("h3", {
                        className: "font-serif",
                        style: {
                          fontSize: "2rem",
                          color: "#2c1d20",
                        },
                        children: T.formTitle,
                      }),
                      u.jsx("p", {
                        style: {
                          fontSize: "14px",
                          lineHeight: "1.8",
                          color: "#7c6861",
                          maxWidth: "26rem",
                        },
                        children: T.formText,
                      }),
                    ],
                  }),
                  u.jsx("button", {
                    onClick: () => d(!1),
                    className: "p-2 hover:rotate-90 transition-transform duration-300",
                    "aria-label": "Close account modal",
                    children: u.jsx(la, {
                      className: "w-5 h-5 text-primary",
                      strokeWidth: 1.5,
                    }),
                  }),
                ],
              }),
              u.jsxs("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "0.45rem",
                  padding: "0.3rem",
                  borderRadius: "999px",
                  background: "rgba(176, 138, 79, 0.08)",
                  border: "1px solid rgba(226, 213, 201, 0.96)",
                },
                children: [
                  u.jsx("button", {
                    type: "button",
                    onClick: () => f("login"),
                    style: {
                      minHeight: "2.9rem",
                      borderRadius: "999px",
                      border:
                        s === "login"
                          ? "1px solid rgba(226, 213, 201, 0.96)"
                          : "1px solid transparent",
                      background: s === "login" ? "#fffaf5" : "transparent",
                      color: s === "login" ? "#2c1d20" : "#7c6861",
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      boxShadow:
                        s === "login"
                          ? "0 10px 24px rgba(83, 67, 45, 0.06)"
                          : "none",
                    },
                    children: "Login",
                  }),
                  u.jsx("button", {
                    type: "button",
                    onClick: () => f("register"),
                    style: {
                      minHeight: "2.9rem",
                      borderRadius: "999px",
                      border:
                        s === "register"
                          ? "1px solid rgba(226, 213, 201, 0.96)"
                          : "1px solid transparent",
                      background: s === "register" ? "#fffaf5" : "transparent",
                      color: s === "register" ? "#2c1d20" : "#7c6861",
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      boxShadow:
                        s === "register"
                          ? "0 10px 24px rgba(83, 67, 45, 0.06)"
                          : "none",
                    },
                    children: "Register",
                  }),
                ],
              }),
              u.jsxs("form", {
                onSubmit: (k) => k.preventDefault(),
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.95rem",
                },
                children: [
                  s === "register" &&
                    u.jsxs("label", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.45rem",
                      },
                      children: [
                        u.jsx("span", {
                          style: {
                            fontSize: "11px",
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "#7c6861",
                          },
                          children: "Full name",
                        }),
                        u.jsx("input", {
                          type: "text",
                          placeholder: "Enter your full name",
                          style: {
                            width: "100%",
                            minHeight: "3.35rem",
                            borderRadius: "18px",
                            border: "1px solid #e2d5c9",
                            background: "#fffdf9",
                            padding: "0 1rem",
                            fontSize: "14px",
                            color: "#2c1d20",
                          },
                        }),
                      ],
                    }),
                  u.jsxs("label", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.45rem",
                    },
                    children: [
                      u.jsx("span", {
                        style: {
                          fontSize: "11px",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "#7c6861",
                        },
                        children: "Email address",
                      }),
                      u.jsx("input", {
                        type: "email",
                        placeholder: "Enter your email address",
                        style: {
                          width: "100%",
                          minHeight: "3.35rem",
                          borderRadius: "18px",
                          border: "1px solid #e2d5c9",
                          background: "#fffdf9",
                          padding: "0 1rem",
                          fontSize: "14px",
                          color: "#2c1d20",
                        },
                      }),
                    ],
                  }),
                  u.jsxs("label", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.45rem",
                    },
                    children: [
                      u.jsx("span", {
                        style: {
                          fontSize: "11px",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "#7c6861",
                        },
                        children: "Password",
                      }),
                      u.jsxs("div", {
                        style: {
                          position: "relative",
                        },
                        children: [
                          u.jsx("input", {
                            type: w ? "text" : "password",
                            placeholder:
                              s === "login"
                                ? "Enter your password"
                                : "Create a secure password",
                            style: {
                              width: "100%",
                              minHeight: "3.35rem",
                              borderRadius: "18px",
                              border: "1px solid #e2d5c9",
                              background: "#fffdf9",
                              padding: "0 4.2rem 0 1rem",
                              fontSize: "14px",
                              color: "#2c1d20",
                            },
                          }),
                          u.jsx("button", {
                            type: "button",
                            onClick: () => x((k) => !k),
                            style: {
                              position: "absolute",
                              right: "0.45rem",
                              top: "50%",
                              transform: "translateY(-50%)",
                              minHeight: "2.35rem",
                              padding: "0 0.8rem",
                              borderRadius: "999px",
                              border: "1px solid rgba(226, 213, 201, 0.96)",
                              background: "#fff8f0",
                              color: "#2c1d20",
                              fontSize: "11px",
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                            },
                            children: w ? "Hide" : "Show",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s === "register" &&
                    u.jsxs("label", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.45rem",
                      },
                      children: [
                        u.jsx("span", {
                          style: {
                            fontSize: "11px",
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "#7c6861",
                          },
                          children: "Confirm password",
                        }),
                        u.jsx("input", {
                          type: w ? "text" : "password",
                          placeholder: "Re-enter your password",
                          style: {
                            width: "100%",
                            minHeight: "3.35rem",
                            borderRadius: "18px",
                            border: "1px solid #e2d5c9",
                            background: "#fffdf9",
                            padding: "0 1rem",
                            fontSize: "14px",
                            color: "#2c1d20",
                          },
                        }),
                      ],
                    }),
                  s === "login"
                    ? u.jsxs("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "0.85rem",
                          flexWrap: "wrap",
                        },
                        children: [
                          u.jsxs("label", {
                            style: {
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.55rem",
                              fontSize: "13px",
                              color: "#5f4d47",
                            },
                            children: [
                              u.jsx("input", {
                                type: "checkbox",
                                style: {
                                  width: "1rem",
                                  height: "1rem",
                                  accentColor: "#2c1d20",
                                },
                              }),
                              "Remember this device",
                            ],
                          }),
                          u.jsx("button", {
                            type: "button",
                            style: {
                              background: "transparent",
                              color: "#7c6861",
                              fontSize: "12px",
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                            },
                            children: "Forgot password?",
                          }),
                        ],
                      })
                    : u.jsxs("label", {
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.55rem",
                          fontSize: "13px",
                          lineHeight: "1.7",
                          color: "#5f4d47",
                        },
                        children: [
                          u.jsx("input", {
                            type: "checkbox",
                            style: {
                              width: "1rem",
                              height: "1rem",
                              accentColor: "#2c1d20",
                            },
                          }),
                          "Email me insider drops, launches, and member-only offers.",
                        ],
                      }),
                  u.jsx("button", {
                    type: "submit",
                    style: {
                      width: "100%",
                      minHeight: "3.35rem",
                      borderRadius: "999px",
                      background:
                        "linear-gradient(135deg, #24181a 0%, #5a3d35 100%)",
                      color: "#fff8f0",
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      boxShadow: "0 16px 34px rgba(36, 24, 26, 0.18)",
                    },
                    children: T.submit,
                  }),
                  u.jsx("p", {
                    style: {
                      fontSize: "13px",
                      lineHeight: "1.75",
                      color: "#7c6861",
                    },
                    children: T.supportLine,
                  }),
                ],
              }),
              u.jsx("button", {
                type: "button",
                onClick: () => d(!1),
                style: {
                  minHeight: "2.85rem",
                  width: "fit-content",
                  padding: "0 1rem",
                  borderRadius: "999px",
                  border: "1px solid #e2d5c9",
                  background: "#fffdf9",
                  color: "#2c1d20",
                  fontSize: "11px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                },
                children: "Continue Shopping",
              }),
            ],
          }),
        }),
    ],
  });
}

function lE() {
  return u.jsxs("footer", {
    className: "bg-primary text-primary-foreground py-12 px-6",
    children: [
      u.jsxs("div", {
        className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10",
        children: [
          u.jsxs("div", {
            className: "space-y-4",
            children: [
              u.jsx("h3", {
                className: "font-serif text-2xl tracking-widest",
                children: "VELOURA",
              }),
              u.jsx("p", {
                className:
                  "text-primary-foreground/70 text-sm leading-relaxed max-w-xs",
                children:
                  "Melted Hairlines. Effortless Glam. Luxury wigs designed to look like it’s growing from your scalp.",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "space-y-4",
            children: [
              u.jsx("h4", {
                className: "font-serif text-lg tracking-wider",
                children: "Shop",
              }),
              u.jsxs("ul", {
                className: "space-y-2 text-sm text-primary-foreground/80",
                children: [
                  u.jsx("li", {
                    children: u.jsx(Ne, {
                      href: "/",
                      className: "hover:text-white transition-colors",
                      children: "Best Sellers",
                    }),
                  }),
                  u.jsx("li", {
                    children: u.jsx(Ne, {
                      href: "/",
                      className: "hover:text-white transition-colors",
                      children: "New Arrivals",
                    }),
                  }),
                  u.jsx("li", {
                    children: u.jsx(Ne, {
                      href: "/",
                      className: "hover:text-white transition-colors",
                      children: "Glueless Wigs",
                    }),
                  }),
                  u.jsx("li", {
                    children: u.jsx(Ne, {
                      href: "/",
                      className: "hover:text-white transition-colors",
                      children: "HD Lace Wigs",
                    }),
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "space-y-4",
            children: [
              u.jsx("h4", {
                className: "font-serif text-lg tracking-wider",
                children: "Support",
              }),
              u.jsxs("ul", {
                className: "space-y-2 text-sm text-primary-foreground/80",
                children: [
                  u.jsx("li", {
                    children: u.jsx(Ne, {
                      href: "/",
                      className: "hover:text-white transition-colors",
                      children: "Track Order",
                    }),
                  }),
                  u.jsx("li", {
                    children: u.jsx(Ne, {
                      href: "/",
                      className: "hover:text-white transition-colors",
                      children: "Returns & Exchanges",
                    }),
                  }),
                  u.jsx("li", {
                    children: u.jsx(Ne, {
                      href: "/",
                      className: "hover:text-white transition-colors",
                      children: "FAQ",
                    }),
                  }),
                  u.jsx("li", {
                    children: u.jsx(Ne, {
                      href: "/",
                      className: "hover:text-white transition-colors",
                      children: "Contact Us",
                    }),
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "space-y-4",
            children: [
              u.jsx("h4", {
                className: "font-serif text-lg tracking-wider",
                children: "Stay Connected",
              }),
              u.jsx("p", {
                className: "text-sm text-primary-foreground/70",
                children:
                  "Subscribe for exclusive offers and the latest drops.",
              }),
              u.jsxs("div", {
                className: "flex border-b border-primary-foreground/30 pb-2",
                children: [
                  u.jsx("input", {
                    type: "email",
                    placeholder: "Enter your email",
                    className:
                      "bg-transparent border-none outline-none w-full text-sm placeholder:text-primary-foreground/50",
                    "data-testid": "input-newsletter",
                  }),
                  u.jsx("button", {
                    className:
                      "text-sm font-medium uppercase tracking-wider text-accent",
                    "data-testid": "button-subscribe",
                    children: "Join",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u.jsx("div", {
        className:
          "max-w-6xl mx-auto mt-12 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/50",
        children: u.jsxs("p", {
          children: [
            "© ",
            new Date().getFullYear(),
            " Veloura Hair. All rights reserved.",
          ],
        }),
      }),
    ],
  });
}

function iE() {
  const [a, i] = b.useState(!1),
    [, r] = Sg(),
    [c, f] = b.useState([
      {
        id: 1,
        name: "The 'Silk' Straight",
        details: '22" / 150% Density',
        price: 420,
        qty: 1,
        image: kr,
      },
      {
        id: 2,
        name: "The 'Aura' Body Wave",
        details: '20" / 180% Density',
        price: 450,
        qty: 1,
        image: Oa,
      },
    ]),
    d = (g) => {
      f(c.filter((y) => y.id !== g));
    },
    h = c.reduce((g, y) => g + y.price * y.qty, 0);
  b.useEffect(() => {
    if (typeof window > "u") return;
    const g = () => i(!0);
    return (
      window.addEventListener("open-cart-sidebar", g),
      () => window.removeEventListener("open-cart-sidebar", g)
    );
  }, []);
  b.useEffect(() => {
    if (typeof document > "u") return;
    ((window.__velouraScrollLocks = window.__velouraScrollLocks || 0),
      a &&
        ((window.__velouraScrollLocks += 1),
        (document.body.style.overflow = "hidden")));
    return () => {
      a &&
        ((window.__velouraScrollLocks = Math.max(
          0,
          (window.__velouraScrollLocks || 1) - 1,
        )),
        window.__velouraScrollLocks === 0 &&
          (document.body.style.overflow = ""));
    };
  }, [a]);
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx("a", {
        href: "https://wa.me/1234567890",
        target: "_blank",
        rel: "noreferrer",
        className: "fixed z-50 hover:scale-105 transition-transform",
        style: {
          right: "0.75rem",
          bottom: "0.75rem",
          width: "3.2rem",
          height: "3.2rem",
          borderRadius: "999px",
          background: "#25D366",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 16px 34px rgba(20, 89, 51, 0.26)",
          border: "1px solid rgba(255,255,255,0.28)",
        },
        "aria-label": "Chat with us on WhatsApp",
        children: u.jsx(nw, {
          className: "w-5 h-5",
        }),
      }),
      a &&
        u.jsxs("div", {
          className: "fixed inset-0 z-[100] flex justify-end",
          children: [
            u.jsx("div", {
              className:
                "absolute inset-0 z-0 bg-black/35 backdrop-blur-[1px] animate-in fade-in duration-300",
              onClick: () => i(!1),
            }),
            u.jsxs("div", {
              className:
                "relative z-10 bg-background w-full max-w-[400px] h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300",
              children: [
                u.jsxs("div", {
                  className:
                    "p-6 border-b border-border/50 flex justify-between items-center bg-secondary/10",
                  children: [
                    u.jsxs("h2", {
                      className: "text-2xl font-serif text-primary",
                      children: ["Your Cart (", c.length, ")"],
                    }),
                    u.jsx("button", {
                      onClick: () => i(!1),
                      className:
                        "p-2 text-muted-foreground hover:text-primary transition-colors",
                      children: u.jsx(la, {
                        className: "w-6 h-6",
                      }),
                    }),
                  ],
                }),
                u.jsx("div", {
                  className: "flex-1 overflow-y-auto p-6 space-y-6",
                  children:
                    c.length === 0
                      ? u.jsx("div", {
                          className: "text-center text-muted-foreground pt-10",
                          children: "Your cart is empty.",
                        })
                      : c.map((g) =>
                          u.jsxs(
                            "div",
                            {
                              className:
                                "flex gap-4 pb-6 border-b border-border/30 relative",
                              children: [
                                u.jsx("button", {
                                  onClick: () => d(g.id),
                                  className:
                                    "absolute top-0 right-0 p-1 text-muted-foreground hover:text-destructive transition-colors",
                                  title: "Remove Item",
                                  children: u.jsx(la, {
                                    className: "w-4 h-4",
                                  }),
                                }),
                                u.jsx("img", {
                                  src: g.image,
                                  alt: g.name,
                                  className:
                                    "w-24 h-32 object-cover bg-secondary/20",
                                }),
                                u.jsxs("div", {
                                  className:
                                    "flex-1 flex flex-col justify-between py-1 pr-6",
                                  children: [
                                    u.jsxs("div", {
                                      children: [
                                        u.jsx("h4", {
                                          className:
                                            "font-serif text-lg text-primary leading-tight",
                                          children: g.name,
                                        }),
                                        u.jsx("p", {
                                          className:
                                            "text-xs text-muted-foreground mt-1",
                                          children: g.details,
                                        }),
                                      ],
                                    }),
                                    u.jsxs("div", {
                                      className:
                                        "flex justify-between items-end mt-3",
                                      children: [
                                        u.jsx("div", {
                                          className:
                                            "flex items-center gap-3 text-sm",
                                          children: u.jsxs("span", {
                                            className: "text-muted-foreground",
                                            children: ["Qty: ", g.qty],
                                          }),
                                        }),
                                        u.jsxs("span", {
                                          className: "font-medium text-lg",
                                          children: ["$", g.price],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            g.id,
                          ),
                        ),
                }),
                c.length > 0 &&
                  u.jsxs("div", {
                    className:
                      "p-6 border-t border-border/50 bg-secondary/10 space-y-5",
                    children: [
                      u.jsxs("div", {
                        className:
                          "flex justify-between text-xl font-medium text-primary",
                        children: [
                          u.jsx("span", {
                            className: "font-serif",
                            children: "Subtotal",
                          }),
                          u.jsxs("span", {
                            children: ["$", h.toLocaleString(), ".00"],
                          }),
                        ],
                      }),
                      u.jsx("p", {
                        className: "text-xs text-muted-foreground font-light",
                        children: "Shipping & taxes calculated at checkout.",
                      }),
                      u.jsxs("div", {
                        className: "flex flex-col gap-3",
                        children: [
                          u.jsx("button", {
                            onClick: () => {
                              (i(!1), r("/cart"));
                            },
                            className:
                              "w-full border border-primary text-primary py-4 text-sm uppercase tracking-widest font-semibold hover:bg-primary hover:text-white transition-colors",
                            children: "View All In Cart",
                          }),
                          u.jsxs("button", {
                            onClick: () => {
                              (i(!1), r("/checkout"));
                            },
                            className:
                              "w-full bg-primary text-white py-4 text-sm uppercase tracking-widest font-semibold hover:bg-primary/90 transition-colors flex justify-center items-center gap-2",
                            children: [
                              "Proceed to Checkout ",
                              u.jsx(yl, {
                                className: "w-4 h-4",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
    ],
  });
}

function hQuizPage() {
  const palette = {
      page: "#fbf7f2",
      ink: "#2c1d20",
      copy: "#5f4d47",
      muted: "#7c6861",
      line: "#eadfce",
      soft: "#fffdf9",
      softAlt: "#f7efe5",
      accent: "#b08a4f",
      accentSoft: "#f1e1c8",
      dark: "#2d1c1e",
      white: "#fff8f0",
    },
    questions = [
      {
        id: "experience",
        prompt: "Have you worn a wig before?",
        options: ["Never", "A few times", "Yes I wear them regularly"],
      },
      {
        id: "reason",
        prompt: "What's your main reason for wearing a wig?",
        options: [
          "Protective styling",
          "Special occasion",
          "Everyday wear",
          "Hair loss",
        ],
      },
      {
        id: "styling",
        prompt: "How much styling time do you want to spend?",
        options: [
          "Minimal, I want ready to go",
          "Some, I like customizing",
          "I love full installs",
        ],
      },
      {
        id: "texture",
        prompt: "What texture do you prefer?",
        options: ["Straight", "Wavy", "Curly", "Kinky/coily"],
      },
      {
        id: "length",
        prompt: "What length are you going for?",
        options: [
          "Short (8-12 inch)",
          "Medium (14-18 inch)",
          "Long (20 inch+)",
        ],
      },
      {
        id: "budget",
        prompt: "What's your budget?",
        options: ["$50-80", "$80-150", "$150+"],
      },
      {
        id: "tone",
        prompt: "What's your skin tone?",
        swatches: [
          {
            value: "Light",
            colors: ["#f6ddca", "#e7bf9d"],
          },
          {
            value: "Medium",
            colors: ["#d8a475", "#b57b52"],
          },
          {
            value: "Medium-deep",
            colors: ["#8e5a39", "#6d3f27"],
          },
          {
            value: "Deep",
            colors: ["#5b3624", "#2c1a14"],
          },
        ],
      },
    ],
    products = [
      {
        id: "1",
        name: "The 'Aura' Body Wave",
        price: 450,
        priceLabel: "$450",
        image: Oa,
        why: "Soft body-wave movement with a beginner-friendly melt that still feels polished for everyday wear.",
        profile: {
          experience: ["Never", "A few times"],
          reason: ["Protective styling", "Everyday wear", "Hair loss"],
          styling: [
            "Minimal, I want ready to go",
            "Some, I like customizing",
          ],
          texture: ["Wavy"],
          length: ["Medium (14-18 inch)", "Long (20 inch+)"],
          tone: ["Medium", "Medium-deep", "Deep"],
        },
      },
      {
        id: "2",
        name: "The 'Silk' Straight",
        price: 420,
        priceLabel: "$420",
        image: kr,
        why: "A sleek straight finish for shoppers who want a clean luxury look with flexible styling.",
        profile: {
          experience: ["A few times", "Yes I wear them regularly"],
          reason: ["Special occasion", "Everyday wear"],
          styling: [
            "Some, I like customizing",
            "I love full installs",
          ],
          texture: ["Straight"],
          length: ["Medium (14-18 inch)", "Long (20 inch+)"],
          tone: ["Light", "Medium", "Medium-deep"],
        },
      },
      {
        id: "3",
        name: "The 'Golden Hour' Wavy",
        price: 480,
        priceLabel: "$480",
        image: rx,
        why: "A fuller glam wave with softer volume for occasions where you still want believable movement.",
        profile: {
          experience: ["A few times", "Yes I wear them regularly"],
          reason: ["Special occasion", "Everyday wear"],
          styling: [
            "Some, I like customizing",
            "I love full installs",
          ],
          texture: ["Wavy"],
          length: ["Long (20 inch+)"],
          tone: ["Medium", "Medium-deep", "Deep"],
        },
      },
      {
        id: "4",
        name: "The 'Midnight' Volume",
        price: 490,
        priceLabel: "$490",
        image: ox,
        why: "Big curly texture with strong shape and softness for shoppers who love statement hair without looking bulky.",
        profile: {
          experience: ["A few times", "Yes I wear them regularly"],
          reason: ["Protective styling", "Everyday wear", "Hair loss"],
          styling: [
            "Minimal, I want ready to go",
            "Some, I like customizing",
          ],
          texture: ["Curly", "Kinky/coily"],
          length: ["Long (20 inch+)"],
          tone: ["Medium-deep", "Deep"],
        },
      },
      {
        id: "5",
        name: "The 'Chic' Bob",
        price: 380,
        priceLabel: "$380",
        image: cx,
        why: "The easiest polished shape in the collection if you want low styling time and a lighter feel.",
        profile: {
          experience: ["Never", "A few times"],
          reason: ["Special occasion", "Everyday wear", "Hair loss"],
          styling: ["Minimal, I want ready to go"],
          texture: ["Straight"],
          length: ["Short (8-12 inch)"],
          tone: ["Light", "Medium", "Medium-deep"],
        },
      },
      {
        id: "6",
        name: "The 'Cabernet' Wave",
        price: 510,
        priceLabel: "$510",
        image: ux,
        why: "A custom-color wave for shoppers who want a richer statement while keeping body and softness.",
        profile: {
          experience: ["A few times", "Yes I wear them regularly"],
          reason: ["Special occasion"],
          styling: [
            "Some, I like customizing",
            "I love full installs",
          ],
          texture: ["Wavy"],
          length: ["Long (20 inch+)"],
          tone: ["Medium", "Medium-deep", "Deep"],
        },
      },
      {
        id: "7",
        name: "The 'Ocean' Water Wave",
        price: 460,
        priceLabel: "$460",
        image: fx,
        why: "A softer water-wave option that feels easy, pretty, and lower-maintenance between wears.",
        profile: {
          experience: ["Never", "A few times"],
          reason: ["Protective styling", "Everyday wear"],
          styling: [
            "Minimal, I want ready to go",
            "Some, I like customizing",
          ],
          texture: ["Curly", "Wavy"],
          length: ["Medium (14-18 inch)", "Long (20 inch+)"],
          tone: ["Medium", "Medium-deep", "Deep"],
        },
      },
      {
        id: "8",
        name: "The 'Honey' Straight",
        price: 520,
        priceLabel: "$520",
        image: dx,
        why: "A brighter straight option for shoppers who want a polished custom-color moment with length.",
        profile: {
          experience: ["A few times", "Yes I wear them regularly"],
          reason: ["Special occasion"],
          styling: [
            "Some, I like customizing",
            "I love full installs",
          ],
          texture: ["Straight"],
          length: ["Long (20 inch+)"],
          tone: ["Light", "Medium"],
        },
      },
    ],
    [step, setStep] = b.useState(0),
    [answers, setAnswers] = b.useState({}),
    [wishlist, setWishlist] = b.useState({});
  b.useEffect(() => {
    if (typeof window < "u") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [step]);
  const currentQuestion = questions[step],
    answerEntries = Object.values(answers).filter(Boolean).length,
    totalQuestions = questions.length,
    getBudgetTier = (price) =>
      price <= 420 ? "$50-80" : price <= 480 ? "$80-150" : "$150+",
    results =
      step < totalQuestions
        ? []
        : products
            .map((product, index) => {
              let score = 0;
              return (
                Object.keys(product.profile).forEach((key) => {
                  answers[key] &&
                    product.profile[key].includes(answers[key]) &&
                    (score +=
                      key === "reason" || key === "styling"
                        ? 18
                        : key === "texture"
                          ? 16
                          : 12);
                }),
                answers.budget &&
                  (score +=
                    getBudgetTier(product.price) === answers.budget
                      ? 14
                      : answers.budget === "$80-150" &&
                          (getBudgetTier(product.price) === "$50-80" ||
                            getBudgetTier(product.price) === "$150+")
                        ? 7
                        : 3),
                {
                  ...product,
                  score: score - index * 0.01,
                }
              );
            })
            .sort((left, right) => right.score - left.score)
            .slice(0, 3);
  const selectAnswer = (value) => {
      const nextAnswers = {
        ...answers,
        [currentQuestion.id]: value,
      };
      step === totalQuestions - 1 ? (setAnswers(nextAnswers), setStep(totalQuestions)) : (setAnswers(nextAnswers), setStep((current) => current + 1));
    },
    resetQuiz = () => {
      (setAnswers({}), setStep(0));
    };
  return u.jsxs("section", {
    className: "w-full",
    style: {
      minHeight: "100vh",
      background: "linear-gradient(180deg, #fbf7f2 0%, #f4ece1 100%)",
      color: palette.ink,
      padding: "clamp(1.25rem, 4vw, 2.75rem)",
      position: "relative",
      overflow: "hidden",
    },
    children: [
      u.jsx("div", {
        "aria-hidden": !0,
        style: {
          position: "absolute",
          width: "26rem",
          height: "26rem",
          borderRadius: "999px",
          top: "-11rem",
          right: "-8rem",
          background: "rgba(176, 138, 79, 0.14)",
          filter: "blur(70px)",
        },
      }),
      u.jsx("div", {
        "aria-hidden": !0,
        style: {
          position: "absolute",
          width: "22rem",
          height: "22rem",
          borderRadius: "999px",
          bottom: "-10rem",
          left: "-7rem",
          background: "rgba(88, 63, 50, 0.08)",
          filter: "blur(75px)",
        },
      }),
      u.jsxs("div", {
        className: "max-w-4xl mx-auto",
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          position: "relative",
          zIndex: 1,
          padding: "0.95rem",
          borderRadius: "28px",
          border: "1px solid rgba(234, 223, 206, 0.9)",
          background: "rgba(255, 253, 249, 0.78)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 18px 40px rgba(83, 67, 45, 0.06)",
        },
        children: [
          u.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            },
            children: [
              u.jsx("button", {
                type: "button",
                onClick: () => {
                  step > 0 && setStep((current) => current - 1);
                },
                disabled: step === 0,
                style: {
                  minHeight: "2.75rem",
                  minWidth: "4.75rem",
                  padding: "0 1rem",
                  borderRadius: "999px",
                  border: "1px solid " + palette.line,
                  background: step === 0 ? "rgba(255,255,255,0.55)" : palette.soft,
                  color: step === 0 ? palette.muted : palette.ink,
                  fontSize: "12px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                },
                children: "Back",
              }),
              u.jsxs("div", {
                style: {
                  fontSize: "12px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: palette.muted,
                },
                children: [
                  step < totalQuestions ? step + 1 : totalQuestions,
                  " of ",
                  totalQuestions,
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
            },
            children: [
              u.jsx("p", {
                style: {
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: palette.muted,
                },
                children: "Personalized recommendation path",
              }),
              u.jsx("div", {
                style: {
                  minHeight: "2rem",
                  padding: "0 0.8rem",
                  borderRadius: "999px",
                  border: "1px solid " + palette.line,
                  background: "rgba(255,255,255,0.58)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: palette.ink,
                },
                children:
                  step < totalQuestions
                    ? "One question at a time"
                    : "3 tailored matches",
              }),
            ],
          }),
          u.jsx("div", {
            style: {
              width: "100%",
              height: "0.55rem",
              borderRadius: "999px",
              background: "rgba(176, 138, 79, 0.16)",
              overflow: "hidden",
            },
            children: u.jsx("div", {
              style: {
                width:
                  ((step < totalQuestions ? step + 1 : totalQuestions) /
                    totalQuestions) *
                    100 +
                  "%",
                height: "100%",
                borderRadius: "999px",
                background:
                  "linear-gradient(90deg, #2d1c1e 0%, #8a6244 100%)",
              },
            }),
          }),
        ],
      }),
      step < totalQuestions
        ? u.jsx("div", {
            className: "max-w-4xl mx-auto",
            style: {
              minHeight: "calc(100vh - 11rem)",
              display: "flex",
              alignItems: "center",
              paddingTop: "1rem",
              position: "relative",
              zIndex: 1,
            },
            children: u.jsxs("div", {
              style: {
                width: "100%",
                borderRadius: "34px",
                border: "1px solid " + palette.line,
                background:
                  "linear-gradient(180deg, rgba(255, 253, 249, 0.96) 0%, rgba(250, 244, 236, 0.92) 100%)",
                boxShadow: "0 28px 80px rgba(83, 67, 45, 0.12)",
                padding: "clamp(1.4rem, 5vw, 2.7rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1.65rem",
              },
              children: [
                u.jsxs("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                  },
                  children: [
                    u.jsx("p", {
                      style: {
                        fontSize: "11px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: palette.muted,
                      },
                      children: "Hair Quiz",
                    }),
                    u.jsx("h1", {
                      className: "font-serif",
                      style: {
                        fontSize: "clamp(2.1rem, 8vw, 4.8rem)",
                        lineHeight: "1.02",
                        color: palette.ink,
                        maxWidth: "14ch",
                      },
                      children: currentQuestion.prompt,
                    }),
                    u.jsxs("p", {
                      style: {
                        fontSize: "15px",
                        lineHeight: "1.8",
                        color: palette.copy,
                      },
                      children: [
                        "Every answer sharpens your recommendation. ",
                        answerEntries,
                        " answered so far.",
                      ],
                    }),
                  ],
                }),
                u.jsx("div", {
                  style: {
                    display: "grid",
                    gap: "0.9rem",
                    gridTemplateColumns: currentQuestion.swatches
                      ? "repeat(auto-fit, minmax(140px, 1fr))"
                      : "1fr",
                  },
                  children: currentQuestion.swatches
                    ? currentQuestion.swatches.map((option) =>
                        u.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => selectAnswer(option.value),
                            "aria-label": option.value,
                            style: {
                              width: "100%",
                              minHeight: "7rem",
                              padding: "1rem",
                              borderRadius: "24px",
                              border: "1px solid " + palette.line,
                              background:
                                "linear-gradient(180deg, #fffdfa 0%, #f8efe5 100%)",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "0.9rem",
                              textAlign: "center",
                              boxShadow: "0 16px 34px rgba(83, 67, 45, 0.05)",
                            },
                            children: [
                              u.jsx("div", {
                                style: {
                                  display: "flex",
                                  gap: "0.55rem",
                                  alignItems: "center",
                                  justifyContent: "center",
                                },
                                children: option.colors.map((tone) =>
                                  u.jsx(
                                    "span",
                                    {
                                      style: {
                                        width: "2.6rem",
                                        height: "2.6rem",
                                        borderRadius: "999px",
                                        background: tone,
                                        border: "1px solid rgba(44, 29, 32, 0.08)",
                                        boxShadow:
                                          "inset 0 0 0 1px rgba(255,255,255,0.25)",
                                      },
                                    },
                                    tone,
                                  ),
                                ),
                              }),
                              u.jsx("span", {
                                style: {
                                  fontSize: "11px",
                                  letterSpacing: "0.18em",
                                  textTransform: "uppercase",
                                  color: palette.muted,
                                },
                                children: "Select tone",
                              }),
                            ],
                          },
                          option.value,
                        ),
                      )
                    : currentQuestion.options.map((option) =>
                        u.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => selectAnswer(option),
                            style: {
                              width: "100%",
                              minHeight: "5.6rem",
                              padding: "1rem 1.1rem",
                              borderRadius: "24px",
                              border: "1px solid " + palette.line,
                              background:
                                "linear-gradient(180deg, #fffdfa 0%, #f9f2e8 100%)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "1rem",
                              textAlign: "left",
                              boxShadow: "0 16px 34px rgba(83, 67, 45, 0.05)",
                            },
                            children: [
                              u.jsx("span", {
                                className: "font-serif",
                                style: {
                                  fontSize: "27px",
                                  lineHeight: "1.1",
                                  color: palette.ink,
                                  maxWidth: "14ch",
                                },
                                children: option,
                              }),
                              u.jsx("span", {
                                style: {
                                  minHeight: "2.2rem",
                                  padding: "0 0.8rem",
                                  borderRadius: "999px",
                                  border: "1px solid rgba(176, 138, 79, 0.18)",
                                  background: "rgba(176, 138, 79, 0.08)",
                                  fontSize: "11px",
                                  letterSpacing: "0.18em",
                                  textTransform: "uppercase",
                                  color: palette.ink,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                },
                                children: "Choose",
                              }),
                            ],
                          },
                          option,
                        ),
                      ),
                }),
              ],
            }),
          })
        : u.jsxs("div", {
            className: "max-w-6xl mx-auto",
            style: {
              paddingTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              position: "relative",
              zIndex: 1,
            },
            children: [
              u.jsxs("div", {
                style: {
                  borderRadius: "32px",
                  border: "1px solid " + palette.line,
                  background:
                    "linear-gradient(180deg, rgba(255, 253, 249, 0.96) 0%, rgba(248, 241, 232, 0.93) 100%)",
                  boxShadow: "0 24px 70px rgba(83, 67, 45, 0.10)",
                  padding: "clamp(1.4rem, 5vw, 2.5rem)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                },
                children: [
                  u.jsx("p", {
                    style: {
                      fontSize: "11px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: palette.muted,
                    },
                    children: "Your Results",
                  }),
                  u.jsx("h1", {
                    className: "font-serif",
                    style: {
                      fontSize: "clamp(2.15rem, 8vw, 4.8rem)",
                      lineHeight: "1.02",
                      color: palette.ink,
                      maxWidth: "12ch",
                    },
                    children: "Your best Veloura matches are ready.",
                  }),
                  u.jsx("p", {
                    style: {
                      fontSize: "16px",
                      lineHeight: "1.8",
                      color: palette.copy,
                      maxWidth: "42rem",
                    },
                    children:
                      "We picked three wigs based on your experience, styling preference, texture, length direction, and budget fit inside the current collection.",
                  }),
                  u.jsx("div", {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "2.2rem",
                      width: "fit-content",
                      padding: "0 0.9rem",
                      borderRadius: "999px",
                      background: "rgba(176, 138, 79, 0.1)",
                      color: palette.ink,
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    },
                    children: "3 looks chosen for your answers",
                  }),
                ],
              }),
              u.jsx("div", {
                style: {
                  display: "grid",
                  gap: "1.1rem",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                },
                children: results.map((product) =>
                  u.jsxs(
                    "article",
                    {
                      style: {
                        borderRadius: "30px",
                        border: "1px solid " + palette.line,
                        background:
                          "linear-gradient(180deg, #fffdfa 0%, #f9f2e9 100%)",
                        boxShadow: "0 22px 54px rgba(83, 67, 45, 0.08)",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                      },
                      children: [
                        u.jsx("img", {
                          src: product.image,
                          alt: product.name,
                          style: {
                            width: "100%",
                            height: "19rem",
                            objectFit: "cover",
                          },
                          loading: "lazy",
                        }),
                        u.jsxs("div", {
                          style: {
                            padding: "1.3rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.9rem",
                          },
                          children: [
                            u.jsx("div", {
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                minHeight: "2rem",
                                width: "fit-content",
                                padding: "0 0.8rem",
                                borderRadius: "999px",
                                background: "rgba(176, 138, 79, 0.1)",
                                color: palette.ink,
                                fontSize: "10px",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                              },
                              children:
                                product.id === results[0].id
                                  ? "Best overall match"
                                  : product.id === results[1].id
                                    ? "Soft everyday option"
                                    : "Glam alternative",
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("p", {
                                  style: {
                                    fontSize: "11px",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: palette.muted,
                                  },
                                  children: "Recommended for you",
                                }),
                                u.jsx("h2", {
                                  className: "font-serif",
                                  style: {
                                    fontSize: "28px",
                                    color: palette.ink,
                                    lineHeight: "1.08",
                                    marginTop: "0.5rem",
                                  },
                                  children: product.name,
                                }),
                                u.jsx("p", {
                                  style: {
                                    fontSize: "18px",
                                    color: palette.ink,
                                    marginTop: "0.5rem",
                                  },
                                  children: product.priceLabel,
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              style: {
                                borderRadius: "18px",
                                background: palette.softAlt,
                                padding: "0.95rem",
                              },
                              children: [
                                u.jsx("p", {
                                  style: {
                                    fontSize: "11px",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: palette.muted,
                                  },
                                  children: "Why we picked this for you",
                                }),
                                u.jsx("p", {
                                  style: {
                                    fontSize: "15px",
                                    lineHeight: "1.8",
                                    color: palette.copy,
                                    marginTop: "0.55rem",
                                  },
                                  children: product.why,
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.7rem",
                              },
                              children: [
                                u.jsx("button", {
                                  type: "button",
                                  onClick: () =>
                                    setWishlist((current) => ({
                                      ...current,
                                      [product.id]: !current[product.id],
                                    })),
                                  style: {
                                    minHeight: "3rem",
                                    borderRadius: "999px",
                                    border: "1px solid " + palette.line,
                                    background: wishlist[product.id]
                                      ? palette.accentSoft
                                      : palette.soft,
                                    color: palette.ink,
                                    fontSize: "11px",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                  },
                                  children: wishlist[product.id]
                                    ? "Saved to Wishlist"
                                    : "Add to Wishlist",
                                }),
                                u.jsx(Ne, {
                                  href: "/product/" + product.id,
                                  style: {
                                    minHeight: "3rem",
                                    borderRadius: "999px",
                                    background: palette.dark,
                                    color: palette.white,
                                    fontSize: "11px",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  },
                                  children: "View Product",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    product.id,
                  ),
                ),
              }),
              u.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                  alignItems: "center",
                  paddingBottom: "2rem",
                },
                children: [
                  u.jsx("button", {
                    type: "button",
                    onClick: resetQuiz,
                    style: {
                      minHeight: "3rem",
                      padding: "0 1.7rem",
                      borderRadius: "999px",
                      border: "1px solid " + palette.line,
                      background: palette.soft,
                      color: palette.ink,
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    },
                    children: "Retake Quiz",
                  }),
                  u.jsx("p", {
                    style: {
                      fontSize: "13px",
                      lineHeight: "1.7",
                      color: palette.muted,
                      textAlign: "center",
                    },
                    children:
                      "Retake it anytime if your style mood, budget, or texture preference changes.",
                  }),
                ],
              }),
            ],
          }),
    ],
  });
}

function reviewsPage() {
  const palette = {
      page: "#f7f1ea",
      ink: "#23181a",
      copy: "#5d4b45",
      muted: "#7c6861",
      line: "#e7dbcf",
      soft: "#fffaf4",
      softAlt: "#f4ece1",
      dark: "#24181a",
      darkCard: "#2f1f22",
      darkCopy: "rgba(255, 248, 240, 0.82)",
      accent: "#b08a4f",
      white: "#fff8f0",
    },
    productMap = Object.fromEntries(dg.map((item) => [item.id, item])),
    reviews = [
      {
        id: "r1",
        media: Du,
        hasVideo: !0,
        stars: 5,
        productId: "1",
        text: "The melt is soft in daylight and the density sits exactly right for everyday wear. I stopped overthinking as soon as I put it on.",
        name: "Amina",
        city: "Houston",
        wornFor: "Worn for 3 weeks",
        capSize: "Cap size M",
        hairType: "Wavy",
        skinTone: "Deep",
        helpful: 91,
        date: "2026-04-20",
        recommend: !0,
      },
      {
        id: "r2",
        media: yx,
        hasVideo: !1,
        stars: 5,
        productId: "2",
        text: "I wanted straight hair that still looked believable up close. This is the first one that felt polished without feeling heavy.",
        name: "Tori",
        city: "Atlanta",
        wornFor: "Worn for 5 weeks",
        capSize: "Cap size S",
        hairType: "Straight",
        skinTone: "Medium-deep",
        helpful: 76,
        date: "2026-04-12",
        recommend: !0,
      },
      {
        id: "r3",
        media: xx,
        hasVideo: !0,
        stars: 5,
        productId: "4",
        text: "The curls kept their shape, the fullness looked expensive, and it still felt comfortable through a full day out.",
        name: "Nia",
        city: "Chicago",
        wornFor: "Worn for 2 weeks",
        capSize: "Cap size M",
        hairType: "Curly",
        skinTone: "Deep",
        helpful: 83,
        date: "2026-04-24",
        recommend: !0,
      },
      {
        id: "r4",
        media: rr,
        hasVideo: !1,
        stars: 4,
        productId: "5",
        text: "It is easy to wear and looks clean with almost no styling time. The cut makes getting ready much faster.",
        name: "Maya",
        city: "Dallas",
        wornFor: "Worn for 4 weeks",
        capSize: "Cap size M",
        hairType: "Straight",
        skinTone: "Light",
        helpful: 58,
        date: "2026-04-11",
        recommend: !0,
      },
      {
        id: "r5",
        media: ug,
        hasVideo: !0,
        stars: 5,
        productId: "3",
        text: "This is special-occasion hair that still moves naturally. It photographs beautifully but also holds up in person.",
        name: "Renee",
        city: "New York",
        wornFor: "Worn for 1 week",
        capSize: "Cap size L",
        hairType: "Wavy",
        skinTone: "Medium",
        helpful: 64,
        date: "2026-04-22",
        recommend: !0,
      },
      {
        id: "r6",
        media: Du,
        hasVideo: !1,
        stars: 5,
        productId: "7",
        text: "I wanted texture without a high-maintenance routine. This one still looks pretty after a quick refresh.",
        name: "Imani",
        city: "Los Angeles",
        wornFor: "Worn for 6 weeks",
        capSize: "Cap size M",
        hairType: "Curly",
        skinTone: "Deep",
        helpful: 72,
        date: "2026-03-29",
        recommend: !0,
      },
      {
        id: "r7",
        media: yx,
        hasVideo: !1,
        stars: 4,
        productId: "6",
        text: "The color looked rich without being loud, and the body wave still felt soft instead of stiff.",
        name: "Jade",
        city: "Miami",
        wornFor: "Worn for 2 weeks",
        capSize: "Cap size S",
        hairType: "Wavy",
        skinTone: "Medium-deep",
        helpful: 41,
        date: "2026-04-07",
        recommend: !0,
      },
      {
        id: "r8",
        media: xx,
        hasVideo: !0,
        stars: 5,
        productId: "1",
        text: "The front laid flatter than I expected and I felt comfortable wearing it out immediately. That never happens for me.",
        name: "Kendra",
        city: "Charlotte",
        wornFor: "Worn for 9 days",
        capSize: "Cap size M",
        hairType: "Wavy",
        skinTone: "Deep",
        helpful: 88,
        date: "2026-04-18",
        recommend: !0,
      },
      {
        id: "r9",
        media: rr,
        hasVideo: !1,
        stars: 5,
        productId: "2",
        text: "Silky without looking flat. It stayed clean and believable even after multiple wears that week.",
        name: "Olivia",
        city: "Phoenix",
        wornFor: "Worn for 3 weeks",
        capSize: "Cap size M",
        hairType: "Straight",
        skinTone: "Light",
        helpful: 52,
        date: "2026-04-05",
        recommend: !0,
      },
    ],
    videoReviews = [
      {
        id: "v1",
        poster: tj,
        name: "Amina",
        productId: "1",
        label: "Aura melt check",
      },
      {
        id: "v2",
        poster: nj,
        name: "Renee",
        productId: "3",
        label: "Movement in daylight",
      },
      {
        id: "v3",
        poster: aj,
        name: "Kendra",
        productId: "2",
        label: "Straight install reveal",
      },
    ],
    [quickFilter, setQuickFilter] = b.useState("All"),
    [hairFilter, setHairFilter] = b.useState("All hair types"),
    [toneFilter, setToneFilter] = b.useState("All skin tones"),
    [ratingFilter, setRatingFilter] = b.useState("All ratings"),
    [sortBy, setSortBy] = b.useState("Most recent"),
    [page, setPage] = b.useState(1),
    [hoveredVideo, setHoveredVideo] = b.useState(null),
    [viewportWidth, setViewportWidth] = b.useState(
      typeof window < "u" ? window.innerWidth : 390,
    );
  b.useEffect(() => {
    if (typeof window > "u") return;
    const handleResize = () => setViewportWidth(window.innerWidth);
    return (
      window.addEventListener("resize", handleResize),
      () => window.removeEventListener("resize", handleResize)
    );
  }, []);
  const filteredReviews = reviews
      .filter((review) =>
        quickFilter === "All"
          ? !0
          : quickFilter === "With photos"
            ? !review.hasVideo
            : review.hasVideo,
      )
      .filter((review) =>
        hairFilter === "All hair types" ? !0 : review.hairType === hairFilter,
      )
      .filter((review) =>
        toneFilter === "All skin tones" ? !0 : review.skinTone === toneFilter,
      )
      .filter((review) =>
        ratingFilter === "All ratings"
          ? !0
          : ratingFilter === "5 stars"
            ? review.stars === 5
            : review.stars >= 4,
      )
      .sort((left, right) =>
        sortBy === "Most helpful"
          ? right.helpful - left.helpful
          : sortBy === "Highest rated"
            ? right.stars - left.stars || right.helpful - left.helpful
            : new Date(right.date) - new Date(left.date),
      ),
    pageSize = 6,
    totalPages = Math.max(1, Math.ceil(filteredReviews.length / pageSize)),
    currentPage = Math.min(page, totalPages),
    visibleReviews = filteredReviews.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize,
    ),
    columnCount = viewportWidth < 700 ? 1 : viewportWidth < 1100 ? 2 : 3;
  b.useEffect(() => {
    setPage(1);
  }, [quickFilter, hairFilter, toneFilter, ratingFilter, sortBy]);
  return u.jsxs("section", {
    className: "w-full",
    style: {
      background: palette.page,
      color: palette.ink,
      padding: "clamp(1.25rem, 4vw, 2.75rem)",
      position: "relative",
      overflow: "hidden",
    },
    children: [
      u.jsx("div", {
        "aria-hidden": !0,
        style: {
          position: "absolute",
          width: "28rem",
          height: "28rem",
          borderRadius: "999px",
          top: "-12rem",
          right: "-8rem",
          background: "rgba(79, 44, 44, 0.12)",
          filter: "blur(80px)",
        },
      }),
      u.jsx("div", {
        "aria-hidden": !0,
        style: {
          position: "absolute",
          width: "24rem",
          height: "24rem",
          borderRadius: "999px",
          bottom: "-9rem",
          left: "-7rem",
          background: "rgba(176, 138, 79, 0.12)",
          filter: "blur(80px)",
        },
      }),
      u.jsxs("div", {
        className: "max-w-6xl mx-auto",
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          position: "relative",
          zIndex: 1,
        },
        children: [
          u.jsxs("section", {
            style: {
              borderRadius: "34px",
              background:
                "linear-gradient(135deg, #231618 0%, #3c2525 60%, #6a4b39 100%)",
              color: palette.white,
              padding: "clamp(1.4rem, 5vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.1rem",
              boxShadow: "0 28px 80px rgba(36, 24, 26, 0.18)",
            },
            children: [
              u.jsx("p", {
                style: {
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255, 248, 240, 0.68)",
                },
                children: "Reviews",
              }),
              u.jsx("h1", {
                className: "font-serif",
                style: {
                  fontSize: "clamp(2.25rem, 8vw, 5rem)",
                  lineHeight: "1",
                  maxWidth: "10ch",
                },
                children: "Real hair. Real women. Real results.",
              }),
              u.jsx("p", {
                style: {
                  maxWidth: "38rem",
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "rgba(255, 248, 240, 0.8)",
                },
                children:
                  "Photo-first proof from real customers across textures, tones, and wear routines so new shoppers can judge the finish for themselves.",
              }),
              u.jsx("div", {
                style: {
                  display: "grid",
                  gap: "0.9rem",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                },
                children: [
                  {
                    value: "428+",
                    label: "total reviews",
                  },
                  {
                    value: "4.9 / 5",
                    label: "average rating",
                  },
                  {
                    value: "96%",
                    label: "would recommend",
                  },
                ].map((item) =>
                  u.jsxs(
                    "div",
                    {
                      style: {
                        padding: "1.05rem",
                        borderRadius: "22px",
                        border: "1px solid rgba(255, 248, 240, 0.12)",
                        background: "rgba(255, 248, 240, 0.06)",
                        backdropFilter: "blur(6px)",
                      },
                      children: [
                        u.jsx("p", {
                          className: "font-serif",
                          style: {
                            fontSize: "28px",
                            color: palette.white,
                          },
                          children: item.value,
                        }),
                        u.jsx("p", {
                          style: {
                            marginTop: "0.35rem",
                            fontSize: "11px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "rgba(255, 248, 240, 0.62)",
                          },
                          children: item.label,
                        }),
                      ],
                    },
                    item.label,
                  ),
                ),
              }),
              u.jsx("div", {
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "2.2rem",
                  width: "fit-content",
                  padding: "0 0.9rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(255, 248, 240, 0.14)",
                  background: "rgba(255, 248, 240, 0.08)",
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255, 248, 240, 0.78)",
                },
                children: "Dark skin tones, daylight checks, and real installs first",
              }),
            ],
          }),
          u.jsxs("section", {
            style: {
              borderRadius: "28px",
              border: "1px solid " + palette.line,
              background:
                "linear-gradient(180deg, rgba(255, 250, 244, 0.95) 0%, rgba(244, 236, 225, 0.95) 100%)",
              padding: "1.1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              boxShadow: "0 20px 44px rgba(83, 67, 45, 0.06)",
            },
            children: [
              u.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                },
                children: [
                  u.jsx("p", {
                    style: {
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: palette.muted,
                    },
                    children: "Quick filter",
                  }),
                  u.jsx("div", {
                    style: {
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.55rem",
                    },
                    children: ["All", "With photos", "With videos"].map((label) =>
                      u.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setQuickFilter(label),
                          style: {
                            minHeight: "2.7rem",
                            padding: "0 1rem",
                            borderRadius: "999px",
                            border: "1px solid " + palette.line,
                            background:
                              quickFilter === label ? palette.dark : palette.soft,
                            color:
                              quickFilter === label ? palette.white : palette.ink,
                            fontSize: "11px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            boxShadow:
                              quickFilter === label
                                ? "0 12px 24px rgba(36, 24, 26, 0.16)"
                                : "none",
                          },
                          children: label,
                        },
                        label,
                      ),
                    ),
                  }),
                ],
              }),
              u.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                },
                children: [
                  u.jsx("p", {
                    style: {
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: palette.muted,
                    },
                    children: "Refine gallery",
                  }),
                  u.jsx("div", {
                    style: {
                      display: "grid",
                      gap: "0.8rem",
                      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    },
                    children: [
                      {
                        value: hairFilter,
                        setValue: setHairFilter,
                        options: [
                          "All hair types",
                          "Straight",
                          "Wavy",
                          "Curly",
                        ],
                      },
                      {
                        value: toneFilter,
                        setValue: setToneFilter,
                        options: [
                          "All skin tones",
                          "Light",
                          "Medium",
                          "Medium-deep",
                          "Deep",
                        ],
                      },
                      {
                        value: ratingFilter,
                        setValue: setRatingFilter,
                        options: ["All ratings", "5 stars", "4 stars & up"],
                      },
                      {
                        value: sortBy,
                        setValue: setSortBy,
                        options: [
                          "Most recent",
                          "Most helpful",
                          "Highest rated",
                        ],
                      },
                    ].map((control, index) =>
                      u.jsx(
                        "select",
                        {
                          value: control.value,
                          onChange: (event) => control.setValue(event.target.value),
                          style: {
                            minHeight: "3rem",
                            borderRadius: "18px",
                            border: "1px solid " + palette.line,
                            background: palette.soft,
                            color: palette.ink,
                            padding: "0 0.95rem",
                            fontSize: "14px",
                            boxShadow: "0 10px 24px rgba(83, 67, 45, 0.04)",
                          },
                          children: control.options.map((option) =>
                            u.jsx(
                              "option",
                              {
                                value: option,
                                children: option,
                              },
                              option,
                            ),
                          ),
                        },
                        index,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("section", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            },
            children: [
              u.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                },
                children: [
                  u.jsx("h2", {
                    className: "font-serif",
                    style: {
                      fontSize: "clamp(1.8rem, 5vw, 3rem)",
                    },
                    children: "Customer gallery",
                  }),
                  u.jsxs("p", {
                    style: {
                      minHeight: "2.2rem",
                      padding: "0 0.85rem",
                      borderRadius: "999px",
                      border: "1px solid " + palette.line,
                      background: palette.soft,
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: palette.muted,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    children: [filteredReviews.length, " reviews shown"],
                  }),
                ],
              }),
              u.jsx("div", {
                style: {
                  columnCount,
                  columnGap: "1rem",
                },
                children: visibleReviews.map((review) => {
                  const product = productMap[review.productId];
                  return u.jsxs(
                    "article",
                    {
                      style: {
                        breakInside: "avoid",
                        marginBottom: "1rem",
                        borderRadius: "26px",
                        border: "1px solid " + palette.line,
                        background: palette.soft,
                        overflow: "hidden",
                        boxShadow: "0 18px 42px rgba(83, 67, 45, 0.08)",
                      },
                      children: [
                        u.jsxs("div", {
                          style: {
                            position: "relative",
                          },
                          children: [
                            u.jsx("img", {
                              src: review.media,
                              alt: review.name + " wearing " + product.name,
                              style: {
                                width: "100%",
                                height:
                                  review.id === "r4" || review.id === "r7"
                                    ? "18rem"
                                    : "21rem",
                                objectFit: "cover",
                              },
                              loading: "lazy",
                            }),
                            u.jsxs("div", {
                              style: {
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                padding: "1rem",
                                background:
                                  "linear-gradient(180deg, rgba(35,24,26,0) 0%, rgba(35,24,26,0.65) 100%)",
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "space-between",
                                gap: "0.75rem",
                              },
                              children: [
                                u.jsxs("div", {
                                  children: [
                                    u.jsx("p", {
                                      className: "font-serif",
                                      style: {
                                        fontSize: "24px",
                                        lineHeight: "1",
                                        color: palette.white,
                                      },
                                      children: review.name,
                                    }),
                                    u.jsx("p", {
                                      style: {
                                        marginTop: "0.2rem",
                                        fontSize: "11px",
                                        letterSpacing: "0.18em",
                                        textTransform: "uppercase",
                                        color: "rgba(255, 248, 240, 0.78)",
                                      },
                                      children: review.city,
                                    }),
                                  ],
                                }),
                                u.jsx("span", {
                                  style: {
                                    padding: "0.45rem 0.7rem",
                                    borderRadius: "999px",
                                    background: "rgba(255,248,240,0.9)",
                                    color: palette.ink,
                                    fontSize: "10px",
                                    letterSpacing: "0.16em",
                                    textTransform: "uppercase",
                                  },
                                  children: review.hasVideo ? "Real video" : "Photo proof",
                                }),
                              ],
                            }),
                            review.hasVideo &&
                              u.jsx("span", {
                                style: {
                                  position: "absolute",
                                  top: "0.9rem",
                                  right: "0.9rem",
                                  padding: "0.45rem 0.7rem",
                                  borderRadius: "999px",
                                  background: "rgba(35, 24, 26, 0.72)",
                                  color: palette.white,
                                  fontSize: "10px",
                                  letterSpacing: "0.16em",
                                  textTransform: "uppercase",
                                },
                                children: "Video",
                              }),
                          ],
                        }),
                        u.jsxs("div", {
                          style: {
                            padding: "1.1rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.7rem",
                          },
                          children: [
                            u.jsxs("div", {
                              children: [
                                u.jsx("p", {
                                  style: {
                                    fontSize: "14px",
                                    color: palette.accent,
                                  },
                                  children: "★★★★★".slice(
                                    0,
                                    review.stars,
                                  ),
                                }),
                                u.jsx(Ne, {
                                  href: "/product/" + review.productId,
                                  className: "font-serif",
                                  style: {
                                    display: "inline-block",
                                    marginTop: "0.45rem",
                                    fontSize: "24px",
                                    lineHeight: "1.1",
                                    color: palette.ink,
                                  },
                                  children: product.name,
                                }),
                                u.jsx("div", {
                                  style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.45rem",
                                    marginTop: "0.7rem",
                                  },
                                  children: [
                                    review.hairType + " texture",
                                    review.skinTone + " tone",
                                  ].map((chip) =>
                                    u.jsx(
                                      "span",
                                      {
                                        style: {
                                          minHeight: "2rem",
                                          padding: "0 0.7rem",
                                          borderRadius: "999px",
                                          background: "rgba(176, 138, 79, 0.08)",
                                          color: palette.ink,
                                          fontSize: "11px",
                                          letterSpacing: "0.12em",
                                          textTransform: "uppercase",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        },
                                        children: chip,
                                      },
                                      chip,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            u.jsx("p", {
                              style: {
                                fontSize: "15px",
                                lineHeight: "1.8",
                                color: palette.copy,
                              },
                              children: review.text,
                            }),
                            u.jsxs("div", {
                              style: {
                                display: "grid",
                                gridTemplateColumns:
                                  "repeat(2, minmax(0, 1fr))",
                                gap: "0.55rem",
                              },
                              children: [
                                review.name + " · " + review.city,
                                review.wornFor,
                                review.capSize,
                                "Verified purchase",
                              ].map((meta) =>
                                u.jsx(
                                  "div",
                                  {
                                    style: {
                                      padding: "0.65rem 0.75rem",
                                      borderRadius: "16px",
                                      background: palette.softAlt,
                                      fontSize: "12px",
                                      lineHeight: "1.6",
                                      color: palette.copy,
                                    },
                                    children: meta,
                                  },
                                  meta,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    },
                    review.id,
                  );
                }),
              }),
              totalPages > 1 &&
                u.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.55rem",
                    flexWrap: "wrap",
                  },
                  children: [
                    u.jsx("button", {
                      type: "button",
                      onClick: () =>
                        setPage((current) => Math.max(1, current - 1)),
                      disabled: currentPage === 1,
                      style: {
                        minHeight: "2.7rem",
                        padding: "0 0.95rem",
                        borderRadius: "999px",
                        border: "1px solid " + palette.line,
                        background: palette.soft,
                        color:
                          currentPage === 1 ? palette.muted : palette.ink,
                      },
                      children: "Prev",
                    }),
                    Array.from({
                      length: totalPages,
                    }).map((_, index) =>
                      u.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setPage(index + 1),
                          style: {
                            width: "2.7rem",
                            height: "2.7rem",
                            borderRadius: "999px",
                            border: "1px solid " + palette.line,
                            background:
                              currentPage === index + 1
                                ? palette.dark
                                : palette.soft,
                            color:
                              currentPage === index + 1
                                ? palette.white
                                : palette.ink,
                          },
                          children: index + 1,
                        },
                        index,
                      ),
                    ),
                    u.jsx("button", {
                      type: "button",
                      onClick: () =>
                        setPage((current) => Math.min(totalPages, current + 1)),
                      disabled: currentPage === totalPages,
                      style: {
                        minHeight: "2.7rem",
                        padding: "0 0.95rem",
                        borderRadius: "999px",
                        border: "1px solid " + palette.line,
                        background: palette.soft,
                        color:
                          currentPage === totalPages
                            ? palette.muted
                            : palette.ink,
                      },
                      children: "Next",
                    }),
                  ],
                }),
            ],
          }),
          u.jsxs("section", {
            style: {
              borderRadius: "30px",
              border: "1px solid " + palette.line,
              background: palette.soft,
              padding: "clamp(1.2rem, 4vw, 2rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            },
            children: [
              u.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                },
                children: [
                  u.jsxs("div", {
                    children: [
                      u.jsx("p", {
                        style: {
                          fontSize: "11px",
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: palette.muted,
                        },
                        children: "Video reviews",
                      }),
                      u.jsx("h2", {
                        className: "font-serif",
                        style: {
                          fontSize: "clamp(1.8rem, 5vw, 3rem)",
                          color: palette.ink,
                          marginTop: "0.4rem",
                        },
                        children: "Watch how the lace and movement read in real life",
                      }),
                    ],
                  }),
                  u.jsx("p", {
                    style: {
                      fontSize: "13px",
                      color: palette.muted,
                    },
                    children: "Hover previews stay muted by default",
                  }),
                ],
              }),
              u.jsx("div", {
                style: {
                  display: "grid",
                  gap: "1rem",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                },
                children: videoReviews.map((item) => {
                  const product = productMap[item.productId];
                  return u.jsxs(
                    "div",
                    {
                      onMouseEnter: () => setHoveredVideo(item.id),
                      onMouseLeave: () => setHoveredVideo(null),
                      style: {
                        borderRadius: "24px",
                        overflow: "hidden",
                        border: "1px solid " + palette.line,
                        background: palette.softAlt,
                        boxShadow: "0 18px 42px rgba(83, 67, 45, 0.08)",
                      },
                      children: [
                        u.jsxs("div", {
                          style: {
                            position: "relative",
                            overflow: "hidden",
                          },
                          children: [
                            u.jsx("img", {
                              src: item.poster,
                              alt: item.label,
                              style: {
                                width: "100%",
                                height: "15rem",
                                objectFit: "cover",
                                transform:
                                  hoveredVideo === item.id
                                    ? "scale(1.05)"
                                    : "scale(1)",
                                transition: "transform 220ms ease",
                              },
                              loading: "lazy",
                            }),
                            u.jsxs("div", {
                              style: {
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(180deg, rgba(35,24,26,0.04) 0%, rgba(35,24,26,0.55) 100%)",
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "space-between",
                                padding: "1rem",
                              },
                              children: [
                                u.jsx("span", {
                                  style: {
                                    padding: "0.45rem 0.7rem",
                                    borderRadius: "999px",
                                    background: "rgba(255, 248, 240, 0.9)",
                                    color: palette.ink,
                                    fontSize: "10px",
                                    letterSpacing: "0.16em",
                                    textTransform: "uppercase",
                                  },
                                  children:
                                    hoveredVideo === item.id
                                      ? "Previewing"
                                      : "Play muted",
                                }),
                                u.jsx("span", {
                                  style: {
                                    color: palette.white,
                                    fontSize: "12px",
                                    letterSpacing: "0.16em",
                                    textTransform: "uppercase",
                                  },
                                  children: item.label,
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          style: {
                            padding: "1rem",
                          },
                          children: [
                            u.jsx("p", {
                              className: "font-serif",
                              style: {
                                fontSize: "22px",
                                color: palette.ink,
                              },
                              children: item.name,
                            }),
                            u.jsx("p", {
                              style: {
                                marginTop: "0.3rem",
                                fontSize: "14px",
                                color: palette.copy,
                              },
                              children: product.name,
                            }),
                          ],
                        }),
                      ],
                    },
                    item.id,
                  );
                }),
              }),
            ],
          }),
          u.jsxs("section", {
            style: {
              borderRadius: "32px",
              background:
                "linear-gradient(135deg, #2a1b1d 0%, #4c2f2f 55%, #7d593d 100%)",
              color: palette.white,
              padding: "clamp(1.35rem, 5vw, 2.4rem)",
              display: "flex",
              flexDirection: "column",
              gap: "0.9rem",
              marginBottom: "2rem",
            },
            children: [
              u.jsx("p", {
                style: {
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255, 248, 240, 0.68)",
                },
                children: "Share your look",
              }),
              u.jsx("h2", {
                className: "font-serif",
                style: {
                  fontSize: "clamp(2rem, 6vw, 3.6rem)",
                  lineHeight: "1.05",
                  maxWidth: "12ch",
                },
                children: "Show us your install and join the gallery.",
              }),
              u.jsx("p", {
                style: {
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "rgba(255, 248, 240, 0.8)",
                  maxWidth: "36rem",
                },
                children:
                  "Tag your look on Instagram or TikTok and let new shoppers see how your wig reads in real life, not just under campaign lighting.",
              }),
              u.jsxs("div", {
                style: {
                  display: "flex",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                },
                children: [
                  u.jsx("a", {
                    href: "https://www.instagram.com/veloura",
                    target: "_blank",
                    rel: "noreferrer",
                    style: {
                      minHeight: "3rem",
                      padding: "0 1.4rem",
                      borderRadius: "999px",
                      background: palette.accentSoft,
                      color: palette.ink,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    },
                    children: "Instagram tagged posts",
                  }),
                  u.jsx("a", {
                    href: "https://www.tiktok.com/@veloura",
                    target: "_blank",
                    rel: "noreferrer",
                    style: {
                      minHeight: "3rem",
                      padding: "0 1.4rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(255,248,240,0.16)",
                      color: palette.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    },
                    children: "TikTok tagged looks",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function installCarePage() {
  const palette = {
      page: "#fbf7f2",
      ink: "#2c1d20",
      copy: "#5f4d47",
      muted: "#7c6861",
      line: "#eadfce",
      soft: "#fffdf9",
      softAlt: "#f7efe5",
      accent: "#b08a4f",
      accentSoft: "#f1e1c8",
      dark: "#24181a",
      white: "#fff8f0",
    },
    tabs = [
      {
        id: "install",
        label: "Install Guides",
      },
      {
        id: "styling",
        label: "Styling",
      },
      {
        id: "care",
        label: "Care & Maintenance",
      },
    ],
    guides = {
      install: [
        {
          id: "glueless",
          title: "Glueless install",
          subtitle: "Beginner-friendly wear with less stress",
          difficulty: "Beginner",
          time: "Takes about 20 minutes",
          media: lj,
          steps: [
            "Braid or slick your natural hair flat and apply your wig cap comfortably.",
            "Adjust the elastic band so the hairline sits secure before styling.",
            "Lay the lace, check the ear tabs, and cut in small sections only after the fit feels right.",
            "Blend lightly with powder or tint and finish with a soft brush-out.",
          ],
          products: [
            {
              id: "1",
              label: "Shop The 'Aura' Body Wave",
            },
            {
              id: "5",
              label: "Shop The 'Chic' Bob",
            },
          ],
        },
        {
          id: "glue",
          title: "Glue install",
          subtitle: "For the flattest long-wear lace front finish",
          difficulty: "Intermediate",
          time: "Takes about 35 minutes",
          media: ij,
          steps: [
            "Clean the skin around the hairline and protect it with a barrier first.",
            "Apply thin glue layers, letting each layer dry clear before the next one.",
            "Press the lace in sections with a comb tail and wrap it down for a few minutes.",
            "Finish by melting the front, refining the parting, and lightly styling the hairline.",
          ],
          products: [
            {
              id: "2",
              label: "Shop The 'Silk' Straight",
            },
            {
              id: "6",
              label: "Shop The 'Cabernet' Wave",
            },
          ],
        },
        {
          id: "sewin",
          title: "Sew-in method",
          subtitle: "A secure method when you want longer wear",
          difficulty: "Advanced",
          time: "Takes about 60 minutes",
          media: rj,
          steps: [
            "Create a flat braid pattern and place a breathable foundation cap over it.",
            "Anchor the wig from the nape upward, checking tension as you go.",
            "Leave the front flexible so the hairline still frames naturally.",
            "Customize the parting only after the cap feels secure and comfortable.",
          ],
          products: [
            {
              id: "3",
              label: "Shop The 'Golden Hour' Wavy",
            },
            {
              id: "4",
              label: "Shop The 'Midnight' Volume",
            },
          ],
        },
        {
          id: "clipin",
          title: "Clip-in method",
          subtitle: "Fast install for occasional wear",
          difficulty: "Beginner",
          time: "Takes about 15 minutes",
          media: sj,
          steps: [
            "Section your natural hair where you want the clips to sit.",
            "Tease lightly only where needed so the clips feel stable without strain.",
            "Blend the hairline and perimeter so the added volume feels intentional.",
            "Remove carefully at the end of the day and store the unit smoothly.",
          ],
          products: [
            {
              id: "5",
              label: "Shop The 'Chic' Bob",
            },
            {
              id: "7",
              label: "Shop The 'Ocean' Water Wave",
            },
          ],
        },
      ],
      styling: [
        {
          id: "curl",
          title: "How to curl your wig",
          subtitle: "Keep shape without stiff, overdone movement",
          difficulty: "Beginner",
          time: "Takes about 18 minutes",
          media: tj,
          steps: [
            "Section the hair evenly and work with a consistent barrel size.",
            "Curl away from the face around the front to keep the style open and flattering.",
            "Pin curls while they cool if you want longer hold.",
            "Brush out gently so the finish stays soft instead of too set.",
          ],
          products: [
            {
              id: "1",
              label: "Shop The 'Aura' Body Wave",
            },
            {
              id: "3",
              label: "Shop The 'Golden Hour' Wavy",
            },
          ],
        },
        {
          id: "straighten",
          title: "How to straighten without damage",
          subtitle: "Get the sleek look without flattening the life out of the hair",
          difficulty: "Beginner",
          time: "Takes about 20 minutes",
          media: nj,
          steps: [
            "Start with fully dry hair and use smaller sections than you think you need.",
            "Use one steady pass before deciding if a second pass is necessary.",
            "Keep the roots smooth but avoid over-pressing the front.",
            "Finish with a lightweight shine pass so the result stays airy, not greasy.",
          ],
          products: [
            {
              id: "2",
              label: "Shop The 'Silk' Straight",
            },
            {
              id: "8",
              label: "Shop The 'Honey' Straight",
            },
          ],
        },
        {
          id: "lace",
          title: "How to cut and customize lace",
          subtitle: "A slower approach that keeps the front softer",
          difficulty: "Intermediate",
          time: "Takes about 25 minutes",
          media: xr,
          steps: [
            "Place the wig first and mark where the lace should sit before cutting anything.",
            "Cut in tiny zig-zag sections instead of one hard straight line.",
            "Check symmetry by stepping back often, not only from one angle up close.",
            "Tint and powder after cutting so the final blend feels lighter and more natural.",
          ],
          products: [
            {
              id: "1",
              label: "Shop The 'Aura' Body Wave",
            },
            {
              id: "2",
              label: "Shop The 'Silk' Straight",
            },
          ],
        },
        {
          id: "edges",
          title: "How to style edges",
          subtitle: "Frame the face without making the hairline look forced",
          difficulty: "Intermediate",
          time: "Takes about 10 minutes",
          media: aj,
          steps: [
            "Choose two or three small edge sections instead of overworking the full front.",
            "Use a fine brush and guide each piece into a soft shape that suits the forehead.",
            "Set lightly and comb through if the finish starts looking too deliberate.",
            "Stop as soon as it looks believable in motion, not only in still photos.",
          ],
          products: [
            {
              id: "5",
              label: "Shop The 'Chic' Bob",
            },
            {
              id: "6",
              label: "Shop The 'Cabernet' Wave",
            },
          ],
        },
        {
          id: "refresh",
          title: "How to refresh a wig between wears",
          subtitle: "Bring back movement and softness fast",
          difficulty: "Beginner",
          time: "Takes about 8 minutes",
          media: rr,
          steps: [
            "Mist lightly through the mids and ends, never soaking the lace.",
            "Detangle from the ends upward with a wide tooth comb or soft paddle brush.",
            "Restyle only the visible top sections and face frame if you are short on time.",
            "Let the hair settle on a stand for a few minutes before wearing again.",
          ],
          products: [
            {
              id: "7",
              label: "Shop The 'Ocean' Water Wave",
            },
            {
              id: "4",
              label: "Shop The 'Midnight' Volume",
            },
          ],
        },
      ],
      care: [
        {
          id: "wash",
          title: "How to wash your wig",
          subtitle: "Clean it thoroughly without roughing up the cuticle",
          difficulty: "Beginner",
          time: "Takes about 20 minutes",
          media: rr,
          steps: [
            "Detangle gently before washing so the strands do not knot in water.",
            "Cleanse downward in lukewarm water and avoid aggressive rubbing.",
            "Condition the mids and ends first, then let it sit before rinsing.",
            "Air dry on a stand so the shape settles naturally.",
          ],
          products: [
            {
              id: "1",
              label: "Shop The 'Aura' Body Wave",
            },
          ],
        },
        {
          id: "detangle",
          title: "How to detangle without shedding",
          subtitle: "Less tension means a longer-lasting unit",
          difficulty: "Beginner",
          time: "Takes about 10 minutes",
          media: ug,
          steps: [
            "Hold the hair above each section so you are not pulling from the lace.",
            "Start at the ends and move upward only after the lower section is smooth.",
            "Use patience on textured units instead of forcing a brush through them.",
            "Stop once the hair feels airy again rather than over-brushing.",
          ],
          products: [
            {
              id: "4",
              label: "Shop The 'Midnight' Volume",
            },
            {
              id: "7",
              label: "Shop The 'Ocean' Water Wave",
            },
          ],
        },
        {
          id: "store",
          title: "How to store your wig",
          subtitle: "Protect the lace shape between wears",
          difficulty: "Beginner",
          time: "Takes about 5 minutes",
          media: tj,
          steps: [
            "Brush through lightly and make sure the unit is fully dry first.",
            "Store on a stand for short gaps or in a silk bag for travel.",
            "Keep the lace flat and the parting relaxed so it is easier to reset later.",
            "Avoid stacking heavy hair over the front because it can distort the shape.",
          ],
          products: [
            {
              id: "2",
              label: "Shop The 'Silk' Straight",
            },
          ],
        },
        {
          id: "lifespan",
          title: "How long each wig type lasts",
          subtitle: "What to expect with proper care",
          difficulty: "Beginner",
          time: "2 minute read",
          media: nj,
          steps: [
            "Lower-manipulation units usually stay looking newer for longer.",
            "Textured hair can last beautifully, but it needs gentler refreshing between wears.",
            "Longer lengths need more maintenance simply because more hair is moving around daily.",
            "Storage, heat control, and washing routine matter more than one-time fixes.",
          ],
          products: [
            {
              id: "3",
              label: "Shop The 'Golden Hour' Wavy",
            },
            {
              id: "8",
              label: "Shop The 'Honey' Straight",
            },
          ],
        },
        {
          id: "guarantee",
          title: "What voids the quality guarantee",
          subtitle: "The care mistakes that cost you longevity",
          difficulty: "Beginner",
          time: "3 minute read",
          media: aj,
          steps: [
            "Heavy product build-up without proper cleansing can shorten the life of the unit.",
            "Overheating the hair repeatedly changes how it moves and recovers.",
            "Cutting too much lace or over-customizing the front is not reversible.",
            "Improper storage that bends the lace or tangles the hair can affect the finish.",
          ],
          products: [
            {
              id: "5",
              label: "Shop The 'Chic' Bob",
            },
          ],
        },
      ],
    },
    [tab, setTab] = b.useState("install"),
    [query, setQuery] = b.useState(""),
    [viewportWidth, setViewportWidth] = b.useState(
      typeof window < "u" ? window.innerWidth : 390,
    );
  b.useEffect(() => {
    if (typeof window > "u") return;
    const handleResize = () => setViewportWidth(window.innerWidth);
    return (
      window.addEventListener("resize", handleResize),
      () => window.removeEventListener("resize", handleResize)
    );
  }, []);
  const isMobile = viewportWidth < 768,
    visibleGuides = guides[tab].filter((guide) => {
      if (!query.trim()) return !0;
      const haystack = (
        guide.title +
        " " +
        guide.subtitle +
        " " +
        guide.steps.join(" ")
      ).toLowerCase();
      return haystack.includes(query.trim().toLowerCase());
    });
  return u.jsxs("section", {
    className: "w-full",
    style: {
      background: palette.page,
      color: palette.ink,
      padding: "clamp(1.25rem, 4vw, 2.75rem)",
      position: "relative",
      overflow: "hidden",
    },
    children: [
      u.jsx("div", {
        "aria-hidden": !0,
        style: {
          position: "absolute",
          width: "26rem",
          height: "26rem",
          borderRadius: "999px",
          top: "-12rem",
          right: "-8rem",
          background: "rgba(176, 138, 79, 0.12)",
          filter: "blur(80px)",
        },
      }),
      u.jsx("div", {
        "aria-hidden": !0,
        style: {
          position: "absolute",
          width: "22rem",
          height: "22rem",
          borderRadius: "999px",
          bottom: "-9rem",
          left: "-7rem",
          background: "rgba(95, 77, 71, 0.08)",
          filter: "blur(80px)",
        },
      }),
      u.jsxs("div", {
        className: "max-w-6xl mx-auto",
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          position: "relative",
          zIndex: 1,
        },
        children: [
          u.jsxs("section", {
            style: {
              borderRadius: "34px",
              border: "1px solid " + palette.line,
              background:
                "linear-gradient(180deg, #fffaf4 0%, #f3eadf 100%)",
              padding: "clamp(1.4rem, 5vw, 2.6rem)",
              display: "flex",
              flexDirection: "column",
              gap: "0.9rem",
              boxShadow: "0 24px 70px rgba(83, 67, 45, 0.08)",
            },
            children: [
              u.jsx("p", {
                style: {
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: palette.muted,
                },
                children: "Install & Care",
              }),
              u.jsx("h1", {
                className: "font-serif",
                style: {
                  fontSize: "clamp(2.2rem, 8vw, 5rem)",
                  lineHeight: "1",
                  maxWidth: "10ch",
                },
                children: "Wear it better. Style it better. Keep it longer.",
              }),
              u.jsx("p", {
                style: {
                  fontSize: "16px",
                  lineHeight: "1.85",
                  color: palette.copy,
                  maxWidth: "42rem",
                },
                children:
                  "Use these guides to install more confidently, style with less damage, and reduce the kind of after-purchase frustration that makes wigs feel harder than they need to be.",
              }),
              u.jsxs("div", {
                style: {
                  position: "relative",
                  marginTop: "0.4rem",
                },
                children: [
                  u.jsx(Zp, {
                    style: {
                      position: "absolute",
                      left: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "1rem",
                      height: "1rem",
                      color: palette.muted,
                    },
                  }),
                  u.jsx("input", {
                    type: "search",
                    value: query,
                    onChange: (event) => setQuery(event.target.value),
                    placeholder: "Search topics like lace, wash, curls, or glueless",
                    style: {
                      minHeight: "3.35rem",
                      width: "100%",
                      borderRadius: "20px",
                      border: "1px solid " + palette.line,
                      background: "rgba(255, 253, 249, 0.92)",
                      padding: "0 1rem 0 2.75rem",
                      fontSize: "15px",
                      color: palette.ink,
                      boxShadow: "0 14px 30px rgba(83, 67, 45, 0.05)",
                    },
                  }),
                ],
              }),
              u.jsx("div", {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.55rem",
                },
                children: [
                  "Search by concern",
                  "Beginner to advanced guides",
                  "Shop links in every tutorial",
                ].map((note) =>
                  u.jsx(
                    "span",
                    {
                      style: {
                        minHeight: "2rem",
                        padding: "0 0.8rem",
                        borderRadius: "999px",
                        border: "1px solid " + palette.line,
                        background: "rgba(255, 253, 249, 0.8)",
                        color: palette.ink,
                        fontSize: "11px",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      children: note,
                    },
                    note,
                  ),
                ),
              }),
              isMobile
                ? u.jsx("select", {
                    value: tab,
                    onChange: (event) => setTab(event.target.value),
                    style: {
                      minHeight: "3.1rem",
                      borderRadius: "18px",
                      border: "1px solid " + palette.line,
                      background: "rgba(255, 253, 249, 0.9)",
                      padding: "0 1rem",
                      fontSize: "14px",
                      color: palette.ink,
                    },
                    children: tabs.map((item) =>
                      u.jsx(
                        "option",
                        {
                          value: item.id,
                          children: item.label,
                        },
                        item.id,
                      ),
                    ),
                  })
                : u.jsx("div", {
                    style: {
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.7rem",
                    },
                    children: tabs.map((item) =>
                      u.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setTab(item.id),
                          style: {
                            minHeight: "3rem",
                            padding: "0 1.1rem",
                            borderRadius: "999px",
                            border: "1px solid " + palette.line,
                            background:
                              tab === item.id
                                ? palette.dark
                                : "rgba(255, 253, 249, 0.88)",
                            color: tab === item.id ? palette.white : palette.ink,
                            fontSize: "11px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            boxShadow:
                              tab === item.id
                                ? "0 12px 24px rgba(36, 24, 26, 0.16)"
                                : "0 8px 20px rgba(83, 67, 45, 0.04)",
                          },
                          children: item.label,
                        },
                        item.id,
                      ),
                    ),
                  }),
            ],
          }),
          tab === "care" &&
            u.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              },
              children: [
                u.jsx("p", {
                  style: {
                    fontSize: "13px",
                    color: palette.muted,
                  },
                  children: "Print-friendly care reference for screenshotting and saving.",
                }),
                u.jsx("button", {
                  type: "button",
                  onClick: () =>
                    typeof window < "u" && window.print(),
                  style: {
                    minHeight: "2.8rem",
                    padding: "0 1rem",
                    borderRadius: "999px",
                    border: "1px solid " + palette.line,
                    background: palette.soft,
                    color: palette.ink,
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  },
                  children: "Print care guide",
                }),
              ],
            }),
          visibleGuides.length === 0
            ? u.jsx("div", {
                style: {
                  borderRadius: "28px",
                  border: "1px solid " + palette.line,
                  background: palette.soft,
                  padding: "1.6rem",
                  textAlign: "center",
                },
                children: u.jsx("p", {
                  style: {
                    fontSize: "15px",
                    lineHeight: "1.8",
                    color: palette.copy,
                  },
                  children:
                    "No topics matched that search yet. Try a simpler term like wash, lace, straight, or glueless.",
                }),
              })
            : u.jsx("div", {
                style: {
                  display: "grid",
                  gap: "1rem",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                },
                children: visibleGuides.map((guide) =>
                  u.jsxs(
                    "article",
                    {
                      style: {
                        borderRadius: "28px",
                        border: "1px solid " + palette.line,
                        background:
                          "linear-gradient(180deg, #fffdfa 0%, #f8f0e6 100%)",
                        boxShadow: "0 22px 54px rgba(83, 67, 45, 0.08)",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                      },
                      children: [
                        u.jsxs("div", {
                          style: {
                            position: "relative",
                          },
                          children: [
                            u.jsx("img", {
                              src: guide.media,
                              alt: guide.title,
                              style: {
                                width: "100%",
                                height: "16rem",
                                objectFit: "cover",
                              },
                              loading: "lazy",
                            }),
                            u.jsxs("div", {
                              style: {
                                position: "absolute",
                                top: "1rem",
                                left: "1rem",
                                display: "flex",
                                gap: "0.55rem",
                                flexWrap: "wrap",
                              },
                              children: [
                                u.jsx("span", {
                                  style: {
                                    padding: "0.45rem 0.7rem",
                                    borderRadius: "999px",
                                    background: "rgba(35, 24, 26, 0.78)",
                                    color: palette.white,
                                    fontSize: "10px",
                                    letterSpacing: "0.16em",
                                    textTransform: "uppercase",
                                  },
                                  children: "Brand tutorial",
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              style: {
                                position: "absolute",
                                left: "1rem",
                                right: "1rem",
                                bottom: "1rem",
                                display: "flex",
                                gap: "0.55rem",
                                flexWrap: "wrap",
                              },
                              children: [
                                guide.difficulty,
                                guide.time,
                              ].map((badge) =>
                                u.jsx(
                                  "span",
                                  {
                                    style: {
                                      padding: "0.45rem 0.7rem",
                                      borderRadius: "999px",
                                      background: "rgba(255, 248, 240, 0.92)",
                                      color: palette.ink,
                                      fontSize: "10px",
                                      letterSpacing: "0.16em",
                                      textTransform: "uppercase",
                                    },
                                    children: badge,
                                  },
                                  badge,
                                ),
                              ),
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          style: {
                            padding: "1.2rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                          },
                          children: [
                            u.jsxs("div", {
                              children: [
                                u.jsx("p", {
                                  style: {
                                    fontSize: "11px",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: palette.muted,
                                  },
                                  children:
                                    tab === "install"
                                      ? "Install guide"
                                      : tab === "styling"
                                        ? "Styling guide"
                                        : "Care guide",
                                }),
                                u.jsx("h2", {
                                  className: "font-serif",
                                  style: {
                                    fontSize: "30px",
                                    lineHeight: "1.08",
                                    color: palette.ink,
                                    marginTop: "0.55rem",
                                  },
                                  children: guide.title,
                                }),
                                u.jsx("p", {
                                  style: {
                                    marginTop: "0.45rem",
                                    fontSize: "15px",
                                    lineHeight: "1.8",
                                    color: palette.copy,
                                  },
                                  children: guide.subtitle,
                                }),
                              ],
                            }),
                            u.jsx("div", {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.7rem",
                              },
                              children: guide.steps.map((stepText, index) =>
                                u.jsxs(
                                  "div",
                                  {
                                    style: {
                                      display: "grid",
                                      gridTemplateColumns: "2rem 1fr",
                                      gap: "0.75rem",
                                      alignItems: "start",
                                    },
                                    children: [
                                      u.jsx("span", {
                                        style: {
                                          width: "2rem",
                                          height: "2rem",
                                          borderRadius: "999px",
                                          background: "rgba(176, 138, 79, 0.12)",
                                          color: palette.ink,
                                          fontSize: "12px",
                                          letterSpacing: "0.1em",
                                          display: "inline-flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                        },
                                        children: index + 1,
                                      }),
                                      u.jsx("p", {
                                        style: {
                                          fontSize: "14px",
                                          lineHeight: "1.75",
                                          color: palette.copy,
                                          margin: 0,
                                        },
                                        children: stepText,
                                      }),
                                    ],
                                  },
                                  guide.id + "-" + index,
                                ),
                              ),
                            }),
                            u.jsxs("div", {
                              style: {
                                borderRadius: "18px",
                                background: "rgba(247, 239, 229, 0.9)",
                                padding: "1rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.7rem",
                              },
                              children: [
                                u.jsx("p", {
                                  style: {
                                    fontSize: "11px",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: palette.muted,
                                  },
                                  children: "Products needed",
                                }),
                                u.jsx("div", {
                                  style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.55rem",
                                  },
                                  children: guide.products.map((product) =>
                                    u.jsx(
                                      Ne,
                                      {
                                        href: "/product/" + product.id,
                                        style: {
                                          padding: "0.55rem 0.8rem",
                                          borderRadius: "999px",
                                          border: "1px solid " + palette.line,
                                          background: palette.soft,
                                          color: palette.ink,
                                          fontSize: "12px",
                                        },
                                        children: product.label,
                                      },
                                      product.id,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            u.jsx(Ne, {
                              href: "/product/" + guide.products[0].id,
                              style: {
                                minHeight: "3rem",
                                borderRadius: "999px",
                                background: palette.dark,
                                color: palette.white,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "11px",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                              },
                              children: "Shop this look",
                            }),
                          ],
                        }),
                      ],
                    },
                    guide.id,
                  ),
                ),
              }),
          tab === "care" &&
            u.jsxs("section", {
              style: {
                borderRadius: "30px",
                border: "1px solid " + palette.line,
                background:
                  "linear-gradient(180deg, rgba(247, 239, 229, 0.96) 0%, rgba(255, 253, 249, 0.96) 100%)",
                padding: "clamp(1.2rem, 4vw, 2rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "2rem",
              },
              children: [
                u.jsx("p", {
                  style: {
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: palette.muted,
                  },
                  children: "Screenshot and save",
                }),
                u.jsx("h2", {
                  className: "font-serif",
                  style: {
                    fontSize: "clamp(1.9rem, 5vw, 3rem)",
                    color: palette.ink,
                  },
                  children: "Care frequency chart",
                }),
                u.jsx("div", {
                  style: {
                    display: "grid",
                    gap: "1rem",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  },
                  children: [
                    {
                      label: "Daily",
                      items: [
                        "Light finger detangle or quick brush-through",
                        "Smooth the visible top layer and face frame",
                        "Store neatly if you are not wearing it overnight",
                      ],
                    },
                    {
                      label: "Weekly",
                      items: [
                        "Refresh ends and reshape texture where needed",
                        "Check the lace front for build-up or makeup",
                        "Reset the parting so it still reads clean",
                      ],
                    },
                    {
                      label: "Monthly",
                      items: [
                        "Do a full cleanse and conditioning session",
                        "Trim tired ends if needed",
                        "Audit heat use and storage habits before the next month",
                      ],
                    },
                  ].map((group) =>
                    u.jsxs(
                      "div",
                      {
                        style: {
                          borderRadius: "24px",
                          background:
                            "linear-gradient(180deg, #fffdfa 0%, #f7efe5 100%)",
                          border: "1px solid " + palette.line,
                          padding: "1rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.75rem",
                          boxShadow: "0 16px 34px rgba(83, 67, 45, 0.05)",
                        },
                        children: [
                          u.jsx("p", {
                            className: "font-serif",
                            style: {
                              fontSize: "28px",
                              color: palette.ink,
                            },
                            children: group.label,
                          }),
                          u.jsx("ul", {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.6rem",
                              paddingLeft: "1rem",
                            },
                            children: group.items.map((item) =>
                              u.jsx(
                                "li",
                                {
                                  style: {
                                    fontSize: "14px",
                                    lineHeight: "1.75",
                                    color: palette.copy,
                                  },
                                  children: item,
                                },
                                item,
                              ),
                            ),
                          }),
                        ],
                      },
                      group.label,
                    ),
                  ),
                }),
              ],
            }),
        ],
      }),
    ],
  });
}

function uE() {
  // Keep the content grouped so this page can be moved into PHP templates later.
  const palette = {
      page: "#fbf7f2",
      section: "#f3eadf",
      soft: "#fffdf9",
      softAlt: "#f7efe5",
      ink: "#2c1d20",
      copy: "#5f4d47",
      muted: "#7c6861",
      line: "#eadfce",
      accent: "#b08a4f",
      accentSoft: "#f1e1c8",
      dark: "#24181a",
      darkCard: "rgba(255, 248, 240, 0.07)",
      darkLine: "rgba(255, 248, 240, 0.12)",
      darkCopy: "rgba(255, 248, 240, 0.78)",
      white: "#fff8f0",
    },
    heroFacts = [
      {
        value: "4.9/5",
        label: "average rating",
      },
      {
        value: "Glueless",
        label: "wear-ready options",
      },
      {
        value: "7-Day",
        label: "confidence window",
      },
    ],
    storyBullets = [
      "Natural-looking density and softer hairlines",
      "Lengths and textures chosen for real daily wear",
      "Clear support before checkout and after delivery",
    ],
    designPillars = [
      {
        number: "01",
        title: "Scalp-first realism",
        body: "We judge lace, density, movement, and hairline softness together so the final look reads believable in daylight, not only in content lighting.",
      },
      {
        number: "02",
        title: "Wearability over gimmicks",
        body: "A beautiful unit still has to feel calm to wear. If it creates more correction, more tension, or more overthinking, it does not belong in the collection.",
      },
      {
        number: "03",
        title: "Luxury that still feels easy",
        body: "The finish is elevated, but the experience stays approachable with glueless options, softer fronts, and silhouettes that are easier to style well.",
      },
      {
        number: "04",
        title: "Support that stays human",
        body: "We help with fit, density, and confidence, then stay available after delivery when the practical questions come up in real life.",
      },
    ],
    communityCards = [
      {
        src: Du,
        alt: "Jasmine wearing a Veloura silk straight unit",
        name: "Jasmine",
        detail: "Atlanta | Silk Straight 22in",
        quote: "It blends like hair I grew myself, which is all I wanted.",
      },
      {
        src: yx,
        alt: "Tiana wearing an Aura body wave unit",
        name: "Tiana",
        detail: "New York | Aura Body Wave 20in",
        quote: "Soft, believable, and easy to wear on a normal day.",
      },
      {
        src: xx,
        alt: "Maya wearing a beginner friendly Veloura unit",
        name: "Maya",
        detail: "London | Beginner Friendly Unit",
        quote: "It feels polished without feeling overdone.",
      },
    ],
    supportPoints = [
      "Beginner-friendly options",
      "Texture-first shopping",
      "Honest guidance before checkout",
      "Support after delivery",
    ],
    trustPoints = [
      {
        label: "Believable finish",
        text: "Built to look softer in daylight and at closer distance.",
      },
      {
        label: "Less second-guessing",
        text: "Glueless and easier-wear options reduce the correction cycle.",
      },
      {
        label: "Support after delivery",
        text: "You are not left alone once the order reaches your door.",
      },
    ],
    labelStyle = {
      fontSize: "11px",
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: palette.muted,
    },
    darkLabelStyle = {
      fontSize: "11px",
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "rgba(255, 248, 240, 0.68)",
    },
    bodyStyle = {
      fontSize: "16px",
      lineHeight: "1.85",
      color: palette.copy,
    },
    cardShadow = "0 24px 70px rgba(83, 67, 45, 0.10)";
  b.useEffect(() => {
    if (typeof window > "u") return;
    const revealNodes = Array.from(document.querySelectorAll("[data-reveal]"));
    revealNodes.forEach((node) => {
      ((node.style.opacity = "0"),
        (node.style.transform = "translateY(30px)"),
        (node.style.transition =
          "opacity 400ms ease-out, transform 400ms ease-out"));
    });
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting &&
            ((entry.target.style.opacity = "1"),
            (entry.target.style.transform = "translateY(0)"),
            revealObserver.unobserve(entry.target));
        });
      },
      {
        threshold: 0.18,
      },
    );
    return (
      revealNodes.forEach((node) => revealObserver.observe(node)),
      () => {
        revealObserver.disconnect();
      }
    );
  }, []);
  return u.jsxs("section", {
    className: "w-full overflow-hidden",
    style: {
      background: palette.page,
      color: palette.ink,
    },
    children: [
      u.jsxs("section", {
        className: "relative px-5 pt-8 pb-8 sm:px-6 md:px-8 md:py-16",
        style: {
          paddingTop: "clamp(1.75rem, 7vw, 4rem)",
          paddingBottom: "clamp(2rem, 6vw, 4rem)",
          paddingLeft: "clamp(1.4rem, 5vw, 2.5rem)",
          paddingRight: "clamp(1.4rem, 5vw, 2.5rem)",
          background:
            "linear-gradient(180deg, #f6eee3 0%, #fbf7f2 62%, #fbf7f2 100%)",
        },
        children: [
          u.jsx("div", {
            className: "absolute rounded-full",
            "aria-hidden": !0,
            style: {
              width: "18rem",
              height: "18rem",
              right: "-6rem",
              top: "-4rem",
              background: "rgba(176, 138, 79, 0.12)",
              filter: "blur(80px)",
            },
          }),
          u.jsx("div", {
            className: "absolute rounded-full",
            "aria-hidden": !0,
            style: {
              width: "16rem",
              height: "16rem",
              left: "-5rem",
              bottom: "-7rem",
              background: "rgba(83, 67, 45, 0.06)",
              filter: "blur(70px)",
            },
          }),
          u.jsxs("div", {
            className: "max-w-6xl mx-auto relative",
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            },
            children: [
              u.jsxs("div", {
                className: "items-center",
                style: {
                  display: "grid",
                  gap: "1.5rem",
                },
                children: [
                  u.jsxs("div", {
                    className: "",
                    "data-reveal": !0,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    },
                    children: [
                      u.jsx("p", {
                        style: labelStyle,
                        children: "About Veloura",
                      }),
                      u.jsx("h1", {
                        className: "font-serif",
                        style: {
                          fontSize: "clamp(1.7rem, 8.2vw, 5rem)",
                          lineHeight: "0.97",
                          letterSpacing: "-0.03em",
                          maxWidth: "15ch",
                          color: palette.ink,
                        },
                        children:
                          "The kind of hair that feels right before it feels glamorous.",
                      }),
                      u.jsx("p", {
                        style: {
                          fontSize: "15px",
                          lineHeight: "1.8",
                          color: palette.copy,
                          maxWidth: "19rem",
                        },
                        children:
                          "Veloura was built for women who want believable hair, softer confidence, and less anxiety about whether the final look will feel natural in real life.",
                      }),
                      u.jsx("p", {
                        style: {
                          fontSize: "15px",
                          lineHeight: "1.8",
                          color: palette.copy,
                          maxWidth: "19rem",
                        },
                        children:
                          "We obsess over how the lace melts, how the density frames the face, and how the hair moves when you are just living in it, not posing for it.",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "relative",
                    "data-reveal": !0,
                    style: {
                      minHeight: "24rem",
                    },
                    children: [
                      u.jsx("div", {
                        className: "absolute overflow-hidden",
                        style: {
                          left: "1rem",
                          right: "0",
                          top: "0",
                          bottom: "4rem",
                          borderRadius: "34px",
                          boxShadow: "0 32px 90px rgba(83, 67, 45, 0.18)",
                        },
                        children: u.jsx("img", {
                          src: ug,
                          alt: "Veloura model wearing a luxury unit",
                          className: "w-full h-full object-cover",
                          loading: "lazy",
                        }),
                      }),
                      u.jsxs("div", {
                        className: "absolute",
                        style: {
                          padding: "clamp(1rem, 4vw, 1.5rem)",
                          width: "10.5rem",
                          left: "0",
                          top: "1.1rem",
                          borderRadius: "24px",
                          border: "1px solid " + palette.line,
                          background: "rgba(255, 253, 249, 0.98)",
                          boxShadow: cardShadow,
                        },
                        children: [
                          u.jsx("p", {
                            style: labelStyle,
                            children: "Our standard",
                          }),
                          u.jsx("p", {
                            className: "font-serif",
                            style: {
                              fontSize: "26px",
                              lineHeight: "1",
                              color: palette.ink,
                              marginTop: "0.8rem",
                            },
                            children: "Invisible",
                          }),
                          u.jsx("p", {
                            style: {
                              fontSize: "13px",
                              lineHeight: "1.7",
                              color: palette.copy,
                              marginTop: "0.75rem",
                            },
                            children:
                              "If it fails in daylight, it does not make the cut.",
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "absolute overflow-hidden",
                        style: {
                          width: "9.5rem",
                          left: "0.5rem",
                          bottom: "0",
                          borderRadius: "24px",
                          border: "1px solid " + palette.line,
                          background: palette.softAlt,
                          boxShadow: cardShadow,
                          padding: "0.45rem",
                        },
                        children: [
                          u.jsx("img", {
                            src: yx,
                            alt: "Veloura customer portrait",
                            className: "w-full object-cover",
                            style: {
                              height: "7rem",
                              borderRadius: "18px",
                            },
                            loading: "lazy",
                          }),
                          u.jsxs("div", {
                            style: {
                              padding: "0.8rem 0.35rem 0.2rem",
                            },
                            children: [
                              u.jsx("p", {
                                className: "font-serif",
                                style: {
                                  fontSize: "19px",
                                  color: palette.ink,
                                },
                                children: "Real wear",
                              }),
                              u.jsx("p", {
                                style: {
                                  fontSize: "12px",
                                  color: palette.muted,
                                  marginTop: "0.35rem",
                                },
                                children: "Soft enough for normal days.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "absolute overflow-hidden",
                        style: {
                          width: "9.5rem",
                          right: "0.5rem",
                          bottom: "0.75rem",
                          borderRadius: "24px",
                          border: "1px solid " + palette.line,
                          background: palette.soft,
                          boxShadow: cardShadow,
                          padding: "0.45rem",
                        },
                        children: [
                          u.jsx("img", {
                            src: xr,
                            alt: "Veloura lace close-up",
                            className: "w-full object-cover",
                            style: {
                              height: "5.5rem",
                              borderRadius: "18px",
                            },
                            loading: "lazy",
                          }),
                          u.jsxs("div", {
                            style: {
                              padding: "0.75rem 0.35rem 0.2rem",
                            },
                            children: [
                              u.jsx("p", {
                                style: {
                                  fontSize: "10px",
                                  letterSpacing: "0.18em",
                                  textTransform: "uppercase",
                                  color: palette.muted,
                                },
                                children: "Close-up detail",
                              }),
                              u.jsx("p", {
                                className: "font-serif",
                                style: {
                                  fontSize: "18px",
                                  color: palette.ink,
                                  marginTop: "0.45rem",
                                },
                                children: "Softer front",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "",
                "data-reveal": !0,
                style: {
                  display: "grid",
                  gap: "1rem",
                },
                children: [
                  u.jsxs("div", {
                    className: "",
                    style: {
                      padding: "clamp(1rem, 4vw, 1.5rem)",
                      borderRadius: "24px",
                      border: "1px solid " + palette.line,
                      background: "rgba(255, 253, 249, 0.86)",
                      boxShadow: "0 18px 40px rgba(83, 67, 45, 0.06)",
                    },
                    children: [
                      u.jsx("p", {
                        style: labelStyle,
                        children: "Daily-wear philosophy",
                      }),
                      u.jsx("p", {
                        className: "font-serif",
                        style: {
                          marginTop: "0.8rem",
                          fontSize: "24px",
                          lineHeight: "1.1",
                          color: palette.ink,
                          maxWidth: "20rem",
                        },
                        children: "Designed for daily wear, not only campaign photos.",
                      }),
                      u.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-3 items-start sm:items-center",
                        style: {
                          marginTop: "1rem",
                        },
                        children: [
                          u.jsx(Ne, {
                            href: "/shop",
                            className: "inline-flex items-center justify-center w-full sm:w-auto",
                            style: {
                              minHeight: "3rem",
                              padding: "0 1.8rem",
                              borderRadius: "999px",
                              background: palette.ink,
                              color: palette.white,
                              fontSize: "11px",
                              letterSpacing: "0.18em",
                              textTransform: "uppercase",
                              fontWeight: 500,
                              boxShadow: "0 16px 34px rgba(44, 29, 32, 0.14)",
                            },
                            children: "Shop The Collection",
                          }),
                          u.jsx("p", {
                            style: {
                              fontSize: "13px",
                              lineHeight: "1.7",
                              color: palette.copy,
                              maxWidth: "20rem",
                            },
                            children:
                              "Start with the units that already feel believable before you start styling.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    className: "",
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                      gap: "0.75rem",
                    },
                    children: heroFacts.map((fact) =>
                      u.jsxs(
                        "article",
                        {
                          className: "",
                          style: {
                            padding: "1rem",
                            borderRadius: "20px",
                            border: "1px solid " + palette.line,
                            background:
                              fact.value === "Glueless" ? palette.softAlt : palette.soft,
                            boxShadow: "0 18px 40px rgba(83, 67, 45, 0.05)",
                            minHeight: "7.75rem",
                          },
                          children: [
                            u.jsx("p", {
                              className: "font-serif",
                              style: {
                                fontSize: "22px",
                                color: palette.ink,
                              },
                              children: fact.value,
                            }),
                            u.jsx("p", {
                              style: {
                                marginTop: "0.65rem",
                                fontSize: "10px",
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                color: palette.muted,
                                lineHeight: "1.6",
                              },
                              children: fact.label,
                            }),
                          ],
                        },
                        fact.label,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u.jsxs("section", {
        className: "px-5 py-10 sm:px-6 md:px-8 md:py-14",
        style: {
          paddingTop: "clamp(2rem, 6vw, 3.5rem)",
          paddingBottom: "clamp(2rem, 6vw, 3.5rem)",
          paddingLeft: "clamp(1.4rem, 5vw, 2.5rem)",
          paddingRight: "clamp(1.4rem, 5vw, 2.5rem)",
          background: palette.page,
        },
        children: [
          u.jsxs("div", {
            className: "max-w-6xl mx-auto items-start",
            style: {
              display: "grid",
              gap: "1.5rem",
            },
            children: [
              u.jsxs("div", {
                className: "",
                "data-reveal": !0,
                style: {
                  padding: "clamp(1.35rem, 5vw, 2.5rem)",
                  borderRadius: "30px",
                  border: "1px solid " + palette.line,
                  background: palette.soft,
                  boxShadow: "0 22px 60px rgba(83, 67, 45, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                },
                children: [
                  u.jsx("p", {
                    style: labelStyle,
                    children: "Origin Story",
                  }),
                  u.jsx("h2", {
                    className: "font-serif",
                    style: {
                      fontSize: "clamp(2.15rem, 6vw, 3.4rem)",
                      lineHeight: "1.04",
                      color: palette.ink,
                    },
                    children: "A brand built around believable hair",
                  }),
                  u.jsx("p", {
                    style: bodyStyle,
                    children:
                      "I started Veloura after buying wigs that looked amazing online, then looked fake the second I put them on. The lace was obvious, the density felt heavy, and I never felt fully comfortable wearing them outside.",
                  }),
                  u.jsxs("blockquote", {
                    className: "font-serif italic",
                    style: {
                      borderLeft: "2px solid " + palette.accent,
                      paddingLeft: "1.25rem",
                      fontSize: "clamp(1.7rem, 4vw, 2.4rem)",
                      lineHeight: "1.35",
                      color: palette.ink,
                    },
                    children: [
                      '"I wanted wigs you could trust on regular days, not just photoshoot days."',
                    ],
                  }),
                  u.jsx("p", {
                    style: bodyStyle,
                    children:
                      "So I built Veloura for women who want beautiful hair without anxiety. Every collection is tested for wearability, realism, and comfort before it reaches your hands.",
                  }),
                  u.jsx("div", {
                    className: "space-y-3",
                    children: storyBullets.map((point) =>
                      u.jsxs(
                        "div",
                        {
                          className: "flex items-start gap-3",
                          children: [
                            u.jsx("span", {
                              className: "rounded-full shrink-0",
                              style: {
                                width: "0.55rem",
                                height: "0.55rem",
                                marginTop: "0.65rem",
                                background: palette.accent,
                              },
                            }),
                            u.jsx("p", {
                              style: {
                                fontSize: "16px",
                                lineHeight: "1.8",
                                color: palette.copy,
                              },
                              children: point,
                            }),
                          ],
                        },
                        point,
                      ),
                    ),
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "",
                "data-reveal": !0,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                },
                children: [
                  u.jsxs("div", {
                    className: "overflow-hidden",
                    style: {
                      padding: "clamp(0.8rem, 3vw, 1rem)",
                      borderRadius: "30px",
                      border: "1px solid " + palette.line,
                      background: palette.soft,
                      boxShadow: "0 24px 60px rgba(83, 67, 45, 0.06)",
                    },
                    children: [
                      u.jsx("img", {
                        src: rr,
                        alt: "Customer wearing a Veloura unit in natural light",
                        className: "w-full object-cover",
                        style: {
                          height: "280px",
                          borderRadius: "22px",
                        },
                        loading: "lazy",
                      }),
                      u.jsxs("div", {
                        style: {
                          padding: "1.15rem 0.35rem 0.3rem",
                        },
                        children: [
                          u.jsx("p", {
                            style: labelStyle,
                            children: "Why it works",
                          }),
                          u.jsx("p", {
                            className: "font-serif",
                            style: {
                              fontSize: "30px",
                              color: palette.ink,
                              marginTop: "0.65rem",
                            },
                            children: "It has to look right in person",
                          }),
                          u.jsx("p", {
                            style: {
                              fontSize: "16px",
                              lineHeight: "1.8",
                              color: palette.copy,
                              marginTop: "0.75rem",
                            },
                            children:
                              "We are not chasing hair that only works in edited content. We are building units that feel polished in natural light, at closer distance, on ordinary days.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "",
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                      gap: "1rem",
                    },
                    children: [
                      u.jsxs("div", {
                        className: "",
                        style: {
                          padding: "clamp(1rem, 4vw, 1.5rem)",
                          borderRadius: "24px",
                          border: "1px solid " + palette.line,
                          background: palette.softAlt,
                        },
                        children: [
                          u.jsx("p", {
                            style: labelStyle,
                            children: "Refining fit",
                          }),
                          u.jsx("p", {
                            className: "font-serif",
                            style: {
                              fontSize: "32px",
                              color: palette.ink,
                              marginTop: "0.85rem",
                            },
                            children: "Soft fronts",
                          }),
                          u.jsx("p", {
                            style: {
                              fontSize: "14px",
                              lineHeight: "1.75",
                              color: palette.copy,
                              marginTop: "0.85rem",
                            },
                            children:
                              "Less correction. Less overthinking. More confidence from the first install.",
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "overflow-hidden",
                        style: {
                          padding: "0.75rem",
                          borderRadius: "24px",
                          border: "1px solid " + palette.line,
                          background: palette.soft,
                        },
                        children: [
                          u.jsx("img", {
                            src: xr,
                            alt: "Veloura lace close-up macro",
                            className: "w-full object-cover",
                            style: {
                              height: "7rem",
                              borderRadius: "18px",
                            },
                            loading: "lazy",
                          }),
                          u.jsx("p", {
                            style: {
                              padding: "0.85rem 0.25rem 0.1rem",
                              fontSize: "14px",
                              lineHeight: "1.7",
                              color: palette.copy,
                            },
                            children: "Closer detail without the heavy look.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u.jsxs("section", {
        className: "px-5 py-12 sm:px-6 md:px-8 md:py-16",
        style: {
          paddingTop: "clamp(2.25rem, 7vw, 4rem)",
          paddingBottom: "clamp(2.25rem, 7vw, 4rem)",
          paddingLeft: "clamp(1.4rem, 5vw, 2.5rem)",
          paddingRight: "clamp(1.4rem, 5vw, 2.5rem)",
          background: palette.section,
        },
        children: [
          u.jsxs("div", {
            className: "max-w-6xl mx-auto",
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            },
            children: [
              u.jsxs("div", {
                className: "max-w-3xl",
                "data-reveal": !0,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                },
                children: [
                  u.jsx("p", {
                    style: labelStyle,
                    children: "What Makes Veloura Different",
                  }),
                  u.jsx("h2", {
                    className: "font-serif",
                    style: {
                      fontSize: "clamp(2.15rem, 6vw, 3.4rem)",
                      lineHeight: "1.06",
                      color: palette.ink,
                    },
                    children:
                      "A cleaner standard for how luxury hair should feel",
                  }),
                  u.jsx("p", {
                    style: {
                      fontSize: "17px",
                      lineHeight: "1.85",
                      color: palette.copy,
                      maxWidth: "42rem",
                    },
                    children:
                      "Everything comes back to realism, wearability, and support. That is what makes a unit feel worth it long after the first install.",
                  }),
                ],
              }),
              u.jsx("div", {
                className: "",
                style: {
                  display: "grid",
                  gap: "1rem",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                },
                children: designPillars.map((pillar, index) =>
                  u.jsxs(
                    "article",
                    {
                      className: "",
                      "data-reveal": !0,
                      style: {
                        padding: "clamp(1.2rem, 4vw, 2rem)",
                        borderRadius: "26px",
                        border: "1px solid #e8ddd2",
                        background: index % 2 === 0 ? palette.softAlt : palette.soft,
                        boxShadow: "0 18px 40px rgba(83, 67, 45, 0.05)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.9rem",
                      },
                      children: [
                        u.jsx("p", {
                          style: labelStyle,
                          children: pillar.number,
                        }),
                        u.jsx("h3", {
                          className: "font-serif",
                          style: {
                            fontSize: "29px",
                            color: palette.ink,
                          },
                          children: pillar.title,
                        }),
                        u.jsx("p", {
                          style: {
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: palette.copy,
                          },
                          children: pillar.body,
                        }),
                      ],
                    },
                    pillar.number,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      u.jsxs("section", {
        className: "px-5 py-12 sm:px-6 md:px-8 md:py-16",
        style: {
          paddingTop: "clamp(2.25rem, 7vw, 4rem)",
          paddingBottom: "clamp(2.25rem, 7vw, 4rem)",
          paddingLeft: "clamp(1.4rem, 5vw, 2.5rem)",
          paddingRight: "clamp(1.4rem, 5vw, 2.5rem)",
          background: palette.dark,
        },
        children: [
          u.jsxs("div", {
            className: "max-w-6xl mx-auto",
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            },
            children: [
              u.jsxs("div", {
                className: "max-w-3xl",
                "data-reveal": !0,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                },
                children: [
                  u.jsx("p", {
                    style: darkLabelStyle,
                    children: "Real Women. Real Wear.",
                  }),
                  u.jsx("h2", {
                    className: "font-serif",
                    style: {
                      fontSize: "clamp(2.15rem, 6vw, 3.4rem)",
                      lineHeight: "1.06",
                      color: palette.white,
                    },
                    children: "Made to look right beyond the first photo",
                  }),
                  u.jsx("p", {
                    style: {
                      fontSize: "17px",
                      lineHeight: "1.85",
                      color: palette.darkCopy,
                      maxWidth: "42rem",
                    },
                    children:
                      "Veloura is for the kind of confidence that holds up in natural light, closer distance, and the ordinary moments that matter more than the launch picture.",
                  }),
                ],
              }),
              u.jsx("div", {
                className: "",
                style: {
                  display: "grid",
                  gap: "1.25rem",
                  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                },
                children: communityCards.map((card) =>
                  u.jsxs(
                    "figure",
                    {
                      className: "overflow-hidden",
                      "data-reveal": !0,
                      style: {
                        padding: "0.75rem",
                        borderRadius: "26px",
                        border: "1px solid " + palette.darkLine,
                        background: palette.darkCard,
                        boxShadow: "0 18px 50px rgba(0, 0, 0, 0.12)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.95rem",
                      },
                      children: [
                        u.jsx("img", {
                          src: card.src,
                          alt: card.alt,
                          className: "w-full object-cover",
                          style: {
                            height: "18rem",
                            borderRadius: "18px",
                          },
                          loading: "lazy",
                        }),
                        u.jsxs("figcaption", {
                          style: {
                            padding: "0 0.25rem 0.25rem",
                            display: "flex",
                            flexDirection: "column",
                          },
                          children: [
                            u.jsxs("div", {
                              children: [
                                u.jsx("p", {
                                  className: "font-serif",
                                  style: {
                                    fontSize: "24px",
                                    color: palette.white,
                                  },
                                  children: card.name,
                                }),
                                u.jsx("p", {
                                  style: {
                                    marginTop: "0.4rem",
                                    fontSize: "11px",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: "rgba(255, 248, 240, 0.6)",
                                  },
                                  children: card.detail,
                                }),
                              ],
                            }),
                            u.jsx("p", {
                              style: {
                                marginTop: "0.95rem",
                                fontSize: "16px",
                                lineHeight: "1.8",
                                color: palette.darkCopy,
                              },
                              children: card.quote,
                            }),
                          ],
                        }),
                      ],
                    },
                    card.name,
                  ),
                ),
              }),
              u.jsx("div", {
                className: "",
                "data-reveal": !0,
                style: {
                  display: "grid",
                  gap: "1rem",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                },
                children: trustPoints.map((item) =>
                  u.jsxs(
                    "div",
                    {
                      className: "",
                      style: {
                        padding: "1.15rem",
                        borderRadius: "22px",
                        border: "1px solid " + palette.darkLine,
                        background: "rgba(255, 248, 240, 0.03)",
                      },
                      children: [
                        u.jsx("p", {
                          style: darkLabelStyle,
                          children: item.label,
                        }),
                        u.jsx("p", {
                          style: {
                            marginTop: "0.75rem",
                            fontSize: "15px",
                            lineHeight: "1.75",
                            color: palette.darkCopy,
                          },
                          children: item.text,
                        }),
                      ],
                    },
                    item.label,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      u.jsxs("section", {
        className: "px-5 py-12 sm:px-6 md:px-8 md:py-16",
        style: {
          paddingLeft: "clamp(1.4rem, 5vw, 2.5rem)",
          paddingRight: "clamp(1.4rem, 5vw, 2.5rem)",
        },
        children: [
          u.jsxs("div", {
            className: "max-w-6xl mx-auto grid gap-6 lg:grid-cols-2",
            children: [
              u.jsxs("div", {
                className: "p-7 sm:p-8 md:p-10",
                "data-reveal": !0,
                style: {
                  padding: "clamp(1.35rem, 5vw, 2.5rem)",
                  borderRadius: "30px",
                  border: "1px solid " + palette.line,
                  background: palette.softAlt,
                  display: "flex",
                  flexDirection: "column",
                },
                children: [
                  u.jsx("p", {
                    style: labelStyle,
                    children: "Founder promise",
                  }),
                  u.jsx("p", {
                    className: "font-serif",
                    style: {
                      fontSize: "clamp(2rem, 5vw, 3rem)",
                      lineHeight: "1.14",
                      color: palette.ink,
                      marginTop: "1rem",
                    },
                    children:
                      "If your order does not feel right, we will make it right.",
                  }),
                  u.jsx("p", {
                    style: {
                      fontSize: "17px",
                      lineHeight: "1.85",
                      color: palette.copy,
                      marginTop: "1.2rem",
                    },
                    children:
                      "You get clear return support, honest guidance, and a team that stays available after delivery. The standard is not just beautiful hair. It is feeling supported in it.",
                  }),
                  u.jsx("p", {
                    className: "font-serif italic",
                    style: {
                      fontSize: "30px",
                      color: palette.ink,
                      marginTop: "2rem",
                    },
                    children: "Amani",
                  }),
                  u.jsx("p", {
                    style: {
                      marginTop: "0.45rem",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: palette.muted,
                    },
                    children: "Founder, Veloura",
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "p-7 sm:p-8 md:p-10 overflow-hidden relative",
                "data-reveal": !0,
                style: {
                  padding: "clamp(1.35rem, 5vw, 2.5rem)",
                  borderRadius: "30px",
                  background:
                    "linear-gradient(135deg, #231618 0%, #3b2525 55%, #6a4938 100%)",
                  boxShadow: "0 24px 70px rgba(44, 29, 32, 0.16)",
                  position: "relative",
                  overflow: "hidden",
                },
                children: [
                  u.jsx("div", {
                    className: "absolute rounded-full",
                    "aria-hidden": !0,
                    style: {
                      width: "15rem",
                      height: "15rem",
                      right: "-5rem",
                      bottom: "-4rem",
                      background: "rgba(255,255,255,0.08)",
                      filter: "blur(28px)",
                    },
                  }),
                  u.jsxs("div", {
                    className: "relative space-y-5",
                    style: {
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                    },
                    children: [
                      u.jsx("p", {
                        style: darkLabelStyle,
                        children: "Next step",
                      }),
                      u.jsx("h2", {
                        className: "font-serif",
                        style: {
                          fontSize: "clamp(2rem, 5vw, 3.2rem)",
                          lineHeight: "1.1",
                          color: palette.white,
                        },
                        children: "Ready to find the unit that feels like you?",
                      }),
                      u.jsx("p", {
                        style: {
                          fontSize: "17px",
                          lineHeight: "1.85",
                          color: palette.darkCopy,
                        },
                        children:
                          "Start with the collection that fits your lifestyle first. The polish comes easier when the foundation already feels right.",
                      }),
                      u.jsx("div", {
                        className: "grid gap-3 sm:grid-cols-2",
                        children: supportPoints.map((point) =>
                          u.jsx(
                            "div",
                            {
                              className: "px-4 py-3",
                              style: {
                                padding: "0.85rem 1rem",
                                borderRadius: "18px",
                                border: "1px solid " + palette.darkLine,
                                background: "rgba(255,255,255,0.05)",
                                fontSize: "12px",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                color: "rgba(255, 248, 240, 0.78)",
                              },
                              children: point,
                            },
                            point,
                          ),
                        ),
                      }),
                      u.jsx(Ne, {
                        href: "/shop",
                        className: "inline-flex items-center justify-center",
                        style: {
                          minHeight: "3.1rem",
                          padding: "0 1.8rem",
                          borderRadius: "999px",
                          background: palette.accentSoft,
                          color: palette.ink,
                          fontSize: "11px",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        },
                        children: "Find My Veloura Match",
                      }),
                      u.jsx("p", {
                        style: {
                          fontSize: "12px",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "rgba(255, 248, 240, 0.58)",
                          lineHeight: "1.6",
                        },
                        children:
                          "Realistic hairlines. Softer density. Honest support.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function sE() {
  return u.jsxs("div", {
    className:
      "flex flex-col min-h-screen bg-background text-foreground relative overflow-x-hidden",
    children: [
      u.jsx(aE, {}),
      u.jsx("main", {
        className: "flex-1",
        children: u.jsxs(J0, {
          children: [
            u.jsx(pl, {
              path: "/",
              component: zj,
            }),
            u.jsx(pl, {
              path: "/shop",
              component: nE,
            }),
            u.jsx(pl, {
              path: "/product/:id",
              component: $j,
            }),
            u.jsx(pl, {
              path: "/cart",
              component: tE,
            }),
            u.jsx(pl, {
              path: "/checkout",
              component: eE,
            }),
            u.jsx(pl, {
              path: "/about",
              component: uE,
            }),
            u.jsx(pl, {
              path: "/hair-quiz",
              component: hQuizPage,
            }),
            u.jsx(pl, {
              path: "/reviews",
              component: reviewsPage,
            }),
            u.jsx(pl, {
              path: "/install-care",
              component: installCarePage,
            }),
            u.jsx(pl, {
              component: ej,
            }),
          ],
        }),
      }),
      u.jsx(lE, {}),
      u.jsx(iE, {}),
    ],
  });
}

function rE() {
  return u.jsx(j1, {
    client: C1,
    children: u.jsxs($N, {
      children: [u.jsx(iS, {}), u.jsx(sE, {})],
    }),
  });
}
C0.createRoot(document.getElementById("root")).render(u.jsx(rE, {}));
