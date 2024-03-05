var mP = Object.create;
var {
  defineProperty: q3,
  getPrototypeOf: yP,
  getOwnPropertyNames: lP,
} = Object;
var cP = Object.prototype.hasOwnProperty;
var l0 = (NJ, c, SJ) => {
  SJ = NJ != null ? mP(yP(NJ)) : {};
  const YQ =
    c || !NJ || !NJ.__esModule
      ? q3(SJ, "default", { value: NJ, enumerable: !0 })
      : SJ;
  for (let tJ of lP(NJ))
    if (!cP.call(YQ, tJ)) q3(YQ, tJ, { get: () => NJ[tJ], enumerable: !0 });
  return YQ;
};
var S7 = (NJ, c) => () => (
  c || NJ((c = { exports: {} }).exports, c), c.exports
);
var i9 = S7((iP, c9) => {
  (function () {
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        "function"
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var NJ = "18.2.0",
      c = Symbol.for("react.element"),
      SJ = Symbol.for("react.portal"),
      YQ = Symbol.for("react.fragment"),
      tJ = Symbol.for("react.strict_mode"),
      DQ = Symbol.for("react.profiler"),
      M = Symbol.for("react.provider"),
      mZ = Symbol.for("react.context"),
      HJ = Symbol.for("react.forward_ref"),
      a = Symbol.for("react.suspense"),
      ZQ = Symbol.for("react.suspense_list"),
      s = Symbol.for("react.memo"),
      OJ = Symbol.for("react.lazy"),
      l = Symbol.for("react.offscreen"),
      FJ = Symbol.iterator,
      yZ = "@@iterator";
    function U0(K) {
      if (K === null || typeof K !== "object") return null;
      var V = (FJ && K[FJ]) || K[yZ];
      if (typeof V === "function") return V;
      return null;
    }
    var TQ = { current: null },
      IJ = { transition: null },
      JJ = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
      oJ = { current: null },
      PJ = {},
      WQ = null;
    function xJ(K) {
      WQ = K;
    }
    (PJ.setExtraStackFrame = function (K) {
      WQ = K;
    }),
      (PJ.getCurrentStack = null),
      (PJ.getStackAddendum = function () {
        var K = "";
        if (WQ) K += WQ;
        var V = PJ.getCurrentStack;
        if (V) K += V() || "";
        return K;
      });
    var Y0 = !1,
      XQ = !1,
      SQ = !1,
      $Q = !1,
      uJ = !1,
      QJ = {
        ReactCurrentDispatcher: TQ,
        ReactCurrentBatchConfig: IJ,
        ReactCurrentOwner: oJ,
      };
    (QJ.ReactDebugCurrentFrame = PJ), (QJ.ReactCurrentActQueue = JJ);
    function iJ(K) {
      {
        for (
          var V = arguments.length, A = new Array(V > 1 ? V - 1 : 0), L = 1;
          L < V;
          L++
        )
          A[L - 1] = arguments[L];
        WZ("warn", K, A);
      }
    }
    function e(K) {
      {
        for (
          var V = arguments.length, A = new Array(V > 1 ? V - 1 : 0), L = 1;
          L < V;
          L++
        )
          A[L - 1] = arguments[L];
        WZ("error", K, A);
      }
    }
    function WZ(K, V, A) {
      {
        var L = QJ.ReactDebugCurrentFrame,
          S = L.getStackAddendum();
        if (S !== "") (V += "%s"), (A = A.concat([S]));
        var i = A.map(function (u) {
          return String(u);
        });
        i.unshift("Warning: " + V),
          Function.prototype.apply.call(console[K], console, i);
      }
    }
    var w0 = {};
    function hQ(K, V) {
      {
        var A = K.constructor,
          L = (A && (A.displayName || A.name)) || "ReactClass",
          S = L + "." + V;
        if (w0[S]) return;
        e(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          V,
          L,
        ),
          (w0[S] = !0);
      }
    }
    var H0 = {
        isMounted: function (K) {
          return !1;
        },
        enqueueForceUpdate: function (K, V, A) {
          hQ(K, "forceUpdate");
        },
        enqueueReplaceState: function (K, V, A, L) {
          hQ(K, "replaceState");
        },
        enqueueSetState: function (K, V, A, L) {
          hQ(K, "setState");
        },
      },
      eQ = Object.assign,
      lZ = {};
    Object.freeze(lZ);
    function JZ(K, V, A) {
      (this.props = K),
        (this.context = V),
        (this.refs = lZ),
        (this.updater = A || H0);
    }
    (JZ.prototype.isReactComponent = {}),
      (JZ.prototype.setState = function (K, V) {
        if (typeof K !== "object" && typeof K !== "function" && K != null)
          throw new Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
          );
        this.updater.enqueueSetState(this, K, V, "setState");
      }),
      (JZ.prototype.forceUpdate = function (K) {
        this.updater.enqueueForceUpdate(this, K, "forceUpdate");
      });
    {
      var RZ = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
          ],
        },
        $1 = function (K, V) {
          Object.defineProperty(JZ.prototype, K, {
            get: function () {
              iJ(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                V[0],
                V[1],
              );
              return;
            },
          });
        };
      for (var _0 in RZ) if (RZ.hasOwnProperty(_0)) $1(_0, RZ[_0]);
    }
    function cZ() {}
    cZ.prototype = JZ.prototype;
    function K0(K, V, A) {
      (this.props = K),
        (this.context = V),
        (this.refs = lZ),
        (this.updater = A || H0);
    }
    var vZ = (K0.prototype = new cZ());
    (vZ.constructor = K0), eQ(vZ, JZ.prototype), (vZ.isPureReactComponent = !0);
    function zZ() {
      var K = { current: null };
      return Object.seal(K), K;
    }
    var iZ = Array.isArray;
    function QZ(K) {
      return iZ(K);
    }
    function NZ(K) {
      {
        var V = typeof Symbol === "function" && Symbol.toStringTag,
          A = (V && K[Symbol.toStringTag]) || K.constructor.name || "Object";
        return A;
      }
    }
    function fQ(K) {
      try {
        return uQ(K), !1;
      } catch (V) {
        return !0;
      }
    }
    function uQ(K) {
      return "" + K;
    }
    function HQ(K) {
      if (fQ(K))
        return (
          e(
            "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
            NZ(K),
          ),
          uQ(K)
        );
    }
    function dQ(K, V, A) {
      var L = K.displayName;
      if (L) return L;
      var S = V.displayName || V.name || "";
      return S !== "" ? A + "(" + S + ")" : A;
    }
    function sQ(K) {
      return K.displayName || "Context";
    }
    function zQ(K) {
      if (K == null) return null;
      if (typeof K.tag === "number")
        e(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
        );
      if (typeof K === "function") return K.displayName || K.name || null;
      if (typeof K === "string") return K;
      switch (K) {
        case YQ:
          return "Fragment";
        case SJ:
          return "Portal";
        case DQ:
          return "Profiler";
        case tJ:
          return "StrictMode";
        case a:
          return "Suspense";
        case ZQ:
          return "SuspenseList";
      }
      if (typeof K === "object")
        switch (K.$$typeof) {
          case mZ:
            var V = K;
            return sQ(V) + ".Consumer";
          case M:
            var A = K;
            return sQ(A._context) + ".Provider";
          case HJ:
            return dQ(K, K.render, "ForwardRef");
          case s:
            var L = K.displayName || null;
            if (L !== null) return L;
            return zQ(K.type) || "Memo";
          case OJ: {
            var S = K,
              i = S._payload,
              u = S._init;
            try {
              return zQ(u(i));
            } catch (BJ) {
              return null;
            }
          }
        }
      return null;
    }
    var MZ = Object.prototype.hasOwnProperty,
      P1 = { key: !0, ref: !0, __self: !0, __source: !0 },
      A1,
      aZ,
      ZZ;
    ZZ = {};
    function pZ(K) {
      if (MZ.call(K, "ref")) {
        var V = Object.getOwnPropertyDescriptor(K, "ref").get;
        if (V && V.isReactWarning) return !1;
      }
      return K.ref !== void 0;
    }
    function VZ(K) {
      if (MZ.call(K, "key")) {
        var V = Object.getOwnPropertyDescriptor(K, "key").get;
        if (V && V.isReactWarning) return !1;
      }
      return K.key !== void 0;
    }
    function oZ(K, V) {
      var A = function () {
        if (!A1)
          (A1 = !0),
            e(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
              V,
            );
      };
      (A.isReactWarning = !0),
        Object.defineProperty(K, "key", { get: A, configurable: !0 });
    }
    function MQ(K, V) {
      var A = function () {
        if (!aZ)
          (aZ = !0),
            e(
              "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
              V,
            );
      };
      (A.isReactWarning = !0),
        Object.defineProperty(K, "ref", { get: A, configurable: !0 });
    }
    function rZ(K) {
      if (
        typeof K.ref === "string" &&
        oJ.current &&
        K.__self &&
        oJ.current.stateNode !== K.__self
      ) {
        var V = zQ(oJ.current.type);
        if (!ZZ[V])
          e(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            V,
            K.ref,
          ),
            (ZZ[V] = !0);
      }
    }
    var W0 = function (K, V, A, L, S, i, u) {
      var BJ = { $$typeof: c, type: K, key: V, ref: A, props: u, _owner: i };
      if (
        ((BJ._store = {}),
        Object.defineProperty(BJ._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(BJ, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: L,
        }),
        Object.defineProperty(BJ, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: S,
        }),
        Object.freeze)
      )
        Object.freeze(BJ.props), Object.freeze(BJ);
      return BJ;
    };
    function c0(K, V, A) {
      var L,
        S = {},
        i = null,
        u = null,
        BJ = null,
        AJ = null;
      if (V != null) {
        if (pZ(V)) (u = V.ref), rZ(V);
        if (VZ(V)) HQ(V.key), (i = "" + V.key);
        (BJ = V.__self === void 0 ? null : V.__self),
          (AJ = V.__source === void 0 ? null : V.__source);
        for (L in V) if (MZ.call(V, L) && !P1.hasOwnProperty(L)) S[L] = V[L];
      }
      var bJ = arguments.length - 2;
      if (bJ === 1) S.children = A;
      else if (bJ > 1) {
        var yJ = Array(bJ);
        for (var lJ = 0; lJ < bJ; lJ++) yJ[lJ] = arguments[lJ + 2];
        if (Object.freeze) Object.freeze(yJ);
        S.children = yJ;
      }
      if (K && K.defaultProps) {
        var aJ = K.defaultProps;
        for (L in aJ) if (S[L] === void 0) S[L] = aJ[L];
      }
      if (i || u) {
        var JQ =
          typeof K === "function" ? K.displayName || K.name || "Unknown" : K;
        if (i) oZ(S, JQ);
        if (u) MQ(S, JQ);
      }
      return W0(K, i, u, BJ, AJ, oJ.current, S);
    }
    function v(K, V) {
      var A = W0(K.type, V, K.ref, K._self, K._source, K._owner, K.props);
      return A;
    }
    function m(K, V, A) {
      if (K === null || K === void 0)
        throw new Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            K +
            ".",
        );
      var L,
        S = eQ({}, K.props),
        i = K.key,
        u = K.ref,
        BJ = K._self,
        AJ = K._source,
        bJ = K._owner;
      if (V != null) {
        if (pZ(V)) (u = V.ref), (bJ = oJ.current);
        if (VZ(V)) HQ(V.key), (i = "" + V.key);
        var yJ;
        if (K.type && K.type.defaultProps) yJ = K.type.defaultProps;
        for (L in V)
          if (MZ.call(V, L) && !P1.hasOwnProperty(L))
            if (V[L] === void 0 && yJ !== void 0) S[L] = yJ[L];
            else S[L] = V[L];
      }
      var lJ = arguments.length - 2;
      if (lJ === 1) S.children = A;
      else if (lJ > 1) {
        var aJ = Array(lJ);
        for (var JQ = 0; JQ < lJ; JQ++) aJ[JQ] = arguments[JQ + 2];
        S.children = aJ;
      }
      return W0(K.type, i, u, BJ, AJ, bJ, S);
    }
    function UJ(K) {
      return typeof K === "object" && K !== null && K.$$typeof === c;
    }
    var CJ = ".",
      dJ = ":";
    function CQ(K) {
      var V = /[=:]/g,
        A = { "=": "=0", ":": "=2" },
        L = K.replace(V, function (S) {
          return A[S];
        });
      return "$" + L;
    }
    var GQ = !1,
      LZ = /\/+/g;
    function sJ(K) {
      return K.replace(LZ, "$&/");
    }
    function qZ(K, V) {
      if (typeof K === "object" && K !== null && K.key != null)
        return HQ(K.key), CQ("" + K.key);
      return V.toString(36);
    }
    function mJ(K, V, A, L, S) {
      var i = typeof K;
      if (i === "undefined" || i === "boolean") K = null;
      var u = !1;
      if (K === null) u = !0;
      else
        switch (i) {
          case "string":
          case "number":
            u = !0;
            break;
          case "object":
            switch (K.$$typeof) {
              case c:
              case SJ:
                u = !0;
            }
        }
      if (u) {
        var BJ = K,
          AJ = S(BJ),
          bJ = L === "" ? CJ + qZ(BJ, 0) : L;
        if (QZ(AJ)) {
          var yJ = "";
          if (bJ != null) yJ = sJ(bJ) + "/";
          mJ(AJ, V, yJ, "", function (Q6) {
            return Q6;
          });
        } else if (AJ != null) {
          if (UJ(AJ)) {
            if (AJ.key && (!BJ || BJ.key !== AJ.key)) HQ(AJ.key);
            AJ = v(
              AJ,
              A +
                (AJ.key && (!BJ || BJ.key !== AJ.key)
                  ? sJ("" + AJ.key) + "/"
                  : "") +
                bJ,
            );
          }
          V.push(AJ);
        }
        return 1;
      }
      var lJ,
        aJ,
        JQ = 0,
        PQ = L === "" ? CJ : L + dJ;
      if (QZ(K))
        for (var c4 = 0; c4 < K.length; c4++)
          (lJ = K[c4]), (aJ = PQ + qZ(lJ, c4)), (JQ += mJ(lJ, V, A, aJ, S));
      else {
        var AQ = U0(K);
        if (typeof AQ === "function") {
          var e5 = K;
          if (AQ === e5.entries) {
            if (!GQ)
              iJ(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead.",
              );
            GQ = !0;
          }
          var m7 = AQ.call(e5),
            J6,
            ZX = 0;
          while (!(J6 = m7.next()).done)
            (lJ = J6.value),
              (aJ = PQ + qZ(lJ, ZX++)),
              (JQ += mJ(lJ, V, A, aJ, S));
        } else if (i === "object") {
          var o0 = String(K);
          throw new Error(
            "Objects are not valid as a React child (found: " +
              (o0 === "[object Object]"
                ? "object with keys {" + Object.keys(K).join(", ") + "}"
                : o0) +
              "). If you meant to render a collection of children, use an array instead.",
          );
        }
      }
      return JQ;
    }
    function rJ(K, V, A) {
      if (K == null) return K;
      var L = [],
        S = 0;
      return (
        mJ(K, L, "", "", function (i) {
          return V.call(A, i, S++);
        }),
        L
      );
    }
    function e1(K) {
      var V = 0;
      return (
        rJ(K, function () {
          V++;
        }),
        V
      );
    }
    function E1(K, V, A) {
      rJ(
        K,
        function () {
          V.apply(this, arguments);
        },
        A,
      );
    }
    function J4(K) {
      return (
        rJ(K, function (V) {
          return V;
        }) || []
      );
    }
    function g4(K) {
      if (!UJ(K))
        throw new Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return K;
    }
    function u5(K) {
      var V = {
        $$typeof: mZ,
        _currentValue: K,
        _currentValue2: K,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      };
      V.Provider = { $$typeof: M, _context: V };
      var A = !1,
        L = !1,
        S = !1;
      {
        var i = { $$typeof: mZ, _context: V };
        Object.defineProperties(i, {
          Provider: {
            get: function () {
              if (!L)
                (L = !0),
                  e(
                    "Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?",
                  );
              return V.Provider;
            },
            set: function (u) {
              V.Provider = u;
            },
          },
          _currentValue: {
            get: function () {
              return V._currentValue;
            },
            set: function (u) {
              V._currentValue = u;
            },
          },
          _currentValue2: {
            get: function () {
              return V._currentValue2;
            },
            set: function (u) {
              V._currentValue2 = u;
            },
          },
          _threadCount: {
            get: function () {
              return V._threadCount;
            },
            set: function (u) {
              V._threadCount = u;
            },
          },
          Consumer: {
            get: function () {
              if (!A)
                (A = !0),
                  e(
                    "Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?",
                  );
              return V.Consumer;
            },
          },
          displayName: {
            get: function () {
              return V.displayName;
            },
            set: function (u) {
              if (!S)
                iJ(
                  "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                  u,
                ),
                  (S = !0);
            },
          },
        }),
          (V.Consumer = i);
      }
      return (V._currentRenderer = null), (V._currentRenderer2 = null), V;
    }
    var z0 = -1,
      i0 = 0,
      T4 = 1,
      h4 = 2;
    function Q4(K) {
      if (K._status === z0) {
        var V = K._result,
          A = V();
        if (
          (A.then(
            function (i) {
              if (K._status === i0 || K._status === z0) {
                var u = K;
                (u._status = T4), (u._result = i);
              }
            },
            function (i) {
              if (K._status === i0 || K._status === z0) {
                var u = K;
                (u._status = h4), (u._result = i);
              }
            },
          ),
          K._status === z0)
        ) {
          var L = K;
          (L._status = i0), (L._result = A);
        }
      }
      if (K._status === T4) {
        var S = K._result;
        if (S === void 0)
          e(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            S,
          );
        if (!("default" in S))
          e(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            S,
          );
        return S.default;
      } else throw K._result;
    }
    function S0(K) {
      var V = { _status: z0, _result: K },
        A = { $$typeof: OJ, _payload: V, _init: Q4 };
      {
        var L, S;
        Object.defineProperties(A, {
          defaultProps: {
            configurable: !0,
            get: function () {
              return L;
            },
            set: function (i) {
              e(
                "React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.",
              ),
                (L = i),
                Object.defineProperty(A, "defaultProps", { enumerable: !0 });
            },
          },
          propTypes: {
            configurable: !0,
            get: function () {
              return S;
            },
            set: function (i) {
              e(
                "React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.",
              ),
                (S = i),
                Object.defineProperty(A, "propTypes", { enumerable: !0 });
            },
          },
        });
      }
      return A;
    }
    function q(K) {
      {
        if (K != null && K.$$typeof === s)
          e(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).",
          );
        else if (typeof K !== "function")
          e(
            "forwardRef requires a render function but was given %s.",
            K === null ? "null" : typeof K,
          );
        else if (K.length !== 0 && K.length !== 2)
          e(
            "forwardRef render functions accept exactly two parameters: props and ref. %s",
            K.length === 1
              ? "Did you forget to use the ref parameter?"
              : "Any additional parameter will be undefined.",
          );
        if (K != null) {
          if (K.defaultProps != null || K.propTypes != null)
            e(
              "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?",
            );
        }
      }
      var V = { $$typeof: HJ, render: K };
      {
        var A;
        Object.defineProperty(V, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return A;
          },
          set: function (L) {
            if (((A = L), !K.name && !K.displayName)) K.displayName = L;
          },
        });
      }
      return V;
    }
    var w = Symbol.for("react.module.reference");
    function N(K) {
      if (typeof K === "string" || typeof K === "function") return !0;
      if (
        K === YQ ||
        K === DQ ||
        uJ ||
        K === tJ ||
        K === a ||
        K === ZQ ||
        $Q ||
        K === l ||
        Y0 ||
        XQ ||
        SQ
      )
        return !0;
      if (typeof K === "object" && K !== null) {
        if (
          K.$$typeof === OJ ||
          K.$$typeof === s ||
          K.$$typeof === M ||
          K.$$typeof === mZ ||
          K.$$typeof === HJ ||
          K.$$typeof === w ||
          K.getModuleId !== void 0
        )
          return !0;
      }
      return !1;
    }
    function p(K, V) {
      if (!N(K))
        e(
          "memo: The first argument must be a component. Instead received: %s",
          K === null ? "null" : typeof K,
        );
      var A = { $$typeof: s, type: K, compare: V === void 0 ? null : V };
      {
        var L;
        Object.defineProperty(A, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return L;
          },
          set: function (S) {
            if (((L = S), !K.name && !K.displayName)) K.displayName = S;
          },
        });
      }
      return A;
    }
    function n() {
      var K = TQ.current;
      if (K === null)
        e(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.",
        );
      return K;
    }
    function wJ(K) {
      var V = n();
      if (K._context !== void 0) {
        var A = K._context;
        if (A.Consumer === K)
          e(
            "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?",
          );
        else if (A.Provider === K)
          e(
            "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?",
          );
      }
      return V.useContext(K);
    }
    function KJ(K) {
      var V = n();
      return V.useState(K);
    }
    function WJ(K, V, A) {
      var L = n();
      return L.useReducer(K, V, A);
    }
    function BQ(K) {
      var V = n();
      return V.useRef(K);
    }
    function hJ(K, V) {
      var A = n();
      return A.useEffect(K, V);
    }
    function jJ(K, V) {
      var A = n();
      return A.useInsertionEffect(K, V);
    }
    function XZ(K, V) {
      var A = n();
      return A.useLayoutEffect(K, V);
    }
    function C0(K, V) {
      var A = n();
      return A.useCallback(K, V);
    }
    function Z4(K, V) {
      var A = n();
      return A.useMemo(K, V);
    }
    function bZ(K, V, A) {
      var L = n();
      return L.useImperativeHandle(K, V, A);
    }
    function a9(K, V) {
      {
        var A = n();
        return A.useDebugValue(K, V);
      }
    }
    function p9() {
      var K = n();
      return K.useTransition();
    }
    function N7(K) {
      var V = n();
      return V.useDeferredValue(K);
    }
    function o9() {
      var K = n();
      return K.useId();
    }
    function a0(K, V, A) {
      var L = n();
      return L.useSyncExternalStore(K, V, A);
    }
    var MJ = 0,
      R1,
      d5,
      s5,
      m5,
      y5,
      l5,
      c5;
    function i5() {}
    i5.__reactDisabledLog = !0;
    function b7() {
      {
        if (MJ === 0) {
          (R1 = console.log),
            (d5 = console.info),
            (s5 = console.warn),
            (m5 = console.error),
            (y5 = console.group),
            (l5 = console.groupCollapsed),
            (c5 = console.groupEnd);
          var K = { configurable: !0, enumerable: !0, value: i5, writable: !0 };
          Object.defineProperties(console, {
            info: K,
            log: K,
            warn: K,
            error: K,
            group: K,
            groupCollapsed: K,
            groupEnd: K,
          });
        }
        MJ++;
      }
    }
    function r9() {
      {
        if ((MJ--, MJ === 0)) {
          var K = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: eQ({}, K, { value: R1 }),
            info: eQ({}, K, { value: d5 }),
            warn: eQ({}, K, { value: s5 }),
            error: eQ({}, K, { value: m5 }),
            group: eQ({}, K, { value: y5 }),
            groupCollapsed: eQ({}, K, { value: l5 }),
            groupEnd: eQ({}, K, { value: c5 }),
          });
        }
        if (MJ < 0)
          e(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
          );
      }
    }
    var a5 = QJ.ReactCurrentDispatcher,
      X4;
    function L1(K, V, A) {
      {
        if (X4 === void 0)
          try {
            throw Error();
          } catch (S) {
            var L = S.stack.trim().match(/\n( *(at )?)/);
            X4 = (L && L[1]) || "";
          }
        return "\n" + X4 + K;
      }
    }
    var nZ = !1,
      F1;
    {
      var f4 = typeof WeakMap === "function" ? WeakMap : Map;
      F1 = new f4();
    }
    function k7(K, V) {
      if (!K || nZ) return "";
      {
        var A = F1.get(K);
        if (A !== void 0) return A;
      }
      var L;
      nZ = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var i;
      (i = a5.current), (a5.current = null), b7();
      try {
        if (V) {
          var u = function () {
            throw Error();
          };
          if (
            (Object.defineProperty(u.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect === "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(u, []);
            } catch (PQ) {
              L = PQ;
            }
            Reflect.construct(K, [], u);
          } else {
            try {
              u.call();
            } catch (PQ) {
              L = PQ;
            }
            K.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (PQ) {
            L = PQ;
          }
          K();
        }
      } catch (PQ) {
        if (PQ && L && typeof PQ.stack === "string") {
          var BJ = PQ.stack.split("\n"),
            AJ = L.stack.split("\n"),
            bJ = BJ.length - 1,
            yJ = AJ.length - 1;
          while (bJ >= 1 && yJ >= 0 && BJ[bJ] !== AJ[yJ]) yJ--;
          for (; bJ >= 1 && yJ >= 0; bJ--, yJ--)
            if (BJ[bJ] !== AJ[yJ]) {
              if (bJ !== 1 || yJ !== 1)
                do
                  if ((bJ--, yJ--, yJ < 0 || BJ[bJ] !== AJ[yJ])) {
                    var lJ = "\n" + BJ[bJ].replace(" at new ", " at ");
                    if (K.displayName && lJ.includes("<anonymous>"))
                      lJ = lJ.replace("<anonymous>", K.displayName);
                    if (typeof K === "function") F1.set(K, lJ);
                    return lJ;
                  }
                while (bJ >= 1 && yJ >= 0);
              break;
            }
        }
      } finally {
        (nZ = !1), (a5.current = i), r9(), (Error.prepareStackTrace = S);
      }
      var aJ = K ? K.displayName || K.name : "",
        JQ = aJ ? L1(aJ) : "";
      if (typeof K === "function") F1.set(K, JQ);
      return JQ;
    }
    function p5(K, V, A) {
      return k7(K, !1);
    }
    function n9(K) {
      var V = K.prototype;
      return !!(V && V.isReactComponent);
    }
    function I1(K, V, A) {
      if (K == null) return "";
      if (typeof K === "function") return k7(K, n9(K));
      if (typeof K === "string") return L1(K);
      switch (K) {
        case a:
          return L1("Suspense");
        case ZQ:
          return L1("SuspenseList");
      }
      if (typeof K === "object")
        switch (K.$$typeof) {
          case HJ:
            return p5(K.render);
          case s:
            return I1(K.type, V, A);
          case OJ: {
            var L = K,
              S = L._payload,
              i = L._init;
            try {
              return I1(i(S), V, A);
            } catch (u) {}
          }
        }
      return "";
    }
    var g7 = {},
      u4 = QJ.ReactDebugCurrentFrame;
    function d4(K) {
      if (K) {
        var V = K._owner,
          A = I1(K.type, K._source, V ? V.type : null);
        u4.setExtraStackFrame(A);
      } else u4.setExtraStackFrame(null);
    }
    function T7(K, V, A, L, S) {
      {
        var i = Function.call.bind(MZ);
        for (var u in K)
          if (i(K, u)) {
            var BJ = void 0;
            try {
              if (typeof K[u] !== "function") {
                var AJ = Error(
                  (L || "React class") +
                    ": " +
                    A +
                    " type `" +
                    u +
                    "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                    typeof K[u] +
                    "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
                );
                throw ((AJ.name = "Invariant Violation"), AJ);
              }
              BJ = K[u](
                V,
                u,
                L,
                A,
                null,
                "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
              );
            } catch (bJ) {
              BJ = bJ;
            }
            if (BJ && !(BJ instanceof Error))
              d4(S),
                e(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  L || "React class",
                  A,
                  u,
                  typeof BJ,
                ),
                d4(null);
            if (BJ instanceof Error && !(BJ.message in g7))
              (g7[BJ.message] = !0),
                d4(S),
                e("Failed %s type: %s", A, BJ.message),
                d4(null);
          }
      }
    }
    function x1(K) {
      if (K) {
        var V = K._owner,
          A = I1(K.type, K._source, V ? V.type : null);
        xJ(A);
      } else xJ(null);
    }
    var o5 = !1;
    function fJ() {
      if (oJ.current) {
        var K = zQ(oJ.current.type);
        if (K) return "\n\nCheck the render method of `" + K + "`.";
      }
      return "";
    }
    function t9(K) {
      if (K !== void 0) {
        var V = K.fileName.replace(/^.*[\\\/]/, ""),
          A = K.lineNumber;
        return "\n\nCheck your code at " + V + ":" + A + ".";
      }
      return "";
    }
    function h7(K) {
      if (K !== null && K !== void 0) return t9(K.__source);
      return "";
    }
    var YJ = {};
    function f7(K) {
      var V = fJ();
      if (!V) {
        var A = typeof K === "string" ? K : K.displayName || K.name;
        if (A) V = "\n\nCheck the top-level render call using <" + A + ">.";
      }
      return V;
    }
    function GZ(K, V) {
      if (!K._store || K._store.validated || K.key != null) return;
      K._store.validated = !0;
      var A = f7(V);
      if (YJ[A]) return;
      YJ[A] = !0;
      var L = "";
      if (K && K._owner && K._owner !== oJ.current)
        L = " It was passed a child from " + zQ(K._owner.type) + ".";
      x1(K),
        e(
          'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
          A,
          L,
        ),
        x1(null);
    }
    function w1(K, V) {
      if (typeof K !== "object") return;
      if (QZ(K))
        for (var A = 0; A < K.length; A++) {
          var L = K[A];
          if (UJ(L)) GZ(L, V);
        }
      else if (UJ(K)) {
        if (K._store) K._store.validated = !0;
      } else if (K) {
        var S = U0(K);
        if (typeof S === "function") {
          if (S !== K.entries) {
            var i = S.call(K),
              u;
            while (!(u = i.next()).done) if (UJ(u.value)) GZ(u.value, V);
          }
        }
      }
    }
    function _1(K) {
      {
        var V = K.type;
        if (V === null || V === void 0 || typeof V === "string") return;
        var A;
        if (typeof V === "function") A = V.propTypes;
        else if (
          typeof V === "object" &&
          (V.$$typeof === HJ || V.$$typeof === s)
        )
          A = V.propTypes;
        else return;
        if (A) {
          var L = zQ(V);
          T7(A, K.props, "prop", L, K);
        } else if (V.PropTypes !== void 0 && !o5) {
          o5 = !0;
          var S = zQ(V);
          e(
            "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
            S || "Unknown",
          );
        }
        if (
          typeof V.getDefaultProps === "function" &&
          !V.getDefaultProps.isReactClassApproved
        )
          e(
            "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.",
          );
      }
    }
    function e9(K) {
      {
        var V = Object.keys(K.props);
        for (var A = 0; A < V.length; A++) {
          var L = V[A];
          if (L !== "children" && L !== "key") {
            x1(K),
              e(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                L,
              ),
              x1(null);
            break;
          }
        }
        if (K.ref !== null)
          x1(K),
            e("Invalid attribute `ref` supplied to `React.Fragment`."),
            x1(null);
      }
    }
    function vQ(K, V, A) {
      var L = N(K);
      if (!L) {
        var S = "";
        if (
          K === void 0 ||
          (typeof K === "object" && K !== null && Object.keys(K).length === 0)
        )
          S +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        var i = h7(V);
        if (i) S += i;
        else S += fJ();
        var u;
        if (K === null) u = "null";
        else if (QZ(K)) u = "array";
        else if (K !== void 0 && K.$$typeof === c)
          (u = "<" + (zQ(K.type) || "Unknown") + " />"),
            (S =
              " Did you accidentally export a JSX literal instead of a component?");
        else u = typeof K;
        e(
          "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          u,
          S,
        );
      }
      var BJ = c0.apply(this, arguments);
      if (BJ == null) return BJ;
      if (L) for (var AJ = 2; AJ < arguments.length; AJ++) w1(arguments[AJ], K);
      if (K === YQ) e9(BJ);
      else _1(BJ);
      return BJ;
    }
    var eJ = !1;
    function JX(K) {
      var V = vQ.bind(null, K);
      V.type = K;
      {
        if (!eJ)
          (eJ = !0),
            iJ(
              "React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.",
            );
        Object.defineProperty(V, "type", {
          enumerable: !1,
          get: function () {
            return (
              iJ(
                "Factory.type is deprecated. Access the class directly before passing it to createFactory.",
              ),
              Object.defineProperty(this, "type", { value: K }),
              K
            );
          },
        });
      }
      return V;
    }
    function tZ(K, V, A) {
      var L = m.apply(this, arguments);
      for (var S = 2; S < arguments.length; S++) w1(arguments[S], L.type);
      return _1(L), L;
    }
    function FZ(K, V) {
      var A = IJ.transition;
      IJ.transition = {};
      var L = IJ.transition;
      IJ.transition._updatedFibers = new Set();
      try {
        K();
      } finally {
        if (((IJ.transition = A), A === null && L._updatedFibers)) {
          var S = L._updatedFibers.size;
          if (S > 10)
            iJ(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.",
            );
          L._updatedFibers.clear();
        }
      }
    }
    var M0 = !1,
      s4 = null;
    function r5(K) {
      if (s4 === null)
        try {
          var V = ("require" + Math.random()).slice(0, 7),
            A = c9 && c9[V];
          s4 = A.call(c9, "timers").setImmediate;
        } catch (L) {
          s4 = function (S) {
            if (M0 === !1) {
              if (((M0 = !0), typeof MessageChannel === "undefined"))
                e(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.",
                );
            }
            var i = new MessageChannel();
            (i.port1.onmessage = S), i.port2.postMessage(void 0);
          };
        }
      return s4(K);
    }
    var p0 = 0,
      n5 = !1;
    function QX(K) {
      {
        var V = p0;
        if ((p0++, JJ.current === null)) JJ.current = [];
        var A = JJ.isBatchingLegacy,
          L;
        try {
          if (
            ((JJ.isBatchingLegacy = !0),
            (L = K()),
            !A && JJ.didScheduleLegacyUpdate)
          ) {
            var S = JJ.current;
            if (S !== null) (JJ.didScheduleLegacyUpdate = !1), y4(S);
          }
        } catch (aJ) {
          throw (m4(V), aJ);
        } finally {
          JJ.isBatchingLegacy = A;
        }
        if (
          L !== null &&
          typeof L === "object" &&
          typeof L.then === "function"
        ) {
          var i = L,
            u = !1,
            BJ = {
              then: function (aJ, JQ) {
                (u = !0),
                  i.then(
                    function (PQ) {
                      if ((m4(V), p0 === 0)) t5(PQ, aJ, JQ);
                      else aJ(PQ);
                    },
                    function (PQ) {
                      m4(V), JQ(PQ);
                    },
                  );
              },
            };
          if (!n5 && typeof Promise !== "undefined")
            Promise.resolve()
              .then(function () {})
              .then(function () {
                if (!u)
                  (n5 = !0),
                    e(
                      "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);",
                    );
              });
          return BJ;
        } else {
          var AJ = L;
          if ((m4(V), p0 === 0)) {
            var bJ = JJ.current;
            if (bJ !== null) y4(bJ), (JJ.current = null);
            var yJ = {
              then: function (aJ, JQ) {
                if (JJ.current === null) (JJ.current = []), t5(AJ, aJ, JQ);
                else aJ(AJ);
              },
            };
            return yJ;
          } else {
            var lJ = {
              then: function (aJ, JQ) {
                aJ(AJ);
              },
            };
            return lJ;
          }
        }
      }
    }
    function m4(K) {
      {
        if (K !== p0 - 1)
          e(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ",
          );
        p0 = K;
      }
    }
    function t5(K, V, A) {
      {
        var L = JJ.current;
        if (L !== null)
          try {
            y4(L),
              r5(function () {
                if (L.length === 0) (JJ.current = null), V(K);
                else t5(K, V, A);
              });
          } catch (S) {
            A(S);
          }
        else V(K);
      }
    }
    var S1 = !1;
    function y4(K) {
      if (!S1) {
        S1 = !0;
        var V = 0;
        try {
          for (; V < K.length; V++) {
            var A = K[V];
            do A = A(!0);
            while (A !== null);
          }
          K.length = 0;
        } catch (L) {
          throw ((K = K.slice(V + 1)), L);
        } finally {
          S1 = !1;
        }
      }
    }
    var l4 = vQ,
      u7 = tZ,
      d7 = JX,
      s7 = { map: rJ, forEach: E1, count: e1, toArray: J4, only: g4 };
    if (
      ((iP.Children = s7),
      (iP.Component = JZ),
      (iP.Fragment = YQ),
      (iP.Profiler = DQ),
      (iP.PureComponent = K0),
      (iP.StrictMode = tJ),
      (iP.Suspense = a),
      (iP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QJ),
      (iP.cloneElement = u7),
      (iP.createContext = u5),
      (iP.createElement = l4),
      (iP.createFactory = d7),
      (iP.createRef = zZ),
      (iP.forwardRef = q),
      (iP.isValidElement = UJ),
      (iP.lazy = S0),
      (iP.memo = p),
      (iP.startTransition = FZ),
      (iP.unstable_act = QX),
      (iP.useCallback = C0),
      (iP.useContext = wJ),
      (iP.useDebugValue = a9),
      (iP.useDeferredValue = N7),
      (iP.useEffect = hJ),
      (iP.useId = o9),
      (iP.useImperativeHandle = bZ),
      (iP.useInsertionEffect = jJ),
      (iP.useLayoutEffect = XZ),
      (iP.useMemo = Z4),
      (iP.useReducer = WJ),
      (iP.useRef = BQ),
      (iP.useState = KJ),
      (iP.useSyncExternalStore = a0),
      (iP.useTransition = p9),
      (iP.version = NJ),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
          "function")
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
});
var O3 = S7((aP) => {
  (function () {
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        "function"
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var NJ = !1,
      c = !1,
      SJ = 5;
    function YQ(v, m) {
      var UJ = v.length;
      v.push(m), M(v, m, UJ);
    }
    function tJ(v) {
      return v.length === 0 ? null : v[0];
    }
    function DQ(v) {
      if (v.length === 0) return null;
      var m = v[0],
        UJ = v.pop();
      if (UJ !== m) (v[0] = UJ), mZ(v, UJ, 0);
      return m;
    }
    function M(v, m, UJ) {
      var CJ = UJ;
      while (CJ > 0) {
        var dJ = (CJ - 1) >>> 1,
          CQ = v[dJ];
        if (HJ(CQ, m) > 0) (v[dJ] = m), (v[CJ] = CQ), (CJ = dJ);
        else return;
      }
    }
    function mZ(v, m, UJ) {
      var CJ = UJ,
        dJ = v.length,
        CQ = dJ >>> 1;
      while (CJ < CQ) {
        var GQ = (CJ + 1) * 2 - 1,
          LZ = v[GQ],
          sJ = GQ + 1,
          qZ = v[sJ];
        if (HJ(LZ, m) < 0)
          if (sJ < dJ && HJ(qZ, LZ) < 0) (v[CJ] = qZ), (v[sJ] = m), (CJ = sJ);
          else (v[CJ] = LZ), (v[GQ] = m), (CJ = GQ);
        else if (sJ < dJ && HJ(qZ, m) < 0) (v[CJ] = qZ), (v[sJ] = m), (CJ = sJ);
        else return;
      }
    }
    function HJ(v, m) {
      var UJ = v.sortIndex - m.sortIndex;
      return UJ !== 0 ? UJ : v.id - m.id;
    }
    var a = 1,
      ZQ = 2,
      s = 3,
      OJ = 4,
      l = 5;
    function FJ(v, m) {}
    var yZ =
      typeof performance === "object" && typeof performance.now === "function";
    if (yZ) {
      var U0 = performance;
      aP.unstable_now = function () {
        return U0.now();
      };
    } else {
      var TQ = Date,
        IJ = TQ.now();
      aP.unstable_now = function () {
        return TQ.now() - IJ;
      };
    }
    var JJ = 1073741823,
      oJ = -1,
      PJ = 250,
      WQ = 5000,
      xJ = 1e4,
      Y0 = JJ,
      XQ = [],
      SQ = [],
      $Q = 1,
      uJ = null,
      QJ = s,
      iJ = !1,
      e = !1,
      WZ = !1,
      w0 = typeof setTimeout === "function" ? setTimeout : null,
      hQ = typeof clearTimeout === "function" ? clearTimeout : null,
      H0 = typeof setImmediate !== "undefined" ? setImmediate : null,
      eQ =
        typeof navigator !== "undefined" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0
          ? navigator.scheduling.isInputPending.bind(navigator.scheduling)
          : null;
    function lZ(v) {
      var m = tJ(SQ);
      while (m !== null) {
        if (m.callback === null) DQ(SQ);
        else if (m.startTime <= v)
          DQ(SQ), (m.sortIndex = m.expirationTime), YQ(XQ, m);
        else return;
        m = tJ(SQ);
      }
    }
    function JZ(v) {
      if (((WZ = !1), lZ(v), !e))
        if (tJ(XQ) !== null) (e = !0), oZ(RZ);
        else {
          var m = tJ(SQ);
          if (m !== null) MQ(JZ, m.startTime - v);
        }
    }
    function RZ(v, m) {
      if (((e = !1), WZ)) (WZ = !1), rZ();
      iJ = !0;
      var UJ = QJ;
      try {
        if (c)
          try {
            return $1(v, m);
          } catch (dJ) {
            if (uJ !== null) {
              var CJ = aP.unstable_now();
              FJ(uJ, CJ), (uJ.isQueued = !1);
            }
            throw dJ;
          }
        else return $1(v, m);
      } finally {
        (uJ = null), (QJ = UJ), (iJ = !1);
      }
    }
    function $1(v, m) {
      var UJ = m;
      lZ(UJ), (uJ = tJ(XQ));
      while (uJ !== null && !NJ) {
        if (uJ.expirationTime > UJ && (!v || MZ())) break;
        var CJ = uJ.callback;
        if (typeof CJ === "function") {
          (uJ.callback = null), (QJ = uJ.priorityLevel);
          var dJ = uJ.expirationTime <= UJ,
            CQ = CJ(dJ);
          if (((UJ = aP.unstable_now()), typeof CQ === "function"))
            uJ.callback = CQ;
          else if (uJ === tJ(XQ)) DQ(XQ);
          lZ(UJ);
        } else DQ(XQ);
        uJ = tJ(XQ);
      }
      if (uJ !== null) return !0;
      else {
        var GQ = tJ(SQ);
        if (GQ !== null) MQ(JZ, GQ.startTime - UJ);
        return !1;
      }
    }
    function _0(v, m) {
      switch (v) {
        case a:
        case ZQ:
        case s:
        case OJ:
        case l:
          break;
        default:
          v = s;
      }
      var UJ = QJ;
      QJ = v;
      try {
        return m();
      } finally {
        QJ = UJ;
      }
    }
    function cZ(v) {
      var m;
      switch (QJ) {
        case a:
        case ZQ:
        case s:
          m = s;
          break;
        default:
          m = QJ;
          break;
      }
      var UJ = QJ;
      QJ = m;
      try {
        return v();
      } finally {
        QJ = UJ;
      }
    }
    function K0(v) {
      var m = QJ;
      return function () {
        var UJ = QJ;
        QJ = m;
        try {
          return v.apply(this, arguments);
        } finally {
          QJ = UJ;
        }
      };
    }
    function vZ(v, m, UJ) {
      var CJ = aP.unstable_now(),
        dJ;
      if (typeof UJ === "object" && UJ !== null) {
        var CQ = UJ.delay;
        if (typeof CQ === "number" && CQ > 0) dJ = CJ + CQ;
        else dJ = CJ;
      } else dJ = CJ;
      var GQ;
      switch (v) {
        case a:
          GQ = oJ;
          break;
        case ZQ:
          GQ = PJ;
          break;
        case l:
          GQ = Y0;
          break;
        case OJ:
          GQ = xJ;
          break;
        case s:
        default:
          GQ = WQ;
          break;
      }
      var LZ = dJ + GQ,
        sJ = {
          id: $Q++,
          callback: m,
          priorityLevel: v,
          startTime: dJ,
          expirationTime: LZ,
          sortIndex: -1,
        };
      if (dJ > CJ) {
        if (
          ((sJ.sortIndex = dJ), YQ(SQ, sJ), tJ(XQ) === null && sJ === tJ(SQ))
        ) {
          if (WZ) rZ();
          else WZ = !0;
          MQ(JZ, dJ - CJ);
        }
      } else if (((sJ.sortIndex = LZ), YQ(XQ, sJ), !e && !iJ)) (e = !0), oZ(RZ);
      return sJ;
    }
    function zZ() {}
    function iZ() {
      if (!e && !iJ) (e = !0), oZ(RZ);
    }
    function QZ() {
      return tJ(XQ);
    }
    function NZ(v) {
      v.callback = null;
    }
    function fQ() {
      return QJ;
    }
    var uQ = !1,
      HQ = null,
      dQ = -1,
      sQ = SJ,
      zQ = -1;
    function MZ() {
      var v = aP.unstable_now() - zQ;
      if (v < sQ) return !1;
      return !0;
    }
    function P1() {}
    function A1(v) {
      if (v < 0 || v > 125) {
        console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
        );
        return;
      }
      if (v > 0) sQ = Math.floor(1000 / v);
      else sQ = SJ;
    }
    var aZ = function () {
        if (HQ !== null) {
          var v = aP.unstable_now();
          zQ = v;
          var m = !0,
            UJ = !0;
          try {
            UJ = HQ(m, v);
          } finally {
            if (UJ) ZZ();
            else (uQ = !1), (HQ = null);
          }
        } else uQ = !1;
      },
      ZZ;
    if (typeof H0 === "function")
      ZZ = function () {
        H0(aZ);
      };
    else if (typeof MessageChannel !== "undefined") {
      var pZ = new MessageChannel(),
        VZ = pZ.port2;
      (pZ.port1.onmessage = aZ),
        (ZZ = function () {
          VZ.postMessage(null);
        });
    } else
      ZZ = function () {
        w0(aZ, 0);
      };
    function oZ(v) {
      if (((HQ = v), !uQ)) (uQ = !0), ZZ();
    }
    function MQ(v, m) {
      dQ = w0(function () {
        v(aP.unstable_now());
      }, m);
    }
    function rZ() {
      hQ(dQ), (dQ = -1);
    }
    var W0 = P1,
      c0 = null;
    if (
      ((aP.unstable_IdlePriority = l),
      (aP.unstable_ImmediatePriority = a),
      (aP.unstable_LowPriority = OJ),
      (aP.unstable_NormalPriority = s),
      (aP.unstable_Profiling = c0),
      (aP.unstable_UserBlockingPriority = ZQ),
      (aP.unstable_cancelCallback = NZ),
      (aP.unstable_continueExecution = iZ),
      (aP.unstable_forceFrameRate = A1),
      (aP.unstable_getCurrentPriorityLevel = fQ),
      (aP.unstable_getFirstCallbackNode = QZ),
      (aP.unstable_next = cZ),
      (aP.unstable_pauseExecution = zZ),
      (aP.unstable_requestPaint = W0),
      (aP.unstable_runWithPriority = _0),
      (aP.unstable_scheduleCallback = vZ),
      (aP.unstable_shouldYield = MZ),
      (aP.unstable_wrapCallback = K0),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
          "function")
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
});
var j3 = S7((pP) => {
  var NJ = l0(i9(), 1),
    c = l0(O3(), 1);
  (function () {
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        "function"
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var SJ = NJ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      YQ = !1;
    function tJ(J) {
      YQ = J;
    }
    function DQ(J) {
      if (!YQ) {
        for (
          var Q = arguments.length, Z = new Array(Q > 1 ? Q - 1 : 0), X = 1;
          X < Q;
          X++
        )
          Z[X - 1] = arguments[X];
        mZ("warn", J, Z);
      }
    }
    function M(J) {
      if (!YQ) {
        for (
          var Q = arguments.length, Z = new Array(Q > 1 ? Q - 1 : 0), X = 1;
          X < Q;
          X++
        )
          Z[X - 1] = arguments[X];
        mZ("error", J, Z);
      }
    }
    function mZ(J, Q, Z) {
      {
        var X = SJ.ReactDebugCurrentFrame,
          G = X.getStackAddendum();
        if (G !== "") (Q += "%s"), (Z = Z.concat([G]));
        var B = Z.map(function (U) {
          return String(U);
        });
        B.unshift("Warning: " + Q),
          Function.prototype.apply.call(console[J], console, B);
      }
    }
    var HJ = 0,
      a = 1,
      ZQ = 2,
      s = 3,
      OJ = 4,
      l = 5,
      FJ = 6,
      yZ = 7,
      U0 = 8,
      TQ = 9,
      IJ = 10,
      JJ = 11,
      oJ = 12,
      PJ = 13,
      WQ = 14,
      xJ = 15,
      Y0 = 16,
      XQ = 17,
      SQ = 18,
      $Q = 19,
      uJ = 21,
      QJ = 22,
      iJ = 23,
      e = 24,
      WZ = 25,
      w0 = !0,
      hQ = !1,
      H0 = !1,
      eQ = !1,
      lZ = !1,
      JZ = !0,
      RZ = !1,
      $1 = !1,
      _0 = !0,
      cZ = !0,
      K0 = !0,
      vZ = new Set(),
      zZ = {},
      iZ = {};
    function QZ(J, Q) {
      NZ(J, Q), NZ(J + "Capture", Q);
    }
    function NZ(J, Q) {
      if (zZ[J])
        M(
          "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
          J,
        );
      zZ[J] = Q;
      {
        var Z = J.toLowerCase();
        if (((iZ[Z] = J), J === "onDoubleClick")) iZ.ondblclick = J;
      }
      for (var X = 0; X < Q.length; X++) vZ.add(Q[X]);
    }
    var fQ =
        typeof window !== "undefined" &&
        typeof window.document !== "undefined" &&
        typeof window.document.createElement !== "undefined",
      uQ = Object.prototype.hasOwnProperty;
    function HQ(J) {
      {
        var Q = typeof Symbol === "function" && Symbol.toStringTag,
          Z = (Q && J[Symbol.toStringTag]) || J.constructor.name || "Object";
        return Z;
      }
    }
    function dQ(J) {
      try {
        return sQ(J), !1;
      } catch (Q) {
        return !0;
      }
    }
    function sQ(J) {
      return "" + J;
    }
    function zQ(J, Q) {
      if (dQ(J))
        return (
          M(
            "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",
            Q,
            HQ(J),
          ),
          sQ(J)
        );
    }
    function MZ(J) {
      if (dQ(J))
        return (
          M(
            "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
            HQ(J),
          ),
          sQ(J)
        );
    }
    function P1(J, Q) {
      if (dQ(J))
        return (
          M(
            "The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",
            Q,
            HQ(J),
          ),
          sQ(J)
        );
    }
    function A1(J, Q) {
      if (dQ(J))
        return (
          M(
            "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",
            Q,
            HQ(J),
          ),
          sQ(J)
        );
    }
    function aZ(J) {
      if (dQ(J))
        return (
          M(
            "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",
            HQ(J),
          ),
          sQ(J)
        );
    }
    function ZZ(J) {
      if (dQ(J))
        return (
          M(
            "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",
            HQ(J),
          ),
          sQ(J)
        );
    }
    var pZ = 0,
      VZ = 1,
      oZ = 2,
      MQ = 3,
      rZ = 4,
      W0 = 5,
      c0 = 6,
      v =
        ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
      m = v + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
      UJ = new RegExp("^[" + v + "][" + m + "]*$"),
      CJ = {},
      dJ = {};
    function CQ(J) {
      if (uQ.call(dJ, J)) return !0;
      if (uQ.call(CJ, J)) return !1;
      if (UJ.test(J)) return (dJ[J] = !0), !0;
      return (CJ[J] = !0), M("Invalid attribute name: `%s`", J), !1;
    }
    function GQ(J, Q, Z) {
      if (Q !== null) return Q.type === pZ;
      if (Z) return !1;
      if (
        J.length > 2 &&
        (J[0] === "o" || J[0] === "O") &&
        (J[1] === "n" || J[1] === "N")
      )
        return !0;
      return !1;
    }
    function LZ(J, Q, Z, X) {
      if (Z !== null && Z.type === pZ) return !1;
      switch (typeof Q) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (X) return !1;
          if (Z !== null) return !Z.acceptsBooleans;
          else {
            var G = J.toLowerCase().slice(0, 5);
            return G !== "data-" && G !== "aria-";
          }
        }
        default:
          return !1;
      }
    }
    function sJ(J, Q, Z, X) {
      if (Q === null || typeof Q === "undefined") return !0;
      if (LZ(J, Q, Z, X)) return !0;
      if (X) return !1;
      if (Z !== null)
        switch (Z.type) {
          case MQ:
            return !Q;
          case rZ:
            return Q === !1;
          case W0:
            return isNaN(Q);
          case c0:
            return isNaN(Q) || Q < 1;
        }
      return !1;
    }
    function qZ(J) {
      return rJ.hasOwnProperty(J) ? rJ[J] : null;
    }
    function mJ(J, Q, Z, X, G, B, U) {
      (this.acceptsBooleans = Q === oZ || Q === MQ || Q === rZ),
        (this.attributeName = X),
        (this.attributeNamespace = G),
        (this.mustUseProperty = Z),
        (this.propertyName = J),
        (this.type = Q),
        (this.sanitizeURL = B),
        (this.removeEmptyString = U);
    }
    var rJ = {},
      e1 = [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style",
      ];
    e1.forEach(function (J) {
      rJ[J] = new mJ(J, pZ, !1, J, null, !1, !1);
    }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (J) {
        var Q = J[0],
          Z = J[1];
        rJ[Q] = new mJ(Q, VZ, !1, Z, null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(
        function (J) {
          rJ[J] = new mJ(J, oZ, !1, J.toLowerCase(), null, !1, !1);
        },
      ),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (J) {
        rJ[J] = new mJ(J, oZ, !1, J, null, !1, !1);
      }),
      [
        "allowFullScreen",
        "async",
        "autoFocus",
        "autoPlay",
        "controls",
        "default",
        "defer",
        "disabled",
        "disablePictureInPicture",
        "disableRemotePlayback",
        "formNoValidate",
        "hidden",
        "loop",
        "noModule",
        "noValidate",
        "open",
        "playsInline",
        "readOnly",
        "required",
        "reversed",
        "scoped",
        "seamless",
        "itemScope",
      ].forEach(function (J) {
        rJ[J] = new mJ(J, MQ, !1, J.toLowerCase(), null, !1, !1);
      }),
      ["checked", "multiple", "muted", "selected"].forEach(function (J) {
        rJ[J] = new mJ(J, MQ, !0, J, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (J) {
        rJ[J] = new mJ(J, rZ, !1, J, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (J) {
        rJ[J] = new mJ(J, c0, !1, J, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (J) {
        rJ[J] = new mJ(J, W0, !1, J.toLowerCase(), null, !1, !1);
      });
    var E1 = /[\-\:]([a-z])/g,
      J4 = function (J) {
        return J[1].toUpperCase();
      };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height",
    ].forEach(function (J) {
      var Q = J.replace(E1, J4);
      rJ[Q] = new mJ(Q, VZ, !1, J, null, !1, !1);
    }),
      [
        "xlink:actuate",
        "xlink:arcrole",
        "xlink:role",
        "xlink:show",
        "xlink:title",
        "xlink:type",
      ].forEach(function (J) {
        var Q = J.replace(E1, J4);
        rJ[Q] = new mJ(Q, VZ, !1, J, "http://www.w3.org/1999/xlink", !1, !1);
      }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (J) {
        var Q = J.replace(E1, J4);
        rJ[Q] = new mJ(
          Q,
          VZ,
          !1,
          J,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1,
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (J) {
        rJ[J] = new mJ(J, VZ, !1, J.toLowerCase(), null, !1, !1);
      });
    var g4 = "xlinkHref";
    (rJ[g4] = new mJ(
      "xlinkHref",
      VZ,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
      ["src", "href", "action", "formAction"].forEach(function (J) {
        rJ[J] = new mJ(J, VZ, !1, J.toLowerCase(), null, !0, !0);
      });
    var u5 =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
      z0 = !1;
    function i0(J) {
      if (!z0 && u5.test(J))
        (z0 = !0),
          M(
            "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",
            JSON.stringify(J),
          );
    }
    function T4(J, Q, Z, X) {
      if (X.mustUseProperty) {
        var G = X.propertyName;
        return J[G];
      } else {
        if ((zQ(Z, Q), X.sanitizeURL)) i0("" + Z);
        var B = X.attributeName,
          U = null;
        if (X.type === rZ) {
          if (J.hasAttribute(B)) {
            var Y = J.getAttribute(B);
            if (Y === "") return !0;
            if (sJ(Q, Z, X, !1)) return Y;
            if (Y === "" + Z) return Z;
            return Y;
          }
        } else if (J.hasAttribute(B)) {
          if (sJ(Q, Z, X, !1)) return J.getAttribute(B);
          if (X.type === MQ) return Z;
          U = J.getAttribute(B);
        }
        if (sJ(Q, Z, X, !1)) return U === null ? Z : U;
        else if (U === "" + Z) return Z;
        else return U;
      }
    }
    function h4(J, Q, Z, X) {
      {
        if (!CQ(Q)) return;
        if (!J.hasAttribute(Q)) return Z === void 0 ? void 0 : null;
        var G = J.getAttribute(Q);
        if ((zQ(Z, Q), G === "" + Z)) return Z;
        return G;
      }
    }
    function Q4(J, Q, Z, X) {
      var G = qZ(Q);
      if (GQ(Q, G, X)) return;
      if (sJ(Q, Z, G, X)) Z = null;
      if (X || G === null) {
        if (CQ(Q)) {
          var B = Q;
          if (Z === null) J.removeAttribute(B);
          else zQ(Z, Q), J.setAttribute(B, "" + Z);
        }
        return;
      }
      var U = G.mustUseProperty;
      if (U) {
        var Y = G.propertyName;
        if (Z === null) {
          var H = G.type;
          J[Y] = H === MQ ? !1 : "";
        } else J[Y] = Z;
        return;
      }
      var { attributeName: W, attributeNamespace: z } = G;
      if (Z === null) J.removeAttribute(W);
      else {
        var j = G.type,
          O;
        if (j === MQ || (j === rZ && Z === !0)) O = "";
        else if ((zQ(Z, W), (O = "" + Z), G.sanitizeURL)) i0(O.toString());
        if (z) J.setAttributeNS(z, W, O);
        else J.setAttribute(W, O);
      }
    }
    var S0 = Symbol.for("react.element"),
      q = Symbol.for("react.portal"),
      w = Symbol.for("react.fragment"),
      N = Symbol.for("react.strict_mode"),
      p = Symbol.for("react.profiler"),
      n = Symbol.for("react.provider"),
      wJ = Symbol.for("react.context"),
      KJ = Symbol.for("react.forward_ref"),
      WJ = Symbol.for("react.suspense"),
      BQ = Symbol.for("react.suspense_list"),
      hJ = Symbol.for("react.memo"),
      jJ = Symbol.for("react.lazy"),
      XZ = Symbol.for("react.scope"),
      C0 = Symbol.for("react.debug_trace_mode"),
      Z4 = Symbol.for("react.offscreen"),
      bZ = Symbol.for("react.legacy_hidden"),
      a9 = Symbol.for("react.cache"),
      p9 = Symbol.for("react.tracing_marker"),
      N7 = Symbol.iterator,
      o9 = "@@iterator";
    function a0(J) {
      if (J === null || typeof J !== "object") return null;
      var Q = (N7 && J[N7]) || J[o9];
      if (typeof Q === "function") return Q;
      return null;
    }
    var MJ = Object.assign,
      R1 = 0,
      d5,
      s5,
      m5,
      y5,
      l5,
      c5,
      i5;
    function b7() {}
    b7.__reactDisabledLog = !0;
    function r9() {
      {
        if (R1 === 0) {
          (d5 = console.log),
            (s5 = console.info),
            (m5 = console.warn),
            (y5 = console.error),
            (l5 = console.group),
            (c5 = console.groupCollapsed),
            (i5 = console.groupEnd);
          var J = { configurable: !0, enumerable: !0, value: b7, writable: !0 };
          Object.defineProperties(console, {
            info: J,
            log: J,
            warn: J,
            error: J,
            group: J,
            groupCollapsed: J,
            groupEnd: J,
          });
        }
        R1++;
      }
    }
    function a5() {
      {
        if ((R1--, R1 === 0)) {
          var J = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: MJ({}, J, { value: d5 }),
            info: MJ({}, J, { value: s5 }),
            warn: MJ({}, J, { value: m5 }),
            error: MJ({}, J, { value: y5 }),
            group: MJ({}, J, { value: l5 }),
            groupCollapsed: MJ({}, J, { value: c5 }),
            groupEnd: MJ({}, J, { value: i5 }),
          });
        }
        if (R1 < 0)
          M(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
          );
      }
    }
    var X4 = SJ.ReactCurrentDispatcher,
      L1;
    function nZ(J, Q, Z) {
      {
        if (L1 === void 0)
          try {
            throw Error();
          } catch (G) {
            var X = G.stack.trim().match(/\n( *(at )?)/);
            L1 = (X && X[1]) || "";
          }
        return "\n" + L1 + J;
      }
    }
    var F1 = !1,
      f4;
    {
      var k7 = typeof WeakMap === "function" ? WeakMap : Map;
      f4 = new k7();
    }
    function p5(J, Q) {
      if (!J || F1) return "";
      {
        var Z = f4.get(J);
        if (Z !== void 0) return Z;
      }
      var X;
      F1 = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      (B = X4.current), (X4.current = null), r9();
      try {
        if (Q) {
          var U = function () {
            throw Error();
          };
          if (
            (Object.defineProperty(U.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect === "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(U, []);
            } catch (P) {
              X = P;
            }
            Reflect.construct(J, [], U);
          } else {
            try {
              U.call();
            } catch (P) {
              X = P;
            }
            J.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            X = P;
          }
          J();
        }
      } catch (P) {
        if (P && X && typeof P.stack === "string") {
          var Y = P.stack.split("\n"),
            H = X.stack.split("\n"),
            W = Y.length - 1,
            z = H.length - 1;
          while (W >= 1 && z >= 0 && Y[W] !== H[z]) z--;
          for (; W >= 1 && z >= 0; W--, z--)
            if (Y[W] !== H[z]) {
              if (W !== 1 || z !== 1)
                do
                  if ((W--, z--, z < 0 || Y[W] !== H[z])) {
                    var j = "\n" + Y[W].replace(" at new ", " at ");
                    if (J.displayName && j.includes("<anonymous>"))
                      j = j.replace("<anonymous>", J.displayName);
                    if (typeof J === "function") f4.set(J, j);
                    return j;
                  }
                while (W >= 1 && z >= 0);
              break;
            }
        }
      } finally {
        (F1 = !1), (X4.current = B), a5(), (Error.prepareStackTrace = G);
      }
      var O = J ? J.displayName || J.name : "",
        E = O ? nZ(O) : "";
      if (typeof J === "function") f4.set(J, E);
      return E;
    }
    function n9(J, Q, Z) {
      return p5(J, !0);
    }
    function I1(J, Q, Z) {
      return p5(J, !1);
    }
    function g7(J) {
      var Q = J.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function u4(J, Q, Z) {
      if (J == null) return "";
      if (typeof J === "function") return p5(J, g7(J));
      if (typeof J === "string") return nZ(J);
      switch (J) {
        case WJ:
          return nZ("Suspense");
        case BQ:
          return nZ("SuspenseList");
      }
      if (typeof J === "object")
        switch (J.$$typeof) {
          case KJ:
            return I1(J.render);
          case hJ:
            return u4(J.type, Q, Z);
          case jJ: {
            var X = J,
              G = X._payload,
              B = X._init;
            try {
              return u4(B(G), Q, Z);
            } catch (U) {}
          }
        }
      return "";
    }
    function d4(J) {
      var Q = J._debugOwner ? J._debugOwner.type : null,
        Z = J._debugSource;
      switch (J.tag) {
        case l:
          return nZ(J.type);
        case Y0:
          return nZ("Lazy");
        case PJ:
          return nZ("Suspense");
        case $Q:
          return nZ("SuspenseList");
        case HJ:
        case ZQ:
        case xJ:
          return I1(J.type);
        case JJ:
          return I1(J.type.render);
        case a:
          return n9(J.type);
        default:
          return "";
      }
    }
    function T7(J) {
      try {
        var Q = "",
          Z = J;
        do (Q += d4(Z)), (Z = Z.return);
        while (Z);
        return Q;
      } catch (X) {
        return "\nError generating stack: " + X.message + "\n" + X.stack;
      }
    }
    function x1(J, Q, Z) {
      var X = J.displayName;
      if (X) return X;
      var G = Q.displayName || Q.name || "";
      return G !== "" ? Z + "(" + G + ")" : Z;
    }
    function o5(J) {
      return J.displayName || "Context";
    }
    function fJ(J) {
      if (J == null) return null;
      if (typeof J.tag === "number")
        M(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.This is likely a bug in React. Please file an issue.",
        );
      if (typeof J === "function") return J.displayName || J.name || null;
      if (typeof J === "string") return J;
      switch (J) {
        case w:
          return "Fragment";
        case q:
          return "Portal";
        case p:
          return "Profiler";
        case N:
          return "StrictMode";
        case WJ:
          return "Suspense";
        case BQ:
          return "SuspenseList";
      }
      if (typeof J === "object")
        switch (J.$$typeof) {
          case wJ:
            var Q = J;
            return o5(Q) + ".Consumer";
          case n:
            var Z = J;
            return o5(Z._context) + ".Provider";
          case KJ:
            return x1(J, J.render, "ForwardRef");
          case hJ:
            var X = J.displayName || null;
            if (X !== null) return X;
            return fJ(J.type) || "Memo";
          case jJ: {
            var G = J,
              B = G._payload,
              U = G._init;
            try {
              return fJ(U(B));
            } catch (Y) {
              return null;
            }
          }
        }
      return null;
    }
    function t9(J, Q, Z) {
      var X = Q.displayName || Q.name || "";
      return J.displayName || (X !== "" ? Z + "(" + X + ")" : Z);
    }
    function h7(J) {
      return J.displayName || "Context";
    }
    function YJ(J) {
      var { tag: Q, type: Z } = J;
      switch (Q) {
        case e:
          return "Cache";
        case TQ:
          var X = Z;
          return h7(X) + ".Consumer";
        case IJ:
          var G = Z;
          return h7(G._context) + ".Provider";
        case SQ:
          return "DehydratedFragment";
        case JJ:
          return t9(Z, Z.render, "ForwardRef");
        case yZ:
          return "Fragment";
        case l:
          return Z;
        case OJ:
          return "Portal";
        case s:
          return "Root";
        case FJ:
          return "Text";
        case Y0:
          return fJ(Z);
        case U0:
          if (Z === N) return "StrictMode";
          return "Mode";
        case QJ:
          return "Offscreen";
        case oJ:
          return "Profiler";
        case uJ:
          return "Scope";
        case PJ:
          return "Suspense";
        case $Q:
          return "SuspenseList";
        case WZ:
          return "TracingMarker";
        case a:
        case HJ:
        case XQ:
        case ZQ:
        case WQ:
        case xJ:
          if (typeof Z === "function") return Z.displayName || Z.name || null;
          if (typeof Z === "string") return Z;
          break;
      }
      return null;
    }
    var f7 = SJ.ReactDebugCurrentFrame,
      GZ = null,
      w1 = !1;
    function _1() {
      {
        if (GZ === null) return null;
        var J = GZ._debugOwner;
        if (J !== null && typeof J !== "undefined") return YJ(J);
      }
      return null;
    }
    function e9() {
      {
        if (GZ === null) return "";
        return T7(GZ);
      }
    }
    function vQ() {
      (f7.getCurrentStack = null), (GZ = null), (w1 = !1);
    }
    function eJ(J) {
      (f7.getCurrentStack = J === null ? null : e9), (GZ = J), (w1 = !1);
    }
    function JX() {
      return GZ;
    }
    function tZ(J) {
      w1 = J;
    }
    function FZ(J) {
      return "" + J;
    }
    function M0(J) {
      switch (typeof J) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return J;
        case "object":
          return ZZ(J), J;
        default:
          return "";
      }
    }
    var s4 = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0,
    };
    function r5(J, Q) {
      {
        if (
          !(
            s4[Q.type] ||
            Q.onChange ||
            Q.onInput ||
            Q.readOnly ||
            Q.disabled ||
            Q.value == null
          )
        )
          M(
            "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.",
          );
        if (!(Q.onChange || Q.readOnly || Q.disabled || Q.checked == null))
          M(
            "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.",
          );
      }
    }
    function p0(J) {
      var { type: Q, nodeName: Z } = J;
      return (
        Z && Z.toLowerCase() === "input" && (Q === "checkbox" || Q === "radio")
      );
    }
    function n5(J) {
      return J._valueTracker;
    }
    function QX(J) {
      J._valueTracker = null;
    }
    function m4(J) {
      var Q = "";
      if (!J) return Q;
      if (p0(J)) Q = J.checked ? "true" : "false";
      else Q = J.value;
      return Q;
    }
    function t5(J) {
      var Q = p0(J) ? "checked" : "value",
        Z = Object.getOwnPropertyDescriptor(J.constructor.prototype, Q);
      ZZ(J[Q]);
      var X = "" + J[Q];
      if (
        J.hasOwnProperty(Q) ||
        typeof Z === "undefined" ||
        typeof Z.get !== "function" ||
        typeof Z.set !== "function"
      )
        return;
      var { get: G, set: B } = Z;
      Object.defineProperty(J, Q, {
        configurable: !0,
        get: function () {
          return G.call(this);
        },
        set: function (Y) {
          ZZ(Y), (X = "" + Y), B.call(this, Y);
        },
      }),
        Object.defineProperty(J, Q, { enumerable: Z.enumerable });
      var U = {
        getValue: function () {
          return X;
        },
        setValue: function (Y) {
          ZZ(Y), (X = "" + Y);
        },
        stopTracking: function () {
          QX(J), delete J[Q];
        },
      };
      return U;
    }
    function S1(J) {
      if (n5(J)) return;
      J._valueTracker = t5(J);
    }
    function y4(J) {
      if (!J) return !1;
      var Q = n5(J);
      if (!Q) return !0;
      var Z = Q.getValue(),
        X = m4(J);
      if (X !== Z) return Q.setValue(X), !0;
      return !1;
    }
    function l4(J) {
      if (
        ((J = J || (typeof document !== "undefined" ? document : void 0)),
        typeof J === "undefined")
      )
        return null;
      try {
        return J.activeElement || J.body;
      } catch (Q) {
        return J.body;
      }
    }
    var u7 = !1,
      d7 = !1,
      s7 = !1,
      K = !1;
    function V(J) {
      var Q = J.type === "checkbox" || J.type === "radio";
      return Q ? J.checked != null : J.value != null;
    }
    function A(J, Q) {
      var Z = J,
        X = Q.checked,
        G = MJ({}, Q, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: X != null ? X : Z._wrapperState.initialChecked,
        });
      return G;
    }
    function L(J, Q) {
      {
        if (
          (r5("input", Q),
          Q.checked !== void 0 && Q.defaultChecked !== void 0 && !d7)
        )
          M(
            "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-componentsInput elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
            _1() || "A component",
            Q.type,
          ),
            (d7 = !0);
        if (Q.value !== void 0 && Q.defaultValue !== void 0 && !u7)
          M(
            "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
            _1() || "A component",
            Q.type,
          ),
            (u7 = !0);
      }
      var Z = J,
        X = Q.defaultValue == null ? "" : Q.defaultValue;
      Z._wrapperState = {
        initialChecked: Q.checked != null ? Q.checked : Q.defaultChecked,
        initialValue: M0(Q.value != null ? Q.value : X),
        controlled: V(Q),
      };
    }
    function S(J, Q) {
      var Z = J,
        X = Q.checked;
      if (X != null) Q4(Z, "checked", X, !1);
    }
    function i(J, Q) {
      var Z = J;
      {
        var X = V(Q);
        if (!Z._wrapperState.controlled && X && !K)
          M(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components",
          ),
            (K = !0);
        if (Z._wrapperState.controlled && !X && !s7)
          M(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components",
          ),
            (s7 = !0);
      }
      S(J, Q);
      var G = M0(Q.value),
        B = Q.type;
      if (G != null) {
        if (B === "number") {
          if ((G === 0 && Z.value === "") || Z.value != G) Z.value = FZ(G);
        } else if (Z.value !== FZ(G)) Z.value = FZ(G);
      } else if (B === "submit" || B === "reset") {
        Z.removeAttribute("value");
        return;
      }
      if (Q.hasOwnProperty("value")) bJ(Z, Q.type, G);
      else if (Q.hasOwnProperty("defaultValue"))
        bJ(Z, Q.type, M0(Q.defaultValue));
      if (Q.checked == null && Q.defaultChecked != null)
        Z.defaultChecked = !!Q.defaultChecked;
    }
    function u(J, Q, Z) {
      var X = J;
      if (Q.hasOwnProperty("value") || Q.hasOwnProperty("defaultValue")) {
        var G = Q.type,
          B = G === "submit" || G === "reset";
        if (B && (Q.value === void 0 || Q.value === null)) return;
        var U = FZ(X._wrapperState.initialValue);
        if (!Z) {
          if (U !== X.value) X.value = U;
        }
        X.defaultValue = U;
      }
      var Y = X.name;
      if (Y !== "") X.name = "";
      if (
        ((X.defaultChecked = !X.defaultChecked),
        (X.defaultChecked = !!X._wrapperState.initialChecked),
        Y !== "")
      )
        X.name = Y;
    }
    function BJ(J, Q) {
      var Z = J;
      i(Z, Q), AJ(Z, Q);
    }
    function AJ(J, Q) {
      var Z = Q.name;
      if (Q.type === "radio" && Z != null) {
        var X = J;
        while (X.parentNode) X = X.parentNode;
        zQ(Z, "name");
        var G = X.querySelectorAll(
          "input[name=" + JSON.stringify("" + Z) + '][type="radio"]',
        );
        for (var B = 0; B < G.length; B++) {
          var U = G[B];
          if (U === J || U.form !== J.form) continue;
          var Y = S8(U);
          if (!Y)
            throw new Error(
              "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.",
            );
          y4(U), i(U, Y);
        }
      }
    }
    function bJ(J, Q, Z) {
      if (Q !== "number" || l4(J.ownerDocument) !== J) {
        if (Z == null) J.defaultValue = FZ(J._wrapperState.initialValue);
        else if (J.defaultValue !== FZ(Z)) J.defaultValue = FZ(Z);
      }
    }
    var yJ = !1,
      lJ = !1,
      aJ = !1;
    function JQ(J, Q) {
      {
        if (Q.value == null) {
          if (typeof Q.children === "object" && Q.children !== null)
            NJ.Children.forEach(Q.children, function (Z) {
              if (Z == null) return;
              if (typeof Z === "string" || typeof Z === "number") return;
              if (!lJ)
                (lJ = !0),
                  M(
                    "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.",
                  );
            });
          else if (Q.dangerouslySetInnerHTML != null) {
            if (!aJ)
              (aJ = !0),
                M(
                  "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.",
                );
          }
        }
        if (Q.selected != null && !yJ)
          M(
            "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.",
          ),
            (yJ = !0);
      }
    }
    function PQ(J, Q) {
      if (Q.value != null) J.setAttribute("value", FZ(M0(Q.value)));
    }
    var c4 = Array.isArray;
    function AQ(J) {
      return c4(J);
    }
    var e5 = !1;
    function m7() {
      var J = _1();
      if (J) return "\n\nCheck the render method of `" + J + "`.";
      return "";
    }
    var J6 = ["value", "defaultValue"];
    function ZX(J) {
      {
        r5("select", J);
        for (var Q = 0; Q < J6.length; Q++) {
          var Z = J6[Q];
          if (J[Z] == null) continue;
          var X = AQ(J[Z]);
          if (J.multiple && !X)
            M(
              "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
              Z,
              m7(),
            );
          else if (!J.multiple && X)
            M(
              "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
              Z,
              m7(),
            );
        }
      }
    }
    function o0(J, Q, Z, X) {
      var G = J.options;
      if (Q) {
        var B = Z,
          U = {};
        for (var Y = 0; Y < B.length; Y++) U["$" + B[Y]] = !0;
        for (var H = 0; H < G.length; H++) {
          var W = U.hasOwnProperty("$" + G[H].value);
          if (G[H].selected !== W) G[H].selected = W;
          if (W && X) G[H].defaultSelected = !0;
        }
      } else {
        var z = FZ(M0(Z)),
          j = null;
        for (var O = 0; O < G.length; O++) {
          if (G[O].value === z) {
            if (((G[O].selected = !0), X)) G[O].defaultSelected = !0;
            return;
          }
          if (j === null && !G[O].disabled) j = G[O];
        }
        if (j !== null) j.selected = !0;
      }
    }
    function Q6(J, Q) {
      return MJ({}, Q, { value: void 0 });
    }
    function BY(J, Q) {
      var Z = J;
      if (
        (ZX(Q),
        (Z._wrapperState = { wasMultiple: !!Q.multiple }),
        Q.value !== void 0 && Q.defaultValue !== void 0 && !e5)
      )
        M(
          "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
        ),
          (e5 = !0);
    }
    function R3(J, Q) {
      var Z = J;
      Z.multiple = !!Q.multiple;
      var X = Q.value;
      if (X != null) o0(Z, !!Q.multiple, X, !1);
      else if (Q.defaultValue != null) o0(Z, !!Q.multiple, Q.defaultValue, !0);
    }
    function L3(J, Q) {
      var Z = J,
        X = Z._wrapperState.wasMultiple;
      Z._wrapperState.wasMultiple = !!Q.multiple;
      var G = Q.value;
      if (G != null) o0(Z, !!Q.multiple, G, !1);
      else if (X !== !!Q.multiple)
        if (Q.defaultValue != null) o0(Z, !!Q.multiple, Q.defaultValue, !0);
        else o0(Z, !!Q.multiple, Q.multiple ? [] : "", !1);
    }
    function F3(J, Q) {
      var Z = J,
        X = Q.value;
      if (X != null) o0(Z, !!Q.multiple, X, !1);
    }
    var UY = !1;
    function XX(J, Q) {
      var Z = J;
      if (Q.dangerouslySetInnerHTML != null)
        throw new Error(
          "`dangerouslySetInnerHTML` does not make sense on <textarea>.",
        );
      var X = MJ({}, Q, {
        value: void 0,
        defaultValue: void 0,
        children: FZ(Z._wrapperState.initialValue),
      });
      return X;
    }
    function YY(J, Q) {
      var Z = J;
      if (
        (r5("textarea", Q),
        Q.value !== void 0 && Q.defaultValue !== void 0 && !UY)
      )
        M(
          "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",
          _1() || "A component",
        ),
          (UY = !0);
      var X = Q.value;
      if (X == null) {
        var { children: G, defaultValue: B } = Q;
        if (G != null) {
          M(
            "Use the `defaultValue` or `value` props instead of setting children on <textarea>.",
          );
          {
            if (B != null)
              throw new Error(
                "If you supply `defaultValue` on a <textarea>, do not pass children.",
              );
            if (AQ(G)) {
              if (G.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              G = G[0];
            }
            B = G;
          }
        }
        if (B == null) B = "";
        X = B;
      }
      Z._wrapperState = { initialValue: M0(X) };
    }
    function HY(J, Q) {
      var Z = J,
        X = M0(Q.value),
        G = M0(Q.defaultValue);
      if (X != null) {
        var B = FZ(X);
        if (B !== Z.value) Z.value = B;
        if (Q.defaultValue == null && Z.defaultValue !== B) Z.defaultValue = B;
      }
      if (G != null) Z.defaultValue = FZ(G);
    }
    function KY(J, Q) {
      var Z = J,
        X = Z.textContent;
      if (X === Z._wrapperState.initialValue) {
        if (X !== "" && X !== null) Z.value = X;
      }
    }
    function I3(J, Q) {
      HY(J, Q);
    }
    var r0 = "http://www.w3.org/1999/xhtml",
      x3 = "http://www.w3.org/1998/Math/MathML",
      GX = "http://www.w3.org/2000/svg";
    function BX(J) {
      switch (J) {
        case "svg":
          return GX;
        case "math":
          return x3;
        default:
          return r0;
      }
    }
    function UX(J, Q) {
      if (J == null || J === r0) return BX(Q);
      if (J === GX && Q === "foreignObject") return r0;
      return J;
    }
    var w3 = function (J) {
        if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction)
          return function (Q, Z, X, G) {
            MSApp.execUnsafeLocalFunction(function () {
              return J(Q, Z, X, G);
            });
          };
        else return J;
      },
      y7,
      WY = w3(function (J, Q) {
        if (J.namespaceURI === GX) {
          if (!("innerHTML" in J)) {
            (y7 = y7 || document.createElement("div")),
              (y7.innerHTML = "<svg>" + Q.valueOf().toString() + "</svg>");
            var Z = y7.firstChild;
            while (J.firstChild) J.removeChild(J.firstChild);
            while (Z.firstChild) J.appendChild(Z.firstChild);
            return;
          }
        }
        J.innerHTML = Q;
      }),
      IZ = 1,
      n0 = 3,
      VQ = 8,
      t0 = 9,
      YX = 11,
      l7 = function (J, Q) {
        if (Q) {
          var Z = J.firstChild;
          if (Z && Z === J.lastChild && Z.nodeType === n0) {
            Z.nodeValue = Q;
            return;
          }
        }
        J.textContent = Q;
      },
      _3 = {
        animation: [
          "animationDelay",
          "animationDirection",
          "animationDuration",
          "animationFillMode",
          "animationIterationCount",
          "animationName",
          "animationPlayState",
          "animationTimingFunction",
        ],
        background: [
          "backgroundAttachment",
          "backgroundClip",
          "backgroundColor",
          "backgroundImage",
          "backgroundOrigin",
          "backgroundPositionX",
          "backgroundPositionY",
          "backgroundRepeat",
          "backgroundSize",
        ],
        backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
        border: [
          "borderBottomColor",
          "borderBottomStyle",
          "borderBottomWidth",
          "borderImageOutset",
          "borderImageRepeat",
          "borderImageSlice",
          "borderImageSource",
          "borderImageWidth",
          "borderLeftColor",
          "borderLeftStyle",
          "borderLeftWidth",
          "borderRightColor",
          "borderRightStyle",
          "borderRightWidth",
          "borderTopColor",
          "borderTopStyle",
          "borderTopWidth",
        ],
        borderBlockEnd: [
          "borderBlockEndColor",
          "borderBlockEndStyle",
          "borderBlockEndWidth",
        ],
        borderBlockStart: [
          "borderBlockStartColor",
          "borderBlockStartStyle",
          "borderBlockStartWidth",
        ],
        borderBottom: [
          "borderBottomColor",
          "borderBottomStyle",
          "borderBottomWidth",
        ],
        borderColor: [
          "borderBottomColor",
          "borderLeftColor",
          "borderRightColor",
          "borderTopColor",
        ],
        borderImage: [
          "borderImageOutset",
          "borderImageRepeat",
          "borderImageSlice",
          "borderImageSource",
          "borderImageWidth",
        ],
        borderInlineEnd: [
          "borderInlineEndColor",
          "borderInlineEndStyle",
          "borderInlineEndWidth",
        ],
        borderInlineStart: [
          "borderInlineStartColor",
          "borderInlineStartStyle",
          "borderInlineStartWidth",
        ],
        borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
        borderRadius: [
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
          "borderTopLeftRadius",
          "borderTopRightRadius",
        ],
        borderRight: [
          "borderRightColor",
          "borderRightStyle",
          "borderRightWidth",
        ],
        borderStyle: [
          "borderBottomStyle",
          "borderLeftStyle",
          "borderRightStyle",
          "borderTopStyle",
        ],
        borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
        borderWidth: [
          "borderBottomWidth",
          "borderLeftWidth",
          "borderRightWidth",
          "borderTopWidth",
        ],
        columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
        columns: ["columnCount", "columnWidth"],
        flex: ["flexBasis", "flexGrow", "flexShrink"],
        flexFlow: ["flexDirection", "flexWrap"],
        font: [
          "fontFamily",
          "fontFeatureSettings",
          "fontKerning",
          "fontLanguageOverride",
          "fontSize",
          "fontSizeAdjust",
          "fontStretch",
          "fontStyle",
          "fontVariant",
          "fontVariantAlternates",
          "fontVariantCaps",
          "fontVariantEastAsian",
          "fontVariantLigatures",
          "fontVariantNumeric",
          "fontVariantPosition",
          "fontWeight",
          "lineHeight",
        ],
        fontVariant: [
          "fontVariantAlternates",
          "fontVariantCaps",
          "fontVariantEastAsian",
          "fontVariantLigatures",
          "fontVariantNumeric",
          "fontVariantPosition",
        ],
        gap: ["columnGap", "rowGap"],
        grid: [
          "gridAutoColumns",
          "gridAutoFlow",
          "gridAutoRows",
          "gridTemplateAreas",
          "gridTemplateColumns",
          "gridTemplateRows",
        ],
        gridArea: [
          "gridColumnEnd",
          "gridColumnStart",
          "gridRowEnd",
          "gridRowStart",
        ],
        gridColumn: ["gridColumnEnd", "gridColumnStart"],
        gridColumnGap: ["columnGap"],
        gridGap: ["columnGap", "rowGap"],
        gridRow: ["gridRowEnd", "gridRowStart"],
        gridRowGap: ["rowGap"],
        gridTemplate: [
          "gridTemplateAreas",
          "gridTemplateColumns",
          "gridTemplateRows",
        ],
        listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
        margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
        marker: ["markerEnd", "markerMid", "markerStart"],
        mask: [
          "maskClip",
          "maskComposite",
          "maskImage",
          "maskMode",
          "maskOrigin",
          "maskPositionX",
          "maskPositionY",
          "maskRepeat",
          "maskSize",
        ],
        maskPosition: ["maskPositionX", "maskPositionY"],
        outline: ["outlineColor", "outlineStyle", "outlineWidth"],
        overflow: ["overflowX", "overflowY"],
        padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
        placeContent: ["alignContent", "justifyContent"],
        placeItems: ["alignItems", "justifyItems"],
        placeSelf: ["alignSelf", "justifySelf"],
        textDecoration: [
          "textDecorationColor",
          "textDecorationLine",
          "textDecorationStyle",
        ],
        textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
        transition: [
          "transitionDelay",
          "transitionDuration",
          "transitionProperty",
          "transitionTimingFunction",
        ],
        wordWrap: ["overflowWrap"],
      },
      Z6 = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      };
    function S3(J, Q) {
      return J + Q.charAt(0).toUpperCase() + Q.substring(1);
    }
    var C3 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Z6).forEach(function (J) {
      C3.forEach(function (Q) {
        Z6[S3(Q, J)] = Z6[J];
      });
    });
    function HX(J, Q, Z) {
      var X = Q == null || typeof Q === "boolean" || Q === "";
      if (X) return "";
      if (
        !Z &&
        typeof Q === "number" &&
        Q !== 0 &&
        !(Z6.hasOwnProperty(J) && Z6[J])
      )
        return Q + "px";
      return A1(Q, J), ("" + Q).trim();
    }
    var v3 = /([A-Z])/g,
      N3 = /^ms-/;
    function b3(J) {
      return J.replace(v3, "-$1").toLowerCase().replace(N3, "-ms-");
    }
    var zY = function () {};
    {
      var k3 = /^(?:webkit|moz|o)[A-Z]/,
        g3 = /^-ms-/,
        T3 = /-(.)/g,
        MY = /;\s*$/,
        i4 = {},
        KX = {},
        VY = !1,
        qY = !1,
        h3 = function (J) {
          return J.replace(T3, function (Q, Z) {
            return Z.toUpperCase();
          });
        },
        f3 = function (J) {
          if (i4.hasOwnProperty(J) && i4[J]) return;
          (i4[J] = !0),
            M(
              "Unsupported style property %s. Did you mean %s?",
              J,
              h3(J.replace(g3, "ms-")),
            );
        },
        u3 = function (J) {
          if (i4.hasOwnProperty(J) && i4[J]) return;
          (i4[J] = !0),
            M(
              "Unsupported vendor-prefixed style property %s. Did you mean %s?",
              J,
              J.charAt(0).toUpperCase() + J.slice(1),
            );
        },
        d3 = function (J, Q) {
          if (KX.hasOwnProperty(Q) && KX[Q]) return;
          (KX[Q] = !0),
            M(
              `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.Try "%s: %s" instead.`,
              J,
              Q.replace(MY, ""),
            );
        },
        s3 = function (J, Q) {
          if (VY) return;
          (VY = !0),
            M("`NaN` is an invalid value for the `%s` css style property.", J);
        },
        m3 = function (J, Q) {
          if (qY) return;
          (qY = !0),
            M(
              "`Infinity` is an invalid value for the `%s` css style property.",
              J,
            );
        };
      zY = function (J, Q) {
        if (J.indexOf("-") > -1) f3(J);
        else if (k3.test(J)) u3(J);
        else if (MY.test(Q)) d3(J, Q);
        if (typeof Q === "number") {
          if (isNaN(Q)) s3(J, Q);
          else if (!isFinite(Q)) m3(J, Q);
        }
      };
    }
    var y3 = zY;
    function l3(J) {
      {
        var Q = "",
          Z = "";
        for (var X in J) {
          if (!J.hasOwnProperty(X)) continue;
          var G = J[X];
          if (G != null) {
            var B = X.indexOf("--") === 0;
            (Q += Z + (B ? X : b3(X)) + ":"), (Q += HX(X, G, B)), (Z = ";");
          }
        }
        return Q || null;
      }
    }
    function OY(J, Q) {
      var Z = J.style;
      for (var X in Q) {
        if (!Q.hasOwnProperty(X)) continue;
        var G = X.indexOf("--") === 0;
        if (!G) y3(X, Q[X]);
        var B = HX(X, Q[X], G);
        if (X === "float") X = "cssFloat";
        if (G) Z.setProperty(X, B);
        else Z[X] = B;
      }
    }
    function c3(J) {
      return J == null || typeof J === "boolean" || J === "";
    }
    function jY(J) {
      var Q = {};
      for (var Z in J) {
        var X = _3[Z] || [Z];
        for (var G = 0; G < X.length; G++) Q[X[G]] = Z;
      }
      return Q;
    }
    function i3(J, Q) {
      {
        if (!Q) return;
        var Z = jY(J),
          X = jY(Q),
          G = {};
        for (var B in Z) {
          var U = Z[B],
            Y = X[B];
          if (Y && U !== Y) {
            var H = U + "," + Y;
            if (G[H]) continue;
            (G[H] = !0),
              M(
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                c3(J[U]) ? "Removing" : "Updating",
                U,
                Y,
              );
          }
        }
      }
    }
    var a3 = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
      p3 = MJ({ menuitem: !0 }, a3),
      o3 = "__html";
    function WX(J, Q) {
      if (!Q) return;
      if (p3[J]) {
        if (Q.children != null || Q.dangerouslySetInnerHTML != null)
          throw new Error(
            J +
              " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.",
          );
      }
      if (Q.dangerouslySetInnerHTML != null) {
        if (Q.children != null)
          throw new Error(
            "Can only set one of `children` or `props.dangerouslySetInnerHTML`.",
          );
        if (
          typeof Q.dangerouslySetInnerHTML !== "object" ||
          !(o3 in Q.dangerouslySetInnerHTML)
        )
          throw new Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.",
          );
      }
      if (
        !Q.suppressContentEditableWarning &&
        Q.contentEditable &&
        Q.children != null
      )
        M(
          "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.",
        );
      if (Q.style != null && typeof Q.style !== "object")
        throw new Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.",
        );
    }
    function G4(J, Q) {
      if (J.indexOf("-") === -1) return typeof Q.is === "string";
      switch (J) {
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
    var c7 = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan",
      },
      DY = {
        "aria-current": 0,
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0,
      },
      a4 = {},
      r3 = new RegExp("^(aria)-[" + m + "]*$"),
      n3 = new RegExp("^(aria)[A-Z][" + m + "]*$");
    function t3(J, Q) {
      {
        if (uQ.call(a4, Q) && a4[Q]) return !0;
        if (n3.test(Q)) {
          var Z = "aria-" + Q.slice(4).toLowerCase(),
            X = DY.hasOwnProperty(Z) ? Z : null;
          if (X == null)
            return (
              M(
                "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
                Q,
              ),
              (a4[Q] = !0),
              !0
            );
          if (Q !== X)
            return (
              M("Invalid ARIA attribute `%s`. Did you mean `%s`?", Q, X),
              (a4[Q] = !0),
              !0
            );
        }
        if (r3.test(Q)) {
          var G = Q.toLowerCase(),
            B = DY.hasOwnProperty(G) ? G : null;
          if (B == null) return (a4[Q] = !0), !1;
          if (Q !== B)
            return (
              M("Unknown ARIA attribute `%s`. Did you mean `%s`?", Q, B),
              (a4[Q] = !0),
              !0
            );
        }
      }
      return !0;
    }
    function e3(J, Q) {
      {
        var Z = [];
        for (var X in Q) {
          var G = t3(J, X);
          if (!G) Z.push(X);
        }
        var B = Z.map(function (U) {
          return "`" + U + "`";
        }).join(", ");
        if (Z.length === 1)
          M(
            "Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-propsFor details, see https://reactjs.org/link/invalid-aria-props",
            B,
            J,
          );
        else if (Z.length > 1)
          M(
            "Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
            B,
            J,
          );
      }
    }
    function JM(J, Q) {
      if (G4(J, Q)) return;
      e3(J, Q);
    }
    var $Y = !1;
    function QM(J, Q) {
      {
        if (J !== "input" && J !== "textarea" && J !== "select") return;
        if (Q != null && Q.value === null && !$Y)
          if ((($Y = !0), J === "select" && Q.multiple))
            M(
              "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
              J,
            );
          else
            M(
              "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
              J,
            );
      }
    }
    var PY = function () {};
    {
      var OZ = {},
        AY = /^on./,
        ZM = /^on[^A-Z]/,
        XM = new RegExp("^(aria)-[" + m + "]*$"),
        GM = new RegExp("^(aria)[A-Z][" + m + "]*$");
      PY = function (J, Q, Z, X) {
        if (uQ.call(OZ, Q) && OZ[Q]) return !0;
        var G = Q.toLowerCase();
        if (G === "onfocusin" || G === "onfocusout")
          return (
            M(
              "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.",
            ),
            (OZ[Q] = !0),
            !0
          );
        if (X != null) {
          var {
            registrationNameDependencies: B,
            possibleRegistrationNames: U,
          } = X;
          if (B.hasOwnProperty(Q)) return !0;
          var Y = U.hasOwnProperty(G) ? U[G] : null;
          if (Y != null)
            return (
              M(
                "Invalid event handler property `%s`. Did you mean `%s`?",
                Q,
                Y,
              ),
              (OZ[Q] = !0),
              !0
            );
          if (AY.test(Q))
            return (
              M("Unknown event handler property `%s`. It will be ignored.", Q),
              (OZ[Q] = !0),
              !0
            );
        } else if (AY.test(Q)) {
          if (ZM.test(Q))
            M(
              "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
              Q,
            );
          return (OZ[Q] = !0), !0;
        }
        if (XM.test(Q) || GM.test(Q)) return !0;
        if (G === "innerhtml")
          return (
            M(
              "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.",
            ),
            (OZ[Q] = !0),
            !0
          );
        if (G === "aria")
          return (
            M(
              "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.",
            ),
            (OZ[Q] = !0),
            !0
          );
        if (G === "is" && Z !== null && Z !== void 0 && typeof Z !== "string")
          return (
            M(
              "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
              typeof Z,
            ),
            (OZ[Q] = !0),
            !0
          );
        if (typeof Z === "number" && isNaN(Z))
          return (
            M(
              "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
              Q,
            ),
            (OZ[Q] = !0),
            !0
          );
        var H = qZ(Q),
          W = H !== null && H.type === pZ;
        if (c7.hasOwnProperty(G)) {
          var z = c7[G];
          if (z !== Q)
            return (
              M("Invalid DOM property `%s`. Did you mean `%s`?", Q, z),
              (OZ[Q] = !0),
              !0
            );
        } else if (!W && Q !== G)
          return (
            M(
              "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
              Q,
              G,
            ),
            (OZ[Q] = !0),
            !0
          );
        if (typeof Z === "boolean" && LZ(Q, Z, H, !1)) {
          if (Z)
            M(
              'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
              Z,
              Q,
              Q,
              Z,
              Q,
            );
          else
            M(
              'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
              Z,
              Q,
              Q,
              Z,
              Q,
              Q,
              Q,
            );
          return (OZ[Q] = !0), !0;
        }
        if (W) return !0;
        if (LZ(Q, Z, H, !1)) return (OZ[Q] = !0), !1;
        if ((Z === "false" || Z === "true") && H !== null && H.type === MQ)
          return (
            M(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              Z,
              Q,
              Z === "false"
                ? "The browser will interpret it as a truthy value."
                : 'Although this works, it will not work as expected if you pass the string "false".',
              Q,
              Z,
            ),
            (OZ[Q] = !0),
            !0
          );
        return !0;
      };
    }
    var BM = function (J, Q, Z) {
      {
        var X = [];
        for (var G in Q) {
          var B = PY(J, G, Q[G], Z);
          if (!B) X.push(G);
        }
        var U = X.map(function (Y) {
          return "`" + Y + "`";
        }).join(", ");
        if (X.length === 1)
          M(
            "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
            U,
            J,
          );
        else if (X.length > 1)
          M(
            "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
            U,
            J,
          );
      }
    };
    function UM(J, Q, Z) {
      if (G4(J, Q)) return;
      BM(J, Q, Z);
    }
    var EY = 1,
      zX = 1 << 1,
      X6 = 1 << 2,
      YM = EY | zX | X6,
      G6 = null;
    function HM(J) {
      if (G6 !== null)
        M(
          "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.",
        );
      G6 = J;
    }
    function KM() {
      if (G6 === null)
        M(
          "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.",
        );
      G6 = null;
    }
    function WM(J) {
      return J === G6;
    }
    function MX(J) {
      var Q = J.target || J.srcElement || window;
      if (Q.correspondingUseElement) Q = Q.correspondingUseElement;
      return Q.nodeType === n0 ? Q.parentNode : Q;
    }
    var VX = null,
      p4 = null,
      o4 = null;
    function RY(J) {
      var Q = h1(J);
      if (!Q) return;
      if (typeof VX !== "function")
        throw new Error(
          "setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.",
        );
      var Z = Q.stateNode;
      if (Z) {
        var X = S8(Z);
        VX(Q.stateNode, Q.type, X);
      }
    }
    function zM(J) {
      VX = J;
    }
    function LY(J) {
      if (p4)
        if (o4) o4.push(J);
        else o4 = [J];
      else p4 = J;
    }
    function MM() {
      return p4 !== null || o4 !== null;
    }
    function FY() {
      if (!p4) return;
      var J = p4,
        Q = o4;
      if (((p4 = null), (o4 = null), RY(J), Q))
        for (var Z = 0; Z < Q.length; Z++) RY(Q[Z]);
    }
    var IY = function (J, Q) {
        return J(Q);
      },
      xY = function () {},
      qX = !1;
    function VM() {
      var J = MM();
      if (J) xY(), FY();
    }
    function wY(J, Q, Z) {
      if (qX) return J(Q, Z);
      qX = !0;
      try {
        return IY(J, Q, Z);
      } finally {
        (qX = !1), VM();
      }
    }
    function qM(J, Q, Z) {
      (IY = J), (xY = Z);
    }
    function OM(J) {
      return (
        J === "button" || J === "input" || J === "select" || J === "textarea"
      );
    }
    function jM(J, Q, Z) {
      switch (J) {
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
          return !!(Z.disabled && OM(Q));
        default:
          return !1;
      }
    }
    function B6(J, Q) {
      var Z = J.stateNode;
      if (Z === null) return null;
      var X = S8(Z);
      if (X === null) return null;
      var G = X[Q];
      if (jM(Q, J.type, X)) return null;
      if (G && typeof G !== "function")
        throw new Error(
          "Expected `" +
            Q +
            "` listener to be a function, instead got a value of `" +
            typeof G +
            "` type.",
        );
      return G;
    }
    var OX = !1;
    if (fQ)
      try {
        var U6 = {};
        Object.defineProperty(U6, "passive", {
          get: function () {
            OX = !0;
          },
        }),
          window.addEventListener("test", U6, U6),
          window.removeEventListener("test", U6, U6);
      } catch (J) {
        OX = !1;
      }
    function _Y(J, Q, Z, X, G, B, U, Y, H) {
      var W = Array.prototype.slice.call(arguments, 3);
      try {
        Q.apply(Z, W);
      } catch (z) {
        this.onError(z);
      }
    }
    var SY = _Y;
    if (
      typeof window !== "undefined" &&
      typeof window.dispatchEvent === "function" &&
      typeof document !== "undefined" &&
      typeof document.createEvent === "function"
    ) {
      var jX = document.createElement("react");
      SY = function J(Q, Z, X, G, B, U, Y, H, W) {
        if (typeof document === "undefined" || document === null)
          throw new Error(
            "The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.",
          );
        var z = document.createEvent("Event"),
          j = !1,
          O = !0,
          E = window.event,
          P = Object.getOwnPropertyDescriptor(window, "event");
        function R() {
          if (
            (jX.removeEventListener(F, y, !1),
            typeof window.event !== "undefined" &&
              window.hasOwnProperty("event"))
          )
            window.event = E;
        }
        var g = Array.prototype.slice.call(arguments, 3);
        function y() {
          (j = !0), R(), Z.apply(X, g), (O = !1);
        }
        var d,
          VJ = !1,
          qJ = !1;
        function D($) {
          if (
            ((d = $.error),
            (VJ = !0),
            d === null && $.colno === 0 && $.lineno === 0)
          )
            qJ = !0;
          if ($.defaultPrevented) {
            if (d != null && typeof d === "object")
              try {
                d._suppressLogging = !0;
              } catch (_) {}
          }
        }
        var F = "react-" + (Q ? Q : "invokeguardedcallback");
        if (
          (window.addEventListener("error", D),
          jX.addEventListener(F, y, !1),
          z.initEvent(F, !1, !1),
          jX.dispatchEvent(z),
          P)
        )
          Object.defineProperty(window, "event", P);
        if (j && O) {
          if (!VJ)
            d = new Error(
              `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`,
            );
          else if (qJ)
            d = new Error(
              "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.",
            );
          this.onError(d);
        }
        if ((window.removeEventListener("error", D), !j))
          return R(), _Y.apply(this, arguments);
      };
    }
    var DM = SY,
      r4 = !1,
      i7 = null,
      a7 = !1,
      DX = null,
      $M = {
        onError: function (J) {
          (r4 = !0), (i7 = J);
        },
      };
    function $X(J, Q, Z, X, G, B, U, Y, H) {
      (r4 = !1), (i7 = null), DM.apply($M, arguments);
    }
    function PM(J, Q, Z, X, G, B, U, Y, H) {
      if (($X.apply(this, arguments), r4)) {
        var W = PX();
        if (!a7) (a7 = !0), (DX = W);
      }
    }
    function AM() {
      if (a7) {
        var J = DX;
        throw ((a7 = !1), (DX = null), J);
      }
    }
    function EM() {
      return r4;
    }
    function PX() {
      if (r4) {
        var J = i7;
        return (r4 = !1), (i7 = null), J;
      } else
        throw new Error(
          "clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.",
        );
    }
    function n4(J) {
      return J._reactInternals;
    }
    function RM(J) {
      return J._reactInternals !== void 0;
    }
    function LM(J, Q) {
      J._reactInternals = Q;
    }
    var o = 0,
      t4 = 1,
      qQ = 2,
      EJ = 4,
      B4 = 16,
      Y6 = 32,
      AX = 64,
      _J = 128,
      e0 = 256,
      C1 = 512,
      U4 = 1024,
      V0 = 2048,
      J1 = 4096,
      Y4 = 8192,
      p7 = 16384,
      FM = V0 | EJ | AX | C1 | U4 | p7,
      IM = 32767,
      H6 = 32768,
      jZ = 65536,
      EX = 131072,
      CY = 1048576,
      RX = 2097152,
      H4 = 4194304,
      LX = 8388608,
      Q1 = 16777216,
      o7 = 33554432,
      FX = EJ | U4 | 0,
      IX = qQ | EJ | B4 | Y6 | C1 | J1 | Y4,
      K6 = EJ | AX | C1 | Y4,
      e4 = V0 | B4,
      Z1 = H4 | LX | RX,
      xM = SJ.ReactCurrentOwner;
    function K4(J) {
      var Q = J,
        Z = J;
      if (!J.alternate) {
        var X = Q;
        do {
          if (((Q = X), (Q.flags & (qQ | J1)) !== o)) Z = Q.return;
          X = Q.return;
        } while (X);
      } else while (Q.return) Q = Q.return;
      if (Q.tag === s) return Z;
      return null;
    }
    function vY(J) {
      if (J.tag === PJ) {
        var Q = J.memoizedState;
        if (Q === null) {
          var Z = J.alternate;
          if (Z !== null) Q = Z.memoizedState;
        }
        if (Q !== null) return Q.dehydrated;
      }
      return null;
    }
    function NY(J) {
      return J.tag === s ? J.stateNode.containerInfo : null;
    }
    function wM(J) {
      return K4(J) === J;
    }
    function _M(J) {
      {
        var Q = xM.current;
        if (Q !== null && Q.tag === a) {
          var Z = Q,
            X = Z.stateNode;
          if (!X._warnedAboutRefsInRender)
            M(
              "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
              YJ(Z) || "A component",
            );
          X._warnedAboutRefsInRender = !0;
        }
      }
      var G = n4(J);
      if (!G) return !1;
      return K4(G) === G;
    }
    function bY(J) {
      if (K4(J) !== J)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function kY(J) {
      var Q = J.alternate;
      if (!Q) {
        var Z = K4(J);
        if (Z === null)
          throw new Error("Unable to find node on an unmounted component.");
        if (Z !== J) return null;
        return J;
      }
      var X = J,
        G = Q;
      while (!0) {
        var B = X.return;
        if (B === null) break;
        var U = B.alternate;
        if (U === null) {
          var Y = B.return;
          if (Y !== null) {
            X = G = Y;
            continue;
          }
          break;
        }
        if (B.child === U.child) {
          var H = B.child;
          while (H) {
            if (H === X) return bY(B), J;
            if (H === G) return bY(B), Q;
            H = H.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (X.return !== G.return) (X = B), (G = U);
        else {
          var W = !1,
            z = B.child;
          while (z) {
            if (z === X) {
              (W = !0), (X = B), (G = U);
              break;
            }
            if (z === G) {
              (W = !0), (G = B), (X = U);
              break;
            }
            z = z.sibling;
          }
          if (!W) {
            z = U.child;
            while (z) {
              if (z === X) {
                (W = !0), (X = U), (G = B);
                break;
              }
              if (z === G) {
                (W = !0), (G = U), (X = B);
                break;
              }
              z = z.sibling;
            }
            if (!W)
              throw new Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.in React related to the return pointer. Please file an issue.",
              );
          }
        }
        if (X.alternate !== G)
          throw new Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.",
          );
      }
      if (X.tag !== s)
        throw new Error("Unable to find node on an unmounted component.");
      if (X.stateNode.current === X) return J;
      return Q;
    }
    function gY(J) {
      var Q = kY(J);
      return Q !== null ? TY(Q) : null;
    }
    function TY(J) {
      if (J.tag === l || J.tag === FJ) return J;
      var Q = J.child;
      while (Q !== null) {
        var Z = TY(Q);
        if (Z !== null) return Z;
        Q = Q.sibling;
      }
      return null;
    }
    function SM(J) {
      var Q = kY(J);
      return Q !== null ? hY(Q) : null;
    }
    function hY(J) {
      if (J.tag === l || J.tag === FJ) return J;
      var Q = J.child;
      while (Q !== null) {
        if (Q.tag !== OJ) {
          var Z = hY(Q);
          if (Z !== null) return Z;
        }
        Q = Q.sibling;
      }
      return null;
    }
    var fY = c.unstable_scheduleCallback,
      CM = c.unstable_cancelCallback,
      vM = c.unstable_shouldYield,
      NM = c.unstable_requestPaint,
      NQ = c.unstable_now,
      bM = c.unstable_getCurrentPriorityLevel,
      r7 = c.unstable_ImmediatePriority,
      xX = c.unstable_UserBlockingPriority,
      W4 = c.unstable_NormalPriority,
      kM = c.unstable_LowPriority,
      wX = c.unstable_IdlePriority,
      gM = c.unstable_yieldValue,
      TM = c.unstable_setDisableYieldValue,
      z4 = null,
      mQ = null,
      k = null,
      v0 = !1,
      q0 = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined";
    function hM(J) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined") return !1;
      var Q = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (Q.isDisabled) return !0;
      if (!Q.supportsFiber)
        return (
          M(
            "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools",
          ),
          !0
        );
      try {
        if (_0)
          J = MJ({}, J, { getLaneLabelMap: yM, injectProfilingHooks: mM });
        (z4 = Q.inject(J)), (mQ = Q);
      } catch (Z) {
        M("React instrumentation encountered an error: %s.", Z);
      }
      if (Q.checkDCE) return !0;
      else return !1;
    }
    function fM(J, Q) {
      if (mQ && typeof mQ.onScheduleFiberRoot === "function")
        try {
          mQ.onScheduleFiberRoot(z4, J, Q);
        } catch (Z) {
          if (!v0)
            (v0 = !0), M("React instrumentation encountered an error: %s", Z);
        }
    }
    function uM(J, Q) {
      if (mQ && typeof mQ.onCommitFiberRoot === "function")
        try {
          var Z = (J.current.flags & _J) === _J;
          if (cZ) {
            var X;
            switch (Q) {
              case TZ:
                X = r7;
                break;
              case G1:
                X = xX;
                break;
              case B1:
                X = W4;
                break;
              case G8:
                X = wX;
                break;
              default:
                X = W4;
                break;
            }
            mQ.onCommitFiberRoot(z4, J, X, Z);
          } else mQ.onCommitFiberRoot(z4, J, void 0, Z);
        } catch (G) {
          if (!v0)
            (v0 = !0), M("React instrumentation encountered an error: %s", G);
        }
    }
    function dM(J) {
      if (mQ && typeof mQ.onPostCommitFiberRoot === "function")
        try {
          mQ.onPostCommitFiberRoot(z4, J);
        } catch (Q) {
          if (!v0)
            (v0 = !0), M("React instrumentation encountered an error: %s", Q);
        }
    }
    function sM(J) {
      if (mQ && typeof mQ.onCommitFiberUnmount === "function")
        try {
          mQ.onCommitFiberUnmount(z4, J);
        } catch (Q) {
          if (!v0)
            (v0 = !0), M("React instrumentation encountered an error: %s", Q);
        }
    }
    function bQ(J) {
      {
        if (typeof gM === "function") TM(J), tJ(J);
        if (mQ && typeof mQ.setStrictMode === "function")
          try {
            mQ.setStrictMode(z4, J);
          } catch (Q) {
            if (!v0)
              (v0 = !0), M("React instrumentation encountered an error: %s", Q);
          }
      }
    }
    function mM(J) {
      k = J;
    }
    function yM() {
      {
        var J = new Map(),
          Q = 1;
        for (var Z = 0; Z < SX; Z++) {
          var X = KV(Q);
          J.set(Q, X), (Q *= 2);
        }
        return J;
      }
    }
    function lM(J) {
      if (k !== null && typeof k.markCommitStarted === "function")
        k.markCommitStarted(J);
    }
    function uY() {
      if (k !== null && typeof k.markCommitStopped === "function")
        k.markCommitStopped();
    }
    function W6(J) {
      if (k !== null && typeof k.markComponentRenderStarted === "function")
        k.markComponentRenderStarted(J);
    }
    function J5() {
      if (k !== null && typeof k.markComponentRenderStopped === "function")
        k.markComponentRenderStopped();
    }
    function cM(J) {
      if (
        k !== null &&
        typeof k.markComponentPassiveEffectMountStarted === "function"
      )
        k.markComponentPassiveEffectMountStarted(J);
    }
    function iM() {
      if (
        k !== null &&
        typeof k.markComponentPassiveEffectMountStopped === "function"
      )
        k.markComponentPassiveEffectMountStopped();
    }
    function aM(J) {
      if (
        k !== null &&
        typeof k.markComponentPassiveEffectUnmountStarted === "function"
      )
        k.markComponentPassiveEffectUnmountStarted(J);
    }
    function pM() {
      if (
        k !== null &&
        typeof k.markComponentPassiveEffectUnmountStopped === "function"
      )
        k.markComponentPassiveEffectUnmountStopped();
    }
    function oM(J) {
      if (
        k !== null &&
        typeof k.markComponentLayoutEffectMountStarted === "function"
      )
        k.markComponentLayoutEffectMountStarted(J);
    }
    function rM() {
      if (
        k !== null &&
        typeof k.markComponentLayoutEffectMountStopped === "function"
      )
        k.markComponentLayoutEffectMountStopped();
    }
    function dY(J) {
      if (
        k !== null &&
        typeof k.markComponentLayoutEffectUnmountStarted === "function"
      )
        k.markComponentLayoutEffectUnmountStarted(J);
    }
    function sY() {
      if (
        k !== null &&
        typeof k.markComponentLayoutEffectUnmountStopped === "function"
      )
        k.markComponentLayoutEffectUnmountStopped();
    }
    function nM(J, Q, Z) {
      if (k !== null && typeof k.markComponentErrored === "function")
        k.markComponentErrored(J, Q, Z);
    }
    function tM(J, Q, Z) {
      if (k !== null && typeof k.markComponentSuspended === "function")
        k.markComponentSuspended(J, Q, Z);
    }
    function eM(J) {
      if (k !== null && typeof k.markLayoutEffectsStarted === "function")
        k.markLayoutEffectsStarted(J);
    }
    function JV() {
      if (k !== null && typeof k.markLayoutEffectsStopped === "function")
        k.markLayoutEffectsStopped();
    }
    function QV(J) {
      if (k !== null && typeof k.markPassiveEffectsStarted === "function")
        k.markPassiveEffectsStarted(J);
    }
    function ZV() {
      if (k !== null && typeof k.markPassiveEffectsStopped === "function")
        k.markPassiveEffectsStopped();
    }
    function mY(J) {
      if (k !== null && typeof k.markRenderStarted === "function")
        k.markRenderStarted(J);
    }
    function XV() {
      if (k !== null && typeof k.markRenderYielded === "function")
        k.markRenderYielded();
    }
    function yY() {
      if (k !== null && typeof k.markRenderStopped === "function")
        k.markRenderStopped();
    }
    function GV(J) {
      if (k !== null && typeof k.markRenderScheduled === "function")
        k.markRenderScheduled(J);
    }
    function BV(J, Q) {
      if (k !== null && typeof k.markForceUpdateScheduled === "function")
        k.markForceUpdateScheduled(J, Q);
    }
    function _X(J, Q) {
      if (k !== null && typeof k.markStateUpdateScheduled === "function")
        k.markStateUpdateScheduled(J, Q);
    }
    var r = 0,
      DJ = 1,
      kJ = 2,
      OQ = 8,
      N0 = 16,
      lY = Math.clz32 ? Math.clz32 : HV,
      UV = Math.log,
      YV = Math.LN2;
    function HV(J) {
      var Q = J >>> 0;
      if (Q === 0) return 32;
      return (31 - ((UV(Q) / YV) | 0)) | 0;
    }
    var SX = 31,
      x = 0,
      kQ = 0,
      ZJ = 1,
      Q5 = 2,
      X1 = 4,
      M4 = 8,
      b0 = 16,
      z6 = 32,
      Z5 = 4194240,
      M6 = 64,
      CX = 128,
      vX = 256,
      NX = 512,
      bX = 1024,
      kX = 2048,
      gX = 4096,
      TX = 8192,
      hX = 16384,
      fX = 32768,
      uX = 65536,
      dX = 131072,
      sX = 262144,
      mX = 524288,
      yX = 1048576,
      lX = 2097152,
      n7 = 130023424,
      X5 = 4194304,
      cX = 8388608,
      iX = 16777216,
      aX = 33554432,
      pX = 67108864,
      cY = X5,
      V6 = 134217728,
      iY = 268435455,
      q6 = 268435456,
      V4 = 536870912,
      kZ = 1073741824;
    function KV(J) {
      {
        if (J & ZJ) return "Sync";
        if (J & Q5) return "InputContinuousHydration";
        if (J & X1) return "InputContinuous";
        if (J & M4) return "DefaultHydration";
        if (J & b0) return "Default";
        if (J & z6) return "TransitionHydration";
        if (J & Z5) return "Transition";
        if (J & n7) return "Retry";
        if (J & V6) return "SelectiveHydration";
        if (J & q6) return "IdleHydration";
        if (J & V4) return "Idle";
        if (J & kZ) return "Offscreen";
      }
    }
    var pJ = -1,
      t7 = M6,
      e7 = X5;
    function O6(J) {
      switch (q4(J)) {
        case ZJ:
          return ZJ;
        case Q5:
          return Q5;
        case X1:
          return X1;
        case M4:
          return M4;
        case b0:
          return b0;
        case z6:
          return z6;
        case M6:
        case CX:
        case vX:
        case NX:
        case bX:
        case kX:
        case gX:
        case TX:
        case hX:
        case fX:
        case uX:
        case dX:
        case sX:
        case mX:
        case yX:
        case lX:
          return J & Z5;
        case X5:
        case cX:
        case iX:
        case aX:
        case pX:
          return J & n7;
        case V6:
          return V6;
        case q6:
          return q6;
        case V4:
          return V4;
        case kZ:
          return kZ;
        default:
          return (
            M("Should have found matching lanes. This is a bug in React."), J
          );
      }
    }
    function J8(J, Q) {
      var Z = J.pendingLanes;
      if (Z === x) return x;
      var X = x,
        G = J.suspendedLanes,
        B = J.pingedLanes,
        U = Z & iY;
      if (U !== x) {
        var Y = U & ~G;
        if (Y !== x) X = O6(Y);
        else {
          var H = U & B;
          if (H !== x) X = O6(H);
        }
      } else {
        var W = Z & ~G;
        if (W !== x) X = O6(W);
        else if (B !== x) X = O6(B);
      }
      if (X === x) return x;
      if (Q !== x && Q !== X && (Q & G) === x) {
        var z = q4(X),
          j = q4(Q);
        if (z >= j || (z === b0 && (j & Z5) !== x)) return Q;
      }
      if ((X & X1) !== x) X |= Z & b0;
      var O = J.entangledLanes;
      if (O !== x) {
        var E = J.entanglements,
          P = X & O;
        while (P > 0) {
          var R = O4(P),
            g = 1 << R;
          (X |= E[R]), (P &= ~g);
        }
      }
      return X;
    }
    function WV(J, Q) {
      var Z = J.eventTimes,
        X = pJ;
      while (Q > 0) {
        var G = O4(Q),
          B = 1 << G,
          U = Z[G];
        if (U > X) X = U;
        Q &= ~B;
      }
      return X;
    }
    function zV(J, Q) {
      switch (J) {
        case ZJ:
        case Q5:
        case X1:
          return Q + 250;
        case M4:
        case b0:
        case z6:
        case M6:
        case CX:
        case vX:
        case NX:
        case bX:
        case kX:
        case gX:
        case TX:
        case hX:
        case fX:
        case uX:
        case dX:
        case sX:
        case mX:
        case yX:
        case lX:
          return Q + 5000;
        case X5:
        case cX:
        case iX:
        case aX:
        case pX:
          return pJ;
        case V6:
        case q6:
        case V4:
        case kZ:
          return pJ;
        default:
          return (
            M("Should have found matching lanes. This is a bug in React."), pJ
          );
      }
    }
    function MV(J, Q) {
      var {
          pendingLanes: Z,
          suspendedLanes: X,
          pingedLanes: G,
          expirationTimes: B,
        } = J,
        U = Z;
      while (U > 0) {
        var Y = O4(U),
          H = 1 << Y,
          W = B[Y];
        if (W === pJ) {
          if ((H & X) === x || (H & G) !== x) B[Y] = zV(H, Q);
        } else if (W <= Q) J.expiredLanes |= H;
        U &= ~H;
      }
    }
    function VV(J) {
      return O6(J.pendingLanes);
    }
    function oX(J) {
      var Q = J.pendingLanes & ~kZ;
      if (Q !== x) return Q;
      if (Q & kZ) return kZ;
      return x;
    }
    function qV(J) {
      return (J & ZJ) !== x;
    }
    function rX(J) {
      return (J & iY) !== x;
    }
    function aY(J) {
      return (J & n7) === J;
    }
    function OV(J) {
      var Q = ZJ | X1 | b0;
      return (J & Q) === x;
    }
    function jV(J) {
      return (J & Z5) === J;
    }
    function Q8(J, Q) {
      var Z = Q5 | X1 | M4 | b0;
      return (Q & Z) !== x;
    }
    function DV(J, Q) {
      return (Q & J.expiredLanes) !== x;
    }
    function pY(J) {
      return (J & Z5) !== x;
    }
    function oY() {
      var J = t7;
      if (((t7 <<= 1), (t7 & Z5) === x)) t7 = M6;
      return J;
    }
    function $V() {
      var J = e7;
      if (((e7 <<= 1), (e7 & n7) === x)) e7 = X5;
      return J;
    }
    function q4(J) {
      return J & -J;
    }
    function j6(J) {
      return q4(J);
    }
    function O4(J) {
      return 31 - lY(J);
    }
    function nX(J) {
      return O4(J);
    }
    function gZ(J, Q) {
      return (J & Q) !== x;
    }
    function G5(J, Q) {
      return (J & Q) === Q;
    }
    function zJ(J, Q) {
      return J | Q;
    }
    function Z8(J, Q) {
      return J & ~Q;
    }
    function rY(J, Q) {
      return J & Q;
    }
    function X8(J) {
      return J;
    }
    function PV(J, Q) {
      return J !== kQ && J < Q ? J : Q;
    }
    function tX(J) {
      var Q = [];
      for (var Z = 0; Z < SX; Z++) Q.push(J);
      return Q;
    }
    function D6(J, Q, Z) {
      if (((J.pendingLanes |= Q), Q !== V4))
        (J.suspendedLanes = x), (J.pingedLanes = x);
      var X = J.eventTimes,
        G = nX(Q);
      X[G] = Z;
    }
    function AV(J, Q) {
      (J.suspendedLanes |= Q), (J.pingedLanes &= ~Q);
      var Z = J.expirationTimes,
        X = Q;
      while (X > 0) {
        var G = O4(X),
          B = 1 << G;
        (Z[G] = pJ), (X &= ~B);
      }
    }
    function nY(J, Q, Z) {
      J.pingedLanes |= J.suspendedLanes & Q;
    }
    function EV(J, Q) {
      var Z = J.pendingLanes & ~Q;
      (J.pendingLanes = Q),
        (J.suspendedLanes = x),
        (J.pingedLanes = x),
        (J.expiredLanes &= Q),
        (J.mutableReadLanes &= Q),
        (J.entangledLanes &= Q);
      var { entanglements: X, eventTimes: G, expirationTimes: B } = J,
        U = Z;
      while (U > 0) {
        var Y = O4(U),
          H = 1 << Y;
        (X[Y] = x), (G[Y] = pJ), (B[Y] = pJ), (U &= ~H);
      }
    }
    function eX(J, Q) {
      var Z = (J.entangledLanes |= Q),
        X = J.entanglements,
        G = Z;
      while (G) {
        var B = O4(G),
          U = 1 << B;
        if ((U & Q) | (X[B] & Q)) X[B] |= Q;
        G &= ~U;
      }
    }
    function RV(J, Q) {
      var Z = q4(Q),
        X;
      switch (Z) {
        case X1:
          X = Q5;
          break;
        case b0:
          X = M4;
          break;
        case M6:
        case CX:
        case vX:
        case NX:
        case bX:
        case kX:
        case gX:
        case TX:
        case hX:
        case fX:
        case uX:
        case dX:
        case sX:
        case mX:
        case yX:
        case lX:
        case X5:
        case cX:
        case iX:
        case aX:
        case pX:
          X = z6;
          break;
        case V4:
          X = q6;
          break;
        default:
          X = kQ;
          break;
      }
      if ((X & (J.suspendedLanes | Q)) !== kQ) return kQ;
      return X;
    }
    function tY(J, Q, Z) {
      if (!q0) return;
      var X = J.pendingUpdatersLaneMap;
      while (Z > 0) {
        var G = nX(Z),
          B = 1 << G,
          U = X[G];
        U.add(Q), (Z &= ~B);
      }
    }
    function eY(J, Q) {
      if (!q0) return;
      var { pendingUpdatersLaneMap: Z, memoizedUpdaters: X } = J;
      while (Q > 0) {
        var G = nX(Q),
          B = 1 << G,
          U = Z[G];
        if (U.size > 0)
          U.forEach(function (Y) {
            var H = Y.alternate;
            if (H === null || !X.has(H)) X.add(Y);
          }),
            U.clear();
        Q &= ~B;
      }
    }
    function JH(J, Q) {
      return null;
    }
    var TZ = ZJ,
      G1 = X1,
      B1 = b0,
      G8 = V4,
      $6 = kQ;
    function O0() {
      return $6;
    }
    function gQ(J) {
      $6 = J;
    }
    function LV(J, Q) {
      var Z = $6;
      try {
        return ($6 = J), Q();
      } finally {
        $6 = Z;
      }
    }
    function FV(J, Q) {
      return J !== 0 && J < Q ? J : Q;
    }
    function IV(J, Q) {
      return J === 0 || J > Q ? J : Q;
    }
    function JG(J, Q) {
      return J !== 0 && J < Q;
    }
    function QH(J) {
      var Q = q4(J);
      if (!JG(TZ, Q)) return TZ;
      if (!JG(G1, Q)) return G1;
      if (rX(Q)) return B1;
      return G8;
    }
    function B8(J) {
      var Q = J.current.memoizedState;
      return Q.isDehydrated;
    }
    var ZH;
    function xV(J) {
      ZH = J;
    }
    function wV(J) {
      ZH(J);
    }
    var QG;
    function _V(J) {
      QG = J;
    }
    var XH;
    function SV(J) {
      XH = J;
    }
    var GH;
    function CV(J) {
      GH = J;
    }
    var BH;
    function vV(J) {
      BH = J;
    }
    var ZG = !1,
      U8 = [],
      v1 = null,
      N1 = null,
      b1 = null,
      P6 = new Map(),
      A6 = new Map(),
      k1 = [],
      NV = [
        "mousedown",
        "mouseup",
        "touchcancel",
        "touchend",
        "touchstart",
        "auxclick",
        "dblclick",
        "pointercancel",
        "pointerdown",
        "pointerup",
        "dragend",
        "dragstart",
        "drop",
        "compositionend",
        "compositionstart",
        "keydown",
        "keypress",
        "keyup",
        "input",
        "textInput",
        "copy",
        "cut",
        "paste",
        "click",
        "change",
        "contextmenu",
        "reset",
        "submit",
      ];
    function bV(J) {
      return NV.indexOf(J) > -1;
    }
    function kV(J, Q, Z, X, G) {
      return {
        blockedOn: J,
        domEventName: Q,
        eventSystemFlags: Z,
        nativeEvent: G,
        targetContainers: [X],
      };
    }
    function UH(J, Q) {
      switch (J) {
        case "focusin":
        case "focusout":
          v1 = null;
          break;
        case "dragenter":
        case "dragleave":
          N1 = null;
          break;
        case "mouseover":
        case "mouseout":
          b1 = null;
          break;
        case "pointerover":
        case "pointerout": {
          var Z = Q.pointerId;
          P6.delete(Z);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var X = Q.pointerId;
          A6.delete(X);
          break;
        }
      }
    }
    function E6(J, Q, Z, X, G, B) {
      if (J === null || J.nativeEvent !== B) {
        var U = kV(Q, Z, X, G, B);
        if (Q !== null) {
          var Y = h1(Q);
          if (Y !== null) QG(Y);
        }
        return U;
      }
      J.eventSystemFlags |= X;
      var H = J.targetContainers;
      if (G !== null && H.indexOf(G) === -1) H.push(G);
      return J;
    }
    function gV(J, Q, Z, X, G) {
      switch (Q) {
        case "focusin": {
          var B = G;
          return (v1 = E6(v1, J, Q, Z, X, B)), !0;
        }
        case "dragenter": {
          var U = G;
          return (N1 = E6(N1, J, Q, Z, X, U)), !0;
        }
        case "mouseover": {
          var Y = G;
          return (b1 = E6(b1, J, Q, Z, X, Y)), !0;
        }
        case "pointerover": {
          var H = G,
            W = H.pointerId;
          return P6.set(W, E6(P6.get(W) || null, J, Q, Z, X, H)), !0;
        }
        case "gotpointercapture": {
          var z = G,
            j = z.pointerId;
          return A6.set(j, E6(A6.get(j) || null, J, Q, Z, X, z)), !0;
        }
      }
      return !1;
    }
    function YH(J) {
      var Q = $4(J.target);
      if (Q !== null) {
        var Z = K4(Q);
        if (Z !== null) {
          var X = Z.tag;
          if (X === PJ) {
            var G = vY(Z);
            if (G !== null) {
              (J.blockedOn = G),
                BH(J.priority, function () {
                  XH(Z);
                });
              return;
            }
          } else if (X === s) {
            var B = Z.stateNode;
            if (B8(B)) {
              J.blockedOn = NY(Z);
              return;
            }
          }
        }
      }
      J.blockedOn = null;
    }
    function TV(J) {
      var Q = GH(),
        Z = { blockedOn: null, target: J, priority: Q },
        X = 0;
      for (; X < k1.length; X++) if (!JG(Q, k1[X].priority)) break;
      if ((k1.splice(X, 0, Z), X === 0)) YH(Z);
    }
    function Y8(J) {
      if (J.blockedOn !== null) return !1;
      var Q = J.targetContainers;
      while (Q.length > 0) {
        var Z = Q[0],
          X = BG(J.domEventName, J.eventSystemFlags, Z, J.nativeEvent);
        if (X === null) {
          var G = J.nativeEvent,
            B = new G.constructor(G.type, G);
          HM(B), G.target.dispatchEvent(B), KM();
        } else {
          var U = h1(X);
          if (U !== null) QG(U);
          return (J.blockedOn = X), !1;
        }
        Q.shift();
      }
      return !0;
    }
    function HH(J, Q, Z) {
      if (Y8(J)) Z.delete(Q);
    }
    function hV() {
      if (((ZG = !1), v1 !== null && Y8(v1))) v1 = null;
      if (N1 !== null && Y8(N1)) N1 = null;
      if (b1 !== null && Y8(b1)) b1 = null;
      P6.forEach(HH), A6.forEach(HH);
    }
    function R6(J, Q) {
      if (J.blockedOn === Q) {
        if (((J.blockedOn = null), !ZG))
          (ZG = !0), c.unstable_scheduleCallback(c.unstable_NormalPriority, hV);
      }
    }
    function L6(J) {
      if (U8.length > 0) {
        R6(U8[0], J);
        for (var Q = 1; Q < U8.length; Q++) {
          var Z = U8[Q];
          if (Z.blockedOn === J) Z.blockedOn = null;
        }
      }
      if (v1 !== null) R6(v1, J);
      if (N1 !== null) R6(N1, J);
      if (b1 !== null) R6(b1, J);
      var X = function (Y) {
        return R6(Y, J);
      };
      P6.forEach(X), A6.forEach(X);
      for (var G = 0; G < k1.length; G++) {
        var B = k1[G];
        if (B.blockedOn === J) B.blockedOn = null;
      }
      while (k1.length > 0) {
        var U = k1[0];
        if (U.blockedOn !== null) break;
        else if ((YH(U), U.blockedOn === null)) k1.shift();
      }
    }
    var B5 = SJ.ReactCurrentBatchConfig,
      XG = !0;
    function KH(J) {
      XG = !!J;
    }
    function fV() {
      return XG;
    }
    function uV(J, Q, Z) {
      var X = WH(Q),
        G;
      switch (X) {
        case TZ:
          G = dV;
          break;
        case G1:
          G = sV;
          break;
        case B1:
        default:
          G = GG;
          break;
      }
      return G.bind(null, Q, Z, J);
    }
    function dV(J, Q, Z, X) {
      var G = O0(),
        B = B5.transition;
      B5.transition = null;
      try {
        gQ(TZ), GG(J, Q, Z, X);
      } finally {
        gQ(G), (B5.transition = B);
      }
    }
    function sV(J, Q, Z, X) {
      var G = O0(),
        B = B5.transition;
      B5.transition = null;
      try {
        gQ(G1), GG(J, Q, Z, X);
      } finally {
        gQ(G), (B5.transition = B);
      }
    }
    function GG(J, Q, Z, X) {
      if (!XG) return;
      mV(J, Q, Z, X);
    }
    function mV(J, Q, Z, X) {
      var G = BG(J, Q, Z, X);
      if (G === null) {
        PG(J, Q, X, H8, Z), UH(J, X);
        return;
      }
      if (gV(G, J, Q, Z, X)) {
        X.stopPropagation();
        return;
      }
      if ((UH(J, X), Q & X6 && bV(J))) {
        while (G !== null) {
          var B = h1(G);
          if (B !== null) wV(B);
          var U = BG(J, Q, Z, X);
          if (U === null) PG(J, Q, X, H8, Z);
          if (U === G) break;
          G = U;
        }
        if (G !== null) X.stopPropagation();
        return;
      }
      PG(J, Q, X, null, Z);
    }
    var H8 = null;
    function BG(J, Q, Z, X) {
      H8 = null;
      var G = MX(X),
        B = $4(G);
      if (B !== null) {
        var U = K4(B);
        if (U === null) B = null;
        else {
          var Y = U.tag;
          if (Y === PJ) {
            var H = vY(U);
            if (H !== null) return H;
            B = null;
          } else if (Y === s) {
            var W = U.stateNode;
            if (B8(W)) return NY(U);
            B = null;
          } else if (U !== B) B = null;
        }
      }
      return (H8 = B), null;
    }
    function WH(J) {
      switch (J) {
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
          return TZ;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return G1;
        case "message": {
          var Q = bM();
          switch (Q) {
            case r7:
              return TZ;
            case xX:
              return G1;
            case W4:
            case kM:
              return B1;
            case wX:
              return G8;
            default:
              return B1;
          }
        }
        default:
          return B1;
      }
    }
    function yV(J, Q, Z) {
      return J.addEventListener(Q, Z, !1), Z;
    }
    function lV(J, Q, Z) {
      return J.addEventListener(Q, Z, !0), Z;
    }
    function cV(J, Q, Z, X) {
      return J.addEventListener(Q, Z, { capture: !0, passive: X }), Z;
    }
    function iV(J, Q, Z, X) {
      return J.addEventListener(Q, Z, { passive: X }), Z;
    }
    var F6 = null,
      UG = null,
      I6 = null;
    function aV(J) {
      return (F6 = J), (UG = MH()), !0;
    }
    function pV() {
      (F6 = null), (UG = null), (I6 = null);
    }
    function zH() {
      if (I6) return I6;
      var J,
        Q = UG,
        Z = Q.length,
        X,
        G = MH(),
        B = G.length;
      for (J = 0; J < Z; J++) if (Q[J] !== G[J]) break;
      var U = Z - J;
      for (X = 1; X <= U; X++) if (Q[Z - X] !== G[B - X]) break;
      var Y = X > 1 ? 1 - X : void 0;
      return (I6 = G.slice(J, Y)), I6;
    }
    function MH() {
      if ("value" in F6) return F6.value;
      return F6.textContent;
    }
    function K8(J) {
      var Q,
        Z = J.keyCode;
      if ("charCode" in J) {
        if (((Q = J.charCode), Q === 0 && Z === 13)) Q = 13;
      } else Q = Z;
      if (Q === 10) Q = 13;
      if (Q >= 32 || Q === 13) return Q;
      return 0;
    }
    function W8() {
      return !0;
    }
    function VH() {
      return !1;
    }
    function hZ(J) {
      function Q(Z, X, G, B, U) {
        (this._reactName = Z),
          (this._targetInst = G),
          (this.type = X),
          (this.nativeEvent = B),
          (this.target = U),
          (this.currentTarget = null);
        for (var Y in J) {
          if (!J.hasOwnProperty(Y)) continue;
          var H = J[Y];
          if (H) this[Y] = H(B);
          else this[Y] = B[Y];
        }
        var W =
          B.defaultPrevented != null
            ? B.defaultPrevented
            : B.returnValue === !1;
        if (W) this.isDefaultPrevented = W8;
        else this.isDefaultPrevented = VH;
        return (this.isPropagationStopped = VH), this;
      }
      return (
        MJ(Q.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var Z = this.nativeEvent;
            if (!Z) return;
            if (Z.preventDefault) Z.preventDefault();
            else if (typeof Z.returnValue !== "unknown") Z.returnValue = !1;
            this.isDefaultPrevented = W8;
          },
          stopPropagation: function () {
            var Z = this.nativeEvent;
            if (!Z) return;
            if (Z.stopPropagation) Z.stopPropagation();
            else if (typeof Z.cancelBubble !== "unknown") Z.cancelBubble = !0;
            this.isPropagationStopped = W8;
          },
          persist: function () {},
          isPersistent: W8,
        }),
        Q
      );
    }
    var U5 = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (J) {
          return J.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      YG = hZ(U5),
      x6 = MJ({}, U5, { view: 0, detail: 0 }),
      oV = hZ(x6),
      HG,
      KG,
      w6;
    function rV(J) {
      if (J !== w6) {
        if (w6 && J.type === "mousemove")
          (HG = J.screenX - w6.screenX), (KG = J.screenY - w6.screenY);
        else (HG = 0), (KG = 0);
        w6 = J;
      }
    }
    var z8 = MJ({}, x6, {
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
        getModifierState: zG,
        button: 0,
        buttons: 0,
        relatedTarget: function (J) {
          if (J.relatedTarget === void 0)
            return J.fromElement === J.srcElement ? J.toElement : J.fromElement;
          return J.relatedTarget;
        },
        movementX: function (J) {
          if ("movementX" in J) return J.movementX;
          return rV(J), HG;
        },
        movementY: function (J) {
          if ("movementY" in J) return J.movementY;
          return KG;
        },
      }),
      qH = hZ(z8),
      nV = MJ({}, z8, { dataTransfer: 0 }),
      tV = hZ(nV),
      eV = MJ({}, x6, { relatedTarget: 0 }),
      WG = hZ(eV),
      Jq = MJ({}, U5, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Qq = hZ(Jq),
      Zq = MJ({}, U5, {
        clipboardData: function (J) {
          return "clipboardData" in J ? J.clipboardData : window.clipboardData;
        },
      }),
      Xq = hZ(Zq),
      Gq = MJ({}, U5, { data: 0 }),
      OH = hZ(Gq),
      Bq = OH,
      Uq = {
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
      Yq = {
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
      };
    function Hq(J) {
      if (J.key) {
        var Q = Uq[J.key] || J.key;
        if (Q !== "Unidentified") return Q;
      }
      if (J.type === "keypress") {
        var Z = K8(J);
        return Z === 13 ? "Enter" : String.fromCharCode(Z);
      }
      if (J.type === "keydown" || J.type === "keyup")
        return Yq[J.keyCode] || "Unidentified";
      return "";
    }
    var Kq = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
    function Wq(J) {
      var Q = this,
        Z = Q.nativeEvent;
      if (Z.getModifierState) return Z.getModifierState(J);
      var X = Kq[J];
      return X ? !!Z[X] : !1;
    }
    function zG(J) {
      return Wq;
    }
    var zq = MJ({}, x6, {
        key: Hq,
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: zG,
        charCode: function (J) {
          if (J.type === "keypress") return K8(J);
          return 0;
        },
        keyCode: function (J) {
          if (J.type === "keydown" || J.type === "keyup") return J.keyCode;
          return 0;
        },
        which: function (J) {
          if (J.type === "keypress") return K8(J);
          if (J.type === "keydown" || J.type === "keyup") return J.keyCode;
          return 0;
        },
      }),
      Mq = hZ(zq),
      Vq = MJ({}, z8, {
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
      jH = hZ(Vq),
      qq = MJ({}, x6, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: zG,
      }),
      Oq = hZ(qq),
      jq = MJ({}, U5, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Dq = hZ(jq),
      $q = MJ({}, z8, {
        deltaX: function (J) {
          return "deltaX" in J
            ? J.deltaX
            : "wheelDeltaX" in J
              ? -J.wheelDeltaX
              : 0;
        },
        deltaY: function (J) {
          return "deltaY" in J
            ? J.deltaY
            : "wheelDeltaY" in J
              ? -J.wheelDeltaY
              : "wheelDelta" in J
                ? -J.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      Pq = hZ($q),
      Aq = [9, 13, 27, 32],
      DH = 229,
      MG = fQ && "CompositionEvent" in window,
      _6 = null;
    if (fQ && "documentMode" in document) _6 = document.documentMode;
    var Eq = fQ && "TextEvent" in window && !_6,
      $H = fQ && (!MG || (_6 && _6 > 8 && _6 <= 11)),
      PH = 32,
      AH = String.fromCharCode(PH);
    function Rq() {
      QZ("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
        QZ("onCompositionEnd", [
          "compositionend",
          "focusout",
          "keydown",
          "keypress",
          "keyup",
          "mousedown",
        ]),
        QZ("onCompositionStart", [
          "compositionstart",
          "focusout",
          "keydown",
          "keypress",
          "keyup",
          "mousedown",
        ]),
        QZ("onCompositionUpdate", [
          "compositionupdate",
          "focusout",
          "keydown",
          "keypress",
          "keyup",
          "mousedown",
        ]);
    }
    var EH = !1;
    function Lq(J) {
      return (J.ctrlKey || J.altKey || J.metaKey) && !(J.ctrlKey && J.altKey);
    }
    function Fq(J) {
      switch (J) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Iq(J, Q) {
      return J === "keydown" && Q.keyCode === DH;
    }
    function RH(J, Q) {
      switch (J) {
        case "keyup":
          return Aq.indexOf(Q.keyCode) !== -1;
        case "keydown":
          return Q.keyCode !== DH;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function LH(J) {
      var Q = J.detail;
      if (typeof Q === "object" && "data" in Q) return Q.data;
      return null;
    }
    function FH(J) {
      return J.locale === "ko";
    }
    var Y5 = !1;
    function xq(J, Q, Z, X, G) {
      var B, U;
      if (MG) B = Fq(Q);
      else if (!Y5) {
        if (Iq(Q, X)) B = "onCompositionStart";
      } else if (RH(Q, X)) B = "onCompositionEnd";
      if (!B) return null;
      if ($H && !FH(X)) {
        if (!Y5 && B === "onCompositionStart") Y5 = aV(G);
        else if (B === "onCompositionEnd") {
          if (Y5) U = zH();
        }
      }
      var Y = j8(Z, B);
      if (Y.length > 0) {
        var H = new OH(B, Q, null, X, G);
        if ((J.push({ event: H, listeners: Y }), U)) H.data = U;
        else {
          var W = LH(X);
          if (W !== null) H.data = W;
        }
      }
    }
    function wq(J, Q) {
      switch (J) {
        case "compositionend":
          return LH(Q);
        case "keypress":
          var Z = Q.which;
          if (Z !== PH) return null;
          return (EH = !0), AH;
        case "textInput":
          var X = Q.data;
          if (X === AH && EH) return null;
          return X;
        default:
          return null;
      }
    }
    function _q(J, Q) {
      if (Y5) {
        if (J === "compositionend" || (!MG && RH(J, Q))) {
          var Z = zH();
          return pV(), (Y5 = !1), Z;
        }
        return null;
      }
      switch (J) {
        case "paste":
          return null;
        case "keypress":
          if (!Lq(Q)) {
            if (Q.char && Q.char.length > 1) return Q.char;
            else if (Q.which) return String.fromCharCode(Q.which);
          }
          return null;
        case "compositionend":
          return $H && !FH(Q) ? null : Q.data;
        default:
          return null;
      }
    }
    function Sq(J, Q, Z, X, G) {
      var B;
      if (Eq) B = wq(Q, X);
      else B = _q(Q, X);
      if (!B) return null;
      var U = j8(Z, "onBeforeInput");
      if (U.length > 0) {
        var Y = new Bq("onBeforeInput", "beforeinput", null, X, G);
        J.push({ event: Y, listeners: U }), (Y.data = B);
      }
    }
    function Cq(J, Q, Z, X, G, B, U) {
      xq(J, Q, Z, X, G), Sq(J, Q, Z, X, G);
    }
    var vq = {
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
    function IH(J) {
      var Q = J && J.nodeName && J.nodeName.toLowerCase();
      if (Q === "input") return !!vq[J.type];
      if (Q === "textarea") return !0;
      return !1;
    }
    function Nq(J) {
      if (!fQ) return !1;
      var Q = "on" + J,
        Z = Q in document;
      if (!Z) {
        var X = document.createElement("div");
        X.setAttribute(Q, "return;"), (Z = typeof X[Q] === "function");
      }
      return Z;
    }
    function bq() {
      QZ("onChange", [
        "change",
        "click",
        "focusin",
        "focusout",
        "input",
        "keydown",
        "keyup",
        "selectionchange",
      ]);
    }
    function xH(J, Q, Z, X) {
      LY(X);
      var G = j8(Q, "onChange");
      if (G.length > 0) {
        var B = new YG("onChange", "change", null, Z, X);
        J.push({ event: B, listeners: G });
      }
    }
    var S6 = null,
      C6 = null;
    function kq(J) {
      var Q = J.nodeName && J.nodeName.toLowerCase();
      return Q === "select" || (Q === "input" && J.type === "file");
    }
    function gq(J) {
      var Q = [];
      xH(Q, C6, J, MX(J)), wY(Tq, Q);
    }
    function Tq(J) {
      lH(J, 0);
    }
    function M8(J) {
      var Q = V5(J);
      if (y4(Q)) return J;
    }
    function hq(J, Q) {
      if (J === "change") return Q;
    }
    var wH = !1;
    if (fQ)
      wH = Nq("input") && (!document.documentMode || document.documentMode > 9);
    function fq(J, Q) {
      (S6 = J), (C6 = Q), S6.attachEvent("onpropertychange", SH);
    }
    function _H() {
      if (!S6) return;
      S6.detachEvent("onpropertychange", SH), (S6 = null), (C6 = null);
    }
    function SH(J) {
      if (J.propertyName !== "value") return;
      if (M8(C6)) gq(J);
    }
    function uq(J, Q, Z) {
      if (J === "focusin") _H(), fq(Q, Z);
      else if (J === "focusout") _H();
    }
    function dq(J, Q) {
      if (J === "selectionchange" || J === "keyup" || J === "keydown")
        return M8(C6);
    }
    function sq(J) {
      var Q = J.nodeName;
      return (
        Q &&
        Q.toLowerCase() === "input" &&
        (J.type === "checkbox" || J.type === "radio")
      );
    }
    function mq(J, Q) {
      if (J === "click") return M8(Q);
    }
    function yq(J, Q) {
      if (J === "input" || J === "change") return M8(Q);
    }
    function lq(J) {
      var Q = J._wrapperState;
      if (!Q || !Q.controlled || J.type !== "number") return;
      bJ(J, "number", J.value);
    }
    function cq(J, Q, Z, X, G, B, U) {
      var Y = Z ? V5(Z) : window,
        H,
        W;
      if (kq(Y)) H = hq;
      else if (IH(Y))
        if (wH) H = yq;
        else (H = dq), (W = uq);
      else if (sq(Y)) H = mq;
      if (H) {
        var z = H(Q, Z);
        if (z) {
          xH(J, z, X, G);
          return;
        }
      }
      if (W) W(Q, Y, Z);
      if (Q === "focusout") lq(Y);
    }
    function iq() {
      NZ("onMouseEnter", ["mouseout", "mouseover"]),
        NZ("onMouseLeave", ["mouseout", "mouseover"]),
        NZ("onPointerEnter", ["pointerout", "pointerover"]),
        NZ("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function aq(J, Q, Z, X, G, B, U) {
      var Y = Q === "mouseover" || Q === "pointerover",
        H = Q === "mouseout" || Q === "pointerout";
      if (Y && !WM(X)) {
        var W = X.relatedTarget || X.fromElement;
        if (W) {
          if ($4(W) || c6(W)) return;
        }
      }
      if (!H && !Y) return;
      var z;
      if (G.window === G) z = G;
      else {
        var j = G.ownerDocument;
        if (j) z = j.defaultView || j.parentWindow;
        else z = window;
      }
      var O, E;
      if (H) {
        var P = X.relatedTarget || X.toElement;
        if (((O = Z), (E = P ? $4(P) : null), E !== null)) {
          var R = K4(E);
          if (E !== R || (E.tag !== l && E.tag !== FJ)) E = null;
        }
      } else (O = null), (E = Z);
      if (O === E) return;
      var g = qH,
        y = "onMouseLeave",
        d = "onMouseEnter",
        VJ = "mouse";
      if (Q === "pointerout" || Q === "pointerover")
        (g = jH),
          (y = "onPointerLeave"),
          (d = "onPointerEnter"),
          (VJ = "pointer");
      var qJ = O == null ? z : V5(O),
        D = E == null ? z : V5(E),
        F = new g(y, VJ + "leave", O, X, G);
      (F.target = qJ), (F.relatedTarget = D);
      var $ = null,
        _ = $4(G);
      if (_ === Z) {
        var h = new g(d, VJ + "enter", E, X, G);
        (h.target = D), (h.relatedTarget = qJ), ($ = h);
      }
      DO(J, F, $, O, E);
    }
    function pq(J, Q) {
      return (J === Q && (J !== 0 || 1 / J === 1 / Q)) || (J !== J && Q !== Q);
    }
    var fZ = typeof Object.is === "function" ? Object.is : pq;
    function v6(J, Q) {
      if (fZ(J, Q)) return !0;
      if (
        typeof J !== "object" ||
        J === null ||
        typeof Q !== "object" ||
        Q === null
      )
        return !1;
      var Z = Object.keys(J),
        X = Object.keys(Q);
      if (Z.length !== X.length) return !1;
      for (var G = 0; G < Z.length; G++) {
        var B = Z[G];
        if (!uQ.call(Q, B) || !fZ(J[B], Q[B])) return !1;
      }
      return !0;
    }
    function CH(J) {
      while (J && J.firstChild) J = J.firstChild;
      return J;
    }
    function oq(J) {
      while (J) {
        if (J.nextSibling) return J.nextSibling;
        J = J.parentNode;
      }
    }
    function vH(J, Q) {
      var Z = CH(J),
        X = 0,
        G = 0;
      while (Z) {
        if (Z.nodeType === n0) {
          if (((G = X + Z.textContent.length), X <= Q && G >= Q))
            return { node: Z, offset: Q - X };
          X = G;
        }
        Z = CH(oq(Z));
      }
    }
    function rq(J) {
      var Q = J.ownerDocument,
        Z = (Q && Q.defaultView) || window,
        X = Z.getSelection && Z.getSelection();
      if (!X || X.rangeCount === 0) return null;
      var { anchorNode: G, anchorOffset: B, focusNode: U, focusOffset: Y } = X;
      try {
        G.nodeType, U.nodeType;
      } catch (H) {
        return null;
      }
      return nq(J, G, B, U, Y);
    }
    function nq(J, Q, Z, X, G) {
      var B = 0,
        U = -1,
        Y = -1,
        H = 0,
        W = 0,
        z = J,
        j = null;
      J: while (!0) {
        var O = null;
        while (!0) {
          if (z === Q && (Z === 0 || z.nodeType === n0)) U = B + Z;
          if (z === X && (G === 0 || z.nodeType === n0)) Y = B + G;
          if (z.nodeType === n0) B += z.nodeValue.length;
          if ((O = z.firstChild) === null) break;
          (j = z), (z = O);
        }
        while (!0) {
          if (z === J) break J;
          if (j === Q && ++H === Z) U = B;
          if (j === X && ++W === G) Y = B;
          if ((O = z.nextSibling) !== null) break;
          (z = j), (j = z.parentNode);
        }
        z = O;
      }
      if (U === -1 || Y === -1) return null;
      return { start: U, end: Y };
    }
    function tq(J, Q) {
      var Z = J.ownerDocument || document,
        X = (Z && Z.defaultView) || window;
      if (!X.getSelection) return;
      var G = X.getSelection(),
        B = J.textContent.length,
        U = Math.min(Q.start, B),
        Y = Q.end === void 0 ? U : Math.min(Q.end, B);
      if (!G.extend && U > Y) {
        var H = Y;
        (Y = U), (U = H);
      }
      var W = vH(J, U),
        z = vH(J, Y);
      if (W && z) {
        if (
          G.rangeCount === 1 &&
          G.anchorNode === W.node &&
          G.anchorOffset === W.offset &&
          G.focusNode === z.node &&
          G.focusOffset === z.offset
        )
          return;
        var j = Z.createRange();
        if ((j.setStart(W.node, W.offset), G.removeAllRanges(), U > Y))
          G.addRange(j), G.extend(z.node, z.offset);
        else j.setEnd(z.node, z.offset), G.addRange(j);
      }
    }
    function NH(J) {
      return J && J.nodeType === n0;
    }
    function bH(J, Q) {
      if (!J || !Q) return !1;
      else if (J === Q) return !0;
      else if (NH(J)) return !1;
      else if (NH(Q)) return bH(J, Q.parentNode);
      else if ("contains" in J) return J.contains(Q);
      else if (J.compareDocumentPosition)
        return !!(J.compareDocumentPosition(Q) & 16);
      else return !1;
    }
    function eq(J) {
      return J && J.ownerDocument && bH(J.ownerDocument.documentElement, J);
    }
    function JO(J) {
      try {
        return typeof J.contentWindow.location.href === "string";
      } catch (Q) {
        return !1;
      }
    }
    function kH() {
      var J = window,
        Q = l4();
      while (Q instanceof J.HTMLIFrameElement) {
        if (JO(Q)) J = Q.contentWindow;
        else return Q;
        Q = l4(J.document);
      }
      return Q;
    }
    function VG(J) {
      var Q = J && J.nodeName && J.nodeName.toLowerCase();
      return (
        Q &&
        ((Q === "input" &&
          (J.type === "text" ||
            J.type === "search" ||
            J.type === "tel" ||
            J.type === "url" ||
            J.type === "password")) ||
          Q === "textarea" ||
          J.contentEditable === "true")
      );
    }
    function QO() {
      var J = kH();
      return { focusedElem: J, selectionRange: VG(J) ? XO(J) : null };
    }
    function ZO(J) {
      var Q = kH(),
        Z = J.focusedElem,
        X = J.selectionRange;
      if (Q !== Z && eq(Z)) {
        if (X !== null && VG(Z)) GO(Z, X);
        var G = [],
          B = Z;
        while ((B = B.parentNode))
          if (B.nodeType === IZ)
            G.push({ element: B, left: B.scrollLeft, top: B.scrollTop });
        if (typeof Z.focus === "function") Z.focus();
        for (var U = 0; U < G.length; U++) {
          var Y = G[U];
          (Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top);
        }
      }
    }
    function XO(J) {
      var Q;
      if ("selectionStart" in J)
        Q = { start: J.selectionStart, end: J.selectionEnd };
      else Q = rq(J);
      return Q || { start: 0, end: 0 };
    }
    function GO(J, Q) {
      var { start: Z, end: X } = Q;
      if (X === void 0) X = Z;
      if ("selectionStart" in J)
        (J.selectionStart = Z), (J.selectionEnd = Math.min(X, J.value.length));
      else tq(J, Q);
    }
    var BO = fQ && "documentMode" in document && document.documentMode <= 11;
    function UO() {
      QZ("onSelect", [
        "focusout",
        "contextmenu",
        "dragend",
        "focusin",
        "keydown",
        "keyup",
        "mousedown",
        "mouseup",
        "selectionchange",
      ]);
    }
    var H5 = null,
      qG = null,
      N6 = null,
      OG = !1;
    function YO(J) {
      if ("selectionStart" in J && VG(J))
        return { start: J.selectionStart, end: J.selectionEnd };
      else {
        var Q = (J.ownerDocument && J.ownerDocument.defaultView) || window,
          Z = Q.getSelection();
        return {
          anchorNode: Z.anchorNode,
          anchorOffset: Z.anchorOffset,
          focusNode: Z.focusNode,
          focusOffset: Z.focusOffset,
        };
      }
    }
    function HO(J) {
      return J.window === J
        ? J.document
        : J.nodeType === t0
          ? J
          : J.ownerDocument;
    }
    function gH(J, Q, Z) {
      var X = HO(Z);
      if (OG || H5 == null || H5 !== l4(X)) return;
      var G = YO(H5);
      if (!N6 || !v6(N6, G)) {
        N6 = G;
        var B = j8(qG, "onSelect");
        if (B.length > 0) {
          var U = new YG("onSelect", "select", null, Q, Z);
          J.push({ event: U, listeners: B }), (U.target = H5);
        }
      }
    }
    function KO(J, Q, Z, X, G, B, U) {
      var Y = Z ? V5(Z) : window;
      switch (Q) {
        case "focusin":
          if (IH(Y) || Y.contentEditable === "true")
            (H5 = Y), (qG = Z), (N6 = null);
          break;
        case "focusout":
          (H5 = null), (qG = null), (N6 = null);
          break;
        case "mousedown":
          OG = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (OG = !1), gH(J, X, G);
          break;
        case "selectionchange":
          if (BO) break;
        case "keydown":
        case "keyup":
          gH(J, X, G);
      }
    }
    function V8(J, Q) {
      var Z = {};
      return (
        (Z[J.toLowerCase()] = Q.toLowerCase()),
        (Z["Webkit" + J] = "webkit" + Q),
        (Z["Moz" + J] = "moz" + Q),
        Z
      );
    }
    var K5 = {
        animationend: V8("Animation", "AnimationEnd"),
        animationiteration: V8("Animation", "AnimationIteration"),
        animationstart: V8("Animation", "AnimationStart"),
        transitionend: V8("Transition", "TransitionEnd"),
      },
      jG = {},
      TH = {};
    if (fQ) {
      if (
        ((TH = document.createElement("div").style),
        !("AnimationEvent" in window))
      )
        delete K5.animationend.animation,
          delete K5.animationiteration.animation,
          delete K5.animationstart.animation;
      if (!("TransitionEvent" in window)) delete K5.transitionend.transition;
    }
    function q8(J) {
      if (jG[J]) return jG[J];
      else if (!K5[J]) return J;
      var Q = K5[J];
      for (var Z in Q)
        if (Q.hasOwnProperty(Z) && Z in TH) return (jG[J] = Q[Z]);
      return J;
    }
    var hH = q8("animationend"),
      fH = q8("animationiteration"),
      uH = q8("animationstart"),
      dH = q8("transitionend"),
      sH = new Map(),
      mH = [
        "abort",
        "auxClick",
        "cancel",
        "canPlay",
        "canPlayThrough",
        "click",
        "close",
        "contextMenu",
        "copy",
        "cut",
        "drag",
        "dragEnd",
        "dragEnter",
        "dragExit",
        "dragLeave",
        "dragOver",
        "dragStart",
        "drop",
        "durationChange",
        "emptied",
        "encrypted",
        "ended",
        "error",
        "gotPointerCapture",
        "input",
        "invalid",
        "keyDown",
        "keyPress",
        "keyUp",
        "load",
        "loadedData",
        "loadedMetadata",
        "loadStart",
        "lostPointerCapture",
        "mouseDown",
        "mouseMove",
        "mouseOut",
        "mouseOver",
        "mouseUp",
        "paste",
        "pause",
        "play",
        "playing",
        "pointerCancel",
        "pointerDown",
        "pointerMove",
        "pointerOut",
        "pointerOver",
        "pointerUp",
        "progress",
        "rateChange",
        "reset",
        "resize",
        "seeked",
        "seeking",
        "stalled",
        "submit",
        "suspend",
        "timeUpdate",
        "touchCancel",
        "touchEnd",
        "touchStart",
        "volumeChange",
        "scroll",
        "toggle",
        "touchMove",
        "waiting",
        "wheel",
      ];
    function g1(J, Q) {
      sH.set(J, Q), QZ(Q, [J]);
    }
    function WO() {
      for (var J = 0; J < mH.length; J++) {
        var Q = mH[J],
          Z = Q.toLowerCase(),
          X = Q[0].toUpperCase() + Q.slice(1);
        g1(Z, "on" + X);
      }
      g1(hH, "onAnimationEnd"),
        g1(fH, "onAnimationIteration"),
        g1(uH, "onAnimationStart"),
        g1("dblclick", "onDoubleClick"),
        g1("focusin", "onFocus"),
        g1("focusout", "onBlur"),
        g1(dH, "onTransitionEnd");
    }
    function zO(J, Q, Z, X, G, B, U) {
      var Y = sH.get(Q);
      if (Y === void 0) return;
      var H = YG,
        W = Q;
      switch (Q) {
        case "keypress":
          if (K8(X) === 0) return;
        case "keydown":
        case "keyup":
          H = Mq;
          break;
        case "focusin":
          (W = "focus"), (H = WG);
          break;
        case "focusout":
          (W = "blur"), (H = WG);
          break;
        case "beforeblur":
        case "afterblur":
          H = WG;
          break;
        case "click":
          if (X.button === 2) return;
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          H = qH;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          H = tV;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          H = Oq;
          break;
        case hH:
        case fH:
        case uH:
          H = Qq;
          break;
        case dH:
          H = Dq;
          break;
        case "scroll":
          H = oV;
          break;
        case "wheel":
          H = Pq;
          break;
        case "copy":
        case "cut":
        case "paste":
          H = Xq;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          H = jH;
          break;
      }
      var z = (B & X6) !== 0;
      {
        var j = !z && Q === "scroll",
          O = OO(Z, Y, X.type, z, j);
        if (O.length > 0) {
          var E = new H(Y, W, null, X, G);
          J.push({ event: E, listeners: O });
        }
      }
    }
    WO(), iq(), bq(), UO(), Rq();
    function MO(J, Q, Z, X, G, B, U) {
      zO(J, Q, Z, X, G, B);
      var Y = (B & YM) === 0;
      if (Y)
        aq(J, Q, Z, X, G),
          cq(J, Q, Z, X, G),
          KO(J, Q, Z, X, G),
          Cq(J, Q, Z, X, G);
    }
    var b6 = [
        "abort",
        "canplay",
        "canplaythrough",
        "durationchange",
        "emptied",
        "encrypted",
        "ended",
        "error",
        "loadeddata",
        "loadedmetadata",
        "loadstart",
        "pause",
        "play",
        "playing",
        "progress",
        "ratechange",
        "resize",
        "seeked",
        "seeking",
        "stalled",
        "suspend",
        "timeupdate",
        "volumechange",
        "waiting",
      ],
      DG = new Set(
        ["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(b6),
      );
    function yH(J, Q, Z) {
      var X = J.type || "unknown-event";
      (J.currentTarget = Z), PM(X, Q, void 0, J), (J.currentTarget = null);
    }
    function VO(J, Q, Z) {
      var X;
      if (Z)
        for (var G = Q.length - 1; G >= 0; G--) {
          var B = Q[G],
            U = B.instance,
            Y = B.currentTarget,
            H = B.listener;
          if (U !== X && J.isPropagationStopped()) return;
          yH(J, H, Y), (X = U);
        }
      else
        for (var W = 0; W < Q.length; W++) {
          var z = Q[W],
            j = z.instance,
            O = z.currentTarget,
            E = z.listener;
          if (j !== X && J.isPropagationStopped()) return;
          yH(J, E, O), (X = j);
        }
    }
    function lH(J, Q) {
      var Z = (Q & X6) !== 0;
      for (var X = 0; X < J.length; X++) {
        var G = J[X],
          B = G.event,
          U = G.listeners;
        VO(B, U, Z);
      }
      AM();
    }
    function qO(J, Q, Z, X, G) {
      var B = MX(Z),
        U = [];
      MO(U, J, X, Z, B, Q), lH(U, Q);
    }
    function nJ(J, Q) {
      if (!DG.has(J))
        M(
          'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.This is a bug in React. Please file an issue.',
          J,
        );
      var Z = !1,
        X = lj(Q),
        G = $O(J, Z);
      if (!X.has(G)) cH(Q, J, zX, Z), X.add(G);
    }
    function $G(J, Q, Z) {
      if (DG.has(J) && !Q)
        M(
          'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
          J,
        );
      var X = 0;
      if (Q) X |= X6;
      cH(Z, J, X, Q);
    }
    var O8 = "_reactListening" + Math.random().toString(36).slice(2);
    function k6(J) {
      if (!J[O8]) {
        (J[O8] = !0),
          vZ.forEach(function (Z) {
            if (Z !== "selectionchange") {
              if (!DG.has(Z)) $G(Z, !1, J);
              $G(Z, !0, J);
            }
          });
        var Q = J.nodeType === t0 ? J : J.ownerDocument;
        if (Q !== null) {
          if (!Q[O8]) (Q[O8] = !0), $G("selectionchange", !1, Q);
        }
      }
    }
    function cH(J, Q, Z, X, G) {
      var B = uV(J, Q, Z),
        U = void 0;
      if (OX) {
        if (Q === "touchstart" || Q === "touchmove" || Q === "wheel") U = !0;
      }
      J = J;
      var Y;
      if (X)
        if (U !== void 0) Y = cV(J, Q, B, U);
        else Y = lV(J, Q, B);
      else if (U !== void 0) Y = iV(J, Q, B, U);
      else Y = yV(J, Q, B);
    }
    function iH(J, Q) {
      return J === Q || (J.nodeType === VQ && J.parentNode === Q);
    }
    function PG(J, Q, Z, X, G) {
      var B = X;
      if ((Q & EY) === 0 && (Q & zX) === 0) {
        var U = G;
        if (X !== null) {
          var Y = X;
          J: while (!0) {
            if (Y === null) return;
            var H = Y.tag;
            if (H === s || H === OJ) {
              var W = Y.stateNode.containerInfo;
              if (iH(W, U)) break;
              if (H === OJ) {
                var z = Y.return;
                while (z !== null) {
                  var j = z.tag;
                  if (j === s || j === OJ) {
                    var O = z.stateNode.containerInfo;
                    if (iH(O, U)) return;
                  }
                  z = z.return;
                }
              }
              while (W !== null) {
                var E = $4(W);
                if (E === null) return;
                var P = E.tag;
                if (P === l || P === FJ) {
                  Y = B = E;
                  continue J;
                }
                W = W.parentNode;
              }
            }
            Y = Y.return;
          }
        }
      }
      wY(function () {
        return qO(J, Q, Z, B);
      });
    }
    function g6(J, Q, Z) {
      return { instance: J, listener: Q, currentTarget: Z };
    }
    function OO(J, Q, Z, X, G, B) {
      var U = Q !== null ? Q + "Capture" : null,
        Y = X ? U : Q,
        H = [],
        W = J,
        z = null;
      while (W !== null) {
        var j = W,
          O = j.stateNode,
          E = j.tag;
        if (E === l && O !== null) {
          if (((z = O), Y !== null)) {
            var P = B6(W, Y);
            if (P != null) H.push(g6(W, P, z));
          }
        }
        if (G) break;
        W = W.return;
      }
      return H;
    }
    function j8(J, Q) {
      var Z = Q + "Capture",
        X = [],
        G = J;
      while (G !== null) {
        var B = G,
          U = B.stateNode,
          Y = B.tag;
        if (Y === l && U !== null) {
          var H = U,
            W = B6(G, Z);
          if (W != null) X.unshift(g6(G, W, H));
          var z = B6(G, Q);
          if (z != null) X.push(g6(G, z, H));
        }
        G = G.return;
      }
      return X;
    }
    function W5(J) {
      if (J === null) return null;
      do J = J.return;
      while (J && J.tag !== l);
      if (J) return J;
      return null;
    }
    function jO(J, Q) {
      var Z = J,
        X = Q,
        G = 0;
      for (var B = Z; B; B = W5(B)) G++;
      var U = 0;
      for (var Y = X; Y; Y = W5(Y)) U++;
      while (G - U > 0) (Z = W5(Z)), G--;
      while (U - G > 0) (X = W5(X)), U--;
      var H = G;
      while (H--) {
        if (Z === X || (X !== null && Z === X.alternate)) return Z;
        (Z = W5(Z)), (X = W5(X));
      }
      return null;
    }
    function aH(J, Q, Z, X, G) {
      var B = Q._reactName,
        U = [],
        Y = Z;
      while (Y !== null) {
        if (Y === X) break;
        var H = Y,
          W = H.alternate,
          z = H.stateNode,
          j = H.tag;
        if (W !== null && W === X) break;
        if (j === l && z !== null) {
          var O = z;
          if (G) {
            var E = B6(Y, B);
            if (E != null) U.unshift(g6(Y, E, O));
          } else if (!G) {
            var P = B6(Y, B);
            if (P != null) U.push(g6(Y, P, O));
          }
        }
        Y = Y.return;
      }
      if (U.length !== 0) J.push({ event: Q, listeners: U });
    }
    function DO(J, Q, Z, X, G) {
      var B = X && G ? jO(X, G) : null;
      if (X !== null) aH(J, Q, X, B, !1);
      if (G !== null && Z !== null) aH(J, Z, G, B, !0);
    }
    function $O(J, Q) {
      return J + "__" + (Q ? "capture" : "bubble");
    }
    var xZ = !1,
      T6 = "dangerouslySetInnerHTML",
      D8 = "suppressContentEditableWarning",
      T1 = "suppressHydrationWarning",
      pH = "autoFocus",
      j4 = "children",
      D4 = "style",
      $8 = "__html",
      AG,
      P8,
      h6,
      oH,
      A8,
      rH,
      nH;
    (AG = { dialog: !0, webview: !0 }),
      (P8 = function (J, Q) {
        JM(J, Q),
          QM(J, Q),
          UM(J, Q, {
            registrationNameDependencies: zZ,
            possibleRegistrationNames: iZ,
          });
      }),
      (rH = fQ && !document.documentMode),
      (h6 = function (J, Q, Z) {
        if (xZ) return;
        var X = E8(Z),
          G = E8(Q);
        if (G === X) return;
        (xZ = !0),
          M(
            "Prop `%s` did not match. Server: %s Client: %s",
            J,
            JSON.stringify(G),
            JSON.stringify(X),
          );
      }),
      (oH = function (J) {
        if (xZ) return;
        xZ = !0;
        var Q = [];
        J.forEach(function (Z) {
          Q.push(Z);
        }),
          M("Extra attributes from the server: %s", Q);
      }),
      (A8 = function (J, Q) {
        if (Q === !1)
          M(
            "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.If you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
            J,
            J,
            J,
          );
        else
          M(
            "Expected `%s` listener to be a function, instead got a value of `%s` type.",
            J,
            typeof Q,
          );
      }),
      (nH = function (J, Q) {
        var Z =
          J.namespaceURI === r0
            ? J.ownerDocument.createElement(J.tagName)
            : J.ownerDocument.createElementNS(J.namespaceURI, J.tagName);
        return (Z.innerHTML = Q), Z.innerHTML;
      });
    var PO = /\r\n?/g,
      AO = /\u0000|\uFFFD/g;
    function E8(J) {
      aZ(J);
      var Q = typeof J === "string" ? J : "" + J;
      return Q.replace(PO, "\n").replace(AO, "");
    }
    function R8(J, Q, Z, X) {
      var G = E8(Q),
        B = E8(J);
      if (B === G) return;
      if (X) {
        if (!xZ)
          (xZ = !0),
            M('Text content did not match. Server: "%s" Client: "%s"', B, G);
      }
      if (Z && w0)
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function tH(J) {
      return J.nodeType === t0 ? J : J.ownerDocument;
    }
    function EO() {}
    function L8(J) {
      J.onclick = EO;
    }
    function RO(J, Q, Z, X, G) {
      for (var B in X) {
        if (!X.hasOwnProperty(B)) continue;
        var U = X[B];
        if (B === D4) {
          if (U) Object.freeze(U);
          OY(Q, U);
        } else if (B === T6) {
          var Y = U ? U[$8] : void 0;
          if (Y != null) WY(Q, Y);
        } else if (B === j4) {
          if (typeof U === "string") {
            var H = J !== "textarea" || U !== "";
            if (H) l7(Q, U);
          } else if (typeof U === "number") l7(Q, "" + U);
        } else if (B === D8 || B === T1);
        else if (B === pH);
        else if (zZ.hasOwnProperty(B)) {
          if (U != null) {
            if (typeof U !== "function") A8(B, U);
            if (B === "onScroll") nJ("scroll", Q);
          }
        } else if (U != null) Q4(Q, B, U, G);
      }
    }
    function LO(J, Q, Z, X) {
      for (var G = 0; G < Q.length; G += 2) {
        var B = Q[G],
          U = Q[G + 1];
        if (B === D4) OY(J, U);
        else if (B === T6) WY(J, U);
        else if (B === j4) l7(J, U);
        else Q4(J, B, U, X);
      }
    }
    function FO(J, Q, Z, X) {
      var G,
        B = tH(Z),
        U,
        Y = X;
      if (Y === r0) Y = BX(J);
      if (Y === r0) {
        if (((G = G4(J, Q)), !G && J !== J.toLowerCase()))
          M(
            "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
            J,
          );
        if (J === "script") {
          var H = B.createElement("div");
          H.innerHTML = "<script></script>";
          var W = H.firstChild;
          U = H.removeChild(W);
        } else if (typeof Q.is === "string")
          U = B.createElement(J, { is: Q.is });
        else if (((U = B.createElement(J)), J === "select")) {
          var z = U;
          if (Q.multiple) z.multiple = !0;
          else if (Q.size) z.size = Q.size;
        }
      } else U = B.createElementNS(Y, J);
      if (Y === r0) {
        if (
          !G &&
          Object.prototype.toString.call(U) === "[object HTMLUnknownElement]" &&
          !uQ.call(AG, J)
        )
          (AG[J] = !0),
            M(
              "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.If you meant to render a React component, start its name with an uppercase letter.",
              J,
            );
      }
      return U;
    }
    function IO(J, Q) {
      return tH(Q).createTextNode(J);
    }
    function xO(J, Q, Z, X) {
      var G = G4(Q, Z);
      P8(Q, Z);
      var B;
      switch (Q) {
        case "dialog":
          nJ("cancel", J), nJ("close", J), (B = Z);
          break;
        case "iframe":
        case "object":
        case "embed":
          nJ("load", J), (B = Z);
          break;
        case "video":
        case "audio":
          for (var U = 0; U < b6.length; U++) nJ(b6[U], J);
          B = Z;
          break;
        case "source":
          nJ("error", J), (B = Z);
          break;
        case "img":
        case "image":
        case "link":
          nJ("error", J), nJ("load", J), (B = Z);
          break;
        case "details":
          nJ("toggle", J), (B = Z);
          break;
        case "input":
          L(J, Z), (B = A(J, Z)), nJ("invalid", J);
          break;
        case "option":
          JQ(J, Z), (B = Z);
          break;
        case "select":
          BY(J, Z), (B = Q6(J, Z)), nJ("invalid", J);
          break;
        case "textarea":
          YY(J, Z), (B = XX(J, Z)), nJ("invalid", J);
          break;
        default:
          B = Z;
      }
      switch ((WX(Q, B), RO(Q, J, X, B, G), Q)) {
        case "input":
          S1(J), u(J, Z, !1);
          break;
        case "textarea":
          S1(J), KY(J);
          break;
        case "option":
          PQ(J, Z);
          break;
        case "select":
          R3(J, Z);
          break;
        default:
          if (typeof B.onClick === "function") L8(J);
          break;
      }
    }
    function wO(J, Q, Z, X, G) {
      P8(Q, X);
      var B = null,
        U,
        Y;
      switch (Q) {
        case "input":
          (U = A(J, Z)), (Y = A(J, X)), (B = []);
          break;
        case "select":
          (U = Q6(J, Z)), (Y = Q6(J, X)), (B = []);
          break;
        case "textarea":
          (U = XX(J, Z)), (Y = XX(J, X)), (B = []);
          break;
        default:
          if (
            ((U = Z),
            (Y = X),
            typeof U.onClick !== "function" && typeof Y.onClick === "function")
          )
            L8(J);
          break;
      }
      WX(Q, Y);
      var H,
        W,
        z = null;
      for (H in U) {
        if (Y.hasOwnProperty(H) || !U.hasOwnProperty(H) || U[H] == null)
          continue;
        if (H === D4) {
          var j = U[H];
          for (W in j)
            if (j.hasOwnProperty(W)) {
              if (!z) z = {};
              z[W] = "";
            }
        } else if (H === T6 || H === j4);
        else if (H === D8 || H === T1);
        else if (H === pH);
        else if (zZ.hasOwnProperty(H)) {
          if (!B) B = [];
        } else (B = B || []).push(H, null);
      }
      for (H in Y) {
        var O = Y[H],
          E = U != null ? U[H] : void 0;
        if (!Y.hasOwnProperty(H) || O === E || (O == null && E == null))
          continue;
        if (H === D4) {
          if (O) Object.freeze(O);
          if (E) {
            for (W in E)
              if (E.hasOwnProperty(W) && (!O || !O.hasOwnProperty(W))) {
                if (!z) z = {};
                z[W] = "";
              }
            for (W in O)
              if (O.hasOwnProperty(W) && E[W] !== O[W]) {
                if (!z) z = {};
                z[W] = O[W];
              }
          } else {
            if (!z) {
              if (!B) B = [];
              B.push(H, z);
            }
            z = O;
          }
        } else if (H === T6) {
          var P = O ? O[$8] : void 0,
            R = E ? E[$8] : void 0;
          if (P != null) {
            if (R !== P) (B = B || []).push(H, P);
          }
        } else if (H === j4) {
          if (typeof O === "string" || typeof O === "number")
            (B = B || []).push(H, "" + O);
        } else if (H === D8 || H === T1);
        else if (zZ.hasOwnProperty(H)) {
          if (O != null) {
            if (typeof O !== "function") A8(H, O);
            if (H === "onScroll") nJ("scroll", J);
          }
          if (!B && E !== O) B = [];
        } else (B = B || []).push(H, O);
      }
      if (z) i3(z, Y[D4]), (B = B || []).push(D4, z);
      return B;
    }
    function _O(J, Q, Z, X, G) {
      if (Z === "input" && G.type === "radio" && G.name != null) S(J, G);
      var B = G4(Z, X),
        U = G4(Z, G);
      switch ((LO(J, Q, B, U), Z)) {
        case "input":
          i(J, G);
          break;
        case "textarea":
          HY(J, G);
          break;
        case "select":
          L3(J, G);
          break;
      }
    }
    function SO(J) {
      {
        var Q = J.toLowerCase();
        if (!c7.hasOwnProperty(Q)) return null;
        return c7[Q] || null;
      }
    }
    function CO(J, Q, Z, X, G, B, U) {
      var Y, H;
      switch (((Y = G4(Q, Z)), P8(Q, Z), Q)) {
        case "dialog":
          nJ("cancel", J), nJ("close", J);
          break;
        case "iframe":
        case "object":
        case "embed":
          nJ("load", J);
          break;
        case "video":
        case "audio":
          for (var W = 0; W < b6.length; W++) nJ(b6[W], J);
          break;
        case "source":
          nJ("error", J);
          break;
        case "img":
        case "image":
        case "link":
          nJ("error", J), nJ("load", J);
          break;
        case "details":
          nJ("toggle", J);
          break;
        case "input":
          L(J, Z), nJ("invalid", J);
          break;
        case "option":
          JQ(J, Z);
          break;
        case "select":
          BY(J, Z), nJ("invalid", J);
          break;
        case "textarea":
          YY(J, Z), nJ("invalid", J);
          break;
      }
      WX(Q, Z);
      {
        H = new Set();
        var z = J.attributes;
        for (var j = 0; j < z.length; j++) {
          var O = z[j].name.toLowerCase();
          switch (O) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              H.add(z[j].name);
          }
        }
      }
      var E = null;
      for (var P in Z) {
        if (!Z.hasOwnProperty(P)) continue;
        var R = Z[P];
        if (P === j4) {
          if (typeof R === "string") {
            if (J.textContent !== R) {
              if (Z[T1] !== !0) R8(J.textContent, R, B, U);
              E = [j4, R];
            }
          } else if (typeof R === "number") {
            if (J.textContent !== "" + R) {
              if (Z[T1] !== !0) R8(J.textContent, R, B, U);
              E = [j4, "" + R];
            }
          }
        } else if (zZ.hasOwnProperty(P)) {
          if (R != null) {
            if (typeof R !== "function") A8(P, R);
            if (P === "onScroll") nJ("scroll", J);
          }
        } else if (U && !0 && typeof Y === "boolean") {
          var g = void 0,
            y = Y && RZ ? null : qZ(P);
          if (Z[T1] === !0);
          else if (
            P === D8 ||
            P === T1 ||
            P === "value" ||
            P === "checked" ||
            P === "selected"
          );
          else if (P === T6) {
            var d = J.innerHTML,
              VJ = R ? R[$8] : void 0;
            if (VJ != null) {
              var qJ = nH(J, VJ);
              if (qJ !== d) h6(P, d, qJ);
            }
          } else if (P === D4) {
            if ((H.delete(P), rH)) {
              var D = l3(R);
              if (((g = J.getAttribute("style")), D !== g)) h6(P, g, D);
            }
          } else if (Y && !RZ) {
            if ((H.delete(P.toLowerCase()), (g = h4(J, P, R)), R !== g))
              h6(P, g, R);
          } else if (!GQ(P, y, Y) && !sJ(P, R, y, Y)) {
            var F = !1;
            if (y !== null) H.delete(y.attributeName), (g = T4(J, P, R, y));
            else {
              var $ = X;
              if ($ === r0) $ = BX(Q);
              if ($ === r0) H.delete(P.toLowerCase());
              else {
                var _ = SO(P);
                if (_ !== null && _ !== P) (F = !0), H.delete(_);
                H.delete(P);
              }
              g = h4(J, P, R);
            }
            var h = RZ;
            if (!h && R !== g && !F) h6(P, g, R);
          }
        }
      }
      if (U) {
        if (H.size > 0 && Z[T1] !== !0) oH(H);
      }
      switch (Q) {
        case "input":
          S1(J), u(J, Z, !0);
          break;
        case "textarea":
          S1(J), KY(J);
          break;
        case "select":
        case "option":
          break;
        default:
          if (typeof Z.onClick === "function") L8(J);
          break;
      }
      return E;
    }
    function vO(J, Q, Z) {
      var X = J.nodeValue !== Q;
      return X;
    }
    function EG(J, Q) {
      {
        if (xZ) return;
        (xZ = !0),
          M(
            "Did not expect server HTML to contain a <%s> in <%s>.",
            Q.nodeName.toLowerCase(),
            J.nodeName.toLowerCase(),
          );
      }
    }
    function RG(J, Q) {
      {
        if (xZ) return;
        (xZ = !0),
          M(
            'Did not expect server HTML to contain the text node "%s" in <%s>.',
            Q.nodeValue,
            J.nodeName.toLowerCase(),
          );
      }
    }
    function LG(J, Q, Z) {
      {
        if (xZ) return;
        (xZ = !0),
          M(
            "Expected server HTML to contain a matching <%s> in <%s>.",
            Q,
            J.nodeName.toLowerCase(),
          );
      }
    }
    function FG(J, Q) {
      {
        if (Q === "") return;
        if (xZ) return;
        (xZ = !0),
          M(
            'Expected server HTML to contain a matching text node for "%s" in <%s>.',
            Q,
            J.nodeName.toLowerCase(),
          );
      }
    }
    function NO(J, Q, Z) {
      switch (Q) {
        case "input":
          BJ(J, Z);
          return;
        case "textarea":
          I3(J, Z);
          return;
        case "select":
          F3(J, Z);
          return;
      }
    }
    var f6 = function () {},
      u6 = function () {};
    {
      var bO = [
          "address",
          "applet",
          "area",
          "article",
          "aside",
          "base",
          "basefont",
          "bgsound",
          "blockquote",
          "body",
          "br",
          "button",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dir",
          "div",
          "dl",
          "dt",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "iframe",
          "img",
          "input",
          "isindex",
          "li",
          "link",
          "listing",
          "main",
          "marquee",
          "menu",
          "menuitem",
          "meta",
          "nav",
          "noembed",
          "noframes",
          "noscript",
          "object",
          "ol",
          "p",
          "param",
          "plaintext",
          "pre",
          "script",
          "section",
          "select",
          "source",
          "style",
          "summary",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
          "wbr",
          "xmp",
        ],
        eH = [
          "applet",
          "caption",
          "html",
          "table",
          "td",
          "th",
          "marquee",
          "object",
          "template",
          "foreignObject",
          "desc",
          "title",
        ],
        kO = eH.concat(["button"]),
        gO = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"],
        JK = {
          current: null,
          formTag: null,
          aTagInScope: null,
          buttonTagInScope: null,
          nobrTagInScope: null,
          pTagInButtonScope: null,
          listItemTagAutoclosing: null,
          dlItemTagAutoclosing: null,
        };
      u6 = function (J, Q) {
        var Z = MJ({}, J || JK),
          X = { tag: Q };
        if (eH.indexOf(Q) !== -1)
          (Z.aTagInScope = null),
            (Z.buttonTagInScope = null),
            (Z.nobrTagInScope = null);
        if (kO.indexOf(Q) !== -1) Z.pTagInButtonScope = null;
        if (bO.indexOf(Q) !== -1 && Q !== "address" && Q !== "div" && Q !== "p")
          (Z.listItemTagAutoclosing = null), (Z.dlItemTagAutoclosing = null);
        if (((Z.current = X), Q === "form")) Z.formTag = X;
        if (Q === "a") Z.aTagInScope = X;
        if (Q === "button") Z.buttonTagInScope = X;
        if (Q === "nobr") Z.nobrTagInScope = X;
        if (Q === "p") Z.pTagInButtonScope = X;
        if (Q === "li") Z.listItemTagAutoclosing = X;
        if (Q === "dd" || Q === "dt") Z.dlItemTagAutoclosing = X;
        return Z;
      };
      var TO = function (J, Q) {
          switch (Q) {
            case "select":
              return J === "option" || J === "optgroup" || J === "#text";
            case "optgroup":
              return J === "option" || J === "#text";
            case "option":
              return J === "#text";
            case "tr":
              return (
                J === "th" ||
                J === "td" ||
                J === "style" ||
                J === "script" ||
                J === "template"
              );
            case "tbody":
            case "thead":
            case "tfoot":
              return (
                J === "tr" ||
                J === "style" ||
                J === "script" ||
                J === "template"
              );
            case "colgroup":
              return J === "col" || J === "template";
            case "table":
              return (
                J === "caption" ||
                J === "colgroup" ||
                J === "tbody" ||
                J === "tfoot" ||
                J === "thead" ||
                J === "style" ||
                J === "script" ||
                J === "template"
              );
            case "head":
              return (
                J === "base" ||
                J === "basefont" ||
                J === "bgsound" ||
                J === "link" ||
                J === "meta" ||
                J === "title" ||
                J === "noscript" ||
                J === "noframes" ||
                J === "style" ||
                J === "script" ||
                J === "template"
              );
            case "html":
              return J === "head" || J === "body" || J === "frameset";
            case "frameset":
              return J === "frame";
            case "#document":
              return J === "html";
          }
          switch (J) {
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
              return (
                Q !== "h1" &&
                Q !== "h2" &&
                Q !== "h3" &&
                Q !== "h4" &&
                Q !== "h5" &&
                Q !== "h6"
              );
            case "rp":
            case "rt":
              return gO.indexOf(Q) === -1;
            case "body":
            case "caption":
            case "col":
            case "colgroup":
            case "frameset":
            case "frame":
            case "head":
            case "html":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
              return Q == null;
          }
          return !0;
        },
        hO = function (J, Q) {
          switch (J) {
            case "address":
            case "article":
            case "aside":
            case "blockquote":
            case "center":
            case "details":
            case "dialog":
            case "dir":
            case "div":
            case "dl":
            case "fieldset":
            case "figcaption":
            case "figure":
            case "footer":
            case "header":
            case "hgroup":
            case "main":
            case "menu":
            case "nav":
            case "ol":
            case "p":
            case "section":
            case "summary":
            case "ul":
            case "pre":
            case "listing":
            case "table":
            case "hr":
            case "xmp":
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
              return Q.pTagInButtonScope;
            case "form":
              return Q.formTag || Q.pTagInButtonScope;
            case "li":
              return Q.listItemTagAutoclosing;
            case "dd":
            case "dt":
              return Q.dlItemTagAutoclosing;
            case "button":
              return Q.buttonTagInScope;
            case "a":
              return Q.aTagInScope;
            case "nobr":
              return Q.nobrTagInScope;
          }
          return null;
        },
        QK = {};
      f6 = function (J, Q, Z) {
        Z = Z || JK;
        var X = Z.current,
          G = X && X.tag;
        if (Q != null) {
          if (J != null)
            M(
              "validateDOMNesting: when childText is passed, childTag should be null",
            );
          J = "#text";
        }
        var B = TO(J, G) ? null : X,
          U = B ? null : hO(J, Z),
          Y = B || U;
        if (!Y) return;
        var H = Y.tag,
          W = !!B + "|" + J + "|" + H;
        if (QK[W]) return;
        QK[W] = !0;
        var z = J,
          j = "";
        if (J === "#text")
          if (/\S/.test(Q)) z = "Text nodes";
          else
            (z = "Whitespace text nodes"),
              (j =
                " Make sure you don't have any extra whitespace between tags on each line of your source code.");
        else z = "<" + J + ">";
        if (B) {
          var O = "";
          if (H === "table" && J === "tr")
            O +=
              " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.";
          M(
            "validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",
            z,
            H,
            j,
            O,
          );
        } else
          M(
            "validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",
            z,
            H,
          );
      };
    }
    var F8 = "suppressHydrationWarning",
      I8 = "$",
      x8 = "/$",
      d6 = "$?",
      s6 = "$!",
      fO = "style",
      IG = null,
      xG = null;
    function uO(J) {
      var Q,
        Z,
        X = J.nodeType;
      switch (X) {
        case t0:
        case YX: {
          Q = X === t0 ? "#document" : "#fragment";
          var G = J.documentElement;
          Z = G ? G.namespaceURI : UX(null, "");
          break;
        }
        default: {
          var B = X === VQ ? J.parentNode : J,
            U = B.namespaceURI || null;
          (Q = B.tagName), (Z = UX(U, Q));
          break;
        }
      }
      {
        var Y = Q.toLowerCase(),
          H = u6(null, Y);
        return { namespace: Z, ancestorInfo: H };
      }
    }
    function dO(J, Q, Z) {
      {
        var X = J,
          G = UX(X.namespace, Q),
          B = u6(X.ancestorInfo, Q);
        return { namespace: G, ancestorInfo: B };
      }
    }
    function wG(J) {
      return J;
    }
    function sO(J) {
      (IG = fV()), (xG = QO());
      var Q = null;
      return KH(!1), Q;
    }
    function mO(J) {
      ZO(xG), KH(IG), (IG = null), (xG = null);
    }
    function yO(J, Q, Z, X, G) {
      var B;
      {
        var U = X;
        if (
          (f6(J, null, U.ancestorInfo),
          typeof Q.children === "string" || typeof Q.children === "number")
        ) {
          var Y = "" + Q.children,
            H = u6(U.ancestorInfo, J);
          f6(null, Y, H);
        }
        B = U.namespace;
      }
      var W = FO(J, Q, Z, B);
      return l6(G, W), gG(W, Q), W;
    }
    function lO(J, Q) {
      J.appendChild(Q);
    }
    function cO(J, Q, Z, X, G) {
      switch ((xO(J, Q, Z, X), Q)) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!Z.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function iO(J, Q, Z, X, G, B) {
      {
        var U = B;
        if (
          typeof X.children !== typeof Z.children &&
          (typeof X.children === "string" || typeof X.children === "number")
        ) {
          var Y = "" + X.children,
            H = u6(U.ancestorInfo, Q);
          f6(null, Y, H);
        }
      }
      return wO(J, Q, Z, X);
    }
    function _G(J, Q) {
      return (
        J === "textarea" ||
        J === "noscript" ||
        typeof Q.children === "string" ||
        typeof Q.children === "number" ||
        (typeof Q.dangerouslySetInnerHTML === "object" &&
          Q.dangerouslySetInnerHTML !== null &&
          Q.dangerouslySetInnerHTML.__html != null)
      );
    }
    function aO(J, Q, Z, X) {
      {
        var G = Z;
        f6(null, J, G.ancestorInfo);
      }
      var B = IO(J, Q);
      return l6(X, B), B;
    }
    function pO() {
      var J = window.event;
      if (J === void 0) return B1;
      return WH(J.type);
    }
    var SG = typeof setTimeout === "function" ? setTimeout : void 0,
      oO = typeof clearTimeout === "function" ? clearTimeout : void 0,
      CG = -1,
      ZK = typeof Promise === "function" ? Promise : void 0,
      rO =
        typeof queueMicrotask === "function"
          ? queueMicrotask
          : typeof ZK !== "undefined"
            ? function (J) {
                return ZK.resolve(null).then(J).catch(nO);
              }
            : SG;
    function nO(J) {
      setTimeout(function () {
        throw J;
      });
    }
    function tO(J, Q, Z, X) {
      switch (Q) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          if (Z.autoFocus) J.focus();
          return;
        case "img": {
          if (Z.src) J.src = Z.src;
          return;
        }
      }
    }
    function eO(J, Q, Z, X, G, B) {
      _O(J, Q, Z, X, G), gG(J, G);
    }
    function XK(J) {
      l7(J, "");
    }
    function Jj(J, Q, Z) {
      J.nodeValue = Z;
    }
    function Qj(J, Q) {
      J.appendChild(Q);
    }
    function Zj(J, Q) {
      var Z;
      if (J.nodeType === VQ) (Z = J.parentNode), Z.insertBefore(Q, J);
      else (Z = J), Z.appendChild(Q);
      var X = J._reactRootContainer;
      if ((X === null || X === void 0) && Z.onclick === null) L8(Z);
    }
    function Xj(J, Q, Z) {
      J.insertBefore(Q, Z);
    }
    function Gj(J, Q, Z) {
      if (J.nodeType === VQ) J.parentNode.insertBefore(Q, Z);
      else J.insertBefore(Q, Z);
    }
    function Bj(J, Q) {
      J.removeChild(Q);
    }
    function Uj(J, Q) {
      if (J.nodeType === VQ) J.parentNode.removeChild(Q);
      else J.removeChild(Q);
    }
    function vG(J, Q) {
      var Z = Q,
        X = 0;
      do {
        var G = Z.nextSibling;
        if ((J.removeChild(Z), G && G.nodeType === VQ)) {
          var B = G.data;
          if (B === x8)
            if (X === 0) {
              J.removeChild(G), L6(Q);
              return;
            } else X--;
          else if (B === I8 || B === d6 || B === s6) X++;
        }
        Z = G;
      } while (Z);
      L6(Q);
    }
    function Yj(J, Q) {
      if (J.nodeType === VQ) vG(J.parentNode, Q);
      else if (J.nodeType === IZ) vG(J, Q);
      L6(J);
    }
    function Hj(J) {
      J = J;
      var Q = J.style;
      if (typeof Q.setProperty === "function")
        Q.setProperty("display", "none", "important");
      else Q.display = "none";
    }
    function Kj(J) {
      J.nodeValue = "";
    }
    function Wj(J, Q) {
      J = J;
      var Z = Q[fO],
        X =
          Z !== void 0 && Z !== null && Z.hasOwnProperty("display")
            ? Z.display
            : null;
      J.style.display = HX("display", X);
    }
    function zj(J, Q) {
      J.nodeValue = Q;
    }
    function Mj(J) {
      if (J.nodeType === IZ) J.textContent = "";
      else if (J.nodeType === t0) {
        if (J.documentElement) J.removeChild(J.documentElement);
      }
    }
    function Vj(J, Q, Z) {
      if (J.nodeType !== IZ || Q.toLowerCase() !== J.nodeName.toLowerCase())
        return null;
      return J;
    }
    function qj(J, Q) {
      if (Q === "" || J.nodeType !== n0) return null;
      return J;
    }
    function Oj(J) {
      if (J.nodeType !== VQ) return null;
      return J;
    }
    function GK(J) {
      return J.data === d6;
    }
    function NG(J) {
      return J.data === s6;
    }
    function jj(J) {
      var Q = J.nextSibling && J.nextSibling.dataset,
        Z,
        X,
        G;
      if (Q) (Z = Q.dgst), (X = Q.msg), (G = Q.stck);
      return { message: X, digest: Z, stack: G };
    }
    function Dj(J, Q) {
      J._reactRetry = Q;
    }
    function w8(J) {
      for (; J != null; J = J.nextSibling) {
        var Q = J.nodeType;
        if (Q === IZ || Q === n0) break;
        if (Q === VQ) {
          var Z = J.data;
          if (Z === I8 || Z === s6 || Z === d6) break;
          if (Z === x8) return null;
        }
      }
      return J;
    }
    function m6(J) {
      return w8(J.nextSibling);
    }
    function $j(J) {
      return w8(J.firstChild);
    }
    function Pj(J) {
      return w8(J.firstChild);
    }
    function Aj(J) {
      return w8(J.nextSibling);
    }
    function Ej(J, Q, Z, X, G, B, U) {
      l6(B, J), gG(J, Z);
      var Y;
      {
        var H = G;
        Y = H.namespace;
      }
      var W = (B.mode & DJ) !== r;
      return CO(J, Q, Z, Y, X, W, U);
    }
    function Rj(J, Q, Z, X) {
      l6(Z, J);
      var G = (Z.mode & DJ) !== r;
      return vO(J, Q);
    }
    function Lj(J, Q) {
      l6(Q, J);
    }
    function Fj(J) {
      var Q = J.nextSibling,
        Z = 0;
      while (Q) {
        if (Q.nodeType === VQ) {
          var X = Q.data;
          if (X === x8)
            if (Z === 0) return m6(Q);
            else Z--;
          else if (X === I8 || X === s6 || X === d6) Z++;
        }
        Q = Q.nextSibling;
      }
      return null;
    }
    function BK(J) {
      var Q = J.previousSibling,
        Z = 0;
      while (Q) {
        if (Q.nodeType === VQ) {
          var X = Q.data;
          if (X === I8 || X === s6 || X === d6)
            if (Z === 0) return Q;
            else Z--;
          else if (X === x8) Z++;
        }
        Q = Q.previousSibling;
      }
      return null;
    }
    function Ij(J) {
      L6(J);
    }
    function xj(J) {
      L6(J);
    }
    function wj(J) {
      return J !== "head" && J !== "body";
    }
    function _j(J, Q, Z, X) {
      var G = !0;
      R8(Q.nodeValue, Z, X, G);
    }
    function Sj(J, Q, Z, X, G, B) {
      if (Q[F8] !== !0) {
        var U = !0;
        R8(X.nodeValue, G, B, U);
      }
    }
    function Cj(J, Q) {
      if (Q.nodeType === IZ) EG(J, Q);
      else if (Q.nodeType === VQ);
      else RG(J, Q);
    }
    function vj(J, Q) {
      {
        var Z = J.parentNode;
        if (Z !== null)
          if (Q.nodeType === IZ) EG(Z, Q);
          else if (Q.nodeType === VQ);
          else RG(Z, Q);
      }
    }
    function Nj(J, Q, Z, X, G) {
      if (G || Q[F8] !== !0)
        if (X.nodeType === IZ) EG(Z, X);
        else if (X.nodeType === VQ);
        else RG(Z, X);
    }
    function bj(J, Q, Z) {
      LG(J, Q);
    }
    function kj(J, Q) {
      FG(J, Q);
    }
    function gj(J, Q, Z) {
      {
        var X = J.parentNode;
        if (X !== null) LG(X, Q);
      }
    }
    function Tj(J, Q) {
      {
        var Z = J.parentNode;
        if (Z !== null) FG(Z, Q);
      }
    }
    function hj(J, Q, Z, X, G, B) {
      if (B || Q[F8] !== !0) LG(Z, X);
    }
    function fj(J, Q, Z, X, G) {
      if (G || Q[F8] !== !0) FG(Z, X);
    }
    function uj(J) {
      M(
        "An error occurred during hydration. The server HTML was replaced with client content in <%s>.",
        J.nodeName.toLowerCase(),
      );
    }
    function dj(J) {
      k6(J);
    }
    var z5 = Math.random().toString(36).slice(2),
      M5 = "__reactFiber$" + z5,
      bG = "__reactProps$" + z5,
      y6 = "__reactContainer$" + z5,
      kG = "__reactEvents$" + z5,
      sj = "__reactListeners$" + z5,
      mj = "__reactHandles$" + z5;
    function yj(J) {
      delete J[M5], delete J[bG], delete J[kG], delete J[sj], delete J[mj];
    }
    function l6(J, Q) {
      Q[M5] = J;
    }
    function _8(J, Q) {
      Q[y6] = J;
    }
    function UK(J) {
      J[y6] = null;
    }
    function c6(J) {
      return !!J[y6];
    }
    function $4(J) {
      var Q = J[M5];
      if (Q) return Q;
      var Z = J.parentNode;
      while (Z) {
        if (((Q = Z[y6] || Z[M5]), Q)) {
          var X = Q.alternate;
          if (Q.child !== null || (X !== null && X.child !== null)) {
            var G = BK(J);
            while (G !== null) {
              var B = G[M5];
              if (B) return B;
              G = BK(G);
            }
          }
          return Q;
        }
        (J = Z), (Z = J.parentNode);
      }
      return null;
    }
    function h1(J) {
      var Q = J[M5] || J[y6];
      if (Q)
        if (Q.tag === l || Q.tag === FJ || Q.tag === PJ || Q.tag === s)
          return Q;
        else return null;
      return null;
    }
    function V5(J) {
      if (J.tag === l || J.tag === FJ) return J.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function S8(J) {
      return J[bG] || null;
    }
    function gG(J, Q) {
      J[bG] = Q;
    }
    function lj(J) {
      var Q = J[kG];
      if (Q === void 0) Q = J[kG] = new Set();
      return Q;
    }
    var YK = {},
      HK = SJ.ReactDebugCurrentFrame;
    function C8(J) {
      if (J) {
        var Q = J._owner,
          Z = u4(J.type, J._source, Q ? Q.type : null);
        HK.setExtraStackFrame(Z);
      } else HK.setExtraStackFrame(null);
    }
    function j0(J, Q, Z, X, G) {
      {
        var B = Function.call.bind(uQ);
        for (var U in J)
          if (B(J, U)) {
            var Y = void 0;
            try {
              if (typeof J[U] !== "function") {
                var H = Error(
                  (X || "React class") +
                    ": " +
                    Z +
                    " type `" +
                    U +
                    "` is invalid; it must be a function, usually from the `prop-types` package, but received `it must be a function, usually from the `prop-types` package, but received `" +
                    typeof J[U] +
                    "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
                );
                throw ((H.name = "Invariant Violation"), H);
              }
              Y = J[U](
                Q,
                U,
                X,
                Z,
                null,
                "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
              );
            } catch (W) {
              Y = W;
            }
            if (Y && !(Y instanceof Error))
              C8(G),
                M(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  X || "React class",
                  Z,
                  U,
                  typeof Y,
                ),
                C8(null);
            if (Y instanceof Error && !(Y.message in YK))
              (YK[Y.message] = !0),
                C8(G),
                M("Failed %s type: %s", Z, Y.message),
                C8(null);
          }
      }
    }
    var TG = [],
      v8;
    v8 = [];
    var U1 = -1;
    function f1(J) {
      return { current: J };
    }
    function BZ(J, Q) {
      if (U1 < 0) {
        M("Unexpected pop.");
        return;
      }
      if (Q !== v8[U1]) M("Unexpected Fiber popped.");
      (J.current = TG[U1]), (TG[U1] = null), (v8[U1] = null), U1--;
    }
    function UZ(J, Q, Z) {
      U1++, (TG[U1] = J.current), (v8[U1] = Z), (J.current = Q);
    }
    var KK = {},
      uZ = {};
    Object.freeze(uZ);
    var Y1 = f1(uZ),
      k0 = f1(!1),
      hG = uZ;
    function q5(J, Q, Z) {
      {
        if (Z && g0(Q)) return hG;
        return Y1.current;
      }
    }
    function WK(J, Q, Z) {
      {
        var X = J.stateNode;
        (X.__reactInternalMemoizedUnmaskedChildContext = Q),
          (X.__reactInternalMemoizedMaskedChildContext = Z);
      }
    }
    function O5(J, Q) {
      {
        var Z = J.type,
          X = Z.contextTypes;
        if (!X) return uZ;
        var G = J.stateNode;
        if (G && G.__reactInternalMemoizedUnmaskedChildContext === Q)
          return G.__reactInternalMemoizedMaskedChildContext;
        var B = {};
        for (var U in X) B[U] = Q[U];
        {
          var Y = YJ(J) || "Unknown";
          j0(X, B, "context", Y);
        }
        if (G) WK(J, Q, B);
        return B;
      }
    }
    function N8() {
      return k0.current;
    }
    function g0(J) {
      {
        var Q = J.childContextTypes;
        return Q !== null && Q !== void 0;
      }
    }
    function b8(J) {
      BZ(k0, J), BZ(Y1, J);
    }
    function fG(J) {
      BZ(k0, J), BZ(Y1, J);
    }
    function zK(J, Q, Z) {
      {
        if (Y1.current !== uZ)
          throw new Error(
            "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.",
          );
        UZ(Y1, Q, J), UZ(k0, Z, J);
      }
    }
    function MK(J, Q, Z) {
      {
        var X = J.stateNode,
          G = Q.childContextTypes;
        if (typeof X.getChildContext !== "function") {
          {
            var B = YJ(J) || "Unknown";
            if (!KK[B])
              (KK[B] = !0),
                M(
                  "%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",
                  B,
                  B,
                );
          }
          return Z;
        }
        var U = X.getChildContext();
        for (var Y in U)
          if (!(Y in G))
            throw new Error(
              (YJ(J) || "Unknown") +
                '.getChildContext(): key "' +
                Y +
                '" is not defined in childContextTypes.',
            );
        {
          var H = YJ(J) || "Unknown";
          j0(G, U, "child context", H);
        }
        return MJ({}, Z, U);
      }
    }
    function k8(J) {
      {
        var Q = J.stateNode,
          Z = (Q && Q.__reactInternalMemoizedMergedChildContext) || uZ;
        return (hG = Y1.current), UZ(Y1, Z, J), UZ(k0, k0.current, J), !0;
      }
    }
    function VK(J, Q, Z) {
      {
        var X = J.stateNode;
        if (!X)
          throw new Error(
            "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.",
          );
        if (Z) {
          var G = MK(J, Q, hG);
          (X.__reactInternalMemoizedMergedChildContext = G),
            BZ(k0, J),
            BZ(Y1, J),
            UZ(Y1, G, J),
            UZ(k0, Z, J);
        } else BZ(k0, J), UZ(k0, Z, J);
      }
    }
    function cj(J) {
      {
        if (!wM(J) || J.tag !== a)
          throw new Error(
            "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.",
          );
        var Q = J;
        do {
          switch (Q.tag) {
            case s:
              return Q.stateNode.context;
            case a: {
              var Z = Q.type;
              if (g0(Z))
                return Q.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          Q = Q.return;
        } while (Q !== null);
        throw new Error(
          "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.This error is likely caused by a bug in React. Please file an issue.",
        );
      }
    }
    var u1 = 0,
      g8 = 1,
      H1 = null,
      uG = !1,
      dG = !1;
    function qK(J) {
      if (H1 === null) H1 = [J];
      else H1.push(J);
    }
    function ij(J) {
      (uG = !0), qK(J);
    }
    function OK() {
      if (uG) d1();
    }
    function d1() {
      if (!dG && H1 !== null) {
        dG = !0;
        var J = 0,
          Q = O0();
        try {
          var Z = !0,
            X = H1;
          gQ(TZ);
          for (; J < X.length; J++) {
            var G = X[J];
            do G = G(Z);
            while (G !== null);
          }
          (H1 = null), (uG = !1);
        } catch (B) {
          if (H1 !== null) H1 = H1.slice(J + 1);
          throw (fY(r7, d1), B);
        } finally {
          gQ(Q), (dG = !1);
        }
      }
      return null;
    }
    var j5 = [],
      D5 = 0,
      T8 = null,
      h8 = 0,
      eZ = [],
      J0 = 0,
      P4 = null,
      K1 = 1,
      W1 = "";
    function aj(J) {
      return E4(), (J.flags & CY) !== o;
    }
    function pj(J) {
      return E4(), h8;
    }
    function oj() {
      var J = W1,
        Q = K1,
        Z = Q & ~rj(Q);
      return Z.toString(32) + J;
    }
    function A4(J, Q) {
      E4(), (j5[D5++] = h8), (j5[D5++] = T8), (T8 = J), (h8 = Q);
    }
    function jK(J, Q, Z) {
      E4(), (eZ[J0++] = K1), (eZ[J0++] = W1), (eZ[J0++] = P4), (P4 = J);
      var X = K1,
        G = W1,
        B = f8(X) - 1,
        U = X & ~(1 << B),
        Y = Z + 1,
        H = f8(Q) + B;
      if (H > 30) {
        var W = B - (B % 5),
          z = (1 << W) - 1,
          j = (U & z).toString(32),
          O = U >> W,
          E = B - W,
          P = f8(Q) + E,
          R = Y << E,
          g = R | O,
          y = j + G;
        (K1 = (1 << P) | g), (W1 = y);
      } else {
        var d = Y << B,
          VJ = d | U,
          qJ = G;
        (K1 = (1 << H) | VJ), (W1 = qJ);
      }
    }
    function sG(J) {
      E4();
      var Q = J.return;
      if (Q !== null) {
        var Z = 1,
          X = 0;
        A4(J, Z), jK(J, Z, X);
      }
    }
    function f8(J) {
      return 32 - lY(J);
    }
    function rj(J) {
      return 1 << (f8(J) - 1);
    }
    function mG(J) {
      while (J === T8)
        (T8 = j5[--D5]), (j5[D5] = null), (h8 = j5[--D5]), (j5[D5] = null);
      while (J === P4)
        (P4 = eZ[--J0]),
          (eZ[J0] = null),
          (W1 = eZ[--J0]),
          (eZ[J0] = null),
          (K1 = eZ[--J0]),
          (eZ[J0] = null);
    }
    function nj() {
      if ((E4(), P4 !== null)) return { id: K1, overflow: W1 };
      else return null;
    }
    function tj(J, Q) {
      E4(),
        (eZ[J0++] = K1),
        (eZ[J0++] = W1),
        (eZ[J0++] = P4),
        (K1 = Q.id),
        (W1 = Q.overflow),
        (P4 = J);
    }
    function E4() {
      if (!lQ())
        M(
          "Expected to be hydrating. This is a bug in React. Please file an issue.an issue.",
        );
    }
    var yQ = null,
      Q0 = null,
      D0 = !1,
      R4 = !1,
      s1 = null;
    function ej() {
      if (D0)
        M(
          "We should not be hydrating here. This is a bug in React. Please file a bug.",
        );
    }
    function DK() {
      R4 = !0;
    }
    function JD() {
      return R4;
    }
    function QD(J) {
      var Q = J.stateNode.containerInfo;
      return (Q0 = Pj(Q)), (yQ = J), (D0 = !0), (s1 = null), (R4 = !1), !0;
    }
    function ZD(J, Q, Z) {
      if (
        ((Q0 = Aj(Q)), (yQ = J), (D0 = !0), (s1 = null), (R4 = !1), Z !== null)
      )
        tj(J, Z);
      return !0;
    }
    function $K(J, Q) {
      switch (J.tag) {
        case s: {
          Cj(J.stateNode.containerInfo, Q);
          break;
        }
        case l: {
          var Z = (J.mode & DJ) !== r;
          Nj(J.type, J.memoizedProps, J.stateNode, Q, Z);
          break;
        }
        case PJ: {
          var X = J.memoizedState;
          if (X.dehydrated !== null) vj(X.dehydrated, Q);
          break;
        }
      }
    }
    function PK(J, Q) {
      $K(J, Q);
      var Z = KP();
      (Z.stateNode = Q), (Z.return = J);
      var X = J.deletions;
      if (X === null) (J.deletions = [Z]), (J.flags |= B4);
      else X.push(Z);
    }
    function yG(J, Q) {
      {
        if (R4) return;
        switch (J.tag) {
          case s: {
            var Z = J.stateNode.containerInfo;
            switch (Q.tag) {
              case l:
                var { type: X, pendingProps: G } = Q;
                bj(Z, X);
                break;
              case FJ:
                var B = Q.pendingProps;
                kj(Z, B);
                break;
            }
            break;
          }
          case l: {
            var { type: U, memoizedProps: Y, stateNode: H } = J;
            switch (Q.tag) {
              case l: {
                var { type: W, pendingProps: z } = Q,
                  j = (J.mode & DJ) !== r;
                hj(U, Y, H, W, z, j);
                break;
              }
              case FJ: {
                var O = Q.pendingProps,
                  E = (J.mode & DJ) !== r;
                fj(U, Y, H, O, E);
                break;
              }
            }
            break;
          }
          case PJ: {
            var P = J.memoizedState,
              R = P.dehydrated;
            if (R !== null)
              switch (Q.tag) {
                case l:
                  var { type: g, pendingProps: y } = Q;
                  gj(R, g);
                  break;
                case FJ:
                  var d = Q.pendingProps;
                  Tj(R, d);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function AK(J, Q) {
      (Q.flags = (Q.flags & ~J1) | qQ), yG(J, Q);
    }
    function EK(J, Q) {
      switch (J.tag) {
        case l: {
          var { type: Z, pendingProps: X } = J,
            G = Vj(Q, Z);
          if (G !== null) return (J.stateNode = G), (yQ = J), (Q0 = $j(G)), !0;
          return !1;
        }
        case FJ: {
          var B = J.pendingProps,
            U = qj(Q, B);
          if (U !== null) return (J.stateNode = U), (yQ = J), (Q0 = null), !0;
          return !1;
        }
        case PJ: {
          var Y = Oj(Q);
          if (Y !== null) {
            var H = { dehydrated: Y, treeContext: nj(), retryLane: kZ };
            J.memoizedState = H;
            var W = WP(Y);
            return (W.return = J), (J.child = W), (yQ = J), (Q0 = null), !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function lG(J) {
      return (J.mode & DJ) !== r && (J.flags & _J) === o;
    }
    function cG(J) {
      throw new Error(
        "Hydration failed because the initial UI does not match what was rendered on the server.rendered on the server.",
      );
    }
    function iG(J) {
      if (!D0) return;
      var Q = Q0;
      if (!Q) {
        if (lG(J)) yG(yQ, J), cG();
        AK(yQ, J), (D0 = !1), (yQ = J);
        return;
      }
      var Z = Q;
      if (!EK(J, Q)) {
        if (lG(J)) yG(yQ, J), cG();
        Q = m6(Z);
        var X = yQ;
        if (!Q || !EK(J, Q)) {
          AK(yQ, J), (D0 = !1), (yQ = J);
          return;
        }
        PK(X, Z);
      }
    }
    function XD(J, Q, Z) {
      var X = J.stateNode,
        G = !R4,
        B = Ej(X, J.type, J.memoizedProps, Q, Z, J, G);
      if (((J.updateQueue = B), B !== null)) return !0;
      return !1;
    }
    function GD(J) {
      var { stateNode: Q, memoizedProps: Z } = J,
        X = Rj(Q, Z, J);
      if (X) {
        var G = yQ;
        if (G !== null)
          switch (G.tag) {
            case s: {
              var B = G.stateNode.containerInfo,
                U = (G.mode & DJ) !== r;
              _j(B, Q, Z, U);
              break;
            }
            case l: {
              var { type: Y, memoizedProps: H, stateNode: W } = G,
                z = (G.mode & DJ) !== r;
              Sj(Y, H, W, Q, Z, z);
              break;
            }
          }
      }
      return X;
    }
    function BD(J) {
      var Q = J.memoizedState,
        Z = Q !== null ? Q.dehydrated : null;
      if (!Z)
        throw new Error(
          "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.",
        );
      Lj(Z, J);
    }
    function UD(J) {
      var Q = J.memoizedState,
        Z = Q !== null ? Q.dehydrated : null;
      if (!Z)
        throw new Error(
          "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.",
        );
      return Fj(Z);
    }
    function RK(J) {
      var Q = J.return;
      while (Q !== null && Q.tag !== l && Q.tag !== s && Q.tag !== PJ)
        Q = Q.return;
      yQ = Q;
    }
    function u8(J) {
      if (J !== yQ) return !1;
      if (!D0) return RK(J), (D0 = !0), !1;
      if (
        J.tag !== s &&
        (J.tag !== l || (wj(J.type) && !_G(J.type, J.memoizedProps)))
      ) {
        var Q = Q0;
        if (Q)
          if (lG(J)) LK(J), cG();
          else while (Q) PK(J, Q), (Q = m6(Q));
      }
      if ((RK(J), J.tag === PJ)) Q0 = UD(J);
      else Q0 = yQ ? m6(J.stateNode) : null;
      return !0;
    }
    function YD() {
      return D0 && Q0 !== null;
    }
    function LK(J) {
      var Q = Q0;
      while (Q) $K(J, Q), (Q = m6(Q));
    }
    function $5() {
      (yQ = null), (Q0 = null), (D0 = !1), (R4 = !1);
    }
    function FK() {
      if (s1 !== null) Pz(s1), (s1 = null);
    }
    function lQ() {
      return D0;
    }
    function aG(J) {
      if (s1 === null) s1 = [J];
      else s1.push(J);
    }
    var HD = SJ.ReactCurrentBatchConfig,
      KD = null;
    function WD() {
      return HD.transition;
    }
    var $0 = {
      recordUnsafeLifecycleWarnings: function (J, Q) {},
      flushPendingUnsafeLifecycleWarnings: function () {},
      recordLegacyContextWarning: function (J, Q) {},
      flushLegacyContextWarning: function () {},
      discardPendingWarnings: function () {},
    };
    {
      var zD = function (J) {
          var Q = null,
            Z = J;
          while (Z !== null) {
            if (Z.mode & OQ) Q = Z;
            Z = Z.return;
          }
          return Q;
        },
        L4 = function (J) {
          var Q = [];
          return (
            J.forEach(function (Z) {
              Q.push(Z);
            }),
            Q.sort().join(", ")
          );
        },
        i6 = [],
        a6 = [],
        p6 = [],
        o6 = [],
        r6 = [],
        n6 = [],
        F4 = new Set();
      ($0.recordUnsafeLifecycleWarnings = function (J, Q) {
        if (F4.has(J.type)) return;
        if (
          typeof Q.componentWillMount === "function" &&
          Q.componentWillMount.__suppressDeprecationWarning !== !0
        )
          i6.push(J);
        if (J.mode & OQ && typeof Q.UNSAFE_componentWillMount === "function")
          a6.push(J);
        if (
          typeof Q.componentWillReceiveProps === "function" &&
          Q.componentWillReceiveProps.__suppressDeprecationWarning !== !0
        )
          p6.push(J);
        if (
          J.mode & OQ &&
          typeof Q.UNSAFE_componentWillReceiveProps === "function"
        )
          o6.push(J);
        if (
          typeof Q.componentWillUpdate === "function" &&
          Q.componentWillUpdate.__suppressDeprecationWarning !== !0
        )
          r6.push(J);
        if (J.mode & OQ && typeof Q.UNSAFE_componentWillUpdate === "function")
          n6.push(J);
      }),
        ($0.flushPendingUnsafeLifecycleWarnings = function () {
          var J = new Set();
          if (i6.length > 0)
            i6.forEach(function (O) {
              J.add(YJ(O) || "Component"), F4.add(O.type);
            }),
              (i6 = []);
          var Q = new Set();
          if (a6.length > 0)
            a6.forEach(function (O) {
              Q.add(YJ(O) || "Component"), F4.add(O.type);
            }),
              (a6 = []);
          var Z = new Set();
          if (p6.length > 0)
            p6.forEach(function (O) {
              Z.add(YJ(O) || "Component"), F4.add(O.type);
            }),
              (p6 = []);
          var X = new Set();
          if (o6.length > 0)
            o6.forEach(function (O) {
              X.add(YJ(O) || "Component"), F4.add(O.type);
            }),
              (o6 = []);
          var G = new Set();
          if (r6.length > 0)
            r6.forEach(function (O) {
              G.add(YJ(O) || "Component"), F4.add(O.type);
            }),
              (r6 = []);
          var B = new Set();
          if (n6.length > 0)
            n6.forEach(function (O) {
              B.add(YJ(O) || "Component"), F4.add(O.type);
            }),
              (n6 = []);
          if (Q.size > 0) {
            var U = L4(Q);
            M(
              "Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s",
              U,
            );
          }
          if (X.size > 0) {
            var Y = L4(X);
            M(
              "Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n\nPlease update the following components: %s",
              Y,
            );
          }
          if (B.size > 0) {
            var H = L4(B);
            M(
              "Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s",
              H,
            );
          }
          if (J.size > 0) {
            var W = L4(J);
            DQ(
              "componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %sSee https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",
              W,
            );
          }
          if (Z.size > 0) {
            var z = L4(Z);
            DQ(
              "componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",
              z,
            );
          }
          if (G.size > 0) {
            var j = L4(G);
            DQ(
              "componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",
              j,
            );
          }
        });
      var d8 = new Map(),
        IK = new Set();
      ($0.recordLegacyContextWarning = function (J, Q) {
        var Z = zD(J);
        if (Z === null) {
          M(
            "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.",
          );
          return;
        }
        if (IK.has(J.type)) return;
        var X = d8.get(Z);
        if (
          J.type.contextTypes != null ||
          J.type.childContextTypes != null ||
          (Q !== null && typeof Q.getChildContext === "function")
        ) {
          if (X === void 0) (X = []), d8.set(Z, X);
          X.push(J);
        }
      }),
        ($0.flushLegacyContextWarning = function () {
          d8.forEach(function (J, Q) {
            if (J.length === 0) return;
            var Z = J[0],
              X = new Set();
            J.forEach(function (B) {
              X.add(YJ(B) || "Component"), IK.add(B.type);
            });
            var G = L4(X);
            try {
              eJ(Z),
                M(
                  "Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context",
                  G,
                );
            } finally {
              vQ();
            }
          });
        }),
        ($0.discardPendingWarnings = function () {
          (i6 = []),
            (a6 = []),
            (p6 = []),
            (o6 = []),
            (r6 = []),
            (n6 = []),
            (d8 = new Map());
        });
    }
    function P0(J, Q) {
      if (J && J.defaultProps) {
        var Z = MJ({}, Q),
          X = J.defaultProps;
        for (var G in X) if (Z[G] === void 0) Z[G] = X[G];
        return Z;
      }
      return Q;
    }
    var pG = f1(null),
      oG;
    oG = {};
    var s8 = null,
      P5 = null,
      rG = null,
      m8 = !1;
    function y8() {
      (s8 = null), (P5 = null), (rG = null), (m8 = !1);
    }
    function xK() {
      m8 = !0;
    }
    function wK() {
      m8 = !1;
    }
    function _K(J, Q, Z) {
      {
        UZ(pG, Q._currentValue, J), (Q._currentValue = Z);
        {
          if (
            Q._currentRenderer !== void 0 &&
            Q._currentRenderer !== null &&
            Q._currentRenderer !== oG
          )
            M(
              "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.",
            );
          Q._currentRenderer = oG;
        }
      }
    }
    function nG(J, Q) {
      var Z = pG.current;
      BZ(pG, Q), (J._currentValue = Z);
    }
    function tG(J, Q, Z) {
      var X = J;
      while (X !== null) {
        var G = X.alternate;
        if (!G5(X.childLanes, Q)) {
          if (((X.childLanes = zJ(X.childLanes, Q)), G !== null))
            G.childLanes = zJ(G.childLanes, Q);
        } else if (G !== null && !G5(G.childLanes, Q))
          G.childLanes = zJ(G.childLanes, Q);
        if (X === Z) break;
        X = X.return;
      }
      if (X !== Z)
        M(
          "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.",
        );
    }
    function MD(J, Q, Z) {
      VD(J, Q, Z);
    }
    function VD(J, Q, Z) {
      var X = J.child;
      if (X !== null) X.return = J;
      while (X !== null) {
        var G = void 0,
          B = X.dependencies;
        if (B !== null) {
          G = X.child;
          var U = B.firstContext;
          while (U !== null) {
            if (U.context === Q) {
              if (X.tag === a) {
                var Y = j6(Z),
                  H = z1(pJ, Y);
                H.tag = c8;
                var W = X.updateQueue;
                if (W === null);
                else {
                  var z = W.shared,
                    j = z.pending;
                  if (j === null) H.next = H;
                  else (H.next = j.next), (j.next = H);
                  z.pending = H;
                }
              }
              X.lanes = zJ(X.lanes, Z);
              var O = X.alternate;
              if (O !== null) O.lanes = zJ(O.lanes, Z);
              tG(X.return, Z, J), (B.lanes = zJ(B.lanes, Z));
              break;
            }
            U = U.next;
          }
        } else if (X.tag === IJ) G = X.type === J.type ? null : X.child;
        else if (X.tag === SQ) {
          var E = X.return;
          if (E === null)
            throw new Error(
              "We just came from a parent so we must have had a parent. This is a bug in React.",
            );
          E.lanes = zJ(E.lanes, Z);
          var P = E.alternate;
          if (P !== null) P.lanes = zJ(P.lanes, Z);
          tG(E, Z, J), (G = X.sibling);
        } else G = X.child;
        if (G !== null) G.return = X;
        else {
          G = X;
          while (G !== null) {
            if (G === J) {
              G = null;
              break;
            }
            var R = G.sibling;
            if (R !== null) {
              (R.return = G.return), (G = R);
              break;
            }
            G = G.return;
          }
        }
        X = G;
      }
    }
    function A5(J, Q) {
      (s8 = J), (P5 = null), (rG = null);
      var Z = J.dependencies;
      if (Z !== null) {
        var X = Z.firstContext;
        if (X !== null) {
          if (gZ(Z.lanes, Q)) z7();
          Z.firstContext = null;
        }
      }
    }
    function jQ(J) {
      if (m8)
        M(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
        );
      var Q = J._currentValue;
      if (rG === J);
      else {
        var Z = { context: J, memoizedValue: Q, next: null };
        if (P5 === null) {
          if (s8 === null)
            throw new Error(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
            );
          (P5 = Z), (s8.dependencies = { lanes: x, firstContext: Z });
        } else P5 = P5.next = Z;
      }
      return Q;
    }
    var I4 = null;
    function eG(J) {
      if (I4 === null) I4 = [J];
      else I4.push(J);
    }
    function qD() {
      if (I4 !== null) {
        for (var J = 0; J < I4.length; J++) {
          var Q = I4[J],
            Z = Q.interleaved;
          if (Z !== null) {
            Q.interleaved = null;
            var X = Z.next,
              G = Q.pending;
            if (G !== null) {
              var B = G.next;
              (G.next = X), (Z.next = B);
            }
            Q.pending = Z;
          }
        }
        I4 = null;
      }
    }
    function SK(J, Q, Z, X) {
      var G = Q.interleaved;
      if (G === null) (Z.next = Z), eG(Q);
      else (Z.next = G.next), (G.next = Z);
      return (Q.interleaved = Z), l8(J, X);
    }
    function OD(J, Q, Z, X) {
      var G = Q.interleaved;
      if (G === null) (Z.next = Z), eG(Q);
      else (Z.next = G.next), (G.next = Z);
      Q.interleaved = Z;
    }
    function jD(J, Q, Z, X) {
      var G = Q.interleaved;
      if (G === null) (Z.next = Z), eG(Q);
      else (Z.next = G.next), (G.next = Z);
      return (Q.interleaved = Z), l8(J, X);
    }
    function wZ(J, Q) {
      return l8(J, Q);
    }
    var DD = l8;
    function l8(J, Q) {
      J.lanes = zJ(J.lanes, Q);
      var Z = J.alternate;
      if (Z !== null) Z.lanes = zJ(Z.lanes, Q);
      if (Z === null && (J.flags & (qQ | J1)) !== o) vz(J);
      var X = J,
        G = J.return;
      while (G !== null) {
        if (
          ((G.childLanes = zJ(G.childLanes, Q)), (Z = G.alternate), Z !== null)
        )
          Z.childLanes = zJ(Z.childLanes, Q);
        else if ((G.flags & (qQ | J1)) !== o) vz(J);
        (X = G), (G = G.return);
      }
      if (X.tag === s) {
        var B = X.stateNode;
        return B;
      } else return null;
    }
    var CK = 0,
      vK = 1,
      c8 = 2,
      JB = 3,
      i8 = !1,
      QB,
      a8;
    (QB = !1), (a8 = null);
    function ZB(J) {
      var Q = {
        baseState: J.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: x },
        effects: null,
      };
      J.updateQueue = Q;
    }
    function NK(J, Q) {
      var Z = Q.updateQueue,
        X = J.updateQueue;
      if (Z === X) {
        var G = {
          baseState: X.baseState,
          firstBaseUpdate: X.firstBaseUpdate,
          lastBaseUpdate: X.lastBaseUpdate,
          shared: X.shared,
          effects: X.effects,
        };
        Q.updateQueue = G;
      }
    }
    function z1(J, Q) {
      var Z = {
        eventTime: J,
        lane: Q,
        tag: CK,
        payload: null,
        callback: null,
        next: null,
      };
      return Z;
    }
    function m1(J, Q, Z) {
      var X = J.updateQueue;
      if (X === null) return null;
      var G = X.shared;
      if (a8 === G && !QB)
        M(
          "An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.",
        ),
          (QB = !0);
      if (E$()) {
        var B = G.pending;
        if (B === null) Q.next = Q;
        else (Q.next = B.next), (B.next = Q);
        return (G.pending = Q), DD(J, Z);
      } else return jD(J, G, Q, Z);
    }
    function p8(J, Q, Z) {
      var X = Q.updateQueue;
      if (X === null) return;
      var G = X.shared;
      if (pY(Z)) {
        var B = G.lanes;
        B = rY(B, J.pendingLanes);
        var U = zJ(B, Z);
        (G.lanes = U), eX(J, U);
      }
    }
    function XB(J, Q) {
      var { updateQueue: Z, alternate: X } = J;
      if (X !== null) {
        var G = X.updateQueue;
        if (Z === G) {
          var B = null,
            U = null,
            Y = Z.firstBaseUpdate;
          if (Y !== null) {
            var H = Y;
            do {
              var W = {
                eventTime: H.eventTime,
                lane: H.lane,
                tag: H.tag,
                payload: H.payload,
                callback: H.callback,
                next: null,
              };
              if (U === null) B = U = W;
              else (U.next = W), (U = W);
              H = H.next;
            } while (H !== null);
            if (U === null) B = U = Q;
            else (U.next = Q), (U = Q);
          } else B = U = Q;
          (Z = {
            baseState: G.baseState,
            firstBaseUpdate: B,
            lastBaseUpdate: U,
            shared: G.shared,
            effects: G.effects,
          }),
            (J.updateQueue = Z);
          return;
        }
      }
      var z = Z.lastBaseUpdate;
      if (z === null) Z.firstBaseUpdate = Q;
      else z.next = Q;
      Z.lastBaseUpdate = Q;
    }
    function $D(J, Q, Z, X, G, B) {
      switch (Z.tag) {
        case vK: {
          var U = Z.payload;
          if (typeof U === "function") {
            xK();
            var Y = U.call(B, X, G);
            {
              if (J.mode & OQ) {
                bQ(!0);
                try {
                  U.call(B, X, G);
                } finally {
                  bQ(!1);
                }
              }
              wK();
            }
            return Y;
          }
          return U;
        }
        case JB:
          J.flags = (J.flags & ~jZ) | _J;
        case CK: {
          var H = Z.payload,
            W;
          if (typeof H === "function") {
            xK(), (W = H.call(B, X, G));
            {
              if (J.mode & OQ) {
                bQ(!0);
                try {
                  H.call(B, X, G);
                } finally {
                  bQ(!1);
                }
              }
              wK();
            }
          } else W = H;
          if (W === null || W === void 0) return X;
          return MJ({}, X, W);
        }
        case c8:
          return (i8 = !0), X;
      }
      return X;
    }
    function o8(J, Q, Z, X) {
      var G = J.updateQueue;
      (i8 = !1), (a8 = G.shared);
      var { firstBaseUpdate: B, lastBaseUpdate: U } = G,
        Y = G.shared.pending;
      if (Y !== null) {
        G.shared.pending = null;
        var H = Y,
          W = H.next;
        if (((H.next = null), U === null)) B = W;
        else U.next = W;
        U = H;
        var z = J.alternate;
        if (z !== null) {
          var j = z.updateQueue,
            O = j.lastBaseUpdate;
          if (O !== U) {
            if (O === null) j.firstBaseUpdate = W;
            else O.next = W;
            j.lastBaseUpdate = H;
          }
        }
      }
      if (B !== null) {
        var E = G.baseState,
          P = x,
          R = null,
          g = null,
          y = null,
          d = B;
        do {
          var { lane: VJ, eventTime: qJ } = d;
          if (!G5(X, VJ)) {
            var D = {
              eventTime: qJ,
              lane: VJ,
              tag: d.tag,
              payload: d.payload,
              callback: d.callback,
              next: null,
            };
            if (y === null) (g = y = D), (R = E);
            else y = y.next = D;
            P = zJ(P, VJ);
          } else {
            if (y !== null) {
              var F = {
                eventTime: qJ,
                lane: kQ,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              };
              y = y.next = F;
            }
            E = $D(J, G, d, E, Q, Z);
            var $ = d.callback;
            if ($ !== null && d.lane !== kQ) {
              J.flags |= AX;
              var _ = G.effects;
              if (_ === null) G.effects = [d];
              else _.push(d);
            }
          }
          if (((d = d.next), d === null))
            if (((Y = G.shared.pending), Y === null)) break;
            else {
              var h = Y,
                b = h.next;
              (h.next = null),
                (d = b),
                (G.lastBaseUpdate = h),
                (G.shared.pending = null);
            }
        } while (!0);
        if (y === null) R = E;
        (G.baseState = R), (G.firstBaseUpdate = g), (G.lastBaseUpdate = y);
        var t = G.shared.interleaved;
        if (t !== null) {
          var GJ = t;
          do (P = zJ(P, GJ.lane)), (GJ = GJ.next);
          while (GJ !== t);
        } else if (B === null) G.shared.lanes = x;
        L7(P), (J.lanes = P), (J.memoizedState = E);
      }
      a8 = null;
    }
    function PD(J, Q) {
      if (typeof J !== "function")
        throw new Error(
          "Invalid argument passed as callback. Expected a function. Instead " +
            ("received: " + J),
        );
      J.call(Q);
    }
    function bK() {
      i8 = !1;
    }
    function r8() {
      return i8;
    }
    function kK(J, Q, Z) {
      var X = Q.effects;
      if (((Q.effects = null), X !== null))
        for (var G = 0; G < X.length; G++) {
          var B = X[G],
            U = B.callback;
          if (U !== null) (B.callback = null), PD(U, Z);
        }
    }
    var GB = {},
      gK = new NJ.Component().refs,
      BB,
      UB,
      YB,
      HB,
      KB,
      TK,
      n8,
      WB,
      zB,
      MB;
    {
      (BB = new Set()),
        (UB = new Set()),
        (YB = new Set()),
        (HB = new Set()),
        (WB = new Set()),
        (KB = new Set()),
        (zB = new Set()),
        (MB = new Set());
      var hK = new Set();
      (n8 = function (J, Q) {
        if (J === null || typeof J === "function") return;
        var Z = Q + "_" + J;
        if (!hK.has(Z))
          hK.add(Z),
            M(
              "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.function. Instead received: %s.",
              Q,
              J,
            );
      }),
        (TK = function (J, Q) {
          if (Q === void 0) {
            var Z = fJ(J) || "Component";
            if (!KB.has(Z))
              KB.add(Z),
                M(
                  "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                  Z,
                );
          }
        }),
        Object.defineProperty(GB, "_processChildContext", {
          enumerable: !1,
          value: function () {
            throw new Error(
              "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).",
            );
          },
        }),
        Object.freeze(GB);
    }
    function VB(J, Q, Z, X) {
      var G = J.memoizedState,
        B = Z(X, G);
      {
        if (J.mode & OQ) {
          bQ(!0);
          try {
            B = Z(X, G);
          } finally {
            bQ(!1);
          }
        }
        TK(Q, B);
      }
      var U = B === null || B === void 0 ? G : MJ({}, G, B);
      if (((J.memoizedState = U), J.lanes === x)) {
        var Y = J.updateQueue;
        Y.baseState = U;
      }
    }
    var qB = {
      isMounted: _M,
      enqueueSetState: function (J, Q, Z) {
        var X = n4(J),
          G = PZ(),
          B = r1(X),
          U = z1(G, B);
        if (((U.payload = Q), Z !== void 0 && Z !== null))
          n8(Z, "setState"), (U.callback = Z);
        var Y = m1(X, U, B);
        if (Y !== null) _Q(Y, X, B, G), p8(Y, X, B);
        _X(X, B);
      },
      enqueueReplaceState: function (J, Q, Z) {
        var X = n4(J),
          G = PZ(),
          B = r1(X),
          U = z1(G, B);
        if (((U.tag = vK), (U.payload = Q), Z !== void 0 && Z !== null))
          n8(Z, "replaceState"), (U.callback = Z);
        var Y = m1(X, U, B);
        if (Y !== null) _Q(Y, X, B, G), p8(Y, X, B);
        _X(X, B);
      },
      enqueueForceUpdate: function (J, Q) {
        var Z = n4(J),
          X = PZ(),
          G = r1(Z),
          B = z1(X, G);
        if (((B.tag = c8), Q !== void 0 && Q !== null))
          n8(Q, "forceUpdate"), (B.callback = Q);
        var U = m1(Z, B, G);
        if (U !== null) _Q(U, Z, G, X), p8(U, Z, G);
        BV(Z, G);
      },
    };
    function fK(J, Q, Z, X, G, B, U) {
      var Y = J.stateNode;
      if (typeof Y.shouldComponentUpdate === "function") {
        var H = Y.shouldComponentUpdate(X, B, U);
        {
          if (J.mode & OQ) {
            bQ(!0);
            try {
              H = Y.shouldComponentUpdate(X, B, U);
            } finally {
              bQ(!1);
            }
          }
          if (H === void 0)
            M(
              "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
              fJ(Q) || "Component",
            );
        }
        return H;
      }
      if (Q.prototype && Q.prototype.isPureReactComponent)
        return !v6(Z, X) || !v6(G, B);
      return !0;
    }
    function AD(J, Q, Z) {
      var X = J.stateNode;
      {
        var G = fJ(Q) || "Component",
          B = X.render;
        if (!B)
          if (Q.prototype && typeof Q.prototype.render === "function")
            M(
              "%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",
              G,
            );
          else
            M(
              "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",
              G,
            );
        if (
          X.getInitialState &&
          !X.getInitialState.isReactClassApproved &&
          !X.state
        )
          M(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            G,
          );
        if (X.getDefaultProps && !X.getDefaultProps.isReactClassApproved)
          M(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            G,
          );
        if (X.propTypes)
          M(
            "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",
            G,
          );
        if (X.contextType)
          M(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            G,
          );
        {
          if (X.contextTypes)
            M(
              "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",
              G,
            );
          if (Q.contextType && Q.contextTypes && !zB.has(Q))
            zB.add(Q),
              M(
                "%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",
                G,
              );
        }
        if (typeof X.componentShouldUpdate === "function")
          M(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            G,
          );
        if (
          Q.prototype &&
          Q.prototype.isPureReactComponent &&
          typeof X.shouldComponentUpdate !== "undefined"
        )
          M(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            fJ(Q) || "A pure component",
          );
        if (typeof X.componentDidUnmount === "function")
          M(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            G,
          );
        if (typeof X.componentDidReceiveProps === "function")
          M(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            G,
          );
        if (typeof X.componentWillRecieveProps === "function")
          M(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            G,
          );
        if (typeof X.UNSAFE_componentWillRecieveProps === "function")
          M(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            G,
          );
        var U = X.props !== Z;
        if (X.props !== void 0 && U)
          M(
            "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            G,
            G,
          );
        if (X.defaultProps)
          M(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            G,
            G,
          );
        if (
          typeof X.getSnapshotBeforeUpdate === "function" &&
          typeof X.componentDidUpdate !== "function" &&
          !YB.has(Q)
        )
          YB.add(Q),
            M(
              "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
              fJ(Q),
            );
        if (typeof X.getDerivedStateFromProps === "function")
          M(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            G,
          );
        if (typeof X.getDerivedStateFromError === "function")
          M(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            G,
          );
        if (typeof Q.getSnapshotBeforeUpdate === "function")
          M(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            G,
          );
        var Y = X.state;
        if (Y && (typeof Y !== "object" || AQ(Y)))
          M("%s.state: must be set to an object or null", G);
        if (
          typeof X.getChildContext === "function" &&
          typeof Q.childContextTypes !== "object"
        )
          M(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            G,
          );
      }
    }
    function uK(J, Q) {
      (Q.updater = qB),
        (J.stateNode = Q),
        LM(Q, J),
        (Q._reactInternalInstance = GB);
    }
    function dK(J, Q, Z) {
      var X = !1,
        G = uZ,
        B = uZ,
        U = Q.contextType;
      if ("contextType" in Q) {
        var Y =
          U === null ||
          (U !== void 0 && U.$$typeof === wJ && U._context === void 0);
        if (!Y && !MB.has(Q)) {
          MB.add(Q);
          var H = "";
          if (U === void 0)
            H =
              " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
          else if (typeof U !== "object")
            H = " However, it is set to a " + typeof U + ".";
          else if (U.$$typeof === n)
            H = " Did you accidentally pass the Context.Provider instead?";
          else if (U._context !== void 0)
            H = " Did you accidentally pass the Context.Consumer instead?";
          else
            H =
              " However, it is set to an object with keys {" +
              Object.keys(U).join(", ") +
              "}.";
          M(
            "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%scontextType should point to the Context object returned by React.createContext().%s",
            fJ(Q) || "Component",
            H,
          );
        }
      }
      if (typeof U === "object" && U !== null) B = jQ(U);
      else {
        G = q5(J, Q, !0);
        var W = Q.contextTypes;
        (X = W !== null && W !== void 0), (B = X ? O5(J, G) : uZ);
      }
      var z = new Q(Z, B);
      if (J.mode & OQ) {
        bQ(!0);
        try {
          z = new Q(Z, B);
        } finally {
          bQ(!1);
        }
      }
      var j = (J.memoizedState =
        z.state !== null && z.state !== void 0 ? z.state : null);
      uK(J, z);
      {
        if (typeof Q.getDerivedStateFromProps === "function" && j === null) {
          var O = fJ(Q) || "Component";
          if (!UB.has(O))
            UB.add(O),
              M(
                "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
                O,
                z.state === null ? "null" : "undefined",
                O,
              );
        }
        if (
          typeof Q.getDerivedStateFromProps === "function" ||
          typeof z.getSnapshotBeforeUpdate === "function"
        ) {
          var E = null,
            P = null,
            R = null;
          if (
            typeof z.componentWillMount === "function" &&
            z.componentWillMount.__suppressDeprecationWarning !== !0
          )
            E = "componentWillMount";
          else if (typeof z.UNSAFE_componentWillMount === "function")
            E = "UNSAFE_componentWillMount";
          if (
            typeof z.componentWillReceiveProps === "function" &&
            z.componentWillReceiveProps.__suppressDeprecationWarning !== !0
          )
            P = "componentWillReceiveProps";
          else if (typeof z.UNSAFE_componentWillReceiveProps === "function")
            P = "UNSAFE_componentWillReceiveProps";
          if (
            typeof z.componentWillUpdate === "function" &&
            z.componentWillUpdate.__suppressDeprecationWarning !== !0
          )
            R = "componentWillUpdate";
          else if (typeof z.UNSAFE_componentWillUpdate === "function")
            R = "UNSAFE_componentWillUpdate";
          if (E !== null || P !== null || R !== null) {
            var g = fJ(Q) || "Component",
              y =
                typeof Q.getDerivedStateFromProps === "function"
                  ? "getDerivedStateFromProps()"
                  : "getSnapshotBeforeUpdate()";
            if (!HB.has(g))
              HB.add(g),
                M(
                  "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles",
                  g,
                  y,
                  E !== null ? "\n  " + E : "",
                  P !== null ? "\n  " + P : "",
                  R !== null ? "\n  " + R : "",
                );
          }
        }
      }
      if (X) WK(J, G, B);
      return z;
    }
    function ED(J, Q) {
      var Z = Q.state;
      if (typeof Q.componentWillMount === "function") Q.componentWillMount();
      if (typeof Q.UNSAFE_componentWillMount === "function")
        Q.UNSAFE_componentWillMount();
      if (Z !== Q.state)
        M(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          YJ(J) || "Component",
        ),
          qB.enqueueReplaceState(Q, Q.state, null);
    }
    function sK(J, Q, Z, X) {
      var G = Q.state;
      if (typeof Q.componentWillReceiveProps === "function")
        Q.componentWillReceiveProps(Z, X);
      if (typeof Q.UNSAFE_componentWillReceiveProps === "function")
        Q.UNSAFE_componentWillReceiveProps(Z, X);
      if (Q.state !== G) {
        {
          var B = YJ(J) || "Component";
          if (!BB.has(B))
            BB.add(B),
              M(
                "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                B,
              );
        }
        qB.enqueueReplaceState(Q, Q.state, null);
      }
    }
    function OB(J, Q, Z, X) {
      AD(J, Q, Z);
      var G = J.stateNode;
      (G.props = Z), (G.state = J.memoizedState), (G.refs = gK), ZB(J);
      var B = Q.contextType;
      if (typeof B === "object" && B !== null) G.context = jQ(B);
      else {
        var U = q5(J, Q, !0);
        G.context = O5(J, U);
      }
      {
        if (G.state === Z) {
          var Y = fJ(Q) || "Component";
          if (!WB.has(Y))
            WB.add(Y),
              M(
                "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
                Y,
              );
        }
        if (J.mode & OQ) $0.recordLegacyContextWarning(J, G);
        $0.recordUnsafeLifecycleWarnings(J, G);
      }
      G.state = J.memoizedState;
      var H = Q.getDerivedStateFromProps;
      if (typeof H === "function") VB(J, Q, H, Z), (G.state = J.memoizedState);
      if (
        typeof Q.getDerivedStateFromProps !== "function" &&
        typeof G.getSnapshotBeforeUpdate !== "function" &&
        (typeof G.UNSAFE_componentWillMount === "function" ||
          typeof G.componentWillMount === "function")
      )
        ED(J, G), o8(J, Z, G, X), (G.state = J.memoizedState);
      if (typeof G.componentDidMount === "function") {
        var W = EJ;
        if (((W |= H4), (J.mode & N0) !== r)) W |= Q1;
        J.flags |= W;
      }
    }
    function RD(J, Q, Z, X) {
      var { stateNode: G, memoizedProps: B } = J;
      G.props = B;
      var U = G.context,
        Y = Q.contextType,
        H = uZ;
      if (typeof Y === "object" && Y !== null) H = jQ(Y);
      else {
        var W = q5(J, Q, !0);
        H = O5(J, W);
      }
      var z = Q.getDerivedStateFromProps,
        j =
          typeof z === "function" ||
          typeof G.getSnapshotBeforeUpdate === "function";
      if (
        !j &&
        (typeof G.UNSAFE_componentWillReceiveProps === "function" ||
          typeof G.componentWillReceiveProps === "function")
      ) {
        if (B !== Z || U !== H) sK(J, G, Z, H);
      }
      bK();
      var O = J.memoizedState,
        E = (G.state = O);
      if (
        (o8(J, Z, G, X),
        (E = J.memoizedState),
        B === Z && O === E && !N8() && !r8())
      ) {
        if (typeof G.componentDidMount === "function") {
          var P = EJ;
          if (((P |= H4), (J.mode & N0) !== r)) P |= Q1;
          J.flags |= P;
        }
        return !1;
      }
      if (typeof z === "function") VB(J, Q, z, Z), (E = J.memoizedState);
      var R = r8() || fK(J, Q, B, Z, O, E, H);
      if (R) {
        if (
          !j &&
          (typeof G.UNSAFE_componentWillMount === "function" ||
            typeof G.componentWillMount === "function")
        ) {
          if (typeof G.componentWillMount === "function")
            G.componentWillMount();
          if (typeof G.UNSAFE_componentWillMount === "function")
            G.UNSAFE_componentWillMount();
        }
        if (typeof G.componentDidMount === "function") {
          var g = EJ;
          if (((g |= H4), (J.mode & N0) !== r)) g |= Q1;
          J.flags |= g;
        }
      } else {
        if (typeof G.componentDidMount === "function") {
          var y = EJ;
          if (((y |= H4), (J.mode & N0) !== r)) y |= Q1;
          J.flags |= y;
        }
        (J.memoizedProps = Z), (J.memoizedState = E);
      }
      return (G.props = Z), (G.state = E), (G.context = H), R;
    }
    function LD(J, Q, Z, X, G) {
      var B = Q.stateNode;
      NK(J, Q);
      var U = Q.memoizedProps,
        Y = Q.type === Q.elementType ? U : P0(Q.type, U);
      B.props = Y;
      var H = Q.pendingProps,
        W = B.context,
        z = Z.contextType,
        j = uZ;
      if (typeof z === "object" && z !== null) j = jQ(z);
      else {
        var O = q5(Q, Z, !0);
        j = O5(Q, O);
      }
      var E = Z.getDerivedStateFromProps,
        P =
          typeof E === "function" ||
          typeof B.getSnapshotBeforeUpdate === "function";
      if (
        !P &&
        (typeof B.UNSAFE_componentWillReceiveProps === "function" ||
          typeof B.componentWillReceiveProps === "function")
      ) {
        if (U !== H || W !== j) sK(Q, B, X, j);
      }
      bK();
      var R = Q.memoizedState,
        g = (B.state = R);
      if (
        (o8(Q, X, B, G),
        (g = Q.memoizedState),
        U === H && R === g && !N8() && !r8() && !H0)
      ) {
        if (typeof B.componentDidUpdate === "function") {
          if (U !== J.memoizedProps || R !== J.memoizedState) Q.flags |= EJ;
        }
        if (typeof B.getSnapshotBeforeUpdate === "function") {
          if (U !== J.memoizedProps || R !== J.memoizedState) Q.flags |= U4;
        }
        return !1;
      }
      if (typeof E === "function") VB(Q, Z, E, X), (g = Q.memoizedState);
      var y = r8() || fK(Q, Z, Y, X, R, g, j) || H0;
      if (y) {
        if (
          !P &&
          (typeof B.UNSAFE_componentWillUpdate === "function" ||
            typeof B.componentWillUpdate === "function")
        ) {
          if (typeof B.componentWillUpdate === "function")
            B.componentWillUpdate(X, g, j);
          if (typeof B.UNSAFE_componentWillUpdate === "function")
            B.UNSAFE_componentWillUpdate(X, g, j);
        }
        if (typeof B.componentDidUpdate === "function") Q.flags |= EJ;
        if (typeof B.getSnapshotBeforeUpdate === "function") Q.flags |= U4;
      } else {
        if (typeof B.componentDidUpdate === "function") {
          if (U !== J.memoizedProps || R !== J.memoizedState) Q.flags |= EJ;
        }
        if (typeof B.getSnapshotBeforeUpdate === "function") {
          if (U !== J.memoizedProps || R !== J.memoizedState) Q.flags |= U4;
        }
        (Q.memoizedProps = X), (Q.memoizedState = g);
      }
      return (B.props = X), (B.state = g), (B.context = j), y;
    }
    var jB,
      DB,
      $B,
      PB,
      AB,
      mK = function (J, Q) {};
    (jB = !1),
      (DB = !1),
      ($B = {}),
      (PB = {}),
      (AB = {}),
      (mK = function (J, Q) {
        if (J === null || typeof J !== "object") return;
        if (!J._store || J._store.validated || J.key != null) return;
        if (typeof J._store !== "object")
          throw new Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.",
          );
        J._store.validated = !0;
        var Z = YJ(Q) || "Component";
        if (PB[Z]) return;
        (PB[Z] = !0),
          M(
            'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.',
          );
      });
    function t6(J, Q, Z) {
      var X = Z.ref;
      if (X !== null && typeof X !== "function" && typeof X !== "object") {
        if (
          (J.mode & OQ || $1) &&
          !(Z._owner && Z._self && Z._owner.stateNode !== Z._self)
        ) {
          var G = YJ(J) || "Component";
          if (!$B[G])
            M(
              'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
              X,
            ),
              ($B[G] = !0);
        }
        if (Z._owner) {
          var B = Z._owner,
            U;
          if (B) {
            var Y = B;
            if (Y.tag !== a)
              throw new Error(
                "Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref",
              );
            U = Y.stateNode;
          }
          if (!U)
            throw new Error(
              "Missing owner for string ref " +
                X +
                ". This error is likely caused by a bug in React. Please file an issue.",
            );
          var H = U;
          P1(X, "ref");
          var W = "" + X;
          if (
            Q !== null &&
            Q.ref !== null &&
            typeof Q.ref === "function" &&
            Q.ref._stringRef === W
          )
            return Q.ref;
          var z = function (j) {
            var O = H.refs;
            if (O === gK) O = H.refs = {};
            if (j === null) delete O[W];
            else O[W] = j;
          };
          return (z._stringRef = W), z;
        } else {
          if (typeof X !== "string")
            throw new Error(
              "Expected ref to be a function, a string, an object returned by React.createRef(), or null.",
            );
          if (!Z._owner)
            throw new Error(
              "Element ref was specified as a string (" +
                X +
                ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information.",
            );
        }
      }
      return X;
    }
    function t8(J, Q) {
      var Z = Object.prototype.toString.call(Q);
      throw new Error(
        "Objects are not valid as a React child (found: " +
          (Z === "[object Object]"
            ? "object with keys {" + Object.keys(Q).join(", ") + "}"
            : Z) +
          "). If you meant to render a collection of children, use an array instead.",
      );
    }
    function e8(J) {
      {
        var Q = YJ(J) || "Component";
        if (AB[Q]) return;
        (AB[Q] = !0),
          M(
            "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.",
          );
      }
    }
    function yK(J) {
      var { _payload: Q, _init: Z } = J;
      return Z(Q);
    }
    function lK(J) {
      function Q(D, F) {
        if (!J) return;
        var $ = D.deletions;
        if ($ === null) (D.deletions = [F]), (D.flags |= B4);
        else $.push(F);
      }
      function Z(D, F) {
        if (!J) return null;
        var $ = F;
        while ($ !== null) Q(D, $), ($ = $.sibling);
        return null;
      }
      function X(D, F) {
        var $ = new Map(),
          _ = F;
        while (_ !== null) {
          if (_.key !== null) $.set(_.key, _);
          else $.set(_.index, _);
          _ = _.sibling;
        }
        return $;
      }
      function G(D, F) {
        var $ = b4(D, F);
        return ($.index = 0), ($.sibling = null), $;
      }
      function B(D, F, $) {
        if (((D.index = $), !J)) return (D.flags |= CY), F;
        var _ = D.alternate;
        if (_ !== null) {
          var h = _.index;
          if (h < F) return (D.flags |= qQ), F;
          else return h;
        } else return (D.flags |= qQ), F;
      }
      function U(D) {
        if (J && D.alternate === null) D.flags |= qQ;
        return D;
      }
      function Y(D, F, $, _) {
        if (F === null || F.tag !== FJ) {
          var h = oU($, D.mode, _);
          return (h.return = D), h;
        } else {
          var b = G(F, $);
          return (b.return = D), b;
        }
      }
      function H(D, F, $, _) {
        var h = $.type;
        if (h === w) return z(D, F, $.props.children, _, $.key);
        if (F !== null) {
          if (
            F.elementType === h ||
            gz(F, $) ||
            (typeof h === "object" &&
              h !== null &&
              h.$$typeof === jJ &&
              yK(h) === F.type)
          ) {
            var b = G(F, $.props);
            return (
              (b.ref = t6(D, F, $)),
              (b.return = D),
              (b._debugSource = $._source),
              (b._debugOwner = $._owner),
              b
            );
          }
        }
        var t = pU($, D.mode, _);
        return (t.ref = t6(D, F, $)), (t.return = D), t;
      }
      function W(D, F, $, _) {
        if (
          F === null ||
          F.tag !== OJ ||
          F.stateNode.containerInfo !== $.containerInfo ||
          F.stateNode.implementation !== $.implementation
        ) {
          var h = rU($, D.mode, _);
          return (h.return = D), h;
        } else {
          var b = G(F, $.children || []);
          return (b.return = D), b;
        }
      }
      function z(D, F, $, _, h) {
        if (F === null || F.tag !== yZ) {
          var b = t1($, D.mode, _, h);
          return (b.return = D), b;
        } else {
          var t = G(F, $);
          return (t.return = D), t;
        }
      }
      function j(D, F, $) {
        if ((typeof F === "string" && F !== "") || typeof F === "number") {
          var _ = oU("" + F, D.mode, $);
          return (_.return = D), _;
        }
        if (typeof F === "object" && F !== null) {
          switch (F.$$typeof) {
            case S0: {
              var h = pU(F, D.mode, $);
              return (h.ref = t6(D, null, F)), (h.return = D), h;
            }
            case q: {
              var b = rU(F, D.mode, $);
              return (b.return = D), b;
            }
            case jJ: {
              var { _payload: t, _init: GJ } = F;
              return j(D, GJ(t), $);
            }
          }
          if (AQ(F) || a0(F)) {
            var TJ = t1(F, D.mode, $, null);
            return (TJ.return = D), TJ;
          }
          t8(D, F);
        }
        if (typeof F === "function") e8(D);
        return null;
      }
      function O(D, F, $, _) {
        var h = F !== null ? F.key : null;
        if ((typeof $ === "string" && $ !== "") || typeof $ === "number") {
          if (h !== null) return null;
          return Y(D, F, "" + $, _);
        }
        if (typeof $ === "object" && $ !== null) {
          switch ($.$$typeof) {
            case S0:
              if ($.key === h) return H(D, F, $, _);
              else return null;
            case q:
              if ($.key === h) return W(D, F, $, _);
              else return null;
            case jJ: {
              var { _payload: b, _init: t } = $;
              return O(D, F, t(b), _);
            }
          }
          if (AQ($) || a0($)) {
            if (h !== null) return null;
            return z(D, F, $, _, null);
          }
          t8(D, $);
        }
        if (typeof $ === "function") e8(D);
        return null;
      }
      function E(D, F, $, _, h) {
        if ((typeof _ === "string" && _ !== "") || typeof _ === "number") {
          var b = D.get($) || null;
          return Y(F, b, "" + _, h);
        }
        if (typeof _ === "object" && _ !== null) {
          switch (_.$$typeof) {
            case S0: {
              var t = D.get(_.key === null ? $ : _.key) || null;
              return H(F, t, _, h);
            }
            case q: {
              var GJ = D.get(_.key === null ? $ : _.key) || null;
              return W(F, GJ, _, h);
            }
            case jJ:
              var { _payload: TJ, _init: RJ } = _;
              return E(D, F, $, RJ(TJ), h);
          }
          if (AQ(_) || a0(_)) {
            var KQ = D.get($) || null;
            return z(F, KQ, _, h, null);
          }
          t8(F, _);
        }
        if (typeof _ === "function") e8(F);
        return null;
      }
      function P(D, F, $) {
        {
          if (typeof D !== "object" || D === null) return F;
          switch (D.$$typeof) {
            case S0:
            case q:
              mK(D, $);
              var _ = D.key;
              if (typeof _ !== "string") break;
              if (F === null) {
                (F = new Set()), F.add(_);
                break;
              }
              if (!F.has(_)) {
                F.add(_);
                break;
              }
              M(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be " +
                  "duplicated and/or omitted \u2014 the behavior is unsupported and " +
                  "could change in a future version.",
                _,
              );
              break;
            case jJ:
              var { _payload: h, _init: b } = D;
              P(b(h), F, $);
              break;
          }
        }
        return F;
      }
      function R(D, F, $, _) {
        {
          var h = null;
          for (var b = 0; b < $.length; b++) {
            var t = $[b];
            h = P(t, h, D);
          }
        }
        var GJ = null,
          TJ = null,
          RJ = F,
          KQ = 0,
          LJ = 0,
          UQ = null;
        for (; RJ !== null && LJ < $.length; LJ++) {
          if (RJ.index > LJ) (UQ = RJ), (RJ = null);
          else UQ = RJ.sibling;
          var HZ = O(D, RJ, $[LJ], _);
          if (HZ === null) {
            if (RJ === null) RJ = UQ;
            break;
          }
          if (J) {
            if (RJ && HZ.alternate === null) Q(D, RJ);
          }
          if (((KQ = B(HZ, KQ, LJ)), TJ === null)) GJ = HZ;
          else TJ.sibling = HZ;
          (TJ = HZ), (RJ = UQ);
        }
        if (LJ === $.length) {
          if ((Z(D, RJ), lQ())) {
            var nQ = LJ;
            A4(D, nQ);
          }
          return GJ;
        }
        if (RJ === null) {
          for (; LJ < $.length; LJ++) {
            var sZ = j(D, $[LJ], _);
            if (sZ === null) continue;
            if (((KQ = B(sZ, KQ, LJ)), TJ === null)) GJ = sZ;
            else TJ.sibling = sZ;
            TJ = sZ;
          }
          if (lQ()) {
            var AZ = LJ;
            A4(D, AZ);
          }
          return GJ;
        }
        var EZ = X(D, RJ);
        for (; LJ < $.length; LJ++) {
          var KZ = E(EZ, D, LJ, $[LJ], _);
          if (KZ !== null) {
            if (J) {
              if (KZ.alternate !== null)
                EZ.delete(KZ.key === null ? LJ : KZ.key);
            }
            if (((KQ = B(KZ, KQ, LJ)), TJ === null)) GJ = KZ;
            else TJ.sibling = KZ;
            TJ = KZ;
          }
        }
        if (J)
          EZ.forEach(function (h5) {
            return Q(D, h5);
          });
        if (lQ()) {
          var D1 = LJ;
          A4(D, D1);
        }
        return GJ;
      }
      function g(D, F, $, _) {
        var h = a0($);
        if (typeof h !== "function")
          throw new Error(
            "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.",
          );
        {
          if (
            typeof Symbol === "function" &&
            $[Symbol.toStringTag] === "Generator"
          ) {
            if (!DB)
              M(
                "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.",
              );
            DB = !0;
          }
          if ($.entries === h) {
            if (!jB)
              M(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead.",
              );
            jB = !0;
          }
          var b = h.call($);
          if (b) {
            var t = null,
              GJ = b.next();
            for (; !GJ.done; GJ = b.next()) {
              var TJ = GJ.value;
              t = P(TJ, t, D);
            }
          }
        }
        var RJ = h.call($);
        if (RJ == null)
          throw new Error("An iterable object provided no iterator.");
        var KQ = null,
          LJ = null,
          UQ = F,
          HZ = 0,
          nQ = 0,
          sZ = null,
          AZ = RJ.next();
        for (; UQ !== null && !AZ.done; nQ++, AZ = RJ.next()) {
          if (UQ.index > nQ) (sZ = UQ), (UQ = null);
          else sZ = UQ.sibling;
          var EZ = O(D, UQ, AZ.value, _);
          if (EZ === null) {
            if (UQ === null) UQ = sZ;
            break;
          }
          if (J) {
            if (UQ && EZ.alternate === null) Q(D, UQ);
          }
          if (((HZ = B(EZ, HZ, nQ)), LJ === null)) KQ = EZ;
          else LJ.sibling = EZ;
          (LJ = EZ), (UQ = sZ);
        }
        if (AZ.done) {
          if ((Z(D, UQ), lQ())) {
            var KZ = nQ;
            A4(D, KZ);
          }
          return KQ;
        }
        if (UQ === null) {
          for (; !AZ.done; nQ++, AZ = RJ.next()) {
            var D1 = j(D, AZ.value, _);
            if (D1 === null) continue;
            if (((HZ = B(D1, HZ, nQ)), LJ === null)) KQ = D1;
            else LJ.sibling = D1;
            LJ = D1;
          }
          if (lQ()) {
            var h5 = nQ;
            A4(D, h5);
          }
          return KQ;
        }
        var _7 = X(D, UQ);
        for (; !AZ.done; nQ++, AZ = RJ.next()) {
          var y0 = E(_7, D, nQ, AZ.value, _);
          if (y0 !== null) {
            if (J) {
              if (y0.alternate !== null)
                _7.delete(y0.key === null ? nQ : y0.key);
            }
            if (((HZ = B(y0, HZ, nQ)), LJ === null)) KQ = y0;
            else LJ.sibling = y0;
            LJ = y0;
          }
        }
        if (J)
          _7.forEach(function (sP) {
            return Q(D, sP);
          });
        if (lQ()) {
          var dP = nQ;
          A4(D, dP);
        }
        return KQ;
      }
      function y(D, F, $, _) {
        if (F !== null && F.tag === FJ) {
          Z(D, F.sibling);
          var h = G(F, $);
          return (h.return = D), h;
        }
        Z(D, F);
        var b = oU($, D.mode, _);
        return (b.return = D), b;
      }
      function d(D, F, $, _) {
        var h = $.key,
          b = F;
        while (b !== null) {
          if (b.key === h) {
            var t = $.type;
            if (t === w) {
              if (b.tag === yZ) {
                Z(D, b.sibling);
                var GJ = G(b, $.props.children);
                return (
                  (GJ.return = D),
                  (GJ._debugSource = $._source),
                  (GJ._debugOwner = $._owner),
                  GJ
                );
              }
            } else if (
              b.elementType === t ||
              gz(b, $) ||
              (typeof t === "object" &&
                t !== null &&
                t.$$typeof === jJ &&
                yK(t) === b.type)
            ) {
              Z(D, b.sibling);
              var TJ = G(b, $.props);
              return (
                (TJ.ref = t6(D, b, $)),
                (TJ.return = D),
                (TJ._debugSource = $._source),
                (TJ._debugOwner = $._owner),
                TJ
              );
            }
            Z(D, b);
            break;
          } else Q(D, b);
          b = b.sibling;
        }
        if ($.type === w) {
          var RJ = t1($.props.children, D.mode, _, $.key);
          return (RJ.return = D), RJ;
        } else {
          var KQ = pU($, D.mode, _);
          return (KQ.ref = t6(D, F, $)), (KQ.return = D), KQ;
        }
      }
      function VJ(D, F, $, _) {
        var h = $.key,
          b = F;
        while (b !== null) {
          if (b.key === h)
            if (
              b.tag === OJ &&
              b.stateNode.containerInfo === $.containerInfo &&
              b.stateNode.implementation === $.implementation
            ) {
              Z(D, b.sibling);
              var t = G(b, $.children || []);
              return (t.return = D), t;
            } else {
              Z(D, b);
              break;
            }
          else Q(D, b);
          b = b.sibling;
        }
        var GJ = rU($, D.mode, _);
        return (GJ.return = D), GJ;
      }
      function qJ(D, F, $, _) {
        var h =
          typeof $ === "object" && $ !== null && $.type === w && $.key === null;
        if (h) $ = $.props.children;
        if (typeof $ === "object" && $ !== null) {
          switch ($.$$typeof) {
            case S0:
              return U(d(D, F, $, _));
            case q:
              return U(VJ(D, F, $, _));
            case jJ:
              var { _payload: b, _init: t } = $;
              return qJ(D, F, t(b), _);
          }
          if (AQ($)) return R(D, F, $, _);
          if (a0($)) return g(D, F, $, _);
          t8(D, $);
        }
        if ((typeof $ === "string" && $ !== "") || typeof $ === "number")
          return U(y(D, F, "" + $, _));
        if (typeof $ === "function") e8(D);
        return Z(D, F);
      }
      return qJ;
    }
    var E5 = lK(!0),
      cK = lK(!1);
    function FD(J, Q) {
      if (J !== null && Q.child !== J.child)
        throw new Error("Resuming work not yet implemented.");
      if (Q.child === null) return;
      var Z = Q.child,
        X = b4(Z, Z.pendingProps);
      (Q.child = X), (X.return = Q);
      while (Z.sibling !== null)
        (Z = Z.sibling),
          (X = X.sibling = b4(Z, Z.pendingProps)),
          (X.return = Q);
      X.sibling = null;
    }
    function ID(J, Q) {
      var Z = J.child;
      while (Z !== null) GP(Z, Q), (Z = Z.sibling);
    }
    var e6 = {},
      y1 = f1(e6),
      J7 = f1(e6),
      J9 = f1(e6);
    function Q9(J) {
      if (J === e6)
        throw new Error(
          "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.",
        );
      return J;
    }
    function iK() {
      var J = Q9(J9.current);
      return J;
    }
    function EB(J, Q) {
      UZ(J9, Q, J), UZ(J7, J, J), UZ(y1, e6, J);
      var Z = uO(Q);
      BZ(y1, J), UZ(y1, Z, J);
    }
    function R5(J) {
      BZ(y1, J), BZ(J7, J), BZ(J9, J);
    }
    function RB() {
      var J = Q9(y1.current);
      return J;
    }
    function aK(J) {
      var Q = Q9(J9.current),
        Z = Q9(y1.current),
        X = dO(Z, J.type);
      if (Z === X) return;
      UZ(J7, J, J), UZ(y1, X, J);
    }
    function LB(J) {
      if (J7.current !== J) return;
      BZ(y1, J), BZ(J7, J);
    }
    var xD = 0,
      pK = 1,
      oK = 1,
      Q7 = 2,
      A0 = f1(xD);
    function FB(J, Q) {
      return (J & Q) !== 0;
    }
    function L5(J) {
      return J & pK;
    }
    function IB(J, Q) {
      return (J & pK) | Q;
    }
    function wD(J, Q) {
      return J | Q;
    }
    function l1(J, Q) {
      UZ(A0, Q, J);
    }
    function F5(J) {
      BZ(A0, J);
    }
    function _D(J, Q) {
      var Z = J.memoizedState;
      if (Z !== null) {
        if (Z.dehydrated !== null) return !0;
        return !1;
      }
      var X = J.memoizedProps;
      return !0;
    }
    function Z9(J) {
      var Q = J;
      while (Q !== null) {
        if (Q.tag === PJ) {
          var Z = Q.memoizedState;
          if (Z !== null) {
            var X = Z.dehydrated;
            if (X === null || GK(X) || NG(X)) return Q;
          }
        } else if (Q.tag === $Q && Q.memoizedProps.revealOrder !== void 0) {
          var G = (Q.flags & _J) !== o;
          if (G) return Q;
        } else if (Q.child !== null) {
          (Q.child.return = Q), (Q = Q.child);
          continue;
        }
        if (Q === J) return null;
        while (Q.sibling === null) {
          if (Q.return === null || Q.return === J) return null;
          Q = Q.return;
        }
        (Q.sibling.return = Q.return), (Q = Q.sibling);
      }
      return null;
    }
    var _Z = 0,
      EQ = 1,
      T0 = 2,
      RQ = 4,
      cQ = 8,
      xB = [];
    function wB() {
      for (var J = 0; J < xB.length; J++) {
        var Q = xB[J];
        Q._workInProgressVersionPrimary = null;
      }
      xB.length = 0;
    }
    function SD(J, Q) {
      var Z = Q._getVersion,
        X = Z(Q._source);
      if (J.mutableSourceEagerHydrationData == null)
        J.mutableSourceEagerHydrationData = [Q, X];
      else J.mutableSourceEagerHydrationData.push(Q, X);
    }
    var { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: Z7 } = SJ,
      _B,
      I5;
    _B = new Set();
    var x4 = x,
      gJ = null,
      LQ = null,
      FQ = null,
      X9 = !1,
      X7 = !1,
      G7 = 0,
      CD = 0,
      vD = 25,
      I = null,
      Z0 = null,
      c1 = -1,
      SB = !1;
    function vJ() {
      {
        var J = I;
        if (Z0 === null) Z0 = [J];
        else Z0.push(J);
      }
    }
    function C() {
      {
        var J = I;
        if (Z0 !== null) {
          if ((c1++, Z0[c1] !== J)) ND(J);
        }
      }
    }
    function x5(J) {
      if (J !== void 0 && J !== null && !AQ(J))
        M(
          "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.specified, the final argument must be an array.",
          I,
          typeof J,
        );
    }
    function ND(J) {
      {
        var Q = YJ(gJ);
        if (!_B.has(Q)) {
          if ((_B.add(Q), Z0 !== null)) {
            var Z = "",
              X = 30;
            for (var G = 0; G <= c1; G++) {
              var B = Z0[G],
                U = G === c1 ? J : B,
                Y = G + 1 + ". " + B;
              while (Y.length < X) Y += " ";
              (Y += U + "\n"), (Z += Y);
            }
            M(
              "React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n",
              Q,
              Z,
            );
          }
        }
      }
    }
    function YZ() {
      throw new Error(
        "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem. one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.",
      );
    }
    function CB(J, Q) {
      if (SB) return !1;
      if (Q === null)
        return (
          M(
            "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.the previous render. Even though the final argument is optional, its type cannot change between renders.",
            I,
          ),
          !1
        );
      if (J.length !== Q.length)
        M(
          "The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s",
          I,
          "[" + Q.join(", ") + "]",
          "[" + J.join(", ") + "]",
        );
      for (var Z = 0; Z < Q.length && Z < J.length; Z++) {
        if (fZ(J[Z], Q[Z])) continue;
        return !1;
      }
      return !0;
    }
    function w5(J, Q, Z, X, G, B) {
      if (
        ((x4 = B),
        (gJ = Q),
        (Z0 = J !== null ? J._debugHookTypes : null),
        (c1 = -1),
        (SB = J !== null && J.type !== Q.type),
        (Q.memoizedState = null),
        (Q.updateQueue = null),
        (Q.lanes = x),
        J !== null && J.memoizedState !== null)
      )
        T.current = DW;
      else if (Z0 !== null) T.current = jW;
      else T.current = OW;
      var U = Z(X, G);
      if (X7) {
        var Y = 0;
        do {
          if (((X7 = !1), (G7 = 0), Y >= vD))
            throw new Error(
              "Too many re-renders. React limits the number of renders to prevent an infinite loop.",
            );
          (Y += 1),
            (SB = !1),
            (LQ = null),
            (FQ = null),
            (Q.updateQueue = null),
            (c1 = -1),
            (T.current = $W),
            (U = Z(X, G));
        } while (X7);
      }
      (T.current = $9), (Q._debugHookTypes = Z0);
      var H = LQ !== null && LQ.next !== null;
      if (
        ((x4 = x),
        (gJ = null),
        (LQ = null),
        (FQ = null),
        (I = null),
        (Z0 = null),
        (c1 = -1),
        J !== null && (J.flags & Z1) !== (Q.flags & Z1) && (J.mode & DJ) !== r)
      )
        M(
          "Internal React error: Expected static flag was missing. Please notify the React team.",
        );
      if (((X9 = !1), H))
        throw new Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement.early return statement.",
        );
      return U;
    }
    function _5() {
      var J = G7 !== 0;
      return (G7 = 0), J;
    }
    function rK(J, Q, Z) {
      if (((Q.updateQueue = J.updateQueue), (Q.mode & N0) !== r))
        Q.flags &= ~(o7 | Q1 | V0 | EJ);
      else Q.flags &= ~(V0 | EJ);
      J.lanes = Z8(J.lanes, Z);
    }
    function nK() {
      if (((T.current = $9), X9)) {
        var J = gJ.memoizedState;
        while (J !== null) {
          var Q = J.queue;
          if (Q !== null) Q.pending = null;
          J = J.next;
        }
        X9 = !1;
      }
      (x4 = x),
        (gJ = null),
        (LQ = null),
        (FQ = null),
        (Z0 = null),
        (c1 = -1),
        (I = null),
        (WW = !1),
        (X7 = !1),
        (G7 = 0);
    }
    function h0() {
      var J = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      if (FQ === null) gJ.memoizedState = FQ = J;
      else FQ = FQ.next = J;
      return FQ;
    }
    function X0() {
      var J;
      if (LQ === null) {
        var Q = gJ.alternate;
        if (Q !== null) J = Q.memoizedState;
        else J = null;
      } else J = LQ.next;
      var Z;
      if (FQ === null) Z = gJ.memoizedState;
      else Z = FQ.next;
      if (Z !== null) (FQ = Z), (Z = FQ.next), (LQ = J);
      else {
        if (J === null)
          throw new Error(
            "Rendered more hooks than during the previous render.",
          );
        LQ = J;
        var X = {
          memoizedState: LQ.memoizedState,
          baseState: LQ.baseState,
          baseQueue: LQ.baseQueue,
          queue: LQ.queue,
          next: null,
        };
        if (FQ === null) gJ.memoizedState = FQ = X;
        else FQ = FQ.next = X;
      }
      return FQ;
    }
    function tK() {
      return { lastEffect: null, stores: null };
    }
    function vB(J, Q) {
      return typeof Q === "function" ? Q(J) : Q;
    }
    function NB(J, Q, Z) {
      var X = h0(),
        G;
      if (Z !== void 0) G = Z(Q);
      else G = Q;
      X.memoizedState = X.baseState = G;
      var B = {
        pending: null,
        interleaved: null,
        lanes: x,
        dispatch: null,
        lastRenderedReducer: J,
        lastRenderedState: G,
      };
      X.queue = B;
      var U = (B.dispatch = gD.bind(null, gJ, B));
      return [X.memoizedState, U];
    }
    function bB(J, Q, Z) {
      var X = X0(),
        G = X.queue;
      if (G === null)
        throw new Error(
          "Should have a queue. This is likely a bug in React. Please file an issue.",
        );
      G.lastRenderedReducer = J;
      var B = LQ,
        U = B.baseQueue,
        Y = G.pending;
      if (Y !== null) {
        if (U !== null) {
          var H = U.next,
            W = Y.next;
          (U.next = W), (Y.next = H);
        }
        if (B.baseQueue !== U)
          M(
            "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.",
          );
        (B.baseQueue = U = Y), (G.pending = null);
      }
      if (U !== null) {
        var z = U.next,
          j = B.baseState,
          O = null,
          E = null,
          P = null,
          R = z;
        do {
          var g = R.lane;
          if (!G5(x4, g)) {
            var y = {
              lane: g,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            };
            if (P === null) (E = P = y), (O = j);
            else P = P.next = y;
            (gJ.lanes = zJ(gJ.lanes, g)), L7(g);
          } else {
            if (P !== null) {
              var d = {
                lane: kQ,
                action: R.action,
                hasEagerState: R.hasEagerState,
                eagerState: R.eagerState,
                next: null,
              };
              P = P.next = d;
            }
            if (R.hasEagerState) j = R.eagerState;
            else {
              var VJ = R.action;
              j = J(j, VJ);
            }
          }
          R = R.next;
        } while (R !== null && R !== z);
        if (P === null) O = j;
        else P.next = E;
        if (!fZ(j, X.memoizedState)) z7();
        (X.memoizedState = j),
          (X.baseState = O),
          (X.baseQueue = P),
          (G.lastRenderedState = j);
      }
      var qJ = G.interleaved;
      if (qJ !== null) {
        var D = qJ;
        do {
          var F = D.lane;
          (gJ.lanes = zJ(gJ.lanes, F)), L7(F), (D = D.next);
        } while (D !== qJ);
      } else if (U === null) G.lanes = x;
      var $ = G.dispatch;
      return [X.memoizedState, $];
    }
    function kB(J, Q, Z) {
      var X = X0(),
        G = X.queue;
      if (G === null)
        throw new Error(
          "Should have a queue. This is likely a bug in React. Please file an issue.",
        );
      G.lastRenderedReducer = J;
      var { dispatch: B, pending: U } = G,
        Y = X.memoizedState;
      if (U !== null) {
        G.pending = null;
        var H = U.next,
          W = H;
        do {
          var z = W.action;
          (Y = J(Y, z)), (W = W.next);
        } while (W !== H);
        if (!fZ(Y, X.memoizedState)) z7();
        if (((X.memoizedState = Y), X.baseQueue === null)) X.baseState = Y;
        G.lastRenderedState = Y;
      }
      return [Y, B];
    }
    function gB(J, Q, Z) {
      return;
    }
    function G9(J, Q, Z) {
      return;
    }
    function TB(J, Q, Z) {
      var X = gJ,
        G = h0(),
        B,
        U = lQ();
      if (U) {
        if (Z === void 0)
          throw new Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.server-rendered content. Will revert to client rendering.",
          );
        if (((B = Z()), !I5)) {
          if (B !== Z())
            M(
              "The result of getServerSnapshot should be cached to avoid an infinite loop",
            ),
              (I5 = !0);
        }
      } else {
        if (((B = Q()), !I5)) {
          var Y = Q();
          if (!fZ(B, Y))
            M(
              "The result of getSnapshot should be cached to avoid an infinite loop",
            ),
              (I5 = !0);
        }
        var H = T9();
        if (H === null)
          throw new Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue.",
          );
        if (!Q8(H, x4)) eK(X, Q, B);
      }
      G.memoizedState = B;
      var W = { value: B, getSnapshot: Q };
      return (
        (G.queue = W),
        K9(QW.bind(null, X, W, J), [J]),
        (X.flags |= V0),
        B7(EQ | cQ, JW.bind(null, X, W, B, Q), void 0, null),
        B
      );
    }
    function B9(J, Q, Z) {
      var X = gJ,
        G = X0(),
        B = Q();
      if (!I5) {
        var U = Q();
        if (!fZ(B, U))
          M(
            "The result of getSnapshot should be cached to avoid an infinite loop",
          ),
            (I5 = !0);
      }
      var Y = G.memoizedState,
        H = !fZ(Y, B);
      if (H) (G.memoizedState = B), z7();
      var W = G.queue;
      if (
        (Y7(QW.bind(null, X, W, J), [J]),
        W.getSnapshot !== Q || H || (FQ !== null && FQ.memoizedState.tag & EQ))
      ) {
        (X.flags |= V0), B7(EQ | cQ, JW.bind(null, X, W, B, Q), void 0, null);
        var z = T9();
        if (z === null)
          throw new Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue.",
          );
        if (!Q8(z, x4)) eK(X, Q, B);
      }
      return B;
    }
    function eK(J, Q, Z) {
      J.flags |= p7;
      var X = { getSnapshot: Q, value: Z },
        G = gJ.updateQueue;
      if (G === null) (G = tK()), (gJ.updateQueue = G), (G.stores = [X]);
      else {
        var B = G.stores;
        if (B === null) G.stores = [X];
        else B.push(X);
      }
    }
    function JW(J, Q, Z, X) {
      if (((Q.value = Z), (Q.getSnapshot = X), ZW(Q))) XW(J);
    }
    function QW(J, Q, Z) {
      var X = function () {
        if (ZW(Q)) XW(J);
      };
      return Z(X);
    }
    function ZW(J) {
      var { getSnapshot: Q, value: Z } = J;
      try {
        var X = Q();
        return !fZ(Z, X);
      } catch (G) {
        return !0;
      }
    }
    function XW(J) {
      var Q = wZ(J, ZJ);
      if (Q !== null) _Q(Q, J, ZJ, pJ);
    }
    function U9(J) {
      var Q = h0();
      if (typeof J === "function") J = J();
      Q.memoizedState = Q.baseState = J;
      var Z = {
        pending: null,
        interleaved: null,
        lanes: x,
        dispatch: null,
        lastRenderedReducer: vB,
        lastRenderedState: J,
      };
      Q.queue = Z;
      var X = (Z.dispatch = TD.bind(null, gJ, Z));
      return [Q.memoizedState, X];
    }
    function hB(J) {
      return bB(vB);
    }
    function fB(J) {
      return kB(vB);
    }
    function B7(J, Q, Z, X) {
      var G = { tag: J, create: Q, destroy: Z, deps: X, next: null },
        B = gJ.updateQueue;
      if (B === null)
        (B = tK()), (gJ.updateQueue = B), (B.lastEffect = G.next = G);
      else {
        var U = B.lastEffect;
        if (U === null) B.lastEffect = G.next = G;
        else {
          var Y = U.next;
          (U.next = G), (G.next = Y), (B.lastEffect = G);
        }
      }
      return G;
    }
    function uB(J) {
      var Q = h0();
      {
        var Z = { current: J };
        return (Q.memoizedState = Z), Z;
      }
    }
    function Y9(J) {
      var Q = X0();
      return Q.memoizedState;
    }
    function U7(J, Q, Z, X) {
      var G = h0(),
        B = X === void 0 ? null : X;
      (gJ.flags |= J), (G.memoizedState = B7(EQ | Q, Z, void 0, B));
    }
    function H9(J, Q, Z, X) {
      var G = X0(),
        B = X === void 0 ? null : X,
        U = void 0;
      if (LQ !== null) {
        var Y = LQ.memoizedState;
        if (((U = Y.destroy), B !== null)) {
          var H = Y.deps;
          if (CB(B, H)) {
            G.memoizedState = B7(Q, Z, U, B);
            return;
          }
        }
      }
      (gJ.flags |= J), (G.memoizedState = B7(EQ | Q, Z, U, B));
    }
    function K9(J, Q) {
      if ((gJ.mode & N0) !== r) return U7(o7 | V0 | LX, cQ, J, Q);
      else return U7(V0 | LX, cQ, J, Q);
    }
    function Y7(J, Q) {
      return H9(V0, cQ, J, Q);
    }
    function dB(J, Q) {
      return U7(EJ, T0, J, Q);
    }
    function W9(J, Q) {
      return H9(EJ, T0, J, Q);
    }
    function sB(J, Q) {
      var Z = EJ;
      if (((Z |= H4), (gJ.mode & N0) !== r)) Z |= Q1;
      return U7(Z, RQ, J, Q);
    }
    function z9(J, Q) {
      return H9(EJ, RQ, J, Q);
    }
    function GW(J, Q) {
      if (typeof Q === "function") {
        var Z = Q,
          X = J();
        return (
          Z(X),
          function () {
            Z(null);
          }
        );
      } else if (Q !== null && Q !== void 0) {
        var G = Q;
        if (!G.hasOwnProperty("current"))
          M(
            "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
            "an object with keys {" + Object.keys(G).join(", ") + "}",
          );
        var B = J();
        return (
          (G.current = B),
          function () {
            G.current = null;
          }
        );
      }
    }
    function mB(J, Q, Z) {
      if (typeof Q !== "function")
        M(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          Q !== null ? typeof Q : "null",
        );
      var X = Z !== null && Z !== void 0 ? Z.concat([J]) : null,
        G = EJ;
      if (((G |= H4), (gJ.mode & N0) !== r)) G |= Q1;
      return U7(G, RQ, GW.bind(null, Q, J), X);
    }
    function M9(J, Q, Z) {
      if (typeof Q !== "function")
        M(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          Q !== null ? typeof Q : "null",
        );
      var X = Z !== null && Z !== void 0 ? Z.concat([J]) : null;
      return H9(EJ, RQ, GW.bind(null, Q, J), X);
    }
    function V9(J, Q) {}
    var q9 = V9;
    function yB(J, Q) {
      var Z = h0(),
        X = Q === void 0 ? null : Q;
      return (Z.memoizedState = [J, X]), J;
    }
    function O9(J, Q) {
      var Z = X0(),
        X = Q === void 0 ? null : Q,
        G = Z.memoizedState;
      if (G !== null) {
        if (X !== null) {
          var B = G[1];
          if (CB(X, B)) return G[0];
        }
      }
      return (Z.memoizedState = [J, X]), J;
    }
    function lB(J, Q) {
      var Z = h0(),
        X = Q === void 0 ? null : Q,
        G = J();
      return (Z.memoizedState = [G, X]), G;
    }
    function j9(J, Q) {
      var Z = X0(),
        X = Q === void 0 ? null : Q,
        G = Z.memoizedState;
      if (G !== null) {
        if (X !== null) {
          var B = G[1];
          if (CB(X, B)) return G[0];
        }
      }
      var U = J();
      return (Z.memoizedState = [U, X]), U;
    }
    function cB(J) {
      var Q = h0();
      return (Q.memoizedState = J), J;
    }
    function BW(J) {
      var Q = X0(),
        Z = LQ,
        X = Z.memoizedState;
      return YW(Q, X, J);
    }
    function UW(J) {
      var Q = X0();
      if (LQ === null) return (Q.memoizedState = J), J;
      else {
        var Z = LQ.memoizedState;
        return YW(Q, Z, J);
      }
    }
    function YW(J, Q, Z) {
      var X = !OV(x4);
      if (X) {
        if (!fZ(Z, Q)) {
          var G = oY();
          (gJ.lanes = zJ(gJ.lanes, G)), L7(G), (J.baseState = !0);
        }
        return Q;
      } else {
        if (J.baseState) (J.baseState = !1), z7();
        return (J.memoizedState = Z), Z;
      }
    }
    function bD(J, Q, Z) {
      var X = O0();
      gQ(FV(X, G1)), J(!0);
      var G = Z7.transition;
      Z7.transition = {};
      var B = Z7.transition;
      Z7.transition._updatedFibers = new Set();
      try {
        J(!1), Q();
      } finally {
        if ((gQ(X), (Z7.transition = G), G === null && B._updatedFibers)) {
          var U = B._updatedFibers.size;
          if (U > 10)
            DQ(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.",
            );
          B._updatedFibers.clear();
        }
      }
    }
    function iB() {
      var J = U9(!1),
        Q = J[0],
        Z = J[1],
        X = bD.bind(null, Z),
        G = h0();
      return (G.memoizedState = X), [Q, X];
    }
    function HW() {
      var J = hB(),
        Q = J[0],
        Z = X0(),
        X = Z.memoizedState;
      return [Q, X];
    }
    function KW() {
      var J = fB(),
        Q = J[0],
        Z = X0(),
        X = Z.memoizedState;
      return [Q, X];
    }
    var WW = !1;
    function kD() {
      return WW;
    }
    function aB() {
      var J = h0(),
        Q = T9(),
        Z = Q.identifierPrefix,
        X;
      if (lQ()) {
        var G = oj();
        X = ":" + Z + "R" + G;
        var B = G7++;
        if (B > 0) X += "H" + B.toString(32);
        X += ":";
      } else {
        var U = CD++;
        X = ":" + Z + "r" + U.toString(32) + ":";
      }
      return (J.memoizedState = X), X;
    }
    function D9() {
      var J = X0(),
        Q = J.memoizedState;
      return Q;
    }
    function gD(J, Q, Z) {
      if (typeof arguments[3] === "function")
        M(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
        );
      var X = r1(J),
        G = {
          lane: X,
          action: Z,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (zW(J)) MW(Q, G);
      else {
        var B = SK(J, Q, G, X);
        if (B !== null) {
          var U = PZ();
          _Q(B, J, X, U), VW(B, Q, X);
        }
      }
      qW(J, X);
    }
    function TD(J, Q, Z) {
      if (typeof arguments[3] === "function")
        M(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
        );
      var X = r1(J),
        G = {
          lane: X,
          action: Z,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (zW(J)) MW(Q, G);
      else {
        var B = J.alternate;
        if (J.lanes === x && (B === null || B.lanes === x)) {
          var U = Q.lastRenderedReducer;
          if (U !== null) {
            var Y;
            (Y = T.current), (T.current = E0);
            try {
              var H = Q.lastRenderedState,
                W = U(H, Z);
              if (((G.hasEagerState = !0), (G.eagerState = W), fZ(W, H))) {
                OD(J, Q, G, X);
                return;
              }
            } catch (O) {
            } finally {
              T.current = Y;
            }
          }
        }
        var z = SK(J, Q, G, X);
        if (z !== null) {
          var j = PZ();
          _Q(z, J, X, j), VW(z, Q, X);
        }
      }
      qW(J, X);
    }
    function zW(J) {
      var Q = J.alternate;
      return J === gJ || (Q !== null && Q === gJ);
    }
    function MW(J, Q) {
      X7 = X9 = !0;
      var Z = J.pending;
      if (Z === null) Q.next = Q;
      else (Q.next = Z.next), (Z.next = Q);
      J.pending = Q;
    }
    function VW(J, Q, Z) {
      if (pY(Z)) {
        var X = Q.lanes;
        X = rY(X, J.pendingLanes);
        var G = zJ(X, Z);
        (Q.lanes = G), eX(J, G);
      }
    }
    function qW(J, Q, Z) {
      _X(J, Q);
    }
    var $9 = {
        readContext: jQ,
        useCallback: YZ,
        useContext: YZ,
        useEffect: YZ,
        useImperativeHandle: YZ,
        useInsertionEffect: YZ,
        useLayoutEffect: YZ,
        useMemo: YZ,
        useReducer: YZ,
        useRef: YZ,
        useState: YZ,
        useDebugValue: YZ,
        useDeferredValue: YZ,
        useTransition: YZ,
        useMutableSource: YZ,
        useSyncExternalStore: YZ,
        useId: YZ,
        unstable_isNewReconciler: hQ,
      },
      OW = null,
      jW = null,
      DW = null,
      $W = null,
      f0 = null,
      E0 = null,
      P9 = null;
    {
      var pB = function () {
          M(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
          );
        },
        XJ = function () {
          M(
            "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks",
          );
        };
      (OW = {
        readContext: function (J) {
          return jQ(J);
        },
        useCallback: function (J, Q) {
          return (I = "useCallback"), vJ(), x5(Q), yB(J, Q);
        },
        useContext: function (J) {
          return (I = "useContext"), vJ(), jQ(J);
        },
        useEffect: function (J, Q) {
          return (I = "useEffect"), vJ(), x5(Q), K9(J, Q);
        },
        useImperativeHandle: function (J, Q, Z) {
          return (I = "useImperativeHandle"), vJ(), x5(Z), mB(J, Q, Z);
        },
        useInsertionEffect: function (J, Q) {
          return (I = "useInsertionEffect"), vJ(), x5(Q), dB(J, Q);
        },
        useLayoutEffect: function (J, Q) {
          return (I = "useLayoutEffect"), vJ(), x5(Q), sB(J, Q);
        },
        useMemo: function (J, Q) {
          (I = "useMemo"), vJ(), x5(Q);
          var Z = T.current;
          T.current = f0;
          try {
            return lB(J, Q);
          } finally {
            T.current = Z;
          }
        },
        useReducer: function (J, Q, Z) {
          (I = "useReducer"), vJ();
          var X = T.current;
          T.current = f0;
          try {
            return NB(J, Q, Z);
          } finally {
            T.current = X;
          }
        },
        useRef: function (J) {
          return (I = "useRef"), vJ(), uB(J);
        },
        useState: function (J) {
          (I = "useState"), vJ();
          var Q = T.current;
          T.current = f0;
          try {
            return U9(J);
          } finally {
            T.current = Q;
          }
        },
        useDebugValue: function (J, Q) {
          return (I = "useDebugValue"), vJ(), V9();
        },
        useDeferredValue: function (J) {
          return (I = "useDeferredValue"), vJ(), cB(J);
        },
        useTransition: function () {
          return (I = "useTransition"), vJ(), iB();
        },
        useMutableSource: function (J, Q, Z) {
          return (I = "useMutableSource"), vJ(), gB();
        },
        useSyncExternalStore: function (J, Q, Z) {
          return (I = "useSyncExternalStore"), vJ(), TB(J, Q, Z);
        },
        useId: function () {
          return (I = "useId"), vJ(), aB();
        },
        unstable_isNewReconciler: hQ,
      }),
        (jW = {
          readContext: function (J) {
            return jQ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), C(), yB(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), C(), jQ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), C(), K9(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), C(), mB(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), C(), dB(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), C(), sB(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), C();
            var Z = T.current;
            T.current = f0;
            try {
              return lB(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), C();
            var X = T.current;
            T.current = f0;
            try {
              return NB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), C(), uB(J);
          },
          useState: function (J) {
            (I = "useState"), C();
            var Q = T.current;
            T.current = f0;
            try {
              return U9(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), C(), V9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), C(), cB(J);
          },
          useTransition: function () {
            return (I = "useTransition"), C(), iB();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), C(), gB();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), C(), TB(J, Q, Z);
          },
          useId: function () {
            return (I = "useId"), C(), aB();
          },
          unstable_isNewReconciler: hQ,
        }),
        (DW = {
          readContext: function (J) {
            return jQ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), C(), O9(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), C(), jQ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), C(), Y7(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), C(), M9(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), C(), W9(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), C(), z9(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), C();
            var Z = T.current;
            T.current = E0;
            try {
              return j9(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), C();
            var X = T.current;
            T.current = E0;
            try {
              return bB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), C(), Y9();
          },
          useState: function (J) {
            (I = "useState"), C();
            var Q = T.current;
            T.current = E0;
            try {
              return hB(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), C(), q9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), C(), BW(J);
          },
          useTransition: function () {
            return (I = "useTransition"), C(), HW();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), C(), G9();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), C(), B9(J, Q);
          },
          useId: function () {
            return (I = "useId"), C(), D9();
          },
          unstable_isNewReconciler: hQ,
        }),
        ($W = {
          readContext: function (J) {
            return jQ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), C(), O9(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), C(), jQ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), C(), Y7(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), C(), M9(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), C(), W9(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), C(), z9(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), C();
            var Z = T.current;
            T.current = P9;
            try {
              return j9(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), C();
            var X = T.current;
            T.current = P9;
            try {
              return kB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), C(), Y9();
          },
          useState: function (J) {
            (I = "useState"), C();
            var Q = T.current;
            T.current = P9;
            try {
              return fB(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), C(), q9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), C(), UW(J);
          },
          useTransition: function () {
            return (I = "useTransition"), C(), KW();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), C(), G9();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), C(), B9(J, Q);
          },
          useId: function () {
            return (I = "useId"), C(), D9();
          },
          unstable_isNewReconciler: hQ,
        }),
        (f0 = {
          readContext: function (J) {
            return pB(), jQ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), XJ(), vJ(), yB(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), XJ(), vJ(), jQ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), XJ(), vJ(), K9(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), XJ(), vJ(), mB(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), XJ(), vJ(), dB(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), XJ(), vJ(), sB(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), XJ(), vJ();
            var Z = T.current;
            T.current = f0;
            try {
              return lB(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), XJ(), vJ();
            var X = T.current;
            T.current = f0;
            try {
              return NB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), XJ(), vJ(), uB(J);
          },
          useState: function (J) {
            (I = "useState"), XJ(), vJ();
            var Q = T.current;
            T.current = f0;
            try {
              return U9(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), XJ(), vJ(), V9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), XJ(), vJ(), cB(J);
          },
          useTransition: function () {
            return (I = "useTransition"), XJ(), vJ(), iB();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), XJ(), vJ(), gB();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), XJ(), vJ(), TB(J, Q, Z);
          },
          useId: function () {
            return (I = "useId"), XJ(), vJ(), aB();
          },
          unstable_isNewReconciler: hQ,
        }),
        (E0 = {
          readContext: function (J) {
            return pB(), jQ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), XJ(), C(), O9(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), XJ(), C(), jQ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), XJ(), C(), Y7(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), XJ(), C(), M9(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), XJ(), C(), W9(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), XJ(), C(), z9(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), XJ(), C();
            var Z = T.current;
            T.current = E0;
            try {
              return j9(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), XJ(), C();
            var X = T.current;
            T.current = E0;
            try {
              return bB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), XJ(), C(), Y9();
          },
          useState: function (J) {
            (I = "useState"), XJ(), C();
            var Q = T.current;
            T.current = E0;
            try {
              return hB(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), XJ(), C(), q9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), XJ(), C(), BW(J);
          },
          useTransition: function () {
            return (I = "useTransition"), XJ(), C(), HW();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), XJ(), C(), G9();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), XJ(), C(), B9(J, Q);
          },
          useId: function () {
            return (I = "useId"), XJ(), C(), D9();
          },
          unstable_isNewReconciler: hQ,
        }),
        (P9 = {
          readContext: function (J) {
            return pB(), jQ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), XJ(), C(), O9(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), XJ(), C(), jQ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), XJ(), C(), Y7(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), XJ(), C(), M9(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), XJ(), C(), W9(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), XJ(), C(), z9(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), XJ(), C();
            var Z = T.current;
            T.current = E0;
            try {
              return j9(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), XJ(), C();
            var X = T.current;
            T.current = E0;
            try {
              return kB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), XJ(), C(), Y9();
          },
          useState: function (J) {
            (I = "useState"), XJ(), C();
            var Q = T.current;
            T.current = E0;
            try {
              return fB(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), XJ(), C(), q9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), XJ(), C(), UW(J);
          },
          useTransition: function () {
            return (I = "useTransition"), XJ(), C(), KW();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), XJ(), C(), G9();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), XJ(), C(), B9(J, Q);
          },
          useId: function () {
            return (I = "useId"), XJ(), C(), D9();
          },
          unstable_isNewReconciler: hQ,
        });
    }
    var i1 = c.unstable_now,
      PW = 0,
      A9 = -1,
      H7 = -1,
      E9 = -1,
      oB = !1,
      R9 = !1;
    function AW() {
      return oB;
    }
    function hD() {
      R9 = !0;
    }
    function fD() {
      (oB = !1), (R9 = !1);
    }
    function uD() {
      (oB = R9), (R9 = !1);
    }
    function EW() {
      return PW;
    }
    function RW() {
      PW = i1();
    }
    function rB(J) {
      if (((H7 = i1()), J.actualStartTime < 0)) J.actualStartTime = i1();
    }
    function LW(J) {
      H7 = -1;
    }
    function L9(J, Q) {
      if (H7 >= 0) {
        var Z = i1() - H7;
        if (((J.actualDuration += Z), Q)) J.selfBaseDuration = Z;
        H7 = -1;
      }
    }
    function u0(J) {
      if (A9 >= 0) {
        var Q = i1() - A9;
        A9 = -1;
        var Z = J.return;
        while (Z !== null) {
          switch (Z.tag) {
            case s:
              var X = Z.stateNode;
              X.effectDuration += Q;
              return;
            case oJ:
              var G = Z.stateNode;
              G.effectDuration += Q;
              return;
          }
          Z = Z.return;
        }
      }
    }
    function nB(J) {
      if (E9 >= 0) {
        var Q = i1() - E9;
        E9 = -1;
        var Z = J.return;
        while (Z !== null) {
          switch (Z.tag) {
            case s:
              var X = Z.stateNode;
              if (X !== null) X.passiveEffectDuration += Q;
              return;
            case oJ:
              var G = Z.stateNode;
              if (G !== null) G.passiveEffectDuration += Q;
              return;
          }
          Z = Z.return;
        }
      }
    }
    function d0() {
      A9 = i1();
    }
    function tB() {
      E9 = i1();
    }
    function eB(J) {
      var Q = J.child;
      while (Q) (J.actualDuration += Q.actualDuration), (Q = Q.sibling);
    }
    function w4(J, Q) {
      return { value: J, source: Q, stack: T7(Q), digest: null };
    }
    function JU(J, Q, Z) {
      return {
        value: J,
        source: null,
        stack: Z != null ? Z : null,
        digest: Q != null ? Q : null,
      };
    }
    function dD(J, Q) {
      return !0;
    }
    function QU(J, Q) {
      try {
        var Z = dD(J, Q);
        if (Z === !1) return;
        var { value: X, source: G, stack: B } = Q,
          U = B !== null ? B : "";
        if (X != null && X._suppressLogging) {
          if (J.tag === a) return;
          console.error(X);
        }
        var Y = G ? YJ(G) : null,
          H = Y
            ? "The above error occurred in the <" + Y + "> component:"
            : "The above error occurred in one of your React components:",
          W;
        if (J.tag === s)
          W =
            "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://reactjs.org/link/error-boundaries to learn more about error boundaries.";
        else {
          var z = YJ(J) || "Anonymous";
          W =
            "React will try to recreate this component tree from scratch " +
            ("using the error boundary you provided, " + z + ".");
        }
        var j = H + "\n" + U + "\n\n" + ("" + W);
        console.error(j);
      } catch (O) {
        setTimeout(function () {
          throw O;
        });
      }
    }
    var sD = typeof WeakMap === "function" ? WeakMap : Map;
    function FW(J, Q, Z) {
      var X = z1(pJ, Z);
      (X.tag = JB), (X.payload = { element: null });
      var G = Q.value;
      return (
        (X.callback = function () {
          f$(G), QU(J, Q);
        }),
        X
      );
    }
    function ZU(J, Q, Z) {
      var X = z1(pJ, Z);
      X.tag = JB;
      var G = J.type.getDerivedStateFromError;
      if (typeof G === "function") {
        var B = Q.value;
        (X.payload = function () {
          return G(B);
        }),
          (X.callback = function () {
            Tz(J), QU(J, Q);
          });
      }
      var U = J.stateNode;
      if (U !== null && typeof U.componentDidCatch === "function")
        X.callback = function Y() {
          if ((Tz(J), QU(J, Q), typeof G !== "function")) T$(this);
          var { value: H, stack: W } = Q;
          if (
            (this.componentDidCatch(H, { componentStack: W !== null ? W : "" }),
            typeof G !== "function")
          ) {
            if (!gZ(J.lanes, ZJ))
              M(
                "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
                YJ(J) || "Unknown",
              );
          }
        };
      return X;
    }
    function IW(J, Q, Z) {
      var X = J.pingCache,
        G;
      if (X === null)
        (X = J.pingCache = new sD()), (G = new Set()), X.set(Q, G);
      else if (((G = X.get(Q)), G === void 0)) (G = new Set()), X.set(Q, G);
      if (!G.has(Z)) {
        G.add(Z);
        var B = u$.bind(null, J, Q, Z);
        if (q0) F7(J, Z);
        Q.then(B, B);
      }
    }
    function mD(J, Q, Z, X) {
      var G = J.updateQueue;
      if (G === null) {
        var B = new Set();
        B.add(Z), (J.updateQueue = B);
      } else G.add(Z);
    }
    function yD(J, Q) {
      var Z = J.tag;
      if ((J.mode & DJ) === r && (Z === HJ || Z === JJ || Z === xJ)) {
        var X = J.alternate;
        if (X)
          (J.updateQueue = X.updateQueue),
            (J.memoizedState = X.memoizedState),
            (J.lanes = X.lanes);
        else (J.updateQueue = null), (J.memoizedState = null);
      }
    }
    function xW(J) {
      var Q = J;
      do {
        if (Q.tag === PJ && _D(Q)) return Q;
        Q = Q.return;
      } while (Q !== null);
      return null;
    }
    function wW(J, Q, Z, X, G) {
      if ((J.mode & DJ) === r) {
        if (J === Q) J.flags |= jZ;
        else {
          if (
            ((J.flags |= _J),
            (Z.flags |= EX),
            (Z.flags &= ~(FM | H6)),
            Z.tag === a)
          ) {
            var B = Z.alternate;
            if (B === null) Z.tag = XQ;
            else {
              var U = z1(pJ, ZJ);
              (U.tag = c8), m1(Z, U, ZJ);
            }
          }
          Z.lanes = zJ(Z.lanes, ZJ);
        }
        return J;
      }
      return (J.flags |= jZ), (J.lanes = G), J;
    }
    function lD(J, Q, Z, X, G) {
      if (((Z.flags |= H6), q0)) F7(J, G);
      if (X !== null && typeof X === "object" && typeof X.then === "function") {
        var B = X;
        if ((yD(Z), lQ() && Z.mode & DJ)) DK();
        var U = xW(Q);
        if (U !== null) {
          if (((U.flags &= ~e0), wW(U, Q, Z, J, G), U.mode & DJ)) IW(J, B, G);
          mD(U, J, B);
          return;
        } else {
          if (!qV(G)) {
            IW(J, B, G), TU();
            return;
          }
          var Y = new Error(
            "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.",
          );
          X = Y;
        }
      } else if (lQ() && Z.mode & DJ) {
        DK();
        var H = xW(Q);
        if (H !== null) {
          if ((H.flags & jZ) === o) H.flags |= e0;
          wW(H, Q, Z, J, G), aG(w4(X, Z));
          return;
        }
      }
      (X = w4(X, Z)), _$(X);
      var W = Q;
      do {
        switch (W.tag) {
          case s: {
            var z = X;
            W.flags |= jZ;
            var j = j6(G);
            W.lanes = zJ(W.lanes, j);
            var O = FW(W, z, j);
            XB(W, O);
            return;
          }
          case a:
            var E = X,
              P = W.type,
              R = W.stateNode;
            if (
              (W.flags & _J) === o &&
              (typeof P.getDerivedStateFromError === "function" ||
                (R !== null &&
                  typeof R.componentDidCatch === "function" &&
                  !wz(R)))
            ) {
              W.flags |= jZ;
              var g = j6(G);
              W.lanes = zJ(W.lanes, g);
              var y = ZU(W, E, g);
              XB(W, y);
              return;
            }
            break;
        }
        W = W.return;
      } while (W !== null);
    }
    function cD() {
      return null;
    }
    var K7 = SJ.ReactCurrentOwner,
      R0 = !1,
      XU,
      W7,
      GU,
      BU,
      UU,
      _4,
      YU,
      F9;
    (XU = {}),
      (W7 = {}),
      (GU = {}),
      (BU = {}),
      (UU = {}),
      (_4 = !1),
      (YU = {}),
      (F9 = {});
    function DZ(J, Q, Z, X) {
      if (J === null) Q.child = cK(Q, null, Z, X);
      else Q.child = E5(Q, J.child, Z, X);
    }
    function iD(J, Q, Z, X) {
      (Q.child = E5(Q, J.child, null, X)), (Q.child = E5(Q, null, Z, X));
    }
    function _W(J, Q, Z, X, G) {
      if (Q.type !== Q.elementType) {
        var B = Z.propTypes;
        if (B) j0(B, X, "prop", fJ(Z));
      }
      var U = Z.render,
        Y = Q.ref,
        H,
        W;
      A5(Q, G), W6(Q);
      {
        if (
          ((K7.current = Q),
          tZ(!0),
          (H = w5(J, Q, U, X, Y, G)),
          (W = _5()),
          Q.mode & OQ)
        ) {
          bQ(!0);
          try {
            (H = w5(J, Q, U, X, Y, G)), (W = _5());
          } finally {
            bQ(!1);
          }
        }
        tZ(!1);
      }
      if ((J5(), J !== null && !R0)) return rK(J, Q, G), M1(J, Q, G);
      if (lQ() && W) sG(Q);
      return (Q.flags |= t4), DZ(J, Q, H, G), Q.child;
    }
    function SW(J, Q, Z, X, G) {
      if (J === null) {
        var B = Z.type;
        if (ZP(B) && Z.compare === null && Z.defaultProps === void 0) {
          var U = B;
          return (
            (U = T5(B)), (Q.tag = xJ), (Q.type = U), WU(Q, B), CW(J, Q, U, X, G)
          );
        }
        {
          var Y = B.propTypes;
          if (Y) j0(Y, X, "prop", fJ(B));
        }
        var H = aU(Z.type, null, X, Q, Q.mode, G);
        return (H.ref = Q.ref), (H.return = Q), (Q.child = H), H;
      }
      {
        var W = Z.type,
          z = W.propTypes;
        if (z) j0(z, X, "prop", fJ(W));
      }
      var j = J.child,
        O = jU(J, G);
      if (!O) {
        var E = j.memoizedProps,
          P = Z.compare;
        if (((P = P !== null ? P : v6), P(E, X) && J.ref === Q.ref))
          return M1(J, Q, G);
      }
      Q.flags |= t4;
      var R = b4(j, X);
      return (R.ref = Q.ref), (R.return = Q), (Q.child = R), R;
    }
    function CW(J, Q, Z, X, G) {
      if (Q.type !== Q.elementType) {
        var B = Q.elementType;
        if (B.$$typeof === jJ) {
          var U = B,
            Y = U._payload,
            H = U._init;
          try {
            B = H(Y);
          } catch (j) {
            B = null;
          }
          var W = B && B.propTypes;
          if (W) j0(W, X, "prop", fJ(B));
        }
      }
      if (J !== null) {
        var z = J.memoizedProps;
        if (v6(z, X) && J.ref === Q.ref && Q.type === J.type) {
          if (((R0 = !1), (Q.pendingProps = X = z), !jU(J, G)))
            return (Q.lanes = J.lanes), M1(J, Q, G);
          else if ((J.flags & EX) !== o) R0 = !0;
        }
      }
      return HU(J, Q, Z, X, G);
    }
    function vW(J, Q, Z) {
      var X = Q.pendingProps,
        G = X.children,
        B = J !== null ? J.memoizedState : null;
      if (X.mode === "hidden" || eQ)
        if ((Q.mode & DJ) === r) {
          var U = { baseLanes: x, cachePool: null, transitions: null };
          (Q.memoizedState = U), h9(Q, Z);
        } else if (!gZ(Z, kZ)) {
          var Y = null,
            H;
          if (B !== null) {
            var W = B.baseLanes;
            H = zJ(W, Z);
          } else H = Z;
          Q.lanes = Q.childLanes = X8(kZ);
          var z = { baseLanes: H, cachePool: Y, transitions: null };
          return (Q.memoizedState = z), (Q.updateQueue = null), h9(Q, H), null;
        } else {
          var j = { baseLanes: x, cachePool: null, transitions: null };
          Q.memoizedState = j;
          var O = B !== null ? B.baseLanes : Z;
          h9(Q, O);
        }
      else {
        var E;
        if (B !== null) (E = zJ(B.baseLanes, Z)), (Q.memoizedState = null);
        else E = Z;
        h9(Q, E);
      }
      return DZ(J, Q, G, Z), Q.child;
    }
    function aD(J, Q, Z) {
      var X = Q.pendingProps;
      return DZ(J, Q, X, Z), Q.child;
    }
    function pD(J, Q, Z) {
      var X = Q.pendingProps.children;
      return DZ(J, Q, X, Z), Q.child;
    }
    function oD(J, Q, Z) {
      {
        Q.flags |= EJ;
        {
          var X = Q.stateNode;
          (X.effectDuration = 0), (X.passiveEffectDuration = 0);
        }
      }
      var G = Q.pendingProps,
        B = G.children;
      return DZ(J, Q, B, Z), Q.child;
    }
    function NW(J, Q) {
      var Z = Q.ref;
      if ((J === null && Z !== null) || (J !== null && J.ref !== Z))
        (Q.flags |= C1), (Q.flags |= RX);
    }
    function HU(J, Q, Z, X, G) {
      if (Q.type !== Q.elementType) {
        var B = Z.propTypes;
        if (B) j0(B, X, "prop", fJ(Z));
      }
      var U;
      {
        var Y = q5(Q, Z, !0);
        U = O5(Q, Y);
      }
      var H, W;
      A5(Q, G), W6(Q);
      {
        if (
          ((K7.current = Q),
          tZ(!0),
          (H = w5(J, Q, Z, X, U, G)),
          (W = _5()),
          Q.mode & OQ)
        ) {
          bQ(!0);
          try {
            (H = w5(J, Q, Z, X, U, G)), (W = _5());
          } finally {
            bQ(!1);
          }
        }
        tZ(!1);
      }
      if ((J5(), J !== null && !R0)) return rK(J, Q, G), M1(J, Q, G);
      if (lQ() && W) sG(Q);
      return (Q.flags |= t4), DZ(J, Q, H, G), Q.child;
    }
    function bW(J, Q, Z, X, G) {
      {
        switch (DP(Q)) {
          case !1: {
            var { stateNode: B, type: U } = Q,
              Y = new U(Q.memoizedProps, B.context),
              H = Y.state;
            B.updater.enqueueSetState(B, H, null);
            break;
          }
          case !0: {
            (Q.flags |= _J), (Q.flags |= jZ);
            var W = new Error("Simulated error coming from DevTools"),
              z = j6(G);
            Q.lanes = zJ(Q.lanes, z);
            var j = ZU(Q, w4(W, Q), z);
            XB(Q, j);
            break;
          }
        }
        if (Q.type !== Q.elementType) {
          var O = Z.propTypes;
          if (O) j0(O, X, "prop", fJ(Z));
        }
      }
      var E;
      if (g0(Z)) (E = !0), k8(Q);
      else E = !1;
      A5(Q, G);
      var P = Q.stateNode,
        R;
      if (P === null) x9(J, Q), dK(Q, Z, X), OB(Q, Z, X, G), (R = !0);
      else if (J === null) R = RD(Q, Z, X, G);
      else R = LD(J, Q, Z, X, G);
      var g = KU(J, Q, Z, R, E, G);
      {
        var y = Q.stateNode;
        if (R && y.props !== X) {
          if (!_4)
            M(
              "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
              YJ(Q) || "a component",
            );
          _4 = !0;
        }
      }
      return g;
    }
    function KU(J, Q, Z, X, G, B) {
      NW(J, Q);
      var U = (Q.flags & _J) !== o;
      if (!X && !U) {
        if (G) VK(Q, Z, !1);
        return M1(J, Q, B);
      }
      var Y = Q.stateNode;
      K7.current = Q;
      var H;
      if (U && typeof Z.getDerivedStateFromError !== "function")
        (H = null), LW();
      else {
        W6(Q);
        {
          if ((tZ(!0), (H = Y.render()), Q.mode & OQ)) {
            bQ(!0);
            try {
              Y.render();
            } finally {
              bQ(!1);
            }
          }
          tZ(!1);
        }
        J5();
      }
      if (((Q.flags |= t4), J !== null && U)) iD(J, Q, H, B);
      else DZ(J, Q, H, B);
      if (((Q.memoizedState = Y.state), G)) VK(Q, Z, !0);
      return Q.child;
    }
    function kW(J) {
      var Q = J.stateNode;
      if (Q.pendingContext)
        zK(J, Q.pendingContext, Q.pendingContext !== Q.context);
      else if (Q.context) zK(J, Q.context, !1);
      EB(J, Q.containerInfo);
    }
    function rD(J, Q, Z) {
      if ((kW(Q), J === null))
        throw new Error("Should have a current fiber. This is a bug in React.");
      var { pendingProps: X, memoizedState: G } = Q,
        B = G.element;
      NK(J, Q), o8(Q, X, null, Z);
      var { memoizedState: U, stateNode: Y } = Q,
        H = U.element;
      if (G.isDehydrated) {
        var W = {
            element: H,
            isDehydrated: !1,
            cache: U.cache,
            pendingSuspenseBoundaries: U.pendingSuspenseBoundaries,
            transitions: U.transitions,
          },
          z = Q.updateQueue;
        if (((z.baseState = W), (Q.memoizedState = W), Q.flags & e0)) {
          var j = w4(
            new Error(
              "There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.of a Suspense boundary, the entire root will switch to client rendering.",
            ),
            Q,
          );
          return gW(J, Q, H, Z, j);
        } else if (H !== B) {
          var O = w4(
            new Error(
              "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.hydrate. Switched the entire root to client rendering.",
            ),
            Q,
          );
          return gW(J, Q, H, Z, O);
        } else {
          QD(Q);
          var E = cK(Q, null, H, Z);
          Q.child = E;
          var P = E;
          while (P) (P.flags = (P.flags & ~qQ) | J1), (P = P.sibling);
        }
      } else {
        if (($5(), H === B)) return M1(J, Q, Z);
        DZ(J, Q, H, Z);
      }
      return Q.child;
    }
    function gW(J, Q, Z, X, G) {
      return $5(), aG(G), (Q.flags |= e0), DZ(J, Q, Z, X), Q.child;
    }
    function nD(J, Q, Z) {
      if ((aK(Q), J === null)) iG(Q);
      var { type: X, pendingProps: G } = Q,
        B = J !== null ? J.memoizedProps : null,
        U = G.children,
        Y = _G(X, G);
      if (Y) U = null;
      else if (B !== null && _G(X, B)) Q.flags |= Y6;
      return NW(J, Q), DZ(J, Q, U, Z), Q.child;
    }
    function tD(J, Q) {
      if (J === null) iG(Q);
      return null;
    }
    function eD(J, Q, Z, X) {
      x9(J, Q);
      var G = Q.pendingProps,
        B = Z,
        U = B._payload,
        Y = B._init,
        H = Y(U);
      Q.type = H;
      var W = (Q.tag = XP(H)),
        z = P0(H, G),
        j;
      switch (W) {
        case HJ:
          return WU(Q, H), (Q.type = H = T5(H)), (j = HU(null, Q, H, z, X)), j;
        case a:
          return (Q.type = H = sU(H)), (j = bW(null, Q, H, z, X)), j;
        case JJ:
          return (Q.type = H = mU(H)), (j = _W(null, Q, H, z, X)), j;
        case WQ: {
          if (Q.type !== Q.elementType) {
            var O = H.propTypes;
            if (O) j0(O, z, "prop", fJ(H));
          }
          return (j = SW(null, Q, H, P0(H.type, z), X)), j;
        }
      }
      var E = "";
      if (H !== null && typeof H === "object" && H.$$typeof === jJ)
        E = " Did you wrap a component in React.lazy() more than once?";
      throw new Error(
        "Element type is invalid. Received a promise that resolves to: " +
          H +
          ". " +
          ("Lazy element type must resolve to a class or function." + E),
      );
    }
    function J2(J, Q, Z, X, G) {
      x9(J, Q), (Q.tag = a);
      var B;
      if (g0(Z)) (B = !0), k8(Q);
      else B = !1;
      return A5(Q, G), dK(Q, Z, X), OB(Q, Z, X, G), KU(null, Q, Z, !0, B, G);
    }
    function Q2(J, Q, Z, X) {
      x9(J, Q);
      var G = Q.pendingProps,
        B;
      {
        var U = q5(Q, Z, !1);
        B = O5(Q, U);
      }
      A5(Q, X);
      var Y, H;
      W6(Q);
      {
        if (Z.prototype && typeof Z.prototype.render === "function") {
          var W = fJ(Z) || "Unknown";
          if (!XU[W])
            M(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.This is likely to cause errors. Change %s to extend React.Component instead.",
              W,
              W,
            ),
              (XU[W] = !0);
        }
        if (Q.mode & OQ) $0.recordLegacyContextWarning(Q, null);
        tZ(!0),
          (K7.current = Q),
          (Y = w5(null, Q, Z, G, B, X)),
          (H = _5()),
          tZ(!1);
      }
      if (
        (J5(),
        (Q.flags |= t4),
        typeof Y === "object" &&
          Y !== null &&
          typeof Y.render === "function" &&
          Y.$$typeof === void 0)
      ) {
        var z = fJ(Z) || "Unknown";
        if (!W7[z])
          M(
            "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
            z,
            z,
            z,
          ),
            (W7[z] = !0);
      }
      if (
        typeof Y === "object" &&
        Y !== null &&
        typeof Y.render === "function" &&
        Y.$$typeof === void 0
      ) {
        {
          var j = fJ(Z) || "Unknown";
          if (!W7[j])
            M(
              "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
              j,
              j,
              j,
            ),
              (W7[j] = !0);
        }
        (Q.tag = a), (Q.memoizedState = null), (Q.updateQueue = null);
        var O = !1;
        if (g0(Z)) (O = !0), k8(Q);
        else O = !1;
        return (
          (Q.memoizedState =
            Y.state !== null && Y.state !== void 0 ? Y.state : null),
          ZB(Q),
          uK(Q, Y),
          OB(Q, Z, G, X),
          KU(null, Q, Z, !0, O, X)
        );
      } else {
        if (((Q.tag = HJ), Q.mode & OQ)) {
          bQ(!0);
          try {
            (Y = w5(null, Q, Z, G, B, X)), (H = _5());
          } finally {
            bQ(!1);
          }
        }
        if (lQ() && H) sG(Q);
        return DZ(null, Q, Y, X), WU(Q, Z), Q.child;
      }
    }
    function WU(J, Q) {
      {
        if (Q) {
          if (Q.childContextTypes)
            M(
              "%s(...): childContextTypes cannot be defined on a function component.",
              Q.displayName || Q.name || "Component",
            );
        }
        if (J.ref !== null) {
          var Z = "",
            X = _1();
          if (X) Z += "\n\nCheck the render method of `" + X + "`.";
          var G = X || "",
            B = J._debugSource;
          if (B) G = B.fileName + ":" + B.lineNumber;
          if (!UU[G])
            (UU[G] = !0),
              M(
                "Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",
                Z,
              );
        }
        if (typeof Q.getDerivedStateFromProps === "function") {
          var U = fJ(Q) || "Unknown";
          if (!BU[U])
            M(
              "%s: Function components do not support getDerivedStateFromProps.",
              U,
            ),
              (BU[U] = !0);
        }
        if (typeof Q.contextType === "object" && Q.contextType !== null) {
          var Y = fJ(Q) || "Unknown";
          if (!GU[Y])
            M("%s: Function components do not support contextType.", Y),
              (GU[Y] = !0);
        }
      }
    }
    var zU = { dehydrated: null, treeContext: null, retryLane: kQ };
    function MU(J) {
      return { baseLanes: J, cachePool: cD(), transitions: null };
    }
    function Z2(J, Q) {
      var Z = null;
      return {
        baseLanes: zJ(J.baseLanes, Q),
        cachePool: Z,
        transitions: J.transitions,
      };
    }
    function X2(J, Q, Z, X) {
      if (Q !== null) {
        var G = Q.memoizedState;
        if (G === null) return !1;
      }
      return FB(J, Q7);
    }
    function G2(J, Q) {
      return Z8(J.childLanes, Q);
    }
    function TW(J, Q, Z) {
      var X = Q.pendingProps;
      if ($P(Q)) Q.flags |= _J;
      var G = A0.current,
        B = !1,
        U = (Q.flags & _J) !== o;
      if (U || X2(G, J)) (B = !0), (Q.flags &= ~_J);
      else if (J === null || J.memoizedState !== null) G = wD(G, oK);
      if (((G = L5(G)), l1(Q, G), J === null)) {
        iG(Q);
        var Y = Q.memoizedState;
        if (Y !== null) {
          var H = Y.dehydrated;
          if (H !== null) return K2(Q, H);
        }
        var { children: W, fallback: z } = X;
        if (B) {
          var j = B2(Q, W, z, Z),
            O = Q.child;
          return (O.memoizedState = MU(Z)), (Q.memoizedState = zU), j;
        } else return VU(Q, W);
      } else {
        var E = J.memoizedState;
        if (E !== null) {
          var P = E.dehydrated;
          if (P !== null) return W2(J, Q, U, X, P, E, Z);
        }
        if (B) {
          var { fallback: R, children: g } = X,
            y = Y2(J, Q, g, R, Z),
            d = Q.child,
            VJ = J.child.memoizedState;
          return (
            (d.memoizedState = VJ === null ? MU(Z) : Z2(VJ, Z)),
            (d.childLanes = G2(J, Z)),
            (Q.memoizedState = zU),
            y
          );
        } else {
          var qJ = X.children,
            D = U2(J, Q, qJ, Z);
          return (Q.memoizedState = null), D;
        }
      }
    }
    function VU(J, Q, Z) {
      var X = J.mode,
        G = { mode: "visible", children: Q },
        B = qU(G, X);
      return (B.return = J), (J.child = B), B;
    }
    function B2(J, Q, Z, X) {
      var { mode: G, child: B } = J,
        U = { mode: "hidden", children: Q },
        Y,
        H;
      if ((G & DJ) === r && B !== null) {
        if (((Y = B), (Y.childLanes = x), (Y.pendingProps = U), J.mode & kJ))
          (Y.actualDuration = 0),
            (Y.actualStartTime = -1),
            (Y.selfBaseDuration = 0),
            (Y.treeBaseDuration = 0);
        H = t1(Z, G, X, null);
      } else (Y = qU(U, G)), (H = t1(Z, G, X, null));
      return (Y.return = J), (H.return = J), (Y.sibling = H), (J.child = Y), H;
    }
    function qU(J, Q, Z) {
      return fz(J, Q, x, null);
    }
    function hW(J, Q) {
      return b4(J, Q);
    }
    function U2(J, Q, Z, X) {
      var G = J.child,
        B = G.sibling,
        U = hW(G, { mode: "visible", children: Z });
      if ((Q.mode & DJ) === r) U.lanes = X;
      if (((U.return = Q), (U.sibling = null), B !== null)) {
        var Y = Q.deletions;
        if (Y === null) (Q.deletions = [B]), (Q.flags |= B4);
        else Y.push(B);
      }
      return (Q.child = U), U;
    }
    function Y2(J, Q, Z, X, G) {
      var B = Q.mode,
        U = J.child,
        Y = U.sibling,
        H = { mode: "hidden", children: Z },
        W;
      if ((B & DJ) === r && Q.child !== U) {
        var z = Q.child;
        if (((W = z), (W.childLanes = x), (W.pendingProps = H), Q.mode & kJ))
          (W.actualDuration = 0),
            (W.actualStartTime = -1),
            (W.selfBaseDuration = U.selfBaseDuration),
            (W.treeBaseDuration = U.treeBaseDuration);
        Q.deletions = null;
      } else (W = hW(U, H)), (W.subtreeFlags = U.subtreeFlags & Z1);
      var j;
      if (Y !== null) j = b4(Y, X);
      else (j = t1(X, B, G, null)), (j.flags |= qQ);
      return (j.return = Q), (W.return = Q), (W.sibling = j), (Q.child = W), j;
    }
    function I9(J, Q, Z, X) {
      if (X !== null) aG(X);
      E5(Q, J.child, null, Z);
      var G = Q.pendingProps,
        B = G.children,
        U = VU(Q, B);
      return (U.flags |= qQ), (Q.memoizedState = null), U;
    }
    function H2(J, Q, Z, X, G) {
      var B = Q.mode,
        U = { mode: "visible", children: Z },
        Y = qU(U, B),
        H = t1(X, B, G, null);
      if (
        ((H.flags |= qQ),
        (Y.return = Q),
        (H.return = Q),
        (Y.sibling = H),
        (Q.child = Y),
        (Q.mode & DJ) !== r)
      )
        E5(Q, J.child, null, G);
      return H;
    }
    function K2(J, Q, Z) {
      if ((J.mode & DJ) === r)
        M(
          "Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.",
        ),
          (J.lanes = X8(ZJ));
      else if (NG(Q)) J.lanes = X8(M4);
      else J.lanes = X8(kZ);
      return null;
    }
    function W2(J, Q, Z, X, G, B, U) {
      if (!Z) {
        if ((ej(), (Q.mode & DJ) === r)) return I9(J, Q, U, null);
        if (NG(G)) {
          var Y, H, W;
          {
            var z = jj(G);
            (Y = z.digest), (H = z.message), (W = z.stack);
          }
          var j;
          if (H) j = new Error(H);
          else
            j = new Error(
              "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.",
            );
          var O = JU(j, Y, W);
          return I9(J, Q, U, O);
        }
        var E = gZ(U, J.childLanes);
        if (R0 || E) {
          var P = T9();
          if (P !== null) {
            var R = RV(P, U);
            if (R !== kQ && R !== B.retryLane) {
              B.retryLane = R;
              var g = pJ;
              wZ(J, R), _Q(P, J, R, g);
            }
          }
          TU();
          var y = JU(
            new Error(
              "This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.",
            ),
          );
          return I9(J, Q, U, y);
        } else if (GK(G)) {
          (Q.flags |= _J), (Q.child = J.child);
          var d = d$.bind(null, J);
          return Dj(G, d), null;
        } else {
          ZD(Q, G, B.treeContext);
          var VJ = X.children,
            qJ = VU(Q, VJ);
          return (qJ.flags |= J1), qJ;
        }
      } else if (Q.flags & e0) {
        Q.flags &= ~e0;
        var D = JU(
          new Error(
            "There was an error while hydrating this Suspense boundary. Switched to client rendering.",
          ),
        );
        return I9(J, Q, U, D);
      } else if (Q.memoizedState !== null)
        return (Q.child = J.child), (Q.flags |= _J), null;
      else {
        var { children: F, fallback: $ } = X,
          _ = H2(J, Q, F, $, U),
          h = Q.child;
        return (h.memoizedState = MU(U)), (Q.memoizedState = zU), _;
      }
    }
    function fW(J, Q, Z) {
      J.lanes = zJ(J.lanes, Q);
      var X = J.alternate;
      if (X !== null) X.lanes = zJ(X.lanes, Q);
      tG(J.return, Q, Z);
    }
    function z2(J, Q, Z) {
      var X = Q;
      while (X !== null) {
        if (X.tag === PJ) {
          var G = X.memoizedState;
          if (G !== null) fW(X, Z, J);
        } else if (X.tag === $Q) fW(X, Z, J);
        else if (X.child !== null) {
          (X.child.return = X), (X = X.child);
          continue;
        }
        if (X === J) return;
        while (X.sibling === null) {
          if (X.return === null || X.return === J) return;
          X = X.return;
        }
        (X.sibling.return = X.return), (X = X.sibling);
      }
    }
    function M2(J) {
      var Q = J,
        Z = null;
      while (Q !== null) {
        var X = Q.alternate;
        if (X !== null && Z9(X) === null) Z = Q;
        Q = Q.sibling;
      }
      return Z;
    }
    function V2(J) {
      if (
        J !== void 0 &&
        J !== "forwards" &&
        J !== "backwards" &&
        J !== "together" &&
        !YU[J]
      )
        if (((YU[J] = !0), typeof J === "string"))
          switch (J.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              M(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.Use lowercase "%s" instead.',
                J,
                J.toLowerCase(),
              );
              break;
            }
            case "forward":
            case "backward": {
              M(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.React uses the -s suffix in the spelling. Use "%ss" instead.',
                J,
                J.toLowerCase(),
              );
              break;
            }
            default:
              M(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?Did you mean "together", "forwards" or "backwards"?',
                J,
              );
              break;
          }
        else
          M(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            J,
          );
    }
    function q2(J, Q) {
      if (J !== void 0 && !F9[J]) {
        if (J !== "collapsed" && J !== "hidden")
          (F9[J] = !0),
            M(
              '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
              J,
            );
        else if (Q !== "forwards" && Q !== "backwards")
          (F9[J] = !0),
            M(
              '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
              J,
            );
      }
    }
    function uW(J, Q) {
      {
        var Z = AQ(J),
          X = !Z && typeof a0(J) === "function";
        if (Z || X) {
          var G = Z ? "array" : "iterable";
          return (
            M(
              "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
              G,
              Q,
              G,
            ),
            !1
          );
        }
      }
      return !0;
    }
    function O2(J, Q) {
      if (
        (Q === "forwards" || Q === "backwards") &&
        J !== void 0 &&
        J !== null &&
        J !== !1
      )
        if (AQ(J)) {
          for (var Z = 0; Z < J.length; Z++) if (!uW(J[Z], Z)) return;
        } else {
          var X = a0(J);
          if (typeof X === "function") {
            var G = X.call(J);
            if (G) {
              var B = G.next(),
                U = 0;
              for (; !B.done; B = G.next()) {
                if (!uW(B.value, U)) return;
                U++;
              }
            }
          } else
            M(
              'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
              Q,
            );
        }
    }
    function OU(J, Q, Z, X, G) {
      var B = J.memoizedState;
      if (B === null)
        J.memoizedState = {
          isBackwards: Q,
          rendering: null,
          renderingStartTime: 0,
          last: X,
          tail: Z,
          tailMode: G,
        };
      else
        (B.isBackwards = Q),
          (B.rendering = null),
          (B.renderingStartTime = 0),
          (B.last = X),
          (B.tail = Z),
          (B.tailMode = G);
    }
    function dW(J, Q, Z) {
      var X = Q.pendingProps,
        G = X.revealOrder,
        B = X.tail,
        U = X.children;
      V2(G), q2(B, G), O2(U, G), DZ(J, Q, U, Z);
      var Y = A0.current,
        H = FB(Y, Q7);
      if (H) (Y = IB(Y, Q7)), (Q.flags |= _J);
      else {
        var W = J !== null && (J.flags & _J) !== o;
        if (W) z2(Q, Q.child, Z);
        Y = L5(Y);
      }
      if ((l1(Q, Y), (Q.mode & DJ) === r)) Q.memoizedState = null;
      else
        switch (G) {
          case "forwards": {
            var z = M2(Q.child),
              j;
            if (z === null) (j = Q.child), (Q.child = null);
            else (j = z.sibling), (z.sibling = null);
            OU(Q, !1, j, z, B);
            break;
          }
          case "backwards": {
            var O = null,
              E = Q.child;
            Q.child = null;
            while (E !== null) {
              var P = E.alternate;
              if (P !== null && Z9(P) === null) {
                Q.child = E;
                break;
              }
              var R = E.sibling;
              (E.sibling = O), (O = E), (E = R);
            }
            OU(Q, !0, O, null, B);
            break;
          }
          case "together": {
            OU(Q, !1, null, null, void 0);
            break;
          }
          default:
            Q.memoizedState = null;
        }
      return Q.child;
    }
    function j2(J, Q, Z) {
      EB(Q, Q.stateNode.containerInfo);
      var X = Q.pendingProps;
      if (J === null) Q.child = E5(Q, null, X, Z);
      else DZ(J, Q, X, Z);
      return Q.child;
    }
    var sW = !1;
    function D2(J, Q, Z) {
      var X = Q.type,
        G = X._context,
        B = Q.pendingProps,
        U = Q.memoizedProps,
        Y = B.value;
      {
        if (!("value" in B)) {
          if (!sW)
            (sW = !0),
              M(
                "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?",
              );
        }
        var H = Q.type.propTypes;
        if (H) j0(H, B, "prop", "Context.Provider");
      }
      if ((_K(Q, G, Y), U !== null)) {
        var W = U.value;
        if (fZ(W, Y)) {
          if (U.children === B.children && !N8()) return M1(J, Q, Z);
        } else MD(Q, G, Z);
      }
      var z = B.children;
      return DZ(J, Q, z, Z), Q.child;
    }
    var mW = !1;
    function $2(J, Q, Z) {
      var X = Q.type;
      if (X._context === void 0) {
        if (X !== X.Consumer) {
          if (!mW)
            (mW = !0),
              M(
                "Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?",
              );
        }
      } else X = X._context;
      var G = Q.pendingProps,
        B = G.children;
      if (typeof B !== "function")
        M(
          "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.",
        );
      A5(Q, Z);
      var U = jQ(X);
      W6(Q);
      var Y;
      return (
        (K7.current = Q),
        tZ(!0),
        (Y = B(U)),
        tZ(!1),
        J5(),
        (Q.flags |= t4),
        DZ(J, Q, Y, Z),
        Q.child
      );
    }
    function z7() {
      R0 = !0;
    }
    function x9(J, Q) {
      if ((Q.mode & DJ) === r) {
        if (J !== null)
          (J.alternate = null), (Q.alternate = null), (Q.flags |= qQ);
      }
    }
    function M1(J, Q, Z) {
      if (J !== null) Q.dependencies = J.dependencies;
      if ((LW(), L7(Q.lanes), !gZ(Z, Q.childLanes))) return null;
      return FD(J, Q), Q.child;
    }
    function P2(J, Q, Z) {
      {
        var X = Q.return;
        if (X === null) throw new Error("Cannot swap the root fiber.");
        if (
          ((J.alternate = null),
          (Q.alternate = null),
          (Z.index = Q.index),
          (Z.sibling = Q.sibling),
          (Z.return = Q.return),
          (Z.ref = Q.ref),
          Q === X.child)
        )
          X.child = Z;
        else {
          var G = X.child;
          if (G === null) throw new Error("Expected parent to have a child.");
          while (G.sibling !== Q)
            if (((G = G.sibling), G === null))
              throw new Error("Expected to find the previous sibling.");
          G.sibling = Z;
        }
        var B = X.deletions;
        if (B === null) (X.deletions = [J]), (X.flags |= B4);
        else B.push(J);
        return (Z.flags |= qQ), Z;
      }
    }
    function jU(J, Q) {
      var Z = J.lanes;
      if (gZ(Z, Q)) return !0;
      return !1;
    }
    function A2(J, Q, Z) {
      switch (Q.tag) {
        case s:
          kW(Q);
          var X = Q.stateNode;
          $5();
          break;
        case l:
          aK(Q);
          break;
        case a: {
          var G = Q.type;
          if (g0(G)) k8(Q);
          break;
        }
        case OJ:
          EB(Q, Q.stateNode.containerInfo);
          break;
        case IJ: {
          var B = Q.memoizedProps.value,
            U = Q.type._context;
          _K(Q, U, B);
          break;
        }
        case oJ:
          {
            var Y = gZ(Z, Q.childLanes);
            if (Y) Q.flags |= EJ;
            {
              var H = Q.stateNode;
              (H.effectDuration = 0), (H.passiveEffectDuration = 0);
            }
          }
          break;
        case PJ: {
          var W = Q.memoizedState;
          if (W !== null) {
            if (W.dehydrated !== null)
              return l1(Q, L5(A0.current)), (Q.flags |= _J), null;
            var z = Q.child,
              j = z.childLanes;
            if (gZ(Z, j)) return TW(J, Q, Z);
            else {
              l1(Q, L5(A0.current));
              var O = M1(J, Q, Z);
              if (O !== null) return O.sibling;
              else return null;
            }
          } else l1(Q, L5(A0.current));
          break;
        }
        case $Q: {
          var E = (J.flags & _J) !== o,
            P = gZ(Z, Q.childLanes);
          if (E) {
            if (P) return dW(J, Q, Z);
            Q.flags |= _J;
          }
          var R = Q.memoizedState;
          if (R !== null)
            (R.rendering = null), (R.tail = null), (R.lastEffect = null);
          if ((l1(Q, A0.current), P)) break;
          else return null;
        }
        case QJ:
        case iJ:
          return (Q.lanes = x), vW(J, Q, Z);
      }
      return M1(J, Q, Z);
    }
    function yW(J, Q, Z) {
      if (Q._debugNeedsRemount && J !== null)
        return P2(
          J,
          Q,
          aU(
            Q.type,
            Q.key,
            Q.pendingProps,
            Q._debugOwner || null,
            Q.mode,
            Q.lanes,
          ),
        );
      if (J !== null) {
        var X = J.memoizedProps,
          G = Q.pendingProps;
        if (X !== G || N8() || Q.type !== J.type) R0 = !0;
        else {
          var B = jU(J, Z);
          if (!B && (Q.flags & _J) === o) return (R0 = !1), A2(J, Q, Z);
          if ((J.flags & EX) !== o) R0 = !0;
          else R0 = !1;
        }
      } else if (((R0 = !1), lQ() && aj(Q))) {
        var U = Q.index,
          Y = pj();
        jK(Q, Y, U);
      }
      switch (((Q.lanes = x), Q.tag)) {
        case ZQ:
          return Q2(J, Q, Q.type, Z);
        case Y0: {
          var H = Q.elementType;
          return eD(J, Q, H, Z);
        }
        case HJ: {
          var { type: W, pendingProps: z } = Q,
            j = Q.elementType === W ? z : P0(W, z);
          return HU(J, Q, W, j, Z);
        }
        case a: {
          var { type: O, pendingProps: E } = Q,
            P = Q.elementType === O ? E : P0(O, E);
          return bW(J, Q, O, P, Z);
        }
        case s:
          return rD(J, Q, Z);
        case l:
          return nD(J, Q, Z);
        case FJ:
          return tD(J, Q);
        case PJ:
          return TW(J, Q, Z);
        case OJ:
          return j2(J, Q, Z);
        case JJ: {
          var { type: R, pendingProps: g } = Q,
            y = Q.elementType === R ? g : P0(R, g);
          return _W(J, Q, R, y, Z);
        }
        case yZ:
          return aD(J, Q, Z);
        case U0:
          return pD(J, Q, Z);
        case oJ:
          return oD(J, Q, Z);
        case IJ:
          return D2(J, Q, Z);
        case TQ:
          return $2(J, Q, Z);
        case WQ: {
          var { type: d, pendingProps: VJ } = Q,
            qJ = P0(d, VJ);
          if (Q.type !== Q.elementType) {
            var D = d.propTypes;
            if (D) j0(D, qJ, "prop", fJ(d));
          }
          return (qJ = P0(d.type, qJ)), SW(J, Q, d, qJ, Z);
        }
        case xJ:
          return CW(J, Q, Q.type, Q.pendingProps, Z);
        case XQ: {
          var { type: F, pendingProps: $ } = Q,
            _ = Q.elementType === F ? $ : P0(F, $);
          return J2(J, Q, F, _, Z);
        }
        case $Q:
          return dW(J, Q, Z);
        case uJ:
          break;
        case QJ:
          return vW(J, Q, Z);
      }
      throw new Error(
        "Unknown unit of work tag (" +
          Q.tag +
          "). This error is likely caused by a bug in React. Please file an issue.",
      );
    }
    function S5(J) {
      J.flags |= EJ;
    }
    function lW(J) {
      (J.flags |= C1), (J.flags |= RX);
    }
    var cW, DU, iW, aW;
    (cW = function (J, Q, Z, X) {
      var G = Q.child;
      while (G !== null) {
        if (G.tag === l || G.tag === FJ) lO(J, G.stateNode);
        else if (G.tag === OJ);
        else if (G.child !== null) {
          (G.child.return = G), (G = G.child);
          continue;
        }
        if (G === Q) return;
        while (G.sibling === null) {
          if (G.return === null || G.return === Q) return;
          G = G.return;
        }
        (G.sibling.return = G.return), (G = G.sibling);
      }
    }),
      (DU = function (J, Q) {}),
      (iW = function (J, Q, Z, X, G) {
        var B = J.memoizedProps;
        if (B === X) return;
        var U = Q.stateNode,
          Y = RB(),
          H = iO(U, Z, B, X, G, Y);
        if (((Q.updateQueue = H), H)) S5(Q);
      }),
      (aW = function (J, Q, Z, X) {
        if (Z !== X) S5(Q);
      });
    function M7(J, Q) {
      if (lQ()) return;
      switch (J.tailMode) {
        case "hidden": {
          var Z = J.tail,
            X = null;
          while (Z !== null) {
            if (Z.alternate !== null) X = Z;
            Z = Z.sibling;
          }
          if (X === null) J.tail = null;
          else X.sibling = null;
          break;
        }
        case "collapsed": {
          var G = J.tail,
            B = null;
          while (G !== null) {
            if (G.alternate !== null) B = G;
            G = G.sibling;
          }
          if (B === null)
            if (!Q && J.tail !== null) J.tail.sibling = null;
            else J.tail = null;
          else B.sibling = null;
          break;
        }
      }
    }
    function iQ(J) {
      var Q = J.alternate !== null && J.alternate.child === J.child,
        Z = x,
        X = o;
      if (!Q) {
        if ((J.mode & kJ) !== r) {
          var { actualDuration: G, selfBaseDuration: B, child: U } = J;
          while (U !== null)
            (Z = zJ(Z, zJ(U.lanes, U.childLanes))),
              (X |= U.subtreeFlags),
              (X |= U.flags),
              (G += U.actualDuration),
              (B += U.treeBaseDuration),
              (U = U.sibling);
          (J.actualDuration = G), (J.treeBaseDuration = B);
        } else {
          var Y = J.child;
          while (Y !== null)
            (Z = zJ(Z, zJ(Y.lanes, Y.childLanes))),
              (X |= Y.subtreeFlags),
              (X |= Y.flags),
              (Y.return = J),
              (Y = Y.sibling);
        }
        J.subtreeFlags |= X;
      } else {
        if ((J.mode & kJ) !== r) {
          var { selfBaseDuration: H, child: W } = J;
          while (W !== null)
            (Z = zJ(Z, zJ(W.lanes, W.childLanes))),
              (X |= W.subtreeFlags & Z1),
              (X |= W.flags & Z1),
              (H += W.treeBaseDuration),
              (W = W.sibling);
          J.treeBaseDuration = H;
        } else {
          var z = J.child;
          while (z !== null)
            (Z = zJ(Z, zJ(z.lanes, z.childLanes))),
              (X |= z.subtreeFlags & Z1),
              (X |= z.flags & Z1),
              (z.return = J),
              (z = z.sibling);
        }
        J.subtreeFlags |= X;
      }
      return (J.childLanes = Z), Q;
    }
    function E2(J, Q, Z) {
      if (YD() && (Q.mode & DJ) !== r && (Q.flags & _J) === o)
        return LK(Q), $5(), (Q.flags |= e0 | H6 | jZ), !1;
      var X = u8(Q);
      if (Z !== null && Z.dehydrated !== null)
        if (J === null) {
          if (!X)
            throw new Error(
              "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.",
            );
          if ((BD(Q), iQ(Q), (Q.mode & kJ) !== r)) {
            var G = Z !== null;
            if (G) {
              var B = Q.child;
              if (B !== null) Q.treeBaseDuration -= B.treeBaseDuration;
            }
          }
          return !1;
        } else {
          if (($5(), (Q.flags & _J) === o)) Q.memoizedState = null;
          if (((Q.flags |= EJ), iQ(Q), (Q.mode & kJ) !== r)) {
            var U = Z !== null;
            if (U) {
              var Y = Q.child;
              if (Y !== null) Q.treeBaseDuration -= Y.treeBaseDuration;
            }
          }
          return !1;
        }
      else return FK(), !0;
    }
    function pW(J, Q, Z) {
      var X = Q.pendingProps;
      switch ((mG(Q), Q.tag)) {
        case ZQ:
        case Y0:
        case xJ:
        case HJ:
        case JJ:
        case yZ:
        case U0:
        case oJ:
        case TQ:
        case WQ:
          return iQ(Q), null;
        case a: {
          var G = Q.type;
          if (g0(G)) b8(Q);
          return iQ(Q), null;
        }
        case s: {
          var B = Q.stateNode;
          if ((R5(Q), fG(Q), wB(), B.pendingContext))
            (B.context = B.pendingContext), (B.pendingContext = null);
          if (J === null || J.child === null) {
            var U = u8(Q);
            if (U) S5(Q);
            else if (J !== null) {
              var Y = J.memoizedState;
              if (!Y.isDehydrated || (Q.flags & e0) !== o)
                (Q.flags |= U4), FK();
            }
          }
          return DU(J, Q), iQ(Q), null;
        }
        case l: {
          LB(Q);
          var H = iK(),
            W = Q.type;
          if (J !== null && Q.stateNode != null) {
            if ((iW(J, Q, W, X, H), J.ref !== Q.ref)) lW(Q);
          } else {
            if (!X) {
              if (Q.stateNode === null)
                throw new Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.caused by a bug in React. Please file an issue.",
                );
              return iQ(Q), null;
            }
            var z = RB(),
              j = u8(Q);
            if (j) {
              if (XD(Q, H, z)) S5(Q);
            } else {
              var O = yO(W, X, H, z, Q);
              if ((cW(O, Q, !1, !1), (Q.stateNode = O), cO(O, W, X, H))) S5(Q);
            }
            if (Q.ref !== null) lW(Q);
          }
          return iQ(Q), null;
        }
        case FJ: {
          var E = X;
          if (J && Q.stateNode != null) {
            var P = J.memoizedProps;
            aW(J, Q, P, E);
          } else {
            if (typeof E !== "string") {
              if (Q.stateNode === null)
                throw new Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.",
                );
            }
            var R = iK(),
              g = RB(),
              y = u8(Q);
            if (y) {
              if (GD(Q)) S5(Q);
            } else Q.stateNode = aO(E, R, g, Q);
          }
          return iQ(Q), null;
        }
        case PJ: {
          F5(Q);
          var d = Q.memoizedState;
          if (
            J === null ||
            (J.memoizedState !== null && J.memoizedState.dehydrated !== null)
          ) {
            var VJ = E2(J, Q, d);
            if (!VJ)
              if (Q.flags & jZ) return Q;
              else return null;
          }
          if ((Q.flags & _J) !== o) {
            if (((Q.lanes = Z), (Q.mode & kJ) !== r)) eB(Q);
            return Q;
          }
          var qJ = d !== null,
            D = J !== null && J.memoizedState !== null;
          if (qJ !== D) {
            if (qJ) {
              var F = Q.child;
              if (((F.flags |= Y4), (Q.mode & DJ) !== r)) {
                var $ =
                  J === null &&
                  (Q.memoizedProps.unstable_avoidThisFallback !== !0 || !lZ);
                if ($ || FB(A0.current, oK)) w$();
                else TU();
              }
            }
          }
          var _ = Q.updateQueue;
          if (_ !== null) Q.flags |= EJ;
          if ((iQ(Q), (Q.mode & kJ) !== r)) {
            if (qJ) {
              var h = Q.child;
              if (h !== null) Q.treeBaseDuration -= h.treeBaseDuration;
            }
          }
          return null;
        }
        case OJ:
          if ((R5(Q), DU(J, Q), J === null)) dj(Q.stateNode.containerInfo);
          return iQ(Q), null;
        case IJ:
          var b = Q.type._context;
          return nG(b, Q), iQ(Q), null;
        case XQ: {
          var t = Q.type;
          if (g0(t)) b8(Q);
          return iQ(Q), null;
        }
        case $Q: {
          F5(Q);
          var GJ = Q.memoizedState;
          if (GJ === null) return iQ(Q), null;
          var TJ = (Q.flags & _J) !== o,
            RJ = GJ.rendering;
          if (RJ === null)
            if (!TJ) {
              var KQ = S$() && (J === null || (J.flags & _J) === o);
              if (!KQ) {
                var LJ = Q.child;
                while (LJ !== null) {
                  var UQ = Z9(LJ);
                  if (UQ !== null) {
                    (TJ = !0), (Q.flags |= _J), M7(GJ, !1);
                    var HZ = UQ.updateQueue;
                    if (HZ !== null) (Q.updateQueue = HZ), (Q.flags |= EJ);
                    return (
                      (Q.subtreeFlags = o),
                      ID(Q, Z),
                      l1(Q, IB(A0.current, Q7)),
                      Q.child
                    );
                  }
                  LJ = LJ.sibling;
                }
              }
              if (GJ.tail !== null && NQ() > jz())
                (Q.flags |= _J), (TJ = !0), M7(GJ, !1), (Q.lanes = cY);
            } else M7(GJ, !1);
          else {
            if (!TJ) {
              var nQ = Z9(RJ);
              if (nQ !== null) {
                (Q.flags |= _J), (TJ = !0);
                var sZ = nQ.updateQueue;
                if (sZ !== null) (Q.updateQueue = sZ), (Q.flags |= EJ);
                if (
                  (M7(GJ, !0),
                  GJ.tail === null &&
                    GJ.tailMode === "hidden" &&
                    !RJ.alternate &&
                    !lQ())
                )
                  return iQ(Q), null;
              } else if (NQ() * 2 - GJ.renderingStartTime > jz() && Z !== kZ)
                (Q.flags |= _J), (TJ = !0), M7(GJ, !1), (Q.lanes = cY);
            }
            if (GJ.isBackwards) (RJ.sibling = Q.child), (Q.child = RJ);
            else {
              var AZ = GJ.last;
              if (AZ !== null) AZ.sibling = RJ;
              else Q.child = RJ;
              GJ.last = RJ;
            }
          }
          if (GJ.tail !== null) {
            var EZ = GJ.tail;
            (GJ.rendering = EZ),
              (GJ.tail = EZ.sibling),
              (GJ.renderingStartTime = NQ()),
              (EZ.sibling = null);
            var KZ = A0.current;
            if (TJ) KZ = IB(KZ, Q7);
            else KZ = L5(KZ);
            return l1(Q, KZ), EZ;
          }
          return iQ(Q), null;
        }
        case uJ:
          break;
        case QJ:
        case iJ: {
          gU(Q);
          var D1 = Q.memoizedState,
            h5 = D1 !== null;
          if (J !== null) {
            var _7 = J.memoizedState,
              y0 = _7 !== null;
            if (y0 !== h5 && !eQ) Q.flags |= Y4;
          }
          if (!h5 || (Q.mode & DJ) === r) iQ(Q);
          else if (gZ(m0, kZ)) {
            if ((iQ(Q), Q.subtreeFlags & (qQ | EJ))) Q.flags |= Y4;
          }
          return null;
        }
        case e:
          return null;
        case WZ:
          return null;
      }
      throw new Error(
        "Unknown unit of work tag (" +
          Q.tag +
          "). This error is likely caused by a bug in React. Please file an issue.",
      );
    }
    function R2(J, Q, Z) {
      switch ((mG(Q), Q.tag)) {
        case a: {
          var X = Q.type;
          if (g0(X)) b8(Q);
          var G = Q.flags;
          if (G & jZ) {
            if (((Q.flags = (G & ~jZ) | _J), (Q.mode & kJ) !== r)) eB(Q);
            return Q;
          }
          return null;
        }
        case s: {
          var B = Q.stateNode;
          R5(Q), fG(Q), wB();
          var U = Q.flags;
          if ((U & jZ) !== o && (U & _J) === o)
            return (Q.flags = (U & ~jZ) | _J), Q;
          return null;
        }
        case l:
          return LB(Q), null;
        case PJ: {
          F5(Q);
          var Y = Q.memoizedState;
          if (Y !== null && Y.dehydrated !== null) {
            if (Q.alternate === null)
              throw new Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.",
              );
            $5();
          }
          var H = Q.flags;
          if (H & jZ) {
            if (((Q.flags = (H & ~jZ) | _J), (Q.mode & kJ) !== r)) eB(Q);
            return Q;
          }
          return null;
        }
        case $Q:
          return F5(Q), null;
        case OJ:
          return R5(Q), null;
        case IJ:
          var W = Q.type._context;
          return nG(W, Q), null;
        case QJ:
        case iJ:
          return gU(Q), null;
        case e:
          return null;
        default:
          return null;
      }
    }
    function oW(J, Q, Z) {
      switch ((mG(Q), Q.tag)) {
        case a: {
          var X = Q.type.childContextTypes;
          if (X !== null && X !== void 0) b8(Q);
          break;
        }
        case s: {
          var G = Q.stateNode;
          R5(Q), fG(Q), wB();
          break;
        }
        case l: {
          LB(Q);
          break;
        }
        case OJ:
          R5(Q);
          break;
        case PJ:
          F5(Q);
          break;
        case $Q:
          F5(Q);
          break;
        case IJ:
          var B = Q.type._context;
          nG(B, Q);
          break;
        case QJ:
        case iJ:
          gU(Q);
          break;
      }
    }
    var rW = null;
    rW = new Set();
    var w9 = !1,
      aQ = !1,
      L2 = typeof WeakSet === "function" ? WeakSet : Set,
      f = null,
      C5 = null,
      v5 = null;
    function F2(J) {
      $X(null, function () {
        throw J;
      }),
        PX();
    }
    var I2 = function (J, Q) {
      if (
        ((Q.props = J.memoizedProps), (Q.state = J.memoizedState), J.mode & kJ)
      )
        try {
          d0(), Q.componentWillUnmount();
        } finally {
          u0(J);
        }
      else Q.componentWillUnmount();
    };
    function nW(J, Q) {
      try {
        a1(RQ, J);
      } catch (Z) {
        cJ(J, Q, Z);
      }
    }
    function $U(J, Q, Z) {
      try {
        I2(J, Z);
      } catch (X) {
        cJ(J, Q, X);
      }
    }
    function x2(J, Q, Z) {
      try {
        Z.componentDidMount();
      } catch (X) {
        cJ(J, Q, X);
      }
    }
    function tW(J, Q) {
      try {
        Qz(J);
      } catch (Z) {
        cJ(J, Q, Z);
      }
    }
    function N5(J, Q) {
      var Z = J.ref;
      if (Z !== null)
        if (typeof Z === "function") {
          var X;
          try {
            if (cZ && K0 && J.mode & kJ)
              try {
                d0(), (X = Z(null));
              } finally {
                u0(J);
              }
            else X = Z(null);
          } catch (G) {
            cJ(J, Q, G);
          }
          if (typeof X === "function")
            M(
              "Unexpected return value from a callback ref in %s. A callback ref should not return a function.",
              YJ(J),
            );
        } else Z.current = null;
    }
    function _9(J, Q, Z) {
      try {
        Z();
      } catch (X) {
        cJ(J, Q, X);
      }
    }
    var eW = null,
      Jz = !1;
    function w2(J, Q) {
      (eW = sO(J.containerInfo)), (f = Q), _2();
      var Z = Jz;
      return (Jz = !1), (eW = null), Z;
    }
    function _2() {
      while (f !== null) {
        var J = f,
          Q = J.child;
        if ((J.subtreeFlags & FX) !== o && Q !== null) (Q.return = J), (f = Q);
        else S2();
      }
    }
    function S2() {
      while (f !== null) {
        var J = f;
        eJ(J);
        try {
          C2(J);
        } catch (Z) {
          cJ(J, J.return, Z);
        }
        vQ();
        var Q = J.sibling;
        if (Q !== null) {
          (Q.return = J.return), (f = Q);
          return;
        }
        f = J.return;
      }
    }
    function C2(J) {
      var { alternate: Q, flags: Z } = J;
      if ((Z & U4) !== o) {
        switch ((eJ(J), J.tag)) {
          case HJ:
          case JJ:
          case xJ:
            break;
          case a: {
            if (Q !== null) {
              var { memoizedProps: X, memoizedState: G } = Q,
                B = J.stateNode;
              if (J.type === J.elementType && !_4) {
                if (B.props !== J.memoizedProps)
                  M(
                    "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                    YJ(J) || "instance",
                  );
                if (B.state !== J.memoizedState)
                  M(
                    "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                    YJ(J) || "instance",
                  );
              }
              var U = B.getSnapshotBeforeUpdate(
                J.elementType === J.type ? X : P0(J.type, X),
                G,
              );
              {
                var Y = rW;
                if (U === void 0 && !Y.has(J.type))
                  Y.add(J.type),
                    M(
                      "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.must be returned. You have returned undefined.",
                      YJ(J),
                    );
              }
              B.__reactInternalSnapshotBeforeUpdate = U;
            }
            break;
          }
          case s: {
            {
              var H = J.stateNode;
              Mj(H.containerInfo);
            }
            break;
          }
          case l:
          case FJ:
          case OJ:
          case XQ:
            break;
          default:
            throw new Error(
              "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
            );
        }
        vQ();
      }
    }
    function L0(J, Q, Z) {
      var X = Q.updateQueue,
        G = X !== null ? X.lastEffect : null;
      if (G !== null) {
        var B = G.next,
          U = B;
        do {
          if ((U.tag & J) === J) {
            var Y = U.destroy;
            if (((U.destroy = void 0), Y !== void 0)) {
              if ((J & cQ) !== _Z) aM(Q);
              else if ((J & RQ) !== _Z) dY(Q);
              if ((J & T0) !== _Z) I7(!0);
              if ((_9(Q, Z, Y), (J & T0) !== _Z)) I7(!1);
              if ((J & cQ) !== _Z) pM();
              else if ((J & RQ) !== _Z) sY();
            }
          }
          U = U.next;
        } while (U !== B);
      }
    }
    function a1(J, Q) {
      var Z = Q.updateQueue,
        X = Z !== null ? Z.lastEffect : null;
      if (X !== null) {
        var G = X.next,
          B = G;
        do {
          if ((B.tag & J) === J) {
            if ((J & cQ) !== _Z) cM(Q);
            else if ((J & RQ) !== _Z) oM(Q);
            var U = B.create;
            if ((J & T0) !== _Z) I7(!0);
            if (((B.destroy = U()), (J & T0) !== _Z)) I7(!1);
            if ((J & cQ) !== _Z) iM();
            else if ((J & RQ) !== _Z) rM();
            {
              var Y = B.destroy;
              if (Y !== void 0 && typeof Y !== "function") {
                var H = void 0;
                if ((B.tag & RQ) !== o) H = "useLayoutEffect";
                else if ((B.tag & T0) !== o) H = "useInsertionEffect";
                else H = "useEffect";
                var W = void 0;
                if (Y === null)
                  W =
                    " You returned null. If your effect does not require clean up, return undefined (or nothing).";
                else if (typeof Y.then === "function")
                  W =
                    "\n\nIt looks like you wrote " +
                    H +
                    "(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\n" +
                    H +
                    "(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching";
                else W = " You returned: " + Y;
                M(
                  "%s must not return anything besides a function, which is used for clean-up.%s",
                  H,
                  W,
                );
              }
            }
          }
          B = B.next;
        } while (B !== G);
      }
    }
    function v2(J, Q) {
      if ((Q.flags & EJ) !== o)
        switch (Q.tag) {
          case oJ: {
            var Z = Q.stateNode.passiveEffectDuration,
              X = Q.memoizedProps,
              G = X.id,
              B = X.onPostCommit,
              U = EW(),
              Y = Q.alternate === null ? "mount" : "update";
            if (AW()) Y = "nested-update";
            if (typeof B === "function") B(G, Y, Z, U);
            var H = Q.return;
            J: while (H !== null) {
              switch (H.tag) {
                case s:
                  var W = H.stateNode;
                  W.passiveEffectDuration += Z;
                  break J;
                case oJ:
                  var z = H.stateNode;
                  z.passiveEffectDuration += Z;
                  break J;
              }
              H = H.return;
            }
            break;
          }
        }
    }
    function N2(J, Q, Z, X) {
      if ((Z.flags & K6) !== o)
        switch (Z.tag) {
          case HJ:
          case JJ:
          case xJ: {
            if (!aQ)
              if (Z.mode & kJ)
                try {
                  d0(), a1(RQ | EQ, Z);
                } finally {
                  u0(Z);
                }
              else a1(RQ | EQ, Z);
            break;
          }
          case a: {
            var G = Z.stateNode;
            if (Z.flags & EJ) {
              if (!aQ)
                if (Q === null) {
                  if (Z.type === Z.elementType && !_4) {
                    if (G.props !== Z.memoizedProps)
                      M(
                        "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                        YJ(Z) || "instance",
                      );
                    if (G.state !== Z.memoizedState)
                      M(
                        "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                        YJ(Z) || "instance",
                      );
                  }
                  if (Z.mode & kJ)
                    try {
                      d0(), G.componentDidMount();
                    } finally {
                      u0(Z);
                    }
                  else G.componentDidMount();
                } else {
                  var B =
                      Z.elementType === Z.type
                        ? Q.memoizedProps
                        : P0(Z.type, Q.memoizedProps),
                    U = Q.memoizedState;
                  if (Z.type === Z.elementType && !_4) {
                    if (G.props !== Z.memoizedProps)
                      M(
                        "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                        YJ(Z) || "instance",
                      );
                    if (G.state !== Z.memoizedState)
                      M(
                        "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                        YJ(Z) || "instance",
                      );
                  }
                  if (Z.mode & kJ)
                    try {
                      d0(),
                        G.componentDidUpdate(
                          B,
                          U,
                          G.__reactInternalSnapshotBeforeUpdate,
                        );
                    } finally {
                      u0(Z);
                    }
                  else
                    G.componentDidUpdate(
                      B,
                      U,
                      G.__reactInternalSnapshotBeforeUpdate,
                    );
                }
            }
            var Y = Z.updateQueue;
            if (Y !== null) {
              if (Z.type === Z.elementType && !_4) {
                if (G.props !== Z.memoizedProps)
                  M(
                    "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                    YJ(Z) || "instance",
                  );
                if (G.state !== Z.memoizedState)
                  M(
                    "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                    YJ(Z) || "instance",
                  );
              }
              kK(Z, Y, G);
            }
            break;
          }
          case s: {
            var H = Z.updateQueue;
            if (H !== null) {
              var W = null;
              if (Z.child !== null)
                switch (Z.child.tag) {
                  case l:
                    W = wG(Z.child.stateNode);
                    break;
                  case a:
                    W = Z.child.stateNode;
                    break;
                }
              kK(Z, H, W);
            }
            break;
          }
          case l: {
            var z = Z.stateNode;
            if (Q === null && Z.flags & EJ) {
              var { type: j, memoizedProps: O } = Z;
              tO(z, j, O);
            }
            break;
          }
          case FJ:
            break;
          case OJ:
            break;
          case oJ: {
            {
              var E = Z.memoizedProps,
                P = E.onCommit,
                R = E.onRender,
                g = Z.stateNode.effectDuration,
                y = EW(),
                d = Q === null ? "mount" : "update";
              if (AW()) d = "nested-update";
              if (typeof R === "function")
                R(
                  Z.memoizedProps.id,
                  d,
                  Z.actualDuration,
                  Z.treeBaseDuration,
                  Z.actualStartTime,
                  y,
                );
              {
                if (typeof P === "function") P(Z.memoizedProps.id, d, g, y);
                k$(Z);
                var VJ = Z.return;
                J: while (VJ !== null) {
                  switch (VJ.tag) {
                    case s:
                      var qJ = VJ.stateNode;
                      qJ.effectDuration += g;
                      break J;
                    case oJ:
                      var D = VJ.stateNode;
                      D.effectDuration += g;
                      break J;
                  }
                  VJ = VJ.return;
                }
              }
            }
            break;
          }
          case PJ: {
            d2(J, Z);
            break;
          }
          case $Q:
          case XQ:
          case uJ:
          case QJ:
          case iJ:
          case WZ:
            break;
          default:
            throw new Error(
              "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
            );
        }
      if (!aQ) {
        if (Z.flags & C1) Qz(Z);
      }
    }
    function b2(J) {
      switch (J.tag) {
        case HJ:
        case JJ:
        case xJ: {
          if (J.mode & kJ)
            try {
              d0(), nW(J, J.return);
            } finally {
              u0(J);
            }
          else nW(J, J.return);
          break;
        }
        case a: {
          var Q = J.stateNode;
          if (typeof Q.componentDidMount === "function") x2(J, J.return, Q);
          tW(J, J.return);
          break;
        }
        case l: {
          tW(J, J.return);
          break;
        }
      }
    }
    function k2(J, Q) {
      var Z = null;
      {
        var X = J;
        while (!0) {
          if (X.tag === l) {
            if (Z === null) {
              Z = X;
              try {
                var G = X.stateNode;
                if (Q) Hj(G);
                else Wj(X.stateNode, X.memoizedProps);
              } catch (U) {
                cJ(J, J.return, U);
              }
            }
          } else if (X.tag === FJ) {
            if (Z === null)
              try {
                var B = X.stateNode;
                if (Q) Kj(B);
                else zj(B, X.memoizedProps);
              } catch (U) {
                cJ(J, J.return, U);
              }
          } else if (
            (X.tag === QJ || X.tag === iJ) &&
            X.memoizedState !== null &&
            X !== J
          );
          else if (X.child !== null) {
            (X.child.return = X), (X = X.child);
            continue;
          }
          if (X === J) return;
          while (X.sibling === null) {
            if (X.return === null || X.return === J) return;
            if (Z === X) Z = null;
            X = X.return;
          }
          if (Z === X) Z = null;
          (X.sibling.return = X.return), (X = X.sibling);
        }
      }
    }
    function Qz(J) {
      var Q = J.ref;
      if (Q !== null) {
        var Z = J.stateNode,
          X;
        switch (J.tag) {
          case l:
            X = wG(Z);
            break;
          default:
            X = Z;
        }
        if (typeof Q === "function") {
          var G;
          if (J.mode & kJ)
            try {
              d0(), (G = Q(X));
            } finally {
              u0(J);
            }
          else G = Q(X);
          if (typeof G === "function")
            M(
              "Unexpected return value from a callback ref in %s. A callback ref should not return a function.A callback ref should not return a function.",
              YJ(J),
            );
        } else {
          if (!Q.hasOwnProperty("current"))
            M(
              "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
              YJ(J),
            );
          Q.current = X;
        }
      }
    }
    function g2(J) {
      var Q = J.alternate;
      if (Q !== null) Q.return = null;
      J.return = null;
    }
    function Zz(J) {
      var Q = J.alternate;
      if (Q !== null) (J.alternate = null), Zz(Q);
      {
        if (
          ((J.child = null),
          (J.deletions = null),
          (J.sibling = null),
          J.tag === l)
        ) {
          var Z = J.stateNode;
          if (Z !== null) yj(Z);
        }
        (J.stateNode = null),
          (J._debugOwner = null),
          (J.return = null),
          (J.dependencies = null),
          (J.memoizedProps = null),
          (J.memoizedState = null),
          (J.pendingProps = null),
          (J.stateNode = null),
          (J.updateQueue = null);
      }
    }
    function T2(J) {
      var Q = J.return;
      while (Q !== null) {
        if (Xz(Q)) return Q;
        Q = Q.return;
      }
      throw new Error(
        "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.",
      );
    }
    function Xz(J) {
      return J.tag === l || J.tag === s || J.tag === OJ;
    }
    function Gz(J) {
      var Q = J;
      J: while (!0) {
        while (Q.sibling === null) {
          if (Q.return === null || Xz(Q.return)) return null;
          Q = Q.return;
        }
        (Q.sibling.return = Q.return), (Q = Q.sibling);
        while (Q.tag !== l && Q.tag !== FJ && Q.tag !== SQ) {
          if (Q.flags & qQ) continue J;
          if (Q.child === null || Q.tag === OJ) continue J;
          else (Q.child.return = Q), (Q = Q.child);
        }
        if (!(Q.flags & qQ)) return Q.stateNode;
      }
    }
    function h2(J) {
      var Q = T2(J);
      switch (Q.tag) {
        case l: {
          var Z = Q.stateNode;
          if (Q.flags & Y6) XK(Z), (Q.flags &= ~Y6);
          var X = Gz(J);
          AU(J, X, Z);
          break;
        }
        case s:
        case OJ: {
          var G = Q.stateNode.containerInfo,
            B = Gz(J);
          PU(J, B, G);
          break;
        }
        default:
          throw new Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.",
          );
      }
    }
    function PU(J, Q, Z) {
      var X = J.tag,
        G = X === l || X === FJ;
      if (G) {
        var B = J.stateNode;
        if (Q) Gj(Z, B, Q);
        else Zj(Z, B);
      } else if (X === OJ);
      else {
        var U = J.child;
        if (U !== null) {
          PU(U, Q, Z);
          var Y = U.sibling;
          while (Y !== null) PU(Y, Q, Z), (Y = Y.sibling);
        }
      }
    }
    function AU(J, Q, Z) {
      var X = J.tag,
        G = X === l || X === FJ;
      if (G) {
        var B = J.stateNode;
        if (Q) Xj(Z, B, Q);
        else Qj(Z, B);
      } else if (X === OJ);
      else {
        var U = J.child;
        if (U !== null) {
          AU(U, Q, Z);
          var Y = U.sibling;
          while (Y !== null) AU(Y, Q, Z), (Y = Y.sibling);
        }
      }
    }
    var pQ = null,
      F0 = !1;
    function f2(J, Q, Z) {
      {
        var X = Q;
        J: while (X !== null) {
          switch (X.tag) {
            case l: {
              (pQ = X.stateNode), (F0 = !1);
              break J;
            }
            case s: {
              (pQ = X.stateNode.containerInfo), (F0 = !0);
              break J;
            }
            case OJ: {
              (pQ = X.stateNode.containerInfo), (F0 = !0);
              break J;
            }
          }
          X = X.return;
        }
        if (pQ === null)
          throw new Error(
            "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.",
          );
        Bz(J, Q, Z), (pQ = null), (F0 = !1);
      }
      g2(Z);
    }
    function p1(J, Q, Z) {
      var X = Z.child;
      while (X !== null) Bz(J, Q, X), (X = X.sibling);
    }
    function Bz(J, Q, Z) {
      switch ((sM(Z), Z.tag)) {
        case l:
          if (!aQ) N5(Z, Q);
        case FJ: {
          {
            var X = pQ,
              G = F0;
            if (((pQ = null), p1(J, Q, Z), (pQ = X), (F0 = G), pQ !== null))
              if (F0) Uj(pQ, Z.stateNode);
              else Bj(pQ, Z.stateNode);
          }
          return;
        }
        case SQ: {
          if (pQ !== null)
            if (F0) Yj(pQ, Z.stateNode);
            else vG(pQ, Z.stateNode);
          return;
        }
        case OJ: {
          {
            var B = pQ,
              U = F0;
            (pQ = Z.stateNode.containerInfo),
              (F0 = !0),
              p1(J, Q, Z),
              (pQ = B),
              (F0 = U);
          }
          return;
        }
        case HJ:
        case JJ:
        case WQ:
        case xJ: {
          if (!aQ) {
            var Y = Z.updateQueue;
            if (Y !== null) {
              var H = Y.lastEffect;
              if (H !== null) {
                var W = H.next,
                  z = W;
                do {
                  var j = z,
                    O = j.destroy,
                    E = j.tag;
                  if (O !== void 0) {
                    if ((E & T0) !== _Z) _9(Z, Q, O);
                    else if ((E & RQ) !== _Z) {
                      if ((dY(Z), Z.mode & kJ)) d0(), _9(Z, Q, O), u0(Z);
                      else _9(Z, Q, O);
                      sY();
                    }
                  }
                  z = z.next;
                } while (z !== W);
              }
            }
          }
          p1(J, Q, Z);
          return;
        }
        case a: {
          if (!aQ) {
            N5(Z, Q);
            var P = Z.stateNode;
            if (typeof P.componentWillUnmount === "function") $U(Z, Q, P);
          }
          p1(J, Q, Z);
          return;
        }
        case uJ: {
          p1(J, Q, Z);
          return;
        }
        case QJ: {
          if (Z.mode & DJ) {
            var R = aQ;
            (aQ = R || Z.memoizedState !== null), p1(J, Q, Z), (aQ = R);
          } else p1(J, Q, Z);
          break;
        }
        default: {
          p1(J, Q, Z);
          return;
        }
      }
    }
    function u2(J) {
      var Q = J.memoizedState;
    }
    function d2(J, Q) {
      var Z = Q.memoizedState;
      if (Z === null) {
        var X = Q.alternate;
        if (X !== null) {
          var G = X.memoizedState;
          if (G !== null) {
            var B = G.dehydrated;
            if (B !== null) xj(B);
          }
        }
      }
    }
    function Uz(J) {
      var Q = J.updateQueue;
      if (Q !== null) {
        J.updateQueue = null;
        var Z = J.stateNode;
        if (Z === null) Z = J.stateNode = new L2();
        Q.forEach(function (X) {
          var G = s$.bind(null, J, X);
          if (!Z.has(X)) {
            if ((Z.add(X), q0))
              if (C5 !== null && v5 !== null) F7(v5, C5);
              else
                throw Error(
                  "Expected finished root and lanes to be set. This is a bug in React.",
                );
            X.then(G, G);
          }
        });
      }
    }
    function s2(J, Q, Z) {
      (C5 = Z), (v5 = J), eJ(Q), Yz(Q, J), eJ(Q), (C5 = null), (v5 = null);
    }
    function I0(J, Q, Z) {
      var X = Q.deletions;
      if (X !== null)
        for (var G = 0; G < X.length; G++) {
          var B = X[G];
          try {
            f2(J, Q, B);
          } catch (H) {
            cJ(B, Q, H);
          }
        }
      var U = JX();
      if (Q.subtreeFlags & IX) {
        var Y = Q.child;
        while (Y !== null) eJ(Y), Yz(Y, J), (Y = Y.sibling);
      }
      eJ(U);
    }
    function Yz(J, Q, Z) {
      var { alternate: X, flags: G } = J;
      switch (J.tag) {
        case HJ:
        case JJ:
        case WQ:
        case xJ: {
          if ((I0(Q, J), s0(J), G & EJ)) {
            try {
              L0(T0 | EQ, J, J.return), a1(T0 | EQ, J);
            } catch (t) {
              cJ(J, J.return, t);
            }
            if (J.mode & kJ) {
              try {
                d0(), L0(RQ | EQ, J, J.return);
              } catch (t) {
                cJ(J, J.return, t);
              }
              u0(J);
            } else
              try {
                L0(RQ | EQ, J, J.return);
              } catch (t) {
                cJ(J, J.return, t);
              }
          }
          return;
        }
        case a: {
          if ((I0(Q, J), s0(J), G & C1)) {
            if (X !== null) N5(X, X.return);
          }
          return;
        }
        case l: {
          if ((I0(Q, J), s0(J), G & C1)) {
            if (X !== null) N5(X, X.return);
          }
          {
            if (J.flags & Y6) {
              var B = J.stateNode;
              try {
                XK(B);
              } catch (t) {
                cJ(J, J.return, t);
              }
            }
            if (G & EJ) {
              var U = J.stateNode;
              if (U != null) {
                var Y = J.memoizedProps,
                  H = X !== null ? X.memoizedProps : Y,
                  W = J.type,
                  z = J.updateQueue;
                if (((J.updateQueue = null), z !== null))
                  try {
                    eO(U, z, W, H, Y, J);
                  } catch (t) {
                    cJ(J, J.return, t);
                  }
              }
            }
          }
          return;
        }
        case FJ: {
          if ((I0(Q, J), s0(J), G & EJ)) {
            if (J.stateNode === null)
              throw new Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.caused by a bug in React. Please file an issue.",
              );
            var { stateNode: j, memoizedProps: O } = J,
              E = X !== null ? X.memoizedProps : O;
            try {
              Jj(j, E, O);
            } catch (t) {
              cJ(J, J.return, t);
            }
          }
          return;
        }
        case s: {
          if ((I0(Q, J), s0(J), G & EJ)) {
            if (X !== null) {
              var P = X.memoizedState;
              if (P.isDehydrated)
                try {
                  Ij(Q.containerInfo);
                } catch (t) {
                  cJ(J, J.return, t);
                }
            }
          }
          return;
        }
        case OJ: {
          I0(Q, J), s0(J);
          return;
        }
        case PJ: {
          I0(Q, J), s0(J);
          var R = J.child;
          if (R.flags & Y4) {
            var { stateNode: g, memoizedState: y } = R,
              d = y !== null;
            if (((g.isHidden = d), d)) {
              var VJ =
                R.alternate !== null && R.alternate.memoizedState !== null;
              if (!VJ) x$();
            }
          }
          if (G & EJ) {
            try {
              u2(J);
            } catch (t) {
              cJ(J, J.return, t);
            }
            Uz(J);
          }
          return;
        }
        case QJ: {
          var qJ = X !== null && X.memoizedState !== null;
          if (J.mode & DJ) {
            var D = aQ;
            (aQ = D || qJ), I0(Q, J), (aQ = D);
          } else I0(Q, J);
          if ((s0(J), G & Y4)) {
            var { stateNode: F, memoizedState: $ } = J,
              _ = $ !== null,
              h = J;
            if (((F.isHidden = _), _)) {
              if (!qJ) {
                if ((h.mode & DJ) !== r) {
                  f = h;
                  var b = h.child;
                  while (b !== null) (f = b), y2(b), (b = b.sibling);
                }
              }
            }
            k2(h, _);
          }
          return;
        }
        case $Q: {
          if ((I0(Q, J), s0(J), G & EJ)) Uz(J);
          return;
        }
        case uJ:
          return;
        default: {
          I0(Q, J), s0(J);
          return;
        }
      }
    }
    function s0(J) {
      var Q = J.flags;
      if (Q & qQ) {
        try {
          h2(J);
        } catch (Z) {
          cJ(J, J.return, Z);
        }
        J.flags &= ~qQ;
      }
      if (Q & J1) J.flags &= ~J1;
    }
    function m2(J, Q, Z) {
      (C5 = Z), (v5 = Q), (f = J), Hz(J, Q, Z), (C5 = null), (v5 = null);
    }
    function Hz(J, Q, Z) {
      var X = (J.mode & DJ) !== r;
      while (f !== null) {
        var G = f,
          B = G.child;
        if (G.tag === QJ && X) {
          var U = G.memoizedState !== null,
            Y = U || w9;
          if (Y) {
            EU(J, Q, Z);
            continue;
          } else {
            var H = G.alternate,
              W = H !== null && H.memoizedState !== null,
              z = W || aQ,
              j = w9,
              O = aQ;
            if (((w9 = Y), (aQ = z), aQ && !O)) (f = G), l2(G);
            var E = B;
            while (E !== null) (f = E), Hz(E, Q, Z), (E = E.sibling);
            (f = G), (w9 = j), (aQ = O), EU(J, Q, Z);
            continue;
          }
        }
        if ((G.subtreeFlags & K6) !== o && B !== null) (B.return = G), (f = B);
        else EU(J, Q, Z);
      }
    }
    function EU(J, Q, Z) {
      while (f !== null) {
        var X = f;
        if ((X.flags & K6) !== o) {
          var G = X.alternate;
          eJ(X);
          try {
            N2(Q, G, X, Z);
          } catch (U) {
            cJ(X, X.return, U);
          }
          vQ();
        }
        if (X === J) {
          f = null;
          return;
        }
        var B = X.sibling;
        if (B !== null) {
          (B.return = X.return), (f = B);
          return;
        }
        f = X.return;
      }
    }
    function y2(J) {
      while (f !== null) {
        var Q = f,
          Z = Q.child;
        switch (Q.tag) {
          case HJ:
          case JJ:
          case WQ:
          case xJ: {
            if (Q.mode & kJ)
              try {
                d0(), L0(RQ, Q, Q.return);
              } finally {
                u0(Q);
              }
            else L0(RQ, Q, Q.return);
            break;
          }
          case a: {
            N5(Q, Q.return);
            var X = Q.stateNode;
            if (typeof X.componentWillUnmount === "function")
              $U(Q, Q.return, X);
            break;
          }
          case l: {
            N5(Q, Q.return);
            break;
          }
          case QJ: {
            var G = Q.memoizedState !== null;
            if (G) {
              Kz(J);
              continue;
            }
            break;
          }
        }
        if (Z !== null) (Z.return = Q), (f = Z);
        else Kz(J);
      }
    }
    function Kz(J) {
      while (f !== null) {
        var Q = f;
        if (Q === J) {
          f = null;
          return;
        }
        var Z = Q.sibling;
        if (Z !== null) {
          (Z.return = Q.return), (f = Z);
          return;
        }
        f = Q.return;
      }
    }
    function l2(J) {
      while (f !== null) {
        var Q = f,
          Z = Q.child;
        if (Q.tag === QJ) {
          var X = Q.memoizedState !== null;
          if (X) {
            Wz(J);
            continue;
          }
        }
        if (Z !== null) (Z.return = Q), (f = Z);
        else Wz(J);
      }
    }
    function Wz(J) {
      while (f !== null) {
        var Q = f;
        eJ(Q);
        try {
          b2(Q);
        } catch (X) {
          cJ(Q, Q.return, X);
        }
        if ((vQ(), Q === J)) {
          f = null;
          return;
        }
        var Z = Q.sibling;
        if (Z !== null) {
          (Z.return = Q.return), (f = Z);
          return;
        }
        f = Q.return;
      }
    }
    function c2(J, Q, Z, X) {
      (f = Q), i2(Q, J, Z, X);
    }
    function i2(J, Q, Z, X) {
      while (f !== null) {
        var G = f,
          B = G.child;
        if ((G.subtreeFlags & e4) !== o && B !== null) (B.return = G), (f = B);
        else a2(J, Q, Z, X);
      }
    }
    function a2(J, Q, Z, X) {
      while (f !== null) {
        var G = f;
        if ((G.flags & V0) !== o) {
          eJ(G);
          try {
            p2(Q, G, Z, X);
          } catch (U) {
            cJ(G, G.return, U);
          }
          vQ();
        }
        if (G === J) {
          f = null;
          return;
        }
        var B = G.sibling;
        if (B !== null) {
          (B.return = G.return), (f = B);
          return;
        }
        f = G.return;
      }
    }
    function p2(J, Q, Z, X) {
      switch (Q.tag) {
        case HJ:
        case JJ:
        case xJ: {
          if (Q.mode & kJ) {
            tB();
            try {
              a1(cQ | EQ, Q);
            } finally {
              nB(Q);
            }
          } else a1(cQ | EQ, Q);
          break;
        }
      }
    }
    function o2(J) {
      (f = J), r2();
    }
    function r2() {
      while (f !== null) {
        var J = f,
          Q = J.child;
        if ((f.flags & B4) !== o) {
          var Z = J.deletions;
          if (Z !== null) {
            for (var X = 0; X < Z.length; X++) {
              var G = Z[X];
              (f = G), e2(G, J);
            }
            {
              var B = J.alternate;
              if (B !== null) {
                var U = B.child;
                if (U !== null) {
                  B.child = null;
                  do {
                    var Y = U.sibling;
                    (U.sibling = null), (U = Y);
                  } while (U !== null);
                }
              }
            }
            f = J;
          }
        }
        if ((J.subtreeFlags & e4) !== o && Q !== null) (Q.return = J), (f = Q);
        else n2();
      }
    }
    function n2() {
      while (f !== null) {
        var J = f;
        if ((J.flags & V0) !== o) eJ(J), t2(J), vQ();
        var Q = J.sibling;
        if (Q !== null) {
          (Q.return = J.return), (f = Q);
          return;
        }
        f = J.return;
      }
    }
    function t2(J) {
      switch (J.tag) {
        case HJ:
        case JJ:
        case xJ: {
          if (J.mode & kJ) tB(), L0(cQ | EQ, J, J.return), nB(J);
          else L0(cQ | EQ, J, J.return);
          break;
        }
      }
    }
    function e2(J, Q) {
      while (f !== null) {
        var Z = f;
        eJ(Z), Q$(Z, Q), vQ();
        var X = Z.child;
        if (X !== null) (X.return = Z), (f = X);
        else J$(J);
      }
    }
    function J$(J) {
      while (f !== null) {
        var Q = f,
          Z = Q.sibling,
          X = Q.return;
        if ((Zz(Q), Q === J)) {
          f = null;
          return;
        }
        if (Z !== null) {
          (Z.return = X), (f = Z);
          return;
        }
        f = X;
      }
    }
    function Q$(J, Q) {
      switch (J.tag) {
        case HJ:
        case JJ:
        case xJ: {
          if (J.mode & kJ) tB(), L0(cQ, J, Q), nB(J);
          else L0(cQ, J, Q);
          break;
        }
      }
    }
    function Z$(J) {
      switch (J.tag) {
        case HJ:
        case JJ:
        case xJ: {
          try {
            a1(RQ | EQ, J);
          } catch (Z) {
            cJ(J, J.return, Z);
          }
          break;
        }
        case a: {
          var Q = J.stateNode;
          try {
            Q.componentDidMount();
          } catch (Z) {
            cJ(J, J.return, Z);
          }
          break;
        }
      }
    }
    function X$(J) {
      switch (J.tag) {
        case HJ:
        case JJ:
        case xJ: {
          try {
            a1(cQ | EQ, J);
          } catch (Q) {
            cJ(J, J.return, Q);
          }
          break;
        }
      }
    }
    function G$(J) {
      switch (J.tag) {
        case HJ:
        case JJ:
        case xJ: {
          try {
            L0(RQ | EQ, J, J.return);
          } catch (Z) {
            cJ(J, J.return, Z);
          }
          break;
        }
        case a: {
          var Q = J.stateNode;
          if (typeof Q.componentWillUnmount === "function") $U(J, J.return, Q);
          break;
        }
      }
    }
    function B$(J) {
      switch (J.tag) {
        case HJ:
        case JJ:
        case xJ:
          try {
            L0(cQ | EQ, J, J.return);
          } catch (Q) {
            cJ(J, J.return, Q);
          }
      }
    }
    var U$ = 0,
      Y$ = 1,
      H$ = 2,
      K$ = 3,
      W$ = 4;
    if (typeof Symbol === "function" && Symbol.for) {
      var V7 = Symbol.for;
      (U$ = V7("selector.component")),
        (Y$ = V7("selector.has_pseudo_class")),
        (H$ = V7("selector.role")),
        (K$ = V7("selector.test_id")),
        (W$ = V7("selector.text"));
    }
    var z$ = [];
    function M$() {
      z$.forEach(function (J) {
        return J();
      });
    }
    var V$ = SJ.ReactCurrentActQueue;
    function q$(J) {
      {
        var Q =
            typeof IS_REACT_ACT_ENVIRONMENT !== "undefined"
              ? IS_REACT_ACT_ENVIRONMENT
              : void 0,
          Z = typeof jest !== "undefined";
        return Z && Q !== !1;
      }
    }
    function zz() {
      {
        var J =
          typeof IS_REACT_ACT_ENVIRONMENT !== "undefined"
            ? IS_REACT_ACT_ENVIRONMENT
            : void 0;
        if (!J && V$.current !== null)
          M(
            "The current testing environment is not configured to support act(...)",
          );
        return J;
      }
    }
    var O$ = Math.ceil,
      RU = SJ.ReactCurrentDispatcher,
      LU = SJ.ReactCurrentOwner,
      oQ = SJ.ReactCurrentBatchConfig,
      x0 = SJ.ReactCurrentActQueue,
      IQ = 0,
      Mz = 1,
      rQ = 2,
      G0 = 4,
      V1 = 0,
      q7 = 1,
      S4 = 2,
      S9 = 3,
      O7 = 4,
      Vz = 5,
      FU = 6,
      $J = IQ,
      $Z = null,
      QQ = null,
      xQ = x,
      m0 = x,
      IU = f1(x),
      wQ = V1,
      j7 = null,
      xU = x,
      C9 = x,
      D7 = x,
      v9 = x,
      $7 = null,
      SZ = null,
      wU = 0,
      qz = 500,
      Oz = Infinity,
      j$ = 500,
      q1 = null;
    function P7() {
      Oz = NQ() + j$;
    }
    function jz() {
      return Oz;
    }
    var N9 = !1,
      _U = null,
      b5 = null,
      C4 = !1,
      o1 = null,
      A7 = x,
      SU = [],
      CU = null,
      D$ = 50,
      E7 = 0,
      vU = null,
      NU = !1,
      b9 = !1,
      $$ = 50,
      k5 = 0,
      k9 = null,
      R7 = pJ,
      g9 = x,
      Dz = !1;
    function T9() {
      return $Z;
    }
    function PZ() {
      if (($J & (rQ | G0)) !== IQ) return NQ();
      if (R7 !== pJ) return R7;
      return (R7 = NQ()), R7;
    }
    function r1(J) {
      var Q = J.mode;
      if ((Q & DJ) === r) return ZJ;
      else if (($J & rQ) !== IQ && xQ !== x) return j6(xQ);
      var Z = WD() !== KD;
      if (Z) {
        if (oQ.transition !== null) {
          var X = oQ.transition;
          if (!X._updatedFibers) X._updatedFibers = new Set();
          X._updatedFibers.add(J);
        }
        if (g9 === kQ) g9 = oY();
        return g9;
      }
      var G = O0();
      if (G !== kQ) return G;
      var B = pO();
      return B;
    }
    function P$(J) {
      var Q = J.mode;
      if ((Q & DJ) === r) return ZJ;
      return $V();
    }
    function _Q(J, Q, Z, X) {
      if ((y$(), Dz)) M("useInsertionEffect must not schedule updates.");
      if (NU) b9 = !0;
      if ((D6(J, Z, X), ($J & rQ) !== x && J === $Z)) i$(Q);
      else {
        if (q0) tY(J, Q, Z);
        if ((a$(Q), J === $Z)) {
          if (($J & rQ) === IQ) D7 = zJ(D7, Z);
          if (wQ === O7) n1(J, xQ);
        }
        if (
          (CZ(J, X),
          Z === ZJ && $J === IQ && (Q.mode & DJ) === r && !x0.isBatchingLegacy)
        )
          P7(), OK();
      }
    }
    function A$(J, Q, Z) {
      var X = J.current;
      (X.lanes = Q), D6(J, Q, Z), CZ(J, Z);
    }
    function E$(J) {
      return ($J & rQ) !== IQ;
    }
    function CZ(J, Q) {
      var Z = J.callbackNode;
      MV(J, Q);
      var X = J8(J, J === $Z ? xQ : x);
      if (X === x) {
        if (Z !== null) bz(Z);
        (J.callbackNode = null), (J.callbackPriority = kQ);
        return;
      }
      var G = q4(X),
        B = J.callbackPriority;
      if (B === G && !(x0.current !== null && Z !== uU)) {
        if (Z == null && B !== ZJ)
          M(
            "Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.",
          );
        return;
      }
      if (Z != null) bz(Z);
      var U;
      if (G === ZJ) {
        if (J.tag === u1) {
          if (x0.isBatchingLegacy !== null) x0.didScheduleLegacyUpdate = !0;
          ij(Az.bind(null, J));
        } else qK(Az.bind(null, J));
        if (x0.current !== null) x0.current.push(d1);
        else
          rO(function () {
            if (($J & (rQ | G0)) === IQ) d1();
          });
        U = null;
      } else {
        var Y;
        switch (QH(X)) {
          case TZ:
            Y = r7;
            break;
          case G1:
            Y = xX;
            break;
          case B1:
            Y = W4;
            break;
          case G8:
            Y = wX;
            break;
          default:
            Y = W4;
            break;
        }
        U = dU(Y, $z.bind(null, J));
      }
      (J.callbackPriority = G), (J.callbackNode = U);
    }
    function $z(J, Q) {
      if ((fD(), (R7 = pJ), (g9 = x), ($J & (rQ | G0)) !== IQ))
        throw new Error("Should not already be working.");
      var Z = J.callbackNode,
        X = j1();
      if (X) {
        if (J.callbackNode !== Z) return null;
      }
      var G = J8(J, J === $Z ? xQ : x);
      if (G === x) return null;
      var B = !Q8(J, G) && !DV(J, G) && !Q,
        U = B ? v$(J, G) : f9(J, G);
      if (U !== V1) {
        if (U === S4) {
          var Y = oX(J);
          if (Y !== x) (G = Y), (U = bU(J, Y));
        }
        if (U === q7) {
          var H = j7;
          throw (v4(J, x), n1(J, G), CZ(J, NQ()), H);
        }
        if (U === FU) n1(J, G);
        else {
          var W = !Q8(J, G),
            z = J.current.alternate;
          if (W && !L$(z)) {
            if (((U = f9(J, G)), U === S4)) {
              var j = oX(J);
              if (j !== x) (G = j), (U = bU(J, j));
            }
            if (U === q7) {
              var O = j7;
              throw (v4(J, x), n1(J, G), CZ(J, NQ()), O);
            }
          }
          (J.finishedWork = z), (J.finishedLanes = G), R$(J, U, G);
        }
      }
      if ((CZ(J, NQ()), J.callbackNode === Z)) return $z.bind(null, J);
      return null;
    }
    function bU(J, Q) {
      var Z = $7;
      if (B8(J)) {
        var X = v4(J, Q);
        (X.flags |= e0), uj(J.containerInfo);
      }
      var G = f9(J, Q);
      if (G !== S4) {
        var B = SZ;
        if (((SZ = Z), B !== null)) Pz(B);
      }
      return G;
    }
    function Pz(J) {
      if (SZ === null) SZ = J;
      else SZ.push.apply(SZ, J);
    }
    function R$(J, Q, Z) {
      switch (Q) {
        case V1:
        case q7:
          throw new Error("Root did not complete. This is a bug in React.");
        case S4: {
          N4(J, SZ, q1);
          break;
        }
        case S9: {
          if ((n1(J, Z), aY(Z) && !kz())) {
            var X = wU + qz - NQ();
            if (X > 10) {
              var G = J8(J, x);
              if (G !== x) break;
              var B = J.suspendedLanes;
              if (!G5(B, Z)) {
                var U = PZ();
                nY(J, B);
                break;
              }
              J.timeoutHandle = SG(N4.bind(null, J, SZ, q1), X);
              break;
            }
          }
          N4(J, SZ, q1);
          break;
        }
        case O7: {
          if ((n1(J, Z), jV(Z))) break;
          if (!kz()) {
            var Y = WV(J, Z),
              H = Y,
              W = NQ() - H,
              z = m$(W) - W;
            if (z > 10) {
              J.timeoutHandle = SG(N4.bind(null, J, SZ, q1), z);
              break;
            }
          }
          N4(J, SZ, q1);
          break;
        }
        case Vz: {
          N4(J, SZ, q1);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function L$(J) {
      var Q = J;
      while (!0) {
        if (Q.flags & p7) {
          var Z = Q.updateQueue;
          if (Z !== null) {
            var X = Z.stores;
            if (X !== null)
              for (var G = 0; G < X.length; G++) {
                var B = X[G],
                  U = B.getSnapshot,
                  Y = B.value;
                try {
                  if (!fZ(U(), Y)) return !1;
                } catch (W) {
                  return !1;
                }
              }
          }
        }
        var H = Q.child;
        if (Q.subtreeFlags & p7 && H !== null) {
          (H.return = Q), (Q = H);
          continue;
        }
        if (Q === J) return !0;
        while (Q.sibling === null) {
          if (Q.return === null || Q.return === J) return !0;
          Q = Q.return;
        }
        (Q.sibling.return = Q.return), (Q = Q.sibling);
      }
      return !0;
    }
    function n1(J, Q) {
      (Q = Z8(Q, v9)), (Q = Z8(Q, D7)), AV(J, Q);
    }
    function Az(J) {
      if ((uD(), ($J & (rQ | G0)) !== IQ))
        throw new Error("Should not already be working.");
      j1();
      var Q = J8(J, x);
      if (!gZ(Q, ZJ)) return CZ(J, NQ()), null;
      var Z = f9(J, Q);
      if (J.tag !== u1 && Z === S4) {
        var X = oX(J);
        if (X !== x) (Q = X), (Z = bU(J, X));
      }
      if (Z === q7) {
        var G = j7;
        throw (v4(J, x), n1(J, Q), CZ(J, NQ()), G);
      }
      if (Z === FU)
        throw new Error("Root did not complete. This is a bug in React.");
      var B = J.current.alternate;
      return (
        (J.finishedWork = B),
        (J.finishedLanes = Q),
        N4(J, SZ, q1),
        CZ(J, NQ()),
        null
      );
    }
    function F$(J, Q) {
      if (Q !== x) {
        if ((eX(J, zJ(Q, ZJ)), CZ(J, NQ()), ($J & (rQ | G0)) === IQ))
          P7(), d1();
      }
    }
    function kU(J, Q) {
      var Z = $J;
      $J |= Mz;
      try {
        return J(Q);
      } finally {
        if ((($J = Z), $J === IQ && !x0.isBatchingLegacy)) P7(), OK();
      }
    }
    function I$(J, Q, Z, X, G) {
      var B = O0(),
        U = oQ.transition;
      try {
        return (oQ.transition = null), gQ(TZ), J(Q, Z, X, G);
      } finally {
        if ((gQ(B), (oQ.transition = U), $J === IQ)) P7();
      }
    }
    function O1(J) {
      if (o1 !== null && o1.tag === u1 && ($J & (rQ | G0)) === IQ) j1();
      var Q = $J;
      $J |= Mz;
      var Z = oQ.transition,
        X = O0();
      try {
        if (((oQ.transition = null), gQ(TZ), J)) return J();
        else return;
      } finally {
        if ((gQ(X), (oQ.transition = Z), ($J = Q), ($J & (rQ | G0)) === IQ))
          d1();
      }
    }
    function Ez() {
      return ($J & (rQ | G0)) !== IQ;
    }
    function h9(J, Q) {
      UZ(IU, m0, J), (m0 = zJ(m0, Q)), (xU = zJ(xU, Q));
    }
    function gU(J) {
      (m0 = IU.current), BZ(IU, J);
    }
    function v4(J, Q) {
      (J.finishedWork = null), (J.finishedLanes = x);
      var Z = J.timeoutHandle;
      if (Z !== CG) (J.timeoutHandle = CG), oO(Z);
      if (QQ !== null) {
        var X = QQ.return;
        while (X !== null) {
          var G = X.alternate;
          oW(G, X), (X = X.return);
        }
      }
      $Z = J;
      var B = b4(J.current, null);
      return (
        (QQ = B),
        (xQ = m0 = xU = Q),
        (wQ = V1),
        (j7 = null),
        (C9 = x),
        (D7 = x),
        (v9 = x),
        ($7 = null),
        (SZ = null),
        qD(),
        $0.discardPendingWarnings(),
        B
      );
    }
    function Rz(J, Q) {
      do {
        var Z = QQ;
        try {
          if (
            (y8(),
            nK(),
            vQ(),
            (LU.current = null),
            Z === null || Z.return === null)
          ) {
            (wQ = q7), (j7 = Q), (QQ = null);
            return;
          }
          if (cZ && Z.mode & kJ) L9(Z, !0);
          if (_0)
            if (
              (J5(),
              Q !== null &&
                typeof Q === "object" &&
                typeof Q.then === "function")
            ) {
              var X = Q;
              tM(Z, X, xQ);
            } else nM(Z, Q, xQ);
          lD(J, Z.return, Z, Q, xQ), xz(Z);
        } catch (G) {
          if (((Q = G), QQ === Z && Z !== null)) (Z = Z.return), (QQ = Z);
          else Z = QQ;
          continue;
        }
        return;
      } while (!0);
    }
    function Lz() {
      var J = RU.current;
      if (((RU.current = $9), J === null)) return $9;
      else return J;
    }
    function Fz(J) {
      RU.current = J;
    }
    function x$() {
      wU = NQ();
    }
    function L7(J) {
      C9 = zJ(J, C9);
    }
    function w$() {
      if (wQ === V1) wQ = S9;
    }
    function TU() {
      if (wQ === V1 || wQ === S9 || wQ === S4) wQ = O7;
      if ($Z !== null && (rX(C9) || rX(D7))) n1($Z, xQ);
    }
    function _$(J) {
      if (wQ !== O7) wQ = S4;
      if ($7 === null) $7 = [J];
      else $7.push(J);
    }
    function S$() {
      return wQ === V1;
    }
    function f9(J, Q) {
      var Z = $J;
      $J |= rQ;
      var X = Lz();
      if ($Z !== J || xQ !== Q) {
        if (q0) {
          var G = J.memoizedUpdaters;
          if (G.size > 0) F7(J, xQ), G.clear();
          eY(J, Q);
        }
        (q1 = JH()), v4(J, Q);
      }
      mY(Q);
      do
        try {
          C$();
          break;
        } catch (B) {
          Rz(J, B);
        }
      while (!0);
      if ((y8(), ($J = Z), Fz(X), QQ !== null))
        throw new Error(
          "Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.bug in React. Please file an issue.",
        );
      return yY(), ($Z = null), (xQ = x), wQ;
    }
    function C$() {
      while (QQ !== null) Iz(QQ);
    }
    function v$(J, Q) {
      var Z = $J;
      $J |= rQ;
      var X = Lz();
      if ($Z !== J || xQ !== Q) {
        if (q0) {
          var G = J.memoizedUpdaters;
          if (G.size > 0) F7(J, xQ), G.clear();
          eY(J, Q);
        }
        (q1 = JH()), P7(), v4(J, Q);
      }
      mY(Q);
      do
        try {
          N$();
          break;
        } catch (B) {
          Rz(J, B);
        }
      while (!0);
      if ((y8(), Fz(X), ($J = Z), QQ !== null)) return XV(), V1;
      else return yY(), ($Z = null), (xQ = x), wQ;
    }
    function N$() {
      while (QQ !== null && !vM()) Iz(QQ);
    }
    function Iz(J) {
      var Q = J.alternate;
      eJ(J);
      var Z;
      if ((J.mode & kJ) !== r) rB(J), (Z = hU(Q, J, m0)), L9(J, !0);
      else Z = hU(Q, J, m0);
      if ((vQ(), (J.memoizedProps = J.pendingProps), Z === null)) xz(J);
      else QQ = Z;
      LU.current = null;
    }
    function xz(J) {
      var Q = J;
      do {
        var { alternate: Z, return: X } = Q;
        if ((Q.flags & H6) === o) {
          eJ(Q);
          var G = void 0;
          if ((Q.mode & kJ) === r) G = pW(Z, Q, m0);
          else rB(Q), (G = pW(Z, Q, m0)), L9(Q, !1);
          if ((vQ(), G !== null)) {
            QQ = G;
            return;
          }
        } else {
          var B = R2(Z, Q);
          if (B !== null) {
            (B.flags &= IM), (QQ = B);
            return;
          }
          if ((Q.mode & kJ) !== r) {
            L9(Q, !1);
            var { actualDuration: U, child: Y } = Q;
            while (Y !== null) (U += Y.actualDuration), (Y = Y.sibling);
            Q.actualDuration = U;
          }
          if (X !== null)
            (X.flags |= H6), (X.subtreeFlags = o), (X.deletions = null);
          else {
            (wQ = FU), (QQ = null);
            return;
          }
        }
        var H = Q.sibling;
        if (H !== null) {
          QQ = H;
          return;
        }
        (Q = X), (QQ = Q);
      } while (Q !== null);
      if (wQ === V1) wQ = Vz;
    }
    function N4(J, Q, Z) {
      var X = O0(),
        G = oQ.transition;
      try {
        (oQ.transition = null), gQ(TZ), b$(J, Q, Z, X);
      } finally {
        (oQ.transition = G), gQ(X);
      }
      return null;
    }
    function b$(J, Q, Z, X) {
      do j1();
      while (o1 !== null);
      if ((l$(), ($J & (rQ | G0)) !== IQ))
        throw new Error("Should not already be working.");
      var { finishedWork: G, finishedLanes: B } = J;
      if ((lM(B), G === null)) return uY(), null;
      else if (B === x)
        M(
          "root.finishedLanes should not be empty during a commit. This is a bug in React.",
        );
      if (((J.finishedWork = null), (J.finishedLanes = x), G === J.current))
        throw new Error(
          "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.",
        );
      (J.callbackNode = null), (J.callbackPriority = kQ);
      var U = zJ(G.lanes, G.childLanes);
      if ((EV(J, U), J === $Z)) ($Z = null), (QQ = null), (xQ = x);
      if ((G.subtreeFlags & e4) !== o || (G.flags & e4) !== o) {
        if (!C4)
          (C4 = !0),
            (CU = Z),
            dU(W4, function () {
              return j1(), null;
            });
      }
      var Y = (G.subtreeFlags & (FX | IX | K6 | e4)) !== o,
        H = (G.flags & (FX | IX | K6 | e4)) !== o;
      if (Y || H) {
        var W = oQ.transition;
        oQ.transition = null;
        var z = O0();
        gQ(TZ);
        var j = $J;
        ($J |= G0), (LU.current = null);
        var O = w2(J, G);
        RW(),
          s2(J, G, B),
          mO(J.containerInfo),
          (J.current = G),
          eM(B),
          m2(G, J, B),
          JV(),
          NM(),
          ($J = j),
          gQ(z),
          (oQ.transition = W);
      } else (J.current = G), RW();
      var E = C4;
      if (C4) (C4 = !1), (o1 = J), (A7 = B);
      else (k5 = 0), (k9 = null);
      if (((U = J.pendingLanes), U === x)) b5 = null;
      if (!E) Cz(J.current, !1);
      if ((uM(G.stateNode, X), q0)) J.memoizedUpdaters.clear();
      if ((M$(), CZ(J, NQ()), Q !== null)) {
        var P = J.onRecoverableError;
        for (var R = 0; R < Q.length; R++) {
          var g = Q[R],
            y = g.stack,
            d = g.digest;
          P(g.value, { componentStack: y, digest: d });
        }
      }
      if (N9) {
        N9 = !1;
        var VJ = _U;
        throw ((_U = null), VJ);
      }
      if (gZ(A7, ZJ) && J.tag !== u1) j1();
      if (((U = J.pendingLanes), gZ(U, ZJ)))
        if ((hD(), J === vU)) E7++;
        else (E7 = 0), (vU = J);
      else E7 = 0;
      return d1(), uY(), null;
    }
    function j1() {
      if (o1 !== null) {
        var J = QH(A7),
          Q = IV(B1, J),
          Z = oQ.transition,
          X = O0();
        try {
          return (oQ.transition = null), gQ(Q), g$();
        } finally {
          gQ(X), (oQ.transition = Z);
        }
      }
      return !1;
    }
    function k$(J) {
      if ((SU.push(J), !C4))
        (C4 = !0),
          dU(W4, function () {
            return j1(), null;
          });
    }
    function g$() {
      if (o1 === null) return !1;
      var J = CU;
      CU = null;
      var Q = o1,
        Z = A7;
      if (((o1 = null), (A7 = x), ($J & (rQ | G0)) !== IQ))
        throw new Error(
          "Cannot flush passive effects while already rendering.",
        );
      (NU = !0), (b9 = !1), QV(Z);
      var X = $J;
      ($J |= G0), o2(Q.current), c2(Q, Q.current, Z, J);
      {
        var G = SU;
        SU = [];
        for (var B = 0; B < G.length; B++) {
          var U = G[B];
          v2(Q, U);
        }
      }
      ZV(), Cz(Q.current, !0), ($J = X), d1();
      {
        if (b9)
          if (Q === k9) k5++;
          else (k5 = 0), (k9 = Q);
        else k5 = 0;
        (NU = !1), (b9 = !1);
      }
      dM(Q);
      {
        var Y = Q.current.stateNode;
        (Y.effectDuration = 0), (Y.passiveEffectDuration = 0);
      }
      return !0;
    }
    function wz(J) {
      return b5 !== null && b5.has(J);
    }
    function T$(J) {
      if (b5 === null) b5 = new Set([J]);
      else b5.add(J);
    }
    function h$(J) {
      if (!N9) (N9 = !0), (_U = J);
    }
    var f$ = h$;
    function _z(J, Q, Z) {
      var X = w4(Z, Q),
        G = FW(J, X, ZJ),
        B = m1(J, G, ZJ),
        U = PZ();
      if (B !== null) D6(B, ZJ, U), CZ(B, U);
    }
    function cJ(J, Q, Z) {
      if ((F2(Z), I7(!1), J.tag === s)) {
        _z(J, J, Z);
        return;
      }
      var X = null;
      X = Q;
      while (X !== null) {
        if (X.tag === s) {
          _z(X, J, Z);
          return;
        } else if (X.tag === a) {
          var { type: G, stateNode: B } = X;
          if (
            typeof G.getDerivedStateFromError === "function" ||
            (typeof B.componentDidCatch === "function" && !wz(B))
          ) {
            var U = w4(Z, J),
              Y = ZU(X, U, ZJ),
              H = m1(X, Y, ZJ),
              W = PZ();
            if (H !== null) D6(H, ZJ, W), CZ(H, W);
            return;
          }
        }
        X = X.return;
      }
      M(
        "Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.\n\nError message:\n\n%sinside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.\n\nError message:\n\n%s",
        Z,
      );
    }
    function u$(J, Q, Z) {
      var X = J.pingCache;
      if (X !== null) X.delete(Q);
      var G = PZ();
      if ((nY(J, Z), p$(J), $Z === J && G5(xQ, Z)))
        if (wQ === O7 || (wQ === S9 && aY(xQ) && NQ() - wU < qz)) v4(J, x);
        else v9 = zJ(v9, Z);
      CZ(J, G);
    }
    function Sz(J, Q) {
      if (Q === kQ) Q = P$(J);
      var Z = PZ(),
        X = wZ(J, Q);
      if (X !== null) D6(X, Q, Z), CZ(X, Z);
    }
    function d$(J) {
      var Q = J.memoizedState,
        Z = kQ;
      if (Q !== null) Z = Q.retryLane;
      Sz(J, Z);
    }
    function s$(J, Q) {
      var Z = kQ,
        X;
      switch (J.tag) {
        case PJ:
          X = J.stateNode;
          var G = J.memoizedState;
          if (G !== null) Z = G.retryLane;
          break;
        case $Q:
          X = J.stateNode;
          break;
        default:
          throw new Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React.",
          );
      }
      if (X !== null) X.delete(Q);
      Sz(J, Z);
    }
    function m$(J) {
      return J < 120
        ? 120
        : J < 480
          ? 480
          : J < 1080
            ? 1080
            : J < 1920
              ? 1920
              : J < 3000
                ? 3000
                : J < 4320
                  ? 4320
                  : O$(J / 1960) * 1960;
    }
    function y$() {
      if (E7 > D$)
        throw (
          ((E7 = 0),
          (vU = null),
          new Error(
            "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.",
          ))
        );
      if (k5 > $$)
        (k5 = 0),
          (k9 = null),
          M(
            "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.",
          );
    }
    function l$() {
      $0.flushLegacyContextWarning(), $0.flushPendingUnsafeLifecycleWarnings();
    }
    function Cz(J, Q) {
      {
        if ((eJ(J), u9(J, Q1, G$), Q)) u9(J, o7, B$);
        if ((u9(J, Q1, Z$), Q)) u9(J, o7, X$);
        vQ();
      }
    }
    function u9(J, Q, Z) {
      {
        var X = J,
          G = null;
        while (X !== null) {
          var B = X.subtreeFlags & Q;
          if (X !== G && X.child !== null && B !== o) X = X.child;
          else {
            if ((X.flags & Q) !== o) Z(X);
            if (X.sibling !== null) X = X.sibling;
            else X = G = X.return;
          }
        }
      }
    }
    var d9 = null;
    function vz(J) {
      {
        if (($J & rQ) !== IQ) return;
        if (!(J.mode & DJ)) return;
        var Q = J.tag;
        if (
          Q !== ZQ &&
          Q !== s &&
          Q !== a &&
          Q !== HJ &&
          Q !== JJ &&
          Q !== WQ &&
          Q !== xJ
        )
          return;
        var Z = YJ(J) || "ReactComponent";
        if (d9 !== null) {
          if (d9.has(Z)) return;
          d9.add(Z);
        } else d9 = new Set([Z]);
        var X = GZ;
        try {
          eJ(J),
            M(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.",
            );
        } finally {
          if (X) eJ(J);
          else vQ();
        }
      }
    }
    var hU;
    {
      var c$ = null;
      hU = function (J, Q, Z) {
        var X = uz(c$, Q);
        try {
          return yW(J, Q, Z);
        } catch (B) {
          if (
            JD() ||
            (B !== null &&
              typeof B === "object" &&
              typeof B.then === "function")
          )
            throw B;
          if ((y8(), nK(), oW(J, Q), uz(Q, X), Q.mode & kJ)) rB(Q);
          if (($X(null, yW, null, J, Q, Z), EM())) {
            var G = PX();
            if (
              typeof G === "object" &&
              G !== null &&
              G._suppressLogging &&
              typeof B === "object" &&
              B !== null &&
              !B._suppressLogging
            )
              B._suppressLogging = !0;
          }
          throw B;
        }
      };
    }
    var Nz = !1,
      fU;
    fU = new Set();
    function i$(J) {
      if (w1 && !kD())
        switch (J.tag) {
          case HJ:
          case JJ:
          case xJ: {
            var Q = (QQ && YJ(QQ)) || "Unknown",
              Z = Q;
            if (!fU.has(Z)) {
              fU.add(Z);
              var X = YJ(J) || "Unknown";
              M(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-renderdifferent component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",
                X,
                Q,
                Q,
              );
            }
            break;
          }
          case a: {
            if (!Nz)
              M(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.",
              ),
                (Nz = !0);
            break;
          }
        }
    }
    function F7(J, Q) {
      if (q0) {
        var Z = J.memoizedUpdaters;
        Z.forEach(function (X) {
          tY(J, X, Q);
        });
      }
    }
    var uU = {};
    function dU(J, Q) {
      {
        var Z = x0.current;
        if (Z !== null) return Z.push(Q), uU;
        else return fY(J, Q);
      }
    }
    function bz(J) {
      if (J === uU) return;
      return CM(J);
    }
    function kz() {
      return x0.current !== null;
    }
    function a$(J) {
      {
        if (J.mode & DJ) {
          if (!zz()) return;
        } else {
          if (!q$()) return;
          if ($J !== IQ) return;
          if (J.tag !== HJ && J.tag !== JJ && J.tag !== xJ) return;
        }
        if (x0.current === null) {
          var Q = GZ;
          try {
            eJ(J),
              M(
                "An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act",
                YJ(J),
              );
          } finally {
            if (Q) eJ(J);
            else vQ();
          }
        }
      }
    }
    function p$(J) {
      if (J.tag !== u1 && zz() && x0.current === null)
        M(
          "A suspended resource finished loading inside a test, but the event was not wrapped in act(...).\n\nWhen testing, code that resolves suspended data should be wrapped into act(...):\n\nact(() => {\n  /* finish loading suspended data */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act",
        );
    }
    function I7(J) {
      Dz = J;
    }
    var B0 = null,
      g5 = null,
      o$ = function (J) {
        B0 = J;
      };
    function T5(J) {
      {
        if (B0 === null) return J;
        var Q = B0(J);
        if (Q === void 0) return J;
        return Q.current;
      }
    }
    function sU(J) {
      return T5(J);
    }
    function mU(J) {
      {
        if (B0 === null) return J;
        var Q = B0(J);
        if (Q === void 0) {
          if (J !== null && J !== void 0 && typeof J.render === "function") {
            var Z = T5(J.render);
            if (J.render !== Z) {
              var X = { $$typeof: KJ, render: Z };
              if (J.displayName !== void 0) X.displayName = J.displayName;
              return X;
            }
          }
          return J;
        }
        return Q.current;
      }
    }
    function gz(J, Q) {
      {
        if (B0 === null) return !1;
        var Z = J.elementType,
          X = Q.type,
          G = !1,
          B = typeof X === "object" && X !== null ? X.$$typeof : null;
        switch (J.tag) {
          case a: {
            if (typeof X === "function") G = !0;
            break;
          }
          case HJ: {
            if (typeof X === "function") G = !0;
            else if (B === jJ) G = !0;
            break;
          }
          case JJ: {
            if (B === KJ) G = !0;
            else if (B === jJ) G = !0;
            break;
          }
          case WQ:
          case xJ: {
            if (B === hJ) G = !0;
            else if (B === jJ) G = !0;
            break;
          }
          default:
            return !1;
        }
        if (G) {
          var U = B0(Z);
          if (U !== void 0 && U === B0(X)) return !0;
        }
        return !1;
      }
    }
    function Tz(J) {
      {
        if (B0 === null) return;
        if (typeof WeakSet !== "function") return;
        if (g5 === null) g5 = new WeakSet();
        g5.add(J);
      }
    }
    var r$ = function (J, Q) {
        {
          if (B0 === null) return;
          var { staleFamilies: Z, updatedFamilies: X } = Q;
          j1(),
            O1(function () {
              yU(J.current, X, Z);
            });
        }
      },
      n$ = function (J, Q) {
        {
          if (J.context !== uZ) return;
          j1(),
            O1(function () {
              x7(Q, J, null, null);
            });
        }
      };
    function yU(J, Q, Z) {
      {
        var { alternate: X, child: G, sibling: B, tag: U, type: Y } = J,
          H = null;
        switch (U) {
          case HJ:
          case xJ:
          case a:
            H = Y;
            break;
          case JJ:
            H = Y.render;
            break;
        }
        if (B0 === null)
          throw new Error(
            "Expected resolveFamily to be set during hot reload.",
          );
        var W = !1,
          z = !1;
        if (H !== null) {
          var j = B0(H);
          if (j !== void 0) {
            if (Z.has(j)) z = !0;
            else if (Q.has(j))
              if (U === a) z = !0;
              else W = !0;
          }
        }
        if (g5 !== null) {
          if (g5.has(J) || (X !== null && g5.has(X))) z = !0;
        }
        if (z) J._debugNeedsRemount = !0;
        if (z || W) {
          var O = wZ(J, ZJ);
          if (O !== null) _Q(O, J, ZJ, pJ);
        }
        if (G !== null && !z) yU(G, Q, Z);
        if (B !== null) yU(B, Q, Z);
      }
    }
    var t$ = function (J, Q) {
      {
        var Z = new Set(),
          X = new Set(
            Q.map(function (G) {
              return G.current;
            }),
          );
        return lU(J.current, X, Z), Z;
      }
    };
    function lU(J, Q, Z) {
      {
        var { child: X, sibling: G, tag: B, type: U } = J,
          Y = null;
        switch (B) {
          case HJ:
          case xJ:
          case a:
            Y = U;
            break;
          case JJ:
            Y = U.render;
            break;
        }
        var H = !1;
        if (Y !== null) {
          if (Q.has(Y)) H = !0;
        }
        if (H) e$(J, Z);
        else if (X !== null) lU(X, Q, Z);
        if (G !== null) lU(G, Q, Z);
      }
    }
    function e$(J, Q) {
      {
        var Z = JP(J, Q);
        if (Z) return;
        var X = J;
        while (!0) {
          switch (X.tag) {
            case l:
              Q.add(X.stateNode);
              return;
            case OJ:
              Q.add(X.stateNode.containerInfo);
              return;
            case s:
              Q.add(X.stateNode.containerInfo);
              return;
          }
          if (X.return === null)
            throw new Error("Expected to reach root first.");
          X = X.return;
        }
      }
    }
    function JP(J, Q) {
      {
        var Z = J,
          X = !1;
        while (!0) {
          if (Z.tag === l) (X = !0), Q.add(Z.stateNode);
          else if (Z.child !== null) {
            (Z.child.return = Z), (Z = Z.child);
            continue;
          }
          if (Z === J) return X;
          while (Z.sibling === null) {
            if (Z.return === null || Z.return === J) return X;
            Z = Z.return;
          }
          (Z.sibling.return = Z.return), (Z = Z.sibling);
        }
      }
      return !1;
    }
    var cU;
    {
      cU = !1;
      try {
        var hz = Object.preventExtensions({});
      } catch (J) {
        cU = !0;
      }
    }
    function QP(J, Q, Z, X) {
      if (
        ((this.tag = J),
        (this.key = Z),
        (this.elementType = null),
        (this.type = null),
        (this.stateNode = null),
        (this.return = null),
        (this.child = null),
        (this.sibling = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = Q),
        (this.memoizedProps = null),
        (this.updateQueue = null),
        (this.memoizedState = null),
        (this.dependencies = null),
        (this.mode = X),
        (this.flags = o),
        (this.subtreeFlags = o),
        (this.deletions = null),
        (this.lanes = x),
        (this.childLanes = x),
        (this.alternate = null),
        (this.actualDuration = Number.NaN),
        (this.actualStartTime = Number.NaN),
        (this.selfBaseDuration = Number.NaN),
        (this.treeBaseDuration = Number.NaN),
        (this.actualDuration = 0),
        (this.actualStartTime = -1),
        (this.selfBaseDuration = 0),
        (this.treeBaseDuration = 0),
        (this._debugSource = null),
        (this._debugOwner = null),
        (this._debugNeedsRemount = !1),
        (this._debugHookTypes = null),
        !cU && typeof Object.preventExtensions === "function")
      )
        Object.preventExtensions(this);
    }
    var dZ = function (J, Q, Z, X) {
      return new QP(J, Q, Z, X);
    };
    function iU(J) {
      var Q = J.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function ZP(J) {
      return typeof J === "function" && !iU(J) && J.defaultProps === void 0;
    }
    function XP(J) {
      if (typeof J === "function") return iU(J) ? a : HJ;
      else if (J !== void 0 && J !== null) {
        var Q = J.$$typeof;
        if (Q === KJ) return JJ;
        if (Q === hJ) return WQ;
      }
      return ZQ;
    }
    function b4(J, Q) {
      var Z = J.alternate;
      if (Z === null)
        (Z = dZ(J.tag, Q, J.key, J.mode)),
          (Z.elementType = J.elementType),
          (Z.type = J.type),
          (Z.stateNode = J.stateNode),
          (Z._debugSource = J._debugSource),
          (Z._debugOwner = J._debugOwner),
          (Z._debugHookTypes = J._debugHookTypes),
          (Z.alternate = J),
          (J.alternate = Z);
      else
        (Z.pendingProps = Q),
          (Z.type = J.type),
          (Z.flags = o),
          (Z.subtreeFlags = o),
          (Z.deletions = null),
          (Z.actualDuration = 0),
          (Z.actualStartTime = -1);
      (Z.flags = J.flags & Z1),
        (Z.childLanes = J.childLanes),
        (Z.lanes = J.lanes),
        (Z.child = J.child),
        (Z.memoizedProps = J.memoizedProps),
        (Z.memoizedState = J.memoizedState),
        (Z.updateQueue = J.updateQueue);
      var X = J.dependencies;
      switch (
        ((Z.dependencies =
          X === null ? null : { lanes: X.lanes, firstContext: X.firstContext }),
        (Z.sibling = J.sibling),
        (Z.index = J.index),
        (Z.ref = J.ref),
        (Z.selfBaseDuration = J.selfBaseDuration),
        (Z.treeBaseDuration = J.treeBaseDuration),
        (Z._debugNeedsRemount = J._debugNeedsRemount),
        Z.tag)
      ) {
        case ZQ:
        case HJ:
        case xJ:
          Z.type = T5(J.type);
          break;
        case a:
          Z.type = sU(J.type);
          break;
        case JJ:
          Z.type = mU(J.type);
          break;
      }
      return Z;
    }
    function GP(J, Q) {
      J.flags &= Z1 | qQ;
      var Z = J.alternate;
      if (Z === null)
        (J.childLanes = x),
          (J.lanes = Q),
          (J.child = null),
          (J.subtreeFlags = o),
          (J.memoizedProps = null),
          (J.memoizedState = null),
          (J.updateQueue = null),
          (J.dependencies = null),
          (J.stateNode = null),
          (J.selfBaseDuration = 0),
          (J.treeBaseDuration = 0);
      else {
        (J.childLanes = Z.childLanes),
          (J.lanes = Z.lanes),
          (J.child = Z.child),
          (J.subtreeFlags = o),
          (J.deletions = null),
          (J.memoizedProps = Z.memoizedProps),
          (J.memoizedState = Z.memoizedState),
          (J.updateQueue = Z.updateQueue),
          (J.type = Z.type);
        var X = Z.dependencies;
        (J.dependencies =
          X === null ? null : { lanes: X.lanes, firstContext: X.firstContext }),
          (J.selfBaseDuration = Z.selfBaseDuration),
          (J.treeBaseDuration = Z.treeBaseDuration);
      }
      return J;
    }
    function BP(J, Q, Z) {
      var X;
      if (J === g8) {
        if (((X = DJ), Q === !0)) (X |= OQ), (X |= N0);
      } else X = r;
      if (q0) X |= kJ;
      return dZ(s, null, null, X);
    }
    function aU(J, Q, Z, X, G, B) {
      var U = ZQ,
        Y = J;
      if (typeof J === "function")
        if (iU(J)) (U = a), (Y = sU(Y));
        else Y = T5(Y);
      else if (typeof J === "string") U = l;
      else
        J: switch (J) {
          case w:
            return t1(Z.children, G, B, Q);
          case N:
            if (((U = U0), (G |= OQ), (G & DJ) !== r)) G |= N0;
            break;
          case p:
            return UP(Z, G, B, Q);
          case WJ:
            return YP(Z, G, B, Q);
          case BQ:
            return HP(Z, G, B, Q);
          case Z4:
            return fz(Z, G, B, Q);
          case bZ:
          case XZ:
          case a9:
          case p9:
          case C0:
          default: {
            if (typeof J === "object" && J !== null)
              switch (J.$$typeof) {
                case n:
                  U = IJ;
                  break J;
                case wJ:
                  U = TQ;
                  break J;
                case KJ:
                  (U = JJ), (Y = mU(Y));
                  break J;
                case hJ:
                  U = WQ;
                  break J;
                case jJ:
                  (U = Y0), (Y = null);
                  break J;
              }
            var H = "";
            {
              if (
                J === void 0 ||
                (typeof J === "object" &&
                  J !== null &&
                  Object.keys(J).length === 0)
              )
                H +=
                  " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              var W = X ? YJ(X) : null;
              if (W) H += "\n\nCheck the render method of `" + W + "`.";
            }
            throw new Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " +
                ("but got: " + (J == null ? J : typeof J) + "." + H),
            );
          }
        }
      var z = dZ(U, Z, Q, G);
      return (
        (z.elementType = J), (z.type = Y), (z.lanes = B), (z._debugOwner = X), z
      );
    }
    function pU(J, Q, Z) {
      var X = null;
      X = J._owner;
      var { type: G, key: B, props: U } = J,
        Y = aU(G, B, U, X, Q, Z);
      return (Y._debugSource = J._source), (Y._debugOwner = J._owner), Y;
    }
    function t1(J, Q, Z, X) {
      var G = dZ(yZ, J, X, Q);
      return (G.lanes = Z), G;
    }
    function UP(J, Q, Z, X) {
      if (typeof J.id !== "string")
        M(
          'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
          typeof J.id,
        );
      var G = dZ(oJ, J, X, Q | kJ);
      return (
        (G.elementType = p),
        (G.lanes = Z),
        (G.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
        G
      );
    }
    function YP(J, Q, Z, X) {
      var G = dZ(PJ, J, X, Q);
      return (G.elementType = WJ), (G.lanes = Z), G;
    }
    function HP(J, Q, Z, X) {
      var G = dZ($Q, J, X, Q);
      return (G.elementType = BQ), (G.lanes = Z), G;
    }
    function fz(J, Q, Z, X) {
      var G = dZ(QJ, J, X, Q);
      (G.elementType = Z4), (G.lanes = Z);
      var B = { isHidden: !1 };
      return (G.stateNode = B), G;
    }
    function oU(J, Q, Z) {
      var X = dZ(FJ, J, null, Q);
      return (X.lanes = Z), X;
    }
    function KP() {
      var J = dZ(l, null, null, r);
      return (J.elementType = "DELETED"), J;
    }
    function WP(J) {
      var Q = dZ(SQ, null, null, r);
      return (Q.stateNode = J), Q;
    }
    function rU(J, Q, Z) {
      var X = J.children !== null ? J.children : [],
        G = dZ(OJ, X, J.key, Q);
      return (
        (G.lanes = Z),
        (G.stateNode = {
          containerInfo: J.containerInfo,
          pendingChildren: null,
          implementation: J.implementation,
        }),
        G
      );
    }
    function uz(J, Q) {
      if (J === null) J = dZ(ZQ, null, null, r);
      return (
        (J.tag = Q.tag),
        (J.key = Q.key),
        (J.elementType = Q.elementType),
        (J.type = Q.type),
        (J.stateNode = Q.stateNode),
        (J.return = Q.return),
        (J.child = Q.child),
        (J.sibling = Q.sibling),
        (J.index = Q.index),
        (J.ref = Q.ref),
        (J.pendingProps = Q.pendingProps),
        (J.memoizedProps = Q.memoizedProps),
        (J.updateQueue = Q.updateQueue),
        (J.memoizedState = Q.memoizedState),
        (J.dependencies = Q.dependencies),
        (J.mode = Q.mode),
        (J.flags = Q.flags),
        (J.subtreeFlags = Q.subtreeFlags),
        (J.deletions = Q.deletions),
        (J.lanes = Q.lanes),
        (J.childLanes = Q.childLanes),
        (J.alternate = Q.alternate),
        (J.actualDuration = Q.actualDuration),
        (J.actualStartTime = Q.actualStartTime),
        (J.selfBaseDuration = Q.selfBaseDuration),
        (J.treeBaseDuration = Q.treeBaseDuration),
        (J._debugSource = Q._debugSource),
        (J._debugOwner = Q._debugOwner),
        (J._debugNeedsRemount = Q._debugNeedsRemount),
        (J._debugHookTypes = Q._debugHookTypes),
        J
      );
    }
    function zP(J, Q, Z, X, G) {
      (this.tag = Q),
        (this.containerInfo = J),
        (this.pendingChildren = null),
        (this.current = null),
        (this.pingCache = null),
        (this.finishedWork = null),
        (this.timeoutHandle = CG),
        (this.context = null),
        (this.pendingContext = null),
        (this.callbackNode = null),
        (this.callbackPriority = kQ),
        (this.eventTimes = tX(x)),
        (this.expirationTimes = tX(pJ)),
        (this.pendingLanes = x),
        (this.suspendedLanes = x),
        (this.pingedLanes = x),
        (this.expiredLanes = x),
        (this.mutableReadLanes = x),
        (this.finishedLanes = x),
        (this.entangledLanes = x),
        (this.entanglements = tX(x)),
        (this.identifierPrefix = X),
        (this.onRecoverableError = G),
        (this.mutableSourceEagerHydrationData = null),
        (this.effectDuration = 0),
        (this.passiveEffectDuration = 0);
      {
        this.memoizedUpdaters = new Set();
        var B = (this.pendingUpdatersLaneMap = []);
        for (var U = 0; U < SX; U++) B.push(new Set());
      }
      switch (Q) {
        case g8:
          this._debugRootType = Z ? "hydrateRoot()" : "createRoot()";
          break;
        case u1:
          this._debugRootType = Z ? "hydrate()" : "render()";
          break;
      }
    }
    function dz(J, Q, Z, X, G, B, U, Y, H, W) {
      var z = new zP(J, Q, Z, Y, H),
        j = BP(Q, B);
      (z.current = j), (j.stateNode = z);
      {
        var O = {
          element: X,
          isDehydrated: Z,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        };
        j.memoizedState = O;
      }
      return ZB(j), z;
    }
    var nU = "18.2.0";
    function MP(J, Q, Z) {
      var X =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return (
        MZ(X),
        {
          $$typeof: q,
          key: X == null ? null : "" + X,
          children: J,
          containerInfo: Q,
          implementation: Z,
        }
      );
    }
    var tU, eU;
    (tU = !1), (eU = {});
    function sz(J) {
      if (!J) return uZ;
      var Q = n4(J),
        Z = cj(Q);
      if (Q.tag === a) {
        var X = Q.type;
        if (g0(X)) return MK(Q, X, Z);
      }
      return Z;
    }
    function VP(J, Q) {
      {
        var Z = n4(J);
        if (Z === void 0)
          if (typeof J.render === "function")
            throw new Error("Unable to find node on an unmounted component.");
          else {
            var X = Object.keys(J).join(",");
            throw new Error(
              "Argument appears to not be a ReactComponent. Keys: " + X,
            );
          }
        var G = gY(Z);
        if (G === null) return null;
        if (G.mode & OQ) {
          var B = YJ(Z) || "Component";
          if (!eU[B]) {
            eU[B] = !0;
            var U = GZ;
            try {
              if ((eJ(G), Z.mode & OQ))
                M(
                  "%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",
                  Q,
                  Q,
                  B,
                );
              else
                M(
                  "%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",
                  Q,
                  Q,
                  B,
                );
            } finally {
              if (U) eJ(U);
              else vQ();
            }
          }
        }
        return G.stateNode;
      }
    }
    function mz(J, Q, Z, X, G, B, U, Y) {
      var H = !1,
        W = null;
      return dz(J, Q, H, W, Z, X, G, B, U);
    }
    function yz(J, Q, Z, X, G, B, U, Y, H, W) {
      var z = !0,
        j = dz(Z, X, z, J, G, B, U, Y, H);
      j.context = sz(null);
      var O = j.current,
        E = PZ(),
        P = r1(O),
        R = z1(E, P);
      return (
        (R.callback = Q !== void 0 && Q !== null ? Q : null),
        m1(O, R, P),
        A$(j, P, E),
        j
      );
    }
    function x7(J, Q, Z, X) {
      fM(Q, J);
      var G = Q.current,
        B = PZ(),
        U = r1(G);
      GV(U);
      var Y = sz(Z);
      if (Q.context === null) Q.context = Y;
      else Q.pendingContext = Y;
      if (w1 && GZ !== null && !tU)
        (tU = !0),
          M(
            "Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.",
            YJ(GZ) || "Unknown",
          );
      var H = z1(B, U);
      if (
        ((H.payload = { element: J }),
        (X = X === void 0 ? null : X),
        X !== null)
      ) {
        if (typeof X !== "function")
          M(
            "render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
            X,
          );
        H.callback = X;
      }
      var W = m1(G, H, U);
      if (W !== null) _Q(W, G, U, B), p8(W, G, U);
      return U;
    }
    function s9(J) {
      var Q = J.current;
      if (!Q.child) return null;
      switch (Q.child.tag) {
        case l:
          return wG(Q.child.stateNode);
        default:
          return Q.child.stateNode;
      }
    }
    function qP(J) {
      switch (J.tag) {
        case s: {
          var Q = J.stateNode;
          if (B8(Q)) {
            var Z = VV(Q);
            F$(Q, Z);
          }
          break;
        }
        case PJ: {
          O1(function () {
            var G = wZ(J, ZJ);
            if (G !== null) {
              var B = PZ();
              _Q(G, J, ZJ, B);
            }
          });
          var X = ZJ;
          JY(J, X);
          break;
        }
      }
    }
    function lz(J, Q) {
      var Z = J.memoizedState;
      if (Z !== null && Z.dehydrated !== null) Z.retryLane = PV(Z.retryLane, Q);
    }
    function JY(J, Q) {
      lz(J, Q);
      var Z = J.alternate;
      if (Z) lz(Z, Q);
    }
    function OP(J) {
      if (J.tag !== PJ) return;
      var Q = V6,
        Z = wZ(J, Q);
      if (Z !== null) {
        var X = PZ();
        _Q(Z, J, Q, X);
      }
      JY(J, Q);
    }
    function jP(J) {
      if (J.tag !== PJ) return;
      var Q = r1(J),
        Z = wZ(J, Q);
      if (Z !== null) {
        var X = PZ();
        _Q(Z, J, Q, X);
      }
      JY(J, Q);
    }
    function cz(J) {
      var Q = SM(J);
      if (Q === null) return null;
      return Q.stateNode;
    }
    var iz = function (J) {
      return null;
    };
    function DP(J) {
      return iz(J);
    }
    var az = function (J) {
      return !1;
    };
    function $P(J) {
      return az(J);
    }
    var pz = null,
      oz = null,
      rz = null,
      nz = null,
      tz = null,
      ez = null,
      J3 = null,
      Q3 = null,
      Z3 = null;
    {
      var X3 = function (J, Q, Z) {
          var X = Q[Z],
            G = AQ(J) ? J.slice() : MJ({}, J);
          if (Z + 1 === Q.length) {
            if (AQ(G)) G.splice(X, 1);
            else delete G[X];
            return G;
          }
          return (G[X] = X3(J[X], Q, Z + 1)), G;
        },
        G3 = function (J, Q) {
          return X3(J, Q, 0);
        },
        B3 = function (J, Q, Z, X) {
          var G = Q[X],
            B = AQ(J) ? J.slice() : MJ({}, J);
          if (X + 1 === Q.length) {
            var U = Z[X];
            if (((B[U] = B[G]), AQ(B))) B.splice(G, 1);
            else delete B[G];
          } else B[G] = B3(J[G], Q, Z, X + 1);
          return B;
        },
        U3 = function (J, Q, Z) {
          if (Q.length !== Z.length) {
            DQ("copyWithRename() expects paths of the same length");
            return;
          } else
            for (var X = 0; X < Z.length - 1; X++)
              if (Q[X] !== Z[X]) {
                DQ(
                  "copyWithRename() expects paths to be the same except for the deepest key",
                );
                return;
              }
          return B3(J, Q, Z, 0);
        },
        Y3 = function (J, Q, Z, X) {
          if (Z >= Q.length) return X;
          var G = Q[Z],
            B = AQ(J) ? J.slice() : MJ({}, J);
          return (B[G] = Y3(J[G], Q, Z + 1, X)), B;
        },
        H3 = function (J, Q, Z) {
          return Y3(J, Q, 0, Z);
        },
        QY = function (J, Q) {
          var Z = J.memoizedState;
          while (Z !== null && Q > 0) (Z = Z.next), Q--;
          return Z;
        };
      (pz = function (J, Q, Z, X) {
        var G = QY(J, Q);
        if (G !== null) {
          var B = H3(G.memoizedState, Z, X);
          (G.memoizedState = B),
            (G.baseState = B),
            (J.memoizedProps = MJ({}, J.memoizedProps));
          var U = wZ(J, ZJ);
          if (U !== null) _Q(U, J, ZJ, pJ);
        }
      }),
        (oz = function (J, Q, Z) {
          var X = QY(J, Q);
          if (X !== null) {
            var G = G3(X.memoizedState, Z);
            (X.memoizedState = G),
              (X.baseState = G),
              (J.memoizedProps = MJ({}, J.memoizedProps));
            var B = wZ(J, ZJ);
            if (B !== null) _Q(B, J, ZJ, pJ);
          }
        }),
        (rz = function (J, Q, Z, X) {
          var G = QY(J, Q);
          if (G !== null) {
            var B = U3(G.memoizedState, Z, X);
            (G.memoizedState = B),
              (G.baseState = B),
              (J.memoizedProps = MJ({}, J.memoizedProps));
            var U = wZ(J, ZJ);
            if (U !== null) _Q(U, J, ZJ, pJ);
          }
        }),
        (nz = function (J, Q, Z) {
          if (((J.pendingProps = H3(J.memoizedProps, Q, Z)), J.alternate))
            J.alternate.pendingProps = J.pendingProps;
          var X = wZ(J, ZJ);
          if (X !== null) _Q(X, J, ZJ, pJ);
        }),
        (tz = function (J, Q) {
          if (((J.pendingProps = G3(J.memoizedProps, Q)), J.alternate))
            J.alternate.pendingProps = J.pendingProps;
          var Z = wZ(J, ZJ);
          if (Z !== null) _Q(Z, J, ZJ, pJ);
        }),
        (ez = function (J, Q, Z) {
          if (((J.pendingProps = U3(J.memoizedProps, Q, Z)), J.alternate))
            J.alternate.pendingProps = J.pendingProps;
          var X = wZ(J, ZJ);
          if (X !== null) _Q(X, J, ZJ, pJ);
        }),
        (J3 = function (J) {
          var Q = wZ(J, ZJ);
          if (Q !== null) _Q(Q, J, ZJ, pJ);
        }),
        (Q3 = function (J) {
          iz = J;
        }),
        (Z3 = function (J) {
          az = J;
        });
    }
    function PP(J) {
      var Q = gY(J);
      if (Q === null) return null;
      return Q.stateNode;
    }
    function AP(J) {
      return null;
    }
    function EP() {
      return GZ;
    }
    function RP(J) {
      var Q = J.findFiberByHostInstance,
        Z = SJ.ReactCurrentDispatcher;
      return hM({
        bundleType: J.bundleType,
        version: J.version,
        rendererPackageName: J.rendererPackageName,
        rendererConfig: J.rendererConfig,
        overrideHookState: pz,
        overrideHookStateDeletePath: oz,
        overrideHookStateRenamePath: rz,
        overrideProps: nz,
        overridePropsDeletePath: tz,
        overridePropsRenamePath: ez,
        setErrorHandler: Q3,
        setSuspenseHandler: Z3,
        scheduleUpdate: J3,
        currentDispatcherRef: Z,
        findHostInstanceByFiber: PP,
        findFiberByHostInstance: Q || AP,
        findHostInstancesForRefresh: t$,
        scheduleRefresh: r$,
        scheduleRoot: n$,
        setRefreshHandler: o$,
        getCurrentFiber: EP,
        reconcilerVersion: nU,
      });
    }
    var K3 =
      typeof reportError === "function"
        ? reportError
        : function (J) {
            console.error(J);
          };
    function ZY(J) {
      this._internalRoot = J;
    }
    (m9.prototype.render = ZY.prototype.render =
      function (J) {
        var Q = this._internalRoot;
        if (Q === null) throw new Error("Cannot update an unmounted root.");
        {
          if (typeof arguments[1] === "function")
            M(
              "render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().",
            );
          else if (y9(arguments[1]))
            M(
              "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.",
            );
          else if (typeof arguments[1] !== "undefined")
            M(
              "You passed a second argument to root.render(...) but it only accepts one argument.",
            );
          var Z = Q.containerInfo;
          if (Z.nodeType !== VQ) {
            var X = cz(Q.current);
            if (X) {
              if (X.parentNode !== Z)
                M(
                  "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.",
                );
            }
          }
        }
        x7(J, Q, null, null);
      }),
      (m9.prototype.unmount = ZY.prototype.unmount =
        function () {
          if (typeof arguments[0] === "function")
            M(
              "unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().",
            );
          var J = this._internalRoot;
          if (J !== null) {
            this._internalRoot = null;
            var Q = J.containerInfo;
            if (Ez())
              M(
                "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.",
              );
            O1(function () {
              x7(null, J, null, null);
            }),
              UK(Q);
          }
        });
    function LP(J, Q) {
      if (!y9(J))
        throw new Error(
          "createRoot(...): Target container is not a DOM element.",
        );
      W3(J);
      var Z = !1,
        X = !1,
        G = "",
        B = K3,
        U = null;
      if (Q !== null && Q !== void 0) {
        if (Q.hydrate)
          DQ(
            "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.",
          );
        else if (typeof Q === "object" && Q !== null && Q.$$typeof === S0)
          M(
            "You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:\n\n  let root = createRoot(domContainer);\n  root.render(<App />);",
          );
        if (Q.unstable_strictMode === !0) Z = !0;
        if (Q.identifierPrefix !== void 0) G = Q.identifierPrefix;
        if (Q.onRecoverableError !== void 0) B = Q.onRecoverableError;
        if (Q.transitionCallbacks !== void 0) U = Q.transitionCallbacks;
      }
      var Y = mz(J, g8, null, Z, X, G, B);
      _8(Y.current, J);
      var H = J.nodeType === VQ ? J.parentNode : J;
      return k6(H), new ZY(Y);
    }
    function m9(J) {
      this._internalRoot = J;
    }
    function FP(J) {
      if (J) TV(J);
    }
    m9.prototype.unstable_scheduleHydration = FP;
    function IP(J, Q, Z) {
      if (!y9(J))
        throw new Error(
          "hydrateRoot(...): Target container is not a DOM element.",
        );
      if ((W3(J), Q === void 0))
        M(
          "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)",
        );
      var X = Z != null ? Z : null,
        G = (Z != null && Z.hydratedSources) || null,
        B = !1,
        U = !1,
        Y = "",
        H = K3;
      if (Z !== null && Z !== void 0) {
        if (Z.unstable_strictMode === !0) B = !0;
        if (Z.identifierPrefix !== void 0) Y = Z.identifierPrefix;
        if (Z.onRecoverableError !== void 0) H = Z.onRecoverableError;
      }
      var W = yz(Q, null, J, g8, X, B, U, Y, H);
      if ((_8(W.current, J), k6(J), G))
        for (var z = 0; z < G.length; z++) {
          var j = G[z];
          SD(W, j);
        }
      return new m9(W);
    }
    function y9(J) {
      return !!(
        J &&
        (J.nodeType === IZ || J.nodeType === t0 || J.nodeType === YX || !JZ)
      );
    }
    function w7(J) {
      return !!(
        J &&
        (J.nodeType === IZ ||
          J.nodeType === t0 ||
          J.nodeType === YX ||
          (J.nodeType === VQ && J.nodeValue === " react-mount-point-unstable "))
      );
    }
    function W3(J) {
      {
        if (
          J.nodeType === IZ &&
          J.tagName &&
          J.tagName.toUpperCase() === "BODY"
        )
          M(
            "createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.",
          );
        if (c6(J))
          if (J._reactRootContainer)
            M(
              "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.",
            );
          else
            M(
              "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.",
            );
      }
    }
    var xP = SJ.ReactCurrentOwner,
      z3;
    z3 = function (J) {
      if (J._reactRootContainer && J.nodeType !== VQ) {
        var Q = cz(J._reactRootContainer.current);
        if (Q) {
          if (Q.parentNode !== J)
            M(
              "render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.",
            );
        }
      }
      var Z = !!J._reactRootContainer,
        X = XY(J),
        G = !!(X && h1(X));
      if (G && !Z)
        M(
          "render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.",
        );
      if (J.nodeType === IZ && J.tagName && J.tagName.toUpperCase() === "BODY")
        M(
          "render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.",
        );
    };
    function XY(J) {
      if (!J) return null;
      if (J.nodeType === t0) return J.documentElement;
      else return J.firstChild;
    }
    function M3() {}
    function wP(J, Q, Z, X, G) {
      if (G) {
        if (typeof X === "function") {
          var B = X;
          X = function () {
            var O = s9(U);
            B.call(O);
          };
        }
        var U = yz(Q, X, J, u1, null, !1, !1, "", M3);
        (J._reactRootContainer = U), _8(U.current, J);
        var Y = J.nodeType === VQ ? J.parentNode : J;
        return k6(Y), O1(), U;
      } else {
        var H;
        while ((H = J.lastChild)) J.removeChild(H);
        if (typeof X === "function") {
          var W = X;
          X = function () {
            var O = s9(z);
            W.call(O);
          };
        }
        var z = mz(J, u1, null, !1, !1, "", M3);
        (J._reactRootContainer = z), _8(z.current, J);
        var j = J.nodeType === VQ ? J.parentNode : J;
        return (
          k6(j),
          O1(function () {
            x7(Q, z, Z, X);
          }),
          z
        );
      }
    }
    function _P(J, Q) {
      if (J !== null && typeof J !== "function")
        M(
          "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
          Q,
          J,
        );
    }
    function l9(J, Q, Z, X, G) {
      z3(Z), _P(G === void 0 ? null : G, "render");
      var B = Z._reactRootContainer,
        U;
      if (!B) U = wP(Z, Q, J, G, X);
      else {
        if (((U = B), typeof G === "function")) {
          var Y = G;
          G = function () {
            var H = s9(U);
            Y.call(H);
          };
        }
        x7(Q, U, J, G);
      }
      return s9(U);
    }
    function SP(J) {
      {
        var Q = xP.current;
        if (Q !== null && Q.stateNode !== null) {
          var Z = Q.stateNode._warnedAboutRefsInRender;
          if (!Z)
            M(
              "%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
              fJ(Q.type) || "A component",
            );
          Q.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      if (J == null) return null;
      if (J.nodeType === IZ) return J;
      return VP(J, "findDOMNode");
    }
    function CP(J, Q, Z) {
      if (
        (M(
          "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
        ),
        !w7(Q))
      )
        throw new Error("Target container is not a DOM element.");
      {
        var X = c6(Q) && Q._reactRootContainer === void 0;
        if (X)
          M(
            "You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?",
          );
      }
      return l9(null, J, Q, !0, Z);
    }
    function vP(J, Q, Z) {
      if (
        (M(
          "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createrootinstead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
        ),
        !w7(Q))
      )
        throw new Error("Target container is not a DOM element.");
      {
        var X = c6(Q) && Q._reactRootContainer === void 0;
        if (X)
          M(
            "You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?",
          );
      }
      return l9(null, J, Q, !1, Z);
    }
    function NP(J, Q, Z, X) {
      if (
        (M(
          "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
        ),
        !w7(Z))
      )
        throw new Error("Target container is not a DOM element.");
      if (J == null || !RM(J))
        throw new Error("parentComponent must be a valid React Component");
      return l9(J, Q, Z, !1, X);
    }
    function bP(J) {
      if (!w7(J))
        throw new Error(
          "unmountComponentAtNode(...): Target container is not a DOM element.",
        );
      {
        var Q = c6(J) && J._reactRootContainer === void 0;
        if (Q)
          M(
            "You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?",
          );
      }
      if (J._reactRootContainer) {
        {
          var Z = XY(J),
            X = Z && !h1(Z);
          if (X)
            M(
              "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.",
            );
        }
        return (
          O1(function () {
            l9(null, null, J, !1, function () {
              (J._reactRootContainer = null), UK(J);
            });
          }),
          !0
        );
      } else {
        {
          var G = XY(J),
            B = !!(G && h1(G)),
            U =
              J.nodeType === IZ &&
              w7(J.parentNode) &&
              !!J.parentNode._reactRootContainer;
          if (B)
            M(
              "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
              U
                ? "You may have accidentally passed in a React root node instead of its container."
                : "Instead, have the parent component update its state and rerender in order to remove this component.",
            );
        }
        return !1;
      }
    }
    if (
      (xV(qP),
      _V(OP),
      SV(jP),
      CV(O0),
      vV(LV),
      typeof Map !== "function" ||
        Map.prototype == null ||
        typeof Map.prototype.forEach !== "function" ||
        typeof Set !== "function" ||
        Set.prototype == null ||
        typeof Set.prototype.clear !== "function" ||
        typeof Set.prototype.forEach !== "function")
    )
      M(
        "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
      );
    zM(NO), qM(kU, I$, O1);
    function kP(J, Q) {
      var Z =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y9(Q)) throw new Error("Target container is not a DOM element.");
      return MP(J, Q, null, Z);
    }
    function gP(J, Q, Z, X) {
      return NP(J, Q, Z, X);
    }
    var GY = { usingClientEntryPoint: !1, Events: [h1, V5, S8, LY, FY, kU] };
    function TP(J, Q) {
      if (!GY.usingClientEntryPoint)
        M(
          'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".You should instead import it from "react-dom/client".',
        );
      return LP(J, Q);
    }
    function hP(J, Q, Z) {
      if (!GY.usingClientEntryPoint)
        M(
          'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".',
        );
      return IP(J, Q, Z);
    }
    function fP(J) {
      if (Ez())
        M(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.",
        );
      return O1(J);
    }
    var uP = RP({
      findFiberByHostInstance: $4,
      bundleType: 1,
      version: nU,
      rendererPackageName: "react-dom",
    });
    if (!uP && fQ && window.top === window.self) {
      if (
        (navigator.userAgent.indexOf("Chrome") > -1 &&
          navigator.userAgent.indexOf("Edge") === -1) ||
        navigator.userAgent.indexOf("Firefox") > -1
      ) {
        var V3 = window.location.protocol;
        if (/^(https?|file):$/.test(V3))
          console.info(
            "%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" +
              (V3 === "file:"
                ? "\nYou might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faqhttps://reactjs.org/link/react-devtools-faq"
                : ""),
            "font-weight:bold",
          );
      }
    }
    if (
      ((pP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = GY),
      (pP.createPortal = kP),
      (pP.createRoot = TP),
      (pP.findDOMNode = SP),
      (pP.flushSync = fP),
      (pP.hydrate = CP),
      (pP.hydrateRoot = hP),
      (pP.render = vP),
      (pP.unmountComponentAtNode = bP),
      (pP.unstable_batchedUpdates = kU),
      (pP.unstable_renderSubtreeIntoContainer = gP),
      (pP.version = nU),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
          "function")
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
});
var D3 = S7((oP) => {
  var f5 = l0(j3(), 1);
  (C7 = f5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
    (oP.createRoot = function (NJ, c) {
      C7.usingClientEntryPoint = !0;
      try {
        return f5.createRoot(NJ, c);
      } finally {
        C7.usingClientEntryPoint = !1;
      }
    }),
    (oP.hydrateRoot = function (NJ, c, SJ) {
      C7.usingClientEntryPoint = !0;
      try {
        return f5.hydrateRoot(NJ, c, SJ);
      } finally {
        C7.usingClientEntryPoint = !1;
      }
    });
  var C7;
});
var v7 = S7((rP) => {
  var NJ = l0(i9(), 1);
  (function () {
    var c = Symbol.for("react.element"),
      SJ = Symbol.for("react.portal"),
      YQ = Symbol.for("react.fragment"),
      tJ = Symbol.for("react.strict_mode"),
      DQ = Symbol.for("react.profiler"),
      M = Symbol.for("react.provider"),
      mZ = Symbol.for("react.context"),
      HJ = Symbol.for("react.forward_ref"),
      a = Symbol.for("react.suspense"),
      ZQ = Symbol.for("react.suspense_list"),
      s = Symbol.for("react.memo"),
      OJ = Symbol.for("react.lazy"),
      l = Symbol.for("react.offscreen"),
      FJ = Symbol.iterator,
      yZ = "@@iterator";
    function U0(q) {
      if (q === null || typeof q !== "object") return null;
      var w = (FJ && q[FJ]) || q[yZ];
      if (typeof w === "function") return w;
      return null;
    }
    var TQ = NJ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function IJ(q) {
      {
        for (
          var w = arguments.length, N = new Array(w > 1 ? w - 1 : 0), p = 1;
          p < w;
          p++
        )
          N[p - 1] = arguments[p];
        JJ("error", q, N);
      }
    }
    function JJ(q, w, N) {
      {
        var p = TQ.ReactDebugCurrentFrame,
          n = p.getStackAddendum();
        if (n !== "") (w += "%s"), (N = N.concat([n]));
        var wJ = N.map(function (KJ) {
          return String(KJ);
        });
        wJ.unshift("Warning: " + w),
          Function.prototype.apply.call(console[q], console, wJ);
      }
    }
    var oJ = !1,
      PJ = !1,
      WQ = !1,
      xJ = !1,
      Y0 = !1,
      XQ;
    XQ = Symbol.for("react.module.reference");
    function SQ(q) {
      if (typeof q === "string" || typeof q === "function") return !0;
      if (
        q === YQ ||
        q === DQ ||
        Y0 ||
        q === tJ ||
        q === a ||
        q === ZQ ||
        xJ ||
        q === l ||
        oJ ||
        PJ ||
        WQ
      )
        return !0;
      if (typeof q === "object" && q !== null) {
        if (
          q.$$typeof === OJ ||
          q.$$typeof === s ||
          q.$$typeof === M ||
          q.$$typeof === mZ ||
          q.$$typeof === HJ ||
          q.$$typeof === XQ ||
          q.getModuleId !== void 0
        )
          return !0;
      }
      return !1;
    }
    function $Q(q, w, N) {
      var p = q.displayName;
      if (p) return p;
      var n = w.displayName || w.name || "";
      return n !== "" ? N + "(" + n + ")" : N;
    }
    function uJ(q) {
      return q.displayName || "Context";
    }
    function QJ(q) {
      if (q == null) return null;
      if (typeof q.tag === "number")
        IJ(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
        );
      if (typeof q === "function") return q.displayName || q.name || null;
      if (typeof q === "string") return q;
      switch (q) {
        case YQ:
          return "Fragment";
        case SJ:
          return "Portal";
        case DQ:
          return "Profiler";
        case tJ:
          return "StrictMode";
        case a:
          return "Suspense";
        case ZQ:
          return "SuspenseList";
      }
      if (typeof q === "object")
        switch (q.$$typeof) {
          case mZ:
            var w = q;
            return uJ(w) + ".Consumer";
          case M:
            var N = q;
            return uJ(N._context) + ".Provider";
          case HJ:
            return $Q(q, q.render, "ForwardRef");
          case s:
            var p = q.displayName || null;
            if (p !== null) return p;
            return QJ(q.type) || "Memo";
          case OJ: {
            var n = q,
              wJ = n._payload,
              KJ = n._init;
            try {
              return QJ(KJ(wJ));
            } catch (WJ) {
              return null;
            }
          }
        }
      return null;
    }
    var iJ = Object.assign,
      e = 0,
      WZ,
      w0,
      hQ,
      H0,
      eQ,
      lZ,
      JZ;
    function RZ() {}
    RZ.__reactDisabledLog = !0;
    function $1() {
      {
        if (e === 0) {
          (WZ = console.log),
            (w0 = console.info),
            (hQ = console.warn),
            (H0 = console.error),
            (eQ = console.group),
            (lZ = console.groupCollapsed),
            (JZ = console.groupEnd);
          var q = { configurable: !0, enumerable: !0, value: RZ, writable: !0 };
          Object.defineProperties(console, {
            info: q,
            log: q,
            warn: q,
            error: q,
            group: q,
            groupCollapsed: q,
            groupEnd: q,
          });
        }
        e++;
      }
    }
    function _0() {
      {
        if ((e--, e === 0)) {
          var q = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: iJ({}, q, { value: WZ }),
            info: iJ({}, q, { value: w0 }),
            warn: iJ({}, q, { value: hQ }),
            error: iJ({}, q, { value: H0 }),
            group: iJ({}, q, { value: eQ }),
            groupCollapsed: iJ({}, q, { value: lZ }),
            groupEnd: iJ({}, q, { value: JZ }),
          });
        }
        if (e < 0)
          IJ(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
          );
      }
    }
    var cZ = TQ.ReactCurrentDispatcher,
      K0;
    function vZ(q, w, N) {
      {
        if (K0 === void 0)
          try {
            throw Error();
          } catch (n) {
            var p = n.stack.trim().match(/\n( *(at )?)/);
            K0 = (p && p[1]) || "";
          }
        return "\n" + K0 + q;
      }
    }
    var zZ = !1,
      iZ;
    {
      var QZ = typeof WeakMap === "function" ? WeakMap : Map;
      iZ = new QZ();
    }
    function NZ(q, w) {
      if (!q || zZ) return "";
      {
        var N = iZ.get(q);
        if (N !== void 0) return N;
      }
      var p;
      zZ = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var wJ;
      (wJ = cZ.current), (cZ.current = null), $1();
      try {
        if (w) {
          var KJ = function () {
            throw Error();
          };
          if (
            (Object.defineProperty(KJ.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect === "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(KJ, []);
            } catch (bZ) {
              p = bZ;
            }
            Reflect.construct(q, [], KJ);
          } else {
            try {
              KJ.call();
            } catch (bZ) {
              p = bZ;
            }
            q.call(KJ.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bZ) {
            p = bZ;
          }
          q();
        }
      } catch (bZ) {
        if (bZ && p && typeof bZ.stack === "string") {
          var WJ = bZ.stack.split("\n"),
            BQ = p.stack.split("\n"),
            hJ = WJ.length - 1,
            jJ = BQ.length - 1;
          while (hJ >= 1 && jJ >= 0 && WJ[hJ] !== BQ[jJ]) jJ--;
          for (; hJ >= 1 && jJ >= 0; hJ--, jJ--)
            if (WJ[hJ] !== BQ[jJ]) {
              if (hJ !== 1 || jJ !== 1)
                do
                  if ((hJ--, jJ--, jJ < 0 || WJ[hJ] !== BQ[jJ])) {
                    var XZ = "\n" + WJ[hJ].replace(" at new ", " at ");
                    if (q.displayName && XZ.includes("<anonymous>"))
                      XZ = XZ.replace("<anonymous>", q.displayName);
                    if (typeof q === "function") iZ.set(q, XZ);
                    return XZ;
                  }
                while (hJ >= 1 && jJ >= 0);
              break;
            }
        }
      } finally {
        (zZ = !1), (cZ.current = wJ), _0(), (Error.prepareStackTrace = n);
      }
      var C0 = q ? q.displayName || q.name : "",
        Z4 = C0 ? vZ(C0) : "";
      if (typeof q === "function") iZ.set(q, Z4);
      return Z4;
    }
    function fQ(q, w, N) {
      return NZ(q, !1);
    }
    function uQ(q) {
      var w = q.prototype;
      return !!(w && w.isReactComponent);
    }
    function HQ(q, w, N) {
      if (q == null) return "";
      if (typeof q === "function") return NZ(q, uQ(q));
      if (typeof q === "string") return vZ(q);
      switch (q) {
        case a:
          return vZ("Suspense");
        case ZQ:
          return vZ("SuspenseList");
      }
      if (typeof q === "object")
        switch (q.$$typeof) {
          case HJ:
            return fQ(q.render);
          case s:
            return HQ(q.type, w, N);
          case OJ: {
            var p = q,
              n = p._payload,
              wJ = p._init;
            try {
              return HQ(wJ(n), w, N);
            } catch (KJ) {}
          }
        }
      return "";
    }
    var dQ = Object.prototype.hasOwnProperty,
      sQ = {},
      zQ = TQ.ReactDebugCurrentFrame;
    function MZ(q) {
      if (q) {
        var w = q._owner,
          N = HQ(q.type, q._source, w ? w.type : null);
        zQ.setExtraStackFrame(N);
      } else zQ.setExtraStackFrame(null);
    }
    function P1(q, w, N, p, n) {
      {
        var wJ = Function.call.bind(dQ);
        for (var KJ in q)
          if (wJ(q, KJ)) {
            var WJ = void 0;
            try {
              if (typeof q[KJ] !== "function") {
                var BQ = Error(
                  (p || "React class") +
                    ": " +
                    N +
                    " type `" +
                    KJ +
                    "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                    typeof q[KJ] +
                    "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
                );
                throw ((BQ.name = "Invariant Violation"), BQ);
              }
              WJ = q[KJ](
                w,
                KJ,
                p,
                N,
                null,
                "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
              );
            } catch (hJ) {
              WJ = hJ;
            }
            if (WJ && !(WJ instanceof Error))
              MZ(n),
                IJ(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  p || "React class",
                  N,
                  KJ,
                  typeof WJ,
                ),
                MZ(null);
            if (WJ instanceof Error && !(WJ.message in sQ))
              (sQ[WJ.message] = !0),
                MZ(n),
                IJ("Failed %s type: %s", N, WJ.message),
                MZ(null);
          }
      }
    }
    var A1 = Array.isArray;
    function aZ(q) {
      return A1(q);
    }
    function ZZ(q) {
      {
        var w = typeof Symbol === "function" && Symbol.toStringTag,
          N = (w && q[Symbol.toStringTag]) || q.constructor.name || "Object";
        return N;
      }
    }
    function pZ(q) {
      try {
        return VZ(q), !1;
      } catch (w) {
        return !0;
      }
    }
    function VZ(q) {
      return "" + q;
    }
    function oZ(q) {
      if (pZ(q))
        return (
          IJ(
            "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
            ZZ(q),
          ),
          VZ(q)
        );
    }
    var MQ = TQ.ReactCurrentOwner,
      rZ = { key: !0, ref: !0, __self: !0, __source: !0 },
      W0,
      c0,
      v;
    v = {};
    function m(q) {
      if (dQ.call(q, "ref")) {
        var w = Object.getOwnPropertyDescriptor(q, "ref").get;
        if (w && w.isReactWarning) return !1;
      }
      return q.ref !== void 0;
    }
    function UJ(q) {
      if (dQ.call(q, "key")) {
        var w = Object.getOwnPropertyDescriptor(q, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return q.key !== void 0;
    }
    function CJ(q, w) {
      if (
        typeof q.ref === "string" &&
        MQ.current &&
        w &&
        MQ.current.stateNode !== w
      ) {
        var N = QJ(MQ.current.type);
        if (!v[N])
          IJ(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            QJ(MQ.current.type),
            q.ref,
          ),
            (v[N] = !0);
      }
    }
    function dJ(q, w) {
      {
        var N = function () {
          if (!W0)
            (W0 = !0),
              IJ(
                "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                w,
              );
        };
        (N.isReactWarning = !0),
          Object.defineProperty(q, "key", { get: N, configurable: !0 });
      }
    }
    function CQ(q, w) {
      {
        var N = function () {
          if (!c0)
            (c0 = !0),
              IJ(
                "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                w,
              );
        };
        (N.isReactWarning = !0),
          Object.defineProperty(q, "ref", { get: N, configurable: !0 });
      }
    }
    var GQ = function (q, w, N, p, n, wJ, KJ) {
      var WJ = { $$typeof: c, type: q, key: w, ref: N, props: KJ, _owner: wJ };
      if (
        ((WJ._store = {}),
        Object.defineProperty(WJ._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(WJ, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p,
        }),
        Object.defineProperty(WJ, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: n,
        }),
        Object.freeze)
      )
        Object.freeze(WJ.props), Object.freeze(WJ);
      return WJ;
    };
    function LZ(q, w, N, p, n) {
      {
        var wJ,
          KJ = {},
          WJ = null,
          BQ = null;
        if (N !== void 0) oZ(N), (WJ = "" + N);
        if (UJ(w)) oZ(w.key), (WJ = "" + w.key);
        if (m(w)) (BQ = w.ref), CJ(w, n);
        for (wJ in w)
          if (dQ.call(w, wJ) && !rZ.hasOwnProperty(wJ)) KJ[wJ] = w[wJ];
        if (q && q.defaultProps) {
          var hJ = q.defaultProps;
          for (wJ in hJ) if (KJ[wJ] === void 0) KJ[wJ] = hJ[wJ];
        }
        if (WJ || BQ) {
          var jJ =
            typeof q === "function" ? q.displayName || q.name || "Unknown" : q;
          if (WJ) dJ(KJ, jJ);
          if (BQ) CQ(KJ, jJ);
        }
        return GQ(q, WJ, BQ, n, p, MQ.current, KJ);
      }
    }
    var { ReactCurrentOwner: sJ, ReactDebugCurrentFrame: qZ } = TQ;
    function mJ(q) {
      if (q) {
        var w = q._owner,
          N = HQ(q.type, q._source, w ? w.type : null);
        qZ.setExtraStackFrame(N);
      } else qZ.setExtraStackFrame(null);
    }
    var rJ = !1;
    function e1(q) {
      return typeof q === "object" && q !== null && q.$$typeof === c;
    }
    function E1() {
      {
        if (sJ.current) {
          var q = QJ(sJ.current.type);
          if (q) return "\n\nCheck the render method of `" + q + "`.";
        }
        return "";
      }
    }
    function J4(q) {
      {
        if (q !== void 0) {
          var w = q.fileName.replace(/^.*[\\\/]/, ""),
            N = q.lineNumber;
          return "\n\nCheck your code at " + w + ":" + N + ".";
        }
        return "";
      }
    }
    var g4 = {};
    function u5(q) {
      {
        var w = E1();
        if (!w) {
          var N = typeof q === "string" ? q : q.displayName || q.name;
          if (N) w = "\n\nCheck the top-level render call using <" + N + ">.";
        }
        return w;
      }
    }
    function z0(q, w) {
      {
        if (!q._store || q._store.validated || q.key != null) return;
        q._store.validated = !0;
        var N = u5(w);
        if (g4[N]) return;
        g4[N] = !0;
        var p = "";
        if (q && q._owner && q._owner !== sJ.current)
          p = " It was passed a child from " + QJ(q._owner.type) + ".";
        mJ(q),
          IJ(
            'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
            N,
            p,
          ),
          mJ(null);
      }
    }
    function i0(q, w) {
      {
        if (typeof q !== "object") return;
        if (aZ(q))
          for (var N = 0; N < q.length; N++) {
            var p = q[N];
            if (e1(p)) z0(p, w);
          }
        else if (e1(q)) {
          if (q._store) q._store.validated = !0;
        } else if (q) {
          var n = U0(q);
          if (typeof n === "function") {
            if (n !== q.entries) {
              var wJ = n.call(q),
                KJ;
              while (!(KJ = wJ.next()).done) if (e1(KJ.value)) z0(KJ.value, w);
            }
          }
        }
      }
    }
    function T4(q) {
      {
        var w = q.type;
        if (w === null || w === void 0 || typeof w === "string") return;
        var N;
        if (typeof w === "function") N = w.propTypes;
        else if (
          typeof w === "object" &&
          (w.$$typeof === HJ || w.$$typeof === s)
        )
          N = w.propTypes;
        else return;
        if (N) {
          var p = QJ(w);
          P1(N, q.props, "prop", p, q);
        } else if (w.PropTypes !== void 0 && !rJ) {
          rJ = !0;
          var n = QJ(w);
          IJ(
            "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
            n || "Unknown",
          );
        }
        if (
          typeof w.getDefaultProps === "function" &&
          !w.getDefaultProps.isReactClassApproved
        )
          IJ(
            "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.",
          );
      }
    }
    function h4(q) {
      {
        var w = Object.keys(q.props);
        for (var N = 0; N < w.length; N++) {
          var p = w[N];
          if (p !== "children" && p !== "key") {
            mJ(q),
              IJ(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                p,
              ),
              mJ(null);
            break;
          }
        }
        if (q.ref !== null)
          mJ(q),
            IJ("Invalid attribute `ref` supplied to `React.Fragment`."),
            mJ(null);
      }
    }
    function Q4(q, w, N, p, n, wJ) {
      {
        var KJ = SQ(q);
        if (!KJ) {
          var WJ = "";
          if (
            q === void 0 ||
            (typeof q === "object" && q !== null && Object.keys(q).length === 0)
          )
            WJ +=
              " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          var BQ = J4(n);
          if (BQ) WJ += BQ;
          else WJ += E1();
          var hJ;
          if (q === null) hJ = "null";
          else if (aZ(q)) hJ = "array";
          else if (q !== void 0 && q.$$typeof === c)
            (hJ = "<" + (QJ(q.type) || "Unknown") + " />"),
              (WJ =
                " Did you accidentally export a JSX literal instead of a component?");
          else hJ = typeof q;
          IJ(
            "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            hJ,
            WJ,
          );
        }
        var jJ = LZ(q, w, N, n, wJ);
        if (jJ == null) return jJ;
        if (KJ) {
          var XZ = w.children;
          if (XZ !== void 0)
            if (p)
              if (aZ(XZ)) {
                for (var C0 = 0; C0 < XZ.length; C0++) i0(XZ[C0], q);
                if (Object.freeze) Object.freeze(XZ);
              } else
                IJ(
                  "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.",
                );
            else i0(XZ, q);
        }
        if (q === YQ) h4(jJ);
        else T4(jJ);
        return jJ;
      }
    }
    var S0 = Q4;
    (rP.Fragment = YQ), (rP.jsxDEV = S0);
  })();
});
var A3 = l0(D3(), 1);
var $3 = l0(i9(), 1),
  tQ = l0(v7(), 1),
  nP = () => {
    const [NJ, c] = $3.useState(!0);
    return tQ.jsxDEV(
      "html",
      {
        children: [
          tQ.jsxDEV(
            "head",
            {
              children: [
                tQ.jsxDEV(
                  "meta",
                  { charSet: "utf-8" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                tQ.jsxDEV(
                  "title",
                  { children: "Bun, Elysia & React" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                tQ.jsxDEV(
                  "meta",
                  { name: "description", content: "Bun, Elysia & React" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                tQ.jsxDEV(
                  "meta",
                  {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                  },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                tQ.jsxDEV(
                  "link",
                  { rel: "stylesheet", href: "/styles/Help.css" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                tQ.jsxDEV(
                  "link",
                  { rel: "icon", href: "/assets/favicon.ico" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
              ],
            },
            void 0,
            !0,
            void 0,
            this,
          ),
          tQ.jsxDEV(
            "body",
            {
              children:
                NJ &&
                tQ.jsxDEV(
                  "div",
                  {
                    className: "modal-overlay",
                    children: tQ.jsxDEV(
                      "div",
                      {
                        className: "modal-content",
                        children: [
                          tQ.jsxDEV(
                            "h2",
                            { children: "Help" },
                            void 0,
                            !1,
                            void 0,
                            this,
                          ),
                          tQ.jsxDEV(
                            "div",
                            {
                              className: "help-container",
                              children: tQ.jsxDEV(
                                "div",
                                {
                                  className: "info",
                                  children: tQ.jsxDEV(
                                    "h3",
                                    { children: "This is help popup" },
                                    void 0,
                                    !1,
                                    void 0,
                                    this,
                                  ),
                                },
                                void 0,
                                !1,
                                void 0,
                                this,
                              ),
                            },
                            void 0,
                            !1,
                            void 0,
                            this,
                          ),
                          tQ.jsxDEV(
                            "button",
                            {
                              className: "close",
                              onClick: () => {
                                c(!1);
                              },
                              children: "X",
                            },
                            void 0,
                            !1,
                            void 0,
                            this,
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      void 0,
                      this,
                    ),
                  },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
            },
            void 0,
            !1,
            void 0,
            this,
          ),
        ],
      },
      void 0,
      !0,
      void 0,
      this,
    );
  },
  P3 = nP;
var E3 = l0(v7(), 1);
A3.hydrateRoot(document, E3.jsxDEV(P3, {}, void 0, !1, void 0, this));
